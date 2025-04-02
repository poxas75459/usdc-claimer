/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "36V3F44x6Pwtm8XCGfiiQBr1yV7Vm4562UX9g4nKiGRzhLMQt25qyMVGWddsQ4nXb1bDVSvVHSq7X231Y1KEuDWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLdb5HeJAdCdtXrQY95cQtVRr7QBdfHQq7irq9XGKdxstwqiPspX6ciAAWyLtdRE1E1UQAE4onDfL4MrhS8RRUP",
  "key1": "hKnyhmfTMrnNhDjVgCe64wUxSvAJFgak52qPRY2XcVXwAF6NNL8yPpNYkJ8uczqt7NNAdk32K6H5PDJjUgzRaXL",
  "key2": "4tZAn6Et3dxeFV5J8twUZYYQgn6io3f3V7PmrvYSmwAxvZvdUFi6SEUFVFFWVAHFXrKudKYLzUKrCqZc5JJChVw5",
  "key3": "3fgD5TW62x37M7UPtjvJZ8nmfiGyKbjsorays6SeiwYrmGweRov61EkwQr5c98ia5EF8NMScdx1VrQ8uuwteBX2L",
  "key4": "3Rdo94gaH5aqVqEQQwXvdA9QYbeW7LBnBA98gzeg94eWLReBNkziRCPddap9EKvRzv5rb4K1RJQ4H297nCapd5Ri",
  "key5": "4oFrYjsh8hyySt9wM8v3qUG3xguKcxPZxaFrwYnnP8juxpb3Qhi1xWX2xNBvJKD1z8GFbqLQSxZ2pHZL7wNmvQt9",
  "key6": "2yqazLhm8MimHCJkeRpPoCm4cnV4gDtJbTi1NJJPiRcNLvcN9ELQ3VSX34wi7UFR84UBoyQhg7YLPfQpMbZQQoXV",
  "key7": "4nev6cDM4NzojewgXMYkoP4EKZ4pTymeT9VWeazQGZp5wVc7noizoVcqtnjh3RD1N7kVa5vuiBPDT957haAXSmsc",
  "key8": "3Mra6ud3eyCt3mF2opMiCCaRE9XBwoLdGxzXM2UjHeeyNA94cyP4GpdRao6HNCfK731CgGgdwk5AiToKo7nFPiDJ",
  "key9": "5PVnE2QTxwfsKBBn7ohwPizi2suEXJQpVv23RL7LzYDakYR4kqm7QfiDAKi1otdqTkoqLgks7jYgModVoqACRhne",
  "key10": "56WgXcUASMf7d4aSNUPXVoQfBGhg7Mqejd4AP69zZz3SyTUTYLLpByEanxWF5ahryBYu1vYqY8GzK9WeoP6pxiwX",
  "key11": "2nrJfAHAxqBr6AMr5zmBBrFJBF7i3zufvpnygoD6vrhtMYmJKa6rYQXe3RqMczJ7jGb9JZaSHu6dvoDC2voaSiBL",
  "key12": "5LksU8x3K1i5cVwWPEkKugKUrsmX1CYZYFduXNS7Sqy1XPYfLacFhvhC355RDZ5kS15hCrDL7VjRvTekxv4vvDRP",
  "key13": "2mxV3an3y6fFa3zsbSo6cf5HQKw2FL33SUysGdSTnafjyZN3Ci826xaLpHb4FWXPx93xaen51GT1vhKCdrDvHskc",
  "key14": "6467toLaLaWSbxVyZ9pp5fx5renBgyiwddXUxPSrNkL2PFzEMCW1qx4ReJcJdfetSgorTy1WmNsp7GtYvhngxeNp",
  "key15": "2vnqfQN3rhYbmMPYpntUDUcatwWhxcHpgPuXTPpm5LYndZRkSkuSEqVaLrX3ZTwFNAKZLW3fnsZn54NaHwPCS8wD",
  "key16": "3fRJCZYJu9ByYK6XSxvVUs7q6MfesNoVNEoAS2Ks5yGVjwuNup3esZAwPoyWkJV9G6kgHpAU5vcojgfajFXnUtm2",
  "key17": "5cDnF3UTGQ1K5tjYVshhYPZtoTKTwvR6gJfZnWtZQSpe7Nzaqc9GvnxyNJrHTmCXhkjKrC2J1PNkTLiaanz8VLaw",
  "key18": "5cuLu5xTDVpzYgRq7qNjVnVZrjmpWavfRgtNN72TeQBE4fQJGa1aSU9WGoKy8Pp7vqKf9NTebV1S33rEbQA296aq",
  "key19": "MUSMWjdBUbCff1822R4YPPiz16W36GE5Ui5NFpjxhUYAvzYhMxHLDowTSHZ1auE3qawvwrAzEX3tUVAYiLfgTux",
  "key20": "5p6h8b8GAgmRPJSUtWBQrJb9qweZAuEj2UgENoxeS6Uwb99nqKqSwbs3hiHe999CT25iQMc6gub8PexWrmJJ833A",
  "key21": "4KBGXSvqw7zB4NnJwojyPx7NpwZRKHuQ5cMgqmSzs8G3iKqe3QHbe6yQ3fTSPMe5TLDhGguT6JrvumsahrAgHgG5",
  "key22": "2Yx6dozWJvxK93mxWwVCeGE6EB1cKqckoDJx2v1eJSGabiX1HDoq3wbrVACdrqnwYBBuiAq5R4d9MJ8cUzaQW4UM",
  "key23": "4d8mFZ4voPB9VaaeBqsdt4fdaP9S7KzHvF71Gwj37xhDwTMyKHHmz9p2hHvrN7DfsZZV9fGNXzPA3Sp9CPRuarrz",
  "key24": "rbQP8rFpvuQxJMMWv7vMzPHqQnJB71YvvRLmoexvEBxbyfX5hSSTMf38Z1nx72NejCkgajGMXMzEoxPqMCJoCaM",
  "key25": "4KbZGs3zdgePyLbPV3LC9YiSTdVd2m8bBqpGMDLiRyoXrxERsVVUu3AdQuikdHoCXYNuwCHcf2BZx9rNS8uSomZh",
  "key26": "23cu7M8JpU3EPQBYYXDCA83QGDH9BuVQaUThbb9x6TYHJbrZ3FUcak87p81fSYvoXsVJxJya2RhJZ6GHTVQ572YU",
  "key27": "s2d46pf9ngwfbBWmZfaT6jAz4hxDpMEKE8necf4HnySKmcxZSBB2ogp386EAMNLNukyp7ky48K8xxBRuD3Hxcev",
  "key28": "4tMgeJPTxz1FWSBQDBXAavPcxyc4SLvA4VMRdXC7WuVcTS3jbzupvYHzy8BnSp75Q42cfWmfw7zda9eAsAT79i6Z",
  "key29": "4G5ub4N84DZ8jS8YriyMJZCzHorkVJMbn7v9PgoZwpiDGaCanpdWKTnkF2ixocH8iJkmg8UEks9fMmnhihMwo6YP",
  "key30": "4zerQxLV1NnFQagCjbp9NupfJWA9thfJkcECNUGVToVv887tQHqiJntnfK6jGBN5ZZQ2oWdsuB8Qtf39pPSbQZxu",
  "key31": "3zknrA6u4byspJroEUigC168jnTpVXJERrwqAMdtVf14mWWyKRqPpuC5D4Nf9oAbdCmiSPeZCyaV2MNWSCRNweWf",
  "key32": "5xCg3MRJFpDbQaDokzqt6rHF4m2Qu4TwgUxkZjkanKByf4Wcz3AM2GT6d7jubTQ2BmePemjsT6pN4YwzxNG7Q1ZZ",
  "key33": "2bf5VeDmWuY63gs8uy8DJcBtBqAK5citAvzmkXRFwtJsDpdjathnLadxwXq3BUDFdgRSRgEAjadG5PhuKYN7iNxh",
  "key34": "4Q2KoPffCgcLjW2kQFi9GAsBEqw9J3XGNqgxfSsMDbWTYTZioDh94vCfzJezpnDj6oU7FhoyQpHcArK93cWmLvfG",
  "key35": "3XhG7adKASTtUV2Zpdz6sdheTCqnHrsnf8mVqKLrZ8eS6efd5Eo34p1E1moznfWELfKBgHQT3hjQaFGmQziZpRge",
  "key36": "4HEjxTGwTsYgLSUtwZoTTU3T2teZMvBaf27KgeLTTUYGNY8vgDDtSdyf4NtjyyGwrpeuzGCU2bNk4pMy1CUnbh2m",
  "key37": "4FJWDGRvsBw4J6pPVM7pXmqwxxGJPrd6ryJT76kgcVYHDpPugNED5B1ppboKx8qDbWpd1MUDTxvdQ2crwCt1UVcV",
  "key38": "51ce2TXqBMDFyqGJ1Qf6gFtbEbeijKws5hCYv6uxFaJ5Pmdkhzz1bTJqy8XdAFP9QrqGfMgiPj6nK9bfDBs5oFoR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

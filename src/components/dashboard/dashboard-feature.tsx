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
    "5tYmDCs2v64deENYyjZvxoz6FYdVbwPBCiug3BxV4xQ7ZC2uWdgb2A2Ka3pDPhQfs29ttNYmP7N9ZGTpHgsdvDsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmPnAAQPRGgLb43XGTGbQJVBq5exBSj7w6D8vbi2Seepz5x8FoJLfKE5wgwAz3BZAKuWjqmFeoZAs89Hotqb49K",
  "key1": "3rhXZpGEeqaEgSuYrAKsZwqzEdYv2af3f2cQfYEy5X1esjzh2diw8t6dtyfKFue3pz39u9RBR5qQnY7RHgvuRqPt",
  "key2": "54gGRN5WEHEcEfF2RrhkPgQg85XZqrkGSzY9ZBz9Z1dKyvTDQg372mWukUovNyqzRwz4AzBSgNh8bLgTREqS1F4",
  "key3": "2qGWBzot5AWXEMERGDoamXKJ6zRLAbbmCKsT6rgkzb7K3HLv2Bornj6xjk5W3asMUt8bbBkUnMFz16h1oH8xEFw1",
  "key4": "2252tNjvMLFY6dG8763Q7MeLE49taHnNyMCGwBys7fHYvfiSEt8tYy29S4gAprpQYfkpSsa6m1xesNNmA9h1n7sk",
  "key5": "2Ng8nNQbYEqqg8SxbVQceckBxsemXc2H9ZR5caUQ875z34wLKUG7JQV33Pi8jPQmGx6wVcWF3ybvdnmk9Qmn6BxH",
  "key6": "3ey8wsmYiD5tWZixnHtxQmFk9cKBgkiCnvsuKggxcAM59thLXdht74RrB5HgMzHLeZhEufxLWHugQEnAJhauz1Y4",
  "key7": "4CHgy9zWRfAbYAbE2RU9vzZjmYpFHUWGNFTH6nFmNsP1ESC6ePMkcHmHhNgCYKBsjerxotX7XbWphq6XzGdgtPBo",
  "key8": "4EFkzvLPhjymhmKvHmceZZ2VBUW3RjE27cN5pooWQcK7nABEaHKbsoCCjRPxEEv6DdkG9AQTqhZ1iHGrGzfJCPG9",
  "key9": "3oMiec2vCJUJYjFxskrsFDSCk5hfUeap9wwihPFJfXkJjUAPtdHVKTMbbb2RNjY7cfTSAMUDcftwD3tnWUySSq1S",
  "key10": "5PqJTZo3m5axzR1FYJMr4fzVQuGQkEbWmexv89z2tH1Pbi8YoWnpdodoZHrfJhQVL475AomCejAf5uYamUennyuS",
  "key11": "3pca9HZ9bXGmPJEeG1MPjLpFfP4FiGeezdS8ZkKzcP4GQzF1UYmxNHDoYcjhqWjkZ8L44Mo3Yxcrg2b8bkJMoT4b",
  "key12": "2tCt4fLv8uhoRe68Nocmi18Q8S3mMjKc3ZGWFW8oTNND7JTvUvyMQhohQduSTVew5k74BCRM7kJbxa43L6CAqrEd",
  "key13": "2M86NCTNXmmEjTqMtFHPMv8gpNg1G1xsUxPorHoLBTzdoqtJxvCYM9t8w44izZkDjawRHk5TnSN7eFgodMcpE8AW",
  "key14": "274JyRi9ZCXhPWhhFWcogycxJe4Hh8dmWGXRwBXo21qRkxt7fu2wE3ziEYEnpAmKvnWKZqPQmqQUMVaWh2rTMZht",
  "key15": "52gC2oMGnWqqhnWYEt3GgjVYyV9wod9SLLyCyTtA43Jc2g1NWmbo9YQZKoPgXrBncnZNNQuEDLV52dwYqfMiiqeJ",
  "key16": "2huCs87niqwLvGnHSNAQf4VzRN7mWb1PihZ3Jh7rEqYTRsawpJGNpGvbaKVpVWFjbRWrKWJ8VgFKzX2tAnwPaQa9",
  "key17": "YLAuTzeT4uaf8UwHeuDeo2hdWEunRFRyXRygfGq1UjoeP38EJu4XHFj6hmxjjikmnt7pwhpRdLoky1HgaoRhewk",
  "key18": "4ew9wr6HgbZRQYGDZQ7oTn6ZPPogmWwha8r1zyTdcZjLxWigG8ZFVxeC37qzUrimz9j3ufcA3epvUMQCAPJcmZdC",
  "key19": "4VtaT6PdiNzfbdXWSyQpuhGVj5Cbbu6hBR2uf6SFiziADTqbAbdeo4p8TLHwCtf7hXanPqVg2GjEErZkMamnoRux",
  "key20": "41T4CLyMMf3RvTWh8ZzX2hn66efRwCHufT4w5SB4SU9QTC7Ey7R8mV3vS6eePFE4JCrgwVZ4H1o6WLRPFxKHVbEs",
  "key21": "4H4BgeZZvPqDJY1Frrq3P6SwiRY845q2h8T2nfhxJVkge3NCT5rmR7bs9XdmbQZaiqa958RhKKX6YBxuT4T2iX8E",
  "key22": "5f6YTP5Kscdy9dFrpXfc7nHXVLuhnuvbLtjz7AvdhbrzR6X1yUvihLnkwaErHmqzn2qFG2czQHg8aYEG9xekvFch",
  "key23": "2heZLNZT8V6quKoQWhVkxjZfKnbHnT8zqHMgXuxWPGtR6AgwawXa9YkmYgBjFyuKqjaLxobgHKS3jMdDpPZpsrk5",
  "key24": "3J65f5FNkaLRZzED8xaKYb9adzgmcAbU2U58Y5mTVem15LY4iVGPxQNX4TwUWUecquJ1BDbhxwxRTeB9Js4jcVB3",
  "key25": "YNxXAtmQshS7Tq6PCQPdp2pG88iWx9jG9uvwwVfQAqJing7aR7FmexxM7Wyy5JYcM4ZGF4apnNoGxaeYSvn94bY",
  "key26": "4sF7Z1VxRf4iFUmgQTDTsk97vJDDdEjbJw2VnJpLfb3hmDvDv5iDjnCKkPrrLucNRZSqatwbwjPZdFDGm5a3eHKA",
  "key27": "5osmF4vHmKZJ1FZNHtLYpdSe7HrzRHNeYPZaVaqCUD985iEUQW1QcEVgkDXDaoaSu1SpZE25nntoPMHqXMq5GB54",
  "key28": "3Z6mMRCJ6XMeUZHu1aZN9wvS9ipW4SyDK9y9YUY7LS1pnnZcnvmefbCPdvMrj1KJPWt5n6fSJeBqWdX4sHeyKndX",
  "key29": "2dDEETsiYZT75QCTfxog5wnjiWqFdkkxLL1FMkNRQ15RmxJxBDBwegdc9c7sXJZFtFawtKV4qkUjLjq5bLAmbcQY",
  "key30": "2ndwPLaaEvKAK2kZVx8iVAEKVn6J8Ekg57BVbgcbCdkWTVAicBb63rzt5TikiacE2mPbVaHWLqXV3hBxtQZBL96m",
  "key31": "3U76B1CzWrwguLb7JoAXb2iMV3U4AcM5jN8K1UVCmZnrFbdETF1W7U5LdGUjrtxjUWLKbsm94Y1qpQH6f6A6nEow",
  "key32": "NF5eTBdPPZC2cSYWuriuCYZoHHzKDKR8kkPVaf77T8UmRekJM62Rb8kazFZpdAmwTxaNdNfW8XUjNfWEQLUPDWA",
  "key33": "2eQ74x9Nh5Z7G5Bt971vGLVxKCRoRoqoX7hcyWS9dwPWEJY7cm4AbTttL7xNuWHWy11KdauvBEtVzy4BAMjCeBCL",
  "key34": "2SixWS2ii6PvKmaG9kDYM5i3CjFZqGDtyJsPpvRptKN9b861syBUKetbJ8qBEDHMpmt5FCoqFZHciWGGwSM6VL2e"
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

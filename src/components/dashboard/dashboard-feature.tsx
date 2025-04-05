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
    "2PnomjhzjFPfk2w9uZVDSfX71f5YUr8PRHSR3wYQz9p3ffFrN5n2cfoGLu56xf2dFuN8FptY2m2WUvLKY3tGJTHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4HUn1krtfSuRrMBjWwK7SANYS9fYfuumDsEs6yra8n4EoGGatwoANfhwTdAWHz1tMDt9zB53sLCCVJpdqztLuM",
  "key1": "596WwDxaeuG5gcsDbAUAPKeuzgLEd7HgDkJKnuvDqhhaXrzjoKzooZWLeeU38iLLtddR4wnXF7vf8Vf6SowUEzam",
  "key2": "3RPTtjXSPpcoeWHdMMhPAuYKq7NtJytT8nuADRLGHX1hkmyaazZLzAm9r9f6LPxnXjUGmenumMxthQbMPU344eK8",
  "key3": "5wVfQ3h2xpBLeXz5AUpYUpkHsX9x5A6b57fYzEKxRyNEKmfwHZiwNjXbVfwx1JzfkvvF2CU58d6HaSf3Vsumu71u",
  "key4": "2GRfzuuPQLWAD4GgmMAMEwreF8JEEzkQMNDz8cHGWSA3Q2V9EaqUW3aPj9W2J8m5EAoJm9kAf6VLAzPZu2mPoi4i",
  "key5": "4bg4axfWWWgdkxgYtkfBKsuDB7pPob3rtfmBsgVvg6SaUYtW7a3CVFgz25GSMTdFEG3JanmTF6yQdd9P92xZFNP8",
  "key6": "WvycHaqrTbZHSFEvVKLSUw2Y9Z2oMkWGv5jLU7jwgs4HfFpidCX6NCabqpNDYpDRcTCyHfg7HUSNBUnNU3FiabG",
  "key7": "3UuFzC8UQ8BuvPnRo4YbCUHrkbSMi769WdKuteeYuStyUbEpNcV7Wug7Jp2RTkQAmdiWcAew6X3sXewmZUi8AXco",
  "key8": "2cSjizYApZiRwk8QkMCg5aGnooYRFGUekbFJpv2tKMqZgrEkwGfhs1kEu7stwaWavuVikJu4FXaoyqPXHHJvSgyF",
  "key9": "2JaGeUww6yRPutSmvp3xc94VY1T2EX8QwHRhQ5iD9iTSvKiL9KazH3gTvoXLYaZ39JBtgVXPZVaYoaf3gcZcsF6k",
  "key10": "5QeVVwW6pc1UUywCbMsVHzZdKxzAFpQHaHoqRvwbABkYTifuHNTaHVjHv9R7Vodmbid8MkCqormUSYjfVFZ6kvyT",
  "key11": "2EXuu992jN3D29JrTq6NLfQFvqntR1GZx8nthyFyTwZqLvZCr21xo9GVLwTCWkhJEgjkscEiyitmxyMUagv6pz4g",
  "key12": "2eTb8Vv6qxz7Ybt94MPfWWneomLKjTwBGpRGcVEbHRsDrGUPTRmwQtsoqbG5qjQbwZfzmK2b3vn2udtQa7JsvEVn",
  "key13": "3qVgksrEKJ2GLE1yRXQyJ7kLcj7eoUTTD4aHn3fpzskgabs6knpyVS4cfMGaPLjo5VTV33mVmncgtub15mcDMtk",
  "key14": "59bV4muCevAoBq9aKtUVK5Q5vKPkSvQNoy9iv9v7EJSGrxEzJ9swGTB9qU4pCMC6GNk8WKEWRY8N5zGcpyFMJYgh",
  "key15": "36bsy2XZr8ZLeRdvpPbopMHh1zjC9g53aMbXPAbuoCEehKpyH4Wob7b3JWaC1MRQpLCGfzNWsGuY3yCMBeUfkCk8",
  "key16": "351bguqtTHb77eLAvGcGcVrhB4FttnvEoPwC27qxn93bHxHnCjqg8kMw8FafopoVwy4bLKpyqD4QPV4GQCYqrGFp",
  "key17": "C9HwzffqysWgJcDNgiUSeLZDaL6JjBbPPXpTW97juV6McthzdkBskNznnYKd2Yvt7UTk71xbi5VegaubH9oQkny",
  "key18": "1J6vuScBKJLxXfzK3ugUd1inRRpq2kwUQVuW9qQUfYH2n1PPDPTtSKhSkdw6o2MftNjUfHRX4f4Qv1K1rouk67W",
  "key19": "56um9MiU8ebPxJkYEmjAKXpQqciQ1UJPCJpeboZtrwMFH3baXoHtQ5BGMJkqgRYpCqC3mMunA4awhyz2JuWPkDU8",
  "key20": "4denoqUM7Ap2kPsJstYUHAmZbUnXhF6531xvYkMH6fyA5EhqkXyeBxuoWt1ujpPUn96Q2wp9TzTu5mukkiELiVud",
  "key21": "28TvWRqcFvJjqQwsjQZHmJtNxF3B6LyCKAm8Jt3Tgw3e86UZBMyELLMfrFsrSS19sFLwQx6PXJtUNriidcGb9VEJ",
  "key22": "4a3P71AvnAr9kL2wM3qH6ksTaxbLzTvfsgMdHxqeQGubqjLMa2JYMFn4xXSATcCjZWUCk4FgR5hbgFZR6cxSjJvf",
  "key23": "3y1iwR4oBSiDi7myQyyPK9QJGy9Xe5XNpSxjam4h63AXCfYgz1YhkrVZMvKJfiiiT2ikcFS9sYRKuzdPFCvdGdUq",
  "key24": "Cvs2a5dhnyAUpme1VtV2VmuWNjpjcNCHCHaPDbVnYyqFQGac8TkST1PFb3Ui1tnGmeGDWGrbvkpjMF9JMaX1sgD",
  "key25": "66U1stXQgFk9JhMeJctXR9aZaHkQGQfHv7htCG4X1C9FQjvmi1Nxd6fbY2ZWArm1kr6qXP3jxJUcF15aX2DBEV8j",
  "key26": "5Zyebmgu3GaeG8tLDEiX4opErnvNzU4ViEtixjFL2aMEZ6bsDTDGhqbEKGoMfe5BknmxM4oqYtuskyVaUuJN7eQG",
  "key27": "5Q6Wj6i3etZ1uAbSaZd6nE4JtNPahmRVEgHuyyYoG8qqY9nDT7zEgjnFZPkoDoWT1U8KGca58e8ZE8kC16UCL1PW",
  "key28": "5ChLEEDff8imgy1j1TFFk6AnnfoGThqTkR9HvRhqCQfNynvgjmmf2mHjQPgCMTnwCSoGKbGkbJC7bYaq8MCY8Gbi",
  "key29": "2KRSCeYz92DsNXHz1uadxmq27bW2sYxiPgTNZazoioeqzHxqNUZqyx3nQT6JKKu8AajSWfBeiXsqzorhLT6qXqjz"
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

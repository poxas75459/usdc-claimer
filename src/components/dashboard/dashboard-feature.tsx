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
    "2BWYxz4kPazEcWeVV9wEFR7Q5DVJ3HjzgiMjqEhr7cYR7LVKd184dHvJsUwgtuaiPuZtAunmsy5vNQCYb8Lmxy6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCeERwDn6MQU6aHJDLLto9aiZMeEJyS6izGVY29QYyUqRD4GT3hvLx12Y3eHFNqz7KkeGy2yykL22sgWm9qoUNv",
  "key1": "5xfkgqioMqAJ3RumyzePbSUiecABnm9zmaEqCczMiMdYEdCvVbFW2EchKarBe9U7zFbmL7BoK4G5ZYH26ELUyfDr",
  "key2": "2P8qjjAZLZbhifyoSybWBZvEahyGSXKxdAQWCyQFFEpzd6MQC7RP423Mju5UkDxw6GPf9urPaeqf4k93uULtNn9m",
  "key3": "3LakeZb7H2JsKbJTTdYHfhK6oMvEVH3huvrCzBeVzKT9YexdqSacfgciG5cxk9pUwUpVFBgh7AwZ3HYGPpLQLhPv",
  "key4": "3Tc7muacLTWm5RMmuAmq1ESoxEJDYmdQxgkzy4Cy7WV6NGS9jhQyVMKWBNVsUuTQGRSpDbSFr7imFKFN7z8iueg6",
  "key5": "zXRZwPrfvEigPhwKio6LFYqUKqtb1tbrk5Hh7Urq5yRpiohbobS9LnNU4EonrNcEjoNTbRQvSkJiyFvkFkP5Ykx",
  "key6": "QVqKqBrsKKAit49xJmmBEz7it68AT4BMRb38umWcD1tS73SWDcn8tozvD2CGTTbLK9MwFtS5gj9fsK3yPWkhEQL",
  "key7": "35BTxq8jsJ8r2sZmbPNHEP2hXCbEaxaGZYwuHaXLUK5DW4FL7b2vLyhY4WrvM1FvrXQFMojaStSvDkTyzfTVAcUs",
  "key8": "51x9JgFmqCyFEkaErsffWpJ5bw9PKq8eGAF3BKLNWv7AD13csX6GbyYWUQjvu7bMgWxN5Zto6UAQBF8tCjiEsuAT",
  "key9": "J3cdTanWjDTpRFYzCEEAzYgwcmj7WmcBtwMhH4dhWVCuF4LAXNFdjMfHhykt6AMAaYanyvZ7xMZsDmGTUopKWBx",
  "key10": "D885a2GZYQrFZr5a9hKcR1yApzB2wZTEPEwLNSNmTsBvhQwgRxM67FfXgminQgCUkX73YZDB3f9JjfDKFkYMRdM",
  "key11": "225x8BE6wG3BaUS4ehmwxK3xtxXtgaGAov8Vxr7RBRWZ4ChjgTQ5onG3UNfiUG7JKgAT1KLyW9rEAk1VAMNPHJbW",
  "key12": "4vtyNN3BUgFpS1NFq5RkaFL1uwCFtV1GCbyXYGCFgA8SAvKGDVnyVYdC81jvDkRck7N7cXVdQUuFhWzUidZ8QUjL",
  "key13": "3yJX5qXWitdTppo58wG3eyPXyVJusS1tK7A6Tg33VMT1z8TS7vG6dZgQN9KAmbvQiifFXdqcW9uDXWCP28e9HLZ8",
  "key14": "5soURvWZ9abpD3wkcV8P3x9Qkp5fryrhwrFKM4YcRBmVib4YCCtoNZwB64uTpZXUKXjXsAW7HosENp7J5iZ5EiRf",
  "key15": "2tEknqDfxodqxkfM2s2znTKobMqkEYRQtuhpiv4sdZHNucDMusS88nr9mwXMZrcXeiQoJrMuvf1HCLvtHiNw5tNH",
  "key16": "5rfd827tBf5ZDMBJQX5ziANfryG2ZrZ9EaUHdwNTEoPt8iAbuvoUP4JkuVcj6sieryeosCjTMNFZHk5RzeuvtLFd",
  "key17": "WpgzcPpxykDF1ictYQj9eJRvS65hL97xpq7XhKMkB7fTMYnC3shcLiYHHCSX6HpU4U9i8F7xsAdsPn2QMRAURxQ",
  "key18": "2arzAbiBH9nosR4gjiMa7VR1TY8dvbuSkb4XFwhFjvsi6M9quLfZzuEcNcEqi3Wz1d81zWAc545tAGcip8RLD6YW",
  "key19": "63iJxNP4R11PkEYwBsGxcKaNk6HZpDfRHejUKTRhJs4r1GYPCdowgbwk8QkKHk8fpKZwBH3siXWiqdLRQyymoDG6",
  "key20": "61u6LyXrPWkniNkPdRxmumCJ9fT5z9WJEhkjoZq8ZB9X9xL9RDv9PALc96exedbgM8bZPK7vRnMbtBSbtcsDXkxi",
  "key21": "4FPmHqgad8fJGRpzrpJq678shwGYZtzQbTGNi5qgrruhWJgEmnBPGCyFPZ3QQoi7Hgn4C6TCH1dKgBybWx4t2oP7",
  "key22": "41ZdZs57vjxKGAtfi1eSHyK4k2YV7SSgVs1VhXAGGg2tbGXScupaY62NtTwLtMP6ADSPSFvKEqNEAkhJjQn4zWE3",
  "key23": "vExfZ76B4CAHnZKkjcq4ajYyPC3r7GXQ7NtLMMoB1uf2ph3PieHos8TUoRDRNWW2XgPXDLHphaQjBUjkZkFBpZu",
  "key24": "5eniSbgWjkmYjReGd1BZdnrUjs8pvwkiQcEKN6oXGJx2NViDaS2o1Wpowd2FKL3a7vtmnvUHKUFLYAaxd7pXBUcU",
  "key25": "3aVxCBM2FugzhrXs4uJ1NHA28AVah5CBsL5rGw5pGqTSfC6j2o4AdeAcUp8yEWXV29TLLXiVEoQ6jJoicWXeNAgx",
  "key26": "2r1ibo7Bqoymh3BwbmxWu1nYPY1H3XT3aENeYXPTc1M93xE34iqzpoCJ7Nz4fK4EtXFY3gwR7MTZSUMGQZEfdb8j",
  "key27": "2hkXHyv4DtnoetoLam964EAZLSp8qxB113HWVc95Fdpf7n2YKQJmZEuMvBiLbGTuoWXcvyjM5LivvPq6Xs4eHsHH",
  "key28": "3eXTGbZPuyCzkLX7tt2TWnRfhysyxw9YyWRa2PRQqrZ9z11T9YorL8gnazJ1y8zi1PRLYnQRYuqQZUvW2SEKKW4g",
  "key29": "2rwvxQHoe7GH2v6GXDCRqnWpkoXHaVZqDqQC7Yfti4gdrH1AMSDvTP8C3iRikZwb8WdJfUGZxEEvRxaDCncXD7No",
  "key30": "3Da9Znd8peZLVsbePDqSCdUPoopMTQnvJtkk24PvTn95qS6DjX9Atvu6Svr4rpP9aq8hLtW3YjzUdXh3TTxaUGFk",
  "key31": "4BHeWQvei7A3mKs6BVUNr2wTWJ2CLwWt1fg1YLSrX2YPtM8d3LdHGhVLNtmAWixBgq8eb1bdi7C2gdmGok2hBxYX"
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

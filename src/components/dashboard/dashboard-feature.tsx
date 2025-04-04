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
    "57Gxu9Fp1FAKRnLBJx7AMqhhRDnX1Hy9aibYv9eo1K8Bce1y83L4PWSTSgPrQnjGiUUxFiRHs8fyjtFvtTXy52uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQSHvyFqppRUwF2QxtYeyRsJGy9tSz62r9SFUKzS2zqdQbMyBXaAgsQsC4LjPgQwXQRzCE2JnnjvNPeqKaMs9ua",
  "key1": "2A9C7oJ5AysQrRCH4ijf1SwkcsksP1f7gcN5LepFsnUcP57D6nzMqH3LAe1hyCyRn5KaziFrodUTsPfWdwi3QBdU",
  "key2": "58yq1tNFf6K1QJwGPHgqS6cSJKpyv2VkGnzDXYS1ijv7yVRhZx7WGfPCDyiRkD3ctzrjrQPHs6Ef7r2ftK6n687j",
  "key3": "3Mtrtsos2FCnaZ2dwPAdNnxcSewH7aZToAqTtd9r2Z4MQP5p2at38ooSTtbRj96SyeeL7bi9R7KreqJHqTRyeUXH",
  "key4": "L5qibNaZmhncfRgikXfFG3ZQzFhKZrNJ9PzFNCqWRzRnD5nAWnBU1ypR9T1Q1kPeW5EhMpeRWvX9xCQDxy4zh8E",
  "key5": "5Vv2hBS9uKddUBHDpgNxeQrZrCyK9id7sjkuPU6hoXaXpXjnaoNi2ZHsjGuw4qVnyZcxhYJvqYwNsFjAcqiyvyJf",
  "key6": "5kiygYRsv6nMXCF9keFWNzJqsikek9rawoN4JBcdeDWiCWH9SJYCz4yrhgCUgnRWiMGYhBc79ZpQdzXmxpK7tat",
  "key7": "4AJXhcX178jAHYvWHuKWy8hjPYnY4Y8KTmJM3syTz71JEUBiXseU4ogrSaymGEVFX5UESUuDJKNxkiWa1j3pc8s4",
  "key8": "5ZSsdoHPSVcPSGxXhsPzpWUUTwcusk9GvBEdZBbB6ydmhGptNtKtMqoj3i3F5KeCEAJHU8Y5xYSS59spzqydX1Rp",
  "key9": "2m5xX8RMD3YiqHEzPdoo2CHFgPBYDVfdv116oRM3oLppncGq3RkwHTmkqM1Z3WQXu2KehTvUh8dmvFL3P3QYW6ZC",
  "key10": "41xYczmqm8VGH5LJRMqPoLjWcG4Bvr6dRunBMbQF2Edq9RkQicY8A7Q1NjjiMsfr5UGv59dUm2j83An3WQEehYyw",
  "key11": "5XJ1CJA8HXhimDMyRpJ7SwovXGz3RUj5WRQhvc72UkCDtyjCzMEDxVdrGVunKRBLKdX9AheFt2c4NyCry5xUesqU",
  "key12": "5BfZs5ax5aFdZve45YPT44ewsc4for2PpEwj565tVqKajAL8Ci85RZvForpjctVAve1hZj6WBsE1FNRh2bFwn82f",
  "key13": "595Sczg4Ev5AuXkZKKpYpcmDehAGU8vGdejN2NKNM2J8ZxVr3akjXkE85ou6eii6jbZ88aDDohv8CpcRvsDLMwQh",
  "key14": "3voZqxpgow5XQqxwdv9YbgGdttLDoXwcQMbngWnWRLQWsfK82cNmXjkV6gZX88XLG6mJ55VUtQdp2uvhhMqVyz5A",
  "key15": "GzWnBfVs1mjBdtRfuymtqwMFVua791jYvqV6qGp1Q75CNxyf9467R3zL4uZEPhyydnDT4FAcktBPAhxCgrBSDdg",
  "key16": "3S2SNV2JVzRgwX7UApWCXVp6ERQgfL21qS5fZ9u2ZdoaysY1R8hiDyH2Mo1LCBx9qagRyW1F54iAEbKoMfQ86TFa",
  "key17": "3e3SgCDte5gaE22CPxCxSN4kbrDaEuBqfhvmsiE9vfbYB6voJWVP3FPLJiwoiXVdpFLQgZZLtBhVYELhso8T3a7a",
  "key18": "4gQjbbxNFHrFUHCGurgs3hF9D8RxKtWeHrDkWJUuSBfZgr2Sm9H7YG92YgiH1LxnzEqZ8zF7MPEdmT3ggG7t1TRU",
  "key19": "QrMQG1d9idjmZbpGhAnvNjnZZqsTe9oa4RbuNycTbQYf3AYdZ1iaJcPLVyanF28JxDAsevHA8dykXy4L1gzKRFs",
  "key20": "4DWv2a7yaj6GaCaGHoVyYjh8yx16VwUkA5wJZAw4LVdDdqaWGRzVj3wTbJv2AycmMJyacovkRuisLVy7uh8HXgwf",
  "key21": "tcw7bWwcVtEG6dfX4Nu77ZVtA3d2RgdkTTAc48fqrEDGvfuxMs1hkfBh8J7yucqCDf2kzjruq3UCAKkBeAX62ht",
  "key22": "byWEmq1yxYnuDuCyNeUyK5kijLfeKF3Z1VM23NPYLBcK5cfhG6FaZ2EBmrU5te9ukyvefV8PTpVsch6a3zmjLna",
  "key23": "399g518wQKarmkMxZfV3NYbo5sXv2s2MJEm9vfEptS9kzhN91UZfGibbtMoom93GhAoh29qHqzRbEqb7ztg6yqK5",
  "key24": "4f8pkoSsu6nBAveUZXVssXsi5MRsErfBhE1EShdcigXZnaECLeuaaS89Tit7FsH9SG6CP8EVnjFLK44uG5GKPQVc",
  "key25": "4R8katnc1tZ8FF3KV5KxKJeZDs4HsSfLBHhiUHHP2pcMShmPt2XpCde7RSwc2gLDuUTjL6dhjL8eR7Vnc5p3fhDF",
  "key26": "3yEvwQB1Mh5XW8f8Yn1F5qVgSE9yCBeb7Lq56RmMNeNkz1TE5gwkFB52ySNDE9QGPgZsyCHCmGZrFXY3L2tY8d6g",
  "key27": "62XCe2um5y6wmyUsbb6xJAMLMUQXustW4J5sFpo3vQBdZXUmh4N3HU5cpfB9URL3vymjoJgJRD6HJfWjbtKjW3Si",
  "key28": "22jSXzaxXCs9u9J11X3fngeSepvCkzmeWnz5PofVFjCasB4PrXmD8yzxpKjKSbyHjweFYv2CHBqYAE8ZBf6qVCTZ",
  "key29": "2RS3cdSiXCooj1GMgZ7jwifPw51ynK5KaQv6uePWUA6qtN4xGdfTdCMXZM9BjuUwWGQFm5KZ6ZWCRrjZGRhkodsQ",
  "key30": "2ZqpSPy8TrSL5L5Pn4DDaUrLVHRmFC6BfCRWvv13eWf7FaGFX2GE9CQogfdUQP6wDJpQQ3wrA9PC4Jidh5kkg2RR"
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

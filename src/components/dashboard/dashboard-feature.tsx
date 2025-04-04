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
    "2sdNS74jZ8fL3oG6VUpwwJUCPgiST49WrxPv7WkdGz5pxctUYLGaGuMC56ogNVQi9A1jkrQzna6YrCG2jGJEfGH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCcMWHvgeZpKcJMF39hpTqffFGiJfhd57FWRjbVi4BjPCX43R2iJzZpym7NQQch14Q8KD1kBzzjZk8QURHz83qs",
  "key1": "4Zv3aBJf7N7SfjfMRt7D94vvLXyactvSaZKYdyj5S6DWfLtagM3YLND9Fzr5CcWNYRFgu8tmdwJKqc54FmxaYdPX",
  "key2": "3ntuLt79UgFjHkYnHu8airGEhexq7kV8gr6S6UfoJdRpFxCikJsu86kVhS2QpzwFQZKMoPTWfsAFtNxJ15WpVkne",
  "key3": "4rtmYhTC6jKEb7eQRuB127gcgXNbF8oCEkCSsZxfFQuB7D43LPPdtwJRS6tqt9QFy5Vb2BvuaDUL7Pyn8KvLBi2D",
  "key4": "3p7KY3pocE6AZVEEprQphDBm9YjbZ5jVKKZVkSFrs6VnnjRUuNJoRGETBtYgFq9AnEUHC7imkz6KT3DH4N36Wn4R",
  "key5": "2Zthz6rTRtNjPD9GiuE29JMQsYvkSdFArzRfMmJX2ne5QtLrRmEFBLZamXAxEx8CPYGjzEXBBWEqc1W8odzeBaiH",
  "key6": "h8gNZSSFMUE85R71WBwVpRqeKC4DwZbsmzFEgttZUobaqSSNfrPMATq6XSsXhkQxUW76oz2dDgPbeQA8Fykk6Hg",
  "key7": "Z4tnuEEXZD6A4PcJGf5Z6Dp2Sy32mGGToduQFmigcuDxhpFAJQT4qUb25KdFv7Gs19jYYXoRYG9MEpDNB6uYV1N",
  "key8": "5X23yNzapvsC7EDBU9HHmre9g9sec1b4N9icgjQc5snfjWE1xFgFkWaHhFRKcwBnAB61kGwx51uECSWWKAsy1JYC",
  "key9": "5HYzR4yX5VHjBZ5ZDd41vUuR9QvgssnLU3VAuGEgs4uC9ZRRYRaMENdz9aJJWeGHhUsWxutuoT16cLXSKXDYGPZh",
  "key10": "2eYoQa17RBX3DRVhdzsvNkP4WRVDQGXm2a8kn1BTB52Zs1AUyVbZwyg3qLvzPxFRMW6QX2yRxCemCV4trQgKTCTs",
  "key11": "NV58NpH6QrcBjoapNCxkxo4sHNFSpMf3NtL2SUgFdLMjZFXWFjGEJ78Vi6bq3qXhCjPdfnPM7Zp9HVji6PQ7gpt",
  "key12": "5R5xo6SXm38oVLJYGZuSReHohDSR1Nu1AB5g3mLA3rG9CmqE9fwq3rEgg4AjcXCjYxo2rhbMFVo4gVjNqwFmpiko",
  "key13": "2cthEphFY6pKa4XmnsAcukFCaTSTtLoZic7NyHCyMD8bsrwKyezGjv4NWSh5qGm5Cj7eCQVveRDPzpTR7V5AD4TP",
  "key14": "325AbgT3147w5JSvS2qqZhVL9ViFvXj6vjBKTtZ8uPrVDbbAgr6mY9VdoKW2XtQN7MFK1U1WCrHkHwxhpraHfbML",
  "key15": "3EhqFJyJv5orFKou2baDqJmneBvXXSxQMbvtW8ZoLBFBJTfkGaCWe2XPfiAvAwKNL1YNSs48T9nhBcwfrjFJse3",
  "key16": "d7wjodT4GN8xRghmMBbbBHUhAX45B8xHCowziSCVNouxkufoHBXogzuh8e6j92cqrbGZHXZLyvVypCmtNpjnU8G",
  "key17": "5acpKWEzyDBSRCtKN7GQWoHa4xdhmU5ZK9RTbUtpPFyZcQqUuRa3jTYu9HXs5RXmzFN8pc3JE1VeSrCm85UPEJXn",
  "key18": "5udf9YfaUTFrG6KhdQjzzuTxSexGSyjnpYZEABZqWGi7Gt4RgBYnfqezhGtPv7PAuPzCuH8HfUtG3nBnSzAxUN6y",
  "key19": "5TZYEhcJrF9fV6AhGV34nf7qVCd1ApaF6Rg1CpjE9XcdYbBDjH9YttdMaEMVoyMnry5xopZQhQskNZuKFGocX3qj",
  "key20": "56wAeakgqFipTarBBrqwbguzofyxpL52aFS9RYghybatFp4j46ArMzJkpP3jCvgvfTXfWNVGxLQN7sQShbZSXSzW",
  "key21": "2wUjjbRmTMfkY3vRcwPUDEyWu98YCD9dyqAU8PsSKcE9L5trSaQDJ8FLVt1FkBFVxviJC1M7wXP1zu5rpympQQ4D",
  "key22": "4W2cW6Ccon6wky6xM2M34dm8gUBKAYEz5HJB9mhkHyHtRtix2e4UhYtd5kjh7bX1UjthSXxUntLmGupRggbkmXBY",
  "key23": "5zM3PL77f8qxgpSbk1Ukhzw8WFrpBuRrbUb8zFEiHjUFnCFNm8y5HVuWprxdeCjVD2fuBsxYk3hey3dzeAnRwBjt",
  "key24": "2zVrDTLAThQG8J6Sv5NVKiHkNjSTwKcM5grpF4Wati8wRp2ZZsvBtVHge21624AMC7i8SGHVqFiEeEpjwx77xgdT",
  "key25": "5WyRuJtVqxBRh6SHSB7Wahkg8FYKMmqUrMMx62kZRrsoHE3fhwv5pGzjzBtqCyw2GhHWS8iiauhSxUxNt1j8bsa4",
  "key26": "2rt6K7aNFzeSMJ3T2TMjtoYnrGtCj1GB8Yc4HUWNZfLqtMWVpzZ4um2ow5DWzoKUdZKYyu8DjCypP3KkYKQYLrvV",
  "key27": "3DFyRDHNnsixb3XCTJzURovKKT49UrjM2L6i96FY7eFNUN3eiuPJmDKs2BHpho72zJfhwondwUcGPaY8MA4esWcV",
  "key28": "4QF16i52m6Y6fM4TeNb4hQyCn9ecZcgoJ7xMsCLY2ZqLv5g8XugBrrTNisKABHi3a8ae6oxFRb3WzA5DKfXq2YbB",
  "key29": "38Uz5aYsPdLXd5uDNLVesHKyMWqGnHQi2Ex4pqJnt5oQUV5AcNFecraxnWD7hH4nrXhGnixQEfk4jmrmAX2uqFtY",
  "key30": "3PNG2g3RbtRQsbjuzTbQFhBcsBhXS7rASmyNkJFxb3N5L2kZ1HBKT1RPipv3cLiNuSQJrBohwBhfiouNztdmTgus",
  "key31": "ZT5MJw5meq6xSHwYhFWMkpaon5jjV9DWv4H9fzR6cCPDkTiykdx1mNhHN5Kff3688KP3fJxovxYWPHYqEpqQFAV",
  "key32": "9vyKBwkrK3vTbGoQh5dxwfBP55quigZFqkiLMH9Yf9bfV3hp4qjBfqr81vJLcL7WA9UbGEcvscpXQHqQYTUkjBD",
  "key33": "43wQQMJsRZdCZjpLYz2evLPGGNczkPKRCGcQTxrjDNjhceQpaWT68sL6J5gFhbdnsGWwH4TFtHJ4E9gi8DBGz4mb"
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

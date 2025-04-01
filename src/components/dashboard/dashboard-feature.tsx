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
    "3pgiV7dkwSJqvuai8YqtJC2irfsnmMbAcqnwkNHiCWJw5qvxupM2N1at4n8ZQgTRSem35tnuuMQYWC3SbBadXuv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WESPjNfWhis2EA9bGpEJyDtzoeBqr1NRFa8CdnEiDXpDVcTvKADR26b23xVfT58sTxVmdv3a4x7ahyPYo4DYpWP",
  "key1": "4Yh5usNngZwa4fCtQZaG5iSLjpkytKhQ2J3onFtPTngAcL2EuZHkLJvwMEeJCktucwwJgcoZJuRsydFE9Tpw4itf",
  "key2": "4WsdmoAyyvprPK16Sf881DXbcaXwzxX2exNuWX16bNkFBmmX5j3njtUNyDLCuxFf8xAqd1AsZmz9eamUEXNeuQbp",
  "key3": "2omKgLinXLPeU4xxeyHpxQz8u4wDGARLkPTPgPTP6rhaJABDSsTrhNtFuXgqRK8836QpRNYupc7iGxdANJEvyYmA",
  "key4": "2rVsMHGcKN4pe39qqcj9gbqquX5jK8nPwQjs4cenkhwZ3eAiruU1DsA2bWHCdrpDgdYZjEt8nGv4ZeaRNBbvVzxe",
  "key5": "673FvE8X8KmAsd456u6sw2eeBWTrxJe4UppdcD2hVRKXDuPfYfUedsKPX19GRZNaWJGcfzFPGUYY6eq8WUuPQ7Xg",
  "key6": "4LhbHirnXBDSvEx47jYRfG6AyuWkWPmGXRYw4HaXvY6sDBZVstWNCv9TUnnS5nHm8AeucX5cJ6Xrz9ZJxkKz39uv",
  "key7": "4585gWrr4UDQofXhstUGRhkpje29XiVqR6Ms38ccBH2VXfqEU9rzpnSQRHR974hCTUD1TNzFpApysyM99QcaP44G",
  "key8": "27K3UtGr4heP1UYTuXkWgxuVfdnD5vp3dCdZQLxf8UXtyEeZ9ioP5hGTz1muV9GKBzNunGFbfkskXkkw81BkaTGn",
  "key9": "4uysmEbbkfhEZGwAbV6XxXF8Ws3naaK7XXV8j9h61b5QdjJyG3sAnFdXXoHr7LemJCEEoN9DgF5GKDMRXRTssW71",
  "key10": "5jyKUAX8zVNdivzjTYtsVkJAPEeutnAohvSnp9xgCdGs7VVz47tDvkauFMFjVCewPUcD6uMJ2n3JXNQyBDwnVNM5",
  "key11": "5rHRven9iyyBMXL4rCSoC2N1kHat4w34HxKhyqp15QeQ79qdJJAPeQ6qkX2QRb19HSFZbncGxnuXGGab5piQrQLf",
  "key12": "3oXud4SqQKYiRBK8y1RDkYcHYG9JfekbGS8xTwz2uXopgqC9wuowx1aNZfuzacXfQCjg3JYtkWzR62u7YV5rKe3k",
  "key13": "54KVYcvMURp4j92vtjWtwNvSYZ4XWabCoV7vc4sMnKuN3s7MfwcwaY6zafwcuArsraGvLuAN44iJYkBjBYdNt1xx",
  "key14": "63HRGqpCwtm6RQs8GzvH72wwnViX9kUX7QRca5goW68C2Vw5cFLXHqwFpsr5Jb3D129utHAXcttXVQJoABHpFyFr",
  "key15": "4zXBF5MogsdFAMy1iXeTEXKxJ29HC51L9nLSz9rRvqPqd1PN5AMb9UTGYAw5hSPtueK7KBjhDbVDyBf7oZuRANQD",
  "key16": "3pgYmWCMAxQu6myzVzd4SdTRkzQPRbgTiru7frBHGxhWqrDbQnQPHmLo9JLnLfc9Gtnjhw7JqYRicLBX6fWDqyv4",
  "key17": "5FhFsmcrQoAwQt7MARhcijX3965gJV1ArKG1NEBJNcqFVXuGytCiWPcQx8zzWSEHLdJvXcsda4zz7YLyLZb3RN1G",
  "key18": "5wJLC5JZmJqZsSDbzkrKoZnjG8yK8s9jrrpVT8vQbvWwn98faKjhHavFgZ6ArdY3zRDo3EAkspWNFiTAeRwNEqqM",
  "key19": "49UvUFDXhwg92cLExtP5KNbQYQgstxJmPWP3Z9vbTWaQw3AMTE2znMzTH7ZHaRfcbPqBCk4KwaYqsvuC8DjLStYr",
  "key20": "5SLRrGGwQGUj33Kv4JFeBFB1u11RTd7hKFiTMWhEwYLZEr2RqG5rrSjQHPPg6Xz83JQ1v81RHkKxqwoWLiBMLdWK",
  "key21": "5mu8RaaFww9E9sJKe7Ct1Ww9U5iRD9kXi5HfXJTsgpFnXxshZRMgaXQZLBgM83zF26gHaLLz82ikf2pSS8K4XCkP",
  "key22": "2Kidm8FLZyQy5MWBnCUiHJLqrwSHWTQRHp8JHB9JCHcRt9XmWuSqdK5B8PtxuEHxvULVmjY4dD6wdLLKd2djRJt6",
  "key23": "SV2YQ7A4UfrNs48rHDMKb7ZqAyfWU5LEuvF9uwZUcPfE1QkZT5njKYhotSCxYhio8Vvgavfb5hkzKBvF97ZuqQL",
  "key24": "coHMM3ty5etrjHPr2ympmpCpzLaCsdebZGGbyHeSKeQPzktjZwXCvLnRRQLrRfBA1NGpRQtsucQUw36NAPJN72b",
  "key25": "2fHnCEVkDXHoCuEsLySCs2FHFsYvV8mLkbGioVSrw2rjWhNqtCPA9mLmoruNrx4XcVgsxJBdseiWJcNF5QUHBWbz",
  "key26": "553UPvfABPYYhAb9W7en679i4ex5ajZZsJdkM5Kx4bY6GQ34V3zvBWuM5Uu2ofEzr1JTkWSbZo3USFPHYLpPEk7u"
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

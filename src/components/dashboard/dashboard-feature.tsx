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
    "5411FyKVvMoYCR4vReDRZrsaqzYvrQLfbL9hJBVX3yzUpkW4kXwGS5K9XjSdwkLq6fQ4cFXhuuCCGKMjnm8PigFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YhLgphFSUxPzRMwrBENyEELtZjbKB1wvYMaXoeF8jSy3AV6oVE3mLnME3ET1MNnqJrQ1Km5HV2AJRp3yHsyC4pJ",
  "key1": "2MVhZCSZ9WVxLwiLHQ7k8dBYqLn1L8esGm4fjSKvTVwRQcmBcv9MLH3aoA3mmBtabjMdwUGRam5Y8NQAPebcm6pK",
  "key2": "5qrJnF94TCJEc1c7eTcKhe8WBP8Y2iZenVesRk4sYwgqpWVJnkMQPTHLdATtGUihtkyzE4QRPi7hce3Pv6JNKmuZ",
  "key3": "2dfSvi4ZQuNEFWpZpcS36tGrKE3h8n35GCThaK84d6uiUV6yzvB1QxpcRPQ7thvBq8HJr6kSua53825z1Gpg3TQp",
  "key4": "4KbJE7hFqwoRDmRXq5n9QJWyVciXzvgwSMKcvoS8uzLbPErHFPr55yeaK5mVN8S5Hx9E5oDn5nxk7yspRAYdeaGG",
  "key5": "48W7CRJzrSsMT1N5xJ7upX5gbuxU5NteEbaPRKDYvQQMDgkFPnMX6onCBTnXNGo7yNZGWAiBsp4TPoJBgxBbHsyy",
  "key6": "66xiaapS2BdFh3TXMxRZG1MjRPJJfRSun9qj8e67d3ngxEBZqp7QEiNvVdMnA3exPS3HdRJHdKcKPkDJhHmGPFZM",
  "key7": "4euojJBnQmnw5gpuHfuBhyhZbo3ABrQhxyZbxzbEUBE4vAefdkSVaXYBxecsmx57piNyRzFLQRgSXStmeRtLHCyc",
  "key8": "4VauqLKf8ofFYo4yx8K3nwjK5NJLzdbK8LLqM4fHMfWrG8xELDzS3ShsxPocQ5FP6DdGpuTi3mkZZDZX4pEEykY9",
  "key9": "63nJmxxoM8NRMxXqYpQ8XYgVajzog5uj2V8EWTXandPKh4oR2qYSUGFRrptmSVUeFeCEoyKn1GXPgh2nuCiXiP6A",
  "key10": "2pqbU6SGysGe3ZhaQErcnnrqLR6mgrQyXktNMBhaGXhrBTxVxKRACMaJTgdWo8ZKNTv1dMpM5RaJKGTCU4sN2hMr",
  "key11": "488bhxdcCKzbHzgJDTW3AMuZNNwRf1zibMMCDwpNJdbKYscqx82CUPATdbtd8E2zhTHuF4BZaXD7sYNe8EBym2Kr",
  "key12": "5rasEmujNFEhD2hQswzVeqHJ9p8LSozEKMbU15v83p5cNrRxEzNZcsC6YvKApiEQ31sUqX1N9gpCWzTMWoqFcdi3",
  "key13": "v7FD8QNrrA1ZpQdH5nw95PS5acrX2b1RRdfVZcxtwsXyRjyro2YNcgPUzu3iXNAJWsdm7GmmsS7dMR6aEqd3h9W",
  "key14": "3a4YpPK7ShKFcttvCJdodcZyfdHvfJDLaZXfvvvSbYt1ajXiYtvfcaDRczUKkFbsvkuWB2PRwDgiYdZAkBdowPGm",
  "key15": "2CQauNvWzvhh4CzHn4ZXymhFAaCWTLofZ1GxuX9sp6aA41Wm7U3JHNmicYbY7kPAuEGdCw6JKtzdcq5ZBWGfqVf9",
  "key16": "3Gh4Ux9W34mnNY5sKDrfdwZuwEtff588GWetkZZAAhaugYkKpVVtn9C3x9784p8Rq6WpRf6Ss6w8Tji7iKKbkdVo",
  "key17": "3qBMP9QYWv48JwYUDmertwCTiwaPzyLJ5FzuVoTZ7p5KdJahL2tjk3V4NHPtaB695LFx8mCVUspWztCZi45pZYax",
  "key18": "3YCMFHMUu1NZ8vTn1JCFkHoEEdJKYPG2xyaHt2y6kgBnoj5qK9mQePGsgjDA44zvvdFkRQfubdLSou4D878hkBRk",
  "key19": "2LkZJTfnzR2rV4FLygLkHCGrU6fhierBuZwA3UJugd3KdTbTpjwPYSP3xTFqxJDKhh8vHKcw55mEGjD3vEFbFCCP",
  "key20": "4fvyMqJuEDvfzgF9KfYYYCifzMQ2u3HvYGxSng54qHHLMg1oveRcPZ66wd56voaTSq12Xr8J4vty1FmcssVv7SCq",
  "key21": "ayFxHGx22KzesCAxhBsnesx4P2bfvcKkecuGq14J9Py84kak7wKroh98uebTT247mpDRjLFNupyMCNvbLZE3tbR",
  "key22": "5UFXQmTWjAeKhguxjGthjfuLesszEWggVBJgiKx9BaPBnMmwenzxjJ44c9k4ZXH18XAZTN9qnJ1kbahkzmazhK5N",
  "key23": "4PQahP6huDEYaw2NGPcJ1E6UBUgG1p2Ky6X6JrUn17LB2LWQWFHWkRf8Th8965Q6HHhCq8ZpukGvDPSb5pZvtB3X",
  "key24": "5nNGfAD3S4dv7R8GGKcyVeNw8LETktDbMYU8A8Zapgiq8HP73WAieWmF6BrErAxekVKZzevaUWFwPY4owNQiQKgq",
  "key25": "4XaHP9ZEcdKKaHV1fbf15qQ7gqqax75ELBoWwdSKJrpJULmYV2qLsHSEs51Q7XoSH99hMKpiJLQ7Rj9zYJUJBjwQ"
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

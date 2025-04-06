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
    "4dt859LUHpMDuGSVN7njEDKNyuo96rBnfgc2DFTaFZjGbJtzR2gQScMFAKjKtDxKt5fGfGL4qf7xP5hd4u7BYpEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfqUuTphu1i67fs765TYQrqSMNZmn2vNJmpGmFPsuW4pZtLjRwekmeMDaoC7Sj4i5x1rLyxgoncZhC2QR12H6LU",
  "key1": "5wLNKVnAyu36aftEUDxUUY3Enjh6r8Xtyo6cqCZf6yEEKcNFwk6B7MNjkDE3oZtSmxXRv8bg4sMTbmdq8xtdyXrp",
  "key2": "42Pr4USJ9garjRkh33f1bWkAsgh4i82VkFQ6zKNXN7k8R23uM3fQwBpkAF7NYRtrUfDiiwRwhbuxqQ2gym8n3T1x",
  "key3": "3atsigXygKMYKc4dphzYTPLLvoCUqX2SbAZbbNif1hU9rjf8zJMwRt8guUuUQW5qcdnTp6MyR1V1sPaFrJRYiGNP",
  "key4": "4Emo7nDTdxs2WREB23s9r8Hyq3Mr6r9X4VhYDKSKYbR7dvWxp3nQBG2cVNF8SorSLZWPUFMwDTpWF1Sz6EFLBjHb",
  "key5": "2GYvruxzUd4w2CqwYNUxqucSnEAyMU2Ge1pb3YAFTFDUn6V6MLK8EDsrQL1WM5h4AXSezxHQASUMEakjZf372uso",
  "key6": "9hUV6YbCh6DGrbQFedz3cLhQ5UjvYhooV9ofb2s9bHCffRQWy5yQGjguBNrUSeFHknxh45AVFE6hJzWmX39MjSB",
  "key7": "dybUVN3AFShcZnunAdPiRNnR5cyifksEtTXWtyW2cXshqP9swWTdhF97JPnpsxVUrXxm3P9M8Y4dToqVyX88pPN",
  "key8": "5ayom48N475ranhHQWDeJBFLpfRP2CauSAEP8nGtjF7nTVtpWVUx28rdpCZgSSLmMxwpYGwnPhoyHvTPHGcV1YqB",
  "key9": "4StnosGHyJ1CNfBf13iuPwjgzbsvaMJLLnJru762CwrBej7adoUAtWKhPEH3z3m4BBFX6j4dSnDBeMa3QPauABxd",
  "key10": "3324bDC26sJsSfUhMBD8r1bDAUAAJMk1FQssEimjHdh4p9RZrsy8tcY2Zk8DjvskaMSizVnXSvUfYtfH6ti5vCa4",
  "key11": "dDiZZdkRmTmsQLK27kWA4STz6ZCtJSJAC2WJJ9bj7CgRhNn8qnAsxDeX144sXeshFb9vthPgUjG5thtEMHG4QHZ",
  "key12": "3BdEUDBPPEg1jh951yHPr8VNRYs7qXtXL1b5CXoeSnhv4Tj5Epey3qt1yaArX5HkT6QojDDbhez4G14d43RBcPwr",
  "key13": "23EqFXixaCeEKU7uKYHeWzkjF1LjfPJGuZiKYm2gwiSjBwY1cnULUhQ4Pqj3nArdy8p19ibwCVxFyzJEs4f6NVqe",
  "key14": "369aZdR4oUvLxKPUeWewbWsRQ5Mfv9q3CGmgNt1w1ngf6yJMUCgKtt9HegDG4d4NQkR3ArE5k1YZd8whCtJX8QhV",
  "key15": "2rGs6pPVm3srvxKtboNAUnUXtqEbTsPUYyf1VzJz2L1xbh9wr1Fz7XLuC27vSu3Nv7reKuiq4NSMGFDGVhvZ8BcU",
  "key16": "2UVwJw6dUh7JUmYD5tf2ZMhW8eDpc4dUVaNceN8jj78QLQZYs4AcuJBoBKjeW6JuLR9WzFZpZu4x96ffx7G6Uy5Y",
  "key17": "Xpp9yUqXSofUduJeDDwxM2CtNs8tKKNMJV2JFPNX3x7eRTPZn7m4g61H5hDVYSkGUBFjDZ7N2L8ziTtAi4SbH7X",
  "key18": "RNthLDCTw4zQmvJ9RY6kuoavY9zH9MUoHgAiBEfvzu12TEPjboEs7qqZLFEHZ4iawY3guMYwcso7XzxN2dXgE3r",
  "key19": "rMo1kwimhtUQQL7H9fu8cEHuRhDEctoCyW1QDtKTakHdvqTNtx8VfdXnKZB3NDhYapw75peUWzj6GVbbSmzrBrk",
  "key20": "4tG4k3rcmvgQ7X64oGXveG4EZEoZf7PYK9TUgg9L11Jyc4BRMdtttW5qf7YkcVtCZWPHEvZF9bmKNj4QpfN1t4eS",
  "key21": "4YEwtCbF52K9d2nkaapAD7zT9DVF5daCn5m1A1NymSEzKZr4v3M3Yngm4HPqSDMbrNh8VPr1EmTxtxqPeauNoCir",
  "key22": "4ooM81ECh6uNgdV3Hfr7YUc5XGLamak3UbDSQah7RFtjPbgayQjkpDSf1D46uaeCVhbex4ggJySTKf1tKxstn6B5",
  "key23": "4MvpB1TvuHJy3JShX73E5cZ1Ser9GXGrfmuVnCXKCju13wcw2su46K3AYGAb3N8ixhG4crYWmYXq5ue6HACHJu86",
  "key24": "4WsyTF8tLAxFZowWtxMdRTcEyXG1DaDg9mc3Nf9FEUz4d9Wskzs938vosdMgNt5gkJhdGRToHKMAoZRZGKptEYDC",
  "key25": "2nNkq9WgQdcAPXoVYFFzhyYimeS7z5ZoywjisG8RXg4fhhgjPJM6soNUEDY1ZifXWC2xMya1KmMX7rxg7w4a9hRJ",
  "key26": "8DVfLMuUB1iaaAubfD7nbvsriDmD42GV92UQPvRknP14aDCsCi2sxLzcwPP59gQRFq8XfVoJvgo7sXGEW9vZWu8",
  "key27": "38pEVKogDd96DvYGm8ffifr7Gs1U5S3zsYN6WkmjSqyXNjq89VnKx2RcsFC8u2quFbNeZZ5bq6Cq7UwT7H7ygpSv",
  "key28": "4ZRosV7MTF4T4qJyxPrNq2utzvjgaxLo4soaKdUceNYJvFLUjV5LEgDhxxDJg2ii7VruYLTKwEcfkXoSHBLuB9QX"
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

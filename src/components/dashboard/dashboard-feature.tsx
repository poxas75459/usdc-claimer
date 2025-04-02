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
    "4a5dpgkMUJ5fVT4vabUTzNcscMkqNSPYtAFP7WSg7MRr6S4UbXvR1QXejxbjEimBNxq7VmZjJX8ijmerUfMBP8uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XR1juUs3gVpjcg1coKXxiCj6ihVj6uva4XhGuwknwZYqt4hQfxAgZDgkzAzvvwkcUuAo7Kmr1KS3LrrmP2meHon",
  "key1": "3kk2QsLNGNpz7rACPLmkggaJgnN626R1E9kewkSnAycuTsyFxW9f4yAaQdaMQxnR38cvF7exFKd74hWAnjmqjFbN",
  "key2": "3r1d42UHuWAwi4q4frxBQ7ewWzkt3tuMSZFtaVyEEGCvUCA1Nb5NP6pQKYiywwfasiNf6759t8m8Np9HwrF8ANgk",
  "key3": "4W2U52Wniq4e2YUovZa1GjjhWoCQ5MNqeWDF2nwdU3knC5TqbCGgSJX2h4xGa7NMwfCCceGBALcqkNvbcsWmfhR5",
  "key4": "3oN84DfNVjzBztfab58jfEgDCzW4PQoscBcbLBnNtUkwX7KZQmDDDM33oZVbpCpEJ2dS9gdwsFcJr8d3H3DaFZnh",
  "key5": "5Mi1WXT4Qtg7vV4dd41KroaQvhm8HAR1dDDbPai587U2RBuWm1NnnS59CZ7e86pmC8NNgeshrN6h9hfWxBJAgrZg",
  "key6": "24u2Bwv8oydepcmuuX1L4uVHyHPrSYv1SPfE9asAu1vLRedsH1x53zuiXsyxxH9avyfbXp5mEbnkXqy4c8MCXXRD",
  "key7": "o8wuFQzD5wDwWtAJ2AYwr4tg5x5QFncwyJd6uCtVm7Di1nCgzx1dKY8cfkeby2DP3ju6CaQgTvs2paBsVTTmEhZ",
  "key8": "4B6MyLbAas8JgYyqM3zPgKvhcuCmpNqqfKkfpnggeT5u6Qyi2mPGxRpaJmSAVV368L4rgaAxXUcUrnEykgxzq6r7",
  "key9": "2M2X9XnpvpUzzRS8Dmx8WJRZXDxGBKtMMLitg2a2txbGUEiLbShYyerbRQHhvwSUjgF2PkeAJ6JiHv1MdrBp4SHr",
  "key10": "3swadE3GeMHY6Y5Tk1jbVH87i7iv24KfwCefTGPC5wwkcyohSRg4vexu9DnbMsdSAH3CrCzSNZVWiT8T7e3LhNt4",
  "key11": "2fh9w5HKysdpJXQVyhbHgxzLuZXwuksT232uCo9LDQ2gPGTmYhHkajemqL1XaZkttzagaNCkTAVUjiNPMZW2nYqv",
  "key12": "4iqQak55SJQBVRetLhoRqGUAAeoTYgyTDf3wP2rTq54782a8AHryH2ybNF8bkcA4Rx5yViLVA8rncPQrviwp8EuX",
  "key13": "4Vtk7mYnqBHUhcx8F4SFm3XDbJjSQXAiNgoHkLEWZbpYsXDinpi8EXA9E5PExFQwBCxv1wFEquAB5DuFkSTDUTrY",
  "key14": "4TgZQpu4JiWyGnipSAmaq3GSceHLgTEUDjBVBDDyTWwQfwDffqWj6LJiEPLDskU7WoyvSdB1MyFaQL7BiJB4Xuye",
  "key15": "5WeBZMbKRkNhjrSjfSVyGHcDnfPumbqiYUvGPzASFWmBSjNqCzdgoHqAY9tsoGrKi2nCDaEAkGWewg5m2MENg6yX",
  "key16": "32RphTWoM7Y3eqq2sgKyh6SPYw426E3DWTFGRact2Kvy9Sd27kFLGDU7d78EBP8PG41XARv2S1r99VxYxqMMhePL",
  "key17": "5XgTNgQbbZkpBNP7sfTKT645cNS9vuua5sEmLCAEe7ShuBs2Bm9DnEjTsMDknR3ZaBN767sVjbK55c8eBsq7UL3R",
  "key18": "4aKRaZbQndT3ZCCXfUpaJzZUNyYhVQm5Re5YfyMvAVwS4Hn5d15oiqxoBP8rfzQzCvdX1rVbA23yWydAJVZEMhn3",
  "key19": "48YcscXtH3S4f1Nbv5ekZpyoe4DQjUBTrw5H3JtkLLKEK6VVMg5ymWoM9pwUrdHQCBNeHPCUogaV2AqeP5hVEmzc",
  "key20": "5PTsn4WkT3RPUFNBbpLxdqGn8gJhiF4oBV9XHbETaTCh3zVtSPiVKjf43SYYJPnkALKBGTx8BUqD1ZBUJijwBD5F",
  "key21": "iyDjgYkEtTmALthSVWUiRho42wnH3zT1xjcNmoyQET3s8fHR9xwLr1McxR9twKYDF4jnp13SmoxjY6UuFMc8Qj5",
  "key22": "5qqsQFhBKYDi2pkLxsRoPocbrWdyS2uTrb1yARjHxjvDsaFve2VUXB8BLKE3gEsGZtnXYb8ZScoiJr6Whi8vobjT",
  "key23": "581iSVCQxkownw4HaH4vMfJEbHui8p43p6CiYjhHD27iaxp3FUUqKunga8ZrENPzjr9oVYtiuojpTn1K8oVFDpHE",
  "key24": "2eJHzBRMJ4B3RFMidd1ZfbMkLPLzZJZTu3RpKf8X67aZdfMjWvLx82m2f2Xgxpfr9cQw2GrMujSknuF1t1B1P7cf",
  "key25": "3JxkQr833DF1Q2kWwqU72iGtiHUcuwUA51rhj34uoyPDpYy3pmB7BxPDhzEr9rJke9MADe2vT6XCbJyybdoF1mua"
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

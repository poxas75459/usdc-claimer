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
    "28tUNHAHqHgpCwrCEnZvDdqY3S2rDXwtwx56yG6NAAohy9VHZy2b66BoAwt1QZFUzc4PsQvqRtjhrrNrYRftTQMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SpKifL5YfrhCDkTThWzG2moV9oNNrkH5Mt2qdTzFhpAYatBoH9bQvMymu196jEakrduk3w9WpQxoE1xm8scFAEJ",
  "key1": "2R8Q5JurA8b8AxFBEwfDNp3HuRuhuh6aRAzsKDPrSywz1uL6Lvy9sPra79WMWXNnhLN3iXh2iWsnTfXfZj1yKWQg",
  "key2": "26xiu7W3tHUqPThDfmcuFt6k6vkuJhxjTyWebTAfPF5a93wJW9doN6Gh6rXUu9ss7tiJCb4izbHiMdPHJxY6MAkj",
  "key3": "4y1rzvvEYdxkEasGJFVcuHACshT1UNFo82QtWP2JVp3MPYrwEB7fczDjVKee6S95efeTR9Are9FgbxjNKgK1pZQ6",
  "key4": "4N2oDcPcpmwbQ7yt9N5orrgv671j9UfMVCajqsPqUxqi9rKJLLuiKVcoqz1mdjTeVv5QBWuDNt9F3A6H6iFCihDi",
  "key5": "3aZXboiovMrFCFKqc5xPv7qgwNYtQgTWNaVYHDFfJ2EjtiwYLR9qHyKvfqBZamruoGCGkpbJcRiRmphnoXuntZLg",
  "key6": "5eun1Fmp9tSgK1UfqnQHoWkmN17vBtiWRQn2kxS4eFjMsiLuDRjLAfwHSWPFoUeeghTJTs4zWwyrcqWwMkH8hKm4",
  "key7": "4kHA8UvrU1fuKQqYFWn87kDtJedjHNbUuVX9Xim6oxMGqrBYM1ijMr8hzgS3BJjvFuTy19MxykvAdQFTgtsDojRD",
  "key8": "4edjgDpGGafdQSoEgKVHicQu9PSsXLUJpdxtrjnFC2fhbheBeThV1YXmyhbyuZrXqUkJAymXdCaqjrgzCePSaW5N",
  "key9": "DyypCmS8qbkis4okk78QDrDxsRYsEdgYNLeEe8N8Et2c3T4igxVBScYTugSud8pLpVyEerMTCrxWGzwMx8NSMaE",
  "key10": "4Kx2SDre48Lxhttv7ZPfrwk86xRZcUevFsmnSjFoWuBzWeQC2dNpxzRx6NdvHtQtSKSLEgojvrMUahwRH3A2pSMS",
  "key11": "5NmhyefbzgPV2Yry4J2U2XbAWSCbcAtZ736M56bCxWHCMxRF43YZbMsHN1D8Y6NgpEYZLqSmZKyPC1zSLfryyL3e",
  "key12": "2fY8XRs47rpQ9QugKcBR25Rdh15oskSqPi1sRn8hePhWhkKv3pWDCUYo2iGrmVXJkDN7mKQAY3ZgGPS8eP9jPCEg",
  "key13": "2W6dioHEZH5t6yMDcVPMmB8SbPQNssMqFNGADFPTtmRny4LtdroeKCa3f1y8B4awLnLoamddmqQKCreUEGAsP644",
  "key14": "3YAM3wyqDLqRR4cYpQYFXTqofhxJBWHM9Agz3w61btVdwgv9HuRANct7t9JwUEz4WxTUm74cCHLS364X5eEXTf4E",
  "key15": "4Pwc5Y3dQGVtkUMjPPihyDtgnRji5DhWpXZsvzTyfzWMjLis98xdk2J3gUUox2m25dTRGT9YWUvtRTkiYEw3qvUt",
  "key16": "vnYeW93LBFXpjk55WVgrNnhQov832fo3VYZzmbnJ9msxyLU9v8hUMqyBFpi8DyobvgcFP23p8iL5WonfctjA8Gv",
  "key17": "3LL2XyLTVF8QiEDzy7JGrc6MAgMJe9QJvYnBPLdngbrA9PCcYTG7DTcCEZQTyhw86YWcW5JqLXECNeiGQiy2qon7",
  "key18": "3XjFbKh8PrGvBbSyssqDWYsWJ6ssUM7T3LFLXqFDHqncfhhye4BaJ88aS3ecC76KLM9BWdR7G2YK8fwGE8gWU4Fy",
  "key19": "VNSy5FrEvNwvCWtiDCQAGL8Z4sJbtgmVaaEkj9EoT9aZm8u47SLfaEqegrFLwPP1VyBMaMDGeqVKK5K75KLSUAZ",
  "key20": "27B5oT1FRbvAwYAyoTH7ZnhVUm3TLNNyzNSVcdQWU6q2WN71pPyPeci2cRgyHbFTKFENLqCN2zJnEJire1yVQ2Ks",
  "key21": "3KUiHMwmWMyAYNvThkti6PSS4BNcV5TR4WA7ByJ5YXHkACNhVcBr5pa3MgheG1GQsbT2QS1gk2teCddQXfPsQEH4",
  "key22": "3CePGaUAk8a1zmTMU5W9YkfGRBvGiisMAJPaZAQKqmxfzoysEbHvzpxC2JcUrbjTDuYsvu1iFJNKe15RCA7dB1iQ",
  "key23": "26N77vzgcEVENZCEwk6odshsqCXCHxyrT3sAxQsKwuxuYtL3LVFLCkEzGPvgSoqAP724E1fUK6B62jCSnZYqtdUC",
  "key24": "5yC7znaZUwfvA64pGuWtYESNajXcBsoBRHTEUu2d98hkQrGVvXtMiSkp6Qgc9j4BpFUuqWY56x6JJfneTzeWJXX"
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

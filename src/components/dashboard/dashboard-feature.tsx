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
    "4XM1irHBPxqfaosKpjimtb9xYZoi6WBae8owwRFMHK8U9rrCKheVHqPrP7nNjwkW8RgDdbUq8Ay3Nt7U5LUxAzkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35sV2Nh5o4WduPbLj64uqA1jWeHh9Cqd23dR4kGZDujaYfV8tP7eNHYWo3t3yeNuVyvjWJs9E43xiwzj1pmd513w",
  "key1": "MBdPBLvTeR2ZBEsaH5GN3EgbhLxYztyyA2qNsJFfRqdWKsPyhsN98bjzDgPiKsmLCDstXe8WJjxtEhzpCABovpK",
  "key2": "5csW8Cdn1UUKT5StCBezmZbhCMftKjt3SfgPGaheEkyuhWGEqTNW4hieBYAF4sqhXgSKyeFkHcXY1J1FJnqePuik",
  "key3": "4zBxWiV3993yq5rXKM4t6wePcsUzvA4cfyiMbpP2RHXiFoW9Df9WHLEFsnRZihVPoEGTw1pgZyW5jmX7yiyMxu66",
  "key4": "K58k321xsCbYQTBMaDyfrtpS7z5Wky51TYmxSbBaJCqhCvUdbbfyauEQ1dyJ6SPfYHwsu7brSrNn2TsHgqLLwyR",
  "key5": "3FzeCtkpsFeU5FgGZQsP4KzZLFCfkdJAAg65h2E9Yw5HCwpniGGwSCKRbrxLEGppyufZpTm5W4xVBzNxAYVtJeRm",
  "key6": "3pXMnd1NUGW16n1LZepv35Ejn9o2WnCLmWYou1JAj9b2XMvDCz8Mi2p8Gsvoxw44VFYcXkDgYipWrZJD6tQ8dBa",
  "key7": "Q5ZttVzs7JKQkjqaS4dSuJYrLpZrzF8EHwHTvUm62C15AjSgkWQt5KBL3edi4uHK5X5vWJUfK8X3X8cbcFpXDL5",
  "key8": "4XBzsaTPkMbe3VJkwdAA9QDtsfhrZzBGCf1sK86SEQb18hDTgFh4SrZni7KtHNN2xLvcVF7S5BTcUi5spCUPE6hG",
  "key9": "2uWp7jhN5kU8upNUBTMTSZjQtMHDgp5rdse519gAcSvSmjWz8eNU82tRaTUjxwoQJasLj6tPCsC9kyK54oXW9fQa",
  "key10": "4FLjV8SJGipTdcKL5HgaZjVtA9ab1xa6Q2HP4pnXR76YtvXQy22wvxB9h9CMXhZ1kpaGx8Lu9TYkTsxbdSrJQErL",
  "key11": "5U95io4rcUoSNhVpogS2Y9n1FzFQZTDQ7epxkwXkikD1jfPMiubqCjka9nzAZmfMoLrHeML2tbywfTmYM8nu3M6b",
  "key12": "2ZcdkKrCKNaUxdT5UzvaVDd3cze3XaaExnp4nAEPNCzexGFNJVPpBHj8DL1CW74bt3PiRYGVKPmT47px12NVWfg2",
  "key13": "62XnCCE629ZZrLgqEdyiahiHgCc9cNH3YqHrDWpHtHouvH8ZrspCgwtgtEgUfamhhosxZFnMykucBkqSfzZLRQc3",
  "key14": "5i6mD3hYbJ4XUeGHnqaXmQEeGyoXUCRAjUSzmDDXgRT3WU2d468nchWNVma37x8sQ1HoTVAVCKoXitfUNZyRinq5",
  "key15": "56daStmnB3YdF8oadXpswrECuMVtxeW53P41emkZKHfBcFgqvbMTjA8XrxkGSQpfZ3691CyhpCsQBP79pWnxdhJE",
  "key16": "C7P655TMYLWZHRhTvaNM7Vzyz6WKC3JZKza4JBWr5cwtLvQcWggAUGhuzBSfeXoGDRHV7QZu294tbEjYs9XXGrn",
  "key17": "2sr1CzPMxh1Pkuz4Jk35Dht4Z8PYcyJW8zN1Xn988oKKMQxeDX5YmipKwry84UjwbecJTDLKSJBoU56Vsh6rNzUn",
  "key18": "2VSuB4TJs1CxgAgUZy7iBE37LvQumvXVG7RK3ps3ba19xYiZ7roDyEngfQxKZtWKqeae3qqMKvV5xveiWpmF1DtE",
  "key19": "4VLJLk2reX9YmyHmFofhK5RDiqx16S8HXYU48TXyvBGD4qW6cebLW7MEXouu3yaXpvzhoeW2yiLY4CSnF6LifHjt",
  "key20": "Bf2GueCNUnHmEKDPct8m9gJkvDvtq7rDrNyutQnNXH5VU4SY9VgpHXChXD2v7TdSrqXKpjD2DwE3LLENeFngQwC",
  "key21": "3C1o5b57mvhnLBCeHvDfGTwdw3qdpJBCJ3paA86GTSigacYp5FarKzWzGjuSZjUus8uBUqhTGqSmkSLLixo6EYZr",
  "key22": "2g5GL3iHRixfob1TVoGVgXVUgz4QsrnwMHezg8KpfK1QEZZeQjtZh3rFA28VgbtDnKN7PrRmDoxmuWB2jEUmBHqy",
  "key23": "WSXhXXiyff3iFA7WJidPB4DxUUebcYFpfBkiV8diK1msFaYwvKCQQSY68sb13N6nUfod1XLtw2fy7MZmJrAQUKK",
  "key24": "4Vgb5bapecLBSK96XPmQV2WeCRfqaWJXxNSVRffjHAbWsiKN8QNoWwEisKBVigkiecSdb4rNmk4HsBWuvpUAea5w",
  "key25": "ANuGC2semkguXjRyyQEGXkoGvhMuVLDhZ6tTj21sjN4muN2NwxMywLJ3QmVnPF7zqzFtmoFCw7BTFjvGPK2Qtzw",
  "key26": "4C3oNNSKH14UhbGCrZLjQ7QKK2j8iPp39bNKzFpdiKtRrpZhFA6ZZ9pBhT3br8hVdQmQX5rBehuycAwaJK3HvFQB",
  "key27": "3emnGHp8baReUiNEMTuf5yFhCWmRAkBfGe7B25MQU3yC9SxkebLwH2viEGFWr3sLy9GvZEZ1cyihggNx7zAWqEie",
  "key28": "43FNZjdGFm4FzkyMyrhFNsRHifgxoCjCirAMDa8KLezdmtH83etfoQgw1SHPjKQnBHVXPYVeW8Q4xYkX8kaFVToM"
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

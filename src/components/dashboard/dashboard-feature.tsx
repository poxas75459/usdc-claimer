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
    "gZALf6SHDRJyt4wYyxozLAaPLh2fW3nJrRxDvSknQcxozBY46kF35C6WJPU9ojm6d8QUxSpBz4GxGiUAxJCMhC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46BAasV44vneUWkkhGPwQgj84kVX7uPjeT9EirWgoBWnE9mC9dpSPfSqhRzy16TiWa8PPUVoQbj8nTDdNHMZ4QXR",
  "key1": "4Sp72WsC44MHME1G2ZDAs4xE33Vh61zVGG4CKEP41FVssvEK3yMmirPqngX1PcvFt2cQp8RyBWR7uA6MdPgiRn7Y",
  "key2": "46QiA4aL3SGZaj4eThiSS23XRD4VJXmWpyMeWM18rar6unSgSncU5QS4TVQAE9s95BHoaZ5UGv81cLQT4GzMCzhM",
  "key3": "o4YR6fSwU3kYQqdJnCmJ11s3LSRzBaUpHjNzVati43LTnp7x7wEX56giecVkkaEi6Pk4ATYwEJAPvzkRzmS3s2x",
  "key4": "2foLW674vph1FQPn3wgJhuTSgYBPnk4AooKoWo1gDovTRh267q3BLLWbojNKpBo3fZu6gjhcZdi5nAkuJRWA1tpJ",
  "key5": "2fDitrXJhcqpuM9JPqRqtv5rLkEC9cWeaDKsoFhprajhE3aypanY9w4hf8bs9mDjfahH4ruaYVv8JhgS9PseyQWS",
  "key6": "4zP3DwWUGRtGRZMY1PNa4UPWsqBR3qhZe6uf1hSnX7wvmx1vNaBSpeaBmhhmNFfSCuS9hxdEgMb415tM72WiGD9K",
  "key7": "ebY6sth235o9eNHP2CTEcTZ3KGAH89Pb9C6u5Et3utAQn9wRiEFx4s4ttrpdgoNCyAHZG6Ru211eQikmocYAKnp",
  "key8": "4CL7hvFDD6w95Y39swWDn7rkZGAnAJLVEN5M9F1fANwgCsXnWCgFGbE3dbgZsRrngLD1wCacTUMHN2axazv3fCQz",
  "key9": "2yBJYm7dwRafp7T2Y4qAnY5DepbhGtL539GbyAQpeWfML4xkVsKgXypoWBxSAigzcbNYjgGDeRjwNoJQRXEbwckE",
  "key10": "3nSyM65NqiGaE91sHcSVYBd1YFfh2Jvb2VAvoFArwehBoLCCLzUWCVcLzugUQjQYnDEFrMYKDmmggvoMfYQ4qQTi",
  "key11": "3zzQ6C3k97iv8pc9kN3rQBhRSkraiDke9YMMCqUAPZXMUneEpxEmppwVUd4pni9xVjVJdTKZspQjgnSBknsx3MYx",
  "key12": "2bK9aUJsSAYEZanRcrsoa9ZSPJXyr3RFALmBHM8DQiPTncPoaDhwFPScJ7onL9KDPsbPkfVu7GYf2HDPTnXGj8wz",
  "key13": "3mURVrjvao6VC9AThV74mG3SqmfDDMdJBzQys7KkoPK31TpCFkqPU8JxrrtDUhuDv1aGyeuMZEoz9BGZSCNjfTbu",
  "key14": "4zpXBV6vBsaWa1xdQUqwUQkBRecEun2phhB4cP5yz6zs7Pn4mLHLrZcdsQar5SMw9VpAKWqRELA6xndL6mytCkar",
  "key15": "5h4UQEdmjefT1gDQ4rUtZ1sGShtT4gDP5wVKvVAsLV8zErUnj3f2U6YHP5yJumanvFGfqgRKZKPKs8LFGJxEHVvw",
  "key16": "yDCL2AzG4mhE39ao7sPBuuN3PiGJ9vUVmB4QiaAwwKdoSLPCEYZYc6aj9aiHWt5ijGKXHuS9bKwXNwETRnxHjkK",
  "key17": "2h1Rw2M4TL7zqWP5zZw7WV5HAMmA554x2aUKuhgFqnfah3Q5WKvTuXg1y8Bq3Q7esrLVAWEb6JiyBh4SxtNYrGgZ",
  "key18": "61chVnkPzxvYfX8MTiPch13L2bUQ1fwSvzDmPt7kcywuf6S2E4d6wwpoi5AJZvvodXUC6PtPUmvR54MqFVSxvskY",
  "key19": "2BSF41zZBKcDJk3jbPgAu1vWLScvXsTSeZWd3LnjHBNnNZWrR9L6xfpR9URbUY8eZmWehAm9dQ7rfHS41LJUM1rS",
  "key20": "399GJfKjza76pZdZjCDpMXsFirLE7RB3tDmJ8RupSRq1wUK1Lh2Ehx7b6gtipyCJUF1a9Xe8Nt7hAUpdfB6adCSv",
  "key21": "3mLhEy2uxwFGvDaNVvF2iny1YuW6LCe4pDKMecYMM8mQh8feAn4Ah4itrCQF76C38vgmPDSMWQC5kjPJFMu8DydM",
  "key22": "485L9drQzvdJ2bRnBjkVSFXCKG5WG2pf2DdNZKaQH6SgwinyaiYF8wVH4q2Ba7a1DrRFLhkyohtimBohEGBKkWyA",
  "key23": "2byh5CgoXKyu5nv6yrpQ3BT2zvC94EFTVJrFkLz7D6k327w6Q8ZAhL6Gy83YPSjK4LLsrV1FtvB11uYp6nCWpTNL",
  "key24": "4AHuCPk4bt7o3nTG1bnvBTxdtgYMqeEp13F1zwXNpz7s2F5DgEFyF7UQ2cnjUMCX4U7gYEpz223gRpiB6uAcLWsm",
  "key25": "3MwdeRBN4d2oK3dFRWzAbUgs8gsQBjCF727Go3LZfjbF1Qx8pDij21sgs2ACcsGbsKfiNYuBqVgMSftd4nqL2Jsx",
  "key26": "64CBoya3sVjKMQhxLs8UNz5c2Up7ovM16pdMfYCZbKSw1PHYePn48Q9BPqMzuJdhbVsxFwmrLhBctBPrVhyAMbPJ",
  "key27": "2a5PYzP9KY6MzmLuGKFudUCBoAB7Ago8YZzAdnJD6TNgZMbWGZ4LX6oWurRkKy5pPxSdjsKuqr8TBp3DY9Ap4zU2",
  "key28": "3gUbnvHQ3Uq8rpgggRwnHSDqY76Kcv4VcXkete6wjKkM7jEJzpouxrCrtrZsDvyK8WemizEbwDM5bwzKAu8Ksd1Q",
  "key29": "2cN9sxStXTsUc2t27zuZufcBmWcfQ5e1U3ES9xkGm7AJbrTRG4CjyNXFb9fv1MPPW9aQqEFggnoJb6jfbXivNCtL",
  "key30": "5svfS3UGcQMwNXTD6jFBAbBiE3rGwvesEDzNKXD3xwpFgDrwJLrygs8pHxtbdUz6ZnLroyiC49ZtxCYMqC7k8W5s",
  "key31": "3dMchTwApq9wQ5HmJfMY3usd6VPsRyvEG6FnnyxpiPH3wifwMKdxMkPaRZDytTABf8FNtdRsa2XRh6mGpnaN1fa5",
  "key32": "3ryamdiRiec1nuFmkqqbnSJVeRfFJsJwzo7kXqrNySsquh6fGAdybEF8gxg2WhT7d8ghFmKMvaXUUTWh9iodnvnk"
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

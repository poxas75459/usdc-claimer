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
    "298oN3jt5JE6oLGjhpWCar6bM6XgHJ9oaTPX5bVD5xWFjcwgtqbeEyFjP4xiC67T9LNGEWjXsLLCdv5o2JHiiY8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vBuvhSr8UpXGgffuyu8jqFTD9VEgQDnkNcqfxfqnqfuF1uqReQTpNmbGQVZDFYHs2NR4B5fhhPqD1hJNhqgBwf",
  "key1": "aa1GH5s9E8g1szSjVkCc46ybAL6VqXXZUYavY6iU9gbgkdcQZgct3WDRQBDYhYNtFijfKT5FQLpxoXjRDCMF72c",
  "key2": "4NTVtyyZKZVBZZL2fy74htRJgqbA7uJ1Vs5YdH2CjyPifkLHNogeQ2DixYhGLhnzBxRyLK9vNQmZ6w6cgfuECa6K",
  "key3": "2njAEvyS4bxw9dUuvqGtpuwq7VwMRJWBTvzSqk7PucCtxaTe67qJ5sGJYuUDsWcRnZd4xWz6Jo6FEQx9i5d64Bpb",
  "key4": "3fChvfBaMWseQKUfLNTckuaGubimahv9fZgT1FA7niQ6KE25eTLsrKgMydqV1a7RkuJ16BLteajDc2hMSGmjV2Eh",
  "key5": "evi9rwD2k5aSb4DdmjGomXRMdaAh7eK8JS7hLwgpYkqgvuDWAEUJnU5cFX5cfPp7GDFxxSv5FE8fW96HNsJzt8x",
  "key6": "8j3yEsDxiLUVyRgeP6HrqZkyc36SB6563w31gZaUHK1vpqifXc4S7iCjPa6gr283GDdJftbNhdwjSgMs4AL9tR8",
  "key7": "3YUCaLjhgeJpujUW6LnyxQgnV78B691JHi8C4omsZpaUowr89kmtzTbgGQF96yJqzMxxbaeGnFALF1FNii6FUwbs",
  "key8": "4Nek896RjefEp9ay5sEhkfMb127rtTCYS5pizE6sDtRU7BrVWigS8Y1dn5Q9hyDBjgc4qTMsqMn7LiDRo8Bn9iUp",
  "key9": "3z915k2zdSo6aNP5dyS86NXESPHKyCW1bHVZLgmHJ1nPQjvTPidvXD3ThH36QN4aJs9rKRtbozj1DJQ3XiFuEecT",
  "key10": "K5VerNsqVwANiM9Gf935HSvLp6AsUVYZSwYvDmc5pnzFHxV7nUiemmoZoW7USW69cbxWHVgmN1ZrfxmK1ud2zsA",
  "key11": "5dLv6essLMrqwbifFLzcH2PFB8LGb1vbMzryDRsFyBYr7Dky7BSJyvwqk8B7oYaaPZVDWSiXefcjdub5hU7d5btS",
  "key12": "5CHTLtzhwefszecpBFmev3pVvsjCDxg61ZBtqVRNdyi8Vvd1V9u2H8LmEjf1p7M9HHZGtXUj1PRw1zSkywW68uee",
  "key13": "Tw5gDLgnKp5kEPUsxhfXPTgX8jawAfMWNWaeH6KoSiEdej6tdiCVvRBbRN6212umVqppSsy5ayWDQEmP8vEVwX6",
  "key14": "17gkN7ohY7aFy1Grw4N22zzGAraBEkAaWkDcqrp6riQTkHaF1gDQQ7fy8pH4TacPX4QGoiLs8uFUTDd8XmpBjtF",
  "key15": "51Vu33czyeJMWgqinJqRMNsVmEorbAUUSDQF7S6NoFVGffvtzghENDiiZ6wq2dbejoXUvTeZpZCBwp4ouFJjnhhe",
  "key16": "3DJJhtnPHZ7xoaVXhcJaFRojMhqFxNec6GaLbhktviSpiR9qDCXiYr9195AHCgELLV2YMTDG64epPaoMgD9whXKu",
  "key17": "2btssPdvLTbAezJkvAU5QnBv7JFJ4VNusLMjxpUXQZiCrpUbSWvc9meHuCNHvwmEeLDvhSeRGCzARNxUQy464TmC",
  "key18": "2iDESZ6EPYH1EvnjTBC6GgvkzoXszo1cxZSvEUjjd5pJvCkkiVWKFnn9WWnXGPBaLsnGT799AqTCtSDJcuepRSdM",
  "key19": "4Byy59w22ptPnvcKfRoC6y1Wz9RawRjUgFjs7yFNMibnPZ4g6NF9NHz6njSVx5QFEUh8PnKik2HeJjGuhEtNLMoT",
  "key20": "237DhC3YUoikTcKmqk8TJe5Yo5RvdxGRkdKMieLmneGZ9BMamcHAwoA9ERK1zFhxKUgbBxYq3eBdxoy6638sTWEj",
  "key21": "2295sVzfCgcuDsLVLPXP9DkTKPzd9YqxxR3rFULr3vtnzpWmxB66BJMjSby6kvf2VF2Z5tWLnikn3n1PhNn71wtT",
  "key22": "5oZA4VvW1WMv367d3pTsRdpPkbK82UYL23eQkBaszJor3RHHzHNnYxaHTasxWg9qsZMEUM1PCY7Du7DVvGYmWU2m",
  "key23": "2o5KpTkyH918Wh5iGKAt5Hw1YUUrYRDPAnfRPmc4b82ZCUkSoeZfcbek9Maxs3uJFWbV39WHjSpfMGNxnnrPKwC6",
  "key24": "2jxFGnEfZmSuujpxVZyp82oK9EUXEtdvaHSNsBN8cNLuf4u7GvHp1zrGVycmHTHWUWokas8E197MF6thBdMCNmKa",
  "key25": "GXZ1wCzHUvGdrfXnGmmiHZa4xJSn4u5veP4Bkqe4B5u737DUUf7MfP9gvszd2xKKNCongM97VFK9ss9kbamQ9Gz",
  "key26": "7hEk4iNjoCmgY8MTVapw5xhjgZfYGoJEGXoAhJ2zKH9CSEBqQjmCwZVKyegPMt2Qqp574FN6xwfUCzoGDpurFU4",
  "key27": "26346eyyta1HkkYMmDaSJgKEbqWj6WM7okHBACwZEgdpYQDdq2bwNsGxGJ4G5vTUTCTYZrGYvrkUKng2yCxDdB5y",
  "key28": "3BBvSK7ybAkvTVZ3cWx79h6UL1iemkU7ikW2TQmrRzoGGVsYnLi6E2fULc2CkR1YfQNsGFaZ4Kr8ZcQrmLCYjJMn",
  "key29": "4H7f1i1DJ1nc432ExGS2XPTtQZeHept5cJC6GAoxmMi7oA1hubYN3ZWcQgDPYsfiPKFCU191FSEV6BBWFQrGH4P2",
  "key30": "452KMmATuZETxhgyXmiBuYidb77w67hv5KbHHvMmri3U1V5NyrWTHkN6EoEd4rGCsHKpXb3NM6wpk59v3DUwrt5k",
  "key31": "5G8DKmE72A7ms4ZjTMKaSyhNu4ezDjZv48FveokeWp461E4ui2AJpMZs6ef6o8iD6Hdx56CM6hzy3En5s83LJoP4",
  "key32": "JSgtQAJG2T4iqA4BkZBJ2gAUx3x7SzGEf6Qjbhsr9H8RdGTEQTURzppJbxyXtJssBrPByeUFD8SjjLoixB9FKTx",
  "key33": "1BDZgKxzrJU2St97xw2wxWgfsJ9BH5cnN9bLieF57oxaJ4oaLoxC5tfQP4CVRANpMjnqD1c6R4qbQVMWvfzvJoa",
  "key34": "3QEgYdKRV4ZLXMSP4xVmpL5QNJ4856HypZThDkyBYYAbBM5DVDD6V9rYdfrRKHRvFqYaZjR7eiSPHatixwRpW8pk",
  "key35": "C3DZ3NV98Z6g9TMy95sCjGdqty9KNKmr57ahXsY5sE6usJ7V8t7Nx64eSEsn3FEuAEEh2DxXCNDX31zvWSfV9V4",
  "key36": "5DDCJfVLjajEjxkzir1SyPvEa4MYFXqtyLa5oZTss48LCz14o5UGtkDSLuL4CDZcVzVAjXmaqen2hBdn1dSRAG6k",
  "key37": "4FxiLXY3UZyoGBY254EUBzRn4BQ1uHLHdfFeLZKvxe8deAv5MGpEuYP5Zf3XUHQgHro3NPefi75ebhwk1s7mhh9a"
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

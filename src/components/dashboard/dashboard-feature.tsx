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
    "4F31GXg2JuRQDgnB3Cpxye57ASFfcP2wicvyaLpcDpGXEjk7zsiwroYNMcdAw7c7SmN3a379AsPk9bNQ42mRcYvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F3waPyTq35hoYrShYQhmW3o5LKJe538u24cqGR1WgK2GSkBTD37bVR8XbyCStYNDb3RYrdJs4kDAyQPHu6ad4VE",
  "key1": "BEnDGmPNgDj99j1hLWEN2zk5joRZvgTJtMStb53S5xXBGESkD73uRgQs93oF6zKuJypfTkhbXs8NARe9gtzUp7o",
  "key2": "2iZPMKUaEXFg7vt6ja6N5TLskuNsXgCidQZiHmimCwFA16SYFSjMUygik7B1CXmo9dK1MgM9WsKHRjYjZD79vVMm",
  "key3": "BU6Ppk9kHxdkTwgRVFtLxxivCWqkuTRusYch9yMXNAf7TUNDMpXyJRJing4qxbEQ4YihEsDKjAJRR3yM2iVjdfC",
  "key4": "2qSi8W2BLKdgxzX8d9qTqj3QzWm4Ld7andfYRzTGzQ1vDu1iF3CnP5qhB3p5rZa91hwa1ghAzqC3A7fziMNE2A8Y",
  "key5": "4SFnEpfb9JfQLXug1h81YMZPHTHLUVWRXwdVSB6jkZNvGUzXwHKN39ouf4QwuXs4H8UvidZw5m1eN1XSrZBrnPtH",
  "key6": "5KDwJeXk1qTydSzrYudqZZCfAxST5hN9cyxprgXSqzVMJLv6LFV4jsuGAowaSGhJAy2xJ8RbYoiAxY5pmnDNBCwz",
  "key7": "422hCvL9b2LqfspSipGdwVAfzizVwcUckgevjbbyty8xBoKxnyW6GmeEFD5AU5QRxDV4zjrQJTmyZ17heyeCPTB3",
  "key8": "5MhWUA32VZj75rkUtgMMnXrKNFPTpwkRmrt9b2RambnsjkvBqwUbrPahj6zZ2i6Q8x7bszTACkkRkZh3UojZWD77",
  "key9": "2uvABJWa7AUvfVixGkxb35kxZt8SAprXB19zg2GRmPgyH475QYENXv3o4c1M9wDS62pxQtwLM45XTYhpaBkZZEC8",
  "key10": "4nBJjhoWYZYoaQpxPfbPHRBzaqW2aEeZR5GE9PW99K2fbPJuUxd64DZEEFTSdXNwc3dqVvbu9z1nhSgjj6AWmojf",
  "key11": "2ykURJqoLuhBTCbg9teWu43gRu9cY9bx7Y9hpNcQwT3m7Lbk93kUEN11pHnz1DnC9mXjGknQQHtajjR8wuZLUemN",
  "key12": "5j5SYacTXpvvRgup8zqmEUvjNCUyDyrtrBHnGFrUEkyBPvGT8ZT8p5RuA34njno8qEgGjqe8smLjCpV414TRyYBf",
  "key13": "66jTr5XWjcqCVFym9w46tXW7Fqcorb5brSNoCQ8yT51gJummzcmLw9rPeQkz4qSBpi6cpArp5ZKZZAyQNoa6jX3H",
  "key14": "2A5am8M6K1SGr1KTDq4Y6p6EBQmgzyKeM3YfrwvxQACS6c6CS4z6hGdKR6KwTGmai1TsAn3KFFD26jwktoumrgnL",
  "key15": "MuG54PYLgDzSaRvUq1KWXZfd7qdh9eo7SdprekPM2GZyAJpqsFPRFqHUnX25eNqMioFixVpPZ1w8hs96LkDpvgS",
  "key16": "3bWNV1spzohC34dBW2RUZ2TDjBvqwuG22fnSQYdrMLsMibwY66SC6cNe1USVW7Rh7th4pQBu9EBXHTEtDNtBBmg",
  "key17": "21fTjDCfz3xoaZrLBYYV5GE4VQE6a8PsS3GHwZ4yyMgGqvXC7dGJLoRnYyToErva7E1eS9fmpx8CDSCH4QXU8zDC",
  "key18": "2UFzRFMQacBuE9LK4uSJN1KxTGcdxnDzdY699XV5N4btTHbSDsfE5bbrVqvj9hsTvsKMKYKVS87cYyEqGTXF2E24",
  "key19": "4pE1RnMoHjbndrAjj5VqTgR4jcHc5av2Ca9JS7V5zj1RrRSBJVJXfRBNL2PXa4VzNkLo7C8T7U34YD7nP2gUf7QC",
  "key20": "4TYEtmEmUJ8M5wnmDWvPUN8sfB9jawpVB9p2AdUE78NSdbXhjn3WZC96jpKDfVFBS7eEPZGUssmTXxZek48pfkfU",
  "key21": "3Y976NuCoyWCAcvvrUe2UDmLfvvcK4mRgTHqpUtXBLmKXwX2UC6f9UxMMU7X3SHx16GXbzcj1sky2Z1Mbjsaqcpz",
  "key22": "3nLzUYkdvUYa74VRNKVFkDgTAazxEcjjQLGMCZKG4YfRccNhkyKb2jwLy3BXad1jdDET9EZQmNvBoVNV9EhkY5KA",
  "key23": "qMK4VcMKjUz92X5NjcSaDoDML3ueWJsdxZwRJ4UUNCUwKyRBsZd5cuzC64WFqsQwRPm91afHokMg1rYDRNoZRWD",
  "key24": "Yb1SCenA5kocU1faQ5UCwhV4bVX64KUf3JCcfTyzYSiJFg6KNueCLsSEoet744y3oLbBGqgYxZL6P3KUQK2KkKT",
  "key25": "2eEmdoSzJyMHP6WT6BFQhNnkNefteK8sBXhi41TMgB7fYCKWriQc6gQsYudzWXeyCQxHBMD7HrwMiLXUkBWy127z",
  "key26": "jw7cm5nH3Cdcp5NFDdMBY4TSGDAgB5Zg2mduDNMeQ19j6znLz42wYr1KubnuwVDGeP1K5guqPoNmbFVj9f89qnz",
  "key27": "44e857hB98SoiPqXQKXoyYD5iGLS1EHhjin2xx1ce3Lw3iHfGGS2kjFs6scargyRBj9Uk9ia7k3pWg9ab6wQEuhN",
  "key28": "2dzraRKWryigPwBSqp1Z7p7fhN4j4LNEDhg5E2Gg3w32v3SuncyPDrC8sxNZ5JNbzWos8yq54nJrM2NtyM1csYYs",
  "key29": "4YTyrcnzbBQvPaUPZeWiFyfCaVVXt8UHXS97WuAsDbb3foUWiHBmS9MAvSVrqLqkAJQSs5vE4PGhNH8VCmS8NiAg",
  "key30": "3uXAfbuYaJB9N3VGwZFAhe3N7Zxa2StMsHa6Sn9U5RSBFZBQnyoiwNHWTYHYxnS7XRVTe5wU3kQCDyDotmKwL12R",
  "key31": "27JpRxdi1f6wKAGkpz7tro5ZmHzc6X199NuSo4KLmaWVvPKtw5Ew5VUDq1hAYomeEQ98mqreQxTRt6H2GPJw6VCp",
  "key32": "5Gb7CDbxXdpmEmzjvGEtYnzPW85zLgDmsHUAQygG6PtMv3E7jc1ACAWhaJtKSPwmboVdLaBDLJFLMhEHmDYaKjFd",
  "key33": "5UfNpFghoeHSfo8Z6k1xW2aTCFyZESX3hx48xMN5Btr8RjUbsoXMn9tB4A7P44DmQr8PUphu3CsdpBMck5WELxNG",
  "key34": "5hTEAQZY9wseBUBm9fCAF11MtxfuwFePZgm7aLsgkr2pF1JszKHY32w6K9y4V4BxuAr3dWgNGTnqtc6EeqB1RQdR",
  "key35": "5FWtcMkDVEQTAeZaEPiorhDy6fdTpqXDGKh21YvgUMd9qW3RYtRzJmo8ryteELUN1tLCRkYF7nsFLcW1QXM5SQf9",
  "key36": "2u1uuE9avE1sgAomhUaJYEasEgTBUvrjS7ViciX5Kg764jGRTDKvX9f1vwkjSZyo5suvKQUtvLc4Eg35yobtKvjL",
  "key37": "2ZyCwT3k31KohBwFfubmF93LqLV67e4pzs3AKEarnNVLcn6F3Ydsv9c1iBiEXncXJEjouRFuwdX5UvXa4j8kWy2X",
  "key38": "nm5kr4E1dXYdkzkT737DU7XQ99mPs9cnPo1LeubrD4bHToi5mwQbMDRnrtFRJjEgP3yUcbft9YsFquZxJUam2Ei",
  "key39": "4WFAbj3f4LNeW21naeBaa5kiJNkasdDuqSomo3ynekeKkeEwtQ4VrPkbjMNdoyHoDEFbU7ADGJWqVZQuGQiVNN8c",
  "key40": "2wwzJgX9UmfQL8Yg7pXhjBtjznh7PcpiaZBRevfucMmoqcUPL9aCdY5wtTJyu5Si4gonbFqDLzAoGi1YqYYRVbRS",
  "key41": "WNYeqLJoutAo3aNRbsgxTv4CNTLzVo9q5vMgc39PxWKGUyXzy2d2niwXp61c5LmAwe42ghN8yFRxDcZqQqfbbDt",
  "key42": "5UL39ejZqC1yG631TNLRDdyW4tGNhJCAevckJfoxSyoauGPL2zeDQkgQ1FC2sf1dWBfSJCySdiD6qQbJ2rYhYGWY",
  "key43": "GJrTAXNjjv5QKwJjxGpLwN7GLnRPbaeADGXzy6jBgao91GpmyQ1cgQAF9UoYWfY3fkPpGM8n2oxewDpTbmoc8Tx",
  "key44": "4TCMYpbR6mjojJFvAy1kLmEzxMDuPc72PGh4n2VEUfSSTaLuzkQ21A4rbZ4H6kwekPhw7hzENhvYPoB5HPDRE1YS"
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

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
    "44v2nbsWTNZN8zaFMQp1HnxTikVpTqBnMg7X1GxvbATZb7d1UtCNyNcq8uzo1V9XnhK6UFTrUQ6QXpRR6aEJGnvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNejAnPJGsp1ivgDnxEmnKx5UkPxtyqSUDbZrAWuNsraC9cVU1nt1nyHr1xzit8dX9Nm397okCjHCtoDLfa65js",
  "key1": "2zNsAMGJURoPcYgCw8j42dW8oPjLvzQf7ynG5HUXAFESvqL8R7B8nynHF6rKqEhZguGixs6n8ixgEPf9ZEUHo5cz",
  "key2": "5ptaXdbUp9ZxsEmNJZytGYTStUAVKQsynpaDsM4uLHvXTJZVC2FpMiyp9zmWP79WK4jV8pUsN8Cud2ZzpEKX6bs7",
  "key3": "5Ht9uvWEJPfdTUHT5r6YPvLeLRce8D8CPeUcjCqxQgFDWDzUrRfS7yZZeeEFYD2ZA7wtshhwLGEXCYmXrhxTNbhV",
  "key4": "52FuEhdj6wEqhjcHQywN7HsYgVpqaG31imxiUGdno9bnsYXVgKiefTCKNyA71vRRk4dfHZNAPXChs44hwTHL38UE",
  "key5": "3HgWRh2auuJU9sR6tpk8x44osdHzcDT5S2xrx9HeTKt1cvJoqvYWP5L3dpW5YcSyF6MhvXAtDMTZfQ9QTVrh3bdu",
  "key6": "3vuBfTyhEKizrud4awrCdsSHo8e8AHWZY5PBZKnswvA4RppnHLHZoypBcXJUwWrK3FUCctpEX1LmDts3VGYpdBhG",
  "key7": "2wz4T8QMpLs1jsGxe1b51HmL4urCXAk8Wu7Jb1vQfAzc1UCHLDVBA3ZkLxtBPwdqikEeqnv7HTPbWFktW8dsDgDM",
  "key8": "459dADQQCJ9e5XBdTBxxZPVfpP3z6sQYAMPZaTMC86v9yR2FMbpi6Gcyit4YD1zPdDSdr1JZcrB2BXGyjLQC3fMJ",
  "key9": "2Zvfjwgd6ZdRmmmx8mK1PitE3CsWVUG1bY9DcSfkKLToYA3XcUKwKJkUbYQmZYCVmxdniBPApPeArF6x1tWsVdXE",
  "key10": "5rAfQ3Nr2mqZ1j9EkMkLDe6UFHDGGDRgvbCjfQMTs8GPFoPK21W3N7wFZy3BmhwNt5yVDCbNuMJEnF4zNZV2Ro8m",
  "key11": "c6UYnHMyRuPPiusmdhSuBVFZaCvxK7Jcz5oxxVGGJUQXJDK8kt4wYRXFBTHdFNMQ8fNUH44MDR7VQd5LYm9UZ25",
  "key12": "5dsgFd3Qtvi2UMB3FwwvZkG2AdhSrTsbonw4gJLAZKAiHGEwZseJz4zF52cPdYbPVVc6DWHt2rNgokHRRa7sarTi",
  "key13": "rZpZGomdB3iUaZLzPHUsmEi4eg3GYriJ1rk155W7hMrqPnjxvMu924pbgVXvRNEJCk4rsgQkZXn6ySHDBnsnakh",
  "key14": "XCv4MqN76Pq9fpzCNpeA8HceJq5gmT4oU8CJ4EqwN8YY1SAM4VmJJ8Qi6WHLYeqdhCmXyo4TP6uxNmht1HEiAYf",
  "key15": "3WTHYrpohUARLn2S18RT2UptP9PcDV7Rv9Vsp6KbeAaNeFCwiPGgqnUnqsRv1QmCbT4RPre5n8PZsKwaEbUv8Miu",
  "key16": "4uRFXnernXfCwa8NFnwzvbGgE83KpGK7wkE7WQGzz1EBo1W8BQwGFtiS1PKocKTc8jzz6335UZCnp3bCk7jDtvP2",
  "key17": "3JzqkLX4vRuGkm4krCbHsNX2SqJfXXqWM6bVikrCz4q8SDihD1m3weA35TuTFkVF6xjGcSDFuRwcjoksvKVurrik",
  "key18": "5jNQgjibRYM4vDXo9GGZNrsAhrCbFGqzRMnweTqmFmDeDPRD7rbtofmuz7q2XwpNhzvkM3zoNtmJM4Ymd3bmoEQY",
  "key19": "27A5e7aY13t5Asjf8WEeC9f2MGhfhwVzrFmiqXu1s55KVS67GBE8W3pDp8Z9Dc6RpQASNEPwHuSK1xVtZwnRqZmR",
  "key20": "5ZeAT6YePzkwHvti1feLxCaP2znuumzQrGwjEprSfT5YjFHE5uMi3xdurEhP9Rkvp3znW1TyrFX5p3XAEKX9ZYQA",
  "key21": "2eGb8Wc9KMsQinTrNosybgv6VgiRAtYmhVcafr43o2oBkkWEofe8c4fPyvhZhqXcLkxGdeoiX4W3KeG1QenbfiJG",
  "key22": "4pWP6H5BLNSSGBnrzUvv8FYZxAK9bGCYAhsWELKL9qHruQGUYyvoehrGtMxMgRGG98KYDnffLdwoNDjxPysnnYow",
  "key23": "3qcmLLjt9Mo8taLb99KRQsPVKpV1F4tyRWpz1YPrpVpVne5Ln5HwPcTzoCcqhsC2MBKNqkEK1hEnUbBCr1RKbrYY",
  "key24": "4xjwfp9MwcMqd53F933Z9cvAYJ17LdvY6PtMu5nv1Avo9XTZgVNuTcUjYx2B3NAADw6ehgaZYCB5UtfKoxPXfcVw",
  "key25": "48GZHdpdML7cCrYT1T6XWVeQvXzg7kwYQntX5yxNZZgsZSPvjEu4exbN8AsCSUL6Q2bxLJ6gtaSQaosJTewKCE5D",
  "key26": "5PaWAyj1CBQyioAG2mHHtfLYHT3mqtorWRmjvFgYtckZGti3JKU76BKpi5wdszYDu4GgFMGm7dVgF62yQ7DxqAUn",
  "key27": "5pon2ALZsBRYYMktNWqw3KU9GhPmCyhzcgfucrsjxji4cEh5Kobsf2F5FxHiyMCCLWngNYFJEG5KVcnMntofF1GB",
  "key28": "3Hv2QUQcjxQmozZ1khAxbfBMc4goPYcobs4y2dGr16RgVG9zY5f9bKQUEk3NLyBMbaxNxcu779L3ZKLvKjKyC2aP",
  "key29": "2WTfutvoEHAJ2oDSbqZDdZ5YHWmaopr21GDmPKhnWRe46wfjhA3RH9wAzydcj1uesEqcwgSt9PZ5Y1PsickJzWNn",
  "key30": "25397otTvCL1RSeByRdwr63bQoH8RFkF5iWBnMo9ugkaowGbXZWfpkzyEmpkVAdNjBequN325Lp3v9hwkTcYTVC5",
  "key31": "4hB8Fi5SDZqEDJfaLjUBdZxaPWEGPoq3DUwaMnLSSj3qHz8NFYA1qM8tYm1EmaoUjY81Yc1ACcGm9DjhCzLS5DiG",
  "key32": "5Agmb8PNhvJ5bNyX3WQ2bGPuEyEpB2tyMHgDxc8BXVk38GgwAwMA21c5F2jU3UsQS5V4kTDGci5May3ZDSbjELG2",
  "key33": "3f5UXuypFRjk1xNVyCDkBDJXLcPSgguuawFoYx5h4vqSFcPygnCvR9iCNeNLVNz8cTWmLm48k1A1Byfer4Uv1hyw",
  "key34": "DdqQdJsvpHYbvoJ47XDE5WV2ffbaFxN3iqgD2sDkjCy6XHAe1bs6882kL9j7Bp27oi1WUkdgEjFxCNeenzMbVT8",
  "key35": "4D954tnZES3HK2auDGddkLAMJG2TT7m2zn675sUttyt7uuMjrCAq8nDKcyiUrirAuba4WpL9nGUB8LZCNVgzxzHr",
  "key36": "hshC3aNmhpdA96mrwwaXjH8kUcaPcvStiVgNSXu7bVBR1fvsXt4omFhWgyyHov7snUEG5oYhA1rU7R81URiXuBy",
  "key37": "4Qhphco36u36TBFvSW9BCvyMyDQ8iakfqp4xqo7yjdWsQdGQbRzgii7gA8YDiZ3vbcPeE1P22nT316DjW7csvwYS",
  "key38": "4o5yq1deW8cgXeSUxev8YPJmrXTg39ytP5t8LbnAEot3qoqG7yeRJu21VKnmbrSx8ydF9GqtHhjk1joH6ykyCFSp",
  "key39": "s8yZNTXDdYqiMx7AKnx9u1B19tS6yjApxxUVgkv4Km1T3RCbywSPYBsywrz3CpvqhRy3EELWpq7efWNuAMr882j",
  "key40": "4B5mcQkt7BcJr6HnxeRHZoAafnCMSc4Yv5aD1NPeqUQ14ty45iwbhfzLzUbKWPApKLuoeuPpT2nKxt3Hyym13xVv",
  "key41": "3n9jNCoWny4HPpoegZRjvoWCGenHHv2fmKBtSGvZ1N9niunv7uhzD6kBPmHHYW6khmWB6wJr15TQ7ZphcbCJrSnb",
  "key42": "62UgFyfripdukimJkCBQF2DK5D64Xh3kkiF3FmQrDnMx3rL1aA4yQhQ3xrz2NnNqebWbw7MHPYDXz3CeUQnixVLy"
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

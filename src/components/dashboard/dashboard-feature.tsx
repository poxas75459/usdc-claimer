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
    "5QZ6ZZAu4GUgsYvsvoCk6LLqtp8mL9cL7vvRGdFsJSHXwnFs1tT9Txvjt7262u14L4YHZ9duopMqZPsFh49AKFv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amE3XkH93yk8YxwqrR2gu3PD7HRbyBrvUQRLo4H5ucxRy6AQfkKEszT6TeG517av8Fg6nSApFsAsf3CHXDdPH7Y",
  "key1": "3w5LcuMRu1rUepxdMjepxYmpvpTtjBPcmVvC3BuXnuzSXhyGjjb3Lmtfwx4yCE5cWTN9CwgboCgFnS1VVvbj64T8",
  "key2": "49CgdBUGWDAnD4SS9emQoQ1rh2hNAuJufcHrQv64f9dhyxxgTDSpBgVWbCyoN79g4qbYCex9joPcK1fmgBXex4Z9",
  "key3": "2h1R5NZFzHhujx2TzDPNHVzG6X2LzkiMuHsGDhETCkiPNsRqW6sKMj7e6Jja6ex1hufLvdPoX7gRYgdFM3Lo5Lha",
  "key4": "2gZSqZMCSXGQbDaT7xtNyKacESv4zP3ryarD1MHomQzy9C6kF3E2zx8UQnyWEuzXZ4WW7ANatYjumAjWw1VvJ6S9",
  "key5": "52nLVVDJurF79micAp1hrqvakPufy77d3xuUFVFaABApN4osrXApCXdpMxjhorT42sxbsxBsyjd3hJqWNSaWAf1S",
  "key6": "2AenoSWFpyxvwMMj3Cgb6rBKLaA1fX2s384CuYr8nLQzNXDN1vo1CnenGYjdgwoRygZoUN5Aqzm1uaJUiFy9VyoB",
  "key7": "2BAV5wRWaJ8PuF5QY5dzMikf19UkRJoNwa7SZSsEHqCi5vqf3tkaJGqTiayabWJh1meyGLRgtjLsx9JE7nARkucU",
  "key8": "2ZPYVf3bKwv4Wa8TpKZeHJb3cUZY4NLfQSWQ3RsLGE2xzBC16bRzn5yoWAfHJkZokiiJEFUvWkW6tF7iaWLLNN2c",
  "key9": "2jkwjdjLXp73zTv9GyRfEVHLGWYTJSTcMWW1HTXJRHFYDGGtKX9GXmzbYMFR6hPQTn588J6N51gX5D2pjVDqtosd",
  "key10": "4o6g7pwbKPKQnwqJ2TZBgPWWbnH1ErAE3aVjFr6YHEC99JdrpBMSLhB6EaoP39FMyYSa3SHb4JzhFdzij1LpQKxi",
  "key11": "5rSJoBwGPsXQBTjDv2p3hawHX3otin39trDZpNn4seSjvEm3QEZrsSYccAwcj8pRxBy68pgH2n8BvW6tFi9S8gLp",
  "key12": "5iSG1ivwGT15YuRG2cjXgdZxTkBckvV3e4y7BRCwKoRrNkUVmU5gpNb63VF5JhNcSVjZeAByu38FRr6wFMGUWUi9",
  "key13": "5qHdnD2c8fpDhqidkDKYnKJkz3YdEpUCihGFDa7NWcpo8M487fkzwApd3C1b2MQdXWYes1zBfp5qosbHukAyD6EW",
  "key14": "2GiupatXQNakq2Sp2hV2SC7ViXhPo8vkVE6LrLiSjZfpXh8dQrX3j3TizXDW9uFirFSeYWUD9YUr59pssKT2UP7B",
  "key15": "3X1H5ecJNQ9xf526p3pUpagX5EQ5tbjuFGtTFy9kKJ76JkANAwtrm2Y6Q5nBUue2JGGhNiFDb3nS8XcNejguEsd6",
  "key16": "4SCyD66KwMJKqvchtrG3cnF8MCNkCAkzcRKjUbKcprBvCz9XqhEVCZLpcZTAViYaGFwhDH3oY2uWRwBoeBgUVEME",
  "key17": "kwu6KBxLx32Ncb8mNcNhF4c9oFrQobXWra22icDVmussCX9V8QBbvpAFYWiR91vrN6gDKyuFq2dUT92YLCSt2y9",
  "key18": "4MzsqTukHMVdmmG8QwQLyLVZAQikebMSrCBW4uSWyM5UpDxvHHWYb4QzfSisrGsMYd5uwuj314mzAT1cSmdsV2y8",
  "key19": "4YoXWkW8JFg4bUHUkNwy1Chs4kDbq1YaAuVCBLBjayosMA2Kf8mkkR5o46mnxGkzogvCbQvdjidZ5nXLJJBhb5Vk",
  "key20": "44BGHLsuskXMQAR7ULcYfW1P51KnAoBwf9CmBGXjNQP6ur6pN1BNEsqv4MF8gGE1WMw5QDTzb62RUJPie2BRMs3z",
  "key21": "4mXR8TF2FNek4poo5jQJp9LurtNxCzCPRyMxjTyabej65Z3JziGoH9Bu9w55aHJmL6gUwPdLK8AWAPHTkopkpV82",
  "key22": "Rp2H7turfDFeawwQYZscx6PqYGidngw3R8CFzy6ajpNX8ica1LkjFXBFVLU44fwd4uio8FRwXvSzTjfwRnzvgB6",
  "key23": "3UCB6HdHvDTiKGpDj1Dxbqj5DQfgCt2Jx1pTEYiY4gN75QxMBQfKMSFkNJhH1bHGGVK6oXXRLSvBkqmaz39TXVBN",
  "key24": "4doYZajNk8WgmybTPkHokuvRjBmM7Tn8L5hPpi9p8UEVDCsj9G7eXxEQSg2upd9zpf7NmhNKvpSwBbLwDy49MvUZ",
  "key25": "54hoV6nRheW3HpBaSFMnV7rG1YvyRChT6nYiDU8tGSTfV9pkGaBAYdrnpxVi4J2ufJcx48rBdroZD5owRnZkVhfG",
  "key26": "3mqorC7UNiBoHAUAkiEeoFhRu1uWLNxA4hK7Acyt4LFCSFqyyWHbERhe92bxN2Z7ycS5PfshkUqZbdhSjTgbRHGZ",
  "key27": "5PJThbyWLkQCzWzHNnPJ6eZqhEPnk5BM6a4ki1Vw5vyXAE3w2J4cjeXYqznVFH9ycLDfQYxjZNfRW42wSBpvorcs",
  "key28": "3Vp7pKBgzVkTvRWFKnYrnrxBEAtkqDSw8cMeYJTJkTVtRhDnum24v6MaWi5i8YHEBWvdLMn42ESdgfCL2yj8QcKw",
  "key29": "38Tq9YvtXqTJfxSTisAwAKP5TjQcBuTVZdtECwQbw3vbL2jiQTfRs2iaeP9RHUdApZHiGkutSE3CKuaXTFBEio6W",
  "key30": "5PQSgA3BocQXSSjpnpmEsvCNF38YCY6jWTuUqv2522ZQdmi4gRVouD76AYbmTcc9SYAKJwKnRva8GzMi7Q3j9vke",
  "key31": "2LafbdEd1xYKAkfRSz6Z5MyWeBDmg7PmTVS9M5uQazep9JP1fMcYcm9v9eYyT6cWhvERPe4ugT4kuhpdPzb9w3uf",
  "key32": "2dSW6AVSCn97AWAGZNjjvjG3RNhntKdKi6EkJPfrk5sVQmxokBFsGatdaRVXybishhtzPAMmzpkULWSD4vykWjh1",
  "key33": "2hnirssQLKHER7nbaiJ8ViMqaWmg27exr3DE4P5AyVbTYCuLY2q1cvtgnGoCy2iMgPiGPVcpLDqyTuM6bgpzRGJq",
  "key34": "2tEYTUiDtAhyP1kGGvT9Kw9iTsLbuo8fBqKaXyfGtnfpas11pnFFVx6rQA8S2eufiFY9uMwrSJSFET4NeXJy6Ts3",
  "key35": "nG1TdHA2aFVGyLHCRaMPab3i25UDAKer4BPCJnuMp8ziyA2qsKYueUspBPZ5quiMG53WyMAjqACiguYwz1P5FvA",
  "key36": "2SPrVjDUYrDjTjwfkbfURYtoyrJPNvqociTzZS9TMM3EcEgg6EeN9D2KAUVkoSfye6u25opQUXhSaKje4Uf59Dor",
  "key37": "3746pVpZ3g9fqM1r1JXJcuEbY3qg4QAzTQrrFBpM65MiL43bojgsLhZsZbxJTMxuqLPJCgwEsJnLnPCDQddg63Zv",
  "key38": "5kYh6hPUp7g44jnciGPojFh1YY5HzndVn7DBmD4ocKekNHR9FP81FQzFN39DrEsAn6PYC9np6aaLuZRHRRNQFYso",
  "key39": "2oQXgm8xY4LiKYsicVuVKUL8vGR4ceEDRiiurgxPELmkBnDcKfHfc7ekuV5tQ8cji1UHbtC14DtgTipLX8ss8dFu",
  "key40": "5Ss3f3fg8rM3Az6kYKyGbJDBjYsdrDGHQBkPxPkAsCQfngk4b87cJJKWVc1FVG74iv7ED3ZQiLhKfyUDtno6ir4L",
  "key41": "2ztpBnVj9uK1D6rwjLLe6FumYjyhodUtoqp7KbkfPX3yAcvhSC6yZr4BZpiS14VyBkbY7AtC28fBTG8QfEsM51sx",
  "key42": "5pPFrAu4YBHLpgceUsGci7DGRxEL7FhyGGKXGFGiTHXZsoGEfAwTFrfiUimcgKHTv1DTLHe2YEHhJpnYDk7o3TxD",
  "key43": "4K5roqcfQ3tF3p5Qncq1rtjoSW1VvEJSVHwZTmfun4eJcJcTN8ch9jPynmCRZTZMogTJGYzPMqftsSZo4ReoEUQu",
  "key44": "3nVnHdULzKEsjM9a3DXah4G9TErddR6rzYuiffbK3T8Nx7SUpnCaEDGMUNSM4LY7FWUVgNUQWLrYKrrebQXeoQ5",
  "key45": "XtbsT5UaTXrhAcnhNBAN76SJ8QHdA4ShGgVXM4iK1X9qWCKZKJn3R3LmLSBVUesUX39hYyEY6nS38FRBu75pZzd",
  "key46": "28FWskEZnjdwJH13a1R1U3g5B9k2i2Jn6GEQxP3uWxB54GaCbR5jr4qBqpKL4cvznexQUvMXhktv3zn3aPp8SKau",
  "key47": "2WSZ5wjxvXzm1sF9pFuk3AXuFov9GTz3ytD9n1NrFrUEhixkDTbsAmj4A4vzZYmPoHS5hwDHvuWJcjMwQwcKktWm",
  "key48": "2SQu7nUnxrqhRtx4J6zjtFV6s8sS9NAiircg1Khr1LzFFEBU38vRKrVYYvqT9vcm8gSmwVKHJnki5u5v8dvrd2vC",
  "key49": "4FWrQPTuwudXdZG4MKvHsxCvdKhGMpoRpSm74MiFUVcdmbViYcMNTDRamtJcVP2xBh7Q4RCEZCs1jNVvNXDWRvci"
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

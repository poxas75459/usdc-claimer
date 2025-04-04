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
    "4nZKtj2r7hS66MPLR7NU4YADPJCP8WJCFYk33BrPtaamvXQBoPcP2UF2eKUxLGVkL53axvaChnKvEtCJuvVNuA63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hn71snVEUzAaKReTULwxY5xzTG4nHtuHgB7kYJWzqegD3PgXzXMYnm6hDFVs38cXzAU3kmJQSiFRQahapcDFvyP",
  "key1": "3PEkudSrD4osnN4YTBfdJ5JU6druqC9zXAj4QDQCRod252ccm4YUwDbM7t6QUNurJwiWiEfG5vRQNbzS9sJMN5qo",
  "key2": "2AQUjTx3Gras9XabPQysrEs2hf1WyHqhyFmA86sMEtYKGzTZwkDPwRacK9MLcbEid8iXyW8phiQYHa9s5y6CBhGT",
  "key3": "dJtB8ek2fcpiPJMUKBGiE4sAXv5BwsFNFyv4Exdkpdu6R5H7JR9vnNbEaK6uL7V56tPSrNKaWauJkWrZ9sS1FnE",
  "key4": "255eq3bAyq2cSBVCo1EeyfUYrrB4YJjvUatjTt346K573kUbSFmAXonCKqVYXtXPP4W7HMwUbPfucJrgLVHCGor8",
  "key5": "3XGZy1m5XTfRB9hjGVJMdaQPvsvBFBCDgBxJcg4PQKzp8RDoyMP69LC7ykxZmJhWb1s3GrTY3FxVBwiqpUSdoBjX",
  "key6": "4kPUmzkWnTYMAA2brRxkqEv8VMaL72ArBTvqhqBD6zDWudeQyKZwEe1eL1NCb4WUuRnxgFPMmRKoEVd7NXs6tnYt",
  "key7": "54Er3ptgj8j5YUb6U1h3pLHMhcK1sj8hyxEEiqCexxfBMYSPvQH3VaTKkJXGxmX8K6YvRB73MH2ndPAZ7iNAxBv4",
  "key8": "2LXmzNvdGAkkAgH8js39p79pWrEFzBRazYxKHQfVYvSj7tyeyVARPnsFdToS9pXiJNxpbeBY48hMjMXDnNPWu7im",
  "key9": "4FeV6tHgeyDS6eJ8ztHsHHtRKsUezMDHsSeZLoaFPbzZwtDWi8UqZuevSL3yEwZ96U8tGfNG2onrBvPSqb9KS5B5",
  "key10": "3NkfuNg7Vp8Xe147i8S4YBjpuAKiZ18a3RvWnezghnCbY3veqGWnKHYFs7cchdykDai4HPdPDjdXinVt8gEEnWAG",
  "key11": "26xazdhtrpNNTuAAyS3Dy9WqZMobFswVVZWVtyfKrW8z6vJomCeTqCUwDtaBV2m9qm1ap1KWY6ooSZrT65y2rvVQ",
  "key12": "4nBoMiQZzPbP6jzet9hX9oNz5NCd9ADbLi2EAhEehkhxZCut1p7qpUp99358ikHPs3jzf88mgLMSp9NaoKmB7VtH",
  "key13": "3Cjt3AahbPZV4Fz632VJf7GEuxnSBcMgVh1T1aRtHZVbgtDzfEFyk8VnNKzxbpAUh1GY9p3Ys6xwaAXFRGijHYwq",
  "key14": "2i8go2ukRzqfTd9hfbLjksJwNzVvexnVCu9bknMZgTfztGEafj9X46GHJG8nKHEPRxDnJfFaKkHG31K2ZRZb6vwy",
  "key15": "fXK3JbkMPgX4jQG5StgMjgZfxUSy7f579dqwAB2VuLNoXmWYk77TWLMiGF4wgDH4bfyHzPus9LhWJzgNeVeViUz",
  "key16": "3DNJhscztj6KSFgD9MQRFTTCRZZBpe4ToX4CFkkvqRwbFvaK2CSHtqf8kZr7S9zFZjqSd1tn35Se31rNEsQNTpD4",
  "key17": "3dSqiXKFp8JL3qHM6CNQRyPqDF8ojKK6FZEdbWCo3pEbLHtE8ZMYiJ2C3W6VGQF2dH26HgoKi9SgL8yqXaSMV7m8",
  "key18": "2QeBBpk6NDKggycw3fj29oQGqdXDGTfj6j18PSdD4VTpRQajMh65a2oBGaZiHBxZzRnHvfWk6GJJGmRAGeS2pRBe",
  "key19": "1Ee2ynHeMKPFvvSDQryWaBPSqqFTeXpqMpMXPWkbLbEbFSR9HRXQYrnkvWKxgTYes16QFA5px8R6ahBXdhMtjAK",
  "key20": "3avH67WNWSsC76Z4Mrh3pbrhSVfFCbPadwqs2qqmpN5mEhKTYvkrwq4bibmyzVcbZiVyGqmTh1hwwkYRnELUr2xd",
  "key21": "ezk9VuoW61cNhVABZCFUgwtUnfrZYW4tfEvcnjFCMwUShntsk8zsXDxVvYE1wZtzNiuDrCLuPwb9nQ71z4M3Y3Q",
  "key22": "LQ25iGD3m46Ky7kz16AZTcrpSDsPXZQpmwei4xbrQrZ86LkktmUZzhN3b7qbkUri3hkX7kx7h4RhdgeRmygDSip",
  "key23": "2Am4n7Nj66TuGF2itBWFMTGLdKakXeaWpEJsBgCoDFkeacAaaHMifxBTujWyJXDLQ9FYAMhPBUZ819r8MU197oZC",
  "key24": "2YzyjWcuekPyW15Svf7G5bGKAMeDG6gR8F7cH2ReJkZScMetQkZcUdYjsaY6fZa1QozH8mp2VD9RzKuS4C2iuagx",
  "key25": "2wFyAR7hFajAQX1X9v29y762aGLHqtcacXWDn9mnRKEYJmMTqBatswKeMH89TUcvVFFH6htGV9oFKHtRbneziuqv",
  "key26": "2Xyzp7PZALh1JQXQzXux3u1r8zzmZKVhV8bqkpPFKV5vHqqX3Zu8DLgS4Y4Tgr6sA7S5gpd6hTje8DAPB9xYcjEb",
  "key27": "286E5Z9hcjLZbeheenSExCyZ8tTVESrNHeqKEi6DiR9hrjDcCwXW13Gx5NuG8D8B1gbRugdY8xjgmRrBnpYcSFfi",
  "key28": "5eJ9VQeQgRnJzudYRw8X1fyZWaQhBrLvLk8XFMWqinzgJiuQsg6G3dogVuVnXUt826poiSaz7syFquCvVEvErjNk",
  "key29": "2rtMeF8bdwFezLMu62FWN9YAfv3XWP7jL818BH2ujUvgfKYjSemdfokHUVHsVNMx18ZjA5vt7vLb9uudQWcEpXeT",
  "key30": "vmaQ5xty873MTGp72UuihnxuHsg1PBgoLgaGCmFX9vn8uy3DYdWs4LiuqfPNxP3YJz1ufHBF1reFAvVseRdBX1j",
  "key31": "ZJHdHFNH5e9cMt7ym6WBk8tX2xAxq3ZQL6jx466ypgvXgyNZ8AYWM4kiwp1NgRNDRDP7QKzHhLjs8sfsvTUjXJQ",
  "key32": "4SuEQaZWaVBaHfp21cqT8JMDiESNQjNNBo5DxexpBcJ66R44Qsb7mHSRLZAoGGjskahZLDJ5iS5gSWNyZtzxwSmc",
  "key33": "4Hxb9p1H1kPRRF1tnuJgPamaXWiw2YnpjHiu13Vdd65JLetfK2LfJiu6dR8G3VntRi9r9Mf9zaZYBxWWjwNrk7A3",
  "key34": "ZrzZSvg61o3T72QvmtgYkD3X7AQZpMmbvFnqydE3JJZ4J69TkJejxYEfqiBfMXu8byPC2NeBDj6LzStKwXgBs4P",
  "key35": "5FZZ8BDMy2fhvEh2CT12TvWbUTuYjwdMZ3ESx3vBuYEqqH1pNSP5J7D6ihb9xFPt3YzbReBXkp2wwnWkyB6WUnra",
  "key36": "3ef9F8vHjx1Cxr51xoHpS5H7g6nybqKT4TLCaLQQLKgLUwwUU6fpwTSs3ZvByqTtwhsCsLMGqJdJT8pZRA25okGo",
  "key37": "4zZf77u2ngGEXMN98yqJvAoVooekEqEDm3UojFqhKXbHXLjV7w2Et2qGFPYxCxCxgTtwmoTU8ZNVXwSw2X6mNkL6",
  "key38": "4r5ugvXidVEf2eapmHK2f1iN6LiDMgkoezFenUA2nPA12Q94YKtBkSEvMCzx7FbdK2dAvb8nqBR5qqeGNRvzhrGS",
  "key39": "23uLHpxCtGe9Khm2w5pbmHL76hxiK4oNVbj7Jw7sdqZ8vw886wdKKARsca1FZAUAoXWLCMBhfs7WtxL8KYy9f8L8",
  "key40": "4CHBYuZyqdtPcZJjiwn9c67qjiCYVHkXfWmo6kewgxnj91weP28pHsTHAma3ZNXHPyDJ8HNYPYue3vpmb3pFXDVJ"
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

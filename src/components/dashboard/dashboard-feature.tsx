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
    "mouxUP2ctGrFGB4EEGRuxyp13yoE7y6dEDBD1c3H3D8VZyKgU5dpCrNoy3TnBzQCQsNDv3r2xyUTmqNTUTyt25M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58JVHvUMmeXqiA5VLgN3rBkybU1RApFcCL2gcH5NvMyQL9dXTRJm7XXLQ583hqBZnhexFswsFsV47XJc5WQDpDHk",
  "key1": "3KpxGCxXNatbaV5MHSUQuotR1LBVSRkoQXdvspMLPoSTApHx2RMBrcxPYXX2wAjT3v3viyhv71q6oFwt2DKr4gMU",
  "key2": "t6PbVnxDha2mdM8aTb3rE4Ep1Pkqna5GHXHSsYDYwVxXg139iajLHVZUYqSXdD524XKKSp19SrfwRkdEuLKfT4i",
  "key3": "3QYgLXU9kjDvQdx6d32FaqmGyCdTKqDJrSLgM13CDJoXifgR4srqsVCC1Fbrs9WvkmXK6u7BTEP5PxAhRrkn4RPe",
  "key4": "4vGTEBy8FWwmvi4qxkhfCxN5w4MdN6ErT5rjwf7mS2HfuSdky8n72FAYnuxfdw9DKg1RrwmEMQtQayuZzW8Fs6vV",
  "key5": "2FyaivdCHNwkAGYeiDGYwcDAneLg2NJkBwZAKFkos7tt2KF5ZTrNSZWbirda9N6GGNwp7T3jUEgYXettU9YjcbiT",
  "key6": "3Npu1ku8Wa3WxTxxttfbyeBYXxDvpnzHZXQB6CJfEv7gT9t1vLYeyeNRiSzbKiNknvrCzPrsrs4sFKfVEgD78N21",
  "key7": "5X3zzveijG4NN3FyKvUfcBBn3naWdcyCPfyiRRpcxZZznvY9PgngSDJAriBoyqZs1JTuQrKLDYr2VnPCAK9LzbPk",
  "key8": "88DJdVREFvmkuoK3upZQerGkYFJERpwsZWFdnr71BKF9zcmqHQVXj76HrYb2vk1Lrfmmkjj1ZZwdXiuFtFnZ21N",
  "key9": "61YYm4gZ5qpWjVx28ughGbom3tQ2KepcGDyj9vmxnTYtAFDntxvTQrACB72MSZp9ZhwKa6hNdTvTuYVzzksgPTkA",
  "key10": "4F5wr6o3DyqyoKNHmB4cF8rjE7meg1hG5oPjq1GDxNRM9cCURq77YwUxKv9URSaUm7UFDEpgJhd7vXoAQp9u6CM6",
  "key11": "2NJEsJ8GRzFAGuQRPvUaU7tZey3yB5BQvSqU4zER2t7NxN34dph3NvjFxsmWeiNvhS58HfrRG2uQG73PMA5s4JyX",
  "key12": "3m3mPFYxa4Q9hPjxKsJCSQdMZQEGwRNm7saNkjFc2y8egT1rgtzqS3oJHMrTM1hMbfGCWAgxHHssAqqSF9E5uUqY",
  "key13": "2Rc6jYiS4uT7uj2GZtkUfPmUYZKdmHQ4ivkicB7gaEqMxuW1cbW23Vq377r5pgAEecFPHGhoZxEbXBzWyKcts7p8",
  "key14": "5hf62oSK1BpUnmwKXPVkSDAHGQfLkLVyg2KuD6Dk4pV94uqKUsr7zM2gr9iksp5yXfN7PzUE4qUTnCxawJAdb9RP",
  "key15": "2Gj1tSE8gpKfPr3eV4DXDE7A4HL1bwYHbSPmSiTLRcKKG3N3fwvsuiN1mnbvXjakH9qPDhM8j5aPYEimLhkQJLgo",
  "key16": "3pMopPEgNWJmHN3EkXwipV4nk46BoKiGucCNHNzofVqNLt2JmV1RgmH6B5Vnwr1tmncKTwEvZzgMNKzee52QRk5k",
  "key17": "2yEVrVkXGaDCoFcy6YQGrmqBpQFFC2gczjZ7jx8M6pPBUap4peZUprkZnqGp45E5PXevqp3dm3HdgQV3wYy7pePe",
  "key18": "26h4BBgiUSgVDuHW6T1CvR7s2jpTyGd7at2Yovpn9ccdP51zpd7JvXSKTAhm8VVJA8i4aMx8t5zLtCNK5DtpVeMe",
  "key19": "4rZ6nJUDWdNvwyRvXTFoanBbCRPXLCgCEAJ1HcWmgiwo6tRnUXVKub7yNaRmHiCSrbn1PbQFdCtmidG6FGbQVR9V",
  "key20": "4GcGNFGCcpnNuT1NVMZmVupFBUTMEkkYpYAwqq5pvQw7zxmx35VmBhGsxDVaN73XpqUZejTpweJFHkbMeRsM1r7C",
  "key21": "5NWGJREVhLsyQogKj4UfvvmxFpx3TvASanQhCW7Y3D41CtooqT7t2nAtyx1AMSdXb7QNRozrnQBasedz12m86PYU",
  "key22": "2HxdmqSHsQcwy4azadym36McQ5wP9arc6sXEZZ2CtuuTMQnFtX4ktYt9y3BjPS7tkCnPUrPvxQtyxEqCice9UwRF",
  "key23": "4S84VwagHkaKcoHMQxKHvWULfpBD3RKpsBiiwNv2PSaGZGCEVPEv9SwksDr5ynFLfPU4Yyp6hggFRygnhUpahMAH",
  "key24": "kq3vTPUx1gDZJo7goZGJuKoshgbKi29cfB9joaCR683ACm5mCX2TZRAxXXphy8PEYTCYGoJ6ABeqcvahUDLUzVs",
  "key25": "2q5dLCbHL9Aweu6aTQMqzCvRnTNkdthsk2PhZHh2nVUHPwTY8LyLuFxTbf5RKJke17xQTJwNe8cqp5QgJ26g6bfR",
  "key26": "4yWXwm7zmosh9vsvx8rkMx6rGQT11xsh1AXszeEfF5bW6spxMRk3NETGH27GYc4T7hbeQsAs3J4Rga5AekzX76Rv",
  "key27": "Tmq7SevEH9jFzqJivYBrEJY1XHUEDx8f4MoqaTSsA5ngD1riHVxJeDWWwwgsqP21YAci3Ph8VJGv3Y7dHmGc8oe",
  "key28": "5GEuqyXKBYe21zTzBJ7mgGGFCetqVgVp4e5cjVAwsbvANwCvmD59Frg7P853JMqc4msMug9VSw7hHDoBL3BfexqC",
  "key29": "3xt92QLAMk3YnB1GWF8KTSfmnxi2cs3b912rorniC2hsRuK7KFpGTceMChG4iPVpCcXhSH4xc2nZzVDju4G5QgHX",
  "key30": "5mez4BgANrvVvyddHSXpAAeZnz8ockdGM6QWV9dwYMx4ZYrCQatozfq9KXhaxguXoS6wUnQAVygAmhmXKRDjC3oE",
  "key31": "ZqYfdTPmrb3XK1bn7uZcHEkAknKcPxurGu27rqyCiA1Mjra7jUhT85Rx9hVJdL44RKPPGJ45ajusDZpBPzQZK6J",
  "key32": "6434H2PMDj8JirY2wS26bSSztvZ66Lx7ntEe5FrgMRHY5yv4jBpKqy7kB2GqEyZ9xRjj7gtc41BnmX2TZZifQhEL",
  "key33": "5y1XnosHVF3isR2AK3nDZwUTv6rj2ntGyDrXH6Z7ERuDPqs7vwG12YokEaUQAyYktGm9bkvPyNuiQpdqvHz3Spyu",
  "key34": "3osBC1KP9ScQbMZ8dHBucjGuprUQcFimuv3eRoAJCUubU4YzC1N3yuCRu9tUrMqHmNcLtsZmCsYfvsSqidXLoyh9",
  "key35": "s2NJR881RjZYa9nLKRD4j3P4JaopKdQ5JZgNQK8vi1so2Wi7g5V2Vfng3qRAhs8odKv4q6wJZSHJMwaXHjVz1gG",
  "key36": "3FVnZckBayZVsR3KNE268Vqn7JzQJD9wKc1pLFnbDfRh4BK4MCwzzdbfF2LQrUhdopP5t1p4vg5E9jfUiUxs1Fzp",
  "key37": "2ASJtPh9EQczHSFXLjZTDjdMh9eompiUh1Ra8Lj1owLmhyV2LiZ4fb32J3VWFpj5qyEozM3BHErCtbeNWqkraxtL",
  "key38": "heZUb2GCMJ3u97AZMhTHx1HexzH2Eaje1g76CwT8geX5zmgqGFMEsLxNzTMWtNU1pzWw1zpCXz82gEX5E7zjRyt",
  "key39": "63qe2EsykyLGnbZ3jkBoe9RNKgjtkq4ZaCUqw6CzCh1twv7bghrV8hzNbXLqC7ABGUicty1duS8QaA17cViCypoq",
  "key40": "2h1uTrgix3g9U3LYc6qFjKajwcghpbAMTrqTiVeD2ok2irYZRscjRNkKc9pkT7HDrSJBYZGMMYsz7fHeVca8Es1W",
  "key41": "4MFiEnPmS8VRKJAXLJkgwLG772fsff11tiNcfW7RV5xRoj32L8tyZtJa439p47zQXbyD2jmoKYMNjp975uzV73WC",
  "key42": "5Wy3ekuSJnmTzZcYqvUNJtm91PDH7dxkuoXThzd8EDqgtHAM5fBXhRfn7fgx4qfUC5tdrJjXFuR5zr3ZNKxAfTPb",
  "key43": "543QnzZxTrEBEiUFZF1SPwMm3PaC7g6ER2ThggnBPam6xNkFY17YhGsPBczdYo8vr9ts2nx3JmpW7QR6rcApWPiA"
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

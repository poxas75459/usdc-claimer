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
    "3RYFAgkFjovHvdKFa8JKrXf2kDDHXcvc6PzsPetRTMJypSug6KmAsuzc3BW6arKR39chFtMdwSk9wPDZ3k7yPvkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUwm53A3rnrGUDaiN7wmAb6vJu9xVpyXXXpK6WSV3gy1UQi3QxXFUSmPNtodcazAZFV3d2MvDoyuJD3VRw1dav8",
  "key1": "4aQUA9gXrogpHttYAT8SQjqELwe8MbaFoYiQdjVLs4aEQCoQSBzRqJdsLpy4hS44xqdHzXsbeC57kn3PTueDPSCn",
  "key2": "3jZ6uLAzU6LTVjdB7y7f9xBRhxyNFQxShd6PSKgTSPJE6yeHLuWxf6TVmZgy3Mdo9j4xAC4eW69Ck65K77tAdbhZ",
  "key3": "4ZBaPf6Gxvf45pARDWmgnxYSdJ4Y63SLYGt9EaTmjKE6WrweXMWyEvu2F9qKHnpfsFTyUNUe63vXJUNxioRrRqVU",
  "key4": "3RPiwa8xeKdrLnP37hGH1EeKLXAthG6P8gS9vk9BYRkPZm2x3z5LjWHuBoAZ8QQXu7G2niXwNg7bEbwgzzo3btg8",
  "key5": "3K14S6BrunPy5pACfPAeTBZ49T4pepuiko3B5dSShPRQSDx2b1k2bTGaHtUxL4diZby2qznsJfApybMQjD7ocMdD",
  "key6": "2ok55eWWoxzyhBr8eMuxFVVcLtwBagw6XdX5FRwx4YhsqLmHVHybnCb6WETjsTJzbeFEhhX5HZKQ1rXhh2tYPuSg",
  "key7": "2PgiAof3b9ARkXo2X3ueLsCt7U1H4MVFcFpEoqhGfDm6kWpnPPAKgFFDp3hczpJkRaUFJPfoYdRNrmZcVZbpivyT",
  "key8": "3je9Kb11kUDRCU2dZRWGM1ajwPX4PXyuckXF93tDzWD9i1bJvDZAVoR7qTmywp5zAk6qkGReTMb5LkpmkcUosXr",
  "key9": "5ML8YsgwEynDcw425Yum7kRydio222n97gHcatLt5PBDBaeXNySFLHeTGzy4UL2VNSnrVnRccACWDVofpHRWszRS",
  "key10": "TjizSEFggxVmXdF1ifPRyHnh84L93RcLem9XLoGoru1Kav5jU6Mri2Yt2JasZqWWGZn1f89nknwTcdPaEdZHmVb",
  "key11": "6GMay95iZCYRwN6veEvDbXFQehqjCEn7tM3iKDTNfrNcUBP43BhcdxF1xpRdZFaWqX6vW18P9z3KQZvEVNCaMGG",
  "key12": "2is1LgL7tVWBhMG3m8dtV1Ghs5icLDsjMU1U2ffgfkMPpquSZifZqwb57Fcvb9Q2dS2oMpCdgpR5TXBorbcYg1Q4",
  "key13": "2vfLmCg1uicG1As1T5qXCBpKEiZLU6bwiizVjTNBaJa1eTHwxM8xc38JJnyJS4DX5xG3AqR8n6LLDWLu4RowJD3p",
  "key14": "22JAGeRRV5PxYzFmjvTfxb8xUa2DXuvhfiT2jHwNKEzTahjcRAk6Z5kGVX36Nh6Dvr96Eff5rrnvqPNK6PfYohZg",
  "key15": "37yDUPvgB6yQLzG3YbG6hkQNycMb6ofAQTwQjg7k9i7XwtfTqncgLM1bUQyTCUGuJxZCHt23EYBywP3S5tE6K8aE",
  "key16": "5x5mQrPch7n6aQUTxiiLdSFKhZD8SAcBbLNcjG7uSXqnVYsdSdR2eZ8RvtyicN8UBvGWPpCYVSyT5VRkHuKgnYZQ",
  "key17": "4DpD5x5dTyhqXEMG6qYmgqzSThrEgA6wt9Uahhn6cgwSNMF8HYMHC9UqN7pVitUFvhK1XafZkE1kkZisU1D3BkxS",
  "key18": "458zjYYXQWBgH51FRCXqXPAnCeH7mRNZrh7KwCLEGgB9SQSfZC2yZJd6zfvgpcyMEEeB7iV73qpZdvwRGrmap2kr",
  "key19": "48qj2bqM61dzk5cqhJNTAuQArN1U95aGDToJoKLMwurKjytVoTGaPThLprS8a5nrygC9TnaVkEppom2Qhf1Vge7d",
  "key20": "TVnTMcfGNW7EBUqtHEXBBrVQJFARHaSftLu9KcvZDX33KdAkeGFMLojs4qixG1GVcX1rtT3wrsxvX2uiJaLCvgJ",
  "key21": "3dJ9kbsaF6AUy8UEo4xNoJZCMPvhYLdzySDQSvgtxkP85GG3HAHHLycQzW7qYsaVuLwxKDDQuuyhZprNNZZgdueL",
  "key22": "2sZFHFXmkKQ1P3pzXDEo8V5Ey1xbW5ttPZLe9tk9dWSwbdPk7bMvTKcMwk4SzxNm4V28K4nrL2xsWhVQR7zepdMc",
  "key23": "4XaHDAs68ecT6cSAwBxRwAbu9nggHbyTdsyvXvx8ozaCCjrKJoJdHT3k7FVDKZeniAEZKnMnRbwmLwAyj6C2UhrP",
  "key24": "3WLCnqvnQYp467KtABW1YFS3F8aNgHqtSsgjxqvhd5A29FaHs9u3nb64w1AevRXwSpGdBgMw8oYX1jTwGdGMowkH",
  "key25": "2PrBtpSE4oBUEwT88FuFQ9u932PiAjFTfgB1U3A8JdYJU4RkbcADSPRGz3rcWqEHgVcEPdp8eAPvUYiGXGKkpBtu",
  "key26": "2WAP3tj5w3hPYiXW5NSHCHzGUHK9CQC2b6UZ4v1hWw3q1zbUnT23VbjKi8HHWgzN5TSjR3e5j1fTG4bQdVo6Es7k",
  "key27": "48Sge1dujJtKjLi2rWYNfbEsbi3jRTJVGf2KcVLUXYBE9DF93SEnfpjKVBEfJpaAxVYCcvHkp4o1ajfxRcWKF5Ts",
  "key28": "3epx5qsZK6ZFcv932n7TkbZY1fk2uSs2Maaim3FwHDGeZajt2kPVGn7yiBZV1PF5qRE4iVScUsdnh8P3HnwQDuN",
  "key29": "4yuwoDi1MJjy2ebdVg7zSnpxPzcgxdcUhLDisXDt5YiPmRP462Haytt3SLqq8tbx46HoL5Ps51se7zj4VCepdEvN",
  "key30": "4ZQA3FYc65tiR7VGgrrpkThHrXACfG2snthev3f81rDngexzeVp1yQ4vdQUieubpUHfFekkjSMcRrrUuQA3QXs2N",
  "key31": "3zmDuJEdYMy5uTrM7aGfkD13cVK3P8cefjE4bBSNarneD7NejBtPxMiWfGQJunBuuxVqvtXXpScf82Vog1pyz99C",
  "key32": "47HENYqBipF3p7jPXQxeZyANkdQjpY8SFDCPc1z94VgU8JuJwQ6HJh9uQJNJkKDfUdZCCTYKw4BjJB2YRonzjcTq",
  "key33": "2mQF6sC7JqxRPoKcMComP4RqGFC3jbchD8WcoV9z51A67cg2N3jZKrkmqUNyuYWaTxR3HjxyJyypLCjjxAjCZbDb",
  "key34": "49MU2RhKFpmPqiFWEiQNPSDk5oQejgSNrEvvK6jRP7hVsSz55MdhU2zxR8PFKaxLk17Qn5s4SeNGGWoHt4qqXNKj",
  "key35": "5S8XhHAQDnK5kxb1SerP9cHVCrrvGdSW41au8UHaP3g4K4R14XxjJL8ggeaJDaYTB2qP7cseHDhEwd5K9qvUeW98",
  "key36": "2rr2HqyuvzHmj5tPBpg7duDNhuH5MqVNpxJoBvpjoVWhss8mv4dAzeUfeN3a3h87eeMPE6UBCxVNAZuTwinQfUo9",
  "key37": "3o5DG4Eqoqqgu6vtHv4twty2bUsyDptRYTNbUKPZvqKRVeP34pHU7s5uTgH4SQTBzWjzennrLjB8NvAejtwksXdY",
  "key38": "2ySUAr7x32cW7yRytsLeTMqUfLbBpksRW92Csd15JKixMjHwWWdjyN5dZaMcYRzSTJSanKHyuapnbxDJMV6gpQHj"
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

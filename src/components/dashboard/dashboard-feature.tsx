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
    "4fWPXXPn7kbturmq8NW7tcNB2oj2EXJ6AK5upi9xpPybvjbimrcrVygCnRbkb4AK2ekAV9u5UFwB8i5nm8N7KBD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rh7yWww71G72FeoYC66KJ13RxB4RhBv91tqYLAouEU86n6zmjfEYF7Xrq9gGrFCfbGSBjyJawzrnePMRe8H8NdA",
  "key1": "57NaujSbcPAnBn6hSWkiwze7N26oCpZAVhBqv4Ye82vVPNLApejxU7fwbkGEc8ek28DPWSpSDRa5n95JioNEHyos",
  "key2": "5U911HcsSStZXsjfEAxWuX8JVXtthYaj8Svw4fGjPFb5dmNyrA3Nb8WMw19s2H7efNndVn1P49WgF8MK8cgpMgB1",
  "key3": "4WbDiE6t5FMtXUYM8iwkzRHFuFJUdXZJHV4vhBkwMmPdexnyttkdGx7bDZzgbFrZN5QuiV7XufYVgbjjthkpqbEg",
  "key4": "trooYWmwiYKt4AoDFoEvZ3pWDjBXCqeacj5DN8HQXhrekny34dGtKzcEb7wVUEQdjosZeGvgHJMErBt4Si3T1Hv",
  "key5": "4fmucuvAFdiHYQdEo28xwXmE3jGMe9sXrhy1F6Qf826VpZiAQWiZjN38zEyPH5z7PY3CqxbMGqcxHKxGqv4BxBMx",
  "key6": "3db4mZ1g4kenS41Tme2SunUsZm9nSYbxLHZCRAksAeH1r2KmTRigoXtDb4VfFxSnXegSeeNjRAyukJzxqxuiUhK9",
  "key7": "4c4nHsHdM4u9B1PFtNAAPhyhWjoFf5TdpQSEA3zRqut9R5sZAuXSmn8sQTgYZP1JGR6KtLGtDeUrKLCPbkgordZG",
  "key8": "4McZS7WrE4zYQY2sMWXY1FAe7K2zS72akv647S7azhpWfnagtDEmPZCcHBnnUcVXWmNcefANDZVcSVWY5eZcBFS7",
  "key9": "439T5v7CRLA2paQUuEcF25Qg57Wwu3RZRAqgRtzH4yKwm1JmGgRBHZFinrZtVYjEp1GZVoUTYmarpWS6vrHgWGwM",
  "key10": "2gHvMwHYzEwJkDCRVjG6s2Mx7N5DqApzgwzXeMo6YjQQLGy1kJ5aV26o9eg1TSZr8ZoVLVks18MZm2obv86meT6k",
  "key11": "2mvQ2fwNXTBoR8rdgQJCQpkegPcKaevqcPS85G4YD9FU7dfgUpbWLa3ww7yR9fmp75nbaGrPcBmMq5vq4BtHE4MD",
  "key12": "31S51Pfyis53W93gTc4yVE631cvy5Kh1gCC3SjrCp5xKVXJ5Cfxi9aLLL7wUkuAE8AHDVwWYZqBTfwb9dSxa72vn",
  "key13": "5Lc8ZJ6UpxGhruwn3rXia1zNDLBmSYvACDEBxRdiGPyuR2x8tunqT1JEiknJvik9AFwBBNh5Qc3dSP47VVVJPDAA",
  "key14": "4mSYmBjx18Ykhb2oWgoSiDwZNZ9mBwZEECs9jDEcVZJcFTesoku6uwNmFXUXv7HkKFFTeR8RT2pHTwkuRuf32q53",
  "key15": "2BDJs438T4KWxLpBU5AobPe2GSpNw8G3ijyuWn1BS8kbVugh1GYaSxspaPoMULEQZsQbQNN2VHBuiLyVY61p3sNR",
  "key16": "PoZT4pFxH4G7QsVdkz6AzkRLhQRmbuuHrPAwjRWUHxLvrQyy85XsPZrPD9G8QN7LjgPEGPWKnxMbumevdykFpDy",
  "key17": "4eSVccGbtGrTNzuVXMwDvN53Ri6tVssUYUuKVAfWrZNvuPE1VTJYpauH47KsSGHncHLUZRE47Vcc5vNsWAQw9ejA",
  "key18": "5rMinUBprVJAazANrxZquoQm8U2JbmGUE141T1cK86MKkyrbMksC7hkynzBBKTaRob6K3f4YKivx67hwmxsf6d8M",
  "key19": "4mP96qAm5y9yWhtdTFD8t4LruvCzm83r5Lgou2HE6yE72oYSc6WQAMbERwUVW4toNRPHUHDiEj62YKuNUgxMKu4j",
  "key20": "quRgJ3icdv2GPVKBRdupHGhtzaeyTGTSUReFaFLEaUbZipyaMNDwcdEWWutqSYrJBaPtU4PMAPsRwHvV2uGEfX4",
  "key21": "SmTeE6eRxRzK8G936aEpP9HgEHoEkYHDgwauBhi3JEZ45DuXLxv1jNQ2T5udGGTAxPK25fePSwBzFR1ZC6LttUp",
  "key22": "2p1pRj1XVazYPUKKqFy9X5n9Hy52uvjaw9fgUhg9ggP3KsAek6qo8jrdCc8HLDLpJjNN8jHv8C7dAUGjcbzP8ZwG",
  "key23": "5vm63byiLvpLSs1qdUJHjuqDonqjqrVXfG5wdbYUdvj3M73SunayHZLrT1CLe2ph3fVpnBuctG7yE6Ru4dLffcb6",
  "key24": "4jsvSgjrdPdiZc2CqNSgfbN5YNHa8FQVafoPmCiT43UPrrZcNCePYf79H2TRyfJpAHkqKf6xk2rtFbB46XYmjZmK",
  "key25": "Le3CXTCRceMwaCLhnFKmhTFntj2UxouHU8vvDhkBGJMNNjfWUF1DGmNBYbZc7vpJ5WmPvRq6KEXCt5YUv2yVwdT",
  "key26": "3wwmMEp1TByLJnMWtTRzGTMVXCuGrkJuGTM9qkhxGs1v8x9zjt1tCUChTKBwrNMb7pT8qmGiAHXD3GrNG5RiM8Aa",
  "key27": "4c36e21c7oketvDky49VhT3KGfUbrYQRvM1QV5RFd8ocjtVR3vHHbw887JRzWbJmoCcXonMKYweGtFEPLQwavh71",
  "key28": "HKAM4BsGyqypjGS3Ssq5TLWG6GJMhdLTGnbF1zzDXz4W6Ts3kofv64F7Q1WekrQEZMbp3Gk2sy38wdHoQVWmoah",
  "key29": "3c3V4Was6MEyJpx4d1ZJyBJipLEcQGBYh9LdQCfy5kihXxpdbmGFezBjpSSjWdWay7HewMMiCq29XVTxgbFCf1KK",
  "key30": "4HoorpJ1SwT4nUaugs1BG38awUpxs6MhE3bg6sy1phn5Bd3N2aJURQ5FBJ5zsA5j2ky6BqJb7wEM85YmSfKXxssh",
  "key31": "3ar7BR8gJaR7j5GPLhmajjM1AVcKVjgmiGgXQ11cW65h2gKuFPYjaz6CGDu98FDwQAnPXYZBVhQAi9QCnqwUQ2VZ",
  "key32": "3td9hi4Df79fyxXmY4X8jL8udE8kShHaNc6BfEwkX8GQTYUeGqi6MoUMcjqRJ71ucSzSXrTm3hDbsCrsKtQhCWn6",
  "key33": "9Ejm2EHTpwRzseF8mRqR1XJ8HiLdfY14mPCmkEhM3xM5NBgX1yvdZmE4FWoY1UbXMoQKLMcWYbdpWNyaydhuQ1g",
  "key34": "28MpwXgBRNhWyjpk8ruCnKkabJ97ktW9TwV2DzSTzYdP9ubGj61WBWXNBUoUx3ZE2C2wYrg7cdY2bJPaPxEuEMnH",
  "key35": "3tHU3yHu6e9aNXeyb5ykhtqCeYe5k7o3RSikpFny3S2UGv4QMD4aSoFmxpbDmQmSeaurdRvNhLAy99AiGLPaUNLa",
  "key36": "2BM261PrQ71q7wi9SDtDJE1syMVGXpMWToP7dCwHmf4CzB71mC8FwgZSLUkkLFFfPxcJfAb7QQqvfJZtTfzDCrUY",
  "key37": "fmNzyKcs8C3ZYxd2pTucBJexmSyrWMBN5gMYPNv75nd1jLhuTWMZFpjF4xQifDpWS4CzNQ4bm3ncx6ocP3UGZRQ",
  "key38": "5hfwWEo7ZhMhQ1Dff6VZTy7TD39bDGfTMsEDP6CjsESwkPFg9DfwEe1Uky2LZFgBfH2ArJ4KGeFykU8CPGiCNKmA",
  "key39": "4qYWNGNosJmjGg7PxNeypeHNmuFUbpP9GfzfYKLPn4J4diGA2VSc4TueKyCZRmmhs7M8QoQekiLNq7rvMiz375vP"
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

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
    "4Xxzko3rjMisZUW6CwnqFgGHX1Eg3gCB6GSJ8MWVLay6LRWKmrbZ6EdVXwrDwMfGConX91xZSV9Ee6u1BfafRifH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jQ3JMeXJivrZRSmTrogirpjvnJjYkoPmPqUCBadRoVdHRyT1ozWbN6BsdKEi3hFGG3CLvrZBbBxQ4waMmvgvTVB",
  "key1": "2dJNXeozio1t1DLgdSg33svyVZXiRUJ3Zdo6qEFMfD6bBd3Qcd5KvAVQHKGaX6cpamiHyZLBH1p8MEwzUd4KJWJJ",
  "key2": "5ZQnKB5PuHthZQmA78V2EvwV31MchFrR956HBVJYxedrLrrq1RWK1v5Yt7zb7scYdaju67UzQVYRqHtV7X1Qfw94",
  "key3": "33ELM7HQKrnNVq7Qtte3v4qbx9sa5K7bLhTx3m85RwSsNGrQYXrQ6AyyrdWPpvswRnHLjQdV1TjEnQnME2BdCZR1",
  "key4": "2C7FDRsXTGkGx5f41HURD7X4KHGaSzFukw3JNDDgqKr2HFkEqAncQfXAt2GPNZNW6hVzwZ3XSJqDUw5saDsDF24Q",
  "key5": "4gAFNTeyyNteeYGKbjAz4BbAkDXELUtHQVed52cespdPRCkRisUHSrQviByoApXSUTzGE4iR1cbo8957a6nVoTRw",
  "key6": "VdvNrkJ2Nho3iEFyYUDMc4QciHfcfe5nfsZDmCPA9PXdNG5z9hk3WhZ5ZQZMFprcWMwjZTx4keZXm21k8qsZ8mT",
  "key7": "41UEmwdJiCDJCU91pAxw4dCGH2scXLcJYR4rQjjbM6dcoC1mUg1thzzDuocdYexR5gk7XiWabNsqxKRtAZGdUube",
  "key8": "22pJttCwECqYQWS3hokjN9yZx5ZYDSQ41y7Wr9zGhfemUqqbYNBhqARsRxaUJpWDortKdb4PTH5VMzG2gfuoVsoN",
  "key9": "2U8fo3sWtysX6QXNWTnkCLqGwWCdMRP8883PyK96miWQv9gSZEf4LhrKGz7QSorGKohReiacZ1RS6T7fJyLke23C",
  "key10": "4gMuiRTrVW6Rm8gVWnc5nFTjBugWVAacRNAgoh1y1M2VyuAdgxLUKKwqNzz5w3DLYGbubo3NF5fSrY22hqT88SfA",
  "key11": "4kbZ8JNdntzhdQhAxJCGBzqXmKMJMbkuiXDxpKtHLNp5WN1qr5VWhehdoaEJbiMSQ8se8CYxyzo6exi7ZMew3BbP",
  "key12": "ZGPg74xqnRMXp5oY63hiUcrKaySqdswEakJDxuSLJA4Sbb6TMhtzPQnUeWEteg7NoKVtHZ2JW8JoTJJuzfnR1m9",
  "key13": "3qxufR7F2Qji9tQqoZcFQ488RenDPxCpMZynDJzDaCm5Jozpk99JpiRjz2pzAKE99czpev2Dz6ASr6syXyK8XC1J",
  "key14": "41cLYhrj9VuQmvxbPqZ5tR2VEVVp7cmtytwUSBvHy6fFaqKMXMTAn6habymoutC6DnMXW79q1bDam6zcqEG9Tva9",
  "key15": "ddBUwUmahtZzXgJPqysit1qUp9DqZba1rgSabKSfZPcYvsEv65eyAKjpo8ShNaXyjNoMP3Ztx4ZW8MLn5SovaJz",
  "key16": "3EoJvvQhZeadF3223jDRwUBZXApYVotCR82e8ettAvHtQsgLRD4yvi9fbonzAyfPNwpUBdmX8MYAPLPg2PkSXi9G",
  "key17": "5DQMb3xRmbbBTSqHNpTVBfAftPjXvZFKorrWK3Qqv7K5yXydfsSUv8jww5pV6zCeAXuRwBEKmN89cCgY6gces7X7",
  "key18": "cQU2Hwhq4bzd9LK46Rpf75G4pDHCHScgPeHueBHAq9H3oiFE9xngEiqN7JJjL2eqSQDuQEd11bB8MCgckhuKnMG",
  "key19": "66sPU5KkKBEeZid9j13utyN4YkkQKDACGUkcWRe4ZDXbkzJ2rdReKVcFejmKjxGyzskF8beTtfofvJFeeTRzmRmK",
  "key20": "AvjjJkLBcLN7LSojMdKpZzveScDYarNCM6nNce1bKvP9g6QADXcQ3kRogeyJMGJ6NPmK12vuZHh2zwYVeK28aRL",
  "key21": "4j6hxwup8GzV3MvpfDiJDUPzWUbe5cKdXhy53EfXtYXjPx1VVXiRRiZBpFebhdzcL2w69TTk8ej74eAmEEvbvExq",
  "key22": "mekYFAiXbc5NvCn7D2RfgHw2x52Yf1jK48sHmXMqcWiR3x1yLy6p9kT9BXzfL2i8uyYDQjNjxJvV3zJ3fVofGuP",
  "key23": "3bJQj19C2GpG9kwjVrNnnYZHpYKwPrnE6fhEFBu2LAuikbNZoupygdLdwpygZNVyrWqZPC6fMjZmzy6BVsHiYnYX",
  "key24": "5TskmVt56Cz5z9r4dApxY1zBZVSJTf7cvssi3kogFcZwbs7GAU6gYTwHN6hYvfwh1sGXrfbGZunSnR8QfmAQqTwz",
  "key25": "45TiECBRLdQm2vb7eZ89HNPQEYHzq1P9UwsKpXgS1F3rGK9dq375Bz5ggm1Wywp3wFthRvCNqd9chTTrpbDpN6iz",
  "key26": "5FxfvZT7baPiovyRoNX8T38gBSsxixC9K2G1eUNBPVq9B9avpLWxZRJ2w2qDegXgPfptFFt7ubET1cC25Hty1d37",
  "key27": "34BadhnTv3wRfc7SjAGBk5z8sp5U4nPHeBjWar4u29GtPpEBnpH2TogwTYyTJgBiHHdoHGchKQj3FmfNDbvDAGv8",
  "key28": "2AFJEYvzQGx6vSKTwcDKu7WoVumRqPTSB4unRCb96kZqiKsyyx5XqJTiWaoc7GRTShoMUYYfBmbDf8LhTNKCe4k5",
  "key29": "2tf2EKkR9kGJ3GvEL8QVatcvNsaZ79f8CGVQDHQjXE4bed4Km3WN1SVoZ862RnUGSnDZLXLjW5Nh3geXNGZmT4vU",
  "key30": "5Qb3BQvBkVCTpCmELA9cv51hht8NG5ojZ9kZU1Kj63cqcmMLscjDrPgY1AyXrwPdtcYFJc7ee11AoaL2efzcj5cs",
  "key31": "2tDSGFtBfx8T87GbEKH99se6c6bHd6HacsLqaLiYQSjaeRrevKqzraigF8RcNs73oKurvu5rADt8nRxASsKD1Ngj",
  "key32": "3NGqt6HLttkzJUEVPmPFWY5zt8qtrX4VzVP7c3i7mERwkNosfDoLi4vuiwqEShEvNtiYJDGc3fad5uwnw5hwg4gW",
  "key33": "4fVxnrbFmWqXjLV1o8aaKNSvCBP8oQSTMsy1erx45DZtSuoN3X1pD7kfPeu3ZT2KNcp3BtD7UBef7Xggkzc2Lbnp",
  "key34": "3rHjwsMvUJsJg1juPx8Rwbj9fBpbi7fz64ZmfLNf4dtXNgaCiQRtVkbmyC5d6Xzq6sjjskGFqPnTXQHUCS2QGtZz",
  "key35": "2nX85jEVXeneuWCJ6qXvxHsQqdtwSSPSNuVerQB9g2Aam7NZiQNc3ov5R5GYB4tz6u8pf4oRXWd5xzHQ8FXa128T",
  "key36": "5HamhKZ9okc3KTzNVby7eoyBZQBQqCxfvesdgPJrFjgndbb5KEmAmzLi1RxeWBUMgjWr5cKhdkvQKbG5FsQQn6AG",
  "key37": "jaYM8BSkkJoqYf5d5GSQCsrY2MumYM2S2CPd9rgJDufGfMjMvCeZq7xkL89GnnJvwLRaF98LKSxCEWQmDcz2Pgf",
  "key38": "5X6PraXCBy1mLsmChj2FoXkDp4CWtBrwMn6hDLajcHJc7G5bPSRsUBz8569gUFmtKVwBT1CMY5FZis65sS9gyk52"
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

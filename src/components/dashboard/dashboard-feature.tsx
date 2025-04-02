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
    "5KPRJGjewSFA2h2K9yBVwQw1vpPtqaXC6MDqpvoTWeXoH45o85ZDpPngwWrYTkP5Czv36tp7XSfvHHwuQYoVWjUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUDSe8tq6YgogD6KhMaGWtVm8o8NqQapLCJUS6v2zwZw5ua7F9gfH3Ag4Lf54s3s5nwZoxMrfid8hDKbXQdsyHb",
  "key1": "3wC2PEU2pVEeVEg1fLDiXPVu6xFYGDx5zqLvAmB67W19cY3mfhR8SCuTpB1EehP462yFz5C4UyaQcdxrSBwRtzb3",
  "key2": "5kJtKDbA8TKrPr8J2oX34vyvrjzguUGrWUv5X4VXTYPCAMfA5H47TmgfQDikhbpDaUHL3GeyqmnAKXHmsBUSe2Hj",
  "key3": "4UVNsR9csRUNyQ3FoA6sJeT2ATQjsXMsrNqehjq8UaJtvTTpW819adsLQhrXd2Y43bh7GqSmcBcCqsambx9cPH4E",
  "key4": "54t7ucK1Ep6Ji366LRWARgPsqeXJHRLmvesqWKJgfLZwr1g46GtCYP2Hysuvt5kJ1W3NP1hqKPYawrAbqPMhSgTD",
  "key5": "28ts2GHTRWt4icsZcktoTPTQkqrzgvGZtbLBJUNJpf1qz3rgjVZ2W5sFtcUUvLS7gntQmusfJTZBwv3SekmXue3L",
  "key6": "bv5cLxo7BXjJaNuB7BSWaLfPrBEptUHn3iLayiBk72cLeaCoxZ3DGxYMS2MWPY14X4W17CbLj3JtBajECcbWcDg",
  "key7": "3BPhGb5d2zWeJvkoGzP6DPLXJv1ZnHrFGGr68V5CeLhmDYVWhymxPCf8YGTNYTuPTUrX3oY7fAcNh95vZEQRUWoe",
  "key8": "zf4Smri7uGAX6XND8q8osmX5WomSvC1kEcudbadCRksnzQVoKr6SimJJ4Ey91MEtQBJceeYPmDCEuQurfDqTdyc",
  "key9": "2ytLJA4uiMKsvhuzZ61n8gbAwVriqHLqvfV4oHTBQmbceyT82K21SmEo2cUQVV8nbuyCKJphEbG3XPEeRKDXVkyo",
  "key10": "4VBL5XPj6kgJUKAW7b2y1HotuSmzKxodFWfCb3itd1pLe3QcNdi4EdUcPWDxetD6PM5YZTyE9ZfBq5L49skaZJgU",
  "key11": "MR6peXJMYJXrUirKAm5SPzyMyisp8cGMPVWYmUdTnxsJmx44ajpKYBZsmBC5hcUBa58NV55eJ48Ex2xZJaKKhfs",
  "key12": "2BJVnMdwFv4GsCMLTGSWxWDAyuqsVSvHEXdicnt49SucD5BqfragpGvwuhnoooVnws6PiP651FJN7KtwupnoJpsP",
  "key13": "4GnD6KKFSCVXZd4AUszkBZqgbDHonXW8SXT1benMkUHKTw8BmFWgbFGycfPDtMdxg7LU7vQjPUpdPnVwc5fxMCks",
  "key14": "2XN5J3TbJuAz4TeHgDbhMF2Xn7XJLDssgoHYsYUH8yhbuA36hJthrpCUn583fKPnrXipmQagY4KW1gLWPmp5FY7i",
  "key15": "57vX3y4UXNp7RKcBHyobwPvDDcKGvCa5b9eJNRgiqhsXkdPvp2j8bw4PHhYt6hrpo1j3H2fgN5WASNHjNwhs387w",
  "key16": "41UUU8WGHR655tTp1GUCarrVjtMfFMVM86acsMevYQiLe79d5jNTtvAfHiJ8eaodXMJ67CphMTyzsNqErpARsJ4j",
  "key17": "5vyE1AMVqKHcBaoj7xFLt42Y5Zo3Y5eJN6fNbQyqST6RB6DVKsthVdqEuXwddqusC53NrgiAnnUW9g7sbCtb2htC",
  "key18": "4AEBsRVg3w34MAHfPcjuR8CRxN8T9Av2WhmPtqnUwxFX95yLp5H3VhZ5ZDUknzck2yCmsnEXDrNnBB7WjcCewEsN",
  "key19": "5Ab8f33SqTMPrq8U8Te3pNQYKDWXvMT4nGNq8YwZdaAg551ioeeAnBUcVCMhBA2qou7ZfkT3nJUeqPerf8Ba3tkY",
  "key20": "5gZG4PjXmK5pkVaLuzU8M1EPz68kX1p17w83y7JYjxAuLTLG8rEeJtAgrj8ew6Ujo2wCxJmjGs7cTGWaWW7xqDyb",
  "key21": "2A3xgf3AcxXCUDV78jWMWFj8cGfHbTvrLPbTRAnL9kCYobbSGGyLPWLYbh1ZXTG6vAbkjF5zos6oYZorFHeRjVL9",
  "key22": "5EdoEEeNV4xTjBCPCrTamNFksZgUPcERm9MfkGa5t3gJh78FVV9FG9LDLrgUYkDsCUMy4Z3AHrwaUv99mHu3EYHu",
  "key23": "65XuhaVaVP9C3kbitgwDuZJmnDjrnEoX9hqUvLFiNy9ikkPJNoxTeL6ywtiMht4mKCzLibLm3GVTW5pDXikamW81",
  "key24": "552QvYb15hrxwcYgkHxcKUtS72Ztr5yQfxukffQft6bbM2VCuYEw2VyPiRiD5QJB91HUtyo49bJgYnq9GDkprkMc",
  "key25": "5vmA6QA6jH281kpAwAp7bzabJTHpEeyH83BipiVzovibf6y4SmcKozL9UR7P5Jvh4yM36nXrd3JQhFJ5s55V5sLx",
  "key26": "3ri3Ti2d1qji4xqPW8bw33FipZJz1E65xP4fWWdB8jcGNoRGfd6URxbf676UE4Nh1LjcFKiHa4LYfPQPw7q5NaGx",
  "key27": "3PUDc8uBm4pJh4VNLqm5E9ZnfH9Gx5BJwgwmVPCwCEnnWgSFmiU3RQZADny4vEWKHRpZUJaLcPLqHPFJfzGq9LNc",
  "key28": "37GgxkFs7KLYtAEE6BPFdghwoh9up7pBBHhtr5r8kXRpFS9JjB5tPDmKQgvPVEYf3trf9ZXVyBUG2fue2hya67SG",
  "key29": "2hEwoSe5Dv2xLtXfd5k7L5SeHR4WoQyMyPWWRrDQUBrTe9ErcrzeYzu6WygBKMyRtneqNMGotVTf4Hzp4i6dPD5P",
  "key30": "NwsdEKaQyCLvivpYChs76CppG8ipKcAPMFLEQmmhLPVAv2ZgWgY1eYZ51W8nEv4ctwgDsRcR2f1x63yBUBfWVMN",
  "key31": "5br6LECp5BfpA72hqDPjLhBFM7X7dDYeGnVQbyAZbidFTRVYst2ruX4u7qFrgQUxtznCgZt9VHu6pjTumbjn1kJD",
  "key32": "2YEkoADVKmLPWLdkNNCL1Ai7WBUawarQYxp2aBD12BczSgNFSwEAKk3RnmTCD2kY7kCr1ZZqomHsmVckSdv2FAvT",
  "key33": "4cgSvsCT8TfbXvZEfy3KeZpTHmuWiQo8AAxnGvNtYciqc1SG9HGmddb83PsNUE8sa2gQeGimFhvuqitpoaenu1pf",
  "key34": "46ttGj1mAXQRk52Xb7DdJZJzNc47N6h8aA9E2wX8xMtmdT9CgAo8EAXQH6XhA4xzZ22pqcvHg2jYxzQbpSLxx9Sm",
  "key35": "YcL2EidTY9SowVPAPbm6wTXDLLy1XWEE7HAtvReC81SUmVakNHKnFjqEXUbrthvsGfpUHk6rc1WHK6As46SK2sf"
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

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
    "pHzV4DS8m3df6dqEC4aaGxkBvt7KujhficeJUSCTtLi5AAZDDwVjQHSCxzNhSeyj1PrL8gEttfHvzWKQSndxkEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26CDSJbvycwy1RKJCZW7Y8s5EectsTgveMaWG9hy5T9inCpfAauVHE5STZaJ7SV4uVXpMZZySKhZ93fYapTXwTnQ",
  "key1": "61Hdjia88BsBdpYozRUjugzZ4fjqDyEsFcZzkSjptaCpZK5pZPXDCeeKt4tY9aAsvMa2Hxh2fUJZ7Cqof9Kn3Pzb",
  "key2": "51CGywrZHPpYyLzfYJxWtpQE6wpL1zDo4z7p8u5nRMDU1nqaU9aLNYEva9gyYCNR98FDTYYkT4L816ha9bfRGCop",
  "key3": "5sAs91keDpKPou4hK6hxE7wSJKo2EcPiAYt4bsH6HhiS6CZd8veXKhYAPLksJyfTzNVNvRoGywNdKKxtSK3zdA5Q",
  "key4": "2AoLheMG5KevmvccjNip3eBW71stSmfdDCrm1zvDTJ4B1pzGVKsjiiuyBLkjgixrViHcJush5YKqQU2xbdPjQ2N7",
  "key5": "4KW7Ru5BHjFfBh26FgVeqmyfqc6gVSFL5x2WwLRSUdz4ybbFT4TBpT5k6m2LocrNotrHiWagDPLmEsA1BjoiC1Cq",
  "key6": "2tXYyB1TnRTgqyQrrQYnUwph31jgYJsRP6266Jq8HJiwwVEMNRfpxzun9piuTHFJA5qMxNhaihkkSxAQb9MoNCMF",
  "key7": "2FkJc5XQUqKaPyTymJRYYiQ9KufUcxWqm5oxs4UR4jyJeR5aQ2jnAMLuCjrpWiwPmbi59AhfNr1kKc3QXsAvkfA5",
  "key8": "5ZUzaH41ajUfScyWCAw7nUpjYPX8WVZ8HoGBajQDKMk27AGxbx7iKatC1oULThTPtBJY2n5WCUKtWWYz6Wbbo59Q",
  "key9": "5n7RLvYL7iVkkc9z2avQifoo83a4t8LHKKz7Xuqa2Y9cYv3QBKEJZTKacHHgo3XsSgism6g78ebSFty8hcSKcZmh",
  "key10": "3pht9hM2eRSzFdhDUDR9ukW33YYWUXc58L6L2JsEVQihswyZN2hf14YXFHW6tL4x7bVmEP4umVfwS7eoxQSt6vqp",
  "key11": "c1x1kjUqn7diLXJZwxS1itgzNsVLScNghJt9GP5QvaxJ5y8T1Hj8zqc1SuF61U5pLpGf4jte5L6BW6Q6MyovjbL",
  "key12": "5M1b7fAPiLXeDkkDp8qn64fw5scUk6qGC9ogjDkSjLGmrHm2f6cwNk9J3y7fFquujhXbbNw2owAJdqvzLUyMaPgd",
  "key13": "4UJQv2qCTDCChNgrQUCcs1RwVAbrRjdvJ8G2vLtZW4eLAQdDDBt72A532NYgCVBwQwozghUBryz3x6M2T6dcv5NY",
  "key14": "2cdZ9f4bNobT1n9pcGwJHVE3R2n4kbk2i9FfkAot5vjevWqrqMhBkDkVrRuyKnGnGfdbtfxJyCCjo3mz9TgxvB7T",
  "key15": "4rsmAzGaZrioC7MgMJ7GPvoMssFb8iYpJMcyVs3P5MU4sqJHTqTtsq1zgck87UX6UvYQkvCGf9ip3WHEsrNCrP7b",
  "key16": "5N5oevAuwCo78AUQnPNscv5zFM118NKbvJYJQSrxFBQcwJP7LYA6wK84bqoHTStrUzRFCjDkT5dbA3bw33d262rt",
  "key17": "5ea7SFXx6HrcXFAQArGn4T5Nh7nT37noYjgFxgDPEe5Frq6w5tQK7nxsE8p6TMMiDgNiTbEddwR3KSWvWuG27AL9",
  "key18": "mJPDpPriMp5cs6b3hBk4rgr2uRzavFUHvYWh5erKLr6X15dKFUKKivDwHFhBptfWLnTwzMKYfuxrByTBe2mbEMm",
  "key19": "5faxzZAwNaxmqcHznz3K3cngELSLbF3XtYpzwNfVECkqXDtXFTg2naFeGVLDt16KYtnLcEVhVBfEDpodRKAyUQ7F",
  "key20": "5L6fGrZC4TSMqpaY6djsaeU8LewQzshpWSXBzj23eaKkEEGSK4kwNk7EykGoetcRhoidBRAnemLvwGqXT8UrbBFz",
  "key21": "3ZcWcEv1kS6y31ZTHLpBrc4PJtKCyPVs4KdTGrbd96WXVuA9G4PbaA1T4kG65hbVwrBq9Npf61Yi4zXQwerHHwqo",
  "key22": "4u38fFpBrvoq6DsDzyKYW1JU1kUNL8CMqrJ6mDLvto7YhHmWDxW5CwXDy1JdiReyvDir5W71bvGnpgCUTqrrVFzd",
  "key23": "3dVqehQSgaEgVyGY5mZhc1Hz7YfDnV7jfF16f51wG3Psb9eRrSGjPfk6Y55wxK979kuw7L1gCrXN9BYrQGMk1omW",
  "key24": "4geb68xkVLStyBS5ZahBbaFnUwmLdnSvJm1o5s1dyGMSXedW8kiL8fSqvZRo6yq5rYBrJA5q88To2jar4nb78ZBw",
  "key25": "4GyjvanVcvguWZ9yDxRWwH5vJbxrMBJatfP8AvAxSvSbXF56mgSWTEZB4p84iEM22Mkbgt6JUBWVVCgxkRuemDBG",
  "key26": "42Ny86GKRHVK5dnF7wMJMeg1EM6vXEcHXAKTpSwBZ87K9D7G9JsvKyHyvobfbnP6iwnUKZncHENxBFrq7w1228SH",
  "key27": "5HmrrmafgBE5dTgTYRxDLxEGvW1HDgRvZCgbJUhGr2DN3C5h2VRSmy7ci5brJ9k7VY7KneTic6LpYX6Br1y2v2LF",
  "key28": "3NKrcLmBth6VDN9amyZF54U2zBjbhUHjAGpV3FiDkm2sdQuLGTinEoMicw2pkxTotprhPycHeEtaY5zbVuJ74GUK",
  "key29": "RJgzcP8qEnxFTG37djQjTrU9WCzmi1EXvxxXCPFnW5CLYi97AJGTJeS9gtGmZ6peG9cn1X2vzKxyPRyWsvAJdCR",
  "key30": "3JHZyHEsvKTLvKM9uBAY5rUntpnmmEV3ZAzh8322eNW3WeqeDrZtL2K4R3qoPLU6BA7vm8h3GcJDVM4r98qeY9WT",
  "key31": "34Gnqmrhq3PHGCnfDmRQE9PvWwrGjVHcBH88VaemduHPRDQ3DLN2z29c3XR4Wm9Z1Qahd5LmV2CNjimuWAZajwHo",
  "key32": "cnL717mPswsZQsyny48rxXUUe2CruMm8e7HYFqNoiwaKRiWzbd6CtiRoWy8nr84npirgsjKwoWkRaaEYckJxhBB",
  "key33": "3Zd9Cnc97UQPVZLA9sFs5qCWxWeX1A3zdPrwxsRh34JeBMFFiiwhd5gUur5i7vjSmFH6XiqB3rCeJZwtp4125AzW",
  "key34": "2v2gNSrpjzkqgZorS4BSrzRJUU26vZydKnH9Us2nfi73DaEUuwcaWF4ebPosXDzfa22s8Rt7jt9YGMa2PL4UqT6H",
  "key35": "4H5mN7TrTbC7uxfieaZSQEUaSobr4wNQc5o2K75X6s7hkEfWZJ3ZwguXEGA9xetgvnReRNGVXgrtMrUn9Szkwdvh",
  "key36": "3oYThd5mggBriMBYcp7WzSHZNMduPvk5zsm6nE2ETNJsh3ZtgSdtk1EKqtxxDSAahqGGzfAeocmkWpr2cSr9B4SV",
  "key37": "5MDsA8rRYEUfDif8Qk3G5s6ECfF33UUyghG2VBKt9nMnusNWhBixjUKA84fsRVdwCDApD9yKPjouvkDJo951BWCG",
  "key38": "62C1zMhikr6EdKtJsEvFDSmrL9Vr7rT5Uh2YzdC24hYkXWRW1Bs9DExnZ16wmn8SoUJ7BGcn2TsJRyHceBjKxeNG",
  "key39": "7gBDKsiEefyxBPr7tZrJiBVTq4qWsLzRjnbSkPda7m8avCRHre5nSyAC2aR1yrtcADUCiYJSTXCSjUed3xt3vqC",
  "key40": "3GG9JfoYQoGpQLXUAyc3iKsTxfDDMfjgm2M8ZwmhTSdYJhbirfwttn6S4EJQrC1EKKryQ9fFMpTN1eUm8XqLwRUn",
  "key41": "35xsdhwfAQd4Mrgragqagv9vqnmLPx77QLo8QsWvFEih7Xcuehjd88oNb41Y337PviPQUE5LgeewiiDJWDK6FU6v"
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

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
    "8Z2QmbcuoV1doYWfsCrAAjGhA2NUDtF7adGzUqNEwaea3CvBjezp6CFh97LLy1UsgHHhj28u1WAhRqrZjwsoVup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qKsBGz49HQgPZiCoyQCaszEawZB7kFzd87qexhyyqHvDszLqTXPYuhD9gPyBKHHPJNEGSitJHqm5a6e8wA46GmV",
  "key1": "2L6S7GxD6wf4jwKa531ftd7r93UFs4hZnwqZFLTqXSiuBGGpc2zFwbHDhAg6oTbL7xWu1WKTci4Ffq4NjTCrop5J",
  "key2": "3HtQQpqquhh5SJHXiAxe5BVxmA3Sup8mPoWqqxfFEhow9zz3Ry9qCqfnr2Trw6UTnfFKcgZ3V6KdYkwcLbmzxJ7h",
  "key3": "2AtKAWRT75Rn2fbgE3FYXh27T52YKBYxLqYAH22Y7iqjyXv5z7nk9GGcBJ1ozRN61GGTwDTnyKFUsAu4CYRPiGBT",
  "key4": "7dgoHvSF6eR7t8PvehJunguRBpzfLSyN3FTAbcep6Amps8q6fLGMKrGzSz1iHqn4eSnzkxDkAspgFN8d7ZKnsu3",
  "key5": "21G8pgZM1WLZMG1iNbPkG2ShrZaakqdDwhnmdwFFbwcUMaV3oL562JSEckii9jc9wtUTxAvu3aLNcPtcyEvg6Z9M",
  "key6": "351uCap6FPv5q2hGRx68pc8tTB9Z6g7ifyKsUnoTcFN2PcVaxrUDJ9TWpApc1oSr969KGq9egQj3gL3fAWc35AkM",
  "key7": "2ynNkMyVLqW51dGMqcKLfXMiRjFqTtjX4rq9xNjjrVr8qQtczCH4QNwVR5ZZgxJiWwf1zHyc8xLEgNBT7DawAD2j",
  "key8": "5vupVdmibYiLh6VJm3izH6Js54D5R6orH2mUg75J3vLEBGHhdUuFm2XYivfNR9D2hbbGuwbb3PquMedgdEdPGXpN",
  "key9": "4DJK9GdV8e7EoUt4cWDphAEfydJ16YNL7ERKBHqr8YtZKASExCHQcjLLSdHxZEy4eiGi11pvPUpnJtcSmiATQveQ",
  "key10": "2z4Zx5edA6WQcQuW5vJVxPQtzDJaGWocCPgTMLgyW17Th6ohsde2Nn8vZQdk4dSPjFFpL1NDjJYwuKFnPaa8GiWh",
  "key11": "5xUZgCMKUkkZKrjDQF4mLKUo8sy8QWcYGaqrsePkRmNLTjJbNPuMtVzbBeJEWiw4w6fN41Lr66un4aW7x7j4DzWs",
  "key12": "3M4WYHdcu7qCRxcPRX4DmnfZk85TGbkDRASZbgXuhbrsquDKLd1pp6u1NU2xxFftfGXQd3VrN68R3QZC37W32xWX",
  "key13": "2BJUZQLb7mURNa7Wv8ekLEUMem4PcNGaWjsKXbxsgSMokhp79V1uUDhKmTL4hsYZzkqL2f933hZ9XBDkZXjFLzkk",
  "key14": "5jWwM8Pw6KcqtCc56Rgp7g8rEnCXivJVi62hdNtUQBqZUE24DvrsxNhfHH2cYen3pV4xZmAH8ENLKA5R1A4fzNQr",
  "key15": "5hYaWG8pjEySREVyNJz8qnoKeVLE5TMR555eFt4GauBictXDcEjYPKHWwHhf8oVuuhVXTqQQNnGEpuSxNNSAgeKK",
  "key16": "5Rd2Gcjs2dyTvwuw8aD92FERhmVcw4N6xJbcy2s3aBpdDPmSoptUFLUrDedTyp8EF6JmTVurNVbrZEgyfhTLqhCP",
  "key17": "5vPeK3Q95wLciXq3x7jRJjSZuUpL1vaGdTfjLreeBfXsLmHVkUehVFqzmGm9mnL7rJ56Dfhn27cQ8qHbh5dA3ENo",
  "key18": "4FkPJ37DhCTaMyAjuDpom33pewGDawGWHsNomqeC2WxZeRfGsTfYFur2kjVyWWMzggW8NTvFa1m4n1R6CZe3E6Vf",
  "key19": "59Tozve5TrA5MGg4N4AFWiqy6F398XkTnCxKN67VaCZgZYEJUND3W4Mxm4c99rUnP243LVUNZnQPv8hbfCGedB3t",
  "key20": "YwW3m7RQz2BMq1UbuyGnvKiq4Bq683bihnE1eyqLeLAmUoaPAB7XFHMM6ANHSon97V4x7CDRaaWavxmphLbUdMx",
  "key21": "BRPhPJZdCSJQvYCYDGXvhiKd2hMC3hNAodvQggsb7PcY2Szvb96aU15NxLs23fb17SoPjwvibCyVKzBxVxWKbzc",
  "key22": "HLqFx7hVqVWMQ4xFcuLDVuaMoEVSZM4RNUSXLhnAGmxLXciQR3AEb5k5dUKDg3dWubkZxBR2nMm45j251WJXs8Y",
  "key23": "2sctSsaYNJNWrhdmDXRTyiZLcWU2XhmXJB81axpvo78j9MngXoYE4zBRAccXpMmpeNqRtiP4xq2gwZuzZLCPDhQo",
  "key24": "2kGw4gYRP1xbRL94oVsErjKQiktkrtYJFxMfz8M6QtK74y7gDuWcJRovZWPSwFL7rtLpQinWh7SpQkw5GZxGDhYv",
  "key25": "2fpDU6TbQayLso8wTH5es75tAhV2hekfwJcFQ6AsofXPjALNrUUSrKtMJeCjWpc7ypkLJ64pwn5Sc697Gm9QkRzq",
  "key26": "4E3Q7oBAtr7Cfdd7Sy6jCXfXjA66EWk6vQVJTxKMxBQ6DWGLbCre4FmaVsPoLPCu8beeCAAcaEUX9zsSzoqQ7ZYX",
  "key27": "597ugDFmzc2jUguD7b7bPwrwirjcCGkD7A2qceLJLDg4vPQX9E3Xnfrg2bV4ySRb4zfAhydFbgqf6jjL3WSQ1q8H",
  "key28": "4GeCV8saRWNqxTn62TU21cznVzgck1JVZgqqesfGHrmsjBwbKfR8q5V4JUydQxEdqrRzx7GjVyWNjEiqrRA5Nvwu",
  "key29": "3AVcpgtt92e88F1ekk4twcBLTSPaYkr7F261V1hHYgR6Xh4D5HMsJQyq9grsV8F7YMBTQwc5DqK3jCapCNGm4jST",
  "key30": "dNxKMuT8c4ZaVmBR9pazhhfaeqcHkoB5Ss1jVwewRj58XKKpjAc37DcXNZfzw2J88tKhg78xpKhnokbPK38DYjs",
  "key31": "4HsTz1YbvW9nyDCJQncRYYHyKLvoxYgw3TQiYZWGnR8JhzajzJMCbHo7PRHzcuLebEWYYzUupEro4ZVw5GmVRHRw",
  "key32": "446GjueoeZxXVZDcAoqzsVLnMBvzk8ayC9VkaXiYna8ij5cNxm8QcUkq9koUeP5y99U4TPLhHbDdwM7GQjhwkMEH",
  "key33": "3WA6EzW3mnw2fTdhW4BJvazUJmuPMbR7JARU3DaW9ryTkPfHeBSGfdePPDksye66qa5ueMfhMRbJDP6cLnWtYiPu",
  "key34": "5EwBz9uU4HHq1P6S6YW39wpmGBNP3P38Sd5nnczqAhmCUpS8FxX9b8LzzkEGKxNa9bd6AmFya5N1kCHhfoGmCK22",
  "key35": "kTCiyKne8rZoHSVU1smF9ygFPvkXK2Cf9CG9f6pmVZZkAnbnHEMDYhKUKxse4uyAwMa73kgtdYm11qXeu43PCeA",
  "key36": "4KWjXMQseR32woLLw6BZus1c6A4mY1mNVq77PFtLqTYeGiCGSoYsALsCNKKpZnun1uciqu3n5z4CtDttk1zLiv6x",
  "key37": "2YZD64TUjfwEMpnDx8DbebEsoav9FMFPWktZ41cck5jH68SNs3jz7Cw4BNzLFP5hib7D5PERjqq7YCnX1xYNrktr",
  "key38": "5qCzYyctTnuTY6fFgSb9dchUB8trRfyDQpwVT5KegXn1PSHmfKFn5LXuLJMPpYbu6GyawxbyQWw9uURXW4f8y9Ft",
  "key39": "BLTPuhnUeKF9V7kq5EEqkNZWx8wS3xAxRTWfd211J6CGwZtDpLhDhZt2MovJKUKzoLVQpbfbv6Wj8pEFSfByYkp",
  "key40": "3dpfPaU42crqtnxVYf1kavacfMJNu82Zcnk5BBV1yop3gWTRibocnPRwEW3gs4RJ9HDogV28ZUXG1A47gxzwg39U",
  "key41": "2pNY9NG2sDuGBDLrJAiB7jCmdtWTUtrRcoHFQD2nMXofoTZcnhqZfYny89BH7F8GXYKLzTCkoEZwc2Q5tELcCwBc",
  "key42": "4kWUuVT4KZKUvksHLtcZf61qP1ZtafzKDc49sxZHAD2d4vfzszb5bfgoA5B6K6x3YUyTEz8xuDnGXfYEZd5b8Gaa",
  "key43": "BhUJe24aT3Rug9mo16YABpowGgaJ4yDGVuXAWzQE2SPeogxdCmf8iLaUSLsyFQvoD1XEwtrhbwaHaQLPrsEpsHL",
  "key44": "3S952UvGRZSVbGn8s6SUdREkrHwcRTyWxzWn5AXhzVZCYkvuk5bsTvoexxKhK7x1ZAL2fq2n69t4LDxLQ8FsNSg5"
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

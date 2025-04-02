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
    "47fp6Td23qztKpii1TT2JApTfY7wcDK2vTim1PGRhUBA2tHz7C2SqMfwRMVzbfcLxYiP7R9x2AuAypG4VWuSzGjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PiF882sJeNHyBssRtBNiYNr2vRMgc9mfijNgpuqKKi2YVS22FMLcqDku76Ek5FToYGkz7Ln3W75gDsooA3A44PF",
  "key1": "3FEwX7SFugHjsbsVth5WvY5vLTaFxv9vTc25KCBGZZPJQkWcRvM8sXEks4K9Q4AgyR23x8QcBwkHBK13KxorXVAi",
  "key2": "EQwWrY3Fy1oN3jCs3zC7fnD167nbiJLXjtP3Pgm4Uho7SyjP4Vs96uezNCPx9JViVerXhKWffDw5G57q5pUckof",
  "key3": "5JD3zG2DviQC2tvw3U2yMfzs2Jmnz9TjFnVJ1W9DCaEVHgq3BexyceywQBtnnPieaEgSy3KY4soiC8viJJRVcCCH",
  "key4": "58vGuQSRAvJzNKvtJF9k6n87oJoYc3VLp1Sq68ZuV882bDerC6nRH8LX5BEdj2ohBDZWXXqYwW7nvigVdkpgPEi2",
  "key5": "k3u717GeAJJmG9Kt1tXEBrTb2ne3xjsCLUHRj6TEb2DNrBxi38qprWutPmtbZDh3FvgMoL3kvBuF6eXqBckArki",
  "key6": "5nCfAn6otoLpMrt73sBhgVgcp5WcdCJ8tqCsbQBhjZw4AdzN5BWxdwRVLnHkK6gsDVXBJwk7KtvQ4zNbC3JFoNRa",
  "key7": "26iq251AA9CNkezLkuXWEKDxNkYFckW3dSVw8sL7QGtZN1NiABqam63hhiUfB7XbgqwLoKbtCJLH4kkvjxRxKGpD",
  "key8": "4izzfkubkd1RLXYWx9yU5iCfRWUXpYpVSZDMqhN54WLyKRcqWKceKyNwasY2jMh7sQwmnntdPXjbmvD1Bug9UrfP",
  "key9": "3btXSrvaac8qo3xZKuqEgM6SpWB2HbDqiKUqEEGX4XbxNK6C64rtDqDd4aznKVTdqoufNxjJTFZg3JuQVfrWKXDC",
  "key10": "5M8z2Z5HUgKJvi4eB6837xGtgtqFJP78AG31VYb1z4ZZPfD77JLLYsfziez6xmy1kA7fBHp4uR3zdmoLKgpyT6CH",
  "key11": "LzEPunhnHKZYSqsjqDQXRQPEeVp9P4H7mrdaN1Y7wYDAs3m58otXPoj2KPE5zhZdQrUuGUrFneGWB4CKER2L9KE",
  "key12": "42XWJYRgN3wmfSfTWCZVy8t3bQe8YGggAYzy7uZfqZ7DqTkYdUJW8d32jWvCZmZ46pAvXr3rZ6Hcixad8PSzkkZC",
  "key13": "5MzRFxUGmkHadVmbybKdBNv6YWNmMw8XN3gTcGSL73EvPAuiWjz5x4ymsmiHRzitzWB6ArkK1gCdv8JDwVxpGry9",
  "key14": "5AejXHMqCYbNFRQ7KhaYeZmaLPiehDKzFpiTHjeX55Jvpo8DL5yPd4moMUdb6jPLeuZ5kWG3qVogewWBCsMcSS28",
  "key15": "4TAjJtd6nC4fAhBW6pQzc6uFueiXYcX1Dm7tfGJZBwdCBiYGVGT9BDr7bJMKmRX79SJKMEwwA3GPpVK1MTG5jmXE",
  "key16": "4AFFXL1NBPuuDxe9dAeY8iSr93rvoqH2cSiC4FSLsi1TfpYjUEJPUUjcAyTmXQEkDhtiASqmv8Md65UMndtFVm1y",
  "key17": "3niorVHAM4uheiVte37BACaWSqUuBHZEoXiXvXR4pjWTnfEurqMX3rxue8SFE3TAAJed6XuBEaYYPYKFQRXqK2nn",
  "key18": "2K8zrLcD6vdNG8AArKgPUbG3n9viZc4XfLA7erGVt5bfX6N2Ss2CCDupGorJ5Veu9EhvzrkdVDzEbpatbvth3kue",
  "key19": "4g2WWV1XebRaiAAw2B7Tk7RFaWmaKekPNdrk871aTHv2MUHQ5UdDgb7kCXCXbucbg52v2PQy6nspPV7ZDgGNisnF",
  "key20": "4rfxJ4MtiDYZxZxszhmudwUzpDqAFJzqkNvuWq7gBZx9KY3D5dN9YudjnmMMEdxNuUz2ph1rgVaWA6ogWk9aRhGx",
  "key21": "53cQ94D8t4MZqFrU3m7N9Q4zaVasxbqnusnx7Hjqp4B7aSo8VmH9nMN7jKE6vcCKFJFVXYHQdRufB82jReEPADxv",
  "key22": "YSMmQ3eCgjuA8HdGWnzjbozCY98KPiPdhD5eQG1dexJwCkpsPeR9byjstgMXRMmTaCr9JbTNKSADjY1yrXtxrEN",
  "key23": "4rpD6ts5AnusHcvHKXeJunBcyHKje4sJy1e4PUCJ41xDDnDGM9ndXQ9LpBMVC7YdyyhfQCDfJ7TBPSvBCAPHFJes",
  "key24": "4A56Di1eM8pPe7hNGwo82gExpbdzT3dpHHwNXt5fX2Z47BDbZMcadMgVVdkujuaTqQXDTb7pAwf7fKjMESinPSrT",
  "key25": "4zsBQr8RCzCQyCd61q2qW7CznosfTGWezNLqwXfdZPHh2A6bZzGK63aG869HMyibdkRWrZWdj3feBLaSdvZ8Hd7K",
  "key26": "4gTzVQvj5EXUkXPdF7Yttrabtyk9RznZJF54roAS3dG3xqh5JtSje2pFrwh8YCMQ3gRnH9en7SrYKo3ehPDFSsTb",
  "key27": "4Y6tNpfh8Uryx9kJg5KbryHQLXdLDxbYksUg9mFRUjg4PwkuCVbWkFvNcFsw61S7xXTCnDiRP3Q5iTBx36Gy6N4f",
  "key28": "4VfKmnW1u7VjLJuPc9kUR8c84rQqJpq1xUxv2iwMhQhpZa6M6SPGHENMExH9NeKq6vWJPJ2cchdJCjQCye3Vjjwi",
  "key29": "N4pcvgVcRbAc61yEeJ8B7YtQErm9AM3QqYsV9rRWooWbgrZGdkUU9pwmHrmtUEN4kNBSeHTzy9Djw2GzTkwnGyp",
  "key30": "2nPvE2Jc9zjkeN9b5Qhm7nzBw7L6bMpzJUNbyzYcXSbJgkx1WWCNJzbwmaUrR5g2q2svZUya2xLJiYDUdawxRDN4",
  "key31": "3wGJy3ZcSuT3MDrnv3zvgNttoTn9MBeGZaqSN4LycTdtMwL5WzgvC4FXGYuR8YK4z96GnjW8VJ9qzik1HXNimkS7",
  "key32": "5fsUvpkiWBCPaKWiTt9HBf563m4D95aMhw2wvRm6oTu9Nb8CEp324jpC4Y37THuNoXHAH24tK5S6SWKF5oZzXZca",
  "key33": "37LkY4D72Q3nWR9N4QZcaG7ACQvm441iPvkW6yd5BztERDcCjwmtm2s5vJSPWDGDsmkXNpwG2oiUArTdKa1sN7ez",
  "key34": "29z5qvkXvhSk8w4WtpAwoxb2zpSpmVxian6Pwm6tXrPRBL8vYAuoJDEcM5FmoVHGXz2ER1HMyUegMwrW3818FGQY",
  "key35": "218JacM9okgjDaTTHYCodT75HBthXE275ZCgoWHixfscUR34FNyJsLuNjAAUhRHS2FFVfZHLtNidYTcdpiU71hhJ",
  "key36": "4KHERbF5rxBaqUUBhqdCjDZ51aRmfvWuSGka6WqrxkvjeLLU8q5uLGWXcLWhC2MBcNJhrkMrNhtpTrEJUsaYeKUq",
  "key37": "yfLTjj1CQMvURj9Eu5gyoMbLWuNJgqFcgKzYfVpXTtVkeqsR71dkyE6wPGTH23oEujxBdYhb3KAFqLgFAyHTLWq",
  "key38": "31MR1c5DS4B5RG6U6XArA2d9noawCdQb6j9icVZTwoZmB8tzPARYYcVDZhfvTaabCWPnTGBi3StBCrPXiFpNUbsH",
  "key39": "4bAUSgtf85vkX8LrB7QwmXE72rR39ikBqh4AwhqgcC4X2nNZciH3YJJshRLUq1RxrKEXojo3kZcdpJDyMkzMGihj",
  "key40": "4VW2vDNM7ru2gre2d4ux7oqwjHDV4LwZZ9xqwduDcorkRWghkR9qouW1esPVRVCcUvjiTt2W7rrt9WjxJBumaHZX",
  "key41": "5KsP9oKKvvxx99GLmK9x6ZaNFLXVGAAJSnRfsd9PyTwh7r4QfZqzjHuMm2U2ZdhPSvoXXJwxjixi1Yd2u5EQiGDy",
  "key42": "2BTtaAv27nKPC4suGFFjEUhmojqV4WHZ6WEER61qF77gj56CEfY72SUmwKHxuYt6WpQw4bvtXrzjzWP3nDZ6Qigi",
  "key43": "2X3k5nRYHj4kvZbU4JAaq2ofcGtVfqeFJcuzj6h2RoQf4LBKEz6wLtffeeiXenxeqzunJBKhPazs7GkPHQHpCvEw",
  "key44": "4ER84pdceKip9xKEMebK61sCRhRxJpPb3F4L2DAYUmvW8Mw1fbhR7oJPw8XqYcUg84SjKVpk2AjFrXVWuWx2kuds"
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

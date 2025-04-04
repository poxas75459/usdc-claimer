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
    "3EFizab26WU7qfzw2dHZYpVU4TEMXYMs6P4bniQCpe638H3mwut89kBeTn8E5pRy82xJRywTwUhEK2hrAGvo5Nnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEuKuzEBdaXDV9SUtNHjqD358EAVjojeD2F24QoT3V8xA1QzraEUaNbSjRMXKC3AgwDcg2rCVvKVXYqgiRc2acs",
  "key1": "4ETBmhpa6b97XZeMjqXuHsarrT6pUobAdrP96VzuijYRxRVJpGmsCC4zwsvAasKwqePVhXsYUduVBzkhs6VHLfkC",
  "key2": "zB1rjA4jVp9VFT6aDXrjZCpQAoZio6xBKT8vSEmJSWWobC7FRnjyp7z2Jdwg41qSguLbcqH4xt8HUoQ3ZswGtii",
  "key3": "31t6ip3UYm1djRLmrj1kF3ExGkEzYpVFXshb2FcYd83EyvFhiQ1dDZTR6jQjdQg2kMgfJshi9rNLPpEb54YNDiqv",
  "key4": "2eCHKuSQK9P2bphC4XVQihNX7sLN8TWx4EcxGrNWjcMuzntGrUcjbpowJNikcBenXHposxpUwCKwFKyeDZnmaGD4",
  "key5": "5gzzwG2SCKjXW2iFCN35sFfCwgdix1h9rSCTK2bpFHCFBHo5tU4VthAUGZaKAyqFThKr3dx7sfayCyTiX5zXtihB",
  "key6": "h4qTSoAfzCaA3ARBQNmVtk4Jh64GG845KrNB863VqRuEnZr6Cwvwo5ooAQXQ7vDhV579wSfjPwjuPYN86ws32Ai",
  "key7": "2gjj1rf8zUTY4RSg2kT1fzXYFY46RobkFtsPBzq4BSRfVTMx6bNFWex17PdMwLaxeNiqXokP4gCmYUyaoYbaU7Lc",
  "key8": "5mXxnGEfo9uXnsMd3roNVpj9mJM53LLpFiYNB7Hwfz1DABVpoGfm8kJPRab5LGWjzA7kPFAqGuzx3AanT4rGVS5h",
  "key9": "5X6BZRyUkpFhMrApsGiAA8zURzetDSGaSjGR8KfPKrnazqcthqQoFx9WY5x2N2tXdAQeLjSRyJCoXc7xJVYFg8Ry",
  "key10": "2dDRgU3UyJfoUseThDSGz5rEyNwn4fGznzgopWuzpqHom4BcCtxCw8U52k9UppJN3y9V8yfvGJvxE1k6h5fRfvGM",
  "key11": "56phR5yw4MSQeHdDYD8cvuvd5FkBkJTdSRVAKU2k7Vcux3UHjcRAQz6jxJLHFVqQgq4DspE942KvseBhaURKPm8Y",
  "key12": "5FUomSsGweZT14jgS7wyeTqZtC8XFh3jgFxSDBXqDUs3bcRdyeLrB6V8E998FiFcB3DTFU291nmtn2h179igWuh8",
  "key13": "2HLSAA5AhuJCVmm2MRh5WzmduceGKrKgWZoyF1n2GKxz9Z27WsbtNMk2M2NXzL8ZhQJ7Uvgw3tdWPPiPN6jY3Wwg",
  "key14": "34pBcWoF1irGsqDokxvgJUueSKqJW2AMGvHrjPFvAPDQmeQgWkmctVZnpLLWTvusUQnytJoQpvdNiefvtFxuziDp",
  "key15": "4q7W9j2atezg8ywxj8afSgnAwqiHqybfok4YHSVJoXaFYj3BsMBj9Wa8qQBr1whmaDHVFcvme5k7h7kmXYnFepfr",
  "key16": "5kDbeRQYSzjgn6qPNidTBV8wXvQ9VoYnbFWcBgfmhwFkkJnQdY4gru8f9EDjzzw3C57KhhBBR32VXCGMptfCXenG",
  "key17": "MWhThBJ2navHBLy5gejtNNiWgX7N3eGyhsUbStV9GGFEschYayZ3DWdU7hrvhEibR5dKFTd6LRdE4nLAnGR9ujy",
  "key18": "4QqmkAVgoaZ7dmKuHiPaCnrp8tLdVFUKG941doLfSwL6KEpML5nanprRzvsft6HqeStQS1SczXdfWkCABBm3pBwN",
  "key19": "4MNpPRMTCS8kEJvMhcYNuvHZ5xfRJeny8CYUjBfTZQHt72EiLoMhMY6QKPkEuD7j71xve5VvGj2fDq6bwM71X8pG",
  "key20": "2SFEyymuJ8tQKGiN2bwxVLL5K9ro7bHsGHesms2fTvjM6AYweELhaLtS1848CudPHZMkJpEodnTVDuQspkyHhNNW",
  "key21": "34NHzVNQ894ieDFTR7spuF8Wkr2vNgPrdWR93qaSb9fBUmvEUs1gxPbeWhLvEmHTipp5QB3yFRDuUYrZzwnDZPv",
  "key22": "3jUnVgmhrhtBmadfRakEK7YXAiukmCCT6zyGfXY1Ac1An8iQiA6ttvUoQcLH2QSKNpvkVoiVB6b1CFc8NLmQwrEz",
  "key23": "2q2DtZo17phMEmQUKxRuudcMERecihQrETLnH2HexUsobdykzKMohc2TdGqcWbbdEmUSnkrdM2dGoYyV7RYWa2Qb",
  "key24": "2Dn7xvMZTjm2bs58ge5HvZdjKUtnLhZs6rFLeKjpR46Kfh358QMcBiAzAQcWNqAPQFDsdThuY9ejWZ9KFWiK7ek3",
  "key25": "2f6oTrjUGwFu5f2pBVPv351B5pegZ57P24VzsJe2Vne14zxZu3cnmSXeYdJwnDc3Hc1Eb3tTmyvmtej2ScWkmVjF",
  "key26": "3YPCVRU3kbBDNw2RLHCP3J25vTeEnqUE4zDJKjFhVcmqk7sz95STF1rYdRe7qDt9trqn6sJEgWwBAT2UvbVYWFJT",
  "key27": "3qscn7qore1hsgHcLDLKLyPZcoc1UNZzSKJnRXd9zPmYDPHg4CFe2ryo3qh6QP85c3BQX3i73vfHhFKXnWVY8qEz",
  "key28": "Zrd2oYZ23ghyKSGrZdZnKXBcQyicrpbNx8g6yeZ9kZAaGhyNaGQw5bLVhQJ4bv6A76Mu5yzbQjG2Nzuk3Q71oTC",
  "key29": "yCnDtX7wn5cYdrJxViSLcMVRkcSTqrkPiqYKJDBCy338LbuAoKzwcFivyUbe4RnBJkEHTucAsznzAFQNun4EvxM",
  "key30": "VVM6n9ruT2nRCVLVfQrx9xUvzzm8uznxvBq5rxEJrVTgbcbtbrgQKkPrVnDNiRAtqL1PydmJFM1nkRiHM6pTSMx",
  "key31": "9LV6EnWGfnvJY2pRpSPsGUQ62ndGA2SJDBwgPjFzNbpXJRXDGKxNfqtDYYgmHBDB1C2cQX6aXh5REbkWMbv8ehN",
  "key32": "5vDf3xY3sqzJJSYAuxTUp9rCP32WkixGLtgy6AMwbpLngrewijLJP6vHK3DQL6pTPLTgf91s5o4HcLRWjKiFuWU4",
  "key33": "3hWzTuw9Y9PaJ4D6cvGq4N2Yu7u5FurX7H3tZf7hvDjFBt4AGNK1EdchUuA6s423XzqKb4oN8Ck8RZgwNYWowHS4",
  "key34": "3G9cYzEXWZdkCD2qXSscqDGvV4bgHWziGXSQ1Gj43PzsgFNagv5SkoPYdE7fNvhCEHTFPwzbyMc9SkqC14JdcVwS",
  "key35": "4DhrS9CLNPtG7veWgzaj1rSQoJ5bT1CR9ejHmXFnQB42BazEcHMS7DssNJgJD99SbvpjTVnrbEkhkdBzoDJxPwkU",
  "key36": "55Zv7zw7zmaS6gjEtkSUUZjkiUqSRstP1Lk124tfTvpWM11vVaU2iF92yjic5xSYjBvG9pNxmv5ziv8q98PNySKb",
  "key37": "4jrkXcWV5wxvnJiqV4eHQVLRo27TtJVyP9tNevkNstexcZ5goZrT2RHfsTS7TtFH5ChbCzNWmGSCujBnDMjNZ7eg"
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

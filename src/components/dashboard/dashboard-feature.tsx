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
    "4b1FkdQo2pHMZPQD3R9yGZPknx1JgLM7GnGoT9mLPPnEyCNuAfQ5Xyb2f5eMT5tH7pjSJBj7qbydD4xnHMUPsggG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnC2U8oG5t9XGMYp641mqJqMwUjkNrrV5jPuAEuqVvU83rVUSSqMoY31a8dTK2AzAEV8FNdqNAm1NexiRXQ5BiZ",
  "key1": "2HPPow8PWcQkGtvDJ4UsjzKcos6KrVEnfifmthJsT18GfMs1tYoQnDjBaQWDG7jcjEemZv9giPH76TC6g6fSe37U",
  "key2": "3MM8e9rRAoCY3TXxLD55i7QsseegyCTQnYv2wFNungisk7GD3ru8LdR4JwNJwyqkG9yq5AUec2c7f6ikGPCKqAAY",
  "key3": "8pVNzCpBjJ62sdMmUehn6ZraXWNbSJQ7zCgQykc1o8WxfZ31GvpThmaMy5Hc41A3tkwW15BAjZZky5byPRuddPD",
  "key4": "4Q4VkvretuW5yufCvXQ6dt7aSSWdcYfgjVi8F4EkBVtsXrp29nNL7Spokog5Waj9QkLA5YFFdkiHwGsY8rt4edAW",
  "key5": "4Rqy31jRsPDGTP7w1TXgVvsQz4VBKduuwNawdPbvibJQD5BAfWWa4XQPEEF4PqRNGXX7ivoomBB3ELBJncRfAWkX",
  "key6": "2NHMy3T38L9MvpLnqpgQkYZ6LMcoev8VuP8FPo2qhxTdS8DkYdqz4TXaY3r4FjEMiqXEykd47cVripxP5pDgxGCj",
  "key7": "4wpZkj8WcwbR1prr625Lw7FXRWm9MS9C1whUdbQAiHBJFB35EyGTmfpa2C2yqDLBTmgsEaSmYbCqUPWVK4uB5aq1",
  "key8": "5YHT2ZxXPvtQps5FwXhAxJhbrspqELjfBJwcQgGfg6GDVa8bu2dKyDfJshTZDqQFS4vVLausVHwHEVuWGYhaRy7p",
  "key9": "5eix1sQPJyFejJTAc8uA73e1frjbuo9hrZ1RSRc99xSkaW93ah6dxvmB9Kw8ZjVBJSiz76rfL2pd9eMDQbKBCR9W",
  "key10": "21cH3MeRaEwB1NZcoMoNJxykv5EkHoPSxHuKyu6TweBdURb1DiLpoCihgg1i79oZ5NfamUpSsTfCQ15w9xxmZTk1",
  "key11": "2MCmER1P3YMH4Zubvpmfm6J9uQ9nvmre5YFY4BYBjkk7LAPhFybKWCuJeKU24gcGLgLWXb9he1PFrpr69ojjKv8t",
  "key12": "2L2jyyGRUKmBrq48zUQCeT3JBzRCqZmmMRgSPxf9AwQN5RBZQLut7xNA13yiq9DoVrvhB5wpg8TVi9wbS9sRC7jT",
  "key13": "3ifCtDDHuMjum98589UzooCiXnGbokvfdmHsSi1EYcsPCFNYcE5mNCb3cmpAHNbcYxTgwvUXrtyMSUByR9PkS2gj",
  "key14": "5gWDAhQAyi36F6atPXpApxV9kCSdVfhZJMbQESkxutR9T7CbodubR1CddS8rnBdhkZPRpPhN5xXvQhMjbuvE3PPh",
  "key15": "4xhjKkJwSTqKmvwHCGgdPsCZZ1XTdPWGeXeDwKGaiqo9nxcgsCYsKbfWhaTGJKvWNuy75sxkgyc7k2SNS8bSJR8C",
  "key16": "2VMDx5PaTp4749pQNounBDDg56hJ1zmR8CkF7LHz6pzZhcgNwwwYuhGEB9codfwzfUsFk36LQ76wpvqXzB2y7228",
  "key17": "3xBrvfT6tuMpQvbFfBJAmmvSRzHh115WPR1pebnJtuFM5Vcef1MzGxb17Pgj7QeCzpu3L5XsFdCvfkeWcAe8QZKZ",
  "key18": "uNR9HNT8gTojEy4Vo9wpwiExr7MRBBFHWbrxpQt1MTuZxwegsrgrP1YgD86abNUWg66Kiyczh1nyae29XUhVrHT",
  "key19": "5iBjhtSo4cc2bPwVA4u14np8Y58yCQqPFcEcmpVJUQJ4PuN4ZyahXKQrA4UsYb5X6kP6hnAJK6qPWaYNvsHbTAcy",
  "key20": "3EgyEdSvb7TYYy1X9KHzxhev8yreZazxQu9dcqWTN5jsSUEn6ktM1Q7DTn5MhdKUoTeb1WWYWiYwFGNfLCqtamhC",
  "key21": "4uwJKGLmHiZKxmydNtCAz98fsee8mazyxEechWh9QDak6ASvjwCAqzzwGDmK996ahfbDQSTpE5rUsCxQ3Fgj8YdE",
  "key22": "4mmojpn25FNQJsxwtECuGEFyDaZvntpkmEmdruR6FTdRGJgzctLpxLTa5fedYKcBerTpfBSGECTedYrqZjUxe5JM",
  "key23": "aQXWbCgtehXcSxu5Jw9Hp5oZwC9kje7MzSACMbtsxfQUYNfycRrdM7JV6qWHH8KtSQCrUcoWbbGT9GDLDp1tD9z",
  "key24": "3PnxxPXudeN4ExCGFER6Dcr2sFfWmeTwzKm8ZmSU7DPpz7JysuJAMsNZcxSyi2sSbW3LAWAj3ut2iCQzZAn1panZ",
  "key25": "5MtKc6cafV9hnhjwEBF72XJiUYUd24ewExWF3j2peqEzaJDu8xP96G8zVHvKpsCVXZXBuuxRzrqQod8H8w1vhr9V",
  "key26": "4ku4k3UMzFyMqB4oZMQMzuPtGqgASEuCv3Jhi1R8E2KDJeQbejR2BJXu12Y8Gp5NUSjZBmUfkeQdGxrqhjCqsMYU",
  "key27": "3QeBDsKFrC1K3K9wCdAH2ZizYMxd5jbN6oE1mTuNHBiS8Vr67rsLSeecy4HtKHHtNFFsQcFfDgaWsrx7LrxoDvrK",
  "key28": "Dm1eESRwKtpkSEhNcEgS5YyX9USkb74vSEM5F5fQpkgv1nVvYriwEJSdxnqnyvK5gy2LpqavyR8Z9yh1TaBB93S",
  "key29": "3LztAkk3GZJKYPjkBmbGhvQ1e3mVz5M5oeMa4WFMbwPSeGmKyDH1tWR4yV8rLmfN1iogwFvySpYCQobJwGM1Hjgh",
  "key30": "2rA9NtEPqpKLxDRsncBpjFnQ4pD1PwgswGiAxoSS6zsAKF6ETjuRZsMCbJePZnWSfKmZr5D152kng3DagTvHmrMn",
  "key31": "5JcfRwUoZ5dvjJ9yRrHUjUtegjX6ddQMRV52tiyebLMJXHJGBB99esX1z6hvDDQc6MSe36tdxYPzQ1gDQnNFEhfQ",
  "key32": "3cYzyzjuwGW13aF7oexAWs2s6FnXCxfWA98HGjv2R1hdpSgKDLw4WnoXaA5KPSAYKxmeisWJRbVz4RUJZfJ37y4c",
  "key33": "33LGFbaMagM46CvfTgwLQbBMBqpnyswrk2yBaMFVwFMwngdxiggSqBqbzmpfPs8J8Ja9ACNNe5ngEDVggS2yb7pS",
  "key34": "43rkHUmrVBi5d877Jg6pb23Y8XLodWS5ePTwXvBbd2Kxcq8LWDAG2QAqk1Uz1jebH8mRzA5GVLMrK3UMGdRmxbrB",
  "key35": "RBuTwroW7JS3t2eGM3Pr6cFqVvEit1bEo51R97QWfur6bALyDyK2m5hZ3HtAdLCAs2shMBRcVej7jvDuwbeJczu",
  "key36": "4mpFet1hoXMyqPvjTJabu3oXGP63QguPHeo27cBQHF7SEdKoMUg2XXQx2LMEJy3HRma2w3HLRpiJpZtJHQTxGj8X",
  "key37": "26ADrs3YJ5PzbE3aFKfMfQL4Qxqeq3bkVbAjgtpcue4TQUnF6XWvpZMPFnqpBg9jFsRCJ3NDKf9zX7XGvbVS3gwJ",
  "key38": "4BFN5b5ZZQRVErxgpksYfPrMq57VR2KEen5wfXPvm4MK1auFawtBvhGUS1FZjWM8B2iz4Z2hZnW23gXHVyDoCqGD",
  "key39": "xNoYymwxWPqMwaLdhuxUr8Mp1bNMuozAPsuebCGe4ct2mf2nYBnPfe2n2wR1pqnV3aGHgpLtWUKELbffQQ92q8E",
  "key40": "3dxc2vw1Ru1coRS2mBPGaNYsq3Afi7DrJzqVnPWGLgqSFj91BiTiBJiFJV3aeCrUo6H1ZznMkm4kjKgD4xcx2Xqf",
  "key41": "4M9fZ8EVKvQDawverMARQcEhqzgAM8FnsNE1BRqneTESt5tkGGnyRrNDE3ffe9Nq9SmpkFhT2WurEFE9Ku8Htp6g",
  "key42": "nVr78eTEevF1E59CARdb42Hee5k423x9GZMgDQeQkxF9YKwfDWRi3Tcbq1KtuXVvivARuiLssVKQfsCeM1wGUx2",
  "key43": "4XS71CVYj1NRAVZiDcnJbLnZGFdJH37FuJFd5Jbw8utRP6UYWfQqjFgggi4okzf44pGmFtRbgFLbATvHzvqTdhUE",
  "key44": "38K9XhCSTLjPrCqrMbo5mc5nsuZBGzx8Fr2wjcofBmDyP5jxvJ16sywY6Hs4NfZmQNtB4xUuBUA9vsES2eWtoC1g",
  "key45": "3KJaeABfjQX5nVihbgzxh7xRnvZFmffVeCjudQfYxPPFzU6LrASjnJX6Antb7tMZvyBP5hX6QNUfnjWp38v441wy"
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

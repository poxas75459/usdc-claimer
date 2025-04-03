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
    "38Q5XDWrMkCXMqcAZmqvQ82N7CV1jTokMYDG1HbMFLKqcENMiKVthv8QsUYB3oXpGkeaxFy1dEuGcpQGENwAxS91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WMFviQ81daxsybSWz7XvkaEKdgdphXBZnUWkoZAf4daB8KV7RP29TD85kJ1J9KRADMhoriqD5ZhHXvW3rYQyw2",
  "key1": "662xK66UVbszDeMrJAYP5dvXHXUKCmDyN1bkcdtVLGYGa9fgHgv7FrGdisEiCopNvtAGP5E9GkZjTLDs5xjAZksU",
  "key2": "2GEqDjh1kPBMkWzyPMNhSuCPqg3tFs4rkr9DeCbQrvJFKtsHKx8iiUz3tTEjQ3dkYCLhzHPAcqof3Ux6MVMgXPRz",
  "key3": "2YrtJFBTHCqe8J3Zw1PqkSZN8G7LgLxuy5RCKsXs1AX6Mb8efvZcj1cnRhJQqp3iifWmP46p3MDH1y5Cs7YuExEF",
  "key4": "AFsYtMRHkDfBDkNUtefdSAyvQ2cTRJVocABgNo3S5tYMTTXjtMWHn1WTqhVGdCRYaydc9LfW1u8Tc8VDgxWRkCk",
  "key5": "617VuibychCWM28mUQ67ASFusYHi2vAxhucSQSuX9yRrV8NK7QpdjBGk1Qx6o6JyQYckfa9gnByyDubzefeYycWW",
  "key6": "2RuFxRNHVj4WXnjdCd48JbzhQnNFdjXrXdBSn8cY7QLjb1VNKej6vGetLEndaygm5qr4HHFwTf8okBUsEa5CKsYE",
  "key7": "5Vbu8TDNDfAMDbHo4F7uQo857gTKQjUqGooAS1qPuEvEbYaTbBSFZVauuVmYdVA5Ht6MUr8B6y8d2fFdfq3BKNLv",
  "key8": "2NfK5o7bUWnXCy9nvAtxBEMwW3rxVBaEMDdmhfb97d2Fxjenzhs3KdxoPQPLn3L2t7BFnfm55aVrZ7FBZQ5vziRn",
  "key9": "4CYTtHQ48d9evL1hK9hUPJckVPKNRt4XZD3pfMtVRWepCd9E3uj3NZBjdzN9UcPi75hEXt7oM2PMexUnz7RaeAaF",
  "key10": "DF1TPS5t5QqVMUQejgihbLqkLJb5HJht9pzzBK26Px7qcoEZ2UhCoRnxUT6htSqYkSq4jdBT4oE2xqizvDJf3g6",
  "key11": "oFhxWX1fXCKW9224JzC8REXZmyhGPy5XsyhHzr9LW4642iYUwL9EXu2mU31xxa6WGPZr2bSdK9gDv3ftpexjqS5",
  "key12": "2VHrfj1X5P1YeypcWJujx1rT5vyhGxeSjJUWjJbgzPmHBjDLF7KJiKFc51Qyazm47Qm3DwBmqL6JBBHRN6va24bN",
  "key13": "5HpDquod9QR6GjM4baHB1bDSMCzJA1WaXAyDWD6AcqvNGDSyhDJgpXLBU7MG5ohKdeycbWh2PxRtm7EnDtjgVq4w",
  "key14": "3by5viK2gVKagKJBV8XHGh1LaFgdGxRNdFVocwRndmdzzA8WyhqPHpKtk8Ukr15KgJoC292oiuwqsXh8mEcaKEjm",
  "key15": "4FAhyXHrMkoQzX15JT2YSFy4kKdVsx8mMDh34EggdQMhFeh9TM6Q4G9tkgJN3ydbQ8C97wJYgPzfvPu3wWHcBE9m",
  "key16": "2vN1r93AEpi7DAky75DwG2yaFZ4bEQfaW6Cys6RLewL4Fgbt5Bu9m4guMfUYq1mULfLBCfjgoXMamVrTtWGQrv5",
  "key17": "36RJ5o3SWc6NhSfKZJrDLJP6kVUq1Ljh3ZkFc9shF253wqXh2FqNSNMiMGdo6nuUanzfaoE78eLG74e2UVPFypNy",
  "key18": "bDEmpPpAm1dx3H4opLYaADfqZbggVZKmtUX3ej7Fe1kV6tyLAdGjKUEA1qwnzcPAQMBDGevPjjSMarnRVY3mtSQ",
  "key19": "wnrpxwqhCeY1B2pwRWg88UcSM2NzMEKpk1vFn3YwwNodeNiPjSQogAmdYmzbmAFDutkdavqpzZ4GSpcVYH3pvo7",
  "key20": "3tBL2jpbeiYnPN2YDZwRytRtT7JvTWbdrmJ27hNTDtYdqqxQGr28XiSoZA8kmAx9wZoj2UUq9BvzGgwrkxbnp9ax",
  "key21": "2KBdYYjfmnSm5qyNuVWnEsFQenEZQL7jAdjDES2gvdJN3WscpAPbQyz7Ch9EyVFksmhn2mHKs8obMztVYzWXq2JN",
  "key22": "2qYJcqU7gBEQMvxB2hDY5ADYgrTsc1nmYUMZjMWfPqmXR5CELyRnozeuu15V7bNSTZMS3HJ7wNfRwYp93eJQzFXf",
  "key23": "4KBpXFWV5Ai431MhmdT6NyA4Es34AUqn2LWdXJnvrQosc66EqT9a1Z7zvrjQQBkq14dACueTmMGzMB1xbXgv7GRu",
  "key24": "bXAdCFK67yGtab136ZUXm1x1z2q3JY8CoUFB5zdGtLFgMBa6N71rynnA2RuJ2F1oPSChVa578jHXU4NQPe2oDEr",
  "key25": "2g2FbLqGCHs971bq7Ct6WCsfR51MmazkJLUTmMNGyMs82Jevkn2cFDz7ryLwAq88PizxoroPrTXkUMFFiDWKGM9S",
  "key26": "2asQTCHH57G7yv3HJE1ZKA3WtvLA7K8NaQiZ4i8h2hnQfj4SorSNdLmkVbBZpQzY5TNHNtduDw8XM8tRgprxBVVs",
  "key27": "4NnjrjKRX1EfzZKqESZhBwRvGqtntrEj7WdsWjTtQsRHyf23ewDMS1mjxHcAi1D2JLDkbcCvBwCQk7VQ9xc1bcZA",
  "key28": "5JdXoF2FfyRJP2dJqA3iuKUtRGK5X6mNZEDux9D7f8jqaAPy6RXEnvqVWgxLqbSkQeKFJwcb9Eb2v8hs61FDoQ81",
  "key29": "g69LafwRmGNJhwHBUsvgMt4gNVmoP75yJF13kCCbG5YDLwHyDfDhbbs8JjqG5GRftuor2xmd4yN8NtURpbcBY6p",
  "key30": "3hYaxsmJqGqwB5LHbX7yQGHtNJegqKGpDKEssjYq3xRP1753LVUqUBKhhpZek4JPHuFZYwSH1MfGtkHKJ7kC4E4a",
  "key31": "gbLArqT21SEhv457gg2YvkLWacTfEJxRasAvQJqDtH15dj6AHUdDwWTDC41fjhivhNzCdn4TgyqxfcCw36fAvAc",
  "key32": "31izZ8kBstVeSLJPd4iYdMJr9zoHyEpE4etcRF7Vp77VhoVwHfD9QyoyXKBTxCu934UzqX4HR4MPp1o5H9nc848G",
  "key33": "26guGPmcRzghtyesk4ZH3f5gCfP2cwioa8nyBEVF9rGE3FrxtdLYT7z6JzoLybexkgo1N9AVQDzVm9AjHmJ4UMqJ",
  "key34": "t7UJL9EzUSVwbrTDtAJy1Ugrt2ZrSgZEKt7vjJkAa3BAVfuXsjkxWvYPmSLMJDjXQN5v488kiKimS9vJk52rKnN",
  "key35": "3bvyTcG9PwyVuyWPWGV9AkjUG5dnz9Jht1UHNBKpWYJXNzhA4C3wGz5TzcfMoAjXE7YxTh6LQfKF75gChaLozJEQ",
  "key36": "59X35Cf2aS97MgHxyx5DDMngvDddv6k1UgoGXkm64eFbeCWhcCybhnd34TQXkU2bXbBwFqC3p8JDUAVSkkQEEuCK",
  "key37": "jupQCNpvs7f5GkE8oSRSejKQJAxEKAqDjeJroSY3JCfW5de3C395oJeFW7sTQbNhmBYA3QrowCf9DXm74YzLZdZ",
  "key38": "3ziuUCQSfguTTuHkZZLxxAPkCuGo7bchD2mAxMEJG4t3TZbtXm2zpPdSHCGRmBet49A3uzqHncpzf6LvPXufdYDY"
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

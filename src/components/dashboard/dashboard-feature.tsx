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
    "2P3nTUsYtnasSxY7uZcWdqGGST4g6EdxwXRJRgGcK6m5qQvT3vATKwA1dtjN4AyisymiKdx3tGaz48p5TxgxHgR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fL8n9iYghXnDCu1GTctEuaz4UjpW1PE76Usd1S92hhVm3GhHEDeF3DqFA7zuAtAHVMqKht3JvNPsUMz7uPdomLQ",
  "key1": "4WkhPrB22BZyUp2EDg4dffZEYvQXkh8SFHonxKomgeyJgpDYFcmgn7yeNKfE5h4HuVxUUiGwDGvvgH4Bkk2PtfPR",
  "key2": "3h2t9HYde8XSPJag2RVctBY4k7vRidq7niVxiGdkxBc2Fjg3YuJLVfbnvfAkMgLrX59KN4fNJkj5pZwKxjiqSTCy",
  "key3": "3MsHzn2wVkc4z64rYKUATsASLRcDzKDHiykFffPKCtdq3g2mVKaUGn6KWi5Zjsxo69DvTREgDzimCEod5e4xxehH",
  "key4": "5yX2C48UTVqoYZu5Mk5uarPrEF8JxbMCBzWkcQa1Qv2AufsZX8fYznyRTVotcm3bvz7dmqChwM3xA7PpiqyJ5dDH",
  "key5": "zEXCnLqJUtEZLvnFziAKkF6c4Y8jCbYicEyeT4Cdyr8u9BuFdnPaTbAkyAEVGcQPPYhhYTwUjw2ip7RoHoSB1eg",
  "key6": "2F94jQcCzP8drDxKTWgMTa1ZGRoGufGp8jRbWzer2UjtuirWgE1Cig9FFzGyhWgV2Fyjr7HWJcKRU7eDsrLo5RGi",
  "key7": "4U1XFyBjNadJ6ADJiUvgoLUPkqx2GxaAZuBwL8BNDjsvssAr48PtcMjTHYEJWWRDQmVwrg1yM4nmUoXHfC5LpAfP",
  "key8": "2q7mnWBgtFEReoJUsEJBc74SypTeK4n8tw9hg8RziUCjES7dPtpDWobQrbC5TH3uJgZ7JLMhQw9fifVGg1m6Pmv",
  "key9": "67pM2WZQUKCyfUjenCHmRwCuXmoswsjS1MqB7fW8L1EGLUu7DvbpGcfydaDoafDjPRwtEQJDA5H3uCZTm9uRmLUc",
  "key10": "5kt3ps2K2HuHf2EXLNbUbxMQrJMvmfU2cEGgCA8fcQojxUGhLBrqw63uMyQKizcdxQsZH2HnYVpxniZ2jqUuYJZv",
  "key11": "2fB15xZmfX7wsE6pjGXwiWGX8MsT6A7jThfsWWvCrgAAd1Z6DH9PAYNWh4LUZLrPaGDEtA1xFHkLEprcWbujssYV",
  "key12": "3Zzdv5Nd2whLz6ywnBCdbXNLv2kGAQrjLoG3Cn64hmkzdzA8eAwjyhnyLmUgkoMs2cLQBHrzBN5X6H5gnBdQxZNH",
  "key13": "4d7qCoikHqixtgXg3UzzxErU7ggU5CPTVe1zKGUJMbr7Qtgz9QQMifx3xhtjX68RkwT4Ms8THrJAKv7bRqheyjkY",
  "key14": "5chHzJt9zDR14zptUiEmfkFCRmp9PY3Vi3bjjfppSQwiRo3SekdFaNGcmWmh2D9WiTxLvuJZ6SWjrw7hdrMVViHJ",
  "key15": "4gAemFTn8bXaZiyTgnLbSCMxvRxLDfe9Jc7oBTcxzedUsVzwbgGyzkyJXQN896sdKCm14TpPNBpNfhUVx3PMoEAS",
  "key16": "3WLK32dGh1mKUnuMwuj3dvBs8biHFUgjcQYAJwNDp2eJqR3QWinYaPkTNPFsSm464neaW8f3ZpCT9Xfp9nDcTrMH",
  "key17": "5E6Fx7EvLPFQxNgexhrPV3nBY6rei7ERJ5W2Wn59Ljo7jNjFSQ3ZRc8a7fQK2x421hxmSHL8FbrAWBjXcuHC3bsw",
  "key18": "HVEyobEKDwA9q1VosoKvvJwX6naJexmFUcLZruFh8KZmif2bAFzMdq5BuUWVGDc3UR7dzocBxHrYiJM6TwnsE91",
  "key19": "2vwubGuN5V8whajgGYDby5Xuk5xY2K3H5Ebu5piNU8g72dQiNUbhmHLtaXfVn3BiTMNcTT1TaGguvhUK5fB5G152",
  "key20": "44WyicCk9NKKrruxQkjYHEiEtAFanpkxekh7mAbQzbhpZEEfa96YAyprV8ngSbeVVvzkT5h1ZLxVbpg5ejz6dYs4",
  "key21": "2PecmMRQau1xp1pjnvDEfk5MweK6m7XuKFTRFqHSMfruhuj1Tb5Q4W3cjt1BAsfMSazU8Tj8yYNPTkHu9VBhsmCE",
  "key22": "2rgDezkYVzVx7mcuXKy1Rhouw3qWCRgwkF34ooWzaPichsrMzfFBF3RMYy8MqfETxcwaWCwb86L59jy5o6amkNL6",
  "key23": "61Pj6q3uu8bFjGHQ18FwyTjoRXgp6HoPnsPsYVGj6kTZBXWpEy9AdPAdQJCMBteYSN1r4dKYYbETfrxwGUEqB2u5",
  "key24": "3HWRfn8Q7AvfvY9U291zxsB6p2gp3YEH2MRiw6rRCxAAyFJxUytcg3xNsqYqoc2M2ZfJoSTfGWfzYExvWbTexSAi",
  "key25": "5oZFoA3SAPk9fD6Eg4Wc9rqtkCvPB4S9H3Le7zWsaWSpcLtG5gCV1Y6u4boNdWcu5pEZqxpx1gQxuWRbjhkFkZ2x",
  "key26": "9eAttbAXMVTWKiVLrsr86v32EMbYbJuJMj3AFWJv6fydRYqwsWgtn1uXftyFN5vo18EUdzzY6TirLmmS52rYhQ6",
  "key27": "5FAiENw2Dun3fo2YY92svN4YakwCYgnMBzmTZcxw4f9sBWPEAv85Tk9WPr6kfqerud7SLJXtkMxvv99sWTcKgrt",
  "key28": "LT6ivkBhF67rQsNu5PxPaeWqL1t74esSqnSbEdoWm51YgbfN9oCp1ksw5jTAUt9iF3pr8izbTpsG8dw8HgEDNdG",
  "key29": "36AsBog7vUNrrgbjwemzCMcj8FzF4rzGm85y9Rn1nH83nMYuNzLeXW8z7ZYMRKMKfwbuRY9Gyi3kHSpD2irDNsF2",
  "key30": "2YdwRZVbQtXVg8uYnJyzQHmLzWkVG7F85Yhi4WPLBbwCEPGbcxbiGqEbrvkXAw9pRgMwindHTkpV5ysZH7bDZp53",
  "key31": "423EdmjPZvcVuLKt9gRxb2WnobeFVXqWJk1oKgeLYRqhYxebcQu7pjATrD224LUJXd5RwAEdLy1es167ZzzsBBw2",
  "key32": "5UdjxD4NgfkGR82TB2D57jtEaFSoS24Zqyj1AMachpErBr5eZzoQwBvFFWbpPBj3fZjJPwJn1WgcMqf21rjcDjzV",
  "key33": "4o4UUZLWf6UKtxmQawayjSxSAiFqtsZhgG48cgoFKmmQV3PtbTmygDzt89JBatcV6nxZQiHYyizKKiCFCxU8M7WE",
  "key34": "5bZUGCufQzTwYQnAx37zyTgVxGJQhrd2foG1XPbNaYyibSHHcwao5cJSXnDMvD9bWHu4facGJEy3t9x1X6HCWx7t",
  "key35": "65U2DtY3BkfE9qPn7ovGMHdnDY4Dsvg1u5gJFhjSdfNQru61H1tPntC6gpQxdBbcEWsxP99M6ZFS3sbV35BTxUYr",
  "key36": "2UyVn4MgB9w8Md1bCMV4SUK5eiDZ1NoSZk3AVibRfn5ZPnGzDfvjNEF9FyyPzPYSPgHHitbeA4WuM5E6341SXmfK",
  "key37": "SGgHXMNkC1TF7xctiyHJHB5tHYzrcrN6Dkkt3pWtSMgMU5BrMUXLESbE9cDK1Byq8j39TmdZSdM4iQRjanfwRHf",
  "key38": "4Wy45bgZtDSgjNvHduEjsEr3G7XTkFkojpJ9wdgWNnckBb2ewbmCWYhVyar4oDJymjdZkTuZiY4Wzw5B74y88aD2",
  "key39": "4KBw7V58QeabVdpykPqqnay8AaSWhEo3wwLnU8eV6A4FmBVwnDceSnfJKA5R1zqUW2Hxpgesd6xu6cmYyDRNXjmh",
  "key40": "4stCYTVUnBaJSQU26xADhbmRwXDnrvchvuDftxah3DSwc8SDXW9hEYdhJ8gxLSLqJ76VNvQuRsRnoi3V2qi7Fndt",
  "key41": "124tFixUkVoRYJ9Kxa3nZgaLPEYVgK673zRFyzXJquFW7DA2ieZztk39VjRM31WGghFQeoJYJrDqjvSpJY16Lcms",
  "key42": "42KuZheGQnCa5SwvLWMGGZEutM3CjjuDWKB7fr7EN9JHLKoAZn9SzhTswVeLyx6YVkPePJDSnjGvLEhtc98BXb9f",
  "key43": "4w1e2335BJMcykxEkKYEBtGWmE2Q7vB81yKnR7HZNy47WLJs7u9TARgjqEqyCUgj8skkm2nFtk5kyMGphmyEanMN",
  "key44": "5Jfk66T6A6qPwB95awmo7gGjDYMLzxDbrzkaRudWAqioKdAvLKWKsuj57yE2pgxLeDFz46x7VZy2MoYr6tKniL9U",
  "key45": "37baKrVs83U6Jnz9ff182uifoirBFB1QZ5U71e2cyvao8WVwATAXfBfEXFkm7yUC4pSjAiasmgezg64YLbvBXxQ2",
  "key46": "4q5qN9yTvqpe1rc4FtbH2RCEYrYa94q649t68vtSydBYdAJjGoRPM81EMqtXGyV9P5zb5zzfpcGFDE6jYZpy3bgW"
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

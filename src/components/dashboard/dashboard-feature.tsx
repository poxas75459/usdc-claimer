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
    "3f8adePxw4kCtJqSKADrURyYXJm6UYLZH8xpdNt9EMbDqBnCkJtX1V3iHmPz1bsiy5c8ggKAKXVdjCSP6B2EfU4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBapLj5V5y9hGhGHdNCM8AefU2BrsPFADmnPbowR2S1JyZwbpiwEmoQ2GJQQADUjtYdxHpE4S9QiHgXjeqYwP3w",
  "key1": "xgqWiNuBwUZwqnfm37svjYXQHyHhiVBovcHSD3ur9S8mDQfrXBqjpw4CSzSVyQ3WxGUSWwinLTPZPdwctq6gNZf",
  "key2": "5fNr34iEBQwD391Q61TUgaau6ZzQ3Pnh9dS6zQVbKndVbyeFHMwdgdUUMHk6ovfrDofwYabv2rusDWA2txhzpve1",
  "key3": "2d9uD9pmYnqwefogVfYmbSUVo87mV2kW3fYq7V6y4ypUmaziG26tgvX6koNbikjdqc3V6erk9U9FA6fTR7Qa7qPC",
  "key4": "4JitezazNSZwfV35rjkvdh5JMd8rxDMuFciGM33KhEeNbAUtyANjrHeyyXMkwge3LZrRkwww3YZicpGa6bSJ5YTd",
  "key5": "hoWho8sUjoZViiD2S2rbEshyNTjCfi1YG8eGWgT3AaxcoPUfrz2yDCkrCqZJaYaNjR9MxRTNGXaSVbNpPfoS6rH",
  "key6": "4jZEX2ZsyAiXo6dByV6ayBGfv8sft7hMV9MkkSQRC36QQAPWyuNtxHx3Qz221FBtwZXQyycZrGWo4wmnfLYdYmYd",
  "key7": "FYqxUKdtqyt9Hu9Jv4AxhTwEofKTTbtxr44CGf99Yqmh7zVg72eSWKzT7RRKthCo1VKyqmDqjydDq7Wh37DLD4w",
  "key8": "3qCAcZmDPt9qFrXC1oZYbFiSL1ez1qMBPDEMw6DJDgrADvxo4Ge3NB2Gthgpcos9Xt7pLoCXWb7z4JhSx7p8GPY9",
  "key9": "3ppxaPGyqkTh83o33nHNX9amQPD1x7NDzVMhcGscpSeyTGhS8btcFZ4wZYtX8FoRxwz6Uz3z8HvjbgymDKUziJ7Q",
  "key10": "5BdQDkoMS28Wok8z3eNqdYWK7jGw5gBFDE6pBxCeTofcYgXBZRZJvYQutNStgECrb8FHzxPqsLvVT6Z357s6kre2",
  "key11": "4nZF1RDdgmhPZoXcaSXtW2ggjQ22Vfv1sYkQP4W3doPYWZE36NZ15e34Tc7uzCUZoSV7Ng8aME9o6DQVheDZM1Ym",
  "key12": "234TRcPnGgwqHia31APrX2p5gc5EueQYgrcNMMx9FYZSXfpQRH1KcZNm4MtMzGYVgn3Z8sHEmgsc5EFr91yqRg9r",
  "key13": "rjFWLpMEGwCVfKjp5mKUHxxmzGYeKTWkXLK2HeueSqm8v6kyxaKYuXGVodxwgvAPrkhxwnaybWi37wTDH1wPS4g",
  "key14": "2a3QwiZsribh1ehfUfDVCgrHhqMemHw8GMadWqzoQWBPGvCrsFkR4sysQ2rTCfmbkiHwNsXsxyVqDkqLioBdARje",
  "key15": "3KWQeXLK9aJ2VA1LaFdJGHYRJjhPFwiFakXeZyLk5VevDssYWQe61ZTsobx9ZpGaqivXR9w9YmCvaRmN1NBR79wg",
  "key16": "YXKC2hBwaXq6x1YVkWk3ZucjU9HPPC6e5kNZQkrPwUvdcRi31JGhh7wFQZPkZChktEDx2usnqyuVPLPDr9ZhnTw",
  "key17": "2yJToTXy3VtP5HFZUdsqwx63WkctJ6nHKEHWtWQ5rpUD62zyRJGK6DN3xSiwHKiZDTHwsBR3GCvX5nhgicy8ZjuN",
  "key18": "1quYRY4GwRUJTdfJAGHd546Ut8FoibKqG53TQrnWrsbDpotnsKHTABnk8StdxkBeybsDGzQXBrFMyDfeDEVKgXv",
  "key19": "2VvDsg85gGrWrAipdTk7bqTM74qXacaEiZm2WEMNb3BZKzfmQ5JmBnCUGSCWEF2KMLcWvpZZodKR4aiYy7SuKF2w",
  "key20": "2Mibi3tWpiFTzSjTMQTouswxGhuSCmMjx78BLfwsBx2jumKnSPN6WPkdCnvd2MT9vr9sQiodDxejQHm1i1WG75JZ",
  "key21": "3jPPSM2UGGixWJAFCo6Jt1asj4S9D3y9bHTzthv59Zy4s24B5MHsBhwioxqm2AJBAN5K5cBt6EHu4RupQ13caLME",
  "key22": "4g5Z5Te9MVuNNmW5tW83RUGuC49j5wegQ8mGsNAZ5zMHnNY3EFg8Fpvi9LFJ2jnrjtnPLVEPWXUmtj9nnL2MVuvr",
  "key23": "4MwWPVT4TNpaGmsTh7nV3oHbjTCjV3cKWtYPuu3KspQRMkLQ5fttMdUq7HsGhL27Rgp5QyvEj5uWdeiQzrGKjmw5",
  "key24": "3jiQc39xgU1jTsFXMS5Bj2CyrWpbnxWEiuBujEXsKCXAqKRoSsCZr4NMGmsk3yEM6JpCYAYsyRmDEfrqcZgJcKmp",
  "key25": "63xzKG4jgYsRpMWTJfdVva9QuZx9oH2PM6Xi1Cba5xtv5YC9X3bAeELjaqpeoUv4672XyDgqp8nyba6RfiKYaUUj",
  "key26": "48Lv85ybi8UHdgeihB23NAmH947MWsVyBs2GgqriGmVvo5xtFGBdGMX8LSqdUF7PiU7m6BwRz9yLVHKCwZ5MU4sJ",
  "key27": "VSYBqPNJH4j3UtFYKobKv1bWsMR74dKzBneGAtKFnHW7vcMJHQJbUAT9oEiDj82wzA83TUijUWERoRzS1FKAaAA",
  "key28": "3HHkEnSTbUVnDzhqF89zxxzTiPNHoZKVpeb1QBVUnt7tfpfRae9GDAfvpkviuqvZQWGwz9J6HdvGLLrEpNxdG3F",
  "key29": "4XeMwzp5PnuhNPEmchmAk1un2MLrZKbBSKvVD5BduzJFnmgjgFkMVsB5j6vnPd7S4PPujQfyNEBk5ZVSnWvBuXoy",
  "key30": "5icmCprgQjCymuseifgr5CigZVuKCQJodsgv1STdR3444KY7Q1ySq1suGgsgU5FPN4TtHvKNBzCCezEg3MCMWmUS",
  "key31": "2bzMmAXGrsZumtFg66udMRx76LJci47ZW6YThokCW6nX3tRBLk27J1vhiF1MWzWYK8j43mGYmxdsXD74nag7KENS",
  "key32": "2yHe87xH7dD7uRSmsbsYWUucfvpKePL8qd8wZS9cV5wEGZzFMWwPx4onUQ1cBK9ALBfwm6512FtpAyeKJXKQXVBk",
  "key33": "2ax2WfVmpXPYdhRSJrcLeuB8hLCeicBH7EverNTQzJLVF1FGahxrA1bweFvLSKaJYkutAsexkrMw2rVhPXSoM3qB",
  "key34": "5zxhPUYYx6fXpBm5UWNegitEn2pWf3fePLeaZ3nX9H3xoBJiZrbQEk8bdZDKj2wS6A6smu7QJY1tYh4wMx4ZKG96",
  "key35": "3dQwhuVU7LtkWy26C1rJEiFYh2VyRCcptS23nkDBcM98hjkiFXD5EeuVdpvQ9ev9pmLCB9r3nCdSFH8sCDETsFKo",
  "key36": "2nPTz3UctKJYPHyM3zch9Vvk2jhfe8njNZaiwewskx8zuWxbSK4gLioUdhXH3BD5CY8vkbZXWaZfvAwP8iYLvNaz",
  "key37": "4nWsMQY7yrXiByb5XVEPphKUWgxT9onf3J8t7yeQGwqNj74b869aAb8Hw7F9yfcoCFrgT8Qoy18nk7oV82dwnDVi",
  "key38": "t9WPEmu33m8pyaqxTnYCcyyYfgCKwh7gjDebstrG6EBqQ7mYtJb4mNrenHt56QvJ6u6svjYcErbDZA71L1ZehvN",
  "key39": "48jvp4L4hANDpM4AkRNcJ4Yq2sAKpvwzvcR5sHnhzeUuNEDFZMow9nwdbPMRY6o9vZtZVQD8D7PXqwtcY2z6GvBD",
  "key40": "5jPJQ5eK2xp4vfwJPjDvwxuSGe7VnBQMS1qgFXNDFfK64KkZnPHoA1zDAteMAouMbbMU5KM5ih9GP2jybNH5Fa6f",
  "key41": "6681i2bXW6PQmYC8yP9oNfVdCAkgite8cVeEwHwDohcTiMQZ5rcc5jqXN3QE1QNFerKkMUTjvcpKkv7W8zhScCT8"
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

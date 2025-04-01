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
    "NLm49Pbcvc2c5Wnnz1Rrm1vdrXLYAsTcUZ45LviJENsyYD34uSSrpqNVKG5s6gEjpVoppo5WusFCzNpsvFCj9yT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qa8AsxmGfww89CkGGV94z9LtmmGAHWuh2HTB8RFvZMjCfRmfWLD7Pv9yQCVLzuxiHr55GbSxFSvo3wGg2xwNDLE",
  "key1": "2ZJMzMmdpRarW6W1kpps1RLbtmfy8EEjDFKmQNjL4H3qChhtXEfSpGex6woUyNsjbLXHtiBqXzXbrp7UPg5M4Fyu",
  "key2": "3HbY5GHRyieky87DRa8pSWXk5qicHRafn4TpJZ6yqbcDYJhpuERsYNpAnFFLA9t8xQcsa2FMSJijBpkBawbqpwDB",
  "key3": "Wg8oV79AwD47xTB2EgNacdd1uTiVpBBTAB4iZF8Kg8BCzzb4uWZCkWXtJhLQhzQpXRv2W8sgeWVYdCjCKdaijtU",
  "key4": "5r4tnzBdvPVFTG2sDXwjAV29vcprvjFcLFRcMayLRhiFM5QkUVUjaBX19gfBPgicW3WU6xta7pDjBgDmceLpuR5X",
  "key5": "4CvnTyXXWqXgoXjDQcToN3FhCGMdiNMYTMFK6CpBtoeCqkVzAp42gDyxnyjNkLKNk9hVDzQHJVBNU2UndMv31Nmu",
  "key6": "5v2qj4BHmsWF2MAfrb3zFgpgKjA77Uee2T2UuwCtPxeCXvy3pLvJNArj39s64nWpR7AKYU3XhimXYTrnB3qgc4oG",
  "key7": "3AHg2o9ci2i4juNsLpan8gPyAqFvP1VUq7KPcYE4WLrhgrYLfVoahbmt3YrajpHmpddUBvLCdi6qw2e5inQoxWsS",
  "key8": "5xW9jxmZwzTpFrqg2JYeiZAQNsGvBk7aRvy7n8vaEBUiEZxiH7H2jjU3FMHZa8b1YNp9Dvob9CD9grpABZ6ro3np",
  "key9": "6WqM81X6Lf4Kx628KuXViZ6ir5j1Uj6YNE4m5sEE5PGBD1bHe2R9eX7Moyav1r2RLDqvKpRkUqnp6qEACh6yiBy",
  "key10": "3UGcrhhtrUbHTH7M47FMNFQvxTfq2XadMhbLtczWvtaABZD6uFkbNbLLuCt82ZwkaA2YfTRmodwyMgzWUQZSBvGd",
  "key11": "5PHqQkjn1arGznsr1ek7exMvUAUu3j6x6wDSiRFW4iUxcBLepuRRB9vPQ4Rb3eZPNi8fpDwQ7pgWuzm59LRTG6Kz",
  "key12": "5cTBVJWdnTyDFFBpdVh6abXxPZUqrxFmriX22gqu6iC9CqkHnsSabyXz8baYYpLmDwrHScMGqLsZDKFbzaQ54a6H",
  "key13": "61Tc7J67JEdeQ937BTHeaLtB6ZcVx9cnZ4DtStwTXsYzZM21Bt68DQnp4eb1PETzaSdLytFVoZmQRsUDcfAEmwCc",
  "key14": "4cPXn4FaqVf78is9MLFqC8vvf1qFQ2mVoTHjPpWCNG4rEwR3JvuM1cqHCvUD7iyxVk3kpXEfbD3EgJV8bbfLJsRR",
  "key15": "5KfxCywU5baLrXQZZyvN7ZKk5mEHygoD9Q7HkCau6n7grEkEwyP6LAMxu8WdGZUsqv9oNMTeCyrp5KcJBxqUTwUM",
  "key16": "3hqx2sKWhtf8RyYTkEwFB24iW11zULMxJMChKDHumQYFeyXzv7qY48fSbXF8c6XbFoRYUmFgv5t4S8uYZQjRoDrz",
  "key17": "pvs42cfj14iE9ifSZEuG9JhR6PhMf1oe8eoSpxZBER714zN8ZrVk6GDEheKbBmW1Gkeok9Lpz9nqdE8Kgi58LVN",
  "key18": "tEyeqULMTQjtroKsWcny9yfEQ14boUYoRMBh8nQ9wkD4eq49qgkvM2yK8danJv5xVj79pVaEsfkuXxoUNukwvBb",
  "key19": "m7eNTZDFCVNBHyCh6gFgWULiyoY35bKhuoppzQAwcfjyTTNfofYX9snR3r9viYHoAFTtksESoaDg32fnDNz3LcS",
  "key20": "5a1ah4Gn5GRJLVHSCqpwHRBF2bQ2TwiPqPAWHbwvby55G7vbMowzCLt3HJuYCMsXEnuemizDop8M9E6bmeF4ptnZ",
  "key21": "61qAp3cByX7idD3gMCK5cA6rCTs8XanmmaVXd78Md9PcTBeC2s4UETW7byKXt3LwR62ERbjb7uv47PKcaxorZmru",
  "key22": "4yQCr5bXk697nvPq7KXMgGywvGTZHcFYCZk44bxZHXptVuha4CKYv6pbay1B9GzAjRftTPq5Lhx934VxRxiiTnZf",
  "key23": "34RNMKRtHLJWuhK2MsRJdnCvEdWUZNZRAyXTsVBA8iYRQkJdmqwBhvb5c3L9MHt9Jq9xtzG92D86Cf6XPkWuhgh2",
  "key24": "MzBe73T1JP4KzALcr6yxLJkzEcSEAFpa8jB6mPqjWsMxgubeiYNfUhie7w41YAXChVtt1WfGLBuMcJ1HxU9u3TR",
  "key25": "h7GuVKz9rv68KwDcczqw5P9pGXsrGMwme8yhxQ6PZ7bLN2U4ePbk7HM4Jg8LpqvyJJyMb5BJEbCwWpamZU478js",
  "key26": "mVEWue9QwfJx2YVnbzHokrnPBSxDWoPemA8LePhQeBxiQcH92FzBWp7548KrT6fTFvv3Ns7wMrEDEjwVDawcdzB",
  "key27": "2udwC5BCyKBy9XmXcsKtzwtcHpZa3n9kYdgUrKBNVkg1h5Rp935u8yYrUDTiFuwT1MYac7mfRfxaqHAtjrQrYUeY",
  "key28": "4Gjx73zsVQXXAtqt6A3562UHTvA9nprbA1LJiGXrThPpi3ugoF4YMuG2ECHbBt2onTV3K5GG8dR835GL4D5m7AVo",
  "key29": "4GvFkACnB2aj5f9gEbAwhR9pBgngDbrY8L78yTijP33uHjLxeK4MajUstUsd82kfiLXERHSEgoJn8nGAAT5kG5pc",
  "key30": "2dMrX3NC7wiQPBSYuW9tFjVgPb7MBjVWt2dLvjBVsfELmrscy16GrMteYTEwCDNzaBZzkz13Q1jK21X6Q7Qqqf1P",
  "key31": "3ZXn3h9T9h2vXs4HqhNL66295WbHr65p8Fji3bvHcvDqnsuaYm75hNSXcUZxfieJe7rt1gCvgaK7QXMUccQPV7Pu",
  "key32": "5vC7fubiFGhxYMeQ2DB6MmrJJCiJ6X5BqYQssknn8RzeYW2CkxGUUj5Ck2ZTJYNjAovnfXLEoRaACLuuH1SYuTSM",
  "key33": "4kDheeEacKktLQ8jWk4JRrkh5gUsUuaWJeabEqpeRWD2XuuVG8n27QXSnqMWizxXeRkyTjpNqhQ2kUq57MZ2ei9m",
  "key34": "J8xLh9BQNQLSLfko7nGfCaR6BnPGb4SDofAGdDGUdiD35UsTXW7NEQsh8Ri6GwQ2oV7ThzmxGbChjT386FvN5CL",
  "key35": "2jwiFpGzmVJRG6h64mDaHmJZcjFC1jnV8CPs3HEa5uzJnWUoq4baHgSZp2FgUtuNUUo3m73siX1VKqp3uAdHra3M",
  "key36": "dJggS4vMF3ATfFqT7NXjSgjvP7iNRALL2mkTjAXP3Df4S7yiAaNSjX6cU9u2jSYTGhdDF3JDkKJaVMEHBqmj2ci",
  "key37": "3ZcsCDLr2Ng7WwH5TqiV6srbiXim3ZxoTiLQNeYiCHbbTfkSaFbHm6poBb9ptr6TrtGTkvUuHWHeYXy6nbp7Vh36",
  "key38": "B8Fq1wUsqoPrKjkYe9WfXHGVkD4Gri54zmdGaxhoW5DbP8PGy41cRbHtGFQyh4PKUgoZoExHw84HhUpJjodDsKW",
  "key39": "uNuveTSHNwTcDpRoiVGC4zPKzTn5uM584fnKrkZZMaNZZ7bqukBhvcEVZC83fjraRgjuRhSfj2nQeBg5RkrpPNs",
  "key40": "4m7zB2vBe6HPuPBZRq1buo8iu2eS57PK83Uvc7bPqfA7e9z5uaXGZn6jNx3EjKCATmiUQK1PHKjBZkehod3NdTqj",
  "key41": "fFv8hmy5XNHQd3ftK6p4C3msw3sHvxuKeAvswLyLqY85teRy2CFPUypeo3i5GNZy2Yhtqj3XhU1BMyKeccu7YDL"
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

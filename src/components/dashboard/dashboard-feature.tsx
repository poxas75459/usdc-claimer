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
    "wNE9JMFATf28gV6jsc3T9sQ9Lpt1QBrKP7kxBEXeVyQ57RsGaS3YeWU9Pk1wpb5gxuoWE7JMcW5Ndb8bUfJnNaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7n2pAyHH758VWyXt24F7ycYJqtqzXHwNrMpcAv5TWHb9gvcm9dbPz7qB4FxXJdAeqcYVfcmdhaDz8BoTohjuBF",
  "key1": "2B79z1Xd8KyXARgwnoQod5EWwiXNY1uWbKWh7eEBnAUmcoXzcUXmZTEBxiBxjZtxpxnVPun8YBEfEaxQ9RVkKh2x",
  "key2": "jEAJwgphuv7ugXH5GGmgPeeHUmRby29iRCmwfGP3M5iCQCdCRmsJBjoY1Fro6RDJz17E15wSPKm4ELwi85n3ffh",
  "key3": "3r2neATDjB9KAWhPu6zFnwfnDYzcqk39MBSCmadSCaMCzPdXupsmbZu3xsdCAH1xWfcsSD5GeC273PSrXP2TX4GW",
  "key4": "3XSQA8ZVxtnS6pjqcjhFepw83KtGNUaHbmsrYhRDtm3du6S6oe3ezZJBZYbeMRdT4WzL1LsyGjc5KALJKT7kwax3",
  "key5": "R4LB9Hj6DW7TY5UaZLArpd9MggajKtc6KXBoLCeuDXC61C6hjHnmn8kZAcEGja33PUn4AyjKFRbUhy5FHAVs7yT",
  "key6": "u1a7jDVG8AjEwxf3mprYJv8mkMBKJEPfcfdvWooRdJYqZR4Ekec9szx58djQcoCiPGn4N8s5irSJNoEZZaTdzqg",
  "key7": "5TRhmv4mRcNYjV8TCsuSSGvwCmgATeJC78L92fAYMrnqBknok9FqDGpveoMptWMYvYxhTv8SV1DmGJxSJcJRdpeo",
  "key8": "3kH8z5qZ2wScjjSNmJsmXXr4eCu3si2PZqrrwemZvZM7pNkcY1kPtDmkKY6bdt1XhtHwTcNRYJXzzbRYZqgVHPCb",
  "key9": "3BvUtLtFCQwRqjkxFbRCzrk2DFmMjm8csDgAVXFJKRiG2ktsT7366XbxdWLkszf7edkv5gsKnmbxBc5WnkpaLqgr",
  "key10": "FFWVrAXbtDtqKXtfZJSij7AK4EHCpTHAQTjoFLTTJoXYUMqfgKmF91ggVtv7AyH1F8efK5nmFAKZAdDnBTvnyEz",
  "key11": "3aejMHY4iveW6PLjUD6JyRWvpRsZ7nJXGCbuSrvnBUgrMgRiFTpptEsHuzmmT8g8GLDH2PDfUaEkWb9CYBg4pghw",
  "key12": "5Q6Vdt3SMcVdh2q7mmT9JpLGF3fqvu16F2XwEGsV3kMg2WPxksY7Y3WZzm1e2wnvs4NDVZxcVYmLRVu71N1dKVpV",
  "key13": "2prDZ2V3sJMtT8Jn2etX5JSjqEfzWFFH8B1AuS1MVdh87Jd5HtWFYsguhfQzCYKX7wtab3Q7DEUWftp6JUqwwNHp",
  "key14": "ETcE14hVsikX73zcpLQ4uTSG6BCr19xfQbhcu2JW2mqZwoPURBW4iYgfuUzZn8BqS1UiVKxDK7t9A77CMMHmGmK",
  "key15": "3jfACDsQVdSVsa1aQpLx1w5FqB57BF9kifvo6y3mVMMiNcLvM3tC8t21ap7CL71aPskh9JhsMHWWth1NbGgnMySp",
  "key16": "2u5K45jSgtB14vfevaNfMFRYmCY3t9BsxfWnHE39p8gDad9LMgwBTMSw2zX81GKJPyHzP8JndoaoBTXnfp5NBqHh",
  "key17": "51W1jsXAj1KwZiYBsjLzp1FpFnChCzSiEXnsFJ7o3vBMSjgiSfZ2oWiynHgUtxgbPTTw4xX17cWLGrEwaTumzC2e",
  "key18": "3yxBaVESbZz6p4VFXjKkE2xpZrvQA3C8s2YcBbfjYppfvvPykfPoF8fXtFi89AFKf8rHqy8vNKtxPCGBJpPspV1q",
  "key19": "32GgRt3afFyU97wn3NWCiiGTEcbHnhHidZtwSLzgBZqLhz7oUMcyf8N6rpam9LVnMfFX1fFMiVMkaRxU6YGVLNpB",
  "key20": "5cChZuaghp6K7pYTG5aEH38UBpsaHxuMv92jBXGSb9BrYMaRmUGXtgECBepdNCDAkA6s1ipdr4hmex7XDytrVjNv",
  "key21": "3UJsSFRaGX15vwdppEWZeL4DowSbaNoVUQHZv5sRaaH8qUVWmqSzKWQwjs98fPUFqpYsggVbMSAPuLZ1cvQz8hLb",
  "key22": "4s41zN4LaqPgdNY4ZRBvpu6xJJXkGE6iesgzmuQ7ngNXQA74T7jstjd3vJYCq9mA9c5QdWTULM8Lqe1jPUwfBbcN",
  "key23": "2UgZPz5XDGNTxEEhTKHAFPf94Z1fYCzzPKuJexPREKq3PkmABo4niXutFLpEoF6uq1F5t5AiSrif1pUtAFeKXQwL",
  "key24": "3DKT3RV7oXtT5XLoh5Vd721igXYFVFcC144E5cnTwaJ6b21pEtGyG46YbLi4DUmFWPAmCDdVX7HFfDww5txBT2Dx",
  "key25": "26Ev6Uk5Pj2haCYjLbAS31uVpLL5G9R1z6ftwwDCVKupc3PctQG9tALyJZ3XXwtg1pRSMUs3yw3nGu4x95AJTNFH",
  "key26": "5VQ2NciDLUN2dMWeSGqPhj6h7iyp8Uk7igdfM1ywoccq3uZFwcUgkcB4dUgqbsBex4GRxsWfqN129dJiADuaqRRt",
  "key27": "2on419L1GNATfmCwQMUtTeLTYfxpBisQaFu7bNfzSWJNGRsYz9b9KJVypXWDqJDw2HLaUCczCQweL4iUk23mq4gc",
  "key28": "2S6sb7GBxMh71ycrfFWJSxh6HVCEFjk9mnz9kmwyxeGsiZTKkbgDRWSAQSxak8TtSgdu21wwUYU6LJg2G4Seyya",
  "key29": "22XYZTTUD5nYZc3Hc2kAZ5CBeE9gWSdkFdupgAiJyxKBU1i2GZd4QdeowbsGRwunqxxGrRhTeKR5mxipdAzhgswB",
  "key30": "4qJbu6QuqTuZ81geEoJPYQjKbwqJBqXhGxNMFz5ah1icFnvmonkAhZAsP4u22dqv2yN3npow2Y8YZK7ycTk3WxJ2",
  "key31": "42ACfFkssD1tG1b45uADBQQQVS2MBGbtfDyRUmhUziLk2JTb6vBiNX7EFXQ9nnm9LuQK7rqKYbM8RmtLuXVdSdtT",
  "key32": "4gLVPA1xnhqVzAPsd2QuNbcbcEaU4Rgcteqwf1gswWpLc5yDCiUDNsdviucfx299756VTQ5Wej99xvmwsJ9tzu4p",
  "key33": "5R8Ht74iVnDsnLkLVrxJozeA5LFmt8wNQeEy4sUAeWr2WX2p4sTYBkcVZ3SWwNe1hGoQNHG4uhdUw5LFpBca5S1F",
  "key34": "4bbYG1NCg8H6HJBbYGu6Z5repysUMtpz8QpcjbXHNENaoFBMb7Y3XRUFEKtz9kiQPTm4V4sztRtAy5EWVvwBLSRq",
  "key35": "5ZqdDZFuQ2GuHHmhj7X96T5xLdRqMnUBDZHNnSjHhpmUW9xorVEThZA1od2qeHUWfbgh3whxtqZX3m36irCfus7i",
  "key36": "5rifYeQs5K9Da94PwWgYK3KZhnyiuqUz5DvvzAkpfLbyHoyfWMoGYawK7NYyd3uEQJSUaRtBT9m7eE3qwQXgqPqv",
  "key37": "5C5xVnvLm3nr6CqQVVQKaPUV6tCM4XahdppxVaiyzMiXpoE5ZvfaZctHupQykKKAthLoTjvz7EKtSzhULba6QckH",
  "key38": "2Zi9UDYbCkpZDLwafWZjjDKgR81LQjpYzTVr2frh1dcgqXqojgifED9VfwjpbPeTFQ6NcTUQk6FLkuP8VjEgWepJ",
  "key39": "2pypw2brHMVsnNEQKfbY32Jp37AHLhuiZicm5ynaLCMh58pobqwt65ZEisbLK1z9nrG9vAmwLwnmBLeFV8PSZAdX",
  "key40": "23WzacZWHtbPAJig3pAbPef6P5mFe69frePpdQLCU1UDfzfBz9WNCEZa1ca9cQgb23ADsX8ePctmiFc4wFNGSeob",
  "key41": "28pcJPJJe5oqP8wnyMxgmbbaPkJ28sHfhUuYh8UiUobQyfiDY8V5sxxmjcK25AQSsa6M2TKhZHGPUp4pNZSJdvVo",
  "key42": "5uu79cp3EjLSD91hcCcYeT9EmZ1h9EFpy9gBLRW8nkmscqMEyjCP6hhDJjdixncCX2C44FybQhUaAyMxPZz1krzA",
  "key43": "WNcn1TmSy7wCMmoCSa3cTotya8XWU8XuQmMSTCMUp9zaE81DgWVozuoohLU8corD7LSHX1wZXEAu6yB6ycEwENe",
  "key44": "33tcF5AZbS6EusHrggLZ2kYysXzsPe31jKVNcesGMgqsah4oLAJhEzTfsT8Upj4RhUZf3Vt1B92D1Hhf3nphRD4r",
  "key45": "4GuUic2Qsokf8PHzPpZDnDj4wJBnhawPfxncHFekWYrWjaiXbgS8k4cfurdUoFAyLwFgPgq1MHZMsLaxsSmXZtvL",
  "key46": "5iNX5KGZYaZPesVq8BXUqZogbqFSwyw9fgZv7BSYJJ5WNnGar754cMRptDV3b9rA2k5usb8aG85ekupE3h5YdEX",
  "key47": "dBx5mraha7y6hyXANuYSh4qkatJL732E6JdHVso2PBUq7Se3RPMRGZyLGJQVAetmGdqRYn75m5phcvsbyG8Ahra",
  "key48": "4bcMpnxFumD98em9A4djGmWetExgQZAxPUfW3LdpSKAhLzfCKgUsTDcgKz8sa15u4GTPvy1DALzzFywJCXoXqK6R"
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

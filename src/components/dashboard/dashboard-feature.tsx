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
    "2zcXXuucN71aLF4hME7eXhv3R3NaPAdTknYppT8gKomQrmz6Txhif9cPnG3u1xqBrUierri9ehQsHati788YHdbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xmReUSpAouUjH3dDNhBW5dLzsuMw6MiBtPGCi2VsqWeQ4aAjcRfcDd5TF9VYEahQBebQozN2tjYwV2UBibdoT9w",
  "key1": "4kkSYKJ3H5U8jNy5tx4xN7GxDbZGqFsi1BnBjgrbqKRFH63u8jWe9KMXmymNqYc6aMpSkxHWSLgNEUuwE3bJVABX",
  "key2": "3Jw38oMAxGgQboER8jWeD8W5We5N7ecANWVqn98fskevUB4HrAbH8BtoBtmB36YVn6ybBZcj32MVJD8RkWF8AwUe",
  "key3": "2TqNNnb3EwxVshWh6b8T4F5LVC2ZsUFRg9fa5q5BdSiesMaUcKRWXX6dao7BBExyaHSikvkWeCWX5j8qThsZfeTZ",
  "key4": "iHmTr3sczxLYVzTELcqpSP3Z4ZdMqprEutX9iPcYApWGAue4JfE4f2EM5Q1g9E6qiJTQhWSnveGjyEswdzG5LF2",
  "key5": "2Fewdfd64faerugdY5MH18vKeDsSFJE555kE2pQDut1yEruGPi5LNacdGEU94x81QaSeXi3wXUwJpmCJ9UdwK8u2",
  "key6": "3DBUue3gDZV2gBvxPmrvfdwitTYyz6wdnLMKw7TMW1CVdMQzpiT1NFLDHtkNZozZy5cDyEQuhqjaMsYGSVmnnCbX",
  "key7": "2BdvTFurpYZfeZhXxUrtVRKfeuXCC4pR775StjfSyb6muNcwPWNKwoi9HDDuXWbZimcbicExfxwmP2bSMEs5s8ju",
  "key8": "5CU7226pR9qUDreMgyyo1AxAVmeDGx4jvUsmkRdTcpKMsRAyf453Nskk4abVowUyRHQANd9kf8jfhuZZbAofxMYv",
  "key9": "35xuiQDZyfcTKec3d8WL5LeEDmoigvchM1YhN76syuShw95Ppuy8reB2TZzn5p3sfX5fHK1v1MkkbNrpKXUtwm4n",
  "key10": "7WYtMHFT2m9WizLgwxLwFa1kv7rhCoTkP7puPiJQhbhNtMZvxAxt1vdzTRsWQdsSZcyHfqAtbJjoeQU6o4g7Vze",
  "key11": "5w4tFb5gde8He5G5JeG6KhR3UYtyAgYTytfmnWHKwiyoeiLdqvHPhdaSjTjDzRqWUHEC8xpHBVMksve6BgfyGBt",
  "key12": "V9aaH2Dcmvvbtp7iPdsR5XhwpQfowXEbW6ihjmPYhgaXRbHZD9eTj7Z2qnyPmTDAY6FpCZJREaZnfAHNbtrwm3b",
  "key13": "4r6FANpEmacMTRiANEDPVjGUjh58qKv3a2JJpsh33s1Gvn1nnRRwSbYNJvNR9WXjjNtRV5RcSeKo6GGfsew7kkPp",
  "key14": "4gB3RusBznwdNDpNsAvoGoeD7trtDspzKrpS1824Eyr3mD1p15iT1pSB4Y1CyM98pRXiPes4B5WzHbuekTmRgDaQ",
  "key15": "2nKYKdmKVsr7acnUUMZHn9zPphJymHBPNnbJK1hF4RvuqjB1SuXs4xmtAvuf64zXga5fzstqeFhWZPLwd7DYQ2Co",
  "key16": "43Z2oTGoX9HpDFsZ79vjzEqPVHbF2TEc58PPXPAhjxg6JBrwH6LqzpD4obujMsRMfzZ2iHyqRzERyNJqzQ1qggtt",
  "key17": "5JJxWhV6rGtS34BL9tvme7gqwdkaPxigKp5wwczm68hUYLPwNreHniY1cNiWFD1uNUbM2EVPThFpzHhUFwBFUse7",
  "key18": "4yrDb2xgFpb7DjVmMsSc1ucsrstEnUhHEDFEVZi9LsWLXqmeSYBtFEonKFHshTMzyErhnxXbWiM1Y96aSCTb4NJV",
  "key19": "2LUmvfjAJpmyX9ZCDLrfSPSSKVkZ8JyoDSUwHgkb8AzEncBsDv3TP7NVSUP6nDuMzzX5QQ9k7PiFiCEqZX26sCu9",
  "key20": "2zfhindQgAxVA1GjyQQrLJyFvML2U22vyCf7WNN9HzsWKfs17VnydpGgRd871fTsrfiPHVis7zQLt6Ap2H9WeUu",
  "key21": "3ksawiy4V43a6WRPPWvKBhTbzA37rdnbbpwWHkp5FWVN9nT1QJVcG6sLjPLhdpfP497RcR43KSsTHDSUtbtxfDMb",
  "key22": "2nRz1HCkWryegTmCtoyYj6TvXVC2c3Eyvx3JuLwpXGHEEnxnMvKvy3MnaqcfAswskZ6wXMq1GwsrKJmw3J6cocT5",
  "key23": "wDWiaiF3nTHn11bLqZU8jUz96rPJvwaRgbrY2qa9LcyS2JwYfATkev9Qbewoew2rC2irfcksxihjsuTVHSVovcc",
  "key24": "3dLsaaDg9iU1MCTAkaNNChPxjAiM3waZNKnkjmMnNHovdKGMSNpNmPyUsgY6SfU26tK84MLkxNMj3stLfVGayyLg",
  "key25": "339L6Mgkusbeh4QUzWWAcrN2E6WqomLChq475awS11ys6LomtDpKQnqFiJ7fTBuWKEfK8aNP7hGzgVrGhNg655T1",
  "key26": "47uVaeWaadfernXqwdjFYcWyas67KaZgqAK7P4nMWTDFA3G2cKhLEXFBfxCREFnfdBvoWQFwdPhjSuRNMAV36y48",
  "key27": "58SoKqydHC4j8R96Z3dPzSsfU7iXX8m3B3uNj9hWjq2eZLjf6EmSh9aJY3G8MrAze8sHRz9PE4LcsvB2KuCPezCX",
  "key28": "5V4rCNNfVtXUwNfVXR5vccn85sVwUFoXAPJud8rmgMzd6usGYp8FjUaCHzifMxHCSHRkxj5LzFgTPhWAeujYquGo",
  "key29": "4QCUd7LhX9rse8bC5FfuFrTUCMhFZQGtKPcRs8YS19wqkgxEv86TWfMxLM3DyMTe1sF6hGqY63CXESpGkTcFmM4o",
  "key30": "5mDe8ev2zjkZpx2oeaiLUEQjbVA6r2vq72beh6gVp2rE7CXmgQ5Xfwcs4AhTER6eGuFRnnjrJdRNj2B4MPrPqsr1",
  "key31": "64AKWNRdrPveq4tajoCTRAZKWv2yz7tb2hopWue2qvf6FCoCZtdrPrvtXAyXZszxnwXgNbVS1d4GKCtbdWpS94tH",
  "key32": "4MLZYFTVYsKi7ns2VHguND5gkBTLohcGaM1dNyNMTT1fZTXKU4kJ7e3GsZDoCjKiLdAd7Horguf6g4qPrg8CAGxG",
  "key33": "394kzaif5m4dJKeZYzfCTVJyfvBt1nPuCZ5zNqrr1CqzE2nLTibYkfTtKK1sPVn7wpY89Y6f4BiCWDddgNpmymTF",
  "key34": "39aLdutpUPJ7QNh8f3L8DdgC9HeU1rxuxv1KgTDRi4Pa9ZVCLQU7DsCQCiNWv4paZRpDyjqFGndqNA8hPawadQea",
  "key35": "2jZPxkUjUgNTpHb4CJXuyjyKzgvzH8JcyhERgeVA5byRrQemn9bsAtxV5rgPuu6dzDyfaiTvUYyr1dCiaJhyMDdw",
  "key36": "2Gh3fw7a2XbcXEKCugedBtE8tU9CLHjCf93GXqQrnhMPrjJoVTqSpVAdhBjBg7akkrQFkd58pxLRPvH62xR6hawB",
  "key37": "5LsAp4c7JvZw2T4D7etVkEyQSitT4ueBJhtpagQHxnYrSnE1gLzQM9jTPJFu9hoS4BFdaXYvaxqWR8Vg56pZdYUt",
  "key38": "4Ww1UzYZMhxriH6Z69UBCDsFfYspLkCVQNbNJa8rwRe9taUSTTSngmByZgnAF84x2rWWUW8WPqxzjQ2CLKxuE1an",
  "key39": "362nSwcawS8sMTefUijJEQp1Gx8KWNEGwCZdyH7uza9KheonQmrtoWsKB9Q8GgRvr5Qj9aBJEqREZosbzrLJsWuf",
  "key40": "22dYHXdBBrnXnyCuEg44aMKBqjTFMv3Jvd8d4K49VbDyS87v8y2gzddn92ekJNjo1fBUv4LWcw3pK9ZgVp7f6aeL",
  "key41": "2MoL5dPoVa6uWsbmc8zFGBx1WRv2Hc6hW5znZNGRvaobSpP2y6pZKBcSNCy4c3rUn3Ee9GxumpBe6vEkh1bcCh5C",
  "key42": "kY8bNzDYgT4UnpHCyPQbsK7KnWdjiMY4QpWzAbXgyX1rUWMt61Kj6qzHSr2voNGzK8EfNEYc9nbt34eSDXU97sx",
  "key43": "4HWTRE2rrgZjH1gzN2SXAzAAqZt9SqzdySxKnVmf4r7HYYFSWzwTP1CiUFKaFjDqzKAdHW1ZSCCTG1eu79XDS3Lf"
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

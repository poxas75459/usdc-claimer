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
    "3TPj5XyeoAbMFTDCjcrnJ61J9dP2HRnT23Fmb9CDX1hq8cnDUpo54bN8hxoHT1PoJFp6VNtw4ure2tfvyxacueh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vy1JQhJMERxJur48arrAsRx7kmwGjfKtdo4cERmhgbHGzJSijZ1uyEk26dDYaw7j3KwaMjhUSDr28DCCxGpEUjh",
  "key1": "YyGPoYovoGqR2WYn11Y7oKa3p1X41B38cwUY9BStR9CTFfD2qabx9Tq7aPrn4ZebWMikYiWyhJV6QjyNuQWgWZi",
  "key2": "5SbkyYjDnedcM1DJxGAgRAhPcGJez3vbCRgZE1HBNGAdm92oqeUe9mVupE6F8WcQo6jNxqxTUog6AcFKSUcFEn6a",
  "key3": "5ToFpgXoTUE4zhgSd9fki8ypGpKSpsUQYTTNB4bbGVdBGePMkucruNpBrKcrWjmpwYE3yW3RfiSLDAu5uuvRAh45",
  "key4": "5m9tYfnW5yMkGBDcf9KLXQk5RhAHoBdkN1aWZLBfLifcwARgKeMZKbSd76CrGCeoy6TgAQL82juSz3cfTAcuFEn2",
  "key5": "417Z5NkokiBc342DraYYqm9SEzn6re4mxd2wKEQzwk41urGpPcdXwUhp83FTbQBYGXgDuKukX5B4v9HfFirsGsoP",
  "key6": "TZktafeS86NCEKwY4dUbDKCJewQ2Ck3uDcqjb6phQVrXCs3yBi6huX3iFCkLpS82yW9D1t9PjKmcyWaqVQySC71",
  "key7": "ki2yq4nUjkHdDNtFLpfkCBrbAqrmTrRtmnUjf3YshW5njduBTieVovoiBAk2yr1PuDA572y5UpJKfQnv2ZTZ3Li",
  "key8": "5NB6bQ5xedgjH7GcP5gJwE98whNVEtAhDeR2sWBtBtE5WULCpxd5xF6fBEDSxBdTAaeEXU83WdBvhiKGQvGUojkX",
  "key9": "3pUdQiqerKBgTCRkwBKQ8EBTL2wQnH94tAwmQm49UjANKV2ESLiQCBKXaVY7vW3BKrHAubkpipZ1tkhj3NiQwSXA",
  "key10": "vfkwqRQzVSJsWPH5WNsMS5cc5gGJSgshpsiaPRi3v3m91CHSDD1zzvV854MGQSUwUaHjVaoD5Z9j7Z2EQpCsJDW",
  "key11": "5nv1Xe9MxoyEuqkEVhG69Z3nkbTVtV3s4zRx1Pyj1ix9eovbhpKkAMYFWRko4dNu5jzvtWTAXLUmcr6qcjyom55T",
  "key12": "3VQAq6YwJhssN69xXDhuX7ETxHv9uriS2mM3QZbju84ady9nfUfRnado2vWJBcm2iM3vZ2fbeqNCrWouivgQEVRn",
  "key13": "4FxfzbjF3n7FFXiF8J8GpcAkU3kymthsj89L86MYyq1JhaE8vbEkNNuDU6NGVsqNc961b9TboZ9PnmYokDAxrzt2",
  "key14": "2xroRtJPWcaEFaQMd67pDmq5wafoU9XfrUqPdi8sjsvPU5Yux7jCsRTYFwKRcNr4fpU2hFcAixrddJoBxP461wce",
  "key15": "kQAc4k77f26c9As2SkrQj33Hc6gNmqqAeUQwyX5HkviM8toNpBLSGncnA7Zv9jxrH5FxgYNR9qUTWU4UYocz46G",
  "key16": "4qWJVBTRxBrkUiMYXAB2JwqbGaTaFAYXJ5S6Y5zAbirCLkRjFWMdJQiNqHoJCeb3YD8GJBavque2YdyLmGLCsS49",
  "key17": "61fZRkuK9S9uz5gSXGbdVJdyuibkGBfcj2WDM2GDyuofN5EBKE8hodvEE8YjE1TkZ9ijWCSGACjd69y78qTPDNcX",
  "key18": "7xye7q8XbynqhNSbGF4fQ2P27EdWyYAvaRYzjGnEMxChrin2CUYNH4cHdwuQ1caB94Qy1rohpBURKic2giDxkpN",
  "key19": "4S3AHWuwegMP4SnSnUCqxMqM12LVMrhaD94BXADfxrFfB9cnSgckzBqoKxe1C6hs3UaPokXSJhQ9XFHdbCcj9oQW",
  "key20": "2X14uhCdHLYszphUJ2tKNBtBdFpDR9DttwatcVMTF2EhggnpaHnK7QwHHxcg89XcKAqBBqs1t1WxKwRVxKKsxbox",
  "key21": "4usVtAU83CzNZsjc2puH2VAZqGeQttuZAFdsPpHPtWcjQPgMQbpoyyxjRgCfaW7EiPqGRnuk4ytDtXaWfkEbEdSP",
  "key22": "2EaCBwtUrvH45NvU7cfnnZ5xKTT1xKJZMrAfjS15YZ4A95U7okK74pbDJYgVjDg5SinGD5cRxwBcECv9AMAimcDD",
  "key23": "3XwBPvkmjLK8aaj3ZXTWA4GMJXm1KWTkarnqwNjqGh3M1kQ7NXhNKyFCFpneuttzEuNjwpSFajJy5w6YghbgerHY",
  "key24": "42dXjeTGfYd71qJSELecUH4vTzPCJB2HG5ZJe988TNSsNy8RfjX1LUTPPJtr4eKd3udsRQPZaGeh1PECx6fLZDto",
  "key25": "5dkiiguBgauYkKfrq7vvpAPsjmENzLhZFT9NPd4H2FZUS61kx1dpcFRiN1jp6RGXNjckCCaHz1qTg9vVBVq728Mb",
  "key26": "618paqboexViJgMDRzYiXSe3KiCxHhmYCCyAQcSxVgVPxhhPJia7LgRgAWxG7dhPijBF8UgJ7ppa46NFajTnEX3y",
  "key27": "2cGJ3DU3AkigWKGDVNhf37mMWsGjpv6YY5bT6nTLbkZ9d9MwAuKoZi1GWYEcrVYVZYhWgCV18bk7puUhLZss259b",
  "key28": "sMuD4ypQzmpfgQGVitDv9Mhckq2MS7xfej4M7aQF5SCh11mSNxQM6yo1wxM6HMXq8Sd4UK9gARKBcx8XaraRtFy",
  "key29": "5UivHaPfPDZYZu1CoBmz5nKkjN2oTahzywQ279oM7xMwTCwhAL29cxDp7ueWJGDXyvPAWGrv1SGY9GvpMrv2rzs2",
  "key30": "5P4aZWgRK7nhdQ9k31VWaRYnSa9dRKMACMLzMjZBBJk4Nytjqus5KwRry5fEWkoZpeLNrza7b5PHcs1cmpM7mXk8",
  "key31": "3As22EgrfHnWtRtiPnPf21v3WRV5JDfb5Ydnpkabq5vVXVXofXhqqB1VAS4YKRy1HCFNBhwWJUbQEqLqZYHQ1QZn",
  "key32": "2DZDYnnt4PScyEMi42Sv2mba5Gf1VuCTht5pr6m5VsPQ7Frf2xLNQd3tX8EdVa8RQ8EVUPej9By1zGmDYiqh35oc",
  "key33": "2YAtuS3FwrZpYZ8icqufCxgmULLyg3dxrmgx3aqkt7Sn2BJ5VGuaYpfe6ADaz54TtJnhtCb2iaFLdA15ayXGanPf",
  "key34": "8bRGZ2KHHUNF2MqdpH74Pr7rPMXCvXMqLQfDrzSVYYe3zWpPUHSCUkLaa6W2AynkeU54PJPt7Gtsqxpz7DTSHY6",
  "key35": "4WEBHkRGAe2andqBFpFUwg2JZ9BKvYG7wZhn3QHfiipJUofkJ5amD5M5fLC3bupsdF1cNJPYiZVzZDyevazx5PiV",
  "key36": "2X5GExT1besw5e5uWc5pDiu5YHuYuWqda6ARKcWGxSa8Z8dscaktBT6BimCLYRtTCFCkwHHPHuteVU3RstgaRudA",
  "key37": "2HRVFiyKYJ45Zj2oMqLUCMSjqZxka8tNpm52KdbTXFDCngwUHD7n875TTGAMB3xQdJGzNmtCe1SQKakw3UVn3enS",
  "key38": "2qWtv9wK9xGxozbtxVMkDgJ6dF7rxnbMfCCqpVswHGde2xTiMN4t1YvRE7jzEEtauyZS14iELt3CN43Jc8U9wtJU",
  "key39": "5Vk99JL8erZz5MPetKNqBpxGvdq93Z7vxmV3rwUuFgBvtGXym6whct1pmqfY6vbJbmcXxiKJJHJcTXKi9dm85Pyu",
  "key40": "433xAFYsorEJYbxrFAULw9qvDexJZbxa6RNDwnqc45NaSHL3BkmVBnzkKo1XCkGtP1seLjSKgvtE6z5AyxaNM8nk",
  "key41": "3Q8fq9R1wiwHAUeMeTuPPv8Vb3br5Uw1wtxiT5Jdzu5WvRveU5dhjDfPyZAPFB56i72T4b5WsCDoa2Gf6hKmUwpt",
  "key42": "31e9XM9xCvGKn7qyM8an7JzyY3NGApPVJtJcZT94h8RWisiyK7B1pPf18CdGt6fZgdTUB4sH2pLJvzsnJzi7j4JH",
  "key43": "3TFA93npKShfPTAJkVHJkFUGkLbG9e7pS84Ruonykvf8oCBN7jVk6wZvmVPxAnbBEGXd42H2fLbtVYpLuWunHLFh",
  "key44": "Nc6MQZxM12LHaXfLjton3kjRYy7Ci3XYUbwib3m6wFYLjqg4QU9rAaDvVafxyZ4DQu69Srh2iCJejS6vTgetw6p"
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

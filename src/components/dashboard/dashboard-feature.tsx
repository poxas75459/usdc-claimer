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
    "zjQt4Pyh2LTXRJMvAuysgqUCYosTA93zoYk2k261xCpAh1wnCcEDXdBghARk223wj7AQ8mu8UNTcMuqXNoZg7Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRwDJBm8hTyRsky4i4SiXtxFZCQZP2tPu189So2MX4Mo3UQTusSYacFnRckq1umD47x39TDCBetYmTakiv9eVC4",
  "key1": "5XbbWB7ZggxUQrdUc28x7LEMkCPJ4FtynsRgoPyQ7W9hTCcadLtiDrTBWH2cJpACRJTRGE2FrSK7Mc2o2QSaEcVQ",
  "key2": "4U9qwRoQDsS3UnRHwCeBp1DDyFEQ6uxm6mpQRpQNShNeQGhpkHhcYkEtKeY95vJ8hkvYMs28ayBTpD4Vx1nJ5iXy",
  "key3": "3rVNGPgz3ndAFrSZCEzT7gS2qPnvDwNgQhrsDCJvadZ1bRVDogvL1qhpo8yoKbEUxmhoZPrxcZVPJHfe3as1M1fH",
  "key4": "vvgoz8sNzCX33omquzAn8XQ1ns5QkhghxBRPAqrDEy4BibwEsScfb1Xpj22XHarGVfD8bA4iJ7HXTTJD2NvNNpn",
  "key5": "NQnfc2ogUrW2DzzuNbikh5KodgaBRU3nLZh41p54yo1k9F6siXzFHQErGxYiRedQt4b4z1N67MJ62EJB6jtJzLX",
  "key6": "7H85QJCRDtWaaTvG8zjwPwqtnJNaGe2d7tMoAnp15cSBqwfECfXXvvj3wx1TYzU5uuhPPFBEmK3cWfTfi6byHEL",
  "key7": "2eLGS38w1XinnEZnPWEBJ2FSNm2VUgvbcz19yfVGtZiDtSTPakYWasSVD6WssvniBDNSSWUFX1tDaRwR2LV4YAxp",
  "key8": "dL9A12Yk5jFPYJeArerWhouezZeetJZEGwxxYmMWvDic81djmenQqkJUsr6DbzEpSbHhaavmGuTrHqs1wVAtLRp",
  "key9": "2YsUXiCMZCWEq1MACjwcpTz3NTPSbW91skfFW1jaKeNpZ9AQrRghKZ43L1EpoJ6iv8LQ2N4pgob9BQx2pJWyRyct",
  "key10": "4saHpheLGwtrivLWp9MB2pMKkXhybkkfWMWakBGCjHRQzFfV9VGFUdQJioAhyNAsGVLYgVqFwrrRu9zDi6Wr1qgv",
  "key11": "26FptRAEmdenSQAA9URCqR5EN35RSaohVRzfeUMQ8qLpS39u8NFKXeurjx3JihG8YviPLnUoQXruNFQBbepZbSG3",
  "key12": "5q8xHwMQNy9UPXapU4TUMaXgBkBYYvUUXbLejfSPhiM6FJTkTWhXZbC6CJBG5T95PU8Rx3jNZnyKJZxjJVoaaNP5",
  "key13": "5sgTj4q3HL7udw1TbQAKB6aLkNGYgWP3o1ECePEJhUHVU9A5BDoxz4tGZ6D24ug6uKz9H6cwhuyenkVD3hs34PX5",
  "key14": "5cnZ5X3uv7dbZY4S9GCWEkPnEeZxzdsmsvMpnEvYg8MxD1Pa7ESfXw1CLySo1sq9ZwP2ncraWxX4RZQ6C2rbg8x1",
  "key15": "K7gNpinJmpUNHxrf9V4pUbv4BTM8CM983MqTtYDghtVUcC4Tk1S8dJWMDJgqJQr3kep85KpRyT1pqSx56iZKR27",
  "key16": "xVaXzEBdLvaXKkCKTrBP19aEfuGqXNovqDQBxwF3gptFcuHno6pzszd9pJw4W6Gtq5ctXRkiF1kY9Y4ydikKwXL",
  "key17": "3R6HyAuPXLkvrwUM8NDD2R8ptSAgQUBjnvsB8Z7w1TsA9AAxGpkAdfzmfL5Q2UutnFij9zwW6ucZca81YgiJJeti",
  "key18": "oEkUPu5ks3mhDVoQg7DTcRfcJAsPDNcEhgwfC3EpmLRLCFvgpfVJg91pbemc6CkUVWSrhThT7KqMrvaEmLhFX5B",
  "key19": "3cFhrf5enmgh7aXJMBChLsGyRx8WXUqj1TqwQ7bgPEqYwbzQRNjMFAoWD5MegRndogtG6gt6CNECvzVTEUVKK1d8",
  "key20": "4Q4vzMMJjyV8VW8FSXpYWi9pV9qEt2VpHAFZQ3dCG4ZKqnLFdndiAJ8DbcgN3AcURgtjAhKPEZzUjgSTiiBCf3qs",
  "key21": "4bEg4XLHw6C5Ph32hAcwgnUTKp4a5TRfFp9AmLSPG7oks8gLiWDfYjdbkRQi24hTNSAaLXmdVjCdNZnAW7C1Rzq2",
  "key22": "4ZfMWfLnELKNjyxe4J7XikHqQv9JbxzPGWKQk3RCFyxDYnUKpM2DDBoZcCe2q7cZAxkMUxMkRDhXGYb6PAVL5pdd",
  "key23": "5yb7hwbG4U5FAnXTzWtBPNNKMSq2LA4WKobVc4Qx9pqXcbapxvbHg3TNtAPeRWkskAjtm9i3hvty1c3odfVokd2Y",
  "key24": "4NDm9xRXRe9SFxbKEsxhHu79W3B4JBRhLdvLYpAmfje2WR2ghkmhZDaD4aw1EDDtV5Bm4n28fCRkuF3FyFLeHeXi",
  "key25": "2deWQ8RGtYcRB3Cc4Kw3nd8ZXqNnN4wXaYLh8mQEk1F1zbdMSFpsvb8ZT3adU1Do3Mtf8B3UuXuv8WZooppkbSFW",
  "key26": "487wxzZGy86RvbfMSbndqd8YTaUrpztFBSLryQhkh7aoS39dAmJg6pigWUN8cUYLYAK8EdoYRqnMk35U8yAGf6rh",
  "key27": "3H7Gpitjkvy2ChvzaXzPoVWKqkVjGiJUXLphAFsybSAzbbyYfMtH6NiTBzsj3jkqhd6CGzaJjAhSx2Ggg6tvZgNf",
  "key28": "5uRerKTbj9Ggz2vFLipkJtH7HzXjCogwK8aMpSv9femepb1NZVLjHsxXYqY1efxSVGvJqppRLBnDPmktx61xGEta",
  "key29": "4qPNz7Fz67tdPZiVGia2GADFw5jaZN2Tnc4E5KPof6QUTGQf7bZmzjsafAFbFrafygfvtkk5YSFb7c9jMYQyrpE4",
  "key30": "4hL8G6f1SyHfCx6zDBERVSNe4XrDjjnMr43Se162AWWKABeruf91NXDFMce6E8Ejzxu8ZHArkQG6VZJNyJSZMwfi",
  "key31": "5va4vH3jimJEkHmeYYimCY6bgTC67a3cQ6FQ7BjGg6L7qJcW52hUXXj1PL1VheN2dpqcRdZ1C98G7ta6LqNix8k4",
  "key32": "54xvfauuv6X3vM3qgL8k3HAQ1u96qedpRYRqpVzYpYteuzymD1DWiy81MobaMpuY1xbUHx84XP6kAUBfTRfwbDHX",
  "key33": "3Q4XrNvoadgtmJms9z8YX8ZUmgqv8CBim4CsGqLnqC8greVmQhkAJVSZHv3vkJqgfhpgWTpgJUzymgNCRiL8L2g8",
  "key34": "5H1eoZy7fisD1N2HGJ8CUPJD8YoHU4FLpoDpSh2UWXHaqvxHobKFqDYU3YsiEG8D7mr15t7UyvcsvHxRBMHF9pVL",
  "key35": "5mpK1ycu1q8fvYWhQAZihBCGYzPc5WkRrGiLBBheRVrPVgLw83YPEG75LyYjuuQa1sZonRhcpgo1FvKV9xR5mEtz",
  "key36": "4SWQUKVRBrNQ1BfXHf8AXJv8m7AhQDrPeTWgb7GFBGoiz4KngNFGDXYDNZDkqBmTvwjX5tPQxDrZ6EYWoxxmDZqn",
  "key37": "5bTfqaYzUUr4jY5LZZcveZthDYYzjUrBkaM5RE6ZgjYEKSsxtpHHuWrKfptHvL6GCwTGe61DuhcGmtUPGxT6gYra",
  "key38": "5JrrqexaMjf8s5EsaBBHrX74XPBTCUoR6Rtt5JgCqk7m3usMVha9gb5JRy7woC99acRBvFQYxcrYXSYxEgrhiQg7"
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

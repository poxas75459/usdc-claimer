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
    "39Ck9Y57wcjRvyU53bPgVReRpg1zyXgB1rZU3zG4GCQDZqugJ7WRL9iND63dUEJoySUQMnqE2D1RFjVghfyP9SRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KoKBV8nTCrTArpJb55Ha2kaNgAUKnisxA2oLHuHvRgEtcXZQYNDxkUPtzcdHcBgxJ6EhFGXomxzxruNd2ZJRFsr",
  "key1": "4hvcQHoejrCq7QPDekEn159N5QajLdvsjcpm6Zeu9caNnN7HKvu8Co8QgD3h8wzcSx2n8CexE7dz11MJMDM8BfHn",
  "key2": "HET4sLchAtXi5fQiAGVA1YaFH2f48cEUKtQuQ6u9h9kZerWaVzPx7YJeKnc2fFMs9Bqhw3nyJzAyNKRi7eA4Yii",
  "key3": "5xqNG1CNKqAb81433mScceMvDt98csHrLXXxJiUQURxnt9RxivQnFrU6HGhcYrmW2bgAVwp2AJSFpeoQwSiGHP4x",
  "key4": "2WmLQSZbBdViZgfYHtkQLHjZ1TK5uoQSbJ9denGCrg1wwVjv6x9CnMTE1sQ7CJsugq4d9b5CSqbKnEpnY3fJCkk5",
  "key5": "2LgKGN1CDKyKnrU36a2snbw3py2K6NcoTp2wpNG687k3gNEhyafDCbkfGRE8TDmtu8uDBApxRxnLBwEov3jhqT32",
  "key6": "2yi8zfzUdn9bF7V9or56H4V4SAWV3MpoFMevfswHw5Bn2ZpNvjJyzPqTW1Dka8nkgcKSmjswMhAzWpY1Zb9xXTC2",
  "key7": "3EjfbF7egigmDwQeMVwgezC6TrN8RTap6zkfAB4mopyT3qYMm8VxEnkVyX2XwwgGi8JvxWVY88RvuAXyXU6rGpFB",
  "key8": "5MFZHPgTR1K94eP6DoJhvhL8RavSsXkhcAJnVitraYBWdenE63uEzr9r9g2AnbFZXWwefNz2jBeeerztoj8ZX7vg",
  "key9": "TeieVtMJSY5P4362bffRppPSM4KZuEKPFk92M5y9yM42VjKHJb8xAXkwpb5C6FUyqBb6EyMzakdvqcnjuuoBGgA",
  "key10": "55wNdgA9D6L5v5sLg6BHui4EXVN5Cczo5dPkBAbMu7XiqAF3oeTqEFY3fjEgB7NAdCBYYniAh83u25yRD7YJvbre",
  "key11": "5TDDfkmLcp8X12TsDz8YRFdNsCa1aDUVcnbA92izaNzdYAExAUYfY1WxXNVy7BxjEdEd3aWQyxBgtNNkYgbrP3p1",
  "key12": "4xB3RBWheN344jvJEvxciPL6F5pmyU3qH6BWfoVZR144xcjbamEQHsF6VrGVTRW4kT2NoLGT8uThwbWXkLgQz3TH",
  "key13": "51ZbrcSzmVw1v5vuCcwZUUVzuPxQKihtqLxLHu8yY8dYgsR7KPqXF3WHjZ6t4sGwb3ggjt5pRiTKGb5BVrnLK4K9",
  "key14": "ZTyTc3qT6sMCzggkUQDSiZLvR9kttAmLuY9Yf9UuSgPfPurL8DvkNnkdf1ejYjX8tb4Lzng3bFACXZe7aZ8Bamr",
  "key15": "seQpaW8ozHHhT8V9MKwS6prVuA2aanqL3eESFqQXh9pKvrAmZEMGkRLkminjwiV7EZemuigqaARyFocACv2EEq4",
  "key16": "3DmJsG2ix4jbPVo2NwczHTdBdXyFW71tuZhA8RdmjXkGMgo1peu9ncCYV7DniG19bQQ5nA2HmawCKzR4ky5ejQYs",
  "key17": "3kYjmGpSjciCWHZbubF9hMrQPTdWtprqfY1mk45LRwxtxF3rCU34ViM1UrA9bDQLWB5UNEJmjTGD1Wf718FMbvby",
  "key18": "4Tsn4Su1N6oCpcvgFqCB8JNyjWDYwomHh3Ane6eJje4VMaZXUdT8zaEntGyE7wUCZKbfxXJCw8BcmfWec1GB24Ay",
  "key19": "3n1bCXYYRQXZsWgSpnyNPkDCaPEvMyQrahqxfh49cBWc6oXJtU4yqaKcVgskYxrsCojKYosRZrkM4rwwd68ex2kR",
  "key20": "zyvpkDdHdjCzM8bH83bu9unjK6dpYo5u5yDEjLHMw8TCTnGWVkHrKUdxQnBoTkQnpE7gm6oMxnr6xmCju9FBTwx",
  "key21": "2mphQ7GyPxrVrthC4QwEr9g3TFDeSxPF5jYr9qnSxXHoipt1amjc7A2zntJac1SEbo2DPd2958Lo3cKsFt4A1SbQ",
  "key22": "4QHjLhFA647SEpC6L3djcHga7npicZ5R1xJtgrk1yyagheZx1P1PBHPietBpnieJmmNth3YmvCUuuVF8T5hLiqnS",
  "key23": "4KLaiVV83m9EBwUuABs283zQ2NeSioiHrEN6XKv15VWwT1bxhN1gHfqmkCr45XXRkUxUhRXDXYvoYWyjiubNZwQr",
  "key24": "4UNtp4ski49b4j1SjyrQwjUNptYWiE4fdxHFFdjzxEDqw1EJqeAr7B2rEzrxxABNk9EDazx8ppT6nWbvRXKSu6FH",
  "key25": "3VYCd3qTWC9GXtBg9BX5o6PRt3Pv7PypjeQ6evgikhbuYsq8Qbmr2bdUvPNNUs25BJpczLDmCeVADKGMJNe3npfw",
  "key26": "39Gm7yY4yzspdSZN4srbkR24CJ3F4DTsD9roxSvbUPPLGeEbbf19DFYgk22CiuHpb3vVSt4HigkobPuoZg6JtpHb",
  "key27": "5dNA5ybM67KttscZfgAKFBSHXCnd7fy3xkSe6PDs9MjXQMGPAtpR7aCYHk4gbE3Rs2ZxL5fhhh37j9aM8xvPDWb9",
  "key28": "4gm2k9LfeMw4os7914TfwiRWQ5ypfamsJBx6fYsoM9ZV8cXD64sfmCETXzRH4nLJLnM7o6c4YcUKwVaTJQvqDfiW",
  "key29": "67dHuEh6dJHH1jZisWcKXdE4z2HeKGcgzZ86yk1mQdBFk4RNf4NCdsmszSKwaQF5d68Mtf4AUzTVWYcAq8R1jRYv",
  "key30": "659EFXwi9cdjjdm4NGj3mG1qKWpxffKZ9v4c9BaizNgQSCtSEMSeGBaNtGAvQqoZnMWrYyCPzEa8rraaX1mC5KxM",
  "key31": "4dXQif2KyanRLxUi2BRrgWbhEuExamzKHkWaFSibQ7cHdkj5RFLt9dLdt5QJ65ok6kvZFDUwZWsSeU8sWURrdeqz",
  "key32": "2kj2HMmtvojpYpWu6ZXjGwVc3SKWmiYBreThDHKjQjFVJSBpFqFpYj9BLwr2kk2JVAvZDE51NUJ8kEt4pk3SMAgG",
  "key33": "x6gdm6ZtraBgrtqGErromwu4CyfxYfEYTjLyyu6RVEWxXcKWaiJ17hdihTBT52qGUv8FXNkFviDBC4BHjjz8Sjv",
  "key34": "3pKLmBReAsqLW3cj7C8PR46TFdWiTtQ5uDQNsoHXA41vduNmWgcy27H2wxdyXZANcu4EBv5YdCsWMcSE7NCbeucL",
  "key35": "26b8cr589yPQ2cHnrmLg6Ks5JUmiPnDqDoX9LoyUaDU65JAM7tCAbcHM2R7WojAWZQuU3hUJm9bKdobtzmU61Kta",
  "key36": "2xnRmYnCfJo27CcdH396hFu2XjsiEkAdShJwzYiB87gMUvk6Fiyp2ZeoAuUpJE98qD366ZJdT2FVWMCVPBpMn63F",
  "key37": "5RJZeZne4ipr5c9qUzkLZ1grNeEq71hx9A1cYjmwzdvETJrZsHZ621XFZW4nZJNLwKwAWAubKcmdexmKBKbG3e8E",
  "key38": "4aqA322bqRHh2tWG9KJJ8LEFrbaMrDb4Wsbj8TYsgPg6r7Spd7CTmdK6WD18yJqwoyLxLcdLge51UfVxz4MnLazZ",
  "key39": "61pbnqRaKZNMmFgnNFsgEkYRF9UDotsU8Sa5STgnYErNew82iXmoEaCPQUgfE1ZsUV919Dvq9Z7v4WqsoqNn835p",
  "key40": "5ZMnt5JheNvHp5UoCMMQkAJAP7A8Rf47hgxLGELd2FjQqXT3ooPwJADMbwDmDckqzpKSGN8HjyZuxqgS45AHPHXk",
  "key41": "5T64b9KcPFicQM1WVjXKEDz5MGPgGy7yGWDiaRQh9Ppgja1HLiUJoN5WShZjVswmSfkPoqYvS9ogPcaAfbBkKQds",
  "key42": "29fpDM7vnJsvsVZ7uPmQ5a81YdLRtPx9hYPTN2oVa2oJid5weZ4aQnKJ7KjcT3ACtMPasNyAAySHCxW1wRoa7Kum",
  "key43": "ezgDdAuAcgAiQUeimrN8smRLbCj5KvXArFpqmXuWUoCtN6shnX3ipdkvxzRJNN6VW9CqZf5hiAiNoD5nLKrQuA6",
  "key44": "3LRzoAxn7ME8FGasSapVvKME6rCWSC5yLARMNYLFoRcKwbR4pN64KCJy7Qa2YTLazGVYnrAQ3aoFBqDmexCddKQF"
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

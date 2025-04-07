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
    "2Q8uSAHhSuZcDfAsb8cAbCi9ZjnACUufCokzKzpT6FTEiqQu4pybBNcyZLa7zntJE4HWHyz9oDpCoUMjQB3usXej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGnRa3y3Jkm3ufYd7xTCz6hwYcxoHVL3mRHe7ELrMfDQAT7pSmvym8bLuYv3UpMHGt6cAcryYfr57zceiAyzMos",
  "key1": "5YiHb8dQ5R8GzNypVuK8SbhfNRyoTrMmomYbRSEgJpDZGVu47jBbmtmH4UENahrXpxzVZ7Q2hMBoZKoGjhmgp7fr",
  "key2": "2qcgovYnqivz9no3JW4wMANMj2HtT1i3Tm2iViVzkRMvGEuVDcua6yEGC2QH3N1EMj5tayJ8H8rymgYRjkp4W9eL",
  "key3": "5H6JGBRH2c23B6vFrGuRXUrJDgFmRf5fkL2Z8X28V2gzCqXoBjWAypVWDtFaanDTEENiaXUPerKfdjLoV9MEGZYj",
  "key4": "eqQJu3XqcgoGph6i1STVrFuBUryCnhkkCurrqpyFgsSmBoB9mFsnPV68Mzej68CgrfTHLxrmLr4ju9kYfdRqtgZ",
  "key5": "3nNe7fn5WHgUFCMMELTYNupyhBj2TAN5bxcbFZHr8zkXQNpNpixADRqytmyXB2UTFgP9fzCMU87QuJWoj3cN2AKN",
  "key6": "3ryc3iAvep29LYE2ccss6RM1Npnys9rfNhsJYnSHQbcoUFjEGPVBztU3zHCTXqnJgLonPs1mmJ3QaGMR1aiBQvez",
  "key7": "2BAVAeN15F8TkgLMzVTPzKTsNoup4J9rKtN9pCwxZB8vQ5t2cynYPKxbNM9baiqVVFNm1FxLX3iEKhxos65cY1ra",
  "key8": "RLNs5MPzAwG6LLEarzPVA3e37qLchuynC4qr2xmvE69kc189x3aRT8MGHB8foyq4CFKGXuZdH3gf2zH715HeNau",
  "key9": "3fGzHRp1H2rKQtohzxYWiBG6A926nrCfXe7sGCS9z4jRnvU41mg7mvGr79kbqSmmfto4Wg5eLKpa3zU4HFoP4Gwu",
  "key10": "3HZzSuBgcgghZ7W1omF8nR642HnrwdRsAyuJTN1fg5VCmiZ1wFhoa6Pja3hxE4aQf998KVGtXSrpuxFtKvrJLHG8",
  "key11": "3iLJsTBpg7eNX2riKLtusStGJgPjy8Hn9i9VSBa7tW6hVMzHLwSVc2NP1Wn29sEi2TixVMLQLWeU9WBhWfxet5SY",
  "key12": "3Xj81RaEkAvuPRxUd737a5Sqc7F4d8FuZxirS7xbSXzQNtddm4bdreMFbRXXiHvwNW1KvFC4d5ug9tojXUpKXbeH",
  "key13": "2gJhjB8uEnY12NmkRXGEkmdqMxowuKXf7gn95nfnB8HBPr7f33WAwrLQyJfYauAs4JdoikpvGYAS31LiXpxaGXpx",
  "key14": "5P7Mda6rFnrwbNbH9PUMoouwni7TkNgspNzUyHgmKALWHJv79bDk69Znaw3JJt7JgonsqzkXzxbb23DNTneb5VGn",
  "key15": "n9mfuh9n1XyiQoNoHWffervDsKscmuG6gVdVYzCKsigAmQ3EypHgfab12uTEC4xFVhKko9E1PnmDEHBRR5Zzr1b",
  "key16": "4Lwb77Z48cW2Q976fzmgwvPkXS4hERZdBpGanGuu4L655qaDZ5BRzDeVZdMYBAJv16APT1bgd6g3EPRXQKhzmJKp",
  "key17": "2vzhMHSjYJ5wn5A4KpQZZRF1FqntR62f41hXjcBbBGpYqgrwRApoWugEsBnc9L6LUVV15k4b2Pwf6wd7p7hVVsP",
  "key18": "5tUuKKHrgw1FhmQxtLADPXzSXfsLzUGwAA1Px1Y5RcojU9C31R4KcnjbTbCPp7tPXu9fUuFynNw6aCpKukHSZWjV",
  "key19": "38FDuq8QR6mdHYHpRDPeigsmC159bhy2XF4xrdCWguPUdw8nRnRD74gZCSSJ82jbckj2jevqgq12ypyB85GUkdq7",
  "key20": "5D46Qv9pivrnpGynK2TUgSoD9pPnGrABEFPq7dKus5uzCXuG2LzgjxaemnYwpv1NdDuHZjcBedoNgpg2WysuDAP6",
  "key21": "3dbZsUe9d32xwU415GJL1uokQUepjpbqq7Kv2zZVhpXQfDyKC37nnQJdtpYfECgyru4Y1Em5W3DQRgoKHzTGcUZc",
  "key22": "4MbNffMU8v2yscxYnbQUGhdh37HdpC8kzZRqzjcbrWpyLio9RuePAkggUU2fbvNZCzYuurioS1t6i734yrqZUmFo",
  "key23": "5z1WgT4DdEHthPuN12TkDAKzTC8sRUtiRn8A9CAgKzaNWAqL86tYqT9tEnezfc9YrJAAgRcNG2hjG6Hsh17yBxCs",
  "key24": "2wq6YezWf3e85MLgZAt7gfjQ3cZ4ntE9rWgH7K2oA47WvRfXJQ4eiEe5un63oMxHsLMNrtJS87zWNjGtkFqBxztg",
  "key25": "5EAK529TLnivPyNEskWwcvVhNrEgoL5BR7cwL41Aph7rY3VQUtNjdRDEqQP7nFjtknTkbhB7Wh1KqMmMChoAYtS6",
  "key26": "5kMksULiG1KzT49pU8Q3umJHdp6fwR2zNvy1TSNLJVXKJpB1CZiVKQUG6r3jBhcVL6Pi8Xy3uApyJtLBEG6BFxBs",
  "key27": "Uh6tbRMYa1WsesTgcZTxcXVZhwJPYVjD78jsfttTAjQvcR2MB4w8thwC3mySYW3ZPWqPXA12dStr8d9x8i4F8SZ",
  "key28": "4tpfotbfXnZmL4GNi774AKUGE7cYG7uDpr7Z3mGM6ZJbs1FeEx5gafoKCCGekwZH4zWedqAMwjFWwgDEkWc7tyza",
  "key29": "37Jj97AKrNtTWQ9h194DWTH3gfJspRHvL4uzPizZQ7WDN7jicfGogAKQEcoiFxWCmYEX5UkXaiVHYe8J9muHv6dZ",
  "key30": "QWWn1T9PUqhkcfT2b1yKLjPRjaUipMawAkmYP4CqQ7xq6E7WSP9yciyfdLTw3dbrUmnQ88cHv2absAJV9UDM34K",
  "key31": "2nytDEAfd93zYs9JU9zKeyjKAtoLP6fooiBYT2C7MhLeGMiUM7p2DohWrEGmsaXLcR8qKFetKmpk6Ji5jNqscNfG",
  "key32": "5UUrPgFxx1evynAfpVq9T4b9cA1oHWAjYZruwgvNK8zau4EJ6AFKF6n695aK4fdXzwr6oP4p3Z9iuH18MTbEYbY",
  "key33": "2EQEgXvbBhRELKFdKeK1Zg7nJ1fDHn2QmtiHVzBRErTgFPTdHrY71qscsyeBQL4Em95BS8KDVZPVzanCiPA9EDhD"
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

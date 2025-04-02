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
    "5eTeuacVfKV1Gzh1sUXwWaLWDcpmao7pZEye67epU4oXVHvk6GZ7967Qx5VzLCSurmgTr5odE3iX1zGZ1iVzvaYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNo67d9roBSbz1ZHPhXujfmj97YpmfLRXGRBqYXCRKd8bb8vQWLnP3q1W1hMoGr4nCzuPVitU7oraJ3AexiWUy5",
  "key1": "6YQLMLSCM9N5NhwvcRUHQTuPk5HhUNW3Wj4HinTtR3WppFshgMyXrVJ8ErgD1bXeRot48mSKnbmvQvEoqHTtWse",
  "key2": "3YefZMTQCbdQUfXnfM1jfG3D1EaTKAt4ExbnvQuxBiSvN1LMbccmMmaXrRQD8wPmFty7vjhUeL458a87MEj9wXLT",
  "key3": "3pcnMFDWhzfaSpgktT7QJgVy9zQqoG2LZn7CA5Z8tpKU7nodcmWhnGQNCcNgoZfTr5DFrFk1j8r36to3DuCmXidx",
  "key4": "3J1War4j59p3YiB2bDK23wyHVspUDvzx4HgGrxuFsYyAfmu7DRco2rGyyupxdoaKE6YGVxvFJGVJw3R1mAhK4JDG",
  "key5": "5gxBymbJNMmxsD75mrc94xJwPm19yRiGFqZJTDYJrce4dup6VqhMv25ubaxpeKKGMo9V8BM5UaNFEEw8Lj2gwVEj",
  "key6": "3ojmd2ygnEgZkZJJjyGgcbzcLEjLMA4ya696stoCMGLghDVLeqxoT9dVUBGNyoLV8UG8xoozM9HtmRedBYihcdtU",
  "key7": "szxs69rRf9zVR8RPe8P6P3CQ9mTANnY9YFjyWBTu2znR4pN6GarAGbY7nEf48fXrKXpvdVgHmy1F5edJTjfZpYg",
  "key8": "nj3wZ6dzCCU7XfjBh43cysd4wvEgbS1fU2DE3aRKuagig1wLXnGLc7DjkPXA9WUSRnG4hRJsxBUAK9gtGcCDJzY",
  "key9": "662CbEu5ebTaEQtkpfDf5t4d66Evhmt9oHnzAFDeX5xNbrfhi8MrF2WaejPPcA4jqK4wQtV67B8dmDLDcanC23wo",
  "key10": "2NW5BCRuMfroBvA5KNjuCaxtfjtRqrrkT443a2nK5fno3GzDyb69tEv7otdd58ghdXFUV7kS2moo554hqHs1Zzds",
  "key11": "5wmK5v7vAFefJZ6wtRjgtQXRD4RQJCoXENCmsv5EpbSTaKaHBQg5EK8v8SKbe25VuqiFMy35MCh5G5LNDgUM2L6N",
  "key12": "5SRpRFMNF3zgq4MUxneNanvp6GreyqiRJrmoMWnnMeyCks12pozefG1ztZVVmUdSwZPsdjYRhMMPrhZHJockT24q",
  "key13": "2VW9HT8F18YL8cfvdgbvSFnGVp5XCj54o897v1LeREbNeV6sMMsP3wsmRowSCBeeC8rUsG91rphqesrmSN9kEv3W",
  "key14": "3ynnpv5xFiWFic8tenrR1cvCZpiz1jZtYe1AXXQk5SfhTEPSsP9SX8QkdXpV61mc4fXunZTRDkJfh1PKa2MX4Wb3",
  "key15": "n2qmyfDkW1Jj2X2RoH78fBMc7bGrm27HMsEURmDzN6A5Ntj4T76CYZvLvMP5JPvDWasuPNroQuERw6LtkLKdN1u",
  "key16": "4q3Z1V1SKfwYco3KPeJEPhdVEwTnZG923LzaASsks9nZ675AkkcQ5VEyjkbJPNVzuZxuF3FnyoVa5mwtQp4ZRKDU",
  "key17": "4Gk5xZtdqfhGjzA2yyQLzSdeypH6YxGvEZq8j51ZSELJExBkZuKfiaMAKDjAhCDDAuthGaSKTKmtKroozeFsE2Cg",
  "key18": "c8ZgkuKGeVci24KnwgC6aFT16eLE4np4AFsACGe3NcZaobdZLbcKDTd8GP8TUb4DFhfqHkUn8Y3MTuxXsXfYUjm",
  "key19": "3nQ3YEarJudos6bV4tBYx8zqkhf6TvcZeVQKsZebipgkJXQDGbxqVUNRCLi2VSDbqvgcrZg1hWzUnoo33rA8cMx3",
  "key20": "4uJrjrXmMQbEWNunMs5UDBbHwidSbZxaUfCnyL6PxwU9A1vtjhrunY2XwqwE8L3Cw24cCiKo8BWYciCzygr1VKfL",
  "key21": "3cQv89CiPK6avm1nZee9iZWj5nDp1yfrNaLdpQ5BW1m4zZVc5Xf3dQ2dDufwJuGfiXUDGczPW9x693BJ2m1V5LmP",
  "key22": "P1AxnW66Q4gD5Dog7eAuZNigkLebyBPvVDo2i5kKVAvLjNLQHdPxpeWMBMQWHvu5rxquDemA4wiTJpXCpgS2UNu",
  "key23": "4AEGURtCuYA3uy85zHfUAyWgmTqFHLqJQAojzqb5xdyL5ozw2D24YdcPKn82qA5hq9UAS5zJrCkqjWVq3ZSjZWU",
  "key24": "WLSJvrvpU71SyvYHtLQsRxxEm9kghVkbfdFRuQeFpsYAZBeWSM3JzUeU45oQGX8M1D8oC1xm2fF2fnsHJimKzgJ",
  "key25": "3u5dqjKPRnZraoXQPEoE1yN7MrpbCMNqzthS7HjXJubCvS4J5xEr7CdL45nnHnWuuab6Bixz4tn8VwGq6MU3oy5G",
  "key26": "5MPg1frQbw6DRBpyYdAAPXqy9L6WFqBs1QLzwL5QzHHA5pYrGUUxmUcUUCYssUBikvJqSKsRAEpfNYphZbLYQRFA",
  "key27": "2HyqQJXT6s9ZWfj3DFXuwWHjtrY8j4PUyUTj3hKV4eFonr7x6zL8NBh5iNUxxFyXw65h33yCnweKM28W5fiq7Ds6",
  "key28": "4TkuC4v4Eim5caxbvyXThvDjaLjBTgXrMg2EZ8X1ABQ7hABob7wrcvUvGJcS12vdjgLvkkNXSK2cCdBpkwDttBbm",
  "key29": "yTjM2FcZcREwhzmjEWNMKt6MiGji3R8dtZQBqJyQnCYJKz18ZHYshuxPoV5bx6gTJSYSb6VDQEqnqTmh4As9uvr",
  "key30": "2TQF1oi4RZY2YMNK5JKEYatBRf5TKWxJdDi9f211AB6c5XKsr9MdEJnGhRtBS2buL1h1eV4FTjDCWRgyuk8K8hyp",
  "key31": "5ub8d21ojqN9LRSEn7QHivofJqeHP3wMRLcBNzhsUZTE6HKBtBxP2yA8muHtujdPo8kmucsyASf4pue3B3F67R1E",
  "key32": "K57TZBFiwg7wKneH9ENmSRFdTGNUrWDQf53dD5rL8sWmwCaJjC1wA2MLJJLMMefrcdAZ4jkvkcx24m9eXPsBBdi",
  "key33": "2eApLyKZQPB6CyZAjQXz1QokbN37uNcon3BVUxnWwWh1sU4NMbMjwAH9dRvTnewjzzWgY2Lc6hZEjwyWaTRmJPZj",
  "key34": "2fmZsfRezk9rNguHzKehUevYkNzyLHpnoks9MJTji5wMm3D1Mkei5hLUBSstamrFPDJrq7LnzhAQ6vAB9rcXEgJu",
  "key35": "4sn1UQaPnqZAeGwwJaWrAdUtnf6KmC6oNXMDPnDrAkcXvPUEzBn5AarHGZN196g28eXPsoe2593aYdQFNMQR53SX",
  "key36": "24iows5dXZHRZTQMqBKLHSwBHjHL4XtCnh2CjLhwQo8wRcUgVmMLJNkZjgZVxHPGuRFzFA5cLQoV6fYBBKcCoFPV",
  "key37": "5eYZmVjRayxe5tvpJ9sDq72CAU778XPiwSwAxV519BT6sHM3b6PrFzZnZ1p9KNW2LoXpbAV7RXcpEWYwHxEmLFov",
  "key38": "3AczJXK7byHS3VYVpauq3RnYkWZG7rcCWZupcoC7eKnxUc94Q1EUZ55dvhzqxJpCgqcTamJjPtyby1NDbecfoBmK",
  "key39": "4eQ5wGvVvQ21AZCwhqx9t2sZWfTpFP1RTxQsJ6Z4RzKnV3FwgC4Ga1VKZKqL21C7dNGTMCztZF9PHWRFmzg6b8QG",
  "key40": "47YMzMHtSGemGgtpjNmjkGEnP7rHpLp75tUpyx5pzoqAevaRWveT4AGTwWFNPR6xeVvnD4SvFX6Yw2pbXbw81QZX",
  "key41": "2yieaLZRMWExpxBoRBPp8iQ3uM79bKZeHHnAKAPbKYiihwJadfU7a7D56jybGQmXFCqRKkU3jMXpxPfNi8p3bE9E",
  "key42": "54vj94un15cvYcemVcJY2NKZRbWdQKdtADS75AP1MYeXYvt53qxd9Zmr3C4XVeA3GZdqP1e7Jpat2kvAnXTCLhUF",
  "key43": "2x3arzjHdZFFefD9NKwPLxSmXVzrwmwosaqFbL4es59qnNFFuCzg37NfSWHcMygaNT2KMciTmHzTL88xMGUro3SL",
  "key44": "49gdNoFXSzNtEoAHZShKD9rUSRiRzWpg7j53prSS3axaSa8L3BUJEWfmtwCVZN12BviqnDkBtQ9y2Nra4HB9pKEB",
  "key45": "2eCMeTyTRfKS2EQESkJmr6tuvrPc64A6Sk7uxY2KnnGW8gRVri9GTcaarkFeWXu7mLoanjXwPmme7kzs2qTtt2Rh",
  "key46": "33dukv3cCAhWscoB5nKr4XrMzdtydUvTncPqSNKQGod48HJd6scR8iDkAe69RwfejBys1T9RFrv8KRZBNw6bK1fC",
  "key47": "32Y9B2K27JF7L8CeftYsgQmWQvM655JKNJvkMTZGdPokFnXqjB6SRwruhNXh9J2v2Nk5QW7fJ7wWq8HqQ5umrdfU",
  "key48": "5UeaZ4DEvUNhJs7pKcW5LuPFYcs4xXmKadxD1pwE1XfRLDeZ8jDbBQ6h812qi4K6zbmH5WBHtecPV87QwBxgN4c3",
  "key49": "4KkvpstJLaFs3EzZt6seAh584cy3GTaM7Q2gABfv9fz89xCResgS6aU7wi5qKD2f8morzccNpuirPV4kntxAYWcH"
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

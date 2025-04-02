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
    "5mcLAzVvGqZq6Aeurc5GWGegRvN4S1JTZ9tUB61g3B7NMYMhf9NpR19qkkBXJHkrDTGAJVPobJBuDMhXVaq8sb1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQAhzK8iF7u6wGbuvq7eyvBxy4L8N4VvBwe5bZAyrV5npSuKwvwMm6rUSvSDCZKKWSQ52ceMFrEPwsjhnGuWWxz",
  "key1": "4LP9FFKr3Fp4DyNHfGNSR9c698TS5fcSMz6jXqXQYz2e9yfZvzMN83GPYyUpLbqQHqSFxVWVNBbZDu61VcJW6ysk",
  "key2": "5mKHAj4Zf5BKtaiAQHZ61z4XXpHz3KFzLdGbtVTTkfoqxqJnSwX8HDus9YQgUxdQ7ogkVTeVmfsHxjy4d51SocZS",
  "key3": "5dGy44Jvc4m7qMhqno13bWLqo7PR3fZmGrJT9DAaH7m5Jp6NM29xYRyVfUPM8p5E9SQY4PHT7MKpcprh4DeRmBY2",
  "key4": "3N19eZf1TVwvPXzsas9piXHTqhDf64YJV9AX8MD6s88CCgFTsXsEdqN89gXVL6tcrbN9AZr2XJYy2GbPTV1XqE8d",
  "key5": "UTCUBgpX61NF4fGG6BdcPEh7bCPs7YSWHyCr3NKkTA6zhcmZvCLaTm15AJfNV8XPo4BRZfd4zqYVZ48oW4NnUAd",
  "key6": "24cMU5xMDjzELeheZmfwHG9t9cMW11xaeeSVcjXzGfPFvKi5TxUDKf3inZ1yTr3fU2HYFqMag4bKfcbu9rEsMWiS",
  "key7": "4TPGKCmygc4YpDCSYhZMCVSGm3ebrVS5eeM4BKFuKWoKtevsSaQzBF58BwqNSpDH1oLTMGEP3vKGNVLFVAcmSJBv",
  "key8": "2bCouPuTtM73zJy1ieFhAvJTiPD2BwqmLnAvG5t5YT718KN9oy9sAGRHFeH6rrHvJUwK4e1uU3JV1kn2ECRTJpHU",
  "key9": "124eF63fsgyoQXmgYEixJciWVB6aPb7LijJYdwsxR18Cmj3HL18Q8jfPtsRfRjAXAD4Lz1YKfpkNUH8xrtViaegZ",
  "key10": "4tyNCtQcPWmM74xA7P1A896gt7Vcfo8EkiwaJ6X9bxdBqbMGtZWtNmGv8HP11qdSoAgshB5gP4qyPzSKV5NB51UF",
  "key11": "3QFVKYpMvnTHA7XqknAaNsJhVaWGqqjb4w9yKX2ukhScLCsYmpB6oYeco4kTtGhU3vdRwmxQwZYbys6TCAN9gjav",
  "key12": "3GLW5pJKVaXpUKvna4uwAB9iGCdriZQUQx1PQooMpGC2MEndxLav1bqF2tgvUqK62CNdyG41Gw9HLyvqjW8UTeau",
  "key13": "35buD7FL4inVAbLjWLvd84tcWpBPJvEnvTUeEx1tAAVgc8QtMeEQcLfezJPRWHwaNr3w9eCAbX7Mz22aFaaQKiTG",
  "key14": "oE1WMGmKwWXDL7GZNyw16YgLFMCP9HY26UPyMXAC35iHFA9msdNVFgUvD1QPXSzzGc2TnSoxk6sCrGgKJWdBKJk",
  "key15": "26wBvgK6GpBUNC81WKq1MYS6eCPWMmk1Bbkd23XrpHMVtMzbCoF15RhhrosgtErHmVp1yAuRixeLB8AqnfXnYPQ8",
  "key16": "5hVhN35pMQgSUNX7dAsbtfR4xk2Nxh5Mcrj5gqaNrR5HKkRYtXBE4p21oheGngbFDKekaSvgkhYGdG9bWq6eXiZU",
  "key17": "2AZmDZfSAt66uWWqWfycokpMJamVkg2nR1RceXbEPZBHgh6gozC4RPH7zPR7mE74N1gMPvje3zqobihinTyjtWkb",
  "key18": "DJMxdxfQhFFiaw2z26HhFgW5cYwehKHtrFnbBoSKFiZcza4Wn9NA9tNzUxQ43ccrMVy9pWZavyDGASbs8URp7FU",
  "key19": "3hpX2jcDfSPYWqw4LuiiMjc3U5WrJoNMZGu3jS7fviKLYdwcARG3Sj5cGgXst1iU4DVeNWUNoMyBo2khzSERwMRo",
  "key20": "2JFTi41EUsXC6jJUj8fZrGJ5D5p7ZefaegofsnhUwLGU2dz71h9g2cCvqXL2NzadYVGd2guyqLLm6JXNoEmo5dET",
  "key21": "4cQ5LoCnk5wZgraky4qZb8s4Ee9uqHXacZDKiG8d5nWKeaPeMhZsUZnTb4krsj8jMPK7KvQ7D9fAYC8jvUMTR5Yu",
  "key22": "52muZt8gkCeXtVtQ7JJpcR5EBtYark7Efk19wQen3mMLmFe4G2t2GMtEK1o9ubWceFpbfofcBdTfvyKXftroNTTB",
  "key23": "3UkekJCuzty3AQi2ax1d7dbUCysyEJGzw3wQCzq1ivTpDV8UrvH7dkTju6iCGHLAN9QWVLn6Fo9ZznnvzvKMVXiD",
  "key24": "5arFvU8Wt8VUQwvD6mSyRe9KowxJQZ7xz8CuNV3RriAhoxYTh9mSfwUkhFks4g9fJFK6sqUXrRkwxA3xgrP41sdC",
  "key25": "FmPbSspLPqbhtRhikjD9s5m8GcwYiRAPv5MHLUWdLdqYa9n2Nmmo4u2krbv7RgcywYHQbXPFgrQFUsbUqoSSorJ",
  "key26": "2CZccsgaGFPvE9F93iCoRbJxY6GW56Fbkaz2JvYZBDt14ohbH1bnJSZusKQVdK6ffMtzxzZ1QbAwHvpdpPwkPVxw",
  "key27": "2vTXMTj3wzdQnEPhw3Mhw6EvMrpm6Vfmz3QXyUb1MxY28j1DTvbvizLy7kZRTWFxZqvnzeJawfzd6fD9d5buBVnb",
  "key28": "2KNG29X7vviCqxsaxoGNRAoWXFB9XhPfZYyq5iJ4G7TbDmN2crb74NEWZj8xcyCmbtn3t61wAPMWjF7vDVhi8VPK",
  "key29": "pyjLohDvhiqZVHWjw1EekNPRpywZVEMfWTnE4MnbqBnDJx3Yg464U9Vk4Sk4CNsEEddKhPyd6tggeAhepsbErFP",
  "key30": "2nPTUdSUg42iBtRa9txJeY8n48tRqAHjGDqx7QwbrPBjtGAWUHs2jxBribWDjauXjhca9EbzpDV5QVenAifq6UUF",
  "key31": "31ykSdxEhCQfbQjksK7wEpRApghSg2hVej77VQtbg8YnyaUoKxUKh92cDu3U3QRdvgA4dUKM1CEjui3LNS9iuQvi",
  "key32": "4wB6rBuxehXzeMaFkmMifGzxBJgqASQcZe4ENuh2Ljet4FxhdPCJoSfuyWpwZFY4kW61TY3MUgw74M73pC3Ukd4",
  "key33": "5WtgkHtMvuc4BEK9pnwzXAbMT4kqgBzp9eaxLjayb9873UTzGNqnhaQkHXU7ecZAk7sJ87rJywaKMwYbR6SGAx2L",
  "key34": "3FvKhPrLhtRSWKmypiwXSWpg5ahFSN6rRoUwiYqnNL45SL9wRN5WC6MrFg3PHwAegD4CTrvyVvozo8YAFPskh9NG",
  "key35": "5Cr6aRfsBQ3JLbBfSCWQ6Wj1q9vMYNpWyaZF8rtkpJF8gLEK1MYmSRajje7JmFbu4zN1hpzKfzMWoNG2A5pUvbgg",
  "key36": "4o6qWvKdyWbmghdMxstMQzc6mUKVUt5ZYXJfUcFQ2cXbnqgyBVLatSu5HEZdaWRVPm1iH4UZFvZahbZKLfp2fZZ3",
  "key37": "3Cy3X76cDPy3AaBKurQPVsWhnUE1S7VNe3nx5K25ZMGVNM7uP2LpsJ6E42ajvuFY3VK11SY6vdUwRN5Y2ZZ9GnjT",
  "key38": "3P7Hao4amZn38jdKPZAYeEQLDL9QTmC585DNcwS35UFj7dzzUFSaT7KK4DdnkaDjvbUv8WHkZLYrKkrw7knAqaRq",
  "key39": "3kbJghPEa1ULstUnQhEGkneRsUGnPr4KgDcJ9mLc4dtq3Y7t6QoQkkhaQwcgpngjEGDKW4QDSQM2PZ4mzuSYGwCS",
  "key40": "yojqExbYdLfW1zaiqtqLEwPvsJYMvB9tg1Mq2bTq2JVTu9nAMoiJ3jfgBPwRB2yg7XuGeGzTK1h23Z5XmTuhXCw",
  "key41": "4YERxDDezYa6krgiJs2gqL14VLTnQtVn9X3xWujuGHkdpMpAYvEkTtEq3JpXoXke8MqRxMyf89gADgGX9TpBSU8B",
  "key42": "3eZHd7G7vmkCacrnaAYy6GR3roLUVkz8eWvsSyri9ffL5mdNhp3E56nPb3JF7jUzPCh4ZFB7zKLCtMDDqzRcfHW3"
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

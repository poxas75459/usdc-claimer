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
    "4W9fwcU8obmL2aU3XJ9UjHs6kvnPtZ6rmqZsHKAqtd6MCAVSZq7QN9QijCJDfcPfZNd8kZKEqeCPVHeiKEapYioW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsC256Cp1kpqwPdag7H8RXu1wKLYf5fDqgkUceQR1C8x8Z6nddvo42LwxpyUJBJ5Y2udTJgxf4RajSXbFSjUVhw",
  "key1": "wXEgK9C6gvdYcLzueLJSS5NyrfY9ZNHZxUZRUC9AUPgq4DC7ZieG5ZkbvAUE31hVeH7wCp5a5SZ71SEMs1RcarK",
  "key2": "2c2Pnaeu6f1KuJqhvSCYcZshwSMMva7SuxivTaQswq6Ha7FnRRTs8TbKYGZrwYiVX4PQzDx1jxUWHafpt4T5Eg6K",
  "key3": "4XAoyaSe4xcK3iUBSD4JfZ7hP9ForjHw2rk9UzznCLqWQfQCRwduRJtFBcgCLPPjPbgAKceTcRoxLrPGELhMqo9q",
  "key4": "2F1xCa4TN1hgCJoebaf3wC17Ve6P9yVyZRp48x2QYW39FUZuFyPRURb8ukaw7a9LKVwdyRgSecZaiDpmknwJSHBf",
  "key5": "4ciqTMnX944Jp83FiJmZJfwfR8HVa5C5W9Je4zYK3RAzX7CrYQ8Ub3u6u9qYRXEA6qHEHwsvZFZSpqhxEJUMgoMY",
  "key6": "35N973UsXLWDKJ4YrrUXSpjnY1KhbDHdhXfpsUThw121u1P5g8xfLcmd2NPJbpx6nY4gnFek15vrzoQxr4n44N86",
  "key7": "5mprqq3xQ8SnXauLUxeTLAopBqzp4o91s8TgiRKHBmMKBnuDoCjR9uDugyMHXaCQkMXsMNy9Rovy9w18qQjvFcmD",
  "key8": "VXbHmVnzjiTUh2v51EeJNcuZjYpVVH8k6TvjpzXfe97UfTuMoiudSsRSa2PpLS5onXfnh26q48ZL37izv9rpUea",
  "key9": "2C9awkc8QtHdAw6UYnvS4fjqW5bzLuZaiLxCUGw6kpKZTEwQbMzJdc9zpxiRFnBYLSZnDskz9tKBzsX45CWjr88x",
  "key10": "5Qzc1HnSJ8378VqhsPwawmd4oJpsAvmFfKwVrDPNkZcuTgJ8ivJKeTkZ5iFnnTpjvcDPhL99sd8yzepdjNLsTVEK",
  "key11": "65hexRv5MHDHNp38AbnnbEFb21LgKgcF4CFPwDe4BjS47QkFLpTNWJCAj2kG7Xi5sCxCpxenkxVD7F5Cz2BVYrwq",
  "key12": "4Xo8cJ4oqNNKP4FmjPkrYVwT8HABQmFRH39DVtBZeJ14Tk4FLwpYMhy8PQjvBAgut3AnMMthPNDCizGnZAFdfhaq",
  "key13": "2ApcUfz8VoCQxpTAyUgUFUVdX8sAWSZYwejB7f2S7ZSCdHoj8UPjmhVWJTcVQeJaiUdJx3qfD5BHMu9a4qjk4y9V",
  "key14": "29DS77QW548qME6HJn2VbxGvtqJrVgXxdJiuEhosvhPwiEk8pfhAYsBShyQmtHNF8F2DRc6Vg6YDERFjVJpnRSab",
  "key15": "3TyXDrKAKBMVfQUNXdSTxWpUZDZBLYbUY5rF4bHCrhiSC2uemmRLd8KJn4vTC4G1cAzrbGTBLkywkjygdjiyBWmZ",
  "key16": "2ZJnAR9rDdoLAJzdWTJRkVU4JbtKpgpxhhy1bNoTA9j1KJYobZVswEdZUTJxbjxzXoK1QYXTo22ge1MbPMQvmGrV",
  "key17": "TmkakSsi7uNGzHL61jKNFj4zPHboLkVRA8Dy2VPEfUTaZPFwLjMDs6E7EJHZBt3N8vhkvNzkR65enu6VVtjYoRz",
  "key18": "4o5UGDPsKE9ubf4jBb2rzkEk52dFFKkKe4JBvUYouCocrQyPN51Yc9E63hGEp8pT9KPwz42pN84fJDiJ1mCdLaRj",
  "key19": "6xodpho5cLpKJXJRPN3nWZPXGHgvEjVk26BdYkB68PJX6QQ2Pkr6g7KwLn6uevpahvFFKSnaLd1izFnutidisDr",
  "key20": "2dL23f1j1qdRn6ZsBtCGeLep7wGiv5X9c6saFErvW6VZEY2YDscHdAgccQ1A124F3avPZWApdZrLDmDtbQg8SJ1Y",
  "key21": "5ZrMxKj53z9NoxoR18wZAtK3MDLuiMeemaSvWzhD9RueUd1rgpshwyaXorusRHLuPDwiRsciiAwvXV1Af9ttNHpL",
  "key22": "32jpZi7AAUTw6SqWL5b92WjGC3sXE3ba2qQwzFAqi2eem7KK4a6CKrvbABHJNnZCv2nz9wNs1xyFqZJ67fYKxj9r",
  "key23": "2RyKRexvQnQTPom1SiLFK3B5Sodum34XZLwt8hUPD1FXYTza5GN6nJ7CxB3BXqALSnGf5tfnH7v8FyL4eBQnfBFF",
  "key24": "5Ae1dtrvYph1LXszEH7Yg2wEgsRjyPbeMkrXmTPcCWBtgYXLiUqojiLtsBVWfXYjPWQWPj8jV2H8N62rmGCHdKEU",
  "key25": "45zq5vkk7D9h4pXMod2AsvpqzraVcTWH4x1MRuw28KAmfFsRLK3iSnAU3e9YH7gnrGT2F6ZDM1v6dr9ZJKknXovx",
  "key26": "2e4PTerAENJiKanZvahsriADNX7M6PqHbjhm1hdU6UcDDEVuKmYH9kPteUpZfYwt2hrKJ5EoD5M4R77Pk2iHkddK",
  "key27": "2NRgZ4fZszVvdgo9wD3r8vmj9ZgJMcAjR2FCBpSLD8F3ASSLaW1pAgJDdJARXUci83wtAs8i8uRQctr19W3rM2yV",
  "key28": "TT5vtmspfSUCyaSNCpr1XwqCh3GNCNsNtayZ29Fk1pVrNyn1VWQPTjHbL5wSzFKzPjYjMzzvDoFi9REVZdAavbX",
  "key29": "2UpVQKtkRJGBV4oiFTCRRLNy5W1NYZb9AYAxbgPpbwAdApMQzzugJgiwTq4UDXfSu7FzeXotohniP2UzFow4U1XV",
  "key30": "3DhrQmpd8hXarTQFuj4HNfFShJxuvxYh99Gerck3uD1Gs7CD77QAfVUP92HAcZ64PzwgL5GeNQ2XuXiBWpDEEcuU",
  "key31": "27HFqEwzT3Fnw23ewqvzLwaf4ztvyZLKvyc5a9uYMeZcF4PaQRbMaQfmSJamhHbeLZaBcY2Va6TxzobHEF8kHidW",
  "key32": "5TLuAPvwzngnLBmEziTUKfn4jV37962z8KXioyuaEeYaiSQqPe1pUX3VqSnLC4KFbfQvyRWtERbLs7ADqRwvgBLm",
  "key33": "2Av9kg5kgoMKXRTsgjEHYAwdiWLTqx4xrVsVdaxSKKDqSk6vkk9z72H3scd9hsKYpEsUCmb5AZpuhheNTa7gB295",
  "key34": "DC31NFJW5b4GaXDU5ftScUDp5NPMXY3YpkVraC6So2oReyWUaZG3cz2wtLsXiZpvGyj3M8uPkBbGAnh61rC2K9j",
  "key35": "3WXZx5xStd3abnzXgWdBhFbVnbFLzKFt81mWBwbsNdcTHk7yyL9y9NxzG1t7fH7YJYHJ5nQEAfPT4iDnC4ZhBET9",
  "key36": "3WZBT4vjN1eRQEbHWnW7JVNc42EYfLZ6m9XYnzLyUUmVGS5USxyzzsaC9S8JbjVjy8diANcdMQPszbxMmCxg3Can",
  "key37": "v5KxcqnfsKKWKW2tzhFEfjSXWKyvsdj8hnsyuMoksa6QpLhPBguvweJao33LAxVgpobasWUgZYmAGBtAvuVinEh",
  "key38": "4cziqepApTCQbLVQzV272SptmSTKBGEXguZ1RLY1uPgndKjUGLpfydEqToxEv71AeBmeFvoH4dS8aKDBPiXidAGM",
  "key39": "3YDe8UFxHXVKqZRcD2uk1Po77Ff8SxA4HBPRGp9TCtjDSPbxMdDJdUuDANXvtZsh3ff7P5VVfFJKk6v88SSbPWQC",
  "key40": "iZW3sLUoZpkTufHp9RyyG9oX3iSstGidGYHwwN6vw7FkxFN14VQ25ZoU7RMgp3DLvP4eiPuGPmUycB9aJPfFMpd",
  "key41": "jggxoWNmiZdFrngL45vYtqu77GES7UNPjnWKcD9DxmhnU844wUZGrP9ujxHPU35homGfL1aMuXvQg9GhToyTWL5",
  "key42": "Tjdv9oa1yf92HWFfTaDqdiML6L5NYLaVWvoAq83HmuUYsMcStstVFuzwPgQYbfoEi5gBeHrXf4324bngEjpSXh3",
  "key43": "4hP7LCK3rfgMCbzceDMdBnxcvhDyM9fLYNXWPLd89umdB7TVYxUUKoyxAhymkQMk9mmTeHMB15gpRRPC2vVTbXC2"
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

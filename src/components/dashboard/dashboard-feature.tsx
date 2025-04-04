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
    "5h9btoLiPvBhTYAvwMVquChP1YyvP9y6yGrs8zYHE8Yiv9tDefQYKSuLXWj7irzeY7tCg6mSRRD6vPjmUQVGG51c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eDxrMZT1GdrtpcrmXW7uwiLcZ86Ni2XfUUrnYziqdC4bYKpJyLysqw4181Wxh4npRj93XrXfgrA4Xo2GEhjcUCG",
  "key1": "64JT41uhEiVtoX9JSZTa82uk5AgTDyc9mQhtsfBuAaPbk4j7oD2MfkWHMKWPocgS5g8jQbuyyPFFbG1jnawDdvSy",
  "key2": "4r4w2u4vy1v5wAruXYJJVT5FhqmGwdXWErZZgzSTyoPb1ZGdT6LmEkJjhDEV4w1omwC4gkwjWAesqCCTJ3YRXucE",
  "key3": "5Y63q1tHoKzwwahHvCwTBG2e9MYnHe9XjSXrWgvwZUN3NkwUzVgz6AJJjwwJ1KJn62TEtkkzELkbaQbHrRoc9xiK",
  "key4": "2oU3NBQEXgNqtRYehXHNf1iXq5XFXvLH3DFAKuR6G5QkbvRKz6pUw5nzfmMomyCt7XVjk7foyHxe73ZVG5vP3AzX",
  "key5": "4nd2N1E4Enhdumuj4PzHsSj5wL4CPq8i5erwDNbe4VSibpbJvT2KRUbhySgc2GBA1UBWpnJxazEemq5KriR4w6fv",
  "key6": "2FKKpWG7seeKTqyC4avyBV5MXLqxbnsqBsw5Jr5AzLveuVuSCFmxPFvYzLGovyNTSkqaTfET3efQmFTJaK2whJhN",
  "key7": "3uhwdga19PGX5Ke4AEKdo4JuEJHxK5RM2QkVs5S6npndiEru5PC87PEqprhMwu7qn4cjmw9adxPSyMiS5fubNVJr",
  "key8": "2UGH1TLbMe8XJouirprftavfUky3FmY57WSiMHBFvZoMSdeVnoBmLsrJJcp9NehhFeFGc4xXniS89WvVyh4Enc6o",
  "key9": "2mNNc7sZJdsmDG69M6rLnghMoQXQDENXPzNyquA78hmb8WCCVfoCxE9ytL8sGVD1NcSacnCENXdgMNyqpmM4ZjbJ",
  "key10": "3ME4ve8FQDJuTQoyRjUP5hgKkaHjwiwFtCJtUiEnXCQToeeAvghQc7aJhGWbTxpF8jUPYWFjEZPmG9deEoBQumtJ",
  "key11": "2HRUSFvct3eV7uoSKKPqeeTcDcszG9oMSDXP2xjKhuY1ob54t9v17GqCrXZGuCujjJcNCqVVVvvoxSijAXsxbZmo",
  "key12": "5jvxuWtDciQsUQVKWFx7KyHZ2kU6qDX1Q4g8Pv3uPw1ZcKo71pyA3Qk4gup6eECgMfNeZdcgG8J9nGWWy72gUpYq",
  "key13": "TEjU9ZSmA3wCUtbEnUNtKTQMYb4762wJ9LejEvD7KTL4476ss4SwepERq5uuFqidgijQ1qjpDzhA4tYehotvK1K",
  "key14": "3srNao1UxP9zM1QwmxU2hLsUNmYSYhXYJSZxnTuKqcvvXyzq7eCfY3TRGk3RzKNyysLFHBA7PVsB94cdwvc3hftD",
  "key15": "4h8zkhBFo57WPUEEueimPENd5JRZE8a3pbvP8C1gf95zPrHfiRZN6jGLqhv1gNbgyTiTgKNTCgDbWsGrFJVGsbsD",
  "key16": "3Dafu9e6ynNk5JPTkqjukyyuudEDStS3SzzHs33hHagiMJWnzScHNd22bkgxpQ7RAtDLhQxP98H6xdwRG6qeaYT4",
  "key17": "3Pe9pHowdzqkCJYq8RyfXSddX5W6Hb73tGuPJeQEDzxkbkat9Xe7AE64JYYfAzbGytVhEqeGAprAurEjtU9kEAjs",
  "key18": "oLafuKoxm342A3ypRmPa9P4CAz9fFrii3u64rLzBaQ2JwPcdVj8rAgakce1QES6bQSKf1xuy6HiwaJ1BZxLoCHv",
  "key19": "2WqFKsUcwo5peDyaENcrM9XDSPTAviP4HDsBmvvKkMkYXyCSxs2tism4R2pZVUpUaoEtSbbCCmMAi5VcVndYVnuY",
  "key20": "2hofARBrLRYCZN5VS1qoG1HSKFHuECJHJH2C9G15Q6jWp8BKSUDWetntSZNgiydexAbxsHAvWidQxhUiuPDiSMAy",
  "key21": "icewzAj6DcybPbZojnVhBk8mjnbPKjfgkBEvaceR6UV55ZYPjMAcYv1ZsbA5vnVTjubXNt5uQ9FbsFzKos7bTdP",
  "key22": "2xL3QdPKQsxap7SZ552rN6Q9ecW34HgRHaLT9eHAm5PFy8w1svWpGyptymjVnEcUEw6rvghEhVL7UutLACdFXUzs",
  "key23": "37fVwxViUPDPhKX4d5ZfmPagPYnYEsAt35MhxYTThS59rBGVwjmhyD46MHRsN15vKjU7ASHwxaGjij8FbgaXAAMS",
  "key24": "3MkDpx29esXKotafuLvH9F9sia3H1FFMQdPnCaKvpKY6mG7PuZB1vtoR6nLL7zBYd5AaNjspDAWH9KNhdoWELXEa",
  "key25": "dT2qC7GCZomN2Ykiw4DkvcwVNGWh64wEKsbEKP4T9X6SmNPmhs3YuC8vtnJmfFFSGHPCMhhYmcBdxLHtocxWXnt",
  "key26": "AMT6Jmhup7j4Bb9v4CLEUoQyAiFhLi7HDCRduiEWc74SmZ2pySuaz57CV4tM6e1KubtHpbPUnEEYhCe7wAxTAT6",
  "key27": "2gyV8MisA58GJAzz7GbNM9nqy8ZEejqYFosLHcMmoYYn7D85q2u8CpPriJG8foZPtyW6pv71Ear5hR2K84yjLb33",
  "key28": "6SZkiJt7PvWwKmS15dGsTK1e9rtJM9amxeTaseMZjcBVGfcuRq9aoYB2jXEPSDWEoiHcACexCtpBduhfWvsi1og",
  "key29": "2KKWGTrDBt8EcdPLq9rTheJC8s3bERQPfENtFAbL758GH9QXyjKDc6gxcBknZDSpnkVU3Jh36jMWBGmLdvGR5wjV",
  "key30": "58XhNgPK8waE14NnL1i6Y4nxLXv7RmChUNxxtQFG2GUfC3mJeJDyoySTCU4cgHjCfpjTcS1sbYcuWkVf4fQ1pj8L",
  "key31": "3yaB9bNhrgJiEfVsJYdLzXXLnjbrnrTzSxZ9DtVnVp1NNMUQiM8q6Rq6cVDTph8RWEhxfT1JfJhqwXZr6pqgW26o",
  "key32": "5mvLLJb3nNysTo5SNhJQrrEhafeWTyymf4szL9Wvj5aYUMd7vfNA2ywZGCrWQ1QVatayfwkV6tYcSTYvxAJyo3wq",
  "key33": "2cfu4bCu1f29CSHwkpkcEY5poKeXiKp2xFrmN8t4BChsN6Wrvgg9zFu9m2fX6Ahr4HdknEFyuQ4YCN3HCTxmucso",
  "key34": "4sRgAkm89BeFQMQVrYWDD6cfS8NZLhnn3aPeugn3qhiRrwKh6NzFfDTsAqZ6auc12PVjUgz5iHHs3uFSMi7f1dYJ"
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

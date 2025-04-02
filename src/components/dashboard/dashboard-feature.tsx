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
    "4aTRq8V41jspSH43ho4jNG5PvxCgc6ZsKUpAebsjfxjY7MjkmGXA63TNYDdwLDxtBzLTN5EM5EhcTwELK3B7Rp6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPBrCrBzVD6vQav3Smi77PefC8J1zL3wEE8MbPRixecYNMLBA2suMwKhNUpwAjAWai5WCn3mvf7rHS36o3sYqbh",
  "key1": "4GSMsVjBWFLKs8ZYvRhUqgFYppgRdS4wWFMxMf7AgDz1d9WTWXRjDoFTLSNzkhJDhcNH6egRKAfRcmePWM6Ax6fY",
  "key2": "3xHV9xhuVrXNDkUB8vJVXX7YbakPFMHkGqKiW2GNBFNsgbd53VxvJq5DQ9dpXVpcwQBPhUsryXvwSKdtezbrzz6S",
  "key3": "4bW1bNwkuRuiDs6Pp7wudEbMzx2Zz6Wdsnp5zhsYrmh5oNb7vH6oMkXBTn4PCRyYFDxoLrX7nYiMEUMNf1Gb8tGW",
  "key4": "W7vtnnxobEaLPYJoRMQeG9mS7HGLHh7VdLRospLZ1j9VqfGibEfQAiEG7tBUL6XQ1yQQv9cLXemeCzcs2dRmbrT",
  "key5": "riGEruUrzXg38Gns9oxxMp3Rcx1WBH5MEA7fdJMiUTmirVe76ugmpNWV8GqjexDL9xwwYyQNHfqbmdz8W8XcgaD",
  "key6": "T35c4ZqjCp8t5XyXs2t3W2XRE6LHtQ7EPoFXNniTRcvVMMH23UsgxdXN2xhxbsRr9fpUFxvsQKSJ2BurR5hUGMi",
  "key7": "2xa3bbB16HMzn4MiUnB93VN6qygvnhPdTbNSJxKNBeJcsucqB9kpPoJkzKNdb5uVWdRQpJxVXtA6bg4zK6FqkK4k",
  "key8": "4mp2av1gn1AS7G42UuY6QNFUWU8zPUeh8DmfXrVfnJhm6BPwrcouqf7KdF8ZNxpQPJjFcQqMf25NDcsG2beUFYjq",
  "key9": "2RPXWEcCbQVFBhU3HuonLaF1U2yTStjeqGRepkb9hE7F3MhSRYkd6zb9SfAezPHXkbWzhqfL3RiJdGKf4CV5g5YX",
  "key10": "3AayEdN5q8URVPquE4EwbCYN9R8J99nBcRz9xEg6ukCjmzrjpC3kQ7r6afcEtbaVbiBnVnhKWQKuncmcZNEqQ2pz",
  "key11": "2rnUWTfXiZFPXYdDFoJadCtWjurVyfaGhanRD25hSX1a9rY1wiK5GJtvMht2VwKZUYsHyXBKzNMUAtatfYj1bSqL",
  "key12": "QmkHkRiEjWb3q7c1dCrJmf1QtxHgVKWAvkkw1vUxynqctfr839AfEDfa4nKjuMKMrRoGmwc1XFMJ1GMCCgcHBQt",
  "key13": "2efuTetbYdH4Ro1UW7zq32Uxv7a11gyqtSUxgWRSeh4b28hWuB8BfkmwM26dcGq9ep4NWzWLSamJyveXWtaP2vap",
  "key14": "5FDsLu1Ps19p1Cuyy4sUFuGaCYi52Lf2orHcA9aYEa5XQwo9vMijGVRamLbsQ8CoGxyZYe2FMh8PeSo6UcfMKMbo",
  "key15": "3ryGSni8zkUFJoKDbmcKue1L42xEZMrhuvtksp6JNZDPkBkXvgUJdd5mUNQEP4oZFd7QZiqqzdZJsh3M5G54d1wL",
  "key16": "4prbBvf62gwmDG7okkCFMbbmBBLDp3WUck5GwpruBdniCCRN2JH7zATZ3Z6yj84A37a86QyLT4qY1Wu1D8hLppKD",
  "key17": "3EgPGxLXw9aJacb3ze3vVHqaHXVzyUcxRwhCiQrXiU56q2LHWA22RinoBsUWfPRWmekgjbPrbwadKQM7VgVwT9sN",
  "key18": "8YH8JmLBZpGeVH8Hbm2MhyWdfavEPLCXHFm4J1RFTBcDsZeKVDWfqdnt2m1a3RtP6hm6doUZjyVCUM35QGoh8nv",
  "key19": "Kj6VcbNeH2PufVs4e5kdFfFLNT8kNQJAuE79nQDQh6ghGAyNYuFnk1gHuCiCWHH9rkjswhNTEwp8AFGZVycLfpi",
  "key20": "3fXQmMh5eA1ZZraRppDRCY7CQLVEcaFT1mV4o2LFhUR9cRJVgXeuA53WZhpHDG6GetqcR8VooT2ZjSM5Yv9x9EVx",
  "key21": "5DWZaC7cDHbYhEo7A9n3rwGt9zJaHBJ2xVM3J4QRNnZwVrYKAEkLYUijCcNgperDTJh5nxh8BF71xnYLsmELsdyZ",
  "key22": "3q9X6W1Pn5zyHCEtnB5Evo9N3cTeJp6MKN49JqnrCD1bV3tD4HeCsAWRMzAniwZ1XK7xAWL5t5rTP9uUoeiF7V2P",
  "key23": "2gaddRkkoyoWzaA7FafwLqMkKMw5xJoSDH7J8q5PzPi6zRz9MKAGu4bX7LjoMqRaSbn7cJJXgronr8FLPGHm4iEb",
  "key24": "2Lu72cMN4vqMFPpEuG2fRL99KJTRRztRLjuEPdMsFGKDsAEixiiTMUfZVTUdEpuznpiqjvrBfJZjrZibnSbNQSru",
  "key25": "nT7vEa3hFg6tyKZzZpXXDZpPd4XJpAsYRUqGKxZMGH5k4HecixsUTxhAwtGaaBKTb1r1FpVYAE1QtNad1kH84hq",
  "key26": "3YdeANvzJmdCKcnUVQ4bJ8sre8F386HnSTxLn6QSHNzd6QkwkLzTs3oLJtACanvcNy2Fu3dnYxJBNiwVhHvTuhJB",
  "key27": "aBAJmMNr1kLX5Cbz9v6EoXqZHhLxoMTeZZYfrFD5chEWJKLgitANxQq9jNmjZiThKnc3CvugTf3Xz1zeZ3NkjM6",
  "key28": "4tiQRkknXC4yun7GbGBYrv3hPPS1MzvCowxPuHQES8FRKRjRQy6cYgo7dq1ACWr4YY5q4GBL67JXUGVVJ6j2JMb5",
  "key29": "ZcQzXEJ5LdzDMzQWHW3gfDMvrRaKobGNSDz2gK8ifZ9f6xDxWRQu1y6dcNPr1W21JoWMgS1hsYge88Z1kZMfBYf",
  "key30": "364tsg8yNyxTMhBT7A4wUg4apGKhd2UwMggSBQxwtbY8mRM8L4iDNAGHUCJapXqpSKiDBUCaTNwp5HcHS6pAQPQW",
  "key31": "5ckDTPTTMzAbZa7VaKmRkw9QbQMpfUzJbfh8eYFXiWn9aTyKsQ18N6GG2d6c6iHVxEF5ZPf7Mk9J2vSX2CTHSidJ",
  "key32": "4GzH7suUjZpMB6Zpk9c1xdy7mSdnMqjoNqsGHiNjMYtECzJUj1BM7FuQQwj3UPc33huXny6JyfgL9FgkjB8uvgWw",
  "key33": "4gy1H6qaf9JwQmC1efvo4AcJhrSGXB14AMhAK6rhucD1QxsBfuxvd7g3dNhMakG9pegvjeBnQLryg5SicPwa31xq",
  "key34": "2wP5ZvLt2vsLmCTJVn42HUuBUwGgXnEWYohd9ekqHncbYj25gXHva85HtSJYKvk3oyNEhcXGnmzkX5mwY6HcbGw4",
  "key35": "gbApVq8FrBnAiEtmaxHa7uk27654eVa3WULg9z5H88SmmZhSUXwPN4XBEDcr3EBb7CoSBV84omD41sFC1SoqbVy",
  "key36": "2dBC8k2kS2dTWurDmo1MPNXDK2Q1DSfy2bGu133MufuLSLjRYGkPMgXV35SFdA4Q8Rc9dQCAgkgBpBYqmYmFcNdE",
  "key37": "2kRctLn3nc5x3QEb4Figc9T65y2yJGj7Dy6XheY2Ph587zYGADUv675csqiVNRXfEibxwVKHmo7VGdbH2D8a8TBq",
  "key38": "2yNEUPKFB2ikzxhNQbU59dUid97TU9YqG7cEDWKYeyY34dhUdFhX8FUpwsXTSQLWqFn7wkhA58uLWJUzWmyqHtkm",
  "key39": "5uEABZV8dKot4HsvBT7mv3wZVyiJwXgyMx8vaFimGgVwzsn6eDiZLiw4mMKvNKTaTwg1aedoWd3xrn37iTYTkPEC",
  "key40": "24h3mUNWSWWS8We3CGtCCjND5s628eNySxywQYcrT48WUgKY6qVdPNHLBJ4tmBewwzH3ZZkPGqSz6W3zuYbwEF4F",
  "key41": "5YZz49PBLrUYr22QMtXGL9i2PVn66tkK7cXWsPrzfzpNjAQG4hBuEwb1td9n95QhVtnNfSDLmBXzMrdkCJ1uWrmU",
  "key42": "4CxxjbMET1meCmmuATrFTHX3z9Nb3dj3VTEUQvRJenmnsG89vWs1Rr8gKsTAU8JVuzU4MUmpdgCg2YWdRWFhJ2h8",
  "key43": "5vyJoUt7u5b6RTsp8Qb1CJRaEWPUWJMXPpfAzWtin8EPa5HtDhwsQoZb1VGZBYv2qeShpckmkYsqyXr9SobQV92A",
  "key44": "3zJqFEJzBXvZQY2DbZ883aNENMHo7krrfDFj8peWFKd2k8uSZvSFMFmmtTAvJb83gL1FRcU7hSX34UF7Azr3PQ22"
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

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
    "Tnk1D6eJe5oNeG8YkWG2fHVGQUqj1sBdhTz6iqGUHPC213Hceq1DNngXJfGC1aBppFYgNjgG87fohh8gUCeJBRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ag1AZPNtx9FcUNRP2sgG4pzyMqwcXTYtraUF9jeyTX46Mu2qq6jvjP3YmSKbmheQzEQjSbMUsZ553TAJL1KhiBD",
  "key1": "4qfwgxYkwvsxwVcYdC5BhtnT6mmBaEDsAXtMZZAPFFbqCb4jtFVYdDWGWsMLYDwgbdy6UncUxVp18VGF1sdA7fr9",
  "key2": "5ANT4AKN8PcqGXNrxEPKjvUnhMvpe5ThZF82LFC6WteZr9T3ospGmXASGUx1YpGxAhu8sasH4Ab2QqGtRhjNyyEX",
  "key3": "3ErZbyNzkjJdgcsZZYL5x9ayw3K388j6iYCCc7KtkU5Xg2VzhDxAncz7LmZ5fg1nmZMid6WGdbBJryckew4bjQ3i",
  "key4": "4vaY7qNrGdH2Cg9DqbVcw6F48Hsin873xgDSHRQWMhCetwhSYtG2ySYc7DerR1b6mAVCnxDeB2xpFRvztSSCmBm9",
  "key5": "5WAeRbora11yAbZQ7ms2JNFxs2HKSjF8mtHFjYXRzzArC7aZLLiPBwQnLmannszPye11bSuFdJu4q2X4BkuUYaa5",
  "key6": "387bUp9KjAhRsVXmDMqBk1WpT7LRDJDYdGZMqfNSNVvGPzpwbfnjTiUWrvBzbBDGKBDPYdkFzpt2AKmccBcopFhy",
  "key7": "3TTWte2PEWLffJQKwjcHNaGYYP2NHFKyZyWsNJPWq7cTk4cr3cREPTqLE5KAFVj5akjR4MPGcc3Ne5cgidkCG65D",
  "key8": "2B71CZ74uhwRbPQr11a7Apd9jZFWmHPnZZAMoM1sJvVYUk1nKus6aEN5BoKKMmZtCYbt4BRAj4QQzUqZyJVgdDyk",
  "key9": "3t1bqvfmkDzcxagXnWh3exFh2arnH9FRPATKHxtRXobLGn9qiSgeQzCccoFnJca2J4DVKsYMnb3dNtzF3nejpPFV",
  "key10": "4mqYuk2uc9E7AjnWCHjM6wmrFpism3BwWVDqjSGLfCzxLRVE6gfR1xPFYK5kJsNiAWznB9gS5m8bXfYiaBE5tAhG",
  "key11": "473eTfTqWaCmcSHUS1hP8ZBAXaWow4c6DvGwHXKuNF3JVLn8pN67WyZiVhifTcZs79qZVvmw5bwdMJbtctFFbHnP",
  "key12": "WdRX2Xc8qKu2mecwo1tu2Wwsfe4JMqkbN7MxF7RJV9cT9YPWxKgYo7X88eKXKJ7JKKGX12m3wR1u9Ch8H2VfAz7",
  "key13": "bZCQkopRK94p5DC9zJY1ucQzmGQP1UDJ7LCfjqXUyk1i9LvS6QDVNTthm4QAxgAKm5qLN5TiYWX1nHwmnGm7dM4",
  "key14": "3Vovy4k5dqxRqpoFn31XsxEQVKuoxb5hym7gwZPnH2e9nftAPtyR68UqvWX7dah5yuRnRWRyMuSGUruFq3JNCXax",
  "key15": "3KkYN2noYJQ2UT7hV3XfoaXRAQ6QgCvg38eHY8eoKzk6TwhkAKvLUUuKRxPxqLcbCGwkYNSFUPpmNtCyfdnDXVH8",
  "key16": "3bqCGX9YZnoVJTdBuZiEohsP5obpXE7vivn4VcvYcsUUMHnDvsojJCGTdpBa3ud9sjV88dSS3Tr7M61qQgnMD25p",
  "key17": "22RjGzVKdumFXNF1NZpXHagUco8KKiFpAbWQNv1ULAJs7iurfzuasPH9h6UZ6KszPuUHgzeduwryWiNKpU9hFZ99",
  "key18": "5LK73pnBRr1PArPHADvjm9qebqSy5vGyQpnGM1Qk8xz5WXcUCLpPrS3epL45442rTkXVkBGBeEPDrHP2k3r8NAG7",
  "key19": "5QauteDpn2SqDkhPk5y61u46xooi8btGZzvyDitnaGZic2oj717Ewc9ocJuzQCCRkdte6nqrdr8uJZDBjHZfMrCF",
  "key20": "9RLEPfhpSzgopR4pxU1s5nUz5USDXnW1jYywbj3BnexHtexbCLpoVGPFKPZEL28TBNVHr312bRhfcbdEgLiUcJN",
  "key21": "jfMf8Rqg68xJJDH4DevfR7E5jia8yJ3A1Wg256ER5tpPZD4jXzpLs77yALVnMmdxRjr6FuFMxczhAq9f7EHRzJ8",
  "key22": "3ke4FVzvkBbmE74dJk43DtGzkSFuMTvkJLfwuyiy12bkWaT5CN4DeGH3UupZEPBeZjCqXaguTm13Y5M4TTcsypEm",
  "key23": "4W6HnmUVKvdiHxDQNwzGCBDyCicNZvPvviwqWknhENTNuCd6ciDRgwQJzQugrVzQxSMRMhudDFdBtTLUjr2B9Rxf",
  "key24": "5u7V7twfmSHSVqTJepGUKY5GxLiLSYPFNcoWLyAkinHbAU2NQAVpqWTF5VGFMAFKWcHjJ1hDd3Zk3SpJGJNFhgH1",
  "key25": "2ruugK9Z7axiiMuqXUyeJQhri985xWoC2rqGkoCgiP6waKh6Dx4WhAerHS4P3zmnJAMTxeqEH23ECtqAmWQ1pq4F",
  "key26": "rq29MphL9RxFD9YfvSVeTXyguvn4egrikUSJFcQSRQZQjmKyE7HVHfdpeyfReihWyVSQ82WzqYPxBjL8z91Qvgg",
  "key27": "jZgB1YJ17sfPZohScS2wfFPJbHHQDcosUfZSgywPBnxkZZ5FieTg5BBRYvDSUPqaDu2HQpZQFFsNUKqhC5JjEEp",
  "key28": "2Hc4MPd7hdJMia2bRso1bYxWDdHsBV4SNnippvsaZtQNoCd7CZWXNNmwaGXdrZnuW2TgbLNtnSLqqwNZV1RytZEB",
  "key29": "3EjM2hixvMDWrsHJ4gnks8sMwpWrRiwNpJckKoJDT6rGbcSZ5vsPytKWkwY3LVHnRCAuZq9wQFMMgYEq6BhoJUpj",
  "key30": "52FqsbBKP1Ru9CjXJvHPTwB1xJc47xYv6fSYG7F7gLtv3DPGx4uNDs71LLWppiVFtoqzxJMPepSAJyEm9J84fjUj",
  "key31": "59QUtV8kRx1xKjSBaie3gq5kF1DRVwUQ1hxNx6LS6MbcrSf4qrY9GaZ1iwoeJubBVuMUkgy2z2ojTngKbGhzb5mF",
  "key32": "3YFCRBjWG4hHcVeEwXcqjBRAZx5EwfTgNcPTCnp4wFN9x2Vm97EAQYeWcuHieB5pf3mQNCHtZdTCaKuVjoUNiwL8",
  "key33": "3byGtPY5SLetPjAT7abpTY3AvMT9KPeLazkdm621zpQ3tD9TQWiM3Kki9HN9DrWZYdBC3aiseoVkWxALYxxJeq9d",
  "key34": "3PGANVJDNPvf46MrmHjdDxpB5QLLgoPNqnM3GcGuSUAPiTem389wGYmnR969VoyXdhGXZCLzrN9oW13cHjpVP2QX",
  "key35": "2iQ33Y5SVJnzuWVi1uabdSbf7WUgsepdMoYsLo3hVPAQ6ZxQaJVrfjyhdT4dgW9gr3PUK3KRyDgotdMegDbAijRQ",
  "key36": "4StfTpjYdd4aWHZVYxpg1bgFX9MZvEhyKcP7e6mDpLr7mwrciqnaH5BH2e7YUkwQ4rAp5q25E4LHGVVxraE2HrjS",
  "key37": "3grFzzJ5ft8zWDgeyBNp2w7aF7DV3LJrAKuZfh9fPQEeKXztuyEfW6kaFFwbDHqFrpzahhK4zFsRcBJvid3THago",
  "key38": "2iFMHrgKifoAe3T8VGMQF3opagtM1h6SXKYGi2kjaqqGySqbunYQcBVGwFo6Yyu1NdqER9bHF1tJeqdVsgfmZoaj",
  "key39": "5kXUdyVAFLYvchxAUH4U7DDTpa3XnwckrzfZzsinN8yEAyMieAnxoASBsMUA5eYvwxpRbL38G52DjW16E9x5T99S",
  "key40": "4q1ZqA1PmnbBzD3GDxeFxwG6WoSxgfXP5jjz4NGarWAHAHafGnDx78zetWCVbKS8uegx4sXiicwTwbXaXQkPJc9v",
  "key41": "43MLbiW7tAccBSAtWYcfRCb6CPX5neotCH2YBoFL9PcrhYvJa2F4b8Et1J93eU41gZDTBFDC9TGYc5x3txNN9B2S",
  "key42": "2oFzjsBkkvvrp6tfJ2xUWgU7aB6XNvuaq4u9JkgsRZiXF54jKVNyQth4Soxr5niNhucBmcUnZjBrto9nfeT5iXgE",
  "key43": "53ieUHGUjh8hcEDfyjmnZDAM34iRjDDc5soFaV2gmo8ph6CMngxtrtCe7FDKP4nnqbr34Evs2dYX3pdiYwgXxeDN",
  "key44": "FXEHMR9hrap6dPR7m33pCeuan24rVHJDjZBS4zVkY6HZp4WqibHS43DuHu1fDgNkkfR76yusbscrXTG6UQFQzhx"
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

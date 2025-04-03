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
    "NF6pWayqhmP15JnvjvPyt7vS3aYuJ7M9nzAPFq6QKuv7PXEFbWSomkbo2JV5faYnpD7b8HMnSdX213FG6wbPNib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478SMsCThwXHNyAfSisisB1oojmBBLcDbZTqVwnLaz6U7gjoRfXcAj4yQg6EqoR55AyYwDzfyf9vNCJASzKgB5JY",
  "key1": "ia48sYCqYovjWt1QSjkLC4o7A4b55m482U6VXJ8jTeWZBNjwNSdY6JFq5ac1yErxwAk6PykgxBjqUCp7g9CAzjA",
  "key2": "JN3rJPZdjzV6DSCVVTZp8WU55ZkKtBaxvx9Fx2R7Um6Dx2gQScwyfbRF6VRJ8iPZ6dREYvTwpV1YNSbCJVj95g1",
  "key3": "4XS26X7wopfQm7SxW7uLukZPX81wN4eRFytTtE85LMUBbnaYKewtsZismgd3erbfk5yVXubaYgQizC6e2pHWF7oJ",
  "key4": "3RXRGLNkjVC4i3gLmirH25w6jByCRLQ6oXTazJi3XJ3pvGP5DU7ApH5bt1B73rnhyQWkBzmbL9bYTaMzrkYLbfyx",
  "key5": "fryPp6REJK8iGHwH8Ss6EDc46ktqPKm68JiwNnQM6iH14kQoh1jccCeXev7qX8gQ1LssJNSAEjHgJrLjz1La8pg",
  "key6": "3TtJzk5JTPzf5TzznaxxbBf83xV88G7M2gohEynJ6c4eYDxQ7tRbh1rLUWoEcN8M9aA6ZfghEsM3NkDLxBchyTVx",
  "key7": "WnntjbzV9n1jz6ReTHsKbjFauamfiRKczCeSQ5jrosV4CEHuJHvKavFmt36fpp1JuEEpYtdcJYKzPKXaebhznyS",
  "key8": "5qEbbecxxj71onJAGgCy1Ld2o8cL7eUCPPpUJULNrCtHtMEQomde3CpeMgmGUivcnCR6BdnncDJpSG7ZBE1sXGcD",
  "key9": "5QgyF3nxDsja2aP1GYAUck8BW4qQwKx4TzavEZmXWzHNCVFE8n1fpvBaZp2J1rSSZue2ETNKT1izTwqdj9YTmKub",
  "key10": "3adD1BYYmhiFPjHk2Cy7idK85ban93eTL9Vtpy6GNULDDCMWsRvxRDFiX6yw547MGzmUkCoR1Rtfonenb6Kax9Xe",
  "key11": "4qe84ses3HBvoV5beHmxhjVyMLhoRRCn2UjxRUx3Tj7cksmmZn9u1ws25GrLjSUTCUBoLWWYbWGiwM82AJ39ebZ8",
  "key12": "4KbqLSsnpJGPqLR5ENoXY1iWeJPFQnrBJrYVb6fNV8P3Qv3P9xojy53XfexgHNZKQYy1u5auz5pxxHExAsF6qQKM",
  "key13": "4HCTocGejJnqLQeq6RZJNJ96mpkomAUKevQttp2NWCCZ1Z2fxmwTXzpeyFvsezqG8JwyqYNKT7gy4HvnZqV6ibYJ",
  "key14": "M1oe3aNsiLmKogP8KujJiNsw6MwgwwyNF3FxSVAseyWnzaVJBGu3QvTGMXe86HvJjeuwPQ7jxg9DbUFWfcjUQVv",
  "key15": "4RSKsNcbpnx8sw57ScmUn7nm6hkVMAhqyPQyMkrYPJC3aebzjT9QifjzCaAdu3K691HznALTjgBXmbabypAydq22",
  "key16": "4aQjyFqdsTbtKh1q7Fdj655BBdWbf8pCyqGEjz13uPLG3VpCiL7KarXVD4bZKPuY4LJhaKMy8FedrM9CQfyAHqGM",
  "key17": "5y1nbHxENYc9sa1WZuNE3BcUQKTNZCykwethb8LUwRhPHskhdi2CoaxvHvGBjZaZkRJdsftYuA5RYSvcxHavcxQx",
  "key18": "4WAxuv9Y5mzJ5yBA5jcAVQQVGzVPq6jpSHjYbcTBpqFD7oq3TLx6u62YgvLNEwJCfsUrPVBfkYtnc6Zte7GUHaKt",
  "key19": "41X9u2wiHmbipMago7FxVDw1gsGPqeXAnXZaZmwAhXW5hCMfShEmpVZYofA4w4LkKVbn6r75hauAbWjmBYBGsbz9",
  "key20": "mZJZPV1giSs79erxLqLyihjwMMQjhbhi5fzkTh5bYnn5FduuG3cv5QUAgaB4nKpA6T7VT2oZ3Pw7egBWWbcMEiT",
  "key21": "4wVLH8qX4M8kD52qKmEY2r7HPoQXbp1itEcSyExe8BbhzGddWvHxg9MQByYc9YcgmSRgCYSBHcw7sc5mxTYXQzBV",
  "key22": "uVFJb9UCC5dRpr1PjWotJ49Fyp7SnY1xtzv3W1XUpQANNKRYveeFcDTVHNExr28dRGZ8yTPr5aSk9v7DReqdPrH",
  "key23": "39jcVc9hBhqHXwsvzuP4kbajkvv7piiLYf4qz1Vh59uyDLUk5ZXQWTr7NUqtoxL4uGmm47PZqSGndr2zT8nPhCwo",
  "key24": "2CU2vbfBaezK3LdyqZn4F7mEQPxze7QroU9cmvgNnW7a2svTpbSYA8V5EddF7DQv4TzGo4Yz7qNKD8YTDLyVTx2t",
  "key25": "4mFaLLwNV6V385KwJ3rB5ukLeERMaiBa33UbfgnsfDNj7oEzz91yDWUXzuewvhVXeySAfevCVFZhVCQyM4wHrDrZ",
  "key26": "g2kckxMcrNpm2hy3juzXGvqmE2ZGbMKdycoiDdk79xa8GFMRT8g2p99FnydG6JwW9gbVVrCG43hbDx6Bt77FGgf",
  "key27": "iizTAAAaL7TLTWTurNzZTHiijkuLPEedBTw77BJZWAXPbqsEhHqtneiaMybn2ZnEfs5rB9KS5difixrhFLHptBE",
  "key28": "2nenDhgFSfSizCYDxmVrdJXMgbPi1UXu37fF9c9iNfMXnUp9LDeEy5EF2Fvo9EqBQh2oaK7sHxzx7xg8juiEPXLE",
  "key29": "2APXXBQYTRFib7tuK7fKDEJzT59zsgiibZxw3eYfETFfoZxCEx6a4NuMJwGbvtm5pyLssQ1JDTaJLAMwT9jsVqE9",
  "key30": "fSCiwXtYobdGAqvb79EM8Pb1W3ABpVyD6QG38uicaFU9vmnTz4EU4AkT5mJimu2F8uEfcpUfASZ78wqAuKznjcF",
  "key31": "3Pae7t4pX29r323ykfBg3RdqrJ1reCiCu4HBjCLhB7QSVzmjCucbrMbE4g5mg6SzYfxXH9bF4mnncdUgEN8uUX2J",
  "key32": "3vFKFAvza9QYh6uQGgVxA2KMryKLxt8kh1RRiGQ3iifp2uQnBXzgCU1afSRcF3eHhSyXXDqpdsZH3k8rimNakuCr",
  "key33": "5qbcJNsFnReVanKQrjuojVCmNMdtgfZKysHmuexwH53nBnujRggvb1QPcq5e1YMGDoprXeNEKarmfDcQ7zEjq7Nq",
  "key34": "5T1iShjG3YNzuBVbz4hxaTYa9wUdqAZB2qp1RCpp4xWAHcgzsjKLmfKQd5vbYvBwbDYejbfz2NAg7cWBoEiujmag",
  "key35": "5XpVpvfzAawBnzzApdBErvL3YRP41ByPXfaioT2g8PExv1NAhVems8a6LrWQjY6ZZC9AkEGKqnKKQivEQnrdQMpr",
  "key36": "pyoCFNX4A9kW8HHP9q2j5yysbkhft7BL9C9kCTbD5w1yryS6yygiVhRxj93edtFotuoAaktit1hwCJ4uAw4eitV",
  "key37": "4xCZaUr4JuAorQSw9MF1kAF7bLDyZ1qjvwEBzCNecGunkARUnLT1LYjGi7yqaPjmLrpiLcjPceYYMzmYM6QJ3Pqy",
  "key38": "tEZK8tnYwXSfbsCJE2KPRxmAPCeWnYTuUp2tAcwL6qPxcy8Ak1suQo1LXc2T1tihR7weejbKx1wd8BzbAXSEvcD",
  "key39": "3j56cfC6ZNCDv3xJcv9fvsc4VxH5xZXfNH5KBzw8DpcKRuyPKqmPV5SkdM6yHyn8H5KNsbUKP6zH3U4ugt2Lgxnf",
  "key40": "1SSHx7ZFd6ebr1TwxnrCj1oXkmkQHwudiMhLZ3WcnkaVL5nunhrf3EjuWr3qC4Y4tHqpg6HjsvAhmemghc1Vyj9"
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

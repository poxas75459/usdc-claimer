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
    "2jBu5vfcdY7X6wqRbWgtzZM6yEwTajVrm8WmdASogNiPNcn4G6Z3orVhHtHxhm3FB9cBDU8PmUtMStu5AENP7oZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jBVWEBfCs2QBJunSj2MmqeNiGRPrkr6kf1ftVeDpMVzz78jHBd7LKj9XKr688JxevydNaxoWcaMXReTYhUzpDPg",
  "key1": "66vUUSpcoSpGD8YCj5dx8z8Tum8JbTwJtUMxDue1ajefdwmBcfYKUU9VspiQa3jqRagt3fFtMgMRUzvk42p7Rmk",
  "key2": "4kYWqX1sbDc3TXYeWczxkk44romzNDxosC6adooaPvBei2gTv8CKEyb2DgHdfij6PVBzndCNaUps6XTFiHkad6mS",
  "key3": "2KoyAuZfpbxGTccTbqs415QC6QgGQxFeDJ8TnW5qhpnCMmnV8iyXov8FgSmqY4Qb4QECnVScfDkFVUgASMVixkRB",
  "key4": "4cP2Ke4BaHFDgqEffEk6viCjQnykxeKtceZpwV6kAF1JH5SUdnYpUDKMtErGaL2mtaq4Tz8fjW34iX4a4KWcaENM",
  "key5": "43ZFigRuzVydqJmLfPnbnTCAamG1UxkX2S1LfVhCcE8QVUnBAd6tzr8rMfv62Rvqtsc7a2N3rigcGFvVgGjHkWdG",
  "key6": "54vCkQGDT5CWw6GiY8Ax6nUzgfnZa7Zvh4QMCQU5JjrSjU9LRryB7t6rLAfQABvysvVkoBmPWT4mFbjKo6v6mDeB",
  "key7": "3dRL7FD9jg8YZaAC53tzhk7wrsEjeb51NVjbiKrpEA2b6srv2Ly5HcxuEGKW84Yk1Yv8zC3PdwyNhbZS6arovwMF",
  "key8": "3vx7adxpvmoPpURCtygPhicoiYtcXJoR9x4Hu4DQpaJYZLvG68o4k2sZ79H7cD8smaP5HgfxTx5ceYKY7hj2qPPo",
  "key9": "4jkVz5ohoS6eahjY5YRDWTsZHSL8p5WLYTfHSu3cDTqDcpoiKF2FpLjbC8GAwCC856hAm14yAnFaQuhhkyJNVHvT",
  "key10": "3SRmHWUqqr6n4kD5tfPJnGV87PFyPfmkrXjxrkdXUG5p3Szh9i4LGfMhqf9e6Hx3nYJVx3qQUQ45cTiiDc53PxCM",
  "key11": "2oLMRauWTMFvzNa1NaeFmm9vxgs2Rciush3zyqc9bjz4FfYHf3vkBYhiZNbfsgP7hfW52ENCebCDBYs9B5sjTeBd",
  "key12": "5wHpP2Lm4rPCXA45PTaCsx86KCrS9raJZmts9cYe9j3XbTra9Qf64oAC2RbVtCNFHmhCTiP6jPW5V2SjsZWrAcPa",
  "key13": "3C1Ttu8iY2f3Wrgc28M2bGdw3Aj56LQ8MpvwN1PyDnqu6gX1UtsdAwaKvhnde9nvXNGysyohBduoUUuQJwPjoqJi",
  "key14": "4oqCYfiFzw1Yy79jYYozBC4cF6JvkzKF1SvQZJXN6HdKJDmA6iZu4LE5j5GA5jqX6KASUXTZqB8UcJE9xuAJ8u6E",
  "key15": "5ZJuiV9iXvnqKCyLp7ix6zuBVjC81SLAT54Y1afB8tM5Rnkr9fEBjyR691Drv6a9y1EdHj7jJMNBKyWNwfs9Vu9x",
  "key16": "3SeEyAEpeWTMBDA46GvqYzH6xsThjB2h3qP5qXeeknwwKF8aFMjrZtSQcTrr6XoyP4P3qauym3HvH23PstUG84wj",
  "key17": "Sy3RVVxoykJxtVhZEC3owVfcbxroH4Akmo3pGnyC3KsFFJZNw8FahyA3TN2p4j3np5fnPgSG3p9VUyR6hjKcHgT",
  "key18": "4ASJaf7ZwTdf5YKRrWE1GpAdBkDBVB8VZ1P3aZZiN3suUDbbFDELHcVJVYPCfRKzWeZAZD5rFy3tQm39f4rSMegp",
  "key19": "58NTd7ZDvGHa6jYioxBxmgi2Ku1fQAsuDmsFUVmyjDFpHS3zB2DDqE2KwPa4js2DevZypECr8ceajP1hbk1BdLkD",
  "key20": "5LyAqh8FLUCcXnuUXmzvaYhNHJYTowPkprHKSXFdi6ajXuTNW2mrRX1wPgfNa5RUv7TTZp48jZm5fTaJzhiiMqPQ",
  "key21": "yi4Fv8MJFLdAWA73nHdVscYSs3ZdUkEcdApfVNayLT6CZ4p6UBJgpa8oLNvsPTQ4HJwJhWDedTpWgL5tNFQGkEe",
  "key22": "2UnsbHNTMikG56kxF6ZR3Cg4XDHDT4vWQJo5zhSBGkXStqRP8pLpobtcyJvZRAKDaHyNUXo6XeA1fngtRpodA7P",
  "key23": "3p2pKPPnMZJSddDeiAd29mTnWgj2YgcUdP4TJjFzkn2LezZLzVgEYuKb5wHCRimpQF7HnUcs6vPgjejKCgXaKuNB",
  "key24": "5rvJ6mDJD4zVeFwQeyMmruQtAe2dG8xpehwTcQWfp87sQ6sNkqh38FBAErGLiukAmjkaYivDYAjYijpFbBiZmnqc",
  "key25": "3viUrAxcQsTraykTswDv3hndaX7nAfgriWVyu9FhxjhYt4ToA2JGZFsjT7mY96jNphd3fXND6ujAhYJ3ZQzjvaud",
  "key26": "2tDc2tBF94ezuHkipsoyVxTf7Tghhjq7jnY8E3PMhhBKvwHAD6fbFF6j56EE3UhU7BvFa7aKpp4ocF1QeErvsz3S",
  "key27": "o7F4TVuKdWdRy6xxMPKNQ3CuZ43ia6DvLbrHYqPZn9Hqoq1Q6Yz6FEYWK3RHcVGPaQWyjLYy1v74UjDUzNhAbkh",
  "key28": "5vQZZZ6RdveKM7YxFj3Sp9LZdXZZqonEg8Dyx72t78W5UnrbP2KbXWWC3qxfbdBordXMJddq25dw8caJKtaGCZiX",
  "key29": "3NYdNddHi18FSioLnmPWM4mFn2pGAYAxehC9TUJYXTvFNvhX4Q5Mf2cVKcRBUkHoiVBR4emYLFdHzmaz5WBjyvkf",
  "key30": "5YgY1MWrfcKMKXGPVMKZFB9bqy5L9toB2XNqZ1i6muHrSq93exPwxLjEdyUrVqA4Qs3rCzD7ZyaRZndfo8uo42W1",
  "key31": "UKBCaURrbUFcgvoMgQivRmuSwy6fYG5mKQLBgwFemjT4Zi7juJy12j1N8sqma8rxqctFYHDkHhnt8r2jCrPCo9k",
  "key32": "3Vd81fT4rAQkHeeAb89HMPMQMJ5E9yQqVwq9KiMsdyis5BEJbUdxyQS8DE5qNDWNqmu7zrXTBC7rNbh8LFCPnwPB",
  "key33": "5fMrnjDSKAhEi2uL2tfsSBsXZU26SBPzowuAwYsMfB4j3e7ETwxe96xyJGsQWjEzfA8AoD7yL8ATxuUePtDejzje",
  "key34": "3kd2a92s7EDWFyHyZn76ks19v9WSAWMWgKi9G2rpAWrtMrhJUmd22NSHnui1kQQjSjpPt9xaDvgHMJN6LcvsuxAi",
  "key35": "5y1EUZBrdYcCHUHtrhmVoZ94RtCBZhiSWMGKyM5QMwh6QFhMiW3Wxzgs7p4jsaUNteBacjKxarGUmbT7jpCQvmzJ",
  "key36": "3SLySNAZcms15onQP8ovsEJnk5htQTeLC2JsmJDs7hubgXfmsQRwYZxAo5iorjKQfLg7R9esJEiGTDDH8my8ryfo",
  "key37": "3aC33sDukCbkvnNGxgs5ry1L699YACnFHYBG3JwkRPZgiDq9yycfkTANxTgPffkHA5mAVJ8Hw2nMgBtWK5jJwigE",
  "key38": "5cDyvmL8aqZS1YN1GKRG3mBAq5t9uKF7xrBTFSQyrKwZuTfFYS8orPWEQF8sBxUwiBnHaCb9vd8F5KdeSqE8weC5",
  "key39": "3Sx1XYo8bmeEnxgir7Fkh4VFJAyFaqGCavxDGzsvp2RbVncpGfGawfHh6fLWxN1AZqxVaGn22KSoWpE7tmcDDWJ1",
  "key40": "3poV4oEGZaeWAYVeaMSAHZwHCCDzF2fmRMiFcGSmQBPdMtWkpnfAUFi6Zx2y9WxskqbWZe7XfqWm3pjiwe14FgD3",
  "key41": "4LLThL5D1GnKZu7hFGXLHoWCu2KPnSrXJcvas6qfLP1xMvgM8vdrCxW5qcvf7k61zu3p3D7Xh7dwesCqFTHqgxEx"
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

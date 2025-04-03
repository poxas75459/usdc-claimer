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
    "2FQ4MNeibErg2QZvHULjxdG2dT1PLhU7kBEt54xndMJST6Dw3eW8x8Rk2wXct5eCm1upKKBbYN2z97pghepcd51P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJ2vjWESNcdPJwJeiJLvyuJQBuBvENAEtrRKGXiLUHpgSNQ77s1ondecKVaZDGnFzfgvjuC1ZVoBerAjN6VoHWp",
  "key1": "2TaJKp4AKMu61beRPfec6a3m1SPbS1YhgmVkdKKCKVB5EbE2SERKsXtzrAQfn9sxutjdRbFK4m3Vfsq4FDAfJGDq",
  "key2": "3zCv26CNLFfZHm9We8y9JJNGV6wHfuLPHLTDbLtpZnsk2ZiLHd3nLVppCmmU41poV3oKihdPsw6okPSc3cA8iE8B",
  "key3": "4FFRD3vpFWXiGJXbswA4ifLiAaomTHzpqwbXtP4YE2ANUkEwyfbbRqqH9u98qHhn3QTgaU1VhPLFahPKDedaSyu5",
  "key4": "4Rb1csACuvKPoVrK5tV3csvXnjnkUGHrAYJH6WQLzQiUYFt53yqvNAWxAp4QYh9MM4pFA5wmBhH7P7vDkJCZqrLo",
  "key5": "4eWsDfidf4bF2xd2TfbNWwfRE6H65FiML5DJothyG3SGdpHvPCMrJ89DhdNfRchCQejmWmNiYoEvsJatRjJVzLDY",
  "key6": "665oq8dD8fujpye1Fv1KWnBBJrY9d4DJx9rErikL2uptaTLFdBzjmnxkezU5R2szck1bYuRqrjgd9SPESjZivhBD",
  "key7": "3qhY4jWk9Y2Y2pqJUEaquBH23r3UnC8jNR22vaoMkRGw9YgDtKK8DcEEGddDGLwjpvvPegjXtwGgLGA7qSstfYWk",
  "key8": "5KDFZ2S9gDM21qYow9Q4AJfn6BvvJNsdn7t5KjQPUDcFYkHmEBh8fBeMLvrVwHfxaUpdCZVZwZYoXxJReFZJrmqR",
  "key9": "2PjF9mk5viwfa3SxCEhnKtYMQHXTGuHk1ZuKyonrmpAzcXY8AAqvTzBC9q61Bek65e9ArCXWtD654u7G6gYJxumw",
  "key10": "58hSYiAGBcgeEPntH45qFdru3QKVLRjoENgiAFcrYa1uG5gwomX429DdiCN3mmb9e4SfH8uP97aAuyN4qrNV8Nkf",
  "key11": "2QFL27HTG6enuRD3saqezEwHhZpAxPUPJX7sj1kQN6hX6CHZr4YrAtj3RJRfaCFiM3kjVBMaP8zJn5YGYoe6RR1g",
  "key12": "5JyTfknb76wBjbZymZRp2YVAHqgbb8cP3UXnVfoHBxA17gRFakDEsuDyXiADnbDvxtEAEM4G8iRLzx7NhVqy19tT",
  "key13": "2Tbtpsn1w49mhaibxBEh7fBJEDThuWsje4HjiK4mSrwmXuhr9YaebyDof5Jyet6Jb7SbJyHbZJBAzAmqinQZvvbo",
  "key14": "3p9kYboQYirqtwjiW7cyB1yPfaJ8CjrDwN3MjEA6BoWkZkVaGXRsuEnaj4nJArnqMD9BRtNySR7RvqG8x7Yrfnvh",
  "key15": "4fi8TGVnubJBH9mtiCtyxgbSZKUmX47uSLtCBgB8gkNCZHPUNEHbiHfYUWkPoPPjadqsGA9uCubYoCfFkpUow3m6",
  "key16": "4bqAxaizZJupfwEd8iiCwFEmWdj2kDNEUyZA7JFd5mdk2NtHyMtVt4LrjtKLBAmSVFK5KAnAUJcsHfRyjwUcqwZJ",
  "key17": "4LEoqtXE5Jm868agSEEdi2zi6ssx3q66EgGZYJWs4VKbrtF6rXkvMRZLqsxqLnjH8JB7HhUkJiGDKpzQUTUyBpS3",
  "key18": "4ebmQmjnonzhNunixGYLfoYb81EzrYifXHjrtFWDSkgH3yMSiSzhgeZkeviEhoVb12E619na2GpFkfCv7hbUdPnr",
  "key19": "3uja5ur3wooU4LuK4zXpjTxEgKMXJGGrW1MsCcVDD7kjKH6kgKxYQ2KVs1SrPaFs9ebVsd13wmTVBHdSp3ye8pW5",
  "key20": "PNjBM6sqkQgqBN1CfFtqCqQ6jm9pWrL79nPp9AUX6E9k4YuehyMx9Jr3jdvmt2YSTBKZJgUiR3y23hxix58dPbZ",
  "key21": "5vR14DoTD7FKSMZVrVqFLovP5KUJ3aQPXSyx6n1QiBJynzjbqvsys6Kryt4SDLmjzdCEt34URmtyyU43BjMTuWjn",
  "key22": "5iZ6PyA7KK7pX2WRgfryZ11WfJF5SH8x6F46fjEmUVVms3Nrh3uQKKYvAS1zB1UZbDeDPzBnsrZsi7xdLBSPhn6",
  "key23": "3RF3QGJ9s7Gqw5z8Qh5j5URoX8MvtAXwfeMsUhtVgU4bEyz7Z4wsjuRHg8sU6Ag5r7u1jgWggVprYuX94vKUVeGg",
  "key24": "3UqkiBawQYnw6tRcZnSzdZDN9sA7Dc7RHUNSxdHGLf5pyXMKqX7ZCMr9XNxakUsqkEBB1UzKuY6VupMChwXMjYPx",
  "key25": "2zWRS95wB4HfVerBuwkpP4Kc2N5iPvr3htkmr4JHzJ5quvpFsSoLQkPTWrzJeqjeHqiEGt59m9jfbZDagXRMy1Gg",
  "key26": "mGnYcZLHGh9qMYVAKz4UMu4vYn5XtTMgXJysUrJ12RDw8HLNR2UnUhVLxVnixkZqeqgDW9qMHMyvF9axzK1FmDB",
  "key27": "4FPRoeCpT6Yb2gfXZg5w1fXqfprxGsERBtLRvpyzFiF16J6PSh4EDAgddWmvo3d84m9WyRmDLMMunvLqWsh4x5wR",
  "key28": "55zFTHmpEq5RAwU5EBQVpBHkTNXz4jsP23DtdMdyNV7ACWwfM6CQsQ1j21fBSbE17SKtAYgkJkEHeD4GDNjEHYF7",
  "key29": "4a9PGePiB12vPJfbYAQf2yNrLkBgdpvQEWyhKbtWBRjUiEb3tahSUp1DC2EPVx5cmi2mkSfBik6hgr7oQwYioRLi",
  "key30": "5wkB89WeUTfcSEAJ1uSpAGnGksV4VGAcvqWRSPe6Uk1RmvpgTKb75pjf9bTVxQ1cRotjHafEv7AwD53dyr91mx44",
  "key31": "3mE16ZcTDyDvWuFdBLoUf1PBeDz22es23PyZXuFpsxHUYqYNgjZexjrZEtGRcLBvZekne4biW2nQggV1ndN2cf3z",
  "key32": "v2YtTCdE7s1ayni5XZYWhcz4GNrP3n7zQL1AxHeYmrXNWLPyz2CyGCFGKfMsPhHbfRFxAvzW6u1g6z9GEhCPqk5",
  "key33": "v7mMsJQzuhgLMs1P2ZwdUNNGkF3assWubY6iuAwxFK6zHftR8GrRtkrJ1CkCXbZtCgknu3DhWJfyyNs8cQ2DLeq",
  "key34": "2JreZKjEzDfwe4azgqu7FejeRAKPTfFge9GaA7D7GXRriYwSErv8JkxmeBNfSgAi75yqzswXC6Yk2cxRBAY6dqej",
  "key35": "4ZWaEVhWw4tK4Hi5ju1B35kqtpo27hkLVhMsHz82PKCrRNie39jbWHNuPj5VeBCP4AC4LNATCZtUd3pXZXWppDC8",
  "key36": "4KkKG9JYrZXhKJbyG8G1iwM45Vm8mCdpTpLwRmyY4MJmYmcFTeqHp6xB7WsF3EhNuPUg8e143va1SfiqL75jmjk3",
  "key37": "xXRiqkFTSBnEu9EunLGrqAT8aek93ET5RvdtcgMqATH8ogSzQWfKkRuouD4RJKsWhi8vixF9KkfJCcMaZ52jpQG",
  "key38": "3B6GgQ3qy687fNM9Q8Ti7KqJeA6hA8TDbF9vBUSUg9VojALQ6E6TmUebqoDNbFig9y3bixinL4mVeAkkEZFqsD75",
  "key39": "2wqhuUq2dxjEKinu7pZ9nNaZbhXtAQyJbG1Negi9Dsg5KAPYindBq9AGSrX3PirfPgHUdcVFjABiRtqqfkUCXPyV",
  "key40": "5d685cahjmTo3rMAd7sDpkG6BhV2ijACcvVDQtDXXgvQwPz3fdYcb534c8JMQ7XekbBpo1SuM4t95etJvKMbL49W",
  "key41": "4SHaS9UfNfR3jRxwSoUyp9JHpUjJnrpYB4VdB5o9m4HqM9znxefrvLjHe5McmCMgjRbvqC3CgHZBFhFJtQL4uCPU",
  "key42": "4CXDZNhAUT85P4ZKpqmULw8TuhSht1LrByXtHPpAGfjRNhZgGu6pFsKXhV4ayfDBFoEA7ibPDbJWsMEgNm9GpDAo"
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

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
    "ddBxaCQ2iWJT9LVca4LE8f4m2UT4ExfMrK6qSRA5VaoWSbZ8MLCzZH2nMm7Nzz5gpvFD7b8pXVRN6yuUxLaKC6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5LgAZTDMF4E9dw5iqWMEA5D1ADPfc457TxsPWZEUNpKf586YeRw9VWGboVVjL4VuUeLe5YBzXyiKBC9cNShPGZ",
  "key1": "4VQKRAs71gZn2ZXthy2gtq7uJHieBu5S2KU5mY2J6rLYNnKo7Kz4juhiMnnhA8Psqn7fbwFqPpAgcJSSMmDw4v97",
  "key2": "64dQQomA6iEJzr2FWb9cZs4BKE5SbzSJiT2nG6PtaKTgAkroQUEQ4jC4mkSD4g2MhuzLqWvq8mkWX8ywiRGv752E",
  "key3": "4M48aBZDPVgLcNRh96uDJWda8jpFnMaap61BjRXGTBYEbXhSfLn2ZGvCBTTCggmPQkw6FX3uCkUa4oa4kxeRHfDk",
  "key4": "5B4vvXaxN9EXEqVyCaFoUbaeEwHpJ6fuCKbcBkLyw8sRLbFPFdGevtLUHJzB4c3HAbz8BswkX52mxr8iTmStZ7HE",
  "key5": "232X2fbnKTfCH4DbQNEqZMnxQhxfJGKY3gtBe5gNRJ9TmGJq5P4V99TqDQQAimGqbMbv7sLvwFybEePKq6ogm75r",
  "key6": "5cw7ozqrmhwmsTQaFFc6RoL3kmNjPjW6omjWZdTpfsX2dcDkA7DBgx5wwgpfJYW3ChT7yWpLP6W4hb7BRLe1pzhN",
  "key7": "5ue9g3bLS38nsQ13NU2CaUWPJMZuwD29efE7YnndKjq9g6bDJMjVE7WPgAxA85gKaK4UoJWvdHpTjuLBK7v1pfcC",
  "key8": "NUaxgtYrccozk5Luw1D3dmUEMLVW1f4D7dovB3FaoEnJEuRjE1JjmtQMZkitcHDB7PwprT4SLqo87A9U4fTCyoV",
  "key9": "2XkESu7ZzrXgTgCTXKPT5wvYJ4TiRj1TgMbVAC5RQaQGBrmQ7meHjrUMEjUjS1fqj5UE5nNRf88MiiirxMqHHjG5",
  "key10": "56dCfrUNsvEBkSahGAQQCzF49KARxab8YvrTzJLGCwqJiMvMQdvfSXKmHBDq6PRJVZuHws8hWoMCsVB5vX3yYMb8",
  "key11": "2gzxkt8Ytnr4P8UnG46sCHekQthxTWLKVKKGwemN3vVHdfUTM7VqJUnVovbMjSZbCpPDBLD4h8FRZPvfpWMcUqYi",
  "key12": "3gDyKq6MiLwVhqe8VwoaSvhqcvYxMPCoqKZAqmPfo3iPHwmKj4CLjc3nJdV9KuWVi4jwfFHNb4NDFhAbHfiJDk2U",
  "key13": "4BNFU9FmbkqCth5pjqEg5is2RpC6zJVwSiuuKWc9PLmWo7KNZZXc5bVQzTjZGNLwdFpNy7qZ6cpPntLagYZiNXLc",
  "key14": "5H5cyPuHZjZdMQMUqYSpRoYeKUaZLQ3uSii9hJuJDXaJW7N4GKMTG3h8r33URHfsN68eM4vmJBij6wPgRduBiy5X",
  "key15": "ar9uimCXgL5jMp1CaKqcRKjZBaPwwUxkMG9KWAKEvh9xZ9LQEQYWdpQBxzy9sdqMcdNcx5SZjuRnu35wdnrpMPm",
  "key16": "5RWZJWB8YbnLvceHbsqXdPWUPEY6ctq2FwTRPY2Bgi8eXfhbPA7Hrvi6Q7Ae6MGYb68r85HAPYiGtwUT1jXdMqQ8",
  "key17": "2RCwcZeBhT6DPTCJwx8Yd7W9QQfa6qChwg9djK81v9mSEP8pCGCVYobuXEdruXeVCZLaeCkyBYP1n5QpZjzPzsYE",
  "key18": "5vDsU1pDe3jyBrY9FGokeJMMcGdmK1e3297KH78uhJcW15ZNxNHwBk6Z7ZdHVocnKFbygBe7cCdH2vzz6DSowSdF",
  "key19": "2UwgvRLtoy21TGo3TtD6ChwKNrtrST3MjnyhuQDrRQJCSd13KxRzHHavZw762sZDNVF3HNh2RP1zvSaijWUX7pD",
  "key20": "4mNrizoxYxjYWcpqhz1C7m3YHzf4zdwsfNNTyRvc4vVKsKeufi3Q1Hp9MghYo49ymYqsW6qT279MJosEW9eYsTp9",
  "key21": "5fqeBLEd9nnpvDmqLhfcSnEwsNCUUDXJYrbHkN53e1oLAGhvSvEehHZcF5MJPZK1MySoo4xHB8EGTqbwAU1bxQCH",
  "key22": "5sQNkeUThb6r3zsByVbW6i2tHh3KPQb2rjNypp5XzSC8WvpN32Nddo1X7dWj25scrYAvJvjpbhmCqUb5BYEafE3k",
  "key23": "4EywQ6qenEveHTpxtfRHsvSTx7uV7oL82rbT9cUGz6McPT18pFgzpDGCRLRfSAo2vd27cEc7Ujhsz82gKJkgsYLJ",
  "key24": "4ckLfKQBxhpz2Y535gVuMe4Hzi4G6pBgWKVpkveJ44jVAmUHFpPnqcNyFG6ATh5g8YUu94n2yhoLv5eWxSjsvcKu",
  "key25": "63yz1u9sHspsJqK4H4hpFRqgYXMBE6ijmtV2f3pniZ4KctD1H2qKhDmGbNCgG9ovbtPomK1gNR6WPRfMevYL7S69",
  "key26": "5ikQ1zKv9NT18Xzsoyc4WNSZtdwLgeBNoM2rBV9XM6NoVfV741RAxJPWjkBNAFSe3ZQ38ytLJKnMSMopKZsvDQqo",
  "key27": "X4NKVasLwoQa7XopQ2fzm3epqJi41jtLPuHasbBcVZEbwjwBWRvj7gLk8pp5N4A2kcycnzRTY8eJ1cPXRAFdA9o",
  "key28": "2absbG8FE5ZzdisRcQTY3p5Nxfj6nKzU7Btm7L34L5t2jvbSYiLsG7etqX8kMndxiCbz8jK4J6AVxMdjvE14UFUA",
  "key29": "XYgq2Ve9VKCFi3K8FVJQyDo5duf8piUe8DwVbs1X2cFgVMgcDRx1mmVV8jVLzeGvwNYfeprj8aGf2iJfgEtDV8q",
  "key30": "4MsCkHQiSBJNPW5bH8PoG8yyaUMb2HHoc8UPDX7jhPNTkGgizXU5JazWeVrNxSYRs23JsjNz2gwjNgYBwm29Qiut",
  "key31": "2PHytFQnVadFCSPXdd9hbNLgccwupSyNH7MQUK3uaB81TV5bbwSPKtKnYF7AtqaiDrkERnRhFJCEKWPFfxztLNtf",
  "key32": "3xkcKBq5q8yPijEZdSnk8X7YLaimoeKL8eW3pLRm9ZUXGX3TuHGCMjYtp1KUdiR557zrrFWiwamRNoBV7Wjaij9K",
  "key33": "2PRiCskf2UXmaNKk4vbCUafs4Seeyw2qVQ2e9S2joGAJNXJbsHo2s5veqvqGNfHRmC5vp8wFDUNsWt5wBdCQkTHX",
  "key34": "5obcWTzjQVGiEpxMctLQF7AjA2J4GrD1rifeXGZQNmQXqurTUjtWidYQUHPAzTNSLT5Um3gwq2wAm72GaBv6GxGB",
  "key35": "5QpUJ32DjDMPA1Y6Bz36dM2wDicK2ZqfrdguwDeW4hDncA1GAEszZrn5WWym6p3t46e9PaEHMKWJxfzAbg9DXn7m",
  "key36": "43kE3CXCnGUQPdaYq3t2FXA6vktCTyoxi9nA7fAmyPYpUDWw6x64xtStxXe7B3icNihsQN2b5WaMraDpQBt1zeCr",
  "key37": "4d3B6oS3u8MFa37Fod6hYiV4qsN3zMVPDbovBXCdhRBwd5pN87YNM8565LtGgzRUUqNDrCVtSLDwetWzz1Uu9sB",
  "key38": "2PUywJPHND26jAeZWXCunQK2mFVfaUcCdgzTreLYcoDyDRdJFYTW8sete4RM3iGK2uX3r5xpfovrJ7qYRuf2aATS"
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

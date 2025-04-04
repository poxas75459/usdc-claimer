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
    "3FRuZiAphLfC8unjkq5Le2zHXphPUUi1UQjuEouGuhdWoFUjSi3kVtYduGswq94CY1nqNDsYJrEWnoVppfZNHrD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WE12X5jWErVAoEJK3b7PQG7Fektqq1HpvHdiKc6tqjgX6N4UUJR2RWN9FiX563fjCM7Mp6Phs4u77jmePJWj6xa",
  "key1": "5osHqhiTGiPbzMfRJ46axq2Mr41Jk89nBKUuNUALvY7tCkqY5B4TwgDxkyn7MCJzahJm39jYCBV2fPMnBgMaYt1H",
  "key2": "sYxjjwym65dWoJvsGGYmdwLxhL6CmoZbckwiPM4fE5AUmgzuSKksfcv9zWrGX9dyrdwV5RMhgJ5Bx9RwxC4vZay",
  "key3": "BpjeLaXw1VfgLChoSfthqerkg1y4fxzmbTrJX8DNuvnjd2WRwtEDEx1qjzB1wMKoHCnB3X1N9TAfNTDAFrquwV8",
  "key4": "5b5LznV8XXeaBQ5dapditDy4cEwrhydnk5hfrCzMA9HLCYJgiPu6QyCT4rkZucG4Gui7wmNXtw8qpEqs4XWQnbhr",
  "key5": "5jaf5wSAw1i78z6tHgQXh6JELVdEREFpw19jqcdRzep7Hsv5ZUQkajqyruaRxMv7JsPK6PdWXsUcm5fk5g5Td5Az",
  "key6": "zsPXEo4vsgjkZuVvU5LyePfnMf1RARx7tMydUukuuwBH4VFZvcvB62e4DTTXUhBTM2xwfoeV9z3rsaKdssKR8Lj",
  "key7": "ojb6a7WV6sykQZjpzwGV7iN1Y5mRFKoPaZAWn5g8aqcxbpzCGeRcHphoDhtt3VJo9EQ9hgAM6H1f6VGeipMXXzj",
  "key8": "3KdUS4nPkczJ9sWYMNdzN7BuRg74qL5WuD7Dd53yTZvkEmkVDqptnawMytxtMb1nFyV4MuXvWRniK5YcN9go9UGA",
  "key9": "Ku9nQf4xi8P42eCqiY3oSMiDdjJt8T7pn2RJiY7xZV8qMppWTuAo5zTv4imUTgawkcULKp6oEgDMvgQcz5aNX7Z",
  "key10": "ceyuusMTUd5Ex5LNeTzLPBq2n4BQ6oaN7xiK5S32Ds5ZH7wUSR6WpR6vHSP3YLcECRNvFoWnUKDMiUYij8JmZCA",
  "key11": "3YbMHKdkzRKjoVnntvVfFQp2Nv3TaQJk6eYUjFb2NuRYtv2kBPL4dFCozUwD7XaniPRJptmCCzxyL5tfykH9Eivg",
  "key12": "67Jfb4xarqqCb3eveGttQevxXGmrrHihA94tfemVe29PLCv8QEkeyCPGhZ16snHUuhu48MwPeMf5R5xpjU7GC2Hx",
  "key13": "uqzfkoJMuUvoTD4UJ7Hpx4EboxzhnAr9FFKeUPyTjggkNTwwDiUKKxa3ryP7bkxWQiEeUF42mM4RnrGajm8NBqD",
  "key14": "3xFrqDZQZQSCZP8LfP69jpjt5SbZ3ViSvxQyDgsnLp8Azf4w2ZKtDg1wUQP5ARxNc9tZisuHqFeJqxPkLpZ8vFpt",
  "key15": "26AxTXwm9uds2vHeRdP1zzHp4HA6nVpWknBP1fBbNEzwN5BuMVfw7Qxicg4Wd3qoUahpQzpG9tCPwvVRn12xRQsS",
  "key16": "3Mxk6iNPcDb1kFMhgVWvX9RGXC9io8WyZn9WNHpz3Jn4787csCMBD1dysZapJ4XwkiWDPZv3wp4LLyATq3UgQJUA",
  "key17": "5L5Bfsu4TzBnHsnKjhXznWCZz1JTXi4iF14864u7vT3oM8P5reH4jDQdEq6xdZ4agpsaYSYKRwTsXwNL6uwqCfsX",
  "key18": "4QPciTeWQaQ4gXsoJweu4ywmm3yZnkKN97M6AtkeVyVP4aEbUWxacWQUPpNKvr5kNFb6N9D51pF6mynKGZFxaAhJ",
  "key19": "3jqMAaiFmuzsuGytkNMCkMLtaxf3D6ETo4sLfQMscvuy8sRqHP58Brr46uRT7ErNitFXwe4yhQ6jc53Qgca71S72",
  "key20": "2PR31cETefc8MNjNJ2XpKfNAf8SxezfCCZuPGj6n4uUCT6uonjKXpeMFsdP49j5xHsJY6MbQKe1P5EyaBfWfi85b",
  "key21": "CsH9wwfjxRpVgDJL5yxbueVavzQe1rAjw7X5om9BAsXdHFGqXKFYgr46ju7mHEuWqDadwM7qdCEXK8mhb1bYcFe",
  "key22": "64m8tP7jYgE8yx5fJnFMfA5USdTRCpcgxGJWFM1VpkP38jgvaYUbBakFtASoHKQane9Au3z4j4BwArn5hGrEnV9v",
  "key23": "4iEjuZVA7GU7x5MjNZDm5iiCRWZXqxpybozedPPbwTL6MUpSdqTBNDwERu3Hu142DBCTakqJCBw26jtkYviHLrt8",
  "key24": "3ZLVQwqc5XM61f1YY3E7FiDHhnFE9Cs57m49UKYjDkfkWpj3wEXUVi6gXo38NnhCeJAd1EjBYNa6msXYFD7kZVqu",
  "key25": "4Nr4NTM7Wab6it84cA7yxcoRQbeMannubSBT43vqUdQXPsabQ24ZBaJxBnmL8YCUP9JDdGHaEyFCKMKw7jFoeBCf",
  "key26": "2iUpcDVMPnWoSu18F4ahHcqEU66cm2K94bMvcn8w6djSr1eMv4RQmW2cTBLcLDEyZazWTTdVMJ9mgnyiyMHRN8ib",
  "key27": "4grKSYcuohT4QLyhpdVTmZp8gdvN1jvrUsVzg76zFVaP9QcozWobicXxp6cbxAM3Qr4wpRCCxCkdPxka7AM3tGEx",
  "key28": "4Te2L7YNaXCnhSGquLjr6m2oPRhQiiB11ZtCrmwzp3rQZoBRBPiA5Z24bxZpoN9vpUkipja1TJQq1N6QFscZsLab",
  "key29": "5ncWSB35SyoKYHAdAB6hEaiWpMd2XvpAZkqp9LBNGnSCgZ5JNNFbW4aTJRbrudyCQnd1TiE71dxoux6VkAaqo4V7",
  "key30": "KUprFTuYK7w63nafwi9LZcKq8UDJnZHqRmMXamh3rgLdxedfLvDA9qSrEzZtFq7TLWsASHjwuaZPWSLvwxhVuBP",
  "key31": "4yriorxioTKuNH13j79jv6ixC198FMvBcVRPMTqMEUbXKZVZgnWFN7VaGNPpAsFumLANd8YGjKgiRx1qZJRXHHXd"
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

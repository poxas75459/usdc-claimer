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
    "5LvednEme1jUUqqmdp3DwMnVqstGBLSaCfkNtCwoErZf6T5Dnn1TKtdv1QQn5dbF8e6DdmKbMTer1gFVF8HSk6WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XT3M7vemJxKrcBtkiV9YLfxjMbSgnbH3n2LGAftJ4mWbaEDzzGBUu796vYGqNWrSM36sEhHcS5VW9ocVNpMMKdx",
  "key1": "5SkKD9R5ZPV2hQv4x9GhR1enEv9K42b91HJBYcECiUP2iWc5bZkFHkLFkndqKPyqK6MUohtdHsZRqz2e4LSgptN9",
  "key2": "23FXt6NZM5tLCSnzRn2XJ6HW3qHp7bB9qEUNg68XSuKR2GvEYqtLEr2uCWGDbptTHAZiui2EyWjFHEcKnUCfzeZ8",
  "key3": "5dycwaX5tv1ukKibeCa2DwzirXRzSNALK3NHnM1ev4EuCLYUYjrFucc9Xj7Psoo34H2x6QbVEK8b8kGdyAxvnJ4T",
  "key4": "4xgmuf9qEtVxhDjjjvJ6QMYLnf59RBHEJB9b8BUgqF4onowKyhbTJYfgiTReRUca3q2DBF7Dvxg55rF3S3eZpCg",
  "key5": "3gd1x7SZrEKncouW2sfoUGAHAKRSaMR1RkE1wScmts2FXhV3bZLT52s8J3zjCPFzzWiwQTf8ADc1H2oaRWuxgnyG",
  "key6": "jDV9Cf7SLDfYtahmAeJbsMr7L8i8EpRtparaz5y9QtnmStNvax14ye5yEEkP9za4gotGMCyjcXGhBwoboroQUhA",
  "key7": "5DeMADMebWwAXtuQWFw8Bmfpy3qzw15yvssiWZU9PKKN9Fp8jBkFPyKfrYLxLmEnayMTQEKnt6EwARBirugT8iK5",
  "key8": "2veRCH4VwxZKCS762UkPQtwWxfpDyJwBTmpXcDhPnQuuSVAqiKD7zZVTGvSL4DW1NgeBevu6Ex2dbEiivEkHVzmy",
  "key9": "3oNhgVFYXGEdhMgAYmi9ZruNcy7wrmL3UuaHBEzgGjY7zQemuDADFpQH1LSaYhCMFoF7bhn4SXdCDgP2ki1DfWz6",
  "key10": "2ceoVWa9qDZ13MFghEMj48miXtZWKFhDFSh3fqFbeUaatx5fmZAYkbQsw4iGZppXTgeF4eEYeYtUnNPWHjTvDMxj",
  "key11": "3e45Fd6osvFdo6dWPQjbqyAt9V5R1y8R6Q1sKoxXxvvvzeb6gq3bGfSsX8CWzMufRBLa5RwFhPoztKzQyeMQznhq",
  "key12": "32rjcqq4ebZCgMmYgR6Dq3Wpd3Mi6wd9RuDChFqyooq8SAQKRP5hkYJcZXbr6FPFxhxjK84MQ2CGZ3UgAWGkyLah",
  "key13": "47i3DGUJpos4MHQ1vtgwsHejnKqm4DEZC83qmSY9kDfRMzDEQMTwjehZhqsPGH8H698mhWeceQzTRw71Xj2PWJJo",
  "key14": "7o7HTj2hDrmfwH4pEUc6UCFbVKWrhVTDUgVq1W4cBRtV4PmhsjJSYKEtbmyUgWYpBmhhvyUgGQXE4snbi9zR1XV",
  "key15": "5gPWyG9c27S5CbndBjBycLzEron3EQKvPY2eyvEbb8o7Vp7GkdBbMUyM3rj2G3JcMTmYt4PrkcEMCWfeZMmh4anq",
  "key16": "4EQYivMMtU6Yw4ugeHWazEfTcKTfWfzo4nnLFiXNViRJSXfNF5eeczxvTLbC3HoB8mnaLFTkUVHVCa7cRoQv9ffy",
  "key17": "chuaAGftRgtenXweb24HSxkMNJ8m47UEZDLKXEk9449TD4VEs8qHFAjMQnv8MXYo5YiBzBVL9CrXtpGCaDiHiDK",
  "key18": "5sukwLBc4NCNvHRSXKr7k1Cy1Vy7bYtvoa9URrgXm4eveACC1ZfwSMHjcbyNi8hLPmckVNghT2qQhU3Wr8mJnucU",
  "key19": "3gCLdgpjgVzxnQWVbqp35MazokxiEWmf28jrQDpyspbCRy7CNAoYKwxGJGskquEoGr5gao4AF8C5GWnBYrocN1BR",
  "key20": "3tHzvVr2yrLP1d3cRedGUhQkYU5utMvdCgyi1vKvzL6JewbgcG8TMetbbc6JHRjZPJLS3pcbVjGsPdWCvLfURY1m",
  "key21": "2QjNuh9uPMNqahTHzYKZ7SYgzFe1kzsiH6dYY5hnLiiapFc3oipz3SXiysZMKtuRK1ozpK98ymfx8d9P7r99qR29",
  "key22": "2TrcvJfsGbjbcYNpGv3dkFp3VNSawj8Lsc5Rt8GLac4PgDfKRtuRKY1FEwZMfS7CShXaVnhg1UVM3XMSVuQGp6pA",
  "key23": "4M1ejVJgstSJWYzcZiZA9QM5t2rfNpQU3b76irZ3LuCjwTQZyXBEkHq8VxLbBg9aqnAPLHun3BLdSa3iQ5ukujV8",
  "key24": "h4C87Gi6ahD76ir2m2JQEm1mhjB1WmxT5ofhzaURTPF9tE8P9vfEH5au6fexD2Pi8vAsn4vyZ3SLe8a7LvcGoqg",
  "key25": "3RYk4gmmGweACCfnmijwYjDeZ29gbWHjCPsoBxttKjp6NRqvmbEEBaeexFmq8fQmyvPtxFTgsRZ67mLnsKy1jpAd",
  "key26": "anvhTKgmzsjxwJWze31Ez9s7ubKUfgi6V7EKa7cmxgdEFTdHGmPuHEa6LQPJLuzSUSzu99CdcSu7nKiArp9CKbW",
  "key27": "5Z3xaHygYa84y94ksCSFywgfNZj9G7AMqUBs6cTwnJyAT3iQTYMirHaQAipNdZVNEAFqggRQdWf9y71jCAKojtHE",
  "key28": "3NT4WVD9vhUc5GHtzLfGKYJsAPYy2wmZdEFoBfpc45JWzmWsb7DAqctT4Ci7UqwmzfHcQL1f9LexW6eiBJLpDkw1",
  "key29": "4PtyFMv9Ad3VQt5V5XaDbmG5gJ9HJww6XR84LnUvgNLKXtVpau1zuox6F7PdWNyDD6JhJZmbmsXvcVir3dE7WCPr",
  "key30": "4JpDTX8Y5bbXC8GdgZ64jA6Wq46ePPxPzd2wHuSVm5BdFLw8oPbG3cixPdoVqXq27ugKWfu1SARQNjSGd1ZmF397",
  "key31": "2Xaa5k3FbJxrWPdQXbAvMQh2Zgb6dioTZjHJGLHPiB8mGU5V37FWTWuXqgh3kZTWyy6YFCVaJVXjMqejSWNs7n2o",
  "key32": "5FgsTnLnw55vX9RvxZxfSE5BWHqMXZRJmAnYXaWiPwC2MTPZknh5J2BpQPH9hKpX2w7eUbgVdVrZr1NfdVfXLmsc",
  "key33": "2B423kLaWD7YaFKQ1xEfPBBzcvC7Gm8q8HLteMkB8rHjYcDPTGUmnniWzVmfAhZZJscD5BzQ9bvsQUeD8mqJymvq",
  "key34": "5TDvi5mcPb2ip8izFgGFU3LGBBjP4txEhh7FLuMk5Dqx5mhLDwv2ua2JkZdSbxA83kGVcppqN4921shurGDJzD9Z",
  "key35": "2r2QNo6UqVWdJeuNydqPytuBzxfqRM3USET8KZGDr2FbnoUfA2Reo9QHsLgM9m4agaViadCLhJa7XR6QhTNzEs7M",
  "key36": "4GvVnPDEoayRqdKjPdTQUcraNKicHdZ4zmZsFCPNM6j5NAsYKhXmFohQoXF3upuyJSM8eWVfBKmR15s9Upkypwq3",
  "key37": "5uqYm1ngCnWDtLHjiBq75QK5sAFvmqcBKL7AWgcYp5kjEZq1WDer3aFUbYuGh55MsCHNCJMXERZ5LXNYqaNH7di4",
  "key38": "52MXsX4U6Dz3E1A3grLvo9r1Yv8kaw9yuYNPu8DbS1gizHQCLC5qJCDb113U4NPAz9TtaiXAxoc6bAv7JiRo15PA",
  "key39": "4ZXyYYh8VKiXKZMHoEYzktUfMmDpJ1UPk8NKcERPCxzPaoP5uQoMX5gcgZqD6bF4JjuPjA2kMcJgcjjzgwtLTfdB",
  "key40": "2G3Qy3mfPazVWgnDo8KGpajDLiMhut735k2obJ1sqYTz127mv3vH5ugLn9rzYyX6vtwtzezLnk4HTs7Mb1DaQrc5",
  "key41": "4Av8nprwp83NAw2xZshuw9EtY4VGUJTvk7KChhtGr81iPifyP879iJy3tkFVYWuF4PL1EMm1vKasGMHae5rhyU7S",
  "key42": "45sXZedrYaxWJBwXGdMquLWkyjLFk6sqNqZLeKmms99SaqnhPXkXNYukXzwsexstWocsepZcyameNgTxdJ2tQUAM",
  "key43": "51kFKqwJeTmsDkFSFtcP9nkKEr7QAZPht3RumLwz3MNdr6sJeqBjRJVLuFpzhZxEbyGGjxbdEJkYuiza8upgDxsg",
  "key44": "5Q3s9Eu1aftvX1uJH5sPQWt6zs6ejVJgzu6ubk1mMFfyoWsowZW5vWehE6D55qzTNuyyhv85oD4nh5ms1n7HeJY7",
  "key45": "Rsiwh6ChxU1U62MYLkC5ZJFnyd7jaXYzzsE9Uki1dNyBr3YRk8SYA9G2gU3QpA1pfhefzXDpe37dbnids3XnBpm",
  "key46": "45yVEHAW8zbAWambnP6kBLgoNTYTMWkBNRFcXzMatcuNmTvkMzuU1tcN1bdi6gRQvakKXNtAyRsbVSbBJLfRpecA",
  "key47": "5ST7VoXbuxPs5PZf3H583Eubw6Vz7D5VWD32GDSvnvQ9YaEbeodpoB5ybr4wy8zGEriymY5xj1VUnpN8isgxS1Nj",
  "key48": "LGopg2Xf9Pkv7eA6WgNzJmLYMpV4NjM6DGd9htiAxZQjtpHFKi7DryMZW7BU7VbCwTQ4GfwSWDsSEr9HT5Xm1tX"
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

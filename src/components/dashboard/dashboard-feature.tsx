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
    "3fw26xXnQVYaA61Su2KkznWcsrf15ucbDj6zxqfeZ1vmESynSttH62ZDVcu5wrv31rrNhc4LaTKucANSRoLpniVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPmAR3m99nvPDKw7FzAADBGeEbYqn6tkPGspUpfP15LwVjwqj3x3mQ94M7nWy8EojSWtgb9rPWyuQhV4FYQa7s",
  "key1": "5kV8kwddUjjKz1xdhBjmjVQLKVob94SXHc5M7XK7yrDQuKdMd1RnefFG3x8UVKZ4Y3HZxBaS1xXFx8ffKV9KCPLS",
  "key2": "3VtPb4EHMq9sAqrhLjyaV9nsiQHH4E9GRiEaMe5yLefuiFih2nXYwWLBnqgYMqoWQWSEGUaLu4atLrt1QUk6SmdU",
  "key3": "2gyzixmpgfSA45gjCW67LSwtXeKQjDpbQJwERDpSecH263imUdVrB1s4FLu6jzhUbTRMgx96rejNUCzSJbB9frHt",
  "key4": "2bU2LfCjLWiAMoUXLYWoJAgL9tM7QjwQYUapGoxSbHKrU91UJWEHLeXj2zZGD2K2i89YoxCuJ9NVrCwgLwXAGraz",
  "key5": "bbQCw8YtvhPgAF7maafzRiC58WfPYDssn315Cf1zZZm5SmTHxgmHUFJw9QgCDyBrhkmuohajMNuoL5ufU5TBgrD",
  "key6": "5dzLeSYoSUxJWcL4nUUSzcNcim6uFbZ9ox38BcncJ6jzYzM9LSzDXn89Xt7DXdLMkro7aJmpP8kmG3iE8DhWGVWx",
  "key7": "3eHD5SfMF5rqT5j7Qoc7hQUcJjka6hFYTQCRRdup3KpDoD3muZVVyHZ35oEhtbPs1NMB9ipctntDmQG529ScJfsP",
  "key8": "2kTFWKSiHPCuxF7QtL2sY1TwHU6xqSAJQsgt4mMPgnvwrjgABux3Kv5weVBgsCjm8iJhGiMFw3VEwm3qUnFKLeZy",
  "key9": "255YQkkNX9edxBCfN1BoQ19MUbea2RaDniiRnA6jgDGGKSE7zN43sNDk29GtmdJETRp4UqZtLzeH9fzsv6UpoPWc",
  "key10": "3igmMzvypdZSciUkpCnVaFbs9fGXvaMFNUirCzpsCNgbsPhdpGsvBwEq1mqg4xRBrYargwkMbBMtDGt7u53g1F6B",
  "key11": "UQ2AwWHMvDjZq5hymgp8vyBGgEGD4v3cMRnejcJJkZFFj4sXM8oLWNLwsC5hBF1goy3gVVBEfqR1iU3s6gVu8XK",
  "key12": "3wgmqBSTUEEcwiujpYftEFCtTgorM1MroDr6XpLrPRZCsaviDjUPphi2RCmhbKCFc8YjEUapHKrX84quA6vqLFzh",
  "key13": "4cakNX2wkeB75jUjzgp3LJS6yPe9i9RZK34cAmGyKHCGqvrnNEJnPXLLmUxq6tQJRDy85Y3Fa2pWpi1YzzEHLffT",
  "key14": "3CUR56xjqyYm898M6qVptps2TomDgbDJX2YCpJeDKyfVPDXWtUxQzq77UR4vzB3uVr6KW4GSmxcwnZ4ZiJouTaRW",
  "key15": "287QGSfMUu9PoUk7anAE6j8sMQxuN93rDGS38NB45q3t4b8bRsUzpuunVUF1PSSty63KRgdE3CQoKtRh9JbeGzCW",
  "key16": "2TR4Sic9mdMmPE9zq3d4HpzjChW7WyVXZVphzvtNYsqygZyK584o32d4frwQkQCsdvPFjyS76askMnANpL6kkHA8",
  "key17": "5fKMZCPX9r2RZPiUyhcdofWwqV9Zrf1pXrojXdMAeFian2CdA2datkJBiWGk6NkYzbstbWnXZHVMSYqPuKfk32TJ",
  "key18": "3EyaSLPr6YV4cLAxaSL2gPMbCu7erRmie8dkQo7vmQYb5Jao3Yd61S3mdF87rDZf6yCdd1n8G2gZFKSwrRwZ6USR",
  "key19": "28bEkbb9K17Y3N5UKJApuiqPcWvqtfwNUU7ZMYZCjRWVjzrjy42WQKPBcLiaX22qShJDZhFq6Ss4ZbGdkQYdjvGs",
  "key20": "35PpRBzFuqWCtqMMW1RJsHrofMMcLoksD4tWqxcqKpSx1xcjAFuj6scj7tt2MB8pPYdTgTeFiineqVopTkVgZYqp",
  "key21": "4YnFgB8eZUbDBAANE9XwEAuT6wzm1M6vmNUh5HazB6HeLfWdpHGoWjUJSVRUhoFQBoncG1QekdXwguy9fjG8rhZ3",
  "key22": "2JbiJSh5Et4Ao9TSuySaPRpF7epTLat5Lik5EjdfTVuaZ78hrdgSMZnNbbHmscFw1Jobs2cX19VBxvwZvgJJ487y",
  "key23": "2rikhCJA8RPAFmEjYr6uwSCJZSpPJHnBYYq742LK7HoeezDP7SQrHiTvH7ps1tW98kLQDq4FtCeTtKYtyXUTP94K",
  "key24": "5YXBpzV5JAUmaE3ZMTqqcsL6i3jbVKrep4Fodnw9cAu2DQpE6Efp94mNaCvS945sj93DQw8eGFxzuLGxBE53fNwM",
  "key25": "2ZT7hdBg8WJNByiLgfvAQW3ZgL3xm9TXTgxSpo1p3xCZ3yJx1ULGYKUKNSx5yyeC1JraeY4X85STBXfffVzHTaY",
  "key26": "EWZpJf1Qg7VfTdkwmE7urcZihisVLr7WbsUgkQqxZ7Y6eZfryTN9H3hGs41j5tPmK4dh6aGUxS1483hXztAtBhq",
  "key27": "4UjXhnTBnK2SJTpa6QceEEWiW8NwTARHMpieU2PRQNEtYmhWGEqdDaatBot7Nsk8johGw4YWJ7kc2H1Ub7kMv5wa",
  "key28": "36MSvebTEpxVomv9EcXjQyjn2w5zBFnizKk1cznj2EBawvTsVxtrsHSSyZp514cbkd8LUPHTyuMndhd1TEErxi2f",
  "key29": "5d5MWncBxfndiFkVHoPov9Wi7FA1Sp56xrPm2v3F5TvCYmwRivuHZjxZj1rnUg1iWB71y9mkvL6KHLAtTqVMWgQH",
  "key30": "2U8MQwJGFa7hEXRMdar8ykf7p6gWa7WFEDC64Y4X33whc4xxUT9XKhejvjK2Q3sE8XVa9fQJ4jnyrKiKvRsyhdqH",
  "key31": "6p1iJpGtDM5TKg7AQsisUQnfyEgedR6TU213zg9Njm5CfdprLEG3eAYttQea2a5oXtVXvqBv8jYwhu2o6gweqZu",
  "key32": "612uvoDtXEVwtTqG8qZfvQP6zfM7UdqxzErwtVf5Ba38R1VBPp4cJPDNL7FuwHjngCss9Rg7M4xvnFCoWWCytZqE",
  "key33": "3BcWRbGyxgmVHPY1HyGTCabk2vT3qjxP9HyFa5RnbUdHSMyicSeMs2QCZEVDz8tt5vn9eYGhjd4QdykzXCE9zRmj",
  "key34": "64Kk7KqnqyEpf29eCv66aBacBuHhkXdmm2if8mmCSjDShonM8F4R8bykxjsVpByaa1d9syGZZhirnZCB7F47WHgQ",
  "key35": "3LW6dchQMVu4uFNtqtgVQKW2mt36EcaPeptm6RnX4Q7viBtV8zbztWKPmFLLaCcMKJb2Mm49uiPSDikFnZh5t4GX",
  "key36": "2sSUpD6sVpCQy5ucpNxJBifs4iDPYZCfLZoqeb4DjSp9vyxvQsc2qiJSbCM4wvv2iYjkb8CijbavaL3p8aVQj31v",
  "key37": "5Ldt4nRp78hVzFtVpPdud5U1gHqAbiZbNYmUNS1tAZ73q7oz7Dhc37Vuakx9xF4ncTVDjVffPgHMaXUgd4XsnYJf",
  "key38": "J813WDpUfJJxTK7ob1ZiZjA8pr9KNEWx4WgCGzktCA5HCEa1iYDxoRm637P6RryRcuABZK23vyxJTwEYN2ckgRF",
  "key39": "4jzg1v5NoumjhWsVBCBZcojJrfSJP1u2fR7CDGSzAb4qFr9fs5HpZSouymiuATGtS1NK5aHfCy38jfbAUkWYjJJB",
  "key40": "3gDZAiPeTHD1GFeNoymjRBc1wVhZ9ifghLuigUwRkFvKwULd19VWXSjuynFEzri3X13AdiFoj1Jti6c4Q6ZGzswm",
  "key41": "kY73wTcHgY9A7ebD8eCgMMyUxLPe6J4tYgxNJ3pLwaS8bCd4aQBq3jMLonKYgoKi8nLqEQ82R7dV8G1AKX4MSUJ",
  "key42": "2jhk1nqxdUPA7S7exN5v5vkLHfaFSR1vvc8X1mB7ZeeiEdWsazhsJFikZXYd3QDEsWHMrBKtzrktcuCFDvh3qwzw",
  "key43": "4kavTjYW4BWkr9vg88K3QPVLkfZBBV7QYndbB1ZfRpvJa2kWf8qmcRb44CqBpU6uvAmvDXqD7RmDToYR1319seY6",
  "key44": "42SpS4iHVgxa1XrZtAxL67PRYB4zSSueooqG9cojEPseAvmT57yqKBybqsKDxFUpN4NoJRPL8zKFMxD3Viohievy",
  "key45": "4a3VpY8frVc5GrZs6L1GSu2FcSQ6abSDb4iNctCizbt5PpY8uqcizvXdNvRgdKtPw7wnfBPU4agmUZjYB35NVNk1",
  "key46": "3WV5vd4FrSNpt7a2RWgekkoW9eevndrbYPQrKD6UC1pa7RrsD2x2TQNgnwdu326fppf65NMY1hFpa5zQDwGiDcY8"
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

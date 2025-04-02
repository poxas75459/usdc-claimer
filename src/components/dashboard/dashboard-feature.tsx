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
    "43x8dg364JTYTsARQCdhAQ597AWUof4Pni5CCC8DaisHbhYaFAwjF9TcmqkSdHeCa5LnPUt3C65xemhQPfcDXMxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tyjHpG3zbNUE59aeUPfAUNj7pue651pisXDo95Xqoxx4Fq2q1XUasWWK3tmX3KfHj3BpXdprQPbfmPvLp6RRSXP",
  "key1": "3eDZ3Qqs9DH51j58USvHTKQBEKQoG4WTRU7zodye5PANjMuEUzqVhLERpBrKuwzhdVtvnpTUQAPQVW8KR1ngYSHr",
  "key2": "cq6QmWDZD9RXqmXi94y8F4DGStLghmUV9QxGSU3wrr9wgYkcMJeUV1G3iVgQMTs8RVFperzQQUfBSee3onvGp8W",
  "key3": "4P5HZwFh5iMAYLUmf4U4y6pdznr5z9xXQMoTtvvk5CACwqBndMcMWdXAVKqWAoa3mBhJmQYyKVJdasf6c5DQDNQo",
  "key4": "3Jy23TS9ymFdrYBzweFMtzF6k8bmNNqWmb4viGugmQCtsKrgWPhPp7LHVdoziiNYwt5UppfGj1N8RPZMSAyr8cdi",
  "key5": "2WdCmBFr6a8BKYoHGmMGaHEudYWQXPcMDLvbTK1qeQv8SqGWTtvZt3dLTar7cQDPcTpgHPW3oTv4FJ9RM3GPfpoY",
  "key6": "5AhqkXPGVRbXdYvHKW5cwLkCSaKwqXYcTwvDEra9gC1fKLUmRUX2Yf7fwRw8XPmBbeSt7QcedxEfF3mqCVxGbADA",
  "key7": "3TGFjw1AFS47XesUaTBhPhcZXPGKEgbndvanCUYSi9iHW6zajHu48KbLtCoVw9tAPdnVhE8kF5SyDBWfaU1P75YW",
  "key8": "3R67Jdx5ZKNe2Gf4SAJdnNVDCsasHoKphu3RrPgL4awcLjwejv8QjJJSEaehbXEqt86ZZAu59833FqYf4wPrQjDW",
  "key9": "5T6vvfTCmmdnk8jQXERRcQBNpDGNHtqpk57gFVsLWJ66J6hbSgscQwnC5KKwsqyB4gjpRsfBPWRYUHxbZTeSWP9z",
  "key10": "6uydejSjSG9nJvAyKFjDEkCzNdLMqCH545ubihrBHYNwTRtomShotwefWXWcnHekrbVg1p3mmW7ZB6ZaEPDeyiM",
  "key11": "2MiRwp5y46ysNmCM83cZ6uZgCusc3UYZfhQ67NnxcwzGJw1amL5FouCGT2nFpwSPcbSTXUhNDQ59KeXgRwfvgJUx",
  "key12": "2FFYruM5ft1SBes2B4g1VoJ7wmf7M7oqyYxh5VMMzMuSyjTSUE8kXYGS8f3uzSez4jU1YoyC5sNFzGEUZkn8LvaH",
  "key13": "Fhpf2UEKTossgJGvKEGVYrzDE4d1o7Ugx7Xf85btr1pHGgLQyPF2Z9JS98fJ1KubT8C9Lm1PHV1MD4uB7vatMF4",
  "key14": "3jt923NPybNYUSGpmsZNiE1qwLi8YqejQaxCYacfTjdYe2AqeQcH5XjHjNknc7ChwT3J15eQK4GnNU297yCW8U5c",
  "key15": "4J19hv6c7DkWmt1zwwqg9bshYHpjSr61u6VPi5dnBmJVvF3WRdBHcXxB2ymfBAnVN6nBfmFPZwTZ8MN3dkprpyFW",
  "key16": "22dMsUGoDLnLGx53tcGTiytfZDLZAxYQhsbnUD8551q2PRiLCCfogaAFzqoLCbNSsf42jRMwv19r66k9fihyxXws",
  "key17": "3gZwKDoxfLSzwU5oeTtsUce4DYW5cKrhUDUizAZMNHxPEqcUgUPA6vkgogYKCF39HRdVvx63MHYWL4G42eidfF2F",
  "key18": "3WRY61uYjoHGKAaK3AmdBNX53qAgQN8E6zW1sv6WBwwrvkq8AHuMA9mEuC5VdLpg2TdSXEj68hW6fwFwcqcrtrRQ",
  "key19": "4Wr8d5U5tqD9ifhetL5E7JMB7MuNDtLuwdmZWgPNghXtVbEoYue3bxoFcqH9zvBn1PzGnS3PGL3WBp6NtJLHU7RF",
  "key20": "3j4mx749VQwhZ4xZ384S9B5Nv1BDMWk4m3nCpThHKQyDzpvhCscvdnmg9fnzJxVF3Y9RRDDZMYwk9yi1a6g3Wfgd",
  "key21": "36pSiVN3jALLpV2BiwCxXA1Fts3tGBfGYWrTzUfLJZeAxbeYxiZMsRQ88uVuaSLPUZnpesrPEy42EXhBqEBUoHzv",
  "key22": "4niPZBtT3qd3ygzYjo6FFszfU2tTvRXKvVNDc1Yn5dE4oMF9WiyC3gvowWYaGnz29D477LeCgTaLw5uApz8ZN6YM",
  "key23": "iwnse7DdPs5UvWnWjtyFPuVGUteDtxHxSRVX7gK6fthWmi625CqiTDSm39F1Zrki2aBj4Wm96M3VgaMHezM5QRD",
  "key24": "2WWGhRUnFug73vKJhw4vnBf4sENzjC4a1hZYXNiwgBuZjFxV7tVxWW2rYfL9beaj42x55U2fVe2f8fkYdYskSXDa",
  "key25": "3ibrZTDs6ESkArxH1yzEKD65XikJ2yNQPx6MhFRLx1pQwz321YqV9LurHq8YS6kHfaFdVXUmzvt2NAdyyaJfpuzX",
  "key26": "3PYgaqsYDtNnyJCwyxwZYqGWKWkGgeFY4GbVPuQFnoNacwez6UUdZCMLF9eRxLtWAMQvgNximnc9H7KpfHfGbojA",
  "key27": "3qaa4EqrArvCRm31u9NMkJN3TZT7amdWfjZ6hscdaKQqmavyNqYPQSvHdrkSAoKiFTRHbNH22dA9wTtZ4SwV8YFK",
  "key28": "2n1822W7hKp77y8QewUkXdSpmMjDEQnGM9EnJrEoUEuXkiMKcfjkSrPS8Bquyt5fZrnsXqhLintseES6U5Qi8mic",
  "key29": "UayhZy5t6a6qjhqoKZfDdcYYYkpJ6gjsTYHsLGGhogotPy7WApz26eLKT8nU5Py8BnixB8DvDJfDA5YMg22Wcco",
  "key30": "3tiC5xNat2fjeKYFQskoo1mrdpu3NywT3HBqWuojxtxvFLQADDTPbiTW3MDpGGNMZKhCq2KPU9pgekNrB7won35j",
  "key31": "4MQPZmCm858mjbhEcMrcRm2fFS1CLxt6mjMfGSoMfjnxtJdL5Q2WMbD4UCREV1TTPTPTaG8yNEhdALWoiYLHhGXh",
  "key32": "2X9qGf82jiohbPVvyH68UEUzZj5VZJ6hgqxpwfDC9F2EPMynGs5uwQtncq128qRpx8zaDTMun2r8QpXoPk6Kzmr8",
  "key33": "4gKNuGwEy1sHQVWRyvaYakXxAfy22STM6DTCQESnQbmP4eScYGbuBJXGHxvubD7rVEd9RTmKjmzVf1WE2xjDUHZU",
  "key34": "SrgLSzkKjAFcu65A2iTasJkxkQbVxyeUjaxkF6XhLpGFVFdp4x5UdznHDNiQEXLZGvUqShrst3dqNSsLCCzANft",
  "key35": "5oBVJhQLpAuTvp9u8aNAfBARzKowwKuefv9WVPhTZ3rZ3auNgLt49qAHMA14x9iKHGQUv7n85pbkTf454CqH1kMf",
  "key36": "4AeqMxC8mHxkvcZNjFZr3JMgYMtBX8GhE3oRGbpPga4rthVkNnAYStnsg21Ev3KpJa9GtSzRafYa1ezHTjYG42Ni",
  "key37": "63vrzV2ujVrpNux7BHSwYVg1F7vQQe653n9tn8LFVY2gdZJ5sK1ZkJUdmg3U8GquVWJxhsgRyc8Rr8A6tyoYh4rg",
  "key38": "5ZEDgBgccjNSwWpVvyneBdrE1BsmdTNHo6pUjXYkxNF4w5jbiKqqFix9axSjQMRGR4piFwkFpVf1EYDjUTKxTxM7",
  "key39": "4BepcS3ZnEnD9YAfdZ66FeTqpyXh1vyemQVc3SV6VWwLfT7njv1sk6KN33hupkYvw5RwcLn7PEJ7Mr4H9MHiwBcD",
  "key40": "3WcanUnDCd3nVqhaJ7PTCCFafRT77azjSXKNzqQGHj7nMm2dbLGG8CmjXFLVM81yNF9SW2jcbNTV3njh1EGucixk",
  "key41": "qiGYN5Zq22hq2eUTGMzjUU664UL5gXj4sfnhDh5qR622tEJPULfwcBDs9bqsrKwppKXUUrW2esy8764G5w22ahX",
  "key42": "Dd8N2d18r7ddCfy6G8M7qAfCmBdsksuy4vwH6PnwTo7jCv4WCuopAWhV7x8uy6PY6FVXPgRq6qRpdzDPcofmUVN",
  "key43": "43KmmUq4E7X1oCCkRwaetwEd9MhqUu4DdT4tkQUFvLPPSLLeqVgrDHzQq82V22X61FSXReNPb5fCBoQfREiFCrMs",
  "key44": "4JWTvQKnTXYU1shBjx2KpUUPf3CyJc41cmyZws6sRTtEHVaqcNNNm6XPNLLNpBd8pdjL4R1by6gM3L3SwSBdMCcT"
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

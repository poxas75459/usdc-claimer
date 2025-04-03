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
    "Z5B2CPHKB1SDdEAkyaXoBz8tbKSv4Np5EtoJt63TbwCdXZcGjuqCp5EeP4ujZziWE3Aqmt4GLG4tgPTeMmR4tn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfJ2bbDciRABrkw7FBETstiwwjmGYr2Gjb2jPvaYaj51SS7H728NmHXN4rn3gUKVsbyYrvhtEHbNCh7DqdREcoe",
  "key1": "3ejou94HcUKS92HQWXaoKRG77M3FwUnmyPUvyfbpJQehY1yXDMSDwBdgXMngDHGgiUqUT1pLnH9QQHrGz7cWqzUR",
  "key2": "M5E6jqwcExALuRxWDzT8MQB3z74W38cw2PxARYQd76My8voPftkfmfW4TabmUpo1iXihhMMYyNZuhWgP73QbmXw",
  "key3": "VsxEEW7FTd89BaQiEQzTPhVC7LHvumX3PcRzyGmcJGu9vr4iq6VY9pQPXvPZg1VXisvsKLRBAwBFeWeb7C2WLsx",
  "key4": "28jF7mxAfC5krGLffHCStt9YAQbYjCFxuoj5Y7mFCeVjgKqB8YXboHtg2AYCbnvAp8YH7joiPikn5xrWYwzxu56S",
  "key5": "5P9JJjzeSgPm1JaGPgt85kM7VNSKz95wbssFBMEdXUcp9K3X1uzTzgDiwF8eAsFzVfNZGFwjRKsXdAagVT8z7gVC",
  "key6": "32jQppq1N853G7RR2bvTBAchN49sgKVQZNkcxrDsYhgn3jugU2usHBMkG8gd6CbS6LLmGFWcWCaPAQoe1XDJNv4o",
  "key7": "62RAXeeLTt5KgnCtLsR7yayEZwBYq2j6hmeMqoVXbDX5NXf2QATWmQ1BkBTWpfmFmGUuhv1JXepXQHUsFTrPM5Ei",
  "key8": "fd3hggYGr1ze9BR3uqZW44xkZAsbkXfp3pDJN8hDXaxKRhoaeTZ9HuR6JJMvUn21nfos59fLqisuiakuuZZp8g6",
  "key9": "4FQbPMAaaW3dVBuA33VtjPMopzBKcRZpvYQLh2wyf7n8dE5rPdKCD8jZBoPni7jjcCxx9govGPYJVqfQqUNuHgCF",
  "key10": "35UfpsJfFbMXnKyXmHyEr69GXVwt7t6aabGL278eEs31H3wydiZ9MSZUMEY6EEDMwbggyfXqr5wArwCeU7Y5Lqya",
  "key11": "5xEcWHXbWFGMFaAhKPhn1vetiAoGeuKFxR3EfPN6GxCG57xGUwu3vmUacminiGYrGKnQMC4fVyvbUN5D8K82zyHX",
  "key12": "3okQUcsJK34PYDL6AF9AgSm51rZ1E3HcmLuzUvZmQ48hM8HavDgpJX6PKczBKb9icMECgfKj6reaMGTZ3bXCev7k",
  "key13": "42ecsozmvpzVHVMWSUHKh6hSsciViF4GEX5wPLQcDbs8qQLxJ62ym5NemPn9Tc67kV58qGkVBrstke8Yjbd6dP6Z",
  "key14": "5c6KrL3eYdFKhzCLDwBALgciuw241ssiLEKf9qyUCpE67AKA1pe1QxB8kgbrouEY5s2EyhgrA5AWQ32es2DYMvan",
  "key15": "5bsvkpTdZ98VDen8SsFi342ARxV7kkeFstQqxMJ3pJZHBbTYqrnm6ucS3NxeNUCkAGc57ALf4qN1z6jv6aW72GaA",
  "key16": "3R8N6rAZR8JfikMS4giCTUAunVJUV3nYhAeXNSeYBsyVN3FvF1kmHSz3WpQ1cPB7jEXiwoh2Lxhpw7aksyZ4ScyY",
  "key17": "4szuF126XMMHGdwwPhoVgcgZ7ajEzDtWeKmqjxBE2VgPmpaCmqGaq18xnD8xyeCM8Za8B2eEcHFDk2re1Ypiynj9",
  "key18": "2Q7MZYS3SSZ3VupzvL9VbPABYr3dgUPJsq5iQpMPnnbuuH59FdAYUbfifTTFjjeFeeUg4icz5vwPc9XFeFqYo7gB",
  "key19": "5i353vRod3wH1SA8hTkzuEyPt63XvEQF739k9hSVHqYyFr4cFkRVtNX3bZDMu4oESs3nttsDfXpYVZ2HHZi1HArE",
  "key20": "2Fh6sx8qPshGNSGS3M8KTBJgokWC9NZpKNXPoQp8qBv6vqbRm7sRt8ip8ic4ds7ViuFrFda8EB2o62HZBn2jHECt",
  "key21": "55ZtCyUWTYP65NPZ28c9EATQTases6PiWVmY7KJPp2atouJj7aas5bDyTdetCwKkhqV2QPbaap7tTrEGFu6ZPqb8",
  "key22": "3HVQiMbXsq7FWu11HKLHf4AAd4pkYGtEzcvNhiB2KGYpXpjjXvtztRFUHk9vrwjpkQovBfEf3XcDaKPJJXNvbbQe",
  "key23": "N2RuXGg944VeeaA9Aw8L9pYKHfTE3gBpmuEB1BRbUP2SvTXPW9bC6N8o1LRjwEsEqn1pjVXBaEozH6ygXEyQNgr",
  "key24": "2jTskV15dwYWYUPEuo6dYr1YyC7cv86fWsHkxsQAz1B3XFJZXtaLVJchxi9h3qPK4JKF9e8ZDsBr9FgPDBnhG8j5",
  "key25": "5wt7p84Cb9Ws4BhhNgF8WHe83bA146J2FX1HTzFwaxhae2Bxz5gvvTLUuVP2cGQj9YBwBkiHEsKUfMYyoVKXAYAg",
  "key26": "3U2NAKkwH4SdTGgyomWEbLeFaRNS4TctJes84Mrqu24qhTWrgLQpU2bvNmj1ToYHiA7RHHSe5L64fNM2tW7CfmKD",
  "key27": "4KGoRfYVR1Wj4YfuX8gSKh3mmBbVdMFqTLwMwsw5xLer24z3DPdZWi1Mo6dvCTDu41AxZT4vLVzxVxbxwqun3gEb",
  "key28": "3h4DVQd6iRuypUhSrpjpQ2aeH4PpfXBwVkv9zxcLiFB1afYTyAATZBWRBCRcAxutWWMaqxG6f7ty6Er3ssQA3SqG",
  "key29": "4nVnDbji7fkWuujPVt3hGwj7zModBsKCBZEapPCzm8HU9e6GHa7DZq5gP2bc4JsA53wia7cNqsKCcMU4gRnE9CEo",
  "key30": "2JLjq3qCqRmdNizSGWiAzSLNRetJxcKFdcbCThCJ6vcnpJkZkhXKZZRiFxgERbSHAg1ZBEsF6DpE5zMtvRUru6Jj",
  "key31": "HbzLqRX6zZKUwXg5suFEfnWZ1GrXqmsNd27hDXq66RYoVVfksPZrZNAwJABtUSj9564NuYLzdJKkTzJDiR7pYaM",
  "key32": "31HCVjdg1FMfxN6xBgsfdxkjsLPKCPa9mHTaVnBQtCe6SDu17i7oJ31BZVF3bKTUzpttbtfT938yaD1JTEeANhnG",
  "key33": "5YrtWCpPokwpM26rpVcV1voUjK7GwFoFaHEHfMj1PKuXvUNkYJVimfcPqRo4bjARWSvpupADBawhmupkTFQysev8",
  "key34": "2qBEzHLvH2HdkSGZUhSmU4zHaNxqvDTT9A9YdUJsLuvT9ScocTcwRzoxsCVeXdwVL619kYf7oNxyCcmTZWX5yZVK",
  "key35": "4Za5tWqxXiJ6LziuUZcNkmMgPSMR3ADdiacSB57vhyQp9pYfeP3mfWwwcPR9cQ34BgUqwfFgXef3fpMDPpZFyzFL",
  "key36": "61BF6Ru5kxy6LYiyKDaR68PGCSMTh2M7aUXy6xtEDWq2y4d7ggJ2JWXtMmZ4BC2Ef8N8DibFpWs1ugVcqMcuFeGE",
  "key37": "2N9kZw1r1k4RyakAk51ruMkvUA7HEMnKWCv3JLpznbyiMtWV5CbgPpTqcNBoMiNRtiT3F7TbbPGTWDzfaTzbhMSM",
  "key38": "5rAy9QQjS3iMeaNZMJktEVzQCA8Hdu6bkhi3WwdAKX3ZH8wNJ1Djz2aXMKUdG7UBfFybKoCbqaHXrC9aQ2S1tb9N",
  "key39": "3FwTRrmPpAxkkbpf2EHkT9ZVfWsYPNuxZtnqm9c8NZZnWNiJi9WHnaG9AL4bKQSZZtYEJ3oFTwrPS4ErwRW1CkCQ"
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

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
    "kCcAUg46KzciurNVEjPUnLFrQCHWgWsoDVwHJYRwLi6Qjvs3eqwTEixTUdFAwxwRnBc8Wg7rLAGnSoVwFFUE4rE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXCv5saeZU6YuHaanta5k7f3hV4cnLWbh9an7ArCWLpyeD1Cce1uLUJWBvoyWHXy9vgBv8qUQHnfqPqbGQMeGDN",
  "key1": "23stwzCtWMVS3aQV4LEB4nKCu8ZTDdC46YYcHUjs5b2B1tvYZx6APuBDvcp8isJTBUMLTEAYhwmUxRs38VovN32X",
  "key2": "5a1StFYzq4Pua8LBGPyc7SmwtU1KtqEJRDqGZQ8VMRhzXKVHRUPGHs2b6X87agBaqJnBkkimHYmt8SZCpmr5mu7t",
  "key3": "iqCTocdtVUrGEXefbdzScuXGwm2UP2fV7LUkT2PZt67Swd4y1qoVPFD3n1ryVL9S8KPicQbmKMzzzYHC1TEx21t",
  "key4": "2KcY7ENu6i6TB5qfeQrr7qT4CcN8JdAFJro3UB3tmFedra75H3degypNqRu9a995zjB4VKKRfYjTprSR6PmbcVFg",
  "key5": "5b4XW1cVWEkQDtkV6KgrR86JcWTMopJDxnFS3Ri4Bjt3NKP8o14d47V1vvdKafYa9Dk11f3cdJmAyyGYFhRLGYCM",
  "key6": "9KLZ56YAkX9SCDsq6UA3uqh8EYV9uB2vNTjHsqcCfjnLptJYzbjU2jRWdYuMEgj8pnZo4Tjn2SzuYW9hk1R4ZZm",
  "key7": "5pvKjiPPzXTgq1R9yTe8xbCnD7d5VUsVafebrpZNtD6BV3491e5XMfxT7fp13idWm49s1Eo5kxXsx31RvQv2pxBf",
  "key8": "5k1522VsrM66nRVTLQGjPRB7GoDHSEfwswJBPvkpLrEq8EByuUDo2qxoiuVL3WXduttoXdeNs3AdCWHHuLQP7ZZy",
  "key9": "3JheVE58JiV14nLH4bekwX2ZKBzSZF6Uv7G4JJAFDsrVP48PxcCiyq6kdkyRTfiXfF1daHjTHoz7n7sGxTt3iamN",
  "key10": "4rzx4xBztj2cH3cyh2cRtqG3UnFFDN1HWyCCQUuGPxpyeN9EnAewt9cB8KqTfKkyQzinXXhr8StHvsqawkPhxaZb",
  "key11": "pgNaEd6ENmiXtXUnQrg1LfNibbQ4jkKdxDAVjghPUEaKmKVwHPkfGw79pFsJntNvVAf3CB5xpj4KtALuZy2TSy2",
  "key12": "2ywxAgSz9bnFmUoZagsRsi6aZ1WyKp2prXQj6EUzuKESd1U145zF33qWLnduiDzbKLRKZbzqTPjSYJKpnWistZBk",
  "key13": "4v85GAZ8fjKee2iCxasiwPmCXvHFRA2WLcSznnfn2Q4mVmHUyD4ATNqYuq3185swVD1BDEx3Sm1EB1ButdA5kiFU",
  "key14": "44g3tEUCKWzfVYM9MqSVX8tE3rpqLNcbdJQxYLiismo4CmJvpbkXVJN44Af3zEnx7ZM58YCJUbKpAA2Qg6TbxmA7",
  "key15": "LthGMouWt5iXCEgmXi3vhge1ZCiEdutWX1tRHadGRNfEtDAY6RsMuPnKN3jfTYG2PXG1rbw3SBM7k3VD6W4BoGo",
  "key16": "2z2S3JTjhBHzAnfZoBKjeUra5UsJJnVZN3BG8ikHDgohLHCFWke9GKqgnt79P57zapjgAgG1KB1whjBqDyXjmHFD",
  "key17": "3sLfwiqYqti9KYBK3z6Tn2FmSjZterRCKMUf4ek2z3S1o9iLiEwauZnrqYMhQGBzxn1JhZbnTe7T8uwEuAkUJ7Jf",
  "key18": "3QpZDAQ2WRszLVUhsppW8gP7Z2iusQ2z5M2B6QFrqBsvc4Xrh9djrDa69Eif4iNNb3u5gXPeDVryNDRh35zTcDs1",
  "key19": "64rYXua1ov2pFRnxsYS4Vsr4D8e9oJEFjtM47ngjwa4GhHJkDUxKBayhx11vNakPphBB4Hhm7vVQN6Tjrzr6TMjP",
  "key20": "4i9uBCGS9bfdmtUyZSG8bmZdSFKNMmFazVVfFR4MmEuojtiC9DupA9izm3TPGodEfv8byqoZy5eJrbLgh9bAtXi7",
  "key21": "4SarzDENWxMVxop7TKorxGvw18zsuCRzNuKWviQocQtZxQzRq5ZRdYH1LpmFXs4yHukqEAqsABYKiC6nfP5GVEKw",
  "key22": "5kWQLPgv2QN2sVTMq7vwfLQpY9ec6BXAA3XiBQDXKoRa8JQ4CugGGvn3HDcP7nQvdmbCnm5NbDyNDGKGYxxwN1aL",
  "key23": "5WbuRy4C68Kuw1eGzCZMrnS3zzJdojA7ZWib4dAtJ2Pkv6mfwhDNmMq7AM8AAsTDsG5XTmZDHLWJ1hf9Ww8Sq1Pj",
  "key24": "2nH2Nz2sxJnwn1s3h8wupJ86LoYfAHKpPLD5WEhMJTXgU9R8SMTYNyBxWyzrb7RCKGMeU9D6U8FPYCpi96ZK8JdA",
  "key25": "5KP6DQz18aCCNN2Yk936KKqDvqLzRQGfw1CjAa2HoHqr6zvviTk25nLUi9sQb2PaDHfgUe4NJqsaPMV3FaZR7N88",
  "key26": "3mFzfFNSWE4Zj2KfjSfuYCzsUhJBT6omHW2Nk2zpDAHuNRrtisKWmUEbvHx6KMP5eDaT3jKF5jC589HTq8eGkQZ1",
  "key27": "5kAmvG7Pa8kxNMbYcNoj9cW581bL59ea8CRnjJC4BEquXjZXZZrzVWFLez7MsmxfC8Ucd6t5S1XqGB1jpaa76b9a",
  "key28": "4bALVpsy4Dqascar1vkgSe9uip6Zy73GtHknz9Yfj9S7LcxBDThznmWkKLehU2UskCGyX6hnXLNGUhubvkncsiew",
  "key29": "5tA4RRsBnhfAt7Hee5YfQmK7PgrzQdGparvADfuMzyMwFk9Cw5Qe8LnNLHF35ndV6XfqB9SWMnhCRWJJUWkh3DNT",
  "key30": "3Zn6DKKUZqmR5vM5p5ev2dNMBmAXJeSY1mABLbdiZxAqkpRBGUUotVUd439MjvoC9ikEWHmYHFqdL5XNQQHtnvbT",
  "key31": "2rnro8Dp4BMycRhEvpv5t5FEkksX6svRvZdYMGShm9zVSLDwwQ8Rs2hP5jiWadYqHRbCvdDyUmTQGhBDJKrUbJ2W",
  "key32": "2FpUaZyuWzUbWfyMQSGbiQw1tkFrTt7T8vzbzNHGYZVF8vzqpF6CBn3wEmdENBBHxALY1VWnMAk5QRL6mmiqD3PW",
  "key33": "4Lr67m2KizhQ8kaHBeD6jyj6XfTd4scKzXYqMUpeLKpLh5nnsfx3m3wPUnngqdxLMqTg4SaeBgFN6QeFBwP231c1",
  "key34": "pUuAZterySU2hqHtVQr6jQiTmAgQw8GZeq6FMcLQTUhxGYCcmetwoqWmJ3RFHtLoyTrqyhicjNqFwVwvrvrS8kE",
  "key35": "5ThWjzoHQg29M4AHWcZv1D4C6op7RxYo3pVEabtqPzJm2m6AGGsr6DpzYK7dyj1SdCkUFdgGgcytQHDPc4yqu9yX",
  "key36": "39w3MctyEBqFQoPuCdLRkEzJmYF5ayzGBwQnEsfzeKVm5gHQiTPqbGjMLXmFvCWbfXYafbW3ZfsQ4Y3dV7pE7saM"
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

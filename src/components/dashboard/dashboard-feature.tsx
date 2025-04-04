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
    "42vS6FgneuQPiXt8KD5zPES6k1UFJwn5rHt9jFc7yV7ZnR24ejcfMsJ2FQe5JpYbEQc7qcaMzHB8yzjHs4zGyoVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sPFEEavBHhTPrwofJKvULjUNAeZCF46zUHft1RjfcP76f9JZ82Ta3uKp3v2QJQhZcRBEEQfcMwMQaPHPjUEQLAQ",
  "key1": "4H6GNoeSQHfhmRQzULjGZg66LweoUmNDh1tvjFCB8VDTbae1YYXMRrkLZweFLMNCarrKp29euBAXoDFujJECCeAF",
  "key2": "5aPqzUGPPMRbjN1RLECVn7i5s9jXoznF8KjsZ4B6JevHMcnPUpf3bQf6WQywmMBaMrFg3GYD2eUWoEeXmLPjBsAs",
  "key3": "3WR7w7LZMpXYY82v98ZLW9HNMMRtYyHzQsZMT4ir16rJBDhPbFxF9PiAN3svQg8yuxzGEnGaBevySo2ALTBs9E5q",
  "key4": "26674yp1JBUHTs4yu4QowJvXJ8w61mg7FScJ1ckE7F4kAF35PrTqY8zGk2xsr1obndL1YHCzYb9tQDNj4ySvJpkD",
  "key5": "541kbsvZfVHHAuC99RvtcMPXT6PmrfKpDgc2DAJMvMkVdxcLsgVXjFwzimtduSjNUgWAzu8BgS2aT4iypVvGdebX",
  "key6": "66HDayGf6hqSJc32Ah93czxHtBAWWQyaLGibTZH6gL41NdSTHdWMpGN7PNvoRi64yxgJtR58p6N9ndz3xkey1dRo",
  "key7": "52Q9wDFNhNfSaWTerTrNcFzVoup3p9rsJteYyZx6mA2fXdDwLHKwq25PUivMENS1DWSXPG6DPy7T5t9n9VMWg7JD",
  "key8": "384UB8H5bBSUTkysn3aeJPm1Kz6wXEDLDRmGxQX2o6HiFhfSqDDXerWJgHVPBXvqh12o2mU3YVQ1hjY4JwaoJqGG",
  "key9": "31YM2FfigtzMxyHHqb7EV9fQAPYRJwR6T5AjrxZ5czMJebLXwzGjFAt9Mid6gyTH1eMuTq3P6RQiiHtXQ1TtPDVu",
  "key10": "36hcLNfJbb7Y1H4CvsqS9wsjTp2nwWwqUVAEtT5xLMoGHtLXYuwijxjQzsU2dAw7UYJb3kfb7feDqbGmW3fwpH5x",
  "key11": "4iSeJaj2jGVURYjLAVFkFjAZc3DEdyDJDqhbKrySKmfMcrXRjhkmDquSDuU4PXrNiJUm3ZPrNVxcjWuJVb4qvNWm",
  "key12": "4DSmN3Z1F5zRwKyW2AiBR78sfGGXXf1bviYEVMWtedwyHuUtQbvFfkt1nqTSPPdAma6yMhydTYqWzFXccu5YaARH",
  "key13": "4JYnQrwdJQKSP6SpHtgSYvc7v7McTW3VH3tSF2xxQa6C6emWEpb9wJs5SxKzAzVuSPvZAXwJsqyVC7Qyg479LaPa",
  "key14": "Vt4LsxaaFu29QVBsSv6YZEyQbfeDntUtm6zyMeGfkfy2rjC4WcsxTUm9gxshQzaKen7WzQLbKE3XCznCLrKrBRf",
  "key15": "3gkFbHKwPpDyuWy9saEFPPr68Mi6RpZkr5BwghrHukaYNGbFP8k5rZ9hSN9zAtDfVAjqjQ2Ej5WSJTPq4UYvvNiS",
  "key16": "2mjMg9ArVgV4MJRADbHz8UmkbNjs2vwtMLTwGkRpvXWd1UwNQY7QWDuBCjkS4KQJnmWFcQwudNzRaJ6J6Septoqa",
  "key17": "5fTwbn741wAqhjYk6fh2BD6FxV3Zm7AG7pSJpaRuCWHWf2gWAK5EuGM3L211QAFLQQAgGNPUEx5VftfUyGhvCbp1",
  "key18": "yf4ouzsB8kGctHxgfpgAk8EYj61c53bq8EpWYXJDNms2bvmL1SCgsywPkFYTDcQPWfFBtjf2U4YJjXdqFDV8Ude",
  "key19": "3M4dTeEL6VtnfBcKEtPNBw57pofZCJtScTqHycA8MgNQHuscUnJgMV6mggRYaWFwLKTUf1AqwpEffuFjV2Ftw18o",
  "key20": "559dwKPhtcYQ4SMaePAwL9arQHMiZobYYzvs2AMkdQYsUCD58v4kR2Q4PLCcLWXNUJJUK8evWaUV7f97TS5YRgzD",
  "key21": "5pEBcib7zjo48TzpuMTskQbkG6R76AhERGaTAfWAwiUAPM8wrwRx9xqyfW4LSqmR1jpuA5LwRknoTTdJ4aKF5ERe",
  "key22": "2oiGJeTRFHTLYxTSLGGZTfYJBqRUUgQr9tTxigWKroKDXvD6xwx4Tu49xhViFP7Yec9RBnmUCJGFMxtdH1er3dWE",
  "key23": "3ZLswdHd2smPKYTMqFVqfBZnpLYCTdrfnb6YAKqGF6HqVQSg9qZetw9QaCXeA9PdMoPRteEwUqJ5kpDiwNoFwmvb",
  "key24": "3q7tHG3mVvQyvJrrHaxWVJorASnXdYiyH63P8xUg83pyvL54k5udZBt289wLxwC9whWme1yK68novr3iH1pJQhCF",
  "key25": "4kvUZYqA3eRsxSXPnT5shqXAAvMSseR24JGFEuLQSWxT9UBWNtaG15obK3SgiNR71h9hfWs6uzkrYBdAvFD8USib",
  "key26": "eb1FTvaH3UFdhvYa13Xw5W7C4VRnLyN7HpimBC4wdUcaUEX6VNYfgbR6wF6bZYKh8YXU99tM7M54ZnxLw5cVW5z",
  "key27": "4z3qp3SqqLispnmYSP6vpg91jVtqABpeauRXSCoiqJbzWcViHnvboKW2ZspFSC5Pxg7HwUV1UYTHZb5iW13j6Ygx",
  "key28": "2cjqxLNbbC54BexezBiowq1QHbVjA9Ax65oos3X43vmdjpNbE4mmNzzbYRqekbxTYD766b6twh94wS15W3q6MPE2",
  "key29": "u7fP2xo98NLmwquFVfwV5ikizag2tV8yD7HY3vCTYpEkymLoeH4qYqGPDY5QK9b9egLurcA3TtqL9bU1SCeKmi3",
  "key30": "4Mo9WP9gJL38em7fjiqSh62d1d8KvXFj9ArAjqsu7KvRCfbCgMb1UX6PjamK5CBEDUpVkNYCtZqGYqWcSXs5AgJT",
  "key31": "28jGQLUvkVbkKYFoVVff2FZF5jnCxMjgywXjVHktQqFeCEwshGh51PQwH3uj3aBpH6JQhf6gNUrt5nsNAHGHxcae",
  "key32": "3AoG6JCEx9JAZA8Teyy5UoCNfKrixwpcPUviw3jsEaE28ZHWe9u4YQ9wSaDi2vzsnAp7JVDX9VsCQ9pfmEVw3H2P",
  "key33": "5FXDDZZSgGN9XAF99ixcEiHrTXzu4NMGN4P8sbf6BAiW7Cmjx8BiZFwVyS5nhCewvSs2ctNVEvo6QCFAu8porrQn",
  "key34": "EoU5EXt6qGX7H5Ffic8HsdZf5kwKPX4RK9XdamzeA8Cjc8J4qFnmuoLqzRc2vjFbM43dmSScvhAPJ98TYE288pT",
  "key35": "2PFpNfraSAJyzU4uYV4g3hUVhzGnpzzrEGHTgQNTpx56qFLxCEWigdjsSVSWpBpro6xNFG1ryxEfAv3wuRJQ1BkH",
  "key36": "2g3xbMxgFy1TpwELF2tMz7VrXdLqERpboiif3wziGuxx1mzWbCdz8zWDn8MAj8QgkgP765rxc6yo88GXWpCWeFnt",
  "key37": "3JTC3WZgeaJ4a2PL6chb7Dug1fWMKZUZGVSiqanGuzxzGBGzRTVwCYKskrJhef15kUojUurPoarGzd9yaaNUWZNF",
  "key38": "5q3qZ8FGVvdWJ6FG79G8AEAyem5288WaW2hEAGB9BXHZBdCMnCjqsNxnhtYkws7niXWGqsmTWgtS2R5Z6ucwQNfa",
  "key39": "JJ35tLekzKqCnC5orCpRS34J6fnQdn1KTVXGPNLGTWfFc8ZCsL6aKtav2uLGV4Y8mZNFX5EiyTM1HuURTTs88ds",
  "key40": "3QYtDkZUqLi5Sw2x9drNfTVGABPeZH1riJPJKHNh7ULiSK97iBRTmhLPH9NoC8ZCJb3E7LU7thRusW29jDN8giWV",
  "key41": "6768g5MJ897i7biyHLW1sQiJYHDq8cpSjLVU3nkCcFYy7JrDFoHj8f8B4rtgBBYb3dGoQaJdaG1VXmr2d5g6ee5u",
  "key42": "PQFcw7DA1REeiQT4ZMVBBXQmMtAintjW1XzwNciDkpGYMiCzjZxKstRRDFTWzD5YE8d9qx8J5LBBqVgickawhhz",
  "key43": "p4KQKgFWzCnMGepWj3Kx7LAwSUcuydTLE1aDM2YoAJvpL3nTyo4822TxzyeaxefwGuqam4HRB1zYS7eXhZXw75p",
  "key44": "277jpYFPWhQVzZ1TQtnzbZW5rATxcXYPN1bp8WxUstpV1h5xJ6twUmkjL9azpQ2EusibfDsDX2E1zJePxkijoWUk",
  "key45": "4SkxDQVXDBtXMcoFbY1Xph6dvp49E3aLUeHxD2Ddx3xT8BoockdkWuwWHNfKGe3WoKAw3bAMR6fzRMwNAdMqpvNW",
  "key46": "47DJ5mSZjr1Vp6dkNTkvgMZgPUTiGrKhTshxybDNQx9prL3VRNdM3bQDGjkaafNAM9LxxyUFbMVhzGDj56ubPeHE"
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

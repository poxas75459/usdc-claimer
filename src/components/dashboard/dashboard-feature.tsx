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
    "2MKyLmCWoV4L9cx7XDkAuJcDaAJga9rgQdPgh8bVCDsafK288t1QxxPj65UhV4LXoFkbYLQrR4XzTWxJGPBffvJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ku65rizh6rKMxccYQmoQoqDwWjBdbQwUjGhz85kJ6rPRKSTmLj6xaWpdxTQirLzvubaxgQ2BPHpHBxu9eqrTiQG",
  "key1": "2j8zMD5gszKgwEuFp6yb2zPiaAdMWSJyg33pNkdcR3bKwFaT1VQTau6PBvdQd3X97isv7JMDG3mkZY7c18PMUUb3",
  "key2": "3AbdyEVcdneiuu8ryToxS8tSNSjeoeABn8p4rs7P7KAt8WHAh5n3R2sqDQMtWBaUVp68BxrskQTwDXwbvD29gZJT",
  "key3": "5DQqyP2LZZs9KtgavoyxfHFhzZFWSskH7ma69SxhHyf61qcHMqXjVRKUaxyZYDr4sRonuBtKP11ajWnspsXbqGpx",
  "key4": "29SYyaEMBZriFNj84eh1cF2gEx8TVTwwo4L7yRWAcsAHdWh1anijLvdVCt65J1rPqivUZw6upar51nzKhmt5crtP",
  "key5": "brbLaBZyTkzKfBD4oUheY58vQ6rR4K8QSGAL1JLNHddKDYNcTDJfPgnS4YrV9Ho55xf7jLwKDQGPDboB26jHhbD",
  "key6": "mQL2Yo4zoi44FR6DzXUsagpq8R5q8r5hwfwjNfrZunE4E8qVFDk62VyrgD44zNdNwh9jLNfwZCZwvteMUhDigTs",
  "key7": "cAyKzjKnuU9MAYzPVcfVfFPowcYzahtP8KBgB12yNymUKbwWXMRwGhmtCB2XR5vkjU2Dgb3b95o9nWAWZc7rzXD",
  "key8": "2CrS2rTKu1YcC7gpASd13NinpjhvkNrWLbJnAy5AHJb6MUTVqGBLB3P4cKF5bKG6Qt4Y7RJSpHf8FeUZzxzNHV7B",
  "key9": "4WuCR1vX9rXMXewPBu8mR4sBvLYqKeQSbjZeMorRkw16jBBWVNXjQdv4DaH8YvsB8Chp29Q3YdEPKUbJKqXjxZ3Z",
  "key10": "4Y7dGY8Co3tSauKRY8sjA3qY4bMPcZM97EYTnajBERhfE6xQhUu84dXTobu4QFnxXcU4Nk9oexKETurfk22DRvsb",
  "key11": "4EnoidNFANq8gjbD6pzy9T1GFkHsp7Td6nfXF38QNQDK1G8jp4ZodYabwpGVVmacQbENkZe1bjPCcy1zo2B3cWN",
  "key12": "xMEi4QJkK78CZenUgsvgbfChfHzW3HLwX9j32hVQ9reH6cdbjyFiGTngVSg9tnixExMRKmfvdNz1ggrjHXrkzUR",
  "key13": "3gCEiVEwuZG3vyN9jt1NPJgWTM75LTa6eGK9ULPiHrJo5nMj1dT2w2ktga2d6SnZvJ9my6t3ZDZbyhJAAiQVPmPb",
  "key14": "4aAbFTYurm9wP6v9o3JzshFr1iPRSVM1NH8GB2ipCRfkJbDfVHwcipQdzX5vJ6eUATGj6BpV8U653KPosYtDdUXG",
  "key15": "31RNTAK8UaZDUpfxN6GiBc59KuP3n3yDN5rm5E9F1CAGiRyoYWY36gvtKKmdtPiQLJkvWn6zh2qRAntj1QZzBqrh",
  "key16": "38QdUHea3US7PoiL6usaC2ECDZpxQnShMBRN5rMBSu7svWwXhQnjkhyDTvQgaSc8mHjPxPxj1LUHKjLax15s64UU",
  "key17": "WvaSAJ5s4dwo34tVQwhyUJ23u24nWTs7T6ndTtF4hehZXpx9XQSUjzpKyXdaZQFnGbds13uiUVc2LM8bkPYYkJu",
  "key18": "2DpiVL8hfXHx2p8xvfc3sRux4uEqmA4GgZBopRS4ahwyJAASfDBHHXJjKvkK1YTGMTUAU1eeW5smBvaR6uxnyHov",
  "key19": "XbaTnaXxnPkqiCQHqH6nN9L22hZihc24GZ5mteeJFB3ecNsMXPM6d14siosUfAUv4rRyKyW5GTMpKuQWWNdaiHs",
  "key20": "oNsfkvxo6tKovwby8EdZ4uXBC77LYnP27zBqS6bCjz7QhB6h1ws6v2Gx5JmLpwdHhXAh2qTLcNpRRrY7Ctd2SxR",
  "key21": "31QLepTKmZnq3C6VqdzgV68YmNNM1N4S7eegscz5iCUAgmC5STFSBrsbkLghubFT38R8AobYE2DBN4nN4oF8sn8M",
  "key22": "3zcfyEy2YiWypFeiWAnp2bJBbVy5U144T2VUNfBkMKThgWJ4xBgMSdEpQWPZGUaDpkNDUk5r4hJuYqvPW7tnVxrf",
  "key23": "s2QUV1MLUsWsR4fvVFPErgTw9F1bzmBECFqPCeTUtNiHe195iL78RhGb6MAweZr8vZJ5NkVLZxn5A9nDxCGdY2F",
  "key24": "48ii9kSHT7kvqUhzcjiosS86hu41QxBWLWSmGN6UdixPXDvL6TgRjXrQAF7LKg25may1M1rao5bR2z7DeR1ixZBT",
  "key25": "3sRnSMGhGFFX4MbH4R7obfXjUwrZYejQ2KEx6CSYfP3hPWmhizEX6EefofZXg1AgPgZ8tZGf2baXrxzTNpX3xKds",
  "key26": "3NsTvhtc8ZQEMRuiZ58bcVTvDVnUBC6tM91Put5zL4cGqTYPoMMa8eGonCHLg4Ls7WgR1LLCiM9rmrq3dFhRpW3U",
  "key27": "4c1BDXoEQ5T6ANUQTzKD9D5EsRjVaPdgfD6faydHWpig2efKv37RNutM4AEDuvvQLNYKR6u8pRToEhj3d5mHcbjW",
  "key28": "SjTNWcx8uReB4dtS75DRRWAoNnRRrpKxXirkWnXfCi4VJ2gESzR1QSWCetxwyvKk1heCUWpNhuHJGQj6fYyFDzy",
  "key29": "5LYgjqVcyRNwLShAajdBjPaNBnvzEu4nx3LTFUXTWndtxrK6gKXfLXFEPWiqzcR2XK6TtnfstK5DePhr9xKXBJUP",
  "key30": "3T3H77KyCKxhz2KcBSv7MkGFyZcY8nukDV1uzKE8zzhdHraaWnnnchaPjLsyPx1jP55irinU6iCEuRJu8wjo946E",
  "key31": "3iwSdrzaSMFmzt2W7ax772tTB3HykEzNXk86B9mhfuYZ4G4irwdLCrRYKVfhELnZfn67Gr1nHSVTkQUBtpaFfZZh",
  "key32": "4CsuQ21db8iy4PaMyjRYMvLRjAVECUHgiAACKKcB1CZ1fmovtkKJ245aJVpaDR613BDmwULjNy6oAPjc5t7M6Mvg",
  "key33": "3N9BRSbHg8dycs1SCYp7vn2zCBC3fz4Sx5E6uuASdZfTom2jvyJxdZ64ZAgc3aaabkUBfFrCWKoQ9ELBxd2XqxGr",
  "key34": "5brdqzPBvMKZfzQiVWgsuGj55LXSNqsW43iXebjdDWndS9ari6DwZxbDSUcUTL5Tuu4zTow8ASKBopLhiPSkMRbS",
  "key35": "4d5RJFbZrpKrDHRADWcetcVDdVH2fbWbs8sYrN7L2VcYhZVvCLPcEChzh589cbo1Rq2UP95gL7bMDn6JXSTFgHZF",
  "key36": "f6UGebhc9jtxMHmaAqBz6PNbhDgGuHjsRo8T5keEEu4TGXvj8VXCzBBh8SLqwWFFZnoWC3JU5BagWRBxHDwtme2",
  "key37": "5kWeX1UkvcnFdEeshQ2SmxvPWi9gzuDoeFNzaXP2A3pj5QYz5d1aW4v6fKNcVZYTySdNnhS3QwoAoLdvM9pVfMZb",
  "key38": "4gdLai8cJsw16bhGHCdX2LsSeqiWjBXvut2BwFrtTnNQEACZeJCYTsrGLhqvjjc3BpSX55vyxgsD1iDHfBhso65S",
  "key39": "3NYycx2XPVurUMruKgvzVegdaAHxyDhzVQwJVDFkQeVRMHQrxgwJHgb8K4iYJgMKxthPxWTsjAxmjPkVL4abCoYt",
  "key40": "4NBgGkiFhNuBPH34CSwwP1sSv1ssrTcYut7QW9mbHrM5RrusGyPFD85CQiwqyroNexXkd7kmDtsGaBjsyVX3F5Zo",
  "key41": "3MnWRrfgEPhLLcW3LAeNNTGGF9JXY9G1sxc9GgGnVyNEuFJ1uqWj3pePr8Tbuv6ffCJwrbreV44zSCUGTG2U8YPj",
  "key42": "44LTquEaodL16EjayYAEihAozin9789T3qZrTSNmbg4oDAYeLEEHK6Z8peZUZz8MqnLxJHfnsUbbHrwdUoG8QLtu",
  "key43": "46EFccv6cm42fqzM3FdddDnHhK5M1h2gw12Sa8UxtLPvpEKpT3qUBPLF9TmLHL6VE1mvSgTWU7uRKyHMLSzcL9PZ",
  "key44": "4T6EvzVMZ1sCMp6m7GiwqJWCeKWFSzg8hPRpUYnPEQGASrp6nRvBFvN5qUDjbzQbBAyQLpGj8UR64DZhfMNmwfhu",
  "key45": "5o7nwsxJKTaD2GRqJ2QGrb2MSdqEXSxbicxkSopqvntw5RQuRswDEP7bnjy5EWiPhSoNKjkGDqAPtFtS1KxHvjGB",
  "key46": "2d4NNMKUoB5enYydYgr7LN6f5yHypZ1kYAMFrNB1ZtfWjRzHXzi5WKPUq5q7iiDFP4nGLhWtKyYqidD9iyYz5JG3"
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

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
    "2m13yv2P6AZa8TC6iS9xrcYdjUqcy43u2vmky8kLk9PaVJyjUf7TgBjMejne4xeZrcHTBUbkJMExartFuSFdDsmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HSFihuW94LyxNX2GfkEmVnGCRecMeC9jJANbKM2cGvxXqPvgW3D44QvBiHEjhNPu7SjgY4XmUyozW9JMJYZo2vA",
  "key1": "2SDZAX2roBi2kUG5oHdMaDTifgEqNpvFQXStUVxC6CixozpkLN4Zbsvqy5ctu3nc8iNSyed5Y5YPrfbVyQUKMPtL",
  "key2": "zW8sT8uMUqWSW7YuYssjRiFGQBci1WJFy1uVpXcYJQ6ssTToupz8AuZ2JjgEJd8RsBzAh4SxqdvPt6nBCFkiEXQ",
  "key3": "2HgecqMvpKSTnMGSuEvsUfa12VHvdfiMQWGnZzEfniE8tK7TxpxYTHTjWUUfLQHnzgK8GRP6HRyvGvFdyAwt8wuv",
  "key4": "3anxctSCtG6RtdLk9hVFvMagyjykiajegDRLvMqrvMnC9sWRaG1qGmc22VAhDa47N7hfPHvexiDYYHXjW9JDDVRQ",
  "key5": "73BtxYrnH4UqLovN8ym1EJmQTgTfbzQwEicGAxNoedoMJVXYTpWC9LDYaUrLKWrahFPNZDvysMxUkCHjFEuDHcf",
  "key6": "5WaVT3GeSH1a15Aec2PaZRzGDKSXk1AsKgVCoPyFtPzPyVnJUEUcL3uXDVYfo2KaFbaDYaXmtuNovLmJSTgCReBz",
  "key7": "3npWxDhcfyXSDwvH4cTNNtrtubBr3RFpeTfBD3bMwTznKwNM68bK5WxdiDZ8tdNZXcaga9e2UDnvA2BAVQpYgPDg",
  "key8": "63sPwXypYPMpFB6PAQuaD4D2eMweRj73NYkM9izb6RXXYnoCSaWHc755LgyfCUaWF7Zvu8JZbEUjdGXPqwYrD7uW",
  "key9": "VqMWjdjpB8xomwLUvuzKBSE56jdmtUHz7Y8HA7JB1XDM6LTtSRA43tHKobUjvJjoRfUEtUK7fznubb4goJAWsLo",
  "key10": "63gH7FofzyeA1TqSaCvbMbZR5owzQbaFx6hTBSwxXfpnSYPvwiRGjkotsvHv2ReQeP3Z12Ey9T7YpWhcUYsLNZAE",
  "key11": "RYxR9YZhnDYshm3ETJU89pZC64CFY8acsxPuG7zuQ5Wvt1Q7rvNma42WNhAgzBBJ31thivZsiPWiqQwJEpNd1hx",
  "key12": "3S7kUKN3QvsJ4Vv6PefEPRSefscUqHhj1qTKQxQjHgHhwxkHfTeFYzcEDfJAjtG8FcvPKuVwy5jmCpPLJxY8YVHy",
  "key13": "mqXkZSaMrCECxJfmekgFabva7upkSBc8nkfswCtJyGp1uvsXbdBS98a6uEELhRV8fpFuKE59aJKyoLUMMiyG6hP",
  "key14": "pjSBQb1aCwnnRxEU5m4Wdesp9VFkRkno3ufSMnPCHHpcxXLviJrTqQThb2KrjMmwZigjfM6EFV37wDfpzF3kwDN",
  "key15": "3KcawNBAV32acJY3RKhjFz89dHMbqgUAbUdhvoR3bGeFUJD6BsmDq16kuLkC56yUBfcy26cqZw1jR4d7tJ3TtuDJ",
  "key16": "2TdGiweH1o3UDTAmZxuTFSVi9wuEPEtM4SRh6WnBGtWrnB9hm1EwwdJhtcRc4Htm3uubdbfk5k571L9kujN3FCRw",
  "key17": "JRHbDfYM6XKyVxiHeSm5CbGL43H5QZzMDYJTKYrvftV4Xuj8wtAm8zdMrm7KZfW2XhrEGe8Dzr8oCa88dsXeK1t",
  "key18": "4sTQ7VtpAaRiRaYoPMi5je1uuSdK5vv4rNM9esh2F4RPnXB6FDWQS8xWmGwpohMMmjThwuCpg5wHnd5wMJ4RUGWW",
  "key19": "4JrQF2XB4x7VbvgvVomBfaKoq7oTf9rhvWd2RzY95pdjMfPpv2ARr1Wdjd8MVS6Tb3E1e15G1dGDrhrXp9W9a9Xk",
  "key20": "5Zpt9UjwMJBLEP9jAtg4E4FyVhPnKfNzZNuJfN3MdxpFTnfoitCazVZoUn9fykfDvrxTE3wsPiqR3D9HeKSKa2C1",
  "key21": "5V1pKrTkBusvtxogNWNtGRgMEUwcQJkWWAxCgBzU3m3qvSpMTjzAf3gvvP7sVxzr8LJzb2CCm4fpYJPCxDsrgR8V",
  "key22": "4Mo8xrD176PPiv5hHD3ZjWDmb7h8V7n7jZ4xZFiBCD95nw7GfpDSGTY1Fufpf1bzcHZFsudCpnACJkFB51kqmiNM",
  "key23": "2JWJwH4SbDHkXdDBxheQBB8xjBW6bfy4PJCqBcU5QWA44VqpiXbLsYC7M228jUuoMHv6AJxhSwRbD1c14rJhELuv",
  "key24": "6XArJGmEGkbnEDHMUnEAE549wVt1o4nubADGH5gxyTSCwC8wr75hfK6MNZ9hsr8dgzVMYfrmUNAJJNEtWDrzLYo",
  "key25": "5exZAAGacNcj2jQp8cazbWaAMEzV7DAAkY1geN516FmbhZx8P8VgNb6QutoA3LHtfjCoooQsEeWBRDVs5kmscbhd",
  "key26": "tvaDN9gvTRvpHhBKNcsx4tgyjousytufJEFE4XxTc8cWsx8RxF6sRSrSSCpBXuH4bwkLP2mMc1LkcKZFqysb6hC",
  "key27": "52shHnjuQpaGhpBGxr7TzShcD4CrD4N9gVXrSyqCkR52HCTxjYTnnvB5YXtaNM63W7S4ExN9BGQzQuqq3Fp9Pim2",
  "key28": "5vvFPi6ZP5vCbZCQTEquRqF3Q5yaaDLXhHoahjpxw6MQs1KaqR65TpksedwMNVY6d3UEN5GANNifwZDWK9Nic5Gi",
  "key29": "2VidgHpLiqzCBXVQwj526WRJHpSpATyTifLgrjz6U87es8AJcTVZoHaprYLYFtmoggEvsWeiZHv8fLQgNi7G3XtW",
  "key30": "5nRo24z2vgXySMp6Q7dn6bL7Jfr5uLkM3desesv8tufTiBipRAefahQUuQd1G7Py3STqYBbUnvHXqsaZNvHKgqhm",
  "key31": "4a1dzKbybdXKRzf4xQGYN399RezezMCk2NwWjfKUhNgN37wBcKwvJEoeeiahTJkdtZ799M5xnK5y7Q4XTYc1i7tw",
  "key32": "4ZNR2rpgdoGKSy6ZNBzwqtKERhXfAza4UyAs2C43Mfbrd87Ttet1PYfXs2NoGyk1Gox7C7itssSGGzvefG7LyYti",
  "key33": "1f8N458xQRcgJhyopgMURNiWPEbdraz165gz66n86rUmaegdymfBtGbhz2XeD8w8FkA7djQUohPAMnH5ac86J8Y",
  "key34": "3WKgAzEDXQyhxmCR9xzYNd8H4SDJq5EqhoVa4JbvUK4vrFG1yTUi1cTGdgKECvCNz8oEF1Sinb3tR3HrWnsGSwzL",
  "key35": "2VPENWaLLkizQErBA8DXGYqdp7twXKCWdCJpsCUaeFJj9AxFydHGDKc2TkVqhLW315HXkGkKzR1DHbn5hiP7LW73",
  "key36": "3PjxaDaHwdkV8gKN9idbKkWTtLAwn4zWnaWP9EC1wFUVzGMSnpR5QGLpRhDdwfEJFKWgNqFGoG5o99v67jTQ5d5w",
  "key37": "4V6j8yy1jmGtfvszvsafaGiTSNn2XjjUfJ9zyUQv7K6BtcoyyXKuZWkiPFMfFNW6cboezmGaGi85yfbVUCkZx4Vv"
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

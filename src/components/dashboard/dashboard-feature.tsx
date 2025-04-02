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
    "2psyQXAU9NwiQtrjUvX5ag4BzKUhesMcVFibbJxg7dKLSaCNCCGDtiwQMBoogopf9wpzbHyiZyUnFVZTzT3NBFzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XvsDAoWLZ23GDDcUw7m2mDAuK1e7ep9Yon56364QFstd7jonzZNvkvUAgUL2mtp5pqgxVLidADDZKv4zqHGj16r",
  "key1": "5dngWwKJjTHNHBZzPmYMtBBR95A9cxVUXccuZFvTf3gEZdUEz4gQWMy6EuwGjEeficpcqFBo8oiwBQP1iCoj8Ufm",
  "key2": "MEkdR6hV1ciU6mRsgPJNuGJx8ft6uTG6NKENFzpuQ64oRZ5YCb7iaZeffwe7sbM3VGXUe8MJoRiGnctseqCGxej",
  "key3": "3DFKgpXw329bmxMGn8rYepBJUiXpgmYSUDsyiCkdHxCLbQ4JUvmwzxwVQapwidrQQHFpobxtVGHiEfemuos7yT2n",
  "key4": "2fVKh3yfTe1dRPKTjUQmHa4PaNF8DgYckeXz8otEzb1axG3ae5ZvuoPUVTTTjUJez6QCeXAKD6FPjHTtTiMx4116",
  "key5": "YQ99YnzxX6vMCsyCpYsPFANveKZAh9NFWY1MvrTbRmSyhtEq8qeiNsbpMNjax9XRZubhR2JNjzUtFLLSXFZsyAX",
  "key6": "gSjurr7ejuUWaK3ENjFfXb7sVmZwGCusHkrkaUsYBLnxcWeYyTxZdmWixqByEMDYqroxAQzzY6Mdfe4TYcTTqu3",
  "key7": "5JGuZbjCRhRe1w9iHhLAXgBBRut3vxd9i1CQcxy3o8JPvBCw8G9uC3BRctQfM6cwyBVydEMkkr4KTJhQ8BQU2gma",
  "key8": "5f9x98kJDCiz3wBJVb6qodGRxfg9Rc2U9RqYi6Er7GTovrL6bKyYjMGWJz5453uV7z3atRZTgF77aLT3mopkWUqL",
  "key9": "AZdhj1AaCSG8dGksRYuD8Hso2D9y5BuTMe5kYfe7LQWLPZXft7XMe6mo214rBfmydX14qyayQqTgFuGYJfzUj1v",
  "key10": "3zH9qPXTK8YsKtKXM1gi98ivPsSct2wBoX7Zfykj9y2CyFkbTX4VNfGuAPytSD9HBiKjofJ4wLJbU3q2Erw5jqKd",
  "key11": "3AyV3vNPrEbUkmEmQf5sap9FLCURLnDNhoJUbdfPaiaQqnkBWmdoLsSq27U2JGL4CDXD1BwY7nHQ4D5saRif1rbN",
  "key12": "3jkkBjU9oVt8FwcftUk3QPQEQ8XapjFMdrQjoF4bHcDTSFhyuPmwS73WLrAqo48KCRprwx4X2bZYJESrbe3akW1e",
  "key13": "4JJiJJ4TCaRPKXxfcCpzAxpzAExVBeuoftaXBaDoBGamfmBHdtMMjmZhLXCoHo8y46TKMPRYoNjJqpykc4GmNSay",
  "key14": "35fzRT9GN6jd1Ybe5yMdhagmrs1XXPM7YTRL6EqteftoVujh2w3hjaYRS3CRrYoNZaYXesnA5HCohLMZc2vJx5bY",
  "key15": "tNnot5RvHWdQqbFsLxXsZcGrq5AHQvT7GS8ZaBwj9MYe22H49mc1sTQYsm4EhwoFHUce5ybnvggdpozDP3QFrKh",
  "key16": "3FLFPgV6WSTttB5bsihryc4c8NXA9KXRRJZT9GuUpttxnaNBQVVEBCz46KXkNnHUUQYpuuM4ugEnMoYp6m3u57Wp",
  "key17": "3ijQRhL3fri9Q9KmBCeNv5EsgAUVgYYKCVKMyEX7F1oiKusGUbfwPCPP518vsLJpufD1QVVj9s4M6xcCUaBwAkND",
  "key18": "maNrXgjm6t5SKseorJ8dqJN4km5LFoVdWo8Ax2iUVKatBZQfwNg6ZbE6n32i8F93HfpgMBYxeLcXZVp1DqJ27Bm",
  "key19": "57zBparRNMk7KEzBN32RtJ8jhZqyntkMXiJ1BeDiJkJgsC3usR8eR8fhzTGMEKqdxyP63Kt5oFiwczeKoG1yiJFR",
  "key20": "4vRZ4MFPewppvp3jam6s7nR422K2HczdQQSfT3Rf7bKLiUHBNFLbsJUmK9xeHrVAVuhB9u6xWVvdD26av4TsYVAM",
  "key21": "5jSU9X5gPHyD3Gbex5EHzxuYnSseDywZFK6hRcKNQ2GN3ZXS4TgnwFHCxAxJ5FzU36xc7YDynPd2SC8RwpPuNy51",
  "key22": "cYGHsFcKnJXRP6z5oq6mHoXQNuDnqzYc2hzdpeebqvnzJ2MEZVPgBDPnjmAS5dbNhKE3d8gJptrcd9Qr1UQ3gbU",
  "key23": "33NFcqhP5tWBD2xMyWDbwhBWoC9H4rHks54k5wG6AkNxbkd1c4c9FoV66tCL1MqKcM4tDqLHWGt9qxexYAM5AQuC",
  "key24": "2E6Sb8AFS5HeVmLaSzCBXQAWMQp5F2mzePZ8qYjJbeBSARoK9QiXWAMuoaq26Sj5aRX5s8wx5wcN3aNam3qqikbj",
  "key25": "5JBvMvUp5gAUL6XUC3aoQzfznAdD8ruqhWKFFZBcrEj24EB1bd8mJYnYN3QRq24Tff5ULcXzbS7LnAw8Dq6B6nv3",
  "key26": "3LKaGiGBs4QGJSKzj1qQmMWPpckFwKwf7JLW65zFu4orANmMxxqXqeWhELqoSScD1EooSmUpfXMaGGGpbX6gmeq1",
  "key27": "5DTxVdqN6TJSWfN9tabTV3WDQpH8hBKmstBKLEsX8gizF6FVmdpEfcHuu6qFkAo52A3ZRMg56JMv7gUa8znkoHz3",
  "key28": "xb9xx6fNofgr53JKs2ZXJYmpLwCyXEPKcxUY3hBALFu76U5iHJWU258jPyADLvaTuqMi5Vx1EpgSGn5dJMwnuEx",
  "key29": "4XW15Aj8nYRpVtgsRka4B799ZovJ77yCAHyrm1Cn8dRbcR6iumNPRVb6a1jjuqCCnyXm2bVdZpscjuNKojFWgWaT",
  "key30": "628cqtgKCMrCSjvahEnvoZaWWWuPCJFrEJwsDuLRiK5Cuut8nquSKt1KAJ54fowR5SFmENbfng8sVczazXYDGyBY",
  "key31": "656o6ue6wRfAznm5B1jgbMwJU8sr7Pv8zdhJMWrBS1gQPJXKvRtWGPzCbwi1M9Gwmdsp17Z31taA9aU48XSeYe89",
  "key32": "2CG2nBV91zLdX6mmX4YAaToFCaxt8ZtoRhivCDCvWycvDpZBPwBXTiyuQNWMvJNEb3pJiMuGmhsS95pSC19iRwtz",
  "key33": "126ygmmTvMcxzvFQ8aW3tSGyK5dXvh4eUfVrqEqzGGG4hCV2duUe7CQLifPwNDkveGV5PJDSbS6puc4McbEAh7RT",
  "key34": "ebUsy5ZGr4ZmcKBvZqrVXqKSLd79XCv5iJmVhJkAt4UhvZJ36rvyGUwA6UWU8FTdZ5iN87r3YdtEBXwC9MF92AK",
  "key35": "aZH8ZpPAGEb1dAtTT8nrYNnxiNcCK47JXxLdMYmHJmBXnKtoPJNYTezny2uu5njrkcR5urMPp7P6NdedcVW3Vcs",
  "key36": "4EBq2TVxEdosE7x8nuoqzt84nTdPnzDHDx6mFJ38P8PdwVa5LgGAHABSWkthuicyPRKUeoYYF88Bb8qPKRG9E1Qu",
  "key37": "4fnuhhqWa6KanfhwRwEUKHTdh2VV6BjDvc5nF6Yg1GS4t8XVLK1rFihcbcvGfCpZAbrVTGBzWfhtLZ51syN7yUHK",
  "key38": "4W8KCSLC6u2DNMY2G6DgAG1GHzcBR8haKxGPsb4ApQnA3qmRqpKiwm7UTFCM7rTz7hWbM394bQ9j12RPLV5BmX2j",
  "key39": "4fH69n7uR46TWHnTJhvb8j4HP1QemGE77iFpD2GvTQt7WqBoe32YGqvWCSkZmcAGQrUdp9SRwyQot1c8B16BtprM",
  "key40": "2GgP5EZwVt5TNLJhurzhL3qoHQVsCgu8Jc4gBVj2NUDqWtYJMgs1cMU9GjBKyYxLbvo7PTkEsnMai4EmTuV96J8E",
  "key41": "552WKi1riW7jVECbPjRLJbxmAP86xEH8BREdvJg87tViu8iMk2H26714hGTaMHYyrZbxu4AyH6UCukcQqhArwXkE",
  "key42": "CMDSfREXL8xFinTq7TKsEfW8Qofbd8rGNbBbU2YwmpuMWSqyYaiEz6WR4LvgZtuT9w7JKghzaSEy28G3MW94r4n",
  "key43": "4AcWt8CuFgEz9Z5ksFYdfUKDQ1GKdFQutVFd6Hpg6HMZsVP2xJLhYUDo6SVnJ4GsvvucFuyP9MzVngoU4tdzbhjR",
  "key44": "4rD2idoBkuTQKXUTczu41GZppMMqmcXYX8uYzf8FfHpk3GjRfQQFqak4Mf8BCgbFaRxMpsGaDxPuq73rzioFo2pd",
  "key45": "4FtWZJGBTuyXDDTBELfTpn1YhhpYswwJGggctGx9XJxJvxdGHmnjJ5nrYwRW6wCB5NX5Z3LC4Nn9Mr5GT63RA3vq",
  "key46": "im2Q32NcFcDrzLLX3iRPq6GE8N9HYNXnCw3phNNpPNLCpSA3YPqTLpfVvbnWeXt66Bmgk7MA5wpZXhtpWdsFRN5"
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

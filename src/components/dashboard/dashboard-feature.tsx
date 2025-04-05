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
    "5SPfEtV2D1bTdzPAkgEucFisSDjvgFubRwbft72mDg3cHoCiFuBTuApU7kiPumMgX2ymKpCcxJonYBY3xy5wQusb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXmxtzwY2GQkrBJfMho8q52QyHQ5fRGY6oUV21q1xe5fqhs9gfXHJqvWSTTPVAKBNdxPq7EPNGBgLkazKfR9d2m",
  "key1": "AGgLf84HbRE3wNE8oC5jgxEUhTSUFFXKmztDFHxRmqPdEz5pjnVv2v7abPkJXo5GSpQk4pFy1DSBx2aQis1gHqx",
  "key2": "5g7duf2fjucwjKF812gWrV6GFdMFbAB7DEDpyN7yiM3mNr2n1vi4JnSsJksxpxbLp9PMssdpDPoTem8Rs5CG8fwW",
  "key3": "2oHRqtxUwtEHvUVbHV9eZhRY3ASToknoyeQhiunnCcv5CHB8AZuoYgxYLvuEHgXep6NoMgYthEuMoFmNbD9mSARV",
  "key4": "3B9NkLxnMfsyNCe84cx2JSQKgXSJexXAfYoytC4qN6TsPx4pudTiAAcv6Z25wHaXFMdtA1L6oYCLXHdJjLZXc8yR",
  "key5": "4V3VWRXFsm4ipfo1N95L2uMZRAvpWBfM1N41BMZxACf28dUW45GzczZsVAjeCtBhds9iJSutbCgHygjzL9NssC8o",
  "key6": "sSVnks8TSQ5G45mdY4CKRxQEFo14yZiiV6LWCm1QMBRVua69rz9zCxNhj2SwjgizmeSjD8nJgyaxE6cAaSEWLe3",
  "key7": "5o4YpweGtYnN9YBowDCC38hEetpNYdEVjs8qW7m6sVPfcVJNFRdPQDECryXJ3t4RCuqeQEsx1NRVLsDQYxMiqcnJ",
  "key8": "gKaiPLVvdvCnXyM6XGJbV2UsGts7b3JdtVp496LeQqWhmpZBLbPuYGHxnmGpHU8hCGRh68R3SFxQEAwCkZcEPZE",
  "key9": "ST1Hq2DvN5GB8ps43Hz8iUKxxC3Mayffj4bC1e87carBN8br5SnJLSVmJcqij5jeRs9NRBsF7b8BMq1rjoJ5UUu",
  "key10": "4N56c4Fe1BW3sxBVvtUpsbgcnHQj9Q1SZAU4tcZDw8dHNKh3zUiynKG5ZcJUcxTP963qne2k9q7F87toDtabYZ3k",
  "key11": "4S9xuFqgXznBybRt6iaQNbJPv4U2Syd4hreu8444x1EgwnjVxyC2NYR8FJtMnYdXPigPQicpMRrn2YDRgssPnhRP",
  "key12": "3KWqBPV2WnXBXJnAjmannxADNmkUWxY48v5Unc7hVj7EeVF2cSvLYQqmfKNBizXvAH8KbZKXEnpjHNMLUjq7cJWr",
  "key13": "2dh16eNiN8c5cVyWEi4cbVpJhEAUCDhrV3MUv8wgVvUMkGtBdTH1FTm7UxGcEg3URZUgCPic5Qj1UxmPwUoqVanF",
  "key14": "5w5Qetr79L2HvYcvLiYojQhMTkoD6bcV7AT7sKHYToFj9YYYBQuH8CtkqoefcTyXbmHD4e8q2jTrnxwzUye8ibHw",
  "key15": "4WGSxjPBj4vay3p8X6pH9Z2EsNcZi23GaNEB5qRegor1uMLrXV2aLhWgwGZ9cSkrv4K5eEVcaaeWR4DmXEnUcnkm",
  "key16": "VvtLBECet8p7i62UHe4FknvcSTdfPXuPok6WWhpL5oWqecVdqomq2TAwUHGMPQb9q38hif7HRAkJSnpZuCBR3Z2",
  "key17": "DAHti9ax1smcmGkamDRNuFx5Q1tdPJwbhkjq76pBw5roNQtMrHqChHRXARRXGqD5bpj42TbsVpaKMcADASqY7NG",
  "key18": "5vWXjswadqaqhG7bLDwEKKzV36VRDT9VPosxEmKXsktVDqDR5VVPDGmjTusT4u9p6bZMX66PSAg43wmsC6GvjKUG",
  "key19": "3qCqUAriPtChL89fzhmG6sNQcyhcUaSt8JtEpfDFhjmh3m4ALAL2stQ5AQsgtjHs3fdZV9AGHn3b1Cm5Q2WXVR3p",
  "key20": "2RBRXZm5ZoT3FGqFhX9qxq82dadWiVRWvvJd9UEHxLmPSKn2KfUTQXRs33S4SL76r6iD2r91aK4bUr9f7TM6ZFZs",
  "key21": "3uRGKwW265ZLgJA3SY4i3GnkMsq6wEURYTqAfwaxqiboGuWNpSwAt633XzHJLbjocKz1PgoaDdgBw81fNEpHuTnH",
  "key22": "5obU9h8AirJutKXPBv4rTBui1ERAYCisdfxyLhVCix33LEjhczPHfhStuAmcn4jSpmPth9dCBhUsTE2BoCeoC2Km",
  "key23": "2Ji5aeydbNL4TGzogBA6rQZ3Ec5YAD8oEb3ypBnLR6wZrzvqYp2dW1uBmy5Qxc1sfqKG1gbzwCQfAdSxKnSdFQ8r",
  "key24": "5udoTaK4vr7C9ubV6TjxGUCPqfNEZXah9Mw7tfWCgdmCxKuA4qxe3t93iJsXRZeo7v8bH4kfjTdHvGH95VxHmrUs",
  "key25": "2fMD2gNoCttrG817JGsmBJxckgifJ2tQcp1RyLYBgx6pH1AHd8iCZX4PM1kqw7CxXREnsD9Eh2W9GiB3FGqgnBiU",
  "key26": "EvzsBs1Ae9fz1v7o7Lkxm5Eqwsvn2jMVHdsj4p4cziZnwmSnX7hQxx6D8BW4vuaSYtn6zmVyUMqA7E8Sy3SeJNg",
  "key27": "azDk3tcXgReCLFhd89Mqvsor3KXPkCQwxrQpcYxksBB4F7EwCRtVsVXGTyxLf9pCo4pCCKtGX5k4PRbDBzNP72L",
  "key28": "5hzLYZsxg2XFDyEAf4cniWj3kyhn2p2wLCvESKvSpa6g3ASwx5wE9T2mNghMvSE1Dbyqu6dF3wTqy5do24sboe3i",
  "key29": "25ZwjTq396bFH8geUDUW2FQEQXKL63NcRWC8XinMaNotEXm4Dvomm1sFgJQPLVLkQvzi6fTvA7fE3odZg5aceSQj",
  "key30": "3ZvPLEhSAkyDvHXNSh8ssBiiraW3Y5yVnueaE9dEoKKjWqRqXCJUbRXgBtD8Qi6XR6o9YsWu8gJRdtktd2fGoH9b",
  "key31": "38nczkyRhgobh8eQL1ZWwXBZ9NqXavb6ukrBXraQ5zcZwCwmZcoNd3tM6U3hVFQNDmBDQPdy75ttb8bcjGm74hYN",
  "key32": "3jyu24xw82pNTNQXynjPuy81wUXDLNn6aAHet36NQbdSYVKR9tniPUm8iFAZDA81VsqhT929BqEcmn8qJJZHddhU",
  "key33": "5Zt9JZtsRURKVR97V2oJD9jb6CnHDF1xD9rgEfAsRttbjj1cE8EvZa7SyqjgBTUJvtjocdFBtiZtqgCg9VLmcHEW",
  "key34": "H1XPRfqL4hprGgAPWZdQMpsyArDkr4V6b5TSgagFp3hx2iTwhEZqAAG5Jr7jr5Y3NsUyyYKjj3i2bcQCKzvEHMv",
  "key35": "3FpuhUfLLz2qniExzUjeN3naEXSAjPSZbTTND5FDAangkGyMzYMNKoTUoWNou9zMsSYFXUkK4YhXmmnVAyqtvDum",
  "key36": "3hwqSmbzF3rhaMZwu21uGGvvfwhYuBdzFApq5K5JV998mUQWkgiDcuNnTdAPJ55Z8F2njX4ieUxvR9c88cTLGjcZ",
  "key37": "3u8XpkUaevH8wAsHWRZsyTAhiVzdg4MLBpW3NaT8obdW42AqpfHdW4c9pBwfboctmj9aLbPRpDBXwYWVyzn7eKar",
  "key38": "pWrkrZ5osjmQDfZwQWQB1ACc6EnWFQD428GoKqTbKb4hSMUCxFPtjmHqMt4DmPHc8hSRBJbYznooZfhCkSeRoe9",
  "key39": "F5kTgqoMxnWzbrmDdhEpqPrgCMJmCA5nu1yQ34rvpCz9SXCa45vdTYiBXWhRPGJWccyMeSumepGpAqfTcyvgFzn",
  "key40": "23PwRNY3uFRnAic1BNPKXEEV5g7WoB2pzQcxcVgJc9ZwJS2b3o5L3EzsqarDhotBTmuzo6z7kMjEbv3UWJotq83N",
  "key41": "5KkkpM2XJtXUsQ8BKz7zCzuEvywmjSqp67LWSCmcqzsQxw2AAdqzBjZoJivfiux2W8xn5yBnsas9gjgRKtTRDF1p",
  "key42": "2d82j8Ggv5F4FtUm8xLK9EsEiC6yukFCd84SsQueAwNAAxh7sMks8d1VYq2ksLgeJqc55jgFmeHqGJqW7ZNqZxua",
  "key43": "45NbcDjqZFnyokKEJmRQBzYniUSdMtHAAhFNnCb3VebV15WFtLJxda4emcDCYBTrHd7BPQ6z5dQmMKKzKyuaAFth"
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

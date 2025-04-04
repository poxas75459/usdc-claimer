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
    "4Rz7DTiRnUiSLD6g8gq79xaaBrm7ERjmAzNh96pGF2NJvrn5zSdaQhcR6Fs7as2hHPm4c4wCCPLFDPBQBoGVdMC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pPAtngtJ1UaQ8SefwM8GSgHDon7NZbuLrxtvRxfQgWSFu2ypSeSsNchNmFVWhKPvdZidGUnpSdSSqC3Q4Ls8kzb",
  "key1": "4QTvGfwZivGuWVP3G57yVeAiNCaABhGk73sXcZ3ydDYUEBbcKo63N426SU88SiPna1RtMgLq5VFZKoJYcmh2SHCt",
  "key2": "2dZbfQkHTsaf6Yx158b61oCGrG2GgcHBAuPjCaHFbGPg8qy7hhNU14kp6mmtADpseyVsJRf2k1sq3686DUs2CJqK",
  "key3": "4zbGTNjsDZGyu69TTsUWnJjYPUpjT5Hp6DmrDUcLhdXrMP6Amh5xUxzX7NwLse1hjAxVcfKrxnAwn8LT8KGbfGLT",
  "key4": "54c1oiwqrCS15wACzsuq4uQMARwY5FHMhUskqJCzL5sVrU85RQozU4U3oLsQcBX3hTxDCFUCDoau2szGvrcoMHcz",
  "key5": "5K7Kgn5HCn3ELbkDo4ARA4un8PVLono4A4uBkauiYf1f1WipZvMCaCZbh7LoowR4azGAcoF5u7E8tHr3pCCi24bu",
  "key6": "2dC4AVUu5cKoAhdG2i6abWRrrjgznq1oSeyzMinn81Y4uZyzgvZtdZgLZchCnZGPcxCJbSSh3UkrSrvm3cr2LHrT",
  "key7": "QSVcaqtEZvzcPXSrGDzcJsfYa4LMv7qi1HSMw5oYdXoTXEitf4bMcNAT3R4A3GpeDBNHdn6HqfGnY4v7Spf1YBG",
  "key8": "4QpXfhwVLDhPFk3UwGfiM8d5Px6EkQvbLjLhBPGtB2q2aosFPyLjoX89TStc7b3ErTkJpvWSUzLoPzanK7JxjpHq",
  "key9": "ffp4YhTLBnAwhJfXoVZPPGJR3dHvQkBxpqWyd9Jsuq4siR9c8K6kbmQmDCo6D2kCaCnrMD6i4CNiHqt3kXuvEW1",
  "key10": "4ntpLwhuAcjZmLYtCpqAvmxHshXV5EHn2ss8EvPD1uMLSKdiqf8vHESwopkzkHjMjQuHJjQwMtpNquxAc7xX5k4X",
  "key11": "2Bx6jzowiPhwCmnmiRCt5GLMWQmBaRw7Zi3aLQHRZMim4aHYf4KBf4jmhAgNJRPN7ZYepMuFL6zMp25v4mMnTBdF",
  "key12": "HkpAX9d16Qa6Z5z8fa85UxGM5oBPdR6WFr8NrqkgL3kyYFapGUR8guQHjCXvDLJuUqAvXMsBWFYYM2wQavakUty",
  "key13": "5nVec7KoJf8cRnDJ17X9Vv4ezqa7hbHVpJEAH3Ab8U2PEricyGgYTu456cQ2vjp37WnxS2rzehhfihUPGxsTaBsC",
  "key14": "5rtfL7YC87hprNSi3MC6VZVo2M4mZ3H4wCX9w8kT9YgmtXyTUxZBFYhbqzLTFum17dwaHDe4QtbYKYYmUQW2RoCp",
  "key15": "TnVw26Mwo22AT4EzQ26UtH5rs1ca4uQEjF1Zatpsifyi2tHTVZnf1KXt93fWCvC9usgxJvBLBxBUNZBNt9k9V3V",
  "key16": "53EWy6DtmjpQZ9DoMPv8ZbB83bPoGXCD7YX6N3MVTmsn7L46R3M8vJfAKPfUAWJtqnSLPkUVXJzdnPHV6jeajKqS",
  "key17": "5awLU4Y2GE54Nbuc5XKf911yppEYmo1kXuMT3B8SgQEqNwLqksN4eR4SLvnuBryJqNNgNancfzKkSaZYvW6Qakg5",
  "key18": "3EdPpodPWvPSu3a68hZd94iwj3RDcVXz1Qac8Rb6bz2smiPjbdqvN1wLesE5XGhLvBCxzdHm1pkKuRzjCWEAVHAU",
  "key19": "4FtDw6CaWfzr5mRdfPKHmkZAZgogvVBfnp5GKN1VyCQfZQWUium5JXz3AvFCz5ZLg2xSSZMTktGmM42KoXb4jaJD",
  "key20": "2uwfuxJ5K5JSfaATa5HMngRo3UzfYe6WnYUgAUzi5f1rTagg3jyuTusZx3ZY4V7T9bP98YTDrvijwzSqiYySfPG5",
  "key21": "yjaXFMq3ERmDCJLYm8jvpqYqt7VtSZKcCQQD5bGfjciKvs6FFjm5cep6nK8DxmmvEsEGjmMWGzhEqQRShZWc3Rk",
  "key22": "5W3RrEnH9WjRPB5MjSbaMfMStn9vNsJKCaNEkdBTa9Xo26okE7Qa9z3rByinmwcRDMTuHSXF8qV4YAjaqiC2sU9u",
  "key23": "5usYgg5rcV8718H2kqyzGNbeEwi3nhEvC8JMfXRC2aPsw9ML75CTwYNkxVwZnRH8vvgGoT9ZJw4DWXGE8JrtxpEA",
  "key24": "5gTQ6c4PEgP9jtbbHDNoS9uDbTYLykyMR1DDa88gDBFV7jBPf5T8DPutxa56THAgzXZsWxGRjqnpiBV3YYVaVQWS",
  "key25": "3aW9m1XybuFwjKyBvB34c2JScZXye6txrDnmYX8SQDrSDZ4xbLu1zAtQS22z59BhG4zcDJwVyy1Km4kbRfvQzzbK",
  "key26": "3v1KsMa2YpB66LFLpdLkwsRoRLJppxCGBZmTs8fwpQdHDJgfsa7oZWS2n7ixnfmoErFEjqiias7ha3mmmHZCjfoD",
  "key27": "3xjzhcP4FD2tbTmfqNaLurpekqka8MHybMdfAsPdzuYmQxgb8yBGcfuDxxtXrGKFRTq3XKZyad1C9qih3V9C8bMH",
  "key28": "5eK8YKH7tZUQVnJboCTa4djo5Yu31C9WNyw5jCzBk1BWjhwJ18gjkdJKE3chNCm5QCqyxh4BYGN5GBMgUtmQez2r",
  "key29": "2EbmSigzPSmwSkhsCiaCTPtwzLKZtQ5ug5ztJvUV8hMjeWs2wgQ2djRq5j8Eq62BaQKFLpCEkwb67C5hPu9XYu4K",
  "key30": "4t7i6y7kGceSbjMiBatC4PicsALzXr9KQFHHJ6wWm5TjwRwzHpqAdnjNoc8UPFfh1twqYpPgCTbsSyi9wKj7zsiR",
  "key31": "25NYEVpTFSWz3aAdYKSDMtTMPmvFAKq5b8B9ec4KRVGf8qpDyRKSohXnyih7BapoPGCPdMmgSLZZeSERga679VHS",
  "key32": "4tdcD38jHwWFjksvZHvxZdciNYeiPf8txxzNmAUohhqZHqxVc88rTiCHSwUYCEG4hXunCoEYn21Udbyv1jsgYeZV",
  "key33": "4s8CojrkEnqDpyYZDMKvmJVrDaUHHziQkUQeKKUofXRQjrhouSAxtRSAjgu4Ft3V3bsrVBm2xJEwjiCroN4fNXTT",
  "key34": "GpAPWM4JRRZWz6qBWcXP3R6rS9u13jAQQaG1jeDwLWvWChU9mzHEQmWb9F2bPKrW2jdTCBtY2vVUTbCz4uLvWVB",
  "key35": "5Vi5YsvpFZWccVQmFMr368subC4rJiRi1GDsYyNnnB6gWgJJrukaFbL2AVrXHHhfmjMjgsipTeSrv62onaD1esdN",
  "key36": "2b6xWvpYnq3S75yXPVLiojqw78Pk9xUE337wrbLvfoKHZSaU5LaewQFBsBZsYxmaALBurKHJqbjdBSruvMYSWiyu",
  "key37": "ZxTh5CwjnRv5LXFGSfJduA9di2TJ34mAzRtCiBJbD1C65ELxpJ7fyNc6tm9sRQLrYqHXxmAZw7Sx46X2CD55xyw",
  "key38": "43SqBDkJvCMbiiwKYsgP7p2Asgc44KuG1iRgpMqvXUGogmyUZn9ouJ8WX1iodNGhdj6ePXzevKdB9ufnHk9BvX3T",
  "key39": "54DR8VwJEiBNcJNHDYTUH2pUTLFmiaQCaQgqt3UQ322F6iUrBZmLwAwHS3nosJSEwqHGXAoEhN5yR41J3jhYEZQf",
  "key40": "5Kw2YFfMtRVzD7rMzdMTJQo2c35uYfgZQzbv4NNfAHNmeCVzkPrxPSuunxos5bkWDCS98zy2fSpaumyLA6tBQd8w",
  "key41": "2rboz1qtGRd3SFGTseATY6xB95kG8uJa4EWkHTuUqKzK5uoUJhn7crTiTeTXd4Z3zxR72Yy2rP4jEcmt7cVMsfgZ",
  "key42": "2D16GEqkXvQPFQgq5QqpNYoPPb4yHsyqCLSZtWsVrYTEBg9npLBV1AxcuuMhwBXQjHoQMbpf7FV4iiGLN2FPAjuL",
  "key43": "3ZMB8BHyt7koKJz5hedPN5x8P3pQkULxqPkbgzhcZTpN5zFD19ctBp8YB9QTbtjc2mScU6oKH4RZt4QwYfdMuvKB",
  "key44": "3cDUafRNVjMBUua1a7r9MzRznkWca9xkCc1KAJJQyoMgCAFmQgvuMUTyzA5GbHJiF3LKtsnEofmE9JcuwAsvv5Vv"
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

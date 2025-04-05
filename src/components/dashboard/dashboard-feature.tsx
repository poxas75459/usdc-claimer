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
    "5dEaraXLYz1sfMeAc2YSK496Rk8gd6JKbYuoU1FV4rUN5npuQgkuNqkyX1v5EVNBafHvybAjSHKANp3ALHwmNKHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgsGa8JJtiQLiqvUtGt33xtoVMwPvu8o2psUtJu96cCAyDGFyX98iJrADk9tSB7LnzqUNRmiB9KTxyefbL8zXXU",
  "key1": "5L2XucawfJrXFCjAm3EEsA4y25duAqx4vSaXYGr9QM5CnrC3toeo8BtT41P9Ymp3r54RGLfrj8P1chAUZCzQHDwv",
  "key2": "66knUTJsydmqTVCYNzYnMzckpYVgJqLRhfPVzzhuKBeUFMyahgD2bhwhwGGFHs87aGUfZzPKYRRkmVTM6kggRhWC",
  "key3": "4zpar5BdW7G6TQXt6bXnGYnWYFqKQFXJKwkmS7n2Vz3R3iQncpfc5Bgy32gY2ekhVzgPPuB1gDbknbfL4tXYkkUh",
  "key4": "wJBiy3HQxLPYN8zHfVfCVvbYVnfkVXccGfafaznnMQTWx2VCvsHweYoqBvnRzeu68WjBeooD5onzydvSo1EEpFs",
  "key5": "32RiDttnvft1mSTQvDZ988eYQcMVFxTJCBrZvYBoxKUT1a5eZqJoAoW8uYMDz6XxCEHnjgheDZMFWKUwUosFDHGK",
  "key6": "3b4niJ4yMb5ffMeL4Ub6VtcyGrhevnDguh9WL21zKUFqtBNMu5N8X3t7cG5KN9K9r7524A77eUoHt31ytRCt1xFF",
  "key7": "jw6FfyYzwwB54K4AWDaCHwgg69sdpbRFNAZMDcK6yrsEQ7XAtxLUN37Qh31XeWJchnKEXy2DxCrtnsA35Ke5ZzR",
  "key8": "4ZtuQuv4wBQ6UPLUgcAWbdn7SFEBdG2RL2YpWDdnDYjWpKgy1ubSuspSDL7RtJLr9ap4HEhhoQpJzsAcDYXALu8B",
  "key9": "2NA2u14XYspWCMVh65jxPNiMHkzZU9d2Pi2epquSNmn98vztHNyYhy7HYg6Pqpaz2iaPC3E9hYdFwSiCRrLG71QS",
  "key10": "2tnyQDPtUmjkxKNYWGbPzasVe1WsyqKZnEVF5zRRWKBPRV225pcZF57QM54AWvvCpsg3tPUYSnGUx1uvUWMHeLcZ",
  "key11": "3aJGNFXLCnEHvQZCwLasSkVUBT5Mrmvp3PXDFG4T8hD7BWcL9jX9t9nmqHTYUKKtggTeyGgdSrtxxbh1XvfMaWsT",
  "key12": "2kU6pNdc1c3TgGArb6N7ERu2FAVFtz5VpsRYDGyM847BVsC76iEvtL3LsknLucLaLgVQoXDnbFGXDYzDd6L24Wyg",
  "key13": "aFkiPJYHFSmiQDZHHd3za6SW9BtjHt7shjDX69LWbw6Lbgyaa7nVpb4JtXGX2dtfAjipWJTKrsfrbMmB6qSd7DM",
  "key14": "4RvDu4vtjTmAcctNByC3wYhxZhbCW63YJ6Nz2AWXL8mPhzdsgZGq45xq1mi7dNrsdQuRzjRWzbQm3QcgH7FzNhmZ",
  "key15": "3iNwwWj8N5CJ3wAxbmoKEQzMho85tki48ARdV2PvpgvcYNXFk5FafEwSgk6UyJ6keNUJYipgjfUktvVRfM6Lf74r",
  "key16": "24F9RNxbNwtWnnnqR5uGCXvk2jDE8EEzMpNWuFRd4CqAt4Ep3JVPKYW85yrqXfQWVoRzFWgh1xYQccmzubvTQJTX",
  "key17": "2SFFDAqEdXVjPBUCeGeVxByhRdvaTZSShJWNRYFtGDCkX6aaoWbPHZd9pQZuYP5w99z78yNmsVQMBC38gQFMuziM",
  "key18": "2iR3Bv1uKtsqeaesgPzMmWMrTQS1osoKPR4xFHgz6bUbcA3yzyDz48r3ovfUn6sRqMvE6it7LfR7jsB9VNvB4F5g",
  "key19": "2RYuNrYers99VqRMnjnsqCUeDEigTnVBh4RQ4drt8KpLaxAC5EqR8SGdBEozdDsGxyfY8gbzAsBLzMvbPov7oisH",
  "key20": "Ztddv9xdPYTcJEZKUz1A8EKwxJqEhZ2HkW8T9uTLnLGSCriGxayKNvRvYjYtYj1QyVMvFvic4i5AS3zvwMSxCNs",
  "key21": "25iufNVWnWvUp2qTqrQ4qzgCnhnJdib43RwUPL3DfCuGFGjECX8iC3cWMNLAHDL3E5VpnEKhpFB5hRioR98s1Eio",
  "key22": "62tHwxsVbHmAdMtRXMXXypgfMVdp2u9F3uYRTBvP1SK1oaKpeGFbrYREgcg7f9zr6Eu2oznVfkskwK91S3rGZhXz",
  "key23": "2H7YsGvs3HQL7FjWpWmZbdZvpQMA3YAfppUnmdaUSyqGyAzgrRu98CgsYTrTKhoD5cHdMSQtxPFS5HnfMskLs5Wr",
  "key24": "3TQmGM9p9BTmkspXQhPfJu9kBHzAmewNKXWKgU6C76tgLfqd6yA6yKDVHg1ojB2eqq3Gz69sihKXUxc3JzHr5yGf",
  "key25": "2NDRdjKLQpKi6DP9qxUCr7hVUnKyPcmmuVUmfGsscxg1DEj5UufKpH46BLKEp7iVUS6cijaDmq5rsxHUHC47b58V",
  "key26": "3cJCQfvjTFtLAhnXhKQm7tqMjF4uuDKP6nPUAMMnn5vYURhoZ8rD5FJkXndJ5Y7QJ5C8kP6H6LJdm8pS8UiDdLJR",
  "key27": "4N9xC1Vm5Dx2ZyWnYUuYEL2ywYyG5EDMKYce5cFwf5fY1cARZU1AnQapdkCsDnGiyyM4FNtTC9rWSs53L6VtnTRF",
  "key28": "XYYfLraFuY1K8HgkBE14bMwvoknBRMJBywwraPUuM9iDj5F9PKhQfzJ43mso8M7eWSuZNbTr4rvZtGtxuaxZ4Jk",
  "key29": "23aGTHJisWujQeaNuo3U4v1iwTHH7BGsnt4eDVNGJABUmDN1o2hFuWHhhCJ5LSPCGfS5233SDvprB8wYoBbygj5o",
  "key30": "4jW3jdBQVpN6GpPBwoJxzvkkuc8oGNNyAcvgrjS1fcR5zDHhn233ZzFBH4VWrrJyakQ5rVsEAG76NweizDx7X8zM",
  "key31": "4r7LKKLWx1hLaxcq4wxsMa7q5zebV2MaKQN9gaxnE5zX2cpvU5HQExpRoRfzpFbnaCZ4BJFTT8rZB7MfczYytjTL",
  "key32": "36XSwoAzU7fwSqXR77q6ALPDc8wi5XDAsg4zTqhpsVQmnPypYAdgyBECDb7yFXG5ALU3eDbmADjMbEkM8KVUPoAE",
  "key33": "64AYfLQ5ATexbLiPuesC9gDwExFd1qAPEx3Wwvo2nismV3diNvvJvmp6cyHeNU3iP5ArikPQonBfG26qxyezfu4i",
  "key34": "r648mABoNH7QoCtwyQDS9AREwycPwHov4T8ueVBaCV29yukbKb4bDjKoJa4aumptSWxmdzLTn1rDAM61yaJiydL",
  "key35": "4JxUL9DS1cMVBs2sHTvt1cwU8Qv39AAeTgg5BX9jxCiqM9Kn3bGeznfyrhZErQpjKJqNhAzZQqTEGkri6ppfbgei"
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

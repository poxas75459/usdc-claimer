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
    "9Wqa3CiSTrL8FWqwVjTVkKwNqZ6RF4FHBQhxhYYkjUdM4bfy5fJWR7KJELKe2c67xLwaUigNkNd9TPpEfufrGkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVVGiYagLqcfpHgTh9XJK7H9nc1LuGESghJZ5vbDu5rw7sMDxXJCcY4Kpc9SvwfwhchzfQqzsqZiH95x8CZ7Ltn",
  "key1": "21JQC2iKhj9KZmZe3pB9mL77a5dJstsiY6BH7yTxheckbqxv9fZ4vb2BmsTL4vmTTSQjvDEceMB2Zc3fuykHuSKz",
  "key2": "3yWx8WSw9CdMnbjCGr7sLEkhn9NgFvBqPGZ2Kzah5TyGGNjZ5ZpmRmF1rsTYPUZfGUB2eLM9C1RkMDZhL57Mryhy",
  "key3": "3UmJGkLkKjYiZSuo675LdfKhHiBEEvFeDhNeRSciueYc6MsttZreycvKhkQ811n5hPa4mfzcPY7EcUByBuHqWJrx",
  "key4": "ckMJ33uYqFTxShGYecBAmxUbsKxihgVs3Q2SjU3hWsaNW8nkBg45hkQLggFuGLjAcyVofdkGLP5sZPXw4HKVdhk",
  "key5": "3h9zYZuaNGw8A2vs5UKbhtasNQ81MNye4xvuouGgD3ejoY9TTECxmKJiabAjERbLeWUWS27CG6kVv6rZ5atEypH1",
  "key6": "3man1LWj5MU6rnsdA3sKTbFokwQcQspm8MoEkN6KTxXyy7hD1ACwzH2spJEhEGVfuHUDGVTC2LBPw2UzFySjWuTk",
  "key7": "4SchZr5tHAc3wHjDSLLMQz75dMT6GUMTFv1XjAbBaHqiqpAGzJfCkys45fJ3Lajz8kbwi48t8QRwYMWTyfiaPpHY",
  "key8": "4HX9hn1TXwwCcweUfkqmVVq4Q2i1Ci7wZhW2Q31SXMaoKE66bCTxBBr26gS8nNgJea8VFKZtwKBkTLv8ad71Q2zt",
  "key9": "4hypzFdq19mmUESFgpkRSVoVSMHnCABmYNSi5jSGpHJUB9KEx4dsqLss6hKhSkWitfg1HAg8NV7TLoGom8qhbkpF",
  "key10": "3NFytmDFZiRBJih5S9BwnCW1115nsrmeqx3cZaWeXQBFkPWuwS6TEQ5BpqB2A8XdHJGsHJsAT4bBQLSVn3qwEuGv",
  "key11": "NC8UP32cLX9E72aumBBzV5vUaGerrKYNyqzd88jQRaz6gSenXRm8YSFUs2RgSMNhGabjnVYcnxUWrmyXNKJjRjR",
  "key12": "3Pr99McqL4X7UUHy21UZDaKSnopQq2FKPLi1C8Vy6JC3mydP3ZBxmqXeUxPLRqEA7c1YXjPo1DfSVyQsCUbngH9Z",
  "key13": "2iR2ubiUJoQ6JHX1bbCwenou27k1kCLAjQBssim1hQaudAcjnn75ZMGXBp9kpkyqPXjMGzTaGTNbBtMVuAk31mtW",
  "key14": "3e7ME7fKgdhPzPwiFZqhzgY76NKYjwFLREWJA8iZtGo242V6xDnMfL3a3MFJsyMVhZtteKjZtL8NNmkyqWjdenC9",
  "key15": "KB1iSEyTncTiKD2tr51SnzNcpnAoqC4qrzZvkmsWRgg7pFhx36tbZr9otbeXTLY4R7xFsE9AjZztzqEFTFbAhwS",
  "key16": "5M3vXMHNNNfA4oRFa8PBPkp1wS7BQcCnVckLxdSMDVfcPym9i3fJMF5bLTXCYkAu9BSXRNgDQvBDyuw1HeGVpNqA",
  "key17": "7Te2napYc9kTEzfMiWnjMa3LR212Gf43jUYGQtwdMSpBNzNHNYbAd6qdEfSe8oZRb36UXNTncT74zTKkuFqoZUZ",
  "key18": "3yyxXTuFdMe7ZDfpgataKVPeC1VXhnBXjfCidbNHxUW2mxsJCWrk1zrsbPt3PbrG1DbVrXovYbK18XJXbBbsZNAt",
  "key19": "AVzHEZTZuQqUcUMwAPchwss457ALYXg7FWZP74ocqwBYhND8mzX2s8oXZ7JkU82HCsWfr6uicr6kAAWuYhKoKyP",
  "key20": "4SyyJFXXh2MByNyTvhjSTvEbCqniAGKcHrXjpqXgp9BKZbEmD3vM76zcvUCFv6jbHeTYLcacuKHC9UAyJaAJScpL",
  "key21": "2EwQfZrFQjEoNn5cFx8ygav88K8YvbV4Dd2sYb4BgjdpqxDS8DVxYcXSMdAjq4ypJhWwFKc5pPCty4adugmzx72J",
  "key22": "2UXNTVsC1XwJEB5BbUgzfdKCYNE2Gytf9q6oTxk5zM8EVdNRokhxPLFR92jwFpKHUJjGcV5oh1DaXYnJcFeQAy3u",
  "key23": "J1Q2TyHQcdVoYBsJoPxRXXYswB84Wme1aUdcqfxm7xRCnPqUazCzNtFCyCC5St8eUhXE3UxhhkPac6tMeUkJQnH",
  "key24": "3y59Linfx8pAJCKc2fR2NB5m6adZR982saSSNMufJQVziLwmoKHv3Yrtdf4J6Ev39c6QHeYYWeJNkrGDXWnzEu5s",
  "key25": "2Gj35CnY8N6cDJm7AZeEV7NYGpxY3sFj3WNTqzzb4hdnwtzg4Sc9psYLf2F2J2LjWGGYt5Cx8FYFm5Nam7Pj2eMT",
  "key26": "2p4N1qVGKcg72pvQEBbDn8dSd9LUuZrRPLtyN6TSuqtDHBaQv1Khpz7r3hYFF1uryKf18jVGZfkzahr5zkgsx4eV",
  "key27": "2tJG4Sm4DqjSMH38Fjrb2jiQy4byArZ3cjw8WHfVQvvAbcXnh6bRpokjWAYaE2ejXT9hd5Aoghex8uQC9jfMsxKJ",
  "key28": "6uAyTCVQhNn4ejnfCQPf3RQd3ry3btt2fyhTQb7iuiZbpXCNqjT2BLHf62QeYXJRq4NraQb2JrJuKAoT1qcwVhi",
  "key29": "6Rs8WAJau1dvcDBr6RVUw7F92tcU53TN38MnEXMqFvtcCW3JoHuTJQPhtzkU7osZPDozWnvipsD4eaVp7yoVZpY",
  "key30": "2LZL6KWVKqgGGXwXEdwUgCEHjNBpozFxvRo8jBLpoTLU9b8m7xrtUS7br9Y8sfv6orYrqYKdQzRdNYCuSoQ2Qds8",
  "key31": "KWY6wHMjLDiUh5L6yS6X9CJXHue9LbrhRhQnYiuQabh3X95vXGRep5outR6inwX4z2bBktJofvwSQPp5ZcaRmou",
  "key32": "2qodvhZxYrF9NSHkDwMtqU3EdTYGE4wCFt6eKo9uuCyPW1y1eGHup7TV4mLnmMKdDRBQWYBLa24gu8yLRd2aek9q",
  "key33": "uMowcJfMbs9XWDpEJzb9B2VeXhNz3R2LDTACmkstSFCpSAaJWv4ePiPi8GEkKdfwivJeqnEQNK97rVKZ4GJqYFS",
  "key34": "dKBeJeQN93f3G496PHHfbV3ZY2X4E2ybJsP4i8t7cEkWUhDfVUziz1VZubBDZRtENujVcVhMseBKtQDqFckCrSf",
  "key35": "4bjujxKhm3gyo72YKBjGf7FFfpJ9jqwjE8bkYJG4iQiaSerybPRjSzVjgvRWpYwK4pUV1tAfyeg1r9s19FNy3E85",
  "key36": "31MkBiQcEcoUBbRH24f4Ngr9f7SqwJqmfBGpsdjzpAonnBva3QJBhbxjqRX5FSsKe5qQN6LwBRQvMp2MseX86uty"
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

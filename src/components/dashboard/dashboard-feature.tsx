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
    "5cN6CRUDJ2PvNTjWM7EybnUGThrTrQTBeUqWUYV3PKUZLimxYpeCgagcKaaMtRC6DvBZSs2GjsyQKT2NEMBonbc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obiyWyubSCjvByxNkVTXPyqB8dhz64M9hUpJE2pSjK9gQYm695eWUF3chTWKJMxLCw5BGKCWgRRRMSjkSqWJpCg",
  "key1": "33y3cA59KdC5Cbt8meFKEykK35PgsVftHYG92Xafeaf9rcxQxYnFuwpiFkodGFzZfNDuXRtaVnMefxZ6GAswiHen",
  "key2": "5rTd3P5kfpnK84aYgnnCtUFhWAUyx2Mfy52HqbFwkCt3RhB1jDyVp8qHveF2K19rZp89hi5srYkb5njBDYRnKps2",
  "key3": "4Z8yPDxv5w5rJ3LXehjP3easnPLnWPHTJRUpxHbUu4tUffipBYvqe4xx55tA3WPCQSAg8y849x3zXZyk5vPgwHyH",
  "key4": "3CQbHy8g1dQddMtoPqiDefJXfVt9gZRxJc1nuSWDc5dqfBrDignD48o7oEM5BMsGEHvdL9EmzaZkCjAXYcANGT1i",
  "key5": "3t9vBwrxRFuhW5XS2i7SFkrDSrEsFKZsKmK7Kk9K6WuGEFhF3yDVzPiNCgNQJWLBTWKDEKWJ7DqEAjXcwDcAekoN",
  "key6": "3S4psVke23AoREeGfiFjochUyWhyWn243cSyb8BffgGXgKTokUMAFUz5dPnwZiGZ1vHkhyUHBPrGUEegMHiww5hQ",
  "key7": "AhhmoejdAedoeNQhuKSEYZvSdp4BfWfqyhrGyuPo1zw8nCjK9MdRZWLCBeBowxUgt6HrmFTuwGVLCSKXzPmH4Sy",
  "key8": "3dVDBNbJUC6f7gtqLkfcwdiaLtj8kEgVp65FW3pVSmpVEhu3bFWe82VQGQzbfQ4WMeHCXmCTL8Py2wqxDYndpQ5U",
  "key9": "64jARs1xBCfNV6cnzCo5LA5vgUvpPhD8FLPYGYTsmqVxibJFLWtJ1Zk92hBW24QuWigjiZmeLxhbkJWt4aPRJznY",
  "key10": "5Tcg9Fu4WzV46fN4vvg449i3j8E711vQj98V4qLcYo9CokEiitnoJNiX7XYY2AQLzCfnc5keVfbBVDnr7KsvvFkt",
  "key11": "FEq3HPw3yBTSLKGUWzgEHxTRCsEZVcdavfneVPscTisajD5vLe8eX9HVM7jSGukkVTUj9jQCB7QASZ6TKJQCZmX",
  "key12": "2TVovj1De5QjxrN65pgiDG6A2z1Ff8oXyajFqNahXxBNJe9cQB9QEFYHyaqkqyHM9dD6MhctmZ98F6PpVdZ3atb4",
  "key13": "5LRK3Kcu2tp27L5N5JWPBpimCHkdqCkbVMzzBofbRwH7xF56bJRuoFAtbnAtevaU1YuDu3m2rM79XoDvPBgtPgN6",
  "key14": "2TcLVebDVUzFMu8oRkyGVoST3BqUVFCWvhPFmxK5ACqgUNM8q6bDku48SLBkQVQUmohiUaSEbznoZdsHtgPEf1cj",
  "key15": "UHFRGgoALZcpqz2jhD1Na4xNuQXSdUgDah5UyWsTa7SkmaU1ZkGojK9KfLtasofrjhoV2J1HCeX69XtQ3WAqyvw",
  "key16": "3ktanNDnkZXLxwZ6Um5sSAh6hxKnfKAxdrAE6uV5SVW9Nujk5Kh2qZk7gMaSJcxRCLhJvMWwVMywv2ge79nb75G1",
  "key17": "66GZDGRQxh5Pp9t6oLNdkT4aCd5cSvv8nbozFh87692XczhwtE2Lma36CJQokGs2V13raPoMrwzgYUWWhGY6Bv6h",
  "key18": "51dQJs4C9HTPd5LJCWAQuMFp7F2YsRB9nZwvUF6Da55rmHcFgY9ihEKwnJYEpsqMd4KN3W9aRRBsYcG2rgDVjWcA",
  "key19": "4Bug6cb2r9cR6spnsNVui5fq8j5ZQmk8Bk8HCBmdcBJ73G1TsYzMbCW9ZMHrufM1rTHDVo2nA7JqUbE7BPyckKZh",
  "key20": "3S6Cm9r3LKdLHTjdfz8NAZqkg6zs9JbWsbP3FzMikQL9gMRyQTnKAqpQSX5dHKJ9sXDGK7BHm7bwvCEfG4hLxk7B",
  "key21": "2cpLZxuaotjrp24vJxDiNM34LRZgP7ncJLWUexsRuzVf4mHSNyJ27w6waJ6bpvFnhLEc2Tqp9ro7kJkMuNy2QVZH",
  "key22": "4RCQdqd1hJRXe8y3YsYoe1ueVBywvACCHKT78imCKZRQdA3saNpGvj7oncQ1j9Rbs737dx295jaDeXWLa56vZcS8",
  "key23": "2ManPuTUSNvy29BdXfHL5QXuiYTkTrT7pPrrQ7nkKEAE1sQeKLwiGFCJKLwb9Zr1ai6FTx4u5LFSn8cfeL34ThRw",
  "key24": "4VmzqEj5iQ85PLBnu8VzFebM51mjXdJxKabCkeXQHcTCdheqMXA1NztCR8CVkonZdWohAf1DCAKiwo1KUQTjKqYX",
  "key25": "45Nnh4ttFDaEgbmQuGi1VrmFSDP1VvbcqqW4U29S72EjHHtnoWKojEHtTqiz6tZp1SPhZ2cSo6mKYZuXHD63Gjwb",
  "key26": "4zYUmSrebiP6uATpA9zzRYfkprMJL1WPq8p3tp4NL9iBG4W6NBMqtQX3Sm5hVhar72XHBALfwD54VqNxLNK9QiNG",
  "key27": "4NW9kpeifWuoXMeGHspCBD5w4PWjxzn1Tns5BjPG3LoEb4Zq1efjJBMs8BygtvyGwsazVXo5xkQWvjMvVD66RtSF",
  "key28": "5gRkQHEvQJbAbA3RurDygX4jm7WVjZ1hAYRpjAZ4HifDfzM7JtZSeT5HvMr7yHjtc73vtFrWY2nvsKoaQpsExAuw",
  "key29": "2GxZzyLqKMQaqXXtdzaX9onKQx5vmzeb4SRmhn6fGccdLzq7CaY6eYSkxU1wCHqwkpHbfCd47Upk23V1zZypFFC6",
  "key30": "4LcY1XMrkBVeraPawUDtnjVr3HyetWjtLevtCknVuLRCwLysqGX4yLuzrxS4T1TJE9scS1V71Dj337J2qWo6Z4YR",
  "key31": "5kT4jisYwpMrN1YLmVzbvBnx689vHZogs2DGYbszqPA6VEahfoeLMNtK8TEuysJKdPm9zQnALq9XJauTpZog3onu"
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

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
    "48YVSpWx5N7kx1fUefCNk7guQVQmKDx1bYYEF8HW2M752h8xXshDP1XgzjKTwFGL1ApDfB5Z4XhsKe5AiCacwwJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQbYLNjFKPDtFFQf5WbrC8KuGTsnyNWXneULMoMt1yS9kSwX8FnwJWe5szp6HTA6NyWk3kFM5uNN3Km8JYJN9Pb",
  "key1": "5uUjskmazK6VTNfA7AjZ8sD5FBjwarUDfpibj3vg3hXxApegmPRe77BmeEVCh1wW1pp5JdtdZZUyLcR1vjEiRfD4",
  "key2": "VgBycf9izmZGiKRkqGxgNMVFt2a3gueztcgzh7zzZzXJdg1z1uLCFnkqzAL5ge687zmMbQbPYfyrwwVVYyB9Rfd",
  "key3": "4Tder8q1rhdWdCraUVvSKPx8pNQ5XUwXHPjodayfApGX9xqv4M7NqPod4QFHZmwybWi3NYQAbhM5mANDV9AL24A8",
  "key4": "2XDpsyvdRm2Vsa2MVkNsxBo1BeEXCK2yuJM7Cn75HAsC8xZ92TgyTM4VwNAZVgYSt29zcmCmpJ5qx5CEii6jPJhg",
  "key5": "4haGzYmu5gG7PaUpo5RK2pRWX1UVBj3ss5bNX9sqKZCR7xp5Dyi2BdBGiXiRYAYAJbbM7DyNYEk9CYA33SRKDx2j",
  "key6": "yTtd4E1TT8HqAnRDsRXD67o2QaV2CnqPae2NqC3Zkqgak7wsR6Ff9HRpTE4SnU3Dt1shnPhr7gjdkv2cpniKdhH",
  "key7": "5Uihywjea9Ta9XkHwSsVvgm6EHQH2mTPo2b1ib3Z8JQLYtpXuBz8mqmkjVdNUDqrotCN36YhJ6a2t2enF8mMFMpA",
  "key8": "43rpnNowo7xWyiYqT8WASNaFxf1BetwP9YvvSZq5Cq33a7sueqgUqfQ8AnsTf7t4ewv7kiTP9GhJCvbkQ15kHgMn",
  "key9": "3fKQsi5SAgj2cwuPft3yV7xrpg6i2zthebWKx5Ms2XUH2eAQ6u8EwuGxPSxqTv5yiuuuq2YAn9mHZvENZAF1NFz3",
  "key10": "3NX885JhNuBbJofn6KAsyrRc8wPgEyLN28r2zRrcK8tKppTavfjPrrX48cAJrJ2K2twjkdgiPhqWueXAzeKj2TZE",
  "key11": "3Dft5xWoHUNeP7gRF1ypj45azWUiW5SKmAiYjTdp3FR55YnLR9QpXPnik1X9nsUDjgWqkabxzRdtyLzZbNsvkWG1",
  "key12": "4Rrv8SoQq1XVcjLgSkGDP8AKBcvXnZWmqFrxLQHZUfcFRr67CBPZ3sHn5vhYxcVDgA6CiMe98HhFR5qi9mQ6Qfbi",
  "key13": "39XJJnia7fF4ZwYRL9YUfUmk8rW6yAn3AAPxpb81PhLfUCVx27zFmj7euUWjbiX63ErRGULfH4TDv3LgqAQaMdB5",
  "key14": "4Gra4Mg2KfruR7qpm8tCgkqvGLYtuVZizLhZtapQuFUDzBDBtigsUgSyVtw1UMDgQH5fpVD8RxZGva3kZvkJWNJt",
  "key15": "2wbXxoyE5EXaB7LW1UksgJVY7gcjmWxZ8r1nmu3oRRSoWTrmUKVxcqcRxok7gVujY6ugfrTQ1jqesnthD9EiNtDj",
  "key16": "4AdmWzZYQKuTdLUrmuUERGVafjhXBEcx1am74miA9JyjhkmWrs29B2DWWdBTQUv5pgbhgnNZdEeJTzAhU6UAprmr",
  "key17": "2QGpXjn8g9q8JTX7Y59P1V32LJZLK5MsPvsUHzgEEZczjtr85ywZjKpYtLhbheBnC7tUiHnxNuNbtA4HSaybzTYF",
  "key18": "5sB85FxrUuoKn97QxYZouPFUXNP3ZvdYxBVwwGCFk3LyQTEVbxzfnzPiEMjp9jmw1pzpz2pn8aDwmjsZXTdpF1n2",
  "key19": "3ExKxRuGjTRFpvNLywd56QwtFEu8ViG2vtucapjwFYaUQVKks4MeSv1tYtruRTAM7Xgdh1hzCjGv4xv1BS8eWA1L",
  "key20": "23B85zsLcMu2mvmoTzDbLjP7S3LS1fv426piGCYTuBRMN6G7dHv9oxgtuLzobhbJ1yKXajmcK8gw8z6JDP3vtK43",
  "key21": "2Ueb6mhyzrDaTLXgcsGhse6jPhp7WeLKbwunW1pjeyGkziqbeWbFjkJYKnKEtMxqbB83qovx44ts4D2tuwEGxsgb",
  "key22": "4WNkbW7yT6f4HpKxvKxn5xuPvWkqvVURvkfxMRRbbCyfFm6pUxutUkhmPnsaJxUjUSt1UUZhGvbKrzoDD1eW6r4i",
  "key23": "2K9qVv7uV5kBrEwX5TqYYoaahJbZvAHqWGyzk2K1LvsoRoX1aahWSLLFx1Ls7EaXC7M9uACiNvNLSzi58vV2jk6C",
  "key24": "3MUazRJ9ibfBkhCxkYJz4mEj4PE4xGG1bP7XXdeQUFD7Ttd2Y4p35K8Z8y7bpVs4d7RSa2aQjMf8J4ShzruBmuQe",
  "key25": "3njd7vPEd8gsNrFJPtwyk4XVVgsBaS611wYxUXZTWjMbgzaJDQK8Uj5kbRM9rDzk5fhcxPXTCR56Tem14NsRDPJ3",
  "key26": "5ndCuFrxmAgikXyZGpe2VVvqZ125Ndi12SpnzVvV4jQTdiGtcWW9gPfNCyUzsSv5qwxYadPRyjD2SZApeP8kvoio",
  "key27": "566NRVUVP12r3RS7ELayzMjdkCY4wgHaLwXt9oBdtc3uUdSYjt1e2qPC4kYAQMVFFCkqbKWZXsEUgXzkPfA5Sm7W",
  "key28": "23Zb1KUdS7CgyTKYmoj2XxTTMQ2N5QJvExw61hfyzFD16aA618tRcbV97kjDakDJXpDq1YCx22N4k2mBK7BgAKk1",
  "key29": "55MmUgJyVzJCEo9uSSZKZ43JrraTjmCM8RgGmHPJAsJy3uNctq1uESGqcUGfN4UJ9R6xJqMGna71nwbyPiHr7bQG",
  "key30": "3C1z4Gheq6RN7qsAGsJ6tnUEvgXTNKMjV9i5ynvDm17c9nh7r21RCNhExRDRd1KG8WY3gkmakHu4wv6JSyBayrxR",
  "key31": "65pwJpt8fbuEAn4XxdMY86Tgmexhbeyp71jzCdfieWLYXV4Z9XF48yEbUbSv9Hmtdk5yVNyWeuELPpN3AT6jg3kp",
  "key32": "5pajZZRMppLj9UEbv4E7ZbJiAqKepYfq68hToALaVedVWW362RyfMqmyoqRMb6fr9KYE3b197rZkesgoHBeNfYxx",
  "key33": "5fKksF53Z71sQbqqXo1Cv1ExEWERVGBUV4ruH2siyTmJMj4SfwawtJwe2fM2j8UkdYeP2SQZt6WBzJh7RFr4U5Yo",
  "key34": "2tX1tBx9HLs8AYJJeik2RaGMq8z2gEKTgugeeHBMV1m4idF48sS3DetCFuHqKgBF5Sm3HpqkheDg37JMVN8HVW3p",
  "key35": "5yn4FzaKgx3tzqtmZPQ83Enc84xusvhK3EwNMYGgXFxcdHXJyaQgBV1Fx8gegmCS1mBbq2zB3zBPfHdYuAJ7UptA",
  "key36": "3FTiH7bgRD2XvjkR7ki6WAJbaVbrv693VBGZx9gaUfAJTq2VNvZauNDUaC8v7h6Yi17SQjD57YzsZGHrv3mBNMD2",
  "key37": "vUmReUsYCE79TG4YaC34JT3bLGAyBr2w2AhsPCnBwRUqur17m9A2Hhm9ecUwPEbW9NFDBYbPM7Grr8priqvZtpL",
  "key38": "p9P9KL9CjAL5Lt8gvn6SWi6DYDagZzatkrWMxWDKuAwi2QcE4cJHUG2vYeh9oBkPSH4nfhXNaXqwpVpkXvoZNtV",
  "key39": "32RnvqPJss7ukGC8byLnR23F62E5n4EGCZ4JR6nz5qm6KaEyBswLucyDgRJpzLHSTPczbTaNtjD4h2ssyuKR9T9i",
  "key40": "66NMa7THRxeYjCGtiXBTXq6Foz1RDtV6GFEHCWEfZU6g3VpCjoB2BQXPuih9yKQY2KUKzRLDyGeszePk6CroHmy4",
  "key41": "ttsBUriy3aGYN5hz56fBHTX9Lt9y2MEsVAp7FRc1sLDVAnokQbXEB4k8GCDeMn7t4izqzN51UerYgYKJEGnqrDr"
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

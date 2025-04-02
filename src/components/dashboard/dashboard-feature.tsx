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
    "582ZJq8MLPMcYZbguvkNhSA83Z2AcM2c9WBqjtDu6pawGjdkhoZcsxs6Xd299b2tY36WattPpQaxnk89NJi51vxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1EQqjRwweui6gx5mV8tksZXUurw4uGN6vPkyfdpJGae2wC2uuYo48mTsgtvdvRcG7sBxKftWM87idFooomrCnU",
  "key1": "3cDH4ANp3xJpBfijhWDfaPQFyWRUuWRjMUMXDeDayEe7RLeXsZoL4gXSECPCdsekgJ86eJAunwFXYyD6jvrP7Kmq",
  "key2": "3my3KE7MnrDcsvXtnJZpuxr8WBDKEGN37UhHBzCr6V6ELxRsiputU8iT8iAY7sGugfyVzv12WSi3SUch9xwgJ1hS",
  "key3": "2zMysxwbAnymC7EfcCUjFqTbYRKSBfbEv4b6MHG5SXSypMv7VchwKzLLffy8Sia5AvmH9NgpLWYx2Vwiudd4LtFT",
  "key4": "4PRJqaMaWaC5N9DkRFX7DZC7v4LuHhFYKQ1eAHc3ZvQCzXr7LA7AS5R8dUvBgasY9weh2ZrAccdkZPjMTETSnZBe",
  "key5": "5YR4G6uyw9xD7Vb4rwWD7cwgdih4GQhb45BJrucCXkcgmRqqyzEBwWiV55UNv5bDeZxnKvpejHcxA4zq9LvxhK4U",
  "key6": "DqcsiXt3qBUx9sGNTRRSF6oAiVC71VgVBhxr5Q76imyUuZoWkYQA4fzuje2YyV8p9Ey92Jwfn8pSY9nLPopxb8w",
  "key7": "4syZ9cppL7ZZHpmhPC3v5YQNYGoTMVWLAtVnhgXZd7oxyTRs8WTNJCB16AZ39LKs8ZoQK9EW43APqugoYR7gRMMC",
  "key8": "4V1EDX9rJuAEr2RCGzFGyt6Nn1p2SfT58Ex6fw8ZfqL6NWNitxTdyzkq6gjKqmciGgTYiFQPY3SPUZkQJyrv8Jgs",
  "key9": "5bgcSPrLv3ukcQx9npKW9YSEp7bJfPjQA87koVfqKZ72wwAzq1zSDkA4SANHiEbv12WPpWujPNc6VkXhwEgYGSvQ",
  "key10": "4VWgMUY8YwGt8w1AedQoPidBcypsWxDvLcReikYZKTJXZgR9i9JtqdpduQgckuTXQKkxkyqM3jP96ee8uRWfyr7M",
  "key11": "26Lro3K46pP94tVZfw53JgMBLqMLAjeDnStNSTy2hNLuipnhqWnTLBdT1SrZYsvHCpUju8n9XMBw32cRj4UFsiBr",
  "key12": "3YS3o22jVBgMkjF6HRc95He3kodRE1xSUdATHoxLXe2hQ7n4UKxk4XP8Tz4MNT3Pi2SpCuviboLJTgDQu53yNDum",
  "key13": "3AgRjXciD37PxyeNzXFRcZtb4ircjQoVUXKsxXBgJCk9NzXnBrz2WqUeWMvM7Tw7bBMsZWtLj6gzKxm1jpyY7LnJ",
  "key14": "4MNkjK6qPpyH4NNm9mUqzeW4EcS34WkVMuAeKcJUwWvsXr9rkU5TzGjZ3dSRvHquhWUnUBVAWusvrueXWiaUsEU1",
  "key15": "4d6Eah52a72Tumq6tGdpsGpsXXvy6MqL8GWuyXdrEp2PnBFzUX4G3tBT3f5dSm8aErYzrCYUKqYgjW5g9gRmS6zg",
  "key16": "4t5JF6eiMeJ6z1jjRme4nYxC9VQSKVs7DMJ7j7yGN1tXKynHwGLkiS6hywypJFxzvsF7w8oPrY31bXCeHkce9zza",
  "key17": "5kvHKGgjWrchRnVrttgL7nJpbNuzUqvzE5CT5qrjn5AWXTB8tSbvfUXxyy2YrK42aFTAEcnEBrWGRb93BjwYWAqL",
  "key18": "4aokKp68SJGAsnDJdmqVaqXiZnpj6os9X5DkDWQd55soUegXjs7Bnwe2DGXjL3dctCLw2uLaTCFtFpGTjeLh5Se",
  "key19": "4qK52qtT1DS1nqVzX2rYvY2SnRuL2vModUZz2PNQko5sBMVZmR1LFASFZ1kfgzuYBzzFW5c4Zg1kurKH5VCow252",
  "key20": "2Vm7bFCP6xgRJNwZ8rjcZCq9Bbw58xY9Ucqna3JKnDdMPYkGxu4jLDrTD8ZCved5zjmWm1tCdjiXy6EJ72iE3asX",
  "key21": "cqHiRjk83qfEf2RttpgQ3GfDQQeDFqY1n1C7vvWwPXq2FAKLXpTfyVXEY6B31PE64NQTqLDHegyG6oeH8ow8zP8",
  "key22": "B1tkY8tJC97JT9tfXyEv2YxVy1uxqTH2BUJqD9PLPtkZbdhwgP798BqTvdGbqZUSaTo8UeSTea9cU8yviEKPJJL",
  "key23": "55DAkghMEkiTBYe9awRo4AEdr296Xpf995bAdFdxndWDFAc5umJhgGoZbyBGPz18bgfQFsJt3YE2kxXNTcLLkL9m",
  "key24": "2EFBkSaGu48RBzjt43p4kwGRNPbAxAcjQyAruBAd5i8QyWrPVvFdYxs3HzyTe2jT1XzRRyTGxSyYAidcYZpUJirG",
  "key25": "2YdWG7xm7BVFrBkSvWdgHyrejBjMEhtysohAE7s6MNshpiPbN6nbbjCjURESso1wiSn4hniPcLkc3XnRwJmWwu4T",
  "key26": "4yHwcmFaektDzYyDnZ5X8jqhsfXBsuJ7qwwooWMfryjDtyQzYMUufBSjiY7gF3rntcEY2R79QPrFtywu25oK2URc",
  "key27": "4te3PoW3B7mwcoxAG7dx1wmjLztqp4cDvwLuk1ZrS7TyDptfsJYayXnR1oHCgUbz7xfXBbeLCnQYAUKnGSqxjjRb",
  "key28": "4bG2nc3VCzqyQPDt9FpT68pBqq8ZbLP9WEUHg8Huym7aTWsK5BZWTrS4oky11eqM45QPML9y1WReDPpTvE1uDiUS",
  "key29": "2hL2qWhgsVhB7d8hPZWESLpDyo5pj2De1KKp621VfkJiRRmD1gjtLSEFP1NSU7usAcbAPfcahXL2k3PkoVjCQ8XT",
  "key30": "3weBudHx2DEFctwcX31pbWBDAhoJidNE8uNzBs3jn9t5KVRWaoVBsknTE7xe6oWNwcit6pbQsycMqaA2NcfbQq3E",
  "key31": "4xTXssVTWvGT95PN2RskDUPKCpRD6ppe7zm9kX6vLFBZaqiec1cw3vUqNjwr9mV6ZA5sfzeVoResTXiqcXxeUv1Y",
  "key32": "aEMqq7qFjpXBKsqZeBnARwuJconUsZsW9mbFoUSxgWjQcPk6WZSv6X98XkVw2XzrBm5PfUo1JacQ6MhTG9A7QS4",
  "key33": "4gCWqyRNnrDx1xctUAoKkEkFg96jmpDieh8KT7hrkn9zgBkxjZKpVApAYKRbyekAbfG8xEyQHzrbLumV6MqzHmb7",
  "key34": "3KuQ2j37Czb82BpK4oixycbtfuGHRRVoLdNDnfwseyFy1WLTatTUDjUiYrkv7vv4e2JXn9Y2U1XagrWMzLedZDwb",
  "key35": "5voc5LqWSHfrGs57AswfZdfhhtSgftDa2VxQFoAPkXyu3asTDxuMiFg7wSDABJ4zMxA3isTjs8KnLL4aJeVagquT"
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

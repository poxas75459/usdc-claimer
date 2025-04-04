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
    "2BKrZNpA9AwNpF7313JnYP2gmaMTK8BhEbkd9nUjfgJ12kntwLZM3D1pz3Z2V5utJVbiCdgdgHBasGcEJ3CZuimH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLsYBEMrvSWBAHsSZznNVBGA97V8hRodUuk2sgLzHPzLhxp33hEzDEB3dy3TLpkP3mpaut5Mrh8cMCSY6zSawz6",
  "key1": "3UHeh12XJgWVUNRGmwg8Kbd7CdTssQYWusdFSjsfp5yH6gRw99ESWKUyEKWHxnB7oxmaNtVQrc2qwizdKQSp5JzN",
  "key2": "33gvpZf9Y1tV4Wpn5PqxobCRTTp3CWGw2NMv5seukNJdR6JjnffS2Eq774pF3MBvv6TgbbuC3y8e5JKjZFw1rgo1",
  "key3": "58DAgdLp3oRNwVRncwatjgYSNs6NBbbLnokhYeaSdoJ2SdUwCB2gwu29VZk78mPgtBsmYgb4rZ4qXhkg4SqqKER9",
  "key4": "5ryZLSALoHQ1NwQ4Afg1wcbDEtEvCWougJiraW2dfdPjLbQimQ8h9udcy1wX2thhxzEQeiTv58Y3jY8Pd3MGSNZs",
  "key5": "52hUKkA6xzUbJGtvhMzSuQrzCpjWX4AUFDkd1qGhaKtSvUSEbVH2dQr5SfFjtuLq6Sry8Cgsm2dc1ptgdYFmYMuR",
  "key6": "28aWuHn5haSvhPWkAtpkhRQqo3NM5kYsTZ5fsBXdBrFWFXsTdqJYrwNwHRvaDA2X79F4ZLN94X3NazhsMUcrAaea",
  "key7": "4QT2x24rCDHE1gEeptHtzoVK2xpGG7GPhoM4F9vKy2vqd9SY888LVTfUkKBqFhZivwRQMzRuoTeJGehk7zLT7APv",
  "key8": "2bHPfKKbr8w1mHWCK9pCRZUyo7F3PXCF1orJVXsfcGGUbGYdkWkrqummJTEidfpvhjFyRFzv8ANVmpkFZ17yda6r",
  "key9": "3vfBoMhR1FWVv2tmQYzwKakzfb6nisyHs2PeS2NR2K1nLnbjvAnYkTfVmKDq3n4484gzVXkGfpe6xxD6UuYqH32r",
  "key10": "3sHsvHHUbfRbWTNoELuznSNjZ57EEWSyyF7NK8NQdZm9a4QRajyx4jqrk7u2eyf6cf2idRU4jgBfQeyjLvz93QwZ",
  "key11": "5ZzRvUGuQmz4GARrM94pNhS2jp11FfHQSqqDVbwiofDyGjghU2VKU2RJqb2PkGmi9oVMaDkR79JWzp6nALqpZC8T",
  "key12": "2byYcD5UNpAvEd5gmKV1KznNEB24jMCKim5RXYzzqXCsuk3yeNXMeRgZa7vn7KacEAVcZqfCW9Uu1akov8WByGK5",
  "key13": "2jrMUsnAYzgXX8Ecir2g2ggdpiSUG8S7rFGwdkNVAhpemAP6ibq5ebotKdQZ8XSmFqwhzLWTtfy9C66TqWzHyE2w",
  "key14": "2xWHiNgYhFu7jZkgzV5WApVsr7iyQGKs6kzgG5yEZyADrEQyRZ2FjPKW2VX4y6aAU3gkWpTtzTHb6WBJwyFySHPf",
  "key15": "4sZ7SFzQMbH2ivHMPBA74NmiW6unjWGcxd1xDTSLcsTsCi5nnugu9MyFfVg5mpMFtafRmHz4m1RwQb7aK7t3PZG2",
  "key16": "4yf87QYpgQ7wGaybGyo5JXc81mPYHJt5shRWnFUABEzumsyuqkwgCYrAMJQ9b5bkMz61WFBgNTs3d57M99LQ1sHj",
  "key17": "3b8xcQ6vqJDymoxkj2t9wWdaDbYoMPV9NHg6o9GBvJphP3nnaSUCSiWvoEs4kEvBsojxhpjB7g6GDELiYSKd8iFC",
  "key18": "4CU7QRSyL3GjXBxA5P2KVFmQxSj8J3ntKdx62qzCTQVV5dBjPgQ8sxJB39kv8as3i5ZQsjRDUSfVDP765NbKTqdZ",
  "key19": "2B2EwW4QeLZU7Bb62UMzfX18EZsys2npQa7kWJvzcMTUmx6sygZQWM3xqaKjmxDHCLzsr5MP5WJaETaTdxHNiCdc",
  "key20": "2kNWfUtcpMFibP58EiW4GNYBRM2GLydsfd6uzKKGxNp1wEm8uRJ9nM6M1uzEp2Af9vx5BrSLMB9DgqSyXWcFES3d",
  "key21": "MHRB3uHXr1PLDMzkNRrBHzLWWdsvNDkHTaJevPwABKzFZQcdxdbqwfYCJgSiHzd7txH49XCTXjEe9GMtkHBPpid",
  "key22": "3d6BoyAsiyxcyUYn2GMLNJwGozgxqYYprGer1CdjnH5mYvgfybR4wiRUZbDzRMPHVEVK5Abwh8qh7HxZdM5xNiXm",
  "key23": "33pWNik5VmfLMdAdeiZM6JQDkmbVR3weK7nTVi6kiUrPuWAo8bj9BpLZymSXZKtMovza1FvN1KB3YDRJsEZPXf1g",
  "key24": "3QCQZ6yMxxqTpWRYTM8LUcXo9dDfcJnKgij6pukNzsVheUJ6d9ZpuH4L3z1XCxy9dRpjHJn3LbV1GCaxmg9PtRj4",
  "key25": "4Nmx4pGJDJS2xFihHYaYSvowDvWEMvPSCXKp1sDBvVza6MRBGjCueQa1n8sAC4ZUMNVbaf9HDSmMp9MKZwzLi1s3",
  "key26": "551zaT3YCay5PZqXsdPyX28UTKnjMt9AzDZbrjKiayY3XgsqXYfD4vSeq1KV9HbPKbGMYRa7CTotc1gn1Racseko",
  "key27": "31mL6bTS3juu2TnxN13YYxk9PehqfbVA7tUCBL9wSFMddA1UXaQTcBjFtPksk4Z4wi47PNK6ZxuzTfcHbWGQ4w3E",
  "key28": "3aZ276ZsSZto9VMCS4jzF7xZvXqegnT2WvnPfTMSrcUBTem9K8kPq7pigFLj1oVJfjw4RBv4RwuPQsyiqrx58Bz2",
  "key29": "xVKv99gNFnyi6EVxvpTVTGENETpiQwuxqqrc9EhrvAAEKvkEkAxo6pk4EbKbuRwQgAVs1RG5Uu2J5xMFR3f8nbx",
  "key30": "2MDXoj9PUhC6e7xkftJhwKufV9njqW3KNYuVUb4WjTXGBRHwCUHjsZ7ubtYC47sPWfGxchJpXs4X1t4qNbLWRAF5",
  "key31": "QUWfxARNQXYXwcQcTN7GWh3pafgrPFxZeje2kzfQMzN8LbwVB5gg4ewtPEFWD5mHREpd6LfW52ZNwwBA32JnB1a",
  "key32": "4wqxFsanCaLZQuPNkqxqJXseHPjY5joSKRjS2kzURujXo69KAx32FADNLXGtJPuwyJE5PU8sCqHhZKrZBe3xbRUK",
  "key33": "aasMQN5q4HSJCgBE76orD8TZbi9DTNDMUweCDCQ81HnWMZRTJyf8UvMPmuTY4rwLjKiEf1qLKxKCmVq7RnPPCE3",
  "key34": "46dYKKYPJCMpHUYd6H8kNrJq32yCnmRr7qg6N8wFBYtdj52LqMpmvjhd7BxESjvjpoLMM7yj9e46cDC3FgYs91FU",
  "key35": "VREs4xQuk7YHXAMwjHk23dw1mxciuwkzWBg7Hn2r2p8XP9vZvZXQytXgHpbCKYeUbrYqdzfgq1134Cdo23ayeXU",
  "key36": "4rZXqBHBWErayLnkb97kJUViaSiWfPgA4BBQwu6Rcpa1z8gu5aB7psfhW9qWwRYeZ69VQF385cfPDN1gkBHtNnBV",
  "key37": "4z3Ew8Lg9CHMQoy7baqCUQQZaToEm5XFRccic1smXvhZQgBWiMBh3GEnHbHDJ9pL532BQs6ijjNLFvhkzyGiN4Uy",
  "key38": "4oxd1R6nifC69FtFdyAf1REFcBQbiWxL7Nto2sQrb98QQ2EURuj3Nvz32UvJXvzuKoGkrJYWZt6z1pQSEfpquxRU",
  "key39": "43xmsprX7Lq8KXG2VN3h9oVrGsstWZPqjhAtjD9eWHXpMd9NNoh7e9Pq7sw95DoHNrETfVPRqYAewjbjdQF15FCR",
  "key40": "muLErEvJsXrder7bBMvsDu2RFuVF6gNUDYpt5z5YrhwepNYomrZWG8AbFy8XQv8ufPEXoGn7nMvtoeK7Cd3bZqT",
  "key41": "48GbwwKbiBj77WuKZqzZBbJyfhhNEx5ng3PQbcJskSEAU2jfyHwbjvoPze8UVasj8kC8neN3ZWUC7qiXXk5n9ucK",
  "key42": "yYAEcZ9Cz2iVtYjU3V5VN2JafapV21fCZBNMpNeVow6u1LabxHGerR48B7jhJKE5xDibr9AzXgw8gJ3M9cXNhhc",
  "key43": "WW8GKynmWVqRg2Cuk2g6GkQwN2e47NAxtGuhXJih4du955UH2674NkoUS1hbhjQ8W2J4XN8w1GDzruQhg5m23N9",
  "key44": "3nazN65F3SfgB3z9qXh4DxV5taUeWePz6EwxzA3mQh8nQ9m5A5Wh6BwCHab2Za65i3jQNwgz1LvhR3o7q4uXS8Bf",
  "key45": "29jQBLYc4ZM6DDLPdD8NLuGWWhqBpoyGzarrLZCcuKKsbzPwThzvb1fJQEV5nKKRShDG53eLRAbJocqXm1dQoWDA",
  "key46": "2sRpcszPysZCXouLgL9GPyqj7UjtZJq2U1DUCfGNQMVdv4gfE8QbecpPqiiq2zfqEu7B3EeNAuwQb8stCy1HameV",
  "key47": "5FRP3zQs4dp2B1KkDXJDnqWupqXYXHjy6sG4y8P5mZcGd7ZhFNZyh7sJtbGq1C9W37Xqr8xhx1GtLpJnVZbC4dac"
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

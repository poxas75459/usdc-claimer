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
    "31BGpwnJMqgPk6Y5FBJ7tzZTQiuTPXEz1c6CnDsXBpAevcU9m5FDV3k5QsQYRFs1WjiJkq1ify2HnK5FnfUB6kSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zc4JMQ4TEbMKLn7Lo91BwQFWip5WJm6qfT9nN3Wm7FXTJBfL6AfsMm6MeL5bbG5RbNWMVtdMeTz4Wdtp8kyywvM",
  "key1": "3huKQxZsx67cGc2V4j8fu5Lo2T1AP181vfgi1Z1xGsEce7fo3vz6ELS73K2MigP4QBfMVzrsQGykPBzfsrsZ6Qby",
  "key2": "3TJkjVcry7GJrY565cypMFnNBQQ93JbWkMvGsfhYPytzH3gUastqNS2pvuUoLDBKFdE5jgxAFcRc3osbQ9DxKYeR",
  "key3": "q4MdZD8CPpzrht33KnDAEhoUZrJWUn4Av9ppRR6LnAQYJrQ8rB69AQ9PHVBFa9hk5aAFnJNKYyFkfxZQwMjKmhm",
  "key4": "2n8rLgp6Yo5BpoUgSz4adSpy7yuh9era4bqdR3phAE6348CwXAgKrGHvNMcUqMXKscrSasKev4yw1iySLMDqVfkZ",
  "key5": "5HYQvVP2CcoRHNtuDZqLwyLTiQ2DqzJ716vAg3GYuGTvfnWNr19MuAeamC8zxBmS7VK3YkFMUngRJqt1AwCe6VxN",
  "key6": "3dP6AhN3ZqJvvBtt2NVUWFSuV5SgNXC4LxshSjusEjFdYso7zN5q571Ldg24Bh8kXFkD8HpJ9iwpGhpDrd2Puk6E",
  "key7": "3NPrEkWDB3dw3fULwCw5uQwNEVGX94keJMv5jz2siqFixoem8hCLnZW5nXpgvMt7WTYJrksTHsbEFjyPf2QqLFhB",
  "key8": "31Qx1vkbQAme5vwTU79Z38CM1SFQiooaCf2TbDEVU3QVt3pV39DDMv2FqarsaTHHoBLCGEwWuGBvHzE7EWAqY7A3",
  "key9": "561sDvMPsxav1hd8p7BRMbPBnqQUPFVo4UohLa9Ngx7aF8sVMm3GjrpdBCkFCzXjS3eG1wW8yUVtehnCgzoQXqP9",
  "key10": "asr9GroYvpiRBoB8Yd9d6eHryJErur5fimRvUnJe9SWk9vtyH6MyEvXh37C6fHPpKDSqazs37iYt8gqmXUCd4kp",
  "key11": "2gayCNVURY3hGfrfH5yKr8WhtjHS9dJ9j5yAg8eQf5UJG2iDDZUeNyjq5ukpzQdU7kGFP61D4fLk2tsCX92Ke79R",
  "key12": "2QYsEuaVikTCq1JAdrBVnTQmyCfmYyQAjtLbJHi5s6uWHTTLHo4vR7NNQCZbYXrh4Y6X8fD17hQJUu1vMKdHTmJa",
  "key13": "kvdVb7v59kN8QzBYUkM4ogKYU8YrfhmzxHS3Z6wJvxVFKBc3E2EyyuRfksD9BCPX6co2wNPuXKC4sZ471SkZHGm",
  "key14": "62ufw1gTjeSVkB4ibaCSfqcPqtHucA4q6JCLSwtR5XDjN44fHiEprrJ1eJpnCM1QXTnfFGgrio1rMnpo2Bd2iJjS",
  "key15": "5QW8v4Pv1B7YzeU9EM6xrPuNgEKxAHusLLv4jN34SYbKQhkGy726bv4cdcUt5xv9dYiJBVKaiHBhwMkc6UX5Snn7",
  "key16": "5vGLsTwFH3XwATGPz17ozr4S9dmgFUkiwXQoKv7cQDinHEib1rqkmDBj1Ln6QFtfUBZnq4vAoZPXwqGoMvhVyfge",
  "key17": "2aZMBnG1A2MHvdgghzWtAqv4Dmi3dWtTeEjuSunsGijxcVmnve2pyMMD3wnAMWSUpaJZt2RrN2AsiGkA7NjzQN7d",
  "key18": "4K3mQAiYSb2mxtNUGPZKsFQfhwoFfmWjfcm6XRiFfVJ4CS1qjM8JDN6jJ51W9Rh9Lgr2UmszA6tuD7JfhpBEgb7m",
  "key19": "3Jk63jLa4QVwAPmT5Evd5EaSZTL2WwpU9ENSq2kjco5SxFZuhvNnRBDnAekJZgHy1DKipfAHzYW2eiGCmC8UkoPz",
  "key20": "5uRg6SQobgPbGiJ2UB8y2iq7aR6H3zgkqxwwjFB7T9jRhyyqYdhFxxxDeDSFsSBn77monZx51XznDEGuaVFHQhKd",
  "key21": "simFbbEVpd58GDsf3Lh9fwwsWzWxscNXB2eekqDNvznpRJFihxQsFar1gRR63MpzRuyRLzL8HSm8icEin67nbtp",
  "key22": "3jHxuW5Tt6TQ8htYbnTEbFNaVnCSGcZx5S6Wt6Z5SgNJ7kNeusuhtPQtgW2G8UyvWehhPdjKmBtrH1dzmPjViCJi",
  "key23": "3JdvcfEQ23KHToqsctSXEbuHdmmN2t2HS2iUPY86VKs1VkUE1ikicUgrrqwm4o1cBhNf3UiB9HLb9rftaZqUodPb",
  "key24": "4n3XGXC4uhtxoaYfPFy1t32vmquVfjtxM5CzXq3nff71N1TQ1pPuKF7HDXW2Q5kazte8iEfZwXF3oX6U9rJjBptJ",
  "key25": "5EwDuJUMMsrz9n3axeVwNowzLX6qZM51n3ssX7Zowj2Z9K9wgpfwxWGbVAXj3iD31w4swQnFXCPUywHb7P6aVb2Q",
  "key26": "4yt8Suj5pH4SrMy8tSLDmFoUvp8of681uskzefprXeejNixMTDZi1Luj8AngYkEE1tosPLLyn7dJMnvadTZaQYTK",
  "key27": "Wt1Ke7bdMWQ5GGBSzmwHcBNGDeJdMQpTsrxZzhc7t5oJqo7azvnUMaHwEXyk1bkVfJHeqNYcDKbW3eGWDaSaghr",
  "key28": "oGN5Nd2PBmoKbA7wWR1AhA7nVZh6xA2ZTmUsMyPkVgWhRi4edPdJQ68NapGr2y988LibsxzexcyvAkqLt2SxRrA",
  "key29": "BLMx4A9cWvjCp4XSG8A7vKtWTnqB3JG6s8FUpJRsVp85Ab7T9Gds41WQ1kk2fyUcV6SnRdKkpamPbrogRNpdRFZ",
  "key30": "4fK68oJrdFGogbyQrHjfVhpf6PA4sY6ZKg3sRbDaV88jbCS6X5ARoUTjhMcDBkUX4aDPgUESCCSmjY8RNdvBdC4A",
  "key31": "3ksPzxFczcgNkeJAkJaacAs3A9rEkBY2vqtcnZkdRKorxoYw5xrW1qNAvG3yHJKd7ae8TMx4eW6EJzN8WmMArKFt",
  "key32": "3Kd58qUheRyiCosawqDPnqwokMdg8AcZfQAkztRAitKBCdVE81vY4DYT7fYEtZejBGxmEjqjtsLPqy3phfWws2Bz"
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

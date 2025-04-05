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
    "jpKniXn7WGEJnqDYHPToKHuCbcwioY2vJWsxWGHSP76qMh9dKjZefetTJvTjAa8VsaWHfyfumnBzx9CtpiyoS3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fX5pEypsHKc3GAGi2YyrEhnBkFjTuHijBX2cRkwr7RYEaWZNyVHU5MsM4dHmyeqtvvRXGDQcaKAPKdzWMzB4q1R",
  "key1": "4ikvigsqqPzN5N62tnLLwjjX81SAGib1FWVt5AkJXNkfjgHQqpb7M4sP8Toz5nvwskW6buLMkWrvqBGzN6dEpq64",
  "key2": "3V4CWFqrH9LcDHhYmausCZTYpdmTS7atNRgad9rmYQEcdxVhhcBdje5EjHQSAvqx1wLMVAiL7vDct4zcTSQopTpH",
  "key3": "1dgBK9TrWeF6aEtrgefm9Eea3sTqyBckoNkC9xWYgin2a6U2qDMTgCELXSKZz7Dh94WreYx8jHjVJGrC6BHvhMF",
  "key4": "abZCBFB2UQsz1WWevKdc6joRnAbnwHqkAKyKyuwGBBUKKTjo2XJ9B4SQKsStKpy16XMrHvQnp8CQsoMsaQUTwsz",
  "key5": "3qpcsePzHGcJVDTTzGYEQAa57HJNcGf539nncQRQH1mTusWbei4Q3XNeum67pLJEtjmZACQCiAStwo4NuTbczHii",
  "key6": "Aqqr7QMvZZrBRedDXGTQASbc7dByxL8yFEQzAPjyh4VHc9oF8hPMR8kShkrwzSMe8xcu375bFyFfr2xajjXvEct",
  "key7": "3ivaQWwLYmriZrAq152jScYU1DJZMse19uvrEE73jErQCcTAq77MbsqG4wVUiueFYkd8K75i74HthhHcA4JeeXLj",
  "key8": "4RbaSjLSWrymwFYSU62tfEDmWEqZWDvCuFbFkqiGfB642nZjWiDtw5MsBrwsK9n4TFq71QfKPqkheMVo6tPnxoPB",
  "key9": "3FZYFS5xGVuMRTwNfgYkMMm27Q2TVAy1LaXhEMcWW5eJTrd2TPFcv7uzAxchfU95tFDmwVn4r6KHt4zRze4eFUCu",
  "key10": "3WVBjeh8FheMExo3ZQpBhY4x66DEz7vgRRifikmFa9BPt6vJrqdCsFRyjmzfZLHu4dMYaPC988Q3YCgZvo6NYGbE",
  "key11": "5dXLnNAU9sXfvW4tGUmygX9UJZR9vYiTWGFfRzHUhRdhEApAjturmvfGF2Pdijz5P7Y1V3uy3yR3ciuVF568qnyn",
  "key12": "3UjactpYNm4gf47VgGJfvUEoigWrqEm1kcRApdNW1pnb9VNN7FX9Z8qq34oeHWFSNJLZXx3GHri4gDzKP8jQC1oH",
  "key13": "JDwLXPFnocBv1Kv71iqjeiYjkvFm4kd4LvWdoyU7obUJNqaMLh9GNnRQdB7YA9qGTWAZwzWwpDZoTpbwYPJm9kM",
  "key14": "7fjccTNN5idT24BrzqPdGQTJNwrLV95PD4Kte8qahfvizHsh5n2LUFfFLKQxh3ha62Zx5auk2kMeiTZyvepFaZF",
  "key15": "4ETR59Qc9KGwJS9jFudCjq68JVMCk6uGfcZkZyizkdcCpC8VyFzYZcBuhu4XP3MeqiE1wP9y3LuX1LYEiUqL9vNC",
  "key16": "2Ze9hnf1z5U2wbTX1nmKiFakV1HipdxRjjLS9JWCPAuCdqGuvzP8PFUPKRWF5nqjNG6mfqiKZ8D8RxuAnLH51TZA",
  "key17": "KtaM6TMSjNFhUhGjrbPfMPBmkN3BfRFDnbngraJJ3S86tLXhWDx3P9QcyyaBy5WZpV9ZwxpduEGWimnzJ45tmTz",
  "key18": "3WMxQ2APb8BATMnFApY9KRBHGwbXctTzz9tcrjiXXDZjZMQWKJ5S51jNmCvWVQB5VQeX1x7RsGL5ZY4VkQkJBXK5",
  "key19": "5rEKN3H7ATVV3Puit4GSBg1EX6FwyJ6FJs3HcCvUX3hrzXhmvrhFaeiZDYTNMdoixYqDZnMhrr3ixSF7XBv6yAjZ",
  "key20": "26eDyqiKcuxoE5h3A7CZY6SJhcnR35y1HV1zWWnRjuyDbjXWGEX7YHHvTq8sygfGTgN9vF1zE3venrVbLMCri9oZ",
  "key21": "4QwtrwtqUuqN7vttfruYsK5PK91ftSjeDqf9vQFaLAj4rLZVmAyQmTYSa2AG7SdRFYNMovBBwksvntgvNWM83ftZ",
  "key22": "5AuwDeYwzsVFnRMWci4gKBqmnuTLJEAFfWwjSbXzrDYoZv3UwQaMDJL6831wWTXfPTKQeQuvFCjr8yD1KZgbZJRG",
  "key23": "5zLDQWGXo6BZmT1n3NkNGgXi97obatcGLC2Zp9Cttoc6dnZ5Vcd3CKA4q1iEFba4pmtxevQGaV2GLRkPEbZjTdYg",
  "key24": "2C586oVpK5TSJFeCG7YnsHfAa9B4QHPxxFEQLMTdLcoQvgLg8z4y9iueCdn45r6x1o1E9dw1V1cjw8idhtRdVjD4",
  "key25": "2xP9M7sjdmyiS1jufPtpkUPAs8eGYfWqFD9rjmNLQgwZNbzHBE8cTodRx4msKQoakhrn61g5uGMRrR6KYiU4qzAw",
  "key26": "3JVsYRaKe5wbu89Yaodu6wV45Now43RYXSCtTDi9NVV6AgPoo9aCEZTWtqYX8Kz4tnq5i1nLdi73A6btnKY7NL45",
  "key27": "4Assu8jrrdZqYcJQe5SECTkMCwbuBDn2cRm57jZX5LR9NBspmnLNS6TTFrRJKq7vFr8ZzynP3trKK7v24qrbL5kG",
  "key28": "2Fssy8MxsbQXPqN2brfhajg6mEUtY3YTP442NPsba99M6UDczehZ7JgmjRQQBQHmHcy5GVacr5ss6PETg4DqdDi",
  "key29": "2dHk2oUULMmVRkuNB5arZAsdJ5KkbV9zVMTWxGHQERy5yQCwwtG5fX4n6SsjsYJX3HdBFxDjfB5cF5hJXELzdB7k",
  "key30": "5LiBw8iPfAaCp61TW8qz2dEhqeQGHJCSnyZ65BrBE1dvvfzS36rExcRJk6dU5RxrKBEzJhLQH4XU6NNxmGErwJdp",
  "key31": "4wo9wEhBt8tc332En1o7EZoHbp1jxRyBptENArXUs4LCHfUimn2gHPepQdsmvMUVFfpoMKeCZEqbovP5zhnCtEJJ",
  "key32": "5k94LxuEM4Xfry65fh8HS4ZYojGnb9j37RdJZfpizkCuw2RYX7pQwLDJSwAiAH2fonhFGHrTRQ8kBaC3bY6cmvUQ",
  "key33": "3yQMUs7numuCEWojQmmpucqhh3RbHNuhT6wYvxxnhusdiRfWgmANQH2RA3RtnLXU1PLz3b2xAzsdBXmpNnjzws3P",
  "key34": "4gKrzEJn9VsANNpEmMaCg17SLWJRB3omF8PGjjtYPkHhYzSt66EXBEAvb7vhzAnbGwyiTdrYZSkfXyoB94DaZ1WP",
  "key35": "3V4FeviwXy5JikX3kNs8Y3c82hkR8uhVxnZTvd5ZeLjES3eXihSSukGM5a644fYPgGinNHjHVr9kAYv8U4m35sTc",
  "key36": "PJUKCkL6x3X2MVb3jBRTmBdMJZSMos4WZUwHPNYTz9fm3eCisU2dcKB3TKQXKNUBpXhvQgtuXoGfvH7xdL43KaB",
  "key37": "3eqYBGtBruRoU1P8BTYdTx896GzFcZkQJvnWAXd6pxQ6sUjRXSbRpudhaNvhvh49WXpdayXXvAjeVcPwYfU2PVCS",
  "key38": "5XTwMpyBxvEduZFUNZdwfNAMiVkNUEYnQ2XK3KLf2Y9EGr93ndGfbFeaSoc4FE33kuuTjK2LNkwBst33kWjJ4JHn",
  "key39": "54BSUHaZBJbKcNkrWiitFQw6vvCxqErCnyjqhNK3muS7GUEHpdH49u2w7KWWyoordEUkwJFnsBSA3p3KyZVKTL66",
  "key40": "42mGU5xaF6gQPZzYcZCiPhuKrBao7vWNTtNEo4tFN1HzRV9xTCLHEDd1uxh9uNyQJTWV9S382pzL5xk8eqM5snzA",
  "key41": "5hfSTfpbQpRMeRTkjYwZ4pAgMRY5jM43E5UiH1EnRPdLR13fhnkGisk5aZK3J5B1KdusxJSi5eb8zYNjF8Kvhprz",
  "key42": "3FHxbU3H9L55xxApiiXkY6zYzr2TbYws9Hb2edvziVXWRD3S6RnHHfGf31mekNoBHEekD73MA9PNuGpZBbQMM74K",
  "key43": "4aXmtpux3fpYmnqP1rsbVaZGCTKaL82GjaZnw6F1DFuUqpVFJsSYfhSxExvp9VorxpJxeLVjskWWtg4pD225MnyF",
  "key44": "4uZR59FWbq4GsemfP1jYqBrSHQjgEEMCS8jpVQASRnSiH9XmpBVA5fAv9yB2XZVwKdXBLcordWAP4VeHYyrmgwqP",
  "key45": "EvWytHyjDWH4jDS4HprUDVrbpxkGzfk3zJx5RHQoeM3ke12YAaKYErtDr5jGt98BNP5EaV9x3bY5XTpbbUhYV8p"
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

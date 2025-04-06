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
    "aeiXm3R7sMj6mWjqz3SZH1RxiLkerdGt5JQET23JqEsjvvXSp2nYUZM6Ea3N7n8QE9y8k7ezV5oMFtv5hgzLBkU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vPuMgbmPsz5HJQwf3RYUYstyqGby7RFvonE1FdagWx9AkUPcLkGVxDepaRp1rqyLaX4QxhgB9zi6zho9zcFmFmC",
  "key1": "3AuwyfocexbSAAKCHSQvMPcnuLPZcmsxfmavo4z5MXuxbKa59dGzmPvyPN4ddsaT9uG59E5z1tNx1Epo5DNAqJKq",
  "key2": "3yo3dCjut5Q5weHgmD2pXrPamnHzJWNMqhxkQMaE8DQmRgii9x1YYrTcuGU3RJLx2oZ4VCT3V9CkvTqH5huF7U2L",
  "key3": "4JNDVZCa5661JVwLiLJqCWGrkeCjdfSBv5JdK3QP2QVY7EA5uUFSgyoR2yxWjGEuHSwyzXEkGWyxrXs6LNt95c9E",
  "key4": "2qBaqJGdEB1ym74vQwp8bfZg631pzMoMtNWihXFRBF9w2nfYyLj92vnkCDZhMVPLuFfjNciXpUzHGNEEbAYzjQBq",
  "key5": "34xjrFXbiC8QrRRbMnrCxVGTinPQ5veyxR7NdFFEBup1o6yHn9HeyabQ8cuBDjtUTKqryz8v9K2dXgzY9nZbjMwA",
  "key6": "2nuJQtVaV9z88aq9TPbZuZebeKS49mKYSSWgWEDE9iMingiVendaVcJyepsP2ZnjKXFWu9rZMWw1zrQpchcLY34G",
  "key7": "3LAj7RVYJzfke6RwgRK5cY6S1qfXpLeN9UgzDGSLdVnZdSFcYXmG5LC6U96RBCpfXfVpUQQg1WMUt5gqTtgohqqG",
  "key8": "2mQ5bp1ow6Sz5vvcUx4qZ8rrCBbnvmXGeHLV5CaV4HgUtLkR12jtEnz1ov8YDWm8rd1paxWyCezFd875HPJzprEQ",
  "key9": "497DdrJJ3BuV5riHcTuuEyDkxALmHwxTjY9xJQ3D1pLbdoFD8GKg7gjHHXjHUXgnL5m4LxjvdgsCkRJu4mZPQBXN",
  "key10": "3KvyAz3qF8zgZKFy2JzFqpGQthWv5nfejSynFyzixxeZCZ6GFHxSemMKwcRrmBPmd72yE1cgpmgg2UJWYzPLG1E5",
  "key11": "4sHjrsHiVK2N8xSTWHT7gGy1BrFKusst9tkDVkBCbPnnQZ4tVQuPpWq3MqXJp6FvHgxeK3kjj5SA2UnvwQvcRKyN",
  "key12": "2ZSkbABjZKBdG6L1YjRDv6bHvDcQvr8WCHTDz6CbHhTeGbc3uBR47yfoCeWjgfn7nuf2CHapWQjG4xcwerf9Bktt",
  "key13": "2LDoLshzpV2674h6pG6RGAThkNfWGV5cxXvGjwyBEzfFwbgjHfW96kA94eWNTCvXoMmckp75iZVQi1PWRyiN6LFT",
  "key14": "4eSkL9ZTJHVAcpYGhsAgz6fLxJsNQUES3ZBWgkTqRd8nus3K65MLvNW9LD6Uk7Hfv5s5QTEYhvC9LeuCPdhjb68w",
  "key15": "23yiT9dS1csqbAqM8gxQz31LYUGkQJ4kcpk1gngJ59f4n2FfQmk2Ae6jnTSvkQ9cC6Wk2u3GLi2Ppi3r7j3Xh9qS",
  "key16": "2PxJkg7NCQzdTe6Jv3yin45rYqsh7dpJQVyqSjCCXuqKk6fKFo3T28kmRmuHASQ3FrB5YVshZpC2hL3GhuieLdZh",
  "key17": "5ggjKvjxNF9H4NjE9SmBhwNHXL5digr183QdP1ofGXZeAiVFCBVbZoHWWHkQcCG32rooo5w1V6uwctyjN7x7GP3s",
  "key18": "3TAc2PSGwKRXnLvG9PoZuCRSgwbmwiih92fjifwUmScMmXuNPB87x8o8FfsLdCbGcJ8z1Fzkwwzr397jLXWrFzpZ",
  "key19": "2Gz4tUCzfaGya9RyxvNHnTNF8sD5rGVCzu4YcaeuPku1cvdKLKLZJhVHKiwKQyvUuLuHMQnRfX5uJ7Mfifx2GEi2",
  "key20": "AyNYLoZRMrDcEVqVNRsgSg8ps8j9pw58t15RxEbmi23Byj389tsSKU5Er9GRrSLpyET8AB4hvNC9SBfpwLDCKaX",
  "key21": "5iGZsrtqbLhjLMFxe9GsSvucD9GquE5tJWWV9Je61WNqtgNBRcKJH2ejS4ZzBUYbHNZQp3EVStBNhgnDKyTeDtfn",
  "key22": "4pq3qiq36UhToHy1RdZuXbTqz44wLJhcpPrpRZ6jge2FX58zvwwvzXMGDxLfdryvYo3r34avgfnTHLoRdAuY4ED1",
  "key23": "46XYrvq77cDExPg82jZ8LT7kL1S22S64C6WYWUBqPKNTwnNxZoEtTQ73VJUAL1avLxrEhSHBEG8wYLT9NnZ8ncnR",
  "key24": "F8KPmZQiWuPMxM6ybZW8qAXYitatfmV3cYM59ufmr2ZaZezcHoJ6BKv6TtqKWtdJTTfofN2mnT33xj9PsDvmZge",
  "key25": "5RZiKsDoYtZLitPEZrF2rJ2bPLoKmnbF4fPE5jw6TfHDfwu61NH2HUK3kDFTJkW8ox28TZXPzLNLRC3HRKDbtiD3",
  "key26": "3A15TD6B97WmQXaYdB2fz4gi1hMJTSqNirMpybVL55cZYgrq5K1WjWZjXXGcbbUubi9PoSopj3ieciJsNYwUGus3",
  "key27": "3UZBgjbzHJ6rBBzq7TyQyPEfdAeT4kzzrqxgE5caPyMw1HENYbUW9LwLuJJsjz3xXXEBtu65mpdvxnShjo26eWLM",
  "key28": "8mnZBdhPzPMqUhvGvYjNhJCHY7yLSLLnh2s7MvAJvNq9ogNwSUFjV3mnKRNdTLorPRLB8Jaa9Qg6m6zF5WYMTCv",
  "key29": "5VtJGt6ffnV9yAy13qfFqRN5bC8Pvh6SoDeTTahCRxExbmVeBiZkoyZxPDEZv7iGiT9Fa7Y2pD3MDtoTMcmjLy6h",
  "key30": "4agn1psrGHFti6SzqaM1ZajjPgKJcUi4HrLSTQzxQKUje1JPbvjxrABHemuUGg8aASu8kf6KbaTMjWfLQ4MNXZN8",
  "key31": "q4F4p1QenjqDv1q62rdNzaXRdM3R3GZcJz7QMZg6bJerExn2yLtvKSSrqqyot7Y8fo9Xaj3yHAaCRULXtc77oC7",
  "key32": "ySBo8Loo4CQL8V8ZSKgAfkyWx9XcF5xYahFsdoUXqya4VXSyACKw47fPT7ZkuyQ27sNVBKaBN2o8tradhuP64CS",
  "key33": "3pV5thJ1o6rLyaddLajxX78wbxx7s8BaihRp6UJsJFjoenWT5MEcSGSsJBAwaWqn1va1RZ2b1WwJWs9Gp3ay2Mic",
  "key34": "3dPjSHkE4oUTond63iArRqcwipqpCe2DX1CqBhjFzPPuUtLZcPqZd46vTnrec4WRgXqgQe9d9vLB9CFU3B6FjKHW",
  "key35": "3pwRkZ1nckicjGACpiG2JN72xZJzyLDmHKwS89CcD3S8i9VGosTZ86PUdQPQdH7pjN1vQMvz5zF8u6QQsdCP1FK7",
  "key36": "inoioHsxTfqfqaYpektoijnYBPayBTdeiUGyR2t9yGzbQKQDq9KpKgpHDCwbcjVgtHzHGVyMTtRj1fWCxmhjGRB",
  "key37": "2XZPzP2ZJfJTreUsbogiT1yS6KxUf84BAfrdn2GAQzP61nsKhjCypFqPvUtCQAELecLXz65CUESUxhpFEHJvcETF",
  "key38": "5mP1ogJywNxYXqMxoHusPberLhNQ3YVeMXNt6CdAiEE8LSigCGHxKCAdguqSJWjsQQYt5oFsuZybujJ8FAmreDqg",
  "key39": "3XzHErZhd2sLZ1BANRYWmqpxYeba2hQMCnaFrqcZef4sENi5Sj1kNwVZwBdUvqXFCNN4x1BTWrKNTybKZWksjoWY",
  "key40": "2bMwdLyUW4NDCwVi45DpkvXbsUUa5c3TM93Wc4Pimd5f4A2fPYP3KBujcM2zD3AqeHKwGWNhbf4PPxcUJUkotFoa"
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

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
    "4FEziZL6JmosKurracesAmxFPeqtsen8jCf8WJ94Vy7TDmT3b4PkjDRTMkfryUgMJ7XtS9DtuonYociGLTm2Ygmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yeFgbSQzH7YvHgMJy7HDEc47KWzKuuPcKf37RkUEeAhwSKJWd2EhNmSnR6rd4NjAQfwGiWzaf4DJSVsayLtUb9B",
  "key1": "2sP6ZZALquvYxZFQnrZE1uEyfsxaihRns3zjXpCvAo3MBdaBXUZfqpLkhHgjjCjjTbrGXfJ8tGyoR2FvLx4urr2i",
  "key2": "1qbmQoBxfNWAVeyjcArKojwLmaTSGzVWXMiWkbRKpUFMeRE33AUALzFAZtv4VwBa7gx2vKJEVF8kjRtUw94aeir",
  "key3": "WfyEt49GDaAzQHU7oNYFYjQR4CWebx1RwYwfUtbtVhH8uL1cCbTc8CBG95Qd56AnNmoi7dLq5vyNrfcwoVt1ciG",
  "key4": "5avyD8qjcREBcbi4fSTDWvAfeqtrmzUFSaGEDw4qKTvz27gkGTvQjbHqovXwy9BozW4cCuEw8bpwyhGtPGP628h3",
  "key5": "4idiH7TYtFqAvM4aggy1pwk3MzQYDjWGoUFHxCwmoidKq95Wvhrq1CDibrTqMeEch45Kw54H9yKdSMmd4Cq2MzA2",
  "key6": "PFbhFzQxYeBWVLBhJp5ZbrRdngs965UNXEsuFKQFB5gSjxekV37Bh7FJkpgYa1E9MxgafGvjiWyZ2S8rVMNSR8m",
  "key7": "13rLfyMzBhDuH7YpJ8PEKsNC8EnyzoonTqnksYxVxp2zm5Lwz4uqJHHrWnFDTfF2wUMVYZA89nYw5seUEZ4yk6J",
  "key8": "KqnuEK9XCbxxFQcNsvoW2GsEDC1FVKP86vMvNrsiKgFW15L6QijvYywCeDeRDa1gryWmqZ6trtbSeQkbg76ce5k",
  "key9": "XHqBRPu8ZCRy32a3EL64bR61oMFr6PJo3GptQ3t7dJwGeFXWdEFcZ93qwF3mMAQn9PSKdd12S9iWmACCmgtWnzq",
  "key10": "2Txzc8FSzE9D4ANDPXUfntJ5mnsouCSMoQQeW5MjpiwmLNYq161Et9hwqqcFRaMpPArRjaSGkB1svnqzWUExR553",
  "key11": "5VtYgnJ3JbMYMhCPsRRxvudPSif27atZMxR2TJUMy2WhvyxPZmV7CXttQZMajmbaogNSjrHi8whxyzT3a93cDxCD",
  "key12": "49CuSAzE4PyrdHjrQAyyjepqMdqg8dnHaCdo4JGKZQgxnHgfqQHBxCK9ZEJWifT98Q5t9RXqEnJ6vJbMNyPpgyT9",
  "key13": "Ld9cgYWJFmcdpVncnjsdWSDzunw7fQhTg3DdBHbG6PwYf8JwrxTTRDonfbGewSLDQFAVbcJWL7kZKK4tJWGrXbq",
  "key14": "2Wr2MYy96QnwW62fK1miHTEHVbmZvVE4Hgqn7RNzJZycz1gwZtwRQuZXFNcWFHvwaHCRjUo7Sbrqtd5xr2vnbFb3",
  "key15": "5TEKptE61NK2WL1jkagPdTL8MjApseg8Ex8556GcZHKrbTfCCSd5Lmv1mHRPfgugTMCB1Z7qkjPkTqbcA3cFiLKf",
  "key16": "VpXqrxzBNaPCss6y69uJzaUHZGnTddTKjXU1gNG1LpScy2mBXTsQkCB4wnH3TWREV9E1vzSfJj4EcNapxiF3sJT",
  "key17": "2TbwTsyNPZ213gmgUf2xKG2z7NRQzUoygxvBvXKpwnghTxT5tACwCKcwsv5LT1p52NQeZToctXeiRugePqA5zGPM",
  "key18": "f7XBJcSWbyQVxuhZXoeHVuFVb2Bp2mAzwN562v9CTgv93rnc1JNFpDbZGCXJhWd4xnqHQFa2EPxHZKD8X1StKKm",
  "key19": "2RMQxbAs9NUudBHsoiWC475HpNpCAXJVRj5bKf41s2gtGXdC9Z3UbFcrmeDeUnJgxT4GxkHjku4BvLeWAJRDFukm",
  "key20": "MF16GJwbdpcHGzijyTU9h43LhK3UzLYD7aHfdbfbykBtmofTALkZFTTQv8ZgCuywXTGDqbHQur7tmGrfnX2nhBt",
  "key21": "39XzUo8eTJpfXrLykjKFhxZzhLn69teyhunuXGodQ1HwayjZVLf2uW42b68WhEesaa1V2hoHcR1sh3A8LYGSVQ6w",
  "key22": "3srU7ef6Muj3PWfBx4LQxQAodVdp3TrmxGodszWRPLhNAUgAMjPJa3spRgUkBxU3huQ1ZTxK7HbUAMjQm4YPW9uA",
  "key23": "Nhv1VEPhbYtQLV5zEmPJJQKUFpHt8mmnGfvh58xY9w3CX5Vm4CLy9ByRyiZoWLrU7jwvMrRmHFm76QRXQ1mCJoA",
  "key24": "3XzePycVcPPhzMjajDuSuVdA2X64S2FLFNubbWxqJfUGn9e47zVK9Vw8dznJAdJc84gsBYcpofwzRPiBPUbCaW5U",
  "key25": "2TdovUD1dUkUjGraz7mExrp5jK9wkuk4DzjGZTKRvDKyTCy6EA3B8Ue2c4GDiWdjtUbUVeqouVJu2CviUM3iyE74",
  "key26": "4shPmcA8An3AiUC4w9MMDCQLTrVH9szDb2PG38QbkBdniZrkCas2xHP6Sh4afr2mpgQqFKNr7jStW9KmWJJBMqaT",
  "key27": "2XU55YUnCqDYnAwDCXc6GjbvJYwhwnSBVpbvRrFFmMkzYg2zUUVRAscn5KW3J1m4n7jNmRJVqTFtWiyKLJ57qJGi",
  "key28": "9q4KrXYtmCrqUYJWagLMH1AhrG5aFCvSkYS5bMdcdUQPDuJbX6RHu1XGpDLSA5sSxLQ8TFbotDrfA9bk18zD3MB",
  "key29": "5WM36Cxh85PK8CAiJ1EcCyWv2RXDFHf7H7QfaW72pxd7iEgaGXXRdCfmcQRy7uqu6UnbaGAW7DahBvMDkMB6CT8d",
  "key30": "vnbNnwX9jFKqDLsjbHj3xjR7zTjFyUzyWBf6HjU7Q4hXQYnTq55xDa4s6Sm3fmMGsTwCNQLAkTg8w7i9mMNxttM",
  "key31": "5QGyDC8dVSy3HNyPMcrXj962ahqV6u8cXCkiEuSU8aWMwQbjxtZvfKxAAVDuFxCSJXYVye6KmYbJPb4RZy38VJHc",
  "key32": "m22jpRHkzoDrRuUtrSHrxVY58aDGvL4h2PQefqmunerhgrpCazAn9ZqVrZRmD9KEHMY1hGbAF4S1iimt47yRPbo",
  "key33": "4EHZPvByZRKc2LFpaT4XPtvGkaSBR8G1q13Sc5fQZEH897n9HDxuke3v9Pg1ajNxJ9N3NHSBQWgoGRyNFhsK75cd",
  "key34": "2cRJPiu44vqiQtt2CnHkXpaiQvmsYeQydrxRuYpK397tdxYRYzA1Wy1PuNzNnogQxaVgt3YmKj8egvuXH4sLYku5",
  "key35": "2anMTytBa2TJkwKEndcisSQpXjQoi1CvJmuqzDkx4ttXPKkHnkGq7tearsBrDXovLQVLpVzdTgkUbR31j7dwckUs",
  "key36": "3g9aciUNEGYeKBw9xFue64w8QDeCTae6K5mqh6ZnsV8gba1LmKLLktysyy2cv9CYaYZfXorQav4gcfZSYPuGz8HN",
  "key37": "phhDDXRUxXHBuyNDxoEUfWiLkvydnE1xWeKDUmFzm4MVW87W4b8Ct1ADH81YLWgDLJKsPgcfxDBVjyD7RykkmSF",
  "key38": "3xv8izJiDF2yr5cFEEZ5d5j2ZUPRR8LWb1qfdkWkWynwCU42nsZs8cJHebdCXRJVCz7fSbQtHQWNKKdzS5ymyzzr",
  "key39": "4CaGCsZ5DroGzMVGRTx82smuthqFUbx6LRGo3rCzuzszdWKhaDnFpkAExSkjqcWendyijXxCBwmhpEFUrPSeKd8a"
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

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
    "5JMdnWAN34eW6Kz3m42h5YiyYvKzkaKFU2CP5ZGGSPG5ui5CFVUUQZxgvQwzqfKS1ZR3sJGiiCPbPea2e17VjwTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vqL5gnBBriHHfPb8jeAByHzPwtwkaQtBPgWd8XHJSsn2Z6HQvLZV5suoTxMD6YyS6zF1ZbB6RYGfZBAiJUaKJCX",
  "key1": "4YMbwaFP53VUfPRf1APkcjJzJZgxTaMWAxx87fpF28yrJofZVrcVyAdFRHHRfubNYBEm5vRfSmzup42841x3Nj2n",
  "key2": "2PNZB86mkGkbgHr65DwbCTuXmjHfNRSYsYHb1JWcH5yunfPnuw4YcAHv34K4YtVGa8e4DfVmS3QiFayooy26tc7s",
  "key3": "5M1M2qH8J2fKWJTaAMLmqtuSR3VVzg9dPRUPEALAe6tpS8dqCerd7uM8XzephdZp2PhxJSEvEVRYBgh4y6AsYpHs",
  "key4": "3Kz7kmy77GUkDTBskfiEnHsgM5Sd2AxgxuNRqihTi6pN7zYjJScy4tAvL6iDuaUU4UorKT6xWYz1MwX6ZBSyvrYa",
  "key5": "QrBdjDwXG72QaRXV11yvcjGyD33h1JwNTCGsycWEth7XxQVhKo2zrK8ZP1iYA48irNQrzNKRbkwyhFWwZJw6tVr",
  "key6": "3vqi5KMeFdrXb98szqmz1qnjyZ6mZMXjFW4G8fFUBRPBACpAXxfT6ZzzcAbDsyAwDj5X6fpwomfGrtQWJhKrYtSC",
  "key7": "3s1rXEsgCbZc8eaEdznMyeQnytCtZGxGfQKozXj4MXFebPo6dgMjrjba1agAbnse8YcP94k1x1uDzYbC1CeteCL",
  "key8": "wHnKH5QCZ3t7CjjMq8u3627F9rdNL23R7sQb5YUBGRCXoDXzjVERuQpMxF2MAUJVTTpNMXrgaqMohdDu2zVUjoD",
  "key9": "Pysy1W3z8KKgGFop7eVcC8BTYTXHXz7uG9quPMAjk1MJNEZZUMCYGFRRCsrgwH6fDMeXsHgaMxXufPJcmhp5TCm",
  "key10": "2yf1eGQFwyQgpRg8B6H5pGe94L6EHvN1tKqV1F7QDRkRS162VQ8c5vRuMeKvUYUHkYrSdUcBAqzNM2CpjAzuzPp9",
  "key11": "3oU14wnHHdv1MXzT2YWMcfKRzWUfWCNgNYEQjFtuNgvVKvFUYqiHRzRDt4ccF3zngkqhXQhLaKP6cgPYWji7ujaJ",
  "key12": "2YX6HxNnwsb461DCrVAyi63uJftUYzS2TbgNKUvZ24Pt7Cd1fZRN6VhJhT4QUL66DHXz3qoa359R9XhbNnTp6CHK",
  "key13": "5rPuqob4Yxcc4ESoA1jmxp5sBH1BryfEHQgCTnxeqhqkr1iFcpUwyKNArWdLhmGxKpiEiW4aN9e79ZsQDq6SYyA5",
  "key14": "3pVdyGhZnHBrFEd15Xh6CfyJ6UovKfzfxjqo2r63AeyxTJQAhXXrZ546GTNPdXy8X76cNQp7BVVcks34wWXbsfA1",
  "key15": "5AE82VoVhjDq914kAa1EVzCEuKEGmWEwjScHyZxv3QvFy4fXHC9wp2hpT5cRy9kXCJ7cfoXDB2XA1NQy3xzwwmJG",
  "key16": "FYLke5FX9y7kYmrH4MqLShnHYBtXGv48VepQq8iRyPkBJizFFHVYf5psmVBr2x2UTyVqJXZ4MidtoPhJPaoV6qF",
  "key17": "2vZNL9SV8mSXy8R8bXRNsvoako8FPREaP8rLrGE6iGLF8e97HeBJWq2pSrF13zpzmzpCx58HUPeMF3Gqa6oL4qqn",
  "key18": "2jtgVvcjpjTQs52x3u9VVhmYyDMZaecMo4oD7t7bUjc9CwEwkn5YAi7yW53zcbypgm1qBYWrHH6xfDGrFLAiPXKr",
  "key19": "2WzFcTVoniLp2XBiDaaErcwgzZ59HYyqpFEAny5Pjz5M5LLZU8fk2guhmMvHTg3eSenBwYqfuZXNhoQ4KTG9zdEB",
  "key20": "4xXSPU76iF2PsyNH4J59YwfmY7ymwe3fa1BYRVx9oiEGgTXwvasoLACgDvhqT7J1kUVjS3NrqLCjXWSX2GauYX1d",
  "key21": "3hGiEjh4Djo3dU44YcVrsJjdvveHvcSrK7YVGUZRxZCSeVemRBZDfYw62akNTrigsrvxDrWbBP5Y4LX8wcmSmwh7",
  "key22": "22cRGkfkL6Coni9MPwivoxLFeUfTWZfVnmM8ZhJrA9UvVaAXSmHraytPs7nfchPaZdxJZKBfcRM7Yg8UZN9bGtbv",
  "key23": "2Xpxm6AzRrP55DJLhjAEWJZheQJeTDPWVeDboTAGpZiLzgG9yphcCSZAoscHUtH9zLPAPinvuqKbY5nq9SdXLjai",
  "key24": "FoH6a13VLBietmGDce3quvXuR8JbDLYCDhDwSdJm1ruuCNXVYYcrw5pUNmzpdCgQkYCH6oFkFYspbCJNKqRMgjG",
  "key25": "3dyjTdhAHnPD7XrRA2B92kiALcgZzGs1nUPW5bgGUjFMtHib1ub3mvbTJbi9WFoKr5YAzZcpNqXY1undpn352eJG",
  "key26": "47nBAnD7VQ9DVJyMozjdMTZxMMWxRQL8YjuG5PXsVxgWsioRKqtCZWgxSY72cGQd528VEkNnDrWy7QdTe3p11fbL",
  "key27": "3n6kjTW9ExYtanCiwSa8y36iN59J1uXiMvMKQHJYUFgK9psoFcLJPP5aS51xuWFTaBkP1NP6WZB19QnAQv37CVRu",
  "key28": "5yWApn512qB61u5ofRtHQJuwqgLjp7F6YoET1vMhnzgxFXYpAWapZyMNYmnydvptWV8RrAwoRCYNHYYiHgZcTzaL",
  "key29": "V9jkJVyHi7n3x1MnWZZpZ3TobkMCAwWxYhraTddhh2aaYf38CUsKWMmDVCfBjygZTYhVu69dTHvesMsmSGuztjG",
  "key30": "21fonDnqAEYsdRqtuGErDNj9tDNFVpf2dgZizwbJHgcGMJkLeCSm4BiZcepPxvEUhQ3YFat4b5YpBT9WaPY9nre4",
  "key31": "4UytBSu7ess3ciZd13hbtj6U7X9E9mWWHvpqLZfVJKrQ44m7YnmoPtece2YwZmXZ6772qR2pX79a5fDhDkP2Jjmi",
  "key32": "4GLE8RBmuQD3pP5WuzM773m6jWYCggBc3XKyV3TuUkUBaTuJfMZpuRa5WNgsbXbJPdFG2fDRE4BKxvTSZvBSftQJ",
  "key33": "62f7Xznc6Q5Dqv7xSyRqwCoM78dEDiykDqEPsBeaCR4S49QfrpVtD7CsqprWzn4PkmdNxARaiG87vK4vfkxjHYa9",
  "key34": "4JywKNuEFDSjAKAHxyuVBbj3yFuNsdqf1tDPBBg3vqiaZ8PopW2H4A3QQrYhC8soG431zPtnBcdzKafbyrSH97Z4",
  "key35": "563fYYJ1o63wuBJWAFhVBntH24BpK7hXvL4gCw8mEN3bP6z4PjdS5cRVsxbp1ieh1HXcTkRQPC3mnGbQRpSRANuU",
  "key36": "5heZE8onuTJ9mhWA6wEX6y2TJeUefPkzKc7w2AdVnrxEJqSvEgCDFnX2Qq2ULLEgerPt2BJ59BVJ14sR84FU2LfB",
  "key37": "3AFq6ZXwFaVXTTH8jEkZKQEhzywvrJ4v5HbmC8zHkTGhSWfnijD6EGTwYztjH81yyDcYH8SzBSETPTmtNbfREm78",
  "key38": "62EdXa4SV8ftYnkQtKWEBeanAQ3Ngi2oEdsJp3i2UJnxtoR5ZmTwn4nfrttd14YyrYowH9r2T86ndCGTmheDbjH3",
  "key39": "3nuW3NjnbW5sHCEfo6vNoHDHuH3BGc3Z6oF9Tasf91Fp6vKpYEyvKYVf4nBCus5tUAw534VJBBJrWvBULESzj2Uq",
  "key40": "2BM6oct2XEYwDowXb7Ty6jAKYFBg7oypjF2VPn35jyfhYJvDfZNWNht1AwvwZEbbFqPdxK7UsyKL7V8JvGQWJybv",
  "key41": "G4YgoX7D6jq374C8wj8KTno5TR8zgVj9BpuGP3bbw9GPca8ashEjtqU5oNs9SqcwaM144zRwb6cn6ehypKgqBEY",
  "key42": "47diSGWfo3iW9YsnPF9TR3NL8Sq1iVsry6GJCx7TbmqbwbTKs63vUM1nXG9y7aHLu6XkCV51yFqgAoh27Ho3DhRb"
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

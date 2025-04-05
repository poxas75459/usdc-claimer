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
    "3RsF1gfVSiN4e3JTEbFp1YKruvJr5Xu2caQffZ2Cm763G85jtJS4ZHp4BpAAWf8XdBviXUTovYfjLB8LDEop9z4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2ruATEg2J2L7BKQsovvajnCTPXfNN9ua9JmRj3MVN92boVbmMEdK4xwAFZ7g8hK8KkB9Nwr2jGw6zNADJNJtQD",
  "key1": "3KzfR97zVnsTwBT6NdGumbeVGSC5LwgFEKaAF8NSuAWHAEy57xACp5onQAc1kP4nGe9AFTPwoona31zL9vp6oJ1P",
  "key2": "2UJu29KWksqecvNYuwhmmGJrRmHkx7gibTx7UWz112fK9GjNSJ8NvVaQE34prECQQPFZW4FjrnkzDhybug5kvb43",
  "key3": "dzFYVP3qAEjG23hU6vnrvLLr3rajUW6mc9Zuk5eHV5FcB1gjQS4MY1ssDzeP4xi9okuqcYsUCbjsu56dtYRFe1a",
  "key4": "4EunHwaukNMcoqqR8fTR9YaJgTCM97E1TPA17YHDtUdBYJW4eWQWg63dsSrEWnEvNPyeoG5TJiSxtTwCJueA6dNU",
  "key5": "4yJKaeydU36QKUu3K1weje4pgQBvxd84vMekunsMY9BVczTaNvrNev8wPzdDh8aWM3JgATcopX6aJryEiVNCZHjr",
  "key6": "2eFVZ2gak8EkyXeTr9xVbDqG9PxK12a5SFYFFaHLVn7mTeE3T4SNn1jH6aSznMmc4qPLNboHjqT32eWFQUzkMehp",
  "key7": "2LGCuAQHmy741XXAmLsi9GGdY5gW8UNEaTUv9mF3WURFUkQUDtu5NzwdKU4rGgExq9eFg3GbAHf5fURnrC5wnd5W",
  "key8": "2ekr7H4eUp1752iy3iZqWe6xcE3k3yk4QYS131BNqqeE3ZK3XPqu7YVnVJKX9BPrZmoUdQRJb8uki6M3t8gARVzd",
  "key9": "VUD5kLdobmpKayt9Rb6NwREQYiCxWp8ADjAWq27CSVSetAJpww3WzvRj7ZsKWkcrifW84i88SRapp1DBAvLDfmA",
  "key10": "x4QyWLCADh2mV4FfE2ZzvV7jCCeFMrpRC9P5CEFz97SkmqsLVM7BM8wXeX5ttDkBkvBx9rFULiRCBMjYXjrvN3U",
  "key11": "23CbZjZ3ZQkiFVh48N4bnmR8j3qDkSQ3ETnxJ2vCBzxEFpSEK2jGEjwbpFKYTSmteazv1TeCVbzDRUzADjB98efo",
  "key12": "3WEf541xWecc4WQHd7MbGDRE5uamjrYG1yfwatEARZFTLQzZoW4DHkfzbMokxNmfSeyxbNZkmFPpiki4JscvWipM",
  "key13": "2BdwYjB6nfoM6uZA4qUY6y3hMK94WSsRcggZHYdx7iRGwSGNKen1DDwtPiLAPQ2pLT2JHfFGbBk86MdCtSzgxvQX",
  "key14": "2xn3xfPSnY5dZpKtcarvCkUisEJCJP3L6xGuGDNEuXAcMsF2jke1BNyhg9wk67TRoMqLbnuCyjM5hje58SY4hC2Z",
  "key15": "bX28aDPgVn5bhqf32AaqvyYs5gqrZYrtK9LYQcLXdYjE2yioyrMUJyJgGWUwoNhqvgDYHmqtrmXM8Awq4LFZr1R",
  "key16": "5Uzmu4GKdHe6EfFg4H8CcT9mMs5hK3dFgNs8QBKP6jQSfT6RS2cZpgUgX9tg8h82P7P7m4zmiAzNPpZevNgtjg6o",
  "key17": "5kCXiuKZgDzq5kSbgpb97ykuj9yz16sg16NWmeEwbUVMyNU4Cniv2SAfJWr8fPUGTobaRBqrUaBpWE3HFUgGGgfP",
  "key18": "CijHttzdbVVJXgK8QxYX8o6qsFNKu8EfcmP8Q6NzSzRNBKFzwSYJukjeSHaYwqbtz41xBcCuXubW27VdCJJMPrt",
  "key19": "2cZ6hrRVAA5aFQgMQ3QAdDEXQspzMBSfKJ9f5cwSZmqcqPizbG48eyGJwKr7T5M1aS5sQF9Xgdm8fsmr74hxqTar",
  "key20": "Co8jJ7FG8CQYHUvwZj6Qx92KPcodK5E9Dv2sr4yBNmAwDXRePpPDedb9yxL2UcXYhfPaikecnQ6WhVvfW7TMocY",
  "key21": "43rVCgx1Srni9rbpmyML2mWywNgEMxuJnYksFMmx75NnzANMZBzrjZ2fTZCz7Er4puBhdnpzGpLfCt1nY2GzfeZk",
  "key22": "5bZkQojVFpRGWCpYGNYPieTEECKEj6WL2jn8u9N4PMP4eanhxSv5oMtqvYE1yszFaeVKPUomPKxLXtwkUNMPL3Q6",
  "key23": "37S7xx9M8ts7kfeMwNX3jVfppBFRxb7kaVzXwxyqwi1k6Qr4tSrvH9Vd9AHiJRgVwB4fYm8a4K1yCmoT1XiJGuH2",
  "key24": "4n67ZGDTo1Kz6Hz2KtM2wE9GhBLPcQTYuJa1z55ADh5c1Sc8vo52XDHz9AvepbaPKKNj15SdRvAL3Sx2uU7gzAyQ",
  "key25": "47DHx9u54PHu5aTA7Me8HuDnpDRsohJGqTCf9EYh4uz64in5foqyeXPVyGLzGmLgKY1jfmkLbRHwyfMfd6SQ2LeE",
  "key26": "jMTHjMznRX1CVy5o7yoHQ6dLnxr7oi31jH6BBA4vQPL46NFu32jTyv1dGF76qWHwyw5WNH7Bi8CZbn9RmzjMjE7",
  "key27": "4zt4wMNsyHzYjBwV98QazX31CCqsDKf8CqHQMykJAFgE5s5gTTRursAvxafGnnB1ATdRZ2fgsd6eKrmMFokwHAhM",
  "key28": "2ADukJwfCMn9bbsMhFgVXD2Fw2J6L3tHpWpwpfjAKCiZNXryvPftZmRV2ebMQnNsmbactFCZUF6WfTNQ3fBwoUhE",
  "key29": "2DPRKG7pStVUxcAShkNHgeC3Tbe3yp19CQcD9Y2DnqB3tDqfWxzGixVWTD3rgRXTGcXwP5JkKyCXmm7xvLwCAW6w",
  "key30": "432oxZCGCownTYZjjhFFDzaTS3wWoHNpvHgb1zdVVJ1Kh587Dy99H7kb2ZQUUd398MyMAoYRx2taop5aTQPZdvK9",
  "key31": "3SbbEu8QkbU4rQbhkfwGPgA81ji8ZdHX3uj8mpEECeu9wa31H4cbCpHme5wLow1zrQNggechxLh55NQXRBztcgkZ",
  "key32": "5Q2f4gD7CcXWuWShn4SpNqogMtwGiSet775Q5bsFp3j9Ji5tVFQzGMDCH7tehAm8dmkqwdEHmxtgpdbQyEQemxjo",
  "key33": "4A3ngaDt6DqMyE6rf95ng2QGfR9jr9UKLoSautzrFDtoaDAfqWtkKJFx3RP9WQMV99fzHk3hGDVGJZQwhmZywyy9",
  "key34": "5Du1Ei3Gstg7VU4BmFqxWz4BYoiz7ci7rY6c27YJgjxneYgG1BSdYLZy8NG3QxvAkKcSQh5haPvsBimsw3dj58Zb",
  "key35": "4aLNAr951mm1269J3fG6LW9X3N3Xs1UmeZM6EEVPZZdoUdDYJWT9mk3SmgTXvK6FHg2RF5vPpSRh19Mz19EY5UZ9",
  "key36": "4fthj6UT2KoaXqRrbx2TZR9eSqpt1p7HacnN1SPmQWqVo9FRF4ZmYuWrYdDqJfhLHTBszaK2NnjFT3kAE2S5wPLV",
  "key37": "5N7z63ZehJAr7AYAa9wHq2mksg1dGWKFnBMB54we9nMS22xcAhir1DErX6ZTApva2QZA8cXzRWi1axXqVHvwvTg",
  "key38": "2E9uUgZWnoLVWo6DCGCtYcbruZx5hAaQ87Zjt1NqxW7uPhpQHZpJSSs8FURrZPWSTJfPnho1ZXg9GVyXRwRFmzhR"
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

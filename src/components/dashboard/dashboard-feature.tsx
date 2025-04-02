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
    "51FAtyQvY7Eze85F2R2CzhjEdc1jDAjRkD8cgZfofvTtWvi9uSVrZBJd7ZZeRCBFGo9yhffzZgcbxks5r71PbYzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lt7Gey5wV1hZfWQXUxdcreNS1WRnco9AqQqAx1pGMHEWUvYyfQrHkVudtenDcAgdgjhiZPVhWM1ACXHDbQpaBv7",
  "key1": "2pxH8vTYmiPWUqoKrTULPu3vpb68XfyMT7YCBKXmqpPRsWQsXjmFwAsL33NUwPxcfTRHqoVZUm4EvyhmbYebLhVz",
  "key2": "55c74UCoiN5rvBtowJM2UVhgC4G3oNkqGUBU3XLCT1EJZcM8npwDfTLEZH2pZ2CY2DwJNJoUUCPHJwRNUJhHbTxt",
  "key3": "3uKrXNcisqve2eh51TfLbfbriNfcZc2iF3afsrJTXNNrTUHyCJzybiVxfNCuGRtqq1wp426wpzrr9cQVXH5RHjyN",
  "key4": "2aCUCyW3iehHzDBK166YDFPXbetNnmx741rWptGn37U5wJXJhohPx9n8PxQDkYg4kz7LVTNJoizXrSZduXgoyfYR",
  "key5": "3Fd6rmAf3A1fci7yoMMWuyStosB48Jv4oYbZQgYs5dPVjYBxEZx4aT752qE9ucKHVE9iCiwySggCBia1eMzf386T",
  "key6": "3XrfTMsfKaSr8jRHd7Safep65iQAzFesp8jZGmz58HW1cUoF2UrDjfnHohgT73AwL6QBjtaET1zx853mW6A5K6Cw",
  "key7": "2s7XNNKYunsQRSAuAYwKPkpAa7m1K5htvLdZdfnGJTmrFaUWWzxYjc3iUf5xKdGeYEvJBd2YZBbRU1PaPKcT1xQS",
  "key8": "4Gky6WUL4Q6s75uRQa4oVRW9SUBC613oRsG81WyYeVELFTrNpCeE7bXqswmxEADqj8UC4LVdLzXwS7six4RLBYD2",
  "key9": "2VVVi23E9i6M16SfdcHknvoNZMqBJxE37HMQW1Sncs22wpLahLDDz3GyTQ3w6Au1qnxRFrbnhwivNdUsnv57QywN",
  "key10": "4BijN2u1tShtrtPDLnkkXmYNWQNdLDyXaosFRMyHNM1uYSRbTCEN2m8Q6V4AhrKF5mNGNSzgXXk3x23HFx697ky4",
  "key11": "5vut1BEwKqByyWSEfMSpZwEGqFPB26wMRNSXpvfaksMdWZchkfsRHGmnXDM19sRFvsVq8DQzGBXA9yTk6Xpvryvv",
  "key12": "2XnZvQhTwhPGzvtDhwmm5Th3X8uWpWe7B4vPwXAPcfDbEJxzbuVy1nnsCVbmowLAGmReBLe3NF7u6rMCpPubjzca",
  "key13": "3SUfXuuQtkMLGJqzUjfpSGUSeWD7CUpGc7nhgCZhetCjQJL19TrHxV3MHkktqT1RrBNGZs5Kqib6eEmyb2GLxqWB",
  "key14": "MTb4Ur2z1kihVdbNZUJmZm8WZGM1XJrLpjsKnBRDWEJEJCRBip9Vqd8pAfKT7peYmnn2B76LvX4LfJrB4CqWf6P",
  "key15": "4F4LjexJWXRwSBKmYttsZfZcDK3XEhiXSrUnSsCHwYopfGns4zLE8T6KtWVHnMfvnedGMnW8KrJWFidv4DdhzL3p",
  "key16": "38FZu4aWbZB5XXS8ueBigK34BLMn1ZCzshrsDTEtndq8jkebCMmThrQsqxyRK1rhe2FPgVetG6SPLEphiSi15shJ",
  "key17": "3iKzYn3cMNQXbPXTRzsCftD5vdqDVcWZf4w1twRgdNVZY1SbSTDTWDGSvaWw6x2NyX7diyn2FdScf797vEWTyJUw",
  "key18": "2rqUHRcgEKDtRFyxJWmNtkLg4PBjE1X4rxu7KVeAhjNCr63nRUD8Sw63pcpSdaD8E1DzbSRsDt69bGnXHxZwJqfL",
  "key19": "3kzzfRS9dQfiyZrRYEyvpxtbExZabzxz932RfxhuHE6ZXCHvtSoZ1YFukfzR1M2usKxjWw4spPuMcqS9yxAzvB2q",
  "key20": "2N5SeSmusUmQDSbjFsFEodiGCeijcgcUqqnVE8LyGgWGPkQVBNevL7jirx9ZyLKS8vtxjCV4Wgaa9g26ZiMr5DGj",
  "key21": "3CsFTPTAWG4R9AJ8KWzVzQ4L9EsheU1nVVJpUCXSNxDtkSkKWB9finjRZvZRtTpczeD5xSn3nBqN72h1j2pJdeuD",
  "key22": "5JZGTuRzfvoi9p1y1nXP7rWZrueGZUcCJwV7JHfhPkDJG411Vp6oTG5iWGf98G8g5V2cE9seisvUa1BypZmPTdsM",
  "key23": "4A9HF2ibSFiFPa6Zx8LtseY1x3UhYEcDkY8RCBrVNDeitDqTtFovxEEakeRJxFe3ADz7bc5TwfXPoNR3xi31oBP8",
  "key24": "2DxtPG3WNjFg5EFoSpz6grsK5tcVPuCumHt2wvRZqqV9UhzLo1rkpdmq9biFVPb5vNLwNCZ11Scvwby9QpTb9Ti9",
  "key25": "5NzdLFeLN1ScFQi9g8PJRK7rRQ4wFwcb42dhb5xTe8miMYVzSrL94WXkmdfMdSJrJX4XBmg1xJZkTvqdo6Emzbsw",
  "key26": "2KecEw7qKB4kqyPcQcCu7o5vqLny5NoUz4x6MqmWo4BYRaE59SnfBfRgBwpU4fkbZo9uvmDqivqpbBkf6MiqgszZ",
  "key27": "4ekGhS1UBjswBKBegzMswv4YLhJxfi3SXV1a8vfTx1Sa3DzZJYiFrzhtCdsGEGrGACkLFbmKZsoSsR9qxTPGUVYR",
  "key28": "35HtXqochvrmRwt5MjaLGRzYXbyXYhqnkTPzVK6c7zyEb6XypaMNKrG2NMN8Ma51HMhV5pR57RDAJYJx9rXdPytD",
  "key29": "u2YVP3YrGGtHXCcp1p9kiWKyj1AtJ35SeF3iXS98L7TGChYwSKBtXZfQVgpM7zbK7A5Ee5cKXLBxvBH4qSQahRW",
  "key30": "4oA1376S2bsQEWJ6751foJyyRM7Cybp5TYddGvZRZXHVEnibohb13jSqpq4GyWtAxiDHjZwx8LKF9TtPriGU6YKa",
  "key31": "eRgqbRVd6A4mqcN1btFrmafgovnfcJzDx72wqRe7z6nLRnSFMYPJtxvxxjzKWLMKb9Rw82vJrURLWpUM7G4Q1wU",
  "key32": "4nt4NqqcmAq89beddsMJn3CJ1HTUJ6HUfTsJ6HThrjD3bQMphBUbRooFzVPucB2HAQ2gCnJnd9WiLxVpBme6Cn7b",
  "key33": "54jn8kPn6de9Pat8C2gYX53XzGMLUmuh5H1vcqLM8qXNKttXBE2bBRmCqoTugcKYCSSJihJWcp4o38qUiDxXsE5X",
  "key34": "2M18JsSY7HuLcLTA11ra4pug3qKiXWiCidyhcv4aQrT17PpnKLpdAq6aZPF9HTNPBv3d2DYFLMtW99PctngbdrNE",
  "key35": "2i1V9svgnbZhruZeEemALDSv2YWt6uCufWbkzqjp53Dzx2xqh1HGGRGFVnLDSwBo9T1bsNA6GxkM1JzBQRgiv1Vr",
  "key36": "5KgqiVbY2ZM71Q1JzKXUWyVNcfsawiooBvBnNMrCicUnREV9fbZJarssuTaHhksHDUCigj44Yj8i8MuPU1FLT7ME",
  "key37": "36JovHQfnPk5DnDY1voBviELopM1qTUbfzCxzbFXaVj9kLPkc5sV3LWhMfDCcdAJphNYJ9uq2mTRdRGaYA3gLfCH",
  "key38": "3kp9H3j7QdPwbY3UBPn9xmWMiaP52qbJXuL8ZPJVobtjZse9LRNuQf6wWLf6E9ng5Bm5WFKCMkJkDQxDQGttBg4u",
  "key39": "4DCp4aq3ZoRFWVspko8t63LXqp4XiXnWoXLzuTDxRpPQqJnYAcRbvefbEqQvZXPPuqWGch9N7TqC3KwuCy2uF3fh",
  "key40": "3zYVVS7WUeiE4AgL5YZcCXFxdCViByHcNYih2ydkNYBdt2TrTBRDrBsAyCedtPnUuTtoz9uVugXgbcsJFW9Na3qn",
  "key41": "4zU5TQ3BeFTFo6559zuSxK4BrpMjgAPyQWKFqD3W1Fo9rkoFvpdRCKDXcaDpT3zZX7DSKSqPFXfkk6M3HATtAc8w",
  "key42": "2ARDBv9gWyMx3MWAUj5DTvXP5YwsmpaHKptbRgo9rVzEF9XPpQWT2dYNqze2ZuFXACiKZnbGQeikgaDVAzxDi9qh",
  "key43": "5hmpe6mT9yYsWEaL3G94oTsquzFVn8vJMixTAYUdCGDwMp9eQNDbqdHkxLU16hKbNKsXEn58ab3WkNdN9eZEs5DZ",
  "key44": "3aa1unrgbhYKxjfsjdiazfsXR3jUARAL19gZsSihizTXhpj8XuBxxaMA6prZLfD9tHpYu7M2CYADEvDSmeW2fTXp",
  "key45": "4ZbCwmw7MVJ2D3HzRiDbQFBuW8vZatw3MZA8BCa5WVGrXJGa7TZLygyoWq6JW8owu4PF6rTKm2DRQmy9GKFbnX2v",
  "key46": "2KYjByK4T3XzfCzn5RqZc7hxus5tWxcv4qPt5hyukxkzfcpxKiwTCANkUk9dWU81Lm4MGEGMRowFovSTARPEhkr6"
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

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
    "4uonNzzTqLWGWMwzxzPvCxqFNJDwUUVF8VNcJmAssM9SAtD8eFiZugZVNQHorf5XEFWr6PQCP9C1heiyFJmAmzxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eTZPBfCLhaSNUFQoUJG6rvEszUbBFFZXwDA2793Pa1bpLAkXsTxLNtKvwghNv9T1aNwuoPSHUEenB8aeUKPxd62",
  "key1": "3m8jc2ecvBg3cZc4mMr3cNhD2en9XkxEEMTiUH7eQgsVYPxLYLKdZCxVdyvQnyHUQ1t8Zi8BZG9mB4a5L1DCNzHk",
  "key2": "2EnRa7DfDTfNPzWMbyujKhKxRYwEREDBJbrUxvgdZrUfHajnqP7RxmuFuhvhHwZrc8PnS3mwdb2Va42A3WQpGa6H",
  "key3": "3NgRe97bKTACL53ioBngvcqjkXnSyK4mvY2feAFhwPmFodHrRM6vLmrM4XNYm1UJdnDfiB5Ns7XL3q759pHNELSp",
  "key4": "4Rd9LUstFrccFWt8VvKtR7X7RutZroqbvLSzWznW7Jjqyu7AzM5QmuXRVzeZg17nWpkA2f9YwUztwZxtvq37eTPi",
  "key5": "3sR6Ym5yDmnXmRH1ZL9BjsrbtiCrhDVqMpNm62Jd8zFeaEp19xiyshGDycjsudefBqA4axRgtgrLtjgwkHVY7w44",
  "key6": "5rCv85UpeNnGVdzyKDGb9FnaatPyLANDF9gfkBBWy4WZKYMhBwk6HTDTw8mfzJzUqQnm2TcbKaspKEKkTS9iMJwv",
  "key7": "3VU7nRSR62ERscC4sCUPWzgrCoREwpNGDVuhEvTMeABB2MG7hTcZUx1WDbKxoYaqyroYvwiHsGWdkHgf7rgnj8ZV",
  "key8": "3dLQUSKubJMoyg9UnjizJEGuVrXBtE919h3w4y9L2RbCfi1xViwitJV4jQKY1aGTdXpFZK2buSPiRFUhiua3Ew63",
  "key9": "4Vqx1kvf2cTQ7mrPxe5uUyoYnNYT325hYHWhAyByAq2AwXPXbd5gjT5YCmATL1oNe9cBYioXWeprjBs831rkacNp",
  "key10": "3GN4ucA6Ksa1KQgupF8bSLJYJag1wT5bKYcu5ujmns9XdUkgYP4rH8isc8gWNZx8F7FWV9G4TPnaWioya6WdUmCA",
  "key11": "641UuavNuGNd3Sig2v53eBW7FjYD5GqU9HAtKxm8SUS8wLdAMmGtTdxryzYHGuhMiXSyHjZDJYawGgj4YT8gHxYb",
  "key12": "2ayEFnK5NJvneE4tXHTigxtuTY1awJguUq7MGdYsxP52h6Riw6hZBX11U2LFScuersYgLZZ6EHY87LWSH8YyzoL3",
  "key13": "cjfWUa4PiqKAUmX5JhH75AboWV8Cgqi67zAD4YQAp1tTeL8YiWUf4Ug8ho4e66QhMXtaw6V7ohiGGm4Sdp3SJc7",
  "key14": "3TR7ySwdVNDyWLsgbFTbSHmpAQQ9DGmGCKG3kx1MLfabgWZDWDazndcXbT6JE53c4e4UVKryEiJECp2DEdiNP4bW",
  "key15": "33z55RxWioMTfA2bmWmdceCmmxi9YdwNVUMBieMHfhDF93A25rCRh4c4JJhrFy7QmQwfy8J2qqm2TSn2eB4TFCH1",
  "key16": "xBW1BLtZLhXcFAdxDydeXoXSqYMV5zeVXvuV3mNqgsAh3urNeTSanwCBP3HqVRvs5akh8asN3eyX8oqJKbC1ucb",
  "key17": "5XWSxrwdfhFEikrW4i2mLG29KhczvxBU2GT1a55BPtYXi1uoHnCo3vgpMRWo98DLdb3xudjwoYeXjaH9k6ygXPaX",
  "key18": "3NXbfWAm8R3REzNJHt88uN1DWswzcqoRAFXZLFJ2urkam1KsvkWzSvT5BDDyEjSutS6yTMJtsCCJDQfWza5mn5HG",
  "key19": "283nDa8hs8wXxBsCErWTu7AddXNDnBph4d3i6vF1Hc8ygS6qqksr6LBVZoBVjEXLLXi2u5WvL9E8g7BqdLnCcifu",
  "key20": "5yDhTG1tYsVHhTVcJHv7pTZkLUbH6uVnkE9xvsjzSRDTp9b5XqNuSQ73up7bSArxNQB47TLyGuAHMUxtXLmVFye1",
  "key21": "4X7yRDucyZtRSRqPa2kwRRknWJtRAo8BM2XTw48GQTZtJtJjmP3X29MHfQ3powrXMijHZbMskx9JQme4FgmUysxf",
  "key22": "4XnXPFt79tRsbhekhz5fx2LaUFMU9V9w3D3U1fvpXzW5FB8YpbvnBEuJRkHnYdGHZSYuTEfjHgUs5MxWNsi7v9j3",
  "key23": "5Q5xj7UeHyZLNm2RYqBfMEe3CbheDVeuqREQNZo8yBdNa4k2ZayB3Yg6CCSZin8jsgo3ESeXBHffrzow3D99srDg",
  "key24": "365ZSsF7aaiFE4sXKfNywzNyoyiDdFadw9SKi2bsdjJUuJjVpbJH8AuW1uFpUkYQNikRjbJGdAm6AeXLboa1uaHX",
  "key25": "2UaiqWUMiYY7J3JDbGXsyCZ1o3syWVezAu9Ubo3otBrQhG1UEjrAjLf9J7BLb6QeBdGoSKnPHBnX2S5zPRjZx7UM",
  "key26": "2D2pfuMJdr5EHzwo51Q2DXqB8HYe9cB1bmAePFW1Zpv7zXsJEYKEvtqQ7JfNw3we87MeT1f2uQMrmd8n4Qf3NTND",
  "key27": "2KJBftkqejhWuhUbCVSDb5LDzJgBCBp2vK8z8VgKi5dxtVXRZigMGpubRCWjJPaFMFURmMYtDDauAaRrMML8dejS",
  "key28": "sGRZthGau6Ga75ByHoExjsytT3Dm8uzy2SjkQrTeKNXTeA9kD3osWHtG7XsYcXTrySbvhcXLJP5gocRzmoK5uwR",
  "key29": "3pwRsFQCQVyev9kW8AnmnZEdC6pBiJy4K8eCQoDsavZoKGUJCBke2AfqX1NbNwnkWYFA4TK8k8o8xykhMnY1QXEp",
  "key30": "3UJbG2XptVh44rbtoJhuonhD2aU8FbHUNvjuhdDh8L5cefo74gQDHoEX5ZdTo9f8zazhSitcVBJg3VFRVGFdnroj",
  "key31": "2tvwP9xF1nC9smXtdGqBztQsEbe14K5q6aD86y6KDMp7T6hDUBc2Mb7imb29j34hgcMdKna9yt8c88XK7e56Wkvu",
  "key32": "3A7M8qQ7US7rc3kf4PouTrDGeDrG1GMFyAzBE9aTEzskkNSkDRGas9xtYAHx3rdoSXTJHccEZQ1VF8bNYME4iWtC",
  "key33": "LPPEKM2qwYMw8i4X3RbzWpHsP6B6PMaUkfpg46bNydXwWmSoTXbQLcPjnd28iBVnJwzaGfVpDbVGEwxBxS2sUDE",
  "key34": "4w8Gfs3zgzu62t7PfCKwtWmJYEzgutAiqQUu7vvPfDGWu2Vfrr2P6TM3vdrhAeUTzsgFj2etJ9KvSTy2frodQkgf",
  "key35": "CYAkRJHMpgWwCmme4zcrcVPgqt7pkZaaJQtErM3g2SubfgoYrhSagrafkqAxnVx7Euo9P5fV9zjSSTStrBmNPky",
  "key36": "2hFEbJaGXfakoPmCwpzgWuirvF1Vukm3Z7qbWDujNwNj8gdZSEruw6XPcwo8qTAvkTKQnz5KpwM1sbY1EqgWbkwK",
  "key37": "2YJsxHx5gNDdGXrBE4AdLZdw2NC46xx1MBJ1wHLLiYeYJubagJ7qwHMsdLKZeDuZE3hxvwuYPdd54L8njEiSwHMF",
  "key38": "5XCWnTxjvXMMgohMBBnLzAkQpn5vTfMqrZRy7GWgiBgHDoEZys5hYTJs81G7gYzMe4sCW54tRchn8P9wyAcNjtpJ",
  "key39": "4gQEgABf9AHpBQE2gWWnh2osCysGLhyCZQ8GyUMBadA4GbHhyt5mQ9jUFb72xN8Yh97n76yXjx329vJt2shMLX8T",
  "key40": "4REFjZZ8yq4LzGGhXDUSUGSTbEtnBaUDhTPqERHZhMPXcbDad4RNHup1uaA4kRpU5pMUagVXsuyP2Jssjod9YzAd",
  "key41": "4FaBitQqyA2oYNA9TnyMe8ue6BX9Jro4r19nBtvsghTi8LD2Myybnpkp6oaGWRiQBiuabxrf1ZzqBb6RBPgPGDDh"
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

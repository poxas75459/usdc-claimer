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
    "3W34i28sPoqVRMyt5xjrjKmtsguJoEMVJV7HHmn7tJ4mHCGHsjdwFzKsAsfV4Q9P6G2VGXqitSXaxRoUkQwU7evN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBNV9k81UMfudopzgRmrL4RGnfM7RkLFbUj3P1eJGLu5Vee7RLqUCkU3ge62NJC6UVMZJCcNmYPQU9h4iENi5Uy",
  "key1": "3Zbzw4CtZFZ8EH17Fb6GogaMLh91UWSFytiTUHqY6GocApfZ6aqG8StfZp65kozRE1VPJnRLryn7HVN2Xucd3jtr",
  "key2": "C2aCXyAF8FxnXQD7f9pF84HPJTV7BWYG9bzb18zyXhtzE2tsY9wY53995GpQmumwdwqW2EJ1GguRJVweJxZR3H9",
  "key3": "4RCN2BVtfY37vWbpaxKpdfMMy2vTXJrZsbtPrrpGDqYyZmKDptKoUQpmJcZZosJG7FRhPubiLfVbh5cVGxegPs1i",
  "key4": "2cx2XyFJKBwZJrZ88gRfi8ZRTZFyuXC39AhZwAPVL868crfuD3J9xv521J3KoDP3wvCDj4wD6AzL7pDz651kqk8U",
  "key5": "3dXUiYrDNqJtcuURUwZE6bXWV7DjZwhyXY2r4NCLJhjCK1UQv8RXDn9fpk5VQJVmqEsXec3XfYCpjESEpj7xLf1",
  "key6": "5iburTyFY1zb36H3ywUhWqQ6UR6ZVvjXQif32q7kbyDS2YsgdoY7KYdZagGf8LsiaLRK8CF7ppxxCytzWsjn7m8s",
  "key7": "2i9SJQdHnT64KHbki3vSfxkzeDhs6BV6awa8qcVEemEaoaiWiWt1k6vqG5RLCcH6i9rdL6jaBMLQ1W8Hex9qPtbK",
  "key8": "5WmY9tgFfvHBA17VbNEKUA4oTibK7ULCRV2nYiU2VzraB1rKprWpS4ijvErzWPpm54qeMXHErX6qrYkrQjLVxPdB",
  "key9": "2naw96oZwbQ1wJdKHKr6j6ts7XAPjhjF2yv4cJBYjDHttYkBvyKDgs2yDeYefDQSNahJtALtX14yY5wG7Qs5RDW4",
  "key10": "2R3YT5EREggF5zrjJwbCvbYVLjcsrWa2Ja6ejmtvUrHmzCAFwc4t88W6EPK9PYHoBbD5qQ3QCPmjdv8yDREcheEL",
  "key11": "2Tdhgvt5dz9vuRtiiu8ZbXX725pefDhwAPh7DpiHrGKRi5jnwvSJK85otEdjTVVUbBSLQYhq7idsGGu6ZJMTFgS",
  "key12": "2LVKGAAaELHerRvLQ7vZhotNuUNd2mK2eEiVHtmVvDns3nGdQG41sWTwdPweMZQ5nak1ZHPhSETnwUj7XbDtiz1H",
  "key13": "3iqVqLcJ2cH6hhYLg7GBm8tWq3Bhnn8WJVh28c8q1sGVmkiaghjF7j8pHUCmbpvDWTKa2MqbapNh8bRZ7iazrn9M",
  "key14": "3L7bkedMqX86RNw6nxNQFtwhoUJNW1Lst7AeX2PLRHSbVPXfFW3BuNxEkPccsGPkHXpmuPinVqpgxQbidBsxbTE7",
  "key15": "34ay14v7JWzYYorD9jMXuMdxSBKUjGHdUYEmYW3gDPYNXfgqiXWJUP3Lt8KVGR47gkeuz2N8Fdf667YE9ndoBDXa",
  "key16": "342QNqrm82Sbd897CJe13Xm4P91SKAtpGB5fxiLGn3xENzW12YGS43qMoJ79L5A4LrLPyZR7hYpYBXNzQazwx5Fb",
  "key17": "ncDaFhNHwg1hAjv443enL74SGQHrujwu3hf9DiKaNxsZ3FkGVtySDb6jLMyACKSVAaM3UDLVkjTww9DwQA4ooZg",
  "key18": "PH6mzmHncKJe2w4cvjSoDLXcQw6ULfUNPgTzHdGE8AeLp3GDjDGhv8sqZtJserRhsuEDCsKEBU2dSzd4mLi3C55",
  "key19": "eKvcmsTP8gHZ5xzhbfrjBb8HXKRa7Pvk8kuwTrKnTkiZS1i6T4GUCY5dzEpCBuuoHwNGwU4Ymzn52w7GxrHsbP8",
  "key20": "3ABMRKoirLwzFp1jy2fL5HjAdzRyfndmY2qyfCfd3p8zAwD1bNYqKv4Q3Z4REanrHd92a3mFEsEppJACeuGZguXV",
  "key21": "CUr5cUg9aKNapR5GqFwj6wCw66zy8copBvmvhhdaNmbn1nzLZBwCLi3EyqfKHjSvDD4SXYx7mJCas3VG7AnmUXd",
  "key22": "2ESN1RoZ1WYxWPefttEqw2TPEponkRuDXM2wHBT71YxyJyxjttbf2boecnr6s2hQixqqPXLL6pZ5FVKSidziSgNc",
  "key23": "5Uwcn4gN56j5ewRkcS6HNNEPWttKTT2dG5DEQoPtF4V2c2fNzJL4QDcQ7mmDGPteGiSSN2r85QgK1ACSyEKq77Jz",
  "key24": "33rwSETjHoA4VtggJEhcGx9zHn4xH7dixQMV2B9drBtSMV6x3bZPtZi6GZLevu3ybGoMHvfgGBRd3NEuiL1iMxxg",
  "key25": "3ET4AA4kKwvX7v4nhtxVktcfQY7Q1sb6Uaea4xKz9tXEFwsFWTYPs3EgP5TMMsdTG7tVg6ao4V1nYGdwHbB14K6",
  "key26": "Vi873eADuiSLPhxbdhTPKK87mPHkUZf4FEMwkoJz194gi47b89Dyq974xi6cSHew8X6AR4Jtcnvp81t2jvDYejL",
  "key27": "2jEQQYqzHkYwB2ghLrMd8py5HFnYHeC97NSnqhJDdMVRjRMwtZijKH9zavPFZ92qcVz2M6FU3m4cdYVCZo7RHH38",
  "key28": "56wj5Moi9SZz7y5G3oCFs58GXfN21LptQH4L3btSWBYDLv39qx4qCbV1mtp36Dmj2iUik8YdxAq3ry1etAjvP766",
  "key29": "66wLVjYm252Tt3DNN6pwTxLd4hU3ovvdxanYwjuWTmkJtbrRCozLT81DV4ygmbcWJjmRcWUXLpXgnDvQyUhseXU2",
  "key30": "5gXYvfSGwApjs418EKwtddqXJXFyv7QKheG4qq6rxr3UhNmgHwM6A2a3bauj68A763UzSMw25DrWLK8asCnH3G24",
  "key31": "3F8xydkrtcobxdAtsPAW7oGJcjDeugVMYmR2nS9LmBYE2DZa1J2W4xLXco3AGVqVUrRAhXc1VdUKxzMXsJBAwHpT",
  "key32": "58WHRVeF4kxAipUQDgkdx5cwb5eAYj3WLveebfFzsvY5DDF58Rffxxx6LugXUWR2suk9e5ycPWVPbadrbNpecBAm",
  "key33": "2PdiHMzS58NGJFTjH63EVDkzTvqHNS8DZmhrXBEpZQ2rrW3uy771BhgWTYjtGzEJhJubiB36eazA4npJ1orAkV9r",
  "key34": "3fvmanZEk9qTvmx6n9cCCH1MnskndPaZend5eWLvGfqVWFD2bkRfatyqaHUwEZAZshZp1mvQxEHrU66hPk9Qr4ap",
  "key35": "2XPPL2CuK6sLEXnXncWDExGAUV633wPQJgDpYqjbXZ3PX9Zw1RRUFL368LJYK2K3WvHvd4m3njzY4bxTHPM3M71n",
  "key36": "3z7oRyXL7s7SwKuQruTgm4kArCa1p4bVNCEVEBqVXjYzrabWjGYFWSVeuREP7u5Hw2QMfTJUCfANiNBNZ4WG55vJ",
  "key37": "3BQddpZ8cAmPvLMTVkn1jA8kCZ9CUoLupx5FRvSFxKMMFcKRAMhKVZWCdPsvPxUyXuw9DXuYorhPuKbuYPL7yUdV",
  "key38": "5Pye4MKiCdAU4tSWCbCwv5XM8V98C5AaZ4tMWJAMWYJacBkku9mw8gEK7ByuD7ReomBHWeoJeRwksh4gziLAr7rF",
  "key39": "2N8kaui8PzS8zF1jursK8RSxujqhv1vAMw3WaXoNhA9TYorGaaXjNYDayjvZjz2MejjHZdZiWaz33eNRhLWckcrS",
  "key40": "2P13XT5WirwSFNfy3UJkDGbLhFMbEFkK61oxctobhU1n7N9GkG4Nsg7u6iU8hp4AgxZcHqVx1cAcqiGRnqUSk3Vx",
  "key41": "4bXvxAkeH4eLSwZnBfPgsQMP4nBBwJ8ihtM47bECPc3tyo1nzejqwUSHUwMKqHTXRy3s7STDG5MQ8UTMPa7nokgU",
  "key42": "5EjX5LCdYErQrCrhjEBZcgiehX96P8EtpspaBGRhzC8JGgeVZ5yjYPNnVUq3MhYBSrT3KXfBFhfUshANjdkS7hvB"
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

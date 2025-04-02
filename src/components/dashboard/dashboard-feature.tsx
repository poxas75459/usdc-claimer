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
    "5b87Lpoh3feByBbY59d9ro1rrrKNE5sbzbkzoMLKLGAZXEpKnwakxAQyrKj3Xbx7X9mkD1qfwvHMB5M6nSgCJh3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGrAEdNLqki5MiUCMveJQdnhXeZ3o7DwWfxEFCcxFhcqY273h6wmvxaqgZUsJZXKzQH4denyhU93YdqhQ1Novxk",
  "key1": "5xtUiVqw6K2iT7PMFS8yVVaS2GbqmjqFJtJD2ybiFThuM47ciBrGBxP5rkJACLJB56i2jT93PFFfyyDdedJRhVzF",
  "key2": "3kqdCjJY6SQYbiYgLnVWWnfZ61tbegXP2XEaaLmJgz1dBHPqBUNvWQWDSLMunMg2YUUnREdZbmta7ZM1jzUn95uw",
  "key3": "3AXvWA28NMQgcK6aCZbQY1fsHdvnqnwFt4JPj4uzzBGMQ167aKctVYzweL3M1F5W6kuVUBJMQmsNX9QuitGbZDK5",
  "key4": "4zwrCZ654mFePnas5D3AaCU5rJ4j3MQt3ZtVRdsKxsJN9YnzkzK4WPTjk5MeEKqkTweXaex1Ywrv5DsL6MM85X7w",
  "key5": "5BdWr3ZsVVk1EU35SAu7qDxSTmue1nKacw7dFTFPzVizAzJV5thxyLBSXsg6X4iqFbHREBUuMZX5yc5NmXZ8s9Sw",
  "key6": "y6Gk1GVDLNM8Bshj5HkDVwbeVFSQQXVA8YvyndqE5Qo6oz3nb5WiKqwKs6fTJq4ma1PY2Zo9hXet86Ttxh3y37E",
  "key7": "2h5NNzat5Lw3Q24p63HHbZVtbM4yeoAiWkVS4kt9oxrFS1FB8Hwt8Ah5RtjNMpYSf4KRL8whSTHZjECu1beYrZQw",
  "key8": "2xzktu9uwMRDh3yPSnqr8424XVK1Tw7DU7V4nyfHTC6yCFGFgBV4G83Be99Wx9HrgLDMDtomwrdaT8jAZqG8ijAV",
  "key9": "Kfpqmi8FyutkZijWPkzQegUQkfm6RHnUDJz9vqnLpuDLwbruHTtgkZhsFK6JJM4jJRZQQqshg5Xi4iF1Uzatc28",
  "key10": "58eFJXnL9pkXLcEs4B31RLcM7oscEtp16nsai76vjKhYZf2dKJVfHwCSwKpEAQZF5SqgbaT9VkpVruNuFWWbB4G2",
  "key11": "bu9Ya4HvngDJSmyNpG5AHRqBQZJFEZYf2FvB3WFvexcgUtuQZfWMJX8QcQWrJMbX8PoPPk6hwxnTZZfJruTLuHB",
  "key12": "5vpKXSAi6ZxGWUSHRuxzKY7NFZ5fqsb6hRm52BCbo3KwwjssMAB6CoJXhpT6CxabZk2ef3HU3HT9oM3eWCH9sHR2",
  "key13": "4pWZ1s1WCUDycygTrDHAu9gh6KhCbSvAziaTiTbdfm6iogqTELd3g4UAV2SuKDDb78rR3dKjnvcMyoNbMixHCrnX",
  "key14": "3drLAruXsWyXJU8c2ArP7QQxQmSEdqQoYa4drFh4dHtcZdzLPMbDtu8kGsrpqjP4TfEi459Fa7ienLTLWm5ABqnN",
  "key15": "2BzCvDyLnPstUg5sVM9kZHgJjpqPgkmyLenb1uKKZoQ82GVNsEut3G3MXDwqQEsZ13DoqmBvGZDwskf5sx2HSXSQ",
  "key16": "ZAorns87EoMgk4VXiG15qMqoZudGyaoZTrP1sA9xhG6VNRsDU2aEn32szEfPLmZkTfzRRDAHDbk25FXx2Pq4gNT",
  "key17": "4M8B6r3kuyawLNnVtsPR7BGsMH11SQ5UvzH2dwriAWHoAF1Ak28k6tRSLXppUVtBhzV5nTR9yTwubFwsB15W56z9",
  "key18": "4bovYCk1UrQwzwPAtmq7RC6sNnxYrvA9CrSmkRei5W9zjQ3FQ7cDojDAsHjAE34fMkcf2LPAjPDUwPsVJGpzW2tG",
  "key19": "5VaeKJYBjBLYCXWwh6NN3fz5tfMshBzJfhpNyCiqvuZz13dsa3HSAB7Vf3sy3YvUmTh5DmJhY1zaTJ8T7US5qzaX",
  "key20": "4LyXhSe2CZNQVkQKEr4LERbr4NpLoPA1yJqHKEhip1kZaL78jJbv2KPERs7T2vt5HogW97opMqWNrxaL4Nb2i3hR",
  "key21": "2tPijgpbVkzsWEx8fi6NHi8qrqWhf2XZHj7v7VnyYXW83CBtAyJad1yMFEv5YPhDaGUXgYfZZENaJfsnisfs8qWk",
  "key22": "42woqYpY5jbEGJo3hGCn4Jja1tkcPMkDsAhBPczJe3JEZ5sxR5xjYmv1CpxuoArxNhpYxxKnjtjK5emkjxC5EXuZ",
  "key23": "2GtojVbGFNXpUxSLHWcr9xZ1U6o5weQjZ85XeG8Cf64EcKi9jg4yxShPCS676zeSNBweNxoSsekWDKU9nuLZ1Htk",
  "key24": "3V59RwakHJigQNX2HcwJCTosHk3DGBnWHfokeH7HuSbTNYv5J3xMrT5n56qnGprTJJ7z7UJE4W8eprknc5Ziek8h",
  "key25": "3FCMFrgYMgZWdAM5pAue6CnTWCcWUTCrHbunfvo1VzWV4T3JwY1hnge2xLD5tBvfwNhdVGqqkY96pZXFiaCtEN6q",
  "key26": "5B8mF1NB34m967iTS38q1QifDqPC69891XKGvwXDDm8BQuMZrZ2BujhFxE6Xirf1BUpF4WqnLVaJ6ANH62x7d1qN",
  "key27": "4kxGBs3dsMiwEnhNYi6AstHN1Q2FWhpYxf9SCN3vJdL8vhr1x9kFwN6zKE4q2vYVM1MGosKeuWjKBZ3JuQrrwYAj",
  "key28": "5NwETvpRD2hEPfFTJ5cWJuXcT39fjbpPSMYP8P2nYE92dR7MazMTAC5B3sYebD4qmBQVvFmzDXbwRw7VDqHR3yGv",
  "key29": "QRUbbbYcvVkRUmWbw2Pj9r6FFJz2k9miYa4zeb4NRdkuCwjFxp3nrLRBcddSqAawF5ZBuSEMZEVs9Po6jish9p5",
  "key30": "5Zpf5La15xqUQts3SvHqfCkzjxYZAMLFCrGnjZ2N2bJTZx3zjswA6YhhDopxPFecuVDvKgdZWiFjmiUQTg87x3yb",
  "key31": "2qxQ5n8BqAZWh5fkNis3sgZ3Dt3qZsPZVt2WTSMi1MQJTnzVtk9dGGfRZmXU2WMyEDnA3USNe2m8v1Q2nUQDyuba",
  "key32": "Zs4tP9L7htpLMHTKtg2KYLQ9EfGhMPawxpJ2Qi6ShChrz8HVzag1FkNzo9yVgMD9oxYhqbhea6pS1jd6xLYnwSd",
  "key33": "4qP3QTDCjFRmUG2KQRXjZEVf5kfbdauhKFDaNiCfJmYLosLrACSQUzSeiQCQ1JWmrYjpU6RMfV1mHn3aRZfPXZCU",
  "key34": "4y3qDQCF9gnSUHe44vaC1r9rLCwtU816SjYiPpZtheUfGfu7vvZsAngG3jX7yADw8MLczDA6sMfSznrvjKUzzNLo",
  "key35": "24kY4mhQKQhCfdoVoNMSTTZviFmST2zGtDzBsNg1a8JR1WHY3KwfjuQTKi6QzHhpyLDGmRjB5g6tYyt1BjRwfNkQ",
  "key36": "3FAmvFiAmTNnDn33W1bRS78sdjAXjJLfUjJwJEvqJB7sAi2eSGbS1eMeFkGPpp5WsqFtYNdqfNKCEcRAwYSERtKo",
  "key37": "4fjkUtmtJew8Hty2hc4K4uT1xBJJpE7D1ZuKVuHmPXDorDDeZyjxTXCaXPEZDjzQkXiHzt8io2Q1pSmTUFRXJ1PY",
  "key38": "44rWSDmnewaMeAwdb8u5ygxSM2HhJ4UxXG8rDZ7dAyP9h63aDa2ogcvUtHpvUCGmPj4r9q1PuJU6PknXpfFTTXHY",
  "key39": "5ENKifhgA34szfNQMKvPxqSxM13wV5yJX6jyasudW2aTnEoVqXUJjo79Ek97yQmLV3Y8dDxHmpNQzbTz7TEoM5Df",
  "key40": "5prCiQAEbM9puW9GH3ynwWhsh6YeHdajciQcYnEEgjURp64wAHDeKPzHujzWAic3J5e2D7kZov5uE2JPTQb6DZcQ",
  "key41": "5zBKJWrxz9RGKL5uE2kx7o5n4bYrNQfDteKwznHhJEDNrcKdiVSU2AUcx1BkaAQK9yto4XCgULJa2CNqmXgpDMLE",
  "key42": "27DR3uvrR97wpk1mZo9MHZQdPHW2SPQNLf1zz3QqVZbDiGWLQPHAeiVTJNwWMdxbFcADnv91t8RiPLHQh6dTKPYA",
  "key43": "A8tPjNcKpdYGEDFB8h2b3YnWJpCHMUu6ukiDk7XkNP2mpMNX9NJ5SgaXphtVEbshYmNkDV2nRP3S9RvcCKpYnmu",
  "key44": "5pD26GhT5m6jiFAwt1LzFGz3rgdHhKop14jVSo1udzQi1Dn1CVomZ5LTbPbTZCwZ5zgvFhNaAFasNzw3eUwxNK8F",
  "key45": "358MubHmzNNtsb6LCDrK4EX1bKUG71pXQPQF8PBFoEmTXs21CX7vB3Rnw54EdVuWaVUAbP7YE7umvTsWT1DHxphk",
  "key46": "2wVi2gjhkBXKE9neERWvvZNMLJhwrG7ConArj38kNuhpMaw11SkPsRY5QipbgNWqxzxo7c12M6rTC6Tm4PcpV1kC",
  "key47": "2XhrQFKvZGXjJKxcx8CV3GMKP3Wn78pWLpKLsGwCX8tE88aKgobsAyT2mpuudNMzdQr1Su2Fgcd9Zke4FGy3ho1b"
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

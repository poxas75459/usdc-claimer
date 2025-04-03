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
    "5mAuCc9hurXD2CHvwtkw6uMj4Vk3euK2cjyEnpDst71UVkoRYLxBJkXX72G1bgcdNVo8F9GEw9PHH8GPdNgbdNkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VyHwcBVzji9yVaSHg8EyjZvqXypHUVtyj53qzX2zb1UjWE1eCWWNhsWjfhuYPuaRi77PWbDDi9hSoQAmd96gez",
  "key1": "5RuZCYDREFGJKTxcjAFqMSMMgxNBi3K1LWByTC68dKbSL9xUGrugCgVJkFf59KUrc6p2kmYo4LyD7WLjeXKCRWhd",
  "key2": "3FRkWNa1rWrVxEcQiS7YkhhKbcw3Vwa8epWEyQgh3BPu749Kz3aTGy8HQEsGiL48DadjHHW7TipQjecDkRQVKjns",
  "key3": "2n7vWsRK82ugoSSrc5mHutX1WpGkpSWZEgTkfP9QKNvQ9aYgRBxoxR352ytzRBT7jWHkjLapyG8qtM7jsDy9Ycj3",
  "key4": "2j2EV5fXtDC5WpixcKhzuiQ5ZqiwhFkhdXJwubj6gqHsmC1cuwiMhmQEns6iit1TvGyFeLqnUQovEaoSQVmp8drr",
  "key5": "4xrRCiHJww3dMiUCJAYhBFozPdX2ahJuBCXf1e7vYZUwpdR39K91P6nHcrRriLUKsqVbbWyMLDcmZPbkmay2EvSg",
  "key6": "5bzdZK6jtJx8MKET1XEyqzfRLC5k9pDp7bFPHyd7bDqDnrprCtHd9ffQixbojCSipTWZcSk25uiLRpRu7QfZkjGN",
  "key7": "2CGFjEo1DSD8nqqEKXCah6RkAtssexpp9ybrMAJW9nrvV712JefDppMhL2W7xFyVXtK8QStWV73Q8hTTx7XjG2gx",
  "key8": "3FVz9WBhZ4FeTfMnMkeqYbgSU1hXPkQqgSZTZbHzYnvCDnD5xeYyKE4vWs8Rjkd7mMDK9hnyj3K8HxhpY6QctrGK",
  "key9": "5eioMpvXSuXwm1bQDwDBLqs3aYcc2S6VxjuQBmnVTeb8U1cJfye5VLHVTAJLGxred6xVSr1RexrPKhy4rHRRRB4t",
  "key10": "7TwWkKDHgPmGWakko7fJCBFxknRbmZUQfUxKodM3Lp7iFXD6VpKyYMJiJ7KqsKQJJee4XwsnYKGQcJdCGJb7x3K",
  "key11": "2YZGmUyrB95ghFQxo4DH4VFnzYmzzeRpCRPcnfVRK7xTbfwdr4WJsEQyU8U8RLjmmcp8VNwD5CQmVMLHhtQVFRgw",
  "key12": "4s3xB838sRNrLC2aR2DUQw8wVphj7qfVznq675kLMmuoNxQWhjpAJzBt3xv6Sn4g7ejN3bhnK8Pv64pDySDhuNZU",
  "key13": "5Yfxk77443f7dRGYYdso1xa8WKfXL1B4kMB7Zgh8RRweLRS8G2necbxVzG2CFuTBQrXREDGVRatsniBuCs5jASfm",
  "key14": "3FjA8uDmsT3UvpLG1LQJaHNus4C68K7yFJYeTFJvhMUcoebPbXLhvVBFBG1YpPRnz7KtyauKwxrDKsw3Z7dgGmzp",
  "key15": "5dg8DLJ3ya8F4qMJwHAoHpWyRfe9iDDwWPznpYQdF5QgzaMLtbmUgjPfM1k5Ve3g9qt85SCFXmukja38Z7uQyz92",
  "key16": "5uxn4NsNL9vDCRNiss2ANMThfMnuXbuQX9Nm8cREbR8z7W1MhejPV7Lp3mBUiyxVH2Tzz1RGDxNSsBm9L4K1c1KS",
  "key17": "2d2Bk4g27ZxG1QzSeMCHBPA4Bvh9fyMREofgtUSuedWM2A23epCMHvTJYSndzdKS7mj4hRu9ZkkcYxQV1T7SRpCF",
  "key18": "4uB6req6S2Kwur4V7gZGs9EZ7zXTD8X5ps6Y6LQieDXurghvDGdm6esEcyzB9d8F7yEpKnbwutSv29DgmDo59EpX",
  "key19": "3zKtfxr4xUbJWn5Tr8pJWqcr72nJM8hrbUHFBy9uMs61euKUbpoSAc26JVeudxJ37D8LXj87xkLM774ayE4quArV",
  "key20": "3HZgXTAW7eAYDG26GcCSaqBG9Wpszw8agvmPPyoqShuaHHmsDrqzcsU5j2ny2CZcCd91jRpqch14KRVtB4uwuHGo",
  "key21": "56dD9n4XoY858iAduD7UXStxynYzeoRriAE66ShebsXyhLTotGKCerWmJkz5yH4TN3cfuu558vSZc5hJszjXkYeP",
  "key22": "43fVF6nHnqy66mV2JWPiSNWpSTkSAbBNJ2SYewRcm4fwZirtskVzQGuSUjZU83PEE4eRyDK1pAbSVTiDAjPREHRD",
  "key23": "2k3VWme5Dg69Uf2otGXpgLA3f6k8zjQmjyq3NAkzuNLididKu2MAqRykPLMZCi882nKjtbS9RKVtuB1K8fQhSEWU",
  "key24": "2d1QT72vyPmRGZDaXH4NpGtw1eoiS58tU7tA8ZTdaCAmUvKX1rESjyA1WvFtM8bhcGD6WFcNNaXbq5nno5c3HUYv",
  "key25": "5chkHSkNytnvvKQF5neAfQyJC4hGAmmS5ZVHM3ui7HWR2RMjuP9tWUBVbULhuX8ntuVN4duZyzGpJmzmwawxLKhr",
  "key26": "55Sxs1aZAPssYSJEuAXWYWXL86vNiw9cGNGLc3LYC3HZyrczFH5YFZideQ4rfXvuM7VRry6AaB8To83N4s3x3Gbe",
  "key27": "2nKfdVr1yYb4WkvLTkTVn5Vdf7VHMNygs9AKNCAKXr62w5WiDJCdMqUUWP2As75WQ6SuF4GDbKWQGpKRwgyKFX5R",
  "key28": "Tfzw5326spMjiobHAG3NjZLa2oDuC1G4mZ68iAZF6xHXKBUDLyaBfRM4NrGkcNECP6E2kRLSdJoKPF4ZG7fr4Nf",
  "key29": "5xf3oN6yhsDqEuSuD2yh5urHQggG4MrfasQ3xopLtnZJ9FgDFmVbWhnoPzkjx9RFxkgYTdkh5MDAcwyrkdYGmQW5",
  "key30": "3w51hyLhemGePdw9qLjGcqdN5eizcXnB6TKSHL26uNC5zP7pY7QCVRJCZhjF3VS6M3qwqDUcW28fyYTp7EcypEP2",
  "key31": "cdjf31qdSPKpYQJVMEUxeidsmRYcvdSWsxNcwDDzeMpsaJtJfqJ7yZmpm58Cwg3q2wFHAYq9KVLHN8oxoyJE92X"
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

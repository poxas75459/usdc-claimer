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
    "5UtJ59U9b7sCqZ63uDf3bxUR5791NCrNo246cvtbR2VQg1JUXMzPfyP2BsGP5ou8A8XSrs6tkSA13nb2D9YWmZQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VWWa2sgaiLAMPipB8mrDtY6jzDa4tD1NfTkaqjpUy7ZW4Yxy1gnn8kk3adG45iwDrFtgTVj6Ggh3EEnkJYKYbjp",
  "key1": "2ApphLHDyq3PK7gs5J3LdSz8VV6HJ8CEfiVSmxdYiyUYivd4jQivpW4aat1jSMzpE76MUnUhUwSApf9B5Gi5knSt",
  "key2": "bKygQV3fbQLgQV3RJJ1EGybYj6i1bX4bcd9RGnRbcKcXQmNJCQBuBmsaT8eWf5mkVxGNGrZwXXqYxcBoSZU2D3f",
  "key3": "5eq2ud4QagvH4bv35x7DYANqfvLZfnGh9cDGfig1KGXWQD43tFKStUMZsB6PZRvjd1UNnbtEPrPDoRAzT6RbPAds",
  "key4": "fuxY4B22MWHASqMq7cQLyNrgJfrFfqBsin6U8xKBtQx5cgPpXMy3p2SGeUiiMCqHW4aXCPS1gD383RwHRfhQ3Eo",
  "key5": "9mp3zkEETayVtHGsW1dYVXsrs1xU3fFXgwTVtHxfXfLSAoZyirGLPNRK8GBQvfCXYuRb41AD4v82DtiQADW34ej",
  "key6": "QWDc8pjC1XrDzmEaWimNrqtvfUEeLjwGPj6GAvSFv9jEVQbU7uh2Fo8Cde3EhZv2XQV5Jv4ciH2qARWz8YDFgWe",
  "key7": "42QGKNTpDZCxoo1Wd1avwqzgu2uWDwGKDwGvm2Uxe9J9mvjQ7NgaSVtyQa5dk7AhKG1YznaDZFKE1RvEGtADqbKY",
  "key8": "2bWLKCCPjqEZvee9vAT12e19oR1tau7xrxoDFoJXw8SxN3xaupJiu8hJ2oMjHBrTTBchgwNk9giReh5QJfUu6qgj",
  "key9": "5uHhkNKQjJSUVU65T1Qp1Rfv9zQkyZZMV6FJNFMaaofBkcFwtsp4QREmUAKxL6Qfaiae9jTryxqr6g4xe4x1NShu",
  "key10": "37speL8hCSU8NH8pokEfrs2JxSrYAZMkAQShNobiuUbCGwCnrRVdGfNTJDKB82og5MYrc28Gk1kabq4bSpc61sSx",
  "key11": "5guCJa3VkEo9CAbQVquqqpPB4SGCLzrgiCmC35NTQawnoDkNWdzhVsBo1omi1APdVjgyRQSnezfp316mys698Y9j",
  "key12": "46JZGboL5pn8G7biX8f4s2RKNrwajUCGfxekp3T5zAT7qTCWCT1qEd6EnjHqxEwWryYm6g19Ft8rQdhjWKic7HXe",
  "key13": "3fvakuDW6ARagapwqWEGQoK6Xq7CZUYHZwgLkWvdYARiuEwCEBy8R1wbeGVt7wKpCUpHyPss2ziMMMbeexrZDvF7",
  "key14": "5gfR5kz1DpxXC4UX1oj1h3No8kE2hQhxdyk2vHCf648P6t7dw72rJk3REa7y18NXJy55WktH2BZxvScHWVmRPn86",
  "key15": "55r9zifu2AwEuXBuacihj3BwUJ5TSA44VSi2aHUX9JJvxwyFNRSTfW78jtQ5cRBuZRpZtd6c7DmimPdafdHRq2hZ",
  "key16": "4xDNhJZoP1PUnChKXW8pjJ8Hmx9hXhL8TKeKmuXWVCxRfNA1wzYSPeRmf6sxvGLN5dFZDSGzZQ6qNwiNHGUofZTq",
  "key17": "3g1tF8hkTbn8Q1D2XENSMuphEsqhH2pku6Rfgfvqin2tpW2rHLUrf328HucdXQb221dTxVbmCchjjJb9hhgYXGKm",
  "key18": "2eqCkNZtcoP81Wf6GtQUY88fsGTnFU2DbFiSqa65fAyPkkVffZvieovixmLNyKXYjPeGNiZaEWemTj6EZNx3o8y8",
  "key19": "5ZUcLMWhq7tZJqgGqEjUSLiEktoFF944MY9hRPKTYkrsPjYDrnMWzM9Gr1KA8JUhhPen2GNJ1WLU5FR155YfWK2c",
  "key20": "28kFkZmfG9fSWx1H8TinFw3bG4bb1ee8RZqkmrPQbUfErbZK8KzoFDu6Fe2CtNAq52SZv8YAQfzakodc4tzezrSP",
  "key21": "677Yb4D4Ywpf2XxmPiqp8wcPA7VnZ78ZPmaY53oVjWfbG1vaphcqhbMDibhqyCTgd6q6DeRmh7wbRhbuyb5ye4AS",
  "key22": "2DELkenQ7mdcJb1mdXY7Bi4hrfH9P4HxrVKt1WjAUkvTdurgjb24SwPvPJThwzV4nA3fGqpzaShyVyHRwyS5NXon",
  "key23": "4PVAUA12uQpY3ZkSsZ9VV4Rgub5twqDd3vZF2C8gKRxBon3iY5UmyQ61QHPfhMpYqA988mtVms5zs9mkXRv8Niz6",
  "key24": "LA8ZHxE5DbbF8Z3JZ2dGZgqhdaMjYbh7qRpRqvFGuZ2dhEkBSfQDbRdrtyL5DvJ14odriBo6dhJGfXDPC5PHPfa",
  "key25": "5JZnjtr6wPf6R7yhXJkmcAmoa7BHkn3uzH1w8So1SQYHL4kdvA1qf7okcvTBmv85yYK2TzEC5DCTwDa9cnG7AcxG",
  "key26": "46RMUiWqudfNtxnejJUKSzcdaov282bXPv3GLRa6zQ5b11afzzVxrDJHSRbxn9iZLq3BrnfzaTq8kr8iB4YoY3DX",
  "key27": "3vz7B98KKLexQ2FDJiDPkoo6mtY2Ffi5yBDH8jer118FA2F1qGcvBtWdmpUuGTs6vaFGum1EL4F9neBhc45n6jGJ",
  "key28": "36y65GCe4pgsAX95uYkt31pjw6nT4STPe6mfjRr218v3g3pDwnXm9F2HPar8BP5oUiUQyftwNQA7TxL5ruiifZ8U",
  "key29": "Upg5VUFeEW4tkE5UrVGhDR1DUudY5ysiGbhDoD8M9fzqLbgZUGLEHNjo716z1AHSLG9dfry2vPKtbWPfad3AwRt",
  "key30": "CzHvebJw67wAFgnM7ByF9JNBJcWAYygXNSodTwZY8RSD5QnTJAFUw8Mk3D1cYmFFUJFH8AEaNugh1tJKdYqC6yM",
  "key31": "3QBYTY2yC95D2UQJmgACU6fRGdnCzwQtfAv4dLYDnfBsPTMF15RrS3MCDyzw3oogj1SWvEr1ECi5boc82ze8p7cN",
  "key32": "4P5Cvz8gWrgqE3RNJMvH6w1PxRXgNPoBBssGE8xSGUDSjFP5RHToqxs22p2mTnPDA8Wnux8mWJHfpe914xDZPuq6",
  "key33": "43Cky3wMqRTR67caCwAjz5aHCKSvuEruubhLKDGapoY3ZEw1JqmH4tkmbxAyxyQphXjbVsBcXP6nMN1vmkDog92i",
  "key34": "38SK9u7BKpcvwyKQSCFeeXtH8b2jnKRpjTYKeK3ZSfATFxtSrGdV4jtcgpZRiaFmN7YcSmKEfaUU5KLyZnR19vRW",
  "key35": "3AoCXwxELtDJFjWBbpwhv45TYWrGPd9tMKSrDKHdWYApTNjhFAjfCbUiUX9uPuvaf65VXBcb1k1C3NfFiDspt7wR",
  "key36": "41USEq9BArAW97e19BVEZCMP2cCZAC98dQ2vuMapsHt33XNJok4fgL2Qtxt1YCGCbgER8BKaCkEnwqc2daBKNgja",
  "key37": "5GQfQa3Pd3wDu6yVTTwXVGZYfHncVxjKi56rhwLNWmRUP26Mya5WoSufXttV6KUrGxYw6ubWUbCprjvT8bWPN5PW",
  "key38": "fFvgWH91BfcMantaCxsQ2RTJrM4iyLFJQjAwqtKsqbmTMM31TAz2f7c2BJCgE2x5kS6oVNZfeZ6dDKemw9bKjjm",
  "key39": "3YKDaUbfhcGdizzvnTcHKQuVDddD6CyiMsQJVy55DJs7SUjM8DkgVKb5jjQA47DdHSAwdGVMZ8rHJbAdssJuwEvd",
  "key40": "2igFPgLUiY6SoPR7pxVcNQdxC52m5q73pv3Ky1BgmBbkyuoj4czcijCiF5TjAXRecFVWBkmzedExAecYgMUjn1vo",
  "key41": "ifMGFP6KgaPKWh9e8T7EgTBD11ABGio2TnfwZ81NqfGMdt8nENwnXfnynBrm1cA65GXZ5B7KFTT1PxdswujkYYV",
  "key42": "4BndwB1RK9uivGkKAgXEhtkBA9CXUdFk6h3TtJkEyyuCesvKxTZSge7eG7vvEoZvSG2FzGpL45hsHKPWujGM2Hci",
  "key43": "2vqKsn9GjJW2UBeCCPNQusV9B9SRCarwKKruVAJi7yfdGjXcbRikuvf7KDbnjHVisM5pmvaRyLgQVRH1R5uRdPQc",
  "key44": "5b4oyiX8uLDnufJPxKn82ZVzybtHda2mjdzJUvpoV83NyxTirGHPLt82YVfgUYh1DR2oxLgQ74kXSvuXKDZd6jon",
  "key45": "5PgsyLe9oEko56SoYkWYS6ZpDnHvhcELoi456i9362koXgAhzgQZeupCdMZHSAgNJ1fa93xk1BuaTDbhsGwSUuci"
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

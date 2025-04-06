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
    "4KhcET3kusQSb6dZgEzXzv1GdQV3xfiM4D6EN2ZHoaXV3qN41vfXmZkeP5kZEcRcdi9mFoW9dY46t8Zp8kBFPsYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "652xdYDunpu4Tsd3xDGHQfxxikbHRQCaxMPe7ASfhKPikCVMzaAhFx5SFk2h5AesV5gWNYdsAYb9JsDpx8vEXCKo",
  "key1": "w8MrHgMtPYk8WbhXRTXpm3vLWkR8Xe4EqRNjsAzmiXhaeRne7N2N4mAjm2mCWeZB9s4r8hbNG9VZnMKQ4fVB2D1",
  "key2": "5y4R76JoV8ijKLauPkY7XtApcW2ApAT7fzaaQQB6Tidh5EaUWVQQ9i24v94Yv2RwjCJFN4PfB3vFD3Dbm7i5nLWV",
  "key3": "3vsRcLBVxnRUAkfiVPiupbDtYVpZWaBGK2v34sBJUBSeMDFNjhTnvd1N8cwZEFNFyFieEGj9ZLzhmzMtTwdYst9B",
  "key4": "4XuiY8kvkcRxKnYWDDCpcJSZJPB58pB8er2c3Vp68LwMXtceVpjqBKFk4XdzNeqEYr9hKxEPc3oFbdpwCqTxUNqU",
  "key5": "Qq9SrnmznKyGNVLLXPCDXtTGb22GFHBEhr2yi6ECR6XmSJuUenmxQQo99LzytW9iGbvzr3KCD7Lg3k1JetNMvoK",
  "key6": "41S4FHcADyE2F5HRo4bpdUBcWUJ2v6ghWTPbe6AH5jTpD4Yweza5RiWk7BLsb71uw8hKnvfGCoqAJumqU2PW2LQn",
  "key7": "17n1dSBbZNEXxFUjxfRZtkG6jWUGpvXHFkboJ7QDLDGh81vc5sTnzKu6v65h5qpLd93jjS7nkiuXtn1AaE9EViG",
  "key8": "5ijSyukHoMX5TLLkGmygz7R2sdsWyDupcc4USh7comptGCcZRk9YdEWpYwpJbGziCzkyxyFv3xR9Lz2JnMvzVphg",
  "key9": "5n41RNxUxd1KaXREU7KrNUVYVutp2uDptctSQijQskZP5UeuyWPhn53RwG92CVW3HuJu5CK1ZCMrKnaM4R4PJHnE",
  "key10": "2bHd6J5FdyQFqVAn9QkWxyhGqFcdLwXrEfmA72RGjAmarjahvb3vXkCV5SgzDfxPwXEWriSnc9jNJQHYCyXKSJVw",
  "key11": "RPmYJLbkuNqPMPS8JFWzsPoPTvxy4kw6VB7X1BTkQoDnt7XVR5RSJKLn84SYyrww2fTYMmLBxFMNtnSHWPsctGL",
  "key12": "2DMBGpjLjbssLgcdALPMS5D6JaxRxyuDiByWnLL1vKPFv4JpesZoPArWQ2MgA5wQcLDt17abKVULdb3C5sk5jaPC",
  "key13": "4prFCUo2t8RxV3BSDN7otThxvzgf5EHgPZdpSd5sJvfyGc6Xfz3LeWsJNBoY6eYJzHBAXh8xfZfbV7v9HicFpEEK",
  "key14": "4Tie5RUcv8JEpXzhoPh6uwQD9Lj5ExfxMtdZr1PvLUaUGukXbA3XySD1mCWxMeQJcE8wKHKaxHxHLJLB6DsJNbfV",
  "key15": "Pt8BL5XvxP7FNrAkCGPPxXCxM4ZnUzEBuhA8fj391foDQXKFNwie7zCeFuEVmCh924v4eiqmsWFCWpRggocjQMy",
  "key16": "QczqQTR8kbL6Av5KbPtfgb2YWfffP6BNkg8UJGqm64h2MqaKdX2du362PZrRUiivnvTYtgbPJT496X2br7cSSVm",
  "key17": "3u6dAxEUUqHNXbPx6CtMcBVGrTBsSkWRAKu2br2D1qnjTtm33LSiCDnG5s9VenkwbzEJVkHAuT6SWUAKZNQC276D",
  "key18": "2e2xZzvj3wpzqKWBXm7b3QX9hdMheHEjdogcD5szbx6yMK4MfSa8Zeygug1u6C73uc2s91BiikKZ6axJJyoo5Chg",
  "key19": "2UDGeNNWdLDM8QauovNoW6aeB32Seia3k9ZztbvDKLirgRaG7GChvwwVt7QqC6tfV3si4dfHJABEp2i7tq22KmxF",
  "key20": "2SMNphVaobqfymmYUiiTUxBUFveXKqWYAhbFqV6Mf4h9DJntk1KqcC4sCPSTctmTkR5u7M41um9sCZYJwBhRwxhn",
  "key21": "4JQs1qFZ1ViU5Agy56a2akxUH4PxjgJJ4GRCwgREuQPSJCYvYdWkjF1RVecLAH7Zxdz9oHtxPHpjEiAAfPNztQwU",
  "key22": "56NgcDSDD6VBscx8LE3cen3kjVWMbz5KeUPYnQ7NdJuq3AF9Cb4EQEiyAK3cgio5X1HaA3oEqJizkcUzjQfBV81o",
  "key23": "2tgNdK7cDWiswBc2PdpuWCyxDrKn5YJE8NMapsmfDhrssKkACKUWbRGRCzFLLdNERxtcVbeTT5UTAM4nCxqhHfaa",
  "key24": "qK9zocwjmuSwokmVPghT2WhCDokWwL4tpECmMbtMkVZBhtjEqeTs4a3ADELb2QAgpwRSYBGpBSorpJWqeRFdsxW",
  "key25": "4WS6Mcev9onZLa6AFPWvzuKfJ8q7PHMNtQRmCooAYEsBFssjMzG8nqVq2CxSfg6GE1wHpfP9z6WBFnUb84621cGv",
  "key26": "5JJcPmJPjsNBkCSc5wVsRfNFzmKrycS6zHsRrCtBbZnBJQjGybSk4J75RxZxzsy2c3V3fNCkRVK3GV4Qj6NihyuG",
  "key27": "3hDdKgyhTGwcXsvT7GneEJkuLxon7PcPjcDshtfEGWrSjahHVKyabMiGfnzjvsCBJJcZ99vtM7BGzLi744Hjysp1",
  "key28": "5EvcnnDBUbbHhsT6hQmn664ihhBzGqBLbhFN362GxhV4SxrUiuwzPUa3MDoRNzuz3DJQhdzjML1ynv4st2xQjnaR",
  "key29": "4jQQ83bbytku39G3sEurUNu1UiL8sWpbAbQg5U4SH9BMaSvnFjGpXeHqzA5HZQ6iaJJiVnkTjGUurx1Ls4QXHWuY",
  "key30": "2nGeQqemuqoKiM7kBvmgdHR4vF9dc2iDcxp2o94xJiG3YcfBJd4DPewr9PDawQ33u3cC7fRQZ3MrQUqtNG8715iu",
  "key31": "6Ht7rx6c6Z9fUVXkJ56vW3daEC94oyRRPc62AVHqAuUJbVggpSDY8My2bPJq53NdwsyM282KShNqMj39uxppqd1"
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

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
    "2DnEHEHmrU3AdN6wTECWKzpLyXGbN4TY2p7NBaCpEKns41MqNi9PTyZ4aF5xJ7fCKFgEJMeefb3YycZ1wSpkmF4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aG9iocxyBzDgRK7WVLZDRCi7nDfKbtv7bBnNfqhYEumox6bFzSHtvXXCAcLCuEYSWPQpUHRuWUruCmGSJi8Qtkh",
  "key1": "8A2c8dmrhevTDzTneAv3GRitwz3VAKkEJeThaZ5Nr9SaKqfuV6SK83n3RmPHrmBGkGne41fJ5DnTWqDTM6RVFTJ",
  "key2": "418QRJbxnKAHxSqsh6gSrggzY38UmqF3TdZrpZjzMiXykdmvzyqyZDhWzouBUyW7sThiRREp1ke69WVzCLkbZJQ",
  "key3": "2By95NCiMQcXWr4JHXnVbjnsUvGR5Djniixxip2MPSdZVWgkKFsUTjpEXMoVex79wCiMUxyDpobLeuDMWE9cbQJV",
  "key4": "2WH28ZCenVXQNcdEz1bMj3N7Kg5MhNHLp6z6RSHfue7sdYYnkB9wCbhmW7nwTp48SsYHz62VZ6kU7685MkwcwfGb",
  "key5": "2hWHvoTxSKw7LMgyh8nQDYp7nCSYn5CBTTYpXVjdejd3dz2h6omU6En6MekwR58xFMtH7biVS15Z4LNrt8Rx6Ui9",
  "key6": "4L9y3mAJoKbkYFMaxzB97bwtGXW3mGWNdSseBaqp2xepzm5MNTiE3o8eT9PFf4Ubtr7UkeefcgHaYShpeCMJMAdv",
  "key7": "4Aba9dFZ6a3jRBVx7HorBwWonwNxDgAPyxQ4MjUpUM6Ve3NRAuAhEHAaf4U4jbMHbPC5Cx5JQAF9EaEBcsuyZPwS",
  "key8": "5vZXuF8sNJFT2sjEhhs4a1LD96L4NZLv7h2Bjz23nkQAze2q6RGFziB7yLTZhKV14qcr8AgeYTrCbRHePMfgwsPg",
  "key9": "3AuszgzdGbELCXB8z4CTNVDLutEezvLY9k8xTooqRaXppVLJvuZEcKAXKbJDCuYRxfDeDHXqEruxDZVV26Je45QD",
  "key10": "349hwpbwpJ2gC1RJhabBoxNzwSA3QZcmG3nBznZBNbgcEbgkhRyyUga4d5zrzthqRB3u6XvBFqnHkEeSLcQpHSHS",
  "key11": "mxUeTMevquEKpd6fQcxqnXyJU4trqnydu73JsyiyBRjtWdXiXV2dg4K9XVdQ2qzK26Q5cJqiRRMwLSVtnphUJyv",
  "key12": "2ARh3KVmATLTfEZPurDAJ6kuC1BtpXJa9NC4xiiminf9TD1om9vUSyLQTidRPo8ufVD1HuuoiojGEC53Wvnp5SWG",
  "key13": "3f88pDXf3qTH7yo1T23fGMWMiVALpMTzGVzAGBRraXtYLocsCnasqzc5AXCaiQw9BKMjzkMbs8qE6JEwau3H7Njw",
  "key14": "dEpV2QF2QEf5KxafL2YDdExeYy4zNRgUu11MRHZhUgi7Rji11JswsjwD7SVneEPDmuXqCuspb43HUF6DVEnCZdt",
  "key15": "ou3RUCrzkeRBqXx66kaPgj4aXGFq7e3pcDZReq4g2UwN4egCr7LfPo6tAT1a9hzrz1Xf18VfYb5zq4fYmLtiukM",
  "key16": "Qk7q7YEZEvapAC26LxzJxV3VfEWEcZrYAAfTK7oBcraDz3y5k3Gtao8jVWeN5kLo8MS1eaqd3c2M6gueSGBXKK3",
  "key17": "5UcKNtH5445BQidoC3unD2mNhSJmPimRG4iPzLHmzyAH1TSDL3HdpxaSnZpAuHmvVpL2rP7ULWYcqJHDWuviomk6",
  "key18": "4SsbqWaZ2rEZ4prXkwCenXnD8BPLHxQtCa1DeNTbbZVGnrLk4FVnEeN3LNkNKZPfXs4RKY9ebpASS8inNzd48SuK",
  "key19": "262FYTLi4GCCJN7SQr8poga2nb79QFNGKz95E3w44i4NrkqLR5k9rUmT7Fy4qh4ceNCLSRe7ZtEAAbenZoPsQqKz",
  "key20": "21oFBfubRmuCr6MFVytfJbJiDDHnyZhSeJ9hzXkkpszAVKpWi1VRir9UgUKC1FHWtfR7f9aX4MzQTCVD8rHNC47L",
  "key21": "5rfWK1dntWYGE5gqgcpmETys3GQYs3bmgj6zqHs7LVfGzGCVuFwqwjk8CXSJ6WvhvaKEWogppKcbnkR5Dhg34Z6Q",
  "key22": "33PFbMaUBYRPRSwcJJFBBnWhkwGCNGCF9zG7M1PBzzjRHsDMMTkgEBUVzUvpyD7sjY1SvTkcWiS5iFbaDkq4hHWA",
  "key23": "1kBRn34uqWQh6u5CvNYQt4RKWY2a98UFA6sYWx6ZCMV9uAJxC3br6UKkkHcAUKTauzecdpgKnsde14a2jAarocU",
  "key24": "4HpyKNWDqhXT8UPcFNtBBPfh59nunU5yaCrg75g3gXSztgt8FXhrMNCmhEV29rYpvaabUvFV2FSVuXeLs4u1uLzx",
  "key25": "ynvYKdbLcfL77HQXBhJaPFK9KXv5S1pYAYUMcLssKy5yi1xMFrb6LR16QGEoRtFnaN8kc9ij1kMd9LAVuE76rs3",
  "key26": "4A2QgaVYaL8fjpiUGPb7fuJrwT9cPxZyDW6NXywnXQsty6uPmpSH1ZWrbAmuwbPFPJpwrapnz5fermWpLrrnCmES",
  "key27": "3KJVv7wK2zCLmJNRRkQBZzK7EjzeSwvKRtPnvU4ehYDk4m3ShqaNJovdt7vGjr8mvsgeyrkuHnCdSZkfe49uN71j",
  "key28": "5pff7GgybgZSgemXRJhEVQeZWHxhpY9HinfMKxDqvBrZrAxNpex6UhB1xVTRGbpBU7m9rhJqNCM9dkgbmaQNxkZ8",
  "key29": "3MR3VNjD1uYYsMtWSD5NfPfqDoBNjTFFnJBd4Shb5BMVs6TaqsmNxRrg5FYRYifpR6eJrJ638Khkb6zmxqKEMfry",
  "key30": "bR5fPfKgDoUG5TQ533qAd57BYkyTFD3nq3fWjwMZp9HR46NCRfyXvjwHMXEcBF14ZwGxEZmzrELvHXPrpBQGY6g"
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

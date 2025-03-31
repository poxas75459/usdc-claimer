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
    "Ab1eMk9J8zEBxTmDWbnTMccnrP7zUReWrmaceSzmwhK6eo3w3sTrSdUdTa3mm2KBAW3xAH4JmLMh3srtptnrZnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28XcrCfDHfwKxg7Kgx7EGgKHDadHQLC8mzwdyRJTyAytyd8RgVUFkoX9YW6D9KbTb9UtPthR3wMNRwiGUBPdVHwS",
  "key1": "2b4Y1hwvAJtMFzSnU35E1Ka6JmTzZ8jjR3ASTC2WoeC8wrwLgL3iJPZybSHxpKsEbpFVwaxmz6JauKxAQiu5LuJa",
  "key2": "2i7dVLdFmkgGsWn8tYzES4Rw75iEiCV3MDkKcex6oMgiGCmjYpCFtnSq7j5WGsX113c8yaMqmLacnFUzBrZxEv1Z",
  "key3": "2jA518y8ycuD1o9e4qq65bGEvJsYLTHmT2YosqUudjNimob3iCnpP8oDrQH5fkJTkP4Dwyf7KmytJPBU1tJPYpW6",
  "key4": "fUXe7BsykqTe9Fa98mZ2TEAKsehB5PZtVUxWXTnyrfpcwEHCN3HsPkGheWYd94TVDLRP2TRTBWj6Lx86yphof2R",
  "key5": "3FejbtiRUYUoNnTQr5boZ3v1Wa484XvLA4V7HeuWQmwo1oBo8bnwe1be8wdDSCU4rxKEKDSKeT2gAJ28589HcWUz",
  "key6": "5dhwZeqPb5o4yUNa471Mi6nQpmZhqKGrMu9bEKWDSRcJ2muQGQrtaERkTjdA75CBK5D4B2Q3v7X2q1WdUajHz5s",
  "key7": "2oymFKpp1dTEuyGNhHgdChuQQQaQUYsVXT6iq8gpbHiMuPNtJmmEzWrqkhwb8KXmEqfcUKBr5hGUFpMVFqgN7JGb",
  "key8": "5zpsSxarkoWLPg7wiPzZxatALm5bHxVJ1wgvbNDrQjs1YHKhVc1BnMJrcbf1xFbY8RswpcjYw8LUdeJzSmdVi9Np",
  "key9": "2e92ySqf1TWstRBBxfnrwgUE3Sda5naTQuARVUHgBkBV2Lsp3RBQ18BHgSjmhoPLbZnG54oTjEqG7uepC7Lf61Ca",
  "key10": "67NZe8oefwcz9Gnvv3YcjaJbPDSV6iLboyctSpZyywWunHbJEBHAwQpD2XU9YLfLNEbPeLvPAtwwzJSBnJxNiN1z",
  "key11": "2hx75ABFmes2P81XvQF4GpA8UJzKSciqm2dHFzTC7LrUGTq8VEPsKCobL3ppb9H7M2q1xf6ofJptufYXe2nmUUqR",
  "key12": "4xXL42fVxKwFrLw5LTkkXeVxLqSAoSSNTbkwNSj3HVLAcpt3cMXnbzULVFeWm2bfEPFGJ5JkR7SEfywtQPL2MTQu",
  "key13": "5jZ8yF6fb1Pb1u6DZekzWedrxtEp3CuEm8o481H42xDAv4JiQCzKBZXggmoU83A15XVqmKu1LwGy9N4HxB7Y4mD7",
  "key14": "5Jt19QyFe5myLRCRGC6UnXehBLzx6Ysbha9o5Us5jiUXtAsG7Je7EuP1s6dn3wBAispc7upmzJRgQCG6kkx5rnTu",
  "key15": "3u1wcifBUadsxJE2RRRjSArSFwr56jkLveadwfurLWTDADy9HtwG66YVRt9yVA7NPQZzt9NLpYDTakndiyewZnhT",
  "key16": "ZkZb33mVXdpmTJw7T36WF6cMM15pwkWPdAxpnyH3bS5yPqLr9nRLSPTMcqBge4oB6pTS1Q7a2csNzgdZuYucUmW",
  "key17": "3hiRkTaYGbw1ETz7KiWbxfeyXSYTgZWxJzr2TGPkmfNx3rKrSWewfjfdbSm4uEZGcQt1qMieAcsTtuubSYQ6x1fX",
  "key18": "KjfsdPWinyTjuwxVDEDwpPUEBPyXBNsDcXTjktb94Rvr9Cw1ko6tdvcp36kUz1QL3zG1qF8hb1XbTcHMCoAU4p6",
  "key19": "58uEzc7nuMpxn2BcvbeKmBfMkyJFqzdspgBDJT4fx3A25xmfsuJZiJNpuSmqygXCYzbJR8H5sDRGWJfod2RnZGgy",
  "key20": "4rPP7mHLKyN32ztY9ctYiT3EGsmowymHHX3EAYBvmHxReTVyUKnzKy2Ygg3DUkxRTXrd7cRnPS3PbzUNjK2F8Wev",
  "key21": "647aon7asmYurrtEZLWHYaTQJm76FZULQF9Sxs19VAySHhDe3Sgdz1zfL1xc8TjkaCr2yC1vWAsYpLiDeANJc4Pe",
  "key22": "eskvsVtk7WjU5wwm2ayGedHdzbRUkv2wxTEmoVzLPpabPMmkmzZUgK5PzGRzGcK8JzGuGVULBczk5nssoMgXMZ9",
  "key23": "3tH7xEuua1xBhJuB1aa28XwQo2rqqx3xozCsAfhitLDBbTEKyGSuAM6dbP5q1Uqnif7zkx1JP7M4bg8ohTZ1e6RB",
  "key24": "21eGvnWWK3phWTsrCWn6juNNaWoXPCazDDRM19nXYW5En9mfgiuZJAJWzPWW2JEEZnys9nrzgFverZ85ATqYdWLU",
  "key25": "3UfQkLSBzDiqB9gwbZKr2pr5aXW3m9sbHSd3YHkrcB86Nk5w9YfdoyAZnhdeZesdivrksQsVaNfjQCyQ1Do774aW",
  "key26": "5voNDoZofEn2D9VqEhsMjMh2g4ECf7QPAyFRi8EKcvYiVHyccNBz4CDjAUt1YEVyBDBczJyWuJyWhFe5aLKKS1Fg",
  "key27": "5WQgscGFz6n3acYapoNXb3BM9sC8Bhtv9k8PEECaReNeTWGZfFKF4MdZqGV9Sgbk8KKypt6ZKY5SzS4nrqEjSYEW",
  "key28": "5MTxvBmRXdVv9Zos2kMWyssgVXBuYxaEQ3eRbDdKWzSvhPVxPGuttpTx3QXzFRhTnRFbvw3fprsvpQfRY5J4JefY"
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

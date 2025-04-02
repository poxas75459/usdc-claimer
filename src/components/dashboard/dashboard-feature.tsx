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
    "5vd8dgqcJSFavvW74RVv9eyx55m9te1iSKafgkM28dmJoYjU1ASc6wVtfQ4YY7dXcYw9cGDBJbRjgsWfyXjT7N5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZuE8TibjmmnQbvJg2fHk4bnK536TPgFoX5HLWm68zCmvkDEuPVfek4ZJ3F8KrYTW2nP5xJgayY4HULxFwv99wK",
  "key1": "3Me4T9CDHAbTYHrNtPGBvF31Cj9ouoNHxiBAL9wxbrz5PsBPinqhmmK68MnuWLuksRTbbW3f7Nj8d2ioza7aXhgZ",
  "key2": "u1ujYiEKnPo3TEprCWAC5xzVvgS3nb6gxRMmd624foua8w98dzq1Jc8Chbgq7ZaF2HT9gCYkQTBavJM9BsCFhZe",
  "key3": "5ooBeH24kdjUhjh9v8vdx6Xq6Kr9zfHqG9uK9vCXMnb78r8ueHYPQ151zqDtZf6UZbn1njPLnXwqdbQ84yFB3KoN",
  "key4": "67enSf6C44zMozzcF4ah9HrHuHFFwKH1KkWH9JTtrMGQu2LH6QxeLPuxCbzfEXm5b9PkubDaENcv64kHfVcNxVGF",
  "key5": "xJsDJVseHB4DoeQK2xzHUCZtqtS3doT7KDsuXcaxtJc3agwuBkwQAgVm2P1AuSjodU6WwuyX69u15y1CV3PvH9S",
  "key6": "3aJ8iKaTi4uEtUjGHMdkYEb4R3DnPxQMyxnipjW4X1x7drwfpZeYcgwFdVtCCHcNHHb1Zo5SGuo7huMeNRgfsEG2",
  "key7": "KMK3L12gNG1Vwi6VyCFn79KdJsKBEbfMd1u9RURgToeNd5k7SyHEdWzDvzZVQQuu8JxDVsgrUNQ6PkE7c6v3ZPb",
  "key8": "2PpJ8C3fJ3iJ63bm4gPoShbpwjmwpZeqnF8fpwh7NsRM2goA23oPfn7vFgMg1vdbdfsRm5RJ8WjCiAQ1veS8tb1X",
  "key9": "2teurJ88DqcmKsqEBersXcnnL78dB9GJBJw6hmGr2nftAgWsnMtHZFLDqBBHHwJDYZRsNCp4bspHywB7fa7Msymw",
  "key10": "3KN1CCxKQoFqFaFSAdwRuB2EMep5QmrLAjnoy3r7J8YqyHspMN65oWuYJ5k84ZNTi7at6kZw6VxpMeWRHEekExps",
  "key11": "3ULfQmk3okDyqXq47PmTFNBE6k6xpZirJGMoXXeq6X2FWuf34TBabmEcrHMPGPZGgti3yfwtFn1aPSPPvy4dWn29",
  "key12": "5F3bVzmgWZpAuDaAtostEsogYcRiiuci5yobeWTJZ5PQ6U8fYd2zWKNaE89LgFjnmyRF3XwsznXXHgFMtF2a1HwX",
  "key13": "4fytdAsQU74wrqeu8CkXgDB7GNv4SMkyLCqVZPSz3N2XXLep5o5jyxpTLbpNdQP6H52J5EQQeewM1S13XdASBTLe",
  "key14": "3fg3FCkjuHDwu8xCGDjYPS9KApYrBoCwJRpA1U58uBrfXYKoJBEdCaT7wjVF94hJnvdQq1P5sbCy9cjAXS1pw5mn",
  "key15": "2CDaCuwaZ2Qk3JYHypSTSA9sTQw5a5GyNKa5kqwHUMVmrFtmQMZu4kjAWLXdVAMyms25XRfpMPXj7q9AQTY37xCS",
  "key16": "5XRmXT9gNHd3XsvSDNR199jpbcDi8tEqoWLF5kcsoVFFxcdKMVGQkPPRGFPem8DPdQdF749Ut7AxxVFNYdDie2NJ",
  "key17": "4NFgWumMvQmKT3jB7Pm9naNkAjaY2aGaw2NjH2BhZr4SEwbGvSaCpfFt9gJRXEGGdvbs7aykSVGR5hNGsjCzLiMV",
  "key18": "4JE9tLcnzRtd8cBttCk8wWEbHTYjEZqrbqS39icC9wqvozDvuk85JuwGCQe2gE9YhhMuWKSpQ8a94LZzNZuLKKfe",
  "key19": "dtySGJEvkU6WgizWU9CpGYeoLj6QqGGaVeG41BbHMDR9giSVJ5eCY6YgA9YBaoqCoTabKradHXKYB93SLdGUzQK",
  "key20": "5Ut4UrrrWtPUER56sd3oZii4dBXVN1JhTE7paJP3ifXrXKsRabHNwTuuJGiqQkSzhFQrJLfeGnsxrVyVuq5HNcCA",
  "key21": "5G2WCYSHfiLwMoDpPTw72rxbm9wn8WvZCzpapUivM3Rw1VbFJk7kDr1huys377mzthx8u4zNMmMwhbsndLKMb6Po",
  "key22": "4GnAkcwuppY8q5DPGCH6qhbx6tBgupv4Xq2DjGuSxGq9jCw1HmupJcjbyH8s1d1CRWDihonv35tQW8tt7ciZnrN",
  "key23": "2xJEb7LRcJBdZ5FsxUsHtgQpY6yUqDaV7dgBqUbwEDxCnFmzkgNjCaYib1WRQvVwqdFGh1ZTJJC3Z31tMmSxPHeT",
  "key24": "5T6Pu91S9rWk2Wdp3F1UFbiv8To3U8DrPxmp1N3xt4wz8MuRougGfv8WBX9ZBV5xFFVUoGbcXjoDFFHFuY6rSBHf",
  "key25": "2kfZpqWudYsWW4QMEgdMiqDCj8Yi26LRDktmjBprwfo2KihxyBGW3aNWTNBZtNXqyCAwj6BrEs9drXoU6V7btSfQ",
  "key26": "3sVptZmp4VuSpUELF1jYhZG2XGTzjH4FzgEMPVSmxNYX6Szv5AzPaFdBXDKExwURLhSUiKq4y4mgyyN7c5u1Q5Jv",
  "key27": "3uxkLGruipXmBxVSdCEAnRaTy3KAGax872v3i7NvFWMa8zbKdqEWnpAVc8ChnoNwRxurx9UmdBp4Fdf7ja3WgSCd",
  "key28": "494PkausjcFu8NBNjKkGKCVMyT43kGhkB4Y5M9dk7JFcLYUA4k6iEtLVPZedzqu4VRRK55dWupwwitUZyr6Jp9Cg",
  "key29": "5AeQRRwS7aMxhUF3Dq2Phj7yFTQSpuTWSf6R4riDmDjhxVsH5iRcBTPhbDSnqCz6iYRkKA3kVFcRkvvn6EKaBFNe",
  "key30": "5uNgBGGwZVWNpZ6DR3tXdtuxwFQZDQH3cttxvWMtPyXP6Xo1tLxTkS9YCTSj6W5GgRkQA97EwFBMxiEPzXcZUWYF",
  "key31": "4NWNExJfDMxgH8xXHjM3zKyH9ZEt6j89R14H7MHYHm2CiVC4a6eZuNKcLzz2dqjQp9Fp9yCi3WSGMvMhdY3PDbxY",
  "key32": "5rM48uMuxWiCeDFEzbAMq2hGMT1kFYFVLJXzA74xxZb5RHWB5YQ7vDPePCGnxg3myQRckcR4puUN8oAGEgnsXhfR",
  "key33": "HRMTqjs3hoA5kQrRC4U9cpvUm44bPcP3HnUYDaZiyzkQAASqvpXJeaPMMxBR4w6apiVLwJCQGg1EV4QheybvQ8M",
  "key34": "3sALrU4QFnyZeWC8sSkJjpmRJvC8grmGqKMchhKfRAgH5JyV887ztPDSpYqTvdnbgG92R37YzTBwqPDmvPR1C2Yb",
  "key35": "3Yt7MrvUBxnVW7HhEXiebL5BFdCAUi4QWwCKbyxGxf5z3kK4fwXHr4V3C9MNzaPdgJ5sABV6eoTorT9HxdrFv1K9",
  "key36": "2pzzQR7PTzgG3L8sx4JPe9Pmi98UKgWAa7wng6RGF2awmgiK31k5VVoznpptMjwzaHA148aVuRMLKameLfN68e2E",
  "key37": "4N9Wmt6gniJJcbKq6Ade3eH6GG5H7rVPzDmmpJoAqwwB8jLQipA842pgFSWdFUqM8aQkD1m6aMp1mp6Pzw59AvkF",
  "key38": "55wja6yZNfqbDJa9r7jZf9PusC2HycGw154nV4PMFeyCzgMjzSdXiDELNChtHM9gs974TehtEuqk5mwxNQqvZXBr",
  "key39": "SVa42VfpWp4229rtyHFpKksCWrfbcBDMKAc8GpJpijMdFZ6YVU4WPwZdS1Zf1bu2ivRXj8RQqR6bbZoTQzvqBzy",
  "key40": "28ZT4BUWdbGjCJN9gcJRFypoGVy7QTrrZM91bGxeeuTyYommEpaZcsEts6LgwXVJdQuMUzH6AdSaHqYJwkmnoDZY",
  "key41": "r1KinGKSvWa323iWYjKts6buB1W9ULR8yF6Xg72BYSMW6i7hRrEs7s8oEJtpmKgJxHzR96NL3oAGjTLyCbdHkRR",
  "key42": "21SoCFT6gKfTyvqxHMkViDsWuMHxqTU11RrYwbn6aoGumj3zik6FX6ZXE3uQbGPyvmFZNGFs134XYLceVD2aKGwF"
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

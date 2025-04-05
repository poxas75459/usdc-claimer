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
    "3dn18VE5LjgB9nVcJjnbMSFCEVzRy8ePzvThFMTLaFrvfBvY7wwXkzX85AupSyStqKAgN9QS4wmpCTZUVk1diRhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23zFMm9auW8Teww4veJUp7tsrXJJhfudujBZ3aHusuz1rZbExCsP5DA9hG465GAU2hHrwf3qTLis3dYQfdqaK3ye",
  "key1": "8zH6mRho3TerdDgtUPzAUvyLh88PbDJFAL2p9vaoME9WtPodJejKpm73ceUYLepwUyjAVXD4f1G6cUkcNKXYLxd",
  "key2": "2YCRSyVq9EXLzQPW3dAxaedZJSwbNuwgWyku9F1GPYkyWDcCn1f2bfWNieM4iS8Ysz3RtLrmLfpxmu9sthGKKPK8",
  "key3": "2XaVAzS9yiEThsTjcKvXAuL9Cc38eqKdFMb57RK234Q3PNeYJGBLigbt7T12XzouBkKWtYwLQWqJ9Fv8jZavRWr9",
  "key4": "46wGP2eCYkHQDuCSJD8jgRvQ4PQ9fRyfYbn55ZATRyv3J3NjaMRYThLV6VrtpHcEk72SMMyhNG3L9DEfTd8WVJ8A",
  "key5": "5L4ym2VQnThem8xfuk3Pku8Pux8ikFPCwJkoUoNAbc1PNawH2ET4tUSkaL5yKoasxEV1jVAfrMy9iXt6RLjbDuMV",
  "key6": "dQ2JTzqMJQsT2CA61jMsSVW1dpEumYZPFQmmdiJS36YtcnUJM9E729Yx6oQomLUA4Et5YK3AttDhWADtt8iC4dS",
  "key7": "5jVVXZmPRs3ZdVYXqZt1fdPXXvfQPThnPz26QU6mYdXNAjsTMBo6CTwJpJseiXRoSrC4fTNVWiZSWuHuacSXP4ob",
  "key8": "KZejU4F5Fx6ZsuAjFaDvdjCPPtrTS5MYb85YZSapdKTVccfcC3GC9wFj42BA8StbBpCyHu2L5djSTB3ZYVhSnPi",
  "key9": "2z4N91FRcRrNL9vNeB18ZybdZJ7Zqj8dnmHoArYREf3QyGwRVM9Hw3eLb9HBAnZRDDZPLBZXViTAS6hHT78px3wX",
  "key10": "5fLiFVUT9T9Xh65wRLW5RyiKG1v8YYuBFN7qpcFB3gCAPtJjo91ceaJprZ91kMi8ViTbgk58Yn455z3BtG58iq3z",
  "key11": "3GJUurqcWVhgdwzN1PR1mp9eTKr7RjxPxz2sppbVPiHhpoXRiZbqFERtW7hRc1JUX4pHS3Woh73megFQsrsggxaN",
  "key12": "BuUW58DsLaDUbBCw7G2ZYvLwwA1yU7GbWvRHvy26ubaAxfmbZiqNPVurjonZ5XFX3pLbHm7Mj8LM6vUwLdAMG2e",
  "key13": "26crp1hsisZUaafQM8BakXzeaKw3hrrgPP1hbMr2HTXRZm9AtAKYF8cVRXUAjU73XqxU74PiVtTBgxLW7jm6Tfwd",
  "key14": "2FyBdm7SnDoYggAkremfLF94Y3yc81k8AhDbuxWzCYFERpFABYLXaQermc7myC1TexQAemkeN7emonUx4Ewij84K",
  "key15": "2rzmmFTm62hKP2s5yvvpt2MfyoGFBqtAuq5Jz7Per4spUKd6r1H3Hr4oEw6De6B1te1JwMLsnYvGqvepiNW8fG4M",
  "key16": "2pmbVuvtmHYmg3k4tPL6ZgT3TPzRmbixoAVjsGtRABxAb9rARkhWzyG1idNTrHhiSRHUNem7FPnega6xDw6ZgwGX",
  "key17": "2vrKX1Ti4ensFoHGo2a6LznLYDfbVeMHYMAieXMsMHyiQjY8MJBapqq7rvZ6Udzbgw5ojmh2Tf43k4U1btrLeLD",
  "key18": "eN45HJYARU7wEHd3J1NKG8YLCiQwxxp7rqPXcvL8zCdtG5Yr8YDFnfH7bfWSjC2SWvLaxi1kaUuHWRQmBwS3fg3",
  "key19": "TV9BUcP7LTnMVJ1UQnFVK6efWxWoGFAHinVUcYshadtzuWwwZdgr1qSMHemVCUBnwCZ48nyhcZsbNq6MTawr1Sz",
  "key20": "4q3BQYw3aRQsBUCsNXZwHuf9kteqJaFNpyUsZWmnd5e8fZnyKopaLVqHqb4GsTnphJLjyXDSb1UhEB2Z1pPyZ3cW",
  "key21": "dvfCjZFYiq2RhVymiWqMXngNJBy5XKYtiBUWQQ7v7PDhBrzuLGU5sGUqyFgA3JuQcG5quQrzvGyTTUGSLcFfGkE",
  "key22": "4LaKrG1p1GFvZv3Ck5YRg68xz5xEhjmadwQSUhCqigUeoM8sfZLaRBHpULREJGbUQrMXMRkuXAC1WoEYa4wAef6H",
  "key23": "3rm7offKHm8vPs95k7vGXa5syhou22ibeXNrU6fkCcQHKi1NNWKVB8paE1DKSotjmwa16YdpBkpxYFx1jZz9Akc4",
  "key24": "3AhH8F8czMi7rDwzeFYKpc5e7NSmVVHubeK4G6TF4Ccvh6j4epVh4TCxX1ji3koBtyo17nCdixKETncVJQjKiJNT",
  "key25": "2PTRi8sKBsNyQCnfM6ohZKjnYx9bX5Y9RpSa4vEtZHHfqPLYGL7SFjjbQfzp6B6d5JG3RZtNQ8ewadDFnFYuuvxz",
  "key26": "3t8trQUiMqxmf4DkxsVxjajxn7Cs2HhYnNbrqX7e1mjPkiGfrqiUPKLknoA3mKQZnRpYZtSfFd8e6rwE7f9QzyHL",
  "key27": "2369HdbEg3Xkrou1H1XDMBqC1pGrbFrivz2UawUfowxXKJpEHiM9fyU8VMspW4TYWP2jY9XmdmQhhq6q3fvDYkXD",
  "key28": "XFRz9VG1n435kgCM87iDCfgWEEBNVk8tu99ZCQDji6TvrcZzjNd7CHpJBmDqvoSQyNunKpxBBxaPZBiWsyhgNV8",
  "key29": "8tM7CxLY1AchkJn64Bo6QkRD4sqZRvPUcGPvQM6mdRz4hM2Tf1kehMwc3BWuXmEPDF7TCwSQd6WaJB6a5eB4ACF",
  "key30": "4Ba7KQwYnnexym1JhFMNNMMhJBXE38zmN49U8dKC8jFXuko15NqnbBtMfjDfssb8EiUthwPGwpk7ezsyrmZxVnXL",
  "key31": "4eVjSHLhghQSAPK4J5KNXnfFhkGzn7MoVqhVYbbpPwXWRpjidKGjmAUcjqCahYMNcNCZpJi7b5KLeD9XuiMySc6x",
  "key32": "47UXea24kcee2vB47MmiMiZuzaLcd9dmKS8V6yfgw2tEosWJDpztTX3kWMARkFkUdx62v75f6hL5s3Gqpvbq2UWY",
  "key33": "dRRKpR7FkLgQNhGqffjLvC1Anb64o8GhVjCoacFnx3MB2g53oQwdTYxQ9BhbTW7chwTtkgPkRZWtUEyYtC8QVbt",
  "key34": "4yn3Trtb7ay3KjkYYGVEa3DsuHD4zTVhFnWP4AXidKAPHk3H84xobgcYGtBFuCncejyg59KY3KvCkSoiSgfcFk4R",
  "key35": "4fR8xoM29GRUp6a1fKciC5K7a1NmNQnnuhjR4BsV4YHrxDXzHYbmT3R41wHYFyT4wePc7VtcKrLuSbNnhYG1pEDE",
  "key36": "41cY6TMW4YCTuj3ibWj8WQZZdpbocnXpfswr49BjaiRoHRSHNY1m5ZEw94mT9vJpb2tLKdt7cg3hhZNCE6RVWyL5",
  "key37": "79EvMri1v5hsC6kBrXF67YPrgWY6gRZgKiGLTUkCSUxvqmY9eVUVF4eWKSmkK6yxpdrhx4aUtnPNYe3vq8jaeih",
  "key38": "64AJt1zAwAFn3d2xrupwfBtEwPW35qcrJgAB48St8oNqT2sx9XSFVEa7UcbXTfHoBAax2K8Gxg5SHYQogRBZJmG",
  "key39": "Dm47DkN3Nar1xcsraGe8AZSBqiPzUg6MiYivrPiUBFWFffBwarPy4W8Un8JAJiAjKSrNZojLjgH83U4Pzx9naA3",
  "key40": "5dqeEk93tzthuvjYx6ccTNaAwWJPrsAd5eiZ6rUvECq8Ncs64eQf7EY82XyCYZxvxVdv5fpKK5cSEa66irvPXZzi",
  "key41": "5AJkZe7spNJGuF5eH6qeP5wVW5f7EDVdJALGXFsskctXEHWrRCsY2aBRu2W4PZSijeMxykx3fKc7hRv5dWokt1Cy",
  "key42": "3JDV6iTBJV8kFZVFRazLA4S6UkfNtqyxBsmg4B2Vm5hMxfw8exjkNtX6zdtrYEuVNBZRUiSewXmY3ShueZm83L5W",
  "key43": "4YgagMq7TPD1Xf8CHd5bzitzm6eVyw4rvXYuhQXv96mZp4hVPMntZBF5K6eusKFzQdZzSk6xBo5EUkkKZjCRU9ho",
  "key44": "62gAX9F4uX5WXzKHMUY3PEypA7trdPwEo8FMpEU74DQWYxMxdEttUkuYJU92fwYqmAeMGQkauYz958K331RPGS5P",
  "key45": "ctS3dGs3gFHcmaMR5HqdRLYebMzUMF9fPg3JSe5ChKThkoSuGf9fy9Xxg1FQjKDfTFWEpDSUVgjZGWpdLiBN6sQ",
  "key46": "3pyVzox6XvfccuYf1uh99J87cB5eCPbvEEsSMuq12ZvYZw8cXxWBKCaSZZQfQJyjYyTamRf1u8xXze6nHUzkNRJ1",
  "key47": "4ALrFwuo4ZmkBeP4qNSKXwvcipbywx1FL7cvNCRzZ22YRdYpPV39n9zYBgqXBTomNfhgwZAGS4HVYGokqErrvmSz"
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

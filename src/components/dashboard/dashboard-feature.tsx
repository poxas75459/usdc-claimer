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
    "2M1Dmky4EWCsMWycEkUqUzXUXVEWai5zJ78QpxcqppMVUbUMCFF26zz2YE6pdqEu3T2rwKnDaZYmqQtckcR1oMaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SoNNWi3fCvZVV3R7q3vmjw8Yfd1neiT4Rj3iMmwANfjnHaWDu7VZ8s5UVLPNpEr19HrLSR4vax5KqXaFnbYMCLW",
  "key1": "2FjVsVKN5cGU1Dh8aAtLpRbebgUhitdJa2Y7mUPFcJpoZTKDVM64aSUPiZTs79Euep6o7PwVowoeTQYPJaR883gv",
  "key2": "2iE8HEiityANPGdnEHw2s4DdYE5rBCAcQn6iYQYCGVW1WJ8YCv3vCLRUPmw1r7RfXWYc1VvA9KjxRcn2dUSaUEyj",
  "key3": "3mYRmuagvMh3hUMuJSxQpGWsABq8f3yhvdg2i8cKr9tCvfjuJ9fsigzfoazf7X41tCTxtKjzmWe6aJBkguJq3BFK",
  "key4": "4R9ujT1TszYNxzXPXyvQHKGefTBrFaPsVcmLnHxnmAkq2sethQDoHjHCZejfN7hjKsVr1HGGYSh77AZnRfrzffma",
  "key5": "3DNB6sotYZ7Gz97DGSAdRgJjKdEfYxx3e1JydiY4jTfdYsaTz61Mg2soBmtACeMRCVaFnkiTKbcr1NjVLWBk41yZ",
  "key6": "3ak8GKSSAX7upWBiHMGBUUb7tLwFbJ2jjgpqj1yYnxG5fmBX8bKYa6vfxahSmF5s6ANPPBzgbnGQq9pPfj7Cy3yi",
  "key7": "3RWDpaGdHuh8CWMRDuDQnCacp1tAHpEcvpYEivRWGP2xBoFb6ZFg5cYGTrcgotGaULgc369z77gzWsuJBip2b1od",
  "key8": "2cBvertpfWLiidmnoqXvbnkpyg9aBaon7RT95nuDhEcLb1LCuVWxBu8UU9A8GQroHbsrrVSFm3hJ3pE4ngTejbT8",
  "key9": "5GwZrVR2a21iQ9daeCkjqU94WBMRyAfT6VQjQj1GFR51xwyNpbk6CEWPPcqgVMUpWMQQp3wQk7Lsd27GfDVGZSyN",
  "key10": "2wGrs8Yp8emTPmJSLvtzLChWKDxCfTi6u5Et6EqsCZS6cqwHwedTnG156S78dp4kCt9ZztCjUFEQdeTh2qLGGQRd",
  "key11": "4uUx9QCz6vo1bcZuDydwc1Rjuisq2gZYUYKcqPLdEpPqraR2kSxgdrndiE2Y8eK3ETShXZHh3QNKt8E9GL9gSDdU",
  "key12": "7QnLpGZJSVJF6iPALrSNVM4jtukyZ57sq35LBmPq2QuzxCEnLbpHFueWrEavceqhCf6vDpTxNQDj9h5oaaWFnTg",
  "key13": "3wYCS43jwDLhUjoywegW4S6Jxo4nh3wpBbpF5UXRCkiqFxu4tyHESe1v1mP2RfmwVA9ZmjZCs1VtF7qQB9h6tvnC",
  "key14": "3h2Mue4kTKLs27QEkwfChthCRgwVikumUZzCd7SapLKV88jnoa6qp7ey73n2cu81PGTstGgKdzGz9hR13hQ1LHNN",
  "key15": "3jUXLZ6JfZriZiWe11YnQCqBQi3qbTBq22wkk12h5dphJwzShrucfjRNP3AJoNF2pG9mnmx2tDN8e4oEp4fFGtK7",
  "key16": "3ouiwJUCwNypznNXHbzb3EFWUj2mZAzn4uQPKmeVKW12bRJG7Ehq2x3z5Rk79YbwvqKTRtUciocJbducuqBp9Gs9",
  "key17": "3Edsy6U6cH5fYjpabNQcHXtvif5hsETiSewiEte2738VhddvCYhqvskJ1u2365kF8NB3PgFd7vU4BmDkmp7dr1nb",
  "key18": "3wEa1cHjEkHCWDus3bb2XzZLc8TemM8dKDn5FPBYkXjgCJPgzJQoCLz5a4KhyejHzK9Qb4b7nKLtFQtukhVEPoVg",
  "key19": "5xx2X5tmghJ51XvS6de1FqWdcAya6LhcmUS3jiewCQ9NhaPdNVHArmf6s15oM479Sta6YwDRrQGpLcWAt2u9JDRD",
  "key20": "4nc1MDaHwoWHdtxDEW6n1FDZhnJjPbyywHsbPEfmPqiDhyZKDQqhaMwkZ6LMKEHXHTb2XHW9kv5xZSNDzLGxFyDX",
  "key21": "64GTxXTvVxZrowttF8qCPoNVwAXyb3WsCiNzGgw4vk98bFaLrBS4Y2vJMDvVWQUjfWuwT2w1oQMrs5vtvczCoAH3",
  "key22": "21XnyehcSSzgwceWUXZReX4NGzvzPE4A6MzdmvUipeaRC7Wy68f5aYEdpAaD9sczcrBnYgdUpPSbsnnAvtSFu1dw",
  "key23": "2EJ1QYiWJBoPqCmDc2WXqUSxJBps1qkBt32x9mkAyEtzySVdDNXCsKGnirDohJPCVRhCkSqgGDAZ7KNViuvYK2fA",
  "key24": "4h1aQ2Vao4B7Mo4WXzByp6xyv8QkNZsHPKaoGF3w2jgfYbRPnZvkxT1KALAeeEhbZJ2b6MiKnxdocYWd7iTrDyW2",
  "key25": "5PyjD9MteQtmuVJXGUF844as99CBKWWavoTr3kQ4coLSFYoKbhrvNF44ueK3uGfEmzoJB49r5FK9jEkaMtRT7LKw",
  "key26": "2fyxJKoDCjGjxW2wB19NQgiYzUherdz1PyRexdryMufxQcN3LvwQpnGAZZyD95RQcGgu1JEidDb5tYGTwSFFwiyy",
  "key27": "5mdwfnwjDJhxSpyjutqKoZGRR6bngW3tioJV5KJGaYzgtea7q4vTrUHesKe5BiQdZLhzupYDAe58DVZqPTDaqxtK",
  "key28": "AF3XRDhn3Uqkm6nnhsGTdNmmKW7F5AcTZv87XR7QoGmopzg3BWp9mtTSQMZSbRoNbzrBgR6B6ptyyPBfF9uu2mR",
  "key29": "3EHfomWVx3J1xRZhEJEVNrfoFRFp1wKG2gikgyWco4pLXDMhbXKLvva9VGW871gdPS4zvpS54zHCPJSLoQMxS3xy",
  "key30": "YcsmJegAj9rvYdxPR4cToNVb2Qxzf8FH6MBbgY9CU4oJzXFmiv7BdFUCbzHmzf2pG4Lxgnz1G5eYonfZK4DF7vY",
  "key31": "5wagFb1gkHcdBKfeZMFDStdf8eVSQJUJZMWM7UviqAuDkK8QDJy1XzrDumiB4seNcLFBHKno344dDzM5U2tYRjxN",
  "key32": "3JZb8zBXKhX1RY9afvMebmUuu9HZXHSmg7J332qCSDRUh4b3Qx8dmYyT8Wr1GJ2AeUeNxqGsdhja74PE5KAV7Ggo",
  "key33": "4os79dPGfaQwCSiAr7bV71eQbKjUaoxv2dc3isGESGeGtoJHCBgkYM9kZSQ57yfKCtMYYPEiLJBzexdzVkmLAakd",
  "key34": "2Saoy612Z1rKD4dGx3HXUwv1MQG7LNFchygA2Jyvr7SHt7NXXFqkzterefNqT2qcYhKAFeT55oZa5bDDwekAtWXs",
  "key35": "4D87dn4xwbBPZga6ARazVD9SMGuwyQLy1vdnTRwLmKUstf4Q7XvSv4WuM8fr3BtMXPje8xzNidfLhPaXG73kyP3c",
  "key36": "E28qh4mMf2hWrxhT9tA1RHukT9mobR4c8yCChKQUE94yDhWiRKc9JfLCEh9ixyNvagrqpTnsirxGXrM8ed7FJoh",
  "key37": "5RX3kARiKjTbvQpixrN3FUQFjaVEeN9Z2iwsHXKWqx858jzLYv1RHKQ2ydFEauNMgWo8NUvNwB3E1m9E44KFDS8W",
  "key38": "4EpD34ut8kN7XyrCzeA1DHBsiuJE5FHPyG2RSnK87p2XgxF2SMXV9nGSSrot46Cda6UpURn6u35u2nHScKHSvBJ4",
  "key39": "EuLR9t7GrYDeHfCCLbGzPvmDDAkUYH8ZCBccGn6XuvamXsm8TrqMfez7Vbhy4QYYFL1xvjidMkdqh5hss4X8jtm",
  "key40": "rUyVr7rX6TqCpCz4T2UW7r8kUWGrjNGDQycrtrQTaZUwjhdWXcn9gXzu1dHg8nWRuBzgMguem5yC7Dhoawb1bQQ",
  "key41": "5YKV1WmG6wDZQYsTUtAGpmGwMf9T854ZgxRkxFj4JCTpevRhoo7m57rUQYTpeniArkoRVqBg2K8XVCN3q8i7caW2",
  "key42": "5xMv1C6RZkZUieTYMCtLnT4e3bwWUUBGjXFRi9i4b3MwnLzGDhmb3w2va7F2zqNra4aqt5ZSQdxPpSZsubjkr179",
  "key43": "5uZHCnHUwQZy5brYYh77sDN3GJJYbjmDG3e7S67noYUNCgHBHYjDwJMukrPvPuK4AunGm48XwT6Nu72oSV6Gmjmj",
  "key44": "5V7YDSSZjthiEUSUABVke44e1BqEhrKzSaf7E4vKj9yYtia7G5gY6ur3mqwg482AH66fYLs3LNLBFbiCX8neiZQr"
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

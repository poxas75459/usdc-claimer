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
    "uVc4ZnAzBKhzzBboFrkjCAM285n8TBpjycvoXbkq57hzwgEfWKzh71fr8vgo2bn2onpCenvHsdkSJPUastjuyqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SwysEVB37iYTbqjEFZdAoPgwkVfeFsxhbj2pTxwKVUTUe8BW3hn5UdfJzgncytnMCTWtofvdZF7VqeR1N6fQc9w",
  "key1": "3QFxgvgxJHRPoSKmWKoLd2SZQH4bVG5Pue3HmofwsSm9BcpgApru2wgsNT515aYuF159SF49mhUzgLaC3fBu2Ka8",
  "key2": "4yMzmDvxbeHD2Ytfc2WNKDAExHUctwqRx1H1pnhyKbrjXGSoe4Zdu6MdL6bV9Siq65cCBf21sVuEZ3Pp9y6qibG4",
  "key3": "26LPFWXiE3yBbc3dQ2wYhcpmbmoGR6mGxbJojpHJsZAvkQXub3DvuF4iNwLbgznKkj3L3q3s566QBq8BvR1TZRic",
  "key4": "5gxj8gkJtiE6z9rEVRp8a9GmUXMMaMNxRKUQyQnARM36tFEXdykoSs796SHaT4MiEHYCM3qvNhperZPgMFhQ4SUs",
  "key5": "5aDPPhTRSCkVfwpLUQsvKmanzg6MxoRjwFj492C5ED8zyNsh54ivGF3ijLT8MNrkMj4YA5eSYHdNYqySaMWqeBjR",
  "key6": "55ctt4zBi1wRpFcY4baHapTEa9aB3KAz5TQz5gQFerAE3TJC5GKU7rqVQUosrGbH5qeYEpnUbGRcz8wY1bBB4P2V",
  "key7": "a9mifsZ6aamJsx7PpXmNkeuZ7De9BDGzB6J6oBV6GkBBo27dyPV9NcDSw7HAde3KHVQj3N2Ey2ZxA5QQTroHmdY",
  "key8": "62v8i7KGGpyeZoVgf7MYKHqs5vo1GGpCNXqFC4A8f5qPewxcP5S26W7sU7UnEXKFzYWptMa5LjgAn1cMX8FPTpFQ",
  "key9": "5qKiMogrnoTNQFpwiDsTgcpGwJQ7mCuR2z4FFozr7psUtG2uzzhxxeghkHqJKndFvdsxtjFV1FQt2wCUqMcfS5cU",
  "key10": "52gAKs4kye8hcx2i6XoemA9LLPNpyCwPgw2NaZhLeb7A6HyM4WMjNxzN94UpKybqH6ZphwozwvvKMgzzeMtTePP",
  "key11": "33CY7bG3x1hrjtYhMDu9Mud885aKAvsL8wKMdufGWeWmnnhDM9bzZHMKbimzuMoTETRtaunkP1AGfFnKEDQshS9z",
  "key12": "4NonbrvA3HfK9YiwZFqr6yCgFa5uSjBckKyqTYmUR8HAYzQgVVvHsFqmXrhgai6RQEGCrssThz68D1hnvnuB4AfY",
  "key13": "3Pdw6cYn1pTNrKkk9kB6TLHCc7eJec6kYtyNAiwYSZ4R5HdP1Vdn6mkJNVMkDKKFc1Y8ywkYjZGpnyeNDHhTzGBW",
  "key14": "5ruDkSnj1oh6Nsx4f82wsmp5RurndFbXExkn4FnA8EkiNNZXm6YFcG8mM45GAZxv6e1eWnsyN5fBezFbsFP7vmp9",
  "key15": "63Q8DXWKrMBHW6ya9LHFXixUXkWXFfBd2wA7rLNVaFRD3d1LckzJRZgaTBMn5Qjizcv2Y55uLvy8ZeW3uw27rXQy",
  "key16": "2qowqHhpjfrR6N23Ktkqb3Nmm6Re3QjM4DXRWVQmoLJ8Gd1mL3r7RiLfEcCvBcJ13vjWSQ8Qk2gagGkBff9vLLs6",
  "key17": "329AYk5kszcgmbfbaHNkUtXFdPCkphuN76ATxHKbRvCQSZBKVksiw6WgoPuoZFeM48K5Qkk5dHjhLhqEPrebmj2g",
  "key18": "2HMqvfRty1RYLgb8k465fUFfVH4qqgkZQE8myqP8RuNFDsZopfRg9W1CVqrWTgoVspxtHaUsRp7ZrUjoQxb4XPQ2",
  "key19": "3E7HW1naNr9q2tFu97YEgEyBqT9vDoSYGoSgSNFnDCBLcSUgi7t444mZiwHUg9jtHYtg8RwzoQRjRPWGgXFWceSS",
  "key20": "3VqwPDm6jf1ziVG3RBsDxadhyByuWf9npgtE3VXJpqernAhjxCUuaWed3XEaLqLZJMJC2gmNYVzYBWjuJQdmYdNP",
  "key21": "5pQkTHzpfzFXbR21ktTNVCfAZ6WseQpdpXedLvzRmPChyZCLZyBx7LzieyuVhvxgWMv3CqnMA2ofPC4E44o2ot2s",
  "key22": "5usuBPCHy3pDeAG4JRy3FdzuMT4f9MRsRz5LmtmC4Cuagzs5z9AwMpbrFq35wvMghnyeD5Xa6h41JkJppycTRPon",
  "key23": "hKUn3icyrdrZXEr1SJh27ZxJkTt58BY1Xq2jAzxPJpL5aKVdsTWwgExuQVW1KdtKtTcUwZPNqYCFspRY2NLCASS",
  "key24": "536Nx5PVMyKcVHDtxLk5pNPHFDXSw4JhWbGPxDjMdFoiEwMtbca46EomMFXsdhNqHQMexxtojxHU4jX59oMbdkyU",
  "key25": "4AbJypZmVxRccE8DEjvKskoonF8MJ4vKK7emNshvhqEgwurva5nT3PmFiFBZ49VZpvX6AZgVM3P9HTi596uWvBzZ",
  "key26": "5d7TYScubhDGT8eii2bqEhg3ec2NUfbBFb95NHxhgLuvwT4a2ZYgJHJbzWyvKdfd8YAALdfaqZY6dxigcXh8Ruco",
  "key27": "466brusAHcFFJ2VDpMNGnr79xdh8f4iZ3QvvTZnPryipQP87auNyb5HRyAnc87CnHFdbkmUse4LacN5W4HKZqmTb",
  "key28": "2ucW6PoYtDx3Mdgi6XA6JYAcwPH1GjAutCGuwNtDKm3NcP6uQztsPwTDpnCj337QUoELy8vCs66yS8AtcSxuSXBD",
  "key29": "4qFSXpPeWeUiVM2cDnjCEwnUbXNAQ2jsS9vaymNeNHHWfzkxwpXSqHBzsga9VJpZN1REnWtZtHmeFnSUmWWPYYci",
  "key30": "5JoVYMhfFfK4kXLWLmHxLpqaeTSNjB1MGKsD7QACkjccDDM9bvMBVAYwxVj3P1nYtJQQPSVSXZRnmszCsxSGd4Bv",
  "key31": "3kRtW75hye9gZw1hh6KhHJb7tUyETzu3nAdC5PhvHM7rZMUffshBaGpig6ngFYUTm6ePZhC6NAkx9LnmTa3eRZwi",
  "key32": "5FURuXNUeR4xefZy6JkoaDePNqYDvwQDzUyYaez6ez7KooHrYFcCXnrCZV2SCG9G5kAPTFiGnKmaPZk81t9ZKdao",
  "key33": "3sP9pq9WmFLkKy5WeUVtxnu46p11rpHajDTA1wsfKrNMjwsYmbv2ETK4ZN3uS7RjfjNDKCnWvU3Pt6iYCGp6d1Pe",
  "key34": "28BqTGp3oRykFEipr3dqTVNwwUEYybberkXudh1gTAPqKMC8JEqDcd7aiPT17VzH8DJZP4Wso4A7CkhFkuNTq6vU",
  "key35": "5MVAnxSfu93pC9u3kM3ZtCU2VDd1aKuUzTiQamBGcNVS9AykcB9dK3VNeeJz1DQEWPWbaadeCD4mTcEkY7iRMCpo",
  "key36": "EEGP9iTE3dE7cZzDmduaMCP6nohJDwbFAVVJwop9n4sansrdSGBtAdMujwMmHioNvbDxHbbAVijwwGYg516yy5L",
  "key37": "237c9c8ATQrD6KaDvoWkbp3Kch3hxjghTWuJ6KaFZhm38QJ2XcWzTqicigbYZYMxscUhf1NMNowYuqNxtXcJ6fiL"
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

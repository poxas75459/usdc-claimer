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
    "75TxLqkueXaEf2ZgG4mwzWbyP8Ss6jo3PqVeNLWfCCLVfnEiefQbdrpLDsYqUziJtJjUM8Qiw4tw8yqLxuUU64K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcP98fRJLCWYRgRkruATW7fLCeW34Kw1g6hDnwiUX3xxGEy377tyTCEzV3E3nLxUNVkk3AyeetGMKih6CbxiD2h",
  "key1": "126p9ZsE5GSiCNvBJ7JaxZx6TTv3e5iUASqyHZ9965UZUA7Lz5ArULKewxRw8ydMvNEMXKB9kS6iJZkrqcVRKEYe",
  "key2": "M4ANqNvj927kn1yj6vPf3MCD1Wiv2JYEEZw7cmNxK6o64L9JwUmCyohtyq2Yxcd4FobjNqFgqPxELaDVj5yH3Qc",
  "key3": "wo8tu3z1sWbktSCUzA3LiP9cFdewnaoadfDmhRctEuo6W8yFFVoFung4Pe1mTa43YohRwW1coEsSRm3kSHzXwde",
  "key4": "2Eb7ZFxqrEut6F3KeWDhZNGxCAyzJ9rWZDsMU4qwavnXvfkiDS8dQvBge3HseffCbHU8CKthqTYCpHELhZinBrTx",
  "key5": "2KwFkw1fLp1B1RGKfdfHGbik55Gqy7B4WnzfLDxkWbaED29e7QGUkKfdHLtG6YXW8nqs6uak8AsnDZ9UuSF1vbf7",
  "key6": "86qJ2Pcag41g9o423sNaHGje6bFEY3vbWHWXumFmRikX7qkx74e9mZSHzMySsYWCgDDrYcBDT781UgyTGnxpikw",
  "key7": "5PB3SmLtru3xkaUdqAXf2mmNBVQuGxgQqy7m6bhVVr8QSdb8LQ1jz1D2Q3fpn7hqRwXGrh5AjGprFSbv5BdUpRKV",
  "key8": "4JYMkwKoupW2xErhhv731B2p7tym5o9NgmydKMkazZs4G5RGBZvmDcARC8ZWUE1nPXzGRzPHrLD2yfTpktdMjKHs",
  "key9": "4H2nKB2xNGKKhExxLcS3zrUARW7rVGyU5pjqjm4dV1JTYUqh9aEvpucXknXBSbJP9aPAGmMyFoH2gAFoaAPsgGbR",
  "key10": "3Hi8vDBxH35FjeGuRSBmTVD7sSppiGPjWaCfz9pzDN1uefKZM3fVSNyzKxzQiMWUtCuDGaaeMYBXYHguHGkHRPgo",
  "key11": "nJ8hYbbFNjC6r16HQBkUo4HZ8Nh3rVfVjT8EpQMXVQehaHmF1mo9bCUANnjKTfkckEDSszYeUZyT5K4TAvSDdK5",
  "key12": "2SvwXmnh4zrbwmLx6cDUy4SLWbyNiz4WfLuYqpK4oGxRF5ECowyZ1bxSMrXSFgNuLnCoDXP9DHW2m2ymp76y8B36",
  "key13": "5EHghJU9GoS2Fk82ZhJEX851wx6ioDE6AGLerbELFgeAUnNtzDWG3t2XMfxUL8tp2Njfd8vhLMg997qgdf7sCnSB",
  "key14": "4XgeThnGjuxf5Kc5pwbWY5RsP6BT6Khhu5CeCYgYVSjSJBj78AqLkvUAKfB1pXSHxreBpz9GhuaZF2M2s5xQ2yWH",
  "key15": "q2y6cWMbVG7EizoBAphC123Lj9s774cqehDSzcuZ6ZCJcTp9UGB7AqpD795KBHjzetDhC6RU4n8UFKmoHCzDPiu",
  "key16": "3Vo8CyBHoH5xd24iYXNi4qWZycPfvFTG9HfFohvsvwDDUAoXEj5y86LbWfUVtcqBPyUvjTNpR5dZpfveoSmsgAf3",
  "key17": "UbmYSRzbSKNbaRdeGYfKdQysih4uMbCpgXqb3NQA6WX7jjdHNrcaewv1MTSzCr83pBUoUfEpnfqfYx2uGKQfhXn",
  "key18": "4kpGGxFD42fehp9gEJGkWNTmM59Q993MBK2GtwV1pGYJFBbx1e731cWtRzLUtzPmNmgWvRXDzd7L2TQAtdxi5MzB",
  "key19": "QrdDq8gZRA2cM2xdVwF4Cu1cRNaNAGnQw7Tm8gqPTYWh1bfpcSD2HhKo5bfqgaD3ENXcQN1YXr5zHQ5FnqCvheg",
  "key20": "246x3RHM3NQ8m9KQ8oZrgNU24kNvsSxBiDvDs5P1nUePnbVqPAXPcPXvRLR397VnSNazA4k9w3vKP8xA3R5gidyY",
  "key21": "4WsWAFrBBTXLGHWT7SuEk2yBWaEjfLfoeEuQUda6bgYNpAddKjU6H3re7EpyR5HQLhNqYuWekyDbaBXgASjfrJsZ",
  "key22": "3ntYdggGLjsA2viyK7agt6sbiCoKVucYarcfKWMBR3bpGXZRuDiyXCe84mv1e2h2RAorUWvSkDtib5FvXBqhs1N7",
  "key23": "i9F3yMGP5c1eWCJYzwUjP55f52d6oWsu6RDGtQccmN4DKh39yoBmAVv38mFq6bbBw41HCLAnBUu1pVYkErsXsEb",
  "key24": "5M1hULtqtpJH3f7nVGhYH5YbGSkHHd9aHpA3qwYqLZVUDwBR6y5Cp24Z1UJmupNYS6hXPAAkThobB8c73RGW9x1j",
  "key25": "5rY3JtYbbNdeb5a9SwjsYM1Qjd8rt43KSjURu4ksxFcRnC35CV9ehxCo7q82Rmg26C9asuRSuUAXiRScG86RNctt",
  "key26": "94AKvoMRgNwFuFsyci18fD6YqEaVqZ6wvdML4NpquDmnXEGfTJ8pq85ioN5NKMzA2dgNtkNQqedNiAd3hBXq6kQ",
  "key27": "WPT5JuyFzXcewpuEZSHNw7swrzDmsVhBh4US66BqCiLWbXz8JuY4vE3uAjmTd63gJzrCeKBXXivbDZusrytMPTT",
  "key28": "4575342THpbiLyL84fERBaCLtxpSmwWBvjJehpx2i9a8npWrykAaemsjw28ZicZzVcLr7jM6Pn1M7GzH8AfGEJK8",
  "key29": "2jXGwCqfhL23oFFz6PqUxh76cRU75TyaQDHrJcUPH4U2KQGP2LLeDh4X3ybBPsy44eVtm4XKpFAQric7TPQTBUFN",
  "key30": "4SC56QMXaSaoWkaTPn9LRy1Zu38EpV6qJpa9M216J55UTm9p94vj1Xup6h7QyHpY8yBQC3ToDBhdN6NtqAyBvFKB",
  "key31": "2k1HhDD67ZJXsM47j6FQjhmFABoAvk3X2QdccTdSExjeVwBcKijEuRtHmS1oFqBpu4SkMADMmxGCe1s6gywXrHCM",
  "key32": "4RiyF9Ru3Ytf7fMqZHKXVP49PTJr1osPxno657AE1HrXAsvNZ2BLFHmrBrQZSQU1nsQhxqTfJEaQYeDdNbLNMCqJ",
  "key33": "3HUDnpVY2c9sGUhNTyvtNKLaKLE7oRmsWXybyQsLeNSm15hBM9img8e876rSouuZCuXui9bZk6Ft61nniBiiur2L",
  "key34": "4D4jrWcuSvvC1FN2oe5YTfsdyHm5dKoBHX6MCRTLzHu1uYixgnUocev7dCC9Qcxb9GfdvzRWPqzvpZbqpd3ioLtr",
  "key35": "ZYRA4EAagYZC84hjYQaCBGemfxv1EDHSVxaqiKB6DSVBvhXg8G45wueStMgg5a9ycEMah1h51iy4HWqVfmE94NF",
  "key36": "2gZ41ZWxFPBEojbmTxwxzwz9WgCc1a8S68scEtpCKQn7bUHmqP5MdDQNTR2yWg2azbhpZjpi2gLn1pWVeuzqjP4Z"
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

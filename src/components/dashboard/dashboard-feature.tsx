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
    "Qq73LfQqrgJUwGnQXFNGVnnxoAZKseeMqZjHd1ekxK2nzrPMCdU1KcRVUjtBtGfcRotuH8Quzaf9NfjyKCWWj6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxmNTeT7zg4cPfcWGaqXkVSGhz1s6P9K8ma2kGYXmKCMTT1h36nxoGYEzzZAdfxUwBfwxvc1pFFcC1xg5npLPZn",
  "key1": "wrHPJg5an4kvhUGWssY2QjsCQpVU8QdJ3WcpzU6hAKFjUEYSR6TsRCSt7v1H1T23v3HbN7vTtUhgcn6vqf6gsPZ",
  "key2": "Q3nPnm3q7osFexMPpQw3XNnMFtBuY3NsPij2Q9ADbjaHUmpqCdkTofwbzVHo1heAcZDEuCPbzqUtGvnSSfT73aR",
  "key3": "5yfvfoAHVmjEJjJJs8QoZwztWQfEbcZtayY35Asf4kATVbJZUgyAojrChWCEMQtPMpgxDV5ZNBj5iKWZEaqYrVao",
  "key4": "4ABAaaFZTW8eRppCMtP4HepuuYwnWcFMTkiXr62FRmVcR8TuhkirQUs1J3k6fpnPysdfb6sdrrdggppaKVcfTd7w",
  "key5": "dvj2QUqu61EdHL4hLarRYrDpV4w9LUUqmqZeCoKYm8syGeKPJxMZBbkoJGe6ciMNUVEiZDCJekxK1XFBZen4PhM",
  "key6": "2pXfnEabLrawtLdYijJHS39d9dJNQumrNKmCFiLJoWsFH8GU2NyjgQGBE7oV6rVyYTsZXWngzDY9jiyRn5NS7pyN",
  "key7": "Vfuu39p7Jrt5ZPajgLRKKkmVpB9p99jaBk5Qo7iephh3BwsBMhmtQNUAH6ijeE7oKWya5e8Lw864WCbWxD8QhKT",
  "key8": "3YzQ9NqAnf6KpF9iV5tcjP91d469KpLNp7SKkMnrKyMuuKJiN3txQkKMVK4SvWSK4kdwFNNqVF9cZubbVhNEmD97",
  "key9": "2wgCUcSTLmoufbDpYtoJ3nqwnZRcBsc5EqFdhEH3N4Lcj5k7DzybDxAfqJzAZnFrZudGVHeAWqkXoXbcaZrtSpqC",
  "key10": "1xvVHJPGsa2CqjomrBtKMuo5nCEtroCXv6bH5dJAaWGiWWKuaYRs66Pm17m2JcvT6Pjv13pwrL5F3qY8csuC1je",
  "key11": "5QhU3KgniafsJT2W1qaLcGoZ9eLVtZMW3s9iSRfqJ18kupvigsBzny8e2bbp5xBeLi2xqKWYmL4ANJKmiU9y7GzU",
  "key12": "3jpcZ5pbssu93KMS6Qr6dXZy4ei792WXdS9JS7gTTrWWwCybAGuq3cy7Lqa1q5ibDiC6zLTQ2SkZcLkuFvijNCJr",
  "key13": "3GKM8NbPCAVRsDiAkzYX5CQS5dQtr1UADy8miytQMuyMrh9GgXWtdP8B4JW2pAVJxbg7trA23WLQCeDVvz6gu9Bo",
  "key14": "4mn3qFxjNHPsowZhZ1ZvVxtDfPXwUV1DDAPAB8xFuVnm6kK8dmSVN5RpQgJcFn2dknNVLbR6qDFHVPZQLvC8MwKz",
  "key15": "2KMiiL7pAHdK1FLAa8Y7rjBugxumwMhCVzvnc9xvatL4iXTyp7ztTVBGTKkzRVSsW4rbDmgf7uDWEgRp2xU1jYaL",
  "key16": "2nHZNvk2F2fiu7P1uJuFLJ8TCBqVPJoBFpQxNufTCCPkQ3w8XyuS8D3YUyK3pzAJrA1bQT74jHpDMRasipW85539",
  "key17": "4NCNYhUkVuoqtuGne4oQe6ZMZBXcs49JrpU6gZb1gsuqabdYzXVDnPfgsyath5eXD8jZF7fjbeBSKrH8hV1xrhFE",
  "key18": "3HzYGpNLwpyNUwfjVYK2yKCNUQPpBneXFf37VF8ypoaAzReWyUCKB9U6HBL1P3QqrCjHacGscsNYutfkVTTyWcn8",
  "key19": "4cWzxDhwMNaD7DHsBbfSnc2Nx9zVD6Wcit3w3eFGncnqmDbvq3H5HxnqoxUpVq68a74RtqRoVi7ZKC2rMbxS6aCi",
  "key20": "2omCFw8hHCgjCTAM9pRvsEa3mXF3PKYGNf3UvhZP3i2w9YL3FwNHz9mKYt3DPpX3gKXGpmVzxm7aPndc8XAB1mN1",
  "key21": "qtopygPTtUQEVaEqq1A8Bf3p1umu2PSwMvKE2hCogSXVBuBCh4fQ3Y6ywc4qxvvKYe3EZECYED8PPvkVuSkXPko",
  "key22": "QTbe1A61vPBiMR12WLPGdG69hyFyQQgSehnv9HjbgBEiziXaVqSUogT4jntiLwZxJ86Lf8Wz5vi6NuAaDZBcrut",
  "key23": "2vG6sgQzDzsgT9MJxw3BDGPva15CH3G52cYQWqGnFyTnPMYotvnwRfBkhXW6fG59amJ9Xn7SDg7ruZLy5YCiJmUD",
  "key24": "nXjtqi57ZRMD4J1L3NXJJeMib5k33x4djPPXF3ZVbGPevgS3LdnPdyFi8X6TcCX2u6iMXUHpABEi9633YKnbDXV",
  "key25": "p5ACowYfcgpoXL5AXDBQpKPCM4YjPnm6PacHjoXfc5ojabW1xwPcvVfqtdxeLc4oDp8fF4x8RQqdS64Nx3KfDNG",
  "key26": "22o9whPU2ZrwH11vvXZd2gGUDUPH2syABFBUg8TLxnC11a4fhcAgzZSTyLKnqAw2TDUDwVvvE24ruXps2nrSwAV4",
  "key27": "4pFi6KtgpwPWWXDG4FgMRRX42mp7XiqxZswHwtahThcWiwnqYMkXqvUisjiaE2EWCiNiXjAbER4mV4i2j6tVdgmo",
  "key28": "5yS1CUqaVbT8PEPzabHs5VW3nruhgJua4Ee3LH4KymQGjMendQiMM8ZA6sPZxPvKBFuawzS8XVh45aXzi5kb9fy1",
  "key29": "4RwUs7cHhBtXyUUsQcnkJPgGm6nP7JarikZo7bcFYJMZvHd4MUhutVd5iZGjbX1fzhdAQ8vyrJcJNn2vVww25AFE"
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

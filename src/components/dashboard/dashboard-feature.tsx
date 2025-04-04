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
    "5vvV2mmDW3Dcxxp7A52WrQDe8wZ5bBAyzFj3foQZJxt6tCZ1KCxWJZmEW1xyh2onqtMihB9JTm7Q74bzCLzAKhnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "io7y1SJbymaDoX8z8i5HphJxjYaJL98qiigLecjH8hwbJ8ggp2NEwDzGFhdWyJdc5V41TeTA26Rco6FndQ7gN6A",
  "key1": "4Jco88mas19bsAm6mRC7afia2eEBjVzwhDmFdUS1JLH9Z9WSXg7Hfj6DFK9qRLVrRukjghuqGy4cwAgmP35d2aQs",
  "key2": "4VyGNB9JhtTBPZxaAJBnRUPVnj4z9FZkRJ4jG3rvrtQrNPRRLSm9nYv6TYtNWUNj5taJPF6yPZHXFZRFMJft8vWu",
  "key3": "2zsSMSphN4vB4itpJGeTEZdjZn5qMMZc3oUh47UnDANttt2YWsnKRDmva4H3w7MN1YVUecbX7HjdMcZDHpDVQGvS",
  "key4": "3eDLugVdF5rMdmwKipE2ZyP1B5Cx9raz9pJgf2Pbx5jMiNoDW4SCg9ZUV1gSvwuMEhZDXtqJ6ztWSHqQT5hdbcoU",
  "key5": "55z45PmXMgsNVsYPVpsqLaZfJL4ucZAfWLEt4ZcjFsAUJG8MUkidwWtMx4nVr6aZqHXG3vwjgz8bgSNnepv5z2n5",
  "key6": "61eYZmVBPspSRL4Em7WYof8sAV6wMQEMzNTGeDHvdWss2pSYk8GQpLrsjZqU8amk8GqW6j9Y41jP2SV6V9DLdsny",
  "key7": "3pkAYRgB3CchzRNZkzn3aigzrmD78HjB3TFwrFk1F72fcH8sNi6iY2E8ir7Vs8Fi12GUV3nGBJWuNBFUBboiugK5",
  "key8": "2AM5MKUqpDs6GxiZhkHQBRhktLZhPUnZh7xKsEx7HNDgdwMANf8inQ3vi4sj911Bq8epQUJvvsCKpQh2zuy9UAFT",
  "key9": "T8jJPa6URSSxJ1aR55Pr18d1WH5X2PeRdLjcwEVZYNEjzTtpA5L8MQ1g1Yim371N4kA3FUF2FwhhwDEqoeEXheV",
  "key10": "5D6Q272SMxGczHyFBL47CwAfsxsfHq1GUJKrNiPxGBtSBW2Yn7FHoxmm9w5rh1P7RzfzVnkUZKyfsxoVG5QoPxvD",
  "key11": "5Fd5m9PXccxmkpiWWjo9y7vdLREyva1A8nBbBbRvwbvN8nLuMvrxSAWSNFUFCewVdr71pVZsMSYX7L6d6GWtn5F9",
  "key12": "MUw65LUF5qZEbxnBqgjNmFbGxhzNia4U4Pg8reABb3K2vB6rHmN4dtHurVib3X1yPJMk9xFURPSzRFSr2G1maGU",
  "key13": "2yEf9gbq5PkSXeVGj38zWbCYGMDUKMvhFet8gJf95qsJrKD3zC2zAmM51Kxyb4Zv3bhBaeBk8A3Nd3hoVTep2btv",
  "key14": "48TdgwvrW91Qth5zSNPASnkpq12GfssyNhski7vEVyE41vyL553kU1TVfS4sn9GvkpnKgQWqNNgKjNRoxaLxfmjV",
  "key15": "5FKyiAxdUpK5squdFJy2tjgBeJp4vdB2QoYN1z5mMspiV2ZFUvTBS6opdj8WqkABepiwpz2kynYDhDkCyTKbpBxn",
  "key16": "EsswGdVnpbJWfR7Qp859LtUjoXpRGPGVX47sAbpR8URKEa8FgHE4nFCErWbTpafXiT9p2jfp8gz61zPuEu9ERoe",
  "key17": "5LhhDx737Q1oPH3BwBMiHuo4CBrxapXZ1SSEyrawJJZa1UDtz14462e887uPbgkb7qepCJmLSW6xfnWiGub7NdCw",
  "key18": "4j1B9h7c2Tndyc5EHBQVovYD83aqmE84SybNk3jnzxtPBhv2vAKeksT5jJady1fqVg7FNqJmzt58kAKEy12bfqNx",
  "key19": "2zWFzkB9QhHUVfE6FyMFXFh3kXcDpPahrBRgFcdsBEEYLye1tvw69gRr2DQK4yECZiXBdbGv5puree7yRTML4kiP",
  "key20": "3mfpXW82iPdLa2XTgUt8NBDgLbfHzcUt1MaMV5zdrtDuXTDKz3ANnftYsPTKhUGcFq69Hj6du76846ZWrQRQZPe2",
  "key21": "4v4vwFoD1RbTVAvgZRKB4HSh7tJeZoXdny7VeJQrmuSrcEoeSJ9QJZnHzQeLNPWQ3GzCZLrM7oQuzDyWZGz2sMXY",
  "key22": "BVpDrB39tqSWi5fQz84nWMN8wSrvX4wFs1Gob3tVfHbYMR1tScMuNj47uRWJ3SSp54m3q3rQi9gdDDiCB2qSzME",
  "key23": "JoHoJV6VrBNYApdDswpPxfbfak5TGbt4hWpKMUSyip83xF9LYKaFPzzN4NBBdJMiL6grV9TT5VkW7UEffnn2wfJ",
  "key24": "4fgaMMFn74hYwGTd2NyJW8P4ZW8oG65cBuLjDrzp2o3tmafJQmCVPJcoNw1NhngnP7nCAD7Tjkrp3oXc5oTVjGwk",
  "key25": "5sxjLFQe3gVVLK48qGuzkUMR2WtY5SQ7XMEXd22QPYkbuerAsocjiAv2kgSKTAQYbhgwuYXfsfpf7kZGF25VjRuC",
  "key26": "wYxgPucYjEBsa9xPeqTu2TLgA1BJV5DfH1Vw2cANnHubjb6MvDKMdWHjxjyrvvqiHopetbxboyR2nG3Pv8UTqwU",
  "key27": "5TRtWR1So5prs7cgCyVSmjMvGACDsjDcmbeoL78zZEVaPLkJnuXSHdabnAoWZ97v6h2ySYR86PLDqxifJ4jaWuRN",
  "key28": "2nQJbid8W51yBnAE4KMD8TaKJtyE2nYEVfKdQTHniFxVxZK8nS8fSX21tVdkLTv98RTRn8eXcMkGCTnSHAd17XNJ",
  "key29": "51LDzZCQznR3Q1F5YgeSGp7aVPY3xVapKVmjGZQq7b4ysNXcgHxdwvqHmZWsHHJXHinPxSXLdgKvXL5UH4czYPLF",
  "key30": "5n2fKGtaXtWg1Br4Svix7exSMicPuWSeaTxPw5pvAzPyEus9e4vJrY4tmrC9oSGeqJ6wDkKWr2TD9SFFpoArALSf",
  "key31": "363JAS7LeZowqJSZxCB8n1zgau3ckGsm4XVWNtCRJiyZoRoPBkegd1b1iRNKZ5tXHVmqt6in1NU1fdSG6wF6quM1"
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

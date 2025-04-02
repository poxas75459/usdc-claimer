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
    "5RQJW1K8Vw9eVXpmPb4t49KykFw2DoeYgq4aLtLhSQ87MBKC9TXvQTBrntYR5gQmD9mgWh891ibijMBKi36awzBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vaoMfW1wtJyEP45DzxgdgGEZUM1y4M5vv2J9qteszy1usPgvxd6dQZvFcxQFhhhXc4Shn7oruB8CvpBX7BQPiQs",
  "key1": "4qrN49AGhPvpvkJYmxHvXQ1tD7hguYCJy1KohtvmFsxuuB6NX2f7V4TX3uJ8yKrgKkLYpQ7hJ6NKZa5bt9qQQM1f",
  "key2": "5U3y1MKwQjnvjTUWp9xE9ktaZfRgrZSn86w5RjXTbSzSE1Wd4vZcQ7X2D2hnA1e3rJc67HK9ZhBFwF1SEGiFBzwV",
  "key3": "5TnqUk8srC24UzbWNpbMTfCDgYcA8nGdLWRf6akNR36BMb5jZKKrEF4h9J23e2sp2RbpeFLGrzVLbYQ8evuC4Ka3",
  "key4": "2xuXVzv9qnjMqLQccw7gJ8H2QpyrKFJGLcbwn4VrKvaYWC27jqwuT7xi5vkNYao7iHNtBoKsj5TfX26GZEfQ1A3n",
  "key5": "2ixogfKgPeS9eeLs6igqnZzxcc87gBq7aiYcgMyhV7r73QeL3T3svatMKVrPReUBB7Qy3FwSLTi56eHfCKcLBQD",
  "key6": "nLgUV9tCP1bjJybYkDHCHncnpja3qVpQighyZ6PkdYRBoiov2mp7qDXKhgekmjcYkHCxPD7m146ZQFwkRZ6MJii",
  "key7": "3tXXY13vDTpYp7E5xsDkegogbf27uQvwGaiSD8vEA7X5ZbKxEgv29GxPnC8eXXq8o2qCfbyrrSA2yGmvo7qRNmLT",
  "key8": "5hLYfVFPhVJTeuQGAXHWriAzadfqw95RHYiL77Jw6ANQ7XY23kERp5fuM7B9CC4U6LVdTx8gMzyiX8QJx3h1vWJY",
  "key9": "3tovuhc1Wz8S8oAXkYHxjseLtJVXeKANNSPdWgfHxDM68QqhPucxjPfAwNC6P4BVSx79Ue2q38akQskPVfAboCV4",
  "key10": "3gJ84qt6vxHW56pDZDH9iBPaKueSc7HJEW3zTmRjrgYrpiWRLbpr84HvrrGyQ5z4vdGKQyCv9n1dkLaUoq5Sj3dy",
  "key11": "47igngrvbEn85xZ9YUgLQ8xgP8BJUQGqbTFXqCnCmDxf7ePgNm6dwL4V3a8VRgWnFzJM9fX2vBLAMGsY6cziVJP6",
  "key12": "3rF127z141N5Y7AaCChuTpvLWZ6UWNAtJyxjEU4414o6YFAi6sT9GDiXpYw37dPJ4oJG4qSZwzu6QheiWrs6zM9k",
  "key13": "2eD5v9Sse4RizRYE89FTnq6o9RnbfPe3pjRXheRoumjorSTgJowiBQG8tH3kXosFgUeZyJ6vrSCwNp6SC5yucQfK",
  "key14": "5zRTUtTAr1EfxUkDnN42hmbAASLPXp9hKgzWpxgHzmvvBPDSuaMV9mn9EEEHQYkDUASigcD3NiPMtPy6k8c3XoKT",
  "key15": "3cdJvfVvSuCPyX77Qg3zGyZQL9brEPv2f7eyFw8AEFf8ubBEv86YsHUEnAhy1omneTRxV4pukzSLvnYAUnXAQyGj",
  "key16": "53uXHaE6G1GdAeybxHoKTpoLkvGRx6uFowrbcEvmer4TkD8uVdFJwMHHW3VjedChiaXSMGtXQD1F2GoEGcDTzM2Q",
  "key17": "3tZa24yR8FBwHmNsZWvXgYMkajqS4ne48S72kL8cp6zxP5N9iQssZjsZDQ1zLRPJc75t3ssQVMYfuDqxi9r8iaG2",
  "key18": "44FDZp69MnjGzJwcyRwegu4TJ1mKBCbeNns9Au7gDKik7xz8aRWr6T7WNSys8YSgKB2LTAhGCsS7xbwSQuw1QLHq",
  "key19": "2n9fjX5xzyevE4uaGZuyas4wg8eZusufgbPam2r92e2b7viP28fgbBTAqXryVQUNobShW4MwCEcp6ui5eBhwBAqw",
  "key20": "PZBoPJz4ci66BE2U75XqjorBEVe4kRxbRAz6xB6AkKwpPSLZ1V7gk6hGPVUzBY1YZC7ZyhXZkFPCktWXfPQGipS",
  "key21": "3AZtCdmGQqvuTCprm91b4TfNeyhMqBfWRKAnNNk3cxVpr66DZ34MiEcTCJTvGgiPhivyYkMmcrUCvpE3vpDZEZQ8",
  "key22": "4d5suw2JkDckpZg2DrPrmzLZpmfnD2r3Tgzdt2qp9NEaRGDekjxGMno4uD3H5G2jWuzZGk4eGqtC3b9kSvLrr828",
  "key23": "2hzETkiPByUeMKTidA2oDF2qnGPMxR2wCmPM2XqrySF8mRNfPgPve52u1DxgqMgzd6GiiAaQ4o9qdX9k3C7GdX2W",
  "key24": "2r517qCKU35BfK1ANmYET1PVBVMHSt1g5S5WT8HjR5RcW4zQRPWUAm6qGFQSqwJzaGNGsiufztincVpqPwnhWafd",
  "key25": "4d9q3qECfV14NsnT3N5DyjkBBFp7ggmJDp3BYSYuNGAsLtW6YtrngbAzAJbCm7PqNB6HP1zzhARvwKyV9KhnVkVZ",
  "key26": "58qaZMmxGfgRAbiYQPBj8L7pUgG116FLWpi571Q3NebKdCYChvD9pFK6GTZw8x2JAQ3VpX6g1rxtErNsqAivWXf",
  "key27": "5aLi7pRP5ipRi3dC5d5dyQUuNKcbF4HT8sQ2uQq5F2PxmhxhQpjNuftcFS6pjUsNGV3BmgxcMV2mCmFTARDmWKv7",
  "key28": "4KXZ6dMasgFKPU4QnNF3TVxjnBr3gU7dCmHma2byH5Vd4acYDvWsET5fcq4gYXrS6MnMBXYe85yBbRAxhzKp1Z31",
  "key29": "4jL2TeYXLcUk553PcJoEo6FVEg39k5EHkrGh5VCWwQhWt9zqYp1AGcyft1UMroAZ8kmxyBRoJJ6n5K9zhPHZPFrL",
  "key30": "2XdRbVDgKBDQ1etFQoPLZEfEEce5JjEk7Mc25zSxpaEN7bzYZKX5FNyei33piREEHq3Tg1mBeMbQUV9Wv4HFFRiA",
  "key31": "3KRpnYQvcziWf9XRDC7GLrPRx1GEQKSoHAiEySaA4h6hbWkTFiqwFLwWAHj4BuV4pasQbMNDsiLTNL1odyTtSqNE",
  "key32": "2RiodwkXnzoHWD6ZBUxfg68GLsgHzhgxu9rBvoz1Sp62Pu1cce5wkV7Uejb18Kt5xx7NLqG87ozyVFiMdxY7Y87W",
  "key33": "PcSapiXf5zmAbCBAb7Dse3Ud2UUfbqhXeq4Sf2HCvBbcFL4Ni971V8Qhka3DYbhV5hYrgzfGZVZf6baNkZNTT9H",
  "key34": "5WKxQcW6hvBN3LaSTJFYjqQwpoy2ZgZu4Uz6o1pgbCZe6a3mVv5Rnf9XUtcvz6D6XdnC3WJhs7ysfNBdRG6TPfdX",
  "key35": "4Rfa7yFZGPzvPep3NBnmiAYTrTKU3V9VUwaS6sysXWDzrqVC6NR9yB1vkWwKzrLpFL7X1x4dLaYXHnBbcNkvoWxs",
  "key36": "4CPwhRa7X1BFtd3xuJAH9NkfxDD8vuHCL6UT3xbxKNiNDgu9LsSdEZ7q9ugysRRgkDptrosALjoFTmEP5hsjyvao",
  "key37": "4miqm9WHuEDA79fohZUmbxWgR3WHervBumLy1etE5qU3VqtaLwzUAurvpvS6M5kMq6DgCgkZGRMVB1QdzXAj4VQX"
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

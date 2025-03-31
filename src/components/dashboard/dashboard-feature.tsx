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
    "2CFtSVj5DdYWMb67AFHuEJS6ova6VxN5RfWTUG1UtpKrQju51PP6TANmEUwdKF3BUwmSWF3DBVUx1L3qbjZfgcC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpLLKds2yBdMWLmMKmDiPhRQKWhuyCQSLreyWFtLRvvgs56mLJBNN7aFTgq1tnALhY2zKs34QkxyV2YQP9nfsTX",
  "key1": "2ZjfzJsKyJeUDAQcq7Hga9MwcJAXPxQND9eZk7UVYSC2LSYWhqHtQKAiGdvA1xhZKmtVoyCrtfHEo5rEdJ3FARHr",
  "key2": "5Wr8SBPiJLvrZQSYbQrQEDuXmuHLtWz3xdpYiSPjSj9MV79ajYktkzGidZuiQ5GR8XG3yjBVvSvceHgb6EJc6gcC",
  "key3": "4Z76gUQdQq31LZGGHfpPbPrGtE6CDuQ8i5sx6RP9JtKgZ9gbL4mKNiQ1AggfXvJMZL29u6z1qNWf3WxBVavF1Mnn",
  "key4": "2JvmSc3iXCX1uzxTW8hd9pw6SRJPzvGt9EaWwGB2tUSVDeRKRTZWYvUg67L1F7KinbL39qLStKek5QKESeq1W4ZV",
  "key5": "3XJuhAKRbkqJr8Sor49S6jJUWWqawRafmBctTU8JQ8Lpx76GHb9d4MB3AxRA8M276TsbRajcVD4FZoyhY6ner17V",
  "key6": "3Yb2jtaBK7QRa3W89cic7Z3RAWNEy9pVmGgMtU9BJg2c1Mdyf36Wc3CUPJjqdD5P2pofuKWu18fV1JqSoqozArmy",
  "key7": "2Z21D85rxgZDUpQnVazDLK3jQcuKwut9Kke2soniDMcmZNcpcEgDJz7uGSTwB5JRygxjmvMEuCpLiWFVHZww7vKJ",
  "key8": "2QaV1JvjjftRHT9LKFimjyJjaZdBTb2ARCh1wYnfXu3v6nxCJEQLeM6BVmQ1yvTWMFRJmVLXN4xhkHXKfh2ozK4R",
  "key9": "4cg7PVcCDbWDR6GMFXyGfyb4KM4sgGHTv7AHm6WyK4aSX2iqmtgsuyNj63Dxt48fizJfEJoVcm43yjjtNWMLpSYJ",
  "key10": "2btuAaMvehWzRrboczh1xvUvbDoYodCPUstEbGdqRkHEUws9x74viGc6StXHkQ1DiVgG9n3pag7YrrfHfivAu23D",
  "key11": "48X4v52Z3gjy4TNmxDd5Pd3csgFiRnoQF9M8kGdDP2Y6ryg9wq7bkjzUCSkbXcVRAsAMRREQrhHkeVe5UjXZtf9X",
  "key12": "2zyvPp4khWfs9qPYgU8NZV495XPEnUq2GdLDeN2WTE5tZ41XSyNna9zVXCT7hPyVqmgqFH6Hv1PfdaffJVmH8hk6",
  "key13": "5CjVszeJ3wsTJ18Gh19xwTYwbLTLHaXUo4RSZhjAK6hdb3qWtEPSeiFCL48ddjvFr9ziLFQgCLeiUmtGhHTpra5K",
  "key14": "36v7D6tqWceAUN728NUonb5ubRB2KAipAZkjVf82FbV8CcMBQjmggKp3iPZ2UThFkMyfUGWuBsZ2NEk7MCXFwJZ4",
  "key15": "BhuryQGQcamfBwxVzTiYQGCmrd8r9y6ZgYr4CRSangWRW69jVLfxuHh1oZFS7M78AkRsaEsM5BHRgkpJmmZjCLh",
  "key16": "2Mhf2AkCuGL3C9U3w5hn2f4ZhArj2eF9iVTtBeEWd7VURDiweEpb1C6BL9dgcgVbjwwUbbTNzsoNoizWyiPJssxG",
  "key17": "4Wh5KRexTCBGFBorSZHFuGu7An3u2RkgnCVYoesDkpQKiKvzQnJg7AkeVGJcnqjmrewSbu1c7q6Hf5oJq4ySMiVR",
  "key18": "3M8cacpNHBxuTBUeKyCjrX34zgqG5Ds33vzGqF8LS88dN1NGDNXZjMwY4aifA4GSDT9VkfaAt6QwM5hVEhJC7zGX",
  "key19": "3KvBN73EkAxDbzH6hMpnrPuZ2zUYYs6zAA3xKDgBqxYAQP1Lk93H7eELdAoMfBfvsU2caKc2ikiNVHtn6jVU7tua",
  "key20": "2teLKC7vro28CUPrH4VQkpWNNNNhzNQeTdADZUDxJouExYFNzKzsNeWUzknmUGrGTLt8mqrnhdoq2hPFrxjG8g8A",
  "key21": "5wUNGEmwFs5LQ75trkoacY993V1eGUUV3nNWqDGtbvvEKeCvh4wPhkSkWAaqz6ULG8dDRQM5dY6HREHfXUSX4vbv",
  "key22": "2GrFg29KSsbUHjYioDTJcJuG5aix6jkCEgbztQ8pgSwrPrVovB6owUatH433irp7U2h2F6JNruUi1ipUN4Yvq9iz",
  "key23": "5McXuDYirrdpwN5Q9eqWSL3VuzKoQkTfUo93ii6cSiVEz72c6jMXTQ7YktivHHq1txKaPYibJX5JXeqZPDdXx5dv",
  "key24": "5ZTNFfqdQQrpkpXKvFaeVsdNVVEfyji6GRoKbzUyJQg31GWq2qUHqRoPT7ZDDZg9W6E2HyUB8QpWNKTYnzy3oYU9",
  "key25": "62f9QqgV1UXwHg5eqwCTH3vABZJZDkFfCgtqCqEmhwieqJ3LDs4K2ByvDNPfGd5L15TomD4UySZmPDi8DkPo9q1C",
  "key26": "38Yaf8kke8r3x6upeppT1CpmSSbYQSN3oNgDYSoUhzxij4Squ5eHYmQiE5ZfnVH86v4qk7FxGkdprjHWjUZp8iVi",
  "key27": "5tKKuVvkwntRL2twgayw33F3yNH6n7B9LnAcwgB5g8isFdmJK1PdfBgMSU4Ucew178HSsLPuYYAPkjVMd9kwc62V",
  "key28": "32wkDL79jk3W7vfpF8w3BvfT6zegfspT4JCjqQrYXuQmvM4Ym7d7mfEZCoj8ZzB5fXFiAZoTyM9xMPLiGyj2Bja4",
  "key29": "2eASHCEtmx7r52vxHWCWvrJKvC5eKvRXwzqWpVYWaq6dhwXk78Rfw3G6wqMRdAXVJRzQRGbsqhhxaoRRvSu9Xbha",
  "key30": "3jFEUquhRniVqqGvC7F4f2UquAT8zFkoHszc9GUFUSqY2PsRHwk1SbYFzoFKbxFad2YpRqr8EmgXxLXX5S9if6mM",
  "key31": "5kyEG7yp3iSaipNo89hQvgmw11y5SUL3rtDahfFPn9LuUyKCiTWHfEjFZ9syUUtya4CYd4pVADa4kUp65YaaZnLP"
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

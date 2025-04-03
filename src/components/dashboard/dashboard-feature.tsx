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
    "2d2vw1pnf2G4CoyZfdo7KcbgoJSpB1iFfrDbgPoX1RrQ9CtFmJ4EFdfGaqgj3M4Eci3q3daz5AoBJ6LB1TW4nBXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iksvBRrtJtGjPrtZjHuPJGNizHxvm5B7oBjDnHrA13n4Z76SBxaxCeWXtSUsEVVGPzqqASbfrQdWT5KVnuA2spa",
  "key1": "5ZbdVoMH4VQVBWGeUVZ3aR4JM2iNY98qbWd6rw2YScB7QnjdYQMj544Li9cr2JtQUCnqudSa2U3wCpnYx2CoDCAQ",
  "key2": "3zwwUdfJwbYPrqkDJEovm6TepVRKzzmF5BjCNEMuFAYD8Lcfqxs9f9QjAN6r46wF6fSaMd3Eqt43Dd4CTJNYEh9e",
  "key3": "33Vi2XuJVht3gQzPD8hLLs4HPuKZnfsGzWM7G2dswb64wU5F6cuxShbHH8AmTD4GmLGR7qKQLgDAVAHJooKHkweZ",
  "key4": "2UXqRMDCNM2xo8bVV9huujkUSPii9EVsVKEPzVtxj4dMiHsakHrUPvKtPpH7DvHrae24pgAbyXQwf1864S1dmuEn",
  "key5": "5d3SR89iF9KTMjuEe8Gbe8v5XPDTAHryi47nSep7Ptj4rv1Z6A1HDPBzgVLpC3JSQHF2uQZZRxKYxiZSccVfJrv4",
  "key6": "2jc3WJ5hfGXJQLYokhGksqsorovJoYrZsApwhQwTuBkhVHK8KLgXQ7MkxYadkZL3Bnn2Tw8jK8HXWCjUfjuKVmJZ",
  "key7": "5gQgv1Ce1xdAwyQ5UVbfopTBjgc7PhwZbH8cURNV2WNe24AYBXuB7pEYonyqi1NqH78pHwBEfMdVygd8Y6ArRZEQ",
  "key8": "4EjmUksEFEQd1jsVVjZbrm8tmqp8HbZ1Y87WPSAqDYdJzcnqGtgzD9qUTewyGCe1nT7w3tXdsWujmiGPdHatcZ2L",
  "key9": "2fUDKcJBTDqYZ1BDesyDHSy2gwPJrCA6ANDSzQiyG5rZ7WhvmWbMMipALxPF8aJWzQJgUH759ZFkvFCjiwJu1UM8",
  "key10": "24AEZFvc8EDcMHrFGAhsCzXEVGTRmpKEVvXiCcsXgwda5Ut8Ne1Jb2wsGw94mPrDxfo3HtcwNkvN7QikgzxzChhA",
  "key11": "418PQhboFiC2rv9Y7SDdfafkp2iRyAuBVdWvGHffuwLXScipMqSfXopwM2itXomVs3xMgPrg7ejNu9maRhJQr5Xt",
  "key12": "4vNCP8SSUHKzmCo89tQrjAEAPCXCAvuXSWZF825z9wwpYSJ2PUF9b4xL6NsGYXWXV7ET1qMnybEEfB1WEfRhQ1PN",
  "key13": "5nSimr5GTfSGVMugP8Eb8zrXM9ontEZMNhKtQ8vokUovx7BJBsWSRUCEhzpQsvRHZ8c9CgFijb2VDr7KckaubDNx",
  "key14": "JHQQVxt83jx9W5be7iQLcViXhMXaGdUwsierwcNN9aitV9XpCbCQGusaXFZRvhgFCf5Zx5mAbaWKtNNt7hCDGS7",
  "key15": "4brrakcdZdqRK2RNt33WxuNVaaGrZw4DfSTdTU5zL9MiYWaXZgTofzXfpjhpyGiAkxp9YWDURE9nHKSrLdMw4MXA",
  "key16": "5SARFKHjNLy6sDKX5ma7iW6GtJZ4DR6b3Zfp6C4jfzkDbNeU2NE5RzUxpfDhcDu3jJq9j5LegRwmxkuDwvJpEiur",
  "key17": "4XszJy3aWFJ7BKqo5BpdpDzCGXWXF8PnVGYBXdkAiPsqQ3nkGNk4i6DcooJDrCqfbqBAaeG5X76badHv9XwVA55V",
  "key18": "2Bum7Cvratud3NyW4oA2bCZm7YzZc5A5xpYjjErnzhYhiKaSDkjHirzpCoraTs2Dop2KLK7dfarBqqZGvt1FreEL",
  "key19": "2PKkh7tZoQeqaSrVv7ecfoKigKnUzKF1daXfwRntsg7JdFDLpQGby2GYLB4Ac1K6xX6cEzyFX5MDcHr3LHsumhYh",
  "key20": "5Tx1KtZvb6ouU1gwpGgm2saXkk9QrYSbmQJKVpUM45PfJh43EoYvqf78NK2fcKdkzPVEVqknRmHkbmsAkE2xXsGj",
  "key21": "v9JaNYbB4ft31mX8mSbNDGyUcuTVsP6WdRoE9tU8j4Cw3VykrT8uPtj9oyZE57hnUrC1pqFBkfLJQiN7U9xWRH6",
  "key22": "4DqkdwZvwfWbR5mDHjp1pRwM4inU7fUqDihj5jkpQE9bVW7fr85t4CrHs1Uy9dUv3uewF2jyfUEKMpdcV2RDm7dQ",
  "key23": "4GLB5Y4jfAi1bR3U93fKMRqu82KLnxaKUFQhcCQ8ggDcYks7bsxaKDX8DfVwW5DZKAgusffq3uFvK7Lm9a8zriBd",
  "key24": "4Dit3Ymuu7qFhKCjJNAFor8RzQbEFMVyFJaDzsZnSzX889mM3ejvHVqNBwtUgeK1XA9StjrhChdV16FYMAS6GbQ",
  "key25": "5AcJQSrL4mvZSd6LQFYK54zBEMqumgUHjjXL3He7tjap91rhwzcYFSQnGbzSFsSRh2xPEe2r4VK2svZYzgdG4rQq",
  "key26": "4qfXV5kG9eEvvX9j9rAf5TFwbqRtdivjr6rh19FvjaFoMFyPUJz8jd1UZGDkbfaVNsLW5LNd4EW8HUNMofvh89WJ",
  "key27": "3oT2UKUNP34EWqCKB1RYDZMbp6pnXYZGHCByu6NEKQynpadSWUL9WKkbo1vu8yriC6DF619cjNCJBPt2x7Y4qzcZ"
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

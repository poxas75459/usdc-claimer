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
    "4w6axJR3xiwHyH7FpDnCu86NCmCswDBuH3x3egRXpBgBNtWXKmtEHYBr9W3simxwDtW2otp4ZSm3HjQAHmwqrgxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2SWixaKrR4s36QLfS1XbZ4Gjiw3erLEJG22EBnqFjE5C8o7qRnsdsZfSxETKyTHYozQ6FeKrVqzdkg1yG7dkN3",
  "key1": "5TZJVpFiwZZXm7FPrTAbRMTj1X9BVLxjxy9bxNSucciDvniEurhNv1VBvUQmk8pHi18P625WDKA83FjfN9GHg3vW",
  "key2": "2w8wAhnVAo8DcAUCJKR2zan7sngWbrvKgh5CqBvNXMJDqxz5ha7ma4i3ZQAKBfoc2jvTrvfRm2ByFYBFWgJXfai3",
  "key3": "5CPuZ1crprTSphPpr7yAzHYNVf46vt2nHtC6ERvv7dmZ1GoVDfMygkjCGwk5feXcnpmTpF53ZNd725nxucynexUw",
  "key4": "4kpUjNVAoSddipKisjqMwaVyFe9e29jHV4HbWtGVgPjfnYmcgUUXaE2ETcUBdMEbaCNffcZcS27TnhXhGUG746PP",
  "key5": "2bM9WuJdjJqT9eNpGomxLSeGMQxJABb91Va6Efqvz57EJ4XXC5DgpgmkocepydeXbPHgLjJihdVTC9UJtJSsM45",
  "key6": "5H4LgFuKgKsKsaR8q5A5AmKXDDPiCkjCkUupPurXwNutb1FtKFeZ9SsUQyLEdoNahpsUnjMuZH9G47qsL9aJKjPk",
  "key7": "2rzxCKd1YV6L4NRtqmPWYMKzBSCxaT3xhuFhvFLt2JteZwWQe1SPa8E13VFgLNftfX7rDjdPkySKBEwLKx7n4jHY",
  "key8": "2dq7djhi5PywYzmqvnbENLXjE8UU7eLbvzHkBuE76jHCnJhDVpwjvfPq8CP6a8yk9jSZwdZwp83s6PMa7oRQeifY",
  "key9": "H7FN1fNQU4gw8nv3vkM5cTrohxqyU5snaqSrdqYbJortCq1ooFd3k93wDVmFeJGpXxp9htr4gfLhmvx8P2mhYiF",
  "key10": "4yAufEVoThrYHYH5dDwD3FpxDKUMu5G35yiaw2tVGGYmPYi5KdirTAi8BJk87zKVemLit5bmejjp9XK9jBToqZW7",
  "key11": "3p5dvJ9vJjcFfbtUExPksjpAJ836714Y72q7Z3AW8NpL8rY19dbQ8tVLwo4dxtKDxZbvnFpuXoe5tFY7trczRy2x",
  "key12": "5SXGSrXuTAZbcbCeEXd27fFQKY5LRUfRN9yZBA6F61sE3XnF7FWTsJSmjXYkFQcu1uKBgcBXwpiAu8KT2NyxZMtp",
  "key13": "4p8UKU8qU4kGa5Yaqy2C4pp7LCjhixARFJbVAUQQbpQ9yVs4wpyYNa7sV73CS5iiNtJWyhddszvvgzD4h9x3Hcj3",
  "key14": "4fULvpkQzk1cQEWHEHcEd6YYjzjxhavteiVv5mB143F13MNhhf8ixb5dJjnqDDftkGp8zW82AMetxg7cvFTJPbNr",
  "key15": "y5X7PB9WL2NHQEDkEqWcCbinn9PuC2PYTUJWRTeTxuqiU724oSsSMSBe7xHFvhVCRb1nvdqDpsAYzScGcPsZPi1",
  "key16": "37Aj5zq5sdb78MsxqEgrLGeEPZ2UyafvX41QJmA8952Nq8ieZqwUie31adjsrvRcrzDACbX8ASWBZN1vgPNT9JnE",
  "key17": "57uz9kC37CqHkt4CYPqWyzqRk7QYLQvyddKYPnT2g2UEUj48e7vLEUuxiX3o9xC1V6AG5uBymkxMrUEhcDUaAEAB",
  "key18": "335H68NJBuivQc4LVDQ5WbXx4fS94J4ByrdpZYuyNH5CN7hT67ALhHhpNKDo96Fy2GW18WHczuXS1BQa7e1MPqch",
  "key19": "5KEjkpbDEoUiRdcicoygV1jPnGJcJ6roZc2o8krvufoJhRwfVMmeVrsGQBh5pSSDuUS8JGAd9yJgt2NMT5GLq7gt",
  "key20": "2Q4DWmcxM2eXp2BtKqvgea3H1mDunpre7iMJfJqC2aNcDgsjSjut3G817spQZZ7NGQ63jhZ6uV8FbK9kRZHbLZWh",
  "key21": "5g5sLCmsjsLkf4deg9gnodWSaR1kHna7zW6qXEvTn92WhLVxwgieJ1aRhDqGMtb8fTbjan3VKQxoaVyu3HgKWenD",
  "key22": "fxbtUjKhDGyX4YqGknX5tkEbercfS6EkVF7a722W84EfQZ9Qb8PtgiSSLYw4ePuHtfhxwjLeU9Mk387JCpJ5CVG",
  "key23": "4r7b7f3KZwQik1SUC5gUyxvj84mSWJBraMtBnrsMcvAshr8XGX13DTrhPoaf4Zx3VafbFQou5YpiHuDmyJu6F2f1",
  "key24": "4EBknAjkb3ssV4R3ZrWU1TiKMxLtAmcrsZcPoc22A1ThUi6Gy86wbzgfEfN6ns8ycwyCNRk11U64mLKabu9ZLj2R",
  "key25": "3Fr5q3UMCnLxb1ozSNXpyRFcFdWzmv6Q3VE6qZYZ5Lx6fBxzJ89UfLTDeQLjjDeURNSTvufPWWnw6Jtoq5fAqtx9",
  "key26": "4ydwfJpA77Vn2yU7CGUg8RZXFZPR8UMg29ePNAzY4vJjHDXCi9GbWArh7aDrLPrXmM7bLPYUZyMTYAjm3EhTRGCc",
  "key27": "5ih96ojNup5mWe6qDkK82ZPQsrdhwxbxuHkM2LLKcsFXUzwCdtNrerp6NZNmUAAzKVtK24pEwxvNCSBwUSAGvNkA",
  "key28": "5CJysNWrZz5TSfvNonb37C2eNCRJVTsdwys4woYQvAFPMpsn646uM3tLxqf8FNw5Rh3zjMDT4ZtKehy6vX5oKRqJ",
  "key29": "5FHkkHByro8Y3oaeNQGKzPKy73gNVxytDnML2uSVBif82BW7iNnhvaWUeApYzeFu5BZx2KGz9eLDVrZgr6LUN9WF",
  "key30": "3d3f7BjptSLk1bpUrA2TPZvsPRhWMTTEuyF5zDcmvuSV8WeMmEpvFzg6Y2PvBAaZeE15oh1HDtL8o7bdcWWpVgDk",
  "key31": "xJoWu1kFEZATJeFRiyUoRBWTcMjCufJPureo77eRCjE61SNcf2v74LVkrXP5tBYaTZR1DhCm5FfGEK57KCP1gWH"
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

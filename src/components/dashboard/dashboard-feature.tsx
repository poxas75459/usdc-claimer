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
    "2Fsjn7CFAx3MuHLqNmteqQyFAjpft4iLVWmYvUvvuGLBNUFNidPSSCpQoTNEiQzScfTBUePss9NKM2BCZ5f7YXTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XQCKxzvi9CierdBp5dFzdPY9pp1ZQjSg5iquNcZHoEBLTbRHuYddpzswQ37dBoEuH95Cssc6uVVDnj1n92Ddhb8",
  "key1": "4ZH3UdsAQPH6JRZhj2RQ6i1EGTmhVcAKcAES2oqYco5P6ANE5opUSwUWhuPeFYhSppnQFreDNCozjJLJLnbnn6xc",
  "key2": "27nDheF6aYSYc5MHpVLpgVG2LnUyrnxw6xb4Lj2CLFb3vdeeP3iBsbMQvAo14FbjprNB9LZ8PWAjDziGPByyY6FZ",
  "key3": "1wCT1jNjoh17tQDgWx9j9J5SHBTp3ZoVKVSCS9s5kPy7JZaNUVCio4MZX14jXsLcgqSwGgkbtFYdjnbSf6zvStc",
  "key4": "5Xfh5SCgNqi3v5YL3WBwNMPLBcxbTUjMYFoCGfFA5vr1Nf52KwBzMRacYgrMhUFX3KaDuEh7Ff8EPDTn4g1wyUkg",
  "key5": "EUxDbxnQHKbFVQz2gGZ5Csr84z9D3gi5qqboerXUuhkB2h1NZ2DJRigKKwZSjmWBdsZL4P8A8eDBDYo3Ea92Ttx",
  "key6": "kCLG1UwRntWUzA7fWiqiykDkH4LEgr9HqswaDR3rwSo1nbsuzeA5o5CnFAFBSt44HYw4kmR8C2ConCUXq9Z3Nnf",
  "key7": "67D4H7TFzCrgUm7qLqFWBwJLUihBkUkCqTcWgNa85puLNkfZMKLMSThbgVFvpntZ1iKd3hUPWCHYbLzhcRtC4Nvz",
  "key8": "52ShbZCGtcRFgb7zoyn9VVcDfr18PUhNEKpPKvhZ1gyR2GRpxL5m1zfgmvZs58prQWVYDcuSzEEAPZS4obYwGQMN",
  "key9": "37ZxqrVhKiHARx4tfEDUBJPtEpZ7K7J4vwTgFdMUTAubETvhkDg6iToRbGJ1xGme9TwCWV56Cxh4cCCVugzf7Mk4",
  "key10": "3af5skWTjM2yAUf2jtWNWRwjyCsH8MCTdi65eUqfDYzBK2KGnbSz4eN7B8AHFUbo1o8QnFVupGBtGaKvDoc3bTgC",
  "key11": "5dwaLuz7qPH98ywAdtG73wAVe84xjMhNnQg2T8yMPd2j5WiWSehfLfXS6KdToMzAFdbNuCemsnw4eqe2k5nhcgEQ",
  "key12": "3oKfRa2fzJQX9uZBAX1H7gUkYg1r1WsHJpwLNSbb82ak5f9k3yNSB3niLDDeaoKujXVuZHb8jj9bYCn1PN8utyVM",
  "key13": "5Q3zddSuksun1KbnwCR41h5jyn9nqiMGaTUmJuQr5r6QMcDg33yZ2Mct9DZri6yZTX6HpjWMmm6Yhs18AweDAHJU",
  "key14": "65YrWvBtnyaFmBvecWhqXWq6cSFzqTQXqx9R7NaidBC8VGnFiydwgN411fSCyAAqKQYQtRNm53qB7Rbz7Y8Fr5Gv",
  "key15": "5SnCn9LK4b91KbNqumUFGNnwgKmSWWyiRUFoxJFgQmjQxa19ivrfpLgd1S8LWmrVYWiXS5wU975JPVgqLxnB8onN",
  "key16": "9wqyewR8wkcUGJ4qUrCqTFqeMv9tC25EbaG4u3pFDtgZRYff5S3fby5aTyrWsLbyWVFwHFrFyz7HZJ8EYHtxQoH",
  "key17": "PDwNnMiYofr9i1yjwkvzc4H5rVP56RL2uZtrcsE9TZ5wZpqfgg4ztuB891RGSf1gCJE8fyMCPxFcisk7LKmpbb8",
  "key18": "wg2sTKJgcSrecC6ae6iWpgC87mixdkWibdgmiC3or9E1yHG5cCcun27U3YTw7BFyzzpStVoszWqYbwdp1urPQio",
  "key19": "2rmFSKzfGrF8dvTFi4UFLviPRhwz5qLvkGbnmamCUYCzkzfFhEBW4FTEHXuBKgNS7LTNK1pF7RHPem3KqjYbxTaB",
  "key20": "5cPtTLZqWHvLU6eKXq1CbrFNVQiQctnguv61UHKyV7iNNWrQ3565ADMqQyU6PiCdGrqNzuFt1mUqT6izP5ePLtEj",
  "key21": "LeUTJrJanUUqchQFTDTKSAkLmDWT3gGpKfdnGkBqjBxk4FTHoHLPwr7KREkHnzA2A9MisKJREZLAW38KRG8tdUg",
  "key22": "H3Sa7GkzETX7DNWzxv8nuwBmhYi8z1nDw239FCpwF93H2BedjH5VSkGagv42Q7yAECjd2t8jSJwifnEBQ8udPUU",
  "key23": "3Y6q1eVnK598sLQrqFxdAa1myWSGhQ3LovjuKhPxJHwkm4jGDuKNmi5ZhCa5WFAhWtqtiMvu7btVbGXJPthXcUte",
  "key24": "3YcetzgDSjyMfNCEGY13SYYjwKbGYcpAwCVi8DyUumvZDApTUbvYT9JqTMh53Zqr1QqVFxRZDSyfNvmvmXJnxCxo",
  "key25": "5nYW42oHnCxmeW7QXr9bJx1qBQ1oYGQn5LQEti5p3hWoi4mzK7K2cMABmGGHfAbuUziV6JN2wU3koN9k9xoK4oRy",
  "key26": "5LQ1k6ZAJME5TASbnDFHBTfjr7tnLhvXj7yRKsRLR51L7pmee1rQGJA8ftreg8BpwvMagdLMtwZox1bJXKFfKHYP",
  "key27": "5GrcJLHUYLghEDU8cMY2XqEcfnGm7uVA4tPmjbgtSCqkRUbzx47hWr3xqEneHGsHwvN1ZfrPm2zA7oXGzE4RZPy7",
  "key28": "5vY5TLC5FBM8QDw9hkMN4rPiXMF2VMtSGc68Ti1e8fPgwi3aPfhCQ7XLYEq6gReB133VvxbaEBcZh883VcZe3qsY"
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

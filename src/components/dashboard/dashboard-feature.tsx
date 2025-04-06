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
    "3uiXijDii6cJ1TBpYCrGdPeiEk3qejxtfz9AsdmfPNPWFvmtqxhsWBGMSnNozFSiaDgRnNfifXABf9qXjwE3Hjmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xbjN3Csrucs1dHy2NSMirVnU7Etn4VQu24Wc7D4bAE5zqsnRFSUFcpE8CFdghYsz41EG6f9kKSFxdPZCibAVKbJ",
  "key1": "2ky4n5CUerKicNrcWphr2Q8LA568sYwt4MzLxqr53bKqzA7FaTwFYgVc14bhRuBiGYjhVQzikY7FvXFxxV7EX8iM",
  "key2": "5dYCzMU817S4a4bTNrkixGtKmB7BY5vh3rC3LvsgUe5XVrtNcpF4JARG9FWKkJJkahT1kjzMRtTrgyEFiAMzTXKU",
  "key3": "3AHfiMaSoHPpFX1u9D4vf2NVX9ij8pTJjRVX5Ekurmd3QWU3zhzM7QePbYmeC6rsLGRKKWAvcU3U3UCUu13HaCcv",
  "key4": "3etxDZ6jnN9ivN6KJYEBaWuiyjZCh2VU8C1KRwVGiZ45JMNwY8fvXLrhXNvngY1wdJRQtkc7rV3LLj8xMAgAFPv1",
  "key5": "4UnQVQfLZRJHcooHamUKGG342RBYPfriYAUe3gZBVircx8M7YMbMa1NvnEsW23yXqu15MDr7uGJFpfU3hN7BUuVL",
  "key6": "4BC9TAhGfCf2qzj45KjUznyA8HJsY9NgqW1wib3YQ7srK7ScpFBLP1KRtPHSNtdKqSU2Semb5s1SjAKsiJXyW5dr",
  "key7": "3SMpKHJvJgdgVBLfdrrdSVq7kaAB29CW3vwjWZBgnqHUG2nVdF3A7fYQgCBaDF6bco25MumGUBjXyp85zYDKs38f",
  "key8": "2ePsRoqdxcWzTBMSMaBfwA39VDU8QJXES9Nff2s2sgzEBZ16Y7H1yRDScttUKioggkm3wH1qFLRmTHPhXSx2zqMV",
  "key9": "4dKduYSZYzy8QtNkzeJYnkeLZ9ZTqnnUNsEeeKLPbPWM33QyBaTNBfJE89nJfypE3enjy94S6MmQss85d9sY98n5",
  "key10": "8C5tL2eSx3hJppU4Ash7W8PpVCi8LPaPva4nSUrTa4PDxQ9VDRnzedbFBwLBjhtrEJHRETA91jpGtjQPYMovEEk",
  "key11": "WTfhmHAEYKZcWRo5mCzqMVpF1Bo3wXHxBPqBqEGpk4gqmqqCHwHEwyofV1FuGNzCMfQ9TjJkA9YomamJaR14FmG",
  "key12": "TKGunXtw7pTJNQf47JWCcS147Be7S2FudZD7pTYLR9ErCqhEEFHJUeZURtfw62o9rYhD4jccjUpw2Ccvezj3ZuS",
  "key13": "uswnD7YG29xnUXnqQf7s6GiuMExgo4ozyp3cS3r4E1C2KjSQzyrWbr5HFmYMayJ7RaQLxGUsz2fFsvuHCddGcaY",
  "key14": "4DvoriexQaz2GyvmAKRxoyRd3yw1U9SnA7zjmMJ3jgNhT1q4PjFbmyyeTBUgHMSdKXcxYzVHAZsdJH7rMSg1Gz1Y",
  "key15": "4qqmznidimCXNYrpooJ6brzvtrxLB8B9i5phf37kyjudVPr2CHLfvMMw9TqVuWW8gKYFsE87zehvVt24G5ZJMk2a",
  "key16": "5QGK3esdLiJ5wvdkGaceNFMjQgi3z3frP3edvLSgk3RjWZ8kw4mDprqY6SKBhhuD7GyLXkgJyXxHQT6KbaVuqSJo",
  "key17": "54Fk2VZNtNFTKBRZiWWpEXfpdUjVmsN4aAAQKV6RxAy31qsjoGkjQ2ssQFuoMGZ8n97pYa8V6TwpPNGsD71fySJW",
  "key18": "2DHCYLZ83QWkrEJAwX4NjtzH9wU3Cj2TaqU1dsVwZW6h5UcimviDUcewVbZwJE4ZhNhYh2r3g9fhHYtm15wxTGv7",
  "key19": "3ceDo1YPoMCv2yw6Fwj1R3oaFVE9sS5ggMRH6yBuvgx1d1F762hQ1wQkey83kAc4zDKEMwEJbyQNHhSgthsXy4nS",
  "key20": "5QmARehz9kpy4xA59WdJ9ZXVDxa2zjBFmDnqM8kUxwnaqYCd1UDN9r9CAd4uhiuh6TE6v9usSpdEPcbhxM11XUqD",
  "key21": "4MXZ1UsTDCQb6zPkPWQhm5vaoAS5g1AXSPk1VsJTU2uDSLHXGZFmrskN6vSPsUQyNZMTutaoGLS3yU7k6jUpef3e",
  "key22": "3mCmzhP77ffib9pX5cYo6EwGhdVC2oe87Gq9kCFr1azLm39hhpwhsz52XjQdb1jgmuuwjQNd723uG2wyxomk6GXg",
  "key23": "255zrB42Ad16UTqzx3eXW2dauJeiAYdHv3xmn5oaojk93jQQfifzov2ptxgxyrNG4JYDD6CYMWDkoKCez6TXph8T",
  "key24": "3LUP4UeRwKRhDGo6vVmTRByffnSaTSbG8gJk5zy14V73YTwag1a6rnnW43j6a5yqZSiX9hX9ZeW9cXN5AEVz5ZfV",
  "key25": "4M6j6v8nXhu5QX1Bzw2fWrh8btCy7oaJRmdXdEeR2wPNdNhHcbYekVoergpp2iAoWWQzL2Qu3B64g2ixGXDTUxqE",
  "key26": "4MmWu7v6gstZnurkTXH7HVbcgGQxoLkgYTZqG3zWKz8wZjUsGt15iwUW4aPBd77MW343MdRaSv5oHjysZ4BUmLPY",
  "key27": "4oQwHaY5v48yfTFHHyKpzWNANZ7meQvqimWaKPDzXdpjPjXrVm9YV9hsMQNkY8bytWaTuXCVwiFCMFxHP7UDV5se",
  "key28": "yZfeTfqpHEfFzqzoo6hxu9HgoUFefGHzh3jyiNXu1Z5MPLc7KBd5hDJAQ5ZFrWHxcyN8yS4PtzDRAyExLnfhmfU",
  "key29": "5umGd65PQP1vTq6He3R9w91rUFYpvHg4zk1mXDF2UKNAtP5QZtmHVkcHo9KgQHsYhLm7j3F3FLtFxGKPwK1QM9Nq",
  "key30": "3KH6yHDnJyp8vZuiHQ7EMDzddfcfLWkqi135UdadvvfNQ5pfDm4dyZRweNEhSZMVjTjoTenxHwvUSxWeU2V2HLKW",
  "key31": "2MjWcVsPrHjCgvzucQLWK8xbYd4rjZn8F6JwuoQ5YK9KNy6CYa1GMkgVjQCDS8MHM9KdbrdAuZhJPTnmKabWAthG",
  "key32": "23AcdbGrmNSJyXaj6ib8PTFD3CsRmqFGMZn5oMW5cTMguf7hCeuEtWHbk8JaVZhfnDpC3RLekotf4JQha4mCMyUe",
  "key33": "hNywZ9XnhvcoEHXzSZMXT8YowqYLdZqAowtYnWzBaE2kPhA8QYJ36Dtb1jWLSHqpTf2V5MwAhbpEvDsR1czpN1X",
  "key34": "5YF6cf2Ae8rhYQjRwcTnuV8gUV6kMaXpr9THPH2QozPnFjRJLVeMQDqANXxaK3VQLyPyXndYaQPbeoVWyfBANaYh",
  "key35": "3mVnPoVnCz5DNz9CTwPoqXf47dE3xCW8qnLuy7nKFrC3KiSm5ErPz89bJZ6UUwrw1w25Z9hY1YdgxUpibSZrESM7",
  "key36": "639Z9oTYLohEWFsg59TmaGy2yQFTo4oSZ9oT6ptdkNL1jVZESqmrrKJZKLwjoAfDiKgmDBR6Y1RJHLHcFMfDqAoY",
  "key37": "2L7rgHWFAWvdLBm4G1MgUEoS86Lqpn3BgPjR9mB7xUqJaLHLLVnnTYQKXdSpaFawvqxpjefDaDr3F11Gw9ZskZnJ",
  "key38": "3qMZk1dpcsZgZKbzjwcuuUUGaD7SWmcHUiPsAZgmfuEGpXNqUwKKt6sB8edndz7QmBxz1YdzpkLP7q1dDWjdyAMj",
  "key39": "5t5TwxADJVJozKKXtxRuBXxUbeM9ZVjrdVTftohoYVXG93e8BhL2ewMhY9UEn4oD1qrbzLAaXb5kiLQwrjMCmi8d"
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

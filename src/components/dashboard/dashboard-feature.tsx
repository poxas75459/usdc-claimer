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
    "39MZoZWdDPFFPKyNkm75t1HeFRuJRyMcXiUZsSUrR6qWZZ8WqR4KJdyz2S9HV18DZ4UH7xU1XPKepJojUsyc4mfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ZwGt9JSU1VgzFkX8WJ3GBqvbMM2nzAMRCPA2XHxtzv9tV5JXyhnP1CpA7tSRMiQ1QujLSD5d22TEvNbdCF3DLz",
  "key1": "1cFECjUYA8MkrPZnPktUgZzjq9QYPx5X5MBn3NuK9tScNJyuDbPD1PtFKq9ahhvQ7sPREe5Ewb2xjcPwxJfsG3Y",
  "key2": "33xp7brf99yNoVjCSSaBGdUNHnBFnewwF8EJcHw58ytax6wD9QKdtovGTjHXVkk3VxfS5dCnjeKB3mc62ohuxhdx",
  "key3": "5hJU8UiEd6mt98mYM3XrFKLE1bZkdiqnCgGmwUbAcHcdu1A1z4FbjcjxZrtiEStB8n8JbnLe3J6TURXeafwhRixk",
  "key4": "1nAgjJ4dJQyTZn9n5Ys4dtF4W9C7R8pgRuargduQZxcE5V2eUtaQGpYHHqisFc5tJeswm1sZpmk9s8CCPv5PkxT",
  "key5": "ghegs6ZT4dPXDYsZLzen78yEDvBxpacN5u7C4cdtHomYqj4biiriCoHbstbkA4B3LoGupiBKy978mRfUnt28WK1",
  "key6": "3Ke9yuULJC1MxLLGpGuD8VakHvjhFs5nRLw7UiTx2v7rDqfTUnvR1Zgcyms2Xqn6nP6m5tRpWhfwBbyKRhZW9mgP",
  "key7": "TPJpC67rZn7YhgQFnfucZ5GkzuuvoXjRGLxXwMxzGLcUFGpebLWAfDKiSpMsvzg7TQCLoNXjMCZTkdTMYtoWWKz",
  "key8": "5JAqBUd9JquJBSxjjavQuKWrFrBGw2PstZBQyFUuvHAFRfy7yyLtZzCwUV1GVfuSWcjtp4rGCov2swVeqkFM72YK",
  "key9": "2i643v6Qo4PxNa7AWmtJR9x9oQVMr3sFwzHHgkeo1wHxgtZjSCJT4qWCgdmxgc7igM87fK1onXf7ke7EfkYUPKxn",
  "key10": "LK59Rr7pLeq3phTwkcPFzUZk7T7QpWPDAo6KZoH7JtMvjgR2SbFbzFSJhidi22BQq6WMyXTzYJUspiGijYsqJ8v",
  "key11": "41xGatAvyZCELqLqnsL1mYVHuhGkqcqMDram5nEqkCPKoVXjZyrNJsbpy4JLgHtfK6CJ9cqHimGY6CRsxbTRmzrJ",
  "key12": "kH3aqnHPd8RhEiKRtJEgg4vNsv3QszATtXpuB4iNq3uAdB8TEmYhU7NU1Ej84p3ZPcpAPPKQg9485cniUaeER3p",
  "key13": "5ruVX8dG3BW9tYJDMqybuFw659wK5btKxSdtPGEu4vYHfr8AWZtzHqLiH2MCg7KCq7nNowEwCdv8EjgVM8mr11Er",
  "key14": "5gtcDp9jWKSxyyiCQDiXcNWk4K1idR9PtwbkpgSx1kA2QxkswUimPzsXF6cPML5c1Wyj3CMhgnwkqfvqdVBUBTSH",
  "key15": "4tDK7SdSgtbiVrXUUcksnEHYzNnUKoBMY7XfuuiFw9u99D6MMiZWTpqSdnqkqnmpuhq2Uy7c4h2DXGiA9kBjhxQH",
  "key16": "vhSU6aHF8Arfave22rp49CZMQiFoMLXvoUjAEhGbERrjwm1sVM3tXX3kG39UF8LFCvuE6fZ9ooAFVdAwAQPmRSw",
  "key17": "5yReft8gbf1VR8UpXjx3sKmof5MSZcKyZG9rPRVCr5PCwxb7wHaueD7acJhA9vNViSspHc9mLGGCQE3Ni4SXiBry",
  "key18": "3N4DXxa8NiudhVSNc6ieQS1a1prfDAHUPQ3bmBM3C4nArQ6x8W3aLC79taWMqXucmBjLbQYPqCvfPdw31HWA3X6k",
  "key19": "3VgE9WaEDYmYfqRksjv5D7AS7VYea5mMhW1pm75S3866rZ1pQZmeEDRwnNZbmn1iiYySs3PH7T74BuXnTPSsEKvc",
  "key20": "izGVAsBrAkcmWyVaWNjC5j4xod3M2ibZwTXTrmjaq9Jt7jXCWoAd76diPkpNxv8xVC7n2czdMwbH9TzVy3CFKwB",
  "key21": "nQ8D3GAn52D22VviorsWUGbKv1Ms1CA7sgkgd2K8urkqaSiW9ToBHoNKF8yvsdi6AuFWyAQXWtSiycVaBLvMy6K",
  "key22": "2617wDUcfRxiDg3fzaSGNnc5cx23vC1tiuhoJXxnNZAuCg6aFqQoNRm3eTJqmRwJPo9XPTMwuqVHJ1HBuKzZNt2Q",
  "key23": "5z5bxc11tsWcdwUUXoxgRUk3KKnfRVxc6YGpByi12rcT9ufYMsDZLsduDNTLu6Wmr4Ga6YdzXTp1J6UxzakTDg53",
  "key24": "65tzudtfKqYwPB6gEv7JiMzGuZz8QeKz5j8bWJCZPxfuPpJv23bAktSgxCkMEwDmfh4P241TdycZWnSc3TbdzDgu",
  "key25": "5VYn7st1JgmJX2GjxWYnmn17n6jthYjhT42o4KSVm38jxdXzgNX6zjS5FjUVXLtCza9A9WooMtc4VfMzd4txprFJ",
  "key26": "4kh9MYMtn1KWriafw17W25D7DacaVDJXv3m3RWTEiHCg2AXRnN97wubLVpHyMwPfQ2u1tFWAwgxZ4CGrHkCriRDo",
  "key27": "5jXo5uaZm5cHw8zdASfsySaykS9D2dJqgKhsvGYxSLmQ68cfcxuwjBkGmbD2wqjci5XmDGmm4gCdsvuwMDzRpdq2"
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

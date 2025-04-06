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
    "35GoeubvReuVkGUY3n83RUu22fS3CReTZNVhL76Lrhn9pMqCxFaFEZio6qEfjCCLQy5FNXc7dMdKtgWzDiRjv3Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7eTtB8tGBYpKStFFWR8YXGisKo6T9WxQU4xKYL1qhVvzyF7525HjpvbifjD1tC9twMGQ2QLswLt6rCFjC6XbBbA",
  "key1": "5wCvgQ34aDhcCFBB71m7HHeG67AvBxaSKXCwVaLy1wjUAQQ1jZP4q27eD3UAtayEH7CLUD1j3Afb2RZaGTVZBu5Y",
  "key2": "3Rj7Bv2Kn7o7FQ12LoeHoakPrR9a9pRnDxkuqLa8iVhkBTriWY3nQq8Pwi5JAk1d2xdke4msM4g9cDxz4n83367g",
  "key3": "5HxNCpMMPJzMJTqKmD4PTNzkhexJLJbRvbfdeqckon6SRqkZk1oPe27fUDCd5P8Pk5MN527C5KhGFb3kDgPALGrw",
  "key4": "5L9QFA4WAFmQCYDSN6qQUYNDmfjPmT5cDZQ4cHt12uovnFMqYU1Q5VQEiDcZMW9XgoQBmEGqqS4PAGdXrHxmNvFf",
  "key5": "5DuS4aWRyKp9gSVwFs3KnDVtYqN9ujEYLW39vsuepfhLq6NSdLwAtKNcqni9ekxiuDCr3Q6ffi5E32QmR1q7pQiq",
  "key6": "37AVTNG7s679SFaBpBEWNtRFbgJoXHjH9GNky4Kk932hhuYF76PVMMJHEKGLyiDMKMHEKmJZA8WESaeJYGZZL1iu",
  "key7": "4i8BTKD976L6MudeJgERB5VMQsGJ8UTWoeWo7CnXQw1FURNEohtt2qSit3P5VTnUBmUKqYfuE8gBsHoyGFMuzthe",
  "key8": "3TVSV3vGk32qEQGbNRBRTUc5GuE3n4ZffbFBytitr5mJivRPCx8uRZYKUjhEQxhSDXmm4HVuZosbVN3aHPg8nMTg",
  "key9": "36CBAUCbaDW7Wb63zZqrbF7T37LiJCDvfb7riGZ3pNb5pZbMRuVskjQJ51iYAD1TokMPW2jFMtJQKh7EMeHsBbPN",
  "key10": "411EphqJ2SD7tkpfao195qXEX6rbJ4MnkmqpzPFgRWQuwwT4cNx4ZSP4M5tH5iupjpAXn2WjyEoXBXgQvpRcR2SG",
  "key11": "4jBidGvt5bK6WZLGE6rGi7zGjBqsHB3nUk95vDhJPorD72nSu4WXGfAT9D8VPXZemHn98GUnNahDcfVUVD9xodYc",
  "key12": "3AygqA9d5m2cExFsiHrsBNXB6mxXv1dMqwU7uFZc7YLeVdNLoSnqX6JX5wk6jLcvxHhR3ZeAtiKVoNxxiiAyeRdt",
  "key13": "4KhBjNkXvwp8u1UK2YCFUzAf6xbUEow2wFmpiDKVBc7ZDPh4Q5Uqb5dwhkqDfLDLDDQciWCvqsbaa3Yc5mv82jHc",
  "key14": "3EZFFbtqi77NCUg9cRQcSzws82LduLdd5PtwBU1FFa2FAR7E2i6dipeNgdCFpcvA9M4NCM8u9zURHwYefgQaeLTa",
  "key15": "Da5JN6ijEtuW7sizXSxtt7f7Qr4CQLGuGy8A1CfZxbnG3tq9D9rM8jqqj3sSzFJA7CX7peZ48KeNMeyG2o5Pr1o",
  "key16": "24aScbEuWqcTzZMxxPUyB2L9wFQeJdGo541csT3SzpRz7B5R3AKnRXZUuY5WWGFgcSTRUbUzCq6scnf5CX5B2RiB",
  "key17": "HKRJEbKEvWhL4eP7sVV4MaoTAyjgKwDZ9rXNHJEWXQM6LgT1MghUW6DSoWTpXcD3a64K4o7xnXzn6S2gbuqPLRv",
  "key18": "43X3V9KJTTrxgSSPPgBvq2HEc4aoKPVgYi47sWMq4PyXc2TSSAEMz6Pn2oJ2gqKSBJZvhvWVjNBNA995BspTNLQT",
  "key19": "nMkAyxskH9wTb4NMS6iLBoiWE8C5WvENfyybNPo3fVyLK8DhdcdSPiXQec7VUABDFEs4MV86P92Us3YJEmFmTjT",
  "key20": "4diHB3DyeR1KvLgtWHffeGzxkTpC1uptNH4vQsJtALbu8svYLwhScqwTip2DnpeNzy53Wp8QxeEdDbQKDmc1y7bv",
  "key21": "52EvJFrN6joi3EivLuDA3MjtxcjCAg2nW3N5N3Lnjqh5S8RZ9EHpudhgx3s96CaC7edSFE1dwSXx2AZ4JTZ9mhC3",
  "key22": "3SG87t6LRUtqGqGPze1TyAHghg1zNACcUWrpiAWtBSae5eiAbtbK8JQCfo154egiNz4ijfSkXns1W2eNpanpERBq",
  "key23": "39oJrMt5XehKUu78LxsQZ9HpifZ7JuwD92pnPjSN76D6nbfXPv17MeK58igXtTeWg9jNEUiEdJfebNfUoPM8AYtn",
  "key24": "R2VDxXggrTZwFjgCppN8CWZxNEsb6bCzQfkaxrdqmmr3Zu6g5g59UbPDVHpmn2LjW2KuZzCcRuoAjowJoRoXxKW"
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

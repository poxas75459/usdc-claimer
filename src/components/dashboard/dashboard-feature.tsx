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
    "5AXbem5uA7xPLyUfYTDi1B569WWh4NAAfo9SCPo1Q9rrYJEfzYX3Gsp9vnes1HFhP5J9cC738RX73NXeUZ9GBEbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LrGBMp394JmcXSfuLr4HAZRdGZJDwHQtNxAq76NstydmBJ9yQhh6vATQjgPDuc2FaEWuRWDuCzeFrRbbs8ThcG3",
  "key1": "4KMX7FoGzLPX9k8vZEngEejj1zSB4Ckwz3UqDRMcSuuUqcKgvVSoLejtVsBhYrNFeYErEAzDCQjNRZLzjtFZKKLL",
  "key2": "2XDDyyYXxMjQ2mBas3FtGRRZ2vB7f9KXDF7Vojr9VmnDd8FXn5Trr3KEmnuYpDYTpwYx6rqoYfENHeC32F8DJiuz",
  "key3": "3Si6niSoo8W9rvGcTeCXrXjv8FPvBNwpGwjEhiySC5EeWjGt1wA7f7TZeavaKCHz5wu5TSFfN41uwQqHN5PSXcBn",
  "key4": "33JfzhhPp8qGd9bSQfQagyY5iUoxWi9gJtts438AafZxCqWAHY5hNUDTHPPVeyPJRHCmpBCS6EB3jXBrHmWrHqfX",
  "key5": "31FygwTZ7J4CchxP4nJkBxRDutEyU3mpGPMaveXoavHMwqmVZVGu1ATe9TyKMVGeUGr5qyswGeihkwvoAY9y7Bc5",
  "key6": "4x1UBYkno1s6G7UbTSpyeauv7WR1JgjFZLJAbwUBHpxUBbbNqsZLrY5LHg7z6h1hQkb3JP7PTgkPCHKsvADuY25E",
  "key7": "kXxGmaUNnoSXx9M3QDwjGGSxRj5bFvzqxuAdVcPcEerFd9veMRRgD2Q5utS4Hbozmby5guwoR3TiJdHk9Si6t6m",
  "key8": "5zJnvwagzYEK48bZiKErdthG5JGtq5YJBrzLTNdwS9qcZFqDcj2UudtTcTNH62AHpgWXwdV6YhRwjYibLBFcWEbT",
  "key9": "VpynsJvae63ocwbN6aF8Gunm1N11XJ3YzheHcQsaDbDgP78M2GPEBx4WmKFzGsPNJbCsqP3Z76ZrkLoyTFiWs6F",
  "key10": "32bSvjwayisKcUkV2CVW4KF97x3TA1ECQgQVjxAunNXiwYYbswgjp4VbBGUr4Ubxgteh7iYyqZ6xoAoTKQA1eoP7",
  "key11": "3nwHYkMCWdE9kEsjh8hytVkRVRE5ovDTL74BUgQ3DYK1pYyKp2sGDPEoDCX6Kq7t9PYmrz6NSJD69s8wKR5vK3eS",
  "key12": "3dqXCmygJ7j7MGjmxa6h2Fs42HQKipGYt5WHDBLarJ6mfDLvADsUmnZx43XnuENf5VZhBgda2FUzhDp1c9miwtf8",
  "key13": "3NJFFtnVBMHGqwvFWk5tm3RpZdpErxYGyLqMH6Lwhn3RKzECqPQ8NA9BgfWuiT5YawvVPdsnUSXnibNZAzN5tCJz",
  "key14": "C35XZzWVCMHL5C5wf4TYWbFaWvcd9qpYjoiUHoQ7twpZUVR1RuCwemZb5du2sUJB3pich6NGjxG1jbBqsZeqT8U",
  "key15": "5PhK2NZguj1JUBVdwUq2M6Y5ga9jgNV4uXZ71fPvetVrWbKNyKEuDvBAnu8pbLsGuBjV7zEurUn3jsB8KoYhA8fR",
  "key16": "5NxA5xF6o26Xyw1NAXu5eoK3ERFhFXUiSdco5xWtgKmWV2fNLFPxcwZomzD1YPz27yWk3HZqUzzfyNiAd1WQCkP4",
  "key17": "3rWgiR15gbwHo4qPriz7NU17Hsx6XFDBf42VETtKmLBfF5zJ8z3dpiFuruts5oNK5AeLFBNqxUGGW5isC5ajEoWA",
  "key18": "5BDwQdUANsCEdcfs8sF3ggBR6pqKfLVVtkMBr3zLxWv4HqY5WHkFsico8gW17k788Yc398eRQp4VYUSgK73U9MKZ",
  "key19": "54HtCzKHpDzNwi6AvspMfX73sUixjdW5ttw6K3V8iwuU2VCoJgULsZp2WqwW6dxZVKKsHnbLTYHE1tKTthKSde2n",
  "key20": "34JTcqxNoZfwJXP8buZCCUJAML19gWvAU5uS2mJMjCYyBee1wK169f9TknScdcp5ymhsJr6qTd9wEN4G6dhWq9VH",
  "key21": "vDUQn4378KYGR3S56QVRMPjcZ2775nHrN7MNiwzg1AgJBGiw6hNLCEYTw2UjWbD577ACoakmmjxTtvWfrkHnnWh",
  "key22": "88o23uxXdSENYsjbimPMZJRwAgw2Pz9XJPJwuHCAQnLbXhqjQM8jgV8QjRYpofq4MoWJwbX5okWPneoEAiEskR6",
  "key23": "3GcjzfogYAHMiJGGmBQ5jJpf4yaUCgY6o5a69EbzQmRT7GhRywj56czcaGY9SpMF4hZrTQia8r7tk4gkxTnBxvnU",
  "key24": "2hGZpPnRgb3XcEZXp2YDDTNVjLvBR8tp67gT125umCBmmZT6WPDLx39L7y733uYSzLy8prrPyWiSJLU6JPNb7Zze",
  "key25": "3QwrVS6Ndir4cSiuheqtdFyquvm4KBDn3hUmL3Sjk8Fkqix9hwyD2do8Kdr7Dvox78Syia3snxsucs6SCkfwkdiw",
  "key26": "64EKqNrnGcf9ZcGrMLVrKFxbgfqWgCmCMmiBPyGp4qxwgpQwQZ9Ypzo47bT1fFNX2UTgGQ1ay9rtwGaEKdKJZcir",
  "key27": "4LA7zxWjQwhoVZCUMdQgHLZYhTHQnhET4TNDUL3DwyNZ1YmMEqY3SFtkJ6oWuiggUs2deEAe3pZ23qnsumiCZ9iq",
  "key28": "2RNePD6CqxENyuNZHMTYxAfNq9i1rj19162Eupbo1e9aquCPcDRLmPYLojF88JLkahN8b2yTEPxKoxLUbRnsriuy",
  "key29": "erqytS8FYFnGU7hwvX61wJoHsageELpSwWEKUmEVWuz55wPQbjrqCEzddsaQJZKiJA6JpdijYgNhrV8gBgoUejK",
  "key30": "5unbdkg9BB9fNk4uLBgEyVTgtWTv4pz18WdZRn4UvqL75faZYLkS6n63rRfxzh4x8xVTTzohqXg4GTvLMwKBZUB6",
  "key31": "4FwhiM2ZQ6Kq9mduFCXE3uaWqWQCSTfTR65wzJrEFp6SGJXCNdfpLzhtLBAufZNSQpFgF6AaaGu1tWPSgh6Hyd5Q",
  "key32": "4eFthkVTthoFjcNqKqLL9u81eezNH5tSzzVPjhuhVi1CG2f2UJghyFJ8bjC3gbzsptPWHCGXeJnEkLZsG9CwgTDS",
  "key33": "3ghABXxcr4KRXaiZBpU97tGv48QA5ttvbHDFoG5kZhShHxKnSGvexvDpxFmW1RM8h8rdABCPf2WFBTsH4vxYf53V",
  "key34": "drpHR7T4p5YYfaFeWVrHNnK1E2kiXuwX6GoUe7Aw4YiHGdZuYdXdcbquXPRLdyKJ2CLMxBbfgzso5N64pYoVgvf"
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

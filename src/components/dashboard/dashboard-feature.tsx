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
    "2Ke5yqHDJXQUPUekPepx1CQKVmGDwKrJbiFefZ6qncjdhxqnkLXsdkrx8DYZPUMKotHkcKqaKW8BNQJQofqPeWWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZnTgp5u9U3W5QG1eKbfKgtTYZdD6pnykCREiVfAXPfUA8tqi2qViuZn6VmViZGiRNFp4DXXzgn6ggDbRAdsxnJ",
  "key1": "2YdMmyGYTDCfXcYdcCL7fUYvpqzABbbPSr6SRUu3pQJxbm84QxnRxt6kwBZgJ9KkmGB3JamtECgcX9WLUbHpkxJ",
  "key2": "5FD9MPaYdxn5SDTBKGPrkmZ2UQjGbLLSbS4RnpiN94e43GRDQQvPEsL5uR81fqtrTbRrECvoAWoX9naFdBUJD9F1",
  "key3": "4aKXkrY5sHkwKKx4erbKNud41CJhTk5H14cBbNSDoviK9DQ57GxvDZfz3P2E79dc7BhBGLsDzAaNbfeeKjDETet4",
  "key4": "2irvmm9SLKbdKMJ4FqgL6D24uVxf4ys5HdwaANVsVtGokabtj8P1fCQyQsVfUkrCg4raesP1juscCV5LhStwGjaL",
  "key5": "5J6NNG5vPTffFNXwk2CMPxCvwM7rsKG2gUnAptHuk7dZzRLpLVggkHkxVpPZ1b5bShPE4qTP35fKpvAaFzV5kkc",
  "key6": "32TxaTTxduGQ15S2K2VdqKUmpKLfpfXv5kfVFwAvaPSMF8m3d7ooJD2deuW5ZEkjPpTmkH6ncHtasMzamCXGaA1n",
  "key7": "32bEcBP99ZGQMpZSQvEkiocDFFj7E4woBvWxSNCjRY8VjbheWHUWhu2xpu22vGcqDmmKq2jmkQfodpBBzpZwy8o9",
  "key8": "376Qhwd49gsvwAVdhZqSpt732iMfHrZbQbCgJFwqgmxEcmRQDQwjSKjyjTPecKXdWxRfaAWn6USdPkCfcrEj43Gx",
  "key9": "31F7PwEsADEWeAu9HNZDtkyrPkLwxqRgkVCCRB5JaRhhQDzUEkafDj1G3ANpji2YBXoob6eWDLM9PoMFJEM1iSF4",
  "key10": "3bD15JPetvd6mBkrwDiomDAA4mPxyJbdoWC4bkR7DgM9ZnEfNadsDAimeeyHrb6tDzUhxatBLfcyWmACPHhQyo6W",
  "key11": "4Ssju3izYdv7R2jsfYAUxzau5HfyaBFihTAQ2eJZkz7WzFSU8scSbbNmQciCKNxmNjo5BSv2gHZXKeiykKGQEsLQ",
  "key12": "57Ui7Zv98ThkejLZzhtXkvCFfBqVi9q58twMh9vTQMLSLBcL7A8EbAsCzQepwmRXyxQwPBbTJJE6fBkwHc31Ebzp",
  "key13": "48YfmpZ6MtrVRhtHvpKULaSpUbtV1hcxaoBbSfQGVBzbLYfgJ2H3MN53dEvuofmMXv89uAeixhUyguM6n6RXkZCy",
  "key14": "3qo3Zj5XT3wZNYGE8P4ZRShFzVP6knNaZiB6i1i28mLe1JtQzxg6ZN1HtvQ1R6eEvPmrdJkymGyHsNAkCVk9TQbW",
  "key15": "5ENFrFHFPg76Rba25RHNXq6CPaQis3VeXKwQkAv943LgzwSNmwnDtC7UseoBWYWQ5bV96CVyMQngPzuwjd1qBRbS",
  "key16": "zhYSxMiBs3j7bXJH5HsjaXwYbuiqmx8V7GGEAchc2AoaXpcYvJ8poKwnswzrRHT66uRWuawo2KuA8RBvWJFWQYV",
  "key17": "2X3kEqUqH3eh2PjA2VirNhrYfxn4z31nadRt16VLhEREAXeV4KYcG8fRa1g1a7EsTWXJrGSjfNqZ92HaHpbKCXU1",
  "key18": "3tcDRon1wWoXDruyfuMymA8GnCqvegVNRdhHczhSwZgczvPsagx6UCDMwszyEzdhbWcmU7JuuYjYLaccae5hFbLQ",
  "key19": "4rSDoB99qqdCyPR1qs2YRoYD9mamqbtGiQpypq6XRs2fn4TfZXZaTx9HCjGbepDsePmiKTnYzDe2m6n1YWvKEMa1",
  "key20": "5YmpjdUJ5DJQCWdZq4fdV3VgJfiZnfLCQovjuWMjYNo29nLTSJvKRtMoy5rAeUnYJr2zYPJiLD1W9kQkoiG5mPWS",
  "key21": "2Ghw5XYg5WbG4Czz3btJQsYzYuZJKFjiVng7ZDG6xFkYJTa1A6tadZczXJAzSmz5muvMiXKS7fMi6VivknmeTTUC",
  "key22": "5g6XaUVQQq6p3EEbgthzjHYCpDCWCMkMqstd1zA9bXutYJA9otPDU3FqSNZCD2thHbyM5ch28Eyg95Amf9RpyNtS",
  "key23": "5jJeiYPPULXtKcxWmqpofJ4PWLoGLzo3m5wgk3A9QmMSvd53RAau1P6t4yHHFvJcM51rPdJ42TM6vEw5J3he5QrD",
  "key24": "D4qkToFHmjNKxsZXrrRNz7VrF1sP8G5wAakmig3brFu2ttsuq33znEBXRRCku96rPjNHwYXhPskgpbAR26rmLEG",
  "key25": "3e8M9X1XanDZ9m64pqsLmvDT4dKdJhgDJjzhxbVLCHk36jC8KLzzwYgQvTxuDBNoBmBTkV5wpn6tyrdZaEG1K6fA",
  "key26": "3pPUtpvJZMVHbHh5DqVY7DNRW6T6VHiS3J6qByDKxhqex4X17vrL5tNqoc9dDzoGcak181VksQU5rL8yJm5aj64S",
  "key27": "2MZXca4EQVGUWL8nYMGTPG277FKkt9XxkW1fEbMJoS9Cy9KVt2wCSsAzrguZPXyRCV7VWiB3wexe1SiDoLx5zXnm",
  "key28": "4nNLCxsFxLJLLKNeXx4GxmnnopLnd1F8d3zMafZ67tL7KBeUYK3bsS7Jt61vZp6Z7wGedzRwSXxpDz4UrF8SKsWG",
  "key29": "5xJjsNsk1ezNQidEgLLLASwqBWpAzY9Uo7UqzPHvvLP6D6kZehJmzgc3hKWLYabB6keYAL7dPNeRHAiJEcCbXxE5",
  "key30": "5LqWiWeZp7395tLwgkNLnAr4h7cEHyXZRbfhvoC2e3ZPmtzKJ8V8qAMH9xzEUAHnDZEMU214GbomS67dZLGBir8j",
  "key31": "6sfPeqABE2G2aQNByaxaRkgoiixXRLAw8boPvSHCwhqdx7osgwMosLLjyXa9bfPdHq2GbMNr94pjgnDN5zoaw1o",
  "key32": "5sQgUm1mW9TDtihPiitn7VPHyS5NNsg2zVuX53ahYHuLSn7TUV7YPzp5x1LbKS7wMwtYXXieyqvoWJWf5CG84qdT",
  "key33": "35GgyeTK4AMpjnY8QsdesDUigQcLrVZPRsh69P244jSLPixKmPjAR2RUSeA3eSffj2oqRTvo3jLkmRVQUkJbmCKC"
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

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
    "25LQ5WgasV9snm8AE56fZiVq3jvDGy3vBAkxjL3BLzZfTbYM2KVjMFdjHGaVWh7r9wMuoXLARzqEwKc9GTDmTWsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qa1DntxZCAsEFiRVaBtGLTRqC7TNpJGARuVZTKZyYz8uVpqHUQYg3HACCzJgi8NsZGjQ4F9dQWCzSY8YYwQbWzn",
  "key1": "WxqHxC6EYAXczZS2bkBpgtvBjdzjAtThgkGyfgWijYKjsVuxVL8yMcSrCuueogvBz3i9sTCn1Sr5YGcZpuqQWLN",
  "key2": "5xbqFC9VS9kjevrP4bTruG6Q63Zj48W45VG2E9mFr8bv9i34LghaE5KDcmBJjmJZ7arBREAka9utu92KLucrfTyx",
  "key3": "44W1qPLaMjvXafsZgZgo8GXXAscvPAhkgPq4dRL9bwW5RSGpVqFhRzQbq7yxY1qBSh41Avy5GwNWkT27Td5tvRWE",
  "key4": "VMzCpTD6d4vdXwy9jVCka7xtoFa64rWbZvaB3cpaygTPFjjhxANkeQJzaX8jTiXRcva6hkUWMnbj32TeQmHuTjj",
  "key5": "2v5YkZe81YMae9kFdnA1fxhBkpteD9SG6WBcVEL4urRKE55eaaMBRPZPHNKx6YFpwehptXVij1mxeQ9ASF5gaajP",
  "key6": "2UaayjoCdi13ixQzy3Fiu9y4fFEe2r3i4GABDky4z9NJ9ntYfyz34F7wpmKUbjxLEXYJxCPVQjfp48Nq3bsKtCGz",
  "key7": "pxHtpHi8THF3AfD6CWubPxcqEFSuwFR2Ae1SL5pjQYXS3VbuAkfvDF31uL7upQzbEHPYozA8W2CDz8heaW1v36Y",
  "key8": "3kTqKoERGXvs95V2anatba9sx9vChHsggiaa1q6Nmd3XhmRt6LAgzD5H5v8G8RsmfFFZg6Zs7622pis1MappnKpp",
  "key9": "24hgQfQvC5otFEKyqQ3gdm3ieHwEmuLUf3pJXSYAr86VaeQzK7LAbRTBZxsA8fnrqid7kPQXPqF9Y7oX3e1JaD2X",
  "key10": "2iC6pJLUYcPyEnBZ3Noe11epU3sZ8fqX27sKGyDh9F26f5FFSXzRUvucCf8jtn1dGJagxMTqJPhEip87GbroP1JZ",
  "key11": "56X9Z2yyeGHbcXKokePa7N9oh5SNdYSd1XhXynYKaixmw7F2yoQjBsaoPQ1KzRzKHKM9cGah9MgLDUtX5UYKu3zQ",
  "key12": "C5j3qMPGQNyusXfayu1ygm7mWdvonJNKNHVRabGsiGnyfvCWnd3TPWsw1Tm6QA3edGkeh1LPjhA6tGF96CPu1qb",
  "key13": "4bsHVrK5Yyd5vSEsMfVXciuTzcGkMrHqLR3X8qk8FUTBi124cxYYRV4WdH6o1RG5e2YYrY5KmmNL7hghr9cGPdrU",
  "key14": "2JUuQgiffkyYuRHLKF9CsoPsydLmFJtEkNVLNkoLRfQoXkmbwndJrrZgdYS9Biwm3hvpFgcTiD6fZsMMbZR3fR8N",
  "key15": "4LhNvsRd6aAXyxMdd3368H2e7q2VXH5odjUh4uqHofUBHBYTnjdv9uSBzgrTu9aP4hEpoVUknVx4VvGpPGQYGKE2",
  "key16": "5pTYhZGYS4Euk8nLzcY39HoNYPEQog2r5auutLNVwUpRyJAE8smKTqs1ecaCjLuGNV2ZCnjoYPN6pK5trUVgF3d5",
  "key17": "3FkRSuBFdH5Vj9hH65SZ7AMS6wbJKojvkaaBhHf5y4rjwMdUphJba5ifduCXYifbisyYwdMrea6GLXnHnAHi69r3",
  "key18": "4Y6NCzqaBmZqpHgGfivG4AsdKQ6jiZ7Y2bfNNv5gLufW9oW9PeNkYiSfwQY32guQXNYRir143ByUAmapigiUhQa5",
  "key19": "3Q1kQa9ZSXprTEEpkBwTH4k3JGFaSvvXioiWaYpLFFa3sVdVpKnpAjwNHenqwjjjsg4gRV7nzFjdEbk6iQkqZAAj",
  "key20": "3b8GpHeAJN78WEymXC3oJ21XNvzDPvTwLsGyvnp6tyaNsXLBxQzf4hZTghQvzH2aduq5LMiGBvjY5jc39KMGB6P1",
  "key21": "Drn3rFEkRWEEdKrQ4PEFZgg5pCs9T7wqJ6D8zFCBQMLhuPeXxaiUqia72FcP33G8oLJaqAo7qXC5R8jwoKWKEvn",
  "key22": "TDMKv9YriVbEcFDuh5SFDsU3zQqkFz9b39b9kc6WQEuZQE4XKvhRGrQDEbYs1oWA73k8K4P8adQmpC6mWeFF8Cn",
  "key23": "225g66Sgyrkg1StPpFc2gDqmsk7V4LkCkEL134E5hSvDwxwfoL3baVjuchyBbDBAox58wVtjpdhELmZUN9tXG7eG",
  "key24": "2w1LyJGZFLpgh8vKVWp3QkN7CvThhrb8Hgixg3Xcup9CCkg6aMzjhykwdzHHTkv2HyrpgmzDu4zrLXRXRM8NUHJh"
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

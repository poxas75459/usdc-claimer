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
    "YeRd4qSACf6rXXcBfAYwGStrUubrPkpZsbA4sTeX4CaFGLfJGeArJMHpsjEuhJaTGNSAtrvz7z7YDHCrAF2Efrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59p3C4S52ijDTzxhr53E6FjMDsv63Hjst4BK9ff5PRUnNjAqFWm6whxaa7DNArBPDgo8s8TdEGXdG1SsCYLow8Wp",
  "key1": "243ZFzLPR4oYPjn5BBRpGksUgPWdv3iz7Btp2gNemNS6ETxFprvfmtpzJ4cVmALj58AdtmTErKBKkoRnvAEehtio",
  "key2": "5E9XkUDuiqxDKUeNhcsiXA1iK4RT7F76VyYmkXg7GzTh7UU6t3hUV3xca2Go4C1BBXZhGhcA9LdMwBi4SidC2vj7",
  "key3": "5xUN1682R2XiyZwsfyKEoa8NSSgjd64zbzX982yzkTFGA1gZA3YTtmCedEUniXXvtX2LPtKBP76v7NDis8o744zL",
  "key4": "2gbU6zmbBhgrcuUFG7SdvMrg9YvMgUakKdP15yvTj5fTphPaTjFrDoYXqSbutfhZutnqUjTNJNJpeoWZubebiTEp",
  "key5": "569JcJybJinDUCHz1hyMsh2eMBagG2NaB7XyA6X8m1GPyTPxxfVpS9NB2Bg6VRPfaTWxxZyVCNr5d1QvPC838A51",
  "key6": "3bMGMdsnnSGHSpX5MSUCF7QkTp93DotreenVQZir873m3RG2Ymk35abqcndgWXEp84a6tuyX76KJYYLsQ3HUufTQ",
  "key7": "5r7KkBNJR3KGuZ4iDny3LvVxLnQ485ZgoAA3VMdjxqBzYEgTHqgey4Zk9Rp9ZpmFrGMJ6ZisNEfSjTBFjxqqwXB5",
  "key8": "2zfaXngtzyjMjRUHfodX4b7NhCZYoNZNebXuDKxF9JaQnqgYQKoU7SsZpGKpdeunRxqncHRdoJM2eMSSWc16Hibm",
  "key9": "3c4ndWPeEf8A7gvxyDbkDyx5RBnFVJDRWN4JeCtyxSFXUVC4bXB8C4JwNp9e3W5AeQMgxjVznwskxwuJBu1MehrJ",
  "key10": "5ww23RJD4CUy4JxJyEZ5AxGc3iaNHr4tmTFGTbEcnaNtgbV3fvpLSWxX3z14LuVxVf2UK4mUASBdKzgECPEyiyvy",
  "key11": "5UYD67eeLFpepRYKojBZGU9TERPD9s8F7DARCqVmm5F8mvN17iQ1A8JYuwYdCSMaf1YxhS6X1nkCisrQKLxtnqNC",
  "key12": "4AjJWjDLKsNsacY6MJPqu3BMKohieLLBH9X44sFPknR44CPwKD9WVgXc6rhf6c3pLczVv9bwphQMKaaRpcp95v9q",
  "key13": "5KNXMhtyLajThsbJ9qLx9vJqBJ1ZBKnGDhTPfqUoLck4S6ThhcWnY6px68Ru84EouB87AwY9VNMLUTigbRiBLpZq",
  "key14": "2cKekauF4R1bVrb4hp62vqdwQ9YGDnWBPqTfoXDjb6jnDHNBPcC6QkgLAiUVmTCSBqXLaiAP3GrNeYMbpFCWsct7",
  "key15": "5JXquLLHgvCuxxkBncviCZV991S1zzRs2kko1B6eu2paHT9tYZfX3HhHX4kMSg9fLBDM9YJwhE5RrAhTkENXGuUa",
  "key16": "4DKWGS7Ys2PQG4Nq6Fg9dnrguZ21iR4XeJvtgUijXEywNCBjhuFhBTB9upy5Y26VNdaHagaQbzttJP9xcWyEQvaM",
  "key17": "Cm8kmzwf2BJdU7hJnKJp1rjMop2pj82Lc8yGZnDNTFjMeG1wbVdyXszJCTQdPn4ptry8eknYe6fvgGmAckREudi",
  "key18": "2vfBxfS8wxaMQtsnqskDqW7CCTruNxyXStZ2K1nsAiVqwSyt1uqZuQ9ZDcfRJUAXwsczXeAsevQPW9ezHSfPgBZs",
  "key19": "X5LFxEgQis2CMKQjGHfFvVVB1WEjXqYsMMojqEGUYCvNV2QgtvAA9bRG1AfTKUyX4YKgqnyqH7vWtCGsvKtG8uP",
  "key20": "4TbsDtUDrhkEgERgyZLQHr3f8zXnJLHmHSW1mrZNnF4NSpss9eFSCTR8J5S1Gg7U7MbgCeYpaAsEuAytF1BEgjx7",
  "key21": "3dUvu74VqVae44qsmCQ6jphXjeCUYfWxLCCiiwb8ViXTkEzjsz3TTaDmD5wR7BFo5T41ncKNPkP2wA1jBFCGdVHj",
  "key22": "2nv9k3e4Vs1SsiSDWwrdWF8KBdDUDYHBBu52Njo4zT1aLE1wLC2Ns9DTGB1QkZkTifxY5fjC3BGiraqrQmXSZCYv",
  "key23": "4d4zUFXeaf5SHrXJR6GvHFTSoZcUExREEWJ1sF5QPPPbqwQRupqkJKMBp1b4X5CMuPMrjUAjo6wqyB1zCynLzmAd",
  "key24": "3oM8fuPw8f8q9UnuRYHo7oie5wDwa2PqECDrbd2LkKAT1kvrtDw5W9vA3ryGcgtpzD9XUAG4e9WmzCXeFKgomW2a",
  "key25": "4aDztGuuQEjJTUfgmt4kpKii5QgzahQUVDjNUdAFWNT3wfPKvw72Utzp6uNTgxkhLLzHDvpPrYujidcYr8nGeC6c",
  "key26": "4X2qQJpfSWtWekc5XrtiKm9bXHipfuYHasGucxWNg1iBuvfvMGmWqzmTXD6kcSZRMMbxmWDbgFuDg7ZyTiKgKwfd"
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

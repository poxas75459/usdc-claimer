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
    "62hGYgXSTR4QANe6D93MhFV3jMtH4efcqqGoFX2hr1L5CaxqUJmftyHLWNNjaqXzoDMFDjFdyEqEMaas6JCUWKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1fc1JWNqGvXgaeZHjBckX2BevV8gnYa8TjohrV8XsSeWTQe8YVxWtewk7688gSuq54RbEd4vbRrXtkSAGb62mF",
  "key1": "3cBNv8eh4wRhCUBUQ6sSRynSf1qUqsk9t8BeK4osq8aP6xX3s6hfhESNACenTHEte4ENeJc3oekzFkeKJrht4U3S",
  "key2": "4v1mf6HCPABwKMSur9QzGXh2yNdXAMEY6WQuoRSfKPTb537xdAGpvD4NdM6BSNrtD3Ti1cWZ4rBvp54S6Rya66nq",
  "key3": "4Q2ruTR6ggQSeJYXoEqX6GpALXL6urwVUzF26yz2o2EyEEiFw6ih4fhskGAS6YkZbG9Rix1DHgFU7vpf5x62mJ2Y",
  "key4": "62YGGucaMkQ1nf89LQUQ9yy4vhZQf7hfCbXUZVYSMNjNg3U7xFxFiQ6YNNNL48ngPRixWYgeacdHhGsJghQPmDCR",
  "key5": "v55V3uZuYLP6CkBJSgMdzkFyauT2mxkHMiJCJtUQLGLNFyi2ZudNABYznpVHDrjMmp3i8V1Rkxa9JTigvgtX82k",
  "key6": "3RxU9ueSSdrwHyeYjTcGent5VgryKwXYELUrEkSJedKvvXrShKCuvwHWwSJVwLGEd883Sewx1fFEku9fs9afStZw",
  "key7": "PBr4FxVRbQjGFLyqe99xL7YCGn6xGzbtmjkZ5nvkBxbKL8SnYv9bb2KKtWXCK3V8g8Ak2TCNDaBYGKML17rCJ8w",
  "key8": "5ktzRgdiN972QAvp1m5BZiEqUeBQ6xQ8Eg7QHjiKQ7G7WWH77TvpAMK7EuFheyf6YDvPzAmbJr3eQ9sa2eB8UAWu",
  "key9": "23rmSHzLU6GEVT98PEh43njSg8S5ayaooe312XH23d7jVCmh2n7JGWYYDujGdPJ1fXgQ48zzP2M53kBg4YTNxDMr",
  "key10": "5fhL1RQbpdNuKHRVNVrNVpZsKsDKhiRYfUTWqnEB3fJbA56RnKRPMr3A4k6d3eAY618d2yMn23U9AyJ6oZ9xw5Lo",
  "key11": "5KJUfdb82NrsnK71LUfhqfpRUDzcK64s7Nd15ZycA7ddndEzEtrpER6djntJQXvhtt6FA8kdojKVbzMepWRnPQgM",
  "key12": "4cBRd3nDmWXLupTkNA4yEiVRZB5GQpR6Mtfw3Cajbomt4ic5h4FABsW76Y5RBtY1HC8mooNsQy1DBWAopUpfy3EV",
  "key13": "3dvSf8tHpKY4YLhZy7o9ec3UnTkfWNe2Hj3w3sNkKxBJgtD6w3r8zKitAoXwQrGt6ZRe8DoZARUHYqz8ESq9HW3y",
  "key14": "3GYiiw2dEwTN5kegbUwHaMYAcz43t25YGdWz48uD7ERhHtN3KWU6P79fh3pPRFFerjPRB8GN9sNf2DYkrfweSMRu",
  "key15": "3F9Z4r8xEYhPLj2oPKeQsYj9op4jMEUqqbw7hz8Jn9xr5ucCtMyu6m9q6j4rw5iaR5YYcxYkZHLFZ42udxZsW41f",
  "key16": "22JVCfvwsnKLwpiqVVEvbe3u6LgN9ahaxSLtUjQaLRuFNUz2CKy7aeSQCYSVEZ8bdiFuKBawEzYtYLbZJkW15ypw",
  "key17": "3wJQBg6f5ef9faH3kYAXWomEvSNXRZDdQKPejeur4qZUEhScQHJdnVqbNx6dMG5C4JTjYkH9YZtv717ufwzZ63sz",
  "key18": "5cjQLpUPeorBww7j6f5pZgevxamAjEQoAsAtwbptj9J3ite7Gg2yXGDHpaMsS2Bi6H4vza9y1F9J3Nf1vP4CXVxw",
  "key19": "3CyTWWQcGDhi28HUMEJP6eQfNqUCYhednx8aZwnByaUnonGKMYUWHBVjsDH1Jmq1gATxecymPcLP4yb9nKuLzZke",
  "key20": "38AgDQXgPGdvpQ3QizA5kECRbHNMhN41MQoRNsJjnaRt6dw3PMagVJoDY1er21vvzCUHd2QUccZYfzeR5eXYicqb",
  "key21": "49p6bKYxnHPWCgwWMtcykwBQRZKrUFPqpTGhu3WJz9XhM7Brxv3axHm2VB8TRnBUcrD6NXdhmk2ENmk6uq1czCw7",
  "key22": "4ids6fip14Tnx7QXAoH7mbx86vEsPkr1RfCm3gzeHYzQQxcnDW5mUppChR7NdoS1KvVSWwDrDKoK9u36tXZnijhJ",
  "key23": "4m5PY4eEEQKephyMZ7CCMSBEYXRQXSnRigJERRETbigtcg6LJyv1iWxyvGHj9byUpLtPwkFynpfLX98BJVVyHuob",
  "key24": "a8MYUbCFireuXmwH6GZAKSXRuZ7CS8PrZqiq4g6tSUSYtj84Aq9MdMUsRbFo2Wc4rzkMaunTWVhwhJ7J7n6wSKH",
  "key25": "291nUJQmCAFrKCRWMabsSD25fBLdpM5uhFZu1uLg7NMnGCd9jM2iy1E8r5AWQDsmdJbpoPZ3ipShzPKrMtKbVv1F",
  "key26": "4VqTys4MakTdEVKL9k3qXJSarpSN5Hhf8a7XechELCSZ8WMHdduiyw49vNj4o5MBFXxkPHASKS9yo4BXDvy2ChdQ",
  "key27": "4chqqa1aRFvNHX6Nq2PjUUAaXaSma99chyLDiuoVt31dMpeWFVB1Lp5v3cir5t2PkDNZETFWvtHRUhXHYQ7Z7KED",
  "key28": "3Dpnfcd56f9WZRA8xrFsypmkzqzNGfLDQNWMRGsG8xicB5htasyQc83LkEM4bo3aPoXeHJJJmi53oi91opgE79o1",
  "key29": "4fLpYU82JAim2bwN2H3WC6GBa7HRqkbzYSoWxCpNYGKLAKSERhciwS6vbbtFLLYUHwcU4t8BsTKDdPUWrNexGdyi",
  "key30": "4j6SZkmkKbmWTuHCh9Mfsy9BKSA5drdu6RbfcgiWXZEyEZpsE138rtmVWvmuN6Jg3g6i11j2M5eoazvrKdkN2uij",
  "key31": "2r5RXcXqd7zH5Ev7kJLzkJkGgc8zGKhxpAqmwekyqCwkZVsha3xgyqGsu71eeq56Hj2Evr6AMLFsPCETYZWUvuu4",
  "key32": "BgQgW6JFrS9L1J3pM1n2xbycr83JUgb5WVdGDTj1HLqHuhUmyVum72UvEfvxVscqpQXAqcJg6pprdcKDFJwb5KF",
  "key33": "5i3gUEDnichu5gTSxGZNgubbKrKrnk2xkCYDSapLK2PEuYXtYokdxQBpvftkc4VvJxQE7xeVKkLiKA62T5QVLo88"
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

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
    "4uBzApSydJvqQRuzm7du2GpyFxrnMa7h7qhaXzEi7d8WZuJ6oXdRAR465ycqw5hBbaGfvhxYYVyLoLXqkNMvFLhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A3K7qiTzhvT9jMgkgXVsw8CDEUJYHAavmmremeiA3dn2BFRkDiTeZbaf4CSyewdYS3naxvg3Px1dmFUgXDEqNGm",
  "key1": "3T1jmXqT7TytBYPbMxXUBr6tSXHRGioTp3CxCL82u4Dj9BxDMkpL8PgEv1zzG5cGzvAStLxahrdwhCf6fnT8MiGM",
  "key2": "uTF6XtY8m9BrE1nKCN498nbggTkbMrgiqVjohbG8s8CpyCVkG7VVeucXSq5hqpVVnrBWuA3RzUePfeh9LcPW2ku",
  "key3": "3TLNfspu9ManupvRqvkPthvT9vctUNwoAtK1nPAMqjnMRSiiYKzVAjrCv2yqFME6m7BuPMGDARzAMTtAVnU9QvbF",
  "key4": "5hw81p7vnpTzqFHcsnFMGiGCq4d6CAUzMYyaVti8dgbWqrY1NbArrZXgrYwcNrGG5VjFHzQnT5gYgdRe7YARSXUz",
  "key5": "4BHvWLmCULoDyAE8DDvGDL9xoy6GtH5FY6NKXdFhaVvrRg1Swb5LNHSKtQVX75KZ6TJnET5gyBp8G62kfuLDeKB7",
  "key6": "41qP3g4MfooWamEFxSHiDxUqtzwUfMrGCvqW8DTUzkPc2i7EioHkqy46eFcKok8ecEkdMFegmpxmGi5k5bSA1Sb4",
  "key7": "5YYwejG78rBLRLmuiWvk1jZCyY8uLTEUVJFEAu7xqbDsR3ARXu82dmE7ee53eRRSvLk1dxS8Uu5Lcc3qqAZvnbZJ",
  "key8": "5Sc6cDGoMAJpBERwcxpeBtZ84ohq1oVmpv7r9Ru6uvat5LYPXPuDLQtSPpfMrHVfVwNAcE5jBNZyKqZABRvqSKun",
  "key9": "BjWtqLPDvoyJS25GGznTGU9FfmNmPbVcojXzxuBrBhTjF8PG11iGMW8pCQa5bM8iWR6e7mKtNRY1ZgyrLunLXZ2",
  "key10": "5kG2LHX3uyDLMSCnYUGeAZxMhoPSmnKEn4uuwpM7iX7Xrspvwumhdj6GV3hBn1ezQ7zXEyAbt7yhtj3xxwufMrhM",
  "key11": "2shp4tP4sVkVqG9GG6tiiCduQ4fJqze56jozoL2FzR7uKytH6Z5Pv9pp4n9K7ihfERWq4GZUVGB2EDvoAwPgKxuG",
  "key12": "kog73tg4xyxnm5BZZLYh5DTwFEUYHGWtNX6uvXKqf8jPUdQaKysMbJi2DzTD7qnPty1qdkz2Cm5XVfn8f75yeVV",
  "key13": "3pMD54nbdRTHKC29SE49Jed8MJ7sMsa5F5NeL9ekomXVgxuU2zd1ZyPAFo3Ao7jrtMBLXMnBt31c51aRafi9P2YP",
  "key14": "4w2zpSxiZDcMm4PPEywEtH4xgUqV9cVYc4DJCbnigPYYYbcCtbqnLJxrGcAAk9LLDQfxAUWpnDhr8NtevPHfAKTY",
  "key15": "3uuXeY4mUF8hk8677wkMaav9ysZXWMeoewrB3ErsHxEhetjSsCU3wzLoKeThmrgiTjiJbVGgoPpaesBGNM4jUo7Y",
  "key16": "EcyV21J9VZnoMtFEHogJTp5RjhpSCq5i85jP4RZJC8ad8r7pVbHTssneUu8TLu48XCE7rY2tRRpmatG4wG4AyW8",
  "key17": "3jX3LZQ51cx5oHUA1EmDs4fzXEHK4GxwAUMHcy57KU85fCYCrzqmXV8xF7DD2bdR28GsDXxPxjC9vydYEMVm9qyR",
  "key18": "4GcnjXSwmPABvmCJt3cTsZ71kEQP6Jsnc4nHKT9a5GhqckmTKQhhkGut31L26JEHWXSfL5akrRWzSKrpfzwZwBsn",
  "key19": "3DZHeMac4M6RoBc8tdoxEi7jAY3bjL5iSUdaPkZi7YBY4h8GgR4N8VJZWHADNhjGgeotYM8UceGWddqaG5fcptrr",
  "key20": "2BFTC2kQykJSspv9Q2QnKpgbKyoE4GSjTzBtRqqEwKkfmjLwL4iq9h8wfMARWpRuPMGcDv1uXNG6ZqJzgajEb9KV",
  "key21": "4FHEy4bcoFuujbQ7AxQzBYnKSE84QXS3czofDuFSzZGKM6PEKxsFYixPb9pshuULEbMPvEH5KRao5YGMrmSz6Ttq",
  "key22": "4DqzJgjwfqGgfE2usyrKKxYNYmkSpzt8pAKxpaLDZ2NMffj476azDyvXa7ZL6QS8YzuJSjBQpAGctiN7zt1wKdcm",
  "key23": "3eRJz9QtJBJYVfca83AFG8EUfLye9924mqbP2Aur712qkmEpoTYE9nuPGvzTwm4yfHj9Lh3hNh8NX1oX7iaPKUT4",
  "key24": "3AyZjDgwC9EJPbmiWKyUYZvhENVarkBkWNqrXQj2j4TqnAkmBeJVqKiCc9Ct52uiPM3EZ5BkKp3zgZYw9wM2eNFD",
  "key25": "4g5eK6m5BFr8DmkoVjEdvdbiKhFxEyvixYZ8SkPE1V96pkaTygzusmA4JLrVFHZfeNvvbw1wWgxKoZMgbihnb8rX",
  "key26": "3jLoKMRj3KoBDkTAsBvjDwmUzJuvtD7Q4VM5CUvLzbyMpVnXn5chZJ82TVP8dV85CDtBu4h36mhEbbPPz2DJTQEx",
  "key27": "3YBteUsQ5Q56rdDWKs8rrK221p64v48ME5eaSpuqzDdsdEMpbh5Un18HAB1KvzWtxgqBWCXaLsqF9FVWNNr3sR9B",
  "key28": "34VcaLrjTXPTjw4gdXsYh4Zv2RT7xL99SL7n7VJRJpMoaG7wACiXVq4UNnpvL3y7mhiJ23mQgB3bQLjxZ8iL5QvN"
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

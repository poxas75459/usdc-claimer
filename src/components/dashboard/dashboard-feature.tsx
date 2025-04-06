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
    "4ri38FoBL3w72mvson9sTfywBcQDDYUDkeUgZdv6FhphzCHUL2WP9NvrQXkHG6vfZcJNBJPRfTKuAjFAd6RrEkDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaSkQ9mA8ZaHdfzgHi9JictsB79xFDgSfhSwXv8QD2nGPjeyTKwYWpV1ASv4qGwzDnjQsmqPLauMTvVhUEVHMGt",
  "key1": "9e9PYp7gtb6EXfyX47b5V6dRLx1ZUnehudZ7JpjyUcFDJVzfQ4JJzhVJw6a9BiKYsCRH8sEbrQAoUXGH9iX8zov",
  "key2": "41Unfv8ws5hTJG6xAMWTUt4qFx17PRs8mgR3LzLQhASQwBVbmfYGTpFATRJrQko6PVq2Nty9Huoi3xg5giMPUt9B",
  "key3": "3H94gCK3tYTiX71pVBk2EdYFB6wMKrj3NcRGRRhVsFWDHWp2GNuT5VG5o863aGz1tr7YuVKqoEFf5PAcEQYE2ggp",
  "key4": "3AGBoRH4D6QHEanyCxzXR6KaCCfVDDFnYZKmeQjmMYa7Uiw7yBTPKnPitzMegk4XfwbAHjoWMpgoEvq71rrdssvz",
  "key5": "VsqjExFcREF5hThcFL9rUUv7iVTSg3BX1mNUJoZr9ArPu2bhaGmnSBsNwPg7EziqaNRtQYj47PAMdKSUGHCy36T",
  "key6": "2ZHjaAZ3otmswrRxmKcCjCijLsaxymvVthiupWm7FLfEDtbuVTMD2kjowUWUZPcnozjx2HqRMdMnw2th12yHWHQj",
  "key7": "4avyhTkJfqs2tvtYi9j9yXodQquQwxWhSjCzg1GsHU3Rr2yHkWUmTUU1qxmbp118xwTpKSZTf4uf9VuumZJMbeta",
  "key8": "P6C5v73SCkUvAf3HX2F5gTqmDzwQQAjpyUXg3yGB1FKY8jGYr9tPuATfhoPVwv45sMDcjmRQzacv86terXn8Qyp",
  "key9": "4Foe7NJBojv8cCNbcFR4Xh9Ne7crRYDjSUsKCGbZ7yHmgTPHh7gCrBhzX7rbiXTzWNhDZg2RHU9yYrbuEKs1kRPY",
  "key10": "u8qC1Xu3SoAQPVZmnte4QmDNhdqpDbphe3HQAcdAZqDDKLTWUaE6wkRwcHPmP8RgGkJyG5QnPP7FHBvo6ck3U8m",
  "key11": "5jXk1tJX6fQJbWJLGcHZqfXoK9oWRwUsizquZhnwV4YsNZBKB3gxdbrgdxmQoRwUXdZnJX6o73Ybe9XKY9oYfv7P",
  "key12": "G7fsNLD1AhL4megXKBdfVS8S9jL6iQbab47XZFH1jdHsK3DjK7m8q22fMRMUJXwTLTEde4E5o4DBSCLZ8LvCdLV",
  "key13": "5PS9DhfBbGMAsNSpzpBHEfDrHrJinAj2jFNRnFonuq4GcpMFtUXguJd15daQukHBkU8sHpqjXvJpfKKYNERaEU7w",
  "key14": "PUjzZxPJsoKiniwcQxVCY8muUQnnT9amHPkj2LoMGhfJc9Wsna6ccT4Y6GDcLnZJMJjyagVDjTqq7AsH9gvDhYi",
  "key15": "2MuXVMqc9CYKPEyaV12h6QAVL4kYRFYFJ4d4Y8dCSGqPFohuWrscANWaGGS6F1ro7EnRSBpCXndwRrADJn5DqZ6B",
  "key16": "3PEc4Py3QBt3pf1rxG5koHjGXMKFtF4kaGJbmDEUBF1Hy4cXkzRdqBaTwdxaVpkiXBdsrNm5afitg3R7ZTMCgvWH",
  "key17": "4ka57ZAEYWCU43tPhM6cnSjrr9UVr8PYhmfpBgtQSzsM8sz599xDnjaMNkDdg14icsxAtzPCKgB7YzbTwiwxKxqJ",
  "key18": "4skfWPnbWfbDdrBr1Q75Z6QZMkP1GTWvNiqEvECremc4GvkZueTiLy8f9F3zfv8suKsBhpwGZ12wcFALY3k427no",
  "key19": "2tvyGRg4uhNHbrDKzXwXgTmhExDgKZYXyE2fJHejpjtbsrM7vaVXHPp1GSFFyRTAhJhEYDEe7pY7ZhY712vyT58V",
  "key20": "4kPmco6kko3Rdir1jUCjRuR6DLrn5LjhTjtcAjkXugXRYChjnMPKkx3oBcvTjRhVYeE9pbH5oBFHUX7u3RzWm1fm",
  "key21": "5yqEYWKBr7e6z9RvUSr7xLuQRKPgRMKLLBMbch9cB3NZUJ8Dgt6ugYb4bC6bMFWvQah9Uij5o5x8GixGYMWNwaLx",
  "key22": "2d4asdLgwRuwRmxwrqP1Dad2CmXdoTTgt5pbjMPiKUDqTwfAHeEqZVEJahTbPW7sy46WLCiz3tf7qZjYEvz1uHXs",
  "key23": "5qfAW6PEamSyQibFW5RBMepL5tNFrPhao9pQwafjkESDDRjyKuCs8Eua6ngNtsdV9oiwRKZQUQZW7ad7EinpdMGV",
  "key24": "5xiWnYBdygaHNJd3eihMuMxP6vWTS8PrG825pFqx4sX7Tf7BZoreGqef14zXVMi5V48aK4y8MupvMvy3eWVotksW",
  "key25": "2xUYR2AGxK1NMyUksCjXsSMJqkkbwxmpPUEeZv3pYJeNxLb721rgaKDCVUBamVGzs28YGvdc75NgY5Ryt1saQ1BD",
  "key26": "5mY8ErSfN3174Ek7FnGtuACJBNihu2oyTyhsT5FNKTAx58WkNoET6MANAJv7CoJcAPjeoy11eWAbTTw6KQJ2jk1S"
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

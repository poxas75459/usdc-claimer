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
    "JbSibqBooK4M6DqrZofDJjFNzbigMsimcv9CiP4FJYnsHZPV43SqEYHGZtdy9uBAagR8QEX1Pi5YR4GyWcpTJCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Yj6S4w7yuXvu9vrTmUfLVaJLCoqY9iHAMT7ehiQFHmMSYZkRTRbczqJwQb4kn7YhP8mfMohFzGsHHsmATJS4vz",
  "key1": "3UhmvoxC9iUohEd32Vu9v724bAExEWDJ7xAhCPnFsTujTJNMDvsQHcHCUuWk1hGkK2XA8VQ4wsEmhJrXjE6LP3t6",
  "key2": "29mWhyaUZvy5v8nyVp9W2qWanZe4bPwLkzDGatS9SRUxVy5PymZBzux7DaEkTrpSJQtAkgMUV78GS1fGsKzKKJ4i",
  "key3": "3MYYM9sJTiCNWRwnxGcvHxCQjXJdgpPru1sDUDLC8qZji6yaRs1tttTEMwTJRRGSNFfiqLPtRRVRX6P4r5kj845k",
  "key4": "3qF6WDq725EyKEgQXsWHN3ySUZfW2Qk4Zw9uGkUj1UMujnoof4fNLhMagCyqPEqeBQq7gBBtnLvbaCsWiDe8wjPF",
  "key5": "5FhuKZ8MbKHry6AX74kktR1GqmG5AKpYNczx4F4rR4p7Ft4kA3cu45Hd6USVSH6QRRSPfJfvrFy3EaWeNy5Nby1g",
  "key6": "5hBGwNoq6AzmfeJ695FoEWzvtX7Nec7qZ6Yt6u8FJKACunfNYuqJxkvghkm8wTSUMfSLMLiZSR7sRwg2CAravGLB",
  "key7": "44cEXyR3Kg5KTF7ja8nAth56998u4qCyBE5Q3LWNHmdN5vZjZ8xK8Cu6CW3vHwFpWGyo74j2samgojzcfhaGvW58",
  "key8": "5Eyz8BzV56rRwUtVQgNRjg8LjW9r2dpSix4eWxQPZopxDYSo7qC42vjppNrwLXNnobm7wbvhRQMdv6EmznVipzue",
  "key9": "QjqZSXP8Wf8XqGhewLZCjZ8xUKVjaaf9ftXvEWKjJvXER5JwZBCqWYeG1eZ8A5f7ADE8vdCpy83Tz9EHkRcUyoa",
  "key10": "2scMqPtfN2ZHHZer2Em1chGSjcBbcH7tZzeUqtvrFGSr1bE9rzTzEm1J5ZL7uvGFDMGFF1fUfQxASBHrT9dy5GiK",
  "key11": "2P7nUhiqtamS87AQPRuDseBq88x4jUNDRXS5cdvxy7cFKGZHfuf5rfMM9CNEKz4xRxMekQDFKsAaM7WhEPhbNQVh",
  "key12": "3qiVTyPifYCRFUvif2yXZvK7SVeCoU67MVxU2Wo4w6DQjs9oFGnj8EjVT1wePYTgZX72AYFvGJscYSWsei2f1wpe",
  "key13": "4R1x5B6roS3nDhukVKjEbTiDwzszHNukEHyiB81SmF1ptxGTVG7wwJZrqjxVUC1tqxbpmhNGSffyruw7jJjrmjGU",
  "key14": "5AyGfkgbgtUXmwAmEGoD9ucRVkxsQ1Knh9Uc3nE7SKxvJsJGw1J65yjaQFBcFoNnaceW4Z9uj62Vp99fxA7mz38M",
  "key15": "sFBxrJNK7dsSPjAntEjnu6XvAGYvzbR1RFqXwjDEps1VbhreK9da1QsP99Vjao3GDo9BVR3qfDibvE5wPpKj3Pi",
  "key16": "3qh2BpMpSzgvsCQxGnKtbWDUGHm38b5d9gdznRRce9bAvjhQ22QW39xsq5PQxFLFp1F5zgpXf2cGpkQFpResuiky",
  "key17": "5zbgMqEEgTqMaKmRehqp11KRsoPFNKgBwhGFBfE3jMbuJFt5rkLigYh5TAg79mnosdGafi41EGGbP12Nm6knQeoW",
  "key18": "2kB84qxvjiHyv4xSyERPSwZiZuo6Zzk5n63veMgnpTytEzadfVtRkoQZNw8mFB13kbknLMnCey2sYVaUYwQw7pux",
  "key19": "tUk51tVJPQ8Aen1FXQ4mmLjsuvzkgawXCtNGJWiKCHJuPuMd8zPkf1yshFknm54s23NxDm2gJboFxAab2VuHAPV",
  "key20": "2jahecFKZRXXg5bRhPt8jRh1kyAW8aJG8iJrcipSiA5v8sminHrcNhBYoTRhMLMW47CtzbTctXVUpi89jAh6UurY",
  "key21": "5Xx3HsVjU8DXNgVydF6sAY2WT71SFNbmYmokJn4JacrCJsbVS429ow3acTBH6EZwHnTXLwPiJsauB4U8LvTyKjs6",
  "key22": "5L9AJoFHedXWuxidW17dKXtLahLZAov715vzqrjf5c7AU4rtVJqLZAfYhJ6x1ttnsEV9KbdgQQDgxoEbsnMuKiQH",
  "key23": "22CdobG2T3jjNHa4RdEUKrxk4JwEuP6ddCDxaJkKF4n3iYFX7XWfaiuAUFAGCJZoMsHxAMtZ2x39pcqS259zSN4F",
  "key24": "5g6cSrt8p3ddAYi6MpUBdfkz9w2QTZSRcp4AcG5U1Cpjg2H5EHiAGvwgedyncifeSyHJNobSH9JSMDMC1jyXnGfg",
  "key25": "DsLHUAPC9KNxWL7YqMCNh4AVkCJJgXPZyfoR4NFUgsx3s37m8dHr2VcRXMcaTpQ8wwW6w7TQK1nntJEiu5tw2Zk",
  "key26": "4d3JekCrLYaw6Umxna66kGdrMJ4rjUWgqVVoemDEa1bozEWPQPYX8Cc24h5bdrws1rxXbu3un9vbY4MQUZzrKhrf",
  "key27": "2upyfHX9ZMKUmPukwTmahbgQWAM7fS4LhYWcYVXYgGQ6cATKEyhjd5VSpKsVa7TSjKudn6QccE8Ubf4zJL8zggvt",
  "key28": "2oGZufkwMjo4WvvDuxDeaA1cqdzXxrQ8QkHQe7Y7q8NeGFH4AG9vr3TH1ZHXhgjsZNd2rSj2ggNobGCQBnZKo1yv"
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

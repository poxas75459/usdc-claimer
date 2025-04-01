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
    "3tu2NqfiuNHjhFxzgEmx5pAkq82BdTHW2NDpoAjxQBN2TWagNxiTAhtmHhGyyoNQkb1fGqFJXYmEUFgUDfCWowJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KSWvXKy9SX8bpwV6BEsEGoyxU5CzbiiSk9nZWKmnzXyRcN3sHqJnnGzodSyEJUedBzjDwUTap4hPaUaWmgQvBJ7",
  "key1": "VCUZyn9p1WQpbVCVaZEYVB1FF8MiLJGsTeuobQo2YroB5q2ZvC8KoCbTMxR3C3tyMd3ymUCqy8gYaxEExFZREo2",
  "key2": "4a6bEfsH2KeUiTKwcUQr1yDbxQRV3qx6HGwc9J46BjSxwgpoHjW1GXZFbsyrE6ArmtFVRRFYNVP7Qc5Tq7w6asTe",
  "key3": "5JJFMWs8hmXP6ee437VdJQnBhZVpqhtS1L6ihoDZC4WcMYC3xnG7AXRcmBaZRK9QCPQZG7TDwyYpVUxnEsWYcCPN",
  "key4": "xRwvW3iaMcJgXoEfs68TccZCs4NTAvFw7QezNQjN2cu8fwTjbabEVcrkRXeXhnbTsMb3XVwh2M7nG2Zw3PWAHjc",
  "key5": "FiwfoJfN6mLeRP7nVdUW5SbWPm3EMd9yaFRbYZwzYMvQEqL4QKqD54swxgRLw42uDVzPaTYsNWFv99Er5oHLtj3",
  "key6": "2bcjMLYSiU123w9wZDcSvVJNe5hrKcZWEVERbPwK51rBWrRZN6CByd4TjYUASs5PjbD75rQNRRmbGra5TTR9h6vi",
  "key7": "3g52ZnDrkpSM5cz4MkxyoAWugq3skcu5K9Jx9rBZEy6pWHu5LLrAT1QLi5M5xPDro5ckxEFiUC5MFPGjs68gAPqa",
  "key8": "L38ewfhkroTZjWcJQwpJkmnSi8Nhy4ff1dHtnJ6UKgz7xt1sQyTUrGLbd11za6q64EGw2Bd7DhZnersuWyNsQYD",
  "key9": "5BHsT1iqA8iJJWZm4PoHFMzux5L1bn71wbSVP1LZy9rhc9tugM6Hm88QNBn8R3NhwpbL6guLQ38wdemsK9bpNMgF",
  "key10": "2XudqL6SMyeRhNVKRrrmpQde94g1RsVdAmMT4pVKgqAksSyr5LutTeMdY8T9ZV1QDdta2wnYddJzD1tGSTwoxXSY",
  "key11": "TrEakobWGBbYSpsnej36RTgMR31gyTzBYxwdRtTmUr5WkiqTgVeMEdDhgKWTkGFgdM4CJprXv2Fi9WcsAY1HhB5",
  "key12": "5u358SUzdruwUZgmcixcEFYDZVDE5E7pxTh7xQMErJu1hFMZYY2Fm9WUnTmmgEVkCEYagbQQE2SNc97jRQCuYmWY",
  "key13": "3uC2zUys4hE2w6vXMmeFZ2auwm8NCTzpaRnKqCbRd9VJhqQKmAXNmYSxaS5pxLwppF19pZignXuQEaxjyrTokMFX",
  "key14": "5sf7QQRJat6FqmXdfeCve1TYwHogcrzG43nERaqnUyzAbPtp5uW6S2TLB8DM5dhmJjFV4hVDFy3f571BQkTzKLog",
  "key15": "TTjYKtdBdz3rLkwDYmaPdTXpWci8Lib9SYjFszHPwZH5mUkK7heu161ttFpAJdgLdUKmFgjrwUvfHSzY1ZKfofX",
  "key16": "4gCQhndvmto146MciTWBcYC4WV86Vd57zYUHdAUgrCVvpvswYz6bAmESAbTAqDZbevtPNtnq9MVfeNHoARvc8a3y",
  "key17": "Tp9DA2nQEaZq46gPrw99TsaFA47uVMowskW4XStdkKWABcRkPHygGvLSCP1oEuhPWr3XUac5BFstPAJpX9obham",
  "key18": "UT85JshV1czVwwyrmRXkfpdrFQJKcuzjgXfBB8S9RmjW755R84ddCu7nznK5e4xyZTp1zfRqM2o2Nf4XL3QaCAT",
  "key19": "4kukBJBgGcyHAcwRtpgNwoztz8vXDLM529GELnk2wyKhXtHou7nBNc13B3NiTCJJfPe4VCj3msYR99g1FUKgUs6t",
  "key20": "43VHDuVz2BVWU2fVBNzAKN7NFL2js4HpLTdFtEJ5iuKbTMDbkqUa23iSWpDA8XbejsFrzMVVB9uftf1Zf73ggqYo",
  "key21": "4YahQodcNfD4Zowbua6drH4ZyLUcdYScVH1cfJUsnPAgJTH1vGdszLW66WFZe2qQkDsithoUTszw8CJSSwp3dVUy",
  "key22": "ZP1rHqjFH2d2turMb5dmDcGAthAvmtuoqKZNdB7xidwt9vk4hKasPVmnagZEQVM3fR9FpiT9pFEd213rt8aewkd",
  "key23": "4kdpJpgKJ6Y9dAGa2D22CGrhvTp31sXV8sRM6cFHxFaSH9gNKkG3rDHX7XiVZteX54bq7c1zfUzrbHs5raQRf21J",
  "key24": "3o7GQZAihHTGYebEN1aZUGzUSAeLcfF9aqYfAUjnPPWaxepK1vaawsqagfVWMxA92hvgLdhfBVX2gaE2ZxAXsQqN",
  "key25": "yRuH1XU4DEtQCctLjnKMYDvLGY55bFb54bJcWYS7yY9533DUC2km7bBFAFwkc5AJncdEsH5opPh2iU1MdaNKXLV",
  "key26": "eCNNqbPXoDfLMXYU5u5fG59yormsdgyuJFR2i6RgFefqCmcjvTDMyCHxLLMywxMyTQN3VJJYCsKpRcxzDxCfUET",
  "key27": "BdczgravQxgUcZC8gZ8DkJruNMccDTWAh2FMv8LDmSCcZSnjQd6qMp2RAumZEEm5XeA2m7kkGb7arTAH8ckg4PT",
  "key28": "1SBSTRUCr7u5qAaQgcw7RpZd9FEuKCyiSnRnsLo9HjZkQQCnZeBWK3yeK7Jhnq5cwohzT4N2i5b5JxNpMbXRYgN",
  "key29": "eZ4RfZyVfXZw4MnjWtfqZ28Yqo353DENLnKyHit7JUtny5G8svyR54i16WXLbSxCnZsygzsZgMny2DWGNG2CkJM"
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

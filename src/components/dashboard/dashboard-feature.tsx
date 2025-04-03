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
    "5VJRNT9MqbQdmdwFT6enfJew7qaRT6oLdXuoxa3x63gJ21Ho53fDbFwwoyaRDVX3xHNhunidV1TE6aL44urb6Bce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a61qpeMLpFhvQYjDrEbuyQP2ggKbe9GW5KEUrzu4yepTXJfG7jth2DvDDZ2S8Z3w3jpkA9y7tKKTTUo6DLmhERG",
  "key1": "yutG8P43Ex2scF5ABRwPWyBYbKfvBTtk9ehs3Z6PhqYF9n73wWP2p7mxEnamCYMEWrgXGHdUetgHeemVE3sT8YT",
  "key2": "4GDw3YJPj7ZyQWY2yyAS3Xj9WQ9iVq2HUn9DLnqa88rE4A2EydGUDjf56T3Y748i8R9fQSa8LtMxAMfPMwy6NTpi",
  "key3": "2xmkHz5Pe551jZKdrtEkNs6DpGVs8j6EZiDRfcP4iV8L83zVCz6VE7CaaeykpJ1MKaxFGHKVvxskPuhMBPbqJqVK",
  "key4": "5huY9DK2mHp4hhqx2zLaZAup4SZ9L1s93VDWj4yeA7DPMqAjiz3aaT21QRYEXzMN88YUgqZ4RxTw21EhRNU9EeYN",
  "key5": "2bjoBLm6HmcAFmdVgAd9VZS8tJKxoqB6fSxm5R3LiZB3XSSXrQShhKwVNG4kdVdivTN9bFkedi7fqcwRR5iCATPZ",
  "key6": "56fiD4iaE33axpP125D1XWvWeQ9srUGqVtjYeAtMZEuL4fmVt2BWBLXbzDrAuq8TgSkBqz562fEqvFFEpvXmMFKx",
  "key7": "3J8GEXergcE9o8g2puMH22EYoEmhH3jyQvh414wV8eLVswDrQHTQPrvLH31cdZ1T1D1xXBHNhomFbdiacbcPXdjm",
  "key8": "32ESZeZGFVvFos5fhmVqmiVZGgxNcmeLQNhAfRt77XxyFZdpRaEqiPKiXZzYkTj4fwWd3T7kLH513pzvQoKoTRTG",
  "key9": "3auSb7MvQh2aFsWt8UNwVyFYkmGH6rkf1ZHfjdPsG15ATDTQnTqwRdcXXnp7gRaL2YfmjdypPExuQCQXVpLJkgVB",
  "key10": "65LrHdAgDTttD56XzsAYcQuttbijUaExj7LmJ1wW5WbTdc8v8UpGze2hzU5AyqMUdFtV6V4PZsfnoZMbsUAbaSUG",
  "key11": "czqj2uSWTBYaCspmMCh2yduEVDwzRYs75J5HJiKNQCdywtpvaSMfKaLvyFQrK13t3UTfavhBbb8VE2wPXFtkLGa",
  "key12": "4dnLBw63Dus1Zdca4LJcLY3XZ5fr5GHTxjWtooqfzm8oVF5odgvqpSgJ5CPLVjbAWDwi9fMv8r9eJziNm8Wzau5u",
  "key13": "21Jm4YMxspWA4zBbRXvfQxuTssDXYXcwGHvCBHZVTZyBW6JBbjhJbCjki5FmUTNnNnSZWhZc29sTiRN1K7LmYr2k",
  "key14": "3EzPGsMjnTp4WuqZbXaubGNR5ZY8SpTZTJccRc43gTyrpDEDwCJuxSMbVkszvbZPzkLetptLYUJrL5HeiTfKED9n",
  "key15": "2R9L1Gv31JCjZQWaqHLhLUKgzPUhYTTGrWxFiY8kmK6qmgmTxAuAkJnkyDdDEBPsfU9Nd6NVhCrj5MzLXPqr3dua",
  "key16": "gsiNeJKy9iWqGNGBjKsthtZBvftMcxraYBSdVxKcY9WeQe83bGvGthYyHodxWwg68Ggi4Wtm9dUUjTHmCaLMqG9",
  "key17": "3bJeq6en69ZqnPPiRhKeDhBedeZZZiLXayNTg7h9hFryVoReC8tyMf3mAoTmYu1WrJ4m5VcW57SBD17WxyEdiq3B",
  "key18": "2j9tU4BzGcd3Zvc6PsxS9Puhg3h4AVro2wDQLGc2Gdb3SqsgCExrRvtKDCb9NNG6g8sgvNvJcBxsJ91nNu2r8Bjc",
  "key19": "2vk9wJroVDvRwVqm5uCUjbXNPPwbqq6QE5rvrb35BSfpxbEJxfyzAkyNvNiri6XpC2m9Rh31TVgH787snGLiuUYm",
  "key20": "2TVZSzA9UyGVgU6J3E3Ytvn28F8Qrfw2EQgYcg6NEB8Xr61EWh2F842A1jvmKeMRk2Xwv55dPJyvedfjQCTv6qje",
  "key21": "57pmSPfdRDSKUHX6aNmt45H1WR4nggUXBGFBWLHDs3DJ2CApsuUg9BbogAhWkttQEVDskjHpwngZRxa2HtfE2QND",
  "key22": "WbgYFbjkrakEG7ziJcJAgFJuNEFiffPzVae19qAR5RZza4nS82EfwLJe4va8Z7MaxNy4wuMLF5BHxvZPpfChREs",
  "key23": "gGewGm8gQjy2nzQvmgHARRcNsmSWc8rHNbXRpXyj66sydVyySQGgP8RbbGTzXNd2Ep9D4JYcvjcys2U4UeokUUF",
  "key24": "5UNa7dCQwDoAS98PgvHekMc87kUuBwH6cQsMdNGP5PR7EjYcauRXaeWhGtQUhNegucCYEz14KFpfSzowvouX2KaS",
  "key25": "2UoDEDPXdmH88KqV2xRH8tRmpC411Hq5opt7GGoUH1Yh89RFnkohxqP8AjNypxQJS4msPrZNUVH98CtnDeGczkav",
  "key26": "4gBLYfo3Y1kCXtkXrzzRCvfVTcBLUiCfdtLV4azoqLxkcFjDnKDeLUHsdtz2vy8zJNvJgaDME7p3zKveksWc4LcS"
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

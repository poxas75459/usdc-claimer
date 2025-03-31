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
    "3hpDLtQSDjciq6ihJKV5AQ14uNUs1sL1zrJfxKhX4126u1hAS9L41ynYCXv3DHhh8FrLPwwf919673QVJ6Svfia8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SfuGwtyXnXDA5WNVVAeuQa8FnJwTgRnEkSWMFsEcMm9ZBsu1Kk5vJbZ82a7i2vn9KRQf11oSky6uSDzKEnuSvwU",
  "key1": "2WANA1HmFGVCae9mxFDfo91pzybSHLChNGTHqvvF8VQixHmWKhueM6XyiVJbcdD3Ch8R61inhLbmrSakKCJbh1xD",
  "key2": "26Q1qWRPkqFkij8L8ct98wtw4svheQxpz9aaMpiBMfrKcJvhXtRn5jDHG7HXw98HakJvhhFYxLm72jarjNB9J5xt",
  "key3": "3MUss9V2GB1FYQkQNaBYp6nF24wYMzXvbU4CPJhtU1sCQmtj5j9hj3JBGXLEE5dMq7sZNbfh71ihG4z9GShVLeof",
  "key4": "4KYCnnApZtusWHg961jNG96rkVCT7MWf1X8JcqMdi8sjdCiJMpLk3PDqnQgbkw4YTn5HwGrkQ8EbwmSANJqC8LoL",
  "key5": "489yeE2MiDmvmcLBRwr3EmkoFgyA5H9XCY5vS2uQiuE8U8p7CKtrNN9tyWaxrpPJArxcq6BbuoeNc9xURP5qkjYs",
  "key6": "4ixvPUgcnZBrKQxicVSsZt2vQLhXAg2exUxZwHNmttAURGFNjGjsSTVYPWPWhw87A6KdygBtPwsmDzYAagvD8wZ9",
  "key7": "568Lb9ciYvH2gZ4nCjRY7yN3JY1xmK3oHjRy3fc5EjirCkdFAGxiHZ5gRT5yykWYzXcaLvTeyMpJ2ZNETZZNvG12",
  "key8": "4RRan1c7Rbpa5v238YydsQ3Kej5BwGT9QXeWbfEgJQ8hafd5aBFbRkwyLpLdemvSodJaohx3UVHRXgECwnMFU21F",
  "key9": "3MVD8f3KoWEgRUs3aCh37PSmqd6i8ZCwd2VfW94Nu81w5KiQ9KAmqtQWrf7nzrWhBwfGiNUavMLQfxzRvcGVrcki",
  "key10": "3s6XFbz2iZhAtkmGq6yRu9wTGtSwzZyMEzgoAkoF6JfnULmGMAKxxhGFyXQb18i8fMkBRkEoHh7WLwti7WM6FgW6",
  "key11": "XJaRB8oPfDViAW5euefT19YyWWRfq4rUVLTZ5J6xCkx1G6c19vy9gPz8FwN1zrf2D3rdXtWnmqdMHATiQwEjhJn",
  "key12": "ZghqB1qhCwrm8ghZYCPXbQzWH3SkeU9b8jFJmRosH9ZRVm9anMss2GKidkkrCHSAcHBTcpuhNy778ua2jX3UZRv",
  "key13": "MnZF2yM3N2JcRasBiJ5wsvWF7TLdmiFJsj741rvXdPcuAJGtzruzRtboxz2LfPAf2GduBDfyRduPQ894WnxC4JK",
  "key14": "2k5RpGMhy2N89Z78SEES7bRTNihK1MYyHf8q14oAtu6mkR8cjxj3msRRxWSSiHjwtVp4PdF8izikFhbF49d4X4JV",
  "key15": "5Lw4BdvrtatMeQbfBszPeWqQUzJTHidedMooqnaSA67TK1kvK7HJQhEh5XmqVc8Ufwj674Yt7NwB5EdkySWdWZ6U",
  "key16": "4xDDpb5evtkrnft2KDnVuVzZAt3dRdo4AqRxXjhghZvyDnH3AcGbLiAUgeTTZBX27CwhLzJfDoeeBWJzseBs9NJh",
  "key17": "3XsdGLkgcVX1L6kLeyRTNp6ZDPTYVN7tnY7ZnvLWjwqE6orZqKzvgT6NANKikpvbtkMA7DoGKycVCGzKLj3GPm9K",
  "key18": "5W4bFPK88mywY4FBiTsaxgozhqmyreoM6KSvxhTcmwtGs3TzKyrMVVhtadoJwa2jsdtN3BDmCPvRcsKZ6dbYH1SZ",
  "key19": "npTHc54xxvzTKeg2S4h7t6JdsoNjwKb8JWFxoSbpYN2mLDr3e2iJJRecbEPCBoaagd5cbk5uSNXDYZsZeHNfZLV",
  "key20": "2PtQAKufE3Jwmk7xgYUru4EUGqyBZ3qnDbF9ggHCP1eBiFVWeasvjzcDwBmNwxrc8YF7A9jJEK4bJQkXeCcmU7SE",
  "key21": "5ZcBhMCcKBWhB6ewAFAMLRebwgkxo84TgtfHEsrHPSm1x66TK96votmnBNyptbzcjdp5Gkywyxa7QUPvQBduM8by",
  "key22": "35wr6yzewLW2bF8QmYk75ed7vTK2EPjyVR2Kywskd7EXdv4Wy7wVhFzDihTxGmkS6ybzhNBsnWJXCqomtUpHxssz",
  "key23": "qF8nyXJpcNXbmpBfoe14Ypt1uMarYKwHttob7uErMBouumerDYbKgjtSk5yMhu4myaQoFzGzWp8UjHHsCaXvwga",
  "key24": "pEHh7fTYtrRmKoYHn7xkBL9mwmmHBqPCe8i5e3UGTkepjEdURffWzksyEFBm3e6ZWc7CMP3TNE28T5W3M8SobPn",
  "key25": "4X1ejtSoZ3yJVQ77V533F7b7W7izfXyXMc7yet5NeHkEk8QjA9eouLzTeKxBhvkZcLjjgfiAQTNTqUddVC9zknrZ",
  "key26": "3tJMuMYTdaU7cafgc5gzp9JwpvEChF3HMxMQYpR6JRDgSJUwJfG2BtFcgFfvPqFW2yfca18kXCKgiNxQaZe3y9EM",
  "key27": "3EF9LQiF5Rga96nQMhE6WGM9Mcq7KjNTaXP4yTnPQkMZabAMzbpyFTLG41S2h5UGXWEyz6PyVfSegBKWo6sA1cjX",
  "key28": "3exNGDm9V3TFw6K95oEuV657Ti8zYmGHeyiVbtuDSYsTT6RUbZj6PkKnA7ZxJPzjNiQD7B3F1co3vmdc1ksC8xoX"
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

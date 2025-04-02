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
    "4qWsRWkTuCXdH8Av6Lc1SXJS89r9dYmjPRiVGBrSsgcubwRmqBxQshjEw5VJMc5jnqp6HB3bPrAd42UUCo2pRgeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BZL3ZGNvJqRf55qUMATMXoWeegRVmJ3u658dKBhsvDf4RKX2mLktX1pi6taPAT1to4YYddDxEnqk1mgvTzvrKcy",
  "key1": "2VmmgeExjN4CZJN5dD7h4KLqVUe4BxNcdMGGbNpafUsPFxstHEyso5WGWBPq3435KTX2yVAfoNnrPLp3mfQpfMvw",
  "key2": "4y1TBiRw7m2WTJShZoG9WH5DaTeKysPPLKQBvNm5ADsSsDAJwM1hYJyYqERuEsQQigjrXURpkMi8Uug3fcyarWBD",
  "key3": "5bGDDD68TQsKPgCa283Rit22qg5u7J4CTT4u9z4hAKskiw1C8qj1b6uSHrYfwMMEXoiA1agzkq4KqsiGkt9Lkb1E",
  "key4": "42WHFWtMNJGoL84SdyFvCs3Xd8V1cior7vuD57fHN4DvtjzcpBgNNyjGW3GxTzgmYY6rQhm2fPcBpzFUPRwXkEds",
  "key5": "5EKtgXHdFHSSbxFEgz62zfsGQtxYF27fREhRgfNso4TNRGPgT7AmRYa86UYaT1WoZYSvDdBXUjWmbZitjBME9QDy",
  "key6": "2cC2dS6QiRMnkVUcXWzNjsd1y24d48aMBi7AU8KPwSQ9vkR13jn5fyVL4WzRP5DJ4yHE28suR2sE7gvHiyXZ1Dq4",
  "key7": "4rWqZt7pWf2atMKP8GgjkPxRw9ywQnBYDTSqE1C6kHJHDtW8qXjZgt7a3ZRyb2CyNpPe41NkYN7Z96co9pkMArph",
  "key8": "pMaNbiTZCQZj2MmfDEEcjgNjkR5zgS6E9G5frBR5K9CMkjENb3StLn5pcd2mnvuYvYsawZX6v4yixPXyMux7xAY",
  "key9": "5o7hTiFzCRBPnbQoDnhFFUpAt38RAha6TCU92cFd48uEdwid4apvJxapQEV4CC5Jmkvb1pvJwxxi6aZPkitGJLVB",
  "key10": "D1FVaP5S3ku493CsNVJvh5C4jfAKGu1ACixKJEYLQ25T2my49125BZmbdryhKmBtEPp9ipFHo6HWbzn4wqpv2mS",
  "key11": "3hyeAHJknYu36ncuk2HDR3bunWcQk8XtYtRhrEt1MhwHgk1EPqtJx5wc7q4894fps4T3A8VgyisoQN2wxqfAC5JF",
  "key12": "5MRDE6HoKVBz43yZgYxKgmHf5XR5mkTuP2fFagAbYtd4Un3Hk6LBLyWztCQ7TinaojD9CPktnzHQoLjjMzVHp9oc",
  "key13": "TTtXer5aitK6zWT99CxrFN2zifuSQdE7nFH1Tg13qNLXexzvEzJqKNNjd82riYM2UtPa7qve8761uagizsSDowh",
  "key14": "2uiaPakX9EiPCrRHyESoqu6Xh24K1uiaSirtMeCozZxzLk2TjYjE529NToTppkFfXQqyGPpWymaPxf1s5eHkVEa2",
  "key15": "3p6QrfvzYivEhPHy2p61d7V7cH9MkVVTLh23kS9NMELWuQnJ86yeKMQBFJbJNytwG9Z5MnchJNuv9mbfV9Sbdvan",
  "key16": "56ohBGE3Z5YvZpRYtxg8TYKr1PQ2ySBeakEoGwymcgUSsXATUbPZn546mCSwoqTa3kmUhGaTMuAuictKrGH8UZVB",
  "key17": "5TtHqQhFebSkTUKtYwLQyqZNhyJvYcJpkrXxsvxfnRxGHirftc1qrq92GSJxS2j2ZLwZjiNvD6X5qwQTg8WG989S",
  "key18": "jKLsewQ9w6JZsCJsQ3bUaJmBTEHdU4o6J9aZ2E8cAExCBcXNe8QZk8a6kJKzxfzKvNt7Cec8EnQtw6RPCerz9rn",
  "key19": "A1XQUqPhn6t3MsxvJ4qieXHq3xr4o15EnCCN2yWEcUpLroNaZP2Y5gDbxGWfux5qGixkzvdqLm3BFSRX5qC81PR",
  "key20": "4aVCF5W4PuPJTxUDkp5UFSJh9SPNhX9rHrpcdcKA1rK4poCCaJHDnWCtvTgHzZMwQa2jitmTczEwRiUD3QigqGes",
  "key21": "2A4PgBA1VM6TTbiPW5H91Li2yGq2W7C6WxSTHNdaLkGERgaCqX7ok6A6paAmvMsZ6xHR5wFvNPhjNwrN9EWwcGtN",
  "key22": "2Zm4mfe696BbUnTUEgSWcC7K4HAx2ddo1NmhorKdEAN55FWQwGcR7aFQYG46ZvXPeDJYyvea9NXQPM4axzTkGvvM",
  "key23": "bj7Qf2Vd3kVefmpvEo6J17YAQafEzVCR6oPqLMQnLyuVzGHCyAH5Yvz8T97cNi39jBoSAYrK1nXVtcQUUKCiLTg",
  "key24": "4tcbnsZa5ef4JhoDo72TgmA7apM7eJzh7RJWMxgZQTQwjXfwkZ93t9mrq4fQmWmRfpkdsy1rPUpiDZWTXrJoonoA"
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

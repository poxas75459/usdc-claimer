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
    "4ccE2Ph4rCJmSJW6jydaTyaJbyx6rTmEj3Ppz6usr24BAGsPEaj87CxNNaJoo7uJRxVfUJYonr5swRtj8pezNH54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAB6dtGJ1V3UveBGVAQho3rFPBxfJWJa8ekLRXWVr1iwsNf2ay5jdh3aQKjDMkphxN39iAhxZGj6m8HsbAiUcaJ",
  "key1": "32SjgcP2TBYy4SkySV1oR8mfGwvrGYLx5qM1gZMoQtfSKyJ6UqawzKdDQp5hX15NMhrXed96CgkyzxpLQrp4Ky9W",
  "key2": "rfUkW8dDCBjeZN4vsDe6SBb5JMG3Sbx9rHSBJJ4oSu6nH7FjY2rTJvRne738zCjtUaG2isZWhPUM4rjdo9N3tBG",
  "key3": "61km29KjynDExd6sECVQbsAuXa1uUYEVvnnuDzg569JYFFPZCTTLoF3K7qCAPNxBrrvuQxRGPD5tivUKLbU25zPH",
  "key4": "qd65wsq74PqMiGxgfvpTnfDhhJYfLHjBn8p9SHFA2CJCYG5DTnKSwhqe4aLCZVv6GyvrLAY7bfxJuNzbSrgH7e5",
  "key5": "3tNweUcsWsw5LyNa81ByY7ZqvBfGFAhbLgmD7AZ8xoTMQvitLdHfzRNA2DgtQd72qpwG1NuKqfV1CTv3TSDXZoRM",
  "key6": "2byUJb2hEQcGemAQfHwTWbsEWpAn4duhcNq8zvpHCrSuAhgWcrSAxg71Kq6i9Fip4ZcfQDQN6htfykL4adoU9iFu",
  "key7": "2BexqJM8C4QC88DKKvcgc3oER3szD2mamUqC6SQLgvJAoGVPHG8TpxCTd6kov1SLdpNnftFmYVbiyGZLGY5tFzeL",
  "key8": "5b7vjmXCBrw3c9B9Y3uSYvma5dpLudkdYAW2DZiDH8tztG3X2tZ4xmhwdDBh57vS8PvbEyCpMwKgNf915XLmom3P",
  "key9": "JGghYbAnU6tz2Defm3mvJSEAbtJKYjrFYTmsiWhacQ148YenvggC9EaKqywmQPGFja3tFC6FqyiUVBmd8mTBNSZ",
  "key10": "2iBeabBJNskj1oqPwsuptgWbBYVXtfciuMS7x4cGfCYtvucmwbKv3uHDuVSheKtMqW9G4NRM5e6ZucZU4iaGVPq1",
  "key11": "4cm5DRPfJXwpfRko798vPxQjoTP2cJLpfYRL81ZgebdwdZzCKuUgSvxqX2okdc98GFftL1soBPmyyhojPwBKcZiP",
  "key12": "5zAqHPavK1QV623LRkSPWyqBnBNUHQ7GAaG7D2AmTZz23igr9aV7MUCj3NhwQnjgNjqReUVBnMe9q2PQG5tHemxX",
  "key13": "ei2uNYc5581Jca1y5sFm5podWH4CEdHCsyvx2exMAt3sQp5xm6Bo2Z3x5ZpC9Hd4xYiLYBXDn2kuEM9fDcD3mtm",
  "key14": "23KdMsi9WsQxtkgpevgGMRwGUt7kW8ixJb1RSR3haNGdurkLKd3f8ih1gHFfpKGfjovHzjzZLkWgMFmav7a1Zvvn",
  "key15": "24g76zSYjyAdSEZqLYr8k82VWJnqDQBdgPXx9NXRygX3NtFQ2F2aZYXLEyh6btjf8HApNNpAcQEhXqdh3hUmqmVf",
  "key16": "5hcKwM5S189z3PEnwPq4NztbC4zTEJE6bEK31QAU1giwyLBt5LacPPGb3wiPnTrhroNwudXTZWUkJBwFVDdtSiH6",
  "key17": "3fZK3YTzkCtY2HE9K3fVt1hLSiqwpcbRRp6udamZ2yC1TUsXryZWbj2XxXDfTmP6XUqFJ8FFBMhJHaC4uAra9nFu",
  "key18": "2hnYQTFqKs19dy3zqFWo2QC2EgA7BoMxcKZiSmH8tNpy5kFmXe2d46EhwPcqEfHtLouW9AJegeUJsBq8f47P5YK6",
  "key19": "dmoUdmysfDtXE5RSHkRSFjCvVRRYdLS6oZE7GXiQhAC9UvJFg3rVJo4ZC8wfbVkKYeNYpivoiTnoET5hq5875AW",
  "key20": "34Abmiw4MMmwNB3RwsQPRfCkjftZmQ4U1SRmYmnd6cGMQnL4zi1kTcp7vWS43BPr1VJoMLfBgTLT7o8jDpUTzHxJ",
  "key21": "2ByutuMfhNi8ew3Ukab7rccLkh2aXm1y477CkcL7gxf84t3Th4syqNVSvCCSyQYCpCPHXTiE2HCG89iviz3sQFSR",
  "key22": "gZ7yJGKBAX9YRLDJvwi6WTwbCWCBqevZmeBDP2x8NS6WbMy1PedVTwCNXHTsKM4P53NeanNGSr6YDCoLFKyHcYE",
  "key23": "5srUojpnNcHypLjFuKnugzXroVUNFHdi8ja3YTZj71A8buRoNi49cX4QpgrYZnwPdFaUMUt2XKBMbjK9Vg7gsN68",
  "key24": "41T2kTWiF9weJZqgfdgbq57sY3xtAPughqDRxkYPGAEAUNDPLQkkTYjpaHCgNFJTGjr2pQfN8mFwdjHFbbMav7ok",
  "key25": "2MJAcjTaPeeT5NKZhWZkZa73vVzNZbY621KddhVG1zLr21XoK3pqQ6GiwUZUNUYnpuA8BNAms8oSEimAkwHoMUdZ",
  "key26": "22xoxNp3Vq3J3yzV1VYNTBHqeVQBQ6jLTLjk4Ey33ws1YJkiyP1sgLy1sk6MNMXLfBRXnKAKLSE5FH8SHiYmoUxD",
  "key27": "3y1m1HjgLBvcqHpRxMLk9d2pUPHgzWBqqAdW4azHE3qaKpc5QiDZk3VuUB2qRrgeG3EtNnnnGPgbvKiTNNpLobyT",
  "key28": "3iJpXvT6PpngosyDeQXyKxwe3utxn7WvV8y9KFCPu6RYA9c2hR1SivYtvWZrCupVJHRqQDZb1dCZ1YVF5qJ1qTQ9",
  "key29": "WZ4qsd8kHhKHBkEQBcChpKYTxwSXvurBA9E31urFJKF7tW7PjrjScQJudLhUDZxMNoN4dbUuqefC4f8DNFjvK9d",
  "key30": "4YV4FY46mFoNm2fykM3WPjsFf4AjjXUcPQnRmrs4SAGTvKDPsQGB9iuUsKeLEemaCuALDVptLVvMccwZsGU6wT6D",
  "key31": "4B3fxy7ADXSV5aPMGyvuFR7Q2jX3KJsKPxQ3TiEXc7XxVDRcAebgVcYrqmiXcfxpCZ6wNquwberaBc1QNp2wfMi6",
  "key32": "3FUEf1XhxGXtjun151HhN7z76Qi4Lxq8Uz8tCFTwecMYgEdQZDA9fFukVvBJ5Hiy5NsiAxrN2AspYVnXVYLSxDLe",
  "key33": "49taWVZ2djfZS3Yxf9yV18UGG6CcZY6oLXSdMRW9JEtqh4qgD18M7ojg5EgdPdQA1oSiLLAGsJJGWP2erYZK7t9b"
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

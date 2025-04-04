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
    "3jznJ9Rn6HYN8wnsLcq7F1C1pikAKcob1v6nREKcjDp2L84x8fEgaxYV5TeJ3jmETFz1bEPecPQpdgC9j6h7JtZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGBBfLCAefXGZuSJWuZ57tjw8GKo71C3rHbC8fcoV5Q9tkXxaFyk2xGDJhfHue8LM1iCcXAeaAp8ovB8bYp4srM",
  "key1": "3f48x2RKMZ9uaFYkv4m1dpH9ggLbz5q8d8geHP572DshbRGAuoaLHbJZXUBkQco4eMofpPjR8k2VTk3fk9n55MsM",
  "key2": "5ykk1k1JhAJorjNkog881RJ4gys3G7gPAuJ8henTQxxkBDH8wH6sbUZjLW16M9w1BkiPy6RFbuUGFuSa4hdUXRQ1",
  "key3": "43SttkF53KzojzdA1S7BPKugMXmRPRdMa4HoujsQYNXeoUHvUHvmb9w4rjewCayguW8n4BfqhvZQnK3tHtuPJcnN",
  "key4": "4fCtzQMQZ1qrjuWqhn2n4hFVRhhLvW1fpXmoDtFqeXQb79cpJqWAeKJXwTduEjVLmVKrMKUJcReZ2CMtatrmB6vn",
  "key5": "2GfjtZekE6FsJaLhme5AgPkQMqvLvaDMVHYr8apC4VJmGmidV39e9nGhdBGxvY9RyLTM427co8od3QYbYe2KrTXz",
  "key6": "3EsDdJ16pnjkWVVyTgmqi9XBKg7v82yx8jrTmdg82y2MJpiDwTreDi5WGbL8nhG8f1cxTXtevcSPwuQpKr8Yg7rN",
  "key7": "2Tz3P3M5GnWXnXpmWRDxSBuLtKfTnKxDgqmfhaUQxyPG9ZFEEVBwvy45bG9gTnK8P14iUgb7ZvUPMM5taq8DUQnL",
  "key8": "3eM89HgT27ZfU469i5G8Tnvxbg7ibz5nFqYrHJQJz7NaRYLnmQ2v2H6BeJdXypufxDrfhaDg1ZLUpgGxy18GygSQ",
  "key9": "2iYEUcztpCr7t8PboESEY26eqShhbPG94DV2tNmxRds25ozF1ux8sLfq5FAKPyicbWSg6BNASv8F775FKUvVysai",
  "key10": "2xSdZrb6CSVqWS47iQhWoY5D13rDLQY3JYXkZQZwDYmSnSCScWahvAAJ2TqD4VvCVkLczibb1w3KDVVwPp8j5vf2",
  "key11": "ABUdLWEGxNhGMVjGpMFHtURrQYL6gpbUHU5arXJ2bk6z1jWbe8hDQAreCusb81hy7FnHf8QPECeZzD7A5Y59niZ",
  "key12": "4mMJsqn4UMbtTSSST4XxRTEKkfehnf7gpoVSoaTSeF9Cu8sbVMXZ34mWwa54FvZUdqoBRd2qQAU6hj1HTjryfcdf",
  "key13": "4vEhNjZ97MFM5obbj9y1LwtmzripT4yApJpSoMaCRCudLrsB23xSdH832bKVjhMAGbjbDUrSPQ3BMwpL3zia3ozB",
  "key14": "4bU44ttTyaHncN2uJ8KQb81ZKiENBFY4nXLEBYLPN7wGyCMbDMGw1gUBNxPrN83A3Uotqog8RfxTaZ64RceTmc4K",
  "key15": "2b5Ux4gqy6JNG12AugmjyibRs4YWsSg1fbezSK9xjRN9UPQRWb8xZ4EVEurf8g8PvNkxvbcGskxdz1zp3i4MCrPG",
  "key16": "297k4ynPKrsRqP2eiMKwwSXBpJ6e5kFJEEd8CDAHzFcxZqLxAbokznSoZ673ckSF5v2TUP8kUdhCJgKWVuzsE5Lf",
  "key17": "4iQdmMcNaJokbEJzhaiByga5t81SK6vnpvm5Dngq7T9hL2KcKHX1iYejyHgmRnLH5Vzwwxps2odMQwJWJjSdDbJt",
  "key18": "54mWwBJmZQC3kRrDKZkwQbNqhKuR8bfTeDt9R7TrwJv4L6raeNJDvGsAvEP4VdJnFQ7K5G8yG7b3nHw6sXsXuQLb",
  "key19": "3N8JpatBUWwqpQwkhmcjzLSyLkYnHNxWu13vLDN2ci3D9bUc8VV1jbfML1EF75QNSvMFCCZ2RSzMfpmfYHEt1wKH",
  "key20": "2q7CJe6nCr5KdYNFv2N19LroaF4XXNs4BT4WtgLXih3bxfAZG92qR1T6jwR5Rqx93sW9ME7DHY8Z6myaz5zCpiGv",
  "key21": "2PsZH2sWrEntLCrjw53mvqFxau5f6ppMgaTnHy2R7nUvxDteRu93T5PgKqzLaQiFsZzZED9rSmrQF9Kq91tU2JLd",
  "key22": "4UcrMs4NNhRisvUN4uJ17qq3ypYKWLV6gwYEZJr1C2LvCFpzumdG3uxarCNrNu8RvdmqR8bq47GHk23XFghFdQ6y",
  "key23": "VUvP91xwC5UcD14femQ95X54DFn4HWaqw8msZvCqe4JSc5x6NBruwTqoa1FFVsmXqcFriKAZvBLyN5E7h8qGSsm",
  "key24": "5CEqqeMwjt6RiYn7zSsogXANch8xoa4xUZ2tTZM4McvwSszk7QcPNfBuTTvfewjzVQTdZFZ6WzE97JJVCBBSBqaA",
  "key25": "4vipu92JgPgQZgWEaVQvwVidqEGy6QYbKEevgGXHaME73V5icEuLhHttsMZVEo3UaVG7j4sT3WnZJQKoJbw6XpEo",
  "key26": "P1gL5JHUyavKMh5LUeaqcCnBNpHeQGnqfLQhVzc8rjWsbVZbofd9g6RwgWhgmMJsMSYBUtXQmcuCYX3dUfmxvit",
  "key27": "5kE7yM5yztxgfVYm6D6KFa8Pw3BUuvRQBjJpy87M3CL1zCRETxrR35pV7Gq65eSuuhshvFTjuVozV5hThEsx8cUo",
  "key28": "4pMHm4qNe4MzRdt9TCAbdMquix3Af8iTj5th2gPtvVDasvbz5HmjoKqp8AZt1KLCpaiNBybVkdf8WyXz6jX7yK96",
  "key29": "5rekyWV3TduC6XgPRS9Cu5ozhKbEczabP12bAabs8odfeq5yGykuvEKYDDsnsUt5S8YUsaTkgKKUDr5v2LLG3QfH",
  "key30": "S2UtiurpZZxuA3djfmkQphUpw9MQEhMdFJwc9q8u1dQfjXRZ4q7zWFvWz3afBsTryBjvHHQaqopaUqxW8uF4ReY",
  "key31": "4xxWFfm7tX1AVtrmDjNZ2bJfw7hdEatQtVrsfiGM5viSRS6nHPAh5RHGTrTZoaa6pHJZX7dXAreCLsByddq6zF24",
  "key32": "9M3NFh9EyFDhi23YCKSR3MQSxQkCqn3CMaRoYEuLbdMdTNLEAuhcoeSWkbaoxZHB4Ycc6QCh2tcXpjXRKAKAogi",
  "key33": "3PMZ49zRq6Rv6CtzKBHnfAFpjR27qaCPtPiiY6bk1GN6phKKUySqy9FrK3hQm3m9KD5pMqj9Ad4iGH6g26Ar5gJ5",
  "key34": "535xkHhMxmcWgytnYc3gVonEiWoU6gW63bA7ZzzGhzfgkm696Fp9v3MFNXjmYqn6YTcwbthD69QpG8weiZAnV5VF",
  "key35": "LU9fRfKqdFPQSt4eX1izL58bo2batKFi8PNGC6g3BeYiyZfucV98KbneZrFG71nN1jP2f39kLgh6b6pL9yhFvgz",
  "key36": "459rc7umRsxFNVxQt5sykt6WVt6u5CV2gcXvv4tUujtDu6amH5EQKyTwBQkRD5Kzo6L27WvdLT4bYqaG2v4Pc4no"
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

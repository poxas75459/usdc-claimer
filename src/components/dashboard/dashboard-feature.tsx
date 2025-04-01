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
    "WS7p1E5fxzaehNMyBAoJ9RvurB58xtzU7NuE74No28USCEzC1xSa88AJejKHyR5nUME9rx3EGvd13k5xmxEppDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfzJPRGRADoCY28ftPyuy8aCjmBjE8SiimZ5o5Srqz4Mt9TfDQpoRAo76SitbVveGCUuKRM19L3S7CKgvQ7LjEh",
  "key1": "WMZftWKMspDKy7rFqZUrRujekRRdtqC9ReSCZNwQnKFJrofNekB9QarMJ2pjpDeqQzHCcVJgoRUS36moQSef2zG",
  "key2": "5q3vkER3TTMTR4RS4Q2zQq6BktXk6dJJ5T1cKvc4kAhF6YpBpXBkF2cYxjWxNPnXxo4R12qQxw7Uvzt8DVcogGra",
  "key3": "4r4bnMckbj9qCxxcvJKENYEBxMwbzV7k28wzVxKhqfQCKUNNtoxXAV7BccscbMqHAY9j4rdcK36b3eFMhfN2FRET",
  "key4": "7ALjHEJEm74PtYRV3HHF1pz4WQHY4UxuJFMwoNTCTcm1qjmB1edA27EV3sRe9dfwTReNfrSHuPkTkigPTX4bRVs",
  "key5": "4DggzxwqoByYBLoXtkhfGEuJU4MsuDN5tf1JLHrZdGLy8w9SGHqcD8PV6TeiEMW9TW1MzWnQiXmUHg1t2MStUUZm",
  "key6": "2CUTYnCCYwtqiX2pWkiXJZkbwmz6xyr9HgzTUyzvnYh3XyTFYnowerkg5nSZX7kqb5y9McxePXrzxGGs77bnc997",
  "key7": "3c3qKhACm1ztBeHRUwsCEoUApUCgEuDZuum2f8Qxbwzu4TNdJ9dwtw9vmV3TzxboycEFJLYApzDqbusutLKSeVfa",
  "key8": "3346LC41uc7irCMkhvpz6ZDJrokKXzthFVFovcD7RSog7qpwBRKbitAkTzngTYNQVgj3avRZQEAjpK3mQ1F8nSP",
  "key9": "4KS3Q2Z7gf26ypadjrarzbKcrNTUkWPRtQxJwgBBivimWHA6nsPjGd5YMGWcU4u6GoRftPvxMgX4HEh57n6yTMjB",
  "key10": "3xJZhA8Xbg4UyVrtNgB9APhjmdjPq58AbLdWSh6S4BtKYwVAknVniNjVrUZpQPUYb4mbysYaXCkg7VP5k3watFZ5",
  "key11": "KFt3ngVZhHWyTz1uGXBa6oMMFdeG9TisutcRZV2w66mcUhuonXT9ExSRNoocdwVjGdhwhcWv9DCTrxYNi19V5B2",
  "key12": "4cxWeTtn9UHZehh9YpibHWtA6cXuvhMBy5QtmKmuXTLEZQjt2M6JpKgdqF3kLTJLoCobEs3a72tZMN5ugNYwXhne",
  "key13": "r36d5CWhC9DxuHe8iEogfbpLGpFfbNtn1949nKbe4VTJQweXJdYCcKzFCeMWeiU9waWs8uzSxnyGHobnQC87BQP",
  "key14": "65P4dmZdSuRX731wuqh3mDkfnei6nGq5rxSGtDAm4Y96rtt9BBuAg9BUr2E1LFNg3v2r1K7nH7AtQ2fvKU6Z1w6Y",
  "key15": "2AH64D5FuSrKi1yhUE4iVh4B6qxxdnqGxaFtnA2PJkPTT31eFPvCaZ8nMhG88SZUAiffHQcv51s6kTEo1CnchSSg",
  "key16": "2apafs5eE6yVvDNFqLja3nszg2tB6X1NDGEzJ6gSRDQAfRTXJypCgsnwjbHsNbe8AiFJdLdAkD3QJVkeEVbBkpGU",
  "key17": "41iLA4cB4V2qE3EMcgPpvTFgu3ypT7KYgCt5n5TzLY1nwhrzTzYRyHqtxUDof9CWgnFYVNVti6P1dNjuWdjKo4bk",
  "key18": "3N9QGhpBnASNygCz1kCxK42ZRTYprSMX4jUejPxL5fQNYohkHRmz6Uc4WRkSbW4aymhpNXkfhbMtiNWmSDhU4iFZ",
  "key19": "2kRJoyCWkHUpZpMtcT35UXTRSmhvSKCe6UGDdG42f15qmrttaEVYPHun8MGJsJqgob6jKu34MC1gVNtDL6iAd8BY",
  "key20": "gxk4281ZpQTUYM21aM21HYGr3zAM8khzPQQabnGwPR4PV7RJaWsGYh4CMYAQ4LbH5Lmk5BiK3tuzFgAQW7XqwmS",
  "key21": "cfTnVfFBJ2A1bUfmzB5ANR5U9iKzQvZbt6DLs5dUv5koabcxqQLSXueQJYg3YvFgdd6x7KRcidYPEgGe4ySNthe",
  "key22": "5qUghAdAHj4anPBodbBA6ANTzHMssbT5v7so7XmwtwZbgPtN2W1HzXjd4G7GpAvEaaAEE6RnVnNb1PFM3YFiWCi",
  "key23": "UtSUfnKGWSP3iBrGKAaELxQRuiHkg4fDhr474wkakpb1mR2zGGhbKf92Cg88roZTpm8Ano1ibxrEtg4V9i8P9zB",
  "key24": "wev5WSdB8Vx8qVgAPgnCf8fSgAbQRNbjQu7WYA4VacD7qSJMNRiqsCAq2SW3hhEQz1tRpHAunssfX66DUuJ3hzb",
  "key25": "4tEiot8Wmk8ij7zCP2fJ47vD2MW9SniB7rpC8SnJAsdwKgdcKTjQjX8Tysn5DnLsNvabpFb8xfEvB3SgZFTawhre",
  "key26": "2EbsrBR2Yy8JoSXyA2YJUFrhRUvyH6wS6kJR1TkV2gZytggcoCzc5XJozmnJtP7k3Tqwy5TtP1q387V9HFGX4hfx",
  "key27": "4XQsH8RKm6XikLM4eJZ9A33Hm3WD2BZwWWBfASPE4EbywTnhDW1xeLHBTmJSN9gwzjCezmb3ERfkob6zESpRYaoo"
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

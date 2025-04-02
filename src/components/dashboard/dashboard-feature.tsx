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
    "2XPqwgd5DHJLHyyePxB3jwtKm8SYgajVGULR3DxfZNvTrBgJZuGVAKDAQC5FMXU54gwcTDigkiSsS9Jizb1JqYPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgzhrfHLsfvoqLbu3bjoWWVFbwsjU6yRJLYo1Z7AuBMKtw6JsB96TUFAzYRCgxWuDyLrpgpP9h13cu7vguLoWXY",
  "key1": "3JvHyfg1p1xzVdZN2GdFUiDiASdgW3P2eiWF9ymWps6sXBJvzAa8Aff3iAUjDwhMaQt5nFJGRcLqh9i7ZGy6KAe4",
  "key2": "5y7DpRPQy2hYrTxstP4MNp9ANvNfxryJjFHPAqDPhf8XXEzZhrb7yUU1eWoj2WrTKJQTxCM4tFAptojjLmmFrqVM",
  "key3": "z17nqfLt5WRCAMuMEpSPU3twp9kN12isawQk2VNGaptwKwd7rVz6woMJPXtnzPAEqRYJCeCne6z8bvrYRLKSKP7",
  "key4": "4k2m51yRsaxLECJTENTDs2Ly86iNKVMhaMDn9RdLvCsYb3NMY9cwMfQY7kt6RCr4NZsgqbLCae35gXtgJB1YvwzX",
  "key5": "5hXLijF94VFucE39imRAUGNfoERY7jug6zWE4hKkfRGypaMnzNVZN6q7qxsK2qUG9tYVF3t4oq6niQ1xQst239Mg",
  "key6": "3jYTFjE5fFBYvPGxTuxfuns3yCQkxKzUnbdKo39G8JiZhMKBuXK2GU2rJk22zHzZPPiauFvyQVf2hmULhoTChsDc",
  "key7": "5FzQhq8Ymmb9asN55VnzAtmtZt7nzLz7PVmMUYLyxYU6oWj7khP8vZRFj5DPMxWCd11wW34dBDFtApRau9dJqt4L",
  "key8": "4GNwy2gkdUNf9FA6rp3sEr17wEjonoBv6jAjyjpqpXhxuR2xRhkWYfJK8x4fCDQBS3cEdWZcwMb9UYu6TjpSo1Kv",
  "key9": "5r1qAvzpwkF541USiUUzpJjFxLroALVjYEwPMA49enYn5LRUkQZTZ1tYNcj8aeZE6AeHVqE2tGJBQcN5srVf5MbZ",
  "key10": "4JrHJPXbSBkDxKvQKQTaFY237EEfR6u5wi85pLVYwWMxgk4E8jGkTJrZdmPcwuAstKtaZN1tdge6FvXv9ZPPxBBr",
  "key11": "272qgWmY5ZtZxNwqNsigc4RzbSvKnGkVTQZiSDzLWLa8uWZod3quCEVrGBKNw4yS3Tke7kRrZVR8eHMFcdU23ZeX",
  "key12": "2eYJ469Hpqi1REtbXLatUkVsiRuUMHBKq39STfTp16Hd6hqF5JLyNL9ySfKSHNXgiizC56pqWhNCbTHmMefKLuo8",
  "key13": "4Z3SPEhHeBwzaWpyAdi7sJQLBqdZnTYjMRmbGQdiBH7YHrPV7W1sUtKf5ACnbmKbZPHjLtvvkrHDN9iBCx2sKytj",
  "key14": "3KDo4A2265kvYjnFvgezQ2uKKumT6QvHHPJWHU7UXiXRWziTdzwAdsy5e4BnwQiuTxpQS96h77eH2edueEHs58Pu",
  "key15": "rRpEQ1o1tz85wkroGY4fdVvwbwWocC2LthP3KAZDhUpQtmac9j6mgHe2RumTkBGTQjB7cpao5JzkVWwzChkrJ7r",
  "key16": "2Te3oM41ZgvW17yRLPgTYRYk9Bc9EuTtDerrBrbMv2c8MDGjyhxVTGXfFDt2TtVT1bBwQ75NKUNUVSuZC9zLEXDg",
  "key17": "4DV4JxCTGGYsg71coyVTLDxczC9xbUrHpT1J347kuGTvuA4CfLUBxSsaByFxopdR3SfBRi5Q2DKuCbNzeGaDxGgM",
  "key18": "3Y88zAefBXGTa8kTSxWFKSnk1VtEgGSiJx9uKMvxhNiyNUzJ3nKFYHRuD7rcQLuYAaS8aTkBK5eWN9qFsFxHUyTb",
  "key19": "4v59WZ4C3zz73DU99yXFvSaS7y214NwXaFB6E8zxQAvQ5MjuUQfjSBeJwbiYhGFphNwdrGeN1sTRV31WU5ziChnx",
  "key20": "2dmgX4LEjz8XUmJJVxiCvGKw2a4A6pwjkdYcHwqeNNSmbBLQYjkrtijxUVop12qxh8hyyoxLJH7X9PJDyZTeZUsK",
  "key21": "3AwFMCPk77ZUk1x4q9uiWmMV3NDkfT51fjEEePb7KBtJtDMmb2PAwxegmtadkWFurFm5NgCcfwBqS3QNgkJ8PV8f",
  "key22": "HAKqdThXXu3VzCqSUZAThRmcyKmuaawCqZ8jTMtWZFfTVjCSpYg5HrehnyKeBmKeEPM1v5dEdEd41EaKJiPxbEz",
  "key23": "632kj2hGVjw6nF2tqPLJr1GYVvTvGeQixKhjZN2SuZmHQn1LcMtksVoZLLkHf3ZVRVjjVNjQDUoD7Q1huzZxHhWW",
  "key24": "4Udwzz4cRABge7Vy2F637aoor2UgvquatgTgXnhepri8dZtY8YvjtnYnZcoTBGgiYU9qbn8taAT4SQHqUpvoyiHC"
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

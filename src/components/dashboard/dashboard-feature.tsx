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
    "2U9E42DAgsNzNNWfWNBC2E5FoypuvQ72ZcbQAPxL8AstZXjVNka3skeZDJ6Rep8hcxovv1dYrqBuXZE6tHAhpS7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFh9hc3u45ot6ke6FgdtxqBdYMgAWER87HxTKTkjchgiqZzqqBxc849poj78gQY9fpuT39k4GZGfBxKdk8vtaaG",
  "key1": "4mkwAB7UmJRNGWHXUeCdo6vevd7CxktMmxEZy8aZs1qXoHcokENXnZfLe8PyKp7hjGfBHf8obRhgQyyW9pn6rz4b",
  "key2": "QG3dPkXtHwkR1yhL64EcKjAadiPHjXXTYT6mChgAUR1RH3x6brC4fNq1JiQ3HxAckzPDaFpQaJtJkyprzkQDzHf",
  "key3": "3SCwPwqdKKyigek1SCkgVzFGA24Vc6DKTZn86TUe4oNoN4q6BYML7QawR84cnASybzM9aTgLUkTjS5jp7PyKgdJj",
  "key4": "2FMxLY2xjRwfCh6uCzz9tgLUSgC5hPZfhv7GpUL7neG2ytfLW2iXz6DsRRYNE5KXsMgEWyaGpntnmripKAkqiXot",
  "key5": "LxMM9KhApq2awXSVuUMkToGDpgGGpZKg4W5RLpcExjzFiYZgZcp6gUrzAE5TAYJoV5xHzX3zc8jzVorrMNkDE4B",
  "key6": "13HA1WfWy26a4TEUTPRZRxFwGvThd6LM3FiMPXZw7HLraZi29sjwDbD99FUKz8SS6YgsuNv9Dvbjcb1rF44Uws9",
  "key7": "5pf2PfNvp74V67y5ijjtyU3rHHvGUJ4hbES5ZAW62n3k6VvGBC1iEkeX3brR5fEPpTagJ9bcqAcnnbh3fJP3fZwx",
  "key8": "4GaqF5nUUX3EnM3eHaP81rL3J1VAM9fUzwzpf2Aa5kaUk3Cw9tKTisYVUPpHnJx8jDe2FRGfBtGx1C8Bez59f8rR",
  "key9": "3ifieRdWWkXbufzybgWuRCcpkFjQTJooAc2XTpfM1uZj6x9yv5LoTSwqkUept8MVebi5yMGBGKWJMYEweqJThW6m",
  "key10": "3S7VkmhzEtEHbcpokicCQmtVzFNYSy7Zhmvdk988o3fGJZLDy9qbhmVSCifdaBzHiSNbAVQ3qKxeEXpNTbWdM8uW",
  "key11": "2ejWXXf1R9EtfUjQq2z3i5APoUxPwxuiUbffcqRNTPAqVRq9XsVmTwHikfN5yrqwq33Q3aoAuCZzCXwg9QS8BtDt",
  "key12": "2gbnySA81zaSVzZSF4c53x9TY9Vfw9XpUaHtYm3zAChhvaUJvNa3iP4e2V5yfrizLSNWiUvRCnsEkMSXkA3QFZGp",
  "key13": "4HwVG6uCKLxsrZuzxYYLrWJKjMisY3KZCrqmErVWos7qrPd3EW7eTTAahVSWE9Rih2Frw7QY2A3cvQKkYYbdUaw6",
  "key14": "2C6nuLYw48wZjAnA3hWGyzqNp1MPgukxahM3Fz63XCRyEyYo5uTg67PuxB1KzfJ44MzJJNHrcWopceRNNSQRpuTb",
  "key15": "2sGPDxoeBBjD4UizYXT8qPBkh3ykByqK4Jy5v8B7FXyGoLTysTa8JbuKkf6WKfnb8ehhUqeCpdyiETa8V6KQWUFL",
  "key16": "4xLeGKsmnL9DrPo4gfFRyrNSYGNoSyHbM4De8CXeUupaY8MnC8ZBzrp8R6XNyWdwH6BrKwSNTUMpxn4QF2jrKe7r",
  "key17": "4NbDtzoK1mAnVeaGmLfBgsXAJdaDswPYuJv6MkjticU1yhjzRDMgdTdzGZwQdB1JAxBwycqf131qmeEUig8qCYMJ",
  "key18": "5RFfKMadCkZKsrtAEqqKFJYkSCAt4bMN9NynmKmoC9th2XYn6TKvjub2oAZJXtVyU4ycFsTgkfEH9XZvBsHbGpGR",
  "key19": "29MA1wjdxJGng3rmUMWzbjHZFG8sTtV9zv6KU6jooMrqZTYjFZFKPjbmXcwmyQ2KET7xTL12tu6KBj43uDXdWcLj",
  "key20": "3ivFveFG32dyTkLNfSEVJtGbABV1sdtEB2ujjTFiXhDyH43gnRD4nRPDGQYMpKc4oxZFrYZTRpjX3k1wUW5rVKa3",
  "key21": "Q5yxtnBybx3d2ueAi5B62s2wNyUQdQ9tT8uBkfsF1XZ7Mb9nZAzcWTmtJffL3Q4JoUYRyMSFmsqVbdm1WNwYtjc",
  "key22": "4kBddgC4vd8nSFLZZL67pvV5fsjDuTT4yoEc8M58hfrso1DoJayPVJT4jM9pfs5EX2WAUeb9e2LgBM2981RHAcvq",
  "key23": "61ouNgY8W6NcAxNYmv7kP511L42nzMAd6VoXq45f11C44PrSusozTk8AFHNF2outX5vnDmTTwjxhQpiyRNjeeyvz",
  "key24": "5ZEFqMc8yhu6fVZF5FhaSAXzGuQd9pwHxxL5tsPSzkF7Rygs6Gqtow53TMjKbQYFBwXRNyNniAT4zKh8yCZfaq6a"
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

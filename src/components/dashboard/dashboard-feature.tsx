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
    "UsMTUUscS7724pca15Ecjnq552vAfSfrne4ZgZ4bqtZ7aKVh4E4pDWBTa63mPohMKk7DYgBR8aRAHoVjzu6VW5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KN7WVbiBxKtstfowrGLEDNZaHV3hQAPjTojJkngdmqR2VS71ysTQyLavA7Hr5hR5BPFfwbBTRssPoSpgWwfVcUR",
  "key1": "4b6dvXh8V7n3guRqsDTU6JzHrYUwr95V8tq13FYbCUMeQvXqiLQPusDyMDsNTF3AzXEo8n8oDovmYQQ4iWEvaEon",
  "key2": "4wAGYTMsbTFYinkufpM5HCNQGvfpUMwyHsEXkYRAKc9GNqKBJjHfyQpG5vdJsoEjj4SuYydzHyjaT4H5VVGL8VpH",
  "key3": "34KqSm2BszW2iJub7UbXVJeckn9AT3UjPepJQTD8xZwwfEMir1aU1qvJmEA1tbQedY3RehxRPznwbDWXTQuyZa8R",
  "key4": "4417U6ZJaEt7L552sz2YM9w8Z52DMatQr6MP4Mhoa4eXxkPuBiAjGMSGYhfbwZbUPsPvWmx4AkKLHkpqMYmFqFFx",
  "key5": "2FSkXx94n5CdzBL7zbcutqen9rht1gm3RBZdezHGYH1kAtQWUWbekL86eJ2SxTc4bme3gy6r3YqKxZmvvxF574wV",
  "key6": "4yPQZsTuRYG7KPpRSizh32imkzHbkRKBus6T52hT9kmUB8Xanra95wcqZ2KfVTy5WDz3onFjAqXpqDADZmEqjpmb",
  "key7": "66GsnRqw2JYKb5rMrDw1hRSo77XVdWpyqZQGeseTAWzGGKTCxyA3fFqorj8VWtYDWf7eWwY4PxhrBq6zY5n7mvWg",
  "key8": "4tSC3VhzSRR2Zo6e1KCLErcAKdQUiaVFWKUrERhWWxwrrWcNrtFbrSSFRkxZj6BG7EBsMHtvCL5yWRUYdMd9D2D2",
  "key9": "5jBMbZqfTVHP4pvLF1HeQSGJC2WA531ojaFSzpbM9WNQv9Z49ZZRRBizbTJXxgZX6yTdgaDQd8psEk1yWNKMu81S",
  "key10": "Bbbi7UqfSKqJnE1RABPbEYBEvcipevY3hWKzTgaY5uu2jr2k3m9RkoFP8h2LQeEG9YmTzrTdSesSaPTTNhgktUj",
  "key11": "4a9smgjoAA3PPky9NPkEXJDQAkJKkjuTT5Cex2eUyFJ6VBDm3xqN1cwRpLAPHJK2wCKFBaEPbdS1ZUTnYsNuqnd1",
  "key12": "4Evtk19yFPUZQn57QFmb3TdjSm6HwcpdwQDdMyUS4RP7wskVFy2N4nYKA6UuJs3EpDyosZiQGXQ5ogb4dnVhuAYP",
  "key13": "5xCChs2KFR2jG32hXwyFNmun59EYW2wUwT4kejzZd78F2opQ5HBRnDUHvufgMKk4izN4K49Xe6gzMgbXbcCC5h17",
  "key14": "KcH3YVARVV9Tb11ftZf7UWr8a6woQNiTJVDccCdBGfXsotDKkSMUySirAd7rNgZdJp9KxvmM5LjN6njEM7cUVsX",
  "key15": "5aHSQdSW31ZCCnHpeibDnKKAuFMCB5e46LLhHFHHttzPufb412eB2aRGsA41AKwMGajyTZ3kUuEfsaVGo9o6f3aT",
  "key16": "5Y8swdzX5R5f5nKyHi4cmCfAYbJF5jJanWJDRastQ2KYmAfdwW3Z4CQKeVRNNMV6V1w2gqiGnMPtTHgKYVUkW9C",
  "key17": "4GeQipkBFBvZ9Y7yJ12ELAtEwLy4CvnG982kWSjzA7LNmjuUjCixp2qi977aa3SJ5nNSJZQT2PzZeFDA7H7SQYHu",
  "key18": "5R57tZeyGQdwTj7qmHwwNVUCBADYZBKBYDc6JLRF2zwCWgEyoaNaBEuV9DcgRU2aDneUFbxV3egCh29jJCCA28XS",
  "key19": "2LoqPeUqcgkMacF1FyXQRNzdajn52w24Yijzuwn1hfmNc6LvxD8b4jmFAck1v44wSWRQyZxSMzHPV9ACaGqe4x1T",
  "key20": "4g26eLF8Lh5Lqdh815TUTJVzPhkXPToNFvGVVL3Zbe5BbrWDqYNTisuozxrhg7o443TP6gFQ4XfGy1s2ZkwvHCLy",
  "key21": "4jxnNxejFrvriPAH2jfCCdKaV2iX4JMEU3HnA3Zhiu2jrBN5uioyELTcGxWkpgo2TpoH6Ae8NHWm68NYQ1KVVGxX",
  "key22": "2GhMLreZN1eUR3cqhYmqsbdunVj35SLU9E2weZRgNJnX7sKty11wcAmCFinxrh19xnhH4QgcYWB3SEkPQVbZ7VYL",
  "key23": "aNmjarFJXDbzmfntwdUsSZodVYvVXvNqSZUrbt6cGqLyBaNtWhok9PpypNAq27cr9sHUyP8ETvoakpiKDDCAZEz",
  "key24": "zFrhk1JP5XFxjxJjv4s2bKaXNz6FsxFnzyZD66MDd2gX1AQ9wUwznmrM4qHue2usYiCw1W76g5m1WJzujVGozyN",
  "key25": "3DswRWp78jnUVWgCNsFNNfpCT13T8pfzLdFJEHYB3NHaSirU6CxXEfaL5hMH6Q8dzdN98oyyzn3rZrZjgQjFGujX",
  "key26": "4kZNHPv5H9Sdw2Wc4oQKnxfejobbK77FKj2yD7bJnwbsnWQSkjnWjt67LYpYQ7mQpQjCL58FXZ9Xr7o1QkFfJt26",
  "key27": "31PAbreN4SpwY8Lhx2rEn7QR7P79S2rVhxhLuChjtut1PGbVTsNdiMJvyvr9qrGZ99npx8YPMXZG421iXxxUmAnC",
  "key28": "2bCAhw2L9iHuGPrAqsutbPGN5T1EgT5T9EWhE6Gy13Mkr3MHEWTFpyq5JTL1r4s1hNNqr2iYBTT1Lsru51ppyuZ",
  "key29": "4BeoM1Gy88NwyWWQ1j4oqnisy198BPFiNaHhAaeaLbyxW9RUatrUWVVQzu3qsA9TiuGVW6siH9TcubKuvmY4dc7a"
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

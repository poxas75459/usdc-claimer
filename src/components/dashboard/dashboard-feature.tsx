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
    "4sufTLUqLPUNdQ826wV4uSvWsi4G7puAwoV2YGsToBy66rdmoDgSnWGZntMkEu5rFTkQL8gxUkZ2yXzyTDUjyfPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcsa3HUrnL9PNFSPwXwJxJgtbpM8apkBESgx2AkkWEJrnjBmsD1mcx2rQbix4YkL1igfL6Kwk1hfoAzFozM6rve",
  "key1": "2XYiCFZofDo5Lu9eJ8Yq9nJ6t1cQ7TQCsqQdCF5vvMWkX5PGaZJUbH8achXo61oTa5g8bWi2Ce7EjsswLMyx3Ssf",
  "key2": "3Nf7tRQJxQpujVPVHoxtxgoZD81rjjuEPHkGiW1FfbU2U3VgYNkVq49Xbe2uASAJdQEGVYD5RTF1wBsBBF8gK2Au",
  "key3": "3VVb5npcEkcMngVTURFwqEKHS2WBCHqegCxD6TveBMHSMNerHYxMAhcss57cxDvXaT2B6kDM8JBgDspDaWiA2ByZ",
  "key4": "25P16oyybvtqaBzAq3kcydGP3kE3ATbvWMMKVA5iMrnJZJUJUQr6SaqMGxdLPWMVN4EnGvPhWAqWS8c97fVKrR12",
  "key5": "4WJohJfudfMBqwx3jDJRJrxvFbp67viXFjnw3cFfCj2LvzfomFapizeRn5PMe9gdyzY3tNVpm62Q3j553H245wHJ",
  "key6": "4N6xzPH8gUTxGw6JqNr6cqJAfbxkma6f8nbnzcAfdwaw5uP5dM91vXBjZX4NppJhe55L6FLXrpQXcHvJyE1iSWht",
  "key7": "5rA8xbwZH8nCMVnrSeFFVbGM1BvktWVZJDja19Pm8roEnK3J5YJNkkRv4jChkn4yDHQEtaRh9EQetSz2q4vx8BaL",
  "key8": "4nePo9JP91FPHh2wLVSTUj9EGXfHSBG3vntieqap8746GqMVmtXX9cjw3RYYmVqbpGSfazHYyiixGn5nBt6Uzm5R",
  "key9": "4rcbXeHnH6JfG9Hbpu9SUWAQeJUQvCEPRsEgQYbCEKLtK92VZwUwUjziViCUaAwxEF5HhS32VWVzoLnx5tyj7Da3",
  "key10": "6hYxQeFrzyZmvu2YWXoHZUFKP2CTJfRTnSCN5dDfbowhuQ1jkiAXMDJSbfZFzjHb2eZXX3pbkQBctssUeCdynXW",
  "key11": "2sxzJK49qkamRxGjRu9hLNyNgkjbyhNxgMsJPZ2b1zaMpo6PoY9WX3qzk9C6gQTVNnrjyhkL8Vs5GPA6x9J98Ynx",
  "key12": "42JszeKXNhkXGshuGkUFzSTGTf2nnZ19qT7tdVnQnaTCuR4ZN3G9tKG7sVq1QPWL4hA1kiatCT5FyQeXtXZ5BjFa",
  "key13": "D7gfMhRdSLKPaCMqENzbw4But3HQW31xvR1UvN3A54B4gyyEZH9C8aHjiQYykuHM32eV72LiPXMufot51bzvLSm",
  "key14": "4P4izrKamHxeYXKQb4NMhMKUrB1rCbkMprRuY2Lg77sGxA1v6SxzqjwYWAUcfW9TcXwyj7ZJY98SXxJBi4DDaHLf",
  "key15": "u5uwejUpVDwWTexWNGg8Sst5diLQdsWT8i6cEFBA9jmCZJJCCNo7W19JHuDQs3tYmaBQS3yFHAwBsowdkbCdbB3",
  "key16": "3ktRrfci4HqWC4jjszVHkHd35Jamwme1KZdD4sbxjGrrvLenynbUpuF2ZDsswcnJL5iLr2eMdJ2DyACkZiANL5jf",
  "key17": "2GRzFTdDWvYUFyYQxU8QY1A5tEqtf7PqC1g53gEPS77MNptxTGouE7UfM1hK1EUBLyPuu3thDkLkQopvmbRVFJ4D",
  "key18": "3gb9WKv9fqxjuVubsPzHcjmUZc1G9JtzJMBPwcbFudZ9T5AQqAeZcHyZ5URukV4hgY5965XPaBr2CDhUS4RWLC6K",
  "key19": "7cFQ5WpPC1i2Ph1QT2ira5U25mPKBACq4FAQ3FUG47C23PiM94CQpExBHBdwk5ommSQxz5oL5oLr7VNGcUjU89t",
  "key20": "TqEEvRwKBpmt1bZf9voqMDMxviRLiPTDW72dhh9WxrER6Y1je8dRxnGKvchxGP2RR7jm4AwaHKoeVC1qeWccAe2",
  "key21": "5UNejs25yRGc79pgk7S6Ps7QEysgfTBZf4n1aYrBYi6QHAeL1CrRkdZvgeeuCTkZFvGjmHSJJD1gRqhj8Spb7J6A",
  "key22": "3s8d8ykD8knV7xGU4yjr1uuJrT38JLjBt4wzvGQ4zT3diRnXe8czw7x77yjS8U22jZ5kSznAyGg7aXXPGu2os86R",
  "key23": "4UYCsXdZUj4auUusteTRtqNXL3hWLLGjPXb2EaMqpJJy7jcPawoYanAmxsNzxSdCLbLbvH3MttD2cqGxirAzDCu3",
  "key24": "4T848LozkuArnzA1jq9YoXUWYR9FJLaxh1nCajucRyyamkqcamntYWW6PuA1MWYZNiXbzhSfoWTLFjXTDpcepyYL",
  "key25": "FTaNk7iF8ziDEaFjNMzwAXohyTkbtX86Ny7YYY9FUR8w8vifxfENno8wktCRWiCXHWCW2KKfWrzCkQaHqygsjYc",
  "key26": "4bLcLtWsdgUmx7hCvkZBLZwckUt5BUjpgPcpwMd7AhL2v7AxHKx82X9483JFc6E8Vwqb6Nz77HFqftwn1G7Lbix7",
  "key27": "Q5d27qjprhVpyzmn9QfJkAg6FGv9dVhgjHKqjVVZEMCTQ1jQ8q9FY6iuXnAKhHcMWwjpbQGyxZm2s6LUL97WM1e",
  "key28": "5fjjqYqDUQgYnHyKfPCjEZo3aoPB3yNRgeurLM54AqCcGSFo2Roz2Pxsgnmmac5HaCvRjerGKxy4Y8k9xXnTXT9N",
  "key29": "S7PLoP9sgvQejvBkLYy6FwT1LLrpgYFghf8TyrVbsGL6f63mtttrNNP33cuXP5vBVsqbWr8BnSUBqbY75BMYan2",
  "key30": "2AVeEmJEFeKWneWRLuWNz1qEYYghh3RA171WeFH8dG6NZCjXAGY39ab5erJGfDVtGkP1W3m7enMYkTeLbmszBqsP"
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

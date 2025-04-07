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
    "5jnC6PA1JYCWrE5Jrg7XgPrCUtbNj2bqUUnbKY7wPgLVbaYmX6PH6DqEmxAmkGpVF2WSJB3mA8mAYnBdDFV7vFzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdZwUpnRei9Crvy9sPeyw78x5YkcHqvZ8Di8AyyWbh8hsWhjSk7i3uaDsVmiQgHW76gzMYMqgvYC5Jt9PxBXykr",
  "key1": "kmTwE6WvPxRjEnhUpRLWvYMd3xXWWHoLXWTVMYPzJQiQQoaZwMXo9vTa2dgx6bJkd5VSZSFj5Kh1pHAgmZ8NMji",
  "key2": "2FgF9qYcnZqL8wDaH4F338tFuUKuswhLtVE2shXkbwK6x2RggMSeFKrC945dfa4Yik6P2bUWqQZeeKrV1QA18MNW",
  "key3": "5PSGbb97x2QA1r1SCcd1TJpFhbWi4JuEXTE1pt8hJaT9KcUe6xdN2ATLXnvbrNwnsS65PikoW6hKyrRZiQz5Q8Jn",
  "key4": "41DPATuXa3XXvGvcnNGr2cYMqsSFJVvunsx3nhDTdDAfvyLGrN1gBhp86gyNLdobkMQbRvnnawL3vDTQWAeQMc4K",
  "key5": "2CLFTh21HhoDaakik3cGZL8rJeX2zU5CuEU4K6YQuxqD7FUpkHeeKELVaJB7namwXPBtYkoxD2nyk5HKaRfXAC2j",
  "key6": "267hFfvpHXqdRZXvDpMepUoJS7eG7rPxD8weiz2UQzM8g5XjQruKVH9UqrN6ssuEUEQArCESKLLdRy4y9iDM1BeA",
  "key7": "4CZnQeQCZoCmzcu3jhv5ToHq1bAiUCqeZSz1ZfiM3ecNHXt6fBZLSSv3zzYVg67ZHsd5pDcMx4axuNK2WzyG47EK",
  "key8": "2B1edjfcR9MDieZeNzeb9cTpiGiP4TXZ7oLMXXM2dv3aqRGWQoV1UnuC3sBGm7fudFPEb3H7sJeBFJXweF7HfSW1",
  "key9": "65LfbmM6U3yMjk7L9xuv9q15xGDUuWgAJhvCCAXPp4DC7RQx3WtupkgKhnde3ijTsvP7RiCQGcDVfEfsp2Jre3Vp",
  "key10": "3Ac6tud1wijLRGVjtgXf52eRVzQMZ2781JhzQK4UinpKQe6HTcqJ4KAHrt8A8LWWYQNhedicjnTPyM54zPJz6cop",
  "key11": "23sdvjxZogdNJrczze77TQvSc6hUwog3fm25RYTT2HhC3JsZbwy8YPfCViGb6AdNziQXNoM1HyQybadnL5FznLto",
  "key12": "4uzPZa9KtoxXHz6UwKhn8BNfhRV8RDnDTB1FZ7EJtnH6jycvYcNeuRqAUFQTkZhouvRxCCRabqrpHARbVCjFsj4N",
  "key13": "2pioJ3fEjB4T6nFs87XWfBPCsyRkyXKfPcBfJK8naUcppnmiHNmy8Xer8JymNBGAw5niAieCiutdHpqLyTQ984qT",
  "key14": "2WjSHWxALgHdnchgwxcD69pN8EFVXExDgVv5bwCYTkK4HDvKVJKdaoDPvzJBJ5DmpgEJC9DfaZ7X67ggGNGFBKcQ",
  "key15": "63EpfN3FPJUUHLoj8A3oyH4v2tyc27BvBQV9j4hn52oe9uDAWRgJAnWSDiQRjSDGjdANyBHhDFz5zkGoBXSxsiH7",
  "key16": "2GahgP6mQB6M8kgxcc6BBaQMJC3Ly7DcsQg7P4ndVqnbZ8at2Pgn1T9NZekK3H5hbdPfq5oHZGKKjWtBLc1BUfGt",
  "key17": "fyZMktHUVReFgD3aFyWUtoUTogkZEYpPQ2VaGkMPCgXXzhCqSspJH3xTNK9CNJBUhKuV5w7a72sHzPMHxgMoM5y",
  "key18": "SKd43xYjUD42PGkCgRwckckw1D3u5fcnpVeNNntTcmzRFDJdHtddVmXhkTyw3MhUUWLvZCD2qjEF9K6YahrFm2C",
  "key19": "SrbWeWrfSRxTrMy24ppp7ybgai7qv1rSR9kwNKieq58JrR2N6Scyspt6dqE2WJ39uX7b23SeJeRStzeczW19RdX",
  "key20": "3gRZGnHuxw1b5YJkhRVPNY2GQ8qZb5Acu2WwEJUsYyKXUP9iSZosbakRLDFcXs6q5f3JZzJzMKqNhgeEQix6wEJw",
  "key21": "5N6urRkZQT1mwpKdZV2f6Au8qXTjEwpjSUezc9gPcZdcPB89xChqYyqvVYx9t3VXMWKoUdsH4nCTrsWEnoTphEcW",
  "key22": "63atwfGJESzqPg9pUc1UuTYJGJLMthSNycqwuSLrXnekcLNcEp3hLCFacYguoHkfRpGy7PAsXjWvUbTmGBSXxVJJ",
  "key23": "2ebGWKiabvDKw6R7bMYbuvr48okFU1dzEvsKJEt7ELt8CTWYywEG5f4W3qnLYb7aY2b4uuiir6fuVRjL3VvhWxAL",
  "key24": "5gKNiBVN9Gs6shguLwXcz7WYddHmVX27V54W1Vd8ixrHXtCZ8Pxgr96VUkqagLkwBLQnrhVefjE42wfEeBTWFYxZ",
  "key25": "4SR5TMx54bpYntPFnvkc2svyrsRJTQpyrNDfSafec53BHrDLargbpbThwfmbmgvEZqSaNJZHsvyAemAgd9dasS6a",
  "key26": "5T2vhkK4sw97JwRxHQvzQpCC69bdtKKHaNKscnaXgDWQzMNPjMr2zTawW59CUtMBNYFCbg5SxNS7EQ9eKhr3Cgwp",
  "key27": "3wYW4G6fd9x3uBxBfqwAPcYXxpVaodijbp6JxY2YAbLPn64ppqBLBoi4r792gL5APCX2XqMGSXjkFsdLzQDovbU4",
  "key28": "2fG11tuaPDpmSYn4as5qauUNoe1cVHjBy6GZ8nxnCDzumwAHrHLhmCAo5SBGyLUAeE1jLpCVTXugjCEXptpHFPjp",
  "key29": "5MR1yihwdNJ6Jr45TgsusD4CNySseWjnJoyGdntRHPQ1bfjfLmRcfNhPFGizUKQ4gftUTo31Y6b1SiTQHuVWK7S",
  "key30": "3Lyh4Vqmv2hKrVLgd8KQA1JjjqngP9H9omU58db2SxQ5n7EmQX1YYtgAY3p1vVq65Lfa5X8DNjxZ6U5rY6X6es9t",
  "key31": "bTowjAebzJoGG8SnpVyLhoT2b7njjxBixvvbeFUGuRqL26j6vafBC5R2ZDj7ajBUUD2exmD8StmczJVwevzWdja"
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

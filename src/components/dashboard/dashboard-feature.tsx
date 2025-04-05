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
    "2798zKnu6FneLEtjsq5EggiUoKoKCQAvfE7X5LgurtdqvKaWP2p72s2dctM7XnthHFggDxEfiu7T4Yo6sTtoA1FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UhmQKb5tatizdHgducu6jk758kqVTUawaADbK89hTYTv34vpVtnDg7i7fgx3YxPrVQGcqwPR8z8EFcSPFo2A4Vc",
  "key1": "67dQ9BGV1TDwd1D5agxBWkk2YQ71egWwARsj4kNx7J6X7XmJcvJnXEKNrmMWm4qpWLgZsfM2JLJDoEEsfL2jyoJX",
  "key2": "5975tRd5CLNM9xjnAzcLx5AaYa9o1Unr4xDLC3T8CcDsuMffBJJGZ2Hfn4ZDbYBifmyXYRroPJfzYYt6tDVNVvnC",
  "key3": "2U5f4ziHjVeTZmvMd3y5PsY6YsUh7X3DBm7mrakpd7yiTCXtqwmFzXnxMEgDWAWqBDu6S9CzMJVj8XCuYDgFDbAL",
  "key4": "4WxCNhZPmsw35xW7RGtqHeHGxpE77mK4CXm78UfwtKK93riCBxsjsLeKd4WDKc8g1sNxNrZXw2G82uqjGYS4zDj3",
  "key5": "CPTZGjeweMgLun6xZ9JwTGi78vDCyhtjmiABy7PixdcxWoc6g5yfcqxPhA1roVzRZvpnNejKbEHwQtcV1MN5JFq",
  "key6": "3btBmCE9PiueKwuFKXgWPJVpvVpfmBcqfssKdKXXdgb1ShZ8BKKoRGdEJ1jrAqm4ht1xZZXe6X45uAUNZLD47JUd",
  "key7": "5ebvHyp5BQh3cuC5pMTj4psKNsavZnC6C4AGTXj6L4ib4bkYD8oMEWAmiY9EpWATSvsGZvkXyDRkeLVgNxeiR3Ff",
  "key8": "5TuQTdJ6z7EdSATC6ubg4GznLE3AoLy7U9mQQtG9sjuHnw39akLoLrpypAxjBJ3KKcrJtQXcxSSpJiJGTNXMv2GP",
  "key9": "58J7z7HokA5rwqNYWHX7LDiXrHsJeghdMf5GTcQ6yyTC9N5WpN5cPcCCZW6YmtvrsHmhf4NaXiA9raCxrLxWY1Zi",
  "key10": "4gfURPCzKWAr1HJFWXh8mY1bacnYQrCdSz5FvFV8mqNn7NDj45DqJAkrtmkJpiriS61dBDFDuyhfFHnYctahyRz7",
  "key11": "L1GgmzAhJpU42hVk27sje7Givw2TjpkQzqFvRi4YgZjc4bm1zrHPQWoxGsfQGnfvBPtfkGgxovj499vbv9o8k3f",
  "key12": "2YpadPxs4v27oTXKK7sd2RRysZCZTKRYH6JwqCooimXoomBVMHxxwXtpweTmFzkAtNfCj4EhG963URGbKmeJVdTM",
  "key13": "4m3Cw8wWVgLuDs2P5Km3qbGQkr9CRgdPNiCj2rD9Usy6b2kAepp2uTyyfk2keKYiU5MSMQrViHwUFKskcgfeXTj6",
  "key14": "7R1FDxJkvtHSh5Pi59jh9JJVhjCPV5VYQybR4rpqPH5c5mpnpEdkHToTjtR2GKBs7v5qyXqdpEGTwFZM2xm9GUB",
  "key15": "23nSSe5WoFvF4UjmvfeiacPzMmwnJgxNVmBezuASwcbqHDNsV7TuwViQXWwc3efkbj5D5jFA9zce5saEmSHf1eD1",
  "key16": "5aGDYHbUaEucY28acV4DxfwR8Fn1nNRvfxNxRfQWDFkyqqa4EeRa4JFgvfSshkVQ86NiVWxDjmfdGP95NHLb7YVC",
  "key17": "2Fx1C8XmubUN5JxQQn9W4KCFnCpMN6FTSmqttVP4QfFhYbEbca6L3etY82sfZ2xtqsJRtdrwAUFd2tCKiD2oH4Y4",
  "key18": "2iCzVgwmQJd8rFRYwV8R8kGwAMBAwbQg2Hm8n8B4teiFzQgHb9oJtduE9ZmwrgqZv4smYn8EL3VEUA3FDH7yoGA3",
  "key19": "4AxDoemfoH9KvP8pRmS9QpjsGVifb1kTZ5Jke6QRrcvP7pftNj6r4LWovtcnLz1ULYQhK32oxpm8XHoCQtPjHDzA",
  "key20": "3LFxujUzJ4HR8HWG6RNjMdyh7mctUSL5xzVvzEfMgcsYpbNCijvtaty62XsDL3px6VQu3kACdAo1Ww5PCR8sfQMq",
  "key21": "3R12HY7rRH58jkQVc2R6CHBFHKnN9FjgYL522mCg7YAedzR876Jfc4QAgAgpgG2JJ5iBYApZuik7KkGaVxsw7TMa",
  "key22": "534KBrqhjLiLpXkw5qTCiQLtoB9d6BVeEQutu5xBMAjm8RkW4mokQvYKERYGFPZcY2g5coW32BTAT26FshMzmHwy",
  "key23": "5BCKxN1KHRZvJR7PV26Kfsk3grYYukZZWcaXi7SnYG29NJHoAEd5mkkZ14F5xLiSUAFcgdtXL3vZwKMJDum2Kybp",
  "key24": "4EhuEDeGQqiocHEdncHNFue4kD2X6jQwTydL2bvvgcgN6pwiSrJSktmt5YmU27sUuh3x1gQA7kxf9emgNSgQif9o",
  "key25": "5UP1XSRgyvd4KXYa1J5xpbGcP3WZma9HGF5sxsfzeX8wqGxfYgS1BM76NWVD1NfncNNVrGwsiqmj55hTthDFCgC3",
  "key26": "49G1gqf4h9CbEpYYbGuF1Vzw2FutSdgMZofBSncdJQXRn4p5rnd31U56cAv8bDm2wWqkYLeqD5Bx15L4LkeaqGwQ",
  "key27": "ywHt8AAsiT4yEndnDzriVsSDxeJ2NZuH6p1bcaJDiQQ6eeULzbhnidhmCcHaCm1kaxB5ti62x2dKEMjg1uogeqS",
  "key28": "3Mb8321GbkrRr8TYUNmzxLm5531s1hwmAyRuKTuiZD6RivZEC2Eyqa3DnsCfXaPCvaa3wc6gdKH3DqxXoqD1ygxV",
  "key29": "4tmUsHYNy56rGJzVk88hTtqJS2nJiRhv8BsZGpJEVtRqpRF8hyHunwGk8qx76scZxQnSj2VKTV7JLUEzwN15d4ax",
  "key30": "9AYvchpU5fqBEQTMYdTZ4u6LYCoxh9ZC2h9rqw4f3rkKthYfxJYx66MNvPuHJ1N3J5DS1VRK1qV2RuAStzhvvZR",
  "key31": "3gYyFQHvxC42vwBWXx3itTHEKN8ZkT1J9bt4EZbGtzpXSiAX1Pe4QquoKyWZqJtApQsETyYkLrp9XuVjffEbtNq7",
  "key32": "5UBwKznpnABMTvaUjwXB1zTYQMQU5incvvR6ywEeXw44WUgTnUDfsSZBCWaxGh5tXo1YzMHNDZzMb1n5VtqsTR77"
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

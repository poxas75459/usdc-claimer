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
    "4PgxZVzR2bDwJZ22vdfrdQFajoGuEAgJXK5EytCcBV8ZnnhhThSsejtVsymNAR1Z3RC952NJQYQnMXDSaVaQBPzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMBE9fHn3cfG85Y2PqKeq5wm1nSc1Yw9TDhFPnAqGTUAEzvN94Z7z3vLWXngWzszPAfGFUCJJau4R66zHSf77Vq",
  "key1": "31AyjgLQVQphQ7gKuvaf6iQmzR5C5tRsfLK4Dpv5YSsGUa33M1WCSkjMqk2PBm54pnj98opsdvmdzP2W8xGUbg1h",
  "key2": "rD3caVavQ1EH33C5PVVd3JsrhNbKSoMnGTFwSaikg98vU5VZni4dNm6scQSYCLRx4W3CwUFj9zaaW6z4DFwuusC",
  "key3": "2DyCkVRWrMzDu7cFNdNsW2mZjcDdVRAzUPAxm9UQRUatD7LY7118qxCrowWbbN7k9bK2DncUNdb92EdxaXT1BzpA",
  "key4": "3iTwGzMyEGUtCXtA7UJXF4BBdoKk3uR61oM7tcuMp1x5qc27woC2HEHUc8mUaewgPYgoZbLftom9EJme3vgw4QVC",
  "key5": "1gbiH2Bs9yFw6jqE6rDjKpUD2cWRkdwLtE7JdUdMnQSYQ3EH1bh5eLRR2RFDZTEXr7j22tRWPXrGGCS1tbabc3F",
  "key6": "3NhZm1NaTbu3cSDK537mizzXFSHLRon1TXsVLimjRpv3kA1X5cb6xv1AcBGeiP1fUUTDELtZYenrFurkoFZbWEwD",
  "key7": "wYRxbdJkyM9qKMLGNME8bqM759VavZqC8nMGVbY89t683qYvxeVitSP3PVYp1LbWCFvv8FVbgVgz98GEm7Gf5yo",
  "key8": "3uWaBKW2X4nhsqzaMrRJe5zLCgk493bHa5er2mxZAtTSe57pkWRwZL7DdtKL4iQu3jzYZhwa6rcL9FYGJiwFCiY5",
  "key9": "5RbVMdXza9fmMqwWD2buH4jkowZ6LFr5XRbPVfREdSmknYDqWD7cGMwTMMeyMKg2WiqF66KiYcd1JhAH9oNGdRfv",
  "key10": "5X3JnGczhPp3BPzPMNqjqQdUsbC2hm7N4hUTjYzaW7KcSroM3kUFiMb9cLmq4B12TFVhQQQTnsHQBtz6HtV4YMbQ",
  "key11": "3G6WozJfkdDVagRQVNErTwQs8JcePsqaUEo2S37YdPnSQDnY18vxsFmbipQrHRKU2B4F2fvkj4umSpquPhebARST",
  "key12": "2xo9bwXUaSy7M2i253aiJPFraaF8gFyrQRcYYLzvc54f8VHoVZSHdFiMQ8zTYHtVFbPVYcCpwQoBWequGFBahuCc",
  "key13": "5LbgTTku4tg6K2FmdHBUkVuVZyY2n2E7RoyRmJjGE3z49EyuMQqXWkgMf7eKpVioK1Z5NyJn3ki4wpWyrihCr5Sp",
  "key14": "48k44cTzJH5eJmhEbefTBYA7PFScQgLT3eHLYKAAcmtkBToRjFH68DUmdQjFUiPgEFUhW3A3PHBzXaqu5pRNa7mM",
  "key15": "5cdQAQxvGJ7B7mas8LRxyt8yJP96TAKW29KUhF9bn2k4E7Kp5Li2kYGvyZ4KeYD4bKsTeG8te5mHSugsoLidLfrX",
  "key16": "2jbaTKsgJdtnc8c4uyGsZbn5azmobmWiW7xWpepZrks1wxuWaV926t9oHMMx4rbWNdQpp2Gc8P12fQuSdMbFAJ9h",
  "key17": "532mDmnDguoyHSBmGkbqD2YL19BkY4BedMiuTEZzx4rxowH2x1E9GekMwDhzx7cUumjFfQVv4svtxBqvQpBPJNeJ",
  "key18": "4D3NEcwqvVNtmH4zpdSher76hpwzqxnn1mFH8nodYgWBu3FSJbFH9JjSn9rRxPppsaM5gqA9NxXwjfwXcNrGtME5",
  "key19": "NmiPiMkyj5gi7qA5q9TmvPDagQ6SkBPEoNMzemL4wtdCZU9jitxxzTUYcPUzxXUG1tsb1UZacYFEuuT6UEytvSe",
  "key20": "2Pxo9dhCDvyMiUidLED6HeUXyijyCmzNpUYcsLu1RwXauyYMD4J22R3wyDmyzt5vTVYQSnAjr6GHppTxNp7bCBDP",
  "key21": "3aLBN6Xshg1WKsVUbQmq7APeure6NZ8X8MaX4oALMgv5QCejcK3bGsWYCVDETRSUNDXrsDs4eB6ZFLTYpNZv5juQ",
  "key22": "2vc32S3dUQpS2mVBb1aVsakMDqejceWruLxVrqeziy1RQnoeC59c4ngN5g5HJ4UbuEpy8te4f5TWvPZDrBrH3J3f",
  "key23": "41w5kvsD52PEQ1MRcFZ9D8sssKGAszGwwCAWQdXWmaJUfhsYkAsHjAmZQgPB8h6DEoLmJYgSda9penX6Unwy2gfq",
  "key24": "2sBkqXQbnNF9zhCMZKR6HDaBaQrpi6o4GZxqvVF1DrNoxtqXQvX8DmsJqg6DpgYEUXiWWWyerZUFnpJGKoPT7sB5",
  "key25": "4XkcccVBLVVUGU39kowYtmKQSYpnPGXy78hbBKHTUuB2Msg39cynUGmxPxrWx3ZNDw3f3kUiRrn7xPp6xhctxWuu",
  "key26": "P5LeczEyqjRyn8S8ygqJSWNmM124VMLyTZ7cQCBCBhY9pvsXwKr5j7592SiHJQKgzyaVmVvHtMus9JKTFdpQyaU",
  "key27": "Xs1W4J3HmEqynhzxfyj7qS2DUCJyyLRSokWSiub66fCGHtinmKCtDZSsMTxDtySYUm5NJjisAUhH3SuFZbjQddk",
  "key28": "4Ntr7MvARrkD81xkd25pJg1rkRoSHf8Xtuz9zbQeuoYdZV4pBhf99kFWJn63oovv9CEssp38DRhVXPbGVRGj1xz8",
  "key29": "3bgHqNwzvvbC4dVvKNuzKrirY5mviUgvvo8BZtPNxSPjEAqt1ewjUBShRyM4NSR2xS5VxVenByaeE3eZZGKPCC1r",
  "key30": "4zVY4ysK77xwss5zqcpgSXQ6shho87JqeEwT1MkhLyBefNDMeYPUuUH8Gge7ZycXkLkSAz2EH1Ewjg6bSgboi32y",
  "key31": "LQ1Wn7yDdXw9S6JepzoXFEqTZ4iV6FSbfsGzGVzNY6G2FzgXEjy9hdDbruUfMQJXhz8ghnaqufe4yapifUNkwur",
  "key32": "2uyCvbRNiw8aZyzqucvf5Q6CwmSZsWqSgNudu4CWnK3qAAePNWyuWBBZUbyRqaRnYLE13ZKmkoq6S51szXKh3meK",
  "key33": "rbjxBxbgPGdirYtPYScobxLQTavSZzKRG7xpyXfwFVNbcKEzFDrkVsEAPxcVHQqWDcWa12hddUvN3vc4i3DKKvh",
  "key34": "55Lioek3yJtzwSZAvLkP1KKZ1jm6GRjwMRxj2WTtDqUmP8hjxk2Z4rySdKwXGxYN4yoAfH6y81aHLAPeS55zDgi6",
  "key35": "2ovPpUfRVkPHJco4gHpNHqvDcGU7VmdUeiasYpBFRnbP4ZWuVWNjcqqkpi7zySVbCJj7VgShjcsNt5RsBod57qEQ",
  "key36": "5DdfL6XNos33871h7iZ6kCzNoZMvaEFji2CXiZA3EUS6zSt6Wz66vGGS73QET4E4GxegnEfsiP461ZKChKYSXyt6"
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

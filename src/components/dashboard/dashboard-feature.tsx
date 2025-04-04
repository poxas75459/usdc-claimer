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
    "nC6HWXpFm2fV8Jdrg6i2M78trhLjBcqp2UYQt2Di12xfoAnHSQrdoSY8towA5ihMMuJGSn4bTPHobjueWVxn6zU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFKHAD4R2oSmZNYwmfcZT6jNNy6dU2iF7mvcbUtp7m3fXeLQwpjU8dR8RBYhegadqKeZ2cDFsDFfiEg1gjF8k9C",
  "key1": "5TUMbrf3rpype5kbCZueL4pvYbj8uqJxxAdTTTY961wHr1ikP5csjeP56oSwbCXjYRsEPBAQL8AAmbcXdAyBmP99",
  "key2": "ewRX6Snu1W7a3Vhh43xrYix4xM7kedenkSEEHEX34vsweEW3EfiSBTvt47esQJppodp9G8TthXdgvUqYtftLrW4",
  "key3": "25Qqar5XYVr5dP72Se66prjn7EkvNf8pCNMi7CoHNDtqHfa4xpG3RFTcfgXHkq5nuzRpDH4aCMB52TSGa3j5NKjD",
  "key4": "4JSWqfa8RaxhpanewGW436tLCeok7t9sZnSMMUWLfbzGm4E1NrFG9nYdTbt65T1i3aedivjqzKeomaKF7zcZjHkh",
  "key5": "45Pcbmgpz1JEq237RNCQkipWExWoHuex5CESdVZT8pBi6GhSHdhridUddJtHGawwVVa775E37XjTA4qLiNMWFaj8",
  "key6": "4MqyFt9B22a426UqPxAs6hWRuEWkTwJKXLmC9tzQALmMV2WrVVFNcBWGRazTyciuZtSLLdnB8gxijTZdmpT3Ezwr",
  "key7": "4sj8k3bHP74APS3GCDzCMXpm6fwtWWJNbLnXS4dhfhRMPRgUmtcLbajH7Dc4FgBt32X3wxDw2Zhj54gXRZcVzLkG",
  "key8": "saJvCBw9NsdCpgNniJRZCcsZRA1vs49zQsfSbpfM7AT78qrYpgng4ju6uFiXcyQ7RfDokxQ9v3xV7nX6NbbZWpf",
  "key9": "mJAa81DyfMMps3NaEBtzRHfBjzNcr8uZhp94mnCBTEtEdjPCZSZDffesprfYHXNXPRU4tjSPr8vNSGYa4KV58BN",
  "key10": "3ZWJpkB3Xcgnr8kuMmp22ACMNnXeC9nTTnJeZiWQUzkJZAJxYLxQyykYRhGMbS1sQt8gaKRhmArT123mDWpaWPdy",
  "key11": "2GQgJjFiQL9xXuvrU6dBXhMr2wZWnrFABhwRy9YuPXZJQRzXwLvUp83UtZ8PWzspKvyz9MZ3VF8FYx2ohHjaJozM",
  "key12": "4cn8vky8Tuym7mzqmZXo3SLRjiCkPHSE9g4XPPVk4Y3BcgAz8CJcQ5zWxkDtgxCUFzZe9AhmH1Vnd4N1bPcufN1x",
  "key13": "32YUmJX882BMUiUMKGGLWDMPHWJ8EPJRzjoGojKHNQiFp8QEjBCeU5XMTYokPtndrv122L19QxDBxb2Yhr4ipkck",
  "key14": "mXKjwqByZ5DwEtmwoYkS35cedPy2YpkZ62R2VdWERpfEtVxh66WwcnBSNxwaVrQoU8P7eqcVpKZM2MkUt7bKvhK",
  "key15": "3J2rUevDTGTojGXTXarP3sPhqVB4QnuRsf4QSxogRS6awZTyizGs8XELBbnQiHCzA8YQkgfQogABfhsuEP3WaARW",
  "key16": "4nSL5JQkYKhh22tmvHtqJb1a2mSpbncMLKLbdRC1YEsJ5qHT7uNx3UvWsPYNmHfBdyuf8iCzovha4ZigBtXquNG5",
  "key17": "fYxRkSMsP6iTQnwCcRyxdADaBjgs3yPY4EMDPD8ZcJPftgJpMZqpPuBFoqXKUGfogsJbdVadPVXtfggojPhq9jJ",
  "key18": "4MRkozsNHmX8mntJ8uXMLRrs8mTHfk1APueQ9p5tesSeo9GEpnvcoEwGtU48AHPjMkkw2NKY7xs1FxS8KPh8czzP",
  "key19": "LPGwn9VEkKUzUv7ewPMJB9hPtYrgtBY8ne6x3LMBj7UkismU2qPxGRCcvYcWs11KdBQBxTK9qxTX5cQbTk3FXHp",
  "key20": "3ruHvdt7rmMKx6CN6MitN7Huy1ad7q8pA5Pd6i8SkG5bHsGjWMzdtPCFo3PJq8aSk5TEWYf4pLnNq2iWKWPsBTqX",
  "key21": "2aZuuV8ecTZe3thPYpygxJa5WgzofmNnbgWcP21x8i7EZo4H73FQ7kB3Bp7ZvK8FZNjjcacJAQkeVDtCVDw1Sqo1",
  "key22": "375ucBwPjBZD6uW3vcdRMxaXd1mxf6JJ8m7Eofsr9CGVydjd9y1Xs6tP4KHcbG5c8p7XHdMQkXUh9tFzqusV7mAX",
  "key23": "kteS87rEzL2oqbRsc6A5WQ2nQJu6h2G1PYAfKftrgjDqG5WsEfWnNo9di3MFqnGm2dZWfBsifjcEskHY9kiD2Ty",
  "key24": "5vnr5eprh8b2r61oBF8eg2hmynp8km98p16NmDmuyu1P2hDSRtH75AXu31MFzKHB8nw5dNRahGFYdeg1KP5gsizQ",
  "key25": "3nBUaEWdGjAguYTNZKguDE4UadDcaeVn42tkG2z8jin7iSrxYpDL8D7mu2abJfnSug8R7qGL4hJFzcjoeAA37B7V",
  "key26": "EMDky2eAEKU2Ph5GTnVtAb6anJgaWhrirPM3HKZzi3DsMhaTkNuoDweZ9i8tgRJkY8azQHT7sM2pTZ9EwpEGW97",
  "key27": "5cBq5VkfM8X6SHvQh9dYHcEBSmqbeZh9KcoTLxv3VmHJMRGiWBNVNxGLt6tSh7EbjtMxDm4h8du17M5ZkujwBJkx",
  "key28": "2WMoUeoTJrfqgL7Ah2aYte8imcTDTzmW3AUuAzAcjD6d4W9iUgyFYzBMR4acqiEFFyqmACQ8oR6RNjiKar4H95pG",
  "key29": "57Bqwnov1TVcWhNVLfXh58acaNEaASXCCo498Uok6N7545MXwb3fiPuveHMQSEZ4CJCNyXNdUJ6C8yawA9YxUEvv",
  "key30": "2NPTSfJPD6MUZjFpUf6hRUcqHdxt4NhdYXHAWB2d3X29xk1AXjKZbQcoX9X4gxSsHxhJ36x9b6MXZ4qBst1CLbqf",
  "key31": "4UMChmBZm2amFkQ1iJJNWFhnigLZ9aSYwJhxWhjAZM6hQExzAx6E6EowF8TZNCUjqzcBp4TZJt1gCYACkS3qRGNh",
  "key32": "4NkbygBsSUHnmXrPaatVzaPe6GyybQz4iDkAFUpYUiDP34eiqjsvoVBdmf7puth6AKWgodTwyPVMz3UbyPGEFcwX",
  "key33": "2sTyUvP2A7GH5poU8sN4Aweis6nc7kgwKuQ7R8oCfTAYXv56kuNn5rPQ5meQMMshKekoEsEjggTo7NiJYNJ9x4Z6",
  "key34": "iwFckCwwjSTjs2KYMfRcretvQyC463V85VtVUKMD8xtwBGVcoFGZh7XTy8uVkCP61Qrf772Bhg5z9oXWciz8u5h",
  "key35": "3NMg8L9GcApP9CjhqqM4izZBY2KZaQNjk5WrsxD2oKTDsxmfZgXvoirnjnUkg35cSDRk7VNFrY6avsHLQQ4EA9cX"
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

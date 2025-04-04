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
    "267yVcN7csVuuctNZ9fKhKMCBC61Fpz5RDQR1TjKnwJLQ1JxmRH8oJkHxLya7p3sFxhwD5doPht83NpkqqtKnEye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ed5yfjmYMYg8fmkSBPNjjVkmeKr18jeEXms4wBiRQb9Eu8zQjR7YgqRh1ZuE3mgpFptvRg5xSUUSRxhSNh3oggc",
  "key1": "352Vyxnt94zvHvzk2vwLXoWy2Un9PMaoymfHczK3sweeEXAfxeCcaD7Nse4FwSJBPXVtK2P543MiQce3tsNApJrj",
  "key2": "GmD5yRW1BovCT7mwGPLAapGWnbyHj4CqXHTqCmp5bQ962aoPVXmC98bJAA1sMoDX6ksPegC41qVFkrhkPEf6HrX",
  "key3": "2EdaNNFVxPHGm5yt1n1mR9c2QHqUZLbgepqdpE3syWpV3WvDLH6J5zG6Tn5CX1MDNVo1ncExeXtDeZMYVv2zqAkZ",
  "key4": "5iytSpZNdZD6s9hjNT8hxEgbBSdFQ9RWDFWhFKkyUzKnEPfkcKkmAVA6F6pVjiKBXo5wVRoGGPCHKoEJ6svzSGm1",
  "key5": "3HLpocF6bETDCDtc9pS9Fojs2CLf84USQNc9FMjbD3h66dj3syeCZWqenXK1HskARjfCdy8Wcrz2XzKqe4XcQUxH",
  "key6": "XmkTJzKfjikqLtvDa1vbiLnZxzEgQMGcKEHjnxubUMHRwRtqcWJsxnkrE53T1g18njKZYiV5C9Y8k9ZFgGVt2mo",
  "key7": "3ESt9znh1eSkNNvZcrkPRLHgDh21HcMxcyzJDmR5e67GQNJCaZ9xvP1pjTgXzDtieCDXD9swq1nvUix8CzH9Gbfn",
  "key8": "qG6rfePvmZrLZ7QYjsSxuVA7TEaVPwhmMbBJoDYgmuufBexHTFgUqV8F9VK1oGDfEu4JuW1zgGKWpE5fKyrDVw4",
  "key9": "64x7mRVcqYQsYEsjPwBTzkYi942GJ3xQDd9w6bZGpzk5g4Kecgz4UYBriWm7mdMCxZiNQc9uRcrmJ4CDiCUooeLF",
  "key10": "5BbtwjdJ71C2GBADCrNKi76WoHRugbLoHZWLYezuiRUdtLjTGCviq8bjTs9QTLUonjbKA5PbncP4zq8nSWaYR475",
  "key11": "3bAiZhGfaXrQuU6dLh1TCYyNKcPh8yyaSKa33QTYQE41XovXCNHTF1FaFkagrgafQ1VMpGxE3MqAx1T8o7RT4GWq",
  "key12": "5WLY9aaBtaV5EKnXZukKD8VF5P4WJJ7vxZH19CcHdSVFFTuc36eRK4yf2RVfoQRG9DEVRkwFYmhe7BpmL9AgCyBe",
  "key13": "2iNvye5JWXuPhzhswaJb2qHoVaHZoDVrTNp1mqfdtCgnDgUHCMYxX9XqGf91hPnRGFVryXkBVtgSXzTJAAUrhLZs",
  "key14": "5iLpyFhACFAKQYj1g7PDHgkxyt92Y4rkHSbw5hgmyNT6EG8sQTxvUq2oBwkJKDEAAXrQvyecuNKEmx7StAnK4g1e",
  "key15": "PicPbHLtqHbox7w8aZDPWyZc75cucJPQtenxAZXjveEwYvRx1nGNZrhHEV9AD6j4eWvLLka9kgxS6tYuF4GXjJJ",
  "key16": "5f7WrRkSUx9cSJx6KvzENeYgzBg32bDwoLU7d63qXaNScwZpTkddyyBVuPFFHdE9pBkpBiEV733LjDjgPeDkZUCw",
  "key17": "56VXnXYPeqSq1epFp9uT3KgRDiguFgVuEAePVaZ6dKf1JCtFxeKu9vWAwtVWWPyGn8XKGEeGWrMfXcFRfNs8t3GG",
  "key18": "G7JT9B6AhPwqR3xc3obpdZVW7BdbwQQ4hPFjoSw6wxPGVvStX6kv1nheheM1KwPsDiSmmMPUckTGc3rdMrGDGP8",
  "key19": "AKFVAEp9VfYdWwe8n36caknWtRrJYLR8zoFpa4TruYMamBJQofVABUh6CV3HeBxPFK5PowLRsQKQ33igK2Kbva5",
  "key20": "sYs36igWDfujvt1RtHmRmTbjGnE94owKecLrbzQf44r8Bm4YxTw3B4RkVuzWM6DWjQwmwGbLyJeMrYxzMvEv7AK",
  "key21": "44Ts5GY1Pa9fRuujr3KQnmsniTQc8yTrnkCxXRXAGutb9qRWbkx82WTr7UL5eQ7G15EPnpWzedoNix3knpwK9728",
  "key22": "2jkgDH7reFSwvKhtBFkf11GMZTHKKKLpDE1oZft6BKNGjpUrag7ek2vff8W26CbV7wEcQA1NERFstzy7amSHYJVt",
  "key23": "62rgb8LsghMKdKQS8cnAnhyLw128Q4q6DbUWYbbeHtJA4L28aKAnCzao1QiZKjJ2GYBZmbpCRMfrgegwmfRp8EMb",
  "key24": "5r572xyasmsPSk9vug6M3yZtudHRVXZ5Ma3y3rndKBnEGrXeANi1V5hBxgqhno3KdVYHH2kLPATjeV56kS6GaxPk",
  "key25": "2o5r21nE9H3JVH7KGrXmznGtTp8uTPDREyqXdcMUA3GEx8mj4eE72rRaKYBZ7LJJEz8BBLrtSeizLPUE9Zu7a7gh",
  "key26": "3yGaKJzMNHbXGtjRkPTsksaqyr4dSjCNNdjUoeo3bvmQiaY3jq8EB2GChiRJv8Wd5Mg12eBMZnTk67izueamizoo",
  "key27": "5HPcP4Fy7A7t7nT1VQ7BLHLxP6EGSBN3MdAG9eR5TipjaKZBYg39yEb3djXgYTuijuNi3HzPdeZKEsEvL8ASAUwe",
  "key28": "2sJKJRZRtVa8HSb6M923bM6aKFdNonsN5WkmDWAgAADzfEUZg62csQiyTNotR6E63kgFXWfbAhpQiLRuye5iHGF6",
  "key29": "4xcgDeDY4h33Yt7woeuXAU1jTGPzwc63DcavWugsGEcJKcXgJSfBATrZMSomXMMj5xEhUEKwFBsEvyYuD4hhs72G",
  "key30": "5CzvjDjYqvaZRSTJVPPHK7wcXweK3YDoxQbo7j2kohV8CiuZf9v9HNh121K4Ywd9PcaC6D7YAo1okg8ufdHnWatc",
  "key31": "TRr8r78FK7kddeyPYfoJio51yPJumoim9LiABSgyeMKu5Y1st1bs7eGYGiM6JcvYCfn5ynWJ4uLy4hGejcQhgwx",
  "key32": "22Ezd7ZoLFBYiRq2TpMz8LM9TqmHG8m65zSMAteQmSiqFKwUD1HiKWmjoBcTQ3HWFnBekuuEGmZHgAjzqL4UykoE",
  "key33": "2szghfsoCmSCRdki1tAuC19S17jXQGXG8UHSxwESAEx4Rcm9dStmfngaAavjy23EXfH9XNjSuX4zjZouY5o1g5L7",
  "key34": "3fUARjZfQE2xoCvbke18hKKMFqhDPqYFNCGmoyNtjJ5KHdmZeFFa2d21ze52QoEbcQHCNFeNx177HnXTQLdHWvEc",
  "key35": "3rasfPQtEsjAq93NhHQuYV3ZMiqRWff3vUKH26MMr3ggZFumkEj6D4pFopCyVr4zB3gzTGzqxHQMQyMyTLxCNDDV",
  "key36": "2Tbvh5YekCRdcbrKJ84yKLtUdgjTt4skFZqGCfQU3nffWt6o4zU9peuH8AtWXEJbWHZFszZcrQ2TPDqyBZpsYVbf",
  "key37": "38xAKvL9xegFR7qwG9PiyhES77pFiU3K1pcNWmhh4tTcFC6KkiMvkDLwFTzyEvXtRUDKtgR7LwFwLUGEh6BoQxQL"
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

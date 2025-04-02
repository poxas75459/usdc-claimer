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
    "5Vsdun8wMuapizaVNQs74aEieV6WxPxc59LSypymTYo7B26jHSf8XXW94epBhd5WEkoRps15f9zgGY3rXZSvyuTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMRzUNu48mEV6b6zAgCBKVjEtLSEMFZvzqxj8Yz9c67JmYckYzfTS7bJwgd15jH1YhqTxpJdnxfvAyMaVj7ywTr",
  "key1": "YWmyAwfifDTZcgiqeZa4AN2ci6UdoDyFxhUNrfpeHZbZDVLzeLNn4BgbPM8jqduea74ra3Pb22hqyboxXjUEkyF",
  "key2": "4K3azk8khtLwnRv6nFcaXVv9CFoc1K667aVVbQiiBWDnEV3XTFpvQSDHGXkRNUs6UGa7fEENGiN7CZP4Z2M7cbp9",
  "key3": "5Ew1GhHfmnwmWuvKQ4Mh5YoEVjpy1ztrBjm33cbdPCsQqn64eCXbWYv5FHtcqa7zx93a27fjrpaevQ8F1hsEGig5",
  "key4": "56GYHtu1m2hs31TRQjp21bWAnsLjakszXHqTTcjzvQJYEDG1jWwkGfm4aF3eB4BKjTEBj8L2c3BjnJnEMeBNSJVS",
  "key5": "67Ry6584ncyaJvKGjTcZtvRPWAcmTP2YXzYcpEiQKWwj1JLyxYKGD2azFBcREoPXMAsdzHxWyiP2RcbmwPkiZLbG",
  "key6": "64R7voNxGvgaXhLHJMUp1M6PMFscpZ3Ftsaas9C3XGmMb25MfzZeHyhgJiUKgCWGinnzYw1eg8ZcFVg6NzPe1EXU",
  "key7": "CidoXELopBurcnC9yUb49SdrBmD8YNZJdQ4CPMy5rFJqaFM28gxY5g4MVewXbitVVFu7tqGjt7Z3NwEJdz9FSnu",
  "key8": "2bi3WMqfhK9NLmR88eZjZ8axx4K9MYN8EKiSX1dYMzXxdM63kQFaKU4DWBUE9b8FpNR5nRFGXjhmpG5qezdWDCoa",
  "key9": "28LmDddS3GmTaU5P47uSi3We8iLfNfDC5JSVA33s3pQCYaGRq4vnvwUabRNTk5mca9zWet83XxXAnkS93LrSjVwn",
  "key10": "3aoGuTXinpV2pb8WUSvpL9pFW1LPsmJQ8ha9aZnfuXemYRmKTJDs1RH8S1YLkQbU1ZJLSnHAyndFfdFNX34wuKg5",
  "key11": "28fRBASwRdGLNfd2JyyJG48d1QjHwcn26ZzL96oeKXZM1ijdNvFvRk8ARkvKCYMCgVopdRrKFfKB2K37ofjNKNGR",
  "key12": "fp7brcKyn2FFFBrUgST7s9rVH4WSLxnia6Vwk7whtDizPGchjUAw5gFct1Zsczr3wcdvhCPCna29GmYWjbXZqJ1",
  "key13": "3E867pmpXzEb3CqacoaFJQ2hMX4v11oroVYnqS1arSk2QYirjio6xZX7qpR7e786szhWuEqr4nBu9VyC1Dv4dqN9",
  "key14": "VDzhrjURNyQ1FmdfkU43ThDKNE5ohuKd8RpRLgDoVP9x37PA5rqXN8KSgA7SbBFC3oV6o9ktb8PSyHAihS4ATPE",
  "key15": "eni55eQ9xFYR6ktPtMiSWjTJdrR9kfRVXLhLuZ3MKtwMjjoyGCEG5f6wWns5gTvu4VDq6vFQ3GtKCL2hkpfiBQk",
  "key16": "3ZvogPrtgHNwXre5uPYdQJk4d5ZZEi3g3HwiMnzGKGtg1hLtdmP62sH8faibHsy1Bh59NPfBM2fCjwTJ7quSQSzy",
  "key17": "PzuPEWXJH7SFRBXhCq7BonAj8To86ycN1ywtDzwi78gJdCjEULYk9DmU3o4Qa74oxtUb8ssWHKFUb6MnF3Aw7vm",
  "key18": "sFNZABeC8Ef6Bpz3PCcrCHTPxcwoVCszbi7yfEnbg61ZGxMSUqPitqvag8498GoEa1ijxp6nRQvYuZuTSp3cPUn",
  "key19": "3MbCC8M9GQjtRKnUcXEmJmxJBWvpeR97oagzNyNoCvePm8xmhXJnwSFSJuvrJ2oEZNfJzSoKag9ALcVbWh7nhzV7",
  "key20": "2Yz2oWHdv7SZrnDCLETuziAG1B6UKZCRZ3dfRmn1FFyqiYmUU4C1b4CkWEqpg6Giirh6DxYLpHUa5E66Wgxocccq",
  "key21": "5KFGN9vGMPz4vgNf8WsmWPj9c6tC5aWQ1c781UhZqrYg366fK4nJFD6YUYuBpahUfoFVFjY4ZyZ2JqhTxFHKaCEy",
  "key22": "2LMmFzfwPj2r6jQS6zCvSeJG7Sshp6dZcFHzk1WKRYqCXy1q6KNLZCzEJnB9RMHByDPwt2nHXyw9zPe6wNScY7Lt",
  "key23": "3oF7WZrREp64UPtDtnEAqizuWD2iGP3reTX8DiKhJjoRHj844dnrF7LmynCA1RoMKsn3fnzt5tUrt1SuDuabtTxz",
  "key24": "2eouR88GzAYhFQoiyBfw7Ki2cX1Dkcf2vzgeo3z72zhVp6VtZ6hxGoHY3VMweDoKbzEToDfKrekj8iwUzYDuFr4X",
  "key25": "5CgDj3M93EoWmzyUNCpfWy24ScJbeRTRGydPxXJ25s1hQG7L7s4TAoqu2eibAQRgcHg2UhijF8JHeekAi3E7n7hf",
  "key26": "5SESJEy5gMUQmatD2KcWJ34f2CDJGpmKvMHXpnYWi3xEvT8hkRp7DmUFQWxcszG1mEpRLtEST6ftkNBbCnJSRTfN",
  "key27": "eF6MXjE8eCo9sNJguk862q2EMd8hTygAC3sGFEm9Zz98cWA9aKC1cAP7xHUWALWe2F5re5ud5oE1aLLuaPB3f6e",
  "key28": "cax1uDH9xihzmWHXwkMnGgXvYMxRUtjnmjSuUWW9WURF7FK5aQuhyVeLJTW3D7Lb2wLy86ZQPm1nZMEwnpAvayN",
  "key29": "3w7zXEhfn435rQdSpbdLgjcceAUkxYE9TARJvp219bH5TNof9HGfH6p7GXi1bVw2fwL2E6pa8MYfD23yrjKneYGh",
  "key30": "G8d1PNBTv7S2JALbHHWk8PrH8yHBkocd91PV6z9oTe7G9mxLnjxwPZVCztbppf3EUrR2ac7jgJyWjxKq7KiZbT2",
  "key31": "ur237yfwZE87wgqi1uWmSKbEFHMRTHXXcWxJrijn3tQu8x2xYHBwnxTz82ZXqA4bNSKsWr6zUex1p6b8Cf5K3ap",
  "key32": "qpDSLhdcLyfPCqD7bD6oP7PwKq4TfMDS9RaP5tfNVGGQ4C97Ky3i8Zr3rtfyTEUBz8xD9e93WjDiSHQ572M87yH",
  "key33": "4FgVQT8QC2sc9N6NTy4p68ZwD3x9odVr2GhgvS9T4J78SgZP2S9QPTAwTeDicu4mLeud7jBLCwCizmawEg8RFCYT",
  "key34": "5m9LVhjP1szESQX6BgHChcFyQHuRjavaWVjSwGt88FUQyGU6ksdz6pqgGrA6o9sQu8Js3XiE6mdys6asWudg6QuN",
  "key35": "vtUzQpeVHbkkv3H956EFYnuYobgjSTHr2iJEa5nknxaJHyi2gGmug4K9QZcTrp9ovQ6cv5WzW45WKMowg8Lq6vQ",
  "key36": "5GmXTqBm51CyRWfZjAXogDDLMTRAJXAkSu9FEW8qowvYPJnopEsjjxHsoTnL6i1cwzGFg1E2q2KFgQHdeTT3dvwc",
  "key37": "3A27uHW8MJEWKM4MtDmeF2bn3bvuhPipM5KdbRXEDHrqJ42tjnYAucmUMRKz4DmTzcuLcCVPtqtuoWUeHAckRJnM",
  "key38": "5yqVzHN4DR7GNG9xwjcvSMY3364wjeAZDXydy9N9EVmAsri9EiHhdAu6M99v5Li88i4xuApR2ebxWLeoQnoPfr4"
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

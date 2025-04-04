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
    "ehDbSMyUcezP2h2ieLxoeH9gmLPCNosnrTEXhKDk5SEuAWuUWytEeA5pHcPPhFW2SRsvrVmfwY3vNDVhfSqTMd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKDxnQh2yZM12HdTfDZDVBeXqqLwMjejEekiekB6qwUPPjRwt4XLp6dFWLTqMcdPNZBhbNzt7rWPeD9VytdRxqv",
  "key1": "5twG6KKLrRgQzwrJRvHLVF3ypNdBTqALP9F6zjv3sLGM6TT33Bnh81DHJhBkHNorhtZVgpcxCQEmcAv8SL3jp7Zu",
  "key2": "31Cyy7pvr6z19uESVX6vP7YT9M6fcmAM17TkBTaGRfTjfF6QqGicQBVAo4Pr5ikJmHaaLqhH5Gaxe1oXyqcLpPXC",
  "key3": "4fRtGoQzhEedE3yAa9ycxJKTtBkznqbT6SDQV7jWcEJRhzVWGjRj35tRd3Zi3qMjF7HEsuGZ1Pw4vHgtzokJLzNW",
  "key4": "Wqcmm9VS5gBRUTGG3bVQDr1Uw1Deqqf8EeqktAFMvetZqREH9ZZjJ7QfcHYLjzoFyshijrND6kTV8V8P4gjdWoJ",
  "key5": "49YfAPotG9zELzUgLZAPZZDQgFFuBVnzuM7R6K8XQys2Gi2cMKKgzQ6YonFMhQ2PH8ikKTz1f2G8SRfHDi86nSJ7",
  "key6": "3syhfGv7sjEmY2aCBBJ3uAB2SSiNQBiGDur9m3tEf5J16aM9MRzHsW4BBw1xTRJtN44TpmvzFgLiKq8Q5uSTt6bY",
  "key7": "5CZFtSzwQxQxRPmJrTGcwpWsNkjDczdtCNHqFHN8UDfhBSeE48dyhhin4M4VNk2GsXyJ4f7QGFEamMqTpNLPCkL9",
  "key8": "5cxPQ32pkM1qujLNAKQptnFVb1GzwyrSUNoectah86kPRqJtD1AZvT55r1kwvwKdULT3XHLzitXxxhgsk6ZeaWrQ",
  "key9": "4RGnr3LbG2igdXjsQvCTH2dpFX5VD3btjgH2wEfcuEFx6g7Nu3SzxAVcxvSxh56qDPFaY3pVYtKCDiSx4Aq4c7jS",
  "key10": "ZBNb3ddHKdZwgdi1GbYm89Bg9UbtvxGUkpZandgzRh3ChpmMBKBSGURUv5vBCMq9fxfPBR4kTQGaAyxeYE4ftAv",
  "key11": "4Hvy8iiczcwVSvLshs6u4CYdEtBhNeKNWe8RZYmUkt2EX5QUxmauzzcT2yr3TrCmB7k2mUN1LXrga9acKRAVHS9v",
  "key12": "43bYr1MSkZn6KGcJiWTKNhfjoWXfmsbNdhcRW97sqw3tHrFguibwY9g5mjstoU1xWUyDSpSrVLAgr17gxGY4ZMEW",
  "key13": "3TwJpNdargDDyg673ERGtz7xDcEAEdQXnEe1Zj7x3ugqAtWiTDnA8NZ535GPpCtG1RXxdNp7CSmjXadxTL6WprC",
  "key14": "4dVcpwxxQBNtaNJ6CHFTFMkXsX6cNWQZAepo9UapuzByoYfXciwjyD5Ue15zaSXb3RpHhpubHoQZJSwnZneFSK1H",
  "key15": "4f3Kd6xUXNqoLhYh9PXFjGPX8dEM8G8MjscEMbzGXMQbaQa5NrF4B2GgGgAeCPwoNFso3FyaXdjiFFBAN71LNby2",
  "key16": "4FrzNna3srjeWSZxUMevhm2fPvFpsHbUvRVF9yxyXLNfRHdkRcZsmym3qxEyxKnm6ESUUwJkoG7htGFk79EjfCVv",
  "key17": "2nbSbLV3Bgm6S6wVULX6MYhf8thChYLTQv88MWYoh7bi3PSASNiGFy6ALycSoTUnpYPq5GY1ouvTXJHTUh3hWaQU",
  "key18": "2UKmDaBGgjmD2Gm8yLWbf1SirXbyj4UsSpPrM9R6A3DH7FDhNExFPBS7txGNHDxf97UKkagCSyeLGeKQYVnXpwaj",
  "key19": "YmfA9fdZop6Hu6DGyiaVVKpog1V89vaqYaF84EoB4wt4Si4m22r9X5fhyKjJWvZ52SQxq1G8RwgsfFX1SeQ5o7w",
  "key20": "2yzEBtmoihdM1itgNgEkrgZbTbV2XBLi7zFNRsAW4k7FwDcEfwaCGtq9698ZnSRgTnS8uNYiTCSvGDpKJfMKjnLe",
  "key21": "2yV2rn5nGYa3gLz8qXiXyVTZEYDtJNp5MEMiJfb6EzccM6pkuRNXBMpLsxKtX4YBVJcqRwAZavchQYbCUyF8pxh2",
  "key22": "3vgFAmz6CNX1D6qRKja15gpkPmAFAnycuAkE54fq6UQokwHbaQFoWqgQF7MUFuf9WRYoMZfirfGsgRHKhAFGfgzZ",
  "key23": "3XuCsg1HWHv3KbmPCx8bZTgZfiy5uN46wYSBzvtR6cnXACXoB3JwXy9Jxu8xagAFUscj41goxXLrg5xKt45AVDZ1",
  "key24": "41zW3kuAQzAzKHQjv7ptaTApHAj1NH5dgUbQ59HsrRSWvxYnfonmCx8C4kWiH6KTWzyHjn4gPkNQU3kEffT2NyHB",
  "key25": "3gtyG8oPS575szSeV6NrYXEtAW3SGufJLWGBG62mhPZC7A9G6pVt35rSfixTf9hcgrmzqwz1YYYQ1h6JBhHLEp6d",
  "key26": "57ZLKtVTeyJdm5wnxj1VKjcwBJtfLnQRkLhhnZr59ecJnoxtw9RqJxfUCBdrgE6ktodkavC5GyvKd5sjEtj2JPNf",
  "key27": "2ksPb4vJQbMyh89tCSCvfRLMwLe5ntVxQmycDCzKCeuyhgX9kLFnosqzxWCkTqog8inGpatr7hEMPQjFnVMPBMK1",
  "key28": "4bkrH3XeByBoGjritXTe3WAoAMjYr5TdhKU1roPJ1kBH6Z4dr4ejxAZ5buN4yg3E5ZRug7GMpUSKW7nSRG5knyr7",
  "key29": "4gnJDBk4XJqWZfohKpY4SVNhR9jnvE3P3FdDgauAaJdofk79eAnZTgvQqaGWdnBimQrLC8HNw63V5qeu3uR75Pr8",
  "key30": "5uTDcFM979NLz2NBdBfJZqbfFbRWtHnZGxhcjgaZ5iM6bbEjvsSv4EPCbCrENzJQAhmdN22XpJgJiyAzT1GCzDNT",
  "key31": "3LQLD3jPVwzj3TN9Rcre5GvJzDpFXJD1QPVJqWfMJxrzUZxiGZ8kdeDKSvQqDe8yDUzn8iCTHwANaK5VYQxzrx9w"
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

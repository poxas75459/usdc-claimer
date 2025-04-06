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
    "2PYL7jvXUBJjczLyHs17evkhWSTHpftpQ6uPyYkQoV4bavoHFMCpRLtgEXBsW6cWiSerkVacDrkWqGtvPA46PWEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aw9ZBqFnYQWue3xbotxrg5bKKpECrx831KkxwUMqgVf7CeHbBkD5nEujieJL7FNfovXtkKvP6dQrJQmbSWupF36",
  "key1": "4Rv1R6b9Srfqa1YuiRfYpGTJ7A4en36vr7x36ySsP1D7jtw6HGMZTih8awrtWfeoyNw8YhamBm2QahG5zVycwA23",
  "key2": "DVZ5gsQTQphKZ8d1CXTu1vxLPaKY2Q47JUNfsujw5fS5TzGBYSB9mKP8QhRTxyRHw3fyvWNYJhd1T4vWAWvbZuH",
  "key3": "5t5uioBqhX8UXeN2VU9DDZcoddu27KxYs9kFhqzCrHd6DuZf6vAyKWhHRfDdVnSVMg4ddHiRvvvQod5wvkETEfAC",
  "key4": "22dbqw2YZJt4bXKz1dTbwSxc19aivDhE1836z6MFrYCgjDKgBCG4L5618umgxp8kgW8QgL5AsMw6Z2LejtRi2e4S",
  "key5": "51Uaa8Ky78Z2Vym86gCyBAepv4fsCVEUXdA3NTdkLc5YDPFXegR4uCdX5w1b3T1G8MjMvDHj79M1Y9DhdjP9Sbmg",
  "key6": "Sv1DCNp6TSJT5A6mzg1JGJSruhJWRp5vitqZ39wFxf1RYQRKem9vV6SutCBkZ6EQSPp8MF5yQQRBa8gz26uzvC6",
  "key7": "5Bqg22cU3ANtbPyHFZZdUz2GRbWHURHFGtZcGY6JjYuGK3h6NMmENAaZqzxMW5XtB1WJHPUmXtoL721ytFy6kyqP",
  "key8": "3z7q4c1sBZr625YSwW6Kz6rvMVDmngQgWhWYQPESpZypoRhR7ojsbMSriSrxoU32RgLAnYcYDHdASv8uUJF1G4xY",
  "key9": "29c4xhiTfJcubPNDe1AZvBwjMSrwqnfTSfyVLqnHQtmMsuxDJ6TqCWq8FxJZPRdS7xFTonv2sT8yHB9xnQY8W2JK",
  "key10": "4D3RGcRk2U9hhJFtjoA1iW5w9FXNWJgQXQosSy8LAukFMDy16JMQQvUhUe7jQ1DPzDBFZ1cxkyoU3TnGW8fwJDHg",
  "key11": "389PF1GHUQTmvktBE9EuDZp9cKXiDxG8TjkpTxN5X5W9GBK2rEQSUvjnsm91gDiupVJ84eCH3KzNnWrLWtuuC5aN",
  "key12": "2nWTdyiS27yWWHvZ3Dhry8RitmXNkWQ2TVbh83LZPecFse3Sr7Tkpf5fC39zRVxxYEBA7LbbYKxACzWA7nW7Zydw",
  "key13": "2LAAurEe3kZ1HUPHsjgcEhYbozjz632YZwbGrVw6cRJHpYwXSn5MZNCYtw35Z7UGvQsKcxx2xnCrKcgNVrSTxD9m",
  "key14": "VU5ajPXCCXpWCZCGwPPLzKT6AHtFrfW4c6Gz2wNmkXEiRSQPKazfHVjoEuFJdsqpt2ud4Lj862s2pMAe7X9P1Bu",
  "key15": "4s89wrURYcBouYgP7rdkLRqPZehJPda3gVW7P4qJT3Ro48ese7HRX1ETjovj5C9QbcFSQq955VZu23MaGmADwRFj",
  "key16": "5Q65Nwskm52QWffupQwf4qnyjWrqwym8HVA27hxcjY19HEfLZprYTmddSSSToxY5TtfFKgyav34fyDsojuhG1EPU",
  "key17": "2zyu1e4WKTKaadGqKMHgTQLZVpZULPto57ft4fDLtYT16fwG4Qrj65GXKjrNX7BA26Q6kqEWyjD3UpB5QN2hGtPT",
  "key18": "tMd7emmd33XL4ATqdMK5FQstt9d1Nv8XYyc39dAAbyEVNGCnCjoePGb9EWjZaMP3tDGDk6CegkDdFnPkZYRp5XX",
  "key19": "12uxwYgWQVcH8M3bfrcf22eU7SpxCoMaCDXvna4F6xNsL2cFDPjRoNW1YNpRjzY8UvZ5a4tnC2wev4oA7yMmd6s",
  "key20": "3E88VzgkBfhqpWjPCKwSKBqJ2CdqnrZpXvHqy8gzmEBtNH3NPSNumbeUjacGt5ifUUKYLajab9wSbj3r2iwUvGbU",
  "key21": "4Y8wRz1XVrFjJvTq69TCpbT4thbd6HSU48bfgHr55a8zLsDUWyqkdq6sgwuM8nPfayoYVWVU8QWsbhyRcqR7a3hn",
  "key22": "2tWmT3AvK4tQjDxQKRvbWbrH8bXh2bKPkYGkHkKiQBSE8k9bEucVRAPk8jF1zVeziTA1eZzFGnwc6LEQc2zX9sKo",
  "key23": "NVaT5tgb5FJZ2qiU5fyZSHyzZyaAn9GwiSxbXpGzPwz8kF6jgTso7pwWBKABxzJ23fgBhhKtmYLcgXfF5TBg28c",
  "key24": "3KmQuC9NYxcdD481TZiePyxejhbr4zuokt8cG2G2Y6V9qXzSCc1PWgH3gy9QrNCRcrcJ1zSo3JzMQovssnYuAK9M",
  "key25": "5PDN4k8U9Rg1u2zdGqrs62NYzDj8vCPAsBRCoFeTQNnrUe8fcWDNW2RsFGJM4WUMDLY8QW7SL8Mzx9V8hsH3NST9",
  "key26": "4VTrU5MxsbxnEkkfWCyDHe9EE8hcgx38DXmJrKKXByVr55HiDjSEmq3uYn5QjVMRnH9TNCYqTmbrJNQHc8BwVZP5",
  "key27": "38BoEZpVAmWPBo7jMXZwL2KL6C9uzzSNdkJe1KXjUk1ixh92FaKH5UeubjNmE3a67Z2xRJ1myqcWLcwYyMyhr3mz",
  "key28": "31axPrMpRXFy6KY2X6UxAznnEyGNMLHgpR1Tbn9QiMeeY5cqH3oNHdeoAupr2M8qQ3YfUxtCSDwvhgUKRFgzcBNz",
  "key29": "3WSmx4Lxc25GnocBEEnAc5BDNegDhFWeyvpmMhHy9MK4dYsEndiMQy7YpZXSdZvmFSCWPGcfthpWgsdZH2sJhvpC",
  "key30": "3ekqNhjsHqEMowdGwgqYwumQ5T6BWKaj7uE2avb2aJBeBXXttEohNei2YC9HzvDRYYefHV8WsMFwfWNSdEbroCGD",
  "key31": "3KnryJt29PR2b5ndQdUTJspv5WW1LkKjZ5kJChzq4f9G6347AXrhMneyj9JL6wWVmiQ7WFW6jaqRtPTgWyKrGuxA",
  "key32": "2gZ5Pyuf7L7tF5b58MMqSMx943amTreUFokmr3R93anVaxCpicCoXfwm2X6URjETSmxCB5HBjYPthpx6nBby3igb"
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

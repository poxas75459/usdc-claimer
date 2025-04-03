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
    "JSSLgqsBn7BJEzTidjhu3kgB3RKKEWcFNKMcHnPJBFrZDCD4s6BgQCLi7mZUvKprZEbWTC4nLi3eG74QY47pYDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scE99iFANYvKa6o225eZzZm9c21AweNLUe1cHnDXdYhTegdMumq8aCCbX9wVE2imn7pQDaijcv6qz7givVdhnx",
  "key1": "4gLmXtfzbNdQAtCbbgWy1XXZ6BnnN29MkxcRKKtpbHQeFDyuXJxdc7rPg2NvXobu4RivDFbPk6k75xbQiAkdohns",
  "key2": "2KLpbqds36d3HaFY8xv8BkCDHb7wrCEw3H5M9iWNVbm4ZbhtiEjVQHyG3M25jf7pjFy5rnp3h6SFPDKWS9j8GD9q",
  "key3": "XFRzzBHU9K7dYPXpYcKHDxMZtVMbiF2qqUArhHbtfjJcxEE11ad31zNXGWuq2ScqgRGa82ofNc3WQoDMbEwsfEh",
  "key4": "4ouPV9PT3Zma5WqmipSmotfQtSGhKBbizaGgQh1xzfWMWvJ51mkEGqqjesJCAzs9p7GLrY2SkqcGqots3iBaLaqo",
  "key5": "2Ne2BAAQzTafA3JAwzuFDQQrfBmmApGnYwtsR114WfkehRpSNqHooPKxUDX2fNyN8VqTx2N5xi11RF4PqXtTE3kZ",
  "key6": "4VudgMYonaFRCyCP5g9DdmFEXssCrbzxUTyZeFEkQML2XxwRBMVMK9AFpMwXr1EaxC46X9TTuwLi97CC2YXGFBD5",
  "key7": "2vah63rMwbvuoFn1vkEiaePhDKbUNFR9QY4ngqT2Rx84M4Ku6msQ1L9QtFNq9FPQULN51YuQNnDvvzmY2yRn8FQp",
  "key8": "K2KLpU2zm9N7ciBmZAkitirX2bsg5o8AhcZKUSi69Hwx9xXGa23hqfr4SM6tpj8fQQqWKySTVrgwQn5g9jkNsJX",
  "key9": "2KrnrDszhisbheWe8vbGrWDy1MDWXwMckhMu4HQPLe4ArAmLYtq3FTJh8BaBqQcBPbZugZwSxRpcrArqny71C1UR",
  "key10": "5YpKz3NKXRpTfDLSWh3ggBzswH48L8LsbiHGTHu7tUWxnY9KynUNfsNfFHv349M8sNUjF1TxPGReJQ8J6P2EFboU",
  "key11": "5THHvaHaZBo5ZYychETUqwbCkZ7BYxgeqSvhCA9eo1kcY4H1Uu29vizzmxH7ggAfzVvopu1uZTAuGSJLNMP7jghN",
  "key12": "3qxfb1gYfcTe6py6m9H3BHpAu5Srsq7ysLX7p5hSWfX1hTo2PzcxWqoasstM8dCEo41a1PgwCsYnhcrdRGzkq233",
  "key13": "4PLpwfEXbJ8pVC4TCcZTDWjo4m72EDNeYjoobsrj5u2Bffw2X3TDNtFrvFcnGfrFKUaNhohAHzDsvTnNhTqyPuAU",
  "key14": "39NoKtuaWK6xRfG4PbHZKhRbF6mxYp2obuqQX7AXgfwnaAgQj1QVQcpKBVi666mGwoLN42EYiQ2x8USqUU23G1z",
  "key15": "5TA8WnsHiQxCi7AW3qMZtmja9qvTL4UBe2yRvsjKynKU8hQNXHF8y4tzJP6F4iU2SP47CyBrYG7WSkfTYdcQJ9xk",
  "key16": "4MHfXXDL9Qi6zM31wuqpVtHx3s6UkQbgAuhM84SYt7Mbcw6e4vrVD1GUSKG6MerCqYvNaQrj2bmFbgBAAEGCVNyC",
  "key17": "3RwP9RqUAm3hbRUM5yBpvUNDjoCj1E5RFYraCHij33K8Lg5NTakcg7e6ys81JGyLCoUpLQcsD9ixJqeme2UMNAYs",
  "key18": "5QRLqL4NqWxzDFSZXxNf3ygwhGWbMd1pFnYaiVG7hZRpWVENX2hkq4CNb1hZ3Aqt1mn1tKxk3icipBEcWUbSmpfh",
  "key19": "4i2HFCgv4WNVZwyEa3jCarZ4q3vpM65VPNxUVY5sXrhAozHiku2VWzwdKDM3zsnwhREiApeWxDQ7HydiKsCEC6R6",
  "key20": "3bwAYonwreZjoSXaayWUuiKUiptns6XfuSxR8hw93TbmRPM2hYGVGXSrnAaZ2qXcJeoUdkQmam1US9s5yyBm6CyB",
  "key21": "4CiP9TWCvnpYR4DvsMqMFvWZ2926NB7ruMjP42N8BNnDWvNGfYkZABg75QtAeUTJyWn6yJx7edFzUpCHEzG4yAji",
  "key22": "2A75LKriz65zjwnjFNZ8QgEaGg6scrivqpEYX8T1xSvhjxy2CYbVQNkDzkepBxSmgKF2HbMJzLrXPnWZz9o3d4Wk",
  "key23": "4ePme6NLVLtnb79noqsU3wYAaezNLs9as63ycQxkCHz8ARrRBmRxnah8hJJw8VmFu8mJZypwB1vQcMZcsNjEBeos",
  "key24": "QDf48oZCxeS6HdTqFypwp2weZsHGVAAfRsK1UHUSaCfsLDfP9fUNa7mviAJJ6R7ChWCx7U66wYVjfjx9TmMmgo7",
  "key25": "4ziSwm15L39NFBSbMeKw7njDY4jiyt8Hnwu7L5ZWsorgSgz97VgWdhFCrPLkVq3orNyGP5TzpXKtNZSrQ36Gxmz4",
  "key26": "sTRFMkVrWAJ7iUNnjhYpyi9VesENvkZVgJYqGRJ7QUiye6uR6JW6XUvpnZ6sFYA4vPU6xrVckN9Fq42AwynAmaL",
  "key27": "RE7k4vUsYAD4oZWkEAEVgjy5LzNxmjKNXhC5XWHqyd8mL1jELDjfRiv9ggaAsdPSStjcdee3H5sjJRSBchFB2dE",
  "key28": "65RuTDviduVLbNSMxQxPxXozTg6pygQx1fggKYgX7rT5wyUPawxL6NWLMka9fMDMwgxUVmZF44TveQbEn57CBtRX",
  "key29": "66U2U6M2R1wVWsHJuDh3NgBixsDyQkuESL96nZF9qaiyCTXx7T1uf2qfziBpSipPVfa3TP5iFtUuPewRJXtGjQSn",
  "key30": "5nJtkUkZHFA9HFEwjvq8ndHAF7ajmsWfP6kLUP6V1iPNsy6ifEszCDU4o5QCCxKF5b1ffFHHdaGFhoLZqsyDhFa4",
  "key31": "2QzYzGNazH2iTH3AscbZxbqd8E4Qpw96W6WuCPyPmsWoDWMmqjNZC97jSFN8FWE5wHJ15Ww4utHGH6MdXh5LspeM",
  "key32": "etQNq7C4ckRC3YBEJHuJjwhx9vuaLEtxW5rkZwdEjon23NJ2vpNo9wCdszvrBVtFo1bAGkHyvq9b4BY3oB5ivGE",
  "key33": "3ue5Af2QKabor3dLH4Pf84GuBPrMF17aMdfezF6w4MQ3A4EAWxCZHQnecrhDCmLVeyHBguCyszNZkdqwmr4u5LFf",
  "key34": "4YhHUuCbQAb4nTc3CCU5xJvELHnRQ1hTpL3fCXh8AKSMk5qZfEgokVQ2iHdCG9KHfC8kNR23ctBUhyTzC3Emca6J",
  "key35": "59g42UPa8YdmbH3vLqyVuRLtU5YRYLrPcQ9qBHTmnnkhGeHm5GmhPodaKQPtxenquLYAtXewGFfRRtwKLcjgiTzg",
  "key36": "4yj4F2h3do7pkNUaHVhrRgiDXXwYPwkLPLLHBv6Rs5TcmC8894tMg6cwhbeMCzancpBqdoa9mLXQ6rHHq7NfJ7hF",
  "key37": "51V1z3xAVVs5x3ACzVyGD1HKQ4G83kC5y8DcoLG6NPH2yGUN263Dcw5UgTvN9nngKP1UTfU5SrVyfWpjvD78yWnf"
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

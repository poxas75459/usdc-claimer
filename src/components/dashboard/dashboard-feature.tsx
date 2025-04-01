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
    "4LVmE5S2VqC2MzvhpSYBoq3behPax57bjy9hRBAa8kTzMhtqcJsoDBMbnYPGrNV7XXFKaJg8SW2rAV5VbStLQrhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDYcn4iTTwYEHwCjr6ratYWmbRyM4LoF4QG8PaK4fv4LB1ve8nozLvPADNVrxjyY1Bmh98youBwx4vZdu2g1f5s",
  "key1": "3fr6dsxndPLYzT3SazBqKCN1rYEDF9sU2WxUynTXZQTdZ4uAVZghPNbqNwSFcJCYXRgoRS8WKj9CRuyFuPCj9NCU",
  "key2": "QoLSjMQRQs71onkMm77SzY4Gfa8ghVSBRpx4K5t3QxsXrXAcoWqihjSaGx7h6mzTBnvfF7mTku27yDUZLYMGxHy",
  "key3": "1PzwqhFe5ZzxMhv334FdPzxrBMxMZ1hmwDWM11t1jSe4f9co8pPZy4WucckX7zpyQ61FqtLzGgNCxGwKTxqYHct",
  "key4": "38rbsuTTvE25sh4cN5vUSutbTgx65icSEMsMogiXLjo2nXNYrtrtQhcs7tJB1iJTj3CTjyTip3TrzM8ULv65QquQ",
  "key5": "D2oqmm794KdZsddSkRJKrzMzJFrCDSpXkZR1fjszh2murW71bWE2aRQrMAwCouvyQbX1kAaah5gNF5WzAXphVWQ",
  "key6": "3h3CkvmNLoE6Pqes2R2W8HEVmhomDrrD3fqZtejkesdSmt5akePPQLewkCaX22kKBCp938D9BG1VtuE63naDKDvV",
  "key7": "5DGvmwWWhEGxH58x9866gxBoobVhPviSb9wMo9vSjdHRcEbxPjFK2NvWtEnssTemZJ2GpMMC7YeHGYxLwsavenYV",
  "key8": "D9SYRLcF8L9tCbY819qNePRezC57Eqr1qZXYSSYERscwo8pCwZjb2fVAwxnfH8GP7XczBaZ8DK1PNSG6gc4NEoM",
  "key9": "4QiG1ko6mzM1HLnpjaHqtyff92cEkuUVpvcrs437HM4ptjY9NwivLEG4BSS3HG1sd6LY7inAfmZstwKCYV6GVrKY",
  "key10": "4WwnBpbt3EhGHRL4kRbwJY7xVVB6QWEzkKQt7cHaTnnyApfQnV6o19UwSie5kYKM4nfvznTiuUD9Excm8HhsvbaY",
  "key11": "4Cts28K8FmhBJH2xvP9xcNHJHQksF19aEdghMnRJjUKYYD2EpYsPPhkMjoRsdbJ2RoNs2FHv3Cjmq1NHXFsL5T3c",
  "key12": "3PWBFoULUitne3J3jsdxBCF4d5NNnth2afLKyj8TNgLJzmdZDfbAYkqtuPTMWKg1gXgVVrXsSvyUCFvPqQCZLVLZ",
  "key13": "2ekkkN6Mr8m92viRrc9DjT64wSJm6jPHqmmangFv141PG6CxYD2FKwmtaB4A9Faku6mo3vc3ZKWTvhvaHNGa85BV",
  "key14": "GnrCakwyVRNtTtx7R8eJD76KEuYJhNQMqxy56uQW13jnLsEzwiBeck3BbpNtLYqsaPoZ1CSJxH9yaq1EB6MHFUp",
  "key15": "2U4U9W7g7rAwyyKAJMByzAavgK6CAfZMhF42RqcS7HHDfWVz3ocB3vwJoxWgaggqrbkkoorr2Yf96ZmAkqXra9Bu",
  "key16": "JWWwm2KTdpsdYcdqgBSskSNCCgrTAusuKsXQDZa8xdUhGDVniZjA6xoHqc3ow1grucq491xrcLxFxgnUUKzFEvE",
  "key17": "3GVih3ZxacBxStYwqMbUzTNfU4F8tQ9Si2kLxRM8AH3tt8iyCUgiq1V2uwEf39Vj8V4g2aaT6z226X38XvobbMvr",
  "key18": "3b5spW4GD4tm7hUXN7VUeJGWvcHGSXUb2icqRS2PhEKTeub8C45o37GGbzBWS1rNBC8X8EfMnDk9gbvYsfbZ2iZ9",
  "key19": "AGfTLJv7jmk2LjNKukRNGMTRFfKtDLvcwgtF4n7oBCtPRVMxk1mPGkLFthapYGtFK9k7wa56JVDNvxBcmbrf5vn",
  "key20": "W8d1mya41DPrVXTN6XyaNdg3h5JPcGGEk4XqCSrpbGB6JBVYNT8XUa8W4QpmGGxmJyF1uu8xMwzbKtai5FTZiL7",
  "key21": "4nKJ9nRdTRwQj5WWH324bp4hPUy85XdcX3TNXuRxqUXBaZ4mxax9CXbh8SMtGJjEjsWNvGpAPWxUNWs61KNzPHfv",
  "key22": "2HDoq1JYELBd6JwJTHp1roXz3ZgQpouWGxcQwzgVhYmSfE26dWv1sa8jYNRHznmp2WQqieEhSCHwTJDTAuabqoBu",
  "key23": "5jq1GWfj4fPY6f9pUyNg7mL5LrLsqJG3pqX9FqNozPTwS3WygD9epsMWUwyNqD27zzpczHpc1q8UgXBsLeikBhiQ",
  "key24": "4jmtgWURXT2kojDQMgWhmzxLmXjxN3CL6pmKB3SQEo1KQtAqC1211Y9BNxb7cKNtA34HEHTap9VyHwznBBq8Qajx",
  "key25": "51qZQBPwrZkrMWb612VXdTAYgESXMWb4TWhGEotud2P5xpdyCW3uADdLMGjD7tM57NLDuSQRX6KBM3bdjh2bZvvp",
  "key26": "5FHALDy37S6iPe8MQS6ifB4TWePWqR31JpV2qC3JcpzW5UuuUiWB7myHnYQr616nQw9erXxtPRNZezBTRU8a1jgt",
  "key27": "5RxDJFYb7N4YDGcZBWYypxuK285ATymy1kiS3fsFAahoMfH39tncTE3JsQW9v7xKGVEtgyHL5w5hru1YeWGNNjZH",
  "key28": "3z3ynv7LTv5rwPMC4mNEAohBPzv3ZQsCsEUXXtWkRcPnDs2Dk6b1xnetbucS4nX5cvKs6wvYJtgfiD9hFgiw5jSr",
  "key29": "4rXZigtzNs8f55Pc2EBemUswFeY1ys8CqkAjAEq6GVCHukZYEP1eVso7VkG1MFSzc5LrN1RgvvU6Sq3dD94bFDzy",
  "key30": "47oMpTTLz8DrqMj7Czde89FGZYmDc67QWihNY9SoSU8ZU7dhpKvN2oRtuxyr6FA4s6Bm3AGwWxavymErfcYzjZf",
  "key31": "5rWyhbrodYo8EUNcCq9sCccWrn7hLy8uR3tx9e9vyzaW1QNyZoTiMz1PR7PgYZtyWdnqzgHybXY2SbDDQUZQznzU",
  "key32": "UdFeSKvxD8VL3zQZ7o4XaWp9ohpaFaFTgRzt82W12UNJmnwqY2bCyhEMfdmFgZPdGENwTCUM6u3JEX53AmWKcUA",
  "key33": "56QHppXsod67MBVeZhf2wo4RHDmf3PVkwsdcWVcCae1nXUL7m4BhULEhdABBZE397LLBqVKLtPm6AZ5oNYcLr1Nn",
  "key34": "U8fQbnWvF3pUz2QEP6kCjTFGa3jVsapSJu78UUTrfyUhFtD4cQqLFYHod8sZ9peiqJnLEUyywofDABLZVjgNrJR",
  "key35": "63nXFsMNSv2u9GYySKHgQrp48xh7dvUzzFZa7wJRR4T56eDWpj1KMXZ8bAHeYGj3Cq5HwD1Ta576afxYBtkxBx1Y",
  "key36": "2Y9dRJdj2oomFCfZUZ6iQ2JkaXhoNwWHQttFAxBQagcF6oEMNZZq4LE8wpg27ENcquBvkrUCpmFzx68HcKaswM2X",
  "key37": "4dgDRwZo4U3NmLP1A2s8tHhNvfk5rmBP4WpXVKbAjqAFocYRXBj2fCrZmAWF7XSUepypse3ndqdPpGJALFigYwpQ",
  "key38": "3HwPGQSrgiZBnLcpodr9JPnXJGCGpswKA2skFxpvdeda95KUUe6N5rcJgsmd7GujcriY13sv98B28sgG6LYV2JQR",
  "key39": "2TQYaR5EBPMuFQeu9ZiaVxzdeiuB8xBmMx4kXTtgxvnZ6t9dMCqrNRJwLuDmhhZWW3S2rUdUWw7A2L6TkeCBQ53Y",
  "key40": "4uRgLCQrD9n9ZnJ2VTCWaWwjmpujaiWGXDxxYdW84pxd5A6Fvufrv6jeMNSD8mRhrZNPZzWjcyohvwC4PdGydftt",
  "key41": "3FdeewJQ9g1neaathBWZHbvdTejVJ7ZB8RKUFxBGwF1LNi3ogUDcxCFBvq1Z5pWTmaCowVbxMnydyfFertGE3Qiv"
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

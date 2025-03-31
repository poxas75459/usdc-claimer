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
    "434eKcN9AJmdWrU9jpWU6Bhm2xfdNkNypHnpyvxnp2LYXEMmxw3nUkoJ4APUQFF2YQi25UhAM6XCi3V4CJ2BcMMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VB4jr8LG791Kue5JJQk3aZJNMVWvxv2JQnCFJtvAg8gAFmBW6iWbvF8SagcaJv4RHdizz34LLQznw814A5FHRte",
  "key1": "dQbiG6B51CLUYYLGX93NETnvfLcqqVz8Yd1DZ1dJEMeSV1WmiEs7fHKxhR7iynjHFvVQAFDdWk4YKSKnPjj3K3x",
  "key2": "4s3WfLGW9yc3iFxmkQpzHxdkzzDYv279f1mmEajzBWHGjXfc8Z8m1dpG5XA3UiAPHnD9JHEwqSVixuRq8voH5Fpr",
  "key3": "Nzg9MqgC2nm5dQBthj53z7VbTqVuYf3jsGE3XEfW19KbwUit2YbbuULJtCHqywXYQ99DQvjgxWjmFbstZ2rBQaC",
  "key4": "28b6QGeAJ2hXmH1dkoyMR3DynDVF498BA4Wa8yqU8sA4HxuqXFrmVL44AbF4L9qMFMrWtWhFuuBV1RQFYbBEzi7j",
  "key5": "3cv1X8neiFHXe7FBwehHVUDZKAWbrua2CDQ4Sv4RF66d9NtxZwvNXsMV94cFCd2bzuun44UaZJdmUkU9Apao2AL5",
  "key6": "48ZB5sb73K5cryqJ3BYu2vEoc3U98g3GPbJjCecNVnVhMDtUM8ow1q4YJpaHjza6yMyNyLb929cGfgr1pvSEuiVz",
  "key7": "uoB1qyZwTr95GALZWB6PFWCPTuhL6UW4JH6RWV1iwgLiEQK97omhgtyQsshi2hFSGMUijKa4Y37xFnovD9w5nPB",
  "key8": "bLMc5t5kCsa35EnyJVQWKeZfKwt3CmKwwTMkwomiLnqzRBNdg9nYJd8gwz5e7FNdC25hqVTCzaLsuoB4i29XUUe",
  "key9": "xn8dz2ss8omqs3jVDBqVfw5X9TpK8GUcQDLvcPtoAGfcwL63xSEykPki9qUnjXE6W7uT1Y8Fz8WwZTPbedc5mw1",
  "key10": "5jE683eu6aZE1euhEoSTo4ksSdYGPTuPH1vN4oXFNe46n1UTTkr2yf4vQre5FMwum9yvjDY6jVcgPRCnhLfLMeJU",
  "key11": "NEgmrKCms5MVNxmepGoKQ33geL4HFXFktcuCNsR6uSx92ZKNDczncqquzmYS3CTxGXpFE9MaQXkwLZSaTGgf4nh",
  "key12": "4EsMWvb5KcM9cuBPWPsv53e3zeWpapUv8Di1H14KUum8UBvzs7cxD7ZepkUgEv7Pj9J5c39NZoZVMwzFhtCRrPCM",
  "key13": "48PefUC5LkJpR5MXv8xuejAYNnMya1wDQR3M6VYjjvS8CYi36RQb5PQkYNXz4qy2sJgkq5wG4CLAtscPt4mDvYzU",
  "key14": "2TJiumogLWEoE5dSDpK7uAdwf7asGSnQwFJDBdEHKXJFNktTaUDWAix3BkxtLwXCwCMgj56UVkwakxypruybMS9p",
  "key15": "YCdwziWjuhSdUnufzuMePDHUXLB5EsGXoVKv19GyMKMwotN3Mo1tzMnKLcmmvgn57nhhi4VajZyJ5J35DwMZDPK",
  "key16": "2Wc1DL8HvxZv9nsabXG6TCevPfjS151EFHBCJsiEscq9PJmJdxPUgkyUboZ1LzT9JgyqfBfme43F7cDuXwhnCyRd",
  "key17": "58kE1CP8ybaybpwSDrexP55L9fzwj3BHPi3ikS5uYyQxrgxXGrgA3njiLiuFj8cLgzPWN2nDTsbhoTE24iuX8vRg",
  "key18": "4rBPZnSYAQ6HbsJVoLfcc9QPCmrdcNB9GYUudpoikwoJnFwtfqWBVtRC2RcwfKk6cVuqDwm3NbTx3gK2Xz95Wx9s",
  "key19": "5nV9eHDRQs8ywr4GhZ7TC9XRVMsW2HUjpQUzX9GmLx3WKPy2VhVTEedHMguXnahz1CxAqGLdzKmbrjfLhQAPvWWZ",
  "key20": "3hDF9CcGZCHUNeor9KdyFwjMjcEXvUWpw6RsqSnvXPWwtbATTr9GnA86f8DtpbDY2D2TFwwTovcrD8zJTxWwE2Gf",
  "key21": "3BkNpiPPkLvcYmsCanjZiX6PbXUmnyZZgv4ok5jjm77xYZocr9gs2AemVT2JifuD9o8nRkY7c9aquFN12uZ6qrUp",
  "key22": "3VTgtznek88yp8HzcstCpURQoLMB1Aqe7BmGTtdyndRWx7ewgJ8aXdgBmJUXaXrjF3qsinU9tsbDHMzLD9UB8dUK",
  "key23": "3VShP9mFKKuj1CRWduoSKyiHyhowhZ8pExtZGYVC7ywKsgrdm5UGwStBpgAGkUts6KquDF6NRGPzCs7azBhc4r3E",
  "key24": "3estcomAWui3qwFYvV9dRYksqUxAdvegAGBVYmNvMDE3BHJ3nU7jdzSYNLSFjuyr1jkhkbBbCnosWfrW1zFRmXnV",
  "key25": "3gLpWAY9oBYtW654a51RaZNToBXRQpV1yRDsLx3CCBym71NTo78Esgcyn8xKNty55ejLaB9BfXhw8mt5vGNUGHyo",
  "key26": "5U6eDQQcqdDvcBECDppQ5VLAwYqRyD1mUvUoFi1ihXjeFfYrKW5fsQR9XTwb81bUZSEmsFKAmPJZZJFZ46VQ8o5i",
  "key27": "4xFt3tMTy1wV2FMdgXZumZexwyQLjYCbVsv9cH3hQ2YrTdwRYEoWbmrxiCyCwZUhFbaNjBc8JMfxZqKvDLSJVvBd",
  "key28": "eHqgTCMi4ouJKheXoRYmscv6rnu4GKgddipGL9kiqUHbmTNnSz1Kh3eYjFUCMdjCHjR1AngxEd8udU2mvnxYU8a",
  "key29": "5q3swfDXmduPnoDgqBcHaGYH44f1Jc82henHXW5uLLT3YpPNr3b2XNhsP2mX8jGHmyoVzAT8PAJYsaWWnNgLitgj",
  "key30": "43zPa1ABXmU67snZmSVFVVXs3L1F8h2Ka4JhhQge9tCLdSgyVPy2q3Am5LagQhQ5mSWEhqkG2eTCoXpEXERMQ1h7",
  "key31": "eDu846Q56cPiCmsmqTiXMXUHyjQZt2SQqMoh546rK7CYVMtgwZSc3cnjKARXCukyQuzANHdJVvGEMA1GbjXwnMv",
  "key32": "56sswY9ss8YGJkjM9mPkH7E9zia3hHtxcxbTEssqgTXBqVLphPvdcHXxeHqcQ5njkpzLokFFEEsx283PHWKhniAw",
  "key33": "Qjvz8ccVa882zGojgsLvGPAxN3SLbfqfeU9LSQPTke2Su8KhtTA4Nr9WeEWFtKdmrYbVZKjTZ6jMRTUwRaT2voE",
  "key34": "5jf2Uskw61oXCpwPvP4triLUpj4Ycpoxc9r879TYM83V4PyB4VnZEEFHYxRHkc1gJtyEo5v848WX8pEU74C6WCZ",
  "key35": "5K7yoXkVJKsPgdJLtEattugeKTjrytvQXBGXmJ9qHgpoPWJ6UENuvoYxXc3x43AWt2kYPQuem9k7aMCg72vHfHGM",
  "key36": "5dbavXzQprKn3zVaezWhp8RrM85h46wvyP8Dtc5TjZbmUjA5Moa8cEe7ZCVs5ppocLqp9psZk4arynYtYabXBLss",
  "key37": "4DfmJcR8qAqnhmZcvwu74aX81T1KNgBLYLSfpWdpjE9WiyLXLSHu7pYm7Tnq2wMcDUxGKDAPUnrXh1a5upCCe73B",
  "key38": "2SdV9aH8Zs4TcRpvTKGNas8Po5F4HsWDMQLGhcS8ou3JsmDzNjKx75fhXf25vuCshMW6oQdUPV2txW3P2JV9Fwu7",
  "key39": "2jTtKsN1fvv892HDatDjYMeU7eRaVEz5xUX1BUaAw3P1rjU2DWZEF3ZgUoFVpayfsPGCz87FtqTJZVYtM4afbsCr",
  "key40": "3ACmM36mDB2LdPeFNcCv8P6PnftSFnrKh3wuZQxuzqVSs8Ub12DZ5q24fMxHBYTRdSFFKqtPEKhxcPCvVgznNuGm",
  "key41": "5r9bXig3V6zz72jBqNQrZhK7tiHeWAXvLxxhC23Xn5jNjHDwQHcrngnbxq18a14QLQULgZEGgBPqCCCoSHApNUr4",
  "key42": "LiJcH1WuLqozSf4MuvpEtiKtGRLEx2BRqbZQSdU9xR2Yc7uR734BkVbdSwiv2QxnT4sLchjuJqbea1wZAYgrYTu"
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

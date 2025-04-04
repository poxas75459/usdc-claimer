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
    "5m2kvsjAU2T5NrwfhGgjyyAG1jEg9mrb7b9x7ZSCyeKk7uKkoP5QcqdRN68EKA3pHrU5f8azknqVzxRLhYirzmxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36rmSaeZvJnZMqQxTyZCcuR9NGs8bYKzYoXo8kTLyBfrZ6BAyoKzTVv8fQKUz4ykuhS1KjeJ6rfkVdXwW2r6jiAy",
  "key1": "3bRVWgyWXqg8iM4agxZ5tVFk6r1hVHkmiCGwvGZHrqeXbnd1XQJysykH5jEHFFBGsE1MpQDNG2rpLdfMGS2G8LvJ",
  "key2": "1oek1MRJaHdLDZYy6KMxVeYktyVmZdkXcfTuAF4kK8CipSNJjEbGjzJpU7dwHZ9Ks9EwHBWh2CimSXvWj5ViBaT",
  "key3": "3Byf9HyxhjssNaopWKFqKLnFgg6dVBkRfSxPhzs6P7WD7Pu1U937SsewGD4zvSDzWARb7uvByGit58CnLPAghNYd",
  "key4": "3pgThztXa9Jn54bPQYc5oK3KGMbxQQBwwB1NaS1gkxvpDHNDPezmEV6gNtuHe47tUVSbvadmcwDS7c1hb9wxkQkY",
  "key5": "vEUd6hWvFDJjxsooN757wdXVmDBxEbjJWqVYmdhs2eMCW5U2Gd558FAyL1pMq7BXgNZDvsjRoicv8sBRoY4SZKb",
  "key6": "4in8LJMoGvo8AjxyJy5tGFp5B8pBwpMpMJuBeadG989sL8huzSTUnyQyhwy4M9Hq7KC7hBA2JYnjecGWrb5bBH9e",
  "key7": "4rNmJP1XoC5Phao6xQ2t3h63JYYhRhsN9AeuRoPtuBPrsbjoaPvJuJBdHaEp5UQ2zcrzgTzqwxkdYgcyn3YXLbNA",
  "key8": "rRGonpxnGGwBTfnJYhAjSV7aUFtpUdthbUfoJ7xn6BJQRXQJeT16bz9nGA9HM7zRF7R69iHorjbiC7t6eLKAqXW",
  "key9": "3wfXyg1SWpJfTdxfoU4Y6WSahWDhEZZaUHLgNvzEz4HtWBHz1WcXP96ozDpN7PT7X9Qi4envbuQmSHMCM6V4wjcV",
  "key10": "2Nv6hgHqQoGHA5FGy5gwqmexKPtLWbGCt1jwYKrsUG8gz9bMRTdzo6UfrDy2j4brVeKuuJdG7RPsbmqY1Syiv56V",
  "key11": "3PpJWkAJ1FPYnKtKpvUsYCDwRe5yhdKZuro15JusmCdrLJ3gb4joZheo7XyBGF9yCVYdaA3Fz3VGrGgRAGVMVBX7",
  "key12": "3qrCo9LbB8ERSoyNQYFF2A9pTxnA4wErLEtxVsesQNYugzYFPnKYJDsAuuAAekSKhCqbVjjbrkwfogSQxUfmrSxZ",
  "key13": "4pCWm69PDs6go6cGBBUU1GsaqVvkuRU9UFPkuPdG9GU4EKJgbAEeQ5tnFH76jjbDvtqA4fd8qoRZU8oeyPQrBxgD",
  "key14": "424DUxNCQ3oT9c9nmUrx4LpWLEkncuGRmQbRBYBDyNtZomoMhtUk3fDsf1wvzh9Nkb3UK4M5fFaBdpk5BZYxYMd8",
  "key15": "3FMy6Aps7swkpDNkVwuFtWutuDotCo1cgZNmKadGkkGi7hFVHCGcEWaVpprrip4oWfrGHKSa7WV3pihttVT1Joyv",
  "key16": "3Kp5HXySnzFW1KEQ5c77edU5LDUNJa3c44C8mddq8W1MScGhKWMDEWJyQ2kdjaU4ApJw9fH8MXt3A5yuo7Yz6fEr",
  "key17": "BtUqj7FuKBZUpjrgWVqVbJPqfh8g34Sr57r7V629tVmSkuW3YMkZxCcD3BycK3CNadYkZ7MJZALP3xqtSvcemsY",
  "key18": "3A4EKr3nJTcFv8cPChCzpZugRkCvdw6wzYD87Vrd2fkY1voNifZXjCNEorCLDAwURJCBrKWAn2A6iGNNbRcewxH5",
  "key19": "5CCqmCZBBWCCxCbM475KemPRJjwinogEMVJtygVw2ZX7TTFFYjoXDcz1SBBwzBAGZ6BA8KN926uQm56NqC9GPCyS",
  "key20": "3fqTD3qYLWoSsXkqCMbLqr1QSRQJtE2eYpjUjoZ4FgyFxidpV5fjB3cvxYA5x5kWUxGcFMXHx8BoPyWER93CmvJM",
  "key21": "W6rPADqAqmjKefHYDY83cYpTfceZoDU25UFLbdHMSF1X7pkwjJ9r8doLV8FfXiABtETXLsrCQYSCmzNjxXwV5ap",
  "key22": "5XRnXbHkaVZtPe1xui1HRg8w6vndApcpYKd67mhb3GouH8nS4nNjJyZAzo7rqab72ttN7WqA9Ne1iJyYt4WeC2D4",
  "key23": "3jEuKY31LNRh5zbXUd2HGkUxtTLZ8CAt7TYTyPC6zfbcjPnMoEAxMDkEBGt4PWAKGjReS4TTmEt5FXk3FLCMoTDq",
  "key24": "cNZgv1k9Ga28Cscb9aneFx4ZmdKYnRgW5zUptBJ5q8aoWu96wBKaK4ZoDNHyQp6GtfgTeMdVmvESrVyFYJffrRQ",
  "key25": "3ADb6FNoUFNdStTEqmRrYLboAQE8rkDmhvxpEZkemN8HVxrY98Yffvc8Qqc5NZ6GzoYMks6urNVw18jnXYsYuiZ7",
  "key26": "36geHux4KPwNQ6m1m6QkavhKezXk6gqQhKx9aFcubTVygrKmk83fnLZgoWy1rcmRGzBkjqSnfJbURD4eW6PoX9aZ",
  "key27": "2BgaezTf3hujq1e3gF3JVkqNYn8yg5SZUk9rn4RALdmCHxoVhneuJKEoReUNyqViUaLEGvM9C4B14x6EmEKRFdYV",
  "key28": "44JyrTjN8qPUEqDG4A8NF9G6J2YRH762GuxD5YaTUC6ed2JfdPaQWzQyq3GyQD2rWk66NEWfCTVp3Ldz9PBSnLJG",
  "key29": "4NEcZWgcgbqA6CBQ49nMWKebJpq4KLPoLEST4uRnTsFniTZHnfBt2gcTL94sYFGQatXMEhFyVZGoJmX1K7XDkZQE",
  "key30": "66hJ6c4wyY3p6seWzsSANdppNZn5AN1dmKy8NpKTBX1GhyuCQGUn6xWPSkDZ1X2wveX6cvrFbjveF13HpfMRw56c",
  "key31": "GitKjnyvCKxGTyxeGnbUd6vLuX5JFB5xNoxQxHuFQpLy2GnZCFCn5zY4EtRsQHwHNPagFxNveqg8993sQnytgRW",
  "key32": "qvkNX8BpdqiSzSkz9qMEffMob4Gke8xJSwSifMg7y8MD4EYxfcpgRbXHAGFuTF96F6xfPDfaFQrRaU439vs1hNj",
  "key33": "626unrL6xD1Y5jaRVKcbzbEEmVP4ZmLx9PmsjU2yk1jwt4xVGkN4YV5kEtDwaUNCNu7GKkgMqnWqpLnkifmbWZpQ",
  "key34": "G1FsxAyEbVqQE5RahasWGnzJRjT7nD2wuKNhTKi7juRVaAMMT3cSs4Lyb49oCFFh19ZPbEam2uCZDcGuRNzxGCT",
  "key35": "vq84hK5U1UXSK2ZTC68VoMKwKQm8bFKattoGpVdbvudC62nPB9tu8c49KCqUhzjiuY76MrjyTqe4KEjZfJku1g7",
  "key36": "3btqA54Zb1C7u79uHtEZpPWHd8fioaVb7R53kpBi387sA3kQ43FQ9iK9CrLYYZ4u6KKoCgaHXm1TXV6pXLe4KoFH",
  "key37": "5GjVL2LR78b3PzsNu1e1L7E7sZvDY3mvbts5H73h4zM9etoDfTdbTok3qy4sqsUgShobC76EyAC9LF63mCRYpaa7",
  "key38": "HmQyhRb1jcSM4Yfm8kugAs36qrXdP2ETLDWR8WetDi2Uz6dznKJR7rMnjGLFYy2UCnxV1SouDPyoicDEFeHb8PF",
  "key39": "3sjrHf4aDMMdtiweX1cu31eZph666eFDApKmimiBNX9JritsUzaq9Mt5EUfXDWva5tnTY1ePtcqejF8cH5A1Ujx9",
  "key40": "65smnVCRtz4e7SthGpXucwYQvy4o5We2DTjpGdAiiV4L7VSRYUraMw7mch5Ct16ipxZ6XtnVrQWFyN2fg2ybCSYg",
  "key41": "22h1Z6KKBeL71VU9cW6URsrVS4MxnejsfBfhwVibasP5hRZ4itwuzSSRF2xHV8tuaMuhCyhueBtdsnLaUGnFLqxq",
  "key42": "34sYbbLN8bhmVUTkFpLCkm5koxiVHmUQNzEVxmwwTdxdSUEjfmH87SbJimuN94HYdV98c1Xtk5e7U57fRrks5uqM",
  "key43": "55ZJebxXBkZnSi9r8WVHyFUqwrdZB33VTps41eCTjqqQmPsq5qmkzf9UPtJxNLe98GgYWXcdXh8o8CmWEiAuYSFd",
  "key44": "28oP1NCMdrUXLwTN9FzHbLH6pWYwHbzLBJYQz5bHjbwUzrnMSB325wH6syZRG9axxsEheVh4JUUFJYq5b2N8nnMg",
  "key45": "2nGnQdpYhLJQ9mqTDsGHqQ3qQzFx3szAkPsjui5Jus8qF5UyX54PRwivVhna48UiuKQQ1MFX8NqjEtdVKUAtjpNg",
  "key46": "AeD5sDN8UTMzXvBQiXLgV82PcHrT574RxpPCrEAZvCsQPQGbXQqwx4mAthNeHVxUBkWBbn9fonCBhSH2urw1mQf",
  "key47": "4aCJ9VTkYnsM17wKFcRSHg73UBhwEJ718zUYqguwUYyDC7QT37grTfzYJHrh1t1PuXqst9NrmiahdfEmUsbESh5n",
  "key48": "4tLvH3DGKCWoWEfDdk1fvKWQxht5WcR8ocskUcFg894RuvFVDDqrqXXnV7Xg28fpeevZwLsGXgnSrrobTaBgpe5D"
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

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
    "3Kpw5E7a6xPYhynjcCuAvmucxqVa6EUfmsY7yGub3rAAfE2KTFNVfoa2qXj1C1uLeu8w1R4V5NSe8xQjhh78365v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idxzf3REHr16xQ7cPb2vvt3UnVkevBNWryMEFqwJg7FHdcA3Gney5nHkehsixhy23hn57UzwZrtSwUkhDZQr9Xv",
  "key1": "4UhbZp51QMDgh7c7MPRhvSYvUSRdq5L84HDWyYWGS7TbEfpGDU9dUYCDCMRt6KtPiPf3bJK3bvtJQsbgxZbJf5Bm",
  "key2": "54SKb3oaH9ZXLpUWgTX1D7T7QxMQ1LKL1fMkTAHm85KRe9uD2SWajSo1u5fvxUH4rvaBGqnRQV9rQiJWmdysFbUb",
  "key3": "25kdSBVZKQticoLMJBsyxFeQiMBwbymQiAv2A4Sttv6dQnUxEGaDsvSvoRouELqzJ7XNJAcbp5BCHtoWdjhvFyDv",
  "key4": "pp1GUsEpLBKsAXsKEC8fCN2F4wNCXamuxsoCjZDBiJAQJJfmN1pNsky9NNiWCB6ufjvLPjxCefw9ve8h97xRJJB",
  "key5": "5d74dBKjxYN98cMUwAGWR9KpHsjSWVADXsRPSQaUZtDavzjNRmN7DoxEzmUwtMwHme1W63DHaXWhyHoio5EmCSMP",
  "key6": "4v1EM61EJxPZRCgrAe1JZSXmfiBtGo4haX9ZCMVoJGgrcEvaXMj9R8odi55sLWkDbYjhGxsET2S4bvdzuX1sSriP",
  "key7": "Y3EXoVV2uZ3gkb2DZhHA5SA2C3FX6GeSFdqpU6PHAvko8HPWEFfnfJfS7PbKiVwYYkU3WBwymkHJW1KrGJbTmP7",
  "key8": "3hMpK1ecFrL8U7TH8aqTMLZDAmGPAW8SB6BZVtjP8444tjw8XRaFAiCNTauZ2iLAAHcDdPkd2TK31jZQQMywSVN1",
  "key9": "5JzbTt3fRtHiP79BdLag9HL9JJbZV8M1mhaMxeMhg8tN56hQfYQmBWEKajJ592yDwtiukppdbhBMLgQJePHobzPo",
  "key10": "38RMzMJF3MS9C5sK2NXe5qkmpN1sSm9pv7ve9bgZeS7yRZvcbrj5V2XhxLRbsSHF2CPA22xZk2TWcJsB5TGfwDRW",
  "key11": "5DVsSQbn3AkyWcBHc9iRtj9YiKT5vDNAyzKnxSZSevtNU9EShC76jyGVPCJSFB7SaxkXQbaf2EaMr3KTsQbG8EE5",
  "key12": "63Xk4RphuaL3UMdCmB15VVEMXosccXdadH4g918FLS84zNiHbRVhrC5BRYgz6SBh8TDJiZ9ADV37a1akxizfqnex",
  "key13": "2jL2vRfb7MGEA3b6HEjdPXnX3Ndkak6XXo1XxqdE7nHUDrWtotqzQ8kkE8Giu1rhV2wQN7NHgtYxC75rtcpQ99ke",
  "key14": "3XjiGw4kUEWueZ3Z5NffcatwJonAU6z22j69DGTkXtFvmvv712HQeoC6kAf5uiJvvCMxrbeSx7DGtNPQcnZtw2Nh",
  "key15": "3vVMTtAzyA9vaHtpjyo8vTFiK5pm1hJdadAgif9cy7WsS4eTbr47PVkrJ9SSwhWWBUYVm4d8axFAhQraNj3vEzjz",
  "key16": "4XanLmP1mbVDHrTkqch2bKSXFZypVVBW2Jb4uS9dWabmyS4x1rwkRie2zRrVAMFJyLLwNkWdjhe9vNe8APfTHzgy",
  "key17": "5jQDVuK5D53Tz8ac1F1JRHVdDZESF18rTPo1h6bunAp6aFXRDv25jy1eNsfpS16cN9j1qi7tHgDtowUcfRUeS4Xt",
  "key18": "3Gg5FApnh3GU33SHwedRR2h4w1bHWxZX912wXRgLgKQEaCiahKi8uzWJRidCAmjWNN4itjrop6q5sxnUmw5tMjEV",
  "key19": "4bC48nvzprLA2Evy3QrgbhZZcWYeB4FATFkKutzck5c6YMNz54rKBLrWJQk8jv4E6yb4szy75xXWKGKaDU8gzKxi",
  "key20": "3qhZXocnNLmAGaAm2cRFrmnMARzPM9XJTjLsSuMnYa8Q29Nzuow3rMG17x9W6APtVjVRDu61XmjFYYY9M3d8rYCV",
  "key21": "2WqnYR7DaUbd5UCaUSjPwNc2jebrN7waxJBgUFrsHZwmakz4k4HTnJTJGxiL61DqoBZCAF7nNgah8wr7zfETZ4Ur",
  "key22": "7K84AnWHL2TSbZb8Sp8TxhzyA6gDn79EBBw1RakGXgRcBw5kdtXk3EYCyLj6Hmot9APM1QBUJ2K22U49yi2z6JQ",
  "key23": "5X7nRgkcZ6ZnQBWqF5oLam4eYMATqLJPiq5xyDVAxXQmanJ8zGyvsQz9dUg4egymh46Sqoz3U8YiXUN5wmk5JCb1",
  "key24": "212CAhsBhAte69UCTubFdrsKn233MShwYQpTT5cNKU2ur7FXk6SQ9WWtgDRwdgvX5ThvYaxbdSHovct5artzE8Ng",
  "key25": "d8mHssvzPvyReDevxWLD6xd4EnDconHaQGqYw6WPCciznAoYnLNrAPfPSFudFeHxV8dvLwQ67J6VSrAbABiV5G6",
  "key26": "2ZZmsUhQ5Lq152f53opfq6FFxQ86LyQg97oWxnCegoPM6ugRdCFuCAdR5snAWaka81upDVwigXpXSC7ij9VfQoD3",
  "key27": "5iXWf2GBt5K5z5CjVBMbiJPkUB34YWp844YDLLWUU73XkTQiX39F2GguyM3TFkLdEpzf2zqbEu9z9YayZemQ42Rt",
  "key28": "3b5umMCqXRBSStz9corrJbimaiA4uqnckzsF21sTurB1kKEjyjUZiRHuWsANHyvs5FqDFmjeUePSgkDTzWEjgjEd",
  "key29": "5ibjiEVZkWViSKVtGryLURwn3ftKq8DoobxMgcyM39SG1wQwF4WSGaH7o1MGek2rpxHCCLbP7QCvt9KFvP1Nt6xS",
  "key30": "Wth6wLskEqQnvnvGVgGveDoL9J27QK5N6h8oWGPzTnFCDmKb63zZ8eXFdRyPVizfXPx11fdAYMfSeXhoHFzD36Y",
  "key31": "5CQP8k59PexnUHYeBVbTrKFWFQfeZEdqW4oR6whwZewTgNxoFVnXJtMaEWinXXwKR3nQQP3uLxHZJjduxEUtyyiQ",
  "key32": "2H2s383E7moF838LYDdPurZ1NpTTcCqLJtqQQU4byYtmn1pVwtqUii7idiZCKxG5TLMN3f8iCBia4xJYdQHeDXaS",
  "key33": "58qJyJjgez5P2dqtDZ9dBbMQfJ6LNkPynnJ5LrEWU2renFCyRZrSCUZXpM33vLR5rUmxgWw7gMyu2W1YSFdVZSsV",
  "key34": "2qqQ6Ge9ehCocZArv57F5YGjwV6SqP2qtg4vQ827PfX8nLFBMBZNUVhP9zrEKqh1tTg2ny4yjADGGKhmJxBuYZTo",
  "key35": "2x1Vb1SEzWmjFQJeVjaaQSdDWS8x5qzAotiF5S2XbyfRYrYC7nfKVoAjRVpEYqwYGZK1JrBpo3dwTey7mzGJNwKB",
  "key36": "4VwqRqDhWVyCgpmwjdTQnxTqZqpdMMbX1We5nciUtVFtxSKcFcPTHgey3GW6321eypKeV9ZMhKQ3cGqZtJdvf117",
  "key37": "29K257HWDSaGDQ3sGxsw1d7Uqe83GPjdX9eoQJB4V1max6ddThpURVi3uiqoNHzhE222bVR2ntDmUBwSZqB8iwQC",
  "key38": "31UimyBETizviKMoHv9X4mRXnpurE6wxoGnhknuqFRsZJmLFAhzXH276B1CR2XQmhGRDZ5rYrX5rjj8z4SAe7R4e",
  "key39": "5MV9A3bmWP9AfZfqWXjtDuVcqDxgSWhHNxnhGb6Lz33azvQWKgdj5NvCKvaSrKS1DrHAM7nUZDvjFwjHx7tUx9gQ"
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

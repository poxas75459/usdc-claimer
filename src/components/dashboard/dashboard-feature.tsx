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
    "3KBqTB8vcnU81ZC1Jd8w4SpAd6qzgJueeRrn1uaLDsvCFvMdLRTbZkaBTfFyPk1gstSFuQduQojJthRbP8P65aKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sC6eNBFgRGGiFLB7957Vmd5CwB8qukGx89t5Q9b7ruS99VpjtJTiccsVTEw12TbHQyXJs1i1XnWEStCffVfHF1D",
  "key1": "62wTTzh5tKrGVmY8grXodVhk9mQudgNJvms9qvAaAJK6HnfiDr1D2PSEP21ZKfWfX32FwRFCtSC54qqGh1U4Ga5M",
  "key2": "3igMz9keqfsrEcVPdpxUbQyEkN8z5dCAbd7ZXFdB2NfAFwsgM4HscWVRCMeF3EbHrN5mWBBd27fErZ2chzwWVf3v",
  "key3": "3kETe3vTTj3HiMA3GgMbeC1kdbnBiFDbGhYrJrySt7xFJ1EedfVq9pg46Yc2WM1nBZYefuJx8PwgREoJxHPirY7B",
  "key4": "4UiSdBDWvr69cbDRq4DWxFDFfsBefdGFy63aQafZPA4pf5wUwZRfQ8cby2bJczGuXhCVctHEXgsynnUJ1c9hMTWs",
  "key5": "4SeMmYM73cwdV8NUUgxuvLmyBc8nysX2ggSvuhT8CGiLDoYKSEcT8ro2vd8ssbaxwJTCwkyA6DipKM2mAYd9xkQw",
  "key6": "2QcYF1jxMm8qopDw7PVGMTYoRrVDmpM8gUv6WqqshpSLyJzmCUNi1XMjN5tRPqkZTSJttxZxiNuaxGTXVUeHvGfs",
  "key7": "jife6H3sHNUXPwMcSFgQUM7956g2PgDxp2zjdAHrkgGHkxmtm8XtfVDxZLbgiuGw5A6QAx89aapNmcmsKYpxEEC",
  "key8": "3rJMcAHqwm6nUwbhtSDwjKdr78o4QCRJ3q13kFATB5uw2e8Zy8HKe9PJd5FZeFG5qyKGf4pbbekcUKCFD3BmnRf3",
  "key9": "5P84nVsYxxEGi85xTignfSArTggM2JXSp1SpGEwiSbCkFxRKp2tHf65ZKUWY2pkTTxXeSJaagJYMsphsE8kaV5Z9",
  "key10": "2EmzYRFX8XpuvaYjgRxtvMEzRykEiarAibFmsgQUXA3CKvTgFMSK16cUXrVGQ3UWk3KhHudVkJtNU7RNnbwgap24",
  "key11": "52fXc5BL5RhBNMLbSJTdPeZB2YUpbWbdxLWH3gpB845TqBYtTMR7z2wS8MrpcFsE2YR5ucBkYEmACFVPmvHpLvx1",
  "key12": "5HPfaGT2R5MUjqz69XQQ3GFcyz77yGPLA2tjsonsi1R327J7tcVgdtNTPvhEygUpszzcns4Js5vVX7MBnsPX8sKi",
  "key13": "XWkV8HVUa1sSzmK246wiLXNRF8RhhZFqDpvxsJTo4z3G9aKkAVknZbqGCAFRu6MceHB1pzqbJMwgpxpSmvChwa2",
  "key14": "2vVkCfnhoDbPXQTnK3xcdrjoeJj4CnZfiDeahdJtSuMfGLYyo54sqTF7y23A5fU2JtqxVNMFWJXayDXJRByEFyww",
  "key15": "4CzPbvDSuTb3nRB69C2dFTqMF3gJvQcCnpZHPmfvRQpeGKkzxarrqn1KWrpy8kKHSK5uMR1JjxLBtRgBeydYa83U",
  "key16": "3Ru5xeA8C6ga6tw7PFUAyCfrrdGyZmUuYk4N3XFN5AP26DCbVPVTnFrBnW1YZVAbQ7UZLhhkeet2LeH4pgWFfSmc",
  "key17": "26yA3zDp84WzQEwrMqRK7Pem5sbyxk5FtQDu78e4nbFyAfvZcrhYwmWmRGN4QkZ2RWs968DW83jFwxceRicBfjeC",
  "key18": "3XC4UsaDpkmG1xYs7oJQ53cvc2ZQGiMDrqQVX9nE9UnapraSEnevgbLfwweSj1uYoJCUatjiBtjAJc38GjYc4jaB",
  "key19": "4pSzfTZ2hR1Zdts9Xo5XvujSRWBxdAWpxGeCBvzoKPnveyh7nuZ1Ld7TC3YX3MeXitQvrJ46v3FofCxHzA8qCbQo",
  "key20": "5TMh6cnw7dULwWYRcqrTbchyEWeEXdYaqHctMiTbYY4EztBf5s6X8G3FxsaryEUUwMVrsfyYqb9sh9SrCEDUVDjz",
  "key21": "3CatxGiKTbxnePyr9qdz1EoGUWHYCYG3jJEp5Q73j9SwhJkBmqLzvEyqgt17J5yG6AafnehHwAG3ZJ664vi2ed4Y",
  "key22": "63TgrMdcQcmbsRdVHvUVKSTStnsZLiYtKt99gph5X5nJu5CBsd44f92Tcotr9tRH6vMQ6q1zN9nAHoXnUFSBRCvL",
  "key23": "5frdt7naRAFPMaFQFNNR9FiFU6NwexmEq8y1YUngHbDn9BAuDpHGyXHJWQMDTcMGApzNuF5oR64H5qLN8Ev6NEcP",
  "key24": "5sZMxoie3SM7CSbFCouQgzLbF7wyREmmqwGonbvu8rGbrXxkxRWQZx5RbQVzoATuY4wvU8d16uLY23ujKZ7ma7AE",
  "key25": "5WugtB574NKXXF7Ln1E7dDFwfkkJFdvZEbiqnG2Rs8CW2xq5QBeYHVt5GdpCMZSN6o8C5qQHYQhGeAngnkPWXQU5",
  "key26": "5z6pF9QUhYHDqfvnJDd7WLNTeXkCEzAWZXv7QB5AWPPjxgCbiKc4r2Xs1aqxCd91agjN3VwBHNtKtVTzHdcYgjCX",
  "key27": "21yqQienmiihtSZXd9JomUe2hBHHsXDb1ubCypxfsZgKmasfRBgWq2xhdwat8BmL6ucrdASDPsQbNMNpW27gYWpF",
  "key28": "3drGs4ZYwW6kgsArcqSUXatd8RhmznGH9NbQoZ93edS79RrQvd75WhAv9DXKgfY8MrMVkQa2G7D5dGVHmU9kDQZq",
  "key29": "2b8Fefv51Yu1asF3FP7MUMPs4HduYaeiLm84MSsQW8c8ANUdVogDkdcb29vrHwx3a4M8VAKGFCKa8ZFsJyh6zgWi",
  "key30": "3AdEhH5bRkV99Lzu3tnnXYbSf8jZ1EkXiLziHawdaLhkRcR8v87hAXpmJ77qmjnjb8J3S6eL82gRgFd5eiW9K45i",
  "key31": "3CGmw3aYhKngBqsj8LFkuk7hVTnW2Nei9FKV7xxdCZDV7E69bkBoPyzzc7KAWGRxmEDkjvRGryAUr1Ko2Q9itrXU",
  "key32": "fqofjLmxUwxN74WX21Kqp8ttUtARz9gRKe8RvPvKtpMFhBDffuu2TTeFck9nUdJLnXhnyh4AbKEgXLN1Cq8zVMo",
  "key33": "2pdwqAdfRPrZw8sVBvf9LKL4BGPmb35XoPzdVjMvdihGXZdWjq2uBajZan62e7iaLhDRcpfUtf1KJVbnXKJVPWzM",
  "key34": "53zcq1wAPKD6JDNcrUbWVeyGNWJukH1Bm54HumptmgvyLNRCj9Vip8CNAVaacwP4dhMgN37FSKh1aG2MMa7TjCai",
  "key35": "46eN1RvpwAAtRo6VpkVD54XE53bzTnzbpsEqpd2RXUXrBzbw2ZpoPiiuyTnEm6UoWkAX3qzdtTFMM66YreEW4B5A",
  "key36": "1jRQ54X9dRBBdTRBkK4GUMKiPSxZ2CQRVeUohy3qb2JrMxqib1rNhwcb22ofx9wdXxxYYPZymCdsLc3yq5BHBFv",
  "key37": "4bRJ92gWuEKu8iNYMcYRXxgekjeom9VgddMntuCxhbKmJgVhfD3W9ayumv2piTQ9BUZ8cXrquDcVm5hDRFXenEnE",
  "key38": "4hwRCzX4wtWDgba1r6LRRwyUK3H3Ko8xirxGDPBRCcg6jBhWP9Bu76AbXrwLiAjsKYhsWHzoj6m8gArYPphphPdd",
  "key39": "34YWUh28BbhgbpzT8qnaicMwk8eFuVLASuP235NJ42mghwsdzsdCcvURxPEWdXm13DZ7jbMCmrfv9FqNNxCMN1kX",
  "key40": "3UR1fiWSqD4EiohYVzxS9GG72iwumLx1WMs4s58HhdMmvWY3THDfhgGmMBfD1HmA52WYq1UEjmnDHibsNh4b3Gei"
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

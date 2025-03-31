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
    "27nStBgtosit3QkQi2hoTiTzSPdaJjHWvnvqhjxLYdpMcA2g65i5LF3vrmQRe2cAdkWCBbGfURUQah7m8JmZzdvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gGdrQwSQVYHLhF7f8iyCMyLq2Sr6bwCwsCm6i2xXnG9ysQz6LN6E6EKrt2R1y9QwE2XrCtV93YTsrqgJUBmgSoC",
  "key1": "4xo6W8G5qT2Vix1BnjweYbE2NV7oayrwbUwCwtvHmMPuZ2k6oadLpQy2vfYKyRAcnkT2MKEXXFtdvzHzwe3GpMJ4",
  "key2": "569kGBXyZLEz9yURnU756hKwC1VTNnMPZVTsK9opA18FUmG5Kr7nQ9NkurMWr8mKuFW8Ki934CAmcrvB3AMFWjxb",
  "key3": "4d4qGR6modJtXL2ictH69Mg95Z55bJnmoMU7urJbfcM1ZFiVbMg8stdr29EiHycPqgAYfnXkP9NjhFCEUHnTLUtJ",
  "key4": "3UAqrQ7CqqVvMxScCQ8c3Z3EumEFqRW8HGeT4H5BD3H2QBbhzP9sjJHNrbTX7HseNBrT59BQa7pq2ujgLVua1rGQ",
  "key5": "3Mw8CP5JSZggEj41jUrQQt1YN91wKKfBCYYPXXxRnkfb3iAodBvhHZu1SKsAhZVDRCd7jrmzz6kyRYSY6G5NA1yP",
  "key6": "rV2q6GBPWVX1ueELtEntVFP7FcZQ5zTPn32VvkXcWCrv1pktJQ2nYWy5VXaBS1N9j2vD18TFVfmWARBeGVZWwkQ",
  "key7": "5fQtG8s7aaPceDxV6eDLicMFr67bKCUsQAb7e66VdrCz1twn8qrzu3nPnV2ctfUxFNYtioS5MuLeqzf7hLusp1aG",
  "key8": "Qs7Xbo2GoEJaQeDA8re883YVFhyic4oju6EpxU6YP1RPLkta39M11ABweVoc9c6EhnMxkHkJFeZEhFksFVY5Puj",
  "key9": "5er4iXTTXvic2DzvB3p3xStEqbt1sc5eRbFdKrkT38DVgNhws5mrVNQUF7Z7BPSWswUC1rZC6i5ef6D4ZKrvtR93",
  "key10": "vXnW6reZKdPDmiwJvKjWJy1zKEdw14DuH1jVxcdtLPKcGUowKeMgWQ5kHuW2XxBQdkZJtq2XVmmEoc98vPwpS5d",
  "key11": "zJSSD9Da2JL8DZUFSGfWQfu3U3oaiV9qmvtsdtPnuDwc9LL4UqdKkSbLZoD1UemkEHyygXdNS3QaEtUYJSk7GZ1",
  "key12": "27BHfiGw9sbKsuQD7YEvLs7LqQpNEaJatdHe8UjcujyPBqM5rcuBf6Y67qbSNiKDfU22ijEqGRHLkfzGmmVo4CQx",
  "key13": "5Bu31z7BWyB3juDdQiQojqXd7XVdLu6u72hfR4XuHLgGR14Nb244YdtR4qmBvFbFDpq6S3XYQhJY8sZWrR2vPixW",
  "key14": "5C5ZjJ4GXRvAVXDuiaNrUyJ8XVjNRAKDYemTDKspZfm6YMCqmw2BSi9qzBzz5mRHyCiiexUJYskismjr9Br9FUK6",
  "key15": "5dqwVDz3VsE2NFd4mmHtp1krfPBbySLkA8xSDcpTzDfQUrf4kTZqz2Qeh1tsoBYnjkDf2x9uktue4JHt9sAf3guG",
  "key16": "2CzqHKPiUEn9xiPTssH2u7Yyne8XtZr34yNjzjkprctiuzTt5uTYGvpKJMFb96fRzpxBudXQa6CjVajyNMEpx5pv",
  "key17": "4rmsaWwwsWGAQMvikFNA4rSRAK7VpQop1Zcyux2f3jw5PPqz927FJ3rGFagxDcKxBgBWPsfKmCwmuExRK1f6ddcM",
  "key18": "32jHdeH3yCFeVFLG77cjM4v8DxQyTa9eYqBcpVZNwQ8SGZ82RfeKeF5FnpH2FVrTGjsiEr126RYgKwktktitZRbE",
  "key19": "63B9n2CFaxLm7irad7x8Cz5wd1UozJ5yHQHVpLymEFoNLBvNEphSTVUtTSDMFV1Ejfn7HM3Jiv32EsGszGJTqCtJ",
  "key20": "2DXLSEAwCLSAXv7avfDjYA1w4XqJwiKPwkow1fNVPT64wQXJj27VvwtV8firbSF9ChYm44rmNSBYqhTd6UhVpMvH",
  "key21": "5dpw6sHoJvpLyte1WtBU8mNmSfyHZcBh56URwjKSSt53UF5mtcLjc4rZWYb99Z6Eas7tqLpvZkv2Qs4QSM6uHz4U",
  "key22": "GUVXWmYGQrh1yqHKScEk1Fs9oYZUGyY6eT3vUFJ9q6AqbubPQcf6LjLiCh9fUebTaxzvhGsYhL7GghHy44sW5bF",
  "key23": "5GVgJBENMGnoLDGynCpDmw5aNE1VAdmLrTo9dBkravHFg1onJLof5H2FonQsvE3zVLMCNNCnYwDDJ7ECcnuEEFvU",
  "key24": "2ANu1GaUv63yjirUL68AU4k2StJ294mmEcLTCRHhwGBuvdz9mMVTKwZ1LF2SmH76V76vWgseVAJDikh6GBU3V9J2",
  "key25": "5qSZaCFJpWciaSLbMbG1q8sR26m1DnfdX9PWUnjXWTTXyegB26nSSbyD9v9mjV1Zcu1qbwdVKtHpqRYdfAgRA7Zm",
  "key26": "3nYTz1ddZqJkaWc8ocuThrMS7SGc2gP7sHrmJi7Wgy7v1hsi46ihm8gyFyJTrpAU76MtMdqVfFDPuUV9syiR1ooo",
  "key27": "4CV7ZG51k4AXCq9N1TqyR1tjUxgEjYboGDiU7X2yqB8r3rAKK2yEVqg2oeopuwpj97TJBcqsjvzeVAQVSHS5ieV",
  "key28": "5rzRUSBMHXnXYqje9fbrSJ1FEpW2sGDwJUWj3QCaqf8fVfFJXjhz1n4i1ea257bYkHBrxW4f2AbmoXZTufsFwGB2",
  "key29": "3EXEPgYZKaUfMckDeo8DdT3F37hkZy6e8Dsrf2hWJ4n5s3FkRzsNNTCnweexKQuuUyCxGMcXnhYUZv3fW7kwt9qU",
  "key30": "4rCsaEkvhgk1Mbj1ng1mbLzqfSgcWPmDHtojghVAsxWmafHUgmPJFE36bQ4oDgHtyTXtnQuwZArXTkdLhMvQMgF4",
  "key31": "58aLVxNEyeFc1QT1ZC3N4MjM8sEwKEisUW56Rr7Jwj6Sd3rzAdeYtbjty5TShRs8vdnhPv1muzVD3QqqZQvui5To",
  "key32": "43KKjNPKD9U15Jx3mkmWKw5p93KHYwHdpnk3ZvJ6fRuV2xpDpj1ML6nnzKLowWDDLiEFkthzSXEi5KvgoTQq9puX",
  "key33": "vDKRUnWxJGY7KKqD83KziJJ4dJcPzn4QFUReqkbziUcgQTQ5UDwRWkHQsL4mmxLZsmYQz4ogScWqBoQWoDjH6Dp",
  "key34": "3Khj9JD4UG12MiA5pHTJb115v2GnpD4A5nMDAgvoX79uz1a2D8hm32NDrxGfCT8fFScUvLPY6V1NLUhwraQDxVJV",
  "key35": "5vPJ39yELtPdEG2oc8gvASaEi8Q3Hed4nzs5Dvryd12zocs5YqQJ2RnStwr9RMZ3hPFHCAXPBCyW3QQ5GfcUmbzD",
  "key36": "37TiZhJUQ4CiSjDoDNxZ56wZdmFUHx1mQsLJvuxC1eU5aeFCii55NnQvt3HfWTcExJA8xgTsJy7gAdrQQmGawNAR"
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

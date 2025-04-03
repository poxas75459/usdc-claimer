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
    "35tf9DUQXoFmKBaiR7SWa3c2WdvbuX6Bx68M7nYTpqaYRLpbas2yyZC2YwcaaCtriiJKjR8KqVugVPaUXiatbS6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJJ69EKzXGczoJwDAa1R8Pq3UVVBuseK3mBB3zU1A9kd3hADQAbvKzd4iVxrYWeeggEamzGkdJvU4x2wjVXtqDG",
  "key1": "46pTJ7zmjzb7gAcMZ3qYaEqWykhKwfnT15DQUvgCk7XU7eVcq93hdozdif91KtR91ovttKapC26xq3ZmNXS2gKEE",
  "key2": "2G2J59h5C37Lt5pZPnCUoMwUNBmVgKDG4zwyEjANm4gRcDb7pcNVmMdTn39sbTC6C2cRncWT4Lq8DUFwNQ7gKQtw",
  "key3": "5XCcvhjpTVbVZP1XHuQLsDR5PCRoN8PoY1AzXWmkpsZvecASNyDJECLVGcwr7d7eEZERUicDxEzapP2GdrVN2BzN",
  "key4": "3UTEeBh9VzuFM7tZkfgkRoQG1n3DahjMrDqQeNF4PZk4MFREjz34rPXPF8mMUkBz2oUi2CGExZPEd23q11tsi7kD",
  "key5": "2hLTHccZpo2WnQTPHdks6pNibnSHyg81u5Ui3a5qQ8dWZ6sRXkd6GgPiPepxjtFUL3Cg6WHapQ3rbMJFF4ZK9JSY",
  "key6": "5dCRQwT1fvqSX6HuhpMEjt3wvhXGBLtw2UvQ6qGwGTRDbRnXYH9ZeRGxZN48Jm7zxXVqMGxwq8JTPcJ19NN8LZQ9",
  "key7": "hFpWbE1CzT8X7Uqr9c58NuLwepvgLiitvR7nckNLRrhXNj1k6WNHrRnQ6HKUuL7LLQqCaUh52BpXSt7PeKkzi4o",
  "key8": "5uj3ZMEfVd2yqzvvUaFFkoCe4muiCLXasmhXzrxXbz9k5jxcbkBem41dxVqQw4EUmcRPW9vwiMHyjgiS5zwtbPVs",
  "key9": "269ypjd7dbu3rwsT6HBLaVtpCdpMPhfo6YGzYTsoJYCvu7vV2cDmhDMNoZZXztfu6X4osZpEUNwjVr3hzqQLMgkp",
  "key10": "2RV3LBb5xSd6HV1DepiBrV5QhENZhkwdYbjUdLXKP86vsTmFXCBWKnd5TcsSqWgSqzK51vkDS64wYt6JFMwYc2Qf",
  "key11": "3AVj74GbQ54a92T81AcFBKKUpYxYXhSJhShMRHYBpbDE2qEPaMySAcEfusLBTqPSm8KEyQzcyEEi8Sx7ZQZeztG2",
  "key12": "V1YFtUaZ1kCR8Ld7AmqkAF3eZtHoZsekzrU8M5kGCu6K1Ht7iGEn4BLF5oTT47dM3cJQQuzJ7uPNMf8FdJvJrkC",
  "key13": "25yAirkvFixt7mSsYVf9q7ocd7LNWpqkHWhaVwg3z17R1LxZPHFdPWMWGiPgkT4dZKEiWruLUksorQYqFy2Ueg95",
  "key14": "5as6u1wwiXydYmU7RozH3gdMk9y6q7LH2F2P3cer2hVbpcXanQyka1hfg8S6rF8uZtj8oA3YzoiaREJD6PTRKcXk",
  "key15": "3VoYHevzkEqfDy1wLSitXh7xajnG439f7wvPmM7AbfUHoKzdd6HtXZ5iF1tPFbM6hei4xPbm4Mi4h3fLa5M56q1h",
  "key16": "2FAwpfjT8MqHBDJFW8g9QDAT9J77EYsrBV6gRKmi5CixohpyKyzjZKCXe37BQUKb2AjktXhQ7wLXYMrMpS1hG2p9",
  "key17": "2tELcqJsTUbVZdwF6tsbyrbnb8NztDdk6P3SyEhnAGvEmtUF6NFn3RoxufSFRvV9wkV4UWLB15Vn6uNGqs19UVsq",
  "key18": "3fffsHTDfXt3LJmLqopZKXiHbh2Ju8YVhVWkwDCFbzZ62qKvQHpZGVDfiqwVHY3Z3jNKVGk8eRCo5mq7AGeRC2Y4",
  "key19": "3GLtPrrRyHXRdsh6taCajAsvme77U7SRSU3mBFQMkv8qRFTBpHayWHE5ZNChbz3HNcsvHi2bPNoYoe5HmZUumx5z",
  "key20": "43k52yJMm9Cnhtt1JkbkR1gNyRqoK2Ucd4RUc9F66mSFqCxZzMtJLVgtcGqf27RjKmkzRoKSshaDx8GSrzNTtD2t",
  "key21": "4KJoBXyvLmfcn7K5HCUi6XenDQjWGbPwW9eRQs2GPk4J42oXvXknwcK246TPA6fc8YVrMCdWFFxM9jFrmFFYpwss",
  "key22": "3K6KRChvxbDtrQJwy5GJdnDs6vkSvJ62wb466ksYHLoBDah3pY88pwhZqDpjfhmzzk5Yp98Nn3nARm7Pcms8bcZF",
  "key23": "3GdvcpEK9rGeikhgtLrxxGasNFXYa21bePvEQCAApbSYwTWijyUU3kDvDtUtVKyc2W8FL5E5pm8GrxRbRHGshNri",
  "key24": "5A34vUgfSUaY3rxavJtPxJTEz3HuYepQnbviTHU3CRzr6Gw7Miiehj1g4NDAP6P2pxDiAHrV7VddLrDhMjJgptqA",
  "key25": "5s9f9yA5SMuXB98TBcwNihh7t7R2ieK6hsirdfMRPJgi24oyKvkiGLGhbzVbFzTMacSUsnJJC1ZBtvg1keFNmdm8",
  "key26": "sVj3S7XDDNyN5iLZhTESz8uW5WdWE7kdpY54ZHe4N7aTmwEKbTbM63AHmVKW1Xd5ZKk1eTU3FFKtRcdR2eCFpPK",
  "key27": "3kKeiapUmhQEorxpDhFmChNpW62NHQq1t28HjSs28yr16zCJDPKjMAMDYC9aUJCih4si4nkMi16ouK5FQtvh3c5f",
  "key28": "29SLQ4Vu2xbGmhhBKkBV3Z1qz8kboVbpq7LEoKLrVqhNCeirnPeSXfhjXu4ijZ1HUHE9z5eA7rXooiNxhrEv1Wg5",
  "key29": "5cWWiyuPpfBMXunekFMwREuSm8t4FwLVs2VP1c1Va8ZJz7EMcAJgyd2yzatZw1kFyX3fcm5FpW4nu1nizFrbQ8PG",
  "key30": "2vJ4nhtnYo6jR2YKAXNjySyiTUocib9Ansyk1Mfpdo24AU8WqqvjY7dpG32jUDZN8nabeCnWyP3YdC1hoWdZRX3V",
  "key31": "2EP4NRu7C7aEgaHEs4gD36F5iX4UGAQMEnX6TMJEWKfzz4kwixV7gbkEc8acyfupNR631fJyeRvWqbf3jdrAAfKt",
  "key32": "4w5kVrSp6T9NAJ5m3EvXhSgeiYf2A3aArith9oqYGgxbBcgRZQDeiMfXzCD9796xU34ugVECDHKFZzTCURXWmExd",
  "key33": "5xiraNxMUXRrUcK99ecS2uqZZYgk7T3q87bW2GSczWTzLxxkdMNagP1sesYTXroBXy1iHU75f7oXWKFsvmyS7JMQ",
  "key34": "4KvYg9tmEi5rPGBotMR1pEwLhe19ED6qBKQMDBsmyps9mQEFZBN2aF8nm8mWWc4hL3yvujHe7WYrBREBbjoa64Wz",
  "key35": "ziPTZrNR13nFJQ2ukGFYSjWmdi6b1K9Zc1EybhfECWpLJSYptYFX4d1aexkSNAkz9RcWGWGKcnBkVs61RNd6Qdn",
  "key36": "2VpfcPGHuURaTFWfK7DLgi2TgX45krB8d7C5NZaxAxTdLuZzBYnYjBXQtMD8b4urfef7Eazwf9n4eLkpJ32k9RsJ",
  "key37": "41pbLBhmoZh4uDUGghU2js5Ck1hqkifJWrzveRq7F63oj3YuUWExygGKk8oEgTwWrDAc1nsx8YGCQiXkya51A3nm",
  "key38": "4mRCG1a9K15X6gzss6JSSAt3SaruEZDuj6MmDosbYc9xEW5fG2h5EJQXCX9zqYeV4B7f2b4QCu6YJCTfd25K33NE",
  "key39": "4Dyy3M8P2wqSySPnAymscdBs6LDR11tEo78ihA2FHHG38kVTD6pFtXboRfxL5SoVgTVzqw53pTHtBjyqnHaqn8T1",
  "key40": "3kRTC4yWPVKyNbAdCo6ss9BqnGqUmDWcag3BhpvQHmtZgvBUqTGYh4nuwMBSdJxBH112VhQevm7ghhNzMKyHYV8d",
  "key41": "EWsVanfNXyep672kLmVxyU4nydKbUr1opuj1Q3bsNggScW78wxp9n3vfGhS8m5hJMYRMdbbLTUKasjtgb6gPFnR",
  "key42": "2Tc1913r2Qt54UqwNcAMmJ9FKsS5c6vdpy6dJCTgnoaSgWHYQ1b6sSkLkHBPPobBzHriyqy6Uxq56FCqSgByuc7n",
  "key43": "c8YNNB98vMRfFtDK2AFbX9QEkjmv4HFWc8V56obX95qijHyWpk6TXC7imwc4nUqbWG1UgD26R5XVEvZvFv5KnGK",
  "key44": "527WE8fgPS86MuerHsrPWQrU7X76SaS7mgFzJ4osvVgAJjCzrPx9KtTH5HJFVKvgNUGQSpCxEqXk2zZFZskNhyan",
  "key45": "V12mzFxuUQftGhgsuD95QXKus7U3czkaGDkQbLSq9dzDE8ETUw4uuFMWDPe9bTiVxQ58MRVQE7yEi2vznyZBm6c",
  "key46": "2E6D8wvGHbEm7n5Zpjs41FTNjdy4XDYmd3iYUYBDvqjgMz8Q1x3iTQBqi4AJXCz2qAifWTMfRe9EDTWSMYBVuFum"
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

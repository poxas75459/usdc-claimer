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
    "5KUxF8x3ZY5ZCtJ4xKUNfCaTHyA5dvCXK5G5fb5Q27ouFXZF4orVvJFTPEQFb7pGe2MPUAYkxnZ4GNxgMzzsnvpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YS3A2RBwA2MrBSw1TBfTBQK3hxZ3aoKkKkzQEA4XJUVXHn1gXWf4wiDHEQ11oBucbuB5uC2eeCuq5ZZs6fGQ4y9",
  "key1": "21FQtxtvaVtf7fXHfyP9vd7JryXQNXSpMnZGbxpW4V9K2mPHWaMHwqve3QRy43TzP6dUAk3Z9AVMS9QWkmVZJpce",
  "key2": "3PKcZLGHX9Dm7CaZst6bq2pjHVqiFFuEuB5X8BsxLBpRgHTUYnM1HQ88aHgCswug24bdrdnmzboC11Nxsm7HpMau",
  "key3": "2d172UA1CyqQB5dLLhkM6b2veUZz5F2EuCbNpCR6X2wxVNruGCsDpCswbouPRMgxqENFa4PHGXzrRuKVdCG2iqM2",
  "key4": "5Wo7dAt52mVZFWvyWhbMWgGu6RCF9ftt7GYtDptav4yGcwDUCHpfymisiKLh4MSZmitnSjNksTeLWzTJQcgmqMdq",
  "key5": "5rXCEExU7zxtgSjBFxcRcLMMjpSoZTCUk9jp8pYHnsxNrqfu4Mb9CbBecHTQptexQgBMMKZsUfHkLEWS2s36QEA6",
  "key6": "413qEVDEYqvaXD9xyU84ubExQyChRB6TVFrLg8MBMZ1f8AE4q4f6SYAVkB3fGKT9Z2Gc9ko2MoZkcBNd1jjBeiJi",
  "key7": "3qoP3TVyht3oPXP8XSKQ1xLLG9EQSqw9FeGXQCgdHboQtmEa1EL66jsa5r6JKLXBjKGzPSD42dhVgBWbC92GWQnw",
  "key8": "ozGcCU26mrwDxNngsopg82ptyUWQe1kGzy2d1EuoUahrbzAS5f2cbndJt4xe6cc9At6xErHL6oNumis3ooBzQZT",
  "key9": "5HfvHc6yQGJCc7ULAw2qwmS6cGBZbvrYifFEzyvgYtCneGvEB3mhT6vPNH34wqeWpNv6bY149z5Rd6YAp78FPiY8",
  "key10": "2L3oiBrmEnvVkVnYZZJL1WwN1QuPke9hNZ8YcE6x4YXAJaZbqBi6dxhMsqMUuabiMXhgd8wqg1TgQDiniRkiabZt",
  "key11": "5h7dkR37RfqpqdHXPkkWVWBppQMRVDFo4XcJNEuN1WDs1Q9N4p9NS3M18tkVqsihNCGbdiWdzTBmqiywhwtXUxuP",
  "key12": "4YzpngvSqHta7wv1qUNLMDohMaaV1oYySuCao2XF6yhRNpqbiSdiHsgbYBgzT5vE9vTsLSkmRNbKDjZtuCtumedD",
  "key13": "3dwf6HwhH5X2NUEqxXwxB5NqNoqFGSK4fmVJTzb2tPFcHyWkRJoDxMisBoXBTL4kAxvgFR2V7rt22LYBbkWU1UYG",
  "key14": "5z68GAKKnA2kTx4UVFyCZKbe2cHnzxYYCnKyAhFiYyaSkVMZFZsQx7fDYcRBjYHbqP951UraUacxCpK9ZSRgrED9",
  "key15": "4Vwhjgbu1rnDwnJNxTBrpwiqaeYAWQM8yeGaqvgnGsNNnLRMsSFdNyKeH6ayKWZJSgjKB538ve7bZRPifPCzFP6V",
  "key16": "4oX2MV7YRdX5jpkx7TJVXTaFuC7xMY7TWePR2LPZXoz8wFomTcSfhQB4PUHiutt1MS8mDTkhuX8WVRNPCjkv2fzq",
  "key17": "4vF13VzJWa5NydG5FUJKr8SqKehC9fJw8MrtutZQchKEWWJB82iuQgQAk7gKXiCpzTHQeseqGYoktL13zk8rQ94m",
  "key18": "3Ap5BrotJyczCjeu91ohsfLdCa7MS1VyhzNEEJtpNpivvsznVbAEb9bHev9gPxJsjb9Dbf4nfgumig5Vwx9cXcuL",
  "key19": "3HNY4YNxy1MCgzzsZgPMzihD1hnL9vVcjRhNNyGfCgR5vZhWDQMKBsqPkGQjb19ad3gDyi2cuGA8zuXnbAV26G4",
  "key20": "2S3roLgbJ1xqDfwjurvQdQS6YMEVh9AnKfwWU14zfuU5br5mJb7sYsGP6awbZan4fPjTXDPUpkitXkbYWoBkJBg",
  "key21": "2gMNf8AJJHyuPUmXjNvqMmXkekUXZx1mp9Nd6wWcQuHy8QJStgjH1NAVALHTCDADyHCYjTxGDSU7xeNgwTCmzLgT",
  "key22": "4FJBnDPWkAg4rfuJoELuyrCnDUBNuZeL3BwMDqcnHy5yJv61MrMScr7Xpst9DyCNk71KfAZBFY7zJgqkXBokihke",
  "key23": "3QpJ9UDVQE6JHu4YoKee5QSpxhqqDTnwC1HiXAgE1PsLr8fFEUPxz34814uSti4dcsQTuocdtPN3AHcjb1S3dAsJ",
  "key24": "2K5y6n5Bpx445LG3WJWcnzuk2gVv9RHL63WWTv2QfuMkWoeYpEaYy6nEiMgqz8PdfhyGMgHGcPzwuQLcMb3KLTJH",
  "key25": "32A5kbpycCDtWwKBygC2TTK6rZ6Lnen2sJsp7y1Avrm7qK8tW42zBWTG8wCA1mXMmT9RfsCJzZ69TVnEDaoWdGWn",
  "key26": "584n9MY4MYz9bh2BUvQA8ESmjTsj54ViiQvJLhjmvuRcbqYVhfVWtFXnXvEj7GYTZXUqJzT65b4cgNGCZqi4wcHm",
  "key27": "P6yc8h2DoJ89AEDQbwMk9yL5w5qmsQprsUf9HsArwtewGHmwnGDWAConDd8tnFATXY2o3h2mFiVcyCfj4AxDVqX",
  "key28": "2azC5UCHDEDv8CWQVwnwhvG7xDDFUQVNUaftiMh1HSanMjCsN1kvfHSASrqdxtDypJsMGvS1S9P8wcQaUJ2Zaajp",
  "key29": "4Jj2uX6kLvgyMtRXRwS9AV97Cjsrah5M1QA4nqf6uAMFQPRaKzwKW7iQnmXWGBQZ48jfjyC1aE6n1bS2wDiiwLJ9",
  "key30": "49vqS4nD3fUCDL3yue9p3Fx8KHiRMU4zEJna4ip6qmUrHDcisQRrStZ9xKtHjAZs7zAnk5Tx49q7pwqAbN2ty1HQ",
  "key31": "5WTRVBvXZnfmtHsD4BUVkZTBCCPx8QGv5ahLqFXnvm6HoXSMiCegeG8aww5EdtFqbdeWTg483B6KEqTQrHt84nEq",
  "key32": "38Yn2RBAXuypsorybrYhkJLDNkmJMY2tHgE7dVsLfxcqE9yYpHZ9DfdneYbq8DwowvHZC4GhZsFTFyzxZSDA2Grq",
  "key33": "5ovsk6vWyDE3Few8T4PCZDKp18ESyDXGiLuGHTwSgkk3MFacqFXG3PA3gqoXiS57A5TrBtatinipeVpu8ShcgY1z",
  "key34": "46TEUTVSecxR6Hi8w1pymAi6mYaxPdzhj68zzrthXoCaEn2DkBrh4pKkWn5f7GFi2njw2t3Qpp6tkU3wEsUa4ugQ",
  "key35": "4qa3KoASg26ahhnn82dAFbK3vwEE6g5Yzh5m3QducMht1ksjNGRAhTPyWZmcd4txCdQvEQ5ssm5Cx7MtNRF22q3y",
  "key36": "2NRVSmBRtRZiNwGzsZc7YjG8xzubrs27Na84DR8DaCtg5E5DbNHqc1SEWp1q2qrz1NKniq3TzurVsEmoGuo4bjNZ",
  "key37": "4xVWC2uPzgWMgMsTKpi4SaCchrcYq63p8TKUzLgTmok34epiSqoQpf8wu2ufdEGFg21wVV1t8HSXE4tWVQK9Y2TU",
  "key38": "qmYmNRuAVtw9EnqYF15tZ7ShcLhy1xX6TnymA8p1CozqTVvYCZxEbjbZ3hsAduUiP9ZC2mwsQuecPDsz25MAEWb",
  "key39": "4XGmDyDJHQAZ5LvqBWgtcavAGhuFqNM3S4WBkhfPhx4YtM5Ya3KA1w7KkJf2mjETqUd5tX4LrjFC7uUhyXsP2p83",
  "key40": "5BJNCCr6zqCf7iLe3M6R5A1ubqsdgwxGSE1LWDrezhpQmp7k1e4exXxpgzyjGEwiUMTYUSxqD9NZHUfa6J9jaTQT",
  "key41": "5nyXxRpNvAGYkYZahvimcFPEbU4H9RWgGAJ7rhmamUvuBLtz2tBWta2kR5g8sfRgatMcaJmtiH3p3WDLNb2QRZCM"
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

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
    "Du7cgq1KscwXkxaCuSmeRX1znk6SMLHyNbMpWJeDzqTob51zCTPT99odXRZ2NruAseYmRnawYRfCeEyZjDD7AWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmr5vf4AwJaApGc5UeVDjQZsbELrBavyJ3juJSWzLid4VX1HEVw1eHvddrKEfnx5K5eegsDQA4Co4dRCDFHMgDf",
  "key1": "9DeS2dTef8z9W2GY2bbnQbmAkmzk88wx3S64fP71BC29sW9Lr2fUCBJZEixUtLbocJYCS9E8BYSoAZbSUpuaymg",
  "key2": "4S3gyPQNTECvDGFQJrfqP18Mpcuh6Y5FJvXbkcoJZ1MhtsWdEknuwiRb9kBpc3EE1iCtpztprKeayhjgggeTrWx4",
  "key3": "4v3ipNF3naEfMza6e4FcG4HXxFyhdmkHbSXo9v7znTRtJGEnDVFd4WWBjr6UixxkSV9xZbT4tt35FRP73dJ26nC6",
  "key4": "38f68a8Ce2atBgeWtTxSHxTipCHN9zv8X5aMz5ZdoVE4B1rKc9dVN4RrdmGUEjfhnsX3mnfCvrWTkEbpQbdPPHmD",
  "key5": "jqEGYE4viYbiniXrbdR44BCP1XnySDgJQHX3CYG4BFdMWHJMFzp8JfifCGzupT7tt1xuSv6Qoa5tAtqBjYGEiwV",
  "key6": "5X1rFrYt1N4tz879xYnALWd8WgZVbwMr5c6n3VoohTSeHzMhKoe1yFfGAJbYULSEPAYDMUNPRtWtSxm2nv2kh1Pk",
  "key7": "3m54YhtGUGZXnFp5akvuQ3T9YLFF31y78Bc7XXACQZ3mRcwuk9coRqxCNqCx4rsWfe2QjXE5bykaZNLhpVfqUaKA",
  "key8": "5sD8Lug6Yzc9NCzqB96zbX5p2bkNgvjWGDcSY5hn1e5oSas3bMkupSSQEUt775AFFtx4FLQ2KtZjoSgmsaNxGcPS",
  "key9": "2caC2t6hxH5gm91dtaBFA8Sa4F1vKN4gHawAFu6RhtWBeaR3etyuSbRN1jmEC4bX7S3MtYdBAV5qkk2wNuxL8fJi",
  "key10": "6eN6wwJHsfsW9SmvRhod5hYGmFP9MMxr6QCkM4c2F9LbzpPEk7R43FEktfRqzmoQqiieM2CvqVWPswxKrisQwLx",
  "key11": "64sQkP5dBxNE4Po9Bmym7osbYErJjFx8rkgsEEaMDX9aFkgR1TRfAQCoqfGMUtoqLyA2bgaMwybby7mahbQDjLia",
  "key12": "2gphomHE5c3QwaVLrMfa38pkhHSTk8Uxpn7AVqhLhhLFKvpbDmeHwZQ8rzGR5qhgGXWrZp845xv9ED9TD6MQExjL",
  "key13": "3aFgVjfcpPjLxTFJimo8NBXt9V4J4akGxrG9gVdMbMehGZ9feGiYtnPXfiLFWxaF74DPsetNguShNktgyMecvgBW",
  "key14": "2gxEErHxep311h4ciYx2BdrMtSwdnPHpwa82H5T6ZEKrm9dNTBFFaUfrTmjQyi35ar3KwfkvartuoFCd5ZS5FXFG",
  "key15": "4Tser4jAAEaAqvMzsh3Ds6iit5yUr62twAmLTFGaSQYGh8vtVcaMsKeTKUVyGJjufSRm7hMTRoZJdo1326HoDspG",
  "key16": "8SijyfcbwiUKmVayzXKg3oDFma9MJdFLjfAo11YYGnmUtUCWkwwjRe6jXXPHYqYtrZdHLP8VAnzb1zKScmbarN5",
  "key17": "yQAJEhc2CZMRxMC6A4SMHggDbr1ZptfcsVwgigugVL2CQ1TfXgtYWnsbVRjfcSfHkGatgPbQVBLM2WWz5bGR4U3",
  "key18": "5SvTf9yoWVNfUDccPuHkViNMNvH7nqoKFj1CxGZ73F3H1S5oHaXBV6jau42XVjVUFXcs9AcYu3BRiU1SWMSimdRy",
  "key19": "669D7nQDygBZpC7ZA5R7T8j5JkUStdLzXKk1jC2nyGorVah8JPUDp5wWxgYRYiAVGYzqUChg6SAKqer8qXPT5dLU",
  "key20": "3gZ7Afy1SgjiRW8X1edtjRPKkS4SVVEFDdNziz5TB9yYrnRX6p7ys7dZLFd4ZnX4Z98zX2pYkSkzXPARMoJT8q5e",
  "key21": "33PKCtuxUHjyGg2xRSzPvo9sNjgjuZjv4QD17WkfFts6wtF9k5TRbEbcchmMXu7uv329YePZsW2y8rZEVHK9wYZr",
  "key22": "5WDDyWGL3tmCAK5rUygtev3qWDMvSzrntjJesWby2wJbg6Vy95ZU7b67PnyZzicMstepkoWoj2XW5xaMtji714bR",
  "key23": "uREr8eMY1zXYzEn8X5BgyHmbWQMTtVFZFpDF3d2F5PcvtGxT6wZiVJJhqoSGQEwsDmqwj3bENhqC7hkmv3YJ3t2",
  "key24": "33cYP3VLp63zcZGuzBCYDnahdhKaH1YuqYbjChT7qZfHF9kj2sKJVzKNKCvxLH5UYEgD23Vbuw65PYkonZe6FVuX",
  "key25": "3zVK4Dq23yzyoVn2mK2N16fLqpReymJ33z8Zoe5iPUEmRC7tgJrvMrsNHtJPRizuRpW7JfFNmoF8Xqon5VP59dCb",
  "key26": "2w9j9Eck8L8z46L7btrCc87F3p8hu74afyynHf4MCH31RU3hMdQUoktHj9p2PyumX8ADMkKHwztye5k5gCFREC9x",
  "key27": "5z9MhRZZD3WUiMKJWrqyKfUa1HTbgFrqqiY9iXx3WnsC9vUdLoESbjL4WFeGoHnFLL5gQA2migGWy4k4BrdBJimL",
  "key28": "2bEJG5eVbxxNXoScZZQRY38gLydofHffFspX2jtfjSwGxtaEaWQVT2eyNRgakHEeeZiC4dFGF8kRKxYwEEcFiCDo",
  "key29": "4vN9d2K11YNe31F9wyapwVzDKegqggDRZNDDiwru2nNooe6dnQHm3W7NXn9ieUG2tLEXvgNsvVbPu3C9DZGX8hJe",
  "key30": "3bSUjjQzDdnuQ14YybEPHueyEcjaTgjnCqF6pH8PvsiTQ8hdskhB7tNU1nc7cRk2pHwBnSc3Ri8pYHWGcdg7Tiy3",
  "key31": "4CQc6jQQ77avqCVgMnGeQx12TD5oT56o5ejXyHGa6RxNnJ2VuSvFJW8M9aSDU5nxFhZEjHXBAJapHByk2amPxpoK",
  "key32": "2iNDPhuLH1CqqUJbctizg3jnaUW9i5zDeEY9NQrT5ekn7qEAqGMZFF6HQjsEoybBnLKvZ6fw5gmg79vvKWCUDotZ",
  "key33": "2d45fBYXehGx2uedzfWUzYhbUdjNDn2ZWJ8WxUUaM4A5vyhYSA8VD3ygW1ABg4yZE7dEmGE3P33JZBQD3Xq3Pchn",
  "key34": "3RF7TuXhyKYn9jhze1KHSJAMUjBk6igAq264xj9vDCoGJuzBCUhsqxvdewn5iNfoJnbbA3jv9W1zhgqjvxbBq6Vx",
  "key35": "jp8ahaRqafjFjwQVnJmhXdC53i7QyHJHHDNSssL6yXaGjuz9RpjnerK9Ycjtf8xRRgAHBFGrZAP3LphmMWie41t",
  "key36": "2RGLTg7x3VP3DrwYoec9ux6S2bqJQ3Y46FkU9qgWKx83XnqjpxrhPg4enwg8y8zaLAJkNMzqniYy37asNdCZMF2L",
  "key37": "4GRzJ4bWmFSJL5zXfZrsCtMWXaHVSCeT4wUcMDwnkPb6P2hBhiyjeVLqit9Msud2bqfjsLWPUitGcSEvX4N1H5xS",
  "key38": "3RgQqvcHEha9uxGn2yQVoRESg5Ez8nwRNMPhDrLwn4K9azWf5vuJNZ98fsSsRbCYsTdue5YYm6AcmyQRXUY9HAsJ",
  "key39": "u544PC5pym1Cedv7ZuDyBwifsRWZRTH9AAGpX9astQnGjY7rZLbLc6NFskLtcYxNmuU5ioNQPmZpaPsFsDZdTKY"
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

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
    "3wBeomX5Bt4VPhceWpSX35WGidRusYVQZ6y8LrVs1RAPirqL9SyWhGt3NXQcRqwbWJUdkjPzjStu5u1tRU7xAi8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZAafzW21dZ66i5ccdbtvGgk5viHsyNQhTbAH8xrsyFFXLjMRiGuJmpbBRtSdvgBUhiW2oB3yS5CDdkiGANwpSk",
  "key1": "64vTfUSwPzrNMjGedSranyD9wHmdSMAEFBXr7girok7peMsodFzVfGqHjtj2DhBjdnYfgHpfzMpuhz6NULQonBrY",
  "key2": "4LU4QxLFeaFAZm4DpJ2KXDdFG4JXNZmKQj2Tef3enkiLxcDZttkApHRFxX8PCbaDi7jQ8geyE7b4H68ap3NXUoEj",
  "key3": "62Gv72KzkJEHrfNzR1Pq3GmQ3UmJUvSgSfadNi8XUcjMfhFeuT95UTto3514TcuH9aHpwYt6PKQHZyEdXxYQ5jJy",
  "key4": "5mH6HpJ396Q1Xor5bh72GD5iQ3RQp6WJswDmKxqj74j8x9NggFTMfhyhMbhDbfrtdAkAfXpQ7RnkAnd5mdsAPXF8",
  "key5": "5hw89Q35P5niBaWQF3uwtUkkCh1QfJwUeLivfZQwVR2BYJciirVNpUf6iT7H5biXQNsZ3bzHLej6XJRToQMVG1Fg",
  "key6": "4MJ52cHqyJqJcY1i4CWykTFqdotqLuWufAb5uE6MzUSHRQy3gDtdC4wN3TapM42jaeS8hM2n7eXL54MZh3Sxv9R6",
  "key7": "2qZFrZZ5TBZYoosxmJfXQ7aPUaxwFXUfwYgSbd1XspPg39eUxzGWkSEV8obApg7uKkQncSZu6rEuLQwgvtdfH8HR",
  "key8": "23a9n9iq1PSFhkUoMrZ1xJDYnUy677rkkHMwgpt55sVjxVa7dc4ebGvoxziMBKxGaYUjaX17HpnrEvca3vQsgA96",
  "key9": "5H32LWe5wVJYt5feDgCCZNP3u3qUkQGm8MxtoQJayNXPAgTEBnxs1LCGKFgwcdpWMWLh5eHJDQv9ccWcpvb2Pzve",
  "key10": "32DpL76yGUSnbXDpQ51VtQvHWMVaR93ki97CBfrw6QiaMYKZ6kVzyv4UtTjwx2gknhvSDtC3eFCMioaBobpDQtg2",
  "key11": "2SQyG5sEibNm4nBUJohHW7HpHsTmXuaDRjtvTKtV9bbWz6jQaYRmSXhnCQ8ANT9c25KkbTdxoMp7AWazaMmLK3Hx",
  "key12": "2cxx8htE8H1HxpvvQ8zJdW3Jn6HKYH3An7au9VCU9HcqmTGNcuaEc2K71bDzeXDT2rT5o7MTqVhwr47cURB4Ckgr",
  "key13": "2ozU2uEbQ3xRJb6bCMbVU2b6aWbpAhmM6rhxuh1ekqQqeymWe11svUwBZmoEpBgUGwTzEraMjPm6MbsLUnhpUyLc",
  "key14": "SwUenTKoJq5uAbQ9t4kXLRGWVjMNLrx5mBbpg4ja9kGPj2aEed6hTpcdARpGEg5JS8QgSLFW24BcoDrNU4pgxZ4",
  "key15": "2HJSPy3AmyJrJ8Z96CKAHrTb7bkYXDvfnweC51kjtsjapitwbMJwKCcrwvMDcie9MpJPTKbEHZrUYGbcMuxGh5CK",
  "key16": "3vmYKp9rPZA6J1iPtWnDR8tWZUo6QvBqPwAZhmMWeBeuKhpoD67ZBk4ZiL96EYnVXcsLJXFBrHy4W7qzrtyvRDz7",
  "key17": "3SBJUFVHg4tPjgcFooyPKVJAspg9af946wFmEnBxPYbswR74jJe4sjmsD3v13CgKfkY6etdYpTvpVhsLqZikZCu4",
  "key18": "5xKzgVvErhDTN38Ebvs63NEo2Dq6WLGhGK5BaLTYrRuVDrM4X8zw3zbU7tQ5vG5riv3zTRzgBbJQSMUtyiGSJ3sk",
  "key19": "QXJ2hFegJcG3g379usC5m8sHeB8eRiL24JHumbspnv3PYp9MnoJb8zqoaGQwFa87umRDserGCQwKmBeATSDy6r9",
  "key20": "5BafJqSyU4jUtjRFq7fJqsx3P2e1mWcDT4pjQ9amgDAQjii84hAa6qvBq6T9WcH2MUFS2YXgXR77s2HK7e6G9F1r",
  "key21": "2fNoABQ7J4BGjpGsFxo4QZSLitqVz5ZZk1Xi6DDLZNPiR3qzUD8brv4Qi3MttzFdVgcGNWohCTLQWH1hJmAxL7gj",
  "key22": "STpCtsFs3XyG8q4b45GxWzsfeXaDfx7xRkG4Uh7r11zg1DBZeFbU6v2gu3Nf95F7zkdS6RhFEKqqo2fmPRBZhrU",
  "key23": "4DQrWZNLVyaXadi1BCAMUEpQvMPWJEJKgAHrF4C9CVdMXtcDBycjp1kjHWmAqcrfNybjSyEUbY8RWHYGSwPrRq1v",
  "key24": "46rakngAPmbpxV7AofRvmmpNPZDoXh2ChZ9PtHr3DkpGMJKsjWQdnWybzti8eLXS7K6pTHVj1gHK5Bd4V1Bz9NVW",
  "key25": "VcoHZYp3osfc6R4qr4k9osLSsbr9h6KkY4cFNMczfgyiymDfvxuaS3jcQmL3NGzZZQzRU1qoBXioMy8JnHX5ZnW",
  "key26": "3HnCj2AB2owuKqhwgVtgVxogMoeQ6mcCLUrjccUfeTxXs94WBbcHTtxfpzCZv2HoXy89f83NgCXtzDRLqu9qrRFv",
  "key27": "AghtYd5XS5DSFsQQWMhDZcygr9rAteueha1q4gihW3geE5v1ocMmeC3rX2T6LnCLcrZevMJtf8jiX6aB7iGgYvS",
  "key28": "3hiSVzPe5DAT3XQk7m16xa2NK3m4CTUNNnJ1j3AjMyHoZfvY4GTVzibx6EsAZDvZB5PXgR8Y43aAgj28pxrGJhuo",
  "key29": "4BXZZyt23iCysn7uyp1TyW4MLDuaYqVDzvW2mkjRejj1eAWYkbA297F9GHYFBdjcAgjBNQLnU4YWZYBBDDxxUSME",
  "key30": "DR4Cjnvv1WdX1KhiQvgGUnKyzHTkDAMQRDYVjJAzMg8wLDquU2SFB2q9WCvFB6LuKU6jYJLiFEBYoNfwQom7Wfx",
  "key31": "22WooQPGRRss1GeuGFmwvFoGQfgHEcg6eNnKe2gQS2FEDaQtBqs7DYkns4VfGShELtFy118e8EUeabW8wmjnVKmb",
  "key32": "51p9Ta2JpekedVCVxfY9thJ3Q4a7i5T39CoXaWHwv9yWQoKv3b8Df8ZdMv3wqfYFTyfvocHVGGmqsnBCgviPypkA",
  "key33": "2GBFZFBBL7cQ7yDUcjZe9nyCbJYMKuYZjzjfdqyS7bCM1NdR18RT5YGrCDHWEqDKf4gFA2Yie9xZVN7up8ZxZVpy",
  "key34": "5PaJqCzeqR2X5BtbcoAj67Eg8SgXU1i6D3x5W4tRithPcqqwZVDuiRAjza37XpxyG5Cn6Skp22zNqizoMfYkg2sm",
  "key35": "4xQ8zwfxau7MwYd1WkX9oAktvQaVHc1XB1fuTFfCEZeR3kunbvMPTbC8C5wdmrC5DJgpF26D4SkeyxD9Qh14yvf5",
  "key36": "3kPYgvjVyjFBtsNH8niY5chk2oKqsCZH5F1RM9rCMaVDaBeLbGd2K7NLrhuxXNS4GwvgZT56CxktCnSw15CURo5d",
  "key37": "4t99HJ3WURpHK982J49ax933tDpwe3ie6DWMPwCP91dWHsZPS6nEhKbMRtC7EiVUfbP5cNbvRNGdd75p515pBDMM",
  "key38": "21aRAbjDjRQQyFKkgoUUkLNZsgGCHrEKrCenQQdQyK5uXN1qKDvZZExx1g8LwfqVF7fAYJMT8dGckFqmBVb7yz3p",
  "key39": "5tjDNTUs6Ptioo5S7XFNtdtRBcAZVqkqdDGkgrpJ5Taue4fCjvcuGMcajM5Y4tjeXroYwmEhi7QHguaWjiKd3uia",
  "key40": "59AhXk6HpFQNMt3hYq7a68hHTyaShV4QMrjZAyatQrqB4LcCxxXNe5HZ294jZGxGAC16TQVx38FVHkwvJYcZULhR"
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

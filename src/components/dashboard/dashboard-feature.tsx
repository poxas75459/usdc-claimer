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
    "3hbD4LeruP92W6716FgpRZeBk4cEXadhANx8gTnkH2Qe8ZNH4n5pToKFtWEgCtubpLAcZ45hTZRgG7GZXGYBQHVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCqqKWZTZsFELotcicRR1KsoJ4xf2tPV3sRyDL1DVPQ7ccoLZdHwTDUZAtqKv14SnC1zgZ8dS4eeh5dKnQSJtbU",
  "key1": "xJwh943UPkzHMZjrbXmL3hzqRoWJUGXpYe8pYaMUjYr39MP1Psk88iWqyz2F4XotFW4vPYDHScyF3Rp9fgKiQcL",
  "key2": "4bvsuvYzNmKEmaP9zy6Z4mFZiq133QFmbuBbeQZvgwWYLPTpfPUu6foK3wxvKj4NLhTNG3k7qXeD1Dq9GDN8WMqx",
  "key3": "24sqvgjrGHK47NLnsN8XE668NVGqZBKLWhCnpaDmmhP32gbUDS6UiuLkxX2SN8NqPLq5V8gLt2ZtNN8mYUWY3SzT",
  "key4": "25fhz2BaERaWRtf2gq98pPnk8mAjXNtgoHwBT4C6jJtsHxxxowXDXNzpPjzA1TBknrvWUbMSU4WL4cvNmkP2PaCv",
  "key5": "4oBiyBFXLFBd8tdxWtFCSSF9GQ8bmdVgtdym6hQL3nS9B9ByjFY8YkyG1AwKtzpbD2tzahbfUPFw51TMLQXrHoTE",
  "key6": "okZFDFb369uJqoJPS1ShX6dCgHdpuJA9n4nWFY1aMA4cN6bJFP9Rmo5o6mnhuJa6YzUqpDaBSCESpuydNQVXhXR",
  "key7": "638GwdAfosfDRjMx2pXx15foC7shsJCnaR9bzEaY7eCNXrRuE2W1vZngqaEkwXWdfe6GmrNjqXdjn7dEPyjkdFhG",
  "key8": "23X2x4dQMRuY7c33L9dMMFceAH8UATxiq68HwPGByVg2CKYDxF2S3wP57g1PNv7yA5AwTuZU5jMVKPArGFPxJbnn",
  "key9": "23Q8zKbwGnGdvTWN1RijBMn76SNvXDxpwEmQZroTiJmKboLjb2cS4C2gEB2HHFVKnnkTv3HYTkcufYgxqmWGh1uN",
  "key10": "4VEdDw2jCboMaJrwUXmKkKScJyhjcHrFFxBEKtWzfw7MJhu5sgsFMfQBQ1P5wVx31QSJfxCJh23xMThqG69hgZMY",
  "key11": "57c9Uvb4wR8VYhVortAuHMEi7zBuqwdUiuJLfPwtPGL4FTSNCpc21GFz3MBrEYtvjVNsXybowNpiPaVdceu3WzZH",
  "key12": "3VA9ty9FYMpRGGJfm7Na1RVnFfi2xSMxxurmMua4GTXMoTRLeUtAqDR3WEk1koaMZFXhLnWsJpxor2ReF6VQ3xo2",
  "key13": "2uxWkhnc9c3qQZ7SRPCnZLdnJ7DScGWyz5YF5VCEX6sgTsS9D6p6xTAgLoGKjFkcJ6YrnpF4kZy2XhEmYx1ecCPq",
  "key14": "5qG81RUC4ZUXUfWZmJH8HJA3BSV28C6nR2MjPkGjYT4SFfLojCkh7e3Uv7XooTR2oK7R2S4vqSaYyCjK9viNevBf",
  "key15": "4RFFzZmYukoBWo24JB9mHYp3uCXQXdtBqv8m7oEstyfoRdhRo61qqnSiuuiouVEQAfTXSumyYVTC4WFHYWeq326Y",
  "key16": "3QoUH5MHLuydmZ5Fr9T9d1pbsFTy4cFMVqMtAt645WtimgEkywStTLneBr21fMghdpa6FTvnY41c8ozuPPbDkoH5",
  "key17": "3dZ9mBBBCRLn1TFFX5brWXm2koV53sMQ8qCnu2Z7JQWZH6Zf2FfbB8bDGRJHZZn4Fu8XcncsCRK1R8buifAwhnYo",
  "key18": "5nkofrjbK8xQSB69g6uu3Kqmau74vfjEcGBHbjHhec5BPDxwRZqRjT5Lf48RGEvu1TPtZeNEib93pfn24Kbhtpbw",
  "key19": "2xvikevjpRxNWZdkuv5CXasDzQp1YbQjohxksxqEW3prDggL5ntfBg9AwJjdxABUstAoW11tLjgNxmhBgGLZmEhn",
  "key20": "51wGJknm9ZQUTXEbpQbSnoNjXLUbu7Pi6CkFcNcPxW7Geb3UESqgyKy9hNMsEovixPB8ULLBEK12VeqLghv9wobx",
  "key21": "x87cakCga4VGwCDYPszNdEXj7SXcEsCJCJ9RcBQMYUpL38og2pasMRZzaRdE8xBgspxfSXtJVBocNsbqzMxv6Ln",
  "key22": "4yvee9rq56aSXH6r8Ar9zVLb4sEvRb6Bn4xRbaMNSyn9VsfX1QS5qo21LWSiCJno2m4oS529QwW9TbnE4CVF1ubG",
  "key23": "4VxbWfN9b9rfg6KvKbigWi1HTtcBWAhvNuxGwEHdhy3S7aGspx4VafpDxKEd5Vt8oxovkGVBygGK597mP7EqEAyv",
  "key24": "58jACjiXTgnQBaB6DbRFS9ZUUGS1dFq3kXNfcCHHiTbDcpcaDgt7h98v93cAiDuxHEWTUYf36PcLzJjfiVccoK4M",
  "key25": "33LcxUXxEGqCFsnk9dn3pBKb5bs297YW88UrrvzEq74DRDhTKqUmxHYKcydqkzxUWkzrMkPrjrvM2G5C1DR8DdKR",
  "key26": "4ESUuGovdjLoLjmCk87UrtfUefi9cgnwAQZi6NPqK8qyBSPRcrvt7xvi2wr9stt5kuSaiJurbSooscBfnQUSPPjk",
  "key27": "BTfqw4kg9eNmB4uNS7sSyFRC6PbQdY4deHzsWS3Sb8ufSjRKpr9r5X7J7sMfhJTbSy89F8kKyJPL9KiWyYVsQdo",
  "key28": "3KPTxG8BcwzLcQdfp8eAA29xm3xj5HDY9CFhkhVXFUEgPCoNDKcTso5KiZRr8NiqYkXNhmEQ3omkg13LHYXg5Q5F",
  "key29": "3aFqyu2jv3HhwGJWHAaVFyfJa7iqM8Mj3t7phpYhtwLVRLz3ruXjGcva2X3Vf4zUXzmsRsSvJcK7bLWu2AeF7zay",
  "key30": "3AgZ6Ta9mWs1Z9BaZ6dXEN6SFg73JBRwytnnLmNP8L6Gu9SeQmtSQsKcYzmwBskc4LXoR2fXN5QGK1MBVWnjuU6Z",
  "key31": "5j5LqFDZsYE1HiRGR3LbkdteHGRuphpQPQWC2BDVwRdK5F53AjEWqDZGjcvEeE1F79WxGPAvHa2TEShWtVwy45au",
  "key32": "2aeynHoHbwDRvbuoUAdmizuq3BH2YsPrZ5zRb4WmqvoaRfG8oktxCrD7bduXRonty7CB9NPErtAY7tWv6TTircFS",
  "key33": "2dZxqsK74i3zVgUzUP4Laxu7VZf9hwWwXARHnNoZHmLRw2aGmcr6npjbTaAnLHvTussmUGD43cTWz6MrUoTzCJHE",
  "key34": "4pG24k1ieViUPR3xWGbnvHMFwKR54oocCYPKfGRGGPzeuLVB5rgHsBroerZTDjyBZoCg5AqLWtU57N6DGgeE1X5X",
  "key35": "3iHibt61Awo9wBNuQ1aLRKS6TxxDTLRKgnqBh6KK1XotvtNxaSpjKLi8fLyrY7wus7WPqy6ahKTkSdWFr7Ksoeiv",
  "key36": "2bPqSSrviM95S1YvJVzWLe2x1BMbdvxygyEGhmRVwxKdEsgT3bTGsc7RhGcsk6oNcVSPXxUScHJTXxzVhUKcvj6K",
  "key37": "2aRXh8YYtLEXAsxQcr8wBCzdebAfH8K6yRaoTX7zHorapXh8Wyv6jjnkXthi7eX7qDiMiWpgEtXf73iS5kNK6Muv",
  "key38": "45kEjMyQcuMAhqiKRsm1jpMujHXgzh2irVnox9zcfCKoTjmPGn26kudiW1XGdbFASn7P9wzrpNsYkhKJwS6Y5cKp",
  "key39": "61tT8JCyScsZysZz22vmUuaCS8F4oUxr4UdBezNjiQX2LtauuHeizCHZhTW2kTZLEk4VKiSuH51GZqyKd782MG5H",
  "key40": "e6XJxXXhpmc9BgovoY3DSHxv2onEEVYNVYTk7yjfgmJNiF5FnSUVWcoJcUhrWF8WG7mcvCbHzawBDEgeY4nFpFo",
  "key41": "4mrHBuejZEmZMm2v615eShZm7iEjbTZT3uiFCkzsSZvcC1HK6U7Vn1eE9j2Sm3AxenpQnqcFa1F4TrtHbfABM2u7",
  "key42": "2grwMWJoAGvAvidak1qCaHZw3FMmwjMNAuAAq84ax1EczixWJaWXFXvH5wKwReJ7qLkR8MPPXA1Z3pXu4A11Yhm4",
  "key43": "4EjnGKXdJfwtEhvv1q9wxxGL9cFWGdpPZMk3LWRmiRo73MrrguarB3rWbUVnZtMMjeH3GPsmqg5cfDtYkYYhnmHU",
  "key44": "5W26UpdMCxKkU2qbcp5Mpyat5TXqGRLZpoX6DqczpLxUbeQkqAX5u2nWUoriSKyvRXUFoLsjbz9wVdYmtPbqX1sq",
  "key45": "2UmmvFn7mgzjZK3hw21iu6Sue8yuZymdANceWTSZzmyRikHb5YRvJ6MyQonNyZuwRnUJFT1UKqQBn5c3AWxvSinN",
  "key46": "29yiEYF1RnmdwBWVUKaU23x3WCurnKCfgz49bqarntkR5mFhqKyrEC2z8d8WjjjYrZ8DboSkgqEBtYrNM63P1wJE",
  "key47": "3psat3QH5ZTVstUcYKcjJyCA3Qtzn3fVJc3TAbdVtZk5vZGs8w9G99EFSmNaW6VZvcUnc8bY3eMrVrBLQbgpaKcn",
  "key48": "2QTGmDSh67hPh3jVXubcZSZnpeKU9haWQVnAPAVC5fb2zeBcUEkKWmMR49HoFMRzuto7qi4QvTepBVK3eHLP6FuL"
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

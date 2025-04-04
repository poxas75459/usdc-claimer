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
    "4ABwjFvTUAAeh72AqJLnKc8FqWx1M4tiS5RCs44LZ6e73mTuTDC8bMSXbDqMm2msin7iVLw7ffqyL6gMmQWmAvaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ett4fKp9UDy48twnBdYQ5JXtzCb1bjoH6Pmm9ka1pdtek8eVaVgujsNAugjw9inNd2ZLSbccUByjdsn9hU2BZL",
  "key1": "4PGgKbuHWdfg3hgr5tMKGfezFEZwtskdWRDuSRCSBmzyuJsnn9tEzLQprU4QohtgpsUzr2rNHEESkbKd9Bs7VHtn",
  "key2": "5GN7woqGrznNYevLse2TZri2EdYsQ1XQPwJSFPtcmS7zAVpZQdy1MUC8KFcFz1Sno1YCe2REDX5REUT5od49h8cL",
  "key3": "5AWL3FEVN9YYJ3mZammDUyXp7B6Aj6Z1H4YiR79UrMGzcdDs6mKrrPan7NnfqYFpUAfCQLvVBncaXLGBKy9eRqJ5",
  "key4": "jHcHjFb15HxyetYXsLijxPttQ6iz7ndG3gGehdJyySWzZpDGLCCb5Shx78584TF1acrm5dHBZCSuBhtgJdaxAsa",
  "key5": "Qpa63nsMg1wbR1zymH2jqs3VRAhz9Js7e4AFq8J1JmogcLwekiDQnQLVast8xiPyoAt7UxMGcUh8h2LJVrcMxVY",
  "key6": "t9R5u1fzPynKX2N3QQ4Uuza8VKL9Sx6KpTLfGHKJquvWLvEMvgEi7DHxXXAvRrNBGHTNuWKJ88MaiK7PNGPdNEJ",
  "key7": "2qiVyBugJxBKVSFc1tyeQCT9C5Y69DJtQUyiu3QTDRpFtGDoDygjwBEHs5C4GnPs74pFYUjodizSbfUFyugUhohR",
  "key8": "4nTNfQd5vEoeyeA73nm5iipLDjfdcs7EazVRwFMcYJme8BZ5L6F7zwbzwMJ4BNCPc49ufq1BrUbH88uEQRpwEodY",
  "key9": "5Hw3UWmPk5iqVHpJLFim9JJPZCwzkTq45afa2CaQSWkR4F5x3N3FP8i3hqzXduem7VGHhTowV3NgjfzComXdX4pN",
  "key10": "HqR9gk1YyXTug5j78oJGohzAP81mPeggT3UKQcYwiuwH6y4Ms7aaGuEo9VmWnrU5EXULtLyDpmmEWVPqR4YZ1Dn",
  "key11": "3wdXAHSHVm6iJfjeESPwHVN3nE54eDMMR5kfrqkr3Bg2G6En9gDetkkp1Sw1DCeUyG7cQ3fzhqYvAyoBTYHwiCzg",
  "key12": "3Let6WGZk3es9H7vhTkyLxtS8cgDcUGziD81XWghwdtwP4ZzC3oCHK9oZrQRWPDy8vUzPDf9WxajSmAdcBuznXUH",
  "key13": "2GU71iUftzxpiDBeHtfxnb43T2XcTsQ2f3ARvqxF4rskvR4VhLbS9XTPxLwoHF8NdVnck1BnMrjwP4kHMYs2jZqD",
  "key14": "5M2d4Wp4isUuJks3LXQFY35SDo5FyyJTBRhU4ZiCxXqpAP92iS9jChDQjCJE1QDoLjza3wGG1yQRHC5bUQWZWxM2",
  "key15": "4gvtGpAbUFDgnfUv6eCVZ2tAKyox5CJBKub744ku88LjnUKv5fXycDkrFvYhwEaXGGy8m1wvHsBg4BiL5dD6YBus",
  "key16": "3X6zu5LUasrNUjcJo4phQ2mVKzEFWE2X8Gdo8JC9W5Jo8zgD7UGrq6St4RwGsMpFp5QGa6pymwANkEtuT1y8A3C4",
  "key17": "rmY3V5KzaRxvJ1mEWqp3Pu4sV4SZjgjM7Wk4ZoTfz1J1BuEzarh6CWbe4zozs9dMWSsyMy4eApqnsVpGBitnznX",
  "key18": "4ng6YK8tCn8Ce6dndaH8wUNRe1CGViCs9RpQG8sjrQ2XE4t8VUiZJcq3HSK2YuaHEVT4Hw9K1Gg4sYGxsRYSLw8F",
  "key19": "4AHmfuzzvGwvo8LhoaYspHKHzndhYJzUJoNx2x253hDe9VxZsHF36WiiJRCp84GnB1yTYMTBRWJ1jkJAnGjKhXMd",
  "key20": "5Rva3Zme33QRoGsbok6vbmcCFwMa8eesxKcYtXcc5nYzTDHz8F4sAUhtaKb5qoLcgRFNnmvcSVHL6k6cCffeBxXj",
  "key21": "5MUBhd4cJ9MjpGGBRLoHm9ZbyqC99PNeS2pj4uTuJBTwwX7d18v3utBF2zyfkp3ehKiYZNyptNxwGvMnHAtm57om",
  "key22": "6TeWrzgp5aJHP3brCQB9ZU7PP1Liw2NdD3wjyEvEHiDqj76eZ4d6azy8Rh76Bo7vftZ2BdBQxqPdm4SdSP2fEVm",
  "key23": "5KQosVRjzPy3fyh8NpsD5GoiNoSj285RmUrAF8ywtAybaJa1a9ioFoLDnBqXJrT1L1DjYHrzc84aAuTnm3wwCoBc",
  "key24": "TALiSpZ7yjacBxDAiKYWoeXbRHMvd9rkmx6c2kiC68KV5xU5zeenCFZAe6Baeu43CbPF6uMVJxhs41x5nQkpsLe",
  "key25": "5a37mjFJPJ9mKtXsdsrZY5S4evnCQ5R1kmcEbt6pQp4dQ2J6hzyJTkGPEzGLYkF5rNDkPtRJoY19Mwoi99aY2bCr",
  "key26": "4JWXaQ3Lhc1kfFBnupBpXQNBoXrgfdU5RmGvTZ3cwMzrPATjstHp5GFSRfdn9F1fcMURH3RoPhPeBSbXt25LVNCJ",
  "key27": "4LJYgpbdLARbqrmDh6brBfcL9bUyCDtHxkRMXCVBXmpFD74Jg7w1v8iyzNLwMd8L8fr4hycs94oCQFiS6WReDR1u",
  "key28": "3gAyZDanUYW3zGhRki9FeswXMvVUiHC9mp8dU5UZ7Y2gZVV184ooK6nkPEbpwhLNqua8zPvCZqKdf71obnbP35HJ",
  "key29": "SZNUGJh46fdC7pyXBkD3ZohH7DuEFKmwqmujcKza5LZMyj5L6W5ppxFsHsMWPRMdcecpPFsSbcQvYRFtLpoMtaZ",
  "key30": "2HtHKotGj1eZiiUFVqW5ngpRQdJM3JLvcEnrA8JZGAuiSVbNijuD61YBRuLW7qJd5xLpiKAp9dkKh4t8swVBBrGP",
  "key31": "5QVoxDsk11zH9op8s3CBtgqx5XBwjbxNEAQWtiN5D5o5igz4qWLstSkD1TponxJxWbbBg2w9QS4KfxvneNsX8xX4",
  "key32": "4jW6u2GKrgQ4coEoSCbKZqKVYJGFtD2sAiRBZTKqKQYxSMmPECn5734GKmsm9iXuACj7Jjwm4mMZHAFJ5Q554aZP",
  "key33": "4LKicGo74u2D9Ex3A52za4eREH4Y8SWGKCkTkpStxb1vnSnZ6JuRKWEEtGZrpQvyrH69dDfyAehiSJaZAtTohpF7",
  "key34": "4MUrE21JjYMnf2FxdBDiK31DaqhQCea2wbVfwQMMFWCogkGLWQLvYkpWAws4eYcQrT6FXLtiMj4gkRg9u5Hm8xy4",
  "key35": "5DoP8DbZm393cvVrwQJTZ8585X2awd4yN2KRXdtnQgQVtszUgw77PDoEoR1oGAVWrCtJPhKEcdiivJZt46q3hixK",
  "key36": "5S6HgfskjkcwJqu1us9iTV268XUzmuSiqxdvcM82Xji8iB7GFjX1KFDcu2vQW1Qip3FszvhkfJz9avSHMPCPDBB8",
  "key37": "5QmbrUM7YZazw1G3xAenoef8rh98t5sbK4J7Bm4P5i5dv61QfHvquGnvbH78dGEy49Nttg1vqNNe3CWFWgRvEZ7y",
  "key38": "5hq6NJRRadZaY8jYK1H3x1oFVTsGJZdcwgmP7Rg1MEav9uqnTUGUuWvkDA4oZzdVnbGrv8DaUCzDBfVpjcPbkWN",
  "key39": "2CGXuKmgYMrySaRsJVsAU7GTbqae7y3cewNivseG3toZPVVZJa1c5uZzyT9oXJn1pgDhnggocZ1UewZqsGpsB5iF",
  "key40": "2XLVGgzG1AGTLGYkXk1FNVWDcGbqtLhV1Ds7YCkeegZsLgNQsuL6onbfb7j9VsgKQkoJLC72VFz8ir4PcAZ8Cfoj",
  "key41": "4vLw5mX67oqHajitLz2bAXuTXbuVenwQi87yMoMitjdXUb7nYtZbzwaPSvE2Ry1MfvfQdDYDzQ1UT6HoqFNYsJo6"
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

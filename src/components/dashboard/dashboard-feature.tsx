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
    "4unHqtVb3v3VRmLA3Bbac36pFT9p6BatDfHgRdKmMJormxCo681SLc3zyg1yQ3P1Jtdv2dKi9VCph7yiY4ioKsgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64pi4fjS9s4USJ5zHidfsTcQqXR3xWM6oJEa3DRfrnLAP4MLdYM8UHMvGjWDt9tyeWXsMzbsVkz3pNi1hJMp9kg8",
  "key1": "5bix2Z2yYc656eBaGCMT9qCwKci3JKbPq1hpmbXy1zM16xRe4T14nMrNGWjmc4avb4sytCZkD43YDZ7LByNatLgn",
  "key2": "66rxyWMQWhtB5m3Qh9KaETubgqFrw5iJY797dgVb3yPvVp7JsAGbH9UhmMAggeuU6CYyMaJLUddMajYnPyye7tYv",
  "key3": "5aGLorsegv6SPabwRAoUXrjzK6JrGdCZGqbv4SqYhTzQP4Zu2Q8UKodUTW8jEckYAvf3SEDTYVLYDq5QsKMFJETk",
  "key4": "3E4JgoUYe9zKyMfN25VB489tYKC6i6BRN8eVowgMY5o7EpUmcmi2Fd4SdYsDqkWL46JvM5Zr6UCa8trYYvx215Wn",
  "key5": "24SPPvK45sxLWMzqtCYRkue3xQSCuCtVwQ81ZM2P2hdueS54CVQy1268NHAZZXWv3p1zssr65c4ibBhXDvfjQRxC",
  "key6": "sJKQhKF25BFhFEnsWCjVhtZUcSH4whfbozZYrTrFcqFpiQckNeyXBGSRA86ED9UUATxtYykf7xzVWVs6ALzwcGu",
  "key7": "2ju5vM79KGgKzs9StMsf12MMBKBwjJfwqLyx4dHBqNPuqUSp1UREQj6zfeM2KW7eWHzqgejusrat7SWQGdsoRAqb",
  "key8": "45JD1ZSrCX3t1qSQ2G3cH5TSLTogXSc8cgKymiZQrLPS9mTY32SY6tbxNzGQUQHPZcCKjbHAViqqvZdKScF9CVzQ",
  "key9": "4gHi54Nz7b4rYqY3UuuyezQZjspoETtp3TD58AgzkxQThLWcbH76mZFrZ9yf6WXchXfsRDEzkPwZs7KeB39P1spZ",
  "key10": "2pTN6voBJQMbToukNhsitXn6ogCRAVd1DVxBMNZPMGct73F2t521b2T7JLsKMUkT9pM5xFXbMYLxy8dPrGPTG9wb",
  "key11": "uNgE5WfJUYHcRkS2LZSz6zh69FpuV4UGT8TAkFLz8zLMoFAmZ57YHR67ps18G6AXCD3WUK8zdrJt6ncgo4nCYKj",
  "key12": "oZsupdP37ZmceJUAiAfQSgA1PpnTHrVHKxdDWEMrx7rMHhtoQXraWwjf8urhX47MoVw6VaXr3Agz6ag4nWmcgTh",
  "key13": "4STgHHj8MaNFqbHcYhJbs6YDnWaHYSLCoiCeXE7H2o1wyc5ZDxNFrTe8YCGEMrtXLfiK19Wdj2pRzQs9krJPkYmg",
  "key14": "3WWnuBSzWukcB41jeMTqwe1AM8JYtGUeFAe7a6zmZxdkZtEsULNBGiisuVxD1A2EggMADma2hXG4TUS4JPQ7dSRt",
  "key15": "2djQvstHB3LJdXP421q467CLSdCrtGfkJRq3RoPSFFjDCRqajmZo7ngognZSaLXEJqvmUU4pbJKCdZFZDPpVd84i",
  "key16": "3gAES51shpwkXbbeztMQi2i7qYhvSmqRrpgPVgrnMZ9d6aEwEPDcqfPnHgyvAEnPutLm27VDRPuao8sDk7DC8SMe",
  "key17": "qnNDnBFTa1aY4NvV296SyNF8iWqL9VLSkdGMwRhAo7qvjmAPN1c7dkDzCAJ77JBSpPq9TSLXTGymkGMM3xZNWpz",
  "key18": "3v1FocPTmQv8mBAB1d8Lm8mf81A1kjeFQtLWqA3hnUbEyRbCKxr3137C87QyWZgPdMfLZNtmcigu749G9MsWLY9J",
  "key19": "58m2gXqF2BxGVHrCQiApVwc3EbYsAFgA5humFGzsEN5m3u1Jeh7jXZa4a52x9NLUsaG1s6tQdq1HkuDv2jUPuoqq",
  "key20": "VLT5vix6HjLubC8P4SbEofwybu1qmXG3zmTbuj1ej3uoPTiQrw2gaRaDpnKWJNtByaYUN87UBXkHMaTyzaWRHGf",
  "key21": "N2FP9AdB68pr9wXhPf2ZY4TYXEJYjxUjhZzcMwLHS8SMEGn1CCsvAJnPqnTBZvtb1cJEkorFqX4deXyyFhhHYXG",
  "key22": "3sDD99bijpfdAnmvTEWJXsaG4onyFA3hmmsYLS2pUSrt2HGEmvAZ3fnor2ZFboQ2E6szDs5e85UehLeyMEUAasf2",
  "key23": "4qear3D1qJZZg3xbWkSJ6euuYhZbBnA39Vmh9RBScKavujBwBzaoRjGaRTteTUGZszUvrfVcuJM51mNjChmFKwWe",
  "key24": "7oQvD9YeXsBtCzYnxVLGAHnWF8rrankmbGFykp198Xzj41LERWtaLhGKaKE3GFe6KJCg3NnHRUD4vR1CTrYFtfm",
  "key25": "Q9F2piGp6jpvvbhBZsLR8vwJmG1JQGdEuquKcAP3PbiQJBsZxCM9BQU8xJScRZVVTJXSgAn4zEwzCHieYGBkxEE",
  "key26": "4XxhQMXmdBpBmdm5f2WLwWiVTUMEdyuBsHr1TkcqCA9BVk5r8iqHSbgqDHZDU56TSL2ncYL367t9gmRtwUoh8ny4",
  "key27": "3GLBPTj9UgLmNTt5qCKPswXXTJVEvHjbuKL1YWTCKr6gjQXsRsWR2Sy7GdXnp8NGRMbchNn1PueNfHnDogF4K7G4",
  "key28": "4uUbe77VsRqm4rFKvPyuJv32TqZ17FUwPCZL9vev57D718XY6ZMABDeyom1yUinbiXSpHsVvneGuFKxnKSR94M1J",
  "key29": "47Bos1K48dcnSbGkZ82dQJhEo56hCLULsnTmjGQwJrA2HT7Fe4mkWQHHWw3dDAypQPquEvACmVHPRfcAB7emDTi2",
  "key30": "4wEaBKecLKJSZGcfSDNSFuUmFcbWnxehnHqCsPJhFVZW9JN5HWyXGh5FUcYjsD9oqLVF1AQYPAwiUb69drz7ZbCZ",
  "key31": "5D9AvtouEVzWKkj6NF2hZcicQWuAUC2VA29rAczC7YcGJBfrsEY7khQqshdHzUmdRrZRnFCfptEpy7bNQe1iUg4f",
  "key32": "3Dstwh88K1jE9PEFsfusTERn73PiMzdYyUTcw9t3kBmutJj1pTxHTXkPykBTaeFHgPgKpACgWG2duU9f5P5QbRMk",
  "key33": "o7zvbEuC5dmRZZvYfJPxEciUoxkvCk6kK6o87dHoZBQe1izLhPiyXyfRkyyKo6iTJ9sDLDSVgRi2ijaGshpYm3K",
  "key34": "5aLFsAEEgSkcHLw71cChoztQKaPtKfPwBEYJF3M9zTW4S4TsCkgbmMTHfSwZ5JNRpjs6629h1wFwcJKJEESSwXSu",
  "key35": "4gRvX4FHmL3c5vyLpCzTUzfBQ7hB325KXJt4cydKFfkr8zfnqdtQArggRwGg5rkNPr5Q7SSEnpvheumc1PxHrt6Q",
  "key36": "58giBZMEQb78rqyXpcizNvsYe2q695RuWEVBde79gBGfVxfhamfD4A2vHuAkXrxmfupmnTvbH12XEapm7tMGekB6",
  "key37": "3tGXEQpSeQco2uBS5yd7LhvwKryLWbiArttG7ovZsLTLJBgyjonF154QdxTHaWWYpxNagndcb1HkLJEq6v2tgYkF",
  "key38": "3qiEXJxonWPiQCLv57aFk8zSs237kmY84LyecFSHidt4KgYmQq5Cqheoz7cQHWHgNyhjp8QG93tYnPeCR3Lczpgs",
  "key39": "48eogYBDXwsWYGCKEcSAiATiVfCgmHPm2WTXTsJAz9LMDnPngMUWDMY3WbsJwufHsikb4322prZ1B2x4g2WYEA3V",
  "key40": "41yLmcQUcGFW6spRdEwg2XSmkqv4ktQmUJ2DzkS4gzDwmtSZWxVqoSqmDz8T1QpHUUSDWQjiA4KfufuKsR3G14VF",
  "key41": "5MDQAH35LSiW1dVuTp6rsAgU5S8eYmrvUZxDSxNzZjH8CBTNJzrQHcUfMc37EGCvxK64Htr7q3TibuAyG2Wwxxz7",
  "key42": "5L4wnmTHDuyrYCXVaPTebJ7QUXGNqhCiH7ToDiytb4JSRnzf8t9HXujdvXFuFYfqGzeteocS2xVDnhgiL5stw45y",
  "key43": "5dLuG3ooJ13S6Z7Wb9fnQzT3NU8uVB1tJdErW4TYspG66PhMPwp2WNh8rPFWhaTGKN3YQBkn8s5Kogpwh6uUFQrb",
  "key44": "2s2pyou9RbLUk261pb1WVNM5jPJ8vQ86fFKsDBwSrBaDd2hpr4Qfe4JnC6C9cXfmPCWwxhkgEoTWRhptjpXfTioU"
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

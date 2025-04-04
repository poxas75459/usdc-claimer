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
    "2qDQAya5nAiDZQ1LKW6H6gyijP4PV3UqLeTVde1xKWxNJm2uLZ7WYfuqrCAPrFNVDrRkfxRnCek4psmpGWshEchU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R6BXv1xNUzYMsPwTdGYioepXL9iDDafFqvathLJC624LK4YaPvJbUBKPWP5HrFu9i5m7FGt2NGFioG9YCqWBmXq",
  "key1": "5x3JEngbXUo44ZS84HStKXiRnmixbspwvHbNEBt6HREMrS5UooUEaoUGLNq7LzofvR2gMqnm2kBTtFfVq8DbRmJP",
  "key2": "3mu8Fsr7Hm3BHCezr5o3esHrZPzuBQ5rffPy1bmFZfvEGwn3zamvUpzAVg7GQGQKQbqnMjAPCkRMQjEK752x6Y8R",
  "key3": "2vfyJsYwTQ94sm7YARJWdiUufAetxadtQsbB5RzqkMNXEfYx5NgvCSPpZjfWmEsJ4Q1CthgpHpxGbtGoGv1iETKE",
  "key4": "2go43ewxWbJGXsd5re6J7dP9yhfQXHjGyy8xnwHFg2u5dedSpr4i82MzeTpnxDnk4yiJFfHmRoqaP3Tctbbo9on2",
  "key5": "67iYnvCLLMoqTgCvgDQaGMVuzCeAqf8dAcdA8Np9fXSxmT9SvQ9s61HhU72noD9tPsBy3MSou4iVcEwuE5eMrEsF",
  "key6": "3c51ZehqvxUQ1b3ZMv3tktxAxroxxcwWZbyNBcjTAduwNSYjHwWZWNAPRoa9HSEhct5cL8X21n1QRG1KCKjVPsE",
  "key7": "3epSyCU1XJq9y6swf8ADeVuQUVLFdg4FVpnX2TkgTGGWagPGYsu2wASYXFwz3LEx5PYGgbqkPSAMVtovViNh5DJu",
  "key8": "NEGrN7BwznCPg7fNcqtEgrfCLxA8gRjM4g5Tgtvs6uRw8qmSLpU3fk2LkbDVYdozkhBhLfTCDgkzXvgzVy2QvNZ",
  "key9": "3ph7gfNH3mMCG2NrndDsChShaNhd9mBZtWnvjBFnXBpKitWNfYjGpJ944QPJV2EvDUtk3beJqNszmg3aCPNH3Tgt",
  "key10": "j6urecsVSuzaKGtYkWJWwt4dTy85CFdiJh2KyhBHSofsS4iwiu9Hr77KVvXj1F1x1jaqw4NbMf8kATpKnHFwvfH",
  "key11": "3uLFeZM9oPLaGKVPS2FLQsxDoEwB95niYEtVDwidFRFzEh7eaYVCaXoNd3Ax14AaxXJfTuM59BZ4cPb6YD88ud2q",
  "key12": "38GiL4kt9qwGWbvyVxJKRPMiAQCpYS7QRvY2qu1AuNcaUpv7eCnpoGjeZcTQhmjSmwadKei5oqMNFW1RgsbcZ8NQ",
  "key13": "5VPoCMyq6J9Y7dSjRkptLQ51q4DaNMkMfEuW6oJTPZkKaFz6bQ8tphfjfmUpdjSBpNg729YF2ZoCekHKB3u5M8WQ",
  "key14": "hj4ZhNKszUxRZDLGsHGN9zfQEYqEni54sLZ1JdNQyNtMMjGQAXVLeJoambVHqzwSHF1TGWGJzYpM5mKZgqigrzq",
  "key15": "3EGNB4ttBiFCDLSd7qUMp1txhX6BpVBwGmBzgySvbnqUAxtASWkwZHcRn51qEDh2hjaPNMxMYVprqpVFxkWuYz5q",
  "key16": "mNY8fbAYHvRm9dzzPHkJZi7BGP87ATnhm55xEKP9VpoZ5ELPwoqkY1v7ofaBbMVqsuxgwGYzCEezeLWKSUMQft8",
  "key17": "336PRya1BW9rCvUWmv5RnDhPLQYLqeiaVhj78LcMr9Q85Hzd3pSF9GfoiHWRMS7SxQv6Ev356h5mi4vhYfadgeMc",
  "key18": "3TtdrKG5RG2XsjN4cT3S4Xpe6u5QxjgSsKvm6C2bzNmXCLh4kCtqmDaYfniLmat2FyMWXTvqkSo3496WrCHrFYnd",
  "key19": "4sBJitXmCdQacyGEZo8hHmTU27AgC5n5AXkaXsfcnf4dGA6ieSeCykek6RhQ1ocH52xqQjLJ6HqnAoQGTB1gX8su",
  "key20": "5tE7px7ipqa1qSfdNrM7BXtpBwf2NG4QHA8cc6kRqy7vFhQxAtRZXNZUV2x2skyeea9mLJYem8mqJe2f9rZJpdK1",
  "key21": "4RftaffYva7hYF2bRdQEFmgfUEiYisw1fiUF4UfzJF5nKZBbc5YjgCuC9ArT2FpHtQ2b61GjmPVLr8GrYXdxmf4D",
  "key22": "QNm29Yt5jcySRs1wK58GN4FJfSu5zB4KoG1PkDtvRuMtwwnqk19PWRCdztAcBjsKgsDtc8kGX1nrwg9Ybu8p3Kn",
  "key23": "2QFGju5YEix3mwdJiinGrMSj2H1s8koaxc6domjbQPJ83gByXQjBaM5N3Rc6rVYFKw23GN1a5ZTnKPYfYdD2zTei",
  "key24": "oVQs21VpRK4dRwQeeC8JWjEs14eU9rbgN3nFNuFTmxejY7ijLzLfGGPJpr2Z4o2aJAzYD4CA6QJ3FPm54ygSAry",
  "key25": "5RytYiYCK7ohwHcB7KxU1v8CbhqKqvmmLTNUAdWr7hMJ9YqbumMqd3FV8zvar25HBRxgiP7WTRDi7twmurzSAd1r",
  "key26": "3RyZ8Mb74PPizEVdKKc1GrTx9c4pKq2EWPyr3diDgCpSxY6J71ApL2DTUFvQebuCPwqv8epre5taX6jYeDsSoNb5",
  "key27": "2RU42JYCJ5cPMtSrRgtcibxfheByaCXcyUNKei4xJfyo3mg4tRMYfTsM7VWmdoedeyf2NNiExWZyPUHA5mUK87tJ",
  "key28": "P3XHHfDJmESPmXQtNmaQWVyxqXghQYQysU5snKLV4DB9zNyNDJiuacfxeDEh3TYmwNXcdoLs9kZzAo9wKcu5muB",
  "key29": "4rZrUBA2bCCi3SG5Cy9uc4Bgm8DFk987ZBSoKDeb9gEZ7cQs3E1r7G7G7J3Be9j1ZfwpcouKcySMyLnMtxtUGTJH",
  "key30": "33cDL4R2hsWDcmx8kJrnc5JbTHDThQyEfxj4HHqPV6dUiSLTj1gcU5MXdQggkzeTy2Fc2v4GsDZk9mFrkjnje6W6",
  "key31": "62GRQrb2dCCiNwQQdoZvwo4dg4Mgan1SRYqWaqzVer9zcY3yGJ4Aio3kFgvonzo3Vjw4Rw9GRCySik4bjp652vVd",
  "key32": "4vDAcY37P2jxToXZHfvgbYBSrFoxkfrkRHbE3pFYA7FPRF5vF9Rono7NG5TmN8SsubZBo8NjE9Uwnh4ma4X6nbz3",
  "key33": "4pknGwRTvuhkA7p3BZJSyjZSZhonB2WNmhREwCAXPkwN8t21yxD4Y9vT6qh8o2t5w6gBGx78vTvJWpv7UkQ5xPQp",
  "key34": "5EGmNCRgkhytQsBRZ8MZMwH8HzAWop5XJAMrc7EMJUG1PBbhdRHx2Nqt1KNoWtaWzwaL6UfFgv3bnGXEhVgPL76z",
  "key35": "48eNvyt59Cvfd4VPpQyu915Wk7HKbrMZAiKqKstcG18k3sFfPeSRoMKxhQMdbc8baYjBUnWXfSZJgUeHvS2GRRjh",
  "key36": "63kwU7Rz6uQPJShGkHedqLuxHm4GBAbnTZAuMASGQdv1GMaX1q5BU9MnSrg7K1FF6Xag4YG8gVVGcVKdZZt72jQY",
  "key37": "3X4ax391KufHSW4unrfPUscf6xDj8jGGVuMf32JTJ7653Nb82xNhnapvWdzBrjqdP6D6RdW52m8TZxuvx5e85TKX",
  "key38": "4rd8Y4JFNyQyitLvJNXhiJbtELJ84xfzfezGBBdj38dVDkYHKmafHmjXxzzdyhcaPmPypJmZNku4odpwkMKwaJ2t",
  "key39": "4YvUZVw3TFWbVWhU1zqL8AWvXmBJrPPzwZbKDs8hUrLsUU4d3rdEUABuf8cutNttrn44hRiG2HJQAG5yziaZ7d2H",
  "key40": "47AtZ98BA2jFcrmMa3PLDDQYd5Fc66ezBWZNeVGWoE4doHnxg6x1KLmeJWT4TZZJzDFG6bP6UwfrTKMzcN1cau9f",
  "key41": "5TZvd77ZzvnbBx3ZSzmg1GwooQMBkxV6hTwaxgvDP1WMgyPLepsoGjzYxEVJCL9kPE3dbUSZp1N9fPP1LrPpaJio",
  "key42": "4TDHv8N6vFHMW4Xw7aLN7CpSKckswFfGiULduShw8HKHcmvbRpRyJ6oT9tE4yp1dNnURRfPMTYF4qha7s3FBQwgu"
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

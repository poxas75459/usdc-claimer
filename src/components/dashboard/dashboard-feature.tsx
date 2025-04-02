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
    "5wYfigdLXr5MKXnqqzCTaHsVpMLVuKTpToCWZPpkxDkGitbPwqMfeoMH6K5zYZ64xfRwgEyriaZK6fXWSPfb5jTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCUwQif5eJ7AY3JMUXePK1BiEp8MrbnPbtv5LdMidoxBJNq3tJKZT3Bin6kLvpud6uXipkTMpUSh4tYaiYjME17",
  "key1": "4pFUGugsKiDjK1djUiVBbdxBhVM5WLcGfwJjYUgiYUBENfpUetMjZpHtV7yHFCEVnPbFbknMinwqnKJsVo5HqDf2",
  "key2": "5mmeu91y2jCxyCFWwU5NZWBUZ6WtKdiN9zY9oArK1QfZfTUyt64SXpsGmyV8fCEgy31jYfufbe1mo18xC8ACep9i",
  "key3": "1UG5PcPiXiHaRyNb3WtchLYphJqLgSeoC5G7tsDzEgHYirueVExEzJhHxfujneqGS9jszFmqEVoXCwoHkeErtnS",
  "key4": "2fjJmic5RVtq6wtJ6Y7sNxUEy6BJXz7SU41DDUbf6xPa2XkEfKtZqzKynLU6dyHNQ2EZS9mwz4SypjATfY58k6iS",
  "key5": "LnRhauBmoQaJrn6GAeWTYdHvMQp4o6ZSKfChDYWHi99aZwjJw7ZmEvSzeTTjUdzVt8Lv4hBefK9t4d769euHvvN",
  "key6": "2oSBmYu95fHt85wukPutqCDCyx84yqawrNJm28xDTg24uGuMG4sZpUYjAYPtr4QT1aN6KTmf7Wx5gQC5jdMRERv9",
  "key7": "EogPzDq8zZ4rT98BQ2E8ztmfyDQqrW5oXAVP4vZisHs5U8eYWaCC8hXgrc9uEaMJ3CVnEENohGJMC24K2iPdK3Q",
  "key8": "64eFCMtQmxyQg4NCWs93qZ4dpZSWQ5VK9togWBiUeit6rTHyUgutTMUyHK7aoGdCgR16aLmmZF83CjA5xWzQLNuL",
  "key9": "3niadU8m9bPgPJEW3mTuPMbbDjs2axTMp3ScvRLHUayc2ArEZjyQjwdB4X6tT78z4pCineJtw8isz6RpnLKsSCqF",
  "key10": "5ukwTPyww7tPSXGJHqdwMBwn5LyJGHNN5Zqt7M6W5WLfBVBziaSWgGQCGGvGR37Dc82TKnUVFjdGbFJScmnfGGTU",
  "key11": "557Hcnh1QL9Z9A1aEJtfZ5FF5Gu87oXZMDJE2icghsjfYixWip5TRsESwWjmhN9xYfYXbWPMikNsRFUrtNpsFLFZ",
  "key12": "45mPEBB5EiwaypZW2BGs7zGj7ZxvCobtoMEFcEoZFef5sUHS3hVufJLEHdv5uXPnBjmXrR7TrhsSHtAEtsDNuNXY",
  "key13": "5RYe25V2yKD2vaemqb9kXMpn4hyiCbmLonJV2cLPQKwLV41mEuEtprs4WR5CWB1xUmc61itELnZJpwr84H3iNSrc",
  "key14": "3R8R54rUDLJt1BydabS2jXPxPPTL49jX1kUcX5H3SQq3Vyt1htTxY7mUcNMHPLKSaKgedWmBGQWSHSwjQqrhKdbY",
  "key15": "47zpo7FA1LtPFcxMJPMddZBBzQ4YxQ2YmTxErucmZaHdLqekk3KM8tVuj8PxGwQ4xXRCEmbr3RXSPgYwmhNnZq4R",
  "key16": "5e9e7eauf9yY1Z7ACaC2Sr7M68AJ1BNbWPH9jn359n2z7WQ6VmCpyCcAzGgM2qBESYGZEF9KCsE5bM9fZz2sH1Zz",
  "key17": "2EshXaV6kwmvBY81yZY1tR8RXggAXe7UjVa5EGdMH3aC7XaZd8WGVRt5VZ4WV3XJmY6ZwXZT2uLCKHki1AgPEBdQ",
  "key18": "2Px3kcmvt4YWjdVvFPKWVAeX1YPczWRTtZzHUoygmb2JwDWyGVVEZfECNVM2rkEbuDmjq71bYfED7GJNVHvCE7LC",
  "key19": "4bUpFKYgWKUfYVD9NUy52xhfUasnJ9hUcgrNA84R3U2QLDqLakywgB2o1g6u5jdj5ZdRVb6LwzmdoC3H9Ve6MQ51",
  "key20": "4hCKPjBJajpyFJE52z7CKtvpN5gPQXtCk3UWVHHNo9H6h6ABkrFa7triaFW7XbWi4TdPSFB3crVCAg44V1SJMiDR",
  "key21": "5kZKFQKf7s1Mg5dEWTN7hFccnXcUaMN1gGes9U9Dz56xDZJQBCwb8nFD6idQcVZuT1ppKwJJYEK7CwNZSEHSh9Wy",
  "key22": "2G8xMagtY3Q4PhWW9qU882gm43eLXgoRfi6uRTcS1trY5jbLqaEoCHVwsWyn6xs8R6Ttzw7VmhEN73BLTgE254uv",
  "key23": "3WxG6U546jc5iFvNFWkvc6kWManjeib2Em3LDhNCvJhenAZT7jvhPewSmd74mV2MRTRwiVp8rEagCpg8JQwoG5yG",
  "key24": "3pSqPgakyU4UGamhBrzzzGRpeDhvsn1DMkiNEW2rfgpz6p7uPRHxcPKh7FXAY9YuNKo86SB2pvdRdVpR1E7PoKCk",
  "key25": "3gAizH7EQDrGQvFhAK1ima9LvKhLMA1QYRQPagCNNxdHxqokb2yG1ahBiQuKtqEoUnkoqpcQMxqqr7Hi9QXgsxcF",
  "key26": "3L5oMFm5s7kwAbnqdF5nYJ8GMi6NwHmHDYLbQmD2NF7cK3tbUDkqnEqwabPv2BXH8tnAnWhFSaLFSQn15h7sWGG2",
  "key27": "3Jhn4RiCczfYgZzj7MVWfBynvbXRhZypZQmAJKL26Fz3ZF1yFytAiVYpkrHokppKvTP1P8B88patFN3dJehEfi4F",
  "key28": "3VsxiWc49UpCX2HcyoH9zeSqNpSv1qPQZsJ8nkpwgbXJjwiJe9xgppwZk2wCRg96E84fuJJznhwdyj2ehtrmgsqc",
  "key29": "26HiABy8ScP7MJ8y2PoTCpKR71qWjmRCBLKoQUPJiWZr9MM15h8mB2rGLyUBw131p17ELNGv8akpyYfw78WEu4pE",
  "key30": "4bGmwhwbtVGnfzUN5zgAFL9kZq1xrJBi5mkRLCqA4hwUkQxAVQMgwbjcHNYKCackFGymsv4WVTYGSitNY4PPq8tu",
  "key31": "AWoDmWtQVyYJTZTsVLWAyFKx5QR9tYGNAi2tyuejKCyhCbZHHqxU2f7JrPdoAouLrGzY2ehMREiRBN6fTGzEmBW",
  "key32": "3nAiKqSwkSN4QWhaoyxYQWqFUATFsf69N3RRWjMg1L6s3SdVT8zd8NYvBJdnth9TY1oLcy2kPQFoEGVzzx94fziG",
  "key33": "28SGrCKJWjt3HyRN1VSphWWAnpnEcbTNqsbrKERRBLvdCyEiK2Kut4j51sV9mWZhJ8zTKaWHvY5nFZFw1ND3Ujuq",
  "key34": "qTMevQoYwiMFzGtJeyuTYvbieNbiunfLiLZtNURuKdwTUnQAyae9qESBQ8nNrzZBegJ39KoYpK2zDzmLkqvoFwL",
  "key35": "Ya9Z5sGXirkoKtpCp4HrCZKJVXviUoBtFuXGYG8UDRr57zfwGiF6msrN5RxwBUnvKn2eyesW8TnyFT7tbVSoZEp"
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

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
    "GwKdRYhF23TudTEtDdyxe48p631kTyo6ZjsKGB6gUtAiBjPh4FiwDCvhVrAQ41w1FwgTDahm8568opaF2rLQnuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRfkpFk5R72qmgfdYu82kqxci8LcnU8jEdRJmHdR4ySvHfosy4xobahHwt5Xh7X5WnokdLAVbG8uxSkSzfSu8jx",
  "key1": "mzguziiC3PDbHPQaZtsDYCwVNgdcfFYvBtPXxXMR5CpGqBkx69gUwGCPM3gkDCZ9jm6147VjrJS5XoaaYQpgomm",
  "key2": "2i5yXNdRXh9xNYcAPZomnDdJfsiZkMrxpQYx6EP2BwDWSzBBcrcShfGS9T2kHfKfPsAHzJmwV4jJR5HSjbfkW4Rw",
  "key3": "2rMuKdJoEvj84Z9xsSBtpQ2ypRHZA8spmdC4GvKE9rppKpxtYBYyzy8qLUVapMAMQR6bKZckfyiMPzxzKpACnW6R",
  "key4": "4AUJFs7v3sGqboUmgUqB5RLgN46ErwcJGjyF1oicbtbfnsvHVaAB1zUbgZxMPj9YVBawDRHNdwmMAcn7kdp6q6r9",
  "key5": "4L2B6WQ2k1gbCifaNMp1kvcyyEqdMyugcvJPunRPisakRV6iwk5sGThJJvqoX7qk79YZ7bdP2eSJYSR4szLAoFXd",
  "key6": "4QyQPozYccTbBuo19NgbuguhLFq4BQNLiDaN5N4MbGW1rtw1Y385QtujX2NxWzoiMsUHrHpU3zFM8mgKMGW2nyK7",
  "key7": "5FobDiGdruZTXHFUY7aCfLFANCNVZZrSmSNzBpWwoG2HbZYSFCutu2xQcHAKAmeJ7mjw2DqVop6ZiG8Ugsd8sGzo",
  "key8": "2wsk7HH9LKYxvNrxb7X4dtsxTysKgAdjkYx9kKHxAhjhAFZHkNKRitFVwKGDdMrZvBRUi4et335cDmaQjQW9wk1g",
  "key9": "4penSLL835HfHjivdmiGtB8wpZSB8K7kc5pGsoqUAR6FW3AhRzzFY3qasaPyyt7rdhKwnspvEb5j7fPa1BMvD4kQ",
  "key10": "38NSctohdTMJ23NtihyhY3efoAVxwnbCuDbhk7MUKxgktLY9eGEGmi1aeED7dk4k7NTFxysGZspD1xgaTdy4gWKK",
  "key11": "2KYS1hbViJSPP7CauT3SZ6FoupwGbwKphTYyzpPzD5piovRfwt9oGah2vSRLCbVcbuFd2SLo3CiXDCpr8hhBjDMd",
  "key12": "2P4cBnpuw3raA7dcB6ehTJhWVkuFczsBu54Bi3pdUgzYYZeRenSahxEvNjD6vdexZwUoxPkpu8nzRxDu9XmfKWHY",
  "key13": "F9G5v4Ko1UC9W1g2SmY2C4iCPd5BDEQVjhUuMye5v8Aqs8nH85VrbVR7MBmngzB7hKbi7sMrVq3hC5hbbp3xFXS",
  "key14": "4AzBv5X8iunsLB3bdhJLNEj42Na8tUBrbE4ipAAi1JfSH4edpxWsmKqzxj2vtUHBSMo9XQsjW6xYEUZi9kY63Da5",
  "key15": "4ENqPprKJPkaMSrPxTt3oDhMHPtJJgMZZfgrghiMJBxw9SbxCeubd6MR7RmMavj3hwJYRiP6MCpqsWGteUTBUCFf",
  "key16": "4ogyPJ4k8qdDYzaGEgvVFLewBu7WpMyXHcFYV1epgK1mDNL7j1pcFvtnWMuedLNFewzHrM5gGNfP7FiArJvRL8Uf",
  "key17": "2VLjWR1rDyte9ptp33z7jsYTUCEz3eATXjFLMdoL6xhADkDXUEuDNFNdQ7PC1RSbfUG9xkbs1SiHQBEK6CgRwNu6",
  "key18": "2TSCc1DB67VWwfHkKq64bq9mxQiohVfi4c8e4YNcQgvXzvGU33e9K3ne2J81pW6V9DVdfaPaXH69STxDWVbjTPAn",
  "key19": "2jvAHZcdjB4kY3DxkQLAHiRrS5c6TXMqB14a6xf1TZ3T3u9RCNRufwqT29Tpsg62Zi2RwEqJVdpbBYgT3qHQPX63",
  "key20": "5HtwvyEkFxyEgZcFAjgiNtEwrhiJmtq7MTvFicxcsKbmaB3yCsquSAtmTdGJCVbsJwxcUaJpXMB6bssorvMqGHs1",
  "key21": "5xEgG8GGC4e9GsUfEAfogffcrDBuQ1TyTo9U7jXFT5gagBiDJy4a32yqLMDK7zVUAARrDYNUAXYEYX48b1qwttKU",
  "key22": "3whxBHBkKwZyr6uGZQC3DPhhJihyCpbmqnQGKThC6r6HMcnVxNxfyX3yK3mEaKLnwqPdGHs2BTtnsgLskBcGWPzT",
  "key23": "3bJ3LSPpLdSzCFSS1GJLHLkqvySd4GKVibiETaNButeAfMsoVu8gEM3LCx8RseccZJTdorFbTviSzA5UBKy3UeAy",
  "key24": "4LUfABeKD6D7mb8Xnwy4y8AgNzdrspELrZjZHrcSSYUktATdHze7Q5QWwuFogbMqPBQEpHc4YmrNuar7YFTqY7X3",
  "key25": "92U2pgMKBqHHasUkB8LhDn8y8h4ZvUhMknGC9in49HXEMDw1pXVU1Z6rQbSrhxKCAJpCkY7wTyi18kmkS8c1TdE",
  "key26": "3pkSwvmS8cQ95zGu5eXqFrdDdia8THaXaa2ToJVYmcDsPYaqTPJwBT7JDoEY1KrtkYbY6MfRTx9B6UpQyqyTNS49",
  "key27": "4jatQpT2g7xtTcgVvr86mGcGuZDayV2YNqLD3YzD7grxFSerX24gfM544w8rLgnj4mYSXWg8tUa6GzHHzk9Dfwet",
  "key28": "5Hnh5mGiiMsoXZWYPLfGJDRdnk4DXPfnVWLXcWyqkys5293ektzjLiK89CxusngzViSBUgQCc7ZPcGWPiAX7tkvW",
  "key29": "yqNTMzcQyhRWUjVgfwQLvt5SGYfsoBSXe2LvhGWbB5V5NH37PKXPDmAWiauoLyXBshEM3BYEeU5wh8wxYCR3EXP",
  "key30": "wcHD8xJvNm2ZUvG4iM2DdZadxX9NyTqLxLhMDVn9jFV4nMaYwrLYcTE5B8juMqW6gmHcyieTZyBh61HvJxQZLGA",
  "key31": "5JEMZcRKp5h4d6A9q23aG76akuZdkVBGJZgAMkoF5w9hh4gZqFqhrZEKaYg8JsujTmK7HHK8crJqc6KEoMZbaXz5",
  "key32": "4rVn2huogWPpfJ8jtVLzd7LqUjaJqt8iQAagF6sEgnv66jzC5wd8mWs9hVnXVkhaLgb2h1US3TWjN3j1CMiasRvZ",
  "key33": "4SgJGRKwCGncfboAn11QNfsKEctyxUT1aXjeBgRZY1EUT7MoT32eYugMbf5JiQTu8mmjqG1v7nveaM5o6o2pPYNG",
  "key34": "3Gk21MGTia8DebD7MnuPQ6e8iWAchTkyap1pC3EGCUhQRcr51LFfGsYjEeppGeqx4muQ1rdHbbaTAoWjCH74XpgR",
  "key35": "5KE6X77xL1MDm6NMyYhbdYA19uiAbQdsRXc7KrpuuwbPcYzKEZipVsTBaDfPti7a4ueykwa3XSVzBACpDwGZVCze",
  "key36": "38rdvZcL6jq3ufrFnVNQsVrLomAgyL9NoXevk5dByKYiH9VAFA3z5RVEBC1icUca1cDEJGKmP8iaZ5NV2xxM1cgg",
  "key37": "2Gg621ag2JXft3m2yC6woTC9kpTd48qkJjznaJjrX2SSejNmGbboAmPxdhBx4x6r2XQpWbAGdSK4BTtSeS4CAAV",
  "key38": "S3YrRuHkJXEQEq5C4gTsv3gvynZ6obmAp9cd6AEHNGVNF6TvPDa4enLamZVHJD35bXwgsjUvjq67y1aDrt6xYfr",
  "key39": "2yMLWCk6qPYMbjuqZmk36d9jWvDenTKfQ8r7cVYgYYPDkaXkZC9B5BKTMKb5sZar1PLxBR41xiJk1KeMgkXUx4Zu",
  "key40": "5wx6pHDo7EN7HgJn5vy5S3t8d4igrAUNyGggF3RUD2Sr9BwpQGAXjDhQNPXfzsdhu8cHhXNqHRbG4t4uVPZfmboP"
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

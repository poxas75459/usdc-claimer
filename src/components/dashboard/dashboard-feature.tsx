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
    "4QeZGz8oG7iihEoGmXqqcgeskPZdcZx4PtcpCQVUVVEboZDTQ8BGZCwufBXvtUcCgDiJANWkSmKmZiERhgofskpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HTUqVDDpRYaYDH77okRYvbxUCH7fBUsRzUaBdKxRuqJ9t61RRu9CAwvPnBT4v4wWKU9iWQBzwC1WjwMqrdMZ23",
  "key1": "3Dk6LhY5yMKZPqpXwMB5aTZiBwAcxmQCk4dLZe3mwK9AbQDiR3c4wuELEpeZ9TDc59g2GLJKjBu21mRnyuHXg7Mn",
  "key2": "i4wjbvvSaHC3xKDcngKvncYzTtCuugL3xAfz5AwWxcWA64V1fST6U1C5doGukdcX1fCt9pBEVpjFajbzXrtENHu",
  "key3": "5fvn6GFQbPrPvQ8TYh3rWFu3vHEoTB9GgHkQLBUM7CAEz3cBeCeFg9fq7tXswCY3dp7d4EDy3PumBw7r3WjFzTxU",
  "key4": "2vRofeJi4mcwPNfhDjTpwX9sRND1bcJvetF9E6W3Hmg4hKfKnyuUn9uX2hs63NR74h7icvQTVUnDbCFBb2wkSYdW",
  "key5": "5tqWNb71jGVe4PLHmUyTQJmTSgEQPMAXS8FRW7ydcs1wpxv8r7kapqC4DF33fWpg2th4ZNUi87VrpYFWqMhcxSgf",
  "key6": "3YqqPNra7UjLvmRUxFmoisA1b6s92dZBhfqkGKbw1WMuYe4S7QFGGfaNo2YxgmMgrzjjKQCoag5SV9qqP7KcoE74",
  "key7": "2ZJACSGSWEYnJFHBuVmhEABDmEq2cD2Rxs68vtZRxcU5gTev3U4zXtH91p8j1RysxFwEkyNqcFNN4hdoQ1XdyN5d",
  "key8": "uvXQX8y6raS36LXcvNaiYMEth6xwh2A3eJSXk416UFSUat3vkeLpvwX2gjVFit5AAEj7PbNPNZkszY5nvS3Tuyx",
  "key9": "4THhkY7x93YXHo4X2MSVWFCF7dHkNWJv7pXSbBs4rhTGabhQFioF4a4rpR4Q6PsL9Qt7cC4nr54A8FmoxmvPerPk",
  "key10": "3hhTex9ZYiYMLqEcTAdd1dZYQqkPkyVSkW1T3u51zYcJnvzG8CXd7WQAWJP3DE7AQLkJBpEG6VpjGugnCvRzuXf6",
  "key11": "1zesegDDkMeGzr7QWczLmr4myPWcvx4CaXRjjqq9ZMPzLoUJLe4sjbFSfREZEf2jUxTj22jgGb5V9ByGXcxRFxX",
  "key12": "vPQ1b6epdf94M2gPJa3vRt8VWhEdaXp8YorA79RMg2a4JsNFTyFBrnHqbZPm9DM9JDscWwqF1Q5E1iMAPnGB3tB",
  "key13": "HSFWLKm4XpuqHN9wNLC9x74zsofiANams6oUGCgwnHx6Khp7XJxteEdAK5t7qFH2Xcpg7F1tb3PiteeBDbg68rp",
  "key14": "2J8FeYKJWt7x6ryDwvyc4SCxWzJQtygnNXrusaTnwJu8kGtXWFFwVomS9MZVPSs7RwSm3yoFc8YFyHNB9tcMMkEj",
  "key15": "49KLAasYk99CrGm1XRbRZ3CkQ3NUijAn2tTixF633TicJ5DAVBnNTcXGBfYQkX2ETZnBDLaDvzPvHgdgd4zgimtZ",
  "key16": "3n1HAByMWWhTwD2NeXvzrmfvfwMJTYScrRFAkA9egsePBdS1FtNuci8bJTtRUk6TxFNuKB2ftMpK5R9phzn4ZmfL",
  "key17": "4PXd5Ho5g8mCdEwMSRXtxUSygKjVF9Ep6JJoKLifqdk3iLymmHd4qRLx3kZbuxyY2osZUdcqzZ3g2Jtab1wvCVXy",
  "key18": "51reEFM3A9sozB7se5ofhFnJjnzyV6W9YzWvjPT5JHw3MnjFYybDF366C88ZYRttetjkn7Yy5bEtBfnY7UKVbS8y",
  "key19": "fANgJvb1GGAWQomrVrhFqDYNjQcV4cBE8WuJ5wMngQMYvsXzdvYFv8t2QAvn887GXcmb488TLZw8UW8azMpkY52",
  "key20": "jCjU7ZHippLt79Vnt5MhRFeKbK5cnoHez8MjvNBgDxCDvLdN8tfrTeRCj1L9C3k8QK1gYmSNQkesNXzuQLEHYu7",
  "key21": "5PpW67JEAETKEPQpJgZPgvWQYWa4qz9wECPV6gvsnujMd9QcB55Npg7UXh8gDg6SebJsfHNHahSapAz9pETXwdmt",
  "key22": "5pf26ZhNN4Uv9E4JJo4JQ3swi4Hq7x7zTfrw4iRkvzSR8VxHyMp9XVsjL6KbfZt79pFY57DxeKJbttWPyn9dgezw",
  "key23": "51zA379Qa9DjenZXTsaM9Has22Q4jtC7S1zFCLt97HkAFxVYbAbboPjj7maw9fguBRwgizmJk6o9n4eVkJohdDxZ",
  "key24": "3PbXZVmsbuuFQPhQ9K1e9Uv42D3tpwgeXH5aX3WmkJQesu8JS4YJqeGQ9HMZehSRUsTeVMwXwnUhXFaN1Hu7pDvm",
  "key25": "363AqCRvdru5Fq11VR19jVztvLKZSx2jHdR8rM1ANkG9zD9gFeQKnXKebjMANz1V2F1vGbkxMsD6HRsA2qR2Wcnh",
  "key26": "4fpJ6fo8sCm7rVMsQPZB4kDkzJiHs7JLMQGAfybZpvHDXABqgUTt4WLDsCqLzxT9MXjQmMBt4w4TcbCUtdUsZJxs",
  "key27": "3XanB8ViNJ6EhLPYoMis4NKxBsLZRVXdVSuG1x9bWWqFUAyRb3hSQMazGX73ZXF6rrXxgvNdvKzaFsCvDW59DHoK",
  "key28": "63wwozcZqUwNr34iZD2sf3kUpf1UcnMnptcLCqqyBDgCcTG5tvUcPEJFMPHN4dx6SA5QARYo5aUv9xH3RgZxSXKY",
  "key29": "SEhyXZ1xoFoWvxsM5WfkV31moyv4Me5EMcbScRV59zboiRBDhMp8QUMqynUSCPBq34rwC4tdPUHJXmZfHdWRLHK",
  "key30": "5J3yZ2j5kaVGzmogJQcCUmr1ktjP3nQUbcotTWTsuT8c1Vwuny4KXL13MfuGS3a46hGKj2pwdGmV8SzaNtwPBEuv",
  "key31": "5hb4vmoJFHSK6fSngwXwc1dijQnbMrL2VRep5sy6zHYHjboLo86QNXx7XoWyyyUXGW96NabkjeGAtYGpBZ5J71vB",
  "key32": "4Uyk9DEzTXJHHpy9iHa8n1NSouvWq3mE698LZUhaBC3SavQHDTRwmbHeVs5STP6gBc32vqbwWXQP5Lyn4i6f9SVN",
  "key33": "4v9Ugspkj2oQ76GX2isCFKiZNH7xSsKEwz1vXhzoQxw1WDJjPeTtdTpNL8QHES5tE6GzSRnVjUvu8dAe1EaDxso"
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

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
    "2wbt8Ra4QFs2bojwvZcQaU1rR2F8LToDecZ8BudDnPQ1MMsoPMEy6JLF3oqjhPVtP3R9yrXRoYtgizD7u17K3QvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nL58oumAUug4pHSfxE6gfWjGZJCUPMr6mrK19xAaHziRxLUoaWxQkrHD6iXf9R83KVC8EGXDhZz2mCHLYzAj2CF",
  "key1": "3haav9vk8orMmj6pHATBEn1ceSmVEwxeiwbDegTVqan1X59AwCAYos9vRRwVysAZZHQMHHFq7TxJXLdvirePtJhm",
  "key2": "ihCyovSXFv8DzvuY74bUJ6qyNQyMnt46iRqMQobBwVBjDmsYqieVtbCQQ5eXdBjmBhgq4M2uxvSJmuFEUHo2gDY",
  "key3": "3mhvqztvPrt8p3Mpz73UVZjMA7EG9FbvWWVxh1dXxjzfRZphvXCGgNx6fVbACjz5edbRP8BGozkRQCzd2qV2pToG",
  "key4": "3SmvoxZbNzgoNJNdzei6DSxTQVWGQoQcDFcPJ9hshprfzk3yDDTxreKUeJVbzEA4CGvxLxGAtG5iNoPnrppFTxaZ",
  "key5": "52CWmefNsHqMPL5PNwfJ2WPjx2bxhDxS2zfT69caAA1XC9Lmi9hz1efSuK17fL3BURCd8oWF2JmyxKRUHvJcnLyb",
  "key6": "2WCbkNN6AyXFFGVteeFP5YDpaweLCBkbqmfg94JsHNQ4T9MFyYXKdKQv6qohJZztpEJ9yGEanKo6p6YJctV9Xszx",
  "key7": "3qTno4h13QdvchjQJzsN5bq4YNrREZqodL64W2QcL6JeFiKorbWPEADY2k9xRda2W25pZTWBqJYoTMi49V3ehths",
  "key8": "8b1kySQXTjepWZfr9bA6Gb6xCYeoZFXpyRPxKskfGqTyW6PH9rLRmMJ12CWWXFsPas9TfmRZky1BTbRNeB8UtVu",
  "key9": "492R1A5RThULWT82xcfBtMDUx49gijbzyXLvVRSCmD7pwnzbjRWaJfRoB3pDjjxKEPKwFE3ViTrpVDw8UTxoNPqD",
  "key10": "i78Ww4viN5GFddH1CPj7NHDcB9DcM3KxKQ34qL2KxwmWV5YWtMBK4W5T95JBd5hSXKibGjM3SdZsr1juVayWx3b",
  "key11": "4TMsDo6iHDvRcHw9D8U4p4vpx7iPTmh8nq2ybrUP7CwUWrGt6RL95TXon6av9WY1hPAs1k9Nauq3fzoHhipQTLFx",
  "key12": "48XvHzi7X7fW2RJZJuVSP1jMAPQirHuVmYTtGgBKV4rmUeqmiZa37bHmu1Jf82ffDpTv3JQBG5vk7qcBzUfVF5Wm",
  "key13": "5SKBrfZAv4W858Au4vThdhXC9NpumJoyfKGsgkAT3nbeTpcniYoaVHDtLWmeYFiVS2RZcRJ4PvG4ZjHcSoyXb6b3",
  "key14": "42WMRpzuXyFsNHLN8KmQfpRk295g9YxF9vhn2qTwnqtH1UCHv8edQ21JG2Lekr8QRNCLCtpDqA8mgnrFGrPcEyhZ",
  "key15": "4wCxG6rf6wB1SvkJHkxZa3iYbmimSbbt5YfF36oiBa6NB12BKmrPpRNjJnsr445jsqLGDuLTfe1K92u62NcNkTyd",
  "key16": "28rNKGgNUmPEwR5hTygd3CZDVkTv8vghcT8t8AqQ7wYxsM6f46RQvZSCmDT6vU8s6WRgHHkpZibx6mToPWJjUGuC",
  "key17": "2UXPP7ASLZtFc5StVaw2yDW7HRKww6KYMqH81QHZQCKxxqKTmh71uDShFr5DHXdKiRgGDkdoLyd7nA7QMZB1JjMf",
  "key18": "K1JE7SsKRjqR59N3oge8fzBbUMk2zsUvMW3xAA4vHhCJcwU3DA3n3ZmWxnZ49JrSbC8V86oiCsnGbAnk2c65ubQ",
  "key19": "61VFsR8UcSLFZwiezjYkbCLFj64GWNAT6b125Xbpy3Jc7rhNonFqUa1PMwPi9chtdcHqgZg1QHnwTPUTApMQWpR",
  "key20": "5mxi74XiXbtVGLtmY1Wjc2yfXGKtYRqSVyEDsafRLXJpUKr3XAGQTp5W5H9We1HYvXe9R2gGkSJrfUvfv1Rit9Cr",
  "key21": "4U1w3xro36pTZkjqnHwsSicUpN4qF7jJxenwABSZdyc5cZXAAN9xHYZyUPcwtisRMVW3uQd1V9tGUgGXcZHAe9nf",
  "key22": "5F8AwKBLFTGZA1nV111RxvccE76U2Lee1w5REVUsdRzjTqs4qcwhAvxiHu1GHFMocxaNagH3xS9n2roZUeGakhLk",
  "key23": "3tZmYhmHEfXcXdQViz967NyFuWs95fCMuWyQdoYGsDRFVgm5KVJN5JqgJB8iR2GmSQE4prq9DfkMc1CTEkWVxwnm",
  "key24": "E4ams9iTqfXPqrzukXSgqin7Q9yt62vVJ5ysZZATVHZNb6RKeuUkvbws3PgfGo5akirfzSdAaSSiBkMmTBrTAZz",
  "key25": "4N3FgRcRh3tVdtXk6etNvj7ig6mWwdaaNLRMHuJEqMCES8kRampuWsxtiFSpwWpWXGCox64e9c5kSZG4JYThas7V",
  "key26": "5pdt3H4bLyb9YGRJ5uB6kGt1yMuwYPcp5cvt6C7DptvewjZQD5hpwX5FMQpYEJXijyru9JHpA9KUW5JvywZS4Y7r",
  "key27": "2MxasDQEjnWZ1CQccQhW6sCv1CAJZBr12o3iSjWbheSwv3vQ7odP1YtGa8och4RrSnv1JqYTHRLVHD4TxSQVSSSA",
  "key28": "51oYuX1jATykmnYLCLk1VN5Mz6BhDoph4nurvQxa4XdKvjmoLqcXBQShDNA51Wxxn6JgYTD8Lvz2rd7nXE6jXGza",
  "key29": "4m9imPZoMgmyyL3A8h28vCgTEME3QjLovUmgeFUqEZgAXcKgXTWJUEuTJXL1CtESFCD5hkczmuwbiqiToiVjKwAT",
  "key30": "5iibwWbX5DWmtirdCMHrqhSGSLU4zqenvPRaoQpcZjXhsi6zPQdrRgiAKknFUPXNmBJPLGy9JBDZyB5kXPxufko3",
  "key31": "5TwwGgiVJmBTPygimwFTpFmh6tVDSvqENBYNWfS87pVdJhL791iHQoSPCL7VXCMGEawAf2AQacc4BBvABVkri2Qv",
  "key32": "5dqhKFLFzV3GJd9tFzc4cUH8hGUgEHPf46W8PM7kWdd9k4NYXgU6u1DZ2r5HPxQ6ihpXpzRP8KaLJ7vtR9zReiox",
  "key33": "szvjbmj6JzPvTWAZp83NnkzrUHNMam5X9JtFSTU4zMYjtTsyNhkkoK1CaY4QDn25JpJD4CCN3KDehUYX9fZYsu4",
  "key34": "32bd2jhYjqFNzaqUToBioMBKsA9Bc5JveqdLRbHwgm2w37Wp6HWgdsJQCP91eLEEFQjWsAkiSLaWofBbaTUGwQHe",
  "key35": "4WyXFZdM9CpAM9rGUwG1UT95DvZbwmmxteJTVtA1y5kq81ZWYCk2XiAkoo1Vaw6LdP6fXgtYwiRevrAVESbJ7xoi",
  "key36": "2vpBvqBM7VwZmbxK4ZG9amXGJEkQCiDyXh5GTuTgZwJjfBPEudUQMHt5EaerWamx3KWcCnxnm7EshdnngG66Pe7g",
  "key37": "31fBS4HeJBLreA7KUQ7QLYgLCAxLixA1MoWZGVYcATZriPHPxSGMBWuiV9qYyp4Kx4wXsEhLSVPG4gutKLTVoYtD",
  "key38": "ztHKyPVQfQ5T5YXzb8b6ivo1rVqpmGdfzbL4UqdF22dDwrHnXkfUAs3XYH1pAjhMuQo76y34Kr6C34z64Hr4k9y",
  "key39": "4MmkGhAuCfPR8Z6jwJEhgbCMzMQ95TDmxzLrEpDCqcy73KZTzizbrWfba3AA49n1Phevp4RXfp5zsRMq6i8UQ3b3",
  "key40": "4z1wZ1pFXyXAPMMzjcW117kiBAesfV5kjVaVnRtYMCEkW9WWXy5M6fWBoFDTRU8bJtyiHq74Gsnf4SK67VDUm64X"
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

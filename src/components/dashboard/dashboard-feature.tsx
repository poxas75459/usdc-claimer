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
    "4fRjJA3PUEPGuEG1Az6jsAX4An2zxLgUZfVHjkBmPrWfmPKXt1piBgKF1Zqy2q4LS4ppP4naamraRWyCsVvq14Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iWEaNuxypemz3hkBFCosaqLVeppL59Hyu6tLnurGjcgrcUnFapgnGM5x97T8ojuzUhE2xw4HjMzi3rGCrV2AjzD",
  "key1": "3aaanTv4Exa77Ssicap34fy15RN9PNsiBUiCSuLDbC19qsCeTG4Ufw3wRx6qRpFGJKVQ6ExQvFnWhHhLuNd4uZFJ",
  "key2": "yDaKEeeDAHKnaxJJGFyKmqQYZKr3qax9Nsb24QVqqxNUDT9SAAo3wTQf54EaDoVwF6UGwQKPZkt584WDJJ4tR8h",
  "key3": "3DiBwGSv3efyLzdwoBxerZ2yrp5oockrSW53EPM8sTRgGspP94fdbFNFCMzTv2SkKBeCvTChwPF2DDhMD2t5T4Rb",
  "key4": "3PSi2LsA7Yg5Kz7PGFaciADyVZACfUyQqSw8ue6nntKoHr4HBhx6rgBRBpkhTh9WAZq4U4KuXKDZUaWiP2seALxF",
  "key5": "4PXpyE8fXhL7xWJSuwD4bhXJQUAL5beRc4FiQ1WogwQGUohfzQwRLWxcWj5xZWFz3TodKuft6hjFVqeRGrgXYrYC",
  "key6": "3f5DL7aZsDoMDHUE8gDa2ryAe4M6DcgVQGYMVZkbTPaD8Dx5YbmtkHxbfBbWrmmU1ZMpdgkPyMJVoy9YDSykRWPY",
  "key7": "42oaV5ypXEXoajsHB2CSDWVLrkDw11jLdhEJBbeX3a6EctQebGTJCWDp6f2sS5bWcDez98XUseuJMfNSp8JcobgP",
  "key8": "4QweEMXeTnsJZbhPKP9BL4uCk1URk2YFXgCogxXfNPsEptnyntYuXbStdL2ZchB1ViKQSVRdk974FpYK4uhJkfL",
  "key9": "2YeH6q6eVJGAgCx2ER1AkVeAfAApuSYd1mHqFiVZHBSENgChMStcWXqNo1LS82vmryx4mDsiTmVfMt7QLBpeiM2q",
  "key10": "GfknXadUhqFPkPaLUGDpMnavkSZCf1PZqVGM811VSe8GtjWKQ2L9ueoRM5oGi4ajy1CzNQGThoSj3YmcSwZAema",
  "key11": "5vmJbAmeLi9XBRNZH4rESbYi4RRYzjJuBncM9JGNsdVsfg5b16HksausDhiGPoBCM2kHFSVJTky7CQ7YVicygdyU",
  "key12": "4yd4pxRvuof23DuL1iRv2WWuGC2Kr65EAcABgTC6DkGjDrAJ59NZRUYnzZSLAbBWNoyfwKuSFzUpXTpqVPwMuDJF",
  "key13": "2zY6Wk4ckBKZ2uKcdNvwCGxRRpSbPSCDZMDG7vFz7K57mgws2rGYFWJ1TyDM2KrP2QKPzuFVRK3K3VRFTqFZhmaw",
  "key14": "44tkY3QxMQpLx53aAxAW42VR6yxacx7DosUbaEVVHVe3jtWZYwyMXWZCezRxsXdczfV5ZBapvXSzfBcr9bLmV958",
  "key15": "3CAnwpHABWFsRwpUS3nZmZmEpMazXgwzQRKhG6HB1PMZZJiwbQMTQo6LKhKpJbjvoCZtt3YogJNeR7UgYGqFuiMG",
  "key16": "2QJB3mqAB8tPK4qUJiuhrSZyBWBNqVLc7onNN4SHw7LA9H3MTm5CxAr8Qx8jPA1wubAATRWkNBuJczM7aLpPdBDm",
  "key17": "3V7bcHQEVc1VFj8vN4sorkE15SH4Nc3VnsZiypt84VfHzykKp63VKEDa5pZZdVDj4mvkMSxP4euXTjv7aCeopiRH",
  "key18": "3SxGxn5Xw3NuG32d4FXEV9NUvB8sMuEE8pXXWcSQxLSuPr7PXtYZAjvramZs7LmL3HukymjonWpKc9q1RB5RnnwE",
  "key19": "5JqfXrfEnoEcnoUCKRnadXkwrU9ZdZKqThF4dND7goBrV9gmPijjwybCHHB7hVE7RDRCVfVfNpGtszxxwUUYw43u",
  "key20": "3AG4nJfKonirZnr2uAkQe53PSR27soHfA1jfsKFjFUVsY5Dw35L5vH3KLA2ZTt7GM7nqDV7Au7jZEux9jdmdufbz",
  "key21": "5SttCmPF7MXvF3sd81EH1XAV4m4nEYRL9ZCjZBz6czeDTSZzm6tQs6AKXthZTYRvyLNGHY4VkgZasVLCFwXwpn5Q",
  "key22": "39MQm2H27du882bdUVVvfqQ71ipPfKBX8UMPimLYaSUDPWagJ3C5phjvRBh3xxNAzBYwt5p4RLogZcnZsy8i4FKj",
  "key23": "5x8bwrJ6niGFotDeSAkPwbcgZEF96nY7jayzUcTV7VFxj6BUekMHjMpSbsRnuwz9A6QYGfLsfFwrSRXVmBaT2sis",
  "key24": "41RUfAweqs5HxrWRWmVFwqsRpm9UR17He1w4YAe3rsRbGgod4EQTq6kU7hw6x6KdFnRuHtpHbxx6c6soQdkuDybH",
  "key25": "3cnN4Uw1zJxiw6VRzqSuBoysAzZQBhtBduTZP6AWEgWMXo9jcMXftEvhuNtSyYYyrnNsBuAUcJJLw3yKrpZFmLJg",
  "key26": "Ju6A9zqxrFXRJiBmA5kg4n31JBCfiizyQhH1FJQg5wmdV7SEQiP2JjQWMogPMGRu8MFusnmb6gYagfB7aFqh182",
  "key27": "2E7PTb7P9vAFmhooRrCLxqBj7uxhFbWVQdWayqd8WXPrnsdbnMkVivDs6GXkPnGda6Zy8nekZVpPngSfqC55AGZ8",
  "key28": "3eu4vSK3eP42QU1mYS2vomEyeGTzF7U1eTNRTCJCY4HqZnSXfbUBSsc6EzwYjSXNc3zHqSoez2nhAyy4WonCaYox",
  "key29": "3wJSEnNMS4dQ1FfppbABpqerktMYNXnYry5cmv1euDxZ47MS4JfFmxa2VDSDjhNCSkR79wabYLCXCNewT6CEEajJ",
  "key30": "w4VqJUVxzKu5WFEVUUE4UsSD62EMaW7za5rqQgqEStrrFWwrA1gmZDhUe5B6fxPu9T4ypoyBcJKYjBpo72hpm8j",
  "key31": "3UJVSb3TYDmuU28iGLg5kku2yW9e9E1xZiTBpViZavKV4CPFFoAcHU1c9RSB8bBk1F2tWuxMgyGy5LvE1CXxCscd",
  "key32": "48PRGA5v1xcGaTPyFJVULenSDKovAfn47bL14W8g19H2k5y6jzcxRCPM663FjjyN3Neb2VgprVZ2dEn6FMzwtCmW",
  "key33": "3GeULZutxj6oQczfsdjiRnsz6uToRvmrU7F272PdQ3SfjCdmU4wLZMk2vpuncRtwWRUujxfHyoJEYF4Unzek38wC",
  "key34": "5CRFXwn6N8ZWQRCDsi5tPe18biwg8qv5sBWECo4xVy6HRb53uLuZHscDiALhMHdyqNrkxD6Bh9dMwjkg3FEVdRmZ",
  "key35": "2fsMZTNCchRLsRnNtaTi6LXaJFzXECiF3Fs14qzpvZtnYxpoud8yFP4M7MPKfSWPepxLDVBt4tWzuMcKJ8cFZ6Ez",
  "key36": "5oAAgmoXVQyEgBkXkmbee1SzcGkWgCsKVmt37ofKaERBk3McV3ocXqZ3mUcFjSNiijJa7dD51ZiZsw5ZG18neq6C",
  "key37": "3jaQY9VLiS7wwHviiGtqhKpwanqVQZX1JTQ6AiHN9qqd8B4hPPVrfRVUisYwVkKUeWsyLk4odN9WFtyPhxMbaGyi",
  "key38": "3tQzzdqwPrA4HDn4j35rXYmSKtE6FvgcTMJbcPvvC9t1EEN1CfVxeLtzAyNavgW4ewRGvjuNkh8ta33zAcQ33avR"
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

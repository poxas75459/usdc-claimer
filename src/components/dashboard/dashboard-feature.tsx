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
    "41D5vET8puGZrvUuUdzoQZECz7A6TGbWNZAZMU3KFX5vMKsmfaPzw8jukyD66VEBR4NexdSvQvYnUWCxgdprXpZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsQVAHEDuw11h7bxQkFnGaGdQCmXWZDptCZWVYsgy5wTcx1iKP1sULqJtrTp8bMQDdpbDKC96ovSKJNJM9oGrwp",
  "key1": "4kPwepHwogKcraZ1gxHVBvzVe6wM4GzJpQsE5SvvEdxDS8mZ65jeybuXDp63owfyMBkYYr1snG5b9rMdN4v6gkhU",
  "key2": "4gFNfJSjuvdVNroMSecem5BDY7knNFGMHHaoZC1FPC6qRGMQ6NyuqRGQy41tGbPaXQdPs5S3kjcQNzrEEDHcS42H",
  "key3": "ahyEsvXEczSGX9SnA471xye9FWJF2jru4tj3qFBLNzGJerUQrx83jLcTKG43BDyDHTCjEhBw5LVLdn6wgiepdZW",
  "key4": "4xHh5DCkcRuw6yZK95HdHPNnt9Q8S4AUrtPpHY7kXxCkGZAKx3bw8wwbau2cvsy2GtsbqncfxFPXAPgvXf6zAqd7",
  "key5": "5uyZVtiEZZYjGGBL1hQb8hgTDCrdcCD3KGkzwCBQwK4MbPqiXKHjNB6xEjP4bA6hJpN2qGphTRE2NQwbbz1BsdEL",
  "key6": "F3pNW7VCHdiHmja2qcWDUj12kNMSaSWoVhKQqdm655EGB8PtPWdiZc4rLLM5iERNKnvYqddceYt4coSnA6NbxcC",
  "key7": "QC3mJRxFei2csDBscik5JWDWWadsQnSXaipvMUVPmGFgXHakei2bkAj5rz1hpnvtgBVUsiMNXYUhxrDKo7tA7GC",
  "key8": "RQGdttTzv6FmoCjRUKf3aPLJrGcyVawfKZFtfGBKBWid6ZJp27p3vP7gKnZHoF9y4oTJtmJd7rHSsmuaNywB6oc",
  "key9": "2brpKESm1q1y26E4unqHyprwhbbXhYCbEJy5LPYgPrJGsVBeL1JavzjkB89USYsLa565wDvVoT6juBHmSqJcQQ12",
  "key10": "2VgY4ZRjUim9iemVUFBhwMDQBFXR6h2oWomsAprMuzvjhsCthuXncGWpR38GjWviNEWrm2fHhwCXhVwZBnCVuboC",
  "key11": "4TciCnMtsA4XbzgbLT2b5TuUe6w39D2wWYbR1vtJ6A6tdXskjiu1mjQsgCkbsexyAW2yLR9vYXQ8ucy6SeuT1rwJ",
  "key12": "4KU7T8AGtPTBMFPFPp2X7DHPHYXipZs66Abt3RoKKjKTKZxyv93U6aYrby1LUijnWouRxMGq54Ya9zH6cdbJMApE",
  "key13": "3viggYjpCo1xmdRwSgvKoyveL7jmpBb2Jv3AZ6bJn5RaTJqM3LMnhrG1adZ7VxJHuXSZWnCWiDHMAusggkMQMKGA",
  "key14": "3QkSca9BhXL1YpTNfJz6RvX6XYCqKSvRLNjoEVLGTcd4zzyqcZqK5oxnQykwQFMZH3aknJjQEyZb97FL7mfcL6Ah",
  "key15": "25ZpLr7CRJrsTArYLKQCdNfJDV6UjTUdW1nXMn5fCXs88cMNJry8xXhSu79V2HmzLQb7haeVUitcBiJ6TtxZKB5i",
  "key16": "AWGgnj5ipDjm4TMRpKdGw2gbFyJgb8YpCmDxxYBacJq9ZVVtq6CCxMcnTzYUimspdrii2zA6k8QsA3pZRTxvUVi",
  "key17": "3AckQFczisW7sCACyrrtbP2GGQT3cTWeZgQXy4ypzk2NfhZBfku4tFoqHeEUuLTPhA27v3dN2t8TCtFGNCFo5mMc",
  "key18": "4w86zp3wDYG9WsaKRxqR8fYjkKLs5Qv9TZs9hmq3dzD2Jet5Ton7feZFNBMLvhYH2RxwFuH5fkTcAwqHjK2q9ZSB",
  "key19": "2GeKJwr1v1EbiX9qG6YtNjNxShUizA341fey8EtYmxHKaSwguRE61s9dozxUkEpWW3QDZA43KkuwdrUXNfqpsc9B",
  "key20": "59axwaWnaLZ1QNx5dBGgHtuaPA29QrGLPnK8Wx3VDqZPxW5nkt1UUKU4ZjghDxQiR9JXSMDbZv76bCGGEJRfoxax",
  "key21": "3EJHyJCmATGfjmkFUYNsaYAmuVvZNH3mSZZ3G9bmsffhq33XdbZRp5SujHwHFzenKJuWfRfuPcxU6ddT5Nz1a2qJ",
  "key22": "51PLjVtTUFFfru8ozy31snVvHdbUcE7JrG6tMKXPWHhAVSNiLxLAzpfzHxavns559xNU6zcrZmwAWtjsu1p4sdfZ",
  "key23": "3UkL4n5F7xbnU1YWDD83Rsydd1FMiKtFbjVzA4svSyo38Z6c6SyzuMCU3mrDRPjYPW1teGtguBNZrfgscAcT1BmH",
  "key24": "4m1tytYHVZ4cYUewp1HS4xmDQJ85kqVeW5DunfjKByZSY5xREHSmwUpv2GJcXjsstqrg8eFeprnYaPFFpyTRJVFn",
  "key25": "2xo66wQ2MgnudMvZGA6xvk87ZSdRHk7yTerBsZH66diqSB77zJtVSV91GTBue2wth4khb94EZq13LqsLZFDtT8Kg",
  "key26": "3WMDpqjnMSpwgUz4zLziN1nQJUuHPC1cXsgShi2iV7gaxJGhLJtCaQdZ2xF3UZ8bPRaR2L4FVjQot51TUf5sGCx7",
  "key27": "2X33Td5FZtpQ9QWtC6W9e3JefhPvrrpLngqc4wFMrsSEkcH8pAPf72oAiTUgBG9fG5xMxYWWzqME5fRP8MJjFZHw",
  "key28": "58YNRhXL5Xeok1w94BAXGtVJkBg9y76ScurzrikhuFCrtba1kcV7gn158pwi84VE3L7Yw87Vc21CckXPSC68MhXL",
  "key29": "44gvp5LiRzDzZtSRppoEU3SmVcJKpaa7Pm5QGRBYhL9KCPKfgGEMAeJUjQ4KL5trNJptaape4sCj61wNf8f7McTi",
  "key30": "2LSbxShcKjWfPeUj63u3BvoyZ7wa8SEXEPA5mPtUEQ7QeF7pBhE7n2H17KYMsaigXARM6SKNvKd6EYosR6AX38zY",
  "key31": "62xQpR5u2YvHStV1q1v5cQ17d83uypYTkPxkkANj11qFf8yPXnSvvthi4fJyPcM7KE8CGVJvbfLLKneUKMsLNc6d",
  "key32": "oUPPhJWMDALE3WRK4SApwXHTBCfRGUMVwmeqKhYADTwhTiintapsK8baiJcXJTvhhcfBc5n7hV8RkeaDoCsEwME",
  "key33": "5vzxRTcq77sQw94v8r3a3xUzWJPSxnW1tbyMB4ERPh2cjbogYcdgn5tQmaEtgr71upxzt3AretdCDmcYuYte96PN",
  "key34": "2RENcQK8bfysT6iQ2L5bGtZjxtUuwYQHLfJzTM6jNUkTnrkS39wBhpQemsukcDxcjVV8oDFRmiTWUnbyWL2hwSa1",
  "key35": "546p95DwkptDvRSmBVRpe1tkHuh7Nj9vmteSiJUxLJSdFnCBJG7b2qxRiMnES5twdnyeCj93Ho2Zdh2cLmPbJDRq"
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

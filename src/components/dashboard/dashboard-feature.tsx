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
    "5AUAMd8GMH6HVu2dNYgDrMiMTuKGwYAUH6HACzyHJYBufZ6D33But2T5iWpFE4XDUGUPWScsqTt45YLtRCocUTbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dvs8xNb6k8bTbG1c9LkNQavSa3EEChkTsJ3o6D8LBg5i1VMV9n3hxdAvY9e7D9fsq5estf8gjRt62H4a3fzJ7bc",
  "key1": "21rw4qgCHUsBXk4YFDGVMb2NhwDditTrjo6TPEnzztjziptCCsZNQQLsFy3hRj8qb88S5xM8aW3tFu5QHGYm4HEG",
  "key2": "2Br7UGdiCzigrMbBTEpQEPZnrMzDTpLmfc7CEyJJBNS1KPUsF3EQxju6Ly6D94S2qSqyuuQUjvaszuPkoXzXPejT",
  "key3": "8vBs9CjEHfFFoPvvqcJ1ToCt2jiVEeFPLzv2a1j4DX9Pxb3YnX5Wr1ZDgjebwmU3LcRbioUBpR6enLZR4k1X5Ho",
  "key4": "5KRVyLSNiq1fm1UFyd97R1Dk64euupzXWPuSFGzce9L6hftf5GzXFJ5k1fwA1rYRHoSGSSWx376H3FzLM13D7wvg",
  "key5": "5rs5dEB3STRBtjsBRb4PuUpWq2wJbG1N5iv6Yb7hnZp8MT3eKvzB36AuvWmCUAYskVcdQFE564ve4AGrqPUeL8iX",
  "key6": "2aiFLJTRLNGzYaEUMHwXqXaJi4QdNUAnUiKa6t8CzSbhHGroumErLHcwzq7Z73xUiJzdPLWjarv1NDzimg4Y5wog",
  "key7": "5kNfFfA1FEW5UJ4pj43Lgp1z7ycsybceY5RXWRJKvGvDJRxUEvJaaMo6cFFAUkCc9ojJkoKM7TEAoCkLQYJi37NQ",
  "key8": "4sfsL7oRCWRxFjiJLkCRaoTU9K1obuoXiy6afPSj1h2WCSrpJS5MLw4QqynpNYmnZbNgnvyU8ojqYNib3PZPLjvd",
  "key9": "26Uo4YKUPhWgbsPPYeonNuTGkYogYHzzTBNiPoNKzCE3C5kQWFnJBJDeRKMGJ3TxWDRWZNoUgVSzABprqPVdYQvb",
  "key10": "EWa3aGFYcUnkxvPGMc3NLVksMeXhfSvQmamqvMo3skAATSMaqx2nP1R7PZWA2fmTbBFXhExW427URuwy4FLga5k",
  "key11": "5V3zRkm8W1Z7LDJkGDVU5qs6QFmWrs1cSSuWABbJEhV7sp6HC7aBdkGauMyhmU59ZGJUKmzn1kyDx8CrvijViH4a",
  "key12": "21marDsbe3ahGycNcPEwrYimLQNMBAzK4qRuYNWJ5PHDqX8eTENFWpEKgXhYFBLXMwfzdCCpiVpRZGiJHCFbzMar",
  "key13": "5Veb3HdkHgmymzuk9UeYYqsEx7Yoz5syk1RNcFcHdawmAtdtWvqDPNtzddmq68CufgAvDz6QFaauPPkwiM1ZkL4i",
  "key14": "4nTBRVZQmVErg213RiJQvYG9EHroywbFWUudzWL3M9W6Ya6vAJ2BXmSjysg4C1i1sqonabF9MWqhc7YqfiUjuBHT",
  "key15": "5MLzXQ1d7DKBHv529GABkxqmbkE6T8XnbJBzVJyxcMMNH3k4PNABZ3tLU31zM1vcPRvRMPnFx2RMMoa1eJtRLTkp",
  "key16": "5PtXecjGJVoVrj6XgFKHo6Wj5FfzHLoiqWXz53HiB67otpzvQDKAysPH5bSRH9mKoh4K85vyFNa3FRwtbBDd2543",
  "key17": "3fm45tYzygYc9R8B9tejeGFkUfKjpZQsfreGCSQ5rC8WrPrfWkMeG4A7APrgVjmXTvvN8oJzk11CNbmw2ztzJWCz",
  "key18": "4CzYQbHV7JtXXhuyzBVJqTtmnAEhnuebcSmERbVXunUJ6Tw5fVgwWZgbWkTM63hp73ZDa7MTZB4iV324D7jPRnCV",
  "key19": "5iLeRKrx47TcEr2CsP1QYMDR1taQjd9MSiXSTBjWPZJRyHJtBWX2a3sxPuiMhwyjuakBC2BUNaW7ACJGCPExbFft",
  "key20": "5JWJygEy6LzCGj43hWVpL7bswNsL2HtoW3StMWos2yejJfvFnwnSYmeqowzfr1kTzj8xLkdLzheatvjPtiGCn6dc",
  "key21": "Ey7t37X3dXmgvSX56B1xKVRKy3Qmg1rssyHKUJtPCZs22zExob95SJSs7h7h1eNgn4H7FMG5pH7z9BpepNc72Eg",
  "key22": "474QdKLPmNuK7AiyjWuJQCJ4p1zYwTS7CE6fe6ruNM5HpB6XQ39cuhQGBJSbuqj6fPg914vJnTUkmTdkgSbeK9Ci",
  "key23": "3fGYLaRfKJs9GvsJiAmjtVHFPeqTdXDHw6qyuX8iFyKYtk2b99Kuqi8vaZ1v4ALLeWWGsYbqp841dtKUJi5zdj1a",
  "key24": "3XTqa3xyoj11ycu4X6tE69FdKSJEoC4srkgkGmJoSDjLzM5G9B7GoGXxU2Ru9gq1bi7FMfcw7TdapCjkygGzHajh",
  "key25": "2YieMSLeiUL5pnT4BBEqqAdCaVej8aS6YwwFtA174nkPrgyAAqXJ1oWJBLNhAcydgv8RutGdhPgxtd6euMmxAL8t",
  "key26": "4oAwUMo3euhGAzDRreehbUuvU8tFPPr6EyuUsghhGnFphGq2azVeYVkex7ivJkCZMrn4P46Wv5n3ES9j9TJVLg5B",
  "key27": "44nEK4xHQ6vPBSHdR9ppaFXqj7ALLmnS1AS1X4HUYEnHudteRa8a1R9tTLarhkXcfY6zbCdGZSB6cWk1zg6kLuy7",
  "key28": "4ytLrFjBxrPNgRgXggVN3J8x4VZGTXUgf4NZ5vNS8oAMHzMNxDj8mXPDLzQnt2z37rhcwUz4MSoFYdG4iuAuBJDc",
  "key29": "2zcaUs5FEP1jJFd2rXk8syADMsrXzAPTmi4vq3cd39YETggeovx1odGd13XJYgxzCeua89jRnAx63eFGmXjtzsKs",
  "key30": "4Ft5seVftC822SjjjuM7FQvPSLNmbgjAGHsJVNEd29mmLFdGDNBZGHBMoTsE2UbEBuJT9JbSknMF82KG331ybM28",
  "key31": "2gRVsWavx58Cd5wL5z4aGevcyVsJ93HVQHsPM373Ze1ua8CLSrayN6bu9QKRReQtXSxymERmZgfGLkhqAcnrwTT9",
  "key32": "3mV1RBPQQ4RrGDTu5g7VT8dqHwPMZpDCj9pBMKvCrvAbnof8NBnpB2RCyKe4buycy94uKSwyHsECYESvMa95ajgp",
  "key33": "5SfzLR4Dovru55s7UWFQ7u6TQmgwSow8SqX3Kv7qSbfSUbMjbtpQLoQN1A2D22KK8192qgXYSPZH3G5Qstg6gChT",
  "key34": "28hdrtn4cbujo6BCyQfALnAp6ZDyLH17eAtbTCvkRdjBmZG5jFoGGcyB2WP3LXGfug3MYFa5HEBN2aKZEfnvX64W",
  "key35": "6yYWmHb5ZV2wXwP7TdezqoFGXkHLbsJ2QyGKWxvC3mcoYUFAnEUQF6iiVTXDZJAN7dsjkVxp9fzYX3gvqvYsomG",
  "key36": "9UztPQq2JRWw9pq6wMZrbVk4aXLBadQjeqkhp2GvCzPMAo4hLFsyatpGZtrkjPjVjWxZV8TLgsuMAFx6SjyNhzq",
  "key37": "3xFWhVaTZUW9raNugQFXWqrunzcTgDkuFHHjcJkHdxhtQu8By3o12w68C9DpdQsLQxXtrPNzKwiqoDr3McAYRgSQ",
  "key38": "78QUw8njoN7qmbH8oReZ7ZhADwQ3Cz27SiwZV1US1XntihdhMKpbTKBroyW6H8rXPQGuuyjYEUvBkuuAmKVb3V9",
  "key39": "TmRoCsm3w6u3DRLcKSARrMMLA94FZB8kEvhrCSea8URUBptD8aVEnNqmZoFGfPDwjNrDP9w6UwYZu1WajgDo5Ly",
  "key40": "3LWx45QzUWbxrj6qGRmXZgwVdqSbjTVnSPmjwJkwu9FrrjgkCzpFQ7xpmrSoo49LziJnY46wdnnMbe6fKSniAXo4",
  "key41": "4YFewHdcPDFW4otb3W1hT5eBnum4dUrc2RTEhsnjqSMD3dYrZ6pLAe1UoLR5wGs59K3ugwdXyJyxFqitcWMNdpRC",
  "key42": "53BD2t2j5Gc2RGqt58QZp8N48VDxbkF897HMbUbtW3SaovaNdsgc3hgoL64ahhcJ63kNHTNEsPniwSP45r5EGoXa",
  "key43": "3k7jaMyhhGpLRpCcPTfwgvyPTnTQ1TFaui9Sz6j1AYGsntT2st5GHUNBU6BfMTvANAoVuRxTYy9USmwPUyzCQyNY",
  "key44": "3szJF6Tx91yd9kXDxEpyYq4g4gjpqj92n39jPUCGwRuuXN12SoXzAc8bYecsaEMmxxsstXFZrqCx6R7Zp3mHRwye",
  "key45": "33ZH7n5RmhBJZnBt4j4vb79DS4vovqevevgehZGGrgxEgQjJDgG3VNMTAabE5YPFK3BMSR5wvSyZJcVCTrNejuP2",
  "key46": "4veQJ6vF7Y5dAJsniJyp4PQt8u7Wryu77qbMBVmvYdBkdPbudZWkPVLSbuuu3gbE9qfFrnNgUt9Uvc5N2aHRTMQa"
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

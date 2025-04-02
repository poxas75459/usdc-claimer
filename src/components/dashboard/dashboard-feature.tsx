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
    "44sEvs1NmYRjBSU6CDn7UjFc82X1NHc9ynaban24BBVrsRbY6qh2GassTy4GYQm2AjtLYEUfQguKToGenvhBemHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRhNAXg62sbbgnPV7jKNBSrYFCwBrurR3FEuFqtw348SeaRc72Amma9Hw6VFGeLLKxfEiKKtx1FC8AUYW1eJyHj",
  "key1": "5ZugVnMn7MwnwALgkfsZtpmfB4iDTjTt8doA9yzos1te7ZPUdaAMuWbUxt9MmprpoWSQrBZnxkYmsCmXRrNtU929",
  "key2": "Ch9nJ1v8R6MkXoKwaa5sR6HugsSXb1fNpKgoLLTewxWUbea9x1nfHAbhSKAmCNqnh5TRtYZJpzLXjygHa1h7pzn",
  "key3": "2oPZaMGNJjNb5vGvhXXYP9MSt5o5tXopHLKDQ59giDBDKKxWfveEvjRZ4Jb2pAHatBySGjHgRtCKxPtBhUGfMJXd",
  "key4": "3gxc6Bx7dyiWU1X4C3nTXAQ1PK2MUmdzfXw61DorQyMJbdSYrXPj3UcEoifjEr46KSMj1bmYcxMCcC3DATW1QC5U",
  "key5": "3HY9xgFLt9e3r3bQ2M2uAAa3WLXoHHAVUFcfLkMwZCVfkg3EeWZPZo4ownddEpdWod1jsW4QQEmgCaqofchVK61c",
  "key6": "2szA6M4C2YRRb5GYsMQhUiqG83MyYQQdKd9zDuAMdG9UaosmTrK9rGSRhbKVFhfTKw3J34PV3qFxnyT4dKeMUVAf",
  "key7": "4PdmDa1JbKu5EVtG1zNaeXCeXtxgJLmTVdjDaXFiSwTdp5ansBcaivWRk4LzBkKVY5mNdtAsq1dBcbFKfs6fX8EM",
  "key8": "4ztdgM2Y2c9deuWBrHc4nrJ8sjcTb7iSWvLQbfpnam9zJxLnMjUAfMmTw6v5kpc7FKWpDCuSxYpDXQe9jaCHbe3N",
  "key9": "xCG4oi8QjfStUeEJbp3pc7yX7mVsYqTnMWZz7CSuK1NJZVirCjsvoX8UJkPm1BQrWTKtWmrwnBSTQs26KwCjJyi",
  "key10": "CGeGEyaEu7A4JU1UtRAfGryGKgTJSWDESdZ75S3i4zWjia6MXmYb51x8Mn3dPhYQCeEaTVt2dSaZfXXihzhMSCi",
  "key11": "48SbqsAjG3PX2GAp59kKnmowQjNpQeFFk4nVqjxwW4Liv2zt9qtXFiXspAU1i2txXsh9ym8fUYdsZDZTTfbJirMT",
  "key12": "2xtXmKXmhkKyU4vhqgVqxEesWj6dhC9bu12wnWVPwJnuWv1d4B1K9C9bQXb2a7GezAVkmXUY8zK6ZJ7PM8q1zAac",
  "key13": "4QLZThapAH72yXAehxBL8gGNaQjwJTnMFgew2PUG4Xm8PvB6RrzjrgiyTbFMQsyqggZUoigx2Ln59v9hemBgroif",
  "key14": "5BLBn6xkiJhUHLRTAECBGbLbUNz43ftuCXDJK9XXUzRNeQkN2yQNEuice1y6v9sioyiem5sXesJLrFc5J1YE94JP",
  "key15": "pxqnyY2EeH8apmqRPBygncUG6m8w317BNUndtWrHMF1w4WQQHM7vQxhPmxzNjPMuW5tQgs9bzm7o5XVgEPzcAWd",
  "key16": "3HnHUuw8ThfgbHRRSiqU8uartTtKdjyxeZ8CxsrW74sh6tBE71y7ArDui9NyLdoi2UcidCfu6bubDojAY1LziCNH",
  "key17": "5grnos629FdzR3mAdodJvpo48r4pQM9L4tKTATUgpxa2nKxT4UPf27spzScF8CNMneZnx1ywTXUZvWTSjBA5vpiG",
  "key18": "4GoHrkc2ZoPjAH7qjxs9dx59VeeKssgiD2tmqgoPFspauGsi9NxGXncx7KPDPYFMGDoeeGVfduCpdZZHwPhTVxzF",
  "key19": "4SohL1wjPeHqhGWTEYR28fPr83nkx3KtxtMxmkPWCPsoLJzpX235wqVEWF8sxEPnAy5P7EA1J4vKYwnirCmt7VE8",
  "key20": "NVF5HBePJowAdLTH6QA5M6Viwc9CSG5ppuFn4LqHEJuuVdVbCod3efiscRDBbSTvnsRYUnL3qK8KCJrWrZRkQQk",
  "key21": "5Up7xmL9vXTZVrGSFosAW5pXfeGBLTDh79UjPTyFkeaKgMb3kvPAoS4eSuAGH6sAynw68D5vsZQhiYJMCR7VzfoY",
  "key22": "VPoRincXM8MbZvLrCWYohS328rpDtkUW7dVX5PuivHnt281fbkyMtwMcJpUQouQuvFw9NnNTf2oErxLCpvqvNht",
  "key23": "5bpn4iNTJpSMYHo7g5YAtUNtBRQQA2v77PXTy4mJ6FHz1y34ZB8JnWqgf7HzQKsh7FKVopbEPrbd3HqBqSQfVXfR",
  "key24": "4mg6uapfs7aeqkArTMiDoF2U2vFjGGHMqQSBrTohWqMbFsQ3w1i716zb6LBhnSSFvR7UkgL9UuFc1w3xZDbMBBmu",
  "key25": "4uLQpYBE3YDRunA6UsKKgkcwpeWr4ENzfPASLGrhGVNnNRticpEVt3UDvywpQUrCoa3Z1URVm3pCHSMjoV1JQwLn",
  "key26": "3cNAYJ3H5ygJPrAYJhbjdf4BUYofAUsM9d41n61UtipoxgLKvCX7R1Uvyi8ensXfh6hnBRvBmh5SdfmoMud6k4CF",
  "key27": "4iDBLzw3hTjiThLV8LJBqThyWWcN8ND5BbG1JsncZVodYJSkPWfc2sCTdKFBvY8hMmZo5C3FFkNgmp4YiS2qEWzk",
  "key28": "G4YBvzMkGvZxmkoQ679JpiRUUWjk38gSJ5hsYKoKcWzHiT1W9fS6iH2Hu5Xa2FKi44bi5BpPHqsdFvt4tN5c9ht",
  "key29": "5ANm2B8TCgqnfjtKDQT19Ro2TRFCuC5FrmKRfxcNu6U8qi51XBKmHRmBUu9kTbiKuBs7aLcNc29GexRnZBAan6E3",
  "key30": "3UfpCuTjxyqMBHgCA3iHdUdWDuodXvddtQjr7FmQMScEJovw1aMrwWc66U6zHUatfTjkywPQBHdhBu4R7LdKdcvv",
  "key31": "BC1uBvB3nc5iAP7uKAGKzFNfGuorkTL11en1gNZqczQCV35vzCgrfh3XrtwF2EMXD7gw5LXrXTNU1QQKhAHoQju",
  "key32": "6NobXv8WFr25hHESFB3DcVF9ahS5CU8js7UReEPFQQ3gSnMpKgHMcETy3mGu2spH1L4AzwbwJ8ia42iNmKMiBGC"
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

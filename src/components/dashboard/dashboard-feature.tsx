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
    "2EMsk5ARDp84MoSoDtwQjnvpzkKjrqEPgquGBjZKVgCQBmfjtik81DQFbkcxyrqBsoQLKUARj3Weci47kRs8QdMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M7TuVhdUuo4v6x5VpqT7gVFXsGRDE6pPXoEm3jvUpPMmy9n4ejXQKW2NwPkjR6TYsKrUMW4A7CKyDggcoA5BCXx",
  "key1": "c63myNuWEBzb6LXijXoyopEARv3Wps5rXurncKZ1Jr4VHvo6deR8q6TEtditt2NGNtCCXir5wGon9vbLFAC3A1Y",
  "key2": "243Y38DamoVh81RPXodXJAjcdkfw5yGbdq7kZtD9fFrsSs6KBuYniU3eU4H1GbBKzKkPsDyPDfj7kX9o3SChCaj2",
  "key3": "2hBxjgKLkQnrHN76px5Mrqq1fd2NY5dEbkhrWTATYx9vkkKb8Q1NC7vBjeJNmyiJMeqnn8Ewb4c3Rd9pcAJWgTX3",
  "key4": "4bRv7GpiDLmSTYPS8FdzRBu5UyAgDXGdfc3ZBUUSnkUE9URj5W69ivkBTeNmpwcSGs52tLo2i6ugYsKtdkJM9Dv8",
  "key5": "3LRQadBAwpBs7vPfJfMBtYpqTmk533McEXLSEma52eir3wRYP8BVo7KQ2CJUbHTRCkBo8D9NS44jnawkvvBn3bN7",
  "key6": "5t9ajcCGZWJKvda9nHbj7MY33nLPatRoPQo54q7acPsAF2DxWomX71pwF8497ioCrv9Y5LzSCWReL8A8eKfvCiNd",
  "key7": "54VEQEn2VkCg6Sfi2SRmvEi87GzuWv9dYZcw8G45yNUPNgYeJxYPYCAPwUREV4qHN6GHVAMMME8iadka8NRVR5kB",
  "key8": "WHkLqPxT4KcMSEqz3gPS1TcXToFsP1pgt8U5Cs1A1t6QbWwDCEnuPGGjHkwDu9112psWmgJBqkiY2Req1qMGxTJ",
  "key9": "3XSodEc7xvAvGLDvK6XRA7AEVTUj7gXSY5S95RyV42HGo9Ce3RjwFaJtTGx8k8U13J43avMkr7q9tiLJ9kehhdx8",
  "key10": "4uTgLCv544yVdmShQutaTdk786qZM5kfz9iCbwfjiZsvK1MxVqghbM4mN4q6y9bWKsXw2zYVHnvoW5FQf3emrjUs",
  "key11": "62wvqT14tRjGXm3HKiiKRiov5E3nqjmPd7Kr7ejR8TP4PJs1dpijm2sCpthTvZVW26HuBQGCC6uzMMzbieaBiAt5",
  "key12": "2ViLeaZ6Yn4erDCR8faRBqDihjtdQMBPQsnsogMummjJyxm2P3RFzteLJsM7EeoXjW8kFexG6g4jSQzXGEH7Wavf",
  "key13": "2y4vN3RcqatC1DMJomcgdBmPCRcjkqopxBknkeNsgbaoGP4j1mNkw5JL1N8eGasW7cZsM5eppke5X2ZzdugzWkRU",
  "key14": "5x1Z984oHm98PGHkdJ4XEzejsDN8JKzuStEx4iMghrZnPvHjSLgSyQSnXWQYCcouGMY1nocheiBZ5KxZo6AUjEz1",
  "key15": "2xEasRP6wpg3yKTwgCVNXu1pgdTVmezUdcoDKC84C3uJYga1H5JaXbYqiSToEPwcj37yK7RLY56GZfphxi5NwcZ8",
  "key16": "5HWQVpR53YCCVKxgoMrsjGSzDNBTpvYxCRF2xa5ndzqQgbnxkhof872PmfXWnDCJXqM81FDaHNz8pcEEY2HHbVdf",
  "key17": "S2QT5A6yMXsbbsemcMxbBr2JGgs5Nv7zCMJUDWBJaf2MQJnKooTSiuV2Si3QQ1q8kz2vYmvYS3Kz5qfm81hr63e",
  "key18": "5XSNEiegeDpm7u38J92XQyLbnqukWUV1veiyPjQuecddaELbqN7bqQNy1cdEhnpqXtGwESA6Ym7YuEBgjjtXYHnf",
  "key19": "3uiDsP85vwqmhWNohjAzhVRdyaqYSFJnGFhRs2wVDPzrqm1F7qEtyMcr3DQPWCnR62L7gR8G5uAcJjqhLs12GNX",
  "key20": "3pCWkMpHh9yyoeF9wjVyQTZbApLfVyGHaTcAN84B3wsN7oZNYoZT9b6PeFkiERZ2PJtn3B23s8ziPp6NBCA58oSa",
  "key21": "4W5YC92iLCDN8zudhYxD2bZMgA1HB3wEoiAYLUh8J5dxtb2yYMVwyZC28C8htX6mZX9HfPxQz4ZsQChweTZyZkGm",
  "key22": "3yeZhP1xHVyRJNAsoJBFqzxk79JkmwRvdrqiXMnXd2x6Uxuf48LKzng9XVtdHk7jMmTrMykCnZFrxPWfTMVtuBsH",
  "key23": "2YQWQE3n7eGn3hwYgeKdXV1BygqR8uPFraRShSVS7HSXua4f9vYP1Nogq9EKXj7Mkf8JthQ8aP5qzQrqLHxTbXwS",
  "key24": "5NTNNW8UnEriGVVFtaYzEpZKVPA7Lpt2YpCPMwX7aqxQjzhjrTRtsjsFrGVpoScUQXDDLY1wKqWV3TDjkMf39BfB",
  "key25": "628FDfSAukvUoaLwtZvjLAXHSRWbVXsufE2HM6W5jCo9TuMLc6BVsuw9jYyZjd9QFg3SUj1ZmY8sgfH9AMswyQan",
  "key26": "Voza1hc6H3CqskksmXuZYUkEPkTxgfNpDa85RNvWpwhApFhfP8YTcxHKnNoYyjgWMU97LFmt66XZnizEqN85mo4",
  "key27": "FGGVzVpid3EVvZeB5HPK6qrD7rKDAyEBgQpiMxVpChAPvG3NaWnizrvVXu29mjDSw6ngoPshTdaXSCf5DEP8bF2",
  "key28": "3M51zBjighjCuk66B59SbC3pjEMZHbbAaadexCgSRzsxgKwnEU6Gi4wqvPHmF7tX6U2VFy4qXoaVjVJymqUmJ7dU",
  "key29": "2NGeWxA5Ra5Dpd3XejTFTBiBMnzzwc6ztuKoZY2qHW5Zg9hv9yhzCGs1M3mwynpbNQnubvoNcsU2QczZPcmR2XtU",
  "key30": "3AQWM7eacSum9zWPt4CDsS87eE7ir47oGk6yUN1Z3FSDncK42jZMxLeQfx6R4KVY5uDqsUdC4b2wn4JodvWdPVW3",
  "key31": "PtCaqQxd53SLHnraagiKVAJwuuRN58muFcCFuAgLVRBSC2i2LUf1mGwS8CknhJwzBuFXqLC8Hp91yH7biNr7vVC",
  "key32": "bgtm6vEU67soUEbw2WNQczoyb8L7HMDVV44gezioPoPS9o3KLaAJTSMiZT82NmxsRiCKC7Q2PmwZiizgDgnJ4UZ",
  "key33": "2qhRmrxDvUtWEinMMhHbesXs3825yZ38xBoVUE8sR3aaVAubTrQfR6K4jEPJUWKVCVAEGnKxZo1XCCZX5Jsmkf1d",
  "key34": "3Yan4UfJYBt96ojv6ue8nkpi1kckf2eyyYmjoSnuudhoReg2J5Y5FWDEEutJ8Kw7c2j55NAEuksZntoTmWWg5bq4",
  "key35": "3eNK56rSowWYLzHjYB8VjCAEZX8hz5P6bk9r7JewKh42Rp4YkD6X5ZzYLaWLH8uuwCACLtCafbu39PiGZX3EutVk"
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

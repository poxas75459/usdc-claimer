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
    "4FqJTxuhTiknfdZF4gBXx8PTKEpjLNVC1wr3Xhi7JuMvfL4uQ95T7DKctHAJxaxNvUaijDVqLQKNapLnC4sQoVdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FEMUXSfCCynG6ssJR2YZWeau1VMYKtt2ipoTEYwYgTtX3iuBKMZQSkZq6YtgVp9eetz4FHVNSfYdgjhEA4PLzna",
  "key1": "358DMajGvJLaPusCCGvNEvGgE2z4xd6Rwx8MHX5AMaiS55d3BX2ZFc3LcfnTMkoKjoeKxkJU4VUSt8pesM6Vvk8i",
  "key2": "4VY9Q2xtK9zXJg6uhTrrH4m94AcbvnJ6pP9VDuFUv1UU3uKARZkEPtpPb1MD87H2TUu3x6roRocwCj1ebUVHYMBX",
  "key3": "31bdTxFNk1Spn2tc4QBYL115p8gsoKZXLVbESyC3rJ6UQZs7EvDu7cSHKG21QSqPKzMwfBi4BxFgKnzsPuZ5hWtW",
  "key4": "HPj124852qkQW13K6JfjNc4ULDVEDyQjKpnYKEj3v2cC1csAQ6eBpwzsjqMtvV7e1ofja1beHhdQz5bcmarQSrW",
  "key5": "41rQPqXh2DYDGJTcaD88xxsN1KypTcMm8ELddJEzuaJgfwU2RrUDxLWs2kk41A7EbRVvUFpfC4eHGm2gBbFQ1us5",
  "key6": "3RtA9UyzZruGTxBVq1rB9eg45sKZpfQ5Jqbj4GmbLNSf5Uvzxk8qN9ZNKnjsYe7DayMfs8Ng5g278xnNPrnLUqSa",
  "key7": "5cZKFaqWzPSu8xDfnmuERTRJGHUhEQQ3a1V6D92mwFEAoLRisYmgWHQgvqdPzTkBxuUC85Hr1MbrHxbJ5X7jqWWP",
  "key8": "2QPNkbgBGtQEKRfBGHbQoVHHsibAGen2yA7pTUvwJyiZ7QMrhPPLdAWuo9ecpEehMZEaMxYAbe2mKzWYJFBUqkVi",
  "key9": "5dPuuY4nGBPiNtenbBzFRTXAesVa2nHxxDU4pYuqLxQZC6d6DuzWdBkbRsvjxsiXe2qmwWWUStiWmGhzTEKJ5kGd",
  "key10": "4DBiS9d5wDWiaKfdpqy8YNyre6f9CUsJrrNWzMLQ8WCRdig2NaFjZzkw81qoYk17nLpKnCZoVb7Q2avveX68hjju",
  "key11": "5vJ77qJg9vjNqXvwsxUvpx3sCbWMC87xmj9wYTtZ5aa3qGtzML2iWxSNdqDAQLwWZdwA7ZcMcot39mEB7aVGDpUr",
  "key12": "5QSLo54w95VZWEBsXPMT9VVnCFGeBHm8io5FYxZZuRH7cUjpZfZ2Khesstxi5E5uaBV8E82uXFKXsQwjptEfHy1q",
  "key13": "2oxhKcZjrv5rRfoyGtZzvCdtkYoHBCHPPWaBhhkS9bHma8s45FDv3bTEkbYsGDynE4ksat4iiTSjtBqRhesapBzD",
  "key14": "rA55bFd2x5uMRDmDKKnijm2oh8b5AR1cA3H5CS1kPwwM2mywWLz1cxem79rhJ42cynNzMnmuEqh5j8cBxng3AT2",
  "key15": "QATc7rhSBeTvYwG7mTwuNJjcy8pHuE63sa2H8bbCMVR2oMGpzqxp5kDcdTKYUk2Edu2KF2vY3JbRQ2YnLsxFsZW",
  "key16": "4v2kUJJ6V4Wnj9qiH5R6vYZDSqrLWLvWu8VasWHc5EKyMg2AK61e3oqEyQnTDCJNvuF9eGRjnAkPD6vVs4vJJEiW",
  "key17": "4EJ2QdmVncAdvbYrYy8WHWigBHk3K2SdeEsPmS8axk7nv9qM8D4Nwhynw5RiZRPzPoUUUi7nYg7eVz3bEYcxVJ8U",
  "key18": "qnRhobQhZSQcqzJjDBMV3UqqFPhkuk2KBJpPfCAk58d97t5Wknk7vJRFrGRP1CZAERpta6KN3QXpxvLSRcGgZSG",
  "key19": "D3kyo6aJ4F6bPzQLnNLeinwk3DXbaXBVBV6jvkjgkt8fiuRkAqWLJ4X1hzfFB4G466yYRreYKpjeCGeE3dwGXcF",
  "key20": "4sxKVY1hm5mYm2fBTqqqMFW3S6FmKJ7zr9ZCsQhJS1PVDKeToA3DjwQyZm828HQyxohgpQWP6x1AfmwJ72RurcT2",
  "key21": "9bW97uRG8k8X9AqfwtasALVxDhc8p6t7dsGkp1ZRJs8snPvSN8ic8mqkGuTi8GXmsWgNh6GHK3aYjyQ2Hk5CGtd",
  "key22": "j6SdPgYcFtAherYLjkESbKsjGPXa93Vz9EMJpiQbXY16d9hjhm1cN7whYPerE7QReiipGZRRUGc1bui6ztdqknN",
  "key23": "ZSoc69hmX9ABMjLAUGoqPejFXHMu9qjVpjZBqx5KVjQwJUMmZY4E5MRaYUHrNgFsJjoG1boxHvHRaNdLGnq1abD",
  "key24": "58nk3Qz53Vk58HK139QvjLLzaGXfwkKdtM3JAVjXvUhQSCUdgr3iR8kjecxopcTmSCfri4N6HgFMyUeCUkbTS3F3",
  "key25": "38W2fEUPL4ARcdP2skywTD7xrAvCJkRrsx5uX9K3UAFqxSRVDqMwD965wadMjoS8ozdMBVSWWM4d79ybe5j5g9HN",
  "key26": "4iJkAGpWxr3g2FfdaLKunurJdPpZbet8dSvuNca4PGBv3WjWWJzDh4ZJRHip6h9vFi5aMm1dQmCqCqcdTV1M68Dr",
  "key27": "2pNea5JNnbqwaBdYQuenJD3N5jojCt2YnB4jhwR1mR1oyBtxArYb971JZvEA8KSK6KNiUkSqbRmVs6EHWaenkm4h",
  "key28": "27dRdNMePpDVrbP67KBm2HLYruFKukBiFaMokPoJ6DjwguMmtiJCqJQruVvHiR53x9FcCQLspp9dDjuoo6P8rtj4",
  "key29": "4xze4VKYLZZsH7W2LVCJYUYvSJWEGxFmzovf5PDGEG6ypyqroeXpSJafvY9yKUo2LrGY2CwkuaKKytU6exyK5geC",
  "key30": "3waHJxNcH5Wx1twu9guQowFYemFrpDSu8pWQ7QXi5DUssq5BhiNds7ZBP1jF4e68QmD1ScfKApDps1qXF9RMWW5z",
  "key31": "63DnkuMc6RZ6VV3AgovdpptXJcTPtCSsCukpyUPxSeG5zv9bBbA4MstuxBCoY1hHw6zuaETn72rpoCfVxP3CCu7x",
  "key32": "2Zeo3qkJ2TYMmZ2w85HpAmwhK17zwGyrdnj4Fb39CSS3nDaBWFH81qoKLVKtFZyRQbpakbtwWsK7N8eZZuAn2xVC",
  "key33": "4MYQMLdXmDUJCCzGqU6D2mDZbCYAn2MY26a7pmwdtUTNKDXtcLKGVxJ5BuxPG1sLdHTKJn7f3HD127jhQSic8xBh",
  "key34": "2jumPwwQmnNxcR11uT1w7tfzvaWdnPUQ9SMR4qAFXKAoz5UUsfFp1VALu1auv5KM2U3tuHkAY6kBhMkJHD6dAZCo",
  "key35": "3rhwgX1Vsbqdk7SUZDQ6FSv36yfXLnCADXnfzGA3nXakHmhHr1wsHr9QR7GrmHARJTGCEiYWerVQeqb9Bk6XzsM2",
  "key36": "2DUEFUuVtRQXKQqgPLXd3A5Soi29WMf3oucCWdGMdv1vpMrJ23JjWGoBV4YTosAL4uZTiqnFyv4j4S61wSe7Nauv",
  "key37": "2WoTjeJRZRqkVeMcj4JT4k1hVyqPgTsdJBmBpw1iPNVbhrhKsmkCToAnn5b9CTBwW5N5CWWd3dBR8EkGiTPc3S6T"
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

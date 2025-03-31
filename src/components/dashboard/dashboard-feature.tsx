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
    "4e9LA7MSjPD9C9qvN2TR5EGgmRNWcmfRCqU3pA2LXid4TD7Bzyvzr59QZN7JTgiZsfmmcnkzgcMYNWt3eQH8jXRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i9QK37k753Tq5PVN8WWhBuVkmVyLTYdtpN166EPgpwpFqMTmtWvYhuaTxFbh6JuQMqfGRo2LEruXxo6P47F4e6R",
  "key1": "5kTy4CympDsjPxi8K2xyR6tqAWWQexwKkxJmjAknZk3YRmNcTepdGuW8KAuKiCmBUZrgfbJ1sjAkPZv1Jh2oFxHS",
  "key2": "4mSVp7rM8AzSJ3kgRUzKCx82BpUPKUpVgvos8d66Fff2YAp7aGVeVRcqnNpATEeYF4mKjQPxB2V3ajhag9bN9dqw",
  "key3": "4xs6vKrzvyUuo3i7NYeYqEvZ5dKFi1DLqa7brLSjPt59d6Q424teoqJKuUBEzac5KKk33cg6UqwEztxFGJQxQMj7",
  "key4": "2govnLac6pVYZtUTULuWAc7LciageTn7Dm4yweT1aLDPboweeLQVxCJSrQtgK9dP1LmMJv9JZJfgKAkecRzcFgMb",
  "key5": "4kNW9txkiRZvTpNotRC7y3NLdMw5pQVDgrheWjMGbXB5xoTwo5sKPs2XHzeWAYGtJ6CSFhYCBWdPzo1jfKdJSq5n",
  "key6": "NhR9KBY5rEB14JYQvUkxeNEqU4s1hNGzp3Z56BRiCvWUcxJey9JUmqubffcDPCy86gsWS8TbCLs9b2eM8MW4FpE",
  "key7": "3qWuFjABX7nk2BZfhgL59WmKkvtsCZBPtVmvY7sakW1SjNG4kPvDV3KnaFYvW3QAPUvnLaXvXqmqnZyUirgutv4f",
  "key8": "8zS8WSgEyCsNFg4FF8szT1kdgqYP1QEd1vV62VTyEfXZJXMrAmLWVdqeY4L2ga7LjqpV8W36Fo3CzzohANKcXUn",
  "key9": "32RMevjV3C9ciSXkKivr3FK8i52JeoUjAFaZyfp8NaL6Zf38UCHvYv1jVi2w5MyZYEux7PPoZFeZksjVx9W3SCiy",
  "key10": "EcbaJUUivhLY1c36m4NPkqnKpyypXrrrh2PwWQ8Ltn8ci7mH4mTXzLHnM8jjZazzgdjhrLGpRP38Yi11JYxZmJY",
  "key11": "4wmr51wYKU3FQZpM4Lf1TUuaNd546o6H6Hfi3nep2KVg4J6yTcZ6ixCaqeyCgNRDTXfmacKZKXrWrt69SKoJamnU",
  "key12": "4fWRjtbZ5JuEehs6W7Y7FUZW9D3ByyaK6uYQoAq1ZwgSRbZJxZe3mLm2WSRXgz3NPrA2mtXhU53oU5T95Mr6AZX1",
  "key13": "3HkTSgqCjzAbwRudkNHJwo6GMSdYmTdaRm6M2hLfCD3oHACavcmakWJKMYXhP4Myxks3WHBYLjApHNkRgy7haPzZ",
  "key14": "iMXMLG1JLkz9NnJ1nEvzNCai38vCRBjqXxsvsj4CstLnCBNL8S8SEitJNLbFuzxCoVq2pCsG56i6wx8YZjNUC74",
  "key15": "42TBXH9KsRttx4iDFZDedNR3pfgCxhA6RPhrKPKaVZWheiZvL8hsi5CLiyQvA6iZjQDN7WQkJfJZQKtmemfuKBAA",
  "key16": "4hBF8Aag7Tn1YEFM3hGGsSXiuKziYkVhEjTTrtYzPGcSubzn6EnvZevVM8ed1FfR7NjptCeDFe8knevYiYAZ3zVG",
  "key17": "4nVreT7dgwFQcogrWGxQ9fLGkVpjqNRjTpAJdsSTSohTHYPB51i7jq6qdpHTDfK2i8Ce8vtD5GECMTHhZ1GfNhDw",
  "key18": "Pa1Rqb65E8a3ycnLBWTpVRuJ61SovQVDZE9JfJeCYQxYPbxcKTnEwsLqMz4PekQvkckLA8DKvbhKQTvCwRCFWf6",
  "key19": "46Gkp2FU4zKXoDT9RbaxEDGfMD8yt5cwyebhHACSrx9EivPAtPMbsFeFK66Q7fRrFdvKhZCMFea1HiWJssb1DeNG",
  "key20": "4CyDmUkuaqgkV4RiU6xSXz4m9Jm7eG8b9XJbM82iBroTp4zDsAexJ8q7xnYuYbjivAwTxiFPqT8t7U6pVew1RWFQ",
  "key21": "5bCogvQ5t8pmsiRHYSPTvyLBJJC24NondjB87u9kH12fX7jfmWFF3ucgbvc1WD6XzFtYRTGfU9vvCXAuk56JwPP2",
  "key22": "8NvgFhoKNPMy61gLiW5Ug9NMd2dUqqfUqmscoERvh8sqRCbfuzrRhSzRtPErWfDAdaL93TS3jvkeZYCaohDsrjY",
  "key23": "CWfSa1a2pBzavzrNT2y122X9FT4sSREKi77BvhMV2RjogtP3f9YBzt3bff2dFqiZ7oMV1bfoBBVd1y7sSgyvUpA",
  "key24": "3WzCFvzKbxrywkyEs8eXeL38VoeBPqLXKGSdiLM6S4oPoCMxBXZWbwh1KEKkbiZtf6iEMDeTX48DoQvNtqAnEsDF",
  "key25": "UTBxV6UayJbcFCSitkUsMZcYze35APwx566DqfyLeQGNttzCsYn3iLKdAt6WWqMAoR5enqDXfXwo8quLvn8R6cB",
  "key26": "3tja9xCPeHieeFQFhT8Srzsq62z5878xvPjtxxni9CAoUAh4LVHCBq8hYuyD72yAevvV2Up62GRF1DYRKy5tWSbv",
  "key27": "aaDtXW34krWpcQZikFMaZt2Y7BbRmN1s8HuoRU4T6P8qzknocFTwZ2gsPevt5Beaosyf18UxgNiMsU4GcKK9svC",
  "key28": "5FZ9acQdNCTrsGGxMPG6QSvKYSQy1rhyBqmRZDJ7iE4BFU4pP9vtKbCEEYAeXQ3hkExxtDCwrRdmenSXunyNbMhD",
  "key29": "3we9DJp4cnu75ZfTvcnyrjhan2eHzv3pytLHH8TF9CdwkBXper7dFu8XCk88dRY2uqvLbSmcvQDdVQyEvTNkNXP1",
  "key30": "nx8inAkWbJ9rFGUykyCynLK3rBkmLJsKuMc2HorQUzJKmYB4yhAWL1mAo3WSoyvvJJ999YNQM6dQsHYKx97cfE9",
  "key31": "wD6JJCTYBF8s7LmE9bHcpSoR4NQ9MEoaCN4bsMZHJjvjC6vpp9dcBKwzsCNpPx3nAM4JJ4PrmyBu4yxRzG5jSe3",
  "key32": "2Bw8UqUzy3j33AvZqfxgHcaQb4nS5MvxwWiRtpKu7azv5SksEVmMhyLtTnEJcJ4ga7EGVR7vzAK1xZyJxttPkoHY",
  "key33": "4gteKgbMFXibYWXxATAjUMTYu9aPNCZxctRtsvqQcXS3GHj9x9RmeLskDSgHdjipRwMz5F2rt4Jak1itYRyW1qV6",
  "key34": "eQhZg8gAwFuVgj6eGWxGPeaNEvcwL5xSvbRVdMD1czaka7VorGS3ApkidwzPvD6ViVju2jfD4a8Syv4sJHiSYy1",
  "key35": "4sBDwkcqK2Y8sBwydFYoc8sjQRxrtruCjSTzjtwqqM3BqEPtDtGu24zQnj41FCbRBKascHDofykBQ4FKPQSdPXhM",
  "key36": "VEdGgEPv9ZGQfiH6Hf9pniz5sHKUNz5KNKQeHyq1cTQetErhmDbmNpj9KEY6izDMm9n5quXcvXkaizXjhoCdcGs",
  "key37": "35AFfaDaN2FKopv2jAW137bbCjprFnac2GWHEYqUSZWhnkZjuTUCnXsYKiFnFzkgBF7ZAsjxWEGBpKEprFia9abQ"
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

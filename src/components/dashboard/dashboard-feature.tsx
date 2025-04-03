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
    "5bFeiNQ2a9ybw7fuzPkdyvNxsqTNqz6o7xdFVbdDR6UWp83R5jQg7dyVWpztQUkpEogYbFhwm1siZscozJFsTfcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TLjtYq955ZRKwMq3aEJmtfEQQ1hbAUJw7K2wDggYEFibDzARAjJCv2vp8ErgSe8XGFTyiJePQw4aWUzrfuvdWMo",
  "key1": "3DffwSwrs4LxSyJiXHv64G3NnRtzqmey4acBEkwTsejHqqRAzAJNwYFpgARu6jECyWUQYH3FuLzNZ1r58YeLdsZa",
  "key2": "dmwX283sgiynJ4Dpzi2YYYBECzFpomKQx3MgrMxGWMbATVuxqBMb4iBikVdbcQsYeYU1KK8mNnbsWLxdfg7eh1M",
  "key3": "3EjpbhPdxsyBGed7Nwyukk5FMEif5kKQahQbkLZ3q61nT7xgCTqmhjxeR7EtJ5nr7XYvGRNGT1uLMeqrZW9sCxKG",
  "key4": "123q3HZNoLc9K4bP5W9SCrXWNgLQ2DFLSwhiRJYwrtCdSUCUWKRnJuxFPiq1ATKnk8pVacdcrzDMn9wGg2hovMSv",
  "key5": "3dfAnpvQfs4geZpsybf6xegk4gr5MwobnC4wN1QK5t3rFzqmqgtevcN88GogVtAojA2yMrj6AHgqjexddffAw91F",
  "key6": "bppbLNwMqJkYCL7XQbXTBBSKW6KSmcKkG69t1WWKcBfJxvGKTDjiUygVq7tw2YYCTUNRpxJdng96nFsC8mpcA8u",
  "key7": "MAa6REEnNLhT8R84jFFd7u3V5oAZrywkhZVyywNxDaSKdawPqWbxnkzsVRB5eKx9txTrhzZZcx94UDkzQU8kpna",
  "key8": "3Cz42ZK6dkbmiAUD4aJeuEP4EnVGKMAaSenopBLwyWf2LR6KGH2GprQLxCjkZ7HvMxETg3HFtGHwxcB3rXmGQrwf",
  "key9": "55mxLk8hjt1a1Y9JuAv3K9woTUZrz13i5ryF2mZFiekpauGK2nqr7cGBEybva63L4tVEj2PzpP782cN8DJuwovky",
  "key10": "5gCcXASMc2WPLqkoAQLgmLX16XHdQq3YeUh2hLN7g9agKSXhzckL79qRLWFEBVJ6gJVjEu8vv99WnH4fRJJ6qaVH",
  "key11": "2BxyLjZKMj2UNtNTQbSWWuajVuReT2dN5AxZ6VQyHjM3heKmnoMmi6iNqAVjonj1dCCn9T4PX51p6GcQYQPcon8L",
  "key12": "3nY7KvTFnea5kR2Z8qiaib1SYEBY8uGXUj1J1rdRuwRqSNPJJgmuQkFtsaR5D9Zx1NkCEGrBpmdjx63oKh9CTiMu",
  "key13": "nHxDydszB2V8sQJE6gS29t9p3EZ7yt1zN7H9oE9ehv7B5UthEvX4sTV7ALGgUfH1RDLpTDWR75JwKkb957eVax9",
  "key14": "4KtNw8bVSJS5bJgob5yEipDoSTARHZnMhgYPFbXj273Si8G9AbCbdyoGe7M2xNyHF9ghzehuNwYC5NsSdD6zxdfj",
  "key15": "2YQ6GDNqQ64aF2CmrpbK2zKBR6tnfZKog5f7iKu8x47RLR78PLef4WncFxEQazPH9dMJsTE5Bstp928ZTDwaPeSy",
  "key16": "3GbdzGPodHgri7qCdvNtHFhjZGBHu7AQv56aJF4ExrWi52RGUdPvqZ2jGzyRBFGxPoyTiDc1BihzWL9rnUERM6iS",
  "key17": "62Ssyhceuvhe95ecJncpd87pa2k9ZzZVFDXNDKXXtmCwprHJ38dzj3EwBKCbT3NzCvjYSmT72yC1js5iXgy6W2rJ",
  "key18": "2gGxsPDP9JXPeEzWpnDpHpFGTcN97wQtvEvstDdffKFxvAzQGzZTpnpz22zqhEjcpRcmcgwrBjrvNMj5hE9oPu51",
  "key19": "5viUUVyKvBdpUmEonkfhjAzcUzDwwFnUKgLV1kRspYjPtMcnVSGWcaSbRx7JMAAcquPkXXJzEn4w8qiJezwywD4Y",
  "key20": "3Mq4KUa5YsvFZY36V6PF4yEwDBRaMxkAC972yabMuzCBWe7kRbXkeSTBUhGWnfpAqY1yLmJHCpmiAM6uco1iFhwB",
  "key21": "3STH9cYUh2g6wNgqZfBvLGZLS4iRywboUzfFBZVdjZZgfLxbA8PXaqyiKJ4cvFWSCVB3J8X1vg5AXsG71Fav6Xao",
  "key22": "2fM13k8ShomR4FvHgZSMbge2Hk2sBtdNTx1yoDv37VqV46igeb914tMpAFbr1rdV5StBm7iCQnH14upaTM74VuUJ",
  "key23": "3YHzzNrX9SYtd5z4gdafAsrmyUz93dYBdUwo5GGGFRjET6G3sbGrGwqvRGWgN34vMUKYEmzWsa9TrSUst9noeci1",
  "key24": "33JUVjRVPjmquBF1Zw3NwVcK1j6ShZWAuZXEFJa49cHPV2s1kvFaeeGqijxqnnH7SuzqJk5PBgbjehwb6Gt9B7h6",
  "key25": "4tsAtfP2yJG9W7nNTGd6kt9PmYaBFYMjkU23EpTVxTSGD9WfSszEzHhRLJjYB5uPWcMqHKLr5rDwpuD7bigUvx5v",
  "key26": "3s7R3kYeK3QRAZmkK1WCRqniHa2wWcm4PkziAsHeKEHQnJDBeGdzPuh1a2gcwwE6rBXhV8tFHzvhwJNYTv3Nn4t4",
  "key27": "3M83do79H7VJVFLa99uQ9RXxQscwfzxK47zk8CQ5UEqjFZv2PMgxETj1Q4AmP2khJLkwe8bRVrBQxHEvu95zt3cT",
  "key28": "4vSSQoGk6nWBQz2A9gFo6hzEiY8bBRE1YLNRVhtZ5dnJ2oFAuo9vjDEwF5sVyLSLSekuJB8648dgmFXpGm8JgU36",
  "key29": "3iYssshnAHcevA3aCyaQb4dMXEvyAGKwK7KaySJsV5AvwNxqukuER1VVYkjDX8jLw3ibMsK3bq4upEe85DNRHUgw",
  "key30": "2Q7B3MpUgrCdWhkRxg1WhLbhKkEKZVThRPiFUcLw2aqDJLQu2CM5D6PePLMmXieGF2hvWZ32nBp5J1pexKSzb1NA",
  "key31": "2mf9NgSJmAKPyr3yNoCGabZUp5qwLPv9p5qVvNV8D2ncpxdt5TZPAKEMqDTPwZCYoxCzVatrCsBWUzALpzYu2d4g"
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

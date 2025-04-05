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
    "5JBUprP5MZnoztGBkjhPEvVZDfTmuqJd5X2hyS7LCbxtikjd7b5nJPR7LARSiJK5g1SJabyu5DUPQxc1uv9e2ZvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3unrQGzMUZuWyWh93HefMvDVLUtejRTWgZVjPdfQipD4hVcKw7krDBriny9JBxdrsU6t4p3DEhjkPFAXyQdv62Va",
  "key1": "2rv7x8uVz6xu95NWHyTqDEpku8Y2wG8X4NQoDRcVmJYoT3W75bkJcCJKrs4vGakBvnWQDy6U36Y8GR3G2SCoB1NB",
  "key2": "4f3w7srCSdJ9nNekQWgxE3VvMA1uYTUfCLoqioVP5LWT2mkdExdGk9ek5viVoTxibWsnHWf4ajygwunqKFRuVCbe",
  "key3": "3wtt86hLURUYeGonXnK1SxdE63uQ25fnQ9GNfMWbBZzpBnMRVfZQURApd4DGNxAA6Xu9GuXyRfj6iSmXWkrqsDnz",
  "key4": "5Y8v6rf1ZsHC27oQxoDwwmaxSQ6rJfrccZ2f7jd6JsccdQVYz3sy4K7UEDikYnvgKdyap95APY7HNDZFXB159Dtu",
  "key5": "489ZF92kbgr77oH3ZRsEaGB3Y6AAw7KVnxWpNVNCGB8BfYEUvjmVJaY2ruBqKhgu8QRfuGwPndpMdCM2xCFmMNS",
  "key6": "3khhn5JDkVVWLrtoFeLbvvyYbFXxxH5uJB41QDEdfVbNNmZHh93epbpV2HSs89k8qQgbCayNdBuQWJjkNr5M56c",
  "key7": "2rZFQQJNPTto2h61HCL8ACG1YKBwY1s8oVtsNL1uDonMn24M6oZhrxQvcYnUHGWK8wuXbfeZegwptt22377Kvpm5",
  "key8": "2apz8BUsnU59sxSCLd2omuC3sUUjyXyTXsqJcufqLGuhYJcb6iw3m5oBuiH8FN441hrmiFrny6hFK4WrQHgTf7mn",
  "key9": "2Bwn6P3ASR9UZziV7r5J5MY2gkA6WhpipADq9P1aRWtHtReePRiJYkVhF28oQJGLGWMfugUeHZ8x8CPFpXmK6bp1",
  "key10": "2yMaJHb2rqGAQEk26rCFNPbMJeyySwyebnUaXhCCi5Es65MU4dQYBA7fTxsDRDqvzQs26CDa8LtmZ9YbK5k2asN5",
  "key11": "5d816ELMSwxVxWM2jFyuctUDnzchE88pzUqFgdd5AiLTFGyqqoF2745tj3RRAtoBT5iWBzXVTVt1zQRVDGevJB1A",
  "key12": "2be9oNt4n2V6a6LT8fPQSPgV9aevtA4obg76EyFs9s7mppD9gmw8MSZQmY543uB6JydZ4z641ctxME7K71QiTHxq",
  "key13": "66gmSeqrNF5aR5wUidZGjUwVGNzxhsW2H7hjLkZjrhLu33gPeBapBW3LxiBqd8bWwzbL1MnTCXYLXMi9jZGhGaou",
  "key14": "2jXDeXViy1F429cG2QoE6H6YJQ5zA6PPA2FJ1ESEqLWSxw77pCX441RyFVrC4umU9q5AJG4tZNwEgbA9Sg45GTj8",
  "key15": "M8tD1RTxN6MxvKLR3dfD2Z1htPYHSoHz2g3ELAc81tcJeDSfr4uepoPW9Qpfea4B6GYYbCa5EFhKHkw4kfZzTvU",
  "key16": "3oMrUPjGtm126NrgnrDyWgpNCY6Nwa343tqh5jUr4tZE3JkDjSkFCpPtE3nnZgAzdUC1qnmiWkgDFjakPz886T9F",
  "key17": "9icgQZYEFdLvmmNgQtcDzMTmVKQyUaJFbwDQaoYrk7TGUuNEAJukpr8S3ofgMhud33mJWK6HsVyuC2rQvgYYTmg",
  "key18": "4hLZnp9AFsutZVXFc9qfsQekLcwbk9UF14LSyX8suzz5iVFnAQ3dBGLSgioyELngxQQoFckCVP84yRNyGA1PPRUR",
  "key19": "22aXb8sqGLRWJ8M4BY1XYfi29pMFxBjg4QCVkHjDQvK5pPnaQhTjtectARacvwHoseBLxdkdMfAJQBTfYiwyWNwe",
  "key20": "2XXLEJXBbWibzW67QpSw3FxVRKU74fjC2SyVeFtRbYsBNKomrZkNasVMv8FgKKVsMFzCFhq4PWrW23GWSqzQvRTR",
  "key21": "5ajWz23nCqk8XLFsDfSJf3d99EPvcYgArtUQkAJEmGaRfcNiAt8QFd3oj41hnLEeahayL39gx7BzXd7BUEDxXT8X",
  "key22": "D6KcdkSAsyofqVQeStvpbn2zRCpix4aw47NrwU6cRVTfnVGd7jpNC3yCUbuEiZQnYewyKyZoc2PSV2KnvmKGShV",
  "key23": "43YLQNUxyHLNs5ZahrASDJ65cnsAEbksFcbbzdS52MVSe6HBKkPzGmh6Kdq2Kv5RiDvxSjjk9kBZpQDG5ebK7Ysj",
  "key24": "2UPjNPPNtKK1qe9ALavy9UzZWkrv7wtBD8GKFfJDSPACYUg1E4vXDy2QYoGyH2NCS3eah1XiRfPSfG88kXbHMG9b",
  "key25": "3qVojoQ2Trkrhw89cEU6vkxYfmH1HuqAz8Ua2rz8craQ9vGGHeQetCVnsvTpTKzxaT7sD9yoGo7sDn37gWrKDGfg",
  "key26": "3kjjzgG5mn9gv9nzZQXPxXpwGdpsJjT92G8kRkyURrxMGCeVpcytz3sCqKfwgxPEUvxtZUZLnkcaHGGpgzq4BNTy",
  "key27": "65HTpbnHGosMi774Mm9ncAqtmJReq5PYtFtYTt3Aahp6MBQAj9rVuxcuojaf8KnFrKWWUaeJzmwRCV1fxaQh7bd9",
  "key28": "4pgWPSF8vzF2XpBN9tCAVnDLtagfR7g5Anq4pKMX9HyNCMDTKAxtxK1jHeduTW8mM9GtvqSNRcobu8uP5pYDPXPz",
  "key29": "4JmgLxAjRZ8jmsp37AgVTCKVx65f6GsoE6ewSJhcwc9xVtq2N9ncWrDqsSjQue411SQ5P7HnLCaA5jrVGNVxSSBp",
  "key30": "3GtGgtDTnZx8UieHMezu5Chygpb3ijvcNjVLKoT1bwyfLWKDT7gkBz3mJ2gU7PLqxQy64Lgbv1gBLBVHPwjBJjuD",
  "key31": "3NedyQ2dhnsTDpG7z9DFrZhMqmyN6t7TETUXmfUNfKvhPAc28EoCQ6wFazmELMWZtfSzETLBK3SEr2Ln7zPfxHSC",
  "key32": "3CmQ5RT6MjSe74WuUxxSxABm9r2VJ23QFebiyWWVdRstTwCEb9KXSoWW2HQUjzpc3ttFMnx5ENf6Gvzzr6zaifcX",
  "key33": "D7PAfNZ9XD7EkR89qLGAbepFJFHVDyKnB7h8cR3roeadtgT6jrCaExStVFa2CyUmrMSsFTNGRUYtka1XXx26cz1",
  "key34": "2jbthvUsSre18kw44avgoqsf42czPA4etiP4gRGQJUaxZGWKEpAaTBU3GAnawFx8GaLQraT1CEUm5WRvMPp4XZ8U",
  "key35": "4dTZ3Ux7EmaTJfnCHh8AZRsdq19rhTwa9sDKG99B9XXrXd79RHVo9BGYgCqw2JvfcSheNTwEN2REg99ovGLPzsrJ",
  "key36": "4hbKCpMBuRjJQvdpXEYD53FyEZ3qwjRyaQpCs1f8zRfFDPQ9a4FmdjzHCdyS4ToNgaoFbHKk5cKQSeSZ1x1kZqz",
  "key37": "2yBqAYwkh7UFQ7KPEGJoEeXNmNj4fWr4H4Ue72vLtpvJEyqovTKvMZsUQEH3zEpm33eEeKJTUUvH8bj9cLLH4nhN",
  "key38": "2ch77YDdiCoszmTkZKpMS7Xv9LPBFjkct4d3KPexta8RnHfZLN9hAa6CtuVwijmB9LhLLwSj2fD6iqevM6KzNXJR",
  "key39": "3r2eYCHoGM2ZaoF5DiaTAZKr2D6B7w1Hna7J4myrM5XrcvNpozFgGuyiVCZTDRLFXArrn1y2jqkSPtFtNhpGjHod"
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

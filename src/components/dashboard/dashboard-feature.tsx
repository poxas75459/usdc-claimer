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
    "2g1L5RZaJ726wu5U4KtU976HzrzNofTNFgEBT6ZZe8m4Bv4rcSbSEBP69j88bATLbmapx6MXYG6H5aoDNRiVvc2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLcHR9UjDvxXF5mGjWawmupSjTgBpsSfA2dG9RRJP5ya3KjGugZ12eJq9dG4sUDxyPt9aKm35d7VfeA4vzz3W2i",
  "key1": "RekMnCNWjMezjavBMmraXBM4HbrnkUDg9qdMwE38ATNxegJgpG9H93z1KfGZg3uJpoHUkVpEYmSoWiWmq635gxi",
  "key2": "5H1eSREYvXoZyJRdbzniJu58FowqCw7k1ma8DXznZWV1tHM4G1JnxPtpVS6N5B1R3bkbpfL92R18wQBhJHdrGgFZ",
  "key3": "3NQtqq5by4qYAAGE2Fz4u9PZ5M13MxdWe4jkfHmTRPwnE8Qddk48qy9dzN4vd8tee1XNeNcJUc8BnDsH1Yz8QwwW",
  "key4": "2WkLU3nVF2sB3Y85NcctohNqTzV5VbHJUKQkJNTc3KgP8p2WqmrEY1W1nqj8efJHxdxz8bxUg9ewAUMWVWhriaJU",
  "key5": "4TDt6Ta37hHUxKGZqFah2NCcR9QNzLM2WB58Z7gPFaxgoQsJjxTp4Bm3eNRqFJ3NEuN8DZ1ef6d639Xh3y8UHB97",
  "key6": "5qEMxZWSqtGStdJnp3BoPCydXJmdogM7FC7uQZg5v2bb9YHrnSYFebwzNbdrcZFEbEnaDdaV7j1wxSUzRX5VJdjs",
  "key7": "4yTYoQvbPoCDHzhMMcJDwPhdnvNb2ZDwn7SYShovogcM5jBTXc4stMxgKEPEoEHzYKB8Tuq6VqvV4Gk8yDh49m8K",
  "key8": "knvYwwBN9vJRoDiEYv2ByjMHEjpGFi373TM21mHLQHPotL3UKmAvyhuCMuoUZTbr5nfS3p4XF2xiSV4SkMx57au",
  "key9": "35MooKJ6sW9nV14WFdS9cEjCJprLmaJRaFSDtTx2r6W5cE8efHcxKKFJTiaz2USaR6QpUnjnKcb7wwZyi34AdviP",
  "key10": "2EkrxVL89aBn4QMtkm1UYQEPJeXTw7HxiLz1FJyTR3ESpSgYeiREGTn6LpcS5C8cyYD8QdU9vyppt2Vb8dVQ8FHy",
  "key11": "2yM1EGz3YNqAV73ERJ7CS4hXABUbzqMyVc23SbVsvG4J81Tz3ESwrGrXHwM5M1stdjQ5YGUNw3FdZzUdMay856bR",
  "key12": "4hembQE1ALLFgh7x2rxvT2ScuHZUKGvSZGVKN9tSzxgQZtdDAzQ3ay5RH8Y2aB9WXzA6TY6Tsw2ZYqmbNfnpRxDa",
  "key13": "2dceHJf4ty8TrbnTn4qtPUniW3R41nZYLQUQq6A6prFx17Azfo6g8PjhktTdmw5R3WS7vwL5BKCzWF4mptBn6D6A",
  "key14": "QzTNDimRps9s4McS2ncjbB9xsBJw5DRy7C8gWevzYH5D62QWQBzvPjfMffsaLT6wWZRojK4cdMovmNC6xW31gZ7",
  "key15": "3f7hgRcNhXXnz33bq7X7BsTFx6mc4WyT9oBVaYBBnGCNdbYfpeGeKJWaKJPxL8fo1NS2N3CZd2CLPHPWuo5bH5hT",
  "key16": "3cLxoYChGmHXsQqzn33zuci8C6JhE2GpStUTBgSSycoi1y7AVAMCUYaVcA5N7UFBsKR67djvyKrmB673kNHnXD4p",
  "key17": "4ua1eXNUHTChPxzvqTSD7hAPG9nPGoQi7nPth9gDvhNQP9BsbDJ71nPBLXuFc9VaobjwPzjQf7e2Pmr4yhPmhUA8",
  "key18": "5faybdQZZfE38G1jbwyosoBYRuXFd2i31mhL8z3CX5Lsr9zEmUZ2qEykQCrfjDg2MhWH4a2CyHAQSCYvKo6tMZmU",
  "key19": "3dyS1mRCiiXkmBHMzr94ML27k9CGNWPG2DHaY4hVjXF2uzuUoZAN1Gvmgj4zp5vbXQLPM9WoqwkJPvYEbqqQp2ou",
  "key20": "2G79aU87pzv9eZwrWyysDzA5LkLnZEu2QVyDjMBZ3eKdHLDjP2Ys8AqxBwMYTQtgbCjzRHL6Czcm7N4MLvDC7kSK",
  "key21": "3gJhMa12CPbRgzkvcgo8PgadsNbbbDPis6HVMPMHx3Hjv6GVRiRdkEyAAKhNxYbpRsZx59MtBhukUmorPiWAimCm",
  "key22": "5zDWpHYdMkEpxSPcZMRVsDpQrcJjfh5sbBTpczejcYXGj5BZaHNLLdhHxw3oS9nHBjdEpiKJJfAT5Yb6ZayNsR8j",
  "key23": "5d4RqtWimCAb2xAWCtSXgsfe7LwM5EahpzAz97hPKheDCu6jLbwR38r9iS3uqm1hD2JhZCb732GEdxSDE6Z3Hm3X",
  "key24": "3WqDLng4qTfe6qLoicaujpy5nuujSbnj6zw8BRrj7XqXT8FmispxJfhee8vsLYrRVH9XtBqNz8TekjdHgMGbkUW7",
  "key25": "5VUuyDXUva36qtMZJDv5aLm7UeAgc3NrBjBDgf87PMCtJW6umqNKuMQ95ZFboJzUbJeFZrgUN4H93ukfo5rfSQyQ",
  "key26": "29wW28WPGekjq831BKWhppJus8gqhXEu2Yk6LrJ8u8C2r1nzGbckRhRHHqJWzbPKwgjFFJHY1YuDfTyYzmJR6kHU",
  "key27": "3qbhuoWnbNouCseX4VuNMn5Cpx7FNiv8D8brykCxr6Xfvm9bRmZwYxseYSWR9YMPWhwFyhWnwKwCLnCjdxV5myMw"
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

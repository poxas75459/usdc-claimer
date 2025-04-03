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
    "5av4QcnHBszFjTreaofepYYGExbLzT28B31LVtRZZygY4vLfMMoQsyHCpvj6MUCY6qVrR8yajh2aTHdUNkq9JfzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3134LMA62NxChw6BZS99GwTzFWHAJUj6B4we5Cz9Zzukt4FTueaPcTiE6BYjw8acWaud8UwFcyndGM7QmZMVmkgr",
  "key1": "9LcKRWru5vU1c7BgWu8wkjkbwwcehocq1V1naWqyZ4r5etJacGUdJpEmGjGvUAM3GDHyptV7kw5vDuA4eDTz7Mp",
  "key2": "2VwUj8ikENbWXHWTp9BkFt28nFrUDavXzSed3hvR3cL7ikXy5eruU5FNF7sPo8AvagdY6VJUxqwGmS5by7NLX4G8",
  "key3": "SQu22j8RtqMTzjNbM8AhHG7uDPfemnYFahot8E4pYHYirP79ceLBJ37gZ3S3x1EbkG5BH64xjjxn1kgvaEyXDYk",
  "key4": "2dcTFeCEpGswSLGjnutp1GHCcBx3Dzrx6qDmzi9zxiUBwKEm9EU8Tp7U2L7pA2gHzP7AtpWRX7at667YArj4VTxS",
  "key5": "41UPV3qRLQcCa3XmfvRqneNrXJVu6GBnJKahqVGoq2K4cQmAHw5Gx2G5NwTvFFCcxZmXPEUV9u5wvYaEDRjWNG41",
  "key6": "5gYSmds7mAHEinCwYquZ37zwJAwvPDyWu2KXFTrAUFrSWzFjdfLwUiB5Wmn8EHdnGkRy8axJbn9ofoLFPEziHZUn",
  "key7": "3BFhxugYcytCDBs53NVvNGSHVS689UerbaXvt2ycHxrnAGirQMPgNNyWgyRumimTy9J9oZqGvwLyqdEbHsZQeBLw",
  "key8": "5Yr3GN7Em6iWkGi8YxvM7HMVqhXreCBcwwDBt2U5JecWxcVwAdnG1dfYEmjp6QaX1cvEyKZRTs16aP3TU2QbyiTD",
  "key9": "4nTnZXm1z56AhYJGEJb8obnybx5KGhkMbpd9U1M2nRS2skGo454ZuSzAehCWQUhET5UcxpRYuh4gdpcKW51vAQPx",
  "key10": "5L2tduWjdQEUyqdhiYisfhx2HfcLuVYzYGpUdUCjTaaDSDNDESbDh1tJNRkZATBuyAnw2uu6CNvJ7MyGAe1E5zEd",
  "key11": "5WdhzudJGASL2yzF5Nh8hJGzrG4gfCefH1cZXcsTbgkMQJJZDvmzMbHvjkZDCwJjczQTqtbFZYuDTwwmVD1hUjud",
  "key12": "YPdM7QTxP7qGgBZbnokPQ3szsdmq6HVr4pnSV1CgNLx5CvLwSnJ7iW7vEgeY4ic3bao6kM3v4LZYztL5NDsjsUj",
  "key13": "sLNfr5Ko7dwAv8DpRSMZoZA8t7TzJub5Q4kpfnNwQzxDoEroeM5KcgUmYYfMVYSCVXziVaJ6Sk991EcsmukJ7ru",
  "key14": "4UkLoEoFi53izvMKi9g71kuehr4VRWaagmfyF9ei2EMaNDLRsPrYuaV9M4zN5VrXw42mfcDixwn1NYG3Z1faoyva",
  "key15": "3qMXktZpa6H2bd7N9L635AL8iPa9fBZfQ1opt3hf7qfzNa1nsWuNTDWPUPu9x5dYmKyhDnWJKqaafLGQ13UuBRyc",
  "key16": "21Rx1BxBcfU95fLWTbXJXSD4qqCTXWmSLupj7Efse6qkCMhzDKBqfoPQwbsSYT7ar3A4sjhen6MYuJ3y2WohY1Vx",
  "key17": "3ejQ3ZzWqnP5bBnq4S981uCqduMf8x9L8SQse9D22xLJBHVN7EVQ4rLkLR38Pb5hH6RHr64a4VBB5CSqpyS6dqZv",
  "key18": "4NnSUjhpx8CAPM6zqPCP9rBzGwBajF6c1f6VwrZd4MRFoFXJrWz99wZotfY5DZiJJdzur6nN8XbR9ejAWjCAVK3Z",
  "key19": "4dbcJhJcBpFJtgxeqNzsxfsgG5i5UJ5aAZfLKftvH2Vo9tYzffDqQHYhgm6VrEsquK7LboDUXVxDiPmwCPRGKTfH",
  "key20": "4BcKZZzMin3PXevzCLTS3kG9PmjkWQEyyeed1uH29AdZmX4qC6bLSFLQW2rTnZyWe4yhuUg7ECoswchdZHvkiJBB",
  "key21": "8wd9Z5NGfD2Tj3zfjvPxxxwroqvZRjdc75D3szMKNUwoLnGKkeo5buWfAcKbz7bw9kkE8ZyfA2YSVT98cpD9ubX",
  "key22": "34w2T8NgDV9nxSemhn24vAjKoYsbc9SY2w3trErtja8UHXq3vgTusZc3zPt2aMWZmU3ccmDKZrbEcCENHrv9AcFi",
  "key23": "5rssrCFZXxJHv5QMmDnFUAL2MugUonrWvpKH8QhSarYhHU2yGzXqxy7KYstZoEGw5HQfDS52i9kc5M6LhpWSJaG2",
  "key24": "4VnChjnd7eiW2Nxf5U9E9SLT5sWAzvkRXQPwqnJ9b87UzF5RQ5Ecxn1VgKqBuGmfj5bnmZVx1vDrWa3B2kvfvgRt",
  "key25": "4fQg6qGxpsNdXLBP4exqX52WAaAz2pK2aR2f1X1anoJqHgxpgQDC82B7XyigEoHfmzDC9p2D9y5K1JZtxZ77jtK6",
  "key26": "5egJ8poMXe8gmgdFVLrrQyrRD6X7YanMd6LkfsySQ65cmDfrq5YDHddJUF27Xga3u8auZZYF7qoUbGMemhcrcChg",
  "key27": "2DN3pwN4Z4B73CYW8q7r6BWWWpZhhvf7zSncEyCxH9fKRcoexFVgQpyqh8pfFnoYx2xoSwRMtPHMkUxwdvmWjQJW",
  "key28": "2656HThHafXHyDjkicVARyATkk16HnnBg791qJ5HQjrGxrWmMnC6SnpABiqnSdt8RSxbsTsbBy48mo3LKD2MnEiP",
  "key29": "4Gry5tAK37XS3g6JPcJaw7KBKXRByAKSnRsesr4HRFtPs6pexBJgVCZR9KFj5xh5EDSxEksZUnMv6QdY18hwvdNk",
  "key30": "5uWZZCPQqGf9iwnndWkX7soZE3nyS6o3TxTeiBxP5tmGweewhQdHjYWq98UwfCwGuXH4zsu7HrFjrNPi7LVxPg2e",
  "key31": "5yvpu8augjkQV4nwa6ixUARWAk1CutTght4CpfDTN6tw1aadVX6frg82AGiiqkF1ZixKtdyf3fWGBzQV2J22EJQw",
  "key32": "58nJbFeKWk1EBsHtv5QGdWqBLQZzeqwVkcpjjTqjvuGRni5bX9PuP9Pok3e4hn7Rn5BaFKCjUpvoUCYuzT64rUPC",
  "key33": "3yYLTTcfTx71AbbZdD8sDq1zcbJhigxG4eeWuF1WpCNt1QCs7rjVxPzAVycUF59G4UeVoSxrSsCA4h6Lru3miaSJ",
  "key34": "5Xue6EciHp7QMt7ktziWfibLpQX5LmDtbaiiNmY4abopGEcgQdzqqZjAN5wXB4Q4Buf8tY3gYH3YeNo72FxHqaAY"
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

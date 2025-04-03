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
    "4wokPhckcukG1Np53PKbU7GYWrTdsNhdvSueqQ8en22txYhVKrWh5WBg92yXKqPXE3imUMXtW8K9cm2uNWYWo4cx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRMF426siDWA6NYJyS6SpPwL4QMc7ZdDUP4Zqy6w4cmgtMoMRUcuiSwtDuFQbXdQmRaZqt8HSsWrC7a6JUhxJFM",
  "key1": "5QB8nK7ksVDyCc83UgU2UmPqDPGKXKACxZrCetfSVY4QRX9sJ8Zvb22As4SsfBC1y7QC1cU2npKui1n3F2ozCnic",
  "key2": "611iVUFgKrFBz6scHaURn6xbhPEmVwaqyWRVz4jgWWC66CidEFqrxUVGDSDphLRTXSFxkLB2nFAQvqAk1fpAV8xu",
  "key3": "58f9yrnbqAahpPeoMv32Yhv3Tiwd1uvrheQVfJabsdFwqnQFrUa2LQEX2qrRDcKkR7g5oAZwJkiQ5eF6ERwYiyqw",
  "key4": "3ZnhgFnAEhM8DBD5mKdAXagJzy4U7LpwFPsA7XMezxBDC2YCjn6k1uBYjYLbeuUfLyiMmmdBzN1k2zzuRiJMcyuE",
  "key5": "4ji7H9NgdXbJ3KE3EsTxrkvvbEhCdM6LE5AL8BN8V93uWVdtrA2FnYXExSGu4HQgHaF7nuMwzBxot6qAnMwLse2v",
  "key6": "5527zrt2MHu6J59myAmVCKM3bQovpSeEzMib4DuSNETAeCarxCLUz2dujE99F3udaBnBALnBWFyB8rVJkaE5bWwM",
  "key7": "3sbgTb5NdgqUz4dBJegfr3TjQTUKfdnznZPSSFfwVXXmbzz8Zq5kz696RwzwnPkz2Vno7ELuQE61ZQuGA4Q6jfS6",
  "key8": "EcdTyJy99BYVNanNXRdwcTQTMRBmBZYtcNvEh22BDnpRRw5PTFj5Q1PxL8NTKoiiRYoQ7S8Uvfq8TaZsXyY5UJp",
  "key9": "WjrRUNihjHmWSALnX72WKBFiis52iWkc9UKzvaYzPzoTAkxfKazyGaWGfajBfdmkZCbwEijtaFE7yCa7XxGFiHy",
  "key10": "3QJE8agTQTnKiQ7rvc1fKEWqjudgwutjvWPe83z5JxgbahkRa4Lz9A9qCyS1CweLxoJXeHPWFSAoQhAGRZ2Foys3",
  "key11": "2fimZRXyH71DyaWhCJFX6cEEf567Lmwqeegt9r1ookTUs8JMHJRKtLMp9VN6kXfWa6QfBkyTz4bY1HKMcTqEsAKK",
  "key12": "3HyrxPJw9cEWwK1Zx5a33wXyMzPkEPqenyJVQfgJ5usAA6pZLTEyt2RoEXAKqMhnofzmyNJ21ApQTtrMpaaoMAec",
  "key13": "2DYkDYpRMzXWvDBa7SCpdH5KwKXFP8FTpoHH5DDjvU9KP3E5FhZbGewn2xVt38dxdfdKqpg575p3cbG5bmS2uqDT",
  "key14": "2VG59edJGhSnXVojGw1dfMvJB6Q5xaB6GyGzDro7UytSYCTkdvFPVQ1r7wxPAqACAuV1kqdAz392f29iRBaYWQdP",
  "key15": "5hRXMERbKnRQPrtUpUN4Rms2ngx3nLh22UZXxDs2ymMN8hQJ2efLqzacjpcbBKwoco9nUThcyHQdpdqAdqv4iMVo",
  "key16": "2CGY1rBspRQr8BoAFazFwbMGJt8c3FNnnGWGHk3UoiuSofgbPxuZJ8SEewP1xmYCz6zRpACUjX2Lfqc9qXBcdzSe",
  "key17": "M38awoB6BvgCRi3xKSreENks5FiVd7KMjXbUb6SbBQkDm4oCi5LwFnH14CqRx9J294rbfNcC9DQn1KNPfWvx4nS",
  "key18": "2W61S518bQ5hKRQ79YTFb1SP6yVWbm8PSS4jMqCx3B3iBKboRJDZChokBWjPEBzreaZLeCTwiQPnWHxVteiV6Wmt",
  "key19": "5P8AZT4hq5THZ5st8mdpTWURV3qDRDdXcBeddYFUyznrXQoucSM1P5dbrHuzTv6KhpFsenssaGiYMWsfpaideye8",
  "key20": "5PeGhbC2Y5QJhwLE58B3V51yfYmqZU2VKAtzVTAPbW2JwzCH6qBXhFPnYT3mLbkjciovRvJxx1cSJ87uKwGvQ9R3",
  "key21": "2s7PQMCBv44nSvjTFQFhJJfUCNG7DqdUCB9DXPHpDAciqfcNRbCo9TJmcFMZnLKb5YqWNNXhpNp18qt7kUbSzMRc",
  "key22": "5BgFyNYeo7xBBcxLoZwPNUmP6xon9vTUFBJ2zkmEk3hKbUGY2ErPavGbCDBK1GCZCNMFPesq2hYs9SPLoGneQjCB",
  "key23": "2o7s9vghHQvommESzgjiaxGVrWbaeyuLDsqPtAJsEjZvqUJjaCAHrs4zSQAF2Ua3pxv682WeUg38GkzFFQvLYiTx",
  "key24": "38uGWmSu5RR8abDLCYhS2VNEqdWSHMGxksTSUnYYKFi5Tcbr7aiDK5A6YZs7AsEGpNvoPgbc3DfrAxSHSUCgnsEv",
  "key25": "3CSEtPkq42V7VBbrvJtP9e9XJNTXJtcERaqzjVJBjoMwt4HiK4iEuo8L4WekKjCRaCH94UygoJPvftApvyXbH87",
  "key26": "35gxs5WWKPgozLt2P8Qc4FsURVDUvfZxRrc4BzNmzN72BDgbjmPfcaYUvNVci7xCDwacGZMTWtR9pA6apsgFZYS1",
  "key27": "5bLfAYDd3an3PsRWMdMt1daNeteuuwGr2UVzkfKYy56ADJoW5frnkaiBerbUsVmWNncJsRh9beorditKmV6AVGEW"
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

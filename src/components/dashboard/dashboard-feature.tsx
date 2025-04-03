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
    "22n62PA5eLLz7GsvBuzcMs1PYcGf7dfkzuS2f67hXyUrqVwwqJr9P8WCk8EWsJuqGSyCiwCeCSaQHcN6q6bBaPLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gmmG4rAJMS8UMQPTrcS9aLKotdtPxQ1We85DVQeGrkf9ua5mFeRFMQHsWypwrma3TbVfDiS6ycH8ksf96TBn8o2",
  "key1": "PYtxsk4Wgd7dFmmy5597BSGUgzuUMH2XvuHEwMya7Rr4YKFUPTUD7rAkEptm42iDmzCS8HFjGaBgzGQ9mToQB2G",
  "key2": "4wutHYbU2vzNHfJg5ypXvSdBv4B6WofogFN8FCbzYUgWWoECqxbWVNN2Ba5sNavatzCQ1wfMXA9EnEvRkgtqE2ti",
  "key3": "xPL3cwXRHD9R3ZhF6Qv53JbBvs5vACw4BccbxhDbK5HsD9eW8ahPYXhmNFSDprRwwjCWeEkPnW5DeRbq1ngSQoK",
  "key4": "3bXRBARbCFFCJUHttZf8AaFXt1F98N2y4AMrK6Zhr4ScaLVQCmtNVxb3gaE1GN8owB7ZQjpikr8sjJm13SxVS1Af",
  "key5": "5sx2pBPV65UC6mfgVuCdAreio6e4XiduFitM8pujbYmBcANjpe8dpEPcowJdiPwXeqwTSLgLQu724xsamABxA4tR",
  "key6": "3rrboaAaaPvQXwKP18Eh3iZb9H7Qr3cJuPKkvLvnsNPbQuDS71rzaPvLAh5gYMP6wK7kDsxZA2fDF7q7LF3ku5qC",
  "key7": "2M166NHH23L6nhiBqVMtBFiDMcihqjGXHofarPH1dAonAsoKZ761b9jgqT5g91X7htkonhM7z6vJmwn8NTWMq1hJ",
  "key8": "3ABStWYLHQBgf32u8yyvuqefxgzJCJAmWq8EqiCujfVEurwWTY7aAq4UW75E87iJP3YBgguZKPqDaLXhkEGHiqXe",
  "key9": "5s9btx8dKiMQncTPhikswHi4aKn7LJudeuBre4DZNJ1XdSN2XfQGi5GTVM8sLxV3RQeoJQw8pZtxGFtGwMmZDo9E",
  "key10": "334TfHb3YVaFkzNYhWqik8GGPinKfcrwjU275MLTBAwkzJTgE5j3tGnpoC4gx3ei8jCG3EiYvFDTqc5Bpy6g12wX",
  "key11": "5hBEW5yzMgeVDQh4kWcMJhC6CHBhHCxrKzWuVpMD1z5WCx9KfLBKpa1nrSuX3QB2btG5wzMCy1tW7vyJrLEGUx7U",
  "key12": "2W8xZdsNXw4WbaeNXErUYzShGZm2XCF7FYgDm3mfzGK6kz4snZz4w62osbYBZMSVPd7P1Rt3z5JSfPr41L7Nm9QB",
  "key13": "4vH2GmJHzweQFdtpP4viP3zteVoLY1Raiexndi5Cnnws8Fmjmah2UDerpEa8y8RTemhJuX1Tz9szkaimJoos2QGm",
  "key14": "3Pqk2ZZ5mP2XmXFCBsEbBpKsSYBLHPPLKSei6F4Z5PJJLZKjd5x2XXmpa7g54S81hMysbBgrU7BbzPtp4e61cgcL",
  "key15": "5rhmoqT6p3cuQU3KXpd7Wo8mmcmBxSRHcSZ18vhotu3jpUUbT745m9RSSF4hJMMxZardZiPbEzBT1kdf1FoekHdT",
  "key16": "63Dh3hzdUHATPVAz1D9x7CjtYSuHWZwBsVCUX9x2PwH2QiscW4pab3Tuf8AqG1sjRDEm7Tb5w8wmodAMpiRUMNbK",
  "key17": "2KrrknQPQ5GchqS3DJepN69irfh2hvc1obvQnY88AsH4kheF1AT6n7sH6SvPDo9byQyXFWTsjbtUEKuPBw166fFR",
  "key18": "3wfeVXHKUWTPLaCBgF5nL1vT8ciz3eHYQwP1dK3NyUNCQKe8wZeqyx7edEpV11BW98Chcn31BUyVLhu2wjUtzhfi",
  "key19": "3A3H9WuDnSKqhrFRbCiJgvbwy9mtWD3XnbrvtpGo2PmrPccT8psb9ja7kheSEVB6mGmiLH4enJ4qsHjv22kscauG",
  "key20": "3wFnvzpbDR127pDeDmdKyDeNnwTcULZyYvNsnh22GRKFSM2kXGTMTJcE1SRCE72mudSxVDgyc4ndFc86aVmShh5A",
  "key21": "25ftSxiv46Gz4Tm7JgiqUB1HucJZv7uvojPadDJuK3GGL4uesa88DADEYnrh3a96dm5KGCQQEpTp8QuAwfC8R2ua",
  "key22": "2G8o8kgF5e8hajwSEnAUqaRnFeuuBEWp7MyGpiJVMaHiS7WBW79pqW5hhhX3gem6adHRpHaVcdaJ7J5GVi6AM13J",
  "key23": "4t1EXF2dY3uhWTe9VAAff6ZiY98kBM6qxY9WHS9oN8GpWZTwfkLFrqWy4bb5qzuM3Uvzkv1WYARzahRnw9wQUNc",
  "key24": "mCSaLhX2djNMtwchTq46ZXuvZf7HDUbiKQM47yLu1MAEEwZn69GCvZRuBWbRF8KVBAQhaoUrnsXmBRKM7fgy9G9",
  "key25": "5JDomfYCw7H6abBJnHHZJUJPQMsuEr8YDXHo7CwV8Gmm3PNi7DhhsV7fKvK16eZLpqbung8MzenadwoRqtS6ehU",
  "key26": "uPftuHGBm1PjFQJkXENauHWqoir3hXFBMZsZ7LZnCcN7ZjfXCFxjrudrK4wDAzJPrPLDhcdfHfrVzUGjg916xpA",
  "key27": "5sReXskhZW66aGsU1XdGTB52RHXXXcBagv5QNkUpN4K4ow7Ytj6sxx1sHiZHAqRkZg9CcM8CRbwf6Bedxpjr3hwC",
  "key28": "5Pf9SYF8nTynACaPCsL6YXz7LBjJ9wVSwfeieDYzSfgiuwCqhhXcC2Y6mtPWobq7gJCJF4YEiv1gamgyZRTynCd2",
  "key29": "3aNCVffY9HJywDR7PJ6iBNKFuDGG8P1cBibmk2BpZr5CbJypUyKBRRngrL3886JiS2Ft9zbE6zMboaba8Pyszvvr"
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

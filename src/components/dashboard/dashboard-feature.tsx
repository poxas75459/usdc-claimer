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
    "5mf4MpKcpxhy1EtKfeCNCD1eu8Qudjj9v3V67KVCjNU8A8Biwmhrbf7W9CahtSWgWecCJdgpwATuKKTbYaXfbcKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JhJFLzJwCHeL3YvdfaF8xktZyaXzrRWoXGoxwgEyQfi4gZRaPM8qWfr9b3BHkVCAFgayU7cdPSJswRNEeg8XWnZ",
  "key1": "AweLsa5FCThVU1UQCFvianReTCXsay5ybQnKUfDMwHCnnyouzZVm6DterZ1fWkHEjBgWqHhWtdvJxf4tuG9AizA",
  "key2": "2rWaZzzHUMQ3XqQUfwGxxaMNznDbEemYgJv1v8p93exn4dQQTEMhTaoHhBQV1BLTLn8gkVLmteZLWtWLhaTXh65E",
  "key3": "2jGzLPb1Ckf8p3hiPPD1NQJk1QcsvtLEQhZ5LhQcTEALhcpKCokhXef8AwybmV7a5LPsKbLD23cVRvqF8dkq7raR",
  "key4": "iqGTkxAu9BSyrazQtKHpEKfm7wEZqrQFjQFDxZqJZetTYL2gkkWocdbJgSk4WZxH1L4FfAjYni9fWRr7PrCoSR3",
  "key5": "rHuHLVEXzNQThovehX13crHZfR9Rgtm6DWj1eGJjMVp8YbVaNfznChhFAWhXVYrSiRA9957i2dKs48qYujirwfA",
  "key6": "4dvDAzFHdmP1Doi4Ht7hvXPL86cpXfJkPSXr5C5aa1DbT7Qq2tMS6A3qVtiDjrqFLcsPtpEA5RyoP9b2PLAevoa",
  "key7": "66G6efeauynuSNS4MLsqBaNTpEgpBW4fnL6kMZZFYbMRrwfdViUq8Kyq85WMqfVvU8qmJH1hj4dAzGj56qeLCb3j",
  "key8": "4cFP3qLEfcSR5egjZ6iXbx53uLGRiqKKJx34bThCruXg19fk9ekKDwQvCvScZ4CLFa7ajnNpxXNYiG2bUcc8CHid",
  "key9": "4QsYiPSgL111HDDwUmCWMgtTzWCmqJSrdaER6Mf1o9f9ARZikuzPAtqZtuDJ7FGSp7GWGYP7b99cTWn8JBZhZdD8",
  "key10": "4NLKsDHDNu4MMWk6e1xVuK7tAoLxgyQmsUJRgLRAHkvyRQevtgR1MLYaK8So2Si8hBQS3sG9U85EVr173MxJ9xA9",
  "key11": "5Hp8NXorZYsd954AzsNpsSYrcz5CByxkV6DJvMNWck9KD25VhBJNNPioqtHN7VrpFaEVDJUrYXVtcvU22EZT5EUc",
  "key12": "2yorrFRAj9PVJtb4zcEJAjcNBSpdGENydVrgekVwyPxMGDXfmzDFQRw1S818QS5vFbysjFgt62XPqLr8fKmswakv",
  "key13": "31zDzWtNVfskq3FkxARDRkz47j6vTTeAenqVcqVD87DbmQz98j4n3jgxqgjHzaYHWakRRqDrsvHjnMSQJJW7cvty",
  "key14": "5KMGZJNTVYdirhMmmBqHMNQQTN7bJyNaGBmh2odjCK5vV7rHAUsPND9yQ7BzvEBmA9qTV9TiR3Va1MA3ZTEoho6K",
  "key15": "5CAW51dXFSaZeqd4FU9bLb9Pcc3EEXoDzsTEcp7TjzQymZffqFwdxPkX4dPyzN3J1TSqDWFFko9KGQ28FYpS2FVh",
  "key16": "4vK82DisibrrYQejyUTyt7WY5JNsBWYc9FTwy2ki2iDN9dEjvQBeKF4DJCz2GyMAMuctXBcCKgrW6QXG2AXkYbWk",
  "key17": "4wyo2r2Qa3bs1NoMaujSxszVB1swB24m1RCzvmZCnYnag5QTXarFWEHdaJKbTQJGBbgqJgMHtU7sJchAYyggfpqB",
  "key18": "5iWN3JgG14xr7QwF2sQD1ptmSFKvgU3MM3WrgqEFpF5ejeFAsot4SGxMukQDy5fSN45PwnkX4ggREbEBPqRxsuqT",
  "key19": "2UCgNJsUwmFeSLe9XqgU2mL5c9YFoiFw966HRhyBUKcsEmSM6MHmM6jx8LiEDH2aC69EjZUjk23dQaV226UJ7ioi",
  "key20": "HVRqDtkV1Wtppqq174uh7E6mfvEHx3StvHVTbHDtHW79vRzL8qCV2t99LPPArRbFSjjex3S1kR6gq4pihEm2EvT",
  "key21": "3v4hQZe9YYs7TFVgBYQKxJdnGsh77k6Fe74BabxtySE6vxHNEpfZZvzojeXYjqMDpe5K8LPfRmTFajjZrmMnMrSD",
  "key22": "4PNERF33CkfVuBcG29zbot1VpvrW1sdVbwdfBPSjJvtT99NNq3QTYiLT1Li6Nz6ktQv3wmbRRnTDpJtonZoBYE64",
  "key23": "3sRinRL9WmgZ6Cow33FdkUKR7UXQ7s5WbTuQFnRWFH6Yt9p6FNnaz3DM4D5V1uRUtSLq6seU9jnPyqcxPpzVLrBm",
  "key24": "2izuGwFK36qpTJr31bwutRNNwBx5yMToQdqD7aN7tnJnsqsNRHECwCaznZyCZNTMrf4BQTPhXhJGvzYxWshensFC",
  "key25": "3hMAeaGe4wmJacfKJPYzPWY5y6s7TMMjHMfky8Da7NykkcJRzPJwuimjQmDSBRrA7XbmJnHdMAoZ1bTLAVDtsdPF",
  "key26": "xPdGqMZUVPfzESADJVWwz1pgckELZU5ZeKpmb6xEK9NC8MSPt37R1xZ9tUDLfaTy9iSEx2WozW86KTZRiDwSFFU",
  "key27": "3wNP5eQ8sRTAFbZHFk8B9bT9eC6r6KqFSuttkSnHsDsv5kKPsYebJar2a2qQYb3CXYUD5iFrhuz49xDEQuHsrwjG",
  "key28": "5aMdvDfj2qAJcieb6K6JEyrfbt8ejRqk8wHQkkw9FKPYcvXoHDjrNQJZ61tpAdshEwRNDyHUukMGjX7PaaZfh6Jr",
  "key29": "TFgxwXjSVZPHMk7Q8WXkGeW4EugFVtTRNTEGGjrfd5ZzDnqCQDCpdeUWam4UGG8xLWXm3sfEht1HMBCrdmsdFyp",
  "key30": "4VyJJaY27Ww5k2o5xc5hexMZdd6t2o2tnEgeBF9V38WTRaeHe1ZGpw6Ai4enfweWHyVytFC7a6fG2Ux9mGbKDDT8",
  "key31": "3RyWoMAqUb37MDwEbhCfJaeVpttBEtUWWUK1RQHu4aVYBXrGXQGC37Xj8vqBmwHE3u7fwzZzTv9tw9Vcu5zAM7eM",
  "key32": "3f87ikukWKLMRuMhKFbuduntQLdGKT3b5DJuh7TLjxpLcSbUvNneD7UQPHJWwUBaKsnWDjhzxuTxfkzhQxCVH1RR",
  "key33": "GSFaGQVcRjBPC7S57froFiFNhFCVCypYNai2QBFqhtNdmAB1gkcT3W1cwFexf7iobxxhynPs5qhHhWto3J6HmyV",
  "key34": "5vuTMdYBVr5Zk7ApeW89Q6Yg3ZWDsk3sUoEovRxcUKb39xFhGe64EjNQ2s5shXzqDJUMJnhqXy9GdCHLP3JLVDs2",
  "key35": "2BvdekiCGCvGDuUg6b8bUntQkA3sLTaHAUrMsWHBUGZTug8bd6DUYZSrJtHkYrARnG65dw34toZQjYxNDTiQN1FW",
  "key36": "3hckNaU73pJEu3nviUGK4Pa7EbkdchfYYFQQejnhNVqPneqr4WfgAiKxxA9xtp1XBGD8sotTtbRpFzGMKveTakwy"
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

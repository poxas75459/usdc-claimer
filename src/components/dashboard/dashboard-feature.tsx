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
    "5CobatapoiRSGNnVx3iqpnosxoUHMgj4AWL4QtuJxhL3TXc9LJVcJ7vNaKRJhaNe8oFeNKNG2eE26uE1iDvMPmmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhnyuBEL8bGaFoPdWgMLt8kggYxnCqcG4LbGSWxeKW2QL6pUDtPYyjvs9AkHtW5usBG4wWpob7U1QHXYAD1Fc6h",
  "key1": "2LmnuRL3KctGCsEu2hFNV1emgHXyuLaVuTFSaydekmCBF6incAQa2QS3HKEg115K7tpydFr89gj43NmsjiJQKSFt",
  "key2": "44p2T3aPzjEi731kpoTH9pkiAoXjwY1vMBDZsQR8oHbA9CvZ72zKgyHbrhhakcKjwotnBZZRxXYdgBeRLnPSVvTU",
  "key3": "4nZXUCESQKBe7Yn32odrqLF4o5gZToeAzBRNUz51YLxQv7nWaKMT8QNuDUcvZUbtMp6rtzgrBZ8AShYrpN6aaApk",
  "key4": "5Uoe5s6erHuGo3y3YsXgzLG7pSLo2Z1FDsij4uFW7paZ2dpjyKq7KSLEeg7WNBCiuEyUqV2FzSpZWeGZD9vKVVjt",
  "key5": "4ToxNCny3RvDb1Cbcw9SX3ZTL6cDr6B4JsYwvJeDswdkuX5xE4VRpcFuQyxDMGNezcaS4gzA2YxupxdPLc3wKy72",
  "key6": "5cPTnj1Lb7ancs7h2wXhMLXEfbRkP6JBQZ6TptZfSnq1kyfchN3SpqXzzrcuAJUiZqn8RdSQkTmrwtn7in2PzbGB",
  "key7": "5HWRdfTWbaEwUjzZzNFUmPqYBYScggbxiGCw1gTEQYXv6jM2pXsNT8gKgoosp4E52wkXG95ALhwXu9jVRL9CESdB",
  "key8": "5MWxfgvXRskGCQSEJ38XcHiPVmYPMD3pkKjRZyTH3bfX9JNVoCz8iQaW4S2yrigJKWnvwJb7NDVFNjEwx3tVC7i1",
  "key9": "jVCUYMBh3v7eurC75PQMUxqqNNfXNK1jQwdAz9ZpMBKi7FFT8266JuPc1PewmqD5PqaUpdYhHQYTJLSGgDQtEsP",
  "key10": "Xtb7PZUcgvQDM1YPyffovinvjRgy3uqNVdDQym9gNn4Gbj6N9zPczDBzVUaKUb9RsEkXTfAV9GL4B5Nv9qMPAfE",
  "key11": "4TFuJXyJoRYGY1h8cxHxcG8Miw698aXjVgtwGQgmG9GskaFmPxz89kxwEXR6VHTz3NM7QEaQ8c8XemZ1HmvB2mZt",
  "key12": "25TQ4n4YPNu9fJuhPacnTn4VjBGfQJdnj8G8mPq7V7yG41rq7w6nnwXKXWeAjfDt6hVxC7imvYyeLiwqhXMomFv8",
  "key13": "32QCdURq2FXQ3nHJMkTLb8f2XVLfip3VRyKFVtV1WRibGjkdddZUbGWFrchkcxzhr7qWfdN5bXGR9pMU3G4byfTU",
  "key14": "3BsUi3o3GNmfHC9biydBTvM3GpdqfLayP7xGTLqZagusS5ykFxsJzSYwjvvXkWQbpzw4fDE1HgyeFYxw1yNtGwFe",
  "key15": "55dRPbXEFiwADPXg1XVgmLKKiUxGMsPFzyVsZ5Adb5fz9rUqYeutESd7bes1YaFGpeCfWGU1uvVQ1LTbRE96VDCH",
  "key16": "4X7rE6QGvseAhv3gHcuS8wASYJrxKBx6yphNmL3Y6BWy7BLhipLMeXAmXki4SpjGWDZZ62UGYsBoNe6M976QD4U3",
  "key17": "57kJMwwPUD1yCpfW7R2S1Fye9dvN1iXUcjbT2iRf6ZTvAkm2UGvVCFnJAFy5tyhNB91QKerdRteDEXEzENDoGrK3",
  "key18": "3MgY6qNPCTkCzKVe7Ark646ZJ6u6KCcwWq4zsYhxPwrC5kmpF8WkSWCHSSRosNK9drsLCikbJiNPo5VzTJetHhyc",
  "key19": "2aTqFxEx5dLag7hC5TqC5rtCVZxeZKMHZVVv6NZyBwPRdAUb9aEkXmmtMMPXePbYE8CSPHggPcbCh1bebzvASSHV",
  "key20": "cXGs5PaA2LHZzS8MWwXqERGyqtRo8ohLNwT3Q4A4nkj3b7p47zjT7E8WsX3JdBhMFAHUiN7BghM655Fms9Crfyk",
  "key21": "4Wsgis23GeRGtNPX35RAU8CatnbBnkjC1XufhxYAUgwxx1fDEvSJfN9sUE5u9ervWbAASvh9qxftvfxQwDTfdygp",
  "key22": "4ZA2oKqR552XQJdetYWVwxbMUvhTuJZmFcN7E5iB6KC9SB5jW8KnV7LHrVMz3HLYjixTVaHVG8tL2Dju3gXZyvH5",
  "key23": "3uLvbu8vB8WGnoyNdGLoPuUMhAba9omYWgmJF7Cmz3TRxopEcWrrQNz4wp7zMLYLvBBpmGHj9CSKcxi26YFpqCwG",
  "key24": "26yUFbw5HXNXHbhzpdykD1TnCNPHitcdzVPm9pdLmXdPHrNZYT1y3uALKt5hEzXDTiAfNRD7fSz6xdmBXjzpeb2j",
  "key25": "m1dpY4231Yt7jmmECi1MMDkJe771xrjbMYH1jhfBkbsPHJRXBaXyumGE4RhwJh7BravdQ99JHR8qt3FGU7LGcx6",
  "key26": "3285Adz6wbz7ghpmkQBEXgU7wmGDrznca69kVH4AC5tHp9KahNhmrnkiuDbUvZKbGd4rejdkWoDs8f66jWVzEu6W",
  "key27": "5hkypg37jGQkGbeYyBsXT8sa99C72764eQmqS4iv7E9QaC8V2uDggFjYq3vwjXGeCkBSkSkiJdGshNjyjz9WBM3e",
  "key28": "61sWQrLvAYBwmoabwPHCVRiFXEcSnzg6H9kWNu8PcdMFvb9QSTwKa2TEJvDSHPFraenN1wVcX9U8Cmg16pe4Fbuf",
  "key29": "4Qu3eYMGv3r4FGcGFV99gwC8njnBMPbsKU3yfDzBYmKATZSuEsrGYaZeP9savXHCTAfjU7Xax7obRiUTnYdS7Eic",
  "key30": "3CFqGwqJqarnhhfRwbxGhWDurxvF6vm61U2k3YV4TaCpprcJP173E52WS6QTeTwxpkYARXMDcwjuWYNh9ZRyJmaV",
  "key31": "5ah7kFTEsixuyiSXurWktQVEoWfJcZ2MwE7g4tE87RHgFXTE16vTqxzQL3ogWYzo8cfHj3C1TpbYF2nZ81fMactk",
  "key32": "PKXdwqF47Dktw9rxp2ywabrx9vTbccD1RDFHRd68JUjv66T2NqmCoM9ieBPkjciUjLStPnTBFkTx586Ada7HJ8U",
  "key33": "4Ci5SNGCmfr1xaEqSkwZkytgLwM27B2sgJFbTijNkxE3bcuaSZ3FKxkXUhzi3tWBNhftksPdVtVYuKnzYmfW7E1W",
  "key34": "43CDhp4t57TeDJG5N4ZZauV5G6ixx4n5qZGjEG81BGoALKHvZzeSpc1uij3pkqZCTDh4TTsNAeacdh8prD2H1c6K",
  "key35": "4JnmmPXvjxZegLyNj7gYw5iHZVukg8vWNURfQkdvxnLDqqcNQ1XNgiRV9iUgRcSM8UHeaqvVDuEfbChGZYVHJPuc",
  "key36": "5nRJ9jYZPboyVrdyFuUhREpgBpipDHPkmeQHVmwYq8ryA3pmD5ePgkoDDfYJYTeJqWxZ2T8UrM1ayEFx4A99ceU8",
  "key37": "4sVr1tV4tJW8nog7bFsQxdW2o4rLizvNdAZUBPo84PYWq9hEmhErJE36YCvKPte9L8hHnYZxc77ZoSzmYDt6GYVD",
  "key38": "58eHS1GFF4i8tdG16hvkjZKKTrFEovPjjbTRu3JoFcVYMtDvBcXvzJjyKpvgnKfrc8WjGMupvA87VME7ALvrGZbR",
  "key39": "2NnfGxubCo8FGTAvvdZ74BSBhwhHASkLJ689wUmf87JwSVAJtDsRM2wMtS7Lz7J7utqpNEdkrDSRaaHj1vey2DWY",
  "key40": "5k8qd8AZmLETR9WxxvNfBTv749aFP1bh2meEfep3YEg7UdTYwBj1meizyGpTpNDghE85VHEAqXVFmDzGeoAqrYb1",
  "key41": "5bwX4G9PNoFKCMVKLQ9GekgRgxDym7fhNrJvRb6baFmdt22fmdPhGSEN4KCLDbyKYRL6ARF1nykb5ZgwJCZYmSxL",
  "key42": "5SWkHAGcNTiLZeJC4g47ajvXnkw8x3q19qPKWJcE63uwjx5gGbYvhtyBL1rYnJMsrZ3JF7R35NGNK55Pc9amv73x",
  "key43": "27zofwpaa3LjMHgLJjiL5hj5Wrsgpzg8xTXUD1pWyjpQwHkVtjaVA5trGDW4h3qETqj7dNxXHm8oX77d2vYMdjb5",
  "key44": "PSHuH97Lk2i9CQgP6pdzr4RTMg19U3WU8ZZazBsT22aSfui8n3zcetAeBTBdSkh7FDNH2ErCDtCdzug5JmRdRvQ",
  "key45": "5zr6kThYSRa51ihk3KAksZh2fc5p6hqA1xSFiNezM2Q5N67q4AtB6pEPeYQpaTni3h6Rxq2WmJb5UCd5Z8zEdqqu",
  "key46": "3Fby2yu1Ag8H2MP4K4pzVFopZ9fnQDzLHaMiue5J66UpCaPd7C5LBFCSrzStBmGXxUWnHwXVYQc65TJ7ovhvsPqs",
  "key47": "3bRkF8Xsby89fTWz24KxW9Lj4wDpKY2zGQjv2u94AvHwNH5SLEic1MmZCTeTuJsvr77DT12CpSVKCie64GxJ3fQc",
  "key48": "66KqzPSN7HakPGm7aYwpmKksEpMNCquouoJ8CrxZDWaFdr8KEr7sfxXCRcYQ5GgwMoAoYi1vnhfKyE3q38zCTki7"
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

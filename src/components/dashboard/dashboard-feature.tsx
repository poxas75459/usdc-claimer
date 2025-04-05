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
    "JcnNompsDbkbvuN6R7JSYbtcQxu9kWhWJhK1q4X5C5pK7c1Vk2oVobxs9yArmarc5H1q4qpDEaMfxHqVQ9QwFWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjjBZzM5nz3zfiHFcJyZ6zuF2fA86TrgdWKmiLEWNmmRTn5c1xzVKwgE4UomxdqDpDML8s3LwK8mMvLjHpbTWDY",
  "key1": "rfnK8u3DBrjWwusVoGCUEcWBwPLFZcTYLWxPkB2JMSpfuDf7s6QPxNpxnVvuVed7F5VXZhouUHAE4g7fSJ17K1E",
  "key2": "2937UG5NNjEHAC7R2feptWjeurYa8HD7pfM3kNCRKEN22ZhYfbbAe7ta5hkUtjGjgHyA97rg3aa4mE7wgi4NSEsm",
  "key3": "42MzJFqXwGPsmfCFeLjSqb9Cw5SFaFQvBUdzdf1GfYrwd3hatkyjKikDYovnV4pHEbuZ8smnphnr8dx7ja4bpXYQ",
  "key4": "BD64f6KzpVtZKmYb9s4jhmCw6qJp2Jg43wXhkgh3GtEfmDNyK19owf16oSwAiZGMRiHHtaZjCaxPXADujAqmpm4",
  "key5": "g7aTLbuhB3vs9BAG7tRYJVKNtSJFzroae1oP1jmTca2aABiHvMQdC7G1Tzk7Kz2fU9xQkPnQ5k4Z2YLBniviqNd",
  "key6": "2RQKnDJ85y38A55mc4Pt9TikMyJBMMrkNJw5CbamZ7DycH3Wi7JmzXYo2GA3TQPgdtA3HjUZqV8wcUXGRoPMWMWy",
  "key7": "3VzDjv5RYDRKNQj5Gui6P9pFed1zd3mGdAqGv9guMDd17ZWNcLYr5MGtNZvbgonUxCrit6mzpy2JSNbzZjCkRB9o",
  "key8": "49nhZxMtHB8w2iCRhdRKf7ZGJ5WfunP3H8UF8gGXbvLA6octFCHxU5Bkj5CGXmjLfCVWUzVJR2gDWBVv1cwUsRQL",
  "key9": "eT8yxTZYoktR6u68Jn4qcTtwTGjEoGsJxMFeBo9pr6H7ZFEy3PE2DzuCKUWXb5aKQfvc67GfuTkJgcv4UVbLVmY",
  "key10": "Jt9aE3qfJV1QJPqi7WsufqZ9pdeNeKmfEcCvqQNUpb7KuXdv31o2AQZFMHYEeJwkpJ4CLqagUrHj28QvHRZhiN9",
  "key11": "4SgV5y6PuHVh5DSLT1NVd3GRkZA8gibPRYSGRxHCthiWvxkLMJAt6oPEeMH59JSftVVc8UjaBbv4MRSyzKC6xNuu",
  "key12": "33axtZCfWwPg37aRhetFPUitNojJxeJwo2ZNriSYBWxxNexj1MmusGzS5ZMLoGAvxuetXwJee3eLg7Xy1PbB3RKE",
  "key13": "2BzPmo8Z9w7gbQ6MjB3txzVQAZzDee9VM8bZ9USsDxqVJjANRK94t1sNF5X7suFgSFA4peioSeSebFZ2Hz9aKmAm",
  "key14": "3MHiQb7eo9uKhEfMaHpDD3quuv7Pyg5pWSw3iRxaKXs9HapXRwMRDih7NoiVWJ3sNJYxruWHE48NzTRsV3hXhtMR",
  "key15": "632FuSrEmnG13QPbHvquZe2bWELHwtdpxPTJW8NBPPM2G7o5F8BUGN2ZbUGsdoX3uRmQmjKe2yhFEGHM5bfShGHL",
  "key16": "5zRtWCKqepjzm8DoG8Y9BdDjJtWP7Uaxsf7YeAiF4e19c7kEKKTEWKEPYdp3n2N3nnME1BcQ6bZerDJTusMogCqM",
  "key17": "2aPDndRUTdGpp5juu4NYKLSRwVdfhFYboqpBD9dTSNWHBrtqsxRg1r84KTSz3Ss2VWGnSg94c7ASV3wtptePSGYi",
  "key18": "2zjzBut2zPMRMiNieuCuz6eUsytSHJDycwrVeE8rtJ2Kpi9uzyv4wq2Qee2RNE6fb8aiBEgBc94ZMgr6KkgFHJA1",
  "key19": "4tqLgSGawapFkdmNv2RvkbcgSCYrV69LQ1Vu75XA2WUTAZqorqJnGtPtDQbGTctwCXjKFSxYdJznB3ac1r5Eybmc",
  "key20": "2gWHMqUdHWoGbhRZEmmeaK4v5SyWcZBfdMz9AGtedYyexG6KjW5SEfCY3aLsgkk7yP8D13AuuiY4uqDb3XehxnXT",
  "key21": "2dPG37rJDveuGjF57REqquHpFmC2mKYGUbrtkN8RYQy9ym59BWDefbtHVsP97sTSexEdLU2u7vNkx2qqfatUdKSq",
  "key22": "2MicQbf9iHPkVKADr4fYddWQLshu9Vy9thFGAGWtFmWCyYSiXC2MytHS3hkL4DJ3Fp9jQGuw4aYeP5eAgCMQXQU8",
  "key23": "2ZJaxHScNQCpWLQDvjFXzXciKqwF3ZPsL6djiiuzZrrFjdcE6x1XX79aeyj23qx9SnzAc8a33Natwpu9dMm7pj5t",
  "key24": "2HwvUUujgeRNKm9bVa9WrvssPoFKv8mLNsacX5Q71rt16nX94tPEdvFeQ5vRUWvcYRiqg3SFV6WNXYhGe4PboeKe",
  "key25": "3xHCxMc9DQYMv51PSkjYW51fQ2xeQxHHXmFzcLVsoh3TFiQSaGjiaKoBcoiBUg62TUT8cGKmFzDX1VLAMw6hE7zP",
  "key26": "58GV4iYS98okTmvkiPLXK6YNwBkm4nVwEhUCuqBR7s3YtKN9G5FTS9UG9toUcMp6qZ8qr8BUGT9XkMBJFzf4beYP",
  "key27": "2rR2PZfi2NiLWRhZu97WoRsnLkwtGXeyc5mzsxmpMCL6PnwfRMmg27ehM1FZR63Z98oxED49hEGZ4kSQvNA9Du6U",
  "key28": "3DXsZJa94zGZVScqQDsUCy8Van8TxKdpntgZ8LZmRKLzgXEwmDpqxtNHTgKFpJYX3eAioDosxtRF89ud4zJe1ZQE",
  "key29": "4DhX9LAqwXzsGXudaxBt4phrcYENnZ9Cyzc9YSLXDnT5yWABFwmRDsYof3MwTPxSoqPMWH5N4sBemNLk6DoWoH3j",
  "key30": "7pRUUBTWwhx1WL85ijr1taNw3zB1vf8Q19zA9t6rvssJG7c96Sg5r7fbt1uRUCYMc9S2ihbbQY5PDHRneTXHjDW",
  "key31": "5jxumaNBVSCAe29AMqLEhPZ7WfdbZZvMGXacPJbEMRgQvP61brpXPpPJPiYJ1Yipj3zwNDKaH33aqekrAcmidN9v",
  "key32": "48jSebvgD2rPod918NXuoTGYX5CbfxqYHYAqD1LF2p8n9mSQNMxhrProBLNvQFvyxdkSRwF5EVPgs3PcSXYbagfU",
  "key33": "612WCWFjFR168oyD5tsG11x4KATujENFvtPRybRMjmGczqkj5JaP7VfoDkNmbVYDekKDbAwNwkiNGfeeYbmzhrf7",
  "key34": "xJkqKuesDXiD8vHsTxjGTkTtZiZeP7AP6nf6BNdBvohHcCyUoiuV72nEwM8sXpbPwEpMTaojDvKrw8ysKRkGwKA"
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

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
    "2fnSFMaRvF17JQN2c19rfv1nzs3dvPT6kZyADkJCm4BANtBfhtmzGYVAQZZCyFPLfYdm5NTcwmm9C2mSfuPXp5zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wBczUgGPd1SY98zfEodfmE8ggXNXDPEMELkX449uykRJjvgeDZuG6nRpVLQGaoHHa8KURJUN8QhCtdcpx75XTc",
  "key1": "2oej8WdViY8shGrGUQVqcius6QcayKPFgysDJykiPMVQpLbkn5Jfiwim13sHio6wbc9UVmmetJWJ6WrhFf9v35ry",
  "key2": "5EwWCvGszYCmTv9ofapEiJ8sER9EY5sH7RffPzBG8UN8be12xbHGpgNhja8ne9tErUCAyVcL54fvoeupaUm7noL3",
  "key3": "58DcXZ1b7hkeEjKqcBsJULqQWiGpoK7MRp6RrYQ8rz8N4tZHXCDhBG8WuQaBE3aME3TwWsu83hMe8WdCME8TbFpn",
  "key4": "387wdPKc4zpLrskmr5apibpXeB1nX9BA3bHLDXgHpFeVbakemcCZHCqzUygTF4odjaK71umTCXJMo6WJDgxURx7F",
  "key5": "5LGz1rCRnXZKmRWypdPeZ4ha3TkMrNppzY3inDSdtmHtKZhmVNZ8TSyXNiC3zJmqH8766qsC6ASHp9ByQBhkz1ko",
  "key6": "2QSbX5yHfCJwCt1CorTeN9jzKjkQFfRfk7uiyKfSqUxtEdb3NrEU9hBrrB2TzQ25MRdAiGH3FByGLSczS7VCsR9e",
  "key7": "4a1W32bkzRm3WSP9vsPAS1GWWhZ9cpDAwJZv7efeaNzVsqWgfL6ZmHf5pAAXCHKpwvw2bEnp4hH77jZ9rDRsst9E",
  "key8": "4pLhMmCaHQRFLogwm5mGvz2Sqe3Ef2xnbz1NifkTpHWzY8UJ1hdS4Y76d2Xzd1BjUopq3mur9dHZFTnJfmNZxaPJ",
  "key9": "4fPpqsUWrUo4nDkDpqJdcRwUbWoDV7X2XmnWzu5XTQTuHHLSzJ44fKCGdcmG82aoU264j6CRtu8SxKpQEp4y1ThK",
  "key10": "BU1qoXBNoJLPaV7iPCTgY8TzXGZq7iHx9ZgExBsyh6S86wWMZ16QZ2AB7xZZ2Ww9KMcCPtpzFj2wpGoF1FK79S6",
  "key11": "44k6X9G2YcN72chKGoWoCUGz6k9hp8LBx2X27715SjWLXJjQc7NN1h5AUNwaQKPgd3SPwrw227NqhL7V6bBG4bKr",
  "key12": "2gL7kVy3FgbirWAKq2jitw94pVpSWJVxz3NQwDZTGMAvxvej5CFraBXXAC6ghJArQy4aDc2Fr1SYBWUrrL5qXE7y",
  "key13": "5jTQq2kKKYZeMLhEWJrKvUwg9MmBBiirc4e4EW4pnup9a74n2QumuiLsDXwqPVjSkEmzqec5bEyxARgQjNcWXkp9",
  "key14": "mrSyjUbudYgDPa71wxD6EMArAptpWgrjb74CqPoWMFSfcFbh7zLSU6T4xFQcjwAbzS7jjSzr5r9t1HBbfvjSTvJ",
  "key15": "3rN9eWgSNQExXm4V2e7uYNWGze6WhMPFHSHiLQhd8zVesozSuFrP6LdnY6RAynfGTMZ1MByHCZ6xkb32EcnfTjaK",
  "key16": "9enjgt5moeKiAkc8XzDShedxKsrvs7mi1QBKW6qQXPnLg42zVefroMxyPewGaVJ4tRMKWp7QpRdR2MWdUMJy9XM",
  "key17": "6y6K1qa3KDawmYk7fnJwKWtQumTaUgt9ghNpC4JbU5Emi7A5xeWMQWjpYrmrWumMdm5EVN1u1NzQw5N7VRSEjGy",
  "key18": "5wT64wfekB9oWmjpsCKaipWREeiBR3ytCYMt4g6h9zsD8hjraTroXCyWWojhNDYezYc2cGRGqem5X57RhigNK5eR",
  "key19": "267xEyg5dYMP8dSJKi4JGx3nSMEoFUHcXCeeEpXMcL7JSJTvNJUF3zTBcL7Mr4DTUvzJQGJp4nLgHmqdk1dNygvJ",
  "key20": "5xA8y283CQckpvhZWQcFU4SuvYyuUMpzVZFsGzDZDGYp6pT8GbVNVk4xhccB8igLUcsgoMKHgUTKPN1uzPMxYY3",
  "key21": "5L4A41dn1d7QERxLAqyYuv4GKW4Fx8UzpepMzS3N2GH9ApcLKZvFrinQ2HhFs6kiWjmMDY7jzQNpWAXWybAXqmi",
  "key22": "3EEfXeStRF9Gnyj5CEEjzGGeAWLqgKWjczukL8rGKuKSuT2i5PmpAX4RtFBiWeFKJJm53NZAQ4Fhyczs5Np88N43",
  "key23": "5zqus67HUPJ8AojGWSs6XfV3vuaBXn6b7BqUth7ya1EgqvYu8yeEtBmbQcBezBvVAVFrLHUDfD4NRkZMs1ZTc8E4",
  "key24": "3uTnoZKNPgMAVPZTRt9cSeUmP7Yg6VVa4cd8LnMh2AhjT4Ejbsa3UpGnB2thqaa26kR167jqx5jTJ1XXxTtjQnCG",
  "key25": "44NXAbSdmgn2Jz8p81ejuAjPHdfYqK1hPsEYuhHfPk6rh3SYPxdme96QF562H2RquudLaBhA8vmDvAXwffoN3Kp9",
  "key26": "3kb2cquXaqHqgKK9fjHX3t4BefZwMC9g2TELMVc3R2cyowSU83bZjKMfmqhdqLj2qpVp7VfpcGJPzJa87nGWzfbj",
  "key27": "4xLTGe7Gfsc8bLnqvaEuCpKTaC489asvjdKai4UBUKzwqu29R357Fr6bcWwNMF6Uc6yGax88Dk6mnoZ1QHwXVzm6",
  "key28": "2X5q4btHURuwpNvWeGQtXknrjdyXRtyYRFngZ4EwqCc7haqtMVjDmf2ABPBBZyZTmhfqnPmTiFXmFqaroC531zof",
  "key29": "4ABs6kKVn2J3MqZBYZcCwuyqRrnAqVmkc5oCfdxTGvM9uA38pWC4axScefXzy5cbsRG8dBEhvZdNfcUvSZsCJiuS",
  "key30": "3AedBFTBWU3FaGHB8XgnsEVBCqT2jZa5x3iNikG7hXarwEsvCYLNxcGHbYYj52JonRhneZcKi21GHdBXf5i1tqML",
  "key31": "TaLQ4gaN9FXcRCxSgoQiyb9hLMutqvbTfJmLeNHBZXG3SE2a9SpGFw3jpgVWSXNsn4UjaieCv6eSW8PrxV6MiM8",
  "key32": "2omdCKgv3zu2YfVE2AM4aFsq6BSJypoKarRx5HAjfe6vZcwWgJUKej79b6sxz5KjsJdmhw5WZgVTEQm6wntRQEfF",
  "key33": "39PSefsYcdFqgcqpEg1gw49hjpFF8EMt7sb1X4foR7FeqC3iyUoEWVAWYRaDCGwb862rMHt4vYCXSEDjNRHV6rKJ"
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

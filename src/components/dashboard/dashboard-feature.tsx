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
    "3HsWGf7he99PcFRtEscpef44Rt7iRYf7eHbYD7K6VCr8CVArVMRB1vRkG7JAoFP2KdNd6GBGBGSkU6u53dqRHX3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "utaQxFKSxt8VypRZTWEMM7KCoL1bTN6YsYmuUnCr8XXBDDZhYsHoRDMMF7mVZSgC7DRA7UJffZFCG9bKtWa3oFr",
  "key1": "2oBsjpWBpzchLQoEiBp3Uthif3S9DsSiR9GHuiDAvbkTEaKWzzxySmmUuWCoSSjPjrguMjh5XYN7B1pCVTK5WCyF",
  "key2": "471Av5XNAmWicqCbx19Sf2AUUxR1NAFKxdknLzYmagrCXJRpiDsme5jd5RpiLy13jtJ2YZfCucrNtJwYGGg8NAyY",
  "key3": "5QQU7YG9BcsPG9hhp39JTzv3AKYMgBQqpRDtv2deJx2mD2WknGQ1znGnkxZcMfbTuPZ6ysURWuzrCrUgeKgrLLSN",
  "key4": "5taN4vHpupv36buyAZb2MR9JxcYBNxxDh3uNVQCcJdA5frneMqCR1jqHZapt48G8HmFbhHw5vtv5bVDpkBWwuwTA",
  "key5": "2tXc4oA5CYj6h28eh3EohcQ2UPHCELNaSvNEJyhiP4vLMA1n5r84A31NECgFEGHZoSYeqvvP6webUrR3nmj5ogy6",
  "key6": "KavJiDVECnYcDDMa3Qd1WnYDdkWW1oVBSQSjoepjoXVzScGPUAYLHSqs1CJeofm264uWo2acrxZ4M2ULbMgdqLv",
  "key7": "4vGsaL36LrCQWpG5fP1x17QaG6Diniak73Ew48aXiY5TwLUv2aEUUvsbD6btcimqtRm1GfsDSmnG6Vp16jwVzp45",
  "key8": "2aFBvu6GpbwUMfibVPnNGv1Wze9DYN5EHejksxwm4uCsSqXPBfKVvbJhvL2C2EA5jVrAVYYWwwMWz75xwWFWMMrM",
  "key9": "4GAMMks7Uwau6SZReGWPra6k5prEpsN2iJ98orwtVgAdaRaaRNDiyJhJu6rzmF5HRqX5S1QFKKPTPDf4YwdexKpP",
  "key10": "3Sk2pVRsGNjqB1hYhSor7cczrbR91vUYB7ynrzrH8snXTie8PYjSpyaiszXczhNSb77nJdLJbfmEw5FsQDgG18W7",
  "key11": "3Bxk8vwCKCNLTZojkjuC6zrnw7Yor1DjaZWAJ9fqmqPmczRjGgmGydbmcxD2F2pQY8z7j8DAfY5vtiqVS3RJK1Br",
  "key12": "5Nd9q2FDYh9eo7nojA64hJiCBFa9ABk79rrGtsxfNUZGaENBx5vRYaqZEuzGbYLCqdGdGG95BevTxP2RLdCcCwyn",
  "key13": "ZE51iAEFDKiVc6wNAaryYRni6GmKBZYnSnu4RrdoCVTQ8DwzMHUQ4iuL3eVYNLTuMKyWp2No79T9a5eam7oLGB3",
  "key14": "2qxRY56eNFtEPwEDXANvT3s4eohEzTGwjomkYmLqxVoNAdaGFLgub3m8pMnsvWgGWN4XfL2r9CU7KpfX8vNWM8fY",
  "key15": "2jx5dMiky5zUvSAZTtyD1ZFDsxDmhrsq6ToQ69XYY6S6fyQ29THWJsp2WFrHgeT6Xkq8Q7Sz5dMY6nXabYasZaeT",
  "key16": "4woiDwNSQzNuTKGyj8nMdPgLi1qPqnuDVBgZLjdoHh5P2nyFBHUZViQWRHqe2hdmnGCU13KLLRaexRwURpMTZS1h",
  "key17": "3bCS4gNPUfKCMJMySiYNZsb32xSPAyZDgBaQLsRQENVCaUBTxPLCjYakh13VYB2xJ8j8iiWNV6fb51mhJo5podKu",
  "key18": "5UU4Ew3DST8P9hBYNN41vmD4x5XV1XiJDU7QHi1nPxv3izhXoPBHraSYAdfhGbT1hHYbe4CkeuQL7sB2jLJtS27C",
  "key19": "3Cc4FCkcvA9NTbsuKtdp8agYPJMqe28MUKK1SPNF6NTLmVh57ADKe68rmGiYUQG4EympwHRzzpg4JvBg9Vjvm4WA",
  "key20": "4qJ7CdTnHkoS3TvYWCLzeY8nE2bqysWR189qu9SXFLJNqZcKk4vQqisFjdx1r9NUyc9PBWxEiFdcHWLUYkqoXTCV",
  "key21": "5sDRwwEeo912kcayWhoid8JSUdoCg6TiCvGLtB5Pqb9tiff366wf7BPhuEGLQKob1YcNVMdgi5bmUm3KcQNrR5TC",
  "key22": "437yKLQCQJGHxPMNT7yHNnzuB8crJbXq37qacQo4nyPjNHPLb2oCmjUb58oqfNou79yPhz2Py4h7rguqhAVNVwKf",
  "key23": "31FBTS5eUbpsPqFsEaykH2cNknD4ZYDc14HcMBkPCmzztVzS17WCBqSJqcnr5SruPWhbk5zRDSZiyHjjFdQDYLvQ",
  "key24": "4ofdvppUSPPogrknSXo2PtPhTRjs4gpRZEEd3jc7K4mzpFqrNCaFBtFVvw8PdEuefyETCC1aRsn2dZtPzJbKtxAh",
  "key25": "3KTh8niCWD1mdmpxo9Av9PB3nYwNkZEhBktVNUQ8pgqLywB9tcPFs9P4rqrQVE3UV2sJbPDwMfMjqHhQJgHZrc2y",
  "key26": "5gtinuSs5kNkxwBusX5nv6zNoUdM878REnEwfeGCq2H1q4oJgPifPfm1yiQBWgYHJMhHnqtCFGvArWcgNTmzP5dN",
  "key27": "3wAupM6QXYzAbG8R2NX5CmS9HP32EjsjW4JWerrmYi6UuJa18HkwviKZBkjJWRCxX7uVBPxGA7TwureCiuSq32ym",
  "key28": "tpRq59oEaAGTfgHyMbMnx4AVghM3EBnWwVQnpQNZ68Fp5sKod7K1irjJ2Nkm4T9Ry9L84QykHtWpq1RcCpsJ88D",
  "key29": "9fvRKBFN5Ahn3wrNfiU6nGXFJUFMCqkDP2z7xLWRc8of8giEhzdcivbs8nxk1YpavT7Q5NL7J3F1727VoJ4ziUB",
  "key30": "5nTuKjpPVyF3nyz8zpf3Qno8wc7V8Q5PxWRmt7CNxsRMe9DDL3cc3kHD66ixCaw5gJi3WaJkJqzpuiwFb93uPqWK",
  "key31": "2etN3SoSvDQAdFDmQ7EuPS6vTA1w5ri99e9e6vnwRtFbqvc5XGd1UoegmHQnRLTMUYTJXnPch4zn56oZGPAargrn",
  "key32": "QqL492BgXRGYN8cJsA39khwjnpnEUNEt6rSD4wdpTzqqLHL2QRdWmrXR9rRq4P2zHQZSQ9WNpFkxj8nWvbEQC9w",
  "key33": "Adk29gZZRY6Q17noCTeeEYxG5vP4E31XKDXrGhcYV4tLhTpj22CUxx3e8oFsF2FhgY5FageMBAhLFcGBNxCkruk",
  "key34": "3boqLugCUUmaLENmLvbnJkzZ7VoETxMRJHu7p379YtFBdsNZnjonU8mrc8xAwLNzNsJUfUVEmB5ocEHn6tVY2m2a",
  "key35": "3YWgjGJXhb9Urgs9WobkLsx2no8bRqzr1F7V1gTXURcEYw2GCVwdyuLYdCT47maGdeU2A4XGfKU4zQUjZ3K38V3V",
  "key36": "2Tc39NAQ8ux4MD6hy6X9QWdHq3f4WsWagEJRKXitnJ3u2CbrwPPTinqiV7Nw99ag5dYBz9hP5WBxVhbp3nsdJzcP",
  "key37": "5FaWuAw7oWJAHNYUT7ZmkaYu2RXiBRpwNYdwK3wkVEoXk4ukLFGhGq8aFwQ1M1ZGK5EU2np56ZWcn6sBedTgUTKw",
  "key38": "5dEHShpG8RuffM3e7CQDGkuLyHeAyNQzBC4Rkv1jit57X6A8pSBVDfBvQZ1ucLNcWzsVYGZcAo29dTwcfYWmoFp8",
  "key39": "4uiiEzX5UMhRS7kdRkk8MXcZG1xhYDdDNptaVVnigkPUxYvPgwnhZipPgKfECMnuHG47W1dKheyUHLhpN1ZTKCDr",
  "key40": "CwoqKKv4eRBMgBCjd3bW5F7KfsC7WspJsUmBUD6j3UF95fjmjxfD64uV1GMFFLn1niVMHtx1QsQMvrR8mMte9r9"
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

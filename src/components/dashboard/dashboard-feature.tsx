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
    "46LemHmjt51Q8ySdcRBSZAmeoaJAC3KMxTKWNgojEPdUHorMqN6qpMHFua1zmJ6vUvvdRLYtgQkXT4iqF4hrKutC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXxydmPqa1qAf9jrWqkVhRPjHJctZuD5MFbrdxdAERDTE8BvVQC3P2mvhRYHdRbA4LEpUFYTKwnK3fJidLuk1z8",
  "key1": "3VDRhLQEdmT2ehDRZpdUXMPLAjrHYsq457gkciDJd3Amt1GJvXJXLQnwFtdmuG9CL6zit1KBgb4kozCrMLNBEsuX",
  "key2": "54LPQbqjxAoWhuU8wZKPhd7hnRgncLG8q8nzLSFCQ5F66cV3BKasMuxaiDCtTk7zB4vaR5LNuoZHJJdaexh5pSP",
  "key3": "3hprAR4zmhuXg295SEbP8rArG9UqnjFhfiBZ4xr9RtGgs2B9ziQ97nyRL59wx9UhCnpHuNJZEuGYg2eXWxeNp2np",
  "key4": "2ayM7VKyt3omYfho7DyyNcjXrQNH1iUdPWcmN9XZJRE9h75o2ttFH6LsWzL4piaEes4zcza1gWz3F71NfbyHv62K",
  "key5": "3on69VLb4WZriWaeVZN3E6hUzDPDap4K2M3hu738nJBBCZLK3WYtrnBFFBniHkS9ZfkCoqmwwFMHHDwqF3sdAST7",
  "key6": "5wDZittR1wFYSJW5zwt1xoiiucSXEmmCtCfa2PyZ7JCCus9CtnxKApFrHw3RA9CKmeQYoRPUXS3GxUsndDkqmoV7",
  "key7": "4XP1XdS2U2aUcZVDSjTpwxFbMGVP6Yog1efscdfu6RSbNLnwPac1zoxNug65oyesTPbKXsx7CbzHsKr7XBZioC1d",
  "key8": "3BZCL1ypyKgMrTGcq92FoAHesa1Kg6psQQzNeMv7QvNSReaeqqkc4ZBWA4vsAHR5nyY7jjyUfUADQKW13vfpghy1",
  "key9": "22pWBrnkfVDnFHJoLHqKG9sEB3PAdY9NvuLv8GL2trLdFafX9zpPmasBYRN7uCgpvdonjzTi451smVTCv9Pzib8f",
  "key10": "VLB1HZExcb2Xyi4mMtDCuzC9WQj1Z2yuoQCA5V1ovv1RpNGRBCtKJf4DRwSD7Sr3j8mw5tKxgeiFjdPvKr19b3p",
  "key11": "2oNk5Mq2GePYapKPggVqCHvBCDBG38Vpk7sP2RjL1i6sWKQkWgTbFmgvhEhhTcp4kwmsibZBvJF8YxJAW58mMxv2",
  "key12": "pxSLqvVTDA6HXjqsxKi9NwHNDhCNfk1YxEZ6GrDNEmvM7YaMCYdPhqeLXg9NTyHWZVzdYk8Mkv8bAqwi4GEyaM9",
  "key13": "4SFCgRHYQDus74QMvqBH237JoieJKgJ9fKPYv8hjzNCYbGhHGm2WdbGnvnWRX6cFMZq2jUdyNHGZEfaPWDWnbkC6",
  "key14": "XX7KDVeyBz3brstemmz2YCpTzLtJJ5EDx5ynkDdVXMXD84aggv4ZuHGTtTP5nzubeZDzbJLJezMV9hxTprgnUJ9",
  "key15": "2PQHwjhM77QBuK9P9K368NPYTQrQvV2FV5R4kNGBpBuFgN3Ky8q5QivEnH1uTg553ucWdHXBzZdcJxfyDipjP6gX",
  "key16": "A2X7nsmstomxa17FhHNi6upzLqkhuDaVnf7KB9Rpp3MZ7di2tkdJZCdPMBCh7fEiKcLucHPVCec7rFjVD7ttFHy",
  "key17": "5bbQBQssGH1ePhKP8quyPNpp7nKHvK8WruPh2bWV5zPDjDAC2wAkrzHaUwfgxHNvmEvHQ13n35ihxN7JQ3t5LBaN",
  "key18": "3TrccaGBJ52sidXN8uinmukSvAbuw7hYqcpnoFkq7xbnw21NXbcRmK7842WLyyVKELzWWiHcRcwaFyAVvgjkAPZD",
  "key19": "5Jr83fqaFamtnmQETHgDqas8tHwbdvYjF7HjfLRMrbaQa9wkTN4kFUmAmtrK83dPX6WURPEHovTS9ZjDbB4RBSja",
  "key20": "29FhfrdLPExmDQQHVRCb81i8bRgfMqF2d3kbD8vGjQsYjjHA8TpwivNF3zyqKRL7c6bvUuC8HQ2vmBWoFfzehszJ",
  "key21": "3nHug2WZ6cDniQBWwNrMn5SKQfktdb1qTn8PKhY1fKHnBVwnZv1usBFWsqz74hJchJ4prpUSYviqjoJgzaBASUvv",
  "key22": "4bvQJzmYnBJXgNBGy1LXLXz84yBRNGrPtcxmJ5zSXx8zs8jtDGPNAwrFuQ4aN2eJxY3fH4hgVgfQjuV82eSygm6Y",
  "key23": "5vy16nujAkLogqLSGHgTdsYcfiopqABfu4Fp987kmB7GmRGFSxSMkKUdsLagpC3hnAYhi7JP2m9hh5StjMmcUkWH",
  "key24": "4c1BMmUDWDnoG4vLx96TfksGmpatuwzhb2Zex3aS1t9DEipqYXqq8yTkqeThGi6uYeQ2JC23KRyXBR4DREVKh2cY",
  "key25": "qT2bZdemwMqw1VVq41VqjMKKVrZb8rHoDKg2uPEoDD25THTHJqio83yDdsX1DCgzRBuHn3r3jJkEEEMEvGUVX5m",
  "key26": "4588XYzNNAVTnyKnCANHLbwBexZBDQUXHQnKfke9mmUAszfeTJ5M7chtXJSD3fwQnwBzd2TvjFypteohDiE574kW",
  "key27": "4rduqea5xLDmGqmdLMKDX95jR9yFSJ7RpEba4S6EAnoHwkDGgp9MBy8ZpX2iWpUgfFRA2sBuAgWqACVSDCPaNNnZ",
  "key28": "62ZkFtmaZDguXHVUqLQbaxtmkieusLjCtzQ352SmsTHEutSjRmgmdDBMrnDW6QnowyL7kjX26npPpcVdtjYrH5gs",
  "key29": "5ajAavgRnWUhnsJ8rMnHMLmopadWPPz9KRXvYeT7i8RuJ6zVthmRdJedvpLCE8Ap21rCpCoXni94RkwrtkZok3B",
  "key30": "2eVxTggGdKiEr7nUWHwUoMba817FG5Bw9QNFErKL69MiMwDmsHd8267xWN6aS3XrFui9ufEbXh8AMSuceHuKoRLE",
  "key31": "3kk6UM1RtPHFeVGQxhbQyqxnWTjaHaCsvj8K8cX2WMtU7tYpNuEcjuEQnDGnBP3wrffAppdiq7qmgxLqnguMCXGV",
  "key32": "5cCMxy3vySpxfJRn3MwapNBMpxc38NQc2JDEtqCF2hsCzw3daaWpvZ3ttfUuTbEBD5G7zpRMNRfDSNXYQexi9CMb",
  "key33": "3Ng1dJsNChGSQPza2NSpF8xBNr5oqJa43YPmrgLm3LLdPW2NJhavD1bZNExrX9Udo16Qa9svQSuEZo6GFwqQbqQN",
  "key34": "45nNrjamdKVs2nacQsNfNZUCCzZt9vQ35aUDXXusVpZviGSMYyQeJ29sN1EQeq5TkqbTzEuxHyenPmnXiQ1UP9fj",
  "key35": "5t7PGjFkYEwRgpsHQs1kgaV3AxoXbyf9XKKi3BaEHf5ZTdphETKfbbSit9KtkQzweJVbR2QCWcvxm79D5tdK9PVx",
  "key36": "37RiZiPVzGkJvze8jMBu76UBnfRQGb8V3aVHsN17Avvc3c3VJQgc9GEqeCeUi8oaej3XqujTk6Nhz15aLjYewu83",
  "key37": "63YfArZpVhvKbJaaAqHbx7NYrupu3L7RkBmt1qsjd1hDkSik1Dnvz9YMNBYiK2Zp2ce1cyVBSQRarseHmnTMM1hu",
  "key38": "56PvRnFSeq7sgNzZUVj3StJxwoZzZvb6V8JPeR6uGoJXk55hah9GDifYXCxeRVStNKp8nTBBGdMKDmMzyBDgZFvf",
  "key39": "AntPeB3BGacL4Ya4NWSfNZHKWULRcRzVjG2LGQid9amjeD4wosr2jU9vjXUJVzErFRsSwRzv3A8ejhmNad31yy4",
  "key40": "27wYPgNf1JSz5SK6p48sB9jyMM2LMCCxoV5qTvcFrHBt55iy4mBAFye6cpiUiyXbf1QorhGWTo67uNZDw9Dvvk4S"
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

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
    "3vyzea8acQTFo1VzeczBNqZnJsLmz7VrH6ptUxfDYNF2jnV1BEsy912ddtBanxCpiuYc2qne8Bh6PDG5NP8greHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVRUmzfqxNpB8p88CYRk9QDgFqRDZL21y9TZAF9qiCgtxsYsqiQZ5h4y6KH4U6UeG769NNG3M6MPeWB4jmA3bLk",
  "key1": "4BF8CmM9SXuECqQRqprQfQWy1jzamAcZCu7LUvfsntskPP9sbFUBYrvyGZJD4sT9wiUeZqTGs2DFY1v24dGRSyLu",
  "key2": "4LkeihXvrtu3JpqD8hske2eCpCmynuf1CUwfELuGk7CWjFDi1BTCTV1QZHFZma93k5bbWjxAVe9coqP6pLgCeFVG",
  "key3": "2wtHwhSo57H2Npm6JTLZ9aAs78ZqNcyvhpRZckLp7ePynPtyYZ8Fa264JWhub7FGdXnavuBPDjgCFsG8LUisn8co",
  "key4": "43weng9mbAT1q3UkK6Jt1SCT1pjtn94Dpcqb1M3egJm12C1GFFPWLDG33dqPDyU1NNCo8wgejt9tLybiLwJ2Xofv",
  "key5": "1kgiT1rU5gks7YHtpnopjNhTTJGKKR6muAtwF86MYrUJ9gjgCFN9TtpESondgbVPQgkVpMEh167tgaCg9vBkqb1",
  "key6": "Hey8UXXgqhjt3Biz3DiAWYg6CWr1DuMbuMUPFW6FNu8hZNjbXkbyF72boxLJnSoHodL5m9Q6N59R9tb6PVjy3j6",
  "key7": "4fq8UMc3pMP44AHa1nt1NwBe89zpqBG6sny6Jb9dgf4jGJQWVSvWXbkSqV9cCJ9Fz1DjnsaMPFFXSp6NDmvWFgPB",
  "key8": "xQx4KUwKLuRp6rBFCjcccHJ6W5QSad3tpLZd7ecqJfVgsdXuSQ8MmY4V8FtxVuHPmGcnNuK3t6C2VVfdPrGKpMc",
  "key9": "FXkxUcEYW2L8uK7swPzH5fmrzxA5Pro3BmpkBTM5ibNnvtHvUHh2gdKYectHLYjoyex8Nxuri9FZ1TEeerPBuXp",
  "key10": "4jgBQwFgQ1FNtzGrhXEWzmbkFQxZ6KqQiwRpfs54McmjRu1tnt8MzFWwWia44TGeG944oWazh6GCX36s3PWJwe19",
  "key11": "wHQsyWbv8RZFpVP9kRkV68HYpbFM3QRZzWAfcky3MKJy2Ece1brxU6mDLn65ho2qW9p5r96sbE8eszbbMfrtyDR",
  "key12": "5Ds97yeEbkRMHWk5KGmZ2HrejicTmZqGHK5D3scyk3aLZjUG1rro22YyB9sjwHnQyoEtUK1XN25Ho6V8zRTLPHKD",
  "key13": "2vzs5SinmQkwddGuARTMunj5v65ycqkzs3vaFpHaNNN3nFWo5aCP3iB2u8NeSRLhYseZL9xL5eyehX7EbnuHb1c7",
  "key14": "3yb3XUZPNaU1eaT6biUY4cTQd5z7yqp8ce2jmudx14qG51mz6uXDooNZcrmSRfHeFX15gM43MaRkYpZ5eEmpgp3k",
  "key15": "3xDWNuSParbN5jA5JEH8voaXTMoHW75jsskrh1i7W15s3iBwb4cihWcwaAjNML3ktUWWPzgtve6zZt6Xq4KRYrLS",
  "key16": "37sk4apDBGPNyfQzFK96NhJGV72GwoPFCJ2TJw5XpYED9fJ9esoYPVtYwBbuW11dvwQfBWpJZXJz22nFgwCCMp5P",
  "key17": "617uFAgiBsowVvErPAezVRZ8wGG14sdDvrvERoV5no1kF6YbJaGbuuLXBKSbnLgRJVtR4XNtENHe9myoxaqNSVBa",
  "key18": "PJwMtkivfr3bX2613EfV1ryjyVu9zstu4H3CJ6FJbCnUXrSXKNr7oxXBuTR9SUKZG6CXcEJGHEaBjMtbJet5y99",
  "key19": "4UbHSbdF1wBEr9ybju3DFvvYKF9hvherxs2sV3rqzxkhMsJKjKu7cbDJEQZwnLJ7VPMmBiNtP6vQ6JTAEmAjNa5H",
  "key20": "4t7Q8EqrhEX3FGiHy97nMssqDPXsPX2EYa3UhrZtNakhHnBTnCCVLNL5K2M8odmy2nJbwVD5eJxQYmzjTm1rnW2X",
  "key21": "5jhK7mbUEvA9mttFY2dD97N6sGpjZEyuxPxvByYLjGKtw9tppQcLAahw25QaxerPEMwtS7b54XYaE68FYvPi6jcq",
  "key22": "43GRFe8FyrsWmh6jy9LcSV2a5cZKjUiuzwzgZi7xwDx8zQ6wQHvf7JeyT612a7xSqd1TVKaUoNaJ2awrFLeNwVhf",
  "key23": "f6wHrNUvc8PyHLTCBhpBFmCDL5ZbEAQTerKBT3KCpBMP8c846piUza2ivbgPfytjyCZvtLFKkbNAFV6ti9DtBdT",
  "key24": "4EJkViTMstCj6sEzTtVhWMmaMGTjHk3CCjyWA5eiP4bN2g2g2MtUvhWpNEfJgmsfLPqctRN6vLeNUNefuS3naiLg",
  "key25": "63tbrFayTdrDoqSNSZh5VxNc4aMVwhAhw9B465bpWy6NNQTUKK4KjaPkwXs45GobuLFTDtLj9w4ZsnGprwhPVE2",
  "key26": "3hZC9k8oBcMrBgJDHiNqWrAuTF4WY9AQQr2vcLutqYVfWkYpzJaBJCCh6XynZXZfajogSmdKYbGbiiKzMmd9XuEA",
  "key27": "3LgEB3m5nUuTfBqgJAngHS1h5wpq97edR5CdpypuuEvPbFruvwRqHRzBLV6rBQwvfD8HfXKLfSC58YrhECyDTTt9",
  "key28": "kLSi6NHn2NNNubdeacuXMhumaGjhwRLNMtbBdHTHZcDX6eSBLyUS229RZAQ3tWNg3ymNdF2VaXv7tD8YULcFwnR",
  "key29": "5NGQ4keMySmyrMHg7Z6MYui8sQgPYu9Ha2ccrrqW8gwjAE4wohbMJCkNS8maZYSJxr6txia9UpWGNtbr1KoGU3wT",
  "key30": "5ZHmHf786MPDDY1d6CeKyxYj29i7EkEPmLq3mk59spjMwuw32E6M2x89PezM2oTtNLomRc7sTWUug3FKVMftCB1C",
  "key31": "47tR3NTNQzo5LxmbUwwGNwNQaxktBpq8AzmZYauxMMcmDyoj7QeuRivKEpb142h7ycfBPupiD8avV4DnhGDSYCGH",
  "key32": "zDcM9Wg37jx3VJTVm9T8zfzrnxD5566TNkjYfjABm6BY1zMH5HWbk5294amzhRsLL6CShZ2oBnyMgKTKzhPvB5q",
  "key33": "53a1dNkRBMFLu5GvHmpddhZVjWLyPBqkbJgbJn15SPv2eZd8WbL8fHqB356L1FemRXMzWberHvsz3aJDf5DYK9LS",
  "key34": "5MXNes6gHYoBbeZSgeem61geWWVjpCeHAhV8QwqGQPKVAZrAcddnDjrA1kj2vuJjv9pbpuUoAUoY69ypJHJ9QdNM",
  "key35": "59viNrM5tckHeRwFf3hMxTwj4LrLzJ3jZwXM1mTt4yEGqdJGrkDbQxXZ9pACpKiQT12NcbzcP4gqtCgVT91RBw2K",
  "key36": "5FWyuJvnB5epQMQcJ7gYaMNAK91ednYogS9qAyj1xkjaBf4AZ8Gtq9wqSKAQ1LF4c5VnB4ew9W4m7tMNPKpXwCch",
  "key37": "3gLicjofPsvMekTRJ7Br6aHCpkNQYbqRiC46SrAFrSCi2gWU7hA4n1vAJHUpmisXrF3ruDEGahypU8Sv94qJeaQA",
  "key38": "3xmEtBNEnJ3k4jk5wBnSmzqzZurZahxfkdsmn971JFPksZM8XHLaTaeQZeg5TwZD7AMMPYz2S9JumkwUvaCpE4Se",
  "key39": "3FjttgZMVyqJX38xFKCjVJKGSPHdyyYXb6mDi5Wjco6G7SV1oWx9VdnvTdZciFBPFppY9HuP7H4PWi4NcV3o8vPj",
  "key40": "5CWqj52aXGcWQX9vyPm1tc7XqFa5ynRN1VFLZWaJQ6tuu7dYnY14ptBBo8iFgkbKasJ3yHfzipBLxXiv1e92gA3P",
  "key41": "25QNyV5D7zX4hSFrrUrnUZJpm2r3fFAJBpFUWp4dYd23MYkwL3hQgf8XU4sqcsVNSc63GsZWP7NuQsz2XqonKMwV",
  "key42": "5fbpZ7XuTbmrqJoGh16rtAewo7jmJhQ61S4FU7xiPUCcaDrBYPuL28PhfUNjBMjWVxXque53udXvXYobkwMAUm1F",
  "key43": "3XgviixfmUSvrmiXGugaVeAeuFxBRhvqNtZFTegvctmjPhrtkayJr5984Lq7Rc3gxHbfBXd8vNgC3EcY9H242Ag1"
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

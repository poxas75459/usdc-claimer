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
    "4RZqKKMg6hMHkCrFzyZiGvckG1VkNKX4KJM93qaHtVFTRVw92rGoh5M4wGe4XEeoybMrjNS7mdfv9zCkCzahHemn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bLqz8REXbUWhphd1ZWjF8xKPA1uaLyiQ9nsSwZ8ovB2Vs1fm4U9s6YkJzvzQ5Rd363giEw9poj3XH3P8TZCeVu",
  "key1": "MbBsAcLoxRwN63HzN5VJAEntn3PGkXt3kJbkAy5ANGP7mM4w79Ke2xg5YHRxDdR5D8kPL2SwofWmzK5oqV1TW64",
  "key2": "29UZJiRFBb5K7hNbGJps313JQguG4z7sbAACHuQMSf7oFtFfaK2PnaunVxzjTPFwKcYqaTt6DcVLkoNZEZktM6GU",
  "key3": "2UMaRqkJTkdjgxcHLxkwynbvTkVGFnE1abXgyv8x8935EdpJmZQbvBENsac9eNDET1kK1DX8rKhNZxQxdp476HLo",
  "key4": "2YM8uQfqu3zGMdqsRFYwE8ZuJGDrDf1PwioUb512F5a9EtenHsJ75PiXZzqQinbEQJF4QdWNUcPg9fqKBpK6ikWN",
  "key5": "ThyqPdBxRfKvi47JsaLGR13uh9FGjw6fWJ1Lx2kjnewDktr9yFHCLi15wxBpJ4WZ2xqzU6weJWrEeHFcfjGea8e",
  "key6": "2R1mPbrqHS2SXYvTfWVqd5mBX2PYmohzsPtWw4m9suELjgJw5U2JRtfvHUo9qd5gsrVmfUP8DaL1zBhwdgMZ6u3K",
  "key7": "38gAprmWWHsdhp8AUA1KXtwjkekKTiSQdb1xQRYHHa7htdxU6FE2tsLciaz4KoBURDEHKM2cfnhQHny6LKoGiU1e",
  "key8": "2AWSMnuBTvGgBax81d6Bnm4tSZvW8ejvhDmAfc5ELQ39hEDg67GjUgmwmkPC49GyFT7LHSUsCprzu1B7QnQezgSw",
  "key9": "2jTpf7qQ3waJuCb3C9NgbLbApc5KWMkqpvm8f4WW4sxxHEc4bjcVtcZimoPzQe6wchCBN2WcksyLkBkh79r7V75U",
  "key10": "2ByxfYDmPNV84g4g8QSYtp2xwjY3T7Rmt5YJe6bvFE4QpdhUsb4Ywa9cPf8MCKZKJDjku5A62mP3YxtfahbZM4L4",
  "key11": "54MUezmkbNj9YUEErd1kNutHEoARmcaRVwXiizD7MhaqzTGXcuhHKrvsYXG9j7CCezxtvhDMRoWVrPgFZM6WXkx3",
  "key12": "GQfZQpE6fXAtQ59ur9L1NE5y2yDvxa7SSQQvMVdjPhJS1mDxX73BUXF2EtE6Hzc133qxxP6bWXZFsAncEdiJcFJ",
  "key13": "26gKCkoKb2J4Qyeqh8Lu5k4wLb68ahezsB3vDJqrbNj3t8uJ4YyQPHn9PowxLz7n5dzhDyp2AvXHkA6H1MxVAW82",
  "key14": "5B5pLLGzgX6ukeqQW68MD33vffbVuZ5ca8XvPHbvjPEJzxhzXZqtCmmU5QdvQutR6KbSxnqh3sLzZWFHZ1YdKxha",
  "key15": "2Kyh2VAAxZqKkbRLfHwhgZ8BafH5AkHGYZZN2F2cR64VQKcVaDD3USMrbFpankae9UPjurTonvSHunw6wiyK1jix",
  "key16": "5xwmyruvP4vQSktc1Q2DSiGatesapy4ULgMZGgPFGgrheo7x8mTAq94nZtbv75jwx5YCeM8MXkSbPjL8KiQTNkDa",
  "key17": "5TmvqgbbaVtJYoR95ajjTAf9jUEKkiVKzK42TX7kywwUdXwrGFssEFLqymjTdEeSnAC9qEsUJCKoEZXgXA5FytaW",
  "key18": "2ZCxc6Xk6SasuUcQJPnN7w8xjpnvhyZE7m9MkjX2KtyatTPNg4o7rxhjzCDVbwiBy8VajMvUEVSe236Ko4i47HyS",
  "key19": "4XkbuaSbx3GM2Y8zqePfZe4FgWqGH6KRLJUxrkHmezJoudLLgVGpPYwsyEcvYgSW1Boz3XHB7mWpyDU2z434CsTS",
  "key20": "5VceaERAua73248Wibdq1Q8YLSvyD2J2BYX9Y3y6HJHjZiAaiewQqSbcFFFseE99P6whQzpb8G5VSHbpfg61LSs6",
  "key21": "5TNPS8N1J3Q9tL2Y79SWrw3PRGAm5b6X84tdj3QmKsPiQiTZUFDrbcttLun5iGnFTnq23EY35X7TJYGYPmz1koLJ",
  "key22": "4gVpAahS7ELhoRG1apvqy8Ez2Uf6r4pJVGBz3xmbf6VbFNuSwSmtMFkXstfksSMgJh7R6exEgkQxoe5joYnAsqMh",
  "key23": "34J6F9khiBfCYcKM1UKqzq99QoEqJGYFHiw5cAc5o5ASCCZUpKBm1RwcwMP4qQWNQAvp3YVWqycq5wsWBSPuBmi9",
  "key24": "5mcWKsBZyKnENNqor7NGFtLE3cL53UgC4RgMoE74SFDh3NrtgE3EY37CRKER7QhzUGESiqtXwZtpmZMfiWFacC3J",
  "key25": "2fr14C8nGXbZ7T4dckakk3ztz3k6NQTR8jv2aJvFn2H5ENRB1hcfMcdiFSF5csJYo1CHcTK7YKgajSCUWayqRXCS",
  "key26": "3Dd3ronPDTmSqXhmQbJfqdyfGKuepR6NYDKJEyvvoa7Tfo3G2pKVnn9UBUR3CrsqLABGcdxFGSv47TUnwrUVBfUw",
  "key27": "2crjNKyBTFLauVo78MXQsoF3k1Zf8LMhLFuAgnuVmK5R1xFsrT6fGH1bY9oUNUcG81fGyX1PVAksyt2kU1uuRLR7",
  "key28": "2tnGAia8iH4Tte2Jmq71KVjDg3VWvLxeuADewrZwNDQkV4W1nMQAtpfaF453fyYxCLEvZtVwRJq1onUDgD7Ypuj",
  "key29": "61dfGGg8rkqxUshd4xYxNMotkTvGGbXqvwbqiSenLcYVUAF5HMxTC3SdxxJWJ2rizvybKiRxoBJCmdn32fSC5dJX",
  "key30": "2BRAngRXzoPxsDF16M5kLSFjYfjr2TKxkDfMeCDBygqgrLNnZyfUqJNTYZ87pD3V7tnysXke1GJFt3AR7YfXYBQm",
  "key31": "2dVwdvqPDfX39xvrjBcsw87jE7CM9SMF85vKBTV5CoQSACHAWtdNCg7QaZv6XXWHrHC3C2c27E9udeYnmysfJ2CC",
  "key32": "3Byj57gWT6w8554uyCttAxeGurwWoZifVnEYUAdkqz9bJwExXGrqYFV5DprPBVzNzDkWUruCjkoNGwCVm2V5saR9",
  "key33": "rvzFFvZQynGKfwpGxYav5en6m1K6iX4CbSbBCjVrpPUX9vQLc1iSxCkSYMYuBDeFjXQUV7yy8Ff9oqMYf6XtMY1",
  "key34": "2g6L2mFYRqhQ9ydYpSWua8Rp8ekiLtGSTPt1HjdXEVjo7CJ5CkwUFoFzYszwsSW4PL88pL3unfr6tcSk7PtmN9j",
  "key35": "2syzckP6jFvAi4TdoSHwwLZDz9zpugR4sJ4pqzJCCg5RRxVTHH1pBRYrjgPXYXoDDp9vaSBDsQMf8DqieeW7CAyz",
  "key36": "4ghvUAK3BxXZv4KhhzNmd8iQfAf85rpyCErEMgAJq4vUE4M3ANab6dSmizHXLXnC9nwH7K9Ge5UaLv1S2dYcYqjK",
  "key37": "582xFpWT8VDL5Xqqiw8WUGtUCWMJLXWSxEtrh5tEvBqhjYTDYeMh7xwnb6ajFYBFHQHUv84A9jCAbY6svqqHJjMo",
  "key38": "22YAn1UxmV4t79THYMvVnyjKAD5Ho4CTGAJig6zWmAaoHBrNTLsSPMSS4djKqr3NgzevABEocJ6P53r688zr9wHP",
  "key39": "5vWce4QRy9tT4JbK3btxkaynsW6T63VSpE9F22cs6vbDWJ73SqBNNbaAuyoHNiE4G7pBEJn7w245j3f2SBF5KXLr",
  "key40": "5Ypspp8WrLj7zkXbsgfJ17ZV26CAip32iJ9XcQtfvBPG1n2ZppFtiuqmHFNE2i9BPmbWwdzUZEWsym4pEbFiWLf6",
  "key41": "4LGAtizUvMKqanyrikMNbknRtnsUS5kmtuUX6iDqp4DwaYfbdfVwMy83aWW4iLUSZs4AGKWpfCRyY817PYn7xgww",
  "key42": "2SDiEqD9yjibv5QyTr9e1evRvK5UFk6nqtW4gUHHXfNSBPadva1NepjCgHXcHBP5um4ujLVrh7U7Wvs6HzNX6cXc",
  "key43": "FPyiwyU5ziZsHcfTe6fWpzJcxuWvTuKub4ZLxXDkw295D2d1sCz9e5x1Qo3rB5EoCm8gobXVi1nJpCzg6x8VpsZ",
  "key44": "4sBaWr1VJ48r8PDdeBcWUoqvCviakiMdSVG3MPdXWjGBwuAsiD7VU2sBPoi7f6nprMLBz4MgpGJd4S3TvbAPsngw",
  "key45": "5tJGrzZjZwTLHJXBkmZEMs1PVj8MZP1WS8u1Zojk8PatXssJVwWCFyzYaxZRQcH49TQeBPCZCSo3ThCjXtMhCcEw",
  "key46": "5wveJkk393D72Q3xyMyVrEEeznKqJa535XENHBTaXVMmoDhce7bJeaz7sKqAdA8a4WAe2uE3DqtdF5W1xoURxaJp",
  "key47": "5ZuYprP92SJKbJMSrfjy6cFVChtpP1JHnAJd2JN6irXgJLJN2yZQvAMCNAUuDKka3chZwSLFjw5FfLoVn9hpPDiN"
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

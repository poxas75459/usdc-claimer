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
    "5tYwe7L9JXGBYJyy4YBr4yVi4RYW37dnBjUSQEyYMuEtfPWBFmvf5wGRpUwH8FVSCjCPXWxPkSZkSnzKHnViNQ1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PKYn9amhwNZxHu2BDD58CZZ3z33eUGmBCyn4MNrEpXqZbUuZsXBzHEUKcasYEJFhoopSSubjQqTV1DwcbA3v2jg",
  "key1": "2DAhAFDQPqfhLECG2U5yPGZAFkkBbcJAp7YfkQYodLgqEam23NjwCdZFV9rxzxRdDALeFGMYr6LqX6uFs6wJu6a3",
  "key2": "3tnvgRfEuEFToqqfreXgUGbFtFGJzYngou2fq6pzmFVBKx7UTSSQieEWDHZGvKr3oa4ctvwS5vLs5fMpHyo1p1Lq",
  "key3": "5kwf51aoAn9sPrGTFaQ47xXJtcKa1b3PkAXHHtNDiVCHQzBjhcMiXFM1DtUiT1EUVgZBFVnqyZrLXgjjka4nUt9W",
  "key4": "bA2ZmBd58sMMkBN2Y4PRDKdrqoPRxVUjUck8BBcftHnTtaNCigxXcFhmeApRt2tCPDCvKPiXXAm7MBH1UghTNG2",
  "key5": "2B8sTK2ncRGKjG5uMDm9Gzq336iUJ4hXWsppA676tExpdFcb4u1YUJX2XVi6wYU65QJ5vppmtwEs4wHKPJtt5E4q",
  "key6": "5YQkfmxnjqptwHwetoFTCGhJYLHWyzEN8rTnfSdDfwfyaNvq8EQjjPSdRGk1FE4zQv93BBTmyna1n4Qv7RsKWLCN",
  "key7": "5zJRvZexPU1JQYpySv7NKU8EVWVk5opqMyE1qpMoyhUcDCvsWNqQqcspiyJMNwPF1TmSthXegQUXPuZB5QqpK55p",
  "key8": "3F2GP9WE4XN9JFRhGe8LdoU5cc7uKkU9AkwX1hPL1vZQkA8qUCjcNu3k2FsdFJgK3mdJJJcV53q1ktttqycTyW49",
  "key9": "3t3ESqVjhJB8tLQPU9V2P5h3BVFE3v9qBHsTmtnmXPF8ghsnq5o2qFu2HEnBBQ7vyHn6vvBhTuW3EMK8FtQSTZgv",
  "key10": "4e4K5EequUNARCp9B25N2nSxpJCWzAPE5iy9h9EKFio9cit3PL3Up7wCoJNJLjmAxAsbABLrpdQ7BUZG7GEQSGn9",
  "key11": "3A6SsPVLB3kQJoaBBiwTKojup6JjW8sZa6Lhi8Ch6VmT2QRSKucunrR8KArKvEDJURTznq3TWYfpfk5kWxFY8pXT",
  "key12": "38TzYn3u32W69BSpyGaQztiS2gr7jct7TnLyaEZbvqviMSuvyzL7AeXVgrFvxtFmx7Uj33s6LcmCksdb5nzrqa4f",
  "key13": "4kKpAwwb5kjn5Jomp92gEr36udJ24knnhkQ8eyWFXZad7FHc5nrH8jKaeuh8Xo9if96Lznt62dWArMZMGhycbLYi",
  "key14": "2UbkVFfH9xvJfi1H5p23LGgxMK7hQuTs79gQAVwx25YKGffAxBiPihYgZRBS3xS69e68vghPzEZ36GsUetXWupbx",
  "key15": "5xqUXhkuCo7dEPNKNdBPsfY9sePEinCv4N9dSvCq77tmK94kzKnvUFiRrN91X4Ezyq5zjJsoD2LU64mskBhPwQbq",
  "key16": "4K1X1o7XkWtCN5y1yfvBmY6RjyY3dWnkTNuaioTheucigMWTEqWJ8N5To6rhfoLPBmgtSJCAPiHUmfPYMovdSn42",
  "key17": "2DwKz6pcvALoJy6Gqpdpqj5fvUZxUooZkjGT23fqmLpnd9T29FcRhgumPDMq5JQkQw1zjgGGmFFwBD9QiDfWU572",
  "key18": "DAVMVZtsYEhSoxW7t6gxfXtDmwL4uug4b1KK2ztjRtrQ7hMZvvCQqMJUPnVEQQSE3DB3pK4WUgfGL7StCGSMeXe",
  "key19": "5RY1qGwmuXAe73cHtiKKhqu21JicBPDjs8ejMGa5hH3V97QettisRWcuEApQ4fmGFogxUFMt15XRbGuGwdJQwR6R",
  "key20": "44ErmKwn1TNjpCSJwEJrsRwHtcAcvE52tRp8qE2abxwLKY4pP5yGNCKnq21RpKLbPWLLBUCrA9E79kyp6FGp5cVr",
  "key21": "4T5KZ3dGdgMaEiE2aD9Pdvy42UcMQfqWUo4BRH25CAEcebtA8xvS1KGWJ2q2vu7M3nyX3zZ4AdZCxxSWjmpR1k5P",
  "key22": "2H3frQvxD68bjWK5pYRWboP19B1UN4qGi3VaTjncKQ9tWgvdCc1NuqhN3sEvJmd2yStQ3hmrXh41giLJUGPn3dLR",
  "key23": "MLWEJxAmKE3uGsgL1Nq6xrEvyyaWEGArpNUFXd1C2ThbkBwSmuELgDqA9bjt6yCbWHbh4Fy9uSXBqW3P3p3q2oE",
  "key24": "3Q4HqpCQeVUEGrDmJxqc2UcDkZ7SZUzzXeW36dCMDc3isHmgoPZoWNLLWWXw578t2883kFnBKqmt39kdHJ59TCCc",
  "key25": "onDU6vCTwz2EGsiCbE1aKotiTjPS1BM2Lp2x3fbrvnCM5iKzQvh4jKJkPctyKSVw1rQbTwLC9yUQqLFJ3TG6c3c",
  "key26": "5sHnijtN7fxaLRXmCfVo4ZqfmhWoMT7fpdS7L6971XRhLGKtRuTH3QMBrd8tpVy9zt8mwpUHbjrC4CbpjX3TDtFb",
  "key27": "4G3AaLTr5PZg3DqDntWKeA4vFD7SZjf7AMt1nHn9wqVsYTXk78cWnguY5CrMbBWdjiiti5F7UKxioJTCWUx5RKSd",
  "key28": "4tGL3XA2htQ3xhgSk1ZpP2ybbfaLx6gLFxy46XBvkGcZbdm3uM5AuJZH2D6QmqjFrASaRB1t8hg2DM6ssrPibZ7v",
  "key29": "5UfLSQo9GdBUDHhqw5MwqRCSSbx1gi3aYAn2ecWEEZrifvr3Wg6buj8LnHXEVMSHesqNTbZubHvChsUCPuh5FamL",
  "key30": "5gRvqq81wSYjitg1y7P1QMjky1YLoHpkdtK9d2VRyjW9a2RE5DK2gG1H5AqP1bWKhk51KvUcqWQ6Yc1NkRLPnFcH",
  "key31": "3HaBt6GKDQfTKm3cmEYKLM7ud6nFUxfnQPm1U17evou6iBCqdKuLg3MKMCGhMr4h64YtNPDvFxpBpQJ5NyNadBDJ",
  "key32": "3S7dD6ZF2Hwwmnsnc3Cm8FDYHLo5UEkDC5PWejCMaSBJC4aAwgrUcczn2UEwCtFTE5R8eAs3VRfEQknLbAT33CS",
  "key33": "5XYtemhT61YvX1mCjn8mmd2UkCB55x51zUfosmk6X1vBk2PwA9ArEnqkrhpWc2Ze77phHLFEimM5bzSSn9qys8hL",
  "key34": "5mvdQnYBRfJPw421c7Vdn8akgK69ddF1vD3AZXFqAuEseDf6kdewXpN7jpGCAqzSnrCF5vsvFHH2qDmuX7ELgHCz"
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

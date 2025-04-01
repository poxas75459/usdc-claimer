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
    "4k2omdGdLCU9o4b5gprLs2XLk5koWo9tVuzThFDunZkFq1QQf7DYjd3Myc8hzdwKWGyUGyWb1jUXnRYvDUUv1sd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WYA53bm2dJnh85d1X6g35hvBKjQpR6bScoPYG6sBtXazFtAc72yBqXFhg4r1L89f4hh1sKBpFKXmaQHBZNCerP5",
  "key1": "3MVpXpT1oY7TZHG98g8eLhZRg1pTtvBc1vEGwYxepXcGxekVcoWeSXLYRmXDCXZYaWg1Homzckc8A4H8kvkB1jTn",
  "key2": "62Jmh1G5KzjpCvwCQUEXjWS26auLqmw6MPXEtj8ekvNreK9WyWfSQjTqfWdQNhsXMu6JBgZmXq18g3Ghym85Ggqj",
  "key3": "KKQUkdKwnWv2eZEXUDTZAKZPK5v9XFjMD6UCgyYN2kbpdg3nyGWRvbrSqLpc9GMxWRhyWYxGtRPfm8yXNMJwzvB",
  "key4": "2rCSkdJFCxra1g5FXARDQdAYvNb1ttRGRhiegK6gN6AXWupVEbPuwExRGgbqz7qXmR4vuDD7eaqNj29m9h5P5XpP",
  "key5": "2naHT55jdMyjEnKbbw6CtwHN6BKvUrnF9KeP7cZ5THYftVEwCydLSUprnH6JNRdYV6fZxgku4bYVkbWevnFnxfRk",
  "key6": "2HwJTmusLxhHt1o1m6FCBS2xJLF8GsGYDjxixbCNkCfBF4q8sTjg2NTNHm7JTHwFKLZxqte8i16uiYu4d7qnnSQr",
  "key7": "5u2bZJSQJaDpd3vZTyvg3RAqQioNbboXmqvwB87Lc1ieXaVG54pwHufMhv9UbJFhBq1DLZeoiXbeknS8NLmNQy6y",
  "key8": "2GWeiZpMaPXagJx2uFAdFNwqVDDnzi8apvdNofrGSUnwKdoxbveY4cfWh1by2kBhwCELweFY6FazCRM5uJecF7u7",
  "key9": "WAmsYthm5sGkgkqEFpPEn3cL3t6LNZBZjQfVkRGqqZmVq4ffYJMgz3rpxpJK2iKSgVbC9kb46gmJs643Pv6ky9p",
  "key10": "2WSLPsnibuzTWWNAskz4CxUcrhf6HSfGAS3fGZqJBbrhFKrFUu9wpvq5X5kUTkGRakMMsSeX1qzdXkNGv7uHWKzu",
  "key11": "62A122e3fD4YghZptE1kQT9p26saZq1ujcJeA7oaPmZYasXN72TmSHTw3gNW6JYAf5qd1m6YA74nxfuHnTv723tm",
  "key12": "QqbaHEbTh9Ci85NMiBX9qkXXGh2abBZT7PhCgKewKSjzAP8Dv2SUnaScGhih1eaFtWjpd8dExWuxP3KNshPBgP9",
  "key13": "cLJiS9kdFM9JXd3ZkEJSTNdfTaNAXkizLvSjG3ipx5agZRtkC7nkmZ1Kt8pcDsdcq2HGdj9NGWRuHnUNGe1Uu1q",
  "key14": "mc45sFtr7RHsBAZr4RkFwf5VWirU7GRh49AyxFu9qDQXhwcxBQhQFC1EanBt4vpvKDuqqQ57sMTdozNikEHAdeF",
  "key15": "5mU4uB5FAJNTTh1Qrf5NFNvQ49VZHjw4XadBzj7aaXTJ1ts2R1wgARR6eS1jB4DyHrS73x78ow4f8SdTq1t3tYoH",
  "key16": "2Jqd8yKxhnMbKTebVNoUm5Xn2XR74cpB97X7BmvwFmjVAPbGKmvagKVfCCb6ApDtCVoxc4t1X2UVh1ha5Fb2jhBh",
  "key17": "1fgz6aTHnwNfHRx4ZeVWo75qvfFd454SvMDvSgPQ88tAfWAcTiFSQ4j5LEsarMNnFKKFLySaTzQu7sKnhATvMfi",
  "key18": "2Rqw2YftSJg38YqyPSNnKjX4y7hvcdRgrDZP3vA5iqV9Aas2Qj2GCB8Lzzwb2B45qoaUazdGrGu5AD4iNvDqYfU9",
  "key19": "5qBsUvUi5sEkntL6aohKJZwZCGfrfo5eqqoAT7yedhmQDTLvjaqxswNidHbWokMB7qBM5HUJBECqNpGGpg8PhnPX",
  "key20": "2L9b3kJnGrf3u5EvVUSYSb8nDmUYr2jBsjY4YBa4VzuZ1ZZGd3VmavzyCUNNsuACbGhe4ihdHYgZw2gWvHMZEEo4",
  "key21": "4SF46w9wHqGCq14xU1X8qQkAaA64otkoAAkiKL4UVmscc9ETEdnFxxBAuEBtw1cxfb3XEvtqjtoDwhJJ1PCunorE",
  "key22": "28Kkvkk3AwnqtNHWoTEjuHUPNFr1yzLFjZuF8NLRJWShrVJ8VNaimnZapPfAsWrHvKr8ohvk6SPKsy4EriMq52db",
  "key23": "3NpQTyJh5KLNrEFjciQo5PvryJMvCP9EdPye6pfT152uGapF8J4fpuP473Mi62B5A7WKS1ZqDuqbQgaKbA21hYSY",
  "key24": "6QYFKRiiVj8wuZ7zvhx722yjUpnbgWC2yZdbEVZCWMwVjgy1hM1cwgJyL4gR2iBkvdSprHYLMDYKtsCEYEanKLx",
  "key25": "5okLSuK1Pr8fnVdsm7jJJufEzZ1xdxsztvYSL5eAmEKscWKkCc5VqRsqT2fmNc4PyNRXXDC6XZPqsVi82VJAK8D3",
  "key26": "4rbomfoJSc8S6upLsCTyZb5vGiiBLueis9t3ytwzj8dEUFvzHEfedzbSC8DjKpHAk9hkGVuSBKSvh97nyuwxdYwG",
  "key27": "48bm2ftE1V1RyVRZUdKxYp5dfPd18ZtEWKgBTBkdeGHoZ2dmmBnSNCDkcZf7L4Qy642HANrKkiJJgrzEroqyv7rb",
  "key28": "2H34r2ezrGuYTo9xYQHSmnTZjRGB7W8rNLMFCN2eRS67wjwHhao14Kazq6wsebT61apkPDnD43DX5WHcEcMBYv1F",
  "key29": "4CzpJKbkLKFfLVYcgGoP3oqe6FUYinPGaQ5bn68EdQ4ZdBsfWFZSgRQZ4a4WJtqrfmxNz6tEgfQx6DF9MRE3qJxp",
  "key30": "v6HEWeAupaYXUGsRg51fPJUgVPMcxjdc1TAzKSDhW6D6tTKNavAxRmFafW4NjW2KkSrViVpE1g9niMm3PpTtB9M"
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

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
    "3ah6DQXuoZcZgZu8oRsyW8m5wQE3sbfZBB1DvTBC43t3o3WXRb3mmJAF7YrB1zRm2c5zWQcJPkt3SSbardt54yYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wETajCBN2eWrB64sDwRVecZ4dwjuyBEzD97guTPbbLivg6RYgnYpTJJoRW2cohb4DcSPpyvSHnT22o5d79hEdCq",
  "key1": "3ERGpmZdeZdk783x2pk4TtsfDjPV5pFYMY5WSZyK1Zpj6xDspGhLbstzTSCB1QGnWLBr6TFaBc4vS9mokFPYKqmy",
  "key2": "65Af4EyxXDL8ENvn2pQPzDb6zu4GrzD5NxBFK41cDMFYTxLps2i1BmapfRBSmwPneJphne3CbU7VS3Yr2qypVPXz",
  "key3": "4PFYCAspEakWR6vfdCmsePo8hthqjzRhttMmuGVqNWPLqcwhxJ1qKdFfLyGKWZMQnBZpvmn6RJ8QJQeEfY1MsMiW",
  "key4": "drVjxC9isSa7SzAQgCdwHWygvkcKiouCk2nMdgYacFYzKdJi3mf6YUy2LhuX1g2G5jF4PmCuBSVUdqqfmhGrC1Z",
  "key5": "SD2E7vZVA14LsX7XW62JGKSM3GfdPc4962tZR2ifoDkESXo3Mqr5kreNPVpwMxkbuucmeGLAWLuLpzm37ie5Jf3",
  "key6": "63MXfpuE91fpMbt2gVipyjobVN5VMpFr3KbRmezuK9KBDbJm9X6YT79o81VVdhPFzgb9N2rDLm3wZ26Z15DC358s",
  "key7": "4UwFDaA2qbZVPWM6o5p8Q48hoN1Y56Y4951ihXJQknLM3oc2ByFzAR5mmfEkUDDL5R5dSERgzGWju5eeF3trC25u",
  "key8": "eH4Zbrze99UrH25bHE8pCXSH8c9UooZZxACn9dspCaMuVG2HWzn53Npatc5dKDgvohzWi2q5HvrqaTjcN9v81eK",
  "key9": "3pbhSamQVVg5FWapBhb5oMyWHAjvAokzZXUL29A2V1Dg53afNQkt4uUc96Qb2YaQLR7iwCLg5QTEmVPhzrK6xxWf",
  "key10": "2Z5Yy72tqkakNdzXgfBphmbNQQ15YhK7qDay5EMhXALwmjh68xRQPFiAybwNrXLDD2Z9Ldej8wTQt24Dkancu8gZ",
  "key11": "3jksX7pVS7VKpKcbpCd87XBpzynWGSkGMpCdkYec6GoQCizLt3oTfZgEAJRsefDmNgyxiVwqzxWZuftDQPndzvdY",
  "key12": "4WcK6nqq19BJfsEAe4iAvPVgFR6AjyBEb75eKAffwfXSHVk3tRN1VX1upbnBDNhkDZ13aUABL8PU7Mp5Z6eQ9uiC",
  "key13": "5PVjr6A8A8GhK5sDp5JM67M3MoYaSYy3iP4FHxABZ5D2tw8my1AFKYzGCnTuP6gGWgrD5GzgkRqPoXirJNR4BLik",
  "key14": "29td5zJbftDvPt9d4CrNP61FUkAxkyYcLdc5iYLAP2LBDdBeCpPKR46nyszuYyyzWvAojb3PcoeRNpFnAct81otk",
  "key15": "3Z397rcvuDcqkhsLJK5dVv5mpqTDHW5LaJvpcFjRyNZRHKDtNsk4J1CXYa5KEDBjnBsfaYFTQ91VWZWT7VUBWhE4",
  "key16": "XnFZ4SuXXwEuUaQfUsqwCvW9fD27P5nrLerB8xA6HUuiHCfUPP4BkuBeuXbj8oitRwT5r3QneuUfBiKUeAm8ZA5",
  "key17": "41JZLuTm36oWqSw7oT3gP2utzbc7wFGZ3Wsq2xyr9mU1MmWkYmbUTTBnPY5Tcp4RPMSiTfMqMxdfALkptHY4ACsd",
  "key18": "4TNhP2pDhB44J7amdeBLeiJ3fYch1GW3kNcdrZb6TQVwx16KBq4tfSMK9V2J6AN61ohNo545chLSWcHE3aUKvSz7",
  "key19": "2Yw8hwZKgdWxeDc6GfCbRCytaKSnmRarrjxvxHWfmQ65W8xThH3XBNsvQtEkgs6JJY75QVGEr3aZVX6XcykySnoy",
  "key20": "4RWLGbMzZ6QKwKvKvyRcmfbZQBtqkWq5XDzLrQYBzkv8GFGzSYNxqfkaxM1xWan2D3iGyNS6eWM4NrrdBC65mwJC",
  "key21": "4CqVKxwZRNsSNJQNuRXFW7zsLXgKYxx5ha9Zp2ZvCVhVgtUcDEGazA2dw4NugfZ5zHYGREkKp4ViLZTondGXRZFH",
  "key22": "2to47zqFrgtxherjZLqSPFsfNszWZjYvhWGZzzrXqXRSSFjncqK6ZBTFun8tDs9wEgMSTnb8MktP47PEckn2pEkC",
  "key23": "2jmx9hQPAL4997QYCBTbysTFjrvu5YFxfVQBkDkHsF1P9AAqcgivEN2EtfB7KQf1nRX13tmmiig5edHE43ZUNrA4",
  "key24": "5Sa8J1sRoBUwtLTdujg6BU7hzPiVWJ97CPuswcxtLpVKdjZXYgwTZqfNQAV9vLEL6vfgQ7Ko2tCHvroUJTuQavYA",
  "key25": "21ib3igRBJyGeYnTcbqFLzGk98j74Ym2iMxKeZwJua8g7mMZT6zXFn1WAMP5fn6hxvGDhQ2t9WvAjbZgCZ2KoueC",
  "key26": "jQKwNkXnQRJGn8QCBEw6EYC36NWfNnUWPB6m2KZLKusY7MK96HNZfSK8tNVQZtiUvXyWpJwQbdhW6xA3s3TkRTA",
  "key27": "3Wq4qy8F67Gk9tzNi2vK2CCuzNvCNKhJZ2wbWyLggCQMPLXq8SyeB9fnL7WuCVs528hhAJug3cTBz3yQkCSALXjK",
  "key28": "WyzGWd8EpsNgvsDkFnvfU9ZkNQigpnxgmrqA2fLNu6kfYQ6DMFza64PeaPZ9XKaDwGe13cPv7qUJkZL54MRrRNz",
  "key29": "YC56hQsppDSwJ7K6dGtpBzQeTwuQcspAGQQx2VMqDipvdLHxYc8sV1gtT7tELdnYSpSD6EboeUhRPQ4BuenZdVe",
  "key30": "3jkvd5HaVSL9qtVJ7Wam214TpKMk3t5X4LMtjLJtX3qW5QpsnGaYZigiCPiFbjeZRDxMNPHDSGpwAcuQYaKd8qpu",
  "key31": "2eH8pqmmU7RkNiEDHxxKgas9kGjk4n9v49G9GmjbETGp8rX1scd5d7ybMMRxQTZmyzQHRfGpeT21PqzVUqPHyCsn",
  "key32": "gnizypH1NecFXTL2XHHGd6gdiH9aApWh2Wb2xphP8K1M3EKQd7Z8VXD71342EViJfscde1uYL6SK34xW9oMkfVA",
  "key33": "4cAVXieSv1zGk68McVUpnuVB5kuZsxmKCh2ocxGVsrVbtMCQ4kPprgfZuMScUhtHS15NRxqbbZuwhfDpkm34Ac9V"
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

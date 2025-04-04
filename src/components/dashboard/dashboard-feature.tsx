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
    "25mmhnTHW2hF5S2PxRUdp6M1n6m5zsnGWLgBLchAwje7QSEN6z9c7P8nt1LiKSGdH8eEdpMbqHK2CcCfau8cLpzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhWdUMycuVznpXMnwjHtxwD5Hdb5rHAMZNsU4bkKnfPYvNT4VKpAweAB3sun7RJYGBPVZaQyv22ZfyhMvdPkrf3",
  "key1": "DynhWmEywo2dxYb5fHKgQJU1q9ftm6bV2zNdhQsAfjdAcPzRocbk8L2UdLXjbCsfZL16AJHiKWuUgoEHPwuFHq7",
  "key2": "2DTV12XxbZnPr2YGfuNGCKNvfwJ7QschgtVqiKYTgyaCtgq96y7tAhWeuNd6o8rshWBPqCEVmrbfjF8JrBjP1gpn",
  "key3": "5nPCiDubX33BMkur8gYEUHj9nuUgby1gnAwrebdyPUNskUEZtCU29Hf9v2BsveDvWVdu8gzNYJa1TN6te1ycW1uw",
  "key4": "owTAV5d8fHcZY1uptWwukkrAwQDbWQpqekkj3cANHotfarM8Mg7hGs7r2a12x37U4PwZhMeHn1Bk7pvZc9QFnPB",
  "key5": "3p87cxxYQgtbquA6JAsumsFKiBnRVTrc8TCmsfEtCBSzMjfdiDd1VZQ3mpcc4VG7o375r49NcXx5KsxXnvjjJNVA",
  "key6": "zLtmjhTthnhFtVFoQEQZSvqbaEFidsXyEWFfm4ynjiGru6in6GWFx9Zg2EU6maDZ9gDjG22rSMEmRatm4HJkb82",
  "key7": "5xtSsVSVLW7zNyEo66xZeq5MpWwmgQGQm2mMZdr7ZcfdQdcSZUzk4RMmWxZJfkoEfUEEK13nqsGfNFfr8eZA2jwA",
  "key8": "4erCnG3sbWfMS5nXwVsn5QuWZw8ZGQmRWK2VxFuQTgXeumo11HuPiTdGiFZN1SUJQ9B2yo3hqBAxzJzEqDe9S3RK",
  "key9": "2NWLaifJVQCHpghYamd5ymd9wFTh3j4EKYixsNgpeTRGp4ebh4tgxZkBMsZ8TcxrsYHkTqjdgh5VxhCZnwfdmHWD",
  "key10": "xdMWkey2B6X6csqvTYQb5Vg1Mzrh2AcZnT19nmCQRX59hV9NCCw53KxqvQpFwLaMWguLLqfZwh78bn9F13GQgwm",
  "key11": "2cLRGhEPQbDNc55YSXY4F1LyYC2ZWThwmVGz7miSscbfpDJLU6ziBPvcX6vtb4tCbDfTnPMG8dNTqF23svpPDY2T",
  "key12": "wG7Q3DLw3BhHHc7URiEntSgw9i8BV8SRPpbEcypjQG2qbjbgtPgsXiQW8Ez4Tx4nw5EeExpYNBchcTp5Ld4M6uA",
  "key13": "4j27QFdy5J1u6Bf8vC1w1rGGkyZZr1hKG37r5ieokd1jc9GQKgRN4RcF6U89wDAHyEt4Dqi5iKKzFkCFV64TphTY",
  "key14": "3UsN8GnncDZcgpHrQrRmKa7VTdLHAkszorBURLJ7zizccXznaCS7MNijfKcubfDX2rxWCtp6JegdcjGj7uuvEQXr",
  "key15": "3L3Nj9dta7AXjRvB7NTDUAguTYYer14FenyRLGtCS4K5zV6ohnmhJjJPyjCYw1J1Xu2cczGnipaLaubRQdSzVeBV",
  "key16": "5onWBauRtaWbWFXj6neXXfuLg1CTeeL8qihYmnWSfY5hZegF6PhgtsFRYwoXkRT6oDEVhruEDQERGaLbU6ut8cGF",
  "key17": "58idGg8yb86CDpe84TXKp24FfGBRRsKsYFWncveKZF4VuiVnX7CcgKieXYbHu4F7XAJeJGvVfP2McpsoyFKAG8gN",
  "key18": "MezxMu4wgLiBDc3F9jLufCgwD7GZZZmCdjYjL63zaWGC9Kb7sjDLs5aM1a5WNrXdthwjMeD6mqBM1Kdk5NCLBgy",
  "key19": "3YQuB554uFzVMgMsbmErTKDSKaroW41AqD22Vx1JHGfxTuTG9RAaDSo98trqzUBZst4xCsPqZTxRexaGnSNmjHTt",
  "key20": "2drdegHYEFsAZCbUxW4cnBKiwLEEYyUonX3TWSDEvmZ91MZMkRM13Azfs5pQNve3PZfhp11Tz2x7gHNajAWP6F6",
  "key21": "2dfazyipptNhrx7JDZMpXX58Ep16ZN197w6NAFiu5gCom22aRPjjoeA3bpwqyCaDd6QFWJV17LvErenKYzdK2Za5",
  "key22": "61sTBZiuUxbtEWWobRweuKPFmzFcQXCHXhxiJvCZaaQemsPaCLvNq1MkXFmotqC8a9xCxHD1Jz44XES6YQXHfCrm",
  "key23": "4TgEKwn1VJYc9wMHA5W7S4vk9G7xBkAwx4K39xzNXtk241uwVocBzeyEKUrKD8HPYqvTaZLzx264BELtgeTjwhK7",
  "key24": "3HgPKQat1kZ44To9zhXf3wiabnRSkD6NB456zj8o5ptYJfLN6bMxznYTK4zV8VDfBufTjrWDjHC9yPEjYBiPHGBU",
  "key25": "4s9JR4DfgKS8oHBCDL4ugBkMbYqG5MiF7ycZh7ETbi8YKLr2pGxhm9nNfKkoWYqeCGi7k1n8vQUqgj8vjJ8mPtBe",
  "key26": "yWpruwX645RuBCKCy1zYgDM4LifhPCispEq2zBYgFjj5jT4cNWZbJ6jHDeEv2GPBpG5xpjUUEQPAwBXzKcL9B2J",
  "key27": "3dgS8huUDUsyjnDFaKC1jRpJzkmCNwUTcFaJcrxRFrnKz3TUMzNuyhJuLrB9q9GuJPBPHCMdypae6NdvDHVEbJ39",
  "key28": "3qHpB34WUPSJr2VNPnKv2tfoJmqa5id5dNGR1rfvhkTV5bK1bWyZH9eQAYron1W2iPyc8nYi2eMm6b8oDmE9oYHq",
  "key29": "5secgjrUFzoSkbqDFHZdaB3fqo293hV9DrHVEA7fuvEinKAmP6vEMQeRNuzgfRbogzoXyJ2SvM9VaUZ6aqUGARWD",
  "key30": "aPaySjmvuDPmZaYx5Rz6QJjC3xudTgQTAYQGvSjxxRfFiQrxTwEydZMctRgrHcWit5k2xEi1jd4Jh25XCkicX6K"
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

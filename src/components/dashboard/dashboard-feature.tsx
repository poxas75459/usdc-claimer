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
    "4buUKFvzjoJ13m3K6xmojJZxU9XAZNwy2qKwJxyKWBoJzMX7VGdoMtxqUxkk5DgzggUKgMNdzjqjydFU7B5FP6yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23hmEY7q92ZWAsSY26ow3CJmSr7NmHXRYYzWUav6tCc9h3Gb8pEMkWpsdrjkPF6cdAy14hEL3DdQ3DrKopRcNgVQ",
  "key1": "3RCfuYwvvAmnMdEdzLxWzVwzJSrFfn9WXQrgch3Hpdpjc3CfhwRuvWUCsyBW9k7nxnS441x968TBDDfk4Mi2gonf",
  "key2": "4kJrFhZ2CPZkoX8fpXb55HRwMxspXgDEv4G1hoVsUi2f3ibcK34D99XADkqFZq16Ui1oSwZq95K23YWo5UxPnnys",
  "key3": "mCMqdCdMrBhXt8ppSyZaRJtsrVXL17beKYxyz1QQZ2fpv12JhNB1b2qKUM5XxHCiayw5aSaFJv9qHTb4MWWeC9a",
  "key4": "4zyCbcA5mfyhCRefEeG36XsxvaqvwPsKCLyPXPeXdKZi9rHC8MXEHGsNXKNxKeypg7kX864tdTgNU8SNeiUU3KUv",
  "key5": "97a1LVu95oj6g2WrcTc1mRBn9edpTWTDtudHcx4HiaSWBr6YapQ48FJeoLUQ991CjPx1RBy4Z6jwmVGhyfcdUmi",
  "key6": "57ywfHUb4tdg9ZD5Ptt2mw4UmHC5QozHvQ7A56pUyVm3xccLYzyaoywLmcYfyveXZ2xdMSxNssU7fRUKwQbzQ28r",
  "key7": "3CijoXnSg5f3bNiWx3bJXVqeHGMcaCWa2ARmsHLN9PGZhihxfeZrkbDqZDnRJpqLW9LF8R15Qk7CoY4iJSs1iXSf",
  "key8": "599AoRJKhVDbidLGvD85Fimzx418LL5w5gDzaQCNZ3xvwkT44RehSfSBNUZP1wJTw55HTPHDQT72YViFmxCRj8Hu",
  "key9": "PTm8w26jSWMpz8QFM2TZHspFSt1tywg4d5vvFvQzFC5AjCDpuNNhWE5vPow6wG8wKaT5yNjhxxTwvpQSN7X3JK7",
  "key10": "2u49xjjq4FQFQ4DcPmQBGXRWn5AqAfbA9uxtrt5JEqjzDbtmZyQPsuuRPdLsiB7Kr82jTBGBNrMATBSV3nXbGncZ",
  "key11": "4qaGg3BGP6QbQRnch6wy6YAD6uh5kJ8wQgc2bQsyqwRnnjrhzcigLmhUSfuf2GbWkRRbQTLDVFM4G9Lot3nMX154",
  "key12": "3HJa1YB1i4vN5UndjKwBKQSD7cbviavEhbyiARynSusFJvtruToMEBhy9dMozj8X39shm9zj6Z2dDExaaBFiZJfQ",
  "key13": "2njwExujDXp2DJbMfJr7KDGpcpjgmwNaZMdqhGNdwEVVEyNhhQtGK5JtyhWhy8G46JRDQdR2rBxX5vHtAS48jkWk",
  "key14": "4LnB5zfczSxcZDDKc5pMxSgoYhawqMUHijC5HJFf8h5YjXAno4d94YesYY1gtBKnvJgj3PgHJkB8DhaoSaaNF8yu",
  "key15": "2UBcj1SGfcN3cJHX1gAmGVL3uFLuDFxtVQALKJp6yi2DncCfTTybK5VMr7zzH4XeHNbNHRxMxrja5EaWJbHgwkhr",
  "key16": "3VM3pEEJGGLM5VLNDkhUZ9zoaXGwrP1EJtornz2uUByyNCQ2BnYrAqcgoLMofEBigYHdTppXNJzVptaw5okab9Lw",
  "key17": "3wV4EwKEpJJnnVXGSbYb8YWAEY7MS8B8KTo122DWo4uesayJM5aA5YERp3ChLgFWhVcbAFSvsyptw6DXuDuYP2Dh",
  "key18": "51R4XmKPjDstLZLgdDvD4QtscDKaAuZEBxLxoatKsoz83ZC87zJYm3Rb17SHZnTveDwKMkDxXxu2bTeMMQpSjVvX",
  "key19": "HypviGJwoYuuL4r3SuQtukLgHZQYdr3GhShEAHHMB7pBNVHAPhAhJxBUH1UDXZsQKbgBNWiUQ1gCWEwLcGrL33b",
  "key20": "4wv3YwPjX3DPSg5sMspAYXp7TnhtXq5gHLMArsE43aspEebBJBNy8yfbkEbjAmQZx38trzUV78PVkV8hhPeFSBHR",
  "key21": "2WKbcdXAa1DawjieGD8NYAim78utXWBpnvqBgMyvtoQtqVKCnE6PaogKYjYKJ51HEwgUPVVd5u7cQP7rEfvkoPGS",
  "key22": "3GD5kZtLs6CuJKz4eDVD6xp9SVezemUtNxy6xdzeabnKzzoXuaeao8RbonscERK6dYgcMpXcdCGWWPUosPxStyQC",
  "key23": "4ZkDLSkAeUApCakQhpTeqPY5YH6pRbeeayjeDHJWk8EQkaStKY4Yj5ewG2d1DNrnzTKQ4tiFfnWE2f15kLJpEvd4",
  "key24": "3hZL7FUHi2ZNm2jGKE4wojugNHituei6WabzAZnKEHV61EJEed7DbrLFaywsKVMUdaKp2JncAPek6oqriam1VMNM",
  "key25": "55WteEkpXqhG5MxvUHC1y443quthJ6jTMsPfs54c52BmZTFLxY6kvx1j86Ly7wLG4JoK8JtqAtkHsKKkE77QGaD3",
  "key26": "4D6fDJ1D7o8UTKmKeVDMsHuz4qDMspzcAwuGJNoo6hpUYi8cx4U1joyTwptSieVEBZsQjkfA2FRmumWRJ5fF1CZP",
  "key27": "3pg2tkLh1nA7LmLxKh1hHehtqj4K9nrgbVhw9jKABxyf3FYC3N7N4NKNfExqHMck1mCrLi91xADKWjpULimE6yT3",
  "key28": "QGsS8uJq8rypkdMf2dz78uiwwZnKQt4Hb45sDPED5nDgZXvXueZ9fiY8NqLSsYWASMLg7uhZ37LpHAiNKcVAC8N",
  "key29": "5uvT7D52HCJR6UyaT2QSEFLyDcHMCjjQM6gFnDiTVJkuMvwxVi9AkgPRtFcxU3Yy7huoNciQ9bPSpc7G14d6VT2a",
  "key30": "3xj18m7QsWhuLbupzVf4jMPwR1p6rUPZR2fR5wsC2jSaKn4U3mJ6eYJZkBPdDoqL6z3v2S4gFQTnj6BTNMXxXUBD",
  "key31": "2BTquTQHh1n1gCu2KZ1tEgrh4NuAa4SwtstMFsk8My8Psfb7mRiFQfK7QFXnRqrwcAx8mXxNtRBBvzLzKBUwRTHg",
  "key32": "3bt8yvYSptk7ykkQTs9FN1yfDd3DGz1ipHf9snxnE2cRQKmhfLw5V3Ds98tPoURw7Coy2CozFDNdGRtpMnriH8Mw",
  "key33": "26f23V1kcknALvMo9AQirYkTk5K9Sp9HD7iAC5ft2LrdgYa2TKGBoXg7Mw4AeXm7M7mw3q4XrL36bTSnRD6RtJPE",
  "key34": "2zfk5w9XTxwYto5wywfnWxYxZQgvKj73btmf1cBGSzskmyJHvRZhiUjiuyxiKEnEbojYMKeM72Wg4RYmsf6nRmm6",
  "key35": "63hkqpJz5bQrwPFz3owi8JZrgL1B2sc3zk79HGmY9GoZXxeFat6UQdjjPBCveJPdxUaoheaZqzUqsbUU8aHdtpFy",
  "key36": "zYrkCEm8k4Hd1ByHcRZWps3CqcH3C3wnX3X4q9SWutTGU9ByEg6oK5Ta19YDTuqWD8EZ6YMBt1Cke9FzLf5ATWo",
  "key37": "5HbjUtfH1jPw4mifWbuGbMEaYZKUFkw6qsYkVR3PX2YByWnA86MvDbHhkgVvgFzSFEooJqMhHDE5zrktR2N1eDC5",
  "key38": "3fZtPk6LbBMSynJeTUhQNNN6gnqnJ6mWuZ4477gFSUuH8H6cTGWj6dKi1ku7VWm8GXD8uUXBW6jn6bbSjy39ajfj"
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

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
    "2ay5nLT2suw3zPougpnjBUYR1hdhZT63CtcdAyt4MZ2TPeFX2Hp26nV12bnqQZJ3MojUqsbLTQU7FSSzgRUg9MSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36yk4scArpBckgJxVXJrjPR7rMvTv7mcTDFVjwQA9ztP76h1M7jeRRuM2P5ZeqKwhzZNYnBSKYYcxB51qTDGS6ME",
  "key1": "bEebJV4RnVKW3omiwM5iYdLxvcoehrt5dYmKAk8LBuzeSg2JWc57fVqwgxPDk4wnwXjJJ4g3BWc4NJBMYXeKg5o",
  "key2": "4d8LJ6w3wpYLYcjW62hXs1mSWgupHrxsGaqZ9Gi8XjDinQdcmCjPcZZ8PfZCu8ea9nFVncGKLCgN77VXCdkXLmGU",
  "key3": "cDisgpNwD3PLG7ztcMqNLFqGgBXrKDaWCBw9QPdNCBbhhctNs1mMbVwxtrhBpV6BhoSUPKgf26nGo7z9tTkMXF1",
  "key4": "4CaZqhygpXP52BnssbmLTjJ5nGdft2ppt6PWWYZeQpNuGgBroRedRobp4649XqKe7kyPog4yMN9tJnWjzLsbWgdX",
  "key5": "HWXodjG3jrxi8u2Y8BvVGQqLzH4P8Y3ftYmgt2ag7T4MyUjD2om9qd5A13ZEsphMK6RTyiH8AmwEqkESGjjnf4F",
  "key6": "2BbF2vanLAjroKRgW3HWjpHhT6NwS8FLiRrwD9beQAQy5FPa7Co8k65HkkhkFPY2jwvEMRzrZqUhfVDr1maerpQm",
  "key7": "4ZNfTUtx9FPLzzHce7FKt5E7tCvqAcvQaee1JNLXtXd922FEYUriZcccuRNxZRufX1B2BXCEXXE7u7WNB34XB7Pa",
  "key8": "4hjn6FManjG6cSSfhNidKbPmPaWRNSBJ2j7qAucyfznjeec8rMeBCENYH3zsrNeTcnfRYNUigb4VsRjfuQUC466e",
  "key9": "55k2RUyBrbQ9b93ZWcEws2EFefAMEV2k98o8tX9pYgDcM1qdyn1UEW7CKAtcnyUfXECvFG7MTQ7L9QJf7bV2kjcY",
  "key10": "4vAx2jk2mqzSpNAPh6KcGYCEE5QcVmToQvExwZFeNC8T2bQUKTnck5LStJeBpXBex98mLQXptsmhsgnTu18qqU1F",
  "key11": "2dWTFQNPdr7rBYyZvgjsMz4avz5pXtGrsBtBhWs6xYDS5t3FZD5yBFmcwQcLyt2gctVw2nypEriWqhvCpf4uapLx",
  "key12": "2kS4RTikq8JGi3HtVGoCBwj6NjQ5968e1AZNYwT7qSv4NfcwawZG9Uacwbwkh6hBPygCfYAgRVVKaejXXnuzAHEm",
  "key13": "5986Ht5WMDqUJrnAKMc3cX4HFNM47NLNEPtmst8eu12fD2zYuN5tjhe3DdDB4XUKzMT9xs9MgQ36pDsZcPtaC3zP",
  "key14": "4zj7L6P92f8czjNg3Mf8rymAMSNvBTRmcHVqVKjuXZGYUujddW4wooA24UUCuHxsPYtbZxXr33qT5iPuWSvuq7PV",
  "key15": "58RPauScvbD2PjnUEG1ZokWcaFe7nYR5YdMo6KUekq2qLeQn9bY2jzHTYbXrsejruM6wkiFdxXrfsLfEwc7EXfHB",
  "key16": "5SNDdMS83iTJhwfeC5cdfP1RtoAT9WjZuDAVtKPsH7dJR95XW3q7uK7fzK1VBYV1NRd9LLhu1JQi13TeEJ5hH6kG",
  "key17": "623bkrB23fwem8Q1aZMydPWRhEizKRV22DYHN8h13Euh5abBmqquuXXNFPuDcperUsuCpwJod6PFfogh8u3nqqem",
  "key18": "5rNnBhL7m1cA1148kHLzd6LKAFqvwDtXPLHwXkrCKvFm46dtaLyd2gTozq5S5wtfjvLE3f4phdpAU6KgFL2Kaor5",
  "key19": "2cx7Kzhmgx3XxCmS2SRQnGLrZ4tfc3VkSmpGapBDTA6GtDYywEFzq9wRAfkoiipSPAc5KH3rD5Jj3XGhjCYYMNbx",
  "key20": "4Q8zYBJpoJDNh2va2bs99KuoPXGqr75ZPShQMp6DZLvP1XnrwfgB7pWC34vgJ9Va4x2eQ5WjSoHq6xWHHW6gnfUb",
  "key21": "4f7XcYnmWdDMNi4xvfJV2YiLvFnCVmMsNKK12QubLiVirytyRA8tDTexQJ6HkntDyqfRp2jSWM5WeaRkob3bwxEC",
  "key22": "3y99vdaznauNNwF4r7vAE3FFEFK7WMU7wFHmwHwpMQwK1WRWvC8oiVr2qAq9dZaC55ro2EmTeLB2bBGfNX83a7u2",
  "key23": "3cWfFWeraveTtHhrJArss9qVGkRkA6e8J68czEFrd1dcGeUTLKhK37UY4dZJQP42ZTbW72iguKvA9maTLJKPSpMg",
  "key24": "4ErLoKukcoXU3cMAiuwfYmTj1D7NCmSiJ3eFcjJZo2chmqknE75FVs6vaghMPbfabU47n988qFvUgnDQhDvvqThQ",
  "key25": "51W9PisWSudUM6kVcMHw71hXvX4C5SHwJJBbwfnLqpgNdZ6r6phdoERGUZUsVsMsKkMQDzAunpCKdNvCyaimzXMc",
  "key26": "5GfZEaPcrpMrSXhNmUxQbD8U5kCf7MrUY6TCLTuW1CVWQSuggnv3EJz8yMd6wM2u4f6SDryZmuDfQ1oH8LZBcPWu",
  "key27": "4sjaF6F1QfeNXUpKCABZPzufwdRq8D6vcC7EyftVUHkpziub5s6dNCuhra1HZjaiYWVJa5YQWX1hG66XgxKF9N34",
  "key28": "mb5jr9wm9hpDmb9ufxHKRekCcqkJnVjHyFheb9Q64eP15s9pv5nPh41RLZWTqdcKPz1hWWJevf7uTM12Vmd9uHS",
  "key29": "UKFRrSLdoiG841TqqNpz3q7ZcyELgWVGaxqix9Fuhkj29GdPTsEhb2L6KSPDLWx3VVZTbnk6LHEVno4VqzeRtTY",
  "key30": "3CkndSxJZwgVhN2FxThGtNibEkUSURZy9VnyBecB7fae5sesz4iSQYm3JosJhYBndex6ZUs9n7cvoV1jx4tLCXpc",
  "key31": "2Hwx785ZheaiRiLbWbX8L2kZ6A1sqH9e2rTg3QrB6MrazRZCL4gDWq5PCy2ZFUyQ2Q6sMJg6AuRgFQjyGPyaKoah",
  "key32": "55YZ7So98gSLtyiGu1tRFWuTkZFLvqEQ3UHU4Ddnuhv6SfEBPhdViCMtjVA3EXX4RhTeEJAK6swMLieUPtxZaSrX",
  "key33": "5jtREYACaUA6pcx7PbpxVLYBhQoGanJvaj6v3SseKqJLUUKYfk7g5xMTL2i2umMuH84VHnpAxqCFc94K97iy9ShU",
  "key34": "2WF9KBq8qfJ9SAXdjynxBAPXqZYCAPPEuoJ1imYG8e8tWKgH4q1JEShFMJkDd8hnVRF8UYwHt2g2Y67sk4xN59vA"
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

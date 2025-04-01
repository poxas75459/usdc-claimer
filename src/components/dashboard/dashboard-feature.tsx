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
    "3eGQTdpx9f8eeNPuJ8tJk92sNvWd88NqMYFwespQGuwz8LpZczyuC1sfz5uJzBuHgguGpNH2PwA8J8nzdi4YXqza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JfLCVno49GuNSS3N5ak3TFLTPtcwLdwdxBADhBQnj6oCpTrx36gMbZtP91xGmpTeqVEMDqB2cM9suwHyqj6odwf",
  "key1": "2Ywi2zeH8zypkUAPAfjydR86JH13EdCJQimExxXu5nucvKF8oJWv8t4myDKR4j6HwvEA9Dz9qdpGWdDBouoB8qmW",
  "key2": "etiXbcg7iUbbC7ySyynL2wBu7qTXwWLcLj7pEVNgkvupWugWHsfETrD3rW6PnELi2MKiaCkNJ5GZJbM4Wk4ouRy",
  "key3": "54DWwaXw9ZF8GrEDvZK5KNkiRFubHSEKmyEyFC782iP36sYDj9gkFqaFaxVioze7558QWQaW9sX54rXFqB9mrDp7",
  "key4": "25BaLCKdJLX88ZwMAP2DLG8eyLWaa39LPW7FVLfNggy97bXjAqUQHNVJJyF4jvnTRrxsmdZ5ydofDJPdoTCkDckW",
  "key5": "5ow22n1BBTQzZWjmNtDazQFyGrthrc447x4Pr73KheEU4koddMdrU2JgWc5GPBz24o8LUZqBoKVWW8bgFZaj6e3H",
  "key6": "gvtNbisSd5HcRLLKxP7JLLY3mbeMBTGfq1HFS35bfebt3fNeXmhDZHzUyPZbpPJNEjLuRuNtcd6gADYw3hAPcLB",
  "key7": "3Az79dAvg59hvH5VJ3Du4xHrdotoSjCfJXZLus4aqqqK5kMYZPk6W9Xg7SMf9aAPeSh2tBHzjeGHSgNQ9oD5fPhJ",
  "key8": "48nfJ7PKJ7PbZvFq5eY27Tx7WoRf39rLZgQF7KyRdJiXhCA6H4uT5qEwUbdTnUC5ZvKUuX2Y5sxH2VSLk1H8RywN",
  "key9": "9bvGynC3VNq1MatSxxPXYdTnqJdy7bmb4kQZvkUAp6o4xLAfRksbzGzfgszMkshPM8cx6QZyBCrtJvzVtZGVxp6",
  "key10": "3PfiaK2MGk7bNKukRATNr8k1YbaYUp1xCxexpNsG5c2QyKeBxrvmvSDi9VmHEQdQGi1amoHvWranhLfc93mdH1Sy",
  "key11": "WrpXpgXPpPf3pTKFRRSnY7JA33GBNYr7HPAciFz1XbgC3osjyTrbT6fotLRQgGh6U4bYx8aaBX25a7H58mganhx",
  "key12": "2uzbPtkSPL4Gci8bEZfJQoKypFRm5ZZcj2vQqriTwbeNVWuA95hFardudGbLwNk9PRiYU9JwqZCFuXG8Kcr49mi5",
  "key13": "4Kaoeb6swYQYU9qqjqM6ksNx2nHVPdbEUq973HvKXuK58JNyJj4MHLcYsqq5ATHWtXkQbLd7PkhAiNGWh7cMoZFg",
  "key14": "p9GG2xLzttDcGaqmPMW98JYC1GpwzZojqYMGSYgs8teejbBpE7jmdYVdVuiiGPA4Yp69EbNryFcUFuu4CZJJNKE",
  "key15": "5YeZZYhpWZ4FDSrQsqdZYxjpRpith9knCy9q8FeSF5MN22EHn1sf2zahm8mhoL2nrbrXcdVxy7hA8vvcfGgJ8qCU",
  "key16": "3mfvyVGgd7v9Dndkawvh4u9Z2TLr2z55MUuMND27jWHSzvjqwtuZtiuYvYCdopDfbjyiR78EXrYHd1Ap4BJD8FEE",
  "key17": "5VH5U6SpzdK5t2nrgeDSAqw6sZs5M2gTsPxmKQXB8GcM2sfFtzxkz3AmRMNbEHSkmw6PtgAZRwRpU93oBLB5i3kG",
  "key18": "9mFy7w8Xd4GUeipdTrxMWxVVS9uA6C5NH4XhTWs4CVkrCfiaGec8qvnzbmXWnC85Mr4HyqAdCYLb2oZ1tPPL3AJ",
  "key19": "4qiG23aeXSkV84K9fGrgUbAugZPUocf3sVn64MAUpvSFQRLW5MmCaoyrBrZN9YrN5kgyGLux7ztj2qKJ65Tc32A",
  "key20": "4hjypnwHNxACC4GvpRcuUD847VCTH78TXLprm4g3RTLwBDoMbMArG7PxNzRUHQ2y92Ve9oRaDUMV7BjTY5N6F8F3",
  "key21": "WhRqrsoDfNnzD4GtS8C4XJq9BoFAvdd1FpwCt1SH1LweyxSxyw4Pmga1pAkDPqvo9gQAnR7J8K7PshkafvArLNY",
  "key22": "4sa5SZF1V9kCUbURQR2oep6xSYPm4eXDKCM43dnjurgYY1hQRXHUaSpyacGt2so7xis4n6QbGZJur5Ns5LxNuN4o",
  "key23": "2w4dHLrt6Ydjuvd7DQBiJBo84C33Ykm5VexKatDL9dFDHPAFzZ9A8AuUUL9adDyBovnixWJd3b3rvx3Qy5kEGdGg",
  "key24": "3kW3tfryqzWMFrLCkCd3Tv3iH9hn7cJBH9uyhoRzNDZ3xu6Ya4kwEWouyAtwmDhnBZfFMG8zWZ5Tq7mE9CEfgSK1",
  "key25": "2ox8dAMcH63B8PrcfM5hhRGszmuj6o59zf5HvfGjxPCDyccwBEJTSswyfdBvzHdazJiAqxDKNXKfes7TGqUjGTDt",
  "key26": "3E68ZSAqpnnDc2gKWH7mSjpZTNhzvsdKJhhUCJwmdhyRJF5iqgLwid6MRcUEkTfk9b9gBynAMUebvUusmMYptrn1",
  "key27": "4uyqWC5EnbBh45axrCwKLz1KmDXALSa24rAYeznoiwFoMdM5c2LscjjUft4Uk4EPhNvP99GyRhVyLrEhqsRTpTeU",
  "key28": "BcoEmnLcWVLhjnquMNtJVLXXUWL4LvRMzZ8oYcE6pzwVWGn2YYJnuKyo3VFmjrqvMksLy896VFraytNHGnNJY8p",
  "key29": "GkAhsWAnubr5WFkAxGnZvuc9eqt7Dhzm6eGXBYRjzoE3XUUQb5VSq7gf3fBs62tE9ehDnY93pdGmfSLJndZqzEK"
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

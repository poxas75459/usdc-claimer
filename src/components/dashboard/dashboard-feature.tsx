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
    "3W7NH3uM1zsiX8hgePBV8gqdybdD2EhKS4L4jzjMCnUX362t6KkF49JBefWaed9mnqP1wipkTFso1y6FTFheGMvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "js671DgcejmYUZGC3L8djMUhEs4rLpx5pLtBhZe7hrmEVrrVHHnaswfPrDSBWRjQ3bG3skAHUtFB327XDyn7DTJ",
  "key1": "28VZxfub5XmLJKgrYufYz6wpwY82uwfKynhqtBU48UufwxnjCMfjXCQ3Rm4QA5FWkU5t43xYubUXPTbbSPPYTJW8",
  "key2": "5KaCT11gv5xMfkFy9ZCmEB6CEgjXBdfczoYq7UxkwEQniSgcwPNJ8MJE8wvrmQXQ1zaJkypStQChPRWBUh5m7kfg",
  "key3": "4c5t3S2d9MzjVWJfhd5rnVG77RcF86Cyp3a3yhztyXqJ4hhsxC1ym7S2eMaaaQR3Gc4NcoiHyU162NaRdqnaoqPH",
  "key4": "yghsJaogbPZnmy3GqyCZnpN85AjsEEzYSEf2NYZuqZMF92s3JYFenzLmKxJNhBQXddU1PLZA5PGSGZvqHPJ5Sp7",
  "key5": "2BrFx9gR2R1BpQGQEGtFeVLxCr3hLGqDhLoyKRGigLGNZNZNheQdUittdnbZkiYDULmj2B7H9xo4aSRPuCwQ2Qjg",
  "key6": "4Sn5Habk4htNYUyLkVa8GaT6Xne5m4Y44GBhjNVqq5JsbnCaK6Whjwcu3U9QP92RRW1UuoLHUK7r7uCqsKY9Gbq2",
  "key7": "3KiWXkr3x8r5mVxLaTeZYkFxtMdNszCGfUbyJ2ydWmnrbtWATkvyKjLXvMzQMo2cffwhiMvD5Bexu1gULMmkg5YX",
  "key8": "45YeGDbUvAF7MTTNC8MQ3qmAXjtpUiRFtW5LugzTS5XG85361xdpGovnmddZG9io5UtPf1rNxei7g2cVDzfPbpxH",
  "key9": "3KdiwtXwf8MyEZVDvxuD6QqPzqYWLC7XJFiJzzvgSZscqVHpkhp4qCTHr6t6ZgeKLXGK5XDukmsgRyXTp3Ctd2Ae",
  "key10": "4FpgvE3YDoZvQ4YZDnw9V48tUzuNQNaGVa3msDLNV594nnxNMmiBnmcKbhfbgsZxW5jLbsyqiuNsFpnbmK5mDgKU",
  "key11": "2v8YN63BroizCAjXtd7Pefompe5bXZoJQkp2NDupxtbzVzwUL8j95tPtdyEjQNHUjBNQM8Zpkhjd8yzK22J1sqyM",
  "key12": "2PMirSEZMZKyAhj4fScwzmq7kCoq8HbwQs62bJD7EY2hQXd6fFyyWkSRuV53xH9R84FySBJb2dxrB4jfd5f6yuTs",
  "key13": "4jxcBr7RJxe59KAaUrJoghroNNzzb2Bh4TvxcqZVdVc7JXUDzESx8Bbob793p1PgPG88Jc9zsTQRRXEVPh5KEfq6",
  "key14": "25MA2Kn6MncSunJ9fxFUFsE6zc8cv7co2XNgroxrSqywhyKwNwBcegBXGBkCR3kEqQb8y5yeDy7ppQXqrNNgMBkj",
  "key15": "4jD21rNTSd2ptEdvmcarZemuhn4N5VNRG4FFjomHr7KcJzFqdW8uhKnDfQvTEJYWdCqLDNTfaUexFfawTomKH6vx",
  "key16": "3bneHMhFCUXAjqtyQwM2DeSNsJnN8XXMmoHcnavRRsGheo1sPtRLK3tG8HoeEvabhFrTPZhQEZrbTXauxYo2XSpW",
  "key17": "59XxH5dERXks3BFopXhaFt3FwTCxgfoCHRxYyTKNMs8uNqEpsavfKMat1f1RKL5JWuQt4MnA4y5uH3J3qY328QDG",
  "key18": "5dqwBPHaPJPCs5MvmN5NyKVkMXZfKJWjamixrcUNyDT7fsXCnWW1vWNSkD253vJadsFYq2zwikswwfkoFna3VpMJ",
  "key19": "5RCkFQ1SNNKcC5LCsTEuzup4qinsfChsEfAAfoMP1htu2mYtq3vxy7RSiw2dAZ5bqJNuTgttrNKuyVRfRXbGxzXx",
  "key20": "3S7JsVPRLEMzEJ8zpjNu267jtkMjz57Q6ccWuQ721n8eJcAn8mdiwD3Y5b7ar2j2zbrc5rFuidgHmTgqZ5JvRpeZ",
  "key21": "59unC27ukjyGqQ93vnTKyu8GeVLXaw47AgABSZKGxm5Z1WASVNUJbxF4PFLTxbvgtekx3g1qw2qBfsJXXGJVRapJ",
  "key22": "UbCy6kEPvsdVgsSfnXvvxt2WMnPw3gZWkG9HjPB6qiyuwpRH7RHy9HiUnZ484p3FBZNr7kZgx9u3PJx5WeYf4N3",
  "key23": "4SseWmPeq1x41yKq7Dtp219ZHTtJoPAeW9o4asZxc9P9w9mJ2F77mSzWiNwMGXdr3QbSfAKK2GRyfwXcZNmMApwr",
  "key24": "Y79hzpwczmn2wjKAG5h9LaK2H1nJReyBYWBWNYfPJDy19RPvoLsRY5gnZPvwppNLZHKYY3s4m8w4dGciKA3n7Gd",
  "key25": "4wKtBSDQWoUVw1QEq5MTbW4jTQiRT3Jx1Cwqp7MjK5piiiL9FYpEh1cpoSTdTMvSS86euoLUDMa6uCGne1EfCwZG",
  "key26": "3nD2aNFEvh2ZogPKKd7G9BLApgnrwNsRps5yBdRgBbnFDcHmR5gHw5ZZmbRBT7T5hvHSAnDXbYgPX6AFJNTXQyxc"
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

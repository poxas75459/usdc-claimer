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
    "4PmruutftqZx6tFnJKVT87TMrNTYjhx7NEow3AwaBQFDwZZfyUx1tLMed4kHyEHMXRM3ydVSKnrWJhHLmodWEpS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxPsosmngWKm9wBuYHNpdZinoQ5Vpn1ZUBJMfrDu2Zekg2UprAnisarr6Htvpk3eE1BC1B6kF8cFSitqfGejmK7",
  "key1": "4iFWkLAbBKnm3hFC8ThexeThQzui3sziZ6fV7HTdgq7WSxLsgemVnwZp62RHCkTRJaxMFMT9yNpQ7DLMKUcmVMMH",
  "key2": "5dNf1EmscrZtCGVU4jmGhh8Pn4xXBqVK6Urssj9EQTuLxayJkWj4BfoEf7ryEEcKTwqyBH7V6Y7tFCuKpQrL4jSh",
  "key3": "62jMVBF5fDmWsjXu7YU4Ed4CdoYfKG9khKgUvSHkCdVHzsi7gpWgsgreHfRyiSckcNbf16s7PvCtHJm3BN2zgXFA",
  "key4": "2DjztgiKMXAhcpnvjKKAEvEXFJcXT1jHRFj2U12hYLPxWAF6fcNmLrHbKsaHwejz1KCBQvH22mQ3s73RkwmDKcmf",
  "key5": "2cGhxNtVH3Vh1qaicpZPqSwwMZD3YRmbVLvC3bw2NWKogXWX9QM2UowX8Am92a49tNyZq8Rb53vjWtEYmfwQpa7r",
  "key6": "5JwAXzZJ3mCcCsTHycUzSKvvPmy6ja1849cpku2TxL8TGbNhyYm2VPyWZgp6aTLg95HkQgY9PL7gm1t6NJtq1mfc",
  "key7": "461f8YzY9vadGv9W9zguR5hDbSpeBPoREZtLj8ekEKNxPhLMDSzv5zwbkV6X3DfYJeYcPXEnFSgwLKyisYVXYe4m",
  "key8": "3g9FnQG2NaM57va1uehZfNoTUj5ccw1TgJ7hELGQPdudKQPqXpYkwwwQ2URiQgqrV2bAs5LbxbLjekSsLvgqBUZU",
  "key9": "2qmpGq3imYNWoPtySNEvXQVX3d3YsVeWnxGrTMkVeXu2dvi7haQbUKNpaSHK9gdDCzJiWkrAST8Wdtmj42r9KFXx",
  "key10": "4GgDZ4mAP5dAujL29NeMFeHh7xpkfuaWyk3jQRaAqnNNmBHuUYocp7PZdFHNiPkJ1gnrYZ1iRaN9R3vQZn9HgZ44",
  "key11": "SBEGxNPLGVf9CarXb1qFyXTM89HDAXJtJUzdv8nXCoTAGGtTXTxk3mh3xtr4AcLCaA7sHo3xfGYBm9J9XFkgz8g",
  "key12": "2pD1ebNLhQGaqhryDZPFterFTSZQ5rV56KTR5NBsgbeY3tmAHgf5mw7SLhs2jeScY7ryGVhJHy32baqsVkenwFKp",
  "key13": "4fKyQNFAN1oCsJfGDxc31rUrDMNiv27FzQxym6Vxui6Se2YzbP68MDj9n9qtcM6uDQccXrD67CzQPBwqZWntWTMN",
  "key14": "5V9raQ2xfn93BKBgwrGMnNRRMKFgSShKgqdLJKzYycxBir5oyzkFcYCaANjBPmRGaAVFCQ2ypSp9SjwsHZ3DYWii",
  "key15": "29n49q3f1sLMpYd2E3zbojmno4AzeGJEDK1NXFcL7worbWsjC1qP72GdVfhZbbpytMcEMT4MTAhbCKL2sD87ezn1",
  "key16": "2TV6SzpetAA7mbvv1zCDSHh3VsSpDfd65ACPdMqMkVZAxjSEHgvVnWLjx2dbjACTsUSvdE4N96yF16rkMTnN3467",
  "key17": "3MZTaPrqaCCsrRQkfGBFftZ3V7EpoDALNmLdtoHMnGyW1zPVXsQAdiP6zvxZiQSnBYp5MLN8v5XTPpHjYt4AbYYs",
  "key18": "5MQYiKqHDCX9k9bLNRksvavJ6FMekK1yEatMq8QiW7nJXi4d54e66hzyyh7BK3rrAe5GJr38fa7GRERHtFAop2Po",
  "key19": "3XUyEYZ8CVnX2sseZz3DY99x1aqk1UGcFF137yG3Jp2NutCNtp7UGzyd9g5CCmNiaZYZJr8Re2BLsLUPgU3AdMMG",
  "key20": "4xEqVJbqLBYak9VoePSnmau7mre2Z147cFc2NjLxCyQkgiqkzkbvND5hxeWP8Jqvv9ncEf4tWasGbaJgvq4wEhZ6",
  "key21": "FAwNibDg7wp2i8E1WycnLNqWXmfPTiTLVnA1aS5BucejSXyZV3W2ZwRiNLJvYMSmUNwjp6Pfm5iovywqA3Govwk",
  "key22": "2kXCtagcqXJd4Myz15x4pD3uWyg9TfgxEAFz73BxeWkgov3Z7G6tUJrYboRGN1BdsLnxjxD67zNboTz39pbAip5F",
  "key23": "34oTeswCBv4m5JgcKomXL3DThCGXx8o5CDexU8VgMCK9vbi1V1bLnEREqgmzM4173SC5B2cqZTgRs5uhPk7i88ar",
  "key24": "25ZNtAVPdULw6oLdBgKa2eJgAwdUCBovK2tQd7cV5jLU2CzP1ELGh3XX1Nh5gFUdyrMWotVzgwCdTUNRqDmZW8Ym",
  "key25": "sS5ridsVVrjaQsbtmNnSVdtp9xfvorBGBnjytf9E3aEmcta2Bx8jbR7VmXyMX3UU1XrLh7xQwt3XWZxT4L5JC3k",
  "key26": "3Btcv8gpWJARgdJFKqWtuubrwdjXdcbcZPQUHrMfqwgYVKSNfAegGrvy2ZD7vqa1koC4xjJaS34WDmcmnKYsVwrM",
  "key27": "HE2XHWZCSWS4NDaV633fwTMYfg7MGo5M7t3CrAt2vUuBAxEZQrxRnW5s7ZnyxK2XsErnf57HRsFzXXKfxj4KC2U",
  "key28": "4hvMggt96gbHJ3RfMv1ud7qMHGznVSLGKt6J68L4DNtp88AdRYmLpscqqMo5Ud4YGUmZYFVn64YZturcc4LpXTUf",
  "key29": "4dyjMwURbuHyzVMXTDfwtRmL2w3N7yrfqWhN4P4rf5ExcRjm97oJRfNFhxxrE2PXNyvhNAqG8gjNiTrzTS34vaC8",
  "key30": "2Se7voEHngReefNQk14aKsSFrvx1oN7DgWUnwiTwaZzf9g9eJbVBKastB6bRJfZiBD7nESAEEuXW7NBFNVSfmdvh",
  "key31": "2Qax6bhyZ6caCyX5TZNLYz3LNykWux2P5R36MUyctfHZTZm1WkCnU94LuXjGCj5quzrn3viMSmqmDouBWsCcYM66"
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

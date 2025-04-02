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
    "4rSQu3HdsgRZ2TCzHrFPZTNwVkzuZ2wwQE2UEsUSA8RqeXPBKsCWLiHo1XL11H9PFnF217XmTtYgD1JsCEC2xaMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5Cw9kGM8pYUGrk5MYYncfyxj2WEMtTmCXdiAMPLiaBosJBUbGEdeYpFa39NjrpABq7Dgh9bA3HhJqgcHLbdbgn",
  "key1": "4perHCMdnEMM7VvYEzckL4Hsd1LbcR9XJMqDW4f89Kt4b1pgKnSVkvCgvMJeDVyidYRS3ui7gTvTn8NQtMUPBV6o",
  "key2": "2teeZv8uMeT7RJXHPMC33wLCYnM7vJNBN7RasPwe2w5iuGPQc3BBsjsShohr9mJ8HncNVY4cYuDYVVzMicN8MRfT",
  "key3": "4Fay6v6h8kBB4bJeM8ykNGUXQY68STzLrPahmnLpDDyMgUCo9GRuc1arVY8w8GsapX2pyhP52tuJfwNVgYY9Yv6C",
  "key4": "uZAGUkGvYf7Y7PHhU8dj8x4uyAiWfK15mcZTQkp3NPLE8LJpESU8YwKg3jHTJdgZMnfjN2iftsJt4XscPAAWov4",
  "key5": "3Xs4z34XGsVaUPtd8hVP7MhHrTfpB4GwQC5LSkwYrWHjfcFLkQg7kZBRggRMSK8mJf54rMwRuxW7t5wSs2p7T8DM",
  "key6": "xY7WMwWxhpn5i6CrQSk1BsKraQyPWbLz8SqeVJwx6JkyRSdzDyv42cJxCXchJrsdjJiDkRNN7XY9HHT7QSebdRX",
  "key7": "3dUC6TuRE1rnpmS6MDLw28pcQyD8Ns3t1jJjtXDAnaRc5pyEZHBu3WJgnuuDJWarnEdmCfY5eaPubVZrJnxhsL6d",
  "key8": "4Hm51UbgibU8Edi55GoQ6WU9hSsvtHwBbhjun9uj39fFyhB1E5xXGtMSQF9YqCRgVnuH22L4XwwfmNBfysXfbH4m",
  "key9": "3S3KbHP2CbcpepPWFLrDrUFgz6E2pSDsmUjPqiUQ2RhATqNpAp5cpeYvD5Zapm13997xw7UnYR8iodWgWdNorVfd",
  "key10": "q6GnqvprEMNVzBfqfGxsn9k1LVPx7AvxQ3YKr1DfEf7iEjtoFJ4u4QRULUpbmcpSrDDUbyd4wmG6eBVo1qJSBsR",
  "key11": "4duKD2HbCQ9QmRSGmi6BhYfQG8WxnzGquFPXLh55xUmZN9pAAjcQ8pZz5cgnPCC9bb98hhvNorQHHNsANyMg5rx1",
  "key12": "2rS71YZWbAAM7b8wkjZcFHUVhoi3XR1F8eNfHSC4yYe9ZdkFDRyqYbS5rgwo8ZStDcxjk5JMtV5Wh8ncmGbTytT1",
  "key13": "5TpY8YaW9KZtgB5TegLXXtCyvyBUPyNhC6AvSfSyrmnnNUg8wTTGUtvteFfPz7m8JrNWKv6G6RrQE95ynPcJ83kc",
  "key14": "3AtxQJsUPPzUEUNKYkVAXFcAMDaNVUWEvav4NF2aZ1m7m9JCXBQbntbNjLaz6pCyFfvrRabFaeai3MS3P5BSLnFh",
  "key15": "2SgUMdPURKTVpsHhenf3UgFWcQsmZ3fos4orjnzqow94Uct7aURDLH8VCkvsPjoP6WLtpjrSYbWXJrNLW5iZ3562",
  "key16": "3L177Dp2SJwMmiHHEiSqwQEWrtfTCjZGT31VFvLBLDjL2LkpYNiiS1ZkEBzBC2cWHfpUiARgFU2Pd57TtjrMiDpm",
  "key17": "B6UWCYiFeaQbQq1oLjBePcdHUkQ6yKLXXYh1YMe4oytEMJ8SVQSf7vnimRM952CrBeBV2443gg7rTwj9GVUrdmE",
  "key18": "5N43Zg36W1ugtKTgHSLPFCsZSmWEG6ieA16YtCLJ37mzngqKrpXrTUJy8VJ3aphnvM4nUqK2rnik719QycFkdGU7",
  "key19": "67cvGn1cQvM8nXUYMvGMAbGd7A5c56H4WgkKiGVcmWZtfCyyDeiuUwRbcW3DfohrMzeE6R5mVHVG4uHEFLU725ke",
  "key20": "4FWZsZis4ru7eNCqCRZpskuv3M6GLAF8UBsCxe8HCoGzx3wHrDw2TT5SPEyGq5EgND4UbZSivHv3wG55raeZxkov",
  "key21": "2h4qKLcAJ9yaEgLTwoCtHPcd4YfHroYVHddYLnnQBGaztD9E4WEVcoWS9LCRwWtpHTm5vaWGX8LDkYfVBknEyDvU",
  "key22": "5xPyrFQxrBey9sgMWHjjivjfF14QT5rLf4odxvN53VT7fQpu5d83qjXoR3u137HH7yvpCPD99R9wT6nQisNqs3La",
  "key23": "3VgBJF3wamNKcXzvKeZhNo9gvo4PqVA2f6F86y2AkF3WrpyDLgMShZqgdZCxgavyKjbZ6H98z9orRAXoUh9r5fqC",
  "key24": "3Ju7Znw4Hi7YDENMzx5D31cLLhC1sLYaWR2SeaAayktoMDLwCA3dZ4nXrFZxmLs2UaX186obQhSHLpHKsmeeNKVA",
  "key25": "5PrKGQ3ygZXR1nHF5XhGXK9RmYfns2kJYbMePHXKcoNg3AJ7YrJyG3pWUiiqXKUWXm76YgvHCcLLFYk5Ug7XuuVs"
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

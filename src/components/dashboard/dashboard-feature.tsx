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
    "5ofJyY6QxvUEKCP6Kq3UcNYg1uzMYXfK4CiKv7FW2YZCUDuC1LFehJSZDFvRQf7P18y7jooAeGkLty93DWZjWqsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgQEo7abkRr3DXkv7MQRTn4HnT2UBRxWkDr7ynryfa4Zr5By4rYvNysyu7zChiCzbscqztpHPGHQD8ZY4tKqCeJ",
  "key1": "4tzoBbxzGLtNSXYWT1vZsgf5L2wRoEKsBGETv53Gtf36dRTXdyzp6iWriWHCigT1QGri5akKJfDHS97ftUHyKrgB",
  "key2": "nTrPSSMuTgUyDLxrfNxTU6LqH5c8WirZMZ75GKoYGkMAVBxTPhHAsXUhh1zVauFcVwMHBa4DU46aN7LaNLynR2w",
  "key3": "4vJs3364P5ZyNNkNsGjEWBUjv47JMxqEdSxY7SAkm4bbZjmwQRVwXBbyjR2DqfgpX4Xxk5xvaBkcpuBEr2Mrgc7D",
  "key4": "3dz1TeC15M63MmEDoqjBFyosXBfyt5tGVGyn8ZNEcSbKoD8LL3YGYyxuhUNvHjns748MgHKfx3kVHuRnsJEwzapT",
  "key5": "3FAJgYR2ciH23epKRm4nj67fNZHz5qNUYTDDLyNAFHg9V1UWjRbfrsXCAvEW1z165sUS2FydyAFwAVd5hSccwaei",
  "key6": "4MQwwy3Fbr4aDHHpEgQwRjciUTQxnT8orwWTbU8afxBgvvANFhQvYCKSEgSVYiX8QMjbDKvLYDmprdpkLQ9Ew7ns",
  "key7": "3DSthmBM3Vxg1Y6YtxaZcd7HaHsBrA5w26Q5UohN7PszFvVFKDVYTuxcNVgrVfnigL2Zr4yestqSwhgCSE87Pxwm",
  "key8": "2Fb2iKpgcLZKK5fqShEfnmx8pzJ2Qf1F5oPFRHXesBgQo1AxH5qDLbQ55VHwy1jYSiZihrNgzhivkmZMdEq761az",
  "key9": "4XZKeH7yBWjsH3XoWbyBMujM9g9wV8y6qsk1YJoWEaqP1D6ZhP8K8AKW5QGgPMAoYpXJbPTaLsKYLwj262AgYZRr",
  "key10": "29ghYv2j5A67NBsZCBRrDPruv7HpVLAdkdAJDyeTzDCDLpHc5GyiZ3LAqZP3qVxSaonEdTcQo3EuY3N68Vzs7KQv",
  "key11": "4pKMWXrHyMniSn18tatgAVFtpwZAX6mdvHW4mdEodCorYk39fhb6ZqewiymRLw8Ar2mGzPdsNocuh2MGtPgDbyPu",
  "key12": "5CvkEhvHAez2jmteEvapxJMKo8dFrW6Y2KXtHJ5vtNzS1ZQS57E4Ppkfpbieztf4f2Yz5zLDeusQNoSpsMH8TGAm",
  "key13": "64BPeki6YuW8fi4KQvLBbCCfgVFbG7REKTC3zYxRbuWnWqngFDYFscMBeUoLYNUcqBG8zLZ2NPLABBmr9779zmwP",
  "key14": "3fjPNhxtfvWoAVp9CeBinedaZiUxXW9tbDcTkXzKDnSm7UkDu9SUZRu9EaNX2Uny3W21BV3DwP7viGcGAYQam8wd",
  "key15": "3GZnm8q1VJW6W2GpZYbHJt5qhvMXTw88Zxf4of6RaPu6rHwN8rmCxzDrZrv4mVpBrKGtuadCAWk2FNhDn77h4Ccq",
  "key16": "AyfFhMQ8zCcFr83sRTreJhZv3Rxpm6VZBj6yLWkbd4d5wpRGJ1H2w6xDX5CnViczChH6eBe7rfskwL4sEX75Yvi",
  "key17": "5AkGSK4J4n4b5xY7bgyhvCa3zNfPXD71z9h2SY92a3jLjWRrcbpdCdVqadoNFGizMGZUJgtVSyEioj1XXzym2a8p",
  "key18": "4ToSc1UNdbhj3q1CQQ2ckryZyKJVpT6CxxxEksf8i6yp1HZr4Fy4XJ5tTiKbvTT6deVLSfVEMfJAxRteWhXk6uC4",
  "key19": "33zbkWHmJ7CQtRv2K2CjTVcpGoCSTk6yth1cSR1APKET5HFWkTyMAdpBpUM6PqyqWEyacbnhxTYtGoBtMYCGyvsD",
  "key20": "3Z6UxH8yiUNRazffPjcXoSoxpD6BmDJnCmQDHdvPe19ZZ4A7XTLrZGfH9bS2k4vJr3x999xtnsVn7vJDtyD7pkaC",
  "key21": "2VmT5XUFtbWGDGnn4npmBG5aKwmcjh1bHKH517sk3c1Q7wnYYsVR9rHakMJGAUyqo6ADPUbZ9gf7DaqYYEpWZ9d3",
  "key22": "4sdpa9phn34P4EnPEytuXkDoZgYSKfZ5ceTSTrGB31ZzZR3ZrDKD3a2eJpudKgTGS5axapcpwDic9vStX8YLocxy",
  "key23": "2HzaZvbJ6Luxge4ps3dwxS7n1qRbUTruczETr9MW6G45oVvKRLEDjzJiyjY6wFWxgYwqo2Sig3bJYQf5zTU5MtTa",
  "key24": "4Tc27hBoRFxnNP6kYetCAcc1GRpTjezs13qm9SXrBPEptGLjes7UfdzUUUxFewj85YbMq7SFryB3cf37JfLXZKpQ",
  "key25": "WcuYRyVcThDd4eoivyB4HwKc1owXYt3Qu8KBZ6evQth43EfoeB1GCsK4Tmp4BThgHjqTdK9pbqxvtZoxYNFFMSU",
  "key26": "MdtG6UKFy756onCkedWg9FsEqFjzKy2TrNbVNMt6JNSzvdrfV55i346BhgWuB7rSrqfJNzhKY3u317xJ12om5Fs",
  "key27": "cxN5cDnGrpz1UXDV68KkzUGtDugwwBHBrxJcnA4CxNscJQco6EKBrny8MQCcg83ySiNu9ZGWujdNyhbJeSw6kmm",
  "key28": "ChdiyiXX74uATVEDHYZ78j5iiRFu3ZBHVJ5yq3XzQAb8m5dcEHkTMXmwi6N9jbMJsx7mgNR6ea2CJeqYp5ss5ig",
  "key29": "3smqNbbjkG7V3HCfpu1vTSTVKFf1yzrJSPCPikedT4qquPMKYCQ3C2Qq8tKfvWnzpmcztHQW4eUvseeRz3C4vfyn"
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

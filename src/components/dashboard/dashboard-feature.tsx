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
    "5SjYtUNVb4Dthb977oBYjBwTxtYPdGEijyiRdsrUSK4LCBUsMkQKU2UVSDcQp4GR2k9UD79CFkqFS1gydnLFHCfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47AJLgyVRPJVzu5WmrKqUQst7FeaskoB9obZH8ZdHc8rUwpzWJSruAccLvGxtD2bz325etMDEUbVZffZKpuJxvSe",
  "key1": "47ZDhG26ntfHWHvavqWZMhkGg9z8SgHFSnN9KaJcywA5qP9nzHxjo1WnLJzDFbfbHYmk3uvpLzjJkBiHcfhgpFje",
  "key2": "5554UEusZi2bnTAkpeMT7DmbbubSiY8LwqXDKGtZL5a9jTr5mU2JWiJGqErKVoVm8pXMjqEDcdhoa7hJkQx9sUx7",
  "key3": "2JBBPB93mgXfpKbwEigAVmJjo7EUVidFxZJDBqXTw9LzcNmDkKmrGVKPcV2LELb1UsbxoVEM4ueHhYC8TGVWsbZn",
  "key4": "4K9GTdQXzLZ2pBV5gWxXDMca8FfSMzZNHthr8Kye5M4nws8GUjwyXK8jxXeQgpT15d2Z9Tw3Jkc4XPkpZ1wLFAnX",
  "key5": "5SYAaGF9nZ8xyxN8pJDVpJBtoYJiMcYoPFDpDwJMurF5zQyWQw6i1woGoK79djbFJRoJmu4Phw2K1HC4fBNA7R8A",
  "key6": "5eC3z6PC9J2kaejGQ2V5Wu63mrqLndwE9oJBtsgmy1FzJnqzEE5iaUaZUBnkKTucyrz4AdYTpwcbo8QUvHyyWVZC",
  "key7": "FM46v3wzxKSmq72eqzuRdurjEvQHmAbkXAwZ92fWJadG2QcChwUatyJpi5Huv1o1iu1W76cti2EaYcDSRLBEKLd",
  "key8": "38pDm3md6wt7wfynDiV6me2vdXk1To9Ug4ZD6TeX1RrTVjs1FUBpJ4PVunr1vmfmy9YDnmoTnBewGQZBaprLxhHF",
  "key9": "5H4RWaiPmRLxEPmEpXvArVA93Beds1zcTvYJNpKUUVzgmEMjHdhUWNTU2wKkmTPEv7dZ3Hk7mTLKh3Ac7KwetE6p",
  "key10": "movDpxt6XdyauSVPer2kRAMPqk8RNLJBiP33sLGubJffYP8Je64PPYj9HMT6rPR2QC5PnNfHDXWVes62xK7VZQ7",
  "key11": "2EPMcSQCc9PzucVKdqPGaogPEAFRoYXhshxi6TZKi1btZMf1ZPNwRwBMyM3kENHoQpZAEyyfuzw4r24VXYvzX1Um",
  "key12": "5ZVsqZoTmKtJpJqKRBk3DfrB43AzvfbJdooPytcf9Xym4XCKb8mmkFWTfRuXy8a7cLoQuAogBKAacXwGzchqBKqU",
  "key13": "tuqDec283zuSLLFCZ2de28wQuncvY1c5iodacV3L7ZSXhnztoVTCZu5cdo1bM9ewVnCpKVgXbjvB4m6N21vh1As",
  "key14": "3gutxBMP4EzRbFVgzggX7ftMhCk8cQBaxd3LoRFz4zXV4wMQKnkoZZ9VZfacTz5pMUoEnP4csXHB1XKjbNrKZbZN",
  "key15": "7Lsr5mKp2Rd8DvYNEtvFvuFZWGxnvcw8z4ehnqh6HZtRkqGRyKqmzCv6hLsD2dg1wibYxPS5cW7wmhjf5R1MUAo",
  "key16": "2n5iLseRCaXSHyaTAzpQAYr1ruDz6g4QaWufdj1bQ66ijAd52ng8mChTNkwYj9UWSUgE3N5cWHkqQVZT7tTWevfJ",
  "key17": "3YFiPCEcDG3vkUqhgNQYLjewv54TL6PE1Kf7GVXA1gmBEUXp5az5s4kKkL9RCpSAUTETyNgjjzyBHECVkZUYXbns",
  "key18": "5gzMhY2sApeRau9NAQsfm1v56kxb88QLBceDZNy7hZ1cAktsxxTttKvh8EiPumRKrBzHU1m9XQSfEie1vCTLCjq7",
  "key19": "wDxoRXbzxLNmCgY8MrbGmcDGXEdQHz72GnT7avcAmykEkhNeDFfn6GWUC74Nv2CKJK6tY4kDHkDWjk532uVs31i",
  "key20": "2ibcusqJw3yp8Sft8aMyaHLnEZnU89GaneafNRrKa8cX1izzBTP84WijhULoWy71w1aj1LzcnNKp3gBe5ex2RhQE",
  "key21": "4w1FoHhk7W4GhwKu17zVk44CQjbnCQkGGEFWqWyt2jWbMsnLmYT38jk1e7V2apF549iGjDVuhBVSAozAyqT8tNxZ",
  "key22": "3rdX5WaZvGzdF8sEqRXUyS11hfWFczfxrUceyMRxWrLeHZ5GcQ6aJoqcjj9QsBsgnhEMXxZiDJCZ1aBLqagPUjbe",
  "key23": "88KWMFauexSbKabbVzQNy8mCQC9UPsQkPYcEFytMG9fGn3FXTgT7jbQNjeehBWUhHqmUQsbQhcq8dnFxe2UyQC8",
  "key24": "5mCN7Q61f5F5unDrAbHx3dwwmdJfAALWgUpfe11N8B4Yy2q1FRJYsqFv5VqMvBBf7XUYu7yjyXgbrk7kNS1xx6bm",
  "key25": "3PG11rLt8RSuGiXjwcgiyHc4XACC91EUFfjamYX8vnM4t1rjya1xXew5ui844acQUgo1weUvjUqMW9sVf9knnpRQ",
  "key26": "nLHscxb4b4GR4DLDyCftic6RyLoexZezn1Yc6U9WE23rAnP7rjz23uPFAHQAEFdp5tETm5WeK3sn76Qp6YXbwC1",
  "key27": "2ER3ZjD3zCCsdcbPXZi4S4kKTorq7Y68XxYB2uFjLyvi8749NRr1Ebz6oEUYvk1kkWYj3SdxhCBNqR1LXqp57zmo",
  "key28": "5ofwbzyqgSdc72EM1h4TWTRn1WZQrKKhDVVA4Hmi413GGW7YMWPAkWpdFUUETsRhKUPQEwu4UBqQZPHJxTgDsACV",
  "key29": "35oVD4zdn3YkZd1AoVYbbbGmhbZtJAfVC1U5b8GuZ5zKTrJd2SzqsXhC2KfszzSmDKrGiEzu2aBtEZXXEgKFKe3h",
  "key30": "5nMs24M3C5gBC3aonEa8vMvKVyP48LDCbCyTU3tDWmx4o6LS6LFsvKEDeUQFfewFD5WjUuAzK9eMw7PkY59DQsWW",
  "key31": "3zZBTzPvCEi6riwPzsfA2LMhJk3bmohT1EJPLaQjC6YXr4yxWFcjLsCjXvgLK6e8xQaHCGT5P4yTLdmKTqA4yB3G",
  "key32": "3YZcwuD24mevo9Mw3G1YWDeC3eMrHrwMbmiu5WxDUM26ctarhPjyCqCyQrW4FexFouWHPNBbFrCevtwRFxC4EMgZ",
  "key33": "4Vppn5npG3kd2deGdiFsKv5jtnR5GJvaVPu5nzcUcFe3JxN6p8jv5YY13AWCzkW2iHzipdqj8UChRX1r3M5vNgP8",
  "key34": "5mfRWR9sdGhRCev3kawsvuU7VuHWr5w5i81CdyaN6KuCGjueNwpiXr3MPp6eeQez6ZigVNSAQadn6wjak79Ae6w8",
  "key35": "3adnMtjBTJ6hadsqmfNHp9DsEvEG2nDehQjzocWfaX5e147Vd6Bnop1up1UukwSQpZNUKu4mjjPnHg26bUis3f83",
  "key36": "3eEytqNG3LP1KWLoSheg4iczLxPfGvVpgBbowoY74RsHV3V2NaJ13x1jcEJpnwUGQiLFd7URXe29hyjDMJS2WatU"
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

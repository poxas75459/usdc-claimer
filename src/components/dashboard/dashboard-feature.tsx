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
    "2LkSULSkWsteirV9yF5AZ9Ztv2rtpKN4K7dwGJ9R7Pmme1YoAWRZhLZ3RnfedVJuCyG2xuF3MQwD7rG33e8eQP5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sbVtgCug81njAxnU9DtTQtrukdwMq9ZCNnrmHi64UQsDNpYhyvyD76WryYf2p7gjWGRbjLex5Ua3t1hp5iQM2bn",
  "key1": "3bdBK8SKVEzrs5tG6Njqas8Gygb8WvChtvrhMSXXrLJQYVWcaVdEgbAvQYsLK88Gw4wEktsKuvHZjvsJxiB13d4t",
  "key2": "22qXafvEPKiuDG3bEKa38dvQ47vmzXDnowtvNtSfShfJcteAHtX3u8kysErQZupskC6zUBybsJg6ApMV31JEEiXp",
  "key3": "5auyhiJhP1tqR651JiTNHKEvc9F5VB7o5Z21rimVmhg4CZHfPt652iuCQz9HNLbu43HJKt7mTHvsLVCjhdxMhvnF",
  "key4": "3QWesVKrEHLS44io61vCB8c1y4SVpuMxE2pNxPcRYjNxBamjJk5nPepCaNvGurxuU337ha9WBFMoBwEi4J9cTiVw",
  "key5": "B1kaSsgjeLkfoN2wxadvMxLV5ReUccJ9sDN7FfPgS48yr9vyKFh8Lk9TETQCRXxeKJwNYKZNu72mFWYffuBs74V",
  "key6": "2aQ9riN7R2vzdBT4ByydFdkfV8jVh8qbr54DbeLzXeTLJ96RTTjzYsPp6gdUdkG6wvEGRtuwyur8Hdc9aYgxMAfb",
  "key7": "uhYW8ahzZwJpWdVK4JXxxEhUVNVLbxgxGnCQ3pabKLyQNLKqcMugLEegARAmudEMzzLqT5rBGAXADBsnsPNMgqF",
  "key8": "4GnHEmz1rnu33sinF3C9Utm38Sq6JgdzYwV3hm4MFScZ1mtQuXQULDGjAwSKmKrLAf6KaFN2rD3f8TZy18ZgUzk8",
  "key9": "8ptB8WiqWXzLtUDRgw9ejkCFiR1YVezkLbZbVszj7x3Ldgch6SNiptqvcMY2zxUEykaFfZaDQLebnwtYWp4TFy7",
  "key10": "5uximN2PfsmqDCBZzgnaHkVofxczBpQX9PftJNfBvxEodEsy48AWRrAKDuLmoeFtq9xDZVs6b5NwvmnLY1VwfDXQ",
  "key11": "Tn1bnBwJgyrBt43urVYLGkJoS7Rg2ViU34Qe3aMArTAfgZ9DKxpNC4SqLa89KAezwEoLfjVyJfZPCkL8tTpiwcZ",
  "key12": "HQYQ7iiT3gMrtdHPFVUEY99iVhgaUYrPnpPsiX5AvAir8fBm47nwCxLF2TSwh7fC8xvA3ynX2S558kmp8LAGjQc",
  "key13": "4kraoqCXLCcAXZo5cxHfMX7Lu7hFPbYGuMTYSAakjiinAe9JK1CpV67F4PbaU3JnrxycZgCLur4NxXHL7Fu8RMgf",
  "key14": "3uy3VSVHcMAyHvRMSiGKAo2fQgJGAQXJzTqstkrw7VKhwSb9KF5AWe7nyQUTphnmqWxo8bbYc3xYt8TKZRQkodAE",
  "key15": "48fEUUyQh3GVJ1JFSHh284CiVZYcTurpEqp6t1LPokmfgpj2VcHRQWW36Mb9Ryfu1Qh1LQ24DyBd2nwypaCY9suj",
  "key16": "5GgcYcCQZUFSr45bd146EUwsZGzck5pSh5STRUwVdBZpiBn8SKGP3iKkC9VoXMB81wSWCVpuhQdDmd4WrVh9unLb",
  "key17": "5y9vYhKyk9r9XYh7k3QJukQ2pY7Rzqz84kVkNg15W2nEgsTNztRtv7sUo7aTKJwvp9KEeCNucYuBgU491VPXGUuk",
  "key18": "2CtojCMeoDfh1zqRrPUCSKyc8uQV4GSekHAu8Z1DNemoUst64sVdMyafdWvntDWgzhikac1TtvhuWDkVGMSp4qPa",
  "key19": "1U3C9C5iQySEJHtbVRSDMgxNoQEGMQys4JWYqdxFVdh8equgRqAFM2Z7RiL6gavMEKJr2fFQUYYoKAP4S1R2Tzn",
  "key20": "4W7cs5i4HhT6UCEdkna6YJNbgs7J8GMUuyzB7PsHAn44DBZLkCKhoJkLZ4NHHXFMCVXGCgQ2mdEGZ5z8EvHxWaMX",
  "key21": "3TrXs9KkPF5hSv4PzBJtCmnHkPTxQBjFLgQ5C8jHYmpbpWSDKpCDvZSnv4GW8qJMPT1MhbGeGNFb9SWVy97vkLkn",
  "key22": "q3BaL5NCf2qifHdrZ1zQX7XjLRFtnjJiRcDsSFm26L6hjfHfBmVmja61URqWXr9igsxZA8zqeKuRdRn7aicj87u",
  "key23": "2bHUWtEYs5bg4V9eX65ufjLUv7nQUTXQGpKrdtpkGX7LvT4fJY3xWxPJJBwgz4nf4Pty7PgEcQdLF32VMK7Vqc7f",
  "key24": "2krjnnPTYQfuCfPWJLZbCi2hTBdBpW5RQfzj7GnM88mBFYFyQhBqrVodpurkyLYdNaNRXgGidbzVgt5YwyQTMo1K",
  "key25": "4yDpW1uMZqgp4P9jHVoBwQYF6Y7fjrGfxVVRcmXYSdbochzLwZaoP6tnBLhZBEwSQHSJCSNj5iMJnUAAqTAQQXUN",
  "key26": "4N7EgpFpoKJkQn4s2YD7L6jg9Trj4b6Qzv9FiZwKtshFfNbF8v9xrZnhPvLrYw8akgQHiNwmKYPnhMyMajo37e9s",
  "key27": "5cWdGM6EdHZQ3BTDAV2F2r4S7FuXdXuF3pUA4Rzbi3MSZkCRburMtcX9pGi4Aia28X2Nd4Xg7FJ8Ww6BhjQ4jyS3",
  "key28": "5ZNrPkfH5t4uHzC2GSaqj7Ljk6PDdnoQbLmss1utAQ7zR5hPgn9E1zebgGVVcy3KYUs2HFathe5HZ5S6dGhpMuE",
  "key29": "2UeR3y8axovsCHhE1nye3YiZAsoM5PJ8c2QG7jzBHzU1kYcspg8y7uKDoA9aMFVuDJx68P6iYrCy9w8c3PkhRPJC",
  "key30": "5Bq9bAwFZKe9RQn4Dv4hMyKxQJtxTL33FAm6pHGMgzqV6Z1jLe5W7zrhcWP9XBvZVTMWQVaqovh3cX1ya5baBD3L",
  "key31": "3sC6dmNyaMtRvUEkBpz87ubcxUcZ2Bj5Wea1cuTgTnbXGuWEJ8FsWWAgbiXBgAqVepi81YWZfWW9Le43XMMWjm29",
  "key32": "3yUc9CSBbg85BgVai8AGLtwrES3JJKxP3YU8TzYMcb4x6J9y2caTtpV8AgH7ed7KdjT663vGy2Yjm9kwNS3CUtEH",
  "key33": "4ZjRv6o95YEbaQzyW7MrQXApoFbqJXzdTb6D7RQ7Rc3bVrHGQFFc2DuW2wnAjUxLB7A1xorJB2VxmjVau85czWet",
  "key34": "5iM4aVUFJoV3B7dePbTbtg6VLSa52AMG42aJTtPZ1LbeCqwUvCmdSt8o6z47wTVTAXmsAfyK4VcoEVZ85qmozvJc",
  "key35": "4bkeLZ425CUyZ1eYZNs9FBRWLYMXbcHp24mLDvHN4s8JKpF2GACPmrp1Yyt41wQ3w7eBGeP4isCktasZv6KHMaYV",
  "key36": "3cTGdbFTihaj2mUnrBYWwHCJvbwm8h5PF3TVG9SLrjtMWDY7rwt7R439ajhfHWrj9MkJ9CcfVPjTePmEcPS1ddBm"
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

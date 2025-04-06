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
    "3nZ1gXPGeXSh4RPd79WFirwCkafTxzuYuQYRrStGcsYtnnroTDj7SF7eU2oWvDJAmo8Pb2Zco1BCNxvJXnyWLiQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iyDzh21SycrMLQ87GxzKho1wfnA1tp8kjGN1DmvrTAMxP7raK8T22uaKHrJKbYyLvMDLTk9g52uufFdDokVyX3z",
  "key1": "44n5uDGRYj5HFdgwxUd2bTnGTDrabY4qbsoPrnzHgjBR2FSxdnnVHKDjTRFkUFN7miEXJbkfeM5FcdnPViBjw7sW",
  "key2": "3Tv8tJbkoPFcCihGM1AR9HGSXm88k7fcBRexVyNyhSWb4Nr15d5cKHmgWSANiKXLUu445zP6zZqzRZczYZR7Kt42",
  "key3": "4qQTax3YjDLy6ym7d7c9bxuX53iKQ9moGUZas36p5eESwL8mcMS6DeKB6Ytd2yUXNZXK4Yvp8oi6kAu22yonPb6X",
  "key4": "2f1vs6FuxBPmxm4ECRKaKFNR67FrMPyyyJQYbrCZtCG2oRf3cVKSvpZjhgMkSuMpL9cbdt5E7sftyW2TEve5e8xT",
  "key5": "4G2S7DxojpWff5g7hRqzq4oX6AAmZtA3WA7t53yXcRedgqs6brS5jXCwyQHNq2DXy2T7WXsdvBkf8Eb32XoTZ1pS",
  "key6": "kHboKbRwDj7o2SxrywBkJAd7zzwhFvAeyvVA5z5ihKAB81R5L73T4omFQGcYPuaxW7awKVG9GCwGiMw57LRNCUe",
  "key7": "Qa2JXN6QkZTcodmgRevxEDGGgLw77TY7hHMFaizVdSAV6ewYeEDJAFTtwUZvzdcbTVzfdHaZiB2piL2FS1xTjgi",
  "key8": "3m3czNEyzNY2Hp3GwpkZTWNzXWoZwX42Xd17bxE1oCvCNmt2kbvuU3fsjh7tnr7MdXzPM6VWg7mxQJoF3wRs5ij9",
  "key9": "3u2kVfArgdPmRyiR9JXcm6CdUEDtxys5D2KGyRW8mpm99Us65btiuM6tBanXJ8ogLQwjRWJkz8BYyZ6Tt1pTRz3J",
  "key10": "4bsuwc4JNyfVi4sKtynFvcq2j5Szi1SpnZeSDjMrZmuTng2TJ9sWCiTp9cKTMVQ6mUjyvJFhp6926V4fbbQVTfiZ",
  "key11": "3TD97JUGTMVYEjsxsDizwqUUGoPdiKhFQqBWw8nHuRkAhLc3hLJqDPCd2Ve8oCkFL3eijHVouWeWH6Se7JbtLkPw",
  "key12": "4huK2ScFLoSoAZJHsuV5TcjHzR2qpoGMZYzr6Ui5BdykLxicD2uQcjbkTriUNaqGajUfYyXtA7abN8TVprty8YnM",
  "key13": "44eXSFWFeAyjJqrEi4qLQz2BKJNcszkG4f96AobMsmtqB1jVfbxuwwjsuRky5aPdZ7ycYqHsU7FctqvipgnmGB6k",
  "key14": "JSc5ghtTqa9XoVmyhNwmbWu9WZpLHyc3if2msfNibJkSCeTXTVE7ny4wPsc9zhUyt6TFJHA6MYPMeC1mveq4pxM",
  "key15": "3nyc4w2oEtSCjdDji5H14tjJkaSQXd3bs4H4kYPGFNgLdUcj2A7FQ5VhH4qeeSmMV5fm6UbUDwiwuXbFzNudtvo",
  "key16": "26porAiBdBZobGPVBfin6RS4oADtiiUukpUdLVV9J2XN6cdjJAcN3WMhNfQSPQzbQxBm1edTZJPjBGpXTKZf8WkK",
  "key17": "65K41KKu6d7TQBVCH4fZnNEV3AnkGsMzMj8Qguz9gPKho3tg6fYZ9ZNpUuaX84fFHX9fQZFWcPioLTY3oWDM836t",
  "key18": "3U5JeAcDb6foJshEj8fqBimnXr7vuDbU6RfkFcsvii9zzLpdccypjwwZi7GmwxiQf2B6R1Gqdq4uuGuJf3DLKJjG",
  "key19": "3WYpjY3RUyGWiyzcFpJXokPmgHmPcjM11dwC4Pvr8REPreg53ga5ht4d8pjNWGj17p6kivvaARDaQC97hGg7qBHf",
  "key20": "LmkFg6Z8b1Rdik8vE2nkMTyWZ67FqXp73MVLJ3hfNxkcfyvqkW1NCFiQBuQitEDrx8oRXFWnw29DP1YHYYbcVv3",
  "key21": "mLyQCaJ7ABDUqJg9dUVL6DQGTgXg9a8VwwkWTbiewQh7K14xtw6SYVdGjxBvjdz7tw8HiYRETcR1KmFyuySCm6t",
  "key22": "4GmQ3T7tAGRwVEehPxB5QhHnrUiBY4rTraRK3XNzTBSTYhxgtXsKKqW2mHi4qyy3jvnTMoZbdBt7pDNaurckaKUg",
  "key23": "3EjFt7oKANPm1i2DKvUdxDsEUGVbv3ABECNEUX1i9SKTpeNEzYuaiNS3py35F2r2HeB9honH7CpzC5MxY7gRRo3j",
  "key24": "2G92eV9aDLjRCEc8pLN5F3fwM3dwqQT2BKxRwHum6uZrpnTG7M2BJM4RZovwuuBvF1rTBaetGVfXpv8Se4q54ov4",
  "key25": "3nnApYfkGEMxfujJSh12ovx8jRji23UFxhoKakXimDK2AaXwhrP9yzVQ6dg2mFpnXMfq7GsxLYWD7V4aFNCK3gXV",
  "key26": "27SL7SATXCoyakgYpaJ2XBgfBSio2ddVKcLvx6AemJdxpz7JsygifM744iDZHCSmWkaUNCqtePoFr5FMhb8AGJrn",
  "key27": "rCTpe34GvTwt2N9GsxTmwiMDDFLrpaN5qTz9XPww83Hzx2ziaqx6vgNgb2MmykVfsdpytD6ZJoQg3k4U37StQka",
  "key28": "3fv1R2m2t1wSsjFH2D2C2ejfLynQ71VbnvHQsd5JRtjp36EMQdfKsA2NdD9NvYTgiDQ3uP3VpjK3Kgb4jZDrutq8",
  "key29": "4ZSZ8aaHUUMXU8axrF4AoNJ8RCFKSjhZHkcUMAf3QW9GjkmtLWFAai1iSjU7ZAkrdHGM2TdtuTEXW14qjNgox3KU",
  "key30": "3NvdBcWdPpfzwhEFiaminmjbqg2x3mKHTfdHSNoDHso736rphK9iNDqpjUU7RzR293fEXvV64VDr4MQfu9ceuxVQ",
  "key31": "CkdWmya2hqUSgp1E49k3sb24GFJtHmeNERmV11puiLY1B3K3Chd1DkM1uZfHVQQNQeV6BZVwCDDdhPfBpVPowhC",
  "key32": "4LdzitKMLdC5DHYtT7c2WtbsuBLJhNEytUfrKbgJdS9PrzfmT4TXMvARCKteKvVv9Fh2PG232uY7eRUtYkV2vvvW",
  "key33": "3PNQDEnSTcunkoFqs1XfgSCGJrN1icxEUevGUTUxjQEpQpVKasrZspWuJ6HuKZJJ9Bn9UHBE5LkXiZRKMrfUoNCx",
  "key34": "2XWfRotifqsmkZb7h9zb5RdmAMVPcjZLqhpXHNEwSrm2Jo4tza97W5UAYMfJvVcCPYVu5Nb6PeJGSKErNqaDEUw1",
  "key35": "5kKUNFtghAXx6VD4Jdm9DyVoarvPZ5dQNEYf4BNkVXybDdJaYDLMM5BG5myyEycrRjndUF7uBufE5HnguGd9j639",
  "key36": "QzTmfVfy6KkdPHXtsPF8cNannYCx8xbMkKEpidVLaMtNVcydwuwYpjfCKAGSmKj7ZxgeAzydLhtG4bDARcAFrt6",
  "key37": "HgQd8eQnVcE6bg3xt3LufwegKM7wkYGb9eNd1ARGec8qYv69jE6L8fKS97wCZbx7zK1woHZC2bfKWMrkVdahQyk"
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

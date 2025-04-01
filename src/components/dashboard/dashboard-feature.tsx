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
    "2cN9b5ypcunYrKv14CdAX4B7A31PVeuvQMPayH5gVcqf6iQkD5XwnuuGHKCSDoH6RsvExjQv4V2D4o5YfhtYwYTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZyyKKGRTPXbcGCouixkhPM4fKZkCYkkz2PJNMwvipph9N5rrzmSWR8PNvrf4939PJ3iBqzui6kfE7EnMt7S2REC",
  "key1": "43NQ62aCMC4PqxX7riAPZr37kuSgosmKHukTePojqojrLV63CLZiq6JTCArTrgdhNEupEn8jZw4T6tH6zF3qfXBw",
  "key2": "4Syb8jx8pVvdq2rut73ysWPVg9KjRZQzwqchBSdH5zo8sZ2oWGwPda1DcbS5ososS18eLdxitbzCVmzF7yBsTPNX",
  "key3": "2id3MMHyAWWFGuxcDfLxK3JbNY1frse4g9yW93JG7T7mhdcYtSbY3ewpaRZem3beKLwjXumbAHz4Wpjna4ZzNDay",
  "key4": "59EEbZqjrgNxXy2yAjvrCDJLjeaKKuVfQx94o6GyZdAR5UgkkqsyvbVCUQ3xzg16Y9NmZL2gVYhDxeckqDED4jvn",
  "key5": "B3zgy3LCEwLTp8HkRhX7GhZ2Ujs6NdqoKEaKi9mm3jE4HqQBrttDxcYBinYczqA7Yd2DAJKCyq5yakzDRFMdWGH",
  "key6": "RtJnK1tDYsyeD75YmwNVoYXtPeiEvZF6xBp18L2FxUpc3SEBvHdFRr6wZC76QeGWriRzMqpbrihA1DK9wyX1uYW",
  "key7": "67nQB97ho3WM3QLW6tTiGMQYNzUJX8PBYHXGnwesNC97rcmC4LabPFoyvrD3PPANFXnFRHSTH6Kz8jQ5WP2YLW42",
  "key8": "21uxQyqaVXCHNrUoYoLc5g3Z5g2MFJxwE9XoeqQmWBWxy6DLS4JtuEFzFUXZRfhEzbyNF539HhCutdw5P2Mq37oq",
  "key9": "4fvign6tNKA7UucJdQxt65pxTjJHz3UCGfSwK3ASJG3P2NxBb4dLQByrHbmmJqdxiA8uMHdaoiYYMD17kVYVDDdW",
  "key10": "4RuZv8SciY5ZsqMdthj7GBKFCn3z9eKuXrTUiouyfdT1qgCZJ1CAi7GTDyg3sPCvR3qxWcAh5K2qG1xBuTZKPkTk",
  "key11": "66purwRHtRit9eoJzQZhQXTVa4rnLc728GTYFuNJQnyPufuFFegoVkhwgyRcrrvsoXNuEYP7mHj74QPUngH4bUpP",
  "key12": "2YRQ5Q9C5KyrGpcE47FEpk1K8dwKAFaXdoXmFV6RG57Doqmh52aKtEQUKg69FJnUryPNbvW6sArYpHE6y2CTF2yj",
  "key13": "oRpnvCF4eXemBXV2oYLtWdYMXNCUBu9fLeoWSUwRnM4NmFQmMx7zGw4T7wMyqgJJViRtMDH9NEqUMiDWEx4oYcP",
  "key14": "1kYVTYCfwcHSwBeDj1RDPpv6p5Kn8jwNQ32gMb11B5kck9F87QcaRZEVKbyX27Eurw2zabm6ov6Y3Bmfg1e1x38",
  "key15": "3xhwjKngZe8dtvKSGLMMfSwj8Eeg7FWoQfb1eUG8uiSMuUfpZxwk9vaEwWcrkS4yGoZdvoPgYk6i3mBkAPcgwwYo",
  "key16": "38ZhC1wqY5DmsTomfFjnmk1wiyoj1fXxEX2gqbAAo8ztisADLhxcydyL1L7nAwxZA4nWvoaTULzUrB635C6458sM",
  "key17": "4cWoAwkVRSbPi4ks5fwc8n1zssBHWRcxKdH33C6rK8mJmydbDTuu82J5mJ9pjwE72BoGMw8AvR4tN8ScXeBHACYq",
  "key18": "5vG7GLAbU9SoRNx4PkvwwxdRXUG24NyjAtYBJikCg8KwBbj7Ru9SK61xYHLGB3JLLGWNMuY85XuHcLxRwwAUdX9p",
  "key19": "3KoSCXrbVr1y42iFSsuhJNjKQ7W2eWvPR64SbGQPLccXtA9YWGS1kQt4TUZCr46UDHAVgxAYq8L6zXQXxn7hRWu2",
  "key20": "2RPBRfagLRCqSBPAgFvrp2gPTZAhDyk45yrRCH9dGqGp4PyrU2jyNFsgQrxU9YizfaXbMLd5HmSnMQr5hd4yHrgL",
  "key21": "4VM1t5xqSR7xMjKHAajrmEEfkhh5S31tp3M8mJQYaqGm3E7mAJ6AeCJ1GL6knBpcHcJKXaQZ3JxqVkb4BSziGuVn",
  "key22": "4ddQiBaEnPqU4cQLoBXjW6t5gaeqLZ92ftB4KFt54BGonWmgoqjbRYsv6JJWnK4dm5e6Zy271t62aRQ6iKWuDFaD",
  "key23": "5BtyYVUBa2BTSLbx6NguAQRrhDLnpTdCzYmG2UxZQFSSmBDn24EExL5jTGjC6uJGV5iN7UwSuu1pTCXVxATmN8z",
  "key24": "R2mJcsKV6tyJpLmjQNrF7rNHV7833cD8eUS9aWssMdjpZhzUvSE2LijrKB5QfHmWt42CdYmuoX43p4sGNpEF539",
  "key25": "3eSKAn7ubbAigkAeBotYGQX2EzbxHXmCwy31c6PeASMpUtpZYCf4WkmNZc8fLtUr3nSTFACu91So3pmhKBJsRi1q",
  "key26": "5swemqCi1DuApnX3gmEZt39WTmqtZdgNeEGn1LqXH6tWadNBRwUYPoVo6VQxhppw9pXQzGfR89Mbpt5hJbBksKMk",
  "key27": "2k2ds1tjzes1gA7U4Nsg5aMD5qtUmeJvmZygbFwH9Rg4mMkmm7o6dq9grvKySpshvQuwXwBYVhSGBWcLa6XL4ueL",
  "key28": "5AUuXpg1BmdqBdxr9vQXXfQvNavgxsz77Pmyw5RKt6b41DdD2yFU7ZcVZScKSWHP5jwbTxkKZk5HjsxEjH5tBC3G"
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

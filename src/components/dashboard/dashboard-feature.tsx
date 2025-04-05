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
    "3XkGFuUEnxo2BAdn6uMTE4DkK19SFQhuM9LncV5jjJrp6sePwm3ZPW9CywpubmVn8DKmiz3Pad6P1ySkAWqFDpnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAeApRGKYWy9J56PDd6kqWfkSaDccQEiY3JKt1y2CPvKVg6fHDAqgU6HY9boJ5qE8itYaYiv8YtUwfrB1QwM367",
  "key1": "m66tjb43icUNxwoZj5eyrekX6o7TWzxFATKz1h9JLwpuGMEJZaqiVBHCqnm2WdnB1KxFywuzVKdwAy7o8QL2x4S",
  "key2": "2QH6Dxkc3gREZP9NCZoEhuCKHZ3mCjqwfQvgV2CfuDkBVb9tWwJ5gCxuo2dB8jyRcDwGp5QzDvhiFTgTxfWokfUB",
  "key3": "3YEbzhVZQug1tNEivg2nF8t2nWucrWBNCZv79ik2WPyjJEmhjQjiqBQebDwr2AKVuVkdEqtte3AxWtxQAHPNPMs7",
  "key4": "2mqW9BCaPJn5xXZuytAT1PMN3jhgZHWZTqXUcomWWR4gszKNtoaHKdsFYhMTy5TsDpTqhgndeouAX7rA6QdnNG2i",
  "key5": "3McK5v9EmmGLPfNgpUzHH2mzKLkff6EsdATdRf2kBEx7M6FsXRHYh3zuBJMiQXRK1FGmyyGizfGHgRLMY5JJXesH",
  "key6": "gjrGgdXBrXPyitDw8etz6zkL8kec5KDop4hqrb5Lfuu2S3ruCQyzkFwcKxzysMfhXBSoFyNpkEcvjKPxbvxVJti",
  "key7": "3YvQZcJxtzh2X8KWm7Dr2LrMhuzcFm5rJnu9747k2KsxbSG1ue8bxEddgz964Ktm2JVMNyczAxnuRMzB4iHFvbKo",
  "key8": "2ncdkBgj8sDgexAf9G4zoC1ug4WQtFd4hQRi2ojWRQ53twTMXkZBGC1V4TbDKi4zwLQUUiEjKirHrdChqgw77WF9",
  "key9": "4sq3KiEFwTDQ1RBQyYiJAEqGneA7rWJtJrdmZe8G2VZJ5ermqDptrom6BLMNpBU2gK78QCDgSh55b4jzx79SFeZw",
  "key10": "5nSLzCq4snb4FvHz9dJAB79ZTU3Sm32VZXjgnUZ7NPjiew35oabKBHX9zwUgRDSbWcECU8d4aCXVJN6vUaJiWjDd",
  "key11": "2YVMbRCiHTk7ewiq2MPtNQ5dpArGHGXMcqptdk4Zi233jUYSHm5Z4aAMcU7ALd69XmtWUaxmDsyY9h7GgV96xxtw",
  "key12": "48m7ksHbvn1ZnEsX5769huYuVR2bkNxtBNJF2xPCLMvNhPn4c17Jskj8RgDbiXTBhmJL6JgXdJrUM9Ax46CSHxWY",
  "key13": "3iqCHSvb3WsEx7vWz6gErEyW8raog88KVmUvv4hQALVrZW9Vsc2qzJE6T6S4FVYSdto2XUPtuPZBBDwG7wB4hA4u",
  "key14": "5DngVin9rYczsiKxLnCkEcmEGCGpQKDejAbQ81ZHAxTZzqKoxXMASU3yjE9f9YZSJQoxh6bSSG6n33XHpjZ5PiXL",
  "key15": "24SghyEn6kn6zMV7oVxcrLjqCbyZiHJRNaZSuXCmfPDBHuo3vXfPmPnp2PMPyJZz3fTCRkuUBkFsWDY3i3U3pj1P",
  "key16": "4p1U9P1mDQRX1pLaLPv5oXejjRgy9Rzeu5XuuMcD1GR3jkV5LCAcVSJSu132FKRYVWfqUBiMrWu7LQhBrL4ycnRf",
  "key17": "5f2REcevMvU8QC8HGKEsCM9aQYHqEfKdBfybeamnH5UiZ1KPH9VFpmU7j9QSw2cBsLK7p1t2puy14ujmEofdvWxV",
  "key18": "5PiPL6n99kQKc2SheJtM4FGR8q6Fkj128GubTiZ45WCMQDFAbdinWPFojrZZRCcZCzbersLf8p5NTXAEFBAr6Fpc",
  "key19": "2pZJ3Ph8WnvGtvJfzBG3GykU31SEWgyFETJGSYH1uhwvb1WstcDWqRUPqQyMBCDVs6CvhNtiTFt4rcj9FRXurKPf",
  "key20": "kds4ReytPeWwHU6MpkEN4hmqXfNVKgQ1aMqbXvw2b1zA8HjQRSNFPyx6j28i2SsazS1pY6CMvEXNRa3Nr8FBAd1",
  "key21": "4mzrZDp6tqhbqvDMph5hXVCYbxCv5xxnzx5Cw7Ymm6bM5zCiXSrKLkcBdmfSrzrcSMAehHHM6Z4p39rf9Fh8XsVm",
  "key22": "2xotRHeC4or27tUtPDwKkbichSduYYxzfjfPsU7ya29MFyHngUvKTL7nMYhTX8X52K1T22Mem8vnKKFTq8cCmMdc",
  "key23": "4J5edrMbPtv5vZm1LsJjSLZ8Qo9HbQdJYkeASPT4QYU8xGqJr9nJ6axp7gqQaizvuUR5NKGk754vF7gHp9EuxHq6",
  "key24": "4Ta2UhDFvNjpe9dBCHvLd4jMJxM9aiubkJqEMA8GAQtFX3GibYfJfh9W9FfEXcp4Fy5z5dRZv3Svu5NPiFtTgRhU",
  "key25": "5JnBjWsjUVcv61dZUrBPW71pXzhpgoijbdGEHzgXhmyZ3w9smip7gK8kEoshiGveoWqo7Aqy9HrREbJui3NJEQd1",
  "key26": "2jV7WkGtAuzsKBNQTdCQz5WMtUxWdFMa7m4rRYXvV3wNRZzcQbdtfwDLoQZBNY8jn2LJkKbmMUCjDHeAmShyCvtm",
  "key27": "4j18T4sCNgcWjB2MTCwMqZ9qiX4as8qfdar5yjvKw5rukF7uxpLVWq23zpRwzuNDgrYWwDTydj5ryXdgpgsNwvkC",
  "key28": "5NNfocBtgH2xYPGg3rCZSrXifjVUhEAWCJBuWBRRhVEqKJgAc8KuZgt53ET8jgP66Gw3MfUUTzR8i5kgaYZoUogi",
  "key29": "519ug5BshJzusinWcQE3YseYu8UDb1uEEeqWtuQchQ5ZAWakLQhaapjZgnWCFD7BT9ENt6cLREfF5A5Ry7b11fS7",
  "key30": "45PDtsKG1Jzaj8oVeznobdW6JQXBBTUwuwKteDzTNHGJK91Vtb6CdSsaUGfDN5i4Cw4EXy6YLJPpwCZujEf18Vgj",
  "key31": "3nHMwV2ytUDddiDeJtEvxg2t4fjRKxi2oKKkK7n6dCQgd7mVFfQeynx2xXbJcAnmYkGVkLSr8boRLCz7jNJ2p3x7",
  "key32": "3dZJ6gmwaRitxYdu6CEc3Jwa5RAa6ZjHWcyuGNAkNS6U5X1pwottiPy5zSLm5NjWpuN9BqCrWe3Ey2mtKkqt1C7x",
  "key33": "5reysKSKpsKBUdRDbnXrzVRrCxDrqpHPfLsXp9LAzwCvoYsnmNkWrEB7aux8WNTqCUHUwzyPpd4EbMzmqdYNZ3nR",
  "key34": "28uEEacpRWvvN8WHzGzaGGk5TqCuUUtGdHTDZwT59deMq3N7zqkLh4pV7SUt7cBm2peuty6NwGgr1htmBfYEUu2R",
  "key35": "59ReX4zLQC5N8v13gN4QhF2uhL7WyYqhzAmXTbV5t6Jg7mGZRGboGhSa4mkT8h94YPdwAZsVTghRBTyjtN6gGQch",
  "key36": "4ypo3auvVDewwBQqi3Dm3YtQCGLfiVa9xdmPuhjrcvYU9RFDL6FVS3dZ4hJDPnn1U44ECqbS93em7vbxnbNQxaqg",
  "key37": "21Bmbr6UARtTFT9sR5vJMGLjNeH93amVj4mNECKCdfzDYnqn2aMVc9kbS3JVzFgwbxyN2WYHRTnz1AzzvE9Jmzmc",
  "key38": "29tSRT2JDui8zKecoFXKG2EdYMH3C9YY38fBzZKVCh2vYDpJdsfhH7VMwM3sofMPUxncqg8HeBYGrX81nqrkzE6C",
  "key39": "5pnmHhvMLiLFAisNqxbQqYxmQTBaCR232fTMoNGwaPJvUidReTWuthRe3S1FL2UjHY5F2EWHAPeiZEFFMFRrD1Kb",
  "key40": "3ZdQ7mPG1Svw883qnPgH83TZfFnDLb7nLute5Jfm5q9YbNH2D9ES6qU3WipHxqinZzx3HBKTGAeisbpyco7iJ5ew",
  "key41": "2DopAy5ysrYDHS4iLdgVvtisLDnYqqEk3T2x2UePCMwemzjwmXunsbSwwx4mLPhhJcko2jN7iQsSzCNtAXGb7d1U"
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

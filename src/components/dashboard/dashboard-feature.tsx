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
    "41j44mvRhQu5HphGP15fzWa8C7RBUjBuPgiinM125XeohkXJWoC4PJXx4W3FnLq7SDDeS2GaafirkAsm4JrLEWoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkzCMfeKqKn9HKbMEsMbwx5d7UFNkWdoPojSsQN6txHRv9ioh27kuJSeAudBHsvXYgj8mAVGcHAWoVcqHQY9Q6D",
  "key1": "gw2Lwj9j7gsGjvqr5FqxN33xLGuZEwRUrZFTgdEDxzWwTsdDK8KfMh1BV8o7fQLDvYf5XK3PTsCeoEDDHsANfpY",
  "key2": "4PwnqMraSeMFxw71EgkNFX3zMFeSxk2JB3wGqN5GSutHkEoG8t6zooH46GyAB1RMeNWsFasTrSAtY2oJ1em3z9zb",
  "key3": "43ufrf1eiY9RnMt3kCBxSAiyHGgu7YB97YXDzYR9YgTukoBRnBjYoRS3zzM6cSmzoUC8k4tNTQhx4QBfnEeVmGdJ",
  "key4": "31VZMhZzqjtsuFKZpdoQxTkq7YFNUvDh1LmSEtpBgwK5e2cYZbSStSz83UkW6VCUB8jFd6PoR2TY9jh3pLBVFyg",
  "key5": "2ZuD9tWnchB187GttB2KiFV6NRHa4G93LtdXEf2v6ndGDDcAszBunfcm3eFa2wgrDCsz9XzbgLdyfpy8pLZQLwoc",
  "key6": "2NweCLYG6iiCo9Rq9R4N8BExrgtJTxTCtU8DNzAkvZWMFntQ4j3mFjz9t3mJvzt3WALimez5A2h2nKMhq6vdsY4M",
  "key7": "3oYZAvHUZKo29AQ8ekyV1pD32CVp6FgeuhHET5mqHc2FnTSLYJGsj8WMi1sYvmRXZnEDLCfKLiefFAUbT5Q6q43a",
  "key8": "3sXKCvY2nkYXde42GSj36sHfeH3UmLqp7PME8GU7GHvvZgPy8HQ1JQAjxepCDjUUkpyPFUzkhVTvaDniDMZsgoC5",
  "key9": "3cT3WnfyG3rcpgsd9YTgAud5W2rRW9aASWHFnh4CKmw7gMwDPqnK6uzWShBqrDAeMkiyE9hWu7B4UGZMJXG8cmqD",
  "key10": "24wtwa2yxYSoT8qVbtHByaA3h9sCTTQ4KKNMyAJPJgkXTwUt3vV4tR55HDTmBVLsZkckoWz8UaGqDw4yjUSeNkWQ",
  "key11": "5nJ8VYSM7tDbWD6dq62uKMT3zYS3XDbuoMqevzNi2DBZdNotLfqYNksRPXZcGzBBXKDDEmuvwWQRWL6LW14ghxGJ",
  "key12": "5xz9CiKCDtvGz2hZPvZB5hfc2bicJAMzBgnqqiT3oxfDhq1n4dSjQ2PFNwrGpvLD5jBuBvazxQYyki93WjwJzk5Y",
  "key13": "4p53hXgBmjTfQJMEMi7B4gNE9w4QpWevGVcQx5iwkhyeJbbf8A1zpLYQpVwN7rEDZHKUN5XrJ19MGjdXc5HsUz7s",
  "key14": "5fjxjaZau7gSzZbFXxGVtgPzBdZcNJ2iKjXLj8zpv4um2kngjNyvrPo5efPTZgFwFK2L7hQLKHV9R1Cqok65cFXj",
  "key15": "5GLZynS8z7LCLzxHRMJwof9xA1cZmqaoHH7HXbi2a3EALMKDEF4ERLvrFeaiGkk2Xun5h9AxnjasmoNv8REpJqAt",
  "key16": "vZkV3A5Mt9c8ZhQ6ARjPbJ7eDJRxA8k3yj1HQ9mxVti9qktEsLhBB5CweJGcxaC5jt9GLz6qAUis9QKhanPh3ga",
  "key17": "51X8Yc81b3Bb15WHXSguiJ7P5MUgtMvGjy9Bg1czdnHNVWVWwwXZGWudQh6Tms5dBVtnAcoRcCaqT2KyWtEArpQ2",
  "key18": "4iyeaWLecCRXuxCJjyT5hse9B3jrNEiPQnMHGghg6d7BYT7aRjANouEpSj3JC7pSpmra4fvbx6RUwscU5TdoRCdN",
  "key19": "3Fi6qAYSokKwFEn8xEaxpRGUWhQCbRPX2m7CBQcHWLCxouEBAE3Jr11b2kHJj4s1fksWLSRWWsDeeX1k5hGWKQCT",
  "key20": "26SfLWij4WpD5VitHoE7s5qqQqYGz1LLsR9FgU8WmZYjsgsfk2CoivpmsNJjzJrY4GNv18VGAYi1fB6LocAMXhzj",
  "key21": "4w3EzjqPiMArSwueGwsjhYmJCrWgWuT2pNsMRz4m9Smpt6maAHSCJeoKvtZqa3Fzdy9SV3iPZ5ztGSGhrrGtFoyB",
  "key22": "gonNP8D7isduBzmpkDBBPo8mAUZYViYP1me3XnJbsF5TKVixntNp2yfunbVwgcJVeLt3j6xDbKEMAqpprXeZ2t5",
  "key23": "4hYpDxhZ4m3zSkBXBHsCngucdvMjKTrrhprWcAuc9gWBZ1UkaWSCoXJYGmsnzyQhq41mTqgiVygcMp8QY3nznuQu",
  "key24": "4NB7qHPEspExTzAYEZiUs5RTCbVjZ2DkNys6K3j6fjmrmDVceeLshTsLaYDGLh1MzWa2TQDg5VqtmcTeAB1HPuj",
  "key25": "2yjpwiZKtqdrB4hdPoaRLR9u4rz4jjjwXdGrEYzPLXai9CAmkyjbofQnvf7GDX53WCuX4eFiYhrSppLb1os9uV91",
  "key26": "4kwTB8cRw3RuWUiyNm22xDiSamcTRR7ELohx5gNTEGBB1aSnUsQmozWHy5jerKS9HdMxMJJfJ48DFh3QEQb4KLQa",
  "key27": "5i6YcykPNmehEBitwdVGHBxSxuRiMqXhNvshmU8V96MsuWRXUbsZztBGaDF3rDJ9577oJSc1TXTJa3pkm1ap2ehk",
  "key28": "5qHjJYZ2EoHMSKtXjNq4Qn8PpC7PPjiQmnnJJHPABteMBM8za1j822dSzbPKTXQZpeHhuLmR6oP5w2LaX5vJWxcS",
  "key29": "6CkWDpQTUWwZt4CbcZoXgdJb1bqRpbkampY3JYwaCtYJzY2t3ox81VyebaJkXsqDLhXXGqMafG9bPQDCjGG8wBR",
  "key30": "pdvghauojeQQJ8JJEvu4paTfrWLQf98WuzsQh6FjvkaEDKwXeyrQcbjGNxGaE3umF6nQo4fMRLKKbvzE6mjAQrT",
  "key31": "3PSAgHAgSdgfSGKXzegu6QZ3SyTguy3qJYToV1CnTveUiBfRMm4h7ufEfsrKAmq6VEf2eSnp5sBG8sEkqqfDftk3",
  "key32": "28yk3Fn1VDVp6AfGRL4Ae5EVGGcGRzp6dV5GxnG4Nu7idMGqUEhUEopDJ3YTaiLE55HsvqFmRXz3GGRvibyTVS5p",
  "key33": "kSDikqMyQWJ8pbV6q3qGBQ92HQHW43PaPzJ35j5Pds9LfLC1QmqffqTBZs5jEA4AsyxB4cbt8ruFfXTwFj7umDv",
  "key34": "44ZDq2mTVkuTNzqMMsdfZYJxJH3YAnambVFx28amYgBFhHwJBrmHShbbFGzWdyft8fHu5AP8wBLr6AZbGWM9y2Vy",
  "key35": "u9WP9EsDQQWxfB45YcXqUFieDYXnKTzUF2kbNSVnDrvRMifFSmfyK9megdj9UwLLsUb4Kt8JHiN8TLHWozuGvVF",
  "key36": "2z2DM7fkgjkBfhEawWm6qJEYvDc6JWULmVR2xd1AUw1UumWPJcxG5fNhY95e6aWS8e4ofpsY9nQcda5f2CaCbRmT",
  "key37": "2TeGx3mCdwkGAutH2yxbaBF2Rry9xEYadtmy9NmDipSWYBBtnFngyK41y7mVq5CfZ6pRaUdwnzNtYTxQmb9tjWVp",
  "key38": "25ZrRkr8vK3ZErCGAE6jWNzzRUDYvNuXKfA9NWw3EZeH1XdSJEYeGLpmvsowPuPyHy5ZEQvHS9zEJ9jYrq21HBBq",
  "key39": "3XzqW2T2pf6dPVHYYeWYziUgV2DFxrBzSbjWr1NVKRfM8bT429QohXvn5YYRwBMVBKqYnjDMDWk2g8fv3ac77Yeo"
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

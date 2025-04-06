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
    "3PtD3ijdtQRMie1An5t5YpF3KX1HKvhEBbtYbhrVzk4dNTViFPyoxKipqJwFwimpdN19wapeT7mDfzZjYhiLU1Tn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFWsLuoWp2BHmADwQN7PHUP2T3Bxm1dQSTjRAwM3s4mAzPcDWaStqcr1ZYDQD37DT8HpCjo869m1FC2NegtMLDe",
  "key1": "4LeXyMktApWGmWTaMRy2S1Go5ZNxBUpM9paBMPMpUe5uTwvysbUgvqumz5A8qAq5EKebBQhWjZLRa7uTRR8HmE3c",
  "key2": "2hfk7EwjEATiXcAqtwqSAnYKi42T9v7bDXq4EA7bHKHPWXEB3SQhkhu7C4DRv7aaQno7sQWzAxdYkY4cD76cSXXt",
  "key3": "3CDWBo9aGZhpX5nArihMaeQ4sBGk4d4dak78nZJYFwYtqzjh22JydKwVTSeMufrVP7NCLJ3yViuvtHKpXsrHFQeS",
  "key4": "BneJ6uJ9HX8gtRR9kvmdiS7qGg9wmW2dYiCPCMcRQmXFNGLMaPfsNMQnTgJsjFXhoCwcHGJUEPrP9rAUH5deNMA",
  "key5": "tWsrofXKaiVM9m8KnTjzP4MXuPyMGcFop9nHttB3Hs66iXfTUusKHGGb8Mz1vq64NoUApJz2kb9re97bREoPhqL",
  "key6": "5L2vtxwPkJFRoJEXiWWo9VFH64saPudZN262uW7g2CPF6w93JeWX9KnpmrR3xDjNySMHXHekkaZvvre8ABbuxUR1",
  "key7": "STGDa782C2APitFUQVjtwG95gKqDTQCjBxgTmFQntizNqbEDw64TjfaBq4sCJsYodQdvbG5PNDfVma9PVdmyXJj",
  "key8": "5s42N9b8knrB9SsWeJuCxAng4Wu1rG3pZisLuj5bs7iyozWJWgTLsAnZ8tHq2cAStH9ytWcjUKCUtRQk6FfaMDvk",
  "key9": "2SFKyKj23aJ7wcBHmACTvkWL8XKDZbDXaPNqg6Zfijm6vZ1LopU9LfRkd1a2xH3AcpLUo2zBaUpYwkE5Axo9fQH3",
  "key10": "28eo2a9vBqbSyuPPXdpyptTPh2MfYyePx6g5cDMRykXRsnPqyRH8pkVsvmyH2LM2ZLHv1Qxf4ZMuYtZXRr7E2BKm",
  "key11": "S7msx7fEvwVYavUkiq1PaDHrHXekKajMEFLfhdP23GSqgGB4NsY6pYPmCNRgk37NUo4ZfUSHvhKitGE1eCBAZUe",
  "key12": "4G68QqeRm3BF1u7jLqr4u5nCReaJtS9gJfm7rnFWLxGurwyKwvgdEpFUcYYE4uw1JH7A1rmBhViPp65nfSXEZANa",
  "key13": "312CQBsr2S3AbzLs5MxuLycZLKet6duWuKRBhpyEmEZCmfqNiFJja4zyTLAVu8hBqc6Ps32pBJbUTX5GdkbHzLs",
  "key14": "Hhom1fT5Y3crp4sA5kpGwCgZhjicYHGvv8K3Wg69YjYzWcgd1nwmaqunfVNHDnVix7uYPCcy71tDM8qFpiUEVGK",
  "key15": "5YCuneXTGev1RacZdnxdgZFPuvFK5uxb3b3bH6YHESDLWsHiHgW8L8TforHbuLgHMHaELpknMHKu5KiWyvmgsoZj",
  "key16": "4vcbYVTfXrdaxemuhtetKwoNwLwb9Fgr5TJTojCaiu8DkX4XQ4mj8aNKSREY3BCDCS3otBWpKcLRTVxuAd71Rgo4",
  "key17": "1UVQgPkd8SbERrJiaXrGtbqHZWHgyyYgwk78EwxsBr3HNd4VzesWsGfuM2PCNSpLHZbCGCJ9XVvGhWccBfQvbWW",
  "key18": "gmWEeqUSQpWP9N6g9UrxBd3YJK14Mo7VF1t8zRss9xxa498cX2ZtcjQXuqjzfYtdWJaJAeh39QonFQZVX98Dks1",
  "key19": "5LcxJBK9XXcPM5wkSwV9jBtXQbW6oPq3C4L8jDhtZVYUaMjYRwzBaa2vB9NuYcZVPjvg7VpgdAkxGfYrJjEqUrxw",
  "key20": "3c25G33BFszRx3H6xu4eCfWE3Af8B8ztEPQdNJ2ZiAfXRYU3DkbH9LKm9pSM2NJgwCc7PXNedAQE4zbb6VJHBJsE",
  "key21": "3EdBAxrJ9H43AGMCeF65Wb8oNz9MnWHqbNKqyD6oLUs5wWYCWqGwGwp9DFx26BwY4etM5p8d5qcYG3YQuKyYt1M3",
  "key22": "2kBwF5SuCn9FDsKz7m2bzWxJ478xkYUSJ9rmNh8rVMBawtsshiF4CjLTgbCubfneS2idcK2wXSg29yVRn3vR1YYq",
  "key23": "5zrG1nEXsN1vx9KLLJneBbotGyMm8d9wt3DcyiDG2NXs7EgNrZvNfPGWseuYryaV879dpR4xmRy7QqW2khbzs78N",
  "key24": "3zHP31UQP2PR8sc3LjxqCniD2fFhPawYepgnmrocU7wFjX2TY2wPbq1uznPjXLySByGCRDSeVfpr8QJLigGGhsTv",
  "key25": "44ZXSyxxCbcLFVrNDm5VtAfu3LvCVkJZ7LPTHLfMteae85ys3iymvcsRazXzhV6PN6QQYge4fTQunH3e1tMnvgq",
  "key26": "2g7pNnQGixCumrXaiGxFMLHjXJW4ozTzhNJYQdvzCa87tEv4T9xdeGkPNDoEVtNffJbuM2KUZLis3pvoUhH7fFPe",
  "key27": "bhTpPTf7Pi3LTX9XFwJ71nqw9ebc6AaUVgYdiwHvcY5LFdH1Yknvus3i5q2hbmCkELWSNm5uTPyZic9TFUCy8eE",
  "key28": "3AHWX5h3aX2yryCkc7vHoimwiL48mFSwMXhW4yGwohkM6qcYabG5SVEZtpbzP3jb9UFT5cKT9e55HsRo1rzKC28S",
  "key29": "2C9WQbWm34nvtTqGVGGVDN8t7rpcvXHMChYx2ArVgnUg9HWzfGvagV9WQUTfWGHgZDoNZegSFYDAKhiZtr2bF7kH",
  "key30": "5vu1AZR98Q2fc9phc7Qoyi9VqyFLz8bzCjzbFKFC1EVFPMsCvXkFW3gYjgaKBeZyWA72CHVmBTmqpsJ7USBDqSkD",
  "key31": "gjdZ8RBtAeDmvo29oehkhcWzsN85zvhjJSfQgo7vgLPwKyWL2KMx9YvtLsrrrSXEgYJaqrMEc3fj444B72myS86",
  "key32": "53RURVu3C2MjSJA77n2U5RGroEMyvH8mmBCgNUYTBjBdcZ5mMdN55XbzrkXkPRj2prL9tUeo7Xv8UtQjMmx2Amtn",
  "key33": "5FD98TguZMXyUwFHUFGVsQSSkWN6ZP2Ub75z73YcbQEDXMXTAcShbCcBMBTRQHzvhYPWzaZzKKu8fTbvaBNLFsuG",
  "key34": "5ztRKNx3Srvd1pcCAMYcySXp1WUGvK8VE1zqAHZWZCpfqtUn19wvT1aJoLjHCoR2tgT98nNk7wscDdSiipMA6NZn",
  "key35": "5hYME2LhR7GaSMyWor6bPnWGT1WchG3CgpctU1DfF1UpYD87zdEw6ELTuge7H3pyGN3KLskDqNqyP4vTS58mAPBU",
  "key36": "5fs2woFm4ZRGa3q2Ye2f76y4qXWxNYy8AywXmGHGZPPdzpXRX4gSiSN9ugZUVsgX9QNYBmdpZYVPcF6fGi5E3goU",
  "key37": "5dbBwcJ51T7rD8va5KBdReRvQCzMbycafyro6nWiVRVFxXdev5NxBLds9v6HUSWukt8tR2swQBUVDcJQKmmvmpms",
  "key38": "3GzeWrimUaXuXvKYeFS1NKMMusxw3YJVinT5eoFmwGZQVyErJvR4jnFQBdwb6VdZDMSVmm4kaQXyGvfSS2dfpx6q",
  "key39": "PyYZ8r5iXJ76veB3X8DXQWkJxUq15D8Yt5Bj29qnnYuHL2vGWP27jxcAUeRYk66AeP9xdA7XXygyVgFRSEPb4zQ",
  "key40": "MRJWzJDB7ag3MAzUeucTZEnnqFuu5zFavDN8KhDa7mucTXi6gkTZwH6z6hhGMyBK85hfnVTPc3QgxpwkMvQMuo1",
  "key41": "q7yj95Ph7JXTq6hHeCpAoHCYQJSGirSoeg3mcNxpdJpjx2Q3Uwd8gJUCXUno5Gk5XnZWXfAHB8xiJK13KeY49kv",
  "key42": "54EYsktii5F12gYQ7brzAWmBxHfgwM2PJQ2ySVVxhuCXC1TpUPCHVHZ2rsRw5d1JxTEw3g3c5HWnECebt7SyyhmF"
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

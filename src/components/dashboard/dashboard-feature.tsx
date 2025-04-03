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
    "3QHLu2Ah5iyVR3x1g6modNRC5mXnDUhWuLikMLaoPx7zgDFjX2Sqz6BR9wnwZ1VV66PnnVmmHjngRt8rAgvGsGbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sU4xL15kDGQyAc4xRA2YSSnSJ8BWAPihBoyMt1bQ1SbCKHu4i44rRDqLUHA4FFnmzKTuu7SJAcR39EdiM9dVER7",
  "key1": "qdzSkpPSfdBeK3r8rUfD1Ytnazo4THkwSASoymNpRuVJN5Q9mAPCNuaL9jyxX6GUd7P9mqXibpZLursSyo9Y4Bt",
  "key2": "43pxVWVFwQp7TyNyFdJNxgjZevWLPq2sZTr885Wt8BSskoE5ZqijMVBAtbW6C2mSGiZSn4kyZg2ZcvSCooZbDv9M",
  "key3": "2v5d4V2VDXD5W4ZdyEKahrudUwK2M6HxbRXGByqkVyQmHJpXsxS5uiabt1NJ49janQi4Baf3V4PFmHde8XSeyxNJ",
  "key4": "3rGWhBmsTKTHjidLTweyH82FkFBg17eLejWeHy17w8MMsaCtNHaYimUWwj8aarm1txWrJrNo1x9V5w91cFXinhvi",
  "key5": "62FtcKHbLzL1pUEX7DPJj1LQVCkiWS2voXCyfdVM3FR7sAMpddj2NXg8G4ziMPGghm6GHdsgu9Pg8Sr2CsEjygPm",
  "key6": "5aSijEKuZ8FZBJUkhQaYqMm1UEfepn7TPY413y41HVGWzTSrRM8iuBJdNA6nw7gy4WQoydJcf7tTDPozWJU81Pcu",
  "key7": "47iL2A4XtmPJAuWVXaN9ab7coaEN4Z1yGwNncnmBrhqKm6exxKYJAEsxk74zePDoWVU21LjQGHyFGM6ozxXYEmyR",
  "key8": "4iYRFmkhn24UcYZPgVwmvninSp5sVAKwn5Nxw4TSc6pwvaTEaEcoNVxrGp2Ee9VTfoT9VR7cTNjov3bxPxyLjsmf",
  "key9": "2DysTeUndhE4QpLGc31swRknN1ccTCRvXrwUefiiz5mn2xiZMHRQY9p4YwydPihJDsXQN3iXp9sYJXQnvEqWnGDE",
  "key10": "3o5pXMD2RzkUK89QX6D7gq8YjA6s5psfHDoZdyPBDTdadh2UZSZCTDvPbvAvvrhv5nsUoGbhtEnU8RiVqmy9YWzv",
  "key11": "65rypfbnTsGPCSwKoKVCaeFNRVwZWB51yhTsn41eEhDqGmKnWF7xdGjBUAWXXu5jeDzrmY3T3MMAxeREYDCtsDZY",
  "key12": "nqLNQCYyUQ9TWNdqJkdPbQoEhGjV5BYr58Tw8Pkr9cCsREQFn58dDZLBugcqFkuLXhnCYpbBtsCgCrktrVvMGM1",
  "key13": "TPK3ydoAaaJ7YkaMRh1QMjcH3ENKuEyDe6E4zcM8wXd64NAiMWqtW89EDqVtfFRzt9pmd4Nz8G4Q3b4qQPCUHCx",
  "key14": "83udbfs4Bhnz1zc1QosEbNyBo6Q72w9jt6rLivFMwrurmsXwsmSECmWFLQv1Q96yQueNJ7jU5wrx3uqtZeT8Unw",
  "key15": "3RNdWzQy4chqGx9CRNSymCSZGXdKZxhVqbjaJUh6UarA3uznEE1KGArwafxAsTYFUwMrGAPqKzH91Qn8mTRKcbh6",
  "key16": "3jFNy6YufpN5jdyEP7v3kFMfkoLyBawLGJuSeuELdRVfKe9GRPW33j6GceQA8Te41CYFPJXHr3gTxv4JcPpdExmo",
  "key17": "5jTMkhysX6A5RgVWYbsM5mDEZ6Vd4tPKcE2erBfJ5LnD1aXiJYy8tmGJpt5cWthqZVGdMMCckM8kr3aE5w5YUKwo",
  "key18": "dMPVGVD8xVmsEZoe33EdUvhpNQ42PN3YWR6xebCVskrLaykTB4wYQxdsBeNW3WdKdei7EgKY7Q4anqYb53jg1Wa",
  "key19": "4JZ5QkBwmCHXdWxzq51xHjN6wvvsmNbdcmwEqd2F5mspLCFZ3WuY3oTZG28RzqhRs2qpm4fy2ajdYXNpZhb3hrDN",
  "key20": "a8xFQ4WnWzu8sb3V6g7dHW2ia1Tx7MD59MJCim5FbB6GLSVNLZF2m7RhL1DpXTeDP29hg1cjAvDpHUpDP2upjS4",
  "key21": "36QR4Dtr2d2qWGLCJg4JUahbLfVTrY8BbtzLJzqvSteBUhRUXM7uButQ3oxNwHwdmowbb51YRXVjyx9qbSdguFEo",
  "key22": "4eTCy5KQpeuyJT4Zcjy3BTofBax9QeKnH3keRzaXRk8uzZGCMMM44DV5wdtdYiUcJo3Bh1vCQZkF6MVxmpqyBV7T",
  "key23": "5Yf37rk9f6wAT9sJa4QQernawZQTMjWE8vM8pcynbU8g1ybudCV8eNTMRe1oMjKWgXjDjnxT3NxnTiQwgYU1DVL9",
  "key24": "334AsFMj2KgfMJPi3bdrZ82wGR3ceEUkgTWPiiBw4zZoMeUqtgN39JzfsQC4zjxQp3zs4iSRt7ZJAjVpAvXWkX9q",
  "key25": "38F84rkRCHa39mng5dqrEr9uGHwvFFD7WJwWoSBXcoqADzZgBCZXiZpcDJKK4dd5M48XRRVwR2AokrMU8RuE59Fe",
  "key26": "3R3FE55fjH8uokMYFiiZwP6FdHqwRGQCo4mCgD4m44XaicGtZzZYx5wYFUNmp6yJPV1Gs9uwdoKLHZJPHpzTfoA8",
  "key27": "QUrzfzpwK5KmE7oyamutrY7K5CYs5yhBpCTFGJoPxg7xtDu8mwvptxGekxoqtbAHJThGVQuBDn1idnk6X2JcKvM",
  "key28": "QubKD7SdGALgdPVh3c8E8tWjN3T4pQdmg2dLG1WfWUN3DA2xRLCMscxqFF5VynVtQ34GLWxV1QhEkBrsVeLiMYN",
  "key29": "ohHAqqLpjHzxqLwhn7LRMBHtq85718bVWH2MWN3bK7cUhBnbq2xvCX5WP8mq3EBhx19mP5FrF6v8oAFZe85oeiv",
  "key30": "52v5wi199ZHpTkYQBU8CsGaMn4G1Veh7RUx1bYyGbZjUsjv8kvuwJtM75sXzQcnJnFbqnwAswqrHeKXxBQX4jqbn",
  "key31": "58xi2s1RbB62JZcy1rUqHgX8p3E8opqmfh3jf1SkDkYnWeNtNFbwFqZVnHnzn9tLxV1wesoNS5UyC2HGDGSkCdd1",
  "key32": "er9sEfyomffbQrjRBA8NKNe5LN2PePzajb9caAi4CCezgPRxJxxxVrYV91uWnW7S3wcY9yxa1R3oe1v4byEuXv7",
  "key33": "5CinpJ3yVS9VUo11tHJwPUnEuUH15ZADxg6G46YEVE8UnUvUSE3to2gKcmqeka4t7Kq34jKa25pGccFwPmx34eFA",
  "key34": "29auXahEcdoLyZPCgjJyte6EFK4omQ7rfjecFbTzsZFnStLf9XJcdybktkyfxxa6hzT4YEeHAY4KqAS8NhVdirv8",
  "key35": "5zKgwUTDSrT8jSB8bAtybrABvqGiWdMzFePNZCEPnptq14TEn3X6HjpZkWrdUo2iH7ogXagTxfJZuFuiwh9QRM2n",
  "key36": "2mmhDeNEDYo6fuzcTtc6k73MCx5YzHuj6T2Sb3z6xNoEqoR99UHWgT5vGxZyFjbueDavRYU1cCCZAHrFbWeufpY4",
  "key37": "Ng79dhjC1tT2KAwm36v1EXvY9fCSjUgoqXJCWsLeCRuDZtRD6RympT2VtyuuhzByaL5CHtCuA3gr1YcUA91SyZm",
  "key38": "GZZ7jhuKfdBiyDUnpJXdh2AtaodxztxotP5VhHRXJL6CMR9zJDYKNUG5ipGHh6dZo82tu7bPGgytVxR2p93eZin",
  "key39": "3aCATEcWujzXS5VCL1HWhmQFAPsi9woo6H55XUpT3jJL5bxsQRKVp65CP1nbaKdkk63ZiY6F9W4CppsGjsZdYxvQ",
  "key40": "3K9cR1DJudbUVHeBDTZhUAk39B2Q1fcs2yKR7de88keDQKsYrxX9LZpmbeQosub79xFAkED8Z8XqxPNqfby5b5ED",
  "key41": "3Vm8tuo6LgQa2efhkGmtSwVp2DMpDsjoi46cNbMpTkaXBnW6iXdSFmqDFmkigpCwNNP2ySbUBrKibZ2pBxBi4vbc",
  "key42": "4M89eXJxGzPSkY5UJ1XvAdnRXb8MxKibfYzJAUSoDQBYBMqJy6S4NM7NLJxAMPqyME9JpkZ2YEXT588Zq4ZY4nBS",
  "key43": "UhyJeeYex4M9384SvM49qRWAJnoR4Su8tYHwZ55HF9t7C9WdhG8oKsdUFVLbF59d28ibCut9Df4CDeRnq6TxxAK",
  "key44": "4GdHpc5Wbc326rXeRLAffbBmeA7HB3uZot8h9GyxahU5kFAAj7wX6vUZkUbJAWtYjtC7ARAhYRnZErhzS24WvC92",
  "key45": "5aSsbcA5qkoVngF1oBFYVXB71uz5Y5Xf78rxpJm3tQGjhE5tT7FJMuqVcpEokUjLp3BqK6P8XgvpTRvAoCmkyHRB"
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

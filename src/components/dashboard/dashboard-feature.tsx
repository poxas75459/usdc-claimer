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
    "4T41PxrDGndX9yFW6Fh85FWvNm9KVricnnW5abx8a27pzaVkkN4poV5A3k3Sngyxw3KTRFeCc8ve9rvaUMKrRSDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHZUTnVT1F7pid7pqrzvZEJra8RAcjf7GL6UrMdJY8NSXHoutthEv3s477M1fTs2S9LdeyCxEi7HeN6FScy6JAg",
  "key1": "3rofbVVyw1Esa1Gm6GCd7iUWsFhSsCB8E8Lc5ZqDaTb8B4kR4eTiT2Vja3yBjiHrXntMPoYBkCEK9JkyUSni1qUq",
  "key2": "2yMbXCZtt9cQe3XhxvpGMzKBeHJaPEP5G5HSQrpmGFrjfHktz4MHtCt3pb7vQmuL3eJPKAQi7aueizSLVFCXeJtE",
  "key3": "5REsSFYby3Xh2sPvWxeGHmvWc9UgaowuDVgP4JDMigPLgHgb8wuXi8qBNTQLRerLjcLD5P41YdQdVoTyVnbNgSTc",
  "key4": "3ydz8wTkneKg23xmR6jnCNsUW87Ry3Mwxa8BZSHrmHtVKsDp1umR7QRDCFU2nE12X4z8G2d1BugQSUpoQrzpKUxS",
  "key5": "5ixMvzgBDA4iTPmYoqSzNjn6z9tXeR9r8AHWWeZEquCqQ1U3eDEk7WqWuvRYuvzT6FaXMvQJhwiMFYL1R9gC7FiD",
  "key6": "45nGAFpdoRjGpnScyeanqZpovQnkrYSwuSiKWjncqTUQBVtNFCg18tuUHmY6aaAvrSRC4mTyPJGQz8fmJQhdoyjn",
  "key7": "ofY9CcFBBSmRic718oJS1i2HBzRTZ35zhVUZBXDjBZiHzMiVGgzLRSS7163iuWLjBvGf5ckC13b28FKv7p7anwA",
  "key8": "3cKYN6R3g1p2WmeZyxGjY2wuU7oDp1cqsVU28w2j1LztNaxio76S73vFnT1t3uEcHZBLaHswT7qvyHFSsyw6CzDS",
  "key9": "5uoKeBwtCrbkqNtaAMvVa6YbUB6xv4serUZNyMnkyqmujhTEKLjraRk6UjZACxfe2pGbcS1iNfP2mv6cje6ZSnii",
  "key10": "5zwKMT1C2tnRSLTmwJ78KLQXXvXdNzRsiwnadxW2Xd6KCHv7mvUcTeyuGVMkScn8jxAVk6GB6GNiJ91UCWJrhkFG",
  "key11": "2MvPru8RnGTuf1F4TYLmvBdC2Yr67L1K1aeUfcTk5bLrYUpCHLHqTrUX1YkimEaSVjSG1e6LF6yaoSWombFnwCBA",
  "key12": "56WcX15CR1RCk9MSuF8EGGi4ckEDZ2JRog8FTU48KEWxB3dCqPtRmyFhEvSF28ccquecNxyFuZq5bqqQYCMNv21L",
  "key13": "583kXdysKeZirApLSgT3N6dEmPcQSSodVe7oq6P6bPx43U3m2FprbBjAphKbpEQxXU18PWS6KtJWUCP4ARDfKfJ6",
  "key14": "4tCaqz55WW1tunWjKuLr66FD873uEjxTcNJ5p1j9FSGZdHhcH3pw9PSwGSMpwGWYc6F7ZjzbhBcsC4orMEaM4pUo",
  "key15": "4QfKDHF1k8DiHxb8bE4VCFWDxJppvep5pb6txSmkr3LTUc1nB8WU28hPe3THgFtdhvhetSVkxj25s7xLhhU7DmW3",
  "key16": "3Gio8uPSWbRgVqQ4CeQTHGf7cjscFpZ8fQNQWCdVaXJZPe8gWKrf3PSUDGTC6zRHkqgERyqC9PyiQ2VEC4vXFx1e",
  "key17": "4tbj5o8bEC1gb2Yf3Zm2ppPM5oEsZYCUGHCG2jTnjqGUNrc4E73hLVc8U8zKPb46rnurcue1m5NwFjFEsFx3QHh",
  "key18": "3Lrj6nEGAcYA7fXJsWXX4UH1GrKW3NGjQB3jp5pRxRxDoHcmYRCBKDd4VQ4fw75djKtEYCr4u54UAmVFVBRtyd8C",
  "key19": "6Wamy2Qh6NvbgZ2hg2YqLRoad7GWGxv9DKdJ4vDf55zkQi1yCw5dD7oyG3j9YSrcVDnEUbR3t3Qyfh8u3G9sGgs",
  "key20": "24V9ALJ9WBmSPYSbWQzKcwfUaeQYDAASMSa71pLwqJQyayJDW3wveubhtYST7TiAf1ukakq1ieSFsjY6T87pFQhx",
  "key21": "36QPHHtAhc3q3QoLK5azoemktQa4X4dKxX3fpv2JrfvZs6GxbehjnKbYL7oKSDXAcStfa61hdnFAaJQXehm2kH2y",
  "key22": "hN9AKeWZJxktpgXyeNrrX7ozvdVSGzcRtB6BXupD1doezCPFNHLr67BeY93KUz5pfNg5rvqLaWwEhvAfo1YPQH3",
  "key23": "2BDQ39XPeSPoCMezvtUiBqmBATmP7xrivzE2bXqvs9jMW7Bssoc9Je7gTvQ7tkQ2nNSZos9rZ2h7y7diqLnzF842",
  "key24": "2cadqy45zoZiM4tMw86qD1vsPMCnhR47wRzuk3DQD44WrKWpbvsDrA2aGyKfXLixc9ncREdpPWphJeMQjw1DjYmu",
  "key25": "3kXDAaDmBuxkmAa8GyzU6SFMWRKBbRVnvnik9RsEavdvDAc7fro1WPUFpXudBsHg7SEkWeWpqcEgko2PURFUoVBm",
  "key26": "5qdXFtRnuvNbqGghhYHv6w5vH1zPRQsbuzUE7APf872S66cfoV2WCRN6e6q9UG75TZQB41mNEJFjghrE9m5inFif",
  "key27": "4ECJDT9g6GqdMBtNK3yeFj5SxMgALnPjrAqE2vNrQgNUgftRSUSJmm75qSBbZb5TcExvFfzVd9uaeTTcWX6JSRXA",
  "key28": "3ufgoFeNEwbqfxw3wQekFL43U2oadsM9jVGDecY8M6DWyyBrkqyLikQLMDHep2qYPMut4fFGTLS23qwSKzfrueZ",
  "key29": "3TgUEYsboFyDtg5oxZV1Ywcw6fXEPocBafoKYgj2szRv2Ck9VAtr9WuhKBuuBNuoXaukU88EUnHNvVGdhRJj8Jkd",
  "key30": "3UAEukQj8UWgkRVHwG3YpsHBGWyDyn1Lbo8MNV6sKkKnPZh1CK4VECgfh7Qcufoo33hmb8iNKhwyd1URzZ2xdkP4",
  "key31": "4EQXQdhJc6dRkqcMTe1w9WNphCymADghKzH8jHKQ4Zcr7qkTHf2NSKZQ3T7QgTSf7EmW3JAD1ohq9jeHBDY6fQiW",
  "key32": "2bHJDrKtgsCJkoybhWBuPQs8fWMuEsmxNcEqdbCwtDjp1P6cWDkrCB3L8JTX8RbkBLHm4ircouCgVG2L32gAXTAa",
  "key33": "4TqPpR45nRfwdP5SdaMhJ1yvVhXBoRnVDXGDsLzDoXAJmLEPmN6zdYXU87pJxq1g7gVZuz9uY8kojhhh8RwRTW3r",
  "key34": "5QnaPJGYMWZhCEthNnHEwuQ3aHmEqfscbBAxmnLoAcKghTmJJXZjdEAeHkyAjRi5WAexZF8jCmAFj5dzkMvsTXzr",
  "key35": "4dprwqq2FVLwonbJ7uRLHPjWgQFArRm24jXwFaTEn8dCWqNWACqVc5EqKuDkYrmffuBdqMJpD8RTYzdi7BEZ2W7S",
  "key36": "55Xb6RiuuDYmBvhsizUJ87zFxwR7QpzHjQa6aF2hQQj7JBvZyHkSLgLTMcgTSaCP7kJhGsC7YCzoPZ2sW8j9p9FX",
  "key37": "23Lcxz9ry5M3bV7nqueJk6VRzmwA32k9m9Vt3Mqkht6f8JTpqGAhRPWXYfuaDspe84JHRk9Kru6bM5z3NJ5FX9Rc",
  "key38": "24fFyYVRH7nySapMFdsreDG9VqYr9WxbzJG9QF4fPxPiMAa6GmwrR4ww9tV2khq4u3nUhXVxUtwtuLMH6n82hbrr",
  "key39": "4fgxSRX8ugxKyATRtTfYRC1cYPjasB5YiPAey1GHM6wCGpgxuDq6yGffYdES8RtcNz6Pk5tFGt6Xwd3ooKWNs2eS",
  "key40": "3VH33URM6Fe26q9VaBE8pj2P8FyP3tUTRwhXuYaWhrJmvrsX7uJhQ2r1aeh7FshoopuPV5dsnifk49VztQH3KK9C"
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

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
    "43hnnsea14tR88EXHB8GnRYdBLuVShqK9iDyEe5XxTABaNYLEBLA8gRtnMpZT2Cap2aaYCkYEarNp7KhQpgfZmbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33P9i6d6qJBSMSYyq5EmFHm5o43TeqHwNmAju88CwwaVgVyYUC6vd4LRaiHhhSev163s1BdMPieqM6L8dJQLThpU",
  "key1": "5o8ugzvWF2fdpZqvvXR9Rxj2pKSGAVEZDmai4ehsZ6TrivuVsHt8TkQNDPvy69ybUPzuGBepzV42AwbZdT8YPVPh",
  "key2": "3zftRGaziZA5tHyqVvaANXkwxPZ8L9pPnXPtq5v73Xs4bZneNhX7Gw6PbjyDBsK2vFoPtsR53udYnzGRb5BC6cYK",
  "key3": "xeuRoD6GCxQgHRi6xe89fkqpea9VBYS4LWvJ6SgCs6nnPBcWmBixNpZ8bwNvVTS228wSQCPiLbLGmP4n8wtxRmn",
  "key4": "2VhXuwXdckv39y9oHM5L9kYV9EhKR3TSQ5U4KTLx7iNW3WAHVFj6i7LXXAMAM7gzU4iHz3Uji5JVn1AkR2QBKiRa",
  "key5": "2b1c4wLeniM5AV1NvbKbJqRUX6CApaZStfcPG8NcFDQxpGzAneRABczPsRzNyASCfTqK3DuwGtDK6sURhmeEWsjL",
  "key6": "2wGe1F6UVnvg9LPMbRsQNErBDrxutBm6n7Kb3bma1eEhNUK62tvpHPGdM9iSmgRHJE9WSSxofSs4HYGjajXg3CaT",
  "key7": "433ysANuZjPp6NjEKQtGJrNvYugjNSNSMUy2dG9Wis85igBbiumQLfn4ADdDGVR6JXYiDRNzvGZS3SzGJxupHSUk",
  "key8": "aEFEUoYcijzjRSKYPZojvjVCjoren4gvoR7BESMFNfUDxJqDvcmYe7HazeVYrQYGKAjq1t7hUxWx5u5pYBWvZLj",
  "key9": "4f82QYRF67mTtPSFFMngKTFqKhD9S56cKGR6Gzah6qUn6Moe4F1gkGCb9Dn1yeV4PyDuywWMzgrWr2qVxpknEKfp",
  "key10": "2tkWJeytw2cMYBajXvdqchuxhRQNfZNybZEpTM7mGBemrZWKapprTEbHSFyYs1phCzkF6jtRekLjXnRfPEn8UWvD",
  "key11": "29JykH5YzTd5HeTxfHUH9JYYLX3VqquAamn1wet78wceFe18jhsu2cQqnme775DUNKFAn6PqfqJxbtrwrDsPUVv4",
  "key12": "3jpYuJwgZuqzHRYHnhm5TCf4b7znWM7rxn7oXhzANyZfnii1yREdbic2usXzBLexX4BZ5WYxoJEXBMBWwL2KUGzU",
  "key13": "5g1tExULkXxGdTNQFptj2Jqo1jG46keYsJdFjrZbr2j82pVDp6kAZQ2VDyECxKg7ZF1F1Wt9B4LqHf6PtqEse81Q",
  "key14": "2Y6n1UWbbUrWKFEz8Edd7g1tHMbzNTCTD1xzU2yeHhTuPG47kRKJ7Tn9KhTYpPmGoyK6cSh1FCVpTzXHz9fiofdv",
  "key15": "21NzST7MyU32S5SEjPZZTTqcWhuhF1KzZAVsczuHpLCJpLkDH4wQF1PTeZmwDUsCRu1Sd7HBdhp2ewmg3v4a3uyu",
  "key16": "4szym4uvL9gX6HJXWGNFf3933emLwpTGDYjfV5f7yroidyR2urt4BYYqouZkFk3C8nThoVZq2cpAvzRhoRu6L5h6",
  "key17": "3RmG3zZewUfkYYDwak1LRuwZfzoJcYWyXQGmn1x7tguA1WRCHu4eekZvfJFXHjCK7AJ4tjpft1N4x3fmFxEGaevT",
  "key18": "21JzW5CCYFkeaGyLzKpUtZLiJeZuuUnRhCmmMEqgNGfwwBUz1PgoQRAajG9Lo2YdYxQ5EkHw2NSZhYB1g7KoJvLD",
  "key19": "DBhCWhpGdY284pY3ZLo1ejCP2nxGjYHk37eJjQHxw772Wy7ny8RLCtmteuXj1wAp5odarcXvLoXV7aSLmK12xLw",
  "key20": "5tXnNDUikkmMrVkbsyA3jJUwwq1ZUxwVkziMSysYncnVWdBpbaTMPGgaJxyStT579bmFprfnjKWt9BCJ1dPAspPS",
  "key21": "5XubAa7SRqGn1rsxCYnJu7mCPth7WHSQBMhqVXwXHDetZXwPzPAShjEtFvci4kr3VufdewhgxYLaGXv5DKrYFazv",
  "key22": "24FQbKA7tVHQJF5MekWggi4azsrk3ic1ghDbCAJKLTGJihgAxWY3oJtGyiSYGpV9fNUbdjrxDQ3mbbVc4bhLawKa",
  "key23": "v5oj8gSKVrSsibQdoq3xJn59kyFGcLrQBagPu6JD5GH6BkrjEun97BDx986BL86oCp8uVTwb6pm4Pz3wfKSfBZY",
  "key24": "4ofn4rj8c1wJRQVQf4s8GLTqjRsUdqS1o4WPbPY656aTNxgPqHho7bPw5BHmhLM1KwLHcTogbLvTCDB5RXgW1MbY",
  "key25": "z4SimriVquWWCB27JhdRpKYnbcQqkX85pyA5gapk2tdnWb3iuGeQFz5vLpcX2Ftp3U146wKxFnCuvDWAXYC6kew",
  "key26": "3jsUoWFpNAiYXMdKM1nxtA76qgG7UQVyPGVKCmzUnE5mNoNLmTunFM1dJ1w82uEHaiNhUjsKjSurJX8ocvNSrWJG",
  "key27": "2QR5ygamN6qrjXrZEeb5KHQNmjXgT2oekYUdqcCwBXV3SJoWWp8cjmLX9AB7oQv14xcEnawWgmaSrZXKN9GunBoe",
  "key28": "5FC7GJXvc6y1h4HdrGikE4eWFMN42mnWJjXNZiYVvi6HHKPLwrduXFC7CfTGo39nGTckiqhFJpLoeyAG7twu3AWH",
  "key29": "5xEnP6XEP3YFa5KxxEhtLgJeYis9V5gLD6fxJFmJzLy22okL1GgvDawcUsgytDbG2xrSC1nzyWucJTadcaiqXaAJ",
  "key30": "gV5v1C6PMxZyG6R4Q7sJQWqCqVUkdmtFqAXNbe7Msm1AcE6P77ihtLB5wRpbsoyHXDhqYSPxZM9KuuwEeNamc7S",
  "key31": "GV6ajKYPLwARKBT9aVUmYNUXQxjafkXKwJLVNtn2ooQVXG8PAtTk739xoJbutrT9spMVS41PQaropZZY3dpQnYF",
  "key32": "HqLyzXAzK3LTEz9FAWHXDAqJNYTZ1QdDf712MvCxnpa8aJCj91JumxuB8THNXGtY993SkgSPrazLH6wHqxqDBmg",
  "key33": "5i1yoZduQJXGTZ492YcQ7FmxSKFRHtjs68hU7Jwy4kTYUJs9hDkvhPDHFsbEVUkesbMCrPJ5BCWkpiNTKcHpX3ih",
  "key34": "29HWfgEjJmCbhRj8mdDRov7jKyVCEHEjuzxsyBz9Zrhz5tmJwtKWexJgcNqJFGYYXdzjWyE8WwtMXXxVWufk2QHV",
  "key35": "3sfYAmbjtCUfnms197zQU7b21z23kceLp6qxax2QJ8ieCNghdxD1rH1FLeGHRu6v2YagPYPzWc768t62tDYB8D7a",
  "key36": "b6nX9Kkdn9dMUW1HFxcwK2bFjdZ1pZMXxEQZJ9cgMskLCjCYgsf4nzH78yCHCcyYYHozMqyN9ozFSi6Mg3oR4PE",
  "key37": "2WVFkgsdLLxZ9aeExQkkfc9vkqhwjUBRmhb9Ap66QkZkb1kq6ihBCBsWeftJkKKu9TwAN4LG1JuXyRaj1cr57M3X",
  "key38": "3kdxdWfd3tehZtw2nHcHxR3VgY7sRBoWbUYLTK9sLBmCmcQa4FHARJLiNcLVzufwkFLKygQthszCFQ8Hcce5ipVv",
  "key39": "3cPNYVDUkmMNZhehSqxyUYrmF3oQL2zEVTrMbrAjRYqkNeGTdtu1QCrUoRwa9SvN6raxTcHoqHLYLaC7THnAvVKS",
  "key40": "5ARBJe5soXaxbF94FyoSFGpEvNsrvxeG48gKokzcvLyHaXycsB41xszQNRSHhEQ9uV3FqVEsKLfN1zZfWm8s85To",
  "key41": "3sJTNavqd8rtjq67jtwnbVMHPxKKExQg2gp7efFeW1P9SJTBBPz8Xh2VJ8BJw6TEurydcAkfPgbXgyPuDyya7DB2",
  "key42": "5upJcthRZNW8bweEywoLgeqNQP2fy7BGdsvCndfAiuFyCAqxqTs3TiuAtFN5LxS8pJXBGF6LVRpETD3zutVGN7iR",
  "key43": "42QCQRL45zKhR9VqywbcNqcJazJGZWQbKrY7bR2WEvEFyB3TD1gKsNj5XuuLhUhLeRCgKq7ACvrgp5dABqqzPMrR",
  "key44": "4gBUpjZovmLnW1etm1mqDnwBc1CxaPndGPJMqQErbVCwPTe8f9wb2tpNFKxKPBeuYTL9moRuZiBAJ3hi8N3nUAof",
  "key45": "w2FtCJauB3oLQgVfJUxXVhzMG23aAaGspPouFbnzqyv3MMpeZFSALdXynqcx3iqJffNgGLNRoBqBcftr45SeWDd",
  "key46": "3LhcmpJRy4uhTUZYd2yfTU9HdSez1DZJ62yQWvugz16AioBHBMii98KXManoPhZ9T9QnyKd7H97FbX5H7NzXXYeF",
  "key47": "3xmnr35dXhL8Y72p5pRkkfVMr1g96PdD8BctxFFKUCZq3VYXAyY1zAL1u6WGgwVJK7NwztnRqtNepJx2KdTtxeMi",
  "key48": "3TqPbVncCMFjLnzQVBn6iZQHPM7JKSNGyPWKeCogeG2xWaUpEzdboQEpWgqqb9wGyowr4CqMq26ZGYGmTKMk1B97",
  "key49": "3HhFr8rKZMqJrYHsH89BPLXXPPhFx6iufQCtWsynE2Wa3BQuxSQefFjf2jq3ctP27WUmRPeofnMjZe1MtEm6xUZC"
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

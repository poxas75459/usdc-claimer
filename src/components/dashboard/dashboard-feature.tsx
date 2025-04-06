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
    "6XjJtR3qzfKutHyVgnVfL3PeKQ6c8kPmBuUVNkX28BY16abgndH36oWCwaCnw4dSJN8BT9rFz4FWnQtmHgyaxPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44CnWwuf1z3KJUzjyH9N2PFLmZh8bkgG66fBMNs2Cgw1hxcheiL8XUUC4LcfEnxCexXEXnkwxL9t1QHhgzCfH1o8",
  "key1": "2163t2J5dbXUMGMZsrNbxgPixET8S5o5SLH34wm3EA1hsAeXGxMufcoxD5MGAVxv1HjYDpviLiXwTmh8q2uA4k4z",
  "key2": "2mqJqvqvsHM1FDAuQci3P17GYT2hJbJzyxdU17ex8BRA2s2Lc7eeayxvcTYHRb6Qp6VwndGc2PkrWmHHoCvqzkA6",
  "key3": "23rWxxhagh2yKVUTzPPmbhCm1Vqtrs9cyruQ6hGYNEvK7jQB9rHt7oB5fKWEZuj4b4vyRrRpAYxsgZokrDCnnb17",
  "key4": "2AsWGTPuYNEqLoHiLGCdjbwXd7vQh4g6soQEpZkhvfHPftmXTxXo5gYqQSZ12Dz2oHYTa9fw2hV74j8UWT5ZRcsC",
  "key5": "EigVWAMrgNnsu6pHFwazYQYU7LXXqLLqzTrBMbUgHS1M5yufbTBM79vD7n4VQjmrzaWzk6v9wrcWpwND63FbfLA",
  "key6": "4WfBNWRWtzZgX6jzDETGE8PjPYBTx3fwBLkZp5v4rJisgjWWxpzp8QGQAgNmh2XEbL8dy3JgFqZrvhCDpVf7anTX",
  "key7": "H7LBJrNaV5dJwhYi2rh2ZjF7pu4moUUo7NyvPZxKRj9enqEXTVoevtRRUh5oMHhCkRLXU4H6ZG1ss3nf92GVr6N",
  "key8": "4ewuXnBtz4Hou2x6Dt69dTyfPhLQjobq86qxT6shoc1RrcfP8QxCBBNoQD7HmdzWSmJuu5btmYP7qCfrWeRMNUmh",
  "key9": "2YXcL6tZnN7DggRqxVSn1rwGaXntczDrtRKbKLpVkARNqChiA27xnNj66PZr1wEaTr7SF99Cc5ssuqsBBzFijLFP",
  "key10": "5nu1paXppGgYK1v2w5hq93VrmajwicNqbeuDxrfu3r7XTXtFFvzw6yLzeFVHAvMZHgyKMNY6UktFLxtTtBYw297R",
  "key11": "LpiJSRDvzHEcNAZg7K6StgV2TfLyrgHquQw4ospL9m4ndJtoPqDW6xbCrJ6S4pujZDxw7iKsijtS42BRH2ohqvM",
  "key12": "FXcvtjANsJCwX4bznHawdBj1oqjYm3VvENLubVnP2JVVw2NTcWgg39VwaoC7YwmsSzaf3Y1ygaPeHpBM75WY3cB",
  "key13": "3EJpQyyG4opxwf3bPyXe52V3FaqQT8mvEr9CoFqNsujm9yhWCpjVxwWjsvMNtgRtV7UPyFPo6WhCc5cAZv7mCd6B",
  "key14": "4BYDkNLQcNzV8Hf5vUFixU988cpphMdQi82PbK7joA4h4UEZ1W1vpPSeHDHs4Et1gRXVFt5zdph92uFQhdBrFLNh",
  "key15": "5Fij723Cn2FNDLTcWTVPBot1BWVSKczqy4AYu7EospaQmwbmTUqEWXw4dYNoiiC8j1LtYRTLcU3cCbZLwjrxhJjX",
  "key16": "44tphHv3DM79DqcBSVosaaqwLrSCwhTdGsyVyDd591mYpbViGw1wa76kjE8DqJ6Lu2Nxz4KDQWva1wvJaUes9Xfj",
  "key17": "57vUHC5uTf2EEACA4p47N7AXhkFkDv2jjn7bH192qSjXvmdMxVCWQSaUF6FARxrpRmFPkFPAdpJhn2HAyfnimoLm",
  "key18": "4d8jf3vyGVWsHEaEUkgU11456nZyNf37359iVvGGBp5MeqbbkaEsYJNLh9Sm1mP9CKsRxG5zvidDk2YJm9hqxsTi",
  "key19": "vNZU5az7pWKxn2M71pCNqwPp9Yj7CHzHLgXYBpArJuBeLVryZ7c8K2X971GXC5s9G4wQ9ozeBHKT3m9En8BWNG8",
  "key20": "2Seop7PjuFBqug128L9Bjt66Sd6bYAt1CuJcbTqNwAkcUTBjHKf2LGhPYyjmELQ9PwTmDbCpEaRdd31ixWEbAiDs",
  "key21": "4pH3D8p7UEQ6rdLZrENzqDcxPtugwKmWbMhzHoRc9Df4W87EiNfpjQeLcag3VcP4cef3CzzEPW7Ri579WS67SKMk",
  "key22": "2vGv2SyqHEN7qbHq5Wc86pCe97LRJ4FAwpSb8gy8QcJ4SzGHJYPMh7hvtLA24P61XD3incFmLkZvWMgyJ6EpaQGF",
  "key23": "5VhDmhahT1VLRC1pAN9NvZhnHuCdqbARZLggYgm2AHDX8bsTuDuVrjuD7ft5D5t2qQRyQ3uv281sBriUQHtWYwkW",
  "key24": "34qs1wvZdWtSnqFAcMjHX3xJhkJTF1WehKBnaQ5gGSrctFyHzpTRE8ioGf9CQdR8m3pgh73r9qj6VHrhJ4nTFHHX",
  "key25": "2csVp7bY9RW79WFhebt99R5GJxBwvrmJasCpugDdENHtcd6MrjTsA9VgK3fXLkjQcx6ChAmQrADd1i19Kj2Hh9UB",
  "key26": "2DSncL5cRv9pav98kMMKnscofSsT8h3fyXzMuB7VX6GoSTZsAvsZ3bA7mTinPynJrQi7883kAaYJFeYdWSwFqM1W",
  "key27": "2yTckaqy8iudrbNjchbmgi4pEv5EprwtbiLSYosXSVZgVbzskBnnNsVb53xYSGNtwPkftaW31hmGV9YBNWVX6jug",
  "key28": "13zccWQwpnp2jHktWqKGNmCUNKnUZuyCaig1S5Z2RN7rhEVNbKdUHVE727LL57BwxUq6WTuNPUS2VPR7MdhMmPQ",
  "key29": "4xr25n2DQdS7SY92NvMDKaeG7ExmEsoM97tzoDxHiZfa4HNxKkB5FJ46pGtCi7YKfcwNqoR4xTnnzq66N9aBVLDt",
  "key30": "2ja2QN19qVyquiP79VVzKwZ9FNTLpqqHKi9yXqVKLtNqS9T9cnWaieySA2sk971MzeYfpxm2b3ZKLk5VzoBeRBfh",
  "key31": "fdPpnbBPzswrzKBcFZShAfRRELnCfaupZZDHBJuJtF9uVXw94qTqZxAxURBHJmKQMeKc8Lptu4N3kci5tUmfAD9",
  "key32": "RZPyR26VEsvGm83dwocCSzsVvrhkGuaX7RrZFa2nBLqdAa4R86uZJoQDBbrnBV3qug9AmEBGrYKWKsZPapDFbx8",
  "key33": "djsm61pvieH2KLbSnh8j62wD5DquEaa57ubH5B2EXPkc9MQMMvXhgiYH5ayQetU15odrmoHtC6YKKJB5vkvpbTD",
  "key34": "2waQ45C5rkMWwrnDBsVou81rUYf1AuRh6n5vF95AaiER5PdkL8zjonA1s5jY3LXTavvwo7LykaKtdLpxeaom3zFr",
  "key35": "5boSVufcFkakJ8wu5fQ9Y9b1romiSNZkCMmDM7G2DVEZYSwHDw4rHMiq5NmtoAq31QmyUYJRsu8MySWuPkJhDkfG",
  "key36": "4ERG4d5662BYNQkTNdQNL8r8qGKsXRW917PYREv4ZpYNTWQEsjVUCEYAYha3qeuBLeCpXWQvpsxtSL5nnvtmqcZY",
  "key37": "4vXVQRQ8mEx8wm8kW2T5thuJMj11v8K1eHaw1TeYCuidogEePiCA93YXQE4sBLxnLmqVB5G1awZoaBDN4jxDeGp6",
  "key38": "3ztSgrrcHuzFJhU2ZJShjaLBMHLWyzvzxEqioru2ctR5Qpmbhp9gFHv4ZmZjfELqjL9p6QbUGn9r1FD7K1bdkibQ"
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

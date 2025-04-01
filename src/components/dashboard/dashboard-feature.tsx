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
    "2WoS3LBZ3XcumwbNSD5XSkU2hVvqLiriwwtuMyt5CHkdsxJxfUsaeju3CwR6Mya43ikyHmPxPXM4qwrmU5tfmyV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7PfNKqqAaBy4UAX9ePV1uTrao3YzF55HBeNeA9DtyhMo5BfMxbSr4KJeacY2M6m5o93vfm8BTTYi6EY9Ys4Xsa",
  "key1": "QULzMxZbdtM3S6hDpyjVzHKtD95F1PRmpQnpHzPUdSp5wHxdTzPWv7EPzUXw8Gufa3JEWLWfpUnRJH44pDQMbUC",
  "key2": "4PZCCvapidKBMePHM8NR8qi9svRnSYkTPW17YbHvpzC9H2UuiSqMTBnhhxU51nhgTDKf4iARPLHKptA6zuVH5To1",
  "key3": "3ZwHEwxF46w2TqJE6GQE6jhZ4zW5uBBbBZ6LhuVudnbGH4QzCmjSfQ7UNNvyyBDUSBzmbozw2cCJJMR54Ln2m2nL",
  "key4": "FmRUnuV25JWMqya3dKsC44bb1VevzNstfDEMGCuGghf5xqXzm92qAD5nDidbxTKQxVjxMQWHGmhentbfE7qfvWP",
  "key5": "3W9ypNNp25RtyTBtwtx7LWND2DH4KEnZvMNiRb1qmRdUPTBhwqFCeuBJdquFKZTFumYmiQEFxV6pTGbPKdKFqmGr",
  "key6": "UWGegzXhsxkAn9pPxbdWE1jHb6JueaFqvPPJsT4HF4VKg8GremL5JmcQZ4Ug5mukmx4eQtUq95wRyQGKnv3KGNQ",
  "key7": "5FYsTQimDBXY9XN4uqcUazLKBh9SWtayTFY3f8QHrpDGwpd6agRGWrJxRJM1gf7TQXfbjH7T1UhUMnfvi7MPbgtg",
  "key8": "5jvRnk2xEScFge2CsAi7g1KxnK2N8JPNDJ84RMVKYcXcXdNdisA2KSa9guVCrvtpbMs3ky9UhAn7kmK5fQzLPTnV",
  "key9": "4eyrKMyCPtCCVVhdFbuuGvGX6n3V9FwepbEkp5znMofaRHdKqqboW4LzRkXqdUYX5fUvUD8hsEJRNyDrES8x5R5T",
  "key10": "2qXRKVsFmcTffVqGLwsmjYVS1B24UyBjY7JmFpJVaoRpvN5WqhQsJjuHHatpZHFyGSeCodU3K6SHvcKiaADNWK8r",
  "key11": "5gJTcUqRpCNvkdchZTn1kmJDB39P1Ms8E894tQBnngTbBpoPWCjWBcDyRyEXCxTAC3P76puy7c6ii3dFL5WjehqG",
  "key12": "21GYHPVqZDnVs7sYUKfVuMstJabhdbM4od6q71MvFUCq6uUGS1zR1e3Afatei97ewoYiNQR8usaPyYLEHekjLndL",
  "key13": "5VYT994bvX8shcMR5Zh5rCvYNRaCu5R8bQLo2yXcGL5PxVvLocBSKAm8GjEXJe8m5vr6nGtPG7QLxzqxhzTm3Qhz",
  "key14": "fFtjHTVpTEKvExtDcAUUxYLWrDh22RfCMskY1nZcL5nqX1gw7VZTwHA28MfQi5UHwrkpDRDQNZD9tt2SYcgBqLi",
  "key15": "xbXadzXyDu2675dnsv6qLBUozhZJ4YunBDJiYncAxAx4wn4Ys5zWgarZZWgx8foZSLSh4J6ZocH92Y6oeyCJoy7",
  "key16": "2459Q646kfaUsE4GMvK55JfMDhUsUVv5qcviedctJVieYgNoQYY52Z8hC3UmbuWYffhEqEwtQh4xwqrwdFaFjUDB",
  "key17": "X1NjnraL3XyUPVCxNjxC3AfkAjUQvg5N9fTUrFG4f3ftwo6qDvLKYkQEjyQXm5tKhegjBPdzHarfAis6YnFigHj",
  "key18": "2EcK9m7whh9vqPRG3dt9S6r8bYMb5dkFZsR6pHchkAxSK8xkdhuWtB5R8a1Z15bsJDVa87uqonA7t8sVfnPhyHes",
  "key19": "2Ax4tbE5gW5ouff5BcRDfgJUpfrx4hEbc7x89XY7r3q84ggnE5fi2NhMGZTQTmeSf4yn3f8kNPMjkHipyp4EkonJ",
  "key20": "5fP2EV58tHjEzP4xUQedCbnd8CryNnh9e3cf8i16yivTvTkXSHG93PMCbhBXUR6eCS2cTwhgc4oYA5jkGjUfLUxL",
  "key21": "5PvLiAqknV1nCg6EhwhDPgesFBEfiKagsS1bU8TdZnzBXjv2pTrqBYK45j9nDU1evFw2EkPAT6egbBFoG4BKv3vQ",
  "key22": "5KBTHExbxPGFyraQ78qRp3Qb2wR6Qk1oitghqN93nx9k3LP1EWgozoFbVKAVwKCHMZwbJkQC6SjazMexgBhySvHE",
  "key23": "5WkDgXk7vDEDWjNcUyrSKJpsz3Gbumuxc3LcJg8F9jcv3HSJjvfS9Y16WuD2YvMdRKphmvuBfyuZTABiB61kwcd7",
  "key24": "3dCCfmhFJgy51Rz7xsVxSFmyVugS6NGDi9UZNYD62ZSHmWbtuMXnSU3VwQdLP1JYYvBLCY3C4AFcXZyYPwgHAMHV",
  "key25": "3UhFBwPEva6RWedCHdh4wK6De9jgDEUatk1cV1Teopwv4BbSPygnBJVY83HgdDD9ZTRQUfedMofbURC5sS2JTHTb",
  "key26": "2aH1pfwqrPz1waUtzkXS5uPXnxMFoN4kKMZuJSiUqpwKgrQqr6n1cdtjYeoGJHJvfUh598fXRJhW57ymw9iK8p6K",
  "key27": "aMi52q3kMZZVC48RKW1wa9yoBcpjDNJBhoqkob2bp2WBsdN61qaBqvdU3HEGr82qxrmbrAUNrNnaQTmdcTa1FVW",
  "key28": "3d7yakhUeTdABafVfCzNGJiS4FTn6rhMYsuENZV5GYZAYHSL5dhgnu6vkEY5DnPabGKoAM8m6xuGwYkciiaBsgTf",
  "key29": "3nrAx3ZFTW9sQpPvs4NcYKDKRgvtD1Et8JHkdeYbnYGhHG4azh2nSTxUANZg2jNqd8rshuxEQW6xcE9vazsp2cUY",
  "key30": "3pC8s7StHs9XUehHUq3w7VQLKpuMRoULBsyB8ZXayMRLszHLRgAcN7wdnQrUmGjYrDyaqWb5VcjRxBY1VhBvfSrm",
  "key31": "3g8ZAVP1aHcAJ14DGc84QJwkEqYF2D5AAKjDMw4Gz7QXxNsW4TsTyYH2XnovWSvWbr983NBrJBu9vM8Uo4Hzgd6U",
  "key32": "pAx3P2rE5rCXHVuYiEJ3LCqg3uNkjaZcGdXv7eADNVBRTRebcwKTZ3tikaszpj9roc8WD7yw4ReHyijt7Xdz6ej",
  "key33": "3qRGAXsT3sTUNHBnUSZ5Mr9hySdtive2ZGnRy2evwbcA3MS6h33B4eJTwNWRWKJgcNzGY58b3d72jGbvz7djVkdk",
  "key34": "4LTCVVc68rmPSXowwyi6Jgo8ziqxaowvCbHtFKB9GWvsPeKZajY7cxZYz4uy43skJKoeFicLnX8B6NdT8Zo2xWMk",
  "key35": "2yZFcA5JEh2LnXCrPVoCVCnibY7A7xxz4JBSmG4qnjdDLTFdhryA5m52BwfTshJMeSq8F7VVi7n7Evhmg2D7b8uM",
  "key36": "5QueMmnyzN5umhVjnwVzonaQi9yTbSisNsrPFkTP7CM19FrP79dTuoJ5dYzBhwVCW9S23AaLHfPNDh3HTdsy3JDo",
  "key37": "47ZeiBh4fR6b6wwF4Kedgef2qxKt99KB7EKpj5g1mBCaQ8AEoTwZTfu7tQFH6CXqH5BXSKLntKGGNfuHi6QWQZar",
  "key38": "3JkN1D2PcECLYsXFRWq49KMaxW127SNvXoKsL1Leig2RQNvcAMFVYytXb2NSy8CdxwjrKBppeMi2HyUqJyc48g13",
  "key39": "4rC9ZC1x2w8CSBhicZdyLSzbJ6dtUtLEnKmRMiBY3LRX7xZ5tZJFGNrMRer6t1mmxUB75xvDntjBZcwWdmhjAqHi",
  "key40": "ubAmPJPMYXvvNokvueKDwaHaqRHTNHghL777LeL5rEjJshhGnKkKzm1nxtryWhWn3fGaiiHe58yaWeCPWLpgwix",
  "key41": "5Y4yysGbJPFNNA96uKffUF9Pf6PGahSRMt4ca2XVxNKZPSGrgDids9Kq8oVLs4qSHqsp1PJPJUyu5SHBT9imawrN",
  "key42": "3sEEWuwpY564G1ZKV8nngnNCZyZixJ7SJ1iD4w3fvPXDQppKtVfUJg8nDgK76rbzB5tJDfDTjhAiWPBNjs7arteN",
  "key43": "3KrP2pkKu8eUgQENj76LSyGceVcCA1C75JmbKt9Z9r7sAwTy62kLDzCFe3BBX2oYqZwQsEp5zK2DH1HB9aK5828o",
  "key44": "wTbVd4ySFYp925MWcQDfKomB2PX6KXdHeMpu7RScPGCNo1ropWMoCSR6WvrUEwaLu2JR8MGC8Uon1xpuFgr5GoW",
  "key45": "EHpdULauNorK13sbfkeZRdvSvnyUTbX81p667jG1Ci3Bab54A9tsbQeAF2amd2ffzbZKoTUJnudYPwU3bruckp7",
  "key46": "5jNgfPH1eyzo8Lce2xrHH6ryTSQWsfgFoQEp28Lk26ZWhps73dCdmqGr4oqGyAVQDkttqK2zJntErLk9QZBwT6mw"
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

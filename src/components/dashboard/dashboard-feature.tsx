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
    "5wRvKMaG6o4rzhrt2SUnaY27oPK9Ey89ypmeeRfnFG9UHFXeErZyJ3cGNRDnUyHezwjyczH1Yf7XVCDRdudQy5ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGJboPAp2ksoY4JAZ5oVg9L19cBDHjADaFmWpctqvb2HAKh8sLvc4adcawSUK4TCx8RnicBgQqnC7vWN64HfoDX",
  "key1": "64mA7wmiWCNJgyLKo7yyPfLwpUXEiSG1Rt7RdS1rQEg6stzMMuYbHNFM55WB3WBfCviZNz2mNqgFwu5iHTk7AeKk",
  "key2": "2RPSRoxdesZimhgKP7KAu7LrhBvNspYXDLfiqp6phWuTzGx3jvK6HrC59i2rpTzLSyJNvoYSm6CVrmaqECC2Xhp2",
  "key3": "5gWaTo8pD9PW1Fcon8eCZqSo33BnNcZWGE28djfySHornxy6KumituVqcEQHwPjEUgCycm6GReQcU7zGSy3omXXT",
  "key4": "3R3PCeQKfPynhuEDgZzs5qdFLfsFG9jCgag2v27Dq3sajJhP1rf435DjhmZqU9gfpC5EJxrFCDN7S65rDcfN1iUJ",
  "key5": "5CD2iHjEqCRbCmh663PkQAZc1KqoW2nUcm79jH2nNHQ3jMJGyTpsSvw67niHqfKUdmwNsuJRXp3y1hy9kM24t4PF",
  "key6": "2oJyTtUX8zFo58Tan4vVMGTByuf4ScPzRLQBmUy8naSfCXMYR5op3M7rF2qQRMPkaiV3PFyto94sx5gdbbjW78mv",
  "key7": "2TbLEd4wfjqLDnZagzwjFtNjmU8r35MsRJQeRekRQHQD7asTA4JjhvzFDsji9xnwSDBbJHD6SZ7TWigoYDK57Yjy",
  "key8": "3bYRTeYHzQmNjRPYw2VX3qTMDJWLzouDVRcR34m6NQZoNamB7AR8afMPX9FdruSAgVPHBVZwciYd3F5jjRms7nd7",
  "key9": "641AyC7gCVhyc1LzzLeJq6D91J4eT4QFJFtpe9o4m2kk6ChSEChAsePVuHRuPQG6kk4iouuYZckSjve8eGRwmJjo",
  "key10": "3LY16rJyf9GLeWoWhnW5Bhe8drwDz981Pd6uw3UZthuMUn54ngJK5x3iXsBAbLhDMfbCLjRLcMUbxmKfnZgE7oJV",
  "key11": "5AmAoCRRAXK4TyFBYdvRjLa4URMf9eafFTVAabNyfi1ccePjtsWf3ioLeErDxMs8ktZSbnVPkn7P2GwZ4pYqJLbz",
  "key12": "zNdExdvd9yTf81tM29gjEMLyDYdsmGptpqneGRs5KdhnpUMHC33sAQ9rwvLiEv12QXgHwTVGXy1gLh2pwfDFNwb",
  "key13": "4wLhFtfgS5csMmukMV3tm1LLaYRkbV43jCGQ7jca3CWwbwU6xAFxaXq2rzowjVqxNcpgUr2SwZrBXR32vcSYhpHy",
  "key14": "2k6yV5KJojUxZ2qUBRHHVBkPDjttnvXKgpeGRW2U33w9wrNR5qsYD2wYXJYy8Hjp8wxQjaBGFWLoHDDRJ4XxahW8",
  "key15": "4Z5zyQ5hBoL3e1vgRVgoF5RD6jqeEkAPY5DkrAfYjrUANCNyktnfKvDLoj1Dze1SBfn2tfuCeHj7yn6x3NWBPrEi",
  "key16": "2aCLVXRJTnWUa7kA98i1ArfJuhXnKfUGQAUHLc7q8fzsbpnECh6UNuQkFRhX25jjpRE4P4EU6inWoDx9BWnP2Q1Q",
  "key17": "5rnv9N4LFP4Sos5VUPpWrj5NSwpaZnSmercTrQeK25adZJEbytaRx3JpX7zYEs2rMV2KeGJgmqPN4X1gjLGSHBG2",
  "key18": "3b9qzXn95BWmE69tAh8BtW69Hft9VsroMp4ryDonuVST4kkhCQLx8qHVtp652QiJy6RLVXXnS2SciPGBaHgHAhaH",
  "key19": "27o26HY5jDpaZPbgL1hgM4Eng1do3SSHUS5Qn6h3zVkj3QukRDKU6xx52pHKxCjLT4jkPQCNUtF4NNGpL2JMxBsY",
  "key20": "47AWpuVLGsXz3nwu5CxFGMGGGysYszGEjxfD8rkwhBS5txJGbcyjtTh32wMhnAxzaj5Z8XJTiffGXPixuG745Yig",
  "key21": "yYER4FREpMGQKeQqhZEhPsRa8s8Bv7J78DGVi41V8FPNkaSEMeennPAuaQNgNMmYFg9N1UawjhCoXfU62fM9NUv",
  "key22": "5ucWXuCj3gLqFktUgXDiUmGEyFjmzbCnLEJcCAEL8puNadm4YvaH8EaymDLW8HtwLdYZ9CsnmyxCfuCoYaRSh8Nx",
  "key23": "zc5PpCMdLdixuQCWtsHfk1bPfVURDxbU3YNfHYh6ydMatkEcgAByg6tXoCZgiLrHYBVsqLmRQ1NQfLwKuWH9XuZ",
  "key24": "3sRtHEzfY4YX12jk8nsf3DP4MxE17rMQYLdhKnMon3Ch1P3fG8nxR5BV1LxpzJifymF3cqqGTcdrWWnBcrUNs9ih",
  "key25": "3wmz5fB5SCypzefdbTtDwYJTWcycRZYQZ184pmhv91C8LnErwdfm65cDqHn9bXfezf64yP49RLd1acfUhWLf6dJT",
  "key26": "2yJe7KNq9FH9GUc7Yj7zzETqTz532s7gVGgksw9fP75kcAQey1PBmGc6aNd4QPvQfe5tFF74FyMzSygCQnxCsis5",
  "key27": "euEKjGPn3zf3P727JZ2746d2x2ViqUaNWtspkTw3qTAbhk72YVjVzjPwRCmaEiDMRX8cokrmWHFHP8BRVMhzLFi",
  "key28": "4rhD8qxLocR9iRMu6C624fqfTQfqZDnEa6tfon7YNTruMSiJkumm3hJfdeEDoeM4kJYDrusQk9PH11gmyd2KzAaK",
  "key29": "jhSfZMqpqueiqDaL8imFpC8ggSjdxWnztnqkCVScjtW6LfCwdzDP3ibSrdnfPg5wQ9PkuMjdnxXUuTuNbRsWXWv",
  "key30": "5ZUb6CkP359Ez1tVxpNC3DUkoHVwpxQTQV55CzP1yRqpVzb6zbi1xLYsCs1T4VbDmdjWc2Zfsfinkkin6mXWtqR5",
  "key31": "4ewQ8dt5NSXp2XaNmDks3shww9j1GVfC9pRg8CReJzNVHEP6xpxoAoySyboBvm6YVPXdKnaAYs4vdq8aF2mxZyVs",
  "key32": "kbjHSpS1bfxt66RhBnKfuv9qZEePToX9Utc597nEXpGpsT4w1HFDdZ7Zk4xfcNsGhpPgtaunzVrvWcY2hexwYM2",
  "key33": "5W632Bx8M5J1pcyHiVcvbnfTPosSy7Jm3hnmfRrCUS1L6csnVXATYNz5T9PnyNGkBU4aMX2QZYr2TWrQ1CmMPYC2",
  "key34": "3jtXVzqqYSKi9bTkmKrNpz7n7fZFe3UpPgB9TEGyH6fEwWmjupF8LLpa3WmLJiXnvZdPVAJduwthcNU1pLQibjnA",
  "key35": "5C62ck1xR3sNNtRQhtLEKRSwhxAZtqyjnFqkALmKW1vY6aHtVR6NghKZMPaqdgbTpELL2yn373pwVJodX5cQb7JS",
  "key36": "4WPDJBR8bV1xRKWUpAFFEnpSiJYEtNEpjcVUY4sBQkgMnZfnkzSNbVnF37A7nKMeaUJuupaRTGJRzNqDtk7DmxF9",
  "key37": "38nBZh3JkCnadFv664DYzUS29XvTpwd4LTXNjrkKtA8nEcBSDujPCqJpug5Hq96FeXfXZRqWJ6KPHgcXg9EtZjqF",
  "key38": "64ruQkw1MBTwwQbfvvCeZEAgEujFGkP4fiN73nQ9m7zLWrVVfGKjLwSsV6EtonXq6LprHQy2stns8btArRuD4Ces",
  "key39": "66C4y2ZbbSMovE8CKdyhNLKteoRDf989M8mfCDeksh6iJeYNpAx81Nisr9gMk6Ak62FksgXj2m5LP6Quzen8skpp",
  "key40": "4iGFW6fX85jWLttdBexXF25VETQrjsQVXChpSMxuh96eTGxJf8QJaAB61CV3xcYq38D3efA9RER5EEkuk8rs5Fpt",
  "key41": "2mHaUZhMsh4thj6QcC8JZ9QuPKbjwP9SR6ZcEeW3swTq4nR2U9Em659xxu27Xpg5K8FZV4hwJmvLXzbaRqJUk7Pu",
  "key42": "1dY4Ujawp9hDpfqaJy4tsGSqSD8LJzB7P7ku2zyq2M6g2wMFYndCzquEmCDAADuBZeFazKVDTg7p3g5HoQWXPbo",
  "key43": "5eGGVUje9QrFTaNKBuQtMDUYKr3nbWfKF6kVA5u6UKfJrAwMxxHo7zv7JQ1YnNm1RxQzmkLoF7XNkF5RGMc4WBex"
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

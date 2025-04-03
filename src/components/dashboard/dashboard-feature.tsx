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
    "JuPb3YnV4xcQ63xLfFb9WW26bt1UvD4mh3DpzmS64te48r72gcWbNeUV5nhkZErruDvVrX9NjfB18kmGJowpWBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCHy8YwaqgsHYEkAELxm4TRmVxCF3H8T7XJJxhZ67JukcaJqzQvhMgUL3JTsm2L4UxyKh6mYRNca2zvXBLEPeKb",
  "key1": "2MmWxdbDJkZwoY13KYM7LbbC3gvVLLHTxZ5YnbwV7DsGhkFbfLjwNjM4RRButrkAe5jkJmJyVuDRM144NRTzhAYC",
  "key2": "2XwqLH5CFWMtVY5vsj38o4j3reZUJRSVpxKX5AoXQgqVqCB31FT7ibBQy4FaBRX5k7bvJ5g5RUue2uojkYaHJ6eq",
  "key3": "3UddzCiQuxTYBkNRqWke5LS7T9AxBuhQ9C6pRpsJhSg4s6vSLyZ7pr7fvDTfkz2AGtnZbE1gnpMkbehGBNGSJNB4",
  "key4": "5sf7z6LMekH8JttsGZUkuZ1UcFibzUBvde9qJKVh24NhG1R89sWyzM2ebmUUhcQyENTuqJfFdRkaLJyWw6iLAXFc",
  "key5": "UxBBo2mesc5nUZaoDKM1gihFmmweTgviEM8WNpNox9UxKwwT9UpLuyg8eGyFdk3oxqtMNDdL3b1cpefwrfR6Yax",
  "key6": "2j4XXg9KZXTPHw4PXMVBpMzffjrNEEst46YZ5XaNUyQPrYs16ARewprftrvrXdHS3tV8YfDahqEGsyUVufTTqqMJ",
  "key7": "4AdZg8aN9SCnteyEdCdzxkWCodaEbtoseSproveZTKbKp5NxfKfK6Z16K4deVgygNDZTe8n7LFWkmzLwCDpymsyn",
  "key8": "3SZ4uurq6D4EYKQMRRcbKAUE64EPA5EBngPkUS8S5FD4q9mBtSNKv78Anjp15w7df7Djz2naXQeZGaX5VqnWLdTU",
  "key9": "36zsZBt2PAfyyZnkHwoKuTkAAe7tdpvTumSeMtUUJQy5gzgLgymavRpJCgdRcRKLFFbAsdf2jW2VszPPCrEHb8Rg",
  "key10": "5gq5Wsfh9ygZeknNnP76W9NjN8bE3Akho382YUca1ApBKpxa7fiWDxoiKZqLFFfDK6y754Dk8EF9nBhozNxMVYF9",
  "key11": "56737TwdDvFPzqk7BBAvvsdVUia67fPEGsEMmjndX7GKr6unVFesfSF1t5UAjHgmHLaGrTtLLD5ZwLSkjS9edqjN",
  "key12": "3xxvd5MFpWEGTs1NKhReB7Lq7iuQNaBhbQecGT3MXGqjWgPMJFH3rQJZ2NE3uPn69TuAmrRTNuU9FPef445XZtDC",
  "key13": "3gWUFvkEFdjTvguLtKY8Qxvsi5UVqGA25mEZVy3CwALfTHcYgD5oUmo9YoLDg9NH72uQBd6K1rmFBinAZUzAnKCu",
  "key14": "3wbBw6qJHypySr8mZQ8hbv83YoCE4UbL419kbzdFCQz47VcecGXoqHizUSj4QQmC7kiBZfpYMDZhEZto9G6gR31F",
  "key15": "3sEJQnZ3PUemorVWZrtmbYKJjPJzGfQf66ubxyogwpHNPuhwUWGRoC7TBsskDxqPfg9qk12HbdA3JbehzEayyyR5",
  "key16": "5fR6mp3quRGjcSijgci77XZMkkPULXJDimeqFCHU8c39NbrsEP7ADpgyoPFUrVEg2Q9ycnA3CLxpsWYDAwrCEQfY",
  "key17": "fTKxPdT2CgXgrSnRVYBEj2Vx8t8YKExo9yqidLcdF1qLE1iPQ8MEvET297wgdYoYBTCFuu7eGqzbFjWf9zKCgyu",
  "key18": "sDzEDnk73yfNkC7DRND12j2sabNiYWLKRM56U2FAej6X4ML3yMjyqrRNRjQZnkxx3VTngSHj5EzT1ckR47LnGDp",
  "key19": "2S77xoCGSc3W1APQ3d57Md1jkVfACxF8h4h5W7bFVhjJzeQh9siEB9gKf98uXGnWNkUKF12RBNbdj8mqjF4Q4wL8",
  "key20": "2ZZFRGU32w4UQ7m2rKeYS7fCmS3JY1kEFzh6CsreAgasMnBgv2w7hh4cbbFaBXLUKtdiV7szV9hvssTnoxhhsjL3",
  "key21": "k7jtN55rZwZygZf7tQPkk6dEJ7zvaoLkp65eiwRV7Yhc47EsVRzhyYvCKRKZEeh5MHVVhjYpbpywhiL6ts1DD27",
  "key22": "2SDdJSXocgvSbpnRsKX652PLQoV48UU13wMNH8RBEnMyU3ZYQXhkx2jJvWy32XgTaDk2RLRDzCKeZk2uPNsZ4gqG",
  "key23": "4nAyCT4p5tvWeCs7T5BaidfmodCEC1bK8DPDjTBYr6GBjbPr9aFdPmYAUketwxGfa3MFfLjar9SvyMtYTasBSVVS",
  "key24": "2GQWjZgmUXJBRxkimeWESjnvfAhCeMxfE5c2V3z7Thcg7Tbh4JevWbpbNE7HFwndKH2xwJA7WpuT9cxSsSbeyZ9Z",
  "key25": "5qb9ux3B9bpCyafpiSAjr7yfsHJBBKmNRHpxeeCEk9UkL78H6hVs7acW8GtHAXtZWzaENeDuG2V58L2Mo1DuJFVs",
  "key26": "2RBkV1YcAE17tYnmNu8HweuPjzDKKC51S9YUU2uXA7BGL12jEFwszMJS8P7X1RB1VHvZkLjfmrDFxzAXy98H6Hph",
  "key27": "Z2b3cfXqASoBAHd8C19CoMgJca8sKJF5yFuKYrk8tamAwgiwK7mdg2QFn6NZdPHeKn15Mt9WQPYTkvdxq7rJzpx",
  "key28": "4uSnqrZdewuuTRq4X1gkfQyLpEFZ7B5oZv82Rw1C7BQ8Zzx6UFvBDGsPwfgjyDCrSbbKkFefeqka2zAmsu9h9RDr",
  "key29": "qzHGV5CWfhyjbp9L2jjw5GxZF4brBg67ysX8kvPXq2PB45Rerdgz4a2NpC8vjfU96Pt4A9BuYjoAVcrXVpxYLH6",
  "key30": "3KFciEu6hwHm881C1cysFtDK9ZhWhm9S4jb8HyutUTsiydx9G21sf3Ms4TUbGJ4nF6DHaUTKtoisrxNWmh7xZJwT",
  "key31": "4E8P3H6fSuamgxvG3r1FLZU5CjvjD2BwgjTr3Hs1M9ky3WRacSX4h1rwf8s7wqD1EUjSp9GhYyg8zN6WZEZkN488",
  "key32": "3oCQBvfQ3Uoc1bkAAAQaTbrHRqj291gwVRY9QzyFXRpCwsoGL49oqaLV6BNwyj49ZCwirBXPGqEtTGQCRWHi1MQ1",
  "key33": "3yuRp9PTtN17RQF4gVV7M9d2fLgxMkX4KTmsuAHBZLxcD9WmiWtaJmZ1QSJkCHb5XNQyJrQ3p4Anqo7Y5Ze5JViX",
  "key34": "5XgCAWx47c5X9vFUtA54WedN5ye4zaATADCWqCRAUp6u1wWUjRtSp4WmJFvMBZHck6qriFDDkkgBQyrKB1S324bn",
  "key35": "2QSDua2fnLtri3R39wcm1xfh3mLzkj5i8QPsfh7bJMggtSEA2ttkseGUYPxsrXNKdWgXouyGnWGo33MNmiZpF9EW",
  "key36": "2BNejKtKvUe25bLPWpih8nyPuL5mJcG3RNoEN2qAaN5nXiLTXwZzFydRAmy3c33UbpVmJbwF2AHSzt5HL8ZwigQc",
  "key37": "594yynbiB2vsJU75z6WrQDcjVoBA61eKZdk6CBXEAMwUWQFterS3CF2gpAVkAgv3GkhBtKFqAt7Kaqn1Kw4faaMK",
  "key38": "2L6ibF9zvcDTziDoxBwCKkm64SpreCWhG8uZr7i1Ht7KQJzucdquQQrYgmLqWgHH4ybRnLVvn5MqiQZxy9wfArSi",
  "key39": "21vnNGiaqFxrwdhwubCoJyRmKKcyriLYBMmReMjpy1uiP5zvWup6VF98C84r96Nh8uaC7YmVgDP7Qc6zJ2xnFwEX",
  "key40": "VqBhS1pxbcJaUZ7sFVt4ygK1YhkPL3NvmoBp3m1KpGCxX1H66oHfeTbUitDbUD8xr5a3gF3JkxMvMhaJoz24u1f",
  "key41": "3ofATVh3RdJhWz6DcdbYYk26iJXRRD7GJtxUHW5QzUfwhevHeXDd4SstKsdpcsnQ899rBeriEuKPxwQxDqfbPxzA",
  "key42": "4kRHEkvN5eAaogNTBFH9qAmJUaLnKwnhpQH9yPu8D4pXQzXKki2ha4E7A3ngTpkh7rgkiyAhKtqTDNcLxzDsAe53",
  "key43": "61YUMsaduHJTPs5zWBr3kKJNvZSiaishvtkNtDhiov4L96hTVS4auNaxVMJy3VrRaqMZnfptBp4QQPYpNLmNcjXH",
  "key44": "2ceXnpBX1FQ8gkaJRzh393ZBgJsTYQEVNQrSBostAhenHiqMJ8jEbq4rxfT1pinFN2qX5QjhidjDNA5MJ2ey16dE"
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

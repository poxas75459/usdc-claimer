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
    "3PxqePQsUUnQoXSDwNP6ibZzDuhUkaX1b18xbG7sM9mN5W6iSUNpGyLGiydPT2okxjEBd5ghgJkk6RXoNyj3kYyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mofyyKfqpPcNWxfKfMGUp79PTdRX1yWXjeeeu7A5vhP2M4f3H5jnRjFLQi9v8n7mjoWWtdc5gpDEf8dgj92wjQV",
  "key1": "4gye4f7Zzs4NgKzZUyxXXfYraXsG5JZoB6GvP5MPAziTPnMmG2W1JgYVpUjVEPevWZyzyPB19bZtk7J7cBydATsx",
  "key2": "65RygqQebGcMHg5uASgnAoJoXxzq73ZpYQtzpMFUDAu386iB3AJkggGgYosCQCienTwpFNi5eNj3yjvDCNASKfwA",
  "key3": "iQuLkKGuQCnh6zv3pVmSx3kBZi1wZkezx8UcvAkvQSLFR5wFpW68efgHBwkVTu824cvFcSTh7iUg6LYq3gKPNNs",
  "key4": "3k8HGCQgk3DS1taAXKZdUAq5w1FVdTkqS9J7XZAgdwUGwt5C4o5XBA2cy37hHUs5qMaZXMMsMxRxfaLUYz9sQ4Fb",
  "key5": "3dXPtHiUjgWg3JftwRmLkpHhejDTgCFskm8w5t3wUZJVxuB6rv7YBSMhvdwhdBQpTr8upqRzwCyJ8zMWpaAXL8Pg",
  "key6": "4pv33439wZM139R13AipNdK8iroGWjit98qE58uh5sCCM5J27RweGWCnGTR6MybXnY7SXSAkWmtSXmFYxJJVdgq9",
  "key7": "3tTEhME5C88f82m8ax2WjXpd9fBNz2fXJf6hGJYxrJR4bySuwPPzw7KrFiD4cYgzMV6nCX2TxENKUKq88SrEpP8N",
  "key8": "2xHfdXV5NQC3Q2B2HhC2ewK9ocwVsG8ep7bvSU4kYe1YMgbeZp7m1MXWstqyEDo3g1ibRMzoigaViee8deUBs8mh",
  "key9": "DAvSm3D5rHvTyxkPUQ6TAcsDtRDkJphwX9eZfp9bDLxZnQ7wth8pwPccbbS7LUMRRfezGNxJGUY9FRGRAnx61Hd",
  "key10": "5JSvHhMoFyJwJhH6Vkas6GEAqjUWnvDfPzHfXbtTeBDg9Xpo5boNBLWtkhGpkM6JCoFbgAQKFnrmofTJjxKPQ5cW",
  "key11": "48PVJQHFbynsKsUkwSfAMMvUiZddUU3R1ijoB9ykSDk53XVKHKAwKV1CT1AphbseQmKsy6LTnzRnC5PJRfPJpVzH",
  "key12": "4m8KrS2xdXCUgoGVaQ7y5nWhRVcLRkWMemYr33eNKdM9MbW7oirKS6CGAy5DsiLdvoDV4hqCTpj7NfL5cxkFxFYB",
  "key13": "5sb11VGC7fJZf99h5ECBsUDfLGBcVn94dJMEtwLGbYY7bJCbLeaTgMJURJKFpxWfMTo5NvAX8uS38S5MP19hZRbu",
  "key14": "4HL75thQgYBQyw2Kgrr9Z1Te5fKoVHKSSJ6rZ8V11W6Ko9oiNniBZeRoV1wctk8LMEiXhEYEfpZLgN1DDyS6VY4Q",
  "key15": "2gA4YgNx4JxMu1UzDvX1ugkZgvzvJtT9hA2rE8FoeUY8GRB2P3ZXZPF7tZP45BUnvaK8wYRpw4pQUcicvVusdRCY",
  "key16": "36mPKGbsqDkcyEJjfReh8kJzsfmF3CfztDxLoPRiom3M7Sm2JLgJJwCPnyBwKr5SpWTCCixHyFvnV4S1FMDxeHev",
  "key17": "SeEv4h2ChHk5wNt38TLQD32rd19fTGGCTd7cTMAYpMPSkEohMqFr7FUz2BTFm2K33HCV5t7kjqq43RRLZtKq1y6",
  "key18": "GdvvBkdBWxZQSi26QVNrW7YJhNoRQjXBDUZQFJPQoHB7j8cLHAfsRieeDpVzwA1a8jwAerhJ9NZNAMynNLXxET8",
  "key19": "2Pr1x1jFunQFCWxZ6zDjoVUHH5PdgEi2KqbERbDNj7rGt9gtWmgJJzXCRoEfBmPnRAQipfPGTAqGv26TjzQWGtW6",
  "key20": "5wVtgzbgZuFypEwhdRtdr3F1x25knVoQ3y6vGoUgiMqJcDwWmgJfSM7fcQCDyt5kReQDMwkkUj8MwQFNbg2UWRFz",
  "key21": "2mhM4P9idqarRmxeWT9fgHyMu3yQhQP8YujYsLnnkU4gvosnC6joxbgHrvaUVQ2NTZFRH8dethqQD2Hh6mdDtfu2",
  "key22": "5rvKNVELepxwowoNqmjd6U8PwJiLjC56jQ2Kk7Tc7itmzUCVP3uMszozSTyKWTG1ARL1Q75GiNPqZsfq2PpBwkUU",
  "key23": "3xJRXKtDysc7fPrZsdnJ86KSwcAtj55eusrHHo31A9TUejLyxngVcFowPLTkhLXSWMRk2p64dPu47FyxrfqF6NWA",
  "key24": "3UHtPBhMrBHiZFLeSin5FWrVcbkrpasdHh9FBjwyUBFH7uc5MdZGrqXMhM5SnuCJGEXpA8LeYjLN8RyRNjzVzQDp",
  "key25": "3sL8GEYrnDfReZksBfQozp1ZWdvCY1DFshhxFJmtroixerueR7id5Y7UAiv48sn4HJj6cWb1pTLCgNFad2aSjuEN",
  "key26": "5JEx3JDSk3JVhDQBJ7ZDQqWW7PeYi2cZid1C8PpSGDctg6AHCn1CigNF4s57ZE7VCroXoZ4pt38NqKtL7BKBzGJo",
  "key27": "2iGDMquMhzgBhWSbysgcV4uZ6zoKys9xNWn3J5Ny8m4Bmo6DwHcrHH1uNWKQRJ2ExVXAUMZFoWB7sd216V6SqaKA",
  "key28": "3LQsJkG31PDPZfEyCoZ2mHBq2c1yt5TDXgnocPLmFyreCep8v1w7JstikcfijzYvfe9ySLzQESKted362XKswa1Y",
  "key29": "35J8mxFSKF7LwTFQ9pb2vFaVFTKSqiwkpRy3SS42qTdeUnQHfFxt1D1tEyEpG3oqw7M5BoTVzmD9eW2qNwh9PVBD",
  "key30": "32UvUtEgi3aBo26Aey5mM6NHX4sc8rhf3rbUroGrfMG4maVP5kDuDQ1JWTkBJxMWEMVRVVRSAw6R2XdGPV2GJa2r",
  "key31": "5Pz1GCWq3iVX2kuWjcasZ2sQ4ttF8MscjWEz7yL1HuaRFWHZCEWfyjSgevhZCHYupsYB75DR58CSCy6pvQajjzkp",
  "key32": "2S6aXcVdRGKwPM8NN1twsnm4jcfpFAwU7fhLfpaSJZYyRGMvVPpFLpGM5vBjDg8mtHaNC8GnEz2FNJkL6ULhokE5",
  "key33": "4bL1pkAVhg9EUC82wGCGuGfrgtvmSB4atsPsB4nHd6WN5y2YKWMWcNDzZZmvGfAZH9s4xTeHtGwky5zUhhetu174",
  "key34": "66ACpy2JxThmzgex1ieGKqcazQhpWdgEcQCkeT5hsLjbH6SxyEHokk72Tqo4zhxq9hjqYUqibim8FymG8DL4Qa4K",
  "key35": "35f416UQMDLph26S1C3cAFgHbtFneCiDvu4QY92CgCUERVFmcLdBJhyv9YxbCJjBSGanPXTxWEshyYHHTYoWVZcu",
  "key36": "3wLz4DSLAn5bok1ZTkqcYY3zbHyviL2PoimHf9ZPdYzKtnatsMa3E6T3cTSP3kfsjyTXbpwQNRPFdQ5vsFdersUt",
  "key37": "2LNXsaBogxmfJsaxjJrqMwJ3BJ59StsrBywJry8D4NGT11Dj5qkHq9RDLxZi6D2pjyUt3UHjkGee3AAdrkuKfUvU",
  "key38": "2G9iQp7FFMszCHZYa9u5QheQff36WjpjzuuS3BYuc6aVFcy4AxHEFkYNqn4sF2RjMENbn8DqJPeo9ieoH3FNVsY1",
  "key39": "4Z3dYQtxp8aRErPj1aY6qBt7jtYnjzguM2ZsqEdK42b8aAw5AmDwDtV3xc4UZyQqi6ZhM2tt7kBEXh5LV7RHTdT6"
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

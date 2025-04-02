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
    "62D9fmrT14sYXN1iRigeWnQPwBXgWBZ5x42LbNocLp3C51R98BogPk3pgPdyYHF5CXTqQPWDFhwZkjyme3mZHWxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QLRQ2j41rbbns3na7FDhiA9jreUGaQ5F8iuxk2eduHHDJqBupG2TMzrKF8SN4EjkQnciPaFdCVMxsHT1W8hj1RE",
  "key1": "21DDWRmiM4bugaDmWJLPVAbJHbUKCRkWq5LcJ7ze6fEmuNAfHo2UeThvXSVdVwvQXKfzduJ6b47LB2JdXfNyUchK",
  "key2": "43NL9XEK74pQ1WzxW8Q8nwp9DyVmpGdvs5mJW44gaxSHJCVsaD8A9ao6CDGtUZMCuGoZxDQdSj5G5whU5YPJ6d9X",
  "key3": "5SH2sT1xVn3o4htL8QqK6V9vupyuzf9K3aVn2uREjkyvxSHbRXm8SjTUXMUD1eF2pntNJHMsJFswJFjV18KxnMQ1",
  "key4": "4wVhe3VsfCyt2xTNziJvRT8Du4zwAX9pQnqryvLEBsYivqVFBNoFBCoS6vJBz7HwkqZT4m5czSq6RNgM3Mray4eT",
  "key5": "5qXDGTe4dAmZr6Eb8pNFjj9BsDHX2h9JYQaWkbqPXgmUtppxnxfRswtDfsbp9d31Y9y4K3iZ9qu1pnAZrYUe1T9z",
  "key6": "2asrMownuQkK8oKzF9ar8ne9rcsgUSeU4RhbY8j9Ye78osUNzazwZhVnRYa4Uye1H354RcsU1Gxc9Zav1Jce8LTE",
  "key7": "35zwZT2KLXsuPPwTsWKHuVQyEm9wrUNZ4FfEnTsznCax69qWun5WdUByuk6c9gLDtFLQ7wESdFy2iamxwMb4CRfN",
  "key8": "55Kxz4YzQxkuBd3rVgfHTQ9BeSVtjvMKBbPacHmF5XLwj5HaSs2ai92zXWgxZHKE2p2NuDnfqMnEdE9qvngzXsy9",
  "key9": "2A2W3x8vUjUHkQyHynFzYBiKZTsC6rn3TNRtzg4biHJy4Bf9eH81i27iKWJ7Nj15xEQsPJrabE1uS2Dsf2eZgXng",
  "key10": "2eDUmj58xtJ9Kr29VfDNuS9Lrir9DzKdqfvbztaLKdVze2oAC1hcA1tCwUDwcpQcyFWmJvue7gNftC7P8bf5urPM",
  "key11": "676d8x9mhD78gfy4S7rD6dha2Q6u8rKcf5KqE4ngScvPpGGzm3NuGPPC1XtySGxJHeYrenzp83vb6Jh37PzdSBiN",
  "key12": "CNA7DwiZJT6ePigqj32qF3rRMr6Zn2qsZZH7v6TiyEQ7emE64aX1DoBJKs8B2i7DrD1Hyextt8eztKJ6SLPhQkC",
  "key13": "56UYVg2aCRdKVGK4AJNz1QdwPFKbfgJ6hhYcfcfD7vGqjdoorWu2uyAUUbmzrLMEgXkAZ5uPQ38qxcQiNVhk16pq",
  "key14": "2WDhBUmXcZ5xyvfstWSiyyzBEZYaCepuiJtBuiGrsTiCkM6z7cknYkAEcPEYPFYSi5UWEVmMECxQFn98wRqQ9ofn",
  "key15": "uK54kASYRHeLRNqf8uE6gKhZdd71dQ8m1cSwuMxHVvf37cPW4m6t9pY6FyoSDeRDxHwweREsji1ynwwqPzsz9tn",
  "key16": "2EPQNyZcUyTSxKzbSss7yXHWF1r292QfAPxGKTq5UsZa2LhUioNeAdtrmcTiRbBbhnXUTctWSAfnQNE5CB8rS4tT",
  "key17": "4hzCFodWpfz3VpM9HCPsxzzRRg3xhtgraLbtRZAgcSqjw1o1uyU2PEqJs61cVHe2eVnmVFqV6qgqe8DcPYMm8EQw",
  "key18": "2KF37gALZhqJPhwBMqiWmqAziN46KEvcyZixbwn6SPFf2NZw7sndFeBHG2V9qY4U1cyVvKZQB3VgDwxwQnqzfLxF",
  "key19": "2qkGqo48FMi2QxjuFxGnKpgJomKkBJAzX3e73CiNvgigY8NLaP8ofK4VEMsEQEyaidcTvWPHkdaVCECuYdvmVJ62",
  "key20": "3XqXrNGbBK5Fvajv4ccJX6676y22iWm4U9TUyZvKNrbZ37fUewbFWUiAnTi3xjp79ZEqcByD6TfyECbtcgWR5mg6",
  "key21": "RfoJmBH7nZKJxn3vCR8uULXT2g7ayJVrnxov1qjvwy7U9wowWxXkrUJrEKyiM4AWbTVwyzgusCHiaVgR1BYUWwv",
  "key22": "2sAZjzjW6EvuFh8XJAQPacwRDrCrZvNekPFsFXWCge2e5iWEjwHBCtyWJxsHfYYe1ZbzudhHistcDZJHySowDCiP",
  "key23": "pspCzcciRw7nro5YgJDcpTkQh3SRWrZbggvLL4c6pwKLSUaWuFVsfGLgXVJ9r69uYvKbovvpPPFR3BUBo9CVZD3",
  "key24": "3awjcG1YF9Q3tbuTBFjoFfV7bqBAVnsXaT87VmbPVmQRudBQxsGwv3MRoEmreuzck9XWw1y4MiUpGTjyKoXp2gSW",
  "key25": "62uJSPP2Q8ohYE7p1a8jPDjazCuQAykApZakn7Cwft9pR8hT1VxHhUM9jrBURu9XJeoWNZ8ZhgVaBpRcFeXVQ6TA",
  "key26": "31j51LP2d7YXTrNjntKLsgUqmSzFjmmh7h9WK6o9mguD3Gov5e9qhXzQ6nHAz4cYPqYwTiCfRVMFm9Km6qyzXzgu",
  "key27": "fjedPk5HmhK6vjiAV2bJwDGXnVrwxCheTKFpCgCvu1Sxuy7y4yJjwEXQgVX1UPYXyTT1ekTcBgoMGjELLCQUGy6",
  "key28": "56bAAGmZBk3DqXwxvMNEMnoRSQHmEkeiHE6HCQA99CXHwm3PX8SHL5VAZBBiEBhUVT16VmkpX4evSVQ8bRXRaTGX",
  "key29": "4EXaGMsVtbFFwwcYameXwQejVFR99q1y5Qa9mLgdsCdSZ6gNmh2W3j5Rh6LNNXjqMQrQrZnvceafNhtYbW7a7GRG",
  "key30": "3YQgo8VKHBRKNVeJxC457EutpA4d3h6HYdUTJGKKwzPZEMXTPoyvxv8PsT5cWMXiwoQx5jVTVJAgRuga6xMNef57",
  "key31": "2kRYAeLgD8bvUbwFzgRmJpCYkdLG9ynaZgGZwc3cnzdoRZ23sHzBvKY7xvthXaqjcgTMNoox9waJ5RnUssCcbcSb",
  "key32": "4Pf55qxb9wjYm9m6yqLDsgTsjGH8tpxCiQWctiZqBGrgKsUNNFTeyvDzTwrBv4TrQDNGBYWfKNzK7AQ8mHCv8pN",
  "key33": "3sLUeaPbAUHHyXc16i7uKKEuhKwbhEBW9XbT3FHUo63KT3WdPBaFUq5hC1SD1AEvAVVzP4suD7GcLu4mHdnDz282",
  "key34": "5YySm2tCxziAESv9TkotjnGxgNPPTWDxqw2kXZheyTRSmsb6a47RcifSj5Y1ZwKXnBn6HXuD7VYT5bpVRdhpMGBb",
  "key35": "5QJpViHC96pmUdaTJgkySZi6vqfAjeGjJonDsqG94RKSR2Cn34A5h8DKi3pr5Rj3cvSk7dUvQs3qtRYbJmt3udDc",
  "key36": "6oZsq4sBRuWCvAoRdNSq4eGynFDJ6432nsKhJngCxhT48FAtrmePWbGq3UK6RguSLZ9bYkVro8QU2PuzTmna9yr",
  "key37": "2aundQq1PfZctPzcSaaMq7281VPoG3HVTu9bqm4M2mip6gtvbvg3rvXumWtQmLhH1nSXtqWAsD67ygrEDf18Bipz",
  "key38": "HdKd25SHHaZA6oEY971k45U4WgW3ZNqiPdYVYp4zTumZAzvBCHYQR3hnAUtBg3qURt4pawNisymWourwZmJej2q",
  "key39": "3VMqu2Z2wCaus5hhjr5F2edhKf7u6mCmKReLg2C6cfnrVJCBBPizyLxDaUFnGbniQjfTMMr61AeEVHJYKnfui9D1",
  "key40": "2YJHm4mtG4CNyMQJ7C6XQW3CH4veQYSL2t8tykW6tjZN4qqMzZakngWNZ6wn79LHSuRp2YDit41HXsfAnrseoddZ",
  "key41": "2MhPZFeSVZv6UJUysxjzzNT1zuEaWy45RDfwUkoowiKJtnnCk5rxV15LxcVqRA88NEVVQ7AvpCA2CwDTxoxTTaDW",
  "key42": "7G3kSi96szELvqGGTbSHFXrSPwog2JcyNT376KGRwFogGqPeY5h9FnTAb9V1u2e3HbxRZeaJyzmqBSY9TKMoNei",
  "key43": "228t7Ak8rpZyRrRAu94CYK5kfb24UGEi3zRW4viTpniTDgTfPkQzAFC4USQsvQfCc2g95XS3jhQhMXzja4KUTYjp",
  "key44": "3GpqrAgoJAeTvadhE1fRdguJbZNAtnKiQaEFh85JgB32RNBLhwUxoiMdvKfSFuKBAfFVe29RZJb6k2dQRHGCDbDM",
  "key45": "4VC7VYWDVqpJvMFh8sgbTGM9hesybe4SjDabU8Mh8qXRGfFHWog9ZTtpwwEcWi6DsWvNE14s9SrTxcQBwB7K1DLB",
  "key46": "CcRW9cw7q8mWMBQVDJSApkupbiPrxhmcPXxWpcDu2HtXiF6n3zRxLRqboDvL7grFyAfPLGSQQGQc2DhvoD4Npuf"
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

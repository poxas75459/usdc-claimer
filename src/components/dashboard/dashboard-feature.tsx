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
    "5M8QZBdJNi8VC6L1VHeJ1gN77GksVXoaUj5RpFPrV7geSh3NMNCgF9Cu3BJK95snqCTS5CguhVRwLSE29h1pFfGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PEwJw91PAFhSrpzzEii9EqaYfxr2dXfjjdxn9zFn769gdZSu6FZJn2XKueNTAJu5YnqBgCK1T6YtCKk9QRFH6BV",
  "key1": "5NTzvjmhtCakacfgs1tVhnL5KoNEfacCikjkgpdw4rGjsPmnCXBZPP1yFsC2C3kHbsPGexDu9zbjx6S9iqfkdLVs",
  "key2": "4dbsc5th1WpqtcoMbPv8DbFWRps5QptS8znWEXLLtm3yPYoDpniMgTuWx53tpvgXpxGFbQrxnsMgxwdPzY97MZUQ",
  "key3": "2E9Qg3dY7wwaLSAcd3Ymn1BhnrhKpZYD4H9mmLU7zo6YxPMzyU6UYUaopvF3XF1ABCsJa4EcEWvSi85PZ2nDKxAX",
  "key4": "o6D9pK5mFtGtPRNxDfDw6yNGYjadh32GLv96Zsgyum7MA5m7kYpE857dDobaqvdz7ZZoFc6yZ4NqS1YgEQBZnR2",
  "key5": "2FsdTYkpya8kotdbMJjpYgbJukVepQSbyupyAqJJZXAtyD2SRvsZku4rbpfAFBA1KNqN7y2BypHoc9Q1uPKNGEii",
  "key6": "28VPzuAQrRTo2pu3TzaH6aWq8jcK5uuxwN1EHsSYquWzxjrHnBcFWFHDKZCXDnmXUjQXHUXEa9eH5koXGqBcDDaV",
  "key7": "48hyxM7zqG1adGHpFqkihtvvZJ1z861HFWnN9wkMWKvNbRt3E7sAWaKex4VK4n3QbcywLCPdqULVNQr3AyxBMHYg",
  "key8": "2uWBinJquYxFCfWy73a3KawhFXDn3cBSjjd53BqCMUiVxx81w4BP2dGk5aNXmZBKJGv3KuH1F16F4GQEh6SQSdjd",
  "key9": "38dyNky22zezMR5GmvtK4WoCXVn1hdG2k5sNkEKpQjaN2BnsV2TPSnjov5kZckWFdGXbTmRWP3FVTnWTEyfeVz7u",
  "key10": "4RYsddRyccvoWjNn487Gyvp2U3qjmiMrBkAbfXAMuZXfrHNtN2NDwH3EhfjmnTgVQsdKSfmpPijxjudPiAawiXui",
  "key11": "32hHABPsgkMUpoEbYS3NXyRKxcdoUeRLW4wdT1ABiUkcw2Gq2FCC5vyJ41xMPoFLoAU3NWTzxknHoBVnPt7eLjwv",
  "key12": "2mDTwo6V8xGcD9PaoY3ZyqRHBNM4BhaXUpSLKyz3nvTqNekyRo5DxCsjEimy6GN2fvwqQ97jnXH64a1eSMm5hKyN",
  "key13": "5gcP6qTj8UPBpFhGvAuZrfMUyQ374R2ZVzgMpsWHB5ckPwayJzKggdFnWdHf3pwaZcrPuEFsNba1TBB8Zh97Pfix",
  "key14": "5eozNy4p2o8eHcXRzJNF21aMJbHCyqUnXfyXXPcZxJvmx2g2pNWZ1ZDqXdeUPsZdyE1fQumPumPJ8DPFZKvzVpoV",
  "key15": "33XD47MxgKTreEvgmxouXEqYKrV5BxrzuKnS9fRdLNA4cAVJj2zB88DdEk799bwzdtf1o97zUzZG3Vz7mriCVPhY",
  "key16": "4XSdSoEwadfoHBCE35Xa6K3jEj85EQ3vrXMncn9o1tSr3gbCQEJHP9FZbZDnMofBXFnMg9AeKzrN5PELNKqhaceB",
  "key17": "3zRfjjR6SDjDuVubqx4fUAJGaua1pU2BS7h8BMPsxW4WCcUFtZmryBgEjijm9Zj1stYjCNfSysjwivhCoeJs2pu6",
  "key18": "gyRJ3q4fYGJXgLsoeAH15MbDsqc1pF66GcDGyYR5uNjP5ma8V5VFgNZ5uRtUFXWq7cfp7goJbLZa4YbjbRRKFov",
  "key19": "4ieCww7xc5ZJXD1chEzsZHfR7H4ot4oNKZ1ReJf6PKJqhJeuMQvjD3mm1K81xHmXpiyz5cT73zR1ug2F4rE14M2n",
  "key20": "3GrC3qh28tnUgu21myxRzGo3PWYZdS37QC6KutbAKDh4yV3kFdW9vGgFpVLHVUEUfyLwiLzgiv1MMAhKHyp8cNWQ",
  "key21": "2h3M6f72LgZT5w5geuid2rZp9BXiAg2iu5snv94TZjZcLQLJHn9R66eprq3jQb47PwAVgpPwWyfU1zyrBwGabuvi",
  "key22": "5sMic6WBjBJsQn9hAFVkAJp9Wf8g78aqjbVzPvW6CNPyiKPV6b6es5sUVAhTT6gTSNMnNf54sbLjpfDkp3Abrs4W",
  "key23": "mJTHoPqfxpJ9fjmksZc8iuvBBoaNBQ3tyYvXnPZqK6AL63jw2WUbezfBzqjKPhHUgMg7JMixFchxPUAVCmdBzmB",
  "key24": "2fr1KyWCqFfP64QjHZNGWH42RQXhVd4dYMRk3HJv3QfVpKHkQKNGpTpxY7fFJDTRxZkXEQ6GhnJCUGJoczoQijt1",
  "key25": "61C16sB7nbBcVn6x9UvvDBVm8FBcRP94rxguWgD45WrRViXscpww6ENCDzzdYpG5cfFJANpMPkq2q4D63rp57r7B",
  "key26": "2DTbRPdiQWvsgjtgBoHgNdHptkDKVmDce93SS736XcMvCh9Y4CkVMYya554jVv4wAeCyMxnV2HrEDxq1KnN7GA1Y",
  "key27": "55EjiM3pEqWMeqpKrGVkWFdCCspDowrArEmocg3xHhWBG4rEHiKPR5b9e6ekWrKkE61mxBE49X5BYSDU5nG49BAK",
  "key28": "2AqLg9pG6m3NpL1MNMxjFWVUB553HUxRP89NZq3qEqRYG1C1TpMNCGvqc2wNBbknLaVNzTVxCsiFG2noq5UQ41mW",
  "key29": "2WsU9CwrXjpEsEd2LhPoWCqWM3U6tJohbCbopUJPT4mpTqVSXFrCiV8TSeodVMHDhU3Zqmbb16QHhc7p5n5DKv8m",
  "key30": "5FBbxjAEFQaxHZLXW8P9R5iSERR7hx9zjJfBk7zZbyNKJu8vdh8YsoWdWPEA5CdhPEqfkxswCAB1JywXM8gVyGow",
  "key31": "b9FHDTnje6CDRBNWXG3V82XqNSoLhh341sAfrm5ARZB4DaS1vPsB5zSVs7f5oKxZiKyb1jiS3w8QJ7RQjZxg6vS",
  "key32": "2RksWeppSwgnBATo4j1RLqiGzvqLWAgvFQBmPoM2XhmgSyKajSwaAus2GT8PcMyJH7DkHwQJASyVzYCH8zBMWd8K",
  "key33": "EaZQAvCQY1BQ4eJ6S6NT2PfmG2QyNMcukUGkFicWTUNzcipf8MhacX3Xn9ranMZCmeyDvAdpkNfWdAEN6LZKrTF"
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

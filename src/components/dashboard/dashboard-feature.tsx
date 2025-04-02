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
    "2R4UyQD17bmpGi8VfXDQh23xRbSC5YgrhrND39f9Vkfmcng4y5PdfmJxgWUvn8tpwHQz9zdVn5hYdYfYgwde4smg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253jrjLVHAXPC1zor4BZNTYzTX49u2vBPYLXqQb8fLm1JtCXNjgRUNfMzVjKGnpU4nWwAPA71F4xhEuUFDR2axom",
  "key1": "5LTfWy4ekJ3pvQGuzwUC97E6TgrzoSUuNenZwSpnB5wmHNoXvjNaCgBuJ3Zmr2XZdAwmEDCi8LEgmiHQfkkdJCoz",
  "key2": "5V6SMqd17DXDDwWaSKrtD5vvY2X5EqqGvBAbKRrqz6x6swQx66AG9hxybsiWGgo6yZxuWosQTaz6Z7fHJdSKdXhY",
  "key3": "2f4Q4b9qebPHSeQvAQD2iuPVwGTuwfLXPaVkFTvJpoW9N6aaFdh1qP492K7kYgnon8Cuy6iYkZtm7vLEuahm1D4Z",
  "key4": "3QAL8NhkGfx6CSoUxSxKaxTNK1LGjsZWdECNoHK1PWw2zBbVyH3yqgDBAFsPWASbRuqMrki3v9VmZ7THcbDvsuvx",
  "key5": "5cHMxqSga7d9aYe2Uk3ir9XQc6FXGED9HshJDNoTXdcThrYYHsgvPghNo8MYbZHvr2vBySscLiLa4a4NhH5UpEg1",
  "key6": "3aTpXNAtSFKgv6H7W5sqcWRK7Zt1BRGf3vjrjF5EEgNL2bt38od5Y76Rn7qtEfMm5CfPhHypggs6LbhbrUgyy1S5",
  "key7": "2Hj9i5NfeUY6bSrJ6VFpLyCWd9EFYE8yW8RDLwUxLB39ckuwFmvJEijqhXHUgGXqXzhkjEUbsz9uDUjKUnTSp2PU",
  "key8": "3HMz5YftMB7ikLptYRuEgPqgi7AwbqmdTqQmr4GBsqYyS4C8N74uoKiG1W7E1Xq8jZVm8An9Mh7UfbQZDSmCwGHq",
  "key9": "414XMbCrmirdFFzX4wi7GFmBSntGETpQcmke2RKgCYv72bu45Xv7mB5PpcMteWtZ6SxkN6Dkoksybyvt37XiGzB2",
  "key10": "29NuQELER3C1vmXkKyEKL7afZQdwD6oRSBpA4iWLVVwKLc1YYccv2WDYuTTdWi7b94NmdY6eZ7wiJ9npJKe9A73e",
  "key11": "4uBDp7yybo9jEZxBq8v7VYY6K3fUqADrC4jqYhQaaia3jaCXYEMkupDvQE1d91dRdXqgBafKU3kPrYWAS3sQwatt",
  "key12": "3PsQUnpz5THha82wqp6pPnpCC5Ab7PPgnH3afRAhEYe5jwyX6erE6r1t88wWaPRdxyCaVkH5ZELTvCm1QmctaaMZ",
  "key13": "bxKbryn4EWvWnMcF5QDUp3Yr4fVqmXPraYEvPVKWS6YsEc3XBtG9UHmGwME1UqE9KffFPav7qMjtBmmKYpPETQp",
  "key14": "4RyRWktxoXxQSmr5XenJjBRbZpZPgBZjPFvCfHQLdDH4TZKkuSAcN48NdT264MKCLfT9ex6jf8mUFn7WftpzAEyw",
  "key15": "52P5K5nqyXYmW2TVrLknmht2BuoBfGS38rmSPtYCgNEBDG9D6v7mVEb6374nVTwcFQhLSZjNRKFn2zb1FpcknX6R",
  "key16": "21mJaEsZqEaP4rErKApYpevzijATLdadLPTbRhx5Vi6p2uTefjVxLkiCQibDMvo6KA81DHyTTBkRYLbfbLvZWKMy",
  "key17": "G4tqKkSM8zpMCQki27XAxpmwLhjVuLdvYSLhwf4HP61uTWBDYQwaMGnMz1QTpJKVm8HjHZF85vuD4WQyorxYPhu",
  "key18": "416JT8HEw6VodQ2Jc8oZZ1r6oGzPLah9pgrgEehHTR2ivzbBJS1D1Vc1Wy6SLNncd3aWqgK5tsHDkMoxfpCnoxiH",
  "key19": "5zyZrdHdqaFqgmDkWnXFWaBnLxFPtfy7SgjH4oAtxDWjPTAj1F2JGgn35GQkqBUYMPrFPeGScEFSWn1Y7Y7kYTQz",
  "key20": "28Wm4dJ2PfMozqpZpyKeDUAgQJk5QUguCCu48sE8BSkp7imGwGwMTpwPNLp76CnCPACxxqyJ6AvMMNwSgYADLboQ",
  "key21": "WKSrgKXCUan25tuQiNoW8JU6A6NmBmXHcbyUHht9jiEW9aTCRddDYvRwQXYnUZpebye4PSWtcHjFvd2Wd74J9Nt",
  "key22": "37umFGJnrzmmF4xbYfegTZepYBJ5ZrWZArfWgnNf2FdoCqGtSto8KWauZnf2P68NiG1vTHSjKMMPdGbY9dMjeivN",
  "key23": "2dAfk1KoVGkePp6eirJvwjwbw8jQouZtm5KU7JpbAjzXveEWwJiYJxCnZcpwhihBVXBvmfmNxizp7f2WZeTHoCjf",
  "key24": "2dEHAca1HLnmp2fjUENsSGmdVqB5mNxFpJZKH6fVhCGkx51gmNgi9egjzwc7L1K8MgkxgVEq8ANy5CGGTqyYKjxe",
  "key25": "uJmL7o7xis3U6axVCNkGeQM8qzDWRNik3uqMqGVzcyfFtznkkUGwWmVJ9mBMBnpDpjyNkPtv4fq4ZxjjC4edArE",
  "key26": "3g3qbCrN2ohVbRY1n9wPpxEy12G3Aa12AkuxrRScPVN4NPUF8s4dDckoERHmsAtJ7K6oLm1sDcW9eCcdN9weKoRu",
  "key27": "517EmH66fNGs54EXZzVJFFdXNRtvuBCdFGrUtmRBLSTWjDfVnAqVxt3ZXFNuCawZc9VZsvT3MMLokGSELYDpd7j3",
  "key28": "4rn8T5RZQSGN1iWnubBtJUS3h9AfMTTTgyHUpyMrZKhJYuFswckYG4mFBtgNKC4epsJHmd8fTfmrE5nLxQkhbKTk",
  "key29": "4LXpN6bYsUGNpCTZjp5misHVRTmwvr2AC2tgUWwPtgEAXQTip5nUWfW2yit5wrM5rpV4Fh98YCP4fegY6gzu34n4",
  "key30": "61gvMPizCLcApDxKqFN2kNigjmrkihEkFajSo46EnUeWjy7YkdeNQj3Yi5qAWzbQPkU3jAZrH56Rnukni5UXbwbd",
  "key31": "3QrSzTCcD3hvtFVnVyR3shyAFymVKYstE6mPeMFFH2WUBiA44cDo5aLmPqq1FGeC76sQGuVEj6zpxPNaWREdcDfS",
  "key32": "51j5cX3vzKXomzaU7t9uS2tXj4dQApAitaeJAb6FrGMFgYArToNALPYXRSxuBmYPKE9ZYD7UynA389MHhxoTJREQ",
  "key33": "28UNFXJiDJy278xdUskc8hk8iBNke5Wsd2pZLERF11MPepVKJYnPJskdC5AqZoia5JVtgwxLnRDYerMaAXtrtqh6",
  "key34": "4kDWhEQau8VnVTk8fcd124vbtuJ4ccj5VLAC49h5rqPECnBZf8ANtAt6wdSD3dheA4V87Doc3bXo7yxXCQrWanGA",
  "key35": "5LSUBw9gyCxCERQBJYxyEdHsRQjXXU1jT8t6mr4uWFrqiDk7UVdME9oUaxggZ2FJ1NN65AsAcfdC7UFsC3Q5Q3wr"
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

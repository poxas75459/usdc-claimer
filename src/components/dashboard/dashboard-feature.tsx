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
    "rAussjsPecHqtabEyS5hDZFtJn2nRmLLEtQHUDQ2hs8rHZTdWthNFNF3uqmpTjkTBuqJFha1zvhffehrXucQfgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsksi9471X64eEuiZiercMGErF6F9ra76Em2yxD3jsckxAY8cqEJgDofNGGinnARV7nYgBQwyeyYdMH8S1brsNb",
  "key1": "5Y33DGNVnsg7VG8o6b5kSLWx7siHvquckLr9suQDwWrk6S28bBcnN3Bdnf5uzyQMJMpnuuikg7KiyNYx2ce4iLiF",
  "key2": "28dYfRFnLXwShjiDF2UMrGDrb1Sinwd5XmM443Q96ijev8kNPSUNDUBeyzdSUwNwBU6rEZa9dm19CdkixXPgYuRm",
  "key3": "JSMWorVovnrvsb8iAPLBAhQEmmb5GsgzasnQZLrvaiKeuk8r6qN8Ra2R4NV3fxUZ7sLc2ZeaVQQ862dyz4xd3So",
  "key4": "i6MycTz6onv3NPXKVCRWRsQshdZusd2NiRWJQox8Yn5mW1MfRrdtfd3VuZjq6mFQDxeNjm19rwpyRLttiQqDLrq",
  "key5": "2X6C333azkFScMfAft4P7JqRrARp6br3mytecxST9tJa68bBt82mjNkRc5tsKAMS6CaMW1n7rjuGiJNW2XnkAuWz",
  "key6": "3pUc6zkbsWbm7uif7nSHryWva3SG8jU3JL3Cvt7TLXij3oFpyT7oTWF4L9B63AK312uYrn2cgPbC6Kp9Nhhm4P3Q",
  "key7": "2YnYpfcT5s5mmk38hxuwPNaVDLUvqgMMsSz7EA1uUrnwduTR4fuVTJmQdHvRakCxDGFQfrmZsDNNDzmRT41xvEmc",
  "key8": "2iuLeooipBmWiDRNs7GuHf7226LxRqVEKppYf3bKRS137MYev6GJQKx1FMMR6xaBX6CsVj3yevN6vkKMqGKtBFNo",
  "key9": "43LLKdkCezKnnXkRNCA5U4RQnxAEZvGwS7ge7MkHuyybnUvSQwNA9rN8RkLNNHMeZn7xXopNjL5GZRXrb7BKet4F",
  "key10": "4gVsgtr3dXakv44zFFguGTQvuExFXX6rnKRKpwkoTawjXC5Gwjv7K9AYE6LSpKPr7zkQ6DSxFVtN2F7AiT6iD7y7",
  "key11": "PY2A6hYWTt4GRDeSNT5CRghSVJ2K5CWdoJKf6pQQ1JE95KV9Q4koSRYboBXQfZX4n4Jn1uwbRba1vfxRwF9s2ch",
  "key12": "5QKT4spKVsrZMTv2dn3gHWngtB2GVxp3zL1CQafLpAET331x5iU7PiYq3ymcqZF5MCXaTCtSGQFzF6WtSPPQA1QP",
  "key13": "2QLyx639453pt8rtY5nzm8L3GWvxS1HAtZdspj6PpQ4itSZ7SsYei7iSzVfet9o6nqEomBmk4ratHag4nScw9r18",
  "key14": "3ijyYsZvSEqxWtnHgWnyZBsDdv8qBgjF8zGV6kHsgnJPqJJFTzrfrhFY8jJehvVWVywzmdrLTv2UrWC1gbz4q54Q",
  "key15": "ZkyYzteuTBQGTAXFmeikVTsu2HaLPk4TaoZSuySKfauEUpKJCZQekm7ZFk3ut5eX9k8JobA896QveBZp5aHL55U",
  "key16": "5ZCG8zr9PzYcjFcZKfY8BdkZeFD2PXpxoPP1jJLNCt7KdjrKA6hAAsm7K2UTSvFJmWXSB4pWUGkQeJWxiMGFVdzM",
  "key17": "5x26Qmwy8aTMazRU43Qx34AJigu5ojBNNuT5XuG8vcPGQmHY7fg1JSDyWXRVJQog2HCSbc4zNLZ5ZuSVW9VwcPns",
  "key18": "STdrZ7Qj9GoiPxBBeDWsz5TJE2Mk5yM9eCjxozXf5LAJhqmwB2ir7DHBNcXaAweJoUr5sS4B3aNUkHm1T7vUAPQ",
  "key19": "r4a8cRvgKcjTUGBnUeeWnTP76wA558d5YM2Yjb5yhTzxkTpCzbHWa59VcSnqAAHXeqpiV5NRpXYruY1qHNyLN5E",
  "key20": "YsffpWNpcWWDxAEdoFECXoNS7ztpJYTwBc3ZeGkfybHQGywRvhkeK5LfQJieJSJCZFSFZrWBCiiWBDBEte9TeyV",
  "key21": "2ueXMVJy15CohSRyUuKoyYFQiTbpVQQ4CTigSFbak1fQ37EB57g1PV9bNaR2HAT2TdDDzURGxrjmCvjdtVd5EXia",
  "key22": "n11SxMshQz7MoaJsnXPPrWwCfnwQUnqSCF23uy8qp2ZpAknbnw9WGzdwP7By2ai9zyb6LsbEA72KaMAQ3VkxUeT",
  "key23": "2AMS14kKHGgc9hMv5bkppEpKRMBjUw4mPrw9wi1SQPU6KKdmYo2Q8wvuNdNMy3HFw7N1rB5mAoz6Ra9Qq6V9ECi7",
  "key24": "3eeGokh9M73VZyo6UcD6o4vPF2da4DUm9G6KsQV8mYwBPvTcZ55WuwywdUYewd7PXeXUvLXw4LohytbYoAFe34wY",
  "key25": "jj42B8AfWAkF3nL3Gy5AJbiPkMn8vMzAk6EKHUNQsGLe1Vpe2iTkRj3Ren9BEeqdFGrLrYKtqm2h1U4dKN1gZpv",
  "key26": "21xrXQbHuA9BU2Wx1A9etnbrHKHTLmgXZhEMJrXuG6SSAVjGb8GEE2tMM2cnGCAYn3UtbQmw6u3PQdyDU15BjLzY",
  "key27": "4qonfGy3tZFYvWW6vxNrTWZ538q2NhrNcQxh3uWmZGtP1vQRfxCUcM583RvP9889mHjJVPJHEw3rAbdE9DB82FXG",
  "key28": "43VGpGc6eaMgKTsThAJzuGaJpmo8PSNb22sfrgSEzj67YSzSAxiSvXNaqvTT6T1xMz1m95BBHTw4Lr2PxApJyZ6a",
  "key29": "4aUGuAaJavM2zPdKYoNLCGNLafuvN3W5Qz8fW6J5QpemRvSJmbcYNStLDcqShbVCEF4Jch85aHBcg1G3z39TCNep"
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

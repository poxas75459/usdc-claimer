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
    "61eLeSE2oGJaBiH6P8Tcu6iBdqqQz3ypKU1LW25QRHETx1FjET2mrWERt2B6buMtg68y9WPCodprgcTGpDzAYzSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e5frbAc9Btca4YUCouNonk192RAyuab6R6rnK5RtAZGcVqo9MfeffMG9Z1UxnpGt3f7JjwxqkRiHLHf76tnzyxP",
  "key1": "5Xxy7ZzTNHTHfBDL4BvqV7fbieH4Wdi7Q4XKrMiV4nLR82Auxwikz6kzhVbMYMq8KQH4eJyJKqCb9sUEHtLfTJqt",
  "key2": "4o2h7Z5gZ9T45fH6caHmsHQDf1k4ByNKUPua9mVUuoUbgHFGJ8AgX2BikEpuv23DHJRbtqpSQHL6jVPcq97GTUTD",
  "key3": "zGePKSyasCUK9sUmH9tZ3rxeKyYai5aAN4mna9Hk9M8YLtjoNUteXhYJawbG9fFRR9Xp52sptqAGHtsfB8tCLBi",
  "key4": "3NBY6Mf9YL1BoVq7XNeNYTBt74KJq61PbVHjq1w13hr3SyHz7SofKFpyqBeNsf9Cx3Fpq2rstETd6rXSjoaRK782",
  "key5": "emz6pTdSKrmPE9mZvg9P1r5pAkG8qWXftC25dLr7kT5t44xFjFDEpk8v2mUmLTsQf9iim1UdbUsDyc6GfgWcJEi",
  "key6": "2X8vgi1nS45GhT2gMGrDabEQ18MKX7t9BtwDcGUs9aE2d8Ng617AGdEWQvGRYhxabGBiz1Cm8Xf4Ykm6JquroWga",
  "key7": "J2NbBKAUcqFeraPHuTr81pgRVMb2jXuVrXGkN8gHgrqZdvwu6LCnAm7mYWmgBEKLVbSBXf1HJPe7vSB23iejknm",
  "key8": "JHZYX4GE2nuZ6TJyxRquYRGoJXAPBZWTMBpULjYrGjEGc79R2c7knqd7BRSWuCon1EYok87E7U9tPfTYjyTsQVr",
  "key9": "2euW783sJq5Xe5WVeAqXTDy8NvSFFSC5UBdQK6T6AevhbBnE7yYtnHh385MfcvrEh2bvpYSEVEHEdSN5NR7RDXJf",
  "key10": "53h9y1E7k4CGTfnGSSbTJnQbLVZ1DgBxRcH92beZ7eJ5pL7AjBTR2839HFLMXLuqjkWXK4A9vRLBNGer1RqRQM7W",
  "key11": "2V2UoWVX5YCMaeugxu2wRPvn7TGLvZ66gyNs3Mmq9qCgXUy4BfojZB1VtREWhVZGqUBZH4PPvXpKaLrurAxGzRoJ",
  "key12": "53rBtWH3yG3eSraziY8G6NQPggLX6Zgnak5w95Twh7Qan4Lb7US5e3jwyKwGx4MYres1byY7JgneJsMbjES9yWTU",
  "key13": "3hdFuKagpbSYEyhUUZcQ38ayKyg58wdPeKjm9xmvdKKamLKqiwPifeud7xDfnuRWNw2DpppBnaTU3CP8tKrpgoDq",
  "key14": "6Px3WDWKhEyjDChR7WyG8wK6uvz9b4uQto7sPJTxkFsrkfmieo6aypr33JyHGdLv5CbzNULQMjLUT9XdcH83xwM",
  "key15": "24gXHqhnvGWnkfUKjbN2qmRAJZC5G3cAJcqBeBZSscpWjDPP31hpWdY44LaqDbRnDtBKJiTDhY4M3psX7Pc8cLH4",
  "key16": "5p9DKiQFLMkKucmu7vB3MbzKkKpYpgsJgiN6sZfGaLmPTmnYveTG5nYaf367pthXKpDKy5QE1FicdKhDF5coV9uj",
  "key17": "4xFheqem2h4F71T5w3im2G9xxwSNq3RWAzpaPUhgNUaf7ehy7QwzPpQGCukUXFBbSCuaErigTMGbgBmuRJMkcu1",
  "key18": "g5a4yppfEfXUy2kLBK35SfpeaU5za6XVYGnsoQRfaYsxFKmmHBAQEGxg1EMiFUt7AergEZg39KTadRhZMgpvQ9A",
  "key19": "3BQemJfHFYEcSveSNejcs43hscRzqMCKhuYZ2chj1tf2ezKCAJX2tqDJ7JNT4JgVJjVxkHEJxz2NYRDALQhAmeah",
  "key20": "2njPLUBeeR2rr8v4MsEm9KQZnhiwzdyaPedEjpHijBP41HdM1NzQR9bFN2BiX5qw3euniSrS9aJtVLURaU3uTAP7",
  "key21": "33VvU8GkiCM3b1hBaTF4E7mqu8xA5xzVZu2YQKZqVQjpRQhFRRqwsLvG2fK5guabp59r6BHEGGPqrRtw6k6pq5SN",
  "key22": "RB23ncgDaJMTb4qDcBeRNy9cjLAsr3W7iudrAXhTMDWePQdv1oHNtKgx6nFJzskyPS6dqX3pndGBCSLxQqKJTnq",
  "key23": "2WpQVA8nM1pzLo5k9UgRsbBUdwaRiGUbwWisRg4MKbrGrqyvYPsiuWT4d99sxmmNqa13ow8bVDD336a9X7vMBA5Y",
  "key24": "5J3xm3fXA2HvywJ1ew7sZXADsvRNHqENoF2ccW7SeKu8TYd2R1863rYAAdGfzTe5Q7aDKrKZzj5QDvGHGjKCA54q",
  "key25": "2wZgob49FsgD3KGxyeu7zToWcfyN5YY17JENQjUWxqpQeu5znx2EkPbCVzC9aPUoNd8BSY1FcainiUKN9XhQvyyF",
  "key26": "4rsQHK1FXXPTEwcvj76CHtU4xMMhhb2QucrtiJPU8sC2vZRNCSH47jDsnbMDRmLP2KnUVAhb75n8qH2mrELEsZmH",
  "key27": "2tLdzuxUQfBXiDWh6BEhiqaiu9WuYrSTWfKvzhjHCbuMueJL522b9tWXWDGPbGDxVJ9m6YZ5UrWwoiSUWgYKoa1P",
  "key28": "5NRLhZmQ3xYqweUHQunSFHF9ikfvNAauNfXqjcvwH1FEh3tFpZpwii1DWvFkijYZsNACMT87GiyZMB6QRBgjCsSR",
  "key29": "3KayT922bfHph1pjQfh8LQdKQs5pW28YudbRJzL3DkassmWVBDYmW3YrrqQwiRjG2n7LAhpQvvVYr4q8j6LN2Rt7",
  "key30": "3atZ3bhRvABoJqYveC1yF5GK9URtZQoSwn9AGbMcLo7vPwbrECcMjf5oxDaubA2TuDNo7oPHpqzeiBFFLfvaXNig",
  "key31": "67K9o4ACT6iQ5NVJp6SJS27TKNAQWWPKQaVuZyj49dmsTWFaw4hjWfMZYadn5rPz5cqGhTyheaNyYjbEM75NmEg5",
  "key32": "3fNRLDqKmVNuUKu8H8mb3AuvPeyGjCeGDJXwAdRMYffRzdKKdpwEZS7fVkEKnGaZVxpcHT524TeQKVWULfSc1EoE",
  "key33": "bGYJte6MUK1WP6mDonAmZ2DSqhJkaCFbxQTPfqTY6VJGbPKXHMCp2oEGi9QP86Mv9ryM6Fzfo2dox3ZH6gHPvK2",
  "key34": "eMsCCgBaiK2dkJUwwsvgEJweJrfSCMXP5cs1jnmVLvqv5k2PoszYNZ6zYupw4rAgYsatm9v86CVMXaYyhYw8mhr",
  "key35": "4RzEGpGBJXPeBp4meXVbB78oUn6NFUT2Mnm6sLaYwxiHscgT1CMKcx9Cz6Qx71UAotAW24WvGFEFQdA68u5CqrEH"
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

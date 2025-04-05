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
    "2oTj6xiBjTeoYZZ4fqtx3YD72TMkF4rd1DnPByUz4JYDEF16fxYywXHHRpcGGrybePLYex5yfwVvVNRMoRaRL3BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VbW7YuQPGhxMEMimG9WFi59NuM37BRUPAzWJYNNxCG5YnGx5S4acaan5t1UVpYxTvUcu2bPPZJgnW8CvQq4DHzn",
  "key1": "5d75WvkD9aJLtC2vsy9DkiNzgLuYqLrQd3oEYHj1kHQyHGT428dRf4xWT8rDNRBXVC57YdDWRXn9tkyaCRZomiV7",
  "key2": "5nomFedTjxTzAu46FRwgUajpfwJ9yNNHGkv43kwe5XsxcHJ2TuxQZsD3R96qFAwUhJJ9Tev8nzsn1scEd6bPKqyF",
  "key3": "3iHhyWUHRb79XZHcNzJgJ6cE3ytdaZLuvQH3Y5nVeVGTz6D1Wv5piHoFav9581r9ajwiwB1TpcZZtWMBJU4ZPZRv",
  "key4": "ACUHrubNM3zWrC5z1cBkVHqAVgPfeS6DakbejG3PALec8a344ECup3jpDm7txne8Gu4UMELSsYSSfwG3LNnjTQr",
  "key5": "29nUgucSH478vKC3onMPPxE3AZAM3AiaYUxztZ2MWPmLVtz3QQ75YqLzh6vGr6FcvdKjgyLe1K7ePhqBn7kkiRP4",
  "key6": "gJnaM1a6vEUcSKdLqSXWSVkzvPb9GFgrWYfKdRSKsedEovzWqR2BpXUf5TN6r8HjivZcNqH7pzeb7e14tuZxBXa",
  "key7": "4u7qUMLcYJFu4LYXPSkUAd4qqgQTF6JDLXP5z9a6f7PZ4ML3g6cfpcqDS6KmppFp4rnJrc9BRJSK19SZReRgcojw",
  "key8": "4Vjk2XspphdgxufhjfC2jGms9Rkdfr5k3tZ4mrfuvnmDWPWHu92zLFBpmnBVbi192GhX25BfnMWa3nqakJBnrkLq",
  "key9": "5hFCgaQH7T3HKES2uQHMWTJu18EjshE9xiKpvXtf88Z1jpbz4LwVQGe7p2RyLTYZvfMR9tvtNwF7kCZuVx3h3qX6",
  "key10": "3J4QcLU71YiHYCKwxrvjEHQKNvwQHxi284W8cKQ66yarq9kZdhtFnuhTVFqGHEomBf5hDXu9BzDUAB4KdVKMemp",
  "key11": "5tpmviJW3VtAwkrPDBC1NVV5fPDcxgS8yPMvoL2UcjHe4w7xTNN8VekZLVD6hirWxTVesh5cxErmihmSb2Bc9Q8r",
  "key12": "5nYbvcqHbaNbraGfroHnwQ1mh4BU9AQGCmw9PfcEWJ6ybaWJLG8DniejzYGTLKe2CybWp8Wr6FZAzr9TCf5cbWiG",
  "key13": "VUYjP9WujbPqrpM6oRKWm7uGd5AwMWN8ZimuqMWhtYw1gQR3qiuAtDXZumeECFMzinGnVx5n1TwACudrQWbNqwx",
  "key14": "21vfTBYov4b7FbJbX4n5RBFUL9F1iKcKUn6wx1Ahd5c3zK28ugaVdh6BtwVmVkxvG2rDNRZiyRMehW3Dv62s8TGL",
  "key15": "4JpiQvNHwK6ygDQYoNWqh9Gshn65DRTwZ9H7W5BWTBiwVPeCTHjRbYcWFifEdB315hEZXYpuLNRkf1wRtsAmgBAG",
  "key16": "27VhAs89G2CySuWkHuHw5RCvCunYbfAKj7i9CdHE63HURsqTmrQhVTtEPv9NZ5Ugwtoh41a8MyGDiwKzWGKDe1Zm",
  "key17": "4EAYizBmCGmQx5Du24FFdWgXBXRPUPbsyb2nQ6DkLmyTT7TA1U2JsR5zaaoBVaF9xxuUhqYBu9yDSKMgLieoAj4g",
  "key18": "5xe8MaiHieDLGpdak4qbuSXDdS6Vfihgdy9DJzPoU1D5mzp6T8pajxf1hnhmn1bsHxTEV1ihSLbR5bcYdkR4XHoZ",
  "key19": "3QheyFBt2aXV5ZcDuafz1tDwSb367U7B79pJ7yVkxU65i8auHRkgUqbs4TRKHTMTXD5HBTP8fcLNKVkbn4HGy9xR",
  "key20": "2DoW5Yxjs8c9TraWH2JDuARq57htvKudz7WUbVB8ro5MfdvvLJHRukrxHYWNYBo3FMTcPLskARRrrGV97tQXS7MR",
  "key21": "9RHqVcoZkxc6PVStN8qMgru1QgoTsr9rDGbKHFrHYDFXE2Zjsd8nv5ocHaQjbbSPuRB5UEqP8UQSWq3eb8nSX1i",
  "key22": "3WTU35TKQPkVqCP6Qyvjr6TTqKvfjNTobNX815YC9WKBwuBpntgixiaFKhDZpPKWr5WTBUfMAHR3wpUxASnK4dyP",
  "key23": "5Jq17HrdjvXZ2Ru8uzLGGQ4J4f1eDrSx1iWPACFpfpanqpoZ31dNsFewVHJV218aPrg3428Scos7TnJF8cZNigf",
  "key24": "42wysqJdAG5arFkne5PHQjdp2fjw5vDkUA4ww8pyZ3etbZw9rRkEfc2CfQmzDejnzgEePw4JeUbgZdwQdUMs88bM",
  "key25": "MRrgSbsRbF9yDpvZfij2ELDoGYsBswBGdqgA9hc3SFxg7KmJtzsWj3ePFvvM8jY7GH4CCAKQrDPU1DFi2P4n2yc",
  "key26": "4da9JSUG3oZYtMo6r9V8jRimo8QC9KRUjkUjrxzNipR4BLiR5Ba2ugMDaehFGh75qAjKmpWvLETdHAxyVy5Fwsa",
  "key27": "3Hd1Az2NifFBHPwLFtsEXsNGqYZRuCfszopeVXd8Lb2cmUWa7wsvAEssgy74opfhRFaCVfzBAbqvu42YVnung3C1",
  "key28": "6VzLGsdLX28cwNbxFpevGg646Bf35JrHenb91y1JwSJ2k81av6idx45GJ2cPEDhTjhEjj83YeSptF4ZcWKnoAte",
  "key29": "3DeFDDTHKHnWSvRcGDa98rWmKCcX6Nr2pegTS3og6u9KYxdM3PEVMyuYJGnkPNDB15pwtV61F8KFBppNFC1ghHYX",
  "key30": "2weEEksZhqai5xm5gFCUHoYfmSJeQYnB36p6J5zLu2xo8KhziQbQ4teEnW99XBHCHVfv9gqaGU4Pbp8i1k99GUQy",
  "key31": "2zdbwsHs6dWAQ2Aw76pCxB1wmNjtUTBsUWX4rW1MnwR8V511Rz4Ac6MqPrhyXbh9rD7yWfSk1o6gsE8Sc2eDjomx",
  "key32": "WetVy9Q82oGsdN4jJwBtBvgqVouBDRotEMVhzg8vCM6apFMSiKkZS44ybBRcRWTTLEQCyJKdQYB88fehVzJm4u6",
  "key33": "4BRdnP1AAi3XsRoapm3wh1cDzJMVQK3JurVaPJuzPnfgrfocp7sPEY8f8dW6h4NTUtdQQNtFX54L8s3yFyyYRtxJ",
  "key34": "2MET8ZEkADZ6BjGpvxyfXfDFxiJh5MwgjQFhoZHz1XbktpvRUVMDNM67HvXTT4tPJLhhMxD8eZ9Y3gSbdQBxDaHq",
  "key35": "54SpqdiNNX5hsLwWtp9mdLUs2x7rTr3vnpEUY2fFnhTNA7Nwa7umgFaCvq89a2uTmbS3z6sVsFVk8YrUaHmmtqks",
  "key36": "iqa9FR8finGgQ6S7DNrhKJ4XfcrHnGqf9pfGWagP1gHfVwsYvet3rRvKJj42o6MkYyvnWEL1XTZ5GFmFJ87zq8z",
  "key37": "3DgzagMS7NjZCZQNknkqHEWVYMjmEC2vrcav3pvEiEASJdwpfGYzb114RW8FX1iG8Km1QLJYgA6WrW5tzeUsTA6M",
  "key38": "QQBWDCA8PZmuVQH8oLSpEw45qTEjCEF5iaSy1wiadyWuV1AmKMxxjQYcdFXi2TfjYEv3BjycxMDEDzqpNgcqTpX",
  "key39": "4dri3XyRrtHTgHgfeu3phYdz5ZWcoJn2tPqJpwhNzBDyouoVduUBWoh5VZMGBVQZxovg5iYXBnoibDpA4gWHC992",
  "key40": "zttBYRcUbcjxCX1bsZd7Z7FDnTTU1YczP6JjHwyDwQnYnTsHVqVffuFFnBPfMNXh3AqgbdbjpabSe9K4ARuLJgi",
  "key41": "g2nMCb6XGQATdtKEh9U9U9EuVem43gFz43qj1vs8JQoCnvQSALKktPHTEkqTUNjK7ZJRtv1W9nzggK6KUCFUP1P"
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

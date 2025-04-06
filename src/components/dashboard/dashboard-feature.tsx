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
    "CJURJxC7sjjS45skUEy95mvX2oNHctbzGWn8CdMwHMHAAUgR6FUkPCCnhPmH5DXFQzmhDjMeSyRYeHFRnL7Zc94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEMZse44V9mwQSmJ1jZ3x9J59qansAy1SBeH6DcXYCLibhBf3Z89chiWt62cTAGV6BksGm44r6iY2ofEtCwLh1i",
  "key1": "43ACpbnZQLs5e6W1Kkgx42R4LvF7PLYEEumvxKN6yn2BoNxfNZ75sPk4tUCdbFq9ihVBDLNpUe9GVXmWAzYkFaBq",
  "key2": "5hN96MMtUrQCormBzTKAGNdLg92JT8yK8rNCJiVEVXFsC7B7AZG3qRG61yZjG7f7bKsCTZriVHwiTMRemswTn9iG",
  "key3": "62sxvtGHJcnLkmG7VLKDXnZNTMxyFFf94JXzpEJWGwDPCU8vrzinSUBAmD22Mz1PiFcJZ8sPDRuGhbx7V245PxqY",
  "key4": "49kwNwa5GwBijZ7s8CsFVUcVPipuiNL1H5UUe1qAnwfgRCYK54LaCyNHGK7gMze4v51UGVT6SdjYzUvNaGfBBmf6",
  "key5": "2x8mDHD6wvzmNPb9h2Ek8GpS1PbWt5tpe3XkiCppXcHxXGR5KWc4a1sEJei5ZJiJEbL5ZdVk9SP2LypiWgSJrgnH",
  "key6": "22Ppxgn8G9oPau9GELRqFzkk5XJCD4QF643DUm55bYodc1YT4qvT7K6F5R3xqmsBESVoiVc7dFJucK4h7sMuXyRa",
  "key7": "3wBz3G6KYAYsvFp53SetxnLC8FyqfbyhUNHVZg4SWaLT4eZEkCis8KKdHbRxUWLEW835FGxXR4iDpjd3cpWe8ipd",
  "key8": "23PG6gDUkyxUgrAF3zYcnoudb4DKrwp43Ny3sxcRBVh3PCeMbYHNtyag2VzNSZRgncygub8b3c5QYGkww5chHRjf",
  "key9": "Tq35XFwuv3M74tjkByXaqfZ1VmzpjBGn5MAL8wX46LgE8saYdnDssYKszEZUitT6iAv3vaNMeGumZWW8RoXqcMd",
  "key10": "CjzQhjrL9azDgaj9a69Jc5GsrLoFjksLWx97gn2LJwS7BTJbA6c4tAjzzaGNMVdf3rvgvfn16akckedNLWohvyy",
  "key11": "297NFvzvzDdWkzx2UyjQQD4pyGCw3vSA1iUFJxhgpZ4JQxr6XM9n31RGnrcxYUZE9E7BC99QVWmPrMYnmoqkTG7H",
  "key12": "2Yx8cdstFLb4PmN7cyEoepnk9AK61pEBSjY2XX6ePFVGP8S8NjNh3k5M41oPnGu8u6CgV3o2gVWXt3mdAi7DdNzd",
  "key13": "5VmR6gxoAM6sjho8YbJ3VpGGmeQ7Rb6M1fm3VpZ4my5AomQZv5Xp8SPd7b6VGFvN5pVcPEG4S3eeP1eLjeqq3Jew",
  "key14": "4yxf6C86atpNPRHjLmnn2AQg2rDJuaN6hFdKNJKLX1n1kHWLUiDwChWABp7d9R1gEj4ADq7t86kyewquHHcdS4r6",
  "key15": "5mg3CAVtyczvzdRt87aknKBn4PqPZoRfYCUAdtd9dpPH5z8mSBwwWy6DZkAVKPW4on9FaX6Pr7jQcetNPuFBXnzw",
  "key16": "397rK9qAdZhMmgqTK82dXjtTN2iqBjQe3xVLembS9svGwKFHph62nGLjMVoQDAcT34PN61orxChf1gKSK1nhn5ET",
  "key17": "38PBjzrv3rf9qsVf85pfLrTcU8Sk1SZGwfyhR8Bj9GoGmixhFJLKWaocMk87ZdutfYxyYsCVg85tdPrT41qH6GFP",
  "key18": "5LfzaPA4r1iQeFQ9heVeysnXHt8aqjj3NJnXCyVRzpjoucZvDqwhagrrXG7yrGHr79m5DXSehCkgYyvhZPzavarn",
  "key19": "36JzxHZjbPt5z2xPECgWWAeYk7vwB7cegqRxqezSYTaq1YQbmpZ1vtPwbcQNiCqTbZjY8ANfaVUFgu56cbHA7cVr",
  "key20": "4KM3GvhcGYEbeXCmiDaQourzh7s1qzmUR5BiLPAoF55DTYaGSifi5NbnZG2uj5xjAyjmxdwdwpe5TSdmjBdumsnZ",
  "key21": "55gpJtu3RwQE4sabKJ8aUqpfiWr2eZQa7ECUovmzVndAv2QdmsnXqaH3b1MkXm4JRDBWCLZVfQAyxUSxyFXW5QUb",
  "key22": "3aH4dGTtjqdvSMJaSwbjFtH2eaqXZxVdhBJrxLHba1r5F46Sz12QtNpv7ic1kxkwH7zkDvHVgEJs7r6YqrgEq9LY",
  "key23": "3qg7c25HJ6zN6zXpxYLkcANzFiA5HyYBu1bWw5EWUrYFGKb5jdvy23g8TsAuWwinTNuANk1JRr4TayQLZi1ZFDis",
  "key24": "26jJMg4HkBGWGkUYiD4YdkX4vAKpNa2XaATGrBG7nmXZH3wSZ4K3Lf2XBHjXJ5rMC7xWJQRWfBWXWb8wXVEdDuQe",
  "key25": "3i5d4HXKZELMTrj4aFsSf1Qi7QHfBxL2fnfriLxuy6hZpZAGDZa56KMV39dyTWCX5akS2KBprkuE84kAUpRCXtXx"
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

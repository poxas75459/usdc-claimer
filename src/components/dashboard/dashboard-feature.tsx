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
    "3BjWh74FeYcwFKh1tpUnsdntB7get2Coxa2amNkkN7bg7VpPxVYV6xmihzqJpPNWrWa5zDRmpQKhYmBQRBNtWZTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6D9vxH3ni6ZsqKruYQUwXBZ9ftZcGBrUwLBBkyhi1qhNBBuPZ3D1JryVvRBRhP1zrBM9A94zd4yZwLHFUn2vmD",
  "key1": "2LyvfUJoRxbG8CNMr9W9AtAPr4tZJQzdK744GyJN6nzerDvmug5rmstcn8vZbR2JTMMmkQBMLwo7kKLAnhvwSEN8",
  "key2": "2pGF4M5ihi12jgsLBeQNAs4JBFuiSk8vRjkPwdUXpgoEb6FhL27yDxYPnSmHTtyEE5xH1p8aqm7Tk4mLjUcDDkbp",
  "key3": "2HFo4MnzF5CKGo8xjWiecK67ymYra5Ln4PEr3sghpJpebYTMUqRwxZjY8rmJkS7KUjC4PNh4bo8arTZWmDwPUghL",
  "key4": "4g781v5SHfyGL27tA6LN4Co2pRPqUntUPVPiLaraU6Ez7xZMgpM9nuxvBdERntxpjYy6C2fjXMKhfHLRPtCneRVB",
  "key5": "bGkYrdzak2ASySwNC3VshcZR6sHa8xfxREb5h9ibGqTa61VebEBvGrdGr2Q16rKZkyy47YynTDZfp2tw8KgqN6s",
  "key6": "9FXGrgvGpvcDaxsyCEDj341aSqihsV6psdyP7yq1G8dbSWJhpnBShpGwVrzoJNv3VzA9Mvw9PKoSMureFp94Qpq",
  "key7": "5m2EXYHgaGjL4b2LAJGCzkq5iHZCv5ny93vjhu9xmGfXhDPamBRUR2D7nZSzKG1dXwNWSDEkcEosdTBDCubcYNri",
  "key8": "4cNKyzuCBwsFrs1zVcnjLjJZd6QkkTybMFqnN1iAPz8NCa9sVHsD5fLkioXSXnJby9pRh5fikxCW4QdC8oBk933z",
  "key9": "24NoiWqaA4GiDGYB83mfVov6gGxHhswTjSLniS5ezU59Uqr7Yi5D2ADqNZcAxo3NPpsjFvrQcuYZ1f5L6T6rp9Fz",
  "key10": "655qUqxCK1me6FYwCT3RT4HqekosMvwEfZ3gBAXY4XjszQz9RQK6E1bNBA8HHzByc6N4bU5tZe66ryjxzYGAgoo2",
  "key11": "4tz8de8aCDZ9jwnAPWoPc6FoUKsTtJHNHmEbzm17Lj5PeyaMYANmX5BZbwJ4eBYpAW4jmCFXbQzNu73n9mUzQyjb",
  "key12": "4z9nQpu929R925WjtDrnUKxEoNnxWded5fXcf3UtqDnkfzmugEsQkMmFs8TR8frxjrnPtzUdrwy3Hn4yuSgLpyFu",
  "key13": "DofBwAj1ygp9dHE5x2Qahg899mgixd7yDph96hKJnHGbQu25vVy29PTMmf5NjvqqYbSzZEHWLpvViguZajTqcAq",
  "key14": "4EcjqDgWJA6joVraBo6yvnaZipS8z3yBbTWZaNuLgSzWhdiovf2s1bjEjQbDYxGfYsfuE1gq7ckbRairwQPazaJc",
  "key15": "37g3aZEojjVgxWyaUHupMKtWwRGtPG3BrqRQTzLuKi1RihUZts5s7pmQBzg8X3e3nT675LgDweKfT6xVBSdzyGxP",
  "key16": "45hieGqZKXYYABBoVF8HbJaLxugWUjQyEqDCjyQJgvmsLuWfwBtSUuEzywYtJte63fNhVjhvYdLSS8DSFWUUNZYR",
  "key17": "2CQft57j5U3jJkKDmuxJztzQYdwb4q4mGmShgMyfhbgCm6hUURNKhHvjFTjRhn8RbqoDF74DUmkwjYmU2VDmMnPR",
  "key18": "3vL6akcTZftP2UYpxbYFirJwKLawXdbMVk3W2A6a4w64c4KQURbo68H5qbehuBTioYh5cjn4xic81xnC4uc8aogL",
  "key19": "4nt1d76qtmPCQZAYQdWi7mNVT3dfGfdsRgUCJzy8DSRzZ4kVA7QtwHRTd6QCmrwvy4xrPr1DHgQ6WhtJVYVofyUW",
  "key20": "4SbtixirtkXgzsB2poM7ip915mLsbFYCSDBhXrxsue6FBpskmQQVKxdJP1baifo4jE11XQKVyHC93n44mQeXQyUf",
  "key21": "4aJdBmR5Ps4erjVAFv4AZ1Gx5bMUnCZrcvqXrr1ESRSkyLd3mgqtQtFMNbgbieRq2ctWfyiGvsv6221PDCRZXyzf",
  "key22": "3hE4Vzai3RadGEqrmzSGQUr9uEosrYxcAsrx5yzpUWbq3G5RF2iBEvuqCnCPGMbtcuvC4ysScnB4mCbdtrgYFwnJ",
  "key23": "3tjizoHopw7ev2AaGX18FyedpGdZhDKUa4JwUfxJoN1cpCDkR1om33DUdHXND46nQKa8qQ2pB1NcRotrb6iKPvpq",
  "key24": "27dJm8SukRbfn462AreTRVswBhM6JpNiXRUddu27a2VkbQubouzbnZ6d1Fo1uwFzon678QgMmHnskoiAob5xYYEg",
  "key25": "5ebnfFcR1GBX83dXxBDDv3y1YVrUNLJLxErYPvyis4awViMprBf4YodZJXBLvUkggqVcbhTgnsyUNF7pDB3dEccn",
  "key26": "4WxNAoDXezhYEeHxZXLzcR6ivCVUpJCgdEUFyPCZGj4PQQk4Rvm7fimFiLk1VH6eH6Gv1WicXhmsEPvvQSiTgTuF",
  "key27": "2Sdw9Ys5mfom1PuQhtepLTH4CJhPVCRpMdsKRWprYGq31zqyh9Mv5g8LUoDCGnSP26wyDnhmgvq3Ef6QM1MMYL6u",
  "key28": "5aAHRVhJ12p8XM3X2BeVTHAG7EhUvFC3NdFBcGvwzB1bdv4iAgL6Y91HUMgkHKNziqr2usdouPo6Nok83Gug228Y",
  "key29": "2K7CtFevZDshzQ8Fu9ceMQk7pMNPBW7Ago2WT1nzw9L2zKBbsgiN2nwEUzt5YDtBWZgSXXex6bxU8eYDQyBsFGPp",
  "key30": "4HbquSU5L7qtLEDoxK4dVE7banpNZ7szxEGZFiWyRifj1S8jDMB4wMpVgmpVpSvDuke9zqKmD3vQaajM1fcM6vPi",
  "key31": "2iqHPLdrW8Mrfh7Bw6AwZskqFteGds1H4S43yUMazniZ7QGQPxET3qGNAA6rHiFr813ZVRUVCJm38d58F5fjoqoh",
  "key32": "4yQLWeCFrDE8CE4qS75jafBqNukZ3b96L5tZXv3UE5AfjjCpaDsokYZmCBnv4uPFmhN7FVs2R5DfnPV4jGcXwZCd",
  "key33": "54KWrUtkCcMQ2bqgTRJiZrEqNwStK8K4KU8tKzUsaDWAnJ32r3dbhuKv8mywXiAWLQthfDapVke85sBfhYyohikD",
  "key34": "55nYYEdVfb9URhghFagu4XVQTjhM9JP2z5PEAWrGGDAxXiQG1pWxUEYLtzy5sBhtKJzNJtuiMkXDCCHeVa87Mwvu",
  "key35": "5usZ9JKwVTiVmdRFHpQ7NY2ZJrfe4nQjoWDkEx6fQZqWNZXNRRJ7GjXMQywg6quSvHYsSUHKpL5Yf9qiuLhD1MfZ",
  "key36": "rF2mqDDVPGhUQiuMWwzRWTtEta6Hcz77sR4dYZdMknRrYwExnCS6tMZSzHCzEn6ATcpgg1d2Pv6oygyJ7cUGbRA",
  "key37": "4ZR2ZWomxeGG4VKs2wt8Fd8TYpHk9DQbKVpBRUwwS6SGHikjybXhNm7g37iDcx6TSnpRCgep3dBKQfXrJCdu983Z"
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

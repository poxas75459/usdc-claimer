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
    "24xk5YM9ukMCDgsEd49as3TmjuPmxG6ufWx2kDTa3KDT6Q4FNqTix4QhUdrjU5dVsNC4mCyfG9dkTFHjxLgjbwDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HgYjjcxD8HZUpQ15BAjf1fL1oVCjTVQ7fHyg2MvyetX7GH7Hp2nRXr9dergwc2aKrCF4yuBTGQqj5no9xnBxQKN",
  "key1": "qrHWFhAzXN8vfV6rGESgHb1sbou9YL5Sm8FLemBHmtiZ1J1c4Tkp4S97wxChfdkBDUXhhMhKQogwywMXg111UJx",
  "key2": "4UfzV6wZh8B2QKg3zThSmrdvwCNYsCXvoKZbnQsViSdUTe6CZYdi3tfGbxPMHC7TDV1zCt69xebDsQhssoXvBupr",
  "key3": "2EYyLhG9Mma6i59nofX7rfZcr4TWw98DqucsvaTnZkFackYXzpQ8K8UXrpr2qPQXgrrxJLkYAVtRwsXs7s9cZayN",
  "key4": "c89eET8v1ixKAGAXxEQEkZmYZNWBwuxGRka5omTf9f7kWrGe3tkLCyry82jS7xW6k13NZ1QP7hPs7bS1EtdwAPy",
  "key5": "2WDFL4gefWjpMRLJe2Ti7pKbXSk2nB2CnnkHuSifyBjb4MKW9iYWrfXygSYrJ1yFGPT6SemL5Bk56vHXs5x3UdXf",
  "key6": "3LdqEq9kqArqcDfdLyssjApVrt5YZQ5pqmLTHJDKifoPZiGCUxAFexmzW84U1p1tA5ycG6FDTpBT79J5SMZzxbcc",
  "key7": "5Sre9STew4rZq4gCYbaNdLHEDeZ3DHSiwdCDfPvMSSFwxeQUmSaTRg13A49y4Ar5s12WEAT8bVae9pWUaSRM811C",
  "key8": "nFQpkeFsQhHJiUBsoKPhMuzWKzn8JcNgEWoxJrJm3YzZTPPefWhA84TMZsHvbiVuy3GRsaTNQif7ZNpQTnfBgnA",
  "key9": "3XFvDuBKiGJZGg6evSzTuzXm4oSTEw4FCEWfncvNGYP77r2VLyzG92DFYQ6vwHchVfsDxZkuC48k2M8DgiGuW8rf",
  "key10": "3LaMX4x9sCTHt1rkMTugyt2TrDCYrZ2zXu1KM321XztjJw61LLGU9GuqWNtuQFM2f31NyYwUcEgAFEVjnzmhMYZN",
  "key11": "4KDBY59TU5iwD8Q1Hk1jYGwpekJpWKo6RFbw11PCjUFQPZe5Xbt3DbnfYu3vjweJwZZ7sZFcLhnp8s3w8nTkwwp4",
  "key12": "oGJ6fyWFgzYsxrxdF6AnftBLGiPpE4BfPjcW1rBaLButyLVeXqSCUbDBBoj6NAVMVCoJWATDrLRYLyvzVpP4wjs",
  "key13": "4BKHjfqrTkGR7sX5XyXzgLPEHhXuiE5Dj5fza9jvwxsE3E8BuZPdWVAmL2dygttKVTPq6JEs7MJH8etZjwwRwS3f",
  "key14": "5CyLZRqV8brA7iUxqaUUsiqZ43Dycy29eKsAkDVD5SVgj2Yh95NNGwm9PpJt84Qmo8zAgEFaBQ7Wvqg12wU7oCgD",
  "key15": "3CzpHJJkvMuVhHxSeQcU3eJNuqVR2ukAw2aPhiuwzEn4zPtEDhkD2pDFx1fLn83eQhmpVEFuFHTBmS4JmSAXMUgt",
  "key16": "3D6xMTLtUvZupyKPQiDrWTKXMtkuXAt8DqwxZZnAxiiZ1MuAph8ZCe84UKuELj1Yoxo88N74mUK33pY2ihfmWATT",
  "key17": "2KMUgr8C8EgysHVCk1oa9og5Mg6JP7BScYaouPV1xNwaCvzJ5KvXzWUHpJmFjwGxujHNz2mpjdkTCXW7kyLEPMwj",
  "key18": "2V7FoAQM3EXGZWNTzqnUKH8UJLDSqhVNGgjCBkpL7suqScVM4FerC7iYxf5hM6yrp9su7Hrx1WJqW16gGRG6vvcw",
  "key19": "3Y99ndK1h1xgLeTTvE8cViBZyNyQvA84tQWBSPGm7yqXf7vjZiZKGiJWzgWHCiRPm1cKRpZbeyghZ38xDVuZFLDb",
  "key20": "GVUsph18RKWe6M7YtTcwMiiv2kCD95uExrTpy9no4PoThS5x5oaT3uweApQ3dP9D4LoB5QJrsVt3fJPrbQjxCZq",
  "key21": "2gpmqPAsAD1dJr18x8nxJjAkBtvsmk4kkWC8eSDdC1uNsiPwCA8DzFut8fczs68fwLeaKApnQVs2hRB68e9nj45t",
  "key22": "5j3jArSxiz1wYhMtqpkL29hoGa1FnkB2WzKRZcA3epXSfksRZt68igvnEZY4Zz89KBw6yTfefbKadGA4xnzGuTYc",
  "key23": "38ZtZ6csxe9XG9Zm5nyuzPdrSHtxpdYV4ZLknvXWgbTjqHv21XYEHABV6SGUsNC5R4xPa3EA8tqa3qr1NUFfp1Vy",
  "key24": "5cBVFkzoQmfrNQVvmvX3vV8V5bymEF5Wk7i1pBRELQVXm7nCJckMcnMFVz3Wh1LJZVMBgNuPssZ5uBJq4rRPGh75",
  "key25": "4J8rY9pdE2pxSUpG99E3WLYbeqymHXY9QaMNfyZGiVc27EtLqbb54AcPYLNL4kF4rtHaBfm4nKHZJWdgLuAMVXrn",
  "key26": "3kz2osHxewpGKcsAUP6ZHQDVCEBa7xPoyzYAPP2RiXJytefeZ8hye2QVWVuiSRiBZC6LCcqPexe77ZJxm4uLXpTD",
  "key27": "5JJbDJXJ3B36M6MJswVecR8LvYYZFhTALxGXhYnHG5e6vyZeDde7d5ePhndE1TcHChnFze9FA3BkqG4EDifLJpsx",
  "key28": "vpMqi8p9hW9HTT3tQQV3CUHkPXgqvT3qkKbrS1Bhrk7StgqR3jZEuUuEM3tyYGzUUSf1vui6hZAmwDUiXz84zP8",
  "key29": "3AuqxXGshHqrwFmmwmDpWz6PeodqvkFA71B6yEmjCFeEizBP9BWsKL8a4ofCnmwrJQV4iGpHrbihirjBFFKm3zhJ",
  "key30": "enMAfHPeLk3ohKfeby9GCDXAaRggYnCUEpPoaG226PReXQ5bBdSGVPdbqiaPn2KvXZo6sYEEDEbFaPiTjrNwsgA",
  "key31": "5625d2kGUMjHkHHrsZ1hngXCBzYCW7DcF4p1eoxeLhiYQYEsLYGTY1gVMR5yFvBGFEu6nARZkYZ1hVT5xkxKx5PQ",
  "key32": "eCkSpAQ7kvfHeQCRYtpWMxtjacFjcHvzWe6j2FkWirUVX84zTJYK5SMwdQwr1f8d98w5giWVhm7vGHDRoD5bR25",
  "key33": "DivjAYDoxQ5Tob6GydiPm2UcbKjL2X2B5vfCHNJAU3BCFDTjWaZ3hckBZxR5fjBA61VdqKHeT72k8DbZieXNMgi",
  "key34": "4TUuyF71bwrcjVTGCoTjJQpnd3d3CGFJ446Qd4hexgnJvja92UWb96dZ1vnMUCaUdTfmmbv7D8vJJBVQnN858FKb",
  "key35": "5w257wwdspPhk1XQ84wjVNJiJX5yCJMXxTbmuz5dVTtPSGYMPBKUgNVx49k3GZSnRNPHnPR3QKL6uSDh9r3FEpFF",
  "key36": "4wory2YZVvLaokQfW12WYSTbRAdmaw8G8mZb9qku5M71Y2pStGKHQvKhvA55oKuWrHBBAXAmxPw2mr4uipnKarhZ",
  "key37": "u7gKDCiH7AeHgb7LDbSPrb1VFbEfW8v2z5xv2BMNEcQWpGtYZKnTydu3RMDat4jsSgSJ2JybXGEYfSErD2SykcG",
  "key38": "27ai7z7D9XKWfMYXHc5YpoziK6TWzdhXgF5bVqe9mDFQnvdq7SjJGhYb6HyNWr8cNs2MW9iZfHKzCBbiMnD8WXp9",
  "key39": "57xccMSJyTbFwjLQu3DdiFModuNCSNq3yhgZZPfdPvKLa4ThdjWyexbDttPAUNNRPrbY55LJACoojSWD4yhEndzY",
  "key40": "5qCATeissQqBwgUAEqygBMjMxTh6HeGB8das4JZcRJAgbr4qyL6YDYDfAzNAxe7reFnemwY1ZB3qSBXikTDuZpWM",
  "key41": "gemVnk3eYHCepdgjzjU5AVoJZ8XPmLTHGgNBhNf9bhSiN3P9xUSioMcNHDprAxPZc5A3TtAipfkB1vXrVtD7aQb",
  "key42": "2GAuKvu8BSxPdWf6LXqbePhq4jbwAu1tPrkxhwMdvHyfmrfC7BCgRHiNpoksCARfDQ7KbpBL2tWLVQ4aMgmXqck8",
  "key43": "3kcqaCz2EhfuSzHdpwhSMGKXoLvoG6ot1N6BHhscyoqjmJ8ytmVVEonvoqf3UHe1dSTNDNaQnMZFAd5ajtui8RZ8",
  "key44": "29NvFzZPTm7AfFVMAhFkA8zMRp5qETpMTeHgtHxVwkU2nnPXCfQYjeEKuvZEEexXnpQGe2zGtQxcBSH65P5G9eoJ",
  "key45": "bteurr2agT5EDDBiYTJLnbhdKGTzQxDRcCwnJ6QQh75Ut25mqDUhwk2rfzaE1kg4EVTL5ojxt7L7EAXsvkjUFYt",
  "key46": "3w5WvgcMDUaDiCWxJkTytUnuRa2nUCeyoU7YfgMX8kpYQGg9QNfs3fnzSWsWYTwjTmh8gK7kjjWmAzRiRsjoBKbM",
  "key47": "5t3fWiGwxGRjBrxczpso9FTBybyw7i4N3XMGAzXruVnpBKc2TjHSDqUDR4AKM6fhonsPBqdSwfaWWr7B94PnAmz3",
  "key48": "5PCEjSL1FEwYiSqDP3165pWMQxn4ZKsxR9cMkRxFtr4r8ZG1d4AKdFz23CW1katbTQHBdeFpo6CihZGwjFgfCvvS"
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

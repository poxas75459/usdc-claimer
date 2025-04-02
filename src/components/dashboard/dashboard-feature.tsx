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
    "4NQxURe1XjDtKwwG1RXE8pBaBQYsRtJB45ov4dNXn6trXrPF4Fzq2A1m49RGQAP5QebkLBevmpLAEJMPE6WQ6vaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yZhvaD5hNiNZDNKUFtcJopnWSTyU4QDUs8wCjxCov56Ag9NnJn8GQhKhUKTtiH1Ng2wYGR9gBMKT4aa4wxkS2sx",
  "key1": "BxHp3ZXSyqT9y16NeqruTryKYpcYYmGQYvYciKFPcP3RooodUqmvH828ErU8645SZSKBZ252Q2pcpNmuGMSRnHH",
  "key2": "63u4ADHGnNDTwsvQ5xLaWnZVxCuXoGm6SBhopmLhFHrFGoBVcA49LuuhJJoEgUqv7qWiNffQsnK2323JjxyLo9fP",
  "key3": "2v2TBGRChu6a4HHaixz6EXuyPZuk4A3U7B5SZMJKwWkMLoZF9s6bfWFeiM8YnSRLmmdEZTWmgV3JeDUUv36rVbSw",
  "key4": "4k5BkBAVYHbYsMBbPR7kZE5cm9Ub528W6DgqwHz5qkQ1wZ4CxGvrvw1Dg9t5tJB92hHwb4Y2KFTzs6ZByARsTiCx",
  "key5": "2ABqGJDEhcG9B63Gp4VYF3KJqbgMfkp86orMMTHYknivBw11NeVR2NasBkh4Xxtj4e37WXLrBLxbmbvdyjsx5yz6",
  "key6": "4U5tWbmHdR2iwwqaR5wuwmz7UY2triLYhJRxd5UVo9tuvowEEMTpQqQdCtnnkxUh2aTfPbyWxzadNCRbYFVJY9dN",
  "key7": "W65FadA2XXiYtPK3xbCABiQXRPPwmYveDvXG6GfFhbKSYLbuNtsrqNeCZcdpsTpV1eDTS55ZPx8ejJgMv1y8pi2",
  "key8": "q9xKMY5etJwHjc7ATo1qFp6k7N4Z96CrRY36EGePYnVQw7wPWdcKGWwakfVeq5LecmfiDycyBh4Fjo3aVXG8a1J",
  "key9": "3NyZEPupEXzQVb55uce3cq6rYWpsV9tEfDn5dwt5bcWYeKktzyvYsjouw2rzSqmntZxexZSeZ3wLf58QjaCYW3G",
  "key10": "4ed169WcmqnXeW4tBhYTeYchXUYLHcYnUhEhErFBQ796piVHje135dk8RCK95r15ZxuWUtHmpxSVvfa8EidUdRpr",
  "key11": "3SFHa1n9TAYdMG3PZruBMiprDfNLxL7Px7KedaYqk54Rncnx8HFoNdCBuswCzdyvR6qEEFpyx6uigenQk8rjt8xB",
  "key12": "2tk6m2xngCvG1ER4AWuUPfhM8FC4RV1symSbP8LVXH53TvRysfdrY441gCuEFmcC6DNp1zBRLA6Zxc6iUFVjX46y",
  "key13": "59h2Cm4MRMfmNXKWDeowgZ2JrVR82hjz5ZFEb8NCJMM2uCF63cb4waQ7nJ6CsYvrjjPdCuEvncZ8xBBskXFqf8U2",
  "key14": "5CTKuxaxQbCEc1ruQyNChM1pzJfZjserdHE1ES7CuxD7fgfnDJNyhKVZsiVJ8kMKCk9FCAjHzmgejYWhk7yAd8iX",
  "key15": "LdNb6GpB77EvwwiBbe3Mtfjx4rinbNcPhaqUePf3GQEmcHPTThchBSb14UxYZZ85kqnBykLyE8JD7ev7TcUuQya",
  "key16": "2tNfX1J79htekn8JJEDZManaif8gs9A1p6BUbAHubxHZ6fZMoy5Pw1cmQDK5CjhBbeQ7zradHsqrDApVHCS6LWHn",
  "key17": "5xHJz9JQ3zqnnLnJtErftuoBoxCkxWkMteELsigqU4TEqnEkxkGHb9YhhpVTgXZ3mG9VYLLuFZnnEYuYuGejwvyW",
  "key18": "mnVvXS8rFihYTGBRoNdGaE2Yc4fE3oqnhASU6ffF3K73rP9K7PYxwVgMuJLuxUd38Qh8kH2Uby5SZuPo7ENRqLc",
  "key19": "GWPH1DmYpqX1K4CRGqjGUGZZeMTAxnEmFsVWYVCLeU6d9SEanY2xf9KonGFVdRetRjoBT2kiHeFhEHGV1AxnJsi",
  "key20": "5GW36rTxXb8wELxyLbr4kmu4qBEH241a5zkpAmbGx9rWnsd2CL6uZnXt2zRZCsDwoJpk5HitVU2f3Bca35e6o7MF",
  "key21": "4zZvKsXvLVkXVZWdCXRP3BrC6TQjPYAsH42KBjHB8776UmQ4eCA7pHPPuPwNyEzAcvRJ1oLU1HxNMgzb3hG14R5d",
  "key22": "j8SKzPmb4F9rivfREXpVWXFyv6RzY7ELhTsAvjj2guTN7pCo3RJucSJu6Fzotfz6GLifCKR9BcF2soR3AJHsUnm",
  "key23": "413uiXvpruHsKqEps81fGoWJQr4Y4EokrH6zZTTPAmLY1XEQGvvNQFp1oDbDhU4VtkAupTKjmGKrhcCDp4n4zPnZ",
  "key24": "5qcQmYXeEoBPuCeeWX81g3wkyKjW6DZS8VPEwxPrhJT7GnX91QVSU666FVWvwv59sUcmmpuifa437indSnkMCj3P",
  "key25": "koKKN9KcdJ1UZunobvpNZxMR2NehVHwWWHR6yNsrzxR4jQcudUuTKy5d898ajJwZjJMjvLRU6fsA1VNARbAbn7K",
  "key26": "5CTsSoS232bPoQNtqkANBKEvmPmVfYkpx6aryiUnwgFENv66ZcmcBQ2LMt7kYnBL9G5GquAL8r4mQneFvQHq6uGC",
  "key27": "3kFW1tWzh5NqBPwrMMEh3MfFvpDT46AtmV7U4Ep2RBbc8GzyYsoAF9PK25f7h7AxzzMQcwABLYJaMd2momaLYwdk",
  "key28": "4TYBK7NdVZ1sjgWYRPofj6tsUQnyUDCtQtYNy7px7dxokxYSnLCPTodTJx6e4Gnw4sXSy1ks4kaF5y3RMTVBEPZD",
  "key29": "4ZSxP87BxTfuPF52aduZuhEUcYsoVniPrwUYSM6HtNjGFf1KfWLqwreJexuG4ufTrLC67ohQTQJtrQtQQP3hKALN",
  "key30": "3tfJvrsfksVN1L8YnkTod5rF9kn7DC3beLkxQVvbzpi9yJ8jz4ryybL7PT8ASw9e4AqFh2EHwLmwtmD9txuPF4xQ",
  "key31": "43NrMvvuEQ7J3v2x4RvBGY3rfDhagDtPQW95LZZJGx9QNirLZKN3UydpCnYAjQdvubYuXCHAzNobrEu1G9qkTiDD",
  "key32": "4TvUBvte8bnMvz2yZHjy8HTWfNbdLg3mdpoXmBYrd4QXZALiPst1PDaTjsYYJibWcj6MfnqH1zDZLQ2oNwZp4KEH",
  "key33": "37z5957UMMiEHjqmLf6h9MMkawHpoLCymikLA8gsio9ng8Ziz6iRLfNKi4EdBFrj1wU5BWtgbzVKLUxqoRsRQ3Zw",
  "key34": "3XuYL8fpN4vp6RNYMA9o5vH8GdkKSTdzRdbWrmmZS18wvC5oDZg5mwpwzVcSTrouhgWC2FRuvW86ydSgMrqXgY3r",
  "key35": "xShbDVxbTahCZNxPBSutJ8qsGD2r3wuowgGxuptofAJfz2itMD6EsZZLWDmpP1tJNcqHdmwoPLzPpDGM8wo8Dtf",
  "key36": "2tnusgDGsX2PGaLFwJzpxD1wAaDmvHCifw48pS48rP5JNApHNdFzxoCPcnLrq5qru4BnrstFXZQsDAcHUDfv48W",
  "key37": "2AKdF3VXhT3oVKhn5Qf43TCwcGrprdQV4ja2tXwiMdFNkWAdTKfvByFoJY1k1Kv46WCXoskHeFkvpiUWnTzEUj3a",
  "key38": "3VxcfFBsEqkevQEt7m3Bg4QUY3qpeHz3byHbXFPaWNmBuTEySuu9KHjgUENrUuVRWZ9JjkBLgBveMtuxhygYKBoy",
  "key39": "yoL7RhLEDQBFRi587NBsfisRPQZw3eLxCM86ZwWSUDyquMpJcpoFhTWnNwxSfF2T8XimQoU4TTRUCXgMEQYchWk",
  "key40": "5zVPAezLxuSxoVtSU71cR3ofZ7ybAKnBFAkWPXT8njycgvc93JVQu9zYDvCDfu5AHipQkUTdnZ9HPtfgzU1WL4SU",
  "key41": "5eHJ8XZ5A2iEiyPiCoHQjh9Rou5Bxb4WYHVrEg2ASkEhhtRgfAf4mwWVdioRKyzWYsBzdDUonSpyh2b66m7MuEmX",
  "key42": "2jEQhUEwUv5EnQ4oC8Z2wqJHyX7djRPvQhtrqMw9GjwRywoKbzazVjnH99yBuR1kF8k91ATyr9kgd7BrMXfyrRog",
  "key43": "3soNzKmmgeWCCK8M4bhhYGYKBSmM43kazCFKTW8RXKgzNXgUqD5KAqRAC2PfSz6vAgLucXiB4U6UXBJKPDRcdn6Y",
  "key44": "hEJmRBChvB32q9g2MsuRcW483TPcbqzRzLn4ei2FWxL37m1A3hiJYtQqzAjvKJxMP2s1rDs95rHqtDhuDeJaoKF",
  "key45": "3Mecp6Tbijjm1GhuwmcvJrVZHRpbP5gT7f2CHimyoYNq8o9wa5Ep37vqa4dC8GeCA4AceGc8hqub1daNPAydR7Zp",
  "key46": "i3YEiB9EcRUpug39iuaxLj7vtoWXt63QXSsVWdVAfUD72MrZzALrbVvDdXzbbqn6a85z4vSC1546m6L6o5TJg5c",
  "key47": "5xmS3hRLW2EVh9mcnAohARphWr4VGyS6Mkaqv1k6STEPvyRs1ddYnq7NwU4GVXm7Gu581yANRGbhwQye94Cijbz6"
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

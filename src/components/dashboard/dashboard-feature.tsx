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
    "5JC9F7PTMJ9gEE5AiHoVJQpv41KXSdVdQuK4rae4RkioKhv3i3zvmvb4SozXSm35uf5o6Ye5n4vejJUy5Lp4e5cF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwP8EwzVmKx18Z6w6HxoEf3VBJdvZC9e3iQKLWjg8zXTkpdiCzMvxdj9HXJvj3u26W2K8TKHd3RdTifcWXrPw7K",
  "key1": "3o5sNWXLupY67gcZ4uymMtZk9rqFMYn3smTKPX9S5KkVW9N22rKpcwTLBYxPDiRP784Wmqr2mFFYtWjA6k93mVoz",
  "key2": "2CCeRiHNV7ZBdkdsQXRpPPuXjixBKyvJZrrqWusTVpFY6YUiy6o9TiJ6LoYRYeunTcfeTPh8PrmRBpCBymwErCss",
  "key3": "ZNgUhvV2sBSvvaq9R3EgkxTHADSsVTZY8i1yjSNDxvAyn5gjAWCtvsUmxEeKVf9hNHfTNDD6pqUq7mQJWAEZc7Y",
  "key4": "2hNqH8EKdghU6zXqAiJBRRcj73t3zbofRnWQCTnzf2MhzsyoGCkoxsekcgtoAhfv4R6oGrr91pkkG3PeLTQFGYWj",
  "key5": "X3xQYqnAUgkLXCxoChJHyu5BFLQP11FDGYJNSA8wboVjDa8YcbdpeD6rLvMqLsUAtpPopZd9dcxSvbFUiY9zeKt",
  "key6": "3YEJ2DQtriQjwJPGCRM4A8XzSnBTYU1g2UnBhDCyr9erK5te4tZ2RKJSP3YbeLrv3HjhKfRCP3gXxmdwAxyXmRkf",
  "key7": "3qV2qdCYcjpitrjtk7K8CVzXUkckXkDKM2iJevB3fgGAd7pKBbUMNp2JCei5F3UJ3858d7epUScYECF4UK3Xc3BC",
  "key8": "45FdLT2rVWJY9oUgLa6fuJZdc3XzWa35APqrawGbGLLzJnaWrNRAn1nCPg6bW2BJcLMRTa1ZKVpVWxoR4RWLCJi2",
  "key9": "3w6DPR5JiFq95gyyfGfbFPqSBWpYpoPYQQdpypotaf3ko5bZebt2AXiEASvj2617mWFSfQGcYXejtNaacdSmZ8EP",
  "key10": "59rCN78oWnngFnYohAmZVSaA2PBqUoALEDS1pTE6bpPUJ9HWtXhWvBsEZbvwNqJa6pHHVKz1heq1cVo3eppThvSR",
  "key11": "44JgKWCiethdzrqwierLYzyppP3QHU8K4G4cJqNUrRhDsUbBRH4KoRPqPtdxB4YzaTFgZs5HPpFk8EsAj7YZyzR4",
  "key12": "2XgqsutPPuXQNAPdd3YZG3r1GjDts9DoG9wqC2BJtM72mA8ST3BUNMrWbd8N6awWnxk87L3FoDuY1rTkpiRWhKF2",
  "key13": "5oyvd3maNZS4HRkA8mkANkEi4YV4zrBQGEFrAdbYpPrGLrorj9Hg5spkbrwMr7pBxNpqoFiW9CCKmTs8pSa5zg5p",
  "key14": "5eZnr5FdzUvJX6FLmjAKbxW2j5V9V927QMnUf1p7GVu8S5LAyW7pZj4fuFnZCboAnAubYHKcKakKptm92W5pVhgQ",
  "key15": "5w8WTekw73HL2NaPETG1ESBiDr9R77CuBQ598hcoV4DuF2kdwFKERaouZyDzq5K7hSjH45s9LDsd9Sj1mv39ez6N",
  "key16": "wzuPCnft54YHMGVzJCogzD5yFP6LP9EkWyvXxdd11xEBPC9ip22NQ6YwmVD5TYnwyh2XBdn9FGgsS9zqPfyBXa3",
  "key17": "4JHtLW3RcgkWitpeqPcfi2YLaivLbe2XuLf6ykgwxfU7PGzV3VfvLbFEp6kzyNjAnYcjbhH45cNs3GRbdvjAdUH5",
  "key18": "23k59DNXzRpNzpT3MDG5btVyv67GatFeq3jUzbhLHskjUG5rt3T6ntbBK7EyA88ZcxMLRKKM9EV9gZd4bdNYeE19",
  "key19": "2JrAzuujXoZbZawxRWpoVGmnr3osm7kxj1q9H39U1C4VuFvne8MV2zV47KDj5hiSe12v88x2pMh1FTta1jtcemr9",
  "key20": "iPtFy3sPAULLxVr3zcArQpruH6UVS8XCE9JY1goJWJtHuhktYjp5LRKgQtkbc1RqMuukLkRBiQAfA3VZqdMc3q3",
  "key21": "2BkiczcKnXtgPGWn4tiKAcvQjrVVAT5WqSZCSntxr8X6RDK55DaCnB8AXynanx4e9yCJymjXtSh7UKgQ1MX159VW",
  "key22": "4zX9w5nBpQBr2inKXkgK9TaHYuNTHoY12N5yV3hCNjuzWpD7Z9ojkCWsj9niGFq2oHtWpjSYJhXREA28yTLyfccM",
  "key23": "2Ay19g37pW2r2C89eN5fKFa9Vbdtt4oRECfTDdevoBM7uscJAU9FrAEKuJV49qPL6t81WYUHYvB2xpDsa8YVuFEr",
  "key24": "4AeFKjiHdvmM644B7HphTirRJsc1XDDj4PkgqQFHnwHUDmRFWQBrWCDmcYVZPuu8fz4a6j9rE44zbtrq52YJiYmP",
  "key25": "4d5jyNqyeprn5Gc6XF13uMmynVGoy5dTUfKk9LTQ8MuoKPDrrvmyhc351127nmy89DjGxgo3vhkk84P4aDNGMN6b",
  "key26": "3DYf2imGWGrANZCFGDH1epLEiAjdS75aYXCoa4zXjwkJ7tTVgEDyeMe8ScSZktxE3BL2J9oP7ri9aFaXS51VJCed",
  "key27": "4hpBb14PkzwRGzfTedwzTycC41dzjrVbkUnjnJAr46yVtdASjuKDLnJBAAh3x5DjtErrx6zxD43581LFD6yPwuYx",
  "key28": "5RBR13wC7DshADzQCkuP6j4VvYAH2TF2DVz5awZE9HgcNibKq2WBPTyhJ3PdFGdnVwLES2MW62YftMLHaNfKQ3A9",
  "key29": "3HmyKAjYyeyvBZndNZBUhQojsdfkrWYMFmgNCopyeSSWTAdkDEpR4aTqrZvYEtHZghFeVU8gqw9omx4vD54agRdD",
  "key30": "26jG7QYgNAS37nNBBiRwP4AVkF64U9aso3w5HkusdTseVzBbN8G9FPqNKMxhUu4skHNnpkKvgRccAeCyX8Te2TxU",
  "key31": "nmwWstHLUdspg4MHL2ZXSisHojc62yMi5yQRfzCk1r1nsqsHRNX4ssj2zVTirHJH622yurEMTRAo9pKrPPpTA3y",
  "key32": "2gKieANgv2k2enatf9BimXQn3YEaHA5v9kBYCGHXTmtuGEVzbNsnLh4HadGtuFfHvTPLrAY4cWtvEjyszpNYNupF",
  "key33": "2ZhMqP7Bm7RZ8hh4fNkkmCioXhvZuQXo8AvbXL29HAR1JR8MAZZF4fZ1pkuGWeJodgPzZiUTDgiLhU9MYRV5BSq",
  "key34": "3iDDhVofGNTgFZZiDkejZdC18oNpUBKjJ6kUhxcpKGcQZwf2djfsUQp9PnDhPEU8mwJzFPJ8x9vXY4AaPJKU7vtB",
  "key35": "2o39996Jf6ns3HVBLAGGvZ7dgYRaojHdnBN8gPXEMSpVX9TdZbC9t2w3mNphmyRHKsBsv9omsjDJiXBsdQ84r6Es",
  "key36": "2mXPETFYeEVAZU3Ff8Y3U6MPHqDW2ppfWHo9ukE4u96jTHy6Sa8zP87CvT1EKhEXNTKiWxAkAv9vysE7c1K9t2sW",
  "key37": "25SQgtjL3gtwr75WV7bozi9o4MQgs2KgHhLfSfQMhqm5TzUmiN3DN43DWKd6sj8gGLTtKJXoWHjZU8kZ3PDCJELh"
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

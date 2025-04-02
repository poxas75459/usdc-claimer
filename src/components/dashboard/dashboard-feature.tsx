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
    "4nNg9LdDDBho6zVqmiTVYcdDsNqw7w59t5uMfen7GneDXBo5osN2SGhamxY6aX4wvpEmgY81rDFS5gKVW44oAZav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVTqQF8T63RWcxAMNfHgr2ikRVPHqMzdBNV28Lo3nXSFKSJdntmVLjNN281Aex3FJJ7mZ8o21jmnH3aqaycvuM5",
  "key1": "6hSf7ARfeNd8CH4dZXcVbunMMM1ZoT5yBqTp6GXQNZ8Y5Aq9y3u7HDj89gzvLse3DgogD6G9NhLdvb6234aoarz",
  "key2": "4fQC9Deba7nV5y6mvUtFR7rMFNWyogL26aBSttHBr6remj9NVGq2xpF2JLfThn2rKi1XLWA4RnYusinUTkvXcorH",
  "key3": "4fzSAijz3k5gRmXVeNBS5wfjxTDnbWZFax9NRBA3tWsAwomG22qDCob2SbpRK7yLU11jKKrYZp1zeENRXDxiCxEU",
  "key4": "4QNHXJfvXMNfkZBBwU7CcLn5GKgT3tCbJZF2V2oh62f2zjz3L14NuQAgt74fYnmFGRjFbHhdFpxmQwAjcnR8emaJ",
  "key5": "4d4rksmrfSaSpTXG2fmPBZJfQ1sqjPVePZVdJwN32HWb9J3YqG7X4B4Dkvvh4eUx2mdi2qMMFweU3WWKWRhJZFcd",
  "key6": "zqZg6TnJsqHgWCXoBcrtsXwuV3Pf295CAtpHbJidaoMS6UT99RhgoeZ18ZvpJLaF7yy6dx5cfTXaVE68yEU9RLe",
  "key7": "5sLfE5JCAsmsqurWDaH7KYSXwgbPbnS5YYqrj8uanLpoYwGFaWwuZacY7DtfNkHP1Fz1MKnmrF5WyN1yve6ae9oi",
  "key8": "5L5KGymLAximhmdxYajKDNgJqhoYtVgVRRGX4Zrk7Ebqcv6uM3odh24BjwaCmqmc9FTu2iS8Qutwxwgp3khBZvwk",
  "key9": "3u9tJELuoFmzoNMZFKt28ZM7RN21n234yJkG4Hp3eL8sH1Zuyxi99z8fPsfGmtq2mLHxzKLu31T2N5AAoDJtwHUL",
  "key10": "496zZU7pXmYDtiWXwpmND9ZdPtCMqaKwwwWnC4i7FseAfyCgf3ZEYFsoARdo4Z2ebm7v3cDv3JTNaQqxWvx6hjAz",
  "key11": "28aJEb5kbWLv4HUG4tDfm3w9mGCrie6R2utJJevjYMcFygsGym1ZgfJ5qhLXoYkmwQhW6ZHutTTz5F2H76UK6efn",
  "key12": "4rUfjJZFtkNmsrcd6VfkFLZVVi5oTjKR8qge85ABnAyCs5zVdCYwLLJEhXbhKBN48LTBHanwe3pW28ksHKubfqfP",
  "key13": "5SKquKCXQCcemzN3FiBtxiqFEaQPCdmbrN87Y3HW9aXMxdam7Te3c3MbgLMQeCXZS1gD1r2omfB8L33AQUXCNNZt",
  "key14": "jN1eZeZo6jakLuraCzAngx8k6UNMD6uAF6g87jZs31py15yavZTT32zowX8k1nCBfFHDn8PWRHjSeGGUorUeqN1",
  "key15": "3eJcZLMLgSzV6hCVCxs9tM4jJFxbhXy6ccc2xBZcKLw3SXAtBVLpGqMFcMK3d2TMCgD6vLA5NsqJuZt7Y9GZCo4T",
  "key16": "55pR4G4E9VNTrsB8LAJFrvyHwpqCnZLRuYrJKykfMwLmCNK4A7AeT5f3e4s1gP6gwiYuR5DecLEf5KzhezRcbkBR",
  "key17": "2WixyQC6AtU9Pmf9UxtUXXJ4SxPfJCZ49eJVMXjvuVXMc2o76vVdHHSdUZSrFTgHhK2WriUzqno8gSXYEQY9NnSY",
  "key18": "tCmdJnTNAq6qyCkSvXnvCJQfosHoGC8SZSemoakgn2tqtUvwtKK2CjbJGr2gKnw9wZktPwXnyU2gPYvBdK7KXkb",
  "key19": "4UN8RV4jQWPx296Qyg2w7ajsQeFpKWmS1trEbxtzx5fEbwfJpqJBSKz2sM57btQsCFHVHNJtRfyZwsBbiaM5CV3b",
  "key20": "YX4wGBmTysBFeYi7D6b9u3MmmPy1LpHJX2mrzjmt3FszYas8JBtc3q5WJmJR7RoAsh6QbJhZJWEjoMThnrCnACr",
  "key21": "DP8T3DznSPNKa9t9uQpef2eGjWQ837mVAb8VvXUHbnpxvTnjYNjf6bvPx382S6kwGsvU7u7PevqFqKj1jUd9C4Y",
  "key22": "oTcx51kf9brArYgWawcjZfZEKafYDXsantuasam8Yf3tE8SYF244BYKZ5zVVgqbwvo4Ln8hinPe6E9qzAcYkhxQ",
  "key23": "5z5NqkNVDRpz3B6y7LjAwQXcD2DGCbLZgLPevphxzf5qSKGgVS7Swstok91mvFsvWSMoHdD1HeqgEiWss39jXifa",
  "key24": "2FLbDPZCsVrwAgPa5wWZfGQyCAHxmKHcdQQ946i28yTRjnkaS7FRAnh8MneoqfXZjXhXCu3yr8jC2KbzcXcps3Ny",
  "key25": "AezrEusrQFoKiM2KmmjAFKbQHzdWPimBNnMDf7pnQrX3DEjq22sy4eZRL47Bm1EYukJ6uKdCXwo4M5FNTt5fzbQ",
  "key26": "3hEtQq7J339ZTiHf99XgwDRq8oRA4xLEYFjq4z2NWei7QdyybErU9zs4tCAAFoug7sYQYJC1WP1DLiDYQ1JGKmZ5",
  "key27": "2vjP3qCjRhgANYo5456Sv92VSA3Yx3W8TQ6TG63cLhpHxbGyNrd4yGRGoVuKDK1oaZJtZxeQZ3mSHg1jKu6GFdCw",
  "key28": "XF4Lmcx6rJR9vi1NfPM2zuaBJZTsnewxifPTcUeHKsFTUtgZhhx84oZ9UysFTrNTEpheyaeKb4qDFDDirCgioV6",
  "key29": "3NtGtsp7pZfskTzQBtjEkNN6CSLi4kWsx6v4iBnYg6cJ6vvEruWvrXMCnFs2N76wuma9KjqQfRZFK69XhnHrUXdo",
  "key30": "23GKyV8oWwB4uB4aUus8FM76VEbwANYuikpTxNvye2fow4TBVdYF6YgiWbic1g68S2oyhubDK1yL4cLASDdKCKVw",
  "key31": "5gXv2dA95WSn6pQPx463t2o7cck8xrd3jZR3KYooTG7K24HM1ju39SHoUwbzMsnXarCjo5PXwRMuW9aFQqLP8Qgy",
  "key32": "tn5ZWrMPePsJCZAY5Wvv296MKi3GsJSqAU96GJtGMjA53vGmAaZ7hjZEa1dGqk4PYYU9FMeWENEL48VRVkyUdmZ",
  "key33": "5o31WcbysEHNQGfzKNrFMDFarjtqhQbRnBGm3yP1H9KRtvdqthNEXhdEXQnGL4ymsWAmQTjeiJWVPZpwonisY8VP",
  "key34": "4FqtTabt2gufzTwwvBCFPs8CzWyCeBFDPimTgwJ7R87FnWY4eX3Hf9Wcq67gn1p4Z6w9KtQrWMqxKHdgdHQGmfH1",
  "key35": "3AHSEHkhMKeNenEeW3mBsjshNrCLdbMP1ZFYKexiVp6Gb2kwenXeZighfRJbRUKJf8j1v7vfpYSSZ9NSGAmArDVK",
  "key36": "65c9tGiX97tzYkRi1FaXqZELngpVGETkEf6Dcr84rpYkxFPhQZkeFGipL4whRUjuAxGgsRHJxR2RCAJCwGJchKJS",
  "key37": "58fjPJF3r748vpBNsUx6aQfSgTgdfmejeASLQ7GzUoZMk7JfqoD5ENVvsRvknw7tf4wXe5vUXmXdFo7s4NDSPcmU",
  "key38": "2cf8F2sGJFLMGiRYk4qm9FLyQAgcwtyQ3p84WjaTaAWpL9nijKs5JZTDxQfNqDa39p7xuJ3uwGjcfT6FMHXDTHWh",
  "key39": "4ze6cY4HQycGpDLVXygZoGMqPFRzZBtWkspqZMYCxz3uok2bb2aJiUN2U4ydvPumhoZKb7LhHws282Kz9tEmRVMN",
  "key40": "hySXhCuWxcBErFi3TJEravUMiWhPfboHkyxKhwgKKLxHSGzQHFK53NXzhETChTyw1N1iQZSe7uyF11FTQR2BQEU",
  "key41": "2eumWpDF1fSiHCDWobPac6isQNpAe3dHKsaPW1Cs82KUFvAMHAKa4gyFCnagi7Tbhvvh3dFwzRogFQKisxddis5H",
  "key42": "4hY3voB31Jo3xgKCr8py4GNFgb7wcwHgwyJTte1td4Z5HAZC2BLN91mqUDLcyx2nvzjaik1YSYnLb8TeXjJ9FDAu",
  "key43": "5j4MrVKcUrVanxDD3FqmDumNFZrh1By2eHA3woQxomoyDxWnxCp8bKxhcX8mNdFtkvFBY4nc4HHTFFy95x3taKX8",
  "key44": "5kWLRv82GjqvPm7fzBmpqpaiB1E3WMzUAD619J9P9Vy9VAQU6d52rAGRzY4c6mKQ6RgwKUHqH53eewz3QUdYjKGH",
  "key45": "5DVEiSjzwEBqVtYvHeSpeZ4gsE6C19E6XGpRzXj9b44igVzdKP2UJrva7KtLEG1eQFg8FTNMFUwAuswaZHif9dKX",
  "key46": "iTuFU4u68ACcavxkAHb3KwZr2ho4BXdUKh7Em3DkfXg1a9NYVLj6LcCLGHkK4sKF3cv1egZN7hjZWDUdCbnx3Xw",
  "key47": "4wLCf3EomiP6dhYdGNvs8TgR4eVuQvagYG1WjVchYHr3dJHsCd53P9epqKhbjrxMs1iiywZKqKpYfyrLZUjbakBY"
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

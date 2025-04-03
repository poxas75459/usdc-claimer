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
    "xbZwCEecwqL4MVGcFqXxoZEs5wGhxsALu656FeHLsAg28Ev2F7SBxdqL7shuPKuMvTZbf2ND35Mi1mSBG45GiGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5EKehoTFsb7hAds8MreD4j6gyXgwCXk9ryWRysV1jQeyvzRnVcEcHEeCmdoa374bwBbudLP5dVmxCdjSqxppfu",
  "key1": "o32pkCFcqEHdFqb2jSBUAWbJSQKgZG62KYmLamCenGHvxA5KmvHkJTCVBoaHHHo4huJKNw3GCbZdWfRWwpjEzKz",
  "key2": "3AfbqKyBfxBEqebmeweZZ6xj679VKq7d1EsGNDCUhddHNdH7yit19rYymqHjzv6dNHakbJn7qPVwjANn4Kd3MvVS",
  "key3": "5Dv8Q8Bfj1S5PeMeYTxPUBceUGLQNDSHyW8KxDWL5wVhLyaipWpQLs5MNPNcZAyttLhbfRLbVqoDtT7Kqq4wNj1G",
  "key4": "2VuFZ622atemVoGwDqzr38LMFKxk5bEGJvz1rkHvw5uP65mqaFpynba7VwJi1jAWqRSDqPHTCqctZSjBqeFEeQNb",
  "key5": "2Mf2wgG6sP9sUEVMk1e3ob2Zjw9VoFKCqvqoGdHZgRS8RVRhufQu46CiJJHudH5wxdLf7LgfWxnJhc18x9izu827",
  "key6": "5nskww1xf9LZCT1FTZWpiXPGuKcmL8u1HSKiByPvSNdi7CTAZbwDSzpdKaUcgwWw2Pb1qcJkuiwzyPmiZ4ogUUrF",
  "key7": "4sjQ3kYKiNyv4RQZhgvVSEq1aCFfxjWEyzQxpibnVs9wuYjq7RcSn7P92mCoTqKh3yCBGvQypmcBH9yh1oeQSYZY",
  "key8": "25dpddYDDZshRfwPMfzDSEvG4BbZHWB9aNaWokerm3kr5ExpGBhkpou5jpgsnU79atrW1bAoadAZNtiZxKfYgWV6",
  "key9": "2JkntzEMwx96BJrpyywKB3wt6ySzPFqbnNGhNkqUyQxqtzQG1qRQpNErmFYG2BKA2VrgYFbjZSX5KZPE8PCPcvwk",
  "key10": "5rF1DaZgNsaTQzjEwjhAvcg5x2jZqkJEfM6AymPWMRWMUhUeTd9UM8vrtZ1sH7ft8hMizyGf16XzMpp3obm8dohX",
  "key11": "HWHjozKN4gDvWzoh1cpaba7nNT63oTNsDoJ9sMHDWGBnUasyMfRkLxCyLPqbcnBWEkXpmMxHKWzVbsdRNEzGtBi",
  "key12": "33eBm6SKwJQ84pLUrd8eXqK6ixChV4CvgBu2vCtvs3sWy2o5EwiVfAA96wtH1iyBMKVuP3ynfvckoxm7aHVBmWvx",
  "key13": "4d8rLpiKdLTFL54WQqNvfgwbKgqtr8mKPN8GVXhzCGf7bTBkscVb5U88eCjTVALtLcKk2Fj4L2abhjJFYGey9BkD",
  "key14": "D2CWTL1sZAnY8jb3GaSRkZSdTizzk5e8WcEtF3gz4AwH87e5RMbcXmgZrFoRjHNc2YJFKizxCXiS5Ty7qtW7J1f",
  "key15": "3cEiv9UPY39g9QRWzQzBgFf9MrWj2FBrzyXUJWJZcdYwZt3DrbX6VC24YP2U6acWmZj95WAW1MRU853XxhHtxW6c",
  "key16": "2vGc1VvtGXc7CEtCDunpwFQEK13vPDA9HHZftivsCzDXWvXpopa9u3gfEnZdzNyRKzKsmTJp9513M8QefgmHzPd",
  "key17": "2YDMTsEGCbKKEQ6CYzssW26pDcEWV1Gz5GukNbQaWMa5WNbKi2ueX2rJigYQYvMeMK2F2trF4wtAKy2qQaQThgaf",
  "key18": "31JtgE3XB3FMBDNK34R6tbqqAqcNCA9PYiCeUcfW9oBRKdZ36c93D2XXUQ28eMPvXPNbqqHCmsZ1mU6gyXzmxi8y",
  "key19": "5EmygRW6XaM3THDCPzE5Cy2TqZrNHySuuMZynL6TWU6ZCqGmpLnXDHzWGYXeHaKAA9Q13NTDMYNJxb24YAgVun1i",
  "key20": "N2JH6qCTgBy9MadwitNfdFVnVCSPfqjrgoYqfLe3uERZAvbB9wzgiFaTouXv5pNrAM2eJAaKYpwZRgNLSVirJtg",
  "key21": "2DFUtBy2Bg4WBbnkSv4XsrnNwU7gVVJwCeCf18qAEQxPKVF4FfdEAr97wTG8XEbBKMXZNa8NLbMfckLccjgfHFyr",
  "key22": "3zsidaR6D6FodG1JGF9LKDqS6dykUa37SKZrp4fLEgSWUHnFhzdUoEUAbNYpYLfkHxzR9FysMqiG4iQRQ1w4ZQse",
  "key23": "5BqZzjpS5FN6wLgAWKY65Ym48ATdzjbibf5gKjnkyzcfJ7hfPYDy1cz2bD8o3ehYeJwx5D5tSLabR8aV48D1GWgb",
  "key24": "2gDy5EF5saV522GCdEWaFN518iHAn3batjyYPjZpMWmb47R6pmUrzTMoueei83i3S7iKjQiFnN4xfzmdw15JndYp",
  "key25": "qQfGjKLGxkSSjun2yTo6pYfbV9BB6iUrW8FE9VmKXC9Uk1xv9xanJzqaYzvCh4xAto7NkWT73rL3aLZABHe6cup",
  "key26": "3JXfoEoQ99Wow9XWrYKhL232ZSCETyB2nphuaYc9JH91E4ZpaJuX8P6yS7vhumt8xMx4ktyjAdG6P4RVqQEozAX8",
  "key27": "4uiYVk2XuiRMV2anbgNwxvD7o8BHyT8uE3B2oFsYehs4rUERmwUjFKgrPXBAe6tCdP8xKRTXzmR9aKm2o5suk4zm",
  "key28": "4rsDLrjXj2vA7F4eVpaojZi8tMS6Pgxj8RwmJ5jpPUdgYHfkTYXMPQqGYqPvBMJuTaUzzdsjiQNDW2ddJMb6zAN5",
  "key29": "pEkCTaA1ZH95xrzkxtVPunC9vtw4VMxoGBwfF6Kbtqae8Tkas2ziVWW2pWau7m36HUm87Nwf6xEW9XKzPGAYZxX",
  "key30": "5cByaU8Ne5AywDimichnWDpbLPTj77LUYn4j3uaP1AD4m8dB6jkPyu7ZnamkCmbwp4hmJc518tQn4rQKaerc6sNN",
  "key31": "4ARZs6hMbMLMVUx9vNNSWMS5wG7rj3ourooM8jiXbnRnXA4BgCY24oLi4onfaPdAFoByq7oajRLkBjaVege4MrGE",
  "key32": "4x2E4LAJ7M99YaDstKkJMxh4dYyDhB5fDX5HwbLLRS2TVr7vqjG4K3zENqQqwwFAKmjtfRDdmEqFRwXQwxqdgRcT",
  "key33": "62C36fpv6LxcRRbKDtDhNWN3Q6UpsYNZK7ep3mWxZFLjgQrtV2fRKjD3WjTDeAV18dDwGApQgrS8QVQv9bDK9abA",
  "key34": "5krYTdW7QgYE6dyijz8HAFjmwHCWkChaRdBZXVGoR4YxHaYZ4CqL5DtEJoncGbdwxNjKGTesqzLWvnpgu6PWwDDM",
  "key35": "4x4SmsDEeoecfgVCVm6nRreUEmHRseG5cp5SL1WSKvM7mWqKE8QPZJ1gnPYtS3jBcj4PmXyf2tAVFvXr7jw1AgR2",
  "key36": "31t2WaCqMxyFwg6WPxqgYwmJ6FYHoBJdSR2YV873CJJoLxPGWivEqeHZdLYcLreNhygWnE7DufupMdoY6fMtYDRP",
  "key37": "2JhMi3KsEfANLqDndVAfzZpnYePx29FDN6Wy9uShn6y4ATW8KL4d7LpF6TMy49bivFAafbT5Aakoy2Uuy9omGqPy",
  "key38": "4YMXTDAw3cp2RMzo7QtzffcjKqcZrAhRweUFbJ3mfMqbmQtuX36ycXiuhDk6bP4GS3yHQxaAJEpPmzcMGsWM8mv",
  "key39": "55SJo3YgohvZsGCpFbtGb8pMpjGiqSXy5sCfpCCzUSfW2Rd9eQJyHL4JZZ6Stbnbns3FBfvBod4sM4GHYtj5PKEF",
  "key40": "2tSXiWsuAnvKCjyVtbmyhW38xWa9fzHDp3Ws9KG4bJ5VBwZwftPuoEjTziYEQgSXtGKzMGWWnJFBkWja3chDBQRR",
  "key41": "4kreyDmDLfsjpQ1nNRa73RNiXzoXgsF977BdKixARCBQKj8MF5NqyZcjM7gCWZMikzAiJ8tEV5fmWgZ1mbjT9k7y",
  "key42": "3pq5bBhiNUJSZ9KdQiFzCr7xNyAQiLvin1GuwiZgwHE3RnviLfv95X3wcnx54WCtXQ3bj6WzkcZfwWmAbwD2CZ4D"
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

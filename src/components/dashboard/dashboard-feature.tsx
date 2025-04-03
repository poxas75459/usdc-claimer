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
    "RCfctfQt279bZgba83hci41EAHExnEDciqpFRfrGpXMz15kZB7d7UsUCMPaLMCPPxDuNNVnddC1ByLy5f9TTVeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgtBDi7uZDcV2kC7Sr9iLRR9VZ4FdC3SNxvMmDeQkfrCg49byv5YXPXmicW3Aq3jMcFsLMci8UT1ZDNJVtXb46W",
  "key1": "3x3Cv7RkwbhMaBjMupCFZzSF5ahqucv3CnF41fthLrKB2VrU3CTXy9t2APHLCDWXk7gkhMopxYfyBqdN9fqUdu9d",
  "key2": "XMuqzCULe5bTc69cQBpNuPPbC5SNVzHpanVmpe2DWDDgctcdjAohqKx7vnq1Lop3pfCinEFyzv7jiUGAAYXPg8Z",
  "key3": "3TSMtvKhmdxvfLWr5iw6cCSdxupXXhhR7tZCddm1JRNBw4n7gqkMaVH6mdoKUcXVAG2p6vjGVdTxuCJBk6rHgNgq",
  "key4": "4H9C7Uhn8imQbp115seC8QhrgPrrA9xkQxTXaADRraTdXpuuoUht4C5oVWLdFzmMZzhA2mdDo3HyqGJxhq1wLour",
  "key5": "5KSXSNAtzXHeCoNfRXZRH9q73gpDatu8ssGypPgbPxMmUbvS8WHhenn4Q2o7GvDtDXyyy21SzpTf2XSuhwXq1Ruq",
  "key6": "5xFxawoJmvYpfLgKH7DJZN7JyjxhmaKQWp2Azq68DnwUjcVMhJJkn9azFiQYVCzwGm2ps9nig2cdNV6dFhkJ6V56",
  "key7": "54uJqNzWKEdQc63cu4kAUQA6x75uGG37iEHudDYvcQQ2f1ELT3SNqvNzD8MSNkBk5ifRsDMj2GLQkjZoCvLYVVkD",
  "key8": "5Lr8H4LmYkN82S1coGSUrGotCJQ9Bx5rbbtHFJZkzDs9z74JRiw4LTSuczNoB1Q4NBKBs6cnq3WEtWbZ3xnEnkEK",
  "key9": "2Ui5LN2ekuaCEATSHtRwhfC9tEoFa7Es33PVZgafQPTXEoU53VbNFqCA3osjhst1i1ML63D1dA8mm1DmKfUF4Bns",
  "key10": "2iaEK27fGiZmpBTicpJap5iK3MFfJYMYjHb1fhYkt6A6nf4QLAXcch5dV5p7qGPQ6jzQypW7u9K4DSWopzVLsz3n",
  "key11": "Q4wHL8YU6EhbELmBfKi1bSvqbuv7SHQvRCcbXFR1LbSTnJhXHAGwGjNK6ez58MdSJRw58GAWBVpFie4N8Qv5Dtu",
  "key12": "24wsx87ttnLP4Jx37w67rSzocBVPUXjgiGE6cBSwQe1bqtUHhyzBXj2oR4Nh1gv46C9pAT7QZ2wFPT6uUYjJazM4",
  "key13": "4n3DzHKukyzQZzcLMnK9i2aQ4qVvdUN1mULxpRZk1kK5TpFWQNJLjkRJtD2jKq1Mk5MPJ7vGV7DDNnHzP1bSAEY6",
  "key14": "64tikPPQsyz4W4kQ9b9X1xAdCk5A7y6LRuoV3pK97FuCTq5pvhCBstRy3yAn26iB3xo7BdzbFdQzkHG8DrKQRmNy",
  "key15": "3pYMwdpiSbPTNK7saLsvkrw4qFRahvrpqVYGUhTCJacTF8d3ubo8Lru8bZcByxDGMVNzVSWtKGcgvrkbsvvbx7L7",
  "key16": "3BdPVq3FMsbjS3zVtrU5nkYEgmfoSN4qHRkjt35YRwa8dEtoEaE1khWGYzgp5GfticMLaJgNUX66L3ESQT234nRL",
  "key17": "2qLcYHUiaVfmK5LsDQ3UAcwUZq2WFvVRAv8tw7j3P5dm5AFAxLJvz9GZz7H5MMuD9xCGZk24L7zWNAd2AXSbLaWr",
  "key18": "4rv6DnvmURchCeHXAgbjXfMtJj7innDjVvjua58ZTH7CZ2WmwKQVrJbHtPmACmAvrSaMhZc3eUEXVBFaEm92Yw4B",
  "key19": "3Wpj3T4acnHwHrR4sXay2V62kEb7L1jyQmAmT8LbFrRh3YxaVPyvqYDdDGr251UyFKk1BSP7nQDgtMHwPNC5zwvC",
  "key20": "3imM5Utt1DA12zLTK8kvKVE6GS12tXuExnfQujrKrDMDr7JJxq32kDDSoRx5UFNQu3F9obbAk6pqwBPsJCZy1bcf",
  "key21": "5pS5fQX7tDBNZhvhxeUAeziro5bRYvZJstApDCrxLu6fm7dtEN2HE24Vi9J1HAwC5uobDKyZzhLAGCJj7DUSJzCh",
  "key22": "3X6wZZouJkwGs6Uk6Kzx55xNEC97CACMpsFeCA8qokjn6dUjLZMVeLGvcfEbcbDmuEgueUnKCzRGeve24K3As36P",
  "key23": "NiJgymVyPU9CB5oznXsy67sTavL3NfHcLMeH3K5GaRcEE6TcHbkxppMdXPtefpcj2pf53BpKTrAttZZzRuvAgVx",
  "key24": "3AQtu1MX2zawqmf5q8ZyLMQMJQhxUfCupdLy58Cai3pSjuDmfmZHmcxj5fKpygavYWkYQ7dgZuXBBE3Rz2qZRJuP",
  "key25": "3Ww4qcbZd9YYjA1AsHp56X8W8AQt6KbZE5kdjDGaKcnAu7ygfeVuE4FQhupAAAdabxSsq5xsAJYPouFiT2QCwGF3",
  "key26": "2eirXjQstLWk1fHbWr25gi3zL8L5BSuXq2R5pwR8JXLRF1bGoaRnRoSjqFWjA5H4GpBuj9exoBL5eoN52UeETmeB",
  "key27": "56yLazgtqPn7AaSBp31Wwvqmd4sYvt4twzFxc2ZepJZmFcsRD9r8xNWb8cEsJ6nWgkgVmyDkrShkFcx8cZh2HURd",
  "key28": "4S7KfKSG2pFUk92spcRnGSyytNk2V8gUyUd4BatdYW6haEaowmT3njghShhyiYp87cAWKADLuuRgYcboBnCEAU6A",
  "key29": "eVqzPZQaAAKdGiCL4J2sCjvvNWs5arizxkwCn1KBvimDeVws7BSyoqyXohgxhoVdrKCHb75VKZvfzWwUfviYbfs",
  "key30": "5oFRasCGATrhS73ed3ikDXo2vXuVtoJ4fV7TLpxeoJRFFBogBLuXtNRHCTNMQZoUDRbBaaKzDHZbx79m8fuLvQJo",
  "key31": "2dSAPo2WDzByb1JmR35m8y5A9fwAKSxDmBJUKfLFrXrfKi9QdSybDtrixfDVxs7cQytbcLhnssiEeS2kjcs5wHkK",
  "key32": "TCfDTUkehSZJENNZqyJNfgjvFjTXfhsiQyXAxqgZhNzcwyoWV9vhaAskLHswDDMThQ8M3MvBeUD4kw1Rf8UbMLi",
  "key33": "61zJsnkhzP1WQyj6RuvDNfJQjFrfsNNNsV87mPCnM9XvCL4CQ4zEHbDEwhsX5oGpc9T5vG9FCMHnZy4c6vkeh63k",
  "key34": "3ZjzywBTPmLyznXNNxoUH9ZyVXy4g8MzZWePt8pSuuNayNLBdKMsLjgJNgC98Je4bt9LqmuKKD3hsZEtTtg8bJQG",
  "key35": "5N8K6GeDcozhFNkjSodSnxgpU4dbE125JamBjWQwYyvsPRJW2UQoo6kvVLXw41Ay7Akqz7pn9HXYS6s6GzgpjCfC",
  "key36": "4oWJR1DbDVoNnN4ZbaWNuh1Euw3sbYcNenFb2fJPCnpuk3vF5kuj96P5TMNBVoe1otgRaqBDZsAJEUq9umpiPoXC",
  "key37": "4QUe1SPHN1VPbz9spnvryz5Q93YmLkoeQoNbgY73NyZhKi1MakFAH6UrBL5U1mCs8ut33WJjqdzxFMVdPBg4aBPU",
  "key38": "2Upg6xaJ78qRyR95Hb8TjMmPXvX2bbP99AjxbiGexGZfJbz7a77yc6Bp4sBVJ9mf7ZG9tQ1ueGjyDJZZaJwDxUhU",
  "key39": "3EFRLkyJEGzuMrgPkiH8QpZdB2FL48oKCx1vxn4saxeQb1z2XnBL6c9wNoNch3q3Ut2iVLj4Cxqu5zTeCqWCXSJN",
  "key40": "2kbsR7yAvfZazNpRrknpD5jh2KfEuTzpAwvr2pBCczRLLsBM41aX62Zj6Q16ufGTmkgJh6k651AU9eoG373dw3bE",
  "key41": "4GJXEapJfKtBwP9LYQA8jZbBJBGoCMcneyRPLm7RxHpr25Fte5CV1eJDBbSkPGtPqZyUhKpxUCKWHQXj6RUSg9cj",
  "key42": "2naADsKkVedqk5aZLCANL9DVKWcKZLMQJnhhbJMt4C9gsDnTZrqMr7LBzCsb37TtWVsay5qdcERdN91JCkHMBfHn",
  "key43": "5qMwLjou8G3cCnhwfxcz7c42epTNzc65sp216B9xQFDe2eik34VG8WWDdC9F4MaLv1kn42CQNmGqm3r4WicEHkUH",
  "key44": "3ir4V8KsNDeggfB5QQdLfofEj9Rk7hTnanCd2xGnWQu1sqixD1zC7gQEsDPNK8LYyGiqSAPHxNR29M3FjtMsgSMq",
  "key45": "5LjUujtNQhkaYjMKqLVn7JpG1AMx9tSFrdZChrxzzkw1dZoiNGTKzXAsBZJWiVb5HRPpAdoLCxowcKL4ZQymvxUE",
  "key46": "3hbsne9mWJaPhdBbXoNA9gzCNGys7gh4H1QamSKPAvYtXYRSq8VVAExjhmKUx7r4jQ4H7XEXHTYzdpCvhrMAaxdN",
  "key47": "2Yo1PytfmqJLVq3jZ66o2LV5ujwUG4uAK38iqeXzYSjNYHLiuVtfyBD7gtHHQfoG9278V3dgsUrGraRxppMbQDNf"
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

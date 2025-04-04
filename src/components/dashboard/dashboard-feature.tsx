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
    "3Kp7Pvrqbj5ML1TtqFf91XJdf1LUUgpx6ZjTXim8DS6Z64PDmeD8v2NJQTbZ1VoTtZFKNn56URqZAUxvRwSNcZgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UjHVp8P99jedb5sLJEc2V6FXqB5RdZkudJJG3cnWukUNf86MsZttHP6CfcTWmn96hQxXv8jUar5CcXx5tY2SuB6",
  "key1": "54k3cxgWrdwGmkh6tBKFg8wzxhpCyXbPSjQsu7jYWa9SHVPKcjxRBiSppJZ78bn9PuvkszMWUE1XEUQjqfb3J5M9",
  "key2": "35G2rMj2hcZApBZQ5fdzTP9nna9yCLzpoDpfa2fZr8vZDZGR7CYmUjT6hbJCt3EcxxqCFpSGh9MXm25MLhiWuZiH",
  "key3": "kxG5U9eBR9guuhKRonRfsA5uf3USUoGFcgJ78Cy8JGkMXMQ9psEjPFcHPrEocPt4YouxTFuKBpo5PCmi9dBUCZN",
  "key4": "2TAm1VDaHdVVvk7WXdzbgCUNaphHbB22KpmXbg5QvmfAQZXkWrt53tciG8EfNqn9cCnZHNeQ3XxRD9JAhWgSp2g3",
  "key5": "5Za78jw9GLr1RcCbiDW18tGaHZciV6Cf7VoBBqwwF6voNHXFVnY8oxsRo3jVhwH7qhEnF5LJAbV3xtr4rqpin7Sq",
  "key6": "2BjVaxkuwQk6pTddG1GtLgEsmWoRMMuHJocVY9B1H7kYWY4VLHYB6VTLrpWv3jEg95kThhdzbo4yVbPfC75kiUm4",
  "key7": "4j3bf3amzpCizvqy39zp4sjkjrzDmV9DeGHmeG5CTQmGdJ1EuAsJUccPmai3tbfNQoYvDBaDrWyFeYbQRwu8Qnm5",
  "key8": "xwN3cDo38mko3yPqTH2LFiApB3oATyQcEvneewJASxLzQXeRaydLv3tb8hgZa9fPooMq5J9UYP2HzhYYnMTjJZZ",
  "key9": "3puUJEyVWKdFNtBv3esmPDZJgcq1bdenjApSgwPwmGjUbrPQyLa7yfbQiBEMpTkd7hhCGhv5wBxumjYZw3sLZeD2",
  "key10": "2RPDttEGt1F7YEmnPUBXBj5PWLHARqQZ9MXgbZaebvs8V8mWvbfUxmKUv3KRTgpwurfAcKJcG6Fd5FiuQcwSEmno",
  "key11": "4kHfEEm4DnjqxQYsfAT23sMmSe1KTsdg2AmQEZGFpnEDgUWR3hVfsTaFbx1L5aTmonLg1pYZ1A5p6ecy3jm6w74m",
  "key12": "2GQHxez8D6EuJXRzbNcWjr5j7beuuP4kUQArE2NWvdgMj93syK857cwjw5Th4M31v3cUHQECQyRmhmxNeTEF4vkh",
  "key13": "5ag43hUgQR5TuS5WsN3jKxNxRmzrUFZ9Hox5Dxvm1anqb4THytCayYbEKwuAeehfSqb7S4sCa3369o7nRFafcuco",
  "key14": "2RqPXw8Cu51AThFHgqcTkvmv46vStBJWj5kfiJGYWKHERMKt34fEZrMCaeyZH1TBwXNqGAcXUxBnSn4oCQncnngo",
  "key15": "4xLELFTXKXhPLtxG91brBaygqBMe1HAnrPauuNzqXhn8PSnKiKKkah1VWFYjVq4Wn1N5YzmUf72ZkreLzNT99mc9",
  "key16": "2nx828iFVFGi7QpLZ7vt58eYbGukrvJjJQdzYyMpqSRVB5bYKkJ8aqTbPJLjQq5PmQh2yFujA2d2Bvw6PDHuDzy4",
  "key17": "2uJgLxFy9eMzkdwBQS4sxnihvGydyyxBTBz8mRnJSSXbwi1wAyqK8caoFBMEoAERBierTCBnihbqjEsYWFN5UD4u",
  "key18": "5kBkj7Agh5SpwTnzf9cnqKs1r2wdLD1E2iCgPQYuUni2FAzrckCVdRUtvFsS41hSaJwL5r6jQWbHVzRpoFePt1Xk",
  "key19": "2TBde9LhNAEXWsS54StFLE1Rr7rqo6eRJmXhPWSjF4bLEpkz3QMArNbxSHf27QaRfvbYHAnErSK87DX3FasbgHzz",
  "key20": "56u2Ywjk9v7wKFbg1g8GFJgZUcTLYwZsTRsSA4vkVP77j2PxZgkCTvzG9ShqHefmzK52TYFcfqRLzMnbnvEbA9QP",
  "key21": "3kC31nuAJsSXeTebn2zQmrM5znMd1zF1gCBh3zAusNmmS6nJrSxNARcKFQhyjMo3YfBbr8FMYqb5pQE9AuEcL4M7",
  "key22": "2mMHuUmMzUSYWPx8AY4euUkUmTC9GGcuhDxEggp2aNqRubABfah8q6wMRU5P4rSRVm2Qx8kb66yapNUKFrUxyFP5",
  "key23": "3ZVxjBpY7T3zYrQhVDbiKgjm5RatrAtVRh8BmtZrAkpmPVrjrsSq4o7Pn89qXVH9A4UB8KtxsUx6Lk62eqDJnX26",
  "key24": "5WvtJXmrJTLQuXNEqbiTcEQHku5vNAGM5F7WPvx2FZYLqvVbYapA7Dz6Q5jHNaZpeAijhV1o6w54RWFfEGqJTnV3",
  "key25": "5HyTjEg9xoZ6HEyFQc7Mty362nG9E6DAJgR3F752yh4d7rzZK5ENY2BsEdKAznh25g52kBQKBA6nwjNwLHskTyhn",
  "key26": "MFgPYRaVdMTU3nwWYmtZyaer8csTVR6tQRsRVFbEMSoQCbtv9aA3Bk324Z3tTv3V4fq481kPfNJuPjWwxhJNKNp",
  "key27": "3DhtF7mFqBc4gY1XhuwQ4osMGJR9tc9ZGfwVqcAxBp5XTgZ3Rw26EoCykuY9wUpCeekxTwKYbd2p5abnSA5LNus3",
  "key28": "zHa3VYB4qMri7HkLcpzRzSsar69Q5fMszagc2Qn3zBFd2g5VmxYNgFoMbkrVGmMNhS2f9ZZhbKsQ18B8btr29L2",
  "key29": "36k9A9tpDtiz38ZZYYVknEMbndJYvXQH6KXimFGoBVDaJhDtNc6qu6DLFn1uuT6cyXFnv8aL2rLauf366hd49UCT",
  "key30": "3NQegEysQKEBQLd83FhajibDYbCvAXLtnM7GAdZ7dn9DYoF9KRVwiDLyxZ3VLVZ8Bsa3SnvscaMk8vMgKjb6gURH",
  "key31": "25WWqdXStxN23M8ME81BqaKHFeV6kV7eL9z2h6WKtB412Qzet3kFJRWrQvgWYx8sojRbCguP7TNB3MQ2x3duwR4x",
  "key32": "3NGej5rvrq9smT3Z5f3yj4UMsZcD2YswKvm8qVsh9q6pANE52nHnxHFAC9y5q72xskRjGWjVEkpvvtU6Ed794Nsr",
  "key33": "4e1EeGb42xAQEog6KecHguhhAn91Lv2gBEPzWwXCWPdM1eb7zN8FupPEhC6ptifvm9FnckQKf1ADiDyfnMEnLn1L",
  "key34": "4TY1Q1RCS5jVWMrf7UEgVLCMhpqNpArkNyCpAXuA4NQKwPck2MoDHMs7LLZC9EgHdP1tHksgAYsnqD9f9X8uJTqC",
  "key35": "3JDoFHW9refZftK6h4UKkJQZF1mqsvMYDfZXeuWoqb8RT1SxS5CHrL6RF4WL3XJ7yDk9QYeVRVDjt8TUdxq3Tbqe",
  "key36": "3AQ3JcjhEhBqQJx7n2YyJHx1JZHkBHAETqi9oqziSmgv2hVJcNkn3bkv187wWV5L8mY1dhXJxLqD7gmWxcg5kns8",
  "key37": "5nPiDF8po26cXVgP3DV6fYejDtKyhRPetdukWYgCwByobeURjHnnXkMsD9HBhBENHh5hW43SeGjfQZygbpmPHqGo",
  "key38": "22p1Y6HsFDehV5SotibAuZB98Btkb5idwfJ7bTYQ42ppRSbXABcYD2MGE98awWjb3cFimCXadBouiARNtRZtjPWh",
  "key39": "675VgdsGf26YX1oYiMKicBaCNEGvMpnKDsyw9CCV1DgUU9VZyrPwZbxUdvGGrZxR6c4wbt5Zqt5mpoM6L1gDdg1i",
  "key40": "4SpyiTsSZJfmeUGWkEDZpUGnGacpAw7vA6G7UeHu63fKLTvDM94PDVHdLSPVKNtFxUic2JZFBVLJP3Cs1n7k8fKS",
  "key41": "4Y43SfAeh5USvSZ8dyjZ6v7USsTcSCwGgsPdkuD3Ag4ZKeS2vxr64AWd71JpTdem77UHF7eF4BVLR4ZdMVHFChD8",
  "key42": "5SPb8TLZ8JR1PKckPuaJgS6T4NBzLJR3LKACBGTK5S7EyF9UMJW3G5gw5r2RMzvUKkoXJM8fXkrw6V7E27kqnRmR",
  "key43": "5ur2rgx8g8mhqSxHrgfqjze2hiLJQ7e1tef8DWjqT4FtWSNMFz1LKmyrA37daJ23kzBsVLbvjN7fLKqDzhZbmPB8",
  "key44": "4h5H28hjV9D6zFjnqu86d1TLHYWzuJxXbri5QEWUVmwWr6vAGFxL8HHhHZDk7JMyxg84eYWizmzfCfNvSppkEvux",
  "key45": "HrmeP1u7vF1gFTM2a3wb7qhtZTJVEpHYZnF7aQjcQAT4ayC3HA9yh74RRf2HD1jkWpwZd4iExLUbiNXV3YMUcN3",
  "key46": "3Ds5cbuvugG2kt2zfJNoiA8bxwWEANXbLfA9GXD7syrg2238FJam5WmWQKXniCykren1shan9ou7oWGTactb6vTL"
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

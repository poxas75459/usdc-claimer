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
    "38xtASwfZgbmJTmhab2HbvhV4JLMeCH9wfNMzAj6SoFBrs4eyURDT3ThFevLfNtSxbN9cjLFEZnL1NiU52oGQEfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8wj2KdAQHGLd7sfY2zTfCE3VsezLZizAUdSsBUQrjioQAWJJtUqUb3rbnNF9DCGf9Px7mkC8XX2f9Zcr8SjvrQ",
  "key1": "37zUtvfK3gud4MGdhPQhmdCzR6L2esW4f8R1zZs7LwTtRERx9MNaEyMgvTwGRhYcfYTa7G873tWiobrXLz4yKxn2",
  "key2": "41DtwD6nRXBQtMtKYDKmyxMyxBwLQfmi9mdsrVcNHWgAQm8Yum39z6dtys375RK9FKD9Ykkgxy3Fze1mHsggyXi2",
  "key3": "2fbTu7g6k3JJcjUkax3KhGS8DB93etNftaGqyfeB3GHD2bqPoNwtyoEhZGkbzYRpnPwG4cr8JAKxb9h5Hukw4uC9",
  "key4": "2vSPgYXmJniPbwkEmo674T4as32wH5UMWRrnpYnugQnkmn9CTJmsBiPpibk9BWMzFBYBKtHm7esT1hSHAKDDKKCt",
  "key5": "5wtB94ZYDcYWsqwXUVY5Kq92cXoqCzmQHVEqaoaqEC2KKKEvTjcbtq6aKSXhocamj3yu5pAKxDto1zct6A1orsFW",
  "key6": "4i2nBZTVLwzwZQetGwSmEWEMKrEFAFkRimcUv6cYh9uLmci9djWcjaBkkcRwzRHTa6BjMrgYCHmdCiAF1rRs5a7j",
  "key7": "3mefH8NfkPUZZEG2YiX8NxNrNpkEQ16kDFr2mcD9qsQkiNvpG5CKVSAdP3iW9kTFVzrGLdbMMwRCN7iA9HAuP5hZ",
  "key8": "4SbzVLMKUu6hY2jYTWkwuFfucTEVQF16d8u4NjXSRLgXYq4ChmNLACW4nQqLtarsKSeh1r2ERL4sKnoa4ADzpaJN",
  "key9": "2WSGmLBEC4xTqS3JmoJnChmu1CmDP13mTMEn35exPMaW7yzM5baUnc9oYaBAEp9LE2AgBXetocY5CtMBn3fRffUr",
  "key10": "37nggxdCeGDmnCuPVEBcAcD1hDuCKSpHE5qoNsnq12UBrz9usSVo4qciaUbsGbME28XHiCd78jDVkoDsP62rXPSv",
  "key11": "2LT3v7HcZRWzEi3iLaNnLVHkuyqDP5wj5X4frY3mG3fDYhKHabs2AHKdjp9rv2fybpmBFjUNVFn7cQZB35RjfLoj",
  "key12": "3mXtYttQKKx4TwSppZ3FVsSk1oHxw7hvQQiMJvPD1jgjnjLvt6DfHQUjECFpiZiivzzUNXHM2mMrL7A9zh7gZUMf",
  "key13": "qoM7VrwU9bESmR91Ze8C6j9fWjkZX7gzwVCENaWY2bubvoMtexaECyJxUoJuERRrYY6jgTWFhFYaMUDVa3hgVH1",
  "key14": "iJEmWYXor4QhUMhcenJSvwST3QX5Mjb5XY41HccakmkB36TWYcGXWMMAPkoNPRDwXVEAYwenGu9wqTUpVYV1bNU",
  "key15": "43JmWpH8J6qogtPgLhBCDXxQ7okVcVYBbb5EXa2xN9iNgAddU4UshqEE8VHH17XdfQ2ursaUjUZZDvjuvMHgimu",
  "key16": "ZWhChnkjepZSqx8hZdChk2AunTGocy9GpcjGvfk7JnsR4sJVDHBfD5A41zJECs3LxLCEGSdW6Q9uNgyMHc58DWy",
  "key17": "36eDniGW5pHKakYsmUo6hxo278ykSir1kujD28fTb9njTpvJi4q7nkZoyj9mfWjD8C4ZL9vVKoMPWBr6Dh3KozAE",
  "key18": "61P7owmQboYfQw2xWtXhsuveGBxkjfeobosFnk9ygbcHJrWyuUVtNsbaGMvXQEZCpdZxcTHQit3PxZhTny4D4FLX",
  "key19": "5Quk1DbmGozgr4GjXshofeqRGLNWozw9Sqm4v6wFfqxiynyZyVn4mJi3ZwSs496TA77UoX4cn6719oKMzfGj255M",
  "key20": "4Bm6VZ9gfF5tsPS7TgNYhzyGFpuytHV2Mvuji5acwbVpGAaoepQon7Jw2tS79swHLmkM5d7hjw1CWB3heRoxoTKg",
  "key21": "4X1LM3pX9YEjWP2jyrPN8ZhWmiEbvcqaiuhbLSsnAbVEpzSnQ5UjwQbEWGbo18a4dhBw17HaGNdwWKdvEXGb6BDE",
  "key22": "EWhfFFUB3PRyt98zdvSEPLDVMH9W79S59PcNEPKjv1rj4Yr3rjTk47Qr4fJBGZKZTXMWvMgDtoxd9C7n8pXdExq",
  "key23": "4E6vaYWdDhDQLX2oXFvBHqgLQtvwTGLrnRs1mSRJAE15KaXrobhww9nbhXPnwF1Fdvde7QdMoxyUdQZ46MswevXW",
  "key24": "7wiYhu3uM3m1eX9s248m4b8vCXgT8xbmJsqKBdQMHNKqy15DtHNrx1cjvoLvSE6R4t4HgGRN2rjPZvoEgSFPtWs",
  "key25": "3k2ZimYsLDkFvLWus8fFa5xyPJZLhJvfq5DFUHwgSfRzcJrqohexDE435CyS2yeuj75QTsUb2Hw7j3xb8rvESEyX",
  "key26": "42pHt6BpjrvbBxDiuraN9TPtkrsjgj84szesvsFC4wLh95YyVvkb8C9PiMnqLvRjJ8qvs9E7AvMQKgLdETtr6q9B",
  "key27": "5EaJjTFRbyeMEVrN7jzDLcVpsbmjnGAtzqNkKZ6DkNuaDhryVRncyCbPvAUnETsEMQdUYqK2YGmUi6nN4zBXx9WN",
  "key28": "3GUb3hGqhh4x59AavvJu6zbsaEMGrh2ECa7XcAzfHbiqY1p2RM6rnYCo97P5K38nMaZUeJ5QEQeAY5J8pP344kGM",
  "key29": "4b1PQbFPDWZpqSZxUqPmRcWAzzWWJHK7HL9ttkYvyPXXxzdrRtRg2MbYtN61UnJEZ5tSJj9wF7no3N1pJJPbcEWb",
  "key30": "52s6F4V3bNvHxS74123r5hABTZ5cZpPoLEdXuWNAwyqsdVrK9EDsk3vFdgoyTKFyAmqemLKietiq3w4BAndjfohD",
  "key31": "4XU4aK28UXUJQGjaBYoupkTKf1K4Xqg3YpuuBt4zFyj1anr31czcG7fCZ5n2NRY45Vq9Ap9zJ2nyB2UeopyTtNTh",
  "key32": "2tttkf5vXHWNprGYibPB6BbMjsLBktcJdZeuXc9Qab6BDepgsfLTvKt67TSkvkbL8J5GtdAQzGGHdJV3WmPeh9Bx",
  "key33": "3SLHEzmUDTbwg5te7jRoS9JZv4gvwCSe1PvLaLvA5ewQaAHZr7BTXoFbYcrAtWCncY2QXWjzLz91d6zzA46UuCAf",
  "key34": "5aduyAmGmuEQFUgxrWqbFUKxbGX4dtTMdqq8RE55gpv5iV68rhynvqjaHTZsaL1LrYuxiBb5eKnYf4nZgKDrgnLU",
  "key35": "4LZTbLpS7UWnkpvD2GDiFj4RUr9jkWyxaa7QcnKDeyFTPgz8ZgpnFke8HAZhQoUZpbmLX2iZnstLHfL6UWbt7SH5",
  "key36": "3ADB2n9F9E6BFML2D7zfNoF677gUuaS5kUWe5azaVr8GPJ2NnsxLQSwQETTw6GDLZkuNe4e3rXunMtuESgUV2PWS",
  "key37": "kARu84S73GVF78eWNjURMccub7dRWPR7QxuVdcc2uuW8rU7KpNGCspM96Z7WExcpjZD9ZdvNbdBbeQ12hLbtquj",
  "key38": "3zgZ8m6Z2sSRB8EsdKPaVg3SUfFrbC2rKEU9kipE2VPbdUcq9Ed3idZEKtcZB46yx9i6gpVAc7qW8xR7upVN7KP4",
  "key39": "5gPLSffSUryomYooxAC6SRbYdAWtmT3USp87QoFYpQiRCBce4s3HbfYVu32a2y5wQNxFELccubXEEVAqXqPugkLU",
  "key40": "58cUwh9q5roAibdyREjC6YBrW7KxYhahZ7K7LHdPFnwKbkTec4ZdcVxoKbZW51DoPZ5y3GYW26FRNQzfpEXLUPgp",
  "key41": "59MsqQSbPCEvtGuJzyVHEpwjNjrGv7ZZ384fwJUXnfxS5FcPr3PfFaM84q42NCc2VxSt4NLteKfq4Q81pkahMa2r",
  "key42": "8LWi9QitqB1jQtAvMtWo3nMyUsjg7Jarmoy9ApoCxYg1929ku4kzPhBjYLULUD194wJ4HM6gFv3XV5GDwAGLc62",
  "key43": "EeWPuBYnf6DZR1nM7Vt5uUnLXos5ZaarrMhXGxaNLgVrjUELhUNwje2vShDJK7tT6Lf3LnD7jZNigCz6Ga29d8R",
  "key44": "2dUsCynxjAjeDN2rcqEU71FMcG2fSdjo7WAZWuJfKtsAztKrUGgvc3x5iWsNhVmR1LZ7VK4fFJtgNYA91kcSzYm3",
  "key45": "5dJtV4m3ikaRe3qnTXonn7LE94KrprDuUrHrSbYToTDtoBTwZCGp456b9S2RREXuw2bR77og68g4muju15wTn3si",
  "key46": "3fq96eejzeMVt8fWKj2yGzPuY3zmbJ4mrGa5bQoW1SmLjinoxWqrwLGBSqnEM3civJdcwjEq2GNu75wqdC2yELLm",
  "key47": "GH3QFUyFYCAsnfd1g9emi4KVezhmeWocExhMSB41mQkEsryzCoSe88ooQ2nkEsdu5c8ah586eu2XWzKX8NAUMZs",
  "key48": "31pLrscBExAiTQ7ofSPU15dXTecQKrHSgg2rCBVjLRNEHFaY8czTjSYaEqv2jT4AwWzRag4D3BuFEuqrQsGKyajf",
  "key49": "wDguWbrWfRD9oXkfWcL3tTCHRcKfaeZNtRmexLuNiHE4ELCA9H513vcMnZ2MwLBHByVzB41ANrcUzKBTQj43rz6"
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

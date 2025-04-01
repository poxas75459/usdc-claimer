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
    "4NBGgdhfRW1TCVJs2Yh55Lww2YJ1mVLbS2BEq9qo7UZUVf9M5fFPPNGkQmHW629GSRUoyjdJRBsPMKH3M6jU5Dx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBctnM4t7kEMnP4soYdR7mRUeDvhQoJbRPphFQaxMr5NY7ayDBroQzAwVetWo2R2qYrJPPry7FswnxRAgXvTf5C",
  "key1": "2bSrNMpH9E26142fVk2G2NPtf1w8SBpagUXHyVPX8FSzSFd9HoaeWCXLAG31hFLwUBXU41ohkCzxfQg2zQnsWzg2",
  "key2": "3jjPtcE52iYTuDRTQjtYzWenV8mr6D4Anq9xRfBXSEnQxpnn93sh9w91yaVGRr1gNd4sjUtdVhTyXTRu4GEoRveX",
  "key3": "phFuhHqeWkbBkwcU5tnoCwAEk7y7d4ipSeWNpYxKXc3CRKUXvL3QKEoyxSLZHpNbryXRJ9yEZ6axtv9HzRM6r7d",
  "key4": "3NRKcG3ENmZcLi88WkNeJi428gUnyJGyNBqkNYGKzbtC3YswtxNu5uzN1XSU3qn2HvGpp3kHaxnA5DoSCqWqEzSd",
  "key5": "61J8QsU32PSSopHyfrZe97aHECrJMZVa2xAvdj4Ab1Eky57YK3HpPb48pPMXLhDh644RKTy16kHtjgSJVs8uWN4y",
  "key6": "VmvEdEXpRP1ndTJEEoMbr5nYVHnNRz4sUEswFqyrufgcREbKXvejkM83zCauLEpD2eFMfNTM2sBsPcBRCncjLu3",
  "key7": "3Sk3w2WQ9m4MCsMtcbAHYdFuAw9RwBjCZ8itCh9jG5pKL3jP7RkbpVeJzDvjVcEzoWJgRCqohPKMCcDK1QcVPVVA",
  "key8": "2qV7kZnCXoZ6CFbzDLphHTxeZhGs9Cmmtd4wNNsV9oJUynfzXRThfSXHRvUqQDJtcbQx7vG8ntJekJ9rEVmBVaNZ",
  "key9": "5n4Lgm4VP3CHNYv39a2xud6nsrHA2zL8LdqvTqfRr5ZPSrxzeZaPFdM73oBKjZLrsujuBsNzw1uCaN3fBs4gsYGb",
  "key10": "34phDFNnRJrYQnj8U5ENQrAurQ5uSi1HpjVvQynB5yjqfh4r6adDS1Y7ky8cRx7inzxnLHqWrkycBiNhCoEMPmqy",
  "key11": "3nkqbKj9fjkZCPYQ6gLRA3JCdg76oGToXFB2hiZqUQ9QZxAHTEYBZwKZN6Zzociq2kHVRfpT61yWGGEGBa2uJ7W8",
  "key12": "5fb6eQAsouPsJz6VAxjWvjXMtYjkkTcNMLjVYwFLtvXt8SAxAiGyeKDBWzwFQkDgKjTfpeRSLfpNr2rX3FBMRu6j",
  "key13": "3WQpZo1yatZraLyv6NpEADKo9aaFEVFUtnAQ9Vq7CwQwfg3qnTCR6PNWndVSNUMaaDkbZ1TqgFpJ3BHzpeQYdcy3",
  "key14": "4yWtfKBoiYG7dcqgRrqvDSLiGQiMpS2RUMZ2dv28stmAd7urzw9ZAdXqp91AdPEHP1xqthVfa9P8cr1teCzZ4Up7",
  "key15": "4J4KenUPLcA2n9dqkR2yWcz6Rx5RbEr4PvwYPoqCZ4jCM7ebD6iQjrABGqg58ad9bqjFjPTNj2guWZFZZy722scs",
  "key16": "KAVbhtXnJSM12hcqZHD6vb62pRsvu2wn7E4UikWPjPVdazeehaLCo8Uf3vgEgfnGAQJDA7RZ12AziFTVNrKb2hE",
  "key17": "4BHLmrdq4B1TnPyWSqCP7eAbT8u5Auhx1c7UXSQviUonmJNevM4xMv3Wi2tpehMPYQ8wgdfewA1gup4yaNDgXz2q",
  "key18": "2wfPrL8gzpd24XfrFi1P4TPs7wLCPnBm6NTxgRrsM6vgTBeh2Pvq5xbd8Ys5ipAUVdnX4B3Xzvk9zEX7q3s1bW91",
  "key19": "5mh2yBH2vFi1vZYfeaRs4wBUxb2DKSwGdV4T5zJpZ9AzDNMxhReqV3t7tvMuAyUzEumaDDBC8ySJ6bGQUhLNV9Sq",
  "key20": "3dBd3ZLW2dX5YGMfqWsYkqrPkETsW9m427oNPiZi6LrPPAbm395Ls4Zosn7z4obSqSyReFkPNJik1YRE248K8JuG",
  "key21": "5E5mvAX9SuZzja9ctGzXPwiPiKSLYVF2M3q13LzB6frrCuBLJc4jRwvJzWQpE8Nz5qFkSr1wKuXF8x8wBizVaV24",
  "key22": "62subH8B39nd89jCxXeSVPoLEYNCgciKRnyVy6g4UbducrvKrg9NzY2dxAub22AQ8gbJB3knqdaGxXh3LH1HEmSb",
  "key23": "4vFH4bA2Gds7hUV76dHntN7tddKG19D35eiWSJRqCkEKVDpjJy1Rx9Y85QUUxWgtQsgXKHK57iMNXM4E6mTyXvrY",
  "key24": "31zTizRL9WsR4tjwzPRPJmreKbzxM1vBe9HahrRbdcDaKePt1ZsFjvDdMhkcWGxcx88jufpPPaiE1xNwnnrNuM6j",
  "key25": "4qTtByE93MbkPDzbwbsqkB5bJjWPXN4KgRnpYu5qe63HhMRRhkC7GFo9eyyn1oLyDQsQTEJnCret6edWUyG37tRK",
  "key26": "3o1scUcVdqk1WDC5mSfC7hnNw1YCRBGx6jfB1tnTDRv8v3SuESejE2HiPYMRhtKV3DcaM9XbH7511hgLndJUfSYY",
  "key27": "4msRyYEo6xttveykjmZDUHzcHstiD5bMj5EUHv9eBNmENvSKJG5V4DQsKiRGRLb8aHKkPChCwk3w4zBYMvLcRtY8",
  "key28": "2G4azh37RLh8K1YtPjPbWXk4TcRV1AKQAtU7HMyia2tMKWZL1wFXeH3bbEpUaNd4YLg3cysWy9WpkawRCPZo4k27",
  "key29": "B9xRb5VWunW6GHb83ivLpLcWb5ahwovXSYGvrzv8Kou92j39ZWbtJCLD48ErxEyiT21JGtCsk7Hw4kghzdrkXj2",
  "key30": "4axrd5MgnX2kTLHZTspMEa7jHwq1JxaEVNs6spoLxGB42t9v3cU29KwmG8yZvpy1iCgdpZLZVb3U78CxThkeYBEp",
  "key31": "5rbBg7i68sQT6TpAK4URm3Z1aJxtiTfhg1bv9cZ2aq2HahBK5mWvH5MzBReo5FKyQAPi6keh6MMF8srdoxNGqpRd",
  "key32": "2NyjVcPcaDKBthLyeZHGq39ZByTe72KcBn5nUdexNZKYF8mAzw5BJoR3xU86Rc89ive4mW2p7DpFWAruGKdqMb1p",
  "key33": "611wpmomnYD7SAmHj7Twv4ozXMBzNpAumu5QfthX7N6XWwKvzwUg1yEF4Nhu3RXK3P9K84EDi81ko1v5F1XXgLCq",
  "key34": "5881ELTdMqXKajBe7kzcn2ApbbtR9WmXD7j7yYeGXFJsrtgYaJVAzgMfLFmYMnaK1kCSEGa3QJxuGqH1jgapHsLE",
  "key35": "4Fr87AnptBhTA98NKfHNAJgvQtexx4k8Kpbx6cYRcRoc4vtaigope5qsfv1KcF3UccxEkUsjBJeh9QfhQnPkgEdj",
  "key36": "4UT8rPEvzyeV3WU1JbgAZKCCLckpxz9ukmy7hr3DKvZVs2QHMMdD5KTDce7JV8ChXs3e14aykpCK4BgYisQxg2cb",
  "key37": "4Ks3yVNv8w9zhnKbX44B53v5NrTWySgWrBBSeefFsNgktzpKk4LtngR6fHgT3q8KeuGUh11LVJsKdj1jt7RbQWW7",
  "key38": "5Z4uFenxhLhuf3rzhBWKKHiVAKnCq2k19bmm7CFDRMQvUcKzn3XW5CMWTfxE8RXq5EQi7AvxQjXeeZQTxvsQin3y",
  "key39": "5EHWPoTMbqdRctq1XDG6CXjDTr7YLEzHKzNudD9VoPyuhzH1uZWTzeuXY2EXxv4HJb98F7emtD4QKUQQJJbCxUVe",
  "key40": "J8KMm5XSWRrhTw2qMm8qg76co5pXmAsQ5t4EQqxxe4MZuBL5Dq2g9gT4iErKMtvyAB53DZ3dDm6JfvVrYwh9HzH",
  "key41": "25JkRD6QnyvQ9DjbyXGomKeZFg9eTXNq63Ntqw1FPQz7Vgp9e9YnnfwHhbKHA7oL5Z89hVWeuzgeNGam1sQryH9X",
  "key42": "5kbZkb7kuPYiUvX3hgiC6BBZpKCA37o4DJR4FKEMDpEqWZbuvNuj94jaVtHt4uU2v93ozGV3aCgPWEoy4VVKRGjn",
  "key43": "57fSJWVWwosU2n8zNRZCtm1aMTL3BrZ4s2zfB1wQrtXUZaEMhcwybbpZ8QGkp1rVhPHHBqqUqfjEUvqwPJmK6bQN",
  "key44": "2GoGfeCRNE4EAx6H99ueUWUdrXJ3A87ud6mjiHCfALHMhuLQwW2RcEtqxWNFQ2F2qHiUzB3yXFT3VKm5mXWmHqSM",
  "key45": "gaLgcRf8oggBNEwAHVHXiic8NHBrt7RhQwWou7Lg5xZ1FNw17dGVDg1WBbgf9e9Suyod1VPux8Giw65QuPgAiQf",
  "key46": "56XaZw44GLj7HMbnASr8mEBHpRvCXunCMpm22M7Y6zVn2KibvyiwVwzxqRXApFYPqbwgzSm6R8Qsp1emGXE6Lqbs",
  "key47": "2MdgHRumfr2mLi1wsZmrirCe5ygiNTSW2MyniC46HPghGaDUiGi6kHiLaz4zGM4sim8cZ7itD6E9xBfJTuHmqyzG",
  "key48": "3655Mkfdx3DQxPtCvmWndm5dBqjt9oV1LKZCZ7pJRHuNbh5oP3UKLA6bnsMQn5fqCxixBUMdv2huXfQjXmCka9iL",
  "key49": "2WQmKNLqHPapbf8fLC1pw9ZFVZxiEUQiStBeoKQL45rNyV5pNBRgwq9b3KLc4yFGsPSM8xySNXHWA8UkTndG3CxN"
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

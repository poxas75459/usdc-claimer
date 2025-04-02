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
    "wdmhhgoiLnPSgTFxYLYTRnu3LsJxmTnnKCyvQK9fKVz7xezpirkaW1YUXd6XGpYxzDwn6foEf4qEcXmgL5wT4aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYndka6vYpaexR5n1FwLRuRFdFYhcZLRRYyyeN9oUAXeC7ES85E1vEVDJmZCEEcw6jVkjkZSJvsHYMbYyFeavcC",
  "key1": "63HRwSmRqayXkAyG2AXaFj3rJRWQwBkb4f7fjXNCtgRKoUHDQLTqTXLSrpfWbrejwe1mXYPVs25PUgYoqnVc9jH",
  "key2": "2WUK2VtB8Gc9sNZWb6iyXKWFYciKGCPzHT3SFaAiTjQ9YVCRGm5UVqP8RiX8tfGu96tnEttBkCNNEbDzQbg2pUp3",
  "key3": "3LZniRvj8WgUoJmxHMp8gdFrYbBPXpzCG1fa5c8wWJSWLAEEia2LYtmJNhkJyt98aXSqjavbkKBYXRCpBAJG1b7z",
  "key4": "3kYS5re6789GCNcD9PTYVsJ8c6eUuVZHfKggaH5Zr88mYQ7852B2ADM8mSpdFSdLpghrrXzTEM448nZLRVvPfzdg",
  "key5": "32h2WZJeUGZeVkyFxFmQN2FujZXPLfsyDpFcKYt4sXCNfusESAi6VVC9d1SxXo79ntSCKzirWpCytnt3EXVxJUno",
  "key6": "4vZKvdFTaeEU33isv6jm6JKe11dk8fRG4Sa5PwmRHBWFiJxFRVagbdpRi1oCXDppz4aB4b6YivcThHZbthY9Pz3c",
  "key7": "3awddmBEQMVHfg23adyrcBs5mKtSH2eHfTMGstPBzXyAB2MGFDXbJRo8DBiZwBLef5G2pv2kCtjM95W4NCtaZHFa",
  "key8": "3HSZkGA9MmzEZndd8AF6yqWXHu4mEJUeKMfahU2sEbQQtGnPxJk1BKTgM9QLmg914ks7A6GbX4L37dQN8WiPcJfc",
  "key9": "3sRt9TzJUBsPKEDnHNLQC164M7s9nPsctJ5dD5HcEJXfKusDjyJFCfz3z2ZqJJX8NrUt5RJqxXZgEkqvFhu4U79K",
  "key10": "s2rupeQkjTURBhYDEGJHVwqszxkYECjF8zps4uyrqtpCwpD3DyvmDJEJUW6QmcfcpRmtX3SMF6jF7T2i4aweYXN",
  "key11": "3GoX4dAdU54eZPC6WtHVGGqMbyRks2gNu6ECxWqPoVspEiG61Hsmx7bTj9aej9WaTtmutrMP25g32kan1kXutpxx",
  "key12": "4iadD4wohH6ew9JB2xiGKCY5rhxXD9mTbHdzaRt7gSSsoYkCdvUbLQUKDBPtJXvNfCptpNP3tBZP5N1QXd51qEif",
  "key13": "2BPacAs86QywN2weMMiUapEbWq5r62WAM9qYcCDwmdF8PeUXBYAUgMNbT1e6jWxz9WRw4Yo9PCRfzKmQyTAkUpw8",
  "key14": "4twn3nw3hg4MxyWkyEhSqnqLYrCoKrZz3XkHM6trieHpy1MAcSFpMw8FLWMRYEZZhgY8SRPbR1D2md24eMtiXcme",
  "key15": "4PSoSzBCteTKSDCJHNticnhYXjMRVFXbQKPVEiYZTqeaGrH4G4tqRTUWeQFAN2GTEe4ZoWXNJHe9WzzbnryYnSVT",
  "key16": "54duNcjuztkKRSUst8qwEhWjmeSin6suAcF84X4a7Y1bMpqze4a1txNKJkEarsjHRRXFPMYyNad2zWqKWEKbz2eH",
  "key17": "URh5hxgmH2krsTm3wmdjw6WMNRNrSLjJGNCUpZ8krZW5JEzbG9aof8UFoon7X456BZ75PF4hfbBtLJa9rxzoJk1",
  "key18": "2Ui7TPBUpbeegG8KV51VmB885XCYzdww7DwgT3At5pMgVmrTe9vCBZsUxfqgf6eBKyvjCw5ZFT3bMBBo7GhGiTCd",
  "key19": "2sVpSSbmfzqopjtmLXwnz8jjqcf4LKoGJHeHo6GugFDm9EHQJky1RAzhAjFCLWEWKffCFMLkRjFvrdqqyfsX7EUd",
  "key20": "5y3cxo83zmakNkLh4bLWkazMkQmf8ATkBMe4bQyyrdw9Jrn6U3AMgQ9rLEZdAzUFzRdgco2zzRVZQZE7ZvxGEiaG",
  "key21": "LKP8216yi1KWbo5WvgKpUsWREXxjYCU85Fck8N4cv4a8knWb6AFQGkLtS18C86Zg1wdvdi86MoJLoXJHgyEKDM3",
  "key22": "2EPSXJBRwuJhU1YvCUriPyM7E39z1VDqS4bF3G3Xf8QEaPdkj5hCsiwVzYZ5dcbgp3x1je2zy3YGRrzaNyEjQS1c",
  "key23": "4r7aWcp5SYg8ktMcYBUKq7SEAANsSsvwyaGMrF2pQRQ5q9C2jNGthdSr7F4xqzJF7BHiPQQhVcKApAcursU5c58Y",
  "key24": "5WGpb1praHebbKBv2EUPVy57D7GVbEP2qUEjE7c6PCnWjhdT3RtBwqE2QhtkCcmykz4dmmJR8MPrufUkMfh1oAE",
  "key25": "5Zrha9gn6W9LBuHRCQRbLPJcMi6MTRrWY4vtgfyWqodqvhXxtzf1gfzqKPRXVQsLdN3yEk4qbu1NCEmp8Xh3ohnr",
  "key26": "38ayrDjNXKd1E7ysPm9WFgQYp6hFgYqBJLvZ57r2ZuiZ4TNttrMLG6paoQjojw4BAxXmNghaGP7Ckb35Pu8NYPK2",
  "key27": "5QrBgfG6vCTXJWFjdtTh5wTXutfNCYnPub37PuXTvRpevJ5M5m47hbPFGrkiEwhrk9LMfMt5Ac3bvj7pb1Ghy7t6",
  "key28": "4PKVBjrC5bsDLadyH3dkCa6KkNNu2aMv5HEhBYiZQsSPHcsCHY4vRwKeSajqipHh6T2SDxTiXu3mg5tMNiaSL7qL",
  "key29": "4mPEU911HYZoFTPaTYaHxzKmgeQ97Z5pjVhAjhKyD3FwVY698mf2zaWt32ZDknFF2CPkUAMKEbyePsm9kQj81US",
  "key30": "5eNHs5SYoNkgHKjVdabhtdRzPqk5RHBWKQ1VzW5558ey9hnwQ3NE5jjXfb4L9Yt9Y9ZW3eAE8euJAQwNAgkpEFiN",
  "key31": "4KQPFo2v249i3UxPBrwDy2r3yDfiNPnB6dpbukv5JQpUcDv2dRyvmB4JYSCMKj8p68CDNqiMfKRdYb42zodEabav",
  "key32": "3EVAeobGYLcGVfooNbd3Dzu3gpCqFKmsAjsMXSLdcGJJSVHqPYXbxcEmJdzNiWhS6GySipWatSv5NpEbCvaF3V8c",
  "key33": "4kgwC9EfPCBPZ2PbLfb3Rat5D8Gyw2nsdry6dnmWXqapXxoZDtWXmwgAndA9GHyTNCZHZYDWLwcjqrSeZhjQKb9g",
  "key34": "3PnCtNwozNKzYkte2FMPRrMjLffe4ZRrm8P9UX3sv1tBBjzhvReqHiGJUEnsK9oMbpG1schXAvwMTB8pJ6yeJoJd",
  "key35": "1QzMsTLvzAs8UbQY9TthsCmo3V1P3DGVzyMRG8pMUa8xEs5fKVTpP1aKrBHzXkTzdPh9VCJcPPtem5B2C9KV2f5",
  "key36": "4iFNAp2Gm1vUa5Mba6hiHDhZT8AheKRE22gb4ty4SqHURHknxf3wiifHR1UfTLMq27vmt71cbdy4GcAx7bJLeiLb",
  "key37": "2eE5HeCXy1sK3RMQdU2Ao9Xybmm9NViaCjcGKX1zDE3t1bc2jw3gpDYaeuCxxSce3gPo7r8N1STWvBywnGBiFYgJ",
  "key38": "2AjHPXSo8GdwPBsokarS3ZBxDhwCFcUKFc56L2bpaiy88jQJNopWUroBrLDvdV7Ympj7vPZduUHLxkT94zpxMk2S",
  "key39": "2aV3avSSRo5QTt3ZUwvdY7g8cjrWaTHRiTRjaPg38B8dBt8pQEVxLUYo84m22KvgbNikp9egGUZXJwSVMfbWyPe3",
  "key40": "S4ixtZhcFKYioFfVqCi9RNTrJvbBMC5Gnzyek3Ayykk9RTqL3E1WZ5GW4Gh9dvmpXCE4eqGE1NAgP2zdJ2DqGJE",
  "key41": "5jJiqCTSz3RrtSnw6qHZt6qF6bmYUk8RmzhZPou7kHY9K16KFDVwvFgtyYaETbQnnFJzRUWeeQwyV5PY3X34xo6N",
  "key42": "ptNVWBzE6Avphuzs1u8hHRd8bkhZR6An7oHu77vuxZTgPBpGC7iZpn6J614QyvtaoxnfZ81iwthxX699q9NvE3A",
  "key43": "uUpCKnePb3SNzh6wek5vAT4v9YG2whAWaW7Y24cR7wNZwR7oj9FgKJX43zDfoKN5VCS7yzayJQBCa3ppKv4BL6b",
  "key44": "5JTXUKArrqAxkfeBAL5oVqJqgtQdA4UmgY1sB3BNYRFeAaSM7N88v4cunhpeJQcFfy8yTTXiiT4j7BBnDsEQxeLM"
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

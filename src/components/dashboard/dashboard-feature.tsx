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
    "5LXcDyonz2Pci7wPryF9dagtSPUNXBA5rfzWsmsojrM9hQyXcX7QP7m3id3ehy9URrQ7C7T4n2BEKYnm3Goj6XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSVsfkRsB85PkHfgbdySPiQTkpeu5ydHQxbFsrDK8doCHSJTTR1JuF4Mdk22bacYq54tWL2oMkAJ3V4dGgTaYED",
  "key1": "38QipKhKat7dDzGFbxP5eWM71Df62Ewau8C1SL434wTqiMLCkYCJMcbBq9vNo54XwKuRm8CybrZUqGYY3xNu4crV",
  "key2": "427C6D7YnG33uMsa9xvXeGU9Ch8MUYaeFKm2Desb9qZyi5dEu5FbqDasqRmsfkceZaP7eeFrkrnBazktWgdTc5QS",
  "key3": "ZiLUn9feKFndQNseFGC5YFttFmpfk5V2ccetAWna4AuDYWRqJCU96P67vSEHJRbSmKd4jUTEJAN53DN5wLEXw1r",
  "key4": "2YZcNa5hAqhfRpYVRDTHbzQGzt7wysBubtzL6So12AB1ebXatRGZQU7wGVzd878YyAFnvxnipZxi1oNbyvDFH6RV",
  "key5": "yBKDUMRzzWzw8sAW8Dy4d5vKaw2Dkq3PApaH1aEJPxRqgfXzrznL6emFiPgAmqoc7UWzk9NseUBN7ejvJ5A4FEz",
  "key6": "4GBCDbh1hQGpn4m1WrpZZHoAHxP4AmwrDmskxvbekiG4ZQfCDp2g9AdyHkcmQUrpXgfdmHFDxsaWxz7ZCDE6Avxx",
  "key7": "2XvqAVUCFJyRA5S9LGScm9wquU1R5R5WjTDZgm1ZHUZ8DCUZhuTEBXP5EDBB5wsA64zFV1TCj9LiHQdzNK6LPwdf",
  "key8": "2VixmDxGAYWAihVLczGKxAwo6VVbNysv2zvcwKmCE9xdS3fbgjvMCBQ2Bq1VRoNbqxNrcWQT5M24TEi44HSUW2w",
  "key9": "2HpsXMK7Ud8euNiF7JrDz9uA6D1EZ23wM4rwR2jfstBjdsDWUDXZzhxmRwm5kc4VkryyZAMFGA9kPBgn7DXLNUs8",
  "key10": "49JjsBSHmz4m2xqoyuNspPoCwkDHX4wdbkurREmvJG1J75xdoSWS8qpLjo2zZdeShwdYioXtw88JH3nH5tyPCHz3",
  "key11": "5g9dhUjpEuEEqCDHKfCgoHPMQzjUAgYcUJNBDNiEeyErzo5mAKDHCPV4rLq5kAETXs7PBx6YJaTiRBFwPbW6PG7X",
  "key12": "5vZWE8KBavjhQqUyaUuTMXUfmqKjkiyT17tu4gr2dJcZd64gVdRHsnfWhQSFth7pvmmsuDvxNT2f9e3XdU3m8c3j",
  "key13": "2uK24U2VXNrPNDXUXbg3ajEG9PoVN1sdqejvguKGGNnytP2RcwCYNJxHYwwWpVHNhEct1uNSEqqPjy3breMjgnMS",
  "key14": "44r3d8sXdyLvaWzokEDvP91KvAzgRVosEZ1cbzjnzV2j4W3uFMzE4i4ib3PYyKB9CUBitraLKEbvxaxEt5hFcmZc",
  "key15": "3SBxJ1Zx6HrGdngmcD7UkXFsB2EvTSiYpvrRtvhQXLV9c8C4eoDh8TX9X5HZKsZveD4Cmytf2ZQtNRYPXGVjhBE7",
  "key16": "4q3EwjxJ6KmHKP92CtZ3C6HcKzEBhU4x1C4wb2SWhpfizrE68Dbm161k3zBxrGidJ2Un5hr9dSyHoZQxYM9mb5fq",
  "key17": "2apVeSLXHaocRcCQ6topEYeoS2ErUPKbRdRJvCqDGXwyHf58ezNXUZPj4y8X2WaWkDidVbeMDbsULDsXYuuZBojX",
  "key18": "46sQoCT573tfgpjsKXvhpuE2bBAjJNiATv6Zgzwg7THTi4j79Zgb3upfCLKy4daswd717WcTCrpyZNFLTobdriLq",
  "key19": "2QjD6uSCypYxazh3J9MnodCunTspHSrsJnTpRQSWBKhPnj9PWjJHNUqmTYV9N8DiEau7RjabHXLD2T2HDvS8DMb4",
  "key20": "iDUuHWW1Mxz9Q5Mh2X3tMxBTKL35xr5RPFHhkPq3LX9Z7JxMkuuadCQMEpKcocwNt3VafafjUTdzqB45T6M2PgC",
  "key21": "bRE4FAUk6Qyqq9qFLtSFy2iMf6BVtJBJ1TuThBPnr7eGXZ96k7ayy63uiSeXSdyng1S1w96JrUwynBcyyh8Wkkg",
  "key22": "4aHDX6MLH42CH2kjkmVNXVRiV4LY8t6oWhnPhnMW2m2dVNZur7e1VXZYracQgEKP54czZgjWWCryZn7E2AscD3NN",
  "key23": "s9gdokbtSpkTkrpGB2n9X5GGVM4H8uxG9xJsc6NYf2nHBmLokuDhHoQ3yn158TNnfS5jUU7BPXMpfodT3NCRvaT",
  "key24": "3Y3sZeTJubXTjKrh5vSoro1Yof2tkMbaMRGx53RqUJu8DxmX7KAQV4zgcZJPe8ZEtYoLEn6Szo7ktcCotXd9YzFC",
  "key25": "2QEagSP9Pi1qxCRcaJjc4vdhY92jvKzu4MnJcU1xN4fi3txdszeHZhWjW89pJnrNQKAatqt8xMHBA8P8sAk86Ypp",
  "key26": "6nadaHmVXad2L18yV4NXr8QVMnxxcurSL3mAwBUnkzzbNjsgH4EQ2NEuPd96zaY7PZRHMTvU1JRVppRTAdsKGF9",
  "key27": "5JGQQFHzZSNThaDRr8xLqHHB3KHnr3ftNXFkvW7vdj8BZVPj5gtsWYuKokibjHENiqY7Ejv8rn1CYVqjRtZ6wDHP",
  "key28": "4YM6XRq68TXArR1pTcrGUpzA7qFQ6obNKrpknWJnw6589pnEizWa1tbAb6ytjVr9MN3tx2P3FA5RJ8WWA5ZSrrA2",
  "key29": "64hXR5SKZwSsZCczLbdzrEKCqd7uYy9vcZudo1DZgLdJMXgQWDrA9x41KTzR8TwFSJhpaFhuwWdXT8B3p9tjxJKH",
  "key30": "5NfrnU9Cf7FEV18Mp3LZGXVY9mN18bps4pQ5wtus98s2HxAtCpgn2AGsB7uPrKDXLG6A1J5qE4WQ5HPuH7ng3W5K",
  "key31": "2B1pDoLsCa3fSojVK49zDZi98Lj46WDnY51uxR3yNqLjASzhvixxEJs9eVQoSHKMDrEmSKQe1H2anyQiPCvB3Cy3",
  "key32": "3YxBSUsmJ4Cc4akB62FfbJWbM2Aq6ESrQk2zKaxEYPuUQ15qCbM6C3nwTLm2vNA4CHWWz3fFNmjmTJ8ku8eFh1sX",
  "key33": "515JiGfonw8G66r6edQ7amQ133R4eJHCZdYKkpkxmzac62WLcNYksanuJ2EMxKDH2iE4sEP6ejbhrzsU27NVLMtA",
  "key34": "5kRPWowtuJCqtRGc8JGiJmzfq88QFo5Ru2WW4wDBuBmJcVdHCYYVeyhXgzAGhKEE2ebUZoMUwvCLnzn2gWA6z3d2",
  "key35": "58MnC3CUdHNrBoAYac4pUcyW6uCkwQNZoMvyTqckSgpne7G1e3RwjJnDN6igeZg8xmB1hG6Hu35FdgFjVUmLYYzg",
  "key36": "4fiJxkcHxR4VVHeVBZHj3bYqNwetbcdn5cdxRS3nGBgWRjdswBWvm2ADzDJUuKtiDYS4iphhmH6s6ZWoeJzsdk8c",
  "key37": "477vqT91axk2HX9jhw4mwSfYA15J1E8rwS9TcJPh1nXBR47p5wfQytdrEbg1wSQLCSBCGGtrbyRiAQ1j9vZWUrsw",
  "key38": "2CF6YLxGkE7mQXuKbA4qpZaQF3ftUasAKGGGuUhnYNVsvPdDPWrEp6zMNEGU8gW9xy9aN7xgG9VbawkCDFu984DD",
  "key39": "4BHqPw87a85DZmTqcT6qH3cktJPvyM3TeDhSFJTJ8oMh7xH4vqR9yWu35B3qj9mmBc32RSx1pzwkh1MC75vsQneS",
  "key40": "1S4UviBUcFb3tUhrmuFevqerHXQ9bkKP9q7WybMk3xFBGmww36nrjuejbwwtosoQ4r5yqU4Y6ruxSDrE8CMyqEo",
  "key41": "3q6Aenuz4VyLM6okKW8xzRph1xXjtuKXtZrZtVyxXaxhb5LjMkZnqyj4AmBAWpPtWJVUkDtH1WPXGWo6nmw6hpBf",
  "key42": "2azsM8WYvP7SLEBKki1ycv6d8o2TmzixhhKUfCNRnHWGQaCwqJPiwraHo7jfVEtygXMgUw2LwTio6gsRrCmcfabN",
  "key43": "2E4ghFDzpA1ceMpn4iaYQNieeiZcpCJYU6zHePpHVNfhs9RGFk5EwcXtFRPCTfcovvek8sHWwYcYtwVnfzp3ZkxD",
  "key44": "4WZHJLwEWZt456WPsAZHte4u1BxaYniBPQzCH8n6GYVRaVwDmRZdcW4DoRhNJv7U9cxSWMD5oVkVdE3Xwdkn7MVt",
  "key45": "3j3FGpWpVZU2TEhZ6E9Sn6aYeUWsEqGHKYqRST155v9je5Pz6jspA7DyofqVWxCsfrz2R2faYpo43fgffBjqTnmh",
  "key46": "5urLMyuPdwgRB1b7yPL46YXczscQsfY2XuX8Zws8sV2P8YWDsr8YXRFDyJ68QttCscApFqKazykEpATXSE6H1gjM",
  "key47": "2uVxx4WV3T4vY6aYH4qEZLt5YKA84VhkgLYGNiHQ26xykireW12LrZsiXnB5LmoS9n8nnYX27WBLnxUcfSHGEzSf",
  "key48": "NE4K2Aov9CMyQ1UXVx8WrhgFxK4zQc2Zabe4ZCtFKbwBGnirPDTkhRiEEJiexVkqZfckaTdTCspwQQypBRmvH3d"
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

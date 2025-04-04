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
    "2TqLfZnSdJCT4XP8nwWdsKnKC2Pha31xX1v6hzwC8XvHsxX7UxSDdx6r87WsAKcbPgPFG46ZaQxdzGeJuxMg1V17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDmpSHMqB3eQgPy1sXAYZiDWmogEYCkiuSoaC67mmfBiafF46Mp54bKkyDCdDLRyRJVfpUN6quMZMFLZKA6Eoo5",
  "key1": "28ZoVWdGMGTzqsEJ7934LeBhqXCZrmDbSezcTPRzuVoK67La1wAgCWUHgs5Kfzvywn3uN3R6dLgqZ2N8udj2tMY7",
  "key2": "2TMx7VHMjTMz66uQQN7SpxDMfjMVgxGqReG6EeaBoJzJHEwW3TMp6Ye2ceCZaL9xTTUTYhikDbyptbnv8zSUgF7d",
  "key3": "3PAPAB6T1gNwnbTJfkwNuxT2ko6Gq126H1nz8T4Wij3J2LkQMLkC7Ec9D2pUfQzQ8EWrP3P96ATEdWW2jimBTEhu",
  "key4": "5AYi1QrRss2hCw3erdPrLDjHHL7zYkgPHiaohAaKMc7k9viyNTQRbnqbhVBuArw3iNV9Rd4b9JTyYkpWkN7iUnux",
  "key5": "ZQztKrFYeSvsPcAYdKcK22g1Az5VF1EKR7FYLbVqho16mgi4yEEiY8UkNsUpEjtb7GGiS9Gfc5prTSs8XMZGwUF",
  "key6": "3en1RSZAEitoiCz9Cid4Uqm612GLSv98jeLZz542hwWbAVpz2hNeQUTrBpHyhfW13p1gyE8UAdmH8idivLwWFA8N",
  "key7": "Zmi8bViYR7V2Eue1EZ1HN9dP9YpwsusdRJfyCErQW7rhrYu1aKjfe9audHXQbxZEofGrM4XexnzsYLYqgkMAAB7",
  "key8": "8v3JyY6Ng7xLUXNgVPFKUaqdV8CEf4yJ2W1j7a9uxJ4NMiknxS2kG6xuUWWKTNhdhgN9qnqjRbU4jeKbND3vgyS",
  "key9": "2rQ7mfQgrcCyoWXhFPwLMB7Le95pfxMXZyup8pYQP2rPU2VYn4LNin1dVdiTnNcyTut17B9oSqTU6t23FsjihoYw",
  "key10": "2UgHLbE6cGn2TcvMdE4toKrMVSSjsv2xUHyKaNme5yh7qrLCrS6xQe59djJ18hfLsTLwiTYFziVYPVReNsk5EosG",
  "key11": "3SqPemkUpbvf2GKiRew5W9JKyU2g6y145q7sGHrtw8booM2KpdFbdfGfLXyqWaPM9kxHBAqBEYoFHN1No4YLAoFR",
  "key12": "33E9xFrPJCCnSmcEVBZtGuU6FyCa4mZpE9vtorPFxb9Gw5YRiemS6nNdQw6xia5ZDaudtUFSSNL3T6p87X1zgRBL",
  "key13": "5b9J19yUVgEZ7vuEMT9oASSGRagx7Yuh7X3BtwKKUrwdpQRxC8MGuNKSbyD4xHNTEBtV81dzPjJGdsWNMfWNZQA5",
  "key14": "44FczvoCBnabHkWJoFu1sWkfXnDg4TbrtFcjy5eP6H8uBapimgmuTAc2KozM3Ut6aBePzXjh4i2QWbRszWgcFs4B",
  "key15": "aY9emZ91TZ6UW7tZEY3RPnzjEmkwts2ND5LC8coFCuE5Xw8t9RbKPYf1sMdMQWv8ynTS6g3BMC2g8NHgHN5aZxN",
  "key16": "2YdFFdWT68YKHjgnGj8RYNUgyRWEe4uQMeD3QGahM85kkN5HW7iMGGaaobPuiqeXxhtpuLiKSSeRy7hxcD5vXy2P",
  "key17": "5weKHwj4o4EBm3zmcJL4j2rSaHeWxSWC1kPHPVLFFPxPTHZqoXqJ9B1WsqqfKY65F4bfDTvAdE9LZKN4hnpmH2MV",
  "key18": "Y7ub4r3SLzapR3Vez5d5KosMnJbHKqxkph2idd9YbrbYxAujXLkKyHK7g3YyYHHfXfNZraqhzDACdjYC32kF5Uz",
  "key19": "jhBMJAPfD2eFwwntNBKTemPv5hHiR5tKj6rJXxKJsymLYCox96wBkZp5kYG8PDJ1DaSBhahrZ4ikuH6HUJKattP",
  "key20": "4opKHKhvQVcdFkXpFJMwMdTLaE1nTQqtj5sV5cgLpBqnqDowQwPGMzin8HSGc5vir6oftiS4Xhounht41X2SekyH",
  "key21": "5gdDPFXkrsCcuRwjGymHpcjypyDKszeyEvMiWntz1SGj81LnYC78eym1BMvfvdv127MPzmqwfsj5N6f4EsofV96q",
  "key22": "26kDsTwRjVi5Zk9zZWtkznzrhuHsECmnq1Tsw6rovUqxhW8w5aWfdtiXa56WYppXPjKK4yvtQaXYeRHQUppR373r",
  "key23": "27AsjoBYqVN1JDF6rUXyJ4zcz6aWkPh3GKZj4yXxbk4qR2dVxYnjeuMi4s5yXTHDCSEaAP4w7e7XDecULNepeK3X",
  "key24": "2PEW12sNCJ73dxRh5nFC1rHcqXwNXSAarT6zxaTSdWoraYTNcbhkg3DP1AGbhRvt7WDBAQAbTxxwJkoofurLcAhS",
  "key25": "2wszPGV5WeKN1csbBde3B6WFzHzKReSUa5tYhp2Fkrp3K2XBbXe3QbzkAV3TE3uYawdd9Mz18sto6Aqtakt2j8Ke",
  "key26": "ujg1DihJm6rS9rmRa5zT1mkq2RND4n76yGdKucczbBgBpSBMZxgULLxgzdJjxm1S6kbu7ycN4StHUPac4rTK7u9",
  "key27": "4bG4sMnByEoTnUYrdx7VPCfgEz1ENS18aCSCyE7PhbpcVAnM3EwSvZsvahTJ77sD92pd4esRE5dLBrBjWE9ChKnU",
  "key28": "5HM49sWL8uiVpJRWFyTBRA3DPb8DnKcrLjSq5BaMnb5pKABQrp6YSn9aqriH34cf6zcoHTo6bdeZdztD9FtkrV7Z",
  "key29": "4CjzzbCd4GBxPbPgkm2iWQqwqy6Uoi4o6WTx5PBcFbq8geyavYymYrXqDLY8mTUhqfFARmhCTvuGkHd1x9pJtpy2",
  "key30": "5e3DV8XyQo7wduhK5wkvxQvFc3XB9qUoCQZLgrngUw55QjH9DpHSxt1W45khkUyb9xApKNUCa7tZxqxs5aAAMcZR",
  "key31": "3nSPWeC4w8xse2LA3xmEUQTzyN3tS3j8FztfmRVqHy2AfXUAowyyUZofQEtEiycLqNyGLkPxGNNGuyF3qJtJzcxQ",
  "key32": "2BEaae1baWEpMLYa31DAUWh8rEdxdYLG8iw8XWBEiQE81opE8t1Wo2GmB8tAT82yq897He4keyo95Tuy7ztdp3Vc",
  "key33": "h5USAbgCgF62mG36gjvXJNodu2nBqNQVju81XC6SQVAwHkAZYe6oerLEwbnB5iHWdj9qWFZqxFQB42LgDmJV5o3",
  "key34": "5QF6Q3GNAeeaWAfq1v6Y2uTWR21P7NW94awQdjapqFqbHo4mdBR1F7vEHv6QALAepbNPRUgFe59jhnjSWuez1Qwy",
  "key35": "4c93yfgYYmJG852MCsXu8Xi54hzSw9bb4JHJyqQV2t3KJnFVcZXp5DC7S5PArvMPWzWSevr9MFz4GpPrVYaAHtyh",
  "key36": "5oTyrZEFonCzkoR4DhiNDacKvZi4vnBSVcskhJVVoitkvx62Zrbi6NPcLQeThP418zUfCzKqUB3evjcX2BVP6jka",
  "key37": "2gBwWe3DWNfoVWKiuBzszuEQ75z5D5t5RHaEFvQ3SwvqdrrFSPk7hCk2VtKoo216yy1kz7pYeYBr75e71RKvwcTS",
  "key38": "43C21ZD7zzQENitT7Etp2tLni72cN595QAtBqgdgdDJ3Q2RkYjT4xerz5ZTbvS9KtMmEr5b5mEeyxZNvA5ETF4et"
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

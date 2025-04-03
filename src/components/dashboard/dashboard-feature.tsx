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
    "3cDdotMTn5d3MQjLr7nTaUckP97fxCqeCeBJ9SnfXSmVDoy3ckiisxRmvvewY4QTG2UeWrDpGvunFJd3tS5qbPGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GfwkGTmB7xwSJgtpBNWDVA2BCajgLXeZbYLjCdsaXxQmEeU9TVMx8ApqS6TowVBDjj92wkijA8ooZZHZjHfnUg",
  "key1": "2m3d1MNKQXLx4aLj6dQxVzhuhs9912my29EWEyXKtzbDcYW6KN1RyHUZv2QTVodST8LDL28t3PHN8MLzDKt4gLmd",
  "key2": "3zXux9zoyN94cShtC5i8Nyzid523q96zm4UCfGxrc5jXT3Mz6hAjpRxBFGZZmWtSJoBFGB3CLDhay88fv11uxf19",
  "key3": "3uokuXFzuVmNGfLnD7kAi9K1wiJttAJnZEdCisnkp9pSzRikw9mwDzFePidvEQcqcz7YzL7uDX8H5QXFQdsLcFMQ",
  "key4": "3Qv3SBCsPaVD5WA53DdFNTbe5s4WD7X3B6Fi25LApEZcMoCjgombpsz6r3EwxX8k1swiyT6UzpUpjWKHjWDBUAVu",
  "key5": "VdQPGsZXeF6Lk3sQhubPH8nGepUesUxRY4yV94xsUnWyBCa1rJxRTcE4Veq9vVKc7kngqLBB6pPUbRinFTxyAv7",
  "key6": "5wXveqym8AsvMCrEaS2ZfCbyLomx9RFTuMQatBjAk2p4haMAVF2FFv7BwcaUFMWwJtndYvyGk5Jq1ECsV6cRnPwM",
  "key7": "2YhzFQq2pWSrN4XsT7qpynHu81x41XvJECiVE1Gwe83M61d5NfNvEVJDXZMddRuZmqXo1QgvoiTcTEqawRrdozSc",
  "key8": "4DYUB7CF2ZoxCJwNpxGmkEgMRHuccVbGWMU1w4Qs789q73yXAevgqBcWoiJdwHkaMRvXTedSscm32fdxrnpekddY",
  "key9": "5T7iMSw7ryHZ1YxW5Zfq3Ku1AgHRH7rZFyHq8ZfSpLkazHy58tr8qKL66byYMtPMsC4GunMbVm6L4piboACcn1Vq",
  "key10": "5mKSpyCumsPSRAYuuUHTZxm6iAfuh4ozyYJhrhLzaRgcHe8dC2c8Szqiiu9qk89vkCQYuTPume6LaKQV91FVzAyV",
  "key11": "58RApGXhc4ovsUg6GRrMGNZLQoorhicvc63rL8SU26vM2waghWYS1d568CjkWCTP3fWLvCdd3wmJRCPYT75dKdEW",
  "key12": "tUBDa8uwdfkoRLFJAj9PMZjJHK4oSCYnSKEHUCuv84rC5Wg5Rq5KL8292tEun433MuP7n5SrFE1fzjgwjUPndRf",
  "key13": "5iVkwSSc4K6kUWTk7mr7xMUY3csuow4HEgCdqErYEXctpGGvwy2yrt9Pv4CCCh21XH7FdY5qPQHDMDeoLE7HmWkM",
  "key14": "4ZFRq4ppzybD7xdseiwP86CFBktHErp5toTBmteeWbkLLRJiL9xZu1H6SGGDmWNetc6gR85XeRbsxLUgSJ2WUKuK",
  "key15": "5J8UmiqdyiDdqPwz7aum4PnhLZiA26ufLUQRpFibMKnkcKTkq9MxEYPsANqKTcBYLMcjQZS5sJGJMw9v2yHAMyAo",
  "key16": "2w6wsS5DMZoaq4xMeEPesEhH2N6crmJ79tyPoGwYxMfCgn9jC9JnxSQ8HgfjZxo9KGNG4FEaVz5r4ZPaD9hvivAz",
  "key17": "2DsegQkQhSPVtHoxQzAdLokMkjJmmFs93pFe5NGwyCS597BT2YgTRKiavX7FUpsLpwoMBowpdh5U7bgzhXTdWkGb",
  "key18": "qWfEGcDfJzENvytGDz2Phn8LckyRjreahBHm5FEMNKrefuo24g75nTPoTyJAaJ9KeZzaVQQLLJ3EibCYAhEdsCm",
  "key19": "64TZppCDwbu4ctkhPMaL1d4XxMcLbKyn5MK8y4PzXqVruKjLHD779D9mVbnKMMrs2cg1N6mz9y9RxcQxHhjTvsWH",
  "key20": "TXMFusukEYjsgHT9v7BoWiKRdttCqMa5GDQGxyt7Re6uA3WMAucXfPTQR2bqcNN32184ot59jVX4rCmmAak8ibk",
  "key21": "2kWPWCmvm7oBEfekCNc2xB6EaNb6o2KSX9yyfTbrzM85PeSxiHx3UwdXjcFTb78CXaxJYzzqwzXJByxLAPTV4Pr",
  "key22": "2bFdXUGrJAHwN3erJPmyMP6wQjCpzr69jQiKU4CQoyWfQjZbLruwegb2ytVXs2CmGZqRxZPZWQCJfvuY7uER9Gf5",
  "key23": "58rYM4bHQZsCUdKJMhefEj2zcwgKqYBtmnSTN7MLnMVusWjxqR8futV7HY5SsK8DhnP6wevRnbHrAqHzHGh8vqNN",
  "key24": "2t8ppborimnfkEayvk7v77JUvneFpGViRnKhkpL4bafKQS37Rs6yx1cS5yWYvQMzMkQx8GXpDaHJwAfsyiuh2Hpf",
  "key25": "26R3xnxRDw41ENtM4NvuWybN6GzG295Lbkx3BdkMAUjyW4XGjUuATJDXt43L3s3dd7inHuXwxNGNsmPU4ruLDSaX",
  "key26": "2LXqpHxtf8AAhazFjD5qHN2LWzvtD4qcAwAQZNmrm5bEHHWRSaxwyCWq8izZLbKLLbLiuc21dcPLHkHBV3Wpjj7t",
  "key27": "5keAMw5weo3NShx8UzfWue2V7N1A1tgDaFqUparn1ijQUGNay7zbRDMpCc1pcidnnyP72Vg9HsYvDpXKDYRtLXUT",
  "key28": "521W84hh7HP1bsmXqeBf8aYTPS6Dg8WQfyXHJmp8hVobLYoMSthXxo6EWRgdzhNuu935GLmAGHXA6a5Rjbyv7GXr",
  "key29": "5majBUDwzpwpYM2wVFpA6GZLGvLyDuG2F6sxdSUbL7vpaJDAdGA9Emn1BicQ5Dh2KVL4J2anoWznw8JDaPqJucC3",
  "key30": "4jmzqjkPSctEZzURaLmkR1Qqz8n6wELoTZ1vgyp7ELvX2HeYSDbFxxXnxeuFox8GqA1QU84FcFjJ7gMpzzWT2v8e",
  "key31": "23yRXq2PKBKecFThYxpwCWCahCmvC6We68keyRcC9yE2MVLp4KPSQ4f1haAY3bNdFn3CrThAUQRU7ScBkSoYkkJb"
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

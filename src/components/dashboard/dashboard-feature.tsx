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
    "qx6jkwB2BbJAVrAkCT53MVbP6CmkbXQG8Fy55ptYDkcRPVQhcQRo9NgeQQm5xg4MxrknfhE2fn5ybd1Z7CXfrqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TiHGtQjBSA5Ha5ocSdunxnRDcc1J1ch2yByCihMbYAk7vUr4wVnxqWMd2hT32epZTdoQucSw9zCakxRyZnMMXWA",
  "key1": "iHFCvyyGRMreeYzjBjTPEfWKDutv3NJZkmxmBhbwduwm72S4H2T7hKCPbjVSxzNkEq1oRjr2H1fjACze9Z6YJaW",
  "key2": "2MpebBaGyYpkmZVT978PiAq9AuHycqNgpjLWQtryAGxE3JpAH8DYzrFUxPhoy4ov9MweKs9DW8xnJsYsfBZAG47d",
  "key3": "5e9ysUBX41reeTndrWJTJbnLp6QeFuDwkTsvJLJ6Zd2v2M3cvGZwyWxbEHRA3f25g6gih5oA4wuRTvCKxVFEYMQj",
  "key4": "52GgvRBwmzR1CQQZ7a41cPFVJ1mZh5SNmpu3vr3DDVscSoDHxKXvANLgAAmNHbjfizemN6qWGeWMY2vMbqfbcVpd",
  "key5": "2yKx4KCKwWHK4WH4xGgFPRr2Zjb4q6298DNbtEdtykQ5UmS539i8duuytzTNoByiDSu33aJVvS38c5PjyacphGk7",
  "key6": "2sBJ9ALQHPoNRb1gYW5U56m9wzTL1SbKmuUW4o9CEDY5f8Az22DRmYDT1QURPZUynhZwMFXRYpWznfvpVDy7zCQn",
  "key7": "2BGwS5ogfy6Ahpx2fpNomhyztq4AXLujBW1NX2MEZMwMneiNVGEbmWVFsnnEmduJwfSdwYiVa8W5UJnJcskdU9p9",
  "key8": "4uEfxDzWPrfGZLTSqjCt7nG1E2TxcVZEMUhkFMTAsrDMt9fXZsFeBJLGGVudH5NAVNvko6QFTuYTLepbaqFue3gf",
  "key9": "Zk5NCjbNwuMBYsVmH4rws238rFEGsv3qbdfp5KYwJCqZVCkiDJ3iKykFxqaKA1hDJqMEt1966i6cBnFHEdnNW3c",
  "key10": "4jxtwybvduZwpgwPdzatLLy2yE9WZ61Aji89dSffTCuVsJyC2gj2ySkNdnrEcXHjngZMpjjiYxzRoN9wm51kY8LW",
  "key11": "3snpDt1fsR9cH2Ao9E8dcPrmHH8785puu1UHRqiakyQyfQHKxhhX2wzhiC8tCtqMFuoJ146xcQSwaywkcnzsEky4",
  "key12": "3K5ZredpvtQkw4R2jjqjH4XpobHekYiTdkWc5fMrWGXSG1k4MMEYguUPTP4ujvJjHPwaVH2DLacwEHzJdxFcAv9D",
  "key13": "231qLAA6VsEr3AMBaJhsTcgS1p7zJfCXZm7ZdXX6CukDFyhGQQyiw2XWMhDh3EQyD2XEzUSnLT9VQV4BEEdKeMor",
  "key14": "4n3brNdX8xeSwe8qAvNx5ou2Lirqw97taQX8T3KaMp3qELe2pYud45UKbYXgbn4tG8J4NCswQS2u7JvQmphJKtR7",
  "key15": "52DoSsJnKfDsT2PuLoAoBdTwwyRgBNTgS42RbVsdzbyd6kkkW2Gk5b9EQGjipvJDB6pK1Cy8B886KZKYarYrJGTo",
  "key16": "4Gz8FPZpubHp6eqpP2f5tgw47jBfiYtwt9e51o8rwRbYRVnhBm8cmPXCivzMJzZiwZmpCjkYMz72TeqbEc51yhea",
  "key17": "4vtDu6fo4HcXih5rXoKWvDDWrgPy4H7JafP38xnTk6dUZ31C8djquyx4kcqSt3TqnS1sKwmAzBqHZbmNt2dQLUHU",
  "key18": "4Yy1SpHvnqAGk9jLLaXR9zeTUqc5YYcrLYuhme26Fq99s4WAEErMLo5Ko3VgNsDE5nZtqaCAqqqxCdmA4f8W7bTf",
  "key19": "61adwb91SPK3ybJbKdxR8BbWW8QLsLXpGr7hVBmeSi4NsxyUcynnMLaNj4dy44xQjmuowhn8VJWstqPUGHMsRi9p",
  "key20": "5A7tQAffWVn5Ef7prjug8Lhtkb2gTwnQDVxFbtTxGam5udug7QDLydnRttgqJeQSZQJP6hxftDzh6o8cVhtCLJE1",
  "key21": "4utNZBeCxmhByBBbJqaq9xqiHApnfCaNvVqdAcSqPh8tctxPGnLQoWaNN6Q6fGsdRrfotyXsZxzdBDTHb5BtvEHz",
  "key22": "5mRP2Fx8b377BoG8JKso836ueEJFeoHfiHGepRTEyhXESvr3oKo2PRXhhyftYvwT7DdK4urqyMuLNeeYkRNCsf4X",
  "key23": "2H7eusFZsyinXRUrfYmDNxfAa9ZDtEFpyCwVBaxeVHLaMyVNubeVXJ86PW27k5DJt9YmQ6GSrdR7SKJyc8FAdRgS",
  "key24": "jdsCCjWfjHzQW5DmNhocd2rX8dKcCb3ouB29KJzsJb6SBfCt6RHdyUyehB9iBJyVVRwZHNoKkwMa8ZQEMgNSumH",
  "key25": "464bv1XF2xaM8AMWifzwvENBxYszcjZwWLG7Qt5HQ9HYNnwM37TMxthYcDo6SLfkka7G88QbRwW7nJ8niy9vZ1DA",
  "key26": "4K4REDG4srw4GrhngxebFXgEPEsU1jJhP79P5FjNtPPRu5AtVaF93zGjUyWhZhaYXE1jM1ubtsZUttYbofy9RYPx",
  "key27": "4fe3xMbYnWkDbMy12Y2WbczA8uvVon8PKNi3Bf2XQUEhYnh81AYfzFz4yQgj1EqybyaG18uJkg1NvcRJifZ8rnSs",
  "key28": "41wUxzcyee5ngmXpaw5JFa663gWNZXcpsBQ7nyPrj9yuLpunja4rvb3MGbEYGg4sqo2UW99Dhob4uNjPSpHzsMmT",
  "key29": "2CgaWrAk5dkZebWG2eCHPdcoy9Zsad2eDsWs6kDQ2Tc7QTHWyjPJRMKuZFC3Y9EV1rEdMbSjy13s9qAFaFmmXXyC",
  "key30": "3LhX2zvjkpat73huPKsuo3mwXGLuBG9tt6S5qerwZXV5mhw1SW9CbnKxXNz9tXvvZVR6EVZ4hosYgRqfKiHd2vbm",
  "key31": "3Lt41fUwtBYm4r2Sh7VhcHozNavamh1uB3k3aX9vwbf5QSs5sx86uWjMpt2cQUCLvH1mkn6pWQ4s5QVsPuHGCfHp"
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

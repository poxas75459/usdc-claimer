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
    "2LQZUEwL6eDktkiewNFSEDT3TiBwYPR5EzwAceYPbsZHejR1jYQo61EYRxhxHVadpYqtpemhwxbaPxemcUJSo3ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t7yxDCxsQPvCChoYUqYfXm6Ws6CRDgczqwtw66KhhuBx7K9qyunDaRxNxiiiarcxQryt3Q7Zn31jUiN5GmwDcYm",
  "key1": "54qjvXmW69yngKYmHQy72MygotWQQdYm8v4m28iSLn7Zf8UegATPP86DQSxcoPM72wqWWkt6D3vTqqxUqSCD6NuD",
  "key2": "5tP37JkRgbykD5PFLh1j5DEqXnhgamJi8BrvJFtnCyLpzFw9h76K68MWbZ1sPCACAAB1MyiQrty6mdX3jxcsVtF5",
  "key3": "JQ4EWXk56mkwjaFEkMxunc97cwNrBzD8jpJ1YhP2G5wAf6BdW3xMAYQL7LSaoMhvwW2zsYRkJfDgungbQWtyjfD",
  "key4": "56eE9N5P3SybW1GhUsmWv2pGW3W3zFr5J8BXRu4DiAPmHc1EUKtA9PuPWU7rSbzcXM24vAp9F7QimFAKiNi5DAJ7",
  "key5": "3xz1zHXryJ9t1Lb4j721Jznr1donouy7wdEpN5JvihcLtcFdymeyF9W2ASeQbhargHs2b1AEetwkpCECyNmCnYCY",
  "key6": "5Lhn9gZoWPsPf1w7YRnPQzT6EyPX1ob4vqEgyASCQzgwueVf72FM871NTkcVinn9ukQP2viQhUV9GC8XAYrM89Yj",
  "key7": "55WU83HeW39MvsWRP6oaLjDqJNLnJdEDcRk5mkn6mFrVhLm19HzKWVohCeExPfAoZ8rhokE4Tq5UWTHrhpuhK1eq",
  "key8": "5XxDEnvLSEFgktPsx1Yr7aPNmgF7irJXL1u4S7yW6HH1yzL9EUDaHH1bRusLjcEJLTdotwSGyE1gAsBMSRjmTafy",
  "key9": "4CfAx1jkM4BvDFmdmV9fr5SPiX62xRcRbNcEruCV4tsrA5TXTmT3kBKEJXCpJ7JNRpPNbYPJTKfaGexywrFnDMXN",
  "key10": "5hc6xnjLTeuuwLQfPojMh44HLF8WvKvo2fBK6jmpuzUFNoj8LGP7acvsFyxyxShxuV16GqbDg6FfakWUiqceLrQD",
  "key11": "47FZStW7uqeN2swkD54mwHDg9ogBvTmoY1QEJYxKCB9KzR6BqyUkTuv9gMef37iBr367EdzhfBRoJ6roipTmi4aw",
  "key12": "2Xnx36LNAZvV6BMsa9ve9mioLMWZ3yc4wqd8rb3qSUfMvs4ushcyhiGeUZ4YupjfubxBY5kVx8vzX8s5qvBBDdXf",
  "key13": "2ituaviLURfNBDRZu8U4aUpFTibRjwv1brUPbE7VZ1hBQ3RPsCFc58U7t9gsDjM7Jab47GNieLkHVbiGsFHXdSUn",
  "key14": "szRKVTnNoHtAXywhFFByDhv2CPqrn4MNN2mVQbhheesogjeVyhMWGnzzFW8MtqueZMC8sdpw79Pmph8W4kWm9KR",
  "key15": "5CQLftW2XVtu1sWXDp6vndBEVYMziizhMdQvr3Nd57jkjSyLSSTEvYrUYdQbM6XRA93m7PohWLtX21gncK91qW7K",
  "key16": "Xu979SdXBK14rsm4i7KeFis6cdjMYVagQGSsrKhrviNvVvQDh9ikbLbBst5V9WtbYmNtVqzQBT6KppS3Etj6bYe",
  "key17": "261xFJmTmpS89CbDDd3xJ3y9LGo3aALHdRiEQJF9nwFtZ1zbK1BfnEhxrH4A97JadpcqHHav85i3iHHeFkNAT4We",
  "key18": "3M5KeWJkxtiQy9JPPDmUrDBXoY3T6RzZHntqgHdsFxNK7gVMTpKat4B2gmcoTBndyig2WmV2BX7orY76esZN1XXR",
  "key19": "2tXgZ9FFWB4EhTzG9fqoPTKNwGRELcUF3gSZ3dsuCae8JAE3pVfBeZ9PcqZs6H758c2XxH65gHWvPasWg5mRrcsm",
  "key20": "eXiXdFewRB9JeY6qCeQpxrq7RjuoFf93YxBuKptfq6Thz722Tcp8XfvydLZWurLMkAFfMUgcTw3cHLR6Tn3g6xe",
  "key21": "3bPzUczcLJneL8Nu89Au1hLMQ7TTMp4TsGaKzq4UdQ5j3q6NsoX6TP3tAwsFEDuYrRSSN9L5mvw7pBvgu4dFUG8s",
  "key22": "283HxX8XxDbeL8X8QyEL9NpXsJR69FnTcTT4r7LCRB95Yh9Bf7vpLXsx54bqLi9mb3YzvQgYCnbHRcYZqYuzjgKy",
  "key23": "3jgGRf8nyL4iGcyxzqZMqwKGanfm5tdNTHgBbdKWBPBpdt3kQQTwjAKJR6K6Y6ZLud3AFkmr2HUVhB3LBBEiaMhS",
  "key24": "4FpnZYGAUDkP83w18gqXbfKGiVrGa9xs4MCPU3cyURaWsoKv7CtgYbmMntADDvhzDJAQG1kndQiUjaGGPigmzJ9",
  "key25": "33gQV1LWodBw7Ho9BQYsd1viRnknKY9jYBpSSYZ72E3iBF8bTQj9agsNVxak4B9PhDQoV8WzMMfvUfd6VYrekthy",
  "key26": "4FjuwJ5PM7CLPw7pUuZMJdAznLLkAfbQ98yH2BebSrZ4erWHmCnXVm9AmYBkztzVcKmNzXaBV4rHWZpRwcTV9fys",
  "key27": "4ChaMsWoqyecNkh23MX7rmA5xSr8xHKvARoQ2zKvi2UZswWiAVBoKwyyEeHfkoH8yUM7rwihRtyeL4XaYhWDj9zb",
  "key28": "3Et3JgguBQnmXMqi1jJCqgkXaS8dHbAL7DmP9X9vRDHuBEVZRMw9gpu1mAJ2FQNBiHswMAQMpmHsqyBybgbkn8Bt",
  "key29": "4vF1sTP4m2NdyjLHxPu7UkSueSTDSU6FCXSQpXiHSi4Mgvjc1PN1GSuzh5srxattEYCQ2vCDR2hi6zDS4McbjCwj",
  "key30": "jFPLPDS3aADeCMoraR2dqNxfsUVwD89Qjp9vuPBrERt9iwidhLAMfnqGG4wb6wEP9x2EuS48vdAXdhC1m2PQoCi",
  "key31": "5Dg9Jz6Ba8kTsbH6NoBMFHUGCHnMR7HVAFPzXP5bZkmPBXk2q8F5MRbiH5CDpy6APYES3peiuahWrfDHwZr2eEuY",
  "key32": "62dWHKy2uY1vynVSgkhQ242yRD5aWSqoEMBrokRRWH2vQFL8RgUi1sWuu5E5T6s9HrgWLV5DBQjWEbQtJaqqyVjv",
  "key33": "Bu7ZiYUgdVLnVNgeJdST8BnNFbwWYww5GJSFDvkyzdotftppdS84vu6sxgNAnv34bgetFSv1LKJqaKxt2bYDt5v",
  "key34": "RhUXU28niyuXfCdDcPdgKufGDgi6qabHuvsMra4x3nwkN4kRtgtoz2ABfEBznRQaCSdkSjGFXPrx1Y6xrikppNo",
  "key35": "3wx6D3AGPCXXPxTa5EvefUszUqgthiwQJSyY1yPEPNm322xL4iyos1hVxB31Rc3X3NSCRuzQxsMa8xvN5RLCiQM1",
  "key36": "Hp5PkJrnJHXJNPDxCndejSsd6onx5ixBn3VBCbZvDBCmFvteoGRMkGKondRet2aCfM8CucmwbziXYam3cMEzMgv",
  "key37": "hkaiPT8iJzr6yDqPUgPjo7TqutJVtLo4gMUBjGkvNiWMsTawywqWFbcuwHVADWhcgjrub9x7axuXvvjrxTeQKyZ",
  "key38": "3xdQs4duR9LHwicnndzjyHX4SbQhzB6tg2Tomdb1VNmriJbLpVsyKTyPpDKxiXBRg8ah8Vm1Ntu7Aede5iE7CUWc",
  "key39": "2MSQyhs7MGjtSM33N3fWXWZiBZL7D6KXUd8xw3feyNmLB7fwECRdJnaGghd4WFf3DV1G7e6N5zD29Y3TsXtc7YKg",
  "key40": "4fqzx7sWYmbPH5kzm8KrR5kKf7zYofvTFJU558QyXTiWUQP4DLkXUKWuvGPp2Hm5rAcLA39inER8NB3iT2g7U7KS",
  "key41": "DnwiBzoeyc1q3AGQwE6pqJciznAz55k4muLyxDARFZHtTDYsSb2q5zQwnK5aKA8yRa1rY8ZUSxf3HERF8r9zCff",
  "key42": "5cJM1y32Tr4sNdq3Gm8WaWmYc2Geq5xDt4EqWkMD28ojTffiPMgM83TdiWWvs4669JZzrtdEAydsJXMM24CuvvXM",
  "key43": "4NV1NQLuJGaCPWRpMv97TCPJYBehuFwobTi9YxMBmjk35s6MFUSnKY4RdHAfU9dv3hHXEMkmnCxxicJGjEfercEZ",
  "key44": "516n8kcfiZExnCv1pbSryKPqgFBnixofHYgocYkKEc5EtXigXQdb9TvJfuzFAjNvE5oGtcE7WgUopazVchexFXQb",
  "key45": "4TKJQBP2Y6XUxJPStZRKv7kLoVAoAeU27XcLM83vz7pXSbhnynCqyksv58ANXcqyHeQkeuQye1CyqPUp8FUw1xH6"
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

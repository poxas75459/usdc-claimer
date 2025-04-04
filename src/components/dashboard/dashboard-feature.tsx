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
    "uT7K4HRibvZA5iWrA8oE8pDCxdbe9e5Loc4o9Fev4xRKa1hJGbU8QTS9iEXpGT1kBytYnKpwQJ4yfdGnmaftoca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32nP6vyUprSGK9oN3e2sj73f16KnX4Qn7jQcEG2jsZodUJjmGhtx2rfRYXyoU731aErjApqa268XtJNE9CQWgy4W",
  "key1": "2Z5dbhNUEE2svgpuKEzK95g8qb8MVvjp55eAxqhgDw3Y4jGVFH6ksPxQWBP7apCvWsuVzbaCQLCn2agg5iHDUGEX",
  "key2": "SHGnvvwFV8uYWYiAZ1Zg19jV2mRLkr5DhiFoBq6aq9m7eSyfq42NHRhHemHg8MAzeepD4kJWuynf627XhNcMTbR",
  "key3": "3uiUNWEMerrvJGCGHzqCBxbjzkDrdbJLFuxVdvugx5DXsK48CB7TjrMRXGYBUKySKhU34ougetELmS6qThYBK2B5",
  "key4": "4GTgKNRXMHeSKMf3QGgAeTX8pMWYyoVnhkf79pAcMeSNUUr7JS2Wfa6rUNMU4NmRNkFB2XUieW5z23PYNSF62PtM",
  "key5": "FRXYvGP4ziRf79nXr2sdHq5WCuAxn8n2sGKh3icJP2YdSG73KjuZV1sMcsBa35ngmqU7xDDk4rPVci8JBoATsJZ",
  "key6": "67aqCskezPmrfRswzuHqKnJWD1Wm1hdhNMKiDRGDQtAvMiEZKY8kdmRTF9H7Dm1T1pmWacFAKDwLcgnXAndLUPN5",
  "key7": "Fh8GjUUgdPKjRuYdFjRnB12YRVSg6xBJBvaKtPb4iv2ebWc3Kp4syVRCeErbRTCd7cJF3SVZMajBR75VLFrqjH4",
  "key8": "2zKvHvMFetEsNzQApvf766fEqEZPP7t58da2YxfKF3s5PYpYTRVowW3uy1QvqExCNbLJAE4VvkmhS8ZiPyeTUwci",
  "key9": "35KQbApEL1BLv15wmT1c2FJYt76dLLEc1R8bLkhLYU7rxKWfXxEwHxskpfLgkWx7p5mS7ufSaumaZ9uXWcuY8ikq",
  "key10": "4yDiS5bseyqoYudeaRoVPih74gRX2jorLSDvouLq1mTYJnhUhXWreyUMpjur3Jt8nYxeN37gerV5yp9KfPygicmS",
  "key11": "5RN2ms3EQbpVsQJ8SYcEbH2iLnThdyKcYBehL4uJPrTfUytgfb3C6ZrCVk8K4qVjftZAYE7dYAqpdqNZEoU6yisd",
  "key12": "2F3R14Mj5w65y5Rdip7i3cYnXLzWeivubdaEnsPKdvD5H2sqwgAgFyQuWYCR589LxrMGqjC2w4NJ3fXHmMUjZGLt",
  "key13": "5mTRjx7aPB2FpBTCYt7jSZU8j36e5BtJhT1f4UzikUD9i18L6KaVSeEvK6dtq3oqcpggxt3YVsKMWVRSSu4z6g6e",
  "key14": "675XqUAW23v4yEi6N9QrgX7sn4wKMocTw1aRgi3eUcMhwJg2GoKNZA3HVfaaBGt8qLeQUrzjEX8AFhc8JFApbeR7",
  "key15": "2RJDopx1Se6NWzgPZmUocNGHzE2WsGE3wzc4ityMgsWJCnyWT778SDytfVBngdhTUF9Qp5WCdgu1BhghtDRVLMMz",
  "key16": "5N9atNq81kcq551wRuXbA1KPxVA5ZLHatBLPXQ83UiDU8L8S4A5fGQF9oX8hXM1dbn7ppK7JxHffaD1gshzUuu3M",
  "key17": "5cDg9xxnJUeVQwEeEqLDN8sAKHyD8JnxvH2srdd9xuBjS5AdMGhwDwpY1rikMCWjxqTDDyHW44XgiByzhEck3Af6",
  "key18": "Lo9qAF6gJkAErEjayK22K1hpbUgyeF3xJPqfNqShRVqyJBgD2LgND7vTNDVUCuvvX3TdDvVGjskK2i2HkffhfCt",
  "key19": "ym8y4Ej7uYTLadTPeEPufpDrkajVzGuez5YHLRo7wJ6HN7Td6CrUK7MKcL7rpQH4LumiHX37AvCJJZtyFsQPBv6",
  "key20": "3XVJNmS2EhAUWwiKULauxPPEVTaF6VPfnT5KE5opmPQMsRv5d1qtN3rUg7iQjFVLKgNqx4NuZpChzS9M5CKEMgYB",
  "key21": "3Tx3A64QfJc8Bt1TkgYQAtbsNfmGjRvaHMMkBRbVtQmLH1zw8KPJoeBm66ALSTVsqvbsW2u2RavYgvQFc6NAhmLM",
  "key22": "3by5YxWqx2hY7LGiLkL1Pgp6DeHNnGCSmS3mGhYo8JMMbarQzx6Jq44fcSDb8JY5zZjSXZ85f5umG5Ljrrxiyz2A",
  "key23": "3pDbVfD1tA3VkmrUYWHPRr2v8hJD2XtEdUJcwAbLqnKDkn3JxYnX9baVdQc3jpdTKeUL86pr76Wq2y2FZyAezQ1Y",
  "key24": "3rwD6Gz83X6EGpSFtawZ514nTgfcHZSjCr62XZz5NCMgjNqHrzrYoSaPho6H8Tf6aDLHqn8s3qSC7pzRRroEHUzb",
  "key25": "3WGHj3KTciZhVKmLVjpZEpQKeKYEFpyEzDjgGQXhd4B2U4J4tPJBnrA3C4sq67nQgEUcb4fTKSWgpPWQrxsXDAfW",
  "key26": "EyQaFkJHWZwDCfhrMcAcafzL2k4PK24MS2YYqUe7QCA2W9BhVBvaCVQJ4jvnLLzTtDfpeDXckZfNsKVPmJ2PVHv",
  "key27": "5ei3nPUvYdsgss1nKAxR2jrmZDVQ4ei8a8fBTkztnXC2UoVaG2afgRjT6QFGBPYJJQskEPZC3rAE834DYXTKuHib",
  "key28": "RzMf1dPjbPcR5hFHYbGtBNEKb813uAbN6DYLATtegfvoeCBQFktjGFRc4YsTvUNPhieP2XNBzR8oC2dU2Weusme",
  "key29": "ySXRcdmRkuqK1G9Qr3uRW4BtuvRLb6AsU5Ce3AQ4zXCZwgR7hqHZn7Z2EwD8VQHbY8Jg4HjGTXQP4NRyvffSvAb",
  "key30": "2fNigYdyEPStAJe4K1yfhHY6Y7mAHzGhgjYxjUdXcoqYTJAfJcsBxG9qd9mgRfpNTD9qWf6U12tJ59fismJahFao",
  "key31": "2EcdwE88DpCxCzXY1yjGyoRnNgbTF31cjiEPTkVAWyd5LLGBwF1vm8GKAckwMN5oJsTiqMJBRTvTRnacUXoaBs89",
  "key32": "3wydhmLTBU9JLX62U3inenJe4c3SL1yogzdVTcvieykPBd5YiLjYvvYDYnTm59VqJTjZanY3eshRiLJGTebauDZE",
  "key33": "5Pciagcv4bHUAjxXL98MRgCabKfrC6zFVsXJW8X3bvE5Gkq4Dk9MZK6cfib2osHLFN13Zqkmz7VNgJpaZndi4qDU",
  "key34": "5uayMTa8Bexybcrk62CGNR3QDjsabUGonL21BMkVAEgS1fTRDqd9MHERkUmkYXiMdevcw9ZvyP6yyr8vxMRsXAcJ",
  "key35": "2TJdr6M9BZ5mgMBCbV7UbKuvmp4UG7NbussnouXwgFGZVPH44VztXc6u2ssRCvaimWNQ8TvpXMuSbGigS8fgSp3F",
  "key36": "eGATjemCeCDrjQzLeKi1a7oZqCdvkbw7MJXRvDfnKtGy3rnF7BQ4ZAu5DobR75zbfRysHp9siUSPigaQE9L421r",
  "key37": "49YHB1LqjVsi8ZK2V1Dy1Me3J4NoqwgCMGegZurjzg1jpgg4db9o328kNnQfxHNTy3mk3zYrrR7BCW5NrxD6p19P",
  "key38": "4P4SacA2RTznnJ8CwN5AbFAWB4SFvqUxNEoLQY8cRuEVHVXhwAQftpFEodasXb6U7zBYwMFfXEpWpcqEQyKypWmx",
  "key39": "2LQRaJc3kVxuuP2MsCk3xD35neCXyY2JCPUMDFwqCANzYZ1Q1PFkihywRdrhK1QYuLurmHzAGCSizVcpX59PQmeB",
  "key40": "5BWkYFHCNGkHSQjicZNMS1SaqzRxPEyqHogSto58hkV51jvF5sEEWck6kSLcivhdgjrAqUgDszDZCSTWfbZ7zgFA",
  "key41": "XPpdSHkMmmheF7eTycMT4GCh9HyvQg5KSSnQAAjowA4eirG1k2fADkmNARYuk2mb5T3gfDCHkSE5Kc16Zw1nXVj",
  "key42": "idtYEoFJ4VuqWakomqUtch37z33e5Bbb2dWVHyrXazqabDd4Gi63VB5titgDZ6yXhPAbJcuWX654ZcbngUfgV7j"
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

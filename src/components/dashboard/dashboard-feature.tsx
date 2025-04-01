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
    "39KteR697HF1DGcpa47fbBLrR8f8qjVzQx8XAQw1LkGCX57jECdaXX1K2ryX5A2QyVCEv12Cc9k1cwVpg6ngBcAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d5hMWaodEa3BcSuQNMUuXzWdAjzbRsgE1aemSEKAyMXv5B3dsKPW4apoXjKXWTBXwsyzYsnJjBr8iEqfoqwUqw5",
  "key1": "2os6AAJRoiiQy5tf3uYkv2RTm7VHKm76K2opopRCWE8KLEtrTwd2aF1E8aNhcWj9CmDDCexkAZCvQx5TtALrt5iU",
  "key2": "238Tq86vjSyLBoEq9CxSMJgMLfDm5JmnAVH5YXHFPcTM2TLmLjAH8FGRyw1xBRj7gmrBs3qKPTfbYQz6vTBavbsN",
  "key3": "2yuWkffpvyEqMKad7DUWDBwhdsisXR8x7XmXGtLdBVMN55jq2TMQMgHMM2CSWZqbKLiXS9e1AjFVXNHqkxnSt8jb",
  "key4": "x2LnnZvFWHg4e3eTBs3criWEY56MTNWoQzLqWhZr37MDhkB4kfSGn55CzVgHKFSTmxbSf2yMdPLzq8kzafzoCdC",
  "key5": "2bGB19fsNDMQfehbXGFpcL6HN8xTYetDxknBxei7E2GNmQEkGQSyqymCddkGtmWMs9C9GgzcsdnhcjJPhjYhYmpy",
  "key6": "3LgNB86oBtbHrPX7hMMxSUq1qP94ewL9P4a4kve4isEbfaEhQULMTHPWrap1GiBLTAr4zF3Qxaz8F8WuDkkgCFbN",
  "key7": "3fd6TT5Pk9MyQML3Y1ugJzT4uDc1Hpv8gwwUHv3qLcrvjAbNz5dRhLqHTgpjd4po5px28NHQd4Mkn1ufev3WK9wq",
  "key8": "4qtycN4VBgbhZvKcWxctZKmQryQx4Y3DCVumJWgzt8KBXndaGCs2qbdLyuP4x9cEm2MdCVWMh825Qg8EKbYmoUr3",
  "key9": "4ctMhGkpy5gm7iyHt2KZyXQ1NFMCrZH6JixA9Cca5b7Cotqoa6vV9S1rYMNMhUNqyv7TpsoqDzfhCqh3Y3a4YM1X",
  "key10": "4HjZX8xJHieS1yTbp6LGZTBqGwZQ6d4YUW3QHFuP9MxhcjwrZE8XYhhRarDurP23mFMTFKoj8HxHqYra85Pmes7J",
  "key11": "5uvLmUVLkK2KyMQJVxqZkYHAhEtyhLFVuyTpZY2vwRfGZeuTpdo3CxdpdJ6aZYS3LRUavCxL1MCmADodYJRZw5WK",
  "key12": "5TMN4iVcgq75m9h5HHWSiyMfDxbXiBVTeFWsqbGDbSucxRJLmxMawCHNA747HwY3ZJJYz1ZGuwDcqFD5Ma8hZ1Xc",
  "key13": "2qQ6c3WYjEMPh8RvhLEdnkndaxC6U6ct8APEy5VquaJsqgcgdzJnYbafW9pXkN5iva21DUpMDVYjL1HrcFJtFVCn",
  "key14": "233ARy9fbLgyyKpJscbgBcvCtjUCGPcfQUtsx8tf4wYzzQF6pm6Y5JBUzdQKArTw7d8wrXVV6n5FhJJCJKpurbpN",
  "key15": "5eh1V8rduK8TxecZhnV4BqkyVKcmqftqoXjdaVix2UF7SrY8yyY5ijcxjahm5Cp6k5RTKBKFMhXmHzP431wAy1An",
  "key16": "5Lc2wpP4cqXzUpbrLTNHTWZ4Wow4RcqGBSXQjXvvDh9hG9BmYyD5CA3z8T5GnQb2CGEfe8Bk5sUVKyadzY62bz6A",
  "key17": "2MZi6EFfCs4QwrZoMEfxEu1wPwpRTJ5ua9Xx1uwyNotit1uBWVuigruPdbdDwfXgpAB1xkE3KJLit9oiQBZDtUro",
  "key18": "WDqp6zFKychjY3ucEZLnn54N8DLhhyywbNKE39CykeS8hhZhQ9Wo9VonFas981BbyCpP4m3DfyyXhHuKoSw9hKv",
  "key19": "3gib8cM8bghEVuqfohzikP17Zp3SypuomjECrwDNXbnVTuxMtAwWShiB8bFwWQPsVwVyMdsiTKnoKoB3tLqSCdZN",
  "key20": "2kHMVLcsn5e2jAHsm4nYtUSSFuC5918JqQDM7M68Kvag2gLagSgb9caJYEhg95aH2XneR1eXYBmgyXbG6n6kAZ9E",
  "key21": "4h5eehRrhjuFQrwBRVQaPheGiU1xnvYkCRNVCSW38UviV84jQsZtwiJ5sabfsWK5adkBwHq6SsDsGzjQoyEHXgBQ",
  "key22": "2Tfz2HSc5tfAko2t6GmYMCjLHpZvVLpa29wKEFiHY84Hnh3576ixwT1u7pxzgjpPQJ9ZnXm7DYeCLz9wdazXZmjv",
  "key23": "xFxgk2G75mrxYiTGu6S7BDNwbDafh8MJbWx6Z8LkBEgswB6WFG3TNWKqjkK5Pi7utSNXNXMbXw3nUg4pmruoCee",
  "key24": "2m1tebphGTanbNZpcWczMKocoQpdrJ8uR4qGTWk1kVUY1ywnzJAvirqQRyeqeZWLPw8FqjaNRexeWMnFuUYu4LJ4",
  "key25": "P3mawEtw3AQd4BwHT1mNfjYqs7kpFLHrXTeB6RZUWrmFKr85bwCFKuQtMVnWKyLYDiNTHXY5upCLh1c8Tk9mT1b",
  "key26": "2ZmCYxqFw2BPXVQ2xfWc3GCeKnJZHx7rwCf6tqJvBs2L6pMFiKU2Kch9K56gCxtNtmwfi6tS4vEwZe7ERqXHS9z3",
  "key27": "2M9dgSdNphwpAvwcytQryzF9rFnLMQRRJQ99NW8SUhe7Sz2CoW2TTSPCCpbhR4N16hJ2NgFzxyMzMXXMGfhCMWT7",
  "key28": "5a3JBmmMB8hYf68gVEHnJGdg81q7jKGkamfs1gysJtLfMRJWoV36mbG1JqL2iBkjKyZNUn52KFFypSaXPceJAw14",
  "key29": "q1wKfFqq5BHXP9WZag3fj4gCpxWKLRDkoaSuVRAGDMdJt9HWBUT2gCsxTzcwfMu4fK3Z7XvPny15m9pAqPzHhVc",
  "key30": "45JR5eRjjpJahcSRLGdrNBWi7p7zSFuvpGZzrLy5WDnZ2hDnLTbpKuKAwb2qW6V8Jv2UgDjHdoLWL8791L6CiUdZ",
  "key31": "5Lm4q7axsYm3wryGHqsjkS4v6Epm31qoofwWLjMdLTEUMaxZJrYZ3kUsVCZzuy92bUS66kF9BU4ajZKuSQDoojf7",
  "key32": "2SqGjR6KhoS57QzySueSiL5pncVjdvB4rwQqpXHLRrz7EXi184Cy9CG4S1vYfiwqxc2iYZfkf9hdsPjqhMLpNzxn",
  "key33": "41fBSYCQSR2ficjyF2avnfC84wP3oDVvvRULMe7tq81mJCv1duEQKfrJotejJABYwdRZvCMTnP6vHKcivfcLiSJW",
  "key34": "2TcVoA4rfm4vmt1v64GXGgXbRPH9x921qBkPpruu3RtR5VsiFH4JF8JmSRryw1f4kagAfkSx2T2eR3T3EGs5XvwT",
  "key35": "3BSjHEx7S9GLtQnDJY9LMA6T6DXdbxcZG6RBXuoAjbs5mbLBq1fPxuYuZc6SqWfv2tYfcuHiN952Kyzv6exCosAP",
  "key36": "4VgWmJTmSDPvau5scYBMt9bHN9vgC7Nw9USCy5RmfTfFMdgyKqJhkF9MmWTBtye2c6w2KUjsVBz9MJPYYD9oqXBR"
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

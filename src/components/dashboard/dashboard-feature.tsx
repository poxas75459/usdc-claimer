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
    "GRuDi3uNATA9V2cfkHqv5gG3ErqVErhv5iLdowNze7mLpsc77Eg1W7BgGr3584tqHhX9jcW2kunAiJGURN6Pu1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ihsNdLeC3Frm2nnJKUFtt5Rd7ZxSfTZ6sxU832y4bP6C3BaJ42HbQxqn48GH8tZ6PjCH8cNMU2AybHgihMBApqk",
  "key1": "4wgd8ECR6WkWz5Q6BN4oc2iKKwwMeZKL8EGCkiZH8sfmnSdMQnw7xZLJPaohm7k7gVxVgUtat8R6EdMQBQWYqiY2",
  "key2": "3RZz7Nwt7sgJNvgHQdPDeEjhCE32kq6RZqHdPk2PJ1m5CrsCUb7g6KMLrtMv3Qw9AAPsrVjKKaxwqfgwbARgZsxs",
  "key3": "2FzYTUVXV4R9XAKSwooCajkhZbLGKmHKt87BoMBbngfk2K3ZqYJEYgk6iTNFo44H4BnyZ46zpz9sx9eraZwhuuQv",
  "key4": "2bXVF5YNhwdB5v5ZQq1kDCvuqD3mrjhdS9qvsgXqEiuBH4LvRc88mX625gnJ4VDDaKT4bAE6gVPg31y6E3SgHYcz",
  "key5": "64oMMX2AuEYPdcJ9RwhGzcDn431RxJFbczPfJ1Pm8xKombC8nHJMWtNEnFYkVGs1AU31JB1kZtV5rksgyei9qwXj",
  "key6": "4Eth6r8dRsydFDJoWXs9YJQAYDNEN5izCWhzGicmHxoUayhF1Nt23gb95fbG7uxeAobEjJ7qscdxKXjkSopy5TME",
  "key7": "wLD7dV5P7Cqj7MadANmQgRtJLiWEVhCnfU6qTqRKGRrezG83NVax42xtyLbboubYbBRHK4VKuQs3Y8En872EEqh",
  "key8": "5S3bshkAdzUEE4g6mzNNYrf4YePeWX841nR2MVyvSmoVhpMDbPZixS7JxD7NMcEJyB8FGFjySVbXpErhmvGmAXbi",
  "key9": "2nGwGu7PpziLiZs8ofr1rM5u9q3gWvehas2VdXF6wBykA8pVZtK5sbP5q3dX6LngCWbFX3kpXGSo6PJLQtfcKh9X",
  "key10": "WBNHMmKroBrqdAxRynRrtwibxfx1yMmJCNiQx368GrSQnjZvqCk5jZRQxEgLxQ486jd6FQk6tZZJmjFBWe4VZF9",
  "key11": "jr53PRD1yeqTrdxAgbFJJKpgTxqzvAFLrtJxjUoVdawQmDxVFXA7boffJ2Kpq7f9WrgUaktfDWWK17Gq6oq8vpq",
  "key12": "63XocgPGWjLnUdwCSYBxk6kAAjfTbNkUqLmGacUUsb3g3eBNcFSExdC1VDSsi3zADy79CG3PnpmBFZJUmQC2gYWr",
  "key13": "279URHgro1A3Safx2fd4iyLK9dq3xnwnD5wNFkwUEwKzACC3fPNdTqzyz8bCU5hWoUpoeBAMS5bKJkMj6VNEVZHm",
  "key14": "3iysiCpBvfyDDsdiZcVNwqV6hywoTwRQWCpK5YmbR6EAsmBgDwDr3cPWqfF5xSdSG7gR266ozXR57naRcTtG5pWT",
  "key15": "4zpkgC9WJJFqbtXdLTAyNbrXxY3JNDpz61obMMy9hqFN4zRtrDVZWpUR2CZAa1NHTVs7Kxf9FRCtuBdteMSGacQk",
  "key16": "4KUqB3FcwjPbgHgtnG9JvWEyCMjhXgXJzKaxQNc9ureJZrZjD2gdvkM1Gz6V8i85zWakzfVto9B7yqjwdJigshjb",
  "key17": "4hWBrjvHd2WauvnKWdmhtVhCYy23wiG7GeYVsZDRnmwGpivxFTwgcj5uEqmMYFUqSZLuyohua3kp2A2CXN8FAT4y",
  "key18": "4RuHLEL9bQTbfQnBLgx2YtG1od8ZdG5BMpYpb2QxmsuttZQ7BC51Qqhs7jkyFWYisArJ8SNLV1DQZjQCTrnV9B5g",
  "key19": "21xboXEWG6vfFtgfTRypuda6fsH7MHAzwtdiHcE1eLwFpi7LGGJmkok1wqUUzB5L7eGdVyBd21LiGQMxxwpHWM8t",
  "key20": "4Wav4CDnQ1NNUkRsb4kQWT13k6Jq3uPvLj3QoKz1dkJd5LW1LfJ9K5szv4SVhcKvW59FcpEWLrurzBvmz4m63yH3",
  "key21": "531a62Umwtt5SzPE7ozX1TfcZVLrmbhv6J1yCa2t1YEZiFCtU7eF95Sb4iDoLMqzcXAefBGmgyaH4FYwg2BEbxis",
  "key22": "4wbbnKDujch84dDo3VL9nCBxdcayMmCHqtQku8gUvN7otAhxNe2KBPbwkwpCwQJJLqTvwrq5yVwSWsNnWGb3Ee5P",
  "key23": "4tyoqA5zScL2a5H3yBXQVZB5bPyvjJTGwhnUAuzPvRb5f5fpUSwyftuh27XbGTUFhAaCURneVfqJKSkXNdFGFbjo",
  "key24": "3NTguDcmgCERJh353ZTProjK1VjNvC1cHz3HFdfRU1EXJ6EY44h7R9gjWVKntBKqVvmFUPd9SZevLLNp1uqJWqrk",
  "key25": "FxqFxBmutdHTVgQ2DYrQMvLHd3YuoELBGq1kEnKHDgTF9EVdhW4HNF29iUmUECiXtRjjNaEGHxp6KJXxchjfbAi",
  "key26": "AspwfL8tHkdJcnHYtciJ7AMwr1xHzGn6NSEJbPK4ENVjL5ggVvXhtCLBLoQJfjbEEvMMrkfjQ6LMxJ8VsheJb5J",
  "key27": "9qQuZGh7mgr2kcBpFAN28L8fYHSQxJGbiFnJHSUTakYM8z1SScgfazrywRwJvhovqNaNom3Sq3Ky6RXs2EAf4GD",
  "key28": "4XroMv8Jr18ZRQVZ78Td5wFhDJTEY4USj88ykdfTcK4onMDcXKmi9zC96YZ5JLbiMyTqdYyYRgckWUhYq63RSQGc"
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

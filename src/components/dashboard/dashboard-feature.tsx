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
    "4MtgVidS6wTXE94BfCQTnxSkdWYESCj8ZJAXCEJURgdQXJXG7AFQ3JUj3i363jhMEwPkYkDyA84rCGEQfwXxbgt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QQGfTTKfsBG6pjkmGpgAr7JjqEd7Z7bMU59zquqgU5DztqkJbACN1bxF4tUdpo82hfAtczPH4NEzV5sJaJqERnG",
  "key1": "45ViPNpc6QW7CfN6mKe9VAmgLjyGeLBTYcwDtByJCM9pBrNbx9YVqcRXCecdmWR5UGakvuDaBnGGjCevJw5F9EtB",
  "key2": "2kvzrePn6Cb5Ndn2ae9VaiAw6joSwCYARFU41CfLLabKVGMCsHVY7EHafTrBLYRSQk6YDLVUPbZbYi2keAcZFpPQ",
  "key3": "2Qs88MzwdhEcQaDCefvo1bmSnAiuCbQCXGgVGF5rZacm3g8NToX9hWJoZfM8RpengZhmun6X9Gpq7xeiJSohXbTY",
  "key4": "2UTbScXtTKBXrxLod3LeHiTSpqUfzuQaqrwUrPa9cdXV6Qph5UyMi32q9KvHLUbQmKs2RTWFTJ1kqrWVvafzztUe",
  "key5": "5ak3xWPqZDStpbgkJXnkvr5Y1RvULLAizgQjArhiYAzUhZ6kc3cwmfRHufoMKsqhuw84jJL9Cd98rFDVdXqxSRp",
  "key6": "4To9FaUJSX5ASTpUBZtVf9VfWssAvicCwrsnu9ybPQDYSPZDc6WLdSTb5q1Y89SSmXPQTQ1wZTkkhYn2gpfADcJA",
  "key7": "4cdPEfYR8WyV32y3tf1La9xK6juZ6iMQyTPVhfXBq8XkRCLXHn4rm8vpiAJct5zroPX3ZjatQAvregMSy8wALVkq",
  "key8": "43uKh4Kt1dy2adS2rrqx38AMvTvNcwUXDpn6WAypcU4PwAWSU5Z29etJXNtmK3NEZsHYDpZHizFoiCbDCgsS4vYo",
  "key9": "4hogUCYjc94ZiQDjABBSRedTaRTa81hTDBsCJLdvkJevg6Tgh2qENBB4dbd65rGoQc5cUtR2Dtmey8m9gZ7XJBAC",
  "key10": "3aq5WrXeyw8DuJcUiLWg8P9vFPMTYgewLzWgpL6xEL1wKTMfNbXY5aHCuvyzbYo3jBg6AZB7vcq21ZhEq1vdcyQH",
  "key11": "xKPJA2L1dgQDmzamNFatujVQaru1HWPFFryJtSJAyR5U2MeRmaamRfjhuJpUgEx9Wx2rnbQURJ8WCGufk3HgMLy",
  "key12": "5wz31mAFWG9iozhEtCeP5cCx12i37jcJPNp8XEhmXQBXMyjSCnKNjc1u1PX5gUzZxfUKiCdK3LPL5sLsy28DheEd",
  "key13": "4CTmcLnqby1Da3UAVgzC1MqGxab6ZFhJFrYYLkreuJqtVSQDRfRC1wpdU2GPQVRrWU4N2wiThxkFZ1ozHVfBuSh8",
  "key14": "43CsPuj8pdWDQHazZiN9je1cL6TkY3vArrGt6cCq8Pn8pAnVynJttQkRx95UYrSTjF9sYzg1LgPqvFGPuxC9cBxm",
  "key15": "5rFETeYznjRrRPJTX35ncQRwihJkxn8XATCmqq6hn1JCqV1ziXLDd6nRvW8beK6myYNsiE3iJU2ir1sm964o1mEt",
  "key16": "2WF16TAsqaWemDAaMDX2BWV9QRAcDLyAZbpDHjPv4e33MvJcJHFcz5rqJo8BzXbDECjusLehSXREvpJtyu5DSr5W",
  "key17": "2Jpe3akvLtQzk92yawzTv2pLXXpLW6mxkwcDjZ2BDVEaxyohK4gmHw3J2UgMwiomLsH1PbPAyGhVab7nfXQST4FR",
  "key18": "3xXm1aT1xmyMxRSAsy3rjK7NrrPXJGAiHdWpj4hXcuVL9uq1bhM6xkyLxzE3SGZSGQVyRZUyrLkXJs71SwtVvPZw",
  "key19": "2naY9Bt4QF7KKhEKiq9fUaoPsmiVkKNrPUQpSHocyLn1oeskyH9RhpbiTvGvSrJEGxad8yQkU58mR76wqKjV5Cwj",
  "key20": "SYNaQduoCBNi4PoQjx6N5KqceYDMupLfq9ijroLnyxMZQkVJynWKxqeCWfKjUtn5ro5XLFsxeeiyAdPnKFi7RFu",
  "key21": "swcyyHLCm7ML6JdzBQeM18Jny4Sn19c949c4mSpkhmmuAsqaakrMTRNPiA51DWSVMNBTK8gtitnbGKJRuvtHJb2",
  "key22": "5X9q2q6kaCmnRMHfSUHiTuTUW6vpjJJMBJ3Y6s9d5Fnfx3EhgASJQjYzKCoNxf2xyJNFCGTAcDSWex9gXda4tXp1",
  "key23": "4jbMkPuNqWRAAWDYtsSrrYUJdtaXgzbnj8J55MVYpjzZmz7YATL5euJkmTVDsXb6JvrVabnJa32Nv7JnrgqjKh95",
  "key24": "2bFzbW5U4VAxXFg3mJqPq4BP8RczuNkDxDz9viNUrqurf2TXiMbNMH6TGVpkMkGSbmbDZap3DPnD1q4jjaBYxiEn",
  "key25": "5mrcyZngnim6Bqo8g8hzhZwR6S4wm953Arx54p4ofsTrFj2m3r8VeScQbGk5wTZCoqgfH7FEqLB4HbGNfEqxECD5",
  "key26": "2F1eackUWqiYQ52nwA3emLhLUv4cq4EbpL9wzyzSBJtVjVhga7JbCEMGRH7rUGm4hkiwXqUsvrNhtnWoFjb1Z5zW",
  "key27": "2UJymAn5vgTbZAFNq4TBMgkeZXGHg8DNnccDKmQvQwh9iUZikfJWHjZemUNJb7Td8cSnTX3258PQYTxJvHp4MRTA",
  "key28": "4Qdhzd6hUNBMonh66MtuA7ihvwBNNpGdrzmXpoWVGtnrmCrXgZpUQvmjJMgPHe3kdzE2QFj8GoLgqfGjm3DnjmTw",
  "key29": "2FCX69MJr9ZBj3E4nSvgbDpmw3EgYYiBpg39SzegSv7bC36usPPdPsZUYrwLSNPBSmErNJmucsQNWjpgiHo5qLcx",
  "key30": "5rxv8ERRkBtYvcDdkaw7BwrbnoRunnapCyzBTgmPQLVNBy5ShfyiYepj21QNADK1Kua1QnjDAXSiVSxHPCUyqjHg",
  "key31": "5sVTdWJusAqWurRmxLXYAohJ1pD8MoAai2L55UsJ4tog8M3MWcgayCpYo6LJEzRJSDbJxgHBjnz79M3Pah1nZixH",
  "key32": "63UMiG4kzmivegoBBkeoxG9osYo3BYWBEiXVP2iGkaanCj88KCsvZoffVzcfwDXwiPDoRi6PJNSfNcUWF3pg6z6n",
  "key33": "56WruUQBhXqLSXmWD659y5rDDzYqqRF9uoJdxfRn9mCvwE2MnRDyQT9NBHLZt7py1XeUXd61JaZFTofrYDUww4Fg",
  "key34": "32fwrexFyuCtTEpyrYSgMrr7JCYjfHbNGkca5qStNzdY4Rn7excrLYGf4tG46gUK2xvJx5hPJxezACDPs3juKSS5",
  "key35": "5J5T5WUVNb6k6mqdAaueDTbJ5LgbQ6NDwqHjzvyjcDcAYHcdnuRQHhmGFpZ2K7MQH7EZPeoC7rorRxdDbHp3xW21",
  "key36": "2CDKe2WU2HoNigt6y13bQMeLFJ11MmgE4vXqBCgGHv3sfuP9BgnY6tcmYhwdzzhNNgNJwbpvjvuD9C92A8mDL9k8",
  "key37": "4r6oSDndqNVPUHhd9ouWrpfHkAwcyzenQnsrTrr4nmctKjZvzTbvRkYKtV3R7huJf2nf7nU9DRHFkUuJUb2GB6UE",
  "key38": "3Pc9twx3V5PXUuoUaXuh8S6huwQ2s9ZNX1Z5b2hxZyZVc5p1hTgAVjtsKLC2gaxR54qRyNhJnQ2EGMoUPJYKR4xY",
  "key39": "2KP6JCPXLeAeYp9nmFxNdXvoNT4N5oT5YsegNkFsnk94X1PriVquRtzwP7iuvti4iSppYfPnNFRXjEJtYJfVomFT",
  "key40": "3mkWRvSeW5ngvK6ktRMFh6MHvcKNPh5vuzRGF89UQAPHgvMnhLiYtCNY6HcBPrt6KdzvLwoBssWaCKD8WfdzhUby",
  "key41": "2MyYj4HGb1FF7sjFSSuwb2D8LUMxhAAMnNScZd3j1vXZzD5qgti1vwuKKNLEYgLUmPSA9h6Hd8ibXw7cA3187Ntw"
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

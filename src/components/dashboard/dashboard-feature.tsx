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
    "2purr4M4sTLiveHT4e3xfRupGjbNaQqKnfkSNnvrLXHLhwViLExEb8NqTpc48ci2c7xe7WAmYY32QtmK9ctnXh5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsJ6M7mDFhdqrbRKRKhMyALpyW5xkLVBTghMqMwShmWiqHBcGpysYGkMUW9wsc5hsVBEP3Vt7DhuRocEpiqQQXB",
  "key1": "2Xn43YWEPyshnAchxnSHoqJ5GqG79nGfttHtWKeTSWKMZQPDebZZnB1jqSrcZSa89nNF5YKhPMAuxZ5FHyewzLSJ",
  "key2": "3rz8kdDUcq7RAFtMQEDUwHxpBq8jNHqR32BKoxtkQPaueVMTTAUaSRHv3UQTW1f4eaBgbnHz8hHcCoAfMDaCrnQX",
  "key3": "5jRUAGnW8ELqXxRNEYdVxeAPZr2UKDxe1q2kkTLZ51Q7CBPGP27de2ww2XC4oZ9eUSMy39TVYyFCRgqXwzqcASu",
  "key4": "3wEfLtMnyeWnXUGWnvnYXeYQhtDSNNPeh9LRGDxoG7hcWP1pJCYW7wREa6DaWDquaDd5QK1hr9yPVqwDSTTrJETX",
  "key5": "4YQQu1uw59binrFT7PZzkTbAzRp6S7PY3ZPnEixhQPJff5m1EFKELpQ7YsoJFEKRy9WUZy75qyCryBUWoPBF53iP",
  "key6": "22z6efah7XotXBNdHTs1jwyCCENoEkz8GEJidCmnKeHZJyZvfPajHpK5UjBAyRYjoDN8DBp7MGQN1Jtr83WDQMuP",
  "key7": "3KHAEEHos7bwRiuoPbuTYFMnF3n1fH1wY9qYNxRnQT5zRbkNLuz9GEneGwu3VZt1FWE3qrYyNAicMm8NC52QF148",
  "key8": "2Trc5U6YSsEcPUmBhHJgAHKDp4TsVXkf3viXeVcxxoBspPbb6qjZjm1So6Rzzx4C6zwRibXURzd9AhNdqfwgfFPD",
  "key9": "2TdDx3P3DnofahYqMt7J6Ee7zNXrwRfXNSGQAi9XEzG9EKpJbsvyqehSyMUD5JMTaHB4rYjaVWukrDPayCTSM3C4",
  "key10": "TmPwq3bJmBBsV4urUtXPmh5s5ZjzhjzqWaTMdAkBVBD8d3XrC6icCQQ9uVf21jLudPrQFPWSc8Q4K8g1k1MzGk9",
  "key11": "5qn1K3x4yhCFBFZLamQ1UER7KLzXjdEvPSC4fuwLHPR8bbAxsaDEtqCTUZ7YYScUczVTt3QFj4KMDTFtfmMpzvDX",
  "key12": "5Gwru1QqDQh1d7f7Htn9dkGedMCjr3CBoAy3sib2vNpqD1XiZCe85zjzHvsKQ4M8xFx2PWuoX5qeTPPaiEbTW5LD",
  "key13": "2MCG1tajFX5JG3v9Y7FbxYXgiRRT2LzVpBhk1RyBKr18bdYP1ydk79Ws2ttmT7cMC5zv5f3H5qJMxBawA4CS7JaQ",
  "key14": "vcbjdfTXqmdi8cpfaqBWDun42uiWQB6kLPEmatVbysYCqZUE6KbANnALkBD7wfvwHz6vSoa3gVsfeK1iyKBcdwA",
  "key15": "2DADBxY54qMiF2RxySHyDtDRqApcCR4p3jfR7qd9EZ7vdmFumpTKpTXbPnBGDtAPax1cDrsAuW8NjaJvGVSp5pH7",
  "key16": "2uDPvCSBnoeFNAp8GtV9wfpEEGW5TFWaKP5gjyQpt6Rw1i8PfQpXdQCLrdMgm3QpuEGaKJ1oUTDPzri4Xdt3Ecoy",
  "key17": "5cedXWZRrC2xQYfpEVKieKexojfmqa8RRbMCXkzt764aXiGDrceCFTV78VKdGRA7yrjVbp1A1HqA3JUmRXxMLW5r",
  "key18": "2G3HB6DCFxpP6Fe1vDFasHRhdF5ExWjYkYndZqzmNGB6BGMsH8YznntDEvRo9JJmNzMR6MxUjRmhVsYogNQ86cTQ",
  "key19": "phZHsraCMRT5eUiXJbeHooCXTLjbRz8DXrwbmPwN2xAqzrsm3MhC44jPMtTXaQxnSDz2emJvpPckuTQDd692osa",
  "key20": "47yjpkipcu6G9CHgAJMCZNtFmSpMwnhaqWBzfYkSzbjaikLvDSNxAii4QTY165a4qMTPspzE4rVU9v3rsbW6uNTC",
  "key21": "3oCYFhoR2dv69DouAr4VTbJfRsPUHbDmFhSQNamYs1NdXADVHJA5be4khT1c7RpYXTx2Xm839ZnibbV6PpAhXhpU",
  "key22": "GkPUDdT7aZcr2T5kkYbmNcmQfypJP7tQ8r9vWuqFDaEHnDKwZ2sFKY84bRhB9XocNJpNmpb9eFFoE5U9qWfk5KQ",
  "key23": "2jdyNGpegthCQyScotoo7vvNy7KugiRvHWWXn56seErApqRW9vg4YZBzNRm3RSsVjXPtcRM8AXJvBz4MHhseej4r",
  "key24": "59AsrVHbwtGTzdFFGwucnX262LnfoauV4TkYo57Jy5s14FebNuUCXUBt2yGrmhLDKcKmzWrkTxCyNuHEf9mRgkho",
  "key25": "39Xuu222YH7Bh3zqapqoYNDifM92iZkS4LbX73kcughA3RMcBgKA8ddaXFrrVMf94r78ArKeSPC1iZPoa6gnh1ZB",
  "key26": "3P9h59XAPxnQA8yoecy6BnwMNY1bcnMRTWXWuE2BbjMhVBR1h2gG1tNzUDJLi5c8fC1hR5Nf5SKzdbZ28zSsPV47",
  "key27": "KdTYm712hvxRdh1sADMNAZBYKLYSegZ6GHFthz1k16BMU5ibbuiN2tkbPedZuVJ29jtLMDS5KPGpTeTZMgEkba1",
  "key28": "21JDq3zD7ZV4MgxdCPdKuN1c9ESMRyXQhVmX3uARFhGW4VpnrXscyiikqQBqFmdpeT8mk5CRbgbTZmfXr6CUxsn3",
  "key29": "239ngHKxnDF87sdfV4WrdyeEqi4iZEgj3wSDAGV7qiUrtiRS3VMWBAAjLBty2fjmkXUrmwXLm6HFzkqdGTDazGBj",
  "key30": "45m2KiwqUsk8SzDtEH9i3GNWviHcYxYMRNhy6ZV63bQRSyGRPoUb43EohhD8r5h4nPcCCvgFrc2vbqFbZw7TEmoV",
  "key31": "5PG4w6m3HzkEjJNwXnZSjzfTRXnHtfunkY7bQQqNdzqVCEcjWvVYV2SSb4zBn33fTLiXTwUtYNGLNUCvQnrEGaSK",
  "key32": "2K5JtyQbjq9kAxnW5e66Ywtd67uHifydAAK7bPxUVXwtkzPZrRJzj6xN5RuYc6c3Dqya5dP66YdHKbwzdg5FDYag",
  "key33": "5aEgpYpz684FSqCcL5NnrRUqQYdX757Q2uwqggu82tUTJpqBPBpneG1mf6XSm1ThP1fseyuXGncc94NRVSpL1vbG",
  "key34": "4UH9qQeyjZfyu7JB66zEAud1jNoMAsJMnQwD8tCvtQVJS6dXL8KrSiiBG1VxBcyLZWhe8zu6cdmmDnwArTnv6F1x",
  "key35": "3FdBQT6Gwmfy2kEJh55EJciXeSK4iPVRMdQEBrevLEKCwxDm7fcijoVS5yzUct8bS3GjNNYYL5TsCpdVps2yhLVo",
  "key36": "3ZnSwZvwYJ3TM1ZGkDgHLJnJPJquoQLC6HJvhmN9myyDUcfEuLjj7d6EbTypCgR5XuHjokYAtHoNPGZ9MtqQGuR",
  "key37": "2LjEbsoaFEWDAgYaHz2JE9MRUmiwCP2XMKC8J4Z9Rw6FPkPJHPg7vcKocXgvm8JVuMkaM2PxHX44pYkby4vKCsgF",
  "key38": "P7QhTAsJzUbb9rtjJ7WVT4mujAkDugbgJbUsDzVDpZwKt3KBgisaf6EH5MmdvqAMbHzqXfv3eFvaq2Uuq9e6KAE",
  "key39": "2aNjtEh9eSyJPPtmXGXbn8G1CtCvz13Uqobi5sn8hxY76nh3A12PQTg3ypKHTKiyoatyB4JU88bzvpgZSaehE9Ss",
  "key40": "3pgnWbr1J1qTEce9yachFVydNdbU9fw4tw2pBqehsEMmD2BUBjbkGdd4cbZWHYCYZY3hMfE5dW1e4y79pA8kfUSi",
  "key41": "2y96tCsvqtzErRe8wtbEYCDW3U4r423SqZnfkAcjYCwoNH8Ze7wyzvqR73f25nS4TZV9mwwFSS2sBD1Zp7Pa8vay",
  "key42": "5M6CQh5SEAkkTXgFhgSYponwRdtnrCfrB8bAxZ6KKahVqup7GDSX1eBiuooWiThMoFRRQi2tr9jCLs2qYUDWWhat",
  "key43": "jungsWEkrhzCKia4wPY95kQZGi82D97Dm9iw5fSRyrbP1JXUUSiLUhBNd4HQSe1Mq2SP2B3odpSXXTuKSQGA7TW",
  "key44": "47jJ3ZPb8SuhjmDD4bsJF1guvdt1jkHgP5g4J3waZLvNiacBtx7Te6WUawDfXgEFHXt9TfiSm8Q2p2r2DR6v1PZU",
  "key45": "35MrJcq1g3kXSN9R3mbYSYdKQRP6Lt7AB5B4MNTdGbdbULTeefqcRHJq4iAaNWPVgjWT2mfj35hH6BdpSg8CcANu"
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

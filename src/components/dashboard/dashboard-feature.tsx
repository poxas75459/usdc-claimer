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
    "VDo75WqrFiwc9kDxiUkuCHHmoXWcTdC1mDkLrTx9mh6WiAK3ks5Rb2yymbj27pfc4QkrhuMedvGZj13QwBXi7TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zixSaXAPUPLHc6EWeLeNDhPUvty8pHAczJygPAdBpGYPf9qpwvzu5xyM5nDL3FU2LUqWsiMtdu7Q1eeS5MGDVrE",
  "key1": "3bPWQMK86UV92ecR4jbLCEB1mg31s7i8eJ84xYKhz9F5Ngz4T5m9xMMxUdZLcH2BcW9zMe7jVFqDUwkaYYsGqXrA",
  "key2": "2stkYdkw7iXBiNko7ZwsBCrCR3TatKMkLHter32oC5rpnU51Qmf7RVcwP3ihUjjuQfRwzjBPbTD7ztdDi4WtPu3A",
  "key3": "3aePPngZf8k4SE643eRchunmwqvJnrqhxZs152fKsAYVW86zZQefQe9d7GD7sUbE3jsWQNej1MDVFSx5ZN8SxvSa",
  "key4": "GcUENQwaNKSQj2NzvRuHG1iA4rwSgiTcRPz1nUSWNB2vYFrxV7FifCJ4pwyfFwVcREXQJAfRjmm4S2iXLveGZvC",
  "key5": "4xxLxLzPjzQnAm2hyJUVZMqSMqGngQwgvqtfi3CrDmhnMvHKL8vZjmEGvT7uuAWJKK9QQVipJrswi2FTShedoWU",
  "key6": "3DpLYSFanvNjasDUe2xsEy1Wd2L5Hh4bG8pUtDk7Gg9wisVctFZ1Ep53bGmrETjDEa9e6cSzUEtPehK3CGeh6rez",
  "key7": "5E41gtw6iHpV4bpjVqHmPtpjnRHMf2PakCWshv3WGTz3bATDt6tb1Efr4mEFLD2cmn9kv9KWqvs9hDTuRYU5Tmtg",
  "key8": "Ha3W6y34bkeyioDogkoMzHq21SLA14BUizu7FVY8whDC88EqAw7wEZNnDs3yGFGDWb3X7xM7GW7zLCf7bz9VZAR",
  "key9": "5qAchuxMHbug31HJfXzCT6Bo8WGC6yuh9gWnAtiAjgUZ3Z6EnQWLaauBmtxDYjE5ow18hsxGzYYegqk7uTXfCtpQ",
  "key10": "2zVwH9EzGK8aGiCqawoYdSrqUZadnrnf9ntxKnLHeytf3ZiRMey1NFpaMpgeMYpmcnmWjhuecN4hbz9Jbiz1GXP4",
  "key11": "45YeWNrbMbqEATuP76qKYXPfqL6BNVf7uggPJi5EsYMe2RiGhXqceQSH61iMj58dQgubWT5mLRDBcV5PSxGMtEQQ",
  "key12": "2YV6x6fvr5vyyYa7CaGW81UnbrNhLb4CwNmGzEcYLp1kis6FgcRteqRUjPPkcQF8JMce1YwFjdEd7dRQE26PSe9a",
  "key13": "5UGzAZ9A6oikjGRchAWZhGgrygn8UCaSDQUJdRmyGu9YvTBsSLRSRcBYRpBFnk8KYQpQf1XqqGVKrnz8tTMD37eX",
  "key14": "2viK97e3sSrS1hUZzZs32Dh39KUiJhUivwfhfDPijXL8YxuunUKGufBjLU2oWRz4fctyz9RzdRj64HuD7xxNvbwV",
  "key15": "3VsstxpvfNyEXsfWPDMbxYgvour6sSyGfFttytMs4Yzof58aVDg3nmfm5gnNr1oZfRTJnyFiL43UmknFKtPdpK7t",
  "key16": "4NsGL9GPLjLWvoHZk9tRpQcmiKYYt5FUr94deHbyF6R3rxczxMM8t4WeDqfb2snZPWuqGz5LJEDKyXEh6Qr2gaEq",
  "key17": "4FGtakby5N554mtCH5646ekBHDVQzotDeoGX2fR6SDnPCdyZDwQEyTorCsGYGEvzGTdnCvS2xA3SuyTqYBvKUDvo",
  "key18": "4GXXKi52MubJVbMQCeK13fxdtZVoYd7pa4BizeS9QVfsf5TvmHJY18aUQpVkjRpXe9erABnbZd9hs2zKrb4F2nQD",
  "key19": "4ew1zugHYjWS61X15iGQVGMmxQhR4Dbeuc2XnpBoUtwv4UBaazAySJLHDUsNUEN87X8twHwWfbhJ2G8XqwEBeDu3",
  "key20": "2GGMo5JjVWn2W3yrBpjgRrEAtjj9TQ7QQNHV8FGeSXpcmTDhbfsR5gUMortTBMDmRybNeLbf8f7yFXNu4h3wLjhV",
  "key21": "3MZ7TfsPw7drhNdJHYGsJhdbJbwQibbUdDsd3hMR5wvjJ5cjDewc4cMwhfipwFn4Lpotcs1c2xsHMnT7TjKLNKMJ",
  "key22": "4EBDVEznLJYYAyZULD2Uxs8ACcg6Fz6E8Qi4jX6Gk6tfNSbpbWMd9bGB8ASkURHATyrBFqCHodkJm6KBgxLMVj5o",
  "key23": "3Nxx78G8NmSN6nzU2xNVGfgnukHoPsBHV7zrn1tM4g66GRwLV391YmZTFv6m2ZhNVfswoWSzGcsp8t8D8ktLWhry",
  "key24": "64YWCPYM3Fu2Uo6NVwbbQ6MBrPKaVQqTLdjofz1FcopyYK2SrYetovjjrVH4XgFxkZAX2zcmWQwyzCMufVcWBHqg",
  "key25": "VQAgweabgBn2JswgUHQnZihrkJWdQmMC5dwjgYpMTXs1VdxLsNeVS3DZoUL5zkHP2zPrtyFB2sP12CujaaqwPXs",
  "key26": "2KSfkwSM2EYhm5CbxayEaWWgaXFneezNRnNrNdBLUSdnZ1tNtiQzBvpawNN81hJoGTLVeBhKdFgHPSGReuXLnGSK",
  "key27": "5FE7LckeCyvV9U98gZNUJENkREEuazKNsEJrS6o4dBFQEXc1uNctw3JbFjqhTiw2LC7iAT7fxUFpQoRDpy3wnVGD",
  "key28": "3JFL6gE9JK2ivMZqnRNq4hqjUXYRby3nH9shRNhaFpuuErghHh3tNugGMLMTk6ZW7JN9pf9ZrirqE45YYT7C1U96",
  "key29": "2aF9WiCnKdsnLu3wSkoceXh1Xnu7ioMZoHEYRcKo7j2BHqj2JrJgCByjMvGTYBiG9qJNfCMkvKesjU5wopmSYYSi",
  "key30": "59D13Cu4zqhLmEXCctiwUW2URHEPYr1ajBSSCnMyGfWdYiGzxmXwuA4TkPDDAAHwDPEzqDrnM1b9zNJNGDST23ac",
  "key31": "5JLDSFU9gGsERghGUH98Zy2j2rg6mQP738Zyg9adqJg8oByo1yPqnBP4yFGKLow7xKuaUhPRL4wQVBmj79jhvZcR",
  "key32": "3rXqtYAze8sQYtBYR5QALAWfuKBE5nHJpFm4U4hSq66GS2gQHYvijAiseBS1yYAHPfGZgLgSxXeXEsppG2Ei7n53",
  "key33": "2bYDa2DTCJ9WHgjHCMLgknCjpRumHAsFMj6pysvKEErh4EKoY5x7DKGJfYdEmTCsQQMaoPdr9GEwqcBkdJAjicFE",
  "key34": "46wwoYJPg5qqDxyChUipfnEPae6P8qpwzqcUwy95RCoQJQ8HEsmwWio1nPiF1NRP7Cc96vSujQ8hvSu6B1wFBsQL",
  "key35": "5nFLXUygE31enE2iLxbV7SM8onTkdX7Dpy7XRFWnDgTz6RTVh9cKW7BeVaXRDmwBmKnwFsjaiKgx6W1Up8Sr8tgL",
  "key36": "2eYL79ggoHFN8aPSYUZy7MXrXdJcWJvM4BRMUCsUfheB5ePAdeoVCrsoMHzXHn7UtT8CxiX15zph92hQvPKV11ik",
  "key37": "2hxNhZMR6Bx746s4BvpDeD5DAmtWKb5zbQ3qgb4rFyxDrRw69yaQXAQmV9NdrmUkebYbfYmUgGSQStfua2Pef2V9",
  "key38": "TAvQhyfPz5pT4ikTkHNDHRawrk5cnbGwkdLV8MLgxhHp3dFmT6CNcNZkZh1vSTYk3ugxc8VcteTmQgoJt1xvU8F",
  "key39": "5jqAwPEAQaDeHUeDg6zQ7o3ekcJ7DvYrhGe9svFuiqcudV6x2GpYVp4R4cXB9aRPCtNB2nC1fXh6QX73Z6EEce6W",
  "key40": "3RFRGgHcYtr6yFjtFL44qkkMQfQGY2nXpDuL8fXUGHdYLuwyt9idxDajaJCYZsZZw8nXcexT1ozqEmThghs42KbQ",
  "key41": "5MLcY8eNk5RKdVYpQhVkGzjdPtuBnXfu7aXGoLSgFfmrRAkJRK4s5w6Jw7Cqqs6jeybGr5P2h6pzjoRUWipfHAN3",
  "key42": "5EMKowhdgRmSYcwoQB7puyCGEwCfiC1twymcAC2afqrzNffmozRVFML2XFcWnZtKFuDDZfubNFCtcRPZNXvzCRdG",
  "key43": "4Y8Kwcsb8e593ZZrLa6uoq7aKHxHnPk9hjUBHtXF7umGvfLHcMNis6EVSXeNXf2vZusFQqSLWLZqv1EUEUo3BCeh",
  "key44": "MH219KPWAwzHxwjwfHug1UaTCgUPm3wxDcNAuKtrMGrApRfUtBADouokgCy4JL1ShtydsPa7udDBVNmjEeJn4Qd",
  "key45": "3ULowzPjWMg6BFjqpN6Ln9zUgcgd3gLUemSNCskyUAXBzQBDf6iiGHY8JKVxCGHE3yeWLUa5TAMBD9ScY6SMtwNh"
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

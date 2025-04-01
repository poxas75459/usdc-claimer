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
    "2DyqY6vVbvbQBEgMGtwva9yWouPwUtWHWYLuQ8Lcgb4YuktL3MbCHy92mgmGTrrEe663wwp9aHVybFSbKjdDC3AH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmAQJ8HmWRa9cP1PTY3Ki7j9VvD4DtGmCWdjhpsjQ6Lpvz9qWkm6cECTPQ8kx5WEJY3TU1bXtNxcwa1rHQ6Kkau",
  "key1": "3zszFg71k7LqiL78qgJGx4ZtdRXv3MfK8oocSje9gYiaYNjtTk9WafsFtd4dkSt1A27BHybtB7o79ii6aWw9VdK3",
  "key2": "33HDUjj1BTyKxNrNF1B11is3ccomrmSD3cHtDRiEbKpRt5M4MUFaWt7e4jsrnzqQqVHvVFtPx4WunV3NrCisUR8Q",
  "key3": "5bv9mM3nCYA8ZKFY5urabhqwzPgeehQcp8gXCpbN9GFDcBnYhcuNRTi3gkfNYfM1KUzeTNgmp4kQr91C8Z62qSjT",
  "key4": "4kzJvQWhPSQxUW8965Cqsj8ZGwwJHqdwG6nVSjcNVGtMpSBpDvC6U6FpoENLB9c9hdFzWdq2M25Xs4nt1c9hXzk4",
  "key5": "5cQLMz5YVeRDnwLhyxDtMdbGexM3AB3tGpjh7XC4tD3TkGuLuK7EPTBThwAne61XrVmNjrf3M78GdMorsNrFmxsT",
  "key6": "3nyGxTB7HDuHNUBeBW4chKH7HV3Doj4t9dj5mLcfGZJDVKnhuL2L8Qao4AphNAJ7C9FMpuYQz9HN3r9FWRAfg3TE",
  "key7": "4bRzYcKxGT1U2Eu3w3zSFYizuHsU7qLdTAtaBVCp3GMEz2xMtYQPYou8AodBXeK2z1eUR7jwmQmXry2NVoiesyMw",
  "key8": "2nV58KaS6i597KRXZ36f51B2e9cVXWxLVRyLB9JSwMoVQm1VyaKXYno7Zjci6FP3BifGfzSdrk2UhaxRZFMsEG9e",
  "key9": "26zkh4EgkJUZ8AXYzYUbT1N8S9Bf4n9p7ZE1Td5YxVg5VkovLXau5RpQca8WyUVv13aojx4VnbeFyA4PU1Tkmmnz",
  "key10": "2rypMcnGCx8Lx5iZqRF2dGcLTsebYk4oRmtpQTYUj5zm3uyXZnKoGyTdhoJbSxCGo5B66UeXVPWkRZZrRDDX4hMx",
  "key11": "2jNJ2SmJGQW95U9W6H4Aeaa2JTQzHHMsvAM8LTVambzt7sEFRyV5wckYrYc9Tv5QYYJGxrqNtRrRp5W8SGo44kCs",
  "key12": "21H4Pnpfj649gHoi5Zi4QAGjrK7PV7hR1UvbxgW5ChwznPjo3ZGezQLRLkSCkztCUNb3TsYCUXRCK5nXxc9PU79E",
  "key13": "4L4pigcUy1GmPBN2pnyUBM3Bz8uA1Di6TWMvYQWp3qdMBBPHBiEmS9nL3qcantggdeUkNyFyemcvWZiQw2NyNy7",
  "key14": "5nawH6M3FSo2H5JWtDti2XhsJGUkevGK9CpYa2JUogrzqVXgGC5yyBrnN9YAogv5zZCMQ8t51FWJWpSLBGJnBj6z",
  "key15": "2AazShejkAn5zYKyPQj5VFqkVNTBwrXEUdjPdXKXBhzxTxsCKtC8HeXmYFT8qjcVUvxiCxo2tX1WqLUNR5BsAep",
  "key16": "4BWB6aANAMsrzN57zZ6hYQAwx4fwRYfirGpbWw5ZKugn6wCsTcZNQ6VHdQwPXD16ZS6ZMjQqJD9LtvPWpJ23psAK",
  "key17": "5sRt7eUEpDbV6iQkA9Ggs14iFwUvgtZtTqMxUSbqCx7WwciaWM7oZiNybgDM6ZtfWt86tGoFCyx7AF7FEqj3LKzW",
  "key18": "4o54TaVZkUzYArvtQWmCdtmCtc8hYfaaAm7a6jHQevBL8vouV2SfxXxw7Hpsvh2f5ZU6kvJSs56Z8Nga5PwLHmo6",
  "key19": "aRoZwVe2birWwqotgxEeUD3bYac9nPVYGbgQZKnVT2BqRb7pNM3yFNXVNiGpEYrnPJX5Ytw44zBbTjh2nTtsvQ9",
  "key20": "YEigReDqhD91iKuijknSLsHpwgct42obaHiSDPUimjfyhr6FYLvq76hPRbtFCLk6RVqw2zQ6j9ZVLkTfDReqTuL",
  "key21": "2n5roEweR9ciNx9yfvupCB6qmB39vyLT4DKWVgX3dKGCFw9mBWLsseYSicRRG1FE9q8ZMVZiFe641cxsDSNdJMGk",
  "key22": "34mcuxK2LVDcbTREwmcW5onrpBGeT1H7115ALvWjVH6udxuNSc9ZFf5uvDkpYN31NRKcMt4NhbvNCyQ8dXtijqG1",
  "key23": "2cAuUPSPc4aGX6aYZNDNneekrWxXrBB4i3P3kvXqe2A4A9vUP5c2c2spvkGGF8LBC15UFjU7jJ8KLKpjb2z64jhD",
  "key24": "3XYorDjn75XkffrzR2mSJukRo4NBVLB5Reo2aSechDzfJ2KwQ1Wxtbvx79CQGfvE24HKTandCfrrDJpv3a7wSGbr",
  "key25": "ssEWh3gzTSao4NeUMW9YjpDqefpaFifHNVaJfa4gfvmsTH8RTJtKVxZUWQcEJY3b5nRTvNxhthSyVJzD866D3fg",
  "key26": "4RJmTp5d7NhJLqy6eRfuuTxr29EHWKYUCy7JQRZHmFmE9312S5jzLeqJT869UkPBQwB95fcU3MrZb2jmcKjXuzUn",
  "key27": "2ZiJsPgjoWhAK3ctvQqwFqe2fiKPaJcmpUjdjBwyURzDLWLfSBWqK2LaLQcznD35TiwF61RdRce4ynxiCmv8HPp9",
  "key28": "5KkMC8HgDvdP3XsW7C8DKMVzFbg5rcfY5MvCdRFuGZdbi9frFoCy5BX9oUCY7C9z1GB9Xg5CnPRgfitZAy7f8yuD",
  "key29": "5fcNBdkhkbahPcJRcUeATr2gvYSdWcxaxHBqC4PAwTyevy8KUZG4YKQtyNxkRP71uNxp6MSBmorAiiRKcUtYNzNn",
  "key30": "aw47gZGG85m25w7RrKcW5TRSQBkT8qJAYuXhhSLG9vVCfe2Wgeu6QAahVo8zZhEFwKt6K73e8vxn1F2hAJrSxi5",
  "key31": "3tZDeNR1rTkFAvuRdjaEf4mcRApdeFMG6C3msDA2nwAgsaTPEAqickxwYHB2spbytrCXMfGxrvVYjPqh65N95dMg",
  "key32": "475i9zPmXcNMX3Fua8NjAAMNzfPaH8rHuTMCtzYt3QBSzPVs7ThrzpKozJF96a9tQUEDXtDnQg1BW1jkYxGboYL1",
  "key33": "4hy5KGCkpQAh44EHJLtMfL2fAsbpNGXcFp6KyrGYkuukkpo6vdtZqmopmY9jJw7GUq9FDmu6Z9UkXdbKGmxZcdqF",
  "key34": "5K9A47yehgp8Ht3dXyLUnSVU59Eh3vTrbPg3rXbq5TMY1ovrH9PsmEW3DQKKgo8eBdjvUkqQqNJRhfBDDqBvwEpf",
  "key35": "5GgvyXQjpCmgEqSu1Riip26RuxFahnyP6SD3VHy8uUVRPnhJ2fpKjA7LF231YEstzi63Te7N8nyMKTVZ1Fn964To",
  "key36": "uQiqt9oFes1XCodLoLwAai6uzcudT5zKorXPjyQqhf6fcLH9MZHRMqB8x1Ui2vU3bCH8fgz38z86FDqrh3qSrzR",
  "key37": "2Ghyu375cRFnUe5PDZvnMdAkG7N2oUbPDQbMkUTWExeAhJVsc2P59ciEXZPLdGpNsjquYc3XqJrm9JKFdpyUGerG",
  "key38": "mafovjeRpd6T9v9FG5LqLuMpG1KEjxNWFci87QsnMQqYKt7pQfW5L2Fx8gmQjFUEq5wSLyNzia6MKm6dWA1SfpS",
  "key39": "5S7dgTpMGhj4iRw2DrE4RdNCe1vsCsshiyqzfcDkgkCbmM7BsCNC8VqneJ3RN2TxtVdyLPaCyTvwzHYeYZaVV4Ub",
  "key40": "4XeRVE9GMA2rBeYH7vUc4wJczrXNc71G2TfcnLVd12XRjs7d8HLmBDY6KWCXqxPurZNAssuFtDJ5KYzKmcZ3S1hr",
  "key41": "6NCFi8iU81JEjprVkpWTkAYEaFBSExEJWP61HnpYrUPmpiinuxWFiMt6qG2wEcWr5r2yKure8VQzRKM1iEoYL1n",
  "key42": "4UvAhHmXkmaY4U2UvgUydDC7XUjtjbJZTeq7EsmwDsoQ6pWT1Pg25Nm2sgddzEBAVz2szYTeobqjqTtPwxxew36u",
  "key43": "2EiXLyYoPwFzAWAwgVDU5fjcn14HEdmtL3GS6XxH4vUmbm7xZBZgXkgD7bA33ULzJdQFmHeRxtESgvVY24gagnH2",
  "key44": "4Q6WVcL6QhHvhzbrwMBPayFzaohBxyYbAF34UMEbcAzwELPB4bC7nw1SKF3pZ8wYcrKYnKCNdp2VUWhCKY214fRo",
  "key45": "2NyFs6YRvAyaXbg29XCbp8V3AHiz3Hpa76NPiRjyiiE7yu9Y2soXd1g3GiWafMZzf2gdcxkAG8J9YQMi6YtZr55K",
  "key46": "3uKZyqq18qCk1saU6sRXWVT5sWAZAcCumyML3veaVGmRaFCSqqcDNmxdq59PVuBh11stodjKh8KcdNkpLTi4cHkp",
  "key47": "41dX66Hp4B5GEZnaBBfhqNaze93GcyamYGNa7AqVC4sZejWf38noy9cWZhGwJRGo7AUyPR9mHgfakYVFKUngLZWc",
  "key48": "5JHM44QonTx4ks1jsasNqmFhBDAPB23TFsW475Tx764sdxriBLSfkZbXmTpYjJc89iF3rjZqgTrVGTtyPvryESes",
  "key49": "5inJsmV5jDnAE2CWkSkya865xYtQSCAWaiHyTeNbHcgcsGuTUVeAqrbca27yNcNUed8fU4AiKc4VxCoDAryxBcgK"
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

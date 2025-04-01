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
    "2PZ7HkSS2KFg3n5Ue8kkJXgjSw4iEuStYzbyhTJtchzW7VFikzigM2HBo7mvL7DkTmtprQjY4X33oWwwpWoBB5C9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GivvY5VBdXCwwUHM1AH8y93gPVDGFdh9KEBd2ABGZbDyRciySG9BVExYVXvh5SyQBjgoapJ4nH7djBWt7usU7X",
  "key1": "3PyoXuzcfveN3iWN3PoHcxXMnW3yHoCHzPYsLpcoCvivxRqkmoa4Essoh9zquCeGkM4mA1pg4CEJLgWjqPGTsVmv",
  "key2": "5nWbi7cgxb71tNRBXg8uK1k4trhy7goVn6fD8JYh9V9n6j6Tg5aF7FsCKKqcKitnRciTPWcgckxWVfBdmzkBnHYF",
  "key3": "SG322HWHbbKr9RaGPXHcomwC1PhuNQoH8PWTByVdXZ4WKGDemg6AnsnKiUucRd48PEXaXwJXxFYZsiSJM5RTFd9",
  "key4": "3WvPMyeU3992oMNXoyKhdUvETx3zqkXusVRHmYFw1VPgckgw65TRwVEE9MbTz9NHsahFiLteKZEDgWRzVaS3rHm6",
  "key5": "3JCXPbeVJrGA8iauFSmfBT7LCntctu3PktpK8yaVHaJo1NcnHZx6CjzxasLDW3AZi979kpB18XNMZCueBZoh9oob",
  "key6": "GvYhuWyFTaNY2oT1uKJAevcBoKQwyzixNRyc7cMDRbrmsJ45jFoGFivzi7Hfi7niD3bxRNTeyyhcwdaqNdtyrZJ",
  "key7": "4HiN5xiEGM89X8a4bX39h1PMiXKS79mcenNFA7s1yrLzcSwH6riU8bfGb9KZ9U5hSr5Y22w4gyC48ZmMpeZmZVpE",
  "key8": "4njN7XoG7V9dyGKvKKTNidYwvMxM1PYzn9SqWpftw9D1yH5Ba7XpoJGuKKuCuVMcrmAjkUuopKgcyA8HRsgKehE4",
  "key9": "6azv7qhSAC39x7QAghbFjogTVzRxyxBMPq6bQNktDmazX4axBaonhdPLHYaPfCtQvX7xijdSE4FP8kRpNvMVqSa",
  "key10": "2v3RxMK8mdmPCjRp3X1CbKatqnBZ7ETGQsq2tgLrY3R8QQyDhSj2jHQSsE6Kn7pMBbbfZWw4zxMEsTWBfbrAofdZ",
  "key11": "RzWDHFEXM753PKiXEdr1khbJ9fJwDJ82P2RW9LLwUTJKBmYzvXuDz3q7s7fK9tkeDy952GhHTzHu5eKouzCfxXf",
  "key12": "CRh7MdhgTMrs7BeoCfBeWRyHQGTEKyLgFSWQAUKdXiVp6DCVDo6Ad2gAJviRvHW94WRpRTDvG6hHmK6ZjPZ9KA8",
  "key13": "2iHJFMtouoofy2UDeUEKCvATPnHw6HZqZCKta67qFgWSFvRSCejnWxbU8YmBmo7tVp3v1bVPhjmg6XbdbU64MqQZ",
  "key14": "SMyEPJYsHR7qkHX2cSGQr3h6LxPjWDEr2CxXAPWjT1HThh1gvCbSJvDXBUfsPioyb6aMasW78eZTRMF4Cj7Y9Rc",
  "key15": "3qELVsbvm28aDXrRQFbZDG1rrJeYw61B8tsjDVKrmWK56x3bjoph2mjqeHh5jZnFayUDjx4yHpBLKj4q7uzdBxQS",
  "key16": "5Zf6Ycs7uzKSUyuq5SJQ7eSuTo72eTAU1DW5gpwtV4746xNyNZLQWAW6aCwZxJtu87ZkTothrRj8YnF7Ceqa2syz",
  "key17": "2XiqKfL7WHBYHdJ6LfpJxK3p6pe85yyMJFbFqu3g7VbgDsp752CjVyC5RpB2yc9xaqrgRadGuoYnx4i4Hw7qiAsZ",
  "key18": "3WTHyubwWzSruKoEBD4iBgHoH4JK5usebXztLr21DH53dzDZY9rBuj9pjvy1wPYa6o6q2eRUNJHj1Zvh3E53bUxb",
  "key19": "jmKfH6KDBKxNYsqF7AoouacTK4TYzyQFPjxgh6wUSYUvETYRm2JkeyHAtYeyzvoT4Kh1csPTPPkgXgGX9SjPhnK",
  "key20": "4rk3PSrDxdQPEFGS7evkjMLKUL7W2EkqdjBJE7GDmU7p2Ku3MYu9ZL62fXMaNmSK6FmGa6cCsLMLwSgGfsCSxLvN",
  "key21": "2cntff3xKNy2sZBaNVhq5V3bXczvfwJVHRiZUDUEFLvZP5ceFoSUabDNqj6VQp2K9pynQ3fWM6bf6SKVYpW43MXS",
  "key22": "CM8oEF321cvQ82QyowJLF7LfhXdRoR7F9bcVC5dZFgRdcBfegYyEUzDon9zN9oNftGjYizmL121t1vN9N4Ze5fH",
  "key23": "3b3SotPiJmiCmo6FHcApunMgrKuBoTr7rU8Ee486ZcRzyHyKdYdXKeg38AwePjEcPLMHWuFDCyKdp7jCL392dcp8",
  "key24": "PoaFa3Un86J1h4YHMAduYLLDW4hgsXqkSd2NcJRvwXLmUq5mSLjMZn9WpbsmmkzPcX9EBHhF9iX7yTg7KvNEnUg",
  "key25": "wDsZLZu9uAxoNNrkZ4E4xEtjeScqhXhDW7XnMtvpiuC6LTEqNF957But8cXQnDZ7TqG8nTYeYpX6bgzLwURdcRe",
  "key26": "4QDiRUzWX7DDCvRcqMteQwmMSZUL9nQkpxF3nyHt5zrVHyaQorDaLzAUrdaDNniA6jP4EQ69wCMm16wkVckaXt55",
  "key27": "28ouftFS9La8dkaCTUF1zekxsK1WakmjQZLtipEsaKfPZNtpu5aLemtKBZPULSofpDzPTY1Xxsn24nhCfsFr1hBA",
  "key28": "2zUaVmK2SuhGvoeaz1c8BxXguvKar5ZcUjg35NjGtxukzd7KegG7PN9DLHSRneaBPGVyJFW3CmWVaerHgsxDjHuK",
  "key29": "31aXkQdYyAdxJ1RAv4T31ym5Cp83ssRew8JUuXfvyjmnZXYr5BFoH6ZbpMF7tdqH4BtvYmxhAm35b6A2LSdgEYEe",
  "key30": "2zfsx7Vmat5t6P2ojVg1MFXYAwwdoH1C7bMk67JTsQGVb73bDsss57KrmAbAnH3xxnQ9z6a2CJWwSduNcQY6HSgh",
  "key31": "4A4S4aTmxCEmzG56ftphuaeVKU99j38cKQjJ7Z7w4N1GqYF3trrYiNy1KA8uNXcZWt2LHYruT4wVnrsYDfvydaDP",
  "key32": "5MGbaQipcoGCsfAjE8KsQzms11arzpoo9RZspCd6hQGkFze7JtotmCGkN3J7TLYQDcmeM3qcoHeC9dR9JoVEqDoJ",
  "key33": "2TWsnBruC7rFtoxTuJcPZtbUUM2AAvMx7LxeFQmwm37Kfg3uRGZAM9dFSZ185JSGGskc2oSgKZmUyfhG7veC4dW2",
  "key34": "2pEUzQNK7MRytvQDvPhdfAfq9M5Pyu181X8HdPmrj56p7DQ2VoopBExozVdZWSnveVhcpCkWtBDD7sqfLho4iXXW",
  "key35": "3HCeozDHyVGbDVEq2fKQKo3rd7FWuKKFiHfUkdmJj2Po5iRXVeZbraN6u6E7tiTy99xmJ3JZSX8DbxK65ifHN8Em",
  "key36": "4pByEVCuzV8iv8S5e6k7YSXjFXqtAuTkTM8c8FF639UfcWWSvztSADbxQAawnf9qBeSc4dU14WTr7zRg6hs6gAqy",
  "key37": "5xktSfXVkFbYrxF81SnDmcKSg4yKRiwoucvEqchURveTqEo5fYg7msMfBRSEou6n339skFwmgKsFiEaWUkinw3An",
  "key38": "5qMMMWADyYu3mzmBerzveBywzuTDqfCpyb6pNN6KeZpsngfzkLEfSzXTtkRkJZdWFffFigNqnmgRqiszn1qutTu5",
  "key39": "4R61mpSiQjBu3GJAbRL5RmwRkEd1aHJrhZouncaYATV8Fw57cYANSpUCpuD4SBRhpN5ubhd2R3iH5c4Q3RosWGEv",
  "key40": "31B3thowexdPxzZP6jYFvwPhxya79ZaUEewV27J9VWcD36XspxwVhmDw4VWxndP7p1KNk4eSpg8JVBbm4Uq3vTiH",
  "key41": "2RNfCD1KfuSCwa8UsdnAbzS8CftvYyqkDTKP2hk7STfQ8JsiSJ7D3E1a3wTfGgNejNWQTRfrhALinFQMvFh62z68",
  "key42": "48uEs6UoczQvg8NbYcKfHcnSGopS1EeevK5FWQGQcDjb1KV5SPHYe8tW67jywnqZeR2Vv778PLvHHNpj8fEJBeeN",
  "key43": "4WFbhm43DpFYQw3ANToTeEspCEMyu1KLbA7QRSxsEJXY9V9FMZvNPn2hATchjTUAD772SjwmAJsmNeFEad5AUvTH",
  "key44": "1hRRKGhLsEQniyubhTDPWa2JCKNmjyx6WBdoicddkYYj949WBP3DAi5zBxjpW5SDvLbH4gLmjZvtSbzuzgchzkY"
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

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
    "4FYWEiq31FVJ8Dy8jYjtA6qyPwPSMNta4t9JJPXaiyaM2mcuQjXm5aNfn5tkrZZt3JtAyAwoTP3mCmS9VzezJaeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGiwUmwBPdzMpcUesuBz9pMSWf4JKwrJhZ46jRJVpuFknxxo67yxN1yZgpSwazXZvq9LJMwFX9QdYDZUCu5MQJF",
  "key1": "5AzEnfEiVLS4YKUMY4vGpPhhjeWNnxcrjBmY11haVrkEBPBn1tUK6zBCt9NxpKpESsYZaJupG4LB34QExTcFqeLJ",
  "key2": "SZqgSaKECsZzcHDybkxUuzqJtpB7Wrryphe33dhz2v1KwZoU4aD1r272hEGwJBaag5hkniZToUUw5pda93Bf442",
  "key3": "2vRVwVSdew6czY4xW4WhFKJFvvbqpx42SzEivwGW8CjVE93EYwAPBsF64cx9HdECpsDf2am5E2VHgDXZjBMLC6Ns",
  "key4": "djqrWkVdYqCZyQUcEWPKoriSvK74w8YMqtRVkVVdoiERs8VXuyi6ZJCtxdmtdmJsnYe9MqtZDQRKwfTGb5fsE1g",
  "key5": "5fHJhygtB9dPsideSDxkeKWGpdrwQNfTU6nh7VoEXGwEEyaJJrigeuFV9myoXdWTdMiMZYcvGGcLEmKVTsd9Zbza",
  "key6": "4h9Ad7SEpMFDH5qd7FdbLZgHqsUSTaPM9AFd2BFVsfyZoPKDYaLWWeiPTcdGF3QvkoLsfCPHXWR4qD72J1Bf37M",
  "key7": "2UD6BEawVa54YtmKDgUcCtSihFNRdboSuTcQaggjABMwpbVbBe9Dr11Dbx781uWnbFx9dRR9st1UuFN5cNtQCdN5",
  "key8": "qQb1YzLjNpJJ5HKQdAiFgFKnaF6ZKNGY5bLuandVTZdPbaauD3WysepweN14WseDatm4cbKatfwrXhG8LCoPgxY",
  "key9": "2muGzedeqENhuWSP66fYFzPTY3gBnkDiJvBN5HHeTjkbgV18RzeEnTcGsigfUHAsQ3SbaHGYkgGQSdxGJz96xsmo",
  "key10": "4DoYUncdY7jTDLdhcCpqG5dLc68WoyRKBuy2sgzS7zVrAv7s7pxFHWYsraHJUm5H9SdLsUq7reifYj1KMk58M6x5",
  "key11": "5wtJSwFnVe7CpRHjGjDhc8suBSxof81WUnyKL127f3hxWxPDGvS5n16hhxUrhknuFdH8QH8MFrW5CHjRdqRRuCU8",
  "key12": "2HMysYztUf6Mkst4FCXh37my5E22sHsgABjZ1pGFRiGMFuBXwfuAz6TrzZms12icNuiDttXp3mZMsjbkZLDrWB5T",
  "key13": "5k5382BQJRawEFpE37Fqa7q8jihdPdzxhouTHXYENFa2NUyjk1oUCLqtWXQ2H4YxsWYvWdFPS1f7zjsK8aeSqQ63",
  "key14": "4oAhP2LpA8VqWmXLMAzasNEgnC7p4vLvAFpB3cXgWunk2Qet5UWmLrLVMt3HnojkCzxnyZjFubicx5sdhjLYorkF",
  "key15": "3esiW2Pam37wm7r5gtyqwzRdae7rSDZPdRnZ1hwo5HAWZwxmHpeWckaR79qxXwDPaTNiiwBbNp7DePdqCiwjdg7J",
  "key16": "5MxfX8oshENtHra43tSxJvHL1nL2QZnuFiUSyxGxCJ93KyhYgLN9BzFyvHY529cfM5kb27GrqTz7WXAsMxrvaZnK",
  "key17": "2Cf1YuEAWxNk2JnuRAxekpmhJH4X2PNXxnVhfj449mjjfBHZVDJnJGBKQou5w92gRvKTCxdoHAVAbpbQawy9d6g1",
  "key18": "2U6ytEnmpsvLZpkLT76RZRPw9aZBZuaCqqxSNYTHgfskyYMpiZ7AufnPk5nezXvmx9B7iAW9ABVnEmpW84TSB4g4",
  "key19": "4fdtvZzc6EcKZA7d6Qb6dn1oYYA7hTPt9eiFiUsQQ5z6smD7g3KrPNsr3tbgcz2s8TiKQL8MNgeEKUFQnD9CjZCU",
  "key20": "2c4od7rwnQocNvo9HPYH6hjU1sh5nH1yeW7x8nvVu5qdyQ78axtzTubc6fLTW5SCt5JZqsKvmao1tVx8CQShhkQ2",
  "key21": "wChz8TwLR8qnmqsneU4bUqZvBRE8yum562kDAJLBvanzn8GokdDDYx3vdRqFiP6BGZB9odUaAcSwb2xh5Mbk8Uj",
  "key22": "3C7N6aHLJ1cTF8EAuKyRg3fr1BYP7uhuzAve4aE6UdvRJamExPgjjfSTwrFgH16cBShSFh2cCZnjQaG9QUHtsTCS",
  "key23": "4gQsRkSaQc2qvefkYboYDWySGq9Tzg5CDM6TnVPu562haMhrvBx1A3YCp2nmcWh51PT6a6Cn2SfG3eFhY43hjvk6",
  "key24": "4Hyvj4X3LSxagkpApJFHQkiasi98ePVc5dGZMHeJTt96RTUgkaaUPC8CAx6QwiTUUyqXKQJY5QQrspSH9etvwJ2y",
  "key25": "3P9HVpD3f1VXncKn73VGs7mtLSfNSGMMRACezdC22tWUJJA4zbEqVZioGU5Y2JEbVJFQnjh3i9fGHfKYBW5xQQ8v",
  "key26": "3yKdDuPRrVeN7P2x1jzqaDdVqQzcATTiaEBw9whCoFSfLAg7mEbuPK92YZB1nvADPobB96k7u7WftV4XorALv6ae",
  "key27": "3hNitz2DvMKA3gpWmKCmFsPoM4uWbm462iFpkk8eXsUZZugqe8RZdTf8DABw512m4qEbeggf6PLTENNrsesKycA8",
  "key28": "5NfTPbnyo388K1rQDgCRCD3ovS1SoD2qEDSsVy2EKdDDk13GJt8pP7dmbTy3H4nyvF775kbcuEpnpcjT44TcoNHT",
  "key29": "3JtfTbmS8kH8pZadULz7vY9i55zR7Z4UirPDCy22FzSoezwK2N7k2LgQFWQCUxzNcWuUzjYsUUvdj2tyQr23RS2n",
  "key30": "4mbo2MTyEsqVsHa17SpFSuf6rkPgjnBZoJcmfQjzx2qDc7posZs2Nj1XAncc1YLEjBZBLSc8bcd1nmTDP6HWvt2j",
  "key31": "4y5cb5gCmKVWCgKKYPqu4L7cAGDyQPVKJrTV6fsMDNDDWSnsQSdocXBUbhSi1Lsq2r9kUza29HCmatPyDY7efBHW",
  "key32": "5HbQxSrFr7yxUNV4qL8tRUHZdLvJuwDdbnt1FJG6bvqDmEYMk3NKFGWrFHbSyA2zSUvwxsTyMDg9AjPBezgJGE8",
  "key33": "29A5yTtagGUPvHNWRZFYhWr6XbHfTb19WT22yA5W2uVMt5aMPr68Bqz5gGjZskbprEdG5qmuyj5B2Lrg8TD2oR3x",
  "key34": "5rgamLizfF75sXJ5DaUKNg7QiQvjr9HZjbzufi5R8gvTs2EpDx4vdzSQeDmJ18wepPzJruTudLMS7ikXRD7NKRYo",
  "key35": "5WxtGKgNfKup9iqcnKoKbuRhjJL43JZbQt46D6bXuMhVkTjAvUDpoYisU5BdcpzWoBpfK2vLMrYVxEg6a5DZ8H5B",
  "key36": "5mM9ydzhNSfweoxAsmzxdtAUqhPYxrDduQgLu3YrtFuYnnMC8BCThbaLE1XMFunA8XyvmYZ6PjakvqMK99U3vLhi",
  "key37": "5qajAUy5bWB7iASiZo33PWpmaou33WYZL8aXN6uUNMMqsx6uuS946cH6utEfw8BWNUp4QH91FBqbjNJGX3VZebWD",
  "key38": "3iaZVCBpvuojyJkxGjiY89iSTzrsqUVeDXrX6W85Q5N93zxLJmsGbg14urbLm24G7HetNsGSsFh3se83HRv5gsXB",
  "key39": "49afV9ZBytj9hJf1bEVbhAFouNujZ5Q1KoQEaTmabZ6Fv6j1CcLBxTWmNFMjGGs2skxTXyzx38TTQGaCR4cyBn7p",
  "key40": "5NBjiToAGMnT6JPQ257MGYHmgHoJ7N6rWfFr5AN8GgLEVJmGeW9isr5W9MiysYPzYpWjqChi3tgQZH34RsBuYsKi",
  "key41": "272vCFZXwyaTPQsACaC5tVeek1AmTLaWwsXdSumWdG2s4gERRWbt9cgmKdqSsYN6pSj4Sq9Gq629w6fPXUm7EfrR",
  "key42": "3h71Li6h9E2dYbtkSc1UmaWbw7FkwkTe4GV3jeghVYwnsN9X7nezE993n52ifwijU4yQk6p5qkPaFz8cKqnAw4WA",
  "key43": "4hL6RsQDeM7e5EbCo8VNZ5nFG8vao6bzFwaiRjansSKi4A4Xcsy2ruVYhDxGWwjafQZdGF24zLcPrU2RfsFjhfLo",
  "key44": "3ijr4EfEJxycB5vyyEZWSuKZemupNYzNKgeaJmHi7ygMBkS1wbYY63zCMd1bHxMxEGwKzoTYovqCTvTnbqnQrHsf",
  "key45": "47RuZUAcCQUu8nW8uRR8BawEVo7cWwPmnpAWw66ZShXRCp9HwSyAymVFboa4rnA1mki1v1mywPQcyPFjnFKkFEnd"
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

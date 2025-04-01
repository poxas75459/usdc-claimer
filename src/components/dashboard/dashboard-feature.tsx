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
    "qMZiddBcSdxvJDmg6oi6suTxHicZbZvqwWPSAYpCdYvBk5imF5YUTy7tQhH4MgGrKE9aSVJshEn66bGbAEAviaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7yHjDpYZSEq3exb3qh5Ee6PZqYxf1dZTxQm72vgJY1wSJVhN3ivvpdWt4MT8VbeLFPQjVWFLosmUCAmr4a13K4",
  "key1": "a68GhNo2YAjqhmk8QTV97Z9UG7JfmmWLfeFNLX5Zrq9FQKSeWDHED274XQKuh1aShstmuDd52RZTTAFdaF7Zi5b",
  "key2": "3JWgpQX7upZqDSo31h3iKXFzGL5P6td4c592K6SjQuTuXD4P49hAsx5TRbYEpLZtbzfLfLaY13V1XCqakxkJb6hE",
  "key3": "MtUjgr2GCXPrcsX92viwDRRVvbRXrYGcCesXHUDY9fEbcjLdAazdaqLKRVfKsy5V9cazB3XJx1LaRcJDbcXYDbh",
  "key4": "5sTmi882ZZVz9oE3d7hbzUwzqsqR6NGcd6ZAgHVLq9StAMH1YpMq46ZrRkXMmGcgHqxW9rryKXE6bW4jpBn18P1B",
  "key5": "2gZenj7jvmxS6nHW5YaRHS1sF3PQ15th9neqkGh2E4XBQKcktK4JqpnoahsB1GHKnqEd2kqZQ1pGX1nzM3gNtmVg",
  "key6": "DLpe9VhTMXTykNDbnDYiKTYavQB8Co96W6QET8SVGfCqZrqoDRm1zUWwb873LFdmLBTMttk7zufDAeSqdPBPtku",
  "key7": "5eBPg3qLeeSqcxMhRdt8AxGzJREuMzikLUa3mvpCZfrZzeu9JHBgRkG61scDYSQcZ3ny9GAf4nq3UYgE59FnkT81",
  "key8": "4aoGbgzrSnchDLwJ29N9gUMpUXfquSqGiLzBi8kcrcu3uFC3cxGTE6tufWNdAKA9EqRcn8xZhKqWdfEjDDig7ZR8",
  "key9": "4Towfxh5aFFBcoyYB9NAxRDZa1b8tgegZHd3SD7TcsjZKhKeZt13eeg11cfFLQMF6CsDeozP1oYv3FNHPvQFuxzi",
  "key10": "2sQ8RC6x9LQLwDULC3ax4vfGWETvjGYukEqrSdWKxnGfGRByBka5RX1pL6hz1uGxbmqqyzvLN1BXkezbdNXnrmiY",
  "key11": "rDULLaQFD177Vizvo4SM8WWQL2u5dWputRkeDDLgNUCgFmWNoEYsmibDcr9vus5gMZp7yMcLxWDh5nCCDXyQavh",
  "key12": "5UTBkJxQJzKFETuquvwfGthdvhUyFJBu7rijpB4ebew2fpzVWig1fKfasTY3fhcSfhFAVUKVA7bTdXyhCKjQDwgv",
  "key13": "27Enk5z7wBtqK9xH2wd4MhiyKi7NNE2CRgAR9L9w6mtW5vqX8ugEZsaRYGk99DtDee6DvnFfYUXdRA9um3iP8nyG",
  "key14": "2JzuAHfXAmVdhMGdw2nmS4RGXfFBNuevSkUgUANUdn3nX8xgG4Zzxn2rECKZ7PoDtVMkbomZagUXd3FCRzrSxBRu",
  "key15": "3LB1bzdkeTWv7Zbci8weHJXTPYxfwUBkSzXHDeUFaDCmMLD9Cm7bBW78foJCopsjQuNbrLCkGp2JLKPWuFjDeY2k",
  "key16": "24K4RM5gBTMVYZeVhQNcBkXRZJDWpCTsXh52UkTetmcCca9ZabcynRFR1F5MEQ5QjoZiTtScvEVhSUThbRUoq9De",
  "key17": "4hp8Nfg7NyMCJvNMGdfB963yWxXG45yxkGkThoZbah7t8vcNZRbqLbVUJBtGWoWNScDaiVvzVWwPTRGSUQjC7fS",
  "key18": "23czypMkhCvcMbXeRDAe6xizZtDRvdqVawEBPxWLaYMwu2wSyaet68Jmo8YvXncZrGQnvDC9pf5sR4bKAPdpJG3V",
  "key19": "4fQYSSbEJ9KxLRMqLApY7tgxNB3w7pcXyHJ3UjjZ2LztzaMnZsFccZ1eh3dPgK5bbMNoTpsTNVEmMPA886tRvMgg",
  "key20": "3PRrtheHDyM8Z8VmWF1ipHxKFz4tFQLUjgEPCSB5YPnqgqRe272B49MyPEfASvxZWB74faSYcBjijZmtdHM6uH2n",
  "key21": "39TNzukGjM5eaY7nDUyymCtv5EN3V4pKWgMzBtRGzFQ6HyPTtrxpXus7gZNQVYeD9rg3N7wswtJN3siScmse9Hva",
  "key22": "2ft3Gzia4YQuDg1pRLefxMGW1fNCujp5wyMtjagas8Mj5cukZq9i29UL14Nq1oA3Xo9q6giy5BBGr1ax5mPFJxnw",
  "key23": "59bEM7rLSNCVQ2T8EBVvgBaPEQ1R3yo6jXe8FjkgXpRvEUtGVBR9Jiz1VaWurdGStygix1zVzDGKCqo8ApdC5XXK",
  "key24": "37VjKE9LjhHJXprJY3wjbbktku27fUjxcGQ9emzYTVgppJayMwgvzkVrfRLG1fphxKbfSr6xjAdDCQ4TbFB6H47y",
  "key25": "wQUogdQH81SiDBqPD7RVJwyJ1bNCS58hYGrrGKFKMFtJzezgieJnV8324hJr85XxhGHCe1b6Wyy5XX2whSqMSyd",
  "key26": "43Nc8rqN7hnpAGbjjCox7e9WHZ3XrkbjsFKvLLU1A6iPocZfwPW3qr3d2G1F1YjKkKQ4dX6zdh5Gd5Pddd4dFiRs",
  "key27": "4zoPp2xCeP3skqW8ZRQAiDT8WGjZ6UVhnQBceLCLxvo9sEwF2GwvX9cbrF63i7Qb828tRGbe6ZRpiPeD9UeSGQJh",
  "key28": "uQcjq7pYPqHHfRJcNz4rJvCeqvWUDcvaLg9fra9LHHMA9xeweFU3zF4aRHJ6vYFTe43FCggCZWoRfGKQ4VBSovf",
  "key29": "VDuURsmbcdss9Nwp45Du6aMXiYcwy5cJhaoN5G7kmnAJAhnUmtTTgJU4RhaaK4Ak7Fg2YMcFbFgkHEJ31BP4TVV",
  "key30": "4EHVevqQRSdUf8agvcPX5sT681tX3KEpDnL1GUp5rKfRED2dV8n7mQCbro3fhwk15fYNB1HjmEbLgoa6TQ4wtFCT",
  "key31": "oJFEDCpPLBUyE9MEwNiBhLnTyxyUhtuYjUqj2PZShwauWXtpZL89qHZ76nEK5WJaCQVw15uNk5EStHSexBsea4N",
  "key32": "3Jf7dBUxiYhhWSvRhNbMBQV4WrfyDanxDzXzWLdZsijwxgGpdmfNKWW3Yy871uDHWeh6XP38p46fUQXhJhTo49Tu",
  "key33": "28MVEQwPgkyRyTgSpZJAX1bP2qWnsq7EAb7RXDNg46Z8DYPZRXfkLWGbaXi6dLxxe3QL4FFo8DD84MTeK5ctcMsB",
  "key34": "3TZbEf69sp3EFdBKwS2FPocQr5LxNwQJjY1k37Mo5pzKQk2me4ojWo7HbeBHfJedLaLd5cAmv8z4dnC5ZpVuADAP",
  "key35": "5TsBPJesYyxroZDkF5aVqmeBXWa6gNRf7xK1gU3kCWKXfqExxG4nhMVGrNvhMoSK6qo1EYYgDzrkpH7CWtv6aoZL",
  "key36": "2UmyGwdm2JgcN26PKm7oSu37HZd31XpTzy6DvE2F1AuAcuzDUnPkh3a2XuiEs1WkTxT3cxPCiTeUKknrWGDUqETg",
  "key37": "2ChbhDCN97hYn4vXUXQVu3oZ9Zd3eEd384w7D9wfovRgcgPZidvaLScjQmNvuXYJSjj8hSLkGwQBRVkYULfZbZgZ",
  "key38": "ByjY9xjrUNes6xE8epymwYVim8tQQS4oxKrJG7axuXxZ3nYUQ7FRB1HgWVsNurimUTgqrZrFDZjHw2jzzt1g4Es",
  "key39": "hm1iezo8EnrYgQAkvb6iiZkJD77Cai5VX1V3LH8Lctrvo58itxoMAq3MqhTSYoyY3nmfhpDEjjv13BonhEW6xQ5",
  "key40": "3VhZfe2EbGgZqbEsN8kpP1sAyEHJyHsCBwqdjSJjYWaKvFuVeYwZJ2FrCsNNDtV96c281v5RWjLU4X66G4Qkxfmc",
  "key41": "2Fuq5bohPEAMDvKtD858Uta1vkyMryTPcB9yT4qAeW4Rux7to8P1RPPgwKShDMZpzrkoUcNfzoqjTMNB7pkaTGFd",
  "key42": "5ZzWHjn8fVrUumigzHn5D3oQ9VhkWMGid3GZhoFB3sdL1CXPeKT9WGShx6m8pduKQmaQTXHPj2crVESXbUK65YwB",
  "key43": "suRkpRQyivjBfb6NuDNWe8PJVBLFttTexeXvKajK8x5ZmosrZzz3Apggvb2tUsaP7FNgUHwT9DLT82kfCc4vK4s",
  "key44": "3vqMniMW9y9ZrGNGog2vS8KPiQ5HrBWNt48WSgEriuGeG8CHKDtRkP6fXZn56np7pGVq3VPFJhETTZXDiFMC7jv3",
  "key45": "3MsHB3MypjGBjJ5MLG5zEsp3HvYpZtUStrm8pacGhZd47c8oq1tFK5fNzzYXP9qzif2CCSYm7MmFUVoVCJk1Gjap"
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

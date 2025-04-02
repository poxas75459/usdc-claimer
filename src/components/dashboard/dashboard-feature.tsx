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
    "5qzeBipDCtQZA5VgU7VAs3pub2oWLX3QQznzBAAT5rbj76wLYpwpAsCbuT4vzejWrr8hfngdUQst1VBZHDCsBWSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NTdy3hcw3HssTDiPT653Cd66DNn5JDNj5ThpG62o6BburidMd5yMX1tWvpU5zLmx2t5acfaK8QRvmtKf5GeiRhN",
  "key1": "5uFwRixdHte9vDnmZ1zF5Azyvrv7topYq3Smh52uJn5QNNZr8RfQMz9oedMvcKcNiuHJcfg8WSMkU5yK1rLg3BHf",
  "key2": "2c3gxgP3ePc415HVDSxMyFhmUMXeSDLEWRPJSCBF27S5j7xMdLuh3tLpixaXxY7o4tDVSBqzgNq8ogD2cDNgc8kZ",
  "key3": "4f1dCr121QNmzUg3trJ7hDqCs2o4ppWWSHMQLXqsLW5AE2TJa8rKAAChQDeXZB7bXKrkA25L2YwN36fzVqEEJx8h",
  "key4": "3i8ToSY4XgzPVkmYiq8utXxVkNdcQzQ7nGz6M3BJdDSiyeN1iufyDaYzoWodc7sczD6xptnT6QN7RfnUrWMMzRWe",
  "key5": "3HbT3mJTdM7D1GB8sSbUVe7kK15C6SsTot9XbESFFNbsMAVrAbPay22Ak9GiT3JuJgY15XJwdPYQUD6XfKUAULo3",
  "key6": "4LyNM16MCSkfRqmhMDf9ZfygZmPqJhDKJP9tmsQ5T5E8Jrsj9XYCE7JQEEmrZKvBcWxx7EkztydSPdGB7gb9fbaE",
  "key7": "4J5WN2bxBXyEhxFvBoinxcZH3SPuV6mxiX5J1QxqWjxM9DPh6qvHAsQ3iu4QDFGU8w46pECfZxgTaA6QiTC7evDY",
  "key8": "24jyXVgmVC9VCAmBxXKnQZwybYVQ6Fp4rvT86Cu1ZuDNtU131eQBcempg2F9HNfs19w4yVCLnEoXh7Tz9UHwhHbX",
  "key9": "2XUM3wyMnUWzbumSGVeuHWiQLbgd6nogWgc8GHHWhWKEz8BW8qiEZ8KnRHaoEuzbBSTndKyrtDuwQWrSzuFfLARy",
  "key10": "9M7KczQwkkaipLAFgrkYBHzSxYm68ViBPFywYV7RPmJyj7yjiPu7SfXoywVLRQkb1gEwrhEfozdgjQT92qtAnmP",
  "key11": "48BFzzNVmVKo8n47y5C7wfJY8C5X4jXP291CxhBgeEZrGV5XKjKdp8saQsVWBQqaLBpTQQuvtmkYuc3Ay6JECxSD",
  "key12": "2reNqi2fCbQ52HTQGLdbtfq3GAcFQyvWhA4i5bSV1NJoFZZAzqmHgmvd7gv5TzChucSz4i651JedLYZyEQ6mFCF2",
  "key13": "5pX9bpH4bS9ZAxqh8LQquuDkzDp2kDLanty2xu1Xw2LEwP6xQ2TJnr2mgYn7zsH7FmYYyH36oSWkDy22ibrh2UR6",
  "key14": "8tcQBUL1vLTBSd2bY6X1GLdDb26wPDDxvAapfYvMQFZtK8ZfV9CHRX7oQLhnwhqqTzMWKCWuUSKFXMwLrd2w47R",
  "key15": "2BQ2yffSHXVxzdSb78CfDXPE5dm9yatXmG7fmPDHJ2ggAN1UcnRNrycCnFsgmVMVnX3UfvShNp1shnW3AuKNkQUA",
  "key16": "5joBrfySCfiPporTvDfKNWnepKNwnsYDoKWKCfnjsuvHLpJwMdx7fxLR324NWBdF5wBJp16wA1o7cfN5uVBXiVkT",
  "key17": "4AnQswpJxBkt53eAH75qJ14bg9BJ35KYdt2QSNX7KZqjz3Lo6tcb8tm2g7k58Mc7wAXEUYqWWwmco54kPBAXiV9m",
  "key18": "5ENYrjdDA8rF6pD8KLsABtuZNK1pYNXHP41eEuBddYygih3b3mq6UNhc6sMMpX9kTyqWpFLFrQ9RxJ2yLSM51pjP",
  "key19": "3x1T4dcAStTvtvGJ4Eb457MbEq86PnRb88YrWukh4G7Wq7qPdBYr8nBPbDnvJkYNXPQVXKPapp9PmX9bH31Saamn",
  "key20": "2LU6nEtfsLhPFgSinJfVCTAiZy741xvpyRajfuMmSYUfpdBBXkiq97nQPF8mC5ZqxKH4kpW8rG8wvhBU2RrPkqsf",
  "key21": "4d7EaH81oW21j4mynBNuQ2vB31btjHJ6krJ8vjyfqKkbS4PxLwF6ZDGr5AKtVk8AbdVutunVYmMxRxuWL1P4qppr",
  "key22": "5btPLVYBSvW3ccvtYR5FRcdJTt4PSPAuaF1Pp9J5jR1K8aA75WMQik9xnK86R6GGea6pMsbgqgqPz9HCb12f6iRf",
  "key23": "4BWJbUZPANfSh2LCFpU5dyZzXQaQEsTFDfsk5DoY5uT2S7tUyjwLCmoGnBDdW3mMfF3f4qXUby8SLFtHSMTG8ovL",
  "key24": "3dyKzsoL7rGGkLa5obqtdqALE4Zwck88rYL1ZSAUtMzB9j6KfTv3Hzw5huWK6weMkXhqUqUbM2JxjrbNi5PA8oCk",
  "key25": "3GWni7Xj3tRkGMLvGzAdk4cyxKjCGvkqUWZyhwnvxX9XPnKtVpan4hMXfsgYp4wcB9Y8k4AuTMik4y7Yaz8TjArV",
  "key26": "2YQECn1G4keW9vtCiNLDHHDQYMM9YnUUzhbtkFPkrxJp2QVEwdkcRLyXfYZNGcrsRH6nheatehe6MiZP83bMoRQk",
  "key27": "4sdm6z8piFA8t1hC6nQu2UrbdXJau7U5QYy9uXRRRPWAtnKKGJDKXZRgscuMmusQjom7gd4Ng43AZxt265Ujdpk4",
  "key28": "Kp9MSsQRGjnCQZtvaoeDsg57HLnybwGdeT6cVzxxTQfhEaewvFYgiLS5N3bfBmxS4UFtuCrRSMKf3z1j3Thq6FZ",
  "key29": "4j9ohS2ibfrHmBxHu56K2228ZUAtZvQacNrBCwcsDuLcrhUxMWX3UdFMRgLLEUxRaXSfJkA4q2n956K3kfawzYLM",
  "key30": "4af9KGto2rtdJmFg2xpD7KnK8fLeu5nYuUYZbLB8EASAJhwFjiqzZ3hFxx4ozvDaJzGtzv9FzGJuUdZNzH6JY2VJ",
  "key31": "48ks4dGFiwYwMDTcGRdJma6KDq6jL6XutSkkZUVonbpp68Be9krnspV4b3689ekqhjf9c83XV3rfr1PrXhBqXyV5",
  "key32": "2iR99pWvbTCVEAPGEaY8GLSqsMd2tRMXXuoKkdMUHX4NifUij4kVgZgHAvfo59mXq1pXVYBWAATjuC2FgUZvLqU",
  "key33": "5T4ybrJHU41eZ6nGvR7F1pQChH3bDdkWGgwCCeuQNbyoo1NKhDchGbfiBwJvoB1GFGjxZehkQSSWBTDGmDKP8Asw",
  "key34": "4u2gZCBGgFrB4G26bEsuSne9UsDwZfprAnv5KxPg5qLe3KcVvbasjiweUxPfAnHHGEQAzbVDnUhsuUxkuEeVSq6T",
  "key35": "37eboZ8Ahis1PgXPSQAwt1vMsohtopg6V4F5WW1yQMnM7228NsfvYcBAJVsCPKTbjDPhLKvsUeCUQ6WufUhjYqQk",
  "key36": "5iaKwwEj6xSeHyascMsyk1Sjhrrif8f1DyRN8KxxMHHei2UJW8bMWPdBYm8vtpGb6EJJNp6kuFaHt3DeU1FYPaR1"
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

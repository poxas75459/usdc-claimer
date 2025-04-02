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
    "mQkoeXMphndNQhgzrPfpNBEg3P3WagTqzswB3qLypBqFrgVwQ5qGqdsKEKqP3ypSMSq6rCzpTdefDSMtkaYaFpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsCFGSo2BBQpzxHm3udaeu3dBmKHs49ZNtPBDS8ZSQ5ZZasG7gqagQe5mL9LdpEQe2jz2JHUqwBv7JrFWMdV9aH",
  "key1": "3nLTKDSXEwFGvo7UhFYt93o9yDa6SXm5GXJqL75rw8fsLb4GCJqeC8q7172GLgeWqPkBouT2RBVtnA3rj3QHWR5o",
  "key2": "3Br3uGrhfYTd39BY4oTSmuEFgtaHQi13kTmH1rPjsw6xPvbPftx4pGFNNfHZ2ciBqB1UWg44hpw7ocMR6JibgaaX",
  "key3": "4fwNEhyqLRHoZuaAe7nv9Y22serHQLqhFUTTGrBzdy7VfoPTgmkUuXB16AY7HrTvff3zPnX8ymrJwRT4oJpEK5vi",
  "key4": "5Faaco4ukwgbwyeUhGzag3rcu1rexXcfGVQJ9Gc24QvhzMwrYTUCExhFFS1aNrHdHsBSZwMfdmkLag4ZdWnFsSwb",
  "key5": "3QkzrcehCjhubvb5N9opougW4JUP6AQdzGaVbkoUjU8axC72kuL2x5NzLCMeyKaJm5yJoh6prJnM9weCy45QRNh2",
  "key6": "2A6pDKum33PkbychZ28xa6i6rv2PzKWCDEQYoFRZ5XhqupH3q53sg3cGa5cQWAkbRiYAG6BY21wQXMsU6hLWVrKn",
  "key7": "yxBHdWnHBy3qnreiDhU5Jsr7VgjADvqPT4rHe9GKims7rDBVMwbHgKG6u6Q9YeU9JWe36rrH4Dc8KbKpZTmwEc9",
  "key8": "2dv7faRg8hQN6QUro69Gqu9Q1jxh2tECHP3k3Uc5NMNNYqcfkar3mZ6SSH3Pty1FHXzYNT7aP2JRAUk9pZih1gKN",
  "key9": "GhpqJjCnmEN7xptmCFtq7h4BaZwjXVKoGhVkCnnns8cksKC9GCgiKK7RXLkVKs4bvYsoKZetx3g56Gx5g9dCYpr",
  "key10": "mq1GKNueqWTYxK5trwajsR3ZA2UDUbsQh6jPNhSNLnba5njtJCRLsnWXN7mUucRebmLfuqZmaUDnnRyyWVUEsL9",
  "key11": "2io1DZQC6eG13JqNrGcTHidJyou1SLdDX2zxTESYeKt8E3NCqZ7XD8LmXhSib32a8Avhdp5ySXEbwikHazKsGLFo",
  "key12": "2TmuHKCEoy8rJLSqrDcuNPhvryZSLcW8PGNMT6PxhpKDeWAyvt8oKYjz1dkSfnUeTGcQXTeNayGYvsJX45vu24rw",
  "key13": "4srHL1bs9d8eRAg8fkitqZSJ9Ub3bRpUxnVinKzR8rzRzetFnxkK1HUL9XUuCqR4FzLRK39KXB2cWxEejMHqWX5n",
  "key14": "2hVJmrhRFpRHA8tJJV7vBxxwXAwcp2sddSszL1rVVVj8d5sPdPCMCF73s5pwqmxsooqUMf5FbuNDyBgDz6hEfRKL",
  "key15": "5M1WqcqzjfSutG9PJx5qH5s1nxNEGLHmmqDmLqSUrqNkfaj48aczQvkcSV7DHBQ6QVKX8sLQoNJEuwxwVWuaptpp",
  "key16": "sm1rD9zYBtHokTHaTRqJUwebw3FwELp5Mub9ttUTzFXMDhogUhzXVYxFyx3ww9VkSeEVKu452qb3pPXYMJEjtsN",
  "key17": "4qsQ6FgicCipTk9PnUcF2KgaEGjn8wfERqtT1aBoQh94NQT7YhMnUDksKUJeexVokDqoa1S2niMrwJNF7ytSV6C1",
  "key18": "3BHks2pw8JCfvx6NSEU8RPfNrqGL47eqmCCTqknnkxQ3V92kPCAXD9N8va3W956zZH4K9BiKadDXsDRzgaGWffLj",
  "key19": "2KUMtNgEeyrJYETYSp8b6RjHCKVhsGsjAAW6KtwATb3VtZ8B74c4KAoResXbyex1QjAP4WZnAnyn4UmsWAoZADDt",
  "key20": "61pEjmS9bxp4der7yxmcFMp56VLUJ7Gadex571EGtSgXhKJmgcXZ9ceh2AsT8FyjQFXdW7mWdXLqLR4dRwSCRvMr",
  "key21": "5bvUYHFB5gLoSqbw3fnmaj4MXxoyBMLGqqkHxL87dmdrtnyzj1CpLtLVR23FDDUPe16Nkzacq7FFTdcpUMjSqMQq",
  "key22": "2QBkGPoKsnMek1FYJAi6iLvc4M4ZkY2Td8LpGEUoJiNcYo9uyiCBBGBBb35myswtQL4nDWrb88swBbaYnaqB4WzL",
  "key23": "29FpGJnWXuCUVgRt6uKaRwsLyrFPRp61nZFAn7VFwnJGhZ5pErU6gAQHLRELTsUBeBLQkE7QjkMAnPwCzK7VwyQS",
  "key24": "2hrpxEEZamJuMBRY4tD9ncYQcxV52swiTgtDfAYF1uGgazW9TU8vFQd8y1RyHv7kbQEGGUXfPJ2VdM9btmJ4QV8u",
  "key25": "5TxABERWJjDSBMW5e9nWdFyY82vTM6t2VUKN8ga4DFkgRsq18W9ooN7ueDwPdvPcvm4MFt4kPiuda1vJCYs5ywbu",
  "key26": "42N1dyrR8AyTiMLjgAvtVqVfwTCMtVCfGrDo2Jru3awswkNAoCxpY8Bu9pQ8CtJ6dyp26C4HNjZXrwNhNE7kejtd",
  "key27": "51g11kAze4jaV6cZqpxhxf9dgUUL1KFfkX3hunWbUtasSmxHf1PSRj4D7eRD7xKckWUun6usNkBsCLw4cy58pWuz",
  "key28": "2UZXVMYfh4hkU77XM1HfMG9AkZb3vXxu5hgi8PhMY2B3DwzG5end6DgkkLU1iHjQRbF1WoPnJKBHGhFztakK6iSv",
  "key29": "2cgDHpLQbLtpkwBxYEoiskS1PzaMiCStpp9mEnAqJk7VEaYP4aY2weo3Ao4CR1d3usrhaBL95SXXge9KWwQH7TgR",
  "key30": "4LUoZUjZ3R6mvvFa8mBbiboBFLmB1m4gccpBJVzva6HykfK8brp38hs3aHhDFzdFCC44DKL8LnkciNxhib5z4jCR",
  "key31": "51dimvygXVpRjyTJA3r4BUa8Aa91v4XzvV8QtC1knJRoKVrLzzdRxwKXhGQmJxeLGwzAfox189X84RhdQgbmZho6",
  "key32": "4XT58h4i94dTbBqsjVUrBX9vbbKiWWpdHDpwsnhAQAsXE8fJgBvSLzF7kZToAnA7dDBJD8cGW2Ja4sRG2E6UdTES",
  "key33": "DhD19SE1PsjNp1ukTSF7pDx5eXNaTRQ2n1BygRnNcxb5o6RPmdQ4vkS4AWont87uNfYA1ad2goHn5RUn3ReHQzx",
  "key34": "27DBWLreUWyKCUMHAAXQyBaABsdQsPa5bnKye7qeamgDk9XRdyf3bCb5vJ4KxdSVVk6w4xnFUUe9z8zhfejMd1w7",
  "key35": "4huw556qB2kjaAwKADneAxqCMnVKJhpw7j4Y2FeF7ASD792WZT283LhQ21fgLj8hZEMKvVpoVGnSxNfvfqB8MQgH",
  "key36": "3LnnTNCtCk7gWfuB4kbaiLEHREEmLXq7sFbmPDPoFzUMq12f7ATJ4hgFdXZPRvK9fF6jAVWF53Ua5CQusaceS2Ze",
  "key37": "2oTrTGEb1qQHRXWeEGNb9f2SHavjNHJuiLGpxYYGVKFws8Cq5gDazp1pFbTK3Jp7pBBCPgJDY4RhKPRw7jQnbzTn",
  "key38": "3L9bGGk2jcc6TxKbHCzNw6Y1CZv6Y7uhcjwPSYyGrAk4v4shDEzTTxzPZVhckfajQFeTySxQSo36L6MsVw93kaL3",
  "key39": "63hNQ1EH8udbSZkG9WX4NNFa5BBAZzak3ziRdkJ3nei2CHXpj87L5uwkeY8pszV76B1bqfqMxHZXwoPQjKAawmik",
  "key40": "5gR5QP3UEvmuAzKGEy9mCMFrZvyMBxWrXx5iBBTL66i2KshDqgr61P9922jnTvqBh4iMCHqq1K2hBFY8yQqXuGhT",
  "key41": "NH4YqXYN38CTu1crHqfg9yTa7urBXsRuogVWgmQ4XadiCmLGeAf1ooSCbkfqKHGY8nZ5vDmE5uMGBJZnQCyZp3e",
  "key42": "5ZdNE8xvUXFm1N5kHB4hmnQe4VdMMGQjhx91ECcHgBNFszvWvMNKsvkgUW6LhaL7TyucQEjpGFdZQi2MCZcBJAZ9"
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

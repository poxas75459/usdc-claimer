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
    "Ro2ExCNsZ8wB69tKWu7PvezBSaX7Xog39Ap3Bo7FVsGJJEbHXfhkwtDmgEbhbVC5MikYUixnqvNnuGyyuJyMP6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rminfTAVi4jyj45AhncGi7xoFK7NdPqgdCw2SQWduCUTqEPqj7iPp9BYLrWm3dyHZiuZLeYpLeW9Yg2jajQS9zL",
  "key1": "4iZYzGLP3jdZZF2RdZEBHKzgiasLLSnsui5qoo3mtofuBb7aWGzEfozg4Rm1oUzh6muQ1CSTTNAWUoQt95efjQdG",
  "key2": "CFU5hBmL12HCEzYq4mGPLgNHAzoMSxHr6JucKsnrZmSbeX9SPQ6t7HgJvjXSzernhaXNwFDcyZMktgGkUJVPT7o",
  "key3": "4daqxRRzuZAPbWFAuZgX9WEi6UmSmLkWBRAw7pQeRVQPysuusf3ipVez5ysgNofVnewRafQ9VTQyTatj8cDCin8U",
  "key4": "2DCJ45F29oJBa136zJ372tj2wcfQUjjBHmn6UzxNdFJsapDod2mEamECk4WZjs33B9FVmwDsMjB2RX9gEqZkZsmP",
  "key5": "2bPDHGUnAKTjQVNREPfq2zhSX6RQdhBNdgxj32Ncm8vmkjvo3BNgQEvPVMMkZKAwvxmCuYz7VXeYs4yVc4cckPA8",
  "key6": "3LxezZpYCG5D2shfJpYNouU8YWfxWF86PDvkPwHvrnYPBYiaeCaGXP7WJbSYd4WwMrYLTV1FKf642KyxE5mtvvjz",
  "key7": "4AxqnQwaLKfUd1v3VRkCtFhT9dTgF26MZ4v5AZfxqF75NKB5FiRagGbAxcgZr4RpNay1hAxEiZckJi9aW7zJYAW9",
  "key8": "fYKzUCa2BpxLkoMDNyqBxE4pgHAM3A9xFntQUvvarP5BqtPQXKinvQkNA1c7eXjZYNztXypKcj4LjA5wuhm9epM",
  "key9": "57UnxBmxKddfXNy9bmhBatcLFhKjsouDKvyUFjebfSAkdu48JPLbDXoQtcpon8RRBxQnyXbHfp56Q3Y7a6SEw9HH",
  "key10": "Z7BoVBmDNoN2wMTbeVY8g9UAwSb75ucdtm3Jyjrdz9h1htjoMub8A3koiJzFB7PqfPbZyZhnk2bEGxRt8xYfXF2",
  "key11": "4RACniEHyreZj6aC4iFUim6iLm1CRgRZR3uYcFmHF5Bk5XEspY8cSkESDWSuEBSDpKimrgiyQfBH8JMyxnrdu47X",
  "key12": "3ePUfHfVkNYfirXRoNmxZGsdhSp3tPfQvFD61FaF9nwRByzGkZieeEs9QLv9hAHdY5yMQ6aL19aV8um3mjGkEj2a",
  "key13": "2YesxEomhtDuDZ1NH6Py1X2JXv12zDEu6Enakrp1KgnBPKetoVX11LspigCaDYrXX7h3fyoaW11rLo1WS2754mzc",
  "key14": "3FCoKJ1NDRVhAFUuShVun2HdzpS4vh5o9aKZAZ4zSYoMVD33XYUm6QMdrbsBQrtAQnjrj7QDuve879Mtp649aVvz",
  "key15": "5CfCBSGGaxmLugD11jY4tBFDcDTPqFiRX3JckdrGBvFjpkGSeoGde6roGrDWEVKQU7rgud1iwcPQ6QKYZFfimWkA",
  "key16": "QiQm3cgdnYbAVNVeyrVR38Xs2QY6cWFvSG3wfXQYDW2wbuGFYe9ZKy2oj5qVre7ShfSmRczBBsFUwSoLfKXAyWF",
  "key17": "3tvw62QfHExpATT6xjzqBoGWQZFcpa4rQDPjYg1yGYuGN9dH2gKuzMWTAqBySuGmRyJDpVjmsuRh5dRuYg7MqgMG",
  "key18": "365DV6D7TTvJXnbjEPRrpAAiJYSgj157yfNv3SXvuym2jrf7y9FujHejsatKD8amia1dFHAq3daCPHeLuC9RUBTJ",
  "key19": "2peJwvtkH8o3korqZowoJ6PCngn7eFrEe9oiENQ2Jd7qxKJEfrjgQ9nFPhVj2jv7zXm18yKwjakga3iFXdDYSGvR",
  "key20": "2xK1ArGQjuzrCx8Asz39z5Exz1NKQqXJcjJBr5zCBQNcEwVT75yW1eGVVMofBp8kXySfR8hWxcZG6C5iMELXt5Zd",
  "key21": "3jsNh5xzwrrFjmQsSxLKCN5WAqe9sn6zpFeixZyTtxZVgJD8tD4xSVUxVkNU4pEm7r5xHnvNqWVMrzehLNhpjy9e",
  "key22": "3vELNFyCfZGQ7vSYvzTthc4xPYt6xgjUcRhJg9VmxurYcvricrepzBvXqm4d2trAQoE617p9dSPr2BzPB9pU4HGT",
  "key23": "N6ja9kf3Q4uxjiRCBpuNRvwq4NP8GoUTHYs3mrZvjgT6TfsF3adUFfDTBqXjPP6XneJQQcWUW4DHK6WoHLxt64M",
  "key24": "3bHYWUdqD1q7EbFuf5W6kmpcgvSNMaW9thzDaDaQCUDxjjeiUy4EESrDK2kLmN6T2gEkvqPZRnun7GKWPx5vVi5B",
  "key25": "zi3RFAfaGir3udYJKuoyX8imC8pxph4SgSaNVDasAMxRmMXLDPaX5piy9WtVMGdUEdZiUMLazHwTujbiAJQuoN9",
  "key26": "3iBsabQSWv1hqbQjL6z6zr4X17k13P5iAwXZLnNRvnmDxhFuK9Jh3DprDR9e8dJiyxyHjNZrb35KfvhxK8Lqhkk3",
  "key27": "3bHNvuW5W5hxAPrF9UvEDwYQHef6x42Xqau4QTgbEqFgXeM1Nc8FxLRBeea8AJfgsZdGGfQdmtNvLz5jy68QMaYb",
  "key28": "5z4LeA9WsLxD5pzjCSrB8zPz2sDiPQBCkhK8ws343AGrXqAZf4NLtNtncJtF5Fm1sm7heerhreTniu4Yv9E9CnD7",
  "key29": "8EzXpeMfEZ8iqD55JTkepPYhLSmg2RV5XKCsyj8JF9Z4PijzntEULN3hshPuForvHARxFTuYNS8oCW5MatmBDLP",
  "key30": "ckYwWpNicK1f63yPfhEvhStyKn4yoP1FwVP1FvyW6iFdkc1TDf9TPetmfAY2yczdPpAC24cn1TZUTwzr1P2feFt"
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

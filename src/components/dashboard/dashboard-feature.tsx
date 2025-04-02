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
    "56GBL3qzkYGUrMYfhDLy9VG8uggorYfUvZqMhoSM4Ex1vJMD3K3DWfxsNDG4GRwN6rDtATYBoUiuQvmT2YHhVvp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tpeMFZrfCiXpRtAH6ZgSWPogDiL2RiDxak2ziBtkpzTLpCCtVJLTwnazyJxYw6QvHwqGUChUommyCzFdoRnUy3s",
  "key1": "3va8X2wMfEhdUdTBpTMiejDvohnJT3J8wsFCSu4WU8mVm2WY42nhPFjew46Ad6EvC5y8ZWxNmaZy9iMtT1X7DfMp",
  "key2": "2wiHZ4gpkbh1XP8rV3zmvRC424C8U4NzPXhtDdEhRUd4cfFzPADBCKF2QJCyKSZrhnEDJr7uPmAzq9fCYuMedHxE",
  "key3": "47ZwEmsX7uPTg1kDCAuxz656G2d4FNwZVA3VgB3NXwkchVMErcDjsfuWnuNBAprtRgvNW1fBqXFiiQwhtEYFTQvE",
  "key4": "3vBgLAHLTGjHdLxhL6PbDgKtxGcaUKaQY4WEWdzWss5kjAqPY5ETFtGPjCVK3eJpYJJXRicqrJVpZPM2M8nBA1G",
  "key5": "5CarJeh5yLgKiWsC7Wimia6Nqfsj6gGCAi4WGjAag8ESSiqaXuTGLQEzBJE6KRD6qocqLFmJ4SwqP9MC9RwWsUwV",
  "key6": "3fZhfGvcRyTgo9uff6obvq8ioXPSBzjaFbXu4PVp6u1R3MaViWcZJ5QpbCpNNjXTGsbnK8gmL233nUz9GLVb5h9S",
  "key7": "KLB2ciXC5Ub8z7f2G2fuJyzdB6iyVJ4KVUjmpyukX2y8WWxrAmGqaT8wTQmGLsW19iSh21CVbbAu6Q9QxxW63p6",
  "key8": "33xMcF1QfAqCbG7gW5ukrW18sy6PXJD5J7MkEbe1rWCLfdnzJy52LbGYzRodkD6gR83EwqKkYQMc3MQdE8ThvXcc",
  "key9": "27r2odJ38CYsUcQNip6EupnaU69kC8EHy5utwuh5qoXqHCU8EyDFzrrujcNNhSjzBFk9hQVyDkvDi21Qq2FJAJ4U",
  "key10": "5ePihFq3qPftL3x3gPh8GSccVvb5RzzyA9vrCFRdENjSXffo8ArhivuXzjJ4RcrhguHeZBaHq1QBpAK9g7QUtU73",
  "key11": "2oYDjsmDTfNuH2gzSjHaAa8HhumcXzDGrzn7fwBhRZ5yxrJp9djXykpPAWi3FqFvRhzRKTuqFHidSNmCSUGcVJcH",
  "key12": "515DGkVp42LzvNMyXEG5SmrnxgzFKis3zqzh7BMtmLoqbtUASPNq7xqJ8VPEWGGLg1Sbxx9LHZGQ2Gquwa5YJPka",
  "key13": "4F1oCXfjZLGPpJ3p6T4N9hto62DryiVRrVj52mj8pZiuMR2TTJoujgGEehLU1zcdGGHow655wt1SE9UVFzLp11yy",
  "key14": "2Sc5hxQRM2w52owHAc31DG4PjCkxhwJ2KDByMaLQ7xx621fXXWX9Nh4NcyiEFtRyhPb7CtQfMUXRAcuDRRAYCvdr",
  "key15": "4xNVkppyt7hSZyfUEMuAgYf7qWXZfHDSnyMrbWthE9bPwfvaG97EiDNBpkhwhvpDWo8C6sWNXh4EdXapW7RhxnKb",
  "key16": "28DW1i3pwn37xNnU6Qoi4NmR75eDeR1jPin2KPGuczvr587GvM5uQ6JSfh1V9VKsseNLYz2ZAkri3j3dA1D8R9UU",
  "key17": "3HFudcMCYKXDFnLnEh3C8heGbwFM3RJiYeXVUbwjwaGj5WSyqcvWePBk4Wt6u5G4YiLmFcZSonZBcXfE7P1KgJ5t",
  "key18": "5dDMU7UuUKToPhoJqePTC8CzBUiisUCQVFaYDnGqwKcNiSbcNJRfszYJFN2DDFoLNPa1jaWsyR9acGy9XtHBF2dL",
  "key19": "34vpnEbbCjtKLicBEv8ptYwedkd4XzYf9YjKZXKBXqXyTyo5iCFc7wKV3E4kQjy9VVvACTj9zWGgQSo2tnTUVGd2",
  "key20": "3friR4bP7xQE2RtkHU8DtmTMqkeFUty77LJN52LDFZBV5Tn7V3oiKmkoVkmKKfcUBJeTc99GcfixLPK8txbQV39u",
  "key21": "3QkBUeei8u3aaq3YZXoRcMxXqBMS4PzM9eY1RzXrFSiFe5wR1anwX3BWHSBrrTTprswW2apwSHryzBRzHcWjwQ86",
  "key22": "3rD98VWrgHcRGvmT7XZoxNZNcEtPofioxbK6oc8a4UPGPbLjfjup5yCunRXbHuGwzZan7EvFsgyYxVjC8PAmwHYv",
  "key23": "3C3YMBbDdqEd45Wp6N2iN2sBD8UvTLppmxwGKy46E4oyuUsP7v7wFkfrADFdzikcaAPMYXQYV3PggmgsxiBaoKPo",
  "key24": "4MsZYdr9Zm6Ht1U4zN27gHRhgKvEvcfbNW5FH3GbiCzkXnGscFitaKfi6KyNqWWYh653LJdsvurcXyvzBXSidYfV",
  "key25": "3hpRCQ5QaXK5SwTdeFfow4Jchf2GAa1Py722UbN5appdSeB6hXK9H8efscdBt1sNAn9A1bcCenZSAYhLYfnAxEHg",
  "key26": "28ibdMcskEoesQZ9dJAxwMEXdvNSj6qLmjg4SJrVb6wZkic5rWGiSK8baDDGZZeuwrsKDPmdMkwEChXTXVatzwxx",
  "key27": "3yUmpzz6BroQrzd3fyz4brqJARUoZdSR1cjLw6BoMBabtPiq1FXpC8qfZK4Q3TZA1tWRMaTX1d8zfjwXbrLGJcy5",
  "key28": "4MbymUqc2ahZ244i47b21ZfZvV5dKmWbhHpbDHayJLn1wJUiTcW7DWCFt6LP1mGhrGZSqmFcVaGEXLxB5E2TM2SD",
  "key29": "5o6TRUz2XNzTXGwM5ZPJ6wh8Bw9RQUWm8vtougM8DjNbSSJofHBLKPU1irvUJ7M465wwiKewSBrGe41659X34uZ9",
  "key30": "3Dagqaz7TK2g1X37MDhyEb1JG6FXcVRNoJhND1KqvdsH4xWd9enbS2L5GuwNf6h4c1zyGmwU34SpFi4YSBzoyM6k",
  "key31": "3Gm9NA7s2upCAbakf2jk4TkWMa8bjAHSEkk1kMuvuuY7m7pYUBdwZFp4uXXfCqt9JFFnMcW6zM5ynmDh7cD2rbcz",
  "key32": "3dpoddLqgWSjfJxGs2UYFTsEteQ9D591V9jNKHA4otBCaC2EpFrS7JUh4XJsZs6ZnzaRcj9FFuEDRwGvEXYiot4R",
  "key33": "4kKXnUm75XMWxLYkSYzRrBpZhgs25c17SZvR2KFRdM4cQRVtAGgPCL5U5YCi1Jyg9mx3Ye134pFiVVsRaxswFeZf",
  "key34": "3zLaAeG2NSro2YaYFyGbuSrp8KwUr2nhVTLmJJqJ43gLoXXDQwewkktfAqahiD7kyFVXvnUFXbvmPeySn1Apm8fS",
  "key35": "4W7gCR7ybx7HMCZUBLQj39n4ZSkhGPSN9LWvksyzm1EwJ3amaSpSZ6WHfRBEeWbYL2zUNxnmcyJG1gwZiGGjYPZd"
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

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
    "5FsXD7rkHsLtaXJepRxCCTdVVQoBFixWrUtojTsmxWrXHsRysgNB9aexc9dGMJx9qN166QRGpoq7Nm3Jxd9Lpzko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ATqd7wxJrF2h7wBMYUv32uBjycVw5SxdeFKh1nRj96XUXQZj3RiTtrzaHNcnbAx5QgbwcnoRSkTfRgU1BC1vczX",
  "key1": "221zbY9ExLLQcPzz65QEaApPWpgWGPtDTNyC4WojYxm1oCvzexkNQ5Z8FSZLatjf2Rd2AGw14WALw35Z616oienF",
  "key2": "4Jwq7fXdDptwPtoFzGvm3Hnuhqro5H7a4kVKBfwBfWq1uDb5jQbzaAT6dVjhro9kmopzS3axvGFbu3pDrwcP54zK",
  "key3": "VyG8GGTLN4wEsbqCYnjWEN9rpWFEV1L5kXKJ8nvT3H5qcMMiN6XwwDHaum4cFGhRB67P9GUzfxeT7rJ3NqTJYCw",
  "key4": "4bEXVx6EgmsRgwxfDRDX8F3L6NUDHxtwPbPc8KnTx99vo437vKC7xzDU57bpTekyAYBUpcNVbT6MDs4bFiQxhGco",
  "key5": "44G9nYxymiNm9pHFWktYDRaCm9UssneDUXy7YuajvngwzmZ2Rs7At8RVPZDKMSYe1Sb9fNSeVK3ccw9sCYr4GwMZ",
  "key6": "3pSJedH6sdN8bFDk1fTMfnLYLwcBjeiLKZ1euA5dUaSGzrRs2g9ZtbsYXhMYvV6Beq66mp75k8TY3fJhkX9G2kkU",
  "key7": "61GQSBY1RwVCkmsfUdUP77sKpfEYihLvxGqi6t4K3kA2FHyP3cqhLp2rm7ds7vtGYWVtzALpv6gKaCxbYDLk3ckL",
  "key8": "2P8XVdfFtXvBaAfSeTsneR4kszaPRJUZgE8zfjjXeRbtwAiBHMaMx4AtDtUQ3CGFg3Jm4NteX5uB1nfWauGGC4FU",
  "key9": "62ZTk5Ra8Cd1WHx6x3V2AE72f7Fg1m5SM5cWbvEDPiFqj7sx4bhzsJoPrSYdkBehgzYYvKJU33RgGUgXWyCXMSeQ",
  "key10": "3TrVRek6o3XKBDRYx4SsQ5R12h78eCC3j2fk1an8mzwxYMzWCVBJXEwir2o2AdzCpCSGKuX5NDy4a2JPqUTe7uvH",
  "key11": "2aVxcP6BXG3bS4sb7SUKBtFk3WdYAxNMyUHEaHYNwYbbox4hbXWmfVCHnvu1851Wci1whh4GQfYDVo5rnUfdhr2u",
  "key12": "2UmbTY5gC1QNG4FUUXMHEky673hDPFuf7wt9vfaihZeBzAFLxRZLS5PsASuC4orfMuuazHkGtx8h3mQfmNqcRCfe",
  "key13": "3vtKM3BwVwHE3ndkafdFwxfqhphMBPxDGq7eEy4CbZiJXNokDMaMmHvez2okNqYhxTUziHtjHKPgYeryAwPRxSvi",
  "key14": "5QcPzRBmSVzqCx5mw2pZHwwVJPUBEUeYgDaTHTLuYmNvd48ZTLiUBUiimcwHHaJLgXdyb6RC6ZtCesmDgdwiu9HJ",
  "key15": "4zuY5qNDD81par1qcpWtghPc2Ec924N3GpVNyhHt85jA4VzfLFvmUfsRXhuFDS9x61zwZHQNbstpH5mtgtvAkWk3",
  "key16": "5xTCbqWHZeSkk1EHnxfmnnKocoZR9JZF8NqQr7PAWdPz3s3LDJSn4UPmH7pM8gJdfpbxLNjBwX6YM1c7n723xGCk",
  "key17": "3SivL8Ldf9a2rAZFLMrG3SUCfwA1g9pPFN6ubjvds8H9GhUijtwHtS2Qgs6DLRVh8iRanbpAedwtcMmuA4UvL2QQ",
  "key18": "2psYPdRE4Ksc8AQee8EXLHCepNeQhERUWukjg8FjTPHvYqjKdSh6JCommY5Jvu4sLDwdgn5fCwCZfkbw7YMTeH1g",
  "key19": "2hKutm41u2yDcb5V3AWERj7PqrVvZcMgSskUbJzE9rCQgkNMAVKGoCaan3PUYCmmKVnNQtJmoLDfkrzzmTB8svJV",
  "key20": "3XThpqg9ZtJomUNrbkKBoJmBFZnNkAHziMmTQgYXsEwxf62AdSG2eLXoN6kcVF7bGjijuZNaDvuy7qLanHhUjhrp",
  "key21": "267DfshkB11oYvzofsJEggmmad23Mx6CGeGiqVaGJwd6to5VbrSt1BBXQryNryM6nMuvK6P2e6eGQ75mYv3sJX7x",
  "key22": "27t5af33yci8GvwBEbfVyGFozhXvmghXFkE5KuwQjdKgUfwf2CasDQE9igRtAGNf7qf4m4sATC1g1syaY7fCKV1W",
  "key23": "3Ahhj4ZXu7XTiu6XE4U7RemuEfHFUZvhB29K7n9FXozEBu1EvwxRTKwS7D9BWCKFok8qj4WYpeq53U4wjpCoUJ7s",
  "key24": "4bzsSp1bD1gMomRgBJCLdXUf9gwG3763BVuKzcQyVujiSB6NWKJgASaPwWqmfDkWLUkKQQqzueZMhkfeSQ2LUKPy",
  "key25": "RMKzoBGGc7uWj9zkq7Gc5zVnQo5U9UvQ5XE8UM6ryJv8HYK3LpsxbPvkACSQEo2zbpPjc5K4qDdCn5iUrX5Ge56",
  "key26": "5Rs8UVxCtvmi6RcW2iyBbWmdvvqgk2kg4S4WtSkrLZSBNFdreUU1StMUTDQFgHoLXyQDDt9JtLZLBwgtcd75RHXf",
  "key27": "24wQgtrxifh2vtY3A8zmUknaDS2kYJUDowixWZG8KoxSQ2gKnwvoN4P5ztF7RER39Fw9h8DDVGWeVfU4K81GDuzp",
  "key28": "4WifySnDCnM4foQR7TtuaJ3gzQ9LxVj3BziQ7tnmB8YC8yBJZXLuXqRNbNSf9spChK8CebN2yyNAShXUnTdTRVX",
  "key29": "2tKU8mk2gFACCP6xjut524abd1Ryd6ctJVZmmdZcwzqPX1ggMUNbuYX3bJkt8fPdeNPW3b1CsqmK1GoFyHHiazR",
  "key30": "qefjeqDeTWbvzwTwZeon2r9w2AcykJVdNiFdPbqbGdbenbcqya6qedakgnhUd6QrYun7G3vQhi5Mpy3CciUEyg5",
  "key31": "QTKjeZC3FxfeozKo5Rf9MtEnGbwFcKdPqMXrKHzZDUjrxZyUt2PXVtGtn67TUNq4ypNF92tpFLiKxMmqBR4FNQ5",
  "key32": "2Dh9JePBfXHcGh2NoNqFpd8TmGe6f1RDyopFa4A9BbKLnBaU1oFDMMvRtwTEwMx7dXCEsT9z3Zcm8RSbZnTaANbP",
  "key33": "4LwE9YXiUE8baw1PASTfa27L8fTyy4EsTc57CYzyLz2zgAv1BRcvuLwxwv68bWmcsEtgANjUFiS8yS6GAwiEKZZb",
  "key34": "5AC2pJpwvz7mmYMWdX5DwVQHSBJPuQmsNKynkDxMan5tJxNVG49swiyGaMWoX2Hc5hsZ6rFjggJYV1oRyWERb95G",
  "key35": "3Xt1tXDPvWRM4tdpUpvrHy96tYBaFahkAZ6ok2gD8Ru2bUkU8n6xZbep5JqHhzMSSZEjpPaJF1jHcSAKUPuoTV3K",
  "key36": "5GpB8cG66dRPzt6T6qGKDstEGvPLD9mujg1S8txnGAjYngdG1QMtxqs2owFJvCnY18V6A2BgyLD6UEzuv5eH5Nmn",
  "key37": "2JYxEa7RMbi9dx11uak7yC1r9KqWcK3ByyFYaKBULsoKpa2Bs5AkTxjyDFFwPMXmigXyUusoMUyKfiJzeMdPfF3L"
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

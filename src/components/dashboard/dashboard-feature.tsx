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
    "GthNSY9Kka54stGMDK3SptWTipqGh3abqFRZX9Cz8zf8drmfr79ju2dchwvKWQZDmbF2pTHZKCkehWLL49Znmix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYMy595PHhYTCNNwPzv9GeeBMREBjnuAN3mD4QeH4jeXm2FsDvp7Qi4xAY1PFLqe7QDZ59CBueUUfDzuxDgq1md",
  "key1": "5XKJgymjQA3D4AY8Sd8aSqhPFMB5YKKxLjgewiY28HwPXH7BzzYAzt82T5REV9NJPK4HNamAmpxaiWbxuknBUGqB",
  "key2": "5PC9dbrXkmjg1JuHZuDgZvEmi52ungjpCG4ptSCVhB9Acpdh7pNSMyaYdsszVj24HcNyp5EJzvDdpBjFUR99Zp8n",
  "key3": "5fhUoeGUgiqnhicH5Tq7DGsrcXBX7q8rcuYw85bPP9667LKsS9QNMuwhapwZvKmhTeyM2kjsdBN6o31WUsz1BVaH",
  "key4": "4BsSUf2YwwBWTogsrysVhKKgiMDA347HsESHGdbajPifJVCaPCXjCSbSnfmsRUrkA8bU7KpF7x6FRScDEjKRsKDB",
  "key5": "5GCRLB9LW7NkY49JYFfWy5USr3LdXAa3NzPuer8v9fd8RrsxK1UZBsJaiHHtm5hpvvDxeEV6mUxF96YQoGPcmrEu",
  "key6": "1xYLdPbBLuHNUGfGfbThDukU6JuXDEDZ6wdsGqp1bkNmrnb39rqtSYR5sdNnYngLxPGNqfqiTX76MUzBRH23dTx",
  "key7": "3FrmRVih1dvcKt5d7knCFnhTUeR1eufAUeNqefNyNq96uYcYCBQHBdd6dHHgCqEfd5b4pMzAt3jXrmcpRZ5mrV36",
  "key8": "3Y7RK1AyXuSAFSoYCo48K4gvXniVf6dSad9cNiq1aK4qU7Yk7UWqWJNntjASnqqmhPDYd9j3ynXDCXAMZSB9Bejo",
  "key9": "3Y3so1BRPbTRakd8tUS9GJxpnMHdVaYP6uGEwyzdSUM6px4nEtggf7x9cfNKCpKqvuDY1H5rG6xar6XBU6fP5h2W",
  "key10": "4b86KH75QoZKceEFoZBQsR4YxTSHGXotaQXzMzPszDS3mbSkofWKrzBPTTvcani2tnu7M89Ts5PhpB9VEi5TcKyS",
  "key11": "3NwnSbV3yMGF2mKTGvbgk1vm1jB8zUuAoGaygDma9D5YjqxNfYkFKdE884V5vkk6Uc8C2QngzuhKgY6aVFKmx38U",
  "key12": "5Xummm1ZF1TadBLpNKDZPVmRgCdpKRaKknTtgTC639d6beQmw1sCQxVj7gU3temh7NAju16gFMZEw2PLEt4nfrqK",
  "key13": "4eveyZBULd3fVtTKXKqfrB8boCxpKLTQvMGqjYjBeLEC68rt8MrR3KbyF4i9x1KAZdxEZc4D1Gki8hKhhmPWNtWT",
  "key14": "2hscXBTqnuJAgQGeHwFf33hp3FP4FPvNRVsVHWkxvrnCwYEcGTGMjzSgohWH6aY55S3cMjFHgxtSFJEHECdskY9o",
  "key15": "4G672GLR3Bk5B3irGWZYnaN9aiUJhXWSpntJqn3NanZ6noHV4yb8tCeQRU4sVt44WDMNU5u5QEwvC1yeF2syxTBm",
  "key16": "av9PgHh4pNg9MBKUfpY9gnt91VmTur3shJLEWuMCmD8xfyvqLxyBBk9vjhzjwwLusYkPTtUCo1EFiTARMwQ4ERq",
  "key17": "367X6g3kP7kqKdSRDExcQhJ5a1z19cytqy7yEFJHbHJhBDgKXxywfRXULDgV8AdpoFfNKytMSGpK5jFxJpKe2yW8",
  "key18": "38F1N2RMVuVMTD1H8EsvERzUV6qiGsHZpEgcnjRpRzoXEXKchNyZTSa62814JoCogh4Nz4Z1BGGw7x6bFtrCcpHh",
  "key19": "26GwWh5PQfyJrJGd3MTJL2QnbifCSbU3JjETJr7M7n6Y33HdSYgfYLGjhgY8CLaAak37fBtC8YPLdTEST2vFcTYr",
  "key20": "4QToKeQ2pQRwgsyWBCMUcSF8kVDH1M3iRYXN5A18CLF2NWSqCv5vCY9PqTLJetioBxiK9xVDwH4Y7wiEe5zX3udf",
  "key21": "5rwbyo8Kt2jLrWY5ghp8BjziD2vhouK3UWiv3cL12yHpDTq6C6pXRbqLvmXGoVdm3ZZczkhQ6GbWVLQKtc3sbPK7",
  "key22": "38yMpXi12JprwoHVahCk6XYusxgLUHdifPUXVBH21LJWUN4VbLdLw7KTtZQwRLF2P6cuzy8gwxBtN3r444uVndnN",
  "key23": "2KmBR9un17qZiaG4GYgrMqunJuW4dWhusC22mM8cGntZqYxJ25dHcEw51aDYJZTBcUYzc28dFhJrXfz1iyRWSD7e",
  "key24": "52S4GkR2Tc2HvBALeVoQHAE2SefzX8vXRmWMEtpm235Yn7tddCMaGYte9Y74BaRoaqAmAbpHyHbaCHMeS4QxcwTj",
  "key25": "23M9kVFhqyDsrvmaXNfpoKwvytpBdpru1joESH3edKV1NB51FsvbF16SG1MumG6bh5dG95996b65GLHh1g2CHDf1",
  "key26": "536sWwQfpUwY3PrZVdF22LhtFHTcMWLQw7VE5vGvjH9DB1XHw9oJTtMkhvnQNYSsPHbzGTpBZyJT5HkJenhNfmEG",
  "key27": "P2TTG465ctfuZGQ2cntxJ8z4uwMVhZGHXAfpst6XkkTz8j6SyxioGNNirb8QBYH2hAxQ6QYWG3txrAK9ZSnEhaS",
  "key28": "2G1LTzM9jokrptW3LtzNbAh89ZvaTkmD3izAmPRScQgr4LPYidoAwZkatGojkTYsLmstdCM4XQvkUerhhBTPmQbs",
  "key29": "udwSRkE7niWzjf8eZC9oz1WzArV2ESvBthG43C5ciwJJjDSWAQU2rCWvx7vbxD9b8nWWfvXuAsjMNkcer6mZgnh",
  "key30": "D3ne4ZLJHEBQeq68n2qC9QsVpxibt4ivZJbJAWS3Ds9XpcfsRmj4R1vXeRapZFDAzfPK4ykFhcW2XQy3a73k4mP",
  "key31": "5P44uzzaMFPKjBaz7dkqy6u5BBhZrLJRy19cJJUAQ9jDdkvJt8RfN83HqWQN7zG1za6BhZnTV3HuoWEe6cSHaFLY",
  "key32": "35GNL4KqHND7oNPD9YxdgikKPtarWKo9DLRyqjZm6bnRWVNR7P47pefHt3ga4AhWQw8xwrFhuhwEZkr2kiVby9L2",
  "key33": "5h8EQjgae1fJMLZ4MvLxBU8Zf8pXvvW2EBbWUNYXgL7779ZMDLtY7HBDT6ynJtNAr5Tyw1SmF1PX2aFaz9TYz9nS",
  "key34": "4KCee6QC2tpZ5ufKwqjPcoyt2yywPiub23GKGv47u2v76RE5SHeNdBwBBRVx1W9zAMBHX2fgTncBmwfgYCJVDEBU",
  "key35": "2RckUVhsXTiqGmRQNoqgf8Am3bkNYw4x9rpY4UzUG5s9YowfTs5UdeRbofFUjhcpudfTegVUwhM8DqmeBU94yzZa",
  "key36": "2N8EJPaZBdfjVZFKB9g1Cwwe6a4fX9wES8oMb9s3BoXY6Lq6wav6xtvsNcMA2vLH1xH2rrSUNytGePHeLddAxRFT",
  "key37": "3HqBu9zktWKyPu4rFmVxXQ1d1YgFYywaPfijdmxhQnXMyzDxA19k7e1ioYHKjrrLxKZPqnX3xUUx4EHCGFLPLRav",
  "key38": "hbeoau88UzEBNnrGctSvSm2im4qhGmD6qxhvu7oamHmpP27vFU7bNAQchscHjbe7LFGxR23KAi3WZQ9HBkkCtmK",
  "key39": "2uY9NzFbBDJATL8ydFo6dTa9nmyvddozzEHKJkyUErVx71J3EAVkCNAh3PmXWQjNZzTHNxsQxjEj5BHXgPmveeNA",
  "key40": "3cnrnkRCPeMWSYJ7FuqaPQ1KgMuc97ujkC4H2Ap1QqMGE3V4F95J5pYan3uxmndvpS4pBNr1NySQBHX2Gq6MXiRp",
  "key41": "2wQEKNADz7GQD94PHXmWswUcJg35YfLBuTz2D5rt1Uf6oPZKPdoBLKJGJLeiURCEzK3MTVpDEX21RiwUq9Cmorzq",
  "key42": "3e1SMPyeojVauzsND4N89qyknkDgieSXV2RJbXBmLmzavZpLSG4Q8S7Nc4vGzNv3mX8cHttWF16AdX57crfnYiU4",
  "key43": "pPpbfFNHLppbMHn6sNqhgis2iRBnTGJsB4zmJ7HoTdX45zS6YdnDGHrSpucJ8GGFcnnbcHK3PHjmSJgsa7ixstS",
  "key44": "3p3ctjB4qqbQRG4YAdNHBrCM9B1W5NnsQksXzUy4SSuDD6DVbsgg1zZuooZ8JKi1wecSipa7psLT2XW2rrMMy2Yv",
  "key45": "5wD8jboqRZtX9FB7Z4mKGB948Tg1H5hwZAbHBsVFT3kWgj6ETpn1DxZz2vcmYJWAuKyWbtBwopdUnmh11buRkKfs"
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

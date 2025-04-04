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
    "2ZbNc5FUtMXzoCAwrPGncs4P7BJR8vM9U6Vfz9hc8oWjjtS7vGtt1pArY22rxXTkzyZudK2AV44TxDyf3QRBSQbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jdBhy4JBYRjdzsN4LZLVgrBkgRgMkdUVnXX1XLm8rMQ53jKcdnVoJkHKncNYjpvoEttaa4Wb5mxc4pibmMtug1m",
  "key1": "5eBXNNBYDy9nPZ346XW47d6nrBAz9DzevFfP6FEXUDnoY2RpKccxzZDSAdXNgesj95EhhzLhC4tMBvXYXxnzsxBn",
  "key2": "2d1sDQBfBGmWiwbV9FZSgQqvMRruGxb1Qc6gvDDcUQDQAvsFR1NDPxCnxZchvXtVzoZbb6NbSqazjqG51jd6TVpp",
  "key3": "34WuaHST9J3f88Amjuv5Y5h9syTn5yw4sf2FQBzy4WjEmCDqhLghfd71abV5pUbBSikB1GGADMv8c5aD5A7GU3nw",
  "key4": "Jv7PtRiYFje4gc94zEo8unbCQbnz1Mj6yFuCGU6nrmrTaRCRfg7hyYhDdfWGx9MbvZUzJXk7JeeonLK1GG6Xqta",
  "key5": "45aFFQuBFbEhQEgp3Q7LuDZAECNgQc3kaT77oyJYrwSXrWbHcyg6GGNvZavNSRERGDXRRJAxSDmL4PLNhAywGbu6",
  "key6": "2Amt912KQGBB4HBvAQ31hWEEZyCkyyvAWaX6TVLK9wx7A3XeVNga7GVeMn3jhJJk5vkTLByUjJ7dfuPjbsWm9g9C",
  "key7": "3YYELdfVgJTDTdEvY5mw8TwFpHyQq3cCuAAk81SmB38HZdJNpB2JPucUadNuvjAPypBcrzXpxHfVFo3WrgoPN4RT",
  "key8": "2Xi7Czd6Z8CppygLmVuaqrxkBeSpS2sqpCtEuAsGcVcrUUm6x3Gx5zqxqScfhCBAoyEMSWJikj4ixKcPjMYFs7d1",
  "key9": "4aW37tU8UDFhpqzgVQ6BYGsnNH7zYF9Qjn9opMMxrARCX9wriGyyncthn5j9C8WLheinLahA9gyijyhweh3SnRPj",
  "key10": "jSxbPN3pYmZe2kxE85c5Pxdgm2Sjia9vkq8fPAofFgdx3vWzbDEcdezRjiBvJ7thfeEdcT9X22h8yij1P6CNJvc",
  "key11": "4wSuFBF3CCN1xbdftAX9BoRZYiF8Dpv8oyHUzBKex4xZUN5PGbjSsVW4fyLG64j8vp1QP5mHLZ2gYNLeFrCwDQm2",
  "key12": "5CyXZUckqCrwX6XpLceB8gn6CRXykBpYm93JG41gQebNunEMoi6uE5j3JtwF24bLHjyYx1hQAZPsn7zFP7euQToD",
  "key13": "5y3wRsjYya8XoJ8tkXGFd5W9CTnw5ZHRFv5qx3urapy8CE9TQE6QUerwwepQqzqfWvP4SGJbWPKxaGK9swb1AJkN",
  "key14": "2Q1v66oeb1ZjXtiab3U3qaXh6AiJvzHPz3uvm2mcpoPZd7TyC1HsBJ9yDH6shKhrXSewyNwnGcQisroRJKLdZyQM",
  "key15": "GYFsmPp1dbrrLs9jbnAwPvoiVCwRBwQ6GuLDra9ZwfTDPxSMph4FA6jffkxt58AYQsXDC9bztqfAVRh7onq4VDG",
  "key16": "4k9gFjaDdHsrqcB6QFck7Ani66FLsus9dc6f39YuyTcfTUhTNDvJSSqBA5iQUQQwb51XskQ4WrmxwZChmN9qyrcD",
  "key17": "2jQGwVuxVtabPhMBHm6aV2kY2YKuHob9DeXqW2EMfmLjpqBqFwshoE8G2RQoo2tFfBRTtD16hVEL6WabnSNjoB4M",
  "key18": "5Yg2DNv6QLtzUk61Qi1ihtPWpxLyCQmPeX5ijs46n8KzCeYAUJsAK8s2BJ9wrCqEgkKahFaUkEsMfFejtEeAA9dr",
  "key19": "5HqZw86dmNzWD9bApiu55RKYuq8LHKWPAcJSr1n2hK681nmkAAsTwZuLWb8oZ4nnvGLveGeHRwceRKk75hrmH71c",
  "key20": "4DTJoHYYPNVAqCUaazFMvf6YMUmJYALi3yvWtTTi4qtuJfCcoZZFZ5BbkdS7Zaid8RLfrAQMsaMyt4AQjYYpoxMm",
  "key21": "41Vc1FXSrDyCB4P85GShdHQ3a5v5khR8GJNRwHXxSmQUqinK4U6HLosoNyX3sGbwsASG4z9BNPar5MU9sGc6hAr9",
  "key22": "4STrEN5U37xNQESCTvfwKx8ZD9YWqzKXe59BDgtcGhYZ8eoFx755kZvjHR2nxMcwgTitR8ToBzuMoaTPHw7xXCKF",
  "key23": "3WEZ9WzXdWwwjY95rKVYym5u2Vx1XeYiLcAXMvYCkfEovDNEroyoeeod2xuiRQzmMGpu5uLwNqdu66N44ZD3yhmi",
  "key24": "49GgxhADWXGXD4uR8Hr2uQAEJTf44ASBd5mvUKXBDhiwXK16SBvFRVDEsFwmy1QUCEKijkkX9zu1eBKNVfkKaknr",
  "key25": "285LnJTPqqhfPc6az1hSjWpPL3kUpqsc7UxEP2AFDgmAQpqkg17jFeLt3dbsr7qjgDnur5NHPDLGv4NvLPwJg1vp",
  "key26": "2mQUTRSuRduSci7C9tyeUVe2bHnK957WtKs3rB5eahYapXednwmZEfuUfx5UksviATfdpM7KfUbeCxmwNjtA9gcF",
  "key27": "3jvAEqgybMcvWsX7khBxELG28bE9VyHzLvJiy27WJ4i7MF2fUL7jNFkLoBuMv748TYNYKCYsuMuvP5puD8XVpHyP",
  "key28": "Lg5AjVXPfREjVMx3NfSNXwqDdKeyG6ryVsazqNKq9xKZBMUGjj7H4y3ibkPxW35XxwEMHK4gLSZ47NfFiTcsAYj",
  "key29": "5Skvo1FvWpNAM5UxhUDa47jnEctqhYHQcEmethNVjRMUuJqy3d9NiwD3ykCs4idxNdAbXsXSDuj8mEFuCaGKzeLj",
  "key30": "hqGjY8HaS3t6V3EnKkTPBHRWgVJY8fcJRz4SbB8MBY8iejay6WdhcgfTTcvfpowEf17hSf9ddq2c21E8PGpDKTw",
  "key31": "5KYHJs3g3XDs1bEe5SVA9SQGwS8WaChzNr3Wz1E9tG6owMWNEoYyY2ZtVewnMAAniLxQnxZ9DPWXpjrTDUArjQg9",
  "key32": "xbsV91jDM9bMdrxSW997rxKxGE3FQuJzh2eTXaPrHcE5AbHENaMF26BFG3TXyfAQu18ZxoRc7MoHgRz3q84tNh2",
  "key33": "44xYgyDP19sRCnH9oFR5FKYHJvKUeJQBTzWN9gUXNGKFtg1fdWs5ymC5MxBezvK9nCrmgPS48SFvftcnb74dQkaF",
  "key34": "XTVWtrFtTuwq52KP9ayBmw3QZXAZgE1GmPi6zaJ5L2VZCXubNGJBiJgKmX81hydb6BbEhhRN9tKDmCchPRutYz7",
  "key35": "2VH9p3RJY7rnT2BTtzUghk5Lksc5Pr5soFAnXVwvwxdkUC5gMiMoxBoCNjDPobJF3nk5MzCMnc9m45xpxKP3m8fC",
  "key36": "3uZug5Dr71hD7MpZdsk9SxVLfchmj57iDmDtKcDSt28VNGr5diAK6HDqXpybAhEyPmt2UXwwQqJfZHQ1g6TsRdNR",
  "key37": "fVLByC9fkYPfs6s9xXPvDGq3ua57T7KNDRp9t3UT3ekC1sx3dodwd2MLygkaas5CaZEUNn5sBKaTx4iYpEDR5Gj",
  "key38": "5Et3Xn7kfDa1VNFwpBmrfKaMCf87gRymfKd6BEAdSMbMCiCQ7avNxGGNzAiKMiZfu7UjRpczyxfPZ1GwbJQusgoi",
  "key39": "DVZTWxShCWn98Gu5UNKoTb9F1Z28CfGmX7u34Vg2BmTbJD7PK7GZX8HSEtTdpYyTKjMUfHPgXEQGnQhKA5Fafmf",
  "key40": "5Uuw8N3ACQAgmARim16K8kxMsDYLTWSQN5dccVigy2L5NvhCfmBGwtjfcpHPeEeaKNF1rqEBxnQMep4JkBXdcL6A",
  "key41": "4rTXK7i4wuQrhU64HFvdqZtzrfPxK9V6MmvqaAerc6hiewH2MYiMKhi7FxtDj2GnapZWuYGb7mu8bVq7kfVepHN1",
  "key42": "3oVCcHtHu3zTXVA4xafZZwrtsNBxuDs7jNcjEhDwEDfvLuQouZnRA9pKjZY3YWYtJCyuowE1BkM6LkG5VY8XYzN3",
  "key43": "612rLfzuD6Q6mEVdFTgGrKVRfT5o5csR26RHkXaEkhwar2sR9wfyurX5paGEgE6sTsE8pmtZZ3e8y4FzEoXCzFwW",
  "key44": "3WhscJq2ruZG5VuTP99vhy4VtwCobt2zBNnXGXn1w2x1LZEEdSqjffRSjF7jgo1WskYEynB2NpRT6LDdvjC3imsY",
  "key45": "7rGWKcz7srrhAXGbT5MxGH7qeGnMLYuZYR54QCJeHUxXYq6owMAnXD7BSVd7o6Jeby4NFe6RWL1uhNbocuQay6f",
  "key46": "3tonW889QjUJQQ15hqW6SPx3h8d4Urxt8q1duN67SArqoAYQ6bvswCCmzaG1j4rPq8HDZUdKXeyrZJWJNBYmUiGm",
  "key47": "51HMvrqbMzoPD3cWof8ZQRk9yq2fhVRARnQ7wBmqFa38Kxts8G6K5r24XsKyFeGPddXUjutp88KfBxRBnJvrcCug",
  "key48": "32XyEFeDVKzTQ1921attbdLS9x33ykC9Gug7FKSWukjhhreXtGUTdjvYm52aecggWQWqTjAvQhTPUFqBNZbz8RsW"
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

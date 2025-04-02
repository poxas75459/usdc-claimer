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
    "52Fg4PSq2YCpLGU5xpn3i5QFKercj4BfgRU1DMLU7vZxR7jDFQDxDRLXekRijCHP2U6uRRBEaipiKd7Y5ZH7PToZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4knT6YEfPpeEpd1PudmS5E4qghv2ZUJHPkaZyzeb1bLSo6iPANNJgvNXJAfs8aLBP6e91FY2b5LxXxWUiyGLeMrr",
  "key1": "R5hkjTA7amuo6k6Lbe5rVuiS9bifCAFfrzkmuthxNHHxiRG6LK3mfVEfq2ADamyYCJvPo9fsMwxpgBwwEBDbMdW",
  "key2": "4ERmVMZxQ4J7skzA4Fq8P8rRQ82f2XgeLPfVbnmvuxfw5tdF9sdPHoy3ZTtk84ksMPdYU8bsnRMRNP3c8q9NToh4",
  "key3": "5G16mmCdaS5uRWsMHAnZyeZc3ZHo1hoZ9KQWThcQ5qzfjzFc77tz8KbkWdAfX4eYFwRkQu63hcEG5F9iNurb2gtk",
  "key4": "21ZsNTxoyBgre1LM73WwdjDhWNrZyrdnfZ3WkRvQ3frtrbAc2qZciGVfvE1SxnXJFoApeFsCJ7B2KMhdjASQFh4w",
  "key5": "3Qd3KEHz8vrVfpC6qDZqfMfUdfR9TJGyhbdTokgcoax5r3YLGEpeDNDge6uA21Lvig29cPXSJ8aBrirEpjTUXd8v",
  "key6": "2pQH3qX6NkSxQFhBp9Db5MVUvgpKuTXcnE3KzG4okYZp8WnRJCN2hZ2wt24tj44zQ9RAYY9MM2cFkhG5S5H1rBGN",
  "key7": "3wx3Wc2ito3R79gYuFJYGJ6uE12aDYwVFYd2DNwbz1qrdQtuNDX1EmYgPSN57qtD9mM8JLLMA4FFDiHShPz382Z1",
  "key8": "5BCrFutX8QGqGG9rrh8RkPFYffDBimvQYz7XyHsq7ZYuebAskF7xFcnKrHtCzcFpfXf7NzwU5ortKFwHnaMCNxuV",
  "key9": "5r2c8RU24iUZKbbgdnBS9W7A9Kro8XjFqHBseXsBfuXu1KRwPUYTRoCsqd4QWh7g9STT5gWywoVtdkteyoHsoJuU",
  "key10": "BiuWzmdhL1UiRuRoTEx281LUnSGGEf7MLTJzpX4gzttbXnTcqjkmRMVB6mntiHsUkyMzAq7yzm4GFSMRg6CUcn3",
  "key11": "25aSnkxyE3127UsxFiv57TsdtZ96LrR32uxpRZjF6ogSqBR5nvwVARrfh14VY2EEhNNksTAQuBQGFUq5KxtLWYCT",
  "key12": "624R6AczhKTGvpbripauiyxc4tUNDBrQRorfmE3ZwFNhPoGUumQ7uxpPuRYP2qYFsoHEYPE2YrszWFcREVX3dHXr",
  "key13": "5aJJKQd2ehiQ9QRVp7MndEZ2zoi6j4QU4aLqFgd5dQVUw2Me7n5iP5iDxuuG2MaVa8qYwSHDKwj6PLSZhxZb8hdj",
  "key14": "66x71qiFsa5pTDmGJfeusVcHM5idBCdHspYU2U9qyxyC2RcPtM6E6vcqMqEg9yg9jAGkQc6s16QV6SMg5aTA1Mp6",
  "key15": "3WQtZBfxJFPun5u7kqKNVGKZccgZdFopMnSqLe1MQwHyQsgeUE4Z9SCwWyDWLgnW4LqYwwU1qsyFtfHKAKZnZv4p",
  "key16": "4HGNAMEP9wfDBUADMGVoXVBCyADD7pX1DbC277su1pHKRDcmDPbDVRTBHZC6svzGtMFRDGSD8Qsyovemy61p7nJH",
  "key17": "T69aoXsYKKJMpeyGTb75j1k23N74mZ4UJKXPXeCgch1PhCpKjWdXPSrqtQyAoD9HTYhYzCSCuFzBnecU4vCrxfp",
  "key18": "5hApYujc6NrFydara55BemnhQA54jqzbgGaQgAzNHBGxBskgXWeeLAX6Ms32M4rGthnjU7s667boqmwhB41wzFyE",
  "key19": "5nwm11KMaAnf31eoTp6zEtmySivqSEGNxXhzzPpvZ8ahg4B2T9Uk6ioqW44XZjXTe6dXYbUMPp3EirJbuDw5sarW",
  "key20": "n9oC4vryBeXSL5dcHJhD277fN3pB3YqZyES6ZFFtatG5WdZGaGuV4XvoeM1wQLj3P6dw8iiHHi4AUN4m2qCRsAc",
  "key21": "36r2vmDCCPJznguDNryhDanvWVN8iXAuSVVwHgJ6jCzDQciqwhhpEhuVJZMUMXs5rGuZsGcuSYzKtc2YLomMjk5J",
  "key22": "pEPqxuyq4WUQYffraLXX3DqcDCmWviXEUJyjmcMHmM3Lsgzs6ZvkFVVyKGt6sYRRBVoSVi13RUHdB9se5jTu1Dh",
  "key23": "54uukfjJScNnpf8NbJrGxvh6MjExC5kmcY4qqTTERNXpJcnt1guTEY9t9sWV8NHUxHCqHUXTo6ZFvk7skL2FyQS5",
  "key24": "4JVYichPGdQaWVhm7MbT4b7pF7deoDTuiJGTioqnoH5Kc9tCK2yga4bKXc6QgZ2a7dz7kt62tj8ncF8sxRgtKYVm",
  "key25": "3sivpQaywhpYS4pEmSUx8mXA6dLDTgfeTpSsvi1LcC7L7o7Q6TRZdBxjVNZk8pzjUeYPYhqveyE8Zio3TcBiV53S",
  "key26": "4A4ZFsTbsnhwDhfs6FEQsYhoGQD67PWiGVYm6xofRbnfY7BnsCvJXxTvDriM1cAdPVh7JHqieKdBEN2n5aJMmGkS",
  "key27": "5SWLdKMiz5pdn1oLL2LNFfeaxp5xZVCNpFV6uVXHhcD5paMZ4Dxfz923N4N3pD3pMCcZw9KUQbxgHasnR5U1DtSP",
  "key28": "2RLqkt1D7Y5rDr8DGUza6mabhug26Z79pje3LFppzKYAnXbqTdtEvEteiUAujzxNKrnQdwTQtM6j4QH5fzamdem1",
  "key29": "4seQeKQTbEas5Fym8Pc2nVwo37cP66SeY9LMM8HFtXnMSLHbwtchEYJtYy2fYa5f7uCan8LMHEajEn2M8yT5SGgo",
  "key30": "4Wg1M8JdDMyN4X2Jddbqp8RkUan3hqGaTCE6xFV5ck5Y6bQYvJEzNEqMJsaZ24MquhLm3Asrzuo9Soo4WChaFwJM",
  "key31": "3Aa6J6gbKYYnZ89BsfwNwDqsi8gWZvgwCgY1Cdz64tbJtsa29WFaT6KAu8PnedESY9kBMrcHj3Y76hnwRSaJdyoM",
  "key32": "ygJumWqrw4q8EofTuHxJawjQdHSSgTorhXJaaopPkgqboNeA8oBVxw83LLhbci97x9EL3sdAqQ8qrasCWPyJMQi",
  "key33": "22Y9Jp1sNTFdHWgsbb51wP5KmqLcC4nMvzutborKW7whYyYKXzesE3We5AzhnVZVuZGBTZximu3JE7UfVbvMJg4m",
  "key34": "2sD6PkNsFkDJfYMwnWahvf3LABmoG6TSVpYdeJDJBFuoDH7HykgPwFGYp8K8Xex2mD5oS9HvAxjfYW8E2XFt3jA9",
  "key35": "2yqga8W9fLYTxMzNpNEciVLLCGh5DPhce64rWvrGK8nYQyh2qD4TPtLo9JxtP14AfAZGkyRSx7F9irK9H1aAxoGv",
  "key36": "tPgc9HxzwHbipsVoMA4pMMqM4xXZxcJkVpGnp2cYtJ5h9wP5bSi9xn2LZ6cNYeJ9Et3EpZ5Z1egeMn4TyGrfzGq",
  "key37": "99gAXZtAjjtqcefioen2Y5ztvHzLzSeEA1M78rL7kj89o7waodUskpPjK1aiPNPKyHXSGvyWFqsBVPCkNGsDgZQ",
  "key38": "43K8u98YVU5WsEjW5mCSbK57Ld2DkgwZZ3HsaXqbco2jkhUri25wh4cMPuXNbqnbqaPYgtYKxQWVp3jqLbgZYCZ",
  "key39": "2B5be5sXr383BKcYvXTmvbB8C5cpoWTKQCxCrefdRzE2F1eFmMew3AkVbAmAbPHBaJ31TADZdTkFypzsxLmZFaJJ",
  "key40": "2qqnRozRBzFZx6WmmCt8N5k4HodaCwJV2tBbww92WE2FdMyqA9j7GjUPCqbcJcSHvUW7xqFjsJxRUaR7WbhjLyin",
  "key41": "4xCE747TxX6jcUKeQGRkwwu78Z8wCWJzFVYmvquSp3kaJre2TY7jv1BBA9nKaKb42MuZ1vNcvDXVcyZQrEzmHjqZ"
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

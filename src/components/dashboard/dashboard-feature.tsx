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
    "5ppVpSYdxtGxuuh8eSRT1qTFPG9pB68dHdeFmsapTK5iuSqxpLq8Cy5Ww4w9tvGHmm6LnJsx4TFeF2nc7Vyet8BG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27VRYJhUHe51xwWZgiHEudTd6E3bZNDqbj1RWCeuu9VFBJCewrCkU4CTK5zqgMYL7qyU1SWBsqmrKEWMRfNXdQut",
  "key1": "2v8eMvwaFnHjWhTVfFCH8UWSKckasuPbfQM5dRqAAHTRMYguHPWibfh8nyAWT3zUEFVRNqcdi1g8Acmpui1Y6zfS",
  "key2": "2BbGVB3hwT3HgC9ptMbFgtpdA8cVVUegQ7NVrtrgfCxeScuTJXK2cUi3VPSsZA9xbeg14WtGXDV6Y8Cu2h6UiW3p",
  "key3": "3WZKcs4MvnqvVUsB8BWecXdEXA5FR83Sq2p4bpgjYbqLMcUqd6K2XYDviaCWpycyf6z5x28WgiySynPc6esUXh1g",
  "key4": "4qEsER24TxznmheHP1MHqRxegsUH6iqUGgYwEEk9CeMEQPHjukaSuZB6YJBgLtQdj9tPo1NgmSqDFMLWZZ3XBQ16",
  "key5": "63PBkw4dyxdzxJ4y7v17BUx3ontgeYgt8KQjQd2pas28smkAC97a4J4Rv7x3BcQ8LgVNjfr1Q8HEQBQcW5a3qFcY",
  "key6": "Lu1n6tKZSEhzncEf52RpsX3ZWbHznDSPk54ZKfWyhzc5iRVn5QWNjy9BhJjZd47o5ipAdWNL2K1tfTz2BMRYBhe",
  "key7": "4wni4HUfL2794LHiQPhNEJFADWcPHJLk1bHEfmVYJZcuCarVLdsw4bHqpWHimuaR2bqWkXkQ45xeL7c77MPNoKsp",
  "key8": "23w6b1TbHeSDK6NJjaSFanbWuwLDDSUiHuVraMQqDdCoQRdX5w7SujR9NrB6hJw3Uh9QyVwgUfAiFMb2WK3vE7kP",
  "key9": "2YJXgsee2xeG1qW8wgxVAPmgnHqAZdKAL2Ycn2iK6Z16xKF2A3UM5gw7fr7HAQHr1SEsazqcQSJyrahgPnhJv7vm",
  "key10": "dVahyEciByWHFNWTfhkQYdpxRv7pn7rFyx2eAze6gXvLAu5tmv9CfEWqR3zQ6xHHK3v4gjEqfhMYHXTVp5tfb8Y",
  "key11": "BVXo9Drk9VVfQs8FiYztMAbPgypoWauCFgwPn97HtkQu7hopx8gGoSzhiYyTMRR4Kr8CMQ8MmGorWbPVrv4qwyS",
  "key12": "2wc7VwX3fv8o9QJo6Rfh1uZiW1JR5EtxD6F75yVPCxDfnsY1gngNrEbsKG61FdCHz9Qd99fzzTTXKVeD5aX7Ukjj",
  "key13": "2Fcwbiebt14eHAokDt4UJCBW9b4UFU9ywDy8a5bqsfWNMm1NAQ5ocbLQkyp2wmNcT1RNqvnkEND8JxAmXzPrMQH8",
  "key14": "5aLsqxBPA7o9nPYvBLHBxJ88uy2KyGab8pdaxpGqVqTkmXxw5csutEDLwRqZJnVQEm388NMyP6RCAvz1vPH7qxWa",
  "key15": "4gk7ikc32jhTuDZTMZiaVcx9EivZSuzGVbMsCKo7UMtnWRegoZpzD1s89czwn8PaTmLnh7ifTcDfK66jSW95sxnr",
  "key16": "51JYKno7JBZ3DE5sYY5FwQUYowAg89fr4uyojbvLzpUSmt2VG6Bt31xKmBpnrdWCx8SzUeXxY4zKwznJfgwwGTZD",
  "key17": "64ssmqvE9ghd13UFyLDzoBf456XU9FRELGZqQA6sYyw9dNCVTfzwgAt5XA5pgtza6qKpVrnX4FkTnTpHzbfWzc4C",
  "key18": "2yKrTeXLXgKDwyQeXBPhSUKiwn4n2ZbkdxrCk1sVzvnyZd4mV7ftQAwfx5uuSzVDVBVUr93d17vSUnLntHvsbZZr",
  "key19": "5e2kTM7z1US3AaRLTJ4gFwCaRNXJQeHjXgX4W2rXipiqbp3mGYPGrumAcVEikvsJGL94YYXsmvxCYzuXQJm2Xb3P",
  "key20": "kBebzvdWhuFfz1jWzpxZcL8Et6CAVfbY7h1L1tLg97hVGDsTXv4Rb2CepcE6Z8kN9TR9ywhpKbFxwDi3qYbgd6t",
  "key21": "2S1E1ue4idWN6vXNmaQ65eXjWrxe2k3rLxPetiyguKbnAzGnSEQuEVD4FkkjwvnKaT9Gt4fqML9fDGjCYat6Zc3V",
  "key22": "2FCiGZDQSbLZpj4UAbeEvNS6LsJb6oMazLStESYZPPHkuNNJqjCjAKmiNtTsM2ovdemo4tw5f5wq8yjWpzD7QTP2",
  "key23": "3Ky5pyhXthzDBRaot1e3dwSq6qWYsVHJrcjkKKxWE4xRuHhrKP9Futz7UA73ZXNTdXi9XAgqSAPP6QxyhVKft4pq",
  "key24": "5VswTX7tqC6HJTBWYJhoeVJQ8n3rGDCSziPGFVY31p7KPFmjuFFbVjcw6grXA1jWnH89PwoRHgxuuxu6sd4Hokrb",
  "key25": "SjP7FkzD9q4n5MpDy2EXjcLgoahUrQbyzuKgGcj75tSKbGV7mU5wLykXrfyNUBgkcta7NCkyqN5SctMUPfFGbXx",
  "key26": "rvYX2SVEMj9KUDhxyp62Hx7YTn61w5EPKWmXP9XbV4qWEuSJ7PvgFCvgZeeeDKk1jJ1dugBmqakhi8sJn8grhoq",
  "key27": "LbmtNH1iZMYHouDnqvb8b4cYi5rAoWyo6mtoY5bzw9sE3ak4tuGNgWyjo1CRKvAGvYUckAEweQG7PdGPbkHfUtT",
  "key28": "4S9xQgp9rdzXXKnxpAcVv7pu1RHPKRw84xGVoTdTCoFjBUhzGMkUFKscXj1pnnGXs2gdzQAoiWWoWfmahoHFTsph",
  "key29": "2ctbEjwAsLcBieGocuBFBuWNMpPPuBG1qC5PmP2ieRVN2Ucy7RCs9qpqKuwkz6XSCWoN1Khist8F4SHQA4DtNGJA",
  "key30": "4tVtKEhZ9u62nVRB9QuZ44eJYNSSN8ukiFJpTS5DDqkghC3WjWEx5obmHpsVWojDU6ccJM5rKmd4AaQD9R9RvWMs",
  "key31": "3zw41jHdUxS6imaHYa78u52zFJdd87n7QLDukjEWT3FA71WvhKqdkdWjKjmAiX5WWy6oZxC37vcWgYTWXJYNnrDB",
  "key32": "34GmVbXbbA8ZyrxFZjithtFYLqMtJGZY5CS2q4M768zejSkynFy8cEPPnSvg3vwztaduNJBm9GTcK1ztKsSdNTkV",
  "key33": "5231x95MpBDH3TThx7LMEUaXMZimnzijtMk65TjJ8bKvETBDXv91NRGJQNc7JRtY5j2RRpCb6wzn7AopAXhMMSXk",
  "key34": "41kqGTDAiu3iWjr79pYi2NuPYnWGikPQLnX8kwS6ZR7UpJ2pPWTSPMZpQCe36KmzM3bqye4jKbAEziue42s7wBBr",
  "key35": "oUUa5KewqYkbFSCcwRUBArHUQ699oW2ZuN3dR8J487Fp8fHSSo5sBwpo6fyWCbyrKcKEkoHXqZxGHnusD1DRRRR",
  "key36": "66gR1VsPtpHHhz4pa42F5uruHkvgcQJLe1rQkN48pihyJ2vmL5i2VQVtKj6FYBXgCJXhoKaJzTaHpC9YdN7QHXri",
  "key37": "5Mf4MsTfJDo4dXQWVLaBGiEbdAVMxCFH7coD1hCNjhdAi6uFUEAUoWttTDXA7S91cJK1m1ZPoSCo4SAuDB67PvTf",
  "key38": "4dWAbXt6icBkfAvWiGT3bxLh8g3YV2o4BfFues1KVPQfveJG2uBD45SFG6Qhv787uwhau2t62VHBwrFGPWY6My3H",
  "key39": "3z3garN9T7exYYGSp9z17zRh4AL9oqx1KHrseZ9hXLLzh5Sb7EL2wqNzEsyzwiWhfh5NKM1NXpnE6DHHvEZjKsMf",
  "key40": "2qEvZAyXxF1G2PKzRgZWHjzJQaQDfcehGoxbU9TLimYN1EykdjCnxhU6G9d54R4LvyTZy3oKAt9hMj9xMs5UkfPN"
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

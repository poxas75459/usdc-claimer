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
    "4S4yLzebrMBNXhUbU4tVnPVNwm36QUfjndyU2TiCyFUBi9rmBP1MhgUC8BvWRxv8Ms2vdAdk7o7SYpNne9FC546H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4euzSpB8nZHYzsbQnmrQcXZgjvFXbH5kwgYuEKoTYYeSYafx711iPwvUZGE7Tzrsj6G4Ds5i8rsjMfpHA3AR1BGP",
  "key1": "4SsShHz61o7rd3vhNJJSNNsFwVYsBiAC9ziYURqK5DiaRKX3JuS63RyykCzZoeCXVGtqZUJFhzbA5VVQZo5uekh9",
  "key2": "4bQWxSusKyCPW6rsmYEdpi5QUXGcihToN9aPauiJahZEPYWFZH4WLbjPXF8jfWAYHXawwk2f2HtYz1XtDULka8hz",
  "key3": "hQe4YdXUN9mGnKrd2TSeWM5tK4yELhbypvsjJo4BRssKyzXeBU4fZGywtbjFr5kARZt3WcYL1GR46eg7HzRVJsF",
  "key4": "4j6SXCoA5MAcB82VmWDk9emUng3iKUyNJhCGT64gPtLDSptG8WZVv4JSD6LegeEFCEp9ijzvJPDKwzwA4zVmh274",
  "key5": "2Zy5Nb25hLDxZXTe3KhHrnDapZf8kLH8PtfdYND9za12VQVhjf6byyorJX1vhLEZceRrXrgTkLSe5vaSyGKcZzb3",
  "key6": "3pLZx913ekPMw9zxuYcbjcqoJz4yodryAxKKLRXYU1QdH3tdbk8HGUukUiPSwLdniHqtsEAjpvHjTbta2dr42y8f",
  "key7": "fwSWsnn6mhFpx2VDKqpNMkLQQfcpACmYZjrjutdqctA5kufmXcJ6Ttjc7TAK1hoehWQMUXrA3QiX4FoQvGxxVen",
  "key8": "t8g3g7dP1fGVNTynmPXVnzMjj72TRCpX4iLX3kCHfGjCiERFK3uFAokwCPz6a1abHAyS67o22wFwWkMDsxSs1Cj",
  "key9": "58uPnfqz8DEEvGvRJN2Fskcfz9X6P9FmzUUHk88ExYxA5ct6PX59WcW4ucMjZhgs8u3b9hrzBcXh2uCHfyo3stY1",
  "key10": "STzNfqkt8gCUfRmkxyVw9xd5paWqqGjvy5kDRZaB9bB2sbWLg3RRHwnGfs3ZknwCSTmmuxVS59A8Yx1cmSLgZSB",
  "key11": "466ZRBJksPdZCqQHDb7gfpZfuK8i5kQAadqbFsj5XkmmzWT9yF6jRQrEyUPQuWFbM5moK4joFcNfGiUqdjsLQYfH",
  "key12": "4yfxNUWMG1mNFScSeGk1iBkZGiF8MW4BzsHiLKcnhKD8V2zp4ra4inXtX3WZP7oTtfyB5tvAj9syVGKLjSiWfBeK",
  "key13": "4aBrS7umkbij39SmuyTQrXU6wDhWyPqsaGNZkzQBKB7REa9ehvXZtbHwq5zqY7YopopdFyqxfT2cDqnHDtkXxKs7",
  "key14": "3Q5eCtvusoxSPwKYsuTffGSvqTtWbK2LkhpmEUpZVkTM95r8jvBmKrKmYiC54gH4CJSByhA8WrDff4giLdjEA6Jw",
  "key15": "JWoCXs3nvracuPJtu7hQGrfdkmGPnNUq2nTXch6v1QVQsvwg3FrBX2HhM4AQ1ekRVQnAswHQk6zus9w1ki8zevj",
  "key16": "677M4WVLwcF7cfXE5yemhANG1BhU94zkdKf8c952NHCViMXEWvBGG7K45roP4rKGe93WYV4r147w29QdTPy8HBxz",
  "key17": "5xDKoECsie2o2Wq59ZRujhaBrAfd1NLhcERrT2cgwwdtQHwsw9Cx4yyWuQ2sPAxhdfBigV755rPMXxisRpuLAG1B",
  "key18": "2yyVUJ4oavbFuDFaR9jsiQHUpjKV8uULPGDusQumfCPsMjSn9f7weFHNeEkvSBak8dDZyhrm9wJibFwvubLL87BW",
  "key19": "4QoNiJefpsyy6LphGZFFPrMo7Ly4hsSTZ5v8C7FoaVBJQpiKqB9FHdnnLmE5DmZBWuiZ8ARhWeo3TA5mJfngjdUP",
  "key20": "2PgEgVgyYmqmvF2339nKxv5cDrcHjDenadUDtM8JoPV9W7fbs2pmQvoLNcecswGaUinqCyVy7bKVLHRDHCRHSXe9",
  "key21": "MyL1HDnenwav4TCWRqJttyfwzjLCvRQiSkXQ4q7ZvtEX8PrwW9RV1cW3gzB6zgt6p2HfaxMnghVwaChhNMQNJAC",
  "key22": "2NXnVQCiHWC5w6vVUbxTeyeDTLU85Kd7fnFXpQtW6evvfUGk9cjtqoXV7mqubSsxNThA6RPUptUkhjPHSCzrXzwg",
  "key23": "3zRQrggjphfDgUPCcN7ppChNJU1oy9rf8gwctoHQj8edGpxW1ZND3QVdYBavrhjLAg5CAak8UReF2ZaS4NECj2U1",
  "key24": "2BhhgpNanx9yVViDjqUz7fSnef48u2zfnK3pnBQ3z6cgNX6YKTw9FWgnF1UmPoYoacXvQX6N2LGRG5mP4N2kAm62",
  "key25": "3vNb1f6vGkDbtjh63zyxUkL9MrgfeoQN1SaVduMFBT7ckdXMe7wTmNJDDaFpPtwyVQczM1135fGgaPpke4Fqn1T4",
  "key26": "4rQY6hoDkPpkqDHQYaco3bJeco7QUCecfSJig1BjDZvC37rRrx29WsHvgGTJwiqrMMRPb8439gqa7BUd5PaAjhfY",
  "key27": "3yr52xApi6SphawMV9i8QLM6w27BAEe8iCYiGVsUDeNK2tAeu3BNZz3AK5zhHxSQ5VsDuvYDmGG1F428VDfnV599",
  "key28": "55UjQR6LdGKihpTbQpPHowtr28gLLtHAS51MxVe8iTnHwy8ocZrT6uEyAk7SqUrG7SuESRoZoVhi639joxj2YSLB",
  "key29": "3429MvHiVjG7xJ4uYP9mDHLkw5Afxcj54yBVzALoM1UG9SZbHhCqmU7M8M6wwqpRBRjf8HmSJHnG6nhhFJ78K6UD",
  "key30": "5qPXu8zARwvRQnAS65adBgW3xbN5cFiJk47pCBLR6T4QJiGhm3XET5XXa6xeGxm8HJTRxmTGPuuTAQCZTWJf4L1b",
  "key31": "2oPdJn948c3Uy3mm9yPCu4dunauZB2o1ZdBQiXLBKbrWiUFEqXr42abpQXdQRgiJzMkBUUvHBhFSdq4T7qmWAVZ9",
  "key32": "2YYPLHtUCWHZgWEJFRigqBNQry1Z8WfTVSMpUrzoqJ5FMbUYeEuNX9TaP3bEwLfyhVVSczW2fPA7maL8MAZJ2hxA",
  "key33": "FqkMZhSuswe2PP9ppADRJ4cwy2wqAY6cm8gd3teCgaDHLSZoC3VqSg9DLwos9jYUN5GByCizFPUBigfVNAP4NQL",
  "key34": "2uMunKvSNVYg12vnQBwq9rMYMfxfJgUG4ja3fWAHL3M3FUPYdu2cWT9c82Cce9cvMEuLK2nGyXv5LqvRGudJB45s",
  "key35": "2E3yhUQtBHYUaMUzYZHfmppJDnmeEE1R4f1Pw2HxyeMLxrZ7ACaUPxrvGPb3sGvd4tYadjvKiKaQoSGaCeBSrfiH",
  "key36": "5npjbgf5DcyL7dhUm8amq9dSmLG9wo1JERwhVhwWV6D3GjboyetQgLo7zyaA4veqtECcMLdm4nZ6DHtpWAEauzfn",
  "key37": "5PbVuT2zZ9GbQ4yUdJn4EpSWAY6Myk438e5d3mXEWd7bM45TtAabBjSShfc38aJ9xDj82QZoy2bxcY3RQr3s3A31"
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

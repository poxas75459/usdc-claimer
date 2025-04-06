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
    "4fxKzinU8FtDaWbr81NTQMQSAEsJ4zGG25c5LnBC9BSx8uRvHNKnbTpw4GcaPfeuHxYFQ9fcn5q49ttx6LY4yweN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HbY9z8yXyeqyPwejSnYhuhSo7Eg45DX9UduCx5g8byfJYpjqRsdHKQuDtXK2JNZ5wKbvmJyW9ypjXXYpjjsTEqS",
  "key1": "2rQscV4FndGBJ5iD261gPdBumNdCpBGvgJSLuGiCCFwtbm6tyc6fSgokM5i3bhhgjXjiLbAWQtdm3gKzZpN2sEnF",
  "key2": "43x45s5rsfYyNiirpFG1gpRVfJSki5qbmUqMpWx4D6MARYRGMyRfPBkwTwaWLtU3PLoaQjD7a75ASzRHfNNULsr2",
  "key3": "GW4RWC9xdoTUHSUB7XntRAAPMtUURWxvDeBcb92vchha2FPxPuB8zK7xb12T2QLCUp4CAzwENg72yGywVWzB6ft",
  "key4": "3riuEz2SnHJqbmCXo8DLevGMp6vczRnAgXzV93H7gvYEFzML3BFA1ucMKy5AtGG9HgBkooPS1n3ceFmEGMevh2Zg",
  "key5": "5dBpj3pMw6na4eR58tNhhDFn7X2yjtv1Q1qkzJW5ETydjou3v8LWqRQRdWZFm16gVGWMkv3kdLcaEeHNcNLHJ4hK",
  "key6": "5gZWHd9G7tVxCLwLD6cKzVsTUPFd5buwhNi9XmAWeRZSmbMLBvnCHRebhyvxcw7FmZWVcM23rMCoJPMtt7m7xxCn",
  "key7": "74BgQ6ZnZLCnE3UaKpugMm6D6DuwW7SwcsmBbZNcfZ2Vek6QxkKDbCa1rsYTLNxBi7PUHmMf7VnL6pUoHmHxiwH",
  "key8": "4RUheVY6e2tnVVeXM8LCZNr8S2nRyE27kSTp5Dxto8igsPXsJqyBWWdCb6HQybVD8bcYGLGMzMUp94EyyBZcwkCX",
  "key9": "2iyQXDxdPvqYxZVhcoPr9MZSFV2cJ26t5ZHGehHbv32Cvq3iKRk3va2DEV639VEaq8fugNun5KUcmiFoXcupE5wB",
  "key10": "2GcWyKcBHHxeeeRYpNAKd94yDPqijKQGp5fiq4udATjBDtKn8YJUmYcdCjLMeZqZWJP3uxis1WzCdYgncneNfZyr",
  "key11": "2N41iAfoReAPonoborVEudq6abReB7bb3Bo6PZ62zeJEDFBieqm9XwPmRmDfWCLp19hxhT42REj2ZmTwvhMQCUFr",
  "key12": "4NY14YHWyoPH9FgdzzHz3m3RgoGLBquTSYjmKxBRVCNNRWwBHvmKmboT3XhG9siuXtZ4Q2SKBqVb7NRdwjh2JJae",
  "key13": "4B6VKLzR5fWZsekEyBPpJoVThxsyrPexQmunzJ7Gp2JTFDQKdSwPjb9kUc3zUnDkczjwBZyfjB5pQbXeRgYkXF6F",
  "key14": "4DqiY2fpgUAznWoK5EBBh84MB21ahme8QiDn8FSGta82zEuX2cp5avNsHaMkwtcoqmsirYbrASnv3fi8gxKGg9p1",
  "key15": "26uf9vVzc9UU3w9X3NQtaaBmmmR6X2cWmCoHMjjGTUmvXdiebadJrv6VYLiTcMFYL97jWMXKitgbkjs8yjc5sUJr",
  "key16": "66krFnM8rKjgMUff9sAPuDj5ho2SPqzWGEBFiRS6fcgU9EM7ewXUvxj3NrkhKoxnBYmQcSfV3moPEyKCa4e7VaCh",
  "key17": "26UnihkD8Qxtz6ACw89Ga4d8j6Hjw6RmLsqVDC2w7LhLvguDrLQbH7PPvMTMP5VwocoCgoFyHtt1GwcTKn98vLHu",
  "key18": "3rk6LUNCDaMUTJvmoJ7uLSSH4HXwjDg3qsEbJMxVD7XRAf3A2wXRJ537yYp2tYRQ1gMdThncQqbtUXchSqAadypA",
  "key19": "oBfMvEucNnmpZMChZBVNzwmtvUK1jkZgsxcFHz99Gb2kj9AbYCvDxxRBzfNow6BaJXMEjbTqGHnFfB1Wup8oq6g",
  "key20": "2ukR32Vj6xijkuUfC8ivqtbjSLCioFrX6wjQEmx7wkn6xN7MhQz6zdaYYgY2srWdfmCStx2YdqnUc1EWeX3WEPdY",
  "key21": "5CFHJsEQPt1MraoJM7dn2K6QnYA61ioGhoJJxMY6Ku8LTTAJbmfCNF9ZnHhQeANGoReeTKBWyy83ctxNh5Y9Lirh",
  "key22": "2r3uhU7NHMRV4h6XSUADUfBPLLqyTFpP19HrAnLkwa4HCvkcGkDaNfAtTccAbtGEpvVWHkC7PZNoTFHvy9jmz8G8",
  "key23": "2NxnfZy9ojbs8jZYfYFMRQcov3dzM8QrLARXgFBaj4Yj9KVThAHMB1ksmaCHzKtvETpy8VQvGPoofWiV5fhvH6TL",
  "key24": "2C7dBvggMGnLP9jYYN8CcNjGF67GrBpN8iFtwwrAdFiRQhaXF2VRMuzL5zXCCbmZCxWgpvN3fehu71Yu167qHzoz",
  "key25": "DKFsKh14VCEMFzQbZ7qkSJZNBvyBBkW2CeCy4uUNy6Wh3yL7x9VCT3H7vY547jnDfzJzo9XJKugzMS679aFvqNW",
  "key26": "3sAs9AUN3eFKfu5ndXqvjwt2FNYdcc3akviQv7m9vAVdR12kjdcYUghxNM1V3rofu6hvr5FGLMxPpPJyEY467pwS",
  "key27": "3ub3KG5w6WisqCVSEdnFLmukCNiNkyRjViUkBp6bTeeK3np5Az2At3LxeZjHmuZHkVVrAs52YjAdTRfFGUX6QfMS",
  "key28": "A1mNS6opk9EqsN7kZJq5zPruEJkJv2wkDosgUhtnEAr2xDsxz7RZ3XHyDPea9dQTCV3V1vyHDGRMwgH97Q6iAX4",
  "key29": "3MvxWA5EByuS4dPyDh77iuKtdh3RdxJvPmLjy8sVfkid8HbZKiciVEvRVDDvbVsqAqW7NfDnyqNh4TSoW3u8UjuC",
  "key30": "2msJkv9GdHrR2SKUFe2kGZ1RR28MwYTmov8FXfB8zHWXXhCbHohpifm8SiSMg9G5KvxQ8oNrvQzx6YYXS3CMdhqx",
  "key31": "3t1aor8WUCsHzgaWXvtgGbHuHw4knbEhDNnkV3sH88VCUxdFFFGVMbhJtS53Uqs7qSQbxkBANMuFGqZmUwTxcYpy",
  "key32": "BwM1tWkziys1pUzLwXPNKABnbyymYxv9GtLb3oFtD9t9Zs8NrMptDsvzbwUT3nUNgXN1Gk3nX8DEnFL7dQ6chK8"
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

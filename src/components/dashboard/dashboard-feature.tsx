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
    "4vTqE5c3pELiqurbMptfE9f7JoEzgag2EowaVGsDmu2HTCbPV7YV8th2KQtuxG8GfP1TswwKtiV4Wuoz9gZTEyuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2U4hBZHLQbkLZvBoZG2ymKYRmM6cT7QuBWDhAWjZMCdJdVZJQD3JVieyYH6F6vJHaEHduHYSKdu3kvxE3zkeiP",
  "key1": "pouDLbM7tBRiTZjujsUecvD36dYPGuBn2jZBYuVMc8RZe6Tmsap5X24ZkcWL9DVVghA5Ppm6EZhdw3sv6qzCAaY",
  "key2": "2HvDq9TiZ2yJ3fNxUBnJ2bUpxEFfFuzDzpTfStydjoVxAuSi8BkGmHbgymZVhPt6tqSMtBwKUrLB1p9o4Qkimnu7",
  "key3": "2svqXb9k1NQ2NURkzssSUkjZAW5XEtvm3XDwvpPZeG47CdrUUpMcMMnzZ8QqqxrSj96D2aVfhZQLy4mtCZDEJYjB",
  "key4": "3N5EBJy3ViteR83TRfVHVNuaRdgdXrQkHmT6LwwzEb4UP8qcGcX9yVYBEeESraL9QBn3LJGmuiVkC9DVWCUHLY3n",
  "key5": "4R9vKfJM6kpPS6nowV1LrPY3SkWPyGXGcAc5Jhw16WA2JqNG3d4ohMG5rmJdx1YEPS9344zRkJL3zUbDnkR1S5h9",
  "key6": "2LaZ7Yo3Y1T4pHb3LSacRLE5S1e9eAtKSDa4qBkxna8owCyuD3Wm53EWQaVqECVhVZkPeLmSuK3v6WZG9FgFKUe9",
  "key7": "4JEieaVHuPFBZ8qPxu3rdk52bsBjngTnXHS2CPgAjwmWZjxKFoE6Jox8xGANaZ7CsP49cgtWd8fTYL5E1rdRgHkH",
  "key8": "58r2RbPsyMgwVBtDtLDCHQNGa6FeXS2p8sieMJq9ohsH3qD8TwUHGSpovbm6vsmjqSrWJz7kizMCtKEaCMPek5kc",
  "key9": "2Z2pymJ61FgujaWrNMpQRZDSZcFkzPvJ8pewTQR6VD2Q1p82Mj7o77iJ1tYB1yX8APs68MY3cbevsr59UgR3bsuV",
  "key10": "4ebuzmhP8QuGMJ7BnFx4ddUqzduE6kTLzc1f2p93zqRxg9ygmeFpYGZVosV3qnyFnFC4eLUK6DiaUcfTCUwLUxp",
  "key11": "wNH7kYQQKQDeDhYsQeBkL4dK43gzKHH6Am6W9DdQEvUND952dFjSBnKjimK5TSzip6A9sM4Cbb8ms4bjfBZHrLA",
  "key12": "3VjXL2CvYxszqty8jBvViVSEfEpNoBb5hZo7ayutixMnisDM4Jm1qPHdzbZKPyxZUQufJFwCu5kd45XNirVf9Zpu",
  "key13": "4NuJLeRZ56TtcM43uvFKGLLt2tGwh6CsxCq1vPhGJts6JnojczBRgc4d4AiRmrvFxB1gpL57njfVQh27seL651e6",
  "key14": "4JjWeHy3eK4vAHBpRRUr8ryPgz9nB8x94eiEzoHeUzSbDoAS3gd8aHJQaqWP2p6Z8eGsmUfWza3DuSv8C4oXqN1R",
  "key15": "4fu19ShngE5hqWYDScwPnrrG6cFQYQJZ25s3ME6Gfw7x72qwhFZxGFX6ukYF2xr74huynpUiHs3kHVpdvEY899rn",
  "key16": "2mKCmpqi7JzUDnJmBQei1zYDisEhXzT9pwjS1BcZ7UMjKyyCVLPuKVyRUuRP9fyx41xN3DkiW6V8rmNKERANXpuj",
  "key17": "4jbijjBWgrBJpNiViNnysyVq5PGZT6HTvWoGYyGKERzCFktsRsybtRQJ1zHsxu937kLY1VSrPrE3esUXWLU5Dd2t",
  "key18": "5h6NWzHL9BqaDP4oquo3bRrr2Z2sZgpmpzjfvtvS2rB2SUKqsKy41WcuKyi4XkesaFP16tH18bwwkr2tRKgtw3Kh",
  "key19": "3Qe7EyvXejduLd9rcD2w8NA2szHHosMufXZ6KUnTm762CxDo6ek9SNGjCTDrLXKCWTkFh3z4nEVQ34kg5WH1enjA",
  "key20": "5M1PATy8mu95n2EVTj5tSh3PmxBL8ZetKa7FpJjhp88J8ptMj3mX9sm1kQKvq8C2wbrbutmG5AxmAuYKBzEACP4c",
  "key21": "4GonB1qpm1819L6HHxsDdVzzmkZxhvqPBzZWFrPRfzHvbe2aUt81nvK9KyrAdE8aBhxL5VUDNYGMRK2NUUXogTxK",
  "key22": "2PQifoNipRXQGuGLDABX3tNJE2AV6kzz5DnFvqMgKW4PRSPfoRPBSpEwPxGYhSros1efnyFtJ9SJjfFopmgsWQdQ",
  "key23": "3qDPiVNQMxUHEG7Zkesu7Zjwgu3pkdkgXQbCcYxSiojmvygx7evK3XFhPSD8kdVgqRgXND1GyAeFGreH9CY1nFTc",
  "key24": "3oCNRgHTHvYDZghGEk6v9v7o9goWY4KGGEoF7vYVCwe6cQxTuCp8ES99mZkkqFdXzfQbG3AUe3DmtEy9DohfbLG",
  "key25": "8ek5hb6AX857QTz4VRDQjawPscEhTxHyrPp6t5t8DQ8LECSKNte48jTzuS4L7CrGhJGcWV6NCZvLykicsbZaUd1",
  "key26": "5GQ1HMnFVbXGAs5P6rMTtKYq19XeTGCxYTXviYT4nBFJGnN1MSuoek8sBQ3uRtWiC17dcjetCNWT8owfe3jA5va9",
  "key27": "4XpNBdoFpyxYF8fLVxasSgv2BZhCfYKo61Ng441ivygfLnGuBspguLDW5p9KjV3PbxrrVFeYz7TrErpdv9GBaj17",
  "key28": "pMvGdqpHEztp4H5RXPAMeJnQuh4ZV1sjfDm5cYnn56haGQNHSo4rQPMRCkNL4EYYs8UHXp4ARKWUSx2fAQLicaF",
  "key29": "5D96dRMrLtYB1pE5NkQXnEejtAmSvcpKiK8Smrz8fGe94jTs7DxtpjpfLpx7seo4whcc7s6R2YkSPhUsHpYP1P1U",
  "key30": "2Ekp7Cpow99mh6csh5o6DM3cRDHHqNWJbaZXhqXWpVfzY8bLjbZ7yJTHAFrmdd5bxDkaWe2B7Rj4Lgc11TM9YZxX",
  "key31": "3QszkXeqTJBHtzQwDjFsX7k91F1Qfn9LewP3STeruTUU9bsqB3ffZPAv7vjbDzPCQ41wWDVK3GaeStp5UzEsuk4E",
  "key32": "ayec64X2c84Q66qQkdDH4q67ebF3a6MXknsyuVwqSHWhJS5jJf6yRzh9c9yFQ7NcDkNX3fp8mJd53ev2wuYuFZS",
  "key33": "4yrkvjgKuhnpbemDhK9kC8agc6hPWPq9CdjQ3RUkejd8VFdH1mygudBtcAVVHQHAtdcoAC7uF9eJmprWzNRK46Vf",
  "key34": "2nNFXVCYHnDQyLDuD6yNCRHZzEi78GEdB6UFqgXJNSfsa7sEt35spvYAWDHKXmRmSwVK7gafCwPwfPg5GPHVSKYG",
  "key35": "26q4BiTY63CbALsNF23rk1zU9mV1Zj5FBUMuKYwJMvV3pCbztnJqbpgvcaDtaZyjfuEsMPcpzDoAL1SZD5UR4y2n",
  "key36": "3GhgaJGPaQUmKXu6s8irwAtFfF8iXQoSDemxL6rDX8tjJoyN7nAxWmT7hk63GEC8FJsqJQNRMGVow2MBoQNhCmLE",
  "key37": "4J9URY93oVeVFan6SDyKg17tktf5Vj3vgFiaaoYHTTLqBmAqGU9YCSMse43CCu32zrDWD3WaRdVkGESHJWW8NTje",
  "key38": "3GFWUpjKmYpznoHxgjHhsqoLgCMDLecQqZLfmAdYwmyU9kSpFBpmJFYfYYAmCTdeFdv9T9FjtjsByDHKJZm6oMYn",
  "key39": "KaBnqJK8oUFWewrbqBtcXFheBucCr1LsdTsmpB2waLS9ser6ocL5UzxZhejxiabz1WGQenBangAfFHkEY1V2pRT",
  "key40": "2R5DfrQmA2f6p6EkQSLJJ1vLE4AbWJkbXQe6o9H14GuMN8nDUjexq3jYSDxF3v66tgBVEYxhJAyfsgFJpkVTLV35",
  "key41": "moUFP9fqjCTcuixMj8PjcYgh14ECvDzmJqdRSQrBX4sHCGapriABdZ9XHXv18425T57hv7Tp6iX9oy1ja6aXdVS",
  "key42": "8aDsJm6BB1qXvRvwE8QbGn5U99fJr5ux7dJ7YWYswWaWiRH2gfhj6VNLo5YSKEeQuXbQf6qAMvtxcexsqDfK4Ei",
  "key43": "bX856GoBf8uy5nBBN9s64ZgrCK1D5gEReQTo97dcEvoe1vLTaipEqySpCU5eQ6f4ssvniAn2euqvHom8PRtKL8E",
  "key44": "24RuZJTLPfdNvBrGDLby3sS7j7MZX8f5vLQ7jFfuqkan8NQQewvNjBYKuRt8mQa5kJjnLXDFQQkyPVSEjJVq1C1n"
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

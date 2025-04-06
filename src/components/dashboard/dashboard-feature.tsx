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
    "2BjpBy9Z3RDSo7bGPHSWhANLrf7mPHjXHRqcwoMgjFd63XooHfKiM49TtqF2esnmCQiwcwiELrvqkm8V5U7VAHS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZJ1nE2oRBRSfiDpf6TXANtBDyxMWj5Lk95ErXjsVTurrniEvh328isLt25fkP1gCeDKjGhTetM7inCH2QGe8dHv",
  "key1": "qtZYHcJqJrTVFs21KNKTbhP91eT82U63Mj569yZUD8UJ4G1BYh7pUAFUBZnr2bXkaccKfHZL8g9ZwSSN6F9oAqW",
  "key2": "5kBKA23vaTNr48DMz4qFXKZNg4zDchgTjVb4EbdKrTQ758QuDzUj5BMBgJjwaMtjhB3SDfVWL4yDhJPLkv3VE6D8",
  "key3": "5ZEeuYHArx4WWYSRR1kfeLRGTE29kzneWcHsUg1HjqdQcCRMZjeaipu1HiijDqgZANS8sBDJny5Ny12dWPcSe15i",
  "key4": "34yBEkgtQYUyoP4e1Kb4nYoq6FVSxfqBz9vJsmea4ExxvAAwe74kGq9VEujygTDmrQqzHFpFXBots8KQPEQaSghc",
  "key5": "5XkkDVDRx98qLv7TvYGnnqvPhaTrDmehoxA2YJGjLJXcTiRfcAcbjP1zzYbr64T6KqFrWLRcRzyRDCRB99rd3rPQ",
  "key6": "2xcSbiYZ2r47bRtfKARX5vAM5RceW7QixWU3CnA5uXYqHk3FGTBtCLfxazHJfnCGCjaWBhdrYHcVF2AUPtsfGQGL",
  "key7": "PocBGCNvxXA79PvfSqVQWLMXaEU5wx8ewMSn9HPiNTrKkVRKWqGcFTTjpCbKZ6kJYVSis2m5yYKe9vZsTpk2uFU",
  "key8": "2bD4X2Gy9Z7NQayH7oQceFZxxmsnwBDMqaBUAq71j2Siq71LTaCGpZwhJwGZuSsNvcpdoiyPdKuzPpAKYGTLQ5Fq",
  "key9": "2BZDVob6rHQUnSRuLqH89YaGg1E2fRio22eBFdHdRUeQd9GziUsSRVNYwEnctCPQPGwcSQosAPrJLMeAMn7fSMxV",
  "key10": "5rvcJEkbpPVaWYyE9jWKKuPKsiDcZw1q78eCuz7vxyWb9jZwucUptegYXUNZaWwssQAb8Xb1xssTqi3yeUcVxsec",
  "key11": "35FZZDe24VTU5ZsCAE61aqSEgCbHYGr4mXbBz8j8kZPJgVEaFaise4MqoZKCLJXP6bk77xbvPnVZejXxVUpzcC1v",
  "key12": "3mcTRcEWfzNE6vEk4MLSvJEkpzv8VFPk1iz8dZecwPepswtLW8X8mVjGqAppXztXMjuGqitsMECUj8gH6Q5iCTgM",
  "key13": "3nLH8f2T4Ry3udQaHdD54NaYppEHHox7zaV2yygLa9tVnKtp1tuTqbE4Kw2wQntGzr68u6Vt8S4BcJ4AfYYrjyUV",
  "key14": "vBoNMqM2XD3uuuuV6x6gn3ztTZqPumtWccKGKApA2UKYMTE87AXKS439WVHbCXs9guKKK3c415ZFR14uZB7qx28",
  "key15": "66LgVbEsVdboVDDAbUDkAPZmLvZzSc5j1PUjhNNQsSBAV1v657uAKEDTw6fxbvwpbpCMoCow6hRBSMn5YS4Eeb2L",
  "key16": "3gUsWGyDFbLMqrqUGa8CwgDhRpx9sMr5b9aLQhiWn5BqQkXPJRkzZnkLfuBD48yEQE6mqfAn5KJSBxtshgv8qi5X",
  "key17": "49Fp5pdS87prqQzQkuqzvfZBtn623FmfDex64bJZBkBFBm8wnNiCi8KL25MWntJpq7DMx7hgSUkwft7ZJsn6KoHb",
  "key18": "5mcA3gDgGVsHfxTxKvG23dBpVULxWkZ2QJRJHn2bcZY4MzcdmJfPzpcScdgRwCqCdoBtyuSBraEtgCKhS6Tsh7iC",
  "key19": "38zHyVMbF3J28ATobAzvENNZPhYZ9e9ra1ozCurf378qesxTnKS8GrMtq1TWZMb6FS8vDAamzJCDrArsSQiLSdwg",
  "key20": "5ttUvu3Nxx5UduFQpbqzoNFwGZJnsVfjQeSjZbwSiDCq8XcFJse3Vn5gpWMNHmYL9wtzPt4Dq85n8gkaD5F51XWr",
  "key21": "4xmAQFAipFAUZrY6jG692cpZJFJ95HYh2UxwNEtqLr3GHvErNb2V9T6icFSMhQ1RVNRzZbn8vcz3zZgQmsfn9EAu",
  "key22": "5yPTAguuE9hdsq2E87q2QC6eRmK5btoG6PqX28yQSX17jtzEeoLGfewuxbZeCnzms96s7Axwr81uLK1ZE9FsahNY",
  "key23": "67FtHh8HovHkAM556nbv23FVVvshBL4AyzKn5bJDYsDmwBdWXr1Dd566gq6YHrFo5rFB8YQChsrFykmgsGcQHD1a",
  "key24": "48CwDjm4MUMZZrgoUmNdSq2RgiSfZqvTtAZX462oFDfyRxH6H6jA8nSxMikaryzwmmt4vMLEm2g98wcbdy524XLm",
  "key25": "25C5Ue5GdLzqJJZd7DQwPVxtuHGZD8RhTJGEbqCqo7SY68HseeXwQM87JLs3XbcR7ddFZYVyj6HiJ3kYAqYUAWRP",
  "key26": "5fAgeu8C5ucXz9VSq9nvrKRbZeHRxuivTDbsX81TrTnHv5o5YzWFeKPhmUNivgxiaVS7BGsQFMzd1settmb7Qas6",
  "key27": "2LqeRDjByDhnBXR4sQyaiJFuhvQY3NNMGgXocos3dUugf5yHTWXxcb5QNe2LxKcZFLcEHGV5xFRP3Eaa3k2wmkz4",
  "key28": "2ay44Yo2ym5vY3U9tWNuvVs3L2Pmx6ULvoXK9HtAjZ29ThVzFNw3eYsNCxi1QLit9tUriARDkC989DMZfPvhetV7",
  "key29": "52ntehunENWmd4qEfpo8y7kB8UEK61k7ygRb3WFTUXme7fmy6GYhBRh113WaRqS9s3oy5jKsDa32bJjr2q8BaZAX",
  "key30": "6G1ivGJRHuGfPWhSQA6zjg5jcKAdqULvQGkbhM3Ak2T47a3SRigUT1vTSx29VT4bhZrC3t9CE5qQ4wmZyRsrx6Z",
  "key31": "3Ro8WpBZj6ApX7FY6JMhdLX9zMEJzLuBhRMLLPwfhuMg3eVpbNpBMutmAPB2PCRT3jpgDD76BG3Lniuqd5zqWLMp",
  "key32": "5U4HYss8ooYC8BqsDoXZTHRVS5MGF98j4hXr9YP7AjD9UxzmasQoR5CdbwLpRqYb8ZsUuc2b7sFqffW14fnXuX6y",
  "key33": "3LUt99WjEaECXhmdmonaepTtcuAqW37JENgRqPdNpEKgHGdRzAVQUB9G79QEDJW1K46mcWvb5UeLfagFxqSZsmvc",
  "key34": "cPFsU2B88Um44yE8RusjfjFDH8iqSNh6CcfVCJzXXRwEwXrwXNWD7BXWCeZVnNKSSpzdEJvp8ZdaiUvf3sehtvP",
  "key35": "4pjHGRyNTZg8HBptivSA7TSHqGBFtaBtZskwzZkjyhg4XjEizfTeknhCZY1MPmGebjqbZWsf9P7w2a4Co29U7seJ",
  "key36": "3p7X3WwZmBe6SkPnLPWygJqx6dzg6RF4x31XXpV6sgx2BAewVpcjnegug4po4boRw4qZKDhcwYHbQcKPChUzsQWo",
  "key37": "THCmPpAAaG5uup4pC9XgLeM2722JKDy1NdUxSroVkvoV7WGPfEyiedV6PDNTWhpeGW1kit6JNxdp1q1b2CRb9Jx",
  "key38": "4aPxT7ys2N4LoXSSsa8zVHJKNCmxwfDAax9HMLokRrzDYgj2EkESUdZgki5EZKqTVGmvRZStu8Jpsuk89c9RnrYG",
  "key39": "4FaXNp36PbW93DZLJp6EjvrFbxwsoSX1uMWWeSKdvQSZqC6Z3ceYjMRvZfZcJfW8taT2rkp6T8XTsevgCYYuYuEC",
  "key40": "4Y9wMe6mJoPAxEKVo4PVspc9EcpYbcJwuSavY5GZFfjqV2Kgwe7Y4svTdgrMUJH2bkfYTfNtPk8kpZvQxWZ3LVQb",
  "key41": "3PeVwzYWVGKssUMRuVLWVnREShKygmTVAuauFAHsmtYhLkCLReZudJznuKN7u8XYVXNLG8tan2U7FJpTS7HMd3AU",
  "key42": "npF5yWsEkat5iUHyiuBUnJ49T9DF6XUC4mdknCAyUW5HK1vUEZ7w82QcBMp4gzcmVrvNw9wedo515J1ajxUgHKr",
  "key43": "5oeoAKynXFQiZdUrxYahGnTfh1GVe2H2rmRmFrQ61FZJSjamXZ8Jd8HW8JKGB4urC1FGQdaQPeXzkpfjf9HUwpDH",
  "key44": "4EBU5G8sjyHwEdMWryN3LDs8z2qxKZDBZGdGNUcbxH1UU2ABQjqT8SSkkpGhmQxYsbzvdQnV6PxadnL6LvyftMSr",
  "key45": "61wtxi3ypYJ9vd4t1yG8C7UsRj57qvpREM7gqhnRJyozzTn3T4RVfhaZVRFCZ6YjgmB4VfMHteCGDRb3LA5W3JXu",
  "key46": "3MMFyB1zE9PUZBui7Lxw172FoZ3bySm1pZ2TKeynXAAzSaFggmybVc3U7gq6JFLUUruXBb6TX3mRUvQ7XDq37D9N",
  "key47": "49Wj8PeQWJXZ9ZijkgyMAD7sjdYhsxSX5Vv3xrQJf5QchB7b3FduKEdzhi2y6ng3DY7Kzm4aZqNvAatiEhXtHVsp"
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

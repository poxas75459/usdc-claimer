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
    "4jogzEXyEZDo47SpW1dEANNXhkmexxBvAzmhv2nzfzEpGm3qokrVjNqr5seCysAv8ro9PwKrTGXjXx3U9m8Tdt3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R6wWL6fehEmBxhtmYCbna9fEbG5vssma6EacFq1rw4JSfZxc4KfTtBTnU36wZEmrByDm1puxgnS8UTvyRB5YAB1",
  "key1": "k5zaj31d56we7qDA6zaMwm1zhrGn8aWVXSeJxbvRsMdchnFsTuFqj6FNfrrR7SzB9oEaVx2ndNkpRamTDj7Kgvg",
  "key2": "3QimrJtuoXfVzW5M1yQN2x8U3BmN2k7NtNmBRZEjPekvwgEXPMUQ37kssjregHoqTUyb6Jb7KF5w8JTKe8vRBpyR",
  "key3": "gG72E93mWWzyUr5SrFd5S3YtJbYTPKGnUejq9GzJgw8SRK9agL1vWgHKoThkzpTX5BEpToef4hJMZdkTbERFzCs",
  "key4": "4nVk8uFpQdkDEJToSNhuikMtBMddLJ2JMbd6Dam7fHKyuzTafZxefM5PyDyHEjn8sjua2Mvkdw4jnVtjUqD9CZcu",
  "key5": "2cU4LjguJgMUtyhcyDLqcQXLRj2oovTDioKByLA2zHvGzwhLXVMRvu6CwdKF8fGqmpqnkJ82Ls6ctDuMYFQ1yWHo",
  "key6": "4p6PAFWFCwSeuLC5bmoPqAfYYpz8KApqFXNREVa9zRyfHdnaiHv3xrDf8EXfPpCwrXane2xzZgYpAy1Kftgf3ehw",
  "key7": "aqWCBevpmCaJmSx7Yyr1HYhSqyJJ3vPt2mtx4qGz6Vd2TQqrMezQ7FZP7FWDj2NkHoCVxJnaeoaUGqE5VaFa5Xc",
  "key8": "65dxZxvDzJcfWT62ziwvDQfcGPNNU4B6Up7Mz5cBTRqKJrha7YUKLDheVsDH2kagAzNxQ3K5LRGPHXptqaavgHhW",
  "key9": "34cxFdccseXv2S5TfRhgXhKkrchngZTahwLjxEgF42vZktV2PY5CRzBKH9oVPPZyevMLCJtkzyJXBx7drsK7PWRp",
  "key10": "3fz4xvUCxBuznruDWkjT5eUmjba14AGFdyiYiJXKa1bmJgFkcW41bkGhrvaWADXDtwVR2MPbB1wpv1VgKXQ1hvDn",
  "key11": "2h1Lt6pbScSqa5JZeBeiHnEkvfMZQZyt54sFjNt91TDvfZeYPWZZfJ9LopXGyugdBMZVMgBHEjxg1zvMpeDJUD3Q",
  "key12": "2ni3Da8qHEy7y1AkfaVbcm5gjPUjzCGFpbqCWHX9PGAMxvGrA78TaXBNBZymtcPWMaT5nseVTf8VEBimp56Tzqzy",
  "key13": "4PsFYvGeqheCk2b38gk92BYqHhd8JS9t6gM1pi3UjgKgkgE2jDXMUsUhBePKwmVDNrhBvwd9qoJo63okZzd6SPnn",
  "key14": "5iehgczMrZAwNQYZoK9aFJWY5BdN8gn6i3pCq6vFyjLUFaWFnYLu6H3wUFz4hGyhiDrLdkSKQ4i7fMU4xxqvCtGq",
  "key15": "2HN4jU3cSQDQtKSFjFu9XZXmkZiCY89HFrb1QCPkyw5t4MK5rSnZmSH9avC5HQFS8xbjH5XwNyz8P7xjxGknneW",
  "key16": "48dQ927iowJXL98FMqc3NsXw7Qrp4Z8mdtNmCgcgxCM8xrgUGWaLQc4u1Q72TXJsFx3XQXfktERptLsVPb614W3i",
  "key17": "4CvUkMRbTkJtvLQEVJFwKKPUJCxixG7VonDGVot8zB5RpmFwwRsaoPfBFKMVaRmdzQ3LhGsaEdSMLXKv1fNHXsZo",
  "key18": "3y8zKE29XYwpDLR2L5X8igo24wZ3RsKBmyCaEH73WUcnn62G1brCnVN8SEhYsNhDhrjAUmwFEu6SDxw28dT91zHs",
  "key19": "4c5Srj7H6LRUj5oXMfrPH4aWon28GaZRWWNF1g6G9JPEa4iajeDR71YYBqU3sGrJjvEEfiE4jBPMYdEFJdDBc8FA",
  "key20": "3drKo5XTs3yR6QCDUuNzLQap13vsJPQWHytKoCx4juwETucm9u1EJsXyx3hhoJWimMHGg4b44beyA1Rg9jEKBfeU",
  "key21": "3X8hqnFTtUkVKH9UmfXwLheiSrxASFbonUdVthBYPkXX6uEDtaGzBVdn1WkNCY45xej5n1wEAoUmRsgTuCGPGy8R",
  "key22": "2Xy4qEsJ8AHMUwBFjnwN9QboDE1SyF82JYoh2z2oLkQV8L7ZY9X96Am9uKkFJtpcouiYjLQ7yA9YQDQrS44WYSgM",
  "key23": "MLCcNrzp9retcRHsiLz6N8s5QrZqPv3QnBGGDrQssPxHEkXqYU3zXGnmtVQwhJ6aX7YoYhB99jqyzUGojbb94jH",
  "key24": "5KnAdLNj5DTA6LSyHG9rbR2NvZRDZ6uLawfwv9qxLL53T5nr9wdqhjEEvyzDV98pHS2ADQVj7JixjU3xyBzaeYQk",
  "key25": "2zd5daUcbtxFQHWKehu2muoCX4dE7gzWqycP3UQoFouhWV6kmHGXiHqkL8N1Rhk4EDwEkjm9psLtkWixiom9iSQX",
  "key26": "62pU56tfFDBJ5Dvobm9QjuKB2atNuWHPeKzmMScRz4YdN45XjQ9heUE9ZWB2ink6Qw5csGjVrVLeou2WF7mUc3dq",
  "key27": "4bfEkpZSEHJzzFUaN77kDJ1aAYisstmEpJ7QeS3R3cowKDhnPyJvRwRB1B6qEhNtnMdUYdnWF2sWUfnEU7S3ps2j",
  "key28": "3YjKyJUYaFUi22g54vfAdj8vhEfgMmdAEJnTBF8Hswu88wv7vUYdgVntDp1zP1wwaMibZfVphfdmTXedscCSXNsd",
  "key29": "5J2ANBph54WQHs8CVhxpAbtVZG92eajZW6vZUYTcESJ8C6ybepW7rgMk1kQwY82a1iATNgECxLLWop8Xph6V4uAn",
  "key30": "4bscBhqEwFzLmotTvUz84sQCToBQ3FVKmSFPqdmH2KRufx1n6XoTWSMt3eE9FXZBmurw2aSgyf5Kt7xiNQq3pCxd",
  "key31": "25jvydYKCwbvkf491H2JjTj3pDkKv6oFUWoriXvAm5tk7EtrEo2CnTwC9qvjwTcUWt8Qte8LZ3mqNn3Gim35NT32",
  "key32": "2C3f4ZbBJ1xeLsAxx1V7e6aqRdvydt9dGdpXYE8NBq9VaqSDe9FW7enKpKYm4BeA3Xf4ge5TEXVpaXiVctcRTD8Y",
  "key33": "432VTfybQaNUCpZMbJLhFTDg8vWQbDqNdp31CUM8ds35e8d3LsGVzfvMm6b2harq6hc6M54Q2f4pnze7cc9P3kbR",
  "key34": "4BxWLn6sHaM9B718bybUf4eYQwr7uNWNCqYXLCDfGvfYe39QDKpfJXjE1zoTf4URDVkmjTc7K4sh4zdKvR6CPDg4",
  "key35": "ndUs6DznsuDb5h1tfGmcNR2jZAyv4oa7ygr4uehdN5TS8WfG83y9fkABKN4jdZcxLqpAhLKPbBo77Fj2pgBB8RL",
  "key36": "5owVT9d996TaRoKiqEqgmiSunJmEG8iHnXrtEotwSPp4rxYzVepjihMGzKjcwDnJJ9CdGg57Tc4TRMA6eVTke71x",
  "key37": "2Aa1QYGoNHNDe3EpsZrkGuA8SuqzjZaH3CwTXhPgZp7wyna1pBxze8JQ7UCwhFZ3Zhxxiz6ER5VXyRNC9uSquDKi",
  "key38": "2wF5EBCgsMmzVaNQ4nESM4xaUCNAMt8y1iTFfs6NEi9pP34sK8RxRd9TAKhWBG8arq7TFpVLBs3ADqucdT1nAauH",
  "key39": "2vmu19fAwrNqnRcxpsPYDT5GFyPzgUZX9nESMCP89szfgCSkXtVuQyR1rdha8Kt7VujVfrPzwtJCCBsq55DQKeMj",
  "key40": "2BirEX3MYL1wYySgMhfn95QZLF4TJra4orZ4CSumA4L4oMoHNi5EJpyZ8e1FrLdUbR9orVuCroF7LjaMGgUt4cxR",
  "key41": "5NaC74sbxgquPpTih2cp46uTTsk4MvhrkqYfgAtsndpUUdavRHUieq4rW1x2wfDVrUdM3WfWitBWenDehFXvYcrB",
  "key42": "2cqxgtp5NeuULnuChdkjJNxZf9xmaxuNFZjb6PZ4xdUCL3ictE4uf7GgvJfYjs1vZEYv3RxMhGisfuK1ZdM8WjMZ",
  "key43": "31CVTePE9jtQaDg12c8rBG2DFJ5feVwmkFfVHnP9LoLRbwNomcCuGckU8XvLmkpTFWZQC1q8ykPWPC5RTw7KDPuH",
  "key44": "5Jijzcige5oNzM2qsGvah5cArahPh1hatBDYqGRxqiVYuHwRxrkdMxENcBF6yMPEcSxAL7uHfYBCjYbAte25jfj5",
  "key45": "4v9t4ScewzFZTxD9voMp7TDTFXy7JaRWB8TdQ17UB5NSTCzv8pVgFZ4PaB6FXPQt8ecx2Re9nzfsHqqx8FRBQoEh",
  "key46": "41TBUU3uGDNNFv7XQyXH3RSkoLcJFuzNsYFEqPJiyoLm5LyAJZpivcUmmXhopxZ4jBD1J3Mgs8Urn1oZFudYqKmf"
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

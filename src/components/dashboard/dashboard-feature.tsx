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
    "4WywdTb6bAzExWgAuRfYT6vGn6duKXWYJzvM3B2yHMfcJUpNKFQWMSJVYePwpHQ89EyxopFtFx1a5KNTb8GuL97X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BhMkU1HMdk4ZwQaQsDmHUCaEy6BuMKnsDUfGmqwFKL7jYgdaHDMqJbhQj3D7ZMS17vtoF5oLfhPaHVxZVb32tue",
  "key1": "2KhPrMQYquPF9RuJdNm9zwvMyDC1mnCGrx7KgV3wzMcd59pSEhVwPnDJJ6KzVN2QxcnhhC8maHSK8Gae1tWvDjVr",
  "key2": "38iS2ZxeD2bg99asUF1BxUrMmrgRrvXAtGKimjmFE5ZJbCq4BXDTYC62x8RRML8AoU9qLLQcCqQsZpQUds68YYED",
  "key3": "4aAanL8GwsC28WfDdGbFz2kJ1kuzUWQJiNgtfvbzpWzC4NiJSwh9pV1HPk1t7jdiuRv3rPqzhXSBBpSWymaYC7bw",
  "key4": "5hk1Xm8hPkm3gGkiTzoWKrrrQWmimHqhaoxvKDWALmCzNsTvosSC9nRcKcryKSG2cArk3DS8nJhT539Ufwq5f9My",
  "key5": "5MEapGJCU87LLYbJTLuLMhUBXPjWKCzW622RUV77fNDDot2GQVnecLocTBm5Ri2UyczkBk8gJk11Wngb9iKEWT9b",
  "key6": "5MkK1Y7Ejx2Y8cE9H4RGsXgbC14GzC3w1GHmAxEzEzY2HytxsayCp98hqdPJETyq8FTFxeGtmSEbZLAc5uwygq3",
  "key7": "5MHbSG8nXWrk8FyioZWUqs8QxqcUQiiVxCzWy7qonqTmdQSGyBTYRoVJa97u73jWu6vz8kyGg49zJESD2qS4dVAL",
  "key8": "2L1BfKa5HKB8eTisaGj1YHrYJTPMiaPoytZWaQ3wYyXjQBaexLnLugmD2UJfLC64iDUGYef2UexkMhLVKirk4MUK",
  "key9": "xLbBKrYSFUnQMiqffwzY7oDKvLEZfm8xmNzUnCE78DmdNHQQBrD6vxBiKsg1EFwttPY28ffvfQhP8MDApnifJra",
  "key10": "62NynrLW6VAP3zvFJaTDo4KLEzKCf5iPdoTgkgnqKGJxSrEvRL6MaqTR7QaMxWfURZEjaiL8s4PRm7S1YMfeGvyD",
  "key11": "2piy4RhfKZoQsnPZAYZwTYeQP4wpBz3hZzUfGS6MvgoqoMoZBndioCKdbq3Yoy4EL5UZG6EUwrHpj2Wo7kZFQkTQ",
  "key12": "2Drg7mN97ZjtgMatCzgKLu7EaH3UTMc6aDeXYC12Lxszn5VLLWZzj6fX417NNY5uJMYeKEd4bseWh5aLkVmYaBkM",
  "key13": "2sYAY7qoFmL2LP8bjXtFLpVLeE96xhas7zoJSQuZe1f4iaxybLUbjjnEteXZ4wnMLLC2sofQzJcon6TyK2BzSqGo",
  "key14": "3astNRQWGoUv25xqz9EmXp3NWr7GzqGcaey8amaqzz6x3zRfzoeh17CwajnaShpPQUzFL7JKW13r8vJc6m6ZgMct",
  "key15": "w66XpuSit9MkUzQgXCy5WNrEQ5hm3paopTbRZTW84osSUH6n8gV1gPNR8PpuCB8YYHvdmuGtNFTYYQoxaXmGoSj",
  "key16": "5kSq3b9GLAGAMi4kFujB99ZaMdWxupJP65meTbpdkqQmYFRvvU5yqQJNpvrfSQSdCuDm4vjCgQF2jgue6CytBk1V",
  "key17": "ugGRxvqwpKm4PknBE95rvhZb3mcgRvBBAWi9huZbdVbSTZNVHc36LFCsNuwD25S1WwTny5XDRsE8qJKZ2nuomvz",
  "key18": "2GYBCPaXEkJ6yo7zkb1ex14QEC1szMFdFS4CCbs5hWPZGYFjD2RUXiBzoS7RNnR3FaE9r73BX5rXkQsiEtP9kMrg",
  "key19": "P3hd4sH5voKf51AmAhSsahMRottpdqr8wjCZ6AEEmcw5FhurWQiz5HRtkwhUWrtZMtYmoFG2KDtW3ouCGxgnSVE",
  "key20": "2vq4iQQuSf9G2iKT6kFf7eicnGQZ9PsLTrsdMdqmw9TF2ThyauRMKLw62FxJYjdPy3Qj21RavQR44UufybBB8gFE",
  "key21": "2pAxoLcUP8153pbghPHyaz1w8jFo7CyRkSnJgJPetrVQ28xpW6xn1PbJqgrvDK7TEKV4Shk4pe5NkisdQy1EdagL",
  "key22": "2X25bQ3zjX8ZjFm9oEKXCvbyeAQpHKW4XjijywESfPK35JHPobFZyBRaZ5Ep3QJgn5ifD3mfYbGTmyvm3K5a7x6A",
  "key23": "5wCBbnxKKN1LFfJu1dTFgWmdzrYuDkZowYWAqoZS2Tq4x1DDUKhz71MsYXYBAeVY15oKWHUJyacMzhUHciSkc1eX",
  "key24": "2XoBnekdiEdkT2FdrKSCJECGgLV58C1hoH2tiWNVjuRxEQmaD8J3fVJitAH2NYZhKxkMz5X9p6vFcxGK2o1w5ZRe",
  "key25": "41dXfHVbDQeDNnhi5RTCgBtPteo55M2KzJ2B2hLfersp3vaWEwgXpDnArcXXAo12LbbYrq19VhWAbeSbydzQqiJ",
  "key26": "5ZhdiYrVsBfUCezQ5Ttkb3hgmnzYMZ2cAJFp1QQvWR6Cvp9YuN5ERPXd5XA1ybZf1SFcHtsdbY2AU4HEBu2sdBwK",
  "key27": "5pW62bDxsJuTyiFiv2ptnhsDEo4GDJczCcD5eFvCCQ8sJZnxuWok1ytaEz68P11PbcpDywqyjgVqrGcFoszD9bHt",
  "key28": "gZXPnrWaNcYgnJzafcuVf4aLQGJM2vX3H7eAvkmCt6v4kbJSPWHuYh9fAzRMvtwD5i7riEpmjjGyvixY1mcrYjt",
  "key29": "4282vF7mmQ1haDrLDL2EBDWYs7ca6qnibTPADt1tBh1tXKKUhaFqoHYFXQV8ftbL5nqgt8gVwWLzxSwofxxpTPuF",
  "key30": "8BDKZyKHosZRbsUEi17ArcF8vN4TATqyTSPqdHuePeUbgSnEsQcncHkDzskexatBZ8mBHQU2KC96eWvr5EpQ4oA",
  "key31": "5nbDPLLm8vP3Ucv3zyZjhUT2DHFFnXoNyHM8Cee9PYVT3PyJDEf9kiBLJZtxDCHDXfPfCs61at9sf17BBNNUo9q",
  "key32": "2GniyzxPnNGqozW6FLo1XkwcQ7hATBTePTrKvdvGk9TC5Y3VCjWhUpSAuN3xToAM9Q5fd1R6RS1hk4EddezKwcdt",
  "key33": "5kDatcij3UsULWMnAghqS18uLtc4bCU7pXb5E3hnAaVZb1AmAp9nbeNmWeW95gUAD9Da6khmRtvDVc3o8w4udhtM",
  "key34": "5HrtYcP1WiYFKSNNMctmg3as8UdNFA1cibGJovqHWyrYGR5c2dhi1bF8BozeUEgFQdhvKUoYxNJTxrDgrTewsirT",
  "key35": "5HSzg3uXXo5u1pgGbdXUwGdPerpkVHS4VVxCjB7dU2r3xoyk8qGEgzVSRwDc8ASwUTCAJuoEKhov7ZVdsNcUTguJ",
  "key36": "3UcLumPZ667JcoegXyqdPGHBYEefR4GRiBX5E7CE7k4FgRTt9vaPX2my4Yo2jDidjH3V8GdTWTEEh1feSbXZh3fx",
  "key37": "2YQAEiDX4DrA7suRCRZftJfaXNY65Gmm6dECbEP8VjZRmj2vrKqyhWRzLcDt2Qj2asE37wGkLExrKgALaXfq5M46",
  "key38": "4NUmjYyqU2Xa6T5BannQY5ALj9QMR4Xf6xsap8Sz62KPatwW94S1M5hLsJbdYePBnvSio4TzmVzEo5zyYLtX3NMq",
  "key39": "tSCoMP2tR7jEQ6hKHzwkgmjQxA9uK6MwxFWQfwTSh3QsWVRYT85UkRH212WncrhEtxzCqozwb44oifAPLB5WWed",
  "key40": "2zbycseXJnxfxgxZ5hHNYRV4PMYW85u5ALwJLpY6YjkKQCfQ4LqkyNSQP73dZwUvq8pKc6sJkyTZzEeafum2mss3",
  "key41": "25FoCKT7xSQmRiTefQhTFZEFNHrnufXq4pg6b2hiB9canCbqHgALbgcc2r86SxcSkQkdKxbkdGhQqzHKVi8V2haQ",
  "key42": "3mHMaEAbf3uiJtpyCVWSNwwZTY5PZ3Vse1bt8vKthP3k8xEgpgxVcf6LmUSqJee7QqvixwEGeHeRfiyswApr3ncs",
  "key43": "4fBbT1phLpr5wNeuJx4198DarUGQqWt8ATmpLdUtJ5tpHHEHmdDhWmUkLTT4JTbUrYFk2yY94vM9JGCa69CWHmCE",
  "key44": "3fy2CYPjCDm4j1xC5pGdnTWzvRJmZnfdVYY9HpGNu8E3fMo1FJ3mBLnQyQ95vz4EE4eDzujY2J4c4BqHo4b8pJbw",
  "key45": "5Y74H8aYTxoncvGLg42dj4UieZtgYV4ZrkisLywwrRfGKJGFLUEhqpLBTbWrFquTsg4jjWSsj5QM6o8MSkhkLwuK",
  "key46": "iHNL95ySXcDA2UAizowprv55ttUp9xSvNhQBXBi6myLcQkjNH1iN7irYZKep2NATMKLrUPvd5v5DKFXHS3J9yxG",
  "key47": "2NFimm32HQo4bKAhxkPV9cMkn8e64yduDz2UfH7yzBKyY75aaej9xHrNEKU1KAjWSgfhxckarspdEtTPBj1CRdbi",
  "key48": "2JfdSXSKgdsqD6Bdjd8EcsatRJPvaCdc7B2CofRycr46oapVmZUbxhRpXjWS4DeXe5UDaBh3q8zTUh9PbNCfw4Bh"
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

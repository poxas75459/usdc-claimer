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
    "61K4eVZEuYywrDyXYvJzFn8MKFkUtofjYmSnShujvjVdUE7V89rS1GRSijuDLFoGsz5QixVBYLLGvx4oiyuYUiB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VG9TS6MDkXMaQ1rA696R7t8BX6Q1ZtwsFhBtKqbeJKuqDSVjfRLxkhm1k6YkRHKiATWfeCoZy4t9tU9T52GNoX",
  "key1": "25Ttp1dssBeotEWkt5zswcNM6CRuouZ4o3F9NrYQy99Fz1oZrL1n4JE8fwiGqCne8JDA5Qn6BzmvTsRY3qcnfCCY",
  "key2": "4kBcdzfdC9kPAD4RhwtnCcjoX56TQ8crzikUEdFXXgtFdpQ2wYBu8HtDVzeRQWRoEwrL1VbJuZRdjDPAvhshwoBb",
  "key3": "2rdT2p4CmUAHnmfKBDnvYA6PYuzd9MaYdRhXHeRNr149M9iqfG4uiRESAawE13tkfCZgPvjqBQvMxExvxpqtSu9F",
  "key4": "3MhUPUedmGZjV8XYykmkrCcX39nNajiYKfeksWJ1Pw2Eyj1vWtEymHWEBTXrkGfArHTQo7t6ivAL1nSHpQZCRUCm",
  "key5": "BiynoAUtLtg4D3NcRxv3Pi4S91ZQc8T5mmaZQBq23cijvAPw1gcs8Z65do7PLNPJPWCV72uLeN6Rx12wx296XiM",
  "key6": "Y3iSXrnRXJ85oiNEnZ9NRTPewmqcLD6ad65iJZtXV3vW6oLUK5k18kNnCRY4hDxQyEmUm484JdzPC2bKHCopb5c",
  "key7": "4BWVxxJ7YzTLLQPRYLC62vkdZQkLskypgpmQfVpzDfEhRJRA8VjfgSaWbNkXB7ssT39TBt1UB4SbZU8H1PdR2FX1",
  "key8": "4Mvbybisui3SUkd2khnFyz36nUpsNx2cJg9Nk2aCHRj4zNvQrpoJo9yRQMsWLUaPq85EV6qvtk3hKPPr1DagzB4f",
  "key9": "4mK8gwoAGK8fdscgiSGUYGfd9KPEYZNuRWrJhq9eXC9QYTGwF1BB7WzJmUjYfba1uWk2BHKtQ9nMdBFwNvq9DGyy",
  "key10": "2KqHP316hagXbwBZ6CqyadWT7rytXQnr2SmV2DVeXsaLgzLnXDbTdy4pXtcDYvUqqsZrMVre4kaV83NYYkbmR84y",
  "key11": "4ozdyU1dZRRAPT6YmQ4i7y7T58VH29jVnJAyDbwKvw4uZZFZXc3Sf8ApKTRCcjmLv8oiA74iyU7WvZw4EDfDMe6F",
  "key12": "5TUUNQWtvF5nnncgNMKZt7kXVVjkWr2dyEBNcP2BYawEQYccHwB8aQJMND96GjLb1UY7omBY44kRMtcYN3d2ZUMA",
  "key13": "2RWrLWL9KhRWk8XqeKeogkWo8iApss4NUundTBZofzLGTprzmhNfoP8gBnbLQRQxUwitkowqzr8Kd5JYRgTjv7m4",
  "key14": "2ezuHfNnQovqCAKQ271DNGrna2Bh8GpFU7watcSCeYCPoG3VjcyJuXGG9uZLXrJHTqb5tRLcFAthWBYfELwurk5R",
  "key15": "44CRj2yN46kmiZmhsM5rZM2eWXxdguKJUuWGRK36xQb9f47TEhNuePF64kGtsv4ZN5QYxMycHCBSdoCnhsg5RKbe",
  "key16": "3uZ3em8pKiohvFZD5LaEWUVUdKwyumiyiQasgG3xm8p1WLyLBLxXTJypBaJcMUNwPmVTEuLbzS8UADydTmspSL66",
  "key17": "3giSkApBR7dgCUSnWELkrfCok75mFNiZY3J8rbuYa4D9zTFhAdQNBY3JVeBFwGZ6NWHAzayqh9HqR2otANeMp7Rp",
  "key18": "5ri3skdN284AgtaaqmDiZHUE8vheLgPjDdnrhxXPcnTd1pQL9RzviukPZJMtNLdo7D4GdSzYJEow476RQb3aWj58",
  "key19": "5shADTEg2JDfcd6RJwvKZtqx45bU1ScPQ86nq7ZjogYgNh7RXKnihXGqc8ZSXYWDuMCTvMmq9bTZLNkaDtn83FEW",
  "key20": "BcrSRksnF9PSCRadVtYV1gFmvJsYgqETeFYa7wk7LnELWsvZAdxk5mUkjGvGb2PQ8utUQ62werd9cPHB9EfFhT1",
  "key21": "3DJYhwLpfViXW5nSx844BtG8QdoaQdv8n7AZNuptP8viKcFV1XrFWMTDLtcf3tjY8LNFc21esve4kzxhh9BhpZqT",
  "key22": "3aEtazWE4WVsU3sR7oirxEJCyubYP2LZ6LqTx718bZzVSnh2FjhVqqUrr3RqzHMGxYan8wncrZeCcu9RzJg3nNfB",
  "key23": "5p6uNPsvLpciZrbAh4KTe8dACccEHi1zGuwsc2MJWhRNpHjGjkmmQUb7oaT7KADJvNwUmW75FhCUCajrCwZU89t7",
  "key24": "6z6ouM73zZyr51kzK7Qm6r1P7faTiqpGGA7j1nK4CiryZLQgmG7pypnxfhgqRdByL1tyioDNGdVMzAWbCtQ8fRa",
  "key25": "5ppsmTERv3uBRPM7HnfcSosrYewLJEZu3aFWGvDGbAar2k9s6AxBqH943kMKE88GhRyneA7wTeRN24WrMGwmq5fd",
  "key26": "5hjvVqRJM9JciT9TwH2n6cGxBikrapSCGuAjC5WmyRZ3c715vrdGaL2kfvFgZMRGeToJc5K8soJSXzrHEcRk7Qn9",
  "key27": "FFtKoF8JtaMhwHJojkgM6W4CMKPFTckcNzae8fUsPnAoyBNoDfE8FfZJSnKrAHdNybAGzoGGKUwQUCsSnUU4oun",
  "key28": "3wAwGJ8FjaRpRDTucFXu8vftsT2tr4zRWiRKs5WWGAsg4q4FyWXRw6Nhubnnd3x8oz9Xjgv8kSGdLazELVX1zdmX",
  "key29": "2XuRSikQVDsxjeknUsH5Ei7RbR8zhaY95ktC8zFhXGSuYvYiwBbigeAuEpbR834YDmzcXGkKMzvAVke3niuwjKor",
  "key30": "2Qf6sf1efeaeZ4dBPg5iLn5fXUJNhEMeVtR1MPGPkAEQdAtbw4xnjdgRJTfrCjatJue8oEzcdTwzfLW4nwZ3hCBt",
  "key31": "5rbxEqSpN2hSvWc2FotoQdrrXKfiJEiFaYMoxWJufPXeuPqH9ep9BMVH7Fon7NjzWehoPeGHKRZTBFNbZ6r9jDN9",
  "key32": "2UB5Wf9Q8dygDbfbqq1ajBw3CQV9ARZjWeyQUP3S9Fio6G9QzBsExeWKzaFRaC8vZvbnNn34YdZTbk4ApXihrWDn",
  "key33": "62YqaRpb8L94VXwpNFuBRcMhdNkgBYHMz1Ufs492ysrWTZKfk9ZUJ9dvugvAJybC5jaS9sCYTJ7V31LQuZKstYPr",
  "key34": "34Mzg1NjSM7Kg39mjXr2eC7u8k5xncp3RNtiFNtW8SC73p3MqHCD1KXJsd3CXpfBSRqippM2N2GAXt3sPKNzwioE"
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

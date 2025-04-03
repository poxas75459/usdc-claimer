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
    "33NAHYHzs5s5EtTVmSVbL8g1FNpqg7jdmtJKbRQCQA6Wun8Z5VitVChhhwReHx8p65WvkEMhGoVG4q1wXzYSwnqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z81uQ8r5uQtCHZpurFmNUbqbBfNn78LgWY4ovsRtMVhw4ZWxqWP5UUNbxBwXm3WnyhYPCdfrD4STtnAYtdxx5iq",
  "key1": "CceoDTDPkudehvPCA5xr5HsPFrcwYZHfGNBdXEF96CjNKXraLN7XZM9EceDDCgrtsVCF1qfyiFmUYysjyshfBAo",
  "key2": "43qes6Fs2e4RAv2X3RCb9zqKtGds9HxRaiRajyjc1kwKSjas5QW3Qqs1ozHNcqc2yAiDDZNLypKRiRSjAiN7maMz",
  "key3": "4JDj3CunjF8wyiFYV3BjEU11c16pmetN9TFZ3ZCB7VXo2fkhXtidcWxHUn4FteQfPU28N23nULjc9YCCsWoZLhqc",
  "key4": "488AbZ7ehkJcqaCnFso573FbpKAxEhAQvQ5btxduminwBVdy9PeVPnAxbRGM3d7paMD1XfRqPUhUjDWmWwWB1kyj",
  "key5": "2ARszzdQFUjhdZVk63PwBc55sxhSAMUon2oZ81C35hR9se2ZovgWyumsVRcaWg7bZcfTtwxaNjGA5f4N1figrwVg",
  "key6": "327n5Qg6yKGczHpcz95yG9GPkwWTavcr7uouAVkNP5wfN4BiL4McDw411NFJy8M3Noy6Jib2mDqncyCmjPy55psG",
  "key7": "3LRg8MDy5m798L6PBkCKUUUBQaj5cyab5bKnCrLsCKakv9aCMXTCaX1dWJwZMrEu3ZvkEhDcRzUc5o3gz7osiQ5W",
  "key8": "4CtTqsU6knBN6U8U4Yos7CUJEzYj47c58PMx3q6CbrDokDC6ogPn67qq3RFQQGTNKFNo1yE8j5PEYrPe4cZMQdyH",
  "key9": "5bmTeUTzvU3cW875zzTdHRSnuVWKVvTdgc3wWpdUVnZeyLw6nbf5Tm1BixqjMYJakomQvy96RVo87fn7LwWaGxQH",
  "key10": "K2WyJ62ct4s7EybDetVfobL7Qd3rLRgwZWEEXF2wXq13BZUpuuZKdS75mAQbjABYnCLE3fS6ZLHeTNKswAgWcDk",
  "key11": "bwEpXR1xRcZaFqkwf6TS5LHDoBmWt6QmgFG7J8Q5KeKvGjKQ5PRU9d6tHLYMFDCNQJy79GLN7KbcNAsWoSPsZhs",
  "key12": "5ZyNJHCWRUUKv1T2fsoRM5Ux76U6t9xPuXF89gSnfmxfzYV7soZ6mkzHCXZuxzpkscDPjQX4qghC9w8EorsSnB2G",
  "key13": "2izg2Tx62bPzb1kNNNsxS4uYZx5XwtEzFYn6jUzCASHby4PKuZ5FW9nqVjAr447w6z5mjoS2YdSmfSiMu1KctLKK",
  "key14": "3rvhF7RN75ip2HX1AgDPpp3rb8ythVwf4nY9m6Z6fEova76F6HX2bkdYPw4WPokM7FtbU2iPACVYAAAp2GTWzsWN",
  "key15": "3dJFK1S4zhYTZUfLjw5uYo2AnmcipJ2FcFMBcxjQpXDsUQdAQDiM2Hu7bLouXDa41MhbBCGsqSrEGtDqZps6NZxP",
  "key16": "3A5ge7rkCpxoAnbV56wwm2zHkJEECSiFFmW3jtexYUSSXKRsQyzASRbZm9maSp1CwUE9jCEsLvniEQMxWJdJSR5G",
  "key17": "56BeWWEEue7MLAcEWG1cguQDbYotProgsEmEkRhKMdqAXmiPgN6ggCLbaR6wstKg9Mqfy5kbDaSPGKBY977VysNK",
  "key18": "4w6cA4AFPGaLWjTQMdZKaRCdjWzkuMGwykPaU381wJKC5fhSMxEyqvdLCpepn9XRvToJcj1hqq3MjoAYQCyP5M9T",
  "key19": "bnGwGtwW1QThrgUuTeFY8omDmiwBMAPZrWt3z6Zo8o75VzAFyKiZXcL8qb5sU6P13AEm77kEHRXXYCT8YBWFdmh",
  "key20": "2Mwwn2XE8pSHiTX3ZxZAPjxsVsXF5BnmaHgY8KeeYdGdzLchWrqju5uCYG2sduAGyZ6riLTLcVxYszZXAsfknzdy",
  "key21": "3EpEtAD4UDnDX4aoLWovHD992UT6SZXdxc1bfBkfnycddVqLPjTzsRgiHZjJQfbv4tijQmEoKxvWenYALfQucDYE",
  "key22": "5X4zov6X4rvb494YcJZ4rkHZ38cm1arhXZnVW2ierzEVvenj5djJ6QamGVNwFBb3b1pJ8EENzacZ8r8jKuF7fHHF",
  "key23": "2HDJ9chhqytSzCoAj19GGQmrf3P23FLD2HC2UQHE1u2iHdQ4AoExAiDSEkE1Z7bnRsd55oAhD7QJGCyeGfZEaATX",
  "key24": "2XREWyCyC2fJzp6PevjTJZa15KghUmrr4wcyC42NkmGd7pefxgPAYnwX4KCXJJeK8q6VtXcXYNsukiqaMDYDWiv9",
  "key25": "2u3KgrYgwQqKKN4dRUyD6sfNy7ZACRa3gpuG8M6PEtzoQTjrPkHVksH75sDDGpknKq8zdWcic6bWXCMr9iso73JX",
  "key26": "3AvYDnpn7QQZwTAzvK5eBvT1ePMJNNDAYtJ1fZ3K2V6HCUCs8uaAuTro1M5mNkdvA5u2NH4S1SDLG8NQ6nWsYErt",
  "key27": "S556yWayvcQggXoQWNWrMZgyrxEB8Yc6tPc5q5fr6cDCqLdH95tk6VDYLqMV8DgipPV2H9D7xtLhv7KoeQuKpvZ",
  "key28": "gfghH2zGY1xFxR9nxW9hxdrgYmTCTS1GPZfEuyHqaF23d9WKzb1dZgLBQSzdCij3aezBcPZv2tDrw6F2gZQyxG2",
  "key29": "5GJo6qfMxPoVqmmhzxtEfmuvG2f346Mg4Cy3umEivkie28otGgtBE54nbyeErea579GKUmLFc3zUCERXhV4EyWGV",
  "key30": "4UuxjFosSt3khFbqs5bzbhDPCDNx2CmMuRBXATTtn6nQMfCHh36RR8syRUNsDSRdrgYfEgs9zMaDuEk7Yf1hJikc",
  "key31": "4CW4XGgXR47sx3ZKy4BqpUvs63gAceqmjZtgDfc7mkExNgWRNK75aKCrXVxtoHPEvTG2iZ1PfEfiQ5AELrUBDxRy",
  "key32": "4ZbTJgEbXQxYmBpR2JYkxp62FQ56Z9WuiyZadxeQz7FdS88LYqPuadRRttqzB56zzfGyjP7tV7TwQHqJ8iWC6Kd",
  "key33": "4aSyS1uTzxVwFWMCY2fawoAmQXSRWd6xrLAMi82JHWjmNhM6RwN44buNm9gojYNX3LkBCxp9tQjmEUsStwUNKQHH",
  "key34": "4bJcCLCYy8ZWor1U9MHZvaZCLiSspTirRXpA3RMWwozskZ7TveoA3uzr6fFwGgwkYkPF1xjFtsrQF5dnffZC8aXw",
  "key35": "35hR693GSMu6FovUFvjedmcRDfJbjeiFHrq1U9rbkdcrrMnPzPp1rXHd7g92KpdQuStYGD9yGuA31SZhaFhmoQmg",
  "key36": "krhAzZEcG4PHBmm3Q1VWj5NqTfvGjb4LMZgfdyjPJxrad8Sf7wW7iZvGqCg6CYJGa37GhT9aTFUpEvXu5bGLVFQ",
  "key37": "4TAPdHr59MSWp5dWY3QqgxSWT9K3Q95pq5Pz4ok73NDJQKthQiBPpRjYCSK1z3NCgzotsxgHYBSXTm49ukcUxqa9",
  "key38": "61RtsUZfKwAuAJCa4CCnjjCo8tU5uagiEMkhFiq7oPNBLaCXmybpSjfBc3EfHb8KFTnTFzswoTrjEKY2YzxHJuCG",
  "key39": "hLFvRyfLptChPDYGvcuMMffTh2uvzyY8yjon9pHYn4U67Y6FmFmKPsmArGQW3qvp1Fr6ouQaoxZdvwwVHNquXjA",
  "key40": "5AMyVgSzwKwddQpHz7TKbgFDVNrgL9YfBSXwJZaAMh8zG1QeRtBSKuSoGCbw9osMseW8wGvE3o3kv4FBDkHSj6Kx",
  "key41": "4zyGWgKbZKBdZ9CmCAG5oCjrVwjSGJVuBdULZ4WppZewEUd3Njo64L5csuw5Nt2X7Ye53otufdnNQzSdHda8GPL5",
  "key42": "34vE681vsi98thxnSbA36sq4g78EtAeMnF2XpH6NcUYvpbuVFKAUaEeKM4MeKbBK2B2bCWQ64xaXC7aGsgMwSMgs",
  "key43": "2E4hByiWw962LJeS6jUkNYKhMkwXd6cXeXp1ry9YggB4gQgtKxzuDSmWpVwHmAH8wxx18jqvn9cVa1LwpYEhEYb7",
  "key44": "JXUw4FfNQSJ9DsH18pqBHNN2LkiNyFzspb7jCrqNdr6jU8nC4dLgkJKLLLnDjXTpBnYG4HGGFK6752AvFZ9Gop3"
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

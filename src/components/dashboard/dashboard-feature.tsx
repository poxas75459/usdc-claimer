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
    "2se2SCAPS9icSgFx3TiVhwYyYHX5N5x9XjNBdSpD1ZwV6FKx3PZnVT8PF7VEYzucaEmy8fbUSy8gntwDJV5WmLhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2s9rPU9ivZYuxteD4gxbCpQE2yMPDcnujpvoyrnNhU4dCoDrwhnzMTR8fw3Q7q2xL2Sz5qhZRTGZL2g3uzF6qk",
  "key1": "595JFVa6KXeU7eyATDg3fzSMQ9Dvkc6bi6QJhCssHoaGBACV3UD5dGG7mHkdj8kEdmrpnYBAwsXtFnQPC3gjojHx",
  "key2": "2H2N2fR3ocRDVWNSXDYVtoT6ZcqrvFW9YAEGUVEoyHqKAxvW4DofcQsjaonMnffykpZ8C9NN1YmR3dubL4knnraT",
  "key3": "3Rj74Ww5ZXD8Ji892FLKTH4jTuz2ZEweY9S6DuBCHLp7TnvERYxbXNhnFNuVm8fbzawmaVqz54c2JDQuik7njawk",
  "key4": "2GYqDNvQxiDYSfRx3SBh9D33Bc2pT3WrAC9fHLrrYVHkaK1dEFEt8r45gLVfeTqMgpTxuLGa3Ak7V3U1m8taHgdj",
  "key5": "3muvTChGTn9zdnw9JtJoajzooYiuTBZ2HBmSZYz4Pum8Tt6a1SzhQVKDMJf5SQaTYdR52uo2hjbtqnvHR14kGeW7",
  "key6": "4GiucXoSzezQ4Gg258bxJtVzXVH5wfHJ7K1wJGu4ngLKVW6obBCS1oJPtsoBAWuhqTFiXARi9iYJF8LFZLZwrbGg",
  "key7": "4wdMGwKjK7PJMjumSkWC5JknRvG5JCghW1fBmfSLAadG4n36Md1VN7643CJQ9ZpiqJDydprHnjD4ZgwEjxhUFGBU",
  "key8": "225fpSpk7tsfJZicLFszdTo32Tn9NrNPddqComrDbXgWHSrTmzEtvo9tnVHSGN9uNK4Hs9Nxd8czPuEJbkQmcmb1",
  "key9": "2yLA4cUTEL4MnARxGA82ai8D61tTFVp13J2HucjK4yHgN5HF1xUvQrRasaBK82oiWPh5wjPLj1ELSggZCpaTmp4R",
  "key10": "51wZFtDV98B4YB6xDJzf4MjFwzVW3EXKminAsfMxZTXxEUZGkSd6shAuSz35iAJEKfqDfqktavBKcWL3vw5PEHkv",
  "key11": "3XCdf9nJmeY6iFnFfbuNuUNbfA4SFcCG92qgKJ1C7SdwyPLnnf32fiZXrbCcX7UN8dxrfrhHsujgDE6nzV43WgbP",
  "key12": "58sAeSKFah1qapcBT2h7J4RkoJhyzrgXWGeeR4x24T7Nzhe6P61zTWBCwFnYbqteJ4jw6zRq7awjGrwNjX5soFQg",
  "key13": "4iTb51K3W3uvKvvezGtuepj63QxZK7BKvQAF8MjW7CmBQeKqQjnYSYNRdJ4Bxz9XvTSr5nE7Y513r7qRGXqNgmGS",
  "key14": "5xe4bE6PA7zf3GuwRnYd6YuCgE2a3ow35GJBfU95KkR6fD1cJQacts7touHbkHBvdPeACm5r2ne4SRU4931aQRKz",
  "key15": "5Aq7eyVPTe89f82sYNS6VzjzqaWVJgR7pzmedKgEtMSVbm2fDptB8FjyV74v3impKaa67zYCRnsrWcYnqAiL3DRj",
  "key16": "4sqtcCkRsNKnkZwuz5T26ckXpgoytbU2XeUKnMMiCaQF5wTKY3VJYxbdToLnXVQJXb27foEA15vj3N4ruN3haBnE",
  "key17": "5uQeX1FKGJhdWq4RaAKjTefzPjBPQM3fW5yUP8e4rg5khCALBhBzZUDP8w6nWS4vvDr5tbMcsvqqDNvsTRM8Fnxw",
  "key18": "4yUzhaS7Rnc1uER6Tae2zSiKhsEHKTNu3UpoT36SvGS2a1UtHhTb6XcH8HfRPbPrtEjTwX5YRUC1Z9D38JrXZGf2",
  "key19": "3k5XMtBp9Y4NRQpiyAnfos8fJy52CRJ3xbwLsqUYZBZ19ov32uihzVRcn2U8cxXkW8f8Xqm3gosSTCd2mJWohQN5",
  "key20": "4uvHXY5CpVHJ2CqT9mLtTJezRW3QX8T4kmka1eHiASHjqBNtWrYTthuXFq9znghsoLLMJ6yP9D34tUsd7J6oZs48",
  "key21": "NCdE7JSvgmir1cV8Pwy4MmFhrNH9spXK4SHV3QjrqLY3bhn9Yk324dSgBd7E1C2pab3XDAvLjWwnkcNbNzRF1Aw",
  "key22": "5xYwmVFoNmupVtfVaUmMabtUFdYN1UQSYV9jNZi9io3ZTpKT9QcZxc3n3nCAHuRE3RtJA5gSm6yCntzeoUpcJLE4",
  "key23": "2mZ6xSf9j28zXS2mFsht4nQZAs546fAwVvCh38sk6etawNvXHe5P7zj1yc5Q4SbzxHQKTwmDAo3UAu13tkTHenRB",
  "key24": "2MdskimHFs14qLNkxeJLXwNUjc2bSUqT1tydQpZAy7wNAj2V755kDuFtRmawQhAybYKHUowwbLA8LhtTm2nBa9zg",
  "key25": "4HXU951xr1iytWSsrQzjJ3mgXPzg36J6TyKakKZ7yZRmJViuhurhh1FPRijsngHtevdVJXGSHyWg24drYkLBzSwK",
  "key26": "3NVgYWgpm1vgQiTNnvQPKW2HA4rRqFryGwpdenrgk96vRVchZvRTBxVW7jy5YN3MT2idn2gCphAvbPj3hCm8STpR",
  "key27": "4vMPeMD3xXUiuGsUMt8w1QYanLntYM4ZC3Lz1AnzEVMQ4za1H5R1y7JbRsM873pWhT4LpCX5rnw212wpHnf524jD",
  "key28": "67BkiNKLP13RvQe2aeK28ytAXtVCi4kbfPTuQ7hh8KTHdKrw8gy3dFpJbxC6u3TEXhMH34oizsgn1m48cXYy4f74",
  "key29": "4GhcHCXZ5nqSvtwRMNqNvnYEmdQpyZxLV4v6jHcmx5MZMXZfaxkz4zFG9h58bY84VtEa5VBicDurguH4753HVKSP",
  "key30": "U78dX84MY1MAQQmn6keqtTgs5nyppzyXcmeg49J1BhCqKN6KWygKkLfYvDB1Fxygsgwkw3rx1zQsosMFNBjBWfw",
  "key31": "yNnkL3D4pNNN7aqAYGCu2GHE3M8qXERL9fy5Jidt6X3a3UoC7uodeVVUGzBmzU1BJ9MGCruTqF3R7MBTbncxn9V",
  "key32": "5beWFFwhz7bewaj7hrvV8rp7yNhbqFsjrhdKj83LgSdjpnNvy2zei8hgnjHvzmp21wps6XUrEB6xiD85ht3AXaia",
  "key33": "2WMNZ9Zm6fjbeHcPfcYXqeEDXzPJzHm8NeowCzDP8gTAYej6v7svY81f5EV7VQHEr2bEhqTzpFXyJ2m9kt33XQRM",
  "key34": "4SpGxzdmDmwwToA5Ajuk27expHkVhmbZyarc8X9Azn57JBgPVnPCBo9b7AzFWAWX3HjXwM597PGFSxaodSpZ4ZPr",
  "key35": "47wrJ2kgzds9NucYfnaCv4NLoBMedhM6jy23r7D9b1NR1C9G3SPVhNmviqoYPtVaJx2Gz77qeVWDHTg5m7HvM56w",
  "key36": "Vk77RXGWYUU221NUrQFcA2tbb3YkUneX1CfyxMVVj2jyZCjWLsSbsSi5fBh657y6JSVdscK9pwjoodnctfhWiXF",
  "key37": "3vmLp2wQMHGezzatKtdMHHuJQzEYdcdnUzpECs9MPbjVCkf2QXoF5wfoFANzWoyqE3oS47NnkQnQaN4ifxcPqAyY",
  "key38": "Y1aCXJCryvHRaTTLswkE83pAfmEcC7e5hZPkv9WAmhNtPGebqoYc1gsFMAK1QK7qyBLmxgeBd7vfE2JkFTpYnvo"
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

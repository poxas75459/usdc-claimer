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
    "5NmDzrMmk5WuMK4ThXw1MgqfEk3x1zS1FEGh3sWaX9ZnLussKCcAdibZZ9AfqY8MWWQyUErkaJPtbzhRAnSmdDiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQaBo9w1L36UeChG3h9xdbCk7wnuHSsceknDpT1GvBQMLJNUQBYDbcN8iK6S4cAvrk1HtQKnTRPE7BJ8xRDgpmg",
  "key1": "3w7bJKaoRp8tF6LHEMAMuBDzo3LjmYPgXxYYeKN4GvPsLEJ4WPsSz9xDat36juKrEEo1snVbBBNXWRk3rviPJhPe",
  "key2": "YnBnHdRaFH11xwcEbC5cT7tqBEmxCp4v9eeL9PHgypz75kGPGgomGWkQuNVgcbLNgVzwienTagEEd1uKynRiwiD",
  "key3": "258852jv4zMto8zx7sfxguzTnRJ5QQhUvsnXJnXVqCEVL1QRPHRbLDpZLtnHsTwsGspcTZV2AViuyQ3o6TVxcwK6",
  "key4": "3BNCjM7FaXMyNfeag21LqSV3Y1ckFxAFxuMdgQUPGtyP5eTQucb9yBZ4Nm3Buvn8uCt4r9Etiud9v9JZEVLmkz9j",
  "key5": "4Uiy7MfnuJo53b8yoS7E7PE54Ka8YC5J81gSPN7EoQWwpZaRQ1EfjSNGrT6ZHRdPt93Vzu3dA4f1UknYg87Koe3L",
  "key6": "3g5ySW84oX6RwTAiRbyXTb7bAm8xA1vHJQ1p6XHqfUc8VU9RF7cn6F3Z1ZmCB7VHAciQkpGDALfYu5L5yS4c9me9",
  "key7": "faQjDdM299ffzbRe6yC9CjkytSSc2YA2dD1Euk4xCYYGz5PeAZLNTH3EMxZdDuezE8npPSVQb5eWGqASBNGoi4X",
  "key8": "3D1PRBJgJbgeE7ZHD1UALm2r21GVfkJciJXG4RzF2V1AJ1zxRC1DHzEZA6LdPSnALnsybPPw7bWJT2H2tHagx1UF",
  "key9": "4CmKGML6BWeCQEvJ2ty1KqPS3uwizhpjHG7yni2n9g5tqu4fcvqTj7Y31c1mfxwCzRFAog7uWgKh2mzGJwcd1y8R",
  "key10": "6PAxJCzMN8chuEYnRfaCmjty3HotTXGdjdZw25ynNVy3yn8v4T5C3v3xouNmBfKMrvDb8jLsShN2YJjFk5UHvSg",
  "key11": "UKoQKc4iMTAb7B1uqV7VFtpsVidALfNZ5yUQsrtx4KqArxf8SdnUFfxqeLeuUfiTcGrmQXKhYKCdisbvLhHJhRB",
  "key12": "3WSbQz6iNkxXq6LQBjKvCACds6ZDfsG5UW3t28hEZdnG5ej6k6SGAxJKKDKixhBvb4AWS2pgAcRKqFDcQoE286ox",
  "key13": "2hirePqo84GxhbFEkyaQuaYonQRn6GSJcczjmfJ2h5C99cmkNHN2wQNzsdhjFEozuK3Q817ev2qDcY81XatGTLsa",
  "key14": "4czqFtF7prpZLdSNmnNi8FZunot5bHnVXSjdzCZX3gpmp2YeWVDE23Xpo4Cfok1Si939bGY82fxhadHppRWSxSLv",
  "key15": "2wPdgGGrJ4eH1C96aBvipBwYq6jEqaqpf3G5Aj91HW4W76hNZ3MpU5hz8VSf6E1QRPQBjuYLv3zCwGrwz3pckuFZ",
  "key16": "5ZBPZPTn9RmGWhDcphVwvEjmEEc2BUmRnhBqQME6wEAi1BbiDhjquBVVU7dTchFq4Yasw7XDa9DVo8ZwCmHyc8K1",
  "key17": "2Q2T6oTfkfPQVys6CwSv5FDUTWrcozjuc7Zhw6fyWg3nff1jaobJyYkEXi9843Lrg1vdgy4pE8M423Cw8fNbo8jx",
  "key18": "5nSDMAMfVYMNSPioBkKcAXZzYWBLg2v4nSz74exzRUtuooihHB2ojLaVNJ9X7YLhTkxLthEPBhxXF4bQWfJHVAyg",
  "key19": "3T3ke9RxtETTK5M9qU1rp6wiSCB76u6PFwq3ffD9SyceX4Yg52B18aq7AsJoYjHM398PCXnzTsuzq6nZEJi7bSGW",
  "key20": "4KU2MMoJxuJA9WBSego2BkTmbPjKgYrFxbeBszXcoj74c7v1kPqogPNcbwo2HkuV3n61XHH9ERSh89NuMF9zZMju",
  "key21": "91buqQdKeoNZLfNGqNc5SH4XFxY1MmwcTmTAipi513Q1kHouLVAtm1WTb2sCbbiehPvSvhZsRJeh2wvDr4xm45M",
  "key22": "33P62QRs2Jiy1hap2NRhm2zkQbAXPGj4wcwvjFwnVdxKcok4315DzGzvGX1Gf7DBAHJegsnyDNfRAG6ze4eyoJ4P",
  "key23": "2CgzbMH5ycb7tzoF3CxseUjzHw7NCTnvyku7ikPzLLKXdSSVij3fodsUDVebuQLHpKTjc518PKJCZmWiKK7v3RdD",
  "key24": "5yXQru8fouGC25urqL7RwZVeoEXfCEpNS86oiSveQyqe1sdjAv444yxyVaMgDwqCXwQJUCo9GoMWVsw1V5cPdtpt",
  "key25": "F6KXQN73R3FEhg2uKEQtAWetCVtgw8qtPQmNZt97Ur2teLDmwjsVEFRpZpoGg2ndvndPZJLHkN6Ka5Lg92kXdb9",
  "key26": "Hm51hAi1EJEvDvreZcqVNEeYF1j14prZgBoVAcHKiNPxpB8zWgGT4HEfPKrMFDW5VWvEFuivNrbDkCKvVtfCU8c",
  "key27": "4CR8ifAu7ddRB5pN6WXFQavxxWoVkGfygAwbcW4nyQCNzXqPcEmwGUh8dDoJNqSEzDCMBmvd1P4hXDTRSLM6V4u3",
  "key28": "3c4UwjSb5GL9utBWTVWbqXGKcYkxag4rrmf6BNzMeuY6kodEFzQRkRVHdu5vPNJto4hYMpFLDEdmxgFDiYr5txCC",
  "key29": "4AYYgbDPEs8WKefQaZ9w66weX2cSULJfqECrCvVkBh5iChJuo8yFGbavTw5MAqkjC2k9G4v8mYse73LzyFRZZFYj",
  "key30": "53ky64efFgCG2Tcox894mAu2dc8hezKSuWgibLCZdphSN9qmfLduFw14UMeQHyxTAKmjaciqf592ygphVNTYggjX",
  "key31": "5FpurVx6Y7xDSRt5CF6mStez3MMvdvCSdkCDu1Gep7KYkGN5uVopmbAVhFN2GhBAodtzHbgcBpDJtkNGrs4yb8vo",
  "key32": "46MksUkf18f4GRaERjBqbSzhU8YszK8aXA24akFkV6B2MQARWxsLe72K2RoQZgLdZEg897Ahzu7mJJZji9pYYZfi",
  "key33": "3RTnQy4RaLYVxS5uHTPefiv6UQ2SLcJwNidjBE9tAmiuKxLwpeFHdQoqEbkZs2Ho1CU9Q9TQeMRuXU7S8fM7ZBZJ",
  "key34": "61RJpLXMVBMJFqTTmgRsuDKQsvA7RuXaWPQm6EDhGRHjtJQCr6quA54LEfnQufFm6BuJhUxWMKPczmucF5wzzUup",
  "key35": "3o13un9G7ri9HUqx6m6yRnJ6VcVza629z1bKzAnweJf7jSABEFd68M27BaSoj3XwqguRC1Mqttq1DEBDyiXR6A3Q",
  "key36": "5zcdgpomhXnwMrH1LhJSWpPJXvYpmBot9JZ9E1Sxv9PfGDss3gstq7z8DBm6grDBQHEB8DHVJcpFmXKY6WaTm2Nf",
  "key37": "2bEcM4Q8TNdfZ1TmNcDApJ7eFdwnmecjQyKgthFLsBpGCegH3J1kJEuPYmRxtntN1DhAuG3EXmaML8NSKwwZNXiJ",
  "key38": "47NMME7hGhn18EPu5ZVJSG9Pg4Epoc8ULT4nJt6wzDRMUCtCiZBCEFbquFUxTVnMp2TRfkaatpYE1Hx4hbtC5CYH",
  "key39": "yqrcfLqSvbShgHKqNk8DurMkK6C8nwFLpHBPq1f4jEQAKz1WGf63G5nMGr4Cxr4XDg5Ge4rBBUQ8GJezcYHGHhq",
  "key40": "5AKd9m1WxnxbEa8jxAoNLYk6GunCJ5zu4GrKvhdGwwjCYhJVhdhGmRC5a6bZF4Ai3vEAGtYQzvXGaVjeQhxtzjV2",
  "key41": "t4t1FKbwDDh8gmVmqyptM4RrxwKQCHUZgeUSouTvTCqXxYqpxBTdTVpgXGFHWwUhGmikhG7hmcRDHhDdNVmsvLb",
  "key42": "31PyJUsTmhLZjnDgHzE8WghGsoqD1W8iDCZyW6G5CwdNmPTViPCkK1ELvmUgrk2h7oaAtikrAnKRXw9ndYYHVnqU",
  "key43": "63qhcNCATyT1uPVJYCsjjWvt6xt6gFuueYExeBLhmhhBM1RGPAtfgF6UMtaU5sfTLY7CtY61PwJY2q8TeEQLaiXH",
  "key44": "52Tamsp4Nyrt3Fdpy8dUfDDrWssvvzs32Xxkzd6h45GQKYAvpm61ux437aAQQov5G74UsFVgDohxKeeoP3tjn3d2",
  "key45": "5aqyJkJtNfHhYv4Hnfo39Rb2KCPsWR2j27CFc6Kdhb3CeMBeCFTc4DBHFEiCUEWaZ6UyKDuDhxGde18pMRT81aJe"
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

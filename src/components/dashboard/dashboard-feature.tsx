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
    "HhXm3wkPE14Re1pojMtbDwVtxPv8dioWdfdhAmRSmnVx38vY37GWdAM8MYVz2hpchY8LnzLsD4jkxiL1cKjcJYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBgmFnhfsrn4dT5RWMUEMUanMG78E3DrNBB3ZK1QvGVY4d6w2ijP8eXX1RXqeeds1xLxXEX8Vf4u5LQSA9KkSPa",
  "key1": "2D6RGvvmWG8E8nwabBdkKxg5PZEMQAgg9Pj4LkoKacWeWLKhWPBaDiZaJgtQVaFkDAH4JkjALotjRFrysXhYKcV3",
  "key2": "5irEwNGH1XLEBgCa3fxdsxctUTge6YB9oguHYR5y34zbr2PxRV4ivF99g9ugYSvVWKdzNNBMhc5Hf5BHXJ7Gi4Ds",
  "key3": "2VnBtecCVuLnc3wtM6cxSQK2Xg6iu9vdbTrCHDCPUEsPz6JozsYRp8mEU4qXArjb3zptEvzazKuXzU1FpvF8KUsx",
  "key4": "53FMLd2FWMEsYjNTfCT6Mjkq2PJSyYjJMcWT3V6kmjgS2HF32H5bURuTbT5XCXGWNxKKfGU13zQaUL47MVkGoaUR",
  "key5": "4uBJzKwTxS8iKoAxJpeyuRvK69PtRxboChEZsCY3VnogCFsL9vQpeT6dy7f4NSnNXhcX3mh9FMBNTrNTghy3nmsF",
  "key6": "3ks7RABzqhTD9wzPxAerbtJSt6sMgtmBNkeMH3JAsCmTVkSXBHyus4mgQJ5EnG2ndp2ggSXqeErAmcFcGoqNBk7f",
  "key7": "mVkAFpdxJt83DZNAXhSofSYFWPvQK46pZPhybKgqHUoSYc8PYJvWjqRgZ3Pv2KsGKjBjYSazaAVBhUewc8wN9jS",
  "key8": "5hvRUg5v9UAVoaFevuHULsteZHDdVqMAGmjYpowB2yRNYJ8hrPa27JncRUEA7PrWJY455jQmoB5Yadmh9RjfL3b2",
  "key9": "4jXSNzsrvsXcdu9mnU3UnRcGS9Mt19x2R8eKRzgeXFXMzkFKpswEYRbNfwoyXJrN8rY1GxZ3cWt3Y5Buwzwprbz1",
  "key10": "48qTCgnLtkrhipYoKxdFAJGpLZx1TpuLwxWieec4LQgMA48y1J5tzX7Cm4C4ou6MuwNRFGkwMyy5hvhnxBwAfoRv",
  "key11": "4RyR49tP37Uas9X935t7v6wmgzMgXi4TgErLfWw2UorVV3jwcE5BCKLqyBgQHGNzvPGXkG7RscrtyNHyNJankfXr",
  "key12": "3n86E56q4uzeHhqamwpnLorejBJdEuosz6EkSsT5k6MpCUtweNucqzwSkZMEEA6SJanMko7aYQMHBM9UYoxSkoKw",
  "key13": "3UqpWESR445z2CVvp8qXhKVcEqFoXDpuXS33FbRYNLpY9RPCbrTRtXdy15qLbbbtAqJgWhZkWKZhzi9KmR2KF1qi",
  "key14": "5EN2QBw5mtXmAnycmphweEbXFswWxDWrWq5a8YQTvG4JzERiQsiejFABPF2NU2B54ScdpP2anTovJqWbR5BqpfYS",
  "key15": "FFgE39vyeZtwUMtN1wraAifdcR3oPeyRESHNbrkVxfiGwUnaq1nyw9rEr4aC9LFbWvFq7gS4XUdvXYwDzCj8cXp",
  "key16": "8XEBfyZ6x9etCT27Hs4KRQZfDiGAGAY5jtCcrP74QNxZL21ZpaADJddCX2yYXAFhDUXHqCPzxtFx8m23zqqQVBN",
  "key17": "3Ea7DworYBES383foQMtFGwrzsL5xpi4M1J2puyxUNotfnBUqgm9N474dCKGXi26yFNV8BfvAF7u6QN7L74GxnRy",
  "key18": "5RnSL2JxKA2NeYMxwgAJjReqtmbVDH4wjARhsHHom8oMoDnkA2evsU7mqjJAt54hj4Z9Sd4dMgwjMw2QiKdEL6GT",
  "key19": "3srkqmmA9evrMC5G5tu11WiRxawJirQh1eFjN1wb8SWU4ULwLJWPA6kZZzgzcQvzvvCMXCj5GcHeEnMrSNZc3v58",
  "key20": "3BghcprbxQqQQi4YcuXK5AGofpNN268Wom3EZkKHT7x4uAunYbTihr4jqZTsmzVhpqKNsef5qRdoPbTNHd17CN1A",
  "key21": "3KH9m6a15bKB7Gp854x6hRuXQSEJppUrc3eisAanGkkTpQVWnfMi8y77urKn4415WVLaV1LGxWBG1SXXn8aWE8yd",
  "key22": "4pRxnNpXiLPHEyJkXpx8M3QKkQUPX4GzXEYbCVbudmhNZDvqPQ8WZybLHLR4NwJxKzrVNbnMG61QDH5RzKGFNjeU",
  "key23": "RiFYeGNKuLdgFqxhRFWHBczVUF6snUJckaJfNcon1ou7Z3UDKxKmZHgkJhLyh62ACUmEUKcnLT26EEnA6SqNJty",
  "key24": "kju9yHvWWUVjUJuyDXSp4p4deKuQTGaAiSzhyrVohkVUm4o3FuqehmiYHnh6bJhHk2QwX7eLDvpYNQ1jL91MXaK",
  "key25": "49pbgq7VTyT8A1FbayBCHxqLNZwTnb2bRxahst3V1JjSCasPRXdFfjsYLnjrxGAgWX19d4DqRsGV6edzWET92ztj",
  "key26": "5Hft9nncEXNqYo4n3c4sBYzadvVApYQdWxMBqdULbUdyJa9CrrpDaoGQDEWqi2FJwZ9MWcKtq9DVgBAgTYhhGqBf",
  "key27": "4mqy6QqgGbhLLVdCBWLYCWgMvXtotfMkA1EFLifE5MNTWYo44P9mGKumvW92JgggHwoS4Q521AqRgC2SnicM6BR",
  "key28": "29K8DeN2wb4913CZfVriFBMvHjdnpiic7HtwfzMdzf5oBquUzLjbUSmonFN5Qz6KFLVMhWZ961jCY4qAbp3xnM4y",
  "key29": "MVnRQyCiZnmjU9xVjaRNF3pkz1t64mAYodRoozn3aqVJELNfEAZB5fb7uf34FkimVXE5P2w9hHNrrdDCZKjh76e",
  "key30": "4MSdQixswRnNk3G7BGLoaWuBy6i32RayVZCgwBvG2Mq3hgz6pgVKWuCKjwatdRPbSqWSao2hswnjRPWHceECy4qF",
  "key31": "4B7X3PEvgnUNkMEAX1h1DYvUFxmvtXpvkpYggRUUrqJLGxa9UCPRe2DTE1QxpBUzHUaY4d4S6g5ViqMc7qfBAxZ4",
  "key32": "4qqiXijtccdfgTiMYE6n7ZD12xUTMq8iEUpmnUMfa6NRkkMCLjhqpnLMt7ssLL1bHnspxMc4Ew7YBiKV6MfCu6RT",
  "key33": "5DvkzPmgPnxHkKpWouSUTax8GHJin2RCjxYZXRMohFgbHAWU3ZvvT2igWRXSRY42Jy7SCiVbDqjk2bL11PfYSnMa",
  "key34": "4RLCnr67qNVxtRyWG8pzA4rLsAGNM6ELLXxdmTTxxDoxzim2isyJAVvWXFYTjnjRqmh3ushtvRtabNGHwLNNNUhN",
  "key35": "2VzNgHrCC8GafM1eGmC6F8nY947yz9xnd9QBJvaGcyjLyAqRE4DUmGnkha36oksDTNiLeUNfviBHbMurYAXYgJR3",
  "key36": "4YhPHdUUJDfg6YUS7ciGg9gg4nXfJTQ7B4CdCFPcYj2cefkYU8e8HTPcvZ6KEbc3iugDMo6nNs8EhySUKW1Smkut",
  "key37": "3TcdtY6ZK5HiFFVGMzhWhLBzbNet2dza6nq6ZCuDWBdpL8uo2DotNiAuNSrZReVZb4gGD7fhi1h9EyZgWVXLTJdB",
  "key38": "2MH2SSMKFLpnriaLwbRYayxPmQAK4xB2CAkcwxz5scknVomRMVgk3iwSukJcuarnUveZTnsUVqv2ZpeXpbAnbpD1",
  "key39": "4tN79gXf5NDgM7YoT8zjHGhUj4g9LSV7gtgfCSrqUM6x4zuAAtWF942NzgaVK7VXSzU28aTy25aSqPZFdfRNegu3",
  "key40": "F4dFuQrbpJwJXu7N3RGyvK7hrzSxfSwmuRh8LXRSd4cSAbhD3Pe28FFb1hbE5np85DfaDNuLbJpps3d2uuyMGoy",
  "key41": "33VbarniXxPpmNk3CP5GuNPnPUtffDM8LfBYjtvNRAzXkoWPQQCUbc4VfyoXRHjHGSXB9uqmJ13ShBmud9S1Batt",
  "key42": "65EadaVWcgPhVJX2wdW6TcjQxeNKBmA1ejcaci3qxLsRe1yMY5urRiBWueWyN7dB3UN2Do2BY3KcfFuxZCLqLUqy",
  "key43": "2Q3bW4NCzUVzELW4xcWvonaYFZ5px6Dmc5PFtdVV6q6vGCQXB63vxbjpzCthCmuJa6B9H7f8Hf1VbbsRMEfDk1BV",
  "key44": "j9enGz5TLbH65uhEJAbWqCDWFrXpVjuD3LNGGt7LCLVCpKEJcBxQ34oeVyt6j5imHXVvL5GRQaiK7JUaor6AQ22",
  "key45": "3q3vS35P9KurpXMm49AfyPGA2bhLhRQ13A4oiBnNVEuvJDo5bpJtWwbNnMwurt9Z8dJqjdbphR7Cka8BcoYvABmD",
  "key46": "5FBrQXdWH8AUNqh9Jf7Q1uc69TuhJjHp26RfEAF2WYugQgqdQJkKMcgeNiU7EPDK3XhrFF4ZgUeG9uGVYeNnrUKp",
  "key47": "NAAzhWFBRpodUiDQawTz8bhJRKXgigiQQ9fXwwH3793CnSEH45myrDnWKkwJ9oogVDpoFov652RKjbvHjZbGdv5"
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

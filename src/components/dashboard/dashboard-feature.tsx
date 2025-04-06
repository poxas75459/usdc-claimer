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
    "3tRGbyM4abpnF2vaxo8T5eZZnFk7oLfZXdBEr43wvrHTWxEz8UZPBHLvLgZehxe5DEm5GFENGBRyBHYe7KecvgDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A5xDH4F4HZNCM4VPrE1iMWYJzmhkXbopxQbA2SsN7BdL6SPB4rYYqwLH9V2zbszLn9m9GhvRy5c342uDrBMRAhu",
  "key1": "36HpzvD6R2t54qnV2V6nvPqBnRSuWrUhzdUAco1Pi7U1ogh2YBSbr2az3dDKTuwhu4uug9JXYJwRMHkPS1t8MxCK",
  "key2": "5f346D9Vd4mnJFDXrCgFG8qDkUDFAApeFQKBRzHgmrGrxCFymnJuvNVCb54A8mDaUVrQw769eXEGvX1u7wRxAkpC",
  "key3": "2Xxq9Nrb6ghJrhT6wmawPcJQqduXQvWbmsyRmLxVyV7ZznvdTJogJKpRBqV3tcM8jcwXMGJVbsXUc8YYVu7ffnrC",
  "key4": "45uqV76TKSQYyASdJkyCxVrQp4sUsZBMmK2nWbTBB8p7QSVvfyVVReeEJVNDVjKmpqxQoetH6CpTBr46LCiz78Mw",
  "key5": "4BNnjKaEUehyUr8ByUVHgDCWc4oFS4EtLZz8ejJo8wkb4S23p9taLh275Jb17RLjUnosxu8HnFQEqXxKnzk1S7To",
  "key6": "2ZQx29XQP9m1N8sAAEBduhqeJZVAAQyKr1NtoscJ2N3PoPYdxtvXm5o3gYoR422MkmTNfoEXfc1JeknxbJq1GVkg",
  "key7": "RRcEtRcrnHxmFTDwKizXn3TVMSDMQDv7deVLUwZWTuaJo2pd9zVzSygghgpA7ZAMMvr1rwa1x7giUteQF3JtFGb",
  "key8": "24zs9oqcaPacfWFR4hLNcXGDGvJjgZjsP3TzwHcTjCzrPbQ4XDEhX3gehQ8xkHD6cYH9v3JotkmThsLDKZ4mWqx9",
  "key9": "4MNDgCrF2npK4nNpC7cWXQER4Ydagi6acQhbetXmpan3A18T1wj7kG1mmbTCd9yz275sZHyrwNUhqofrcyDsNXqo",
  "key10": "3LgNyBLXTgT6XjN6AtjXvrML8zXkBRvuRLLQCx386cpuuoTdHyhw6tM7Vn34UzYBRyxMY42wjWs15Hne6hpYnmyU",
  "key11": "5DKBwe4C3Q1dhaVCp3yu1ALihczUidhLsMBhY9pw6UCKSnwcxKk5xr1BTEdnb9eqPro3piMboMR4sf4wrN4ef7d8",
  "key12": "67GFBuEncUrZrXTi8HAmLEkYyYHoUxtcA2hRDWeR4fq5zECzjCBkQ2vb8cxsS51r1hhhy5B8BpZQU8Uy17DWW55j",
  "key13": "54p2rRmjFoVsuutWmgpJh5FkwWmR1YWJ5phxW8V3eLEbYN3XrYaiTtZp22oF5PoBrdM5TKeCjh82yo2ij7uWUb6E",
  "key14": "2v2RsxTxud8T2HYAfxC2Ax519xfTA5Raog4T3jCxettuuw2xFkLCHQBts8yMrSQb4JgFU1C4qZCJKH6XncsgjREx",
  "key15": "5aCXfvo8kUAVSpEtZUqpsnPQvBsCRbX6er6Q6XA8LS6uNib14EUqyR8KCuwgNVkPmWYuxngWRnN2e6YacWpz61hF",
  "key16": "2Ttp3VSLrn1R6DxpXzzJKRrVwrH9i4Kppg1dad4AgyojDC55kXRrwoUCqYDSx6V3eH3umsQjA2BenXziD4MF5xMX",
  "key17": "3GQq4ARAmRS6y6pRGnoz31Rgj4jGBP8SKJy6wpC3uUXpHBEvViVrTvgit1zMTjfrsTjU8wyxxUQq6c5hiR3AgiKC",
  "key18": "xBfn1jbgXg5KC8bGTddZ1AcUmGAu2EcG3MZyABHm28nyJp7Bpm4Mh4pBquGRzJATahpufGLB89grVjL4nqotojL",
  "key19": "52gZ47ZfmRnD4UPYjep9SGZbAVE6NbgqqDek1RPs74YP7J7AV9d3eDdiJYCXYckwBZEVX1DaTUFTGJJa3czfgcJ7",
  "key20": "2TdB6R5ugwaNpiXCj2rry6UtuQdCFgTd2kjGAPp9AKbe4nq6bpjZnLpYUoxNXUMUqiG9mvFfBSK72u84AV2sHmNZ",
  "key21": "2yj5wZU9pSja2GMVNM5GCxjxF5AyrtqRnSkNWwrzQ5KvtirrEE69gr9XX3hREVsjg6kgVZjw6npftN1hJMuS2icy",
  "key22": "3wpj45rxvMdKBqqPFCoXb5T3nPnxTb3uhx37oCzKzzzmmEocFqy2xX6kGhTnk8tdTMojmqRXjaRCJz8RafUbfW9z",
  "key23": "4F33biPpzG7gJm96CcxnEox8mFFZhYH2HotMeAhzJUX9i7yP45FDVqhWx1CmiiXXRmkNKN3ZXUa6SAoagLba7Phj",
  "key24": "ov1s4BVuqYgTgsRFCGvMTDWZTEQkS5GdTug4tYTJ73kw2RGVctgoDYn4SGKh4xQEb7i5Ve1JfH69rLsnPE65qXN",
  "key25": "5T9YnpRrc7AQieWvitjxGzrziU4F2JApEhiKfomijJBAi6P4LTG59W5ecGomgrvhDyp31s2oeSZubSLzEhyJHmNF",
  "key26": "SKPHY7GwwCvHbPksxNgwSWKbwQfcszfiuq9HDj19s2d8H39LqTa6JwY2wfPCdQsHB8FnXNZusQJa2UWNL7FHmUo",
  "key27": "sib3csLTF376LbS1uuPdK33juesya6cYbbLS1b2aKvdSyoKJT8ZGCyJ2cSRcTGsJmATTCt2L3maVBwd3a1a7kTS",
  "key28": "5qUALCCniyyFwe4J3PBWAiz93sc36k9ak86c1dJZ3MtxQXnfcvrZC1BdPo15WZ6dWxkMAfvPMqWiGg1HzHANHd41",
  "key29": "3jZPVQ6c8G98UK8j314oowct4cak3571ggi9GeMi3CfUx5CgEJVjcPnr891xH4zM124U3MCHA7gVioy6SithvzrW",
  "key30": "2TdfnoUVS3oWXUGohULMxjzhNaSVfMdbzUftkL3VMV9vY32xB7SJNy7xMHQV5kh6oQ5gid9q8Q3wfRBHG3mngd7C",
  "key31": "4oGKVpNDj4UFKQc62pwvUqButdYqgymgPDmDZqUJ5tkJpW74RXacVJ6j5BAaKWNRQQnK8M8B4zCTvopAMQ18c4tf",
  "key32": "5F5E4FxMBzHY8ae5RLdL1s7zVDXDknVSwa3MDtxb7N8fZoyiTiF2uorMVmb1oQgDGbKFKZi7sn8dpB4UUqm5TjBe",
  "key33": "2UJFXN2eHaZFPGqggptvoLuy6WgA1griiTMnjkRsUMDrXNWYoVbQ7wGXVx41uSiuE9hz2DuekMpw3pobqeZp6sGj",
  "key34": "2QosoEzaiKraijGceTthmiQMnyWh99L17gLiC1KVYq4b1HkVNzRpuGc13T7KygCZtFagkBZF1kMPGgVEDNGtwrmq",
  "key35": "5GzibjRNsiBKmKKwpBoF7CK1riq8fHDQnmvgHeqWZgWxqsRKkmZs9CtQTuPWC7LHtPXbYUGrBPxACPvJD9GTogsx",
  "key36": "2bVZZxWHNyf8kAAjvDPrYcUt9oShYyZqULbWa26AT81phqgYZWXzPMTGswKZKncqPAELie8vfbDR82E6q1ZjFcsC",
  "key37": "33efUw4Zqz1ThZ5ZydpGaMi3zAsXaopCKgjoC8GoiWi175HuSgaeidZadPqn4Ugkus89pqLCUB8BMcAFsxEwKtGZ",
  "key38": "54Ug4LmZgeyzPrJzEMYp7pWkFq4j6akyQF6Sh3qE4D8WJ2D7gAojM8VymUQWTCBCPqhBhDyt8Nt4Zy3svQvkD3rF"
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

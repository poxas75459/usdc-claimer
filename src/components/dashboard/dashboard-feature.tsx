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
    "bQAHQJak3NXnTqA39m48HeWrJMKkooj8g8RJj7AoAnP6bL7sihwLbVM9ybxEeKh38JwxuUvwzGMbi34ZWY5Kw6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4aTQKLT7cC8rwbfjMB5ECsma21sta4ufDjAYqMwwViXToZeb1bjqQHzgZLKoK9r16GQoz96sBMZCC9LgPpsBZf",
  "key1": "4C79cSGBYNCSuLisi6xdoQLrmZCiait1Hn2g8Q4meLDcPGyVAKJ4921VKpfixqzWBw5KfCefhAFGxQ13P8xHVBqk",
  "key2": "24ejxr45Sut31paSZDq8X2uD39aJiWg7CEmLvQahPwah2NtMCtabvcvgVMUJ5Qaie78a3LfiF4VUznfEHZsKwFRv",
  "key3": "3LYWt6HEfccZpRt345396zeXc93DseP28Df7p1kEuJ82NWoaAkpQHzcbRznHQPC36X26EzuqYcfH8bTgAGMh1YHs",
  "key4": "sM1c2twh1Hi8hGPWew39AXqhTaHHQoFKRfCUx2pNZMeDWqPFsD6pMD2E9w5XECUQTpn6gvvTGfMS8afMwZ5xvNh",
  "key5": "3cxJPHTcWqZ5zkEDHYfQq4K3iJ9uTc88GcTxxLSa4KUL58Grw8JkqjimriNuW8Lko4VsLhUnNdVCYpezAQfXAkEE",
  "key6": "2Di1KgTwgtWZDEp4TkwMnacbTaZYmYWMhtPiqcXKrrVBgc2NgDteJN2x7yHCSf2gE4Q2t93frnX54bstrkGQkJs9",
  "key7": "5byvpWEhExProwg8RU55Def66u2qjzwsZeAizoQm6bL1uGdnyidnx2H2BiC3o3UhN9hEDK86GzGfph875s3LwtcQ",
  "key8": "DUPnfDJBczoDZVKVoZMDQLqWebdq2aTA1E5qZWi7junK1HzdwHpUZzebdgxydSy2i7kgCxPpX4ZhrFZvSWdaxnU",
  "key9": "25DHYVdmteYeGDAefBaTPEqEdiEaiaCiaSystQJM9stvPevEeCBhkHq6HG5mMAqJF1rQCDB5s1mESRr9832LDNuQ",
  "key10": "2ENdJdJ7WFFeVqn4BCNcfz3hXYNt8x9uxNs5L8bo5Lo1ibfWjtZ7uyvoCRTadFkHGTsH1U1yBr1Sy4Uq4X2roAde",
  "key11": "37B7XHfDP92jMrirUYJd6dJEKwjpByN49jibX6eaC7RLnP9jsdiXsSvL6CVe5Mu5mhzTNKBuZXDtWjB8Sh4PRZDC",
  "key12": "5M8azBwCrEZAQE4849zatKAHbyzjS4RKooj4rc5ErjRKPhU6FNBBEFJUYX29aUFr1ZbSvrFadhzzpZWQmsbyLHKZ",
  "key13": "3FFDhbfqA35iTtwFktNCcMRCrJrKB9BmRivEvJWDmU3ak3Wmh5Se72t8p69Bvj1PxB9vxU4CUvXZyfxapfU4oTpN",
  "key14": "57aocQRUA6SFERuTnHGEaDY5XEQrW2uLpnVof62Y6QQXLz6UP9TT5vVAbxjix3RCfzupX4rFpUgDbtTmdbGrpp4o",
  "key15": "LN4tnyFoVRFMNoT6hAo4vA6hwVEg7zNHBEaNRgdgopu8SyQbaViDihSoe6Tbpo6qiYBQgquKXeizSS83re5XNuZ",
  "key16": "2Qv3vA2PwsQjGYS1eqM5npBtqZaotkcCfzWctu3Hr79DWKCwJPWScvgo3iJXXCJRrP4Sc29pJmAnnGnM2nVdPhXP",
  "key17": "3Q19WvTUaqABXSKZruEophoqY98CYQAHsCS93c3KQUZAQfUX8nKZPDcwV8VpbxNMSMeznvNrRHstKprdWDoZAdCo",
  "key18": "4zXbqB4dkRDA5JgQgfmoV3kha245cwMzUXdEYdcNNmTnn4ACUiNHzGNNuy5kNjV27TJZwiMBiL9rty8SFfXA3EqG",
  "key19": "SSzDicRiFTUjTa9yeBVp7eUC1MB4mLGBD6GvJaAGK75oFLuR1hqg9EtyXLSCcH6CGYY3fXKnx67Lf4Pf3sNPRW3",
  "key20": "2bRBwnWM2NNmBfsCX4o6tYfnsxMqNvFr7GvLhmzZqGyCB1dhtdjVRdXem3G7cVHrvSzbAN94gHUzzMrWdNMUWQhg",
  "key21": "3378FPGDaYsasM2PLmmk4GpKdUEDFkzho4bMriyoLUBUK6Bc71MAuFTZjdtPfnDjn5oZF1hZPscS1eWef3DXFfgx",
  "key22": "4TKeAfJkXyNSdDQnjfXx9XBcpvjwPBR1mtHEKBBU4J5ynbY7fpb7xoG4xYP3r1aaBbBoxSH54iDNwMKxQqCxvRAh",
  "key23": "7RKBwpRkV8iNabavQJYjkKPy2yTCdiNjhSQJBWzjQECmmBPDiQEK7AGaNy828ujWU5MciFcTRC8kNmNNsXXsQAW",
  "key24": "3kXanDriBHrshzivaxAFRXYZccFX9SvVdXBahvahuWKKRvyy5Mm98GvtuiYnTSyFRd9z9RvRU5LAURAQF8C7N5EX",
  "key25": "T1FbQiDdkUBtehPSbWJCsDcT7TkFkz9XDuukiJRn6u95uYK6oo8GuU5xn6fqLd28AiuqcskTJPQcKtVkasvJEAA",
  "key26": "2paYfBaUrBnDh2GnLkT3Pspffjp8naqmLQpzfL86sEkiRsKhfghtAt79pDFj4KJSSs6AbwE8ZyKH6qKHKqFmwJkD",
  "key27": "5yFQXu8ZXL3Mv5Z9ECRVHGJyvV26NA5rS1nxEwhqrvc6KAq8L1W13sPW3Pq2pwxmB4v2zRZqQivTn2jv1CLfuERd",
  "key28": "3YczhtVxqL4MQw1kwnAfMCBF27Bp2QvENmrsYyadmZc6iTzagyWJDpFVkZsWeGvxuhiTNhWMArSPYa6txpXHFytg",
  "key29": "5yjJJgqU3cUDtRd6iix52F7dadvBtYqcsXYEz3pCouid3y6nwUeMiBWv5Xak3FurS4uNTQDBjJ3G2TKG8tFLfPLV",
  "key30": "ytGjgqpwhhtEHnMzh9USbkRdMuKjAet8M2rye3USjtY5SJ4CZY5swaeSzg3BTCheYwKkR3MzQXfZMAPpBmYMsb6",
  "key31": "2bNwGw5vy43R3tLPB6Hr3knng5dverCUnayUzs6uL8euGXjE9RKc5QQ362sFi4Gv2zcbtyfyzRLpkeiP51whMofH",
  "key32": "4cL8Q7zUAf1cYmqbztng1UqHXp5Z2YaFZFsxV3NwUS523iSGkEUQ2ztxaFAgswYtq8mHE7UeJiLhrYtPZrSKkUJV",
  "key33": "2eP659H9shsE6abPcnEVJb4n45pFtCQuW16CF7cW4NQGHvoN8ievt3UsAjfYeNJq5Em7afD3mn5pJ4N12xZPLKG7",
  "key34": "4di9cQHUpE6gaC4aYWFgjmUWsTAp6YbdvHkjF5pKY2FtD8VsPZZ8TmZZUXbn1rMqcWd1g2EnwPRxZytK99FiGFRu",
  "key35": "3sjh67p8Z7dqhZKNAb29Hp3gKKHmEPdr9fEABj4m4f8CzqeXECUcLkXJDVeiBFRv8WcpvHcbtUCQR8zmZEfDaCDA",
  "key36": "3PZewPhPCffV6vKMRng7MvWe7WfduXKVCbwhP8Y45NrYcVUEnhrqpbirXoR8x8StmxFouXfVvXnerERAcrFR95ry",
  "key37": "4AR5kL5FioJ7YUWmgo1X2RX9YixAHvZNiVz9JZBrQNWiTvT15ZSh2LbSVwqbzJY91oMf6qKdYNcyqbfrBsMZdso2",
  "key38": "4FDm1CrQehMjSqzQXitRwhKTss3fWweiKNUiyawyKAtS15JVhodcTxJRcEdupxX2GAomxE8DpgF7aPEiZBuCSRT4"
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

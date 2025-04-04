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
    "4D63x3XYHHgKH4Rrds1NTh5DFdusiTT1H2NCyhvgCxc2XDGVCNKK8wPMEDRNPfnuoiPwWFeZ5aQhVx5njCyizqsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRrtYUaR2VsAVzr89T29M79kAsPRdbffcBDzjD47JrCs39nGqWEyv1puvqWCa22x5bPyaPawd7uGvms3WGUnQww",
  "key1": "CjgsL2S5DL1STYSi2vTFzdQcARPMqf7YiEUS8meZStCLzP6rg9zfmuCvycYZBnESxXrP1mXNK6WDqKudaEJqcH8",
  "key2": "5UnPW8SBfM6AY2hoNZRYXQehm7QWBXtix7XpPBnehirkvuHAG6oedYLXRtMRfZLqgQMBPY5xZ7E1es9md2a2Ww9v",
  "key3": "4BizNUJ1ES1FLnrFgQddF7NPUhGSvSKLsVQJrtXdKvXytuJrjgWnoGHG8rUxm8uU84FZ1ZJrDkAk8TSS7hUfcoR8",
  "key4": "5B1vcCpcUxbNrPbD6Mt9orqyGfE6YgXnKVzr1akrcakiZ1HEkeeEH1zJnYuWST7nHsHCrmgdCwNArrsAZCSPoGf4",
  "key5": "58Zpx1cALBXMaFVbzLkYv3ogEo5rjaXkt59SBvwJySMzyKjPS4ERfVfYpMKLUhc7kQkAKuaueYjbMoRUHmK2pxcH",
  "key6": "4tQTdn5N8yGh4k2NMJzoBDLEqP6q9Et1F2mw4RGb1K6jUU395MUpBUJdPnd635eC2gsEqyoRRkYnavEvhYjC27or",
  "key7": "35gsz9UACXfoQvKLmF9Q4d77dB4WKftu7iSASDkgnJFW11n2s7K1WykRWDFv4ETzUg8GNKJsAokYcSPdMMzNzTTS",
  "key8": "3HDNrQUHBmdjuW7fsSyBc3uUv9Loc67YY7BnpuWVDreNnKGZMNLynjitmDHoroJSJM3nCzSTozZjtyx7MUNxHKmg",
  "key9": "3n7xpJdcxhJmarJkXFEqKnSpFDZJy8yq3hUySArJayYdTgciBVomPnnjeqaE9cUaoFPhAJrcG49DSCVLtBAzBVqA",
  "key10": "5wctzwyUvYC88SvGN8Lu79ha2MSDUXzJn6KCLHREjB7E7NZMp638d6AoUJbrWkktFPbauFmz4T9Qvsm8oUnjJLBT",
  "key11": "4a3vo6GyXUoVjuZvMw7qfTbEcabz6NawgGYxARXmCqF6AzGfnzD7jxBY8yCfGKptXgJLoeqCruLwziAkKwcjT5sV",
  "key12": "4wRqBzjPqXTPkpXDVDd7fzxVRL2ph1oQ1oLEScdrfZEcJQM6bvhMDmmwF7Gru9NEeefNsoHfy7NRu2ncuokjhaco",
  "key13": "59pHovSHZzdtfM8AeYy3ErB5VHc5KV6QUtBDK3ezue8CcMiUhJybtT3r9aq2dydgwSS7TjEsXostSWN9tiYSZnUL",
  "key14": "3bMw5mETnfsZkjiB2rhtnirbFg88sbLZgRvgubAAP4hZg9VPWyb3zz2tTnPtSeVutHLtgfCvBzVx49Qp4worBmK9",
  "key15": "2Y1QXgz2Rrh9iqgrtmvDvR9B1CrwKfv23Dz692pGrSaK7BaMq1w1VPXPNHjaLbyAcyMdagMNG3AhJtXS3ht6FP7w",
  "key16": "5WvxvRGx8LY6xX9MvXoNjS166yQbRysLS91BZndyirAZYQKx1vEPbbNYFR13Ue52sJez71RpJ3j5jvrobegqzjsy",
  "key17": "2tAjovo8K96ufssNBHNFpqotzFKpH5orjXEZttatYe3mvvCq69BNnQJsE9UdZsu9Mvcjtg99ZNhQfebjENo22F5u",
  "key18": "5WsfwPNFyR4a3Zqa7ERUGK1zgf763pa7H5dWsiPzbApZEK5avJy6fxRtFYBUo5TWVKjcLyDZeVE9j1JmCrUxEhzv",
  "key19": "3ezYtSVJ2gXngh88r4Lbp6uDpxsZQD6Fk7GhDgSfzsvmMeM1y4zBF1TPSvvX95hLXoWMgXBCWJcX3QzQacmuVFV9",
  "key20": "2LDghRG8hBzxDjWeCxWkTvzdEspxYcTCkTKuiKKycp1hzaLSfG35Fa2hipuj99Wm5LXwtWJP4cVQHWSUpjw1NJKU",
  "key21": "5ErhixRmN18jDpv5Fx411KVxybQ8veP11C5SBp8aE7HAbGEJd2jM5s9EukDsgK5a2mCJTX773kB8CvABZrqxJRq9",
  "key22": "3fXyD8vEZqtVsvee6TCLz4HXEYGFB2M39PWEid3ZTdXkDWJDiLLNQTftfU756UHsLRZWvthZV6nJs63d6hZr19K7",
  "key23": "6324yAonorrWB7pgWn6sarN2y1E1jD6Pk6oYDtj74nDRryeCPFUSofNUbRFGQV2Mz9buJLPooBFsTxmKRPsnS4xC",
  "key24": "vf7T7RzBr4mehUSemnxs2jXx1RigQEh797JPsHqHw3Etq6ip7Jniun37GmPUwWtCYuiGpQZd8NQthjtaTX5wN3d",
  "key25": "2iSgXrCbiT44jYYxqeAtrJzEjGbSLpfm7L6A5LcKtS4tExf45koVkKtevv8vgQi8oADkk21uBGVY9qvy6ZCr7c9X",
  "key26": "4MnYxmohSSYoJw4zdA7Am3sYDYptnpnp8wgApZ7rQURRYJuwagsYb7ikiWDZ7hu5dj1zZNr9AS5E1gBaHGkDxFMd",
  "key27": "2PhFK51ZKPPJRxU7wkqvyjXKHTLFeWvmD2Bbv9CfLTzMYNTmFY8aNa8XsnFhmb7EJrcHM9YWWYC7vENrmfpqeiKd",
  "key28": "45JWMZoj7YhbBzmh5ttRBCEp3M8E5nCpEZAFLPKRGQnW9ydxzzDdmgqPG4b5QgvRiE82PEn3Bw3S4B2MA1HjbVnX",
  "key29": "3dkDAwmuwbWEKu6V21Z69ipWhb3NyH6x29UKPTFcvazLJVHN1VvLaB4q9kitjnSbnCkScmdFi2vAkDVruuosR5Z2",
  "key30": "33Hv35A2viVyyiqU6yMCK7zj2tU6WhNgSUhvnh3yPg3EN5YCbPHmcCRoyyygSkefkt2DSPhGCHcCsX571y6rfxw6",
  "key31": "5Neb67pMCFJb7WYFA1JCwGKRac67EqoGTQQkwGZe3tCrHAXDH2m9kA6Fr7ZGngcFiuuB56Pz57hJ9tBVcHXYKtps",
  "key32": "4oRCpFVnfhCD6pndR5jkGFjwRnjWiPchdfWrwYoQXjuHmcn8xgTwUbdVjhsMwhmpqvd7kx5zf9gSsJ4PRQkeTwdJ",
  "key33": "2H1vgyzrqm9tXyo8z7eXxByYmJDguZJ3edadjm4x14y64cP54gd5A3qAxCQ52YUQoLoCR9Dyx8hNsKipqyvgHt3A",
  "key34": "LfkDKbDFL1B8sGG8hYMMX9nMwheqfcRYjnzd1No98xus5nAvaXGUevZfe8ekzHwTLMy4AFQpRXdHS8WiDoxe64A",
  "key35": "2YFzrYxK9HqSdqc7kEwggEMLhhZTPBJ438MStQBjM38rtS8BNjk4CKXYsStEj1Sqs31yz4vzTZZVqVK5vfypiZeb",
  "key36": "5jhjswrMNatHLHr8x29PZdHebbMvMdPGPb6tTkpM6aG2cdNhdntkBAKobH6FAFzjFc3Pm4S2SNtPnfBaStabC3D7",
  "key37": "4JyXBBvwz5EzyHJ7c8RPyxygH7vzhKayvjpbn7NNHp5kE3WizSZGp2K5L6gqAd4nmuHGER8EPJr4MY4FR8fSGuxH",
  "key38": "26nM9cDLZwGqk6YNXHv5UP3hXhNx7rPFGHzuR9xKP1kZrbWdxjydXnmykwVRrAefHTMrbUxgJmF2AsZ5qV7Cztmr",
  "key39": "5HAu8xAm1pb8xonBVe5ZQ9UTV38HtczNd9zf4xjrvSEpKNnFQ97NBCCe86RsNNXgfmhKMTAxe5TzgjR912JjRoEs",
  "key40": "3SAw5vSzb9AHxbLtk45Q1w1HhgxoQkWJ4aChvSHaCu3h2Udw18drwVaPjzsw4zxWzJGCh1oSHZuryEBJmc7PfXbh",
  "key41": "43uTDhDBbwCgR5f7BSwmS5XXQQWxYstkAjkpEJAkN8yE8wZDJKVpWAAHdHhNcPbxbqaNiZtqS92pehJwkreoQqQf",
  "key42": "yCYYcJV7DySoXCY3omftUg7ysuFHHgEGBasznuXnVMjZc2tWe25YYTP8XeZxXbLcaXB2EpdBtWqn82A7P6YRrCo",
  "key43": "3PnepbnP4Adtw15VeMZ56qWgnQaa2yeHVdhpQ92LYv8jhYcxixM84CvoeS8h1Ysai4WdwpwFnVZdZrQbmqH71xzi",
  "key44": "58Z2tFqmrPoojRWUDMe5tqaeopxHmQcTikP8nLjtWHebee4UHcwKGneXqguEzMTyBjggoCihPxZ6yurVo6gqb6Lg"
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

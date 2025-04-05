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
    "57GnY2ZpPk19fHYLBdHAe5xgt3VCD2Ww5UWB2UqVMmzVtd226kNyExcUt5s8LqGax7ywAx9ZTwDUJMRaSeqY2Csb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXwK8tbUgzhWr2ue7MJnVjHJSzJ92q8Tp65St7KuyWBAWufrcYm1ATtnqc8X2m55AXW3aje1j4eDXR8HGYXr6cJ",
  "key1": "KvnabFyGz7zvYjr8MX39ZsmsbyE7r6kMRs73gnpMe3XgL6Xow6tLaVD44pDucGbMavuyJAzNHU58B2v7vS8CYKp",
  "key2": "2ULpPBvxkxg8CNpyReo4MCpXXz5NCphxDsihakWRby69WfgVZ4CbyXNjTVBnrKsPieyaspGp1Xkr4c3Ao51TEc6a",
  "key3": "4jdEwmztLzhfLxvAwop9FHrhixsJDKrMUa1NpLEzFpNmD4QZn1oDmgM6Dzf9hGNKCZA9bvRPgjBwU8AeQRBdY49c",
  "key4": "bXETzVR86nur5jb69HSgVkPPW3Gh9rmbp2DWtNEoqoLRjTzJcXWcgTP3GNgNTJxwPWdE8D4SKQYoRn9YKQjvZSw",
  "key5": "3r7KdsJpg4DSE1AnbqUbTPWw42JNtkbbPJCfmjcVqaPaUcYxV8jGs33NLVV3xfFZL7BgvEWppxwhoRwJhuJDrKA1",
  "key6": "2fbs2KVcwUCrnw36frvWCsw5aHvt4MiR5QNy4WRPHrXhHdP2vvd2s2HbfnMAkkYLD75eSdNVS9dFz3ZEa1bja659",
  "key7": "3ueyzwWo6y2Bf14v8FJyQmGVtWVzcSSYHCuY6mpLPsh68S7Axh1ScjosS6BwWVxP1eVNc6p1aD53f1TYirPSnFPL",
  "key8": "LLcwuqUrNWEM51rCAeb3sR3SKZXMCPon9shvNHiygLXHteFLqAJSFfKMH7F2RHKWvCuQwsQyxFhk6GJw4iY41Sx",
  "key9": "3QqVKYHeeKh7rc62sbWcb2FccmMDCbceM8VZUX73LdC5CazShCUqfdvx15fh814b84LREW29AuktuRPw5Pjd7zin",
  "key10": "4kyUu6VBzJVWd6KqvUF2qCmhKLsTcyiJXX8jcRvKjGc8xaKTHQMMYt6MRi66TYNLWNhhgPfWS9jgLnUY3mw7jRLr",
  "key11": "22G7mhTbXiXdfA36xXsQyACZL1B9mV3cE8qf274JZ5m64xXkGZ8xvSMYyox6QfriBwNTZr5ntUvVoBXiub9Ag8yJ",
  "key12": "35KcTeex8juYiq6ZmMe2Vpg9PtfBMHCbKUTvDdzNpud9bnr72fQTJm3SMzctKVWjyt1o8LJRHNJ6cqwk2u2epNtV",
  "key13": "3ELqRg8nKiSRNbzxzbcVPpULLT95ECdc9c5qc7VuH6rWZ6nN7T2B7jGkJ9GPwiZn5N4Kskn61KMnvaWBDvatEYMJ",
  "key14": "31g9vbX8ZFC9UWshBAD3WFfBN4DMf6DWdXJYxvMLp7auqRBDFQnXzX3P8eL4GCZ62krC2PrZvSCYRjSVyg6Le5Tb",
  "key15": "4t5ZxbxngEnr7t4zdcvzHzZrfrmBUVTeopdp9Exsy3NgP39ZvK7iL3LNZUbTfPYQTc5AzVZrki8dBt1VfJB31PNk",
  "key16": "JBDbEktXnrdqS1kxbyritUQfto6LQiDPePGW1Gy9bKxASezacrqTVD7EgyA45KXvsVgL8hboBdKmkJqLSdV2MAY",
  "key17": "4pYuXd4gfmy47erxTuWXPu7fpRqDX6zU2tEcE9TjcLd3i4159igqtDoo5XnVaCK8bG1mVdBWaa6JbijXzRuctNYQ",
  "key18": "2JUqtYkzhZsbW7V5M5HEpn6HZ7Gp6TXAwVK5Kidu1xG2DAJWHSqTD56S6S9hbDjAU762sRonLMehqyEh5uTTCvab",
  "key19": "5cyBuVU9z8Cbm9Naa8ftFeFyq4Jps2nyKkx5DXfEF23owbofZ9AQuR7EuKg95RocEFX2jNMWBTp7ZZKfKgoou93R",
  "key20": "2Fzsmp2bNEpvuA1CgHi6SkhprL7obicXmkD8gk8nFrz7rghb9HoRUAnCZBjdbrZF7gyvy4og1cn4MYWa5d1uSSSt",
  "key21": "24uSt1R8By3iV5NeErMD3Q8jb1SMZkp3oVS84FU5H71atz8KUPFjmxcnZYGYaQbkAqh567daFBB6zebUq2GWFaGP",
  "key22": "538kMLF3xSUZ2AHfZoCcutEDVTYAi8aLNYYLrqLvrsfS6kG7KWctrKeeuWM5X6Wo4HsSL3a88gQr1k1TVrGdmhzs",
  "key23": "2LPP7WfGUwxEvBXaQgybXY8yHLCW4Q3ZoXPBFroCXHwMan5duuCyKmngraBa2SbLkGhej7mKcUdYF4orJAsKXtF",
  "key24": "5wzGtWmsaabZjD3AFNBVJop7x6RdyfkXJwKWHoPkMjwL4NN92jE6pnjiXVwNhkpbzVAtn1sL8wLFfuSyfo7dCLC6",
  "key25": "5hXdrmy9xQbHVp88BFPFkHuWhh1tE6RE7MeA7BYsgyy4BkX5BiQ7D3cPo1cybzXdeELt5ZcEBsViU219MYRGtUXi",
  "key26": "4e3oer6xRgXcsKEpuVRf6qbW6Whew4KxWLsXMN74byL5eJhjP2ZASwUqzMwSDaciH1LnAdMRyS5cVR932zZB9tEn",
  "key27": "2suWUmWjbC25fZdK3yX3f927xdLdBHYP5wUQnx9LbHFzLHe5PXyyRgbfXFBien58iG2Txrjg6qVe2uN3M9Qjakqr",
  "key28": "3SspWjpSqnhh8vi5dLqz1XYqjBhVPfPcLSTfspY1R3YbFxcMNQw8RE67U9vXBEmuY3GiFsyhRFz3o4UYxjxSu9kg",
  "key29": "2iWPxwD5QWTgLNbnwumCbFAFXnoUkGFZFYFFcyHwwtgHPigGPEofdHcp2r6veftV1S3a4KAtSqZWppAaLCPQzuaX",
  "key30": "4pnTs3TjommJML7PCyRghnLVDwNCJGn2sQpPF4qGvxyheqimyuw9MDaDE2uSTNhonudNwujkuvrR5mLMUXPk5ciZ",
  "key31": "EVzBatWP2K6ZCpXNGWg8rykCqSQ1iorSsAxKEZA53nqqDfpfpcEWbFK57pU51nciMF3nVCgpGfNu6t5a35ympDX",
  "key32": "2dgxUrpfe9bnkqc6UBH2oSoPya6ZDsfMu6fZUk9sKEzCQD16HMe5nA9ybzSzGEf9apYMX1zgRP8B9w1QkdNMjmpq",
  "key33": "2XoqyuL4Uki5R8pKS9yCxFpB7xBhFfeAwGD7fD9xq5tPLVKBfhC75k3BVVCoR96aWdZ6CsUCXp4xT5beqzX3ue9T",
  "key34": "2MrmRYojifPpuFLdon7oPk1vSt2WqyvRYERe5EASig5TruaRtva22zdnKAS1S1ZdjJvfn89ratdj366cvyCDA29x",
  "key35": "u8vjTDQ1Euqu6mH5tbZHc6PHecAeiDH9ntvQixxgsRBW7s9pq27BiTh64isGg2k6qs1oX4bUxd3qD6tzwZQT1eW",
  "key36": "sczzVnWHyqU6Sb932pCnpGwzFVf9yR3MquGBnappHp7vWdrHQDNMb1SRUKvUAPo2bQ2451mArh6Wg1FTzb3ypCF",
  "key37": "54PBXJFgxPTLkwLdEubY6e1wVpRu7aLL52Dqbi4VrvwpZgSmym67zZEWyuYZkkbhKsqhif2nnAvm9CaVqXPPHnVW",
  "key38": "5pYEUNuwTrBRaK1SMHdsExtzsKkUc37PiY8DrKGZpBvfULV6uLB1LvVnjiMqiyL7EbXq3YBPuJJnreervVBPypPL",
  "key39": "josjTpsYdWnWyHHmwXnLtGLkuHptNt5yU75vRjxZU8azm8XYoKFzm7mnzKb1Vj4c36sddYXYjvFLcEQmrtgheKB",
  "key40": "3qgcsQr78xDPmW7KVbHFL8kNVmvVxBvNSxiM5e4QYRN3eNnVhvzLpnoNMyWVKUAEt48kqUZERAeAYiaNExUZdega",
  "key41": "2aSPHDpbQDAWnXkbv4gSo3hmQCSrzNpVbakQFGGQVooNAbpyo6rEUPCrn7vFA1hqJ3jyrNW8Jo1ANCHbbobMxKL4"
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

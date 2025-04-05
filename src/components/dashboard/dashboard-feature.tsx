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
    "64V7WBw3yQYcjVr7DEAWZJXqJ9t1FTfQNcFmafRDZpWyHA21rouxCw3shC5gPg6N3U8c6gfGEadnddR9skgMQz48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BfC68915ewr1rixNv4eXNM94DncWoVDGS6gftoqVKQKyd3Bff13zMVz7FoB49FGirjN47uM4Hxp7hxh5HBjwh3",
  "key1": "21kiToUtAum5T6i6n8tgqkLbwxhpbV4ieZEhdNck7oSAX57s5omoB9jGGMbsuACTsqWm1CMovTH3HU3K5YZEhG5d",
  "key2": "izzph1JLA52otupAuCfKJfCtJdWEme9hGHvoPuJmBJXDPK4VtdTCUCxcKhqfLi94Du5GpLNE1gu4MWQ3okLtRjp",
  "key3": "2Qnckh9W7aLj9msu7ZJxd21qnmYzmSf77o8JhotWSavvhxrpbqLPoLZcYynCujK67AX9MrY8NThfpEosmep5L3Kw",
  "key4": "2WY8YistKq7Hoz427geatz7F7tddWowu2bvEe1EhQmsDD166F2Ygv36PTk9GcNbtX32w5w7XCnGm9exHngc9orZN",
  "key5": "3oEKq2RnBXvcX2Qf98mLDachV4z8RYn2xZ4kDfZLcUFEyYnD9jfEfPv4QNrovhnP1hQ8VyQVgbJcDERKSBnCurP2",
  "key6": "2schWxtqiWGbPUCuwR59XKC1qzDghQN3C4D5GL86rmoHnynuAHMzHJvd8ZmhwnF8BTY6X1V2xa8JGL6qdU9DLtLY",
  "key7": "5TenuwjpP55iSyo56GhNhZs2UU8DMM8pSScXkSjU71a6fonVxdmnRSkb5ZcDys2Kugy5FpUa2SQvKkWXjdjYZrDp",
  "key8": "3DHYtPfCK8sYWfPb5nPpJQmvCZeq5SP4VGwAWMcacjgRFG7NEwds79djwSEJZDyMvWssoG7J59vTAgXTpHGQtVb",
  "key9": "3aSQKRyEQpE46XifpmgvWvcBc1GskDZMYbvrSHTdFVbGAkMUVTMDBEGXnrXFfBCxrC3Gbf8j1jG6saVey3V9DUqK",
  "key10": "3WrZNcxynFMKP6knXomfXmNx4PSYN6aumG4phEbUebVbcgDJEtW3yXstZYCfQ75cAabhjTJzk3uuZbdJMJEJp93B",
  "key11": "36euzJTQie1URocyxdVC2RvcQWCf8ksz4zf1hRwETA3nAPR8mHg9LmLvepy8zYwixEGkNgjSNX65r1X1h6mybzz7",
  "key12": "4MmLTwyVTpgFiVo8Wqi6e4Hv5wLK83GdWqeUMJrGSm16xd3Cu4GaRrHNopXEyPK3KUg1kVbktbEkUy4GuC37X2mt",
  "key13": "PC7FmyFDVdFTzJoHXSEnZmWaktUTA8XuY1iRnR8ZHEDcoG68s7ujqhiWPr14Qkaz5MfKaTSkVUsmEsgy5wWQ1Hy",
  "key14": "5rqY9x3vAvEzoB4wxM9uMaDQz5PkgsHfe7LdfE522Pmj4EcecK7fgcyWbToJiSpk7NoistF7u4D5kpJ61qKfe81M",
  "key15": "2NN6miaQaD41m5GEZoMDfxnWvNyiksRKY9D9LATuSNUuxZ6hRAC9u8NxXK3reU5Hgannwt7td1SXEHiV8g2WJasP",
  "key16": "4ffPdRZkZro1CYTkMWAjmVrczA5B5ZmYHk3XWWoQpDJe4DLAqv1dWTjqJRwnbRnGv5J8uncASZTEbKR7HXAdUbwB",
  "key17": "EcVFFh89mqsbu6tfmknZJP13eqTiZNyaaz1VWKnYh5rYFDB6mKHqn3wZm6E5CJAPC2GLYAKxJcTe8ByzWwu1NTj",
  "key18": "3gohX2cGSJL13n8FPd5ZmGm4Yz5ZwXKqTHNaN7yGnaddzRyRV4Q4BCEhY7ja8znkkGyQQr7nhTZrf8SEGcfUEGwh",
  "key19": "noH5c6hJBAUDX7KoH6UWrctd1HdW6KFq1sisGikLeSzWy5usXyHi1ZzQ6dkmoKf6eWicBN6UhaA1YzoeMaZzAXm",
  "key20": "551DiQzAJyn1t124YiZKn12A1aaZ4ZqbNLPzV6tmeSbGRHPczZTdRpuDLYxpHsfqiimSCf9iXAb6SEbsbsnfiGx8",
  "key21": "44aufXVEvnn5WaKtEmhWc9xzC6Ba4c57sH8hdr45UQupvRL2HyoA2aCdxKNrWU9W139afGKsA8YEdhHjmfw3Nn9B",
  "key22": "ZfuQ9KNihXJHS6w2V6ibgtuf2FEWjheSqusMcT4iSYPePnu5nkUMdAZTzY7gceS4u6p3ejHvixxnQURw4Cb6Vdh",
  "key23": "2vyiadah3omQrLNw2ZhfaaehoEqj6mrG5WVdHcfJQHupzdteuQ8avVWHsxL8ndYJJWPdnrdiZneMLdQbnMDMQVr5",
  "key24": "3tdKg7hPV9rPWxBiGTR2NBzK7FWzB4gTDNRKWE96zWhSA9LcXQ6Ys3qf9cVJRCmYcTYoHwdTsbv6E7U597LuPLhT",
  "key25": "3ihcFs8FcinnV2cBPiZyPmLbHD64SKhgFomXyqiZyLXa4gVYkTs15HF7xDAYKSbjCFtE1Yej5iirddecWfXyPHSh",
  "key26": "4GoHQsavAt52uUN7H8c99BpVEX3K3aBRR8mz9BcgsuEQmExmdLyDbdkHzJiHqJ25gojbEXPgb1mzqBCwJhPmZPgQ",
  "key27": "2n2h64H1Pc6Vf9K7UjzQKV2RAYUWUDBvYbURczPBAn1udcLz91v6i1ru3HJZ1XdCahH4GxxHaHSawyKPmVxGm3qU",
  "key28": "4xnbNBoLWw3JJXwtD9zue1Du4th6S883wMRuhsZBY4mEHwEiC1sh1ZXanN7Zo5oY4AwSKAjdSwSetJtEWXWNBpMy",
  "key29": "3PfTsarojiuxfiV5FLBht9iJPiYveMpHBNgB6oomnJY75kMmHCu6uJP6nGTTRGi8A2B9Cm2kF7YcACQ1Ykn3tXeR",
  "key30": "55ZZR6PUiZVPehRFtNKqxKXiSHfQbyRXbXc7DLpwsMwPfBKkWUqrVuraq4rcNrGacAZDWcA9p5XddJNjNgZ9ajwV",
  "key31": "5ZKopYAtzoCoUD37ft6YXScQ7kmmTCtyJFzzx11tzN9kZr8aV7nseXCukmL7ziJ1i632CeyPdPhGjXsweTUmp4o5",
  "key32": "5WaSLmJu8ywpoJPyZ9TSj9HYEBfU6E2XVJxV59rLQBH2ttoj3zbhVd8J5rCzY9BtZGic8hDSMAjo4GLsvvyKizbG",
  "key33": "57c3UVfCSRtqht1pfyTzrpH3G3qt3fveWYGPCQLpJBw64nv74ZcFfDNEGzaL11xrwgL6D4o8Z8YVkm8UQTkKxv7M",
  "key34": "Su7ptr2gxM7RwHnGCZgi37YzpKSUSQ7KdxJSS1qkgGuuLxGfCH7PSg2Er9YjPVhLmaqKeFqXDStviucxnNjD16C",
  "key35": "31RAzc9qhXzonr2TnjVhLE4SiRUpLHU47o9dNbSkUvgW8A1wEzsNorTF7PuJjqBFcAzj3pUetUczeLWgSPQV85T2",
  "key36": "2WUrAym2hzx4tVdjsmxFhS1Tzrxxue9sre5zzyuEgu5cszPpCR9W9i69r2cWQSrwJEVh9nxD1S6QjR3pfFoFRRfG",
  "key37": "sp9b4M3ro3qvFCeQEfV4Kb1CoSLWcRmT5DNc1gxq6GLbCLjUxWeapc5DbcsQvzNNBPogdh7eaLGKLhEckp4Bk1P",
  "key38": "62X3Jj6Xqmsn8KuRNBmtr6tvpTUzjTcefBwKprrjaujYHNCtMwxviZq8FaB4nHFiT3waGCEvy5FjMt1swEdGwin4",
  "key39": "67nK4nWYGiksAdzCo2oePtefk6jodtvoPjk75KQko1MUTA32BWWArXGvWmgV8A8PRQnZri35V5qRXfvcHvv91p7Y",
  "key40": "3jN4GecWzjK88mC8XjcpWnMyqdbXhsrTzjcXA3KPjKzBFwMAh4xji5JRxR6GK111dZnwbtfNxJTayp3tFh7RF9mo",
  "key41": "AtnHifguczHVPeppekQEn2h5SmaLvp3KnJDLUAKUWFAU5QQr9VVW4FLeVPUMokcPrMmzisvVaVGETvGfdHMsQ4r",
  "key42": "3KrgNM82jEegVPsTcjFbeTFqdEZc3nGv32PoYczaT7M428YK3gCzUFmYpTKkuNRLVkx34nQdgpw4cBhAsd1z4nm4",
  "key43": "5ZXoq2bNGRATDb7TzGeKMTGrnqxoGEAaggafK4gg1Q8UGSJLUzBo33P7cUivSad9pa9P9LKbZYG8sZoRpmvs4uYd",
  "key44": "2K7oUmMu2e7aQYWM3WiFnNrkYPYUj1fLkeDzPNuZRKjLER7uBaPybBdohN8iQ7QdmSqmudN19to26nDk2RjV52rS"
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

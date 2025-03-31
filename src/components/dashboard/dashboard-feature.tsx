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
    "2PMkKeVNh9qV5Y9KfwTTgmmenvMCu1o1wJavJ6rAWyFDv2MVvBKF2waDHfb89Rrh1tHrhebWGkCGRxzqfqrwus4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVJUEKrkaaWjE3Xi1cmt3K4XyEjTSG1zLWpFJGKd2ttp9aiuoTzVKtRJ8zcYjhQsHJiRjZHmsvyubbh3XtvwnuH",
  "key1": "3sHHt18ZCY1VHQNfWuuzXDdKhd7qiFSRoKxvEgqTjpuDGGUUxUEesxRqgCVqcaUfddNp15QBwkD6dALM4vn45KpG",
  "key2": "M3yNFcZJYHNNuK5dpiyN7iPNx5ruBPbT9o3U3d5ixKdntEXwcevuEoHKYiP8LA9BRRJA35Z2SmYDBxz8DMc8p2u",
  "key3": "nRsDjcyohccGxtD8ESYKeTaifMvffmVMhtQwtusUsqL1kHmVV3aLS5DyYDzDwLJUkw3hWBrbjqycco1qmhk8JKk",
  "key4": "31Q1yud7skUBR1gihN3k5r4ffHRAxJ4hknsAcfuZPbZ4iLGPyYcq21DT9y7SqwLWCbF4vJGqWKyfoX5dJ2NEbe4G",
  "key5": "fr8gPRnNBnCZydX7GFaavTiiSREdZVxLeMapL7z8A5iP4TfAUR7tSWUuX63VMxvYow26sUajCGPbYU2R91u8PGG",
  "key6": "2Lg236ACxX966tPvgwjcfEA5KxiccqeiMqexoFZ392LD4iP7aP7cQ7azuz5yc9iBHsnjYmirct9PbBaBLwkrZRMU",
  "key7": "5AShSzecVij3wM49pMxc2Y49JhNRmZz7DFohQJT9ygosdL95Uvbfq4tJPm27hSPg4k5ADg6EShRbi8nsg2AK3mH2",
  "key8": "3VPmWFApzt3HDKTC5DCo3GL2gvFbyrBL6m4UWjpphGHoLcNydpg5nwkotcCqKkqMppkNURe3ocTU97BNAJVJCJD6",
  "key9": "5K7yj92jGNgihzCrP4NVLspVrYr89bgKLjRMq665BiC8hDc5nnKR1qjfKdX9bUKSzGyQHXPQ5mq5hB8AdknRE7PV",
  "key10": "66uh1Gq85a24H3J1zW8MEHCdmKtdZhmBXTSo7nkdXSFdNPmxnTigo2y4QLr5ATqsbTDneSRAC8wcAwjrZ58jecgf",
  "key11": "2zQxGPbNLLj1iosuumrMunvYxhkhimVWbwEpKqZtiwTkQM2k3UTW5z5hwvWSbb9hdU9QRPEokP1EyrefQk9BpQnd",
  "key12": "3b9Df6bPCWozMUC3jMPaUcX4mBmVPR8HJdRPLHTBDuWuTvvxLJpjuZSpwFaZrPSGnLhunpUNra36K9hQNLrfZAZU",
  "key13": "5fhmpMFiNfSNBbpzroqWHCdKwG6E6bCfcULDkbswWumcy1Axenu8QPab6pXuVfhDYLHeveed6TBdPwSRWLyGXsW1",
  "key14": "2X4XjPmFCbgTDHm3TWrg8hgdhNvmzMCy5JW4qTq6Vy46pWuT5PUcTuJrhSnewdLtbztPFiPdRxfFMxDtQ82yBTU9",
  "key15": "3D47MQHuE5GAJTyDAu9qJDHus1DchiZ4y6qqaQfMw2vT6XG9E3kVRfjThgUyJ9cKqAw7wcHGASSzCzdojxvxkYmB",
  "key16": "5fBm6fR1p3HveHjT8t7BehrrYho4eNEp4TJdyhNJD8LBCmzUBrfxV4B6KFg7MW8xWKsRf8YbUqmpNDUtJUXxsecq",
  "key17": "42SK5KDY5g9wrtBzvq4KQUPAubP9ns1K8Ji44jXb3ad1EDaHEK586VgRiaxpn3LYBZGWecGaQ1pZAMeLJWt8RkRa",
  "key18": "4ntuRSSu3aEaP627MYCMAse2NzHHHayPWy2k2z4fKiM69DziEsEnvt76Tgq8L9C1c9SZXhc8wfehMfprbuY5LFMz",
  "key19": "54QkBa4ycJVzbZFPCYVdmFycwG43dWr6ThAUXMxpNRurQ3ebzSm7D44uHtySaLrMxApwXKKqyefUeHqyGW1eMMcA",
  "key20": "2gX4j7oQucpxMsaab1WcXNLs22dLncUHUCEqxHaCUTDV9xpJENkgdpco5hDmHMoBNTbc8KjHH6kxrkrhp6GVowoS",
  "key21": "2nfNovssGaY5eFm4cWxsJ4r18o4bcKGAPrFtBy1wY2bM45i28iMym18QvZodzSnmJCZBEj3CaqqhyG9hmkbsSdUQ",
  "key22": "3k7tUh2RvuAGTfeL7vREJWXAAXofL2LhwQJjQQc7k87xWHAnwKyBZE4RviNhntzzmbpxrmW4GUCNW8g9Gx6WUnpy",
  "key23": "34bShn2kSAVwBGzuVXWNTvC3Weowp5fzGXdQGX81ejHJ81wdT1nrwDk2wUA3xCe98JFeJbr35K9DH5CQxV6EDo18",
  "key24": "664YV5fEsTxtnxas3rLagJHzzSZCDQ8CEczhrtxDnjV56NPRPNssMJeVMSzdjB8LeTiaT52GFrtpDGrRAWs5xdUg",
  "key25": "QfskyuSm1e2WiuLt7RqLsrAr1PLVvUSWoibhqSB7QjAg8cGHrZZFrNX1dcAgvvYQ3Ty4bKtKLCHZYb6F58bGWZz",
  "key26": "MU9oMaWumHwURTr9pXnX1hyVzraY7k3rCU7HZNLebTgj2K6pms1jA7HqjWgkH258nbMbfiBnSGZwqBh6sEMpJUK",
  "key27": "4Z7UMKUSmW1Xzznej1VmEwiKgbGsQksHz4dk6g4VUArPHp9pwLS8JFEVxpwLcsuoBGMB5mjWukbkDwCPLPztXfSx",
  "key28": "4u1gHcKwMrjEXjZNkxYSN39CqmioaYNjGxMfAwFscCCejE7WiBdn3RZd9LiteRdYgjZqu1rFNquqeXXA3GWFtTsK",
  "key29": "4UXvNjAi4xKVcbQmWbHgs4t8RJAXBnNNCKaPaQ3zCJQEcqGhNHYhXJADPzoscbSw4XS6sPdBiVhj7GRKrQB7R9vw",
  "key30": "4pBMVmT7DunKetuwpTZAPCDTRHibBKL9bekmva7puH2ckTVJCicqmnFR8C4ux7Qma7vH8vjfksRd1Brgyd8eQtP3",
  "key31": "228vdePUn8AD1TGhFbRW2mbEdWuqYFQQhChKZLPUGgs4zYBSceWh2PVj7Ufdd9HsyWv8xKKMdr2MA6EfJjD89epE",
  "key32": "sYFxwk6vECupJjwDoarcTUtVBENavx2kqirZ3fZphAJPoyWa1US3M5BeyuTzChuT6R5Yvefn7d8WY53ukXJVgSF",
  "key33": "4NvuT22MAgB1kMJm5yHKZev6n8qFdyuMVaHnT3AoyJY6MqHmgnXwHtTAhLTCkB6WuyurXKZqs6kLDLd3NdQ2FkpM",
  "key34": "4Je3pHtgsvD3PpQCt6bm3D8caRrAgfASnsNYpwjEHBM27CvPBXzYDZHnzScm7frF9AJauzFS72DtbfNs82n5pJYF",
  "key35": "4s87Wyt45NtVfhE5xThvvRZtnoWFBnbEWKb3bD9YYRuN2D7d9LwLoDZfVCw5QM1tyQgkQHCgr7j22H2NT9Z6HBvy",
  "key36": "28r42Qv3AwXYtdernU6Nh38zwNZQn9cPyJQfvwizkxhhajaMr2LZmB9WjcByVqfw3tHYBXvXXBhM2AL2XCmNDkRM",
  "key37": "2iABDciyCnyJQaLSGSuPgysUZHBhEEhiQn7fa3VCKNY1ycTUEucaksKEg3LdYeUe5Pqfs1ruysSsqUuqi5Gj24g5",
  "key38": "2p6XAtJsNyw1hpNnQD1jEuKXAGaVjv8oynXPJE3h66cffxYLNencV6QD2rLqtWdxWfe3ke7rzetPXQNTcBjSnMeP",
  "key39": "5ny52T5VLL1mhAZ3C5MWboBkqnY3YSRTe6t2vwasSZpNypXZJqLykBKP9Bv51wMjsQ2aferwyqoNRp1qzbWwLPiK",
  "key40": "2xkF1e7r3PeZMAwkreGsPH35G6gfKvLEVGdLfXH8KP2xcKsqdtCuGCfHDxDWPtL4ksS9GhajnhA2AFFogf6HrCGP",
  "key41": "3oUdK8Ts6oBivzhunMMSidCiFHuRksTbtSDmgyzirj17KE2TrCJ6BXfBfizJNdJsqW3aNkqqNTmRkhkLHpAaLse4"
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

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
    "5kxBHUHovkW9sV4DsiCUotcs9UVCqcBzPkEiK5dro99xzNbUmPyNykuXCy7GSPcbKz7pKBS7Wr9nkdyhJ53MCiVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pAS3LPaWuG4wuZnz7b54HUtd1kNTFC78mEPFvvno7hfuKnnkG1kQgbcsXeStMD1cMAoPYh1YTd4yaGbsdcPate",
  "key1": "5YU14BWRF5gYwXhMBLnwVsiCtfZWu2sz9N1R8aNJh8gzkXYbjQLk5VMAKoghfCDsurT53WsXihLnpxd1YeEEK59j",
  "key2": "3gNs8xf1ctuiVCTtCStLtRofnFRBNUnrk7uYpTtaaQjdm7d2jsKQGYkWR5qN1ZWzC4dt3JhHxFDuHqjuUuPmBzyQ",
  "key3": "5ZqZqKH8fDpzYAvyXRqp5DEwc6xVT5weDrtPDPcfcEFbdykDy5xuHKFnaDAhhVhgyDQWH6gL5DYagcMzu5hzFsen",
  "key4": "y6WNwxPp4qNcTH5nzWbKAVrr9zQ6A1LUsd3o2wpDmiofqUZY84iQga7zBxe78hQiVbZ4snNwu4B8SRiActnhJg2",
  "key5": "3rWgSNUjNtBNbXoigEvZvzEV75MmcEnkXxZhuXsYCwwnFuTjzYsozTugD39n3tFE5pKCGZe37DaeukgXC2HS1zUh",
  "key6": "3akmjboVaRqVyqQ75jCtbvbUrSngQU4uYyRUQfQiQL921mV1MMH4ucmZwAZGxUzWi656hTzf5TbDPmwPzPqxY7d7",
  "key7": "bi2EYCiozWNyuppaVZ4b189txXtmSRGjnXMuUuo2Ca81WvDsgXW3VYXCBaV71H8zUckGgf8UW4U9ovKaTJ7FCH6",
  "key8": "2zhHF64BB7nFbwYZK3njhb1ZRs6khMqKN5Js2H317J8FYUiyDEKqCCtRTPHYWDMrvyFPL4PVScjurB3XbR3aW61a",
  "key9": "38ZaqEYVHmMTMfupQhj1Lg4haeu7RPyR4VQUmkfMXeEfu5vXfNBehqNokHhcT5YazRFXPtFaSNPiAwg9okmgLy9Q",
  "key10": "muTSVNC3HSpCMC8HtgZfrX484HxXUrpfsAEXLqdmrSc9TeVqMKeLoQWRQ79EiiCMuys8LCWjtyFFiqM2GndfP6k",
  "key11": "5RCHGxt1uT3GHqy8kFxDvvEAHSiyQYbvLtBC4ZWmUMQ6epEPHYRmqzq3ohbKM9LqwfgNWQaXMEFPqWKUbGcSHWaZ",
  "key12": "38Hy1on2cnCmQa3GYzZ8mhZaUgfs5neYxurUy6htd9wuUoR3ySeLLu8chxg8Cfm41QupJtoSyNG6yG61QZYt1XQt",
  "key13": "2JAVSU9xsf3qGgGW2mtMLiyDDutPgiPhsaVuEVX1ZSNkWRmdz1t8txkZbaEHsYfH91EPJnwQUx72JJjZHV6Zkskc",
  "key14": "455igLgqf2LmAj4qd12xRVbMr1VDtzVnay47xXrSqcsbDS1mG3ovFGMM4BdcV5mUvnDp5QZLnRrphTQ8cg1uGjDM",
  "key15": "2ZjHQBSa3npLrwQmaYDyVfiacpNLmmhdJhsALb8qGE2aMTEC3145ucBnGA8uKoFeDD3vC9vBP79Y4DbgvutLF2ye",
  "key16": "5C3tvX5tvyRQc1B95y6tPpRt8VGf4ZeYp5xizU8dJFv4FSP4qZeTdyLpbUPh8jzc5MQau9YtTaqt3D1YmG2vBCU1",
  "key17": "5sCCv63y4BUZaUieezTfREanTVo2qgxjEgMvhjTACR5CXEpaudWSP6KHU9VPFSVYag4MYqX6bJoGnVqQL1vL4j87",
  "key18": "JE4kK7jnaNN9Jry8bTS5r6qEs7MFqYS2P3Qc9ifM2e6ST16ik9jPhMVLampeHvDgg432vJhajnSZWbGKY5Rj4xU",
  "key19": "34KsKVUZ1333geSdbkJrDwrMPJTuJdSWDQDPNWg3XsAxcYi3pC3gQeMZQV6qE2wrYTYmbfnZpPHAtQMo18ZPNVx",
  "key20": "39GPu5B8ZKywCErjP2GT3i4B6cfAW5xYCaMXeCNFY2iPEzP4Z8o95DapdUP7mW17nCHr8M6r7fCeZn1xroPPQkfD",
  "key21": "22YusmMzbeQa9cSiPwGUDgva47r6RWmqvexFtWT7jxS1KWWMM9tEK35qzEmqNwLGTq5TDfYagvqvZUTtJMDm2WVk",
  "key22": "3Pn9E1SGPcd96ttj3iTP4FeAsj9k3XFcmpbnYctRE4ozPj4uM3PBWEygiKgeCr4K6HcytW8qkqjG2WjJcGX2ufJq",
  "key23": "4qEPKX139weFp6TY8Qi4DH1pqy5ge8zAB8ANH4Z6S5uQyUB1EdeW1fzD1uGetyKExwcPuSQ15ddpBhmRysa8Czwo",
  "key24": "54e89KfJGgESYgGGuk14BtXqzgeMuiG1V5x8EVAnjyGac38EbRMhCBZ4Mtnu1k2eCmSmtYKBZiu1RjEE8riD4PHd",
  "key25": "5ZHBjtPipcQPpmoofQTeofwVycidibU7ZZWD4iWTuyKd1DLCCfyyHV3wKHJgtxovTrAYiryzQZUiQvV3AACfRz9y",
  "key26": "2LY1RYTMWJkNmxK7ua7FJfTpYmAN3B2YpU3tqSE5Xid18yp4vcGpbtTe8WF599wjrAWpkgeQJMNJDXwTMZZN2AfY",
  "key27": "4yxARE7JWCgY8RPdZRJCcTciHBapSbaG7Nsffbpq1LNCsb6qPTNSGvmzEGfV9sr6eyLr2n3VDatnmvt9oZYnLkwD",
  "key28": "nM2wxRbPZoc9AFu4K691u4grqDXhmRc5frfZ6d7btGUF4ccHY9xYExz1LTn3UPTUczMpJXHFcNXEaSaVC1dUkkJ",
  "key29": "3Vcfg2UA8oPgsRsy1pm8JyH4z5MGF83a3YvNUB7tHSjFjqwucUm1jgMvEbrHfq2eYQbSUn4beMUmLVvWxrWnaDFc",
  "key30": "4TeGbRLCBg9acZTREcEohvy8kc9cc76RMJPyzdGYTsLrEcAK9QzvCzgJZjhTZiGrwUB7Zh8fbd95pKmrUun37nrT",
  "key31": "3hohuxxztMT8NkwiEtiwVTdm9MuNQeJXHZkWeazxkLCjp7DEhnto4aHLhvzDEji2ikhrAqwU9iQW4yzJ18Js4EEG",
  "key32": "5tN64AvEYcU5Fo4YgUyLJFsJdBCXQ7HfsTYubminq63oqE8CmgEjS1GTHKF2fg7iVpWbETxEPSTauVNRYnC8p4yj",
  "key33": "APevbEEzUHF7v6q62dN2FtVbuQyKfT5VPqkgF38MYjgTRgd67jJ3S5TqnpSuMg2jebmyTSLeSkTRggocswZDWVh",
  "key34": "4uM592UmVnQmkSBgayGWt3UGpvqBjv4N5aM5woVsS8gYdx2Q9RuSciZM1kWS67QvbvoUeTbP4Sv1t3vcgLrXcxXk",
  "key35": "3KGJyBDUv1aoGwSkLXkSSFgarDGxBoN7vk9cHWPqyJbFCasoN9E3UV8tQkhW6V6og6Nvxf3ukToPvKYZoXjEKuQm",
  "key36": "43uECvjzrZoer1nPFEPdbp5vKW2mhmsMdJ9AAGyuoELHkKoeSzRg3k6r7e6dqoYd5uhnZtqi5bmVhu9KTHYpsfF4",
  "key37": "258fbiRAaha2331K8VW2Amr1QeRsgX9gVdUnt7RokMDtMEVzMDqNjaqottxXjkwDfNVWSQKiyhaMrLGZGgh4vjLi",
  "key38": "5Ho4H1M4yB8yLKfbP27GC3CvRZXfkgwewbWm8tPHfebYWSPVnRWDrz9wcVirto1vqzuSwMBcQpXMUddnDY3CL4G1",
  "key39": "4vFS4dK74pCrZ1kQcic8iUQ1sVFL2RotmhijH3p85Uf7Doo5SqgPWZ2h2iBtu7EpqrjRaiAYjF8VCcjf3pvsX41a",
  "key40": "5QAjArjKSMNTKMw1fcr7U2n5AAMtqJjertG16sJzfGdM6Z51pkafKDKsH2Mg8msVUB4ks1PsBF28LbTbgeoerTn6",
  "key41": "5saBycygUWkebWA3e8K8FVMYcUom53SpCHgBjuGe3cxcRM9ycFWkCSafF7gHDgc9VTr7fa83pum8Q8rUv2y5FUzL",
  "key42": "2BRWsBh467TYqbkraWm72tgJoM9yLFPTWAYdJg2pKpyYNWB1n8M9MKreXvTvJF6mjkqY5FTXAsGti1X4rNxmDjgw",
  "key43": "5iGSBuyDpAhPHNsCrMVdquK5e3W1HBqy2zxJv6aN1S6o1VUEivX1M4SZ4BGxHU6oLRu2fGmno3GojR2bsgPNH8mc",
  "key44": "5T8fcK1JWnmjzgwYW5WaYCsMwWzgX38Ts6Afg4x2VdVwtNtWPAUzRB3utTRbyY8rKKSk4Lnqgv3HZkx6Kpy413Kp"
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

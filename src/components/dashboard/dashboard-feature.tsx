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
    "4rj9kC727VPLGxqF2gTUyvs3zk1hMkQqR8fdyM2mm8FiGmoepB54AbNrUn5fR9dxd5KiYosvs3BRp8tK8ae7aHYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsUcHJkHWWHVeKaus3SA4ogRYPcNXhf1yEHMMNpfMSbGBdrAqWA7VZhxNjjQ3YeKUxdQEdjCUXQ4dm6FB6uszJX",
  "key1": "2jyEL5G3VpGEEj5BuKFS7PZr4bYovmZN1rbbwbtmyCc15MKyEJ6UUB7fShC6pDjjoPZYL1Jfrud6agUSG6FYJaGf",
  "key2": "5s1RuEHAYBD5iUENCTBvohHqqNXpggCPZ7JTKVMyKEvm32XbiWnwoHpjKqcV977zEsssh5Zok8sdqxqHYTWGueJz",
  "key3": "47f5G5wbo5gFtMdaBinQAPYvPjS5afdpRzPRKkBRr8Wd8sqBVN3Vuvc3wi9oKJiGY3xWW8Wndf8qBfTDJ6A1NSAf",
  "key4": "3uwFXnRJUewjyBuZEy1JuJ8Uf5G3CnwZgKNTL3jcsNhcQmTPxvFpPkbES76NaTbR8PnBxRhJ7sZcFKiStfiE4J6v",
  "key5": "2Yqj9mBRFsK7ngMPgvUiSGiRTRYNES7ZpDTXH34YQAYma7tVSdaKS8rHxTs4BGWJ6nHKs6xZRsPxt1VJhHbZqqbg",
  "key6": "2VoMunhtoVND73do3J5pKk1LEmvAxyPc2rtT2GP9dy3sM8ZpQ1vYQAL4QNW9BNyR1F99Z4TE96pxMDCtc49Zp772",
  "key7": "3Fv8yQUoDbbHDTcZL1LXGHkWfCARAh4sEH81CJzvYt8fCNTpGFeJrCx6odY8hQGfvZtB6Svj16MMLXFBD83ahyqx",
  "key8": "4WTaEjBXB7BnDkePozC9hKJC7omWCbXPhpzHwj2LBJzBsi4tYJ68qNtKBzCVY4yf7oQPptikkxHJApcASYjLATKx",
  "key9": "2rhF6n66z5qW1jpYavg6o1MmsSBNeDqgHb9tQFvTLJG4jGT7tkPwqBKp5dbXck37zJqUfwFauXkjBHgSoMqiLzcv",
  "key10": "upZJAnRtDbBA3M7NX3SurAZ8ToXzdipKtLJpVzsqjJvVTaMngqyCGC9wndr3D51wgM3TxihEWf6mAWSSuwfnTpQ",
  "key11": "4G2WBs1Wd9tifpVz5PYcHxYH6xXF3QCHTrBKCsQp2fVB6PCnf98rUu3McBU44Hy1nWHLoV5AkdkEhkivyS7KTn8n",
  "key12": "9ENCj1Y3pGeWioJWNSvE9PM7Vd7wHwDNCmRa48SjH66PZ2rvAdJmtKcZ1MMTdyu38XEq8x8MmffqhQABMCHVGwF",
  "key13": "4jpP4mFPrstBT7Apb7sNtD6HbFh4JQo9LSuPXhpwKfyKvdkE8TBdCfcuDHT9dyYxc9cvSbCaxcrfxzk2WdG8mAfH",
  "key14": "3s1vPTsiP5WRqE7ueRicLJBmWPJ1RCAiPBKjQtvX6F8BryRHrTNmTKtVY5QgPQ31HtzK1k9VqWQLJDsyuKS93CHW",
  "key15": "3mALrJdQXnsfNwokCodh69QvZUesiFT7VbeNvgn56sHouvvworK9rq3BMXE32CafFtTrWBAWrPqGBTYkAFbGf6WD",
  "key16": "5xevFvFUX1gcVbJn2xPZuTt3Ej34UT1pgc2xVLYTPXwnhZygPrC5jEEJEo3ywT4guYZJfQfdDPVb9SGLqKEyTCmS",
  "key17": "2hqfzJrk4o6veUtHHVH82XpKtQYMcXvqgCB9cK2trAFJPU7oxwPoz9XQziCkwMB8Njr3SuV1nS4mWFfPysPdEudH",
  "key18": "2bonm9ML7B9XCuqJSt5Dh44A7iLhjbVgric7cBvByPXw9SLjaY7r8EaHwTnkMWEUEDRXWA9Vug4AHFjFnkZ5Aayo",
  "key19": "2YYVWJXJFqQ8Dajb16AXDFwxQTYAwYEgtgpbfetxUdrwxMBdS3yMDMhf7hnmyJjNY4n8CFQ6tPYUiMn1YnTqvm3t",
  "key20": "5BWu2mo7e47tTSxnYcNjjuSNu4dmHff6LZR9PFSKdfJvovHMxvWQnJS8ME4UcKHj2vvrVLfLr9qqrTQULYqAGvBH",
  "key21": "2zBbr6nwV6ciuKXPtaFVX1ZwtU3uG2pgsb4RkWTAKAaB1SasiEUVDnCn1yDGLnMefRn3gACD3FX71NFexgQm41HF",
  "key22": "5nhpDQ8UWsNYQXL6zwh41vDBiFyaBSG9LxjBVfoFx9NbDVspnPpZm5t4Zzc4WFo6Nn1DfitYB7pefgQT9bN8vYh7",
  "key23": "3Nq7ovMLnKyHA3pQHo1Bya9wQKcERBtbRq7dinD9es5ThDBzJcy9dot7m2a5NZ71ubqCJbXtcdUbVRcthb8mYYpW",
  "key24": "2DoyDYtXs5amj7xbEsraUsEz7XPpphLusjAu5e2rLgcemiWs8mbjQWkryrQTo1tgZvatf5JDewSYpinqtUsXFjms",
  "key25": "36QcAPdkyLZrvjoQ4zZiJhBHn5UEugizCG9KeTzV7txKT2VyVfgBWMPCXrEgAveEUzf1ezYnXBtH8mo5oiuqRbeg",
  "key26": "6AbTZo52HLa2183g5f9TJNgTdeCeAmu76473fxs4gWvptZ6DMPErDiNMhdcJti5gUzFL6atyi7NLWedWDeqGWqz",
  "key27": "5ghV9jSx3txfZSdemxaVbJUuaVHNN3Wz1wo7HsLC22Vs6henjm85X4HmPYUBtUyrFHJGCYxXMaDeDfzpTzfYp22F",
  "key28": "4PWkayw2inB9huEWJMjC99EqFnRTakKdC2QgUJFu71fH6c2wWEPjcfEp61goxbPKMFLdoi96ADeNnHyYo4RojncS",
  "key29": "5Yg98eksrNBvPpEajcbMdcrjnPgE4JHQ2GiB1GQG8SwdYQwfokE2GyU1EE2VWnq4HuCUfapFRuCTdo8NzB5q5YGS",
  "key30": "2UGcNmRTGmt1sWRzSLDmVsF2T5dyZqNQiro72vQD2eYnFnGnhTdaQ32XDCn8UXorrAo8TpFPJaKETEiuaJWukcfz",
  "key31": "2Ln1GnPUVCCN2GBbob33E2B4N2ZatCuUj79iKf5uFmnPqMVMK9vbXbyY4joLLaYtb8F392vtWxf8NNSTNv4Ufo5h",
  "key32": "5SJ4j7ZtTGxrZNoRwcVmgppxz44oiG3pSVpLUkyLmHoAU5PJA5vr6aCq2Bp2M4QsnbfiW2LFhvZCihREGZe8TTgG",
  "key33": "3gXRcwUWbwha76ABKCm5kKTTLaAeHdgjoL7H6L7JKKBQUVBspAkFygR4H9UHKZwisxMDfVq7mXehzgCafMkC3egt",
  "key34": "3gbkDqJugW1JCcH49rURAuGLAWKcypGyKNdNGfaWYM1Tbn2cXG5qwEeZGaebiekxfxRkvSVa56NojEC75sqWU7QP",
  "key35": "tk1TkVPdnbTYfp9zJTiEWiPAvBHWxsT742Jd1NQt13pajiEj17H6Jt2kBDRGvb5d6UHHwrNbCP22eeNug6YDvxx",
  "key36": "5JbLAcX7PznSndc5AQddMohWGFDbRE5bVWGVD7kqncaJpSLZA1f2otMDRNTtY6rXNL9FyLj56MRT1xJcihrJAh8k",
  "key37": "5CVXCFYgrZDvRkrqgBxiDi9ucQsFL8sePn5zmyuLTLEmvoAJRmHa7sL7c8qHQABzDLwAKrobgCisaeS8WTEda6kH",
  "key38": "4Fd3sXwtaKgzc8MEc6BQNRybdgsB9yrjifi3kCv4gKc4a2pCsV8Kzg7FcwpcxvhAoHE8Cfu7rMm3pEH2kxgFstce",
  "key39": "4kXvBgL1ZTphfrnFatmNp1m674aTWekBW6sETZqhDdRzCC5XAthKwb6DmTYtpEsHpzvZKCSXddLBFihLH3J4reJv",
  "key40": "qqEZTy9xrLrwp5K9Y73A32ndfHvUtahur34iYug6nRyxThqZRrXfh12K1cioqi4hb5vTN4RDkEMpRoqkgn3LWu4",
  "key41": "TYSLuxvZyyrSLRdu1oqeuyUofXF8CeUP8xhLhJRj6FxiiXR8LcwHQjRTGNqhz65x7NE8K39VARNdsusBU8dWv5H",
  "key42": "3JiCkhL5ArMUa6ZYzgejhPELyfdLVxmFRQ4SkTHBLHjmgLEqXTuabSmsTYttPN7YQsdaRrGbo4VCceaD2rBAAoBd"
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

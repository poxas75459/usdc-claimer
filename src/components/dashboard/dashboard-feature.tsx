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
    "2y3iMKXcuSn3KYxSAeaCmsJyDMyZcqtecNECsK4qNxX633zymWRGsbc6AeeCDVvADvfunY2aoh6uiBXUqeGywWXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "623W5vc23mSfcwDCTWduy1so8ZqA2kX39minofuJ232MMK9xpmhGBHhSE9YJkCRm7RbZkU5neJszQL5fAdsST9V3",
  "key1": "3D1CSCz1QEMnR2bhjuEjSAyBcJxLgdAMTXRQhFWfwGJmrV5LcmosF4WursPp5ETh16gs7TpfmfFTc6Qhe63juhk8",
  "key2": "2rVBuCT8b8pj7Gs7wduqWW6FLjZVB17Spj57ojnq9Gek5VyvGEo4jAbaTHgJHphdWugrPgZsZvZhbiNKJt6XXuCj",
  "key3": "5fEgLx1CYJ7PEmRZt1hHvKy3eB4FTkJmjYbew67eGP3vZxCANyVAyXD4rY2bUnP9Z5WpL4rCC8nDtRVM6vbxpFQ5",
  "key4": "Di5BsAvTDvGAHSPi9E8YPqJTbmQ9hczgF9EfWXezf69EyvfrcWi6KF9g85ZcT991U8Gu6GynKkvAF4EHp8CJ3rx",
  "key5": "5MpSm2saBbp3FHEoz62VHqjutNobM53mrMwUnVQK8qpEaRiVhtHLGMcu41eKj6BmHeR9fyczJReeDFggpRGfaYrk",
  "key6": "63tgMjC5kjLoE2JHGj8UcCmNZtZGVSDHrAqFENXSWDzDVz1QvqwWmc9XGD39MP5Gn7Dhmn7x524P2CtmwveDnLz6",
  "key7": "SYwa4NM4zLXogqLZoK1avE4Fq93oaFPkapDmoNkDGPdCtESFiASjfZXtZBGyEKB1eEJvqpFkv42u3BPqjKU5xDJ",
  "key8": "2DXKhyXhjAJE77Cu42vaoKjuBQwkqgdxT7Q4EdPuQHMM4CC77vsMZ4j7cHnYV9MHsjXUEi2XPSUFzkRe9eGtGUJw",
  "key9": "p3BXAWu7xCD5K9vtg4E8RFSJB2hKaYjYUiCmRu31hMgjnmWpWJHw7XEWAJv75Q1VLishH97WVTcBPHEvh4u51wE",
  "key10": "2mEFKLLfwC3sJsnmJevbMFXfqF7FurFm92pMWjfKe2qqtKNN6KPtHdMT21vHMwHJhkpNBPJCB2RLRsYkpF6icjTh",
  "key11": "63zoZiv55Eg18M3RfBQCg9yh4UULkZBFVsSKfbBeXatNRWXEsR5YgaJeA74M6LwYabdL7bPCm8hriECNK5p5CXD4",
  "key12": "ziRWDC9ff7RhQfyNvBzxVJM6Fq5YyeQ2ZNFBkBYqAXbrRHMUnxEQkKdojT9JvhJqmtScVpkLyFyhZsxFtMJ12yY",
  "key13": "J7a6iUMQ8L98zN53fjzznGuMbkccRfqPqzQhnULN4ZHyTHiobm1DNSumnvxM4BQjUkYMKAsrUU9wFjh6sG96c8k",
  "key14": "21FJjfuCveKCYBYtrpS2DujX3v9qtwNhdjRcYWnnw3QUASUWEufxUseChAPrdPpA2ynnsKRjuLaFym941orYhTJ6",
  "key15": "ap8bZHXb1NtfkDjhWgr5pV7nang5yEkECHwYq3NbaiNCUhQruTfwbnMDkN9a7r3QN3kDYXaTXRfnEAGiXTiVgQm",
  "key16": "4TmYWPGvMa9jpuzHTZDz1ew71ixYGML9N2v6FgqLqvYc1VxkAskb1vfbwnkoC74E7B6dKw96WuEWRU4wdrWoPPCW",
  "key17": "2tC5ei4kLmwPhs1o96ooXqyDuMKKi99JAqEZcNUfeLPAP2Z1A7dB4m2tDeURXC1aZRUs4MNmRC7AF5m5xdwRSHRE",
  "key18": "5dMNbgktp7TQkrLj7Ew53oUJVjMPcfgstEJUCTS5uGAv3JQjmzMCi6FXxeHLgHUNMz92jJmXfYfWaciWuXLVZ8cL",
  "key19": "33u2tJi4DWhAsuKSMuTxSUXAoH75jeHP8QAohzumnhYNGREiChJ9ANkZ5iV1SEAfm2T6AyAMiEN26XrUg6krFseq",
  "key20": "4Cs52aUd27XuE7TE2s4aiMZVK9HU2J53EvQAqduQC8qwr5rTBoT8WUxZwoNLTHuweS2BLEswhd6nY9BXg4XKhcee",
  "key21": "ww9nr9Kg79UmDndreQ36Xehde98Cmhs4Vegj746gNFs9TU3ssQT7DF3YUn11iNa52adCc9kA2grY1a5YAptbR1G",
  "key22": "5rDn1MKqnTGvWDjD95j5oE5AjXwx6kMUiC1JDCZ7Jp9nFqxnvMHpXkkLSaytiACBrbiLxoCw42vcTU2sbRJHZEgs",
  "key23": "42eAnyuezB3GK3ZfBnoMevLgmgoZrwmBLuwY3UNdRCp6UhQDk2ubS9yBpwtQaRLaeAfRA7ZuwYPCQ5qu51eJ7Bsm",
  "key24": "gyAMEMgmSwtB1NfM8cu8ect3hxNYd9W1t5DBP75cK52mWBZkvmTJHF5MAGvoHGrMcEqkwPrNDaEFiDA4fghSSYg",
  "key25": "5ADzRzTstkp8AmUkaHgjPkTBosiYh4bCPctBV7YRSxuHmeAzARd2bUP3RGHwgguwMZ8VyGnhsveEM3j9b2PbMp33",
  "key26": "KKhzKXfaF81roGfBCTTavbjcAYtnSmTPytL1CDVdbS1D9WcDA2jomG6o44PgywPEM4E8B5fsj7KG75tCpQBLewD",
  "key27": "54cnVsBc97dE4yYMrGYysGwVxSCVJJ7ekFZk4N732wDfsYqaPYitPWU7Qt6YmVG6Cru7QribmoTx7SMDrE3x87Yz",
  "key28": "MjeLi217pqGriiLXBc1gKTs6Rx3Zws1zJRRLPGzxhYmm6CVt8Zv9U63ZsrsmarSU33Xu3aRpf3pTLdJjR2HDgdi",
  "key29": "5uDjLTFDVSGSZ4EozXjPHVpk3v6YoHPVwips1Ac7owKGdCWrzEaRNYvLXVSdZ85sue2twKx1D74ADGamzueRWtfA",
  "key30": "4cPWesdjaBu76hoemKxycd4FX3E6fzH9UcDrPcJQmLrTjYnGgqstGHmgyX5BeoeKUYdNGoxCoMYpzfBB3PB1wZbA",
  "key31": "5forb66afeU6MhEYL41CEwJPDyZZjMi2R2pkMmAZSdFDXcHgwNb7NACCPjrVXYMD7rNNK6YEnrLpK4vSksM6wVnM",
  "key32": "4BUztHUVA7HgXZywYokLQGsnjz4uMsNBbiH4N3e8Y3m7in9u3j1TMG26AfS4VPFhbsGayNbmYagoT6s1n1YQRgMz",
  "key33": "3vAtWE2Lotwr4v4mcYc1UjCiYDb8VPkVqViW8VUNuGFe3TKkZLPonQegUkk1oXyGSUyowNBXJZjN12wcRevCehiw",
  "key34": "2wKMv1CYWBBje9Mqi4ZKT8antBoH4tdrVbu7mc8TbisHGQ6tCdhwmNFTP8GJbygZiDr4wRkrcoHew9RsDTMuh4Gv",
  "key35": "rUzn5BLx9ujHj3MDyWEWy3U3CZKtS5Lc75ybsd62KL75jbseUKoT7UTcGAVTNU7CeGsXpps51iCPqKxRExGVWEJ",
  "key36": "5K94eXDDD3Wy2JcvhFXyzDk6Mda5VaujFQVm1HUVqYVfCSt5JXj8LLZqzBWj84sZAtw79NdCgwEVmmjvr4JRgCbz",
  "key37": "5UU8wTa9jZZuZNrADH1qFr4nXn7xTf1xMCqEAsxq4FNhKp8E36GDTzD65V5XrRennfQT6FMR6dMFEJ49VPJq2EU",
  "key38": "2VymGb5eSjxpmYaExHvkPNrsssXncmLTim6aokc3LyxVvXoZ8TLwN4mZKFEk3WwH1CqRk22UDXUi7Vi3TqavWivG",
  "key39": "4mMuvfPwKkp5i6Jb5vhad6zP6hvc5Xa3GfB2M5Rz6eDfAcRuRBUxfzkvJvFARoTf7iQDtnVL212nMjMsPz3ZkrFd",
  "key40": "3fL7s37SoYFv17xirDa5URanrtCQNWBkGhxjJT6mghSZTGrgg6QpqVXJGUerD6c5EJoyzJ6hy1sg63cjC5zJEUkg",
  "key41": "3byZejXYfDAw1z29StVvdYxjGb7VZwDmtLTTtCRyujqf9nRzynis95shtFrpFEs2GmyZgfaEyHdTSqJC4CVbmzxw",
  "key42": "o4pig8D8uXEN5jWFy1cYTWJreaLLwAP9iafQWDmdmysngmoizxGi2v267gXs8LK2DkVb5cSD8cxTeD4YcLzcKzT",
  "key43": "2EeR3Rx64Qe7FjWeZCA3J5KbAK5mGzwUX8buTFriMvVSFcC4hT8aVWYme7dPk64EkY151FuBzKhwxxPEBV1PwzQK",
  "key44": "2KriyFqUcMgTJ26YEFpjbVtHdLYNZsszdX8DhCyt3diBuHhLDKRtgG7DBqN1MsH8sJ3YfywVYbHq79XX547KsmBG"
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

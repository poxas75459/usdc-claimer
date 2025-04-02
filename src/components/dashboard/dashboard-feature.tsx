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
    "429SDHAiKB1YZ6C8ugZtXGWnLmERUQ2iDf1WvzECvZ8E185yBU556Hfvc1rLpE8u4cpKc7o2pCFru6cLhVvGFJes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tgMB1hYieEf2wYqFP2Qyg2GdVmGMBLQGgG9Q2zVCZ6iXeh8CpQdCbair2dEbT92LUbHthPqgEYVW1uG6y3axReq",
  "key1": "3K8tJA5SZRoNQMJc4dferjtNCCcDrMxyK4f1vLyorqudKYtoxgBUCPPcbEd8xx4WohB5VBtSUqdyrjdA9dCzMDch",
  "key2": "r2UhZniDj5XZyqFvjen2GP7L3kPc1KXNjabGK37SSSVgpiwysT7ku1f2SzufY25K6ZiLJiK4SxLQbmind9ow3Ax",
  "key3": "2We3X7ncPhbnUiPL4qgJAygWThzkCWaRnMoUL4Awy91pjnvzzkQeQxjvynKx9oZJN4FwPuskehmnDJQJdkwbox3K",
  "key4": "2ZfCK3veC39v2588ZPUwMyYgbzFminboXLHzYvPnX7KQ1XiExW8rno1rhFYiQJoqPE9Cit9Cny2kKHmGfEt7X9nx",
  "key5": "2SqbBujwTpbEouR5vpWccKNuP56FtWAqYiaqduTmjvtjnfHghW1nxe2cCofcdfk3bqY3odgj3a93GdCTBmNKe4Rj",
  "key6": "5wachAFMy36NqPpQv2YG74s3pvCumfsnp6vs3PwgsRAUkd4L9WG2R9QHQKdbLSnnXtygcu64zoBwbKuHTRcGAXV5",
  "key7": "3oiCvwprunEZCnnyVLFPBSwFA62kWuYEfQhLMaYfLMVVi9yCyNgkx3JCQuiRBssFs3TkyR7XK1n1WVv72yq12apF",
  "key8": "4z4Yqo5J1qcy752spdV76PQiLv8GvuAq62mUQDUyaNdJsAFTcWcs6dZYXtVNAXM7efkjiqQJ7qS3LamgJFjagJzp",
  "key9": "3nfLs4JCHSrKwwCFMNZ9YmK91uqViQmYdbbPWYFDaLxi6r9WPtUTxLoMnH6sddMpeit59aDnnJgzAvrevFjBgB5j",
  "key10": "4H8KAjNJ1rRR9DSSEnbNVTPb2wnhJTk5PEyY4kk9MjkU5oKC25xzTLSZyJYQJvz6oR5iJ1athLVptTNknecq39xf",
  "key11": "2KoWGTvbm8ooXKohYG8Nd8Zcw2BC7BcLHacm121thWYto6LqSfLjs5qMZA5rVGZ4eLGJHKmvjfN3Dv8HH7SL31YL",
  "key12": "5fMRDH2JNk1x8LP5o1wbAw5Nxv22iwqi7vdXs9URBnGMqiwGDRREsezKnJUPZz8cSKnDiGDtqeV7TkL9KXqVviyq",
  "key13": "2ZUhDWQsgnAPZwYuVRKFC1cVLctHSoBrDdyLH9auaDNajkMoCCSqQgk59SuHYjWaNNDJJfRKeiRiponx5bu1onMj",
  "key14": "5x1PRkxJsYKVuDvRLt1z9SZCZnqbYs2tuJSLLQ1kf28PAKeh6n4wrnSUjHaDp3fYLyLX4Kb9Hdj8MyFCEGtFLUXP",
  "key15": "MYCgAwghTeWPAg1xCxx5E4PArTgjnHuFZskDjgFGPoz3YkfecdbjefGEewTTnPkyoB9WnKiYgyrpBZUeZjvLQpC",
  "key16": "5UEJeBibP19Jnk1wbM2Pf5DgfJJy8BVMyZmCY4FBzpknvme3yTBj2qVvpvZiBjp3Qh8zVfdWeQVeEwD8vWvrUc2r",
  "key17": "47PrCpfxJP4BgfbdW13a7Tee7PwUwgjztYRFQUokJ9wjNxEGMASBSBvqHVbvgtRJ5K4pZdvjGH1zMoHmzSJojdnA",
  "key18": "4UBNyQLFrdYfVYoQbzgLkzPA5bgCZ7CzoVbJWzGz4Fc6ea74oJaRyEwWAaGdds4Fyu82Mf11soAswNw1xCb44AD5",
  "key19": "3GivEAc9SrcoiLnLrQyFBxsF7jX4aJfFjMqjzb4i9BW2py7fpRLhzPHVQg1WGskzTrFt8jdvLQmYpCkP9dUMtydH",
  "key20": "2nNLeoUxRvy4bTMzoyThQ6eMdxYmb7aqbZKV6VP83xkVdfsq8qhHDqRs5N41pBDAR6eLDr792wiGdgB9sSy44LPq",
  "key21": "VirzM8eYNbLKDuc1gbmejBaWoPdUrVjqbdguU2JUKn6z9yHFYykQGf6yG2a677osNPjP28oJrERdgXqR6vcQaux",
  "key22": "K7SEvYqMBdf195Sjq6HCHECpwAyv97TxrJWE6Yy66dxQBhs3zxQA1gZsTPBVm9bbDZjoAHzE1kEPRDAQ8y3iKeA",
  "key23": "3eex6XSKT9ouSGTaHWyzsbcdQopk8ANxjFccjivpKd19S7LD8CS41ipyCH2reXeDYNmLFd7iJkZ8XQbgae3Dd95d",
  "key24": "2KUzHBmQJrubDPhCfnX4yFY9huaZWQQqXFaLFWXK9H7xEdF1cgEUoayg7E2tS9HDKWkPqChYCyfUEyMevRWqSH62",
  "key25": "4d4cTWRbhFuDi1roZTADnwZKzZbHPqF5Ab6EGxtxstTo41prKLg6yTvriUyvERDxU1rf3aqbngiBUqzeMLoWZ9f2",
  "key26": "3gVMEbiVTg4wiamJJdwaRSTuPKvHTDRAyhQ5XqSdmcB4K5taFN6MtPT6h4EfvxnB18oJFbHEoKAyvApApRdAJkMx",
  "key27": "2Hww73ofrJyk3QS2AXd9CVd8KUKHTbNA2PFycxaJZyeU5YQp7tDe4VAC8vFZ91eJLXQnDS7EpyFwQKQJV2LuqNaG",
  "key28": "5xh8S2rDD7JcrFGqoT8cMuf1729npyGJvSrBEdfmrAFL7y95nV3rPFuLwBR2BrsWquE7Tp9bPC1Ap3F4p3A6aJMc",
  "key29": "6ZZFeTquvG9UrEGJ6pN6Xr3SQZdPmySbHJKoJDdxs9iS5CoE5GuVQXW54tSSZzZYuX9G6Q6nzipcyo2ZyrrEi3w",
  "key30": "TAdivTd7mY5VrwxJq3jL74FkSrwtEBnT7LEevM74QfH7YvX2Bs3AAdHoFqDp5ZNbe8neZmoAWZNZ1V5zz4vnEUn",
  "key31": "jjBPKpCAvsceUAmssciSv5i85qmjC6EeAtfCqEU8LMywE6LiDjT8aBCxuuzDQsKzSya9Cj1rjjzd8LskhV7TobJ",
  "key32": "5PX5vbN4MgosdmcucaH5UV6STKmNdnL3Uud2PheEhqRs4cuorSW4o95y5G4K2QCvhrYLru5QQDz934N1uDX5sBkM",
  "key33": "2g7QRsUN5red7tDQSHp7SPAGoLFy9tTDHR5Qw9aDkuD2am5E7LZvR3YuavPbuSzDBWyGdn36uwEdBTGuT5QioRWT",
  "key34": "518uhCSfMe2eALKcucDL18x3dmp6TKjR8sr8NzvGbaYqRLqNdPgWXC186gnd5ssshq8HLBBxhGxWPokEgFiDiGte",
  "key35": "2K9HiMvKFzAypGdpgwPHsVZufCCWU2saAYh2aJZ6oPhFj9yWiRe8gn3JZ8piQBVgBZw2brDwKsfCyTLc5L7Xs8AQ",
  "key36": "4fr3vg4N8R6tUcgyQNwcrSbTtD1C6C2e2KCLWgpSBmrPZMZyxXTBTCF21iPzh3988FK6CmEedZhSrx1jYnqT1yYh"
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

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
    "2ydFJueWLXrzNxQgcVzVFMABEFxTrmFKWW1WCubTomVsskzVAZC6T5Hdzc2eunisJVfM4Gr64LhUPWyoiC8zyoxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PkLpxij6odtvBXQ8RVCm92yAuLay5dPTGBXBAryn5q8b9E9BA2sBdeACNy7atreVuz3S64yNNBksqjY89D4GTYp",
  "key1": "59ZVhyYsjqeJmWpQr7rMr6SsjBsYuLtQYEm3XTDBjF3d8rp7sJ919XsK4cusWPKHmcHXKbxz7s9FV4cq4r88NWbR",
  "key2": "24sTgjUgqJquHi7mNFSofqw2EcWLHX1d7vhbY3zPY32zMbYuFEKcCqQzRh2pAw6F7ZzbfHMAj7mSBUAycVyFG2do",
  "key3": "3PVw46HQHfx9LpJ8GxsBVogvgeq9iPg82FVd8C3uK8ia5V2UNDWpkmtR63vHJqGS4Yu8eciCRBCXytzZrAKkq1yA",
  "key4": "4U5dst8XXF5wjAgaqnN6kwUipPUJ3GV4ibL9Ss62WYZTkjjZwruXCzVCZ1AEdJKjRr7sdwAFws5pAkYiJuxictpK",
  "key5": "zPQqKetwkGVrom6ELH7xK2UUs4PMoYr2iccFssb4nL4jyRkK5VbrEYm3bXsfMcs6JEcQFuJxfKwkAdmn3diphey",
  "key6": "36zazF1yDZpvKZKV1X7FtL9MymH9Tgyt9cQpyKE9JSViEQMnQymyLSoHKHL7zfGFu2w74Cqp4V6Y5b1RqzBCuLyy",
  "key7": "3FkmR28DfCRzDsBZF7N5kbMTDZ8sy1r3J5vaGo5NH2oePyJX8LLWLL8U61r6QoJitTTwAF8LbA1vP9R9AaatZ5cx",
  "key8": "5N1164Sry7D4i2N3Q9QMZCDTgLYQjmdHbphLG1yjDP2TN4rgbBH9Sk6CV9YH1HmVSyf6CG8fAhtenfwV9k5srZL",
  "key9": "3Z6AH4DKRgw9VWDQSTZHr7RAQCqKuniqEFBNoWK9Kdydj7sBX89yUoUHLGFzhsXkWTTpMik7JEv8myawbQNJYSyS",
  "key10": "QqUPzZCLqS1HppEz1it8MG6fu8vtfx4h4juS5RdFsKcV9JikzpdghLvxozaWYU55YDGGwN2FjmcDVsu1zKrcZHg",
  "key11": "3oKXijznqDNBkrr2R8JU2vB1LYiU9LUHUYxssubyBwefBNq8jKxXaNVbSFYbihkYm6pQoHnwgf3ujGHB9bnbTwua",
  "key12": "3N5FypWipuFwFZv8WdHEZin4qgHe7A3tKqJ4WcmyBSqxHuH94wZBHA67GHbfBigZbko37qQp5n1JNkLJ9rzqNMh4",
  "key13": "3ydyoc742uX2dC7gLCxSN8Wj9fsuNNgEwCpnHLuLUmxrHnhVpnP2GPWiUcHwuV2LxPyPQynsS5wjTSkur3NB4HSr",
  "key14": "3F9sGypzyqvyY8eKiPkJRjAyoiFXuLXcbBk12FCJQgUbTmsBZnQm63Qepr5dHEWUZV5pxYqm2kxNrSfJviWhEGnn",
  "key15": "nrQeKuYs39uMX9VxWA4FXEqFkUN9yjUS3FCXkXP1vDrwiSyen3yCpypf9JNPX3XLrx5Fb4Vr7qPvEUehSGfJwXS",
  "key16": "5LZdq6PmCjQf1EgtAanMXyRLyZVEnY8ULHscDt1UvTdbkAnyTu54kGHRc4m2FdWr4NCBkQiVzitui2mDR32DxNUc",
  "key17": "ViwA1C8wfQFPFJKHNLWYGGBd1wNkSUhGATaFXwSChqmf7ZnWEdcfZB76pNi8oVggzkue5GxZkFKrLViQvx6XSz6",
  "key18": "4Tf45MCa3LpCBMKx2VuVoUJ7rs4rD1ptGRA4g6bydRwa5QP35csYgLTPZgdKmpjrwncUt1rNeobEVLZmFcowFpVx",
  "key19": "52AX1ahSWTdDKkGj5ixHCrN24WbmrLbCeCKjWJvTsYrnmEdy5hP4H4CVN2B49vdRRPqiiv7KX2hufk5kNnvPhGAt",
  "key20": "U3fAaaiCyFPeKgfYoVJC1H5Gqj37cihDW2k5wBKtTQh8caR6WMs5Eue4x5wdeSRUA7KBgNYfDgRcVjgUAW1woJS",
  "key21": "44uDmEfjnCHRhePjnQ2er3746tp6GtrRGrtqJW938M2zfV7BUNWH1vTGEEXeKYwf9Rev1nVycxjkwjwwo85WPrve",
  "key22": "4LhUbgYqixDeToLi7x7UFHhQEKTKPFbdeUnK5fwEiNiiTJGkKXPS5RFHcq6ThWayzexh5X7XDy4aFEqFsHJC8a1n",
  "key23": "4UoBJ49D78Un5vVYBA4cibYMr96M2A5wD3EefmupM9PT33GVSypmdk8ayRqpTCYXvbGChDaZVKegb9HWoJfVLKet",
  "key24": "5sEoQmVjkEUgT5JkpCBhpB4kqwrzwboHSnTVEv8AofyWSEfUdbx2Pd9uP4vspLp2FgTwMHgpFGjgnZpUdLSyfxrB",
  "key25": "3QuoRpwawvDVnq3FCGqCnSjNh5Zj7NY3PQ2pMHicAUXTtHJ6G6NddxGGw4yLx3phQcsGCVxhQ3SKFJryWmVEVjv3",
  "key26": "5PVChdqb54kc3SLsvZi78XmSwyHTH9hJq4oG6SpDuRdzDwfAwQFxg9Scx17dJdnko9ZnD3F5kzekGQZgzKoTg79T",
  "key27": "5Die5nsQgT5SD2YfDgy9Yttd4fJ6XJNKKBzHUcJDaxT7sTkqUtJpiukfsF8N6u9NiUXY8j1Sn2btzhvA8cpzVfFq",
  "key28": "2jig6cZybfnoDcK1jKKmGK3guHSNUYDnkK3BxSjHXDHcniG1HEByDAQdKz1zNPJkcT6SqNe2GLE3pUpftSi5LqPH",
  "key29": "4Y6kJjwmFogSJ2SLiqW8wgDy8WsFrKNj7F3b5iqdQRew7ayjRo45DK6QzuxENmDwVXhswbC3jqZbYSCyzRePFMBH",
  "key30": "3ZA8xatDcKQkR1mqKV49Kx33HG4A5FKwZQjzSuoRnjEL7qXBMUDW9PFAt7JVt9Q1ttmhxGdnMXLhUxGtmPVjA278",
  "key31": "44cScKsuGfmPMhNqgCBMLg2gdyLGvFGKmcXQd7zEGEm6cwN7SGt9sn6Cm6D4XdbwR8m7EzsEd1iTKfxe4rqdZoAo",
  "key32": "4idraYkM45uZH5mwfDDVgieMJPp15ebdJw7JTfVnxKJF7tKvNyzjmCMGQxYzDvhs5ArQ3itvciwUBjAsxgdCBPzi",
  "key33": "5fnfMwC1hKXGEhBPzmrV5PgVhe7GgB8rGsnQra9xnc1fpPHiNAdzMAZAyiFPFjJmAfQSAyBzXESy5NgwcUpwHzQR",
  "key34": "2GM4YGz7d31W18E5xytQc7avXvjjU7waHnSQAh6fZnxroi4bCCVU37iZhYJcKma6hWJ4Mzo7BT7iRtVjnZwm9xBw",
  "key35": "DpasmytZxVhtHDQUczuinbHUTcZkNaonDgoyhYUMnDTtk7VN5r7DKz9qG6VBEKUeAVwcsJ6u2QRbZe5QVL2vqiN",
  "key36": "2W8TZaKHmzqJMzURCW9mwd8NK2vcaeNy5K2aBG4XJj685DaEJ9MPVXXCtG1NwbxVLdJNGV1wzairhVFPhi5WAaVu",
  "key37": "4NFT9HQaMPiwJZ8WPkSs2M7cPMDp5ee5jVJj4jM49k6Ckbk1gSiaG5v6y9iqytSd2ajPpMzQDwQYqMu83o3jPFc8",
  "key38": "4ThDzXWZyVGEqv8WgBSrZJwC722jCJ9CVLNJJiWAF86zwFfXHmCueqqzhQQQrxjtd8uByi73m7DG2ygWxd8u6rTy",
  "key39": "5QvU11yBXEMh14S8pggg1QCMsTjuF17YcxiNJDVSR6ArJJ2KPJTyNSUGonuykGkSLQTfaUhXZZA457Kgo7azLAwZ",
  "key40": "5ihh3MapaidXE9Fvep9p8Q6JAEtXdUWP4BRtYjJDQkDf2xsPuyRydBFpVb63BiAMHvGmGyXdFdqhfdpNYL65NG5p",
  "key41": "2rGjerTJML1HCH4RNRC3ZpGqR2oDNCYBLG8kgBBeWB4DY8BJpbXDDDWR84j75CtdjeBz1dZPEbbVcmNphQqi5pHt",
  "key42": "62nCc8mCBvEFdFHmN9ZJgsSiBRKor3N69b7dM7kVjtwNCNxyxpNLpAChy6MVz4fjAffigVCG8HBu9gotEW4x67TZ",
  "key43": "5NKma3W2uMKBtkfDQqK6KM2tBrY3dap64eZjv1jZY3wVqnXMc88y7JAETzLfHuZ1ebnfAy1p3vj9f4FkA7kmmBpg",
  "key44": "QcekDzN4vXvne6a7eBJmLzPamUyDfiXW6sgBY3uv8EE5av6SYfXK3uGiaUiQLwerPKL2NqPGwYj7WY1keVtyaYE",
  "key45": "2rGVpF2iDRrHHWXVmphtPpSut4GiqnWYXreec3saQQ8BRY33V2xLWfkCGYjnqwFZDmMbjJBjiQQGPHmTUvaW7TgE",
  "key46": "5HHjgsd2CHrh7XC44JihjKx2c92o9pfo8z5nseozwmxyTA9iRcZVKdedFnTqzivvL1G6LBjRyCux2MvfjDT5aFyE",
  "key47": "sWxwbKGd3E7qeJ6QVrGyRrGR3v3SFqj3LsgQjihqfAwe5nPMUZFdz4hcUEpM2KhZYLqQ9FjmFadBh1NkStbePVj"
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

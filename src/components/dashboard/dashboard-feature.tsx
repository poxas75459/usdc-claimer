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
    "5JbVeveupgSknoBow4uc1R7UP6HyYrCHWdFEoyp3oBQSgWJxmiKDYMDb4bycpQh6LA1YhUXksV498VarEExZrs4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k3rSNHRuqDf8kSCHpwaSz9U59D9eysR3DkeigWWMwEvui1MH4nBxzJ3VdiXbq8hj6RZ4BYeenjiZ1wizTQNtr9J",
  "key1": "3731vBoycqEz81hfnsZrqSsPewCdJQpWi17HziVATeHLzvxmf1WyMKYzegNhh5mc4n5eg3fCGi6FytE16YrnUCP1",
  "key2": "peaj884Fyw9bYYKAXjM6fu1C3co6cKQfBtjMRbmgcJfLWd9vCaRfoV6uz8b492Zys3bfocDVH7vv6vsZcYs4E6L",
  "key3": "3VfLmMKzVMq7oDwdZNH1KuQJwAYRLVHBbwxpDZwGkKziQiLLvh2h4S6p4ie9bLHrUBiHRvaR4q9fAbo8CJ71xpJg",
  "key4": "2QTY5dvBmAYqdUvYdoTdGLh62XbxyvivdUmdwJsCHBz1ona1upDoRmMqJzUeEXx45ZYdUpvJuxZqNCoV6rreQkZe",
  "key5": "Fyx4JzzusK9ShjUPG3wecK3xbVkkgmMAoxDjn7PNS4g9jHaLH3B8v7cqsCnAMYWpNMZFG3WPhL6cACBMHkkXCpW",
  "key6": "3rgWty3mNYZ4R1n7gDrX8CNQCyvgRwJQZGmi8dkSdgEbEy3ebcpkXofqmSb2c9wiSmkX3nBBuUMjudwp8rBZrUJz",
  "key7": "5czwsoC8XD6qjeTFDedq6Qo8CCSEDi3wu5puNiQWJLW3t5YKYqC7VHN7ZDHkvqSFrisJay17cb1hyo9SLBDnxigQ",
  "key8": "4wUQdJnTAMCPJid7eUwA7qacLPyfotPb3fkxbqJjA4tWkiv2xsjXoRxQF9Xm5HdSPfsWvEbhDwDBkrdTcoJ7bbNq",
  "key9": "5AfqgMifPZvanAQZLZDW22KrsAPMgHYUqk58gdrjRDe1HUvjDGyrZtJfHhkwcrDrCmMaBP5PawBowLx8eko9NtHW",
  "key10": "4ZBkZg2TiA8bPk2JGms7vqCLj8UhDMWtUoYGuosjyoLeLMJenyEb9hpRXaSmwVAjzr2S8pC7xzuBeisu9BJyYqqZ",
  "key11": "5SdizXvB2NpFvHK36enKwZBoEUkYqe6VBfeLb86XR6zkccVU2Z2pdnj1e9EyBHg47G7y1ybLhygr8BofoaALFj2W",
  "key12": "hQQBo3X31S1U64FchLbnaC6JnoCRoMDPMEoYAKjm6fwgq13TD3F17sR5TYnprwAR9AmidsYZe8FBsXZUw9na3Gi",
  "key13": "2ikGt39rJUTjpASn3V4fuZFBqQvK9AuPxRfKew3ag8oXLATW9jyjKw1RrQhwpfLn49c9bqidSnuey2L44jZzaM7H",
  "key14": "RfzoDtmoHhYBdr3xyMcQRqkAaNBivkrSi41CH6csZadu5VbnUcLEGhCaDZkpB6VMyGUY2NhcQdjViB7Gv2HhJuu",
  "key15": "2PAnJKbqfQWzfAqL1HDyxdDBEm54pHoLhdH14kc5fykSAGRmgozCTpdyHozQFHdE5oSywvzJqEWM5utUx5MbsEZ5",
  "key16": "3dKNtej9VCTvBmEoNZBQ4NU9mUxCUK6oPQMTH3RXYKbvMCZyVVci9ZF8BKNaXtnDLNukZJ3o5z6C5NMsb5LzVLbd",
  "key17": "2g7dTb69Nw13MY8sQF4L7XsU6FvoCUKWWCdXQqt6KvbYcYPfxxJaDJiUWxMMYQLfWi7SRYux1boSjpZ1DAfzh8xe",
  "key18": "5HPt6Bsp9yGwS5KakKwQDW2bTWWbQJguU7ZVGJ7NMpHerRnGVxDMbovSP5H1se1r6dkxUPwcoJcwHZRFNjQ5gcoD",
  "key19": "4tUASN4oJ2vDF2PK9jqBfYnPZRS7EfD9hRbdr3VXjxCutAkc1YQNzuhHh9aLHuo9YQXDdtoVgjeJSe44MZmaWtXY",
  "key20": "3nD7YRdaumpkC1BXBTobVgtGUpzsVKW6kvgPRPnRR9XbAPfT2vj2d39fhpM9bg7c7xghcLt3ZYQxxSYQ3WR8BgyF",
  "key21": "XPrHEYLRpQ1Wp5Z4G7SjJft4p1zzeoqRV3HLYyZ5Q9mQ38t3kbHAxKENfww4nTVNw9UVDhfju24kbyxXQHpAha9",
  "key22": "4ycDt9sYKRA25TL3xMBv8mfW3PDk12yd2jyyuoKaUEJDzGPMxftmfnmXYWWVQXPfYYK4B7Zmx8bCohVZPFJJixh9",
  "key23": "uR4cqiQSGGqRDZmjGJNfyocpXC6oahKYgkbXHcHvHcYxMXRHDotejWAgL6BQghRLtSnfiLowkgto44gpoKb63wP",
  "key24": "3WqbmhXas2g7TFjP5QZxmSa5KQGMSubrVhB6BS1skzw9cZiCYUbXM2jvwKTHcLVzzsKhBhZsTauuknBw5s3gq8sH",
  "key25": "5BjSPD5eFne8HiDMM3dFexbvu74oe1FKGxrHJ5MM8h7Xj8cHkB1WqBQpHoraDSwPJ4f7wqruGyR6ckbSsMy2hAbE",
  "key26": "LTxymkndxpD73EbLWwSvBmaPMroGieD7EcFxC1wzLBZZynEdqpm9VF7tjTQ1VZQV3iisZbWeo4FLK5DdiVAsniJ",
  "key27": "58ifERv1DMkMDHmuMZr2WSDQwUdWTtFbG2P1aa4q2L6itf5nHNssc2FAYBKZRTVyEGEdpUbEzwFicTYj7LHGbdXU",
  "key28": "45idsBwLcCpQCs88zeh1VdceSxPjEY8yaLRSGgLttSu2NCGPNTs2QkAfTcv9b25AnULRXUso1LPV6dTasf7Ung57",
  "key29": "66raR7hEnBVSwAvhXQuhUH4J3vnXg6HPkUXFFKfM1N28KrttidoymRpz9rSyyFXaBfbtFEfZminFPvjqcztAvAK8",
  "key30": "4dd2CPFXsLzfXfT6rfUQ6ZXuPWm75sr2XUQ3SRKuwwqpGmQodwdJ5NUUZ3JueZhHXPneL8FFDmd52z81yddkXDbU",
  "key31": "3cBpsg9hMvpShBHXHG1wSZ2N3GG3VVtZ4QJ8NBgLsDTnadj3GxjVF1vaxPpK7bLcEjMxD8vxvbBRg2iznvQ4UYCW",
  "key32": "2CjWJujQaDWK9aeK6mizqqZAE47EvntwG57dPMJGJg5pxLY2aqonvMgqowksj8UTPzDaRDnF9tj2kAezjLmX9Fn8",
  "key33": "4DgEN7iRQzkpXm5KpgUE9DbvnbKnLoBfyET244bZUYmGkCmWgLr2heTu2fNL9CQW5mp9gBVTiD2z7bZDaAF2fU6G",
  "key34": "4g43eE67Wj8ZwRSja3AbxXQ7mDWukm632z6VecVtGk54hvhWjjHqakcJygnAtxwjk772bq2uvu2WQACEYSUXQKzz",
  "key35": "1GjT7nMVuFT9EmLMjc4Cjx5ZfRLiXkhA9BbBBuQCSRZTUwCyriWespSNezgT4FJYRSgLVpVk1rTgzLD4mQgSYtj"
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

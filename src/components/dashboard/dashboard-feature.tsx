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
    "27751KnTMsBWaLaqv3Jhv5E9NoqEVZbrj1aSJ6JbFxGrjmFpUj8p75hzkmNEgQKBiMyGCMp4b5fhtqEhTzW37Pjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EussiQ19HTvziKnaiCbfcYi9SXpbD4PpTLmADZQsJJxvtVFc1z7TQ3jJDWJA64ykAnYTcfnTgXoskvMRLUFTvYL",
  "key1": "2zamuZJuBc6R4Ar8SB7VQhfqH84wKwhYqbSDqzdZmGGF2oDYMU41Ee9NaKThGCBVv6fy17xNUpnxEvU6Ea7tkqE8",
  "key2": "4ZVsRwxZdA84nLNnBMVXF6UkKvyVUzStwLxAtkZ1xtSptNhFcNca3xQTKxcqmaK8vnA2Gj4rB8gh43q9DTAVHxCb",
  "key3": "3hcqakCfVqKoCFxFxWcMwtKNDjj8JfnvKfTqHdW6y9ap4xt1kqfP5wDaA1oe349tQCqiRLfLNN4AqEyWDoDqAgJF",
  "key4": "5oyrAYx7V3ss1QtTaCiHiFuX9ZZBm5mHMkpFxfznTNPmRsJQrciCCkFryUSt3BZFzev5Ey2ciWqJKvHMh6BRBJnJ",
  "key5": "59Vo26r5DKPmHrhNv9mjEurUx2DiGWVvCJoYKttzL3H4MyDJ6oAgTEvfw8JpuV5YFvg1qvJbfixyeWTQd1MtsJJK",
  "key6": "2XEVYnbY8UHQFXG1yDKau7Woj7J3fqLp6x3PnrMt5BwiknFhWfXxhYm7r1QqUVFJAQiWSFwZY6N7Jrvgt1gWv5S3",
  "key7": "4gEdmxcuQ2Mo8pNVy2QW41wgTP8A5JKUWgzJJYjM7rV16A1apZFGSbaRnzzUp1gsTvH1xVK7BbknyYwf1EXM51XK",
  "key8": "xjYK9aj24MwoBafMyAvB3QoNM9YmSMamQL4dCmgZndZxXSoE5byL9darLjTYEsYRQ9UhEVhWFGGXcxUzEqYeS82",
  "key9": "2Tv4zDcCR666jSSZte3Z92hxMqfnZaw78KR6tL1thWGGMPFG1j2Xn5XaAfrsfu3b5kzB2eheuS7bYbocwzkTPHR9",
  "key10": "58Ns9VErXCZgvR9cFSGmEMxEs1dyCTFQg4t7uAYajkbFP4xSR3RzQwkRBhCLEYFrWg924UfdDt7mei8mW3Dbydgn",
  "key11": "3gkBiz95KSgv7qkubXKYXj4uodhHuWNVskbMntatWNPtmNjNBFv8VAtmxP9eqXnL2FSKtLdsKVTGjJq4cWiSfNzL",
  "key12": "4xFMV9syUvsXAVRieSsF8G7QKGuQFnMRnF2bEq5iJHdoUiZ3PEwP9DA7SRfw4nmB8rxn5PxLEiocMW3SUVbsG3UD",
  "key13": "5MMAoXU4ssvFHE1WBuYc6WdkeV3Z8t157N4TvvMvxBZNrykk74cxnB1jV1tCsJ8TT7ZkKs1waPVG5myy8GEAwwic",
  "key14": "2wZCH7GPqpe2e5GUKBK99xqfS8iTcG4aGoi5SrXgSX4wUTuma5vQMFchMFncv2EKJckDwmPDj2er7GfenPijypWU",
  "key15": "5T51XVPovxPtMkZtTkHueVEuvzCnKP32XpRU2vCmjMCnubqNgYANpJ96xk8v55RnRawizgfk9KtFRMxL7pvRBq9n",
  "key16": "JcmbUxVWC56soDqgU5uErH6dSZdtDZgJ2UoHjoePhp3znUDupVeiXyco2xFVg2YsyqDPqEerR7Stcq6cGpkLJbR",
  "key17": "4zBccdHN7AAGwXLdSWJLLmfYbq5Hirucc6xcjaPFfxQGnRGxi1HmcWtMLH6i8NcPdidRiZMh3aRPZTBwEoDkrKzV",
  "key18": "oo9WARA9dpazDoWoizfrN5PaDGVRrRNVhv85ui1zu15nfh8WAW7XM6YxRcwLXm42pAq37PNrCST9LLQkH978Wvy",
  "key19": "4w6RhC7oAU1vxyC3cp8Dk6CByEdhMqGmKrw8h8F6uM4tgntxbFpXUeMS6up5YhHQc4DMXwF6s75HWjZaYBfd8eB1",
  "key20": "3Vv3pFNxMdwAZg6SH8DtHRmp4S2nTDsvwd519ojFPpktbFPVNokqLy6PViR56Eyht3Cb7oi2W8d6MfQw2nPZtXoa",
  "key21": "2GSQYHRjxnEofpWvq2zenpu66LPzTPZfGtTqjyQQyeqvu1aB7TmXtva4918MRH4JiXqSpUfpuQmBS9ijgeE9pUie",
  "key22": "DaRoZAi6Gd8MjvKw1acFS2JRBMe5F56pfuqTxuvVEUTAh2zisAMe2AE9AVyneuNLg1iCvcB1c1zZF77B3E4k9Gx",
  "key23": "3dTsufsiYhueoVmDcUGVqaiPCSsyz9nqv9yL6TozuRTzzLuzKW9M1EavTBeyabrnXZWUhKsN5At9Nsf96EhsXqNa",
  "key24": "5CivHaDz7h4CeGTHtYk7AcRG3s1UnqjvfGkaN6wjUVGp4veLgT11D227NA3pEVTEXRx8JxPaboGoh3nFGpTP5VUB",
  "key25": "22v5sgAooCCujKoapKGtK66dJdX4XwascckYv1SKpBPi6vxQ6wo8KhoPEELUrENpJsEwBFGyqHCkdtda5UajJKfz",
  "key26": "32Y7sM1B5zRHUWo9RQ1TRHg1FSPzRvP5dtaTw34ETfNttWM4wdbu7CtKcRy9xravSFiC6npP2UVPGTbzi6Gmjb4w",
  "key27": "5rz3nvEjragepNnUQPrXsC9RYBY4o1KT5nQYZcMx89N1k7ef6pqNq8w55SsNwxD6vUPbXMSzeYbm6doWKytLarH9"
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

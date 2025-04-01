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
    "5oi6tvJifNostD3KkJweqv9TejgqeVCY6aCvu7HA9zxX25QN4yaQUs6WG8yhT2SQCq4BG4XVtiRNAAQJVSzaxZqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQ6XSTUQPYntV22PiFD4EFT38qxEeKTnVoKWxBqwCCPMFBgV8YYBSPSKUu4z61XWNDWcq3fmD6DZFpD3mGm29T5",
  "key1": "WBkCdUYrpweMisRH4prWp2PjM2rzYyKoy2y7gv32JKV14uSoN3ACaLWQCnEcg5G8c4BXmfXTYqpM6FZSmQAXhR5",
  "key2": "fnGPyPvSy1B6wqdetHB2GDfZutdpNqQSE9kSLHi8YV85vKxX7nz5y3Rx8mXML1FEnmkxqbCSsYz9BXLRpyipAKX",
  "key3": "5oQDmhob1m1d3NtRvVMcvJgmaBv5kNBHzdujgFMXbEF9PttGmk82JQW5m7Jy4E5rtzCxbAY9Pdr6Gt4zhdCPGCrE",
  "key4": "4yNBsciNGewiNn4Ukcs8L3znQgLxLvedr7D1DH4PiXZ3F5c78hRopW3unRVcRkwQDHgUYRxmG8yjEWeUaZBNokCb",
  "key5": "owX4HdaCMmFRrxjA2oiSQcranV1qqnoVNe7PoHVP7ABsMy9ADrXeTwqd89QP3LoycqPbPon94xAwztzfY8PRjYm",
  "key6": "7xqtnpNX8DBh1fffT8aPdk9c8gSTaHgxbxAha3mtkYisKuifDQ9z5VvhAU2FJ224iSByYF7KJ4GALxqm8qd7FKn",
  "key7": "5HVXBqBFv7JYbCJ76L1VvNSjtLLGzq93rnPfuQpN4AEwEVLUgFhaKrjBxi3pB6S4mVjWgy5oAKTzdTGAgtSZDQQv",
  "key8": "2UcQY9WnDQAowrLRKDapqGMSKHb3BThg9D14KJnLYScNaAwfL4mA8icoHpwkvnuf3dWrZpdn91Pb8NfQybcC1vSt",
  "key9": "w3KocP4gwa3CgKGcBBbNYpnGxvAhBjHoCvrhYhxFjvpoHeDetFDSxPZAMCGrM2SGA2AhYXVKkE34kxbPwnuTnwR",
  "key10": "2mjcVMPPGsWzKe6Wg4zG1b8EdZLJjNkqdVSSvxFXbWRucdTPMFnZSELbEa1honm2pP2MPNDaxJPv32K9AcwuVgjP",
  "key11": "2oHToN3d6Sg2BET8uxQL4es9wurzvrph1nDv2U2Mpejm7oBSLmPAz411uLyGyBteVtHgB7nuuFZP985c7cjQwbJ1",
  "key12": "5RrqYgZpUx7Qx3WtotQDo9D1BBZdkjmxrfFXhXGUYuLmTFzpAC4Fcvbw9kLr9GPXynyQG6Pt6pCE26krjAeqHKp4",
  "key13": "eU5zwMHQmXS63QuGFknETzZ9CuEPpbuYHsGvpfmtNG9fb1axRrivdk3FFvaRHWjtMhyY58337YYkHQv2Ckka1Gq",
  "key14": "5yXufzrZk84bVxF9xfPi3SV6cQj2dCqUwYk7fjDJB9S9qtyF89ZNwm6BYA5nZPWAbEQVjScNpFzmaPuHqBZVbEj9",
  "key15": "5SF6kBAAPsoL2EL9pa7yqHB2j2kft2YhUXg7rtkmKZacnoG95293vnA4JhwtsbA4utJt9ZkaqsNTeg7dTLshfFNV",
  "key16": "4SMEW7V76kjXvQjnm9VVcoo4WcoF1G37iewFzJX2H4C4ye6U5zDRKDkSq1DP2GCW5qyy8E51N18MPZY9shhBtF6D",
  "key17": "2iB62vSdzZtfbW89wQ6rXQdQPmKCxYqCLiK9rxTG6VnSuznGKFcpTNoUSEkZXTNaGuFqZDLJnTndwWZdSGUoRquz",
  "key18": "2LGLRtDYxUYk4zPS1mDGk4cCg7QJmNA82PwuTset8yN5YDFrVAuAqwH1HPwtybo12LQWnLzVBLgGeEQkpFtwLDxd",
  "key19": "F3NMqX3C9LWJAD3GpVUCV43i4czPYEAjpFCSouUFo2S6QkGyeZm8KKCNbTsfFMiDJFN2tqas5xGT9q9NExkTs7u",
  "key20": "4PmKu9NifBFBu2Es7iCCd92iCgMDC43fhkqnMYrAY4swgafaP1fuZiqD8EZ4VSA6u3FSQxsZ5NDiuBWaKpayk4z1",
  "key21": "4Mx5n5MAnqUfnU4Q619PV5ch4DAvp9Hi23oGuhfRWStGr8j5gn2mZTFG8gV84fohcdwGYECA9ZjBfQkWPfXxHV6N",
  "key22": "3FC5SQk7RqZBmYqTgKyy1mm5W9CAEVBtCJpiWXhJ4ZFCjkX8HWVWyms7FdM4hPQ5KbxCtGqDEqE787Kb8qZGsVpx",
  "key23": "5eFe49nD4Dhi9Th5ofkWxeqdVM216H7vLhqLRbRRfCTwpUSw15UoDzGqJ3axELuz9ptdETy9Uo38rFGQYRNKypL",
  "key24": "5EFk44y1GTMn6Fuhxka3F4PAJKUsNuZtbQyVEftySGkKenP4aJ3vHymuHxhzk8yfXdiadfMoGEKCBsfVjy2ZWZbb",
  "key25": "44fNbsEVhveXpPawPhaon2oYN2GttUDdDktKHvrHuSP3fvJSiPSGjuHXcoaaxLKoSMQvnz48C2FK8uFed9i8fhcy",
  "key26": "1QFN5zX6BFQBhoXnXqhhoKUb6s6NqffM9nMWXkP8SDitXzVbmTmJYemTg2857KnNf1L5gnBBFRiVUZARMnBs4jy",
  "key27": "4NLpMkNp1JamxSaQgbngmk6z7wViSzxPyqWtvQaw7zjEBHbDMwwB9Ji8S4RcVhV9LaijpB3R4JuAaTDrmtfe2HWG",
  "key28": "3mxh8spzVMvojn47iSPYe1T6Vaz3fptCDkj9QPLQF7k13dYAj5UuVvsvpC4bhoXmuBprotfRsm3vACMSfQn4TaPE",
  "key29": "5s4KLtKz25Xqnub5RumXyE2HEUY1UK3kHqVRuq37FhBvsLTCENgdSBs35tVKoSHe3K6BX9YBQCbELfuQ58iv8GSN",
  "key30": "58zFnxCmH8BbARAhy7qTb8YEXVggsLzKqDzGCZbaHP46KjWqzbfSJz2rPiLxsEgCMGxiHRy3mZRhZWHRoWQwbKFY",
  "key31": "DAHgGS758x4YrHSYT6J71D1unsn9bFRLQzwrqtJAKP44xKtwSXRSy7Woi7vkq7wZpnJsNLLEJ7Sk5FnZ1FnEQPX",
  "key32": "3Y1bToZemf6NSRDhWqd4SWd3opwDC3VhxWwNkCtezgTipbNhSmGtqB21NSP3o3m59SMrpe5AEsfG3keLhqMp8PPg",
  "key33": "3ttbLZjk2FTKetyHZn4cK1ByHJ1Jvg8j8tqJGyqGrxXqhEZ9YHhxRXpV1YzTJqV1H96qeyPn8rZCoQ3JXb1swdth",
  "key34": "jpWc67MtXLvTFyFLCYC2MAofxaQ616HtAiSCa1zAT8ERaPBCQ365TiESqzJF1f1EaXfVXQrYyuxtdAD8eXmX98m",
  "key35": "nvRZB9XkkA3BCnr4U7xwL9SpG1P4osfVFRfv57M6hKE1Kc3ivUR3f8X1boDsNjajwjoA1GG98Fg1TD7QW9iG37e",
  "key36": "4eFWighMQ8FkbEvfeuqkikmRnK1DP8Gp1ptwVTH7qWwgzQfuGdS2td4ALom8oJk4RvXveUihWwai2AYrKj94qwDG",
  "key37": "4aXPmuWBAV8qthWjM9h55L7EhnvVp59xCBffAVqRtzyhE8ZHq9pYffX7M6R5DST47SGee2ChVZyBwZscFJHyiyd5",
  "key38": "FwyBuHxsUKbCRyeTqdhp4GJX8qLcZG9LXz3tMEzWgRpGVXWNSwfzZXdX63Joqu53x5rNNCEwVemvKXXqkTbq4wP"
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

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
    "4PkVTFRNzCyvogouSp8zG9xAZRhPJPeak4wh8Fgt9gyZHKhr3AcNfR1VsQ2PyK3AQm3gdACPrjSeF7GGbqcVqwcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSSVUKoNB3o5mto4NwYrDAP3GV39SFkHKU9kob2S8qGyC2uinXiyH9Xj9b8Uvx7f4euMNrbhM6RM3VKWR8wQYxG",
  "key1": "ubmrvYhkzbmxKLEWVHnkHihoJrR5yGhSHMT6gnX43iLEJqxHraBrsG5Qh83YAArS4J95QNfw74uGywRYixk85p2",
  "key2": "3DV8qiwGbKrMArr2rd6b2j7UakM5wQkkMion49Q2YaiKMrr7dgjaKn3gm9otHztKKc5ws8EGZ9HPC77W4PGyzASC",
  "key3": "QPsBD34NbTR5wAeG3a7aKQv1CwN45dRQ9uhBXpnoQXgVG3Ukbsia6csUqAfdeqLuPS6uvL3i95fD9MvKpBBRsBy",
  "key4": "29tJWoZrkAJpefRGtUXDR6ATGwFnU7BPZSB5BXKZb7D2ZH82PkofP19rGSZTUSNctb73JFWtXmk785ASR82s1tSk",
  "key5": "2mSue2Mj4J8CH8FdPaGFhLnvzj8TTU7fnLdVnGdEPvfFiztZNcupFbVCun5ifaUwGHTcPQQEmMWwSk3hrmvWHPFc",
  "key6": "5SL8Rz7aJa7T4uPwK176x56g1TpL63WUiyjrKQHTtZmdPXU9fStcmMk3KP7ky3cwPyvXpEjLEcKvJdjuo5erxUBC",
  "key7": "2YurLouQqmdtWjfQJtLbp3MAphM66VwPVQNwa2n8Ufnfrp7qU3SjfkKL4kKgEQWbisPW4L9ArPVfpiF4WB9u4T6g",
  "key8": "2re1ZBFzpmjAeiEQdjRCGJQewYsn4qr12e97SnEPMtbMxKwUJmQ4j72sB9ofehtRakuzzP55x7FYETGunKFUibLW",
  "key9": "2ysReZ4MYaprNK1SFYhTUxWD3oQMpDmWY7RwnoxMv7oMjR6SgtPkZvALLZoRm1fKMW2Q1ck8wDVEUqPtCtvsRQu3",
  "key10": "28ZgEEqsqQPKFHMHddesEaz4rUGmhTGDTQdQ99iyemfYZn9Ddiq9LTrJH8Xpjnx8ECqBxeWSryQR7f5Q5eTWXRXz",
  "key11": "2STbx5RFUyLT4HKLe2Mujf2j1SjTmiCnhxt3vuAUyPKheNWvALDd6hLhtC2knqTat22QkdiMZpoKSRQCNT5rM4ev",
  "key12": "4XcqnJR21PkqKaKuLpZ432uh1WzX8WTUv5omi2dh12wPxhc26gctd5burjNC5HZ3BMUgFiq6pTCjUQKQtuDKWy8L",
  "key13": "YbozshuiFmzfJS9wHWMqvDCHj6PSTRiqyrz6rZ48Je8Z89afrM1V3aYG1D7xUpE9ygkfznKQK7xCWHREVCgkrUa",
  "key14": "4nGsbi5er1HnhWuCnMhSHroW5kkDvhUJ6rvYkeFMpT46JL5JGpgZPRVm6G2EARpM2G2iPFKTUnHTePRQxHNADa6n",
  "key15": "Di2rXAA6A1YE93LcxPXSZDt73zkq5XbYEY5gSDk1je5cmZp6KB87oNQ8599Re5N5pjLJL4KggLPLi54ogJdVSfK",
  "key16": "38paHULxNRLEFSHqGJeHhCLe9VJJLfDQ6co38323VV93tAv8UWensuyWamr3jgidHnQMBXUoDMtsqx8DiCAHAXZU",
  "key17": "3vByUt5Gc7tBKUGYFEnspnQmotncGWMNbDL1PJU9BLtwPmLoPH3Phud94bD8cSUMfcNPdBQuzUEAtp3Ayquh9y4i",
  "key18": "3sRFzTDSYHxPp36AmviwUXwVaeiXgDfVrkgKb7ePyYRwmYviy5m7eN6drE9xM3V9mgkuMaWohpVY9wrC8Ho8Kwxz",
  "key19": "CX2mhtT2FqabUdteFBgoJWJzuaPfL9vGKQVPS62m3scSQvSCALdj1m2nsNHJtYD3PHwa2ww9847kV2Rev1bBunh",
  "key20": "2RtkuJ9uu7uSDh1wvxMYwUAfxV3FxmmAcCdpWvrUvxFJqE1na6BLugbtCZt65qcUdjHPu1ffFX3qiaZvewnEVhBc",
  "key21": "55kHEKJ2UytJzwYU4J4d3XXjcvfcLsDji2Gr2daEU3fTDmfAye5GEsRaDfm9AjhFg77QUfpBJrUMsysH7hCbVuom",
  "key22": "4Hcz1Rz6JATswn2UgUaxk5VBjanzEDHa78ZxZB2CpninLQkVkvC956kfGi3BqRuRB1CCuKrADwjcUxPgz5isHGS9",
  "key23": "2vvvSt1kNKksjEXUNmkbQXoW8L8QbUMSsd48byz4xHe7UppydevEQpDh1A3WGmTQDFbTEaesWUmswAYS1icqhQz9",
  "key24": "4C7jz8fgLVAVpu7HuCqrNSLaYEaqiY58rR6NhsKSiC2DZuWKdonXgA3iD5fLaaY7mEZJEH2zAhuWq4Re53QQtywQ",
  "key25": "3idqrwRdw8myMSVLidKN8m3pzJdnwL62Ty26wkx87u2dpJ91Re3TZiMpQoQEd5kiLdMevCCnhd7436o8HcMW36oa",
  "key26": "5hRvsZTJErVb7VsfpDs3EinLpN65gh3zEtzg7oqKjz2DFN5u5gfc6q5vkKpskdz3q8mpYmWJPzXxLqNHMwBS3Kwk",
  "key27": "3nHByukEg7ni299s8PvkJAptJCmCCrnLpviArJYz5RjzV9NFY6geaJq6Hg9oUbMp5Hky55g1bCx3hbDpLMH4xXKk",
  "key28": "48gtawNkS4GthMPwGCG3JLPWmW6RCYYs5nqPc3FkBsyWmfAUZcSuDNy5schuX8CJ3qFAAKL6L6vQ4LScqnkyyWtX",
  "key29": "52ABmk9swpEqHMzn6GRayAcGKPuQqUpeyh4ZPs9aqPmMyXbSWNo6ktPd64jMSgMF4oY7AoLUUD4MJHYB33No93fP",
  "key30": "5RKD5XAnijLvqMKa43LPo1nCURmW7t29WKyAx829AVkA6kxFjXRqUvhaZa6QqhBjTgzaWadocS8uLzBKvVG5DwCL",
  "key31": "DFAf44z4uvH364JT3iK3mShmEQSJ16pyjr6sLyo9in5Lo76AJf5jM7iGyV3oFG1ZVj6EFTLXLN1dSmCjbkJajPD",
  "key32": "4CauN1XYNFkLmTo98rSKcEFCSRt64UyusfViy7wzjqmDqUXDVdZnXFVDVqPCDRmNSArUAsrAixVr6vh7PvoPtAxx",
  "key33": "2QDE25ne9PBoAwKocmy2MtjAgLCw6W5Tdh8obK438wvb3n2XfwYoxJ1DtmDtWhJfQ6mA5LRidKpiFqs6rpgDBG4q",
  "key34": "3PSasxbS2ckg7QEDUXVgFAtrKM4Gj7Y46nMDrWH4pFo3n6g1jv2FnpevJ4UvivF56JKm8ba4m4RapQrUxGNbhYNV"
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

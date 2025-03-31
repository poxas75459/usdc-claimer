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
    "kr1f6mV5b2gdbR1dFo9jNE4azzdSiDkHhuWqAkStcvHdcnydvS8mSLNZZkrZ93qLDFzw4VHhPPo3xLiwkQXyNTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSrvkcoQLQ7s7VC6r8PQEg6u1CsB73o4dsJbi1iefUtd5gxMCRsRgZH9sugM1ZNUoqVMRL7S65BHTrsQotWW5zK",
  "key1": "3Ee8KeVuxyLYakZtiokJixdWnWbDaDTJWTR9DnwsKK4LK5UaxruzJXGzopZPo4iHc5DNEr1fxkdGkZLMzNWcTrc2",
  "key2": "TnuRe7pUyf9bTWPEnFtZ4hPfTjyTA42NKeRZo77H3z337WcszT5yQCojPur5jbzqLcCBEQTDhAWsaQbbMjzDv6s",
  "key3": "3fus25T7bMaw6EMFf4SbSGDsNQ6G9VVrVjVfzX6m6kuf3F6qREDqjnks7ZPgtVZjuXGiJuJzh8SpnzsouhMQAKQL",
  "key4": "25i2gjxweCRGmUnQmcNRvbKhb8zJSGh1dW12feDxQwbXZ8pgF2pRU2y5DYmkQVqqBPCpGCZVGZA7waJRdH2p6pyP",
  "key5": "2A6f9qdk7kGNmkFWwoJ1V7RcoJZW9HQj3NqtiShVyepob3fzaUwWaVAjtwRgPRX2ZeeCXAFSBVoGKwGmutSUc611",
  "key6": "Rq7ig1kEdjh9eowabRSJTmrcnDC9QoWFd7zCWA4Rq85qz8bNNqqunkhR7G9mKEh8sfFQgnA7vAqKye3rdtRXSJJ",
  "key7": "5JX8GZEAg4q2Yu9pW9f4SphTKutvcgG35UCYQSQbVRR6Nw8nxcYfhGr3q7VjjbBu45W29WLZx4bF5vBnw4igcHFu",
  "key8": "5mZv8ZMu99qWLxLQE7hXy3x4Q3t3DcdQ9o2Ek5rd1QWnTzE9biNTRfixfi3sqXwdJbBPvurK7tveVv9X81i3QHS9",
  "key9": "57fdWX5mPrRYZVV1PHiwE6iCJucYAQdXoY1XCTR9BvwaYvFDY95MWdkAXUm8Ca6B4WnFGVw9XZUGZLdPcW72xnuY",
  "key10": "3n98Zrqy5WcWUcsu8HvYAubPFhMBY2u77BJTwpXJ9fK2GpTGPpzesMSP33jAESJRWyWjVfB7PZTfcfuAVmnSaHXW",
  "key11": "54wqkN5YBKfWm4V9ezxCMbV1qSywwZxkx9xNm22JbJfV1t3JTsS1AUCSSmjPvqJkizeRspCj4Kcs8Uszdnwd2M4f",
  "key12": "3ubRy8pSS2oHBbSV9VA6hiNTioj7KHcmCssmM3o8KXkzt5KwZXUouCvXu1TZYTPirLt85r85KwrYadea75bHzQVo",
  "key13": "31wPxi8TEzLiyS9AnMBfeF8zzcagruEERsZseZ5cwUz8cFR8xpzUmE6FxfpPcasBXgPM3fHSU8nSeVbqKbq6F5ZR",
  "key14": "2ctSoRkx3AyWw8qo8v66E92LekL3oW2k9FU8upqXQeLT1Kp89xgFW13g8R6asPmWYBVSutqZNuVEh9xrndq7EYxJ",
  "key15": "4My5UUewNX3m7HvpqRX1U1LqRN4pUaANWPfVnCoiMdMaNexr9TRSZyr7RELdoZk41i2b1sHwdCMAbKSbk4DRbQvC",
  "key16": "32E3rQmeajWJtAnzFFWkEw9VtpXMPjCN6eQb6okDLi6c9erFvauXhekyp7G81CvHFyuz7gEKD4wb3hojSy8PoUuv",
  "key17": "4KRarB9HRnEc1NaaLVRLaV3p4iiqR4F7eve8C5hJCT2LKNmbMgdWeYr878EohAHCfPxjtPSB2RZbfzAkiYLMXrxT",
  "key18": "RaQU7cVTi1nQ3ui1EhNkVHpYsPdfZWpB3Ekz3HHrYATKJrzTT9evj8gVcsKECCR4aH1bqDfFYjkS8UJEJFSbEMq",
  "key19": "5yNVg2R9FQVB3PNZZUFfLXWU8Vu6RX6SikXtH59VmaopDngpUydpV2U5PSBrJQZA3ZE9kFW4s8WFstxPJ7CBuefV",
  "key20": "29Xyea7UyT17awPBmxLaW5TYpV2FGpCjdoCihvBePmiR9HbFhmyDZgqoAfTc3RQSFDBhtB3P811BymfuSwK1CW8M",
  "key21": "1BDKnQcaCNgGPA4dRb5a2T4KWUawn11bnWFUEehQTjriyr2uXqAAqbZCQpZK7xDeJtSy1qSAgC9Z3u71gPRw5MN",
  "key22": "2n4B5Gtfm2FP6GdwFXXU87Bkau4ujfSSGpXgYkXkTMVkRnCruGnZXnPRSbNn4zEwecZrurTV98kqbBvoEPdKycMM",
  "key23": "3G8VHHxyoxmMUtEs7DVwvb5qAdePEri1Vk2QJMytMjJ98ATmrHVKQVP8Fnpgf2ztEoPRwzAdBtAaazFUsha1n7zj",
  "key24": "4Wu8nvoZZiAWRA3Qi8b41g7oiLofPVhPDZSEepPDyzTHnpMmqBuYJwtaxtnVWGacNuHeNL8ehVR4AaztHoWHMjrg",
  "key25": "4HS5mv5tYoa6MxNvT8aq5hie4CS5FtQrpDRhCnf1xD6Vogp1NDdSgF7LrwXxuFkpZw91JWTVvGjFTVwvuRE3ZxJE",
  "key26": "2P6EC4QkzyqwoXedM7LoGeJmrkNuRwEz16wpXuy4HTJy41zKAJkNJMZALZTs5qxxwrrVmM5CUEwwh1mxHCStuHB",
  "key27": "M8Cs6PEiQL4ksG3EdFfqK9vLq1iJUHrWJF6FK8qxqhNGo7uZLejavoVTTQNAUaAEDJxcEL59TJBBcTWrQxgn3GU",
  "key28": "2uqptcWj52zM3pn6K3AkKPmQsv9SySjBu3CuQehMMF4VVy3ZAQT4TGUqWGPyxfaZQmJMG15fTKriFgxFTQsYcUtA",
  "key29": "4MoEd3A8UUcHUJhusXQBKHrQarC6ZftvhqsvMyRB3YemQKmehBbdRxEpDiEuMyJzpZugfaLwNagMaxxWUSZsBhV8",
  "key30": "3sS7ehQmwQ4htiHiorL9jA7KULTQgTwDsC2tmKQeYbUrBiGS5dYic1kqx9GeuodKpH61X7cHa6yL6QUdKfMXKzVJ",
  "key31": "2qJ34UcuTVk6z7EcJcUjP9JwgN9RcYyuaLshH45topCZX1rLnt28AX1Yk5nTEqf3iz5kK6qAXimncVvBWwpzWs4a",
  "key32": "3Kxku2Gd6T8REMHjWvAjY6JQy9SNuTMJ8xSDHAcYkWhXw46Th6tsaZdBWuUAyE8xpJeRsCRoRq7s2G93CzpJzRGv",
  "key33": "2SZBgDv6ki4GKXWRXEm1PCNZkqLd5TBMnbyaUiS8adYgnuh1Zgbbh7GRqFt2vf7AhJ1aXwxEBobdknGanouYBG21",
  "key34": "tVz6o9ksbnWJt6WskJg9VLPrq86UUmRaJMkzoxJ1M7xbMK12bCw9PN4VunMoiqC4yoKRHB2ennAcxsrV6EzcfaP",
  "key35": "2XobYHZKjq5pt431YuaeyUPRsuL2PyHagAamQpCBBV9sqXF84m4HxVxdnRyFNHL44frSDqEHY6b2PMHGVS7skUQq",
  "key36": "2ZcNRzMkCdvaBmRkSVUbMBENMxxntzuzANEefuUbkdsSzpWWkUjt96VHh7Jnrd133oxj7kgPd87jfbzLFFDng5kZ",
  "key37": "3arQXhaZwxBkjAP6SNH6DeMMVAxVTdUcqVbyX3Se86EL1WRx8xNLg4cQETNVyW84d2F37jfAsuzgmBa6DZZMBEg7",
  "key38": "aWoBZR9Vy8Aaeexa4U8Bgv71sateokifAUTVrPGsmL8PxA17C7wNuu7z1Ubrk5nyrPYfetxeUnATBpWssYVUjM1",
  "key39": "3Kvfd9QRhLoHkY1jpN627mtFtvJFpGqANSKXU9Cgrkajhc5dpgmqcvFMpDDH5pyoBpoHJpmRuCgKmkdWhz9jdhwo",
  "key40": "39vHCFDDUYjjWu5QCmSWJeP8RBGuLNZHLCJpEHFxjMg7jzFYb643sribzJoD6WdmzpQdYqBdEZoyeAZWHQAtDPBm",
  "key41": "3fmxwgExLFWucPA8LC7592234wbmgRNQFHBdCVHBEHg8KFEJzeJZ1B2Cf73W5SbhBjRvAX6Rmf4J2h2fxrv4FhSH",
  "key42": "stJuQ9DscjxrTvs8VWAakEqEcbiBvSJaedojyL534HDHJQnnFdZw1ZaM3eoei5DWiCZHRNvPMgz2fH1GruzAbhV",
  "key43": "511FW9jyLzLCC2ADajjgq2tKEvaKuSRoQFYxYjU9PnzFcSZDEDcu9L3QrRVJNeo3EAMgAka6cqkqPFGwbdpENL5T",
  "key44": "5uPXjusoRjKPjLzixCJAhSQssyuRfkTRCeLGL4Askqz5vr51w8R8sFGTxSboeJHUU71Tni54FeN6fhQ64tT6SKr7"
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

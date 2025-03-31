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
    "2BYgroSvTX3vDaouJGFh8F6CcabJCkGjJY8US77fvAPyu2Mh1Z3cUk1VNqTpxuN8EdbKnT6LrjVPnQoLVXvtHkre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PExDV8Caz2orBQMNjhUWuqzYbTHEF5YLXew3Z3ppFbUZbqCyuw4V8UPYAc57JrazjjSCyKkxfoNhqgiPiED1iTi",
  "key1": "2nQMvkEAvmLYw7vhc2JUGh1qcJQhtyFx7QLzYFGjgd9S59R1GxJWiRFPvpEdDPJPwvPvsXpKpr46rNa6HQfNtPKt",
  "key2": "3nocvfhb9dEJ17BHcY6H7agpDfN8KRjKnxEu7MZ56L2kaEbxZ1T3bhJRZnUZ4ADHZioSxN8cUsoqGhd7QbsnGjRW",
  "key3": "4gLH583n8hYUVnCap1AZYVdDJpLHoZgR9xXzGnBE9P2ZDkoAb4EwNXMycUC4dUauPEy4x9dAuHeHtPwz6KB9X3ag",
  "key4": "2CRpokL966jKWHrwe2UnqDTWiY3XJ2EFgeVVLWmLHDKswp3bdUnDNpDpLJDjEYDzH3YeQLZZmxytPV7SNSwkEPCv",
  "key5": "2Ur4oAtQYVQkN9jPeAkCbBudmYpTXveZ77dFiJwXak9X6jojwb4gyZd7zwhxemFNZ7SezPKuz2me71nAVfL5LPgc",
  "key6": "4RAHi8rfd6LV6VP42BdGMCQfd3krLBq3ibfzxWNHQi4jBQyyfz2n9wK5YMuoEvehcm3FAVziTDgLZsEsvqBNE35A",
  "key7": "5jhUWjmDpn7YJpPVgc8AftWrJKg2j4WQTopmvc8vtwN5uC3wbtpXGs6bebW2URvm9uEcqhjR2nbW6aWT6ZGyRco7",
  "key8": "4o53KBiF3Vbwobzz7ghcCFJAqjTgyT7Bj4zogCKisDnKC7G8AT1q5RcjeJL9bZndd2H4G9URTa8VshewUrra7V55",
  "key9": "3sV64FVCEg6pc9b3AfEWVk49E3QRU8vbKTR4YTsQs9KYKwVy4fbyZXXwd3Hjt33gvvxbA3ktLVYsHTqZxfvECBuo",
  "key10": "3vPeHpugECvY4mBAFCzjzp2wohwizesF3P3in2jcNcAdwdsChGGjN4ydQHQneF8ZxyPHjaRT8XYkwn79kGJXtedJ",
  "key11": "5nHW5VWSA3rrH2vWBwuMadBLLF54MxA82Cu9jggfmEGoErijmZBM11X8hxcVo1i6z3wz8LdvpGqWeGMNhr5BdV8i",
  "key12": "4mmLugeGjs88uuWrZan6Q59C422cmALUBgPYSkL3mT5zpsSE8AkVrF7Gy2SqrEpzVFNTiXvq6v3AUFrkn6vMoxCT",
  "key13": "W6DkVJZZiWMT2HmpjWg2h9TjwbhQXKgS7qoAhshUNUy52znHYggHzxYDu3ExWnCi3rFNJPasdaWZmDnSSR9Ju63",
  "key14": "vvcdixG9XFmhVVjET4EmenhZfjMkMWfr3mNschWtg7okief6qCkx8GiLTJ1Qv3bDcCPfGTF2vV1HqiHLLdU2JqG",
  "key15": "2xhtcPTQJgzuVtVLGtKZV2uiMMRXApn3LJmKbsN8YTzKEZsQKjBRzJvBaaKRtfgGiL9NWittAR6nHAiHukHHZBzH",
  "key16": "5576fHKpjCAWc3P4by91FBUZjotuTXxvBQZ5nuyADAFhYLLDmgxJYpn8hRy5UqgcxioWHiNLmznLPXJNs9rjwWpL",
  "key17": "2rSZmAL2QAuNjzA612GAXqZ2yWrQCewRK1XojBit5xV3PkP4y6WkUG5YzuKQfKX43E1VBC7q6tSYn7ZLsYKcLBW3",
  "key18": "31L8Q9pzgsiZjb7xH14KfBrJaqq6kDQkJw6ymf8Ehf6kUuNsd3J5XqRApwviNoZeNGC8jTVY99xwgTecHBWDKCj3",
  "key19": "XBhGFAeKTkEQQDPpYv8hFe5RHwDAHWsMo1aQkzJWCtboJmFTvk6TUcgmSK4DaE7V3TuEoqeNxiAU9YfrZuNFgTX",
  "key20": "4wK4iPbh8Yn93G2dTYjEzy1KmAMKNwT8VNHpz2BoTFBdr3zAHtuMB7X5ag9AAdZi5m3jepphYDCANEt5Qx5MxWPZ",
  "key21": "5pA2XPiLmATRJ2VBqUFCMsy8y9nbtjT2ZDUbpszLoK8ppT2D8qm8oA8SRiEh8hWM4WsZSnmC3oBAzyhoJkpxhwhy",
  "key22": "2wFsx8fsdHjVAQeA7TVorzJhLbsaSMtsN4ZgAeA2EGbbjBQhJL6tKtRcexyFBLNtSXdLzSnM9vGFWkTr7PonKdHZ",
  "key23": "32Gh7KwZ9WsNUJh8T73gJy1pZCWQNnWJF8UxT1zZywxEPJj6pFuAdYW2owwFP6qhd4egVTiaGM5oe5arCwxv9Faj",
  "key24": "38unK7YZzkXzkeNmwRqFuEcQv3Z7qEKyG6FGBcfdtboCBgCcjqZd3Faa9ub3f4cgGHoNAby9Cx67x65FwRonhjo7",
  "key25": "UacJQF8KXDPRzaksBcYLWqenJD7AZfbQTkfyuDsd6ARxgKEzkjLGnwtcFVV65Y2cTMuLiPbCzqsyxcxBkygtHHj",
  "key26": "3KJAtTRUgj5cXPoxr9qAK7YKnFcCYzkvHecu6JLqqn6CWD6Ji5ExEBpt2ZXMsK8XDmvmctRWEJMajQitQMuaXRCR",
  "key27": "5DSAJxLAtSy5fc3nC5cpL8aKwFXMKedx4KowBMCM2JjHUKZ35sEUReqnJRxkFkYuHa4v57cPDo7Y5bfxxt8fucA4",
  "key28": "4vXUvLoJfhsADmpsJRqSbRg2Fgcri6S89W2xoMmrYsM9ipJX1UTRFEPHNLbkNsF29dtsv2DJLwV5gDRCXJWRn9hd",
  "key29": "58xWYGVpYvGKahCr8EwjGtuPAdUN7ekBE7KmwyfuwesYXhvUhdj2DzGhKcPVDikqtzJn3R8gd7G3wjgC3mZrTH45",
  "key30": "YkXMAxxGHFfqgt4uWpAzHWeki2qRgjWf2Sd8w7JsyHbvKGMmXNrMjvnWcNbqdHUoh593AgRsYhLe3JZiTYTdQLm",
  "key31": "5uk2oK3keW47VLDNYeZf4g6eQVCEb7D6o1yzrscWSaLL344xhGWGamoUsUjJM7hnEtgAEVB73ACRyePbn7Vf1ADW",
  "key32": "3mMv5Z6N6TgkQG369K39R8n5U9sSgkmKBSGP9DQFNPm4Rg3WJVmuB2qqkRsWi8xXT9ypzdvqCRg5HXwGVUdExSuC",
  "key33": "PoqDoEwzZTvm6J17m3nSkc1LsW5RDU1TXmYb5REuYebe3j7kygWivteP2aXMNGWqfg7CefPYGPkBY4kLWgZGn7u",
  "key34": "4M2n6qwjXUApMGvYXni1iEkjW4tde187wc19dg7AkKhbH5zWmjtswpSy1uCpjaZqn6TLXi3Jry6dGrKQgYm1a7Ao",
  "key35": "3uyZevps2VPYf7vVNh6d658D8VUAekSfQxnmTn4QniTWHS1xhpLZwXYTW6RSja3dWmYstM35xeyUkkczJwgrGg9P",
  "key36": "5CTyaREEMY9GfdRk3x3kanY6nNG6m7U6dm3oqWbhA9jetxJV51SEXdrfxx5mYSdCu5FFyWXoFo4CjJyxYbgccmMh",
  "key37": "4iTumvS1YLqRPZ4Tt7YrTjQ4E6titVmWXSxzaeCcRDVNRGPCPnudtd7yfWCBc5Wu2PnS7Vm2cJ6rxpRzF83xcwTJ",
  "key38": "2QWNsNshaexYWYE1LwA4hkuaPsDPKkjhVKXLKTvGLhzXNh2XcU8Dd3u3FL85NbXWPWG2Ls4iJRzNd6sW1Bp74Xjs",
  "key39": "3xFzVr3G59gdUePthsawxSGZEDpZZ6rY3CwFjAUFuXHmiQcC8BJei6TuZBaKMPFaSAfZXaWiDMEAPpfA9RXmzvK6",
  "key40": "33CtDqvqNxBuN2ftkMd3kZwBakLGWF8TWLRDVfg8Q5ptbxDhih7AbbHpL67YcaudSbi3kdcVzsPpaCadMpjFLuwb",
  "key41": "Yf63ayaWWM99XvuifEH3w2JL5PFYbzXDZ4xTrzSXobQe7oQmfYcEm9S9ca8EJdSSbkx9oSXS4Qz8wLZebLPEirk",
  "key42": "2Nu3S6LhuVd8hkueL873FBL4XaFc86yFcZCaHYSep5NPBnyCR4MrsEvpgSkf3qGnYZ9jsbzoMqTzDZ3RPG3Yd7iM",
  "key43": "396FKWfxka4uXnqwYkZqUsa1FnrLHKydLrgabt5WrznQtkEQTH2DbCpWtF9eQ5S86DndFafXYcjnpVxMLgW3UL8D"
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

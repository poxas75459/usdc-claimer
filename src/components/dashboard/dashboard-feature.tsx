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
    "DDSPwHiVm6RqSwB6e8paNvqoQXg5xXYduiHYPxHaAP5SAaXCeQwub3N4QtHGUGeRGLWdqsswUX9Vydo9m96MUrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpEq5f2xJJTbqzq1zpUHzY8UK3G9KcUNs9qG3maaD9vzsffBr2ZTrjdvqFmrMqbxxX7ZN5gMLtm85VWr7gWpCwE",
  "key1": "4RsvfPsBWK12CM2vqUvknHY9dWXeu1MYrHQDDzc7BiVxyy7APdkoqsATqKJbJAgM238ed7n5Umesz31qPm83jpTn",
  "key2": "3bJvMganTFtrf2GyKy5zFF1MhHkYizBx1x5L6gLHzkG73VPecsWKnNsKFzxsGTRhxBpq3hwN7PcLxr5j2NqSjAhy",
  "key3": "4fgeKMUJd97WefHN7ezNSGPRDZ37cvNj26rAvRzyrLPMPiPffan4iCpihnkzyyQdWDMM5xznMZ4Uc4a44ZvUpLZL",
  "key4": "44Dk1M8RNnyFSyaSDTmgRGskVCtqSezxGPkKwwFXC9KDBZCx6mJ2Q3xuVZjUn2xd1HsU3v5krQz7ihY3SXvKn5oV",
  "key5": "2qiqNYPTWLr9jqSqL7EESS9i6v33EKNXFABhhMtA6dAsgRrRFB3VRrWg1dt9A9h1fXvLuXku6LbXHmQvXtLeoEaX",
  "key6": "2kLt1PRnruCcK5U7D2yYLGDba9qP93LGdrCWWVBgckEYBaz1gZaARVEFXpLTkqCrPcRVFKwAqrKTzmt4SiEjjmwU",
  "key7": "dgSkRUz1WRc6La83tNr2FZNDr7YtzV9q85akbCgsp4EPs2m2VkVm5dcdcRacfJr46zEryjoUPiAkniMAAuhAGbW",
  "key8": "43U7uLLwfp7x5g1i5qGHAk2oQuaLEi7o6ihwN83KMqXjgzhddqR1PhDw4qMEYZaMYhqnuYTRB9zcSf7mTAgtLty1",
  "key9": "5mxh7aCYb9FovvVFJbzjwQjosrz5gtDFWEG3ZgU8ogFzZY1EqBniVk5nURwCs2YhtRbadwsWiJUHtCxvUAWLn2Dm",
  "key10": "j9a5M8CuWz4Najf5Y1A2QbdtszRHgLpJnw2zKMnQgWBnoS5qm5Ez1X2PQ435PMUSo7DfLrrAtjfeoMw2FKYmDkW",
  "key11": "55YKWsMbtE36tufgbtYtrjcGXZx9MLmcLZNZ4whMJszceyE5kU7dePZZGtXPhtrPzkACo9rqr2TvYifPHgbK3FQR",
  "key12": "26yDh4pXsedYuKgL5EPYrtTmez4o7AoFNi858ts5JKANYPCZYTS9xsLeFEWJTpP3Y5XnvZibHrybyUz7YMQ3ZcLG",
  "key13": "ZVgX5SuX1ZLTWMgHU2v9PLQn2VZtXddRd7zm6fLuLzayJw2GeWZrc4D9oJV1A7GMpeJvzaEmqQ16X7kuRvUUAnh",
  "key14": "2rvFizNuAN2akW5fcdagANjAo7Sqvc129b1PJVULPeGZmypUPrNresuZeG4gnHEue8Cw7DX8AJQGuhxZ4TVvW7Js",
  "key15": "4GKKbpLLf12fv6NY6CJjSjpSXiVt9Cq8ogY7NHTk1imo81LZFNuhy25jN8KEqK4vWLKwTkao495JsfPcNDDnxzpu",
  "key16": "5G5rBkcSqT1bUExA3yZaSE1CWsVhFPPvAV9YTEH1o6ynR4VYEiGHVyJeXAHE21zizjssrn7qkSzookhreZf6nKMZ",
  "key17": "2nHWiYfMkg7CA311dYZog9qEbrbTa55wNrXh1W9RNkcR4mHg8gXthVAHsfcbnACdP4ZFQYfjR6hGyHJYSFku5pn8",
  "key18": "3vMmJaC5wQKjQ87dVZUSn9PDq6fpjmV1FFyuUnwNiwze6UBBUD47QkgnkRLCSyweSCRffQkdgv82VuqQdwr577Zn",
  "key19": "93aewC8PBWQYWzC3mTuuk6iF92tgR4BdRVHTswDFvZ8qeDy9q52NJqzJohc1uQqdNUend6egHQKccjA5inRxuD3",
  "key20": "2aHrPMaUnjFMkqfqCeuqhZgKCYTFam4iwGehKoJ5TGGUyWG7sYnY4PDujdddPSxf6qvEfQuKGP3G1vdyTyv9Z866",
  "key21": "4qYb4wVJTscSL8GWbWX1ziV86DadtLfhibiNwKQPUDJK1JrqnrB2bxnb24kgCjbQw8Aq5DxBxdDnjHmfeoN2Eo3S",
  "key22": "yXdzJpTx6SmiCRVcFQ517CiZdYm3wHn3awMBNF896YVvFGH1QrfGkJ5apcRXY3FhsFceeDWbuH6xcwD7qLLd1wJ",
  "key23": "3T6rxmLgBC9NUGg83gTcTYQGf26q1W2TAJc7YJBwpKvvR1aDPQkAUte8wpeYU2GGoCjB2iSDS2Q7mA7aRY2jG5th",
  "key24": "5gaq2bs5wBe6A6hzN1QHGgckkAvsYT9mhLDRyKwKvYiSvSDMjbcfX7jnS41QCBx16MVe7sb4Stqx97ESNjRhzDHj",
  "key25": "2WEhtEEaRJh1svEtMC6zJLhSYdMLdecxU41HvGZ1WPLCaTp3ju1U2y4kNn2oxvwbu2N4vFam3s5UtDNBEitrtVQa",
  "key26": "43u9jgmspn4uWyUaUK8ZrxJT9aeJAab6NVSRsgLcMePgjKWAwpiX2o9VZQZqoYNY52dtk3sSUH22WBCtSUNrdY59",
  "key27": "2yeGFodTHp3MN43fx23WHJuE3612epsoL31Q5cNhLfgbTuh1AYQYZpWFDiKM8Kb4Btu7JQBRAG4fCqo8H9VtyW1S"
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

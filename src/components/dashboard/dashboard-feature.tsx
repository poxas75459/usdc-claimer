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
    "5DonfBjhsrXP9KNbkeoznh6kTEzs4gjr3WyLRB3LJga3fNCfvBRKcr2vNPLwiHZkB8jJKJvWj1NxVEUa15iw9G3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "382yTxMv1HX4puLSXuUgSPRnPPGdVmVFCG2LkGn74TiRFGBkeuSg68U4dcFLxUcJPqJr8CorHSDEWunH2F9VRxed",
  "key1": "GqzZEsTQnTpmk4SLFA4Q1pRXgxZ33S7hinzS68zLM4Rd5y3z8DB4Cu8VZ4ZcZtAP9UZL3nfnnaMBpZ5PM8oy48r",
  "key2": "3BT2dfg96YtEvrTEovv73eKgQREAXfcPC8LqhUgDY1bb6KmjUbRwjkBvfujFbkv4SdWMvMdcw6BXity6e55Xz2PU",
  "key3": "5sT4KMjzhJzfHwDJ27nMHp12pasTStTQWmfgxn7KqEeXvgLuhQ9aS3sfchv91nkUUmgXPAorDPZpQPSm8FdhDTMK",
  "key4": "4PZXWN93c7PjjNKzrjYgX6F5i7TmGeqUzDTz2VNkRXPTJASgMPVSo4BphaUVB5JoBpSUp4cn9kqBRLPc27xy1Be2",
  "key5": "3uXrmJf7y3CqGJ2eWrgcBTqxSfnvVcNwMu3Xt1u5PnyM4obkioDbhbxukRzj1c4gordVbdnqoZvXLnE9EFcycA8C",
  "key6": "3dfVw1oBMn4iL5dK1pLw6MbCgHSkW8wskkyHuTDzVNWMB3BRzufEoDnBq1eE7wEyvdm3ry43wgC8wUYNfk7U9SdB",
  "key7": "3mNr8mT6Qyhgf1SpqTUQRtqKC7d4MXbPxkpvUekd4fhLwsiGM14YH3BmEvJfQAJvtM4VNizoy3ttLHjGhuRku4ia",
  "key8": "Yn3GG7LiWHd6xaciLxmWJh4j3Kmg6kkgjXqoqnZVYX8uHuaffTcsNiBa8mpnqgsMuxzHyDGAJaUzXZGUi2CRVkC",
  "key9": "42vjewxt59qDVYMkUHBvgc7Co9excFJCiDC21oTzgYnYkBuVxQCum47JY5SAyHSy5oTsiMRGa5BZpyes2sfC4GLS",
  "key10": "59ZR5TzPfQJwK1WbRLHuBmBfnhW1F1Q3PTq1AiwZhZxozMUn9V4oeygVBiYvCkMwxjNHNVDjLrvjGq8c67WYMN4T",
  "key11": "3e1kgL1udFcpacyKEJtAUzA61tuCFeoqHgyAqgDAobJ5ECQY5Fj9rsbYX4SDCZDW4fcUqLi2QyuWHqWxreenKEMM",
  "key12": "3X6Jp3niwN76fEkTQWkSyKzJAWtjhkY4odmpw8hTUoLgYUEckAxDsb51xHaYvgLAxmRseoyb4uu9GaqtgysFjtbp",
  "key13": "h238LCyyHtgWeHjHDE1UHJ1ienVoPvdEAuBEf9KzGQYY2guxMerGouDZEnWvzqLj3jsCNKAT6sckgo7dt5bFqZj",
  "key14": "4wAYSHTmg9Zfz5my6GBHFsWFqxMS4BcwVh7H8W3nQJjrbaLPsFMfwmwb1P2SbQmbV6f6WUK8yevNnx1UsjScLcxT",
  "key15": "2BgXrSHZGwF9nHEaRaUBtrqwHec6HZR3UkX6D7G7nTUBqd9rnNKfF5M1UX7ELM8KbVU9m6qSVmw6fem1dnCZkr7k",
  "key16": "3f7NRYnzmriV7k8pTE6LmyP5X3tY3zSAycSjx7Ea5UXjQM1S4YH8PCn5AzHzX8LWWbjHyocJVbfQPgRW45iTZrS8",
  "key17": "39vyURJBn9kvQJJ8TQupfQUtb4hSbkX8vyLPK7jcH47ueU2NeEZPf3BtHyFHbb7U7dCSMAUPdtvgLLKnUf9QPg6H",
  "key18": "2YxuUkgKE6ZZpDtRizna4ue3FwFyyFAxh5117SC9DNq5sK1xZfHBVLayZ9wmrSvR4wPZiGKip2h9amnECx8cGgyp",
  "key19": "5CU9unWuvp5NZTPGFHTQqx6RLu82fs6rarYJ2VLFra33z3RJgY1B8znTC5zaG9CC5X5HuwH8c8W91zHTCEuPbaWc",
  "key20": "4SDjcTVwtgnxdbhNGm4Em2yE2Gp8wbq3da5jynES1MaaqVMUibGF5e4bD6bngBLJDRhfiJmX2KpxknGn9DShWE45",
  "key21": "p5gRaJ3GAQTGuDoYon8ZtfD9EwCHCqEy88EfCFyt1kUKig2k1GTEhbVNoMNt2Nx7HrbDaCY7uAXmau1JoWRhoKW",
  "key22": "26CwhUG2YVFACQX9H9APEhTFvTqtEo4DY1wxttCYSt8rx7NZyuHMg9D457FPzrU1VqZ5cZzKvKezE6oQJ5CXiLHU",
  "key23": "5bBVBe2SE8xdBQs9CKmGBLcpNR9ipwZPmUGVQygGzBrhMPR4AMgPQj2PMRr5XecxqFH238j1SzRwwe2ZCUU6yybK",
  "key24": "4LF6bRQL1gi692YpoArkDMA9sUYW8VUXgwiTtCs3ajFH6jXxunyCRnv91NYPw9Y5PvdjkzvEZrEVpzi2Mbjwjc9j",
  "key25": "2pBf65JVLxqkALzsk11LqJPk9hHCXdCWS4pZyEvAZpUmJqt9V1YfsPZJqcF7LnKRjvKvin37UVzqsnLaSfH2SqWa",
  "key26": "3eP3XSVkrfVKhX6CSWxbEeuVnNNXAoRR1njiz2RzNqGM2p4sjqaUVpgaV7STR9Ajw4N6VDKcRfRRX5VxADuCuhw7",
  "key27": "iZuNz5WeiwJNK58ADcPJMHyGStqrxSF4bB1Y6bVFBNRYb4G46TR1DHXbPHhMVvXyQEanJBStEG7LW1okWxL5T37",
  "key28": "PtKhU4jMeEyMQmFJbNnXKNn5JDs4vorPT8EiyYpFgca5U9DqEYcVvZCsBen6yeiKCjajmPxCepNRTFvKbVnxL47",
  "key29": "4UhSgEGRkhophDUAxGYbHr6RDT9oFHbK5sfzLueDZ8FgpEhHuppGNMCQUUy3xZUT7Y5bNJWb66aWbKMFTkqKpbFP",
  "key30": "5yKUFzxgu7g816yJDihJMNTb33JTTV1NQsPDhqm3JDQbFZrJc59GizHXWLFtdejo4w39sdUqNLnqbwcWqfxAhLYb",
  "key31": "5wBzi2yaeKGtggkAr3Mn3yZ1bUaLnwCh26j8Y8raKyqAM133eQPQXwpzNGnwqw2QGeQRQMGZmi9Qcp21VvP7qR4h",
  "key32": "5Hn286brstb8HBxAVfbZHfch8P7wNUUS3vRUJLknghSi7wZJyEtkw1ThWfoVrd9C9dpLTEB9bJg1e9QTHzsvTXM7",
  "key33": "dYFNm4zgBK1Gw7iiruiJHYbnse2x2sFJB4iWUSLtt9Kg9UpJWAfr1WwXxUtCkcvhCv9JxZZteeaJ9DeHme9ZJiE"
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

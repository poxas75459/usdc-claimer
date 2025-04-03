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
    "3ihQGtCMPga8L27q42yH9NUF3dGsJabnY5tcuS3jSbQJhAsGqVypzaYk6eWRNPmorygjdnLfdnP5yE5zK4HySkrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fYdygByPgtb6Jr7DcSTo6WYeuoQbVHkoXm8vEnvWSwYf2XMSspyKTjHxU5Z7LVY5qPKmmu6aWS5yw6pkdBZrvrF",
  "key1": "2kfHTQL6c2K2t5P21PRfRoHWNDVAa6nzpw9A1X4LUwgEsDMUGRa8V83sGRYvVC7yjUJNrdJBNcQdyquHJj2Z1mbd",
  "key2": "4yyoGktgVUDr1xzAnPKtiEfN3uW2hhS1NePUq5up4ChFa84eVacSNW3Gm6rXHWaLzsgd9A6ghbzuaNbje46PY9iy",
  "key3": "2nnpMSCpkwD7FPXxkshJhZN6kRXWv5WNUTQgZVi8ta3cxBuL4vjZkN3zKqEo2PtNk1CxH9H241jWsFbp9GJoiBDu",
  "key4": "TitJhSSYyEjskzifH66jANL7uGKiNC4594K44pTAHzo7st9guUveBKf3UGwjs9KQFJU3LShDHJhG54nnLiFEeHH",
  "key5": "VT1uxVWV4R4BbJG6fyVD3dXaKuv3Qd2Ydqf6S7iLTsqNmDfUwEnTJpZUkcwKS8otoCaGHJ53tTBosvthicP2G7N",
  "key6": "3T4Aouaui2et5YJeJfX7UQUoWDqNadyA18U9iR4MVFuG8sZDqw5o4aTiRavUCGLY9GywfN7NwzGra6HhStMPJk7w",
  "key7": "3aK6Y499KavEh1gB2TUuU4fwgSkNDX8G7xoQug51P7vSuqKrWnTRFMbUojFzFwVGzXkGk1wf9cRccs61hAsQ6g8d",
  "key8": "2daSdVN6aBTbD4yc5eucPQqfNRziP8Xi177TbmKFtoV8wj7g3vQvvcFGnQaBWgxZRyQ6MsjcBTdy7RVJcMABMNZk",
  "key9": "4kB3bKtxbdQPMg6cLz97afQ83RZcXdkteFyZ4fpXLEuWPYyWsgAgBSDthz7UtvKQzPrs11BwEXKpmNwuXxkB8aqX",
  "key10": "3K2MiyTSvtCWyTuTUib8ezcTQ3xZ8UbBnJ8KWBKJNJGCwPfShsKXw7TUMraQ3GNafLLg3W9Me1XDRFmeHrisbVTS",
  "key11": "3sZYCrbRFwQ6aah9ZZQVzfZb2xAana1Sp4dvRStdk2WHzJhDTVbKFN8PWuepUTWhGjPNTeHYJ9JysEgZC3p3MqeR",
  "key12": "2sbdfKjhhZiPjQB88Lb26JqkYBBeibDettPkEexfByR2QGKwx1jgjTt6wtGvGmhbf9ibaBi59jumAiWHPQSudzjr",
  "key13": "611jcSutwjifSEtUtFJ29oo6mm8hrxB3RZoaSSGqfSM1bYWZirANTkDTzqJsZQXEYXbizSYQZRqiXjj1zTEnP2Vc",
  "key14": "2b5HDM9px5VEcEaej4L2yqYqNEsM3Eq3hiN62sCS49hBmV39SUdyR8t4ovsVuwUeqY1Eyjdg6dizGajuggMmCBoq",
  "key15": "2uDWi5sJd4TwKJR63PQQmXnv6XnSX6sgd9ab2PZeWk5sL5ba8poBdUcLmpwtyk4e4M5v5EN8DwfFqACpfdVxYXJS",
  "key16": "5VBS4vQiLdpt3jNsQNwFhJP8r3Yw3K8AP7Ev2QyfNgdogM1DFnHJj4tki1YiEuH5sMZ64A155egewbFDqy2wkp8R",
  "key17": "4KeR2fTCmcqvg3QpVH5XXM33hNE5wfZGVowTbpds8yqoGsTETWe42b6xyA6LT7A8UWsrpTX7kvbD9g9djeXbQhX2",
  "key18": "2HaQvnAhHYjKYHPbcEmvB3tbSLXEsfnzkyf7H3RKM4xMoxbnSinRR1CgZwy1C3J3MvaSgvjA1zhaw9zvVfVoDRL1",
  "key19": "5B9G6wxocgbTDUBL5YoJegFnX9btopuuUkWgevfbh97A4T49UnAjSxg4cM3zE2r9sWL72zHnARsPTqbWKg7iNzgA",
  "key20": "2N47no2Ukn8pUuGYQXDZDKmKu4a7eAH4hvaJkjV7Rtgqm16xWX6xvNJrwFnUaGYUMXSiPm7ZR1yWS2gq6yMUdhKP",
  "key21": "5HaSaotX1iEVGGmiJxc9VnmxuyhtWWwJAouBeZopk1GPQEyRaVNAg2HsNSFwQxoxHW2GbGFoycHCiTJoB2yycYsY",
  "key22": "4UY8J7p8jVVYSjkkfhhwqoYp5e7GA9XmpKYuPvHh6F14bLred4B3cqcBXrJN3XxcEVd8K7hXZUdszy1dtZ3LTcSH",
  "key23": "4mhxtgsb39jK9uxHXrKophv7vmsVn2mLEcPttF25DUt1dmJTbWFe7GwZBbo1Totbd7vY97F7iv4pqX9XAfyzqtwF",
  "key24": "5pNvn25w7iaqAMBJzc37wDMWnaNK1upZAGhDHRWf5U4KZsgVp3oM51NpmhVVSwZQkBptxy3VQRi2TkJtgWHVLyLw",
  "key25": "3wd7Vuu9sUY2YWpcwdZncqJzpRL9kqNjzuuMiPo2s76FjEnMnMdpbYEZ7vVGuERzerH5WJFiDoeUhRnEfrf13SNB",
  "key26": "23haTTJ3r88ufQsvuXseV8oELmdM3zyvDnUR4uK36U2QHVMGLwSjtpxiDn2PPmJ715AgMTNWsbbhZ8a6NFnAzEGz",
  "key27": "2EWP9hF1GoqMXLprksioDyRVBLCcbCRn5e2AqEGK3GMh5w2oLF9DqKRDZQY5154ySHxzbqsG8pKBCmKd4Sh7KiPW",
  "key28": "56gpRZZsxrz2Z4aMDuZ9Z2nvwyPuaxFedHQE7kKKQjAeuv8pe8qNUyvf7jR2KbNF8CdKM1miUmSQtMgSf4YmXarS"
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

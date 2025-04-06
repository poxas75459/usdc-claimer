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
    "25NfbT8PPTxbhUGS8LTt2sGose8R4r7ytYs2Lj3QVpeqG1q3yptg1vTLoiScQDo5uUwZfrsqjwUsBUwMKzzwQr4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nywg1oKiTM5v6Ghxm2nhGkTynWhhQzAuVhGsNWfjL2tkZogBvV8gtqWKyTG7hbHhpYqZDPDnqABLzDpCYpao4R",
  "key1": "2qPML52qviiMLon2KcTJWe4Cb3gwMWYRoSLkmfLTErf4DhPzy1oe1wfkAPiFhgBqbqSoHQR5pku3NAx26HsM9oc4",
  "key2": "XChZ6did7GoWsYf59tqGwKoRttFT4tppmPfqLc64HjtSPaa1eyzVhFAz4bpo526wSPYtR2sL4gPnRX28tXLAFpc",
  "key3": "rgbt8wZr8wGpzAuZGxbjJ1khjQAEbLYRsozcvWN3N92Lfp3GN3t14HP3t74frGmJ4CsEBT74rSBiXZoKqdUtENN",
  "key4": "4oBarUEdUifQH2womRrhTGnPciKqp8kfqGqhm2BExNVxyccbT1PkHZtpByd5dvZpDqiFXSuw5ToKodUbNP1PWZKL",
  "key5": "3iyNL4UDod6G7qQZNc5zBnHmCNMEEegbSrdnAiLTEqBjZirWJ9Z8duNBoQr3H51xUT2ownMbvwEhvdyDLTDZCsB7",
  "key6": "5o3VpvJzpJRoWVvc1SUCPeYGY1ESANQjJGDgik5wUyyfGGRXXU6dkgotNSKuuPLKZDMjGVVt9XPEbPjpUbgMML4Q",
  "key7": "q3atA9vRpxh6kUGBsoHxCHxQ7FRMQZNeS1hr9u2tXCQ423NHxe89uzjgjiZQVdnpttgKAnEkDd1vnjMWX5wGQ6e",
  "key8": "2tHLX1iQ5FCg66AAaMMoYr1pMRF2RNrNKdPMAnZyut6iJYMw7sSFEzXtxfhoSXQ7ThgNmy9h6TxLuCMaRb3gHLSj",
  "key9": "25VJkr67zVwHRKzNsPFa8cXgAPB389ZBZe6cjv2mkxNUTPgZjgRAqZ2g6Co1hWZkpNvJkvUBBRMyjPXXWWxshexS",
  "key10": "45ovEijxcLLDoF1sU13CDPL7cND2UzB2g3f6WfTrqbcLShkgFfu9e7m6BVfaQnYyCWqbtu6C3NapEA1JFEJVhah2",
  "key11": "3S5LPDjErb6BdubfW6f7Efcqn8csMbU7v9VmekGvBGgVPqywCCMgiQjLdaty5spC2ErucCkTxHbLvLhrXxMo7BqA",
  "key12": "7NuAJTNMzoBZueDB7EN4jYh8eKo1nkrevfKHQWMQXjtbjFuRSsvE8yv54C33US6VPSDDEdrX1WX2bRJZHg1GWYw",
  "key13": "3uj8QRWrENvQMMv5V1zsAvJq4xZguDSKHD8w5fCAUopXNqSAL1N5qsecC6qYDNBN2dw6DKJGL5vgSifdSw4Advdn",
  "key14": "3Lt2i41NTVtJUwzQ6rcJv5fZ78EbWhNTcSKX7duvR5imBUQ2Ab2in2nvuCJsdH8vYGigmjNm78u6vsEXvMnpCCKs",
  "key15": "214DY9L8FgkMDxaKbgXr8C6Uw7HYemkysJQkzozvudwWJbMTXmDmWX1UP1gJbKPmBy2VgvkbbB9eCkNyZbb6WGmz",
  "key16": "4prTZFtFSrt6TJu6MWsdPwgLbtuGS8K4E29csADWkyhacFTZ952DENzZR4zDaSXgeyNjaUb6NyVGxN7Zgj36edV7",
  "key17": "FFZhg2hJYoVVyuuJDNwS9J9YgjbXnCSHepJjKm6utvatwMJhvr9WDjd3uFZydyg76eoZmcbD3A3vyjWRxBcxCgL",
  "key18": "2cnBvzxfbTBnXA4QeFrZQTkBirgdtEPvWtoY1QNtoWZf89EUf9MCkbiC39n8vAVPtXMt8hoKBdkUDJoQfbZkbUZP",
  "key19": "39iPjwbu87goFMgv1cdFgGmQmbFTaR85zUYnLSR7kj8JHmQb5ZqagSqxCihNfhwztcuhaXZWd3nwRyijgXtxMFyD",
  "key20": "T5ezBmUKZTPBRxww1KvYKDWDRoykbRbbCuDcPvnHjp7CwNLc9CfZevMeLc5xyh1EnoLdoMW7thzHTYcwXiUeSoP",
  "key21": "5UHMMg6AUokfbsGMpz5fdMeQHT6VZezJ58XfutBGRnoc2hNQ76EFHAraviTWKUbPfK1iXEGcePRh8roUwKLC6iCf",
  "key22": "2QBtHhWUZQ1Dvwcrary5mZSgMU172bqH5EotffgSHk878PX9i4AFPTNYXPrhRCLZZ9PADWbtpttyH3CUpsVjDiku",
  "key23": "44xSKuAk7VDEG5YKYUNXStCPr4jJknYVx7VWuxnyn1Nzd91epotpZgq9eCeWgdtz3ezRWa7vzPdnmNrHRD1mZEFt",
  "key24": "27qsqdpvFGZXxaW6gTRra5zYgTf69updfCiM3faz13k6LqTPbPwv9MVdAha9BuyVeaLeHgNp8qKYG1mTyUmKiafp"
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

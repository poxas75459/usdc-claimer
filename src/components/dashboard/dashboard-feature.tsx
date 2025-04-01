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
    "iMV8pcbNh9u32jLrJVoo6pNqd1f2vVizt5psiXTckKyZH7GYmFZBSsJbgGLdBbpZCuuYBwHeExrTeQp3f7g8yYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnqEbhvGHEd2bF3wdZoiHuhwyALKsX33VSAPBq2ut6Q51vG1HZWSbhDYVpqMJPmj6N52dqyqoyh3Eso72vHqkBq",
  "key1": "4jgHAWAgej8o5FmpFL3XNruGnGaDfkjnPZQNGnWYYDYpSjNRM9hHoiMPoSSTMgtj8TJjDY19o4eTUjMpZowHfVX3",
  "key2": "2VedXYsZQCHxSTmdh2tZhmiMLKcTqT8ZEnywkuHNUDirWc9Jv5nnqS2jJY7HLtpmtu39m8vJWTo2GfmGUYXcv9td",
  "key3": "2ugSzZq3Hfs7GcxnGgS22iNEH4Yodjg47Nj2Gcpd1YsRCGPuFwdUPhpwEH2XtrmghWgTVcSogHxvgsyHnc6HgJ4K",
  "key4": "2pkRf35sg3j867MdzesZwJLUyDiEr5TxNXMTP5q67zGQZALQnWCc5TDQ8cBnytCpVGYsZ2xzUEnU9SM5oVm3aosM",
  "key5": "2zbB9MZB1pPfWoGt8gKxUWeem1MQLWSXYbnZVRnGnqNjcpJaXyknym2FCFFfAmavJ1Juh9iq49ZGqhqBUvP2Pqpk",
  "key6": "4cQHo3fJAQXJ4unMAUPcZrU3rAMUYWoxcJuVVaChPh7MMvkhtJUvpoL1fTqZJR21wcd4b219DQB4zUrq5Uu3bKG6",
  "key7": "4PsEEEDJMk9UMLRPwitVbAkfALqKhQa2NxWzZ7KGcF9vY7C8v37q9X7A3Ka2YoS95eXfNxPb7VyKZFwGv6t4PPY",
  "key8": "25tAEDfP4xSactpyzTdAMxifEtj6poVvd259c7WZRk7QPfx8xujhLNV63xyKwgAcCuug124UfpuBZuKYhWnhzTNT",
  "key9": "TXh7XbrjRbEQf2qhSz8c3mr2P1a4LcmkxDbtdmvkjD6brwMxdzHbvPPcePZznqy5NJBVVmyThCsp2CyTisSeECj",
  "key10": "225FeCW9HggWyAGSmGuoJLFMf62UGD1A5v3XeD52V93XcfMKWfC6Sm4gUq1wAZDVEsQhpNL2LCc3SigGKcmpE9eJ",
  "key11": "31j1Rcp79QWoE887z86XT77qc6ZuZJYuvSwrH7P45esVAz8wgAqUNMKCSRR2zaFnTkQchPLuUYMJEjh8BS4LbGNb",
  "key12": "bP46FNWHGBXYDUcv83pNRappsAEfKKX4avRoa3Rrb4Gdb1wawZgaXqvP6d51C7BiYkk3h79y5jpDdYpGPGLrRSd",
  "key13": "5jGbUX2fgPQC8Vpsf5zaPP6jUZsAfmSUFEvcqnDTvGttwARTyAc74hnMk8ZDQWUiHLJ7YswTaTk7Go5okk8zC5Tb",
  "key14": "2QJDK7uSmgeoeofi3nutkoG9cfNQFnTT2ciiHaUNGwtp52Gq7BubYrZZWEgAeWCAoSmAYo1xGy2RtDzcoGjqt7xE",
  "key15": "HsQeV8rbFuyjQJ1o8JYsdV81R5WomRj8NHDBuqEDKovXziktd53MXMowacBPEBLBZA47RGh4P9Kw6nAEtMkyAhN",
  "key16": "R8Mj6GwGPjKMKjpJJ3QAkbNHXMtv6Cgjp3cfFQsGbwdcXTn8c341N4y7QcXA6JLBqLAsS2SAngTpXyww2rX4QLa",
  "key17": "2r617b64hLggQtRi1y1oRTw7fjT2QiV95dR6VQfphqp5LqRsrnLaNd6wgbx8JzhX34DE751UmZF2RTBB3Y8ddaxn",
  "key18": "FQJfeA734ZmGnhTNbmLzKmPh3eK5CBGgVXDVBtnzMDXDpbSoNq7VPzvf9MK2bdKn3dHfY6vLLKARiPfpMNmNaqn",
  "key19": "2uYov77ZyQBHLm8pEkq5zqAsYsGe9BadsHxJRSzkYc8w4xU5cwYJApUYRreX3JchyCCWkWR51joW1qV5n6Kihd5S",
  "key20": "AwSEkDPECqi2n111xk46tUygkitkaXLvHtxvEWLLvqU31ZbKfNJzj8WWFceqRxnrkTCtCgH8BQeRFU9vdaeczjZ",
  "key21": "3MJTdJgWzLwNcYWppMZiicJbN1C8yukrKi49og78Bn45ztw81C2LytKUS2NjCsrZfuUWsa63WBziMH9gZiYuT7Q1",
  "key22": "72J5tKzZeuS9dqtTtCvZp1ZWHKQ5Swuu2S36kekDMffA3go5NtXtHb3hJgayHFP3dTQcZgpiAdprhLEYEnKvPYo",
  "key23": "22Sio47d1qTQDbcDhDnDyijo3LghdkK74a8CjnhtEQr62bCvKoPEHkZtrJ2VqG2tT8ruAVjEt7Jw1C1Pf2nepwPM",
  "key24": "2edDVoM1EWV49SBroPVeRgaxNu7k4ctgGmfGwh1fzWTD5dmi6jA3GPmrd1Vm5k1wwd5DNr2xMaFZAzkm21Q6zrpA",
  "key25": "57be4gPePAsKRh4hUJh8Fqg3C3wohqpawPwf4UhXQ3eY6kQBxV1YXeZq5cBwfaTgXVpyffyjq1EtVmMRHQpDkHK4",
  "key26": "5T2qxRqDx6KkDqqdNNadWnHKkQP1obXPJoa1fYWXyj9aXfVqUCB6LEARfEMzy3YnM9r8typgQGQjdgGNnjKsdN1n",
  "key27": "4Tt1ZAGQbqhTz6aqwavE1BsWhwy3BcGNrE7F3o49DuyXw9jTLGXMU5Yg1j3vttAdCqyjDW253zSMTmb8nJGfVpZZ"
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

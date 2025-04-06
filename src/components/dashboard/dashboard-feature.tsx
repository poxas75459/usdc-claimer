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
    "3wTagU9m1woVUecRhENbGGPWLKjaeXktTXs2e69Mt3Vq5D5gdVhfKJMAGwJHHtvW1oBvA4yUwPXfvSRCfi55uQZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWZhFHARoY9bux4kPVH36DaryzCqSpsHCFJ9EcJ6rPbR2otYzhXd6PQ8LG7iT1mhq58xkx5mbkZ74Hrejwe8L39",
  "key1": "41nd5xorA2mzwDuU69yXdB9P9QAC5XodRuankg85baGzYytUuRWaZLUaLP4GobzghgabCd7XgBqGioqdDsBvUbnc",
  "key2": "2rYV9uhHCPNH2UrzUfeeyiEEtLbJxM3Kz7NNnEsMDvhbEgtAvoUZqMq5dVd26pqyzjaCJDyyCM97RW6zFYWFJxSw",
  "key3": "naoUYMbFNaHaTftnyfWTkjHR1aBinKcWo4JeRqHzxxdfV2GYvQmawdvEFuozgjA418NfmLogWUixnNj4bcXgeVi",
  "key4": "4KvjroSXaaQ9BYg5sD8s6wsiqEJVoWQYD82JrA6fAvanSWwYh1QJQUEVAxhLnpdmSQgfhpRNe7TJ5do5w4oCY7tz",
  "key5": "4fnu8SZu5gg2mkwFx6EuFwaY3W3YcgvhAqifTSqpK1Qs6mDgcGXsyHswQoYrNhr74WyY6yxvSjMCGMQTB2yMV7qg",
  "key6": "3PL8tyrP6y6tdFpVUDnR3mR96vLtNcghty9rmAY2UqkZwfGk4YPzC1LKRqgKg8wzAMwPPjUjYEb1BxWPDzrLicgB",
  "key7": "5zwm949kVTfhmvCcGCJAmrMfYkGtsEihKn5WYfih389nLXXJkjYnTRQdjBBpinnN8ygpK2t6dYMoCLJqUehr8nST",
  "key8": "HdWXSUtE87DMi86JbG4xwWVdam6f1Uu4QzbbpwPKUHm7ZyGPvTur5f9TZdz9za4fmqtHHTY1G8MtqYA8Y2GpC5Q",
  "key9": "3YtAuptHcrbxM76FQytdZw25PB4dSaQ6Zmj7eVTpFdvXicmA4gRNVp4qko9HujLjZocoAtFBHzPYPiVdcfSyU9L8",
  "key10": "2usN3iKfjVouFMKuJSpZVViLKu2u4FR1DuwTGSSijncBzS8wx5VHaJz2zpSQHkzvHszhgnWjFnUVTpmTQkt21mWb",
  "key11": "YBLUFbLyHckopm9MnQ8H3uNjfhiPQybKfT3zk3K4mVJsChmwSsqV93URBiF1mMLshtBUZEVSrDJ91Nige1wg7Ls",
  "key12": "5qDWqcteNfrNkTaDv99P8SKCH9ooYbygvMCLXZ2kx5Kbe4iizKFECqD8d9grEz9XecoJ6aPvGFTmC4gzC9KiVxNN",
  "key13": "36rC5dtNApibLtz89aHUHJKbZgBg4ho7HK1ijr35HxoYwHi8m2aCNChriDK2SYD8WcxA9aqmyteVYPgfXFc8o2G8",
  "key14": "3xgEKRh4j8hCwdUWZrjSku1Qyu7QFWT91u1XftQDSJ1BWpkUmmxYDGg3x63enwaWFEW7DNn7EVEwBemKD7FjRHm5",
  "key15": "3aYGXSHaZRufzjCbvzRaw6QTGJpoRazT8uTBCet8QmvBYXcMeRX1mDGeC4RoDr9Qfo3tf2298dxeQfPyJt1or8bA",
  "key16": "3L482s7sRgnDDEYX2omDVudx8d6DWfM7BEJo2XAaqo2rTWyEB8jv3oYZhTsGA14QpTJshfMycFjZBL1eUH5on4tt",
  "key17": "5vBrTXtzZmfw4T54Hr3TziTfRSwPM3gFd3W9ZRR3pNp7ghuDhciXspThny6EsjNNiDR1DjokBVzeuj1ddJGzeccF",
  "key18": "21ECYjMFmGcYkEks8gaM3tKHc2bSMUB9dTozWuzjtWu9CMgW8MTVa1qQQJZ2RVopAscSqq1LF82efg1BXscnWHbP",
  "key19": "4nq1Ep1BiBct53ftVHa2MZuSfgTPZPes8MvzKDpsqgLTkTdScfzVTk4ScZ9BcRGhGzjEMN723vK1CGGLcRbvnuew",
  "key20": "4ktB5jgVsPXzpsRAw2djjUh7MRjuutmGeEraEn7Qg5JNJnC2BK94Q2u6MPz5ww3fkQa2bdnXHBcB1xrNaWvp3PLn",
  "key21": "5kj52qwu4tEqry9vC5eXVGznvhdLSumvDrzVepps7A7RBX8iSGjEc4H9wy1tY182Q6dBhVvUUrukj8SWmnUfBzJG",
  "key22": "4AauQrNdG6s6oYgRNrbgoiHS8niT3Vg4Ak5bozoLTY4iiEWC3MMN2KUr69GKCohUZw6ds6mcnRooqsxSKd3Gravx",
  "key23": "5VbdQ1fQJ2dGUKGkHzBQNez5kdev3nWdaUqFLQ6AGPisybrjHA8s7p8pkdfKqVKJrcKniMTfnPJaDqcGWkmb423H",
  "key24": "5EG7FEQj39pQwLNH6pQCyVNmgCugaBzLkb31HmSKLfwGwCC3pEG7aGwDYYVoWq2jYtTPwwijbm2LoMfVqma7zQ4f",
  "key25": "3ySTjTrYaPUz6Nnjr76FGQYSxmCButLLeRiWFWtCM6G9imcQcXL6MezLxboiUGPzr4BqBsHRYEGDqcvrMiUBdbZ2",
  "key26": "HRenfBF9oMMdzLNoaXzaT6HLfGHYYSCUYnjmUEQKzrzf1MZ2VbpDd2MfnTNRFh97g2jHcu5qFiGjfSawxc6Yx3h",
  "key27": "2qNADCTansgMqnjnzRGvEG4vh3RhjGSeY6aR1StuwqQom3NZ2tTAX8LrqUeBWr137DFLmN9kT58im4Nbu5mpV4by",
  "key28": "21BFEWN3e18ytzAmupqYUH82cSxymK2qZGWw93X8o1uSdTxodEZmDhKPsXhGdbDbLSNHU1d3Mi9mH3Fpj93DKmAH",
  "key29": "5Br3fcQS98HWD9wFxzkQkQcFo6X1HbMRbWmAigiV2eWCfWvo3h2i3iAWQzYJFmUHat1Q1Vysqyp6hbFebG43t6BF"
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

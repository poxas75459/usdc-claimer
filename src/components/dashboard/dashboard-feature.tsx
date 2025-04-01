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
    "xqHrNLdDPhyogNnmAmprS9MyHBxnP6wcR78ub4Q3wyYeFmpDiDp19jU3DzX7pxQCoBXJbUxRDQk43rHUJGmRGFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9rvUX5nuU6QakDDerfjqT8uuq52hCJWgsZcLtFPmUB7WVtshzZE9aQJTjB7ENP5SMWZbW4FmRYGWjRFQFjcUUT",
  "key1": "4eyXZ18ETgE9PndqM2rjp6M5uNVJNgFEagqEKG76yHh844BxG2n72R6PWFb7bLdNUYdCcRdNS54fhG7dm6XCd2U2",
  "key2": "5EHfiu8LJPUievSE9x9zwZkJqc1CqfXwBCK4xoQHR2jUHcuRi4eA1i2t8Gozatm3bUd5FWLaefJXBizUGiRTEurq",
  "key3": "4Jjk4Q9D11RvLk5TYgpTFEXZzBmJTTmj3AUcgBpKjoyWzokFhfjg2PyATmuLiHJDsBxrDTazofxgSaYFt2NkRxNL",
  "key4": "65AgB6QEey3XgYCvW761jwZr4jZW4W6i7pVV6bQ5APRP6ifbZoFZFkEW8YABAXAeypKkzNVTKnuKMXij4ecixDFH",
  "key5": "2v8DtnXhjSrmQFchnztamnqYoAt773ewa6TJMu36U9ZfCaW8wokCUoFwFBdsL545jBvnVQvgQ5fYVuTJaVVjpHt6",
  "key6": "276JACCdrzVYzra65PuAXvnSX6EQRFSy3CRYeXH2Kxubt6RmJPwEzmaUUaGnSAJwDYFsKXaQZrPGFkHrbNKQYUkt",
  "key7": "4zRMbB1RtxqbbSi3w69Z115uRrSe3XgxeQGwiJDwpCWYHjUXWRdcJd7xr4Cba7jLPmm9CEo3JfU2fJGMoh35s5jS",
  "key8": "3abJhM47tTTNFAc789t9tCfgi6wpTG9qoMjwYURrCkwyMGq6sba7nuEnihNDMzMZu2AbYoxFCVix6jVVFKJJxVfy",
  "key9": "4ezSx7Pfmk1e1hz3LXaXCZ1vSBUtZzULXacY8P5cYzu1j6btCkNzHH4maNQLMMWHx3SEWaF96zzy1LYHMr7v2xMF",
  "key10": "4ZfRyxdPphgiDmmZEihdAbVE9nQzbJJ3zD3Ebfp2jN1bdyogmccBhYWk3LMYhvePT5gGagrFWzWzeAiJh5QRpKc1",
  "key11": "22Gj2nwDBp1FYwu4jXannnDA6XL6683x9KkZxb2jsFpyGJ4Qq9PQiaLgXV8Fbgtgdg9P533XEknrAiciwH317fPd",
  "key12": "24HVk2DGoeQjCigsupDjrS19cfh1JsExLyze7CPBTqw6kRv6XgQR3SiwJVMUUYcRNjngaUHryZF2bi8xbZVt9G3n",
  "key13": "42xYpDcJk9jdjszXQNBNXYZnH53jkSSi74fjh3pkCVrKFV6qdK5hQNr6QbPaaSH6c3ktPLQeNAWZWjuftFad1HRY",
  "key14": "2KG6aVH2X4wF3hUtzSEVbwDHg97CsSMugh6R26btfXyzW34ZCrALGLoKXJ4wRYSABrf2ZCnNj3nucwMaN9UZNZMH",
  "key15": "2E8pLVsKtyztGpQLLKnmPa8KY4FwAAMBhGEBi2fHWScN8WnBKrKSPGbwn99GUEoX1CbCndYuw4c18sAvrhPLdbNh",
  "key16": "5NipHQgf7y8KH9Anw3ih6MkgXSZMBGzA5XbFTpQF5KZdALV9D2eLyJWaSoHwQg1K8pUv8mDp1SisBnGFxzPTBh7L",
  "key17": "auGF9zaE45E3t14NYVHemJjAWeJL59HQgtN93sGJQ2yZok1Eb4aSDyjSTqgLZJrVFMGVXPZMNgxr5xFxASYd2sk",
  "key18": "4ZUbppNimMTvV8kyrJkwnKJfVZabKymYGTtoDcu5xweqmBpnyLrZrEyTVoUcP2n8YQrZ4gg2fkBknePL71Lhne38",
  "key19": "37EK3UJizCYpaP3bNw1LDmaytKfF4XZ3r7rCvvS4y7bqYYDdP5udhGRzERbrojxxRKzFgqUFihZxacELJdCXxfLd",
  "key20": "5AKHoVhWbYTg6mVd7cUvcTukexVWqDriSDczKt876FdBtHmrEHR42YUAhy1FeGUJzJ5KRNJkwJoYfkyH7YFEbCNX",
  "key21": "4VmR6dWZUjs9UPP2tmZAGksXa5YnLd3qPrAysHxtExCnurJiWart5LcZnDZKtTyj9LfsNTyi5PC8yanthoeQzGhv",
  "key22": "62wgaLAT5ewykK6KED75nwg9eDbEAqqA3RqSFnE8ufhQMF4tfGwMsMd4GkzR1ehn9uNF36RVevgYowi9ngRSa2Bn",
  "key23": "scFLSv8cwk95Yu2meVeZt2g3o63JbBjKHdLWMZVYMQnhSCC1W15cHJKGmWDZhJG5beSoidvMJxPmaN9eJySnWpy",
  "key24": "34rJ3HwYcNwM7udb4TYPVmX7qKxFywKZr88KC78VF6QRtH2v7z7USfExDx3ttA83bvue2Ator2kHoNinWXuerPKJ",
  "key25": "gW2nsvsSki8Sy1R6FW7m5zBLbmHYJGxYM12MSrb8KuXkzYfcTSHz6sdsJqqVHpDGZ7j3Uds2LNcSfKHaGKa5LdW",
  "key26": "5ZtkNLqg78Am8G8asEUYXs4gvhLaxH3SheYDike9vu4KMDB8a88jdaPuCUKnY2Rticnt6JhY6QyxtFRyxAxxTbiC",
  "key27": "4pTEbUQQ5b2yy2vAkavG5JvGEQSSSgJ296MNbpWskpF3iQVqSj1S8FXwEXwGjmcugpADhu3xL2BxpWT1eKxEFNt5",
  "key28": "21puywbSxtB5MZryN93NyHH3QBeYzh5h2dqMZVbfZ5UJnABLpY1tMLjbFGXkqXunJ9c2roruNtro7M95syu65wCn",
  "key29": "4YqotQmjBw3wgcp4owTPVRkQM1hkKmLa4AAGMDR3HMVvgMh7U9MKSJBb1hSyqaTk8Btj8ePPQiTr9fhYR2hcwNxv",
  "key30": "gQj6mW1qMUp7N3naAwBEM7rvMnPm1oqzgfURyJHBBu7kicPQvfR6APpgmPCjqEsbjbgVQjAJ519tHessdrdf4EG",
  "key31": "32ftM4jEiBUGHWC87enbrupzJtp14RfmvBFoekKngzeiirbhCPwYqCMBwRg1nFoE9M9gQh8ZFBkBubKdCLGKyGjB"
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

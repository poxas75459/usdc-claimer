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
    "57vbYFji8E2jnhvZBuGEUihh4kniZg6xiGi7KnKmvvyy9UxDnrQ9YH5ZqoxmuRJr42kT5KqKX95FgXRw9Qb8jXng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWt1xiUWGEaASthGTueUAoZnuRNy9j7Yd6QjjBbHSip2ueDT1Yd87dqfwUpgHaCXo9yzmS1ZzLB4gHT2kn4h7nC",
  "key1": "2yDmi3DohB3sLWReCc8ywL353TrhPn2Xic2pXqbc7BCttbfRv1GjbiP7fEKbLGQoexbKZgvBhe3MXmp5hUDzPPXa",
  "key2": "5gdP3MPdTwSyYcF57fjT9XwEy27P87xsmnsEAm3kL6cmzocQA56aSN6MmqbxQHv16DXZXHqXC1AgNwstzQLL4ie8",
  "key3": "2q4WhEci1vrMp2oDaAGGbzvzH6JAxWJCkz6scVisdiPBdSAQmxDs2UDbtwfXVJrVjbqdbo85Lr4a22f76SvhNdiP",
  "key4": "2PV6eaNLXGb4HkanZiK4fyadNncJu2Ye87tGdH8eivpHhNSnLZtQf1Njesy1Lh4tZnLAaNPWaF2gA1fEeX5inkKK",
  "key5": "6r75rSr6rPyVJCX2gGeL4AGhYUrbDVnnRF89nJHDgPmS7mdw57ApBVeEZGo4fnbGnQx8gNnL17VtP35BHXbGcAs",
  "key6": "3aCNYgYrHFSDFjWKT5CxWWuGNzvyYa4vPQkrDe3D8MgHinuxpC3EyX2hthsh5z4sDA6gFsB7NTbXu8QGxS5NMWAs",
  "key7": "4RCq2mLoUFXVFBqePJFBZ6Z7L5q4FSFqFJZu4xykvtsBZU2rsCSz4eExootRMuE1DPsNNhCMiFsaebfMFPBUoq2j",
  "key8": "2uahe376GyyRKqZhowiGN9y8ZCsLcLBev1b4vVtXxTAHW4VKgiv75YuCcqSWQ1UkjhTssGnkSBrLrocKYyBFPqcj",
  "key9": "4Ccsbv92YBG9zWBwC5Fnc2FwNWNL4tLQXrWk3DMwpCutqNZZbTHc2gjQKbdMiUEU9yVLkAyeJsvPbxvrYw3wUEkC",
  "key10": "55NCHKyJvWu5AkGAecVgHfoMRt79tkXmBQCVsGSYWJEaLJyYUXGrHufEcxvZGxgZag6fC4KCVHEBXiSRTHCyydqb",
  "key11": "BmZmVew9MbbRCrGHoVfr3GWLR4FsVAgHWz3QHSDwaMoUKeaLM4QnF4ekR6xuDgpuaK2JhQMUgBWQr2HHdznACa2",
  "key12": "4N1xYXdmLUhPThFmV2jUbhCnAE7GdGZq6ALT6fJhBNc8tQxk3sF5nzUAN2x7UdnpTBSuAWTs3NEijTsEaFJhiTt2",
  "key13": "51FmHTeHKRyCCWb8F3w9WQePcoPNVYYN3xVvfgWDEAgHnJzESBstj4mWRxwBmPUt4oDsfvU2o8HxGFfT7ZfGsYim",
  "key14": "5wNbVedZfSXxdjnvNGWRMfGghM3VqP6QqgcmHLrkeKKn4nzSEzsqjvPtu3ed5nEeonik5MQn1uGhczAtJGLnQ6ER",
  "key15": "wMoJuEtR2qpUA7mk36BV9nuU9JCLAheGhg8BZWtggpyWmyPX1KeDvjskbsUstJWcosrcLwRTZRochfrETGvwfNa",
  "key16": "2kGVzS34BCwn8fBCAxdSkSYGhRLjKNxo5tUM92H8RpRf1Hvyzo5G8B6FxUtuWJPscCihNh7pmcuhFTncaFDfvSuH",
  "key17": "vSb86n8AbM39NHMox2RydzhG2LGa7wiKgEsoWVaeM1vTNnahKniyPqmtxp7V6cXU7ALd2kdoisirDzsW7YQM59r",
  "key18": "mQeMDcT3hXiDwx9oT9umVWzSRjUXEiENkd69wGnbhinJGBpKc3EC65pCoZHhQJQ3k5hGdxuhSkgHuE3Gd4U5nvS",
  "key19": "5h2wGGcc9majqmptZiF56X3BQbe9ZYzzxRqrHA6ZRoM3bJmbEPgFYiZcEZz4iPZCKnTFNf1zcP8Ksg7A4Ap6mKdg",
  "key20": "YjWj12MTJXjy3mEiW7QyPhFJnp7eKF2UMfcevoMkVWcxTtmfVro5ukUV4qz2ufNkC2a2793EUR4fGaY2VPSzFip",
  "key21": "5KAXVAortQ1prijhtABbpZtHJ9F2QkPhVenzcwrLVmzbohEAw1b47yUqBGBBmJyBmkUqnSxGrB2e5W9wEGrJTsUf",
  "key22": "58cURjJcYAsetf7xJrXNDjdVUrnkqSa1c4qV2TGLLUewTmcWT1gGBYruuvH3TenEKcdxnhEGsTvtQqs4D1MqtuNY",
  "key23": "UQyKsrWU6SM5J7wH7MQvs9JbZHBQ3ZrDkor1pyVerXFtCL3hdx7FuJ5UcbHUWNkRTbuxGVxpkncXZb7TfKqF99K",
  "key24": "4nM7Ln5RRDG2bhpbDR6NinjrQCg8ATeUzifZKRREWrcx6bA1FWKVQKUZod1AnJKb398D1pLu2xe6xmihfutL2gpu",
  "key25": "59KoMPbgBTVTNRGmN66EMRjQiCWdgnRknePQWXtQkBzq6Q9brinoJFnfc9UDutZq16q4FMhHTknMHftBznoiD2Bi",
  "key26": "2FpSR2FnPSkT2V9JfuTeWrF6KBnvjR8DckspfcL8qDfX4e5ECiYQwmyHfaD7Kw1isYj3njmuG3Tcq6hNNmSNtPyi",
  "key27": "HueSqQ84uB7nXpMDDAXdoNW18zyXLhNVVhz97MXoYnWjskPmQ4eaezzwz7fFC5txGo8XRWUzR2DZQoQZ4egRcz4",
  "key28": "4qHtMMwneWH1YXD9MrRkqNywJgwVdmdfVhALEKQ99zrVbVcEsEfaYQizv8eFju2tR1F9FsrP4y6YR1RWE5mmqFBG",
  "key29": "4jeucXJM21sX1T5bBpJCroPp8TAa12f924tmQp4SPY2kMx5QyepwFiPpjSXjZRHXyYrdBjJuB1c4nBeQqhm4zQzR",
  "key30": "3iRZxmxtCBpwUkKnDn4tdHUH2jF9wGBsqKY4vbn6rHJbzY3KFHuWwTLWJuMFjWQiNTRsRQtPeyHYxzE8eRDdBNiv",
  "key31": "c9eXA5Bi87FgU31S7ifokNfYBFdFZJ3EdzGhCHiRAyTEqeY3oo8f4QM5MwQp3reSKfgjXtRTjjgt9stJ5hY7ZiN",
  "key32": "5Z3xKgPbLCfr2L2wtZxpodCwfx5maCwG33ut3rEqNYzfe722FeP8841VZwPxnokewRiVATf4fvw8Kkt6m9PHaGGf",
  "key33": "5urLfS2nh6DJp3hhAUXoGFUdM2jyTDGhaxd5QaHfvRrnqEkcDohEv1AqsnBupeiBW18Kxfm2o2UFk81qLKHHuHXY",
  "key34": "n8xd1WrQpmYnDqWWp9Q2oinbiufLYr6SMCgpuwSuRPZeYufRnn8zjvNc8L6zZ2XZjabygpu2z8fjyLQJUXqHNkq",
  "key35": "22v7H2dQY221Eh9snTsN9or8SLFM3fg1h6oHc218AJWphBtH2YHCL4CCkKYAeXBjRZw8WPo6RGBLwoJByzVMhuqT",
  "key36": "5ovrQ8uKFzmJ67Rg2oDhXUTZPQwqAdMxi2UBnBrzSwKjMWStWLokcC79qzGHTRwP1BtkrmWomUm1n4LCD215g6ea",
  "key37": "4dyA2SsKENn2f4eQPrTjp2Uejszixkp6zNUiKHwh2RJmMMHMPJBo5ei62PzRLKbUHkvDvJyN1FRSDA8Crk57nHcy",
  "key38": "2AVjqMx1MUUcwV6GZjB1vwcA4JzyRkLAhj9Zh6xgzPSrWMxotDuiFFCTs7L8UdiPUZfcE8yHZEed76GYz1dmJ2qt",
  "key39": "tKNTTDELdJizXRkzMAZGKch8GfQco5QDRho4FXQawkanZqFd1Dg3KBPUYz1ePwntpDnBuGrvKgsDdctnLa8CzGj"
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

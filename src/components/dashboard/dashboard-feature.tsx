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
    "34yiThuwLdLLxxtiqxnTQPZDncKesrximS1kebBay5Y9oczM9hbZ22ytXgSKfLG4sErt9oChCxSCXiWLfJmLTuXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPd4cm7F6sAuEsN4q3r2iQK2QMjoPRD7FwJ9YfawXRJcwTdaGsMJCgAXS9TNmYUxeSSRzhnQC67QKgx6nHmkwhe",
  "key1": "3AzQxusRR28uk8XRFYHsnqnYsQ6KxeC2Fk5yzyCvUi2vHW5hsT4vRAheFUpFerjmFnCAb69xgJszhNt2a3gFHgLq",
  "key2": "4bJocRpUNWQeSNwrR7i3iB6QBWW8r6nKgvRAbsJk6AktNF7CSwShM9rxapfZ9hWC3FT6hHVi1V2cXjQZ9dztZdwE",
  "key3": "5BJPgi92ThGy53dM77Ki3ogH6iq11f2sNizcMBeyBHnNtzQq7r1M6BgnjzMMFS59HZYdYpGYdperzb4eiF4fLFHH",
  "key4": "5qT6yhqZT3z7RMyD78wbsVDFtXiY4FGgic7DFoDY2VEDnbtd1DrTkn5YqYURM2ALdMG7aDJFPtMfG49bYPHG3TXd",
  "key5": "3KzBN5MpThNAofMaHY2bHv3KgGFmDtaKAuZu2PqKTSsWgG1BsViqZERS5gv8g9ViwXXoRz8f2BpNkH3W19xaDzBj",
  "key6": "2GAh2RCfXqHGzvxGtE2od4cTrc8kvWbFQqKsUcF5CHwArEQiFdAK1NrJdaCxUrMtaU8Q3wvBvHhkgK2sGmgNezRX",
  "key7": "57U3xs7gNoajP8p7rbmxo6BKgn4z7Qj9B6pNnsddo8BCmtWQtCCJAU65w9HX8LVv4sNmXVtm9wy1qbmMgtP4DKyB",
  "key8": "34rdzp49RH57EPvkGAruT6W63mLSsvV9xgqkMbtz2xScBHkz9HmYyeo98WBCj5GthHdV95bHqAYBc7PPXThoJFn5",
  "key9": "kj88pPBBKhGnoA3roWp4D7jnh9qRrvcdNEBJPBTCHNHKBnEKhwwEgBdvcHTDsrcZ1FWjhZgEt2JPx5v35AtT4sX",
  "key10": "4KCcX2BuYXQ8LSoehsvVf7srfxwjvdwTRvJyBnfoDcDMgSZdvUnZLQqTX18heAN8R1SttvgApdVdAMaUm4VCuhSQ",
  "key11": "frjy8ifJfRmKeXhDmnmC6F9CCYc8HaCKtppnwMCaPFQxfRPeA5ywRjnEtnqMYq7qUhwy5r345qyUf3FRrFB2jVb",
  "key12": "4xg7AQqgHcMpP66PELs2Q4JNvhjCzvx2VWxFpePEMG7cXkTnpAUwjYxJwUShruQSCnHGHYUH3kQ8o73crPqehjRf",
  "key13": "2dZxQvUf3FpCNfp67gynbKv9xR2Syf9ue5Z2CgR7nceFBeb6g6Vk3fnerGjSiAPtgfhcYqix8MnZEeQsZWygijJU",
  "key14": "2ZqbxkLJrWHN5ZL6fVD2bxKBvbvbhnT3uMDcqvc1PWSzNwB6wzmrLyji3jjG6wcpWABXdtCJhSGa71FakS5ZUY5k",
  "key15": "4hJVWw5SpKNqY9uUF1T4xnvhhYJzpzWDAms98GKnWQbZmaWR4nhHZLYqqkh1rmq93rgNG7Jvp4p1MpE7ZLs4tm5g",
  "key16": "5EuCk9yArmga8tmNEqkaZFyPyK47L51NDriXHE6iNUmsskyEG2kzm6x6q8GqqFbTzbPdDC1WDKHibC9F5RTCKVfc",
  "key17": "3rV6mCjSjvHCY5quEFsfLKV83RjFBPLLTyXpQM13o5qShz8YiUEiEP5YyvWd2XVne74wVB78uN5krbnVZv2pARMP",
  "key18": "3fUxr1Bi1WnVGm24ZxJEk9hP2UCBNTsRyA4FfkMFEVGkj24ksH13g2q3T6CmpxismPEpKKgxKXvPAFgxxgWW4mQt",
  "key19": "5Mftb7UwZxC2LwD8vZrG3rpA62m7Acd4aXRaPS1dm4XTzouDVzWkDaCJNUE86oCw6sr6jaDYk6c73jcvT2PRiuCo",
  "key20": "XcQeuhGi76hN9iAdBmYQDmwFaFZLFNz9JRNgrX6bw9cTkYugGpzUCVR86EeXt62C5CtL3qXoiSZaZ7w22TnLAfu",
  "key21": "4C7bgZRdYeNqWEdDeE2e7CRebNRNWXfzaxHe1PTjETyTBiLG9BwXZU5PAcvRQtXyQd4p3uZS8eycSgMoikZ2e75Q",
  "key22": "4ffHELQmSwxqcHCRRUPrCSbPBrM7NtNJ4pyXXkMoeJm6SvSThZcbYB9EkEnBtEt1CvWL4Su3TWLs1hNVeDNwp82y",
  "key23": "jSKb1sQiWFcSQMPgiTnHHnThfxDJ61QwGJfsvSTGq6VG7AFbwnYHuWta9z3DWsvocrMqZzCkrfCbnt2dRw2fvDm",
  "key24": "492c9fwXoePtJejY4EC8ZtY3Ge92n86fXmuTkKeJJmHffCKR5jdjNZ3ENeYysqFi78Z9zDiJPsZGvnPHJk4RddNh",
  "key25": "3a51fTPeNNrnZuFtTua6gNkT3MQoDjTeCNCZqMu8suB5WxW7dC8eZfNq4RZ6MnSFTF1kkacyUQpBu3xHreEZ1Dec",
  "key26": "yTU1mZwBiMBvA1MUoAzxN8K484yvivWTHrMuPfusTar7GWJgPDLG43xvvHSfpFhzeuhXvSGHYHk9aUXgbTtsQVy",
  "key27": "3TEAX4TbNYC6138rNNUvJA4LbobPL7h424L2hAGtz3RgRc9rbtHvAFANkNEBbSVqXeqV6JnSAeb4SJJwaifcYyS3",
  "key28": "51EFeJCV2ibSDbzJzazJzQddjknNoLxUgFBNuBvaMKwTFESAN9Wk5zYu9LptZKLBrQFpKyWZfTKBye8H1neByBas",
  "key29": "3Vtfd11VVAoavdkYQ6VbFX3oWWB8Hvkj1H2GFVe3vwGG1KGPWsxkJ5GM6nLbpiUG6aZQCih1QthgXEMFfwMiuLLX",
  "key30": "ie1HQue5JSFcjLdniLRrJZWU1V12t2pTtwNfR4nowDAqoNMwSNH1vF3od58WQvd2Ut7HFDLtrHrCjgjxRxc4GhD",
  "key31": "oDVcmfCFxpLVTzLvjCmNz1HZV13aZPstjJQB1pAZhSBSvMjzek3S5EfbomR2Q8rmRPvtZDN857tLWrfCua5NcMd",
  "key32": "3E5ozqtA9xboNdCs1dWMNmvei1VgiQdPjkR1GxJC8TQQDyk85CNJMXozKwubXMgfsBmdM7LQGcFovZnDQeXakAnK",
  "key33": "5LMC9aGWnGsYqgFd4j9VH1tCNEjjhnhX5Tv7nds3sLtmJzHUd4F6pVZRszZEKBT7DBue93joUa5s9ZPnTFgD7BDa",
  "key34": "4Th5axqbocnsMMuZMjknSGvpsGTGrCTnT5J6jUXTAF23vQ1Cy9CzT8f7cJnxhwkziRiunK1qMfoCVTVuykTDzHcB",
  "key35": "4Z4pxG2tKNeNnktHAR49id2YvkDcgsrZyYC9p1KtEkcA8danEkmUruCCg6iq1698gHKcov482jtWWLpoFARyHnTg",
  "key36": "4A9LpRzHXV8f7Z1RY4ggzMvVCUaR2EgD8GDwNeaHwcDsXhhfnWyYcRdKAo4jkZcJsdGDyWqgKDmHQKi4DbNHPBPA",
  "key37": "TFdDtpBDE3eSukkugCBqk1SJQAT2AKgMwufy75zdpXgz1PPrT6qQVwsSVjtXtgZh8SffZnuqX5pcyJLN3Li5mAj",
  "key38": "5Bz7csLPue5dT7AvJjs3FF9jnoyby5DG9mZX5g8Va5BJTqYXMpCzZtqpk3KTfa4DqhFgS6BT6EdWDGhdfugCrytH",
  "key39": "HZqsPTgXA9eBEXnBTp9YvNXRhnjaandZmcL2XZZTVGeV5ySmZqdUY3dQWjkVR6kUS1kD571meiUVTJu1heCDiTW",
  "key40": "5HeEzD9wZBT6exWvs1QNQhaS8zQGmRgfQ9JEWK78JkpUeYkMwyjoZVkESXAGJpfHRrPZjubH2ZM5VAvxnjUu4XAU"
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

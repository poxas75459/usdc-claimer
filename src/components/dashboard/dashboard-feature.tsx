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
    "5cLpZ9jrzY1LnDpcWvXEgfAD4nL2sfoyfZJXpF3URJTUMUnrBBxySBxbEiwthvYgNM1ExxS1YpDkxEEK1nbxPktc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHmEFVWtSndqFVoTpQbsSyGozs1SdDLuGA5FC3vztCzfERnzVNhw9sbpGeqAzntyaeTyCunz9emb15sJWSZB4rM",
  "key1": "3uMgQ8igKhrW5VTeJq1miDXzY8YomWsHGiegM2ZD7Jpdj63GBa1KqMHfBieHguG4rNGhpoYhYYwpG34VsVcF8gNC",
  "key2": "2svEZv4pNzBX4hsCAszAyK64Npour6NfDr7spaPjVMvvL4TtFRUNbeuzSynuggBkWD7MFwBVTJAzzQqpX7Pjpo1J",
  "key3": "3A1M9D8f55FmvRWSEhd8aU5snYV8sxTrZ9PAvfqAPrRvfPYv1fw4cxrHLprDM2s5FDpGPT1mjZHdqQ98irbwmrof",
  "key4": "4ak2XtiRYgGMCSNLJu9GB8j6PKbMMkF8FU46dYoZ8s2UqWgiAsgJZsivdN5NAS5BfjgGg8GoQC7T6tp5mrK27iUp",
  "key5": "3N5SeEtZwDjb2TDNDgAFWYZu21i894ZFm4cwzJTNYRFEA1V1FxDqkqHuYRTzNBeAdETHgnQRTf4kkoxRSjW1k8ss",
  "key6": "5You1ZsPH6yHgaHbjMFD2EFquemKeU21Dsyywpxh3YTvFpzekvTpqT3bq91RciD6a7KUnTLE8Vv5xb9TAcS8qPy4",
  "key7": "4Gv47sUZpj9F84f2M3dpqjma29vB8JqWFKByz87L9SsVF7yoFStSk3A3P5LDcerEfzAjuQaAa2P3MmFb5VJqAmnF",
  "key8": "4WpWT5W8xQGdoAsosVkCLcWvGNo37x68MYBQKCUcV2CDFc4v4rV5nPLepZV1skogtjyHjbHKYWhe6pQkJkpQNyWd",
  "key9": "4eYyC8zxSBcz74HQahrhhzk6oqCABhopMpV427df2S4WhqsqP6tt2i44a7NAEBXc48PXopKGdTtzocchb4y1eQdR",
  "key10": "3Tr9kk5ms7NcB3qt9fSwvbsiXPqXGEKP7Hbw1tAYXe2yPR6a4kpTUEeTE2K57kLW6tCoPcWigBJUb5HtzJ3qf72S",
  "key11": "62KsAQk25rbYTPCe3pjdt6BySAueh2CSPYDwzzWHmR4XMDKrayzoQux8souM58P223LAVQbqbDCeqEoFpZ6D1mBk",
  "key12": "494kti1FsSbehpE8aK8R6vHKEWH3HWUqB2YBEjZnMTnHNzpxr2evE7kntuTU9kxPiLUc8R3bbS92Q9oWP4xQXZe6",
  "key13": "UXCtzHDAVrSuib3c6Bn5ZdoBFV9sFPLcWkF2pnnG4EEgCimThmmJ33sZfYC9wBgSyZVVS66p5dswQJ9tw1CxaKX",
  "key14": "3Yx5c1FHVyVv4qBGRSWi95agZrHJX2pQ2iKx3t8YiuHDcyry7XbN3W3FnZAitcZqvn1R7Mt3tCgPqWHKyS5QBQcy",
  "key15": "9ZUxf2t3RUP87VCeCgAGLEG8MNMhd2abpavF5qwaQ3BmC6KWt2mYvTX1JFYncgFXkK2cmHSUF6KjcxcVQDBaugz",
  "key16": "TRowRFdTT9XdQp8JaxfNQBd6bnbQKEeNVH7VsyWZSRGq9KMuaBvZurCCHrw8fdekhNGntMW2XuidAqAH4gjmFhm",
  "key17": "2iwTsXo85iEU7HMBKvjDKtZfLaj2jGMzTTiLdfJFwBAgEuwkPaJgHpUj9ao3kCjbm4AfJZfKMgmrzKEPjbNMyU6n",
  "key18": "3hMNrgkyfMbMV7oHgmHZaeC5NaaGaFpZvPYZNiNC5vFbSNkFQrPRXEfAxquQhU8LdLZMdvEnyGgpzpzkjtPSkigL",
  "key19": "42KVZhoseagMgAJVxhUA9g9BEgmFago37s14CVGPcrthvri8wSZWa8zch6AHa7KShcbopCuSShHv8RqET2JmYRhL",
  "key20": "2DLCuMKaY5AjVX4SpM66LwtKkneB332yuC9sCgY6JdkRs4mvQLq7eXRcWoYfjuaRgHwxEN6ptXmZ72nmLnZsGStm",
  "key21": "4LEvmnDA8CyyDZjxJPyntLxoAVzEtcyEKmRtu1PBMzB8gjv2tDmHiiY86HH5HNKhR8QTqeyiX8aPY5L1sjAB5Swa",
  "key22": "5zXAEhkQha3ECuyBywb3jJjur2nrJZ4wLBKfyV94du7JkhMSG7p8fQNyogGAmdNPdM2QP81ePLnb8XUApVGbm7ms",
  "key23": "31QRguTJqTEo34E2Kdfr1RE47QyNRDqXJUUnWebXCYJmbPFyKRNFfFydnJWYiS5YYNxZ9eqFwHbjb7pTVbfE2RUW",
  "key24": "5YzCzzTCXrpVSvxMRr3wMJLBRSZAU4KtUd9SrZ3PPqsV3m6RTE9H174Y4Jpw3P2G5MzBJKM6yhJBmv7SYtgzBbQr",
  "key25": "57WYVKaptoh7R84yHfNbphFDJrTLkKdcvvF2upFPHN8P62vd9HeJvVenPP2rAVV4LLUUTzVTUh9zuTq91LTcRNY5",
  "key26": "43RMQKj6mcvxk2RGcDJ6fWnqJ6nE9NvDvQwLAgK5DKYt1LDJ6SfwoTdtZiMiwVKMTGNCZGXzq8guJQWtRZdRtEfb",
  "key27": "3rhSCV9ycxZuaY5YL9QXCVZLKjVGCQMmJj8tbbBvA7P7iP8gVPiGFCGkZ29UADYP9mmSyxrGYKP8Eq4ggCw5gVgH",
  "key28": "532Kz5c4VhbKvNhxw2nFDgTuqKbcxUxsddi6uijWMfBVF2kyCT2Dekx2nziR8wNdCnakdVXKFqp5hg7cByKxHmGM",
  "key29": "2h676dh1bk3T1C3c3X2RLWqCexnjEUgjZwNzZsbCsje38P4qmnVC5CqobGPHxBX4N6k6fMXmp1ibxEAEFzb12aEF",
  "key30": "5HD8FxuToqYg58XbkjtM5rHhqtwKb8Sm7x7ZGFFGzU7R9JpPRF6hBGCpebtqW2Ejk7yPmEyqnwdn8KMvJpsZsz9W",
  "key31": "kKYHvFw5BdCgwStL3USDHLijb6tPZqQzkMx4TU9ZiiLuc3HS4wPDxDnc6SbS4qPWm9F2gcGvkzv9YJCFwExVJxi",
  "key32": "4pJEAPkepbJgKZbcYNsxL5DEkBVPTfiKQBhRbKPkjcBcHPrxJKZYFGnSL33yZGJZF2aPzpYsqx2eqdHMs4d8v9EU",
  "key33": "5MXECdiYpYq4pNFDZSc3pArM5iMrNbmZCwnpwTtXmJZgunbrVeTZEYZ5pt7szesC2cydsVj9aY3BjUN56MZbpiUZ",
  "key34": "31PaLpzh1cSoDJqGTNBNAY7Sap8fPEJUL7mK4i32bkjqRXbHoFukWUXRDFce7Dd2S7eEpVp3o8hPhPSBqz2FP7jT",
  "key35": "387uDMXdVHP4XSbkr7V1oPdJznTaUdBvBktmz6UjECwNgeqY6MfSf8xG22QhmkwKaKTKTkjhTrdh2WecQANKJ6wy",
  "key36": "2NfkMuBXt6efCyVnabTLmLfPfVktY7FKe8DrKgJNFRV3DKNhFoUw9KgNuspHAiTvRTXuSTyx2p2Cj43RYEQUozG5",
  "key37": "5scpH95EXo2Nnedx9mYFfTJ7Am5PWnXpprWja88RwRjY4dhMxySNVRav6SyDv2B9KDvoqg2tqFZ8TYWcdG9GMyD1",
  "key38": "2vV9BPh9B9zVtvbBVcZ9iPHj4Pg1pHtdNRLZEgiaCiHs3Bv2Z5cGGNaLNTA1dpAVekmZJRc7DYU8CKBLDHcpTN7c",
  "key39": "5fnBxQqm6aaVr1ehiXtyLewDCqqGErf3BcwPvqckKWp2y7vppeYS4wtwpixj64GFaTVaYBTnbSWa79KYHN4t8fi1"
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

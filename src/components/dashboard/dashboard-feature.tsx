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
    "2Vtk1nn88hLQTYBauTbuj3zecehJmvVvEynApTNcSkxUkKUW4EKyN1En4f1fxp5MeXwDn5SYFmYrUQoZLrsF2YFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bhPiR5BbEKcx13PevmnkUUAKSS1bRhCKAmdpGzNv4XKtHMFDBz2dbP6h7fyZ3NEffZ6JLGP6e1ty3QapCXgCJZ",
  "key1": "2YYqHpyBQ6PQpTzb12LZJv5pGDx7bs56DBSrVfQGWbs9rBhckBqk7obz8bP9VUMXvTB9BeZhrcfSbLgqh36bX9Cg",
  "key2": "4MqajhTgeTJrKf3BFWyGpxGkkhZGDJj5JkYq7ALtRBTg4e1Ad4cqUEgPbTKz5zuzmfP6dtRqJne1zxYCTdsysZTd",
  "key3": "2abpEjzFRzrh7P14VJc67skhPuPR1doxWf8oaSS9LiKYuqDtKjqR1G7JUsUtiEPQgwapWpGbPvc1PzhM68NE3SRw",
  "key4": "5RgFmieWYzxM7uzp5dRBTH4dYPCDNCihYqBsbNWcJmnFb3ow8WWAGEfiPPTJA6kpQfHUUEpiKnXcDgiaZEdGh75e",
  "key5": "4Ke6GqT2Z2WekL59MWS5Twd9d7kgSvbjGUzZaVf5JgZ2WuRs6JDV2b4FyPqbrGf6tLk47VpXv6Pj82NgAaB2ym3a",
  "key6": "5gHrZHtB5STmr9n51wofsHpafCTt8Gyh2NHpJGMKsKWScu5Yz5yuJPtCYNR5muuWJWpadufJtdsAtr29tMUEm9Z9",
  "key7": "4zq3itNLYfPjSCXRB1AbK3zyNypVDwTdW18PLBfsM5Yd9UWXB3Wf3HnyETKC5guxu5GaRofcdCiBWb8H5GYmeFCw",
  "key8": "4yvN9BGbybqiTf1qQYTfTrn4NuuBivenqSk9fRCuBmG6JyU1jCLtg6rqamHFD4UyHkZxitiaH9xxNZTQK9xPXxQd",
  "key9": "4NJc8zEVpRtRYmJ2LK1fpQUd21WkbZZsprAPabf4gTrqACzg3Dd8VzYpJStQF5fuToRgesJwUEVcKbJK38SVovE3",
  "key10": "cjvq6ocqdUGE2TSdeghUXAsApmkfjMCjfy9nnCx5EzQK4dAraoo5Tm7SVJa4e4L5tyzhhuxFRPytdMLZozGXCiD",
  "key11": "2JegThRbLSvm8HPoawcD5PCZ3THjdWu35DfCskEALw59RNNN78EsP3gUPdTcZ8JQy3YdEnNnh6V2wYjbZthjXodh",
  "key12": "4XX7RsJkUm67jo1jubrobj2nATzHwbVNxCgKF3XGEjTiW7rCqPYXCrowN2GZj6M19J1naeHQHqMNs6Khr3KgJdF9",
  "key13": "4Vkuk6f3gnmmt69seDHDVPZienuyCNceHrMCPzchxkJxr4bZGo1fzRdHhexeN62e6E7dBeZvVftHabS2oM5GvEVu",
  "key14": "4vcHbVRKfjqAVMjkrDMciVfwpis73PmH439UxLdZ7dP5NeHb3aqbGb6ithhUmNLAzGfjzt23fZDUgCyRuPkHtGFG",
  "key15": "3iYojVVMW1jRva3c9P27sFAXGVjfPZ7ZeXdLU3dULrwEiguWWWjqf4rMxRGMNAMemhw5KMDHHxVjEyzsfDDs2VTp",
  "key16": "dJLsQDgN5RVi5qjTdBhjP18QDs5mMmC7koZHsnsJUcSwUJ2SyKQHvW7H4dLSVMeFebWfvxyq8JMR5eyd7VqsXZb",
  "key17": "2sEZsMoXvEo1bUXzXAmgJyEQ99198VEs7FVwqjCE2fhtZCUqXRusot7jbK7Bke9yyezQC6Sr27aMFFGnFzVqh6Sx",
  "key18": "5uavDdNwqytvRzkBY7eMH3T9keT7tuqiWVUeWkQ4NW7ndefQhDodNcn8fDKmcyMBgzywL6Lo2Ye9xiAhA3uLMJEr",
  "key19": "3quNrS6y6KhPpy5GfX71mdk5xJswVT32Ze6vG3ediRbefKPMnKqk9e4Bsotj8LJWvwRGxHyy333pP2X9UMrCDr96",
  "key20": "5HrzzVcnewQA6Q1FY3RgZMHVwS6gVpKmeM94DRbCKR2D25PcPw8VUgTt1XBv7FLMf6GzcFt7saaUhHoGth7yVJrJ",
  "key21": "5A7fBgueKsY3hU4DzmhG4gwTbxtqQLjmqoCjjTAAUXzJcivFuAomUq1qoNbqFhcxx16iDEvCkfDMeetkxW1jAGxm",
  "key22": "41xz1zWd3xpFkPtwUs3jRshnWWVsj7UJPvKSNQxhCWqBKvCkzLs6yCPjrYVP7oimpKXAMbsHsfpUSQyTVxYrLkyA",
  "key23": "65pMhxA1ArWX5iniHqFGQBKvfqX8UXg77dz5AcBMKBLeDWQMrgdniTa2cEbsSEbdQ1roc7hGofUPR8MrLELHqqRW",
  "key24": "4dRrDNvUH1cP79C7WGzpNL82KyeEmQFjgKkEL3k7FJeaC8V11tQtNinwi4iF1Sp4vxoRq1PuumGQjipasAbCnxqb",
  "key25": "rgEQaD2A88nsJsp9LnTyEFv3KfswGThHqp9kkbY87GTVJ9ctaPAac48L4cwq46k8TxAcfcxe694jcim5rAzNVXg",
  "key26": "5xB8CgYSeWuEnVi55GahvH79cZ6xMrQs9TV5bbnhjFRYyqSWg5zAtiYTMpP92BxEwxGxjWt2GA3HZafcmaH47FgY",
  "key27": "3ZsgxZJyabLmscZ8KuU9DueXn19mbVAMoyjg5FnDWAqECys1DbpVU4vDEioJHzyPqa2ohZNPrpJQ3h7jupD2D6o8",
  "key28": "urkSnjB4NMpYYDWpnkyMjAfRP6txAnJmqHcCpbPqFsuq6knBmW3QngnYHPsdjm23jzm7uaMLSkQfaR4oBP3Z8Ah",
  "key29": "2JjwXCSaAxqy85W62w4KDFp5PKARVF18THL8cbn7PoYFaQc3ZNoB4rgwvvqe7FpkhL2Rz84CPd8LvGNtk6JC6vyK",
  "key30": "2NC5MkpecenvnMk4tZeCidjD6nKzYSmMmQqnddTSuF6v6836riWpjXEBhhdEtj7Af4A4HqMsmfJd2qF6VPtkPJqr",
  "key31": "2CuEs6Pi4aPEg5gSosvgyizUddWgqnX2bnNuwiRG96DTDEXQaWjkenuCWFgKNdLokFbVTEFhMmPYyU9ygP1ZKpKL",
  "key32": "4LNyrejDKR4MxxyDDz4A1bszgooaFtfxDSD6UezDFu3HthFCfmtsJPvHihxj5tAoVTZ2L38B22Bmkj57MMFzURcW",
  "key33": "3rwMrYJ5jaX92X5jRvkY4wk9zJZkkJfcvbKdbuXUteuFCRQaEfa351DWH3MVxcEWMdEKFtWFvhVA1k9bpxHb84CG",
  "key34": "3BND2yLN7mqDQmQhMvqHwLK9gjeQpVScfxgLgPyELj12DbTADQRJVUqr4Yijae9rshQzkNq4iVEBaVTGzsnkdY15",
  "key35": "5fD1PN3ZajbUsSUgftJYm8cKFRftBK1Y6Rhh5DvHjvpXKjHbTphDZAU1FYn4JNAKM9H3v7hDTbniEadbtMGACuUZ",
  "key36": "5tVcD6oewHZS3NyfDxtmC13opxy4LHd8NRkxC2S8PLa1RhNXZ9i9mCRi25vWAKUwmBFnHvyRTnrZGuBXNb5Yz5pi",
  "key37": "2NoMn6eFuDnqiKng4q5JSyMyynKjyeX5uSpthZfGe6dzNSL9oFcQbxavABYCssezDd5xWHHgDmpvnJe2em53hL3Y",
  "key38": "XEGCv4UnFTQ2p2VgChcSj65zXsk9y4jnycZsPKX6ZArXeHfGiicasAxUNcJfyNZoqTqCHhyof2TzbYGHQnJhgpD",
  "key39": "6w1WDy3o4ugUBLz4FdjxjJC2TkaZPXU63V29sYys1MRivtSekDQhiANs84nRWuSYcq7PdxrPavDvtriDsELDqw6",
  "key40": "3ijijTGXhX3bcaRHiyqXZpopwWKTFvHqwbijHjnj48nuxhiUUPj2aQShxRxfdHVwJLS4RerRQzb2koXZ8i19uKSn",
  "key41": "7VV6SvnWC4Bx1wd9wAWPgwH4kssM76T9Zs7AAmfKB4QA64t9XRxYq7212pvQ6bBrm7jjbz8zwDzwf4fbtFYxvMc",
  "key42": "5oGf8ay2SVAXbeW8FR9PJQv2hhcofAxCUK6CpBCa4V2Sm5zuTb1QrqKHdPyaZS3QPdNeQ7ZHdL5xCmGwmsfZ3obZ",
  "key43": "UML2T4NfYXLhipsQbo6obCG1ZRU4DshA1uFJSrtdyue1yu4YFZbFKPjcDoVmXUFYkFJF44dPK1Z4Lo8r5YEGpq6",
  "key44": "a1WBJpRgHhfDpyE7ZUvqXtifDBSxaYRcaBF4w3yfdToUDfvJvwt4Z28rzgunYYhvXyAo6RzSX2y5WXe3zHv3RWA",
  "key45": "4AtjpnXyVkRkaCJwPoWej7PxcZiYDF985t53LVfkSF49yAMY7fAcupcvTDSBRxKHnoZ5uVQWuybUbQxwtzgtkcEx",
  "key46": "4zgDAYJnGK1hEj8rxbdss7LYn38Yqffk1ib4bJ8D6pEkah5UNbeYBQHXfho1BthC3gxqg6eqaBAH2ag7bmikeFDr",
  "key47": "4EV61VWAX5acY67BwqswqUNsUp1Ym5yJEzG5UezsNStxjV5mXeumqJEHxGEXhykUre63i6j5YszSVvchGbJVfjpv",
  "key48": "5mCEQUuiTURC5EsH3SvJyBFZ4DJHP4dJpVhV1smXmWuEjfSy3GkHXJjw5EadxCXEDGVzBhnF9bGaEoqbgYb6RgsM"
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

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
    "Fr1gmRa8HsRJj142chnQrFCJvYivcG14DDwAKiLbisVzM9h5zNn9rxub9cu8GoZJRMTZHzL7Am9NfMBx4wenDpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGra9YWLmns7MdfwC9cPjrb5riYtHNL3YnsLFYWmuQ5ED4L4aU8z91HT4uxBXhreXbpNopDFEuU1MoWtZsUAuKW",
  "key1": "YXNuDMiwcdLQQFzmJSgoKcwZUqcL1wJpWKNn9sVPSp9bxxxxp41xkiSriFJvzYGhk9u7fVbSKpcVmHgYxfSrZVS",
  "key2": "91bdxWL69yx7uivvGZS8KAMJ7Afweb8BfD5eEwdVxY1v5sPKME3bydo7E5HExo2DSEngfdsQgjAZLsJmEpP4XWm",
  "key3": "5XGSMKMH3NZiWkkdXW2AwzgR3zeReBtB9Tc34g4SBF1VbGrrudeZ8gE928RdYL3tuyhtgtTJ1QBhNXuPzSASSmMo",
  "key4": "2jbsi6yn322pQLQX5vWXHKD3fJfkn9Qx2jPcYnoHkppaKNcrMfnwqESV9Z1czs941tTywiAhiicSWePkuC7sGrX2",
  "key5": "tVQXPr2tQy8wugyF3vKZMaTDZwdAzfqojuaaF31z99cyvkXazHyTRUqpvCikf16pHGs3P4LUP8tXXXH9om64Bvf",
  "key6": "4QQkWFDGHDQqvtLjgXXvx42nC8PVXQTNgAhPLm8XincQLX6qUXBU26aMUJShUVo37hSgFphSz6heaSHB6PGxLWGu",
  "key7": "5NMZMPXqvC3P4m5PWUw11Lpr6fcLUZUBzVM4KbJspTCYBGv3uaXmcVRXA9D1V21vFZhVhcms9MTUWEdQeDtMNTy2",
  "key8": "nkEh6LnHsMrrZUQWN1Yp9Nv1bXSQM9MQ3dUD1ShzsMAQUU2cKgfssJUBik9zFvPu7X2vz3FgwfCou33KykHKrsr",
  "key9": "3DMD2ZJbM973ADh1QEHzbEPqWmXQPtxR6pA6GLoX6nQPX3qgG2ZtZdnB3GNezBrbpB53G2XjPgWhXd5tLHANfPM6",
  "key10": "64jLmUJdzw5ndg9rApCf7um8TAEecHbDqnUuipap9rjALtEvHfpeb3ghb7BphFLZnXtTu9XgjKzURcLHdc2teNLX",
  "key11": "5HgvqUdFoDKZQP8J7GWTqMFqKsYHLD6dMgdRVyJfkDLRR2ZvrWkUtrPagkQZS1ThWaqBLEZ1n6zw3vXfeYGGgbwJ",
  "key12": "2TobrfnmNtuEjbjQBQmVQpeGkGfELYgT8ZdFSxSS65MJepPKpK4GTozjqJHsZ48M3xk7FbzjySiAGEAjztX5kmmo",
  "key13": "5J5Vvxu4pzGsETZw4QaNzfT5iyJs7j32etjeuQ1sYsGwmzpnZb89kiTprXn3tT2RVx585S6KTbtaVpXcMnGYa2fA",
  "key14": "4xuR7DZW5WBav2j47CGP1cFYyQmAUGAVdvyRDgSdUyeJigWNECpTWwm4FVioBpK9CkuzsB6T5obtQzwNyfGxgWPp",
  "key15": "3mum3k3qsMpWF4pq8LiHKeNfkKeBxaZ35tKnPRuwqB6fdyT8iDboTiPWyRodamio8n4wLTAg7E15dBMFoHU5tgzR",
  "key16": "2HuoHgtUbdJ5z5LHCenAQNyqdwEYTBPXucibRzu7aA9RNpfFbUoWFFdXyLJtvCFmCj5KUbyCKA9fwGcNFcwHq9mn",
  "key17": "FpCanwn7gxji1vLL9tgtEBKUct1CUGFfFuqvuVQWm3ptg22ZxNAy4GzMhhyiU7i6Nr2X6oNXmEVqZP2mVC52546",
  "key18": "2DbzHWNxRwi87ohJfktZQ5PAaa6BQXfG5XCxwJkZwqnG4ZghNczsB6wPH6ZsGyZUtVeirxYYsvXTkdSUsj2Qwd3P",
  "key19": "2yWZ7u9kEPpWGTTwi4fmgGskx8ADFr4qyfwJyaiCwFaRM6zx5iAcw4n61PGHnxQ5k79zqN7bKSA47sRT2VzVoBsv",
  "key20": "3N3K78XrRL7xLGV75zpwUtvocaQpZix9nTSAK4KDEhXmnd1YPj5og6VGdRjyP8NB8xCq3wkUepBv8uRWfgtR8Akf",
  "key21": "yKkmfooaUZbMq7aSGe3BeoCKConiVqoAK8w6hKNaqrLpgQryPGzXFCq7V5YJXzH26uXrX4aCeLWDwktAEL1Damz",
  "key22": "5GKmdo9c9Q4PvH6Lu8mDex9YnatCZVizveDsHZbrbMosWX5mHws6btrsRXZTadHJWohJLN9tZ9bCGXrkDr17msGA",
  "key23": "3G1tZ167uRHdrCDyAqENKc5mharWU2iW3FUxw64vq6KUTRgZM79i7G4pnm5NZbpciMfRBe4m67Jzg2zBygrGipwq",
  "key24": "2i2kSFYuLC46UX1fJAuPgRF2b7X1QXMq9E46PAc9Ri6y3RWbFycFQDAUTbdhJUdZyk4ecV4XWegrC2D8hKwbrfmn",
  "key25": "2Rw4NnVqnqkb4UzncC9twDBgbFDzXwUhpa8tKna5WMBSUbgsHo7Xg3VSb4ti79PMpe9YKpvFy6bBaYG7nBXH6nEV",
  "key26": "2AJCGDmiAUeAz29JvHZLuQeDoU38dGQhM3sPdBprW5svbC1VKVWjepw9uahtBpWmwwyU8XAATAX4JDJHF9UNMBxZ",
  "key27": "4eUWpwUkqdWr6aLyUboZ4zNDShvSc1HM1hPhVXP8aBYmwvFxJCfxhAQfdjnL8X9f7SahXFyU7MeQbHmo2NYX6tqg",
  "key28": "5kkPCsfh7KnjfwPZJEdBstPU2uKgjxTjfFqYSwG4T2wshbjdydBFNW2RxDipJpToqiQ4xW7rpXkgQmwEVsyCmb2k",
  "key29": "4iz1Nb6jKL83HK2M31MtHo2ujpri3tuBJtEPEcf9p6MscT1wkqb5X8RgHQujyVU7BYmhVTWr81y8Qk2r8XvMYQyK",
  "key30": "216TdXdoPsZvqxp2e9A4BfshN5qyvhjZZRF6aZdHac53rLsTqhbAj7ywNi2SsAMpSwrVut1697XjnYyqdaAm9J2t",
  "key31": "51HFVxff6YS3u1vL7ij1tfo5K7fnveRNDpwH5gv8Dy1FMyuZKnHSUKQPsyAG7JJueBdorqdhn4T9oWoMDfD47Azd",
  "key32": "44Y35Afn3TiatDJNxUfrJRCqBzAqC6oDLv9siJrsaNbyhuyfJWSsCN4w1R5z3WWCXAz8geZPetS5rXfYEYJ1Vuvn",
  "key33": "54TDAkeNVr84cLNyQwr9F9811c7ej5S6oNQLKUG37cFVojjJGkUc52mDAwEJa5edAX6RmbVebnjBUwRf9fyDq9YP",
  "key34": "4hnKnU9Tcv3CkY5Zr5uGX71PSKqh5vNSq4WYUL6cACjv6BqmF2tC87t4mrW3Pvdra8gjujhVAJquSxDopFoctpo",
  "key35": "5nf5MFxmcu6RnE4TqvN7esK3xCKA2ddvbnzEuPsFTVojEcf7ZpPHyh9EoB9q1ByELxQTbLsaHkyuD5BiDbqKh21e",
  "key36": "4x2nCFoj6Z1nQYyWffZDeDCbhd2oiAdWvxRvA8SxsBSv978qzqTi4PYNcL2CqAmi9qZKAXQHUWDcppYmctxdYEFC",
  "key37": "jDr516P2fL5DeLYTwzdwVdhJo9YFZCvfvN3hfXkTA7aCvRTjF74eZqedr86j6zvpicFN2DjQ6K8Mz3VFjY97iou",
  "key38": "XCHydxzcoF4TRb9LnRTmJgtBVVoVuccskDKdFMXbX6mS53eGV1EFD7NHchx3PE6K11T559MxRLZUa86Q3jq2G4W",
  "key39": "4FjSXugbt3gMV4FmRvVMP2BB97XQzndeAaS5Ly7hGgLxDmq8q3rbPg1dPtDbx8TjM9kah1Ejj6bR2Ryk4GCkEurz",
  "key40": "5BFEqtUeyS4oQKpCdG2cgbLZ63tVTRtXadPAo62RCdBAzoEzj3MCsozJZXSthms6uFw9mT6pFDZocNW8dc8vD22U",
  "key41": "2n43KJgoXdUgAWo1NP29sJ19KPLZdtuF2eLsNaUbeu4AukBvJiGU1CjUC2zTzZw6ke9Wcqu4uZtErnjx9ymzfUFr",
  "key42": "4BrF8gEbNFdF5E9v6uvRvUh9od7vd2vgYoUAmFe2dgVEK2DCnLMxgLmcrNPqoA5NwJ9McphGAPPCXXNbPeyGacgW",
  "key43": "25YfbboLf24bxjzFqtx4todR1ymMDKGuvdNtcn2qoi3sVmV4Pro986iD3E3Y3nts6FV46evZtnRjBGGx4jkbKVXG",
  "key44": "2PDzRi86K4RZm53otEswzqc84675PVzeMdJK8GZwVrKGhowkmTYAcpW4cC1jHeGboiCTJGX4ztr9NBKwkLMxyGJx"
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

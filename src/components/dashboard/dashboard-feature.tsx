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
    "JCYRmBJePMDrn4aLpXQHSqeFkkF8KMa9cujmcSAFkHyNaRruxo7K2Zor5xmwDrsUPHwsZgqzSGtti5PcNQpKeVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHPwd8W4fL2jNLENkaPKoizy1kEBruNGFR3avkN444QEJmAY3VfMAQc4jdmnc1Vmc2TzMuPvfgWty1YG1W9GLfG",
  "key1": "JMH6htq6sZtv93ML12SPcSBfrF2DxaRutUeGMJoyLSXBie1dMkApLKfA38u55eC9rjEZ9aPW71tVCxkiYi1wZeZ",
  "key2": "4FKGUzYCuELtf5tVVskUcMu4AxuTCcLe93J8ikGvCGnkpcpqqgUbqnspNZ7D4cdmJuqqSNDSqkSuePWN6earrF9w",
  "key3": "rRQoZNhrgVCvcN3NHWuDj2cmxVUiJQ5Ewdbg4unm2NCNFarYyuEpp2VEViAr8VFCdUdVX9mtmUTnd3snAE3sWy9",
  "key4": "53vecQHYLMMmTcJj4Ejifuvd9uy8h1wB7iBjQAG5wNFSsSt48TFRzcAKuvYTzLMEjqqYHPSkbKApqCWsohHTi1d8",
  "key5": "2VjFMUpTMrvTMZPF8WJgLTzabEfgv2BKyJPeqSkZ5YqyFuU33oCtnPJVdWtFEgLPSQhQYUMbfdTzZfuRMp8HddtG",
  "key6": "4J4L6YkPa7QRYpGULBTAwkTAHdVJSba2xFKQbjxKsnrwH2zPWJtpEeB9mcfJxix5M5Et3XwHPnr5DF9zacdpuQUL",
  "key7": "4T8UMR6nFSVjCXHQw3SgaFJiRuQzNHPmaqea9Ds6WtRSbrjpjb9r2K3pLtN5ujHLJLUS4Nj5D9G5uNfc3rFaLejB",
  "key8": "53VzA4dkWg5nki9YSBKQFhgWo4gpNRPAr5jynMXPfXpEvZrwLxEQSJLvgpd6kPwPhxFWrorgUSgnz6nxU4nNqv6y",
  "key9": "4Cg7Z6gYy1EDFiizbPPtpS1mgwU22nBtFRAY9tUe6xg6j14P5mLEdfXCe68c37gWnzYoNHA8cmVQvRLZh1JSJ6mP",
  "key10": "BNZVBqR2Eva5GJiic6WQSy7eR8pZ5oyY4w1mjKnfEvYTJiA2TK3GXZzSyGY7nwoN9YoVNejnsQTApsraXdasg4E",
  "key11": "5t2mrEn8jkmvmiZW7cmTp5vQbmwwgpqrG9YrvZd2dsFKFzHjJevELskxZJCkkDfFq63n3RC6NGZrKV1ehinsP1vt",
  "key12": "2Hm7ksJTdoJZdCgLzpDMssDyh2oAQJkfw4Aca8QbQdL1gfgZNpjSSff9CvkmMhiMkGBsVMZ9bBbFTMpvHqam83bB",
  "key13": "2CgcsLxjssRATocfYxChTbqwp2ki6PQuwH9jPDNPJYpHpeczrKpsd4GANvFZyQJtVVFZLcXz1noQAEJm9UMUadqe",
  "key14": "FBriBXPt8Gf2v8tL2e4jC1kvSXp4BycLKTDiWsjJTfErZFqVftJNBXjLGPWkWFozRDPa38Uea56Ah4CasFDKq21",
  "key15": "5Ss4o1dHkan5jjTiCz3ZDys7aSqtHa55fZNRW43CEfa6PFbCvFqozgsoK6HMKc3huBs4hcLPFHKQ1CYLEQ9SbTv9",
  "key16": "634AKqjGNQN7njBGBB76uextgQBdhbAQVWLxg3aVjfAZVaKs897C4DS4EogUmjRgmg4NDUqp4iFKRSgRdVt3KUVj",
  "key17": "VHz4k3QmMyBwacBunExvF55nZPJrb7n1UmKEA9v4C3XHufUAh3du6fFyqSC71DYwoAfWdDW19QfiTtgCvnWn2TU",
  "key18": "yRvEEPsjUAwqBVY8Sn5t5gJTFbNoJ4ssGgqRjA4US4hTcr3HUcr52Gt6WECdXDo7YJis4CMxFSfk5kHCQzznKNk",
  "key19": "4YEMRCzTsCiGaidUaA4WDkFfg66yX76qujQM8yXboVac9s45HyrjAfvT1xvVaveEWwpyDQAQVFawjyuvcYNUFsUL",
  "key20": "5BgTS9i8A7uiBPrnvDwV5m7u2hVoftTo38ftAC5WzHZA4drD7JumDbELn2oSUewXriqhxvErL6VnG9DMHVMNqksd",
  "key21": "3XdQxTZ41dWjQcG8uZdVpMRu2KUbo2LKwwAKJB1AMSsdhDFExLajTrnbaA9CkMeEsoNnkpKgdumyXJvTEepZC8uV",
  "key22": "fDaow9N5t6nsJNFXbWKy8k5d2RUecCYN2i1y5zeb2B6wBSikdPm1ENwNJM1tyTjoz16KkvdazxLsoLhayHAwVrr",
  "key23": "3SnDyfBYEVZJyMtsRCGhrJe9Tx7tpTzgw2i4ar4isF2RV7LdQjyeoft8Se9xFwgtc3s3SR17Aca1AtvcDH5Xv3qL",
  "key24": "9E91Phbz2coufpdNW4McVTYgsH1zr888JvEPm9NnpNg5hhwt5kRJpupvtKZR4KGw4MUzeWvT8rKy3emw47U3kZf",
  "key25": "2gboiYVSikxgRb2wqUd3TqwkJBVbuLaXXWfwvKcariRSLDUu1vsVKALGvXeABeJ5cS9rQXKXCZzRS5UX8JR9vZNu",
  "key26": "cMqSnViC6hFHr14ckwmDqPtgaThZyV4jwjEHtBLu61DZhhYdkSXvFPqqs93D7vZS6Q2FrArou1gWPvgzRBrNwyB",
  "key27": "3Xvoi1Uo2omoareqWnx2kyHDJ2fchSCFf2dHLFfTT95eYJaKmK91BkCmKa8d2VG79Uv2YPDeCHC1riDsWUFB5Bu7",
  "key28": "utsWZPMRaE1s4jsVMF52rXGAzqLCZDeugemFTFoPpZbgnQW1Z6SaC3YoxTKFo8wC1kSouGAwNaXgFLMwsSn2t89",
  "key29": "4jrxnhiB9VFCtEqwBaqLFA5L7xEZgjGfmkWyiRHyeq1vgYFRMoMTshMtHFucChb9jVsLNHuJBWWvfo8E5VbW5QeH",
  "key30": "3Ckjr2YBKMZjpMRcWMYtFmnNmpEshiTdcAA6DWyUhUkXziDUyiSmtJPdMrhJWWKj7bfJrjWiemJ6jAFJXYsUX7ze",
  "key31": "3b7i1ocYjYYUgiQS2Jj5crZT6EQwUmPQy6hWMUELimcHgjW8LqwbPBkEKyKD5h4oj3sGANeZRt4UFB7XBmwiQvLy",
  "key32": "542ZrT49Y2Xz1yFgWPUm6ryqDanwgkkKS7iLG1Z5ehhDGjz66kRFz9dY9ZNtqE5zCYfX8tV3Ej23fEcMersMcyyw",
  "key33": "Ztgm3mvUQH7UrFVc5zrzhKTMPAsPzFASAW9c7Rwme2RAzZWmWuivYEUuQkgp2riARBvKU6Tvec4PUDXxi2d8Q3C",
  "key34": "2JSY6L57PSRTQaB3QFjwz6ZTeRExA1xrEBFYLBBw6YdzqqYweNmbzyVzpDC4tQv8T43eS7SPrRHhjGu13RAzKoLv",
  "key35": "25urCq8Vbk6NAVJNyyTAaMCf4ChtGzGCXAEidE4qicwJ4Fxa2HNofe6szqXBMdKpQvkgDgZ7Xos9B2oxGVkGswcw",
  "key36": "4AwGMvUBEcNYEnUHtzZ8CLgbfG4SBWmipmba4N8J9Yy32Rcn49gTefxjKnC8dnqw239Eb4CJfTqrF5iV1xjEV8QH",
  "key37": "3nwR72Gh4h8M4p8dWUjbvFcKR9daUos6ZbozrBDakxp6g7djagvDm277YK7rx3nPU4vQ2QB5aDgg6jn3C5hyASHm",
  "key38": "24fFJsi3HK8o7JW7otunmRhbX665sJTaAmUdaC3fsCqKH8LADpPvG3wh3WJDbVMgMNr8nibSKnsx3uCZjWYGUiLf",
  "key39": "3rFv5pW786qE4y8AggP3ieJriALdqfQwZP17SfL9A52B9aSAgotZpV5F36GWWRYoq7JP8tqTCUMr9Yn9JupCG9sz",
  "key40": "3bC6VbUqS486vxy9xyZe7hGQyrMFrALZkoarHLvRoYmnczKn1TJvbk2jBciWmzojH9fyixXYG1PVisoSotifA3J7",
  "key41": "5yJvuzUe6HsuzbCo8NgBKJMZsz9nWxnBZB1VfLa5YCn4UebRooyWLL8eas6N7atVdD9xaAo6uTfEnSEohVbFau7V",
  "key42": "bfeEfAHsYvrp3fWBLSoebHKD2wdWonTntCShU4mJxbuqfRhBGD2k6L2UWaMNgkqin94CFLTCfvmL64313ULc7Yr",
  "key43": "45FRAyAATfv32hpvHQX8UeQZKsJscdcwusTwwdMYrDVr2uCH5j4rVUwsvRjZ6FT4opJUKbeeAfWKmEtsL9KEFtsc",
  "key44": "2YK34ZSCaEaxZcwKzx89XGjvwT414ZwtgRoZ1kX7C1mKjhhWV7WQQg6DxRFAziwREe8D4i2oVvj4JybcdsYJYTBa",
  "key45": "4ZzvvAwn5XFrx7B59BD9xn6i2VknzsRSYyWqCFcaV6VubrA7YMP3L3rbdJtefNezrVSdJnczLh98fLftMth81wxy",
  "key46": "5LUfGEpfXwa4LRq9nQDSLVBVpU4YeqixwJ4GyxpEpJ3jHk39xop9ExA3oGCpHiuSDAEuRN46aSVp3jWyo3MDUdVY"
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

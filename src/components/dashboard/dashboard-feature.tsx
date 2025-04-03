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
    "3Wdwu3GUVukny2xNVN3rj89dxQXfYhXRVCWCv6AAXmnVU2CNugouyALfoFHnweWBj1b2H4ZEQ3o51JsBqVeoPS3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1gEfn5nWk1ivCz4cBN7oS5B92L4kpkzTnHmLoAACeV4uPRnhr67npSvZ7MREhzD5dDqLP9aqi2jQLoTddLCKmQ",
  "key1": "4Tk9DPqgjcfaHmXuVt4w9HcWhzkHerk7iK8AeyodaoPAYeQdFgUGyUxm6hGCJvPTmaXeuRLSHpn9oGUUnPaCPpBX",
  "key2": "25ydbvugV4jN8cF7DT9ZzjgPSRfsoAEfTnn5ibaatWwa9f2v5CuogFynf4q5SUDAUMgpKWBuukeY7HMzVmKt6DcF",
  "key3": "5Wh7AQhGVguHYELMFmnRy1RVhXAA8oxkzr3KnwPAsiLe5SASt99qMz7dcqreUopyNRBKVDTo2BbWYBmy7zogGsYu",
  "key4": "46TsZwWC4AUVsf734PNHUmxXXUiPc4KgAYMz21DPgdUiNeg1J3dFXxiArK6NLxfhgqALbzrFgfnaiMXATaLUn5L9",
  "key5": "3Eup4xoj1tuj8pwWGCBAHoCzyyFjNKyGZam2FZzAwmErboYxyiacctJru9UymC6PvnwaZkrt547YpcSWF5QhcVne",
  "key6": "2dss3T9uCKr8XBbHFS8YobQtjyanwMgkvPAGPJGwuiPRM8RJPTv2tMCZg1dLnLTBY7BFZwpNTWcMTuQijTg7LnHX",
  "key7": "5z8QFrCRnAEBhw7ZXJg3mc4nyM4QPHtErkbC26JThMGB82CFmJSwd5NL4H855htJNtSoiUGYMBsvKJDPJUyoFWWw",
  "key8": "3FwhRxU3akNVxoVyBsacyqr5mknH8T1nAMC5SP5Hn9pBUe7eurjnc7FnMRXWLG1bCN7EQAgcmKifhfXNecAqiWD8",
  "key9": "Qw3bvSuqVQg8pShFUqcKbcZhRfCkMmhBH1TKdRvrgrCwAFNkFXqktLopcwqPJeGHrL2wqJ8DhfTxmE3rZ4LAxkx",
  "key10": "5fPX1Sk7yA4JzKFrTWp1qWzGWWdNy9ynjMWJWjL92mPmo2iLzn8As9vtd5b3oMoTWwcMJ9UzsbyR8nNeCVWvvGPp",
  "key11": "3hTfqj6geMgnHAQB9VWFG6qwNznRtn8NzmM7A4zyafGgiCyV3zeqFUd2SR4Y3t68gz6EZvwfMcGMsrSWMrfJC9nS",
  "key12": "5fFXdkhvPjLmSTUg4NGLoTYvHb1KXzhniYAoY8RcL2bktf68oJV7rz5bFTKpbpMA4qjDH1YrVzNLJGQKkUwoNRXf",
  "key13": "5qNEGFGdHK7U1vtrvsbXrfQzPLvqNbfyDQcP4YX4f3xcZKjEyuD7m82onym5AcDQwdNTm9gYhpbLedCB2EkYqT7R",
  "key14": "5cDfVENrzZk7a738hnMm967onuAhqmiUoQZo687MdwrpDRaQEYrshgNAFtV6eKFg754biLeTwKcNnrVQ1wAWWTNe",
  "key15": "5NPNiydRjakG7aELdYP5KLg95BZRg5ZM39zMjRMLmiTLGAWFWJb3FHnW57wJtcHGKrqQLpCuAPBiBv54kicKPbYa",
  "key16": "55i1mPYHB591JAZBmZbcN3unmFmUbETB3FQRimw6iDZaPEeVn9a9d9Ub6gXzLiXwooFXSYztyuHKoT4DEDbsuQ9D",
  "key17": "Svaunf1qvPBDRPo4ygC655ZTyFupo71sKmGbqf8EjJJ15zH7XrSFhFqN25PJ2ZZNTHdSDacky7qixvgdPnbhzAY",
  "key18": "2MvdBvvdUR3evRErQHNqM1DmydCoQwiER2mAVWYaMMbQnyC5RNXHVpy7itwnAU5kj3y1YNbjnojZjJ4UkauwdNUP",
  "key19": "mpMRSKs6HB2TicWGhRqxFG1YWcQGFQ9C9y85Gnd4CrJQpjiaSvGFChnrHLxcbR8NrP7xZBGW9eQqGm9ytKjX9Bv",
  "key20": "4EQdmnP1pxnVuqvKR4TzQJrv4vkoTkqiYhm8HaZ7VbjqsB1FA95sbZMaXmcYQ2LSAfLnjhLHfwHYpA2uS6brbkXS",
  "key21": "3ahKwkqJXRrW93zvBmCcUCprQoUkqQfTk4QymMzQsGHqyft55CPD3FBLEEzhquqBYPYRFwrLYduToYgDo3c5u1Y2",
  "key22": "5FJsmpsQPEybgSrF8vnND1T7CZkFaXikYn2yGCbiVt6QLMRc5gFAiUS7kSnPMyk3vBmUcnySjQcnfzJqQ1wPTv6L",
  "key23": "5v5Kf6VBMkt8Gd8nrrBCDHsf63Uc5GgN5dgz5vatebA8dGjZHPCBhYDfnZ8AhBe19pc2HXL7LBmEiQQECTgN6e5e",
  "key24": "5fXeXncdbkRFrTUm8bUn1ExttRMK1F57RYm8hzjE6hbHEy8W3HDsFwpQX3nUCWSvzeUE9KE91LpitRE2is7uCw1Z",
  "key25": "4CbdEXbNUVdCf1pR3Q2baP1zvpw3GrmuSBjTSBiA8CQTuavFyrB5iiJU6ttfv9agyV6vVrv3scFUunp7Xd8qEMxT",
  "key26": "3V2pVGEkuLso8bY82UMjiv8K1UnMinXR1P9Tr3UqJfqgBTPdtGJ5roj1aLneRdCN4ZdF7fcNT1a1qUxHkfUa7g3k",
  "key27": "mdkijrf6vCXRoFqu4LzY7Cabpm5KmmbY9x8Aa6tEx3o4cXV1zzZtLTWTxFCCRBpQHXPJwQZaYQSwDmzZ6FuXokk",
  "key28": "21gyyMepJq2p9bJ1KNGr957KpDCBWcRwmNx7F8W56PYE4Q7qEzz8ydZgsDj6FnRatEjJZzYZ3axiJAuLfqmtrGC7",
  "key29": "442AJtmGDbuz5W2pTVQ7vwVVzNy1y4rzbJRbokdLfHCNAheevaW3YohJeTNxuJB5LB2fkWChxRaRtgUjUEskk7Yk",
  "key30": "4HfwNEJsjetrDNFjXTCxA7y6yMyxZQA2USXgHpsRKQj3z7Ug3cU45Vo93JgKNiViAQfLFaVMG6bA7WQ2ecMSfjWy",
  "key31": "2n8ueJRv1Wzq3GxE6yqfy7tK9dQgGXAmhWa5AkGU4EdDvjkuQTe3pvBUnn1zNRMZkuAQrKvkR8AQSnp3TWR2U4e9",
  "key32": "3CFMXhtZwMrqRWYnz1Jp8Yz1GUQ2ZiL5TFzxrwnbTkuPqoACigyJR5vQDAJYHFL7N1FoCaNPwH3mpxeEfdYXUn8E",
  "key33": "35qsa5e4WP2rKnsCifiYy8XYqoVXXG5yZKaV4AWiSsrcUJqi6P88ACwr8LM96zQ7MEbMCCKjMx9VAm1r7KrDvyYg",
  "key34": "5FcrbF7HkumxAU35gqbA4KTXdVf6gdV1JAuCudhDa791rJgXLnz1FMjQk5MjTLF1boTJsSJpgvMWGuLjUWi7JSwb",
  "key35": "3bzZf382J7k6yeSHER4Rdo5WHoJ1HQDtYd3ABXW5Yw1FbbHZHD5vKthm2FcaDrwVXkDTfamEZG1PyzmuUgbS4AkZ",
  "key36": "31CNB6kdNy6GEuVqHHmRvoTvSvMnXEH4CZ2i9srRzna4fkCQs7uwQK3C6dCQCyhVj8ecjPGwGwuoshT7ZdAuqDjd",
  "key37": "3UzHtBhE3btJNUxYPTWdj8qMADAbTwfH5MiwXouCdgNCg8F881Y2DvySSCApdyhjVxg3eutPHeWdLe8WYPw8MtdE",
  "key38": "5J2WvxjgHxNquM4azb15pBUzPGqM8yA63mFWx7FAssJZfh6gYERujVicMKwYUgsCzi6U4ui8oz8sQUC27rAvQe9H",
  "key39": "3iVJ5FzEveFYMrS8tnJfWTMX5TDBAEDm6hqNKbeUtqiEYdgrUiDEU99i5M886BYS7L3hokpR9dZDqVFN1HTfspmN",
  "key40": "2RdotTwiSfX8TjKt136oHNqJeh1v33YQrqTLGPir1ohfV5nXjPfkqDFMC85WT816x15ifrWVJDJuH1ZvqBr5Mm1P",
  "key41": "59DWunZWwXZ1mb5q3ivXcaonTz65Hy77TVvxwD6hTyKwWJ8nquNKAuDmnohRKqv4fy9PzTMrXDvP45N29QEz7Fvk",
  "key42": "311JuMLswoLbSyqQxNXCQ5jGfXiagQmT9AjzQfBVsEKb2DmYkraQu6jtHZnCH2sNij1dV4z1Bt4LbZQ1k7rzKrsj",
  "key43": "3xf1KqmrUr97sH5ZgBgwCmTGGx8eqS1BqKkerxfcf2W5ZS5r76yt8XRKkR5PdQjg7pcxyxTRb6VjoJvMD9M2Bra",
  "key44": "2oQFNJVeX9S8vP5VWXU8Fmfh3GCaaRTFyusqFrduz3LghUwGy59vJVCN2MKcUrXoG3wTXMj1kBBPX6fsVzsN1fz8",
  "key45": "47UH6tR1wQfhKDJyGCfnYmDmh75nsNxf4RDathN9UCTDewsY8RjdSLHm8uHEir9JKxnydus2hNE8JvQSXDXKSyui",
  "key46": "2RykoCPVdhhLvN2crWhJdPjKnu1GqBSonhK8r6phpqwfTqSE6iwGK9NdW2nKePPsa7bya4SFYEkpeFeb7mzrD1ij",
  "key47": "26bQCmdgnRwSyKHg5unBB4k7iJNgUMZfySU5oywP5vz1GK8GUrKuKHyHLyAzKXigWcAGC9nQ2CcDTToZbPn18HsT",
  "key48": "1CDpXMEHu9WHzio3HGbZzyM5BfmfxEipTwMR4gVqLLhfZo86u24bEFEQ5287DY8BuZ3y1e74xqRowtoq5JpRJki",
  "key49": "4HoTE5H9qneV1BzCpUFm2dLu4aw6WkCQYCyUWU2edHDtNt9sfAXqDhdHMS6KVK3TJTnHkbwAh4kpxBF5SHY5K9wZ"
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

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
    "34qz61UUHiJyHmWHEhYjNpQEUoyj7irBjWf5Jw7b7qAXVazqMUHs2hxH2Cmdjzxwtjk6onjTGzuW6aoDBA76chFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8p3NbJHPnAmjvzz75QKWJzz1dvgKyNAqrc2ZjbT1qpN3tTDk83u873XEf2ajD82HFzvGQkCPkjEbH9m57uFoGo",
  "key1": "2XknJ67YYAcvEBjcsxqZHRfvW6mDw82fYL1Qb9urhcX7JyKoiCs3G8XbCeGxDn12R5Y3BPEphqJ28hCT6rrGYXKv",
  "key2": "3WQaR3cfBo6tJqaujhb7SpPJzfEkPr6uvKYNCxbVCwrUkNu7BigH3whSWmRhUCoJA2nUF4feX2eNWaDSGykgtG1g",
  "key3": "48QccgpKTymVUnZaQAmZK8J55iyn9AV8NoYsoUqBxebWFzUaArZFvwqHgStMQ6G2TuZ1ot5fL32efHK9Z9xYb4zj",
  "key4": "gw5hKnrna3xAxok5jM3BM3r1b6JVtCDbXDN2YVXfkohySkCTN5okgbHwXcNtSAanPoUcSrfcNXzo78xQfBDFAHE",
  "key5": "58JXpNX4s2gZkGNq2GmGAyBP9N61Ewvv3KTrpgraLGoY633MpopwsdtpFdKChib2hVLP5REdaWkJtWJzD5wtoXo5",
  "key6": "4vhThPbuec2dwwSqUxux5zYgtfL69VCDhEeUpzM2b5aHViE2ZBCUxuh3PceePRTxRip3NhqNS78boqB8qfob7D93",
  "key7": "4KvjPi39tzRispfFKGSDBXLRaFAUVrEQ5xVRhs33atpayZcBH6itLx1iNVP5CBf9FRifvVgkSYQ1Bhn9YAejemhU",
  "key8": "2F9AvuN9thnMnFvPQJqsthwdSbYjW6NRYQvxrpeukhMHF9nBdwwfDkNn7J8JmU2j1o7CBXucHfzhns97zkcpqYeZ",
  "key9": "1GhwLKarE5t7skWEtNzyG7SSRKz8yn4uq8j4BnykhYCKEFio29ywQ6txdoinqUd9rWtPQD9YCTubMYgwK1Kcefp",
  "key10": "3p3WGvnWkrf6aJPBSRkPVyxvZJzD9wsb3tCXjKaupYPuTiQARB7Mg7eX2B2wn3MeXshcQHSVEr8TscUhXkpUe6zt",
  "key11": "2qM25QemKbaUSV1pTQ7pEhro2TNQva8kWuojTTS8VtcbscG8QFrP25PjxLnnq2bcPseVNkJSE3A4SCsLWQNCny1J",
  "key12": "5xp4vnJyM6XhqWD5LT6m9PGprGYSEVAfmT7nvhnadhwRU4TKuPevmLzKfNsiEz7DyTY1x63tobhL7h4bLXK9nAnT",
  "key13": "3yKGmYUsHaJmxDdxHnnc1MZQ3gwJuN6yJ5hEa89Vi66SvBNc542j4ZfrRZAmjvrvbHUZhV1gDAYyEQCUtNXtGPzg",
  "key14": "5MWsLjnNxEhs6jf47skytiWqcftiupWMgJpAkdt79e5UNDPzPtUAnnjTmshQyKYvZ8KYCb1HCcsh39wkGU7NJsFS",
  "key15": "2j4VhkK6NdERYEnhSagptnBn9nQt7PQkbaTdmeVpX68EfTwbwAcvubDMY1AGYMWyZaGfsoMChtmJp8Ju1cjzc7v4",
  "key16": "pQrki2qFxb6nsdFPucLWyJr6ikFM5unLf1a99XSdXrGQKqFdxjqj33PoDyDutQygmn4hSRbDoASznbctPsfRWnZ",
  "key17": "PAtYkXyE8Z2qecyQzLqTBfYxsZykeQtmgQj96ZChKNd9uhTLLGb1NCLDPhDpbDXt7KjLbYEEfbtMocdK9HK8ziC",
  "key18": "4Ji4GdGt47PJCeh8RTWX2EsXbvYjtfwsdgHBhuWcpLie4K8oq3NTVupqXjvRhEnsYRJHTaEpR9vzJaaieQ3jZUoK",
  "key19": "39e6GMo5GobXUpZtwMPoeuRssji38V27Tsnyq7wgCNxKtUvTPpPg768rmFr4hZ7qmnm8KGmvyRqLn7VmnekpYpEd",
  "key20": "5bMz6BLMBwvh4oAQocKsZbfacwdQJ3w5ggbCVcHwKCDyyR2U3xttvcPhKXrkpe52syH2g4XvTbYeU3RNAEVxPGaR",
  "key21": "3NZWMS2ez5cw1RGTgPD8cBWjofYpPEwNH5FXyUtCKBkBUBAPLuQH8AFuXfee8QmiZwrdjwK2aCY53yiXL92TPE4j",
  "key22": "3LmxEBBm6C4pNaSAP3LtXB5KEK3kMt9MsC631CJW31GsawNNd18Nmg41CFdEwhSJzJ745uUhaMnKdCC9dXi2ReuV",
  "key23": "2QkFGjt2ACPAYRNTskAtmC6XJG6ARWKApmJf7e17cfStkkxwj3qvrDvf5KiXCfsvC1n7h8MpJ1hKRHkAg9QF1FYz",
  "key24": "5MAGypudFDZ6ebFwdMVrrTyyaME1AGcyt2rNKcZ2gXQHKAtedG9xy7TiD23TnFmMnk2zZKnhRSPeP8BW4nEwDV2a",
  "key25": "5hpSmXawcs48uSqS38vjYXLrfgYcsCYSc6H1A7YfZoYiQCBsMMW581jtknnvqmu8GyC4oD65eqPf9oweTD2bFe9U",
  "key26": "4VPrkkQZ8FWSZhEVuT2wPFykMDxeC19WV2DZ1ABUvx1xjMHq9MzGZ6p8My67PYz4erVpheGouC2tAevSGt6796R",
  "key27": "37y5mbSh9Z2JGfYb5fxcpBX27kKtQANUwy82azGPqNhQc1qiTkez2gLZmKdTAsUxi2fXVjKvENUgpj44hxNvLWef",
  "key28": "4dDdmnrDMVnjdLwXBLcR3jaLucuTQBrBUhfZz3Mp6jZ7VC2Uv4wtdevw4NwsUe6yARrUKp2MvXhx9M6QAiXLVT7P",
  "key29": "41KCxfAGJsaYdokpB12GGnYoooxjbG4LDx6rFcLgS9urHNeL1VdSS2FAK5yvXbH2L7VUrejfguF46b3JXDk8sEFV",
  "key30": "47Ff4Jj2t6vAYM5UzVYgV8RbCGaUEVT61fFvUs15nmHGEu5yTXMdUBJ4gdEPMz1FD6fSy2HVvvu2xTZEAGqGZ7Xk",
  "key31": "4Bb134f3wGnab6idm1LefPLbg88N7wq8FAWvJ5bhKpSSy5k6YGm9ht2M5UmLFAyJ89y6jRixBNWQZ1rT78eyJChr",
  "key32": "oCvQz8pgzKdzpoKNmjN5ZYiEnLjDLVHxDVQfrUQfyrHiFGkESHFogfhc1nK12VZmZ3JnCvubDVG2KNwqZNehVVf",
  "key33": "51E1AEBt6fzYkBEBHteoLtAt498vD764JE1diL2toJphVDuM2AfBHnJf8GnL7ghNBQd2wVdLWmpwnVJhCitcMcYL",
  "key34": "5YbZrXg4KKmrCUvcggCg5nn2cjwStso1jYhE8vtgDbMezWn5NJ99G8VMgnD4iNJQu3RyHYfJrAxWBjz1L3RtudT3",
  "key35": "2ew2STqemYMFL96rSTp3nruG7d3PNpNHV3yffqUJsYTXKEBudGULuWjFt8MhPh38SVp7PRKHuLq1PTmPDuRowsuF",
  "key36": "3xbkP3t7qQS1e1P5izXodTTnX5C45JXhUjkXki5oH86HAMVFQi4eZEZDVY4UB78HWADDo3hUbvCqkdfaaRtDN1X9",
  "key37": "CpB81Ys64FnFGWZ9agNtXgwFyht6jZgzstPTjVKJ7G9jqGfXSDLgQq1at78Pgd3jQ7YDXXN6sFbgU2Sx1eWYjvh",
  "key38": "4CrHVvRE1F22AENxGsB781KcyRwutTdofVrxs9EoJ2qMp5eif8k3LDjiYYKNcWWBzpQJ7U4fo19Q1nMzeHpDWoeE",
  "key39": "4YaF4zFxNvJux8UyTeZHPxUfSnaC8amSbYE9CNn7JVTGK2gj3jTJR6rwgi9bikTSiH9Ke3ysNzzzAkL1dpk9UZ61",
  "key40": "Gfme7tbfGyUEtFBz1PKE39iTLpfE5YjVJQZMvtdvD74TzWSXVNudBkQxGLxpUbyeDKZeW1RBje2kSNv7jTkHuyR",
  "key41": "5pDKr86kbjjwEW5panc9URD78Xm1eMiW1tN5yjehKaf2PckJWbXQPuCRFv4FqtqidxeUxAfDmDnrwGmCYZiscRF4",
  "key42": "59c9hofqzC6xqPTw5dtFjKDEhtjw7NCQzQf9f3XB674tjGSG264pXhLQ9hUrYZmLSSftTgGkDs5wqMhJmuUiBaCB",
  "key43": "3hpE3PruwzX9NQsAy6HpY1FqRAWegfveX2wWMQAQbjec7N59i3uzWRS1x4MZUauaFCVefmvxidf5eLRkmx8hnLt3",
  "key44": "47Bg7rzLAoJ9PaceAzAGFhb9zjWHzQvCqWT6Skk4WYdyEGCJ7jEWUqvwbHVhZ5fR3ik5ZMfZH5X9AoNLxQbdhbet",
  "key45": "2gAttzQ7oUxKUgUTQJ5hfqbPgRMoFcLB3wX2CYBgGvn5n6KMn7s5JniTh41uxvGDvr1q3YFVnF5nodGqo4awstGt",
  "key46": "4CS8Ggr9VeBXCNRXKHniUrXKpdEJ2AAkPoUcMwWLQd9PyR9VcvW8JeA7gHEPKxjRhhNpVLubsVFHNJsVQoJ1cncg",
  "key47": "3Ai4LGkFmpGgEFzKfEGGVvkHpkTW8Rmq743XFqTiVfZXEnFETYgJCB6u1kc3hWn3S8XBYarvfQAXxCskA236aitE"
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

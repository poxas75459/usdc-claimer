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
    "MnMaseQj99rrFR1MwV38NwpfRJ9rQQdGYHT4SfNA5UvTfC4daxCFL53SuXxgKakJDgah8evwxgZLqzRQrLfUQnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cEvG4eBJJUyZ7yGoapA3sf3Dredt2ntx3tnCm9bY7kJAbhm4WdTrEw9xQpfCfSUam6gykBjrKBVe6LwApgefeLd",
  "key1": "33hY9umfPFUq65pR9H3kTg8p3h6C3JM31VAgyn9KRywjXo8Xqi7bgcV6Su6o97TqCFTZbh15HHw2FhatdRxzerE",
  "key2": "36ZGP4Pea4vdqaJCoYxdNs3k7jw8iQ3mYrv6BinaTRCMmngyU2kRo3oDVgWDsL2VuciEqbAoUeBcntwHv9h62Npc",
  "key3": "5wtfwQEWb1p7AqQAqy2mLUkTrvuydY9Tb63BzzWDqkrm1mVpk7pC7wbr7AD2nsxq4Ru73TjHzxNozqBUSKJWfoN2",
  "key4": "2rztpXuoVgZBxzXDapLyc2x6ke45WJovJC45jgih7pZPVgy8Ddz9LHToZex2GMfYvKmxRZ7dak1vHcy6UHdGMjij",
  "key5": "4sGMd5gBZm4XVniugRvkNA8GMCS8hqPY369b8mGvofQB51gbyNJe5HYP97ji9f1ERT3hQjJmeU1iDD6baKKb7HX2",
  "key6": "4jsptCPJDEpDpiuPjoyhYwk6FJ4DoyEqo6zGnR2iUjJrqPU8wc3rAiHBBhLfVSLCUgFY3wg9XMcPtSjx3xH6tgtR",
  "key7": "3JCC9yodq5XK1zWM44QnWvUAXBBjFJhU3UkaoXMZdipEJqkWijjBxpxHnVdGxr3RkELTAFD3DMcUe4siFYxzGK63",
  "key8": "4SdutkFHhoWdFntmtcpEH3f7ayYguu3SYXpxvurLVbz27rgHPAESqJpqzBRpoKG4Bqh2XjBBEdc95i6pQwPu4KjS",
  "key9": "379m36BmhE3nDsTatpUCS8SJ1Tk6i5f3Dux2nzqNSPo1A3h6Ekz7y2XYoBcy3pbRiAUv4NA6XgBrtc1xMcTGZFdH",
  "key10": "2dHPAj4cN7TMDTAcWAsqh9HcxEjgPZRFpqnj6eN2QHkNRP5NJZXysKjqm31ovmRRABr2Fii9ChDXyDnjj23VSG3d",
  "key11": "3cgjEzmqyGnHSorhinW8ujAjLStVjkEWsuqMi5b8CaNHMJ27rVGrfMEXQSy74qMxFxoi2QVeJ7PD3AfQDrsx8cYS",
  "key12": "4GtpnMENRjNGTfgEALZDWShd3RkY396nw87tTVaRqRx6MsqNWwTKeQe5WFDvBENtQ6fJXjxx5nDR8kGo3Q7okwmQ",
  "key13": "stKn9cmqYMZLQAqcXuyivrcGBXedRTdfdTpQnQGNCkGRbJKvtLWoLWz2dwsQRvVdxdy9CQoS3h1pHi2fbLT6bMG",
  "key14": "3gckXX4kefKy8r1v7yJ7iYoQtRa4KGYwCScdBhB4nxzHnzXYeawUmt8zFGcMWiv1g9XhU2RtfogkBnXU2vu6CbMS",
  "key15": "252w48jj65G8neo9eYA2vRKVM4oXHYSUBAtXa1vVSpY6Nn3mjbPDvdXdbt7tE8LTnen1ookoJsj5gb63XowAmW7z",
  "key16": "4mJNim7XrZYTpwaRoh7HsCGqYNxdE3NpvSMe77g5Mnbr7xiKi3wQTq6ciucDd26H1zm6X11qKpzuYjG8ASg6uVzo",
  "key17": "MmH94iZiXRnAZDrADSm2ssAnkDtmvhtcPig2umvNZP4kbKkAJn9CTz3uKbJ7CbWpcSneF6Qp76DiTzWsgX17wza",
  "key18": "54tktdTXR9N2KNwvhEjYqnfBq6ayzLzPojgE3TPUkHhwL69vbDWvf34v2PABcpX2qiRR1LPpuXFEcwGSDdLrHeBN",
  "key19": "5H32zFwci8hz6xgUKqDEmymkptTsv3Lt7wFPTG8x6aWmBKQmgDYTuEjV3hJ7cupRueUFSnYk4LZFvRxouXG2aAag",
  "key20": "4osmVXDjFXrWA3qjEtWoPQwrzzHLL5k511VYpEKz8KHRwN3U7YvhRmMjTYo3kXE2W5fJYYPv8CeKyzC9dz9EbA7G",
  "key21": "2FaqzTZZzYH4JD3L2VzaqSFuUM7QbTNYipP4aTmuMn15DUHUQFEdrAMYYi1TK2RnEFX59Y8AVcfzWfZxxKvGx2D3",
  "key22": "ZsWK7594awEPffMDCLMJ9ZGFqAv1SQ69fbUP62ipbYShD7FzxvY9StZ7nzm9C58d9CyGXZA7sSnR3gT7Yk29in9",
  "key23": "3Z4GEsQ7MLJRTu4z5ktsKdDKdMpR6ThN5nCsdZGbhb9NMCSw25bfUew4imBVvNtTQdDcLMVLtXWHk2ynMzdVbYQR",
  "key24": "4bzUpNPYZHGECUAYS68GvUGHjhArdJbPUYf7MJFLyn6PgbEarSQK1T1YqME1FFBRh1tPais79hPGrbM6xqwKoxBU",
  "key25": "2G8Pe9dD9D6JvRcvyUzsk4SJpaFrFkxnC2Mo4m3VAPpmMgQVg21aoccyx2yDNrCNauxT8QcoeWkDApY36rkWwQNp",
  "key26": "yDvVKVAN4PepBxpBPimVLwGVRdew5wfN7Qyja3USGsXFA2GuCXrbKbvKq9fV84djjX2fzGVmU93XBqEtcAin2op"
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

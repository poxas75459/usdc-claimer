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
    "4WuBbUfr2bkao1iDV3Hn1rZKx6iioRpEU8YVYjzusPMHjjH6XtyFoRgitcdgXbihuanjp3E6NLV4iF92kMqqpri8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHvVThqtGQEzr5wxpo1UNFJvCEQpZt97wZH64m3p2Md6x8HhjNRUR9mnyuM8d51EwLYLGMniqQsHrv1qR5XKMm9",
  "key1": "2G3tM21ZsxD56fGiwRL86RaAArXh9EK9jQisP2aqc6XWf5u2Q1MpYDMe8GTLfCDUSLqZq12AJDYS1xEU7qekzKFt",
  "key2": "2kB2VzgQXDPV8QK3r9gYnVgrnBNicudym6vmn3R6hT8fjajvr4YvucfhMJ4BvtaAMdo3hYNGK2RXzUBMWRM5VDdC",
  "key3": "57ap5wWe7MtrTxj3zBb9Pd3bphbAr1fWHpvs3YH2m6FxC69tuNopTjKwzBYcSJ7nHJwW2qMrw4PGiSBPqmDQvUtS",
  "key4": "5rM7ec2zbCP72MqcoVg8srKrt4FHoVwgeG7WNX5A2jHtiefVXXtxUL1qKRtEowyYEdVU4VK771yTYMoFMqZMdWZA",
  "key5": "nkfZKCcXuymGS7Uaon5EHJajgTu3XytH5KZcBeVoFB7HDYVqbphRo6QCoqbTX9u2BJCtHUNaQAXgY57GtcxMGpU",
  "key6": "4tgA1T9W7mCD6Skq4HXwo9jx9MPvhVAyssH5qBG6MPMUM4wZHiaRqzAYECvrAdwUmE3JyaTmWFDr8k8PbUzvF51a",
  "key7": "47xLWv7iuhMJJuL74Rcookg1cQKZNxwsv7CAANvxtoixAVYrKSctQHohhf1SjPEstNGuG6fpi57iyiRTRxA59ALw",
  "key8": "2H2FAt7ZpyNxYKwQRyVsSdHoSwYU3LZ54zYNpRiMYSfTEgwXm7Zt3B7DtdKxHxxVP2qEFiP5fhbRrscNoi78fBaW",
  "key9": "pnJfPQYiiPimhTEbtvc2DR4947ygP3RjtguVB3k62ZfFKxGZNyw3Rv5BXDH8NCsdJFjU3X84tUScfNNUsHEJ4zu",
  "key10": "uodbcX5oWssZx1ZeUULwJxmYdjhVjYcA8z9CNgumjCZab1kqcn4awsk3uFnZdfnfVQ4Md9suGTgduiG5Tyrmw4q",
  "key11": "4VHLQMatdBq3VYamf1xvHmk1uE2nbNh7HfRM7MDCcgtE8er1utadLgkLkTRNj6AFWxb72gYpafwdZ79u426nDSCS",
  "key12": "3c2Z85KKVT5Tsde83W2LPCe8o4SgWqJwC1YAdEyf7AX1rENAgbVbEYdqZWVrzETUHbP4QhJonHAZc8kkD6Dbo9fB",
  "key13": "fqi2dDGoRjsTHMUGNU5h24CpRYAfKT5cGfUVqw6oaTZ6eF2yP9FaAGaCDAic5Tk42VFKp5UnebgB2qAKTtHnzV8",
  "key14": "4Jx4iQss57a5kJm3rpJn24g2wbryAA34McU16WKxeuUPfMtU9kkc8hB5RYAPizVg3ZB7U1BvEAUWYSzgQeA2DNTR",
  "key15": "2AB3ooAABkHxxwZM8DhHMrLCpmu9AgfYUNkPdSKXo6c14iDLNZbavv8up2gHopyuJCQMHfPTvvQtKedLcvRDipB5",
  "key16": "2pkXEH3w3DjeBVP7dRidK5GqtD384f9z5RJB2otmE5gVjhvFWW14ohGm4D7sXN3fz7ct7NLYTXU38np9HbUDfDQb",
  "key17": "34W1NArGPWVAxDt1PSMLvirmF7WB5v51XHV4xUSunvejG5FRqbEH5DKChQ4jSnWZ4YWChfzsWS2SYmeZB8cXuvQ5",
  "key18": "3yWa4EUfZw2fXXBQrCReKskjs1xdHNB8QJK9G417dVeqt4dCcN5XYrWjLtB7L5QEY1u8gwzsL6Je7UYE7VXYTkr1",
  "key19": "51zqi69UNHhyFoK2a9e1QN2X13vCuvCA8g282pev8AZCuwdrCjkY1WTLWY5Y5cRCKwCyqtbnjZU8LGjdRinCJNH",
  "key20": "472E3QGYwG7adPHjFJLVbhi7Gc6Hnsy6ZiAMvQ467947nHPGAm8njkLB3g3cwoKJRfFHkBGmtVhGrf1MB6npSDs3",
  "key21": "P1cjJLimqT24xj4kRdHs7xXFdwmb9RVbJSGEu2noEPNPEjebB71SQWGn1dsP5FJqjUz2bR92cv3ZkzoxNAmHiLX",
  "key22": "3HX2KAPskT1mCVk1R8RfdzeCugj1XBEfZ79kCedEaYi68qqX5Lh7ZgG3XkEwQCxN9oxRMjus8ahWujKceDFtysXW",
  "key23": "4qm14Y8uhXMeeRJMDpQewUQgXkviKHnd2gnd9eVzpBFkb8EKu225jbF2RbDkDU3gaVM8bX3Kre7w7TFPNGri2HZj",
  "key24": "5oycvBAM2sh1Tq2ho8PEj6mrUiBjed71TAx9DZZZMRRqAqiNBFwwiUfoL7VWyw1Wjtj1f2hkrqQLgRwFN8GXRWx7",
  "key25": "4he277tybsiXhKezPvY2H5DA4ojViGyxpGm5aur8Vzsi52e4MrvJN1taGDXdGRB7risV2NYxntMmSdF1pM4r5K7t",
  "key26": "MgRdCkbAwewTFtg4JmXoMqGYbPfD3iQ1SXWcgfKPe7D6eJvEF9kcyHKGL6ZhUVhWiYyQfVb1cQ8p9MGuY8eUHm1",
  "key27": "5hK7K8TnxNS67yBZzPeSZByMRd5BxHjDBq1ZqgTaBemake5UominPWpHSHqTGs3MdVa8k7mQiLKwSKDfdCh4A5ne",
  "key28": "2VuAoVonptn7hX5PBofTfmPVpWCkrYWi9S5vmuvBmjoiTucVVha1LWZP8RX88A5iqCJH9PiQWCvfGjVo5RNRtN4n",
  "key29": "318edX34st3jygrHrAdgRvDJoMYvw492EZjuzg5APKMYy41hbXuastfywpK7uSLP9yhPof4HYFXgpixGgncyoTao",
  "key30": "4A78tXvWZXg3ay5TzzVHqXVDX4rCV21ijWp1kJKPq1qVZXUTiqMnoi1qunDtFTgyeHk3Y3FYVDV3PiVysp3sE7eB",
  "key31": "31Bmjc8E5DFxJgBzoDYaGFcPuB4AXpGcrkLtr6866JgmfEXaLuzQHChZs4r72S2zVLLFhJxmGE37n5u1REW2nfHL",
  "key32": "4dVWyzxHFhGr7YzsFCToXUcnHJZN4JZKhBunDgEEjfTd7EcVFa4wmNJrFXMkdCNAS96bM7hsoLyMzeDHKkvP4raJ",
  "key33": "24b42wHrg9cAjfTFWvqvHQDj83tUb2MfueX6Dq8W9qG6xjGYox6npsxcHLuCDKRLq5duVJ4aQdjasKb7wzboqaJt",
  "key34": "3ZjDLpU5Nba11eZBTcehGE7pRqU8GRAAzHC2Bh6cEs3v6gbfjAArv8KPb35j4o3YkJfRWMh39r9ASFwznuJptUf1",
  "key35": "NPpU5CkS7Ww9SUDZDBm43mMkG3fG1Z8RiWdiVW8MsZKUh2v6j5YRriKcSrSRs8nJgTCBfuXvxjuo4FXRsTBuTzZ",
  "key36": "4iqDWsBRLbGuQEQ8Rj7ZFm7URU3kFSTofp3fBKM9tBHWpZ4FjZRBQHnkkshwNtZYDddkX5dhZF6F8kpMLSxPByav",
  "key37": "4r9ZsnkV9PJCh9Bwfa4tmos9CXPzhVnDaNYfqDqGmiCHUqKn7shbKRJmwZwvhmmhz4XPeASNhb18UgbybbE5Ss69",
  "key38": "2nyzQjNxPos9Wu9ixEFuQYrCMFUoSCuAHTvbNqnpHr9xca2XvnHN6CojHKV1C7pcHNJ7hB47EpaNJXqKegMLixRM",
  "key39": "4kUWezavw8g2EXKrSgzx9PXDMFFs891v6jwJp7VEWKayXrtf5WYAMhub36Qco96AUAjSjDnHQoSeKFA1gVLeqm8n",
  "key40": "Nux8iB3SRe6DExrPoRhdvpZsVHpcck1hZM4YqhDp7KE9yZ9y8emRGxBNn38g8ChhSP69NeW1SEeLCFS7qoDDwST",
  "key41": "2FxjqP2MJX9RTEevTu1HzV9CqL18cTjCGk1CXPj9yGWF44iUMU1hQxBDnpSnHe1G2Hrg5bmvRC84vSqTFNpiFHvH"
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

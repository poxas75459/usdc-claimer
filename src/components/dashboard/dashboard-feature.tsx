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
    "2jT2jFpGbUBwe3wXE7KYaR2t6ouYWYQUPyHtA2UMW5iK2DrGgrjxv9zkL71HFfoVgMECJasqDacxn7K9DsfW2o8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AbrjtvRdYLb7FewFbJL5YUkvpkcgFUpKuQfinEawsaT7u1fjjGLuWYia2ivBisD3sykLmAbTkEcRDVLwdJUBbuw",
  "key1": "4iiY5s2ffD1E56h5Sqdmccz9ZoYHoPWFGYXf3x1aHbJ63TsG2o9Ge6oZQMJmfnAWfNEcVXqKohch78BrELWZRUuN",
  "key2": "3cufZZhgHHYevPRUcD5u8B95x6Ah8x6nL2nXy2egEfXb2rc8AUvPrFy7MdwDaQ7GwyqAWZWUw8xt8C5EGevXQJhS",
  "key3": "3CpnmbzGucKjmn8csSNoduhq74ZXof1Kav2zyBpEpwCfJ8XMRt4J582XPszpPTbXAXUdPPy2Etx2nNAny4esednf",
  "key4": "597XoDi7YUPiVV8XSUFntenU2xg83LFJJ59GN2h8Ljgi5LhJiGfauZ8hHFWByRW69kqtmpA1BqNPAUj7sxs3vt94",
  "key5": "5MSkZK7oeQjMWj6dXmHK7xC6V1N58kAGW3bb3GtDm5pxqgZ6MHu2icJA5nF1MDmi975wYE6UcqDegnGoDxrtC1pr",
  "key6": "5MsdyGwBc7w3bpPkKigf6QjvjZyrZoywe4AJpy2K7UVg2P2FxrCVjMdRNKNc1GWp7dLcABMJ3pLdWg1iafiusXPu",
  "key7": "3chRfCzhJXCV41Wqx4HnKDxZEqLCGVLjcJmsobLWGLEV9zAjgqz9rHbGGjdXQpr69crNaJwQsDoHyVwMvZqxq8Mn",
  "key8": "5ZPaHCQ6P6MLBAsDEXLxnxA6bqvGhEHcAyQwC2diQUXWX5zrDj6U6b3iJNyZSDVhDLN5HaP7QNg9Wxuu3qyQD3hU",
  "key9": "WWFv2jkwBFsSZEYpNmwEHd4E8fFdEmXj6cr9eT5kaP2Cf9dfa2hua1ZdM1EY9uc2K6LugZYxQmTWjamUPTBER4S",
  "key10": "pKezxft6JjqsmhHuncYF6nbaX8cQnwUtkvy4TQUG7J5Aq1AhndaAsRt6vPX7N5aJJrcDgCz6ba9ACLop73jKpMz",
  "key11": "5aeVXYZk4K5GN7K9AStgCWD1m4XMvdrVMeDMygjtX4nJ9mLXEqLk82pa8LDT8J1C2NUMpvQKifLMhpAEhqw1Jb9Z",
  "key12": "3XDraycqpVfekMZDGAvZtmesMTivapow8AGuBfHamENnQgiYHiCm8s73ZYTN2FVGg7t3iWAgYYVSKGdXJUsWZ5Je",
  "key13": "4bn9JKJVJmRpQbWR5gjDvPDNqJYhWAphk4uTXHebT4Eat81cHm5P8qxSiqkrgM9Qnt9QS5eG72B2TZ9k7NLbCBsx",
  "key14": "36vicGisETwDZ3Jd3UUioUeLTqkc4pYjGmVaDsxo6J5qYTp8BaSFNhKkSsDdTh33UTHs6XtLLAaP4hko4ZHME5pi",
  "key15": "5tqQmEswLfhqXTDAiLKikGwcaGpTsoWwXojE5LggXsXJo36miB9kvhZamx1Q7aMjS8tf85CJQi1e6ev8CppF8QXB",
  "key16": "3rFtmFGBdYJDShecDasqHZaASDLswr56MB4FF9J9eyHNfdPPyoPp8dHyLRXgfFSSWDwNZL2ZMccKFzUTRpUAmupo",
  "key17": "3gbB5AaMcgQtadMJqYGNLwp5mPhT3MSeiqCZDabtt2xERHSbBceM5tEm8ynQggn4oxsa2f2GgbgSGDCZP2QVMnGL",
  "key18": "4Hn6iFmscM5tv9kCDNJiFfNeYfGCPcsdaCzCoBfScy2siNCGFxMcgNezM4WvPJnbmxCsip7sXHQsfRT52RRdhTxb",
  "key19": "3qUfUGc9frUUtJoNvnLUNVEJinTiBqaf9LBLqm58Hcv4fXTiZoQND6yBeneva8szkadbwNooivHFCNeGXdZFRBwf",
  "key20": "jUTBqmV4SB9GR3GLoSPuw3DibjefrR4YX72j3kBicenDdLFx3wcnkF9nMkSzAa8crTfHZZGbUVp2VDsFhbWBMmm",
  "key21": "3wWcmChYDFkRNTfBAcTMqUVa5Agr8S1XryM9Dc788wjSphoQ9YgsnjbJRbza16y95hGdWYUPWg3aVEeg3pUGTakd",
  "key22": "28CjG1kwUG3SvJBTJyLTbpRVcg5QVMxWz3Qixm9BSjb4aAvt79e2sq8Lrbh5PCPgCczKPVwKWuckacVDsauGQJqF",
  "key23": "2wiYvbn69JfZweKKnL4sEKxujswzjPZwr7F19LwAqEgfHhSfxdc67XmdDpQUBc6a3zsT8KJMCajKuSRCZjD937os",
  "key24": "42iz6o1HxjZhBY2zmYMSQjjYAf9bjUkQn7pDKQ6qs2a3XduJLdwMrTmZnzSrLHcv8T5f91ykjsp5njKguU3Ns9Qa",
  "key25": "2fTMrSFcnW2sXjgnzk6GGci6fhTUaDFVGvf6zh62KvwvYqB49mLLUq9JpwxJ9UfhiDQUMcacpPcJK5bx6gv5u8RS",
  "key26": "5YBqKFrcEadeBjwKTzqrcLBXTqYdGWgmAvTp9UcQbfLFjT6mV5PxwB7Po4k3zzc4LPoH661yQoMCPqKwacnZzzWX",
  "key27": "3wHKUMVC4f1p2cvS4Bpg7GbcsHubUnyKFgUMYHH7eCowRn9oUwtJw4PBmdVBxdbdxzHTu49Pgp9def91WVdc33E9",
  "key28": "r7KRpHF6ySi6c1m56jkoWnkJ2eGLx2poyb7Yb2AzAQDff2ni5nJoRvPR9q9wf1vdXiq6hDqXybTsYjqRwaH2v2G",
  "key29": "D815jNm1gdGjjjJVw1H3ffVyD7qu2gcHBHogALinzBzmPu3WzaJJZnrjaA2BiKoqzZB7wtdyMgdU4MAUjCVH9To",
  "key30": "58W2zttaCztHzzx6VjXoPGxdi6bk4w26wUrEjA9syjAdg3pJTtP5okKcSqUtXwdSwY7NWpd4tUGbYfwhR33pvEzz",
  "key31": "3haAWDFRw868hhjYVQKGbmP6PgR3GJRwUJuA3NywCQMa2MAgyZkoXH15bR3NgaZLSHu2zp3nZDfXzaAiYwyVdcyG",
  "key32": "22ytRvJAGQh41z258Axpboxh8BewjGZgRpQrr8eNXn4nH298pupWNYUcZSKT2365aB78G8ncyP5UQJfxz5p6zkgH",
  "key33": "oajpuJKDHKDutL37e3DUw3S9waC6RaDryUrgiGKE6P2XxbHfSvyzsp6bz4maQahd9wWUFBoEbZwYsE6JX9EwVv4",
  "key34": "3qJDPmubTnftdHvjaUAHRmReEqjWuWLkKHVKWHPFDrqoNpAXn5JU2m6yCica47e9ty3yQDZRNxGLMGmPVXFMKeiF",
  "key35": "2uYErPvEvQM5zKHTPngyHjT5g9bYXtEgWD1yf6MAvqt9NXP3P26w7tzDCJFBkDDiAVPonAwyTyurwFPK9cVJWRpB",
  "key36": "65sxefaSrVukAP6rBu6zihLAsim9ZB4NEwQz4FcF8TgAQQ9r8YYvPEVHhEEqG4HACcEv5B5t22gausKSFucKfvLB",
  "key37": "4GmicsQFueKVkFP3Qq1tGMwra9cmqWWazB9D2ftbg24jAY98Kin4upPSRssLvZT8cSZogiD82qeqycpWhZNDknN2",
  "key38": "3FqvHjBGj41h3uyfb7gsDYsJH5fqKiWaPRgeJaxAZJoxy3Ky3PNA4JpmWz7LWeG3bZPsKfy39ttzY3ui4xJUjZL4",
  "key39": "4BGqraUKWo1kMSFt41vQwy2y7bsAuHn9Cb5W66K4PrEps252JfeWSDboNfCXGaW9SzsHdYXEsj1VU9brr7a8xjD8",
  "key40": "48WTUDRwsSqXyk7khMjYQ5jqKd9ZQnwYyJM7qD7rbveELohzPjftHzNQMCSKQH7PnFAJUjjcdiodBUPbjuKxXD5c",
  "key41": "cPhsiqSMMAQLexc1hLai7HuuDgkLHnGqqfqpETjHL8a3oEcQrU5roVuESzR2NkMaaKTdYUBg6njeBTvvshHxrzU",
  "key42": "4WDPifWzUTyssSBozJnh8rQdoW2tHuz77bkTGPBZZzVvHRdqVQggE1sTSdSx3iqpRzBiCeQpB1tcJAcZqJqEBdfy",
  "key43": "5drjQFXYbeW5z6DK32Z4TTcjgdbymEW76pow6RLNocNRafmzkcbfknvBsqcgn98MxznYuxUoL8o3f4ikVUaspXgJ",
  "key44": "BAWETdncAtXxNKcSBTva5QypSWm5f8k1FqR3MkGLgAVLZsww9Jw7NGxzunq5w1mYVDnPr8w8SKkkwg8RhyUFRuf"
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

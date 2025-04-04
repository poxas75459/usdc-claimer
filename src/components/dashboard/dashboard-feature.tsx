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
    "2PsDRRMzshqwKSMuDqDkEgPLJbqdkJFfHPas7rzbdRV3qKq8dvJ9WuHqYjmb4NJk22L9MffGUKtKyH6P7MH7mg3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeVT8wu8aUbyBt3zuNjrQwrLQQgk5P9vEYCeoGpg3qjp872v5R4vBTbfM7rRad9KoEV6DBk8AYxxtfJLpDCH9Xe",
  "key1": "huDteZJ6pQS4JJ4yjrjnm8UE7vP4mw8ZcYU6bhdBsgzWHtqRfiZhP3NvhELGRDqKPk8QLDSSLCipvgrSXLnwRyB",
  "key2": "3ks96iuUdfp3a7Ska8Uwt2e9cUFA6w4toDi4xpCpjo3aBYYbj9jxs75HKWeZMZSJ6Vd4DUYw7nrwYRHyBhZqiSwP",
  "key3": "24HkwbzvL2MygPdCRgi3rxnKc8oD9o22cLHQHhkMR2cEQpmbgxkqkLnknjiuY6Fb6TCB93bFqT7aEAq1j4bYP1zj",
  "key4": "RYahiLTb32uupWGsadeFsEpNFono8kxPZNipWExSywMtSUdXYvoCyiJM26cJZCoux94Aqh4p8XdxvRNuyjsSe2g",
  "key5": "42mDKKSYAHrKKrPP96gixgZD1G5yjRSWQknJuEHEw8avyXZvtNotkMDfx98KCBFRzTkngVKZd9fepiY79KAZzYmR",
  "key6": "5SZhB2pK8g8WbjLA9C4GBeAB4AFWhMpMCdFerZtcRRhF8Qkb1q1337pVP9SABeiYwN1fAQhoNT3RERwEg8ezhXYi",
  "key7": "5PePYQ7P6MG5fwAaBUkDX1EthpxnqFHSkjvfRkxDe2wEB4mFnkYPN8bxW4cTYNJvjbcpkrtiM9wmf51DNAUss9yL",
  "key8": "3jJzQpj69957VjNnhL7i8bQuXFYcRy8H1NFY4Uhqf75G668h6DDd1NDvCdnjE7VtuPpJMJjxzZGXDA6LZUVLrqH7",
  "key9": "1kVQwiHArjntWjKMo6aT4nkwPk9oJbBfHRSbsfbzURkLxTttxbhtDssmCcUNxwc72RzGurFwF4xUgR1K7VoB5Zf",
  "key10": "66N6UJFXMc1W98CGp6nxaKMeDrqrmJd1w1zbQ5Fbz75aBygvVG3eYx6ZcFFus6cCT3wWSnHKqWUL9xQpsRUdL6DF",
  "key11": "2zaTWyvpH6UeiPQBaNzsgBigqGTZw9SeXEXVyEzJhMFCpLuhvkcH1L7DYW3pUkZ8mhGRscjhgLnQyE9DfPUE88rX",
  "key12": "4CJgdzDfznoTgfdyrkWL7gTNkWZQKD6ed1JcdVFN3iM7qwD3Y3wJUy8FhVujRLq8ukbNsrpdCLruewNY3F2YKHvT",
  "key13": "2hbnuZVsgiWHUbSNfu2UryuzKcYQUiWoD5Wrv9kLYqkDGUJuCyT864Pk7RppmfSasKQZHH58937dWndhQTxif7CA",
  "key14": "LRRnWmBW2KfHhvDQgRAWXkTL7bnxy7XDuvicQZ6py5wU8ihd6nBkQgB7iBSNqcA6oqqRTmnxy39Kpk9gkfgGaiu",
  "key15": "9MrW9xE3pSDBcnBF2NKGt6Kw2f6EwdYmWFXtQ4Ha3bBW5P65tCn3CRhZuSMRDfnuHhxdvcqHzWZo5Bdss8AEsDf",
  "key16": "5w13eQ23P6JFoUapAC9C75RiDrgTcrbCwxNdTMxUbWcDUiNxGtLEbWFjNQ6HECdgycETXGLXVF2eosWwhYazCaD1",
  "key17": "2v3JF2C2DeMAhQxWXcCqUL8zdA83BbQhLkkyRKVFZjeTDiqRXrQL7TUgZvoJTWYCjXmnBQVF7qJMgxPQfzqk2ntS",
  "key18": "2tXQK5rUoNk3Vp1xyeWA9i8MRppAGFZRf5b1DjMz9yjdXD4PzGMw5ax9ZGaPEpcHfpDkWEZBGFWWd4D5SJo8jZoL",
  "key19": "67eGjyCtGLChxCdFN43CpBbdKLscSGZKCkrNi7sixiPz8cHmGNdNVdNmyF9KKpBRUU65R5KRWiKp1zMJey3KQFzv",
  "key20": "3JJmkKzXUbSXaYWEmKk24jrPTaSQxpmmk7NCGBycz7UT3BbwaeNNsUb46hgVX6eCfSieX1TESRaD1cbnAEjSHaF3",
  "key21": "4NREgvZmhKWsiVCNui1wafFhAMqxXWty4BEoBk1yi7XzA6cx3wAn2863W1on2D3HjgT3bx3X9GJBp6d6CuAYEAi4",
  "key22": "RhNaUVEYT8E7oBHYnX6ajNJ8vc3Hre1Z21EsXhsCzPfBEBSxiuS9JrTvR63Z78gxJk6wxjejPvWvR44ZbtnVYZ9",
  "key23": "3FT2MoRCriqiD3XUHRaKAAsP2jXkDoNr19iWQuDg7DGd9mNdbEKY1oTEdgxhEm17aonwAXxV4QkBWZnVujYqKBkt",
  "key24": "4SQMESyCApqeyo9SFqqMwc5uB3unNxJJTY2nhV6UKL7jTYbHteREtZcYjchdA6cTUrC91JXS4zuJoGnf7LzGkGCH",
  "key25": "2NJffZrb9h4ATBTiZocY7J9Z4gCUQ3cm4SZpnaqH6ViLjTt5wq7cfPMZhqb2kEuxuRBRVdDEZdSRZ8enWUEMRnan",
  "key26": "4V6aaq3KsWHTrFEELTyBzCbfYhAMGYdoJb7NpP5orJPGwtayDEyKuo1y1PLi21zVd6FwQ5c21tpYctjxQ3e4Yu6C",
  "key27": "4E39JJdDhJNXPX88sWsLUhvGi34M8ofP7javcyvXoVPtNFFkQWE8yk75uCza8sigxyFGfqSBdxFXZKYBfPKkMgjR",
  "key28": "33XSx65ou8rfvroF1EieJmLagzpF4Q9ccbicrD77zUZk8Wdemn7dwkx6pPjER4fq9SLFu5oH9NpUeka1ndbPzmni",
  "key29": "3H8F8WdVx1Eq1eqR5irtUsgWKcxkBFjbFSjDbWBx81ySv3ewmfGfKJP7Px2Tx57kYmJGQLm3L8HVBPGEPf7i7cdf",
  "key30": "2x6yUqf1vD5FgiVmaXsZXLEjQnTjmqokcUsJLXwadgMNdF1GPc3n4vjN2wJCxeAv5duezifHp71QTd7V231MfG6C",
  "key31": "42SYGfdD8fNEVk7UwLdbX5bAiYt2nG8yuMSs7NtPu4JirPjmGEMcbWP27jYnAuRjuzdDFcQasUwYbpj4eTaYf5hT",
  "key32": "3uvqVDogc9PoZEa3htijiZwKZiLJwDgWij6sUV6c8PXkL6WAytympwg4aV6xcytJot5SL8B7L7zWHTbYjbKYvUnL",
  "key33": "4wvVbiiKHLRiuy6c3KVS8RYY2XoTkFDYXkpoAMWT1b98hUSadTUYmAUh5psyjHzPwChFehZgJvLHKCDgj812u4Ch",
  "key34": "AMMsnjdhwzLJt6eRc9PxsBKPkyYASf9uj4m4w5YYuQbHHF7SNSf31uGqXiktHGrY2ipa5urcWDAXWSdxuLkCEHX",
  "key35": "4LbnVVtPdTtwMv98gQ6tEtoeznTg8vxgLovyNekHFwCzcdMtsP8BSJ3FW6ZqoC561vHByvkvMs4Ri2bo7NJu8KmC",
  "key36": "4xgpNxi1GaA4F21kwAZUvCGKRtW52R3i2B99yfpnEuAHEHL811XrLDQW46p7Riwb6hgiSoQRzM5hRPer3iFNriiR",
  "key37": "5XttkhWvtBgcLi715gA2HFvvy833pc31E7hqmVoRzf34S6cB3fgvFhAFVgBfvkoihD5mnd3AnmqyQ5JyRLso8zAn",
  "key38": "4mmqUDxTVHYQc58i7q1D8wy5o6c9jsHETmuDeZSqEMtKeicvXk3iEDp1Rgx2tDwSRKRHJVA4ddPJzWrGTiPQDiey",
  "key39": "ZR2gsSFxKSkg7TSMA4oCgDx3k9AENfPuNPRnrULLcLs3usgW7fmYK66DXK9RT9M58X7Tds1anJqvjVcnaRYmFBq",
  "key40": "3kMWR6frCfZUFHb9g1mFPMjksc3HumqcLzUE3kEcfMDD6uqXPqyrZXmQmuvXkUwQLRon8ZA4Esb6QtmthLPJ8fZn",
  "key41": "4phi7HHinHH8Qvg85KXaEd84VGxZ8whjgfvcQ6Zs5bpBwNy33ixLowmGHSUkjDc7R9GgdF6obP1cvx1fxeW7tJDU",
  "key42": "4gK5aHaGFqfK3ZULYjJFAfnHbAdJvDHUywvzrrka1A1bvnBVvBD5auyWev4ei4S4QGLVLPYeopg6RJmEnfzVVJDM",
  "key43": "5NLymw4huRxE9uTPSQpenuS7bbe8i6xwzBCFp6NfJ4hhd4jc1Y16MgHXckxvQYb76xwZ6yuivbCJNznZcdudpK1b",
  "key44": "gGLqtM9kDFsXFQrW1KtzYZWJ2iqaQ62HNQbjzRQi4g8ACaSEzbdhxgTqR1sPSzZibfjaxzmWDapcqsuZZQEgPvk"
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

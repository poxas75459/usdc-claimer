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
    "4PRxAV7GLp235NzBYprqK4fskNc2NcDQF5YAQhToDWk3j9Y7desrkdwmaBo5xZM2RQXCLXvV9JoVpWPi5TXmx672"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAjULkmaNhhk5MX2A1cskdfoJnaYYYYvMvjoXi87MJJ8JTV1TVFPAShTkiFfxsWfTe3rzEEYcGZsi5td7237auV",
  "key1": "1JfzGLkrFoeBVCuz8mmwPrSGepcMRjjS17G2xMtPZFdZDJdaPXpvZDZ2hX1ec9qBhtQEJZp57cdBzhYBZfFatvh",
  "key2": "59bxat4aaHuPa3kQK1RcMXMyqNLc9n98Ez27g7oSLDB3dRjgqsnVks5A3RYgJst4rzdkknQMks7Lj2jvbPxe7iYY",
  "key3": "3xjLgftS6cntei9bZ5kkQHAXYAkhyjtLUNSJ6jFqSCYUMWBhH9YjjYDa1swEvrvtVUJM5DCjK8WUnHPKRs3NSyB4",
  "key4": "3iJSUAsvSeEzCRiRjFH2EFjgSbv7N8yL88BcevwBbSEhKRfnKHVgX22udvytsqe14vmDd7ShJBGnNiaW1aBopcSy",
  "key5": "42qKWgZYGrgNLtCUEqvuMBoLdvmSp47AyCVvpHYqVK9bPk8MoyiYKvFVfcLLksgP8eRYbwqK557cLeHwdC1ZA5Qd",
  "key6": "XJSkqsyFC5MmCuL1NpSV7QwPMCshxaW5thBPQH2EMYw7vYMseaWBVRoqrcccmMMSQ6SziHMUPXqwPcJKfip9jcW",
  "key7": "2enR8cAi14DpChwyjDGdPUTj9Dmtw6h8mLimWk2A6eRg3ubo9wdJmrVqsbLyY34Mcj3oUKPygwvGx4my4w3suo3R",
  "key8": "2UGEtKTuheACZf4JZHLSXa7Jxi9BzQzdNcPmwJP9QAA7zNXXmGayfnft8Te6VfzTfpZDjJhakCLVV5LRwGz5zD5p",
  "key9": "2VGEuJKs6XCi9Kw7aZEfCuD4xTpTwxx79wutoPfJS1sYUakoiL2b3w2GXuvP3oBXsHE7fLWZ1vwtxzvaEcv2oV4V",
  "key10": "2aAn8Ss2yjJCU9qVmBu1TfL5YNQijZpfz9HwGfqeZKgo2QaTtEyEEMmRd4CcJ2h8FRkG4NtTtDERMRXcyDkXas6h",
  "key11": "59GFEbJ6nxcNsqW5TUQ2x1XsD4ddY74sHiXoKcgMTVA2uQjfYkTsNXzAMWXxEqWPXFbpQGvpEt2VPiu3PvvGhXg5",
  "key12": "2GNfC1NkWJiomuibtpgtDC8pjsrKiU39XrBo9496LQhxobg25meC4GEMKdFTc5fyjCKg2ncRxz6fqqVjJYy8A6QN",
  "key13": "2hAVBzx3KfKWDCfUihb9KCxZsm1qpAF7dP2UMG32svBvt526AfYvU855V2BTeEaKreXbpZnz1PiLCturDjMTXeLB",
  "key14": "3Xsmenc9rTw1ZijfCFWUkWcyBPKyjNJR9NSxqx7j6Q3xZCGAFLxpLG97GpusqewnL111Ct6HJz5czPNaZnprnK6w",
  "key15": "4vtJZjrSTNPu3bnzf21z8xNDZUF1jqbMCY68cQoayMqRCrrAmuuGdnC3YYA8PkXJACV7r7DWhrR4qY3ufje2gGu2",
  "key16": "WbovSN9XKynJ4yJNJaxQ6ENCTq2rJJYUxGGYpLspqJ9mLC9QvB96DdYQd1uvnm66D1vwpcdJ8DRuUoiAVUexozH",
  "key17": "3f9KVjyX7S4ZixfRkmxGuy72NJnmqJBK2RbznfA1awbqNpBVX174Qp4Q4UNigy9tWEDtqUsxLeGxhQQLXBvTHC6Q",
  "key18": "54J2WTXfcg64AqFpDm4b4cTzmfwbG4Ad6nWJi58BSbLGv817sMWZXczEK937hNdwRWjseio6zLxHVdpscYJytNPv",
  "key19": "64nzYqwJeVo5ibHHBdy8tSe5NdGUFKMLftxnju6V6qRXFefBaF4sqajAWsbKJmc2GTrD757ezx52jcjkE67VUeJi",
  "key20": "exF5BLTZLj9Y3AHaqD14BmQ52eZkf6JTXe2YRqVjMJi8VuBZBeCiGcTDaw3AH4H4dqWwbbfkRU4XEdMne652e8b",
  "key21": "37UXmsB4UzNSu9AWGPvLZtAG1fipqibSjo5tiN2WCiWfRhiitAyWJE7HYQHF4ZUgTzmfJuiM3ERZsAPvxGLL6Mi2",
  "key22": "A4K1MbSdw6mWFQnTQt65zX5Kjp4HRprzryJcgk49cfvrFNuohgaBuZwnzfZtub2VvcWRN3m7JWSh7bbte9k5jYv",
  "key23": "5HQ8XrYqhntvbhZnt3QaZv925zj4wJTo9JXfMnm5thurgFjjwSmAWMMp2vpEKHkJvJrcJsPJtEDsYUmkimhheVQt",
  "key24": "31vi2dyy2K4NMQfS7ccypg7wke4qQ1oqpFdkXcNEfYPUZqzqETqrjyvoDe4gVbxDb8tGj4JR7d4TMqD8Kq5m9XaX",
  "key25": "3THv5X8ZMgT28pR93kNEMuzJ5RBEKzzpK3RH6NJFrrrnsHYoyAymDyTpekXnWiFdLZ6YGYkm1ERdf3m9YzaumC1g",
  "key26": "44SHoey9TukxmtoztWS9fD4uqA83EgCkimrAsEsD9nqxukm2n3FtJMcyp3aX5JbyBsn5Dmx7yBZnYdegmm8PQ8gM",
  "key27": "2ES2Mvs9wy7g18PEZaG1jpEYKNqoDhJH1wMgAn8VrbQCfV2JzWMUyXmdb4j5NYDMT4oeLC3eQ68u17gMCypjHoeS",
  "key28": "57mzFsdMzc752Mx1VmXkCEKVko8n557wwoqzDj2upF8iqeo4iMKkZS38MF7aWefADKM58MjEBH3HhU8FUsneWc6M",
  "key29": "3mgdmHDrkCTpxwNzJo6Ry8AsdonwcpPndGoZJ5p7Wm2Nb49zLefHh9QXLAvtrhtXhf7uGRfSsMCkBLwan3wegcz9",
  "key30": "2tTGokS7wLaxa5j22UtnT1WLUNGNjzB8KbPyaWv27AZTSDVYGJ3bevNxr2m5oYzkrXnN6ikxafwwVMMbopTbe1zj",
  "key31": "3oEVz2A9KfuvCc5FMtarNJbYggX2ekCbvLS3sV7RKfwDL17VhDcr1wwry22YdDj4UFCGJow8iJbkB2X9wLhB4CMb",
  "key32": "4neJRwbiegRCy9zAdoFXZW1axdvcbKCmucAKp5ck4b86USXLzsoQiEUcwQuyHTd2VneTLP4F6F2axZ5EAq6w1mPr",
  "key33": "DZYSCQsDw4EJNKVXLRdKGnyvFpTN16Nkja1MDbj212tJxQjGRWasGQvdBH2FmZQmTKFHCjPno849cTpQkBG6job",
  "key34": "4AoEUfTYbDfxYmTnNRuVBgvY9RYKaHj3qZ84r6niiSuq7Caoxx2jao1mwWdVeRFtbWeKcer4i6wAd5RKMxvZUEJX",
  "key35": "3PuMi1Fopqzddvf4Bo1Msyf4vUHFSuJLW1MZ3NzUfyV5iJjAQSdnrQqQuyCdkvP1GxJerCwX5Q1b4PV7qtvQBEQc",
  "key36": "3KviZrWKKJTm6yRWQ7JMpj8LLfgkAgPwATcCxBz3nShGboNGBaDr6Mu2jA7nHFeuEs8yd9TfiVbwgSjjzpyiNQwk",
  "key37": "55eeG2c51oTszco4D5tkk2VYBx6odLDf4M6LQoY65tpYRx3LbYTAwgJBpwUWgge3VQtzWNK746EzqGhYTXqXwXoZ",
  "key38": "4S5NeiiLXBo4gVcJboVT9bCGbKjyPFe3JjBHSmq2u2kxHgb3eDeLTV2SyBa6xnVyfUMp54yEifCa2rdpoky4Mmh9",
  "key39": "2zdWDPLwAtardM3aNN2mcXcy9YSxFYp86KpYoidorRWMLSYVS88S1sXqNUVVaVGPdzPnS1kYQqQ1nhRNq4gpG44L"
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

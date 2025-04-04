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
    "2JdWTLz3qJBavzmf48q91ktbm9ETF2QUcTZcXJgbft8ACLKg8HoZdjWVFRQc85MW6mzaHP3S6PrzBMzEbkZZVQnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wgSbVFbDs7wvqtEXTeUTTh8XsAEhgCfKePUP5uKbmKX1EaVMc3s7fzacfMnndjYWU2FstcgPt1djJ9YgzGSUgy9",
  "key1": "5rUoTTvg3PWuSgePR9cYKUAFLtEF6uYfcRR44pwo5zfwnVvQwVLuPMELzqLWD7y15nLvgJQUSQA4yQzF4d5FvxTb",
  "key2": "bxkAk4u6TE7oNaLaTxEzWUMyBSnwcs785NP1DQmatfVnkyX1vLyTffMDT5ndyaCVJuM3XnizFLE4iosDBuJR93g",
  "key3": "33x5EkfXiUJqF4zXYzN3vLQ5ez3BH8toCMKobzsodWSUqrxp4cqb32CHHYdfPAVp6puKzAjuWDKhWraP46NQRgR6",
  "key4": "3nyZisDFJSMaHKAVzRxjcHbvEqGgLmYsbKzGsN6TmvM3BNzpNHTB1TNxAon83Px5vv5btVzPmFsMzu9uZxF5TRXf",
  "key5": "ssyphBZSTPvr1SFgH4AdCh4iE8bQNA6ixhgKyBmMGjMBiePFbbVfzeBdQKYSQYMfA4pesE5tWox9vEsuNh1X8Ys",
  "key6": "5NF8GugmVSje5E2fQYzyC41Gt4wuQKNZqrkURw7nxRA4AMM9t3SUpFx67SoD3FVrAmgtfGXP3ykQ7axsiyN94hSk",
  "key7": "4CStBWdhRFRMbqjfD5Na4JThTLPmLmUaVmRGppQn7xyFZXrpQXYzRiXFTNw2jqwPR9JWRz84hFEbpY7phoCRiYbY",
  "key8": "2KPudf6bN71kLT6uF3QcDCgTkj6Jj91d9v73MNjFbzx6A2Ec7fj4ffgSz4b173fHeYrdaGf7s8PvGEs1TAoNDe6Z",
  "key9": "3rxcGY2zoNM8zMxVoHM4eXFwKDC16f94bAXYjP9PGrgs3pez2e71c5a3KJXuUWLAXHuCdYyDUfbRmUr1HF4HhgVx",
  "key10": "3bECXY6ur6oYn5Ls3WriDr4kRfKuE897qsXEb1AKyXTpRkAESWdptN3tXo4XK3JmDyYnr4MgJ6LZ1Qbtk2jG7QCc",
  "key11": "3bg6Jto66hxuWH8b3N9gR7jui6VJ4cXGxK6NjhcLEuSnjCx495MPuBXsQoJwcvwZbQwNXJDzsH3zWpS5LHZTjoxe",
  "key12": "62dq8cfpFdjdS1jDk9WKYZ7PZSjes9sAVQf6kGVYPHiz9QJiLDUsTd2abpKviqV7BZL6AKUzuVNm8aDM6UVcWXfc",
  "key13": "5VajmGoZy1rqnBDrVjNEj7ZJ3doMvjHudB2nhFDDhKbzKT4jnSZSybJn9JAjFro253jC2iSrRuqTf7PQcp6bTBud",
  "key14": "4YgFgPFLb8Fpe2uYiDi7Fsk3GnGKCraz4oEm56hVtyUF44NQHRCr5gaGvtDGUfuTR7ZKwipY4n8cdshFHZ96asXw",
  "key15": "5JR3VStBVmBLvoFRJXhzsfu9TMFQ1DcLZE6DGLS1UpZ4nz3AoSD6R3RqDnrsbCxXTX2i1xwAd6vpUL2zxFbv3QvN",
  "key16": "5UbT7vwv7NorvB5UtudAaubaRUzjLLLLfKjhio6zLrvHwMdxqm7hkEFZ1efpJACbzEjGVKsqcnwk1RKsxs3VL2YF",
  "key17": "rkSFV5hUrWmaApwofxbFcDL8o29gXbZSkm9AfQ8iUJocA5Hs3TqDcsqpZFJ2e1ynoZb4bohHrUDgzJE7PHMrv6K",
  "key18": "iktoKAnfDUMofrtGhyEfEcTYAC2L4kdGyS1DZBjjjB8PCT6nNP7NmWFaWwGwx5XZuHvG2f3qpP1cs8uW8wPSYKW",
  "key19": "5kZvtys8RqGf7fZDR5VyGvapKKqfTuuGB6WFGNHgihMkS15qLbBhV6YpCzcYVRdLEWqyTTtzJE9yvD2BhD9ELSYG",
  "key20": "5rMpZWkDuxjc98qWz7zfkqfUgTfUS4M7e8aLnR1G57EVNpLe2WWpvXSKREDz7Xn7vApGHieZdfHFnQNQyGp9UopK",
  "key21": "EdVLm6vucqXxiwmND1WDNDmECJbqRYHoCdiruLYnHGfBDVawsGUi1H7SfBM8DP61kFpJ5fzZLj7vYnkA6NHmX2z",
  "key22": "4ihv2mKaNLj1VktdcKh8Sch9BF6haSryxvLikUZfVVDnwYRN8X639gjJTuJnA1pFtuktKNkWT4ZvoNoD6DFvtHe6",
  "key23": "2Ju4NDnqGA2xBcDjbPMvFNj88t9S9jrabkL3V7mwWEca7xsXf4hRwkgk6Z3d1acWznVfXwFPXEPoKwYbZykUD5MZ",
  "key24": "3YjrJVHEuKLRCdBzaiaVz1busmYTDVXC8MiHwJgSPo6mExTZpEW55vG7stvbwgYt2BxXtsUn4omBydUiiq3CRtb2",
  "key25": "5osRV2h1QPeCtpasWeEFpA54dPpYqgk8qSv27nhKCwnQiNiMEUUcsZEFHUwrEo3X1WNGBXtLdMVWCesqaWR3hM98",
  "key26": "4gKWCUeC7qpifNMUoHbqAfPetfdrvep52hieNKHvR5y24EdazWh9EnR5N7o2HkehjDgci5ZraCL6m7GWGcyzJQY6",
  "key27": "4JKSyqSEVKKt4mPTTBrHzQAb1frLne95SwUxhduAWoF4odEXPZJdnTZ8v6SokR7E1zc8LpHs2akFfcYVyGBaGve5"
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

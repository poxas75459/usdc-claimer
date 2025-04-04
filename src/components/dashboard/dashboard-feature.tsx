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
    "6MttKWY9aG7Uaao38Uxr16CKtWgW3rLG2n644Uu9egLL2etFWc9D22u5vrYRzdnqf3ZHjfW2nGcQ6bKKhG2dTAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TpyTWbDZBXzCTtEdaiHWK1rqMhNdrVJqxCsGjqZMMRPMxcKAd4PtHCCgTpuknLfffGXbE1kALxX6MWqrvSrYN9T",
  "key1": "2AKyGuF3EUAaeMe87wyr7kgncePyJqzTHqX3xq6sfQqjZfhdFBHDQXYzQ8HzdQTVYEHBeZ1cz5QN6NWZrzhC36qp",
  "key2": "JzDNJetDGi4EiBB3hK3AeebfAjzC6bdKJCpanxAcGstYQFNTnj4HPSEG8sQogVCD5x5DAVgkJnL3vRzPiBgBbTn",
  "key3": "38iYK349hLTquxMjdr4XrxF6nFF1KsqeFTfr29eYup43t6y2MiqpYSsPRyymGWBsiDj5ZSjrh2BwchypoyRwgzVe",
  "key4": "5yRP7pbtsJXFzugdKfDxDnaadkXCtPZma3grrFoXyyf2XenTWUasfj6THb3G1E3qe4WYwXHovcRhoFKmBTQ8kHoG",
  "key5": "4GSNGJHB1DLwQy1hAT2GXovFTTEUgC9sAfGXqUj55vM4mULwnCHynMkU4GUuZhzV7eZxF1u8t7yyZMZBwJkS3mJF",
  "key6": "vjgvFz1K9H7oWu8suqLwrvfNMAeDeXQ8uLccVUzVhsjbd1S1YZYCVYHCpVYbsKXAgDXKyDUX5PYLTEs1gHGxmCD",
  "key7": "BD1zipAtWLVGnfTJXvXnAZFbCZuTqgCNJ4BMc6tVdZuVF6SMKp326a5doKxHrotJohWwebzoY86SBMboCft4abn",
  "key8": "5JF1NRhnYwCCdm3Xnt3Ae8drTEHzS9FV3wJ6DGYTKzcuoxbC2kpUcY2bkumvYcJu6NYJEecAVM8Q3kPDRdzPiKCB",
  "key9": "2vwn1PJ66oy134SVqqEoam2fNgEvitdtB7cQRYsak4HDpxxdazFT8qs9RYw1o4cJYGBypXwkpB4nvKdrspD2Q2HE",
  "key10": "3QzkoTzfvjVAXmRBwGrwvFzGRszSkY6ixQkEtqQseyVm1yXcTnFb4kYvL3qtmowFLpXC2GQjq9FdUs6Pw7XxrJ4Z",
  "key11": "2eQuXmVv3XhxmQKUCYLdQFvhAZpjCRWUzgiHfYQahA7dwaCGUU1qkuiVzmRup8CWj1twigiFwRnM4XEfKjrcKBSz",
  "key12": "28AKhcsgYE1kV7VhD5AUTkWL9akgabKS29vMXU23xd8CGmNCKv7rJKi1cSbh1TZourffRqgpENieZ7qs9R1tJGb3",
  "key13": "3Aaxoc5oULxRNY9VXL6YhtTRqYqFnKzYPSc2AUAnLhTBKvY2nqisHBoToTXyyoXbUfpkH88gSivLYHS1zxnJLwow",
  "key14": "4EA116z86EFT3FKwFL7xSZi4ba3m5eE7TgM2CPT7jVYadFX3VJZPDYnhNujPhL8yCFHU3NRv7xfw2axWezcp1bS9",
  "key15": "2gwgJqsLpjfAshkfX1T9bWTeGqgGTckBcUVcbQDfWPvD1HJ3iPpwNB6U2PhVCoSxQDp2McFdt2FjM9F95Htj5NhP",
  "key16": "53iUVPCSDzxiGeDevAyjqC83HjigAhKrToMbDG35GyWaJoWka6sqLTPy1VwnctSQG8hRRDd9HRjndmbNdtxs5Ljh",
  "key17": "5otU7u4YnMnwWC9YmQs7amYSVZpheZYj4wq2iDbCz5BSQsNYWTCvhs2q9Sn7gn8caxJMGrkvDT7SLt3AF6RgvSRr",
  "key18": "33PHXqSvVVz8hQkfb3gVvX4QHTiGTqKKYk1vZuKJfS8cjpq7WABRHoQArPoJKpeTnviyYDBx1nLwfMU63BNserdd",
  "key19": "4BCUbfwgXJ4hY7fyWbqeqdgdXmUxtFwYBida19d65a4drhAFC9s1Ag5k1Gqjayi6HjJc67n5XjRn843mZwBp1ocp",
  "key20": "2MiHDAYDHX1Ngeb5wnoP7gJmxkjrNMJzS8AdiESgD7sDyGRexp4b1bSRmzsJxL6P1Y7XCkHBWMG9jLhKyFpqd4VZ",
  "key21": "4wzZ7hEz9uAEJtwFes9Jm3MA9zqQEx87SdFvxBrivY5VSyExHzfoCzVch9UkXTopbcd8AeWj2BWzUbGWH5qisV81",
  "key22": "3E1zNgfLvZznTJvMGr7Pa62sMjaVDYEw37AMKxxo8w1qU5NGchQhBdDJhF2PJSpBnuRbVgAWqARUQNMr2d3ojiYj",
  "key23": "3SCcZCeMxwUEWAYhq26dneXAuQgwXPDku5nysK9Mu8JVyAJK5AZJd8XbQt8dA3jpBf3qDYh9ydUX7HTxseT7ghPp",
  "key24": "3cch3MVudCvKfA66stWb1Z2ykPUJ716Fvb41AsaDoAJQhHsWQrEAH5ibc99zGZZzrJFdv1ZLkbEsZkJvKD1BjX7v",
  "key25": "4Ra4DDSkmCkWu63fXYSt9fxX4uR6oeoQNW1C1DqE8QtnFuYpZMwWKXMka7Xqj9DN6gEqtboyXdyHg8AbsELkkWsN",
  "key26": "4UPfeqZtSHkcX9XaUxkisnC2AQ9SCCsfyYXEP1n1CzafUj8Ppa3GC392s2NDJMdKDAERnLzq71rdp5GPwg1He2ua",
  "key27": "vaacXHHrtzPvFzAt41ghqfjGkR1nxt7AyTQQEeJveCde636w1cWpSfddgJW8q5vkeymqiRVJiFU6UQ9zD7yn1Vm",
  "key28": "5DhNTgbi6yrS7YLRNgTGjh3wkr42NvA9KoaNyUfda8G2iCodS2X7wwR27za5L7EmuPmQ8FVKdddv8sne3BMobLvy",
  "key29": "YJqmo3chkveQPeXuHigZyiZZHQMd9CNPk4EgmYn6xjMJR8oMDGvtkSfoJ5qdzyTaKpzxJeRA3ACJcYePp6gD1V5",
  "key30": "5a1b44it7upYBz3iCdDf5cEAQfbqp1q1TgSV1faZ5WueXSVxzzd4Fw7gtZHkzByxNuVKPfdskhbqCAZvFBqPzuYo",
  "key31": "2bNYpZLLeNStFigJMrpCpXeAoG7LMPXhfV4p7c9W1Ay9A4UbNYdwZ66yR5mceFL2sriq7STdiYUfKwMk8g8iVTYN",
  "key32": "tyvfpUQY68uSjdK97UbdG2Q9S9LLkTCGjZ93H3UgM11512dEvKqYqp6rkCDyeeSbRXT7xNKyrpm4yvLM4cpZQQv",
  "key33": "2KmbkKUBwqZ2uA15Ka6EMXbvfRgM7M1gqrhndEkWD2bRi2Xsf2zaLCsc8n1XxVqKaSH52rKaWyfSYBmB78QcQpbi",
  "key34": "2oUggagbBZa7gHaU1CV3BKsfwRAJsmWT1FoGdBnb3KnAX7wkSEZjo3FqPh4zr7vxbENEEgPk3xPUUbPL6dQvs2X6",
  "key35": "UXVpiGxbgAmSY9aYgFBu9vU4wFBeanjU9LLxsq4UCmXPkvC9SznCxFxcJ36poBvPdjRks1Li2Kxjqe5cDGitSrb",
  "key36": "5TiZuyD1DG9zWaYEDwoqigikicpiaxB5oHXox9xu1We4hWnC5GcLE9zVW63BEqBhfaN9ZFHr8sEAo3dbmxsnNDG9",
  "key37": "5T6sZac2qMhkZYWMZMJyWvq5DzeGxQBCgPRzRthS886RUMawJ1rkbXF1rWjqWxNPoKm3XWGUkm5mwoa4ts4zknRP",
  "key38": "2FbcKgE3RwBCth1DTTn5tgei229QESpyK57owhTGp5XEFRvV1LfdhTVmpFuBg2Fn4CSmUfQwHP6ocTgBPHbuGB19",
  "key39": "2LELxHYY9uqiHu7m1fBgy49opjovyaLcFAJtLbD5cWwoGiz3dwhi2pN68JqfZBwnVUT2oRN7BkexbLKqT64LMpib",
  "key40": "UzfruQA5cXogFx4uzm7J3DDNuEZGbp78RzuuzEF7QQkT7rnNx7bXpShcPKBkYUurBgV5weGvpiDFEbTH2WeJFZc",
  "key41": "3r8pnTEREsT7GQR4W6rSrf33u2AQHYQ7yHUFnL7fMy3pCmjUuBkQedK15M9FjUjf2m6jA915yRoFzKtMYmGGqX3y",
  "key42": "22wQMksHQaijpiMg47B2QF6ZRHVCLPtTG34JSJP9FRJFWPkNaUuDYQfmf6sDujUwQi67ZFNQWQnCNJFPS31HKizS",
  "key43": "FPniFeqeXS8oCcYwmw5j3tt2TxWAowAENzmX7rPepAJTDwJ17uiB9q7NKbckyLuddFir2cShsk5ogmkDGmB2tzL"
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

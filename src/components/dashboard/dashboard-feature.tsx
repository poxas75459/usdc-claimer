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
    "23hSPLBCijbzxviWpN1CZCHYdQvd3SqwcyujzCWm6nAbqm47JJ8NmUYrfh3yJTKgQHCvcZYqgHaZztVcRmK5tJoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNFTdyXDGcZ6DQsnsbiCVYVmk6B9BvWg2poHMtEmhxKrKu7gAnk7d2mxGynNmGsyS919kTksmqbZKAQdBuZPsed",
  "key1": "3g3srLztad9hCjgVL4yEN9hLgg8DwXLuK1JXUfpX1ogwhziBTM7VKpFrd535xTuu1ANTgHi3GrQjL4FDGQo4yyQd",
  "key2": "3cbebqnYRHY9V9Y3XXs1FsXVfXtVuMbUZczK9ntZ482zUkaoM7d4AD6EBX9nQaWp8gLZhWNjFwZJuKGZGEczyC7i",
  "key3": "3scVAzvJKM3vb7iy93Vs6xMxJFicbbn1tkDh2zwzc6cv2TDbTXGoxon8JkQuEfitaT6UptWwhYP7p2kLhJ9zu78c",
  "key4": "5Hcium59hvK7Gu6g9PdkPgw9s1ghi4KKwmFVgxhekdQSZKNkYR5LbUrAVPxf2QzDqNksrKYLx9ayR1txorUGm1Kb",
  "key5": "2ZCbhFfWfUrXpq6Drm3a9odjWvvunYVqtdi1qHyXrbY43YtsLVZqXDZvJsfTbax9ZNbrGWMwcxuHTZqvHcMvXWMm",
  "key6": "4pAzmTodKkxCNXWyFdDLy64vpvxgsWA9SCyzddoZ5QbDw9sPDE5Bk7MNSrARv5LvC4b4a45mgoRmrFvQToYKUC87",
  "key7": "3EEkNGf19wjp6zkgxai7rDQQFvDPpDdwHxjbSZRv4dWKTJU7qd2kdd2ZX9RpsPYjZRHJbeVJvKFzmUZDRWAhKkqV",
  "key8": "3hWdjysvd7KcMZaJPAcYYVaeTfL6yicCymLsNmnw7eEkS4oNZKZuQhC8QzYQik7uxMu48ybLid6EexpvpDE2KTTd",
  "key9": "66Jwh9krbLFSVfWBMgaCdPn9hv8xpTGuMLyyNV8mQ2uvtxpJ6bbxPJGHasWvDqNdwhBZAY96fBEo6hEnmm3X4zDj",
  "key10": "5skdJBpeXfFto4K5AWcUDVppGhhX7VJmZggAZTPyp9JkpvewsZmNYMtgqMgWXv2uMZxoRB9v66JhN3No2uKmAkMD",
  "key11": "4Yz7CN4Bbi14u6rx5gdkfMJ95ZVvY6YirzksF18i1SCizt1NDMLhvCAifsyJSsRyxzjrCHD4ocrVSZzj5AK4fbCT",
  "key12": "4hv3tLJTKoQB27seK6jEH89D3VqdB9breZYEQ9C6d5xjQ5bbPSGQ5eZFpBQTiH7iJC2iC4PwFSp1hP5Giui8WiNq",
  "key13": "izGRnNbGrEJhPRNYtTRtXtDoT9Czizm6mKWdpDv6V7Z6LbdWzk5NYcJj5CLUtmmXt5yV7rEjqDsqvK6DsFm5a9k",
  "key14": "44qkUrmrWkbgjBAS92T8eS1pjoYtFmTUBi5cUCjGGDtuMcj35fdXbGyNzkTnUdSNqJXq3LBXSCDh66aVNU87qLTV",
  "key15": "9PHiJUyBcjS9E5vfX3MkQRP3pdA3AriipV6YBnMZkr7W2CQH7igVrxmRmj1CyRYiygRvpCBp1jKa3wfS5rkA2zc",
  "key16": "5vr2kySQD8ytJ95WYzcHS2NuU3dVuvhRfRiQsrq1a4VPREcXL2fxWcUxDdY4VbvBzHgfWUrPAyoK7QdL6Z1u95vS",
  "key17": "qXpmeCRUX2Lw3VPVmtSDH6ooYyFs6NRwegFnQBUhGuZenA6Lq1c5kUgKv6Zco6r1uaPDanWLQ3Z3CJwScZsCHtG",
  "key18": "3diRb7u1mNxz8CGUtmKcrfbjKizT6d6zUdKdPteMUVD5RYDv8EV4QkJxdcsD2YCrLR2NHjHGyiuCWen44eqWLco7",
  "key19": "5XSNHXn1PD5oWjTtZj8ds5N8nztrsniUUBLaMKcqJyWkjUnubVcpN9SbVWd43rLVcS9tZ24p3yEFAKDaKTvAvQth",
  "key20": "2iuivYUYWcJj8VJF1cM6Muc5Jyeq1hXdGKk6VyNeZgjeQGyTveBUYTc7wBpq3Yp7wQ9Gu2nXSfc9E5XE6EBSZnSU",
  "key21": "2B69EsYMEyqoe72aKuHZjAWuidf9QHU3xQUQ5eK2aNR9cgyY3Rh8QVwiFdCv86bWS7wRAh7KrxeP3g1GPVXKVfRm",
  "key22": "32wZgc4gxgQ7rFjqPCcLTAicADe3Aj7jhf51J6as26miMokUxY3MkzJ4nt7ucPoxjNgAKs99jYLe2uuv4KKg8WMe",
  "key23": "4jhXWTYwAaZVPCTJb8mbBzF5UdgNuD2ccTMVzQ1o6vXixCz2KLtRNBivqhhoh1VJF2WUQPaqBwMdEmwQSPwrrp92",
  "key24": "66KffF4WqPkCo2JT2UmL4ed4Pk47b2wvk3HmqqtdTXKEnqRhWHTjeGwP5uA4k9sb7dtGTyhgLCgdu2o9GqJFEkNy",
  "key25": "5Z7FEYsNYgowS3CxVzNJDVs2j1RsKskpVKzgoNGUrYEESCiG84SQcSkUiK7a6jN8hcpPkncwHHW6oXmAbLGbCHdg",
  "key26": "4FXCBMGS9aMNYSQZqoccgoiGc28sSXei1P1VdQXSsEwMh7UbuYt6Fre1bbDoaZb7VXpj8cBBb5FaZV2tyxdQtWbv",
  "key27": "Pgo3c7CrF5TV1GHgEAsYXTxPX8YZwUQYdwPimAQp7NDzGeGU4auDQsPSb3qfnGyGHvTSkwc6rZbgFCm9vdxqp9B",
  "key28": "5X63mSaE6aMCATn3sGezp67JU2qXtR4TF4NBnJEKcCX1RWwyunqk7fHG6udvNX88XwxXRBPnQ7ATCQGTUHP577gS",
  "key29": "TdWC3vqdVBVFkzCqSMNQ45JwBQ9dp2GVM2pxqL3JyedbZ9HdQX2wb8r5iQCYcEw5pc3zADuBXfAaVeJFmrho8Zf",
  "key30": "UP9FWmAwDL8AzCGgjWpLWaciZTfSqsTcEce9wx9UGKbqgHfnzkbWAoCvAAZmGWisyL5Xr8DRQi8XDKD8ER8ijhV",
  "key31": "3jSr1mLScCi9BfTU9hQmw3gzHC345S8wv8E1X4HxYKKFofqUcwBddWqE1snySZufEWyfkdhtpBDN2nhYVRA5YcvP",
  "key32": "5ncMGuRRSkoEFGadtG6rhTPLYHiykd3x9BXnQ53CkcHDr9iB1QA9TvMpXknbcFyNXDbTKEpzWHvq1p65AKq9b964",
  "key33": "3dWFvEktb5HJ4hHDMmNf8fD97XyQhtjiaSZ3dm9PaVVhcaqPFXB8Jf4UNDqvLBLBzRBvKe5tkD8y6nveQyn3jgSc",
  "key34": "5DJbQR97RPTT7vqasZd83MGcX1rtnicYEek9QCSGRUmhYKEZew73RwSx2U9WMr7BKX6LzAZfUEDx12CRV9DQSYvL",
  "key35": "362A3PqeTjrLbPLqT7Gdn3QsCjYoMC97mMun1HPzgbFG3dMRpVh21rQtGu81S8d7tWDTtAmUsuXsuaMt2ttcp7jU",
  "key36": "xWi9PQ7K67hUkHgWDcwXLQ6rcGy8KpU62RHkthVXKjsGvKncqPEUfgk9X1haxTe6MUExXjSrYyKVqSVMDmq9haC",
  "key37": "2aGDmExUjzBbnnPD68AFWGwgnP3cEL6SGtXM1weWpXMAxgkqn9nNVFJxfRrLj4zNL5w7yPNJnDiPxTH5k3CpQBXv",
  "key38": "3ML4DyvnmeCSTztWGVyYWQsdSSyRYZDmUXFGbwoZm3ee9817EgV6CsLEnpPjCcF9KVGx5PVimBrzkHvD3WyMWQ2Q",
  "key39": "9AthsyB9zWTQe9ac8dZhLbT9ciBHtwxzsTrxxuHin4MH4MMk7Tag8rrPEF7zY8aHYbingdKHKeQpvgfKyJD9hZK",
  "key40": "4FjikbRuZg5QujQ5tskrF7zD2BU13wrdvP63TdWrArDQQLAW6JozYwuK5VXMxpw7gfjGgW2dNwyyhofZCaA8jQGo",
  "key41": "54FxgcT83Jpxbz8BrVsTTW4U1U8PqNE5LJKnsGr9eHFVudFVwFLDXuWJ8kXEKi5kqhQLWHeLWRDboCAavReWQrx8",
  "key42": "4t9G3rXz3ihZK7AVHHf7xnNww8V2dMmvoiVvegj7ZYak6qu2GyA7YLnvdgbYefEMXC5W6rqtYeL73objvALtMmB7",
  "key43": "5527vxfpeEmsuEvR8DRX9yqDtD9Froot3fDoWLV2MdBdjZu19vfcxJfF59o1uj2cPD4wEdrJbyFv1ruDiVvbB88f"
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

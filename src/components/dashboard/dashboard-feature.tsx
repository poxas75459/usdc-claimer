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
    "2SP5gvB6CyVxXHUvd3sZ29MW9n48hSYK6sC6c4veB3V9Ss8LDYP7sXY289Uahv1G2VmpSeaiL66UzFxrJSSRVD3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dpvms2StGcHZZAkiAJT6L7M9GyNzDJG247Zk8dSL5rVzqWiMW2jDr9ub4Z8w5rhDNPziH9cCpdsn7Yt94CBvbeF",
  "key1": "LvicHCcM7z7EVW3dJprjhHjQTKPvRDAHTLvJXf7NVdCJWH42Umo4p1ex28vPFxQRfAgYKbN6f8WyLx9WKGmZ9rD",
  "key2": "LUZD4xeopSJkxzYRxu3qgdXHHxpjzTKyMXWB7PSqFZeMShje5pCz18UXiRZfkjkaHHAqeQfpBHqhCb8tNfrfiGF",
  "key3": "5Zk2yyp8iGXws54R9eRQn9q5ZxbxqE47gkSv3Wyro7cNpxSNzcnqBxhFpyJ1iZQ99dxBsYNPGX6LtBSZyUpKJcd5",
  "key4": "2v1oJXMeDWy1sKeCmMhHAjGFfGPAJFCsQqJNh9w9XPm9vhseCa1oKR2qJZMYQdZQoZWLUtjrNgm5YoiUCjpT8r2R",
  "key5": "56tLvHmmsZX2yqgUsn8ArjwDXwrmUZY18L6sqRhYPMuDeb1HLBkjQvzM2MQqT8NxhYNfT1sm3J6kQD9LPeqSjRUM",
  "key6": "5bsGKL2Z6KUyZ2RVTxnAWusFKjdGeeDFktroptnrLiwH4Lq6nRtQSAh3x4yQkxRC1J1fHRNv6c2QznqAPxf8UgH7",
  "key7": "2GBNQntdJqbJPudKop7P6vNdPELJ3MBZpmZw4wJX2cukgm1wjT9BYjggeU78x5V7q3QgdNfjkXcVRJQ7xTiBXFvM",
  "key8": "5qb6vAC5tPZodkzEnxaXHM1FwXAjMpBba26inJxR6uebDAXPhy58aBxeYQpYx5RE9XHhR6DxrLxgwPWFftWcEzhV",
  "key9": "3Dv4e6tiGXsBaQVTDTgZKmbaF24XPzEtN9S9pwub8NrJbx2nMSxN6HqK7reef7zVpwPyzMzAcPriTPCzfg7i1MNy",
  "key10": "5p1BRQwW49tc5Uvqovj5DbzM7dXsdqmchexpSGCb5QSzUjanz5rJNo8Eigy6rPb6gaet2UceRYTMyNkYSf29Y9BZ",
  "key11": "24ReeKFb9GayN9NrjEjnp3UvPVK6SRJx3sKeF3xiQQEhAkLXQuXAKkN37PGJhA96aB4svHFkZc9fSHYciVkXZKGz",
  "key12": "5yKdTM7N9utqE43hKmwNXg9hNYzuPH6qEbESQcFb6YtrjiYAy3ULdBnCt3eqizUXYowTzeV1W4ihZgmnunvYGNry",
  "key13": "63XgW8WfSNzkAcPciT7TqijDqkSYpGvyUJCgNg4EBu4GQeVMowiS5Effk8C1g3zY5SmMD3cGg9GuMmJRupqcheqv",
  "key14": "5UmYA3VduJZ38mXXJ4KnvuiV8AiU74xKMw3KbhG38LrKv57bY85xBbV2VjhKxLGh7wbEJYRnkHBnzDkfQ1hyq9hN",
  "key15": "31f6qmZZYTus2eLdcjoPfbUuASMFC26FXDYpQmym8q4B3FDcKw4mpggZaWDy5DySJmuDEoqSpt696VuQjEWwsoLk",
  "key16": "3oQve4KqUAyhtDrpErJ22Smumj1zge1H8RtMvNWZMKSFNJtzcH7kTZbV14FEa6C72vWrG4w9y6qXroLfqc8A5DkW",
  "key17": "5qLvtNZPVNfBckNxxL58QQH8ULMAWymvHpwhRXuyhA2kKiyYD36jMiVmByKCvtCrNVbhJ9zANMQudyUmpHn1Fngb",
  "key18": "3PgUeHRMcsFEQFyVajz5tcebrQSSRAtrunEsfV2ppypRzGsAvLHzBkqci1zsUMCyY6sUsM1M3e3X45KAVCon1Tzg",
  "key19": "3SFH34P3NnDQ29vFQSfwK3M6BhmdniaSHugJVB5gcEJ52cwm6KVjB37fabrPgnJFPkVW5wtxSLZZcoz9JgCoyQKX",
  "key20": "5dusfcJHwzVMTpKdyzu1XVVrHmky1J2kMVJkRryxpyQNDH1xpwYcfpCVQEL9Xne7PHgusGcDP2m4e3ia2mnmYwU8",
  "key21": "3fqi4gxCWAfqWeW54hdwpXELsRCS7TZCUJDJCYwKJdSH9Jh47AmYZKEPHkJziv6X5NCaiLchkpVHkWbfgjddjg98",
  "key22": "TCk95GeUnWHC8Lr8ju3W1vK81VvUDEpfAqErcq3ZgFQ7CwfSyKBqtGecT7XafiBc2nnZ2ahoW1pcuHW5a7pK2rA",
  "key23": "5Dd6FMNQZHWs5a1ukDumbvfnhGAp6dBVzjHdAyTHXBJP68xA2AxPZKPvkVShjWa7P4miUGxjJGZEpjwLyrom9GfK",
  "key24": "cV3g9j7WLVV9gPavX53fbUNM5h1n7qne6efamfuTaUSU25cs6sGRfccQXHq5RRDdjufeNE9uyVVjArCVcNW9gGW",
  "key25": "8SqeoyvEpb5HXgG8DX6JX9ZvhrKXywGZ7w9e7aDvPJzo1Lra9Jirj6g6qxkMJQ8yUy8RwfTZ9Zg3DpwNEjwE4oH",
  "key26": "3A29CBcSkNythdomLPzK4afzy3nDmgphBxxNw6uYRyQqtdHuWcnFgYKPvfrNq3QES4nsKMWVzsTunxQ1Z1trjmFY",
  "key27": "61w8EETKyFbTxWHJALCLWs51aBC1cutyErwVGLWEEZPkQMUiDnXZzbXUQBNTUFwUBJeA6jnd5fKR6qPGbHYvW8Bp",
  "key28": "4hG4QEgTD6RRvmTdjKUMJGmefXmhM8dzPD3fT2WHW6Nciuxffz4mzWUJAYSooyn1FxC6UMCcgFuHsx5rsSbKtB7u",
  "key29": "3rsfy6TYnNW8LKDDSfPDMSDfmLUMpyfvFjeNcVPNncL8Vbf47a9q3nw4UgDeGwQfivEvu5TJpqGqk8Vo1uAQuwiz",
  "key30": "5cEDraZSEuAmhbCWYvBP4ip8B5PnFgY1U3RJSHWnCGwnjCXifMYVHwW9Dw5oz44FhTvL4fdCrmVyBaYBJfGGdk8o",
  "key31": "2JHqLzrM2gySNYkj2KktvzYgfiDSDQBVS1JN5nULaXBcFLiokAUqMDN976GqmxZK5gPyXkhvhoREcAG7iH4kp6Kk",
  "key32": "5xqdBBc3PGrgk9C2rRybzCfWW5rCRbkh7maXJU64PQ4DJM7za9nsN2Vh7JmnJTYEtboZ9DDCweXdrF5nPLyn3ygc",
  "key33": "2sVZM4abgHcQc5Pm6WFdA3NupDUdk9RDSCQ4KSu6BjrgC2oWoVhGxabXob2tH1BiKHJRcM8XpQ9Q3nvHxb3VHdy6",
  "key34": "4aPCN2CiDfhJydcaZKsrvMxwC1v9swGtEbhSXGSmBRhgwMvdax8oo9nkXGLqYttSLS1CXinEbBWqPUB1b1reTyjk",
  "key35": "2pkhazuFXPiX1wdXwjFvjK4V7R6WmC9HCBd9jzqeCsxvxCEJE5KN4ZgWd98D38aEPNEackv2W9YGkrz4cEjArtAp",
  "key36": "4aSNX8eQFT1kEmx7dMbxCe8yKG2zVczYvh3opdpGPriWUsbSvgBXqVmEwigGBHYwdiJPG2Qp5seJimRUoXVQTEST",
  "key37": "3izL2GU4Rhs7hy6eMMzf2pSLp3pJzbA1RW3GoNECHWq62FNBJCaMu5JfjQozUjFiAaNSS7MVdKfJZA767yNV6vAn",
  "key38": "63BQ6GAuuLPAQBqng7BAdbPT6FYmYX8aebtCP7GiM1d6WDf3PBqsz9bLyLEKkfR7HkEzbHhFMde5htisKShQZoTK",
  "key39": "SPK5VvDMcvE1iXPD7LbJxNvcrfovkFcwAwYFZvMjKtWCzvCsZ9yMqhMJbzqS6RxnqcQwgyRS8URypq2he44Pfq3",
  "key40": "4t2LVSLhRqGcM18WHLfXVZ1hhEqEPtkCV4hk62KR1mFq4qyubB3mVTD2i82Sf9rs7FWHiHKvjR4JxwUk4HDeHpst",
  "key41": "3csamGTkZTBhoCtVvnxRDWRmLGYg9Wh4nCdjPj1TDp2EABHgxPETAgAC3cRZzSSTKBYZDtASARjnEzUMGMuhh85N",
  "key42": "34hDm98PjDJWPEoK48u3HpbbgXEkkUk9nGpFBiQUYjywbLWChzs8kTbVUfT7DUcjJbRrRJPqJwAJudtZQbjx2gwr",
  "key43": "2dfqBQq9bzVXi24Rex5paPgkoE3Arn4tDb8tKTwJtYuga6ZeLb7xXbtJDgK7PgQTCxworFpmAoyXghozsbxpt6jB",
  "key44": "44T6t68f9Rz6WqfdZKBNCEWARKZNdVpJ1XNjH3FU51oLFJzwQucDyKEBnDy3uJnzBX4ndG88JpSmT2VLJShw2Ed1",
  "key45": "66FmzsfZmrfzwBc1HYwAJttKapMryzMkus8xyKgYguAiZnGyWtGn5dUmSKENGou29bu1jHNfo2sE1zSvtcm3tU51",
  "key46": "2mEVmeiyLakLTVhmmdmj6B5suiuYugGXASA8ZVbGtz5KyUaE2XX3gd3ZpsTzR9GccPGW7gw9cYXys5Qrmz7cTUuM",
  "key47": "5vw53dSHBxLGdGU8mEQh97CrqRFHkRi59xgfYCDwuF8SPdNFQgKjqjQwymnCDZUbXf44Pq4QnaYkn62xMCrRL9Lf",
  "key48": "4mhdfGhw8K7a7nZGMAcNEY4LU2urnviigQahSsrgQWZBt1FCoWv2vXMhyPeyoKaWA76hw81XjE2AE7sTo5wURRim",
  "key49": "39afNn7q8arSejBTBYbssHGG1CccUKtGNyeLMoPXCLhQr96fT6rnVeGJzFwv1dFrvRXR2dxfhoZBRtV4VYAUVB1b"
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

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
    "kr6dgVs1kUZGy4upZGfYkEzSjnKceL1xMyDfyEXfXpcUZx7bKuUdijwrMrnyHuog3LqDKj3Xu2qirjgQQaod1vD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s93kqRDWpP3bEDzAFVzf2Xa4y9qiKY4iYaas1h9vnet9ZwoDCDMG75SqVv1Zf2uAwHDWfaXHJjKh96Q6yTEzmBJ",
  "key1": "5m5TofMrbe3y8mBj2GpAgkM6K8JbDUR69PqZusgi5BzC8YyhQ4xFbHdov93XfMa9HFPq5GpCW6y2DvNTZ6Et3aAq",
  "key2": "43dUWtebocS5t33dTtnY5PSoAHr43PvXLjUFPuLp9ggz8RtnNDcyMzWwU9AGXKeLUoWdWnEULPS9hFxWhHgVEZcQ",
  "key3": "3d2N5JPNc51dF5NFTuuVeWQpQ4KtMB8PtkYPPo73Rin4JWq5FeknfLbGLjawjJDTETVD5ztof3erpkiGaVp6DVzE",
  "key4": "5ctcgwjTN8r11Z3GkU8dMwpYHegeTEk6HZm98M4UypqdaSoKWNroZcz8fevW24Q2wVqbKCbssy94gcgK9HFkx22S",
  "key5": "4Emx82GHddZ4H7wgqNzjr4Wh1gVuG9g2tyMLN2UqY9b5gLeoD5bTECfuKeopFjMRb9rnh6r3n94PNsUgMkmui6bS",
  "key6": "2HRufUmY6biR6JjN7TwF8A3UaNd6eBqowpCgwRBpiHDhjY45N7nbjeWRyWziFtYdVKEqBVysBTedR27GL8aFUq8V",
  "key7": "jsnUq7Kya1Rn8Caw78q9gLt9RTv93ofEFcpUDr4t8MXio1uRw7VZFagrkBEtvBskyxqhUMwD2KaJRti45V3xU36",
  "key8": "3dzhd4iozYNMK6jvHEiLVSxsABtaCvHkNKDW6KgBNKzmqQA2NChkoLeCx6oKqLdqf8hgTBLnRGct6MRjyXfMkUTL",
  "key9": "abKuCWt5rMUf2TqxYhrgwha35DiCAAKhjMAk8ud2tZ9DsMxhUyp8iZWsLwJXX5REF3WHmzCzg5VY3fatVtbJ8L4",
  "key10": "nwY21kTRnEv76HRchgnnMPmieoU3xPNszDudKzg1RfxaYEWfxfFJwUhvxpQ6v7QQpiWH9QmeVvUPpot5WSEKnyK",
  "key11": "2P3AVtiF5si1mMyBemRg4cbxFT2eqd5GLp7xpWLqsBWpyRqiJYfmmzVKkfq2JQRxKDnzva3c6ME4VcA1yvHiaLQk",
  "key12": "4ZvhzWGFQEajBkHH2sp6gvRTjg8SrQhjtDVgJdXWHm7TPhQ4onY58eL99uHeUSEDsLsUe43iQidsSdyX9Een7nWZ",
  "key13": "5bUxQVZ45y9hLR5kh3Er1Xv74NBxJHuW76mankQ3uXavUaiFp63H3cM3K8nzHiZJ1TSiq8USX7DJZ5NegyVyauWK",
  "key14": "5RU1PFXFzZHPnp5SUwA89zd1yfXZA5h2jG59dM5Mab9JB74U5M59ktTyyN7PhhbMoWV9oXsoZue6u86CJo3xWiB5",
  "key15": "5W4txaGSuZYb5maFdkwcaY5fxaBSxDZykeLX2r9gT11sK2uzQmKe7S6hiR6JS3NzpKZNvoqZPT4CPqHTXNzYNXcg",
  "key16": "45VQmCRm5rAKZvWBFzHj3iC2uQBTorWoghJbNChNNZoR2W3LKYa3KKMXq6bq7LHJEna5jUPvpmt19NxuAisXrAqC",
  "key17": "4WRV4G8KNSrvFVtuxKdxTXMWPEV2fsXPnmstNvwVd5csaVHjwpHhiNJD2X2ipk5x2RyPQvv8cXjsLzHdacEGeWZJ",
  "key18": "4dHXFUu4uKxMaA4rzX1VrHvWTuxXedAxSWNHYhNF1ZaAPzevadMPxCxbdMw4mjhVJQTVPRotxbUSW9kQgdAdJdmj",
  "key19": "2x4DKDaRJmw82SGJs6YsKCbpyVgRUfnUTuwxG7M5ejPs6csabQoQwz1ALtQKr9qa8dEhFEvV5dCrmVggmc6zNv3M",
  "key20": "JiPsFdi56Fjc7CsuXyYcfSmA9ihgM8nnJ78MJsWABwjieW2Zw2YLiXkb1kun676EGR3btV8aEPMhQcrmJ745yxT",
  "key21": "5AFjTodAJawjw9D9iNeK1csLTgFPwh9FgCmpykAykNgwPTXiV8R7GsCn7FqL2pNT53pyfVgKUJvwkXeb85uiefDu",
  "key22": "BzmBdZsy6t9hGePbzQAap3iUPY3zK9a7g6VhffVqjD4ECzFCj8Xc1TpijtPhAXXyNGAvoqCcP3AobT6ZaVehuAY",
  "key23": "2y8uXhXNk2tbPhZoL4kFzBUi5o1P1TuHb3unRPH2dFnBoMF1vnL41kRTb68VBu2ywZn34oDaffFsBfuGtjeUoSL2",
  "key24": "4ziXyS14uh7nypYX2QpeE82FoAmuYSTz49m8x1xd3dWCagZMcBPDaZjcDapgj3WtomFLAswr18yVaF27nsZAfoSS",
  "key25": "3fCGUnBrDwTyPEq4n1A87G2VqcbCMLVkAZz7DAt9Y2cU9HVZ7pPxe48X1TdNtR8thhzxawCXy6rJNYECcDghAn14",
  "key26": "5gCRewBHcsNV7CtR2KCBGaqWLJX6Nwsxo8okNiADoGuP9T8XbNGqCQmBcJNCeqUQ2x4U6gZ5ygUv1MRgU18M1H9r",
  "key27": "5GmMJzLHYznzQPNFJ64kfNhWF2DQbaCWz3wkpm5Jo9nXEQAtNU5pnQSSRDCCqcC3LSZoShAHgfC3mt8N2F7pmqA2",
  "key28": "NFk88iBfdgvGQyfbM7AtSEbvwRkd5RXa8FhvYjMnqAL2BJH8sS9jua8537A7TDdGmJLRbB4VTcgVaVKLEqw6A4D",
  "key29": "5MU3RWCguMqTerzogy9jaczpMm8ZnEui8AkLsnuwVXNoFp38DmnCJYxoaRmhSAkEjPEDzapaVMnbQPwDhzPc6HbM",
  "key30": "49ay5Cd3ypsGYazgzVKzF5zC1X4uCeb1LNnTGZPqYEJiM5pyU17JFEiySBZu3YWfyeXGTAPyjsB5x1C83fDhZZpQ",
  "key31": "3SG9n7yvczb3x9k4fK1YHt3EmMonwvqo5m9VDVsErKtjGsrNwLTbjiEVkbaEtCD8ySKzXJL7SVMwK2QdMRR1ZB36",
  "key32": "3eictG5eRSpqqWsrDFSaHVz5v3PaMRdL8sKipH1BCCS2WCy3T4k9DGzAPC1VgrFNwQjXz9fobRH5a7RCzcDJ9zNZ",
  "key33": "5RiZ8ogAqPzpY5tnGUNX444kwRfDNt53vHK5NDxyZ3oJezovnuyhEyN3f74peCm6VYJQn1y4uYwwkxVNTAZ9y5ow",
  "key34": "5Yk24LYK5SJyAGqAbbkNWufBc3MFeVQBQvRmuoZyuYgsqCjMurUqEa3dgoXqZENGoXMJqG12uVuZFGpGYggfvyhV",
  "key35": "5RcFgCdEosP11FgEAnaMaHPcttZPgqMSXQ76vPWqs4qyM38BWzZ5hvwiyPMqEMzcdLZKwiJhnE5UPHXAfwQorCSg",
  "key36": "5xL32odqfGcVzYKKKZsPuvq2w4QFh3D1PQ3wLeBpWkZnMRfaS4BeRq1AxCrTPcNJdkbzSf4qCXXSPtozvJuTLYLw",
  "key37": "5tTw1LyX7eELj8QaZTZNCWr6gw1KdbBsY32QjgnugQLSCG1dqxSL3CmDs8LmTtyvug6ExtgPMgAxevUwdXdtAjef",
  "key38": "4AfnhZFgZWyuvkDfErHMFjQzrPhaLLaQDZJM2BfCuxWguVckQj25iRKEXjiPhHMN9zj4D8Ny9qedfWCRgjJx2bcC",
  "key39": "5wgioCNQhpxMyNSaUREteC5NhcHL3RJwLg73rVQNiKsLX9hhEXHHEiCQQfgWmvrQtkjLUCSS2MHDki7EAUPFs6FY",
  "key40": "24KaX5ZKshFG8sxCi7G61cHmJ6BACQC6mRgiPjd7yBLKmh6b2WCuP7FR8dbHrNj2Td71RMC8tSeBJopPKMhqEvAH",
  "key41": "rpkEZXY6xAaKHVq9VpJLffjEBCYBGvFypGD6TeYWamK8SGrQFnPRQhD1Npyg2DncyGQfwnZ718DRuZcyLNwtEBX",
  "key42": "2SsSxawnh2RziyE7MgdjeknPwr9X5kmP7rS7i2vTcr2WUTafAN5bF1Yur6e8wWZcfw5U3gCm5CmMj5VjNicu1bdr",
  "key43": "5D6QEaidfocFPA7jPp9pp3STXZ4GBo19aWuN23QvpDhzDySjYKrzvmErkWpH48eyjbU4tqZ22uM4QqTWNb8YiR9H",
  "key44": "52A53hm6ZwqPnApeDGviWdWc2e1ZsSiet7bdedPewTit6j6jPKPi1P3N1wrDikfzgCAwcoyn8N7cVzwknfaRKaDh",
  "key45": "4ixXx4zvemJxHV2aYARAeREnAuygTWv4ewee2scZvhMYygp2jZvx474jrLpZzGeVT8wA8phd7rVi1WdK1FUqJpef",
  "key46": "438uNra36agJ97y76Aa3SXnEwdRixn6B1jYejs9mbHEhiZEgnUNn67Sf3FaTWNWcMkPcTUwv5grTGybwqEG1djb1",
  "key47": "4Hv9uKT3cKjahEjRtGtBiDW36wCiNGe2iYMxWE8xB7unwN3GUfJSMwKAQaKyYpQaLixP6vqzPoX8gLXyQgQkQzhi"
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

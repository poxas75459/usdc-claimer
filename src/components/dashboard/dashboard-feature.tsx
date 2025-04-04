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
    "4oyPFWVTqyJCxPvq3u8PkNNqGzVsojrrJwvHwbvosH9jtaeLc2qD7jsrYwrEzYkzB4qbxQsubFSmX24LiTvVpKzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHiiifRPLVES27mhzhHQnJAA4SGs4qNa1ekoDGFcJTaC36ffJ9uNTdCckkWk1T9EDHxsEvrkAhbnT8nkGN4Ggny",
  "key1": "XBF1sH4x1mzKRtzxcAR6CjKQpkreRpDPmNGMWWRAJpenfjYUGXwADzF8mBnp6kyjTLYW1pyyQxcbjksnrEexHFw",
  "key2": "2UxCT918SCTJupJhsM5UeMTJSjCkySg3TBxuiQgha7by23A33LB9QLC3SZTvp9pfb2U89oKnrEZzb5PQ5jrNWGSX",
  "key3": "3dPn4nLnhAK4TgUJmdPGYYTg7TLuGVYBXR3hQmwRuaCiTRNnGxmz1Dr3tL3eYB2ijVjW2rqr6q2djhc763inLJAf",
  "key4": "GRCHFrxKi4YzMbqqZzRK5jJukpH6yeHFhZRu7VnjXTsngCpqdueQ4yCENUJhkh2WvobYarumwbcLmY4e4WMhYex",
  "key5": "co7nZfSnK5QLyzD4Gmo8RNMoh7nEhbzqDiFqueYNs7FoTFCNv1exC9rD4XS95Xh16urhfw2Zkd334vjkefHShuK",
  "key6": "4BbmXHM9eqLXLdmuv6uM4oVzM76oLP34sNAf6xb4v4KYLUo3gATsTUi12WF187RsSuJu6Zc1Fv2Crdtrtnsa9NJj",
  "key7": "6K1nuEBn5sZvUXphf9r7Ry7enhnzcf7vwksXtymqhDXm4TppKPygLKZFdEGTXAhRDm8bvH2eXMaVhiGW5HYazVR",
  "key8": "4M6twmjpDsa9nnbLTM2uhxpeh8WR3YEj6VbF3pvLKcef1kgaoN9UhjKQ4P1TPZopom6SQMtKuaVKR1RWoKtrz7Q2",
  "key9": "4bKcv5MvwTrkAB4xsjR55kErTzP4AHAEqQVaH2MfsGtBWtqdEspnavcrRKtSdh2eftq5Ch1Y8vPjMNQBsPxmfqWQ",
  "key10": "4hLyeew6TH9Ev4RX5MCsRRHnfspzqqYmkhj2u8x7G6VaFNReeJNRHBVyqNF1LcENCqbdPvmdWXmYaD2tLQpTx8U6",
  "key11": "4jziuma1BcqJBv16fvSJsoUPmx3tfDcHN18P7LtEr6qxSsQz8ZfhwNSwVcceZx4XJKMo7ze8foHv2daKuv1rvFdf",
  "key12": "2B4ni3xJgvZMQKj7ueQKfcMokeGFpyJ8syS9YKinrKanQtKZdKygT41syKRZemiRgxLRZZJ1whrpp3mcyj3kCEnP",
  "key13": "3GyTq86uvMyqB16r46UGCa2SNqgT3fKHeahgBq2GVzSkLoYKuczZ1vipk17ffoGgt3KJ9KxYcFcdiZF9Cf5q2SjA",
  "key14": "4qxDpmRgwhCM6HuTp2JWQt7P8FsnQBNSgnWF9iPUFcTYmgFcRziHcKvhNyyXCptGQfpMUy4voTgiXKw7CMYaYMYT",
  "key15": "ZnbiWMxTb3pNrVMQSrQ3cxyjGAVrbdF9ymzzASUN7zxBHK7Nab7buRkuq8Sjr9JkadBhQeh5xHRNPt7nmqUYVJe",
  "key16": "4hae51WesDo1ftV4DaBgq8D4SvjLNMYHRoinv3WyhBVriGYJshAm9gnY8sFTs6BQ9aXEtwn3buRnuqMmJ9ApQheN",
  "key17": "2Ewc75NtnYNMpTcuWNXppACRhRxsvLBUYaZP7nTiAdLnwfK5vMyHn2eAcdKiJyEDYrvU5xoNp45hUx5zxnFPkGSE",
  "key18": "2KVuuZ3VZK1jEGoCjBWdTGAGEMobNtdTzM7GHd1hw6hZQ9TjZ5r6D8TsKvBhGDK1KV9GNXnusZsBzJq1UQ5YRFKu",
  "key19": "2a9BzsGe6Q7UT2hZTMA6NqFaCC1ajqKJsikt2iz5XaCvVobJeBYTxCzktxf2QJq3yK7K52cEKEJtjeDPimJy4uLN",
  "key20": "WApBvTgvohTTmbMGcvD6TJynPPVkHMsrCXDAxsZwa1LxfphSAb9anvofUXBxypE3S94FVqcoqUaGke1YHYZRUW8",
  "key21": "2UHAfGqE9jUo3TL3wQ1HyhCVpaeTarRLAbB2uNNn2oqvtV7KRPzc59e8MPQhFQ3LRysGf9v9ZqsEk6qvU2WyeeuR",
  "key22": "xXp9WA1aHdxocKKSQyzZyw2ApbkjNQG6SJP3RWc9JUiGRojjf8nsuAjEotTqMpr31fA4Ap3ioLQhR2QinFMDsgu",
  "key23": "4htKFhMZyEMP5HDkSWsRrKDoeDJYbyDe6MGJF93CPjjSLuMZzrJLAP5jgaiZ2KebxRPShWvqhsH13gpr1eM11WEe",
  "key24": "vDJqjQD7g4Wo7psJYNSLN3RxMsg9ToUhWvBa6k2dpu7f2REaKMUfmTTbZsTc8mHf4vHGvLXAtiGWV5dJHnzpDci",
  "key25": "5zPXdVzFDyA2arGkXwneHpjHFVyZjHo9uq8dpwLvSx9kgLdVhAEugPD2De8TBxnnXx3XRpzzfZPXj83W4PYT8gTL",
  "key26": "5nwsjwPV5HqN53ZTbj9V5nwXvEMH4NpMjJ6swueD4QZJxWiZJvdmsK1UKq7qt1USp42dSTnKVyUeBKxNXcRCQXix",
  "key27": "4Jmy6LwbLdgVEfHigsL7ZHHXVwjKJWGkLHmRTRggdCyp3DVjLU7nwT4D1efbiWZnzsuaisVSV3bqAUTh1NE4L5qq",
  "key28": "3HWeZAAUsiDmALpjGckoAbsQfXf4PSDkeAyNXvRNeZ9YRJVvmsQKvYLHrgvrt3k9QHmWeUqj6BjJ5VAfnAFoMsjz",
  "key29": "5qqXaHEagnynf6ZcMGDi2RiafBJF79A7j6KZAbeWCSAbb3at8UZCL3K7YsbDBTjygBRgkhA1QvP7fJBcqQVEBcZ9",
  "key30": "3tXb2mX4piXM3AS3UeXhWvtSuSnGRhdZG9eAoEEebquphjtAYweStXDyTMA9SmExXEH4HmEcVwN17LsEdxrWQyXk",
  "key31": "3PgwPbRwYwDgk5Yd9FWJ4RN1nuqLW4kSLCyWiirXFjyJECyAG3SkSDek3PT2t4UVimJwCTBRMTMCTjjSff1mbJQd",
  "key32": "3pifEEup6e3REyfZ9MutUwRti346uFLS5kHF7pknBP9RQMHtApukjv9Adq2AvdF5f8MU4QcAkg7duckhNqUbdtNZ",
  "key33": "5uRyLxbzXc7UsTEYYCkdc8sheFS4dHTX4Fn2WVWXBphrtcyKRgM6952ouZr8Hse91JTzcLTosfGUkRTpbfG6nWsR",
  "key34": "2p9zGo3tn1AhFD6YP1fxbcQThGFz1CgCemwtShpHj8E7ZX6sg5pPuuCeSLXyzjzueoUAfdn3FzdRc4rL1CvLA8CH",
  "key35": "4Z7Si58bCjnReYdT6Axbw5VruVBsNjpqnrHXzFNfcjiNJQrNDfPfwZHAag3qia8MH4SgruAEGXXfYKRuyJX4bCn8",
  "key36": "P3GvidegFwjDteRg5KLnZGL4JskMA92BEmZKd8Bgbe3N4uqYr78UP5URdfBjJ8FZbzq143NXQf5ZPvSsJnLjU1L",
  "key37": "5L9q3HZTVh7YqEphQTg16mTBULFkqz7qACjwVwMa1uRvFP8VdbqWSWXtDUcQT8P4jMt5NvsHhQ2E7DzfqC44Fsue",
  "key38": "4jNnw5CCA9c8CDU8o69JzdgEGgDE4um2oU5MUgZjyGZLFmNyak3WxRkBBdvfVcgdNuBxihuJnCbZZSGgB4SXaW8e",
  "key39": "2D6Uv3UDht8nJthhrXobZmRY1nRkv2dKVHdQMiTwdjh86pgz68NBKrzNQ44Hhv1pGZrtAyguVdjJ1NQNwpGskVCr",
  "key40": "2kzQPqaRWd8TPwZzaShnvcHCrwaGo5TFzZtyMP8ZnH3ZRjf5bpDbx5Azrg7HzJg85x29WGSzC5vVUX2VjKRcpMto",
  "key41": "55nQaCdhJR4LiQUxQdXJzaLWPUAKm5XkC5ZWXUPNcfLSKjQYjAXiDftThLopGGF69qKkFYEqGREuTCTRgUiyQHBN",
  "key42": "2G4QjoZubFcZcXqj2ka6xN38vrFW49G8A9oywefisyWu958AhhA9wi7QYKARfVJRT5RarvU8SetWnQAeSbY7cWiv",
  "key43": "5pthuMhxJkJFVCHVVtQV7nhrizkwc378pxZqreiVdnsN5zFxTUkdkkag2c9givBHmcpax43WvzBcLAwX4jG36LC",
  "key44": "4UmCLLqmfaEdcQJDebjPojWKiXvpd2UQZ5BzJBu62Fs2zQdiUrQngseskmiLJu7qZeuENZhsvNeiavmBxXfa8jLy",
  "key45": "rA9cV2UCHj82B863R3EZtH3TPaL9WZPfeMm2BftRnNcxwxHpRWwnNuU5FJfVWuiFgeJ8G1xBMcMGTftduAeQ2s5"
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

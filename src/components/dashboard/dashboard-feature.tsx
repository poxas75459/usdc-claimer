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
    "5gg577zvDrXZjbBkZVZ611XDjnQSMR3FM13PWtrYiG1fGRgJsiWBWgeBUGJHfkeSw3iQmx4FDwQ9rqwmSrRfXQSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26PPaJDMnUHJt61VZPoNVzKjWZDptzqCmrYcXktGnpdpiSwL7JjdjZuftGUfjnqbLFhy2eguTAmT7Wto4jxTRPh8",
  "key1": "44p99RU2zqPDaJpxKf3F1CCgCN8uWEQswYD2hm9NiZVXLzhLR3cj6tyQKb4Hc85qzULBewS51gZyuaqLSdSeZHcN",
  "key2": "4eNv4Cggq7F3eUBwza9GrMCkfWPiaGNQLYT7SCmsX99saXLoPdBnF5QMNBqVPqkEjKQfuGrBqb7fnRhnvhUciXJf",
  "key3": "5jLdf9EC54Uj6CPJcRk226xVR7VpJjCQWGB8ig6h2Zm7cx3NS6VKRr83dH4HL3DYavnLGgQww6pHWpmdi27357nC",
  "key4": "2y7YCPs9k9m67xhe3gHC5NHxysDNXGeKMwS4YTZZs8Zg1CmSueBFcg6WaYLjZzCmrh6pxq5BZ2DzTgbReqAXDAnM",
  "key5": "4ZubaBxBdML3uJ2iNgE9HgzmQS4zKqEX66rW3R9Zh7mfA2B3Re52wpRjRqt72QpeM1EKR5zQKNK222XmcUR8wReQ",
  "key6": "3HRKeRZLMkFJsnnBDnXEdqVuTr2aWTwjT4DUsoptWgcHfy4QiV98QHgu4bR2rkfHENP97vBx5EoYCdZ2BF74DmMy",
  "key7": "38oXeuA27RbXf8QHw4swF46SiiTrLzgBqJqkKbGz4EskcJdT6rQsH5o37q6z8fDMxX8Kvz8WXoM6y6ToNM1QTGuV",
  "key8": "5MAU2pE7foevqcH6aoG9f5wrNuaNJpAGGZAbB2Kto3TzZ7SiYpG89DLtdReZFLC6rjXrC6ZpcLVAJNCwojsj1J9n",
  "key9": "56W6jyRRC51ARcUodapZYFSQRb6WUhES1iqXnGmnjPBd4gfSrvNQAToLiLC2RwTagGTXK4CbnFKMT3gATxHqdteJ",
  "key10": "5V8NHUNVHbnCiGwBtHvP69dzoHQ4kCypGHCWGgHfG9mGHJh8pnyXycC9pAfu2gJTcxSDzwWyCJW2d3t4p4HcYeXk",
  "key11": "57c2fqePW7Jqf3N4S8Qnp6BduaMQmRjYqzxoPsg8BKnjWDdZyvfueNatyh9dfvVUV8wAZyuj7K9KULa8xNfnK6cp",
  "key12": "2puwKGrdTSUbejPMXSBCRgJypeLAgknv2wKCL7JAsAQbjdSQwLe6gbyDgh4HS9nRm2r5cMQLAA9re7MdXkEtY2ed",
  "key13": "4H7RibzQd3QmYyrAZ63bzNyHA6Ss89DvsioJiBtzpmixyJqdgiiKu1ntNk3nxbBqAyHsdgMvJvP1CqmdPprTxQoz",
  "key14": "2LqEaZw1zrSKDExspSzjweodhwaZkfMPqyCu9yWxrEEv8JNmUpMeF4wrcnmvcHjr9QWk4P18zQEDKEquXou44Vxb",
  "key15": "5qgLLri2pbJW4JQvUc124KQbQoQoFamtAdimz8FP75b9s7umaS14kRWFbuW94QanLDm5asUqr5Bcgk7GvXdmCSY3",
  "key16": "4rEBH5iPkk65VtUmU4mZCHz1h9jyJCmTecao8rhmttVsx6y74YpW27jRZLo744cWMF6RoLzuQaLDUU12m2gqQqXg",
  "key17": "366vVgnq9iuRe2sU6Xepsv2t2Lq5jCSgeBJK39dXaFueJsRpaoFXxMsMhByjrD6XCNgSkUSCbKCbfD8yQN6otrYz",
  "key18": "2g2zo5RFWfD5zwVCgWKWBHB6QVvQ23qTfjXe48MQDm9B5b52TnPoPuHqYZmYP3hPriVKZWVJ5JD3ZRZNZmf9qMgn",
  "key19": "RZjomfwHW6oCKtKz4FrMZkuqUnXgLiU2tG9fLTnKEeTmXRjeK34Vq7KaCcgW38Xv2FrGetn6UvsZ6ABtKMWZRvk",
  "key20": "vkuy5xUGxKNjF42Kx333BY825EsjS7v8eFRUa8fkCUm1Z7hoYMKyy7rMjSiNHjDWJ6X7BgfuqDVrd5ZMeSijvzr",
  "key21": "42MZoQU7hJuZHAEQHdsSSStmcpeGzrTQvzUAcQBwdEgvnvVjXFKH4dvest4axiobNVhgHmNadKdXfZL5CHaVWB3j",
  "key22": "5UvwqrRUgQrVKuWNVMRc4Nfh3YYXZK2SQq5CDyJG8H5yqNobxg5as1Ti4TNQ8NS6izdxGxQJa8mMWSMw9Ap7Cg9t",
  "key23": "2STotYLprVwdUx2vZyhfHamvqidRAa1gDTVhur9jENo5VquRWMdzRQGbZxa3bBbmWjq51GnTFWXqxcsyrSxae2Ru",
  "key24": "2iXQeYYV3BAx7EfJkY44XdiGZtoUNRqjgwxs5vw3voeZsbsus96vuCuqvtNEvpGzVx2gF5W9Wqb2uVUrSyHs6a3G",
  "key25": "2ULBjgD4T6aho2H6Jg7AvFDz6NYSyuNDYYyTLigtXUFyczftavhkxhAbFxmqy8ZWSfDguTT2P4xRrYSwhQnvtTa7",
  "key26": "wrkx2fYDCtDxnxL4KF8ta9PaUnC61hJQHjbSA445DDzsEmrRT7iram9k127MNUxiyTbvJExjBsUPs6VQstxBiK1",
  "key27": "3XCQCCLnJppC5c8wbHpgSqBw6V4eAd7gqHmVM6txvgyqEBio6xmNTb6R6kSmkZao9oztEjV7VFDmbxQD5SiSEe4k",
  "key28": "2y1w6Ys7vgzMkBA5PBht1SV9miFDsUogYrgbXziVakjGBV3nSvaTisCTLgf3D4YSc1QepnWqjxW9FAjDUvP7q4nf",
  "key29": "4atKVim7nxkyJ56EqqfKAhWZZovcc3zayzU8TVha56PocfcUQn6Db9346D6vKN7yqSnJm5KwV9fXgYbVxNArsuWB",
  "key30": "mYYgXxFikWk3cuyJM1oxoxWFH2Ue1fFJxrKbhfvgj3yPcnjvNT4XozEpgj4tBRzk5CG64TPN3GV4RDj2gcKWYmo",
  "key31": "4hGEvceP3kDm1x3kQFGTuxtVhfjWkAn6hYcMPGxrTvwoms8NabT3jvUZA5CNxGHDpEnGx99Xihb4LsATM7ZM1uP1",
  "key32": "2WR1yE3bPZmP3DV7zaxc3RuANWcSsoMTzzoT5KLrBPSAsqHaLf2qf4EVDcAZe3mQfjKdydCypExedvktAHu5E8kV",
  "key33": "5LgNj3a4wSj49DUyXxMPzHY34hvQHUZ6h7m1acbFJQ7jShJMhEC7822e2LybS4sKqmJQZo15VdevD1q9T5eDRmJ8",
  "key34": "37tFbBBZCT3ZtMGjvvs8q6HJKgeLmWB5NQFfFNmx5YsP5ivgvBJcC6PLF31LE4FphGFtVRFMTNxuhZEA9hpqgY78",
  "key35": "CpXcaZEFvfmu23wF9wg4AX4ZkLtnZye7h12erJEB2dz8acFXo866ZzdF4xt9dFxqXyPZSNXZRJGCdzaJLFnvjeo",
  "key36": "3qF723S3iqb4XupKRvCsHMY2aMiHLJbeXND9PXruNCAYkFuttdjoDzr3nUk64mFuAFyCX5FEPMZd3PdRJNkyV9zf",
  "key37": "5GS4ovHZ74R6gtUF7CzqBZpxEhKBR9D8FuUvP6BCenJDEAFv33Jes9xFaVNAqdT9A4BULnH8qnM9VNnwwTKJaydz",
  "key38": "5bdCdZtyvHSu2EpT2daDk4jbC6AtUacUYbXhFfkF3EJ4PNcg4A9dvVpaaXhoPHwBuUwuTTPUJDdNz9UavUg3yuGV",
  "key39": "3D8a8BX4YgC4BNDZ4FCqKXZX69MR6VeFVWqWA3LQBCYYSKkcFXSndNiqqmdsu9yojE9eH1epKYCgxHfuFvRgiyQF",
  "key40": "61MU31bXhwoC69BhntbkkMm3vEb1PsvaGq3ZdARC6h68PmFr3xQUZMrtijwzqppGZKAjNCGH7WS3x61A85XDBWoc",
  "key41": "5kQRfQrf94N1x49h4DpF8uBoanEkGifDXWj95QYmmiidg2x4F9pRUDK11kmMfLxBvjEvhnR7ovnuWV287wAK2s2b",
  "key42": "5ssC7XpKWW4Y82B8vBgz4GH8wbzqYp35BGCPKgzA1gkox9u87ucZVSkqcp7zxNgQA9itFn3GWMPKMA9DoXBWxz1T",
  "key43": "5Bfz2W2XBi1j3oSwXDfiGnt9jdQuhvWb5d789gQhAbFApEmuVa2RAWiyfTa1kDrmGaak5owMZw3Uf6P5zv75oZqq"
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

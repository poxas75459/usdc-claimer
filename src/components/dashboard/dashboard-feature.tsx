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
    "272PZoerD72SNDrLhZsasFxyFs9BNgpc8BaCXT43Z8B1Er1eWBpxqj8Nf7wJKbTLxmyuYE3iGs7g6SLMBtXECJRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pcemvh3bozGhM9pqAP4KQzfPW37eej1KTw2hPeicYSJTzUcqpFGv23hrjAFQPSVka1ETiNcWirQAZWkNGRvivB9",
  "key1": "3Fhy7d1xAH8Zk82HZM6vECZM8KuJrWqKce6k9HfxAG6H4H8My5oP9jKnEA2kaag8cLrrboxX5m7UiPK3ni7X8Ro",
  "key2": "pgyLwP9vmQSAcSVVhwwBWhfdj7DVD8M2HZYMMwGbNvLVK3J8oKZEa8YtqRtKVtjAxcUP1oYm514n4WhUvCi6492",
  "key3": "52Vzbg2TChxS22R3cRWTiXJJjHRAn3mgXimBMspWceJGNRJeUrfi1CGcbmbkk8U8Z91kKL9mZhrmpp2kbYvDX6Eg",
  "key4": "3QMRR8qzPJN9HJVdivUai6LEyLV7xHtMDr4EmAkG6LNNVFyofRDtUNWW1LoeN8Wo7s3SUEdWUotfZV4cGQfrwzAn",
  "key5": "3T1c1ahpKCLpJcd6YTeFRUAfZn9vE8oNpR2y3FUqYv5pVcqm4XoTkgCDDdLTHX96xtNn9jebNDEz8uGhZL3Y58LK",
  "key6": "4vLaNY4MeMXEziyFm94iuTBaiErE3AH6dmegf6uCH7ieAaxL3zFRPGd6xZftYSMb98YJhQ15UaNG3oc8WKvKWYmP",
  "key7": "sdWnU4puqC6C3BUctS5FKTZY6M7FTa76cGjBFSziJHTjkBML8jhwD5YAdo7Rna9WGFis8qVdrLQD7QuJGqn35yn",
  "key8": "62cSjFoq91EEPJZKpaV1pYfo5iYsakJ8tdCa6HWTnNWjZheX1gLHiJb1whL8BavDUVirjHiVbqEF7NKYtupLvx2r",
  "key9": "271J77Qto2DZxnCgEgTy2D1h8RDGMuFAiyt4UFC4zszgqAeqMRWYUdmbb4GTiZYtTR8A8ubgcSq2xyDkRdCCMBdK",
  "key10": "3foup9J7C2CZHS3P8RRJyvMJZLTbTAcwQMi4snTzEP919dFWF9LK1zf7ajJrKMwNJd6WXLWYTe3qFC8CCktKvG8h",
  "key11": "2wDX3h79uGjYoWHE8XwZpfjCQnNoewaMsXYxXYbjAJ18BEwnD1xLvpitmDqUbtVJ1pmwYUXahL27cxuENCs36GJX",
  "key12": "bQvFnPZo7dFLGs6vM2TvNFXR59ygAa8CwX9PLGf7B5nueFURS6t1jXyVRaiMJvvN6anDW7fu4GgqiZPTsWeorA1",
  "key13": "2BnENhijA2wPrZHWTitP3gykzu7wnm7UGPTo2n8P9YnhKPesmwv7nwVN35ueozQ6MQNuFFqER3WSfCmB2HP5spFr",
  "key14": "5nozmay1KVSXf1o16tgzSMXgrUMXnRUp7NHzYdVjt4rJ3EReUjyzQSYsoaf5Fz9Miavb5BSie4jHZTtztQUqDJbt",
  "key15": "4eJJmUznAFm2MPJqK1UWjh1VyumPBJCw86rkGQECcF6C58nkNMdJruBSyvRDduoxPzUoMRpgh5fTvDjrSB56sHvV",
  "key16": "3JrNqjycegaWemiK2Hq3UTZi9WzzrgEKsfXx2fUf3QhW7JmEmnKjfbVSAK6SSrX2ZxcYJ7QsbiMA4TVpUmm5KU8V",
  "key17": "g7g3DSv5Q19nLn9ozF4sf2sGn9ToGPWLqTRSADd3du1iZxCogVWHfFq4p8qk4br1dPjVjyhbJ3rtVLAv2Eg5KrU",
  "key18": "34exxhN28qBVKyKaSKo2XU3VjXZtfhCyYu9DzcZn9K2FHhNXj1kxZEgcYZaBRGy9EX1DREtqKQiw6CCapXxzVAC1",
  "key19": "GSLRJ9xGxXrnLtZ11g14oMkmXfmF9D1JNhHwPJF1Nd7yQenNGQM3RUZbeyTq3GdcmAyCEbRwb2DnHx7qYWiCVTR",
  "key20": "5AVmWBB4ykPSXWiCRZGBb5uhrwTbJgG9JjocqFWxDozzhQjfZdniEJmjPjnJ9MFK4DVtfUDyYKP2cZzRmBxNMzN9",
  "key21": "5oyEmcF1jaDek3k6ojMjzkVGHoCWZWXREr2DZN1YCgzRaGbZGLte4TvRhmRZsz7mbS2wu28n9CJGYEQ5eEvneXBF",
  "key22": "5BajPPbqBStXnTb5FawcvzYAcqv1TEfJNs3mRnDeszppmCaysfJNajahY6sc3RqRPQaKZTdsMQZTpwbUxNYcz9er",
  "key23": "Zhp12S2EdPDZuNcpbeiVzuPJ4jhDfvw4rEpcQvjuu8fAAXgQRoEVkX4G7nHkKLtu4DctHUGFRMYvSRMUnZURT2K",
  "key24": "4VpqUDwPPBhHoXTfNh4tr2vbkEXK4QuL46qYLvu61GsEES6vfXnpMejkvArkbzs9adW7k3Kq9phpyA3VVLShHAje",
  "key25": "4Q1Ys1oC6ez58hgSB5VcgkCXrdZZhwcKmbhwPnGK5Y4HaDCNEdywnEQtb4janTdP9RgaHCdUHekZDqWo2v5xAABx",
  "key26": "3PJcYvq7a8zPLGhMmJ28qKRqtgfiVoFpDxdq9GG4Syk8WMvay3jMDdfLCkmxYYuLUv9Rh11Z7JqP9X3gcVZoFjmi",
  "key27": "4wS5f2BbCHRbvrSgXtR9GahbzMtQJKFBkgTsxo4EamohCk2QptLzkcXnnxEK7iwNdcP8fXrzdSopqVg65dcHxWsm",
  "key28": "3cmExSEy2SDC8Q52KxHX3N23kgDuH4GAUd25gimDpVFbTy2ZX3PyhiuLQfdMq4sMZRxJAQ7wJ5eL5uePGsXiu9Vj",
  "key29": "4PFLbeRWaR8pysw8QqYkAgMrtGgWPvyYPCSTfKnvLnhaWGXLiG9ggu1tCyrfRD9LQqKQrQgmfjW7rACQ9S45RmJs",
  "key30": "4aZgdaTujeRvmUpnfVL9DBpbsCzh9iDs6oZYheWVfc7KgdwxFL4zMAkxVLSYT5DTodienyYz2fhb8mubCTzFcMe4",
  "key31": "3jguiMxaZj9w4cidwNjmNFUHU4pus7e3nupSFKCHx586sMJYcF5TBcrwqe4j88QhVCjFfBj7ZJE3s4jhJwr4XFu",
  "key32": "4imddogVTg5XMYhpzwTJgDPCEFGXZPwuWLxbE5Ug51LFin4sqTiNs5tYcRVhKAqrPSsNn8gD43w6cTSkeDWBpCP9",
  "key33": "4rgBCg8doeZGNMwEfQmCks2Qgtwqo7kiCZ4z97rhXAr5F4BbtVWJXFEH89RZkMWTT8UCn5qhDXvz44mv42FVF8n2",
  "key34": "4YA9UmrrmXJJCdrMWVWChyetFPyYazhrQCkfUiev5yn5qnUY7SxbgJ7EVjVEBGmzHRwoVgpjNNvQNQvB4Tv5Nqbg",
  "key35": "CSsJSefYRi8EEtjvf5rnRoXDctAAWB9NPF1Z8hX3MrssSWFeaD6enxPGeHpFuzjSeU9bMzUG8sdjNzMrJFGNMmF",
  "key36": "2JKg8YRvZBxojwAGeQCL1V6hGW9SiHCQaufKqfGk6Sgw8LGVpmT36TQyDvswFKWq2mNAtfHEcJKRZzpYp13TPfbf",
  "key37": "MNy11cH3Jx3rjhL7ktPjW8XHBXx3V58PNWT9MkLU2AUmtGZr9AHHWEWRvKiK1ewBN5EH3RxhGMz5MkvR6ueqiN9",
  "key38": "545o4yhWKxEiw4wUvpGCB9fmegAipr8MhiCtP17JjpQsBf9GhcKBWZC7YQib31tzNy7PFgwBF9sJh1VUMyKJwxc",
  "key39": "5KZf5W8Cc3ChHwjvT7q9KLK4zHT3VfmJkER9cGZypSzwgxRAi3MPLzsvAPw15wWZdvxLbw4UrVRwpEUcYtfwKCwJ",
  "key40": "5CGJ6cemnDSZteDtCC2v7h93a4L7eoJDp8ngRZfVUFxqSmHq683zr4dkJudgU9nB2XAowa8JCmPrV8KECAoP1i81",
  "key41": "7V62ZMwzHkxBMgGqZgoeywHDuGFFdyoePpsvHF919CZpgsZBtY4sX5mwbNyuxe4vQnvBCuveaoT3Q3nKGRXhDHQ",
  "key42": "QH2qK3WTXeHHmQZ74JBwRZ5LU5x1U2sLeebSmRHrqxQQJL8ZGgXvQVqAoGDCxeSJk7gYJqxdLjgJaDRV9b7uiUh"
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

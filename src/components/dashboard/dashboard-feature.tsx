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
    "5M5JZFGNu285rDL632NJKXuZZpkWHaDVShv1MFXhdBA9j52JP4tmuivT8GerPu11xakJ1ecLhiYFGyvyKbPdfYfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rv6Dh1RFwQugTELyJ815Zq7UQs8kMJry24Am2eiQum7CtFMYGgP82KTo2Mj5sA7xMENNdD4kHx6Xwd2TFFbyNe5",
  "key1": "FUh5B3UtQudzkcJ2P7qdp4PGFere664SD9193dZwpq7VQbPSySuCaxcTV24MD3GHEHwSg8Mhipt5rsnhjoM8Y2V",
  "key2": "2vyhMxdLGhfK78eKSh2fpAKRToaiNKZqFR8rNQkqcscvtdjU7SHQqNTgGgfipzXDmaQTcgvmpTNhgFtUhoAe6Zqe",
  "key3": "36akve3fHpSdz2Jd8vL4ECYDU6XcokYe9TE76nxgKYyvQKpvR8h7Ddv5LWgo9XbcwDi9KoqNs6tyoaPw3yJSXhje",
  "key4": "jHXZ9yuappVKuZSNciJ9ecVLY64cUbAMKxM4v92Er3HbKD4kSCgKthvKVjAuhdJ65DjPXJuYA92hnW92f9N3762",
  "key5": "5YA5RAFLuv7w6BEKvch41WDCr6Jbt64Ym7ckgieZ5HqUty4uAo9Z8tETobPW1vZrcx3PAmLm3u2fN96oui7yxzwC",
  "key6": "3vVoem7exBmAMyr1amkEpjNdaaRDHyETT2evhooRgbERc5BkfrFziJPeF5TgT2SVowHqprCiu4eBNZ3zk3uBN6Hc",
  "key7": "47gq9N7ZbaBP1fmKNfNLUrx5EN3enH1qDyftRoZh1YLdApRnaD1R7LdJsr6pFmH3gemp799aRDq8vMEfgBncoqf5",
  "key8": "ZatAVmVGBWYaRJSqae3ALiDbJdZJ7c8HBr9ucdKAYnounGhdTHMFSdLorVzKztH3DeHMvuJuXcb4ZGrxYR1f2mP",
  "key9": "2rNyCHLgmjQCi579ZxMHumoeixss3LpTw35wSHjkBKWxAJDxebkapZ2qQ1FgTiY1kNt2kSSCAfzAVH6BXnBNGNR",
  "key10": "2Z2141xhT1Dj84bnKD2HR2gUg12dZjYr1rSK9bVX6kAN4apqRUiZH24bTJ9w1NdG3po9KPyQLbxak4sEDk6F9MzV",
  "key11": "2xEMZjXyLgN2sT9XbqvKM48FA1kAPYitDHuUF93hrkkZdBYWGMNwJV5U7UMF2p8p33x7TSYHman8CNQ329AE1Ycp",
  "key12": "gJ9XqrJnQwhzSf46Rafe38TfRo1UFFZRT67JfovDmkZpc9MspiTYfVLAWtMt4psfMzQ518cxyn8sKNxN78SUuAR",
  "key13": "3wMDiL8XQvymJEb7JWZiEaqbYYKHPuV5gJY8KNCXPJsV4EUZrANBku2gKByERhw3AayvsRDFeUFfLiM1yVgYtsDm",
  "key14": "4w1MQuydnw7h3r7oTBoP3vSPSCuP6WcLnhQ6vjGVYfspUCrYqsv3QywQaVyH8CnXh6z9X486CMc9tvZK4K9Jhw3X",
  "key15": "3etMvS9okHyfv1Q3s1PfnGdebBjvHs44FvtvZkuQLXQgXkh4JA6bwF5Udr9yxEegDs5GsDP1yvbrSuvHG42NsMbF",
  "key16": "2VXgnEzhNRUJozv9H8dWW4ksP8R27T5L3Wp4Z8Hj9yQahqXyD25odVsftCaSnkQjCNf4L5WuScc5YYUfkuVgv1ug",
  "key17": "YqnwB25DwGtSaKt4LwLcagK9CxuSZ3tfqG7pagNUuFGqe8oHC33r2Exv1osMQZ42NbYCbf5TJ6pTdAN9wdW2oJj",
  "key18": "5zcyKsUhDqmHAJjq1NAdxBNc5TN4EGExqeAdJR4xaH6TbWR9FoWJ7pXszHgs7pJib4PhNo1Uu6Luzqji8ZxPaL5r",
  "key19": "JQ3mpN8JWGXmMDGTyvLYeiSvFTDbBnHdMGWQBWwnqjFAFxj2g52maAbLyYiazuqUTRwuSnyrRsiK1TKMnyo2gTF",
  "key20": "4KbtUJCcetQBdNuanbRq9D5vFhjs37EpRbf4xCUCBJ75XmioWWCV6ZMeMKc9DjcE9MGGKjthiiia1wMahVcVnwsW",
  "key21": "FCWgUs5GJ1215bVMvj8nvZf5z7EBU72RupTJbyjtCbtUddkoVqYH3ZgXQbCXZtVHHxg1WJE2EBhsS61Y4pVeGqB",
  "key22": "3fHsF6dC669ZwAHm2uNTto86NLGWAeE5WRwEJm6L9reRNJ4t4gHmxgssdBwfMAtPLzGiRC9VCyeGwH9GF5PccpR7",
  "key23": "4McGw51sMoAPMsG84nQu6diaHJ7XV6Dp5aR6HwrmKERMqTZEA9uNsYHPdDqzDWTA6MdWFUi2juzLMbr5DLfNAyNy",
  "key24": "2i8UfSSC3yW5NC6PFBfHNjy8uuYYQATGvPNaCV8FrfeHJ2BcNXCAh7jPHbrtyaqbHUxb7oqCw5mPxzd1uSFZSZNH",
  "key25": "3UFy3uHNL9RYWskJ22RuTwGsbbSCx7FQUqiSqN7p7Tzif7RM8adpoFo9CngiKgLX3Xv5kWdNUNgHn2WYS8VpTEJm",
  "key26": "pPvxieMaccRwTcniSGfJWArtFothPd3yC9ZTKqpkQCrzfKU9K3YZpv2jMMeDeGHfxVci1dprFkZ3AJzRoo7Rjk9",
  "key27": "2B2RM5f3TGxjswBkw63wQWXQYcnoBaeZBMuNu6ajbWNMdkw3pdrv5U7UmavjTeyL541JNozBwpXyKRZNyehJy2pd",
  "key28": "23qo4MZ5hLZyMHJN79njkYuTE9GGAqE7PA8t2ezcw5aUF2h5dNfK5mX6FFCK31k3qM9KbktrvR6SJk6B76CEJ6vD",
  "key29": "Xuj1bWQpN46nt73tmzrKkjzszoBNqKNQuKLGKp2bcyrNrpyJ73KuFtBwNF2CyHuXjTWpp4zWz2WCSVcopHTYn5a",
  "key30": "3jKfoUj99yfrQU2Z6eMHeAzjDVeE48fUkJXz3fZ7LcxBMWFDQHpYHJv57HxAxvZdkZ918AHA8KdYQhn4LzBtcfKW",
  "key31": "32eY2GkKzgcYtywnLNrQ8Y2smc5YTRWvQsD2RHgQ8cncRzj2wdEeodpZTwn2aR8EgY39XHcnRc9zrZkmdWrmEsbC",
  "key32": "4yaDGfvwiLydN5eXRg11ToZiBSwXuWo2pV9fzqVSM9fruiBBwELwNPTwAs3ieJAwC9ofZaeD2WP3mXLqwMiUkEgc",
  "key33": "4BZu3esp587xStRtapSNZhqNQZLreh9VDtpadCVwx2hZ6cAgi4kgtnEhK4GMERCeaHabjApzTKTswvpfSZZe4XBq",
  "key34": "jH2Me6GwYMsoiFeaPkoY31NfVGHN4DvvYU9GArE9BsipTAUSPWyKymkfFHMwVpsxYntWACfRyXrfsVakePgzoiC",
  "key35": "4q9rJ2gGqon4VgUWCJGhA6xJSvZgeekF2VQEr8D6ADCdowpc4GLN88jcgdp52Qty5fMjWZPFPvBUoe4TWc39erHs",
  "key36": "2moN8zsT1TPoGLE7UmWcNk6ASEHgypFJDWZA27u2srfV4xMKPZeuQY1RGFxa55uXCaUxwfimSi9ABTGARmjXR4FW",
  "key37": "3CuU8WfH19vnvTcNTNNNDAtP8fLTffbiJxTe9LuK9D1W4XZAumwPLFG3XekhagqnDZayy8qwUDCxVM6JzPMqnVhS",
  "key38": "PL4rb9nP1yckXkVr1xVwwuYG3z5F1yYbB3CoSaX1d8U7i4LZazUr41y5rG2n2SAqNZYEUZjGz8AsPWGxuctJD3A",
  "key39": "3NSoSUfTkLP29WeqXoYYoao8K2HuJxKPrAN7YdeuHfEpWg7bVvpJhosxapLG2iy6FVWowUh5FybL4jFriYQwcooA",
  "key40": "H3n2ALWGC8SANUvX28EMjkHoe5c4tTAxYppESpHNkhDTyPZWoJ2WpoTSQSLif4taGqdqiU1N48xGNRNGkQCaro1",
  "key41": "5SkaFmQEExbFPjKkkEXo8Y6rRQqEyBWh75sG8zT2E9ow7rcdBYyhJ7yCekgf2qnbZAgNWtLecUvbmfqFrYngDyse",
  "key42": "5uFGDXh47MWjAVZL1PgwhEefCaCo1SHBiCETvr153dX1rQmTHs4UiQ6wNWZBoFWjQ18LuuoAMwP2tVtTFeYMS2tp",
  "key43": "4yEcp2QomdLdK1PQXQjrvVmkzPLHvvpDwJJwm718Xx5xEqJDxEZTtSVDbm5zS9FqKJwD7ARryX1MYuar5gziuHmf",
  "key44": "3USiE3WQiDV6w1HN1AA9RkA2e6eziLfp5yuvZAq1qre1zQ7frennhDsKkujcDEoMLcb9nbvpFY5f6c53kdQGp7dQ",
  "key45": "2bu8M8NwFfmiRsgBdQWCZdu2zzrk2seZC9u5RgWrqZ4DkgbvmpE8Q1ZdF4efiKC1iLTm6sTFvFNvciNzb4BLdU9o",
  "key46": "2CFjcRjPUpuQtXfMP1UGJgVeUqa1EA9SMrWKAVWKeyhtUUEgKxNrzWuczsP426eCoEonYad6rb66XFnyjXeYyXtQ",
  "key47": "zi86udyNt9sF9F7VLh16urY1Ww1E1xb3tBYTUgLj8M2fW7HbpZQbYTVPcb3Gf9K9KMho3xqK6zbfWWsT8fkX46y",
  "key48": "3syscjhiEbwF2znt5TSUapGfFzCAprbJuv9RdVJHB4nFiePZ8rEL9L5XRGreYBHf6M3rShGz4BAzFKHNXtNNT1qK",
  "key49": "2C96rFE3dbKcsC8uUUnpaaYVSdYmHjs7joj2ykiayqVgrvpNtSMCBSdHkPGkxQbs3vSHV3w7SJPjB5iP6omWFyHk"
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

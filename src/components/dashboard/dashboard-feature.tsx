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
    "5HC4FCfre9ST7G4Uw1CmVbUnCbdmk5pDKa9n739o7MNu21cE84YQNr2tSWdcH5GvjExM3yaD8eXbTsgEcCdwRVdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvAqHtpVWewMCLnBwfYdTzrhDHcr1V3LDR5YRs1HM1A2w8YsrHpFL1MFweZSfFwA3ZEqDTJ2yEohFpBaV6S3syz",
  "key1": "41QDhfzyt1EScpxp2JwoCGAGvKZaoNiKAf25TUfdNeaBY3hhSdWSAHJALwPPQs64h3bMP5ZmD6FQja5v4KGuKM7c",
  "key2": "242enYx91qboz3ArMQajVZyhsHEvoBNrVamHaCUjBfdbfHYVhhPgiGdfHhyEq5ShXyrhFiHZzsC5fbhoTaHhVbXG",
  "key3": "2XfdYCgAuCVZNZrVTy6LUYs3Wjv5uVQusVDQNp6uL7PRjpyRaUWwfEXyKv57UGeZLfAhPy8qFkwredzCkf6pDh2W",
  "key4": "5CwN7Gz94kgBvrMcTJQ5SEgvE8faixvtZVAk9iKuBzDvhL9ERt6sm3fzKoanSTrzmst2jAqFcbq4vzQUgjbwqDG6",
  "key5": "5vjGNhDzjZBPV1DbDaiuRqqgWktdL9GGW6Mik1azdLiXjipBM1PFKK5rgwpM2VMha1szMhgETjrA9kfVx6RreafA",
  "key6": "2uVEJdHSx3bu1Cr8wHxujYVqWvTqsShHsjaP1jHPdZp1RgH4VpeXgW2KA6ySBbnqrPZeyA3bGqn15ZuSFcgX1T1e",
  "key7": "322hTTCqV9Hz134bR9ty7XuHEXknQEbmCkpxCENeY3w1qsiiempKeo8ZiHe59z4BjBHpfD7rbZ9fqPL7G8kPbCLq",
  "key8": "2jGiTQHDVBFc7jizGMDVbh4ZL1xsyWCqduzs5PdveMb9YMTfJVL8vPkaMCVndKCsPDmsfD4q3QVtua4wVjWLk8gP",
  "key9": "36zg1xxWDBHYgfT1gfqiyDToNy1a743F1P6hXNTLzbhrkAeB6qALvKuFHjJNbXjfmgghvQcGdeKWAhaRC8NPiNsV",
  "key10": "4uJxGoGvyjRAK9StgR3LFQjrgUAyMiJXFdCAbeGPRCYLZK24twD7FgHt3vnhAa3S8tjvzei5wWrp7n35b6rkhwGU",
  "key11": "9TsyfWmpKpA7xZGUwYGPCZGVVYdf9gi6isuWwx65gwD1thNhQDwzyEAyRKZJt6JajxB1qGFXxr3F7BjidCshTja",
  "key12": "4QpVEQZ3xpadGYy1Ckat9BUm38A7a8B8jgd9XAPNnsqxrRG57FD4VZ3zQeopgVQAPUbKL6qQRPosWQkZRPRnuWhg",
  "key13": "2QTAP6ginCowPCr8bg3XYaJxCr48uffpi9rWBKQ8R6AUtwhPPKw8rDfA8Vsuh7F9n3mtdRRSN65Lqr1UW58QwF81",
  "key14": "2C92CVXDyXuHY1ufshx4H3TL8Qor2BHhJPYQKN2BZDTmYpGbqJdmF8zxoFZHqg2wnyHoGp4SZdsEXy7sSKrYJPh9",
  "key15": "hDq3Pg6Kc27quYiEv85Cyw5BGLehAN3JoH5uTpLQJS46G5PpC3WhCS2qZVZ1ug2nj5w4hVakpAkt5n3abHBVgCF",
  "key16": "rrZKzBhYumkhspCBE3zmsr2bUWCZFGHoUgvgsCNpQuHYqppSLajz7ZwhYan4StTH4EwaCbLJrFGcFwvamFMQRUe",
  "key17": "1frQKCFZVa1tWjBPkAvVA3zY3NKJATZxHFw1Uvnad1qfpi7SznRNNF8RZv5sCxdw5PRtKPbnRe7X9nqR8dULgY1",
  "key18": "18F93ztgyqfw8qqcsZenSXAsv6gtmCyQ6RWXXJ8tNdx7rhBPTSUqGnviR9XA5jkor6DK7wdGcwry5xpMvGRjD5m",
  "key19": "4ChBUf5eHYuCxrM9QLYQv68B9MgcsiUqVAyyUzgbfujZSUiAGAbKczdNCgVq2dNaMRtJC2ifazaegFQjjdwaTYpW",
  "key20": "2WALbAyShMhi1YZuaBzc3mccmNgo1Z7zgvGJhovxF18CjiLCTN6UiUm8VyckFKg8BkYh3b2wznyFrYfL2c5arYoi",
  "key21": "2TwWZGw5toZoLysG9JineJ3uy6AJZVmWQXokyttrm4oF2mcuyHXeinDpq7QaokbAJeh9CuxhdUsPFGs7fkxvpLyV",
  "key22": "4ZvEmFWjdWgSV5y6aTGKDkpMERJCRAMExpkAziWMXaevUpsVHzGXnGUUL5cbMsBAus8MuLz1tZdCiendtaXQ3p3C",
  "key23": "57Y5hGoDg35wtufvuwL1bSxkgXDziGXFBbhxdDcGgcTZHs82eKjVnUCy7G1kt8qZBqEPT4uVYiefXQPXPCQbQUcj",
  "key24": "5HzTB5BvouiRVVdaRzhtXoEnN3kyWJ45gTouBYKQjyDEQFK6dTfD4SCwrwZhpepyoPqXLeDaUGhsTnD2uZiSuA7Q",
  "key25": "51SxRoivPhVgYM5uSoxpGJZtzxs47ibsk1KobtRFQULdGYf1qx3smt5qekSNUTJvUB7RZK8qmKkJ5qZimxY6P9zv",
  "key26": "66YKfbsr3UyeLSGqiPst9kN7L8yi8dgqNxTB3Q3rPwWr6aSsG5gL29m7hWBNoZUeViX9iwsjivBUp9q5qCjbP8vq",
  "key27": "4aZAAqSzBvLC3pnMUbST74nzoHG2RoLZ45SC3Exm6eywXswQkRKSud39xnxgKdTrjg1p6bM1uVVM8AU1h62BGCd9",
  "key28": "TXucVc9RawYPV4jBeRSxE8oAatTGhMtEvCQGus8Eqq8iLWJsUmehgh2t7BRQtPuh1dcByHNqkcDaU8xqKYJaR9a",
  "key29": "3F3mM4VEQkT65knENyPWFcUsgfj1RAxeJcSYAB2wbU26J6w8vZkNYHmvbuc57ggHzKbdyhfFUE3QEfJGBVuuxzkE",
  "key30": "VgXyFC6fyg1gECZ9KPMqSjca44VZAeQ2BeuWS3EhTCds4JTbu3ivqKqxtBz9pRY6AHNuKC84wgwJLcVybe7iYZP",
  "key31": "51dKr18PziYKPAUEuht73T8myDTozuEYnonCp5kLFjdvo5LpEKU1vZB7jEp81xsDaRGvjPUsxdFVtedH6MvUazHB",
  "key32": "5fwvgpmEigzdDcErPPaFjeRb9bu712eMpTrdewnTJkLUrgkoZ2R4pt5miRrTkW2Yh27TAbJLTj85h1d7tjEdMMct",
  "key33": "29gtqLwqpjvb22qtGfCU3uV6bMa61ZEJWmzokJ3W62VnbyNEWanqjCt7uiarvxcxVLquuhrkJYbnArpYPcvAbCaF",
  "key34": "2SftcHyqMNepo81X8Lfz6KHvWQscN4XiWAs5A5mgpeBzVkhxwyJHu2QTXLT6Jx6FaKpUUqbTb8qMoFJj5X5yLgty",
  "key35": "2igV8K57GNWNGqPDZLkcSZknk3oK7g2wW4Q6sJoU8i5dzfxLCtsny2krwV6MRGZkKSAsFYAyBLTAWMHtP24pzFNa",
  "key36": "5qTWTmT9fErqMDRXr8a2ZocMmgod3p6sktYeFMTsqS419RyaEMWdgUKy9zR2dCq6f4wvphFm2LXrDkCTthnS8DMG",
  "key37": "3SS48oJu3xcxUjXDghtVzePqgHBmMsaw7Ftw6dWdvifLScDhpsmC8GznsyikiBvuCEPqmFNZnqnGWJeMfFN5veeb",
  "key38": "5WGdgK1a1xTxDUB2iPraq4rMxc8hJEubd5UQDBBieWBxuczAeJvY1iXAEdw4YCdqcLJFHgFdKinpB6YZrgR8DCv8",
  "key39": "4T3X99CZoEwsAGLxLVZJZT2tdxHsommu7TxvX97Nf6qPkDxeCZHGg8CmFKWHvzWzPX3HB6aXzAtujJeTZUUc56TH",
  "key40": "4a4B9EUmNXK5JHrKAH3qixWWGehhf6qgowmFrPFLLRPp8om8S3qJmXUrLf8qrU6GYqUawqtKW1GeTVTMzP6P3yCS",
  "key41": "3NjgJ2FMQ4jfCqyCquEZRtuGYmtDivqVZpXB81KaUhzYgDXbdrAQjkrgzx8sN88ukgGd6vLkBHfmWkWe5zB9PCt3",
  "key42": "CjcT9MrKNGMBoA4NhvMabtEmW7vGhoWjbK7g2b4dkLue6QhwQZQNL5BzUTSv4i3UVMGrLao5XSht6RmnCFJM1xh",
  "key43": "5XKY7SH3hSewsrje12T8BzsRVgsbESxz9finw1mkF3XeNSRBdvQSsPPwJLsfezwfQc4SVTjsGoPX5jUXWDZwbTWx",
  "key44": "3ueNPqmngD7ww6VubsY1mzBC8wg4whMcZQTVMMHTDG3TJEKbEgmuScaWVM2uZNz92Nm88z4e6quyzKp8bm6QboAQ",
  "key45": "Q4TBTLjCoDEK6aBeEnmdSn1LtgsB8DyN7X6gV6fejtFLhPbHTxFaNhD6A3swZ2Zu68487NYBM5q6KGB16V8tXaD",
  "key46": "7NK4Q7YsYN5anBcKUMkCWbiBifFjDq2kfWz2ttryBznhgnfkcHGJziBgjhrzaKPb5wpPfBQXHSCmMFpaiVVRfsX",
  "key47": "2VyRJJTJ1vwE7rbCZhpgmhVhbwLLAFwXqSN44f933ngjp1KTPwtGBv9WExC4zspvUvbhjYcrTRzJmE5Hej7qQs98",
  "key48": "4Dkqppc7zr3qjeq8GZoshEEicNNtnczTZKSnQuvUzJzJNJgR6uJRao6zn6VE9ykLhuSmXkNDn7DrMcov26q94nit",
  "key49": "3UH7cSTX7CWbbAYFRMiX3yPTrV1TPpvNohk1wDCPb5zcseDtNuXVdFHJiKobschf17H5HeCDzD5iLUh4E7GLWZie"
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

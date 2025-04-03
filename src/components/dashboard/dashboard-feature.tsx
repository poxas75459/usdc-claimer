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
    "5sCseDdNFUsdAADfVV8X9vFLDG3NMMFG4RhkwdmRm7XouBddT1YNSeJntYDofwrzoG6kk4MwPaE4M8H95dQvrZmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arBprYmvHa8tVbYuCEZTVf3LyqBtEevngsKwW9ioGi65qJzFNpdReXTxT3fCtdwpgdsxsvd4pQ2cQHNZ7e5fye7",
  "key1": "5PuPAHCQYPrVzqVKzm4azW5Sk2oAyBcuEpE9wG4B4uK1TVfoewhvQjZ4Ruw6gM8tkYH5YvfBYKq6tcbJ2zzsJGjf",
  "key2": "2nkSsZV3UBRQadWXZELWe6H2xm1bUgeVGofemdsSYDmwqZeLLRkqKWnHfEhaQM8GYHgsq8RHnKGcwu1VauZi8Pem",
  "key3": "QRG4uchtjYY6bvMaX86KGVGWKiJAuW3XoR32KVyx6LkhSX6ePo2qvp278EpVUiVU1Xh5E3q4EvWXPABDmUVmZ8j",
  "key4": "2UnsGDek86AyqP6hsFniiY1Jo8S6tvm7Tw5t8RGQunC9nN1sxam7QTQgUm2TTN1zpM7ZGH5b8DQUbm23kMAEJ8VM",
  "key5": "66HSZfBvSxxhHrJDvknx8VVPpoeSA8dVKccoq8pFptCBApphduwKCfY8Z1rTTFJWXW2K3VAZuzJmNmJwwLZ391vZ",
  "key6": "2zbirL1GSEV8yZaUZBnYfu6v5bKxmv68EZXRCs6SLzkDNcaRc3QNgTnwnGBi1SHWmcJWNYyEQhc3NWH5cyJQXp5f",
  "key7": "2G5gvCnjaonyPmFbp7UVK6uz3bURDn9y5uAcy9jfUDyFyWTuFkq2a9d2n2xzQ8WErwNEqeZ4uYyNT2CLjEWsfGXd",
  "key8": "e28oFZrK8rXQtYHnWtrX9SvRHvQKkmtPYbTmcPFBqmG1RgdARYUP4dGv9kKo7WrKZwjdk1SSknQb8UvS6SVfqcZ",
  "key9": "gdzuK8ZvJzPdVfhQt8344EQcKY7i2bGbCTqAMcTpMwyjPfF8EN4tGHJgc8jyBcVrpLDnnSuFJ6VBgLbVpSWdpEG",
  "key10": "2PWUJZXXpjXRk3EDiYeuQeLVGCmbS6iygDAZHcCJviVbJ1NUwdLBmujXKHoJC2d3Nc7TY6osR4WBW7yFXfJqPaxg",
  "key11": "qqwHqTGgZpBGTcpF4kEGUybitR44v3D6cpCnFL7yroWj4Zr5HmvuvbSBkJ9fgvyrUVeDzxmQMqVT4ZGzJtCyLDJ",
  "key12": "ksmpQ7QjX1BbvX2aeZYYh36f8oQtLqPgV72v34FX6ZMwAjkhmknjqN5MgNPo8Np7SNd8JagfccTvqm2ysLJVZZW",
  "key13": "3nB7y42Mx5Bxafb9t5m2jA7Twc2YJK5m8URf4EUdP4KZ4RqZxvdTfb7MAmbvVTAXUR4n9aEoJebSigKhrE82rG84",
  "key14": "PbvnT748dnxrGra7d8sZoMhud6BoYoSmKr7Vt9HnQbxWR2es6uLYdnwcRUkei618VghodiyngPURzaoxtt7stXL",
  "key15": "5stsLaxvReBob5GKwN4SzLXAb3KVgttGVxuhxh77AGw3LevcDEFjFhb1pmmD69aUiZ8yA2jd8uzwv5rSbQ45jzWw",
  "key16": "3xXiPNiFJtyyWDsrLxKqwVc2LMpKGvteVqSNcqfREc9wbTexm7neXEZn1BRxpNVZejFuoo3XVzgyDDovVWPAeFS2",
  "key17": "m2y9NhHDnsmuwsTs2uHZnJo7eJdcv7Lqk4idUnjdfDEBjpUHxz3sUyWW21pgxaiaorATLhHJB5Vamwe4g338Drh",
  "key18": "4kV5Je5hHJGsvCa9cYgnWgFjXAooWGnWGqt4ZNQB5nAq7KULKTGLsXgXhJg6fwj39Ly2rY35uNbKE1CdkVc7pMQn",
  "key19": "5UJE5RyaKdJEYFt9Tw6pJYGo2TTK22vc2fFHrQJseREQXtXRZ3xvuBiLXpHRxcpNqkfZxPfHHx4iJU8sXLKgKTrJ",
  "key20": "JJFPuN21vcXCQH8RsRSKdPX5eH8UeQGKJKnLsRJHHdgLxGkC9JYQvXUV2MfoSrjyGutMuLQ2NL6BPUu5Zg4JCu7",
  "key21": "AYRM1BiPSuQ4TXTiow47T5Naiv2kqSvoLHsodmyuHQYXfwjz4Nzxkp3KgJxpxTfyhptDG9SjXoe6E4aaNGgWuTh",
  "key22": "57Xg2Gu1m9eR9gRor2zFo7SB8GeoBszDw5NTWUNyxtyxGJVW1vjCNsr1ya3ADt7xNa84KpchCWz52wUhyDbaxTKM",
  "key23": "3SaSf4DU2do9rfCTXirLLWL4hVvaeMCADfZa98JQMtik2wiHJcjFTyKzgXnu82sbAexj11EJhS2z2J3Mh8HT6ty2",
  "key24": "31NZQmr4WEZ6KXWLaHxw2o7MzrMazwXZfyvAm1XGM3F8MWtR8mGAgjPZzsfc2sfgBoeiEGQsAdy5X1sQgyFwY14d",
  "key25": "2NvoWaVhMatdntCYH8Yksbf8JY3b9FJvvS6VQDogTHBDW8ZBo3GEXz5LkGoE2mfNBhYuC88SfvR9BKZ52N9tmVYe",
  "key26": "3Uz8mia4H2vUaNCfUcisJhagVqmVjrg8FCNa2iGiPQQZg2qzA9f7Kfi5wzmsWnmCNrrsdTaieYDAUxfz5AhMnVTE",
  "key27": "41g3ehBFiSk7d6YQEzRo8kzEfh5YdZfCB8Gc271TRzD5FGxyWq89ovsarMGzckjdS3xMgKrLLCydvELU8AfbKUJ4",
  "key28": "56oPbzJ9BD2JjxZzr3MEjHC7Mx5Uv8GUiUcBDABhkom51jFGTn2XaDXdYGjyVwB3nwojrH7bt1dnT3vPogmDWUZ3",
  "key29": "grBVGt9mHoXqRBcNr6sCy2WHHf3vj8pSoWLsudk84rD5pGCZLGzEBgCbPx8DAHULvgB9S1TzK9dFquj4nmog7Uf",
  "key30": "5xmEbLt6hvcKgjmQyJqVy6gRgQMzpmgLA7LfCCGFPCH3kdEPmSVMPc5tnM7m4kniAfwxPZQHHuFnxyn1WVpPS8Ec",
  "key31": "5aRa2xFk6oivqyaegUQufQeE4JYhoqARogy1uQ3QjGBwQtCAsFxvFATFQa7rkKSFKUtFHCMBgFhMGF1ikT746vWp",
  "key32": "3hp2QwAFUZtrXCJ9XPR74nRCjoZsXVYWDWTEiB6vvkaMiuYPRU3TnJbBsirU95BE9JKRx8KGpNewbnrzhv4vdEsK",
  "key33": "hUAqNPT9DGQJGZduo6uwiM4qKjzHtQi9BRDeBqNUBEHbEfo4Q8gqkEmB6fAuZVRNSumGrWDGcB8AXgpXisYm7bm",
  "key34": "4V8rHWQLaLUuMZXKKS5ouZFwVDQrqPGVjSxq7hWjXwbs9Rytep4tF9jvcQAHEHbozAhQv3rzCpG8tu5UTtGqEw5v",
  "key35": "4FHvLeAz8F4NC1tCHx4q6Dcc8iG2Ua96xro66AdXQL5cbeQnCk77eTdguHYRrg4d6F4QgLcKN5fA4nssfPuHYuPT",
  "key36": "2y6GukjhigFbZUo9atxopBNgJrH3K2ep1tSN8TNhLiCfGxhtjs1otycLjotG4rYXcJW7rrkYsjgqH4GHWkRU344z",
  "key37": "2GuX48w5uzntcMYRUhmAMhwKCK7mW7Uu5rQhH2si2yzLdt9pfhPTkJhU6NEoS3ZsohRWTGsgLzVS4Sqo9WGrs3Ge",
  "key38": "3cdS3jW2DFUFkS4TG8ki7bMvA3nD1vGFg5mdJVP5R3WD5V1i3sRNeAH3hkSxoG736o2QpFQxT5zxVgW9E2xK6Scd",
  "key39": "5CY7pZidZU7Si6qdsRLSqwGM6kEhPxbzymo3GpTCJB9vJXxgfNfaFZNoghwP7ufYvUeVmg8r9xon9hAf81tKJ2oj",
  "key40": "FszSXX9DTLjuZtg33j1udnyeCMaioYDGuByuGNkZR1qeKqMy629KSfJtWruG2KynZdq47JBNrWYDSNBXqr6cgvk",
  "key41": "5FmWAjcRXj1WLupa7J5GYWL7ybM9ApsoPgHLNsJJHNf5NwHmuCq5T8MeJUHRqGSjJ1Co6zpiwmMUdHM8V2x56dr7",
  "key42": "2Cu1nQhxfK2NVpqdAgSqMLU54Kz6XB9GK6MrLKNVcsqVobpP7de7vRUuqnnrqHqoJWjgEyqsFWoktiEehhMzhGdH",
  "key43": "5jhe1gAWbMqoFuNfkA8kVs2RPndbW9ybhwdHECV3XazvhRLGCALprSn3vjPxFAgaBzHm83kMiiGYuxgLwZGkmZW7",
  "key44": "2SW5wgY3DvVju8RwpUaeDkmbdntuhEZnWcNAVpdf3awwVxA9B9h7i1NAumcvQKX9dgooeHkMDWy2b5m7CTBp7DyM",
  "key45": "2MB1FuuhRgEJEYuukzkvKF4UTXY9qFicMCDjWyG6Czoz6SrcZ3C8rkURW1fMjH5Wwjqbji9DGHSNyVh7kPXePUaJ",
  "key46": "5jjUN37BBVf7q9Tp3x6Hot9PhfVkytzH4Eu8jDzomArLTMEGPtU7tPB86RuutUNL6JRX2mBS9qsrSYFvuqXJRL7B",
  "key47": "3PGdLT1WdtxbYM6T2RsuHpenm3A8FLCQ3EBk7vkCYWePfqJD6vM2QG9mCCQvmuDs4q66ZJjcTAi4E3NSH6uZ9iXd",
  "key48": "2eM6BmGpVNkiGPnuRZt2ZQCRTCwwsRipgXY5AbqyndGMYj1dkti7H8XQqza4RFMH3HUevmRUcSTDEnHn7zzBjaJa",
  "key49": "4iG4sDycLYofuNF1jr1Nakh7FpNwHPW3eciM8VPtby4oGScBqCj4yVpoaQUMR47Qbn2VMwD87k3uNwR74DEtw5X2"
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

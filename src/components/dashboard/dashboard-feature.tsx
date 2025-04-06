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
    "5um2TJjgpuhBJBoXB9nMb9qGV4kdP22c9AAuPUiry1PgHUnpi1QceniqBScehexaMScbTqp3rQun5BEQMK3omXcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jdok4ciwgr7RkyiQCAPbubkLLw4gwr6y2rLJ4k58LvPx8EYWz19cbcaG8G1CuGwieGdr4cJFcreRCCdQ6wHpYP2",
  "key1": "2LwDGYnxX8NL3HJFTxA6buoSRtShnBACZvdFxcn4S2wWAwm7FtpG1f9hwW9PqoHN1ezNjjWDhAzS8pj6Go7wiftW",
  "key2": "4BAEhAsBgEjF18pJvNPbJaENfmNoBYa2h94x9xnUAciVXsDt9T1AT2SYRDZhCYxfeMuzzyQ3qPvkPi8XHBANcG5P",
  "key3": "3NdocUmRY8a9gEPpiQdpEreEh57g8JAFStXvN2wZ8BrheMMzVU8cyu3QME6dgxic5feaYtYUBEBtdrPSb2Kc7qJP",
  "key4": "2VRBQnX7xg7E9whnxpdnxDSUUiC2gBLJ5xBEctU3pUaMRkwRjRXTzKN5oxUcaVjzPsSxMjbkSgGUEWFJYtjudqwH",
  "key5": "5k6URccrFRLRezNnX1cDK6LfbeqPdTBHpZwZESJirSfdh61aYZC6xidkaJHSXg64LdcQtt738xVABvG1ESGGHkLk",
  "key6": "2w4Q4QwuK3NM7KPB3ti8jfuEWUPe6cjE8Tm8kncWSTe51rQJv3u1xoM3Y6QZPXLKB84iEhRKZPopgazU45NYxDDF",
  "key7": "XHTGCX1ieGsySourb51KnYvQTkf57Pmfzy5eKixzBsgkXCqB6SnLEm1Vb5MxLwteHWrDPM6Mj1XsM427XJARLWX",
  "key8": "5xjAeFUi1oQ3zQdA8Rp6ghmBdQzqSVe4TioMgfkejWSa1XFsGK7zBJFroWE447W845RjW17DcN21evUYQLPWgdTw",
  "key9": "3vTJ41fhevp4YWDmXdqqPWBUt99ecYsGwTBM8bsXr8wZjCVwNuTKd7bDbh5ZuMyiVZpdfafaJ1EjgBQe937jJkCy",
  "key10": "5MGAn2nkSe5rRmEcLPBBn2r1GVcgCu78ghAJHMSLHpdmaPjS71xdQbasWeQ66VoHcDgW2xxd9PiuEzmfHzyinbhm",
  "key11": "5dEQUG72DSPPNq8FTmDbyHPkWyYv77ag9VRjdvs6u81BrN6SLGh3VykkMSkKHBNKaknoyj2reTZBczXHNJhPnsF6",
  "key12": "5vKrt6qfnj7LXtbgCFTT9W1PT4F8feqA2G25eFRkaBkgYGAXHeVdo8FEDbBSaK7HssdpJF8xAQHu7Naeh2xUCGCB",
  "key13": "2tH8eriGiM2MjwXom2j9TVJ5CRVckK6SEdLEpwb6EfyJw64wsBpVCQJ21fpNrE8gVtPgangURSGNJg3UKx57hMw1",
  "key14": "4Yuxm4cYRBei3E5dvb9jHs2zBnUarJy3HAUHDsoHL9DkMyzotxDtumf9Dbh1diqWoYCXkRRdcv2TuCCHuUmGZ5zN",
  "key15": "bjCz5WM83Leq5jFn2ZU85fWYcMpdGU1rfiveCiPwEZSjsRw4VwXNwZktAGcbXRYJDVZeLE8AnNKssMmWthPZ5Bm",
  "key16": "4YFSKm2WGWTdSzTtwjdZZxhY2nSQ2dQoGFL18WLzTEkgrzxge5eBG5Nc563Yih81eCDvkmj1pwjv2nE5NyY4o15f",
  "key17": "4pXEi4m3gcj4CjbyEsaRFcjBKmjYJWnMshzdheqRMwYGjXZwSQnH1zDxtqGarhPjAnRpGk7ynncLnY54ES9FSC1h",
  "key18": "3tntDHsMdozvTMwAhAFwEen6GAHQ9ijUNyvBPAatXYgd5LBuGEwQf7NfSFZTrVfxEBdFCp72Zng7sQpEDm1qWMYk",
  "key19": "32NWnsTPLcfqwovMJpRxCbGQcTkk9jY3UVGx7VExPasPrxcPaPGwFzSq8fvvckNMhsifZDo6h2hDFnQ4J8YxwuTh",
  "key20": "4oVtXmuuKtx3azTJRf13iPyc2tG21sckRTczdVAH9L82DRjj6PbKNqhqGuKRXS5X7FYQKKHJ9f7etvXnaKoqesxG",
  "key21": "39qNvc3qT2C1XQ9CBE3qz9Uz5iVBGgWXfJztuzoWhYCnUgmEmzzynnfGJp1r6c1o2ARbAm4P3SC6xK8KuzoxaGP3",
  "key22": "46qPT3VzXSmZWDodGgqmcSbiLmUf3GHa51Panbxzpz1hCnejmtTA1KqJM9Gi1SMxWgU92qH16Ti94aBmFVdDsc6R",
  "key23": "pQmkoBxFxsztxoHM8tUiToSbXKb9si4M1tdLdrnmp6uPEv8hgwwmBE5dHqeYMZPdo2w9fJ6vDYhaCMqFZr3w42F",
  "key24": "2KatYuGMfAdAtEK9KSijNE4jBaR7whRTfrmQ44ng5TkpgJoiTogHdnnxrvdc9UUpxYgJmGudpwYAEfnTTtxpavme",
  "key25": "s179UJ5Tf8Vqmn8LQvBgMFBaDUebSTkfoN5CrGpYozKsKpZF3oBy95KMW1pcb7SiSPmc1C2bL39F5QDSXabd9nw",
  "key26": "2iuAEBQRbaui2kSe36sLvi4AyGh1d69F2xAobj1rVJkxH7CFmqpGWS9btQYYArURVQjaH4VSaut4c9SB4ucgLeDX",
  "key27": "5fMtHtJVcRsW5NQ4q5LkpMffN8m7LnQyL3RdHWZfF6D9wk23PWANMckFb4BbEwjtgzGY4P2jYdVBBBqMGSNsNSWS",
  "key28": "3enJJnEbeydkoNBhSCYv6vGj4UcQep6pus5jKeWt9y7V76vckNKLA6BfaMedcJwEhYGqbzUGKVU9jqHjHcEPP3HU",
  "key29": "3L1BLQXmauhx15CmHX5pVppqht1PjcbwFAiBSgyYx8qrjo9t76bnZZwV5h7Jp6s86am9YB42bFnt9b3tgL6bUj1H",
  "key30": "KB3Z6NY9bUQxeCuJ4RoXq1CFCN5eZMLrp8nev8fP7dWMz7JcxJ7dLPy3x4w1GHgnUoJq3SFC81uSw45LX7jPwSH",
  "key31": "3tZ1TnGuRinaSwPGgenoA1FKtbPLxrfQhDM49rUvYX7ahmKrD8q34qmtfWuv8CUYhjUYq8LohPgTgGuYeK225mRy",
  "key32": "5SwxBn6saJ3tCEkkqTE8VJqrkqSPKpjej2BBQMZ8PtMm5iv6od9tYpcnsnMceRntmXiLEnPHXfxdurzKu2dhFEm7",
  "key33": "3rBmGY31tRp1qNJUdUpeWk8UxstoAzxTzFJg7o8X7dHt27aqCKh41PgiENvzkfGaDhrd7W4EU3njSdNqzowgLVdM",
  "key34": "4zwMm9g6z4AHQYLju1Esu47abbU9JcTpqB29osJdQF9MM6euSebHPsb6zkNeZoZBHUb36tNLqSEz9bmuqepKaukT",
  "key35": "2GYXuG5BM3kYXJF2zPpr1mJvZufeKRtpZpvHXkrubYNpLcygxWiha66u3pdqj5JJM8T9WSnpD1aXEi9c9zRJyykW",
  "key36": "5quTNz1N5TcdJo4Rp2FjC35Ae7rznMGSdkTpm5JQqY6F5CDnXvoBSUvYzoUKCi4DcAayshYsVG1psQF7xa1okkq6",
  "key37": "4qKxgqAPAeebvMNDWoPvvfhZCbghJbjDAvF3jKefoydEMiDS23g4nT5eZmPY5SW1SyiSh41cQ3en1dbaCn8V7Wp9",
  "key38": "4LT3Km2561WKDVrfoLbp27oEVT2c3mN8DbicgtYaVSQa8VML4wut7MVL6TrhxeYzWpvL8fv2jc1MqLZ42mqHXzYt",
  "key39": "5YifjgSmnH2f8KdwuJL7WP8aCDKDD2gavTtvpQNR35YNBB5NaEJTRmwUh3tHNt7tDn7fAtugZbyf6eo9sFcsD5tv",
  "key40": "2RFozxKJSG2ChiuSnmTuhtHhRRpvBAixAALoX6caqrrzopquXEnks9eyq6xR1GxdmZUvKxWuH1sAxnMyczfSNdjk",
  "key41": "5usTKywY2UC9WjoqHp3g5jMo9XcUdJkV8WdenTWQGpEQXJsh11pcGUZ9dQaL7e9gJAB4ptLBaDs91t5QBRYkjFQ7",
  "key42": "412zXnz7ZvV6PhpiTGv8wXPUCNs85cPT4U3bESu5CHtVfJjhnPguYUGUw83yJ6YnhRJD4TuLvyCRjajDTmXCFbJp",
  "key43": "5wgbCCUWgKrA3syx6RiBtJf7H71meuHiGenuHqd9KSaqtLt843SkUm5vFwg4r4v6qvv955Pzm4DzPcpiYHCnep36",
  "key44": "4jTSWzivt837WXqFmsedqvdmDMTD2ZmXte2shUwD3t9ZDNWFhyuf7ypz2Pstm6gSuWkFvNU2kz8bVDQRUJfwvriC",
  "key45": "4Q9ccbPkgkMCu2JbSPnan1p228zMRFANd7zGiLMTdo2CcBboeeLW7b7a29hN4ir2durVDW1vsBRoMRTEKuYipgbH",
  "key46": "2fiNVeCZLpbpRsXhMgTtvFzRZPPSqArzgCWTeYysVFmvb2U4UnKUZyZF7ftgptwH5LSo2HQxyCwSs33m7jZkSyHX"
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

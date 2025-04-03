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
    "5vXv9sREAgHqZmU4Xyo4s4ysiy7cLD9b3DW5UsVYHZsqZHpxD5QTZe5cWCY9fv88aqyxE2S7A23T75HsYcJJLBmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bdN7m6bAXjQbqVQzacGdS49Dpi9SESReCmkRsuHeVciNChjSsmRSjRvesSABcGfepWr6nGmRoS5ABcLaCymRmar",
  "key1": "4pR8qrVULJZ1WYAAsi2yXWVpsPp2FU1QTzqEdegePxi7Q8LeryQFoS7Vy2QAPnqyyzRSS49BAvakVbk9CbhFf6cL",
  "key2": "5o3NgtDsJm97fKDW6sK3HwiT9XW6u5Js3J4zXGSXuM4fXE2c9fUY6RithDHcc2xFfk59eYyFxqyf5vcK5nqipYir",
  "key3": "4xnLsUdMGSq5K3tkfExkufFPczuVSBSb6pdKoXQ51JkoVEZfR4LKpisPL93N8Ad4PHKqkFUivJXn8iYhc4Qn5Bta",
  "key4": "3372BybrEqPXXD6vX8Zt5RBtFK8xoTKK1NYpSD18qoWVw59gnSC6jnrfr3nGw6PDSNnABnuj556YMW8XFsSPuySk",
  "key5": "2LaFZeVwUKEUCJxhvpSHpywkjUTYG6U8h3VpR8Yh9Jx4F4SBs7AQwJmhS9E3XiHKbEo6vYpipnMgBDyuh5kghdEF",
  "key6": "5XTcNQxzar1p4YsXn4Y8zf7ZJriEYGjRrp7js3JHACvMbjDHdfjxJSKhorj1TW7sLZo2TeqetiEkMQm3YnM9xH9C",
  "key7": "dBPBo7hnCNTLoLMedYe8m2pbEc7tMQ6MYeoR339qGdj8FRwdWV5w4A2DiAS9xzYaMHXjq8Sf4Ug8sUVsENR3XFb",
  "key8": "3Y5kQPsQKCJ19TUKjfkfdMCgmyahPz3KXtWHzX2fMPVbDTmNuLgnoqTYmoLCHMQCDEJx7YfA579eApxRbXoiaWU",
  "key9": "2PDzSh3h9Tht3kStMnLgerXJ6LUr3ErC41zzdh1a5Nd7PQqAaFFTTQwjtoCBVhyapkkGJE6MJSAFU7uzYGuyNYyM",
  "key10": "b9EiBgG2HC23MyK5MBDcVXz3rSka1Vvv2GsXt6KyNn7u8uX7WDozHn7YuSi4dwsTdoY3uDSjr7TwFysg9SVEyWQ",
  "key11": "5mxYBvpnnwoptDmzx7X6Epm5GDzkQJiEbxbk3KVgXWwKaQMwc1UXoLbBvhMGjw9K3EBmJM4qi2tnUpeNEzrYy43u",
  "key12": "4gYs5jPNAHDDE3joc9Sncxzbs61ZGU6GNjiZMXmaT5v3ZHci5bcMSs6FCgsnCod1a2JpoJFdpFBz8MJ9VEu1ix7Q",
  "key13": "5qkpU2PMxShLbohKqKrohxYbmsgLWJPaCvjBuQ1PXiKAVyz3JHiBiLRTekGCpStskwNcnnAoCV8GCMUcqJQSHj4b",
  "key14": "23xaNUiCrn6SL8SejwzpmFucC89fMnC6CQBRD1wGEfcmBA8PZt5ghWAETG6ZGSjKuNuFmqi1q7xB37ucVGfLvLDL",
  "key15": "5pjwDx4apnv7xdpqVhqgKj6TJQQGfPZDTfxJJ2QEor5QS4BVQB2TyHUV6XFGFQQDxCScrewvbuMX38mEQXNFYPWG",
  "key16": "4NBbpWi76K7xbKHyRjXyvTXNYadYbmuRfLKWy4Ymg5CpzYfA5otKKojNnGzTH9y1btLhHgXHxL1X6hN3AFUvB5cx",
  "key17": "qzN5qRnu96e1K26ZFGHCHGTd6Ek9NjE8nMSY7dsSbVXAg85UmSJfs5Bqi1YmLcDCdpknGnkPTzdCRnY5BT3crQW",
  "key18": "3kzYuf9UW4EuAGZMFvZ6RhekAPcJ2z83WnTApehXUsFqTLVoWmkojdUA4cagaynJonK11YB1sPY1LMfZG6psrvX2",
  "key19": "2pFKrzuXYn5miiuhrJMK21nwqkc6Z9ixq9LFDLtYuYQZ7JUWTwvvC2CzioKLw3jQN6Sxb5yibBNxaQPf2465kRL3",
  "key20": "5C4ci8VSfYziMSQYGWVscGEH3FkyYxuhpUCW8fRYxuWTHh2fUypd2FTM1eYp2XVkeMsTSRP9Ewkbn3NNwXKeyHtJ",
  "key21": "2zdZpkDUmLKykZ7nhkqfoVj2xiady7L19Wm7vnS4GZhR79fvSyFiT1wDP9X2TJ3TyZ9NaQFGygH4dQHqzMt2R9oQ",
  "key22": "2i9xMbVNZDDdnwQqDigxkLUo4xGCKHN8CcF1BoxHrSwhZbYdduzoajbKERuEzeoUnfxikrGsUGv3M6bA9bzURTBk",
  "key23": "2649jB6JV2NdT7e1Z82a8pbv4uAf5TJRxJSw2b2KZiDJwi6Ae4CmVYNRN29mSWW3KvAiunQy9cjZ9pxqUa7eh8An",
  "key24": "3RE8KecKEwZrojrYwDgDFLzZu7xRoH2TLeH7eUQUGidxNrPfqJtw7qPmajpK57J1egG4Dx9qE6sPBwJfowTYoSfA",
  "key25": "44ypfkDRJyqjx8YxcT4sGLJ5oGaKaVqbaMcpF2U9t472uWGgyNSti41MApdvoZWZ6xat3ogmJT3bKqY9ya4pmCrG",
  "key26": "57zpr2ci82epDN2z8zNGXziNN2tiJBGuRZB7Qgs2ws9gMb1fNAS6qZ9FAzn3m6KnRPoMABQwT7Q7oTHTZhg4GZft",
  "key27": "fdhYNaNVbuS1khKYCbVizXSKctCJLG1EuX3bTGvp3LtWFcLUgmzjdjmdpBzPU95CPV34JpPZYn5bFmh7hpQPGSd",
  "key28": "5Ed1qmXUhdYHNAbXqD5dpeLdFDAyFMjtyYCoTpDrGDCNgWqVSFmqSc28D3haZhXr5sLvCahmtJguUCdjaE61PLjc",
  "key29": "Htux93iBJCHjDaCSYBTEbZ5Jk83NCnJDXmbrjZiSpMJiK9gDrfm1YZdEq8ZwKLxe6vbf3KgvSR8W3DEbqW3Y37t",
  "key30": "F3uv2N3hEPumW2ca1XrZBL2RJ5r3r7smLWZ8nVnPY1dFyyzrBg9jnyBJGMHbNzUpCymKAFxU2sNvRqanFUtj37z",
  "key31": "qrREdoQ5Xx37Kqx7zvbCvh4QJGcAiW4yDopUbFnA1bCacBAH1VzPzLcTqzE86Vo2BSuBPz36uf4nzK789NE5saM",
  "key32": "2KXXmuQxZfb28F4tf8bFiKTZyigp9HsGEcXcC1zFqJxs1R5bLQCk5UXhJah6KZikqMEi4hCMFrmzGyASGcdQ5ZWG",
  "key33": "3JnXaCrs5hLjKtgLRrRCKkbodA4FcD8ivi5Z7Wx92Q4bRMnksmEK7efz442xeM1nRs9tr5zNXoBCkg49KD7muQBU",
  "key34": "3VH3A9oWhXH9tuu5umP7AwEbFZcgXphH5QkH4jGojbgjwC4frnNiwc6CeUAdbRcFH9cELuQcWAPxfPUbuhoQAAzE",
  "key35": "ypy1NEpAoMMZtjyVkbSM4kSqx31EJzP4KQJfGeNpRhCdmmgr6cVxLGDWYFuFf3kcEi9ngL8YqH5E3U8RuMjDmpJ",
  "key36": "4w7WWCEg8qRRbh6Fx8mZH2Ak9cxiufQCbF4yyq1HqSYwWb9FPHcFDNvPARRj3eomzNrLhFXpjyJHtWRsHo2jkm6p",
  "key37": "4Wh7env1Kdi8KC25rcUaNi7qbpSpNb6f9f2EnyqyKkGH55gyUebxokocAgfmADQdiYL4XHGKbHZxksd1br25WRt3",
  "key38": "5hocwoJQ7XiGpdqb6PBha523m12HoQ9hKCoMjJfBfe5EJLGsEXStzhmATkL5j9X9emkV4njHRUTDjTXA4EpTkm7g",
  "key39": "2VQpbbt6NVF1H8Y3BQpxWXZyaTu8uD5StDqxGNgmekX76kkbmXCnorDkqqvBvdwK9s9QT1LbVNWJ1ENzDG5LaEtT",
  "key40": "3gc2zy2RuYbXK8tSK2vzQbT5Ko97k6Zs5fVnpjJ2ickKf5A3YuMP7ZD5eT1AoKYBRy8vU7vw5Tk2UfN2zrsjteVp",
  "key41": "2JGGN2HwxWCrMniRMsRDQzuWWB9Qbp8DLQNrGVyR2K6fsZMzqP2MLpq8sm15zunyCtx8HPWmiszhJjEdmNpiVDyz",
  "key42": "5YiDaPEXvypWrrFeNwec5UuyPCokzLjwCWoXi2uTAqb7x5YP1zBmz1MLQTEFi9KfwU3FjT1cPD1be9iD2t1LmS9t",
  "key43": "2wvaB4xZzdvKt2knyprUAqVhCNk6EpJZqxaME2t6PQEBCHmKNt7nDH913YbgdGqru16NjLWRznLTNXfAFx44J6ps",
  "key44": "5vZ1WKkscMT8fPbStDP7M9chd9wnC46TurXfadteuruP63dH697RQyTwFiyNBcexFkoTL3j7EEQpMQmxLwwVqks9",
  "key45": "3oW3nsCfei3Wa6DV4XgCPCzvoSGY4Za6qTFrdC6k6EkRi8QLhRvnsEqVZbEgf9g5K2SS9XqYX4JARSvVHfFmCRve",
  "key46": "3SawU9Uk8uCmfP76Tge27ubuFoufe6GeKNU9yVBPBsS88FnaYtAafPsLszfLPjBYa8fxDomczG5gXN1zG4qr5NGD",
  "key47": "5a2xJomWiaY8FV1XVViyzq6yRCsqJCP3detwSpqAb58tEPZx36QKWuX2WRt6a1tmKBJ7g3RWhQ98xCctvRgoNKQ",
  "key48": "3zdo18M5hrzmA5goWLygxynU7U86sBHjWA6342wpKKnSzqyWMpaJxWwTAyyL18XnHXF1LA8XqiuJERcDpxuvGEoZ"
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

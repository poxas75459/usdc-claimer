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
    "59mjXCEEH2tpmT15RcJ9MXc75TosqAnFCPC1NCakxCFtmPvG4Bq2c1prAGCvRkZJAtLgqiJ8eiMeGEYuB6YGNe22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KYVuS2xPKikZRGgWYHsjZubCCejw6WBEVLubJnid6VN8g8deBHg7rMBu4u27b7MYTxGdMjyVn1QY7YD3DWc99vN",
  "key1": "4ReHW9jgtzivdgPAvEdP2uzP44HfKQzTKc9Uhm8G3reqhJGy8AUFUWRwbSGDcrHdvyo4maxKyXwChPxNEaLnH5kL",
  "key2": "3xpJGTWhgJNt6cG1y3353565UFWehhhXa7FGkvKDJVUJBXDkYdd7CHq8GsXMn3u3s349t6iqPxKCZoDXgPg4y7s6",
  "key3": "43y1jGkLdBudP1VLvdwUaHqAcLZmHDroVr2eNf8zELQrzrr7oRBXwXvS5HoZgFbe5LMVk19ko4wSfCCnKPtYiJPp",
  "key4": "QBcbPDqiMB2X3ifPhYwkFVPGvmTt856gxW2FhLLzK5K5RYkUWHFgceyeKb9A78r2g4kX4w7YYH91WwvJ2t2gpFw",
  "key5": "3oFn8Su4q7CCziXJhwwtfVsn2DBQCngAgsoZi159nDXfb7hyfRe8Bp1sNyzuhfyJUb1pTpiDW2hqYBU1HN6fQLZD",
  "key6": "2iMRSv7b6rexJ5xpaXCDP4gNymReDL5TgJRgejc3iLQSKWPdvaCkKmXAw783d2tvLz2WPhDMpPPseXa7uguo4quH",
  "key7": "4AVhVkpgB38qwoBxmVchEtYp9LZCFmjuhotU3N8fyUmvsrxtpJcoV43LsTNhnphBQLVsWAEZVSx5RWcCpqgDi2xj",
  "key8": "3VrwVV74Q2rZwTmuPs4Hizigx81fbQeAafSdeHmsVd1xb4WVRahsPrLL3FYkxFtGaLXTJQduJzXKrqE1WAUWsohh",
  "key9": "3dD7MBdA5NhyDFLhB6NKWxNywUuYaEH5KPqy7tecCytcUxMeb9vFCksRg6SkageJF1sK9ZNwASBzu8JcqDVKmnUY",
  "key10": "67iEBwUjGSTZWHPC9KZEuUkT7x4vnvMNNEUNuXbnymbiKjBmZ1EBncEEb3neakAp688Qt13aXQfh2o5aELJkwbbS",
  "key11": "5UZJRzmE4cmNf5wp8uTKscdXL6oSLK5vgvi6M7LCUibzj712VJABNQZTMM7qf2V8F1wAADmSyhf66MLxedayhZP1",
  "key12": "5odFY9EJHaPk9akNXPjAGgk1QTreHJWqJGLbNyqcEF2mpPm7Z5DuyoTNSQvTonHbxmwi9ayYTeSMjbTFPN12jDLp",
  "key13": "2ktv3Y9aWnY2oyPMM9PrCuhp9crecATJMKWtz6XGx5yxT3Q9YZbArtjrGgmJM3FgLTFHUa5xTbFWjNxVKjMmhHkK",
  "key14": "4WyEQouQ2b4PADaoGRYDqhQLq6TCMHG3Xt1jwZeiEi2qqV65aC3BSMaRK1gioafrTYkSgZdeNSjPwgZ7SVCsdV6r",
  "key15": "4rauKJGhbRC6ocQZuUZJzSnBrkz87AGeRBoJyFwrePW5spch3tV6s8n6QsSxZzZduY4QroTF9MBhCtaKCoy3xoKs",
  "key16": "2dea5LFLqeaSxwYXFxFqtffqEsHZWh8c6no7HkZ4zHtZYvyKDxmyjU2ajzbhSameMbNmrFAhveYJC7hCyffKpSEW",
  "key17": "31mVys1hDhZUhGyfdGgG8U3kPeZKKo1HRxzo3PKUE542SzpuvJYrSoWsrdZMTSLb7RgMNyxPDiWaK2khZTKtpwge",
  "key18": "3ehfq5brZKUB3FFQVky6DUGcXbpg9drsgrjvTin9MUiUhRHopPFQGZdqTG9AMT9E1hiLtQg2yLvGzi2V46d2Pydh",
  "key19": "jGgYypV1A6kAMFYcWeHNUxKenqhRV6NiYp13GVjFDCe9NsdsVRaXjRZZN6b2eZkAeJZGiZQTrf7Y2Zdhh8BW9vp",
  "key20": "5Z6wFf99bcd4DRRpQ3TYanKGmB9kdaXWL4dVjJfY9UQjcMaAHqDsW3GzBzshxAYWCNWdekwLsRJyg722KPwsM1L5",
  "key21": "3hZzqTdZsJeX1ta1rjpfjtWLmFyirjSnGccgKJDDW3m67NeT5xzRoTM86R1KKNa5sTjHF9BK3awTq1wEWrSGh7cy",
  "key22": "4cXGtW2j8BYxCosw91M6Mu2GNo6tBj8EhEgYzFtaYsJqEMDaSENJmP4xjst1yX1N98BfBjoBUsL5c7hrHX7f9aVK",
  "key23": "TUAdFyohYMvnGpi2RyNxTHgf83Mz9KW24aWPqrG3Y5EQoYC4TrSkL7TH4A5soh3gMVcKa6L7BzgHM3btYzr7ix3",
  "key24": "3dQ9CHz2CPrwbTV6hR3pJCYDdbuVxpuHQxYuQykemAeQNwNikCFttcUjka1BzSKYWpiGjswuFBL4yjyvx6YrdPPL",
  "key25": "3pdNQa1SzZdMNfnLjRaJyYqbHQS93UJMPejy9yVHA6HwhGMvVdbAJACaR49EBtDykW42ehZSjK7xmZSdxx8oghE3",
  "key26": "4jU5vNtNTX3v4fzW1FHdpFFA5ePjngPeXYRKEoSLT1TMeJu4zjuPDHMMbb46mftJKfvxGtZfLjzE6LDPAkQ93W3R",
  "key27": "2Ra93xphM7sNTVfAbaGs2aRv2RQqL4i5fjmsAQKbL9eyWqj4GD2sq4FtKQrQHDskKdXT2hMN2muWgvFnKQj7nucT",
  "key28": "fYQYdMRrnbwW8mvE2MY4WMB5j3zdUoGnoGfeb6eqSNTh3j7CKQqs8fbKM1wCNBEBnMCESgCsPLeLThmLN9KD2xN",
  "key29": "6U89DFMJuVF86XSKzvH7czpQ2Kh4VLL9xXvjp61AwuLibZEXxRWpPoxcEnmemRQd8pUhY37eq8GMZyRG4Xv4pRk",
  "key30": "65CrYhFyyzXgKFqszmW71tRC2ABKto2Uq6naUhk32tUzaX57oB7fd1XtbXWNhWa7muVmfhiA1Ed44Dn4q5Q8dUTB",
  "key31": "5UwYEnUcZKaVADnveUkDFNvhbD6Ma2cNo478pcf11e3AQo5oYvu8QbnQ77sCJLYKDVCopmwvMsUUXwFHczqw2fw",
  "key32": "2nakpVHipPSXLZkHd9edSyEzG8iyCT77RLfXZumrrYMZcC9i9PAhPLbvXnEj2fp24KopRYGGhfBDP6sCJgvvvK9h",
  "key33": "299GTJrg8GEsaHiRWXMHE5qqd9S6mPvXL2PLBGV6fW6Gzq8rt8PAax4DckZA63gnAQoQhviPP9z6vo6S8BzdSeBE",
  "key34": "VsV29GxWdmXgEU9FhPJCcSQw4LwJ8C6BoBEVBhQ5HRZXU9hYQaMM8aqFWgJLkZVvT1VCZUHhtyFkkJpkscTYiNc",
  "key35": "5nR6yxHhQtH55igkxqLWn2XWuPTNDRknTQsAuK1rZRYLizGJfBD15H61pCfy7V3AsR8BV3DXJtXQZErRT46jhgdg",
  "key36": "5vDsmQexmt1KQ3s9JYS1nKVCSRwMscg938RbQYjVjUkE49EEQWjUtMe5HNz6gyRt2gP97Xs6WRG52ce7GgSeUmqH",
  "key37": "2xJ4Kyny4D2VMo4rEdsm85MbUL6cmpJtd2RyXmBfYTq8x8KrP6kYhEbU7MpM3fu5WmQbmqqc6iMTdQoMdkAkZoCi",
  "key38": "qGbgu37QmH7EWRppeoGeXaQPkLQEGpePb2VTayRooYd2R3jeXhEe3WvEx9F6DtoYE5ofnhJF6j1BVfnAkH2zZS6",
  "key39": "5DQKG7B1qj7kawpdauu5WAzC8thwKGNceptEfvUen7pJXCQdomAFcfEv3UT9YKf4txHNFthUZnFXWTQU4FiwQQma",
  "key40": "4KJdmnEQrrhqqdC5Vi1qCAmN5FzX88DwhwoMqN8bTWJN9NQSP7LexZU2WCGXzh8bx3Ui3kBdGG3iy23j11XZ6PDV",
  "key41": "4aWVM7ZV5bBgU3LgMEBWqJLXhtUJfgTD1GdLLbinCeesf2GkS2FjmWY7i3ewkkdBwkfzgujf2VXc6TaknSgTQptH",
  "key42": "2YAL3P2zWiHeAaNucmFapG3ccEmLqsUwoAs4EXoAjjBkcbkwM4n9cPtA2NsAuCuWskeZTMMgAE4TAoLub5ru9CPN",
  "key43": "3zkYe3ak5GYzy2jYBYvsmc4z3PFv5shutQTWzC4oK1GoKZYn8otWVFwYbujtVfW6QdsZmqzU8uvg6GZkEn1L4Hkq",
  "key44": "TTUgHvncPWCZnx8P1szkvYayn3ttSqo24Jf3oZ1p9rnCcgPeY6TEa8szJzUUHNZp4FcFxQGfL6T5LN6K9BhdH8x",
  "key45": "5nsr5ReS9WjxuT5nXXUqhWckH7uV129Ebu4fhfERWLJ388q8gaTPjgVonYciQEAYpggLGzk2CRjTabrdNYbi1TaC",
  "key46": "5hNgkXvewoHFoerwNt12UgMtPrcuk24wnt4cV4v2ZjSrfhPzVY2AKY1x8YAF8qit2PPjNcfZVspWvugbvKbrW51z"
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

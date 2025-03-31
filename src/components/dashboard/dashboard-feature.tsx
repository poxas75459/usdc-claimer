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
    "3ZY7wLknVpqUynHomvs88SuNdbVXTdb1z9ssz3KYuDBjo2mwxCCKaAMNeYL9YmRRBmwEzRe6myNxLy2QrpBT5LNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AX6isnc8Jk3V7hWYfTFwEuGTHdiNE8ySdWvPnMJgFb7TRguzyewyiU2Wv99Q6RBkUGm7CzK6ujLrw2FTVmyWcZr",
  "key1": "BBABAA9uy8etvfKwNJho1Hnxr68EA7ZdCkhvaVZSF9JrLn3DDhXnbJHtde9rtjf31UQeRTxVbdbZsaB5k7wNE9X",
  "key2": "xpagKzREzPp7yPMnJZquJoxiNXbtnqjw2Eyj4uthguFiYR8psYU4d14NZWqAw6Ru3HePWNbCqcdLUAHLoyj6T7x",
  "key3": "wNPZ3XNwvL4StyyAi8WpP8EkWLmdbGAmoeEBrgYEzuVtY9VRjptMrXZk6sysqkiNffxTxjSYEFg8r5y9keCZgWm",
  "key4": "5bSchdKytCcrw8ZxKvA79QgJWEnenyNqCWBDqHoaq5jPvLKM5pEbW7CZPpLWV7EJ8embP3VmvUrsjJ4hPe6hQ43L",
  "key5": "cWRtSFHnHB6L2pR3QmbQB4EjpM4zvUgKa5eVXMbv3TPW54GVZ7xVpUbhXpoYAbJTVQWNjtbLRGMuemLFH947EUy",
  "key6": "3AAZVQD32bC6ZRa8PH7ngyGNPeX4pnyoriVQ7awMMdtziSeDQS5dQKGhnftiTTR7kLEMAUegxJesLy97vqmYmVTk",
  "key7": "3zEMemZacVsfiMdnXtQ9YxqMRZDoE71Q3Tbj2uHhXcSDwaYnXWKhHk4eBk3uozCBfehRhX1hU2pYBaVC1sj5h5xP",
  "key8": "2bLTWg7ToqZJpNgFyVtVH52z2nGoPUt7seHLq6G7mZgeDn7x8CuyYHPFYEMWKtxW7M93pfmLcqbtUx2FskTGxxMg",
  "key9": "5hXde9NNB4o8i5YJ2wCs9PWXon79cS99xDGUP5yZiyBGs9zvCyUCyj9CJ7ppyDGHRk4ZYT56SKdH12y5exgxrrXa",
  "key10": "4iEJAZy9BffjVLZMKkE1W6b9ZVp6D9gdB135J6VR4xPC1purBEat74GkB9W5ovRxbS78FhHw5uJPe2Dvs9ZPfmhJ",
  "key11": "4PvzYfaKZswRNJy7t8mhjX5JVc8RV8TmSeB4AJBQ3o1ZAwSBnwY2T8iASnzag2CMqZuBZPB6pJ5SSgfQQLMjFqGu",
  "key12": "3NNmNJ2xRArw7SwSZmRNfkxNojd6AGBkkqzttRA9JiafRL9omohnzgC2Xgt2534QmFWQdipiaGLeQUVomayEppDy",
  "key13": "DtZ6Dg4B8YVV2VbpD9gGMTmMyTbHPvfrLX2oeEKuQjpL3V9mnp2Kgmw1WYsWJYGXsQb6H1cNuTHiFNkdfaPZsDQ",
  "key14": "2moBhuVcDZZuroDtcL8KdLdPnGDGSRMzSyroAaaR5P4Z6N6jJbeNDveXVrtdv5BzN4Vuk31qQQCtSSywi53EvfMz",
  "key15": "8hj8bLv1Rnc8grQYkVfhY9bqhVfijWYD7nWs7RSF3Ab4j76WfoGspCidLsnyPYL3VWjzwJE3HN6V6TzbShMUsGj",
  "key16": "jcdmqBBLzxJ1VFbtGxpi1TztqGtqf2abNgx65WJVMFR81EFrxMsmTviNN1QXETCV2JTPqHZyyWq83morHkfd5WP",
  "key17": "4ejXau3AfeU5XFz3oE4gAvRMdXhxhGLFGrKAZq742w5gJ4dgNAfET6H1YnUkrfttQhmqabsWHN5cdBsJawm1SNrL",
  "key18": "3V3BZN2mzR9GmmwYvoDM22j8LXFS29TkBAEL8xXxFBKro6uU7JjhHz7xeQ7fsCQuCLzoZMALPXaT7L8Bdd96jmUZ",
  "key19": "2dUsCQpeDKdfg8ynshKTgYcY5MLJp7a19F7WbiaNVpMRbbQAgj7L9Dk7nz3ZM34ts6KhUfQWW6y7xymR3i8J9Xnj",
  "key20": "4No9rWMivA1hZ835RQwUBDttjkAGNhnrnrAhXi7rn9m6N33H7PMRAH13DnykKN86kMBFmJ8LxQh3HEBJYfCRArpK",
  "key21": "36MJidhKjUFwM7RTFkwguQbG57JrJgb4F6zXgXjfT27mPdVDpZ3gp8WBAgAh5j7bK9emGQnmFoqqoUiKJHr2NRou",
  "key22": "dgHN4jFU5LtuhTpwrYbb7aqTjkA8j8QDcSe44ACSPU2NDRGKL1ByZq9kamA1UTrZamep3CuS9Lk5KMZxkQb53S7",
  "key23": "5XyNwXK5jYpwTcbZv3j1MMfwxYug94Av6D6H1maKAyFRa8JFomtmWX21uSq7L3Crx5tVhLggZbGeRqZwBHRxDBSV",
  "key24": "3tA9UutH5JLZH4yPWDBVi2vZ7mQnYjgfuurfkTUjoM7YS1wBozzN3Vc7TGUoJjJYchnSbYCbYEroJz8bu8Fiimta",
  "key25": "vuvm7MqGqseRZ2pdzweQ4g5yu1dwjQ5h22WNaGx1tMLL9Ji2eAJFLL6Rx6v7mZ1dszeBDPFYCMa1DnsY3iJBPje",
  "key26": "2XFGSgv6GRGynmAJRnRmLRTyb75R44oCsWRSACCiSHQsodV5PByi5tJjFN4zUXu5wvHWGaXbQBYtXgvNueCxcwte",
  "key27": "643QNHCvHR8vsCZk7wzCCLCiU8zcvhXaVMJQ2o9UZVCj5RQHsP5oZh9hhSYSWyKBibfPqJRZbSfViDj5yDxUQmoC",
  "key28": "3jA9xwYLKg8wEPRvYViUPYChSPkAwEVPrjo7ZaKsS6dHWGJjQfX1FqDiwxUg7j5SkzFApU6EmJLggGzniidm4ro6",
  "key29": "5mVRuHmsQFxaujH3SX9yMsZdiRypmtvY8C1TktN8D46StReK8wLX9cvo866Pc7zGccutYzxrBC497ecLfbt3nA6z",
  "key30": "4ByKP1HCnC4xYJ5kVQ8v2ugeWzF6jLgA2df2jtcfHdRneyxn2SsZvQEjtLnVTFfjXudKXSh4ZY21QoHGfW2M44V4",
  "key31": "sjH8boNq3xpMdr6zZGfLkGE1X8ydzeNF1oJmjTTzwWPVZzSnzGbasrko88skn6uv9s7bq3AANBKeBPh5FjUg5dw",
  "key32": "2uZWrR9HC3d7HirurHtQEYyYQw45hHob86PAcBd5xuFkEsjQs7ghzXPjv55w1zh2xqM9YUDi7TYQbP7QKJ6M4XGL",
  "key33": "x73zCkB73u5SVohEPAtoibRuTcjkAJJQo5VmJLzoYGRHQd891nFCiMeBNYzcXjjTMxKA2CV8ABavz9382K6ynCH",
  "key34": "5B3yXzqfa9smQA6o52SxCDTVbn7WRVNxCjJA2ss7BsEgt1vjLP3B9zDX1Jn4QbgmNWMVG8mJoW3LCg1tNZhskftA",
  "key35": "63EVvN4Z3EE2FuNDULa3mZ44fpsr7vyuVMtZTeGm6yzGDL8n4p3MhZNs36yrJ2ueg4m8WnU5gSqBoPYuTXrv9dME",
  "key36": "5SNmyMkpjYpC16WQzcJ2zgnGDWooZ7J8W2Vhboanvw4uEgSG3Xm3yHeL1bTRqwJ9FCsP1SpnXgGGmMQQT6t19ruB",
  "key37": "4g9TP1NECnUvnciBpmFQMpiRbPM9oGik2yiXnpSqfZTBiMSbDe3y31Nuw1JbdtsV2jiZa3yqkZ8rcQZQxNyvqNZ9",
  "key38": "3QYyCxx4XXhusSLJA9tmRRE4ibyqXj4uDNKmhv5Xa3NCHzRonxYJrD1mcXLBRP9MGjLMdyRWdBegdoJdX4ZUDMzq",
  "key39": "53FpmYhU9Ja5tkfyLrvfqYjWjHbVvkumudoyJiyEMqyJFCKEgAAHcJsDVLM9tcKD927hoeNN8M3MiJiEbozv5914",
  "key40": "3J9xRtcPv3EkT8qYdBDxEYbzQXBJH4a6mMp8sYsVErKL3ET4VJ6EWJuJF8f2xsAsDg68f1KMtkmJoEoVck3bB13",
  "key41": "FfusbeRBURv5BDrhmBKaLTLZYJMH5uL74iXvT7L6C41pVwEAUXrZbqJkTcNW7zPbfJUvhQ1eob2KiPgutTTLM7S",
  "key42": "v5akLH5KwKP6nPaCQGByTYY2Vij3paEZody6vXVpBsDegHvp6u3qgHybfzjbgcTtPy2DNzfQSpAB8aj6ZwzepzK",
  "key43": "3dFBFpMmhWJnzTfNZSamjv8pPt9bG7XW6JrraLtM2nBuC9jHPqkCBPgo2phmnX7FfxS8LzXLd1rqvdT2Lky4qAse",
  "key44": "5geTYRqJ5sFceEtXM1iGgkapkV3XFcqnNiBhxNUW87DNhLJnmpUqfeSfsyqMfjK8QjAAEfVsfiYGevCjD9BHn23D",
  "key45": "61Ps1N9F3KjTWzApph9ouF2xYx3veo6ABJC4d6R6x3pGRXx48XvZeUfUts9bd5cWoduw5SgB9M5vesDXUChWuNMT",
  "key46": "3VKgK17DboaNxHCetSToiL67VqXVuyT4WRnLCFouUbpDfwuB5UmcgYcFKLny5Jdn1wxawY1fF2qghkCokH6esDvC"
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

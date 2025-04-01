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
    "3J4xgkY6qjy338k2JQNUw78ti52WPtUJ3o7JKZoHNcWmGJsLqFoke81VupdsygrLtA2PQ5apx845UDgtw872zBKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHY6XEneK4zBBePqryE7rtNpPYSkfCCVsubRzddHNV83ha5TNyT1eZjQqsjsijTM2er19gwSCN2PFV55fjqS9y",
  "key1": "i49UUTs2buSvbJwg4rNyidwd1vHvpd3JFkHGjn8ibKTtnKw5ZoWgquXtiEiYja5HAaHcxX9hGpKmhfnZFtovoMu",
  "key2": "43p6HxfY5D8pdhzfghnK9eiqG3oDMvsgmLojSXLpJpbc35gTuMUxf2Cxz5TdDWDZB9Sig3cuPTTM2ihpMwGDCy9F",
  "key3": "21agxHweTnafdHaV5Mb15pyyzqHstgx4b257aPmFhgjNA1i7KBvYDuLbLSsQ9aLgaXPiPATFECHci8rdr6gWzPnk",
  "key4": "4VKnqeGy9nYJ8jib9cjXeqp443QPcNG4JQdYFV4E4dFqgotqwixPvZiob7pyYt3wTMfX99gYviGZdb1ayUhWamRd",
  "key5": "33b1UbtQLjsHkf1PgFvACU85ZqqpWVQvJ4EdQixez8XC6UE2vgWti54GnSEPZA7LNYpqvaNECgZ8tJ6LzTnzNyQE",
  "key6": "2V9Y5v6VLXMi1oQEf4PdgWAWHQqx8ZKoJ1zKYqpgRxeRxpHAYNctwnHXdGGXp1xN5AinhRR2Sxhdeu1PwbJDYjEj",
  "key7": "5rmgEnSNXGAi2sx51SdMziX3Tz9TZXFgcvBgCZfrXnBPtAJ24BqGaXQst7TkYPhiTPbeuF5hfCDvBtDpoqhqw7Uk",
  "key8": "QJvDE5dipEcHirQVkM8Z1BPxsbknXay7T2yWm9iEEpcvSeSG1cMKoDB5Whye1M2c4v8qZpw4K9GZst17kXMtb9D",
  "key9": "5kPYvWrNUAczwJePkdRZRRP58kpWDY6tsei6eR85ssYqzLw1bDMpMe6McixnhRYJZW7ix56BWapK2pPVU6puatbf",
  "key10": "5ePWsczu8wfNACSmC3wVmWjBWn39MConLtThdeLnhQZipNgJcD79JzE3pQjhybDnZvRv3Nous6sFJhzuXPGjFRCv",
  "key11": "2YDe7hyKxHcY2x9TwjxYBVmdaJNnsR4njdmcjtek24gbdrg4GNEraCNoQcyqWz5caJHmk1aoouexbSgDaPVGfwVv",
  "key12": "2DM4LoKdqYy99GKYzr3pudHQmhpVGJ7xNg2PKzpoEaiWe4B9SQMDBp4K3NbYjj3eAeAZX7hDmP1uQ3gPadLwKN7d",
  "key13": "RwvRSAmEPKd2rm8NnrpEMkYGM7fyMzxq3zFBwQAoA4uWXWbYu932xGYDpPs51ksMdCVspscAhQWb8vUidb46Ted",
  "key14": "2CD2TmMrmFnBMdqfFJjrbgpkrWgcLxuD2a41jmCbFcHUyPBtiLzwDAbq3xWpYdZtJfDJEkALVyZwKjZ878A4EjXj",
  "key15": "4aVgfDo9L4Xc9kpTfGJAfYDqHAJR2jNNETKsmxYdrA2qtL1qKykExHE78p8gJZsj2yUPMMr42KUpWM1RTocL5FJY",
  "key16": "5bi9ggiZAfpK3A2KTD22WcK9nnT4qMBNGvwAXSQpLE32cScGmTaWRfxUFuF8wETfeCsKUfQCSFugUu6NDvFjLKnn",
  "key17": "2e1dC64eXQ4CCXQsc9YxYVF5E9fjtwXp2t2BJwT91F1LiyivuHvjQYBf9bNmJKCNoEqMLnkQSocgL4PdyUTtzH83",
  "key18": "2X2XGd9tUaiLiYakhfpZLoVkYKbuTYZWKvpgkHRm2RMJxeHpkfVwv2GU7z8d2d35P1x6jny5DfMY2DcaoHGeASF",
  "key19": "2HJQb7ApWbswasubzbFWkfjLeuDzJ2YkwLq3HAJTf2qm9PVaYV5971RmGvewK7XtUStY11nFkGMNyGuks9v6p4Bz",
  "key20": "4Yc49jeNxAKsJBrEnzbhcYZ5WKNLnTNgd5Su4Jh8E4Wej6ck3qeCeQTmKk7t1m169tGPKERgrw7NhD6ydiZByrbZ",
  "key21": "MzLmZEbYHiEKwz4R4Z3xn1fmtvFsSvCEWnhh24FoexsFT2uwEvU9aANgqP1D8CXG3tTpuT1Mcx2dfB99wvBdc1M",
  "key22": "Gn51oPzoepgkJoi6HiZpJQZvoibmrCd48PnTFN9tUpjpjP3cmZejFz4AtJfmYMoyqCdnSbFp18zUhK7GHtjMbv2",
  "key23": "4Z9cpFTTW9aWMEmcMxuVK7EVYPzRjmbS4rxMkvGGZijTSXe3zF7vAjpqQpovaE3qGJiD3fmk7rve6wSQRQWwcJ4J",
  "key24": "4C6x6d8NSQ45tPqt8BR4rSMcD9gSBdeSnxQGpVexQ4ahsDSneNjy8DtBGbYmGRwaosJWzKwFvAEgYP6Y7AQNqkEj",
  "key25": "3m56HEwhkn4APsegswBiqTsogX3qDCVtTrh6uuD4rTvLtDdPEzBp7JBkSQdi2CymKyyZFdgkAJypJU87B5VpfmMp",
  "key26": "41PGJ73sS8TAC5eUSmwrSjJqoEaPCUwztszS9sUsxRBmDd1DSwVGM69fyEYnqk59eXtGRmoQWRUZYbx2XRoSDPcA",
  "key27": "2bH61AKGqDzL7AyiC3xy1nzQfddxaVWZTKNh4dtbUktF3GvvRuhY7xM3J9GCsimzhr3rMPfqdfkBuJ9AHcQA31rF",
  "key28": "sTKYqLzTxuhtbB6dvQCnwrRHFsUf3bfV4fgWDWSxXHz2pgAByL26nBmy2xoAyV3DZTiPgcD2KyZjZbm2APTE6W8",
  "key29": "3NFjT8bB5U53cLjiERpuT6x16oMW7zDyC2c31oDjt452hCW7w7fQ9Xu3cqmhYmnxBG4agjfJa1Kg5B8BEU7Mxvmt",
  "key30": "3N3CDptJGsfH7xLspGprLHWzLMFHAtTZhUryxi2bJbCrTNosej6Fpv756aWahhJxA6NTdXwsTJS1Z87NLZjiZzoM",
  "key31": "5Jbykxz7gSSHatuVnyLWrGgGHeETpogWehezTPvhqt4t4SBXjymYLGF5wzJPUbYXnjb8KRbkCsGPDJJ7Wb2chG58",
  "key32": "5SV3CSBW3QipF996Y4TDciyhqBfcKBYFkgjaVSbG6wmVer4AJ8V4mKLWdTtcQHjhpatQtD2G6WuW3fMUkXiWdoUE",
  "key33": "3s1ojCMcRisd4c44Ydt321TgGW3rgBVcj4YeeFwKrapP6YdDyMyhjwMfnGSsFrTZgrKv8RqK4myBiodTgaxaN21F",
  "key34": "5pYRXLtXc2YZdK36vz4vShohY8G3N1G7sXMd4bw8FVLqy6XFkfcNvskSE5Hfq8PdE8yjs4JKSbPJqmkCKChwRPM9",
  "key35": "PwFuJayC2f4hBrsm8xGHG2mBYFjUFdBgvHA4ZaYJ3oAHohX8PgAUtvAeALvH4mSgFeeJN2fVUJ6LV6j1tpxJyU6",
  "key36": "4XctK6SxcWc6QAKGFvecD3xWU8ffYtgGEcyTj9S2fN3ZpZhwyMVnFi6W7HxyZ2Z8A7Qac6B3nLqvZv7kU4fzdvyX",
  "key37": "42hx5L6GcPoLtNPEfKuaheiSWStSHYm6r2pUB33FTm1Z27ZDogshUxPWv52kcNhVVwLh6z9HRLGMrMEfhJCSDGTa",
  "key38": "2xjXTxBr3pq8DuBkMc73iGaJMgJKEi84sr7A6YLNGeAAzmbRhcUU9wqM3eVu6sJ611zB7THzqdPdsabDiyF6gXBN",
  "key39": "pLEiAmbdWjTPBqtVQhKiXGtsvpb9CjxzVW1ufq18LRaQmv6fzcyk8psJXxK8tMpHhaZT673obExStVU9BmAyns5",
  "key40": "2DoHV7D8n9H152DPkqfy4R4u5GFXSERhSCDyQcdxikFdQLk9yeqh8mYhDtZsJJmHu5vXxFoYQkAyuRkHVu6f2pnU",
  "key41": "5Uk431wuJp6VcYiLqUf8siAQKGXb34BuLboGvJRtKAKVAFB4NiJMDiWfsKEyxnwGz23EedZQmm4TFKg2b6nkh6uh",
  "key42": "MAdx2ghcpXc9rfCfwqpje6DLLhdhpojMV1w1hG5jJNY9DUrPeWM9vUxLG5ghNJzvSVUr5QEidyoHkWcpbDx2FYZ"
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

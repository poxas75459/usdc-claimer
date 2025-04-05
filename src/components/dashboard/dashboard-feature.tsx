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
    "5nug1bL5eswM83JkgSoyDRDE6LQ9wT837UBTLZgd8xDF5NuBomay2U1VgywPm2CDRvW5ctG1vmkZM8YopnN4VYQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvQAJKmDru7QQjx55BjxEaS8U3SL8DWdfvF3SLyxFaYKNWVZSztAN8YAwZHxfZzaBopaNGei7ns5pLz9idzGASa",
  "key1": "33MViPANacBjqm1HzNYkdWJhZX5XrP6qmEgBCFmMM6iWHXpSSouj6ZayGUVxMYK5FHAEB4d2BQD1U3EdVviuysKe",
  "key2": "2Trdbc9JfDpB1gYqVJZVg14vobN4gEqq6nE665ur4ULG4MANbJi5TZPed8h5fQ6Mbu5gcdgE5CfZWwVmdQ6F3e4W",
  "key3": "3bZTK2t3AEGi298fo5b56fwy7Vc345kxxyzsarmLGC8XLKpbHC6foUCnuLk726Kp5M2HKJzSX8V7dKwKL52aRN1J",
  "key4": "3SFNw2NmKUBuxS7ekQ1rgrUPULEd6PhJk6L2Ka9wJ1w3TtU94fFUqRULP3mVeefQVRhN1X5LVUeZZJ1E7BW9DRJ6",
  "key5": "vPF2xFD1Z5ptbAZmeUyS8ZwrcoRre9BmjVdknhj8ucuoEHdyA7N4uqEo7koPnWmUxy8m2jx9JJRu4ewj5iVrKck",
  "key6": "ffjKLsDvVTjTXQLHFogG4kivtoi95zyZyoiqhLRgE2T7rvVVYbc9qZyK5AAfoga9WuZ2RJ59zFkeddb3NKrB26G",
  "key7": "4Kye2hXxPt6tby3K2w1DKCpWMjEsbPV9VM2ZhYmeBi7E2yF9znfuYdEnUPANGkNogoeNvQJXmqtKfvQYToW1UH1m",
  "key8": "3M6Z5iApUeXHqyhVwsDm2PMdeh8HGjSGvHhS56VrS28aW9NMZeG9pdnxknb9Ss34EhqLLZJt43r29JyGqSRAHZMe",
  "key9": "3HQASanSH2BKchYJkMhGt2WZtVvEBs7HCFtfEN9HQDchSJVavr2MXmparKoDNu54qd7PJ2ZWAUF4euTBp6RGc6iT",
  "key10": "5tM3Zt7rKufzdy3Bq166iAZ5wcb6qq3tAaPH1gd8AhAYJGaPNpM2Sa3HFcwmV1fFWwcvpSPDZzMfRXQo3kRPH23v",
  "key11": "AxbsG41ubyVnTzvrrRGhXBsFAGsgNTRNGyiyC9KHgZdqMbub8H8WB6438Qv6BqPYh2QmR1i2a6tzTE3pWLw1Jue",
  "key12": "52cTULuKST7Q2gSqzg76TWTGT95WHZzxfpfaxS6Xxxt71wQe5tLnJZK3fZYYJcaqLb16su3p8ev2HD8jw6rRgUce",
  "key13": "3bhSLGbJb4TGiojXCabcgqq9FWCbnRcM3qY4EH7ygkNey5zWXAs7Y1GwUmNzJSZCEHFR6x6WP9TJNvG2oqqTeFoD",
  "key14": "55XTiV3CSvi21pDL4cq1VPbUmR9nuUzZDZcxCdSWwH32apL1vxtkj8k7dWLZqTt6tMzoTg2boaeU9Yvd7ZRaLEb",
  "key15": "5YhhsC2nJVbgcPreg5g3Bqmsbd5KMae4GzBDZ8DaJYSkcwT4jS7pVLdW8mTiewQjTHv33GdTzpaqmU1xznJfXcFE",
  "key16": "qaqKnosew6zwKjBBBdb6yq8hi16bHKJcBF7oFJtYr1mcKxs9AsBzNBKDWijD6njqCNRgWXQwbadphVMjtQ64tj2",
  "key17": "4uwpDNV3NL7TxUdqNG11c7bzoUBBNq5Fh4D8g5AhoYVYyrmy79FvxCaZdnbYmQJXgKb4U3ukLfRhRBUrZ6focrqj",
  "key18": "2agwR5jJ2kXG7Urs6t5KGxGxzoBiGQSuAK3NdaaWTvXcB1mpenyUpseeY2i7UCDr39LN9aAYaZMioH3DsPLJrbu5",
  "key19": "5QF2Nuh4hxszSTM1VsnK3eZiTbP8SQdDWAKsZT7MwxcPikaUTyA5EhtoW584LNT5SHA5CKHv9SgQSy9JMvoGL3uz",
  "key20": "YEHJfcLmjCpWiFAH6c6Uv1dDbcTgvGtTHPLnhkmerJDgtpcs68Eu4N2Cuq81Tw9Gcywf6rcbFJzLAtb9jDyetSC",
  "key21": "xLUTy4F2U3vSPLuAoNGHtNqvK8bBYTYpozKXMNxpXUDX2724sSjPwW2bGdMFdhtUCY68Bssi9Sk63Re7FamNH2u",
  "key22": "4o3hhSk3VseWWMyy7P1goEUdk5DBUs9iffJy93wCC5c3dVWKWweTiPNnvKJbFNznvuyysv4xkTUGRkqffVkpq8Bk",
  "key23": "4hiJpsZvJvWYWwfaRhHZDhKtqqhtTsoiV6T1CTb9GHyuACW8MYNjVdktiA52exKSiAUQVLeioAbRBqwcFeShFFvo",
  "key24": "3RJZDd7dCi27DRBLQYRjxMihFQvZ1GLgwWHGQwR2K5Cyx48g13Sr3zNue5fUhxvKe8r5UWi7VQajLZZztyWLjSFR",
  "key25": "2En2ZHtm9sdN3tUPzhVbFaHWvAvpFbMqch9omsqGwoRGMGmXHmKK4erTeDqPh5SEQtHyvBFA4RreXZnkadyxALr8",
  "key26": "42c7Yvez1fyKWABvdVjABzdBtqJc8RyqeD3ebv1tz6sdqT11HPKXHhPQ66gajZCrMV8noekLTP6ShCkiPhjG3U2w",
  "key27": "2dfyS9Y29haadMcVGP48kepDpB16EQZwrtGn41YDtwPRRn1ZfKwLoTFNws5WGRKRGp9PDieuGJ5U6RahuRNn91K4",
  "key28": "5HJ6dsjEE82eUqA1qLiHPdgjMQTahbULpdpXGQpPtv78zH5sVHarBypZMzRh4kJGZPSw5xhBzCF2XLxN48hZe1vL",
  "key29": "35aQ6bTpUhkbwBoS8Wa3PyiCGDksubzQfcakgniCmyJMynBYv2xSieXx49rbTrspLF9Dh5gVgzripArJz21pVpZy",
  "key30": "7wSBzSRu53dK9QFDAUzw6QBnQ2bSyefvpMxJaTXh9K4WjN1GbxkUDvZtsWkNkuVVzqgdHhhZiLHkj1tUiCs7Fsw",
  "key31": "331T5D3z4iDhqHpfCg44qfNjN3dwmbfiWpSvfdRqHz2oVe4g6vNrP2nstzgzoBPwRRrZpHRBz5coL8WCowA7vzSr",
  "key32": "nJr2Wk1jNBbyypLnpAQa8NgAop3jCVqqNLmdJqQxQv2hMRPpumffXJDKv1knTDQM8rn4iugBD1v2nkuh7sDxazQ",
  "key33": "4yoQAc3BBEMW71LZWAcmGsa72b3CK3K3Fgvg4SG5nVHeQ95GjgPWbRuFBLWCwkbSppnYqzxeHf3wMjTcbQZ2hxs",
  "key34": "398ExRhCL5jZfxf136ugiGoMgmrA76FEPFC2yCwf1sjZnuFJrxcUwS29MDui18vNEF3nu3UwbUoXzmpiYfxooDKY",
  "key35": "5fEu8Q1iBJk9gbQAhtyuTdDjSwWE3bKSiu8pVi3dattb4m4dS1fPm586VmAETGe4NoFiCL74FVK4NM8P86Qrjzu4",
  "key36": "3n6CQvGMjkpP3hdG2cMonswTEJHDY5F3YAmUFuRPpvTunHNz9x5CW9aiWPDcusDAEBfwHBJntcLPwTCQSx4itmcX",
  "key37": "7LHwhDBGTfFA7DL8AFha1KipMNibdwJ3oNfJxjcAPxg4u2k3BMVCECH7JQEoLN3beQDuv8WyvtrW2PD9tqTQHrF",
  "key38": "66J9YMbyHYHWBfYvmuJodrU7dzSb1f6ohpbAit6YmWFQLYVQh8QVRy4JCmXwKQSYrtCoWiNAqxc6FiwprrqoYVFB",
  "key39": "22XdEZaLT3G4ZzwaBPBvDmDXbJG4vdhAB5NB6twUckopvdRDJNuZr7WxfpugEQt8WeM1MeTdbCcNircgEDKo54cp",
  "key40": "5gTfuw4QG8WYZfYevd94TdoRcWPDZA3oDqgkLmdYVkFgGHfPZ1MuJyx8iV8VtFUPjBKrkjKAjy6S72pfvhy8Tykn",
  "key41": "2hS4v7wxsqMnH3U9Adn2hs8x4PXtPkjTSoRQthg6BfkkBtYgTz9p2Dw1AHBx8UXJ8fUPVv8LYmCj9GWEjVvZ7utm",
  "key42": "5QoWwoJpTZtXvCnKyGAtcLDGTvVEdK2BzxvziapDGkaYFqah1gsHBXXefrdykLLqS8Mawaz6trayfXeAE86GR4R2",
  "key43": "zWgewdDNoZcQiVVqHBLNAscQCeyczfuDX2kdteyQiMvDgWoqv3koiAU7cU9hZUoarxEdDLdPvU3b8nTV3nWLJWp",
  "key44": "d1FdzfKNW8i5DP9UdwPLiGb8668EHfpsug3jrwjXX95vLi5XK7XzgPwTg4jhwaWWuCz9V26cQ6J3QBiPwFXEzY5",
  "key45": "2GDzpq4XTJvMstyChufyH8jfFBToa1d5XbxkUTA9Bssg8gnZnCSjVsh5nYjPeuPpBsxa5fdgezSMDSFoAs5Gdh8u",
  "key46": "iGUsWzWqi7SWiMiRMk5NctXRmbxTvdAPugNPZvZ9QkaAYRGwhtjug9ZBdLvfAzZqM83ucxDUZSmtJrDHnpqJPfV",
  "key47": "58hxJ94wC8sYThNT3sbKhaKgvKg2KMVxM6tAQw2WaMqCoEpYQajNDKKkg25wJrXMJXzeBbK7GnHasqmsKHGSt2GU"
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

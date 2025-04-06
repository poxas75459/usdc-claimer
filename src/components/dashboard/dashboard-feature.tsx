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
    "2UYNwJnNi25rS747fMQcFaBzejC7bnzhcbEybPUVRv3AUjNiKcFJKqGuN8xSuojXk5XbY2Ncm7Uk7zp7fYcHhEvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qRCZxaboukzb7oPJrN9qiQFpmMcJkFJSs9r3E63Tjywz7CKy3i2GiXKGpUeexJW3mrvGiRoJof9B83feDWY1j4S",
  "key1": "CCTGjwhrFsmV6vzRaY8CNrasPVqVTqPJGFvAMX9kutFrwG6B2Xp1t4hnDSHE4n9ezEd5hSQkZ7gzxbJCBT3cTNf",
  "key2": "2aGRqupJuueyBSk5kmitV7i9cbmGAetkvQ7z2yf87hvSb2ydHHSgU627zUMtw6rZ3ZgT5MvddnFjrTJTeRYdDSW8",
  "key3": "4VQ6ah4bzYJxjTzCTntBd3Q3Br8C4RnKocB6FwxszBjQfoa8KLsMuyG9Npbg2k2aymHviucA2RB6qrwaGRQQddKu",
  "key4": "29SKtZxBRcYvX2cMqUCf1eXpz63sob9kNAYFRpMjkGHWXZ28p6txD3KVu3vHQwLNRasjcANT2TVZYkM6ck6ndb5y",
  "key5": "2djMxYyJ2uiYhBkpxTBiRty24ee5B4m4E2S55GkRiPHxaYmGwiGZDiwNPC6yPRVLighCHkdCkwhQceBQPF7CmWcr",
  "key6": "3rgj1K55QXy3DELBgSqDDCCfcKdgW68CtiGYr4xMgEcfDBw1L7jnTAJVqjcgCmXw9YCi4yQ6N2rDRxd8GgLo5SRS",
  "key7": "ZUydpQ2KmjaEXLYyubUT37bjJrg4p21RREp9XUV85mvkGHkUTWQVKvuY12PhXwYEP5ZJN52Mf4CkU65Fv2x6qrS",
  "key8": "89rWm8fH4Ko5HxNpLjM8ZLfem83UiPNaNpyVUXoEvuoHYeYPCKz4PmKzEet9PmQwrHmtCFyajKuAfkuZDG2iwGR",
  "key9": "2RbgVPNYasLuCz5jtD4RciSK8VmsDWKDi8Fg2bSxtbTKcHyYYFXf7QvVwgyD9p7RQELM6aW2BTeW7oFFZVLLKvsQ",
  "key10": "4S69o6DZk3uD4DBzco7B4BNavRpFutTxYKkHyrJ1v5zvZ48YJR8w5DT9jWvFnyc5tq2MXgMCyVAspUBfyfk5oDfN",
  "key11": "3wn4wt9KfxHjZxaafptTNjmBaYrZ6LmmJyzPsqd9K6jHHbFXL1oLYsbGi3Jftqk9dpV451aT2Xbjs1NLyUNMN9rA",
  "key12": "npnvafMaPmyDSbW3Gip1Z5SxRsCwvhZnodyk36N348M5eTPVP7MS4Wpv1ucN5x68otzMdLQ296Q5g7cadPaKpcb",
  "key13": "3t1M1hQKW34kReDQHxXDMecV3R4XtfNc5afJR6UmZdNsarKh5wjKwn8JET6vP3hAUwLxT4N7rA2aJGYBYdBXMD4V",
  "key14": "335yomDBwdPepNHG5z1EzkJyNobMmfPw7ond2cRJ1kMrmHaCNyLHNybxwBxcFMHnPveSr2yQheUi3Y1Vp2UyMA8f",
  "key15": "3nJyJoQ19GW3JvSqqAi93ZsmkUPJJ4GZYu9Gc4GRmPxfHLv9VhdP8h6HAu8kWq1qgJfD9McBhXwPLc5fHZrhyncn",
  "key16": "5YcSypeDHj7QfZUJcgJt7e3F8LKmpRkWGtDtAzbQpta447bX3sDrDp7m4M5Pk5MsHVg8qaTDTKKGaycFXQVerxwX",
  "key17": "gQrBhEG9kjYm89Lip4T7oM3SS3djsURf6x5eVEhK2689kcGvPKe4z4QMUhF5r8TrfVYbqbVeYjTf7sm6ZqUDeKr",
  "key18": "HFyzmgRAwSDxtVX8RYcAYqkDFbwxnQWXYpEL3hxs2mYDVP4c6YjWtMm2MF3smY6JYtU2g12FqyUpm8PdxgVLqWF",
  "key19": "4VdKZPipbEaEGxYyj487xKt546Pdv7TC5N3eBbpho95HmePkc6KcmfZRoHNtdgQD8EeP8gn33ZxyeTV6W3cgK87f",
  "key20": "H61pT8bnUJ6xuYcBAoVLQytfkrSoGdysafw7CLDnbBgcW7rdrmifPCghhq8snr9c4YEfAguyYQmw8vufma9z2qF",
  "key21": "5x5jmzioLtv2fmWbeuTfuPt741MXjt3v7itAsppFAM6MSajvpgSmC6pmHe4t9XHph7BEF1rc3qyRqU4MJ5zpRw3A",
  "key22": "4w7kWX7XorFyogzjNTFrDsLuaYwPLnq6LERMEgm8fyCptYYu6fTcMGWwfAK332V67wjn89L74wZixNTZXA3C8vks",
  "key23": "4UcQZj6WymkDdefYVUWXcAvexcQuvP1cpQ9zAZPU4YznWfwU8xtoNFutFUuSmM7KijQoLNar7nDctnyZAwqZvdBc",
  "key24": "64BAN5EEcm4kphQBY1rxxyxGsxNXMX8b47onotjDjfDV9yXtjvvrhD2ba7f5sh6PxZoCv3bgdxVWDGXN3D5KU4oQ",
  "key25": "ujMYRNzdSyiATto6nCq31deVq9tj2agSGJDiYW27AaQxXK5Kw84cPnUaaoTtVHmVrRoHzKXEndmR9R5JcrcLXNS",
  "key26": "5taqv8zGAKukpqSr8nnjkKsgtkX78S8ZwqzNmHdrZZPfDw8ZdcJ46j7dNtQrdEvLFfbfMkSqarf9qiWmaBBAdTYX",
  "key27": "3qi1W7mHdm78RztdR9DrdFpgXcZUk2dAjm1tRM43dSWckSrwJZ7ekHBYx5adoqerytxhLGWt2cTTud9k9aECCdqF",
  "key28": "4zmAtjdvrjQX6vostKWhstEgug111ArYp9NUSEosRkttQ1s9z3PF7ofPz4vjWog2euiaaV4cSXxv3eq9Lj36UfL3",
  "key29": "2k92xM7DzZMnNxwk5BYyxVdhrcdwqKnuvDUF3z5rC3q3Lcx5imN38KRfdKnVZSTjLHHGGhPDF3S9omTnBChwPniR",
  "key30": "549Mw9EnCQeKvUkP3PWbjLFrBqf3Tgjt4RnUEy7b2kKaQPgFXv4ZVcsu2kAsmcJNucEWzDBpD98UBwGvMQjvYors",
  "key31": "4CLJBMH3S1NDX6RUe3uK5E8qBwm79Avpq5WNASjHK6F1RZb2TSKpGHMvfyDSUrKFUPfmcHAYGg6SrfLWHeniEY6T",
  "key32": "uieHQdW6j5F29JiEBFn4bttj6i2Wzm35yp6r8DUcyogbFH8LPFQQ3LL677TtqvAKcyc9U8bmyyXBaKUUfxaXcdR",
  "key33": "2EbUDCXaVB9QX6Nt5jSA5DfWQdGZL6zhjpXgErUhE1eHh41eCwiqhLZnNEoy9USkDNm6kV8Pso1qSx9wpSWtfwn9",
  "key34": "4cDnLSUSiUFxREmqKGDvCcXiU8KM88sUJ6KDBzJFsXWvzZVKiqNdwNMLi83TkL6JFr4Mztm6pdAfiRi9hPrsasNS"
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

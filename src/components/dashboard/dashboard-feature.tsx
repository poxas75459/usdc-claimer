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
    "tQGnod8m6Njc6uw5wYuk1Z1D42BmMuFHdNvbFM2zXBcRcVnnPV6B6zjXBgX6CFiQhEj8bjsKLcdJgWzUiTpfy9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2trDH4MScS8LMT21HDwLdNtenvuxGgQ97RhMYEjtaDLiECQhMV1omY1XwwfodNMgSyEaVYFcphNeAqGXSbpGEtzr",
  "key1": "2vRmvh4npY739NYJmbER9VjoB6uvry3WQmqsBtHvB5k18aTxV5yUXrAHBGD3t52NCQVs1uZH1UMpLPk7tELdNM69",
  "key2": "5U9Awyi2Po5JQeQG12yVcwxjNdTUQaaSp9UvD7PihwqhPqZXhbXXQXHUqAXHEEg2LUVKeZRyKo2puN9Sd2XFRFVm",
  "key3": "2LDxXhn7wH63oEzKuTZM5grD8fKwNHWXUvCy7qEQT8TpapbepHsVZtiDz61J9gs4JP6UiZENocWWw3yord5FXjm8",
  "key4": "Rr2Zm6cbsYmHWmJGbiBE2ZwD8JP3VhKtdzFA5Wr3yW4gwfLs2bvHoquRLJqHXjErgivw35MA3gL7cSHho1Vafrn",
  "key5": "2faULkEN2oPD2M3J6qLkmrt3jbzbNZvAzEvoAscAABiPrqcV4CrEyyQxxJnwuhsjMcpffzJ6ABAMqL3cy7Po1T8h",
  "key6": "3caVr6i3cwsrCN1rRWHaqgqtuqBte55udX9o3S5oXem2CbEu744BuyWRGcS6VzDYRtEdxjaYMNMk2gr4Gj8CFPyD",
  "key7": "5SbdeqGZcKSWwk1mgob6GkHvWYGhb4VtMRhPmRc5wY6eN5398i6M7jwZkpn9hZSxMgbJ36JRDGTvZx8jXXoarhzq",
  "key8": "pp7mBz2UqCtgEuJm9KQpShFnocECW1wZ318i8R98QHpA8dqq1oQeE7Xz2kfWvzzbMQmVkSS2RF6wMgWXbF4FxMr",
  "key9": "3aqZpUVyYNNHZwtcsWgxpdjgry2pL9VhUu3qFeUgpiNCJgAVhTtx58zS9abp2W4QDFNJRAMdB9cHq6weXCeGvkin",
  "key10": "3YXZAHzPFb1rTjTYALYzDUkUUbdV6KHZZGZp3RcufnqXteWaY4Wpd8UxrrtEuWYL8YTTXDKTWBYSk4ZHcZHuca1d",
  "key11": "2gv1Lq2wFhzk7nmatzAWaYjLNGW5zP4GNwhmts74DnUVndsuvYjbKYjyn9qquyK7NCHaNdo1SkSW3mHDsNs1cmhk",
  "key12": "XbvhtDcusFFbv4ZX1FQNCzFtb6dWVrErdYuwLKnAe4sRXGT6dUoUhXq1D2F7PofwEPayRewHGb4dxhYmuTDL9jd",
  "key13": "5VEFXhNrYQUQGzt6EfWLkJ3q36KyYsb3p2aTbMnV1as7bUYmeqAFqnruejbQj3UrrtcRNXwxPgWuXCdLtRJoCT9N",
  "key14": "4xMRBT9UkfaHdi6fzpL5kVqMSYMFLCtiV853GkRXiCGVkqWwCzx3Grh7DD46LuiG1XUQ6tk266Vb68dagamTnzfq",
  "key15": "5EVq38rL5RQLTSTbcb5vCBgyRGUbqhTUkvEyEcP2e8Afz6XPrerKcgGSfeGncQpqkq4MNH9ykUb2481XbAaJmBrb",
  "key16": "4KjLqCtmyyyZAT5kjfJxcXnoeyuuenvfy14DCjRfQNPGUnkjfWdCMdj1R9hDpbqsao3d3EWEkmEKjrRn9BnF3mAF",
  "key17": "4AFe4G7kkiLrDDU2ksQUDJGnhDEKXJZQiMqC8HJJp5b8pwk9VkGPn8F71srxsi5X3169w3RC5esLeEymFLinYYZQ",
  "key18": "e4kK5Mv96uq636gtXs1WEwBHAgSmYiQtwUq5gPLXcW6AekzubArPvUPzkJx3zbrA5XrLJAr7ixgVMEELkxpuJcE",
  "key19": "9jngtiXrwNjSqU5cLayAT3J2Th43ySXPLmTNMMdMa1wqMjPAB7kfXgpqR3NS6KFQ6vbeM276TEjKCagBfDQ9Mgi",
  "key20": "3wxM9wR5fhvTuXPa1cj1AytowsRvyutaaaEnqyfJSA4xs6zoyCRdREue7w3WPAujfBQoGT6i23tsVFum2HSM1vXL",
  "key21": "41YAsogL1asS44vgqNeHVUvXwBJ2mBKcK4AjRQ87Giokx9wWk2dNn37mFa2cNiS7TfBpJ4e8bc54orpLy7oA5Xib",
  "key22": "4sMmW9wbP8JJHqwc1Atxocgsa8yu8MmSRuyo4u9tu62SziJSUS4fGJgRTHVNeof7t52CU3ampHNsTEZQ1RFXdWdL",
  "key23": "4RSabfyHNdUyzqNAXwatZ2SLYCWoCTWqqJx3HVSwNoYWskcVyX6U6Z4p5iaRhAWmfZudkhjVPpLAcVbXYVs4Jfei",
  "key24": "3DzpUio4ojKzEvXXasgwYMjQyzt68YtkfgpCBZjCZ3rJCPVR8W3frWdBjPHTthFgBuUxcBqRpFh4kzHcthGd7UpQ",
  "key25": "5wrS2cG3MwkDNsZCbsGUoyc37L5LmPhQ2Js4nHYNfRy5r7kesd36VJAMHZeyzVNYDQXPPFQad19nU6j4dHo6DFW9",
  "key26": "4DTfEU9HgzmYM89inzZzHdSFJreUWh3yQgeykndgx3DusRrHagwbYpfWeiBVsmkr1d9uaUfxhc19xYH2iav2thwe",
  "key27": "rMjXqHWRqU49hZND3FGCCWefhJdbXWhbv5D4Wce4gUqwS5Ezvc4wKYZ9qjTNzQQxxbUMz8upPYpwQkEnSiEYu91",
  "key28": "4idKnqZgCoVtZ74Q6hLSjVqoFSetHQEG2srrhvWbRXvkQfoMuRpAALpMbVtxxzByjVuXj6T8kevez6PotStuFyJm",
  "key29": "2SJEKjBiJayTvkNNgvjsAyaTZ6Ltyfm9xCzFBVYBrhR28AaLv6oXoYG3u7Nduys1awYSx4KtuzvEt9svNeAZbd7q",
  "key30": "5fY876KiNPF6jhPV8kcuSHhsjYh9vG4N7E4KQFBMs5XfmUjDMhmLSyb3kzUd6Lr5xJrf8fMSUerX4L8967kR7NaE",
  "key31": "5PSx9fkQutjQGBP72PD7ekyu521gHdaRzhJuZLFfNAgz1yKmkjwRLi3jKFnHDvimYi8zyMLhar53k4qfEpu23Kp3",
  "key32": "JY2CsjxEdMxEWcXcKT7AtqHUNUgK7nNa1e2pTXKmHrcFcDQT3vzYEZ31YuRN4FeFNn9roPwKrug6aRaYBsKAhJR",
  "key33": "4mmN18fusDUNLiA8NJLAjtGwxY3ePxtatuynkj9XLPvnYAB5NBXnprJ7aivfm6qngVA9NZGnzU1UuAxDe57zAUCj",
  "key34": "2xDFtB2iHLyVbAxr2ingdDaZV762PG3PP3yQGc76ABNpH8MECLj18LGaJhfiMeCtVr4nkB1FmTCXkFp8WA5TC5VG",
  "key35": "3LWFeSpczcu6Y84nMkJRvCLCrFCNTJfCJmT4QAepAiyp9SRaDA8AZura8crYzhAnqgJc1eUvmjddh1fuwEFdf72x",
  "key36": "2hjS6tfzpCBw2uvSor54YVDNoZV9qh4J3QXmE73rHJHtZSFSGg4Bgnd32Nv41EcB59pBbJuCM1jtxAYUNhWzUExo",
  "key37": "45S7AkYJEvdwsr6VZzKyrshm45XFxQrJFNSPtT84XyJ6ZpK9jBbZT9XFn4vm3AN3fFPiF11EwqNxPV6g2gzoHbfS",
  "key38": "2V6fBXpMaQdZkY2eeDBZffZY8DMt8JxkZud15BCJx78uPk97kFRcoNp12txQC6BJzfrvQSek174AZGpU9bG5rqwW",
  "key39": "4REwXNBWY9ERjLaXvXWCb9gUgN2S1tKpTnZfpmQxjNUmNjLWQHLpkyHqY9qF5y4iSjDBBq4dx5HN5c2gzvzYVnbu",
  "key40": "9FN4rqBd5Po5eCbetopNn2DjQ7ChNnkauMycY3nwEjqBtCqmcnR28qiSA8gsfGbVBH5vHTodeGsc6oc1ZYHGbX5",
  "key41": "4DMARhgNrDgdq2hqLioHGMiswX4SN2NCAdhbECfbc1vEgA6xbrJNtNQ9r2K9hmgwKRKTAnXWRvEaSGUieXv55VEE",
  "key42": "4sz4SatHKazaBEFXWXau6mTEGv6ykE9dmSGR2M6hHxTmtBUxfP8yyiRxpuuy3W3DGKWgqbHFkuA4K1UmXiUThMW3",
  "key43": "3cHUzVt8DVSUA2PtEgG8CrxcHv68MEKBzXuQ94PChiFzfmV2nLNwrs95xN8kjYLdnG4csn1aax7dEfJGi8G1j8Lg"
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

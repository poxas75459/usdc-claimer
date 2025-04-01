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
    "5fmZjz5XEQZQXxLLCSGbmdCTFsXafniLbmQFhcyqY9q6wPg56FUFsi2ouezjjZqMizBFXPt8ELqRCyDUJqzaAnRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NFmNWN4FXVvmJ4kHQFn2zSe1467sjx4ojrAFJcKLmGgdxWswqZaL3VqgRAdLDFAAPaNhhwuK9oWQL3SwQD7kw3y",
  "key1": "2ayo1z8s54GSJ7KuuSk19ZiJ1KkwHGCwqQWkYKciPdaVPp2C1qSrkUuZ54WKLgCtTvmBNG8FrAtsS27B6cdiY5j1",
  "key2": "2915Sz6joiWAvdTJJAcaPQCeyR1TSSB75BSfV3vPzZrgX4Mta4opJwd52hRCdr4BBHhNA5DZzvnJv1bQBLE1nHwX",
  "key3": "5AUzJ6EFTUBMe5FnSh6M68QF2vJ8hUYRj3DpGBRjFf2Fjzczh4dC6E41C2H2Ex5JmyBAYgHa6V337bP2vhLiYVBi",
  "key4": "3FiELrDzMgeVwQYTLv5EhLcJGSLXtGMmvNJqq4LZhSKcgKRpqfigrGhne5WXXvB1XUicFh4iGUceFaNiSE3Tbjcp",
  "key5": "DgbAFhuacv9N2RVhC45dzhftY2JokiKj78qzwXDDTyLmCqnyWFaY2FG2P3nX4YE8KV8Tssara7EufPWy2JJJ66n",
  "key6": "QSDB323DNcA4uepevCWRebHg56rVpzQo38tU9ryPBTaJBWJdYAeWmkYxaLqoHm6tyCRcHbBJhTjhieoRuZCBobp",
  "key7": "2139hW8XMfhwXZu89UrSxSCDFt4Lmk24WMg8harr5Q8v8yfbZfugMe6RL8vy44qAPTjQFGCiseW6HjkMHNfEDuow",
  "key8": "3gHiqpZAA5H3zFfbf9AGCe7scV2178gWXTJo3MXfdNLvFpWCxvtujPbKuLYerjNfFhmhbWA3dGCiGWvzBEpCYLXo",
  "key9": "3VuZt1EueZHe1PfsJgLTwEww2c3qJxCKE6zDswUEmTAJDpZSXr9VEzBRaitvuT3iCLVqoW1vkVZFHvXkxQWpabS9",
  "key10": "4mxm3Pf8RKxmmqU5HdcEJuSTUXB7epGhWfvk9kQB3xxkGG5Vyi5HLReN1KU1Z5p4ukmjkuQKgnt4mpwjN3vye5WW",
  "key11": "5HPotbZEDLqbuvKT9TRsRoRgDdVVQwJSR4LKZPHTV2gUc7mkRWmBRo2ZVBrouJazWhPr7n8Zbm7XkCpFX9rUAE1k",
  "key12": "jmDrBejC3GaNGbjA4bYZH4ihgeEZWS8vdLKKe7d7wZWi41YvMCxyrwmWq45Y9WUVRc2yqiobywReSyhsDM5Gxu8",
  "key13": "4P1XBh41HUWadsSbzHu3h5vPVf93L5HZGhgBmNwQ7oTEEMESiDvtoW5GCtCyM5PYRSKQmi4sz8iEkR8qCSjT41DX",
  "key14": "sHPp2jNC7v1LZFMcGNTD6bYqajhNsDp9MQ88pb7feSNuT2rrqL2wqtWNgNZbYnM3yuPy9P9cEoQ6zNHzjXMSSQR",
  "key15": "2gqEWaHjrMXiFSrxfpvBWZAhHhw7VPhsYqDS9tj7VFPCFXrqiunT17Vz8y38mCnxgkh9SnCAWurdA3XaJKoA6cqs",
  "key16": "5zkmgCwyVi7QHuzYr4G7YX34hMqTDhaumuRLMFCF8URMXpqJn64xUK9QekbuBZC57C3qjyAuQmcBC8dL1GD4U3N",
  "key17": "5rjojA4mrHDroHe9RvFnnyePobhZEnkjBVp4GQKoA4CLsYN65uQzRNL2Pae3kqV2dooJzxe9QD48W9awB1LYNfA4",
  "key18": "4TyZsMvWYsZaqLJWdxLdu8tx2nP9moQcmqydHBAuKzPBdkgXBndWdqRp5unCgxS5dManjsi4YreAT6ip31nMwsDG",
  "key19": "5UFH3gQKDzVwLFE7HgpGwVycEWTEXXQGiKV8yT41s2UyYPAcep7bp2x4kuVYBgTS6q2KCZHUQDyEzPpHUB5GCLH9",
  "key20": "645n7Rd9GDzQHEaZHvkfzDwqV9No6QQ2P3Sib9m5aJdmSUbnCTcfGYtAjUej9qpV3tCEkfqrCZydXxZxrkefehy7",
  "key21": "GWSUFqN8cZLMMVaRbcRcgH3zXAxrcf51AzSg8Rj1fC9qbacGK1KgZvkngYAX4JBWsex2HW6Hnbm3evyuMV9RNxs",
  "key22": "4iDXMgGR7FPK2sM4JPWkCyv7PwJQvyKxPjpP8PoiEkCRdfxsCitbd9FGqun8tV7jNeAXELZcrPdcYcGKi1fhS1tq",
  "key23": "23T7obyqDWcJVTroPeEVpqv3d4pMFh4VQ4nYEBLjHJ6TpmSXBNc4QoAwPg7A9N4u8tSwSEzwNYCFyg2VixHoJ2ba",
  "key24": "3UC9M1gbUJ3UsQAMZgpt4HfArqLRj6usSyT5K9jsf3z4iqBLwbXYtuuzVrLZbBnogtVgBvZPqTTNMajBNrQs79Qb",
  "key25": "3mxfYtVEhxAP9ZuGicYY3WKAy8WmeDQKTTNjVC7L8j5CR9DGRKe5BeRFA9P4gHRguJksgw8Q3rafRxhT9SDBj163",
  "key26": "2xjYsNajfkjN3N4dE2brY1qknpdTkbeticpXWr6CnNP7UFB2DGYVGDUArvCctC47F8u67BJR2UMcbauRtSBMNqF4",
  "key27": "4XqhrgZNaRo7Kj882a4NeoYwQGn12gowX33Cud9Y5f5AjgSR9YDJhNfi21UkB6q1ev71CRhYpa3ie1KxrV9NH1u2",
  "key28": "57d5okCQrnfKGXMhKdkuaX1Ff4Pz99kfCqszfMXzjHcYthLG9CXyTcDmDRhVcjnyTSE4qWrVAoFmAnsFJZmP6ZaD",
  "key29": "2QQfqtV2tGajp3bf4uCCva4M8KUCPE1JYJGCHSFFdTjb7oo3zZA2DWnUn44XdmgDXBN4brbSTNyBmvprWvtSGPuA",
  "key30": "56RUnP17Kz2dBnANJw9PC3Y1pvt5x1YidapG4oJL3qW9f5pXdVK3WW1azZF2125Qkdx2wWn4Q5QmxR2zfediv6fy",
  "key31": "26Vi7qJjVvkZHSTPfq5LxhqAVCXKcqzPbLf9WDk6FCiP6hd7BDsZn5jF5tKGZKb3BMrcUwrMqQUtYWTjwxDEbv6s",
  "key32": "3tpq7CeoTvCUpNJPmc1knJmQyBVEwrz8oR1vyrn87y79oto9XtHRzVr1ZATeJhaPWNMGUmRise1hN6TNSaHjcJwW",
  "key33": "3G4XSNS42gWRHFRT5d4afKxBaByaGX4agz1EkUGkqMBUMK5ooAkHWPiwbt1qRgHpUEzbaZbGp4PmTGjzGEum7vEA",
  "key34": "6ZJ7CgxXmhSXUJDy9qDr6tKoMr5pqXhwgVMGmQQVtDAvxm3ukLjnPhqWsvoNkrsPLPphSxACb41pjyfgTnAgkaT",
  "key35": "3xvWy3nuMUVbcxeRQ6NQt37pvGd9dhRrGRLyc6urQ8aXwDbCSmLNEmMCjnp6J9DbrNu5ccBGfZ5QEx5JhREMBgPe",
  "key36": "26H4d2heGrP4KKwCgDKWYcDmLW1SjSJCmbT3F4shDuGzTPEQJ1nCvLU5YZMx7PQbzDQTCr77VE5UvwPNEz2E4CjW",
  "key37": "33qH77cWfGG9zEFCnQmEP5X2hpuR6bcNzxpretpSJ9a33AwJwq7mPCqEqFYYARPiCjfD7Z9f1GSfTAxhxha7p1Nf",
  "key38": "59RfAkLmtrdNeuKkRQjKoCPXbqCAW2XncriMiRvEuD4c4o6mDQD5tHV1cy1nbMXq9reVQfYJrHd7UKLhRArTSR7N",
  "key39": "5PVoVqm1eXoLDUh1mEuKycbv8Jnk41iD7EFn74Vz5T3MpSPL2d5gKYqVDJezceGz33iA9VuPQ7E8FLwJ3kxLxx2S",
  "key40": "5yNLiwb9eRhXEqR99MycA85vwAXwUAUckpR3NKw6JHVfyns8opHv4sFtX8g4DtsThhSuMgUJLdU2UtCjeNr27mus",
  "key41": "3JemQrHiDVD8aYQZBNMpXeqWa8ZinT1kuiqmyvFVZ8rD9zJYBZProKTPrsupZFCKXKSnLaWH83ggtdxyM5ETrTYZ",
  "key42": "3kAVJw9gd1Pu6wxHXwXjWFozz2TpWsvqdwP5MeAJ7H25BExprFEM4i8zUXGFW3yH4Sox8ezELZtQuCd2Bc7F3Npq",
  "key43": "36KhVZJ5yRqDycLnS29KpR1FHbx4mj38uHpJFT8Vwa6GipuyHfAiWeA6w9Ko4vZMvqVLsMr9rvoqRXv74TVPof76",
  "key44": "4xeSHktpxypfVWLTAPZ6XHkpKScWcveHVKyLPdQFE59mMudMoqF9BkF6dXSjQ4xrgToZmcosjwzf8PS14zpr3Ya4",
  "key45": "GNT4swTY5dK8Da1Qs9iPen6SBkVRdKPC78npqFQjSHGzds9G6QMVzQA8hSwMnxgry3io3zainW6Vrc1nTamuyXz",
  "key46": "4fZTut3tjGhutYfkVm7G8JJREcd3i2BtNGAYqgbfy6DBtQ1Rt2GKwKYVFSevPmFhjUhEoAhMrGf1poB3fTui6ENg"
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

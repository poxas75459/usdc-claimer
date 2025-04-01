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
    "4kxFUQLZrFQTeW9T44D36rJAt4HC3fQ4dzASC8ULw1ntSRGsvNy32siREGsHxp4CzJ1ex5XtTL72CQ1oGS3nRuyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbPTZkUAgTiH3anwWDcgLgP61ahWXJNHQkXcW3obiHKMz4inaeWgg9TobhtctuKd23j1FnhGwUPykmRqMa7M2WE",
  "key1": "7nm659rxt8eZqt5syVnfoV327s8oprXAdESeinSLyG6pJWQX2ZRFixD2yUy6tXzWSVvfSukgHPRdMXTdJYGxwBY",
  "key2": "2QozbqbQqar6iEBscuDDu6su5h3Fty2uNM1j1AbWFyrPjHdhSkWqWuGKHDhqrRPEnLaHdDVC643ioxR7szZ9g1z3",
  "key3": "4LyWLp8GDb9MVPHS7KZXy6tG57FKnGgYsFhqfZCLTbmNWy9psLWemwfUawHM2LA8kM6xstKHR99KGFmqJtgzWBME",
  "key4": "2rha2tssLXiVNaNkShj4mh49bniJqb43kjaM4L8RU6gufivfxb2353rWzi6EjmZyx7eJB1d7N1MVuVKJorhKz95H",
  "key5": "3nMWhBUcKJtSoVqPGh88TWbkxyB9SRCC5FpxJsEdLejJVEsoNrC2dBhk6p3my99b8qVk3rBaNcSM1oe6jsPRPr72",
  "key6": "5XnH4Upos49FQRikFG3rWijmmz5frsKDWX92q5dhzVH3JcMD8mnCujATJedzU2XKuCwq6pszJy3TiGusUhpDewW3",
  "key7": "4nK4mBTRPksfmtSFxCB5oBpB6qSPehRgt2oHTEg5WjAbTWsxAJA8JHcz9gtrRn5w3J4FBEBaTFpPDMu155PjHmwy",
  "key8": "Ga5ZD7wQVLpTb4XMpHFxF3ZgXmy48F2AvtVpsfyZLZTZx7CAGrt8FWM9XabDTNJtXZ9Z2mdnVtCQiaT72zMXMyG",
  "key9": "3NXn1h3cQit3b71m7KiKv6S5GDMKCVFYkD6BwmHie6c6ZRe7ZQmmsLPyrZrJ6PCeRJta578XPhefn4TmvZ2A4pad",
  "key10": "3TeDK3GQE4EJoumgaSdRMQpP94mRLzdpMuScAf1vT93Ykamir5im8m2cv91zfSM192HScTwuCrum9qK5W7Z7Fb59",
  "key11": "3gRRnjPde4xQPi3MDqK55f7WojnDBQYoJFGeqqBdA4p5YbD7Aq6Pzdwdk9n1TNsBMAbYhwprWSCwsimf3x8KMr4q",
  "key12": "3ZYyefs1ASq8QyUpwW3q1n78JAnYTE6Yty4zjBNeomw49gPDTtebMCHzSXKuczVAXmvDmjt1pLjyc6aBdd83R9BW",
  "key13": "5UD1T55WB19qh7acs5xANW93zndJ4spGiwnAGaXKQHyQGPMvGEiuxa8kPG7VayutMsM44wWBciv6R8E29sqgv3J",
  "key14": "3tmeLoYWKGkGMKzSN5xQMW1xrnqK6BnDT7rnKMeDt9yGd91GiLBDVxrG9QtxKwFfHUoVV5U9cJtPKPWJZeXJUuG2",
  "key15": "UAjw6QLyRLb34WgC1kcTjgGwPbKynp1j4xNHkuZZfwdpcuhB7k62Kb5tCv7dQFcES8mTWhaWghyecXcJT72ko79",
  "key16": "3fLEpYye7vHmPqeVYnYMiiDKrB3ZWazxdouPBhi4QTVVyQpJvZ7hTGU1VwT9kcQaBQPkezvnBsoazFpwqKwCDvNR",
  "key17": "2hWQKKV74FUvLGi4foEsMAZSpH7WGVpWemkiFBTeBfonQXwvunUukjQGmqy9is7mnmj9j7ZSENzK9EyVoGnCGaAg",
  "key18": "2E8hSxoXkjU7tUXgCRJxh6MoM5E9QBq4AD59UKeURR4C5uEwdriLWv7NECRQ2KKvDk894wwzx8zYJ2pUG1K4FXQu",
  "key19": "238b1GCZFe841knTyEof4ufPuXV56gj3S4xWpXrDMZmHrnPcs9vfhuAWizj5Gp1ya8zPTiw7f13XwCA7Q681TBzR",
  "key20": "4B2haupwzdPxAoqpSUegYUmnRNkS1JFGTPYXL4YuXk9kvTYVsJVM4NhsGTYSGH7PPjJjA2oZovS9n5eNDTXBNkHN",
  "key21": "384Yr754rVEnMLjfWf2ZJuJFtxf9pGqos862xZhEDPUhHhTPVBnwmpSYKBW8D8AHx9f11ZnHdXHPoX6sogvSZNCW",
  "key22": "4KietqhQJuRW2USvYJB4PQiqJ7nMUnrU1h5xphQncXMrnkHSteS3Vn3xsVFbd1hFs9wrjFmisppcfPHRHYq8sXiy",
  "key23": "5MC1Djxgvbxa57cT6M342aodYYx7XL7srniSQNJfkPyw9np4SnuADmNiZiECoSBC2VKGNPWhq9JBxc42vF3hDxXV",
  "key24": "673qNkVTNtTFdi4YBzU4FFhDxAyoAQ4Mi9zJwDBc9psTfg9n3zn2y4QyaaUZvTAAf42wzEHLC7QqreJK5SwBr2j3",
  "key25": "3PwwDVmMV8PA7F7x88x4A47yFC3JuvwuF7PddhSzAPvdTxkASnKeCmQnFbqKRsixAjZNPY1vUQizcGDm3rExZNyv",
  "key26": "W1AfvTD6hNzsupwwxeJXxQpmwhm7YhR5LK6uBJHRSn9XfHyXZUMeoiabisaxmKTHoc41cysFMi6QkWoKt16s62s",
  "key27": "2M25xKdhtQ3n91yYhkq8voX6ih1uKNNg4FaBthMMozKG4wvp1jJgKXgKVm3nLHbYHZ3KX7ErD7DZ3HDPWBrP4m5G",
  "key28": "5knqh3fYwTAw49E9XhJoRh2MNFqwbAXxfTBaJZRH7Xeyr4wV2hT2cGe6122mwRCmNgMVz38Y7r6mR412i9Z6r15D",
  "key29": "51PdUxXPpAo1RkgpV62PpdwzGPmF3gj6Em4XyHNLicvihS5WapxY9tVA7LTy1roJ5QrghYobrnDY4dQBRotanDe9",
  "key30": "3vzGVHp9LxdVd67Bx4BDWfStYRW8kT69Vkbcdqq3vK8nnwV9LuSpCUiR5tw6VbQFUwuHVmKaBXuue8GwV4M8A5aZ"
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

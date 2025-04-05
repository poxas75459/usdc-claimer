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
    "3PMbdmFS8Rz5BcX2Ejh5REQ9hkRnkVJLCVrS4DsipP4eZgABfUMqasAnvkPJrBSnUThUvveQXw5rFKcb1KtJQbLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BULCnQXxysJidSVog8Qeo1D7Gu7WvMaQJLFmwPNbSURLiKbfAxz5qrWf2QwMyKTg6WqFHR3Ac7Zw2XVKLMAkNDY",
  "key1": "5ySA66eXhkKRJJTYb6zrSjCVj978tAywwANm633Ffwt1iwwdbiUDe4ABs4gAaYSh2wCnXuHnjtT4iC32gvBjDZVK",
  "key2": "21VnF18FxtwuDewFpvG1AkGtsZgfGdbs2BDErthiDhNB1ayoo9UmrKvjtDEDrQrWbJBE2Hm5PLrDjkipvbt76C8X",
  "key3": "5qgs5AQfj2aKigaSQvpeVm37C9VGSToaNA8poBEYSwD5jXgX71qRxcqNWE8xTvvXzqeBmMMDLStSyhgv6qp66qGg",
  "key4": "5pZq4Hu8snDLu4tcLwaVGU7NeFktfbu6AepRbxvRQhtZ8T7WpXXm5FYYLd1gC6V5jY8Cz3hXVzcMu8JkVtiETbAQ",
  "key5": "3SSZmDx8C69Pf38ZQ5MnL71NAuFmmCgwdP7WpGhTgWbDqbF2695gQRFtux7RAv41isPWLsd7hhF3ogWPm8RzZ6Ex",
  "key6": "2NcnivyypsrD1zNHbVKf1qo43YXixjHeWQ6fumZpdMzwv6JHgsNub3pr6Kksei5q7xBvXAQwH6U9rm1ugYVEawr8",
  "key7": "3g141Sh6A4Yd6Q9hzBBLDhCviNG9adZVxxDMa4TpdCkXR8UmKdckK48pbqeayMjcRPLhMBjvkm9SrwgZ9GsZrqKb",
  "key8": "2U2hj6T89q3XeSqvrNJarShZsJMGzDs31NnsshbPJa1Mr3kK6SiSyZxqquELY976bjGcW2wEEUQ4FQwo8hTApxvg",
  "key9": "i3foY95AbjqLhaGu36LPptcivS1G8xQx4fuE4HEDheRBrgZbTQPx77Ewr2UhK7t26LdtLX7GdPZYuDLoBCafL9c",
  "key10": "3MYa7Mtgn7kSYjpJQGCrwv5rFZR5aJNLvrK4apo6H5zNh8tmNSSYMbg8FokBKzU792U9Z5Xr5f31AwqDJiGjPGRk",
  "key11": "27sgPYJXh9NpoDWrxhxWJRQw9M6agcz59ix2xpZd9c4s8s5XXunctTu5AKi7UCPm3tAgKMwH9ZrhDsH1K6ixX7Pt",
  "key12": "5kL9zfjjUCm59o63GGtNCUHEqaZQ8VBMNrjWnuEKbqQ4UBoYTBXrX23c39KgDPKA9fCupu7ga95RKbWiBUjT9vDb",
  "key13": "3EZNyKBxPnxVcrtnu2zWz1UgkEwKRnq2QuwthvduunzCoYJ4tc7rTorCCmqoAH7MzqStQUjcoDstkXmD1PWi4qm4",
  "key14": "iDx72xcxGMpGWSzc9USYX72LGpBK8LxtQULWpVAEkrewv8Jara2j7kKyBHw1pLpBASfaZcvyRq9yMkCL1M6oWGW",
  "key15": "3ZFUgjnBdUU3jXewCw8okUNTQDgorZMN92Ebz5C59UPGHThmobyM3WQNv2V6Y64drdbWYjrEiui3HP1VGGJ2R9RP",
  "key16": "4H6sFjeF8RenkTYf32J6V9r1B9xt88F1LMfNYPd8ojKdiWDCvojoX3Rb4xohSR2Ez1Gkuk1AqjtdJ9tFwvVBLd6r",
  "key17": "5HWKgXa1wyJKabbWnncpXJVsHKjiGMn44xRefx5ZT2Bcsq2NSsHJ2T5sfnGpYmFr7rZs1QNxwgqSo8ZTy7Z6v9x",
  "key18": "2zU4DQUECVFEqDWCCdK89Yk2UdxvFDCC4CHvNiK1BysgjxxQ7Jv9FiWxkpHA9ryvq8T2Q6ow3MmQGUHRFFahWEuy",
  "key19": "3LWa75TFmUtw5a3kejSGaPAWsZbPkKUFk8WqN1KNBUL7TidWVdkbHQt2YaSjbpbYAH5SDDVQQZR3Q6KydZyWkpSx",
  "key20": "3JT3AXgfEZuxTfSiy9LEYsSn3mh7CVUpPDZV1a8x3Up73vHxJ7Lnb4i3cqd1UZeYUD5UHcLsBkBCrairMn2tg9gs",
  "key21": "2EiuHV5uV4FvBByhWcRxQmTk2khZyXQqXz9e6rsVxgkjsyYF76gziVsmzPkHd4WXJSovHJ48zKYtnNGy8mVALoar",
  "key22": "3Y345BqHWyeCdRHfhHFPYCb9WMcSKwwCmiyaN2mopefsSdYebkP2uFsMS2vwe3ZDQyaMntjNiEvFsTCEziCiA4Qt",
  "key23": "4JriGusbLsh7JEwDqSfADZbu4Q1BfxBSB6yvV4UBWp1MQSHMKDFxz1iAyfWiSBBtGFXzP8a4CFY3p4djj2uhvbQ5",
  "key24": "36Er2kHHZkFWskwdreVe1trqMr1q7FJYpFAmb1gQti6bma7vS5Lhq6FGvdji81h1mtxChbvBznWzN9HEuAWKnjkM",
  "key25": "5LxmBGLRAom3c6VnqiAthX7PTWNiqNQecPkvQErnYtkzG94Sti9hZUeBJP66QrpbLpTyXrcDTQFrftGvFjB9f8aA",
  "key26": "5Kz3rddeUxuEBFsmedMNRmvAKqay9VysBQdP1xZk7c97bkUmswmbU2R3mkiacFTsD5CaPFfDx9Tpj5C8CvfrMMJU",
  "key27": "2Jd3VhiDTvfUk754AT3dHY1G1ik9BqNiujbo3n9NDPBi2Tqfcd384FkKozw9pxDxLKNsZWGuxL915NmF9FwSLone",
  "key28": "LEuMRTVbG5Y7tLx18YDHJ69zNAxvdYjhFRk4chhX45CFFFuwYLX4Bq9oCC6cPePZu783pvBci7HLqEZF9YA1LN7",
  "key29": "4MfNxW8VzSuZ2GQqfo9gj76X6cTLJYtghhpXjuYPx96eRq9CoCvCUjnb1xhiShqS7Y2eT1rALz7wGR5P3ft9Lg6u",
  "key30": "2CcSkrpfSHKrrHFYu5pE49uQfZnnTuDbFWiABsmF1H5MzNHbosXvt1qcVfvwnZncTCPFpvHhRTVyhpvYjdfop1So",
  "key31": "35C4y7juBwvmxoi9ZKJcWF5CcG6FezF3DbZSrPJ4wme3m2SSw6TiV2vmD2oLLUc4bCkKk5sEiM23WaLMSTdRdHy7",
  "key32": "37AjrMRzGB3ZJm2MsC3KGiQe8rLStdjCiyMGrXoKLF4Uv3swte3iAfPfaxr9tSXgNSXsUGHSnSBwVkzyjQSDymSp",
  "key33": "xeBBnGL7oHWV5RjLqYL16q6FhZqYMmeCQn888QNSCsZbYZAGZYEqvxG5UuXUEW9xryRAonqz6zDGHrozk7T8vkL",
  "key34": "3FpRcPTTC3BAEa9GkAYuoEEux9LWL9hdmC7irewujNSKJQuHTFU8KdBSZFb2Dr54rRowvuZJ4KBHfK3Qa2wAGbBP",
  "key35": "5E9aVkRkTczeVaJbJfaGFZSoGifJQP6h8BHpDPye5ykPuWmXdv6x82FbCLZMGLfZEy8o2ZmbekEo7VZoZAJHUesY",
  "key36": "3pwo7xTYqpGnWNa4bB5Po6FavB9LtTpvMkudrhwqcv1AF3aKB55iD8S9Lky9xebjTgKEMz4vKU94s1VrDCxv1i4i",
  "key37": "4yqX9U2z4EZqcwGuiLYvGiBuCye7TbdoCXste6P6ZPbAidSqXB13hiXcfrAKjnn5Ja2PVgF5MuNKD9ExAM6NsUFp",
  "key38": "66tKzJ8Eiiwbv5BxheipFVsAvDMSsG6rT7djHhiybZey5uMd1eVAque5h2et8KeyzHJqXUx6BMqKjMP36phN6iyX",
  "key39": "5HMzSjf9aWaYU6rVws9iJEXEfSdhGVrQgKcUQ3A9joA98YqopRU5SA5U4ZjgxMi2giUuPZCzj972XtP1yKKcrVwn",
  "key40": "xNe3zVGVVGAAA5YJnUv2M3zAniVv2MzWCqppQU2QqmNvvwrwB5MZmRecPqEh3xmg5HA4tnu5Q499ti7C8AtS4ex",
  "key41": "JmhUAyXDtTL9t1YK65QKnxgQGAQMapVZtroDeAUCbxUzey9kJnELTUHRWcNuyEb8JQ5mw7E6yt7UfpTzcAKzK1e",
  "key42": "5u7W7qoMZ9AwpaLw4BxByaQHgT9SQykrA7KhjFz9RweCSCdfx7v9wgFDFHoWqmYAVEYGWR5aGwfukdawPxTCBHug",
  "key43": "nzTuF9PVbd7VA5WCTtRYawJcgVmutWhX8KxfknMU8MaX5CgZkvXkqFsLFc4ALCrq4SkbVrPd4GCXfMtFLsbZVFS",
  "key44": "49WdvyZLwanj1h9KnuxQXLNRoL1nPVTGfgS8UF8A2pbbRvh1K6AFymgxoyGG2SoCtxWUTnU9siF7MAwT8BtoyJew",
  "key45": "VjV14xf7SZE44cvTyUrosVL3Ge3mgnb8kFYbSZGhYVswP4G7SWMuuvMkZJjNttceoJ6jJtikBwTb2PgVBTGLYTP",
  "key46": "4S1XU6rpcPJ8XuojX8ZCgg7iwpSJruS5jE5uGrsBVoseVud5Ln7TNLs8Kk3AegM5Pviaozte9GTX157YCMYzYRXc",
  "key47": "63iF6bFyhnpvp5RNbsRwgEpQvzhpfp7r8xaGmBBHsWCiSX3NRysP8PsmwtN4hMf9F88P7pQ1PfbmgVtgFatDxS8d",
  "key48": "2qNeRnB3aZLt5Nvo6ZMB5gsNwUNdzC9vJgaVb8ks68V5SRP6bk6iEgy7Jo3VreQ9euu84wDGq9kj1AXeQzGSQEz",
  "key49": "pbbV5UEEXgnjn9ogQ31ZpJVBwajnoU8QZtkxL2yzAHEigZgkMWPppHkGjpRRpAgPKY5Z7xnf8ouFgyvyQaqZwG6"
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

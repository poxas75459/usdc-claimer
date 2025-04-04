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
    "4RFBTv8NPW1kByWVEzLLT7qco7QddW5WCpc867X1rRvKgCC5BWMi7Tb1jd4FsufuVpjuaKwwtBC1XFtPouZPKJqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26m8xk7n4X2PWzj8EhmSUvGznEoW2HeCtDFxdTREXV3cRq7hx2s6mAjuSfti48sAgCqCUNib77VShHg5J9DBuHCA",
  "key1": "3RAqGXPRL4NcNBxpUeNCeq2Yx65XJF8q65CA3J6nEuVgkWSwaRAa9TjzjKRDbwVaVGXkm22JntjEHAr9sHzk7ZEc",
  "key2": "2Msks3oiaQrEJURrHiF3mUszMmxorbYFxiTXCBFLyVbScMKzFryc2QFMEZiq4PStwCpxF8KRLQDeNqQmyRcEqQnF",
  "key3": "522vDV2rsdiPypCRWkbJvVS3TwCUCyNiJBD8yhuEhHrYDzKGMF5RtNHanLyWKcHRqWhpNVXEw6dehcGb5dknkEPa",
  "key4": "5PrUpQWKd7VCqLhbBvyypeWyk96xxMEbJ6mws6NHj5e8iZvESwxWhJ3N7MtjHHeGRbzKrV58Ch2e76Zj6KLkdZvZ",
  "key5": "4Va3WmJhiXnxeSGBtdAtjKpWtWbrktkQ6Dibzk6hwwQfAQWeTZRB36b7Yeze1pG8uRezXdehGQPUwXCqg13Vcd1J",
  "key6": "2SoFr8zPnQKrxeNbKx7rD69TCbRPCp7P9YteRmL5fYMtnrnnhBV6pfhztvwJVSWg9QTH1taNeXofYJk1ijf47Cv1",
  "key7": "a6tJ79dVp21cdkC5j5uzmfLGoKjpxjU2bSrGt2bpudidNn4Et2i2TNHBDq1Ybgxd9RgbYGcphz5oGQ2qeMaVRwa",
  "key8": "5rVxvhYxNXB3ryMwes3K6FhGaD55Uqig4UTktoC6eUy9UEwsB5r7drBxd7X1gRjGw3dHiLHk2N2mxdrd48veeYap",
  "key9": "5YihVH9YoqfLtaBmg2AMQG25r7DDocwgJUAkX8mehDRFSh5WfkHrTw6VB19sUwjuRd8wLYtjkHaYKswBMmK7Kh96",
  "key10": "483vb9vx91Hj8uyGec6kfxqAawvF2oaKoJ2HvsjaPJVMkYZjMJSQBRe5Yj9opgf7Md32Wr1CbvESd7vAAji7J64f",
  "key11": "3rA1GkRBUxpkveZxxaVPYb6HGAkqqhyoKb8YcuH28LKyMZYGws8aUaW1Xh2pMXMRU1W4ZFi59aKB6MZUBPwYPne6",
  "key12": "53mstVzvyywh5yL4EscU8KJf3VUiPRU2snU3essed7NvnD1H2JsysqHwpDDemUQT4muVQQp5C2MbHdXE4bVNSjpT",
  "key13": "2jQwxS57Spu5CwZmRzu2XvE2BHbUCV5LmvcoP3J3Lv8F3drvBk2pwpSLgSJPgQpgRTeFk2vxRPKMj3MisCjk2mH4",
  "key14": "3S5kGyfxuAEPeEZEyGo97bribhD45gtaEgeLWxV6JjjjAwNJiRYQ5z4d3QkfYVamT2HZbxegMQ3igxSxaeCSnPQX",
  "key15": "uT7uxxAvAqKGvKyxyFZb52P6W7d4MR6fg9ENT3Db4UqnoC75VXM94XVmnzbgDBcmiK3Qvc1BCqdJi4dVRrrQR4P",
  "key16": "24sJshXHxQUXCuwRpaKVeEGmHW25jnkgtzFH6kXMC9KxNa6aqjsQyCoTsanuF4JRPsFVMuoTFRdu3Wg9tyQdirmS",
  "key17": "49s8GdTwY8e98c73nEgvBXWhGKqkQB7LWBpfwR4B39Ej8uTCMjFEfULY4z7Han8fVFrsJDopmMjtQhZDXHGVNV1Z",
  "key18": "4GQx2LritMrygFZ4DRjopeDwSKvWZPVrRX1EXfTRa3EanockRUe55wWSMaNh8cDDkDPPbzRsM2pyXu2CGkKqRxAq",
  "key19": "35KesVXuSU5f3gEKJXE97sah1G7gbYJgVkxV7hXSm8ChsrkQEdCVjnb1ML4zq8zWvxDBkHyHxAnUyw8F1GkrzHd9",
  "key20": "2gH7HhkkL65Vz2Lg94USBM8qvvPqK6CZ5VQWDBoJZuhB8zj2Fpjhf4apBni59xeBtAjdZXHD6DyVKAMv5r1nixjX",
  "key21": "2ADTYqqs8tEdxVspuLFQk5hsBcsi93eq8pPm8X1Urc5H4HPHZiE1986NcxpVokLDFoWBw2a9HPjDdsamttUgyezq",
  "key22": "3kYDwyFQv4vEKgVzA1Q6oc7o7em4UmZvnExBGDhygvYE55qDpCXeGXKv3Mtt1PwzNAV1SkL9zcRkbMFf2H2PZChL",
  "key23": "4qTzuZHHJ7wEhY8X7eiTBn19tj2H5FDn3iJ8wFKJ2nZDu25VCwLgcq5jJ7RB7cq5EypenLLHSWr6iCt1LSqKnwt3",
  "key24": "61bySuttPFqgQa4TreodikkBys33BFeU7omCdMhXZ4KbxzGaciUiZVLMZD5Z9fDZLGghirFwmePQg9rLhjtUeSeH",
  "key25": "3SDhRmzSSABSjLmEk5BPxGqiTvKVovTQGYZYcaPt9VEHJtT8grSgKbTL3uziUfgX1o9TF7m3X2atfw9za1XrtyPM",
  "key26": "24mm4AdPyGdZi1x1mpnRoDf17V23xq2AKEdt8joP34fab7LvWXMmkpMVJdbsXBhYpSBhLsdwEns14nXgmbtwiSLP",
  "key27": "4raqaGVoxsraNhxGTEUYoJRdqJ1whtvHYXF2QhHVQWgXt2cE92Kq7oinkHDvoF8jW3ft7kzHzorqVFwgouCWn9c3",
  "key28": "4sUwhXe6unwPc59wKBUE9AH7M77AX9TRhmV3yn4KprvDEJUEtu9Rf7dDgKRDdhR7Eyw3qhXYWyNdR9PQaQQvVPpm",
  "key29": "2jLsqYSCfFPGBPt1Vnz3ZQD15V3XBJD4rzn58cq3GcrPPqhy1xgW3TKx3hSZxCi17quqc4pqmftbHv48ZVf5SSTD",
  "key30": "2iiHKGwCsSZfkn3PMzsehk8xX9kCgsVzKUhrWjRRpmVS5oF1brxPy4ZTibXbqEFa5BfbwzWcRKSzqD5cesA2Q76w",
  "key31": "3Pz6d1kBudobHwPnYzHJmkDgkyY9wKfV4Lvmn6zERqNK5mE4c98hoxfG7BcjnK6mws6NVFkVZU8UZbdHRVwhaZwK",
  "key32": "3ytGTKtHy5SyFp62M3hz8h3RdwbDVEa1hXkMdcH2fgjvQsi1j4qqSwCg1fzqaQbYsrTB7Pp5k9uc6bo9gEEFiXdH",
  "key33": "bAmKWhxfv3cXgxNRLGvcA5ar8wKJBsFVjdFu1weHxRSeLMJyx1wp4W5ddZUjsetgfLJLNQxM8jjYbeinmETNDgx",
  "key34": "2d7GyFaY91BgzjShprzGkNxEPiVMaXijPCSxFuLquPpu8pQdjDj37pSFGHeUcfRHjTA9MEwaykYYGD6BreXMrMwm",
  "key35": "sWymuVwggVgxjerueCVg4C5ZjR4jW5qPGeZ84J2s7brHd5xCcwftuWtQ8FxXyF1mnaN2witsaTFGHQJ3rStgN65",
  "key36": "3yCGL6hLFPJ5pH7JTepnnKukYsHGv3PmFZet5YtSKbEeha4qr2rDpuDpmRtBL6dBCR8Fc9x7KAovNJgGYi4Hrwrn",
  "key37": "5PjCRoAXyRDEa9USp9ox9eaxHZqMPLWyCtQN9GWtSSojAw639kdLXDVkXaFek38JqovHdztfJnH1XWb9x1HfWy4q",
  "key38": "4apNNkWS26tPjPF5TD6T6cgoTn9ZgR4xiNW6gZFtBJQZ4PoNuDpMH9m9uGZFQoRVgj98EMZpjGuugyUAMcLaRaju",
  "key39": "3ooGUsrks92C8zyUsgrzg7WykbbzZ59FK7oGRiwLj9ubom79fTYRTbhUzdo8Set23uGK2eGmqWwg7j7HhggHRBBN",
  "key40": "473927MByiUANSgSjdAnJzjMaYVNPdbrdnnsfFtyoDnU82VEH9oaUZKMhX9p6os4hDKgYosYfZp4RkHUSsgSrc9X",
  "key41": "47tahQM7JFqmAp1tDkVEs6eLPssHak1Rk1APuuXyQZu4A5CKqixHuotUA7QYGvP1cHs1ZZcKJgRFj5E3AtDWbWm8",
  "key42": "2WVFEGrTsxVok37GNhrUD7JvAptLdP7bCetvvo6sHZgAmmY974iPdVRKXqNzvxEvE2nG3L7dCdKsZZeHcQZeVeh3",
  "key43": "RxwA9JdPuvtfoBoYC1YyijdZEyp6XaFuvxUUPzhDXQ4GMHBZ4D1x9n4tyKSh2M6Tv9yu19LxST3EtRSnNpZd86n",
  "key44": "2WZ2KyzwPx6w3pTTgoe7ye7AKLXFebnPRwpGqaUuM48uBLkc2gEceJBULvuba3Zi95GVvZf2gUB66kxQS36fLHzx"
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

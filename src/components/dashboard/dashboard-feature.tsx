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
    "4VrPMJxkFE2rNqX3WWCuBaHiPWZf5A2QibFUmNEriqJwfx8eN2vQ4Jkd9H55RSCufLjSBbMSXZVgu7w8428vpw79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYvXC1okU4onBELByGQN8C9W7d1BLRrPTpXxhrG8SL4HrZC2hGyWbddqZfQuwF33D5SKt1f1EFKDuBpwuyUJ2h5",
  "key1": "2SfNU75s66Yx3fomhHkyRe3pp4H3ZBDJXDosen8tGQTcDa4EwQdHevmnuHFCdebr3R9s84BQ2DSvT3zfiea6GMLQ",
  "key2": "5hwFKEXcftf4WBVaRJW4i3HyhDAdNyhdac6wsknh8TWJuJFwkrerzAUwTJ2i2z7x3DX7jPT49apMkjcxqyYJY3rT",
  "key3": "3nKFrSeKiLAf1yXnSzUTn3Ao7fkcboU8rk71SUndymBbeug6NdfnqJ85cBL8anX5zzGEtiHE1mHCige9uNMNhLPx",
  "key4": "27Z5D1kERErrr57GgDKwziSPLHJ4QdunkJBPEJQBRrGYn91igEpXXwFm4HKtcYKg8HZgCkXqvJ9KrJoC5bcCmk3y",
  "key5": "5yFx8LB64oKqHtWqM92htBhz8QdYtvRjuXYbKwW9peegFjFaXWcNXrvGo3TeDGBQFfTiDXJ45F4z1wLrwaDkQz3k",
  "key6": "2xZbmkLio7JaNZVL5KQT3Wvet1WTvKLaq2vssUCF9FNpDXifhbnXs4J8t71gf7zPydnbtmDdGX57AXSMQsujT9Gp",
  "key7": "3ReSSyd9XCkb6Y1j78XgCYfPaGFFt4uB2jdAc3Ch8MBedso2kKm8ZNVMZtcmerDmD5wE3TY1dUwMp3TRUYCiCB8",
  "key8": "5KxP22eQcwLgf2bDj8xoyhMYn5yRu8MiXnNCoEzhLUMjgkadHpdf29aWQ5fbKQNR4ySk5BhFVZBZTwWWjTqhF3No",
  "key9": "HmZf3PfbubMdMLp2m8imTp9fodwTtonyNXi9xoUTmL4TWKj2YX7jRyuHQAhCYWi34jq9DGNnTH6Y7ioqGQwcAyf",
  "key10": "671RfqNPN4eU26tTUW78df1nNPteYSBKbcdZHo4KFcHarJvBN1xh2UDBbBVD2j29esp3ynjNt6XbZVWdBbVtHbkc",
  "key11": "54p4ySWUA8Lfm4c2tsjXLniv4XfQJSX6FJkxdaNn5w5VZkZMdPsvLkucQ1hyymoLZkyEzDoGQM24iCVRBZ7J7qbt",
  "key12": "VGbEyok6KDLg8vYtcT4wxhEjsnuWYcJh16ddbgn3AWiL3japWRZykMEZ5QFMDBVnrqVK9VPwquPAwUm4V14idKS",
  "key13": "4QhigirhVLvgB8ZFGUK48qY1gBTXeF27HfUnRZoKMeCQbyGBMmjvZUmMd3qZFqFzQKuhac7FfsqhcA6gjdefZLqQ",
  "key14": "2MmAJxWZpkW3iSEzafxaXvH2HmJw1HGgtBgUVU2Yt47nKGj6XebNqJWN2dkyJpzZTW6oKxc7FHnq8WyKGgsaMmXc",
  "key15": "3NRSnbnbTvLbzoAiUnytoSP2tCDvNwEpwpsxhLLcCVR4wEFHqXcnW31JKbJepSwrtgPGuhSdbGmiT3ZxGkDABXFY",
  "key16": "ZeGKWr2Ycc2Ej5mnBayph79ruR9qhwmMyRN7jbeqZ5XESR6Z6QtLy4iuaET5QPyrZoDNxnKi2BHB5Qz9GMhKPRm",
  "key17": "RQoaSghKtCLsJx2HKs5R4iPHpsS6wb2GoRnBePm6Ki5FuXiX1vToY12dR2LkQsjE9kzYotZo8mXirUHaGYSm3gY",
  "key18": "4rL8YcG6Db9LhLe1FM85YBvzBQxU8qExKuNN1prwJpkm99pcTd78yNDjaPKRCFjZWN8ifbezadm9MzRyrYTNCi7i",
  "key19": "5eEEHvePDgFR25GQ2fEUDLfvGwH6NrBP6LCSzdEo3D4QoNT98z6NUPLfCsHKfsQYoyv9L2azdAsrJiA9ShwJKTEf",
  "key20": "2ZVV11q3npsUv1LNjEgNKgcHaqxHJuCJsuh7PZiv1voW6H7RL1h4hri2Ya61Yvu6kPwbLPmznHpXeL1Z9z8vxYd9",
  "key21": "2FpNiBdPy1BLkDuLNDXHxRyVT8BYxGGM1RWAffZJir8HVH3nvE8UBYWPvthrYnVV2ouyigPQ4VbkujTHcp5WWjed",
  "key22": "5kjH9mxsGEpFB5ZCzrbkb9bZ4kusn7YqBUSxqyP8tGGap2LRnzDRhW4ti3qWMV6H9RNhDnNt9exRt4P2Kxbmrh1s",
  "key23": "3f2ctqhZkxt3ZMQKUp4poLnpCx734jDEQQfJghtm2QkMaJip7E3cMt1mGGPbYNx6y7zRjcUsf3Ut7acm81WgyKRX",
  "key24": "hzGdX73rh4JWpze79kyPwvv3F6e5yjeTru7WkVa17XCsejMWnQWyaoSw5RzkZ8mfwLsf8zy1RoTuwgtsM1jJumn",
  "key25": "4SjcLuJfK9pqZ134CP3WUrhcZecw5B1P5aVLqt8npwBaJtoSdB2cn7psqWf7vkF6vPiKU1WGJXfDEFBenSN46TXi",
  "key26": "d79LEbk32BoUy2f38An82zWhv9bvsSPGwT3JzPBCqChkSvFMFSfAPcjrN9CXEnTt78TQw13SmrW9YMKV4bDjvm3",
  "key27": "2fHtYeS8a5ck6Zt2jiSaeA6a8xbMxg59GTzqmTTWKTSK93hk24CezUhT4JRXym8QtJePnqytDDo18YuQgCkjMV5W",
  "key28": "4njcFWGv6Py3v6xcB4UMWyzJF8H6DWHrBBcwwcXWhkifCYksSrUfNfAwhnTDshzv6zdLyxq3E1o9YhMbL8LbsxBZ",
  "key29": "32QC65CMsCdP7eAkegUrbWuk4GZwmmRtUw98GU15T1nuzdyPVM8PnHnQuA591yfjeT8gDwxxVoBoG6fb6RvNsqGZ",
  "key30": "23Z1EpHyEAAYyHrkbmuGb3omsXsztAudR6qiqX1xZe4DHBDuXG9ArZPn6z2KWZ1e5jCk3XkFpJKvajVtzyVbRhzZ",
  "key31": "4vETkFwmypZwkFxZ21bGxGyAPNC5MYrKWmj5mxKtpUJPRdy12R64cpjxaTYiw3VpEdQbSyoynSzdasVD91iW5PiL",
  "key32": "2Y4Xj2WjP5MxzSjKwkv9CMJzSrLYnp6wTsknykDRPdcHW9HgmtzoDgBmmfV5tjHc2B9xU5sBpgXzMNhBKQpgkeQF",
  "key33": "4Cz26H1cWbYnwnrtuBmEzsq6A2tvk9b5kh62ztYqGBcoNqVP1ogKnukqm7t5RSSaC6qif8oP3ymVsa6Voy1Kp6tU",
  "key34": "2jjYq9sGtfdjRTUfFM2Me8F5G4NbNT9cg6uTU8WKf6EL256z49YSVJW4yPfSXWDvHuSVzfzV8FypaejDFTbjnMdB",
  "key35": "8qntyJT9v8d6R2LE5MwrWP8Mose9mpFdkCh3nvRAocGXKbxuKYKWS1LSkAY7ZmtUc8JeU7ZqPPkMWvho9eMWcLe",
  "key36": "2ZCzdSoAWSTJZKhPoWruGpBwyyML5P5zRSKgf15V6Wwjpr6t5MoJ5JSKDS1UzJVuyrc3dVwKq4WKnrbJErFgwdeu",
  "key37": "KciQpGLtBZLQdkeQXtPqnPiwyvB7RGpuEWLH6Jgrpy8DLDGWRTEuEF6CT4FKXnqqxP8fswQ9phMpTA6mqJQvCG9",
  "key38": "29kr64k3efqnu4nLd7dJunqCJepQok8Ln4C2kww1qDHFois9zeqYqWzE4W9DDhDfFDJYpMJhnQmx5Wv21dgL8RLd",
  "key39": "48qoeuDUb3FZHoHpmG27r4C7dGwnicH38q97ZiTouLR629ERWLybeBnFUBekB25sNE4MXhTd1bboyehHBAWJ77SG"
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

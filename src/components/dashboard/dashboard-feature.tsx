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
    "4aAMb7djPHatpZ6KfcPxrtP6ySKdSHEj6G1YBeSVK45VQ2j836Du9RcS8JUwemtHWqJUPR3AoVrKdKCRhc6hADJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67gMKHnf9e7sWPfZicj6P4EVsjfXwT2J2hTJxZqvThM4TZ1DvQ5mkbvGRgig6jrvUB2wcSKKtS1pit7WsYP3wHue",
  "key1": "KJRh2GWtvUWArwqTeMEDGjCmSfVT9c4BNNxJ8nxeJKaSeRbUmLjsbYdmGXxqw2ePS6FkQwCpmiEPByZLECCHdcs",
  "key2": "iVLDnLstZFvwSYLwP9UDknfsxrrS4cipo64WiNTS8wUTMxQfrmdCNiNSTkUQzfyAqR5Z91LdzDGiQ7BAyAR2nGg",
  "key3": "44zLKMkjRRXKn8ygzXxXJBFUWKJ2VPo3uaQGkvrak4Y16rjzVgjacXKbL4aCWr8ZkaB6cz5Y346Xr42LLjEKTquJ",
  "key4": "3YX9gk7D4KrSugcbL3xQbjBfLcpvxN6Wwi3khocRQCr7npvrUCAkvq2VrNeixc3X1z3fYf2CJKHeqqi8gMaRguRd",
  "key5": "SLTjLzM4igrVQy6oZbUZb1UaN5GjC7ewqSDrZNnmvxtgCdT952uS7vv4TX83V4aqjZT8TS3nAAbFCa33GqLvaot",
  "key6": "PxT3341o7PRaAyG1bfntwNhtrM5N74SxfRonnMEhC98vu21EZV9uWWL1v1bChfupRjchAxht1iRSdaw1K3ExtZJ",
  "key7": "5p3nHumiMDPRFqgLYH2HQ6s3zcQcEnwnAVN1PGr6V6jz5DDtFmqmvbE2tCSHvSshSYGhmuqWr9gDb1pNRC1Hzhj2",
  "key8": "5Ry7znHun6uJUEFEvDGJXPG7gc2Cx5nztAHumP8ik2aG5mLfVwZj3aV9NJUDsJQXvfWrY3gdDwYAQayDb7gBofC2",
  "key9": "uqg5VkVLNbM3XTtgqcWx7aB6MuaPQJ56V4nGYAHPNu2XWwzpbVWpwVmrZGyTe7SKPbfoiQpnLideZM977qnVZk2",
  "key10": "5SyUFif4YsKQ6rcUKbQtV46DyxfvNTzdNoFRrm14ZHU5w9m8uXhBqCibVvgMYtXhPBXxnhj8B9HZfpEqxRdxsUkV",
  "key11": "3uNFYrb92hTvkpb2tKqRMve4BVKWfA2yQisSYcPukfewUbrL5NMB1WGqE97KsxQPeM1wsvbm41Jx53MTCGKp1HQw",
  "key12": "4QfH8cGRfRKtY6iZL5H5VaVWe66K3nNtUhabjY1j1ng3p4wHNaCCcbpP2G3xhJNaFy1q8Ht7SV8EA9Y4pk4RdLHe",
  "key13": "5tb6iEsxdcjvryvTgUPFEMJHobZhpJaKWsjXpzuJZTyGw7sbipaE9begenGKLw4ERfh3ydWre5pCowCxjDBQAY8u",
  "key14": "64zFzUE2wXSdt2mbeVN3z3kdEstb6mezahpWZNzynyKvQWS5vmYpWCxm7Hsv3EeR4y5tBSvrhrk6frAMBwLVf18t",
  "key15": "4gbcfakqiboYrmkhSzat5BpQR96WQbRPmSqAFzqaYQx9tVsjLRuhPeL7ezLEU7VxanKTeQdXA8qQxCwnx6YWiMF6",
  "key16": "368vqZTsiBbnfg7sdRvDd9SXp83Ki2MNMfkNbC1K99oA5hMkfVrJt6NdBmGANVi6723C4FjzKrsq1Z3XwJeKrwXG",
  "key17": "ihRvedqkmxEJKKdGQwS4L8m8FDjHnHv7F1nEj2R49ffqqTxQPrYs7uTWw5r739M3sRGYhQUU88GgxNETk3MYdHD",
  "key18": "2k3AkEL5HXj9z6m4e3EpMURWFEuhX5XJW1hP8D6AryvUpSMmJTnbZxB47m355WBAQt6pkvVdfsMCbpNj62Krv8VF",
  "key19": "4UUa5LJWnzsMggs9ttACjaDYm4gaJLDwFh3xmbtznM6pMKRFtjQ8bx24atQLNrB1stwGYuHj3ndgUGf8yQDyaPev",
  "key20": "4Qccm8ohb5pwJVCCz3ZYZY2PgWxtR8fm25aYZ7sByqLoTLzN6Uo5YMvfciLJjv8jemVHvFP1JqTNGe8h7B2aNZfz",
  "key21": "2nsDbbYmC6RpAjfk6Ws17xaTvDaSMqE7v4xVvVBeG8CV9bLvJd2nn9x5zZZF4wHFRDEkV2Hwdx4ja28wiaan8ihR",
  "key22": "ka4GtzwAEnft27Ej4nEtdhduYtt3w1emn4G8T5QRfYR1iAzm2LMM9dWzub8bAR6ADF1vF4WFJQAwLQUA4xANJkA",
  "key23": "3wECg3eqHEaWyGY2VdZMoTsJeVVFbYBVLuW9tCuAuBX6Px9aQmECBgtQ1EnjGo5agGCTZsg2hXDvE2wr9DGpcrDE",
  "key24": "4e5nnHXPeBiU63bsgsDZqGth4rcuEM36yb9jdrJJCKb2aYV2nzE3qwEy3eRZBggGwU2ozTPXgBYBjJY3k3uzngk3",
  "key25": "eRo73hQusuBEwsJouFLaEwzXxPSCMkdXU5FPfCBaoY8VjnAM2bVbmtGDwDxmWDxtFoPt2qtC2chs8aFWCPKSYKo",
  "key26": "dYpQJ3waHecUtUjwiHZJZLMtJ3p74DZ6SssVZZHdYrPLDvCExJfzpmLgV2PG11XpBGn17h1B9YUqT59NFSLpPQz",
  "key27": "5J4ZK6gFJYBZzwnGYZuMKGKRGutbqaHSCLXoJJb6XXzTrRWcQhpshRbSoEcx3dD31vZ39rfvXJVjjYMXEjbroxdX",
  "key28": "2GmmvWcZe9FVvPuyedJhB7MWHJZdt9x5mgQq8yFYiYgLSWk2xSwsE2cGCrpNH2J6FZLMQ76AB7Pu7ZAdSmzKcUbB",
  "key29": "3sPhPwTZcNzM1951ECxrUMXNNenfjcAQahZDKvAJ9Z9qa4rXRFRZmEHQzMDk5sfVdQEEcwjKu9wVjcjzq3sBdREc",
  "key30": "4vGZUa7BL19putDir2hiEaGnauLUNiwBn1Cm3WQTcvzRbHbiBFGeZ2x4xm4szfTq8Eh3YRzHSPecA79J6USWxB7s",
  "key31": "2h5gv2SgCHdY1czhuhbmKodtwidCMZTZvPZh374Sn9f87bg1DY7Yptu8gypmMKGVnrsXeigLHM1MagPknebShG7S",
  "key32": "3EX8k1kwjUMg72addtNU1mrhXx5hcyGLk7ngH3EHJcqThZ4eq7Cy1WPKShh5rhuktTQrVQZy2XBp9EPPYatQqsNS",
  "key33": "5TZ9X6xRNV5phU6i2bPPj1b7MEXwxGdfSZdG3YZNidYmKa4u5huqMLsUuyRahLhQMCdKxbADL2oipYMYQ3MFUT2B",
  "key34": "wTkegwtBLnLPU7YfW9kgdxGWB1yPt7xdiUPmmCLzd6wUK2BmGf9rdfwGUjAKnsFpuX3G12fVaNaVjSB3hAKJzLK",
  "key35": "2G2H5mUdrXkfcoTc8QDcCx4shHqTzj2FvP6qV6YZm8YXA9caWeiXkjXoqAHmXmJz9EdR5P1t7ZgukzAzcrAuWEbs",
  "key36": "2D65d6jJS6tHtdbGVMKbPMKXRqcoqnMANwmsjQCeJ9M5bB6J7UXnWiGeeSYgQvBmu6M1XG78C5g4pDF2di5iGuR3",
  "key37": "zLpsmArvhmih6ycjUt7KjiQN3L5peUimYbHTAN4sHXb7Q9G9d2SfZuMTx55yUrJkCxnpg7dPbBaXe1itxa6oQuS",
  "key38": "6395dmn6S5dqEwoyP7fC9UiZ8xBBbmGuspWX6EKZc3ZKDvvsGPQay8BgXQNSgJgS9eWk4JRgDVhktSNRAXHzsVyh",
  "key39": "3SZC5pH5mYTu7diwJ5HNvqA4trFjyjatk4Xv85gsduMC4kfcXxeMbFFHwhH2w4rz7ZMipgq4sCVT1rdEfarcA6sS",
  "key40": "32B6b3SLTRPV8tWMVxpeUzPPzgP22bKVWat9bKzHECb2HGKJeLxzUgnRbs5q5Ktp5sF4bhqk9WVYZ85dZDuE4BTv",
  "key41": "35A9C7boVumWuDyndrJxBmgWNMhWYnqagsq1jMK14YDsQdCocowvFUWLeKhzPCdCSsvuDPfKFn6gvP1bw3uLAX5o",
  "key42": "2i9635nsxP2FZPo8uvRGL3JiMDCqRCmhQjrMHQYjS8cPwAMuajafubM877pPEZnqjDTszVWYfF2aVeN9H7RYSGak",
  "key43": "3idr3bkCsX82wjP8pS14KfAA7vj5ihT6WWpWv5qszesxHkcTjAJZEqMtMG6YpFU41s5WuCmBvMoKRit3nak5p5EJ",
  "key44": "3sVdbkjms5Pc2YDHGyGuGsEUpc8C3t3Vjgq5tz8CSmPTukkdFXwEB6K2qKjFtj2N7EoYK4Gguxs7GfzXe5Z5xMCC",
  "key45": "5JHNcTE16B445hzKgGbtEmfsMqWbpQrkWRDLPWF3b5HUMWsGmJwLXCUYN3uWtxRqPZQ8QNCT5daeC5DNUAYdniLd",
  "key46": "4UYEKrMyJLjNuJxBJwDtXkScTyeEHGc8a6eEbFjQdCgAHpXV6at77a6vGAsHfCGXwN5b6X6nH7FXcejkZ6M1Exvy",
  "key47": "5DUs6jS8aj1otDFcJx4oviZDvz12YdsZYWNDuVPD7BhcGDokZrkDwySNVTmt7hNHAdaPpf64hTeA8q3TFvvYQsJB"
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

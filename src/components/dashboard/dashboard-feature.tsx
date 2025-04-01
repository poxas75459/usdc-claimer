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
    "oFF1MoE5j87aGqjeU5zCszm6JaY3bQJtCnH9TpUDzv4mvnCWPd2aFPLpJsn9VSojBtvoKLxkFQ9BtKKUHaSPkKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDD9FSRK7bCoh8eN4xmZ9rgiUqFhHPn12v3coDxyvi5v8rCaFqJQQ3Za6fUeuHoCfAzJp3V6J1ccBqqSxCXgPdS",
  "key1": "5Lj8iFyAX8F2XkTXR48ZpCut7jAiTdwnhxDmAGbMhHpj5HweykaFrTuisew4455Je4oEqmnPhCibFotuDdFpAdqe",
  "key2": "4kJZGby4GzogReshCKWEFqn3K48zkENHXdhcVGNdSJpjuyem2mWZJoACzffRc1Cv43hAK3TvKqwAfgyy23uJQkCD",
  "key3": "3iNqGYVr4xsGvjUtA1tfXzSNA8gPKr4uikGvSiFAYsuJu3us7vkm2HSoc4uXTBz73Eaj38Egvf7C5wcLoEy6asEa",
  "key4": "39ZQmZusxx2Ntb7jUFZdMBsbZBbDXja3fcEq4iFfVuNF8fB9zDvFBVxNMobEXh4rRf2bhLV6y9KCFKz4VZq3Yk1C",
  "key5": "3SoXrqdwTCh2WTKjDSoTtXizr9d6aq6EZKriG6sZwTjyveGZcH2cUFUXRStbzjnHW9HbkXUsWKeSHqXw2MDTecUC",
  "key6": "5gSa1cBaQr2kCZVXLHvtykh87xHGAaozukjKLTxU86ABJnXXk8SyUzrrqfxk7kQ6eg4qNnR4UiqE9sNwV8K3z8oM",
  "key7": "3gRre6TJEg673zy2DMdcfQwLUA2c59hxNMv1D7cFQGGeh1zoqwwVVVp9aLdcvJxd8FoSGL3ef89V6Xa4CHgdrQfM",
  "key8": "ojDtTPy6Qh3tQ1GyzDgvRc9RCgdieuqHdVzrrLT7xU79rfJeDi7SuEpH4yxE9v33nGUDCSmnqDVL4bYjTLtHjs7",
  "key9": "9k22ajhkT1PZqBUc4J82mkEQLLh7AnxXmJAc71Ac11PTakt7hGB7UULsPxYgFXCvbnQXbSYcD5PJBedxGzbjWfW",
  "key10": "4ucAWbNcrXVUMx66i7D9xigzehgTro3Tk1QCpmaqydjEWTYnBrSpeY7TM6etyTbuC9Q8xZ3AWsicGiZwFvL3nUJY",
  "key11": "F4Wg7KpxNnqDNsd21Gx2zqw1X97xmgkHqY1U9CoKgC6hSDKtgHxzsRGZEY9pcLCWuvb5RnyZWS8qpeqgA1JWSd9",
  "key12": "3Vo3oiGLukLJ79SVn6jxK93iMqbi5JnBnk7jGhGvTkPvAiBLt8eBzyRCQeUatKjgyQxcjcS6EtoPaPNxyT5fUjuC",
  "key13": "5Azbsii7sPjz99qbuxa9QiokpzLv9HP6ZHXhpmSQazvPJf8WvpcWPnDnWBvT81bM9VAZTmZmYyhF1FBdxKnqAGzE",
  "key14": "4ZUsQcb5MSvap7hCY62mzEEQvNjSSAx3qNYi5uTgPhxYWm4x6esCRcMZzQ96otPEQm8JnKeBtF9AVEb7o1gzU1tE",
  "key15": "61M9CzyZNWaSrYMNAS9Rk2BPr7ahrK3Dm4TqzqZNTEkTtaJc5e4tWKwzGKi1CCKyDWn9EPSKutb8UJNEaX2UEw4d",
  "key16": "4SH76YoGumKc6QQZrDXVe3f3Y3qvgNKpEnPepLYpu4dowpSFHxUG9KZGLZzvxvBPS8UDKTemAY6po1EQX9hYBFYb",
  "key17": "REVD59scA8feotZzHaDa8Zvv4cWZ8dLahC7UWYvS8uUThLzHNDAq9yCAa2GudCevvNJmLzwjAxxVYo4Fa3ZLNvf",
  "key18": "3WK4SuNFgKQjQ2GpP2yN3FjmWtfwyp6Z6sqoep7w88hCAcy5xEsX5dUD4BQDBiiyQbv8fte4cGYhFibiswcYMPS2",
  "key19": "a6tBQ5nEbiVDcTyYMJ47FbzmoMZeqpvLqbbEMn6JaHiZZjmac3fzupZ318fhcGGFN8KmCeNhtG5K93wEXdD2M73",
  "key20": "33SshtnbS9bU4VMi9uCx5YiwGZpWZz1EAhy16YWbQXAkiA2g27uy8DuiV3y2NusGMr7p5GCvc1V37AVFuisRWkRQ",
  "key21": "2yoxdtSgiRifkfRFvcvjmiZF4NX8q4TU6VoWBtACZPofmhT5Xja72w9sjUWDVaYrfKmCXYx7in7tXz3NkxPccSh7",
  "key22": "5PqTUahr5LGu4fuopVJnibQmtv3KMywFG8m9Yof8DYtc6rz1EW74v3DXqkVnfoMgWg1qwmStqdGUmUecMR8a48Yz",
  "key23": "2GJiChLeY4g345P83JBVubVxZQpQcStfkJCyUJyniwo8jhnoMwi3jx79cZ9HyEXxRqSpkBXUA4rcZrDQPxNJF1jQ",
  "key24": "5qM9Pihmrdugm6Rys6v1AMNm7SFnyR49ewwiyc5J7snCvKwuvhtMRDbTEBRyuZyfUKoNBEjhbWEhD3CRCA2z1AaC",
  "key25": "5NHVpQK4N7Fx96ueKZiAeFEorSV6eUwAWWEMJdnZsxUCpF5zgXaU5tYNZUnZJNkEKWYHVeC7kqi9GTLZavTpLGg8",
  "key26": "3PkzDfocJbyYZfrXjg3GzFchtdAAr9SVxf8wyn7KREKgqquEvzf5E7znba7xWV9NB1G5CfGos5c9gnYipaPm2xh8",
  "key27": "nubinW8UqyGZvnU4Zif668oTBeDjB4AqRLiX19EmD8SXqJNSwo12oKuxNHttFwNbj5RBvars3sx21u1Ybge1rP3",
  "key28": "2XjzYGzzpLD3TQ5hivBdWS3jVR31mkP1GesaSvLitzX6fmmSmbJZDs4NztS3oTErpmVCbPHm3Veuc9miNXwCCbv5",
  "key29": "B8ZVtSYPx34B9cCPBuQDmdZVQ95qe7m9q8bVpYAW5qmhUGgw23KeW5nXmqxgJqrVAmw4V9NabzQpfyyrFJsvAy4",
  "key30": "5QXmxBhA5CTNhSZFWLYL3T2uNM6nQUqiS6Tb9XQ6RKFbuUUc8eGrzgC5gZwYFsLJyuTM6UgFDntiueVc5kdffB3q",
  "key31": "4evrS7TkaCpMTsNYsB4gWvVhYwgYZWdHv7raXZxfsXbiGTz28LGg6GiEcse2Ap5fZQyo8vznwrzhBabsEiusAN3U",
  "key32": "3eeoSz3jNERCRuWbd6HS25NiGNwib8ecZJCHX5T6Y9uZTDXYmXBSRFjKG17yBpNZL4RbpsJ4C77SnBgjjiL59ruu",
  "key33": "5vXsYtCi3xkEAdRaPR1YVxD2bfqRVSAQFjxMTt4hVchVt8Y888WL3sFc2ZMqz9gFY9TB1aE2vnh6YwRXdAeq18FU",
  "key34": "NG8qkKgkmMEB5xqGrHqVMCdZzw9tKK8fKt7hA4ZfLUjf14MYZkxQmVhW1JBShGjtkGtyVvmGEokeXG8sjdjkqBY",
  "key35": "5AoQqvY3ufG4GSMgUtEc8W6RyxXxC1Y39eR8nZRHcPLpan29tvo8MJrpigYo1WYKRV7HLa1Uc1WXbhAB5RJjoV5u",
  "key36": "3zF79EymUcPh6bUyXXwGZjdn6tGKU2BrehhXchSpgoLeSw9ofUFxrCGXERgsJpvzJMP7a1sop5j1YopoWRhpw5TE",
  "key37": "oA1idzBbc8LCZ28rjBXiwaNE13wyMNnunzJu4e1Cbhuu1RhoUXyhubx7AvBjXaT5JoiYJnWrwDrwnB7j2RNX7nJ",
  "key38": "5K1HSPKEDCC6GjmcP3zeyZUy7ZUzfrAjdUPWTbx8BxvctQsfS4r7zybPv6o5bGYiVARMad4fRUvVhAefoWE3D7kU",
  "key39": "58uPizmHx1fEBQDx4HFCxVEc7ppHdHfFLmjGhxAU2ikCrqK447uE4m33zAhHhabPgyLM9fikai5NzrJNzUTv3zqx",
  "key40": "4wqDmiCyZoTzdiD7kotCbUR9fBXyZeH91ma8c2dHVR3bQ4GD2pwF1DMbj84jYLgCPLqs6d2xX9gr8Nk4DhjdrTJN",
  "key41": "5dSraX6XcBG1L3v1PFdcCByGffxTcL395djxgERxwmS1y9ENaUEmjS8V6hyGJYRqKwJ2aCmzS8yJbawWgJbWRCfU",
  "key42": "zsL8DfKheD4TqZUwzHkAe53LPFGBcdm2TWqyFpLoBGZDyjohLKWWHruV3SyHsH8h3nKi9SRWtCx4iYM4uRct1eJ",
  "key43": "4PwWaFBW5EVMBouh1wj3uyqQRx3gqFjVHdmSrZYVa4waK21pTWyp6DT23k8TQD4nVCT7VchC2ABUudpUtSrH74kb",
  "key44": "5eBB8UVYerrzDE4L67xELdrQPhGhfapS3z1HaeS1nzRxDaVaomh3MnQo2ziXBAhtrG3caE6D34m81Yb97c4Lry5c",
  "key45": "3dh8jo2GKfSeGKXZbUhPLvKqjBNRFNPQoQqaqq7Ri5Y6Gto3nktW1KM19WkHHGqtFMgdA7sjHf4tCq4aohFncUg1",
  "key46": "4ZiG7DZa4QVNCfEXko6iJ6r5v8HQMpgVYG1jUSuetWe22tAht97gJa45BAqR9ZX2BNbseT9VPfqoawSg11ktmDqV"
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

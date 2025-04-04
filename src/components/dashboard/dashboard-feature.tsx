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
    "4iT8zyfJ6cJxvPsA8XKHqejVRD7JCvZh2EeVD5CDq9Vi93kdnEG5q6DF8FKxHGUcWTxK2b4PMGEq3agriZbJJCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7wZ9NMWA6J2wW4S9svz2WXxLkCG7a6jH5CotmChFX9PcwcRKcwwC6oqPyiisWJTzyAzscTt2a3jd7jRkWixJva",
  "key1": "4CvGN4odem8Y7atthTUNzESiqxpckgiz5s8GHjAsHRSuZ6HJQcaE6kb4M4mRuXr9VT9KzhgVNbekmkRx2vHYwEPv",
  "key2": "4Xb184NGLSS7minBXFxTYCmVnPUe67N1dpsXBkCJm24DPHKApGAXcEvRnbdABmmySAtsaVbE5dypF2bGjSS9buev",
  "key3": "RVTiHPHef1ccpD6HvXVSC6ezayMDyUhm5KHwc3qYaEnap7CBo2ZYDWWckENTorLtorRJSYvhb26Udjs2vAoZrxE",
  "key4": "4BnkEXdyzDv7D6doP7nGFSJgd5D6ZgCH6anbfWgpRiPrqNC94xmrqzx1tkSGJkHUTDcnc6Tfmaa6FBVnoom98MdS",
  "key5": "3oEsBhyvZxbVrzPYSSSw8JC1DSkSmVZBhDMcrb2MpCHKpAncmA26ZS8W1fBfLZMuipDZGKMGWuVtdyb4SfqR8w4G",
  "key6": "3pCPwVuubzWH68S2kXzoh3bLb9ckE7q6Ytz1MFEnGxa3aPGt2gW6R3QwjtnCmSrZGjnpSW5xP75938eSTtXD8f2i",
  "key7": "3g1gfArzM5ga8EjftK1kdf7ZKuXSZgb64vzn1KRKWws8vZaj7ipqbUHt1N6wUyt58VQRy4jM7xBkzQddAeDsWbC3",
  "key8": "EZeN2UBx4AEDMnHS1ekkPVtWo5ELuzqkGDyeySy72JC3m2EmLKyamVLAFGot33ZwdVjU7PUsWbHxgJUhKAffedY",
  "key9": "k5V7VBGwhqbQf6Hmn5YKH7ZT2H5TbyJy5knWPYiHkrTEmG8xr8LLcttRjbqjCL4Pwj6yoSEZThzdyBfYN527FyN",
  "key10": "2LSVaQv5rS4md6WY7asMXSxFqdY8UGoTARi35Gb5R11d7BYkYMUFGeEUq86o6nEhGB6xY4WuNpKjmuE7E8Ay1MXd",
  "key11": "rHswVW2zYru6zBuKxBtxCuFcsKhrm4vUUNBj71EXgpmrHMiWDF1Mg9GGbghJDfWAa34hYBwgjcicLFRrzndHDak",
  "key12": "5hZY96Ld6VCGz3LkpUERRpSchcSGKYeT7eWEEJvUNm7uwWcGNvNk1RngxgtkyzrTcDFS9UBnmENgYR8svEsR1aqR",
  "key13": "3M79R9PkZhQGoiyYcy1B8B9tjfrfdQfYJ1T8YjdAYaXp5PTJrXpBMySfihaA3DTyjfHaisopYGLLpAmPigwqD74m",
  "key14": "3crMknMLB8JZxzFPEzxPbdFLGFUittiARAazGaJ3zTT2q8KKPyU44Km3Dxn7fqhnnqGgW5rYjuucBmxSGPTB1CaD",
  "key15": "SFNnUjd75jEerqoSDEFuv7Kn4N9iiuPHhhpKt6xsFdfZLXnwYhpYMDrBQ8z8pFXSXBbZRhCozN3fL6Taf2gumvA",
  "key16": "shf5A9yE59P77StAAJhU9Sw1ssAW5NVirDseut5KuUVc2oBnw8xcx7SMMqMFqzvi6twRYNoh9DA9CZR4oJr5yze",
  "key17": "Tg5dCahFEiPD7VihrfVjkjRyxE6v9ZqszhcDyXnci7Mu54gVtgLy8UK6drLWENircVjt66GenBmRo1NbChseMZ8",
  "key18": "3vkrLYhm2MUUTgjqUZNxhYcgHvXvFxp3hobb4YJ7Ebbt2utRY8f6hZvsNoQS7jw5vdf9HTkzFPJeCDGhmSbyvbfq",
  "key19": "65PBTKjD8QkS6s2sUQw9geb5L6DsYJeZ2B6vXGtCbbpxQWr79MznTagu8kAepwa7Ftg9fJqM8UFAkd52ZJ94ntWb",
  "key20": "2qyMKnhhF6zmWDjErn4j4GoYCtbVexnTodcx5JkgoRUfZw3uHkuLudsWTLfVTAqBY2inqSPb7BC8oZwjmiPeTufa",
  "key21": "4jWhFuSwBsdKSeVpGNc6K19KqNRSyKPQsLY7Fxk5oBF12vRU7ibDTNzCgceVZrKoWZ83uHRwD1Nxv9kPmQe6iEyL",
  "key22": "33jDYNv7xtTCvcL8BPcfKXpTgRVNjRXc7DH6G5t4jdaVZ2m8rTv46GuBeQuviQBFtZUCCkG9EaRntZLypqeYoHNA",
  "key23": "2g7f2zPxVGt4kN2xXTTkVpQz8k3YU8qsvhQPqJY6VFw9HodPLE7Edizfm5qJ2E5t5nrkbtJ3pJmjbdMyFTfWyAyh",
  "key24": "5Xsp5TPuKRPpzW4qx5wahE6QHgR4UWpJb6GYz11NbBJQGiq7X8EV1UdqQahj5Jq6M8AjG7kYdsWJf1wkYgX4VcUD",
  "key25": "5miuBMR51XbR2J1djwsQdA8SFNKyVUwyExtd7rcDz9rW7CGeBnFABFv1wVQTXA3fGJKQDoRffh8vmfax8Nnt8JLF",
  "key26": "5EAXzfDYePp1UGJvE3ehqrCKDdWRQG4ZM5ik9nUjoBEpoMcXyJ4pyo3TTmnHijfsBvxQvvhtwi61JhNVAbjmPUtB",
  "key27": "3R93rVbLF7zSyMtX2KVRAZuWCj134Un44aTLLQDBB2SBTtwFqFuC4PzZyYiwAX8FkY3dWLkxTbEsNHTTJdgp3xtr",
  "key28": "3csM8nMXGnFCkzs5fksoWZP8XuCNt491EJqokp1rvnUtjhUHYvZzodpsPDwu8P9hg9r3vKm3Ypebm88HgixSy3XN",
  "key29": "2EN82gooHLNNLf7HD4AD59kyFz7KHtuddawNVPfWoUnx3NG4XMUSbApSgxVPuWekYL8XnChRXDexYj5AXKa5VPuK",
  "key30": "49yGDUNePm3jphBzzsWLNXFfCgAJFBfaEoaxppxUzQRiVLn8WF5dZD2TyUbZ58Ms6YyS81t6mRU8mmCfU3sXEXaL",
  "key31": "3bjmHZ9grCgdkyxQBmBZGm19gaDwAHATvXNnFHVGU6RLqXxCDeJuWfMC3x3h5o8JxFFj9EgJkKYiQeGWss6RbN6N",
  "key32": "5J1rimqTzzQwLirnPGqjPFAkgKVkVaXkxQT7EAFyRKdNhTFLmV4yaaTJQutH1MwnZ5fXafdbFCzycR6CvNcvWhdB",
  "key33": "5Ks1Y35hQN7r2VWT9azXMzDyhf32bUx3vXxehfCRjXv1KLY35Tv41HkZggGkTftHf4G4aUNow6ehnAupqCHDbsmt",
  "key34": "BHKDXT2ydgmbixGxCJEYJjpmDgJRGcyW6Tdpyfugbassyd6GfDWbLu85ZipApEYXHEa7DUNBEuFd1Gx4VfLR5ou",
  "key35": "GjfDHBZssyg7mDHPXWY39vxpRMBMHdE3Tyy5oxD9uWaGC7tGgHqonhwDPomFKwUkFksPUo7oT7BjweuPGYqmwd5",
  "key36": "29sA6uQZYphp6ct7f4MrP51V5fRTXu8XnYA5noXxbvm9aybLsGrgEE1wiE45Eyq4fHp1fDPSX2Bzse3JZZJkmdLS",
  "key37": "4SN6Mes6m8kyQrCt5W1qnknYbsiyNo6qd9drbjZTVa8AkjiVYdbM9KAbuyrWXzbTWYib8cQkiFw5Srd3dfChPrKc",
  "key38": "4tWjqtVxSzcBhLYCZf6TkqMqjYKY2J3gdvA5zGcKAnnXL7oGNvFb84d5RJQ2XBR7fHquWoN13dY9xD3KkyYqePaL",
  "key39": "3aG19dSnpYV1Df8KYrZU38E3DdwCNPmgbzZ8wMajhQssbBiyyZHZX9mVoKEZBAgu1bm5GUzRA5QpdmwGT9AQRgWW",
  "key40": "4e7VjHXXoPVGusum9yBmzpkrp75Wc6PbMWMmCwN9JzYRsBVMSU1f4bo3AiujreFQ1vJ4UDuXbZ5vUM2ve2cdaLpQ",
  "key41": "yPvkpXtTb5opuNVRNfQC9JUDWgiTDPtVxy6oNT8LNjnhX2aqkwpm3wdkszRbabuTQ9ai1XB3nSG9GR5ZaqSbrkq",
  "key42": "2E4RhgUnyqFiDUz2rG8Tdx9NE5XdN4iVw8EzxDky5R432p9D1Q4kiqJ5axUPASVUHjfs9b8kCMyemxx5xp8WG2BU",
  "key43": "2LfHVp9fgQamyh3dxpTLVPyq7NuptpFwiktH6WTwGN1zem5N1bkoEUPAJuxSfA8eh5G58SKr6DfK1eqa2BWyRom2",
  "key44": "4Xstv4gWSddtjmSUaeiPufnDKQPkjMph3zSYs2THfpQF6d4ocYZeMZM26Y9GZYTpMY3hhijSX5Z4vNmtTD9xGdTB",
  "key45": "4JwuKQ7x3BgB5XGnTrgDofXyPp6mvauwsauAx48Su4nBn4A6LHgEQJgTE9KkZXYMcR8muNHNYjspKu3ttnhG4zu3",
  "key46": "3Pun5oxba5vEDvNnja9uWtiVjLrfbYCPcFrSqUi1vdDdyWgwAPzET8ULi6iiVZ7KYQeC8iYSjdyHzMiNMG9XemVN",
  "key47": "3riokq1ombxTjY1DjcnMKfpJALt72bi1715oF77zhbHM4tYhaYZpk2Jj5mQbz7CXjfNrexttPBU64xWFmT9fyPKv",
  "key48": "Ko65UbkcyV9cCFjYCmHYdnQvfTLsq67o89ueWxNruJAKDkGCQUo6dJCjw4BTZ1L9GT8vbuPHrLFB65oeTiB2j5n",
  "key49": "2tiU1b7hYhdWemmE9g3dhta2oVWSykP3nTLceNG2598Tf96megj6t2Sf4yFMyStrWoeyFLkyfwbRFYtnVFWbiF3g"
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

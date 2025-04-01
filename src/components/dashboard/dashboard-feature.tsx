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
    "5RJS6THvJuebukpE2BHkH6qppZFa59p99cMXdFr6adyiZMHTiBh7SVPwQAMJPnctu7URya1Qwsm6ji3UaxQFvrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSVABy8L5tWHrR3UT3xYr3MC5fhKjxyXEK44NUGFLSi7d53E29uGiuJN3eQYi5BCdPYVEPnxWWixiyFc8p1oVe6",
  "key1": "3UA36TFdEzw9aEcWFZCmHDpUu2rt4QVqNbqG4WVxH98wcQNBCtDQEYAiwBQgT5Bq3P8MzUSugUXodnJfFy2wzxPC",
  "key2": "4SBwWqrSApxVYwp75RoQvTpqugev8WwiJPJ3kr17SZgML9pWCZ1bfVtWKqFNDEUwVcrZrctT6gyx3UpFLQtJCgDR",
  "key3": "ijESCdwDAEkQyrie1sDtJzxaxaZwBnkwpCMx5eqyjJwuUrtSr5XMazB4AKyjyMGZFCjXZsFuR774PGcgtJf5NvY",
  "key4": "3hm5dx4b2NExk6FPzYn1unUSRiyiRZFezLbv2Cr8nrcpuAkptojqCstMpqVf3CE89fTuQuCHk8g8vgSfiLRvXKur",
  "key5": "3DDNr9G6iraqRhy27P4ApdFvDe8ScMfyfM7CCkxeNjUURUTbcciuzHD6kqqkeYgbuTGRRAdiWBHdZtVmjXrLiQTJ",
  "key6": "5EFrLddq8ChP2Lg3PKbWcC5H7UGrFmX9fFaQZaweqxX5kTdzgDPPDt6qHr56F8iWpyf3y6h1aEee41XaGDeFTwup",
  "key7": "3hACSS7HoiNUvbvLaXDHPKhdvuGbzQ9CZZphmM5sRyrtb3e9yf6TKrdT8MbDy5Da5fDEyPryQVmVMyUySSPAXpce",
  "key8": "3rPAR8xrEJEMqYBT78duEsW6kPG35eRqzttBzTfYQTrJKnwP8yVrGEuYo1RceCBCc2Ey91p2phGXtMmU6FkyrSyx",
  "key9": "4n3dAZfBozfgQVwivBcjPTntKbzQCDR1Ms35FjTc1yU87XvHt3amapu6mCtjzuN67oLNrHXSeiePEcRC7zqtnrhp",
  "key10": "3p8fQXDt5pJJ3gkMPTKD9hUhBTLSAuhvRYo4Fksmf3QZMZGngzVeTE6y3MtmNXctUfRkbTsMWjt69Qa8o1UwaMUY",
  "key11": "3YfsYYPEYHndzbfMJHuKax32kmBkQMN6oC4gsCCfcdRCjnCBkR1JbVTrZ7tqFydLwseKxUwbXNevu5XtwkZcnFdL",
  "key12": "42a3By2hqA4cRTJMrimKGZgG8DLF19hjcK5BNKm7zj3Y2gCuLrbmQdXXZfXyEyvRTjMeHot71Z2ZDoocmqVHVQeU",
  "key13": "5dey9NNYdgRUj3biG2C7Mu72gg3bM7KT8Cv2efy2wBA1WZuHiri9cH9WtHeYqYbxSLkb3STpCQfG3xgyMmTjaX5j",
  "key14": "4m46qJKDhoXbvFiJ6BD6rt1Emx87UA4MxRhfsE4Jn1t6Cz9CiNDMNficvM6JGP2iePYV9NDFneA9qf3wXf4wsh2i",
  "key15": "5ykayxkAW4BJbfwtiED9VcUcBaML3Xw1ThfYaQctV1PmGcVmEfZf8ogT53zFELZBJKZc5WeHVaDKP7yHTHUeZv6e",
  "key16": "5n6Tq1mY5iAQcKV1VBKrs3dhvKco358wkXpYs1ws4MhhPLZbL2FgozCfBvWex473xmXVVHtbfWWBWv1YMnaaPcop",
  "key17": "5oWBDC6fsC7uxJc6bhNjqLMEHeKGHRaRekmdhH8h2K18hHwYPhYm75MHD1zFmxyx4Y8P3d3v3zb6RoKjynbM4Vxd",
  "key18": "5SnnNdENzZqFuCEzKJ36WgmbgGn6gWUfAKhPCHsfLU9Zie2TYiX2ERPa2F4ocS5Txg4YmCPrRdDEmq71Db7NnMEP",
  "key19": "4kCeU2ZC98ZS9Pzh5GfhqvCELFh6w54GrbCXLNzw6fnYZ91vHMtU6otRBqJG9iNfMZPNvBx1fNnvu8ET4efeDGSK",
  "key20": "2vfsEBm3t96sbD56BbUnzM8RJDeRiSMwWKH8mH3D2NThH35yzF7s11wTTJ1v9Qd5pJFoZ6HAkQTNhjBq4ztHswXU",
  "key21": "AMYbHS8ippdkjcZeHcNYN2GPUe6zqC7evu3KEjnukvyA5p7h4YTFxCtjsw44HC4c62RLz2n8LJrVuyaqHEQzkQo",
  "key22": "5ij1Nh3ez9J3gNAfZjf47R7Gf1f81HndwcaFNywf6Css2BMYYKJqXNXv3U1T93qE2MWv9a8rfRTyFn2DzEzSEpJH",
  "key23": "3XPoZGKFGdy8ZTjBoRHiyt4pYBtHVSJ7waZwUG4a6urXTc1cYSkZNhRyu8T2Ed4dhLrNa6cpJFUWKyLxsQBkYPFk",
  "key24": "3c4fzvpT7CsiFDammgmzrVRSLKpnEkQEYCW8wBRsm71jdibWXzing5pgwevQdhYrUAnsXXHFu5Vi7THMBcFzAB1b",
  "key25": "wJ9Pj1CB6Q9mWgNJ4mWtxHuc5t1eZM2RUmfKEh2xq87rEoaVCaGCU9yJ8e9xhSdxsKjXVJFanX3D8CXjNfWpkHT",
  "key26": "4ezipamVK2jn6T8TV8phvWBjNDaAXcAQjhu19QGLbEzHQVpvZUm4XoVSf7t1j2LzDwKVH9Lcvbm53h6ydzC9u6Fm",
  "key27": "4vhseZ91ZcGHhkJckixwFpkzgXcxkPutyPT6Xx9brZpAwm2AyAa3L7hVxbXnEPX3eER3KRrkDoAS4d5PHL5ofUUJ",
  "key28": "Emzz2X4uUiQw7XBFzwNZAyAoiCigQpA4mQW21jBBWL2ykXkV2cNSsJeJuH14cDCborSYx4qAZkU1nbfkCQALTxH",
  "key29": "3e6RJBxbY5azrLxRLbSAoRDy54vuiRABJaXu2TRXrJdAE1raJhhoPH8JyWEMbuoN6TmkZ1qfgg9rQDAbU32bswMk",
  "key30": "4VrjXmn1RYz9FDB6L99Ag5rtcsuT7g9TYwYA77xcESRoxugGLpG8XAPqaAWnZeRwxn7JBc1HubVT1EY5xRDGkng",
  "key31": "3odTqn5w7SoXuC9sGT7KXJJVMTMH8chJCru9Ror3uxPe5KWuyW2ieZpq7UJG6x5oUB92BdbW41gFjLecwnKR1P6U",
  "key32": "5ZnVCGzsijx1vnmT4iQTmirfRkdJ3Riwok4juATTd6W2veYj1mZPspPrZsgWRR1YkBnEkddFG3S6d7bpnVbBMSD1",
  "key33": "4UZJ61V2qJSwAvcZaithXsfEMJVdguZxPfcVEwXqCmtyBrac3jHSdp9zH3KG3G7isHiaPw3JMLdBJbay9baShLqh",
  "key34": "3xdXG2j4KWRqz1LizoZqdRJY9ARmt9dfmKTmEtyxVogQsG3qM1N61QdECrGgvonnxdFehrXsCnc7JvC978sqn2xC",
  "key35": "5mfPXgezaGFUzpZbYnqpKx8kfL18AZ5WnUrf1rz8zq5SQuZwTWAGSrQoHwKFCsfnSGYj4FJNBrx4kKXHCymk2omZ",
  "key36": "2Sx5hN6LYoikusL2Pu4LgpwdVabkvKrWFGkTyikEAmasR3we6XKdE1SKRQEQg2EMtLmMgTPGqNskRc8g3gDb64E9",
  "key37": "4G6BmYx71YnQwhgcr3FdacmAniLoZvmCbhE4QWZX3NhsaTLLuxhNrut5WK37b7iWrse2FR4NHwzS9hoEtoTinmqG",
  "key38": "4EsJEktKHHFaHk62pPHsnVDe7xhWoGj82Q9VeQWw9uw6vMi9gosXe2sKBvXLUbN9SBAbNLvGaLjwtSqw98QhZpdu",
  "key39": "46E7KXV2awKaSyMDXi8yDWpwvcKRnXYLXQv5rdGf8pLEqrTFq2dtydMZCpMHRoZgJm6mKeJAwTqU9q51TjzMTokg",
  "key40": "46aoGqGfQTBTGPLhj7X4HvDcu3DDz2FRk72KjWNsT4GPvbicoScZrFKUENYudA448Jox7CYPUKEQAChviFCxSrSF",
  "key41": "2TwNvNbvcxbmuGCVCiVCAxbFFRhqFwJuT8yLcttPEfkjx44wFbXG3JRp1XJWHskf8nnsUf3oB9WitTBamsHXrRuh",
  "key42": "4fX6yPrV2zQQspsDxbNyXfpnuXGEfaYGz3A4o6aL4ZcHWVcAPN8bZnJASPxPiyAibPe3DyokNYzsmnY26ZSqHozB",
  "key43": "3KR6KuLYX8rBN1hpu5REx4EsbpV6taaLWQWrJMrAJqpwmEPMjcQhDuoKNCMT8wsWVhtXMF9BVLkoMWwd9Pb5xxrs",
  "key44": "xa2yRgKso9epn9ef8z4i6TDwLQjJ2npAN7dz2bqrx9TkGZeiqehfctHzQ2DYYzbbhBk9hrBp4kSd7FgCzFYUWMx",
  "key45": "2CCHPiy88inpkHW22G7qK7CXa2CKoJUjNzb7bZVgCTc6Dethb9Smu2mDZzAyQeh8vNVPRZL74dkdaLSBACwk9owS",
  "key46": "3XZWSVGXXZtK1vYpt1iMgAC25xsnZM3M8gbKpBVMZ5gkF65GEdFGMeNwWQXxj4i6F4DzthvbnaaSRKxXZL8AHLid",
  "key47": "XHgpTHft1z25vCJ9mjYhskEQJhvp1eCu49HR5DT1f37pS2JKKmzyTQpUPjPgpFSFc4h6qzsioeaXLDfsRszJ8aN",
  "key48": "3X57yNPhYd4Sp1kvfcVYMVSkaiAcSLNwkN1aKCo8unni25Dg8ZUkye7WGoUoDyynyb2v7qRNdLcJVYQArHEE3MfJ",
  "key49": "2fiAKr8eB4XZUTuBqRAo91x1Nzhoi7PhzkaPJeAak3JXNQtFX9ama7JMLJKLD3UFXhCozgc67pxoHSxgp21TxdDH"
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

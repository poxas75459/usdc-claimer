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
    "32JN3J59Ywsa9Anxjtrseerks2TUokykhZhTPmKUcJKjafeaMkD7QYdPke29fS6i7K7GMfA6dyVeMabuZmgYhk8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kVnkLrrHiXR8WX7qHRsdwMv6xSXqKYrtoyDKzbabe145YBRzG2D37HhvvrU8WMyNQTjRUvjmCd2e9epwpbVvztn",
  "key1": "2kKPC47gJB3DaBe2kwUE7vbTSbzi9ZCD4WVasxZbYpsEsaXrH2TUfdpvs6hjXm9yR3UfoNx9yNqQpUjMNDfNchzb",
  "key2": "5wX5y2P1Su2puD6FAK54cZBtBhC26aH3DRPk7fe515E95aWKBkTmmc1qewpAHCjBPbuQzMkjAHJhJU5HqGKiDeMg",
  "key3": "48BdcHp3rdkmP6GutVLQj2aVcN839sJs5whsiLo8LhnrfsSjjXwVffpqs787JHePTABc2SKDcJ4MvukqAkM7kbgj",
  "key4": "3cLzcMd3S7smgVv3EzhMTZmeyvB7spQ7CmZsp8yeYNxA3X288GfPXAMp63RppBjUsaX2rXHTbXZhHFBvCH46QbLn",
  "key5": "5gnqYcjgtjdvuirPSbqrWGbPpfJi6HzKpYEiFGspYTBZ6jU3eMwu4pmVeww1AYwJBFaEDN1pED8TJ7MJseF6DnDa",
  "key6": "5mv4JpDFB9qYH7gDoAShc8U3cFxthqpzgRRaKMfyJdbH4DLduKhDsSvdULrbBV6ds5whzWzjohamGtHVJj7DmpMc",
  "key7": "2mc8aqhToedXdotbm4k92HsKAvuR9vmVVuC8jtivPayQYv9ERVJPp5BNcpbhNvRKq35LtjhUrcYKj3JxNJmmePcs",
  "key8": "3HkCXAxYPEevAdRZo81JU8mDbyJhm8jALoaB8kwhaXMK78E3XUBDBG3EST8j8Ccfu6xunCCZVMebQEhfHdFjYmgi",
  "key9": "3BsugjUNc5e6CWmCwgigH4wsYWYL2CnTGnhSyTfx1Vst6YCuspdpebRefbgKiVhrf4mtgT9L11t2QZV8hT3vAhe6",
  "key10": "44Z4RzDaEC7PuZbALQD8VWmVXozKJCtNNsztSse9Fyp6iZxuYRqUdBFrFUxot5nc7i43v77eKmYuQGcfbPW8WiZY",
  "key11": "3w77ePBpL9cw3tTqS2quqz7smxq6PxzCTTEtnTTr9R6DoZAXXTXwvL6jToHFXTqeze6t4XwUc7VVKKp2pfiDyPe2",
  "key12": "2SEv9Z5cZTBZMofA8c8mitTi5fZy6eJrevdRzXbAbQ9it56Sy9miMt4Q5NvBRqrrHV4G8bDjKX3aeQgiPoDwsci4",
  "key13": "pg4o8wQQevtfrhFVgUCQFwWs1UGav5Gn55NK9gMC35GUarR1rzHYqPgjwRa1UMkwKmYC2dWGzGBuAyJJBYnwr4t",
  "key14": "3HAYNEMwye5XduLwxzhpWjAEpZeRdEXgeYgV33emqL1TdMn5MbMRZEXmH2eAcuvufEo4YA9SgQFZ6eg1mZ8QtdLv",
  "key15": "4ovj4WbzQz2YRDLPYGDvpRo7fcHLnvfzBhkwpwMeRVUp5aM3C7cAM8KFjDYswymoFb9TznYvU5xSxfZm7iMFNgEE",
  "key16": "3kCNQLwQoQT2e9Tt9mHamba7k2riNeioDyFSA2w4vxQKb3j4q6UXyoWmZX1yJn1uG46pFK5Yd2YK2vjp4cBY1HcZ",
  "key17": "2qBZHkFtuXo9x7iyxi4ikPXY5VpZmcPfNGskZkrFMPA426TqLeSTPdStVnxKnJFEg3jp5VEAYt9Sjrh1Tv7mg9Nw",
  "key18": "YNQYMtZ8zvkSDxz1UVHJNwQdepqNkjU2GnMuLbCm7DuGqmGx7UWFhgx2gAE98yuCwA4e1zjzc7kGbBtFUZjTTZC",
  "key19": "3RpQRUEtV26KMzeAMutdiYVJvp2FNfXyhCd1YsVuKDraEFFzK4R5iEGtx5FXfEKzTQMxM9YVCYBB3sN3C1RUSem5",
  "key20": "2kComcvmFMNCLVtUcmsVTTz2MYJJCfGfJ22y7t5LcsfjqcddE1k8kCpKZvxB86dewGXrHPYNkjX8zmPNzhhhG7PJ",
  "key21": "4ogDCF42phJGABvqRjKrhn2JQi6pnS4zke8x3SE8kmKvPoDepUX3XsCFrGAcDHgbAjCpo73asm1fe77g5DWtq46",
  "key22": "vFS45KteJvZrKoZKsQoFdUFUBHUF3TfMdoqKgaua921PGc7CkuqPscNxrnpRbpEs4HbzTcTQisxTBwmyGtChv48",
  "key23": "5WtFn76toty9VesUTFbcgNVzxXjpFrJjQFXANXHswJnUbh9yEsDj7YemoZrkFGZvzxCMN1CJX6EWpwHAsJiURyLo",
  "key24": "63ujTompfSrMkXrVNBBABdyjB2GzdTwd2mzPffBua5hwgHk1vyDLcqXaZmpZim5TK8h8ieuEXjnq5jA6GGp4tb4S",
  "key25": "4pK9Q8R22bexDTfASfdoPvYepqaJ86q5jsHfxbhtdmZQh7mfkKKCiVzFHqg9KjAVaBQAhGqJsBCtNGQGv7kScmP6",
  "key26": "3fvQ9hGZEeo8xkGGbT62NjDmFEuVGmKXHS6FVYHS7ftrRiPF2dKNKTbRsUAQyaQ338MUsJuG6W1WGMmwmFe9wRqk",
  "key27": "46KuhCWJQirXAv51Aea3RN2TR6rJ7nNyv5YVr1BLMTJK9dh4i5TjBPHbrAoXy4s9L9Ln99BD1Ff3WuTKudzfRCVn",
  "key28": "66qTGYj3eVUfU6Dpn2KuhJK3Kth5fodQXP9WqcwzUFrfysJvk1kNkoHoXN3SGF55QBJwfQYoQPour7PMJc4xcQtc",
  "key29": "4R5f6qpywg4GndKAwhvR8RFY2ef5jxr2uxYpJKH2tkWC3ctm9MRoEAum2hPMERZcE6MR6cu7wy91chkVY3N66JAe",
  "key30": "cF9ffWrCAejvkoenG3fWbs6DHWbHeik3MhsH2qDaocyYaXofkwRRTK8rHUnd5kWmJnpfcHj5X7QkChWnm31fsfY",
  "key31": "31n22897EL6qjsHYeWjtzK998fTgpd3JfCtBc5QjHo1GcSJG91cvqKsMozQh3xJsKi6W5gWc7fUpYcradDX6vsDj",
  "key32": "41nWpNPnMvnhbfGHmv3msRqN3XPenytVuj4dEaMHccptEvNJgAM9WmTwwPH5pDqNDBnL3WhqeCGmN3VMXhiwab7L",
  "key33": "8dYe7S9Azyh7CCPfXhR6rBGPWHfUwW72wfLT4Pb5s9Y9xsQm6bCdhPcvcdiD8SrBC6xfEdLnaLH6r9uss8wm1SY",
  "key34": "4LUfyPazo54payq9cXmhap6tmgesZweTLMPoYawgg9knSZtvMovyD5Bj5nsxgbnQanvABSPYH8pLqYWN93EmG4Ac",
  "key35": "5viuS26A5jtx3uVc93ogJ38fa1B83pko8A5yPKbhMCouPXbBYvPmC7mXz9o6XGudPje8ws4FVapTVTyHPAxErrjp",
  "key36": "rbUDkLKSPE5WacVuNVA9EKeeVq9bXGHTefVFvnzVagrDRmh57vbmj7z64Gs1BjWLvPif9LdpDFgkjN6emampjk4",
  "key37": "MU27gpLcVakFBgKbD5cnxxf1zDAaYHon5qJakn16zv2NFPXRSdrrUYTAN7MjoAcVU9Ry4GvwfRrWchmE8c8f2Ng",
  "key38": "526ZjPQmqCCwCaEZiWorLiJquQo4je6d2KjEY12tP5Mw1ErizQRTUXZ9TseK7vmvqppsUBUTm3figf5eHLpfcUDs",
  "key39": "PeEjbbcnNTZQxAZPh934ZG4vLRyanaatgEUuNo9FKEWLELM1yrZySSziqxvd812xEzvTYL4ZnjggDWSKU7pAAeb",
  "key40": "576prjQ8gFMLxuTV9UFFR8L9SqTSxmCQbqRUMXnq3VzxLMUZS5wYJrbt5nWkhcybufEzvid6iXcju4mrbXXMWdYC",
  "key41": "3AKtXK1aJUnsYQfqMAvwGdCYUw9jVYy487thHJiDwCu9C3ERi7fQP2EvyLC23REvVmTbEsq4s4TReVCSDp8xbvSD",
  "key42": "47o1CqGLm2djHenWo2cMR9KbyZKbur3oajivnSVmCj16wuQoDkqFq6MUMWUHMYEkZt8fu27RcZBWCygdK9Ee95vY",
  "key43": "4rRvKMjpvCEXDSQhH8oVyq4Jb7aaR287ziPMMrce9FVwWfyoujzbyn8D7HWzQzzEUJFNApA7bgHBiwBqm59qAVcr",
  "key44": "4VAzQeC41CbcpTBz5oCSGFFbxDBEDHZA9UnMf3HT8T8buXUEY8Z2qBedqWe3DHwx2WvQW2NmiDdt96pWdHiRpMB4",
  "key45": "55kYHr4zNfcdTX7icHN4HFNNYzLKVKzRSukKDJWziPeVHpE964vQtSs4mY3RuMVUicDPhHM8dXXwHw2wTieg5EsX"
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

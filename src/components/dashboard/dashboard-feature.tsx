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
    "42MAbmrJM9Mo8HPU5pHppFgZrLTbnbSWgpVDS2YtkQPznSdhhhgLEjFt2NdZYUaTgsxp1EfdComhKcCJcgkCioK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhyCqz8Nfr5PY6Ax6uGFXtdTDXPc3KSXThXnZcLU92EDL6LsxVEeq9NRyjtakBcDR3UskfPxM6TTuHxwehQmrNU",
  "key1": "4ingMtzs4nuoZCUY38dx8KpVAmcSoWYbcL5BW2zNdTJMeLRp7xgKSezjMwNssTrGM1iR9dEWa81uYyZE4xuHm7Bk",
  "key2": "4cKgNtRH85LHL8HsB8KzUr4wKKJYDsAwoFZaPwSZcQWR3ey4pKFWaEEu7uRWzscpkDpDmFMq92zQRfGmn5nUZVY4",
  "key3": "2EVxBbV5pD679Dzbb4gxLuoWkTkLWeqkUGp33yw5C5RcUjEdy6xQ3qAvjoTDMRvNvPgCKDr9Vf6BWffAr4sESJC",
  "key4": "4AA3WpkRa8f96Mc2ZoHeSMDCFV4WzqrTSAB7WBGcc8Y5U7TZbiQRgWNqvCbfEmQUuwFB8zrG39eSyAxqaKPVFrLZ",
  "key5": "44dvDATxRtK6UmrtqXVcKguCpifZzvgGHU614LbgPfbXXUKPmbPjH4NzmTbuzengguKWRUfYnc1XessTdJ3etJiQ",
  "key6": "2s1yffyyvYXED6judRUMAc9wdsjdUudmHUvfP3cLpA8oiTof1Z4fxwcqReEKJSUYrGTuK1fJ3eCkkwEXuUVQkJ1J",
  "key7": "4NPbjvKwvq7D66E2Cs4XT5iV552TxPQ88fLDc9Q964zLTNkTbUkd7agxGyNpB8KbyheoSYc6WsAXwnLwSDebB7h9",
  "key8": "nHXEw5N9Hspsu5Axx1uuQ8uKb7HxH1Rj2W8PehWuNcXEGQSXiC1JwnmKJgWVAQX6yQ6edM1tNDgenQ4nxi57SDp",
  "key9": "4kU7x3sz7ReDBkr4hQpRjiyap175T9iiu1Tjw5QpKQ9L1D8oz8pDj88PtPX6x3UgPdqLMmXcBrsYEepwb46yTwpj",
  "key10": "4i72ydhBVE9t4mNwUKqFRcacNfaGFx6erZ6VdhQhZ4s6UXTqJ6sQmHZAESAHuEKipsCHfCD9MkjqzrAqZzC5Lzyh",
  "key11": "3hXgaFQqHZ9QFh4iWFNbJ9HF77agYE85R7wJBZtrRVE1Fr1JLZGWqNSGeT1cpcKttw1MMKMyAqB5ZKw8tpw3YQrY",
  "key12": "5FgWGKgyT36ABp1tKHcvV6zGV2bmX1aWwtc7LfuX2HPBBvvs32sGazmF8DRzwMsX7tWghLd2V5pvtdLT4nUSKcQh",
  "key13": "21x8DqwRiBbm8R9xJJ2PGx5NDnsabhVFt5YqEZDet5AFuH9Wc1qJG2CkSsZtvBseiw3HNKVoT7TvXqr6eSGGfMZM",
  "key14": "3PvCL835S4srqepPoVLFMy8y4CBCDDLLJuYWeWYkk5ex6Mbukr9CPhv5mApCYa3tdjWX34QWKNLA7MngNEftuR1E",
  "key15": "3xXz2uQ5Eb7RA6SyMJhyoqSk5PW5udqMiZdbv8QmBSSU4Kia1SfsQ81kd8qmUNuawTMQd5guhK9ViVcG9vSH2wjF",
  "key16": "35rCYbsymuALdF11Mi6gAXbB36nMTSMkyZnD5B9M9bwg3cBwwBeT8nnZNtZ6MF8SQebQMgUdg6cZRUqoDzDPxWLv",
  "key17": "3Epo5Am7DCVvSmbmGnLkhNtEP8Z9F6e4aB5e9UKqBQ8UsjbAgDmh8o2Q2WXk1UHSDF7aCuod8Z4fdLgXTeBR7CGo",
  "key18": "2UXpTzRJVTPztjzXHnHBSEEUH8inXmYR2XaMbUyuXTSMFWehQZsyTsTDXyN2aozGSmJSWdFCQdpWqsgjS8KEvRNo",
  "key19": "5FjAFj4HVKKkCd7g5ZjXGd1948bJYU2FjmtFBnqt4GEfyrwa8WHG2umd7VmWMz1X3XWSjgT81TqMDzYAiq8LcY1W",
  "key20": "dxibe2rkEfBtwRjeau1aq3YSueFupPAfqiHmgnAnzaN1WKCyrYCQBRz51PdameXomDvv38JCVgCm1kD8nYgH9Cz",
  "key21": "DFUoLtxNungYHvHnJQqXzD4tHpGFbGidQZRD9xgTp294zrPXBuYj6ubKaGUhK3VV19d7CzMSFn6WmoDpxspH1Vq",
  "key22": "d9tx9NTggYCKatJR2F5dU7xpse3fhvwxA66XSxhiPKKfxe4zDNb6aRddiEGvNaDaVNYGpbPYmK7Qg4ag9oK1KHb",
  "key23": "mQzehpoRF3YsKTYsQuS8u9ivNfPcQ8gqZcgiVJujygaW5ceDcXLysbpfVMQ1SwP65PszW3tg1ze2B6hdvAiEwon",
  "key24": "4mo8bZUcAopLwbxU8B9R2H8Q1F6WPigHtS15A9JkfDZNCHRTpHFJteyJGtcG3UNg4GxQ2raC3TX1Ze2EhfVBvpmi",
  "key25": "5NUfvLBfyKoR6Jbxxtg263X1A18ZwgxZ1qF4rZHmJJBwjV4WwrpGwa6YadokiQkK7Pkv29n4hiRW1rr4S59VToJV",
  "key26": "4rBYwEryoV7xNVeqs74f3twemMiKRYFLVnbX26svKMsEE2yMqnASvR9fZLgQPXCeEg62sqr7XSsCycBsaQZyBDfg",
  "key27": "2XHjtaqS4J1hNGkwCQWXDKDLvin5tpQqnJfrsR2Rw9tyjX38o7r6dBRECAoPMRbFwJHDjvoXfCqv3AWCzmLGCYA9",
  "key28": "4C8Rj5MXCkmuVLoQKqpoaLLq5TWyVmUuaSWX7CaYYuebpJsteFWmH1SQmKb3aUDwhfJ8QEExjZbC5VUsdYz6DoAA",
  "key29": "5zre4fmwRZC1ZFwAz4zmYa11tsqJF1aT2btSLQ7fUcvzwCw1XJVEcSJWjfzPqkQgBpFNcHyCAMSyYA8Q8qzYqJiP",
  "key30": "4NTj9vq8RCV4xmmjVYXiJk8NuMmngq8fTvLN9UX6h2ZrHBpwc6BfsqHEVFNvfBGNSQm9eAHbJrjGy3eji5Tt5cxU",
  "key31": "3cybR1tMzuxZuydQLejbr84kCxruR52CnXadpB4QetqjDjFxceS7afkw8eChbRqJLgYApqQ3XxGw5RagHgkMxscg",
  "key32": "64M5NUqRgCjJPaqWBcfQpX1xm1W82cdraVGb63XvpfZ472LVa3aQbmktymowqBekSHusk8BTZCxkES4Xx2QxkY3M",
  "key33": "3WhRUjzCUZcKaBnn31epZCqzu6pjdzdA9zjXD63GeevXkJ6jrqvf8nZiBY95RCyETKXQmRyiu2BExa5NtqgYgX8d",
  "key34": "3jGwrjG3V1WHAeYfmga3oM2TbSLkM9kQaaPKhJQLLucJrQr6ygKS6neSpEaxiX7qtpJAqyoaxz4FJY1rvF8byZhM",
  "key35": "4Dz2ppgY5RymNGjLJ9ggvewxnfbgcTeini6rf57kvN3Mnt9vEnBJRo9GJinyL7JdEw1svf8jqNm28cVezQB4gxSQ",
  "key36": "64hkqbjUEUrfJouMe7fSAcFNJ9G42qVcWnUGH1RNkF38mVGN6k6ksubDqpnHazuHuYcCNknEXTFL3Kiogpq8C9dX",
  "key37": "3kfFVBwEP2ZMTEcNEtER9oyZBf6H3gw7BtdLuaAaA1vYv57HWkecuouRRsGgRtREoHDH2ca3kcQW1MzSKjggzQbw",
  "key38": "2ULoaTYWZfnaq3p8AgFnHZoYQWshg5t6gH5dYQDDLspoh96qPKzdjNrngDHJDNMPYDGPdfhCmKvTfLepREKDGfe1",
  "key39": "4Jd21qBUAfzy74tCLUjD4yHwG7HKYiCZF8jiMoSvdGhzgRyb4YPkRkteHMA6qgMtZyrSPJf9TR2aNMX37qhAU98X",
  "key40": "2KPaPPAF7j6JRJ8sRMhAnd2MMVYRVhKveDseCQ22MaV21mGGKMacFaf5crhfZEP5CzdC9D8srZd5Ax8TpfqtBi8L",
  "key41": "32vhwZsQAzEYYrwEZgP75aHSiMnC3rg2TMdUzUsqzGi7PfgpY3C6drbdUxdnuPygmWSGgATm91pFYgSaM7ntmmey",
  "key42": "5hxA5UVnWG1kCuzjfq6b7s2cb5FBASC3iaDsvSehHSyfHeffruUSXK3kbMmn4DqPiiYEoTNVGzybeWzbYKNW1AZk",
  "key43": "4ESgd1NHnXgqLiYJsenR2YmYevE36Ybaab9eRaRxUMUCmikGVo3G39E5wL232kQtZjZq53N3y4EAXSiEJHGUT3aW",
  "key44": "4kuGJKKn2fGzHHgu23bEFgQjfJxziYqwGxjZrK6ntdwAhZq4dZKcbVxDoYcXM41MiCMwaG59hSrji3rbkMG8MjwJ",
  "key45": "3Phfr9TWZd1KkU2GPaG8dvRqKXEpqfNXoJz4WBMdbAasbonkj6oUWyz6qf4C7bLMyP37CwjZD51kd7dW3T9ZGqQD",
  "key46": "3n6LwStwWjaj8aVBDRpSrcKw2KRpBMYv3U1ehSp9zxVbtxPoCwAe5tHTqGe31gUGoDV7Z5pMXSTweGas8msjqDMc",
  "key47": "Afrze8z6XsU7N3UaxGWSG1CgjeWThmdDv2dBMGgaE4djgBkfji76pt44yGHdykP9tuYfAQ7bCzyYpyDs8UdzwuT"
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

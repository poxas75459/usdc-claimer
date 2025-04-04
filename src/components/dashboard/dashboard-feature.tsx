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
    "34NuKS5bJLpETQ5Cabu7uv9pp8HzveEdUL6uXQfacCmZK8wQ7if24PqFtG77jwSdEJB4mWsew4QpZiWRmdVddRns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BAsv3ocj3BdaWpRMfz8UsK6Vgb692dFCqiVbuBTgJm8ZvsN35NudKAypVE6Z1GLqAnqtVvvj1D6V1Ww1zPmM4kF",
  "key1": "nVbuz6UsKQ5vKZYw9TvU6iKv1ueAEkvyqRyqiD2HTU4nySCcPGqmA7tFHH3vBEjNADkgZy8H3ABghy6CSECsx5u",
  "key2": "28HWNqK3q7qMo9MWXfyPgC3XZu23MgSEQb1XiVoFhhaZFkQeYuXWxnsAWrpJsBbvRBkevtxngE6QGxVzfCE7zxH9",
  "key3": "4wpZRjMHWamvDLHUY9RrsYcJUYWHCkEYRVWP4vfu3ZWU1HzyS6PuTjNCxrbWSQpjsaA2T7xfoqgU46H8xed2TLSW",
  "key4": "4nWrnjvD44kQw63TPrn6tdNJHC2v5AD5xNV7ZnRpPtfbCrnGBUZ3PJK61k9ymQSi6uKFyDJhU8vgz1uG7ybwszrS",
  "key5": "66AtVm4BTDjWvvxqDxsg6XmUpFuADsYLkiVDZWDqv7j2VnDrVmvRTPmxRCuhmBTB9BAvEsLhsc95vn3ZXfVhT2bM",
  "key6": "2PYUdeCie3ueyo5hgvJB8nMNGzcWXKqt31hGVSkeN85V4vP3G6S52RfWRbzVG7hhgj5Kws9Je4oCKBjJcwsQAr7P",
  "key7": "EE2XXVYHvsDFh8F3cVFHmJs6gMdYpH97kHW4nLrmo7mShatLpDCWK1qVUoWkZLiEhJoTNsBH8sYmzNAeuuRx2DY",
  "key8": "3qUuU6xrnex6Eigo6LSLZKN86MKWbNbMaxSZKsu1rTHTzVqSkYaqbphPzWAhqTh1YGeDvupUidWC7y6SB3g9XbmS",
  "key9": "3HgZFwjAKEkUZzxFZcufJxmptozEMkxrdRsi1z4Ayvrgi6ESB99sW2RAA2mGgN85QmYCsV58yn7T6AXtJin1pv7d",
  "key10": "2rZPiUt62XNnTJpi5Ggo9eLmEDfyERiD5ftd58DkanVq5mNJwyFURoHa4XZfcs76nJC5gMaKHge2Qgdsu3rW6VMw",
  "key11": "GEGRrcmbDiukGaHypqHyp89rP7dmQ2d4Kmtgy53b6jjzFip8QZ8HKbfCDkR4VD9xkVgyCMCsQxaEucsmXJTL49p",
  "key12": "2mEEoeg4dJrY3p1ptshahDiw6BFxMjn66rJs2TeEairj3PYk9GtwjdkyUNE6uyotdQYJR5Yzqz6Y4Khr7Q8BKsTy",
  "key13": "2mjkJD5K5qvnGCer5ov4CoJfmqDs1HZYiUicqTv74UCMAc2DcpYLQgTm6WiJnSjVKpbc5FWYu61fgKf5w4ARFqE",
  "key14": "5sGidpJXs7HhvsWVGdDgr5eJc7xrxw9e7WWHsi9pUG5jRCHUR37LTWAFrKNJV98okeuE7Fp8zDDJooewiJMW2GH9",
  "key15": "5y4MZywXcqojarKpapM1xLbGKPt2xvUP4Q57yFS6owrFsim6AzEezTD9d1ZJNXS91gLgzSrLA7QSwgxZqNxuLdBN",
  "key16": "27w9yMRwSEBteoYxKbFoVs2W4ygdpY9ywed1rYEeJqKH1N1KJfv6gT92jh7JcJrFpYkADSnvkbHDKiuXwNA1Hp2b",
  "key17": "3rHWJN3Piavvnae3MnKgp21ceQgMX1cf6S4tZmAfimTdcwY4DhmetPkpZmLgR8aF6Nsx6ymEnS2upgyNvGPNwXFG",
  "key18": "2AWjthTnzWdsuwEsT9uvcUgkD9acTXKc2EgiNZHhxeTCeA8gdhNmmX5j6Hv16xHycc52DZqwoakaXzQJDg6dD1E4",
  "key19": "5HqL5dB4xNBv7QTbmpDdyhCgvfACHY9Z44bJYQLBEqX2g8qwHZzZvveiTw2C78VSoeTSujGHsFq7dkgybDjzV7FT",
  "key20": "egZmS2ywKi4c2MZ2G12pda1aZENzyxTeW4ZkrZRUY1HSsEvjJnRSrQ3eKwN8VhDFWeH6GQGw9eUjUi7MwqvZic5",
  "key21": "nF7MvACiPNArc2QcnysLZVQjNfep2QQpFcBtFGNemHU4UNFC9o3F1YHyikZ6WaMQ6SpMSgVaLweVfGz9j3sqnJp",
  "key22": "2PpEgawDs3zuYMHNoWi7QRiHvLiG3f9Vk5X32zsczotK2aZUCPGbK1jzCNL3gJmFdgGhm72SeL6fwAdMA8H6HC6S",
  "key23": "4bDsdBXHSvmNcRiJGwTFNcfNQs1SgQSdZ5ExvtfVRUPnbYNDpnDqVUDiQdnBvT5o5Ucg4KkfqNoRGzfF9chKqHCq",
  "key24": "2ntkZuzX7WPWdBaCx3cas6m514MBR3dKjS1tN62oDFsFyNYPLQVK6t36KaP6Np5Npov1KVfkJaZPvPbNhD6B2DXC",
  "key25": "4tnnFLRM3P6q9jZUwVrVdutJfJpr9ViXbgxuwafQX2Q9XNeanAucBrS9scibuZ2Ra68MLKoNjHXJJMHKMbCuqUqd",
  "key26": "hQM4JihBFZpR3FiAMgWZPDuZ8ZEsE7b2AtAWir4NrUgr4XawgcPRg8erE3rT8ur5SzYazi9sYryrJ1cuuZeg3jC",
  "key27": "FUxRgCwMjoieJN9WJ4Bhs1eHhNLXLcAEZNbGD6y7xy1CLQFxp66UusMccnBTTkjnkJUGZPYEwQqQrnX5nZJbkLW",
  "key28": "31KLWsJxPwfzJBQ8z8KygLFJ6GpCpTY6gy7B1appqhjwFZmBfxV5cCxe7aTdJEHTcGJTCAEE6Wc1EtxwCeik5TYx",
  "key29": "3aFidNtvFun6189Rs4gbN3yx2z2S3K8SKb7M2b1DAy7GHC5jygzuduj5zpXrRYjEmQfLP5uxNGcEEDhvmdbBUyWN",
  "key30": "5pHuuiNHgNfczPYY9uNA4mjy14v3WfMYhtfLZ6V4W1nuT1CEhW5R2BUBK7nWspp7tF38wgSKEoyL3Xui9pCQpkQM",
  "key31": "4vTuAQsv8SEtZvLXoAewg5aD6fkyv84XjJ47CSSCqtT9VyyqipW5hEgRqfgnbJdJ1AqQdcpyRgJTRtvstcoxSw1d",
  "key32": "2Xs87eEBaLQj3BTZbzz4Q2VuF6nfSy6S9oURusy3ybjcqxNfcuYMYBfomJPXvxw15Sff4mSF9RujgtsBs6TzoMFk",
  "key33": "5WP7pXMdKEk9N9eS2PTsmJNuSPL9Rr6Xu6JkXMTdQsUqcYFtoL2gc1Ds59NgCYQY3WehLePawTjtgf25p2ey4x7s",
  "key34": "25JpZ5BsZNgz6dPAL2aRbSpNfZgdAiMX5QNSFhMLe8groKZJFKK5izGAtF2bXMxGz6Q8jXPfHq75m6zP8vr6ne3v",
  "key35": "4SAxoyzasAepu1xV2xG24CV1RDzJfym3JVmYmRo73T1kVcgss4EBjUWaXHYKSCmZC7RMwVUf17YfAtR7WVE3pMKE",
  "key36": "2jeKMHKRVwMNNVeebqrZBhjx3Ma97xKVgYsBVQgHRJb4fyzVTgCqWhpgHkbp2cbqGLod7UBvCRju1T3Hc9hg3XjR",
  "key37": "2gCtDyWsGGUcNrJP5z15enstfDewhUWadiBrMMZW25NUuoAHWptStmkiFyQvG5kxQ9nKu8yJXLhTLTr3Bx7tYqgT",
  "key38": "58eGS5wTUDLcBxzULjBS3bv3ocvbJtgXdKSEt7F1jQZLZEWKWRfxMKBBZTdGPUG6RQMmkKpELnXMzYQwHmMLescb",
  "key39": "5TdHjwCEcC8kY8GAXZE7owSjjiYjo3ZnKNn26NvayRyKLE2T8FmMfebzMWgfFcB36sqdf1jQcbZn8He1Z9X153bs",
  "key40": "4xgKknBSKuvPGB3AyYiwGnkjJi9zgbsJzaKw7TJRhmxSkJuQRLJHLQU6vjbUdMVdB2TDkqN3HcYVhwhXdXmaXSHy",
  "key41": "3dkB54yjS9u8BfLji9LQFycxczGdQ4byJm74QkTFnVthZDNXGX91HcYV4YKU69mhst5sKzN6Y4gkzTvpR5Ekdb46",
  "key42": "1H2jwQFXtddFDaTCfVcMfFwbYGQ77W8wvcESeqt4UTuzokiUUziEhSP725vNhVPrVQgyH2LnVXxYAmu1dcxgHEA",
  "key43": "2SB4P6AbE5C7oxfY6bMsS1cGNx7zMpCjbui4CQfZKJi5Hi4fgNWMjWFqpGvuSmEmoR7gEUPyNSH1M6J9Z1P11nf2",
  "key44": "yWcJYAt27KQuxgcYjVx2Y68UWnb1YJ5QDfk6LXrZ8MYukSGDzSBmS1nj6RELQx5mnJjuSai1edXmyWyAZtbw9qB",
  "key45": "5PcRGv3tAF2UwiodbFrJkZ7nj19fUoi86RgLCJMB1GJdKVXBnQmLNgNbXe32x9z3yc6MKQEcSs7XAsvTUotkay47",
  "key46": "4rZZLQfwYutD5WooytRj32ZKgwdUVedNPAYgSSumSoicBYEHfdy6RSsJ1nma7qAE7znj39m63R72cNfWStk349dJ",
  "key47": "51wFZJD4yxACdeYN1z5VPgzDvr9acxMgpUT22SZ2VLkwiGc65vJKfnbvtzTymuAg1ftBkR5dbUswZfrnQCRReGh5",
  "key48": "5rVDzhKCmYo9ypJF4QexvBZDN1nChxtyBdMxP3U5hJR8EJmQCnuLSvNu5FZX6tEvfUJjNzErWJkxPAd5JH8H7vEk",
  "key49": "maDLEYAq4BZ4VpKrWjscFUniNMVahRdybsewevzu37tSEejfw1c3zvnR28t1HkWoDoadwgLjXJ6Ho7N1WzrbFwL"
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

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
    "4Cmr9jSsj3Wbr2dWq3sr3PhuBPBBSfBDZXMdRdEvpsPNQrs58iBj2GG1coHj7kWWdgen8U9vgDujCiKFteRPujNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKE4PTDurBz2RfAFUU3YNh2Da6HRGb7TMH4pqrRfpDW1aPoUAL23XjCVqzXr1UzUXxmsJBsDSjbmhVsD4u4c536",
  "key1": "4UHk7yydjL6BoRXGVSyr2kXjDjshcJDRYKuPkW96VWhjRFU7332ZZKKQvxPKkT5AURw4soeNdYu6Pz17Xi4uFCJk",
  "key2": "4nPGAzniqsr9NdXGsViq4ZKuGY8wCsC8UzVRNPiQXM9NoABDN4qDQF61Bey9Vh7FGqavJyBUQkaqFJjEkvHDiYQV",
  "key3": "Wi3ihrpAKT8sGEvd3mBtG5NLADvJ1oW2ZP1nWuzjn6sPPMwiQZLBB78CEwkJG5hptWCF8hJrngRVzMVLEZzRtMm",
  "key4": "yn1tsf3nemb6TrNVo8jD6PWGCyzpFmnRXzuMBuzXkXiiBCTN28Vr3QkBEF4ocAfqJvwm9CwPGmmJH4zgSnkQ1bb",
  "key5": "4TvipvE9DDzDcdQ423gYqb5dvR1VjHYasx5G1MJLzPpJT3SVe9qZFtv3etQepi6DrmvHzL1w4NHPN5tj86EPPin2",
  "key6": "5jzip21A5cwb2E1RzJPQsoeXAsZSxPU6vDC9ejHinrh8EjosNw8ybkT7WGpqzhcTPfnwcTJmrBRchk81saDgacVi",
  "key7": "1omVueD9svEut4aXFZFNESHEeJNjhk2kZGhnzdv8YbuujTaA6ymXHDms49zayHmxMDm5Hw7TRaJ89FfkA8Hf6yq",
  "key8": "4wuAJ6vMbWB9AzW9Xfbvju4EJ32vRwtuhTWpHubYxZ7Y7Tuaq9tXDXFTQeDQ77eAZquiYtP7hXDXvQHF3TojVw21",
  "key9": "5MLXpj4nox5g84RFnCMSVPK8YnCHUkUrE28wwVH6cGwSu5PLtaUufXMSe393PRaeJ79G56XptUT15JHgGRPda5Qv",
  "key10": "5fu6UPwpvbH3Mpv4TDDo4L64jsyLnTzsZMBop41ZSZoqiiVUEcXbJSNQLjrK5jRVtjd9bny5ynuFydBc4K66Fovd",
  "key11": "2YdmQu5pcXWKtmacMgbxAdjPazGFp1FbT42sqhJZxAnrV9GzCKhj991fBCsqzoy9tstVU7pbbqPjKuUyTr86wzJj",
  "key12": "46tMsUQ7SZbo7qkeyP5kYY88Cpy2ppHqXciAc5zr5ewU9MHzcgM9b8gFofpyme4zWCHcErJLbnExMfH1ZwtrWtA5",
  "key13": "2woZaCLguaRa8BZr5uXUrRx1HPXXRAPyRVqxkj1Ga4dA4MSQbxeUhsMJKUvsXhrJnN7rmYQdCE2LBgG8k9BeNrBj",
  "key14": "2isgpzwk69MagnZhtSj1VdVoCNrBSQqJGb8UiiWfEQkikRj9D7ka4C1SRiQp4N9gDjZCF3eZApVeD6kqqFpaXFvU",
  "key15": "5KcADsxaHFfDWAjZK54TL5Xy5D7Jr7Wrh6sZ1mpMUX6BBSaegM3Ef7GoBKw6b7E4g4GdFG6WoYUwhTWUPGrRJAVh",
  "key16": "fctTVsHuKEc3gNwnvxn7k7WZ9wC6A6C4QYFJeDNLkD8K5CS2r2poi7nJUJMC4nGgtKq68BGncXXfnE3eMenNSuv",
  "key17": "5Q7uEjrN819bZ2uU4zUMgWKt7nKM1HyM367Aqoh5kGNTqkmFHi4GgS52HFs7PGtii9pXhYr9JqfS3Zn615GRqx2E",
  "key18": "1mUUBLDvXtWMgaRcyJtduywyq9Cn7cZxjMLEsRWhgLxvMPiticHikCPkJ118eh4i5zSFQc7jD3vtT7r7ZLv76tP",
  "key19": "3ZTzzGsaDoyd89MYqRNC1KQ9wfsgVdS2nyAv79Eq9zeeCAufnQLsia2SMRrq1VjRMmLYKHHE5pQDVJ8SpbFa6tDk",
  "key20": "67eGgGc8QAA6Cs7NxaLQN34bNLDqUwNTBquz3FG6F97jyyr68zkSJq55wFC89jysYPTXDQGfQZ8sahx5nTgvrZSS",
  "key21": "3tofwJDgtZnWzJgqvz9RmUAdUTXnygPmh2QC8G6AqhHEAFAzj1bmfvqFwZe2kZPDogCGEG6ow1M4dAEHudrJMr8s",
  "key22": "3ebdX3GDBa1vVDdVbzzPiF5uKvbtHbzuhRxRuQFz3TaWykAEipf9LhvC2h8N5U3a6iSKxCtbSMYU73RzAotkxjM3",
  "key23": "7XX77JAgBv89hMBEPtrECs1TAgGpVJFp7N6VYBiDqqLd5vSxRYUHW4X1w9KKikHt4kFvy3dxGQubCrJu2mrV7Vx",
  "key24": "4VQ9oUt9khxDnWH6mU1Dp2PQR48ZLY875kHZJkTf7nvM9axiYGNkDa35JWBNSKcJ8BnoBsTKqUTubFsDR6uzUDfS",
  "key25": "5qExvKsXx1yztFKajDzxZ5739XY3UU757vWZsfQKHcZDdy3fTeUdxrqAwt3CT16jga9W3zSQUqikyzM6xNbSsuaC",
  "key26": "3db5SDELzMeDBXRpBFk9EWgjNbzcDk4oFGvQSmzyLr8soFoq4M5y2jtxAVL4uFTBgcpfYmqoKJYqJeyP198goJzz",
  "key27": "9Ywqg4anyhf2vNXMm3TGCK4FYGSATcVZHCTTMmt4xQhc9KAkxjAyh7JLieHDo2LiS45Ym9MMuPsbYXLcFSLzbUb",
  "key28": "5CBT2nJL3Myd1Kop2kqmrYiFAMuT7AzB5PyCDAJdK7TZrGokan5Eym9zhPGYXQ1KKPx6BGeCvi22GbXW1iW5i7sg",
  "key29": "5ysTzeowbgjxQugp5VLZpoiTEa3FxSadcHqhkgyhDshG2mE2YYwRYT3zFGgeg8UXxg97NJyfSJzypwHdkXpb8as5",
  "key30": "C9r5tgamdor2FxjTwCHgGdUjDxjFnNJvfYAFaqo1oXHg9MAmZ87ifQpse3CR8R7Cvn5Cy1Lubhe2b6bexvXTjNC",
  "key31": "5PTcQffyGD9eGucJaN6dQAbsRBb9QaC4fB7BxSf3YquLF2EQJNS8KC5a8NpwCd78Ca95vTwcCuBqR3wEHu4HcVgA",
  "key32": "2mhk5DEZmJzaPjGxfV9ncnapgEWzeoKKK39qCMM4DVmdE1AZTWuQsDKCY3EKLJirP3D9jLZwm91PQkhyjRcSDTDm",
  "key33": "59nuFopmZjkiB36GBrUGKWF87pznDPrpUQYF4GVM1TAqNvtSnjrQPcjfQ9PQmZp8TM7ACrLeoKHbyT5MBrNwAcBy",
  "key34": "4mz3Z69wXENpATBVuQp5CPxcMWYQf7CjAYU5YMvRaZoydvtkt3Xdh9Rt9mnF7ibCfDxAzDJcMZRQfjfsJ5mtbJ1a",
  "key35": "4kxh1kxxQCsvrjRefYy7WLxUvaBD1t1MfEBKLmZrvHD5tqR6CYfnEHVan8po6JbXW95Ez16tmve6G6R8z8AYaDKP",
  "key36": "3VWzpPNicfoaHiQQSPrggn8FDRrKSXc8MLcYwHCe9r7v1sCAArmkX52ZjWNzgvk2XTwUmt7avZVj5va5t9jtEo9G",
  "key37": "5mgWKbBa2ddFCeLtL3ndpS6hs6eh5MKYvtEmiXUzJbUBQSHzf9xmuFqedSpZeBPo2WnWrMz2DmZmLNcaQ6jX4b94",
  "key38": "4tfvq9bJncWixesYe44NRtdkLjvGuqTiPGH58y2vD9eostqPrr9VsvD9DhpxUNZrGm7F3xmCVJ26pWYenxyrK3fY",
  "key39": "3TQkCjEy8CxCmpVAJYtbqyepZg4MgVWv4MCjW2ggSwjjw81nXaFBXEJdCqVk4JX1UzGc9xqGkMgMbQy4tAGizK5w",
  "key40": "2zKwKYwncTC3RZ7EECxaDh2PtWM8GKriTBoNLxSzjavspTVL7b2ZJvK97SC5Utz3n2sTXCfRqGYEoCMeavrumBRH",
  "key41": "66DZiEgWGyavssPLrQWDvAkeWBafXoF2Kts4ii2SoxHGD7ANKo5TPVL3uwSGFBVKLYPEg95n6MC1mM3u3RyFrgpa",
  "key42": "3g1ZeC56smhNsHc9wk9geW7JzzxdeUM8JxjtjzcoR9SrGDuUTR3oaWTQ3qiV3ttAsx7e67NHFugZpgXWYEAXomSX",
  "key43": "2BMZXDFiuCHvZ77kjPDzjR3siM2kzvYRr2pQNRne6Wb6w6r7eqkj9mxp3gkCUDYGJyVGvewRUzvPHfZMRuz9hagB",
  "key44": "5qgtwQZTKFb2yrBNubXpuQRxJyrh3nczxgomzzjh877prxT9ZD1ieoigqRtDSk1sHrT4AzXLUHxu1gNBVy8EW31m",
  "key45": "4Jqtb5CrciT5Xg6PUUhwg3jsV1bepJ17esdZYHNgKJWKhGhNAQ4MiumZPxGRsmSgK9aSBnCAw5puAXUWh7X2cCp6",
  "key46": "3m6r4vGP5RuByLZnNqhduVsy7im6KgoznSZZnpBYdsT3c2CSopdzQArjyFymhHwPVMJ5DP1xuit2Rp1u2gvrQB4Z",
  "key47": "32zs6yG9Mzr29TXx5yapTY6tARHzFThe91QuK3sC5HZ8CcZ4DQw5BMyw3JMgWdiMQ8VPxUaoJUEGYsgvwHQcexNe",
  "key48": "66oppfaCQ8aymAtr9Kg2sBhcv8uj1QJNSPq3j37sNMfkx5jCUWyDKj1RFCXpkhXwCtsY51EHHUWngQTRcN6ukhU2"
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

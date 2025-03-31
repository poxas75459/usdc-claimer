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
    "2s1XysBY7XRBtbNfLekNRQqk1sVe1DHzRzqcHG59RKdefuA233FBn8Xovsojcugusyt3WX3dN55B8eEvAWeRBAcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3CWxnBxXz64yGXpTkBi5RaZ9exaFk5kyye8wt4fzfmF5bWjyJDbRYXCVmiesXFoVtvXnK3THfg5nfeXLpLxX2n",
  "key1": "5ViSNbJf9ZTNAwvvSLi5sDhGrc1BX7ZaZDKNVcsjPC4W5Nkw36vcYhmKMjb9FUPzDLDoCd7ssm83GTkjou1To2Dv",
  "key2": "3CMtBcnA3QBFKAA51GYuVBu5yG7y49PMmbmntMikNDzyv77g89PFcT1ptDwZxEEs2S7dHLfdhEKDsbSMkTKE3dE4",
  "key3": "4jcXP2QGQgSmL9MTCqarVWfYh1imcDomQTT4Nu4hG2gxid1Y3TW9VBc2qW9aKQqwPjz1eycRhExby4Hs443K4kV2",
  "key4": "4SGR7wF8yvxdSER1if9kcU8ei936ZeHUUEZX8V21uF5tREopEU6GoWaTtx4F94HD7R5paRmzjmER2PumBih4WDZx",
  "key5": "38Sz5xVJnWkSwRTdRbSgngq8hixWBfNGRds5PY5s2JSW5imLV7whx2gcQjaUARc4beuZLuoA7UdpNNStkRXFiH8w",
  "key6": "2Wjq2mGjnSciTLCVvTHBbbpoGvCoqXzZSGnhGV6Rs7DzeKJ4n9Zcnz2pqHWu7UBb7CPckDQ1eEmxejDPTNhhUxGC",
  "key7": "61qGpqgxDqid4rBViM3ajKuro3chLinCvBNDY8EZMTQCX3BMmpsFvidgZT2QihrQHR97u9WWY6A4NGHdcX9WMzeE",
  "key8": "5jGBJi3xiHQCxaU9ZxJ1wqhFXUMeTQRR2ZBK7UihiowWoxPf1RckRAmC5KyUkA8Bb6MXkiUkTBNhRmzaGaMbQkqY",
  "key9": "28Ki9Gsxa4czwvWKjgjzYHMpySPDXVdJhiNE5vQQCVT7GxVNNMavTiFQie3xAxtUndpnZQdnFqr1MYtHVAXYYVsy",
  "key10": "3uuv8bL8PjxApfXMuzrY8pPVkRfAZLhwCqPWzaovqCZbsBAbyzNUyegSGwcqkLz7WoYAoLy1WYeToPJNynLqqDUX",
  "key11": "3tEtfzAcHh3YpyH6cV9xJzb3E2RvsBBioV4Sz2NL7SfKeXHakmJe8ejjwxQF9qBd5ofgt2NqwAT2xdsn2xEJoG5G",
  "key12": "3FYxcvDR52Kp796dYuYYvsuHHHcqqaKc8TCD1DWJq8v35T1Vv3pWkmoPx2roGk3SZSRcZ6KPU5MrnxqWUMq3m6uv",
  "key13": "5k5xwk36ui7krCYRdzAp7t4LZWCJG5awBvVUruf9H4ySLvvC1kuJ4oHkZGsBgVjY3pYxD7WKeGq7TDbNTLhsgWbG",
  "key14": "4ns28AWUoyJYT4JhKWUYmYpeKMFwgP44gX8qoQvpj2yzjMxLBHVwwCj2AWs1yJX6vsTaPG3pweWEeXwFkKkGsGRE",
  "key15": "5yaC7UgGarD4jmm7ENsoyVPyhfZgcGN8nrRM8v2JsXnZSa5KgBLRbiAWfwsdaQUZDfKh98CXPCbzPEDhE2JpQK89",
  "key16": "4pzskQooSrBLs2R75xhqytvvfP5jM2JUNEgBu1kCvY2cnQWY7J41dtH4Qx7an1SLEGzRJWvAyMcmrzV6PcZ7xtL8",
  "key17": "uw7t5pvGi6G6wCV4LiejMiCwhLLbfqixYMN76CjPJaEvuQHLy3JqiHXKkCacFQPxu7wyoyHGMJaGiH22tCvYrQ4",
  "key18": "5odZjPcAsKDdaFawZKpApqK9xc6r2YxDz3jNgSLDY9E4ZghK7c2sUCnW9NujjK3uQ6C4H7u2p1nMFCahRPDt8Gm6",
  "key19": "4L32PShAMM9SRYKfzuJRboQziMYxRawiipiSBTzLXohJrv9mfWFSuxkcc98oRGcV2JqZQUsYHm9jv8ibSLAYa6iF",
  "key20": "2X5r7fManDs9bRM6MJxMvC791T5tG5jU8puqMnbCG7Ev5211SL1rvm73b75aBwnGoGe4L2mRjRLfo723X1GcXnAR",
  "key21": "3P7dSpm2pFZAQnBN3GSsoRGJVhL2Q4MVe44wWRTZXwiPYBBo8fu4qz1aWMdicQC91vXSzETYb5kXHGhSXBtQyNAe",
  "key22": "4n2urxJxtmGnfFZA1ok3mgEvA2m7LMcZ9n5dtcQcJNgR415uzFRSYNqw8QuVoShfjRZHffcasw5h9r5aSJKtUXrL",
  "key23": "bcQBjMbWt4yrd9KAtnhw3d76Q8QSjevLHfD9J9PmhVTMSeGGapXrEwtPMqmde59VSAnUddtZ4LJz4CoFFdKjziF",
  "key24": "5wHWv9XZUCbpv6j4WHnLHAUdZRTFWCVdkfkpmEJZz1GQyV4jSNXooKcazf26TaUvQKnYyFfymQJs3EZSeLBYbpFR",
  "key25": "3YkMSjWJrjgKu1rgPwBa7zH5wxi5JVa8SyqbYgds5pTmE156du2ywiZYpGGEV1KUxsWH8jyhHHGry33m3ucYPQTD",
  "key26": "2cVBe7aCc1Cx52ZYMuzUKGDQYLgdGzEGLA5c8B5UC2csCd9f9znhdrtSJSbZmMAjF2D4N7nZckAHG6bgZPcyfm7i",
  "key27": "5hchkhujSk7zbagHzea4cGxK1FVakDqz6mXNoaPeskkHAnjLnbxSuvEaaSmXDZGJQrUhhw66wsbgvJHKRFKR15tt",
  "key28": "2BberDcju4YM6Dvuh4rHqj9v3YzcJYCZKtZ1MvEEovQSXmVca28jAVur7cempTDuMA15cfMxgQBeFkQW9AQG21oV",
  "key29": "2kKj8vnJhPGxPahaLKYDuNZGtbAGn3X5aDCiR9bRPA4G1xGcjTsH46znNP3Hcpxi2zgNPn3N2g9Gv4s9VwVmEtJf",
  "key30": "3sXf53E2CJm2P4qjT3yxzXNpUxQXZRS4UyryFNstNV3ze5aCnKoiFsUELCuqMUJCCjMtxWWR99ovFkL2z9D7F67n",
  "key31": "2e8D56Fi3DXwWoYkcesFJzehkgRj31J9eyrzTMpk7oxgDoeT7DhpdPmxuEy7VNAmeQdfmqTQiVVKyV6uHD6uFDVy",
  "key32": "53VpMsYhmKV2i37fYRQLiTpZpyQzKz7smeoxYNgiEVALuKHU6zVVipLciLjTRzyqY7jBjtX9Rs8wC6CZTbh5rWTR",
  "key33": "2k1cockPVK8JKZnbGksygE6QR2s73WJ7yWEVyK4RnZvFBGQz7pYfDrTrSRdJBBj17GTPiAWjj7xDzpzHTpSrzJEF",
  "key34": "45GzUEwzW6jrFi1GDiDpV9vi8Cia6N4zaWYHicsUYfJzZgDchDPhmxZrtbSMj6otjaF5wh8VfSyCgSeGdEbbhtkW",
  "key35": "iGm4pUq3HJ6dW328tVZhYKNQFpQhcmUjDKCEXWC4TRmb7fGP3i71Jv5PfcghEr3NHdoXQAxnCcZBpAdRkr5JWXd",
  "key36": "261P4zAARLngphHkoYdhyo2yqrb58eECM7gGReEHFXqRTM4h32KaWq2DPUfGGbU8LyYrdqTWC2CY2C8c2SS287GS",
  "key37": "JSgniPyVx1tZ7LE1UvBXaS1m75EwpXEFQBRaBGAh1TBT2TmGrnGUUW4fUfZF647xAaatHsPGPZ4JrMhSXeZ3TgV",
  "key38": "1itEfzVhvjS99JfV68q19Hs6AB1quXhtSEdDw9W8oxpjZ5TShnvKbL7DEDNFkNCUvmaRhTdAjWpsjsr8EEtsCDA",
  "key39": "22EmGzdN3jRPENRYQCKv6ZkQgHifvMG8ZcaXSft6i2m6bZMn3zkAk3JtkQDAM4zRe1mdib1rx1EgR1Bg6Sg4fye7",
  "key40": "5G8cJmLFZYpGfyKaF7PqhB7qYvmtX6BGGSaQuxsVUbMc97sjG8Z9JHBmi1wGVYKQkrRCaadWefND92bAsxYqzBCA",
  "key41": "5jeAWXEiKsT65VPuoZJAmb4gStEqu22iKrMVDzULKPMD2JDUgGoZe1h4dhJh9kDUfwYKrcGWWQNHzY4JEKQJMtNz",
  "key42": "4Q54Xk6zgSiS9oPiivHj2p3rVLqTJeRayh9kadNmJmfkwo23h5k4g3bvRpamHdfySu5nPcqevm1tG9pwBvSjuA6a",
  "key43": "3311w19WvT4bBuU2Y8hojFtbSmGRNyNnsrXxHAQX1Fivru3fvGpEgiHSF1i21LxNboveyDss9dnsHuazk9ULKwUs",
  "key44": "5RLzAFNzH4NJp66uwTCoz2LeLBniTBVy3hTXJZ3zB4JFbLwHsfLiNrXL1VUNtAs4KWrtHTCpSQN9Cw8zVApfGhHR",
  "key45": "86PaSU4a5i4S2Pmg8v5hgYq22vGCAgEWLLJkykYwqXR8LTTVCXroUfVarLg341WrVRQLC52GgyyGiLSUY5AVFRF",
  "key46": "5evomrGSurn82qjw5MwiAHKPamkGLLdYodzY2HW2wiobm5qNtgz3noLaTCcd9Lf7KB8UAWa8B2ZcTr8js4r8e6tb",
  "key47": "33Z8zgrurUQbmnqmJAqgAjBGpLFRMvxbuqCKdF8T45V25Zo4sjJeY3LVw2wYkwV9rA1bGz7eyi2J8wrrippwn3Qu"
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

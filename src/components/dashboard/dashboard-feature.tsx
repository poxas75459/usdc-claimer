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
    "rZydyPsR7iBsLap2jePhHEcT1PH4eREbLqKNr5MX483i3xbC5DfqAkiMsS6GzXmCKaXb2uzyEYbyZQutAFMWfTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwBZtrfu7LpFhPWHX4H3RJbAVfjNNr9DJxqoQKcYHgpcWCASSeSbKT1EGtZTvXnHgcSxdCV94a8UKX86XVW2UCY",
  "key1": "bRtR8juWUm8uheyDWG2ZiisQPiQgNTgYRQaFA2KB9b4uE1xXKg6kjHhTFhPDSJf61Uom9j4ZzPQ1ZCMgnW3nvYw",
  "key2": "25A6kN6yCs86Jf8XHdpLvUZ6q5x6w75zK74oMNHmFL4Saat64vBt9pLtrqpTKy7os7esobuPWxnFJ9GU6KCmpxXg",
  "key3": "3DkLXKtxncE7wEVU9jLuS6nyVvnuVVFh7J4H23cbuQsiE27HEsEPBZbSXRE7g2fPWgkQMGm48SKwZb3rxNQGtHnQ",
  "key4": "2FSExYsqDrsK4M3MW2dxfjWfxMpve4g63FxvU7fjTrZqV1yLafMLTtsWzcdLQCPnU1AnNqztDAwA7YEgLFQRe7MR",
  "key5": "4Fc3qazEkqfDeeSRpMTrGWD33Uu9cM5LzwHrevyikwkjFfmTGH6EGSp8PjNGV3SCE6DFYeP1YSoSLxrj1ekv5h6v",
  "key6": "5U4kQkHFBFuCUY76SrqWKHPwLzJLoWkqvLaJbVpxyEdLDbW9D35vvMiXkHp7hMjCYmvVtbbsg7jKHjpkETWkXDbZ",
  "key7": "47P3XkE4bURZCLohSZ7GCQ7Bzo28GYyA1TVrsgxbY5nkvFv4rbrq9dbvsDZpuP1RKddVK8sEqX8P6kDTgxp3nTKS",
  "key8": "Dbp2dfu6LrSzZijj4yJZ1CDLCVnJ577NhgCdQGP42VdxmqbDK35C7q92EzyN2LLPwA46jgSGj4STCqRvJiSypKG",
  "key9": "5yXx6WcPxG2Vjuv4vKacCJzbRtDsK7cS8ST37k3TkwHDyUjoREakowbMnYzR8vYCJofuZBcZfwPtMvXsgNgH5nUh",
  "key10": "335Y4Sk1nWrzf3VN3HMC2m5HoyGCqCED3zFLD4SyCaYNYD4f2kotcMuNtTUsDQiRnfbGS1cKnK9NT2UFKG71X72",
  "key11": "57gz9NLz3R8pNCcGdNANR5QSavbVDgBQC5zPiftMCEH5v8j7Mah1gMAaciAEyef1Fi7qEP73zz58fXhVmu74CKVy",
  "key12": "4Ui1YKeaJACYPt9GTuUZZNbv5y2oXcFVzcbZvKoTyu7CTnBojLyWnzhQyTWyW7AwSX1Hh5Ga9pRyzVCwmZu1YhJ7",
  "key13": "3jvp3eGAZrTpkk3cEUMUGG46GCskDHE3aYAiB91dCqYW9g3SjPc9n14wGnCmkNivVsEkaHYF9XaiWEe8hF3L4LPX",
  "key14": "2THNo7S8LmYM5D9vHdAKwPgNg7B28YGiFDS6PBVzmzyvzX3dPy6kYvDW6xV8xgbo7QmxMX5zxpAgwzzuJbs4KsY4",
  "key15": "2FgAroVzZUj5gW6pdoSrQ2qoBeEEmjv9ZZ7GdfEUj8aTSM7pD3wcMkCXj7PRbsfJpSMwBtTXrLaYEvGPjvLAorZs",
  "key16": "5aVh4KA3KEpjt28duqdJQo571zREiSiNB37ExPpQi1TLgK4f25VdHN2ToW1y8xmAhaJ1grKeWkh4AgHET1mvaiKC",
  "key17": "4QVi64V8MspMcpWAn7fPHDDjAcBngkntLDYMcD4kvimJ61wh9ve5MVbb7goa2CwbKv2FQtAb4hXwjSJmL3R1REUa",
  "key18": "3qQDPKQtdDiUogSQE9eqtjXkDj55h4mbnWSpWHsvzVFJPYcwvfcc3zGmjgwJH8L2GDN1um4toBpc2snZkZW4kxA4",
  "key19": "2CbCJBu46dyGWLdhAYuvN5yfMeCa47pGqMrL8WJzvHtuSbZxdF24DTp6ZkHg1axJV4EsVydxprWdLa8K6oa3Ms8y",
  "key20": "pZ83vCxF4cQkojFPjWhbGMSXAs7UUweZ4wM535qGhGVXX5fxtMDtZc96LmX5Pd5mxtRu4KBxR8a6P763KrTfh4j",
  "key21": "3YMcnkP2HLVx5mHt7HsTZxEHFeANyqnbRa8foQNn39QDY8wk4ucahzMp7SA18nq3GuJTEmGY6rrXYTLezJ6dtonx",
  "key22": "AcXP73jpa3q8go8AeySDvaTX9SybT9oVnW28MiEaezyKzGAYS6tkiefZNbdR3eD4unoaxQZBdA77JZZJ5bQ55vi",
  "key23": "siNjAFFfKcHP5k9jFrZAHM8d8YDS1piwNVXmFuCwZxDCy9oc6WjUpX5YWNauqTYnVSDVzHSJcXApa31eWFrRSpq",
  "key24": "31hceXdsmC3kdGNnyTTgQQG2AUAq6VsdA1exWGXJ1KtnTBCXWNXiL8VA4DYt3ZM5JXKtZ1QVLRRxXNZMXt5BSVsu",
  "key25": "5CWWCZVQ4xSV7mzaXHVoEkP4WwKxdjRF6YpmEaEPvXicVHtVxtnPxSQ67c3PjwEj6dUJ2PBeY1tLf2dFpEiNhSwm",
  "key26": "3pQeFGMjiVZYNkoeM9g1pstRUzt81zKQfnZghJfZ5XGtYjHhAZ3hk2ZEk74cHvjG1hsCUKbAHUeHkVBFRWgfPk9a",
  "key27": "jkFfhqELhMSXXcx99Fdvb8SUHq2Ss5UYBL21Ba8iUPBthsYVxAvum7MHaJ2Psip4EzWXiHAiKXmQNS7wiQvumYG",
  "key28": "46hdHuqGXvh6EDguqFUZBki25m5qNMoAFGq4iDp1bE23XKCgiURK4ad9hmXADutfLDguzjyUkxVN7hM3nSYPLm5x",
  "key29": "2J6KL2j8aYxpr8J8vJBmtnD3sZfWebieWozkU9ENEifjK1cCsJ2jJXDBKYVUyZTayu3pgQ98qP7hudz5uu5ahPjf",
  "key30": "2hxTUFZoQgnzpPTuZtdc7XXerBsNaBBsGsBDXGEgn3buic3gR4fEGN5AVkAVwGF88hkruyr4z3AB8oe5vKYmV1sS",
  "key31": "2W2aWNqEUjuMZ9zUzQ2f2T4Sh4DBVQjjC768cCkcBtuSd3Ux9areQUTGHpQM3FDkAXQGB5snu6bDsh3SLAaGZZDW",
  "key32": "5we2r3fT1h7Hw5zEX5E6FhZajP9fv8K1X6qecsw45zhg1vmTesrKmC67nFDx9DPYLfDCmWJbP7pcxKHSGsFXZy9g",
  "key33": "2qpWCVbcjxZA6f95xPfamsTWdPF3t7Hcn5dDHf81bBQRxoGJaYGrPmZ8Eo2k5dBxshQnKGuBDqfEzzdXyNPfptrw",
  "key34": "5BM7Vq5vDPGALH1yzh3ZZKhFE8UWqiyEMp8mbRLLt7nhBYEVND9WP5TgkPXHGBFgXbpgNjXZH2f1V7hLDWMjAD8a",
  "key35": "1msX58MN62E2jtYTXcRHLQ4XWjYDWUFLfVPRpdT6whwRWe6wrGauofhifAYjSC5FWmSMUJXKoh1Uo7pLJSxCigJ",
  "key36": "2XiXQV1T4dEbC8QEpb7TKRS9EzHqUVi75YoS2h5pU1AgVfh5StntMbxV79GM68GJDnDHzQCiTw1XcHWBLvdk9RBX",
  "key37": "5zvYACaPzTVX4A1r5L1AprpNTm1Qu2nxqMFSrUjjP9t3wdGLoP3nyp6fFDmDmCg9Fb61zzS6Mhgvs7CG6oqxaZrd",
  "key38": "4LyBswEyarLNfUHZZhv9fDbJXzk65ZWvKsC28ZwJ4HrpaGRdnqee5FQYwdbq2LHSmQS5gGbE1vy7qdgP2ZRKbNLQ",
  "key39": "5YyjtKCgfLwgV8iH1NKYF2mwmVcTZnVZ7FSTPj14mjCpVYMouq6uQnv56yqf5J6JreWqyigN7nCcy2XQSRYdzJfe"
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

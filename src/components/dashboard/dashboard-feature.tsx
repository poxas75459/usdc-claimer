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
    "4B5JoMn6gikUdMUNkcYHDyNMyossSubhoPXSJvgvLyVxz9W7CnaPHo8gKmrc8E6nYf3K8xMykMxwNpfHjvNbQz3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCvvsecdVNtGcVHW95xn7eABsMQvCeyNaGYaNX8BkZpvmWT67v1NPKZ7fiPCnQUL8nEMC6qR4UGs4CvEM3UM5Xt",
  "key1": "4CPrTPth9ffFACsvmbCMEFwcNsJvHgXrF1N1HjbwSteKTQMpeNpwUr61zMk6vCBJJsacz1eMCoEWMRohWitJEWk9",
  "key2": "3hqni5hVAqmEs5vH4Ew12GafnaBFEMeQh4qcsGMziX6rbXCTuxLmy2d2mDd7x8ZWCHVWxsYv877aXN7n2n8AGEuj",
  "key3": "4YFfdTkC8cWCh7R1iaywRZsEwhTDtZ2sUoud7WV1nwMugAk5KncnKM5HCTbQurcYQ81QeXnKEWLcJLZMB75Qbuj8",
  "key4": "utq4JoWZu5AG6uPHFheLt2xmtQ26Nhs5SsejM6u9TK9mzHEQcn8eDKgqXGJeG7t4gGyE5ntxhSsCoz3Z57WxMpk",
  "key5": "jzmYph47NN1GKHuxYvEXTSkHNQiFmbAmBAzwYBHc2htXNvmmuHQza2943466z6VuEH2PgCw2WiNdfWJuGux7LGa",
  "key6": "4qMKYnSBwKJoP2bkcehqGorWRAeWxq664L8QtWAtXj2LVHu2ZCWShG1ruxXwggriGgAeY8v8AheKxDUoabwwrGiB",
  "key7": "34UD1DkrfauNY4YLz8LH5ibKnTQHPqbzKVscA9juNRMPcADf7BNiTHFLKXiazW5LZk8vcqNb344tuzwKcutdv3tS",
  "key8": "3x2ugeeB7TqnWqGQKBub76UHbb4DEPXK25GJ3Z1tdNNjsirGLxb8Y6rJHHNJxq32e5JDgbSpPKkoW6iv5WRJSMyW",
  "key9": "5M8mQ4ARiv4S7TGfcfXMLzeLqTLDkpthXSU5zjbMSknWWPp43ZpXpumQkg9zkbPWnQ2fhH1BeyXD8feAtzwZzLKi",
  "key10": "5PmqudHSykjpPmCmK5vVFrhbsPiwC3LYbGfoUVSQ27qmsvkRXE6ULqZsApjvvQVTnWVzSAd9cKYUhKDWTJYEEHzq",
  "key11": "2upWvxhHUhAuky1QU6LrY5yrjWaTZJ31NY4f3XyD2YiKEAu3Mfbq3J3t49HYH4zgEgQyvdoKcJy7qmZrzAauF7xg",
  "key12": "2vYSxN8DLCyusKUaAAkecFwe7VzMH8Lpkko5Pdtq5CHbJbF557XcRokN6HVrLY6i4rpMKyW89dv178T5z45iaBDX",
  "key13": "3UFpk71XYhTMZbxZSkjn3pTBw1PZ8nVxsf26zUQbKNsAVNBMwJznvNUZcfoNhcNVdyyuR1nsxJmSTt8PRL9Xnpcq",
  "key14": "4baXavuPEBJ8rBA3TrtXrmAuaJbBC2BqQKy4k8up3CZBwhVFHHYo3FP9iTQnLQYuE8meC231ofcLETczFNT36BhB",
  "key15": "3VneM9mJsffR1UZ5q2pDYCqa1cxgj35g3y9AfwJ2zoj5kRdvjFKZNmkmbjQTyZo5UZrSBpn3NKrbmimym9qibasY",
  "key16": "Vad3daNp8e9tS5mYBsuoys9koaW5c4npGEvkhXj9ruX2TErNAsmecKBYvgXLGbVheeyQRUcJ78aoiz3X8koK79o",
  "key17": "5YrNKj4wt55yYW8t85YD5bjQ67Z2Y8NoffCEg31gTFaBN6WXrv8wHkRdAJrfBkUNAgnDbyN9kZ3hHFrA2i2MJn6m",
  "key18": "YGMPmoVzBpzL2ZCg7YUix7CYBVHjKs8rohMsdM8MFfkknZ6jQaL1ymYyvv2YhQtMBEUyQTfF3u4vdRKoXRxNLeL",
  "key19": "27H7vMSGjkfUkARbktPR2dxhH9KjwP9evtTLfrQU4C7sK9GswiSieYZcxmWPiXEfeWg4ijQ4vDdMq4toCc9fLoJ8",
  "key20": "9FK1NSbBgtMmQ2c5ZV1qCW2stBNkPnqoeArMhnEcchXsyy9h2iigVt6rE8pnJ21tAHUYNRUCsSNsjMs91MdmGfy",
  "key21": "4xzLGsiCj532HP9FK4EcWXb9g9hTtDzkm7w7ZU587uUJWoeoyABeZ5hYk1uEB8S9r3f8z6W5kLZSPMTFXQAazrdS",
  "key22": "3NExBRTdu73UbKAcXF2UouANaAWMn9Lj46ajxE8X5h7PruYJRn5Nq8EL2VRcZih2nqMRPv23NmjxZC854EWKFtMQ",
  "key23": "3NacFdyLPEaUyqWwqJC7hpZx2cwgcE5TBjNBvcUPL4zUwjkc1hwgYN8QnxTRczWGrRRtyXTbgxESfSAUhK4ZbuvS",
  "key24": "4cLNxbmt482WMEa1jTzuD3TJjmnAk2DGro7HmPBhiKqrXupbQ6mcLwUZ1iSLGihcs9Bz7GwraCjSGHJ4eXVpgMUB",
  "key25": "3LNZk6TVL7FCAgCPDCR9JbZoz7DCEszMRHv9mKzE4u1eBRD7ELBBbTSMQ4eDLu61M4JaimYhpgHJwcoQERJSZub5",
  "key26": "2D7tXu88Rr9LrusmNE8pLfeh18fQLAYBoPQHtySrbgZyEJYDrMY8WbLtYyrV2FHoopzMnDFu8MFwaFxrYLCFcz4K",
  "key27": "3PkigYiS4h8AVR4vK7hemDfwhwNVYJcybLRGmsEsEJeQ35Q66ZM54di8CZ3hiDWNYAREP77vfbvmruSNjpNx6tXV",
  "key28": "DgHQuTiSjCvA2JJLr3KfiJ5BGe9q3VxsoyKUC2A7v3u7ihwYWwv2wSN7jFhCDZLHpNihjYdnsvJ7wEcci2ssFS3",
  "key29": "2gZnMXizSPSHfSPiH6pDy9LxDYdReH3NqxebFMtHriH57sxw39CGwrSpJrW3REFyfBtawxTKnTjeRvFZGZdPxS6p",
  "key30": "2DyomiMSN9mcjb7zcHkkkm9R6wkt8xTxHQr7p4mYjvTEJgWD1sEptRwCRbVVAbuCpQBseQWDJ5u6RXRBAYgE3tBw",
  "key31": "2tY6w43qZRxYyny2ESKcwdJr2TGfZgnBHnGm72LwXbtsuMKqsCx5u2xikcLxt9gvW3DJpaJNw8Z1ZkVUeBrZooUB",
  "key32": "5vew8ytHUzLoNwM5zTEkBHKJqr47A4duWcNMAQYpdpdwQYpsDbzPdYcMYNvRjLmyYBr5XtSpeidouwA6RuffsMQX",
  "key33": "323gM7sWXF1W4fxE1kYtrfP3zEL8XWrn45dKU4witSFCt6zUhZ3C6M665wgr8hjT3KuNnnRNkMj2yNTyPvpyGM29",
  "key34": "5MUuA6GEcAHjfhQPTd9MVmNm3eQ2CpJVgZWX1Dw8emYU8apUChBnP36JWXZYP7u8CbknUBWuKhsx6Zdui9Wf1u6f",
  "key35": "2CSD6eqKz6omp7LMGNMRJ3AVAwF8hCvJvQ1mFabkx3ByW5SBw8NwkART1t6zhTu3i8FhajAMKsQp1nBGgkpNjgpd",
  "key36": "56c2N7pgvY7ZCtJ8fk4T5cUEEiE3CjJoAVY2bVFjX4ZRBF3EHYgBrBTEFqhgw1fP6eX8q2J4zjsPzVC457TjDk8V",
  "key37": "4Q96uixQ5F5FEfGqCkZVgtiWSRxdBJW4T66UdcTF8fSKviCJwAvU3Qn8uK8jNmhrrEQbDBdTWFfwe55ATz4NhVJf",
  "key38": "1LSgWyp8pR73jmvGKp7a5vaYzgMtmmmsr113C2aFdkR6hcTECaxmQ6Du7UVkRmYkDx9nczNYtbfWaG1oXRHp6HZ",
  "key39": "5vhubNd3aCHL199kcxrgkk72WmDBYiCrauBcwSHP2K6WrUVyxvhR7WPnsp9EboWNET86hpNj6fJDmiXvvxbGnRrW",
  "key40": "66jn1tJC3EQjb7Ghese2pUbFrCQ9JZRnaQBt7VqytgRKGrbfgG6jN5TnHh8fSHRPDQ1dD8wk2vWguEqKfh7CbERw",
  "key41": "JZ8Ch4JNGWVJPKNnCipW7eG8Wki59p7k1mteExoMTJwryw1por5BexYLWcVA2p9VBDuhiMyfJbhYTV9VdP3pvpt",
  "key42": "3v7voNc6kWs1P23jy7YPa12ELSiRZEa6cdvma6HsC8LNmJmsHmLQdC8VBs4uUE41Pqx4VyxYsQsUAzwUnXeGjfgt",
  "key43": "3tMD35XqV8kgpa76dEEyfCSSopUhWHn494TSJmBsCsXbiVoNPNdxEyCUwU9B4Cm87drpKw6iHDNCqXNr94AqusaS",
  "key44": "A6ceXctXnf1JqAGPWNm8CHbTgQ7UkYRV35YSQ6iPA7kqWM9tAK4C6jJevAzT8NyRfciGasi8pd4Yd3dUfLbwDuN",
  "key45": "46GruM2rkvx6WgAHhUaqrQDZ5pK5W1Adr8aZ5KW96aeLqv12yMQj7C1KrpUA7qC4UcdqSrdXiE2sCmdGLGmTXMro"
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

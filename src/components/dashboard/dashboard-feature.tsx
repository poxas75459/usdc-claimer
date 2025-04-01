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
    "3PeHekSG38FuuXECBLYZ3MRtHbxWZpj8LCH1RCwiPaRUTrF8AcLjbVpGYcdhEQMQ7HpfjPmJG8a4rFBp7hZDB8ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uhq8L3fD8Pby5Ji9DvVcqffKAHajzV9FXAWey8SnvUHSByfHDvpzmZJaC4o7gawCQB3NseywkhocBWHFkjHe5Z",
  "key1": "2ePUeY4sqkHaDKnkQvju5CcYDgWZ3TrGJkZbMjLZEDXc9aNHtMan94wDdkDxuBhRj77XDLT6SDERHVpSi38uXq9b",
  "key2": "5o77qJhVdzz3xgrRnrM3Ys5XfX9Sv4NhpJUoRisWchD8SZ6xWUqNKi6Mq5vTZzbwrU2FdctuaxN6WGdnp7xrGsZH",
  "key3": "hEPj1VRkccWW7GDyUHViaMb36gdKVYjzcQnPrf1NxAY6dieRXL1ttwKHcJVkEEfPwBBFJW9D4ifLshCZ6T4GC1W",
  "key4": "2TNF9X6gvM1ugJphj2Y6t7qm9qHayXats5RYwB9cPjZ8Cgm7EBosxRprSq7BMErPmH9xkQXdC8bHTjCWDrgFXKhK",
  "key5": "3AAV7gRXmCBn5qtKhp4sSmjNC6tktoccU6GdQ9kS1pY34VaBv1FPtpCV2gcxAmjk39xGUUFMRaEiKCevm6Avegan",
  "key6": "JPTk3CnhXCSSjMuYjcks13tu6b9MVmPw34mJaNaY1ajo2Jk6gxnXMD4yArS5NEgfpCnPbQznc2EJAQaexmt5Bwx",
  "key7": "3s2drFL8XnWGfbdsYrMwtVFwnjTtD1EPMMzifa9wjdDUkamAJmw8TnBzxnW8Udd6EQXq6oPrxv4xfWKzvKsJHapw",
  "key8": "3y1Ay2MwxokzwCWQecsuNPWhrHocLnTZqzTwxLZrskpEeJ5iNaxfsyoqyn9mTPAx648LFCnTpkdUqqnnwUKWQHps",
  "key9": "5zaYPaP8yiV3LjMheLJ4YuYW3uSFJBKspot7UDFGZnBFQ86XaKyVp2a8UXHCPGimEz8fXspzviGutmiTNuRwzTzm",
  "key10": "3k7gvzK2VsE6BngpRBKq4c1hN54tLoQv5VmpQq6xtw482JzW4kQDLosPKTr2oiiF8Ehk4RTFoQGFMimUcj8fHCrY",
  "key11": "61JnQZ2sgfpWiFRdb86LEg9TQGAeP2YjaoWJndCa5i9RYwhm5TpFe1T1jaQU2aQjhxoqvrEFKzvRqECrVNKHJrfq",
  "key12": "EaRquTNpoUX1gHaE56mBZcu2HmP71nhUy4e3cWu4WsVjzM1jxuMXrQPe8Wgva1DaJAvCtajAUtsR1nZJcad37md",
  "key13": "QmmXsX57yEF7z6MS1Aj8vzLXpitWKqxWcuTU3kzjTqFH72dsTtjDU1ErmNY7Z7w2VGFXnPntrC4dYd6n663KE2D",
  "key14": "5FZJ7TZ11iN9mayCFiJxVJX78KyFN3Feo3BwCh3DR454MdTowrSXMHxw3QsdREktXoK8EKLFnuN4MU6DF5mnbehs",
  "key15": "35ioPaBGg5CKrBT2q41MBKMbPP6DCbyaxU4WmCPSJkxk6v53UgSixovMaKe785tq3VgqKAsxqd1w6KeDA6yZJyMQ",
  "key16": "4t8xsgXobJzneEoPBterT9pb9TqP54NWPMo3wTU5L6y9c17b9ng1xLmfGgdNwsTD8XMXf5vfnxXppK4DYob7q3Ce",
  "key17": "4i2s8eU2hAXKo7WFN7k1krhhE4dGBnnYV32kgwuLiGbCPnkr6nNBoGSKeLQC4M993Kuar5puTZR4dBQAdRqxtf7d",
  "key18": "cYZYprHyB2MofywNotsELi8aXwwdxHAsYFxHwWdseGaJKL2YMdcirUAUT3h8hFGa8iqV9CNLa7PpQ1VZystKmfy",
  "key19": "4XZjY4zbPRxsYqaBncfcv9zPennwoEHvdLewqFYscRxqaBBEGgi8gu5c15H7J2NUjw9F9X1SnNHvkyyPH1CQhPYB",
  "key20": "3GcieNagJJvCJ7jWgbg8okDxCCC86THa9SQknqHANysd2mnyoPomvgXrVjqPLJERAuUJsvQd9vb92bXK3CUyAtKi",
  "key21": "HsmniqpeDRPhq2xa4gRYisV9CYutaCUgxCfTrEMFQoyTrrz9F3ijAf9C74UY5UNvbSc7tvaF9rFc531t36P59Fp",
  "key22": "4pBJMC3gz5TNvgHW9bcqHzgG3bY4AVYm5hta9qYsrP9799gSgQGGUH5N5d8V2Ye1NbDqDLCq6DjJ481mtdpEQvGW",
  "key23": "3ZRSVYq7fcK7som5U4MAS3HjAPB6nQYAxTUnPu86t6jBSk5E9PZri2yNQJrFWAjRRyznGwytoMy6MdzsyQ1X7Xkc",
  "key24": "5tFiV1beDNG5Uo2eFR7W7uN4t9C69WckVYta3zX2uqQAmoLFhL2KyLvbS3PcWYNAZZWx5T5aSoiKQZb1XN3PSgtf",
  "key25": "63RvH3vEWxzVZcTkMDWpmSCE2QATQpRGpuY2HeMTBEDVGMQPZnG9ikTMP8MVCnMqT7hgriMJjPsPoqh7srmLtSpX",
  "key26": "27V9uwJb5NSci7aYT82KtALPQYT8Br3UJWL6edCC5byqtG7BX1V9Xi98X7aToGWjdSwDzKKSZTSiUMwf1sRcouuW",
  "key27": "2SDXqJRzCS3i7ugv2ybvkDANSGyTUngXJVrhoq6rfHn9wgsax1Bk1vDAaTBFWqtX3rAr5cy6vNn9cye7acB9n8aM",
  "key28": "5za7XAP5mk2MKYcJpfD1XJoUznQDCK9DiJQLbiqjQGbympSXwPHo2YsP9GJwZrYvEGvjp9QdsxxE1Rg16N94jSx5",
  "key29": "4H3mmNf1PvX1fDSstYqNCgfxyJjhwFhhybySr2xWoaSeTYBErtS3bGG8JmE7LySK5pmr77WdweoFddFXXT1fqr4y",
  "key30": "2p7TDrqc2bqoRkktxWEi73tWKFR4Cb49DjWnzW6CtrsPgJCGMwHXmtHuCGeycNMdQ3EZvVGy1hH8YteesvBojto5",
  "key31": "38hPaHc3iX6hCs2LCRNiJmAXjKxDkRRBzEdWB7iFj8ziWJTVvkx2FJJSJ7jrt7ej7xMhfjDGYBxiCPPN2t3cNaRA",
  "key32": "V9869p8ma7H4EG7LCVZoprgSLpk77RfVefd8YCT8Dt6Sd8B63XtNy78AC4EHZhcGenQHKDBTHVbZq2Qa6idstum",
  "key33": "5Z6Ki8K8qFZKdEySKNxXgd4VhNGWh2cb7Nc1v3adYKugqiEXGVPnGd6t4W6mASL682RRKL3SNySGTVvmYDFw89N1",
  "key34": "8Rh9yhth7sthkY2Jr5yrtrLZfEAhEvuPSHvS178gGujz3587sk1CTtRNvgWZCcmnRf7vMYDVaKYtY7JErWCM3RQ"
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

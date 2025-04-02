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
    "5qvS1SQpYJxrei3z4biibpMa4PeV9jyNiQexiskzk7KeGts8T5nEf8oqnB5kRrcsXDxcXhCBtzXGAGQaWZxSR4wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbajq6PFbzUFvGc2obfBTDpoJorURReBUinSs6s2gq4UhrghZNLHJ8iQPtbEjwTXzjxWPW48ywnZs3A1YHmU8JZ",
  "key1": "2kPizNVFgXrv2CNowJQKA5dGUnsQ8h8mXcAQMiWzGmBvPcEHPXUNm399U3uYmY8daCdWpiLETXKXQVDsppxCqUK9",
  "key2": "5bUEnwiFdCWhpofpeU2S8PPvn2Wm5mQo2ELFzELkGXQ4P3YnxCTWafkasvZPM3s1DZvVzooe9cgs6yND1dJqgyME",
  "key3": "5tHnRcc1therLgBMU7gHRrZ1gpp5fFSmN4HbwMYNfXMQFcrFJdBaYVuDhGFRPavLL2AVvFUMAieZxwyo4GCQqRUg",
  "key4": "4PUhAmHLAZ4E4DkH1V7qXMbGApHBYSE9JdaP184dSw5K5RoW1LfQ3772FPiCnWZwxqst9zFTFzFN6Z8XjEZTwYJe",
  "key5": "5kuuvuQj6yEJQcj7odWAYBCgd5MwE9dzx8PqBwAvFyQzsnKEdcGSHUnkYaxW6McWYhr8Z8Kqz54ndQvptstwX7yM",
  "key6": "FBVKpDwMhUhKpp3Z6KmvdRoAb18UmZJrjj28VPWEtAmRHqpL2FptoqvbuJjN6usaqpLSQLqUvWfKfdDXDLhTUTN",
  "key7": "5Az3Qz1idpDgWRRVnfGff6mSN2J5NkisgVgZwaoAPYnpoQmEM1MEoKNVNoNtdDav5P9ZZJbka6njN9MAcQu7LQGo",
  "key8": "5ht9mxbSzp4neHAHxdHPNKPypxKDrzXEMEt4z7V3TszQyTdqNGLaeWM4KsLqFqQJhVchc5dNYnPTZFdqfhfTrL3Z",
  "key9": "41BXcmULpcU6hiMJdPRKAjLA2WgpyfgabjxZ16x6PbNDwRL5tLSefKDJFg1kVFrzc9F1yZTCV12tykHMYJeQJjU1",
  "key10": "5sKyh4mEWhPhycxqpG8eyNKwieJiajZoCzrhmtiwDpCKNNVbShhDXNmRzGrHyL4dML8N4C5vFVdpxqEFjx51BEeN",
  "key11": "QuTAgqgpMD3GTLU3ZZYoULwbKGrpzCRzWQgjcC28RZqsSDdFF49XLVKEEe4xiaN3H44uk9Mofk9U2axaBp34u1n",
  "key12": "2zAAnXV8Q9ecbAesEdQf1JChGgJTiTSPyxBoE7aGUcp19Cf1tXRQaTmRRp2UZhumWNuYC5DZ3d2Cy4CCVNCdXsUW",
  "key13": "2dCzbcdmoNToKqiTEAqAD4L1eaWKrjYm5snF6X2TAddaRSenDi3ySEpEjj2eUWJTjQ8oRx1ruutMeQ8AVY31JC2x",
  "key14": "5B5NozqjZwq5ANaM9XHM3FEBwYs2eUCxmNHdEKuocmh7UFQ4fxuJKePs6NiHdnZPCLc531K5M5g4rqVDMoyhEx9Y",
  "key15": "Qbe3UkTnxjXLqox1wNoCcBbrthsaiTiDtvNDrpdLx1b9TSGsgz6782kt546JL6AiukhgcXthCKrorm9dweKYyPQ",
  "key16": "5a9SibN5KYr4RYgQLZk9dPjrndyiXwa2sBumanY6VJGDPozAyxUHgXpaZuEiYSiDKuXuoHGA3gVmKvqBEWgrogEu",
  "key17": "2JAbvHQhX7m8dG7FAts25xoresy3E6ejk6NrLvNcAQmHXqBtwd6dy4y2KgngZaZdF22e6XgzEGnvHTYxKd9WK7Q8",
  "key18": "3PNn7rjrBAky1CY1GxzwY8oqyYwqkL2F1hvb6u8bc7P6HXjvk8YTRbCpATFxaiQCrBHejyPgUSafrMhEENtifgrz",
  "key19": "5oFD2TMX2wK2WfgutYkwisrN75eee8rXT8uy79D2UwwEJoxST3JjMK1QQzkMvhzKHZwCZLuaDzwLgfmZ7afGQJRu",
  "key20": "5eKfjoczjfwJutB2MN3u7wGERLo1FpgWaCTRLwZBA675o8L2doLFPiLgcRNzgGQthJng3Gi1n1GfVWeayDdzA6Eg",
  "key21": "2hjv4DnLSXxpWv4K1wCnwmgYa85NAaauhxRmAXt5GFMr3PVwJy9fLJVWteRtwjhS5GBJMqsj2YGTuYPERPvxejNF",
  "key22": "57zKGgRrZH2gvz3yb5PPJESoDvE7wiJp8apWt1VYJdPQf3xprQ1vpsQBiBC5uhJePg7mm3zgzHGK23vm5Zu45kP4",
  "key23": "5nirUWUcoqLFpPyarga7AWt9AFGpop867HBt1kW7nAbwFVbHKgKAkkqpyqssxfU8WaBzW3athVzoRMQ6eQcL56VC",
  "key24": "37hn1sdEJjPMopt71CEmX8onv1KP7nWSvzZ9oRafcqBCQ3qoMniLo9LwN26hHFbWSPt4KhNJ64BQDhUEtsZs7dMn",
  "key25": "4MCEb9p86vP2yZzBBkJ1vbqNxBSxbUkBcVmA4LKfQ1Uh4dRRr8fp1Mh9WKU2dj1Z6ro4zGUSJDnWqwbaZjQYRTXu",
  "key26": "62npUF3oieK4hnJj9famGdis9bLnagqyGYPMi89q6tKaYyjzxxKwqFVCzTftJwD1MtmBCbvzmY1a9xrQU2M9G7fT",
  "key27": "p9M39uNjNVQRr82tbNmacXamnFAptEusuUuwtSkk2MRJUpEssmRXEYv4nUMLey6J2tidqEHdPkD8PjNB6K1pKHp",
  "key28": "Q9tsvsFugFzxfiAtNt6FEHzLQW7macRbRuNR6hbiFv19REosmdr1pt88X4JC7YQbfC6eJ4ZveF9SzCkrohkzPnR",
  "key29": "3Th2sSskA9G9V4nbj5zBdW7BHTxBt6ZQwvTptxGbZ7NHvmA1jCcTwv7gZv6FUtHFMZtcSE33ASQ45femW1PR18oi",
  "key30": "47gDajZUMgVzRhWGaY6ACS3GXPfesU6hQGBSFfm2KAFUs4o63VU6jfY1SiYSUBY149husXyQdL1ybWFkgi7M7RW3",
  "key31": "4QXPjyozG6FQp3wyh7t6Sw62DGc4J1e5jDQtBtAgD4EG33ESrrjfobp4BdE2B3pmGvJadzKy4qUKDN6BWPbP8XZg",
  "key32": "2AWCWFKQaHtpgWRGjhECQX3MyXRBMT5Dt4AcXDptK8GaLvxz7Yp88u7Xzq2LW6Ni3UrBjwrgVpzLpRmmFDMdJKHr",
  "key33": "a2HkgccQr91GGxBncEsRHfXrxR4RYS9q7tY4EWooYqKbU73Dto5gPsZbUPvs36iZ3zMkgBmPxrAvgdahgrQjSAF",
  "key34": "3mZQmcR1pxrSAMY1vG3MUVRFZAnaAfsG7Xwx3DEv3JeSx8Zj3H2ZvX7TUzjQHwMz7Uu5PARAfJPqjRrhGxxBMpBk",
  "key35": "5gEapHgHsv9kZxBufNxrU5yjnr6rBvL4FWt4WqvdMXYaLfUVCML4n8kLC8JwXTDtZpoiMu4prxpdQAM83VNL4zd",
  "key36": "4s3iyQyHG2NwpZm2sF61iZd46Jo1fXRJp6NGRYtKpL9KzV5sQix4WW5F6w6RCr3siW6LrkqFxrUkwQqhbnzkJNta",
  "key37": "3qKZuDQc8gxz4qg1NQtwc4K8xW9dNgqaDvEajP6m7Qbhy4r49ybAdnDou2YUx5EUykY59ok2etLkGFJfmk9gf9cc",
  "key38": "41qG7zpGPS3RpnGTSY9e11wDgmiu3jgMi7vcmtEd6iPHmYC7EmP3FnqLyK2eo6uvEFCy2xsLoSgqqnvFmLLqPhjg",
  "key39": "2AgURP4mR3ijdMXXzNfEC9YUrBApQXqTBi7FMtZMJmgyzm6LKuLP7vBNqh1MLBid22toA8yYv7rncSxbYMDcnPGf"
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

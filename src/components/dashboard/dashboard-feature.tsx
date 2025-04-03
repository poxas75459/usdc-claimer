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
    "4MgtHL2n7BZgJMEAUm7jxtw9dBuFvZw85SYZgMi5jpxvQBFHCpx4RC15Yg2QWEanmudbyYiywdGLnBQhExtQ8cWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VDg6wu1cGDZuDbYujquxVBNe4HXtEm7gBJ83XgcYggwvHmvA3QjbPwwFkntabdaoNhXtUu9kzdTwqnQMw6QX4oq",
  "key1": "3VpCiPKW1mgMhG2rQtwUUZeMsRMSgcUSf1mvzKj7JEmLemuW8s4uLu9Bhze2SnVpidbTbgDMoKua2YFuLSJ1LmKw",
  "key2": "2MmB182TmrGCHsfSJUt3fgM5FXHChXcgbTb6uMA2tnH75A4E9Xv2Z5XqFtKPveTMcMYPvsktPX6ubd8TzRWTRTuF",
  "key3": "5EijiiQxKsbTy2Tvf5Rbry3kLZK8iH6EfpF9CJ9hANpRTgxnP6erZEUWJ52XhK9kNLZYCArX2fHweJeoRMbAd5BP",
  "key4": "4MoomVcW23fMxY847P3A69PpCEiWoajqzX7BfWB4RwbiHZQuyBwTaxWRwLiZabAmNpJevdY7WL3dG9mMmhucp8m4",
  "key5": "4nGGCZDaeZXrQ13uc9Lurns61MaxbcrVFTVuNLijaUpnUZsd9DCP3TxTgdSX3Ku86n3pGZGwj1qoHsJwnX6eK94c",
  "key6": "4i1uEmYTboP1DmDrmSGRG4uZrr9zLgDs5nXds9BzSDU45Scqq8SMTRVet7oMy6aXppcvjHsHKpNPaNWfYxQEXTWU",
  "key7": "5Fn8y1ak7FV7jePChqJQE7DcwfbBw3nsb6hvdDHAEwGPu1RfYUZt31jhkHwTPbAbS83VNA3GEEH2cHxjUumsX48h",
  "key8": "kDncM8RffxvWJunzeNhPqsfEdiyBJBnBnzWpLk9x2x3goHJjhwwb4iGoo8WgHTp5HPu26KHduG7bph2ryzDn9kB",
  "key9": "4MLMZ5yhqfjceopdQRQ2yntJyDy73SqfXW431YVFFiwRfExHGVa7ReVJS67B1dSKixf7U2BNFf8g7k1CJsBNCd1U",
  "key10": "emCsDaVbv6DyC3q3N9MjJ8PzMbdNj6FcGq3ZK7xxZV3pagePtErpFPKcCDFvSSce2idh1FA8BeiyXVfUviemhVp",
  "key11": "5UYQDgYxAfZixGmYsd1MgVxsf3sKnDwfGSqXvBsV8MKCyvL2f6nk2pEquYymiJKvZyCteu7hBB1M3c9eyz7Fw5xR",
  "key12": "2VmNBN362LpwQzxyFJjKMprmqKKiNc5gtBc7TPDU2y83RrxUAXgAwJuPWhateGwQNGgW7Q66KA1x1nL2GVLLEGB1",
  "key13": "4k4eFtqhdywYHZ7hRGXkjAw5xtcZu6dWayjwSSXqFHyYFXGtNAXmpKWmuPjmHAnjmBXCE31uYmGTNScYMDUm8dwY",
  "key14": "2ZCD82g5yns8cspF5vN4cfj4w4httXPej44fqWcvBQjd4YNCBKecW4ApTh1naumFQBN8ahsuLGtZxjTcTm6MDjSt",
  "key15": "5K9g64dACZtBgKxQPfHEcnaqALQo8auWfpqLio5zq6jDtBdFyiTjUzURfGF1BDzmrWiH9kexkcAz9oDApqvrNLJu",
  "key16": "38ZiyFYV2WDzVjKyZQJsQBeCE1zE76JRTThrgDRARM5PHy3DVXRYEkrvfjZgsYNJJYUqMXrqYeVeyyDFNeNUoocV",
  "key17": "vLcDuPirU6HZxD9FPiU4EvGhk6hadWJChswCeNAVvsnCjtTtsZ7DawvreojDM9EG18LGPQFRnKk5RBgjDE2Hwgh",
  "key18": "2M3Mk2qA43BhTW8ZaB3pmsoR9h7SUonRrTrfsy1XAYsMfCfsujLTxzJ17sAa3fojqQ6sARexQ4KKSX1ghA7eAV1T",
  "key19": "5naD8V3ErSHfLp8zV9Fqaq2Sw9tDm2u6XaZdKivsHS9TGBMAV7oDDt5Eouf9DgPzt48etaYxFzSGGaZbJN3GNvLg",
  "key20": "3DNFhM2iWbpjQNcmoH4G4iARVVHYM3ikQhMFbhpGUKhgKfdDiztFYP1kAs5Jns4JsD6Wc1jtihr4Ai1bdWRCS4Nt",
  "key21": "2m7YqkpXYfKSK34Ekuzz6wQLitgSPCH2Dmxh1jjxTpaGvQYeaJwTMPzgWtGGjoBhSk4Wk98ZE2HQQKUaiT8FjTZG",
  "key22": "3VLJoKeKpzAEeShnDDNmvWd8dNvDUJGdskrkDMSdV4rcxiTLuQs56dtddJLLtxjRYzFiCT67yCc7hRSjZw9uddPp",
  "key23": "2QViVdznQpNx92nYA9FZEU3oUR2HkK4e9taFnavRw5nqi2R1AF9ncvsCxabCek3eW9qpmZpRtqY5WvK6LVPc1YMJ",
  "key24": "4u3dKJeFds7cKmggTay1ZnoJyd6uNG1mdHToaBp3gMTmcaafbrpF73YUC8etHeY6HzMXAVjzn7xp6QW4B424u9FD",
  "key25": "u3j6BDKBVdygJ9q8H479sX82N9yxeadUoFmuFL59TVt1ZdaH1Ew63oWEjvEhTfiJqVg8oJJEsLA6fUzGSVvhaAc",
  "key26": "4dFc9pRewDtyHonix7cWdpJNDsg5CigYZF55d2ExdspcA4dmThXnA2EAk3QJhLKn3paV7AMypFvHjdU92YLcACyV",
  "key27": "4MZg9eYx6qr4YA6AKYaMgMrJUvo2ETUDdREPziwMwc6LFNNRKBfqxmFCK3RMVrfXqtFWiCm1d55dkgfPa4cRWyUu",
  "key28": "5RrYNtA9u3n53X8WoKuUsLHJDNGLkMSByeWnHdhKLxVbi8pDNHMz4tonwB33nTon3VRxFan48GXMpzmGwhtujiuG",
  "key29": "4WJ26K9egMsRiiMoxURTcVt9x6nFkFToPVVnDWxfZzheJXRJgJjYCKAXVz6djEjxMy7ZUzkQZwJXDQRzTibjfCZe",
  "key30": "2dqQtuQnBYZ2qdQfB1yKZk1Qhff6jBTEdYGBvVvyC5ziWKj5jMqsMwMYmBhqwERW1mhYug4Ywwgoy4j7MAJrhBR4",
  "key31": "4x2mr2mGsJfrycomhPPu62G1f1Vca35mkJGM3NiL3Uaz7VGLVft3EgmuWceXzyMVQToeJUx3ecYqWSS2fBWfS9Jq",
  "key32": "4mqtC32JjL51VUr3pPyshgxg8tgUVFuugQktMFHo96ZQzE8UZ3R9nfTrgXBYBoD1ENabjdupL65VkLXhmRUzEbt5",
  "key33": "5HvDeLYwrCrD8L1ufUtmaYJ2GENgCTkL1pZdNeYWPqxJvnuEYKsrohHxWmfeEXgmDJqWM2yvdVR4EqmsiBmbZKBs",
  "key34": "4C3forShMmph9k41g2xbcFi9D7gvKUh3L3tNXJ9f75FR6GxV48nKtNiyHNkTLzTTV956jidbFPv1gSbjaKUhM2dB",
  "key35": "3uve45hoKaTnvB4CJ9opFs5WunUFLAaH2kwXcis7JxVKL9oLtRQnqj9tBZZzPqsCttEZYgmRjXQgGTzTZR5M2djB",
  "key36": "5rmkZK6pLQp9XaaY88m1PfFrJtHpVmVWkX9C2svRNoAadgvGiei3caFX9wki1M1ywCv7ouwES4Qaur8rFkecBpQG",
  "key37": "3hjw9eaYj637cJn2aSuNSCuP8nxHrF5VBRAyhrn5Ls6Y1i86miiat7iFou8bxf9qjExbqrS7A97bpRuDpVEcrkQG",
  "key38": "5fzG48qoqNTTCDdnNgJVoawaQmKg8aegu3k7mYBSvx4B39Bohy5eoiNZchx5cZHBXWCGD2RYJ7Hh5QJwBAJiXC16",
  "key39": "3ieRXRMdQFQAesK2aVFuMLX8J3UZXZ9cUiAYonKq2kj3AKhCUBoFMqU3WobKbjKiMkaCvn7v8PVi7vLaKdRQbMfR"
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

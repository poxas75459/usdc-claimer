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
    "gTSDQ3K8gjvonFj8c54fzRkj6Fyf9DyYeQkSHSRa9k72UcsXwG3ph7GXZbT6Typ1cyraTZd9HBPfar2ajecGXBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32QQLyzdyV6roT911i41fTmyTKFpRdpE6Auwb5cxyBVHLv3r5MSYPUCi9itfmaqa2wwuSzXEQLp9RSoNZSFv2tv5",
  "key1": "3k3cH73YDZh2rtf5ipSP3WQsbJ1Cje1S6ULjhnk99joWmZ9PxE1NnTzpFQDSj1hiYLvsrFr4fv6T2AUZWQ4cTEUH",
  "key2": "bJPvaB5mQBmgMsXKwqVTKB59x7z3Zs9t9EX7m2TXy4pqgDaN6Gi877UYVA5FVGBMpbJqk1m16cm4xXGfVn1K8J6",
  "key3": "35DK4sGrcKz5GistBXK5ss4hRNcBSZXNoQuYmFQ5E61HQ6DFqHDwns3Ma5QTvFrYYkLuhENk6xK6qav1hHd6SQji",
  "key4": "5UpzTS5nV94GoB5uCJei2GERNYTCxs4i2bXuRbTgXrzcShX54skEuXjCZSw181VTtGhxiPPr7xSyQgpPQkVtwZ2d",
  "key5": "Rf57HEb8LhNgpe6sSwor7XsR7bdxca5RUHjviunezLQsusY85qSBtw5E7TZeG67nXZoyEwdPacFiSc1pcbhVCAa",
  "key6": "5dvJdo8cd4wfrNyh6dBfcL5BfJMN3qsKK3kskbnZsr3kKNr4dQWj8JuqKxxxV2jBUroGdqD9gsfEw1SRdpJZyXLa",
  "key7": "4rTox97TokFPCZKHzHuK2L5uVJyrx89VF6ANAQgeQRNVyq5A7oHxeHzMYXLmapVQAYK5sXCVt8dGHPfgQok2D9EX",
  "key8": "54H9WfLwaweun2UrNhtxwHUsVNCdjMbW9jMBu3vSzrUh5pCzcwxp7vPd5jdAXEnTgC5ckw6gBqYoWVjmsLHNP9PD",
  "key9": "4NtFzjZGYaSaZszeHkTXmXsgQjSK5BwwD2P7Ac55ojegi6qwuUoKYwzw5txNew9zYQwD8UgmFNVURSqbU6A8ima6",
  "key10": "4C1rgdH2XbFJNp9N7g6yT4wpoJgMVvef9T5Qb7DEeikBARqLmduBTJCcQERQ4ABpLSfLHnfRybnnDVPWbMSFo9f2",
  "key11": "2nPHz6E8bdPHxagGBMMknG5E7pm6JGpC7Hw1ZMH2vPnkVmSfXaqA2VoRmALBC9ZazTxmWtcUbby8DTcepHr1YoSs",
  "key12": "2dgT3MDgFp42ck3SEceLb851d375hR2NVZbg1RyGxg9MfLpunDX7r3fEyMGrSwFXPNGE8eVLqsJpkMj2fSvagQEe",
  "key13": "5yaHMvtBnpCan8ZAXoCzDguXqoBK5u7vx6zBZXqhCvehsPhCeyF9uW2iGcwf1TNgngs1AFS6P8CeMN2HckxgvZJN",
  "key14": "2WgBvd39RYbFFXYca7r4Vwvj9bpYLjRTeQoxM42Ncrb79NvRQJUESUseoFjSRX4Hw93FRJhLxKfeyPm9aeGi5LMg",
  "key15": "4heTY4d7VFvPyqYvStw9JXVw2naxjfJSD5JJXrHKnNaSzQdV52C2ogzbGrFhfKJzLu245uXdUFNJUr1zDuhXFD9n",
  "key16": "5hB5EhDuLfJshJDBJR48Vb1A2s47hkALcnodYqKwvSYsmn9L3w2TjpLWP4Q6UWWNC2d6HHs2ZK58bzTtN4kQuzAG",
  "key17": "2Y48Nk9LKLLDcjBSNc6s1hVSXMNgeBECp1aXbzFM4DikXqL3YzuahGCo1qNY6PHBAnFAchPHJcMwCLYFWnnFbvJv",
  "key18": "2opfjHrv7kV547DkAWM7VBJ4eYz3Q7LJA2JbdvWtF6TbK2N94H4WiDF34SKV2D47vsfgum7ZaDEnCfBVd3qAmwUr",
  "key19": "33Ung7sibMuqUuhRBwa1cZZpSzbgeQvWmNmyibedxcXhCJqtbZXfuJE6iG4AEaT3gtDwpwVqfBrRG4Bwz9N9zXZM",
  "key20": "63cJXpTirATZPvF86s2NDLCt7sSqDHh7JwA89m1Aqz6dCyNYbUC48SBY1s6vfDrvX9L37QMeGcEf2bXv9jK9NbXq",
  "key21": "8WvZ8V82W3qJengk7PoYD4YrpYuFgMxoTkpvCV5NAqMKkA92ihpUKWmLj8XKqpn4hLrWgDk8fuDZBCMNpQ2J2g1",
  "key22": "32AAYiDh9yzVWA5QydYjS5DTmoc8qADDVuMYPppyGGC4Nv7j431RwTeZy3wSkhuW26KkPtxWgXwVBgV93WWEFniV",
  "key23": "5NP8fmAmfHh8eqWVBjf3uRFisGJ2aQG8S82VyUyPXsL9pyroVXhwgKmJTxvewrCkebZKM8ak13gDRBEkK2zT8r67",
  "key24": "2WkRu7m5r8fZr69JE1zwCWYXL18BA5QEcRemgpRpFTUtQJLFffLy7xa6LSoapbgJUF1p2rHgvDwV1JPZM29pnCri",
  "key25": "3aYZ4hTZRjLHttqxXQijV5xifsTfmQundNnH44bUsQ56fSfjF1Fg42SfW2Zwfu6ELJ76GfeE37JhxVbChokqvRX2",
  "key26": "PeYtvqLjVSdhSqLsspeS95Lze1DZ3DxkG4o48JRj2YrHPAdJZJjtQMWU7Kpn92hiSWmMzhfo19bt2DCR9mADQZY",
  "key27": "4r1HhqKchxeJVtaZBkBwVoxg5wcdUcYqmuaWJr851hyXeR2ZTjtaY9KVBrawDK4KyPPr7S4dnHWWYxrdmXx18wr2",
  "key28": "5bzQDy8QGYCwWhGfJcBpi7tn6jhDB3MEFs3HmsYDGzMvB3ncEaiR5BQJSBrpvA7EE9PuLSqnPXFQJyueFqmwgPr8",
  "key29": "3NJbxriYzCcCQa3seQcHXqir7tFgWHc7VKytr6GXnTBtJvf81s5pv18JugUbjaGGHw4mcFSAZ4yJcGUmgNG7vSKV",
  "key30": "4r4Z74pmhQSCMfPx9E5BiY4fHdxuoRECrgGMX1RtMDwNRMzZh1gNbVU4rahcScudnns2xMF4wg48QqDvYbNhoXHB",
  "key31": "3fhreKsaGaK2f5ivjWeHDJzASS8BqqJaNnN9TSC6Wfg4CdgNDCUKfrjLeRQ1PbufP2NZ6SKw27KFQSzXJXMQgvub",
  "key32": "64oZkNM9T8LcQtaMP8zmy4a9ZrgBVYs75crkWvKcrFe8LrR69EWBKYAKF3b6pEaGwQ3UteyQk7dNU7LgsUXJorJh",
  "key33": "27JDBZoxfuK1ykuuSA9hyssz7n52gbVx35SQgHXu4hieBHHnjBw2ffPFxZmx5RNUyPeTAickzgL7zdkFgZuWDPjz",
  "key34": "5bbNXb9W1qQnfxRxTM97Bh5hw8A2uyCL5M4dXFNLKn4o28a61hbhToEmG6wKrMDXetvBJkrWtUXFQMd7sfpd5wWQ",
  "key35": "FnkCvNmCqhnbTZ5pjyb8iwcoM2c78GP2RSvF47yFbVTvxfiBxxpVNs9m7c2HFJg73KBx9yGDp9jh8fYxAzEsvKv",
  "key36": "5J7cZbJzRXyZwinYgAZxiVqyALKhvHvD6TbyDt2bh16L4CsoLJ6LWbzUkfBFyhBeSDRmFWgb8tKGomEHG3KKeAY3",
  "key37": "2DCviSi1ufQbHzy6hh1pJZwHBgUTH6yFktRg9M9ThL9ydb18Leh3fJKKC1HgAaEk2r5VNySh1UCGaY8iG45J1Tvb",
  "key38": "2vE5e7Ke88QdZswaXZarPnMv8AUcmEF6CwcTPbZdkcbEuK6wcB54xSRUyV2V44HzwyvsRcuHp2o8pCxpKSLgbMHm",
  "key39": "8uj4oJkJUon7mChsuQu8FJH86bjxZBrL89kTp8VYFchUirvW6qoVkCNLtABPDSuWrabEZ1sqN5aHUHirQCqkPKA",
  "key40": "42t9r7QdrYRVTpsdRhNfGngo3EV4CmTg3922E5wrHELCVc83iUggHrMMjfbbPBnV22pU7LdqDnMPL3mkAhCcnW8P",
  "key41": "5GtFmrrDLVKbeMVVoFGNnEHqG1qAfNZX8EHKsCtkaqqAV8WpfssgQsNXa63kjPDdx4FD1MT1iTaERwFDUPjjMRmj",
  "key42": "54MDnyoCyWLyVVHZXbLmmnG2eB8vLbQKvaqxAjGGLCbqTHMYMFJgRdxQw8bYDANEzaVmQtS3WLGPXythA52e1Z2e",
  "key43": "4VQBXSDFoEx3LUKcHPqFaS6KFHLraEmP5BdAWbRxmeMYMdgjnR1mt1B9wGpgPgM4FxZ8yJPNevU9XjCwmP4VjP3y",
  "key44": "rqPQ7UWvjR2nyUakUMrBM6Pst3iSDne6gVSLtYY4FRWmxN7vcxYiujwDpe8t4888t8keRUeY6iwJMVrVSo6vzvE",
  "key45": "4WTAfs9UhA8yUdmrRQn3AhZAFjs1Smtfq4foayErgfKkHyTRJSHoQUvmRc2t6vBfoXegVLjf1dAYyUDNusmDUfdv",
  "key46": "4hrvWuzsiqUnZ4njavGc8fGYAo1zLnWVSspxj9Rms87vWYuDbwBbUF4vuYdGf6kJ7zHSM29pF4DjJZKZhVbmnWNb",
  "key47": "BEdmLSyhVtZS15GdmGmcp2tE8k2UoMAJG4WAEYNuYxcd6uyfKHnY9WsLDK6o4H1a38pqLxbRAdQZez4DvdtmXkK",
  "key48": "5RDHrpiUeye7tXGhLjTXcnCvAtq9vjc94yKSh7XjWWCs3goSHeBTyfwvA4UoLuZL3CDuzzARxMFaRKtAdizqdcQb"
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

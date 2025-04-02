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
    "5c5JchDua37B7XqxzY3jnxtXJkBL2Xkhj2ezxgbPQSiXhxodkGMEgcQTQVugZNEdTdNZuZVdppdQPkrEy15rrydr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BwLDchbHCAYQbhz5hvyboyVQyAQ93ocqtU53VjmkffAxXsBsAuyvbWWFLnEmzcifwbyGVvsZinAzywDj7Hr4i1x",
  "key1": "FxLZaoVv5srLGetr4JUUQbSDDgGvKXpF1A8VACtHMem7mN7sUizVivA4fU36wnzqV9E6vQZczEb7FA2AqLgHteU",
  "key2": "5VLUwpgkS4zjcPQ3dSYvTPMBdm6MLR868GdpQgPji9taeqy2QSXm4rm18yHHdV68U1fYAhJRBDjDztEhxnDLVXK3",
  "key3": "32JdtPeZaN1wgMeM7EpjV43CZi89RMcLjGM9p8BPu3t5q9Cu3bdzusPfNW9wFU6RcnFbkb961eBXnX3j8DjT5Wrp",
  "key4": "5xJnqCzKkB2agVq7V9eV4sJhxDnwed6qzcUCvXxPZhfPDDmACbEkyZxkDCeJURxurQX2XUpDspX4vWARrkYrLLca",
  "key5": "3ASZENg7w2B6SQfJ9F6x2V48P5t1CbBDuXo5dqMty9BWfv2NU2Q1iqYfZCCr9XQzi25cWqRzU54tTAmvTvthUHHS",
  "key6": "3eyq86MUSwHjvmbNTk1ZPj3wRtkAtpr98FpH5TfxbwCXSkwqStB7Dg2nSjLUD4ynuJmUHaN5tSSaNhNYZn84jTFV",
  "key7": "4vfhuf3broj3HzQbQyHFxBNzhmPe3gijsyENTeLf9gtGu3gkYU4uJeDPjc2KnKJvQ4gJ9X5E1Cpk1xxr6uXuKseF",
  "key8": "4vqeC2bxTivWFaCR3MYxPW3QZDFE3B2iXaveqEbwxrcefQG8tSsLNGW7yFykqRafDfToj4z8qhZK1f5cjFoLXxPL",
  "key9": "5DgGLr8XVoWbgK75ysEhwvTLWKFicyzLzborGdLNeMtUwzfSuwpKE3t5M3CWmyvPuPPk9Z1autUFqW145u5KeFmW",
  "key10": "yq6qH22CjUhwGCbd6cmFTiHQwF8fkwY8rKQL9we1q1doavCu8iTtp7mX7ZHnkGNbNiLcAeHQi66k8VAD58V57jG",
  "key11": "JzFAizqdTJnR5orKdmkwzdYyck42dLWg23htf1zqsJq1fMVmyeQHDK9bVqLUqKMD22rSghH4TzrN3zVLJ2q2A4X",
  "key12": "PcGi36juFDXigvH6bXBpnkyv8n5mXcW7pxSqHcWZYsTinJeA83UqfEHu79K7FaCNHPniYLALxJKaobgMtwngnmL",
  "key13": "2VGSfaWkgxP2W6qa5UoMAVcQkVzVcC6UseRXejgdwioUXS3bgvs47ti9yHnzdgHQNpfVAVSiGuwtsKsbmLt7ALUX",
  "key14": "3gQMPBm3FJv8ZHXzpah7JnWWKdHqTN6DjKRRJ7vJqPw6YmJcdabga1s9Tjix9v7kcmFxT3eXXQWfeZ75NVrrjbMZ",
  "key15": "dsczvGSHjjUuW7zRr8eDHeFEMskQ6165VcX897xcygMdAE2jzfn4ThbkK5ZLtqY31kWU6Q3Jo5q2gQTnTAUHfFP",
  "key16": "5haGm9YRwRBMKPbv4gR5zr7H37Gef75s2ueE3mQRqueccZ6W3ZHsthFYHG399CP86ACU9CWEUgeSRk6TYDvXYCVF",
  "key17": "2TcfLwxfykooCT9HUrEwQXuRKnDykpKzHdFsiNP1J54qXzHZg2XfWequkJeMvqAvHa8kMCCj9xqtMzxPzrdvGvJQ",
  "key18": "5csxp9AFxZXcPUc7ztMy4fGDYr6dUH2CVt47AQnVDGmHbiATiVNdDhkypXuzZGeYQtKkWEmQs9tEC5EvvZ5GQZBu",
  "key19": "55SPEW2afrii5d2ju54kGtsP7UqyTzR3AfnHJrAe3DSJo7xguU9hkzisCuaGEyoCDDwsd5jDcfhfA1KVJnsmAqr5",
  "key20": "3ho1UHjRAkdJZJWmnmTR4A4uvCsPi6ELmWqKxcBJ1E3se3xyhVCF8sDoFDKQcTrr3KhSnYnBBHgtGQxZen29xbXd",
  "key21": "XBDFVJMRe1MUW357iT2Zc2WYWzM42zjn67hKydWeTPeGQZVapjidJVMCN1hZ7dQy3tYvT45Qctpvz5og8VV3hTA",
  "key22": "4A4cUwoMaTMEc52TfZhGDd13RnFT2z1AEb3nC5MbtT2uc3DJPeiFauNBRgMmP2Dk9HK29epkRQdL598anMM1WYVw",
  "key23": "vEzdXwWtL5sC5mCvCY1XjpoovZQdin6xR5BqBrSvZziyXXLHtsZhMwgsrsH2QojLxHnMiduFMkPrYzhfFYwwxCW",
  "key24": "65zVkfZvVAd4ZN1mDAVqpJa6BnFzPq8s9ETiYwyEoy2UJF7qrCatnnPMZmFhpetFELqe6ccpjoQ2uk2XtQx3UApu",
  "key25": "4xiEhkPfVkSDkrCZRmL7Rfm8k7LGXJpyGe7JJw3Yu1zmC9Q1YqqEvDrABQ1TH1ELqKscshzcsJXhNLYXhEYfBovR",
  "key26": "29BSFUwKCE3kbMbWFetCfpAWWSEtyUYfZcDuswtHRi4GbZYVKi5nMCbVHgv4PpYypKHKgJMQUDcQ5UTSMkn4KCb7",
  "key27": "48spJDUrYieaSSxFkfrCiXQKK5Vt7mZHTXXX14diY7WwaC9r4Ya7tY7apJfc7S8AY4Pk6LXuFL6FMpDweWiwdPfv",
  "key28": "4yGN4PPBfGnLTkWnxSyrqheZzXk4HQxYP7wTguhtwzoJf9R9qJzH6Qgjh9eLFKwiNC3Qoka733QK9hRhcRJDbwhK",
  "key29": "4qs1cWWFqxZnnxWnmamqDXD7GjnU3XEZ5Ro1chdT2uFcTAzCgsKFtKPTcQbLrkPvgLKUrj1Xwn6qKu7APQ8EZGVC",
  "key30": "3NYsdzLMQr9Go5W8crK8YVtQLHsFh85jKK2hcrLEkcoGp4VXpRVrWabV6ANCtyAoBpn3hej8DW8LSEWdrLfu4HnZ",
  "key31": "3csQzUWAn8g7zW5oDGWyeRJfQHWhkascTpMfQLyZALMWUwbRgWnXq39VWsT1k98qtNk53SdMFyzLj7e3d2qZuJCv",
  "key32": "ctmKNBtkQEM4tEkdYrAop6efyu4WqnvVqAmNELFEGJ5D8nF3rVTEBN31PUTMDBEpncL5TU6un4gFrmJMRjm74Aw",
  "key33": "3qhZrvFG4HmymccU7FtTjZTuyPHJLkMoYdpQ4pAQjCGFaVHatyW17mwsYzW9pQRLS3UFKLtHVZhbmk1fVybjF7Dx",
  "key34": "2KEqUy6nMCgN3ZPbxGp8TLCE6kiQhAn14XEviXp6YtKu6Tg17RoL4PDC93AgtRoLHK7duJqMkz5RqZaCgCYiR3EG",
  "key35": "27iypz2q8AeNE26Nn4yS17j9yG7m53HJZNrobSsACuK27VGVbzBrbmy9mpQwV52mLut1L4N52Ux7TTA3aacA36Fq",
  "key36": "yNzh3TMt8w1cyBb5x8XM1YxEnAL1M6EfaD4oeK7gmxmPK8fZYUeEgFXqCQAeTs6eDborrFGETNd3ATp3FT1xqDb",
  "key37": "4QuayFenNikiCHg14GYju5pBbtR428Gnq6UTSsLvj3CAX4TxbK9VmfivfweSeioY35u82x33hqLxiwRYyZKX5bGa",
  "key38": "38fuvm2psE3SUPFwhFkKwL9YEskykmG5K4Z54HQN62WZhF7x6CR2KPgHqxxEjmqGYtfoP4wY8KaausiA3gZwrwnW",
  "key39": "FcHF3E5QdHup2r6Tej6xoSM88vWtNGxcisJ63rM2orXB7XYb29FSDpRbys5akXG5DX62PeH7J4Qu5qtddUz6ayc",
  "key40": "5ZUoDhWwkCvUHFcSgZUyd2sbVWvALixtZ3gZQtVmMQMqegsbTowXGVVfucs13KMCaj1SU1xb8Yyr14KpXMbnTMTY",
  "key41": "qt5B5AUsu3yRoMgse3WJUXkYNzP1kzNpvQ1kUigDqfX3kuStBPRJ7EhmpDRWc3HCWs8CWXQJxVXrdcqBkocp114"
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

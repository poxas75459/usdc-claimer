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
    "tSqFANDdrsxHd7JfGFHUzFCVWwhe4df1r1H3dQDV5keztqnuN8BywfWPg37bxmgimuTvuwzdXEghM1ZbGvMbdpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62g9FKTwcpeWPb4jbL19B6L1Phh2JpsN35nBJQBUsNLQgujyLwNUxnpkvUT51N61MiwjVw8BQPqNdHh9gstedadq",
  "key1": "5vrsG5SPNDwZDoSyGQTVgb1kFgErBhwX4LtUd3xhLXgjfs2K7maW4HpcvFjUN2FX46ws1nf6AQq6t1acr3ZjxZwe",
  "key2": "3pCo78M5zDSWs6uF3TdXpt5reRkGDkfLsjGjA2FHoAapUbJXCcynJVLmat6q3AU6wovTBuo8hb52ztP8UvqVknDh",
  "key3": "35KyEke7fPk7hNoJejKf8Yw6J6BKNYo74KukPYn8zxjfM7svGPBsreyxhMqu65AEikcSTYa1KJ5iD61fj8PR83mj",
  "key4": "2sJ2uiwVn3qumzTjbPdrtUN7Qqp24cE5mxZx5eF2QMhH6BDgMZWn8YfRrZJoJaUAvDngMQbLmiDq6mxA5CBh6N5j",
  "key5": "4KvEjNkUSs7sC9KRCiPKYMcUzQ5ARzKqXd4Z6Krh4rUvL5TRdgNcgY5TtCUVEVTFX9tYLcSo3QNd9duHiVmfswju",
  "key6": "547YGrDRfCjSs9K7eEzhMiWEDk4EKPwzZZ4EPhb325T9jyZJwHbUKzpE47JSjsrCPhmsUTKyGcRorXf8ZcyXh6kX",
  "key7": "4s7uzvSNu7x8m6Emxj2CNRQXm37ZDFPJWHzNAgLxzAf9XxVswm6NeSwk6d2NdKrSEtbxWyUaNdHPYJmdp5hCG6Qu",
  "key8": "xN8KQb6vYGbn8LNLFtqmJTPiWHMSC9HCJyMEPe7Bf2ngPHNHiUrnxX84C8deDy9BJB8rXMc4EYZdfMKaBT3fwHv",
  "key9": "2GVgPdGMVMwhm6EApRqwu8FFPbnsRPzeLmct24a9yS5maeC6Z8UeySD634cPnfmdem4evTjSN7m8uuX6j83MfKEW",
  "key10": "2AaQ5oJ1zySGZvZm27vCzWHHd9y3adEMHjSiWe4EYxKcb28121FcGkc1wRm7WmpXrmDYzXgG3aindEbbGmsNC2cE",
  "key11": "4TRXvXr6gRnDHLQUTyZF44rFCcKCA5dELWPBmCB7aGWu3E1aTkTNcGU7qqCUVitdDww1j8StWnYn4N15AvGJjpsk",
  "key12": "4EedFFyarGcC9vTEG8kjYi5yzpan49XSxP4nETBALDB5MiNh7RPF4awkuo6dtF5nCQAj3WZt24Ebv8Rb3rfJH1S8",
  "key13": "5jk9xKCncyYjbXXK2oguyGdpqjzdjLwnm53WzNEk7fgDGCrevRzX2MLJx1iEU9LZdDTDf8jBE4E2zGjXKBHaBqGJ",
  "key14": "Tm6m7oA5Y6Yp6SCf3ASbp1yJ4devtMheuYFLQKNcwzgPxRsJyYPwvSPbQhchhAm1zGNUXwfhQphnJDv4oBo9Mmk",
  "key15": "3ZkREngtevARHXBgcc1A6vufesEHcoUpKoJ8XnWJJa8YNDpFZGLWeLJ4FcBxVGLNTx5qFrvaHg33wz3rUfUrSgyH",
  "key16": "3BQNxsyUvQcqtmVJKQrHmRRPMH2ehjMvoMXc56oDD8ojKtWChEQ9dvGX4STzCLnWA1PRR1AxPTzzY18w2uy2qZZd",
  "key17": "46eqoSyceXk3VuG5DgxUQQtc4aNKAbCJGPGNvJC5DxXmrTommY6kPzYCVnNPqcoAW5ehxhxynP7iZEbUAV3UdSKg",
  "key18": "5B3sm4rn31LrxAnWZT6uVWdDEL9rT6CQ42W4ZodvmPGhbnAsLxy3RP2LRBFPHMPBKo1MGfkf58Nr9rGgYaYe1wqM",
  "key19": "3PyXsPUfBkqZ9e5PJ8cvMu8CEQSzn6y42Gpd2tPxcTPNjur1NgQqZQYPb4JuLYmtHbYsZt3UDcox5388qqxT1uYW",
  "key20": "4u9Dm1V5iS7mUUZQna1jyagrvKV7oNqwNxoeB5kng6chzRhVy1uGFNmTgWqVDp9oZxYtR4Cs5z8atEwr2DNceSbs",
  "key21": "51BeKL2ke6AHaNcDGNaKZBUKdRKmSaqHdbtMS9bGhGRZaC2kowbjgtpuFCH9iWbocu1TJyPoehnYqy8o9AEvWgjh",
  "key22": "wftWjegChRZMujfmieBx61NMzwon5RgpPQjbbUGJRNvc4s8Y3cL1SZRZP2U82ywS1H4SHHXtctQKLSSdBskWYAU",
  "key23": "4VxVvbhG5aK3NkRXAvqC7c6Eynb1GfrujyYEhUKhCB9p34VTymjFEqEeCp1v3fJPmEZTkPX97Y1JhB7v8f4pdv8G",
  "key24": "4NabhMrkwkm3DDBjjbLJHdgqqHtHteLz4Hk87HZhZR9coTjdbkq2195xeMtuUNwamAQeiWJ7keh25rkQLHBVzw5E",
  "key25": "2wga2Hpy4qtDV9WHGihKDtAcDh6C2qqDuRTiddExqgsbaGLK4hg5u1JLLAgtkyE435kbk6siAc49Q6TzGtn9kqrW",
  "key26": "3D4FsXVS3HEXwukhURyBCXiWCsexpSLXaFa426A3WVsDF4A7u16ShsuLTczPKxhuZrCjqMEth27hAZhD3xWBB8Gd",
  "key27": "5JJw2pxnMcUqccwcRZN938e7sDcWmJAH9AcX3zzUYiyA418N21ZHDDDA2kvBkS4bA6TMNzHYNHzoBcJNHpXPwhZ3",
  "key28": "4VstFxyHU1EkPmd21SK4KZCuBSCkx1u7pworfwQGLBNtJ9ytw7pZD2dLFkUm9j9zXPaxdqMAtNV8t8DfRBZ2RTDd",
  "key29": "55qxG1xAU13tpL7w4smjdRpegon9A6vShKW9Hr3XzQRb3wnXXQGdvEuAgdeLWnFt3eURNT1L4nM4HWPVq4kBMQ6C",
  "key30": "4LwVQxiirEEZvQuYGcrNxQaeMoZS7wRXZxxxVqZ2uMqzhZxDc8T1vp8tHSnmdnGPLVsuFSoc6H4dimUJ4hdnjqGb",
  "key31": "5eCHTCLPA2rnYKN7VxtgpmUnbACTS89sc2BaQECZcwY3WwWmCZfkjthnLTTPiCnkmnHmJ1DjAaXPhpXzvDmLGQyf",
  "key32": "3JfsaJ2gnqrQuBhpkNfHq3zGhi3EqZ4DK6GyyrmFKSmC8fhATVvDBi9mPbEbnA7kBzjXjjbW3smSgMGsUr9xUA65",
  "key33": "4q2b22zK2gZD9XZau8u9f335Q8pEL6BFzFeJQND1MwDC3JhFSJ9WRpXiQ2nEngUfP15VNppQwLZYXzd5PcKqoJZ5",
  "key34": "5hgbDVG3oz7xA2FbdZ5cGXnj7WX2T3srbPVMQMLXKhapNZ71k5U4d47oRZovTamYadRpzPfEEmQtDhdeze5Q6TxC",
  "key35": "5zRVJaMgo7ttcuo1BhBoWsrS4189n6g6wQB18hMZMXLMtb9qdgqgbCa5BSj1498JuRmgQJ6qVyxupNR5Fc9GTuDh",
  "key36": "4uiiZ2nfBjqv4CfnpeFjCvwfcLM8B9EbjuJa8bWEUum22wV79b5A6KUjQiWoKQef8JekMvfQHoFFjoHDBYcPKBSt",
  "key37": "33ymUnfhcVbVXC6w1KDbvSzcdgrUjeUYYGpnPR3dpx5PeVMZ3iyBmRReow1mcrmrVmsudB3vKy56UvuieaqUzV2M",
  "key38": "3vtmzpsU5xHcRabtitMb9ehepJjdcb4y3Z3Biy1n2k6H4xnrB9js7FGp1dZJkbckY9MD2SoQzz4JXvgSEwKRB9fK",
  "key39": "tBowrCU5WBSCpgM62BSFLSGhYSw7rqgdJtqz88uATw6LVNHMMNPa9PaQib6fGnyJ1a8wQLFDEg99A2CahpmQ4EB",
  "key40": "2Ls5wh5CdYVCBKmzKovwHUXAtvDWruHYEhMoNyLNuzmrhiv2uyDUJ1SRKM6YB7y6xdZsphRM8jsZXRKnpfAWLwxD",
  "key41": "4gn38X2LtdqWoKQaHxpgpKmyroJfzpKcsL31NyoDVM471ydxg1ih8BKKHQ8nEk2ynMhiesf37DGBYEAYKoWMWM8H",
  "key42": "3NDWsPYvheyV3LfuYAJcgY7frx76Czqsa6Jad4mQ4Hzb7CCWj7usBL8XFS1ic5PaLC8hk8nbHPMj8K6gJzrW8Wvg",
  "key43": "4gyWfK2iG46qTBAumjeZxcdu2J5WGeRmXjWTKi9fkBNpg1QJBdZVAezj2J16ykbKyntJYjaY6Qhj51duboWY5nMr"
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

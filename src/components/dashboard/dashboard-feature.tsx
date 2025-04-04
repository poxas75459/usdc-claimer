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
    "2LwCJmFFnQSz47vNRE2xckxg3ZRc1EY5cMr1JX5FDidThGsvy46WLnjhecYXqFubWVtnV3759PULn4Yzt7HUvV1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dX2eF9GSCR2JydzV17GGVBYFhUpe3zJd8G4P9nJFhar3yAK2y1JFwj4aU87hMSY7rNFx4YLGAyHWgPXfapaaNu",
  "key1": "2kb9d76P7jtBCrMmA1ZXSUj9abjRutPmGcY6VbBHofto2pcEzmPfNtrPTGNUdbESqpegFFcu7FQQb29mcMxJ2AMX",
  "key2": "4mxDpzfYXtMPdGRNHv7SFPYhmFqpBNzAkcN5xajjENM4QxVq6hgGzLAzS7LxmjCLEwch3Kn1oYRUoKjrgbNXAcEC",
  "key3": "5YvS7HmJAP9Np5bWC5zBagVuWHJXXPT1NmjFu6yTLaUgyrtSL4imdNhytHotNd4egWN9oAU1LLaX1NVaxFnjT4Q7",
  "key4": "5gpkmhQEvpxyw1wANdsDAnTLZWY8cA5baeYkxspBtSeaimbkuXRekg9PwjZbCQUmmPdmNt7yfbLkTShZjPG1agv",
  "key5": "5hTxe8WT7MpnkxHjmoXxaM9VUzNQaMcXZk5T9fT8pmdPuW4CmQGQ9zqDzxB43h86jdTQpAMtKL5T219tw1cxiNyz",
  "key6": "5EifJkbcrmVqdYyTLxHbkc1n94ny2L9vRQDaFB9ZQwFrd94K4czhCCccjMJZ7B2vCZedhjtMAMiYguJE1y4L9G8Q",
  "key7": "HnxMp6Bj2k4QzepiWrHf4VmQd9FUSDdBeLKvQTjZHbtXJv1utSaGRMxZRPsZVLuAY3PkmM8J9warHDi9VjizfdB",
  "key8": "2nW6oA4SX2EiBw2RgFQYJdvfmm5itAsHC9Tch2MBnNV45QdJLyWuXHBoaH94SiZKVfgYAX3n3JSArDK4VQgsybYh",
  "key9": "281hknukFeHnQvwSadCyUYb6owAU1rP8ZNRz5PKsw53chduZuNQTjDvVAvZb9dCJz1XmHtj6UEEY2UmCums8D3LV",
  "key10": "3oCpUp2uUQXK9fL7sKwHWDwEWkm5WyvN3rrzX3S33urZHQjrTcDsUYDi3c9FXsWjoUhi2vA98DyqDSQTP3PRanVF",
  "key11": "3H63Ct2QNULojcscahstReXSR5ysxcRHEH8RTt17Wq9M8JUUEqkmhpwRpQnCjvHBUnce2LSLcouZp2CRN1p3rGxo",
  "key12": "T6CU2SDAEuqBbHAECR98xv5o3fSgwtcAokyu3G98QTEyyLEvw7JGV5Q5qbZNXGyjv1jKGwsqkeXUMdArLUgNUZj",
  "key13": "dyVAx2FBcG4xoxVqZ2q5Kbf3u4rkhqn1UamhCbJAiRmEeRWu2p8WtCNbEhKFQkrSQZwye6v7QsLVbcBRomY6QkZ",
  "key14": "2TFRAzXi8XuCycQGfoLQHqQYZo2oCuGbkrEjPJGcCe76TCsNV5g9Y1oHk1MZitqiaWtmCAKEkreF8LTrojeK6LTy",
  "key15": "5RdyPsPjGvPQBCF1iqo67nTMFJhGL75SeQrADucPu3voWyysuUsXamdiMCQBQUp6RKhYu5JSa9WjGExkBDtCHm3u",
  "key16": "34aPQwAMehg53Sce9zYQoMt9c3nadHm1CH3xWgb6xTWEKMxzC2uYT4uqrqU9AMJBmT3Z6p7eTDkDydcNAFQm4EJP",
  "key17": "3LrpsGuwW2CGrRK4AcntKSjUJokDchFVXEFsDfk1gmjkDSUPtdf39HG4gQvE13s8YHwnTMzuoYV1eqFNzsFqzDLv",
  "key18": "3cZf5uc9E6mJGh6UFJTdwR1FsCCJ1oy3upTCXDjbUUZfj4DR4notwYLrBZsPcEEiBCHU28PN8dUN2CR2WSsav6v",
  "key19": "2HM5BjXnMRjqbujWPTKTrg3e4oENtQJ2Djrvj9PnbnzEBTtTKU5J8sLifMtPX3yfP1apnz2PHfx5tUBJoqz4xUrJ",
  "key20": "5ViegyDcs85qPjdg4Gr16QX6ark1Cj1mZnksd7z5Hat6vvJXd9rLGWWVQQcrnckzKToSaKswRksJTvbcuPWZgVwf",
  "key21": "2ppXNWPrBCYryPpy66tx119oxnFTdEAvYHzyDSVSTPZb3GWyfD1Dgx3zhKEnXPzeq4H36ancSKjQDDY6EacqQrn",
  "key22": "2M9gq6y2Z6ZK4DZzKPXLZkxbvYw5dTYHCqpo8LTKHdrH4WqGEp6Fwhy1CsFEwe6vtAuPdp5UfM3ShRYwYMorqxU7",
  "key23": "51K1FbYAwPQZWmTjTFWkrLJ3jJJmW2Uqwm5Eeo8N6SGNtFqCBxGJFxdkrdmGGXKBMCmknBeRJbqxfSUTLkdJRGoR",
  "key24": "2QFyJGDaW53ygVBbUrKuqxBLYeHVGwA5gKMw4MqUJ9TqD1tuKZYLi7tHTTZaWsPuN8VMUxPFZg8V2cd5MASEVMfT",
  "key25": "5eNG8aeG7B8VjKhaZzre3UUyreSBdbErfaPro3rmnyYNK3dKFzetHFn3ejKiMjKkATUYfmGMevUtpMMKXED1tvAB",
  "key26": "4GYnyfFt6XgxMeTR1VZyv2c4Tsxtxv7rhsvE52TNP69Ai63CdzpQMuNjtoNwVYevSbVrPZS5dgHGRUxqvEwVhErH",
  "key27": "5XzxSCJXs6AvKZHZAtGLpPZdQxw8EjzwX9oxEaWQTD5ySn1QxR3z7QTyXcjELxtGd98pc9ciNA5PTtMXHfQ4uUSE",
  "key28": "2jLHjzdjoTA7qxBmoDR2SxGQQ9QwCUBB3Xe5CKnKpAQwMKzYxDT653TbR38xg6bbwhn9gHJ95ZK31mQh8APewnmr",
  "key29": "49JGMhy4WdsQFWsUErcaj2Anj9jxW4AQFDCob2jEZMStqkCbpF4CjjqqTAruzdBQ3o1YUWNwWh231LFikRWrJKbN",
  "key30": "3j4uKTrzHB2MjDwh2iQMi6DT6GZUZ5jYGiowPVMRjj4BkAD2XnU6p8GPYuNLcTBXnfuqNbJamz199p8teFBCpsi9",
  "key31": "5SEhBTkuchLKeMMoiWY8V4qu8Tj4psqEfMxB8AeeSN9AgEnhRNre4P3B9SoXfshpRzGm33CLejkbFEdzVe7kWvh3",
  "key32": "34UjYvzFUr7sLW2fSkeeB3tmw2MnW2u6Zc6twJ3jMQEVWa7WW4JmzTCLMPrY68zxpe5ryqbm7riLEkGHVccj4NfS",
  "key33": "4vtHJhnzY3rg7Jgsh1SMEn6djqXSehwuScBpULGXc2Qfy9wfmatJ3W6uVKmq8KQedF5ecdPbP36izN273YdeBgT5",
  "key34": "5aBP2ezgAW2M4rfwh4fpZcPiQJLWKwkHgEFCHoidi7qJF6qDFeqmCs9Q8fe6ADbNkjUtTg8HHbut4kvC6V9EZmQM",
  "key35": "5MKinTtfgGojH3BwMwu5V8RASCEU8afH2MU7fJ2iwSaATVVa7ywmhLRB12eVVvys82nsp5BdioJqnmjoAxforXsL",
  "key36": "55CU4cpHYG5djWnDvHUGqa89iii33a54bMParJTXfs5j7PD6RnY1fdzyDTtNamQFe4ZPtzP5AVsDCnmTFwvKQjSx",
  "key37": "2G4MfJ5qdcVRh5dCDnB9ue5cfDRW26cwXvz2xpQr2cHGTEnv8PcYdLT8ipxtnBerqUcCmjgm8tLfjv35fQdc1hwd",
  "key38": "4N41vFgjqoMNGzUSt2YNi7BxK3duoV8ujeyVummE5SpzEjyAskvQJ4CFP16Tg2Fe4rjZWc3gSoDGMHuDZTNYASZn",
  "key39": "4zcpW3gpzXERe51nrqWepsg36m22TvXzCNQsqwrmV26zi1WvLh8SneTXnAAHphtteoNpLA4hhUszYiPY3WbDDXLR",
  "key40": "4RzPZTR8ax6MFzAVFSwcvasiVRTrwvJqwqnxhfzsfmJva7xDyyNBV3j1wKvvM7b9rna2PpUszu1Kfb1bFBjiVhyv",
  "key41": "33qmmGWyyMLoMjmnLj2qrywTr2uunjxN6vFKJRK8BXN2CTQind2yyvdotY8rJQQdksyDu2vej3T43HYab1PTo1Qm",
  "key42": "3kGUiHq9PH5TRkhQSAjTbVjToHAfpMsHZdTa3eLTPj2sW6a6xBRhMfVD66xUainh6iLAWVW9rgWMCmNQCabgBbPP",
  "key43": "5otrFss7tevrfa6P52jEXKWDizWAuM7ZBFKRX8VnvAdSZhxqrxYrMPHHgkih19cePW3jtFS8KuEn8zRSyd5ktXa9",
  "key44": "4W7FnGwy4cQZHVhrKZQegGWK63jjD84CXxcTfuoomGruanwa7T573bNkxqj5Rdn7PgAKrJy6HZtWua6SQkYgv3Zz",
  "key45": "2ofMZTZ43iAR4EQwfb9mzsBgZdCkMadhFKmLUpjCQncGcoQLwyV55PTksqFPa7hB3tAmrjQfebEDWpiQppPhi1BS",
  "key46": "3fAJzXfBodKLVJsbendH5tiG4zCwUiZXdCpu7KWvVN1JFLNmUyLjxYPDRvUSYFrqjco77WCmSHBYbTZfoJZAhyNU",
  "key47": "2KAnrquh4tsgFBQ21zEAumbKxkLq6jap3Bna8zWVzcCNEvHTutd7eUcPBbo25x8zWxbcfWPPGZT9awc8UdM7scET",
  "key48": "hqc4ZpvBySbQ4TCKJ9hjxZmYxnpD1wTdNFD8SrACi1NM8y462NuEvN5TmKwJ2ZLPvv9jQF21VvaVmNSf24Yjuye"
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

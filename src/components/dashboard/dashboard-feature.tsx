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
    "4ZDWUPhUsQL3h6pMCqSysNhPoW9nefyBWKSMY8X6qgzF3Anp2s69uyp3UHEK4qGLiJ9fYJiUUSW8f3iAc7ekMj2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQQJn2FjZiTzbYALhg5mSTgyNK7UTTFu5AQiX3AyeT5yTqJ6dPxaT9rSZ3V2qkuRMzEQqw1ogpJ96TtHB3zaP7Z",
  "key1": "4yt7g1NmV6VkGjXQnkKuJZBixYhecPeSsXUxtabB2s6g8CnQFf45pHbL8PrLny4YymmdxZ8CzxMyn1pJ44oMNRey",
  "key2": "67b7ZxXkzRV5MJUq95UwSBfLZ8hVgPk9BCA4TwkhqFjafHAJbg22YdaudF1syyoi1C96GDvPifNxTZU6WsvCvYyM",
  "key3": "5MtVX3am994uBFopnK8imGZxRVPrpSAt1eXbSLELdyfdjLfF96YdvznzNZXpShyHg8zdxLPygmLGkF1eFqb2eNHX",
  "key4": "uLyHqnkZ6drros4bK5dcbcTx2wSLTwamJuBAqgetypLGQrN9HvYH3v7Ks6o3rKkLDSogFEMZ3G4KfsX9bKG4BYw",
  "key5": "3EYvzdvPaeVDuqQBoE2ddUn8NPDgacpc8TY9wxbbsDgiPgrmbBD6zc3DLjdmaPpQ9Gy2B8DHR8EPXiJ5KWGECKbx",
  "key6": "5c2YhqnvD1RNZodBf4yb2ZoPyKT1fKAd5uF27BfoAdLTeZ8yyJYKkWtiN5zqeKBJprsUh8cgSZ2Y7RjyAQHzJHwU",
  "key7": "4r3Yim1KFB5kiwFACNU5UVwZ2zgRQJs8NVaY5ptyzgkRxVMrWVxpRTagdxh3XxmShWKj9TgbcM2VoEuy2Q6g4gR7",
  "key8": "2aiMj3saDwNCFnAyVjL3nrvruvzE8AGM65i3sfYh56BzahwdJPKZiw1K5YnjFbLJ4AXxDFSFxD6ap7HX3x6QSjGP",
  "key9": "3bUSRpcXvNLmG4dLbmQi4rBoFCCAa12SbadmJUNf1sQ2bzB1yQtBKKqttLyMFEw6jM8BPR4qHCKWmQ6Vk8yZ3nVT",
  "key10": "dffBcoA5Rwwgh7N6NLLq8xcmVJLZVWuF4qf2mh9Q2MGVrCEctqzxYTKqFstJW8V18wcfnJSt7gFSVozQqjamLgd",
  "key11": "5rxX8yMafENsRiqp4KJYpAxKmqWy3CqCu2ZUyzXscgGjUEmbk71624HGHwVe5rshQUt3YfHf27SHVt1wjJp5F9a9",
  "key12": "4xPs458fUUTY6ig3xF6xjSy2u3Q2T3GoDrsLptUFJnSx7fa4YnSwepaYHuusm9uo1D8uUBZskV11td18cZWuuqZz",
  "key13": "4D6ytH9VQrGjRFYmFFoEjSNycM1qs62h8E1rKjGENkWcYogyTrY4FwafX3z1CAGvhV46HDkqrZF4VLxZQGfDfXRn",
  "key14": "3itzPPHbSFD9uG49VCM8rDd5AU6FYLq3G6aP5KpGaCfmAo6k9XTevMQruzGkkMwj8DesFBwPhk6bXM1JcZjHZwvc",
  "key15": "4RFsf3AnjmrWoL5keqNPEoSzDkdnBk5qv8HQkyDfsR1BDYVexJCXuR8NeYHDwT9hNR39KvKJHGSEfrc86JWk9i4o",
  "key16": "4TsDETqjQZsRC9o4B7njuung81xEHtKMwXz6u1sAv1HoqAoqheJcRfDhonbqAzYbUSw13m4ogcanCVqkMpujwsHL",
  "key17": "vtjnm66iQsP9fB4EKu2tejxp546wTrZniMuMHLVGK97RTHUkGakYGA25rd2CxJ7MxKwHLK3D1295Muf5LwYKtL1",
  "key18": "2QQMPrYFjbpLbBE9CNF22KKQGhDpw6bwH3y1UpMZLNZddL2Kons1stkagHfPEeVLi5E7WJk7aFrTt3kj9Je88jzb",
  "key19": "2SUEqcqaktspoFttNF2xLuJ5hR7abpS9HiXkMk9epHeBDigsCA75BXfyk89Be7aoscko1bwNJKhTWsG71LdefxtY",
  "key20": "kgRq9aj9tgnmsQ4C1JF1pvyQaDEQrBM19TzLt4LYxJWRu9JtJ7482ANoQhsmLDXYhkE9c4ypauWBNdHuUrPy5bQ",
  "key21": "4cXJ19TpzWprZhLWdHA1gaMM9LWkVaJXtPwSMgNqNTMueYjDsTU6NvQRbjEjjJyBSBAVgZ53RowzsEnboKikvqWA",
  "key22": "2wSRtPNo24HxcKY771LDCvfBpsJusYzPpGMuj7pCfQQpccuvgQ9Tu1ZuXM4mEQcdVtj1eFaN8ykahe6DSGcmSoUk",
  "key23": "CtTNDcZ6eweLeAjEWr8Fur3M1iqoDjVt9fdm8W3dTh1hPGVcx5wUsXrKPTvdUfdjKPzJGPaxM8CC2cKeAMdB6dm",
  "key24": "93CMikMLJGEJWtEkCsftFLt8omWUmqnQYKQG35ZDRsaxXoaju7ENuxwMB6N6Yv9TQrAk4jVAfd3zDaP6utQsA1e",
  "key25": "tveBQwSVzCErVxq2SgKJZrgdC38Zwt2B1T1pPPNbbUNGC8yCRq73EuKkCMakCKs6wmBS9sT76kCz9f9xtANFSw7",
  "key26": "3pw8FXNPj1xRQDED7SZE91wYpsMq3pofK8p9jQo94MUti5ndApSUccMpi9FP5f7AS4dNRfNjLk65cijVYSs9agsq",
  "key27": "3H1oX7KANRk5RhoUuQUqC4aDYvhJi3tx9S5RFiTPeDS175csKbBfG65aejfCwhg9uKAxGCaN4Hj5TRX7ZXiAWfga",
  "key28": "5c2SgBNKrjJ6EnjrAf5gakRoHNa9HiyMwGdDeVvGK3g4mcNVFDjBDzUojUvb3FmNZ65PtNxLwPXdSPZD4pGjf8VD",
  "key29": "2uD83jXMrXn8VdUBFNe1sniUKA9qJaSmdGoRXfkRZDuTu7dcqX7aFAjmRiYVY4M7vJ2vTJ1ZByLKTAxjweHkEvhU",
  "key30": "b63N5n17jnpD9KQ49NZ4cJ2LVd71fxsL2NQqTCYqWMjhSNuR4msE5JLHErEekg15A8MNmxoSfHZAPUtbVCYb4Jo",
  "key31": "5fwidRhityFLCcsDCuS3S73Ne2pYcpDs3uvVAUBQ6D5sYC5BTkS7zfkDghmp69fVjB8BjPn12Jktsh9jju7ui3XE",
  "key32": "33vKGywN58xduQsgxJcEPkyzUjZdWGYjNpU234NmnRXpyX8pNdfDkSj8GEU4y4x4KY65HP8zcMwyJthzB8cuzeVD",
  "key33": "iprepWVDF9SnQYRM6aegmdMChbQ7A1UHLGqinrRZfmXbXfvbocrAECfs9WrtMBAJPUc3AVRJSnGbKFpLmeogMS2",
  "key34": "4SNBGswKpHRMkNb76Tn5n6rP3zd1jffsUMKggnxkmxKp3AueyNRrZrwzW2nZZsTR4dyWCgmrrrXynqk2xDKc7N2F",
  "key35": "5Hv1ym3w83aAGMP7VXfsgyPDLazukqrAJTwRAHcanm1vstM6aUVbLs5DnTXgTQa2s29LU6yiaBr2tedYNDA5hmAg",
  "key36": "4vdBw3d1rcwpD4UvAiwdpJMEAKaryRji248aSXvPJds4sZvRfpKX5E7uZDzwFpk4FFgu4BfikZr1GhsJs8sr5GGW",
  "key37": "3Der7oJjmBWsu9X6881XT18iPWNi8yPBSa6Qpf2qqxwRXqYfnZ85hpJ5bnBrvX1y7sKgCMSpuY6P8MZR6k6NZ8if",
  "key38": "Ua1YFPyxFHmgftdcZfVZDUxQKyTvs1c11Y5J5fMrdXqKrnsbVYiQQK6ZZ5hhBMh1i88vrHUiJDpUrWHYuCnJA7E",
  "key39": "5WfBcjsmzFV7i2bCuhMiSJcju4Eg7PtLw4QdEmkicLsZQxeRExkYJfhSi9gdgj8oTZLijDL97UnwkSYvoFGEb5kF",
  "key40": "mFV9JdhwvxWxV2aWJ2usZs9tAzJJ4WVjo5zyVG4agAHc2evewuvoFMjGAAgvcUZeZT34CZfvJQXUPCryqpUP5U7",
  "key41": "5ZT1fRWqSj89kL86BcwLT9gShBbcUcxMFcgF6TdBVCEXgW6yBPYVb8qpSKeVp2wZUkn7Qzf92WFez2uyHfzfz3Eo"
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

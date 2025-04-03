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
    "2SM3xq9VGS9ARS1JEFC2DxpaNiefGoiApPiPVpUjqvvfGGp7dkQAZALhemvsyV7KdSgYEobFxUG2jWsx7dVffnrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZrGZhU24nTim1BNpmoTreqAXoyVMag5ZXpSXyrmUDJP2anbCQvosJE9MiNxNbTBvoH6sANFBMSwkZJdCAQ2LNm",
  "key1": "g93M5QW843GSYgNESJAgJyGL5no4MiRC78HuSkzxzwkzZMDUADRiLp474ZpKaGAHzYazC6TVeSAcvVFiJ93wDd3",
  "key2": "2viXXTFGrdAehP9rFB4TKwyxEQSPQRpFQvV8C77yMgsRXN2CaazqzfFrwmjwUuYXaoB4kifoCXr8HQmyzzFH6MQQ",
  "key3": "2cSTsg1Ur775Dw3kwMpkaRpGUryxbMzPNtpCjcvi2Ku5kUYawoeLNutGtRViCdxywu3wwmfGp8WqbXwRiNdXSQLo",
  "key4": "2zBcvs517tPzFhbXvPcxTaWkSPWeMBn5ny3KSQQFxPpMbr7qdSzRhRhGLzdfRBjXG6mNLPUV2dtAKVhnorpnvSAs",
  "key5": "4wHVKDqEEqwebgYb9QZ5BbQo2ynHhtNCg59yA8Bcgu28jnmPsH5GonTttqFCXXkxaNvcuD4UJ823voLn4ARaXWZY",
  "key6": "ww1sPu7CYiruEFmX5XDMx3ReDsbrH5YLdydLZxM3ASfBfzTRwgemUuk1KvC51ebo34hWbuBXo5QjuBbAWptgine",
  "key7": "5L498pWpJfci1SbtzHwW4Gk5boDwsq9YUEMrVpv4qNR5YhyTsU9DfwLYndYg5QnWkN6XVQq97HYz5qn35ZMNDhgf",
  "key8": "MaN3rTkheFwU9VZ2TeL1zGo8bbspCEM6a5DV3zPNSSz3VUEA8vwM2V4GsGxCadqCcCcKNSbFPe5jRPhLDnU1BAu",
  "key9": "aYDZRvmLKhPzbJYBsyYJXakAv51JoF7aaKUEWaxwi53jnySMfoK8bhWcwohtgu24SXceu7tHcQ2Bd8sSvLye9HL",
  "key10": "3UocsLgCKjVbzD865KJNjNpPbzxqWT12D2ShoPbQJhWFywPhV6pUQHYK18zmsXGzPT5tPnXzXMm9PPHqbJWC6A8n",
  "key11": "hg1JYe1rDfrzACnM8fCRQHr3x4HZeutQDpPdLizwLa7HJ4tp1QUA3U7GrwHXzdGLvDssW79tjusokNhDaWoF8KK",
  "key12": "5jqWkCQ3sLCP9L5Zt9LoCiBnZm4pzpUN6isLpzRkthvRjCvhTpKaBBMjca6eQr2pzAHyvVxvxDsLAYnEzeRKBLbQ",
  "key13": "33mMPDNwgj6KvpadjpkqwiXmENfEj5HjaDUvQPFXgh9XBQ4KmstGQS5AYFVx1xrmn4g2jhhLLST7DSacPK27GyX",
  "key14": "2xEyMvPLB42yrvxK1qhVVYYUHrJeoDnoQqiHTzQSNBXKYX1PD7bsEgSFLdZTGkZtH9kum3suK2owvFajJjCiWe6J",
  "key15": "uDczm6zp3BhH4fS2pKvRHfvcoqphaz7nbByshmJKE9GJsCZVJa4wipym4EQeRv2LstEWvpDSGjnEk1RuESsedGJ",
  "key16": "3cA3wHWuuf4oCjNw3QxtcZ9znQVEqimiA4rBRTfKxDQW7SEbnaHfRHpcgiSWPReoNDL9qrqNSmjvvEtC9Sqdhmc1",
  "key17": "48Nu2kdZa2WM9McJvt2hK8J1PBgw9SGHks3serB8fmvSbHD9bNdota9BzsLaCh4HFzvRQvJafBcdnfSgdKTjc5sA",
  "key18": "2uGNUQHhGpwqjGKqKmDYTg4TsnQduxTBug8JFTw1LcCUkxb2Uw1EMwFQp693mcFN56cuTTKwHEZ95AAFaPnkDguQ",
  "key19": "5kHmByi7VnrehN9f1jrk8fFKNVwogxsgrz4BtvsUg2abqqe9TEKtUG7GB9GAnYzWTgFeAeQWA1nNRx2T2MzQVj67",
  "key20": "2EGsEuNgNvYBYcHSUaB8B7L6WgQ4arNAwv3KXG561s1Wa634kXv5eG5qbAsEPtSQqbvfz7FZWyEQFWUogQRQi2Hz",
  "key21": "4f42aDzDT88hpr9GzcWu5BppC5fUvFyQgwnj5wPsTzZ94pgNEJhghjPsaptFjzjaY9RCqkBFnapaiedsqZdv9fB7",
  "key22": "tC4314kSiU8arovbA4RpvfoK7DNBnZ26wWaFhWaTYgwgfdmVFVqubF5xmvzhh8jdGdQmtmAfT7xTLGYcPATTVG8",
  "key23": "5FgR67R9eaysD5mq2WEzh72PenF5Adgopti97ELPd3oUs1iBDrctuauzNpsDHqKwx7CG2T4ueYkwCnpSwXn25j7W",
  "key24": "2GyTgHetYW1oT2kr7Tb4evZ7tLsikihqAhkyF63a86PoTLX4DvuGnWrCsLVU5ngwfLsebBBYHx4VhvnVtEKMZdZD",
  "key25": "3Q855LwLdtDYwmR99ek9SA52bK6Xrmk3zQBKdt1UmcWirhzMkfNCxAdULH8y9ND9zLb1zhhh4t1GCRWtXVVTkfga",
  "key26": "5ceA5UtrKwvcgwWqdCAhPA8bpxzW31UppNXj4Ja5oRfbZGb9pWTCmiwt4ivP6pUHoB8zWyVMw6Z5qpUmECfs3vSN",
  "key27": "2TtHPQuVTYm6VLnmJsEUEshtCsQN5jczq5EfSczE7kkkT1HMKLo3ZBXwGqEqNh6wsf4wijr3PP77kah5P3QnYELr",
  "key28": "5FAgaR12zXEZM6mGexweVSDwgnoEakCuFWGB4Zo2EeJfgEiKAdP7nzrRNRocZjVbgDd7tyskgQAeRGSxxkGF1jfU",
  "key29": "3VRNBffrsFPQhXfNPonT5LBWctuumaX2FpXtC3jH6FEghkR6iw6H8iGPyqxUNvxLVS4KUw577kfMyWrcvy7S1WCi",
  "key30": "mwgnKkPw6HFrGkBcatnkZXjX6Raskmy6L8eRj29ydymJFppQVPt18b3uabVNtY48rDtqCPpjBXpyseAAeWjKzDS",
  "key31": "4E5ZNd9r5AxDc52M3doCFa5Y6n3BgFs7NHRi6LQgcJhXQgfPQzDcCoGWRDWWyVMhxUjNnxM3AM4QBdnvA1RmsgaS",
  "key32": "2sUZEdZB7rwXP2QGn29JrvPVS1iD6xMaxXEzEtwcKugNykVfkhZ3g5BTrrx3aix6vRcVDqe5snhK22zQuty5GZjj",
  "key33": "4Rff6ou91ASyKuaSDAEWV1KxoFk2E8qPcfhYGi2UbTY6iCrf5kBU6UVWmd1YCuRJL5SSRqxDJUSiPTJVrcDvYJR9",
  "key34": "bPiuPnDbJwnXPZ7LH6K7ivYTTyVnJmoueBgYxdEGPRGfA21VypD9V76BpRMkhdc1CrJsb6QgMTZaq6JroS8jsQQ",
  "key35": "4hwRpneaRiZE6BLVFpiBCtLskZxej8yPoxEpmUJmepAA4SNHZj7C1tDivYziwstawYDBNeicVceUTD1jhnqtS6gK",
  "key36": "5zp9y9sXHwYVow27RwqyMgMRNxsGDcmKgF7tz7egKeu4SnkPP8RZLDo7c4K5z4tFvMFcMjot7RPYZDtoe186FEja",
  "key37": "eP2b9r3o7oENAm8Rkbdv3KYLaAtT7VrnBNMYGwBhSPqA1YJ3r5e1JwqRoumTv9wCEwUMTNFzAhhY31xw5qbRtiB",
  "key38": "52DgqjtWeGoBmZas9NHuBUDtzWdzYGsueqFtNMRc7vfDWqVB4jmvBnDJsJiKZZgxzAWCcLxiJxvBdqX8fq7Xvmd5",
  "key39": "2EYaWEWwvU9nZh8veN8vUc1wCe7QKQ2KF4ktGBS9oXrx6iwCXzvXLbs282py2HE6uV5Cxhg9KggVfafWbbdhM8PK",
  "key40": "4C7quPCghJwA7QbUC7L2NzjvCxfuW2xmBR8WGfCMmcQ1o4YZpHyvV52EESAWesoZcNTdz8SM8w4DSvaqzoL4jjyA",
  "key41": "5Nw9nWMVSaCpn7H9fgZK9UWriZtY37D1GLJahR41jF7wsL9LCgaKUmCUMAfwdVaK37FaK58d9RfJYJT7iayAa1RN",
  "key42": "2b89R3hshxhcVv6F3aJ52kJpVTFQ2y9UxDRyFXRxPmX8ZrSSHfqr7Q2JChq4uAwvC3nP28HFahrGgAzoxmHoeSwJ",
  "key43": "3oEs3xkaWf4vbkBHMw9A2f5VCL8Z5bYTfuk5xshAcTfz9GNr5EFc146iFJsV39ac5G1tN97D7bcKQES9edyiWEL5",
  "key44": "5Q27JK3EuAH627ogiVrhocjdY1Gsq7e4dbTprVysiv3YTRWDiXjjwyWTh7y32JKE6vaDPSWxqNQwskqGYcLfgGHt",
  "key45": "4rdMm1kKMtkKKiiiuveaqAYqheVwzXwNMZoDKeawv832qHmXJNqN4Zocwxx7WnMVfnURVxeqpVJYwNBkYMojp2Pp",
  "key46": "vEJk8wSmyYU3MbPXh2NwgyhDTwBnwtSRBuHzyuVm5CvPzx54fobBzzoQCw6JrSXj9AYzoW2mkZDcwuLSJ5wGVJc"
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

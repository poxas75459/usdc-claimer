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
    "4WdocwZRMFFEkuSiXTAPChq2ec5AHq74wPoWNnbWuV73YPnjUbC1VezFxwiSRjQVWoLhQ7U5qDy7x685hRjM76Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hmiivtiYZ8b5SjxTnA1jyK3HjDQtn1SDSPfHprTbAC9JuFSCAeSFaUnYQcvrspGp6322LgyhocreWhSVoNm6iLB",
  "key1": "sXUzxW1YWs8RRGKeE2AaKqcdHv7PJjMTFJQHnW3goiUgwKyeRaQs4U9yf8rTX4AdX6mtaesyqzcYxCiLBn2DZXg",
  "key2": "5enS2bPvjugz33pFAApYCcEZbkRemWjJaYnC7jtMzDMwPE75JLBnWLqLju4vRqAWe7EYkZSVzpgXi7hTQQSxHkwV",
  "key3": "5Q9GXbLZR71Ec2T236hmmYgvRMaoDPWCbSBXbZTKNcwmSGHEUKX7PCQ55FFnDEgvESbiQgqNpb32xXhEuRoVkpHT",
  "key4": "tSivM384zZvz1mQ5kM2sJo5UMngbD2Lszk7iv9LyxwgTQN18uR1HiNRZ4hLfXKgHeZUqbiy7tiT2aJXzUm5F7nZ",
  "key5": "3m5Zj4XvCiE2hxv8nD8NfbeX7ywwThdB8Rb394rmrZQ4mwAh2KFTrkGR6AVwQvU7cwwJeQuFfXzr7B9Ux8M9ataQ",
  "key6": "4XzDZ8TQMCSRnGGwwbeum8zpy32YD6G8U8rQcH3DMKSJ5UJ1ykjFESUGEr1yswVXd5UXp3xRqDK9b7KmRHCi38J3",
  "key7": "BUNiSpnWVeP5tEaTCgzdvaEEtZhUQYUjMsW9zmWFh4jAbCrRD7WVEHFognj1yK8BWwGtCg3QiumxEVPEHxvkWde",
  "key8": "3zjGkY66cYtxHicsf3XYrex6GRcUBPX4qAvjMLzmpgjvVfhXKDjCd5mZ5AuxjCqVi45NERcUf7qG6yKnrt5kRYWn",
  "key9": "5TsFVHfX68KzsVcqn7JWrnyunyBpn2mXyQSdg4TzfuTpuu9mqyFoFi5cHpEKwDAG9jYXRXHpby4jH1oyxBzj5ex2",
  "key10": "4xBw5JymwRuCtoSKyAHMUYGJ2UKYm95FVPJQkqdfXPAMDB9NkpYkZMSX6YPDShxGUTLPaU8BaocG9DjJFPSvy7ES",
  "key11": "27yt1Ai3Z1UEGErJiJiskMKcfyp5owtdBmRm49ADbdBMViHL1V82NaDUZ5RRXB6yxKu2oyWcF9CKDEVSKhfKSQat",
  "key12": "4f4poPXS7CkUoLz1zGDPVdxiVcq4PLMjbkbUvNntEZQ9ktuYtaruH8LwF8Js6YsZuDivaEDLVuwmJ5bKF2hSW6H8",
  "key13": "gfsjtYJdJGGnzfRp4ZeJnkCnVXYdiLCm54qw98ANoJc68AJ97UdsAt4AdWGVPZaFDbVkbysoQWSj62Wg5TXTkzz",
  "key14": "4sVdfGvv2zjUAL5tnKW8CfLtDpZ6qjqxP8thNrzUSeEh3ZZ6wiXwqgmZ14LBH685QeN5rgB2ZUMZkiypL81eAHQ3",
  "key15": "4uNn7m3LG87DHBp8k5M2jkKQpBXrmBKEbRyNKZ46Z6pqBat3iTLBxSUpzkpFxWYk65XCGnNRoDo6oREut6VX1L75",
  "key16": "3J2q1pvhf5tE4w9LUb3XWWAAnN7KrRccWT9SCNBh6mP1fR7CVVkeL5uj528dNjC5HhZ25is1B1P9ddomiytdAcK9",
  "key17": "5x1D2sck2aT5FEqNQVnugR7KdK515uneQ4iJpK3VZcf7EDVgAPmowFToZABeGUup8gapTFDtdJZyYCrf48eRFhEj",
  "key18": "4UcmKNWSiHD8LpXUnXa9oWQyhFuKd3tKNvHy7D3wPcEo8RiYNvEMefMBYeqBjmrgJ9LACLvsDP8QGivMZjTvJ1Pv",
  "key19": "3BGEYzTpaThRdDXyZnUgGGMTcwNyqtHYaC1Ry6DrJbqvTQt5gH8zVUnBCyfU6xGTcQjzEGga98mwrqh7vqPd2hx2",
  "key20": "45PhPCY2BbPQJaQEJozdTfU7P62oPDsK4k9mhEYHM6Yd93V4BddzaeMgNas9GCtJETfyToM1sQaxjVENmGGKT9XC",
  "key21": "54m8zNh7FST7w8xckKJ1RTDJ3qpNQN7uF7mTmWhmuywDBiLgHghtZ8dmxyYaEstuEUymjvUs5qwL5DoUDs9MR7Q3",
  "key22": "ZBFJCB5JrrnkErpZQQQuTNjf3rqe7bikNU94cTXuEFTEWVLsdwprTj6gCSgsEge3WzYA3WV61nwh2j3hjeGvmPa",
  "key23": "4VpBwEM5Frv6R2Jpqwb5N9T72387baSQTa4FzmxxFadvSJCexzhVNscteAy6nSqcsGjRbjYPWVLh17CAqAhYoWzh",
  "key24": "4WWfrUCUosGxFWD9p3bKA5iMhup1JgnTHSU5zRDNkDkggz1m58bvExFEebV5GCdACNBk5QfqQYdDrib5PnsF5uCj",
  "key25": "Pz3K3Ua1xobpyfw228dZaTrc3GpXcpNGS4BhPucDrr5LVzaGcHfGnw53x3YWaLRWmRgUfJPWVn16SkBusaxSWNj",
  "key26": "671tYBBjg8GJJR9xikaKg68odtB1sj9FppwwRcv9irqxduAmU4tyMZwVAiVUqSN2VMxwnLeBERLejJ9stmx3mqBG",
  "key27": "33s3nXE9ZaBQAW9VTQuJ9B27iocFwhdUAq7JNZViDob7dLVqj9EAMn1o6LvsPzpwtMxCnc9KP9fDAJEv7T5Kx3YT",
  "key28": "2o9ExnLye8yRvscvQ2QmRWxrMfM9Vg24CntVxh7pQGRCMwm1iGkZG1MEfWVReT2CsDf5d4R4B3fR7L9sJ8TJ3dRE",
  "key29": "5xvcYok7XiNCPedYDvxjgUjQAWcgSJqTq5jkobixp7EMEiRuRRNN4h2deF9yMrYT1ns5SFj3a1AzGvV31DYEQMwg",
  "key30": "4N4itBLXZTs7jJEyUG3ryVUWB8ikKSwedGsh4S2VWC2urhZc2B4maUCUX2etinYaFttsDkpegd7Z1qG98Fz5QckY",
  "key31": "5aMtVsumWDTBswczY8vWCb8Anz5qY4UpA14cEjvuAJmEBzEDPdAXuovYQ1dbrXD9DSYGz9wb7xAM8W8gpwbwk2Pa",
  "key32": "4ErbrfeR6PTrRtzmVYTkWXKtvz6so5wy4ARHgedfG2o5VNv4aJUrB9yaEHKqNvP3GD27U358U3WtnAAoXSYQMKdj",
  "key33": "Dt12hhGHv2t8bbqDuNMAD36ty8pM83vHkfbn31LjitEXndfpJeM1MXSig6nKnZzRFhwzQkeB4xL4ZSBVunTYLti",
  "key34": "4onpNpvRJSCJb6dQMAMzezTUFLVSoPeqiyKNbGT3GHDRzzB2VY221ZSX5QiN9T1VT9EP2PpmYcPXZKv18nEKE9Pg",
  "key35": "33MeWf2xLoNJbEnDxTtLLYSiR2Wuf2ZPMTf893b97f1Wo1VZwAEEFwufiM9r1QxG67RQryvT38bwzkkavaeFTVH6",
  "key36": "3EMxqYgcdtGt9xeq5vKqYiHCLRa4VhBxNmfPLvfy4uroMB6uN4g2o17rXFeVFzAsTrbfRqA6jSgNP18WWgEezYkF",
  "key37": "3Lrd5u8ba62MZq7edkaeG1d1GmtDbvuaPnkSQ3ND4jp8zVJQezpkb1zHwK7ZfyBX6d2ef4tuoVTpa932zNapbdDQ",
  "key38": "4rjcdJ6qXoo4MwuhD4mZ4Tp24xJLeQ11RnZerRwVrssuJc2fSYPmLmmqmoB2GxhZHn1KynzRLNeFHQmBg7mu4ttr",
  "key39": "4zKNHNepgCNhTMt4K7kqUmkYuehun7UR5iu4GbSfcNfFFz1UckjemveNftGWQbfTLtMnx9Q6yHQAWmz4WmzVPcCf",
  "key40": "2erBbghVguvr5sGtRfR94bHG2QXE5PqvbCPrNw3ZfZ3GRKtfsFdkaWKQ7kpSgUY2YnJeScVia5H97PrQDPhwfiRU",
  "key41": "3XtL9eNDYLk5HhJpeTiQArJqPBYTgRs9sLGwBoiApu5csMNRcArWeT6ZoLDHq6qoEvqGFniU7N5X8L9qXGFm9x6i",
  "key42": "2mmrBwYqKFcnToM7XAUaN4ARz6wd8qzVsnnKLn3Ezi5Bw46wzYyKMpfVCjTUEiNFweEuDxUJozfiU193emZp6tti",
  "key43": "4F12JQj4XFP5sFibABx78xddfprhBeWbxuJmFnFAUH2s5wm7mcUKz5nwapPq2VR4o7PBnr7SEpGAsuyTRnqZtiVK",
  "key44": "5GZDkDweTn7Zqdt5jhJAVMfTDXX67YcLFvsv7R7RZqYjHUYjiT3DeekzdSdpb5URqXAQnfxGsqCaoWsv57BvSsTW",
  "key45": "34XLXWkoez46hd6m4982m6vRhJ5SZ1VCF4Aw1GSsAHKj11652qMDNGE1tZo1dgD3vECBoLhBF4SPshazFU3w97CA",
  "key46": "3dJw7n16ZS3PngVBJ2jjT98t6iLuxDMyaXPGwxNoFUGP7uoqu98W1pPkGx4exxXfzECYMYedVjuAN8LGXzm5AWtG",
  "key47": "4txJtUK2ZbteQfZoBLQsSjad2yqjum3CanJyi2FW8Au6ucbwoQqQ1dSRaGTB6btxxBt1zKkpoZuNKnXRkg1HYpn7",
  "key48": "4y9D3unb2b9AhqQaDicgBcBUNNXvPx32hXPMhCEhKTLPRxzoWRAkK6e91M6N5xdrYUnciZKhK84VYythUmeC1voG",
  "key49": "36PUTLsbQ6LkxFpzrh2XWafkQeJha3c3eGvKGXZ7hPKDUJXd618R9zceyZHhVVVnes7iYf2z9bh49xKWisdZgaZH"
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

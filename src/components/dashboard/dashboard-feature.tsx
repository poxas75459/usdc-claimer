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
    "4ip5Ggde2tRmup1S7zrFhnzC1cyWX1RVL5PEmwLqwyghQ1WVQyjpC67HcFBo8pCCEqcg5c5m5dFwecM5gqss9uxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mix5REAun4XGH9w9ngaD4MPgriBGZb2xCFED9zZ6fVZ1nsfokxnpEv4K66JthX4PoT2idBuY4VjEmHNJqxpDvYL",
  "key1": "3a1ktSnfjZDcEZnvi5RAxu5MJmNRCMXbth4KPJqWQPnonMtxfeWZhbKdn1viTQ2tjyYLnm2UUKEKFDdYxpFVxJs9",
  "key2": "3gVST2dUw6SPUjuuPW6QA8fXxyaiqduPkRJcPHSfNamwzj54WBB5YcKsLf9binU71LvQZjyDujniQBerDJeU6GvN",
  "key3": "3oborBbjRVoLEQvPGCV2r7hp6AmkwP2eMq3sDw9HzmZmwtk9JxYCqULmrL71iAjnP5kVt4k7ZDAyuKsK7rG8hKSG",
  "key4": "5kWSKmhzcduoAoYck8hzLtt85zGzXpreqNgkx4Lfk5ysyUoyHxvThEZgf5Ki46N4GPgNnWpMkVRgj4CbHWiSRHnu",
  "key5": "25Kspy2kHbQNQXQaGruYQNVPY8GmgSpFjKbuekMH3mxVmrWYcHcrPfByy5sqJddEhwusN2hqFHzpL2cfJ2nNJ3Yg",
  "key6": "5owqM2QYUBuVyUvoXBUCN8oCrfH2NsTtzFvh4878FcQmaYWf7G1fZr8KtpZ5mYXz3Zm67Zy7CR8R8dtMDtSmxijk",
  "key7": "5731TUGTw3XMrrr5ecXRw6uSCZCuzaPirGcWMQacpKhQ6f7K7a9yCrGcx92jyKoKG2f2Ku9tUUaVYHWauGHVQRH3",
  "key8": "2HXRZwA53s3xv7CAu2CtsmzaWfr1bAsMi8BqxVYN7kFRjXh5YcX1NbHco7m4A9omssGqEVXxLqwHvMpPM54PjYoT",
  "key9": "24D88ByQs7dan915xErJzkPpo99Hq4ADSa2yttUp9abW4kMeWwjF8a5S5J7gN6UzXdmezp99bK3tYytCnws63noJ",
  "key10": "4yt9pomiSAsntpBpYCYWPQDQ8L6anH1rhLBiQz9Gh6q1bukm782SWQEPsKi462KHyAcqMqYAqAZoeAx5xJV1oE4W",
  "key11": "4nSYstdgVLhSeTcUK6226FPZjPemHfhFQPJTbzGC7oXHgzd5RUabMtvMRfaRgzMkKpYdkmS69yz21Cx9dXMV8vRF",
  "key12": "3RvyVtzbL5Z2AK1Dzc7yQNuKMWAqQR6VWLukP56qhvCVjMx9d9h398Qm7YWYdzhrbJoyZvpPFE1bs4QDYtXdUUPZ",
  "key13": "25arR8oKk3hR6miwtn99p6uhD2Ec68vzALY48M1JwLSEcfDBLQWDc4LVS4KBKwvRXgdcUcCzUeopqj8WXNxoSQZV",
  "key14": "3EfKaopZRRnkfp1M6vgZpNUL9YUQFQXncHVH5pzRdDiGCmhB7kYR7dXrFVGvaX3wxoeAa9S3aNK7sqkBt99ShFiv",
  "key15": "2UQ76hGMXBB4FHinzAU1ZPHpm2eG3Aqt2f7txvuPAm4Z4HhdWQHeYPMBv3PWJYB8JV72mHwczCmABKKtEceViQL",
  "key16": "gLcLDsg3ssxo5qh6oTSfHHAX5roimjYFffhKXHZt65MYNYM1ZWE2q4E1ovXsNVfkY2TqoDWoA4tRpZbPXpZ1LHX",
  "key17": "2VT7pehFGiWgWfx8hTA8opmrRqMvg4HFZoXxdEd84RSBakfQZLNxdfkmqU57FW9W7txofby7HMEECbF5ELMedQh2",
  "key18": "vBjAFPkUKcpEyQfFvK1BZNoL7BRRR9FVEgw7TtE8LYUEZcFu23H6WftAE7u3Y9Ym7hu5fCCo7Z1mJRiCF16tPNA",
  "key19": "4cPFmfj9fCNUBE2ZkvVmidFjL59xMvqKWcXEA8nZz1TFzdbu2aiXcq1wQGNDqz6j9mtJB9wPxW3Q1HyaGHwFgUmb",
  "key20": "3NmU5me19SqC3yjtPm9mL2bGnMEXdVCMuerEWRx5LSNHbrBBZD13NU6nJFCC315oUUZWuqsw7TwLvvy7hhguch5d",
  "key21": "oGJ2pJc3VZ9yuwvjesZ4BC7AyobEkpKXd8mNeahtGuKo577Q8rybvVvdK7zHKUJthnJFRzZymuDaeRJahMVrsEd",
  "key22": "2Ud5pEKJLobohNPBK4e4JAi2HJogzrvgXKNqrU7XGiU7ArxGrqAt8EpcP8Mv7AuNxJkGhRyGraiCBZZDAa3CM4sN",
  "key23": "3p968xTX5cJWdQLXXtAvjJKdN41HXRtWun39zCa2NzGWTXzafpTUnDWqstCHq8j5rnbAvzU1XsgubCFJWyrU1FsP",
  "key24": "41WRbqCpSzK6auBn1q31gcXzd6uck3oWyymK5Z7313j318CHFG4T5bRg6yzu7Ec2zbT5iXqvNGdK6sRArmkN9A6W",
  "key25": "48SJGBYyXL8DGt313vCohEeveDpQfrwg9j5nKwSpYmq2mQgRQABQY8xAvmGkP9uy9QKsZAkqstJHZ86SBd5EdgW6",
  "key26": "2Q4Cp9Ci6hLehcrQBC4PyZdj6XTRS1YmCxqbF2CDTJaE6ppxeLd7AYvzLkpS96pVhRrU5PWs9zt4ytcVvQQRKiP4",
  "key27": "5QVkndsY5M9t1Md4q3Rn2JcLDCSNqH3iArgLqGV1GzXJn3ioJTdxPbQ4vUcQqh82G13Jx97UhdmvctLdBfGSuT2K",
  "key28": "Ua2BCrGyr9C5gmFeZ5g6CNwE5V6G4PZVAp7CpsH9ce2hnYMXSBDuGiaUWHYzE4Zd9qmF3RbpT52buJSrJcBMpkR",
  "key29": "NuTrRba2SmnvzmnhRd9EBCWKHLiJGhgQKuM9Aj16ksx17pXQ59E797X5MYrvCLGPyqb52tiuJGKfHqA1bTxaV5e",
  "key30": "3RfR8cL7BMpiH68waQBvs7aZHKkWD4SLgGfycAFUuJxwbSHpL5xFZZ9TQYKsm7pmdZVw4DDMxY69GRAkVkwFJ1Bc",
  "key31": "2M3QJ7sc8QxaDu7Bw4qFGAUknfB31WEF19nWB7Y1FcdJkfcU8CXTyGfXxju2Yjr6pYZ3xfWY8Kx9SeL1FJncoFyh",
  "key32": "3WRFDjMwT6gCJEnCb3xSAEQ7gvaVPUZgFZWHjpAMSr3GiLxXkxTrLkdW3PvZCJhvJjULsqKoFzi4o1qLAMGK9sae",
  "key33": "4wNDgXn2jrorj7FiQ6pERaRihxhk48rWn7YGG3Miary8uYmMz2EbyDPFaMKrwEBSWSDgWCdzM8P6j3J2mbD1N3P2",
  "key34": "3ie2CthAsGUCPNry1y8jPGd1gEoSsPmsjzpZqFJMmH2iPhVGAayUrXtG5CKrhB3SXomkQvBQt4pYu6XswJcuwEB9",
  "key35": "K9FKnoKjQHYuCwN64ueCmsqGKaYGQ1xBKfvZDv9up5roiEhWPDpJP46HuzZYXn6XPN7CzyULLaP6anUCqfyWrzP",
  "key36": "24TsfqNkLswGrNZxYnZGEKBeb2DCBwu9NLwJBntxvfPBucXrvYqLcQTAFvqHbJc3XTWtirtiVfJwGs4tPLkmYXpJ",
  "key37": "3RPgUsQdTfJp7Rrq8KbpQnYprNWAk8573W1mR1vtg3KwZwtm6HAEMcePL7b4j7cGfkyT6B6m66jGNKFw9DCHCjL9",
  "key38": "wUrkGfQDMdvt22Wquww2dXo3SUByneUj377c2uCqW1PxxbfzRXjSeHUwnKMsxVwGzQahxZ93Ta2Cv33wokJuvfi",
  "key39": "3wfxsnTYZwwLFEAES1uwhg1si1xwn29k1dQsobxGzvUNzU6ZP2m35qmH5baoUwxsQon6hdHFcPpS8ZFkZoCJdTsZ",
  "key40": "MQh2wMvX3uyWNwqmxFigZCiZZkbpRELRWmyHGS52dXuzNZCWcpYngAsiUja6vaKgHJGco5YhZCNJFdFqWQw6tB9",
  "key41": "4RfAH1hMrbE8s7RiHzgHqVoxm8PnoD8A93caBQbC8sLYv3SoMkX99CowmqFAmFjRDxXeQN45CUJX2AMJXopYgFuU",
  "key42": "Ziu4NZ6avBUDeEzmYPerwvtXoJkCYki8E2HWyyMP8F7hhVbgPV5kCgLVwmw6USPa66xwm65Jvg8cB97ckToE3GW",
  "key43": "5EbGnHfFod9UqgQ7AfYkTcQ3A8KwbCJCQFgVk9GKKSQNVvgCssZTrNdkDM4Ci1kKwLuLkYTHCNY5Fs67MxDjJZYj"
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

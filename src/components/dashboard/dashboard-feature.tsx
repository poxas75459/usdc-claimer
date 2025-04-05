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
    "48Eeetb3Zt2kN8Dv8rTsze1DhwHeX7JoeqSWrozdk1QyskG5bYYRZ3VcdAXFHqSRTAiNbV3mQDrFAYXM4GxfUydw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qXcvJgPpbKZZh37BvmSRqR9RzVV4jEtnnF9p5pxojNNHi4L4dRGbHUFgnPzhTxNiphNjCELxRAHFjK56xJcpHr",
  "key1": "4qwcqhh8xkyKnGwdtndeWCJ9hjL7oQSVVFHyfdxEqDEKhF2RamPque1nXM3qDvx6sT8G8ZWrQTadJNWjMs5UKbb8",
  "key2": "2NoqRkxaxHsmbh6p2zibNFw5j4K6GrJVCWocbX3vyWBPPxPVhLpU52aFPdkPCv1T4QBxeGMcUpBwuVu5JaueQ765",
  "key3": "454FLy4hoi7gmSWA9vrwvtk1jBCm8RDB6qnyGZDa432KrcusPr38p4uB1bBbGDr7P4J1hWHGJGGeLoSWqiVwoibZ",
  "key4": "2x9CDmL7kWWP8ib4r1Nh6ct53gq4AKfqte1DniVTm3Ah3x4v95FiM67j7HWa6ZVHCSSL7wrDXLfqF3aHb8YPsKea",
  "key5": "2BS1DoAif1t49JuGJxte4Bbnke4k8bwpmzmgcNrP4pdMtXgodkotyYt9sEdHr1HNx3RiY4gkqAFBkpA43KaJEtTT",
  "key6": "4fPaVCVCwrLbzgYU1TG88Jm89v6redccMNSxPpaVRR3A9LtM8HK6WbQPaPgGA9e1WXhbEmix2Hap5vtFL8gwzSgy",
  "key7": "4hMGE4RuBT2fQZWhUx1E7EPZvYeCirABjQcVpgYQHxsG4o5bUkG16wfdR5MWibiFcSb4dxdjYyKnQXtXh246RPAZ",
  "key8": "2fEJ2SKyP3nZJSs5s9tzGagoFSZrJpnABULkYJMZz1ELVakB5jPLhUkTSvvT4yikfSfAuN7zskDZRduv4MdWgf2C",
  "key9": "3UnF8ZWjt9SWN1jwA7eoYrGv8tPghYRexvn6GWu6CBw2u96ifgNnvSfvSqjjtjy5DUQFvtYAgYTmUA1jL1WEpycV",
  "key10": "4KV5aJPoHUWE3H7UcF8A2uoiU9dfpidot9nCufxzVSmUu3DsGBhNNubao2XAiRUnp2yc7i4i4zyXd7PSz3pzba5m",
  "key11": "5asaDL34GAZ6KhfXYmjwX6mAQqPw4BaVbXfiRDgfhE6ykML4BnUR8kwKD8HJSdnyz44EswZid2kcfbny4bQtX1xe",
  "key12": "5hjpGmfZJNKVeLx94Xa1PhB5PZLoWE39JJGwcZbvfELbitwxFY4wtR11nuxF2ZTh742vK1w3xhjFBZYtDSAhXinb",
  "key13": "3zFk9WearbwfB79TpcGhuEjWwUzPzTPCNuDSCqVCESViKz8VNnQzLVrkjVM5MAor2G7AFiMTzX7EneEbh4yua3Wc",
  "key14": "9vxg2CoeaEsvmrtq3wo5U1Xr7tTkSiNQWxJZbxRpX7GahjXQCe8XXYnyz35P8eBQerKgkjDmMvS9Nk9FK5PATXG",
  "key15": "5KFHyDoyAuL6RUEDuTWMsgBQSDii42GKsHXTj4THNSRRAdDB15vTN6xxgYnTPqY86G5WohRRTvU2nC7GnqBjYyjQ",
  "key16": "rb4HCWZHKcGgLoYXibrQmCsSoJYfwRYQ3CxRRxJer81yicA2ADNL6VBLWUJB8a4kvoK2mc1kJpgJ2JWXguXPMuD",
  "key17": "2gqLRHfy5iQNNkbe8N3W8P1ryEDov7zSw8uiWuYcMUEDKPAKuvArtzGfRcCxzXny6GyPpK6GyNwjaMm4vRNhSJHf",
  "key18": "4BS2PEP9vwrd4fYFdVRSu12V6MiT44VCoXtZi1vZf27tRq97VQe5FBuSW1dPRPs4qef7ZacdNZVMo5aVnJg2tHA7",
  "key19": "6inrhssZqYtWtYNVcgn7J3yXxnx6oadwffj4b4tc4sX215cn5hzwNXRqwp46MtadgrDsp6ebx3ijmddcj9VXB2J",
  "key20": "2UnxYWkuV4dEfojWJXTftjiPiTWs42P9Eh9X2xRMyzMFpxVvjLZ7CtJq1ugJ1p6WG4YJW1Uf2c1gEmyfGDL8gJWj",
  "key21": "5uR6Dg1mJvPKYaXFVWzafuqwKmujcdZXDVzNQTPHcSNgKm766YMLVgzfk1942Q6MfHR1heq8fUF5M5yGTADLJjoE",
  "key22": "3pLmo2NNnB1BvV5k1A6p3g4BcmhFCQSmqECij49GzgXUamzXDLjNkDLnGcAEgSdizKmLBbJ8oY98aLnxFURKAPc1",
  "key23": "4mWWMQtEK92QGk9yx6BVXLURCcr1sPBnV9sSHH4rA9jwVRr56KGfjrP4BvCBnkxDRy6WoLWynPEd7cgE797UoGq4",
  "key24": "3D5HVGJNcWHBWM8eeLDJ9Euxtw4ikJvyZ1gZEG3yKGvtzDSFMz22wchxLxdFiWRFqFJc2ov6D6ekBzFoiJqL7f9u",
  "key25": "nNZVpvJbHWLwyQ635nCCBcGbLyNdRQAAJg4BimzPs935nTYLD4KjLUML2CEZhd8ojLwThQMACG5ub6Fw4HghP6P",
  "key26": "4TKTLzVmAm2kbxquH9QELbkjR4jQUwe1HrCHxb92e51hVZPAkAsnBZQb1auDYY9DHZQUnNAXY1rkawRWCT1zGL2i",
  "key27": "obJ2sRCyWDDVnJU18Vq1q4X6KKob74b7JPkP7j2RsLdJzRdoKW5YMPA6n1qUbS6xeKCPgCYZ3cDnf1vkJcnUJBF",
  "key28": "5FkS8un246zKWdaRC1GZWmtggPqKcCt4JimmHaSxQDUXXvEZoEeUyLXdGGNoe5Yccjshc6rC5BWM5EYwTbTuMVVG",
  "key29": "3RVJs3HUmsBYmd8kaTBGYRZEQot6iUgfLyoEhdiVkmLaDL34RXKaXQMTwEiWAZ9pzvxiRtu6twnVtuiCGki9JaYd",
  "key30": "3yiFUYaCw1d3QX6T1UZCfjwdWbszqfM6zhjw5vSJagvUXWUeypEnxiTQPA7Df2zTrzpVkkcEfJK6zuEfVxTqP2YR",
  "key31": "18jCK72BLLbv3JpNXSDuevZ5RDy7gda62CdvRKnkkHk7x8mJUJM7GV1NnbVZbpdkR3bz5x51jU6G3rxwf8Eueu2",
  "key32": "4s2UZpC1ZXPPuvEGzCVgTHUJLxGR8Rizi2CC8bMsBojP411VTt6NhX335S4yoB9gHb648wwNAwiRa7uJoP93Xo5J",
  "key33": "4KEpjXGUGwvP49y12wxEFf8aM6Fmowfnpn1xMXFcnSYv5k6Pq496PpLNFTFg3VLamaBQ2N4oCGERvvoodpvcMXcM",
  "key34": "64XYVt3G9H6zoT6Pn1gTnGcX1NNwSQ3dcHsN5N8MYRT3aQHGamto7ugscLiXnkde3ZK13wCCPyhnqQJScBhytp2D",
  "key35": "2ypdKZa4wkZZrr5aZcWjjhYYahYoqXMSnLrec8e84yBKGMFm6yhXufziHQ4rS1wvibpqMkrpwbaXAVmygxekTJZi",
  "key36": "2dQPzAcCmsTFzNVvFjYcxqJvUbRaqzp4wmYLebFAi6TYjvXwqeWzMetCcWk41Zg5dZNN3CGAXnGoGpffTJKScXRo",
  "key37": "QB4QpgTeTCtovJLnLXskcqHY8VXgk6Xob7X95qXf6R96qUeAS6RjRGY5DifahHMPB8x61VNJvGNMDsCKhn9ucmE",
  "key38": "2f2FkdRPpMhayopd4VNbtKtRQoVfLJRwP2YZRZxX5qE3RWArezUiVcjwfY1EGsrvuLEdhj2DX2DUDS9wFEPYkv8h",
  "key39": "42UJvPdX51u3TPUNMV29HUYU1738wmpU5pU941eAUhxA4sj9itVKz7id1QKDpQWmTDrYZx2hSLEsdMxbsVQ9ENk5",
  "key40": "4VboThrH2jg8S1EpN89RSAv5m93NNBgHv9A88zK8NnscUXu98sgLim68STgkHFKYQdrD1aoZMMJ7XtaNQmAwWvWM",
  "key41": "2EeXe5wsoZ8cJjLJ2jGyCZwFmmdSX51ttvonbar8Pb4gkwTmSvui1udUDAwNZwbrj1eMewctu8BpiEMfGpmXmEi6",
  "key42": "63UyUEpZLY5LQCSrpB4aFm7wgvPDbi1ZhV2PTMRUUfFcRRkizjrz2oc9sLuvwjuQZPyhGmZe17xXppoCVM9fMWds"
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

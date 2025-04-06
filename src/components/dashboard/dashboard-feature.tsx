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
    "242um9DjS8mNjgk6HhvpvLaBuNNkfbGaXjekVDW5qu7a6AaQrHunXXvy5XYSf4aJ6m9H3HwPK1VHGvKg3uWTFyPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3qet95vZbZmDwqSGoLexBguNaWVBvQY4h4ASKkZmDuqRKCQ7ZV495cxMvk2EuzmV7f5vFzVL5FZdhYVHZFh9i",
  "key1": "5Etb2e2CJBxETEfkDSCNpHRYRTiLZdGuAzaHYA8DV4yaqQFosSxNjjVsjKyTyuUk7Ni5qAoBi6wPh9GTwhiEfMhZ",
  "key2": "P9Qs5Jm3wH9Sj9uQWCjJ33b8fbKqHNq8xixp77jPa4NNzp7rfjGtFevhRauUoPaY5kgHvSRPoZS27VagFGSJ3Yp",
  "key3": "rtpDYBGZyyxHgDmAtZxXjDq7623P8ezEvdGf3Sp3sNf3885vksytXrRoxWYhmF2DWtbrz19R9tHpVhLt9HxcdVW",
  "key4": "2gRWjG9hcWVhx8v5jt9d9DqXFk6SHBkDfCVXFwEctsf3itBHpLuUERjuZyrcqsHZuMUxvzf3ufGppP1tLsgv1ZuA",
  "key5": "5megK8XNN2Vz1kh3aD34KD749YuM7d4PF4sbt8GwkqdpoGophnJWmjBPdB79whxErbNA7RJQPmUXQnT8wh9q2EQh",
  "key6": "3rftBL2rfdG97NBLurE4DFdkdHg1BJfxKKYoEQs8p9ecP4xjArzVdzLjgkMkdtSgMxeR1aMVMaJbDJLouf2hEfge",
  "key7": "kHKa72J3acij1QoMQH84przuRzF3acLd2J7gsGc9vYUDPNEeop8r7zxYcuGxL6oVcHy6dXTNMWkmkmafPNrPW3w",
  "key8": "5Uui45gbcqpSzFKRUJanNS1wuZU3gubABWP8d71tagJG1ahyLD8rsTDk4hGk4DGdJYJKKJErE53DFveb9rJ5sYwJ",
  "key9": "4pEWrK359ARWbK5qKdpdfgibuGL4sPBfGMe4PAmrjuPWfaydcSAVvndDDe1EXrLfTQ1YVcX9nBp3mwLswt9qjEWk",
  "key10": "3shGxEREbe9taWo7L5jTdfgyoXZJV1bmEEzY1QaMrpZgetZRYAK3drcxcoTWDhv9n6VrqCnLJ7rNHcB789MCk7Qb",
  "key11": "ktZbhCDmooAoLBJtpdfcbaum3t3RvhEELt79JAzQz2X6sKK6h1xQiKCrZCoPZGSgJV3fYfMQATDEG6xvpLHHPjz",
  "key12": "58iiV2xWHBknFbpiEJvryi3xYBJfu3Wq4Whn229nDtkZwxSxbAVTKoiXxwGTETVkNaHfPMK8wp6qjVtmGXHdsZRw",
  "key13": "4sM97sPLKwD8sEHkQEty5vdjchg26rysqjqRMEwmVvWBXcCjvjXfp1NjQ5rgWe1uGTucFqwtXe3xtZd9eLUEsftt",
  "key14": "3yqQoKrtJY14Qfm45uMc5459EpA81J4id7YqG3JTar3fbiULxZvE2nqQz3BH7BecaMFX57h7chAMk2U78w7CxYHi",
  "key15": "kj1zzMCgJPJaH2MH5p7voWnM2fUkYPk3vP95NUqWNDWVBgBxbGucgiAkw3Fb4zQewMz2yHNFFWTn2Yd8VLJnT5V",
  "key16": "2u35cMXkHbpwWa3XyBus2qaN3UevAd1yLp8DyvMWiSZrUQp6nrTCgisPNY66u12hokrgKC2xxDSu4mED5sxANFP1",
  "key17": "2hwVTgXLZwPkEvHzZo3Mj9rZSur3dcBEZkQ2V7ab8eRYbkJNq1HL7qYgMs9nshWiqXDxpiSKRraiwCNeNbbivuGU",
  "key18": "3Fku8Umwd4KMJ33kyWXiQTCfqeBTSzjiK26WwSu8KagkGAuYYrkFCHvUQvNeazXrgWZxdaTHW5G5ffUNUqrtr1AW",
  "key19": "2B1o8DSMge3bnPS4tWxMD86sUrVbBi64vbcwYD5eKH1BbjnLeVYcXwc58zUogCBNv51jJ8UQR1nGiWq5P1GF9aMC",
  "key20": "4o7Ejg8GKJz91tPgQ7Mbs7THzkKgHCi3kocCFh6GZNAnyEYwppyUL3tH9b3tZqBC38yjYJnaL5UWhKioaHkqy9Pn",
  "key21": "2wep8i3ErGHHL9RmdHSKPhHVpbiHHq1T1n1PmssAZAipkUp3bGFrXrW4BEEeLbGtMuYtENzJzpPjoW9Ej7W2piwV",
  "key22": "2YDjvP1BgojAfKaAmXdaToqy4vSEvJgPbiELeiE5hxGDEUMkHsbQbNExxMHeAKbd5u9Pz1XCGufFpiHx7m614pS9",
  "key23": "23cKr2Lkz3MoWKdjLwCps165VEAD7jMZUfDDASQMKWUJMZ7ax3794mNiB4mNovgbttM1G2B7Zx6fVFtKiufhj6g1",
  "key24": "5u2rLABMv4joVPg1Tst52XnK8c2L2Xqz3HgVSY3DC2tbGHuZ4BVg2RzaUjuLQfDsVC66kupBuutJuubieX1HLtuK",
  "key25": "3VN4pnrqGFTFUQrEmbSWT1KXaA858FHb8P2mhMmWsXspL7xfdUUUF9foZpmqN98JuEKSyeT6YFJXRonQLZY5iEhJ",
  "key26": "4o6Gf3KedrLTa63wymL6rcMwz42HyMw4FQVA7aFRX1TXXrFM11sFEvY5YTd4oNHMpK7fKDM7qPsgHHUhHFAMWFwR",
  "key27": "3hhHdu8rcagFhJfBdR1ZPSdZ1cv1ftcTmGA4DEuzgcDbgdtZy8jZ1jC9293bhiHpWs9q2mvn5soD6JWGBw38uGvQ",
  "key28": "4M2pW4ufvBDuvxhJPCywm8R4KERZ5HermYWAak1horY9JukTm6hMJAi9UcVMPP9kPuGzv2FzBQELE6jAXgW9NYzL",
  "key29": "3hiu1w4xpPZBk9wkpnmkmhM3xGiurTziCmaksVQnt7MnWbAKhxjN43njC7HfKPiwzFoSRV2NbVJHUMJGYrUe1ng5",
  "key30": "2sj3dariQigtfXmGzhYRNHQmntL4KFoFG7vMtZ6EKoGnyJ41nts4b5iYMKHMpttyhP5whhNtRVreux2MqYVrELie",
  "key31": "5ZLjSCETZtohXffjsSRheYAFuyw6hT4HePszC4oynfMFDxc8Nd1tinyknrP7Jr2jJ3iYFiQcLoBifyPLCVWe8jB",
  "key32": "5hNBy32wRxgDmu7XekzFL9uAGCmquLuER8gStpckgRy9HxFLqH6UXHvBx3d7pcCxmBcL88zf5kH8odeXSzM3RxM3",
  "key33": "453gBmFaCXGoUrwbFyYKse9yoT8q36dR8pdkSbnZ3w1Aj7e5teGEnA4c99uZqG6H7Fo1pSguAQTk2KyhzQG6Ws9U",
  "key34": "5q5RvRDQAWX51k2VcasqyynFaD79QhWqZcAVtEeDVLTeGy2WVQ8YQ6QSMArhhoopgHTA2yurnG91fAFpHgonPr5T",
  "key35": "3t6cRhbXAvZqZdR3qnu6xg4npRkS5DaqD9CKz5yfhy9vu1UrYsPGLz9XHeuHcp38481bztn69bCcMabZ11GT3jf8",
  "key36": "3CjwDyrc6TnXjPpjCkvKXwiN7rYuZm2fF5te5H8YzWKwejhffBanVvnBjV2m12HekPd5kQ1cu7L4ibhsY1ufmd1m",
  "key37": "mTYLoLoUAXxM7757AafDbCuY2iSncGZRKoJfSBHEij9GjmHiyRf1z2mddSWuDdfbDb9R3oatDQEjoY7HaVFG9Ka",
  "key38": "33m4GFeAFkMXVA4zPUCzZ3LnFDHAxqi5ThuJtHv67hKEkEBpoYngmqanWyTVFa3konBLf3WDGfwasmGGSVuGnzKK",
  "key39": "5kecYqkBTCK4PSfVrW6L57Nng7oPrHMVhvLCYqbqdP688nQkeRaoRUVB2a3T641GiZLNCuG97YPWSEemPxzSrP5d",
  "key40": "AoaTWNAGsPqEvzeUAGRvG9tw9MLsRUzMzVX6CbdrKq9wvJct58M8ei67tDpX4UxsdQ2M3XHkk62RpemCGhHKnYr",
  "key41": "5DmqWvPVM9xmCP1DEfvW6UQdvym8J3EkVJzr8zToPAhM1YoP41jkpCHnkEZJjY4wADXWzSkr26Fb8mgVcMEextDL",
  "key42": "5iun1vBhv4DJdKwPmzBfEZaUHBARpGQ4p8X5imLAy3PkaWoHMReyxCxJYQW4up7tYq83kcmFGwQ1zHCUFS8L3Ze7",
  "key43": "VGEQBAMmWa2WQTzgWC1sVJu3PRoYERYktErzCfFXa3bo9FP5hzZcdXicNBmgjgXApmJauyrMHVE39iCKe4kyorA",
  "key44": "5GESiNu4cXRQxvshNugH8q76CApf1StHch9AY8ebu3Hg2tAhYrj2AYcYBKGP1m5nCJxycpac8U1eqdiQtzEex84M",
  "key45": "43qVvF7VzeUxBtcYRU4ctEtNW4sitJ5qnURSDfpxQ6Ai3gQxrVdb4rMXw4spG6sWX2jpmKVR7ixwt4JB6rEBzdro",
  "key46": "5oXApfsrqJc6GxuN9WKUYH1R5DStRNaz861YgijQu61Vp6TwRCFzRbmWmmXugutwVUK8EjqGY6NuRg5t8gwST6J7",
  "key47": "2arMoMkZQju3MjGJkQU1FLazdK7F52V8hbExCu5zCNkANifgWude8rXVk9kck34kd7TPhx8FYCFH5BWivmwKrTY3",
  "key48": "3Rn6PoL4AEC6wMRDspJz6sVmHfjbHvSgkAoVxVPt9yRDoGXqe1c1svGGa1qYAvzZc5domWNk2wPWnyG21ecBmHcz"
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

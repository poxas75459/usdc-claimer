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
    "qZmNd8GNdFX9b6YAviaJtaMUXGC3W8xJpQrGFCPP6QJz5U5yoPpoTwztFnAL2b5CcaUqNpgUFENuc1ZttYM1k94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHubsNERCFUj5oSdyiqm3C5mtCfUCZhuC8mN5sQPxUquKhxHnLABv6cG7J7K5RerCuYgY3GVZz7uB7FQ2d56zKU",
  "key1": "2VgSweKHcypkn64odkSchK2441NHMrfLQpuUzCZEhvL3zzTAsx316EbQxmuHYSAQGR1Yws3ZWgo4d12usuRw5fB8",
  "key2": "5bYLVELruTiSSH4mCcJbNHt84y3Yh3eKZjQqCTVx7rqQC3SS7sumTeYWaThCA1fcT1ZxMLrnuLRPn2QoZZ5N9Cd9",
  "key3": "5Rk9NMqDH4xyDYdPi797DxJp1PsQGWMWL3ZC35zvKzFKVaoP4HqPijEQApS8BTt1PjBosbTECZ2iqpWSvfr864x1",
  "key4": "22A9FeJdwfsgMGQfXT71b3GVuFadaqoGz2hYauif21UgmYWVfnVMEHEhdcmSXvooH5RqszXn6eNS4snLavc7otz2",
  "key5": "4UcCEqGP635vhNpVq6wk2DrPPtsoRtKcNJAf8nKM9vSrHndarVFXuU4AsLRtZzVX5zXecyUhJetLRvrTNkyLhB4T",
  "key6": "51RYqvairU87T999omUvZL4dfyuh8nJnsctqJjcudHS1nRnfJ4fHsaUp9W5Dz6U9CgZwbAXkeXwkcVxHGVwU4fB2",
  "key7": "mLw6oJSHq8VvDpDYHJWDuAoRFfNneaGVpY8hi9hV25bCmqTPgrv393RRqgrnMtiSAV8TYq29VwDxVamRS5BYzWy",
  "key8": "eTBuo1fg8e542FdPghziA8pQaBJxeiSMxSD1pSGbnDzHLSYphX2w5kNYPheB8B7EVirWt4urGkZ72qVbWqHkUAS",
  "key9": "4Eq1vfsnmW1Q7wDTYQRMgtWm1PidzownmwUxC9CVMk1gvRKdsnftss4fnHCnfhNPazXYpBxeZD296jBnc7UfDiWo",
  "key10": "LHa4rb2pqM7KTqWaLtzUxVmh3UgcP84yHznPra9VLthxibXVibeexdixTRdUqjXBtBtMjT4oMK98rMQHGFd3JpH",
  "key11": "vMkjJGW2QGeVbL3YCFrSTa2YDaPgSijZGidoyVbFWpE2ibL1U3hGx4bcMMrmbqudtRKudquLBXWeAVtMv9itfQW",
  "key12": "3cEQNPZMb6VSoBjhEK3m83YxUuqe2GTceJxZxRcebwy2BUL4xZADyh9zkAZDxwCpY3cQQu4VcKLe4WPyK8yDcGQS",
  "key13": "5NDRyVzxVCDVUBvqvdAo9ZuErfcos9WJzWRZP5CPnRdKjBEWTexLZQ9o1nXAxAXgBsdUdsXzAY587B8TEQe7Pai4",
  "key14": "2ZyqwY4u7VBWiwnzUfbq6KpirBDyxH7746WWUiKM3aViY4yRDtfnMuG8RWpwWsJ1dkKWZvy39qyeZH9DdtfvBGEL",
  "key15": "354RYLoS2S4dmVsCSkwpHTSxBxwfNWoUAmZFD7qoHMqpg68CskYxPRi3KTUq7AbGDWm5Z82bAa4ba7xbo6rt6iVs",
  "key16": "2mWsa1PrmbpAkFXFu9TFfv7eFSt2jmJMGTAtd2VtwnSFcKaTneXUqsL5QogtERSrSfVakYbTJs6Jh48ZWpKqUhG6",
  "key17": "5pkh9mUQFc6mn1cq1fY9q8nD8To26UPnEctWJDQKUciCL245hB7TbpVwT3f3RH6Fk1h252LME99mo66S6Mh3eFwL",
  "key18": "i8H3QifUnfZELxSoNSW1xeEX7NW4B44kpdzZENFRagz8ELGFy1qMhrf1QNTsbYu5avsmwhenUYMUCNnQJr9Yfwp",
  "key19": "4pPs5zfqiHjUkZ1bBehQzosu2D8dXzmZBMyzYPM5CnVBWYakUTRcmm6n2fnzHhxrXjj8ntKZ7LvvFRdFvu3jWqt3",
  "key20": "4HoTcxnpKf7YyMrTSm4T4ySNSuA9C1LiyXLGheyQG4e8H4F9XKmf3qAkUMgoqyR19LShWviUbD4fNBQrP9ayf64X",
  "key21": "amVXUYA4zhSK6mfxQaPmVZtZb4tyJNTAL9bK9Bsu1DKRa5nc5eAXAXFx8TNed3dEKUU2exC9un1ZXyjgowktxfN",
  "key22": "2bBbUvXtEQGDAHpe14Pn3VDSyVjHiQR6oprGiw9rWNWyQ4nLkY5Uzw4Gk7GrzchmftzpwwHsDmE7gV4MGhABRt3E",
  "key23": "4NFZ2qCt1owYRFGrtRzc66fvCZ19m5wsTQfiMfszaq7gua9cRTLNVMyVPNo76SX9dTkLYBe3AuovKfw8n1XTMePH",
  "key24": "2yjp3Du32wgRAzuvbLuUVnz97Fjf9Ywn2sK7wLeVFgL69YNvcLZx6FDxLdRicZ9G3zJoHKbeJ2ear8VHrnjPNN2f",
  "key25": "3DKP359Md5EwTV1sJrUSWY1vW9XJHjwGZkfzp2hYysQhEzCFKQxUR5TUJWxzPF6pNw8m5ZQqsTDVcsPRNi7aw1T1",
  "key26": "5knJogBxApeW7Q3ptHj9EgcxUoocERmPCHN8jiL3evZY9UrY49zJZf6xP6qkGDENkhTvBeZ8YVaufffZrNNugcBu",
  "key27": "2bweW1wpUzLVuxwTcdUa3tRLVjAUXXBw3oMZ92wv36tosw7naHskWAUBSifbuVNeegysCxGeBiFiFhuQQZ8oNscw",
  "key28": "5V3ho1RJPGpS74g6Uj3QXfskp1WzkMcs7QvxXSdLR9zTW6CuPBK66bTYXDgPw75ZazK3tLxPGX9zKLDEkFvw17te",
  "key29": "3t1Pq4HQiiuz34gmmjUCg6jzUyA1z7JSNfThoUAermKqAuQ4dXYQZANxLgUwVGscwHxb92HySKb9RdZ8uMvmh5Ue",
  "key30": "3sAsYcrxrcFd2L6gg24appzDTHKyEDjgUJGbyuJqLCcTci6aApak6g3CHcYwT8ErhxZPGhpnALbxpWwLYttiK3Eb",
  "key31": "4EEjotdBabCSsDpr9yNs2CUoK4kSJTcgfJiRr2Ngf9Z7KxgAxeLmwWfZcNwD5hcdVCzTJWVMAWk2n7rYZKRRfjus",
  "key32": "2wMBsFFFny6zz8CEUxfw13pYrrSZ5YcvdUiv35P1Z6DKyEda96JsmLGXrC3FLWfYQ3TQKhEfqx3L6h16STutMHRb",
  "key33": "21tEzYrfumijyTuWFJcydjGf5VMbFTW4WgwkcvCzKSgroFEnvCUB9xPNPqpxaC1aQsVmnsWFvq6E1SVjhR1WZz4H",
  "key34": "2XemcMBhj72zvvo2ECNDATByE9z4r3gMX2AdK9vD4VVFL1aAHWJxPSQEUTfMQPi5Pjggs9GY8Y9DiqNMLq35FjpE",
  "key35": "3V5DXhoeobWZvYiPYQeD57L9HX3kQ2kYgguQ48np1p2ccZ1RU3AoQZMR9RxxsfkDGokKdBFzDzbzrrAVQ6hs4VFB",
  "key36": "7D9nUooNuZ1uEvUCKfFXkUQjEUBfk4y3zzJGUNxKTQoaKYWnXmfrFAuY5XyN3CsjC5FnUScbqKPPPAMWAL12dw5",
  "key37": "KHHNYDTxdoxY1R33nLahCjYs3cLDhnAVirv2tkzvK84hQ4DrNHKQKzVNWDubATuCxgc4uxX28DbET36qxrpwFxv",
  "key38": "2Majhkq88DK6fP2EkkrmgM9xFmmjAVYgfGhwXySpH5TvMMWJfJjDdCz92V4AT5ofrGvw6A2xLN8KMTHjEWtcK8s5",
  "key39": "5oM3NgjQPapcm97JtYKwGNZt4dAhnvs5KuNbsw79EWjhkfu17nwJ1VkjxTjytHor5W3GWaFcu4qL5YACKDbdVFsB",
  "key40": "39sFZw7AftMes6dSomRzaJiaNauidDpfVtBPiGK2QNVYcFns9vvFTrVkfMsh8Xax8YsPbAd1h3r3QBWP6wjxXiWn",
  "key41": "3zgGiAkWxewRWSBJsZ3Ey7Wy6KqBnoz1A2KiV8r3H4Apo53Ue68muzJAdESTvsuSjZBd7GR2kBGyYgHV3AEcXAMu"
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

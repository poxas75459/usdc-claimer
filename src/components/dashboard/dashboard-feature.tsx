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
    "4yVGGf3upn41NWydGtY8C1VRnWvAHNp41x1crJQRDiWGCNZpJgJAx8Pbf43oCknrEszU1LgqdXzPiqGtEKeTJVSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bEgP9a7BEyEghHrwLfrjUFaYUDsVnzKFThUfqZ8zF79z5YigtPotmEU6pQ7aAUJmU8gJjdTor42inXF21cpGpwP",
  "key1": "3mnaWaAgCdbcZZMMfbkJaogfUtumbWyYLKnviYXWnWprXgEhWKdKKU54sXt6sf7wSJJKDaM1BB2KuM7dqbuSurwV",
  "key2": "3HgbSQEeSyT2A712mGSaw6tqNYXTfHTYc2LnPZUad8L5VB9tCxeT8MLGRC7Npfqs9e8RAANJVJzodDoTmhBjcAG1",
  "key3": "3D7bJXLPfqG5zDEyaEgJmSFLEsy8q8ogwvvMYxjjs92wTW45FnndUkWmYZtPuTFfYZvrp4L2QAoqfSsqR7vb7wJL",
  "key4": "58zHyM8jAXR6JUzR8DNR7M5FRcRUg1FENt9sSuYECExrCeJcdWgPbDqKLvv3wFB1Ww4smKWQZDYVnHQswPWCBgFu",
  "key5": "8y2dS4UtB3rHXVKaLou6xCFqAzZZusNDF6kfv4rF6cQ2a7rAHeR2ap1BQZM4aJcbtdedBrZH11tnghk7mhSJ4vW",
  "key6": "pwn3wptoAAq22pEdVnVBzeiHqfMs2WgWGbD9UeJ4Fs7vUrctHHK5sKdzYvzCqjf4VgmXnbhSW9CWU47vqsvviPB",
  "key7": "2uYeaCSuzoXT3Fe6PdF5SKYeoPBa4CfDVb9Lm3274jSyhHRjHRh3eUrCnkq6dWdSRLwXvix9To3YMFi9BpeNzAW4",
  "key8": "G2mBithiHzYJFCZLEoNzFTqKRS2b3FzSjjEyC95Zv7UHXUXUmzWwjnKSJTaY41KUWBRvEbZhVdkBD8xWcDJrZ1y",
  "key9": "2992U2jPBcgrxh22LfyNyarUGuKp9pnEwVfBss775oFxGSsGm9zRWjn9nveGaSwtrJ9YvDaBMukE5HAZKiLWHMz1",
  "key10": "3Twc4fMUVuCJToUXiisnUEYLUfTJz3dzBsBVCJMdNBkiVwCkgGgnhXzvB6tdZ9PAXT9JWJhJkpckeZtnAx9tDKRf",
  "key11": "ZFpeEtkm86CoVkLkqqk8k9fajuBU5S5agmHGvht1qDc3fLafSaNcuh6b9UmsKiQ7Fa2BmEXAqFTpb73zSq4zKUK",
  "key12": "WGkLoJdgfCmozmk8QZesoQgKQrh7P9boRWSDSHBEog53h2EPoKgsHYRi3aHmYdeh3oNDkhJqC5xnQMmX8rrLszB",
  "key13": "3K9YCnAnfaKdrREmtEVqpPZgEoSnq9REQi6TktriF7z1wk9AK4ZkuxeiL2RV9rpdTyhYcyuwTiCmT4qZtMRpWDTL",
  "key14": "4YXFJ3jjc95NwWXqAMcWktpKpc7oHo97c3BJWc22Wf75NNFmWaJdp5ZcfsjX8f4G6MVBBmKPoGMTjzce34ow29zG",
  "key15": "4n5fCnLU3DV1TXzNFyAS96CZg1gsHVZ3CHcXgoWZKp4FhDQ8UMJDK7TrWzEQzTWLGV4iv24eWcpsH7bZoFAS8aB9",
  "key16": "5h8yqCrHofQ9G4X82idm9eXVPZfSwi32o81R1o15TS23CNmC4NhqaNgfoNDqCqcJM8R5WgY4R1YiWnrJuEjcVBDX",
  "key17": "muRGAjCdutxQfhoPCJGMgYtoHPkroEb7b8CXbQzZ31uZvnzG4r6y46hj9va6CqQHUKPoHmPQcZsLaRWfd99u3A1",
  "key18": "3bfcznfhtuDaKM5PXUkHs8siVyXrBDiQJgDuj9Ec4SvCocxAb2XT1eUhCD7Ak8NrFpjeHEFxzsi1izZaMKAHa8uf",
  "key19": "56CcsTEkGWk3hiiGfNf64KZbUL3cY2twXC6zhENX6e7fmREaRWvZKr4K68sgnUn6KyPSzq8ihWF46pmLBDMAo1Fe",
  "key20": "4Wq39qMTUn4hTcswvXPUoLq2xP6jLxiJ6a2XU3rnmfBajBukf6QVrQhE47YA9wGBZ4owyKb5Th3qHKAbnPKPPvhA",
  "key21": "5P2Ry7uz1Kq6pnfK6jrHAmp3ujBXdrZmjog6s33Y4GU6dA9ayGrnxmiqv444FHEEmXGw5LasQLt3YE6wCaTLQVLM",
  "key22": "4MHyfuhoJRkezMm2ZsRWRNxSqUeqw5cUQxRXLr8yqNFXEEYZeG8s8bM7Wt7ChaQwHakyp5na4VrPc94oGU7DuuUH",
  "key23": "5DLd7bCvJkQYTAzoxSTz9go7oxz2FZqnBCQMqjgrquWgXnrCgqDAG9no9iQqDDdd3Cx2oMTWhsL79Mo9PRZCHiM8",
  "key24": "DbzEMH2dyy9dKtsf1HbrMz5eyApzEbkk3W4ijCeEAu5DXntef99BU3MKWNb8EEEZqrkivuSCEghE1nTQVskT87c",
  "key25": "3V1e1rYibNKR2bLSQJNbRCFkTPcbDPmma81Rxfyzfcbd1MKcfbAH1Ts83gdc1oyM67jgy5s5Auq4foJiiEmVTDx5",
  "key26": "4zxiJZuJUkoejyPkZdZk7XEE54c6yMC5GwEhH78GeoWzgHmZdKabjPU5XDMXS2RX7bN6es7GPwYkw2yd5JRJYiup",
  "key27": "3JFCdN6mNLoaaUvQPrQ9duFLaub36ikYx7ikak2bpxvD25E9mA62s7VuHfcjAoAC6ENsXzvvganq8JK2mmrnJ3NQ",
  "key28": "47tm2pfcKDEMQUoeCWCJragtJxXefZbjtFdtGWeYmfk2CUDcCEPKwzrjvCAnXQVbJ6WVpLn29byGaLyHJgH8jMLj",
  "key29": "yKpUoJJ66NGXqSm8gsVSjnfZ7GX32BzfayedqKLf5z1FtcxFjgsjaRJP8FEpiTdTwMTDmLnM7Hppd5xMVMwbL5u",
  "key30": "YSPJrRBuz4cVTN4NxBpg1vbc3t4WgUh8DnDAT1zHM89e6s8HimN7A5yJPnURb4G1YwEWDifPr5e2y6hjvF8D54i",
  "key31": "Bv7sEzYF5zsurTX6yNaebgfPYFx1JDBqxgAdqTP9bgQPrY5dU2bL7yJcQMP8xrmZkwFxhpftXmJ4ziTUZfVaQqn",
  "key32": "RQvfBVCFLu24D19a2duikR7Sqgu7jjAeoYkbV18UqmG1WtUvUQZ2DLLCA8rh3SREHa3fWc73EpsjHsvwm3ffxbG",
  "key33": "5gS7ZY4XN9ocx6oMKzi29nmiumcePFNDquBwSeJT1fVvzo92N5oiUQ84NDqbZMfpKjhRQzxf6aqQ1byaVcf3bzbo",
  "key34": "qH7fSifi4jETDkvGkqzEF5h4uRqvem3vvYDbC9tT7HU72QfDEfZ5QXytcjswHw7U7SrNdYaCpK8HKkpXcUGCV7D",
  "key35": "2r47WSN9Vq75TgpMLaanNQTi3Wts2a1fBX3QitmBpasG432b8GcVxTxSBZsgfFki2Y7tCZdCjbo51nuuLBmocuX8",
  "key36": "mS95rjAwbx88c5G6nFFccneh8hBcxXbXNiymSaaaits8ZG67gZyFVj9RG3Cff9UmKJ19dXitioB64o5Qm1U6PJm",
  "key37": "5wvQZkXa9yUSLPBBPisDwKALnMkBciVV7RDc1ArxuWQTom8Vgb1v7ZocEykm71RCcGLCq8DorySLrWq1BDQnQcSi",
  "key38": "qHAh1gbNtDfRmxUkXf9Q3Y23oBxRTTfhyGuCFS7faXyw9ud6pxdzPZh3oskf5xrWREBsMzMbbawVMsSng6dxu2q",
  "key39": "3yST6E1hADYCaGkhVxmArBDTaVTJd5Mj5E4KBqnn8aKPPuj5VKhB6yVi9EizEdtXmgr9wqrDgzAmTpwaB8wGDpfK",
  "key40": "3sq9gtnPydrfTQNWmL1Xe89KEbd6PW8R45SF2AV4JS4e45UNJ6JFH764r9XQvB9oudAuWd4Rhmx5gFknYs2TxDfA",
  "key41": "4n6417CaGHA3Yx74hgPRAmxLEtnb7SS9xJCq72SCVEtztGvHSb2ynoXGPN4mcCzMVUfKuvVaXkvYnYkk59U7Px35",
  "key42": "4mxG5yDQ2LycqKgmeo24VNoQQ7r8BT2YefpF1efwtSV1z7Vnm4ddGcKBeE4ARzFXNi8CgtaB2raPd5uwMikeNSE8",
  "key43": "3ZsbGNZtnfXLPkd73pYPLX7zjSzj1G3PvYcepfo8XfMnrRb3XfAJ4w7qLuYVBqpVenuJnk9yxVaLd4nwL4ZimeDk",
  "key44": "5gTbRBUdmK5nAzKF6NiFxxXKrGWJybWdywnADg32k7dJdkTsUsfWmdEbVd3NymDZnUpZN93cYeo9J9HcXcRDPoAS",
  "key45": "3bYJab487enG19kWJ1PDzZiRKm4RwDsUQhShcQye6rQhKFygq4Ut87Ppr2rj4QM36MrfgbfAnDAa8Bc6cbdT2gGh",
  "key46": "3HSyEBPQNdcbMCBgpkzKqXkQieteBh2YogpXmLddXBCknC8FmzBiiNr7zrirR8rfNRP7AgLFc48isxpK4e2kt9m6"
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

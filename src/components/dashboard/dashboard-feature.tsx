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
    "3e6hDE6gfH4QxYt9cYnrqohcXXxqs67ran4FJnAnpRZm82ZgQyDG8C5LrXryGFabf6KsDwGTxEqk1SxWJptHSExJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYfKTmCnaLBRfxytZoLvScFjGa8Mr29su9tooAkhNkFpVTbJDPZigh6tLphiGdzkkk5LRxeLXpyQLm61NuM1ZgJ",
  "key1": "62WFy2e2BMJrggZABaCnLhgo55B8shvnyqJPSx6vY9bD5U1SV8ydozWaoGdA1hw331P6ko3dGJoz94CLZY29vCmC",
  "key2": "33AEwNDrYBaB3juPUxdV6rmkepFQxeQpNEYTgmHLpufkwtg8wEEuz18isTxpE4zyXdCuJphSSr6PAXe34FsuVSjP",
  "key3": "2rnV9n5zR8WY4CrfkvobyzAowayD9ye9yQ5o5rSoE1753me5ne2dZrhiF2tUCMmdg2v3RDyx8CBv1UHgM3oF4FuE",
  "key4": "3YGuDypCsty64siUAXJeKDNHstQQiGYRraEes9PpfoZ4MbDCKh4EV9cpTR8UeiEy2aq9qQv8GPE2r8X7nL9Pifno",
  "key5": "3chHHZdNqU3m9gypw87ND4zpbcREdzMMNYsSD3HitKSUWd2Lbwet7NDkZxBnMNSkKGd17rtHAZ6onJe8opRn1dyY",
  "key6": "Wh3u2bRCn5rbHCWynrtYJTVvfEU2rP5goy1yKAVytNeY29iLxddYmssuC4TXte8din4DrXJ1DSA1q391Q4C7ErU",
  "key7": "27PU2bQVL17VN4F8tNnmjHGmXu3GaYrtrtmR4t4zWUCeouV1ekEaFqnZuyFLST6pWn9jsxuA84p29XPaZVjUgF9a",
  "key8": "5BTCAaoTAiDCuwLcLuzxWMxV3Ps8ESppzCPuBbG2DuQtCcC81bEJtpafH5tFXrnj8Ziauv6kswmKxx9jLUetG6Xy",
  "key9": "8CsKrbSc1nDtAhAgdD7UmNK5ULCeNR44MgoQoM9yU8cMEHFrcdGqKXX2pUfA3MviBuLhwddp7EVvidPxhjTgz97",
  "key10": "64xwuvZeY8LYP1neXFG1WLBU45b3G7oRJiRzaLD7reixzy7biWfYeWYsw157rWCcig2N51psACXSruL3thk5ab4y",
  "key11": "42dNgjAxGTkZnZc5QtwwcQsGo1cv4sACMgm7TTptHBQd4HtfDJA4Z6srSW1bjhSQS6tX8hYDS6Lt1qG4ju1MmNHv",
  "key12": "2RVJjSKRW61Gx2bRjJBuS1fRoadcTCkqWNP9XNWMFwA5R1ZdXm1ju7kRBpJijv8J4ScWj3duDtvLjGzMPNcvHQeX",
  "key13": "2fiMQP7RiEssEWUcoqnRiFRMJRdqPDACM6Hf7uenqubBymTo8M4yNmt3Q45S59AKtLaBhjnTuSUShdjDxEoy7Z1g",
  "key14": "cdYtQ2MPeyTorAAaLKQSqkKm7UPe9zjjTm2MoNdy6DCK9ib1d1uWS8ztJWzDVXHTLWxxaf2mZjs8JtQmNehdVyt",
  "key15": "g3a3ikJ9AkAXTy7jbs8JmamH4EcnWF3kzwS2YjAdKHwMauVZtJ8U6iMksbYFMxSU9Up6t4L8xvMb4aaKuvkoF53",
  "key16": "3zFnfjKrrMVH9F9Em9YjVWzFAb72w3Lwcru2fbVkTW3bk5DxZhJyNNyM8yeC6KYKHmTHhVWKVFyNiZ7LosXyJAPg",
  "key17": "Xa7VBzpu1JigKsEdNTAeyMM8TsF97MMtdrDmBuTat4G1c2h5BLaGCHZqmMJAGctivXZPqbsenfkPajrkvWVzjaZ",
  "key18": "3wv8dabLScguj4qBZrRgZ4vSivSqFbz6GbyynZZJUeED2ZWiFjpZY1qnRpPirkr3EFV9hiFGwoYc3hcMsqW4u9we",
  "key19": "2GMTPGzXbg6ZrAQ1ez81QksgaemukZkJVeiWW5KLJcBfWJBWRtf4bXMbSPmnz6mC6bYjkDZFcwGAuL75Rxpyg8sg",
  "key20": "4Fgn9Uh8g7qV2yZ2G4WdjV9QUMDfqV6bYVBv1wTEjbVxYaFLKtUwEE1evkctjGfffqQ5TYaCYLQuUorLvrqABuT2",
  "key21": "4izYcqNoQUBW8KFQP3XLJ1smxY8BTEHvFsScQWLJA5jEZWbqoi7kMYQUseTVcQNcKp2K1yoTqR6WWx97XHtfDngV",
  "key22": "3WREA23YXiUoJzdd7py4qypE2fWpFxzXccsDQcUHDzYzQS9At9RQdtoonkgDvrgzDjaus9F4VXKX94FHzaxtQdnT",
  "key23": "3uvCgNYHQukGtQGjMTHLe6viZcCPqApZ4VJSe9WMMS3aVpQQrd7vJbdJhk37uDXRrgg2Hu5u1Jnysi893JehiUmx",
  "key24": "5NfQAEJt6A7tYppHH4TMpdiZtEdNUEGBCxgGMpxSY93cixWHLDAQriLdA9sMa89qK9jbHSBUACjwuKthXRDRJGYL",
  "key25": "naATLXoS9iKZzh91LNh88LScu4qEL688tngs5eZwPWNBEGZjAj9GghZbvUkDUxpSnVq4KV3PHWd8ZsctYuXAgQi",
  "key26": "4r5RvjJ74Q4NHoRaEPFcsUqAGpVcUYNVvXRHVWapPFb5kFBykfjj72nGyUWRxVH8LUTRRhMaCKjiPFtLQhS5zo51",
  "key27": "GafEmPh8ZNQxSwnyJcFmhkCrUQZPXzWV6PttdsEgJFEmi56Ci921oPibxEJQ9Jqy1s5Vf1vCFMoaqWLTArDjXWp",
  "key28": "4L16NY3rhxK41RHBDJMhZ8wmep4WVZHEpqTNJLnDP7jUg1BJq3UkBRA1K59bnypJjVGg9nrqYNyaxUqCqC6efHAT",
  "key29": "3EQ2tFYeAC9Aj9EwrarUhzv3w6bLWLRwcndtnangh3G9rGAc1ePFs3oTLMpPG6Si3LgdPifPAEaeyLDrtvzLxtDZ",
  "key30": "2VWKZHPUVdUycFXTW4nv39tNcKusN4kb5gKsXmHfSAg216qNs8ioFVLfH4dMRWQDqGNekFFJozfkamJCbTv6R5oJ",
  "key31": "3W6cqzLX4XAY38pgFYrAQkDgHCQLLb3R7zygdcZPeihHx6CwEKhdajZKNg8WxxtRmxGfsK81xAz4udgrashrZXrk",
  "key32": "2Y5tibckB5syhVDC3AQE3h5bhCoH8LvAnKn53gaLFXDuTC7mEqWkyyysMWPCd52xHFDvikVzYdzs8zTLRSjjfZ5G",
  "key33": "2pe17SRnj5as1Qjm6gGLMT7T2RJzfZLe8ne8EgTHEShaoCLTmNsyY7DvbTnq9TDkLwoixjccfciLWFGJMwUXorL5",
  "key34": "5ZYq7tHdL1P6c3VjKLbX3C2KDfBLTmrgqG7JVi12x85x7wu3WXCoZ6Fh5T3agR33DSJMVFxHU4K1dne7dwt5KUsN",
  "key35": "3rrCqbeAg2zE58xbS6B9bwdfAeoEvbXcRpmN1qnNNbg6DqVJCPreaDbHa73Ns3iR9Cc85BNrfY2n9QVkXdyUt923",
  "key36": "65GZT7roeFYCLMiNZmR4Vusu5HhaBFK43kUeT3reDuPTQgKwn2TzkPSMFMr6kKKG8FD4RuoLNA2MBnhfnEbYW9WL",
  "key37": "hEoKARkMyKrnYWNHj44mnCAAc11zMVvMRwVKry37HWB6beQ1cGaNok5BRCNPCVLdoFMrqQQPALS2nmcMVCNttMK",
  "key38": "4sSWydM2iSBF7wHjGeJDBnpPcLNS7ZRWiF32SS8u2b6igkXdQmfEDQ1wVRFVKWybrSGk3aEKJBq9WNq6gPSTWB3H",
  "key39": "9mgFbSojEvXDkkdyA44BF8sbyedSrjoSSAHMZCgSNf1hdoddVtn3dgA53ZkZLvBuFSkyG7uKjgQ9wQ6ZKbfZcqN",
  "key40": "2nieyLrdLZUKWX21vsYKoQkeUNGGLEu4h3xxJVjQ5DaQkaoqU7RcLyoZrygBAj9sjHFgvWVhR1GyLXAcAx1QvV8a",
  "key41": "2J9zsejyXHHh4DxiChR9vkToaJX27NSXwjs6TRMUWMDq82pfYE6oRbeQqAE9rv2DLULRoPc98MWbLtnQJ49Fx6Vg"
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

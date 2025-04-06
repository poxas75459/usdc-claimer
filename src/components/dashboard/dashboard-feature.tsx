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
    "5g2XWX92wSMaf7c7c9RixG9daKxZvwcho7duRBTzG4Q11gktuqWAsRooqF7gx5QJuMSjfAEWi9Gwu8do8Jjubt46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLpKMSY6XHUdAizAWCm5vqj1tD2hK9cJSriaUqsBJr1jkB6HDWb8UhDACbupHbFwiTAYz5ZQQsmFce4fb1X5fhp",
  "key1": "53YZLb8XYDoAkCVZtJ9w5W2ZgzciZLEV254MFpd8UTnfWMoxZiapaBPgKx5k9kSUgDFqJtnNyigHo9Z6JJEzgYQB",
  "key2": "3T2ia5F8SdJ3Zp2UAMV3QCqA4hPof1DRAf7518vJwfynkPffV5buPfQ7QqiPzmTuPFHwkJpbfBMHCrT7LGvuhB2r",
  "key3": "5esZvS4XPmtbZocWxg7azLxEtGnfAf2vHdzDqF47WUopYT6s4HGc66dqkEeuBLg5H3eNRbPrbmB6kQXUQ5zrXh65",
  "key4": "AkeLrFAkkCYRic6YGGWSkRnWRupRnRtqi6E98omn8YhMQRArocuyrirftzZb28MborfqbfagLqGfeo5ppg9SSMc",
  "key5": "qoQD9MAEAzbQxbxVmnQJS4ReF54D79fhpRSWzrmsSgxXZbJqSdwk8Qvq591bmR5RDFm8UxX4ru4EdGgX4RqMV2a",
  "key6": "4Hq8FRKX3q1qVH3pStDpM6RHv6Tiyq8yakx5ogh84i247gFhBHNENfjBDUPfw4BaUNPLLyLRWdVoD5j5CkbiWJm3",
  "key7": "4nKNoue6fjnTrioCeWzQU4ZxuNtmzb8nYyoBdkmRrHZJPsDwR3Hbh7j1wFe5TKzCSp3aBiQcNg8WM8y4eBWqq1h6",
  "key8": "4X7twoMvPMbGXrrXW17XxEvHoepnVaBkPEYYVjea6JyJirk17YeXaTqCbzB7JYBNtrCaB3kQtoh9Kz8bbvLTKspp",
  "key9": "5TCAVpKC7KPLYHsfvHrFCY6cJMa1PfVFaPiWuV8ZYqjrXhCky3vDzTVYHEw3CVPubFL7MQFvzSFu4sAVWjMVNM5J",
  "key10": "4NK956fdegcyQXYaBCcFkcoQLBT8BB8TKLPeacSy1AbwAj7wVUn1gQWXUmMAfD4H8KVAvYuqJEJyhQSBxfBuMFaw",
  "key11": "Egg3vaqrn6so3af6NQkE6f8nTpWHftoP6h6cXtRvnkYrk3ZjUJkA5DDEvkSBjvvtBaoJSXrWzsfrsXPwgqfPcRw",
  "key12": "Yw7BNfFvKfKTHW5CjdXfv8ZnURpspVADSuH1zUJ8UsJJQdV4geHk2Xn5r338ig5CdZyM93eo3JU8fVWXcxSTgjA",
  "key13": "4wy8aLnk1m3L8XQFTwRJEvJVyne2f6GR6m7YXHJztSSWazHkSV6qDmF7UvEvsnWT6jX1zFzZ3B1bPkshRGf7fBWY",
  "key14": "54qMvs8ivQ9MHvHX2TG5DBFxHLQAsKvkbMoqNTPaWwGZ2FkaBMoBAXsJCmz3LaqstkJF6PY6GHBv3fi5ywRh1fPi",
  "key15": "3Fk7f3d47AmEB2dNKyszViUpTEyL6iWDmegG3vpqS4Jt17ZpUfHsRHcAemUNUuLi29itHmSbgP579bHpRL6FQeTQ",
  "key16": "2W7Mbpruz15u7rJt81cVWThJyfMQex7cmTY1dxaD5mBgXzRGbV6cnw6ZjCunxm7neTqCrX7vs5RbkNzvSVSDpuo8",
  "key17": "5CqgeFyrFhgrkAi5gNv7mCgcQSzYnTYigytAKvG2VTijEqtNEGdqW1fF33rRBmQc8uhFBbdPfn7LgbxaFjMmQFWG",
  "key18": "3qd7mXz38twHusffCZY39NLij2vGqGANYHcZ8wTLpP7zEMhnjc465NjWd4piC8gkaC6p8SM2Yic9dWRCjfxdNPng",
  "key19": "fmCXRJ5VtkkSM31dhvS9s9eGszG16RvJyJ4gA9Drry5nqHF7sZdL5CLpqVbg4H8MoBtLed46VA18sLU12kzJaEo",
  "key20": "2hs2ecuMFPCPFzLfKV92njsWtMfCbJ87b7squE81ak7rQNH3K74PjK7Xznm2qtcCqzh62LxsJuHugfHYU4fn5F5Z",
  "key21": "4HEUCymyNYyPZdouZ1EJttMi5XtTu54m3fUcX1zmfHkmcRB3HzFP2TGzsgLkrqNyS2NzEsz9KjeY8FAcgg6MSqWM",
  "key22": "2LbpHK6c4HkgPmxPqM4C11GhwbV8vfhLmHKKbvNivupEUfRVjNzvftxVqJnjZzuUEeuGWEYnuze9DAoS2mZwpexb",
  "key23": "8M1ybkr1bdwfgwfsUmCaNHyBtzJfLmV8cVZaFKqs2oqT9MkPC4deR4E6RB3GMptnvoxBsjmh9j2pZSC3adHC1ik",
  "key24": "5zhAJDSwVRRLi1pa797CZVqLKjQsTLSgVve4Tr75MrBdgyJ2Hvvt5NgFjnxtYLdW5fBZaStwYX7y47uB2vYjCEib",
  "key25": "WjgGjtoa3tKNYRtQT8hvPB6b5A4dS5bZhquzgqR895oo95XX9pWu8HLe5nUzwhQWM9KtB5N3uBLq14ZAd9mHTrt",
  "key26": "xxNdqwP5qVCjr1Yh5Q5eArsd39PJvvSvH51U7zXsmzxA4X9pBAYAkb9sAvKQm7s3aY1jxxDBCK9kcXmQETaSqRZ",
  "key27": "AG5wh7TaiXYaKyY1c784zXZh2K5eEP9fKgq73wPe7s5mv3uv1RF5HA1q5wsjfGPXUs1AYQ2poGHMWVNBpWtH5gx",
  "key28": "2NvH9VRUvLUL9YwKRAVSgD59oaE5vDLpspjNQqZZNQT44fefNqDeDTc7JD22hwWL8APyGe6qEQ3qwTdJo5a2SX6a",
  "key29": "4i19ztLJuTeaiUtvZ31XHJgW4hWoAkNRV7QFgc1hWdkpdKNvSPB7qZ65SAvWqVH39Bb7Azw6qUNP19qhwbWRnjDt",
  "key30": "2fhnCFhTTuh5XAGgyN6WXrgbJzjpXEMywXM35xsW7A6741Mu74haiD7LXvHhj7JTempDCBkGZ6n4WZtELuHrBK2r",
  "key31": "5qc7Tai3EPVNBQpxtTU6NpRGVmNbpoRSLyaSfEEmi64GPXd7gmEtxBKzZPSPUTDxBizsD9uXMYBrcAJB29VFEJnw",
  "key32": "4N2vMeEWxTrTeuY3wzCKhZHoNpzHS21EzFeH79mGmCipMXEw3AtvgRvJ7Q2QQ4eMKhBduqYEDkrdCEw72SpLHAjV",
  "key33": "5qr5ef13X5iy72tGs6bCdgtWPbjwyUUMVANiyiouq4rRLepqR9XPYdoXqystkk2UjjMKG2TwvZKL9othe9WLwmRJ",
  "key34": "6a5MiNa528TWD4b1kyyiTc99iQWTVAoh8zGHocgwVYdjbam1rkBewU8hQVX6y1mbswZTCFKUkxvZbyapi8gLX1E",
  "key35": "63UeiPBm6xRD77bzEpxho1UiU1ak2CsbW9TW9StxHQ4VLWJz2NuQTUjTmf3qh54vCy9JQW1JpVtYqLuUJyZMkAih",
  "key36": "4fYam8wbosL7rRxgAN1tkWFs6Sfewzcw8NswMq9vngFynScB8EipYAdK5sdJX1ju9raHuXu3fRc5Z63RY4JHpiGu",
  "key37": "qsiwhPzcPPd1KXkLoZNXZzeT89zFviswAXRNwp1LBdsEhnfXWA4WmaadvbccSzcqPzbmodx9H1V6RhW8boPTJqm",
  "key38": "543m9sUigjYGfLZi5b3yaYKs7w6vigJQCtPvAcrrSii9mokz251wN37MMssQAQyHA9qfT1Yr3Au5PqNGiUdjKtKV",
  "key39": "3JEkxAtyx2kfVe6Nmkx7DXG5xBqbnha8kzBFmqkUFUvgtsj1K13QZqL33mHCHgqMAF3SWyxccH2L7YcYxknAEfEf",
  "key40": "ViovigL8eLx4pLTNkzQvoFm2PsgSrCiWgoQzV3RGDBmXCZZnoK7mYotwa3V3Lw6psAxhZRuvnywG3WiGWgVs1pq",
  "key41": "2LvwBbE9oJdVNwrCMjy3HMF2RSQK6cUoC4HeAD1oWRqoPWuJMB7AAEE5Z4Be7QkLZeTPxE4PNXNmiuPwyKscrtMd",
  "key42": "xyth6x4rCQ4TjAwbxJuWEWCSADw5ytgv7uLY9PxhTu77s1SjFbWDwp2xCcL5pxeEVLTuVdQ2FVpAey8MnHGWd4y",
  "key43": "LkYmdutohmcz1XCuqx5x9dLZGYywyGtdCBZBgBZDkTGCLnwnCshpR8BSrWmHKyChScYtLX5Q4qBFVQNRVMt9dL4",
  "key44": "2zKg2RZ3DtEDwFAdwCj4ouSZUL1igcUmSgUF3V4HsMrWU37nwrS1TLk9E7rRMF4g4STwVaURJkVicaVTVsMSwvb5",
  "key45": "MJagHjKkCJPkgFG7MV3cZTaCMk3RpmmC5wUE8q1rMzyeMn6vPvo9vRVE6yqDmJoweuJ577FR3h5GmaUJYaVoSbE",
  "key46": "67L1ehcptTcfp5JuqFkjoQ4rSP76vMczuEnNPZgRfeXb8eiPYGVZR56mQozqqBfTDoHpuYqcrEW6t8pLrWFdHHb5",
  "key47": "52ApYKdW1PjBv5MyY7aygVBVFpSvUq2tAyhihgopdgYCojhQ9p3Lks7ojJr7vAkQQm5h4KRTWeN7NdonLDoQ9HEs",
  "key48": "3SXBUyyXWqb1XoEjw6sDRiCkYcG48Ww8SLHtarbQ7yYCad67BsQfiNFyNrRMWaC1JkjF2bMaGB3Bn5ErEVXd4d2z",
  "key49": "3FDNtscWocc6p3Dm3ni8EGJTFxQndqF6e9tMBvbyqDazm9Ya72pT86s339uojGX6hQeQfaVv9kxhuWm4WCEDRuFD"
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

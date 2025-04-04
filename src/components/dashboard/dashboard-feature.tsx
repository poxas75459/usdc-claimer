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
    "3t5YwX5LrKKVBj2Mn69fDagAkFN7gdSgUXUXCLCHr7jGsBXJnausprzy8d5fQiPE8yisQhTW1aymMf9MgrrrPJvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95aNfkyzgtn42DgBKEwqaFEqVxD7yx5NrMER1GoeV7MuUnoZRwsXz5EwDsfhnGnm3WF6rGjd3P1BbnVRSJCSRvy",
  "key1": "zjxJek3dSEwnXv47oDXzb92WNWzKmi24gdBPDMFQdPAnR4WBHm3tS6xKNSqZ73Xjgn2Z7hKX8sBStQ3y2gP9oTZ",
  "key2": "5X8vs79AiDCKcW9RtfZALCYHDaqWnxFb8AsKsqLD4YXLPsT85NYX1XzdxnUqZYtJVYC3kbwUcRGAjnsThXbEALxW",
  "key3": "5JDFD17frsyEsTsRUFZrLdg7wHMoWRQYZu1CT11QXSyvNkNJMf1GbiFkTpH8jLe43HFuFDSokR7X7zbeExjut9Sc",
  "key4": "5mWXnYMo1JTdLPA2i8inSZ16RtxrJoGgPR3GdGgfaV1VLEoQkmtqvvxhbWR8rBKHFj5wpbXRojQYSS8dMvW4XXs9",
  "key5": "5fVo8W7tNNCL5o2yPw34CpyzPJFKnmHjBMrp26FWe6Y5h3iXLXkQgogYtjxhVK8YZMo7F1eyJC7kTESUuXxCu5p2",
  "key6": "3FjvpNnNdqhW7uT8KiuxrAxbZJyD2LQ3QLc81mzf8rm1ktGYhVJF6GmMRDhFTVyX6PdQcepSAX19kNYBikTUfMpc",
  "key7": "3sjpBttkC8tTZhnZ5V9Cws8sVrudxuRPuHh4uDMoWVi7vn7EuAdSHebyFsvbiB4oatmTbrNDVbDq39YaBgpAHVuD",
  "key8": "5iLjMJqDwyPChyut3WiD2ewkPiooNdajeRZH9dDpnJDyU7nVDpmPucYdhfuKpezXTv5vafAoCbkL2RSbJDVYzFBJ",
  "key9": "2PkWvJX96m5zZ5woxhp1kcrzuGvC59eRZqe4ct1NknmmMDwYo3EZWcdMDMrCLw1Bo7M9u3TqVbqzvYDvdhu28yhr",
  "key10": "4etVkMsbUMuF8LmDaocqvod14EC8QKvxWeGbwLEwZjVANSU2tTHabk9VMEqqNiNZupTHb3Wt7kaZM88Z9QUY9vfF",
  "key11": "4w3bCwEbv44YSdXPAsvYdnEz3CiXXwFJhSzddKaTzRWePjf55mqaUQpDJs59P6SemGea5V1F46xTtx91XNzjhwtg",
  "key12": "4wDgtyDpUxymLAkoPREHqJPr4YS2PXF5MM7uH7o7hjKihjEg1uURsxSAZvcMo4fPjQXbw6DxBpvvgYtwz2bon88x",
  "key13": "4rMdPpQ3beoHms13VZZQ3xk3FzT89Ubjrg8qTy69VKiNcT1ge46uZDbLfw7Eaz3skyxnwQjsZxh26V1RGoNeZukp",
  "key14": "5wGTUv2Bfdndu3jY2tyV55RCJ12VQWq1Jjv3Hu9eVbt2ft6sHy2oXhUPQuT4gY1XegmWQSyU2YqhBpLb95QCnsMX",
  "key15": "Y2cXjKNBUSPw7VJK1r5wyq34nEpd7xxFRX5rwah8tjH13epu4NNu638ieNEjZU6on7oHoPK5MqBnnXBv5yRZpnH",
  "key16": "3bsDsLPe9udZ9tbAYAiMZrXqFmJNYiQmu7MNiepYanyacRn7PYTxn3qQHuHfvm23UeLu5scb2E1LatfXB7VUbDUX",
  "key17": "4kipaygJTGPR2MDz8qBUMyNP7DUdi6YaS75YTeR3NwhzRMJGa8npuEWSRuVSyjbY4vQBRReoGrzmwcGunxX7NsyH",
  "key18": "ZXF9uAf1oJBvM94nGf4mVxSi1Cwq3KYNJg57apJEvmvtSDWTBJGvBeZHPu3iybLyiosscK7ANKcGkGdVcDTnkor",
  "key19": "3kzbf4p5CpeGtGmBhYJZHMTV6J8UVBxmiSLwzLNgm4FycNK7yQ3FawPYfMj6xgVrZTWukDBEi2RnWxZkiuwMvNxp",
  "key20": "e4Ti1KXdeY2GrkXrDipZPnB2oUief3Qo7WfgLzjTmP8qgVJ7dHcm5PHsJy9Y2NjsYRpSwXK7CfHo6Vrjc22g5uz",
  "key21": "5TgLcwGZrpjE4rgKpdF7PUbHRLpR2QHSboVDxuJtarWtKqSBaKCifyw5wkHGaKkmGsNcCwwbHNeZQXikeUuHo79y",
  "key22": "3EhwSwMcvPhLqL7H1RprKRHeXrxorNc94oc1FCcE54gMVprWxT3gnGcuqukvEbGwWx1z3tRNK2XQ7kQT3KBfbpei",
  "key23": "5GsnRjacNx5mAWPa7XZX5J8gSkrsTm5ieUQMhWRe4E4BFLM9HbY5RGMQYP8nYMFKZEnapRg3QRyfpTQdDPBYHGCx",
  "key24": "2XhPMA67St9KzVirW2TG74SGaNwGGi8J3zXwMpxsUsES3zUwJtzDM5SqnSknBejqV72mtKyW5w5uEewYoJX9HXJw",
  "key25": "555EyniMZ8WeyxW36SYcHGC34Z4omNjjHbX8hPLWVUnXTaMvGbF3jMXsDSK15D2KzVfPc4o6JhqKfh9QkjunrwaB",
  "key26": "53jo78spogrrVf54C4QDinJaCDSZipSjHAnMS1UgYnmoTkrZZWfpWdrMJXGd74pt8uZDvMUNaLUXP54oBtmy1RVa",
  "key27": "4G1h3t591mqX35F8A4Q34H6VAAShYf4o74hq8BqKne5fdaWUszb3oY4ATr4Fq3gKutRZ6WS1ZhhZStp94y4DecVf",
  "key28": "3LfgU1zzQNVRajnju4FRsC8kcbR9MaFkqvgL3KaTmN5murdwqfNi249QYoQF5ebqKxJVPF2JSksmarWaNbFghXYN",
  "key29": "5FBfiqxSLTP7uqDZPJs99ty1wHiAXbxiTHiaZaapjKQWSRtSMSkBoo8518bCQTmam3ggDwHTnZSEELhSThgpiGp7",
  "key30": "35LexghMpeperhPhp3FGn7rFtmf3EevJ4dpvohpt65xyfKT4oWwiUWwFBVtbipZPdzAGDd8L1z2JLe1h5EG1fBw6",
  "key31": "5e2xqU4DkaV4xc5wpjBhav26pS3fcbkMfnWK5Wxqa91Dqofr48YrRobPwPi3nAga2Kky29YV1ZDe8oye4hhNzQVS",
  "key32": "4WSWE692ufREM9EfCD6TTSCmjg1UdD3bsQ84XBQ8X4LLmqHDcvphBsFUCZqm2BTyBRxdGfgRJNawCHNzVuELoRHM",
  "key33": "3XonMaVipQvn5vudR97r9AFKpgo3GwXvgMTbFwY1LTGNc57J2fVYm18BTgyPLw2U2HKro8Y32GVbBipaoBg8PXUJ",
  "key34": "5ydtNbaX7bW9YrUpAC7vVyVWCG3a1ajCm2YghzHpRCFunhqACMgrCKLFjeHfJPMkkpSceBzAknMYGn8jK4sKMbCw",
  "key35": "4hqGPZebrb6mkEts6EQzFGhwqBJ4ECXwezTAbE5JnTPBj4ckh4sD9i6esnbAu6sB9ZxgM19XeYm1kvEZaYr93xs7",
  "key36": "5oS8ipvXjFed1aed3ruSiKxFykQFVpaZMZ9Kr3Au2qd5xUyUuy3ttDKpsA9aRVo1x14X2uvipf4y9NYqbchSnVVe",
  "key37": "49zwctdy2MhzdYg9VRwLw6gHpuN8g9vyUps3P3nRHv88HtsRKsPjSz9JEWed2bswLPrNrfM5BkiEKvAMX8WVZ53k",
  "key38": "3zNkaMZgktwTgMQUKsR9vwRf3WrL4qmZvfLkcrAVmLxzJrhx5861p67YJJGXs5sAri6hszu8SQmtyuweRrJk6JCr",
  "key39": "54zz5NB72F25KvQs31aN3c7XEYV7HPYxgo3xp3d4cbBsVNYyAvnavWXXqLv2edtSasGqbawHHpJitBQsNN8Pgvob",
  "key40": "5nWM4uZeUS5JMCWrncj87prMXDZzeFai8bAbjemAnXf5EZnrDGmjR3ETpnYeEK8JSHv1vkkgMR2ny8E7szDMfdmQ",
  "key41": "3yBjZhP3QskA1pmHLgrMuj4drbEVJDJCWe56BGw7ukhqhhePDAGhkVkWwbq68sGHnte3k2qi6bufnkRFaz6W278R"
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

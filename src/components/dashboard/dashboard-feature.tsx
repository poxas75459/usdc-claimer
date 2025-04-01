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
    "3rgkXVKJA1k66t9GuxF7tx1k4USj2r4bSJAsq3tNo9DsZRKnNxr3cvhUSubQYzC9R2uGbmw9dj9oEa77e2MoHfoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xhRwiLQ5TCoq45PexQTvSBi1KSXbcVXD5VG8dzRbqFp298pW7NUrCw2m82cG2da7TVkCeYYwcp5VG2pzbFNWi5",
  "key1": "EonxrTMwBmQLbM4cjuWCFY8kpf9WeBTncPsExUEc1dpkXviELqDWW5orjazTVmSynJcFxuLTFqEij9uvjesBDQX",
  "key2": "2eDi82AsGAwY9NnWHCYELtZ63szYj8MsiMUipwhVrXQvNgD1puX7zNBoDEioS48v7qnkjZxwNgKt3Vnhri8wgdE7",
  "key3": "5H1QYkv9kxCKcVtgqJvKKvJGXyk1e6ZE9NvLyhhB27Wghw2bwB1RmWywufPUQPYknV6SYhPmNyQp3n9b5SLPgkY7",
  "key4": "2zqW7RRF6b6wQvXjXuRNJB48fq3FsFQEj9PYipJm4pgE78fkYAofzYgoQc456YCky4t9NwkpGG4qTwVYEwYv655d",
  "key5": "Bafn92S8S1yU8Kg5CcbNPte6mDQbxi1TJGoAnNEwxueGgkuK5P8rXRmHfh1yazr1BSMn4GRXPKhw6nYt6D3LCgt",
  "key6": "2BJk4hQqKDrJbGz2imvUhpRMumaVBSFtxrSs6sm5ELVDNL6sDwufz1uJE9T554dunePpgqSbGycUGS9XbSmrXqFU",
  "key7": "5CjH4B6a4ZtswYPLL4c4ohYnWnXTLtxENRixdWfFpbE3YiMoEKbZWZX5suU4y4YUgVCYoZnUM5hbqK9cS9XhyjqY",
  "key8": "4aocBU5rFgJ2BT3DYpDq389Rcd1QJR26ghHvKT9tw3odhPVBTkkvGG9cdDRHAazmdvGuU2iChbY9726zw4KwyP7j",
  "key9": "yVcvJVoaKdcsMb25QFGuqp1Y1yA6GCgfwfVBZpdqY2gidQ3NQt2gphv82qiaowDSQS25YdtEnJLSFcznoVijJmP",
  "key10": "47RrcesHETNYew97sShrWyBjCFLAC6wyZkowkpfLZxgYqyTQoutahbykmD8yVvFmcq3gmkwzYpWea6yf6w2jUfEG",
  "key11": "4sUK2dxEaJdtb4HT1kBhhLmd4dsdtkK8PpVmECm2oFUrCPsmvEzkXbFesxkVBbHCvkEjTKPjWhHJicySSH2WQP7a",
  "key12": "3LgyMggJqJwyuWXoFkoUEuoJWr8N3tsGRcs2YszEke42fe6fm59AgbQQVNX7Wuc5K8zWjLxnoKUtz5TcncSNXrAc",
  "key13": "2qK4HHjGMz6SDBshns3ocC5kfcCTFqAACBuwkCMWzUsxFytFfWVcp1PdzeTnvMU1BCNoPQbrThn2Lp99kU3SWxHM",
  "key14": "5B7edo42DP7V1uV8fbopLd82TfCh7EfUfcSfycAmm36HxeBvHo3vUwjairexv9hFebFfAfF5usNdceixCeMBWnno",
  "key15": "3zeT4kAuRUSqHcgV4BXdaxrzv3U17vg314krw13kVbXNSyYNTj63rQBx9osWA34oBMrNN9QnJesGzeDx4WRhHK5v",
  "key16": "4GzdHFqPcQa4nzVpShhrCqZYPpDSEXEs4A6k7qis5pUPfcYu82QrWsJq7MMaQo4TTHMMTLumsouHDjV8GYypVwab",
  "key17": "53tc27SdwZS4YC5rvbMvAUjtwZLL88rcVSfpS2f1n6qacmH2w4bE38BKjTcKFrt24cduRkNXqM5Hs9etiLshHdmA",
  "key18": "4uUZpv98puEP6YfSoXnCj8Ts3qtCMGLYFfQgAEC7zVqeRELrVRyByxpuZY169WMbSNZXv5sArhBeRyrVL1ATngfu",
  "key19": "4YowjLJbcXUkk4ncwfW1pEYYBLXzX81wUqgPmQiEPiTTrTy4JBTGAP1BsThdZ7h93AH9GoP3YbEZWi9AeMaeKLEr",
  "key20": "3WNgSPzSKqafxYXTFKFvKGCq6idz74mPsy83MjVvJrZmbxzbYsiswxDer9vhVpzsRJ3zeqrfaPZypgoG8TAwHepJ",
  "key21": "2Sav1ixZfJqZPGuR7vfY4GToURaFKef3C7mUYCFVGGxxvmVMwJAgXLsJR4GCnTE3vEeeiVFBzzToaFhZA3pyqZ43",
  "key22": "45w6J5cpn8Le7ChU8D8KKpx99711Dvjyr7jniM22u4gEQGv3vsr7DbhY1jUxwwWYQbSs5JU2gE1aVSFsLttNY44i",
  "key23": "23zrsTutoss9TJXYASokZFywkHP87zcQYGcVepXi6QGSkaNe45Qg5xxRa3VohZ4Yt1Rf7cTeNV6isLDa3E76SnVJ",
  "key24": "3tyovPCf9jr8CoAFuMB8uh8ZyL76J5NWebyEAQPP1V4MqzYGa3CeaZHufZ218bVGC71z81qKxXAb5rwMQhNyBxgn",
  "key25": "5qYSFSzUUkYC35vsQbSEC3uvt8b11T6fxKv7bH1Xn9Dx3vm277XLhnCwDW3c8DXntmLtvpf7Yd93jij5Zfnd7LG",
  "key26": "5nfa1tnXR4kM48oR2yD2kZqc6bSaoceDU3eCyRMBBZU5fXC235TB9qZJ6sYHGHxebWDt3563Lpd9STAmSunWwd87",
  "key27": "47JWLmt1HkhGUxA8L8AJodVGUkpQ3jUSPDRYq8B163zxVGL7dcVJb7ZkzdX34gURaN1GB1yJLYfsY5AbZGxL13GS",
  "key28": "5XY93E5DepWuvGLsexkEXKj9YYsLwQHrQzBD7TpnfPFsBc7sWTw3sYjkFgCARaogkVbpPzuGWXZVYjC6V9TbiECy",
  "key29": "5A86fh5qGGYYqkfC7kY8eM1KRKoDCcfwyC1w38Cd9193tjtG65Tnne6pmARFJwiy9285LGVPCMragsP9L9LNQmwt",
  "key30": "5NVrNLepGhk33cykNdwBVXn3fSf4RihoikdYGu5yecDyPfc1tC6JN6o9sr6igNoKi3JAbSKCwqPXLqttrdPXY1hA",
  "key31": "44aUE1vfrq8nZUTbd1Ej4mLtt39JhVJ8cRktAGc3A18rCzHBNM5hyYwvy1DeBJsX84ZGs6aWCxgBzG3Bzb2D7fTu",
  "key32": "5FykptzixDU1PtFysT73cepYTZhzvgdKfCYNWN8BsmCSMbS7N4WyamJKuBp4SVxFdaw5VU4px5q4JwKxt5pviiDh",
  "key33": "5BBq7aKYEWDwKdFYo3Y6FGj5wVYpuD48tXzhThdJb2AXP9ArcahWMqJYwtXNobYnT5Jv5a8r6vxYcx1SEAb7391Q",
  "key34": "3Zzju7fcwYRFCZM9T8awSKML5NhJyKnG6t87DkRwKixViL4bvhCro1kZY8B2kDgVvQzJdHb9bPdDgxuqNeLB2Whh"
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

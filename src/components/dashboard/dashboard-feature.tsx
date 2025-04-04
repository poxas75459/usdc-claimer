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
    "36XgFkes2Kq71p5aDvKFzVag2nBcQKkVjqjQRopgKWe9yNCGRMrGPuRuXuJgeDYJyN2mtXF57fLgC6LYjaCJ1kYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPamrs4pn4ciMxn3vqmZxthGPVjYomssgPVDQPC4UUnoQXwGVoKtv27Bmz6gmUVeJKUGT4pfKwBcXetnDGzvsf6",
  "key1": "aWaf1cv8zQKCW9yZ68sPsm39Xhmv7yFAPcwXYwc5Wkrf7k4CHoXchPzivjhpcKGeHVy1PoeWNx9cGaxyfVzgtzx",
  "key2": "21sE73PwykhzJnjDxt2Aro7oxJZiCFXjH6Upea5m5BipLZG3zeUdoxNKMKZRjvYk4wfFpiepoApBGVZt9PVRwGeo",
  "key3": "4rLrR5JQbPgtgjGUXtgPaCuJZLhwxqscHxEWnHfTEF2aZ2h2tfBeRPj8UGQET9JQdro7GZokRgmXMct2o99DKywb",
  "key4": "3RXyK5L9uZkw4nA7hunCJPFjNLyr4qhNggFdKDH5yyP2qr7EMkJwhZnFkmWsMBW477iL1PLmMKMse1UjBa24Wmxg",
  "key5": "3HQjQK9ZLGmGCytuoiuztixBrhfAxnfhoTsZvoPuh1R2sCV3dKQaBEG8a96YhMGeqWeuwMfiSUEZe62f7NjMqcUn",
  "key6": "3b4UftfMC1v6X7qTd2TGvJU4NTGeCzU65zCBKkQC7u7J2snAUTdNouyPh1yW3fd56atjZ9tMxzYiyNRaS6aCgR3A",
  "key7": "4k26B6TRXaJwbYVqVasH9TuRBQdKqK2rxsagMZ6xGx8N9jXjTUaFPQ2ZK9mhJd9u9CQX9oVhcLCrmJ47jMohxV1z",
  "key8": "2qagSq5QDUPDpnttrEJxNAse5XWh7TEtycXjzKM4dLyycxdJzeqVHDKwcmBn4G9GLqgpeFLMfBqV8jhafRGWtRfm",
  "key9": "2FsrGtZAWbZtom5f36DCjpZsU2rpXctGMY4hfFL58UqNUwDWYWUGMi2DhbgxDMXwdh24CQgD7BYZJmPCwtakxY7m",
  "key10": "4nYtsdTcf22PVstwf1ixNtmkpqoiPWUvhDMop4cVpHBZyjH2tZQzd5PEok8UMufmmjFkizJQMz2BMfr7agcdpjBG",
  "key11": "3FXEvjvanmben4gaumDs6rL7p3BPvWZfqhE592HKciXBAqTeLD6GZpGFf5VAHiQb63BwUk8sDfY5mdrgXfkk6BtN",
  "key12": "5AqNJ22kzMs1tDwTe62RGTZaFuk8YGj9j2Z1Cgrrw7KbwpbD5Keygfo6uX9rCwfoHB3A8icSrv2knWX52hzwX9Z5",
  "key13": "672ReFezjEJ4bumFfqFbi9pTkXrnmeTBnRifQzNgzEVfYCiDaiaz3F6iigZUrEDSsGeSpSYwSYWku6bjxhWSWQtR",
  "key14": "5zASbYfkHG6UbaQ2dFK5t8Sp2f8yNLrTeVjeTxHpfZQMz7muh2ddgJW2bSmuoKxXqsWC2Kobm66dHWFWiULTCbw8",
  "key15": "2S6aUeVMJrtnnDf6RDNfVUW86jTURJ2ivz85s7kMNEJb5QH4CfUKbSAqyzUjTqL6FjMAN7AE7N9efbKbucv3vfDj",
  "key16": "46FTsBHQ7e82EWoWE4EVRqLi279smnPoQ25m4FiQBzmDekjtdnRZLr6iiEEUySUosStvke6HNWknMG81Wdx4cNKf",
  "key17": "5HiHsZR6v2BJh3oC5n3xSQ1vRwoe1Ln8dQghFiVsAV1BUZpHoEJgkUsmN22T5xEFdgpnVdXwMMYM67d2mDgpc5re",
  "key18": "5nEFcNNG8VMYT5TJRKTzxQ1gq6E6yKTUsqT8iCfMcY8cpu4HZiEZbetq5yXrthVwGc5E6Uh6izm7y3q1GA9997Jg",
  "key19": "BKf3ym5PP14Cw9n5dpfAByUmZwLjihSYfr6UghiqaBxwFn96M2cyvhMB4oGF41QV6s3J6DGh9TeK3RQKR6YUgic",
  "key20": "4YLXY7RQ4sPz3wsq7eHmPriz1M2gAqvKeHsZRUqRmV35P6pGqhshzQK5EdqkVNwazZ5WEkdwYcanMMfuhCF5hvZD",
  "key21": "3NAMgjj5NFak89vn4WQdYrKkcuE4gtzdMj9eA7ueFgW39nJiNFWkJydQEoA1CKTjC9oV1nTbzyQXmuWWtyMf7vft",
  "key22": "2LxJVkMdVnRxmLvFhrXbVaGyujUbL45UCfWNzr7REzt5kte8V7CCkw2dfHfde6C7z4mSXhZEhCg3863fBWqX5aoZ",
  "key23": "51RT5mXguTBHRuurfmCf3xfVFMgFmqAQVozaGSb9VKDZgG1uxaFKxYUtUo3bfwDcC8Xwz3V97Gj4nVMFW6oQwfdH",
  "key24": "3CoB4Mtn8HPUZkQoXmJz7nbuQXa18mSU3YcK1injY5ATqPz3mpbfkNESe1Te9rqJhCQGFCtuoFwubd7ioPxvzkk5",
  "key25": "7dM7ECeeaEsPm4FW8HPXobharTBzfb4FJXPjP1omDCGeetZE3cKivamBeovk4J4kNbgD4SEnjWahFethLypDkMx",
  "key26": "5ficv2M46MS6p6e24JYdeJoKJimkgBfbNrFd3wQ1g6tDBq5E9fAw3Cvu6QnyCiDnw2KrCDUS4kgTJ53ZRczRSGSq",
  "key27": "4m4eR7DWYkErJHRYkfrD8ykyni8eMEpGewsZF5csbSm6p2Si3u4yU1TmswbEhbtfiM7yjeuyFbV2a1c4mMSbEP5P",
  "key28": "6wZmdZ8a2PjRhhn4wMkM6MtDDe4MCb4k7E6Stdyth5S4jn2Y5JcDzkGMKDPKoM6fq7EqdSamom87LgcUtsfmBY1",
  "key29": "4UE67tp8mDVyp3SrYhWzGfrJCCuFkEv1F21pMW4PVoM9bMe9URuaV1W2SCvfSwyZKGto8Rmzmsh5hoDQWwxuPFai",
  "key30": "4PeR2gjiNNjsguRzHYEfiWyi7mtSNFxy2MJ9RyhD3suAnx1MLuY4anp9bYBMZum1bmZzRGkgAZjVSGUQwPpVRcnQ",
  "key31": "4aPWmZWBKXx9Aex2iTo5NqgPRUfKgtPbJ82R9FBfyy8DTaBRdXTbHkPySQQgfGk5H7s4ojL942b93WE9qhsbo1XK",
  "key32": "2Eaw23e3CwQvrhLvTpNxtEMGAUedZri4aXr6HXVJB8Bj2gJt8ps6FDRbwcDsJN7jgrczZNB3V7ZffufeMccTPHwk",
  "key33": "5Tq6ef9zvaSJcjWzcGTHgYUuViX7RqYT22eCaHBQzERo5dxXxARuZa7QvD9qyAnzhJXNCJtzmKhK1D5a4STLSZ8B",
  "key34": "4ULPiNV9Lm9vH5bB7m7nXMeKBmrFCGXHAp6e6iCnYR35ZTgAHoBFBBgkc31kiR1Vv7i2JY3CxQrBsGcapbJdpX8y",
  "key35": "PyfD6HSQA2UmnocU2zYtCkFfsXyMa2JWWRUJxHH5sYDKjZ4c7GENbcKoAcmFedi4dXnRXhBNyXqsJaB1Y84CGCc",
  "key36": "32QJwZWpQrhp7d1Aeccq34hLNrrMQCkc6449z2bhZ8SNJsmnBfZEi7ib6KF7ihgxjhTY1MmhKpSas68NTrxz2NVk",
  "key37": "3jpin8vfxDR5kdcAEU2X6zbYRRCJmYnQ6tWrLMHrMTkXd2JgXnxUWqH4SRUx6hLBTZuXtnKQiZosWpYQruveew1E",
  "key38": "3MG6LwRpbZvhnr3b1sW41BoyhEiJuJPfKFXMFDmzX3skJecGmZajt9DjsqAuTwBhGUDR3KMdS4GGZvXoRpJrQLWz",
  "key39": "5KVFB9Ci8fFnLZb5wnTdTiak27V9eybtskBFA2teXwsU4n5gkDq1fjDrNDTuBcaKo4YHqxEsvgNg4cta8zNTSb4R",
  "key40": "2TUVb4tdxrxu5Q22SUg8vfqiJSELrMvxE21uwfXmWkrH5qRakptuoPitbHzivpUoDvsijRgAFDghdtJrqJ18kAj7",
  "key41": "DSKfG8YZSxue3XSHzCsMgn9ajC8ttojSJJPmJpdJK1qWy6tvx5EmFDn9LDVmKX1G9aoFuiqubRgwTbRpizYXcMr",
  "key42": "5JwxQBoFG6VDLJpWEkszZPM1B3X61GYjWAT9wQba1rBG2ArENiEgUahRwwtx3wgiJBFnSJo43ZVE8o7oMWM2J7ot",
  "key43": "5eT8tRrnK2zdewqbsxyn6GBMrV8Be6RsWtymdbWNp2bPXXtwbhfjTgVvZEeFRr6CStLkrnBfTEqAawZLC7Bbb7db",
  "key44": "3Q5F2xDufi7vmUvA1ihu9vQQbHh8T3kn825wv1MXanwLjoSpXppVsWP3aVSY1kmaYkpkCZwpG5UWskY4NuFbvWzX"
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

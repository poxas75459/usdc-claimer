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
    "4cME18txgjWa4ZfUdEZj7uVxgwEppo8dR9KhjTuEH3CcWmj61ZzH1B7GHqMhdi1PEQEuxjDqrG8yiQ36CUBXjrVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v4PXRqnuChP2p2QcEaSuVvqttYcBJXZMfnCGm3FM9X8AEQ8BGbF66fsJGf75n641ZKVmjaDQjHFzFuZ8zo9Yp2x",
  "key1": "3xBoTEqMz9TVy97KY26oJ4nuji1obmtRV3MvMCQjPjbJGgD6qmXTy51cG69s11ANACCLzguLfakN31xw4TEgUUvD",
  "key2": "53GCqJzZsVaubyHBGHhZuUbftRuFiEuLqYsgEyBi4hDjARA41RBjm437r7g2WS1HF4hSwZP4yV2yh73Ln7t1puUC",
  "key3": "3NbL797hYD39DQGc3uVbBUa7xdswqWcn3aXKo4hDixom6sZoW8C9mtBUMFPfwbAnNZi3gnam6qiprx5XdyQtyZda",
  "key4": "4so5SQMVgWAp3ahSgHAtGteajJcWezYR8Uu1oaT8W8ocGoXm5VVWCmgo6ajoJzzqhE6QpJKFxmeALnQdnrAQBNwu",
  "key5": "RvLfCMHyjCUdB5zaB1xzqGq4tu89VqeLsjX4AjBhgcxafssu8ZqRM9wTLCzDKv346qyRnBMDbM6pt7JByMC8Khe",
  "key6": "2nQ6qbTMEcC5UVSMNXQFgPY6RkxbCUhFtRjLfo1f8Q43gBYPBtkqurRGsPHE8covPWePXtkiQkv81t66Zt5LouFJ",
  "key7": "YK7gsdL7GXfSiNBMQ1y9yXTMEwAgf5JXFgmZmzfPn1uNoSJwuXaV6PZFN8DcN37eD5XKPhWHFyDFiV2KgwRscgr",
  "key8": "2eFt2v32eTXRXpsdRjFkQrhzVGdueKdPcsZwz78eR9RFzfeeTmCWgSrP4XWKNePwwvJfu99QKLSznd9oqpENBPUA",
  "key9": "RjDF93rRbqSYTsQhZtbxRPp81fRvHTXd48jiSm9wLApmt7VS5mzLErWF8YNRhryzz5ht1EKydHMjh1KDR7SSmAh",
  "key10": "3dReDrGqUUqguzH9ub8WUdayMhyZsSJJGUQo3YgGyjt7KHrAdV7fNLsvhWACZZrLopovtB9XxP58iZ49dMBwArZM",
  "key11": "24HadD9NSkvaYYWFKUToiqqRdf5LUS4BtSntQYhniAv7GD5hukcfjbxkyoXKv87642q2xy8yFMnLagW4j5hT6B4Y",
  "key12": "2Md2aHCYpxic3pSG4Wgbgbx9R5gbCP9pNmeCpUZLdWGYZQZQV6dXSmGin3FrR88EdjH5BXfzk69hMSX1HSnbB4W9",
  "key13": "ppperoXL3AfVpfvKYwLVerzWLoo9rMWaXU7rdhe1oDCYxGeHcBKc5XqoFjDLEoxHHLZGVVuVnemPy7x8Y1DYGgp",
  "key14": "zRntLmgS8HXcgB5giSiuXqDFBUoHwfHEv1hePXetaXj76bo1eCbJcTKRuQGT9UrfL6767vKM89RbfwgyfLj2zie",
  "key15": "4dDwMqXpcAGQHRQmukayPMVAd3CW7Wyoa52fAoXe32G9ucSErx8y4UMCgRp8bE5EgwTRZRNi2B7vsn91SvKPLCcT",
  "key16": "2oUfAcAcmfp1AbHAmiXWgvbmYVLmKQQKWgGQWU2A4KBkSyXUttXFTfYXkVuKAgGxc6TR9kVJZSEqrCGCJemtYv2a",
  "key17": "2onTzLAqqwZVBSHHy4tEnMXiDRT6AV24F3Y1QcyH3jVbXZRvHaS1VVMRqVdjjvHvgnTTCXvf8gpDZryRq79Ux9hT",
  "key18": "2qWcbUr8w99Ts8Zo8cVG4ibTfGVsLMwMfFxGLNCgbA1gMfRhXhv35HTdEfUVsasZjkrhgk2y4Qe5bDDWSkqmQrNs",
  "key19": "4PHuW8P2pqcMK7tgCoF5dxeSmpMKwjpQTDDF4tTSjC2txDDHJ4kihLT2XryGnZjuHnMBzf1EYmPpvtRHG7USVKqB",
  "key20": "4RnLwn6muZUvvW1ahXDuZhgTzJsqBTrL7cgpfWCWG2epZuwY3AxJms49aF4hdzBjLzz1B65RgzLUVofuYoTzPDbX",
  "key21": "34J4dSTcuXL11z3bBKFe4SCf4kxwD4qgDZyEr73BxCYhfygvT4SLQ6iVASZ66pzK7mtpZnFMvB8Qu7FD8KSFftx4",
  "key22": "4BESUXz8ReP16fnuHYv6YRUw5dZNUDbsZMyWnUj6Es3tKo4xioxU4o1jd5iE4PA5r5gucMKLjy7s84DjExEZ6VfE",
  "key23": "2qyw69QdejHvJWEuk4oQtvyyr9At7aVicdse1FfEeRGqjEDSCFwADb4hBnggXEwEGf8daBNm79whcbvzxnnzihHr",
  "key24": "ymwGYHKoiebiGxXampLVT9qpSgDmm6VopvC74fTevF67DvdcK9DgFSvAbbGhn5VT5SXGzZewVmBK3XgnHkaUdki",
  "key25": "4urVMGRNEEdEY2XZuQg5sFmjAsvk4bFpHcXstKpEhDX9rUCe76n9PJyWkJFw2LGZobqtnnqBRc3Lxom1hYKdjtNe",
  "key26": "3SyA36cB3NBeJapgwCgyvSk62Rh8MbCs4jXi1ZBkPUxN9sX5qgBj6VGD7dmz21oUMwkhiruGMmXSX1YSST9wcMWv",
  "key27": "2m5Mvd9hQrueAina3NiXcjGJHLqRfhBxUyYJrg28j5KXMsEmksvnGFRgGaPSsqURaGgjuJWQWSPQDCRgStC8if45",
  "key28": "8R8HTD35mGkMF5BCnch81rPFGqzZRUvXnZ4UKGTrH3ALwdgqSXHbtyGksjqRLi7BDdGL8y76sLgLS5vcb88jzuG",
  "key29": "3rcWBrDc9N2WPkdLZzLHSUtUtai96jr36hjn6nQDW3LQLAK1nYZht9HeoEcryES6LsjSobpQtVoioYG3YPbs2V4d",
  "key30": "54YgVeaRJvU95eEimFWtHsVfNHWG7TDC6HKPvMsxQLX9VDD9DexjuWtM1FswVgiewhM4cZPhtYqXzMxRzA9Nb5Su",
  "key31": "2GRAA9bhNrBJbR3MKMaKXdqjvtdVmpUnTf9QSnPA3q79iAsVUSPQZhYU3Ak2spx3zm43NTDYSHNuN3dRmAhFLtxt",
  "key32": "HPqBHEr5wUvLnsPsKDhZGZzcQqJbqDHzcn8VGvVEpNSCNr5gyZtGwQjrjPvJ9VYh25wWeuoqBfXWwwE9TnbZkWv",
  "key33": "572udJAzXKYQYhfijhwqTqmmWYVVD4UoPCwe8SXw2d6nieHiJJptajvwt37389rqsgq16LF7NzJ7kvCVdFpAktvP",
  "key34": "3LBsKrv1gNa9gt72jgMaLJHDtGpUv55Aof9KEzZRYP4h9f4pcQuyPNNtJV7eMtZiLzSj8qd1ZBsdbsk4w54L3qHZ",
  "key35": "AuXEMebwkF6s4MTHeBEiuL949ygrzDG2pwjm2Hb1x3m8Ch1AJ1Noi1Zk7PKSvr8WoaczzxBvdrT6wEfEgyZZZLv",
  "key36": "4sRuBY3UX55wCsYARxyAPfmvB5verW8tLya9PLmL6WEAq4SmYhtmFKdubSXUDWJZSwcuXRa8MMYJhu8dLFfiHkqS",
  "key37": "2TyE9a2VUZZFMqCzPB4woXyjPhoKzcZuZcGCEzNuUqxBLHK3R6v8tQ1LGumkY7BFHwAH6dqxSqm2cojxN5u92JVS",
  "key38": "i9fVphH6FHyuC7nkueCv7qXXgeZ6sgEpjEjTkBbXXqDaLSvugrux54gDaV9ezTTCFmbXdsXg6zJhv6pYaihcmvm",
  "key39": "3ej7k8Vt3EtyWPccG3z1xZyYTWSSKm5DGH6sAyvxrKLUsKATeva5n5SckaeGBACL5kKrS88xBrxUcuBm1bFggX5L",
  "key40": "2iUUVbhnzLtg1qhLKwnDyWJ9c7rFXPRPtuGmRVyV5EnSnV8cPfAY6LdY2ZcLXrYAecjyUdJNcuxopMeWXGaY3Uu1",
  "key41": "2UFtfygpUTusvTGfVk5fMJrocrhQSMdycFK1WMbrXX6Vu3GuQGBBS2dJXZV1eC4jmqdEtBYNVwRPbDusWGu54TF2",
  "key42": "28uQqTeECgQ8rPK581YGyh5kNSdJUUmdBmGo5n3Y3chmGagCkTXPCnBYvuK6xGtvAdbEe56GG4R6AEgbDt8c4vV8",
  "key43": "5HYMA5jsvMiHdgTKHsieKVdW6EiewJ42xRQkhZW362MfNqw6UYJJBXxdwtRKaoxLFefnCa38yKi4xhKRP7YERgKK",
  "key44": "4o8Sez2zHkvQx1az8NYitho4Du5hbyPiXL5Y2gGAa8gHqXxEfT9APPWmAPSgPi2DCM5pgiWw6955A2hXzZaG653f"
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

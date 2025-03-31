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
    "seJZJoUyMt9P2Dty8hib726BfYLNV1zy6Z2bxuBWsTctnHXGRaNfsx5r6ZZZT4rW7XZsT7KUh4RJLwKnmt1emg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXxjTk4ksQYFn8Ted7MCbKqYmAWGw9AWMypUgGUmhJPA8o6tapmdAtNemdsPNsoqdXQ9tVLYgADVKjxQqnvKZ4U",
  "key1": "3i5AJ1aYKGDM1caWTG6LAXf7B7gyeZJiYe7AKF5eWFDHjBtug3vxwp8BgnoZb2UUentSmFZeJL7UFPjkdgLMPmca",
  "key2": "3cHtY55V7RY8qH2posGzjcuzrznbALrRYJMrEbpnmRa2vCWsY3AstmH1GFKR3ueC2dkvMpuL6CM6oFTCXEgYwLBX",
  "key3": "3nXcYKgi3EA6iHMeZgMkMNqY3ZAtTrub5v8RV8M1mjf9jEinyhwKUabMLCYFH6uY42d2BckLxKGfRkiShcg6q2xf",
  "key4": "2zQ3fACTaA7mNZASxAqrN6spDUt1UjAih2auJkdYAmNFW8DjgQ4GvthKvSkUzaQ1jKRow6DcrKDyFWN3AmiGddbU",
  "key5": "5ng9qUTz9mHViqGMbmzGEYWwqa46fhPDo5aK1GGqKxD24gMQH4WoFVw55vpVUVetZRQLEgfj6E3gWdRyyVUSxz6L",
  "key6": "4if8iJ9GPwLJcXHNzTBRGBwv8YDVB4oaU4VaR75Y4zKwobNfv5kww1Z31HfqWiUgLcUbDrEwBop81a96KWwfz7aQ",
  "key7": "2J4Uh59Gmhh8rRRxHZ8q5AvGUCrvwSJLc6ZAWrw1JjfSHF7ytagMbmC2Ud49CXbiLxJ6AW183qjuV8sP6aTRcRYs",
  "key8": "5AW63EB4FwSMLqf4izKhL92QjhAKVtitYvpYLC7fT8d6VpxYgApYjcuEjX8eTguwvyprcrfsaAmc16th73EEgHRa",
  "key9": "BtdZPUUGHV4KATpaoVFVME1nrSjLjgrGSuxwDAums9yu5QUokhqiwuT5or9HV8i8qXveivBmKzvKagQvE9cCGfS",
  "key10": "4WQq3CikprE8M69c5b8yMtpBYaLLBQgDXQFhdpY6chXVZwNYSgC2Viugm2vjjKt8R1gtiZ2Kx6KXwfoDK85X72v2",
  "key11": "66wadb6QKLiFiL6GenF2g8VE8u9qjn4fbWZkWkBXvtGc8fJduLaLUgxjVhFueXLMs5igsqy3rmZNqbnaMpygLPMa",
  "key12": "5PwDaMiY8w7Do6er1HkLHrdhjib4zDLQMJ38sqNxY2FtmdCYfBDoeP3PVAsi3bFb8rqsay2UNuzPw3FJweQ2H3WX",
  "key13": "3jfz1EY6mwyVKrnaEh2QsiMQq64aRtBvqZbfogwVFfMEjquVTXCzFBVkT1XxvKJ1UNt6YkTCQ1MYKgRWjKSqnvGA",
  "key14": "vQmCJmV54B7UumfEZRTcwEFNRrrjqPgyv76aHthwhLVavHndnuzW7APCsd5RxEDbUcgFh2hzQ6zQY9kCvPXqCED",
  "key15": "5joWLDy6CynsPbbwfzxjc4KM7gj2fZYc1HPmV4cf5NL4PBUUCajazSjTozsxqRfePWKfCdkJTJ7MoXw9iPJg9eW1",
  "key16": "2BySVpDDTuWi62qdwkcFBR2LA8biFiavFPnqtVA6vNYjfw1AcSK14AjjBiMMatrLBuYdvoYR1qvdP1ERSw83FwXm",
  "key17": "59A3W4vs8FD9qCHV8V1B8mCUmKoBARrkS7zFKNhiye994BMPA4Dq2ZkGCLNdFtdBW9hCwd3o3kTinrdUoLnpMjtt",
  "key18": "4akXHXTWahcuTw6eXJM1RoJasRguUaNR8C7R2Ze4ZGchpuYoyLWvatLte56ZaZYCBeqfTit5V2ee8bMbrTQ3jTSv",
  "key19": "2kmGT3Xt5RKjbzhsZabbjyH8SMU9HPhDcse9kQ3YMxJQW15NEYnoXLvkJesbeSYRvkkrwqr6ecP9TuCGARxNpdF7",
  "key20": "4gAcL9m6bypiAzxg78UqV1Nzb7S3EUK6QfMHBWp5oMqQZEhzAXXYsmAqwrGqn78RS9S4U9AzXKgPVdmrCDHgUfqA",
  "key21": "3Rn3xScZakBWCi7vSHDPaZMdkjBtTtyZM3Rq6nSjwXZ2zTZ3mwSFtpKsk73Y3pc4uBMmWVnfg2wWcmyJhXz4sbt",
  "key22": "2sfC2L8bLGNMjhEBcwEaBg93LT4gznt15GcF5Vncb8p8fPo9jeTWFKZ2HUhr5swMAybshgJMDKMEy8j4dJQKwbKH",
  "key23": "5f472JPHvUdTFLWZYMTC6gf3XKVvspSDyqsu1ZZqUnHVpWCsUNaAsZh94J4TAYo3WZabbdsJNtCiDXMetqkonfHH",
  "key24": "38wy8x5FSnTPu8MPHRrQrEtFWz18kbazFZbGiBMiUuvZKE1Azop3gDMWssoJ1fDY7AaTomzpVLhY26VMJFsmS1WK",
  "key25": "2FvpxdPjVJvzBjC2KVU7H1pYYHbGBVot3h9MGGtcQ85q54P5vqtf6RXq75MacmYQrURtoJNJWQkQdfk2KKms29ME",
  "key26": "5fhkWmH32sgqPMWxQgS7Gbyudxseecmu5jKj6gxZcbQmP5Wa6WH6fthoRheKJQ9GWbbWWy8oT6ozZh4XDQpBNHke",
  "key27": "5soWtGHyV2vKdA2VhSKoVPkJRg9AdnRokdrZ3MNpgvBoJnv8PaT3nc9zyuCyEnyi9pN13GZZn2Hwi7ciRZwDZ6nz",
  "key28": "4BvxnT3HyQfAJUY2qZRFzM9iK3dVgikK3fmtxvqGkPCXZ3Ugv9DvjmeGACHmAUWVau98FrqnwLJbkQ582DnPPHof",
  "key29": "5notoETethGQDkbGGRZtkc4x9VAP1j8ecRykPTxRAmX6wJzYoqsTViFB5zUsAV2ZZDzCDUt9FiueS5ZyQDFrBEEr",
  "key30": "DSDBBK8VM7ryVR7Tc8mdXSC4P2dNxzANpyucnGVYEkA3KMKA5jjUSo5VsScXMj27xjtSB8jFAw68ioHBe8ks5kN",
  "key31": "2aPa6sHRA34xT562zRw5NZERiQ2hMSADnoA4Q2HSWfq8JtNyZ4qXxUtDap6MWYRA3iECuCxjnv2UoifUk3N4S4PK",
  "key32": "5ubpu6sFwdxr6u641mw8NDVcCk7YK2uk52a7tTQhprZGQaFbzgRJsZfJAbCJEdwazxDYq7RNGk7pVVtA67q4gPyD",
  "key33": "3tZCSVc5dJKPjQ72NC9KLtoqMBkMrqZe3uygzgKKCpznjGFKurjrjCuPwRx2s2HgbD2UkrVb2CWnfMqPqxMcSDDz",
  "key34": "63L7ZbKE6ZjGWbTH1gESnc5pTEaTnH16n3CRptrY8L5gTitut6xLF1mNz5ZEED7E6AMjsQPDQeE8Pexjbe1jx3R4",
  "key35": "7HQHbQuh8WjssVnAPtCdqGhfPsnZ37E1LyT1jtQEqQzkwCNCetthwp2i5LrpJUfHw2EibTJ55KnLjpP9LSubJ3i",
  "key36": "63KM4oie6UP1XsGKTJp455Y3VHbdc1s6XUZiyAjNgoMWoyV7cyCAyhpqf2147DZSdc3EW8uNfPBdmCmUYGZ1Ltq8",
  "key37": "2Vfv823DxTffy7pBe6Cc8V8QUpWSggD8uQrtGkB8ssLxkwRzFnsDHWgoaXuejtxi8FNLrcSynN9ApBBXZ6xaFfko",
  "key38": "54eqmppqraHqQkP93BM9i47D3tCcTNSAuvUFz4XUawKBVBGPc5KcG1yw5P9WSCWPweihf2hZ7M1mFWp9qH3wiA3Z",
  "key39": "5BFBi7m4EK4L8Q9CeacSZv9q57r1psCBRtpQ8a4MziwH1RdBBewgge2mRCwY5cBsvMsP2SxVYHHnzFKuSrvFkArn",
  "key40": "3rYGoCxFBtuJh9uPG9SAqfoALkjtEkrG7xieEUwmavqZCE9BsT3PxJaVSrh5PPPfN6Zj5UAgHdXVFawNUVQjqgRa",
  "key41": "2Sjg7NP3Z94R8JTgLwyXYS4SSqtjMSH5x3dRFTP9JdoBqC7zgULsrxY47y8QpC5v67kgEwgYgjeRCi4uztw6KPFK",
  "key42": "wbxrfTuT2DnAorSnAHnCWv52qfQYJxuRSAbk5YZ8AUaigi6csnbtxKranyft5rwccj1FqYSHg8bgK8gJUCJ7mN1",
  "key43": "5LNWE3btGYg29Me9PBmhh449WZfTu7dQvno6BHpakKTZVJBPhjSCSCaJ5QpeiVuxUWDEQCjJp77K1npNVMYKFRp5",
  "key44": "2AedVSTURCkV3aYnRGHcsE82AbM3CoyjdXQ5FHJGiXiUXpzLFuek88ikbSRZFhnujQdQbUMuGjPk4evYersRpjnV",
  "key45": "62yg86BYuDEcBfh4ZfjvXQux76DEhtsbLDJPqhUFKoQmfheN4Xt6CzBUKSzz57uTww4NRAHyU7oJACiE65jx1CYz"
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

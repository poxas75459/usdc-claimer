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
    "PDQn3d77euL2xud4iyqSprqSwLhXjoYvgW9VbF4MhpwMMTfkhpEGzKSpmxFQpXfrsEzktB5t1PAEt6jtX34H57K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zy8WeDKNK7qMWuvShgTfBYu2bmqhbpNcDG1Sfb99zDo1GLDXuHWtTyvKmCLDkGXZk3oU26pubsggLSwKtpmbwYC",
  "key1": "2RRLtkK92v915NmWkdpMNuTVfWMhSLA6QM6VD5tZTt6n4GXASM7i1BoYbCtVrRruHAUhrsZaAxzoFeCbYc3Dav4T",
  "key2": "4zEmAUsZPbAjFLPjkz1bMr78mS9vxXeTGeGZAx1v8PuY9rkdWCrbV4qMh1oR1nw5hWe1ivo26G7kcPp27C4qDfHP",
  "key3": "kQqyLj1f1254q9pXfi8EJQVRctiypoPhopF2B4ihsTwH9dkr2oXwjUYKiLjJN1Hefrbd4Ay8vtrwpko48WHHhcc",
  "key4": "3aDgCvWk8aQyXmi3CJ2HkxqBJd5j9TTvmVWPXgQ5Ayk5AJL9rknqyBCyLvpNZtfmPDHQ1Aygv4vspbw4wNqbroqM",
  "key5": "ZVJGsTBCtoYtCbj7mktt1AmHCHPbZoYiEHCJv2dqyowzBuEQYzQ8E5fH9G3mAtxjM1zvkVVZNzYkKP3e64f4rGk",
  "key6": "5zw9cUb4CDAottSLB2GeBCNb52zru3aNmXC7rUnqvQdwsiKN5KHKjkmGKxfAvbXUVHP889hNWBLRjVtjc9k8Ca6L",
  "key7": "5RRqXauzkjh1nd6QD7tcZ367AHrB5uXw74VcywtKsrNGFEnymdLBrfNqghN2t2McNCzr9R6Y7D2WhRtGD9oL8U7i",
  "key8": "5sv7ZKSAJmPXr6Pq2N1WJqt9TyMUtEtTHMvZBX5ND9HTRS4beuUKvJy8riTBd5FmvLExUFNZhEaedTkhr6mnXFXK",
  "key9": "Ti4cyfuz7HAuguMLSnw6nFrfk1SyvBzaSGHGSfS8y7mPZTeHv7c5mQGfMsLKeJyht6zMfZEjicbNWw8pDAcWY5d",
  "key10": "kf3rNrb3UdJ6R5LiWh8V9BA8YcequuWbwtZTZR8XzXLzj5Jqv3j6vHatFFqiTtVNc3xPuPhCV1uJPXBMT8ysYwB",
  "key11": "2P2TZLxYJHMtVLfNALyoRF1K9q3fstJa8hUiaBYrXUKNVCpKb2DuYMAffU96B6gmKcB7H1WsNHqBoSzH7xGnNd5s",
  "key12": "3XjoVf73Xze7L5KzWFRuYRb57U3PszSz9SaorcX4qvRYhxarQQUpf1osBdE7gy4gMPLT2tSvnyoXUMwHikeNXE2C",
  "key13": "3kps8zdGpmQWVb2qCiPDLnGj2rk7djqDAMBqJZ2JUqX26q69B8xG5XJBpDiafzjPyud2EBcPb35CgB435hQ7j4g5",
  "key14": "gjsogXwYw1v2EgpDmHEZeCxkS3BMg7FvwdMgH4ak6jrTauZvJVLXrEGV3G4M3RdFz3qKEM4PQnuoEE9gmn436rY",
  "key15": "4ZQu6xs2YcvbEVqKMxd3wr6aJUgDc6rDT4PMruETuD2zL2Yx8xwFAv3RTeNQ3XTbkhwbizySCSNgRVRvFg4LXbwG",
  "key16": "5ReEdwnWTK2nQoroRaDEzUXBNmBWtXaXuUrAJZkgufojPPZs25HKW1QbWoAsbGPVFJL7ngQZdp35b95PDFYHTUn2",
  "key17": "62Hd4VRoT3QLh1bWt2DRuLCmnEXB8D29qUKm5u8p1wpH88gtfXGMuBekBY5RdUDV7nCnMUfhBaFRvTzwt7W23z31",
  "key18": "457PoqwHFNpMgrY7qxr8SBw7P6tJJPb3P2NUANhjnAX6Wap5pziuPpJd3Qg83Mp6V65uZRsJ5EZQNKBbAQjYJeqQ",
  "key19": "4P56GZVR6MVWZuQPJywpqDzaTAFGDah5rXjWr76KfwU6p9axQVK81n1LVAnP3pCMWntH7bHKh8mz8iQ4EW4HxVmx",
  "key20": "4es8PDeQqFBQfLF2YgeBj9PXHvwAuD4s3Q5EoXfufDgXTxz2KAhyaCkDSdJeedb7qGnEWX48sy3HezDhohYESXM7",
  "key21": "3BAA8TPEQxf5quTT49RCUNsnMLuHmX8XXV5mrhmidov9dXy1m2z4ejhpiAjb4F7hRo3vT7wRkr4BF2B1DBm8HhNP",
  "key22": "hJnpV8GTEhRTtKM9GFUNCo4eQULXjXegLYdHVNrCar1UCs5mRFPKRq716BwZCQ19jkQUCxAfHosSkQV5EwFYws9",
  "key23": "48qE25XGyFuefUMmQgWoUBWpzagHeiScEFKUKDYg18aELt4ze2rSdna4gBwdW69BDoLqeuYJNbjaQywp1cks5TE",
  "key24": "2Gy4TbuZcbuG2NGSwyWSzbJWTh7ktLZrwmvjySHzwGxLEwUovnkha7QGuqTLxSaev5nMbJGFXdM8qd3MfoCVeV1L",
  "key25": "1LkNsWgc66gJGX75gq7rHyxwGBmfaPQ6HEB1AcaYRNU8ufrqPEmf98TGtgUbnYQXRk9Tym6jFZpgzdpQedRwwpK",
  "key26": "4fGdQQbAkN57LWaziYfBGqrXKUUUrXDXbo4gmaNfJFm37twxcDecw5fx7Y5vCeCTDEouSfLtGjSnR6RDGYhPnRER",
  "key27": "HTjbnW28sqLD5Z8cZfNk2ZhXFsQuFXV46DAfR7gMmPcyYpR3fYGwRuwUAdEJRceBK9VJqyiU9pL5UsZ8gnEHC4d",
  "key28": "5ekG2Lqa2aLZPwUxSJfRR4EfGTNEU5poxwphrLZSrciawBZmjTCEa2Uma9WTVd63t3ateb1rFRGKJwqFW3ApcZPM",
  "key29": "5VxnBDicJyYq4SUhMUmMtq3nepm95qwrGYeigv4AgPx3D2g44o1VqV746VsRCHRtUnifDwePvzGmfwqpMkfjmTuq",
  "key30": "4DNRpHJWSHnXfPxcAHh2xbqQfEtaAp1kpo1cuSjiFTpuUa7KvFYo1mqU2AQZHXrmWEAWpGdhoeUtRpY1FfJ6oXbx",
  "key31": "GAseTxbWTPHnCNe6CKSET8NQcRtz3VfrU8NVfgn23bfEAfNxFNMcoYhcvAmy9PxDcaEqgczBT8qKJVgGwqgAAsg",
  "key32": "4kr1mbCj689P8s6FBi99f6cg8crSKooaQF3e6rVXJswPh8sSyra7iEULoU7Yw5iBpVgndafWyKys4zMBPTB7yZrb",
  "key33": "qwsB79Y1AXGmAUmNQj59G9ijDigt93ptDmFhdxSDRzxnRfr2syzd6ney75SpKLsAYhoVzYNB8f5aZwhuCGfLJg4",
  "key34": "5xSVoRZZFwg6z4e4eQiyGVcd3FefW9pMkLeVXjskHosqLWRQcgpbZTjgsr1rEbYKTj7y4zGoXrX35HPJCqAWbYQ7",
  "key35": "3JVFskoVw8zK5sWyGnNLn73q51K1dyRtDjtePJJZqJXYeXqQiSg55sQGWYcegYTKWacbM9YAoZs2FgAAsjzttgZm",
  "key36": "5SR1jfEWSyUQ8dmkyEv3GL69NMuTfXp99a6zW7VwRYAVK6d7vxu7Yk5CCAf3WaPrGcF3JvtJVnKmHQLKvr4DSQHV",
  "key37": "5NspGcv76KTgHGsUaamTK9YhK5DFEkYEzAs1hb19jisPZBXAvo7fZrDvvXgBLBYd1gTFh5THLzGNj6ceKXbXd8H2",
  "key38": "2Ya39VDm7KSyg6uksceekbzexdJqSbuphziNT88mYT1vftp8aNhmL5KriUDM418xB1o6BXmbxmtPr8zxNK8XKzzB",
  "key39": "4pTmxaqQ4Y1Vk3U4rdKo2uAz7uKEWx9xE1hQ6jazWXnXw6SmLVqLf9kfbodWC3JQ5vUmocE3L81QR4tT5c1jbb4r",
  "key40": "5jK2ZpRwwi2kXEFYXr43sSBXLupkp1C2P7C7V4yojyoxGmqTk6CJV45qwtZAPjncydrqdwVHiZXhtPanUvxLDfCB",
  "key41": "2CL9iAxnsaEP5jruR4sR5Q94yWajFZum7rrXtMC5sMy34HN3h5yJ83uxMM2XqirAaP3pneRXGLtxzQ9QSSKsHi9P",
  "key42": "57u6xcrKsonQWf5Ra3NteYAgCt6c8qwZxqt6GAdTikaJh6b98fHa26YdfitgAkznFUimGz4xXL62aLhUmMhpbQv1",
  "key43": "5XCG5XrCkXXJXBc47S1PQNCtctdPQniruRAsvF7zm29QpXD3cbnWocC766CSq13Y5SaFbUEMmkhkqD5W7s1TJvMB"
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

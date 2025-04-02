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
    "2vWFfjpG3cuWv47wJwXf4ehWqjYt2LihFzZuuLv45s8EaYeZ9znmq1rsQXVBWeahYW1r14L8aJzJQKihc6WyHPhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGhyBonuEftfcfr1SKoJf3mNF91boJRVGJuNYMvd9Vc96fJur3m9yctaFAFQFr1ooCeYfFyYA2fEW71nYGWDHJp",
  "key1": "5TKoiGVZ7zTh7piBRpxqKvyTZXPb4xY2MKY3J8eHHFEdaE3H2UuzU4yDe4zjwwoJf8QgFvHqjRzedbg2QGk2t7Zb",
  "key2": "z6zwHj8idUjtYsUzA5qgMV6pue7TpsMSpeyxxoaCpmxgjZrxWAkFV2nK1drfhWkkBQSyrLFqPPyQEKius2Z1PXc",
  "key3": "2MuMfPCGP6XbGHcPbbiP6CNDzBcwMtQdJij9VD8UKsEgcwMsMUZLk59JD3fcY79qKCBrYeXi4CTaMoPuUyBNyyrX",
  "key4": "2ZoZ2yqrMvGgDQoRsiWHu15L4xEvXE4kQ1NtR8fQZPTJx3WuD5SyfXTed7mA6Q4tn2DR4TFw3rZAXCox9wGaa88o",
  "key5": "611DDEZsV43N9YR435JnGgY2d822PLjovHbc8C1WuQTaZ54iZSi3YTw6m7cTR4RvAeGBWY6upmX4pUzZw8X2Gc64",
  "key6": "5BFFvHK5Tij5aREA1iCTU27i81eeGo8HncmBG6phwyT6Dt2teDdbRPfi9Eg3tzqx3Lvdz9EJZGK2r1mJX4sPQBaP",
  "key7": "29ogPKgNvvNspyAgKCG6jWuKQehGUUMCHFWUqFhchZKTZBNe7ZiXUcgudA1d4j5DZEW2HYzrv23H5bDDkexf9v2w",
  "key8": "4VxK3NX9CtjTL2CeD1owC2dVBwhsMaswK2zqamgvwrVn3JaAzJxmNGs1rfE1ZYMvQrnkpRU3wHFrpYFPnYHZrtLp",
  "key9": "22y6pCtJUiPohZTEts7TFsyzEv21yWJeoHfh6KCJRQrwrgFYqd877KpyC9886z3rr3i3HMdq5mj7UjGxjXfqajjA",
  "key10": "4528xrgLQMsqAsD1yhU2URLPeS2AjJq4sHDbNj57TDLwtnE8ujNHUmyf54zBRkCLYQ9aLSfc9TZ8Z8DBXr4Y3eN1",
  "key11": "36YDUxpKYZ3nDLXNtnFb2TUK3H7GwYXdkrwpDjgUy9a6s6B11K3oz6Eq5AzhVE8xNsygYkFGraTUSC9RfXJ2KizK",
  "key12": "AyCrnGypKj1iZdkpGg5TXqA7nbuoKhaykZgCm2ezaHkDUDg9hyr1NGF21UbKbYcppbgYrVG5EF6tCTVR5qdwYZG",
  "key13": "GUHwbuD625B2fs1C2WQZPUXgjtd9X7zqdmhAkpiWgrXJVnrQDQjjSj4jcuEtkRJPLp3NiyXmxgV9ffiT2qcFbjj",
  "key14": "33p8Fm8j1wuEsvRbPQFnbVwnAx7BLNnrckc7WcMwS8KdNpCBCXNeaeSgzgqkuGLezKDqeVPKLon1pR1qLRLxuMCx",
  "key15": "3dU2r9btSiRt3j89c61oycXFmDNGUj2AfSU34Bi7zGH34cntqLuPGLXFbxbDTszsVhN3XkW1G7mYxZMq9cPetXxF",
  "key16": "2pfGwRZpGDrdiGc5vqPfjjU1AnjcGU3XeLEEsHFes6LLFL5Esh4CnqERnMCudBr4uLwvisFfKAHar3i3zSB6ojw5",
  "key17": "2nJsQMrouHrY39dLWSL17RiGz4F1xPo9M4tFPC58P1DiamytNn3r1fkArWx9e44KGGyNcAW5uESAo3hPTz4pD7Br",
  "key18": "5WwkuGEvAVfgg9TXmL52jXayd6J9y1JZE4vxKMtKXCjouq4Ny1FYmRF5RvEZNCS4X4QaZ62RKfSfZgjNXHKjcZAQ",
  "key19": "4Re1Nt3cXV2LBaZ6X9x3zipyTGFp4KTbFmUXqyE6Ks4L1VzhRMm9TBVPmQMqDRuwVaseCuKBRofMsQmrqkjXxtQa",
  "key20": "2wcPvj2Q9wuHEWZoYmc93eJ9vR4VzbAiG6W3FNtTrAvczD8cTfVDQxL6noemRQvejSGs3cLYqR4v6ssxBE2chm4P",
  "key21": "3pBWJs3pJLajnNbXGn7YMjis8ftegCbA4anHJgDxy22jQdXSnsXR1gfuKw2nJj5sgNwTUySsgDYC9nYtjffF9yP8",
  "key22": "2Yz1ezkGGuVZxTDs7hXpJnRbgctMmKBVhi2an8qNo5KeFHW3z7oKwo2PKDcbsAwZrt3WRUq79MB7ta9ysARWWz8J",
  "key23": "4rcTNuTZPuRFwmSPQSVfANEZWoPF4hBe1YbVt8srt5vyMDePT7p7RYp3xTgNQcw1ehuhJ1YHM3ZNVgKb23kgxQk7",
  "key24": "5QBeXi2MdEMsAeKkjkmv7dXsEGe4avvdmGbQg4iuSirwYM8bokXY8aJRRZkjK5LTGBoE6vgTcM4HGRefJLoc9NnU",
  "key25": "32DKoh2RPXnnJh1SWRdmwoomxruE6VttjzJwLFFzz99t9BYHKteQZ3LvGvyTc5pv7wVvzo2NHoib1yVo11eSjsPm",
  "key26": "5rDcwp3qebCswTLKDGpGNWw3eCpbn79YuGdHapnoSnKaL6qVbVFzCM9f3XVeS1F9uaPJVNjZL1pvMfZsVTLamm2e",
  "key27": "45VqqgfXySfZkTDzA21foms8kd7zj5LovdpVuBgypwyUYKPcrsbqnsNjDmDs6JnPxJ3AWD2UhJLQ2dGewbQ6AEC7",
  "key28": "UxXyznNb4LwuLppd2kWYUh6DDvGNB9UUmwZxi9wUB6ju65U3KBYMNTUoRtU7HUotQhdW3ugymg9V8K9uD4rdZB4",
  "key29": "4e1z6WY3KeLdTQJ9tEAjEPdkpkYzbJrwSftbEdj5KPDUAE92JgL1yRTRMSQJWZQqw2bqPEAH2aGF8b4zKm7a3BiE",
  "key30": "3XaYpuYpEQ8BmeBWRdBFQEKAYfqdoQPcanxEHjunGeRqAL1WMHPcU9uwf73mQQvbJ7rvhjhN8QjNc6d1vGTZdzZf",
  "key31": "Wb8jPs1yXpfKZENZJECpTCLNniHzkiVggNHT8uuYTysoY3xHfy1QGmfwravzU5rfkCGeYcQD7fuHvtpMespKJ2L",
  "key32": "37DGqbhD9WD4GGaH6MBq6CPZYttGTeTNAp2YdnZ8zsunCAjapvknz8JrrFfyrGm4Sqkw8haTxB5RvFPg1VkYEk1J",
  "key33": "pAgx3JmvDnodHt424TgMS7DYx9LrYouvRjgcDMJ4hRsEkr9biZy9yrncdL3YnxFLkv1jPd4yWsjx3ydkNbKAa1P",
  "key34": "x4ihqeMS5uir8j9c96eaCcNUYc6q6HkT5sfaLYNVw9nLpqkJgWShEhv3XELBX5tDVpSEaMMt5H3vZqsV1btM2ZU",
  "key35": "5Xzg16JhwSi7PRBwiZHTSXCbCxHSq39zbErFtpghwT5XdKfL91sKn2nbHtiDCtB6tDmLqNkx7EciWHawQyjo4a52",
  "key36": "c2KTKkUdVSw2TpFWAZtiYmSbabs8pudaCgQwf2w1xaPJDA1F9SFZc6AvRApTEvNUroocgBGtxMwzkiz52kdw2cS",
  "key37": "3HBxHxRZgeepBU154AoZjCBVUF5M2DFNbTxJwFaD2sNmsCWsgmbYiDKLwRAgZeyVPhRvfbC4T7boVtH1TegvjFeS",
  "key38": "36H2M8y7KrEK3qp2se2xGeKa27EicjdvqmAkjnePgHKak5sZM4btuJdR2vDLykjVGfnQwXqjKitViJjG7RugLUom",
  "key39": "kuUhwAc8wU1Xwfj3DRR1rssyq36X2LV7AvYV2BcC5yjS5H4x9ZYm2wr1i72yeEB4wHu4pzEtcmQGiMAMpdh2jMi",
  "key40": "r5o8VrBrVjLdti19MLi2xAaXhJcbCDYAnwTtHQ3kxc4rRFErjCtwLQce8CnbZpkQfVVrAo4qZSgGwMwgmLhTJA8",
  "key41": "3mpNTbUtgt5XefhPwYCUzeUEjkfP7ZTjpwsC2vYj3CAF2MpcfZKJuF3hi41y35jw8Zg4PoXVYnSFT8cssdCkWVn3",
  "key42": "NirFG3UZtrq7eRouT7VMeEC7uQgYKogtdJcT1qs7vYegy9fFXjAFurqsJLsiZUHwBBinZsCyauqaSEP9HMn3g6x"
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

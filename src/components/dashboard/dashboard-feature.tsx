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
    "3gSmmZteAKE5P1yv9eKXt9ydqYPtqX7NAuVJU8wDPPLtszmpdw1gDgaXzGpmWAsCgWBu2GyegWyHvUewa3ijsVEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNrc81DT7WVhBe5V1Vex4ZV66Tm1rkidfYb75e6hDySVmuY4PBXQ7TbGmJ6bW3ZCr3QBKkT6qK6e5tFJeTwkNKL",
  "key1": "t8fWEchJEYivse8tWzSmV6bkYS4rTnuT1MSPdaSKanUHBtQ3177E9bCLFqQhKmQtZQ5MczyHUjpuUGEsuusKQG5",
  "key2": "2rTYEpaTYTvT9uwDd62hXMMh6JsVAgQ7LR6Lv4YRk96avJbq98eTL4FGPvVxk5fEUf84E2HdFkN1fYhX5xSfNbfj",
  "key3": "ahXZfYFnQQHXLo6JEd8eQE9EsBec8pZk3gLJvtT4Gk7AMkmYXKmpvsfiqKPJfbwVH2P292sMrye6i7VoFXGVaqH",
  "key4": "4nR61sWPgwtxJWPZPe8AxZz9A6UzKjPxX9ApKA5i76gtndXzfkGyra3nmwxeqoikLDjNuQfhu3gzfm3je4hXVPmW",
  "key5": "49Krp8SCrdvgzDAFhEXcjWM72DCyGn7MNchtBFZvyjeokPxKskG9qHhn1297F1AeRJ9PMCz8uhgYJ7ZcWMXmy8jz",
  "key6": "cL3jDkLYqZoGwoc3VheEdS848pRYojiu4zrThvWzvWKkMrg9ycbGmVNtoVs2EbD4NUGiyLXcy6fmTKcFV36uACe",
  "key7": "wC9yDiDj5QnGmeUA59XfPxVmzDqYvUS39jFmwJg2fK17NBv4V8sfCxgyuwASX8Gyf15esLJ6WrkhafbXAgGaP5n",
  "key8": "5KZVEqpcesHbJt2G9gN8CSF8Ao9GRbw3HgnrTyqy9G8SQZtCFHP5wwbBgAx6iXjKCbRtaSK8EoRbJ52YvftFro8R",
  "key9": "3TtdeYZEzT6dXCALyE6hwoxMByJvHKvQVbvaLpMargrcD4Ty9B1yfbCwzsQZBWfb48wJQX9va8q1mkDA2HHab1Dr",
  "key10": "4S53KXsrB6a8qkUeTXPyFueo4nKJ4SBs6R6oHsHHtw2ERk5D2XYB98krdRoFekufYVMJ6bcmBTojP6FJVwtfYqDA",
  "key11": "5CCU5u8RBzWS7RHkn2C4BunLJgSQxfvCL66eSBgkvSXTiqYJbM1o7vApW8Atbfz2b5Joe6UVz9AakNkBDHgFN8WF",
  "key12": "rpFSRzGWaXpyqE7E16NdNuwrf7XUYtoq1D3furA3LSs7HA3NBRiD6Mq49etpLYgEPZMEx4h9aPh3u5R2o6naTnv",
  "key13": "5cEeqVFPnfsWF2JezWtsWGUs98Sbkj8LXuWfSXsMVjapLmv6H7e5QaahgfUFQAx5EGsLZpgxYhAz87Ja7Hdpyqur",
  "key14": "2FrGHsig37ADXNumBBgBTcY9vLNzS6gn9gMJSPsUS3BeQpGDrKpVmPwLuEUs1KT8pDosQx2pmSKr4yC7SMRWuida",
  "key15": "CaQE3wSaM9ig7vjmsc2NKGLNG3qQjMvV6P4zd1vGgdcwAKWYsCD58sRsNeS6S8AwS5hZCvqZp2zbtnUYTMEQ9AY",
  "key16": "56TwjePEEBLd3mVgGKvGxyh3cDT6FWe5cXSQPVzjiKjDUCn9xaJ8DZXciGizjowqendL5aYDnTqpwT7xVToEV8Pp",
  "key17": "3622X7bnKdqVU7tTbgKP46Chzr6FRaeJCkTYEywf9vbVLPSWZYLe1V8H7rWZZDwUVck9pWnJR3j6trcv2SDVvVrp",
  "key18": "2hhYCqwXtiTp1X8C1VTctzQ33mXyPA5AK3Ax2nAiGSa8uYKPy1L5gf3UfuHHUFguqKSJwCXRTYB5W3GQAQ2GphKB",
  "key19": "3957Upt9WbZrMG3fqkiTZC7ANf99aM2836hz8owQLSvqgCb2wp5fJb7iq5iGXuMQdQRB5ye7YV1PRit3U1RSWYPq",
  "key20": "3MhF22GbU67YLD8fxADS72CemrBkEtxvnEmAqMiUMschGZeP1a6sMsZNw1sCehYczFzooWAJok3FECeVgNaRPt1b",
  "key21": "4vw7jPC9DMVTqweQHphmtbLwajaWCN7CKs2G8d4s5qYeiDsw8Vj6bCTZgvS2EPMX2bq7XeKDX4CxsShiC9G5WBsx",
  "key22": "wdwdwNWKsDVZYUHeErFp7byC77628jzDW5pjsPLvqL2soAuPC9qxvFNA3ZUcKtBEXmJcEKa7AGE5roX53sbPBD2",
  "key23": "65BpnL9n8muogypJ9RAdgGXZCqfirZ7QjndEcUtS5HUjRrGWtkjFnvYtsv66o1JgGu27EPULfDrP9nkVerRmJjeb",
  "key24": "2y4sLV71ZJoGQoNAVSgsFxJSf6EaR4Xgy3ph6ttagnYKE4ZY1qjpjrnmEN9qEHw73G8RS3xHWxmgeCYfajz7Htr5",
  "key25": "u39EqFuZqXg66sBM2DaNez3Z7ytCchHpZAexeW8e3WWFbMNm11UKA2Goeaw63w9x7VqHHS8Vs1WHt1byojCP7Rf",
  "key26": "56JyMnWGy4cdwbxjTcrhKHFY8r3tJYigkUHX2CZgH22GAomsWsbRc8UAYwxFMJpJe2Zfq4grCSFWL4Fm85tkAc6i",
  "key27": "Qa7HAYWc4QXtF5DFpsimCcYBg2zWebmMRGvqi3MaVJo4rgDQuvshsJERGCVTxSmVb8vLbbj7SrvSFLTCcXx9yJf",
  "key28": "5Txd5JADsViHpdHGRbFGsqrMFbiXJmNcj33ERP8fvDs7edBZofjmVV5jzqviYfiZ3vj3CoeFrdSzgzJSjV2eW2Wo",
  "key29": "3TAdhCii71EEgqAAmdZyedqH5h6cWZgQKmHaHQ9TVT8JTqQfqStwTtQtYuRWXL6VctMbpvPRr5FmbdjGcP39BoyH",
  "key30": "3LExL2PaoZz8Kak6P7A5hKCUUp7sLSfBrydYPqbXqMX8556P93ABNeY3t4XYMHxNnwYvfu3T6d2NtbEaG2BFeUcV",
  "key31": "4xAqbwnbH9QJ7XGQ353ogvD7babYMsuxPmiefnB4nW4GVkuxvpsZB16WZrQJwBNpinVeAya8aSihqu6oS75wnJdD",
  "key32": "2Tz8v11LijCGVG2uSeE8YqAASuZ7MMrhqV9SkNxsp62UHhr1Y9xcbBnKtnnqFjSwMdXqcGcGFcEJtMTNsTe7GCGG",
  "key33": "2WXGxUcJcrsvT6uLyeyojDVjE5Hg163SeNZvTwxMuoh1PPBsrVcGXLFVPj1EqxXpMVdu267MacHwpoFjzk14kykD",
  "key34": "37yKG2oyChXP1kVwimPQnCGqpU8H1noQb4gMTqFyAyndkGThr6KkJNPnNL7h3xKg8gY8nVrr2V8xGqqy9YsRAgw8",
  "key35": "HQ5TFLARhw5g7rFAAbekov4r2qtjC8Eg8qi5UgLbCUv5ciL4GARNVaJED5F3M2pr6DTMcCYH78GGrNU1ywsZpMo",
  "key36": "4hhWvcGzz2tShiswkLPGHnKVJNk686XpassKCyrCMejThjhGdAdZQsGJiiV3xmfQ5AU3cneoRquLYJuyYLqkPniA",
  "key37": "5WkgTeejfyKeC8PCeRSxHfJP6vSNShAH7EvxUtRNxfpWHYSsMU3AHMQUaiux5YmRgoUAaVyotv2VvVqjGZ292Tfr",
  "key38": "2u57gEZY2Paa4HurdC7KDGAs3u9pMmL2awXZ97iC2eQFe8FgKXU5r4LsqDQsTfCLX23jTZcaBCYX84hDunGsXTSK",
  "key39": "28eSYPaBBa7z55xMHvGW1kEChnCt33ynNvZAE8G2K5UTPbh1NCzSX7MWm1LV7GRBULWXx2HarYPfvhmp1CYDCD6a",
  "key40": "3XsqErSxzLZyvyQqg47NjWjDkdEYykJzFspLMby8vf4nCwqkcFzBQet5pbzzodSPP6HEAXUwCimYCHnDZZXFai2Z",
  "key41": "3dZ6vJFmMb6JmJGC9HChcpvJYriPTPTsLe7sHMjLdBTHc3mbyqenVHiWVDfPkZpZfg4w3BzgyovEe4XtZbdauUv4",
  "key42": "2Rx6cbQ982B85x5hogkoEeHios8eW7zifiHWD9sVQyGY1yZjUhDLDBfneJQr4ekTuhqpiq5EbpMSq7zgcgsxWPaN",
  "key43": "3V1tWyTpeKFurx8tJwAbwSrPJ8jpC6rM3dg9Sy1JGFZv8bCvPBrWfo9o8Fa2ZLEnfDNMVhg2hckYwJbLZ1k25fH9",
  "key44": "EhowiGdLdEfGChMCKbL6EwGw6gBAjUpXETC6u1JgSNz2FjmJpU3h4YbX1jhp7bjkq8459CAWUGtsdBDuG5LRSXq",
  "key45": "2VqMgyDhDXsUWULPwq5ihSgmQ12RKgzZ2ezPSWJpsnJY6rEfNHJMGmvKD8HcV6eEGu46eDLD3rf8QVbLrWnC8Dcw"
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

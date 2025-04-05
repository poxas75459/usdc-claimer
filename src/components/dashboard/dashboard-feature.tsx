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
    "2poiQxadjKTTptQRN88VzggXREEyc3TNEamfBrr4tmWS45Ae47fwqmonRrZmxpaBuFXS79xkbAus1VJcTRCxJSXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5YtpV3fFRbtdSqYGN4qqxQXDqUQvaJxNGnyNHSUtx3yVgFSgzc6CXm1JuQBM9kE4gBpSdLb8PY62LUj9LuKo5e",
  "key1": "dNKpRXZ8UptssukMEUK29iEtyUNFkkkXkooFan8CJZ6pbjycG3sgzLDkTymYHurNPvqYPC1MtSKpqk8vfXDnU2w",
  "key2": "4eo8wtd82VofZ47Zr9ctYzKwg7UpHaP6bVN4cqYTsCxKjteJzqaF3c4pvDgGe6PaoymyEzjfvHe8DZxdy8LRTj5Y",
  "key3": "5WWoQfbuf2ek9YPZGSssTYUabFQSbHcQZWNopye4pnx8Q76xfnRxHLVzvwivLB8bgfAmoL9KECgMoUxCgg1RRyj4",
  "key4": "5xPb8qwndDtZ148jdW9CBNbwmCYeT3GqesoXC8vdFEUrC8Qn2yWaoC1XWRvzRZmQg6FZCuuGUbN7jW5BxYnTiDXP",
  "key5": "23YHN54V2c7Jj9uHkBvWDUhqze6DVKKs2QRsfdcWbFHa1R36YMq8CDGCB21sfibXbyMUU75QaNapSRP387AL7J94",
  "key6": "38Gzmj9RwRZXipP6Ht6U5BS1RzDN4be4gCcHgqs16Vj6h17LUQWE8fTfVD3PsDbDBXD821gxuzwjh9ME7Bg5BcUJ",
  "key7": "3y3bHhw58ibjK5fgi3J4gAAN6Sd9fVqKYzBeeSdQZu32Ev9HMpYvrexKPzFbKPMvF3NwT95k2vYtEAH1einFZCma",
  "key8": "2CyyfXQgY2JNCrNHiTbhXmj3YdHE9gujZZkT9arDTdcLatJFixxts8HoHkFEAba46ZTQbsDEqNFx8Za6XWzpKEvx",
  "key9": "2thNX8cewtydbQYP1AcUbuDE6V6EeTJRbu1ZXh6xeH2bnyfgsnGpAuJqmen87kXns6f3qMg8CmZNdehna1iPghnr",
  "key10": "5tayVYLEaNhEkuBTEixd1xGFRbACZEuRqDakkTf8QcoUnbrHH9skHHLTwfkM9Zn92DFbmuSBmcSBu8EtVDTAfVmv",
  "key11": "3BacNnqFfmQwciWocrAJyC7B96U4gXJEmPNg46mFfDgsmbETCKp17dvZRMRqnVZ461eJkNPZWJZZMQbeyNqz4pso",
  "key12": "2sgzPtdyBD3cjodU3usF2UE6XVrYaHbgsXthCQcEmh9wxBUPdiSsAXiCKkVniQCRi7TmSrTX6RLd5ebnqGBgcHGD",
  "key13": "2wxmPa5CaxJdbH3M9kCptU3d4NHMMbvs6pGZxwTzVrSX594Vyo9G1xXUksXv5qpSUT5g4hwNMmfLxWvA4s4k7s6B",
  "key14": "2aJdy4kViwfP2fY5GchsUFgwTxKnxW9RYXahKT63mz88G7HKHW2J4jBToNr2mNeXzs851TS9e9xcBbCcUmxCzSwm",
  "key15": "4r4ENUWJotGifxjPz4zPAAQ1f5UtE5zTdta7khCVcCgG38pzA9q3aJrbj2JWnFy3WV3mektQq59Eb1FTXP8BBrf5",
  "key16": "GhZvoD9MzsJTrmFPftWnqKQVxwsscX9vrKmBv5U5zDaCM7KBzCAVG5HYampzjHDMXZF2Nu19opwBAYvug5NC1G9",
  "key17": "3nXxZ4R2YvKjqrfRMWaBk4io86grdmjictRQ1d4hMa4GB8TTcbjmZ8QU46GLmszwxpLchXtobCnysaPXd92yr8b3",
  "key18": "3ofgXmrPP4szdBRxTRo5MTYV1taJAzahFGJG3hUYcJnYXBvHdhpReEhNGiPpNAJauke3876ej5WWE1uLRMjtiMj1",
  "key19": "5udf3wxdjCuKvLieQLwB1EaP1XoJ7sFcnzYqk7RtGJvvp1TJrN1jwkMauWBZQz7pZ6A6HZ49MvWabKRPZk3kosrZ",
  "key20": "p57nHCQNo4e2rKtBKBjztp6jxDYyrHzEyrsWTseUhuC78VMbT7gY8xwijXoxp5h4HdySg1wbKP8hLQFgDj26soh",
  "key21": "48d2WhxQWgEuvQhdJrVkf7cbp5QW6BYxtvDeNh9yCsas2SFYAno3gntt546eyeQhnzDPHNjBd3G3hCgbf9HAYMyn",
  "key22": "4FkbXKXkY4cc2uH76Rwwcx38jypDi4MrXFJ1JAXKieQrGdLaNG3TMPhCVM2K83W4TKqSCFXopshQhKwetbEr7FQU",
  "key23": "4axQ4k9q6BvWhRHBhSdtdAevXT18y3GFwgdeyfJhAqdfDGfeyN3LVrXi6aoP2VkdsdSQVNGeDSCqAXdhxszu7GwU",
  "key24": "5neCXRsJjyXUBMkMPUiuP3NTmrCRw4H6Fib7QySnk9rYjKCcunsuzRfh1D1ZPYuppRQqU7AVGZ3CuxxpVXaj4C6T",
  "key25": "5q8hYrkCwFYcJgYMLk8m8ZbEgZwD2aXCaLaEbkNgoxPHWyqCkG6PbCTkFk7PFnLa7V2UfoHgzPdjeXcDMg1hxYC3",
  "key26": "2CgzMhJNwBkPHnKnLJUKsziHhRKcM5f5LqnNZuR3813fVeD1yrTLd9J8vE6TG5E2AL6iTVFT92o517jr8rhV11gx",
  "key27": "4TZMSAEJzJY39vhSuDFmciHPNWwNeFV3CXr5xfzh4D4xXWsuvC8WyVNA6CGDP59d5c1YySPXKFzR8KvwDxi1yqtn",
  "key28": "5WsPCbvK3i1BK6fE56bNBQqFEwnPWRoJBzMjKZauHEedxco2fRy1f15Q5pgGKW7QJ7Ucui74iXwEwvECRk7BwSj7",
  "key29": "38zWSZMGU2ce69YK4Mhq3RzgtGZsHKRknGLzcUFU3heFUhf6c98Lk7hAHYQJm7s9Je2xdw1rEVYNFKigkcg2qkBs",
  "key30": "2t8BGHTchxxy737qrZfohfgPeHj3CRgPUUxzu67h6bJwj64Psfhgdhs5mGDiRBAN4MXU7oV4e8iNEwaJchEi2ecG",
  "key31": "NJ5YHUtMPjfX4gutUSQGxfaktUo2bgVx1UzakqYSNxUTuG9L122X5rwBotbkqNCqWzackMfLgH5NZXZ8umjoSau",
  "key32": "3mEydj7iHNj39y9WnW7owX3LWmPxHdDWKtMUte2ktdVB6PPNdAUk65dV8sfWe8vwtsSamVmvbccJPRs6XHTkAAGe",
  "key33": "5Xha2Qz9LXtM2zkhZ8rZC8t1MUu4Nu2prV4o99uUDRtva9ntZqWpVaDykz9Sd49chN8TZHFURdZDMeF2bpU5DVtN",
  "key34": "3YtemwbPSLRzJ5zPDM6nNCk2Q1SSj8WprDdppEhHH5vvddw7VAzk9rr86pabsRqAnaHZgaXD3UtwMTqm4AfR5q1B",
  "key35": "4HFsAPCpVP8x2G8K5fUzedYHJmA8E72SDRrxBuVCL3FPDbY3bvgDAT8bjBGF4DuiziEogMg9Lcmxwk8fVX1Ud1eo",
  "key36": "e6WjQCGjvW1qbCH2LnNrVKQYZJMoMtPKYeVKy2qmRhUkdzbu3hS6zmBzMUkeKW9hDe3d9b9JLqGXbqx8vkU7fTw",
  "key37": "2iWoKexSZSQQ5sgm3rAEuKJ6ks9s12TgPEgbiPLhiF6kgCXnTHvyTBnFbRnRkYr7RVEierwAuSMb3vkKAcNKCojw",
  "key38": "3RuoqcPy6upSTS5TF9Dg6by3qXfb9fksW1jMUKS2HdDX313BzVvF2vZd1xwhb3cmXQsR6qTd5evadWYVQNbDs6Bc",
  "key39": "WMMyKEykgqX8DrhKqFQRLfUPor6MmMwV4SrUSMJyDZCCS7vunfCT87T7xEtLDy66G9n4s5WNys9G1TuxXUvHvp9",
  "key40": "2i2r1mgiiLR6yZBwMbM3FbX8AF9ajiEQgGMDgD7xNFJcySD5RcwNe6vokEi6yJ61J7LJJxnj2rW4JCj7wjzGwCdp",
  "key41": "2aoDh9z24vf5hgLLofrukf1hjSWte7HdXbxMzMP8mTG7itKeyqbJVgHyKZoHBBJFpGiH7szXJkzVq379QvXaxQtB",
  "key42": "5hNYD4ZRxMRPfELHRFaD1kcneXoV6CrdAxqKeTkU4anuSxJ8aUm1TzwiYiBap4VkAxDzmJwSdeMNRyFmushhPsGM",
  "key43": "91WSXK4LTTyDx2GEBuVaiiB4LZ7QqKiD4M9NNoYmw7GjcrXnNRavgBPEKttNew52rUYY7iVDDsA9J7m5UDzBdbj",
  "key44": "4WUTqnBkNaeXmx6vTNQUTmQhg1T1vMkAYokBvMWvRgYkQ2D5iaYJeEhJ7tLpFyEEuoZF6LoaBDzXC4xZ9zuf8axG",
  "key45": "3n2FiLbP5oNb9CYK1iYFWTREx5DkFx2N6cZE21Shnxgug2rDHous1RySHf4eDs9nP7orEovw7enEERjjz29ZQnFa",
  "key46": "4kLshCvFacqdRdcfbNtQcGqKMtR1gHEutp8BgdkL6QApvryRHEgd779y61jEsjonpgsugrZvCRQHeATufWDAR1t2"
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

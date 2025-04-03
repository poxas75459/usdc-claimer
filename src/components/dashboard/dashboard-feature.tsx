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
    "5Yr5AdcfFj7t26g3DU1Emsgeby2U5xf4ejrVtG7SGkyQ7dzTXx3RVECNpuFckcDu1e7nwnJ2aN9fbEJMQhHpvNSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvkM95b83TFbhiCuUKQbs1AmBqa1oQLD2vUiv2zHBEirUuAYSkGWt47WkQZkCRYmQXjCNP7dXFVhFji47YeuFhN",
  "key1": "4tXR26FJ1S6v87sp1a8eYhv9Z1ryD7s1nJEiGnNfQ5X2eRHXqQDqE49M7ZDCoyRavb7zynFqBZR1P2SkurqD27Y8",
  "key2": "3crdyNCwEvPQiuKALBP9x8czDp39r692cSHnNHXXVwJXYkBfKGdYTZUAqMrRHW7D22dfCJTBLUK225ZRaoE2ktaZ",
  "key3": "61W29UrTncsJyL9LznLnbqtQkzD7sjH3CJqakZpY1i2GJqdpiQBMtaWixS714DfNHx5R5outDsSKwrQh1S9PFd7w",
  "key4": "2Thxzm42qC3DNUXksEEykM42Qd5rKjK6GBERenmDGqSrTZCDkcQ68Uqc6t3N3c2FZ8LAgqQZJK49cCyvF2anZQXc",
  "key5": "w1HCKeu65p174WqxNLppZAP8E5f36cYqpqUcnztHgskgngeM6YYkJgkpx7McaXAXqjKj6vTjURsooFHv7v4DiTD",
  "key6": "4sKUSPxAPXj3fehN9BjQiGGX5pHqbDe49zh4XPE5xTvmid843Pqa4PNtoAYeuF9Ns8g8wWctb5RGMd7QPBU4rR4P",
  "key7": "2LdgzbPfFURxRkbzYqGXGfaLtUghbHzMndvq2Qnb3GuAW3UxWyVqd5wKp3ZJtBYTdTJWT3CDSnmJCNXUHrG1DPm2",
  "key8": "3ZvHkegzgLGgJCzhpx8FaNCXXSUFzgSyyHDRCwfH8Xjg3kD5PJa4m43WXiNAd5pAR41LVFeBZFffUhjYWQu5PvuT",
  "key9": "2SPziyfA77y2gRZ5i9uxPWdYMFw7D39ocZrSwKf8eEMDBt9VzWgfqMDqpwvrecxh6adt5zS4WgKbqWjyfJ4NtHvA",
  "key10": "2hhuaMAfy8nr59Mc3vJktdYQAvz6rmN44ntUkktakAvcP4Jq7US5CoYavVUeqRTTypyvCB23QGHPqWCktYyYYvco",
  "key11": "4f4oyTxYvkUxJtgCCcMhfrj8R9MkH23VnneymNtra5ZZ1LjciG5PUcRoHQemTLZt5NnspaXcQwC2mB92M2savAUw",
  "key12": "jGE6nJ5TTj8KMcJAg4fUxh8gGLEC679yQLQKPBD7yNuewwkRVkG3NEwBCoDSak7VFJWaPfvjfbJwbpJB7eA9EBe",
  "key13": "rdu3LymSxxznFqin4Ld1fk8yfuS5TLg5buNJjjDEfcWqXdKs14YHWXJ2Vkq4p8XJ4ToYvafyezJ9knCUNTz1RfW",
  "key14": "AcWXcqENpTrqhRy9hdZBmwojQYxg5B7m1Fp1kjepqFYQJUDvCkgmV2pjh7hVoq4xpmWxSMyjYc7S3K2t9B9SaLM",
  "key15": "2c7uq53nVddiHF3egNoAcmcjLkDYWsgrfVCycDJDCpcmHQ5c4aiKjQwnbjgMai61o7E4jNK5LsRGcywii35PKP23",
  "key16": "nVKJaEYoNaY9XbhXvX66XTpXC35suJgvHi7Cg6Ufkwmfzfk4ptcQPU2o4wfSEGpB9U89EovnWpFszhw7mcXzQTk",
  "key17": "4YkPoDDT9XNG64beW9sARAkjHtQWeVWh5xaEZsyjZpehDtcTRnUhaLJgAAxqtHmnjP8vg1rtcuUNefyRMz5qXXQf",
  "key18": "3fUcAEL5PGyGRYrZMWJKD8seArsz3uaMzb6s3VLTgZZzcjSd1Lr7TwCUE3DWrCgTXGHivA1oPSqtrch9eE9YDA7r",
  "key19": "2Hv9uE7fGLVaLiGTFMyBTSneVvMmF688Yv7CuuV6epyR8y9XSwxkX8wZ6Y2pUVkgfAAPzZKrW521XRjWyfd1pjRx",
  "key20": "43wGuXC6mA79qzCaCGPTvvSeczAjEy4A687insvDmrS3Dr2CE2aiLaEhLoaoqLih2fEmrG6NBxSi5yUzDnEfp2bs",
  "key21": "2gPZRBnw5aTeZZDHvXff5nAHCKmTTV9cugzbAp6ZAB5ssLaTHjpUt6151AVoCDmmpqZfrEzGcV7Y2aAE9dYGitJg",
  "key22": "4nDybmXrS1wDmJ3DtwtLYEArzEJ9gGdyJNF728JT7zWQcaBciXyDA3ht61BDoUvz3G5a1pH7pTJ3pHw2KaCW34vZ",
  "key23": "2TtZszjmHKwAxAaF1uBU6HoQW4um3tu1fYSS489DJBADSSe1h2UVCSF7hLMrDVYBuPiZ3gBZf7o164eQ1qbpzTmN",
  "key24": "iDZGBGth5oGkyoj9AwQsuKeRDY5KVGbBtx6r4ctJ4fLnknmZJVh1auvXpeHmeofRTiiJ3M1dLSV63JEBKGTrSey",
  "key25": "5iSLqA8KoKvzd37ksAiraA3PKJXdGNzsmDL9wc1vrenZ9FE9zRNZU6hnzYBA3SZcZ8RJXj9sALKPbkjaEKVmMcJN",
  "key26": "zjouzr9uLZMuKHHm6B9taVjW5CNsrjRsGdnLcbqPYLqE3EWMbKjukJXyYuGVyZSZKQ3YZyvefVqNzLjANefhJeS",
  "key27": "2jndxezM5LkXKPikvQDxdQr5JQJxMH2JVG7KwursPSbSwigVBQYYTKSjpR4f834Wj7opt1nPAo8dGysvUEKkLNrD",
  "key28": "87SaKbEbyAs8Yt97rYXXCN4cny36na8VMsyhKZ4FBkzrxbPAPGBAxMSxkKfLcp8fyVHeHuGgBsTc33u15TbZ1kX",
  "key29": "2PERFY67YweTj5LJLEaW2iXLuxTeG6M8JfQ5dJmTrQcqEu1HdBiHzkEDLnia1hkBKFQz1q2N8JFEDKX1SfrY4JJL",
  "key30": "4RSsAfSSc8EYvKA6ELseMt8RRYrp2joC5zuntCHrWX8ycMskWv8JoZcHr2oUFiNNy7Dh56nZp3cT32oDasiXURi3",
  "key31": "3naJ2nxxF61rS3kvbRaxgkhwwKxQZSPfcUJaWSgMReofzVUWqdZWw1xcWREczTdnVenz4h8Qca4x4JHWnfyzMaoT",
  "key32": "5W7S2oxeq6bNx1Np4NYt3uYWJjx8vVonozAJ6wi6qCnrLonGxDB1SBERKExkGe58cuatdG6MvbuB81BFLJ7ETx8v",
  "key33": "2djwP2wLaePw11NwDGTUvkifmQsFcrvtpNNewW8XPoYHZog2s1oUnfnkY7t4b24Z7X3WaYW7U236JfKgK1ravugV",
  "key34": "pTtsbUmCamd1jfbJNHp5RWSmA9TNAf9StmuJFjSeED5Wmnhk56BtQzXifbo4b5xYvSCBNqoE6n5peTBNdXKB1HZ",
  "key35": "4enMD3nH12WYofYWtDG7Z2c6AfbPCBxj9sc9VuJBh39kTWYum2euKJQFwZeeCe832ZWDv7ttCrJy2XMdbvs3Rx7q",
  "key36": "4DagJhheoXJv97utsor63gEMwnrssoZEVGHfoFyws8QiM2R7UriHsBBpefDbP3MjNxdtR97hTFVW6JPxXNyJwvVr"
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

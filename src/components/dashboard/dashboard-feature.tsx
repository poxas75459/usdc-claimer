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
    "3ujsTaMEcHSqD3XGPeZ4g7d1xUQjCi5sw1ZUU64Vk428aPBpNFUSiUz9zdvJebZvay3vwBLDvg21nJXismhbScrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbv2zYtfBPtw7yxwkqpfe1HBM5fXKgFBSA5aSa1DoArYaN4zEMMHTzArLzyBoe1qcvAEVz4cjAHXXBZqmxnCs7B",
  "key1": "3kpaFfgij1vRDSeYUu4wmN8seBt5dy8B3KjwNDvdbqWHtwcv3K92NVbLCZZfZ7ZEtZk9FTnLpUFc7VM8TsQrSRmY",
  "key2": "2mYW5YwGjHEx2axLjupTSWY2DErvwBE9AnDtjWnj5wRrYshfTMwbn2ry4vEvHk6m6HnR3zpkLW5BchRAE8SE49Pv",
  "key3": "54g4R2dTCLAiEFUrBUrqzeoe6yqzzCXgMTukEN9pdpGti7XP74hFkwysWavY6dMejiPFBwfsHwUVb8LRgFGZiPkP",
  "key4": "4xy6tKPeRAhksdLkgZE66fPZCf2hGa6K8erwPpZqsz42TwC19NwCY1N4A3rZBshuRGs8Kn2eRPaPuGqjECGYHmxT",
  "key5": "5EEdL4T2zr2pu62T5yBPuA4vR2wSwTkxbmZpDZCN95h8zqhLcmNwHmgJXch4XkvvpUfTxQeXmKeyovpxNbhRvMWc",
  "key6": "3R22QqUDrdWbBAoC4QgJyTZMGsmUwZYLVTp9g7WQMNgsgN8sLT7QL9Aw4XDnXgXj82MFteSaRqN6zYC3WidoVEWS",
  "key7": "4QgQjAm74PxtKctoJ8NyrxiYyJmZR6Yncfbu8u5D93dKY2ioCaMBbHXJw7uVNPPJ1eGZdSvcNJEYwmVYMFyhsoWE",
  "key8": "32nf1hZx2Jpu8FNhvz1JD1fgarML51fQ4vZvrF7jbVWFDfH2PndFVsjhQmY6euKsnpdNGJXBeDVR3wtLuSgWAZEk",
  "key9": "57t4kQ6XpNA9X7uLo3bhxApPDga5SoLhxfnmYS9VMNabXydu9GDiZu8HGt4Hu9kojbrkg54LEjqMfBt3M1WJthqy",
  "key10": "2FkWLsYn747BV46RFjjdst7119KVYubwjpqEKx9nfAS2devwD1AUMUQLBwUsrPK8xjdzyzwHq9JBMyGo2oh6iswR",
  "key11": "4WnUPfuJUt4zhZgKKGrruupFae3D6t4DesJHJsssN6bAmAhDT7kabWe6oFeHJQpyMsqoDrK3vkACxkKmqP39yCYA",
  "key12": "2pb8e8W9URoYdd8oarGpkaxemBbpNULKD56CNpqZ2GX22PJb3DpkVrMiQXKtNZQeiEfDnF8zf9oTbFMozBFNrS5d",
  "key13": "29QYi8Trxi2SMoUhBrvB47pxWmtCVnoSPoaUVddYC2KP8qJNQXVRAahxY18Qg4XsnHgpBNiF4TyMGkxW4bxg6s2H",
  "key14": "WNv4U5xGZpWiEC8zpsa1cbNjtTyWrCqyq5TQBYaGQj4YzmbTfdR9xJZmp4SQ5eVaa2tbUiNqNZvXtoqrMr9fzNf",
  "key15": "5HouWpaLLDZ5GVN7PFRVEDbqsMz9Y27txXNWR44Wp15nfCCJeibfkhrjB795MXLi9oUwS7ME8efkCb7HUZCWubNg",
  "key16": "5YsLtJpMhQjhEZwUn2zDSaHppCTtidJ6jdL8tMfVZsCtBNvHsFENsfcZaofjHhfqd8fqpk7xSFi9ewrnQEX1dzbh",
  "key17": "5VzJJAZPhVb7pwWphWCeoQqhgaR3PNtiyRZSZEsj3aHTF1EvLzVFaaG7tuBYHr4APYS4aentLj4vd1xqPJd8eXve",
  "key18": "58ba7cAbgRx7NrZ96K3nceX8YU9QrrtZPQDMXuUuketWgPuibVzmuFa6gSeK9UmKKLNc45HHwQkCRdUcd2mWQL8z",
  "key19": "24xhbBEmCPR4z2W9nWoPeU9JrFCg3QE1pJ5BfLFvcscbrJjyKeTrB3s7NSsdPTGDpcoV4Y9sVdi548mwoaJPouJq",
  "key20": "TuXiMg2PnYqPE8m5LHsF8itn7G9pDQyzh1oNQ5hGJ2HuzaBvsr46vjAACsdE1y8MBJ1U9P4mfDf3uAhq2TVz1pt",
  "key21": "3MBiiaqGd9CWQt1iE9TwDxdXu2UWeiANQoXETGaXjAvrr3gFYHj3o7KcZZUB2eu56LnhvRUzUR1vjjkW2wDkqKBJ",
  "key22": "2569rhHN53vmiiLTTDCYP6jY9T5ZbkgQ9zU69HwHaZySx4QH1JMADsxDThukpxoBMfFJzTw9xjJAP95zDFveoHTL",
  "key23": "23su7LAUkkAx7duwknJjRLAW69wRmCzQwwUiqUyswELkMruWXcA81uQvUyNDVXFiQXetcavhyznYRoySddm79P3i",
  "key24": "5zjzAVnmUb5yXS624U3uZDXqg1VKs3pSyWyPm7MoRj2vKtkehgHUeYnRPCKD82aEdxWt3mrHw75A8C71FvjcpSxP",
  "key25": "YJ6qkkeihbG3jdMSWLN8tHdXhdF7Jw5PFJkPStNZGW8RYw2JBQtPCCBoamA94L6MXqfJyvdMszuR4Nx7eSSXg8W",
  "key26": "58XADGrowx1yoEgowyXDsygeSx2x3G4VU2DV3hTz5cXgt5aFhG9nUp9g4ZzfbhN95Kgko76WJC5KMAMNg9NKPKJT",
  "key27": "1SZSKCoGuT51d9XyceViWcBbAa8DHeb4RhXXxCa7p2jhGWwfX5t5dDEy6xcgVpyQha5qiWGxqYQL6eNCfx26bA1",
  "key28": "3thfhWN7A1ti1UXEc4fy17GacX4VBQtZUmuk8UdL5n67BggtpGCa8pQw2gYUhFpUv3iR413b6zVD7VRewJKD5EPc",
  "key29": "aUNDJQXdofSdifXKjgzRqZTg49KUB2gCcuFtixUxCy3b6uU3cRgFBecxEPkRJQGnRU7tWhdsJnUZL9zvz5boYsC",
  "key30": "3xGNNgdbCeHpa4PrS7dPUK5bLAUdFZWLAgvS7MMYGXzNBkYovcMbkEtxCdK3rMT7VUZWQmo9zzEoj99yEeQjsxtA",
  "key31": "4thLZYUrKZiK7RZCaFCL21oExokwjXgcjAevBftCMQ6u2PF6ADH1vRfECwEvkV7UazTUEoGmkTXquKc2Tsevu9V7",
  "key32": "4zJgEpgHuBLXLjK4Lq9GRJQm5BuxJXA4fjKWekLD5MVL7U6YNDyp1ZqJojJKorWKEX4nrtr8tof11AYyxv7FKGTP",
  "key33": "4oMN1NYDWRixtjxT8drdCaAY6iMnyRpBSArawJHiLTTA6gddiEFNGaXHdBsYkWq1RsQ11sZA9hizjiWTcPyuFvr5",
  "key34": "5WEPMcGKvjKqGs8e5MPvbj29fUoSSuYNvanPst8XsC3VcXoncsWCjAb7oaDPXXMHhcs7XNkEn122ZTqe6yH5Eopc",
  "key35": "4TYkuk133emp1kWZdZhxv3iZjtf5QGjaEYdA4PZqwQ7iGLaktRNK4aaHuz89XcCmaZK6V2VnYBcEGT8PwHyKgCvp",
  "key36": "Z72P7kGgWVgwscwbpx1WmwYYZHCPM6iQFE8NvXM2Dp1UY5XfcuYauvneQAFgrsNw2FSinz6VgY9s44ZGVRjhPnf",
  "key37": "2JVUpysLSCYMb16Bf5Bk41TGrEz1HxSVoDWS1VvJgeJUCznd9GRY1n7SmQDUAV2SLkTX3fMDjsyr2vBHeFraCzU6",
  "key38": "2jfDVZpgoqo3oChnNraKXz1TXDW9PLWJTQ8iG7a5gaVxXZaVfkekWF5J1rPvg3bf9eFXkth8KcCjJA4yDnY9ocLr",
  "key39": "36fk1UeeLqey9wGijmhwFSpETjh3XiGaaJQzzKY3G6GJNrbE63jUvGi4jQrFd9qpB6iGCHc4jbuR8tfbgSdZeDcK",
  "key40": "4fAUPzoci4gnKeWzpvzFrnJN2RG4KU8hCU9BxbYn4HJTdViq8Gu5k5bHytQmDtwvq4eG723H39z9gyaNjgTy3eE4",
  "key41": "5muVn6hGaN1jLXxBQJGKLXacgpmD69jGLSvXnr5oyWpN1Fgi3D5TsksLrPnpxQQBrAMe7mKk2DiejieXwXNunCeF",
  "key42": "2SRU4KW7sQ9NX1TeEJGQnxMLxe4RBwHBGWJZcdKd3HQDNTsfHJHt6EVc8SQix9HQ2vKFwKiKb6F1q9EzLDijV8wP",
  "key43": "x1jGv3vmtqrky4f4tN2n2of1rzKNwm29gXVnLxmEnVmSxT3d1GsogxWjPJrd4CQvwZEvx8u3cEwaX8KY1rK2xGc",
  "key44": "5wGA2XXRjymZ4AjYDoVV5QwfFLh8i3NqDXxsP9jjkmmJf1Hqt9n1yuuVPJcTsNeQvzKazE1n2h4qjPQcv4cAHan5",
  "key45": "3gqaWA4QZuqSiZwKVL7WAoje6vKW5nNzEZ4tpJZZdT1aGeie7zjdQBZufFjdQTuNLoxoeSSnyZZmVXXGKC3ezd4F",
  "key46": "3qrPYhYuA5TsPqQDRdby57SxtpuMyX259VomMgRJA2nTjvPfyQZPuNj6Ypk2gYupdemDBZHy2ro3KR2gNT9vH1YM"
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

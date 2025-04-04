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
    "3bk6ay6cd3yqhxYDgfnCY5noJZM36yY7yTKJ5y6hQqDq1EKoP3G6mpLNgZ9R2wDqtKpoKZqyauRCb8CTKcvhmf7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vzsDCEQZRPBF7QQMXbacU7fiNhT1ShzFT5FcgRMV9FeetcZaLgUkfX5h6w9h3RkLqfXVnuBQrb787yBR5Y7VXYk",
  "key1": "47NJo1vYDyrwfpxwZagoVYWjkwtkvwv4Th8thccx6uK2VsqU4arkhi6ThEvbjLQjzskuzY78tmVAUmt4wXq2XeUL",
  "key2": "3qQqXLXeKLu68NeqxiP6SjYuDYTwGmyB9J2PpFuNHpHPDU1aoJW3LzHPNJcHhH2GezfyLZhGG8KvUNVTZRUqA8Qa",
  "key3": "5DfNBQzrbvjVgfs9aizUAP8J7Co3Xh9FmBsZY3m7Mj5hPvgS34fidQRi6iTLLgURbUWyzvqX1cSdkyPZoP3czaQM",
  "key4": "2Xn8twH717NAfNCYVkadh8ezyLtJo6JyjjR2fpMrscuLdpC6TmPBAPHcPCE6TkfC11dHsbgAumV5jbzayUuDDykT",
  "key5": "4o4E9onT8KXhPWyExF7ZPcUu586e6eZZBX3KBAunpyNVjuSX3CUvXGrvru286iHshiaKYUrN75QjetJytY8ZALRF",
  "key6": "54rPznWic7ZGXb9MqLsVVZaVMXwQdgW89Vg145vdXAwfZUhbddBwykPJZUHHjKgkd5FSWtorpcrTZxYLMir33czx",
  "key7": "3HLDBax2fCzJMuyDyJKX24Z8NWgSDRkAEgDrakovNNu6hJd2LfrdKF7tx1M2kNabTQNf4sEo3BXwY6WKBGCE25j6",
  "key8": "3yDdf1efWtZLhMCmWpV2MQTBsjTfomz78z7QmfgYv1qeoEHwgh72UDCRhYmeotf97aHWiafMcFiu6aPh5LD1vRQR",
  "key9": "yDqLqx9TnTogAfw542HhWfZFeVqXrGdujxn734mWKeRzrGv2qE8dVZRugV69srftiZAvVE7SFhEFtaqLuahYXAM",
  "key10": "3zpRqiW3Q7L9axXnMzsvFo6NM6XhUhgfRSuKEg17y9okFVZrwA6XijNM3MK282Ks6Cq1sywGbe3LVXpkJwKbFVh6",
  "key11": "47mKLCRkKQPCpuq6zR7v99TuYvMJ2KfsXJbthq75f95FUc7RTLC1NnKuQc1JuQU6wLXMwP4rWccUAEDLgTDgcwAW",
  "key12": "t9wBjdemdPuc1W2cQdmbsqVDsHQ1kiQPiF3vCLToVLE65FYU2TKcFpoGauSYYL8VJdQfdwNs8DWGE423PdUahVQ",
  "key13": "3iCvauLhZhHxw9MAbUtFmvFt5NU4BG4zLxY7uwmrJ491rzKQ8PFaBXkhLU24gXNiZ2bkQ1B4iMCp4SWcenvLkX4k",
  "key14": "3q55rRP84oLcnbpLGwJ5z6UPM9hYfkZwhwRwJZpTD6bYiPjRjAVS2Q7rm2JykxWfD8FbekT4f9moWbg8yrqygcLt",
  "key15": "2EaeEtwomSJTDSWAo3sTnT4gdiucj61TvyyTPumkzG2pWSzsoy9vebSKHGSU7LFSyEcBzQ6xXMcH12SZfqmh42zi",
  "key16": "4rWnYYZ5bMAZfRdTqMFTnu4hhBsp6APjTc4aZeAdY6eMpQ863UjXT3Vc98qdyhxUhqjoLAkXCJD8fE22SfYG4tqz",
  "key17": "51dreR8GQBWtYPyVSjmV58CrjfSYZPVDHFUndEtA8yAf7aT7Q7sa4NnziiCDUa5TztuhzAiqJwQ4PRBXrjQwSysJ",
  "key18": "4KMZkwEwsnHTs5j4i9XJ92vMtRTiJnAtNa9J513ucZNshDo1M5DmBD8Nfh5CDHdKdeweA9ifs8LDr1FHpn7hbWNZ",
  "key19": "3VMSuyqetAq2k5srEhkz1PqzLoQNkr9ZajnpWbsxC6jzBMJtzLzy41PeB3sXD2Yq28krcq6PAesbMnYsZan6v94L",
  "key20": "Vcb66MQWhdLccpkoC8jJbjgj44PzQgc8sN33bXnkFnjdrRUKx2GTUreRY6oEbZb74Lo8p6TFLyhkqAfeLhQpMXJ",
  "key21": "ccieRGBSJ3xFUL2Us8vxMD5GBRrZboYGP1oYveWWAaNpgRmtELk4DBCxjTVWL3wBohABCcdnMXKzctxc1geytBB",
  "key22": "2wA8mDEEzH6xBDt8aeTGvaJUsEBtvvjeGNtDjZnv2TqSYXMiM4roWdfbkf43pyeetvYyoYpSbSrMDgMu633NvdDs",
  "key23": "5CucURd7XyAWHBUxDLjrkSrugLM1fg7yBNQ7dt5yxehSCXcqHLZGGoTZ18jRrB5Lw81A5BfghQkUV5sb18RxALNU",
  "key24": "2hCXyvyXsWXpRkRYt3WDWKUdAcKHxZtNs5DAyo5wfRicP7bjzDrrSUrhYbKAp4YGvuVe4q6uCtBw9QwVwWHsph16",
  "key25": "438PAHTB5mRTGycjU42r8GgzYqydno2LRTKvA5RkaimzLDjR6qLuyX48667oSYYyyMHrcEifNwTAkVqFMfM29vqV",
  "key26": "5XzW91FMwg4zwygcGgXEU9G358eE3PWJDPURAy1ccLhyMz1HXyVTFkY8YuQd9nE2pvktxfeompjgJtMqDJvkzM51",
  "key27": "3Ne5H9EDtXpUnH7aop2EkCQYRL8Dap7AnCT63eR7txVgaZcJyimjjarsyLE5ChYg18QRJLRFcvkFToRqe8qafXn7",
  "key28": "4LZ7odMujvHGcNy4chqJzGJboGuqhjftf2uutZqeBq2yJ7Fh4qJa1x5s2BiRKHrz8mtkpU4WfeewcPLn2gcRJwZ6",
  "key29": "4hToarMF7q2vMGye5L2XQ9VsFmFPEG7DGY9ENbEJzWLwyUgYgodXRVfXe8tbjwSLT8vvVeYGLkVfuKEmf3Msm4e6",
  "key30": "4kGxjiTCTJMwKT5miQ5pJxDwVCcmJtwT3fooUfGgDM8buvPvZUNezC9qqjzn579aRUNM3J9YTo1e9GoY7eG9iv6Z",
  "key31": "2dhaVbVRsuxFidXS7v8n7tpe44BzbVQSmLPGJdQUdAq6zynYzEsiGwZU2dmufkf6vVGkrubBvdp9LtRWqr5JqDGX",
  "key32": "pfP4idTvWmy3h3qKZx3fhzG3RozRYwaKCwqeKdEGopQuVbrQutpJwsN5X3tnfMcNYe8uDhQiuo1AmcLc8Xyv5wL",
  "key33": "4XLTuoi9EcNBCVsBRX7yCogCrZHbsc6sasL3sPNMZgjK6ChbFXSD8kvQErLuGLtdbpmeB5JkQuWjBhvyqyBSvnqu",
  "key34": "35wary77ZtaaVqe7zLAzirCaXVtsxdLDyuQeuxkaUfupfvpapNGXLTWSxt4dK9LrC9mECPPbVXijoUxkBc7td95p",
  "key35": "34dAu9YqnMa3spdGo2JSVLgzP9MJwkm1SxYp9QvepmXB6j3g1VBoSf61aokqtE1S9jMD65dWvx9gaMcLMUQkgJEx",
  "key36": "C65ayr14pjmAePF4jtgiK2NgsKi7b4zabTrkXinVgCaxRVxGiVbUcisBWK4JUviktgtPEaxZbzePPFbfxEYcoHN",
  "key37": "3meVHjKT4iBecLTdkXkRSyEUh11bATqP8Yj4wRzy2JC5QmZzjaA9LiGoUYUXwzm5bz3jqXBfGiDaXdkz1na3yYYk",
  "key38": "8AqHX2YV7PevTJ5117bg5vTraBfcSEoZfWyz1j3CcNRz9k4xSQnHvBzKMPumoRGFaTCZzeFSFRzcnce8owFm6dH",
  "key39": "2s9FbXh5KpEGpC6wsjQmYV1mdxzqnmNbrChXWjeBgTHekmXyeZEpdTe6hg7Mmod1QeW3HXtyoh5AQwye8BGmTZTu",
  "key40": "eRhd6s66GpCsvc9xe5ALjDHoYdbAaZskuwRrvi8pCDhJBX5ZtECXbwVbe6mF5NoEnVvBAYYm2tqSu7ca2B5qZaD",
  "key41": "pfHKfA27u2r52UjKS76kBvPkPoMcTg5mMCNeXwNgL2YgfbcW5SRcs5KJDwZBqYEAtbCAZt31ykZRKGzddCDpe4V",
  "key42": "3vkvuLSqCquoAQUmoQskRAivc5KdLq9r2W81Kjr3Z7B9cU4fkh44GB6Cj98rtSGCEuZWFMoTVntvqbqCb8Z2xNML",
  "key43": "53cNEy35GMvKwK3fFRtmk9b3syznw6942wTWmvhqR4xdJAfctREtkPKt2BSzH4vTuB8xvY2cxhtCSsDA6uf2UDqC",
  "key44": "4oefioJfVrpnov8cTxRVAVNqTKdDsR46PhcYU4TVVxx4svhV413fpYyf3aFowmABYX5uHFUJhwpjGM7HHw4po7Gy",
  "key45": "2R5FPTxzKVhXyKPzYpHoYGeknm3zJVvLwPZJjZjajRJzazE4HLLKvZ1oGG9zGcEtdq6MeKUQHLHwzM2G1fLq5KHF",
  "key46": "513oTB7FZeDzU3gRKvj38GrqBdsds5W2WXTmJUT8BVsQrKmFhfMhnaxNJ59QQ6dxcMdwtgVzog95tibVoLMjGvL5",
  "key47": "2uJXXZXpRJjDKiVtNfatjmaGStE5295grPaNk2CgRupjVCMuZxAxtEqknzFWC4Jdsnncy1JGrhWXyq5pe711UuUh",
  "key48": "4MKkkVriwpADyxS3T6jrox4fGpk8dEjvvJdwn5n3ptHKw7shDMnFousBR2rFHxW1YqCeZRcPvTdaJuKSp3MMFMe2",
  "key49": "5erfFJYMxfnvVubXeWoBfTmKGDT9QosZY9FCgu9kgNBidE1JfSH39W9FHeoqErpDNLdtEAALzwfU6i5vBoktfezB"
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

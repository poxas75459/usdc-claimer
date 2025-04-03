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
    "4mzCY1zsu7oZ32TtRSRUVTDKM5Ee4SakHXEcb44H9y1DFAoJvfgPY2YVQ4oBQsfh82TYmQqxKtGfKsYjxCE1MV2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGefrJ1A4pUnXrg6eS5CGpak3Xy4dQSCektjtoxJui298GUidmYbPiznuSrn9z8AvyWtEi4zCntg4YGzpWBQ4q9",
  "key1": "2m45m9c7pq8cWFiJsXQ3qNerThpSBUYb6xUwFW87s3ggRZ6f9vCJcUdEe46V9F29Y3rNaSMTHF6g7HYwWwkhdwqA",
  "key2": "5bSgEBRfoB3mCWnzKAucLNN34r1qhURMxZeARXfNR5uGq7Tnbhdp58WnmvvQQ58mfXe7ydJTutFD1EPaepJGCTzm",
  "key3": "5wFs2d175iK63PxCFq4aThAEsJPCctqWEr1vPbqM9ofsAtwT58c2tzfhWDZXdqWTz3hSva9eU4jqXYAPK6EbCT6i",
  "key4": "4A7Y8G8QH7WrY6SVwctZuZpQZMNbCRuB2DQLzfD3mCiJXiWhN99kDxXjofiHZRQjfxGKWwQ66hbybTurD4K2qM4Q",
  "key5": "buPs7ymvi3dZZ6kbv5dMqzo9zkkns4R7hWxcnW1NA8LDH4QimeAZSEtXt2aUUVSr6xyMBVTh8a8M3nfkSr2G9Dk",
  "key6": "3ncH41rizMperL46AJX2AVYzG1sakbadBpuPgDYLzGvbEJguL2M767WqZqPbLjFAH6QnbbEhqXnwkGiBWQHwX4gB",
  "key7": "61judUTHZq6YbjFycMXJynuPT7TZa9Upq1y4oonMEc3cmnKHAmQYxXSv2bmzpE8wJyGonzRuN2HZoyPPq9h4Gkea",
  "key8": "PQrxERf6iXq2spsMzXNkC7SAqGQKTsk9iEuuHEZXupeSRiVtDzP7gR7yzxHGuS3ydkM6DZcpdW4o9Hjfw4PoBxw",
  "key9": "3xqdAjpwSVUbQJD6yLXkuYXs8V1wzatAXZErEfWvZLymr1h8LU1P6b2iUoYQzZfp2vR4YuHHNQD2oZmufjP74hdi",
  "key10": "392hYpmXxmW996jXw3nzwoCzvToyyKLadwdbYacdKZCiNboZXxygondiFTxacBZsGNPHCZ4dtUrwobzBCtFiHg2T",
  "key11": "5435xvYo49txbUSbpryQHvSbkVFsTeUfAoFt6otrv7wPxmmN3Y3cNZAPFeQdNKx1msGFPYVCLXFMCALrZFSSbHgk",
  "key12": "2LKdo7qQWwoDPaBwbRQFgRmTiZwY3Y1u4u2SrUA9XPkAg3TGqjSL7mM1nRSTuyFwkwM1tEcagRwnVyj5wAa7jpSK",
  "key13": "5dMqH6AsdPALWL3fxJqBPi6d21PYSidwiHWC3djXwamf7AcEDNevmTkBKqNdoQdTmGCQisMoEW6q2qJE6T4qXnUP",
  "key14": "2JQUnE5JQRXdEzxCLvt4pGNvrFnr3qAEmZjCbDLLNj5KDJjKhKSLUVnFVQZj6rNSohT9GdzGapbDa1nYPvW18FpK",
  "key15": "46ngkJRePmxkywn4AomjVuZtvJUT5vwXQ3rnDLJPe7eJUP7B7snnFjzSoyLveVjdHogVPmre1jsQyEW6SZZGtyH8",
  "key16": "62HRTwATq3E4cCEefhDWEKZDtTkS24qATHGDFaTjXWHk1ja28JNCUaJBqYQJaBX3F7u3jkeHWEvct59xVH8A2o9V",
  "key17": "224ABWbwYLwzEUACfCFU61wAvScnebacMmq5YYLaBQnCzfAjr1KP6bfBGCtfmi56KAetWQ48KrnoVGZ9WuUhyrPP",
  "key18": "2ksQ4ePUFkqrxuTLgaAPHDLU3mShWPtUvvJYJJU2a1JCNf8YGsNpzNEiAv7nfgQ28hkXNa6UBhMRqC91qLb117Z",
  "key19": "4REsoqEkPN3mAUGYk8dpaDDmt6aD9pTvGs16YLA5iJjFTDSrFe3wggwqPGHohuCHQqXcDfwt4LJyZ48t3m3kdptK",
  "key20": "5t6ntxUQvdbZYjXW6dWLzFAmax2LRdkQGUxVerqfh5e8YmiLKKAJjaA5D3rjoovXH6EYcbaZX6uVzaKdt44UZ77C",
  "key21": "43jwSDbDhajFt9zHUoexMGFrdbxSaauK95zgh2AmNmcEnz3kkHF3yRL5BZMUTFSdBh4THP8qrhzSeKDRPR9ykLHd",
  "key22": "2ns3MMTufLSB1zaumgi6v6dRw36kWNzcDzBcvtaSLWFEqyCQK1bzyLhz48b5pCSXpUugikHMPGQPZVppi16Vjx2R",
  "key23": "3gEgQLrfo97sTfKJ9fHJs1XpupzBBxpiJnQ134oQPUoc23F4tKAtoz3uSjsxgR2gWoZfoz1k111VKtBQCKYQGG6U",
  "key24": "2ixtZ8g2WbzdW9beZFydBn6XmonbFkhDjy8o8xLSZAAXaoHHMmiBmFwAioU2wvthzqJmj7XYkcdosHy5m6DpUaQ3",
  "key25": "5Px6g4HgLGLGcPme7JXpzwHmX5WcLwHWDwVziR9sQ1kn5LqRYssGTj95oDfT3RRZPDJu8RjDDwhqcrMzMP7eerNY",
  "key26": "2vz2PGGt1wFVGaAoedp8LjVN8cweKycxoXTErKYY98pfdUCL8k546arU9qv5ikuLEen4mxGH4BX2oxZU3LsYFHF6",
  "key27": "5AAajW7UUCiwQdi5GDi26KsZXzTNNzZ8ZDZEstKwgmFcEVRtsHHceMGSUiYnyd2TwtKkwEh2BhqQi1CiK3CZCuf3",
  "key28": "5vhNcvD81u43BVAATSbteAtw2z7mknqCJyfVxkPcpv6KLdY66x27UrvyPGc8PUDk1wcp42biWzaYdeAZDeGeso7m",
  "key29": "3z1PthkxMc8yV1GAht2uMs9cEWtYEmYwMbEuct9mULwLvP5LfZSk8PRVtroAv24R7fxYRdZDtkHYpRvkNezjZE6f",
  "key30": "29XQnNgP2g1g7LJmeJwy4G6T34ASpmmfttHKGFR5feD1vWY6R8qQ75ZNvSy5ZzCKrdW6PfhfBNPw8Ju4ubEJXgmL",
  "key31": "3sMoSJHPZ5Ck5tasdU548NJ86WH2sutbwraeKYp34zv7J9b6VpcPxd5NxGVcnfG6o5hmR7LjtTigoatej12Xm4ZT",
  "key32": "2wbvrtLas8fWpGVWfewo5VEFM8a7GVxpPEjPxr58QYApU3Nub55GRRDYCBHQu4ZgLH6RpiqiKXh78spPRCkg4NWH",
  "key33": "2iBr6DQGZ7ZJaKVXmYSSqw1MB51ebKR9GyDnxj84fxFS8XNG36jhJnrCTiX55GcNmwbcJyBw896An977k6NcSJEq",
  "key34": "2wQyiNtBrvH9p3d8S91cn2aWPLX6RW9vp3juda6umJYNrxzaxyVqEsPHs6c3dX4LWduESP2MEweWPhj9ys4Bd7ia",
  "key35": "2XWxUa3Q8Vdnm4hpu1LMp6Mw3vh3BoLhP4gKFqBDGHTnyPs9gYkHux5ghPog1aaktgHiJtha6KmbSrk4kkxH3jy1",
  "key36": "5TFQNPtVuVF7bKBB8gCAdKQci4d3EYD9R5ApUDqQBFxcdSBMf6nB9Ju1ntbUXZGuq9ngTaX8nDBeH1hnEQEmBU52",
  "key37": "2xE5tniwLhbFhuiEKqA82uJgorARpfikEbm3m7UJhesDxDs4FsTHDWeAJLBYdgdSGZhSkk9a33XKL3YeXvrrCtCx",
  "key38": "4Cud37XSsN6TxjsyE9p8KjUST3AKNSGdXMEu21SSfKjZh9kF3fCoK2TseLzz4j7jsGLRgXtfLRc4wqPNBswd9H1C",
  "key39": "5QDjM3hUUJpp3X4ZgubmVc7URNtfJCkGx2pJdfCUaLH7p7g6rZUgDySYPmFHd2PNfdCfhVBCed2nzbrArE7jA39H",
  "key40": "4fYkDNrQgNVA5pRgPiWSomW6wH9YDmwfd3M5j98vYQfP6qfZdre3kqY3puyyFPKkBHskzdVAoSCoNeAf8z3txtZh",
  "key41": "5zSdZmUbh2ndgYDVGjCBXXRCN88kocmBKNMwrSqPE2eTkam4DyCwWGucvyAMnTE3U6KuRvNXmEDFos9RCwRtRqam",
  "key42": "4nwgJ6F1FauLt9yp1tLK1pVYZUAjyt2Ef1bcRZHzXRo49TtPcAqbWdirK6V6i5UEEXTnCuZDhHhvkCf42skhEgta",
  "key43": "2K8iR1RJSwuyTPAxEDYHuTWKx5c2zr9LcfNXk5rnjyjxDtgquvfQApEKgzFCRxngfNkaKX171MPQENssbGwTrpHQ",
  "key44": "ireA37YGhPH98ymvj3YmnnwE5Ur6cBcy4mHkDhuK4yJra78Uzh4tT3X5oZX2xgbRoMq3FztkgSyi8gMQvcAQNMQ",
  "key45": "4YmEzgLM6Awxi7vAi96kKRX4robTCvcAMwjJtnL3pP5m7i7icNYNz8RqcVw5H9dcp9PRcgXdFtM7wCotYZjGD9bw",
  "key46": "2LDctVYPMndczrxMng3vZUouG6cvW8L5MdvUwtpQ3Pvf2hwghT8SQ7krgP1nGMqXQn4EZa673nTUkPc6yt6mdT8M",
  "key47": "4M6HsQkiqZDxpdeocMAncTJrPL47pRghA2YMiLRAf1uGocZd7f7DU6d6PKL1B1Wh9jMHZiWC2HVRiET36vJcbQfk",
  "key48": "3AXJKgqaj5LG4hJu8uPH7YXY1MQEJa51xFLz4YYzu5US9gFASd3QbQ7NyZiiT8YMXbpfFSmjhqL5wgNCzfRmGYh9",
  "key49": "4ZERMwnX8PMJrpTdXZbZ31fN8YNMEkWQqPcq1hy9LmVtVcnV1CMExkFQHwbRCGRHBTa4EJ9ZTViXQewkUQ9CUzbT"
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

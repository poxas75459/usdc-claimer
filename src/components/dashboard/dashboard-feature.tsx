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
    "5WuuLAUumWdrF8N1FfXr5KQDu2XrbdAk7wcfw4DVEoHHPcCtX6WR6oVSacBEEZ2CfzFk6kRBS9QUNbV2GW7BSKKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFMqSLuWoHFqkcuHSHcKXVuourUK3WnE6fxLM8zaM1Eg9th9BFfytHXrBG86TWjF72arcLyaZdVHkjJgtY6s59k",
  "key1": "2WY8EbzjkKD36etknpkGtsXZ3RgcWSuPBBQ7HXu8DeN9U9opgwT5M2h2MjADV8vh33XLwU2zAd9HQYpXS2Y776SD",
  "key2": "3FRi3xcP7ctJgYTk9kRrGLFbnBCnJtAUbzwLzSRv9KTCF9LcfNe5VGAM6tmbRYzVR8V4zrLGJgRQTwRSbErfF6cM",
  "key3": "2Ru5g7scuMoMzZ95PFZMGE2w21xdm5DWR5fLvdwaUjf6SNFj8VQqeQiaoQwXcLwVBmtbganSBoUnEQ9HkwM66ru8",
  "key4": "2HABCVZix2ie7xo5agJEftnj3LMLMdgJoeDvJdFxtfmPhr8fcpd3DJDbB7wyEkf8zoxXPeinNtPEknEou6q81u7i",
  "key5": "2Ud5kMNADKJAfAJWPyHfyJnshc4Az5GkvtFxXeoUosgLjRyrZuXmqeTtdYrCsQDZpzmJKA9KgGrRz5SRAoP5ujXC",
  "key6": "WfTm1rz8sD8Wo9YDN732Ya8KYiaFeVqWstB8bus6x2Gzu79U2T8TVX4ChDqC3MPXqsyX3wL56vcoX7Q7p2uTAQL",
  "key7": "26NgNhrbj78EtzrwTSUFhy7owvtFoLcW8szWYKSEza5MbzrdUQvMoB7Lz2EiTU5pXwAfJy6KR7TKGhYqYyyjCcW7",
  "key8": "3vFdRCtufNR3wsxHP7YiHP2rEK5VE9xDrPLzJTdfvKk89zhmBcbnZQwvjUy2TFYAHUH4xLQEHYay8iSquxUWUmSU",
  "key9": "36C3vkF4NYiTejwxJJu56y5dbfvpyj4k1NzDQdnP9579J4oBPDpSRRUQsEJGQspBAjmGzW7kxSbu7zJ83jdqe1WJ",
  "key10": "3eAtc7Z1GALDt2ZSKPmFgBwZGLk1p8ta3P9H48CfMnQfyZZvWtvNbb3r9cd6xYVpCeUeZtQS2g43HarxFyo97atP",
  "key11": "5rUyjVJzu9ERtPSY2DWsvqvVZ43jQpCqmvF32MEbysBwQxunGDXBR3JHHRTDU4zfmv9RgjiHFxXPer6WU9NVFfwn",
  "key12": "XNqTFCv9zwLhPd56hgJUKYaJGe7ap1S3UjVH3YWT515xFtNjTW8LGkHQkTLdCsBk7gAW8iayhqpgooUUi6YorGC",
  "key13": "5i9ZH5WprnryxFD1ZwMBTwydoktH5keSQHKH6RRuTPWBjvu3Mwq9gKk5MMZpqYkKMANChaF4PuLPqCWdZkdL4FXq",
  "key14": "2qitM96SDLSGGTd99gtSTBiMwk5BCPCwciMteJSYAbSGUJBJYzvf58giFoVZhAdydkM4q6S2eYiy4FJQwj9igGbi",
  "key15": "29dgqKFximFSsC3WdG3ixZGoeEVrwUwjgdBw2FHD9EDAW6FYU9AjMnGpT3LQjvdPxmhba9G6BjZw7HxAGqLzJoS7",
  "key16": "2Q5p5k3gMB858Af638nj9SWWH7ovQ1H8TMZFVCM5XknpCFHfy5wNgt8SX4cqXp4vKKkxepBYLh4gennKBcScaMm4",
  "key17": "7odgntKVSFjmzwuFdGjsudFMMJTYUy5mM23Vn1rxUNnBbZRrxz2QQ95oySdnTn5w7nv6uBa3HKMD725LyHADKjB",
  "key18": "4JTt6LYLxnzigeTauSvnrbAcSWV7aYvU47woE5omzYka5iqSJMYkrWvzEUjEWPj4bAmyCCRQhvmbk7ySYCFTydBn",
  "key19": "2BeDMPiC2aLTMJTWh3dUon5b4tuwvHBzMUfDJzu6sdyFfxs1ZiW5XsEaduD8J4spXFWgiBvLeAvQs4j1VRcAwR2K",
  "key20": "h1HNTx9wuDYTwkFCxVsNHPZzCQZiKefdDoWXXgLEo38GKmQ1vTzbhaXAADdSsh2HH82PXzZcRv7GsfQwhpXVVpB",
  "key21": "2DNyPLk23Bz4Lrse91hpEQfrWLcCCaGKVMYXNH9mGyGQjjrNcNhw1d2UKuRcAwJhr9SWBtpPj3mpPteraiHPMhhq",
  "key22": "4sgBexxxWShUYdWVvWN1TbG2ZQ5WW4rSr8ZULuwnyAUSxxTy8Yr4XLZAXpxoTN1cWS1v7Eeq7cw8Cayo4FU1KUwG",
  "key23": "4qsWCLVHRKJT74eiJBsnqmpyxz6eaWCXvrPtJfeZSedRVBkCPinEG8GmCsJnzZhbZSjNiXdbtzcwRDesEodeFkJP",
  "key24": "41eGW5xZJxY2BdVWE2kAwbs1FYRRTQFYPfxTRLHCB17xLBdK1JGrD3hUvzi6hTgFUF8atmrKgDfEJcDofRJWXFCw",
  "key25": "5Z5WGDDZpE4pw5Rae54fBNt4dHWk1r8UR2rC5EBTV4xLtY8QS1K9dVypLV8LqhAJmYeWsxBUPzpcXHu3yRbepywq",
  "key26": "rB243Zircrm4Suz2A8e8ehKbyYKsuH4rBqZNYKnz6gL4ppEXWhv9AAWm2s4AMFf3QeXQhuAtLg6U7BDXh23TbUP",
  "key27": "4Nnz4sDULPNDFojSbcQH4yg1EAQwzPzq2R1uG2t9GkUFtsMeB81wR5o2az2gfFZLYgi7QcZ1zCEzXFjtka97ewor",
  "key28": "2jfzaUCuyMDnXUFMUeQmQKovnmvkJu3vZetNUwTJ2D326H7y2evQx25V4RP4ZbNMG1WxBux82SnhAGhRAqqXyvoq",
  "key29": "2ZjSKddGHX6pQ5G3bCjyGzNcK5v2zr7YFdD2wFJidCWULMnwPJ2UZFCorpQpiKzvVFhtN2QzXggEn3UaDLX9pDm1",
  "key30": "2Xn4QLh6tEXzkCk2kTeooZier7wz4ZxSEW1Tk6EBo9Rv6StvXNFhVnnRHZoHimMoSX727R1NwuS4VGieLjgpmwvW",
  "key31": "31M2XfsYLftzHKkp3aipH6JfhFzohgbdwUaqJ3D44SEpE2Lsy2tFhHqUdtydU235Rw4NK8E9CukJjr1tnBUzvVn5",
  "key32": "QjkeG83jjwfs6ZmWC8ehLuvL6SNgCzLe7fCDjLXrBXdKpjfWMbkCgPzd3wY9oBkgQyH5afd2KxWoDfv9YENJCRW",
  "key33": "277CyqHU1wZEHR4zWaSXiWSxZzqnGWH5FSKejdY3wMMXbK6QLBFbA2RppL6rQuQUC1BAWziebL7FZ94QzyuCGdk4",
  "key34": "kF1vm4AXN9uPHb1mGoXvt1gCzxSz2qkUXqc4M6e6BeLptJcDSmPtPjccaYK7QLZdieL6LKbQ6oPXgyRBpaeVCxD",
  "key35": "GfqUjj1hFT3ZGBHkPjuRWV67RPuQKDTnvbDATf4KvQYSqy97u8YzVhGCwmVT5KuEUAzoaNDJyV5mZXBjyGQG8Nj",
  "key36": "52k2B69w6gYfzMskkUxyU8MtcRGU1YBs6zVUHw6KsUJ1AfbabmY9T2s7VuR4tAUaQhVDuKcEJZyDKsXGHrrfUR5a",
  "key37": "3xddF1AHSZaqTSwoGjJ5PNiCb7GpW8Mttju4dcRSJPDaxA6xQzAuwayzHWYa8mi2kJL9aZA8UyBktPT1EzZgUZZX",
  "key38": "1phNS3b32ZtDDWTzaRjNDBmdiwobLmDLFXuaAQEFvTJrHMCWyzeSMZnWygFwNLnsvWcgSSCKStrAQ5hKt3Lfzuj",
  "key39": "ZMPhCi5wALSoiX93U1Zde27RsknqkycFF5fexa8WkGrX5YX4XoHa4dBbQD2i6twkAJDRKXW9jHCpT1oFwu8jspq",
  "key40": "9ap5zt6DSXxzCiLxeLK12mhG7PwZXAUtvL3QHPxtJ9bkfbuMsue5HkjvcZJtv4o88SKf9pGRGSGoWPEVDvTEbFW",
  "key41": "2ePZbCyFTTbtj2bUSiYyZE7zwDcxeixLzNNLAjVbDViTEabRY87jwqBTJbNb8dgZ3eJwQ6axrVmt79YuLHJ9pgve",
  "key42": "2zJH3BpC1Gk1AueGhy4SbS1UWijzdeFjKxrnC8cxVR3coZjM8dRjpy9LEUi5EMtL8Y39JSjnQpG9WQQTAzrJ9P1V",
  "key43": "275w55zQqLFPVJBturPJXBEKAafgdC1AvoVtsCCxPGSqeFuqo8pjm7SJcbMHySNR3uykTgHcXc5NXwLAnNH98FPo",
  "key44": "33oocsRdV2J5y8MXHm6dXDHHCv3qt5mBCyRm139ndwYtrpvUTSvpaM1fUyuNRDvrGx2d4uijP82v4Tzm8zvBZoPL",
  "key45": "ioPX1wJHgtUPSTN63yRowVT5NsVSPerXJ5JwL1i3bb81x9YVFfgeBwK2Dam3t9u6VHSXyR7LnJKWP2pd37pvpVC",
  "key46": "4qjr4XqfpjZs63mfH639rcy8hPunb99c7kTQG1Vb7mpr9oKVGND6QytWphsHHLFVwy1TxLwVrnx9Rawq29XYh8mJ",
  "key47": "24y3uU1UoJYZmaRHRcsiY9KMWknf3gp2G2gvDPZf9EMk6smLMVsgy9nKYTBrENvB9g1Bw1faiEBb92NFUMLfpV6d",
  "key48": "3BhHRvNwcb7MUWH7DobtpHiqeBE1JUy8TjVdqrH7GejCWhFFSoUzsyZMHAzFP6BDhDX1tc8XoxhrFe6fGTMbYdf",
  "key49": "5dEDuWtoZHk1RywiSv8c7idJkZDDPDLmsLzQkcxi7rTAyXi7PqYq4UZcVcG99dd84rERTVSrPWK1fkLZXR38wEh1"
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

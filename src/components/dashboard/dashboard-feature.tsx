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
    "374xiCP5QuBgCHGGnekxDCG2YMbTJsQ4SD7EsWSBhEmRtELwDCcpXM1hm29PfWzKtJs7VVaawEgeQGHCS8RetLBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vFt3Ekr5BsJaZuLTU44Th6yKY4asEUffhzGWzt7Z2eAzwB1HmhS3WUz6f4B8nBHrZrHbvaAH6b5ffEkuHj8ctXW",
  "key1": "3jMsxVwTpGjYLHdNrwh7pTUqQDSGPv6nvmS5ufAqS7hdQ64H9VyoAidxof32AkKWD4KpGww2M3p18sexKoz14e9N",
  "key2": "4wz7B997jZpdVHRRZvmR4e1wYMjPQn5hHuAFYEKb4CJM27wGb4eQqD7sAkGiGS2FR3NPA6Ans6UXJ2PJtJG5mFK5",
  "key3": "25SUfnJWkaNgk8G7AECo9VxefTfrv4S8ZnLQifS5drR2QkiXJfdQu1YqxSp9yEdk8JxenJzz8sW8tQQC5guHmqs3",
  "key4": "61BiayTQHBTC9FkX6nBNZAWWz8fdR62befcT8icumYqqmHfiDzGRW3VxegpV3SjqxN2V4QKd3dRJWX2RzGDiWSgG",
  "key5": "6gy3en57eBbWZ3PaXSr9jXndtupyqCg5pHFXjadA3KVHL2jRxjXhhttEMbGSgbq5vCT9x7xyDCPAnxBiGFWLTre",
  "key6": "4aBnsvjpKywAUXiuHS3M5yuNuLccmzSHuX6FJRcoNpb1wrM8n9iZnHEZ4nCXnmdoy9RZmNqJyhDiJ62TPtPkaB7d",
  "key7": "36moQQwPfCEHg5rMUEt9ttNpMqaNjAS4B6F3e6Na8jxWM9aYm4Dumx1iU1E8n6t2FNcGq9DFxBV76JcisD7AsSbL",
  "key8": "5FuPqiouxmnRGcyTqnVAwBzWVXTpG9ScW6DJfoUmwAN47XJrg8mci2SV45vdYM2deZuc2aykrQd14paBinU81aiz",
  "key9": "3AVjgC5vy1M8LtEpLTCAXD8S8Sy1H5jXXCZfau9Hi985RiB4EdZfT9D7uzmESokTmrdPPAp7FG1eFNxi2iGFyiyN",
  "key10": "22z8s4WybaLmX436ArrLCP12MVhviYq8tgvjLPdwejwaoVD22Wcu6Xd6UUbsGRkpLRW9akWaJwezC2xXNT3YKFDK",
  "key11": "H7zz2fgDD2NjMPy1DfV9Jjj7nEBpodJcUxer7C7B9WJXdPhaQxr4rT4KQR9tnE9ZSyGsxSoXNdpdziiyfxvcVho",
  "key12": "CyKRFuu5uzb3UUktoPjfNk4YzxFeB5XyJYLt78YWAExEGH1P6Hpp8hDMAJNHCidZ7GtZx4sma6kP8J2rmwU7WZG",
  "key13": "47e3E4NvoH2wvnJ58HdagAmDV8nBj3vGjPrnkVfvyJiLzcjoQZYPUnGrC6UR4gbvaDHqKMTavmZquwzg95vgjZhx",
  "key14": "jHus3JSdj2gNoCSvWfStDtYudbdxZ4dNVSBVa8UqRXERPt9oF1ABAcCzMin75US4sVYKgucx6LssDms2gjVk7GH",
  "key15": "4buCRdsEFbfS7NY3Ykz2hqaECibtsQXJSZQ1zzDhqhEhYWkMjPKZHvoAbZt7wYAgN6y2EBXrWhx4ZTx7kUAPA6Lr",
  "key16": "4V9SAjKroKeDARi5NrLoAFScSVYbFTwLGzE2pSAGvwdyRc6cHESpjpsenoZWFRr71Juw7Y5gaGmiXcc6Yjwza8ce",
  "key17": "3tnJWRTmhbHtHNzdgTZA9Ltxgst1Z5KUKRmi9R211ZE7HdSHjgdXeZBUUD4oL3jqCnhqkqSxVx9uWb81RatBYmbm",
  "key18": "Ja9bVMMUWcP1YFyZPmDjsWTfm3TgVhffTB9XfbG5yd3As7ktgMYYoo7q7Tk36Es2Zxy1QYZ1eDtNz4RCVqLRwKS",
  "key19": "26aRJ1cx5jxErkTVqUdKEvZ38ABtD9pfVKFYmffgPe8x9rP2yKLacgCY8zftksoLhUxYKdSN65G9wzG28T7zseH4",
  "key20": "RLP1BJYKKnaGVnKtpewQGtv4mVisPr8oTLJ4kY8TYz7AVrZhWtUFZC16f6i1EdFAhESW392NHHvCq6zbQpPZM3q",
  "key21": "2GNmjMsBcYLeG2hZNSN3uBUMxpqd9ZCt7xVaG9nncsETT7MxFuxD5xG9rECyDNj4G9UDTKTiAo1nseUKAHX3Gd9j",
  "key22": "wKuD4y8Hng1P74KiZxf4epRnPksfChWvL7Vx5yp77am431ALYKWAQxSFMS5LbsiL8vWzTz4yr6sDo9jdDiNqu1g",
  "key23": "2iiVJF6zG2DVDzEJMeMFqDnTvGrdmrP2HYHeKin23svBQeKpLdZns2ARJnRQamuofM5GLypsu2o3GPCKGfCsp9NF",
  "key24": "2XQ7eExjMcsTcLMriqbBtok1inZPGii7DfCkGURccbirCoMpArmS9Lb728yhmxZzGPGL2avJZWKDuBXVYcm5czTi",
  "key25": "5DA5yfX4XUAnBWkgaY2URnMzbXvYxBht48HqEMnPWKPjcsLwAvkcoGmPb9xKp8t18k6cybbLTzhKZu3FWPRMpmZp",
  "key26": "4XfQTXSu15NgrHWtcpZn2h4Gd4RfFpbPYCF9y1MtGjx7LeyBWtATMSoVDoLAE2B86EXBnnassc5C92PNtzA5KkY",
  "key27": "uSAhMog5HAGoBdkoZmoWThZCnV9RQCv6TL6Aza97REuXAW1V4raQwZuJxMGMukYZCtK8v9kHYe8VxYUTbC9bJV4",
  "key28": "61s2dxoJ6hwWQbmn5McoZB5qhq4Y5CcHCbs4X6zCqDYdzGUChXxabLxqmrtFN1BNvtZmB9uL9ifALix9RrjGpL6m",
  "key29": "2FAVfVyGPgEhirWN6NkgSZqYLH4J1JATDbi1CeJxaGRkVreDRMCfykAsSLUAxy5PhYTrfzxghEonzicXMRJ8So4C",
  "key30": "wGg8RCrP16WjDX8AeXz8HZp1xkUZd5UUQXq672KGJQoveKqp8HH8LUyymMz8VoztWUY1hnGdR5Uji838A4k4vet",
  "key31": "zcb4DKh4SxzahZwyGAnXrHTrWrhKPvp8pbqh2Eibd8Dp2YTAC5oop6Sr1Y6w4Yih4YVqWFfABPR9ggFNas5Lc1c",
  "key32": "4bFrmp6a3g7LVPEpcRdKRtUbr2x9yUHXmGnGJZwRzodt1sQFCGxn8HpggnT87pxJprctJsqUtuyhewyUPPcJf8Ms",
  "key33": "4xyY1U3qP34QxJ9juhvrWAEoSqbvs1pL3oGQBe7xZPvqB4fSe4v28c6xci7CPDCU9CuwHHYUPLej7XhQqtpQcy7D",
  "key34": "2DbChev9EMSVGVpYJnTnGmtJj8zbkbSMfFeFjbW3szoNRxyeDto51y4Xo65uDNCdnwdewzW3VENRnG4hbBd9D7Z8",
  "key35": "3NVGNYiu7jKZ1v5qcoAwvh5hQiuzSyUipkPaPa7CZMcr83xkbJAUU8BwoEkFa2V9SRA47YLmtGUaWKhd2LAvvyYP",
  "key36": "5PW8WSQktmaKnqzZM4oFEaUAv1uzYgu2RJ3izzma8CuTAedHyEkZoGYfmpRScFxZqKt8AGmzoWZQuDrjqfQXFKZG",
  "key37": "YxbdLZBmHcKhvTRpxL6bUrJndPpDvmLsnf16m16SNuWDvHGyToB72MR2txuub8BAXEwa6cguNswc8xsGa2QaCcU",
  "key38": "3HgFBCV9sjS7WA87GB3CAY7Zrph9eYCYvt9KnRUWQ2mEC5y4MK5e9cKbX2Toc1VvpgJ4qrHbLH3Fq4XoDxd4G73g",
  "key39": "3dZBHFKrKwfYptDxg4ph7RTgRXBjxSiJmnARi6X2hyXKGFxbUAZQrXbEF2GvFYmsWy2X2JmTj1QUK8H1M39aTo49",
  "key40": "pjHS9EHRSXWtvkpEiRQJduoUaynejjFHjZ95XcMo5ZYpJxdvskkCGCtzNAg6jSXDPX2UDNkwa5Si1XahQcMjEmb",
  "key41": "2wCjvHUppeZPWjfXkBs3LFeg3dqyaTNJrzytHMfwHcLJpGyKTSXB8ueqBz5rLtwg2NKumqGuU3Gsh3XYrVwNMDEz",
  "key42": "2uUsHaaUe3Wuoh4RqUb5n7qpCDt8yJMxtEP4g9G7592g2Hsxu9kbgLJ5Jtn5v125ob3LbGWiC7qiW4dSFzKoB2wv",
  "key43": "2CNW3fdzHB2ZMkQtweon45rhfEVSaYqDM65naVLzw2cfopwH57W1YvcNhzzpZMrB9VHc1LeTv2DJsdNxzvYokyF7",
  "key44": "J1UnAxgPLYWUYh8gtgQTmBgeQ2ZummE4VwPt5qSo94vgFv6RTqsPamFNTKJ3cXsSgrcQDDgaNB5reELpPrcjBBk",
  "key45": "QfgQRnZp19Mykf2VrDMrfqo5XMpJXWoxxyCykVMjq7JJpyf4THxHWmKBfjq5YrCUYoayYxPgHSGYgMuMTHNc6Ec",
  "key46": "3JujayqiCUEY94hgCKp4pxjNbPTU2J8trJgkeV5BFMhfbQ2xtwPiLtf9URkXcikkCMewxpTmGD9onPXXsVbooLuU",
  "key47": "zgFsKB9Nbe6QHb9y3FuN6HaUasLScATEPHyTpg7sQ2tRjcT5MkMSCRTfyivTAUVTKkfjYLpdQh1onkTho4meCSQ"
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

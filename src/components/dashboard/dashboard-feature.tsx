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
    "3sE1zwPWq4aigRqff3VkUupPsQcg7pd2NLWGju686cn4YMZrsthkpB7rHGWhePhnhWB45j8wf8qgpJhf6jNbkqen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JJ8PVHycQTsrXPP6B198cS4V7gm6b3wFvstKtfEZHYGNBsY5Ftk8dhLuNhSp9VMZzjbDmEkPfD4JPimgWaSKLkS",
  "key1": "63r9eT4dyPDBDx3DnyfJMztis363TECoAhPu6ejsDi6xbcBw8iXRZ5MJ2RsJcsFJnTGKWxHLmiWmnCZBmDtoajLL",
  "key2": "gP9ZJ6EnYxkrfjiNw2AgQpZFB6vWzr11MSBrggULY9WY3JUdL9p1Y1VkMDNyk1wfB1H1wmNDeZsQPMDhpiV3Y86",
  "key3": "6582PPA3nEJ7Q6ed89HCzdhz454PF8tJ72znuMPigWY6JoAq7pVQGxdCAVoqQmnCnhekZHUfWRk783AJF82jF4kZ",
  "key4": "3ZmPRaL459crUmza5JSwm7E9AKNs4Lwnump5bE6JykzfTGrCiBvpWL7CW8uNn37c6nqi5sDhuBavzXJdNgHW63qf",
  "key5": "58m5HVB9jy1QBuVePp3T8qqKxTcCmUrg87DwehpH2xCs4AGUPf7heeRgBsF5PUuuBAzMdX1S8q43BRizw7SER33",
  "key6": "3BD861gaBZVA4Vw2a9EVTzumjgfpPPHbkzCaxg86HhyiFNCH7dqCfGn2zaNXYKBNXrXp4t4U8neULNkx82jch33p",
  "key7": "usnk5S3u1d45KbXH8s5vAX2FWv7QJiEGQ9vFck1pjMYZ16RsegRMkmzn3pXsfX3CkghZSeAJJQ1KxtHnve9B3r4",
  "key8": "S8DajLJCJLwjfmcTT6fr9jyZ23ZCT79zs2DRPcLHEzzWGrBCrBa8DU9qewoLYm3Z66XUKZeTmCtmxbxVxH7Ttnz",
  "key9": "3ymhy9VLQTTAgktG459acxPkq1nEcqFK2z7XWt6udk8h5jetQWCykCK931FP5oE96fnaowNhhkYKtvpKAZxPKThs",
  "key10": "4VQ3fqkXT5nHMJyqNRJ17b7dmxzRiYGsetRj79UfBfvN33Cdt6cJiDyucBEhYjj7ZjDbkYxEV8dEUiHUjcrTjtiA",
  "key11": "5bSikWd18MDpjtP1JxGrfmHWA7agM7P2Wrmuf9D8xv17L8Em7oT8gTD1YBpKE9HXJyVpgZ83MdLaf2mik46BS9GM",
  "key12": "3as8F3DGXeQNqoTACravcRSyKWCS7yQ7HFc1bzmE7ZYKXPjFkfxAd3x4PdYT3z1B5H97Hzv57EN6GwBhWqA9dPRp",
  "key13": "4iVGAYwqjUamAU67YgPPsE6yiMVQZt8sn1DNERWYEiZPuVHMbq71s7LS7a6rXFdr33ZDmdeKQBLjPne6qEdzLYJ6",
  "key14": "22gbSpLfYJ5TNEyKxxphdmzVgTGkcy6FoabVRc5f3NRGCLohr3tWvK5LEX9DBbDvHExTnadX1jqyXamE56qtKhKf",
  "key15": "2rq91UqmD1wFvcMp3zcYR6tobgQxQvuvMuh3iXe6UrcnauagwWTQYWVXWd5QPe3Ma7CHQbZHGmxkqP9S2x1bvENe",
  "key16": "5fcsWmNV12BVDASEYQo5ibxLo3FCLdHrrqfVvmtAqa6TWYVzZFLQwemhmDAXvFeKDAvE7eQLbKa6zTz7DQtYiEj7",
  "key17": "4srQfpKePXbNaDCP1TPzpBHp6AE2Tsr1U9DXfxA6XnRjXDzz6SfqYwxSkgqzKucHS51psLP6jUg87hcM28pYeMJA",
  "key18": "42hiF7Wi4rKYfM5mriUVxkTMFJdVzMNp82yzjhE2dpUcEuVFWTFMqSeC9bCRVe1phVQesks5KqUtrdEHuVciNFe5",
  "key19": "5xRX1bgMRPDmiyqxtErfXMch4GANgujguRk3hN82Wr39QrUvckaTu52DjxjZXbfFKnGzSTKkTcUptrQ4XD7gvRLG",
  "key20": "25HQvdrxUwN7NdQXj6tBCrXUsDWWWPJYjPcq9G1FBQyUiUwVFvrukhNL2vza87RkzCfsBmVgfbTeYVv3hq2f3bHk",
  "key21": "2ZY4fsfWu5Tcp6LoZwAtzTjFNaWadwrLZWnWp86aeAu5hHNCr7NaNu9mE5oGY8hBPpVuWnkhVo3G36MXJcumsn1t",
  "key22": "4YMimg4iLYf9ZD2g2JRbyYHCSVkdegAMXiCGfsoUs4HMX2MemZX7KtDMQy4PXwVnQoa2iHzVXTL4nxJLZWj6AwoW",
  "key23": "67UdfL27b1SoB3y8WBxbLb3kPLTg4C3Dc8rqWUHx27NHHFwYUUGd1e5RDyGPDER8XXPxyaE1aF4NdzBTyx3WbTem",
  "key24": "4N5yxXzHAR48Rgq1Xpg25enxRNU5VQc8rEZtnssifSP8f8zg2dgtBBoGR6wo7TVxpG8EMWVJLdW3DQw72fYpU18B",
  "key25": "2KRCvs4yWMFoSnR4B1WWtRyhxjrWLwWUuE32HEAAYvCgx5EgAnhkJibkBGFaL8TfJM4LwNoJyoBTKbAg9vT7LUtP",
  "key26": "42Tmt8wwrUoUkrmLQThSkEj37YCAdMgdeJ1fF2Dn2GFahSa4qs4Bt4iFA3qDno52dfCaPZ5xNnCGTR212k2ZUsw8",
  "key27": "5TeP67FVcMc8ufPY1y4S1PkHw3fBCB4Npghu9SqTdf6eNiBepqcaE9rH3Gh4vA4BsZYbHj8LxBuNYoo7enarVkXK",
  "key28": "4S5nJQ5xQKd4PBoBB19RuCFrCz3rtofgvkWUzahXoSAgtaZ9xunzmAGuLEDrcqAUMdhov6i6zqiXc4nMZd7xBHg4",
  "key29": "v71ujiowdQb21554P14L4AE4ACEJZaEq16ox9HNnt4VkjTpEJbtG3kNRxiE4wm3vteT8ffMGWHw5sikNjW6hjhu",
  "key30": "2oWhNqAupUd13QccmRmhEFMTi9dSFJkg6WZ1kUnJrRVXeMPTPNfTfrzgBkoHxTQGztsZdQ1zHXRkxXSzzuD9AWic",
  "key31": "2VZxsivbadjoob5Cu6H5UR3KTBt9oCruJqzSGmpmv3wFuxDibqiK8c1yLbXvgJQnA1H9kFox4MA4ZJSmjBWPtDpb",
  "key32": "5Bp5Hew7Uw8J1she72gJMwWCU1vm3LmC6MM8kFHUFbPu6iXK969ncwpys5Wtx82kDwbkizmP2SoA68qzJrzrVPfM",
  "key33": "5k7XafeZYTZbEuVuGmm2dL1FstWjtHAaepGCif3uyv89DZY2e3D16EyfvM76vdmxVdYT1yYWWxYVwCSZjCRCZDns",
  "key34": "57wTUu72Vz2pAtkmjeuJbnmZ8F9RuBWQaweMuYmDebRr6dAi2Spu3Svo944kEuN8JnUMjd65GXgqcZ2vGuPryELv",
  "key35": "3n7jBLFhFHr6FZxfq5pzUFubbWQCnT44oUHvxKE6oNsLv8ETSSZxNgwnvy7zpxB6zwyp4KQHUUsfX8PYsBhwNmP6",
  "key36": "5wLahSXaxMT8UygSP4xeVNBFbrVrHiTceV5H73meppBtNNi3jdmdbvCTtCuBSUaJazCwMN3bBuXYhUDC82WZeJSw",
  "key37": "5nXbf9q7BecwkcAp6ivkhxnn7dSG8NXz4uuzEU7D2XpRT6hPbUnxSJmDpQemtdmXeweeSQ5G5W9XLkXa2DztL5gP",
  "key38": "oxHfhovozPLc3rG6qNSMKMUzhDkmToAnQmfZeN8bnJQbNkLWdazHjsMX8AVs6KdY2CjPJF5T2DSCAKaiygsHSPp",
  "key39": "B1qBHZFfYAfKBwRzx4s15vArEhiygy8tWjXs9uDoDQCaBa6GMNr8VLL5mHZoVfzqYxxQRBFusHNP6fsVmYFiGcF",
  "key40": "4u3Cs26VsE222mnVD7iqedf3eEXWxY3TyHjBWHpsMWrGfuMmM3wHfdLf26QyEyxt8HdkKoRHPyjsEBv5oYQ4UJj7",
  "key41": "4k5GcZzXJAtLwKByctMutGQQabKhzLfsqf6AW938Dnq3Li7mHjZJrW9mEuJ5qtHbrh72jvZWzZN248pcuQoeikzk",
  "key42": "2qT9ozbfC898dZb3ENi3GZQ11UyogRRRCE9XZq3LUNwEaqVYqGPAgF73BwNJJPKHLbeTcLoY5vXeHU8SqjU4c9y9",
  "key43": "3YDQGqLCiQMJxtBsFiVwXEEQnZhkearLggFatavCVwXt6rMF78iCXeaGjHMzvPVTHANgSWzvEAc3gsUY51cuE3Sn",
  "key44": "4d5tD4gXMkWE5ozGqAPjjF1vGwQPRS2Qw6MHTDnHGz5t2cekcAUH3tR6q8FW3eaKqS7oUBrX5gPweNGB1E8eE8rv",
  "key45": "5drvarTjpUDJ5ybw8xSS2dvYaW9PfEezRJYTHj2cGnxRyTD8kNTDWzzKfRsQAUypv2c8YeqR3UrudK6Mf7m7u9VU",
  "key46": "5p1PRrk4ab2uJUamKMz13Y5fnbGkFpAK3qBFwZVYhYn9VAPvko6Y7Ezr8wgMr2VdareHrdBiiPC8H2xiCKrQXP1M",
  "key47": "5hKenJ2rE5hY8YTLbKsHv6e4qKiuzwww6XF7gTLHdAUtXz1L9vTLeWhd3MY7yx6yDBfM9RuSfb66rQTUnk1axV8y",
  "key48": "2DZgiKrh6d3FGdiBgzc2rxtw9UBRoNXn8ym8LyfJVEieKcek6yAqrVxjnpQ6tevKSEFhc1mmssfJBUnSUyCg6o3G"
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

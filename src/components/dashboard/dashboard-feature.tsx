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
    "4xRxVk3xJ6bVtiMNk4KPJErbd79cixJ8hpkmupWnZxzwmS41sJjiMMdvuQALHjPmzBwwkibDrDSP9gC7eP1oFWYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35QHnqsrYZxowrLjtSZLAvZrxGQ2V5zJ475iK8PQrKsaDqVmLVi3G6EnqfMtVB864vNV87EGpc9X2f1iyeigXe2Y",
  "key1": "433FKPAEuGURsC9xwyHpVNsz6P6xtdwvx4y2mpP5NvgwsmuPG6skEpQeLTD45goTPU6uJ3sRzBr7mcbV26rSXkCF",
  "key2": "21vkL5stCM8nNqYbyNjZosKJRzTaZa9etQAemSd24mkokhBZHErKniFwhsuPEcUL5oWcXcmGQV3u8CgfZhGFQEMY",
  "key3": "34h739qpRuPSVDU85wxsA3z9KQjEKNsr2MyPX1kGPmzSsRCfguGeWCYx2ZHXGSFoX3sR2T4H3xRrRUnpecWm31Wo",
  "key4": "5DjM5dd4igvt85Hbn2ao1KmXz8aDxbJUrawiXAfd3t2ug3YE6QEJHh3rB45Tjq2sGZsftXeZBjD13nV52enXvK9t",
  "key5": "3QbACbHYX4to6o3TYDx9W9s96FPXa38gLBAewaqSsVwjQbSxqbwcNHH5D5JREpzYcWaUxwjm6bbpha2XjBk5nHVQ",
  "key6": "4pZxEe6JbzHQXTHErEvj4T25wjtzJYv2BtJPMCgHq68RahDpkBp96c5X9qxPQoWftV3SJRxYWE2KDiznoDT4Jcp",
  "key7": "2nqHPoDchF9HYW8ZxRSqmPxgvFT2ETfbHQx22ZWyqHffJuuk3bVor1qNw4h28sjLBEeMeoScJfTWoT38kit1mBgU",
  "key8": "2HCJDQJdmYmsuFHuJQbjJkx2efQ6NmJZ5vZYbX3PBY8UX2kuuFeUCPuxT7sgf869GQ4vtuQwoStVYMi7ehXr5mn1",
  "key9": "64g5JXuhs5KQ6CiMVvx1eZMsiFnGtaL46ASQd1fRNEEXrQ1c5hcMxAZbCEFnUWBRQjF2kd48exvKebTbXSQbxpoZ",
  "key10": "5dNN4vuJfGktDsFuDmScK29WAE8tGgU1WFXEzRPzpCVf11mG9eVgmxLLW4bADKeB8ZQLcYQDj6bfnAu9XX9nwFny",
  "key11": "5pAM2LdHNaaHjoqUufUBX8a3K4KfBuigjd7i4Cea4rtyxXVWYECxDKiVLcY6LywPvzYQQJGZEgYbxiXNMF8ZnHXN",
  "key12": "4E7brCgH5R28ymsd9in1P7gKq94VHfGxBB2g224pY4wtUAZdDHvij7rSKAViGKYYZCHmu35JkoFZGsUuH4CLvtPj",
  "key13": "3dnEzdMpbnbuES1TWVYJiBs718TPpT7PT6uv8sdCwu97HVSJYLCEWbh6frPRPU8LJeTZkvpLfVXWAdhSDraMc3GJ",
  "key14": "u6WHV21GKdTmAEK6jBT1K7YS8cjrnbN3QQXsi7GfBqTEpB5ngSYggx114L7h4Gr4ha8UiYsLpjmmQ9A9nyAXpQv",
  "key15": "2yKjLW9FPXyabVfDpiBHdiZ2GENAap7FweWcFJSnKs44ZPGL6spr3W8nRAEMW6gjNzve7Lg46LdpkXs81msETs9R",
  "key16": "4cdZ7rWDp3SzKP3Psw8YdsU182rt399Xe2LKnjYr9ZngEkJk7PbeErBAppv2kL9mH2ez8BG5KusaqSefQhXVC9v6",
  "key17": "oAKqK7ZhgSr3Um1kbYFbYJ2v3VBUsJz36wNkvQxBsDkKL3DCNd2FnfPhtZEaGYnDqdYibyWEv3QSWSCaXqnEnDi",
  "key18": "2mQV6ijdzfJSAXeEjm3sWXVbm8QRcPJTrfJZyjK8USASdmkK3YY9EvaW8ii85qqkWLEmwVpC5pe3koFUWpPdcyvv",
  "key19": "49huMsG3cNhw8fMsSmyCWnAoVyQZ3kM8UozGmTG8XJxpTQHCX5Dtg9Mj9FTyqnrP5hs5kGUGxnMFcejvxbjeJZLv",
  "key20": "2vwccjXwsLiJV1SXTqaakBnTDtLn1yMGkBKS2PpMVZA194zv8jsZH6PsKmTUC8Dzt65rJDdohdH1zN4VEAGiMQNL",
  "key21": "NRuiWhsqWrMCPSYazHBhSF5gXety6sDNiiM8LCS8ZHqWa8QYbg7zh2WYY7zf2e9bD57ejEzkQywH7wPPf6PyL4B",
  "key22": "38efqTZUM8crDxzBGXCnUgyNLJMPG4BpxE2j1srwkCX8otGMMEBAaNjD62aQi3YHJr1U62HnNcjsQsVkjFw4YYVS",
  "key23": "3oK3zmFxYtNGvWsniheYNFDdPgQd7SouRP4cxowW8aPjbtmNcKrdHoW7am1uyCW4GnCN4tf9k3uZNpYPAtNxSpNY",
  "key24": "WqkN4zBEoYqVqK3sj5RHvsXF1GXFezRkXPArcKeAeN8KfZE5s2RgbbqWdF99zqEBBHfj5HhSbm2cytGhu6Ca73H",
  "key25": "2ZPJC2Ke7A2ebMa8aeJnG6gBKCec6XXRQakmBSUkis13dTe8nukNQuvkowkkxTwpWLMkzVbKR1MGcbqzbajQsJEV",
  "key26": "2A9sf9GoosgpPq6A6cyf5di2t2QywrLTxeAT2hnqyKEkRLvMFhV34TYzdPkXcHMx4yGgoYZUJh4aidTJMFDP7aVe",
  "key27": "4TGzBzbhVfFVaqvb2eMAKThYrtsrAY74sxxkfCJVQkhuqCApendGAh1NqciVP3MhagcEz581DPHX3mH4xUnNv1Wk",
  "key28": "5hJesUbcR5uz2sB5E6dz3Wmd5HDp93TDVSZU8Xw6wmXSrL68KJuumVBKr6DWDLFBT359pRgSToK3LuKpgc8Gm75D",
  "key29": "2UhyNkvQrQkZY2D388T5EECeYNS8oBTwsv13myFYKHK5Wq6wxMwBqEg91ycaX65MVdzxXKzpoDjdyKKpJJvRM9Zk",
  "key30": "5ZeWQ9nq1t9hJxSwuQ7Dh4SpwEFvSeERcGwm8t7iv5jm4esE1wUVZkztqts2tbWAJBXk7UwRTqV1nd4yYqC61LGn",
  "key31": "4TfNAdknNKb1Z1mUydmpJiaEQeiVFjDS9qMkrfcXfUo77abpsFKq5RWktBnde6JdQTmyzUcwNCVFCs5BEsTEDPKM",
  "key32": "2fCA7J2R2uQMaAQHXvcFAjn9bUSsMR18NiDqLeHJ3hMoWGXAXYrpaH83G7MqN4623Ewog9wx7LsRpSnjWymNW2xZ",
  "key33": "qgyAactVcgPZSTctNKKmfBGGKbznapp8vpGYizGVVryB7ehmu5NAC1eVAq9UUzxPiLRX38PxTf6cVH71ArDj8rC",
  "key34": "3a5UGWNpJaL2wL7iLDdHDwU4a7j5szjN38c3irAKbAW4jAijynJzXfjrHEUoBFM6TWssDG43sW8sT39rCK4Kef52",
  "key35": "2E5iXWtW7Y2YSe1gKHEHQjWNdNKyJxUgXQGs1snczyZkZufrwqyu7cbzRoJKbp2CSEfFaSausVEf9n5XFxJ7GLyr",
  "key36": "4vPQ4JytLtYrVzFyUMSb18SvwQcCMb9NGXLvBHYEDFa18j3nQWdTUzTgKpC7WGFtfD4fjmXJUrUb3RtxJHW4Mvcf",
  "key37": "3yg3N1yATXeCoevYprAUqsSrQVdmMHxmGsmmm178oWS4vMDbePaaN4GfmECTDpctcy1fBafBphcoqzjwA659JHKh",
  "key38": "4nZgSTHjTrtwRYLwDLhz82QmiyaBr7dgg1qhszZChWuBQGd3pjGVet18Wyqs2QFbvpC9YthqUmbQyLso6Xsg2cdN",
  "key39": "21b7rcsaJVBwYLYxgNuxNAP8z6Myax6LMQ9GT6aJkZACX2eEj6QcSmCfFusc57McERdViajNJJnRTLx112CSxCUu",
  "key40": "371yw18LG8DzanU7wBexeepKWuq4d9vJMx1TmPqVLwGdwZ6vq5drcb8KqBdSPuGwp2MPq77JwsNZw71AL9GwXxv",
  "key41": "57AjtGHQfSmJZnVHtEejVcPHBF9QnS9cxM1nTZsKKUUsCG9TgSkKGU8TuB4UKx5g2jiQaFjGVeAL5iUQ34HpzvAs",
  "key42": "338w7Z9c43Xu9cjRKWize82n2ha5xm8kXjcYZj2qLJN7GBVusZFpKCiMPhNDKTYvvbiLeL28p5MpzUR4fthJ23fH",
  "key43": "5xZGc8Tp4nv9FJEMc8dd7KgsJMF26uduEfQEf7dCWKVrqFXYeFuXaPsQP4DDw2wijR3MfzbdgU7KKRsWKDTJapW7",
  "key44": "jNMMedHHApdtocuiEYFGZpbPSM21uHNaCvV2b1wMrRJ5uQNXdUv6GmoJNZRV1cEMpz2xEvdSTBKkCbrdVgaGXED",
  "key45": "5zZWofEeiZ6xcRinr7tuXNazrfN6AZjuiyeWNVs1tpwc2oBTJvSLkXpmhx3oouy5DUMLunU5Gh7v7C7kBEcAjepq",
  "key46": "4MBfRkop1BMiqSvHbAQXWMAA2KDedpihSxK35zfXfBDJdgWFMQ8P8cAyik6opGGWYwrxq23ymuEzsXzy6xUXQmTv",
  "key47": "4Pv2QrsRD7ifaiXkPBn2ahVjSKSwsXN39o1RG7aMJrJDQoBnXU5nEyqDtomhQUejNLasrjAEpjHdDh9YZLUkgjTj",
  "key48": "2Ej6GcbKs1Ti4SQQ4CnvHtSQ6P7jiQsCfYxcENqqWpsXpGXJm4Uu4KekmPpMsG3JuGh6bwmX4Ni18Ly4NE6mBSd8"
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

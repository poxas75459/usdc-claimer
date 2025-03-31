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
    "4vGwiCFioC3wj5Gf6dXN5G37DgcmN4KBcvEQmwdRHtxUGB4svV3AM1VQcJrxNcVDduufFzkuv7kVt2HiFYd68hBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eB4hrYdyMAiNWctfmYoXVxuTDLCRH8n7ZtecaLYZAHHQvuXgdHCTy8xSotsCwXqEMLpHDxQ5rvQobxuLnPcFKG8",
  "key1": "2GVQYHVwcZQQyFKhqBJsBDn2ZHFJq95X5wLGYWyHcjMPFb2ADefU4dW1rf8Zy8LSYcgirs2MXHQvMzGwM7B7zEzC",
  "key2": "2YGWd8aPgjE4hrNNDHmPabWDT9S9BwnfHqdTDDQR9E2Nva2tYLDKvVKHWzrCM2s6o9VbrV9RhraZTysCoB6vZ3C",
  "key3": "48fYq6jq53eyLLeYs1Hw4H9R9k3zumXhJ5o1SHLASZkfEY8hmvi2C56SZ8cZm9TB9jVPH5c2oznsFmnNweuXJcHK",
  "key4": "3JWgzVLgs4TTWs1w415JemnsEV3PeQDjgNnKiTKpJiaa71AAncAjLf9D63YxAP32Ei4xAtb1uCx2xtVgrDShmvoL",
  "key5": "56tahDnj834MBzQkGSXVEBP51tNod3nyJnK3omCA3TtSJ1dbsQzCqco5pDCxue4ifEy6QD7Tb9DQTpby6gpe1JYB",
  "key6": "2YWLbWVjfex2DwihuQLuDrArbUFrp4ynKrRmV358gLqmxMbm5oaEhwvagf5jFhvB715beboST9ipvxuc9KewHWZr",
  "key7": "2mQ1p1nPi1kKJRDBnVBRPmGvPmzVR6AbL2PrEPJtfFbnzMhwTzxjtCFrkr2ELhPgSMauG2HzBVjR7Sp47htBK5Sy",
  "key8": "5NiMvngqLBs45gpg7s1j6oMat7Jppu1ht6J78Fpo6kaakeZbpDXJjbKKhJGLGticEhHgcMbpY7MG4yxK6ES95Zmr",
  "key9": "5X1tfKvqPHYobmstk8fX8MFjQuPtJScAQACbZXEpBgtAZqnknZ73tYh6qdA1TDFSk2qYr2JUeghbB2h4nDs3NDPy",
  "key10": "3D7KfgzDxbPSyG9o5REiJJDRTxn6Ax2muusXGJn9LaxkPbixD2yXKQTCP5vTFhw9KGTr7TTi3bAtMPQHzJigNARf",
  "key11": "5ATDs2iykk9RM33oJzhRLQoGFkVkTnwzfit2LmScvsgBPvimDZqwQSsp1rxAsqz3JuXhKXP9mx97EvdzGd9YvjdF",
  "key12": "4EJo3DwQg5GXpnMqXhmHx4RiBnkLat173imd6rSBb7SBqxh3VhWeRUza36GKUxmRoJhUSurxPaBWGqWPPE9WKaP",
  "key13": "2mux1v7kypLD2wWgPtynztzQmHs5b9NTN9RM1Uw1CwPpsyA6dXRyjiCEjtS4g5WsqkP7b3bEAZmy2mDhVYQqSezs",
  "key14": "5nBnfRoSEronUhi5Y2jdNkUnky22c6j7h1GAmTMCSyrV44UhwcL3tcpPZN7uXMYkGn1uoczpgs9sGoynYDqHZwMr",
  "key15": "3ECMYmunApGCRWZY55HRnvqZM64J87ugPUPGyWhW6DHtA7Jv4osdaoEPgbSVzvLiEebetyEbpXUKNRTmN3myfast",
  "key16": "3WTFrKbmGF8mUwiw9yjGLgdQ4Neg68DEeyQSrUX1CTUBpuCrHZAut1T9XVQxzvXfupPXxm1yD26iiac62SE6uux1",
  "key17": "4bsn9uZG5pLvhtM3kQAu8vwQFDpnAmveskDjg9xj7t6uXjBwQ9eM2jtDkUyvgpxAVFuF6gCnqhxmnRtTYs23nkrL",
  "key18": "2S7WoekiJZrTwdZVzsWyBiBX7Ai7dKn9WZjd2JAKAM42QPamgtuvdD437XvA1zaydLQqfkwynZyQWhywCVqCrzTw",
  "key19": "3KUBQMH1mdzHyhf3AAtDe7SU9K5hug67i44wEkWPgyk7LVtb3V9DoZkaESkg3ixNvbedZfmNuZE7ZNMzHoNExUHn",
  "key20": "5YbBBJdB18YXz33PhAS6TbNwRNQictATcdjQ1b1smL6myKUdM9a1sZNbUsTQ8adCFBHQFz31KmGTp79eXfg2VKuq",
  "key21": "4o6WxR1f172yeR8QNSKA4ZDV5eRDqbtmj4we1TzkSmxVKa6oJyF3EEtEv6di5j5bCZmsK9PoYTYXxosHctU95eYq",
  "key22": "7eXr4ASSBnSYPbsX6UcvZT3ojyXVSZiTwaMmuMiL7V22gDfytaZG6UPbZcRxWBh655mnQ9F9V4Rb7YYmqVpUfWx",
  "key23": "2HsDhpMFCuGwgJD9UmFzPeeemBs3VEoQZ3LnupVRsufwuxpBkX4ubh4TVKRh4oAwJxRt7g7TTcj67QayEjPryRoD",
  "key24": "e6CxapSCJmGPRxdH84RKeCn9cCS5csAg2bB11GqSzV6crdbvjjyncSESCkdq4ZNmTvqJXZ9QbThbBVaUygwLoTF",
  "key25": "3LAwQco3bm1QRSL2ociHG46rCLLW4RvkF3H2Ys5gGHPpaehzy5VrcwBJmFfNggxqVP4GvJDh31cWAtbNZXrG6nZK",
  "key26": "6mts1XNZAnNhnfdbjWXG7zu8H4a5Xfmn7S5sNeZb6awQNwAqXBAj7RXTArq6zCnmcmD5yyZyaZPi2VsQUES3nnF",
  "key27": "4tbNGW5zNrAdysiFcj9FJSHdGihjFagctuUKSsmnYUuiHzB4U8D3QErnKGBUw32uKTFC1xmK8q4F43D8zchze4kH",
  "key28": "4ky34Ayd3Vfx8UqmP8UedTSrbh4YUoHmtkohEJ2rQG71KNMZZY915UrKjPmETTkmyDfPMaeCAbaWExJKkdq4KuXL",
  "key29": "3rLXzEbXQDtcuWwNiRshiNyEtzQGU4S16Poj5eLBje3LgvxnWMoTUGFjkeL7twZxnmJx9ytUxk4n56i753fwd2Wm",
  "key30": "4psi9STAwKCYLzEAxQDo2SzHg8Ppms1R37z4PocapefkPzxRT1ShfR7DiTaAcddHe8RpN6twNCvGXgNZBXMJ9xgt",
  "key31": "4gkPacJTyv48ZuvP2fiTiBB3f67z8WLTxLQVHwjqKh2Hwc38f8xhguNywF7PrEdbZK9tH9Y5UnpWy95xZk44xBzJ",
  "key32": "5MVo1WV24m7jVvzsqJEsmLwHXKc36z1dtP9pNr7bUPPkqWR4tCM6TmQezaGjdNDeezMLFw5ki2ZCPM3BTdv7XhrQ",
  "key33": "oc8BxWV37pAoeb8aC2sNA4GSvqFPoi35iL6xMsWUrvDp8LqbMFfCyCxa5oeVoqziU8TGLLQs2ZpjfJHRwvnE2ph",
  "key34": "E6E9FuELSpWpBFq4eVAfZVqVMMDpRD6xEQjN16kdfgjqTvuJzqCaLAZXRX29VdsBT6vwtvq9Geszuc9kiSHpYAu",
  "key35": "3g7cWt9rUwZUt8VRM3Kskvbqajw6Qdv5ecFPeujxRwZq2YDepa9qeL6K9tCvyGauVcHRfbeNuYhsSsWM8tPUn9tW",
  "key36": "4q3XiPhwXDVqLCfRmNPd3SqP7Kud9ndHVzzToK1N3dLzd4FDEnYQbxGz4wDzyWL7BYRPoMvPisdzUL6XQQdQoax6",
  "key37": "2ZUvAHYwjMAxBij1kp4sDJBeedWPwjNbp1384buK1G4RGQYUnWhqgMYHn8NyYrs5qcAF4F513CHmvYArkcq1yJ4E",
  "key38": "3Can3EES5oxz2rV9BZuLXFHeQqJ1JR36rNmTPGSKvq2sjw3wksgG7xzGwEsMG3DpUgUuvW5s958FzeEPrthRbkBB",
  "key39": "2fNyYuw11B4bAosPMU4cxTLmeYj9FQFgt9dnLJVtQGphaw4ZbtaecsLFBBwHY7tLaj9YbLXSGB4zACic5e9SHXW2",
  "key40": "35LPCxVmG9t735BRQTX86AUZK9hBMSwJv9GkdfG9279X8GxE3P9A6uCDdZwuemPQ9J7n9oq6F5haXjA1NneJfz3a",
  "key41": "5b2Tqvdk2PhTA3Ds7iSGaYBzJK3qqB7iKpjwh9NYXBxpaWMb2k2tRYQ7svgFF8AcdvcFiVxoCqedyPXSMgUeZDQq",
  "key42": "5DJ4b1iG413rticVTAiogTW93rsEwTwvVHAK6Xx3G2ybbBPaL21aYzDzENWxe8M4qokfMei7C65qJGXgiWUwLukj",
  "key43": "4v7x7pbUxPqM95wna1M28tsoE2B5vDeeRu4pXtKHU5BDJH5nRjgaavUi56SU3cZPxbr2oYaavxFw69Sv2AgfFK3k",
  "key44": "3jY4YzHbdsvbodLMJaBSXDqeUrjGKbcGEvmfVFkKuzd7ytBwwZRqnFJPTerMumDEWmp3GnKLNqxRtc1qDdhmxjTq",
  "key45": "45abPH4EjRvj1PwQmVXRByc9xoncmqRGXg4wqonhcHrBgArdLNeKi16cdHcDWwGGsCo16XG2kFaYX4nzHU9vk8k9",
  "key46": "2iVUYjrd6VYbB68rqctG4NqrKSNimxSmEvwB72gCVogMBtBDfE57ZRC8rvbMeBwZ857RAjzCd1eSHKmCeNh53ydA",
  "key47": "3tQ4hgestwPUeEZ27X3c8aJCJtRJ26tNKm8FHVsQgQamH96NXUti8ucJNAK1cQb23kBMvNfYK2HfthFE3C1mTjgk"
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

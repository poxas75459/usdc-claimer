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
    "4ys4ip2F4FKz2cMFpPtb7a8vt8dUY9AgRB15uX8ptB37F8H4X5MmABwmSBk8EM29e92Dood1fA8HvZ2eYyUhHkDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BfmoXFZTp8GDyjGq8AurevkY6znZ1u3TTD7g6TRSrZLpK8sqsL6kfpZGHqUCCD5hSmn1MiZdMz9LLUyt3sbyBUT",
  "key1": "5iEX7pDTPaFhqVTUFgDRqMPFHA5t3pirkBQEvJF8esQDADKutGTxp2KoM5yMWwTqbGRjbS5fmoVjVifiCjtfbn8S",
  "key2": "2REJcGSvtZUERfcqEdoe6SucG8Je4AgcKFX4VhQybjHUfpFTqpqmjhjzsA6AzyVkQ8fEPfcAKpE6af5jTRdWgsWt",
  "key3": "4VBLa1YLXYv7teAkMAm3QNpkU5bdRT3MNKrJCyzp5FHMLNzTQxXquFkTzZNV7WVXbwRkghvZdLNSroLko6fi7HZZ",
  "key4": "4WRc6NYQ7sScXbuntF52HEDT6aNL85eZaJCpMxwWDuUVbjgpGz2RQKNbd5fMZu1xuy4dt67LmV1GqepUnUQPbmDB",
  "key5": "3M5UEmw9X6DU5bQNcMErCF4dNyLU4DdDvoBnK58nvsMi9eBpKMKFSU4SpfbPJ5cJL4boQzJe3QZYtZAhsu5ptU2w",
  "key6": "4iV4pGzbXuAReXzFQwD2DuU2i4i4sVugiFMnsbN4xj6TEeDyKGQb3acYyTRw9hoxVV9xSGYobnCZmxneUyiwxrkG",
  "key7": "5H1efKPo7aTjQphDEpLwU7JdMRUuD2cCcKpnJKd2pwiREdK3vpaNrDfikotYvFn94W6FWGUoMhFonyHaJ8ec43Z5",
  "key8": "2ucAyghHsBX43tBqmVWqBtJDXb6ChgmVX5KNGFCF42ZddFzcgF6J2HiQ2mzWSLa4fabHiMRyMBPjyGVUriRJN49E",
  "key9": "4gwpxM9rHfvJNTDGjZvAETh4RWAEX9sgNBsYtdcBR9MMTnJYe2SYtJipHafpHQkLpdJQRVW6iqfSWM1og3dWSqJ8",
  "key10": "4vvqQWMrpd2csRkpP5prTr7E6iD7GBNW7Voj7VyZ7ouKGkcptJ1P3Dxn3BmHQnMLmKaM7pFm6Q53WHmGHSX3J7Mk",
  "key11": "4FVZxPfqwdBxLB5rstMmxV32fK6cmUidMzzkRT6qx2pnpsX7NkFFhuHzKveK76qgmSExKKosbnjT5Qqu1S4EGoJ2",
  "key12": "5XtXRDGFPTWqcfwSia3TcqRirmZiAtxqtH2FYg6jDRDMVPPLRbN5SeDWRrK3fgUB2xbqZs9F7wnvoUdhtRoLqxm6",
  "key13": "5C8upe8ErKJpaSjdTiREU8zsyvBmrVrVrHEYvJ7Qd4G1SjNApFRcXkoig1EmHkBcjFwLNSmckjEJZoEwCFc39e4f",
  "key14": "3eo7aECL7NsajfhgfBCyH9NQXB2SqGT76gDMifX2bVbYx85bKXMzTe5ccseH9eZGnfqzoMupggbEytE7RzKLqXAS",
  "key15": "2TVqWnXA1PVWkLpDSUPeRdLHFGNPXKah2JWmc8KZq5DEgnk7RbHja4MuNsMh8hZ7SZX46YuRZFC7vmGhQiDRHUua",
  "key16": "3B2mz2j5hVpisLg6AeKozee1vUepiDiTQE4WHnBVnQQ3uiQLLTgEg1BLhXrES6XikqDZhSCGNnMXzQPQ8qHkhHc",
  "key17": "3FQcV6EMT3eyEHNFVdU26nZNCvcSLP6AcQqSpFbf3kfhjiMx1PRqsSwpSgqJZ6bTX5XSWMdJNn8PEcZhQ3QieF75",
  "key18": "39ys5vCJsmN6Dp8uHCm7G71XnFQF72NYLR9NEhQHkQxeNMHhB48pFGygu9UCbQXivMzU9zLvuyMZdtxEGqQjsyhr",
  "key19": "4GSzihvbR4W8BYGYucmYb1ZahcPHez3d99o7d5FPXd4B7aaMwbXkS1WyhVYJW85CaZefmXf78VEFywYy2b6nVrbc",
  "key20": "3hJJFE2gj3DKd9hpjusYyRVRakHPzposbLg3cDpvY2Vw2XbwbMZMhjQqXtrvytfeu6DY7B9GPVoL6CV2HK1dL9A",
  "key21": "2BrtTZLdw6S44imTjHjejy5MErvYXPYH71WbwogbKK9nM7wsYZxJsa3dpp6VircEuVW8BNuHBTGJzbMPHdykFYA4",
  "key22": "5By56XhMLHfYv8ijnXzYiCPPdjXAcizGf9jDbL5myMGYybos25FQutVJY6exsWDmrZp1XRwmbjQuG3FLVzqyy5kC",
  "key23": "4FXJBwUADhNSv7xn6PmDBaXEsDK79WNM8dGNxxGaU53UH7fGFdT5gYQQPdCguh5NYS5v5eUiwZKv7J68VwV85Zjf",
  "key24": "5yeigXQn28MF54qsyzgDerHFbaN3sEac9ARM32Eit7DMHyFx5bKAz15qficuWHKTsJ3PrgPZAorLE58sPoXKAbF7",
  "key25": "AWRs2zDkw31mNppxZxfJLaVWecsW8GUpEkM2zTs7vATkeKN4bLDib41g3ZbueENcsaZ5E4VqCzx8T7FbXywKfTz",
  "key26": "sFsTuqpH2Zg1nUCSKqwNx89vU1GNvqBYHjaAK1yaCbsf7DnGQircPoNoFsmggtweDeyQswBcwozFofELxG43Zqe",
  "key27": "5UJQ4EEAKWZ8gH1C8THR89YNQfuSDJ9u4nPHwyBDjHQ6rvzotQAvcX5gPy411gErSQokLkFaYnYVPz8h8u2iEm9j",
  "key28": "4M1uCcQNmvTZH4GVd7fbEq5vumT9E9U9rQrftXq8dPRFFL7MEkksx3WJivLuUVrsY7ADjWzbqUASy1TT4bgoNxUa",
  "key29": "5BGZLVmF8Edk2giaPLHyoo4CZXrxn1gNGYM8d4HKrdABuVYfncwnpeU9q3bDmbZFBZaqdXHcsqiqVZohKAbZBUf8",
  "key30": "4aiGNCsqGdB5axsfYigK3p62mS8GSbZo2TDWNr2cpxwypmgu9oeSKxbznwRuSFQ6NHvXiBzVHhhmspqpvHz5yU6t",
  "key31": "2gn66hKp9UYczMfovH3SYjaSL4n4EqVQ7W2ruWWFVt7kbeA3dQLXuDb9RwxUBSiWXSZeytnkstazWe4U5uTRJ8Tc",
  "key32": "5w6z6EBwqihrNpbRNoep3KyuMMquUvuyuQW2uXZAmENGUFyamSikm3PHXWGZUYXn2b1grskst2hSbjQbGrY14FmS",
  "key33": "2rGTLV1hChsvPcEXpnVqf6cWZZ7Uo6d6wrLj1pEGRxHenonJT1BBUSXNKs3ncuoiWreAaYjhzbPFr39qWBZEJ9GT",
  "key34": "46vQ9u13cJik2YaRUTN6X5T5jvfiZktPXb8TfbpKj3hTR5ii3saHUGYT6CN12HRttvQtrahQw3AULg92C3iNDmZh",
  "key35": "3dV819SFb3c1TbtbA3Y4rBJY7mVK5eTAh5RXsMFCvh6xAXxa587Rzas6Fefpt6FrzndKCpZkTKjztD7Epi2zrPnf",
  "key36": "3RmcR3s7ZfN849bakDYwda8w2Sv83Sms9uVr4eNn6T4tyM7C7xqjVC7EWBjUCvRDHYmKgxKok3MgAcPD8YWwKnPV",
  "key37": "5Wu8YMGfp86XQAgUtfDRTdaYrCaE3FseqJoJ8g4CbtMAJnke5JXThJekifDTTqBbQ8VdoKnxL7D7KTNtf2uU6x36",
  "key38": "3UR9uVSrR6ZwZYj7d2TFoaHkdhk692cmvQbVcqxCqV794AqdJMA1tVbGbRT6f36fSucgVb1pXoQXT56Nf3xrrR9J",
  "key39": "636kvV1HTFD4C1QiDcGacQZPSKgYxavTfR4TQz5ypDidpC1fyW96rGcPwmRtdmcNxujCueMRV7CvJsvgGC2b1CyV",
  "key40": "53EhkLe6vcgqGGeT13vYgD4NCNwWYgpsVgbNgCQqCEH3MJmi6nqUckfAtnv1wVk48oVMfFXvbbvUynkB74EDnWok",
  "key41": "5w9eNNZtAkgGAA3AYFf3W4EJ3u7BZtuk2W7MadLnYvsrxWZesVcv2rsLcoCibrjEXNhhfGJ3PWCFbL2mtUtBQpsY",
  "key42": "4oEZv2esaJ9ckw9DhTg9XtSswzdYBKZ7kpyGiJanromeh3R9pNV1nBcRhSeRSpWJj7SKw37SHfAnnLxZWd5uCc1F",
  "key43": "4f2pcGScwBirnKM6s8W2Beo552WKf5yHAmJZwSjm4z7Z9DAehnfyGuc2BCXJ7RmBDeEL7WEhqKx7ivunf8CB2Q4E",
  "key44": "4dZFjLyNTpPe8Q3TT7taqEA1symjwekDvQiu1RsuWYENraENuomvKAqs7xrzyJtwxZR8nhx6a33KFE1LdiAyUrvC",
  "key45": "5X45R5MuYB8erEtz13j47oz2Hs7CEPMcqxw6ycoZtDS4qceYSLJzbcGUyrEn2SqEnK3Ck6Ab91piDLXgw13acBi5",
  "key46": "36S3VdY9NLpnciLWzSaMXZfS5v6gPPmJMzLYYtfusFNSSMMReQEKD2rUXgxAtfRS72KjYbFRavK8gvGR5CEQjtXD",
  "key47": "4Z85YwTFBXPipzhnzvBBgjrGPesB2zWoGb5yRZxde4LmBtuzVP2hqTVkg16eVCPKQWe7KoEkLfJ3EgdqeTkaiXFo",
  "key48": "2CaXGKnDQmXTphnrHiadjKwfoyBkDj4u4VeHjNecFgVkdjXMMYjkY8Sw15zuFgo2KXYKgfG7ehiTDqVNi4DGqMG5",
  "key49": "AjMtuf7eDbYRUH46gddPLcdHPRtXjLyvNyCJCcUkSBCoX2d3JMtJyPN6yHTwJKsKBYiA6GveYFb8wPfyfn8LPra"
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

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
    "5GsLN1xgZrNieDW4fsh73nwozz5L8j5WV2xzoLD7kAkPsFp8Sb6eh6YwMLVrTNHiDgJ6D3yFZLy12SJAzXFbCG3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMvs1B9QUekEq7N5ALMUFwKTpQ94UqdQhAzLqFxUk75XofpHw4kYwaVZ4HpXQy7PPXPm4BTrKFWngSbqwasq4eo",
  "key1": "5YjTiACvxsrewrqgyph8rpKR1gQ3nEySKi7rhWzXzjvoodtp2NsDuwCApqTnmxmmttXjaDbwtWsikbE2ZzFQkPYw",
  "key2": "5HRNzrQQpyT8wnuAN8LFHngjaVBDXpdHvXa2G9v1rSjMxskohcwawFWJuwcVnUufzp1NqxuEs96MSBZLmqkYqRr8",
  "key3": "5asxZrGMkHn1Lr9eVZf9tRk6EYH6WNFkik1GeMNkJVtcYQAmKYekr5SkZzKHPchyZH2TRAhYYU94ktsxDkTEs4vc",
  "key4": "zRwAq4wYBZJXapxm6bLVsD7sAeD3ATLenUNQMUSq6pKWByTUkHYAxt74s59u4DGg23xrFuAsV1NGMEAy1kmvdDZ",
  "key5": "3JTE698tqDeTvsfp6gB8HL7cwdwo5T7KQjXW5mTUvgyTUF21S8eiybmLTCLwKpcpCVXzreBUVbxShXYEdcbHvxbq",
  "key6": "4EjeJV4NUhSqy6UQBGWiomv6zT5rDNmEVRqmLvdWXayr3ARb6DJxGbHqEoYVKDJP9wnnqQ6wE9QbmGCRaWGK7G4Q",
  "key7": "3Qy44in5mihZxV1aG3bxbo1U6jHVSpvFjHM1ATpfoGTJso6amdYiF2nauXpGz93nyj8rtLq6d7gk2pd8CRhaS4Cs",
  "key8": "ipv6G6tXxDv2EUX5cSF9TeoprRswiuijZDwUFWeanueeqnSFnwPmHGdusxGP3Mzy4GwZGDMdUi3cj6EmzKpmUzn",
  "key9": "5rMg4RfakdHXzRvKkGV1HCZ8g4yvu4VC3J3Cm5SpRGM37cTJoDqWqfMC4xtDjMhnW28vGfMxgaW7aqFMZpK2QAB4",
  "key10": "5Muhm29cDxh8DQUBuNwCfpDfZdjsNY3473GzdAJy7xS65EupFLtqZzBFFihXCYCrJyKsYXquzQwHe8K1YXwuKZ8D",
  "key11": "2Z5BkKaL6f9ZjxDiLGeaKCAgpkK6CEoDcrCcr87vpoLnMAgUzLUa4ycD9bxyr8yLiYxpxEqGf1dwDuntR1CFjt5x",
  "key12": "73VC1Wte1t9sttZRJuYHru6utdntHzJ8uqZKmVPbYx5gY84N5BFXPWeoyVGBwoRkDyBbXQvbVTtrBgnC4gL1W6t",
  "key13": "5H95tNBhZdZcHHf6P67T5SFyer8tkxHHZGjiSegnv71sgmqnhi2NNS5QKuLp7sw2o87b5AB4cfPDPQSHnUd3j2jf",
  "key14": "MF23Ac95morN75qBFt2dbDmii7bqLMG1Ch8g4ejKpyHnextu5o9kMCneAg9ZywhWrrnAsz8hsC7AY6pzzJEvtsn",
  "key15": "5RFoTEaia1a3Lm5j13T3Zm4Nn4V9sSNNGLiMDJHN8QXrchyFeajLZT4R9jvMcifuJrYgVRdAR2wP2YDepFQdrMmK",
  "key16": "3ApaDKby5sxAyhDsVf2s2yWDbiiQoTVoLT6pSb5JgrZchj7M7QDuo3ouRgEwsddevbcM94wbyPCzPWdTYN2693eH",
  "key17": "3aeMgrrf4r6j8zHCRnJkLXVuRZASwfrrhZxSkX5kNYzv7SQZuRJED3eauo1wXWjqReepnqdeQR92SgCvdi5Bgdk3",
  "key18": "3jDaWuxgDgmAWhJmunaPnbmftkegyCfPCB13kuMdkcdF1PQDJzmjhGTpVJ21SLuwHYPvDMJqbQKpagbNCVWDtWaJ",
  "key19": "43u2TukPdJoYkhGMAvjZkPYvZSgnc2tvi3nCg5HsnAmgEYeGZCsnbECbMXgwopDimbZpt29CVkPkaJXXjEG3PfRw",
  "key20": "Ej75ceYXmKekzzr3r5rM2SedU8ADXAzS1P1gr9Z6KEiZpc21SvLh8mCyD2Yj4fGM3XQCt4Z8hcwkqbhAkBEpyWz",
  "key21": "47pLo2hw2mSeohy932ZKUTvz2tkPsySXqFRScUCwg5mtA4ExRCGng1PJf8VacRyffxGUAYJdFoREwmFawMH48KER",
  "key22": "frL5D9EyWsxbdfT1KGRsKy21aPSL7YMQ2nhrgn48sfWBqv3icPsHgtu5BUT1zY1srx8mYYDEGeJe9J6bBjg1jh6",
  "key23": "675Urv8G5QWG32pRjass6GpN5kECb4wtQfg2dkJGKJasoYbBK7zsNzzEDLDtBikpVTiQes9TQTpbuyqMxtqKrBSB",
  "key24": "25uCgVS71FJfCxTZqQYpAbdvfZeqqnNmMEfr3RTVaBbjrx9KWRZ3LMGPJ6MoqjgaoZseKFwtbCMWmvVjWYmmVCBW",
  "key25": "2q38sNC4hFhkjseM38bNL1ZDq881thAUoaP2t9rTTifzMDaGpzD45SMg3xXf7ramwTejFpssSSdCPpHfKDEZ2g7n",
  "key26": "582JhW65riKhZGh2jQCQbhMYWPv9iFdJjABFKb9suwZSX3H19TpdUsD9Vam6S3KDKWuVnyontrweGvWYshWCCEBY",
  "key27": "L8zyyqtRE4gEPrFsk3VLXjkBiAirNdJtt2r1a2rJXVSVNygozQb94FqHri5WEpw3Wq5WNoN5yJD3CeVuVN2cRqR",
  "key28": "2sr96Ze76rmSYERk3CwHpBqxwELdAjySPQq9buGEe6qgguVnacaqYFtG5PnEws7zBS2x7CVKBwd61YmzPR9wZmPn",
  "key29": "5HUgfDierfhvVMzEPsoNPp4fYabTZgsHHmf1apXU5ZdGwFeBAyHVzrnDUXf8v2GoET6A6pYNGfCBjV8kT68aupAk",
  "key30": "3DtpZ7HcKqePDE8UFu7MGmZDEvax1v2RktdyX3645znjGJgyFnF1ZPRpFSwW2AbfMezGiE7id6vk3mxo3dXDGQV7",
  "key31": "4GTK8QSVcF2pfafKqHmoBLM6AH9agB1Yf2h3WkhJHZrVYTa8jZmtK4nfuxgvxTaixZ1XRQ9hs64bRgdgvqKn1C9M",
  "key32": "3iU1YCBDJ5sm44idn6j4aViyVW64GXm8mtp8Wi9ePTmXjZDtejDG2UELuJqB9b4tMu6xYf9QVhQRhcb2ww4YyMef",
  "key33": "57dinM5o5gkR98g1SzB5NXMwutefvxdFVgubRriBw7kvYhdRYcWvxUazibFZTtUxy6g4yFwN1RcBxfPs6hwGUwwy",
  "key34": "3zqa4p6RsSLPwQ9JzcgBsFC5mndZHEwASv4W6JbAiddFfhywNYXKEJMNWnTWXi1j8yjmCW9gBR4Zjr8USEj38Evd",
  "key35": "3C4KuHCvAariu4KqctPbVcnZjhj3cnqD8rtqt65VLk4Ki2HXDU3jP6zv3Z6DFbdWTiVPCVgvYqp2mRJoXVrrmt78",
  "key36": "23PTjhk9jcHB9pbTHEr4Y1etjpwWeu2JqpsJSsBn5Lm6XJerCZnLZvdpRYvs367a4iv2PabxJYyW1iMzTfAhtFCB",
  "key37": "648SDrteUwdDLFWKkpQGLUwmwzaowEnGk4k8Sey3s6Pp1PZGrgoAvy2rjTSiy3ZNyaJCigfNjo9Hn9GXECicZSkt",
  "key38": "37ZwKKUSDJ2M1jVifuHLskwdmRGm5PWfLntbWvjoaFvKmyUoaXY6nircMpaGuDVagNxTq63UMEXgrKZ6jbxDQbfQ",
  "key39": "2P8xZYBYxe3SDNrbeHL9856K4FoSCn1C6mGCeMfSag13VBtn7mLJbw7ae3m7b7ecypqaVHUU8pwCG55gvQHo4ekZ",
  "key40": "3CNHVKxyRR8T4kaEEsdfFksGegocKDZ9J6JrgMkNpDzppPQBuaj4XJTBQEf8VmtXYrPoVU8LbdJy4FzoHS9qBbuV",
  "key41": "2THc297A5BvzxGY6c8qqpqdG126u3Yx8K7uNvkB4ozMJpvYVockvjib4FpsTku7AcroAxS6XB6CaJZNQKtLXF4KM",
  "key42": "3zuKsMugUjEqnFKtPvjK5g2d4yA2LXLeEGAXNATzNiZwJKEjDeV6pcEQ9YV9BtDvYgg78brhM9ZUFuJHfwEExqz5",
  "key43": "3nixfsDxvM4Kjb3j9s2XWajMTMuZbghtxi8mGUZ9YpS8mBK2XAi6y7XyFj5K8xi8c5NzabJ3bomKeRPKF6AhZ898",
  "key44": "3cSaE2JY5heuEiw3xWHcDG711JMCW61f3zpux7XdbL4pUUx9J7THxZ3agwdFR96aN492pQdmGRqSV7KnkJWjjoPk",
  "key45": "3Sc4NV3XP9xAskc66cyGt7Wyn5kK7EvHjSKpXtGbD6L78c8LkZRgNEu7X8RdeFaJXJuYH94CB6m7yy4qMtXYjquZ"
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

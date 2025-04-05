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
    "2BrDMy539CUEocteKBqcRgSfqywqmCTMEhaQHHovzaXikzps6abeeJaP1DDS9NiMA7NRS8L9PPdDfAvS3GM4Eock"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mpt3B67fVxSyzj1csPtbj2HWKq4axGLmuWdJGFMN6DVAQ3AyTYCWdoVD55qXwVyMHiFzmAmcqPGtunvB1ynh5o6",
  "key1": "2v8vSQZffy4vfnNAStSJnjJZEHDrs4mazmKT5dHB5o3ssCVD1nu6Z5ZeMHzRxJusBh4gU4F5ffZqxy8YgkS5xGVt",
  "key2": "38wpuCUvjAbB2ud4iPrBEEuuShuBAu1e8nnf1Wm4xCJtGrqJyvphZ4s2qHCj75D2YSALz8CUHBJNSFk3U4j4J1xF",
  "key3": "4pXjT6mbFWcxF3LKJdfyTiuVaDBYApHfxVdqQ6joS2fCqoouSvPu8qfT3oPLwdmq8AMLUKo4xzwdrDFtJzgQGQBa",
  "key4": "2btKLfDMq9jNbY1MvUHcczSpnqdsnaMDDYUt26uuX7v4xJJtdxnCWW6LrDTWP3oCMN134aANi5ZfDYXFSiCKDgns",
  "key5": "2opgYY5S5BU4N4NMYdYTtPYXrGHApGUKF442DBkydoWGJvkFjsryfzYZ9ir5vAvzqeNpGXuZR24Xyyx4GxuJTdBr",
  "key6": "3bd4mLh1AAe47T7N6tnq242nP1kkWxXCuwcuRYLsZyqCSa2MJZ7fSxKnTMkYWdM6Wb9McW5N1fKjJAXkPWNfiym2",
  "key7": "2q8tDFTJdnMYcfiBWmLH5mv85rsuamUPBTwj1Vr22Hzi7EdFmBHpnq11ECqmkDm7KBMVCbwgC18XfdtGAw8qz5ma",
  "key8": "2v9FG8WtZdgkKNYEjD7gyjX7H3b7quzeNvvSNsEr25GdKE1XGzj3d8R5ohhKTjVFkcTX41vFME83z8tvT9wK32GQ",
  "key9": "4C5ro9QakMq4eUHGxrS5kWpbAKx4sy97msWG5d6FCrVJ7F4mrtmdz2au2i9DFELpiPMQ6qjFdZMUyS9gaC1MovQS",
  "key10": "3rWzcRo7AKtBbtEGFqGEcvDEjeWxruwHJ4cyqNNxXPEpE8qRYfUAC5raAEUNJmrSnnFumYotbpZVgGmFoRVwqDpz",
  "key11": "z8CkGKrfqrBgiHeLVd4GcCQpoxZgtpXok2q9h4kQqdPSukbdTz8PwGRGobb24dn3PZNLAYsup9X8GgCuooXJGFg",
  "key12": "2dzECiqej9SkyeJsVpipc2Y4tZiEb9Tr6GkN1pFKjPJmFNxgkEepudRSf4EhaddcGC8pSePVytxMeybHgvzXoDHB",
  "key13": "3zwwjC5piZLVYj9rAPY1PV6WcxqRpoocSG3e1NvfosXqrJcBnQRmBoV8QRi1EZhSSxCA8nDdm6zJjzTYsHiHkwtN",
  "key14": "2sGHETwwZeee2wwfYfcERzetNBPDXB99eCAEuekpXN36dzNv4g1osTrrVFAAtxfx7TRQi9DiZYzc44yARjw3RGrY",
  "key15": "7BGsrFNup65NPmBHQ6dPSC1M8jVhcGUenSXfqQXnZXQVrGtckQYEMtTkKcJViCkGgPtXiarmtBHEwrbih21go4Q",
  "key16": "5AjmuDs4vkpXdC9jiYY3jYhhvXCVHZuAzHUoHtZJE76MqNCq6BKeBM9fQomdB9V6qD8oWizQ59gWBQomYjqiQRHn",
  "key17": "5gMKKzbSHVTH4XSns6CvFH6nyyEmAe3FAFtS3d1oYByfrcQTAPsk6PRJK6JF3KJEB78MQfEWzGaXwJcFZpUCCRTA",
  "key18": "F3Mf6oURLjSaE3AF3rfhRCH9Hdv2EHGzbyX5BEgx4RznRDeLyCUvPHdMCy83pyTE2Wxk9GfHYTPpr8yYLogoidJ",
  "key19": "2iXu4WGCTWYRhcMSqoB3E7GtaWzWQ5HQvgxcnA4uAKufseZmD718X6bZX5t6nfUW5pbLa9Yx5adhLmMHzzBJ9tLd",
  "key20": "4PzThPRnv8QCWBZMnkDpsMRHTrCc9DhvReUvPRFYBcQF6TCRujD8SLBMw1wZnKLzZ64E4Q4zQHLeyo8fRbpwriRa",
  "key21": "4DPfMuHqBKRueepu5kvSbDTeMAFby832gKv3j8YqtQtJaDzzi441wiEpYmHFWcMnFPfgjHgNC1yAA4KppuNZ8TBn",
  "key22": "48hRDfEDEKC52SiZz6Xo2Mbiy2vhm63GRs7ZET5dRgPrU5B2vLu4ZQuVee2oYSxJ4faYvmp7duHj1ft5q6xfbLdq",
  "key23": "4xWtPiwCL29WHCRNqfZgnMw2wg1TpWjStV5b6AtMagrSyjxR5bzRq47saSvqanY3N79wrsTqtDVKxohpRXEkBQV7",
  "key24": "S1nb2AiRTGE8pX6Stg9PVHnA4wTFefKDy4sjqgRKC6U72hfbcXK1HnEjCUMnvMQHZEwjy9j2N4cargydNFKJDy3",
  "key25": "x9TAJFSZatsk1BBaztw4pHL6ULRph2XHHC3JmWYyPYjoxH4YpKomDZdNwFGQdwkX1zLoqiyyn5uYgD2RYbHrmts",
  "key26": "5JV6h7iXxSi78usFxNx8kPPvutqNGaQLjuMnF2gCPfftcCYv1CX72j7pti2yBn4F4EeBVYWFotKjdcKFZRhWru3R",
  "key27": "3L1chTPS95VwcKD6DfdwbX7dm1Kq8Yn5phN87GzRu6f7AaUMyA4PtfoyEcx16dGh2Mfndf8968Hd1MiKfrAX36WS",
  "key28": "zPA3B6JmttonTnDxc5DFg73PRXKujHfX7p54fYiErDSdEHa5kNHYuSvNxfjuExQSDCBT6qSXy2W5rzbLbTr2BFb",
  "key29": "2BRbjexGp53h4LoHC3SuEq5MAVHPUNFVZ7PsR2BYVR4eSbv9ZWUyCQjtRk1gnBiFS1Mivh7A8Y5bGPH1sGYuUzVS",
  "key30": "2uxMkywiqhjhh4DgzT7T8koyPXpbx8Z18WGrmqmLHR94PUoReuxZBQ4sEWSgpiyS8FmqbETtpHJUL7R35aPP2Lf5",
  "key31": "zGuEjesSNdLXPmnWgbUwGYoGtxgkvg3is7a1gNQufHcoEi6XFdVdfnukd1fqA7xmcHxYET9T1e5943w73RSAFUX",
  "key32": "3DXPnfnipM8q5moi4WYFNrRZxbWfnMQmSHwFvD671huVTNrMu2QLLcM94XRWpLmhHqt1EoofwDCtxdQwFiZAgpKw",
  "key33": "5Y5iMfpZhu5tYR3Mpv3hpZQKs35pejYWWQEd7LPm38m42zrW32SPmCV4h6VWvzNhWMh6uiFjJjTnXuDnSRr5XURK",
  "key34": "2D8cCywr9g3CEPJjxJTT6BKnu4THRujsMC1svYD6aaknCjDLyqjQzyHADf3o7fGL5SMWPKfr9tp2SoNpA4QFdc5m",
  "key35": "5V7kbzwETxnp6wsnMxsiMPA9iuA8Umrk6d1C8pjmdf6wDUy4xxvgULkmirYmQwsdQ8g7dpFnttkRpZNnPiUd49so",
  "key36": "5CvWtXSYw9XDVkwSgJofjxWaqu4Azr4k4x9BwnSQFt91kVQZJuQUo9XSN1hEx34AacNYoNZwRQaqmZ8u9CA6DVMo",
  "key37": "QwSXQRzNq79ME44G4qv7tDwWitq6KWnagG83x7r2WPGRuJJMBqqgUfuEUt8CFeJxFu4NgQXM14FjseWB1TKeFf5"
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

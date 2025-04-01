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
    "59HdjTjEqYUF9oPmm6xzhpa8nedj3BNravtGXYcY9JJYmXQHLy9MWi1HTmFrLGzW3xtAZjEr4okhawgiW4K8veU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mtNR2SMJNFUkSGRYaGoPJJgUKZJP82oz5uDU81z1tg9uBbBbbW8UPFk1w8RYw6uv3MEPEumwL5oniRts4Xb8UsU",
  "key1": "H9HjwzauLrVeeD3RH84aSjK2qMPgmKocHJrpZVsk492KnMrjFQLosQCsCpjniCC3K4Eiociyc8nRwCgtQ212aX1",
  "key2": "3UwgV2jomQfrx82Cej3TrFDzeEKwwuEQWdB7iWwbT8K1jp8UrGTAErAHMqhLdGAdQSVLHLoHcQt7yanj5UdeMdt7",
  "key3": "4m3Gh4fCf7eCqF4cfpzFCRP9fPRseaiUPNtf4BKTNyMRzaz4tioZBebwDkbzpV3zDjBsSW7SE5gPUHGUFFBbptNv",
  "key4": "2nc8BDuVu74AxgmjBd1Tr6brPRGANtudEFwjBcbBRqUJqLYkqL8qgbxSUZP946hF1NSzo4QaBECdkJZ4MY27bt2s",
  "key5": "2HW6uCEDUqZwMLRYYZ1qh8DBqd28TFmib3eCCh4cd6cCxaZDqgzongjg3XiMtQjBaUSxT81JSrGcNYzwhBCyarz9",
  "key6": "62PHoVDbRFHywjPQRSXg7itpTGzqvmJmvtvw2sdxqHxhT4FMiiXUa8fsw5xA26uqge35rK8qWb5ij4rHFEphQ3AB",
  "key7": "5LU54xdBadiEknY1BCway7TvQ1MNYYH4Z4HDfyV4JJFKppCWn5KyJTdeyfF6GupAjjapiK4wwJS5mH6Ep8uFxbwZ",
  "key8": "44yJ4zFgMAjGmi7UEQ1EMqdiKZPhWJ8fTLkeUeWhpP29EoaXMrTqJtsXC9Ahd78eF5auMykLUU18ejo4m2UK4M7M",
  "key9": "2jCEoSj1tJaz2JCUbENrPXW9QjFBQw6dmL4q1Z3PzwQs9piZqusyWmdZkaHzjWUhtbcxuZkyLRarDjL7za8cVqvs",
  "key10": "4bWT1oP9pEwKiyon5naKPajADgRe17QEZTw9NS49BciqpMii4Hq3pxBx58ghptABoNrvnSbjRfhByGxnnP8jphtd",
  "key11": "5hivdefc6ANnLhykoy1T4XexMutBnNgk3eqZgDb13D1t6qZUucfUDPZjAmLfYXPzQYj5fGXcjpytsQW5SiucJ7Py",
  "key12": "5cXTdSiMEARC1YxtJAKhdNMkwXiPWERFtNxc14mLg5kgT7BhoGW6mR5GBWnJwkCfZCDJk3y3ZMb5ifgb4Su5asZH",
  "key13": "P2UYsLrfwqZp1mbKDwJ4uQgyhVEbVEgd3s4pcA3Gzar1rRrooPmACuymDbgNvvzp3swrheT97xxm3hE2isTGBvU",
  "key14": "349fgaT3DMg6Z3osB3B5WDZBT9n5SW2mxFf45i29E9bspaPmaVRqN7qqZjSUQeQsqnynnp1vH9kK2e4MYsaDjLmu",
  "key15": "5VhF9cbag9PZomGbKZ5Kgbfn3TnLay8XyqTD9HJmdw4hCCrbyNRaP98fLwcyvqR3p41k7xk5PKocripnAW51Qikq",
  "key16": "GsXef7LMzzx6YvH45nZoAtdkqT9xzXZo7pXxtnsGp8WPmKcH2D6xGYmw4bdE6Ze2vvpdNzBdCdtKg77wbfEuZsK",
  "key17": "2voLPEgBR7QuZuPTJN5P86Wh5g1bEyxa1ECgj22KAkUTVeqAukmY11qaw6CoPbYNo2vicPWVGQRm85A1DPpa1RqW",
  "key18": "4fr25MGdo2hZBokHhnRoZEV7wbcRQa4vBDgqEw6resC3wbJzTMPSg4qzSteAJ8fJWa5Fhp3fdArsnoonohn5bW5n",
  "key19": "3Xscv2YAeRkC5Len9PjzCouTjXoZfDMkmn72c8Z5zREo55BjsaC3ZMvvGnwi4Y9McWa17iPYZpYdiPY54b1FgF81",
  "key20": "2RcrEjziPcw6wo9Nu2wZsQ7Npq8usKzKL8W3td5oT4Kn3a43YgZRGiAsYCTyU4ABG6SJEaAz1VDyjy7wP58btDyZ",
  "key21": "3QtsSwLZ8CDM9MGgg6oo89rPRhpqHVkKJ9KS6p67byXrGNvf7SRwE8U7EwUsFDz9gemcyba4QXgtHpzDsX9nT21a",
  "key22": "319CcztGRCRggzD5Q1pbRgAstry4dMLmU2Cv81w8zquSXDqH9MyVKn8UjoZoePW4t6QC5yAb7oopgx2i39UzHbWi",
  "key23": "4io3N8v1DNbVJbPQR5b7XJi3yArYPGgLZhfZ2S4VdtLZf3dBz7cm4mzZdK94vjZ6TQcsmPMBRC33c5k56ygTEdMK",
  "key24": "4FaZcSfTW6XYxd9f2kyXJAFRjzhSVJxCVsPGCAgkhus8CeNMup5vEkV1rmeNwJbPcMBcyh8hDirezm2cSQhUdd9k",
  "key25": "3wMEa2nGhLvoAFYudsS9dkVUV3xEpYABvZaqQLWRAFFcCfyNC7YrjXNBMfDtVUJj9Sgq21SeumLmPv8qVMLx6FHf",
  "key26": "9188osNSxMgv4QzSbRmMH9jFuGbXnpjSjG1oz1JR8RpoUtz8zRC26H4DByEFyyh768QUYubP8RJKozC8veZYGjh",
  "key27": "pFxcZRQsKniEm2jrnk2baZxC1ViqnZjrAXCSuGrop5zqPeJ6VYxP8cutysug8y3HwpKJv1jbrDJjenAASWPvacW",
  "key28": "66oa1fBFG22XVVA52BwP64ahHNKCxMwjZjvTYrRBf2FRXnacHHCq2m6RBgQwndJ6drGALTnoXHSAHsGwPRsiaWdu",
  "key29": "2wUY3TWq5fNbCMnUWgGQicZDoQkAgRJgYFND45M2sSPvesLyuajXEAJ7TnvDWJhUFywKG4Ne2MnCN3x5c4mKH6eN",
  "key30": "3LZHsQgYLgkDQVXjCRzxTLPMYqrwiHTzN7FLKoB14FYNLEByQwDArgsSyzPof9Puvb5pBWTnLBpCEHaiKT7WnUNQ",
  "key31": "rFYuFVjthCJrJCJdtTMc2968dcNzSAVZbENSSB38UoVXgGSi2b52r1orKwzb9AuUR5dwDwbajRB142LrzC12NM8",
  "key32": "3A4P1xEGV3cojukbS5c96XUFmsniwK1vkRYeSEYTFcz59LPiCf9YqGwKitPtHPNxXzfTAFB8qM28389hWrpfejVQ",
  "key33": "66uizG51Z7vLVCSP6cV9e4ps6gmXn4Wwyv4xdSsPBBYvn6J9sNDxqg2tMfqocLfp4Yt4JB8JVVcLBqRUoJrVNjWA",
  "key34": "2WYKmmWyXyhDCrL5f59fPvh56ksU4NaWb5H7tRRXizHRugbFxuT31FkLNebNfBbpVwEXubGTU4Af3nStmKkpaL5Q",
  "key35": "5x1s5WcNtP3SjUMBykKGN5cuoKRNBWgCkaDnhkbNTFF5ahPRU6CXUaCdpjuxMynFvpkARnSM7EYUWtX2adWFqqMH",
  "key36": "2NDcni8v1b1HYABEov4PZBJQfyHguouXyitjvjAd2qaZVRdNS6XbBYsLC5oZ2gyVANTQJhc8oq53NttNJBAp1JdX",
  "key37": "5W31PhQXyQ9ubYj5jyJrY1JEbKtVMPaGcfJYfZMp8pYfhfG5GgP3YvZYFnXPaVHzB82YTtmzmnc74Ht6bwWNifeg",
  "key38": "4thv7m8Bni177D7maHZsQfnF1uR8fwajBUrpEThTn9eHpAiLVhFoorAZ9VxSUpCgt4z1MHQm5xcaxP7gLZYciTnE",
  "key39": "cYddhmLRGFVDQB6JLBfThxJPjspLgAVRjeXwZvVREUGkLBkvneCb58xMieKP54jxvNQij3nrkexZq3R6fqyUgMH",
  "key40": "66p1NKaS1s9idumWMym3B75Gj3xy13zMtSoz1W6MP7vLCoW8bKdnhkVgE2nd6GjeCyudRDZA34wmwM61yj39zBq9"
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

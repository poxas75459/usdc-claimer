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
    "2CgbKeQKMWAXyM9ZVqUDfrgRyUb2pyyjsXjc2twfBiqq5e9fqGA6mZGZoVEaip8T2rqTfJGoDrFHVUYUDVTsytvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAzDMCdWXBCrsHK9TzsW44wzcxNTGkZCbBfarQv4YuEuF48Hfmk9cpWMgG2HHukn4DVGMxD3pFKmjBVH98Etboe",
  "key1": "aBNKibn1ywo7HuJzzvusij6vpx2Ffnd7wRSTvEFPT2Kt8FZUmMot3w4B4Ue3B9Hq1As74yC71p7sqxoMMt9vvU1",
  "key2": "4RWEdSVRyyFFm86Kim6EqhcoHxYGH3nZ4aYRgPFkEVpVYf12C4cgi1StvKEA7ZtoHHMmY2JnBoZpEbEtd9FZxnfn",
  "key3": "4WcoV3vu8STJaUAitqurx4rUJgHYqcpdaBcrLcJRNG6SPotwAfTQjT52B6fMB1LmPXk2ckLzsoVY15Y3PWx543F3",
  "key4": "5zBhdawHaUVZ1ixihXB174WpPk64s9ssGMrYnpvSRHtsxnLasJTQCccz175q13AjfxVi41wVHNXmGUkWsDQzs6G6",
  "key5": "5eW9ohEXs9zRAPEPirsEgvNfvqLyX3WTwvPnww5i5pypSafuDkXvohWQf2v85oZrtSyEBRoPzyGBMnpRuzipAq3o",
  "key6": "4jBbS1rWQjce7SpHJYDoRJ5ZLBiAB38qBSB6tgTX3tmkprjVF8FYqKr5tkgkVqCQqnNrVv1SEpFZmAQfAKM5x1o4",
  "key7": "3Qs2NEBuKB3KbuJvRbdzJUzeac3iPspRvQr9ZUWzAsADE5GjXpi5FZs4R8tSHdm8oqYKXG1ik2aH9bexmvg8jQKm",
  "key8": "5y6pvH6x5d3fgRgZmztzLCGx1PptnN8WK7n9aM1aNy2736U3DPtm8uptRkuqZ5shGVpTmYb8aEB5sF2FTd1aXS6i",
  "key9": "61L17Vjck61YkV2rZD49xfG2DfjwqvHDjwjSyeZEin3fm9TnhK5woVZBp8STdCyPyh22pziyNx9bhQ867MZtHhwN",
  "key10": "45cEUZoD2agbxhXqpiH9oVeswfHS8NA7yAk7YcSW2sqDcwKEbp7EbYh1YRATS6kXnYxY4gz1RBQiFn88CPkGC1k7",
  "key11": "xdNHQdc8LUz2FAjLXznnkMiF1rkfZt4xCwo9mZEBypKjMpUHGgYhwBBjEQSi7MY3Xn8Cv9ignXdXWmK2utD1P6Z",
  "key12": "3M9qgQcFCx2QNnnBAEzRSg62yub37jDgrS7pyLrk3oxJhUFRqcyj9UqQfpMskCoEBEkAJsYBPud519xbLwENfco1",
  "key13": "xGe3aK3xqTSELzZW7zuDh2D92WYrcr5jreomi5FQ8Cm1i8b1TzXXtC22FuN7hYqTTMVnu9nty3TkfNngLhC4TZv",
  "key14": "2Ar2mzjpHHDzzSJojhc4QzkHSZN3Gkrv2Gy8RBJzj5T5eheVeTD96Bwj4SRf6kxX1Eydp5aJifDb86xtFatYVvSp",
  "key15": "4hny1QvaT7eJU6ugLzVF1w1uxY9vKpDzLRJkB5rvJK8tLuxX2ANSkgw1TmdeuYSFuCvn8etHQDdb5rpXJQBWxEXQ",
  "key16": "3buseEgYJDzUE7uc3VYzEYZsyfkhcWQi9i2s2W1ETTsSdC5vW6T9kohputRj49EetjiEanrcMYzL8m15XWpdSduY",
  "key17": "4UA8N1dmEyfa4sCnjS14j4ve7LVHzd4f5R8GFNzPgS23fWXb6FpJocygvQrySRN8T6E3Sk6YZNhV9F3hzmRuQ8Zh",
  "key18": "5356vSwoLWo9hjnuUTDWvW2XXGNrvR9a6WEhWoABSPa2SGLHcGCzQQQsd42s4mdTZXRzc3T9LpNuJYzwdmtk5VDM",
  "key19": "4S28dS3HoMQM7ap8fFW6gheTyPJXWvjzp673KCzXY21y7DYUKnpYLD4N42oTgQtPhqrXvWDW2X5Yuccdy5s6Vg6f",
  "key20": "636tJhHBk9FRNykazbZpKm1Hmcuk1sQ1aLG2yzN176bE8VFokHpVCiqRyWSWdWMswyp7GKg7YXDcfu3LQmiFSdWJ",
  "key21": "5n3btbK8XjYvbR8rksbw1kYTXoB59AamiVzcH9tpz529C1BmyPBqC2rGqmCcrY5upUnL42emoMjWG3yBq3UjecfG",
  "key22": "2Mf9wMvH8DiURdZiwyUf91F3TTCRSxDbMeNWZHHvCAvRtetMqF5mhyRvk4McgU6kh1LpczfFoiP31n1tAiTZKKz2",
  "key23": "2sRseE2jKSfkn2f48F26EufW4ZUHj6i12qUqYa44tJbu43td7kXN7anY5rbGfwS44k3ea6oDanTG3658Uy6TvGBj",
  "key24": "HezCE6tgs8CH4doiYtunp4g9eidP8PNAQToy4qY17cjvpPUDYaZBoEBi7nYYK41uRpvFZizUCTMVn5zBQwsxuHT",
  "key25": "3XjqATSJZ6rMxZTAFmzeFM21nMsMQpA7zJ4RFzprXDPk3b8UwKp4qcf72n3RTFpUUSTorKr1tcrSkJqWeiz1Xj6P",
  "key26": "4jHBeLL3g2NRiaShiC3BpKBwyLWNQmcUi9UsDQeKBd1uX7RjxeyBKrALZGx4q8T9PW3QxBhvPtjGo2MYCkwmqzMW"
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

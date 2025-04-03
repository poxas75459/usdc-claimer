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
    "2DNnjqHtWKFW4HGWYaiGc9sVzeacsSs485eDVaDNK5zczNo43ksTXu1Gund3BnKaUFkzffonK9Baq4uctjyMiZHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sHkTaYSm2ycomLWQvmLjvPf65eaLmMdYUGF8ZcSHsonYeHMKxWmzpFWAnDqHMeymWVBv6X7TrdpkLgecmh51RR9",
  "key1": "4EcDgyzFjVhv9xvLm1BCo4o1yM6jA92qdMubDHEv3HF9b8pLbTiGmTsndY2YKBFH3Lpneqbf21JQ5L9zEErQkvzi",
  "key2": "2dejvMpJMzFxtHm5JPFwJ6NEBNLnAP3sRkJxWiNis4wQCibMGRpuZTJky6RniNThWsutB4Ghi3gXkdmjp6pkewNi",
  "key3": "brJvEg5RNU7nHfSfyCaqbvUnWGgvWPZ1eV8G3q2exHmDSeqUHAd1YsrXatW7dcT6RSVm8k4qmNvZ4C5fDyZjbBv",
  "key4": "3hmVEufJw8tZJ18qTwxLzvZVNv6K4GnGFPwgLrKjPqDDgH4Sfc5LCgh4TwHDxNFbChmGhzbtxZhd76VFY8sxUzJY",
  "key5": "5RYKNgYchFUvodJjnPf8FNNtYDcpYJnF7DyHruS17Bb2R8qpTAFXDm1R8kEJsoB7z2KoDRCjdJfjfqJ6yiGwjxtK",
  "key6": "4dLdYtjUcDAGcne5jSe3W29tipmeSa8jdnWNLgvQZd3Xsmbe1xk5DsJw4vsnnZCN1DWTtaKuQEpsaoznJDRk52di",
  "key7": "gB8ATYx9UwPY1f16pbJ6v6hPHfNQDxeEEpSCAnwupBZeDyrhAvrqfP3FUoYUi5NrXpSuryZXSUFBQouPGf1LjDp",
  "key8": "61WRccausiMY5QRfZLn4L3RVA5WuPnRB1BzN8uuPQh3mAK2Hpe16GrcjxEuUbuXkUHKmAAWhkVCtF524D5xLjenk",
  "key9": "5i8ucTfWwjZekiP44e71tfYaSka1C4gdEeBM6YKu9kn5YVPkGp1Yu6QhyT2CVA6gnrn8xPhAtCfybgdpTtwH3U3M",
  "key10": "Lz4sSjoWcWvZUC4n9qjmkZdZUKqH3RP2PCwFjE9RzJZh2GTvWgi59GP7UBy3yGTHu8HyhKpSEjZUEVHMWY9RQ2t",
  "key11": "42ze7ufsw6uMuAauCq5Dh6tE8TGcoLQcSeKNeTSGNECBBc4xqMLVSSUQpJTrRbyxgwzY8RqCDDyM5f7T823ZfM5o",
  "key12": "5JAyxm6mYX1CdNj4uoUwsBpE2tWYe1VjhrVipRqPhPRrWagvrFRigYoHnZeVD5uRR2GHiuW1E4htvCeVgfo4dc22",
  "key13": "2tu2frjg852HydU39MBUtdAgEKrHKMNX61eUdasuFCa45TZuPmy8V6T25ehV6N3PNNQXgt48MNMGZYAie64AK2Tn",
  "key14": "4Ws8BhGJswvrZosFXp8Zo5CseusGvQHq4MRczqzZXJFGBvVq6LgJQ8yaQF7SSEwoBJ5EUMLt1iCda7vkdAaR9bzn",
  "key15": "4s7jmczrgG68ryJAXavUYpjT7tsJc7f5mf7MfXjQRFwi7BzQDNBz2i4LzYc7THGM8w7xdcKTERpFpUi8G5wM1K4a",
  "key16": "4YEpk4bZoWs7oB1d6mTBhACXs1F6buNrfbZqwD4ikZxXRLhGXftQUg3zcLXUMDaDwETPjqYXqxTgi4Mtz9sS8Ws6",
  "key17": "3N2afMYszM9uakJpnssV5tZJ8UrgoGtQG7eb8ipTAh11nHtWHanDX5aCszj4EUQV1ZKM7jZQoEeeKjEjp1wNsbgm",
  "key18": "677q2F6TVC3bXGiVckYFgSQVm4WCAT7nBu9Nir43cRiBYZQqm4RkwYq1p1S6QPXEdm7u8V7Ndh8XgiyQZDzJxWYC",
  "key19": "5Y9geRfH5PUgnUUtdqqYTQTPXPyT8AxWC7ziT2pTPgyuq6Kj1QqukmFcf28Kq6173upzGp9qxU2CqvWaGSxFsq1N",
  "key20": "D9ner2tqxC6nKjxwnkoBmEM2SeRW47EdTWTaCqocp8uZ9DLwHo3upa5GqURch3H8YNMtXEFWY9A4nMoTEsx5sPa",
  "key21": "39bJGDxrVPL5b95MftmpdL4kedNegMYhvvxUjNiAYE8dK9Q5ctnoXbXNtM6DpsXAPxdyTeBwbZ4ERDjJMdRvRcUJ",
  "key22": "SkyjW23svbV1PvGfjGJaWGTydxfBrsXiMQ3a1qqNN6AKhasw1EKGCXsvT8jepf8soerR5xwNHtiwDyjDobp7msX",
  "key23": "x6kG3YCTs2tAEP1cGrvdz7oGby4hPjGeKzJQ2Q2zHTXJBmniPoshCRYuwGMWmExq417KKPsMPo2JbuSW1B8xg2B",
  "key24": "2je3TKiju83kYhjNvDQ4NbCuVJFotcUo86qX3tYZS3PamrzkZpPpAAJruhKByuyYPhLseG9qnASSn3hbFQi4H1xD",
  "key25": "2ShvqZkm72i45q6U6kJ8Pvfab843LfT1mDhz91vHCwedrQTXJWyismnL5wYJyKcuTecDAJQz4VdraWBfRqsT9TrN",
  "key26": "25NXSdrv4kXcCQaQCcrAcyQDaQn3xmhoqHuNMiwt77eCYag6h5wpbJJRnpkRUAVXLqXcDmqfFQsrjzbQHQypDn2C"
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

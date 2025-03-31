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
    "2vxMJumawBxvywmJiTWAdrY8px3aqdfBVx3t4nbWSwBqYdUNktJYuYYsA9xTVht5FJLwj8E3MDWr5EE7HhuJu4Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CxdrgbrmfjvLbtJKne1tWvhEEnq8Hkq8kFdzMLSAPrSGnE4SvCmNgeMw2VJcWpwPeFMjsJm7PWwGoUaujDy9Btu",
  "key1": "5L3yPHQp6DcwqKoRf9gE18dpYMaymXj8dcjRMk38m1BPybeHvUv1fiyy7MkbJUea3NrMeNtdLHNveEuyemy18rBj",
  "key2": "2mUhr7KXgMLGfP5qjGhpUuBbV5Ee1hnZigWA3F1TWjA5yu4B6raaDSoTKqbmqqGD46az41dm18cP7DSCsEYZJYuZ",
  "key3": "4czwaun7WG8Avxw7yzRdDLgJXXBXUsts6QTBGWp7UiEJadXqWUQEU64PecMxyfeZPhDdttRvU2PK3f2iTRoZ2k25",
  "key4": "41MEtpgacvaTiDi6Dn1PXYggjrUQv1wETW5QDRihQHrWxiVcJ7rdc7Ch2gNzC5yQiAVsTVoafpMVofFtLV4JsfEb",
  "key5": "3p1wMTe5aF5uH7czWWmbN1R2tD5ocihPi6xPt9r2dFXwpAW8ekC2HoBtS8oWiDNkm6tNLXa1TrkKMM6r91oJNs1c",
  "key6": "3Q8NZMGor1gwyd6scdoN1LbpCuSzBAfGtjfdsSF9r3gBrBz4w1ZhUErjFE3TfnTX5KkjA7jn1s3ZnK8T1U1qxXvh",
  "key7": "4g9yDtgQEQwF4q1yEt7ErWFSTLWurbQY18eAeZFrKg9uxnGfMVbsDrddJJyPzsw9u2t1Z562zUYL1Bp9zSpPYosq",
  "key8": "4jcwXsMts16WP3WuJXy3dxoSZihC1hNJXg2SAw7BBx8SK9rzEm8Q7wvqtrAiyUDEc5ZDSq36mvn33fZyeVKkA2Ai",
  "key9": "2nJ7b62SY51FNjUz9zPHM3FQSaf7nuTzEHqqLCzXwENsRVhsLqCETjLgNQ7ffN6cdhi6RDkAPWiwcDCcSHL4ieSM",
  "key10": "4PqssreQWaVouaPFg98Ph1wF34JJpYxMkgV1kGEK88T1jVhGE2UCuH4oHEVW2Wy2WwHPYoLa86rkHPBABMBijiWg",
  "key11": "33Kinp8wePTYtpUn6nksGs7GZxR7LusNPNxUtdaF47wAPqfygQGrCWRqUvw2b8n2jPrQkVp3toQcompFeaLb4BQB",
  "key12": "2sxLXCXQAvUxSKMNYRdUaCypxz6cxwnnxQagdbLiy9KRLLf7JHUghxQ1g5A4ws7afrM5chU2ow7TaRgTxb9VAMFK",
  "key13": "2VZurwT8VTiGFKrWyCF1p9JSx1FvoXD7tb7oSYCxF29qUDMH7fESj1Mzzi7JCyiVeXVRNMY5tAcQPSKYzsj5XRMr",
  "key14": "2Lpo6fkBuaiSpzPUsEp3s2TieDzYEcnKScNFkrSANig5JUdr2B6jhC5iSDYbhaQNW5qtF32eays34nDng1QVeyBe",
  "key15": "59xGQ8EKGTdXrx8Jhz62oeWTwH4hvhoAQevPYRpDjbKYfT52ZL3P4kXLMJpNpQYrEvm48C3V34mX52ahwKDoQ8Bb",
  "key16": "5eVM7AURrb6DqzBwpsyFff5yTqGRYUVBdu8GAvUH6rN9oqwpdEc4RvgvR5MyYCeTVVyv1SXDVQDiRyvaQZf3KWxk",
  "key17": "2JZVc6JAtDkrqgm74HnsasmWTs3U2rywA3jspu6XfmCUYTGohKsbejzkTJNpR4qxnWaSQirKGH8GNdiMj8d6Hbbr",
  "key18": "4hR2ZgRiGaz2crFoF6meV8CPcjQAUULzAYVcNgcjvMkvUXAhhkrxoHtHjx4Yx3RFRCjvJJaUiya7pp8hibC2MeRE",
  "key19": "gSDU6MzCYEYGp21FyfgMkr7XCBPniqDUN83HGmuHj7yotamtaWpKe8WZ4mFqV7Mjyv1TfQUHpZkpf9GP3cVPgVG",
  "key20": "4VYV3jQTjJ91PqTWEod6BVCS2oZc7wQDaTrYCh1digHefegSDQNTX4WmGs1TXFbLyi1aiZ8WeH7hrUkXqWSuWWRv",
  "key21": "6DWrSFhRBs5qyePab6wU9uWjeci5bDpAhYM5sKzRpDLVH9gWn4CGDx8byUF4yqWR3rKLGU5jGwi5Gysb2DnNu9d",
  "key22": "m8DH9T73kofn3vNgVLSUNwMtd2jxi4vbLHQzW9zVE2D88CZ45K3mmUhpgnzrksrCHLJX8nwKV82LDisRMRQD2SA",
  "key23": "4uVvq6w3VGYLYMAQyeRDSqiJ9PqqjJF3PmPhHLsmnKAaZ93bF6nWX48UBrHKwrgpztWAsZhFrweazvwvi9Rf2rG",
  "key24": "5Sk4BpLK7KGoRtff8gFYduFUfz3337zjjKYqamLa8iReJPx6PXbKoJNaqRbp1uxi3rrKDUtizkyztaDtFXHmyZ3x",
  "key25": "25mtiwyVjhiGePdnnUiufVHH3NyXL7cPHr6UtFUSrFfpnd2cTURgvw9ziXw39BQfv5ALgAKMMeoUFkBRdx4cGmAm",
  "key26": "5BWj8DwXdvWARGeJ9fKshH5HyiNfpHUtocRncvGcCn7awAGeSuLW5SvVDPN7n4Ty9fBWtvA7UtR6gGdP5dbDhA1o",
  "key27": "2pTWJLhXrA4rqKPxt4aCT82tSSZeLEDPivii5RVgoanJnDucgE2j7RpvMvp5oH7bAdxJZibk39e5jEMAFZoe5fzn",
  "key28": "5xLJYhiMFdyNsQR5mrUeEX8YbfRfoqVBEF5n46aSSgFhE5UceGy7s1Sh8CPwnuJSnfggeFCdjzcX8MiS8VnTw9JD"
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

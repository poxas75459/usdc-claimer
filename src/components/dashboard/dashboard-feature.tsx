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
    "2KVdRyX3mowAyjC3DBFWVf3Esp8cTB3REWBSisJovTvpGGaq4fjvYCZUSUwAv1gzZ7qdpENvjSJs5AQjn3cVY5MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G8LRvhoyxHYhKBdugyw1yNQmviGaokNMYQNN6opkD6oP6jxSaBMCbjLjPn25fKR2k5mz5s8559y21yZMmuPcD3H",
  "key1": "tznMKFVqULVTUaSHpzGFGLhQujiYpuu85Dv1E8wjX3YmUBLYyBW6Y5CNSfPGuFZEyib1P9cVeo79XhBfYvRpMZi",
  "key2": "2BGYMmy4vdbq8mPZkaB9AFHGWdtXZqdgd9bwsicaLENNeRiSAa5TYW14hgi8Upihp458gtTr3hB7aShEMf15nAdQ",
  "key3": "2j785p55Ppaumfs9rMzSPn6Ehz6H1T8jCJtpvJy1q7QJmnoVhvGVeSvKVb7RU9SHXJsVNNvkznxgQhSV8Y2LF8qK",
  "key4": "47gS6dERQyDGJye7hk1DDaXLWKKiQJmVpaSkn8xsM9quxmQagJo4UKMSFiGFarv3qcFHuozDAoRff5Yr9KgFoqYJ",
  "key5": "3bGpa5QQUuzPQ81yuJ8uPjBcSAkENCYwF451VEo6PqHoxZNtbVHyyBHNgocZwQChYGpkooabSgLWG11fi6pBEJiE",
  "key6": "zcTQNLYxspXvdAWRHSox8qY2epwx4AWbdq8bEu19wnukJtQQaYE2da4eQq9YSwz1Qw2yaAvt1NUau1Ezm4ym2v9",
  "key7": "WdgZJx8NSN4uo66YdNoBqBYAWyh5XVpVWY3o8btNnAEqCNALJ3giBVW9Ni8qRWQyiZHna2wqFLNM4wFbuf3D6oz",
  "key8": "JMWwRX3LSTy3VWb5jKA84EdQfYnGGp2Dt9W9m3uRUC6s5zAxte9bxFTVqtX1yZxeMgwfLxAWAoeFUp3ip3PyZFj",
  "key9": "42qrH8RCL2bowc136kvf8jdExacUHyWBUzApsyeJSMmFApJ6dBH1ZiHvfEDq8quC2Lm6HLMfSL73MwnkkXUfPTZ1",
  "key10": "3PCAbb73vYZAFpawjNek9myGoowyG6bF4Y8yPd94zWZPn4WoEwrdjbYNE84cQ4vHyXvGe9hs48QUy3kf39viaq9w",
  "key11": "8Bto2YHNb26VcTgDhsYQEi5DAaS2XN3KhSYYapkEiA78arZ2RDUB2fc5AMwetCVGFr9PrAetmZCd2DGdLhQ7cBN",
  "key12": "2dnKL8KNCsLmPtHpqvkv2Dow7zHmWDyagPgaqFYoqhTZPztjq2QjRkYZLL4gD8BPbHmaKTUZXNe13BQA1JrPAvek",
  "key13": "4e6RRfobHaRVf19YM69g9B6JpxdAUG8EwBhmaJ4JwsBETDx8SsDw2Pk1eXN7KxZxsdLtHUXv2XihjdB6rSwnkyiH",
  "key14": "4kJn2cuQZ66my1HKvhqWHBEqyGRL9DAT9hyBaoimyfd854CnBegD6JVDiwF6nKUacAoVPDk1RPYNWJyQeknsVuM2",
  "key15": "3sxQJ6mSjBMSfGKWWj3eir2RSxh9DZUZWnPaVxLcn2zK6GxTxg4hLAaZNhdPSdpf9ePXmj3KqDs5pccSSstgLHRu",
  "key16": "Zmh1NS7KkwFsxHk66JMxiEgE584obFvqQ9SSoW17BSu4y6fpfcGZrkjbjTb2nkWtRX4YtTLrr8Pbv4VhZpehLcb",
  "key17": "2m7CBwXgMF8pu9yJ25rit5TSdNyttPwaK8V4F27u7jt6ybLAjZ21qW7EvrTis8sww5WcH6mPFfkx35QAEtQs9cCC",
  "key18": "3YU46vQrpQaUjQyDBKe9U6KETVCPCpbK6fTt2VDadbHRu2io2sDdR7uqKZ2bgcQmG5FZsHiV8ips76norNg436T3",
  "key19": "35kAFWH4P294wuVkeUPbshe8enGdy34NA2dowyZLVwZYG4JXXqa3P1iA5DMBgHgFzFPUHG1i5tsBXNzCaQAJELht",
  "key20": "2oTCv6QvunoJR2qx9rpQV8x76ZaeSCdYVKdxjhsRC3Bj1Pnf1MvDLQhTKXCfvqkRkF5T1yzf7x94Wyx8XADmC8vi",
  "key21": "p56stiRdCzJj13fTjrZK2SAXbmBNezhCB6FzQx8hJGawhwAaQRaXCrxheGDCK9wBDUFho1mqukUqmVEsbfMBGBu",
  "key22": "385gpgrGyR8ftJxEE75byxktfXJPiMW8A9CQ9jS9hga6ZAXdmDW6qVkz6EQA17CVWJZVeew8d4JmWobdasDNXBPt",
  "key23": "1LpZ2c2PeXNVyUrcvtf1xq3Kk736Zumzu3gq5c392oBeZbWM4PiXU6psB84zm3USFPLL1SNCQAaUsje11W5i7X6",
  "key24": "5Tu2Jv6s7Ykzia5G3zK2wSFpu4UgRWoFig3Nsef72zjXfLYShCcKhZVCzvcuCdqwh6Ge4gLzwyH7KLDtiUcspzyx",
  "key25": "5pkAP18TRaMZX4V2eHsfqnHXMPsEQmivh8LHneCizsggtg3jK5hcvQ2kqi5ALFUo82pyRLkpAs7eNjq3WSQapTqv",
  "key26": "RDf1f6PQRUkH41NRMtbwN4ahNLQmqncf2DVoo8y2XQ63yhScUvg3spSpv2wb3o8Keevq9L61hoeedDtHz21aecS",
  "key27": "4jebddtiPrbCcm5TcZN5Zgw1R3vqpjNVfLo7rfYjmcyfa84nb12apJQiamgvuoQzdW5VsSXGPDtYsei7RwZ7yG1H",
  "key28": "3moPeHLyyEAeF7aHxxvfJ9yoF2qNZDY2owU8rrfdSZHgXzaYLaWhVTAqNx2kqQGgyyUSGTxRwmCBxRMqaoaKaBow",
  "key29": "2sJHEkzBJbcM51Fteb37YMyMHfKEUWcMBEMhmL3BTRf7XcjFvRxvSSowYxwvxESdALabnWojDFJ9dmQgzj53ZGGB"
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

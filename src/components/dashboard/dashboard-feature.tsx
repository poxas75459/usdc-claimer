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
    "35b8Uzh7LZmBpGmWJgjLhfwBkDEMsLBgND2qJuZyxW6T88NwkWtsrwj1gsJBNTpkyXse7gi3xP7WGtoi1dPn91W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ycQDRAzRaiYaEdTPDthMW4baEGMhsGzGd9fYHibYkTBLNfQRebFmyvWyHYsf7yLVVULNdyDVJWVLjgeua3QrkoW",
  "key1": "fMWqWEg1B56yyyZF2ant8PcTsQMC164q22cXNYiu9PwhiwsLeRNFqnZG5ncFGQgLhCYvizZFSfS9UVejW2bHZP3",
  "key2": "24r3HYYWJqFq2jMTWc1DuDiBYKM9TzftVq8Ys6NyNyV1Mdc6hXj5mAaWj2psD8yoneMimBHubwFSVZ4J1oU6nKTf",
  "key3": "d5gZQK8uyAEFFmK844SmVy7Nk9ZPJtZv2ypR7vsCE892vJCoiwYe7qbvpZesrUZeW1KoWgSCeNDHy2ppht9aog3",
  "key4": "26Lc9QXXmCWdT1q7sezxY1KdStuBqyc17spf67EwsgLivuaU4Ynbq9N5Jpg9B6fX3kfBvLjiSHMNH5hzcz983uUB",
  "key5": "38CNYh5rCTtLwWjzcnswKFSrzmPWzbTb8VK15AHjA8Lye46jmUnwJVGpZnzE6sDbSJwsEzobgF45HmMkBszWGpsn",
  "key6": "3kjqizb32hYpuh65486yja1opBYcnQjMqhfyekPTXHXFvB4LYUdLV339wniWK3QLBcvp81LgWTcpnFGeP4vnsQ3f",
  "key7": "5Rf387RpTdiC4kJiZ3Qyd3BQs3f3V5qNs7fz6UADPsp29r4TG4zpWETwMHrum4NCg6V1bin2i76Ei4gSBBghkYQ5",
  "key8": "XWJmj1X6X9cqsUBGYE9LZacoESoCC91vEtyhhiPtand9UZq3T8gHL9R9dJBsDNVwcYNroLAb55EsaLgWa4hnzTn",
  "key9": "4PrwJwJaTEjLiThJvhuJundfg4k6q4uLh5n9K3FDJvJErFEemD4MGprwYi8NL4xvTPjHDEwvnhqdH4S596nVVynw",
  "key10": "5fxVRri5sENTAp3LUogCj3FB7Y64SL2A5gq8KqPtfQ2pWYMJhu1HRti5bTGFNr4iq6JoZn4t5ZAfHWrjhVA94mAd",
  "key11": "5PuUt4U16znKf9rxsKvENzWLDWYNbFHzMoaHgaUiSnPVvbdGJVgcpDcBz3r5onQv5AhNpnqq82VdfGYUTZGsVGnc",
  "key12": "51WHYNCeL1nGuNFxVWedjrZ3qYcDyvUQKdUd4jRxrVce8rAVZaRVtvVwCRHFmtUBPWbnJFp58vjqBt4s3Vn8MyS6",
  "key13": "38MaH1rywRQJukGdDDVCPhgbMyy4ugc1uvGMoUHYU9BnAksyZ4mKfCpPvwhBshnz9UCy79Qbgm6wBpHEzJH5H31h",
  "key14": "N5HQR7jfJ6jE62aeL2izL1niykDsCWMeLM1orqE2C9a48V1MfiP8EfQyWXiwTh2DAtFUNFmvNAwUT7SqvWYyZtj",
  "key15": "5QK75fgvMbyCWR9jsmdmMAG7cuVPSNNtRMwsCxxKNx5k6kcpDTFhoCRwqAzAwdKFxQWThgssKDH2FUATCg8rckC2",
  "key16": "5BPKcHHEV5LTFGfubMmc4ANYHBj9M7vkLYoxUNHo3e8MMNgY1aANbDEnoQzW61DuKZsBiK8Tow1cDexJUw9aEpdP",
  "key17": "B32PryBkSRfGr2j9wJJ2MpA4vkzqseXtj49qet229dX1ESTxiLbcf9u5oSmpnVvn2Zhc9Lxc55j77t5Qj6xn1KS",
  "key18": "2cwwaJWH6XY7YHEWLU323mGRRZ5i9bAxmvLq927v6TepxKJA56oP4kRdRREYkcDP6PuavSUtvXfvfiCKgZLXBcgB",
  "key19": "56sqKEkfsvkdSjY4JTjTmiKHxzgkhv8M3RS2JkN7sHtmnjgmALrncbajPbJpL1Ayn7buHX1ntgbXagvUYHHrokUp",
  "key20": "34CaxanqebuMSgfKFHj7F6xHVBCB3HvzP7t5EP186DNRVohd8dGs2MxYRejxt4DTRJr87n1Jpy2KS9YkL2f92X3t",
  "key21": "sLWCondF6BJQWf3NnFo4jAfgPexfR9uVhqrrFHqFCqBMxaHiwtSgUpZ4VpNDRtCnMyq498Hvsu1FtKPcxRGhS4n",
  "key22": "5gQckG47KrbuiAi5YiNvc2Zi1AJqpzAP6AWU1aeBZHLYoXfmnA1v2iraNdp7hVrafXYqUhpKZta89SZTg4X2gDWe",
  "key23": "LBrfeukvmBNu1m65dPG4QipiWmXUJFndcvG8DU92TiFugNcQ612m6mGNXdPCDLSSxWzkeC1exkfj8R9CDcBdK9Q",
  "key24": "m4EcahiRbkUYa6LCRkkkiXke294hxdHnSZ7fcCTGgPD4vTRsNGr6U1dHwrbohp7X2RjbCv8WbUgmaZ4M1iZHYrP",
  "key25": "HgsgCaahtUG3vujg2v1BCESej1zJWfW9zFSTmcj4SztGGjZRhSQAaLdD6HTGQjkTGysentYPZnuYYpiG28kfAQX",
  "key26": "2BAf94VZW3Hyo8PFUHrE4FNh2okqbopeKvEgEThEE1Kpqsz6oaW8YGuWe6ahfajQ73ka4AiPKh9rNhefPr9tvVon",
  "key27": "3T9hGrcgPhRTizowfZ9Ksr855it1Thk1LB595cqc4v4X8zS4m7j2XDdHM1mVgVaRvvCqb4syw9mcXP9HVXgYP7cq",
  "key28": "avnQzCXSdMnWwVUCzhwXvig5spEuuCCpjh87cE6A7XmgC4JVnHP1usfh9ATMuQ8SpESxxpc3z6Nf8ZwdityESjy"
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

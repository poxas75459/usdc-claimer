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
    "pwdnuuaJRD6fkyrWkxKiW24qGQrQqtBfY6166SHZbDddT3CLtyWKay1QzWFQxF7Fw2jrR5ULmXcksjR3vH1WQSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rE28oEaAdXNb4MzwBBJrgAGo8L2qFyoLVenJ8qaUNL7heg5zjKKpFuD2exxG3T5ueKpKgRWnWesxUA5qH8JE3YE",
  "key1": "2TAj2XVB46c15mLuiCsiCseMr37Wd6VdVEtD9k34X7sonmLoLfzQZQyRGct1581HnquhEhU76aVXhP4HZCHhC1FX",
  "key2": "5QEvER3Mk2pucRsxJoWMmoAQh2SDdyJ9bFnHUGQE29Gk8DvNwLFZK59JtKqduaMnqfgLiihb8HASAt7AwfCs3LYz",
  "key3": "3UwYffaYbpMrJp1puSouhYJBsEsBPskS3L5rf1BbAPbvsCRp4j3ny95WzfktmpoKMqnZwakEBVZ4AQtedu5XUnyn",
  "key4": "5GLWUhSMnUGBPSD1dPjTZQrEj9vdNetHLukT6azintkuvnAKDZeTb3syDcPZFQNZGQ27DdERZYbjt4qcbDZQoM3E",
  "key5": "31srVzvFB2XQXHfBR822AgvTwWe1on9KAtr8Rj3zXxZUPdTtqsN34DnFcaupPbo97vZLdy9xGWAe2QU1mqZGc3V2",
  "key6": "4JqA35Tfaszv9qt8LH9T4VqMsxWAZzSyTZd4Pb8BsBYHmvf7iggRghX88YoUJ6AswZnnL7UP8AocTbpPqcnBu6oi",
  "key7": "61GrYC9hFdunXztUh8vE1QjDMQaRJZ6HYaCjQGJr3H1DnhD42jTMSLcKp33aWcNzmmz1MoKMVYbyij9LGSw9Jmgt",
  "key8": "3Ez2MCWQhHXRFetFy6hbPCjVZ79bXpNcDg9JSEhcrr6t5ptJeQo4475BTLZPDJw6HrqNSMNYYAYq1niBGn79XrQS",
  "key9": "4MgnG5d2fZs3HohV7KT2djV2dptw6yshfUUCiJHt1sBySASpgwYbBgbT5wpUw3gUGcUKkraKA8voc6tiMge688ti",
  "key10": "39FdpVZRbQatQoaxtqR6hXt2JZEjdZnzxTnJKuE4nZkeGbYHwSjJqHf5gvRAqN1PiA2J2WWpC8EHDxvaMmg3jE7e",
  "key11": "4hGXuThKRdyoXhH3qVRXbu6VSieenEaxgrXeV3chkRrLAhVrMXEhSaYzxjK9rapzrma1MkFhLVc6bGyey3thz8Gk",
  "key12": "DZRnCgyYcgkibh3GM729wCs2opMs7a9FPdQ8uVydfh9TGvhprM5FCx5kjjpEK3YYZVA8cf2F6wWt3Znum9V5NyM",
  "key13": "3sZNuiZpsR4h7CihBWp6LwboDhZGg2uXFSxvirXwbicK6GmQeixa4azFFM2mJgMYHUjCiLvwTwzUQxAhyQ75fvsT",
  "key14": "3BraJGq3T2amVZ8dqLPpdWtLgZ6izd47QqYbi9rvtfZfhxMvD8QFTrqLanAks6dR2euB2LHRr7XpYFWwU1SHuLuR",
  "key15": "3w4fhGmM2j48feCB15kP2zcXdzDqgq1qvTajBJLibeEhXtBLGmfwaLhKC4hVEEWjLj11WLQbSJQQuuzpKwVZrRfW",
  "key16": "4YTPeYSuh7e95noGGvNFRka95VCx4yqZJwbg26y6Fk5MjiuDkLmJCF8BmStu6JdFG3o8fPGBu1NxDWNiooA5rpdb",
  "key17": "4VSvxjEBL82Uvu9MW8tDY2NyxK5kaerfVBzCD7hFezJ264vwehcP4KLfWE5fYKYadz3QvVsEkYAYJv2e5WiYmwwp",
  "key18": "2sTSrq5AmLpn4hphnPJ3sERsgHKJHgetEgkG39qpaH4Gfh6CVJXuiXUFEQCxzkb8fg9aMfvMWindM6JoEJSMXfng",
  "key19": "2CF8RbG67fKFvs6BTa8SeYz51KmZ5djEns4WRUaRWhKeyNowZmxKDS4pzYYHLMQTc1Q1hEDvC38YRu3mYz2nyPGT",
  "key20": "3XsdMDJVpYfkp3czyPUa9frBPC9B2dnHD5RjMYb5inLkFUbqtvK59PnUep9GQTfv54ibt5g2ByvMGkWfWsiRj4SU",
  "key21": "2Jiod2pWTor8DLPd5QWHD1isB5b1F7xeXDBKumoQv3bqfNhemXuPo2FhvFm9iyVLuTMWE9L8FwCCWk2cN4afaoor",
  "key22": "2z9hofT2m7NzHZ65JRT6Q5mSAQzcpsXqKvQtdDYrrd9Q1MPWP1AMrR6Yii5GDp3gYhN21eJQNH8SRDUu391D6EUS",
  "key23": "4at4rdxi7wPebRG8m6SdEfUZR4X6TWmQqBZSqtDLbaqmDHHAD1BuYeckkwjB2G38puSpECugZSUPthCwaqs2j5cz",
  "key24": "5CExXH7uG3sYAfbu8LG3Gnjo5hRfrt992cpTJcf6ETKXQKmsAVspGyJq78mzofeYAFVhrqUFzWvdmn9oWwcNgRDm",
  "key25": "4qzfnGodNyRCD8RL9knf6iVmRdujCZCz2bsqcifMfxbXdaULWaCxJTWZzxRJvUipCrq7XcAQRFSu3tBvPkGox4jn",
  "key26": "5DuT5YLpzPK2fNBNT5VY4ZRrNCU5N3nVkfmukoQw55pViXVx69oZAR8kdJJzB85hVWovT5bA7L4C66FEMAbbg4Zp",
  "key27": "67HPEkae4vSQ4ynafBxnUtjhMbRSJk1H2f51VQNsWqG4MSmzkuTqmRN8THgDtP995yiaDoQvH13n7FPteowmyQ4x",
  "key28": "36FmPnigD48D3kS9fgxxAdvfWtUtL9e1DFnpEvp9moxKLRniUAqbxyectH5D4yaoh4mSSTrx9xtBTbEmvVC3x6xw",
  "key29": "5mNvYPZdZb6Qst2XwnALR74ZTbrDA8k4Aatuud67BB2qqcp67bQULmRc55vj89hkzxLg6VwAiVwWXu9GYWdG7wMQ",
  "key30": "5a6zoU6Z7Nr8ykmM5aUxXS8RNGxpgTkoVATbs5RGDxa2LpAaGQFbgBkQaDp7oovxTj3CXYC3TmwRj7KXQ76eRHg3",
  "key31": "5SDJWCG3euz7Z4gmvp7HXhzmNchn3XMG5dr9peTctqLjNdE3ktx8WQmNNhukzViwW67ZE2HYjhvYpm9XjryJWm3D",
  "key32": "5NWx6ckTnMfQmAaDQ6eXy1MvATXUSCenf28hJggnnKKqg2jQu7dC8kryB5oFB6JvUKPj7a9PYCyWpLkpVtyFiRvm",
  "key33": "38AY5f7SYKEwmSnhrSTeiP4Vpxo3cRxrs9X7cNaEffuDd9rfVceEh2A7e68XUWdhs8WEbfwEzJV58bLjGW7STwUg",
  "key34": "419B27EJkQrPGSVaB8Zj4JXPfxWy3UaQWRYi9ExApeKfxNE1J6JXBW8pmRuMPeZXhbWeFHdn9SMLJ7SPVtKbizj5"
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

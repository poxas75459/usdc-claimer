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
    "4ZXBCMnkSrjEHkbWf7xRdG9g4vVmnbPanrfX28isozCJtFVQC1XtFsqmJ7vBXAcSC9V8bHwAaP5yEjWXBvcYpKGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmaqdnXfDRb2oo8kcEFrfNyTwW98hbLgEsTenvLxdrF5EaAMTkBjSuzvicQWSU34rHPMs1EmAPYXmB2ZvznGCEY",
  "key1": "4v8C2UKriJR2vp7vmqrsB5hJWFJsrbKvt6QwRRxTmyc5W814n2xdAwr4GM5Td6CLR1QWyHpHyzsyR6TNtkLF4nv7",
  "key2": "UnCqeHWurUYNPfLWi9EhWKm5fFZq3mKJ7Mckd6rc3CHr3CzUXDH9D8SGCQoBM3tjECXBdaPNS4dpAyNHk7DMzas",
  "key3": "3SbvBT4saCfEFTkVWE94ECVbfYmfydZ4cWXqSB6rz6ewoXE41iwGFTbdbscYmigUdG2YX5hoDV1pqTj42E3NxZ8z",
  "key4": "3p5Fm8Tf5ohvBMLeQodakGvoPRUCAK9jT9k8kMKkH4iJBR39toXvFsPiAUYV8QBq3Y7ihbQCj5aDQKzDx959ZUTo",
  "key5": "24k7qoPsCLoLCcGkhfB3xmMjDMibmEsfJaMDH3ry9XsnaAb6S3BEb8t34nVjEtEWcfg17cjooy5r5LJzg2GfVzQa",
  "key6": "2XvAKvMiw2x8hceUaqovN7ire33SWDCC5DJXkbq14TX8X2rWz5gasGL1tLvTW2v1H3rMVyByM95QqE9zAU6PriWt",
  "key7": "2ZLnFCmqHQM1DcwLonJzSxXN7r1u1BZsbYakMm6r473DxEaP7tjtCbnJb5uh4kz2sSQvAuBecn2zAqZdKYa1Du8L",
  "key8": "JBtTenm9aFj2H9K9BzkZEHgKS9e5G1fBnMoAmEAZJbb7Pv9bjpFZGAYATRiRjuYeKLXdGGprCjWoZpqhx6SfVyH",
  "key9": "4Ei3RKKUya6BaWh1FLCUSkaeqZofoTT7uU8Cnrs8scJfHvyWJ4bEHeZEvTaY8TCEb5ApgZToQjcrSqGs8F1qVX7J",
  "key10": "oYAG3DMWKxoR69oGH6K3af2c763rMnUNGr29U2eVWVbPQq6kuBuDrxV47S4C4neRHWdSRBr9wHgJnGfbC9xK6tq",
  "key11": "jabB7sUVxwumpuNPqy1gmcRBmz32JYzG8sC1NxnmpfYCGciEjHmkvQUmsBAR88XqF4XkMhFggLLePq38mwgHM56",
  "key12": "5whxFF9JQJtWRjYU8qtjiT3BzfGq6GzspRk6tcuXmjE669yU74TeeQF8a2tsTgWy2RfNweAZGgFm4d6MXsczLVVw",
  "key13": "2HfmSYRTRmXHchqtu2HnZ8phPvpQZ6YFqaAqS6rhi3CjKVwCdTqHURX1EJ1HmVQpd3Cq9C6XvgghhgonvNTtU85L",
  "key14": "3ASRBjtfwiFzTsgA1zGUC3woe6j33JDUTvKnMkSWk1jjZA1JSKgQQVDCNNRXefz21whzULN4rXc4WGwjcxAM7H9g",
  "key15": "23pjbBxTrJJAPU7zCFvoBgwJuckTktqxMG11YQWvLnqGUjJ82x9q9GtFdxBMrH4KvpxGPJoEbo3t4wMxMCwbFEbu",
  "key16": "3LsmUYPoyuYLUf8JSHvrFCoxrLPsBs7CmzFJrWStzckyu7XFmUSYLRXEkK9JkjV3cqzSMT6nJCopVVYcHo6bLoyU",
  "key17": "5BRRsVrFRvcymr6jt4Nh8rrphveYXJ4bMPyyxEMtK5GnqQub5JQ4ehajFcf2Y9C254YcyRaTSZNjFYsst3o8UbAf",
  "key18": "zsLqXzraRcxq9ht5accPmvJfYmAy7QEnEk7fJwsctdvwZsUpWoTmGa32XL1YcGW78Vky13to9McTgsLSyofjS4N",
  "key19": "55m2iXn4QmscPydcncgaM81p5ek67PCsiR2fGmGgu5zMwwGeEFTTuopBPxgP77SHeLWQV1XGXV83WRdWt8WVMPYL",
  "key20": "3fRjVNSqcLBusqf5ejUCBYJ6J3guo9ocVx1SAXNp3KXLTYDon18gmAd4GqawUjMqaMDfKs6qeYjD2CqxxqGHbQx2",
  "key21": "4nvjpE2JBrJmTuNdbCwYwGvKePaCKeys3cVoqtNhuBELdw9jTvmzDeVzwtKHBMqDDByXusGe4mY16vt5AnKnoWoX",
  "key22": "XrnTm1CwT4wpsmyfrs2bdM77ySaA3SgDSq1wh6wzc7XXuL1AXAzyi1qJrYbvwQhHrRyyndNqHLdRDQNQMgGRZpL",
  "key23": "ukFSEZ51iG76RBMfY5XLSM8gUZXVKj4c1jweKNkVgoDR8XD9gc9HapMUdgm1JUPmyYZJxorazJ2WUvFCBnW4fzU",
  "key24": "3zNqQo2MuErQVUPvPpPmDjhxKSHvMBXYPJV6BmmMFBhDAXw3YH4sw2LGND8h3wir2HqhcfBt3psLAoVit7UHBBok",
  "key25": "51NjfjVtTs4wemmC13d5jnDqxUGRJCmFUPhTU49VvL3NUrYEDGQAFxJKErz6PucgS8bxEe3Z956ddknreoFSByFU",
  "key26": "Rraya6jHTbzcNc7ga8fCBfjLtmEsZYJvhjnmYsdydmYWRDXtuBL8AB8KRACrUdsd5fDZhpZd5DBGn3wrjVy9Z92",
  "key27": "2gxFMHFotmJkGcaEqjkX4CZaTcV88KZTqqB2sKQJWdvzVwsnh1od9CbLXUxNd5dGdxSx6N7x6i3WZturvsUSuubm",
  "key28": "2uRd1jL7yrmfuArtsrHfhrd2vdqJhuMzGXd5JUnezbhfzhZGdNmg8hGTz1ZdqfTqRswiCfz6DRsrndFzH1ysmo9U",
  "key29": "2bzkF6Tbs95X1fqQ5UPz9cgRW5nWUHD9S9QzSnhNDuW34iXUcSponhhDTYi1tk5GEujbmA253EjZb7xnasSWPCJp",
  "key30": "55J4J9oBjK6g3H6SvCf2W3XRTzHegSbAPTSWRgM3FRaQ6X7Vopietzw3gFmRbtDqGgzrnZhCjmsxfLKRrrmNe2yk",
  "key31": "2XNHT1pVj5xcRABZU7choKJ27Xf1H6uGQJ2bK1Eu7vNH3gtcww6H9h9RqAHxTe2wa5jYXQ9nr1Z9nSYz3xdWMSrd",
  "key32": "4TZJG5jrcLRvA8Mg9YTKwV9NAQKaLJ9zdKECo54LHqXmaovCrkyDYZ4VcC3P2iGYPGajCTEB8BQ9gCPUkBAqZWHz",
  "key33": "fXJSGj3yVGJhS6A8j8HVYkrwkh69rqJkSRWFNDcatUZ7VPgfvXHne3JRaVc8vp4w9jiYstDyYJ77Ssw6Q8BDhiq",
  "key34": "2cS6tck7kA2gqWcsL7AewwHBTBm76QX14acD1PG51d7mzJRdNRKepBWedaogsTY5uxcR9F6z6MK2MHuRbnHXbWr3",
  "key35": "2odpDbdsj7bSNmekTookdAe1VrRpAaH3erzbG71yn3gMUcVJFGDWcKeVUemmYaANZ7bq4mhK1fosCKdzvtbunkzu",
  "key36": "5YRq9f993Ajwum9xdioxzq2p3vpVGkyVheBjW56v2hN57YKxWN4o5gxWE7Cd6APd7nEjTmGXzJxdZDvU4kPDb15b",
  "key37": "3pn4B7gC782ygvQDYkrCbzXE1oC6mAXkWH4SiBfSu2fnjKUGLzFMrp7GXtFuqLo9vGHbwak8uuZuwDU9WNJ26onH",
  "key38": "sxT75X8yYt7Qpoihpfm9reXJa1jV2nCtjXz4ipLSNy5oMCp8kSuK3nzg6GFnrWBUq7wcbU7Ch5TbLKVnz2fQMuj",
  "key39": "4F6A2aMa5N3supaDU7aSzvYwU3qFQ3PgUGYzxLzkcRfCVNd1oxjtBP8ETHudBAPMW5xqBhsAjo2VUkDzVuB9uNfk",
  "key40": "3jUPZNpDd4rcW6zW98t3734P1TihGBZt8zVRGRiYYusfJAUZxYwV3vawUYxmWFADo1dXCtB8yGZEXE8hA7p8a7pw",
  "key41": "4FqTWUzYAEA7WE8WgHo8DweWzZqNu3Pgpy8KGVoxk45NqL4L1C1zkzFgahmuZofZj5d6xHRWUz5jpExBzXUckQGu",
  "key42": "3FDvSiztLejfqmAPEEfkTJGdYbvfr9YRknTvhUVTyNfipBkgbyjF4CNoSVYVvPTueKHs5HaTYr8c2e7ca84pvWTd"
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

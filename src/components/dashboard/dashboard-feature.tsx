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
    "2x3KFxG6R9Xi6GaZecXRUgma5m48jjP2CNSEH6hYbNicbLmEtFeKcEivNMk4aYZm2YqVG31ZN8jVKUu8nGG5TXiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dY1KQurU6WA7i9RSNNmiLVCTAFtK8SVbEBbqDrSTrjMsBW6Tu1rsSmMjdsQaLCEfLrXks6yFgPDWhf8tHrvL3kD",
  "key1": "Ha9pNZV3mdTbiy1yy5ycTpddSbp3REV5GGA5evreTq7mV8nTFD9eFJ7CeP5rQUagNBfQ2T8si2tfAhTtBMdvinf",
  "key2": "3V44ptfcA8tEqSq148cX2RA1mh2NVkN3ZbWbWqT4yPGgcmcKXKDYrpS3qnJDHp1NwfGSGUX8w3EHUkZ7qtWKBiLo",
  "key3": "UBsAAEy1yxuFVoQ33ihRU5t51V16xExfGZ9D1pqCm8uoc4d2pBcmUgEKcdzoNrT9A7b41H6w2DtaKrkkh6AaPMA",
  "key4": "3up5zRgxcbRHfMS8fuDZx6usGeWcjyevch8NPwJ4eadHW3wXtZJ6o2t1sGdDPC53zKsSea8qRpoxXsC5abkKZyjL",
  "key5": "2ofbBWHbPzDV69tABsbTDLnJeo5vcnachnfEJCjYprgf8qTo5AyPBoCwZVQFu17YPuyjeNjDDtZpuUDdtqnV9rrV",
  "key6": "QHE2YmpyfDD3wk7HYKiPhm5FnRvoYEhksfDHJCbezUSBtFFNDgHxkPE4Fxi4C48G1B8cvVV2mCC1c4Gmh8QyAeK",
  "key7": "2Mp6FpQhYvKfuvZjgYFHigZLKVPo3fZbs735Qj1p55F8C48QZXjGwxbENCpra1ibRhCFb2x9dHbrxMAqv7Frs2U4",
  "key8": "5YtbgZGn7Kh9EJ3wLrqbHPrp9Q3Ya5UQDB5YRCBewYsypYjui16WubTjHa61gAPpC2p4LzkxW4WVMt6xsbbSzZKp",
  "key9": "Lk1irGpQEwHgToSywcs1i4eGKXD8Ng3G9GLssV7mASTi8GiCBo2ntTaAHV1Sr9kQrQ9rRLa8gqrsH7WiQaW8q6g",
  "key10": "451GvSkbG1SSKvsr1ijJci57QaqFmp7dK3kcrNMpWXXxwmWYFR5XwJoSdQ4knR5H5rAyPH7kejwQxzEBQ7nPXGYx",
  "key11": "1GxqWeNpmQjydygJZFKV9sEryQEyHgnsrCZxgaRGUHW2cuv66PkHAgwZTVhhyW9aTYXWeJS82q8z8xRhn8ibJEW",
  "key12": "48XJgijnjh6HJoKu81LjAqwe2uV17bkRtwJ2R9yrFRK1AahAvFn7AjeJJtefX2bgMC5tr3r5euT4znSboHZCoG9y",
  "key13": "3EsuzjtMtzieMuHYyHRpiHDNw7pF1fPSTdNByux2chKd4uH6cuonXcimg9DudSShz3V4scV9Xu3tPfHVMhasq7ws",
  "key14": "3AyCpUB8joW8ENWpuS3qr8DcSvNARc9629kYCTKpnsRrpxwq4BoVkHdGfoEkgj8z8q3hzLNRLYi7MBK5UgHdM1Ar",
  "key15": "46rMY8weKYWcQbmNUAt41gv72pzsXdbZoJUNypY7efVrjXmgeTh4RkL4ccFeEQZf323g6qJoUx1CBXHDotgfQSYZ",
  "key16": "3fmmuRLbWxkEC4K5AdacWG76pVeo7yEyTaTmWZHiwiqtd8F7Fqu9KCpvDBjTkLy8Sn6tpjtpzQmXxtP5Rwt4t96C",
  "key17": "3kQvmRaWGppusfs87rYYdtufx3cYU8RRDuinbNggVr3nLYBET4sk6FAvKq6fmyVXZ8t73hT3YpiEyBsgk6zA4HTe",
  "key18": "PEANPQT2Y394fzXsiPcWWsXXrTDMpi6mXLN4BSxzoV76149iGPz8hKpiePtzXiAbCpvVerc1UGX2rqqpoPKYuDZ",
  "key19": "3cRzZAyriXUQNpgCKohrBUkT6r4KoKmbpqETdXzyn6dZGQuTmKKi9aUW92rLJK8Y2p3QJvzYXubvaSF9YxctRN34",
  "key20": "4pVPfgCR5XPuiJvx8bTGp4PYA3KZYXdZKfHKUNzqgCoBwaKDwAbZGxC2sRx4EohUmdyN2LwZrhWETSE3YjzPvRCi",
  "key21": "2YymDDNxrCNQDzdD5LihQJnWnYCmebkoxNL6Kn9ySwptVgHGK8M5NQ588VoTMLzW2TGZHX1RQUA1zGQnMxNpJsKZ",
  "key22": "4A63rRTXVrkyg4P2nhUPTV33pBSrQrJVfnRCHf9UFzMWqNg9kPFsXct3A6evs9XhB2ZpczuzttxvLvzF5Ehz3bEG",
  "key23": "3LWQmLxHLuGfUFviD8Da6uPbVUyG8Fm7tAGax1nRS9kszt2nBKEEJ1hKWHJzDhXoMMwboAADoufpqpDqjm1GHwo4",
  "key24": "3CS8jKJ7oyg6ZYeZWdVRLEqexQxAm2Gsqy1bVKQgUGh5A3ejtFFMZf51fxDaFUAS53bUbDfKVM3GkxbzviZ4aSNn",
  "key25": "2v7nheesuZbcyLSADpwzX7MFyQ2nywXRcCV91za5VQFY7N1repd2GtJyU3gsLjsusSNWUqendTa5Gz42WH2Bfsp6",
  "key26": "2TpDMey7VvixF6JjdS7CjNwreKgiAX6WnpTGeYEoQ39CdWnn2x4WimtYhZC9T34TkKBVjsJFYZTmJ3YSSxhphFJx",
  "key27": "2fFBwpeJKmNpKDBrVQZq3rs9gF9b37kC8z5uWiPYQ9zWzaGKumn2rw98TJsr2yEg1A4qRTS6r2xHLbEQ5gi8ef9F",
  "key28": "4SrZRcjLcJcoZqNEW2nrCbqPENMxTKVWPGb9QtoLa2wZRUhD4nRMSiMkcBcePuQqzzLfz7kM9ueQddDQukYVGSbm",
  "key29": "5mXdgNzmbsJqU663qgS413ZZbma6ugvv2VwU4PaQoYY5Jz8a6YWoxMQePB3xL5rSYLXyNo9cFyaC8f7Fi1zdcX6g",
  "key30": "2rWJTvdFpps5fTWvE5EMQWHnwdxY9Qa1a4Yds3CCuCrTYSVGf95qRGhc3ZU92GFuj1YMbT8cNBPF5ywByQyAHuHp",
  "key31": "2rWnwNcYGrBq5kRmi32g12a97GZASAMUxA79xC7HJECevdCHZDcLzJw2HLZLu68zNgwZrVCFiv9NqW96hzZbYfwN",
  "key32": "33MWhK9RVYoceAEzFv1gXMs9Wr5hcmGjhQmqU1eJWEx2PNmUudWueDS6cDzngXbtLPyP6iNUGMpzEXXGt2cwTRVW",
  "key33": "48EcZNLFjEaLNa1G6w7FDe9JXg7kVmVzWst6Kc5ggRH78kQ88Ku5iuAfegFz2Vxn1aFbVbpbb7ax5n67RcCksfda",
  "key34": "3xi4MAm6NcgEpQBYMFJGUfar49SKuUAWhxxPrBcZ2Q2T9McPwmoppJ22bCbDeGTfMd8iAxbhhuTx8xwPHK8eZFkf",
  "key35": "61bcAaJaGKnLVnQ4X2bYBsyE5bqrzujKkrVjs6ZMZuzC41zKHHgTYoyizUhCzZRZSZyCnVUyqwtcfhQwnGLdGWDz",
  "key36": "21aVhfHGpAQXazNiCi6o12JA3iVbB8V7TpgYxKCcuPP8SUiQNnrV2g7Yy3Uyvr24EybMn8vL5CpSf9KvtmFpk7Gy",
  "key37": "31tCscWE9SwvycDwvFXpaKNGQ87nJY4savyHLyfEp3jLggKQkZXQ24tDeV3BScVv9rbhh53UdHzrKNWdbg8TRjbK",
  "key38": "4mvf7cF93XfZfaHeMF2qH7UdpK8EenH8xKiGCZaZw52XeqQYvVMuDXk5ME4reJoqeBxRJ4yb7yhdD67rqsdjHrZD",
  "key39": "3Zq71S5PB68PkfBshxMaQZ53pvwFBdwg4Jhjiuo7BuKaGvbRmyPmzYak44rDb8M9Myd81dRUvAvoxy2kTMxUG3rT"
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

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
    "3Qnc9AeySu9TDiUshru9HQ4GzJND5rsT87gMFcje6ULyBhaRNGW54VTAR7hzGuA6FHNNLCrxKwnBPygzbBTzEDSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzCEFPiGiNMX5HHUJedKzKfCqPJqJuBTPeWXHcgfyciGFfh915KKoTgsUZjfeTQuhgEXsqKML8FyEMDgw4ypme1",
  "key1": "744rnarsLAhYrG9rpV8KXLqrSQjme5myHgEXYjd2WJLjhz59UF2hujiK3H6NEYQw9swwmPt9jpZp3Qp75iyx7T3",
  "key2": "Lcz1pXeGehvWmE2aZzAGRA8nEmB8GvfTjEPqNTTYsWee5n9UjhpV9WrVs5eJdjERJfcpbggg2bkhbjFXdCQ8obJ",
  "key3": "24fLAv4ceA7aoKZpiy7YhwYu41DmoMfXEPM3kEXsW9CvvtDYDBidKAYR82jwovbnkHWy2KXijn87PDSMu6YC8kFD",
  "key4": "4ape2HDp7U9HHGkzSq9JRjGhWqDo3MqQhSGRuw9y2KD7oyzWgjJBvLMeihSdrBksQPXsry9E2sFy2go5Cu3LNwwB",
  "key5": "3LhoYwR2qFxaxZwtNUShxvj8ueq3bKzp7Lqza9KkxoDcbkHDwYytNAajWJkQJkv9X7PUrP3FiTieUVdKADEC7PK4",
  "key6": "KStEZuQF7hmiu6RvpeYQBMtmsbpQNGsvkZsT45K7hZ9LeBcUDyccrKQoVu5eNFeH4mAJHtg9ZuNcoQVMouMhTy6",
  "key7": "5RVP3VJz3oBBkJ85pfMkej9Qy89hRREP7qTgsfehueFJnawN25QkrNpisRLkhCnHkJjvRUHPjcD4wGAdvEEN88mx",
  "key8": "5gPpM2yxQje8jCa2enVTsYZW8fQoZ3vWvCc5byL8cwvRhZa7MRodqqQQMGCkebRVixWcat4yVG99sVUwRMXmk8NW",
  "key9": "325ztTxCeA81ZTwDSLJBWYVzGwU2QSBjtwqTyh5vk3MX2KabEz724ovkVC63g2572v9SGLy94VHVgmHrGaZfaqth",
  "key10": "5xrLRx4jQHkxKMny8FHvfABeFzUuwxaM3SpUMaXctHjibUskGd14sF1UoiqHk98AxK6GoVjqy5NYvDFVQ7bAjZ7w",
  "key11": "4BQMHoVyoojyxW4zni7asmwhU1h3bWnrMZvangKNjAU3soUhd6eLJZWCJADTZnCCzVV2jbaYgAPLipBomFHCmZzr",
  "key12": "dvuksjtFCKuqXNT3rGCYpgArCsQJyY9rASkLuYrZw6jwBfhExHN6xbvgC1x1EMtEiqAbnm3iS2xQH75Q7FvP6hA",
  "key13": "47sgmPJ1w59nEzoGXQ2eyJzDhoUqhBn3RDoLb1QwAPGcRFP9P3azc6qDw3YNR2s6WXM1cbdCS6tzkPKLLCykPAyL",
  "key14": "2m8CYSZaxdipiAB1CAM3ukZ9ZgBfuwwhShgrshNvJQ13qVwPJJf6opE3TQ55eqR5ANHfujBdDGAU9YqhXzFpYbH6",
  "key15": "4ZJbmBXeMAeh533ExozgCq5M7GsDxFCM3WRkFcgjWXuKNkBTUQkYKFPgPX691uRpSBoRwWokWavbT924ebjnjiLt",
  "key16": "5LwgeiAg64k7qH2BQPW9VCf9CLq4mcgPNxf2WJjev4uGJ9oxKnLuBKmvdeWybjNDUDsJTJjoA2gsRpqawkj6FbKJ",
  "key17": "259hNUwrai9sMamZGBCusekna7VoXCnQuzZY9APfs4zgHV8CptFdEsXVDmnrXfawwf62kqQQfM86upwSYk7cZ3Qo",
  "key18": "3yPCUQ8VeehgprcghpXM7Scr4hh4TVSbHzKAaZ8z1BymXnw4P8jUpQi8qZXkNeFEgYeanczPcfA1JJ9qjyMNSj2c",
  "key19": "22mJ5oMyxoXW5S67ub2P1DiYVG2nv6ELLVJsMsgtwJRvJcSG7cx6e8JMQDqtYsZsyNg6qw4FQYZiFTcFT8o63dx5",
  "key20": "BSeN9VqVh1LX9uJf68sZTnDikeoMD3qxxcfPGiipEFHxCCGGXrLokoJMd5siZVGozgKs7vg5sJYMTc1Wvqe7QvZ",
  "key21": "63d5dU59Z1ERECpXHdRX6ZXkxFjoRAdwY93xNH6mTHh35ZUxxukAe4Uv8qW1rPE18X9jaBWxztxo4vKEv5gQB8g1",
  "key22": "2Bb3oUmxypuBLogSm6B6NAKABh6bPTHjarVqtmXASc78bUkTo3iR2Wrv522bZ2fPhjP6PuyAQBwiYHKBWYxazSfo",
  "key23": "4Sj3gEFjQ1ZzGGivafATsRJqbTaNDYzDEAmkK7SJcrjdDKE7kt1hwWam5vs6JcXoAafCtXbynhpBbD2nnompwoCH",
  "key24": "5ZM9hTDvAPxQQih1gNTnk7VLVCLQG6k5yp5ywv6p1XmkTFLBJ8beqWtNTQZq8XvG8XaM4THWNG7D1sYgPoAtTM58",
  "key25": "4Y82pDuejQ5eS1NgKNzkKaqzC78LWR3nZbC3RVQG6ffkn7WGfZKyj7LaUZB8ZPMtETQ5b5rQSAd1JUqVaHzPhh3F",
  "key26": "5KfdMcfpYFB3ZpoP8Yp2YZv7XY3ThkkCocorqwTR9DKwr86SzXcEhVWRnK5cCvm2Fn993vuwtXErecjSSCdLDtAy",
  "key27": "5kP1hf7SnxqRXC1VG4VHrxspsCJzqR8K9YmVCgnkVddk1em2NLYD1M8ZtWkxUPd88xysxqcAt5NVwvPFVkAjL8jy",
  "key28": "3jbVR6tkV188ThaiFbBukDpijDJhL1rzvGo5PeV4gRg1AGbiidug6nT97YGk116CCM44ohSaAwvopKaxNEbidvYT",
  "key29": "4EY1HNKyW3QjEdSnBMzUDZbCcbmVzpWc7uhmPn7cWBXnR9PQouEpMjiNJpUWV1zkaPc6Ug11Q1ZPNtuaPYc7nyMH",
  "key30": "2Z1aAuhaQd3tzYoyki1FLAiExwuqMzh6erJkAV1E1h2tRzYMeSnrsdveuPqWTyoBvU1mTpSXBSFZHZ2bedEBAmF",
  "key31": "AR4nqQGSPqN5x6WHvRGUQHKeGNkvYM3ZMfcPHCguW668Cgc6hctQR6z5E7qhFSWbXD6e3mP5Baf239v9MTr19G7",
  "key32": "AwhuMk5cqSUW4AyuXXiNKRkjyXQhAA4R6qo3rEEziFpkRAC2BCvceYmiDFtKvEs4iw6AT4JJAovTQQ7hmA289DH",
  "key33": "GHBa8yTHzd8HWoCXaZVWShN7ZyUtuxyhuftD4MqCPrXnGngMvv2L3EmJPdnHwvqhQbWymmzbJaBZorRpybXz11y",
  "key34": "2fFF7hCLe5EBijm3U2HKr5RZb5iWFseVbW3TeJFej1AHR8knArrZ8qqgAMtV8BwTWKaPAg5P6N9w7M8r85fLWfcG",
  "key35": "2VYgGAfXPGaFfME7nbAb1m7fC6vyHMDnRnD8K7sfZButiTfVxtrdNeVvuvAkuPJfftW23T6GUbh1MkjAAsoANrk",
  "key36": "5TCAqJfMKDA5zr4CgGdHLuE1VnEoo9HvqUvXhZgtbuTAqVexdu3ybbktrFe9rnPpxXEV5GiU3F7r9h6SXaj7QXcP",
  "key37": "9sTiKZdBfGQkkmWF8Z6YZfTGr84aBRBmgMC27wKrv9eHTvKPfuaKCNKp1QNQueNFZidp5Wv2Zcbs5zxR1AJmmdN",
  "key38": "VvvZcnAcPHV97dJBJuYWrYKYbsQrxJAzGmoBxgMSY5E8eK5Ueec843ouKJ8iSiH9FcjhD4qZYYdSZ5vgKM44yvD",
  "key39": "3gQvTWhCRuBJKXRCva9Djz62csmVpv4J7c973NAScEyU1siXj6JLL4AwEDjGLhhhULuhpsSC9zf5B2uoWV7VrnSb",
  "key40": "5HQ4vmiH8FSBkHbnR9yRnqxFhXHfSuZgExa5YFnFKY3mtJtacEMTAdPwUzG4sPQy432QwHcWPiYuBtvS1Yrh9h2L",
  "key41": "5dfscW4jVQbTZywaQ4nRWg1s6dCBCpjyKkFcyG3E4oFNzx7b4g8Nisohn7FKwn8rxYNfUvMwyJDoMM7HVcfatJWu",
  "key42": "29QnbZAdrbCsXnm4DyDzzzfrTDHgux931NWLmFiKmUHqZNc5V6oX92P6SrawK8Vxwfv3mrkfsDqn6Q2gLv1s7k2r",
  "key43": "3MMKmTSAHjZLm2zGz9xhp3DAf4hqW3FVjbHNoQZQqh6vnAD28AgfG8vDygdYpx7hKEr4JLkATFwDj6yqX4h8mwv9",
  "key44": "5vMvrn63W5y8iVvueC3FPJTa4U4XzMyzvqU1KWyUnsmqAJxtGDHJK9ZAg1UCDjKs1qZwv1KHpherMRHQPnyBpi89",
  "key45": "5MWrXXnMaxjQmfJTgpBzcNquhUupBavaPra4Q6CEKpW56SKXbPSXzwD236xSCf3HrsM5Yi69faQaBrEHDAbSDp15",
  "key46": "5f93Votc2GeNDmebfN3qSEhrdgUPxowr4TJ7PHxAsd7aoyXZyGm66opwT4v5z5STQ9pPpW3VRB3hBPq3ZPBD5A1q"
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

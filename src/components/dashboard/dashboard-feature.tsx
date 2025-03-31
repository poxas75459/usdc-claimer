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
    "5c6cLDdTGwPQqspfmMjf1nhihQTmSdfSucZjCAPBBehaaPuLpPymCS19KvCM1cSDDucESrFeYY1DVR9eyRYscBbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dxA4j9keaMi5kySBrukd6ycNDd85fWdHHWf2C83vwNggBqrwqrwpbKy7DTqEdCRsZoufZzYF5C3naym6dreoP2N",
  "key1": "4Kp69VWNk8M59HERyNw4RDumX4h9vCyKfXNEtV11Tsdajn8M6wgJc2jmg3e9egqAFshFev6t2iAuhUMeHVCNTcc1",
  "key2": "481XEpn7eSwhTYt2pV1kmRW39FS3umGr76AxbXJDyy9YA3pXvoZGKEK5wEmxYxXbbD4C1kZNErE87cqsXQDjdoZw",
  "key3": "2HCo7qwMxJ3GW2ZQ2o1oeEfikznxfZAz2u1NySF4htYHKjE79fygsKWZjdXjrHDm7TqMJc124EFWGwTf6qJQDmpC",
  "key4": "5pY3ujFXmEaLrNLjU9AqC2otJoMrkFDCuzpDA5ahpUrBFpPwtj71Ci4NznUYAw1PNcAa9ztaHGT4r9THMyQnwfRC",
  "key5": "VFsbLZhF9LnBGqwQ3VKPzPpciiKeSe6Z7tF6QyUUSawkmon2Vu15JWk7JTygt93a54FE1GEiPqFFtiNZfSQkEd1",
  "key6": "465s17zQCfwzPy4LMvhwygebpENBXPJVj8uvb62ppfJspGKqrnwTVk6WsByT9sSaMqM6YJWX1ob7MimRvBAFgaT7",
  "key7": "5869FeRJf2dWRyDg6GNJPrz4F68hscdZhMEJfpAKNPuQR2r8Vno9rNB78JYEZMsQdqkX1PKLKr33JC7i4jFkCSpT",
  "key8": "3Fg2x3SskrZruZCsCvWe1ZCv96SE9WUneAC8gT6C7qS3t3B3GRiwo4Uoq5CUgdDP7wC5F1A8dLvzKfuqGqU6NtBG",
  "key9": "5M1uXVuGwhgQhv5URMMSPPG49ehRn7EDS7437zgRTQhjsy9KEHXVM2zEu5eVZbQM5Cu7Yp84M9S3pmAt7oQAkojt",
  "key10": "TkZqf1Mw85VonPJac2NLbKSTFx9K13a91RV9x9zeqQDKduY6obDxBE7HU8GaiRpGpNkR5ryFpWpFzhbKdBx1odk",
  "key11": "4X5BkVHp1mQ79Xp7tuQ4bkdC9GXWTELVLma5fYG6DV49pjYZmsrFGWryPZUhQVhJETsRZCCwxf24e7UK46uSkPrT",
  "key12": "2ZABAMCycdSvz9uJAbN9rQXJZLFjqNt2yoXYTieXKQvguotbf8Q2kiXQohnc2heP3NfjCtYq741s3AwbWXEDp4wx",
  "key13": "X1RwATPsPgUde8JX5JurVCZoVAVHEb1L13skhPq82DA866F27MVoSvTgMt1HfgZZsdWX67SurpbAB2QPnVUibky",
  "key14": "9XU3g33FbpEWr4rAQkQX1FGtuw7KWizmpXLT4gENQkncy7y9f2CxwgbSzyPaqV2Ga7d96CdK4uM3uT4qUNf2k3r",
  "key15": "3QG2HpKMw5vwxQGCE4Lqto1P9ojJb6EWwmhyRYbCQBEnfQAkcZh9HFeDneET2RUG3yPRcQ1usLMHfw76ekF6FHNz",
  "key16": "3GZgS9m5XNJaCW1kLu6gQ3i8ccAJzMe7XUseQrc5sJxQDM81RP3SV4aAxwnoxpH7Ci3oW8rtuab25mhUwca7BJ3v",
  "key17": "3nNHev3Ft4hXcPEYMjxGbFMmk7vYVaks9WJpuCF6pmFzxvRfzhzAhnDvUZfzeinWWajCFV2RxqdPrkVc5XBgXQ4d",
  "key18": "4L4rW7ypxauU4k1uNKvPxzvx8qLDe2p2vtWyp86cCJpDVjcwYKXrCzy9vUB6vsYMR9xDaY6eQpuPVGYEAV9bM68d",
  "key19": "5hiwBzkyVDuw7c87WjPvqEZVxuTpVBUxwf7p5vq5YyDT5jL4dGD6L5G3Liuv72dSJWpocbmKVvy1yjcQy686BCxE",
  "key20": "2KaNadnn7cUc4A9myw8tsTEd9L4ArgFPA53mMBnUr6vVibQTLtxNZoK3ZYn6AnddGaJyoYQE7kQTmEssTQ6L5RCZ",
  "key21": "5smGdxUYbCEqoNhmfDCVC15iAUdRaVFraJcbaAr4qKHGwqEmumJFopEh4ZuS17fCxXZSGJmzPzL2jYN1K1nqm2wX",
  "key22": "2bn1neo2tkVXN9AEU8Q5WQt8juNsQvbKPncAPgjH91rcCjdseWzQ8W5i6FtELbNm66ZeVx3rLuY5aBMiHgRHXnV6",
  "key23": "4ckF4iJN6dheWEw2VnJEo6fpt6Z9QxqN8nhc3RrQVbWzPVCwf5b8TmoGpyxGGYKYeiuwFaKiZyZd7BSQ22qxyUZk",
  "key24": "51NNLKZzu5mdpkNSj5Dkpc5Sa4isL2SjNYdwS49ouaKLHRFz7FFwz39ByUGYib8JHQkr8jAiPxvYC7g3m7mbdRr5",
  "key25": "2WY4QnbdBBWk2zH8QLggzDcXWdmHSbn1gjLnCBJHnzZUhSJs2g6pHV4V9Fsn8KTVkQR3cqaEsAo28vgUey41C1fp",
  "key26": "zCV9d6kGQKsEn7w5GpE6Ce2R5A1t8PTnxfbHQYjoBvmLQSS1QoKXcqtXp2D3VBDVLnVHzGfChimG36zWjcpFBrK",
  "key27": "pcWWgbQDLSxXEHNE1tUFbaQLkCvcZ1oz7XxBqp5c2iKuXupNEobyFDLsKzcmH45ELKNPAQVWFZtJVVB3BdRTnnY",
  "key28": "A5KPyFmLccNjzuAa5bJCjS6Jdej4SDV7AAScGtsA69JXzMzY7ghinkxhAB2R7Zbumag7tnFb65r84s3mZFeoTJh",
  "key29": "d7JGemZ5kfgZS2x7a2TRJAKdqPFXFqnkohq8jnMaHqU3BsVkhUgQEHheS4QkCeaxe3Li8k5UE3aX3gBZUmrgVxT",
  "key30": "4eMv5LeaFjXRq8ea3gSQcsyaFLcdYB1Lt8NaLwReRaBecztBhNUoi6YL7Fdb5Wogbb3YDNbb9mBfcsZFxGQ2P81B",
  "key31": "4CowGCTDuTyy1WfnHcRrZE2o4vKbeWESvuic8R8hDVpiDunsNakuyfcRyhvMRQ1iLVbe4sYHpK94b4zcSmZWRcxf",
  "key32": "3b3xbW9ZxpRxnauF57pQuvLErsRVTTBJUqAisBttkcWPpEv9sCuYyaEd4eXDCnvHRjVioow5y8C4vdvFdB45Xqs1",
  "key33": "2UwFRcGM4WwNBqzA3A3BoiuqTAs4CLN88GWv1tHxhnEEqmQPxKnCRWP4xq1uxUHq8r7tFhSzEFMCc8yCfwMzame2",
  "key34": "29mQupsZQoFCHaC58ZSYrG1TqLGpKG42JAWaJ5GKRaBwZipvXNFkCz4qZhwRCdTzuiHZ9FKBAJNgyjXxhzyEqgb9",
  "key35": "2DrxgdfXauu8Uf8A6zrpq2EcBzpEvnc49vrptUn7MY9atMZ1k3pYQ8ynom7WCP8h2GwjMPBh7q6z233Yf8EP5EYP",
  "key36": "3vNd3esigjeMTF8PVYJ5eW5qk5PPj4PQadUXpBbJdcuWCRjMGK4dM1aFJpM2mfd7j7XjftqHK3TKPRQS66dg1wPA",
  "key37": "5eim2HkyZuJGAQJbpynoFWzNVT1akYwxB3HZNhFhfYzJbMkpwomKuJQorn2xU3brjJhum32Xdk62juQi9xLbG3g4",
  "key38": "37CtPdfobg8GQ8Jgoii6tUD9S7FfjbehnWaUS4jEf1zw7rvDAjKXJoHNgpFMjqjfp2hKFbZCUWFmxEmmMLBuhJDd",
  "key39": "RhRJT2Squsj7Y4RcCvHPzkD7zKijvGeJFfrZp18tUCFzxb7itrnbPt1odmdS8Hy9Aq9SXLKmkPRoHP9MyUmif97"
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

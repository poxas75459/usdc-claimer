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
    "22dcdYYJU95x1zMHz913XSyqfevWef9WTgBxkVqudG89yYSn6U3YmWcHP5zVgpvQzhHMvDCt9qvBDLa5v7eEm6Zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35djQCsAkTsGDUe2iTuw1iN18fcuuvNuvD2gopbqxVc2ouEGTZCmJAG5YuYygLs9BSFiPUBxLPw6McScjwaXQsT",
  "key1": "scxDovmMuwEHNv4oTrP9F2hM9cFrmeqoaTk6unGrG89QuoSNywVnzYVHZ91KbkMJyN1h8eSHppqffrfN4vaKpni",
  "key2": "QuZV4mpJZPdpqwppRUWG7X5DUqKpsHUdBckgFutjoyYv3iS2FCcHGGCnS3A8oarmTFb2f57zzpcSkbxTdKrn2Sh",
  "key3": "34MfBbTzZfL9FnpQhsFV4w9WRvE3t5ye68zB25b9SBtxv4YpKEqeaXvgkpF4ESk9LQ7TdgEh3esarjBqA62EyfCj",
  "key4": "4oHbDjWrg2NbidbsboHwywbEQ34D2RYosnLFs7LhGUJUnRvLRbrT9U3D5zFYzf4N8eeXpqQp45BiNRiWpSQahz2u",
  "key5": "5MSzMPeTK9nYcvWKyiQJzdCy7jR3h8zWB34SoD5bAuMhRFYWCpBu9FxmZoEsc3hSDNNxZaHn6vsDtvTdxhJAEYim",
  "key6": "4kTpT4SXtwi3YmxkqTDeCpYP6dHYPpvh1pk9bSaAHdQhXcW3oLRfFE32zZ7PHRnwJ31QsQTShaYjoUE9RSvEPbGx",
  "key7": "SDAfDzfRyS9WahmkR3TajHQKUtPC7A16bDuqcvjBaXCtedEsViXR4JvG6adBw7KaZjD3rF59SeLNVAD8AqpoKxc",
  "key8": "26iiQKkQkFeRahrQMYTZQ9t6svMJRxa3Ci4LiAcq1J3tKcwSxitd8NsLvahgfCCnzb3rQUwCXZ825Etuhu54rAFW",
  "key9": "2LpNEmMEiyHFvbco7gkB4TNf7ezcwRae1vXzUKtrjCVnV13yxzR3EHKRgZYsrtbN4zgLcBhvBCGG4PLexfsnziR9",
  "key10": "3kC3FtHbHgVSaU3PuEx1emUikg6AGyAKzqy5cqKhxuJEfiZLanRKE4khzXSs9hw2jh3qRqgW2qbNTpcc2e2kHHJ4",
  "key11": "dhjSRFSRA1tyPpZw7h54fKtBb1ATK8psvmBsQqYxSQtLCBMcvBVvazyDs6Fpc6eR1t4uMEzbBAxsbq2cw55QZSv",
  "key12": "3JrxQB9TA23o4Ab1ZgUvXYbtXZkvn5ayyYghbZnGA36R8zHpcBbYp3uoZYYG4RhBCkhTNetzJRV1GL58wnL6qTSy",
  "key13": "2edQeV8py3t6UCYHWMrvA1GqyP4c7gofsEseeCzMDPmAJrB7RDwippcg4J4WqTJmbsjvLGyLHUmdmALL8sr4khze",
  "key14": "44JG9CE2kwuiaszG6zK2AczykavdCenLBijcxTTMCFmNLLvMqwcccmH5b17hcWfVxpcFhjLmaFnbfaSBCQVtDv8M",
  "key15": "2vYV9bfRZEnhg9AuNDNKsJYwwbvYsNe8YguYstcm5XDAwSU5CvRKVC7F8R9r7hdMuhUQWzfnxtXqQXFw4LdZAD6Q",
  "key16": "2RpEVwUKL3BYUj1WqVL6GHjmawDdMj67nVNU9PTXW6nUJTJAsoXaggTwnypqY1drDxa8LY5nm9S2uPXE4mHe4Kf3",
  "key17": "2MpgkfnaCG6rWWNhPvhNz9b28u5KZ7PHaq7VGpySi2HdS5Da1y2G5JuMQ5WN7EwFwcFmc8wQ4ExgCoz1RMm5RBPv",
  "key18": "5omeLrtUCwPUSrveN4T9NYaDMUkcqUFBG5XEAjdk8UQxGD57rieTQvVgK3zXydCJ9KAsHaCjWr3EkSeKcWY3Lf6v",
  "key19": "4brZBnWysBNXHH5doTMuZsHY1vWgyxgBNfyyhwaRSxfciZPuCmjdfCeuFc2bUb8qgyUvC1WsiDNxc4mMB948gZP1",
  "key20": "5tXqZBvUVo8GZZESR41T3WhuFYcMRyjVP1LZRfhpESKb7ayzFNrfUxstayGATc27p84xHArk9Tb1yBXpLoARfaVg",
  "key21": "3BychCQNAEbhBGWd9vScPkStgos3LpgaxSg16oM472WX2DZA1KNAeBnpMbRqezfePifSmPxZLD4DD392356XeciS",
  "key22": "5aa6pRbqhWC93CGwoQNrZEAU5K9RTKJ7SonNyzD9GTDBfe78jj9qk1YkCq997FV38z42xKGyDANF7GXaQxC7TYEx",
  "key23": "dhaSi7gJvk2479h3mmkometZYEMqA9CMNxZU7Hc8i65YeeG17qJRpKfnGAemEirT25n9ZetMYZmF9CeFYA5ZD8X",
  "key24": "4k7Vy79NnxH5HK3CZFnUChkBJQfuDFpwdNCGgPjJewPt8TpPfurbyXC548xhjsRq6unwwDZPmUmoCf7vZVLzegtj",
  "key25": "qUurx8BGNUv7KM9kjLQ6LUHxb5Zoob3vAq1GU2oHVzMTwDS6QYiiJJRGPd1a5deRukrcFXcJDrDAQehrTCFoBPw",
  "key26": "5R8QzBf6QNYCB1MVJphGEaWGKgZXmg6i2f3hRwuGdCi4AuuBGNnQTrgPWQB2ym7MHw7WZCdGpXvHqUoi91N8vj97",
  "key27": "5UCExFMzSh9TpkRWLC5SjMPkc4ENnN3PkcFmLExjJQwjTcrQtwEgw9YdZzXMMZKHfLtLKSiRgWdqjYv3ZA8M1j26",
  "key28": "4b8UUgW7jmDGVRcY2cthccdgiV1JsnwaEgSdWivnF2GcdvJfpzgDb9sftDbVEMhPQcJsNkhgM542gr1qapAKGzEN",
  "key29": "65SMzMQRTrTc1exwYDZ4WcRAcjTHRn2hy5uo8ri6ns2BWweuD99hp5UtdoTypSro2fUfXEsHdGWikrMNofJApUCw",
  "key30": "53yScwEo8ZoC8kkMNnisSLSFz3i8Yn5Zt38qYnknUV6hDYYGfDhFuHNdcXqD9LnSabjSEPYxJy8E85NbMyLDGpZB",
  "key31": "42i9MRSUzW5fo8JHxsnEu2qHvB15Zqt6jjpkvubV7gHetmyoHdACFmDVAP7vjoyc1HcF1A2nXsCxHN64QvQVG3sD",
  "key32": "2DnAMByeorFRGxkGNdAcGU7v8TCQTHWVaXxguXj5YPgRKvaD2L1Zh5istXsQ9A43z8RmutCuGwPNwtZ5M3RCtDkx",
  "key33": "4qqqPAG6YbiywCxnvgL4kn9RgKN1e51f9ijfBpDgL7RPe476jY8L7D8pxsZpv9mNm2ed9jxAL87NjBkfq5hh7cMM",
  "key34": "2eHacpmFNVQHbbJxcMTMxyoxsjkYX12niowXv737SDfy3co1ZPisXtx229WbEs1Brzq8fn88sQArMCEnigpLD46n",
  "key35": "hjXzCTyyTqbJoQnQ6puLeV8nfjK9TkRXDnUCeCtzQ3FBWAuiEWrWZqpzuy7qgvoTSUCV2FpNatrt1G7FQ7CePVM",
  "key36": "44Uduze54yecJxJXGWsob3sCG4KXgpoqTLMT8KGQTMp6TLPjofjsqBfCQ2VpiA8F68mpG5XvN71ATdQKLeRqh9ZF",
  "key37": "3mNmDSthnaWebGXeqrWtS4L5ezajgij8tDBfsJLGgZaxN4jkReRyKeuGCJAqC9TTKxD7jFuEAjiC8L8WV4V4hvsM",
  "key38": "ENFcwxADRLK3XUp9BeZ6XmuNuSUYWSP1xjv6KhnYLqLTTE7y3k1po36t2g2z5CipvkcZ8HZgbcvAVJdV8HmLzm8"
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

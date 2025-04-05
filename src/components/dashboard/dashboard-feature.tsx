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
    "5FyLNvzLK4cGc3UEjt2AF8nPjZb5wKfUs2F9MMR6KKrd2cmSfZW8bPrmv6LbbduEgGELGn655iKdmJGLL2Vrn24C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XCNzLDKognEJrTcXnW3FngiFYJU9Hcsk5uH7hFzrJJS2ciHJt5xYM4isKyNVCFxJq6wJHx6sxVYkuxvEMd5G8zC",
  "key1": "2fUbmueoXGDzSG6CYdvQXMiGUcnkdQ2u216mFoadHfpGtfaRYtFcsQyX7MMaNZd946KAnufouvn9BtLMWYUoT9L",
  "key2": "2jxt8Nr9mxdbsAjM4qRpyKj6zERDbGPUCb949ehdonMuMwSSrprxCYBYz2gdXUf1FAirGyfNLVzrCebxYPofeGEz",
  "key3": "2jExdYpyRCFiyctzwKPmeDRa4ZGApD82F8854rsd9XFmQZ6Sdi1a9pGBuDsgDcekoN7gFTTLx4wsKXi8d5qyUPpn",
  "key4": "5rKZH7dDfGiKAusQenVf1V4a4XL2SzXpPrif1kFt8taRtmHuBSS31P5tRvarTsn95B96wQ2K8KXJ3EWRCkk6qaZo",
  "key5": "5UcddxHQu47wEWEY8uAkQXEmL1ZrE8XA6or6vG5ikDiosijbYUrycmqsrNcK7bRhCCkXkrRnwoyxhDnxerpfpxkT",
  "key6": "2iZhiKMArrmNnM3jy6bXTLUeCMDV7mfG3Un1b9Nk9yqBVf4ZDkQmkFJveUZANZDfWUKayhSeqsZWbhe9rcSfF1u7",
  "key7": "gpMx6Awh9MsTLz4nY4Jy53N4Y1ctHRAVeuV3WzuHyrdKtLHvhEqkepmra5VDhMqeHeiM2HU2pRrbSRSreMBCyto",
  "key8": "3VockN4ofxvwzkJHewsjokmowpqcRqrUqFmYQiVEw3JLBnJKB6aTBgwKmnaK7CfMiRHWUjLnJLVAT5Z9RNvnP97M",
  "key9": "4DFDTZbqPqigEL7XShxUu1qk2zpoydVT5htBDyPXqdf3Wtth16bxmN7SNmeuwhR5JBhAKy1Liv82aZLETUbtZzym",
  "key10": "4pqZkzKWprfQhAef9y7kABQWbAiT62BYzeumT2VtwQkapHyE66XYeiNvftpViPXozD4hSDfnUHr7iRrYC5tVK9JW",
  "key11": "3RrsMNiPcVcNgeiVbiMDB3g83soLH1mxY21a3cFeXraf4M5TK6ZDAqsDhSecQLWgLd2Unpw43dJMoKna9Huuemm6",
  "key12": "4EsEt7p5nYaxSEFMi88uGGCr55oK39m4Nrk8aXAdXsQFXf5bs8Nzadid6VJP3DqpVgjAnwZpFy8k2wExrryiTdqQ",
  "key13": "22LS1t8xfuVFi9xNYUgrhHnUf7JJfRyhHsuWk9ykXfzfbLBoJvpfaMdBSBbC9xM8GUp4GMAQ2fg7rFGeaVYZvKtv",
  "key14": "44Xkkzzo2oX6BtFhy2CvBc4yoA6fz3EVAMA1JDUGvfBsSA19D5upjrEXsAL7nn7eDoe6V242ChywGsA9amzQjVNq",
  "key15": "xBK1JTmJrKDhm9ZEayH5fkB4kf6rMwy9bABVcAMH2ofnoWWvTMBDd5fU94irPsvCavxEGbkWzSHYo8ci6SbRJRn",
  "key16": "UfeTknvSPe7GPZFsSPouNQFHihzCxAy1z6beYK87NZUNgPL27RJKsyesoSicaQHmu5Xbhn5KSgjE9Ps2rZbyLTw",
  "key17": "YAoFDdng8g8fcH9HLtopZ2gx47fVYR1ei8oLpQ6pYz98ntC6B77t3QGZ5T2Sc6sTrAqqWtqPsK1UnRL3QKnt5mC",
  "key18": "4jVFnSBkZWEvjMYPn6mjFfi3UMGkp2X5NA8KUrThJhdtmBSxi1zapK5biVJ4SRAbPcbqUBGCUDzKkW68RzBubzHZ",
  "key19": "4pVxc4LBdcdEQg9CDzSC5MGHjcL64drhEcYZDggPobjwCHbd8VZxb5YyjiNHnh9WqQ1LWxjE2bkzhPah89wFgP4S",
  "key20": "34MFYeXRfnqRykuHdtHuhXHynUJLkpLhQwt7F8X7NNm2of4Pv5dqxUV9vnKEQkVYdJSYopBLgbUrxNrnXNYEYUit",
  "key21": "424TLDoy4dJZS3bL4JozZVJk9wJfyH2wFsQAJoA4SkPCQDCENeQcRQX3tPtAFR9K1GJxFAgLtrp7cwNtBRjmXW2w",
  "key22": "26bHe7RYWHc7Uh3f14n8n3L1F5A5MUae5AW6hmtsn2opFztTy86BdGbxycAkuaGb6L4e38TujmAPkz7128gJXDSW",
  "key23": "znReCGn5nPfybCsrtfndMQZjhPCgppx62zAfjqasZCGKUS8XahXvrRPBCBNEcQ72YFXUFRtJa7NP9Wfuc7pLGgV",
  "key24": "5SgGAQyuzSMEjE8BUuBoHdHokh89XnzyVhX48HNs6BUWyPKbarxVtb6dJvKFzHpU4KEkSbL8SgzdqFdJg8q282AD",
  "key25": "3iPWF7NvebMis4DguWkQqykMRK7o7CydNaEqDTVFHZF7dwkVpBqBghEBmpT6eWpRyLFbik2yX9kJi9VbQ1JPyCkm",
  "key26": "3dFFkL7oREC4LeKv1QUQbKhqX9RhNiViQr6WiRmwKJxPzUj7Zms6Ag5ymRxx1JRvfKEi95q93Q25rhRdbGeGhuBp",
  "key27": "52zMVt6zzgkMpBdD4ndBWa7KLALHixRBiRRWTpy4f4p4EQ1xsTuoGKwxyepRUAaRd7UV8EU574meCmotE1XMEt21",
  "key28": "4wKRRe1byJadbndNBAwW94rD6KPNyyC3TgkbSZT7pHJzkXRUr1Zh3rjfoCg743sUBqSC25CF1xsp6jR6aDZZht3C",
  "key29": "5sxAaYjrRBJQVJZU8rJhWM1YfXkN5yjiZp2gQc5EeLiuLA8V7Kak9Vc3WiEFukdLMyE9bVNsUFm7ex9FLRYY4V8D",
  "key30": "3WbZeWuv2jhcBFE41FeXwmjUnYBGFjsYQko1Evet9asxzHpKft8Yd8kUXqUyBRSdGquCBtKsf52dwXdaLnAAY28w",
  "key31": "2xC7ytvAtSVeH1m7anKn7jhrLM2Ls4SnfDbBDj6ysFLrwgrc5kBTdPx3Wbcjzx6Pmki8rAhtsgbs5y59EZHd5fLD",
  "key32": "hMmqmEHBc9tQnMHHmyYoENSvq6ewzvgSgdGP6nPKghSvwZ9vxs24twkt366ujQ2nx9xqd5kjTFvFnVr8Rw3SNn4",
  "key33": "2yCsqfXKWUWiQ87eHcYJyVPPYkJUawQ3kkEdpMGcMvURVuiZzUtWgHmKrHdfgo2TDBiDxcWwWFkuzBL7G61JSWiV",
  "key34": "XKCZfLJDViDPcd2hoQoyGuZ1NAqb61UGudh4yuTEmekUTvD3YmAG6DLne9vi8iPaDF31BKgwZyczRhVtHV3eQeb",
  "key35": "467a1xTHoEqu18XzDX7NtsZM3vjZVQEsW6p8PTFoWVHsyC6XeoN6VAKXj9mVpikqVRFceifsKCc2E4TgEEg1HeKP",
  "key36": "3HF45WhLeoYCwvVjadwJJvgJeh5mAbzKkoWJgC1dppQCJFSpSpt7nxpjqXJbzSpQmMTyYcvmQCH56KnxPmyUt7Ks",
  "key37": "4DMKkiF5aZQZtxgTgdHPWLTs8iYU1Tx6Rd2aVp8pKz7naWRkBYmQgVvUjmwUiVhBbxTZZWwoxpmaNicqnAKaiGej",
  "key38": "57b5ZFj8hUeDQgKfZCh6c8YjZUBEgqhTWatkG211Z9j3zyKKS77fa9QAp1VxNCLHpEDEvn7P647JuqbWPnP4YfKA",
  "key39": "9ibW2zD3sGTy9wu8TtKBr6MLAYJ2PEKPzukMYAVBmRqr3w6urtAR1mKqbBWQxwyFFSWveyVQ47Bfw22YnJgZ7uw",
  "key40": "DY57WeJo1bju1HfmVHtRNnyCj6cddueDmX29w5AzRRqXijrUcP5mdQZZMEdTNZiaJMwhPwgSS8frzMEoLHWtWGf",
  "key41": "2h7pf6vTxf7ohv6Msjz8xdvBWmWeU4J7ijx4cs6He9Wwm4KNGdvzt8ykfKGoMmcwyWzLNiuQbGK7wNTuv9p2gZcA",
  "key42": "2tNKhh4dvju7brfUAjwLBb1LmRaXf68uRrSbSvte2yJqRqyWj3mThufkAJvFoz8hQtzMQJF8opyQtidCgkQeocNc",
  "key43": "2HL5ejFKAeJSkCdYG7TniWxr2QQFkrsZw8DA6wEyieD4TSsGcgqz1phXnohnXvv4oVysFmUDLqWZ9eHAYddjFDE3",
  "key44": "41NZ6zFgzcNFTWuuu179jPCH7jh3GKeVuDuncxfEScouFqAvtuWouz1nFDBFBnDFHuPfMnc8qx9ooVf2p1wDV6L6",
  "key45": "4FuiePrRgyRFPXZ1FJBCn8juD5YgpmhpGAELwkA2Uj2x5YxzJDUkdVNcfHzedAeF11mcuUzL41zGR8FRpN47gXZM",
  "key46": "56DQKKZsXfySBc4MpfYNQ8JNu9LkCfC5fSd3tpiLoQR39jG9bVHdgpTgA96i1y2j34QvGa7AbndbE4KwDBDBTHUt",
  "key47": "5xJ1bA7BgQVESFoznK83doyvviYLRA4Mk2tMuxKPLC8UkQ2P2AfxNPrBBMT1y9SMWeZtVYPZkUp4hHvfXmBJTgVx"
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

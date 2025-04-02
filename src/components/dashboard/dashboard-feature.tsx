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
    "32LZTBSRcN2xrwLWRiByhHpo8URg1FFUMQgnPXTb597PMNz5e8Rck3xvPLdBSfpyTTy9yFb3DFu1C11ZpjNXfjHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhhxN4J6UYU1C2RvCWwrHi7cU4w4cNPXcg71itgwQKZ2T6TwHnHFevrNzWwASMXyukpN5xyZ2morUYA7vMSDHEx",
  "key1": "23vRm8LaKu16ZZmjxcpiwG8daau6nHcRmxKAmEs51UnXsKLgpAP6tzhYg9EGoQg82ZpbB4LopL76FFdPMfDsmjE6",
  "key2": "2svTXGxYue437gVHCiCnNPYH4UeQmqP5S2UkXudHvAwpUnZA25zUuw7zFP7p445727Ufhr1XjskaJd1M2Tc7CJ5m",
  "key3": "4pjwrYGvJmpdoAE11vpzzVXN6gAmYrLYpwi7ypg9nwBcg5JR1aPkzBPNnqhpz4aMckGk5JFXwghvrgUKmWygnHoK",
  "key4": "4cCkC19E4R4yHcAY6DxBqFCaAzBt9hFX4gyX3AeQbiSCed1Ea5uCwiP9WYXp7qshEV8HMzvBhrc3q16bw4Sxpwg",
  "key5": "49LqpdA6YEy9q4xBTgFpDLd1bYNGXgakBwGdMFrmpawa2MS1kyensKYxTnfwJvnH1Rm4QPxAsWJssA6WoTtGGUVu",
  "key6": "4XpJfzVkGdChFvEyRWVHEpYVrMTjPzSj6Cqh8weDn5WoXZPMN3ji9MCTvyx3xSyt1o5NjmNqRJsoPf3q2eujGBf",
  "key7": "4je83AgivzZeQVknZLLgH1g1c4AX9Es7ovM7bhQ3qyHxtQtScNyKesGmsjWsKBPn1NpE2fhNDUJgxrLMgjiyKasa",
  "key8": "2xMmcoSh2q6tfFQ2vTCTeHdBaFeJc7Qq4CbhtjoCL1fYHRZYW6DYDBqhNgr5rPPEx876LAVcKFKSi2JUyJ56wDdw",
  "key9": "4c6UsGarW53pJVgRUAmVunVPe5ppYn6Hrf3m7Ecnxt2XYdAzVYrUVNsJwbbPhV6eNRu85M333naoEnn1XBetCsyK",
  "key10": "57GUajaXmRHz3BJ7ciCxbAzt3DVShVJ1gt9f7HJeXHjZ6i31iMhuJuLRt6r1JghMVtKVjH318Tw57TrUp7EikVgF",
  "key11": "3tAGY2ZM3ymHkkeMASKvzU7UBP9waNAYKZU3LRLBKp2W9UfKgqzqVXNNG4rR79pqeEQYGmbxjwkbsFEZy1rvXSCk",
  "key12": "2ZuDZ9NQ1WNLu7DesJxWnHh1RRrW4cdgf6UiPrPcMDjoxkapLAEYcwRHwtZPhGdK9EYEenosfv6vpyQFkJnKUgr6",
  "key13": "3C8hPm8W5smgkZAfF4TmLzdqDg7f3dMZnDoMr2uubwz6wFE6YmhR1smc3xqo3JLyFxyFuehRtChcR1vrnSXESK7R",
  "key14": "2TwZ3yBApQDjHbxCzkjwPpGEzYbPesidz9ZkXJJCSrjdXdhospkMiywL8DfL4EWrKPrM6rJuHJd1Zb4tyXG4QrLF",
  "key15": "nDDEuYNm9bEJiyS653e7NVH7CAT8tu3jFp67FxUvGU5usduSM9D8xtYJAeqJQGV4eqnE9fcXZK7pXfU9ERQ8U23",
  "key16": "AAxXhfwNnxXXbqX4YGenNtRGFTTvnnNFoYgChKPRGL2PM14EePrGuHXeKneVZpjtMiXnv9TecbdCzZrj3Zkp2fh",
  "key17": "2abe6Wt2XgGYFRgZEBkVF5fDzEupbEzYcMuv2NEBNAdPEVUDmbjqhESivARDtYjRNiVGGY5NC2BvSRBoZPtzhD5K",
  "key18": "2o7itrumWj8et4j3yEVnUkLPXhfTq4Jf7Gs5qFQEVhuS9xt8ZA2dBV8YE5ZDBYo5QtRfGPMCndCF4XjuVYB8U9P1",
  "key19": "34v8dommXhSGvXCvEN33XJLE4WA6N17AYqun69jv2MHy2F3gPTdQvzV7PY4p1Cb9EThDGnX6J1yQUjVRchwxtwZx",
  "key20": "2EC9G4xsLUaXMRGZ3dSimzxnnun7sMxsBCeStpXdPPPT9QRxUtjSvC26XuwNVzGj8LaDXaCyrJejjcGuScN3TPhz",
  "key21": "6UDTcxMCZUdJCtu4z6C7tQwLXgmLApWYgv4828y4JjwcFSLSUscs9q6JM2UPFYrGtRCCHPyjkurAv6yrE7KcYbf",
  "key22": "rqgxdGpavuxfKPpcz23vxxY9Q3p1WHA9j9Bp9xb91bUWUtRrwTk3KszK4VA14LCxmS5gLvfXEmapdorQ7XufRRh",
  "key23": "5MYFWTYTtN3HYUghyayYpS6L3R1YyrPAJDxHjxxL9wefUrYfD6mK4hy8J1i2n3W3UjvJfBRWQHeR4k7RKq6SdmA6",
  "key24": "2WTdAY3fi3RP2foa1Ap9iiaiqhUKaM9bC8WmCwk1PzJgSbomCrob6yy56WTVFg44JViBzt5SX9sTgV77Wy9fReDH",
  "key25": "2Agj7a1wJGZaiAToPxsXpQ89Ld42Ryd5nw4VXk1u28rXZfcHuMmUxCVd2PW4H6BM67ULW1zc48xt2aT13bsrrUtJ",
  "key26": "3L4B3yHboxY3xjdhi7VA3Nb2CDDFM7wtbKN5YyvZ9XJZceqvUtCmgiHT42ckw2n3V3MVb3aEByKQM8z4GikEduKh",
  "key27": "3kX6ZSNZFHfLk83CP1DLnDApzwV8Hyu4QVPdRTQbhV54wYW2STkT8sqYjyKUdWRipwAutCfCXa7fJsXXXfcuKMFS",
  "key28": "fkW4D58bWp62xXuWcZX9CWdgqFvGgepAbBADa8GJJCRFSQ68Jm2zeZBVGNtq5qxx2BNXBgFma5ZiNHsDMG1xSEH",
  "key29": "4EP4bmuuRW5WozeUZMazezvCKMbdUbYu9WmoXq2uvta35FsoDkPSKsmk5E7JgE6Fk9p5YVu7HB3VU4RiLaT2odTA",
  "key30": "5Mg557LVrHRNiSu4fBEL8k9wkrfwWPEbb8kTsMTHUETvQFjQZcjyspDoaMspfKfUJJsZnVvFQW3fmST8q3jjeG1u",
  "key31": "5KPFZGtz3TSZ812SAAaMUeuKJtymtb3S2YbUKZMwYgPC9F6pQ8GTBiVbjRbFH7N8qtamEkRF2NV3BWFdKFDh61GL",
  "key32": "3TDn72Yr4ixq4nQpxD5yxQ9hZkUfPUGoHtLrHxX3B5mu4deBmY758PXvhydEvXze6ni4ECCAGf2PAsRQVwFS2Hna",
  "key33": "5WeYsD7umW8i8QqqFGXzhaBhh56rmZ5Nt4qg3oKqKdut7UfcsAtiu3rJ91cQZHuAHUfcMh2LvshGPtq1mpvT3KWR",
  "key34": "5GdjLX6SarFVfxS7WrzBFc9kj388aMN9NrBF5LHw5FNEt5kSP772rQ4ooRsAiTEPFgGTCKfnHxCXWYfqvaQUgr5d",
  "key35": "4Ge7L3Muk67ueRknzjwbcGX3z8aAPz8h2GC2vyvQcRiNeZPtChw5USUsfU4sGpyH7o5mQNqva3LqTeVXQiR9ApJF",
  "key36": "3DsvGdVfgQRbyV4HfTxVZVJkMdB2sUuVK9Xfk71gthaPwBtvttNZ7xhzvoiJrZtfEMRXkK5VmEsDroDsqyDXH7dz"
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

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
    "3rsCDsdGd3KqmpahbdLbQ3JSydnid9Xmi8C9BhTxPzDNq2jRg7ahKeiGkymCNYNt9vUtpdCn2FZeXqNrr18MaKdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XdtAUUBZkNyvzZYTYkQjMBbUjAAY4eiJvCNBnnVMe62gXEZjpaTkVVwNTasDTzvarf5dCmzkAFFisrovx6c49R",
  "key1": "5FPgrt9rTTGfnc6ziXoCFqrChPMuLg8idCvTM5BDPoB8FFgnt39NBqgTRxm22RQF7fpmc6FjBxipyZkQkBQuDnu5",
  "key2": "2FJ6pWB4uFJCQeKFujCDeimS3edkx7X8xEDiUCdNohFvdDNiUitbX2D1hQ7xRmwhmFr5488TRaSdwuCK7sjrf4PA",
  "key3": "LDz49dHrFx8DukQyYZfA6HcwKBC7j35dWETfvept2eDQs6D7P5PRWNdnodTtK8YVqwZjYyT5nCHRHyZ7eH7hmF9",
  "key4": "wxWRiwGJ8j5aTNjc9SbEdqwq5hCM398oCwxLDtR9u8zejLtwjjkfHBsCfBDkmbxhfgXcBjQ6GTouBZZrqbXCnK2",
  "key5": "5j67MQxFM9pYcWVJJG2HDjGL3KwmcdAwjTW8zfBhTvJX3un5KNqMEvvuYAJ5hUbSqSaFPQP5yTh86H6eim8nmztg",
  "key6": "5xTRHKHzZyNH3J3PBQzEPseBBQUUF2SwbFF9SQhy7CuTYpagyt8VfHH7UEHt1MrXixjX8CXAfBd6Uftxb84Rikjd",
  "key7": "3awW6jpUTMQQgWBJLkTQ87XbBdDjCinhQemsUhmfPNUhPQyk5YE9u3EhFHDP99RJxtZWiJEZUtALg37zXgSWqNG9",
  "key8": "2tJRWaPw8qLtduTGJgqCaPSNk2hxnW1p5rX7CPjktbAiym6HB2ErV2CLTRKUsbpL7VUznAJP4qk2cPxF4VbtVpD2",
  "key9": "8sA13vJCbcBnhFaF44jXbL1RYyySpFsnnEo8wEqdtafese2TJvFe5uzt62ob4Kp7LwTcADnGQBbXnhvHU7jeGMS",
  "key10": "chx4oN8kjCVGEAR7KUAmtNpGiKHDkyVULaH6UtFqHKsVH7XTwzAptN5tj4PvviY4KLN2YUVLg4Ti9cxnmdJGNrL",
  "key11": "4T35tLLUq6uaBrtP8RiKJH7RsKDE7FCXmiT6tsBg6E254Pr6YpY8MbhzTJGxu73KPjF7ujTPKXumkFgKzZYvE1HW",
  "key12": "4adKvJxWsWYdpvaWbuTTQFt2VRFMgB69v8AyjWr33qAjUpPKbstF3fgPdcN4PABRXReeVydAPrRnGCkv2fFmAUKp",
  "key13": "FArJfedVyDqcuAjtW97iuoVkbCZZEs4WJvRqHRVGJg8nGsgq5yQTGnz3KZtNAGrgKVomCK2apsKsMeF8sbPDRX9",
  "key14": "63pxydLUTxVt1xm2Ks1PLDey94TAHDGNaCGWRDUUvbYQssRvjCthNtBo9vtfygNE5dfZTukRYQ9GPPYQ8ugv4cKc",
  "key15": "55dYfnQHqPF1utQRKQyDqrL8D51WRS9QkYyost9dMiiHd93dqVmGXiFSisHvSdQ2ennUV958znaN8MySXZ2XMhx5",
  "key16": "2EiRWNNFrjnqG1uZp9ZR2o3ypk4SmoTSpwnneVN9QA1bNEw7rQ1ryRhkU3MCkyw6uEN5AyUnZgBs6UTicUKJokMt",
  "key17": "5RH4NNBtHzSbmigxmp2qL6HsxpMdsQgNtNNcLiBztLjZXy48oxoBAxw4gLp1AGDPwhTyF42TTZJG6o34GMvXbr7J",
  "key18": "4QEFh1kKupnHLLT5JUHdb1JDeigPxGBRtowCvq2okibjXeBYJHkto8nx3oq2RWkmytQLV42JzuB8qgNYkDASbXst",
  "key19": "JQnZEZHJoYTZhd9bM7CzEpBFyugyWi5yiPDKpkGGaTJHikxFxJkJ1U1BecZvi5rYi3Nkf6bYsmPkU4X6xkAaZMa",
  "key20": "kqp8vT2gsZhMZXMFHsfPfhbQ4DsfiAJd6GvKh84NyzEyki6abwEqq2rUnqi3uTtXcNfePY3ib3eSUgQSNo4VteR",
  "key21": "4VCDZp7DMXrJoEuDSETKKN2AXaLnpjZFTZLCfuxZmH5PmoXCRzfTA7FwAREAvvq4VUwL8cRcyXUDZrvqKbeEtnsz",
  "key22": "4NeKMnGfodRovnkVHDPQZYP1XAGb3PLbq7V82w7GXMvCGqPS87mjqMzSFHUbgshpmpXBL6UP5j7xZhzM6BbqApCS",
  "key23": "611Xyr6LsCLexbsbTRkcWHVA6LRfs9Pr4qHNsm2N56Jm4DeDkwGoX9y9Zs86Xuure9p48nQc65gpAy7FWS1roxnU",
  "key24": "2Xs3KfqEUFAX4rNX6PjuuRaJTeA6Vb8TA5ktu9dHosc3vQWYASVEQemAeDEQRbstvEsW36JxZ6Mpky5aJwxc4HTK",
  "key25": "4fmWucyK2tRKWjXP42F6nq2toLwvoYMEPobNx3WEKe6bgKwZgRPM7dT5bHvuyygAAxiiUG2dtt8WwaDoV3QA1bfZ",
  "key26": "3C67FeuisxCj6cWE2KpGknRwYzFvveakKjfM46d3J2UDu5QkGo4xFdprnruk7rMkyNoNUy1vaeH7rEsBMf6F7gh9",
  "key27": "3P5i29iN6wZ9DLpnsTxJWKBnD7sq747vdhFWPbQqbfiRF5A5mJfeCWcsfubEXGfqkbFDydbwEQKHm8YotLUiwq7V",
  "key28": "3tmkkvGSBo8xncWPM3EiWNjVbg4kWQW3GeSxksc9Bdf4joURzLfdNLDQFThvaqLq2G8wM3sZS64grU6qytLncVS9"
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

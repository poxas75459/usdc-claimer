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
    "3MzEoGMVdnUq1zdnUjDYZ5cYTVJ1GsXXAeMssF34sim8bwindjybxkr8jzRwYvznzsJKEZuCwHgQ951fefFn7JCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8LcfFCAbyMaKABZunvQTZdKs9LY4uYE7wxcQD4zS2re9j7d8bNUZ7VNoVFzHU1YE3nw5R4jPDiCJEBf8Ewuxkf",
  "key1": "63Qdwz1RD3xdHg8NDw9bdRm6oJ2VLTBZV6UBNfdgcoLgv7cdf5uG9VPrQF9ysHBErGyD1AztDZUuezsxQ6hyK5BU",
  "key2": "2etc19KHXbTmACbuCsmoMYndTtP9Jc6p4hUB7YH5u4QcUcVoJ5VXTMmfdZmPuo6FyXCSYUAhXULfrCUvngYqXeLS",
  "key3": "4tvjguHZqWZoi6PoWFKQsPKPsbStpvmor7cXJL2Hz6rSChttzytBvFSgoMvKXF8qt9cU5Sv3LsY2toa5f8yAXxk",
  "key4": "49vW9k4kyzZvYLnpx66mLigv6QJ8hDhcfySRXkf2Fze2wkUDiSnqKvhoCGxid8QvJ7e8iYC41bF4RGHi7yFRKGYL",
  "key5": "4oLM1Y7eSaBNcpsu4b36ShuraD4tKCVWp44Nhcs1YiWArB5Gqh5Q2RpzxgN1rXaJn7xhRaJRPtyhUNe34JvX9eiE",
  "key6": "3kf7gmbXv8BoF3fJubqKUtzMfiYPj26rQ7xrcpyyqfFW21XFtFLotbEzRDYsecCJUYWr7NsCQ56TinGMMiP4NUVo",
  "key7": "4YtwQLb2JB5kbF9gjjjpAFwLKKbUDr2oh4nNu75nwoc5BMT4datTAkcza968CF8x1kz5BRE5rHJHbFMP53CJDqz1",
  "key8": "L8YT9C7f82kaSfE3gCYafGEPaiGUUmW6wzCFHnn3XW12PYoUqMiS7ygXT9GoSWvzzcTSRAt3HhJq9EpGhengFWn",
  "key9": "63rpUR2nS4fTajjjDekRnMSu4jxKbUKmAz5xRxRvcWMGo8FDN53EnQW7qGNDs47s1BUo1CtQLtBRjkAmQbBgcJfc",
  "key10": "FVU1PrLFj4KuM7YqsjnhYks4XiA2HvntCHvgKjfJW1s98nVeC1kKbZDb4D85VqP55jX83iZGTVSggGufBuRfyzE",
  "key11": "t7MXMswSx3zeYMpUS8nuMwRqevqteJZv3iVeYYzrgzFPGh6nFECEmabSnfNZXABMyQsG8oFev9cZj35YNJtJAQD",
  "key12": "LNuJ2NumoBnhkPs7aCwfboCXKYu7d7WuGU2cPL7Q5E7pDEvXtKVP1koxvfYRryUiSJaWJtyme21f8pXkwryizQU",
  "key13": "5D27jWm34rU2MVwa1hWXjKtEMYGpDAGcoxkhJ1mhv873fTZP6d7DGSwqti9ve9wEBevRQyAeSukUPbUc5VSZ181B",
  "key14": "43eYc7D3SrwBsxvEXbfWKEtjk9488JLQiEPSiKGbRV5eeXDmfDwuvtiGnN9ob2sxoGHrgor1Yot9vBqaTV5uvxy7",
  "key15": "2B661BJvZeXpqG8Uo3oXU6NjzskerVbh5EF8vMynjXspgtFeFocamrLTG7HWD8SVwrdUFskHPbFxVEu6aFcgFcTA",
  "key16": "5JamR1ofrrr8yMfFnSghgtHFhbKPs21Hd15R3KodW6SB2rDRj8jycvqn4pinasUs7mkzK538WNWYxBJcaMusWnmk",
  "key17": "2GYUgvtZLFcec5kkpjAd9pdA5LAFcQoqtbVWJBVfx4wB1a3K9wZghY1ywFNxAt733PFsFDFaQGu1m737icaQzGFF",
  "key18": "36DpEGfaEJoHT1ESfU7YJTHkGta4fQiHMtMpTvNQpJyenk1Z6CW2TKSHGCaeJuV9xMj4QYJe7AUw6SjdDdeVaHCL",
  "key19": "5YCdDcTnX2bGfu97KDbtXKLUtnFV8uthWkYPJqFhop4uDV4ZHZPGM1pHnB2X7cF7sPaV3B17b99enPdpdAZVBkic",
  "key20": "5WS5GoDGPU4ssNf1PNTpXrsWHQLVk7ZZSr6eHq88TzzZP25beWGCTvMpGpzoQmbSKo35LbKAu4LBybhRuWo44RKS",
  "key21": "4fJgjDAMA5GfkWj1yHrwvGGD6kNLmjUJHG3btzxifoSa63AN4RRtxALnFUwBwhVJA33UiWLr9AwC2KqkruKXC6V2",
  "key22": "3r4skdc6LvAUPbapwdF4NWVeEi3CDaqJiRWceuKWAMnrty4uR6cU4MjuVUmaCoP8HqDFkkHyWPd3YiuiiW56bpBp",
  "key23": "4M6sHpPjVNQ9xCWZA9RKaTSCvvNaS2CoapFXQ9eeiEzMSgaH9wAcLsNzJZ33HBYQ911KvRzFHAcYJXtBfPiavjo9",
  "key24": "2UJP133K4kAvKjLjhoHZ6Uz6oDa58HmsPxSSQTKspcvtfy86XNvcf3wKTdvtwtmLpLf86PdjmijnbXE2MexF9kBJ",
  "key25": "pCXoSJB26kUGR6XCjWzBDHtThMsUNqZXojTTnZDvHcriJKT9ytApmykaWHogA2n47gGPdrZQgHdjZvXo5qnP29c",
  "key26": "2SjdDcnStJLTPk7sfUvUtKc56WGWUb3sRJJXdXoshzTfd2J2RPXdeK4TX1AZPZhDTAxSyPuxowSouV5hxxSJdR4E",
  "key27": "5ZPJK9kjQSGx6trAvUJUHJ4D988SNuqw6vSP5wtAyupRGekPBZ7uQbTzWkxhDYTbu68bH31nqMFwsNEeUZvq7CSi",
  "key28": "3TGy6oxwdPXdsSCYcJbFm5v5CsUgE58gM1HbpEoPjcncwGLBRnuNmv9SNJJaToKoidegZaKwxs8eK2qmAPfatH1R",
  "key29": "5X6WS4yhuoDHL4ZN2ZJUy6Lca9em87qKWm4d5ahCYez2mQGuerXvhY4fZ3EhBHmyZKcD1h259u56eii8q9sk1AYx",
  "key30": "5PnRs7R4ksPjC3NHaFvJbzsXVn8qDq39ZbV8F6p759wCySRNr43Q7fj1bNxgCQe8wTyAAuJzMDFjoKbL3Y3LqgBp",
  "key31": "3TMTXWfQyf5iYrKRJU5vjSfhN9L6YkBZLkRuB9CfPa3DSMbLPbW1EiFMns93QKb82D2Sv6mszekZ3YCMeqskGzTr"
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

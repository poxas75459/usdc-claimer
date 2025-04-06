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
    "2wTFbyYYWC2LoZhNmXT95CQ6ixYMcoXUqxXnUVkdWU8bbxnkSPrqPsCjxXk9KtnXnwPjUdvw8PiL8aU9uTGe1Q7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzdoZLSNtq7F7h4Vp7M43ABoDnqbuH8DuDd7nGDbwbQZrTnKS5Sfa4e6mFgDFQYGDRR6tUc9ZcKfunD7CFV8miY",
  "key1": "2QaK2dDdUCtgzmw7Dw8goyE4E3wCHTDVSxGrSheoJhLY4XAe3zoavZnh3sqvm5m1P1WCtqUN7xtRpruvS2RpGZXX",
  "key2": "5JfYV2X6m8s4zUPwRo3ZFYXbEM5CPDad721WtquLReGBkRTMQdMefE2MXx6EMsA4eWon9tyCdymXLoFXrMb4zsE8",
  "key3": "4oDpvkZUTMcbj47Fd6C5aBEdb8NeuhcjRhRkbichprKGFpvXyqMhJK5wtdCjcGFReya6KarVhj26HjhpLe6pg6Sx",
  "key4": "4w2WhU5vAgQVb9w3swTYBP6EYHn5P3U6JpCkMtqgKjc9Ka2XPqv1Sp38ngLwbagaPgHB6VDCi9EFmkgxEizwsXQG",
  "key5": "ArtQQKbeyTVqLBQVxcohqB1SwTEFw21XJoW5ouuecKkF4RcFkPzs2FQRrhjYtCaj4P627RZ8nuJ65i6GSrLdUwz",
  "key6": "Tko5FJby52Aq22YBgsmYLUKKH7phXLdPRJbki1V1ZPZbEgzUuMoQVLQvbRwSbD1vSCSCbZroNKxXKfmxJFRZMGR",
  "key7": "3YAkh9LxcW3WP3JmEhuY5QB7sg4aRNJFhRSiPAaCEVGVmXRcNSW9vL3R7idT8PgjqZTyXxhu2W9b1PwAN81s1zpx",
  "key8": "4FaBxojb8jgCz2hjD16uF1n7b4Bs3PNCcfZtahiEMb6GiMP3xddLQScYWhZtgytW6tyud5eA5X3dvaMPVWBLLEqG",
  "key9": "3cbSv6ANHGo83vBTKSFyCuByki9LnrzzkXWdgMaBvG7y3ZsqqDVBQywmbMZcPybp2Lw1P1UZdh74bJfoLq2Pfuyb",
  "key10": "4wSEVUUuupLUBMnikQ8M6X3LNQazjpZWSozMfczyERqCjdNWxPec667G7VAfy5ijAu7DAEFcQurdiUa9a9uQJx9V",
  "key11": "4CimYicYM5qaVA9hH2i6rAN2unkWKPHbU2UK7gMEnKSPfX6hKBuoUwszEFaTzQ5qyRkuNMLZQPoHdGYT3SpEYU2N",
  "key12": "4jEJ4Ph51iuPs8vtEqi9n1ANnmdSj5d8LVbpGjKFFxzzukiPhUduUoPnzgnByFyjeNCY24juRksTQVMQSSGC4hz7",
  "key13": "2cB3jjQXaVocvQzDzfmzdyUXeTRsQqWpiMWaqUgbqucEZgSMjo4iggGa8SgN7Fgrmye7JzErgX6Cu4AjvxJ2EG71",
  "key14": "5y6U6tNYYvzx6bNqQCQTEr6yadT7yjqeN8mtkqaro97pffMywugfr9nxKJ6fC7og6Q8tmrP1KMsYsFy2gjYYFu3H",
  "key15": "CPr7AUgVBKEEPRKBwM1s8xHZn4TjLGZK1qwuLY2EsQudkbi6S9Gk3XNR2YUFjcMbPnspSaZaWUmM8KhcLDypm1a",
  "key16": "53pj13RgM83HMkWQcP6CkPz8mANvTiftRcQZfFXdYiSJXxVA87tLCuWHG99j6g2bAaoVMuWrbRKQKozzkeGxd38e",
  "key17": "JES3gkqq9rZQf1umPg4wuW158EqWe7zGnhzPpkW5oRdor3RS1J74dSteHhBiEyJbx8AoxWrCWY7LiF5ew3KVjSK",
  "key18": "3eo5A5svzpRuevB6JKH7Pyc52UYR1qBtVrRzKppJQK8vvSGfCvhwbdUgqT1rEvfGgqnnNtVThbcGkXfhFqmsaWwp",
  "key19": "5osT6r7EBHnafPmNCF9auJTdMeRW2U97kVDSQrUDKWtqowRpBKE5csRrJoqMpvpXJBxPC9nbFwGdgLL1TkJZqZMt",
  "key20": "3nZyjvvp4TmkQh9DK2hX3RiKkpJszWJt3FuLppiWwhBPCVKjLaoW4kTbS8VFZEDVtTVEgeeh8cef8bF9iWssMKJ9",
  "key21": "3hdh9gQNJoPsvhhGW9JyRhpvwrSynLUyFmBc5eznaxuR4qutoDQ8tPRCi8aS5DhNDP7y56Z9BTdB9nghJJdwostV",
  "key22": "3NWJ5vYg6VX6DQ4LFibzQzWcBhB8tYKkcqFHSpvPMt5te7pnN2ZmSLnjpEVF4eTzAQSTp3Egi9iwGg6XzTHdd2Q3",
  "key23": "5ps5UpXmETtiz1rjpTacC1WEq9tbQZy26vb139GCvdTBqjTVZmXf5ajjv3aMcpC8vtk5QkJSeBnfiRpGVSamnAnd",
  "key24": "3BXuH6zLnnRYW1Bo6r3ZZfdGYh4XUeks9aZ2dDQjTrAzVKc2JF2eUCvYRoeBBdXB8MqXX1DkfNtKKL2A6A7Uj1NB",
  "key25": "HQ8BLip58vfFtKdpXbowbPxb7wNzjQqK2nLtcfBDctqnixcRrvA5mH3rGSnL6YaMRyLoPzb9bQS9EikpSEJFBvw",
  "key26": "2zL666G6V2Hm6GwmAJxSBczoTJVJew4E3FjyBAxiiyVCFNWR6Lp2DxNM4eN1ARDLhGRaUrYofn5h3qSpY4dGagZr",
  "key27": "28LG2QJZxtVbNBrw1t1XSk6qkbypyaiLZnHkMaPnPLYNSg2LAu8qdCiRgZ82JmvM2QraesyjgZ4LPxdjp2tJbzJv",
  "key28": "2cq2RepNvDW39SedM4zaoKnUMJPQZg8RTA42VFZgAWj8wYZgLNcgUNSZpx6ChNh1BXaJjkbE85VaPzMqi3uoJVrn",
  "key29": "5CBs1GotHzTummePBpnwcBnfDf3A5TSFQJtaNy1kB9NC8zNSrQ2qepon1wbXoLbi71eFLHhMzCF3JsRCeHYKnzkY",
  "key30": "5t5t3rxbnFmrG3hreWPjTwvw77WNmivpKpBfF7kjRmv3cVwHgctbWGTQ6pZ1NWz4hDc7SnQ63QZ9vfHodaKy7o6Q",
  "key31": "5tgW9ZKU4TXcq9mcJc2BHdTE14b1RNeiMPcpa6uqKvQtUQYXqffCxRGDKcBhiQnMo4CaLA4xw5iNHuEChTNARs5T",
  "key32": "5buF6QUWdERjpqVJwQjiLrqC5EbBZZcfQYVnVF15UR4H9nFxRp1bpFs6SzMKthNFPs2Hskj3k1sUrAVHd5hGJ1m7",
  "key33": "4Ba3GPxx4GcmQ6VLLu8PTmJas1MP2LEhD3CQiLhKokuESYHr34z5F9zNMVHFcLT9E8FV4SpRawRfLPHpn7UGbm7F",
  "key34": "rxXbE9VWaAyxAKRPikm3foQm2nGFt5w3A1GGv335oknj76hFsk8JHxH54izMVyfL1DZP9XyT38RKbyvhzHbs2gD",
  "key35": "2SQt633ut3kVfaUytYJcEBRTU5AsiZqynM1Sff41VgZhTPQYaaE4CkQ2qPzcDf2vmiHzVJyDtHKsJx6sTsKm4a5p",
  "key36": "UaTpjEYXwwxnbik1L4TJXSH5HNBSf3tLpzcn2oXmdDWAM95XQxe8YEUNySaMD6cJVd3kGpgkVXgxmBtNWh2Qaqh",
  "key37": "22sy9wM2imVjvDpS4CCkHVjSYsg9X5HFW9KL4CbZ1aQXgPtVt7Rtb5rqoQm6r9kXkwNYbicWJGvRMdwy5JFgUqrG",
  "key38": "5s3J1BsD8Chfb4A1VuUuopMcjbMc7Eeb8U1TCk4mq7gmzPTEtd8CSrwUfQsRezzMac3RYf4tkMfz9g8JZpADz3KC",
  "key39": "3Npno9aVj1cogHAGDLZyghTb1BCyX6oQgrfUxw6UpcNMjjQnmkhffepaq3iCMuHxeYkfycBxrgZ2gxv7wjkcRQ65",
  "key40": "giMfm87P6jWAvLzA2DmGDWah31dcvnTPb3BDY3GHLsMEFbocQJsoe2RuKVhwWGYkfdyb2AkqmU2aTg1nHU965DU",
  "key41": "3fKHj5Nzn4ydL6Zzog1R2zAVSbwcWohwQH1DwijU1NGHjmTLVvFquRnMbSmvXaR72jDaLzNKCFvAPEfGGG5Fav7Y",
  "key42": "UNicBduK5BYTLMHxzyzA4WXtMmh87WLt2g44zWrYvoyshcYt5PxP4Q2LQj3G3DNRy7UQnke36MssjNAAgEMu6Sz",
  "key43": "3f8rf3cghfSikjgFwNZkPXUKNBozv7V5jkfvyS7dvDbA89UJGYeH8jbG1sTB8NnYyDLRAhF5ueDCBT14eprg1uRV",
  "key44": "2ZeK6dg5R9grPPWsCPoK4uLxwHQN73eEy7o51L5GpQ4SMJi3DqCBYXnP2cgYmLaDVQpxJV3HUP65Utf2QWRWdbrv",
  "key45": "2CvHCFe5WUQzG2qSP1fJ5mPrpQ9Gk6iLs4HJYnETG2uTu5ZEoyUz8Ci7C7buAP8VBd47zvpAAHTmb219jApx5pF1",
  "key46": "5fELJKyteu1ob9DcSHdi6ixMoovGgrMqsBBqLVpFu2b3WmpcAH5xKVmhigD4sAUvQaAGcqgfKTqQKVEGWsTczTbK"
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

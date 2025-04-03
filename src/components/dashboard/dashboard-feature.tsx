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
    "3snDLTAKvfhHf8N93JNkZbMGGnCutmhYHfkP1aryr6DxWcNhPfhbxRAava9BFcVDY6dXJ5Kh9uQ8BA9e9mxeppTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3161bJn5HZfcHwUHyTHqb4f58ik7Hg9C549ePoyqfKb29hLvN2KqMM95qCmb4BbM2cA2TJj7c7CdUwTgDXim5CRr",
  "key1": "5b62b9T3fbne6MyBot746cBhWE4642Kkas4uAmCpWunppHtdJtHHEgNMd78URpXG4xjSbPBqmztDw7rjKucNqaUw",
  "key2": "YhpiZtHMgvcPVNhThXdu1noG8VZdoHygG7V7wF2FC6PodxnsTjYBkLTmfwvWRdqZbQjqGKgKgVTVxcpy1dwWFJf",
  "key3": "3UcVrv3AJSJAaePJKwzTQAr4MeeB6Q5yTJZWmgPRENugKpL4651ZgZR9PH3AmgA6RiYo1Z9TLeRGBvaGH1jqpe7g",
  "key4": "nKC4NVwHJ5DbCUuTiVSC4n9cNwEdpwoNTGHS3yCwz6zsXNZbjXqwRqt6Ho1kzBbLLNEqzz7myGaebXvzPGZkzAp",
  "key5": "4aVRJFxD7T5aEBHZuwg5DUsHrnZxs25eFtU1Kypxj2MM9HnarW6DKBgMteUyvVSZMUWcYqLv4FKnUDrHQN3Z76XF",
  "key6": "pQWfCqGVrBJHyVuLRGNBBBBAdim6njezN81VpHSCe5m8tkhVVi6j5k5mBpwo2CWNdqVZRhQAeLNtKtvtjxu3pbZ",
  "key7": "3grcLVaaPDmemrTsfsJ6fSBpKxjZpeQ9zAUjtYKYothSPainLFFMtMwgjW3xKj4HSh87LKxu3X5ZcNwt1tXj1Fh7",
  "key8": "84qnNqCXKDDSszopuZenwnkuCE2Mc55tn73uLsd43e1KbLJiRCbZCrMPUMyBSrSR24myBWMUZeZ9pMKjjeXs6hK",
  "key9": "2JN2s5gktDKJ21sccyTXvU8DMjj5VoMFQn92YbWtznacWdVTnK11TtmUWFSVKmyT374tRRqCC5ZfSnHHQsgs4nGL",
  "key10": "5MWH8TZ2MFNnvSzDibgutUzjFTgHMmr1WjFNTpMVveefbhCad8A1FErCGZzknViGJQAMxsqejvvEWWjUepWpjUKE",
  "key11": "vM5EZF88u3y9aAooUNNZrqCoS7hrXMzFE8yPq2buvKxTaqiWJXade447RjodVsJ4xcy2W558aKSu2fThceBHPZb",
  "key12": "2CWz7oTL8Z5TswQVARNwjHjChumdeGzBX1TLs7BagC9zMbbisRU6LJHeg146vJMx47oEKj3nSRkHgoorFsEZj8uY",
  "key13": "kMmYLxbVtDSVVALeUtSVX96FNGa1kZ3krgBASpKjD3mJasu4hBmFf9LiStnX3dkwd2V2wk9Z6ve7qWYJbUzco3e",
  "key14": "5buis3Upcorsysve6FUV44B867eu48wmj1k7coNf8vxCN5MEgianQEstpiNcpPEsv7wSYD8wbcPQzqVZZ1CJNN19",
  "key15": "5ScuGG73xaGDLhEmcDvHFjagxhUFD57GAa1n3RqNjbY5BS2A7Gi7FU23z8ew7gs8Y8tUiJ2tKD4hHub1DK6NwwvK",
  "key16": "3NY3T1N7RnXfEyks4okNutAVdN3xmGEEkQwitgQ2Qs4vbMiPbCg29qgeHW49Zi9Njs5zWqsrwTDoAiXy7UEs8HC6",
  "key17": "3jKwaLLZ7LRVdj1hxviEQmKDRxQZuQ9RfMd9ypwGQRivvKTmhnQedSFRL5hppRAPUbysEXWkHNQAmFKWBSL7xpW6",
  "key18": "5dWYZerar6EyPRSKjbcLdkXMMmvNgmNJAsMAC7M7J4esUo7b9ZNnS6xV1Ava1EnGdQccxKXVzpC6tof8Gq3nuK9P",
  "key19": "io9ch1UNTAPGxk2JKGDX1h3s31eYb2p6fBBxyXXNGsNx6LXfDk5Az4Lkswcx9N6pPoJ4iNwZvEbz5BmsPpaYVhy",
  "key20": "NzuRHtuiy9oXGgdDiJT6fxJehUzmKo16Q9GVjMzK3Di3k8fXBzcJr7nyFve6tnjeEmgtLhFYpVjBagvNE3N7dpP",
  "key21": "5iGKDWs8snQcXrGisNnCc8nCLG2u42AB9hn5MHzuzxZy9guTCpsEGNCDkiobkn6yQj4VWR2Bmx7i73Gv3hZgiNRn",
  "key22": "2K1UvZxeHEqiR5gvxxy9Li1LLboytoVXcA6PGqUg9wdYSFRz48LuL9EQE956X8HoovpqzH2LYXrFCNAaTCK88JMy",
  "key23": "3ZZjPp8WKqb47SrYXKBSPdZLpyDZDuvbzfVE4yWfUZdKiCX4Ah5myDjAiu9591v5wHftHyV9GGigsssk3vA4kZ2c",
  "key24": "2b1kcLijgHGyK8m32znmw2Mv9ppkseuNaqfiBT41JGNswZALpLgfLKDzKBvoqZDdsZSFWShRZsD6aue4JmkWp2nP",
  "key25": "5zfhpqkxFPcNg1bPLaR3BC8wkiYQp417BTq8B5gSa9PVzWejuCtf1ojp1RvgsbUfs81QN9Bt53JVeLZvjCocrpHV",
  "key26": "3b5vPnSqBJgzCoX7fDLBzP1zfYerg7yRfzMUTBEkH9p8spo1msB2mJ5uDbUJuZa8TWGweWR2chzf1372S4v8nDpf",
  "key27": "5scUBmwzaHdZtmC4Cd98eLqHbg2jmXPFnVf5CYv34eDAGULNQtF2iqN3hqGp5xGg1MpaWFkQ2SGNVYo3uMSRwss5",
  "key28": "2Nj8C2hLHEiexrtMhYAAvBS6iHFydUBih4YM6ZHxiL3K3JK5gc9yVfRdTobTaT4hcdiDPfyRWsWA2b5wPmHXBuNJ",
  "key29": "4Q1y8Abw3BfnqSGTvxp8d3meYcEXqAQCYW8biicHhCQMBexhcTyTEP1cbfbxozKQURbVqh4neAvr3imtqTf2vqBf",
  "key30": "4ePBH8JyQMtN6KUfGCiXWWfHTJ8tQC7wJvHYeJR6gQD7V2h6T25T9cfeBqLgqRVtoAqdVPjZRdhTkaCsz55hEaBB"
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

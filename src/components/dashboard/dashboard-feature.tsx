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
    "54rxCH6VgAYG6f3vkwrCH3Ge58EwppwW2cBAVX6n67XwXnAXibQvxAR1V7pq18RZbfd2ZP8RUSGcgafCCP29tqYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSsvFjXaFBaRRJMUD9gaCgRwXgTRcMdJ499UC8wb7aBvFcTZ6hQqNmmbUvSTdLCq7a6TAqz27FXPdetLFbwgKvP",
  "key1": "48bfKwVew9K75uikzdiLMyQL8qEhUi4hTkr4mamnDVz2b8dMvz9Ra5HBATLYzX3P5LM63dWcE86G5HyUEaVPk73K",
  "key2": "5nvPTUeGdCd6RHQronUtrPkWtRA7e569b286KXLoxiFPHx66GC1gj47GvJvLarU7vsFA1obNuPm6PGdUfH8S817i",
  "key3": "fbsKNViowXhkEj4KfREERn9LUptCv9VZ2e9KKEQ8upxbTyxTgGMSUrd3Cj7ydWxwSQiVWwA1fLrYg36UPzquLh6",
  "key4": "2LMHaFQpavcCsfyV4oJTuHdzPAvBPyDP3HAJEuAsD58upVDYNGRbntQ7n9ujQc4nHukC32tN2JUAGP1cETwdBDoK",
  "key5": "d5Biti2MnGf1ziTHHjHiYt3AgqHpNELrFMECgFNsdcH3SdjaRwY4HF7489wwre9ymDp4VU7bbkPRGdvime1ePoY",
  "key6": "4joPMxveQGfxo9ASigX1yKsyCCGxZ9YM8LfK8CCfAVUEcqCg4MLE4GUNieKBMwVpvETNqUtcWrFTQ77sWeA8YFeu",
  "key7": "5K665BbAuxLWpsoaeJbkR8CyibbfGtsHBtbDWZimi5h7SoPMgG6cPYKjrUUNrNg1iYiCpcR8ZDxb4oFW1HevXYvx",
  "key8": "3PS5VTyQX6uqRv9a4PZ21S5w8pvcev2pitfXDjvf81rgeRwtAbEDif7WYVdrnYJyjX7aj2epiBST8mv8qvWedGpR",
  "key9": "557j2piTWwbkuVuVUWbSAyrw8M3sN7LbAzxnsAS59YS3YNLqUo99dTHAbyiLcfM1WbwZQYBRkpj4yW25zn2Q7itG",
  "key10": "5v8ZUKmdBPfqKuWtSk2rLUhPfVxhVDXZD1Ukzg6rmPkshgWUbZfSQEMnPrhDuxTvqmoMEnoV4H5h4einjMcFL5Sh",
  "key11": "44JZiBeRbm67ZGX3pcL9EJD937DLyPRyzJvi1qZY2vXgp88ppQmiEQMqnhHUCUqSrMAkwX6YR2Ku9MeHuyMhEh8x",
  "key12": "5Un9121119REaEWmxfnqJPWfiJJdUR3GJGCvNkkoMMBeUXQ9QBD6RbnmvqwGQqaW66VrUBiFA2fNogNHRoELYQQw",
  "key13": "2CJky5qCPmwq3EVgqHRLDWLRGY6QbZDWuAes4QzEX99gRXTS3d7rajJxizfzPmh5girwVxeEccZigFam8zV1PUo4",
  "key14": "3SZeSaR2PUZEhfDkRWsU8xN69nSwHDz9unH1JRYMjbZtzGyD9kV2Z2tKEaxZWfJtEMdRgwCioqEbq5PxkAZRFPHF",
  "key15": "3yvsawfkGfVMTqXbrcnvKcu2BXrDLnHfjY9PmeN59yw86WboFY4zJJJmW9Ugju8LAMzxj2DFJwPPtVByw1RtFGx2",
  "key16": "2aDAdxNfxw2MBqTT2uHetTyopBTmZsTBys1kwVCgHWeFv4JW7Jf6AcEcdjVWheRoSZnEzbbpwGE7X5P99tvsGmvD",
  "key17": "2Jhdrsq6iA4yxFaRR2kGtyLn36ZfU5B7pzijXr83ftGWDkaM4WSC6SqqpWf3x1tcD6tA6yVRdGC3HXy7xQALDStv",
  "key18": "4HNbNZMKBqfvbwgyx3BgQVLXaq4kxKw2V7vjbtjgL4mrc5x9Pu2E8JkYKg5M3HhS6rwjwkPLPM7qKrdSbQ2YLjGw",
  "key19": "5CFve24aA57o9fCSzyseTm713keW48ZATB3fWviDYBTwP81cFHFxDChM9R4jQdSZENESHvRuQfWTxcXSWdwZcB9",
  "key20": "2Tp5robXz2noeguqNudaehrKaWRcMXuPeTr5voRr7TwDy1hSpUi67XYhax1xvPxZcLUrtL3MJJ4MLWLtegaXkgMA",
  "key21": "5umcSYv9iTJYiVUn2xt2ME97S8jLVd3gCAHZcW5b6CNpxsUQyAPAPVWYixQytc7KFxKtVCxhk8bC51LybMHjJE4C",
  "key22": "GnR1esUn9tH63Mx1LqMfrU14boLxc4RxvTR9eDYwKy5q4v1ixr3wB7LQ5Ln3VGPVyVx6Myw9MfvdwooPDNDeCfx",
  "key23": "3SQsv7j6M8zFjakhCTqJMDKVeZxAeZihD4gTVDrqkELscQJFatgfGNqsmrpYmYTiesQtGKHTMXVJVQT9PFTqHn3L",
  "key24": "4LMmgFhgpfcg6aNc257T9nzWCzJs3Q8fpyAqhF9gZTvReVQG3i8X2Znw7pnxLMLUtKLGHCowHWZKPfZxQqbSNHrp",
  "key25": "3cbBuMxjcUQ7epH9VEyP4rar8z5P9NH4L8DB248XEH17Xhx88a7NpUUoj8T92LS9v2ftPfY2cJYDceBSxijJrTU3",
  "key26": "5vu9ka6Nz5ZenHvncTnjHCUuDGob1DamwaouaDZ7LRMNEuTXH9tMVGHapdV5fQPpjUR61U6jgv6oR8Wfr8FfubZB",
  "key27": "3koMPmADFwx6qwBeha53Xai38ityzFRBXiR9uYdrwpJNNKPPF3vQpZuXQQ8YhmcptpCfY4gyTCaHYBXnK9nwHYta",
  "key28": "2HTnEEe3fp2Vqzqnas7YCfdGNgE3RxVB146DzgM4Jp15XxFczduVdY48i74kFzx1TnVMZQd9iMcfm6EAmcSBh4ns",
  "key29": "2ZHoNExSpx5T86R1BePYXAfHNdH1SX1rX3Ca7WeZV8TVuLiLFiwQCSQBNvseGV1e2NQvJhhwzHZzApyZcHXH3SDC",
  "key30": "4EMSU2NRZJsDDk3AJGVe2UGUUF2P7FoC8CtfkaR182zGmF6smGhQGrwPraG1ZnXkMNeDEbNahFJvSu3JvZq2BCt6",
  "key31": "4UPdxamGkBEWE9Vfwwnkxgz4JxrYvwWZmurz11UGJbo51sDVC6pj2YRtAVfZKtTSXDHJ6ubN14J24qrKhtZmHuzS",
  "key32": "2N3ptn6mt7QAG9Ykq4Pw9RR5nc8y8ptQKy3z4Ej8BKaYE1JrDGdZedHobJe6r8ynchoXMvXj1oZybmyfEbHec2Yz",
  "key33": "653bhGAk59TYmYk1haSuBVp3q19kEhKbWKvCPtvQPRVMg5RGubcQuQ4g2vWpTGkkuAdTT8EVHYL3CwNDYsQq9Hzy",
  "key34": "uY715xz6n4yWe3HUw2CP8z9k1LADhVF5NQYx6shjKK6ctqu77uB9RwZYiH2r4GU6sLGzSvrBVEkBHC6jQvSUM19"
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

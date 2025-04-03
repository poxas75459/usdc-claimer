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
    "T4tJwLJqZyCaQkExKz9hqAQAomXk5AoArN6TzhzR5pe95Qnr6z4NHkPnU98VCaW4gfDgeaAgQYRbkUVbxvubheP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pd5QAUnY8kvnoQ9jv5RNXKib9AKCnB1HRf9PgUH1KSEcMWABVbREWBF4LpjTZ227piYrTVxV7Hq5vr66MAVriFX",
  "key1": "2xUaknv3NumWRxcbhvVNYUEZ54aLHYW8KLU3AJKNk1rEALhdN6NpNxd64GdvXZfksiStBrzLPzUPoumxXuQVa394",
  "key2": "6421QYHdoxS3SCf8rmqv5cFUwJiQfBwQym3Ei86SnUQm4gHXgXcGrdBP7ForLob6FNXY7wY848jZyZYLj4ap48CJ",
  "key3": "4AVm32pdGTnVBhVQZ4oyJp2j8UeFpzkBYHsxrtokjnkoGDktiPQuriZ6f8FQYgXDEoq2qGt11JNHKny23EW5iDvS",
  "key4": "32gzdExDC1zxhF8S7tucrjKQ9v6airFdmFrU7uwrAFecyMFGMTiBcfbuorn4Pc8M7oNyMfyCkz63pWaabgCcMrNg",
  "key5": "4fpc4V3sjaqE4Jdh3QxbTmwD3FEX8j7VSgi5jhpczkf1qM6c5RYYNYekP5Pw7JgEm5Q27qntKULm1dGmCUktnZfd",
  "key6": "2qegCdD9CwfUCadASy5aRvFUSqxZyKEuemMnBfqbVphPtEbD6MMQcBV67cvSsT5rU22PopEegWtNfwZhSdeLSQiX",
  "key7": "5mWKKpBGrcY7QbDsSRdzCuSWH381PB49M4ZM7jjuHYcpsFx4XHXBhqxUhHQMxrjLhAs9pVQEnDsUEm8tAVZMsWHk",
  "key8": "2qYBTLduezsEzHzSL8EvGJ1tbFWE49mL9E1BuKBydJw3wz4mEqVeuzrVfyrcNcPkHSE7YmwNzGmYcwbdJejthSKn",
  "key9": "4rD8o9vvLNWawBvs7Vb3wuPiHLsgte2vS4JNFbhdkfs54XstotF2MVnk6hojdyXS4EAvoR6dDc3hPmdTuFGCBdAy",
  "key10": "3LfteEKRYeSEgcHBrQ98pd6GqVgrYkUhR9Bg95ojoTC8QhTYsgvdaZzX57YowQCvLQupFmd1TCnXPkjvXFoKe1SC",
  "key11": "4kBFJo6TbLjQifkax9AjnS32YCp5Uydn1BKGGYWG8oDmvoVpQmsPYnfjidcp55gSbYWeJeSTDQ2DEW8XDZbHdpHW",
  "key12": "jjYEYVwBzcQBF5zyMdwidocTXh75dJMN1LRiP5eVeh28DKMSpYRmPzaJRZDoXtRNAmkJEkZG3HyzxwsCQ3mfdTE",
  "key13": "zdWapmLSnDq884CbWczZwY2mq7mTfLU7xwpbGCbtJkFCwbnFE6rxr5hzzCxDTYTNBmvWUqN83V3JYAoDskWmqTD",
  "key14": "4v3KUpMvVfdP9C5JihGM8WT5GoBNso97b8wS7oupVivCeVCThhgVKjCLCkiwxs4TFfzdyLiMf2iZD4LMyTCmV6wB",
  "key15": "4uPr7sn5u43PEVM3tjQ2KG2c9GAbBFSUpLVxKnG4gik61BkenHzjJNewnT5GVtghqHWTEQpEV6LhKBWM7Gk1tMQ9",
  "key16": "8QbuBEDQisPEtHXumyGkDWkyc2osnEextAqtNq52DQFjjzn8u4LWJ8bgF6UuQnjn9K5qPbW1jkFMEErofgFcETB",
  "key17": "3pWU6mKWMFjy8b5Y4NgvmkQAdXMiwTHVJ4zqpt63BH7idjxSbhdaCfMkEpydGRrSWnsvitpu48nfAo2EsEdCtXXt",
  "key18": "3LebSpeYRSYcqavDufPPDTjMJgSV7NN9XkyjbtP2Ad4PKbpTcSR4xgLeGByUPoxXEH7enhnda8aVFMrr5LxDvCQQ",
  "key19": "4zXRSgnMz8iQVWC76mp42hk3hXk36aiRfCoUgdKmTxFESu2zuLcnF7EizYzv76Cdrtp8fKF394tgX3vuboaShrjU",
  "key20": "5a9ve7z3zwvM2NcgazXWuP1chvuAE9YPudAj1KBwc3cFG6jWCwmjWo8aCmuxEcieJNwUHG91GBFdEm3uLNFYX6gM",
  "key21": "YavykfSzwhLGjyrBUPQvTiddpPpp8PJv466h5rQVHV3xBJDw2TiLwUepZaWNnjTGuW1TFdUjPMxwYDTky1eZEFm",
  "key22": "Sv2HRKYXRjYsFUgyLk45672ansf5rHbZq4s7HEcBAJUkGKhu4pJ43ReZAjuohAdtjkAn6zQ2QPWSfkR3cgcpPbQ",
  "key23": "4EFpZxp1XSJyac52HbecFg7ZXwkWgdyXy8ZRQRSohRLLGrExbWY7yhrUMrUZ2XQswH7W4HeUtyxV8BWCiupwHMhJ",
  "key24": "4F5qC1AioyaahFHs27ZXZnzxRFW5E6duNjjsmHmrzyw5mGC3mQwDjo9ueXvhtv7pnDzJvAv6R1N3KGfNUWugPLc3",
  "key25": "S6V4Z9t9xCfVdhXfga7EhpjHhiTZuCvQVcehhNhDYmKLBrdKS3YFqp1wav3E7bXeK2YSQwQkYmVEexd7ygni5sa",
  "key26": "61dA1xPAtatKhncVunYvD6aiuYQmFvqYpw5FHfKw3iwTjf2qkaNQD2fbk8Jxi2toGeZ58wp6CLs7z1TixKAS4fyS",
  "key27": "2cuGzVo5iV7NrrPTLhSFHFYJfFspa5LUUXqddiBBgPA3ry5cPbBcCXp7diRZnzDy38NGFk1Z5Lv3rnaH4wdVRGSD",
  "key28": "KriVDV3EvgMM26yRMVT4SL6RYycqJ6FfiWu84FZao4Tm8QHxHbipEJSkQhN79tDHpLm51fZyqr4Ac14amW1QGcx",
  "key29": "2EXSKE9pvyzmALm9Jm32VzErZrXAVzgjTeVQiU1kgwyX1wYZFXeX7mx3rFSNWnowj13WbnfjX5v9aPQDyp119u3J",
  "key30": "33YQDEktuETC6ePm4k3HVPXMFGKypyNoWV7sbkXccsranxoitVudsVm46JwT6xxWRAwJJSRh96YnzWus5oVtfcNR",
  "key31": "2fK3EQfCrLjk2P716NN2XHe7mMLmBSMne67KimL1TrDo8H1m4VE29VKm1CQmwy6HoQFN6Sypgv6sWSpiA8hVdEui",
  "key32": "5ohg8tFqA5UN4MFuEL9BeCxQR9Qj5WLXcJmgTXBjEQ5FrhhJndSJr7ZnqzDzmppQ1Mdhe3HDh1jc3W8akMHHt5X3",
  "key33": "57BmWB1Gngj98FvYMKYYzsYNeKoHtg3UdQWiVNe1mnrdSbLbLkh2FBygK3qEZMPYe8ty9c4g7hMvPHTzR5v8kYv2",
  "key34": "44sjUWGRGViSu5C4T2k7JVEiWwES9NM92uskYUc8RToPG4H2paTSorv48GwMUfe5ot9WQY9PPLUNMDriUzjBNfVP",
  "key35": "2nzidt9PNVbtVoLKDN9ddTVM5gg3UYqjgDAEc4A73TFvbeTGofbT2s7KZbNXBo9cwW779LuGS8rUfDtshQ9WqZ3j",
  "key36": "kkwp9KGgvRZqjEov8ZGKYkr9373DDywPQzBPKKjdon9JR9xcUCERVT325unHyuGindkcaem5c55BHVqUoiMFx5A",
  "key37": "5UuMQXxTaLQLbrQfYcmwJf5Y647nVQ1V3qdMp2zMmaoHrQjF4U86Q4n8KznKsqbw4TY9ogzb7cGYuVZUmgEAywVD",
  "key38": "4cNaBf2rdqFGgau9HbBhn3eoCPXcb5yibni5cyjTgBLohmi9GR5xo2NE1QRaY8dqaRvRDAnH48BfVcxK1xMDrSEv"
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

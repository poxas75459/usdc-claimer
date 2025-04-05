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
    "4k6q6Kcpy2goh1DTCa8aMaLR76L96VT3Ghp4DvfhWtqANKHaPcFsKhPRPmLZV1zoyjM87X5TCYBydXe9KnH9WhYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qV8vt5U6QSSWzTJqJet9sBzHYn2k9Fu8eXtywh6nvPmGhg21MHGxG7nvgxd91tjBF5DzWAxVWPScauDseP5eUHc",
  "key1": "eQJbHwQXXFETshYpU4mp1pNhRqsBygkEYjLQFpp9xPKUSYjBWGfmPiq96gFzFHFiWWPUaCmvhk388vGMrW3ezsG",
  "key2": "2SDuurAJ2NaNqVNsUn3S559s16KQ4QHLGHSzaY86SUYzg8vbek3obLbqZgm1DjqHBAXA4driDTwyddCXUUZYBtMd",
  "key3": "4PU9WW8eeP4ouQnQnMVqqgGXYoQpMuKSqa3KUfm7be2AL27QNQyNVGnGxbK14V3vcdaRVwWEXLd7gFo1JhpmBDva",
  "key4": "5Can9NkErrFceUuiRz6BJQchKgG8gqXn9gm86u8bVp9atiVBvt6GQTLc88h75HSr4kvQLGHssM5aBqC3pCTa9o8T",
  "key5": "5goss53udpNnUhHWpRhPy8tFY1oJ4PRVH4KwA3Z2NvC6zRCHgKLh5eERwtvPdFa8JjrnGpdYF21LPy9iCuJJ7EGn",
  "key6": "5hAnUAbjzKn6gSDxsKytB3mp9ADvm7MRnT1JYYwJdGkcuK6KWRWY9FFsBuPBzrBPjfn1Vh5MNvGg67CGnuTTw9Ys",
  "key7": "61wgBZGw7j1C9g14qBnMmu7Tdcuqzgvk62e4Bhv1LryAu8r3KdWXyHEUp1XEsejvJEhAvKbXUVgNuDU196gTAbUC",
  "key8": "2B6gazc3qh3SaqBWzCQoDW6KHmW8FY8MjUuLV6t1ZsoFrQVVLRz3NqfrckUV7EmxFFjkLqiCEV3xiZEVq693Yfwe",
  "key9": "63KjyuWn3vjphMKJYxpbPFTbTNtQmahey2JsWEpxQ3H8tinJPrCEsCmdfSsQAk1dkv1dEgfmbZf7sS3bMir9f2Nd",
  "key10": "2AN26HD2pBMQNyAg1rpdmSdJMzdJAP8gneuCAyTi9JYwfhEoofJQww5YxUCqMo1npWs9fe2BU93cmn8dBUcytQDz",
  "key11": "GyczAUt4ZDsmp5xu22BztVv38QKGAgVRGkBPsomApcps6MLBUNdbqcxSNABpVdTJ4V4MMjDw3vMnTA6fve8YZGP",
  "key12": "4KcbNuW2Au81VncnMuFcmP3XHfkGxqayGake22J9pU2zSEXvHRU33gJNo7AjCC3TYszF7hFDJxcGrJsG2awCcoZk",
  "key13": "64etdM91pvqtR6vWAk9C23XvLXcqTZvCkSBAshFCupPNgxb2fbDNgkNjLJa67Avqc69J9pcVzywwHUPJCme6wxiT",
  "key14": "3EX3xMeapZi3Dk8CiGKs6oGJ8WmZbEYZAENLgbG7NdRsEugAsLNsd3UoZL5AzvQyq8hBkAGV51ASXVAa5p7VDr16",
  "key15": "dWJWd8yThkVbfdrnbUorH7gRc4yy8cfYoj5FVGvDES1pQDpAwvxhmJ68VPQeNqk8eu8x6PkF2Kgh2m3TTcuRy4N",
  "key16": "2uuzd7Wsw98qd99tXVrhsgHWM6UxU6fa5CwBERsbrUh6WynSRBmVE2taj369B7ePWbxifRJdtcr8Lz4izR7Jc2rP",
  "key17": "3rEUgHWYJLdFDbrmzVYaZjwToXJF485qpRsiicznpZYpvrt9CVrhLeoht5eUecQU7DMmzSKKFocWGXwJrSssY5Kr",
  "key18": "5RHAfHJUeDJ1LWe82PxpqLcUbANhdbvYhfYCwkpkm9CKFpyqSKKNr5MaX3V14QzSD23RES5TmBpUQVJMfAe5fQGe",
  "key19": "fyAXA8sGpyPvu1rxrdrJAsaQcUjT1PAFkJmRbcKKasYV2W1sbrPEcEcfNBAQ39zJTxwGmJKBWXXRAvVA1WtLkfg",
  "key20": "67Qjd758i3SfHAicGMNurLyTeotL1fMLg3dqgE1QKYiBUfpcUCVscvJbovv8dqqZV8cQpphHeKVkmY67axx2Qrnx",
  "key21": "4jZFGUPWDmLSEyULXuSQfRbf1wcEcxjp6vHz3J6MP1gp5u8zE3DizCSbkFtAZ3fGoygc68ro2Vs1BPZH37Zm4Yo",
  "key22": "3cXQyCaisJFrbXnw59cgDUHrJY6vbFULJQavmDjaJboqbsz8uQNwfB7boGPZoZit4SebHZGTxNZmjyAgDYWo3wg8",
  "key23": "3CFj5xAhXXAfy3tWmcG8mgbc4UkG1z3ZQwBG4kfKVbaJeAie6NgX2YhLWtBndHyPXKvmVmTfpwvk1rzWQUqg7UY6",
  "key24": "5U7r8D2SUf95is5ewua35Xm1j27SK9dT3pkvaEAyEj5DyZjPTh1FfGpN1wKyMYxcA65xmvvgurftbPoTzEoCfebS",
  "key25": "2J5819xxoczVGFH7ob9Kg9whEyPhvtLYeqW4zG8rSpEpMzfGJVZHWnJpHpdHi2etPoHVT5gYTod7aWB1KXSxTor2",
  "key26": "5JBvvd3HL8PjZLQ5iqcs5neHW3QZkyYJB39QGjcDFVrpc2irYytoXbS9dA2uMzVxMsyXee33j3Jue7kK6n3qUbVt",
  "key27": "5hEcXxUnJMQBGnHyovLxPSWF3a6B78LvQbUdp3NNQPnTHvs4kvdSQ88HyDtNvXAEBdmo6PjrRkTB64USUVgxLzac",
  "key28": "4DB6vpjvotoh2YA8kYqx9azwVKWWwXfByv4MaPtSSUpQWuQUkntpvTLtGDSiyjfLUASvgHkjSE4kekpfmssgBDeE"
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

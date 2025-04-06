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
    "3hmsKdyMbCpXa7quaCXd3hbScfJ8QfdKwcr9JbcBg2LqsuU6KjR3jceDfPGxsQ8SXGVeGZ2nAH4kAqBoG8ksHpC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XjEWxyqZG2hZM5dRsD1tuqRUnPCKP15rQVKicRj1vTkeF8Uwb1qjoq8EMSWoDG9AvwzyUUWHvryggjQ3KpGC2a",
  "key1": "5AaTae2nkfmR3mppWb3y3otiqPXYtX99MjSndAWZ6A4dEt4bgofcJGwe9sdsK4jJkNEh1xWVR8c2CEhxKoQoq5Dk",
  "key2": "znvox95Ho7gfWf28WsqNDgcrmdALT4HTg3qpVBhNPciQvkdMoE2WgK8ZtYbgs5KkmnFddUyzganbbyXPKnx86cC",
  "key3": "3rBCnPNy6g6MkCgd5YoL3o3VKddWqyJLWBnGasuBLYfjq5hrdBkKdcMRjr9fukrHPQSmhG1Z1DuQny8QWkMqfCYA",
  "key4": "2cpJt4PeL5bBE4DjcabpBTE4Z6MGrcEqsqz5mPGhYqFnLGAgPMqeCRG8v5kvqCzCjtnWnCEGzt5SA3MC9BHWkdmc",
  "key5": "47chhz1LGJGzbuiTsTvMjWHv4qxHx6SHVEa3YJCeLQqLrF67z7qQNAA4Pq6cdTKCATwQRi6vGRGabdETQay1jyWz",
  "key6": "4uyhGZJqvWrebePJRKzyb7R3AirED81QgjdBhvEMZfwEPe5q4GCJXRcHNmJ7e4qkHVH7TSfWnDH36shVowX6g4JA",
  "key7": "3hND5sPmngkSNTxcqBDJJj7y4V871mReBm7u23ChQEZJQvu5Wdhi5zeVEoM97BzWEq7KYPH4MsjBC5wU8h8efsQf",
  "key8": "126jV5pNGRPpLcVTPesw8ep6pNrXMgqbf1ip7Vk2qoKdbW2pLpoQ4MfNeqXVMKuqvGf6aPYmNNuNtHBmEk7uWFSr",
  "key9": "2AbsgwpcKEHdjMo9ybriH52VjWCkRPfvUH2ar7o9WSYTR8pvrnjWwrnhzaHFMYF6skBsNXRZWAGsTLsLch17v7Mk",
  "key10": "2rpHqvqDdszax1VkMyZ1D62mByiPU62c3wCVuBj9T4M5aY4aS8ZFoyMEkkfdtEkTewgsaXAuCtRurGLHmsyThX8X",
  "key11": "4KhpXBUpSz8jJqpXvjLkA3rCmcyVYxTQSzGZ5ZRVET2hkFEhtwR6M6cSFiiyX3YHY9SKiQ6wsrfFm5JGyFRhoJJF",
  "key12": "foyRiP1VS4cFRzFm6CLtf5XQVNmudqsMX3V1c5xzUX1DQbDZ8Q1oZLMtR41uaWRxZWZos2HdT85KLy15TRW7gJ3",
  "key13": "3ogFZD7C1TW16Tv3ypzW3iGDt7tHSc24aVsYewcJEtLC4eEVTX4v5WhMieEr9kbEpMvV6u74abF7AkKocPrsrWfG",
  "key14": "4ai78Tx4b4QdRM4yeNUuX9BPGmAbEQMfNRazeDNna6sLShQAxG8M8gi6aYzVDUyEhwZYSgX68rSyjaUmFBXNsSC4",
  "key15": "3pUPE41wg2Fp8gBiFfhwPxnQBrPtFNTaG4wpdXckmhYWyc1o3Q1mfVKuFQpSu1BBmwaGGARzPfGCmtasaWEZzAD7",
  "key16": "5NBAaXG5Pirdf2rwYf6VApJv4yYSTUk6mKKpArBctrqpj1HbFwH2RpkVxvBFSwy5N28acdC6DKM2YqBMnBD1Qdrr",
  "key17": "2nWDrrM5bUVXoRmnAPWdX4BDZMx1XveFnPeQqmsmcuXpjBq3cqkQ2oPv1EQnDa4zfANePzVp1farkbDYp3NPreV8",
  "key18": "JQz3fAYXdpr7t1jiYTLZygFAe5dnDJcDS6cMuyzrKHXaGr2Fg3NuLLExh2swo3FhjSxZKCSLzv5H6ac5S58UD2P",
  "key19": "4uhEg91ho3Rv5z48Lw1yDFVBg9BZS6Qm7kFtBKZfdyQ3sHdjZkncM7iXUc5MWmzL7zPakNmGHPT8ZJ6QFgsvvbgn",
  "key20": "5hbNFr6SrJXZF6kcCBNpH15gz1ddYxLQrQgSoshpXWBFzBTELzaXyt4fx2SemV7Vv74ZfKy6HKQuaT8EFCQT7Bn8",
  "key21": "5Zvg586PtqnNYH614dQamzhwaAzQPk8cUhSRbmXtoHsW7qmzjUG3ssyNqmjgxvNqHfY2nFeGQqY6pAV6gC6N2DX",
  "key22": "3WASZztZD3FnGxwtSi2JWcG2Fe2HRUuGZwsCiNbzmaAqwv1tTCVHuzw8LGdzPydoydqDC3EoBz1RJSsL52vyn8hr",
  "key23": "5siSxrHEY61v2aApVbhKbk1tgGg7Rvhv8x19Aby95rsx76dxRr1zbPbV9wjoLCHWJNc8d9MVsNmF2gSZ8LHi2xeN",
  "key24": "3KrgEp36uD2jyTLdND6ni9NUcqPiZjHKaCxfpK3K23XFsToxiyXmsiVJXk8HWjk8EwkKS8QyBm4L1mhCqjnxoE8",
  "key25": "3R49EvgTt7MSYKrqsTSF8fsTS1Y6gZb1wbpwJm7YmaUvr4ajw5KQm4eyHFhzUsFQsnMoLcLgrCZpuF4sBrrxagrS",
  "key26": "3KZeibV7oWdJENXdp6qMPcxN8WoXBNcnyRSnis5D2yg1hcikzpsdYfcdF8d5uNtNbcE9z9zh4Q5kSc6fMKjfioNG",
  "key27": "3waNEHxbpnvhhTVo4Fz2zvGvVACGLZcfEEdxfDCw43pJy5xqjjaW4K4iPmHFjJevWu3R7n1p1wzb3sYcCtKGbxro",
  "key28": "4i38JJj4JWvTiyvT5XAyV4GGa9KHtsNy4Uh3h3q5tTJ3MoGuKnFagYPnnAhRRQdaXYb9De7Qo3uzTczBH1MbWGEf",
  "key29": "27mL13SCa9mhZD8aH8JkzUVi8f7zox9Q1hbvQfTk6kvfh9neP6ahtdsNczDnH96rxN9rJ43wD1aykB5LctRnkvWV",
  "key30": "2BV618HrbmQ2jSLEm6nJqh6mgaRdaRUKxpXM9tDDkmRUqcrCwPko55L7CTwwshz4PvzevAQkZdfA1YhoXRXiNmw2",
  "key31": "38XPHC5gjCrgEBoRnFHhb5TjFg74wEMW6CKqrKYyS9aiDrpkRspDamwU3KTTXYV6NtcNmARguqiny5egFHqmixdg",
  "key32": "4qmc9SKpyDBhCka4KWLtBWXX2r7nJLQXuMburYM6im9bBHmj93AmQmsLK1ZjjJPNUkjpab3EXJaqpe5T6SV9eEWM",
  "key33": "4Qorfj9eci8fZ6nQtGRzxBqFHWeLuXE6SLspogoHCSaXZdVPxdD7NousXmCSkKLZCMhBVQay2KDGDXZ8rrgwMxhF"
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

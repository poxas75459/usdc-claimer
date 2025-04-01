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
    "2RoaatKYeXfe8tUwnFAaDR9JBfuGtKdVApvdnPsJYLHkPzqRgXTn3ZWHmjQDyncm1quJoTAmPjjgL1gujXyjgd6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CELstRpGm7owoiSuHnJ3vkN9wQe4DSJxncLDYtBmLQPTdoZ1qqh43oYYtzYwMDj1cEyMn2w1qLGZqLzDP7qZBnk",
  "key1": "4A9bW9wAyWU8vcKuW4ecb7CAfnNZmyrG1gJyxBNoFC6a5HEbfraVvEZzXwwVqNaD2Np2j3BtDhChg981Coz8urTQ",
  "key2": "4Gcc3V388QM8PNK5dfzmm9XQTUFbY81AokdRex8cijcY4LFUoTas9KnJAWfqqZAk9MrrkV4f83nnC3Ri6a2RBwts",
  "key3": "48LLotQMSi6fATBHSdUFsM8iexpNkR5MQePuaEH87uFAV2M2LZZv5iLAAeUJcmEt8PiCAffnSX4hVCD34NVeHstr",
  "key4": "2ZnoVmZ1PzaWVvm3kfS5qVoYW3EvCwhxdoHVUrixJKCmZosurqk2w4dNnXBJCNrafdRWkHQiypRHErNPgddTJyPr",
  "key5": "PoGvT7x2eYLzEZ3TSN5NtP2nJHMxZYtoBGw6S9QP47Y6wvWyYPxwBVGEMpKH6oo97hngrRiBxLcAMEXXsCnrN8y",
  "key6": "66xDq61JH16mEZFysV12p4LpDWsXjZ3gZhfEAXg1JxAcEZxGRS4s5UUR8q6Wc5DBMtz43JBJAwurWtWvqXkBp5Yg",
  "key7": "28E4NVp1hve963cUECxrwwJ8yneNYSDmUUxJcSUk1oVFNGuZVe5UULWH6ZnC6htE72V2j8bkaTXNTDzkhaoEQq8C",
  "key8": "3BRg7GkmtnvEzYMpRaAypY4Mg8NB5bdzasJtxVqmcoXottYjFQv1L2AdUtjkLDekwpJuszXGDJKVEYKNPwQyQuNL",
  "key9": "3i6Gn2bPvwLKYbV9EKxfaBdt8AYCUFWGenfRJdv9qdFDZ11UeTHiE6UXCrwUX1j6Ck6D98Wy2Giqpshwx14XA9k6",
  "key10": "3k1C85uyWHS8shbRiXePSLE8X6G9bHejTzwawp2M412NeSsfrBJT1cQMBHQ7e2goWpHnnTtHiStQpxNVB7fRGdUT",
  "key11": "4TP4bN8i1JjfHXPMYG1dxgCXFwo1pELkz1zVH6uVANAyHdnyqjZewsk58ux5briHPC8sVUNVNyf4jT9BH4GGk2WN",
  "key12": "58m2S6J2SqMpHL34mVkDKWe7odRe3AYd8x7SxXg9UdDsxegif4UT5Zt4Zp9SUe7vgvuqQkRbLWexu1utc4kRSbyV",
  "key13": "zKUV2K1utV4tgnEhdT7b91XVdmF1ckLBB8RaKpnrUa2jEWGTFV6xDupaiVsJz7B9Sj3VFjfN6B1rX6aVaxGKgWg",
  "key14": "2RnPb59DzSMVoip3pWWTV7hLT1H7eaKe88hYcGWkqPTR6HcoKKndF1CJkzztw5Ehih9sQgzPddtF6hRmgtimfpbR",
  "key15": "5iMrdKPbX3XcXpKZP7RjZX2BV8aVx1gyfWnmi541hCWZ64rxvhLtnKhaxFJLGYEfYdwrhdfzCUbxPP4D9TFZA8mR",
  "key16": "2CL29K3RYCipcd4ceq1M3uF8ESp6z4UfxFFqo6Ba5mcfBf3gYcSvHdrZpboEzoCLMvSsokeTMCftYD6R4PNN1jfc",
  "key17": "EBkTKaAiwPQkaLvNdAVFqbZS5TZjFwWDvRBRo3m1eU7AMjGY7xH6Jmu4FVyBb1DJULJKo8E8RxDJvSZJwkysqYT",
  "key18": "4wQBLFehv83VBqJxt7c8AdaN2hsRAMBrhCxj268tfHx5edGi15BCWrYBtGzSnySUWkjgs2Rw4HDRfpwsMqNigeLN",
  "key19": "2Xosk9842geXRsTi2N3ZA9AFy8yu3A5uvUfcKdyLkLfN4qdBWkBqTj8XkXxkMr3DKkAPTve45Y6we226ntwmiz22",
  "key20": "4VJKRiU4iuEyUgGEkPazp431NCwrPnftscDCKfNR7JwGfHGsjESdqSyQJEfViGa91E3EQL6Qw7k8qUSJdvX7zwG9",
  "key21": "2fjgFRW4Rud2Y4ffGjjMAFma3VZxDN6L5CdZ4pWqjehyxwcsZy4ir9FdN9Xg1cwSZxodYYW7L9zQjTbGeY1fspHN",
  "key22": "xNBoZNBqjf3ThXG483x6bjcNHnVKfG5tdPmtUa9z4ow8CXF5mApFRhn4eCUwdWxPbFxAA348uJL4Q7FGqexBE6n",
  "key23": "67T1VD2ZZKTWqnhfmgRTZjMRu9NX6RzqggHLRBsZeeayrrsG3n33QUQDC9B4tEc3go3EBmjezsqNEf57Wvh5qVtd",
  "key24": "2sV9xvAAmq1iZpBHKUHACAG7d17nuz2kSSzhRFGgRcZ5aNkYvW9d7JmjV17t3e3ha44S1e6T5gAYPKu9gYNvBtLd",
  "key25": "2zAKrmEYo4xswYdvjdys5U5aEJ5NBpxjiizm6A8sK3BGaHxbgx7Sw7ZvibqJNhP3dBqDmaq1zGnK9aJ93Kt1L9YJ",
  "key26": "kpBzTkDFUZZWSoBJ5NDfaErqQVkCyCidjZNXWdnmifACaeUAGrXKrdiXJQWGkpVcsqz3BifHSeVLaVckPbMDj1A",
  "key27": "5F9GXtWjF1o6vwvyXoi5kD8UCnkG14er3aPTzCB9ozzzSBmdkTRbjz7HpaKofnxqUqDvLvzPdrpPGUSnHTrayF7w",
  "key28": "2yQB88QB6jYGHTF58dfx2jheNxs3X29vzGUqpoBZ2AAnkkCkJJfbNAZ9xU2BtcTXxT5FepKuCe7r8LJa4T6jKxBY",
  "key29": "MMWteHDbJfkK4jPNnm4N2FUDM4tm9zWdP5oh9EGpXQmJWwpuTY8aibBDeDX2vHf98dpDxHsmnrxmqD1WV6zPnwQ",
  "key30": "4KGMZXQxs3ZMnqCZYSk6tDXvGfXvY1cAdbKJeee9mmE2qEkHSKFM96SxDxkS4FDWPfcW6X5DoFzRBVyBg3hEPBgo",
  "key31": "4d1TUcVSCWVbjBxJxud73E3qbu4RNrN87yJKm8U8wUq38Dcy8MfbLb3BjFsuVb9hsXVjASCV2bGc8A29aX4a3SGm",
  "key32": "4QT3WHJVUE4x8NqNVHwucd8ryas7EpiSEasFpmV7gqTB2nPuYu28KoXLEVpnu9W9n4jaeNDz8Ey1cA9btAYZibEp",
  "key33": "42GEiW1buoCTaLJfv88dBcVYrfbHXw1a5Z1ZhyLp1GpmHdJiyQytr3Zogu1UtdSoiyhZd4W6H8w3UTXLdbE72Pez",
  "key34": "41Yx5qH4DVupf7HqHHiDJZsyyhPTmtigGPykv4QWCkfVVziyiYzAsgtJmF6trimu9jWyJ4E15gL4sJyA1fF7DiJK",
  "key35": "571aDcyvLwvZNJi5hxBmihAbhpktZ3syBxv6Lpzw7ncHp7UjpfhkHrKyPeHz1YQfxYZq75kej6zXQ3HC8gzdC4mE",
  "key36": "2aoFnsxkZb8vXC8ZU5yCJs7jifGT8hVmtyorjXTRip7v1egpEpLRM9pFAbv52xfFKAmvXZ2oriwtUF13188ac8pC",
  "key37": "2cWYtQT8rHd5MbfPohnCt46mjbv6WiUNZ23W3x892yDsZDUgPkrmRAjWHncDAtZcWFzoKmckeWyP7wt6ojxrk29d",
  "key38": "2FGbfyVnztmQU4Dby4yTcSb95exus8RZEpxjLPAqcLE1PBCHvzgZdnwo84uh4beRn3oTM71jKKc5cJswtoY2GQd",
  "key39": "5tCmZqbwe7HWhCmtrxKQ45PxyC4De1e6EVNMWKMQ9RC1g7s6pwdXDbrQeZtWVDwgzuFQQ63PbinfNWDSbpG7CRoQ"
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

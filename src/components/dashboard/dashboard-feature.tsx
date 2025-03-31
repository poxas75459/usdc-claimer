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
    "wu1xhYkhtJYaibt6B3iYqHXYfRyjXBnt6teXv5JmBCCkBVijjVb8VZxyRreUFZeTPauexTziuQd4mthjr8ih9ZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HweZtfrTGBVj9xNT7PQxvRshmbaQdJiv5WYZKFa9WkSgkBucTuvTAe3iiBQCYiRMSAoabrxJSnsxMkcbBEQQbxr",
  "key1": "5Y65WZXWVzsCKKkU3CDdZMEj7d3FvkWGKg2zjp818FV6vWVHCaGoTaQHBU2eYfvJzBbjCNrgRW8iEMcvnZwRtaf",
  "key2": "4eEMsxCg62v9NZSdRx6K9ZCgDctGfUJkHXbJwQ9Wn18vSyo9cs3RwJ33DPB8Xat7seKVSvLgLdSuyvkJDn3YnQ5f",
  "key3": "5Eryoyz1h8C5C1w3PSceLAPZrB5ryfnGHSgXx5hbqafBuzgdkFHx4q867xwcYY5hH5UyfSpEnfMnEmANxmYXii5P",
  "key4": "3LqszgezK6qeLipVRPUhk2JZdUL8VEUjdGJ8aqvoMkfz37Hj9x7ruwxiDPyC2Jxgkuh5zwLb2gqLC7w9KWHrY6y5",
  "key5": "5VoGMM7CjQM7Bh8wQ8GhBtLubpsV5mHHeAML9v2Bgy97qo4c2gke1VPysTd2RBJ1m67p4WnXtLAezy39PY2MouWY",
  "key6": "4qWiHM5PUhZBgh35YFoN41CHAubTU8D7tV24AWMhfcqaZ48L5B7NeFP6GCVYvDABaCgMoZ8tJeM6FBjE55GFgrEn",
  "key7": "2m7u9ST5bRkTc97UXQHgh8U92UkyPCRC763dCo2Q6Cr9M7Y3Sa8nrzHDvGWSQ1bXrHdgsHLv7Vd97BZiqJPb65UN",
  "key8": "sNMjLksF2gBccgqE7WkN44eSTK2ZLW359pi2sJ5ue21FbiAXg1HMLk9EaAQANiFNrhW4ANHj7zPJKYtTfQ8tJie",
  "key9": "3PYrZYvpctkf9oQfWGPcSfqpiSVuiSoFCjnrBrG8svWy4QrPV91CFVfAuVsf9esq9wpsKxkuLTi9op8y3rCEU27G",
  "key10": "22mpqt4K7RL6HxznRVJZLMbw9g5onJe6KG2QxBwLQBWxGyuh57AcP5PMhik2i5prAtFGXKN5dgSTrqMwzCFvn5e6",
  "key11": "4ufzy3NM5ujzkCTn3KJTvHMxLnqSBqJ7wFwFQmHD3fnFKGVNVrUmfqwAgoYBqZ7RB6QhwfeWyT8Krv6WEGWwFncE",
  "key12": "5RuLUmnkfWxvmjg6qsDfY5y2jXA4cM9aGiW3k2FoA7LeaBXEce7hCSc5DXYmGHYmjsh8DF3mhLFZ6LwEhGkSqfRG",
  "key13": "3AoB1YzCDdtsfuRdBjF4L2TMHxQES5R1XGWEgidBBN6K6Pp3aqE7hJ6UU8P3DeGfB577NTHt9o8NVcFi4rSPXeb7",
  "key14": "37o2jCembtGvefWon8BNBzX5KnFMk66v7hZYm4vY8xNa67toAEdBfi7mUE5PKVhTsxUXhQZgjUdfp4x7JcHRkUKi",
  "key15": "4y7UW1mXzmf9qC9TpgCmrNfGHbgsDZUdEFcL3jiPj8C1AVax3xQXRdxL6gY2d1p5XPXTai56raDdeHaqQq26sZe7",
  "key16": "bLQ9d3FrjHUx43mh4QnZpR29NysSjju6gpmCPJvZe2Be8R6dkF65xp3Cm7WG4vyZCEbhExdQEyLrph2cxdQPZbP",
  "key17": "2h7x4ZNiv2wCfNyKE4gKkgTgk5JifAuJNRPMEZLCHZyZFpYhuKnGQtQxyxsTMjqgdR7uRr7sxaUxN2meHwJwtik6",
  "key18": "5GD7yoQXd3r8SZUE3LNf7PhYhtSBjSfrvd8o9BjWuPB2LtB35zqmjb6NibqsBkuEAkHK2fHy6uqQXDpfaoQfRQyK",
  "key19": "4y1VWJ9KjnoNMcqtzbUiAQV2F6tRo1RumHbrLw3difqKRFN6TVFFhCkW7q9bjcJwdtiZ2oicFTFfDheFnPW5KFz1",
  "key20": "42pUeFFrCacmuwks36pZCHhmeYSxkGfmMvdqa2TJFXrQjpdRBrKJe6qDUNBXoVz7bagYPLRGzZR85cFvbynvv51t",
  "key21": "5AVyc6bzqCF43xzxky83FKGpmkeisNnDMuE2xbBbWWpRzdY73F5U4pdUBsBHtSAU4p35dSqZfHYGxCpYBCkYhUdD",
  "key22": "3fzEk21hWfZp6YXRfpkqMrHtbzEB2cu7zvKu1Mgz72bi6guKWsckqvzjeJvA6RHQnX7am7AZJ7pfyRoGJwYyzQzU",
  "key23": "a4kYRLkBkvENri1REU7YAdTGYeFdpKBPwfHsr3mNA39i3husNBh9h6ZAgwS7pdchWTmUywi87tgeDUsqMSxEztn",
  "key24": "ggEQkY7ZeJVphKmaVkhL1HgGKgq2r3hV6iHniHeSyeZFbqr9hZBdhJtT4689uLKrGUn7J5RUDkVUhY15iPxCUWP",
  "key25": "4vxVZo1ExF5CYdsu4Ud9AuDdZAHEgnAho2X8ijAtVL9dn5ER4NMBS1fkAHe2e3BbZqX6FLyDzBmB4Y6Js8KRPcCB",
  "key26": "B5mndtaozWeqKX6PuRk4PZSiszbF1HJ4aZXDxj996yR9s8Aj9p8sB9bvukpdoGzkE8dL9HrBui8hhAaZ2ahu5eT",
  "key27": "8VsYwUWf4VhW9Lt3JC4Vb8yWuv8TjFxZFE7fyWWU8YARJAyLU9ZQhgTTc9bCxdLhAHy9dmWBU9ujX8J6WfqskDm",
  "key28": "3tzWf2iqrbJFKXJjvjL3FSkXMydXeTo6yHCDEiv4yL1BKR7sVdXWBVSUbpQGQrELQYUKnJSbJQ8E9w27q6VVwnzk",
  "key29": "2Z4E6oFNvbaabFFk13TSeotNdJQGFdQNGdFMQCFP2JTSQevVf8jTPmhAdCoK5du9cFmWqZy6MK7EVgKxPU1d9KN6",
  "key30": "22iXjhD1J1D52XYYKUoY3GV61LcbGJArSC4DWwbtpJkMeWKSCmu3ZsDdsbiYhQQ2efe5tiLxk2K1npboQeg29yvw",
  "key31": "48ceaU5JpDeCK8zp1aRfQV6nane38VtenHBEpGTXP1Wx2JPG9dPR65mVBFTWkzkf8e8cQfMD5Ajwuy69GPUjhai3",
  "key32": "4appaWjBiRoC4WzooMFum1VkYV4HwGgGrqD8WgxD8rFgNgggEivZdcVUw4xp8KKaLhVfqz1vqrX1rCZjve8LK2cG",
  "key33": "YAC9Eqo94ze1Bhpfry6nQh9Lr9Sor8bLBR4souToqq6jYNNLktYb4FFFB5iEdJZjHKzoW6KkWS1qZ3FF3h6voPB",
  "key34": "5eMp2gKHQjC5x9Vd1cSk4TppESnoHsZ9VH3nar23Q5yAqX2SLp4JiCpBVmqzA4afDZnxiHLEeBqfZ2S78J3td1AX",
  "key35": "2SxHbDaKfzetmwiHvwtntb9hMhbkdeAB74gGzcAreo1rEvorSha8cihLxAKF89EUAECMVjBVqnWV6BXqMYVT7ka3",
  "key36": "ti4DZLfDTeBQNensRGn1RCU44Y7if6eEu7nip26nZjwhbjs3kBkDfWsMdwbqVemUKuFW2JRSQRXVkiStLjo8j88",
  "key37": "5hdurDqtnWhqSoNfgyP41DSyBL5jWaWhYCZLg8E3obnyAzjtsAZv31YL1Ds1LYg5BDvwZVJnkS643g2UVDQ49rty",
  "key38": "34LenroNriGHM6dn8q2ebkFknGac6P1sU663MDHgCo1QApWNcDs9tRwaHkyoQ5bCf5XsyG9iyLkA5HWSXe15apNF",
  "key39": "5tjgyT5JdHLP77823mjL1Ay9UethP4h8uPUhBnrqaek94fTejttTEMZZC1pJEFggJrd9fqEBrcdVsD3Xok69Pa8G",
  "key40": "5yBaAv9Ysb3mx8vgKR9W9sxajuB3qbvKJoS8AKDe7YnP19M7oSYDxj5no9LYee89XADVX16tUroDDz3KHihoT5Nq",
  "key41": "4UKJULumrdWmJiKuyjHrbK9EExnfDQgiDY4ikd4m6dENNSUSKXE856gsAjJfMR312NdD42y67CsehTggwMrWPS4P",
  "key42": "5DYbbE4Xu8yLRxvZC4nEcGchbSA6UMGeMPueT49Yt4wJvYRtLW4fqPQwz21yfUeyvQgfMazxaUGAsDXBscdfNVcY",
  "key43": "H497bo18uD7YJSJuVVZMe379pfUK21XKgWooKK4rbWkFNw24sXKWRy7xbFUBHmDUkLsZgSwxvePYGW6J7zeneeH",
  "key44": "wMWVXXtYYfsLEpxdCWCRfpZGeCpLNWidjxC7gJYCUDhfKae6gz55fDGNHjZHAfrRhXFGSNGFhL1Z7ykzwvZH3LP",
  "key45": "2Yu2bjJxcNZwHpjiRLKDtmCdTHxXJgwk6sZrKS3e9oveJdUg7hdcEomhzVcgMAgAgRQhPo3yrfd3RazycF9UojYh",
  "key46": "5oBJyEyM9q3AazjKu7DM4DPP4CUzD4JUKiUbUFVpkRwHNbEjbP7PXjLQsexAGYaGc13z8zgERrzYTR8jq1JNBGzS",
  "key47": "3kPoxgTBBYuwL9EApawvLGMzBnqvXbfrc1aDJ3z175NNVCCAgsRsoyRhxTcmNWtFA7sTduv2oKsDkKepmme6rr6A"
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

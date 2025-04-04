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
    "4L7W8v5sXtVprgux4er2QNbA3QvYzpyAUKBPymgK6G6e3Xe8kwGDaLVuuuzcKaiYj3VujFvpRR1mWy13cc1f8pQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fbMueiEzeZt3a9w9987Mjt4sT3oNZsU7AUSAQoVoKcv3FpHuhpBFBRHeHJJGNshRsePmsA7NouqpZDgTkoGrdno",
  "key1": "4niLo7UZfsQHiNo7sBz5XLRQWPHv6fuLxdAgT7RquQtLnUpoZU11tdKTedu5ng2Znek3hXiScCV11z5se32sw8Pp",
  "key2": "49fbvob7uTTH33k8GBBVTjPhAowqZR2NwKDm2xyAgBi5TqVC4vj7nKZDnrAAxyF7C1rpZj7kcnx8thfJ2MDQGDc4",
  "key3": "nL5jE38LuzfiANaPoyDHBCqfsJvrDrzbDg5D7paYYghZMhndPnz9NdpjrzoxYcQz9Hwx7A7Yko5ZtJ7jTassLkj",
  "key4": "3XsVQPhUq2VmKJfsN2gtwBMaikqpPhYhDhHxdnrsUmHVWEQGXGEhDhwcc8Az6zL3iaaZHsbh1Lz3RGqmbRY6NDUz",
  "key5": "SXxmcPbmZo7AYbPhbGXxK924bJw47cUdFPtVGMo39u32CvQkmscnjefdKWXGHBbpTz9fjVqTJUZ8shjjE51M4kN",
  "key6": "5qJeACdFfAWHCJaundLzjj8PKNowqWaQ4KtqUnkMpzLmX11Yuv8hBJryQEYzBK8BF2J98NJmzJLR6mHGrAv9vesn",
  "key7": "3ggFvitD7VWvW8gi16V7x5VvWy6FdQUQRTJRistEsnbzAfsKpMnpbxMEySnCJ2NJfuPKRGhQNEpx1rVyf5atF2J7",
  "key8": "2KzFqiUob6uVcJf5hA9ow9U6C7bPM1vGM2aeqGgiy3Fq82GpyMASsuYg6np9zeHHBjutVQYX76wGTQNEyYnbE5EH",
  "key9": "5oszpL1i81CDx5RpNiBKmAx2bzmp8W3Gm6be52me3sh9SK1wNMPR4QDfbt37PqiyWkZusJJYguQCcqhRmvQB6YAv",
  "key10": "5FnoJZUgvcEWJGKHU1JJz11E8cAxc3ybP1hvhakcgWaCSgQaRqyYTZ5sLakr5MD67LqCGZBSU34LktBXYZBSGeDU",
  "key11": "4ijdqHQvG3rqkgh8kKk3Zjr6Ez7hi2t8j46N3xcxFPaBQwEqp4VSN3ZkoG9UuAtiXkPd9Z5h9CW2fyweoMWuagd",
  "key12": "4KM3jGh7m9kJnEs4igcRb2d576xvAE7mRgevDvLEoQL7rR2r9RDJcwprETk6hdYbYqRDNar3QTXe7bnCUh3AuDXn",
  "key13": "3GLKJQaoDD9Sv1WBdP6GW3prR61gP5EEibGNo8Wyk53AK17wKzTY7agyWLKL8hiTunNUW1EGPKYbpPwkWbg8my5r",
  "key14": "5JW7d7pxnr5FN4kuj1GptzSNHQfempTXptYL9UfdnfTxZWuWSefUaAo4NhYwELMZfMRgRXkdD9PXZhVux2XLQpFP",
  "key15": "4ajTesTxxM1iQAHRUNDbukB2oTXwJa99kpwmPaUPhTZxnztZXYveo54zpZgFpAFBeuPFAj3e47XrwtYxsfCwAh6c",
  "key16": "3ZzjrqPCnUBA9c4urH3gtiFMooPCNd9opUrC5vCPnYfJeS6VrFYkR9Ekd376TGK3xV14SNkKPxywNDWMmbgMMuvv",
  "key17": "65so9JG4ZzJSYQeALCrYxs89m3swrQXpXDHcbj1giYfRAv3PEb15k7Bx2EcjnpqHucm4v8KfXHJUcG5FxPfrN5oW",
  "key18": "mdKcWkq4LRSdXzgAodB77UHm3jPnca22CyAPrEB8X7Tpig3hTAStRtJuYXxt8YD8tq347fukJFmzjqJuqPWzAyo",
  "key19": "5wjktY3zYEGGjMqSZvvZTHJpyCstJxypebdyuKv2U2GVdeDPXmS2qqDJLdUVkmHyvzXDaeFuDNMd1cdnXH93wPCH",
  "key20": "2UwYsbxXdPSodjBcfNxjoQMtnrAjNQZ1SGRVXkZGwDYJHW3rQTXKektDYkRKCqwKYaTMCbmQZDZMJXPd68FHoa5H",
  "key21": "5rbuFTPAcEVpnrRmQbmU9N6ofarjyfpNcCjwsdZC3FvrT8XjZyaESNU6nfBaocvC3eSjQoeD6E3VRbnu9FdiwVv1",
  "key22": "69yPhNHmsTiRUqRFcy1yajTyAgUUdrYc1qsbp9SnKPjYNxXkNaVjsaoQNBdPGib1Hd63PXV6Bsoq2JFkxDc7F5v",
  "key23": "RW1ti5SN5sgrf1ic3q9siP3UDkRrhCR8JM1qnTpKakyYnf4hSEEhG2dyEc3rjnA8St2b59vTHc3zxEZdCn2V1uj",
  "key24": "5jiE2cPNQknCuyqzs8DJfkKaRYFStcEoRfdkuaKS5ocpe4R5Vwqg4Ph9ikvGnsyqXicondvyNksV5dWZDzqwwGfE",
  "key25": "4M5DQPusqkc4FekMW6cwyfJCKXSJEfxt6yfYw2DYL9WcUAf2kjqem6yBJwG48a5MYVjEouuK5Ckjyzvxa45vbfDH",
  "key26": "3GU87ctt5Y6vKd6JFfSZaA5MfRA7DrpPoBxV7yuWHXVbcG74rgANY2zKZ2ZfjY8cgao6UrqvSxT6Z7PPUjEQ17f2",
  "key27": "4zd6MhfrKXPahkXZLmAh6Zi5L25nqMzkAHw7JstTGfVWoCm6vL75iMayTkSjFEnCtA4oGE7wK1mkSgW4FwsFPGHh",
  "key28": "2bTbDgbru4fbWhoYUERwzd9gBpL6qM9BDFwYk2PYipjYJCueSyEPQHoWwqG6WQ2pTaswz1Me6nEuX3iKVZ5AmCFk",
  "key29": "3pdPTAFtbL3X7M69mhUgZwGfjEzshPDF1DpWHRY5mw7wuL3C6jP7mE1BLLX4b8Ca5gSdYzk9v8ckWv6uQeyLiahG",
  "key30": "2n6G4FyiUFTMYv9KXoh4PNb4S7PrxuQaD6AfZ6NL7GHDVwRKVR2nLx869GHonYh5U2S9i9bX186u4oz5V7GA4jhP",
  "key31": "3SoJbf88TFgAEBMAqhtkXVKdKFZBmLrR5nhXseoyvg5aMh4k4QHhG6oipChLH3FTpy7UH9cy7gRHCFZegM6r9Gk2",
  "key32": "q5i1gLhDepKD4sFNPbSzpt4vTnKfKhfcXNW9d2Xm1CJ6pxhnioZ2dDqvY3XEsHhW4oKHRTahbauY4fwk8RdNzqb",
  "key33": "2Jcq9Bm2RfCJHHXejSmQF2jEM7a2m4krJgQCoAGZtNRo5z6yuKSwtYKf1hU54oHGaR6zjMqdHfcyD7CeKVGckbxR",
  "key34": "4LzZpQ9NWh9pSzUxTzRJXNJRbUTpTnbGBfbu99xuiqGk42nbZtg9augbhxyEoMaSocoL3Q3sJSwa8yswdRFasdrA",
  "key35": "3vTZhX5273Nun4io1JKWhx4jH9GSzvuBTctirccTPb4K1yXjMH2kWWMrjWEwr2UtBWevJXbifhdfgrSRpmXo5R3c",
  "key36": "3HB4VKSWRQhbkKyHzvh2wfFYwBs8bK6AJR8KR8bxVBXsowoFXwYqutvQgrwTfvEgbqxV33WhnFLom25qkMHGfboy",
  "key37": "3mCL4Y4vn1kef93EpBWCuMy3rS11MKo6T3JFkBLnzoL4ACd7WjA7HKuPvqY11g61KXCjx9XzVw7hPHXmMcJWLxwJ",
  "key38": "54pN4a5PpbZuqxTYvsaTSqynRqhPNUpQGDggw5riv4seXQQ6oRNM6fmisvJSjgWGrUR13D6Y7NvHp538twiEdyP3",
  "key39": "5fQo21LH9Joqvt5f1Wd4eAQ7wqjCtexXEGXsy5esmqFoqvXSY73Uwm9CSe3bhNYzLsewhMMYDrygfJA9YaSna51f",
  "key40": "2EKem16n838stPU3gPvSTjiZJSwRq4tSCzhnrsoNNACwrG2pT2xqTcV55Ed67BEBq3Jeio4SwuKYiKsJjD6yScMW",
  "key41": "5UgmCSdoUspopeZpH5aQUHrLmxVPnY2BPz2BB65voKnwRVDHpkSnEbKG7M2w8Jhi8iJzUtEYmf8PhHYW5oEJmPgn",
  "key42": "5GqQyDGgAVpDkk4zj5X6J4acRCjC26s27vo7eR8sHW8LizrRaNRUDdf1sZMmzd1kyfjWXHy6Wq2HZk4iwh6mwau",
  "key43": "4AJ7y8gPYn9YQqqpzp2nsyv7UX6AhTPsXfghXWcfBV774JC4nGaaGHa43Dp7TZqp7qG81tYRG9mTGJUqUXXED85C",
  "key44": "2jrehgj4dRhJPHkP5MnFNo1TFByBSzjxFTEmjnCQnH9ZSjNaRFuMkycDuT9dSmosXhTxvDBVYLKGK3c5gJoHqrbw",
  "key45": "5xTuww2U4nzbn9gXT3VHkofbzUYoWZuZhnyNrBcNB23BwU6Bf3T1fd2xRFRP6ttrHo8L8Fy6Wfet3Nq8pjki21qM",
  "key46": "2WZFf1bQxcdfKevfvrn2WwCYVvVgg4jc7iSmntajk5QfhMY2jLNM543YPVEkSivxHwM8CwGr1vBjY9syQT8hVf2e",
  "key47": "3rE7mpTYEMcvpfGBPgXA5USU4Rb89jCaxgVTpghkY8G4g7XT13p97zrDDShgaS1XRbKsuEQjVgZ25UbxuRZVTpTD"
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

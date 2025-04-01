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
    "kvCxZMeaNqCSuRnssLWHcDWyTJLCTLWfcLSg4UYj1BDNDKCjx6Nf2MURd13TtgX3kZrxURouuZBWBgf5Ez4Gmjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvU9jPvjWh9Z7iSHQp1HBLwmTAsfLdkVbUcizdHzrvERVr6HfUQHsjLiLkzbGmEVDJWhLnwXprNJbYLyEjCX9b",
  "key1": "5BDK3V6aYNJ5nsKP3pEdkEzxffsDJv4Xaq4bSzGCr8Q3gNpheCpxiCRGqrhd8TL1wamBaGMLTzckvLaZVpGhVJox",
  "key2": "T37gpQ5kM51ShyULxneBeAvpTBZGUVeHZJekh2P4j11pBh9MbBXSkHMPaSmFfVc5PYg34SRoNnndSkjmJUi3C7Z",
  "key3": "24rWgH2YLbFwYJQqqwBp8Mde95hiDQBoePKPMmXmW2B1xx21fLpekbRqyV9hJP7yNgCkqLct61dKHsfazD9H4ni1",
  "key4": "2J4Nuen1x1ECcuGZhkDzUYSzFhsLicsxtybPQKpYpfP3qdRhFDWjLD7KYnrYqF3rvmqWWia7LH6jFmrX6BFHixvC",
  "key5": "32E1FH6ZXpMtQngSf6DytCQQCXeX459yDJvQnTovCx1PPT2L5x4HFdNxa2RD4fa1B8Pqt7oVbzQckdxzv3Kqcuox",
  "key6": "5bbjyBsiNM3nRnc7GrayUBYC9QvXaSStB1jKJEAQ4SdccEJe7dyPjikjmx6XEY1KpMUHz39EZAS4DMRztLFFEtJj",
  "key7": "3mth1mkcKbkFbT2vfa9oDVemiSQ2KQkXDEd3PFuU2UMrLU3vTYmKebjh6crHShvLBFNXAzw7rpqWsBvSZewPZ4wk",
  "key8": "3o9kmL63AD9v2epM6pRZCmkF57jcuzYvWTG4RohBdpwuc2yJPWHZHg8qh1AvTFwUB6ocQJmuxfeanwyXCaXWe3nT",
  "key9": "2HcKtw81ut9LSetXUwPM9iT2hkZkrYavkDpZd7u6nsYyWKisrRQsWwBuKe6L84JPqUbXyyMNd4Vqr38F5Gf4jCbg",
  "key10": "5te9MeV5qsWeVe8pyWYLpWaADiR3ejQpyFX1VMMHPytRoAHCbQ7Ejftaj3tNgX7ARsxAJvLQoRfjcVc8RiY3QJme",
  "key11": "4RkS8YZhw8McB5MeEj4k1eqESUPofCHPmsmqoW1kotmyPcYCap8zsbQ5EyEEkWY6kd34hMoKHr9dVFvmvkF7RZ2T",
  "key12": "zNvPV24TRUeVq6UfRA4JSUfXwTtne236cnhWQGUnGXDhSbaEnRcfKsqoCWmGq3k8bqh2pJ3y4Y5gzC5hXAPDB2h",
  "key13": "4iLsuFGEFpA1T46wVAYMhU4Ky4eZJgKMDRoVJBBPg8KC7xMa5PoUKcSVK5MNFEcwAqrD15X9mqyhTQrNpDQTauzY",
  "key14": "2keCGnoZvkzkCxYae2Kr3QAXND73b5aEmQxPkVwWYbKsgJj7JM8NwNQ5xMCe9XU2mMPhZmqQPw3CPYCLiVLmK7bB",
  "key15": "2EPdN1SmaCBwTiQJqNKQCEWCnskvdL7UwPaScZx6vA6wWuW7REgVFZPCFARCDRtb6CVuXyBSjqZ4cbsxfX5cHvo3",
  "key16": "yBQcgL6ixYc64XheNn7YEzCuNah3tsCYmewC67gGK5UGX1hApAXwj3tSRBZC4mZ3Fq9fp1y36v9vEC2UKEqnnxX",
  "key17": "3hPGMhBY64YnHsG4eYPof15JwViNe84L9azQ4p2TBgD7ZQXWBK3Q1eGUm6S15Cu1JXbqSe59PXfP7bH1ZQkuQiDZ",
  "key18": "3KTUGiM6U78deH7UVgy5wxdWitF28j3CRaeSxzvcjbyA3hBjGjDf1rU8upwVXAMzyLo9TJtzReCbzLoAuKqw5rTs",
  "key19": "eMa8dwUH98KZbZf9TVZPH5APHrPxfE8NgwRA3dK4gNMqzpaSiCRieN4oQxkp3NRoCQKMKhxkGeR5ZJ5yJd8T6t6",
  "key20": "3A2rJLsYvEqBs17YyfgEiGp6pFHpvkHKHmusyrgAeXVUTKnowoDy7VNtmyjZnWY2M1zaia12sPt4Tu9ed9c5uX9n",
  "key21": "3ZaJxcu6Qbs6VqxbRd3GNJgCQmieYJuvUrRrJMVL9PCe6QwjSfyGrKYtwxnBaFWncA6mUNnbxQMsimfhX3cZXDUP",
  "key22": "4es3thQD3XD2YVjKKrLhwLWhCnzYezSnYqBBJTkRU4PKXATqpeqgcbieY5gUpsb6Z2jjjbWBo66XFHmRNLLBSv4",
  "key23": "MFvq81y2ePJqfA3zb9Rsa5VcLdDnR3Knj7tA9pwymo8RApLhN4xhzs54rmpnPia5RQpTTpjnzSGJ2vbLFukK4Xd",
  "key24": "2ZNhLckz1UtKJnmjQSoxoThBchqe25o5YayXBAdWqo2cs9WSJ5xmJ7kUgzvEtdSF6oFidmtzd69A3Qicbt9dP9s1",
  "key25": "3EQjkF7JUbPe16mSg7EheWAoxae5BJv2sifrJ5G9Y7w1oJeKc3emjWVC2md7R8wCKAQERxvwb5AY3Th3aCUR2JE1",
  "key26": "4ufHaVZLL2rHmzspGbfkD4f9LMVezniY3NFB82NmXMDRE3JDTw52JheSLAYFewcWHSi4fj3rEQwGRzjBju5JncCv",
  "key27": "5oXWgeLsM7drdGziC7PZzA6ZHkGxWHBj18cG51ZakuBsNursx4uA9jvMerthFocQZLY4Rh6RHv6d5VPeoNVqMTJE",
  "key28": "4QCnjJcdmGZJmECAxiRFz4cFnCuNwHLw2w3LdKYFKBxJibxqgM5m3ZPTFi5tNKno3PdUrciib7cs6FqCUtVSnd2j",
  "key29": "5Uu4jSj4urN7HomfYGMmsYTjLhNZAC1g5jGHGkeCyyh8RvduRgFVcjrWvLBdELMGS7hjCpukcCNPY3YXfGekiU7S",
  "key30": "4Gk73HTTHwxerHUexuZcu4WhGB3jc7ov2gXa1Lp11DGJWAJGCBQFd7H2RZhkCAhw5XkDPJbhhDb5oG8H2YK2h46y",
  "key31": "4ANXX3A61FFWDouay85uowvAwtq7Uy3rAeG5rhZbwHzBb3KXc6gx6DYB9JKbsPQL44rtvURGNNtE1pXctpuZZZwP",
  "key32": "4PPb6dRAygrnW3udnPpKg6dUoZXPoiNw87SeGmkrhJJUx72vemHUmN7vxYbUsvyqcg11bib7uQhQnCMkTofA1ZHr",
  "key33": "4i3oDZ1Bx65vWYdnTCL4gaLJEdvqpgrimmV1E3xCKRsmHK9uRkFxzdXJqR6UBjEVdSVfUFefeghDfesdLHpZkPko",
  "key34": "39T5LXAdWUxUxkqsrTZUNSGLFZqhh3gmVNmi7VYhBxxJRujgZ4aUTNsxvD838jdVVXmeq5C9gz1AusCmSTzaVBE",
  "key35": "2Rsdmp3GAfhqFRLEcLJ3tUxjFN7WmJUsnd9k7WiVTjQyXvLPan84SBLfY9ffeZu3xRtscnEvQsKn9ha1tqK9ERGH",
  "key36": "5oFaFHGysyZDt6H3Fkxu6WbZXsyHNQWpLKSfpePqEkU4eJjYN9Q5CteGLBh1fBoHr3bGnNC6hvUbZMzqnK2x894q",
  "key37": "5mAXjrEtBuPcppurCRTe61pV8nmoYU9Qu6wx9skzkYBpFZramywwDbNutgmVXxBQB67TNdVPFDgHZW6RNXWU1R6u",
  "key38": "5nWEY99zZ4SV4WFWbEYiUxMn9w7xvMJ5PRrbj3j97doKXViEnBtUBKn187tJQfvRbZFE1s2YbxjZTGk5JK535Qz7",
  "key39": "pbB4oYroh5QWv3gnQ5JMSeNVA3U4ec3WUV3WWBkRkFkmxAf2ZMeQhH93QQTNH55iSW8Rr5zqejBaLEErXy5F8pG",
  "key40": "ytnoY2VhWQaZzidYFS9EgsS52LpLDzpYvFyK55ta7TFZvtFBdvtRSZQwz8TwUfS5MQzPoQSZQiPyFfSR7vkNDds",
  "key41": "66daUqarCGLF3NZuHrvcKekSfQAKzfZKeEx3M1iAfKEBnEBGZ7st8uHFpQTXM7LH12591bA5YoZXiZfNED6xPqtP",
  "key42": "5TzwaAimxmBLFYEpNgUxHDp6U4EXKsrrKCpHwLBeGLQJcidX5zamt3ioY5khuh6SBeLCmVh2iX8s6hQJPPcJ6u86",
  "key43": "ts5CXYdxDPUSAga8kNBoy4pXiDdt3RPcEb8G1u4jNk87p1XeQ4ts6wGGRp1zuRHyDiYL2Gig9P72mrXhbBFSS4R",
  "key44": "37kak5s23BiASBzt8KN24tBf39tvZVuhLoEPb2iE6mqe2T6AG941hGP4d9TWm4NfJg9DdUzVJwW3k4pcyLFMqtms",
  "key45": "21wgRTsjXumoUJ1s4Y7uLs1XH4vbZx7pkEmYHDwCfyeiU6JcCaipm6NeAMFGNRHGkh6M7FEVzgJ7o6yGhbk7kNhe",
  "key46": "5MPaPveGcHepkuBnBdhcM7q6y4dZN6VPcBQ9qkP9M9AbYv8hdkSGDn3JHEDeZZA4r9U4otBUpk73C9aBnXZx13F2",
  "key47": "3iTdHw1DDDbbkUtphia1u64QN6z3qbfVCnVnBwhUmVBVJ9d5gmLRQShf8mxFYv3hSSdMf26on1Bs4h2Qjejb17bm",
  "key48": "KGu5pUcxtWxooxrjQhkT23DqyNwL14V6ytE1kK5Jt8Nr2bxyhYbSm3v1H3soYRfb4kD4wKMvgUqvuYY13Tm3YGf"
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

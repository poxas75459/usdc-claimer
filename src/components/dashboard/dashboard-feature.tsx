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
    "4zAi7M2qnQmsBDU3MTuCqvYWtV55EeyfwA45cMBGT1w7EePtyu2yugUeKLURd5sVVaX8r3rF6PRYCTLuCocy7trw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVTM6rPgbCDciW8xGpsvw1sNdvXArxMz6SWZJzenDZqtrWH7y8GSJCvafAZWinn9NjroF2wqBBVietV1LFaqbRP",
  "key1": "3hjmABLhcRiaW978r31bmMuhQ6c1bXdeJr5xSz72TYCzJvxRvxVSwfRkKscS8uhAxBt53Tmbxywgz1HBAh4FbbLE",
  "key2": "2RcypP68VJgaQsDeTBXdtSxHYDaFvCqYB8HRoz59QpQYr5pL54tWutd7bfjw3zXmp6UbWvBAuFFAuDgL7rt2BXcC",
  "key3": "5KY5W9MzRSFkPyS6WKzUnGSaZH2PaH7uVtN5brBpWuzcdVo2P4rCEAxS9aVpkb4psYjPQD3wBs3e4z3c7mnyJwaV",
  "key4": "3TWjZ9KWTEdi1eRRe6SDXBVeurFd8ZMy9yC5Tvr6iDwkuuCu8B2WEGtcg4i1pxbrBXCZj23k1Vt1PmoYyjxcBHMZ",
  "key5": "UPkEDgxTHRGZYHvHMKpaAmEFMHBMGCsdeBDeMtHtydLYGdTMz3SbhDUtynomd1S4M9RufHjeTo3QykqSAXmaFpi",
  "key6": "4X5b7n2Wb54f7KjUQsub5y3jpacHni1m49TfPTMu9Z99HWgsvcYmzTLXnHqQpfc9ePAZVqe6ak2vA4XmBSCoAiko",
  "key7": "5LN4unk71YHTsyfQnggeAz7poLVC9GhvoJ9hcZKUYwjiRDybv6EL9St8cMp5TmoSWLYfzKZuW3dfEr7FoTU8rUvq",
  "key8": "dMS3HmDvFjqRjbg8Qiyqbxci2z1m383KrMVFRFzN73SGrSby7yP2Z719gMfLSzzgNtQP1ML5TK7m41Uxg2mJBqR",
  "key9": "QbddwWY9e6ask2ksAsBpEhnugrB37mqbnzYmn9PKRz1VqcaHqG3vw6S4tzHmBLhc26JMBPphafXF7AdDbMVF4dG",
  "key10": "2GWgq1xT5QvTwZy5UqYama5dthEiEthEzk2FRQB9stS7uKqVgzccXuwkPxW4WqbmxydTVYzQottQqoiEy2XGYa2E",
  "key11": "3xD25VTQjYUbcP4VySaNfNG8ZWBmmL1axGu2sqzXtTgXQbhBixTKE6MkHf93TrM6jjq86tgTcX4BEY7BKkpZep9H",
  "key12": "5wUayhRYfXf6QbfJHEHWUER3Pq4kGctfUnNRq5vrVEZLA4268xdDYgjZbTH3g71wt7Tyb8gQYFrCYtkMTRxV99Ta",
  "key13": "2hTD6zGjXctbSyiEi5i5qxNZJiBhHPpy2k1w4uYkSeFW2KNMLPfZBgHZcL3UicKdWKZGrb6bDyho6nSZdPxWamir",
  "key14": "4e6Q75w7dMh9Qi1fLuzAFWHsj15rm4GNdZyiF7KRkHAXHwdzGMExkvdenMKiCcNzzk98uVkKdi7ToYfYgGEthRxS",
  "key15": "5tqKAv9kA21v63uJ1jECfccSjUkvaANKdh1udeNQXoeHRSvQq2fkvHc1utVCTTCznWkveaNb3bj8f1FLHciAAxj3",
  "key16": "5Cvu2rYbnvb91mNukBRbhgTK7mpMvAtYNw1RrLekK761EN9BwH37EiKLyEMXxA3Fo28URvhLFa7XcEZ3wzfTWiyi",
  "key17": "8iHkqtfDzf2rD1857xHCcEM4wKXgq5CNq9KeYbMcgWkJ3p2PjGuJSHYMrs8X41DGyvBwKGRYXNyYhYHNnRyCCUo",
  "key18": "3nLXGyoWDkMaxqMMTccVzyzgvxYLG2b3hZ1UFDMW4iXo1yhJFByDxL63UktQvUQUHMNnefXXTHbHYW7PNte6k8DD",
  "key19": "2RkLcJq2P5Q5DwWKahnMJzHMAdN82RxZMTNMKvFxQpYcEsmmK3vFVFVRdyxVdN9DYCSqLXg3LyVM4q7MnViK2LLg",
  "key20": "2EkU9Yn8nPh3KeKtru7xve4s1nwj8yvgn1GRHQgCcNtgFcDTeJKytupLSpAwucN7zXtZmspoXeu2PMgCSrcHxatf",
  "key21": "HoMsLnqHe7YcXAx31mJ2yiPzVLgpqZpiZ9ovZBM2Et4BmGVNBPy7WUpaMfmdiFHgWrsGBsPodKCGAtzrk41xzqq",
  "key22": "3Cx3tGuJVoeK6FE6Gi4RS8pb2QxnXkHrBjaSyUCf3pXo4TGjzoeDXk61nr8fZbaJcCXbkFpeD2HgqFn9FtU8UZtp",
  "key23": "g6nvCQ8am33thfp8feV8CmSF7s4oG3tMMWRJUBVLLAua6gwexcDn7EVbGdJSQxyN3mzDHXmxzVouVonzQHsToXM",
  "key24": "5pTtevBGLawAVchpwfTMYcD8LhSsULKGe8CuY5KPayeuiwT5AqmMJYjRvjXmYZKRaWLihoUawunVRW1ADxrTJkFw",
  "key25": "3nmF5RTBcYYjRtZUs7pdzcKjmwHYTG2SGJcf2LyBBBdMAM2QVLzdeB1qkssyDJL6eunq8bZ2CwRQnXCAxhpxnSbU",
  "key26": "37HQizux3W3nhFczKxZ2oYmNNfSAerfUi3QbkeGvg9kEhGVBeq1KehVBe5rKgwRfy9MPytWaW1dQ1M9PUndCUBaW",
  "key27": "3ez2KS8viPWm7xmHu3fpsHw7kcCuTPHWqbZtxNE71GuWwz5Yei86u95mTBjhw5qqTwsSbGboQztYsKqgfiLEx2Bq",
  "key28": "5HsecpEmoVQkGHsPs2a1ZZtj7Txo6dcxyax3jU4a6EUjAM6cm6SD7oE7Sx4t2JYXTUFMC5fWcYRweNZcwpUz5GkJ"
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

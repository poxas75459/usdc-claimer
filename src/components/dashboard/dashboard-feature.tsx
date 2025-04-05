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
    "5xNooMthkvKYUMnrr6BaCAdTyaqy1FMcLAsKvtuRrBU3oXUW4NSARNSeFKMmwWLoL1tnvxBt33a4VYJFQZSLxeC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6475mvCR8vP6wG9GEY7XhPeiumvtXXFbKFFaiDLQ5CE5oFd6gYZbBbwPbPnPaXYka8vLoPsZ9RraM7b2V5URJaoK",
  "key1": "2BLuXzASjFQ5BPHzEDXL7diK5X6BjYnVWe7pAMxS72GuDthgRrPA6j4HBT1sVYBYsSjd3Jujt3G4Kvh13HnkmF2j",
  "key2": "26WnEmLDJhud6WRR5YS1UMboH5ZiXUcGpGkEkZuGytXDtQ25sZrr7NnXyHv8rERAXrqNGhPWEoz5jnvFDd6LyVhg",
  "key3": "3a7JnhxMFKEWeY9tdLhHErfky3nmcQfhCjm5vvWo7mWTMjRZL32RVWWu7qk5ut5HCMZ6sHbrt176NW2Q23Ab2Nnv",
  "key4": "3AdGwzpPjwYp5V2gLSzqzjDn4BaahkkzasXQ4jYSpVMyP1UM9qoLK5d7peUJ5BmJbRDPxBR6hWYqqd5kRbtj5wo9",
  "key5": "5hV8BZguQDPGiim2YfDCKqBo6ze6Cj59eF5zRkg2nPskEytj3zsb4ev4LjopVXT2EsNrhnAwsSWgsAHidUiHLMdX",
  "key6": "2Xt3WFQyfM6jFTqi3uefkUkPmwRFn2qxTyq8cqnofSt5cjMCTQkMCVHCRB45PrY57QkwSmePMoq44ocd481anKt3",
  "key7": "5ReWLdpamkgoo6mjqiXFxnJgiMnscTrrKXP9K2uHq43S4LKdRgxKwmJcerzrF6WbYLDRoBkuXFe1F8Z4k6KTUF8J",
  "key8": "MDFutV6rnhkkPk7Q22Vf4ZdM8CpbpE4QM7JVmYMzMoDbDPvqDkQqgrcAe42TX47WhDBLpWL2gUyivTAbms6hF8i",
  "key9": "qVwf77GwTH35U2jvtyKcBRRsrsvaqhN6YvqbsWmbp9Q6HsQ2fSUQ48LXZs6yMutyY9V7ynKJhDHstBFEUfDZQzY",
  "key10": "3pzpQTq4cYLY6tUmNZeANZShBvpie5XeZenyP2pdR4qQMHBEgeQCqVa4RMEN1Qz4HjPgLmwgLXM3PsYbXGWL8r2o",
  "key11": "3YKpRpuC47Pfn6sEAoGEaoJXqqCK3z7kRXKGnRpeXSkorvzmsVrad3swEyGN3teFZqRMMQgHFPiw1rhN8YYg9w17",
  "key12": "3BP23qe3eugW4VqG44paDy2fQ6obTxSpWz9ZFK8vNb2NQXBc3P4TiNz5fNVSXrCcT3BP4puPaX9KZenfNqSKeFv",
  "key13": "278S7BejLP8S7U9u1oG5nWvQgmCXPfkK6A5U69v25ro5UTXq4TeQ38DdzT3jaC8c3wTSuB1c7xXgRwdJVhTMgMVd",
  "key14": "3oCbqcKZQNXKuVCkTScaTMbLxQoVXHcQ8CWzotieCHQgjTjGzyJtUnLCmWwDV6E2GENFDELqdmFCGZAXaTDhjf4Q",
  "key15": "55mHvuxy9C4cKcrJEdWkB4EwHwoGExEK6Ezaractov8LFY8So3ngdyvDDb8SL9xLHAZJDHqt2uubkb43rSmqM8XR",
  "key16": "LYXAfmUj9cJeoLA3eukLLjMzC77JxqP1aEJcNmwAhXeteCarTd4ma6uAN2mDN5RuqVQb2yxP15isPeqNecvBeUD",
  "key17": "4a3mnyHDNb6zGGLorWavmWxuFuxsebxv1wJYyKcdgY5qReT2jQx28Nors8nC4n2Liz2fDjr3QNKpQ7AxMPLcDXcd",
  "key18": "yC4ij5ffTZTuxTX9cMTAcXpvZZEsUjd41appMbFuKCP8cRxsKGQx5Hbbg35muo4M8332oWZMu1ZgYnnAjan4Ui4",
  "key19": "WdHDyDkpzPxmKUN4b1LRyoGNyK9GNKVno25Vhkm5gAKAFUPKEu6fCAhH9eRBZE9ccCY1eYWpZPjRb7sHPWhh4uD",
  "key20": "2Qz4V8nJQGZSTrHFRUgx2QV8tVfFNsJrfvTH7mrxRW9gfKNVrgQD2piP2juLrMhAnDmQKz9aK4PVHm7CudjnQ7pQ",
  "key21": "2JqEqXHZk12p6mWvb6U9DuwMBCzYV6ZNa3MynstqXQxF1nReuuQjaLuT2W9QQjADwguBetEzMkNrJJYRfKj7o65A",
  "key22": "5xp1JqrbCc4VPZmnVqBazAMfWZhXPmaGYL75x828rNxRRpAUZN7YBC5d2rr4CEGGDdErvRTZ99reBfLpvT5zeYNG",
  "key23": "R3GYuXmncJRGphH65c5c5HpkWQrciC9wpxmhYurmdeqBLUigxnRCEZiV8HGq1pJ2DEFMXzS6G4cPHVLfU4eAKD8",
  "key24": "tSYj1arkoqDnSqAdMhq5jBJUbekfgu1yi6g7T6fcLNJhe1Uk9AkGzjtY1uhjRmcY3U9A7iEL4nhN2XPmcbGkRPv",
  "key25": "2dNAxNFTDuaWiDuNXTfVwk1vFGrqUuwimPwXZudX3PfsyFZhHfmwe6rjgHw1ku5j4C9YQqbtd6pnZ6d5cVfXfAd3",
  "key26": "4v8i9Uq7Pae7C3X7uc1HP7bXzDwuecrJMkCQRc6vooTNomLsAe43VevuJMFF2TxLr9HfW3fYitsY4BtrDbfymtem",
  "key27": "4QkwWxjARf2ZCh8X2Fu9wM5VGSPMaPLmfDLS1xPhtMk3AxsyYX6Sktndt7TTTAenK4jnBp25iWYCch8b5erbp71q",
  "key28": "516N6buYtaGuuTRLsqMvgBrcbX9WSTVcsDfwLLFCCmR8hX8GBvmYW2xG4nt4A9J6dsfPdYPVf8UA5nXpRxtyF23n",
  "key29": "35d3fV4vg15oFxWXniTFAdXqZMjoqmdEr5jxoDtUppEeY7nWWuo2x4yhmR1qCgnArnWmi1WeVDWvA4h83UoXwW4k",
  "key30": "PpoZQsDE8BFgMQjk4vpRL43XMMuykRcqaXpP1QTPdPk1ntsWKR1UPYqtM9dBhkmsRspacGHbeRdB6BF5YuCXPJq",
  "key31": "3T9o4vBSjA4x1BQPq12VgMEbawsC6ddbx7FBSMneCNamviuejMcVQxdt1WwLbBY7i19gV2VjuUwReENVuscofmhb",
  "key32": "n57smtCpxDDS9gKUDBaFZdARNaM58V7VKHRGtRNdy8xotB2fwLCx2qacgVe3VcDphjz9JeoQfxz1FvTC6Pbse72",
  "key33": "2DhP95WU7eK5D9jnNWZSAQHHqsSU8kCLiMZtZTHWeDf697gvHX6Hs5nRYQBHELoWPRRtYS2NPB8ZJLPDSnkMrnim",
  "key34": "U7H6K9Uxs6Z7CUyqN9GvhSzDRSfqYgpAbcMJHU6P68uFJWjeTfrzSuLEmq7RkMy7hZ6WwrfWHJ1QAuXwBxUdZJq",
  "key35": "3TGtxPccbK3iziDwHCnYJd1AHR1n6HMGzeGv2QgKDCDSoFSpQyegUCHWnHQuzm3rZjFFGC4JSTCTcD251hky3QD7",
  "key36": "2zWJ4aamkTbrXRp87FrWNS1eGeMMGPSqKK2HycFiXfrFAwn7LdKryXMMJkeCwPwkFvvgLgA8BR2d5GKojMES6ZhT",
  "key37": "3ir1K5T5vupiKTbeoWCk8x8z75F6hdnxWay1HyYz45VWSp4mT53NaHq53KBcHudPcigJwnTyfaBinMVAAEbqEe8D",
  "key38": "29BFmd8gQvAqbmXUFUhENfpCHsqZDFbrXwZk45x7gQx5TBEjgCUwZcDQ4aA39P8DcH6FUbfQqkgek823GBNAAKHM",
  "key39": "EVfGpxw5sSVQoRhBpyBu5NthE24foitp2H8tPbtRvjdNJriWPDkuXJZVEzUtJgvvi6rDAAe8iCv95HCpqYBKZm3",
  "key40": "3z36EdvJ7PNbNsddimi7hjVXPNgtkswAkrtPFfWw6XEWADZXkb2xhHmp1v7StP6ExTMCndemkRWpoTYmSZxo1H3a",
  "key41": "29JYBjbUZMNkraihCeN53yhXFq52ynmGdpQrVPg879BYMvJneq6Vr1u5pnppXoRknaDTKeDm1j7h2atAdyUAQfDb",
  "key42": "3vTiSZ5Z63TzLNbRBQJLd2ZP9ktfo4o6WsUooLEudQ8iw8RLZma7uDhD71VMW6dD7EZ4otGsDUs8uQxepU1r5jaK",
  "key43": "3zbiLJdsa9oM1VhG2L6o6UdrXYpvLJSQ2NLi1cbk4muqqz3QqZFbJsbR7eNSrF78NLT9BidemM2GD6sskXbqoBrD",
  "key44": "4JhqFWGhDPterCNdoL24stcQg9DDBKGjTRmSEfuZH8BY5TPrzHx7ppVupapJGdSy295v2pVfmmoXYS5kvV84LFkY"
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

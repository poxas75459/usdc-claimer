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
    "2CiUrxBfZ8KLukUt9Sifo4Hh3KZY1JRb6aT6k3RqmDNvDAZBPME7uEokt97RBsBQ5FSmnweEuo8UiS2MvU7Jwn6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i3KEPMqtPLHfbxq6YykcUi1XsCGYpXphcoGu5qKgR4fBw2r8Xtq6D3ccNEd2RfjeubNW3msu2NZiXc31P9iRf7B",
  "key1": "63sFf13WoDmQ8J6qGEhSpmSZbeLowwoxoGChFAyQ1tgheYQZaKNUfHGYQnHsqYMoS57hyaBEAoqEebp86zPGaYrJ",
  "key2": "3Dqc5MB4mDxAqzTivMCVafagWJaiNwtApbjPYu3bd32ahtLWKwZRYEJMivPaTpbGcPb4BRn2Kcs8BGaqfyUN3Pmw",
  "key3": "4mvj9REu9dTAd5BQ6bptx4TyQNTTjJLEhrn4RK8j2HbFwRmhTJwZRN4AnEQpqC74kiZNDWd17tEKN3zgTQQwyz1T",
  "key4": "3qsb8Cx3GBtDaqsMyYe9hF3GxBwWB39yEDYdW4wAubLodrodEuVQaffRU7RLMxdD3NRAWsumTyRWzGN7F1R5HfWA",
  "key5": "2YdZqKnQS8wZfVgysHz6jyRtzb2HbkBz5hM5vsRRciroupGGuHHim7wWuuWx3ZaEzTekRohBitUK453q28myHNRt",
  "key6": "368bTDJbvBASL2AxjhjGXh239CiSn63ZgZNbku1qXz2iiM6ySpwSFfHGGCt28A7H7Hp3Vmo2BVHVKovHmQaMPWJ5",
  "key7": "3FS1jEz3QW1Yh9JQ3GopGHeFvHmgMt4Wqu8YvasN9zE91mi1vYtcXkCtLRR5cdQWzzTpKtdRQUQiahfi13BfKjsC",
  "key8": "4ucX3iaKmCtcMMo6reQ8zBaJprCEJVssx4BP9rwR2uLKLEPp8ffGDLpgTZrXSCzq2HDYwrySFFm6fNwgEeF5HUee",
  "key9": "48BtA3fAwGMLysgyo6BCA5p3ffTebUf7umP4hsrnTwVv73E52d1d5xasx25AWELgRo63eKuqGmzLMjtEggQQ9uCm",
  "key10": "341JU48DrpcNkAsynJLfQu4b24iso6k2V16B7damkhM2k4TihYx3ccYodJgU9yTdqYwyzwuNQBM8deRchQ7yyfB8",
  "key11": "3fBbid9cSzrUc4vtwAYM8onsiHmJKzHTFL9gTJmJv928ENU45nqUE4TGtCJjgcTzjXSArdJ16AN84agxYnUtNtai",
  "key12": "3CAo1HhcURJNFZpK6jDtmbE94wSBTewphvk6ozaAzBJgkTE6o7dBPwKLNmUJPmHLZmsYaye7uFiD6wvVF5qXUNfE",
  "key13": "5p7GsMFLeQuBZwumoGZWxr8uHFtTxhq4bPWfJ97qHMBGweqKPP1EZ7A5CVVn4eYgTmwuQp2kS9Td1sfdqisx1oMS",
  "key14": "4kZRYimf5az2SVuazVaxDwGvtdyCA9hZH5hAgzJi2ZkVEdfM385LCRneGd2TVnKm47L4nsjRTQzYmZHpEP1pZa48",
  "key15": "53hQN58gSdcojd526gAbs9q8GZn7jUYewc86gRQcJF8sfSqSQ9BAg7PPkUdC1go1sK61KVNnAA7QgofSkAscK5aD",
  "key16": "3Zc3weeyrz4FKorkEd21y5DFeb6xo75rJmq4tCDKNk8uswpnAQ1Aa6h4wgAKgBUjRR9GhPi1z5TZB1nJTut23Dqx",
  "key17": "5p5jY74YirtggubfecyavxfaPBeUrc8agCSzePRkrZCA7g7ibNf2SPUSPbxub2GExAh6BLT3FgKtMQpyPwz9FBb",
  "key18": "5ybEdhuMAMbCJvLP3uUzqbYfQ1NvSvfGfX7A48gjF8KLp6axWM6vVb91EdskHoUUyho7Ynphp5Dg3kkxtbYEBgvE",
  "key19": "3uMYJ2apML3LVqHfeGJUo1VvCcSnGTssqBAGTYhmAds1mbidnhT8XfxQt2DjJ9JjRep7NFMy4iYKWDbz8TpN4wqg",
  "key20": "5PLCTEJRCtNgB52H8CQNUqv6pDtqBc6H9z4ive3Yf64agBLvXm3kZ3mgyJVwevFDN2EvF3tYUFyrj9UmRGDpz57X",
  "key21": "3G8HzuD6HLVx6zvGdPhTUTKyxSq3tgUmmRDFzpGzSA2mb92nAmZLJfZ3nWMYXk69heqHSZokS4CyqPozjZKRkJk9",
  "key22": "2A1omWcw9FLFWpAYjb3NsuR82L1xheDbD6Ek6C75DwaYGNMKjwuBLCNyPQMCD3tMCzTKHaVTjUerv4TZWhqishZn",
  "key23": "4DGHFhLaasx1uxcMU6VGNKQpXR9bG8EHrtV32uAKBs17jY9oBLi5ddLPGC4fRVV9hywkFLTNvgefhcAdgXEoRC7W",
  "key24": "2VuV5intY4hpgKADofhvCGfEPVjbtryp3CGediAEXZvtkbQSPg6JhPiQ9qTmS1RsfAtqtmh8HMDsjyE974XT88pG",
  "key25": "2Bg7juQVwA86SWz3FxduA4oqcTkCJyW7Kn3hRyjDSpG2TVk9pG2obXtiUBUnz2sS6G4xPiZpYJEkdS1ZKafE7BZN",
  "key26": "52nfbrZURwSf4tYqCkCS3GMacYG7F5TEddtHaH3bgB7ykZ5HetbXpBbhvNrw6YGoENsJxZKU1c9HjpKHAKbqM7nt",
  "key27": "67GvZLydDEpY1rMBWK9ijbYpd9UasRaGqCwSkM96FYYBy2uFCK5MmdsJxBauXqWCKhsoLgTfDeuawdaC9ipLSfmJ",
  "key28": "5Kt7U6BLNom2dHG7i8z7Gn2hQUeWQ2Qokw5rHnYXKV5A9tBREVvn8sKjxF441M6NKbbmHfQmYFXCg7aUrjxkYcKY",
  "key29": "4g9JnXcNt26N7KwgSBV4QwqdAGQNkxWLt32E7dxWsHFBKftbhDPk13fvQN1QWHyecdH2r2TfW57jWdQUXuMft4fB",
  "key30": "45Jti4YaJtLkzM9UoznavTW1mYcejxt9mHWZQUuebbvCZRZ5PTYuao6hDKXtzXcXTrcXEreHDp2YbCi25amqkoHu",
  "key31": "5JjYLr1knqUQJUycvwdGJaZ6SBrWkQL8wSnsM3eTe8XBubtsrCQsXhnZrc5C736RaRrjmnPQGGzotWeUXqWM2ri5",
  "key32": "3dFzbzfApz7YKpQKGDNbueB9Do72AmXUMFyoQdjrrYW8RMyFYsJmg5sTXf4qJrjtSADu3xzhgmtDU589sumCyGhy",
  "key33": "4QVCqgWhmtqrRWKLS2bo76vreQ863yvY4gGMnAjpSjgPJybB98ge65DgJJu7d5qUyxtvY69bV6kTKnzkE4gmMASW",
  "key34": "3dQKwzH7X1T1AaTEPPPHGfq2WavfnMNCK7GXJgmHe5KVmvLohDiku2xPqyDEJMbCzkKvAtrab9HdJvPC3YWF2tVh",
  "key35": "2xeHBYk31Srcf2mqYzb2PLX8NXYtvxo2t6U387BHh6pcKzdYHwWVXbgBtFgqmStygMpdF3tinFdYZCJeQqZsZ8rS",
  "key36": "4VFfiDd79PniR4HTj7EUf5PnibZsmD9aLH4DVXJge5o7rsoVspyzFuw7XU7tKHTSMN6DHXev2tVuu15zkERHYboh",
  "key37": "2gisEz92vr3ktByKZRxBPJYQHShG4Ah4mLuB7Vfu44zMz9kKSTEvsdUYRZWDoqmmbMkhtrXuGu9s4Z5167V78bGd",
  "key38": "5RmRPJn3ei8ykpsCXy9wEUDHFaLaPPkXZRda2rZrfgZDDRcyZa157bazS7RwA1CQF5gjUDHcHoaZBo1MufeLaaK5",
  "key39": "8xzHZ4KSBBThYqH3BFDHZmMUSL8XoCe4vmy7mNb9tXCmmXjTJBd85zVXzeVHnfd73PwkZNcxWrSTqZpxHKGcWe9",
  "key40": "5U82yp5mPrCDQ2qV4LgrrZJbgdea2gwmfvnKKMemiFKESdYpwhgmSZ9Fv2XYroDQBNUiMyczyWKyNJLtC5AzvU7v",
  "key41": "29N5jpU1Xd1zziUuB8Rq1yXymU4GXCVndY1HfvGwtqcq5YsiixCeMcTbkVjE67igJhYurmp1DyvTXcjGkxFVcirq",
  "key42": "fq3WYBahsjJHjnfZJzpB16VG7v6ctajy9wG7KBimCxdfib8FX7t6sMMUA6JAKSg3F626QBKp9nGshPhKEnD4xZT",
  "key43": "4vsuLrMUxCoK4coM5VdakfdUrEvuyMk5wuVrSue8YQ6c5PY1pXjBQz2fn1iuRAdrfwAYLFc4tKePuxsdjn1uhtHq",
  "key44": "2AvnpMCfe1jRo7qYsWZL16VGTTrrh1QbZrxyzraA1DtiBN75ggR2hXYYwWwPGp1yZoDsffvhkuWPTwFwd6rhCpVY",
  "key45": "6FP9ShitKMFtKR23coCrjiWHyZR7L41xi2gxQRUdNGYudEeCup5aKFeoUzyAT1CFRyjXdKvD8AGWHojHgFF2Jjk",
  "key46": "3JVYUbcGXaUrn87Z4gzcgw46jkMjvy6sWdeYhppFhpNN3NqaSr3fNqNVA1zZQkbJutTxC4NHPFBRaHP1W8zcZ5ks",
  "key47": "4NTABC77hgqMK737K8djNkrJhbHDAWT5s9uU9QpbYfTEXp9pDva8ywmUXK2aYj3YLvSUkPhfSjC75Ti9pyPzq7H9",
  "key48": "4vDR2LgZbPmttUWwGy89okbWMLzq5VR1EHnUFCapVU1nHbiTFkn6UV8upabBgfkZDJV8ZR7Nz9Vvct9hFQrzTCzG",
  "key49": "21YxorfpuPXGXV7xdYju1jC2xptmQyVG6FYbVYxxRGfjZ8rLr1aHwzVkCSqGmfGs7ZTC84aMMeSLc2AhBLV294zo"
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

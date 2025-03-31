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
    "4dChbj49o9u7eEgS2E9bmSPvP6WpiNdSHrR36uwdGFAwGduP9u3q7GmpQmHaxwzymxM8k3pKPaVuQqrAWgCCXTM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgcvHbfSeZYwMUDSuAiQqxDKCwG5wkjTh4CkgtsCHsLUa15JtrYRvuv5WipTFRbVoM3uTirKKDbjWaXUW66NtWf",
  "key1": "b9mPYhHcgVTT31AGFpt4oozbonxxSF5zHmQNFo9HYZbWoDWCeC7Q5gbXJUSVXXPf2mAeeDamLaaWAagAEGQEVj7",
  "key2": "98mUTyQMrSsqsvRjVwU8rfuM2M85kpB8XwX6qRmMsUE1dKSYPohwVuaYmpoyxUkyC62egsXNeVEDywjXzauEfzZ",
  "key3": "5JZRqZe23XkeaWD3o18xHKMkeo8iyzDfgtKbWtGRUg66yieR6WGwYjYKN48ruLfwRX9gHcLJ5PmDpPgKsxRe2pvy",
  "key4": "4G8uyjyX5BKTHckxkMg3bCUNMMscGXowqfqiQJXr3pnhHLVUNgpdhoEGZtadJaq6L4FcK8UeqETmVrS1M7YiFkyz",
  "key5": "4gxfZK16pouhqKAaqiCr89wBhj1VJfwKZzMcW6p4HdVjiB6PtA8NomSFrZHZjGxrwuPq7dEN9vH2g493axZaQjnj",
  "key6": "3umNnWuPtNqidwyLhfyAVBs9QMnmYs6pJkKfg59tr2RnjHqqmWiwi6a35GHKkJdCKoegSKox3PQ8VEJHvX8G15gF",
  "key7": "zrM9biZ1kwyJZpWMtdZsHFvZsqrqvsanPHamyE3DAbsFtLQXucy81ueUn1zJmTQyT4fRwZ9yR3mP7T4TRN5R4Py",
  "key8": "4TZNFkw3N1K3GMASuQ6wATDqUvkB4F6RoVoDynrwihkQ6UPzfL161rsL1HLz2seD6TQwxqGJ9M3bxReC26SDM7wt",
  "key9": "2DwiFSmwd6xTWL8gJfAr1hLFLJtWfzdyACt7nCZxboexo5z79hjXPUprNnTXeSzRxMs2Bv2WNxpk9rZpKWjSR6UY",
  "key10": "3Bgq3xr1ge8y2oeMBeCb7KNt63jwoB51gWUDkw3W4TaU1h12s6pADMKCmqrzyd2vyYfTdBU45UF9MmwZRLH4YVgn",
  "key11": "3KmzKGspJ1yyXfV2VUyTFXkzdD7zxPcfJYWWuK9N1AngE1uQegvDx9Hr2P6QiyHQwVkbNNv3cQQLV6oZ3WWbxCT9",
  "key12": "bmGPhc1JzSte4jiQgJLwR7b6yFftgg4U5aZZjF4J2ZSzDS9zgyEqBYnvKo5neXifgF85PfBYU2ynczRcDWe9UHn",
  "key13": "v9yy4iFdDxqhZKdYBE7Qjc1siHVufxUSsnTdvPucvwSj8UiPStDGyhLgibMFG9VEePBqiGxPzSHerP3Ri56cZr6",
  "key14": "4TT2P5MW43FwZayzi7ifBVgcnuFUkRY9Sr4WccvAmQsXH8eFn2DjaRmLuqZ2kGVYZRpByd9LWUcusJifQZ9qygEC",
  "key15": "2QeeATGxLVV4tsb16ZtTZLYtuh6JkbZakXqGxUzmh2yKwLa9soSWzjvYBJjqWMrEqg9jHSFsNxbo3tT9H2FTFLVr",
  "key16": "2VdXdfPEpuZmXD9PMgPAcjtPUGygXkft4hKcMqqfXQG4ipP59Nw6u6YWsiRoeaJs55StkSbet5vQPKgScLzajAgS",
  "key17": "65qyTSToVJ8gvqZnyhcj2c83aBg2ChxqbQ4LgHLhq7n7m2nGrh11FSkBeCGYeb2Ber7hUSyUc4K7zo2CqNGjaPrR",
  "key18": "5FJ5Rf3wFQNjeTQo4JNtveogMJQahH4WkyaEdxWCrX7KZpqhhxJU8XrCEA7RkDS6d5z9Q8ihdkcazMPRUXktJtVg",
  "key19": "4NNoy52VcmphpXiJG11yaes5tzPr5Xaq23MeVNC4BQ6sjKwG7aRHEF1rwywEGk7Yo8AWoTVA3Ck9zKaBKhJiNnGn",
  "key20": "5xcBQvx6gmb1iiQuwEAh6tF18uMUy9FZvd3TuCuX7f3waTMPepboqy3JSVCu51eYM16CdxbGpCxGHMKLeS9wLF6G",
  "key21": "4jfBTCK2HfKybTfUu79vVWwGzjEGdRHTKcqdvkvatKaW8tuDUjmQPKm4KqPEU19yG2XrUdfQawdvRFSAFRpBDouB",
  "key22": "2CiVxSvQtYYo1Jbwy72Tsn8AE3o78jqNwLK1peBNBySzZAP5Sv1ivAqmXdf6YAcp9pHp3o6zisLdRb1CjGtVFRqJ",
  "key23": "XbCCnhBbkjL8HP97yjhxotYDUu2PYGkfHA2V6L5cscyFwuBs1RBnmHs5mwfGJdSmzCpX4McC4tzTWWhkNNBUp2C",
  "key24": "Tpv5k12ub8VUUEcE4NdHRpcniWsPcTfp9oTaNdpuydFkah3SR2QF3wcgn99vpdPkaTv2fH2ecGUtZZGnmMHDMUY",
  "key25": "5d6vEkNutahNRnKFo1d8p4yDTo4VHZso18LxPhTysfYvyxzWf5XAwyv43m7UAhZXrZEyHJcWMtbEwxCFDqbUhCmi",
  "key26": "TBnj79oF2CPR6Mhv1XZRxSEPDnJYVw25DAvQ8776TnP8GVrJiQXppaGNZWz2SWRa3zqDeowz6AJgja72RT7z66F",
  "key27": "3by5WeiJWqmyTCJNG3vJPeUzGV45DWazoabiYRmJHYiLBcQZLXbbPJzwVVT4MPb27BTZ7vvkwa7JFdHgHYRdmuvi",
  "key28": "3WrAAtwxHhjzdN2UtsoU5LrWtRtdkcqBs4uSTGWZbSuESZdq6Ak976B7iUx4qT7qfJ8T2UKgM8YMahbmXzY7h1fr",
  "key29": "51WjredTTPCuhxduLoz36Jj23pYqXjdQTTzsP7fBDJkkbhLeLpNvQkGagQ45nRkSsgjSHr1noPNTKj478mZN6wPH",
  "key30": "3ALBDLEJr3Ges19J4BJWk3VHzhmTkChnkCiixmyrWkXbyYzb9qZkfzr5EdgKFBhogrTq94XvBTd8cpEuiPaTQttf",
  "key31": "3aDPiXEfCAWTws8ggFDJtXvSd52miSUSWKZ9k3bLZnzJCH3m7DVGoSFroQBwNKRN3vPiWMDTDcccEiLxJJP9MM8s",
  "key32": "3eyGGjtafX7tBb6cGYUTaHqo47MawNzfzo5dyUvk3hZfM2agYX49LgcKDchCMPB4XSLCANVcGjjStDVej76daTe",
  "key33": "LC94x8ZrSorXJHDd3jcapEP2EU4UrPf1dCZDrfHjKyTScM3dTX74CnFruW3yUuLsRwK6RMYrzE7M4Az9mjPpmvv",
  "key34": "27TYQtAT7icoVAXJvx2Xoqa4bNK4eKonFMEay4zJSqYDjn7u9Yst6FUCti2kVMEb4NSqQ3vrxP38mS6hn5NGJnKy",
  "key35": "5K7Y7PaYJD57nRTzfw5upbDMwySvZNyoELPs59P2LkUWJbZ6NiUmTjWgEoJ83to7takQaszbv9gLiLHhDbQp7PZz",
  "key36": "APJ3Uy8jddC3ZvowgwGPuxEqEwBrfdSK25kJHpAMnrdShzCbHn9KeWsoqN48yXHZgTcwqDzYWTZkrCYUzTFfaPa",
  "key37": "6243Xsy3Hwmp6dmdNo3xnR3sgBYMpwcaBgXX4fNUs7M15ya7NT4URGhgissHAsHV4t8iyn7puwXKXdCJnmmqyDwt",
  "key38": "3w7Wp8Co3VC8jRoZmStAbCkLd6AyPazcnhD8ZANiLLstc21VhsCXTTDg7h2RMnYpMYGN9qYunB6NAavCRcVSdESB",
  "key39": "4dntaZKAFbgbwhftje3WVWQ55kvBzMpLRRbRgC1DxiuHH39yBLZUDXwUxUASFSYjiukGpEDQ4UQbyVQqsvKhtxkm",
  "key40": "5qGvnUBHFhgTPcqRWR6EVzQYdfTp6MK9LrD9y1PRxT7bUYxHjm3zh3YgW1KJNuYu9Cv1ZNPqfatT75fCfrNBNqL7",
  "key41": "aEvsUB95Skg1zgPupa9YbLPuQof7Gkoxmh8iEidHppZGtCCpYuwCtLoh7J4ycx3PLSBfEUAkwqCQodYBA4RzHfS",
  "key42": "4zX15wKDWUX7nt7Hj63KVXUb5QWXqJz44NMXsjNubQPSL6fFnZ8kkBD5QZQrNMv2mzvWPfESavS3ekvppaLsacYr",
  "key43": "2dgzTeqPwwvPR8ZtFewtbAzQVhRg6fk8LwKwSsLwzs728E3Ya382jnmTUyaaZowPjxcVpXkbbCcm3xj82xDJnauB",
  "key44": "5B73uXK4f1Hcs2NT158kKFwdLYPJpDrnYieoAkw49ddXp8TpyxN7xdX9uZ1HcCgcrULsH2zN7mSRckV64zp5oZrw",
  "key45": "2fDqGTWvZZpo6jc5dRed3V6rBprmQxCC9rDDNVQGsSXFYPLchp8fXAsfJ2gPMpQ28mH3BZHUHU6Rn1TG23K4rptz",
  "key46": "4h3XNVLKpx38LEFYHn9i1LCauTZfKqoaK3Lt53zE4bSh9V8JxRryZRjAkSmuxFeieC1NuSRURJKMPKMtYiKWYc2x",
  "key47": "54bAY6jF5WArR7Tr1wKj4gYwQvBQ12aHt55E7MCC2XpxfqXva8KvLqeho3Pr3YwhMa2Hx5UyKeoh75biSDroFqKA",
  "key48": "36zeJgXTHrmgLAa8qoCTCh1M1pJUtYpSAGMXAeMQDYKDbE9dQUvD2KSMsQyyTagPGQF9b8gw6BeLHEnhTNj1KT2M"
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

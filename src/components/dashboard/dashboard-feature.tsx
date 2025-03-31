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
    "3mdtQzzeFNxJptmaTaEgaqWakzrpxi26zMHE39CRNCHr5djU7LuEKxiQh4okcrZMsSCiJGdCmZhRQTvkr61MaeYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRfFoze4Qn8MHMfSvz4wgFEm2GfLcPCkPHERDEgKs4D7teuK8CYoJWEzZDoi5VKs4NhaUjeQZn6L25jUsWzUFsq",
  "key1": "58mJWrafioWtFiD3sCXJJZCuFHxnQ3HaaKg5Rysh859oCHviGzhoqJuRzrLDwuJXfvUs2NATP4wGjuYoEaVfnZUF",
  "key2": "5eVj69PCrw2fQfyfE1D5RvGAjFtEfYFXh82n3rEpWv45Er6rj19dRuva4bHs6d2KBbyTxPuHMTmxrVFxBK5rQtny",
  "key3": "35XgEuiqiFN5u1cBSK78fQcmskFz4Ak1gqJx51Q8uMJ7mZbwWx6qJx8KpFFzZ6XzPtob3ZP2gx2CRGThbia9Cr6o",
  "key4": "34QcKxBXhGttZR5FU1QkqvLUWcuBroUi3RvigNwNuNerg9gt4qBuPD3g8jPGzgXdUkSC98m7LLeyx63kqJmwyayp",
  "key5": "4SegkyPb38UX8HdRSeWwJJLz8frNmemFpAW2sz5Tw5vpU6ZkkibY2vcS5GcXC1oxbAGf2dbbR56ripHfmxWqGXno",
  "key6": "42ueW1d6ebbiU44nR6AVRFWXofn3ipnY5bM9ZPRyQw4gjinDBaHeXutBGFqewmfyB6WvJpkongUvg3M47X5vKp5Y",
  "key7": "44yR9qDfbMtSBJwADTH5x5yiRCypAifePUCoCG7yWUDTQ3q3WgndcK991z2qTDDjMVhGaEWJcnGxGSiQjnADzUMx",
  "key8": "51gjKeQtfsXNE64hRkfNonv9h6gfSKfJth2QQQf4bNfkv4yF28ofW21Xh6MQVpp3whCgjefqwXwuEw34DRmRK5fR",
  "key9": "4Trmj5MCD9mCQuaKumzzAYKaVq19Yv6gzbArXMfCs8qSWamoJsC7VjmiThTkEWoCseQgPT9kBnknAZokZhCaEZ8w",
  "key10": "2tzSaGAGSfaxV9MiyWo71EsPiQAVj61mmUMpHjyEe8EkoEngqxoWN8yRwLpHvdEmTBE7xbpXBWtff4EtA6Jz7MSe",
  "key11": "S84JGJjMACpJen7aZTBWieqWeW9MwQSwwbQiCN9CrT8DgdYghDhyMJ9KWhF6BerXEiSzVcGRRNMYDmNQFrM6v7z",
  "key12": "5L2qFVckaUo4MXDNxpMZ1UntqYyVhvAcMjot348V8Pz1oUxTgtwSMVZ5s85hibRMkeuf1ifRuRpuxZYoEX13jV1U",
  "key13": "2zq5BNDPL5EycFEUEaJgt2dVi1GqMpBP7fKDrmDzPbKA1TSBsCrz12rEEKr8sfS5iBTMxfanoPPe3riZtdMzD3R6",
  "key14": "53ut8gih78hZ9oE7HNA4vLme8Km3hqZ9bVbudTDW2VgWbdTuQMuaxmFdr5t3BKtbFBYz3zpwsQo5HyYdSxCfZsKz",
  "key15": "4Cc74vHfsgebYxcE9ryBVyzP3qGb5KeoBNHBdRaxvBAp4EnHgGB9HmgujogK2zKZGQFRNnX5EendKEXEBP3ix2FM",
  "key16": "3Drem7w9NUv7emSMBGt2i9SciQXJYCPd5o8GF8naLK1fMMxrFAMd38t5SgqUvkAXRwxu3z1mE6rnVtGSzbSnqDnd",
  "key17": "5iCxbsEP4Wub2eZMfYDQCFgQeMcY2UkzG5AEjcRhQSbLAqnYzCWiyNW6beiSRSyPNKi6cPQsjtPHo5NsQNQdS9tU",
  "key18": "2o3BEBG92neYeAmei1fD2mx2Scna373AB5ZxuYGmhxq1sZhLqK8uxgLyCBbU111MWHLDzeJ3hWYUkfNJCuFuEiVj",
  "key19": "2N7pUtPvRicDKHSuX6pnGuQUKZrNf8Xwd3bsiKwbos3zGD7DQ4Uk7bytEsunhvAfdzcM1HJR4UnXvwSEEyu3YwrQ",
  "key20": "2yANJ7Wadh3wB8PtfMgxFXqFSHFeuYG3gdhCdp8ux9PXjubpNaSsaJBiSmDfqna8GnuG1wDQCTwN2qb2ftWMS7d5",
  "key21": "4HcjN5uy6ELewoj6woaRHyHUL2QBXTU5Ps37DU3C3EkWokLeRVQeL4o67KbXHQpWxXoSksiCKrn5yJVHLAX3sAab",
  "key22": "2NjxGbqMhcDFJ3BavPwyvbz1FncJdMBDWgg5DWsYFDyaTExHEme2F84ctxzZAd1vJdvkCSTarytpvvt9VpmVkSoD",
  "key23": "4grQ5KBYUY6Wz9fu5rDxMb2facvozsHhGTdKSho9K7zprgUAdz5ydGJ12mWRw6JasmwUEtGUvqqDnZfD8RkkfPUR",
  "key24": "5RvqfxGDZKJw83TQWvx3SgGECSGSiun59Xa688LXJV7ZYLSSTQVjcPzbZd5G6dF8xmH61S5P7x6zw1Q5Dq6jxtup",
  "key25": "3pocN5yGdavrXaF3DGxeY4hohZX5FN4UFfNEsBC56e2a18FEmQgM8jZ69iQbmPrhjWKwD7Dw9PaPCktwfhjKCKzR",
  "key26": "Ee8Eq24b5opkZbr4XTTM9R9aSkmWuET9QVMcnMQ74v75T2387UhVRce7h1DH5naeZEnhZMdfYmy6G5zneqHMr1i",
  "key27": "2n4rPzNvFdyTuhNA5YN8XntTkzf4JwiaGRp2gnuWtacoGzvWgKF8nqZqBgrh88nHQWKrSjn7m9vDkWazfgCKSv79",
  "key28": "LZ3Z6RdcvXe9vshNyCpNTXJTUPEJQbd5T2FExWUmAANw4EYfqUkw8yBWRYgisthdUjP8rsYcSDbXDh9W7KF97Ag",
  "key29": "5Kh67t3ktDUGdGHcC43FZJdA7FXewaw7rE9zLnBcPerWHGsdVsa4QjZpvjkgwaq2YnXHZmYZrwtyHArdEWuPwc3w",
  "key30": "4jciLfEMXFmQRVzYze3oYyWwjqUUTpbkMXdp99zPBNqMZ2mNztE2XETGHXHhnDD7GDeHh9cEduA9FSyB3BroAjsP",
  "key31": "2MpGd9W6YotRXaf4ztYsobCvAthLYLzxMfS9jEapibDJJsoeeaFKyQHMWbpirAyfrX3oVeagsaqZAT2mUEUEA4UM",
  "key32": "iLAXyqQL6jtC2fvWCVcVD1qozoSLDmU8woDAmsCuaFzLdAYdvePJkigwBiXTeLUNC4CEN3QscHAZBUuygEcaDuG",
  "key33": "18zp8L3MY3n2NqmtGosdBQiepwvMvV2CxEhRPnKegUhZyeLJqLoNkvCCY9HuEYsBeFog6vazHwZYwPiQcLiRs1q",
  "key34": "461M7kHoGebmAWa8BDQDYvY1N8uLLMbJvZrHpMv7yeqjxFbf7eHqXnG3uiPPmL5PBnD7SMR3yFrbVTswAgVD92mm",
  "key35": "2MFzaAbGwhCunUZwFCC5c3WSvFurCRPVm37SobFMvHH8Z2dwcmH7Bc51TgDTsHXUfv2ZcXRbwTWAGjSk3vHBftKj",
  "key36": "5N4Ab4btyXB6F2V7MksVZMuurxZ6SoJ5qQTwBy111p2Sd22i76RePWErx7xyeRCVQyBqBaiaZZTMhi1gswjLE1jn",
  "key37": "5h4jLi5DTcYFFwBUrEp1x3smf4cDHDbRp7Fq2gWeWDqNAmVr45SRC3q8r6mhySfTovSGPFVPvU8iDByZYMUyx74N",
  "key38": "2pCzudQDNfjYL8a2PQSG7jNxjf2dGEst5U1wgXeLyaP3wAvkrdajSxP5jbsm6XKVqikQYy8UW4NTkfVfURQXwsbt",
  "key39": "4beBdkiKzgFsJQQRR4vLyEu8fPvrAz7PXZ9UbFZzfeSkGx3AypBLMpnxTojKxBbWTdeYH7gWpuRgPKroDYKnwanD",
  "key40": "5B4n9vG5csWCC7rxUXRWuei3TNVkndKDs8it9jnALAm79WN7XHv9SiFFV5YNVnefbj5WJWxzdyYbzy3JEhXZZd7e",
  "key41": "3UwTYjQqTmC62ZYAH6zp5DUjvA3CVbmfHCD52ium1xuUZhzU2GAYssrrZoRbrrDW4tgi4w84SKf8ZZyKHEvNKgAT",
  "key42": "2XuoWFwsGPu7CFWdUpj1KRixqjVjdg5WZCDzAcMXQ32JLSADLx6MtREaSyVokgL6ovMh8f8v9UJbQULixpJJhx1p",
  "key43": "3fT7ftg2rvsCNXr9d5MRufYkbL9jtw8wGHocqT1aSqEq3BApQpQYAWMYkdSz126hKmaLXJiXDhFaUDJKiW75wgXG",
  "key44": "4MoVB1DfQaZSKGvDrZmDv4Pq9czL4M9TJmXYdt1LVYp6tSwK9ZKpKdFNvjYUEBZRCHYvdkYCnzxDqK1zbsGt2Ad",
  "key45": "vfnaB6xZJkzwhFmEuGfnHPWPw1LXom4kMnuHQECnuGX2aCpv1C4a4DufwKuF7P5MRaNULqRmjMwmiypY2u8rcGw",
  "key46": "3rVNmGTGPi9PoKwwJBHrqxptpVd2io7B72REzkvyzZpkvV83oq6jYn4NuZ9S2eoByPrpDTEhG4L3NMJ7ATzkbkzB",
  "key47": "26BupvJN9yrPGAsmN8YEpMeQMLkcbQzGm7V1unC1KHH6keuJu5egm6hr2yYW55o6NhzBY5C6cMTpVLoCesg9DeGY",
  "key48": "2aJdXsbAoABSXgqjqbWiLwNC3QB7sNNfynTSVojyygfPYzkgS66dsNXzJMUHhm9qAVHaHqJFiER7zaeaT68odVfG"
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

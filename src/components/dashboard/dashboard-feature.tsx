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
    "3Z17xGkMPVwHvUct3s6jUkxPrpmZ7qQbNvEA2GKhy9B1tQ5gnBoXucM3zbVFCeZMC681iEFBqNbA5Vw2qFV8eaHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27M1swNcdefQo1XBL1KwRBkvaEaTNcVtwsgE4r76TEWsud9vmXcCLWR315Ht3BcpUHUPfcso7fi13gNtmedgFvsS",
  "key1": "4rWhsApFAmyUEYoBBm3E5gG1cxMbg4G6xzZibMjAiJ6R8ZyyAcVpVcpCjjUi5dwdrVnwHEW8RZavsaE6Tjqikc42",
  "key2": "5bdeF3DAoAisDs7ankNwNM8Y79Q7EidusFo42kWHbHjTE2NW25ieAxarryPPGp36SBrQkR9xXb8LdqQyjPDxzmYM",
  "key3": "M7nkY5CgWuJYdbdVccBdJrp7SwtdopCqBqEeDhfDuG1AqVbZe7mcXySVhV3VXJvvnjxttCt9boHjG8Y5V4qHpms",
  "key4": "64LFCyN8jTheMuVGp4bWPy36mabdFetijkxAVqxNHmfVCbuV3En9dvq3qwqocoH4bNhLWLLeE3fE95sM7veFejg7",
  "key5": "3V4QQTJgFiPJuxW23AoN19KvrLixBPYcnikBhR6TwqL3dVKWNbobko9YgxuAMAJAmJnz9ijFvKyqFvn9Sg1oMjbB",
  "key6": "Vv4cFqffVmvXhYu8oWDpLsSVVmNHh65JJXFBj4sU6T1eb6UKz8Xm5qgx1dyGwdfomWJdkY6iyVfKUx38xjncEsC",
  "key7": "3MavP71DqDUch59m2dA8d88aZpKcz5Sd7Hw3PhMsg3vjS85XKR9tDuRMxmSAcXrdUUegnBdrPKfUoiBYF6wEcPFa",
  "key8": "2UJRdutvzXCusZ51V43JT6zRpLvsYBgGV1stGoxKEvNVY9wN4TqCjidMjMLUePWijwUrpyaJrXxptJg9czBeF7eX",
  "key9": "23wRGyoT4LbfZZr81mkaRemACLbhex41bSY8vVHKhjh2XjrLgEFxkYkyc4Xc2PCAh48zhHw8VwQ4ii1SLW1HtZJq",
  "key10": "3QCHc5beefHPheBipWKvy7osdea91z3phQjmm4DNJWie3vz68nLQ6fTZFkWRRsJtYJGVZuixFvcxJBFx2gNXCZht",
  "key11": "5hBnAdru5iQvT8bwb9DLAjTp7xfoWp4LAs3s1mbQ9HP4kVEai3DAoRjd9o7temYP4rVuYwmRCBofXuf3B1ubya7V",
  "key12": "3dJ7sPaQgvhiBRJXnh16dvopZPhPsPCFLT526zC7kG9AeHZF4m7J4565E2dtPVn4uECiujb3a8xomAsheecvX4dM",
  "key13": "5Ay9dVsHzJHgAcSEXEPrifWp29kAuK7VRhss7Vb3ub67hpdt33vS51oX7BJSZw5N1j28ZbFSjynj9mQhFW8TCrRd",
  "key14": "2b8TtNGSFGkFXw3HxToo7XnTSco4RtqiKNGYXUhY8eBM6XDredZZx43idAHs7vvhY2etzfc64YRASLZaiBjRsSSc",
  "key15": "3SCgt9jdfjtd2Cj4uYLNYWFHt6eNvstPzjVwAFJiqjKhJG5sHyn12nNnStyZGTFNx5unhvoUPYge8tWqzFMN83Fr",
  "key16": "4vK9sdQ6tZbeinsyqwX2stto69taQ5FjF19uunFazdVpHCv4bg54gsVzNte39A1TYw9AZPae5aEockfWkjE8oRTM",
  "key17": "39Lmkndx3EZwDXkJAuWCXehyQUuEcCpdTcZEFFcMCKyc49dUUzQtcrXJgyBH81svLaSzKtSVmryAvSdJ6HvJDeYE",
  "key18": "5FMk7Bu7rteuc9gQQr98zQGKJJWXphfKN5ntErThSRJ8jvwPReqYNAguiJ61BGXmCDgxyiMGxZkgvqfoLUYnYsir",
  "key19": "3yvvYFy2DK8YZRHEMnRx3b5pm5jQvxcFnEfbwWXMKgdaGPTXTjXQJE859b9to2pbnjUtoCeyToAKF8SEnkovn2u7",
  "key20": "DL3o8ebntsb7WeL4Uw7DtrCBLN7p3kLLyjHkNkN6V3b6CxSxMMGnhtv577k9CvJWUd5MuPtJwXsYCtupSZgTHb5",
  "key21": "4gnKyHP72FF9GddhuoWA9eikvixj3hVqzPQ1mFGMvYzMX9ZQjigX3vdoHTmcRxVD15EsKWcYyZRGW9mdY1caoDH2",
  "key22": "5aD6sWExti991JfXzE819SQbr3bkqzvK5iJNwPzawCCVLMmvpWHsyw5gJLYy9xUtgrUUR8ndjVDqhUZgd5UZNqyd",
  "key23": "4BTgs379euhFEW44BQ6Q2vC9budeTUaCLXHFNuvTZK1MSv9djMJ1Ci6dJMe6x1wtaUqtjzoZAi4KQss1a2KkjRTi",
  "key24": "3GiFfvvbnmFLMVuRrLp4PTVDjNE88DYHp4jh3NBrE3c2Lb9zv7gbUydK8Jvx571R48vtfPigd7VJxPoyfjDB2PCY",
  "key25": "r6A9DsWRS2cdwZKhphopXFz3yvzoMoqfsa4qJ2e6qbUvo5wajnsAua1cEvGweywrQwbzqN8stnGViTRVWETaqh4",
  "key26": "56AzpHDHYs7RfU5KYubyTsbDHDLCwL6Yuyf7QXRcYsSfhjNR4HG1crzrzv2gNBamSsWkm7m7t1wcYJyPWRTmmUnB",
  "key27": "5vxxQdTw2e3XoufkwZ7v8qDma5qNmo5PHjHT5KGyN2g1HqibQUb8vy43jju2uQTnkWS8PPWJEyenGN6MYMe5JQc",
  "key28": "4vVZBfodeCGFNszCTHqXDbU8k8zXzsVhq1jWZp436W4aRnXCKK1fg5p1Q67BCVNAXV9JS6dQTJzL8y8dmG8jj9yk",
  "key29": "2rzDcNqqHdtshFBZJ4HrUmEgsV38PHdw7x2scEe2VYSB2zyG1mSCCuDV6mJmZokiirqyenxQth7ksyM2XgGuKw9w",
  "key30": "2MerRdJMNSZLBdBKVtmA8phCzNp2dgN6KDRggGdZjdFgrQiQQdtd1c8xc5593KLvRQhc7BJhfpUuX5WieTQ713kH",
  "key31": "Gan68wnf37hd2vXtFosPto5vfhEPkmk9v2Lf4VxZkw5WGLZjL59MVJnXMPRq8XoWiiVEnvTxrXKJktWBp7wnWm2",
  "key32": "5EqQCTpemxjhja2SfEHyEoJ6784x6ozvmLZDron1BpHsAS89wJVB64vrWjDTEfo1YDcGQEuUGdJKkLtePKbDMQ3U",
  "key33": "5vYysLetQSr49VJJuSGKUVwSmnhwUcUsQmNcTNupam4cLsw9virv34F3SaQ2vogcSg1sfphfQpg5Rj9yoxULEBbP",
  "key34": "5PkwojvTXYk7Q4WjHkMiKbiLywE7cwmEuwCSq5nghvViyoKxTyrRpJj2iC1z7SLRzJrb3FT2Kyt9i6qdJ1EotVYd",
  "key35": "4GpQUrLJDed8e6p4U83pkZNtDcjXB7otKzrrVBp1PnBtAxUMz3coU8FXWdenja9wmHChqMdiyWK9iz1D9yaYZ2un",
  "key36": "qR53odyochfoX4PqG8oyEJAkfzXtkNx1Jhi2AVj3Xa4Nanejmm7tGVQC8WAmKykthtg7VyTf8jCGmgqZwesAuLu",
  "key37": "2pbEWJAUcAwuHaSR5j6VD2ao941Bb1aHQvBCkY6LNqSo1ypqG8kjJceMJeXWeecuenk6t5e9Qx68XHQWT9UGL5SY",
  "key38": "1ikv5kopbW5ttsByK15mgZpKHCDH25fXvMi1uyEPYSiLAWqWZr8NPtGWompVAffPW9wAFtbSmYeqHdBZoFdAwai",
  "key39": "PQvuEziDLwABhfNuXDW5Da4zQQ2suqnJyZxZqEtdQ1AKW9LtEgEqcd3mnJsUTodQJQjQ3fDEzyQZTqzS9WkXAQS",
  "key40": "2dLsuhpHm59RegY5JbwF1e8BHBdUH5iycGkj5C4C1QsFvYLwJWUQjGkxXxuVE2XWNVML7DTmKAuN4khrpjHajVrP",
  "key41": "4MmwPuBP7ZDTLvzE8GwPKz3k1WFLYac9co3BwUY3hho6rVkU7nP2v8PJEx8AEjkjCUkXUmb1ob2CZ7pFFbpbXjMc",
  "key42": "2Hgo5LXRXQzRqQKhyzZApE352w7drPGpPugkD97L7UkNZKpnpV4nvFCt9q7DbNG6V3VRiZTuJM4cDRexvJLYNXZ8",
  "key43": "4ivbfmSaWwTDAVLSvfqdGXcqc4et4CcGpu6pGErT2bmynnoeZZ7G41YkY9Ed6RSP2JraRh8FaPAJBwgbBVs8uQsx",
  "key44": "2RxPmX5v4ALS9avg7saSu3gXwVwk8bu85gKWsyeqzrRBcPaxXmwrx3j6xPM1BrEfGUGaE73Ah7ysyHuPBZvnvREH",
  "key45": "2woegb5Cub9tshS3hf5nV2mQVCV89huQFM9BKQjfyPzzpS3d23nnRJoomZBdppcewQBNnsQxfsEUBNVNQMb3w4Gx",
  "key46": "4Bdd7dFjeXj9pmV95kqhmvqYS5GiRXAAu3RKGqF1BsY6iPKRGZa5phVUirwb8ef3zr9mwJtPSy4hWMYWkz9un6Ht",
  "key47": "69jd5r9s7mA9niu7uxF92AwBrJzeHCZapD6GqHDFAkfF83pr5SYM3PeTxZeivQMns9UXkCDefdacMi2NtJyk1Sn",
  "key48": "wxJKNtzd9WVELh98gm4C3kDLeuDP7rDsYSg8eTLY4vg7SbwC2zBagrFeMaipSZeY39xb543moLAGMSDZyuxKZbF"
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

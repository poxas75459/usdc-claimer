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
    "4Qhzadc4Zk68sxQSQyHW58DgTaeqmjWKXiQF5TAJBvuGwSJdyikLXzgBxWPdEy1sSh3Fddq85i67Ekgzadur9UTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48X54siw1xen4xX5Q2aM8osknnp8rR1WzQpnsHt9VYD2vxVzxnt1JnkwJTu7dnTjWCJpWaBQkPzMibkGDWC2DAUr",
  "key1": "39vTzaopx6H8ycE9hnTPdgRbQqhKJ32A7Nz51xRMjDPrhL8WUuUGhfMXiNgjtFQrQKbaN7x3NLAXsMABfKsXbF7d",
  "key2": "5oYnQfEVtt87nq2YjrPATLsPJgmfA9LCHTpHmMR5oaZcSoZnA2eyeLu38EqnKxVJ4KsfTviZku4Pbqf71ixUmZ5U",
  "key3": "4Q79xrQ45bTZ4TBVChtwvve2AEiRt9gWp6YWH8X7y3XnvuoSht2vo5H4HnKiPeVLUVzfgwpHSiD9Urby8pFpkwBA",
  "key4": "DE4BtFbWXwxYDj8PaZmv6GGYTSAJaRQHtDNNTV12Bcc37r2tqw5SS1QWh1qt9DQotqgtVK3uEMCyaaSnxmdmWQE",
  "key5": "Lfxg8V23NNTakmshKi9qU9VHNUytDoDKMN39R9j38oGA5pjmC4emXJYuqoqkUYqEWFkwCXtzfWY9tAbbVxKbdn8",
  "key6": "xZNFuaRZXQvvqUTUQmQ7vHRC2MtbFD39pNCY9rJXQcMog2pNwEr6k46zyGLLC4gkjgBh2S2pWiBqQPA5DvGH7GQ",
  "key7": "4GtSEQmkmfDUacEschkeFc18kNJmB7F7QLF9sh9autyPnR1PeHZdpd1DP6QCeEYhiCGW5GctGEebEji4BreDSG34",
  "key8": "2n3QeYxpPdVhUENSgo2nAp6To1Endxh75o3ASeSxfcdwsvD2wpeYKTPjvYrBWUVgRXyShEMP95YJsi42uF8SRf6z",
  "key9": "2RxP29KUgyuYthfVCthAtAHdTbrY5S64V9bzi9Qm32TDrA5gmuTSbVK3tnLCVHoYyaigDcvkYUnPH6uooJPPWzdk",
  "key10": "4FbhKWq1GaWaMfynAE3SHQnPMKvmA8rTv75caGtAAvXFY4MFhNXTHbiULAsiasoQCBTXhkfjqcmr5qWf5beiDGFF",
  "key11": "5yME5MCxDJzo4GiRbVM6S8yebUqUbY7awp291QmjEDbxWkU7mFyoJKvBeYufAjEJefz3NLEsAB6854W27dafhQFU",
  "key12": "4GgwqsWb4y9sgw4Zpuw74kJVv8jG7DBrex9Bw7AKZ36bLvKgZNTxVG9u4hQNGd6aDSh6JViVo2an4TxuJw1UQofp",
  "key13": "2aYXyWgm6JjvQbUNSkRTRwb4PTsue5Gjk7auCByJ7FqHZU5YDXdz16NWnpR5DtWe67E3cQr7askQxu7xpB6r89pP",
  "key14": "3Qj3jtLsDpDR6Xc4mSZgCp7DZ9WRjK32uDhcqxLXtapGJb7PEGZSFbsmJmF4zSmeN2Kh6Pm6bCws5gyvfWR1qwML",
  "key15": "Dr6XQrjwu3YzFQ6J25QFpikd6wVDmnLD6mD5faAV536Bdp8sv3hAm6qPvXsdAiXBXHjj5tsoZVrjkVmz8SdZUU9",
  "key16": "3sQFw9fUmu9wbEKoqGop9XVzLvgka1BeKXtGMCdb1AhNawZwLeJTwTF3fq2AbHRYyxGPymKySt22E9vnYAJ6aN9d",
  "key17": "PndxixBhaRNpo63UyK6qwAFYZD1xydJDcsSXWRtaSJprfHLXpgRPqDMqh5JJYVnLoHMXL8SfEmBR9PnDcFbY6hE",
  "key18": "ky7oEKQfukR39Wa9NuR6PB9X116Snq5iFGHqeQMBNzvx1sBKa82JyoAXPWao2w1q9ctXCgdJtpxmAonFp2ZU3Lb",
  "key19": "Tq5VmmExo8HfB3mQ9AzdGJFnMnkk2evEAxAanFgeCs56JeF99ZiKUFLRZSdaBYxcANXm7bJvsohtEPLM1qEJ5dD",
  "key20": "54dPMqaJfnGNQEuBL953eCvM8VWv85vLk1vziv7Sh9gLec2ejAZv6UAm6kSvtpQEKzF9JbiJ6AhRmPDUdHaRQAfx",
  "key21": "2iijCSYk5RtYoR35kTvyyeFuMr5X2pxExZndJ7C39CdTsvAjGmpFzUJvsVrup6yn7eZxHjdzFvDiR5qihc9SuQvs",
  "key22": "2f6oV35JEjzMqSXE9HdRZBu8SpusU5886R7bzTeBS3sCt36WMgHxVRv1fBAqX7UCuYvQV8jGGjqfY6YxRSXXa1Wz",
  "key23": "3MKKcQNnHcy4rj4LG4nASRDESmWM4RP8wGqYBDE8uTR8vdgLGvTyhQvqJhPuQpvcjHWqsLES8D6rjunGQKbcW5bt",
  "key24": "3Jxgh9DZ9Ta5u8Gra9cTsi1BQjWZCuSMUQS2ZVwCvd1t8txvQfZVWzJcU7RCitLPDqdgdDhBh55uP7sCxPCtYsbA",
  "key25": "4gTdi5wsknrAQwS6JENfWvnKrdXYVHid1q2QEbDfkn6dqNQGfkzu7FHoBEMJnTvH7wFpu1eTJSVDJ3jmpTpaUszH",
  "key26": "3W6cuBq6gNL5MCV6TZkpt8aLCtZH2mEJjdvTZ3MXpidAMQSGKcjf3DatPxPuDyPuYjJMvx6FXs7hRbFwV3DYRV5r",
  "key27": "65n3NynSENZHokFqXVgDin7jMit1zeVaT4osmaXKCwdiAhRUNaAERPwWnZBoLw7KS87pHdZe21rrpCdemQNAJgyg",
  "key28": "3pMqsE3V7tDNWX1SkNsHtgTWbKPGV2Jv75BgY4zE8Dp9B7Fq24vP9RuYJZ1WGorPXFpruHqpjjBbNaeuxvoApnkw",
  "key29": "33KzWUs5bSXjDL3uuJK6etMKmeLZXyzCu1qTchhdXSPrdLKc7sMMFXh7u6xJA17C7J5173EmSiEwL8e7JvEsjNGg",
  "key30": "2pcdqqDyi45hdy8gJtvqfkTLsrwb83NaMQC3uBwWdqxtYfJDp1g4FnvGCniic6fm9RYV7Aw1R3rFngg1AeMKW3vW",
  "key31": "WgpVbxNUzHZ4WRrKbKhAaxNQcarZdV46CeRZ1DiXtNtMb1bGfQyHN7oqAnr6Ero4yfovmMeN3Ew41ZZoKG5sMAF",
  "key32": "3n5xjrcG3PFehGUTYzGpkB7DaWJsV4bYr5P7tKmxkGbFSmFuVb6CdhG55KmyzzRjiv7qxSK5EsJdH4JKwVWyyL5g",
  "key33": "4Z9hrX75NMZYCvxbc5GnZerS1qZ3GXKpBXMAJWCuV7V8XZ3cqPNHMjDsqVSdgXLyuPUdu5JiaQWVYyxzTj6DauD4",
  "key34": "4SVAUCQKZk8E6z4cTyFMfJceXKVfo9GxrSB8Tfqd84J88ak4eK5qY7SYfLu1RsB7C1EyK3KbsugYM7bxaKnX5phW",
  "key35": "2eB3Mo8gbyCEQ2fxbZ7rVeXMi4xLnFsHCDPxbRXMLC3gehAdNsryk7kfc7pKMNDuPHyQq3MwEppMhcnkwsuD7x6n",
  "key36": "24MBcr5Ha7SmtG3UAXKhFuZGTwfeKbzT9nG3giVhXYeL8iLVroX3Lvyfb3uUjtVWKymAv3NbzpGvx972oZQ44RxS",
  "key37": "2JdDMVRFe9yZcuKpYDPVD6LMZJgyF6RgyxZfJUo9dRDXJywiHTZ3tkqR3qTJVcawXQd8PCorfm9nq9yjsUkVQAv8",
  "key38": "2TTCz71si6y3yACxqUwdiWUKfE8tHNAniShraTpJAS4EWdYCMFQNhHtCX7oMc7Dzh5VqvCMwc9ELJAAdsMYNsBSx",
  "key39": "3Hknw8pbq3Xvn7xSmf5EackaTxjjmzTyraADwZCEvogSFeRPVD44urjzmUdcX43WCqcehYRmwR799E461VSPPsDk",
  "key40": "4zhb5T6HZ4xMc1xdLqcZ4GcviobvzTo4jYJc4FQNLmQuhPyrs1mNNxScXBg4e6crVzZZ9zeJhW5urrzTDVzdDqiQ",
  "key41": "64Nf7qf53ioZAKGRbzjCX7qa8F2ytNbjd7EC16HFwXvHzfCFkbV5fZv1vcRdzTAK6x54SDyr2jsRm3gzXTCty7Ac",
  "key42": "4JnNtGn2wQDi84isRpTZgZqjBSZwPXQKVNccRroA7uY46qCQdJ2BKZX9LMksa5TExRbiSnVABmdEKNrTiiaVXVDT",
  "key43": "5m8bh3P8W8YaHLD7JVyh3LKQbGAzdEu89LSbmvCs36gMRju3Tswo62KiTuMKNkG77bs7JqrdorfUCQ5dsQt1VncV",
  "key44": "dZNoxJSpDg8wCuxygMDwsQAyFnVrMeEo8bjnghDN3TUiw6JVEAhNxkeWsi8MwBcQjq6x8gtiRS7CuukzAtMiPDH",
  "key45": "59uwG4uTMJ2g7HsA8c8qVCiEZDQboujy9SboYXhUkSc69Sj9cbRcKkZc81bcR7vek7DnQKCG5dxLkosCvYJ5xctw",
  "key46": "4k5wueoAoyWK8fdo62eSKoUYEXJSL3qYeTcLJkpydNm9qvuu7rbQvNDaSkXwe6n2uD9rdTPh5rWsaBnheQ9LiJ8k"
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

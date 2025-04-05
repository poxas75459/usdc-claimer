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
    "2byXjZUcCLGNLzRJUwQ5G6buXRAawNHBzMfUqHoYoGg9QJ1824HLjzSGPh6EbDArnGYErUwwZRRmtFNZfrcjjpBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xuxYWn4iMawf47qYwqNPK7TKYJUAxGAm2GLJs1xfAMEzqRsTkMAf5BeiQKcLkMJzDRmPCcCR9vhTUz8naQ3kdk7",
  "key1": "jQBeYX3aXFCh9KjX4oF1EYXa85x8hdeTZFgVftRxW646AWa8Q34hpQukrQuqauWNMYw2qXfZgWmTzJ8tYzTyC9u",
  "key2": "kgzzRShXxWS3Rj3zB1h1zoLoyVKfgh7nF5YVriPrkFX535fBnUGN3ove99pVpYoXnqDozk2usAHmPVMdn7aWmYy",
  "key3": "5pS5PsL3bn2j5j3jEo89MjjPY8bXfPWV9GnRPRmDg4yRjdjtbx3ggJHiJfMGfbgjqfrNSAKaV2JW3qD7fLiggqNA",
  "key4": "4bHisUgcdALyTSXvkDp2RNubvjtZMb4EWxdp3A9GdRS67jEjB1ys9ZnZm5ApowzLMwBZQwM35UYFkKeHU3WNrofd",
  "key5": "aQexWGPKUCcLWyM4Z9tH1KewPnxRynzwF9ZSVpE71UJPrfvgPrbu52GvvxP6XvzxRQ9ufyza4FFykywyu3gVbyv",
  "key6": "KtSfoKP2bSpqJfpAwJ7sRpZ7hpXWXtE7d2RtW1gYcfWPWsxirook6XipJWzkRETJ4PKhppLYroYGfj528Kroo5o",
  "key7": "2WNA7WJoMFXtWqTq1fsGyRsRvW6tFZ6FqSWs7S5s9fAzhBpNnAfYYy9mexmmDLADzb8AFLWcCCsHXyGaKjiLPi5C",
  "key8": "54fP4CojYyNtk5xgU2o2EVqi2b8o9a2GdFGd13scPHdLqq1ouLpyXnrzzi12fe2WQxCh83HCdemNuRNrjmRnzuCa",
  "key9": "619YkZe7qFZkoUBNRTKysbAYehPvhAqcWH6tLfdvVQSRV2yR9MeyCG714dLMZs6CArCPG5s2T9GKjQa9EjMFHyZ7",
  "key10": "3xGUqjeccT3R44Ea2QP4xWas4dJZ325uJ3GNgnLHeaky1wvmXBTP2VzMj5Bz1aKcMNK36rSfibubpvpAcjfAgZ5Y",
  "key11": "2z9F4yF4s4pDqPAkvY8VPQkbKq3XAk7umUEEnosqHRsTmKuq9MgqaNptCrYxQRWLk8DHvXKSnd7EFJSqVWfmLPof",
  "key12": "29W2sfVQiK2zWFBrQxmuW9hVJxXe8z9UgGaXxx3N5etKYxxT3a99fi7xvs2dSjtqUSXUXpu4fxvMcgHmCkPxJwDx",
  "key13": "5yrcE4WmXSpTQeBBrpbHsm5qJwV1kNcP48ssPrYC5pRBzSx3VGhQ3X4wNrXNxFR3fTs9VhF5zvw8cSqqGujipBRB",
  "key14": "2b2ia1rzY74tUpKAAWeiwBPDsEnjnwPiY8MpqTU7vKjBE7VgK9rKpPa88HXMpufvSVHRsL8Sqauxpc9ktdrSYSnF",
  "key15": "2cv1VCxkckd6KNj5w5DRsbDvTYsNRhuDYAKuNVwegjGbKoSr3Dhdj8EeAPeZqQpWfB5WJQ57VD1FfNLKg1ccNgrS",
  "key16": "51Jpt9m1eSMegW9qxKiLdsE2kKpb1PWVcqAoiPh1PRKMp2hT1jGr4tcXcCnMsynG3z1UdLzDYhbpvrn2UFdu3YKJ",
  "key17": "3Gnpwe6viwA5a7cXYkBHdJWYaMz5g2WN739uk4mkv2h8k8gmJsuKn8ynErhTCXcLFQJkG2UKWb3gcBBgUn2cJdtq",
  "key18": "gTXByvS3YRNqq41qRtGxDy2KZGwG83gG4iYEs8tSYy4rMPNLbRVEV8s4jthz4RvNEFGxsm8aNLh2BUc1cboRWhv",
  "key19": "5ZW9uMXBpWSNXhR1GXUBUFbS8RaaJRsVAEsPE8Fhw1WhNcyjtCFXnWGGhmD3zNbsQbhbuJUbHhe5FqLHqiW2TQsz",
  "key20": "2mcAsGzW27pvTGoDhn5r5RnGhRQstyL52E4u2kFWZQCRAuN1LwRTCQeJJ56LaJuGqeCMSQ9ymjiJCjzNe4ASFbNN",
  "key21": "2Y97w7fcXRZjWkv1a3wxL8oX6UzsxKbhNcjYX5R4eoNfvdJWV44poobTNNfzPgden6AT3Vo4TMPW7gz5UAwYukpx",
  "key22": "27VJNFA7jYNDqyvHMEGPMhrMbX2EVUGX8Hu49LV1hJxr74MmUu4m5oCuZbbCdB25Bny9kV7hAQh2wRN67VhUzUVC",
  "key23": "4RSQ13bGK7iom8V8Zq3gUFZ8B2V9uNhUNrxCbNXV5NV7ihiphhhXVdEPE1JuYv8KSvtdm1DMwP9Mj57GQxX26sM2",
  "key24": "3XWeo1sPt9MvUPEa2vqeGhLeGhafBZUXe7tRdS1Nms9thCeS45rFppFZETYqyNveVNXykghXz8BxzcPmq2jQ472i",
  "key25": "5fTr81EoRNzDLW6z2YrfDVDREs1oz2cvtnbjVD9jnUuKdFKBstqsfBizxNKKGZKvuDEyEk6W6aTxRTKagqbpZ4ya",
  "key26": "5KrgxXTsjSzjJ3pQm1TGymPtD6kLNY8tFLAqfTNGCjRG4zDwsVTuB3aKzsijWDrYKt1J89vbdxj3CXvm1MAyvAPo",
  "key27": "frpYTNPcM4sLZ3YCskDh8MUGdSMwijgKHBfPmTGFvoW2NcjsSSTfiwz4vhtAZbozJ3HWRJZ9K5CN39Suep7FmKx",
  "key28": "9pRs2QojxXNDs4LMgcb2Cuzmq1BDssikzhWtci86b7rjw4WKnLia5Upp6zzuZihpx3jwWuCpiXd1AThvV3W7E9Q",
  "key29": "25wRgmPNziFuZdFYMJCLA9CKBaafg22q46vjgpLXpkWJAVtCoBpMwuHks8XJybg9DQJKRw6EXmcLaEup1qgjmcLd",
  "key30": "4Z8vgfjwLCf4YSxxHx2dj7h1Y3bLjuh3B2qnTM1C77NCGvBGAqgAPU5uXSqF7x9VzQKMVgvSsASVNnCAqEb4isGk",
  "key31": "4z4Df1ojJBgyQ7bF3S9FRQXsn7Soy3ethS9xspCU6BGF35UE9X7geLq4gXBAnujFFtjdtZCZUKW5Af1Xx1Z45gEn",
  "key32": "2FwBcwnrVmekNriYugsc8xmMmeXe4oYSTfU22z6V4CKZCbqV54jiKMBgtgGiH6nBfZv4RCkpZxtMVBbVYzWgNQRx",
  "key33": "B3obYdE9ptQpQvH2z3RguVG2bjbgVz3DuJN59y6MyEVjx8jrHUQx57VD7qCQp6zQ2xtjYq1nkNamZa6iS337Los",
  "key34": "2yc3JS9vASGBAA8Gbv8DhLbqQZ6mqjPSEAKvqVXmp85dF8nXYgyu6gNV2BeY9jCTSUQRLdjxLF9APnGhr8Kd89Wv",
  "key35": "5V5NACA9fiWLHH5QEF67RCCzdmbkJayWY6YbMjagxXbHuJYcijwjVEs7a83c9vNcK2nTMDGR1XHKbp1vZWwJTT38",
  "key36": "3pYDMFFDSxWx1EELaM8tATnFRo9ZVcmss3LeVkpTpG22KFus5SnstHwWi2B6Bxq9Yk9UZGqy4UTY44x5zhufSeEG",
  "key37": "4Ta3X3vWyGh5rjmiVUfTeX2CaKrkRLpao5QhbrfSVMSif9jy56dPP6dqbVeDARGK824FWjcGMcyC3vw8vn1H85VF",
  "key38": "wZXEveqy8E7baUAMJjcZKqfEhYAVPg7FvAYJHECaehxnnEDzKZgviiNvPwvDpGmDowBX5RBzDaP8UhZk1Sn3PCD",
  "key39": "Y12PFDnAZ422T8LjaQdiyHCXEQHNJzrwD41TrrRahDfGgKvwiaJq4yyDD6RE8o6m7LDmTup3UuYCefSZD7XDkjS",
  "key40": "3qJ3dKAG18vowJM92UcvBtf4AuA1FqzTiGhVvprdJGAVR1waLCHTSsyBMdYnZFAgj9yiDiobmQBhn9wmpv367y2x",
  "key41": "3jZ1oCrhHJuxjnE5hhkg71Q7r52cMJiHX3zuc76tErBPCypsnBhwDekpoaBr3BMfpqq1uYwiEcgozhsXb2u41kHD",
  "key42": "46SAMf4Wp8AELXD8ZNodSGpQDM6WYKrH4r3tUCWxv3i27mdki9L9WZkb7ufdJNLnDE7CH7wdR2sifMkEC3SgAgoP",
  "key43": "5gRr2oDa8tE6AGi4AFkZq9TK9CL7nMxAw9edqrbCysNYrT6eKFhzBdUFHJXQTyDJyWWSFAj48KafCmJxfXQh759U",
  "key44": "3a6wopMNKHciuJ1Gjy4EPfqgZJ34XiEDuExj8vaMULQwQYtbYbSsTW5HD7x7dJKjmRLY7KUFaNYs3fvUSGwCkd6r",
  "key45": "5BqbVHpXEq4NgAEbQq1sPYCKWyGChddiF7KFH4tsg7TsimN3Aawxy6JkhhrVxUM67j6GX1ktX8Jr4AzeHih4i9GA",
  "key46": "5hT2aLKJxNJA8YLTpigs4D5d7WxkV7zFJwgtj5E9C2k3gC7GC5rCaMKsyNBjtwaskcnsVymFjjQGm7kmXMozYQyz",
  "key47": "5n7sm7pDojf7zBwuN9Sospj2U47XVDKzFMhjgE3kBEFsDSaBUaCqcmcqB8UPuDWuMBWJdcPNzLtDVvqQymuEe9NG"
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

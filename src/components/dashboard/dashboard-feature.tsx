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
    "3c4gyeLX9ueeRAtqumorc3bMMHLz8zi2K6xZU8an2yCKAsx28rtX2cod2UXnyU26ag8te57yzJE5S9qP65UJQSUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GtH74xEioFvMTeaqHXDL3Dm6idMeQPG8czauEtZKM6M77hrfkkP8X6mEjyzQFwKD9n5GX2qNFNAY8N3GY184jx",
  "key1": "5rUnoy9664DsFpjWT6sTWGHh6jUjxEjUmCG7hY3MMRVvGcWpnWG4KXAQfNztakYiTqMumkt1GnnAGEK19jWaj8tZ",
  "key2": "k7wadRfwuMKUUfGxQTFSewi2t3nG6Mei6eLM6KwuanL5vJ2rMXgNoMC6dgD4VxvA7EMgpYR97QE8MynxxyCxRaQ",
  "key3": "2wpmxD47EU8EGCK3ZNVYqoXZ4KByhtyMkFmuRPCexX2KtU2SK2Wshfaq6jZ7VHBeQZ6D9SCzEp1Zvf9XwoWnRpBT",
  "key4": "3Wi6DHpnEZipTsP31RQBAzUERv6CFoesW5rvgnKry6JyxuzBWd9vuc9hT4FJHZrzscW79jQUtqkJu2ZvRw6uApvq",
  "key5": "4Q6jqutht5Y9zrdcnPvjHLu3PBQZuui2ixmbQyD7UKo244ZH5AKw14zA3k9vDeQQE4o63ftuq9JJY3k95oyZoWfV",
  "key6": "5ZcroaXfKisD5k9scWxRgGSPgyp25BzrZ1Rgg6L5u1VBydMQ3XtgaZ92QGUcjMLWYe5k1nFEmAcK57a2q8MpWgs2",
  "key7": "3dtieG4NzxtMrFYzDfKHybL14qq8qTSwECtXWgJ5wnHUqey8ooWgbDeUb2N7riMq6ZNnTZCUrtKoCz6XZ1K3ATaN",
  "key8": "5CHwq4KpDPDmQZJAYx15vSkEKqXEkBRFYuwrXXWxqCxqU2htUh8xYDg1ucJ4xA4LMC86U7N166diqJLsLwcaajsy",
  "key9": "3unRWmdyaQJaeNunu7H3NnKPWANuSF7nPvCZpMMRPmUNwZHppdhJrdD75SwApaxBRnPikHqaGguJkTZLVLEQMPXX",
  "key10": "4YHR4FGBoVBo8Y9vc4SfDfUikGQRAGBPgWf3jZ5nYvJ9ykRHYpWz97q6J14uJNfu5C6E6v6KjjxQ4QPj9nZV62UQ",
  "key11": "eHX1pCK5yKpqdDnwY2ugabDmV7i3yEVengKocoseeToiksC2fi58RMNEPhoUczBBgFHWNxpVuSo8FFa5QThWA8M",
  "key12": "2avdG2v6HwuPWii52eRVKv2pSScyo1wWq1eK4nBmbKJpo4U6kc9J3bEcW3CuBbgveC27VBSdNwxhSq14GyrS364D",
  "key13": "4GpUaishVESSsGwp4Lhdoq7Y1omqzcfvaZsGTBNnRyxp9ixH7e8LddA76WuMgurkpSS3B8So4qmQbQqjTeRsnCyP",
  "key14": "5uw6nTMDNHx3Tmt1Mbdzg8whQTn7wB6FNae66DKsLbTUufRRzcJMvVHCBvdgEKh6AKSxZhPH7vyqTAZqwQ1ez7R6",
  "key15": "319V8JHmFYw31NdSb8NRYPSAwyiWWMyjan6sxYfqoWjuyXnn6NGXeyKPeaf3qKYqtH5VxfoeVjCMq3prVybHDTEk",
  "key16": "4ie8DYsRUb8ENCLD6jWvD8Sx7RSJqY7iicsX1mXTEkYTMGC3VdBwNr7PZFtiZnmFnVNCaki1qNuy77QVbCv5avPC",
  "key17": "61X7hwFYtHMuLfQDnBmyAzU4iCG5duxk92bRmhaNT7g1aEujajKzYumRB2NjX6yhYWa4E7ZfcwW2tx1UqTsKz8jL",
  "key18": "31Z8kpdhBAnWmbP71dj8WvQf69jvn4SS591MPJD6hbjSMs7cCEatRoukfJtVJXAReVkeV5qwxwfjt7QqvWV9fJeN",
  "key19": "4EAcfVytEXF3vTFx8g8YzWVjtLrKtAwLEdLENEk6s52LwCyPr1eTncme8Ja43buhb4Ns5DPstMLN1xXWryc7C3Aa",
  "key20": "4APHN8FY1oLZZEJGcK2ifEggc3puam2JRfgTRzSuqY6XxPY2ULLzmZadsmrQjL2K9M3gEHS3b9UJzA9b5EacXS8",
  "key21": "3y1jja8SrGZTjRtqkpSRPsoYuRLNMNassj8Qi8Q98fMiJk7AYz8ipfe6fojDcwn93jeAfQrM5QtoiHZ1hW2qyFbz",
  "key22": "4uQH35kwCtBUQs7xj49MF5MiJipL5doCL4qEB5LdYWduTMADQb4XG5eLRdattfBGaiDV3BjRDkw17TLdXn9Cf7rh",
  "key23": "4ic3cBSv372735zHbPBxHkXyoQzqj4Zu9rAqHW4LTUw2PLdXPQpTNQ69Yd6DpeTE98hS3PpT25iDujXsXjU2qz76",
  "key24": "63L7ZNZkLHQJGitHf2mh88puYeTBxwWRD5P7byYJSfPfdNqXWugrqWG19MK2WCtPEkde7BvazYmwS4i8msWMa8we",
  "key25": "3JNu6eSu7fc9LFwURa6q8kYyXFpcurGA2nAFBomDqdem6R56Tf1pbxp3iynMVXdguMa2hdVszbAUfoHrJxmBG3sM",
  "key26": "cNL9EmwXpJEw3deGSj993udnhbcEngF6btNsZLCvYoLBr2pTzRhhNquK2Y5QPRTV3jYwAkPhnKtAnV2eqDf1r8w",
  "key27": "4cHG11isVoytxEATmnfLGnopjezR7972Ne9LXqHb1CVJQQ3GogpPNr2zq3YTgkpzpvrnmQk8TEtEFvLz5Zt1oeS8",
  "key28": "2RYEHYR1k84GgtZaeGwuw1L9ykBZPYRssUmP5vFq5ptEntfws2CnTvMA7h7Xx8XGEpN5FsxD3QHsrjDoc3aiiirH",
  "key29": "2YcrPviUenTeH17qkHGUn6UNC9y29pi3YcZKybyn8feWp1EBMQHHL1aPuc5yEiqLes8js9eLJttwYZ4m2Cavot3P",
  "key30": "5PusqDtCZPHwsKWcLDfDJtiQLiDtETT4D5ekPS2z53DMEs2AXpgrE9X6KVbffKZthZST6ju3LqpMLKPUNa1FhqKg",
  "key31": "45TqFMVk5DrQPDVqSM9hZkYcP5RJYKpkTWFuXZNN1tThzCtXhsiEzWJyRBkFAnoUJeEs4eGn4tvuPEBtupFoG7zh",
  "key32": "3EtsSHFHAyN6sSSRyTqQJ6tVp1Z449dNvhB52DuhXoA2jgfd3PcPcAP8FZjSHWPqLrpJGFwfGLibFHuhKZcQbP1B",
  "key33": "5qJHzFY6KeZiPnUFe8RwY6PdKs5MQ6FAnXts3Fp24T497QdypQXb5R46L6Z93BTTRUS9RxC4ufp5XnAffoafB9mb",
  "key34": "22xx3QcQbixXbcrsQE1QBtK8VnSPnVAzdMHfqw5LfRSbXWby6dcbBmB1CeapC3FXE88gWJ2y4GJ23942XojBXtsx",
  "key35": "2xTzKZ6vYFjSxowPB7zADWoFxNcEY5zKwQfwi3iUTCrSXzT6WThxiFLoc3xjLnDdba9vjeWtDJa9X3yhsrvenDrB",
  "key36": "45FkKvXmJZ8jcDBd5J4D5ZinejKCtGVzSnNYsUYw3sUyHnX8zR9uzEsNZfSRHn6FU1G5XAq5LmXjqAFCnsQfbGqB",
  "key37": "392QuJEC4QfNUbyCGmtNjRrs9c9h3B19AnisCFvTdeGj7meYaksoEBkE7QBBQxxXjtCrACybEh5tLtFuAkSkyzJC",
  "key38": "3DmGiK9sK5tYDNzFH5D9Kro9LLsuFMqdaS2y94crfXe5wY2cqnZudELGpxdJZVNywp87EwunBejqi2SkU1T149KA",
  "key39": "4kDveczPTBbqycrNhvWY7EUXiXhgKWCqenbHhNV1GYzTg9bLDbtEtqwX9k3QdmghgYqwwegVVyVTxZ1ivmF7UESG",
  "key40": "3UUNYUSDM4Fy4HXd5mpxNhXUJfzbZJ84moVsseE5CRpf6FRsBKoPpbxe3ZD4CMwWHBJKc31K37rGjGaBS3jeQycy",
  "key41": "3qdgNeyx3pLwRu7gEcmkpAqDojWaEc8SykU16yjKg2RZ3DX6MGEooZyzbtSWGjXEomYQcs4faQApSKmXvnGgUwX7",
  "key42": "4dQsAHeXXPNfFqvuKgVqta1FThDBAk1DRemyKoN6wbiYxLPcJcKG6F7fcGDTXV9Li55NxDXmGoTxMKWsSmUwxA84",
  "key43": "3RKXLFH6GhrLsYaykGwwoyAh5jsg6vskcw9QRgKQX9TwEhyLuuR2ZcdL3krud733uGKbHc6RvYu4sRfPmE1n6xJY",
  "key44": "5gkwvxkuXKxMjSoecSi3TwxJ88WByiMKPA2dM3bcAhvGp8JeBy3KCdbK3hMrVMhBcTCUFCMn3aRoNsjvxZ4QQk1X",
  "key45": "3hynxrcDHpgvLM1vDJwH9hksGWnY6rNhDiuoyG4yfwD3XTRegrh1Wfp3djRan7vbtpgUk9YdqgqHvMMHNgPsn1vM",
  "key46": "31vdwPAFzLrsmBwr7nFnqAyLYePLEV7K9EA3p7s4rJ7QfvmV3yGnAVvnsdKCEBUqhihyLdKZPWzjfh9hEMagTqe8",
  "key47": "bWCHYrSJ9F4TzzkjazTYcCubmMnnGuwefg5rgFVSGJARrTT2KnEny7t9Ki2s3WzWLE7sBsxkfQY6EWe2TsTHu4P",
  "key48": "3XEHaUhu49L17roDNnBaSCWyRCQwVv5orUT96Kjv65MU73FXQMUCUtnYqwyGEbJ34LxeGXhR8qf9c8QjXQqVKDf4",
  "key49": "3ghSfzgeBbKsrEnCRPuHPHojCRYPbS1PvmroKHW2pCSfn8co3EiYYY9AaBsyu3Tq7z9waVQmfFBCtG6iw4puyUet"
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

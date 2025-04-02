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
    "4izPbGinB9uH2EzCtoFagVVh43c2TyVPJK5g6XPHiMrU4eEBXT1uTs6NWwqtcbtmrp2oWaJtJeHv6Q2oagHz9PH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbJD4JK1c5d3n5W4g3nVjxEin1bzfhmnNWHuzFCZBC8rp35ZgEeF6dZoTFq9vG4kQo8kCjaf3QCBLaohjxuMEwW",
  "key1": "61QcMNNqKqDLp81cuxAaSHoALGCAu4rHtTptNb99rriFN5b8DK99ii4Toe53TcfZ6vVj2orghuVNRFiFpnobhFmv",
  "key2": "53TYzUcf2E4ebBzVweWAtG4vXbrJF5uRs7gTmGhBJxfDZgJu9BG8YPDZf8eLvbvQbonaD4AMWsW6gbxJxnK95Pfs",
  "key3": "3h2RiZT8jhCqjCXjyjm5zNQkLcc696sboWTo1hxp1Su9qURJA9iEUEmz2GuHU9VYHCUxc3t9dKM74Hsgn2QMLUbB",
  "key4": "ay2WVFZ9AhoSHr9zQPXy644FMnXp89kTPbCE4Q2fqNm5GzTWE5YYW64GMpa4yC1BWi8w7sEixtwRhcgccvaEgyE",
  "key5": "TWRhJyy33BHgCpjZqd4dt9boqawQWM3kihJhUPyZXYtFj2DECiXrMnGKDXzUsszVauJEqK98vkPWsGFKpUhYgKJ",
  "key6": "4P1zRSYmu9mEnyVAdiovfGe7y7epkA47eoTHZzKczTz65wVw6PNnC1gg8cp8tSzvzymxkJnR6D8Gh5LWcMLs1ZUp",
  "key7": "2su5743aGQpgusrmvYK2qLcAfJPqTbKz5nWzwHREecvHjqK1VPU9p9r4BpezSJRz6PfWfTdMsbDYcWCnT1CeZN7V",
  "key8": "4LjA3dNHRztEGKuTfXRMZjvErejUtEcnWS3vUSoPoBrv5tu3yVaiu26CHsE5a8LnHeFn2XCF3rTVvHmXTFuN17MW",
  "key9": "2S5XPPCU7DzooPSG2KYF7xWqRDSAbyuoFrhKWivWjedndY95QfPsKrDfpUKGko8URUFtHsg3MDyyZEfBUeNTXbth",
  "key10": "5bxJ3HpNN2HMSYioQESUamSgGK7qkzDfKbC9rYM7qMNHXXFocXUBPPEi3KvQsFWxiXom6YnHsQpGepXwLUmXPBLM",
  "key11": "tfdzZ18ircrffaDH2DoYaHe9zWvNJr4NTGGbLBe3wDqcoNJQJBF91SiRMGjG6YSP7UvFLr1LUZ2ASNmNgiSxEmu",
  "key12": "2mxjPeDMWh6cv8fkp9E7xcyUeefpu2C6jeinEqEJapvHM3JkgYTpEJLx4tPKw5Lcg1Wqr8XGVETjv5BrheevpdjB",
  "key13": "3YYo9Mt7pVfRBppCRoENsasxDYSePGgwp4oGVLsVuABsBDd5fPYhYJJq85cj7TXZHaDxh9o3Dwv3bE1twfNXkqPG",
  "key14": "P1WYD96xRrxYy6ohv5iefGPLoDL9Xoc7sruadqVJrEzCqSe2AztKS657NL4kaWUqPt9FX4kA1KqihKnEa71Lp1E",
  "key15": "3gc2wSGKxPu5BJqvsNTfFJzrWRtccEo3EgDwiRhqt42qdyuibcwBF7LDQoDkyVrqtpcNGvGisSkWE1XA3sHVkLBN",
  "key16": "5uzcWq9CdNRKQ9QoYaLMQubRF5oqSKo6CtMZGx5QBWkxPcm6XJpfLEQrEMkc3VQFyEMe8EfJ4Yua4VWhvazV3D7R",
  "key17": "28erQfexT3tSKXnn1f4oo5zX4DaUQMoV86D32hiPJKaHBatx4dS5Y2kNGFJgx6zvgF9Wmf6SUSMY9dWCngQUbenW",
  "key18": "2HGGjotHKZBa5CJBJTtvxPmF9juyUkQhgV4tdLE9yxTPDYqXSeqJrga3tinjP67ChskdnmBbDWxtK2kStWouqHcc",
  "key19": "NFBGG1k9VVxZpArsqVfo4fhAjidGy8HB97UuH3knmQMfXdTo7rLRhcw1YCEd5yB1coCkysN9Us9KxccEXfkQVMu",
  "key20": "5jy2hhwYs422Jqhi872ayDFt2cf8TFCitjhRZH1uEXSkPVdFtj7nm8dS2KYY1RhYQNTdkLbiVSAyWMnbgQcfWwbD",
  "key21": "i4Wov3dnwryhUUQdEVjBvYAPvdbUfr53ELAkAvE2GRwUEHgz7sy8K9Z1K5Log3t2aDWF7fY9HyiSKkrRs7FuBrk",
  "key22": "4hqM3o6NgsbJqds4Y19a7VW94mFVBFC6XfPQpCiqt9sAuGecF9FjwmaBML1kFjhTj6Ug1ApCv5jPZhcNwmN7LFMK",
  "key23": "3fotXYqY3Lxd3Y6sXGjAFYJUeHVLbxq6pZAJ42YjKSkqtZ5LVdSaawQ1cREWdrHYSPSGzdK4ASvRtB5VgNn9ti4L",
  "key24": "2MPQuiVMu8G1LseYYdfywjHyevn6sG1QfmF41Ns5oPyeUqZFyuBmVZvddaFNRssfMEyZdECNrvmQRJKGAPwgyPu6",
  "key25": "26kmsfFyfUbkso5R5v1W5iRKeifPqavYCntYJpG6kHa6QVJDkChDpCT5fBTnSZMaPGdsSRBRLWdao5FWvbgq7DKr",
  "key26": "52M7wqzZJxw1TRC7grNNi6w9oVvx5WnfimAcbo8Z816hs3VxAGfewT1tEsyr4oWJVKkcSM5SmKH2iG933QLokzxN",
  "key27": "3CgpH2GyFaEfecwPt5aD9K7kYurWKkm8bZQcuYoWZyu2yHUaG8ceXfXf4vvZCiYLicxWVegonygJMc1Q8e4KXCx",
  "key28": "27bdWy1XZqNBowsaMrRR6EKnzS6xnbQwTg8KzCW9ddSvRd1CS7JjD6dD7kR7SLm5WxkYrPd9ACY3mp4pkohcWyQq",
  "key29": "44p7QWk7Q2BC6CAW2irRQS8L8NRNMAoPHysbwSQE8xeFgEFu6aTedEiYNYzHD6HPEpJcwj5Zfoaj3y9ZnLFPHotF",
  "key30": "4Eq24V5K7QzY5cMz8SfKaPBbnuZyKP6PTV1ZncVkoyvN38RVgoe3SN7SiCtNWZVnCi523znu3WnT3raJ3U8whwPs",
  "key31": "4Vmnj1zb9qX1Ly8VrxRKPp8LSik3ruXKPLVzapAmVmeUeoDHWA5UgLVu7RJDHuMM754qLR3URDcfb6k9TomLLNjz",
  "key32": "2qZF3uAAdHPZeXEFy3H4tDPU92VRUw6F426o1npLU8Bwo4EEA592q6VJLr1qbcMeJyujW62ESn2hdKP9TFuchnzT",
  "key33": "5kuMYG4u8xn9pFPN439cDod4BTrV6iubMSzUB81bJqUZWSPY7BCuaCeLhN4r2E2YXwK4jN8GjroaJnwsV46mrvCC",
  "key34": "FRGrnWsAmt2VM7tXM3mqEdXd8QkbPdahePyLjW7MeitucLF7o8TF2UPokspJqPLUmo24HRogk8z9HaJt8E9AHaV",
  "key35": "2ADdd9y8DLQBWAAqsNivgqKj5gAprdEs9pzCsSG6ooRcfPhrCkN8qJC8nP9uZYX7aWHSoDs1FX4mouEnZemLSCT7",
  "key36": "3eEPziQsS9cTaVVJFkg8Xe948cWtgVUAyR6MKa8rVw2HHaySeYTsX1kdTuMWjh4wT6acDMhHHUSxy95jpwDjhUqd",
  "key37": "29bsfFKoS6DKzLyhVS5pG3PicuaRQKCj7H6U2VMqFP7XW27q2QoL7RtSP5t3QGvw8SmLxvLUdMt79ZvgpjTDkSxB",
  "key38": "2SpMCfM6p1m5zqwbBmmTPQRSuG8fF7PFZK5QWA8oC2orV2vbrpUAJ1w6vqVpghQYNER5c8jwZ1qoA5GnADcXVu9f",
  "key39": "2TWdCBvUE4x3dAvBSu5gFJupqmVnRqTkhepkSjsX4a8zbXT9rMmSE2ppsuR4Z3hFWeABXv9zerALLtWHi6YUTEdi",
  "key40": "5qXUFmVkMc5j63CDGSYKce2KG3NFjSNqCXu6euZp3grbfgfd2SeeEZgogu266wCsaxEmnikXH7EiLE4aS1boTH5D",
  "key41": "41DojiW5ENgZSWY2RJEoRgAGcMEwcaoefkUQbtSSsK6mKe373tEg7V2aXpwQpUNRzvYGNM3DBEqBxuMVtMqCH8sX",
  "key42": "5DU2zcisPiyzakeaYiyu9pDkAxoSbDFCyeX8extrMZiZci23AhLJq1HPo9TNBKNjiA49rStFGeDTvGaqP45VTM1y",
  "key43": "4XnRFqaAGgPTpWYYzKvX3kEdk5z7evMMWVAviVtXknN19rjsjztVCxevQ6VHKAwn1fKVMNetLJcDgVCFe415oaHv",
  "key44": "3iViSBB9CASCJfHfH3m52AEDVuGnLgAkPhiVkWwaKjAC8jyBqjgGSbMAWNuGxwhrmqgAQGu41FnpxHgeNCFAUkqs",
  "key45": "4p6nhXULoMNSjJ16FWBNqQg4FUboZDMwNpq5S6aDrVocqxNodDGv2HJbqNJP7spbnPLW8mhgEhQZ4t8BgZSzPbJB",
  "key46": "eoQg7AQLfgkYhh1EvwmVKcBo8dHM9sXiVp7t266K52XwnYGoB4RG4vBSpJagFsSMc73d9KrGdyCMvqiQUsZQTk2",
  "key47": "61W3yrn3MkNvCSd2AFb2AJf9KdPN1C2WH3Hzac5oKKhY6GDcL4Pq9451cfQ5q3smDMZwetLqCgxwGWmaxfvrZfQW",
  "key48": "3UbSZuszCCU4LvC1niDTo3kcxqP18nuKLuZCFFrAHQKpBrgJ4vhaSZiVg6aVuL3f6UW5tcz7MVaBPX2yRJtLfMDv"
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

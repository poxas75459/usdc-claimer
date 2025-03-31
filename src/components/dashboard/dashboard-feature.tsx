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
    "3ft7cEEyi3uWBEu4f8Mtp61F3fvzJT4TZX76Bphhe28MCY5gScnSLSnhUYCTEkc6i2xek9gR1mE9Bt6NjBqU6ga9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fSvHfcjGzu8Jq8x7TRvBjHHmxQs3fqcja7AzqLdnGSfPWgMCFekCVFGNikugC7DLNwsenybCfY7te3q5FD4gbZT",
  "key1": "4JXR2NirYkSyd5fy3ix91rgymFz44vGYDpfi43RbdTcGmhpkwjfiSDczZdLUCmHkojjEyMPi7tExSi1YXzNfQcm2",
  "key2": "5zS2xsSwHLSvWfyAwBkCWzFqhEgbwkUfDuj2szGsXduz8NMhCSVkBi3FRjQjRpH6hSYNWyGAuFx23PrXbQgBmyfi",
  "key3": "3DJJkpkjp7KHfVcnCMuMkBqKfZRamEfCTzTmT6CUVtWTqdeBkA8Z42uQu7PXm75GwP4N7JZHD8p1eM9dw82kgs4Y",
  "key4": "2X9PS2N7rYqHqJmEV6LAfbP3jTTHBoy3eRHmozAdLGcv5LmQvPkmqnCkPHKF1VyZXaC8nf7gZR25chzHb6y6BEj9",
  "key5": "5jGJFJh5iF6jr31m3z5MSMV1fLjw9tBSc7Ap8Az3838qsUgTbMwUKfTGqQZd69BtXvKNTWFw9Nu59Va9TrFfbEUo",
  "key6": "a3av4GZABwE7ZWjun6P5LuZ3v9yospwjLqNCoZrVE1Dw4eMBRph23x1KHrCA5oCGA21BmF1TDF4XZh8f7Pwm8JS",
  "key7": "3tVr8govGKj1zuikVvkXtPhDhsqQpmnzuidaxF5jwFsdjVUhjEJJLrqbyASsXEhyxVY5oR8mznLGd4aVLxT1obJn",
  "key8": "4nh2SdHM8swTJkx2kwSvY299BDjR2v7RHaY4cADRHVmUtQLJEW3BAmUBLteqAZcwME2ojR2CPWmxJU85H8P6LCJH",
  "key9": "4187ACppNW6FgissdUkpPFxyxPKYy6HiPAn914mVxoKg8YWzidPtkc7AFyau5Nn9JzLVo97yVJzHPt3PZtBEsRPX",
  "key10": "3cabe5jnYYZUmSQyrZjFGypkJCGnzZy8s5JbJKHHdCfiCVyfE8K2JYws9hCwGHXwAurnEGrUp6gcsFwxMFbTNfC4",
  "key11": "5ZSdw9VG7fDNvJb1bwAKSaQwiqrXPa9sLe4PtvQQXViWvV4e4z7bCr5NqyigQKHp86LZyArvpRHmYZdur8mmSzeU",
  "key12": "3M3qUYv4EtU4JboAE3NxWuT3droj9w7MiT8auytLYxhsYyK1WSuvad9UydujAtCC5n1o6CxYASgxWJ7A4eKYXtci",
  "key13": "SWf7942UNJxQ9RK2ieUTwXe1VXfmFh3LzFJUuq7NRBneQSpyMGxTmnS8ftYJBqUihh61bQqQZGkFypKMbb2kaZS",
  "key14": "gB23cTcGnX1FRaA3tQPwpSaa6Jjc68siYbusexVa11DkKqcSvdmoPTWNvJrDT3tauQEGdXgrdsQUFkaFrEX7yh9",
  "key15": "34Dq1QQSToJFKowMSMhAAam4rqb4oCHKQeg1zA3uj5pMBjSVBXLLCjNgBsYr66pFGPx7AEG6MpLr3H2gf1ENvtpC",
  "key16": "TBEimM3Mj176vgyk8j8XVBrX4pvk1LPe3vi2CcaCVhuF4i9xvsVEJDwxwMyvt25kKcSd7CtT3eTgnb4opgSyG9e",
  "key17": "3yxrYGngsm6vB4Acb1ib5H1GfAunaotGgompuLqRHNqh8pt2hWnPCQJbyryE6EN574oqwjCrPgnpKoMmQQPVj3Nw",
  "key18": "M74fGQbX3afrBTVqZN8JhfTkxRb5PSfDphCC8QBAT3TkipyznRt74czA2A7jhdkxfSYBaLm5JWCLahGHmooL2Mm",
  "key19": "NXU1MRiCAdrzdyyTDp2ezo6PjHeqScSu7TkSC6ACzaX2SK2KUx831o6M9mURFU5wJNvPYSq2PwYbtHFvsnYuf4m",
  "key20": "5UH8VaEekJSi9vHLPk79eQ2Dft5LQ1CxcpN7jPfi9nnpxPVJZtiKcsS8tDZ9it1ncXPkCfMzAH7YTjPWt5Nu1FLd",
  "key21": "whBFY8cKZ4emoTyKTRAerJYRxJSSdaXSCwpsesF25Mnj6vyUFM79KTLbZDBg2S4qKbse3HpxgwmZyY9zWXqLhk1",
  "key22": "DRy3UtV2tXhQFDgqJ6JYJ9nkEpgmtn6dMWqUD6Z2N7Vqv3UsrWfP4iybzm66zAdV7nEKnDrauJvxpTqD6TLPQNf",
  "key23": "4ce6SpzfNpdiHd7aiBR2Mcjb39wACoMWwnaA4tS29pc6HZSmTMWyZoaD7nTjw1UhcNToDURpkf35LdJsbLG5bKBu",
  "key24": "529AWupmmN9bGyk6vPvhTuDtYfJPyJr7bK33LUbyY5UgV2E9XgmdpyspyAqvhzvxpPV6RFoVmVSFuBG2yAyL5WQN",
  "key25": "5qzSJ6bEHXfMhCnv4jMFzqPNnnvrs4zztC1841gN2XaSnZX6k9qjXrZ61tkGKb7wS3GJsEK2R1B3bj6X8J65JuKh",
  "key26": "3h9ciPNrf2JJVqXaNEws7rwSmk2F9yiUZywX4mk5AEWJu6fZ15XciyJ4M5S1RpfhBgSZxJmHaT2HwdMaA29zWo6X",
  "key27": "43HtD19JrfF7ze16F5UysZH5gGeYekgDRptrqJxtZnbzfAEPFYLsV8UtQyBZnWJcztHyqijUh1vx2jyTnPy3jNvj",
  "key28": "fWrhBhTncwdwH2V3khmcCTYDpeErsLJ4PZBqDfVUEgjjqVgGaDCsc6onVH11nRrinVWpd1QjuCZDkrVecZWy9XD",
  "key29": "2SWwdk9yLMEhjqJjfWSp3dLeWQQLtEHwwccMo9xrofU9RQjN1dF9uhF4xHqh2E6AE8RDZ37k1uJMEB7wSa47hRv6",
  "key30": "2ou8Zrysax4ZsPzURGpVzrR9apzHVZ9vcF8rxbSj1F59cv8s84p6MNeWB7aZv8LgikFeHZVAVZdr2Rfgat6X7Vf3",
  "key31": "2WT9oxJCLdotLQ8GL72VxPirNvmxf4HHETWz4CDuc7usqs88yHUmbxxmoAArNNiqvddc3d1Pw54GTDQFtpmQgVd8",
  "key32": "LFonztB6CkqXvyomBcg2oGYvCvAcuSweXibZpA2KDmJzWsrQSXATFh1k5Umqh5eaLkqXKbxGdmCrK23dRsZCcD3",
  "key33": "56qPSYRc8NKKBB9fjS3qUaVPdrVGXUNs6cZvBYeTE4RKXzdKTNGY2Xuv87keDroXAe9UVrkrqiToEc89VMV61t87",
  "key34": "2fiyHAKZEDM6ceYdMPTPndfUYZqdXhfAbLW5FxHqhZsFyEf6PRhkGGwmG1tFx1VgWaroYBBKZeVWNowyJQnCi4Xk",
  "key35": "2wvQ3XZazdrpHEoMhuTbwHMCthL3zqgQYjjF87wQsznXQAvBEUM2hNPQpKVTABNLZE45t6cknSLELVD2MdnqA27D",
  "key36": "4o9H7oem9MRgamD4owmKzoch3dL5WXR6nts28LMX1fHub9ZXmogs1om8PotBJVjKGjiH9WBkocXxRtq1HsKTt8PJ",
  "key37": "3kWTuijXx1X1BNjSyY84K1NciFFuBoRaWYiEJjgkjDKV7RskGC7JDHeHEurAhQ3MYG2oF19KmHDHaDwumHViz18B",
  "key38": "4cJUDhBzpPy4hApjvcEknc5GH62Rra3JpjDvxq47iVDADFU2qC8j7UfFan9Tmh8F6ycsFaW4nEhFAbNwL4dXDDFm",
  "key39": "4LAKDp48wMM2pxNHxbpv9wsXjBa7qxQsevtomG1WDFfinKFR73h151xYcT5YPytSq7XDXViguFChTWCnD5VHXeXs",
  "key40": "63QSXUPFcodmnVGXPA4YAsRWDK8jHn6nwT8vKvtpHcBdqWjrFWV4CL6mqNf6TNhhVtDSQJKmzr5cMKaqEkkmGYqY",
  "key41": "5qwsV2EqEme3cjXSqBhToG1jWJdMrUn33KZ6LjKct1A115iEBCmA6MK8tAVK9Zf1cZ4RKFNouttKcvYBMFeEpj7q",
  "key42": "2tqF9LvMUE68sLXzTWP2qGMHE9NQF1ZPcu7CMzg5AoEhse6tCrcPG5BnfCV4Ah2YyqAfZTrmzcxo5QvCNzUqvArv",
  "key43": "3aFo6U6HJSst8gaGoSZTqDqvS5bWbzzUb8qJMhMxRYsSB9B1Qb3bcJHfHM8pCte7nMxayK7JFXRuWjGdrBx3Jy76",
  "key44": "tpuGQVSZYzNBxcEnM5MC6AtmEG5sJD3sAYHmMNfiSMDuY5Jt7S4jijVy7qChfzegmvbkaLaMUyR1M1dFJtxq22e",
  "key45": "XWqisNfK4AdeWpyCcGqkAuBn1jpzHUcrZTay9sTtXE3pFjck7sd4hU4WZUT8dao8GPUtHgzBjuHstJD4euCmtPR",
  "key46": "2RTk4F9o6r8VxZcFNLFpnnfCQVjJ3H7MnXk8j9LU8HvvnANBVancybGSaqVN6hGPCnQc5QuANw5joXpGzzzVBZrr",
  "key47": "5pWxniV86NpcSsFsUW8i7ohzfvPcJNemzoT1n7Poyj4GLMbM5zmp7rzLxeyq2TfoTHMFvt4AqQvekbH7ZkHH3tgQ",
  "key48": "zRJ5SZgJXk5AaV6g3dKo3qcv37Jonf8A5rJKeJSpQ6jM7bE8NjGAmZwHi8Fxv9RFDE9dptVhEiTiuZV9NZeQ5DG",
  "key49": "5GVhEtReCWKHotBnQA1DZibcnrP7Z1v86uBb3HCM3BLFFBnD4NKoHfo8dvrzM5CvxVx3HB6rDmc9sUgBkPrRHmhn"
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

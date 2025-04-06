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
    "j5bv8SendJENgi1qkjchTgimuChrwnQH65245jriAKqEr9SjjLP4Lejirx95fEVjXcB7zyrf3WQQpP2oKTiN5kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uCWgyY1BF9yhhe5XsXPNKsFNxMESWn6TkDcm9YJHJ5hKzAdiRDzCVQw9RFBZKDFsareUVFb5Kev7yFsPobZsNbH",
  "key1": "3p1o1eDqSYJ3YkgZQfTMizSY5hahxkL86RwKKYdatxKMNeqLhN2JhTmXPAYDZV4tZYfwVsZJUKYjfBh1L1cvFAHs",
  "key2": "2M2SRx8SFvBNa1yydKRLfSYLALzVtGRHca8CqZyBdmQg22HwYzXZxpWpAQqDneLbgMmjWyyiPdVXWm7ZMGHWNsNz",
  "key3": "2CxEKH9FcU8DnwBFNKV3qurZ91ooieMwrz3ueCmVJqyFuRZErVUjRBs2LTJjv7ihrTTTRZqGA5MMhHDNDEvoRRUA",
  "key4": "2RHQ5GN3kYe6i69iwu5maWGSBNivqcR3pYUkiUcPhTPUewi8FVAmqEEgBRdizta2CMbAqbqscmBxZsg4pJeyYDqD",
  "key5": "5VjbTrAtJ59LreXzM6jYPgiPhmm89ufwcGjSgjK1VoP3TvXYUWNYtC3Ru3YuvjiFrZczfjGv4sc4mLnZaLCBjjuj",
  "key6": "2CWaXkoyeyyes593iB8YKiStuKqFaG9Psvau87ymrTnxUXKAo81ZnCG8Peom6mUsebWRhV9vZ54g1WkEYaDgYfet",
  "key7": "3YWacbQsJPGQxySueNt1AG2t6TgSvvgvpieUAcy1zYDj1kyshXzpxP6NgELMA27kipkFLEck7oez6EUTSqH5VcAs",
  "key8": "YjxxaqyyeJCN6pcS4sUFuWfWkkU4WhL6RRfGovRxsDERb74rVdf4zfiHuY4iBNUivw9QZ6NnwVn3AtRiZ1BnaRR",
  "key9": "1PGsrtakSRR5DL22gZqdne5YwpQUHidpb6betyXw97P6hEBmEw7DwrHVxEkJo6znP6A2is4iNDFurk7SdJ22rKd",
  "key10": "4kbfME89dToU3WUMC7XCAnwv3KK7kUBDnyqcSgJWtav2J2nDcZN5qDhtavSvamrqRFmohpXqL7sQBYaeMRoNEr4",
  "key11": "3KWm6BX1j9EBAYvxVZXg9Pob3WMKLzHnp5ni1kdXXP3yWg7PYUgTPQzVPuQMwm1k63uwBRcgeUfuRT3PW39LJvmt",
  "key12": "42RvcNA9A9cWL57FegXoHbPodS9EBrwzozXbfeaTrPEUVLRMQc6mDX5MSwAamDkGMfKMBw8BRuYRebrwKCvJJs3a",
  "key13": "49jzecDT4Gw4Bf7VHf4SMAP2Xk3TzbMhCCi45g8FefDKvLwaxFQ1UTZ39qF6vL4PsUKrijRKjg5ee9ANP88AUnUE",
  "key14": "2mn9EwpUnseru8TBQbueFDTPGL7bJvRucK6DSbweMfTZpVxLQExzZoKHAqXDVrhwLsJfAYAbWzwhUeNC67Vy67Ta",
  "key15": "2MR6tA9RnhRnFZ9ZmLZQrrbWvhENyYdEgySJC9v6LLfvBYY9GTPGvFDZ3trFTedDSnVNBYrvmxe4dTRtXzdh11z9",
  "key16": "5NCefd8bU3knpdCsF2TuFszfeQu4SawxoibYbddoHcAio4Yf8jtTYNGA41zWLqNuof931oFVsQEqaLQmpxJPKVJg",
  "key17": "3mK4ugeyQzbbdTmEUKeDLCRQYiKXfrRumfZtY6oC66wuyTcAsnRaPfgP1W3K5yiqCHhJyCRNjr9eqpVH3Q5a86Qo",
  "key18": "3D5sraoGEcVibFHbanSfKYkWrJMsXvE8bKxBdTxBwCY45KMFjRrfWXy7Yf7FK62gbUtn7iRVypiRFcSBaa1jzfCv",
  "key19": "3YCg2Qg9uj1UwgeTTYUYc8jXSqZ7721gLaBjDaQZBScZWg92C5UiJtQnfbvE6VjxYM4NUoAjXX1s1Yt461pj9wHX",
  "key20": "5em1HgxzSPETpmEy7456Gmpo3bd5vs1zP87CqxwpPg1qDa1rnRkNRZK2e5iFXyeD6TXuXLDDMnxd8TRdZvRfHcg3",
  "key21": "5iaKnCMm1tSdCzEfLrpmiFqvCqpaqfbv3fUQZiv8AGSBntevp4ZvaQRUAq9uZNnKcuiv5Jfz2EkMD9wn3pTE8cUF",
  "key22": "455cAsBw5DefmGZQhbtHrPdFzzoqLqfsGpy85cxmNxWGBLBu39tyv4jztNLtjoF2qHvU8GDQhAewLvbufEgUCSnF",
  "key23": "5JtvkkkpBHnYSEKE6ATeovyszgudEbHe9cGtyNwUSM9dCXkqqgFVG4Jm6YgQcw897FXzjBVzhbXp37fPhsoL58Uq",
  "key24": "WGBaADWVff29QXzH4uJtokPsCUAYMK3hcZ6nLhMZKFYjfbFKh5r9UBMwkR4KWUVLLvtNBWe4WRHkdAZMPkvv1Qw",
  "key25": "4omMx5GrvYdupUPjm4Paq2vNonJXjCViaVyaVLaJ7SJrJrNn1fYdkz2Kyede4w7mhPHj6GsJK9jrV5VQ37UU83cu",
  "key26": "3XKmngbJQTTEBb6YeABJkLvzWcSXzjsRTXuLKprK4vwtRh3g2TtqfzqUEK2YNJ3hiU1jRbep6r3gsJPQGyU57vfA",
  "key27": "4VhSpXJxaZPRmwKZsFipfLHesRGfL5HjDJ3EyD3jJr5F1HPRe97tpbY1b5paUH5byEomwuuXx3zEWa4okCSBYuhA",
  "key28": "5DFuFWf53KAtPdMnypA6eg65LM7CxeRqf2gyB4NyFmrbHEMdBbtUyu8BioaPeDFPFtqBEPVkSszwFKdGqTSGcQV2",
  "key29": "5BUiwVXZ5vJFUBY3QUW7o2FPanQ77DKBLCqrGyvkCUFvjEnKpoca4GUUFJBxpCDiQmovEkSwWwWfKKaL22GDCHsu",
  "key30": "3QAkiSarwGTCrzgjKuNPudAhotmFfqQNSgc5zn9ykT2WnW8tstV7vxMCrQSTgLmPWZBMuW9fWNVcLdr4Bs1RZsrR",
  "key31": "5u18VMHPntZJvD5CMAeKAFxKnXwRdjkww7a5FaYybjvDXSEnA39y6PsaSQzmJouksWJ9eD6UyH57KnudtLupDW35",
  "key32": "2tUq9DefVyQiA9a1cURVhY7E6akXwcBqgZQF79D6NwyuuWvnNKbNxZhMyBU9VczGgAdfSmzkixnPcSY4cCvauhTk",
  "key33": "46xx6tkZG7MA5rvgWmtWTrf4Qv3AK9GYVjEvLWKNAyNDZ2xCBhqWKdE8DdvkoEYF7wKDsQyzdZA4vc8UPmGpPDvk"
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

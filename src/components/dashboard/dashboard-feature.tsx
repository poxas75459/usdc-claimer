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
    "5wZ9ZppuAto1ywR9c1Auzm9Lyu67P1mCcSqUMzkVeu39D4ctxEPso1nNH7yqYiszCrPjfW2cunpfBRmTKFHo8zUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsdQKT2dSW7u81Gb7ebdc9twphVQGTX64Mk4d7GtrM4Z54Ekk4rsHGgjSinkDKZGvvHhs466E4Qa3ZEJXDTb1ja",
  "key1": "29UW1DKJZJTqeUM2DbYRTtba8opV2v73jBJVgwyyq5veQNmBmhS57rLbvkMp9vxouxiGMqdM52cgtPdGyup5QQgn",
  "key2": "GFnjFf7vq5tSfxrnYFAiEugGM6XPmtsoiBhCvMg9eqqrdt6D9f9Efmc9zyx6yfUevSU3WeoUVJBWgxTcKtrFCsY",
  "key3": "9cRPBE44eDkXgRrPo7GZ22LD3U6wnnHpTy4ZiX5DWbcLd24HxqwUXGD4A92huZfswAyNvFW3fauaec2FpHeP52r",
  "key4": "5aSkKfFSXmRHwU5dtfsuvdAWj36nTWJ3T5sCJs9ezttLFzzKZGAkhEMh5qbupJ2jUDmNdFKtqp45RZAWxPtNMthA",
  "key5": "2xVZoyx9cpTeuoF3Kzmod7k4AUgEXqcCxg5vtTPx7PYqNtQFzkzTTfyLu8rqskiRNNfPAxdswcBCEJUC6yGRGWXa",
  "key6": "2Y4Y2y75iERU6WHvdvEP9f4btdKNvkSFSDXAryUhSEjdgvfV8BSKqp2jw3PNDTBwbM8887hvHsdZQjNDUSFzzfkM",
  "key7": "4ZeUprYNdbQmaSSYGxq8zRgaWADH5ko18B3ziSVtkrhHbLCyJ7dfWYCpqK24MuMJPBUUHh29VE5nTQ1EiwMALATq",
  "key8": "5e3DUJGCvfg34LNiDb8AaZBwtUrEBsvM7WRvS6UVrccwoBqjhTkG6KVsxM8fHqWXYfgh6YdeG5nFiqowuKwokZo6",
  "key9": "2wNnVammuxJdH3wkB4ekhYCi9trLV4Lef1mk5qWKu3ciq5gX44jk9REz59WCPq6eoUbT27WaAgaEDuXv6Qraksws",
  "key10": "5A8DDdyKj98g55JDug1j3irttp576fWk9EfHyLQwn9jhFuxXoZM9WzxZBGS9f47ybU4Vx8MgD2rey7Mr78LVpyL",
  "key11": "5o9P7bKojahRzY8nVQKwSvxQezzWuUTgWBvBghX2aUf9DCxvGocijgj3yeBJJKTaBbcywNh6kZCCXipAuUYWwjj3",
  "key12": "4VwjNy8JLHbAmPJUDCPxBz8WdthidpHaJdW2sEakoxUnBSnLX27BrXjGpKVX4hmo9tLWCRrVypSvGEUUERXVZ6dP",
  "key13": "5HhXAuubyVne3HPk3NjVfcZaU1vutjW1M98kVBT6N8XSUPAefWSRwCCBU416Vp7Zi3YHXXK14fXK6jaF9uc5hkD6",
  "key14": "4yLWxzBmVkrF3zQK4QdyyLtekRjUMHXs9Hyxf73AxACrm2FKR3AciBmH4jbmqxATytYGJf9Vi2J1P2edCisX9XBb",
  "key15": "51RHDQbuxWjfLygZJ682B3JBgiKvXGMR3CfQ8qY9gTRs53Y7fMDk4dVwWCMNQUAagFV1dNFsm4B6EKfS56LQFz2",
  "key16": "3GucNzFQSiCX3sjad2fxzyA1bXMoPoe9DQhSYEqhQ1UF3uU9mfWpZ9RohsTVzrichRUZKKYEuQ9DM1tSswbRupRm",
  "key17": "4D8smCDVZRN7225qWXwgnRegCv5WYU9axP8DA8UzhGKQCfwTLHeD7rFrXiuMhpQxio7NxQdRAFRWVeCY4EyCGH5H",
  "key18": "4H61D8rgWYJRNGDxUhna7MEAeJtBRRN9iSXCQYoKe2aV24s1FDtMwCZaVk8V8igDiRPkmfo89zqyGHqpYDEp1A4j",
  "key19": "4mMr5UnGGYWMKdnsGdWaSxKsFQK2hktErCA8uUfyjsmJoUYCx2kLHH54J3v1pYvZ7FppT78oaVLCpR2KJZ6NP6kK",
  "key20": "2qwb4M7TWVAbUfJaEEsoah65bjnV6QMbuLcBGdPUhCvoghA6HBTwFCvRPvWMtjEWLAcmRQtWpQ8miJdfsAuYcmup",
  "key21": "6V71dT1HAEqtfFH4n6a9wCcuZsku8wPj3mkDwN2nefhigKo8yB2yiqQT9emY8gG776THV6QAC6JHFhLeuZEJLQa",
  "key22": "39ZmxZ4w7BzvYK8DyhqVRZgqc3tK44EjLBrZ9jdEoRDYnsUBQW2JaTTrHjVGJuHHZpLhfK4efkx99eKE5TRHpS4c",
  "key23": "5iUNezRFC1zd8ocYNDNCnwDeuAWKJHeokpLfaGuSjigtkDMd8MSjtjxgBbmZdfonccVMmu9VBT4zUe1AfJKiJDgd",
  "key24": "48RNJALuECAU4DLL7pbuUbuiuhE76ZyL5AVwzW89SLmg2EwwNhFX2tm8VuKBTRyiZjzkUBJX6TC5X9QqyZ3ZaBih",
  "key25": "3AafD8f2affS8GjwpLcyrZfkqPzEw14ttaUEeDuJa5uRMuGzBDHSsCzKF6yizzhDtie9nEV6iCM9gb1GVcRSMWdS",
  "key26": "4GcrSUN1YMaaf3qrQ9XC5Wkh3TenCu7uahbTbJw892GTvJbxomDL5bvyyMgEAcX3SCx5quJ438J7K6LdiFDkqYFS",
  "key27": "2miwLR9HG98AeVM9apewjJ7PoBkVj5xfwcwtJzp1cP6bcgBQqmf64p7ePHiaY4Uz4DWfR8g2rwrZqB5SN4TiVjyv",
  "key28": "2rEhdjiEbHkWiu9XJBKePyYUTAv9AuS4pz4ygCiymUEmdFPoL4ViffnmHQHux6pRFh3hvwzFwvkXgrWcCMBsnDB2",
  "key29": "3V9eVon1v1prFD54wMAESML1rwGn59eWQfyxLUnJGpAHCYSTVi1fhSa4iGqbSpNQF6wrkPF9DwZ73PRPivz7SWMx",
  "key30": "4FK3qiaYVTN2oHfgCFTXj52ZJwGYyo237iuf61eZxByEY4p534Q4yeGhbdpxi9cZN86nDYdPoaPWHSd2quKAqLQj",
  "key31": "jtBMBwWHodx8Enredu3B665PDZ7Cjbh7cQg1JXUHQ9maE2QQRJrXb18WHUaL1v9sATmjkKnVWVmPVi82Dkj8JKM",
  "key32": "m6QEVdpgZpbmgNBPJydSstS8A8R9ATNRCo4CmdoLccgCDLuad8nDrtD3F6qurNpi5B1zjo2qu5N4BuZJeQY3rRb",
  "key33": "4UuLjjQaEUtqQUrkquQNPaeApNJ5K6Mrh17uvMqEFpFt7wkaJCybzFFvineNXAvHSfZwVytbzpNuW7ibT12UEc1z",
  "key34": "4dfL9FZrcyGim6GYsTqnWT48BieTc5Zdqw7Tm3np59DDHo4WzJJhuxnmoP3waHx1A4BzNzF741z3c2tu9bdXVH9V",
  "key35": "4qZUgWNTnPxuyXo2f8CRQvPYuMXsTKpYxD9S5pcySfTv7ZgPtdjR4AthNGdSKizTsqwgpinZrJ9KZ2FBJGWRT5tS",
  "key36": "4SW8smifBzxApHEvo2ugm238WvGHfPzyxaTpYm4aASW7KB5dqd4KcPmJvi45teYt9y6xaQLjETrXdPkGPEADPhwT",
  "key37": "2yttrcHJAk5Uo4Hv4i78aw6p6cNDfwWwwwLgqZon2fRd6F9SoPwZ1E6J4tCw6bYAvSTbrsPM2HFBNCxqKEXnwy3q",
  "key38": "rKXTcH28fKrC1rSQj1uMcygZYhiFHEx4jkcVNTCX6fRzxK3xM5w71PhFHYJxXrQHY6gdFvVeg6nH8xrfgaBYQpZ",
  "key39": "5is7oLXwWEuSbC3ZXXroBzRcn3GFAVX3EPk1i5hKBnDzRBg2MePiTZvFcn8Ezvao2m5t8SyD1MiHcLBz1iJqNK1F",
  "key40": "4FCNgEhWKDnBXfxagEHu7Rzv4ULEDgyTnYqajMnDaiwzNtWiT8rkNvzKyRqXyK7Mt5Zawc9wMjymrqxaemL4G35C",
  "key41": "2JPBhhYgSTzetYEcme61BH38ubZfUwRxjhEYUQaVLp4kqPzP6uQGThX2tuuDfMEM2mCcG6zLg9FLQvz5oYn8tsmr",
  "key42": "5AtNqLkjN3un2Kzr5PAxrtuSyUBNW7HUYNu56wdeeZ9xsobB4cmzxAw7FJBWxULr2SpbBiudbLtsYKWnXcNkyMAd"
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

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
    "SdBxj5RnDxRQ12TDez1jzgLuDAXJB92fQ6558BhLHmLAkiQrpSyP3kL6aYgyaqAXkxqRg4LsF3cDxWZxpKszPai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qh3YHBdgd43oow9Mp4CXCCuSE6RUJ9GciZWPhk7YkC46ctfUzV9SJrsa8rF61zFg7PjrKZxeQz8wYG8vs5nERvM",
  "key1": "4kLYQhbDQjwowaCac1YYzVS4MJ2iDURDaUXB45sR6XjUetky33wUZJHvZe8A2AdCxwuXkJfUiUxSivLuqr13PAgH",
  "key2": "2ToT7ZPuxqa6XRTcDasLGfCUKxNAnCk8KYgUGtxeCYZ4fVrmkXW11JCXVUsQBAcX4aoHbUaxQ774c3sSgUmSY82b",
  "key3": "uycA87SqVRrfqYjkN3o5ENpGneg6VndGC62mKvrgN1TE11nJyuri5RjWreBng3F5LsLMkTYFaXci15tj1LBE81i",
  "key4": "M3NqJnXy7Kp317LunwKsrKHxPXTsXD9PzsGstPeNSPYsNX29nFPdBh6utPA1HRfwoNmNe1u61x3A5Uei3uXWrxF",
  "key5": "3tySepScYfg8vdGnoRt52qxvGiTitHVxLyo4ZHsZusWJyK1W65E6bABou8u2iZn6ArKWXJkh4YQ9decCZyNXZZEv",
  "key6": "39sH8yj9oCaYy9aTcDLmZyTrXg5h5JwiNwUUNUf2W5tPd12wCF2x5jyGW3zn1bvE2eGA1uN65Z7TZ7YQKFWDL3Mj",
  "key7": "5MTmAoDBmpo39QPuVk6zD4et5dYSxXhoynLJTjELWP4HMWcpZnEqj3Ba5jSUFFiyooDiiT9E13dQaeocRK9hwFBv",
  "key8": "4bEDHUzAWKGk3bWmLrViDhNEco6b8mw2pAi8xXhCWmU16wm2Q89RegD47jjcUL9iTM4jAWwEDhBkK3Z9vnCX3BqK",
  "key9": "4tyNwP4g4MGjRdocGVHC3tnU9L1LN3UkVsPDL4fKW4aRK7JEh5oJLCQ3S12XuDaPWRXYQKYbAkJYA49j4tnVguAw",
  "key10": "4sVAdiNSgpMN1jkGE1WZD21H4tvZbUzqoqwUvehxUBoPVGtSzmninDZjeBa5JbsmJjhPtjiaB8tyedxxr54Zn5A3",
  "key11": "5U1qet6baPN8p8jJQYF4ZDuyVqBsv3bS84GqvRagNRoXoHo5Ukwxbsjse2cyJ2TvxWDCKaNU1n3uxDZF78BHbvD6",
  "key12": "2X6FccUGYL3rG7kSW13gyXWjhGJVn1hTF4kAaw11iPY5ciNHwWjTKd7AVoPg4NpwuX1d1rw6HAkKM5tuxJf41L2K",
  "key13": "7sKxwZFSYP1V3bFUxKRZmj4mqDc3ZBnartVv4cDUkaXD2S6ouFRdLJgTeVoDvR7f2eNKfEtcjw7iFSmnr6qCYSQ",
  "key14": "MuueXe8iY5cDWxT5WAH9zzDAdeEZhtUtKHoaW2rN2sezMBTQwzZXfsPUev9wS2LtRfi3PGTP1hLSLnxYgfqWa4m",
  "key15": "3oaVqszhd9Bn1Rr1r5yps7ebyW4Fm2L8VnCTfDDQuVrhm5YGd1891Z8EZTMLPX516A6NriY4NAQfBVc2exZQFxmF",
  "key16": "2cX6oGKRGYPw85s6aSKkAqCq2ZbcL3vftMRoTfYbBmd3jTacuL3Yhdj9bRWw8ixYptsYPoN4bpgxXqfXkmybZ6yR",
  "key17": "qaYdgJVdktYwkqLTyYqyMcE8hWznvWUtxyUPVurRmukBrhDp7NDhXwrHUjmGSapn7xxf3pvtgNDYUTaK933fdjp",
  "key18": "3zbw7eCDrNmPSyjKReGyqtqkN1BvBKr7UMf4CaPtjt2Xxn9bCg25vdKTCoBpokW9CFDfK7wHS2BMrGYYnVhuR5rm",
  "key19": "3ynNQM4Nhjfn8Am3EW3vtFzS5ezzD9vD8mJj85kCTKWsWQxzUoEjFVDAaKcUPscdLSCninWcFJsMt7NGprRRQzF9",
  "key20": "4eVcusC3VeiVcSGLB86yCVyc1bnSsbLshY8AJK3i9AnKF7WQ47JbDcYu898BYZJwr8Vc5g4e4gkMkVT5Jnff49My",
  "key21": "5eytv663yHqjH21cjQGM61ZisLugpzPM62EeEf1e3bCmj6oQzUtxRa3UJzFoJbYHWNqBLjjxhhnEDuiaVyPSi3wa",
  "key22": "2XQBJaCdZ1tfHrtGMFZdtzFfphg2cp9xwTw7cdcnJtXHY5gQwDTfWoH3kasQFBXprJE5sNFR8RJz1rhish8JDhtu",
  "key23": "2VgFCvgtZFNmSTCSZ1ssBQUT1oxCKs9anFXvcdQmAtsVSrm1u31HDUsQEe7WwEa5zqvyWAKLJtkCaG2No7b7HqwT",
  "key24": "2pWAxXJn4DwpMoPMskyDBDtTJVwWJ3FhHxesxuN1JoBBntRAZZ5wRdJgHkVEncAyFAuXWHSJVK6tEuiKL7PKkSYq",
  "key25": "n8dyhxQjGZGco8AEC336Lc35AB6wSqBZkMxTfNzcrjvB3nf2i488n46uGR8WC485C1EFBGAUy44z5Tm1hkaN49R",
  "key26": "5Xr2usMK2FEsctTykUKywJ9dxFAMcQpqnJ7nzyJYbPoGVfq1BRUgdXMj2g5CK6x5FRKJsuToXwN9RWV2gg2f8sPy",
  "key27": "2jXC3iy5asLKXsNkbfBX9AGyWzfJ6Bco4Z87MRyRzUioqBqs2nDzFBf24kQegLjYG6wsWagMdQT11YDbkbLBzZoE",
  "key28": "8D8GnjRNV3raNT6CM3XDiG1rSuY2apyQeEpduCGYQwjU91UCLdJg68G5q9a271oqZuZnUVi5t5snf41Z8w1EHdQ",
  "key29": "2pVgs8Uq1PqiofbD71zgSEMr1UjYMqRDF3Zwx88YhqeecivYU7UnMqsP9vYrniRLxSCoBx41LARz8DUM2cKRkmYF",
  "key30": "5qbDbDHoZDvB4tbrZxzy58wMipsZ2qccTTJr3aiHdWQ5QhWYXwzRkuERJzHnqfjeiryqjWbKcdC3KrynUUyuQGoV",
  "key31": "37FCdg8tzZnwjcBQH4cGuvDW48z3yEFPq3rcdPLSjT4kmWVatpDdkrJQc6XET2CNr1wdHKo16Amn6Gehp6kVgAXS",
  "key32": "52Vu1pBDyDJ2gqJpdQcv9HUpXrtMp7SGaT4umeoVBhvaMkpVeuq2FYNU4dWDddSnfqYRLSwSTc4aHkAhMAK6ZjoM",
  "key33": "ao2YLA3E23d1UFgz1t1CDPUmu681rMVpAjKmkBhCtb5qgfuNMCnM4iPfTXBNjmACxNzdPb57GbyBr7VD9MyLTon",
  "key34": "2dYQvwGp3aPs5kW1ScJh5o7H3HjhTC6Fa3yep3Abc8uD1AeLhJX2YetqTgtNPNKTW8sH4ymNojVF65RQjLWLz4U9",
  "key35": "43iZgFQeqSFNY377ffi2Np2JSMRzZo8SXh3Scm7njpRZW2A8R88rzBscpLFSaqPBpfrWnrsUxcT4jhkmnwRTnfuM",
  "key36": "4imUSBHrNLqLyU814AkK672Kz7HeWHijND1fGPYd46KVXMPyVEPdYWLCK99h1CgdXj25tEG9BP1Nespi3ZRoFdHd",
  "key37": "5bDaPAz1NgZ6EgRnLHqQY3LR6qQZq7kZr91Dh7ncc6iwGZi97A8NbDXPRisUiZcHo3msBmkUQwnmvxcVkrRFNij8",
  "key38": "51k5TeAMxnhg66xDzcALxfqpK1UaFTEk9gWFLQT1NPtmn5oKnXVYDicTZDAkj5Zjzae2QLuEsENVhvmVVTBzntzv",
  "key39": "3bnETkms1C6oT5Zdhtgeb4JCEAGnAo3PdKRLX35vJosiaRB7RBrZBMbwUFxU7K2dkLYpexzsQSLAaFmhWTU2S1Lk",
  "key40": "3fRSGMEXDE9qd2kHLaJQ2Po5peLQMWCRpMVpm971hDgejtaaQua5SqqNVPzWyvUSTTQ8xkjm2PZ3w7DtQKyAgSU9",
  "key41": "4N9yWKogHW1qS3x9mXp8v14eESMNXu1PeCxWNfJXJ99EDcyeKB8okdPxkRNrDCsCdCs4LrHFPxoxnWVp2A4riZpF",
  "key42": "485WG8eqna62HssMHBfBBqD6nFrtV3kxzGNgpVuyJ7HqCZB8Apon34jvdn7BN7Z7ZdvJJAB8LekQ8VoChUzuzhGF",
  "key43": "2gGsNw7DDyJn7Vd29RhFLcMwkHmiYpB2iUpiWivzVAfpbHaVpTvSNihPiUSRr3K3eWUsk715getM8ogmuhddLh8u",
  "key44": "2yce764mwb9F2oDfz7EnDT2Sq1kHUXLuSEKjb6RERSaV5u6jDdJB1QC2S3zJjmHZKVkXkMt9x3FwKnSfLj6bGJXS"
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

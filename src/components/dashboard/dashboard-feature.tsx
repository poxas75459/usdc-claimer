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
    "UWbxhNPnEwQBgeowGWm61W6EgDGV3AK47kTr7fz35MgnMsECdUFnYcLKSxWRJp57ktMgxWZPbnAGg1uF3gkbRYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RokiwsHCbWn6VdD6t7W7EUKsrZkBYfjFwVdZKtdJypuJBmGSb6s64tj7LX95UViFuPPiTmouy57X4T1KrkzeQXR",
  "key1": "2LJ535uQNCyHKvQ73aihXXfswEHFsghXnWErMZ2xXwkkBfQmVxoHmpVEuJJ7MdLyGseUYVrdJ9TD9dxPDGqx5v9W",
  "key2": "3VBJ9hs9gmzzKb9t8di3XaKaWTuMochK8CGkVwaYofyjFYxJdAYXLxukHHgVtVayUkov74bQu2AGizkJbdM99zGY",
  "key3": "4EQWnF4oV6mE9zD6YHq9Wqo7b1YENhGE3ZiwYhDF8aLZ9p9TwZMxafFtuTNUCTgn8wjoqzE2bo9WYezT4FKCH8U9",
  "key4": "4GHoQ4NKZeo18S8sFtpQggFjBs2coamxqxr8AJSdWEU769QVRW3MBD8TKLAEJwohBxJ91FJiaxbNQyni8pnDyFUQ",
  "key5": "2od98XXydMwtj6z9YaxA8cqWmLHRa5gPtzxCiTLx2pS1HnQqxbCWLLHHjW1DeJ2Wur5tkdpdBevmcknCDCXKQwai",
  "key6": "64teXAhSkWizRcYJL1GaPGTAUdZLio2VCmeBLhvM35TKSCLS9hKeumDJye5mhSKduQnUToj6urt6grKaGRscfBBw",
  "key7": "5asKKsnLwTjEpkmsfyKeq3QdsQdnYnSkTFd52ETTbmifVXXzjtMyYHjCwnLQk7bPUvFi8cGkJisazF1EsQp4tSYR",
  "key8": "ycFX4Ephe5ZtoeL1vm9P6FjWhkY9Jd3KgPUcGDmVaYqzaRkpkHxPq8Q4G5pQvuNpJqE1U7GMboRpAHFp9Pri1ma",
  "key9": "54UeUNn8GDcDhj5otLhkdXaS49d9JfMvc8hvP2PtNw8EvGyMHAXr8MU5gwxx46PsEm9oJdUnZrXru6AKGmNevmGE",
  "key10": "3TRRou5wwVabvMJgTMGHaQuhxwssTWoCZxw9ugkZJWafbjRLisi6fhdpAWSJjoHCPjbkAp93ePnhmJHc9iYYzuqu",
  "key11": "4NorUQHzFxX8aC1EoKjfnue46avb99sncQFn6pYqS1DuHpipMGyZQPPQfG7B9rkT8xfdxDgicrWjEkNbzgwRHBS4",
  "key12": "3g1S7hUJ9b25PiEsacREPCp8HUDyC3CkcZXVxNhC439m6D25E1j1uahTCmEAkmjU4LHcVPGa5T1hCcfr1ib8WCif",
  "key13": "DpPks461TKMzR7wKrKoWST3tg3VkuPDcRHU1Enaur4ceWTVEVERAKguaEPKmwfxjLdLxDwXk2rcJFhAB1uXEixu",
  "key14": "2umEavVGnUDRT6VQwGWRYiG4MHPdsPsZwj4oRzvtsBmXdhc5xCnpp6qVyu6B99CjEFdVpSxqxo4yrG25cqx1SGLV",
  "key15": "bXUa4d2WDfsefGo7Uz3cTnhySLYveVAU7jLpS98yJy7DVeqMPDd3FwtEmB4muLqpN9H32SFoe24zEuN5JPxNfbx",
  "key16": "4jN377vKSwQUuruKsr6gUwnBPUKxChVnbxAyHNCsdM4yXQYPsYiZo2HeWDxG1vAmKz2Z36PHAFvzzZvVBGwNYLD5",
  "key17": "5q3RQUrCLBisHNqg9NudL8jaB4h9mznepsHocB2uZfxP7ougXb2Cx5YATaLK2dsuZGXV7W3nF5JmD8PTAyEhpcx5",
  "key18": "2RJoZPZNKhGPE2tZFRrRh4AWicNwhQVR9c3tULbebW9EgL7wVa2UBacWpbZEjgPgnh5XdKDCFTcrRTuM76soYMgY",
  "key19": "63fNtnUJP64rwWjqKASAnicXtcgHG2FoRZWTBeaC9Kgnsbq3zUn14yBfqYGv7nqxFQvxftcrvpkCKkKDv7PjYn8X",
  "key20": "VFVqXXVF9HZdWmS7MK21DzdQK5YCPBAxHvfjZLSDnvGnSe6HKsTx5waF1PwYwiW4eXfhyXZAvvzbrR855QvDnGb",
  "key21": "5SRRPHLzC8mLvw67tcctqdk2nmfwQgSfEbimZBaLU1QsbTWLyxKbMRwhsowwEaCQKL2WXkxGEYu93HQJQUzqhdbg",
  "key22": "AFUVD25m8e66bAzH6QJhkXTf3NDizecsCmwwfcTBi9EU76xhQNpCk3AaCQi13xVK9EdaDUQju4MiCMymDsJESrB",
  "key23": "28VxUmf2PtwRD6xf8ZXAu2LfwgCNgr5yqxuNPFcTzAMbQcUtxcdHXhfJA7asBZF82tUUaYMJYD4YjxRG8KzbC3mh",
  "key24": "2hFh7HPaUqy1uMJ5EqczLUe3uytdmCcP2hKqYWECdo6CyLtj7xVgfvFCgWxnRErD2ZSU1UH87H7rrV7nJUJXjDJE",
  "key25": "2WcJVowdxQjvJ6CYrK8qXRX2kPwBQrT18TWf5VxS4mW87Tv7Q2Fpwh9amJ8QNeUfu4NKw24KfJFPvsMZBC2pic4c",
  "key26": "5Nd9kTNUS4c4CaYtnZogoM39qjyfjKkYRKV9iE2mM6c6VJaZxyypfGSJed7VeVLP1k2Tj4gZn7NKDUmj4bZREpDb",
  "key27": "5fFdedCrRTewY4vurLR6HiZbZPEy9qUPXscWVuJz4m1UV1TWVcApb4XxH5vaAhaKVr9rDuTkg7aKqcF91egJHEYX",
  "key28": "pp3y98sSPwripurysNaXKexFZkYrpo7vaF1cnG12QxHChmto6SScBumSoFWhCRbEuyPApTNb3Zw4ehkkgAa1HwW",
  "key29": "4QmAjV8vYrHcGSYbnk1ijVy1KcT1RFRRKYc9pzjPKdqUWkqGN71HfxHxDfLMwamk7K6PvJ4a8JqFwEJXLVscTre9",
  "key30": "3RJ3CGwuPd7QFJ8SKXt2N5FaGVCgjrefod3tSxFLj2kCr8sPfB6WGiLJcGiZtc5jHTC6mLLAzTSsuvwPbDxUigbA",
  "key31": "4cyL3cXebprEBVRnRPTNSS1YdVWBKPGZoUbDvsbbv4zT64Uz9qjfezmMSCKf3cUr7fK7zLDEoAX2Qvjy6DVPc5Lh",
  "key32": "2FegMWceMHTsVk2a6x1xZJxj2irsNUe48mUoHPp2dC4zkk9ZBVGDrwuhk5A7w63pcpcF5FfSqmE8KsRXq8GfJDzy",
  "key33": "5cxw5GvzsvcPZN5k8Dc8cH5XvJYM9XWNDMPqo77vC2UjSotffP7xRYuHq1JhV9SKdEfmANYxj9FdYMAYWH3WTnaa"
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

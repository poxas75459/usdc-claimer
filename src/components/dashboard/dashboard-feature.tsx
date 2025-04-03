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
    "ZqaeeZbTRnEPMpF8seA5mLcNhNe6KQtMV69gAatTseWpYUxGLhcWACTBiDb8ULyVXvsS54kZTPQJ7SZQhLZYmRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eLDAs582L8F5nXRfJ8M7UZ3vaiBedxQwU1Gvo57bZ4Tyf5XjLskpKTxktopmtfVJ58ArfQYCpchx5Xd4y3DbC16",
  "key1": "5mCYuRjYNv27zq2fo89JUsUyiyg6xFQppTd56dbrBLLwiVqmmjKDVNpYDZ8z2hQC1wXdh936xofzMoAMLmAskNFJ",
  "key2": "2PoaPMxEYjk5uxGQw9RZRKXEtsA4Smz4p8mnxJ9vC4DvMjGNvRdLkEXttVfEQpMo9pFd3WWtbrG6k28Tsp5NPUcK",
  "key3": "4sdZq7YUQvNMv7esZs5WvBsfuhGbCN7KFDyXMi7W7gmnAKzgfzCRahZVZtxpEFeNyPxg8KRwZVu2476FFt8c1HiA",
  "key4": "LRBdi2S7oJ4WsDNUGxoM895ww3dsHhpKyHsaAbkS9TJmzyZ11FEgrkZGfau5KgfpneM6j6MDQ71Dw6gJoaGPSWD",
  "key5": "accbn8zXvzGemzJWTYFbbPdW4u4cdEMuUAg162CFrkmZBnW2gSwHmmZaxtiEymQ6pc3ZUe431k79ht6L7rnUFXr",
  "key6": "2J59g2i9PxXkcgsJ3kqV2SKFGFN8qZ9xUa8NfCNvBPVVa3mop7H9R75u17xeSurM7kv1Xu5yZyQidHHsHEz86yRh",
  "key7": "628gFucv1hiPjj1CCLtTc3YAVb3Zv6Rym4ATFhDhjoz4gS1RxH1Adz3mdVpV1SBvCTbka1rmeGyPzkJT6f73yh69",
  "key8": "5MqKDLqjvNimihVmeMyWfyofamobyw6UBrAkjMyGrwM4wCmXS2QmroKG8StkDfNNBtgmmXEnEtRmrHavAgtuTEgw",
  "key9": "4nT69ihUqCet3se8Eaxied6XRsWCFc8QFZGdsBLzcbYWrvrGkyivZUCpHR3vBFpFBxqHEBYhdyG1wywFpzGRNh3H",
  "key10": "5U6B9Ht9fDAkk8NMLREMZz7TPL2U5PgnR9b8cUURYgaC4c61mwLbbsj9JFNfgrMoA4dcWNUg3sNSkm3ifrUxToUE",
  "key11": "4BPrxdS31NUjHiwtJE3AkpXzMssmLwDhdLrbRozTFHWYtjanajQURWDKnHnBPvEoC6wakFPSuVUULnexmuJPGi68",
  "key12": "6QhSG72k58Umrq5hq3USiP7g4wcdSiFxfqm6ZWLanjxS7KCY5JCZgnRqH9HCKkq648qn6vpoAw5UjTjcfNAoEQC",
  "key13": "5k98q6zRaMvmqKZUyY1v5moBCQywmHT5XTyBXzoNwhL8LkTqfjkJepnXfvaTAVw8RA5EnX8rz3hosSQakD6TCWGp",
  "key14": "4D7QfmdTEV7tAtg1QcUZk8DhuHA2WHJF1ye3EHNe6vNB8Ma7d7vHxGSSHDnAEupdheMBtJHss9HQBKHUJanrECku",
  "key15": "2vtqwcwKpbNoQ4EL8tbSf76jRnxTqdAKmugsFNmFosqC3ki9ytnbuwMf3z3JJ1rRWgRRwgNcVziEK2x1avB8Lowz",
  "key16": "2ZMSQbdEPc1qH3C2S9UXqPnmJHDMinvV5A5XtVscFQ7g7qcemVPR7Rc3skmix6dG9McokjUvj7Y9euCKTB2T367m",
  "key17": "253QzgZon47w3UJmB6JA6J1Zopiq8sPbeUEuAYs2hnmtuNN1XcYFAnPTZVaMbA1xU75Njcv1Nx9nWjPdDKgBZRMv",
  "key18": "2nCAQpzzcm2a7SAqbn9vo4jpj7zRemSBa4tDZdLJAgF9aDWVScQEmewebKbrJFD1qZybv6vfsJmxVSVD1uXUcSMf",
  "key19": "yBzrEvBpT4VyRPqexgKkyJyHpW7H3RAE2vLzE2Tjf9PvdWZcUFC9fra3NXiYxXFGR1zbSyRZuusFonniNUMxBaG",
  "key20": "3ksHX95LyUhgQnAMV9ey8rH7mZhkGrLRSe4w811A2e5FmBVar2tBJbFqXKFC7KHryY8U4CtXaBG77EYBfRYELYbu",
  "key21": "31KR4mo1ERgpTZmZmLL3smmMDAFaDdvDcDiw51eAj9ADWCNfWyWGxtkaKnMZRAqG4CSaGxLBX2vzWLW9QtWBuW5N",
  "key22": "5ja7M65pYdRJ7FBJpaHRH7fduzR5izHstJtWquPdevvN7M6FJ6FvDMBcvmVU84b89ndQdovxsNMmwtDQRaDkmBc",
  "key23": "yeitDgHsMkQ8FBxj43p4DXK4PzRECjfFq73vSqBcsR71DLEFmCRNjVzyXcAdks7GGE3LGzhMB3ipc96bV1kmhHC",
  "key24": "3fEYkLAjeEAAoJa2bwJMTiNvmTjFdce6EHw7Az5fvfoft1qDf5sXnPpnkJhHZ8j2QDpbTQftRsdhGG4XS478pup6",
  "key25": "5tLo5CjNEjqvzsVK885M2NqqtRKfXiLniezuPSHif4qt2bSvGfLK6mFQYvCVTsJFv7Bn7tp9KjqXw1tXKQ2UZ1db",
  "key26": "mYuHvXfCzCqv1KgEughKnJHghUKVdVgYLHPRK7pjycrUvxRr6QMzXFk4Za5eM2oPZnZg1q5KVzzM26ueCXtZu71",
  "key27": "42i1Sr6NiuwT1X4FzyMr79r4FVeMqh3XcUUwwZsH1SVaqqwvN1DyqHhvaxGBWtYRH9pKjMWiR1gP3KwVf3qi79N4",
  "key28": "5dc9fmBTu2XVd3GQcGZH8ZPZ1J3q8myQpX6WdhMEYvP9MLCCrbwnMEregwvXGgihd2HRfxwdmm2ciC3R4UbB9NnX",
  "key29": "4sVS4sJ8Ca6Zoj8MQk8DMJ71XQEdoakG7kzA44Q2xrbhnjEAgv9Cv8js6Yd9yDfXur2ttMjfuBAVf11AEHPv9j78",
  "key30": "4GNgZEbPKGzkMno4eMkHHuytG2b5n5Q6YiyfYeHf6ZuvQjNBGP6XZf3AW6RFCfHtz4VK8hNbvpQbvzcuozHq1k7x",
  "key31": "dVHqRY3wxag7xLMifmCXbmmydeHTfUaxXqQJVo8qAvt8LjmgbR6HZ8T3EGynVvrQ6T4DbUj6YLDvJCVryXjCBUf",
  "key32": "3yKe61wVK7Djg7FKNZ7zkyiapvjMDDtdd6udDuDfjvLYim7q7iTNudfXjA6JY2UUFSYioaVum6uojiDiwh6rCAHY",
  "key33": "5Fn9ZXR6rDrGq1mL6kwRmXN1gMoXbrJPBD41VUFfuejkxHjWcGHWvogfPPJT3oYb5atLrFAww8buukwyXNbZSeaL",
  "key34": "28LLrjKW3Ux49mWQzWby78osScnppe3xBXBnbtKdkwLCVhjCHGAUYQoEFxte8pudLMfWJUqc7UnChsitkGLV9mCY",
  "key35": "51m15oQEg72XX4ddNExPXCdRaDSczMcpeuRWsLiRU8xHb96EBE48WCF6FR7gv42QLCHRjRD7FRbFBohGwZtLQK8e",
  "key36": "4U2QBQAgnC2vgc7Zq2bBKihUh9YjAWFkg9R6EZibUyH1sADf5cyX4S8GuGxTjfAdS26DBsW1347tFWqFgi21iZ9Z"
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

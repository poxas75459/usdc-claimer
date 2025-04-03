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
    "5vRbQhFW9cT1Kv4vsQtyuNTLer3HS1dBFwCReS2NvtRnwt6SKd3EnHUZYkQGtxhfpz9CoMzkcp5dTrHH27jtjLat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdpXfbrJHXEtMT7TZsJfq8PinWZjZt32qebAyiNEwwYLvKWMepoZTnr1dfUQpF5owvFeQAqNJ2o2J3pGm8xBH8y",
  "key1": "61Mq5GrFbhvq6NvEy9Xm5MjW4DyobD9mgu6fp74VvvHTRrzXxzHwvsLo4avZnEHSmBoD8ED44cxkMZ8nrFvvR6zT",
  "key2": "634NZnExYuqEtxAAcSj1G1aH3Go4KZnvnZH33rsN3V36DVJmAxv89Jgbd2EUUea2CFYN1EfGLYwxdUj6fSRoB5iY",
  "key3": "3KXoAxWWyCFrLtBkmiy74cdg4cS6ruLUMny1edwXZsp8qha3VkqUFqYLLaHjBpQLqFRWT9GuPpaPQGTKsyhAWg8a",
  "key4": "5wU4go44icKHRPAVhPZcZQohzu2vfnChxsHhQ2iUAYrxPn7YEqmzxHPZ3S4DdQspNoMhH2KnCvExDi9za2i1yxMz",
  "key5": "53ti5apF2T67R5Mj2VhpJAYx7GbqC4dfLM4LEPywjvPSHFyGhBQmsmPFPSvYTBjKZoVDppEcYK5Xd6j4PZ2KbjET",
  "key6": "3xuGgExLogrbZCmYpDaNd3diAggisncy9q1racfnFG3yXKvQpS1coiA82hSPQmVQ1uRJ5Ap9b5fF4t5dQJD1675T",
  "key7": "58uxHgLzszcTw7vPaxjpGNq8TQdcCsLyr4SiocjVvAALWj6bURsT62D7ReifVBWTyh91hkeBA6v2aoppTHk8a2h7",
  "key8": "2LRqftoVtyhRr2HKHbBEXdeH2z3m8byckkGdmb4drdKUXVkLDphZx2rNMnbLFiiMti1TRt4rq8fm7g8xk1R6SUbu",
  "key9": "4AEZ1UL5QpY2uf7DzoriMfqGgq1pdSpazpK2GGgBmK7agoH9gL2KuH8uUF9Jrfo85uA2mGgVhmbbXMECT56HWrjk",
  "key10": "4jGedGy9aaJovw73QiWP4Up9g3oBBVfGn9SLupgRCA4q4YDaHb8cv5noYWinV1qx7YtTXSgusKLX6ubkSAGnFUJE",
  "key11": "erN6yBFaJmRTUg5ZPyQkCyYBzmZ5bAtSdQuaLJZc781cv3MbmzQ4pdqFjK48oHsaLmqD4NcGbtJuVL7ny2Gf8Fh",
  "key12": "4bLVoTPgZC9Lh6LfF8YXauJVJfeMFoeLeq3e9zAt2CWwGjpVL6M4DvsniiioFcSGxHfToExqNwPiny78uVMj9sYS",
  "key13": "3eH6Lbpsm4iSJbas2ihSTK4FNBQmtaieJfqN4pVsK5CAq74GfRVNvk4rnt6kVLTZsT6omLeAGGRQ8ueF7zLmpgTD",
  "key14": "22JbX87Rr1h8FwybzXXBkZCrMCV2ZvLMsFHQN8wJT2xmcLuidcd4YECM6Rg5m2jf9ToPAqFPpzimMmWMNnEsTNKk",
  "key15": "26bpB5SrkDgVKiWnYgGTcEnQLScvFwWZHayHH9VPS4SpZPGxwRLcEfZUzzLEQgqtuFNaAuaH9NCGQ2yphZA73kqK",
  "key16": "4MCReN2jTJU3YPQCHLLvqbDoFtJLWJbV7CNhJTC2jNix33MjGJTEZdonrA3oFWkx9rSJEbFcueuJGZdSMXYpJTbB",
  "key17": "5fUHVq5qsJwupYoCFvhPQhEHwSMAA7S1uJPtpR8QW71Swh3s1eMMYAi1pfGB5swjuCnwvuKhGg51dFNYXDCGuwoZ",
  "key18": "UBcwEk6ByFVJnzKQyDFBSHozoshEypS4wysYMBNaBZ5hFKh14EiyD3wpe718dxCAfdfa3o2R5jwga335T5QviNt",
  "key19": "361dKYwPGKDk6koYga7db4yf53xWr1RxPfW8gpxZKNjNkK2JziNWt3dy3bHGH5M6HSgewG2uY6HGsVGZaMwh1Ua9",
  "key20": "5vXugoxDrARjRKkVwgPZVxQTXb3Vz3J6vbkFY49DPPaZtx2SBXgStYVHGH5sUDGrEhTKWqcWjejdDXquHhf8NTUa",
  "key21": "4UNuRiHAHVfi5wt15U4f3kxpYTA39oSCHHeP7qrFWWvjocHigu2sXfSyhBpYPvBDhS22C1eua2JUFD2eTCHBhKCs",
  "key22": "51kDJfkbXB76vVPiS7gjKKRwhC8q2udFyrjsZ5qwCuAfJ4EQ91eQEr9FogekW1WHEKbWccSJteUYgURdEZ3oXxdf",
  "key23": "5SZNLvtVCG3dzxxeZjSiBFZphbLet7sir7MpYKLSU9wFDzMZ3shaj4bZVGf1icjqh66TXybHP6VSAadHgiQDSQKA",
  "key24": "61apaz9vu53ZvxzbmNqpKNErsa1JgPSDoCRTPtdVFdAqShYK5ZGa84g8W6fYBbHgvRMMF4po6KxBjj5QjwcJiPV3",
  "key25": "2v74cHD9KbZ1roCzqpMWQYSSo3noiia2fcYExJAxGZNi7qiP1d3xY6fLZ29shE2HqM5bXUC3iNtqtPsp84bpVBD",
  "key26": "4Pisjxxf7EjKqYi47unpYb9RNy76UqetEJcRgdHMByAXPC3VK3K1faX6WoTFSepobwBmMXiA4wKDVJFKWM7qQ8pu",
  "key27": "3zFWjstGx5Q9NS6WGLjxtX2qQcuxRUyZwuQ5WXPRJd6rQpKyztDSX2t2HZzV6GSmKMKdKnTSFNDCMH88fhvhbaXe",
  "key28": "saPYFredMFjyjTaKuNzEYiEFhs7hb2cSaQDb1jBkx1QWC7dHQ4Z1vmjL8XxpZjxRPdey2WPHAn3GfiJZDuwas3M",
  "key29": "ec6Zu4UijLAFDT3yxMxFSTBcThV83JDRvauyGKu5g6m5QaHyrTe3dbDTakoQLCALvMP4sYbhspPboBBEsdv6o6e",
  "key30": "3YER7kSwvJ4o5P7nrBrURTZtFb8Y1rfgpP7a7wEEsGfNxv9bbo61hL3HvvRn1fcwVgGwenmz1xqy1av1X9BHd9Kc",
  "key31": "56PXa9rkc1HDPz4teQHsPA2xhBxeAsuyUmSTnv7xAxCD4hQbbvyoe8QfRakbGHZtY9t9sWojVmFynFK9hGqKm9Xs",
  "key32": "5niEvLrdQyrGK1bmq2nNenandtLi69WUdN6A3XbRNCbzzrq9ucpVQ4NpqHnwQKUvYGyfHPJ4qj8L6dQ6Kh9zGtTX",
  "key33": "5DaFrrekBzuJBieHaCZRp7r9pW6fihD95VHmhy8T3jVBXMGANn917Ho5NF6f7W3mdVxxvkLgMiR6cwaDHQYSDFKf",
  "key34": "2cXF6PFtEYHWrBgutbKypwnNndP6gGQJfs7zQdJdMuuRrdgsovBMcZeKvfvnuoZtg9okaqC4cfkzCxBLY4GBk1bh",
  "key35": "Y1wtHt37FpT5au9TeUkM8cpMmVHCnGFT1Wcz1P22UCr8CbjF7Z9rxoiHC1nLvJT9Moyd8qXTu6cojcCKtFfa3rT",
  "key36": "3LoPC3fCsW7QAZqdoHFGwfs8B7NMTMAniJxRdeeJ3ri2dHqv6EnFaqrNHg9Y6gNhrMxYwHmoPbqs7Q19X8EU3xc5",
  "key37": "pDuWfVs8g5mF86E8vvWpPsmPjCnj1w5vzZtjRzd3bLNnJtpaKArckiidnSSofncKDPribYwStA34xPbkxtY75AP",
  "key38": "5Qi2ETaPnLxoaTto2YkVYPgXSUjGH7Lwje2erkXpp4pAY3QnodAyVhSBpD99qLmbsRdDV4nuoXNHcJEHvsAncubt"
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

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
    "5vW2YPzdsQDtSXDinGzyEvMzYb8CrEcrQpcDEBJeDwjAouBaVbsJwzq97gmGyJC9jBraxh8FUko32tF27XSbjord"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWsaeCbUU2Ki5pu2fBVqUfz73KmxSTR9MbvYZVPGpZUmSqEsgUhw1E54v1ibirgiatVWFBiFmZA8gesejmDx1jG",
  "key1": "5J6GZY69in5xo72e6Q9j4vhgYHTRCM2zXUnjmrF6LesPwUqgRSGJhV8xKpKTY36vwyNGr77BDCoP7wH3Wwe1LMci",
  "key2": "23PUo1uzem9osoze8ZnVFH3JCyZ38pBrmb4rST5GwpL8cC6j8CSYPPopo6h2XbbxoRqo9jydPer9sHVCnhqdE1T3",
  "key3": "4u5jYS74bWSUCPmp5zNFubsNibJrnv4siJfb3qw2WFPY9ajBYqT23umWEYZ5fejTk5im9vm8Ec7qxkVrrMbzyUyb",
  "key4": "3sfSS74f76iK4uF691ie5piommZv6tV93QosbnayGkKHz8W24YLKnzUEFVoRdJ5gB2ZRbaXZT5LciKxscNctdN49",
  "key5": "673bmgs5bSi5XCS5Ga2umegqwgGAULnkkDnjnFdTqtEyzWLvvwwaLs9WD2kQpWDV8tLtcZZwwhjRZdRpMEEcwmRG",
  "key6": "2EEEdxvSNjtXsrMQP3XUnZojDBEuLacoAckoJwGotL97cm1HA1QMSswiboHhzHjyEttXQzBG7snhJhf5Demn4j78",
  "key7": "wdkhN18PteGsk4W2aMSvkPqYqaL3sKHQxsqHFDU5Cwd9Y26ZrafXfoH5hSaECt911ecuqRp12KV7FMGtHUNxsLN",
  "key8": "2DbaXLYiviKqVDVTEcWzpDckm7JuJgqkQCLQX2i6hvirq39SCuB4DirvBKdt3FFczC4RAc6bNEnv6U2bepikDCJX",
  "key9": "2kkx1ZN2YpPXZffXq8aFzSAJDCpk7kGuBPwxkL6FQNsWBBVVaktHzSWT8sFC9JbMihdsTxigFuZvCiNi5Vxt6cNZ",
  "key10": "3b12KpF32qqiTQyQAo6jBLuXPuvwRmoRRrp1ZZtYhvXvkAiQkihrQMdbBf9GAkqTRpaXCyySQYKMyHUqVnL9RhaG",
  "key11": "41Aaq9rMZ8PN2ucRPwVMBJLVqvFdffDNfNj5ZsishNYKxqmzDhWpr7ShHKxjEwjchoK8gSmbvRoYgfbXa2TC6kyo",
  "key12": "6iw2sa5F4WqnvrmVWqgyWUdv83ZsMbFNRRggRZqb6wCkhCfKphfCmC8NhVcStfudUPeEpHvFSt8srm4qE6EkCJF",
  "key13": "2nzr2T1Q9VKt8zRF7CQZ47Q6qEALd2wC1dSZPtvVi5pQVx78dz11d9p7dfCfg1ea6sdsNFnVCykx4Y7TyzcKMLTa",
  "key14": "991NDYYQwxFpQkFAFnS7BQZahFcpD3HGFYwrku6xBSjjVVC51je1QUZ34TJmoSTH5znArxjgA8va2E1E7J3aJzd",
  "key15": "5AuKzw2uSkNsH5SvDRCaAujEEjH4ZZiPuPHn7ekBWNgvgy9fBVePFi27rmmgTFV9ZYhbHmh5b41cBuyh5NWCQYDw",
  "key16": "91uBrkJ137kGWqSKhpC7JLnRNbU3qWWAVaXuRkkCsCZz3acjzEXgcR5qz4ocVT6zgvNmAckpTVAeZFGikXDsp48",
  "key17": "4qHPVnxV2QCpUr8i6XtCv6pCXdcqnMmANcUDcrXnZ5MzeheJioGRkTvkno7QzXD3oHvbzAKBCogupRhZ8AvB2qqP",
  "key18": "3iKPUm197ihbrC3odDk6Sr4mtdFZGDogWdC3d2boueUbU5LtH79AZ5ueLR6JpqYsoTUhAgVwrTyY6VnRxTUQTByp",
  "key19": "3tXpQMzNZABYD6mYSQCjadEGmbw6XNxQpk3W3NrNTd1k7KJkT6p88jv2tEvBhmZMDybRZbA3sG9dpqU5Yg2xZAdj",
  "key20": "3hNq9DfSErEEA2w2HPvcPuyu25QvadWxeBPHLNpEZSDkWPoed7yZxHh3eNXahKgtqreiXw3ox1FKviw8VnRMRcDF",
  "key21": "64S8aa1q6TKUhRtbwcBiUpWibnT6jjzKXM97pXqasH3nHE3U4tQ1uA71w1Ca5Q42udRh7TxB24jJHXwqgRVmFbuT",
  "key22": "2fzP5K2rmvxBWDXvJu2FBwCi9vHugUhbp6BeWtWPLt1bqEQ7j7vDDCkxM2SXt4KEUtYrs12fETH6Rj5QiJXeHKJh",
  "key23": "mNTsa7HrBppvy6raebfvw9n89vHGnhSpT4FqVsJFnAHusQBYMZterpkXcU5gJtoNegZ6HkgUu9H2x7JezPQZizb",
  "key24": "5SCaGFnYVwLh3scwdhz1WtwVAcGdoLG6SQgawzQGEn1VsntboDGGPHVm45xEsd4ubv99D2d21PxVoXQd9h7KjfoR",
  "key25": "YbSbzFg5oSabQf6Y2giMpeEtqfxMxiAaEccbk4S2cFszedYbLgj58NYMjkbBi8z8tMWYBzFxod45BjvJ1aPBsz7",
  "key26": "4cVR68YotjCtKGBT5aCna7nfhk9f3zRwavya7oM2GNWR8Xaw5i5qKnjUe4L8rzbsnmiuumS5u29qcBAyuZLVJVGa",
  "key27": "225YbdmqK1MH2sgQ8LFJFh2H4zx3hGn6BHT1A65mpw6D8NXMppqioxyz6d82UmduXC3NRDYwBWbpRztsHsLjipf6",
  "key28": "3yJe8VXQ1xa12oLMTNSZd9m2QFfSDW1YnTrkkmp7MUh7cAmZr1vTDCsutQvLBdcLw4XpN6KBMueeFQRa8Eqz7Hnz",
  "key29": "4VVWLtnAKSHkbCG83D9nKDKhRjkEi3ZU5cYmHjk8KTaSdQ35MBZpgHckLaECsaVT6juyQMNiGZ3SXpnFeJag5qtx",
  "key30": "2NCxCLh3nqqLCZq2563MvsjhBLNBGtXXnMPJ6GD6RMURSYz7s8xPnFYZA1EiFFC33QWHYixpkiL4g55AyWgf4Y2w",
  "key31": "4xJpddoRgfY4AdsjH7oLGjcy5X8NxGPGhsPVLP4WJpau2g859zvEvnBXDXSFbXtMHPM8u3FpE7sSEgHVPqnwzqy1"
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

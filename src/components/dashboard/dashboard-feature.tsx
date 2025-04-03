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
    "3Fck5zFDZkMH1sCummh7eopa65mnuc5BdKTs2buKDR2iiMi2DcWkxZ1NGrjA3Piv92ms1PZjVvUH3VaprWBgm18J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BE6yDB2bC1KKvnnSKj4LLykWfUoN4ji3YBE8ko6J7CoSKJ3zKxCrySSrLmv9CBrfFUwK1hbXZbnabKzje2aPAYS",
  "key1": "2Dpd3WYTw4BHYSQz9352jVJwHz6fWoYNkJBLuMm6ZqNegsZf1RKewR3cT4K1igPJ2Bk17UqpqweBSRbfWAH39Esw",
  "key2": "3k4JcNekm8RmD4qxX5kPaigZy457rk8x7iUXM19Vmy4dcroQ2pfUWcadv93tpJc3YLdCcTUBfXTfDtQXjEtXJUgD",
  "key3": "4KnuBRwzuyFx1tU1UsBTosEhNwW7rsT6ZYDfVK4i2VU6gStfTBejZDCro5J3AKxYjjynR8SVgyf4pAeRChN97QzV",
  "key4": "354q9NC6zVhT4oUvCxMAZTh8tMqChfCnfYCK6dGQh9U6wFa3WhzTG3otUk5YFBAfJRkittrBALLagrogjHbAfocf",
  "key5": "2mn5MrYjhgRWqMG929Tequ4iHHfXzWc4tqK3mPKNMrpnQhZz5uMn5ZNXjv4LUfPdbxdXzizXiSwsWCu3efhFYhRy",
  "key6": "4vpVF8NvA2VAsmNDwmbZmxfcVPg9f6Vnbc5aRehURSaqHWo8ThLCbayJ2wPeCuE6pcNxMs5oaDNfS3VUWLEaERv6",
  "key7": "5ApdLV35beME5L8NSEdxcTyHzfBEwqJwKvrs3hAcJa3834hk2X7JS2VXDRDqqr6ELPKKy9tiqBSWyeUA3tGcunhH",
  "key8": "Ex9RiHG264akG7LcDHHocJg5AoTdnc6heykkDekBcsP69Xo2qGW6noa7DCQgtBaUgfNdcv2CM5T4RaQKVHYk2kV",
  "key9": "4zTV8e9wdc4FaN4d8w9vMABTUrybH82R6NwgKYiJjWaMfqe1s58XLFZpMasLizkYyBpjJpgfrVrFywmQgZvoa3Su",
  "key10": "65VjznB6A7WBtTJHa83mJ3gKmteAYYEESxzY9tZdiRxZhFPnKV5Aa4PCbhVw6sjuXA4aaUgGBvT1Ebb11GkGQrSQ",
  "key11": "45j1XRzZiFaexhPXEiGSZdmDjevo6E8giMwmPHAw4NNUXGwbRTjUSKy4TyUXbFhStgMpgcNQao8p5BogbxZHhR68",
  "key12": "4swbE6M3GGTGgCHERqYF3msvzXD3gT9GoxYmD4Xf5coGj1jZVEnNqjy36sxhhgE3W7kUbPR2YUqWKU7CFZgnXhi8",
  "key13": "5QP8gwvyjEXC5AyBVRdx2fdWa8dC6gK9uVqpeHVzZjiQpuR1FAGRafQCUPXG2C2bbkQ3ixMV2VdWR1NQRv1CfREa",
  "key14": "Je1Z6A3MMYCvUedrK7XNNBaKmujcx6BnPbHtxCs82rkK8Y5Z6bfBG8vjvPEDa8pMo5dJCiazb4eNgfVxHVEFqe7",
  "key15": "NmeeBR3MGJ65i9SuwewN6oq9yaYuAbYGFgqY92Q75NNxFxmw4Ev5neYfJms8mkbfjE82eUQH9tXeLZRuh8h84fB",
  "key16": "26DYj8nkJAuYuYchNjMSZBvHL79eqo8FChPdjEYLMMBqYtR6HAnQ8cEvNAaTPidYa5mS8vbgzLWC465Hy1cm81H9",
  "key17": "4bQQJm7Yjftc4GjQ4duBZrUzqzsbQXCztvHsFNSAvGSPTpFMLnYNh5CPDp8tfFFtsZM6iRS1ymgysaHfYU9Pd22S",
  "key18": "3D5aRGZXZqS84G7D9mo1bh5xdH6vmZH5yit2TM22TfsG4RBu3eqYtwgtKLpt3ZQJPBiV47cFCgPeyrqpiefPJCqM",
  "key19": "3yfYvYGcvRqb5JdYcjcQpEiKAiuRAMgzjkBsGo1WvUePZb7zdRJYHmqNbEnmgEMniabhR3ZBHa6FCqYyEvaMFNz9",
  "key20": "65Ld2fDnXZw5JfpuxnKFP1rVFWdgi4N5WE2KioGBq4TViQZrQTkrMJbARyJtvWqw95EK68LMgpn4WT5fKWm5oMkJ",
  "key21": "4H3t4XZeH8LqXAASpgMbGv5AmT9Pi4u31aa4W2Yn2WzgiviFshZ4qmQH7C2DSRiKt6cTaiPfYthG4A6L5SWbCeqj",
  "key22": "2B2a5WfniPnQZapTqVYDdT12dZwKWyTrgMESwZJXHG2Pypkha4isbLCMpFiZnEnPSk4QUA8H4xpcMiM4WQCZAxRi",
  "key23": "3EdqvtiNg5rURogGs3hcCvmJcfUFNJkornFa8uJ465J1KVBeVzetk1xqN9JVn99xMx77zNxRscNkc7EGgB1D4bEe",
  "key24": "W85RQj1sc41eZjxWbAgChRvC2TVrWCGY8Tpdbpoob7Hx2VhCE9HcKSKsK3BFzRzZP2WPJfx7ihN9p7evvT5rgWL",
  "key25": "TALS3i9aDWvpNZTNvvcvzSVLZrVwetxW7eVJKzGwYUuT2dgTyrKp2qn9Re3CbDxo7X4SBcYVXty4yXjLyHMRKty",
  "key26": "3b9vEwb4iSqyekkFhgkwXp4j3N5CsqnrFCvU57F4Aob6AqSBRjzAGVzdLedwvpCt3XkW9wpjZWqvyMZ2VKHRGKfa",
  "key27": "3kXsPDD1MBYuUmANoQouhGpMQGcBCZFjLqCsg9pmyXVY23MHmRpQBKiEL3TgmwLmtbPwuDLAFQ4ARU9Bc5qCYtRX",
  "key28": "5nQfVTWp599DfgNVF4XpSYzRznRdb2JQnXNyLBmFiAK3pVgZBsw71PKA5AAWe9yGdhh4CdCPj1iD6Q5V3vm8sDJW",
  "key29": "jUi6MbzMtq5ZWW4xcrHrDbs1QYYgJeVtgEquMN4YeydpxLnfN5rbVCQmcQrr6JaB31bQutT35ixgS6Y8PVT7EPs",
  "key30": "4rS99jBQbDPFZya5Fhz2cjh56G737LgiyddWhvVbadDDVZFGrRu5NHFRs2yzZSRc72juQBdsJo6swsohw9DfPwHC",
  "key31": "5b4AzL11aozGSGjBJDWvGRL5fx5bhB38kn8N4JgojYE7TmvV7sxy68XXvxEVTdxWhvDPTVW711zDDPdgDDpa2SY1",
  "key32": "2z6RMRFCXovffWaG2KPuNsHXk8oNDt7vjsWTJ3HKjb89qWgZVYcsNjg94pGk4i1p3QtNrQjGr5fn2wqC1XTULeY9",
  "key33": "3VdNwsKT2y2vkJS1N1o9r9fhfXpZ6gXo1AmA4mehC8KcjnoHee3XNnWxRpNCixncXeLNhqkaCN7yAL3DRTWcqDWk",
  "key34": "4BejCiroakBHHk1v7kzVvBFycho1T6dsC2AaadkfkJEeSpxipJYf8qsoNRUwFnvKJLTVWoiNT3k8thZNtFUhC4b3",
  "key35": "3ddcjV5MfKC42Sdh2AYU2ToDfd7JuaQZrkMk4CeihKSfxBBkgBdTif9j5pC5zKqwbygAQcVBvnQCo9YW1d4tHpMG",
  "key36": "5XRqwW7nMdYehC789VHdswu9fMP7owQLriyN624UjGdxMJJNJAPqmMbXbd2e9CVryvXj5Z9wxEacphrFLgUGJePW",
  "key37": "4p7tDJ9QVH8mzbWk13KNtT6inyHwTqgxe4Mx2STkr24MjGuCG9d2qtWoagYWNBTXjLcJnEUSiwLaGGKxMVukRzuH",
  "key38": "67h4yDa7s8n2GKnLDnSXoQqqx5g1d56X2nB5kCXeYfUwTo9usbuqgzntG1w3vBpSKQrf88fDGRGcG2rzJe3su1tp",
  "key39": "5gs5sVWrRYsfBqfVsyVLfiFJmxMs8ENNH6Nx1u97pitpMcV4RF7g3L2XtNAWn1iP6UUUZBiYgLrtyUKj7h4nsEQU",
  "key40": "3FC58aUptKhQfdqjLr5cz1XRoWrndmpdNzGak8vBD6EHuYhcrhxqAM8DsoJMDtyeatuNvvSDhrqr4mTouzX5NNwo"
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

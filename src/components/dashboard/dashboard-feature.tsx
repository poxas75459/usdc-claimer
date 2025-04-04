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
    "wtVaoJhZxf37eYMT82CtCebJrQUbhv6VaUAcTF4BFh6NWXyQZYho6RfqM6RFRuXHmPqQwoKNG5BL87ZrH51zJJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "72bjmcTh3qrZXZ1gBwHfp8UZHBaPMWdTXks136qtG48LtJbk5jDZbbTrsADofiNY8NP1vxZN1tT8j1s3FUtUGRn",
  "key1": "5tzVEmzmsZCReYSjFSFDyA5h1EnvEU5DcBApqFUdi9pzf5PeCCMqjdecM25ehG8KMcxAK2Lp9JQxwmpc8M5p7F7B",
  "key2": "5xuMTXrbsLSPTnvP1ZzAxyD4uoRt2YLiDryNyycMQFHeTkYPzsNHDdcW3ui2JswnLtKt8LGGHgPaCR3DJvF2Pr4a",
  "key3": "55AwLyozVjBNuZNcsS4TiiWdpLGM3omGHo4GqtVF3pejvfRTc7AeUKPBRj9jm1XnPrcZVhQRNUVsTY5HjE3EZ6uG",
  "key4": "51NnPL9VSLdwKoTMxhbkntDfKGySRa5kRTGXWysrtxvhbTVJrxP9BvMFYRXVtzb95bg4r3JM4KZR7aCfPUbTpoaY",
  "key5": "5jmmRcfhCRjToY1pAJXhd4JzbSnwXVsAXGYheehFGCq63tUGegZggat1F9aq3dHaVVzzmcebUiyV7RfDuoqgjGbB",
  "key6": "5eYbL9fesz8Q2H2RtmK7cAoMgu9k917AQW68zohtJGaUBuushpddReEMBLntN6zt1Ny8VLqoc7mPKbSV6HDhTzdK",
  "key7": "3zQjqdPW34gjcFUnN2P86YQj4VciKrxoyhoFf6SshFehTFdxULEFQovEvNegwEvmbkzvLcXZ54rSs1iL5nHJ7Wqf",
  "key8": "MWwKCi75dG6UemnKYR6mSDEvSXPZtqgEbTnNu95gQ69MfayXDFk1ZLhYYW2CeYHXEHghwW8UQ3qkJBBWnR29K5X",
  "key9": "3mZdsFEy2GyRi1H3YK93n4EoQi6N6cd7mDjajvNDXxbx6ZZseSDr5LrHJW7Y3CCUs5onxN9AZZrcgrSJ13dG6ZmE",
  "key10": "52CAnnYZ1QmQJqeQEcLqi3x1omYy8tFDRDAfeEmjAU7w16TuZucsheyFo7DqqBpqQUhyy9CjQKsgjPVTUKWgoCf1",
  "key11": "4WRXJSs6pALwdNbTA3523PNqo8QhqRC1JcAPRmXDM2dPbX4nPjno9m8etJ31FA7DUaW4dXKTFUZmd1dzLNAuNqw",
  "key12": "3bXQXDbCA6G7mmzW4PizbaEZHro643NK31vfuZchH6Kmb7p6on4vJKoFrPFvAAeTLNuWjKErUc5RBCsNMcVwK5kv",
  "key13": "54rAnR5xeBTUDmWkEPwUVc1vuq6AocGeZu6fmHH7zSYkDWVDN3cADC8Yaa4eLX6zEBaj3LhyDU5tYLtTHgaf2Lrr",
  "key14": "5bpE6StpTDsububPk8En8L5jf3p13gbzDKKwnTvR85u5x8NCX6PxoWuYirFuscGjY38Fga9abRbL95fjmnQpNstT",
  "key15": "3WEkDDT9gBuuu9w3auB1Fj7kJCGUzR8Snvj7LkVUCBvJXC2yrsYYy8hQKTJDVDhGf8BfHxhp6Hw3EX4K788zF6BU",
  "key16": "64myCn1HvUzxNaaLxpYRFYVSh2LEE5AxDf37xQq8nu7MwpoMao6uL2GqFYR3Z59i8rUBB3K4UJZNtSZs2rj17FAW",
  "key17": "41bjkJU3vvXvHDePFoWCzFbsDsPj5uUj2n4peWTT5VLxe2kafTR5KnBFVHrMtFHPLCVanRqa5g3m1zLzimARjbkn",
  "key18": "3ssebnxr8Wp2QM3FxUWW9aSq1Q8xxpqufLvADzBFw9GMxo4QNEZaX4etwiA6eNwEpopYzcjbzSHaYc2mnXnUDRuq",
  "key19": "4QY5VjeBWWMvtmB7En2hv7kZJ9KM4xmbB7Xss8i15p4H7EiYJ26YVgRyptVLfHyuve3tLSxxnY3SE8nHhZgbKZPH",
  "key20": "3YDKYYb4p5MxCkVgGP2GAQu6xmjvmBXzWfBkJCusc63Y9Sqb7ZdHKpdVBveuxq3Vt7vGHBpKezwbMiC19JkfyXC3",
  "key21": "4dGN1iw4pSV59Jsk3kN1khKBNizq45uateZ6kqJ4GseKFrr1hv4Pm2MKPsBXXq5LGcfjBP3dtG3yNX8Hvq1niAFG",
  "key22": "5Hj1wR1uu8yGZnpzcBM44cfzuWZ1LxDdzdVDMjhzn5Zpt4qjfX5iTFAQqH4QDvMsgwQRrpwgbggxHeYAN2zRTKZr",
  "key23": "KJ6kSxieyZwzmhM9Tkbguckt1bPD77WneXTtZ1Ss8rrpjBSU1c7ZBuiskeBL7U3iQH2Eo5pUXenbTUfFyTT3kPQ",
  "key24": "3hsBg4TYaAa7kXmEcyUGrEYB3MA4gfnQ7yukzPiWdY7dBZnMBqnjoFgtxSuDgdDM9H4UkTk3Svx5NtjYgwgz9u2j",
  "key25": "4R89XyXwJYNQss26SYBk5MD4BMem1jk1KzHf4V7v7m1uL7jBVGuQZSG9xiThqb5K1c3s4vPU3YMsMkpwkDKJCQSj",
  "key26": "1DbT9EW3bgiYyFeDvw2NiiTG3MLGcAKpABaPTLrFt94owMpfbkWR63ZsHhpHcX4opmyg9Vuus8ur7vMxmp69ot3",
  "key27": "4zEsrCSPX2CyYqNGaxMsDpwron9Wh6aodDNaUR1MbUQK28nfXzZr4DEsF758uw4U2nHwTVjshFkAhMteN37cTeNz",
  "key28": "3VPcYGCwvWEuY26VkC5dcQxpwpX64yGtUK1MnQAx79Dn6UqasxrXCBu9RbBRfQ1kvuzaouWh6ef4UN4KUqCapU4K",
  "key29": "5ejBeqN3DEUrhDKmE2bpvH1rbx9kuCToZ6QSHLpZM2ZL7PWyaHKUufW84EP8iS7gYWzyuj4oUwkKSKRj3AP6KNJ5"
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

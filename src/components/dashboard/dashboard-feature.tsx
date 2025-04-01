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
    "H4MQ6KxUQBqwjjs5j7w9WumPzJ6aS5RXYBuaepgdV3SZBBGRJeUgSrya1jysryE5o8dbwPWuzZUCHcKQX2VRTJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uokAakpVU8qS5Gd1pxGQp21VgYWViCUj5yaxCChBTNyvbHqtKaNnC6Dz8XdGqRmj4h9qbnoa11Bz6wLiWXMA9Yy",
  "key1": "3b6SHedEeV1mFav2C99dZEoZreZPZijhokksVfQE4itv8UbPh3TxMd75cPbiYSpsja21kPqK8nB115qvXtoD5rLC",
  "key2": "4bztKqdnYnL66r3fTwhqqTM2bzLwAU4xdLHRo4XhzVw7YEnzBCeJDKyTCgZmyTT1KiqeVE9y4Q73hfHRJiPvNr7q",
  "key3": "2fRWryDtrFTUMwKLcVFHDnHUuMegF32ccWUcsTuoYsuUnjj1EQ1VL3iBJ2XFoAEBpAc6K4eksD3sM1nTkHDeifx6",
  "key4": "dDeV4fpPYvdPbSwLB7ddpLvgugMn6RFQTqmpBjQSF7LHkfpYhx2rxB6vZc61g5JYGkrR1WgrtH221PFPeagL2Wa",
  "key5": "3Rnew3KooWSrcWnJK5yhUPFFtX9X3aXg3s5CZNRF6ATu95EUEqBjWRrmVXcjkA1a9vbqQzGdnFz1Dka84kywNZcz",
  "key6": "4a34BMaMTjrbDpFLMVpMD1UEuvWevPHqQwdKBiUfFjEsrEPKqxTijZrgGw4NSLrQARGKyURj8KbTyYc697kjP5ox",
  "key7": "5BYy5Tizb4EmRq3zbYBFvhfuXekFC7XcwxUULj9WtMjw1k6m8Nmn6VJup5poxJfpwDC8YJ1bzp7tHbMe7XN7mZwy",
  "key8": "7b2xB4FyR9fuaAHphZoJ5F6iZzvK7gmUW72Bu8SuuC1tfxCZihDw921RM7yA5iURrBpqnku8upMX9U5bpLY9w77",
  "key9": "4PXDogtXKRz4yUvL4JnypwnXf1vhTEWxahuqb17uA9wxtyVUnZKddAsTRmDuTzjyTSQNZ3CMTm567DRuuaafxLjh",
  "key10": "2Dkizf9KuULjfuSTAPHojUjrVFBWuu4yo6h4nuNBhHUpWyBJahdNMG1KTtL7aML69fe7eGdaqCgMRJpJigfDRNmx",
  "key11": "54tviBuKHD46HcfC1DPgej2BSBSNwXYoPM66vTWRbBQRnppwCkeakspYCrsNjo5GoJ1EmqyvTq7CB7STi5ErF7oM",
  "key12": "5EQZoD7NChoeMLJmTK19nTbPX7D5ueY7x9NXJer133i8rt64o4KBaPUgFofz1o8fB2FeJWciQbHE2cpdvUzwHB8f",
  "key13": "4iJZb7v33dww3xGZEomKmEoZSjkWwE1M2HaRbo53wvBYErvXUsHJ3MYBkbZEojYJ2G98wUL9uK1HAJUc4LwKeiUn",
  "key14": "3Ty4nMm7N9udgJ9GgHuJaiBRpUQyWV2dwcBa586bT4t71HE469jo6QjZTCDmkiHzcdbS4zVvTxyuoT6Q7pmrS6ui",
  "key15": "5uNSjDTvYRH5AJqBkmeg5h3n9BRNbGs7t3trk79Px8wnzSbosPMZQGHyL4irsP4d2Hqzq5xBSZ5hEEHXWAK2gUcw",
  "key16": "3uxNnxjrxuASUqgQTQ64XXtKpVKdGYjBUgcCw3hkSqdbmgtodwrwAQTzBpwkMuzmyS7uXaMsnt8H8ALvh1YuNciv",
  "key17": "38uo2wyTAG2bQxQ7crdcmBjQjBN9s5vBDEd8ZtQozLggNa9Su9bkwEV18FRrAMzYajPAMppBkkJMs2RpxPKGbMzx",
  "key18": "2KEQHJ4TXSHLoAhDasV8Kjs86zYysjmdLNqEEPULSq9G7i94bwCzPrhjjXkF9H7tZrbLDHwMhMAzFzKgjAVoxviV",
  "key19": "5qE2gjianKAfcveyqRvtS5jjJvD1ePViWnFQMFHemCJtW7oN7t7xKBxTsZ3VhFsQMRRbETKppjp28Wr7jA2KZhvj",
  "key20": "PtvT2Zu18xpoMhajG5ky77teqfqADfVCTFxzRrXP8Kix7yMbD2Enn9WqZa8iAWHxp2ckwMRDyo9aaxHSu9BKCko",
  "key21": "5sT9ycFJoMfjWZVmjebtoYqSKgPVbAYrvvtBcPRXYa4vUSS9BHaMNqhPxjfPFuNHN8Qt4agx5dfjyBH5PGb4sadD",
  "key22": "3enrp4oEKnkrKq1Mg7cd1dShKqUuDtYQpjtWVEBbLvFKX59Bg7gMGVx4jZkpxfVyijLfbxsuL4P3QJrsoP5DZaUM",
  "key23": "4arY36DaQEKAPSZ1kGrv5u7ocvkWKr3FLgSdQnv6ASM7EQNpTtriuCP9byzmZFZJTB63sqqiTse9n6cJY9GLZJpr",
  "key24": "2yoVLzjQKhLt5QYWJHqMapE5DGwsTWp7a4x162azNCjbBZwYgDJD25nfz8dbk5FtJ9VGjfcphgbaZWvh6K26yRc2",
  "key25": "5zZqSdZqujwwpYiKwACAyGmMbCYL6UpSsbZtkhP2pdX5B879dtJEt2f9qtxGUFzY9KkHQfGo72FdeVdaq45inJ8v",
  "key26": "34VH5MUBvKrwJbGR8ECLqnSNSKxpaEhRSmBN7ALb213Wap1g9sUFqpjbrWHb41tm69YKsGc5ZoZhRsEPqPmCJDF5",
  "key27": "Dkw3sZMj1Zz6JYMvTDyXxshhz7Y76vVwxEb62gmgywUGPAoKMXpV2z3UVWJbnGdNYV9rbJStrXhpFWMqz6Rz8xL",
  "key28": "5qrjbyb94yiEzdQbvfTFMCja1bhUaGTAtpNqrxeBBZidD14tPQyX4wuMnxHNgrMy2R36tq5XhwmycxpMxxBAUojY",
  "key29": "mXi2Y3pU3X2BQRWzhxLhVU9TkBgfLk58EQQhDQgnAQ4zbvqcJRB2s6Uggr873j53yddZ2EB6MCqNUQd9FFX5aix"
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

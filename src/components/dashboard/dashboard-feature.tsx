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
    "2NfrrBM51FyFYTbTPzY8v8evHsagXiKb8m1xNU72ym3TWBC2vuYERu43dimwDdmeWMXPqYX4F4adBJ6zLR12Lks8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDhaBknzYUvMXVDQahW5mPgHH61s8Cj6eRUcZyaSPHC7J1ohehBwoCERqBvGdDvaa25QUrEKqx1H3yzfU6eLBN9",
  "key1": "4sUa3FKYiKnbRdGjsRzW4d1NvHJB5wU1mcmFtUnXwXJ3AVnGLkFmnpeCae7yiEVKYgq4TqsSnBdGZuQ5k1TMq4uw",
  "key2": "3PwB6CMDsHi89yof7ehghdNQgtN9FKm3ZYhuDYhJCiPB8ncGYMj7J84fy6XhFNa6Yd2pxPgRGsUMsoipsVcW9RKS",
  "key3": "4DJFkCghrouNkdmn4dnrvosmp8jAqE17NAU8qLBfdGKuHmXBEotG9JwPum3Jpr3wETbQQyBFYHLYrGUekTBxAwYy",
  "key4": "3xLvFEeLUdVtMjenuZdvNQoYkpLs299Cja6ibBuEo2SMxNtGQqczV37Fr68auhjH9xTqMbiM7GDRAZymXdwpGXo3",
  "key5": "3hFgWRb8jLixcs1wxzgFTLNoauANXBdV3VZQLVQDrjVrt7xJuw2xtwnFr1gRQDaZNx6yfPvk1bFVeMKY199fGEB6",
  "key6": "WSJYh4TNma7ESX1yekBiCiEzH2Gw7AsigRHzSKBKYbjehsbD6fDW3rfpnbkzqVq1EXFym7NNTL2GPEnZMTBSPGQ",
  "key7": "39qAhBnjpYVyB2qe9nK36f1WYCBD361DDex7pQQ72X2Vz9Btjb6214N2CCGEDs4cYsYShMuvSfjURXnL7PGmk5PS",
  "key8": "4wgzu3R2SRi7uE3MZqpsWMZbLfVkE7xZiLaGKs1tmqsRew1QjCFSdQss5WFxUgW4CX8o4CH2PdF6cG5DkJPSdS3J",
  "key9": "2bQwpMA1EjgwEXbvXWVmLda1VWKqPKPRaZ4mR5Hpc56TiHwmNKtLtrGm4EQ1CYh2LmkXW4BscyYXhezPhmxN8Qjs",
  "key10": "2WwxVmZm8gmHC5QXVtk9qrnRZVwQUhXxiVor5gpTfbyZUvkL8ZEpyuaX6G8DWC37azP51278ubtvYwKP9CssyxAc",
  "key11": "2KiZUMEWPjUgoZRnhfhEN82J8V4XsCcnyaKWSDZWvTkPZBJ8mVpynubs2Hkgny1ReWmeQXmFWcBy5ce4uJ5BCoJ1",
  "key12": "w1omF2m7PJhePt1xsXs3VVw4RY3siAG2hx4QFZtW8QnqcWR4kCqPH6AunT9L7ffvQoG4iH6YKnof6V2SeCSzyQh",
  "key13": "Q6dBEgVzNTAXz9mrT7qNB3ziTzdX2ntVzhp6tSCcojkvNmcekbSP4jmxZ7woqFofZEsiFwxin3JdsPE7LByjoEs",
  "key14": "5JX2kyLREwvfLeSyLQVcw8UEwgbjAmTJ8MyHnhyUdDZEMFGfnZyM8A9xAbSru5h6ghkRhnT5cGUhMXgcS4WvEQsQ",
  "key15": "2sCc1JiySS8GNxaqgrFuDNNAuW6QBqycRwLuoDvc9PVg2opKqFs2L1U7bXqzM6HLfHAXPzYcs25TTVTs6XKSoPon",
  "key16": "MiQuXMZmj3yWoj4S1hT9ReVoPjaD6FmHENS7xuL4Mcc4xxkqvHNDUDAMfhjduETFvQTZvdEp7s3zyJocMPBYQnu",
  "key17": "5HCeg2T67hLRWK9saCfpwcRNg2XQtpRtn44NoKmMhgrmVgBCtahWnirUM8BjWCrmqh7BmHVZqbPytX4Jwsse52zA",
  "key18": "iPhDh8RTFBgfRKHGhtbTt83WjCzNDMe5dRQ1iY3x5kxmMxvUEjKyPYtej8vSjZLvUDXNx3VAZc1zBxAzQwq5WzB",
  "key19": "4kxdknpH5VzGZ46C2HBVuH4utW55pj1xmY96VHY521ngvUUPxryYzoPRMn5rzCZfnvqQNLdCKL1Y5EWmpEUdWWpi",
  "key20": "4dXaNqAgvS3QMcxZGDUfeKCtLqo8owJQiqTxXTF3EbUyeMgPeNverj1W7tKPFFh6jSFciWFUJ2bFCXq61GZZjeHK",
  "key21": "2qZZopC4mxLXpBoL4Awxdoao5PLeyN2ZN7FwNNMio94xL6TmEcpoeJmzrcDzSMBCapwnP6N4d4RCHFNzzug4hrmr",
  "key22": "3S53dVBGU12ftAu9qDZPNiidzV9GYFvYwLs7weg9zdFYJNUM6q9rPPJgRZt8G34AChnEpkbZ91N3E2PLosHug88a",
  "key23": "5Q7nqRGiPxy3ndTF6gG98HGN2LfZJRUj4j1NqfsS55e7LVAn9yhnnBjdVdDamTvqwTNW7kQFfamqbBtRyQW6ya4P",
  "key24": "5tk8F5tEzDx1isfqSP9XA8DtnWtxZ9TvK7zKE3pdmoZ1cispNMJQ1DyWxG5AGwNF65CDkWx5K37gcTsZGX4See3o",
  "key25": "3MPDAVoSn34o1J5TgJxeYDBPnGLoBFKh6i3m8168Xohp7PmJUu2jKY7W1wBMsXZ35h3QWpqkQw3C6xm8pgDHSUJL",
  "key26": "2ZJbqcuBqT1JRbHFuvMGx5LMRWSnx1rVSmcstvhfce1B1Nk5avDzJijfGRE3aXbFDuLVFqzd5ejUt6veNhFFbNvS",
  "key27": "4STAy4GcCEjPn5QLrQXfy7exW4Rg69u8Sgmkys3eV19sWyXX8DXCKv2jomGGR9sNVLQinQHuJvM1yhWRTsdARMCd",
  "key28": "5CjnTS2iUkuqpt1XhrrbZnp3mKvKsqXmvv2YnZbPQotX975N1ibS3JKYs4TtDvVKtX3bxrtEeMw39EJot18pm8Km",
  "key29": "2f1pnywFywfDTeRn2JQtgvMqMooYUGub4iuFxd5qfW16ipkjiEBmAbX2UGmq6v4m5F38RdzUA69eZL1CQ3sBga92",
  "key30": "2ceeTR2dvrCLJi9MhyBzsDkVLSR3TwboR1zjFNVCX7oA4ivuHcYXXF7ikzdorynuLdoXjHYJdMEKeDHzg8c3haZb"
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

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
    "3geNtf6QwEGQLeZjvsjkZeMLE2BPqYEmTwrcDoQydMcHaEGoWVgkPn7dcDXe7xH4a96dUM4jXqr6UgvwDQpsHboT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jrbPnfxD7kfFVvGbSMmmF8TQYLT38mpwaVfVwWnN5TtMTpXQYpkiRFjWbjSDjVazNUBYsxZJhnhrx4Y7oEDb5zH",
  "key1": "59B4jjyHEGrHS6cGMYtfntD5S1hiVssmPViVrLDc2LaHU1GQV26YsK3ZUNLqkVrdvFuBmuEg1GbAjUHEzX7dxJkD",
  "key2": "4c3xSr9XiQeHeFGSRAnB52j1Q3hev755ZCoBs58xRG7MV1mvWPSboPNwzXjZMpvU2P8243JABvnkZWkdnUz6ntn4",
  "key3": "2uXxxfvMXLUtqPQpWjDmB5bvYrimycxRY74cnK7W3KjEqqcurggxDTiQ4FmXjN7XnBaaVczwaVSexisgt5q59oRU",
  "key4": "398N8FE8GWnKYfRP66vHk1GA4yyHVqPSRcPXyK9AkZg5kSFCvA3m9zCuyoLNPsAuXZYJKYouxmktFgPzQvhqkFqX",
  "key5": "Jzk8Qn8pJXZHoUzTghrss4G1xDv8c1BCKyqbs2gNjGkAme3smEc2NDPkUFhpGQ65EXJ1L266cubZNWwRy7vJD6y",
  "key6": "5mdwmEeEXa3kgFnLd5UGoRhXnf31RGnV5KGMtxBdWz7eEAw6Vfnvm4eXgStnCjkqpkNfr5tybR1uiinJboj3soTe",
  "key7": "4qQR2tdHzmkM6VBTXTmkKrEdgDZYdmDUB2cYKHipJaxjnpMytPYPU3WdWB2D18mqbut6biZDL5DRCaLDAduyAvDM",
  "key8": "4PSqdWnESjCLG93UAjJKt7RS7QYYdVK1Ed59HrUtpC1AvkyogfP8VDHm1YiDMkzFyHRhddz22qrHGRAHudTwCnzL",
  "key9": "2iNu5Y9uGqxAED1W5G3iXzoepV4k5iF1tLrkKHwxDR3QP8CFTDGAdBinyyDKRHnGjvxtufaU6Z2c6MCzKZgg1dcW",
  "key10": "3WFVNgJJjFpEQuEkZinhVoYPKBDASiVLuwtqd1DWsznNjZWkWzWhMGPV1okGKNr93eVXiuxBf3KQeLGuwYQiFJbR",
  "key11": "2t2uieD1NPg6655PZfYdoQKDAZJwSDvcMi3Gq48tzNbMn9LFivKpA5FSo87wxdAp4YE2PSCviNxWz7DYZBYqYeuN",
  "key12": "2ts7iRRqL9mS6GdmefiagrpqFQDNtHVuc6gK4mujPj3P34dLdwyP2KD1b1WgCVgKZPnPMBBEUhBkqeibGnEMPmrS",
  "key13": "27yipXD4G6HSDPjHd54wZLdZzEWwZYT2E7jh5MJ1RiE2zkYS3Bg5tzM1aY1QvHoAX6tLxy2DCkGopFusE3FWbp3X",
  "key14": "2tcvJVjoYETZtPqBSuVGQnALkHCPWgQdLCe6zokJaSXgi7roczxdJPyxjkkPJGuJbbPKiE6PR7uDXhbmHVxd8ywD",
  "key15": "4vtEn5uRhBNsXhLjFdNrVtjnhtbdyEo7zZXuV5aWWVzSyBY9bhsrqpRvi8vFFUvfqtsY6fMBw3PdimJAze6pCzwv",
  "key16": "2At5UULmAWm6i52qxmDEVeZ8xuMbtqNGCetqnUqU5Sx3kkSYB8NUNbVB5JYhpivtmA1tr4yt1xixSUF5wpkZ84Xk",
  "key17": "223jEkj4ZvGiSVpaLyCBk9buuV9fqnirwFZN9i4SyxH7JDX8DmQGRqeYZqvA8TKi3K5MZqtomxKhc1QcKUEtExuA",
  "key18": "Q4mYLYtBXZ7NqKb3nTKo3gRnUwoJHERhLrW5XvRMYNC639sca3WbktNAwgbYMZbhsujDooM337sURgF2kgGR9Ao",
  "key19": "XnFZyqThugPCyB4fqcBqwPm3w1YHXKjTGEgh3vuozxW6mUcZXEvojkLpubLht2jpEibmw3Vx5VNWECZ9SmqqZJi",
  "key20": "2guqdaiRy3D3XsMm1waZWo5PW6gV8ZtGSYHQ7QhrzpEg9SukusiGQQLT1PBaDuxx7jZCJ6hbE8So1xeFsyyvVqS1",
  "key21": "2APyJ2Ty2uBDMzY9zxBWQrD9X9zEFE87KE5aErNbfKrrKLuNBWDgqynhaShAFeSeq8NL6UbkgJkSW6UToBgNnPey",
  "key22": "2hMSj5E2t2XQCmxq7mBZ2dXvgz7iq7o1dvvmSSHp8W4UdQY52R3UTsoN8PkKbGZizYSKUYS8kKKB9gPuttK2xBjL",
  "key23": "oawUiBjqnrLEGQi2qrvsUXM46da9vdrY1FLq4ovEfJ82nTZeU5L632xj7XKt92WCTstEeqN3zjXKee8pcm2EgmA",
  "key24": "djFWNpPftotw3YRbhMwjsgMq516YtjUzq3EpfL27s1bJts8hge1JmTS6b6KtB7wK9JKGiJQ7zvvWuWqTN39Jf8v",
  "key25": "2FLENhmXQQJee8WGfwenpcYunxV2zTFsyvdHsBX2HEZjBRjs32AeNsVyFBjr2tFkqZKic9dzXkpp4aTkJHRudiPy",
  "key26": "5dvzoicqFozGJPeasEbmqypCZVhSSBa8vuC4a4r97xByPTQKZFEGJbn6i1hCavuXyRvKbQBqTaokkRvPEvJBe248",
  "key27": "5ySFzyxE7ofLMkFMwAMk8QMeF1crogU9EXNERJFfzrHEAYpBbkm4X1obXej5GrVQhdo1dGR4R5Q3fWYC8Wi2FCvz",
  "key28": "3ZFgNoVTkWvGrZZ9BFJoq9GLNRjs4vVa4pV1HRAWm5zpXC7wK4XEV3B7FrKxeb5eByjRNP4XCRJF3CyowrZcry4Q",
  "key29": "TKfwCvYLUJbDKW4ZE4Tvu7V7FdMDVhRKKJdLTeCESByz9CNCAmbUx4ejwoebt4hKEdE636ACtZj7MwvxK56zxiD",
  "key30": "4JcH2LLpJRHG15ds1RKj8J4BeiPtST7ksQq15kabFJD9UWtYPkHdhDRPdVUJJ6cXrxQ9HRHHgyu4y3G4pU1o6tZU",
  "key31": "4QpA5zoXeS1LrnTh8whBKRBW3nCzY1HBp2mdLNjS1kA6mDmkjfcsK53mxDnfMXJ8f13PrfZj5VTgcgkEji4Ddr3C",
  "key32": "645FzSzYSujqWZbXtqwdg2wZoiRFG3aV9iFJeeXHaysEhbQwBVkQ9ogVK5SgpdGMmLTCYjf38rwXfWnNVaANNG3K",
  "key33": "Ubm9p1MjPymx84uYiUKBzAKrr2Z38DEzzHhNLBd1MDr7FEWk1TxK6FiXiheU2qoe8vDeFngXTqTbn8HPjAHJYVt",
  "key34": "2XtxQjj9WmtUzjVZzNn85Gt88MhLp2GLDvVT75y4NT4nhEnTCaiC14ub2KYoxKDMXLHZmFwdZ7DsRxzxhkBLYAXu",
  "key35": "6mCcsuZgyUEFfqT2b27ESKQyoQpeS8CNrsyMurApEV7dAG5yiG6Xqr4jvHjbsTZa85k7WomNEBzXLMocQtNXqMX",
  "key36": "3BkCrVf1CDkr7GNJMzgLAopbCAFBJKVCsioWVtPbauwmMzkM9dmJa2wU6AZnJzAS5sWV2TDvnvJ1ihaq84ACVpJu",
  "key37": "E6c5z3avdppV5mnsFni9N92dMKCKsB3XEC9jbn4XHtzBmg5Zj4d6T8xuHZmnfKqNSgs57gDBqLZuQQsfRPGeCxh",
  "key38": "5QS2QXCJpWUHJdYQBp4AFjNQbFz2bgAVVHXoKssJk3YqvBVN979ArmohCPttHxNMyCBwDEVJWkQFRfZUZChKc2Tf",
  "key39": "2egqfTHHfSS4bpnUY9NCd7GWdHespmQwssoFbPK9mRNZ3EZYjPPTxVPHYJ462zEYdFBFZ4aUzeZbQSNptkXcYdJC",
  "key40": "2GZwSSgm36DoWTLFMws6KBBuMUn9YfPJbiueHeaqXiZstNUppRPaSPon5GX2bhPuE6nPNXXgE6mQQCYbP8iJ6rxm"
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

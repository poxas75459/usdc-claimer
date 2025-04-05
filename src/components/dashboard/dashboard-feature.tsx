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
    "28dYRbbStw9VMpSuhi7YV5XjokE21dUC5bWTFa6EaB6zojJn7WCQtUoj4vvxkQvUtbBVg8G3y5XMSfuYjNDztVp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbiEaXPLqYpvnCciRMRRyPZnz8aavetm8odV5HWjNDLvCHQE5zGTyMGpqTjx6S7bEW71MkhegYrpmAMyUoiAGKu",
  "key1": "42BK42En3taroYHUK2AYhH2tFPqbDmtR2sZYYVbgf7KVWfrKJ13r9GDtnP2zmBMABqossCp4Q2ypAL1kJfYCHHiB",
  "key2": "w1vuZ3hksvVruUmfzVHAxrTJg8eifFaCBy2g7GU88LJ6KWhYdx8RCcCaAd2r91rP1oTXQFeGbwJNNUY52gpix7P",
  "key3": "27eSt65FsSPs53tXEi2Yv8zsMYUdvMSnf9XHtNvyLMMccQZQb2X6hYVQxLEzNiErwifajxumvU9a3DSsaqagtrp2",
  "key4": "LKf64Zkx73ECLB1q8thwrX8YWyteypmm6CyBR1kJKdZowa3GkXsxQaBBFncDp7w4w2NeZ4HQ5d9Pt7t4djStKjJ",
  "key5": "vbmaGKw29BzsfAyk6Cj7hvoRWyH1ue7VCpPzMZqjbZGgSqtRUKEgoXniyB7sbYiT9XnASe1meXUvE9ccyR86GWH",
  "key6": "3ruxPe2c3HUiuALDfsVc9hrukYakoNSd9TUu6U4FNq4FppHBxxd8C4E78JJV6KZrWfZPSkrA2sx7sdULxZZpPirv",
  "key7": "35DuwB6yRYVuaEB8X3TmhQNPspQ5GdgXLgRv5eMRQyzxAA6SJ2aAhAUmbbi1GsBcmYiT2Xqiupc3dgYByHa6niZ",
  "key8": "4DPL9Gf3ZHQ8P158ckDzkuMsXAYmuqhfhCFqPVJkjSNzXtDyqffh8yBi4f8tagttgFFL3pQh44P7dZWEFh992YUa",
  "key9": "5J6eBiYLm2Fb6hLqG9qENEBxqBZFbBz85vpMo2cGEiLbqjtCQHAMjCbZknXUBX2NHqHEymAAQJF6oRt4tLXyqNdF",
  "key10": "5mr8G4jaUtuFwAeq9LdeLrVzyyM3uqMaJ49RUnGm4Zt5b1TMzW3wGqgiFRAZzBhjQ3Do35v7dncymBh3kRawQKGh",
  "key11": "5ZD1QHT1vAzbfbufU997wG7k5Uw5zLxBi2N7AYJcAjJbjsvpofxVmJ1bpF8RkQLScLjTWgy9rxjibVhh4UkhdeRx",
  "key12": "4Cncdm2i7dUV9F2VkAdDr4x3oXsccLWZAzA9Kkw3ec737JUwitpykH5VTJVeZe7ZHbJQzCS68A4xxeA8SsCgnP1j",
  "key13": "4znZzmBJ9b6a79vskJdrDmpyxRiQ5y5HquwseGGG31frHVDYVsjgkme3BRZAp7Awwj3jYTEDZRwzX1d1a3JCQVdj",
  "key14": "46yVQFp7Xg4Z3Vg86U815XHMjtBEKSWJQ7iQL9fVD3iv3Bzct7RUyp7JqtrPut2CnQB58pTT6RmtseyyDH2fAckd",
  "key15": "4fFpXCyybPJjCTebwjFjEUc3Sgmxcip4KL8TGfvQ35dTQDWUNxmdniHGQDGffo3QPsvU6FCRJKDZpFmaUDhwXipN",
  "key16": "5kgVyzR4e9MZm6gNfF6fTT8aWAW7U8GKAsAq7hNAXFcceSeE5sm64PkwALovSNxNvzLWdmkKtRcVsesGYyCsK5Z3",
  "key17": "5LMRaYDrtcVoZ5WY63neFPMAe179pDoafFGvuR3xu5qeEYf9HLgvrgzqesVXmK6ExYUSnSAeyFcLFcUTgFpYGwZ",
  "key18": "5nUjPnEuvWwTWXAZ4Fch2XahXRJVpcYJrBtZt4snW3E1DW2SVULrhDi8d2MKEPUM8FraW9NxRsEma6LLjJ4NHqVh",
  "key19": "3jFGNEuWg1PkhtMDk2YxSMrDpRxTuq8UYsgahsBJVMwibsVqq4Gjg2HaiSSQTo5Hzq74jpK9Ed5koUMUWxMYRccB",
  "key20": "UaKPvkerZEw63vFPpXkCG4m1A8uHmoVcHTBZ7ipC1xkjWkGXQuEhVtkC9b1tfAMPeKbDSzV5z7TKUp83f9mGwBL",
  "key21": "4pzseyW6w5jLTVvNaW7bciU2jNSfWvfp2PupHoqQHS1zJJUUw3BuRjQEVsANRP39fUym5u4w5TRknq7eFzH8uKRf",
  "key22": "4L5g9yGxMSowNuSz8K3PRxM7ntfEiPG9jyRe23weAY3kEXpTFbLYzaysghqp1aZRKFvZq4HhC5FJmhPJXYg2R5RY",
  "key23": "3ZTb36EFRV1wxi7E82eFgnfxwyoPeJ4TrhTZKTniALJn7ckuJsXcKhwPJNbVbSjjna7LDjLnwwSE96CKkL73UuU9",
  "key24": "2Rj84hYn9Y8reZHpLvHMFQXC1rXFrGvqtXds1zKC4tkqSGeVZKg1pMJgsMfB3nq5y67h9BZp4nLufun14wyAZ8PR",
  "key25": "4t8HzbokFoyRrtSbZ3eAsVi4YzopBpFFiYodHiuyXRVxLqMLKa9rJfbuWzN5uqPjRjjqxd2Se6BUYfDidPtN3Cin",
  "key26": "3d5ye2zN9s8vRQYFcjPrK663wMVEDTLxiVLfT7cL8vhwdvM9c3y9QjCp18piEDm9PJurCrR2xnKVq1KLmfM9RCpe",
  "key27": "cXHAW5jTM1oT6LFEvcEk2sR7p63JPEZi6kX52RqQhcjcAiJevFz2QHH8cXyDvnMckKtydt9ismJh3brcrojvRJ7",
  "key28": "3JrzBEkY16HLskUW5Hfmv2aURHU7iDTPYs7oQjnUNx4cZj9qUSj9KZTQmqBxpJpMKGkvYWdUXwQ2pam1oyDsL6gH",
  "key29": "5wJu2mF2DZJzbP4RtvAE7gh531HNkEUkPbwh49gkwchMFDAegLGxovdtmZAfAXZegaDQtGmvQe9ptA8oQGUBsrTW",
  "key30": "3opHo2d8sWAycZDdMNft8YKiXKYengdsPCD4bhD3D8kRtbn4CQFjGmnxv5oQaE8hmhWRbicqoRzgYtZ9KvHATVGA",
  "key31": "2um6tGWJjdn85fZtyePDPSLw7TrzhKLVHUUcpNkprecFzXjAML9UaTaYFjGBUxozbokWVYeM7fi1JtQRnoGu8sUq",
  "key32": "2jQj8ASsGgUxhv6PXmEVnZoKfSt8V8e3Zug5qsTQ5xEtaFZUYeiUMHk8D9bvn1kafasXYAzWsWitaSn8dm1GLi8N",
  "key33": "49ge3KUNpWMRFrnNLqKGDn9fsZmvfk75Sgy39jFgg2qRGn6hrnp8t3t7Le4AYS9QLLDuTQdT1x7HRM8QQyDzSLMW",
  "key34": "5BDHarGgCcupHM71pnHz4X4HKWe66Mf7hgk4ubzh7yim3exbhRDvQSQjYdtRWi7DiPCZSXWA7LjpyaTcyMPhr8E9",
  "key35": "45zLFSjEt9nwY9gmbvRNnahFR8FsSgtSo5xUgPY6GtJEv3LhvXA1oN4T8r4jBPeAb5XiABPnTRSGNs1yBKgKjPTD",
  "key36": "3bXvFDRcduuyS9Hm6D9pEJX58Ukcw9fTzjdQC2FfNs24zU1Jx9cyQmXDTS29S8MTZxnT4stMb8duKdJg4MKLZAC5",
  "key37": "54oMqEvNGQe8hDoncqgrn1kzLp3wTkRTP6LHSyaHiQ1w1VCnCQUxYxosivmDS7U2jRTjCoDiPfeRLXx4KNifYZUB",
  "key38": "465W52SVJShih2EaDfYutqQEMgQrKAe1BWGyD9o7HpGUxx3R7u4bQfdcRP6rGF3tchEzXbjyY36Q4MKfpSHETDaq"
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

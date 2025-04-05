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
    "5Zp9jCX1BbdWKiuc97dKJKycSwgkWJ4UheJNZ6ArDatkjwZkYPt8ed3oijk6nGjr8P22i6Mk8bZ7zwHjzQoEFhcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQz5VrvBVC8BZ4u8zt8dux71XPktTgwQPHaoqzMz8wT8v2p4TSjrrS8pQEXYeh8x5ZUxTE8RjjS5bk8i5V1YWjy",
  "key1": "3gZ22TQ5M3RZk12ApDgnj64Q7MbWs7fyLqTehKWMuTVYHHi48NbbT9P2oiPBiGrGLZVDJvk8aK4383e67EQrhLX9",
  "key2": "3GM9vmu6duesDzvz8p9mWGdP6fxWMSe1UxVAtxzENty92PZpDuCzWSfdkt85Nfww8vqe9kMEzBu3t2isiyk8ZYx6",
  "key3": "22HAtVeieatWkCK5iE81Aum9F21GovtcZwaKEJQFKyeNGTBV99SDVKh3DesGqkTKqDnhhWoJ38i1JkAE8CJQNDhD",
  "key4": "2VYNjfHPpmRHFh1kF6ZNFm3epk27EPEeAVg7gYmz14sqtam3GLQW8vP5gJ4peYmR7Ubqxh7dobDjYHJMEChgag2e",
  "key5": "5tFG8sc9foEYizbYsumtSXdiQVfNuYqEZJeroSsCVkcnFEaKELuJK5wijHNxXvayXK6c3bQ9kvq7PyMPgrasz2EP",
  "key6": "31w6ZNX3NqKeGfs4pq9Qs2nwGpTbM28myvhq6r8tMxF2bbu4TdU42RK1iYNZyxSTCdFCL9RiBNu9fZeSmDKognVi",
  "key7": "2kW8ZXw7LMagiHDgtdX3rpkkNRS3pabY6fhXknEBBGz9w3H4CkbAJinr8mg67tzU1hd2SdXuaT5sr4RQWrReSHJu",
  "key8": "2FRtaGAGMr7Ye3oWMr3cHv1Cu8mVDo7PmArfhco8CoAbHZFH8EDLkiw5NTuohUrzAMPe5PoiobhzQaNkGDzMBkVN",
  "key9": "359NZC5Nn2odxa4hjzCmdEtnq7eL2WjmoVGQqhLjkUBaXa2rDdTvbSWn4nF5csjjhktxjq1AVsfcC7eUWcERCi5k",
  "key10": "2ipqpYyiLsY4Jo78eUCa1WWjCjmS6DvFmzssikkuZSGkBotr1GWMNHoVJdnZD4TfsryV5b9ax3zMUzy9zQ2W8yxC",
  "key11": "2r2EvcCMXS5U8rKqRqRyMA4LRbAFvTRfYTXv3PN9cbgRZdkshq3c6JymUAYDWh939AbqiAiEmVnem27JNNCxDghr",
  "key12": "5xR2U5TUARTXgsrgnE94wMHqJPWT9UCMXKgFAXsJ1k9s18crxR4SpTVftvJdwFEPDZujiE71JYAbTkBJPxi9aFjg",
  "key13": "S76n3CSak4BpCHCjzjc21wWSfdotGx7qV1unJJue31JrTjsLakhpas4Hh1iMbqYTqhhg6G8A6ELWuv8SzKB6efW",
  "key14": "3Psv8TsiNrtvaZk9j97HbFQmta34s67AuvkUFNCzfvGjNY7e1V2XNhw8v2D3wd6CEY534aPb63eeNcmQZrBrC5eM",
  "key15": "2cN1jHMNrRCu4UMUgMdxAQDQDGJp2unAZYhCjZ8TTP4WQ9U3PBggMxKSvXDPhMx1dxiRQbe559sdQELvJGkT5rEH",
  "key16": "EdN6bpB2TGXVrChaBD5WepM1gLHxmHoCXFk6hD7549DkqajTrKkecZsEi163XcCaTtdmdfRFEMNLq4fzUHogd2t",
  "key17": "cUGrRK3MhwrVhkpw297g398zquD2yHhABnEfrEghycaNFmvRyMt5ZJFTPWSegnJsbVYukSjppzceXVJnhgmo5zx",
  "key18": "4hL5wihe76v4vfnffj8Bbw6HSg693rNqDc2D36GC86fgmcpUUXhpoyBhTUxHL2eMcfmgpgD7QZxykivAM8kodG3k",
  "key19": "3AMJSYySYCQPFhHrNNPwiV6cV3GcBknxF9HX4Y8xkA5mj1NqkJJkjDtCb1biPV5RBTKXpR2j9ZgmFjLgqMphYzh1",
  "key20": "3MTS4Tbg8ZFvydwXJmXLmhWF4xwZYuijESPNAX1tgVdwFt8Tqo2mdfBshVvaHaqArCzkHKBzdxL2m4z1SGKCGjen",
  "key21": "4Z3RDsvdHfEDLRCRhWz8B17L6YkMoVxYCqA9F1837XkJGc9EZc7NCAjf8FA8xxMJ8iCE97RCtfhTe8AeaijqN1oC",
  "key22": "31a22jQXEGaqhXqpPES3RQkzZYicjPjspw9S8gDE49zrizbsP71nix7TLaTFTxwjhmzh3m98A9DKkFh5bqLZiWkT",
  "key23": "37QJJtwDES4JejpUgzqRNMv31vs465jkZ8SAnQYrY73cfX7vYjaejS8MDoz6bK1DBtFsByLfAJUj4JryNsTcww8u",
  "key24": "2zKUxmw1fKJso9j2Yx7nFyRYki5HgvD4P3XC1iaRNKoZX3Zr1SsLQNtfrPVfk634c2tG48N3THsWa6HBd8KWKc7E",
  "key25": "3trcdmw9JTvkJzBfV4iij8H3PNVi1T3pKFSvpMqCbRMtjRDusercGyNsLdYQ9ZJ9RrEvUqUyxRZMvZi6dZzK34Jx",
  "key26": "4ci774PVNMpYKjuyGZ63rMzArCh9ASA5oJDn1jCP7yB6qqwrGbb3CG4Ca26dQhdYEkJSrTRV7TvrcZvJVXoxw7gd",
  "key27": "x1QB4xB7x3VM6hf9an3QWkY8L3ue5qSoghdv6mKmVeexei1uCB78N5L2kqbfHPe6NYUXTRZsXtzBkKRLhC1VKuk",
  "key28": "5pbjTHPsZps4hybASSEre6puHkVBvAyitD3YX9zroGSAHkDd4itAFLpzmb6U3jiYnsD5DNwZU2H6c3SstTUymQTw",
  "key29": "21sr8qPryt5qosb2W2FA5rzaDe7o5VWo1hM1Zc4DZnxk61gtkjfH9HV2KyvcCphNx4h9sh6cLbKAZEqgGa6p1tws",
  "key30": "5CSaTh7afqazZyJeL3KZNPtZfRwQA4WBZYTNS9JJcqafdnDK9iN6BevtPyYRgkgEvn4wArXKaqJMDNVptXRVYCKi",
  "key31": "2beCyBAsGEDoEcZ2VsMwJYnwDwoMrH92ikULL7iwTW2E1PL5Gv2bmpWTJFsTp5wQsk7S2X3uTNHsevTe3xCnY25q",
  "key32": "2QE1RbzvRD5Kn9rqj7t1yf4uCqMVeGTJZwcSiiw8syDu5h8Q6XQJw4vrzDz2bhae53KB8SzXrqGd9sweimnqHpRJ",
  "key33": "4tA3q9vzXrXHCh2aqfu38qSdJu8XVYWLD7uXR7h5RpHJ6gbSaA2HNfTPLcTxJ91oG2WMsvv21eWDCa4BNg7npKjE",
  "key34": "2yBphjF4F7xkSfaJtvUrTDrqWze8eXzMpj34HEZPquUStDngd8kcWBcjNYNDMupKNemywb1kqMorNCmscdzbFikh",
  "key35": "2biY1fqy3U4Rt5vM8GWiZViH3HaiKVbcN1WStL2MiZU5LkUdZkAnfoAxYHvx5rc5NuKujn6KpnkFjCNi3yJS8BgQ",
  "key36": "4zyFWkLH7xDYg45BCc1ZvN86J8fiMwqfSRoMR7tyqYZBsc6zpYDUzSvQFTcDdDwzuPVGyzBLap8UXFJ85gGiR1rE",
  "key37": "4CdrCQe8p3s2UybpEgNFTSikPEtDJoSQZtEQohzDrGhgFn7KEc9tuEcsxw4SKmbaq1rL8P4NjoS7FNHeiXt6hvbD",
  "key38": "25mQQgLGp8sanSBowxuLcauBxZfKA9GecXHgiVRwqyPHYABUL9qUGugz5kqSzQFex2Q2jWFNLfuy4YXnUxuSktbk",
  "key39": "46roWAawLDxFPqvqKtVDYaMva1wEJUvJDez1zvDF9iio5Gab1cecraT9ofLVK6viBvUV2quYCgDCED93q9qaEr4L",
  "key40": "5okzHZ1KYfuss6io2eJBQoYzhHUeYAW9ZaeWNnUtHzeiznerKhhy6vF6Uokx1NTi2tEEunqMUSH44cm7jexV4o8g",
  "key41": "VGFrnjWwfoMSCptkCHDHB73FCjfor3StJqgNeMaF1hD25wJ9vkJR5g3RsvaN4ekvqY4EAnvyChsLRnNyHBXeZPx",
  "key42": "5TrU4XmHMN4u1PmnV1nGNyLsmwkeqP3F4N21wprAo5tj7yDRbJbqjK7SyTtwnJETwAw6bYmbyfEHxN1DgR3MXNH9"
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

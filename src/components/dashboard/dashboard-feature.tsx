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
    "XyL7zegRPPSe3g7e3593yofp1AobGpLQ72EXx7Qev3uwf77PGrtrV1RsSctRTicFD13oCDRLb3ZmpzGnygmgyec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aK2ZiusMnjkbppf8PzQuRW9C1NjXQb4zxsPD8W4fQjLm2A27exD9M64mNLKfH2jdWeUf8xYtkTF2GCcCfMvPwsW",
  "key1": "2TZUCH3Cazx4AVnCpgaWPry1bn9Udc5GRGQqxLYuNnpd4DSB17nheFjLDNqgATADcJLR8uEwKMZ9nPfn2PDLjKFB",
  "key2": "32PWjeBkqBvcBeiWGoyRmL9SgCJ31znAiCEWK7TbJv27xeXf8Kzreco3zZ8EXpf4qNeBK159uWbU2XX6tQFhFPBE",
  "key3": "3pYYv4b7rprH5TAX3ANjtmUQ27Tfvv2KagqMr2Gxevixs79oXmnF41M4SpuA4k43DPsp6wgouMxX9taTzKAp7WvN",
  "key4": "5oPbdzDrsuA8WJmqo3qsDWrRxeajwT3Cu8ceYxKCTT1jQ7nsxefbMNtxxcwfCbcRPRnT1aXeVxbN3JdktgZAnctL",
  "key5": "5wVwfXsDZ7ffR87BtAvBpP7x6dxfj6S7tTQh4uCb35ofWWQvVkccUkxyUGHjPKS47k7DpM2Ppe4McwPpPrGahhwr",
  "key6": "4XzZBnpDbQzTz8C1yVN97aSykv6Xy2Dic3fYgNAgdMWrxQgQkyQRgRVW8pb1fRh7ESF39UWFmizWRGBTW7G1zDzo",
  "key7": "yuWbbgiUFL8gwg3AMKYoz2TtMLZjK7gv5CMCsk9TEht3Abr1AecGLaAKs5jkyZJvhULtMuDKeBBgANuvsJRpVpN",
  "key8": "eSH5iEbNv2kgnT6NkxZT7qRPKU7UTEWT9M5cpkwvpoFbVynYPR2DirgGeBuAkaaXhKn5ZXw4BvvtSgvf3RVERJi",
  "key9": "2kBcdRfs8a6xNTAuy4daoPoGkMXU7GMMqxwyfijyq3f4F8LZ7TWLAodq5TBtEskBEFp2mYJaz4gy6cWFMFHawJ4R",
  "key10": "3y4VGcvaJAwV5cFXp88R2iBjbB7kZEEbj4T5Qvj21iBhYJr8SKjrdv4GyhSryzxiUgjJvaqsziBhBJ4tMuwF194J",
  "key11": "8tPnRKh8hRQAJzyKAV22ZSAdRGfKx7DfbHNEDhNF3nLYb8hoQqaRWt4yZaij5MiMJ3dUdGxcRB24UArYH71csm5",
  "key12": "3u1bpRWr2Ks2BDVxZL1dZa54GuXTR5gqhBzGe17a1XvNmHqbV5AC23c71Zm5CWHpjpcadqUrihsreWot3h9o9Yer",
  "key13": "3e6rZMyTZJyuJ8vMmvxKkgN8eXrmXpRBn1VqWDhHYYRoENrz6MLocfDHVUFgwG9ovNT178Q3q2y6VaR92UghxJm6",
  "key14": "363cU2JfpsEo9KYk5SnjarijBUs1JmnkXkexp6wNDKMJnnutyBC1EGGDDxVTHYEB4nThFort1vxqmQ2bJPb2hLky",
  "key15": "29NfjwdeE28xGfMGtfcqPhZUPHLrJifJM8UxSEifhf8rkpitn5DfE2BYqGbPobe8TT8kHGLDeF76VWVgBLwZuokd",
  "key16": "5G1NvZus86awqTreuv74tnDrzdpX7HamuhUExYaxNpoiwc5jUJpmuJJnJbL6hvKDx71G2QDounv6pcTscVnkNN72",
  "key17": "3RnQypXXTJFVFCMW17sij9PhcRECZ5t9H3zHXAi4geehiKjE1LHoXMBvPa4ZuFU49p76pgKPYxDHGY6oytyKbtvE",
  "key18": "62LU2oYNcsSHX4E9mQJzmM82JtnXGztiFHH6qZwHJFG37K9EeVx1BEZkBzfvN5CTPo1o5Zg7dHibpjzBji6ajVqU",
  "key19": "2YqJUyfgofcp2iMDoybyjcfg8paBzA3RPT8C4szFfEDhTzXZLWdoyYaGQFPtkVUtexQfqHLcYV2x9wtgTy6kYsbA",
  "key20": "3iTT4xCSrexVoMLUW4ApdgUQcfNUBeueWUU4KCRWNqSy3gJVW32LzoKhcqYdz8jiyQf2V6FNTFF33SFnWqT9tJR9",
  "key21": "4N3uUUTYRMNK7UXzsZnt9bR6zVrHJULEFR5zA8F3GqBGmiLABBwogv1LYijT499m8cFGgnvqkCye6iQTTp1sr7yz",
  "key22": "2EjMXk8DfDPtiLM8CYHCoCMP8SiH9VjDiXW39zE8biwbfdggkgjgyAfCKQcdjJ19w8parQtTifRUVbqYjTihEfQR",
  "key23": "2Zn2AtRaiJ53sBB7CDfLDJ9FcM1A58BxBvuwZxN3SyGX8dEE2k4abpzcj8wgqFUPUETz9vCXSEMgERowsGcUTUWX",
  "key24": "3XQ87Xae7kdPoWLKMRBFGy2vDrWu3VRe3BehFtoUJvKsZF582Gkd45EhsMyN8pkhsktrT2d78pufGMV2imJp57hE",
  "key25": "4tJhzehRqUXsHQHT9ZH2pa4dVeUHxabUxqNXVZTgrYN7vtghpup8ZA1hcJCNxLs7rLNGBuMkyedUKo7ysPSz9LMr",
  "key26": "2k3UXbKWm4TWCxrny9LGqzxjU6bwcPRaaaviQQdWx9rQBAaxBKhY3dCY3UjxmE9gjwnBu6K2VnrSuBuGkhzopdo6",
  "key27": "bPszgh6Tr2hK7Po27GcQbVrTVjCkgDzua53A5w3dYn9HX7VqsZ9y6Da9NPoSYKcoxjn6VpAeHWNAUod3FBgenEz",
  "key28": "52ftfMyGqgUfwxxkwGF4FALVBhsx6xVzFs1QWKmgxV4xeBD7cMZfC12Dqa96tTitz8QEBwchxsuHkSJGShnrFv9r",
  "key29": "5JPmdnJYDSEdgEQGyLmM9svYzpXEhiPQwhDgnu11cYjmoU8riLbkTN3uSv2AEHMsZg7VHVzB5gJPVQdXm8E3oiaN",
  "key30": "KvLudERTppQXTL1hP4YckuvTECBqJKQAwzXJqoav6XFE9q5oZkghRkyP8cz7xSQqsNe1h7uE5D8fJTA5YJu2xnH",
  "key31": "64SNAYHCDufFpBiodNV3mHGeCknsY77tsGVgokm8wey98eqAoRXehgV9vpaprN7999pq98Zawki5ydxZgDx4Qkym",
  "key32": "4aUk6KUemQSMuFZAFsQcuJ3uE7Aa5mbaC9yFoG2rAGkBmMjSqpxEe7m3hi58zRR2QxWF675n6KFcMLP9rmVs6Ayq",
  "key33": "4y83DeCNSpqPA9jNA2aBCmaNN8ct2aUn6bqYSNMYvAQ737KwjhrmEHNQPXiyyn6dqG2Rb5fddX3RhuPUVYuCWdmE",
  "key34": "5Km3eiWvvuN8fZnDs28GmjiRcdaGyshL5JuXWcMxU6dzWZXjWh2f3fprgG4dryYMBFGCEibLRcpYzW58oqY1gAF4",
  "key35": "NcQAbZqdKGX3TadyoDAXdN2QuzkB8yDPNk9MQn8eH9j5iQM6RLrq8osqJxpNGWdpJLLXn7iXszqdNxTzHLZQB9d",
  "key36": "4Sa5DLiwnjgfrXhhYbGzNuegL5R4rT7wsiUYsbuSjzfvtuQxdLK56Fr3QHqfwmczx5p85RaeU6kVF71Bh4qn8u3E",
  "key37": "4q15ZmTKA6MxdShxqMraS8bVkHMeuLeXGAZEvtgZB33jKtfyLVRdAKzwZVPNSkEx4Dj2K5n8bgT11Jk7zkc5yjXR",
  "key38": "5fQ6nNcUjUNkRSkxHYpgsTtmktk8s4jZpuA7pNkHqVGA5gvYbVgDnRwQg3sVhuS73Ed1UHyb7QJV4c9chketFqJF",
  "key39": "4jr66djk3pq7t2ArLHuHLiPsC4TQSiL6oUuZ4qWfdfi9QjKqu9ZedEQW7wmrydLmCHLeRZiLkHETs2ofaYBEebqq",
  "key40": "3VFCBZN5PwokQL3BYwhAiFw3EbqvXoQMgMPZuqYNNJwzhxL833o6p9SbpEZbYAKYMxyYmtU8RsuJDRwA5xt5WzN9",
  "key41": "3r8rC7i3d3vKpD6wrWT3zom3mXoJqmRMbWvYmNuMHM2hSYFwNSMB5cuqjfmgxrB6FvMRj9KxhHVwto2GcqN8UK7B",
  "key42": "p6c62RcTPeRCAPyr9BMkrbiY5wCLmaCh7icBmhiMmN37anYDrZ1Xmz11xzPL9VTKDqHRiPvvnLSiC6EtL4enxXL",
  "key43": "44VHpu6m6NhX9ijqbRBTmqZACLb8XUVKG6pvaUm4H6hWb3GFpyqZk3Tj2qWjhA9MM4fyNJnYy7b3Zcuaarq9SqjR",
  "key44": "5rDN45fhHBpEAsrZR83W6UTMru2MrbbXSsKPeGhdC72uoF9yVBAPqYzazCL11xzCQX9bT6ouHadFLhzf5SfsTwDP",
  "key45": "2y2N1mPxy8vNfEyhG1H1zxEqciR1gtsyrmRB5uoWBqAXNZYTU1Vquj9HGgdvEHoBD32mqp4d8xNAiRdPDLzf7A9n",
  "key46": "4MD4phx5PJ9E54j7K8cNmBPDi5EdSBi6yphdLUTXBFtMjoexVnfmRog2zivCSeH2gHxNdD3egCNMUjgjbF5R9zWq",
  "key47": "5gfKDQcM1B9XVRtrNcP6A4exJFrXeVZYric1kzHVWVY3WUovmjDiqXeSfBDfNP6JMzJ4xUtJp2fApyK6HpiGiHBF",
  "key48": "2w8mpSbiPkqTmLsEP98TrzDcofZL248D4i6QZ6LrMiwrPxW2hi5fW2YWUYEztcaDnWBxYa2LaGP3SCLDGGhWLKhp"
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

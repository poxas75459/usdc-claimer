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
    "3EyYGp91k3wbP7kkkF85PPHD7ApEX2miBxL2bmpGBarGWkbmP6MA9AeraUVKehPQxvbWVuvohWJ4Y38hTq3JExzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSF2jh3sJCcBomM7ARfEVST8kKbUDzYchSN7GgwwHAVnR7vEoGoU92raXARMfDdLvpHBfwY63swPBt2tf8KLXJb",
  "key1": "67T7N5dNt6B4eFEPLQ7rSqv3mKZpuzkZhpPV9jgNwD158hW9y1HsbZ2LDXuVHmSJZNqYaAYCTWc7FgQ3QkCBGJxs",
  "key2": "61d4ruhMUjfq1C4rqPAbTh6pyDhWApWHUMSGPxiNtScT9tfzktb1UxnwHfBPQ35LhQTur8uP6dPvNKBHpVL6uWpV",
  "key3": "TrUZbUG7W6bMHPw1aApgyUf5E5zi4PEEnBpSKj49CDau83hMDduEe6hGVci2zHfwP88PsBqknXa1NngXA3vVWMf",
  "key4": "5zuBEKFC5vgjo3vfwz9vZsvyye6Mn3ifqM4APh4ktDupvPH3fTs7zvU2peqKSixCEny8GabDywHpDCPAUT9Amx5E",
  "key5": "5fEGfUpBorQanskD6MAgxbfQDr64otK1vtx46gowbKkvrk8j2Gt7RVXAxt1rwd6Lj6Vy3fRRxBCemXqRoAXET2pw",
  "key6": "5wWqzcJ9EyEnM3qUtWGZHdt1YinftETn1KMdGwcYGy4ogwe8QKWCYN5ShPrPxoqkbjzDEfCT3FvmgdR1i17JEDKZ",
  "key7": "46QdR332KUG7eXVyWhSM5gPjPoPpdkHgX6emmiB5gHzLsgPEGrqiPJtNxoh1JxXJBzeSQwqpvyz9VNw6G4QCYPfh",
  "key8": "3mhtc14Xhh3QL6V7Nk9RfeiHPxCcHS1eYpSPoULwBs9j7TDfbwH85gSez6cZCDDvugyKy8KzTWbiPWgGFX9hoRRc",
  "key9": "3usLXFqq2hz6yiYSRzquA8gAwQecTgRhvV44dXKHMEtrNeWnykKzjAkBhXoYkCyx5bJo7hrAapqofu2N3DaZWKsJ",
  "key10": "2jo2EzjsdD9zR5SnkNfVyunPeGkhwmHApyCSTrKXyeAqMN29P1bJHXEGVzxQdRAP3vuMhJsfhMuynETDoMd7gCRT",
  "key11": "VLun5QKuiHFqgqrbz4pKFJMS49Lw8RhMreMPH3dqZt1uLV2VE8xSsT1eNPm3kjeRb5mj8hEpf5TbHkFaijyJCay",
  "key12": "5Cr13gMuW8HvxRE3VVTXQDux83LL4KdmzbGKxF8AZQCKKZfRgE51uZBpZciBNQCdYo7sLbwjbipCPbXTap2ZoGiG",
  "key13": "58mo3gxB6kRth3brnZ9HKHjtpJSobw2xrgHVCrNUhjKiAc4NhXF2Fiz8JbFFd1avqddPcXzXLtthdMLy7d2bCRkA",
  "key14": "aMPP8dDKK78dF5e3GqbSmpaZnHN5KXixtEVdLUAtaPcet9ZvL3YyEE46nxzQTYNn1B9feRf6GK8pHBxuoMMRCKG",
  "key15": "45PozeczkUjLgsP66Ei92DgkFHJae7626U6a49CGZBPvzcxP3qK3yeumYBdXDbFBsaBx2HVLvCG5mpv17cc43WQ3",
  "key16": "5xNpdDm9XGbzzH3sc9BMzoVWzj3axJ6Nv4SNcWcrbAC6RvyDhBQDiLwEcwybbukMd6d2r1hxBHH4JMvT6vtxJfFp",
  "key17": "25HMPVqvQLkatYGNRCuHtz5u81aFNy71QHTQE3WhoEfWmSfbmfCAtcqpyN8SpDgchw6kpLhFUHVPSgRxKrw38apv",
  "key18": "23Jxcce46PWnHEi8ujmQhrZHTnKjqJQRZaHFK83J7kkfSXWueh8WfiuvsRtm2VLh7nPfhy64B74iyoV8RLG34TTq",
  "key19": "otJRXb5LcQSE6ihqiqX75cMVymBCJtUtZ9habvTE8UCAmeAoqebz36DUbe6Bkp4mmasraKBwp2rbmkvjL1vQvPM",
  "key20": "4LuT95PF3VbAPvegqtoanFVvQsWV6pC5WJQy1eiZyubyuRq3WQKJpVfTJyGRjPL8yfNX2YJiQagWmzznfAbeadk",
  "key21": "2RUtAr3AGRgpbCjjsKJHUaPHB3qc37rcD4tPTUKe4Y2JLVJ7apjekrgsqpn26DVW3t8TBgFgmwYKzLZBQRm58aaK",
  "key22": "1rMQA7JBuLGemekeL1P3w7h5tQE5gr2mRuauRUyuLkZgEqH67JeunfhY2tFx7bUtHz8oemfnex6ehJL9hbqi8Vt",
  "key23": "4C8zw9j5ASyvotQaUrXMDVUVXUTumrTkr576CniT9WywcMReK9vjuWkvaDrT5WAmkY3i7sJvvRawptAWUsAdXX4b",
  "key24": "25VmiNvtCrkwF19WALiqJp8ut1fsctWi8ormFEpuYofCk97Zdm6DGDbWVfspxuWhVUZ1K3eCbKCkym4XkP483k2S",
  "key25": "2a6ZF6zZdRxFMtuPbWPtP6xdV9xaoBqs4THXWBTJC5bsXZDL5vdUrMMXTSFnDXy8syxxvJTbTfFn46a8MCt1Z35W",
  "key26": "3GSqdQuSVsV6hzTuEHW8cwVEApukSwSAEz3qmELNGDqPUrUTDvZjB4XYfHTta3tPagHxSSBFAvZ5NFvZTkQNqTbZ",
  "key27": "4C2UbzUm7WgKmdfcq5nTNS59q8eTK7t6SjhFMrHoUi7P9aBNTNfhv6S2rAJEneV8gJ1Mh5sm6FqykanRUB5YLpyw",
  "key28": "3X4RCBS6GTAPPTZB5Gfx5re2suciA4jpZnKMU94LZbWfkuCsHi7JBUZ9S4H7SPTsKmmUSEpt1JJkgyY7JRBdJUc4",
  "key29": "5vEQkNkoz31pQtT4WV889QYqqNJNPnT6w4gyUDT7McpG4TzMKZHcpdk5xJRM3snsrFjrKir2seGmMGVu5CwfCCET",
  "key30": "4NZnjUJmjAUHJcpiTbsf2AgyGKX35bm74mXnWwhRBA5NBxDShw24u937rDV8QXSTkFmg4Z1EXzo5NjwBU3adJJDF",
  "key31": "FHk2AY6ig2vgPTGXCReTta1FtGeRCnCrYndQoYu1Ws6X3d76SSYi441oVhC7UtHrZhvmgfyQcwCWNWNzqka1t2A",
  "key32": "3AJcVeKmeXkjNJe3AN4vce5LRaqNu26u3nBuGNqivCptCwUmut6B4YrBVoTqLA7F9TGXKYcfmFxJ4XQE54p4UZXX",
  "key33": "2epar72aaKGccnoXEQnjmrVentuPgwnZSZtFM9mGYqF2k7krAa3oRSj3Q4G2u6uiSEPgoFQnuyktmKVJonYKKzsc",
  "key34": "2UrhR7fpmZ4wEUaQ8vuojwbMiVHa81HfQk86jF91jBaPEdQQhA94ndntrmQ89hkBNTYAGMFntskUXR72H6nvu1Rs",
  "key35": "5TK2JiMhF1SQPLNsrLxfLQ1oZUteNXDuVZSo3YbGTiFxhwQJpBmT59V3pPx8h1AHi8oHAagF2REfRrUdq87bHNCM",
  "key36": "3Q86EeJdmjjNetY9LNNpg9hc2HfvnxAyVEdBnbd7pvd1pPmWJcAPeZw5BK31gzAqCjenHjDuYzf2Vtg6NqvaZwSU",
  "key37": "2Uyb6Xt7bcvfkKtTugWeZddx5zjL6Ktj4xyMrn6pwegw9jPU4LvazFLivESNfutGzMhYVNPzsbQmZb5jJeyYBbEL",
  "key38": "55KmVy9GbodEzbptxZELhTmx1YxxUmQmcHGeCnp1k1gpk9kcvoErvNS4foLticRHXT8Xik7u3ZefnEciNdpUjwqw",
  "key39": "5eJX1QixdKQjZoNt1swR4m7Ez9Vaa7CqVHsXKzkvy7cykxTrrPiN7BsyW1iRYcvj53qz2KdC22RZxzaqviHeoFC2",
  "key40": "4gugBEdbWG86o2VKJtZmgeV8KoGUPyKKBeJUt7SGMUqTipMEX7wGHTmveu4xVpbzDeNn9Jnsn6MQSDqTnj2oeDmt",
  "key41": "31HEH5uPh5AiJVUbkCnMY3FGVfehKVidnsYgnBXJ6n4ae4HJU5WZZ1eju5gQPcHwQ98kofa3EwoyXR6jPnjXU7iR",
  "key42": "2WRVSjFhoGo2QoT2Xv6ZPETdMR4GUNDHcQTkPELJJehT7UvmZp3W2fwAta3hVYEN348q8fQn5F4zFBDXGp8iYqAx"
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

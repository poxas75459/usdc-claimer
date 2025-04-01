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
    "3wx9Bk4fmUnwHWButjQn2uKYdg3aRZu2kPiSjzU2vXSGdNCyYT1WB5ZUWQeLKkPFGf1X4TPw3W5Yx7Gw9UWhrGoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a847KWbY8HRGoHjUznxvYbaFkpXbG93FBVtLK2P6R4dHFjPw32VqYoYuBC1EBRdHHQiyAtZmtQxN4jaM4R9RWua",
  "key1": "3mKdGK7G3iYYhttZhS6twNpSqiPswkhTsHs9acnS4Uaj5X2bxK4pmK3dvczu9u1ioNVbudLeMWwKSbeEDC5YsxgS",
  "key2": "2HTCEMwpTuxrnz6s9uhcoPqoAT97GHko2Etw2apyRNj3PzDPx6huxU1WXG6wgroNeK1TCAvpgc3izZ6Sn6rfu6yC",
  "key3": "56oYiw1juFJMZ6sAmNv1oM3PnsH1NREnzYaCvEh6GqhgZ579hxqLNwmj5dcenzxKLcsk3sTFyHs2riehCYDoESNi",
  "key4": "4n8zVLp5RxNYvn2AZZfXD4PmRTaBRm2ox4mHDRPnQDTDFZDXuRd8HcRnNSUu71QR4FukDSLhp2AeHvYzdbmn6z4t",
  "key5": "4TMkUeE32D7JpYpFphfWEnwRec3qHJeLSsz2F3SaMGKnRyxMQkDVE7BQ8vqvr77tipiiJ26rBDMqpH5aBtf4pSqx",
  "key6": "3vhGVzhaUS3XtxJxUDz6A6LyadmuM3JX33h5gEyC4D3fiNCWGRJ39dDreZU58Mp72N7jt3yn2WHaDRAfa7Aw9zzk",
  "key7": "3wQh6N2hyj8xZa6GAru5kzqCHXakGiQ5ZTBJjqdGi98tp3M1Jhh6rRAxCSvtnt6vxkGKo4XXt97VWfgtEivMEPrC",
  "key8": "AszH9NiMNuaqDrpiUJiTzD9fDn4sw5RGAtc4sGP9BMQ989aKoj6VWjx2oHTfxgyRDLgHvTe1uhB6YWiF5U1Vi8U",
  "key9": "2LPwfC9ordKWtmSWmDQEAnADmJTXt14pVKqVG7B8ScBCN5Bq8Wyq2VTBCofwikRsx7xYWt5NrLv9sEQCPg66MdPU",
  "key10": "56C41DhChXaCkj39GbpJVdi23CohfVeCm7uGuyKfo6ugg2DECjgaThZgSAHajTSYUPwe2299smuR99KA8CuFDapP",
  "key11": "48rFMX9Mvy8nU3t1uc37PEYVrb4EMDCGhCyEBnZMs7Aq2CDiKCiPTQoHFqfckbiS967EqBdjYcgt7kTBLTqwULU8",
  "key12": "4EwyvqXYX2NdP7dYD4DqZUHTMm9gMpM4Tf1CEqThe3Bet4fMJVj4tLJHyDTY1EVns3k2zxQ77ADAWfAk2BeF9Rje",
  "key13": "3mNvz9okPS5x6dEwi5zTNizRiJ4PtT8UXxUGn8jqrnxW23Nq7mBPwogL8L3JbmPhJZqf6h64PLsUhAqVMDY47CoW",
  "key14": "3Bmst6yZFEbjJ21qN9qNhDqt5JRFrmPHYfgNiDX7onuQDUMQuBwJzM3YZbWWeTSbawA4ifzKEaxwbNKm31uiUpaQ",
  "key15": "5zEXZ6QADXBfh1SgmNvV2HPw8NjRoBmJt9zrFa4pqKXmXotCPqvbVeQmiQ4qR8fktHDtGLDgYHMo9Cq5iATUBJ1Q",
  "key16": "24uCkGH5VFxkSmpvDV7zqffFK2hwe2hrJhUADjYwQ9CjfchKCDv5ihfTgyAYALYWrZVNbLi6Jvhz1pbsgW4aQCTH",
  "key17": "4ARm26954EbTCX5QPjn625KggmrrmLCeZFbL8EsGcxzJWJSnGWXV2qJ1LRxg5eV1QdPSTgTW3uwejebaEuHXtUV3",
  "key18": "2WjxRtYxBAHpk9m2JXkfwFTd1BHXCk2GNzPCe95pJ7GL15WY1E1iCiXjtwPnPxfKRjEopUedfEpWbdSXcoNccNj3",
  "key19": "3h7HriyZsT7KuVeiJdAApfgX3UaVsgefNxEELmZ7SsfuB2XSQaFTM662Nmx5gNJFzsQj5K9DgSA9DnEXNACaVbwK",
  "key20": "S332CLNEQAFSXRrFPm53qy1rVmDisMTtRUHzxU4BFBysTeWhWNMDHwoDC9x5xXGuzwhj1jr8zCRifnFkYKLHQus",
  "key21": "4JMRHheRF9AK7YLHGtYgw5pwLXFYFjSnDWYZxLFVciCS17eJkXcyMuxEYpktcpedFsyPjXgJZ3o3pknYvKZWQa6E",
  "key22": "6422hUty2rkw7gfQdBruhciSKbKRsPKVYFJ8k6ZA9NUMG94g3kxM3NAyhhhCyDhqsavFWBctH1SNY1cCQd9YkXa8",
  "key23": "4c9Lzuh6gBzhCnMrVygeJSDdZ7wEVg1xuu4DoYBW9FdfV9Dw7ppjmCHMigtMZ79QWKLVqgbcmYVCRRojsDqhxuH2",
  "key24": "2EGAQaL1dUHceJLFhejqFrAzD1RAhu16s5sUMaLAmQxAeuVMmUsN8bVoywKBXFA23marnY2mSki6rUCCFqSH8t99",
  "key25": "3HjxJ5dFoEgJ5JLi5928WvVazUArkNJthMyYddxT22PeZh32JjiNb8WfzETn53YXEUjpS2W2aUzmciCyg3zpcn1f",
  "key26": "4nke2xbFWaxnvbE9Fds3i8TryunYuT7GUx5AACiimepW3YvM6my1bxbgJKHbEprxySryCChYRBPagCKHKZv8ZuTC",
  "key27": "3uihcqgKs3JGbwHVUfjNsz5bPqS3DnMHMyiYu13KaPMoGEwWSAK7tVC7ndZcogqYNmmPiKcErpw8td8kG378mz1e",
  "key28": "c4v5ptWbzLhwsbAv1oT5pTHacAEMGNWbxTKBYXP2sr2pRPcrXkFjpPCL5VuUbxuHujnmidpb9tAbcRMXkFFR2ox",
  "key29": "4UeYkRFx8ZNRHixVuvnwyQCwe5BZskETB7yvJFsU8HHCs6KuRRbB3voNKo2rXp5FpcQWAiJHDr1sKCPp25aHwgPn",
  "key30": "4queYcBthELzFctb2wDDgC5vVh9NqzwGCF1sAMAVYQEMw5buf48rY5xrK7duioU6bR4923PFEQtn8jums76meGir",
  "key31": "3YGevPcXDLYXJGFFA4nDQLxkdUwvMPGc8GXUuuTY5sj1ujn1nG15NUi51U5AR2pXP2y7FztDoB25CfEJyM388RKh",
  "key32": "5vLqdYe5GzpgKQ7LtAtJsQTzAbZQDCMNjtsKqRADFovMuZ1UnuGXmvhYLUGnKuCh8WDgbcS7tkJ4aqMqoRRwD2r",
  "key33": "28xwstowrpP1AjvoPtRBANVMVwnbNCWLdni4bJmB27FvUU1BxnS65Ygg6SQSQADfnmww7f7s83SHz7BJwCw3RApZ",
  "key34": "5xThNCMYwBR5wAnEeHzAn3P9TLhmUoST4m5UXy2naugwGJwhnRso19XNULoNLqMaWGdjnAwg8f9oTE68YfNvaa19",
  "key35": "3pgt6P3iRQVbEwZtN8jpC4cFjfRfyTf3EEXUebg9fpbcmNcXY2QiHH97w6AundT1oA8NUhLtzWMF17ZrCCQ1sJfn",
  "key36": "4GANvYXXqTiwJRDwPobRyMb1sWKDWJ2DxjQKkNCMv9qxuYNRmDXKBQZMAbhi6hXAHwDrAou7qCq9gcxBdo4w7u68",
  "key37": "4JUHXYe7CSMV2KS5HcaA9PqyrF4rr3DD6qdRahxSmNeo5hCWVuKXiaMZJ81cAbZ9oVQJJip2o35TYdvkc2NMZ2Q",
  "key38": "37ggAyaYD9tRqCeqtFTDRpfJCgDZ7ensULzpQQ6EUBicTZJP6x8FHrSAbrzdag2vWqy5pBFyq67RXBc7psDi5gNv",
  "key39": "4PAmu3N5dbyGVAjDf3LtKZN22zxXoWAVSiwcVVoSUjZWdxWxuzSVsmEGxv6tMzuDWSXWLsQ54PjNm41fQspNsBYu",
  "key40": "5nhiS4pYWFWppyvsjLzy4vQRQVcatmZUC4CJpDjt5pFpkCUwsuu433tPHJE3LiLV7n3adL854H59wR7bSmBUheEV",
  "key41": "3QxWwVqCWyCYhqcGz56umATj3HQykLup5MjKrmmTbKQzrbk9SscKSAWknJW6BdQkavMq6dX6Sx6ZoyJeYdoqAnBH",
  "key42": "5RyEkWbsRBKfoaruy58XUg5RzDMsk75bgcvc2KRaxMbLLS3KSgRcmZtvvPP58vcFuoJWYbde3Q6g1w3RJCkh3Eqe",
  "key43": "4sEmQsz4gDee8iKnvdVcYj5KgBm2SEVG28e3LUw4d6Q6XBqtVXJ24p34u8C9B7PFkHXNdm54kCzU7ztxqWARr5uY",
  "key44": "5mYQb9qsXrVWVCgwzVeAmfo8zmtuDWu8uQiwnLbLVZtm4WGe5pSxcsw2tCV1ukFG3S6b6W5dUyCKK9fvj5rGLD24",
  "key45": "pzSwBsnGH4AbNdWdCagXHsZLxJgfzFdA7k4HExhAP6Uv2E1VtSu71qDGxwU4BzJtfo2jLkQ3ExDCTopvr5XtYm7"
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

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
    "3oJiUiRCVsbFjGYrsUNoJpUDU7aFX4YQqENVBCS3MK6j77C2mT7AfdAhEc3Npsgh8x5DbLpQ6dSLZF8fui7iRUzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NmPcbCmSBPw2gyV2xUKZ9tgVCnFdR1zgERg2DnjGZmPwc5PcbFarckQEFgppaYvBdbKabeusYHDpZJT5v9eTCGL",
  "key1": "4HzLDRdQZn7fuHBsetZPdzJggvXABuLomhm2PLpvEEtyDgFa1pJifCgrYZP5KcfdsLn3z7UWbTReWJwXG6R6tJdp",
  "key2": "nfCU7QhfsZkNPe4CxKrYBNrqxdN46DXS41pZ4zsfUmXP7DBk83kqNintGo1cSiaa9YebcQuAABZB6JkRibFdzrW",
  "key3": "ujzK9ikXhcm4cX9B3GpsWHvhWbNFdo51ittcdZDBXubfpE6tkA8XCifgQq7ouBJWnnbssDaaUN2HTW8emRNbwHY",
  "key4": "58Dc2GMcgjrxeSkRFm92uiWUFQmPoJs2KiXJhE7FWhwU4DV9x6BNoS5rtrZ1YTVBAmqgrhpYsyPrZjW8kCTKLuiu",
  "key5": "auKLq8axdRVozYsEQRt7mbQVPeEwcufh6qoRRVbzxpfWR33MEwHBxmtrkhXgaqR2R3fC26PKAKyS9LsqGQKALaq",
  "key6": "2cA8Pb6tJWosN8bSYz4cs5HCSLc7LQgNx2aKS3baw1bTXs14UwQZgeG5Nxaj4KBwiS3xLLGvM1WT2ZVRNFzpcz4q",
  "key7": "HPesP5QtX43nYpVPsPtX1nvuRVe3Cqz47MrcGNMvMmEqUmdAdmDkXEuUAZ2JG5MrFaXHyL6124RjXoSRcpQiybT",
  "key8": "4P1SKPFTjoc2XPz6HjXzC1oWXPw8WzLceJedX38rSzXoLuiZpuzTPMuMNAo7FhKnAC42ZsP2gKqYMDgGuknxUoZk",
  "key9": "o7ovahrs9uuAHc7hHgbUPZy2uvQLbi1L4EMUxVvgdvN7godHKkkXdXtcHGkQpevSytoUFr1i3ez3GET7TgrdfUL",
  "key10": "4hzcbdoH1y8HDycvMgsQVhxq2wrRqes1CghCSkmv9LuCzVyWnpd5UBJYZXy1QgMAQArHvQat435LSKXMP8hC8crU",
  "key11": "TszkkJTREwhvrY5tUuam5LrzzVsizB6szDcM6JgCXZozChxNtvKAUh3nhBjfrHctbjpNtWRt2VGRP5myR8NXD2N",
  "key12": "4xfzAtqkkVfpfdGx73vaHB9wj8A7UDCVZYSQDhv5yVRatpwE5tLvQj8rhhKHj22Pmqk12nq2VC4En4B1ccho8s9u",
  "key13": "3dU9cwah2kUxcnGN8WquNxhZBuLcHU7adSEFUXXQVz3d5aQhQgVE7guURRfyEfbWGQ2HBFBXXFhYy4bR7NabVyyW",
  "key14": "y2cdntwMmYVYaXvWo6QLVSbxx7FBwnRr7P8kSz4UnnxrdgCKe3Cu1GKWoz2ujwxeUW4WXRkv8v73XKSqBnLCWxw",
  "key15": "o1ySrdgyfRpHCdsopkg57mjU9QxCgY4Vf6vjQwD5JdBdLE9VHFprLBbBtQAFQjuznnMtNHhrfuS8HuRy5B61Y8i",
  "key16": "3pT4UNnRSNvV79X3Lw2pNTTcpFEgcmm4WQ4D79dfZKCguFC2VEsNNYyQC3rodZRocPER7JGCNXkC3hz9d8xSPz8v",
  "key17": "2suuVb5Hp47z8zLSGxxtLNGJcL79YeHVaQwNJ1xvKZcVXnS47dBspnqCmhfenu8fKGirLNkD6JLCbDz1yHLpUr5p",
  "key18": "3WyktQDBv4XPqzR7y6G9VRq9Er4cv3R9Cz3DxBZpwC9345pkgr6WpTRgZhaCRkxL6bKbeG2YtJTZnx7xgMC5kUzR",
  "key19": "5GJUxmvxQmwbEmCWyZq2tdL84TsKCzuW2MxUwtmJ7DSiEKtCXDYkSM6yZTahyxXnEhDjyToTB1HKp6kFvNL27QTw",
  "key20": "57WDv1H4rbQG8VMhGi22iAyotz2nGQ4dnfCrEAKWNhaYFttPvF6oQ4hs6yVS2Y16Rd9vcqWXX6HtooDXCDSETseT",
  "key21": "45EEHDmG7dGfbpngUWnLc1TvvPrMCs9Ww9m5xc2fjnm5LqZTiQm2BfMNsgeWqtNYSuubQ2i4kxjyCucgo8rmnnKk",
  "key22": "3ujMkCbD27RbcBr6YbtZ1AV2QmZ8isr2sLseJAVYJgLX6s8Sh2ghFzJ3M1G6DMZVn5T9MadMhNgLiydVfAwd8EyA",
  "key23": "2z4okKhH5gMTi8xQpnvBDygddujKy2JCKrdXRzuE4WkZP3Szw7nrCFLtHERzzHW1pWQCYtGhNqQUzyA4zeWe4tVD",
  "key24": "5MHUzyJ7bN21SwcoT9XLdoxzgq45s1Bg8QePqVTHuZRM4GdnviWD9QW8YXQnNxgKYx1atZugxGGoqiQBJNbHsakG",
  "key25": "gLTL3oVvFGPWFHRoB3NQ9G8pNuQbGmUvnMF6kngjeFoHYxmnE4dsaR5FdFnMrqvFRk4SqEsbtDwbNtVvEiEvwNA",
  "key26": "2CBvc8oGCgqksQoKduVey3wsc2y4kvmCAkmBryFi6hnfgqM5KpsrVztVsmadaR6PSWLRLP734YJMjtLqCGSjmuL1",
  "key27": "5Br9tK6t8msyrerYf9i1kBtrDYCh8x8i3oRjiffEs8Brtrco4DkD9jV4iEyoTm9epgChsUAkUn5mYupbkfqANByw",
  "key28": "3mGwuSvegKerpjjXcgCRzQS7FEQKPiGDro1pK16AsdKgBB5sHFMrmg5Ck1DwDQoV3bdhhs4R3qEGw7zUL5yiXPfX",
  "key29": "GnsaDNWznVsxWn83PxpyQpFS9Tj4LD21eVZVgAFrqphqJKSuR3F89BxHzrhMZYDaYCtqV98FjivwHsu3N6tDR1C",
  "key30": "3F8CPAZiMUfZuqD4uvBvD2MQ6XUrvEocVTsYECa3tu27nEtZJvCPj58S9eJM2vF5PWYbUwUuksswxFn4FTRPmK8R",
  "key31": "3VFRW2b6No19RSXYabcn8AmMHekrDGdpAYZ93Rr6FnPNgEFt1wmDamtizrXsMJpzkc245mFz9YEAYqfsyD9V5xTB",
  "key32": "JUpd9LX6YzGYSVvC4H11rJTFH6d4zE9mcHgWdqUEDgP2woVfn5r7CCPDeWUGPpLFG9ffTA5UugLsq1LUt7Vg9k6",
  "key33": "3B1zttZmpo2DU76r4Y5SnQsZNTRrSs18usgSc1hDkbK2ssZtEgPaAKwFWvXr37hR7vHTxTM3Q3p2oGpMN5kWiw9X",
  "key34": "2cVpjNy9KL9N4TnpWSdVQz9X2yKATzD2ngXrbU5aafdSv8M35XxjNru3CJNTJKrAjiVEjGCVojFzm7cer5DbLSw5",
  "key35": "4KL4raeMjScmkqx3e6VSSq4rvvWrfNDtzEFfuoGcYQmsNtwHXZSrWxbcRAQGsBA2iR2wkxxwwZUC8MXjJN3agruG",
  "key36": "2JKw7eFRgxdFxSFGV6Q4F3zq5jGGf5kg2WEGFA8MDHzekGnM466BnxrEFEYEMFYk636J9bsQusefKGXohWuudra5",
  "key37": "59Lb9UxbPqGHefDwTfSUdv7iWfKtq2P7TVYZc8D6m15KzBfRUTKNfh4PSoi4uHCQoGSD6jfP88TQFmR5wLA1CJLz",
  "key38": "25yusP4wovX1B3w2LvBKgXbQrdLGWxR1PQvhxYpskr5Pgcx7KPn6EraWoaTUsG5no4qofbu7WMMjJGDSA4jsFTW7",
  "key39": "5gjwZyFJHNrDysNyHet5KJcv4zzeYi9jMFrYj1NoLPwTm3TA3PC8tFrnfBeqyk2LPkTVcXhHutHHShy22851EHj5",
  "key40": "4uiEAUPRF4e8Bt3WSVN9vo4AtR2H5hxTw3XXEKvaKbQpqg7ac8p9ezfviMTd8AMtFTm264A7aeuALQCPCZs1eE6g",
  "key41": "4gH5hdLozNNqurYLxuHssgTtRxxbTZiMw2As8Ak1opCHpi39Phpqqg1EbagdAKfNBBKsmEvSGGNsGkwieFY5SkhP",
  "key42": "5AQuDY4XSzhgDWjkZPPEEL1v9cWwcVEijxMocAoN6A8sL4iegedTfUNpCMiYKehMCmsWUm3fD25E6N3z7hVcHLon",
  "key43": "gZ39tYR3S9dhrCL4UJVzERhf4m1u27XNJt2VTV5sK686FDv3KoJ8bi2H9bdE7gX9MaTDj3ZeKC4byUVxHyfQDh3",
  "key44": "1ZsQbf9TvB4XXcatmFDpefwhFqqSDVNsSYBkHMJz8boXXFNrMsHRahpDBZUocs1C6zusPrqQ9TLKMxSFNnhWYbz",
  "key45": "2nE57zwQxsvWNbezNEraqEhufYNvGheyXcYFPKkcbkQncp1nyCQfnPvNkhoSStJa74nNsrn3EmSxmgibXHzXstcz",
  "key46": "3jzk49Wdegn7Dqzvmj3DiFUdVfnzHNPyqhnFnV6Q1mxo9TrR9xjjn9ae42nv7ixYzFyvKc1zF5N6rZsvZBKgxgmD"
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

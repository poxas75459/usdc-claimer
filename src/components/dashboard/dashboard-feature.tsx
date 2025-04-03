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
    "3qxn2m1mTmvAPDRLMfXgDEvzrXJ7j2EN5F7Ay9bLdf2qiVRzbq117pmg6YYuDpJmnuCQgbvoATNLXLVMgXwzcThU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSGiJPeB3VFZztEfqnBe6yMER8Mor4GmrrSkkL72Q3LJuTB159pRYyMDo6Nds8yrJGDxgpNAWpLXPeTFUSr8oHN",
  "key1": "RVTP6DMFTkRP6RRfyH4vDdhwnSf55RVVu8qjPYaA44ibMnaRzxDQ7krcfDFY9YBTfN3xY6xBVcb1g3ZxZBxEDJA",
  "key2": "2C6reCpo3izczRaCDNdFKyKNKpTssSxBxbVe7BZsdzMbNY1ChHjoXPEAuPNcE3Fj4gntLJJW5CDM9CXhrFtnVajY",
  "key3": "25MN8Gncv7cj11XduQGz4X3BTqbGWy938zKSA34DR9jn6pYnBu9tpQ37iecQ7vXY92Hi2R3qiHgDeTaeU9uS7v1R",
  "key4": "Tx2znW3Hc61idgHqCFBw52aJNxHKD9GcjfZXuiU2hKBhMSfG79CjG55HmzwJud6ihhbR6PLB3VakabUnD1mG3K5",
  "key5": "5aWLMRkzpcuXdSJtyZRBvV7cmxmXAc6imtpH1thLiZcFrtVqnTJc8shgrqXNfeqH3Csgu1iSyGLUqFCFyKupD2dr",
  "key6": "3DUXUPbwPkqJzPhGAhgZZJbuGEU66K4oJpvgEzSCTnRpAmxdrtwAKT7Mz4umoDHzR7x1jeBFWdjevjo8f1oBNP6S",
  "key7": "39cQg6xEcUMZXLCrS7xQM4CDnsm7oLpB5dxGRLCzsLeed6kXTQXPedrzbU3AZXBD5FtD7m72uxESXzikGeKYQd6p",
  "key8": "2vJkrMFEGsA3sz4j1LQY9vCtXYNNdFwxkmYiphEiPJ7RVZRx42nwKxvU3jrsXXTWNgcnj5rUqi7VBPbehYN5K7SQ",
  "key9": "3bqqV6cvY1RYY9NNGAYtRb4nxFTvmGNm8VRVHv7N8wsXsGY2g1Erhojyb48jx8wz6p4TUHuXJpXA6AqC4YByzDwX",
  "key10": "3bqDcuCR3kpDb5krrks9q8FSdJ2TmB4ogz8VZo8jLf2oLTUccoUdvf2WVS9Afxy1WPJp3WXXn1EhiEvbueCDKtsS",
  "key11": "FtAx4jSponQevrjKojsV3ESFFSDGEPVzkZJRVbUd4sqgybiDeMWQVStVyTtet91P9ugDXMMC9PFjHxoMJoGYNyQ",
  "key12": "5c4BwtRpAUWaHC1s5vzqfeAH8DPFomZHxdkDVfuvqLGP5DNcFtde7kfZEHEmK78JM54PeEjyGLDB4xGiUXe1pfD2",
  "key13": "R69SDwba3618dbEqyYhXjeBsuQHJHf3Uwe9VMMYXSUNHHTjek3yk5DExreDswKj34mQZNMBF6PCewfi1rt8cSBs",
  "key14": "25fDK9xeU7W8u57fXki8knVNQVZUFWiNj4SzSuL8ZSGzaHvU3cGCmbUPqUUiHUU91G8TgmQ4RSBxXco9X6v1xW5Q",
  "key15": "4jfhzjMVBptgxDjSTbV1yT4VQWorn1idm5UK91Nfrsy1fT6rXQz7Yn9ni4TUBHNZtgXjVewR9BqHiAUmKRN387z5",
  "key16": "3p14J4JfB6ZdT4MZyL7wGmnRhJfEUHvKQxCbxiWheZyaw9QeDbrL6dodDwXCZQhSEKjPrDbxdWGnHYndQSeLwjKi",
  "key17": "NADVs8u9PWSNL9RJty6bXQsv2bntQEk8w3XynB1tqkMWEsgMuBizkFWo6Gwy7f23cuDHSiUV7Lmw2tuhCjZenA1",
  "key18": "TSPVUYJ6GBSGvX5s4Y23vNksgMzBMJxPgEEBhLacd4XjC5mVq11rYjf3KgvN66RTgiW93i3M7tdQiVMEG3X3CYe",
  "key19": "3MT4NJnyA9N4eKvVE24uAFmd8T3TR7YrNnF9oakEh4j9KF6ET76BKNNuXGCb8TUtxFiwZecyoiPyYiy5nrFCb3bm",
  "key20": "2WTvhfakzxZwkrrKuS96NZa8SHHNqDzGQ4xzkRZsbfLuWj6TLoBFzq4AEzN1etENDjaf8YiJZ21YPCnBov15ypUg",
  "key21": "3jTthWu8QAc1rdi372uyzTmCbYT1kRvmRBgkPqxVwiJuoZRkG8MtdhFXXSjfeEhoSdb1vSPGBGzkVwqBYvqGKHZp",
  "key22": "2TtFatDKTDtD7SbWedQEWWnvFNQmJGTRnmhQrXt11fFLhmArMvdwSeedsX5MVEYJ8Yg7oErQYWaKghqpiTSnyDhp",
  "key23": "4hAze6jC7hrx32jnpoMVu5d8DPThPchxdBWqs8HMV1dP7xe5zewvt8o3ZeFQ9Ui3MEUZnETQGPNEyGpXjowJGain",
  "key24": "5kEJRVjwUyeJd9gwJRMK69vqNm59Sn7Y5HGK1KcsNMPmYNpME2DYFLG4Gxm1trn5c9QrBm1t4ERikq9L6MTXUazP",
  "key25": "2GMW27YULCUWt9739RSFGUWNEHNsK5nXWNM61Bsm5AumnR5tyvGRnAndQmYaXPgikpPUDFSGKiVV1TCUC1qyoHKp",
  "key26": "3vpDKNyC5YbU8igg6UApRMZxbgBwbPPkJ6FeYLR8SiAELzXASw4w2TWqM9rzNcgaVPbuub4ruWNqTGCynFsVha3h",
  "key27": "62EBHpdBRyaXv27Be6Ak32euN8SSfs7jji4ty7L4s9zqQha5tXXD2gH56dvsnGF7safNKX1GpwDHp7qtfh5TULc3",
  "key28": "5gmVjmzFFsEzTyJeroY1VpKtMmxXmGknHfkVuN8cePKeJh46Q7re4reZnDS9f7Y8pERGznu3AzqeRq4QWuhTfauX",
  "key29": "eJTCZhczJNrdhBkm17rGAHL64SA4HS9r8pe2PMnERMsXcfL6Zom6FttPefp2TYeFwWwp867yxCbThYCE875FC7j",
  "key30": "28bHMbuJnawjeQEwbQxRUQtxBtkfyXWtnDnSMANDHs88mBnUYpVBNx19ehNLmHXEwZseFN8NcGzRrjFP4CR2AmXR",
  "key31": "4NZcSMBRmzaH8ixzSYrywTHWN53XSz4GzfxYwzUjppVcVQ8whdgzEZHhZBaKjX5EkBhV26scZ9sfjbVJpBLT8qMj",
  "key32": "3U29ovFbo1stjfurhAvKNVHz7ZQoCszTD5xFKrpsVHS1saV2BiYow3wMawwM9AtAWZyXbLQGrENxgdJXb1EsVEpd",
  "key33": "3Sn2ShkXB7tUNmZYbZGzwCnNN7dPW5eLnopZFhTxGSv1czCPBBZi6Z56i1n2N47L8MffB7aQoy8QTBBFiAMk8WgD",
  "key34": "5bUsQt4t4LYwxBqBXNEpLmnhCDNBcAooBwM5rLF3pmVQSzAoEz1QX2UcYJpzC9d1qLyVZ4xMNcCcU8uFaJavaeMr"
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

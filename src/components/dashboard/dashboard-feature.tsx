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
    "3vaoryd3ysefkoCZ7W4j8krTB9C8J7FGNiFxWMDsxP1DFkem9f4uUp4zpvgc4SitPLLHUKy2eumhZQrFxJTMWYgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jbDSt6Ss9254urVQ9YB3QVKNZwhGffsbKExMjCiGfNPA9AWfvthXny9PW27wKciaD3fYPR4PgZffDQhANRr61bw",
  "key1": "5oia3mmo8cJdaVMe9aKtkbei1tsaevhx5BQ1Dqvg5RmKL7t3bdMojxHcLL2v1sTffShqz5kvK5wRMg7yu99pAp23",
  "key2": "SHsAHUJU62BERBNasssc6FW9qHKgwGZYbFdFhRCHA13Rijq7ptRYth368bpeXU41ddaznn3EuzaufhKs9qqrk2P",
  "key3": "4LvvFGtzJVZszLkbJ4oM7y2CbihEprkNo3VrJv9HYwzEcSBYoHeNmiZWX18x2KXCuHH6vCwKhHJy5YhUbzho5muJ",
  "key4": "427XXe6D927Pb5n7WaYVDetKTyyL67z13tNktAYXrSYyACborPTqpPK8EiXPNig1pmPuDbYNc2pXYA8B7qUgC8By",
  "key5": "2N7D4meXCC1auPqqZpQ8kwmoMoQ7qwjtMsksNifJxvAZtMsiE1PLRPMsSzcyJvmdpmnB3x4SsYW9CpX5bsqieAQp",
  "key6": "4xdaxyegsUJ6kt9u3uSVg1227xrA25RZgcnxAHzc112rZSRoH8pwPNaarAargx412gtu7Xbz7qAa2VuWZ9NdQcrv",
  "key7": "5KGZQevbN9Q5gTAMoW3bLn1GScEQb4QLBKsHW3MhfDNCTgdkzJNKinuDx77T2rL49pSV7EKvC6VheEpb4FPKsY1h",
  "key8": "5dhrkJKRrJhjMYXTwyW1restZXdvu8hocvKYwmoShgCYH9TT1XiBh8zNb42iUFibAnbw8CHi6qbdX34Uqohap7CV",
  "key9": "2wu5ZWNdYH3WnpVUazLH9QLNiSqCYukn1jpmxjoxRAq7dhtvWiK6D1YHzs1TavmPjXCr2BsF6i9CXnmo5x3xzQpv",
  "key10": "3tAf76jf4dA33PFcsnC8ekSNCYbPNHDW8szCevqFhT7RuHuk48GHvQsMej2HsySWUqtebw1zGLEACceCNVdEoTMk",
  "key11": "sgcwUc39V4GA7ebjEBmjMQCEP5TV7KmYc4iAQd47qfuM7SeEdC9CTntQFnB3Ea9oZnpwPS7FNAYEQpSYWeDKvyu",
  "key12": "H9Hi4KMbFFsuoVFN33iyai2Hfm41vSLUwhtJoZRpTHLjF9AntX2dVgv4PjEJA9w4esRnsaaMANfcMpefXAxgyhP",
  "key13": "4nNczx2EaK1G987fortKRZ8Lxj1dQyXoYAtpVTcUm8jM2h8rz7kNK24FVzNs9fh7y9oFANCtPicj6ByDkZFrjL81",
  "key14": "FmPvzp37cquW3ZcjTjJsgMRhWDPa2BLkxhhxQWtihfskQwwJ8f21kv8cQfaCmvrre4bmXQPGy85Fh12nZ7cZHeW",
  "key15": "3MgaGjTa6ybxZxx5SWupPGU7VzP3VHMuLp3KjwJcBWyaNuiuRXQY5VG7eBwD2rzLC3WiUw5yrLj1vRQcqk8rsaRZ",
  "key16": "4mYpp5VGTKcpPYBZm6gzUozhJGQq5eKzydHN7Vn6yVdN3ftyk6roHLNL6eJehKFAbzhsQ2veUCYxXAomqVrKggBd",
  "key17": "zkAbP9Q4iL2y4gMGtku5Cytr2xJGKkiempoAxUxqWZHFJSF8pGqSEfdp9wZe7Gk1zbuj5MRgy6rZ7ahBBmBxafW",
  "key18": "3e8uQEDF7MRZTJ8CubqXL383SMC3Uq1mJqDQZMDU4UThZN7u6VuZea4Hn6qXvxRS9dogFEQKEVu2EdJt5aAPxAVL",
  "key19": "h7y6s1jFiW1YLehhXH6qQ3P4D8upFsbdWEBbCNbFWzp6zVdVzEgqmH4zR5zoHcxUxSHYffXaoL6AKPZQGdqbNiE",
  "key20": "4EKCDVuXbpdgYE8QcrnaYWCwsZThVRRbT4pTuECribtMr1gEfNd53GiY67gDiTrFkDsz9NTB7A6xhvu7R5uGbnGG",
  "key21": "2MeGrMkS9Bys8DNBxbqApThhWePCKUdx6ydEcxkcz5XzstSdi9orRgrHMBwWSf1cVf5xY5ZuhP1XSVumxoeDQEoD",
  "key22": "3bw3oWQbKprzj6SrmXcVk8RPWCLZQrMPhsLXqJ4hcGBdXkDe8YX2y8EgpwXQnM4zQUNTMZhxepxQsJMp3HxNY2wD",
  "key23": "4yjTstodvA5F4QNKAmV5FN29VUgiAXiC4JYq4xJhrwbmeW1kk15ZdyYRaZwbuDprA8X7t6Kde3GCkn8YVd2n8XH",
  "key24": "WbrnM5ETNsc58EJtkESoGf6Epa1nhv2LyjH5fXVYiyUxmnoU7vvuWjJX2cho46LJeh93yPAJ24XSvoMx5vMcarD",
  "key25": "4fMHPQVHE5VcoeXTDWQaioJKweBdxrYdwvBJ9AoovAsL6Fx6xxMwkV7aYHHhnoNKtyoi1nZAjmaRGHWh1fB1CbCh",
  "key26": "4DREvy4sDWQgLD3ZDC44dnNY9hfDx9SoQzBWwvkPN8EMZLqjEYN4eh3MsAAuo7pV9iSuL2N4CvH8kgy7cE7g37QS",
  "key27": "4f2gyoWCqwFaoZkKwBKLazAdgagptXXkDNihx8uQgP59t7h2nTxf5j2Qoku65TciA8YGfdvDJNY8p3AsmifXGTto",
  "key28": "ETPxTquQCdsw2LQUtkpEw4zNSWN2hURMCnSyXz95SkHSCLKx7jig9Etf17eWXEF3JocDCcEB6sA9viNiuXNW5kU",
  "key29": "4TJUeUAhc4TKDwUQVxoTE9ZHTX8oYg88wKyxoYLYHoXB9nosNc8wwUJcsoTSHAA6i2GdL8BBCi2HLqH3RxDZG7MU",
  "key30": "vFjJSLbMcET5Xi8P2m5VpbW14SkYJhjZPa6svRGywUUdswCy5MWwzXtnKvHxG5WEKrgVyz3rtJW5Vg1D6PKgzbE",
  "key31": "k5D1EmoPTnkBS4RvLw98ArmpUP9FYEZXJMw5eYudbj1xNvTYSm9xz7i9KnN39dL1rmLUY5Ce6jzB64XXsPpcPs3",
  "key32": "3ESVR9vnbT3HCayuKDaS3WWC7ibkB8hJtbo1xpbwgyu5d3C2w8nHJPszXEyiQNLLrfP176PYazun3LGXtwzPSgPH",
  "key33": "53GjnxcKjW7WYk7kLQc1pLsnsYRsBTkgudvyEhjqiK7c2HzHJ2z5p9VQgdPgXHXwDsaGyEYtxkS9yPshmReRW7tu",
  "key34": "4CPSDmdxcqLRa5DgXthsUVR9whgZSFT7e64mpUTBVAXW8ZmuCxAn7U6a3kuSWsQ1BHdqgM8xhTVy8uDbGkiEGtbE",
  "key35": "pTVmHJQqysVMzRfURwBU3NjM1ZaR3Lwwm1QEunzacSHfUPfanhPcFMfrmbHtKoDBShUPZrVL7ooD3k9sfeYdpUF",
  "key36": "pmeHqwcUziwJXmHHkk9GLDBpybSAAHk8mhJE2RQoUXAEFyy9EMaiSwLPoQdkeCUpLMhLDvvKaM5ES7ZHaD4empE",
  "key37": "3ZF2knLnqkasYiZC3SL37dCJJX7ety5ZSsp2wMY7dsiDCUtc2wVCsoj5zAg35srhmuZ374WdGUoNJwsTZ7wdmMC9",
  "key38": "4iPJ9q5HubmtmQjPPG2nTdUsf7tCFiVsDVJDxpHxybbEAyBCq26aVZ9yBTncVbxp6nMkQf9TrnupbVAGrYSgyiA",
  "key39": "5dF863ZUjso6JQoWk6FnsLJj8PZUni7SWvgXFwrkQ245b1ua6ZUCtEU7DnH1oHpky8Rhe1hNXzCmTqnxWTChY5Gu",
  "key40": "4XDeW6aPsHpKGAZoR7LkiLKT1iuvCTGiwKx6AdVSYosxngh5DcAoakJfsCUM4ZhmWoH9yg5hCayijWMnH171Dr94",
  "key41": "3QnuCWsgVngTC71FdxLgPMantmW8BCR2LreqYvCMbi969e5dYFktCyZDf3cammBbWe9FcxvXBHJ5sisrV3JH9xNE",
  "key42": "6E7WoigaLVLu4LnmZ9RFfRy5hFZkJMdnAm8q7n4qXhAXoSVZ7bg2C9BVsKDKzxLGRbaqqtbachmTedt1h2iP7Xv",
  "key43": "5SfKUW3z47mWyCdAQe5CCgheGxMdVFYWLhiGMyr5uCiwX3FKV7enuQfXTXGjgc6aPNxTUQRHZgcNLM6CgAAu75R9",
  "key44": "2mpzjECg1mAx2F2KGNAjqaniudkyLAin3QVprzteS636U76Vcix4Ftyj6CrA93rgBHNJPDyM9qjztE8MBs6AZHvj",
  "key45": "44Nu4vMJuwL7g1RkZ2usy3KsekztAvKanN2ksoTBkAMYVyoprijMZ6pqdgVsK6RtFLmwGPF85SzYre9Eefoay4mJ",
  "key46": "5qaLnrDYbrZUvpEBbeMKtJNivfQbvtmp8nJ1T68KfSvEJFiQisGqXe93YPJnRATquzZRBKuCaXqAAizD5YwTnr93"
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

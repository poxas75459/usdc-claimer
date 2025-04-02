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
    "5CWX2yy6QhFtnAfRsjANGBvAbcEDKYQ7YQdyCD1xaAY3mkffY5zzDbmFT3GH4PPCAXbHbjpEUbQSJyJMBRdgbFup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wNBLgcN9PXg3fvEPXEtQaHqGrGSnU4VMoVatCMKZEFeMEBRYHibVqcpHSpJfigq9moSqHLNm7bE5pFfq29P2kQM",
  "key1": "HgsyYJU2mmwxhYDXLieYJosL5zkYcwsWXi7XtgutUuoRWZg7yWoWvDUcBtfUMqkk4CdPFLwJwQLHUzTkLk7gqNx",
  "key2": "mVXgpLCQjRmV7Ad4Ki6iTCePJwiZLYCzGGUiWRpataNJS61wkfafuRbyFA5UeghTZHdZHe74RJUfjeDNZ4nEKDN",
  "key3": "3AB8d9Y4X78jnxaBPC4q59g1TQPbyXscB8btSxEUKbxVP3ewTBsxzRjfpVunrc58gDmpWpmn4XuVXnkS5St59cU7",
  "key4": "4NCWZo79PJNd1eSpnuCEGnxUKViJrE6ybKY1uuRHssaWtjDfZgLSjetrDPUSsTSxUXigVHJwejFdAqq2LDYpdUNf",
  "key5": "29miykNT5sioBYWxDWna4tvGRDRGuLkavACDmDg4rqqLY5NqAz3URFJx8CrRa48JU8fSph2wBnFkjTmcQy4akdU2",
  "key6": "2FAKNyPWWF7qafomzpm5SqrDxUDbqSiaRypkfKPeAc9pThGen7qW45JYfL8YgyY6gAcJQjCWi1PnNiJVFAXbgXc3",
  "key7": "4mCriCnXQM2iAaEKCPSChVT5Va2WgdSvaBvH9r3EeZCk5NUaPc713QhjDaAhW8FMu3Q8mwNSfpEwyn7BDFao2pFU",
  "key8": "4xCBEioR4iRD3HyT5zyUdsvcRjBpsjndjre5nCAWDqcZMBQc2PJmeQQFvb6VWNSuNJeVMXUn7RUnLtaToFGoFd6F",
  "key9": "33JMGGAywtKNa5Yixz5krUoKaUcdPCFTWij3DvJdVU144y2F3hjREG6mJDQDATZe7EDupKPCUPv5XdbmjtCTEYuK",
  "key10": "5AFq342vSaQBnEDwmSaiK6zA3HeHxR6n4eiT1wJznpU7qcaugCM7mVidDxxwizRrBPxDrCH7Z6dJ3v1gu5KYWij3",
  "key11": "4nch5aD1CAYWw7wPGBsN3584yAsDPSETRCqTVt4UKFePPk3GtMpYk1ku4JukLM1vWxqgFbuMSH8KrfvcG1A8AXyP",
  "key12": "5yJYHYfdPZdPDg52k8rZBcLkkVYtN73UwyRgEUTKcVatwPVnoCKdQRcVP2GdveWRTwZgKcTmUwmuJDZTpYEP3KEV",
  "key13": "5bwrdBWgMBvf6HgXtRNxZtHqMqqpSRMirt8xs1HmQ8gFAN5F7yRQ4vBGkYjUXdpC8uk24hbc4w8mkaqZbtSjuSGM",
  "key14": "3sM7ZztUXZKSuo4on34QnwwkQQXQjrarLNrBmGmPA7i39FkY93L1mbAwF6nnLnsM8WyzStQ25fw1qB4EbTsW4Wk6",
  "key15": "zp1vEar2LcB5WxCQDsbuBXRWAJdKtywXP5gU2T9VLousS372joP75pxjpnsQLnANtPuN3XLCgr7j5sV9APdu7MZ",
  "key16": "49sH5JnhCUFkoWJbBk9n8EMZ5Mmu2TuF7bAtV2sK97DdRv1AdDhJksrEtyrgekn1ZhBGUySwFEKcgKKVwjYDujJF",
  "key17": "34x99gNjiw6DB6H5pRGHj7usmVvbQw2kocXZ5cs4caybtEMrcB3YPVjynXtd6hzsqWDvtv3YBe13K3gmdRAZ8K3z",
  "key18": "5xkEHCHGdLEVtR6QQqXQZM9wW2Ux2m5zMAxXJwXrkUGxRXM3KWZt6gtbnHWrywUxTVD3qncLv2Y2Dd1GJa9vE3s2",
  "key19": "3vV7gYBLq9GNBhUe6p7i8LHNHC1zkBBtNLPjh8XwhPKfn5oqq7FR1kYkxASKp5znMQ49cxc6Kmu11w1zMiGMWZjo",
  "key20": "35vpvpEzgoEm9zWsSdWEgXsSNFc96omLSwFvmUkxaJpQf3XxWt55Td1QdzhxbsWmdQUajeEtzwwCBejvkTPrmdRh",
  "key21": "4VrHTSbjj3wyA2vP44qEGEoghhGW9cS1fEaGzeHX1ePwJWy14aERK8wnHpMhf3Bjr6zkiUvShSYzVYcecCspc5Rs",
  "key22": "38Su1xJWjm6TwnGqAMezry5iiTqgi8r3m2h5muPAAYkm79KSt8rQE9cRB5zz9akSvBkvNpGrR6Eo6aYHs3WovvU4",
  "key23": "wpze2dwyxanKcGyNRD7tfsJBhfEqa4AbCayW6QzagrFk8AtLK4ZUfc6jy6zy1swTCJabTq98Twfsr3MNekqDMU7",
  "key24": "3iBDREHoKAMmbEjQfqFhzzzWGx9XZTfb9mGVXPy6R42wF7FtGyd5rz7pNnrVFHTFSXhJET624RhWhUvw7UADqcoZ",
  "key25": "4PGVDRaqaGCkfYjdUm1LKgs1j6cdVoGao5CRk39JLPZFrwaYibvTEg6qZSRj7A989FmjEGV9kygNjzYceVXxLE5y",
  "key26": "4B1p8tJvXfuihbceiQhKqbBmj3yY9RoeukwsfUN3DCfHzBfjdeoXptekPrb8aQ5M9hhioQKTGWyHcNxGDJRrx6jP",
  "key27": "vQnRnuuED9KdxxETrcxi1rzZNDJywMUHN4KGA9SguTszPktNDwUDVgg1tLnMp55uKdensjoi4qyzFS8r67pSkPh",
  "key28": "3L4Hx7f76cEjuUE38Ro13BibG2A33yVy4Bsjyu1BHhy4enLVfzifvS6mPK7PzC3pEvk3KXV8dFtAUGVLYo68T1r1",
  "key29": "5SnEKxhE2upBRayCGF7jdWfS3f3QyXHJA52dsitTzyM4MMhtVZ9mtd4ycxFoca7CzQhxmnuyXK5BjTooeT7YNbbL",
  "key30": "5xxBv8fGJ9YwLYaWnbox4Twzy4SxqvomRo9fcoVL9ezTebEWKLatQ7CYL1FaeDixNz34DyPVNqt7pWJqxQExYBcg",
  "key31": "5BPZbGr9m1isFHpHyqiTckbvTLHfrkzyjx4mH1Yx278n5W6hb7L5r4rn9edqZ7NDjbLoC5dE2hkdU3WT9QHUPVmq",
  "key32": "4ejb9p27zJULWu8f1PtmpgHa6hYLU7FnDEHq8pLsGL2P7zEiqHpQ757qaSdEMKpQquwvzLHGX5tL1enUtgokrNb2",
  "key33": "3CNefEDC79sBT2CNGYk4xe792R2mTwnfTHZFp3umhLe2UvENMTEo79ZqrKKNntiGjt1FTfTg7Yky5nbDUY8a3uh",
  "key34": "5YuaWsHxX9FH4W2XRChv8QPjvETzbbfXavnBCB97ejeUtadCwHZbK1m41PrnPE9NaRhTndV5reguMADjD96FBSoM",
  "key35": "38wMzk5JYZ7X52KNpG1VUVGWBekDpiwLu7R7yhzdszvZNBnGXorsxtdq7iTnNL1arQkp7DXs9tjXCbQSofH9qPeE",
  "key36": "4vV8bdYWQ7wFFwu2ch4UmAdiqvi9okEFjTNrfG3AUnDM1cM7GQVoSvFhoYrWMYQxD9kcDGt9kTJbdZRgkhGmPVz4",
  "key37": "4tg8DzDRJeAZuqgpNWCpxvRkYMhJKstedJEz1aHRxDwbCHLQNRjFYjTXqcae6FVu7BXLxhUm4xhLTtVm8ri299aG"
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

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
    "9SkZLTrftt6GAsDEARLseuWhZsQNNXcMiYbVc6hgcNXh9tURHBwePuaFHRTJXxbipSYHreMSKCnEPNM4e8qEVNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPmRcY21YMKPjdhrSL3ppF1QCrWHL8p2thatWLKyFfVKD6zJmtB9iKsCYXVGpgQR5nXZvGWgkwFxkj8nDiBMZgQ",
  "key1": "5VpWEXn1Eb72EpBkBXfmWCJkKKBj8MhjyUF5GNrs7f12dByJEMiNTLJ2Q1JxatkH2nbVcjhaMvnjysSGsDLAjkC",
  "key2": "2paLqowQy7YdYeQvnzquUZUESBNaWFB9LTTDF9avEFwCF2E6VYEaRD1gtVtRhkQLrFrW8or58LPXum5ZRnA5S4Dz",
  "key3": "yE6QWwfJGPeHm2kUmeKd5vDv5jvUnCxvz8TXf9WvFJciqsJJTnzMC96nVCrYiw92hP6NaVTskm6xkYWg3GRwowr",
  "key4": "pjXUaRDKP83X3Stt2G3yoa4XQrD9JR4XgL78HzPw89tCiCvBxKdYc4jj7v3NB1PVscY1QYzFKidVLYKhg5nwtMX",
  "key5": "3Z5stPaaRZvG7hNrm7R9cgHp89nruD3wxb2fbe5oYy8wJUk7PYnkKDZBS1radDMqN7Q7X5VdMWbzcnFVKF37cCrR",
  "key6": "4bgDyeFAYiK3dRykAyPiuBEQVrnDbiKSCcxsF8YUbe5i2rPxkVFgHK2gP7PNjjVtovhXwKf3K7o1PkE3G7BVRUgz",
  "key7": "3vMTtMjgEvZKW35gZUiw7FSSYMTQfm8jjZSvp6JXUYSGvdZFLFtwnCdwJb27sGmhpxqaCAKkdEqVKKFQLa3Wb3ws",
  "key8": "35ZG4A2KdRSn2gyyViVFbm7ohDQTDMZ3avZW8CBrS1SSQ2ntLmCnLy1hr8dngufNz7MMusYU3kRUGsqxHstS2AMb",
  "key9": "9yAvq8bM7am85yNgKuNpEw9VN3YCthwBuarEUvUcYUuB7jkikhDw47Rki5EBi5kszntt3dm4MYSjWBAabBPq4FM",
  "key10": "2WKCBE24Kx3jmCxWJTVNfPgTivj24Ap6Jo7w7yYvyaMskaEK4iJQmw1BYVEgR95t2MVmP7TJEKNopydAV8zJdPp3",
  "key11": "5BGUnn6D4GXyFU6nyi4o1qgvAtYyVN5S7sBfqVPVE34aDbF2jJB7P8HeGBQkto9X7pTW7v3ZydwKueRifM948K9G",
  "key12": "2ocMqkcnrXJDxMSMD84ub8cF6giYvMAve9oMEda4JyEcnsmVJ4RN6Z1UtJwBio5Wq38MBZpu9p2YEVMLsgW7CCRe",
  "key13": "4kKP8ajJDgHw1iXHbw5RwWFCC2gs49qHxHcXcYY69jWJh8JMbGawGgsx7j7Ez9FRQaPmXpGmRGyzUpPa66SNVUNv",
  "key14": "QHEKyoRy4MHFkRAMQLfqW1gE8MMwLfrSYBFQxjhXMbg2AvYULW7E2VtnFy1vzXHPRAWgTFk4K99PBVMzgCHbyr4",
  "key15": "2Xh3af6EGq457UQ1KLQcG7aXEKD1XfiZZK1VhNta5s1s1XNsaAWFwKuGvTkD9XZRmdWqHvAiobEPDcir5Htyd6Jc",
  "key16": "ztsTV55ko52zX8dMugwgtDLhviiYDM97UvkmhyqAQE1zGitybBUqhmQ5HAUhZZJvfF5oBZ4TKoFJWNCL8tCqzpt",
  "key17": "WSVELv3wivnG2K2sL5wEihR1uz4nztwzkHNBwpFnMGWVLw3KQrBwV76i67awM7oXSDzsyTBp4sSPc7kp38tCyfK",
  "key18": "633Cnua2VznormqYkV5L2vrnSKGfTsnNvJc2REi1DiT5fazjtUZS4wmSk7pv75UgVXhLUWDUHAGacd5eEXbGmJdF",
  "key19": "2VcsyshyXwmfrCF17f8xw7NYkXzLgmfSFZJYSRi5RLUCC42Notcqvsgvr5XTZhDBugRtG7krhHb1AyJhuVWYkTvV",
  "key20": "4DTuv6KaFRpRK4LHsmJmYjZfMxuq7u9xBpb54LUAEButvzi8F9MpTjnn7YzbLypFcwW4356zkDtMzUr2VUGufAGt",
  "key21": "5AxL8Lm1D8aZSB3CtVCE2Wp2RZx4vSz5qqZnYfDodFBH42Epx1C8Xdm7FpDe3ySbyZGVAoSAMRkENQjzdqvGNvrH",
  "key22": "Z4ohRXgsEFkzmCPgJP8Yhqhoz15acanhAV1Gu34pFS7qm9VfC3EYKUkP9MKVAp8afDwWFzWDmR9XUVjmyFWSuU7",
  "key23": "2gSyTGSij1Dd55ibfATTQ6dbB9Y1MiPg7BGy4EUkfyeCBcXgruox9i4JLZb4cKieBD8rM7fBT65XEAyCoKBcY5uA",
  "key24": "41mY6oc6NxYktgfysGiDHyA8frkdMdtNXLzQUgdpg51mvb2Tbype1RLqjTfaFru2cDwGbwyKubuoXLbR8aoeGe5M",
  "key25": "4UMu9FcCZDnRZ4ejChAMt8iuBZ38D6ryBy7477w4E2qZk1ZSCBTowr7CLcQ2D78ohHo6jUt9Zq49dpX9oBDgMyu6",
  "key26": "3EPeibzosUaR4rNDo9FvnQnzWVdhENoGxL79myfHTdui1bahU9RKFPTDXwPE2UkJtJi49dRgKiiDv5NqMQCbPeqw",
  "key27": "2hHXagmWKyxKdBuBfBEiK4E7WPr5Y7238jJHLfXoPPT5ak4MSpwNbr1UGBk8Cw2Sw6hpDsbF4VRepAvPcpLE2n6j",
  "key28": "4LHsWrqL8s4JoCWz3x5J3rAfgwMwiryWNZVepPkGXx7Tw3qRj3JCD39xfoNwk9qaUzcJAf4GUgXBVkd2DVJhmyWF",
  "key29": "3JRZ1P2f1pcw9EmU5Ux6VHE4TbFS8FNk2n5t8D76SZaTd9CudBUXjwgHixphLQaDzQ8ijjXPZ6WTwjbjCvDBbQni",
  "key30": "2C1fqN8JFRaneGzAV6QeP7fNCY5TX7zYPAYVjvD59YSYkAEn9Jqu59MvNUnuExZu4NGnj1scdW8SY7M19yhkQbex",
  "key31": "4mBQ1VCM8T2nuqh5hQaS11981SzZncSeEmvZbvCv8T9dLozZiDR3Ksb1DTcM5FWNiRPi1pMCqXvBPtkZXXbKaSxy",
  "key32": "5rqw7apGmZpsbKqppcopsEFMxDN4k6VZQaWzYTFFizJHjxFV4y9DmptEKX4969J5uSrTTQvHco1JLHZDbGP6Ze5D",
  "key33": "3gobnmrPAMhmbtb9XBQqPJc25gK7kdGVJezFnq8FkxPArwGtgz3bQ9vqRszPSTKd2nBDKsBnmYLDoRmZg6jA66Lg"
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

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
    "5uVM7MZCvoxKxXLfpZjTLdR16y2YeQSAn6PSiRQzvLncz2CvnM8NEz9ZTr1n7Gqgn71c6KpvKWHnes3zd4McbATw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a22TaeF9jo2zqwjh1wbCJFAWgGYa2nRXSUuSbrBYrTMYvRVfwoz2RLb1JjNsCiMKwYK5mfgJZYtV3hcHDf91kd9",
  "key1": "4FrrrgPe73dBeB4VFvnra9aycrZ4VTQTT4Tp36SY7tw9XajdDJ4ZYw8Bbvqi6rG1wowPLPyqtbUCYtL9ZVBisDRo",
  "key2": "27J7FWnw1z4ou6HHDTZXbzAS5ChqeFWRrR3htWSD8Zk56zVffAXy5GSHNt4w7JkLhLJFYLWjha7XajTEPVkx27uZ",
  "key3": "32wH2MD8W5Nbj6WgFoZZzygR19RJ77C9rMHXMzycJLQjXot3nf83fxkDDCLq1i9xvBevLYVZUsyqiCc2yQbtAbJs",
  "key4": "4GgcB3aMktCs1ZvmWuAcJdpD8wd4FfwrsUrY1kenTLjStJXmCzC77uGjAhznz3vHKJK47w2EZmy7YXfTFML3FuMz",
  "key5": "4qmcKE1645Hn9MEMnRSzYq3oZPwVnLcJoQdhFRJEdo4Ki5ZLPMdC2Xev3z177ynyVWuZ5XpBwNJfo65sRBhTWoL6",
  "key6": "64USkPXqgFAfVkZ2zvR7oz53ZuBk8vJFhf52iBao5DGXDgUYjFhJYiuisKn8vJvaXgWdMfVDEKc6cv2pkY9r7bar",
  "key7": "2NsQLzNbKeg2xF7YkfFarpj2Q6FBgkrvHvs5uGFMPBpubKXK3H5t8cyqPcCrfCdaR3Q1epT6qyriNFmxF3r9fP2u",
  "key8": "4gLyXc21dmqvZnj5numYrwNsvHMiFA6ahSYey6T65mpkLKjeMUGkAeheBm51Zoo3Ni6YgHcpGCKsWd5Ki5MhSMyk",
  "key9": "61d1EKLQomzYP8vpGWd3AkumTMaGa5NexeKGv949YBSg85xBDvsYR2i8RYGWyFgo7jBi11Df1U2RuBSeJwrFr4XD",
  "key10": "2y8XCn41LsGneS7ryJCncBpEVUAeMuuCqgyX2c9916qQBtBNmuujRM1PLiq4AJw9fuAdTsFb8DqiiiGXUCkit6P9",
  "key11": "5oe1wLdcNZrChzBRAkhpQGemsLqctBUs7pDAwrgarrCYCub3yStto3C2SdWen75FzZbrySdb1XrTgd57z6aXZcfu",
  "key12": "3Pp3GjUAUi8uQaVXxgv3RfdKUY7s33vVmtQpzAau8ZHM9DWRhRwYYxCzfFF19PtmXoaEupk6b2PU5X68Rcn5K3La",
  "key13": "4RuZqeGJHcPY6bcpdvDxrV985oPQT1H7VasnXaHrKWheYNxRkY1eAcPzB4ZJh4P9avSQ8ZxyyZaK69pLmfXwZEKB",
  "key14": "2UcxHKoyAATaZ2GXv241t9j7iMqkYQV8ZMVYa9PmLtGxGh6g3asb5DTiDHGbJq36aJfh5QE4exwquLPbVhrRNMVw",
  "key15": "R1H84mq3MH9qkWkaBBuxsPdMzdawXK7ZYZhzLhyxyBeDCFi9kyjhgYkG7y13pR7hzqGyr6PnFyjLHvwtf28uPs8",
  "key16": "3bYpeKMi38Ed4WpMuSbDM2wQ7KPmZo3czcehkXhBBZRd3ny3N7CvCZdsGP1cmxgs9ZQytBKPgRZzTfTu7GgVtqjf",
  "key17": "4YT9Tb3awQ3Fv1tAjfGtpfBq6q8ZoVqgbAjkffcYPbW7QUQGsXLtiSktG7kL7R4ZjPoSmRZ2y7wRkMGcuQcqmNXo",
  "key18": "1R7G6MgLL8K2MruRMNQpMSqhFknD77K4ddN89jpevPCfPbd9cz2HaCNwGWayebMFRMmBqYrxyt5jF1NN9wMWRtY",
  "key19": "3wzJ9vDDEsyhGsWG2EWcDKV8BcHxaweccY6QX2ApWt9A2BdzsyyHBQ4vKvcr8WA3p2Mv45QJMr13xcABGhPac1SD",
  "key20": "Q3gJjd47E6afznYkG32CeQDZQpmM7dGdP3puMX523dwqEFBBm2sa53AnLsX6dZJXaYjbe5q1cZjtu9qMkiSt4cq",
  "key21": "4crsNPSy4yVMZmWX46vUfBVMMpLbEeF9wHG2WYwEo35dzHyYBFoTNeRvs92zQU2C6K3WuyxP2hnJDna2vJspu9mY",
  "key22": "5TcTwCok3W8MvQkvXMNBCqGGBLingRMymPErieS6P91LMiJTb4bPh6yL9xXEQBjQbkUmyMVvgUYbZUVYpRDMgai4",
  "key23": "4Yujn6JcjDQgaPHWUNaxkJR3mzkCjokT82dM6yAM1nCSin2vH1cTjopC3iwtB7djUzxDFt8EHHTVTAtVbWEcHHk9",
  "key24": "4FXUg9QukPa1HQG9tVVC2e2kVum1agTQPvDrCjVKQqTXfZ9cj6qsq3BohAntUwjL8GzQrq7J65L1HSYcmRkoQYp2",
  "key25": "2oRqjd1udAqNjK98dRbyw9sv4QvhXbn69TfhsotmH9ptYwEZ7beHJ9WqHqpPzQSS5Jij85indnqagfHkryew2yYb",
  "key26": "5KzuUPeUGAZ1zHaXFkB2WctdpfrVdsDG9rK4EY8mm5CEfQCCvdAYQTuEN1XoYoqADutTEF3vKrkg8VdLwoHT8DBd",
  "key27": "3YzMfpSyR2trkRPzPukCGL8ztwrhCUp3ya8UfbHvwyQ4RGf3GPwSa6yA9Vparg8Dp3ncBfts9TyhATYzqU7YV85E",
  "key28": "2qbqqVwMiiw9WnXf9yhAnALeRLGKR99YYErzmKvwGCEo5cKBVbWfw5jSTRvqNVLbbsNoFp8SCLzE76NX7nm1tfAB",
  "key29": "6116WDLevXoCF8G6DZRKqdQv2qXQfbbDyDLJEpJiaXx8j3JScD6ADazkVdmWjb6bLpjJZLSVUfbCCEQkHkDoYxwu",
  "key30": "4qYzTay8VCYZbVphJbbsVppo4qYxsCgzh65ZcW8iWz9uPUPrMWZFU7wMVpLEZVYc7Bv7Rr131X6iJJxCbenvdKbW",
  "key31": "5UJUGP2Nfe4pf61R77ajYgU9hwWZwxsvbkcW5H4Zh6RVdYYHMsH8LLcuk6NTm7wZuY9RsrakbNLC2qGBKHvdzfcx",
  "key32": "4am3EJMEnkydDioaePgGczHBwpRyCx1PgM5smQnmknrrf3kjBeAJ38sZPXvBpaMXDjzQTra9f1gJxPB8rTvHm5gz",
  "key33": "2DMgaMjns2uthNAwHSs5wU9EfbfHjqbRYLXyuStKASmwq2JmFLtdWGiHkYs2jePWqbhgUingnwZ9qaF1zRxSZKvb",
  "key34": "AyjLauMHDGVLT72qgjWUYHEKCfj1AT4DUH8HWwYLH7bqT4UX7nkNMQaX21sjRZnBR8jRrkf2zXMCbR9MqaMHpJa",
  "key35": "2M7ZcccsN3LThz5pNeN5XqRCzdcEUhrY2QUe2b9Kp4Do8C6zYDxMBwK1PCEDVuDDKMapjXeJK9N2MgcHQbAPVd1L",
  "key36": "4QAdccnhFfdLcfxARquVeoNQ4tsyeXkETyZpTVcwY3HSmGzuZzGxGSM7sTYLTyRTbnkqgj16VUdMpXDyNTuHHNf5"
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

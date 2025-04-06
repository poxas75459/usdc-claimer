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
    "2o5HKbW8RxSvReH8RVhyRtFQFPPXc3AxGHPf2jtMzgnFpi5TG2QVPPGtPkY5mhQPLUMb4YDJJeNh1DnrKjhiwRr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6tepWfNVdEJRn598Tb7wppJmA45QjEAuC7HhxM2uAqBYMo1RhScx7urvneCVqrZkUQjw12nnLLUHZntJVb1LES",
  "key1": "24v4YM7LQawXj72QD1KmBDU56xhevg4A7Pfdo2hsEEzeFCtS641tsHAVqK5zraHgrcFt3bWNZPC1KcFQLy4LG3Yd",
  "key2": "322f4nYUHmtDAqExyLx3oKpdNmTtPxRgm7j9F7us8sgn2tJZqb1dkhBw3B5ssGdzZ4uUdRa7TbNbMzqbbs8wnfrh",
  "key3": "3Pt5HVzYGAexmmMYQ4ePWUtuLsbtXqFgWh2kyi7XGFnrQMM8ccaPcU7UBdV7iM9tVj1Pr6oUX3z3qmqanX3YnhZJ",
  "key4": "4zNmjYNqDaeMpks1JUSfBbXnFT2HGXMP3L9Stn4K6amKvjuZHVXkhoHiuo56xs8JPj8Dy1cK2R34CbVsFD6Mik8J",
  "key5": "3dJDBJRFUzURVG2YLN9XnTAAc2MBVit1VugUhxV3dLZ4h7en37EiGfdBvCNLMgdhVH5ZV6mtfXS7e1Vgch4TrUxC",
  "key6": "s6dTuAEPo5R4V1DoF1VbMNsWYkMHh6YZpMAziSeCWcyYjXkqwBb9BnbRsJHXpcBV85vxaPBUKjPdZkH92oeKHaw",
  "key7": "Lbpw3gt3hJykGZBVuhFvZNS8JKtRLEomXW67k4SXEC9chUoTZ8KDy2YCZF4XXAdgpq1znarkfxmn8bBksv82UWi",
  "key8": "41bWwVeFbG5KFd4VahCEqB7E83Lic7UNStHzMMWQZjU67Mh1JzRfNQ5QoHzA1Rgw54YEvBYVyZd8peV3ySkfXAb7",
  "key9": "zayNuNt7HgbHKFU6gjMHR89ziywjhxTZwf99FdEvPd7d9uYvmNaFsDd7i7qsESNQLHk7PDTh5o6AWGTSFcD8wK6",
  "key10": "5xhi5zCqzAQFuvVZ7QrgFdJ94VtYd6B8M6e5siaTk5JnckL3uCcYwdmFbWoQpWpPbhcYhV2ZmhmgXAQPLR1M1Uig",
  "key11": "8cC2Ld9cQBEgamziaj6gKAKhY5pG7vkYcUspYE2YoqY77nJMwmCyXTbts9fnwW1BZZLnJf4m4vPgLhgBKG9rdXk",
  "key12": "4kkX7V5HV4ri7E8gLukjYRzqpT7MyExQJMe8fe4bnUXL5bE42vDZDV8qu3w7RBRJZoTHv6CTfwGQfqiC2cc6puR8",
  "key13": "VQTfCH5bAHRq1rjcNLAwCLQuL8jCjYZca94pBAMqusbVZzwkg3w3fw2HJ42DxX5472TtKudtmqqoZiRDG4RNGvp",
  "key14": "4WJGyD2hpcV3nmnrWwNTPPqi46vBKMB3gEisvdJQydN12z4gC4e3RVeR69r1joACSvGPwuAiYnvPSTfZzLcayiD5",
  "key15": "nsvK5Dos5XpKAtSeA8mWYJ9BkoZAd2gUFNgVXG9JfZNh7NvowrSkqxvDaryPA9yn8LKpHno3qLPC4qZQux6Px7Z",
  "key16": "3EscAMgni3Y23EjWUuWm2EvhLCr2L3BhyJdS5yzkcLCyD7gWY3phkAcv8tS9HgkpRYvhsMq9X8oYVqTBBnuSEXxA",
  "key17": "2TpUZBQcYRHt8p6jVYTBP1hppvJUNLS59NACRh6b5XY7z9h5MPafJ9UWVVwUWuqzrdevqUmNyHTojhq6GJAHzwcJ",
  "key18": "4i34gKFwnfR32e8m1zifgyATRnKA2CHnKM5s1YwfQtVxc9Er5EuDXHBGvJoJ2uKtFUXFaEkSSWUaLuGNy6yvcBtD",
  "key19": "5KHeJsYa9KaLueV9tFrm6a7dP7Skz2MwGH4p16EshZiDQWEXGCN8NfnKBut3AJsAhsYRHWL3xSB3bXoMBTvaYjeM",
  "key20": "3wvwADLj5C16AqQFayBsyqcCEMTRHiWav3CxK5HGpZU9r619fKY25CbDfKekgBNHpkjzLCD3Mn1PBQxoS2DJP9Lr",
  "key21": "5Be4t4ZcHsSYesGeUg8t4LHcqMmrCSaKzLBKYbD79Bg9Dxs7TcWmaGfEwxV7ucLNDnkGikRTzRstfCib3vH8Sbf6",
  "key22": "4nVqN8AEEQTP5mRUyxKG6kAskU4XuQWEsnCP2S5frYj36PAyLrshQ8MGpkY3igqkwMDFb74QL7krZ9sgx49xZyf4",
  "key23": "5tyiGGFMFJp2VEWVNDfee8sqmmNYEQvjmGmCHHpFEkjmQSvsXFSSG9qjEyqU6TSnuaLotefy1auurURSTD9tDUJH",
  "key24": "eTGWbtGapgjphgsbMpvNNhnwyKHwHP2BingB8c731i128pc9DpKZwZ1Sdk1v3xAWViYasRpGA7g7HAAjV539rvm",
  "key25": "R67Tk8NVAhjQHhpYPF5BzJJqNnJXuH941nFLsApN1s85vXbMzd2NdC32Ugopad4gXwvw3vtaB4iYgPYCv6yrJHg",
  "key26": "4KQDRWA3qfVU4oJEWLZX9sZkZNv8iK86ko3mB5kQufigmSHBbk2xVrtZoKv2iKQy6iyAELaHEYnQks9SFeCvfPts",
  "key27": "2faD17K4HZa7jbyLgYTJrQngYmhTKgEAMgcAkYBhPjMPusrE25RCKABCiB7rQ51Dh1jnKRmahmsmhk3SpsZCziuc",
  "key28": "2ZJ9DVfiXzp5kGVgv8caZnX7sBSK5sbUtbBah9tDAUZJtWSZrKUWdXyDKSuJYo19VVGsSpC9n7tRoiZ5sqVfBS4Q",
  "key29": "B76qpwFpgcJqhW2YEXxHQoDmefhXkdfqLW3BytvQ7mEjqHGrrdCtiXrhLEy7keLbj8MeoBvrkcqAgVjosKaivuR",
  "key30": "4i1ZXRb3pMpKAyqmgJuE1Fh8RBw8ES9MR2MMejMJ4AENHb1vJhVcQAZT8EKqynj1jpDJZTYwbviTtpSg3xQe2Wg9",
  "key31": "2Y3WSKV3Gjxq8hsUk92DtHKQwo6kWSt148dnQAVF6wgQsg11m3LSENBaq94TucN8gM7C7qDRywEpUxU6fE3nsDJs",
  "key32": "35ibkpyWhSNw6FQWKz7mC2HF4up8GicYazBu4Ax2xDTyYua1YRKutMSbuKFTLN8ZyjN6jtApjJd67oRD9qCmdNqu",
  "key33": "5ubVHgD5uCjyTa8bPtZTPYgWRdWxZZCeVjtjyQwd6xceuCunzzpbUDbYAjQLEfYgC26uvBv415skv1LtXR9WhjoB",
  "key34": "5y63R6GJ8wRy4WtgCY5HJVjjFHCmT6aLbZiGqLLn8SX2b45u37HDy9VS2RqBZcm7zrbTtZh2q7BNwZ1QdANa6bZw",
  "key35": "3stLkXm5AmqNkHZgEHEJ5WFmX4h2zCHQ9s6TXHs1UtqnwK3yoBi4ZJVrdi5uVc9ERmicXBUrMeHqL8L9yrt8tiDi",
  "key36": "432pURuj9oSY6PTqLK1u6Tht9bBaMbMUpRxeWZCjHSSv5Zxhggw2ZMBr3tAxnbWDvrvJBg1q34gGVy4GAD6uwkXz",
  "key37": "5VnNoSuRvbto7FGjiqcmxH19JLBfvcVnzn1SSqj3iXEp8cRaHtGDyKJME3eWhGKbZvQi7zHNeUv9ZmYNtytxrHDt",
  "key38": "3inkLqtzgBabXZLLFJQqcr61uP9qyxE4nU8ZxcxRkjXEw1qzokZ6iMG5c9cjX7QCHEwfVW2zgFBLAzmRR5Ao15Pv",
  "key39": "5a6HberiCE4MSrNRHrUxJmFgtHbJk6gxsG96EpYvF9vWM85XKLAkBfH3qiava3HQpMLMjMjpywoYJmFpPPP6naoT",
  "key40": "4SkFoJiC8TibNionf26HYxfjCRqjh87TrePnBUK1rY9W4WgjLENWvMSoQMjPDnnsu3Tt542L8BLhfvJyVSSvRnZf",
  "key41": "4PTQL9XjxBQRnabTZyWyT6X7AikWKsU9SzPWyaWDH9gC6AAiN3tEyUUHK5cC35tdLmTMRPFVRSDE5pkmaMKpVJS6",
  "key42": "5LrDuFEEuS5Tj5bBSaz3tg7d1Q6RXmpxfX1wThgjY1r8Lc4NrmcuWZz8HSrhKb3Aqw2S81a6uHJmNY5cbAGYv8c2",
  "key43": "3WUAzm2unGFgYJVDPqe2ZJ7QRSVv6sWSKUuJqy9iCSkrcbwbGfi4wPs61BxcYB6dWTXXaqjE56UGvH3v4Yz1PWZ2",
  "key44": "3nUB7tvRJyucFn1fp9EPVQjParJAY4mUH2PZ9JBEv6KTE5S3AyQKDN91daN26K1PcwnSMj61M88VJ5SRvS7jVrGh",
  "key45": "5tsG4WtSicC7oZ6JH9UEB1vftCy5FGEdA5L3of28FmfAwARwik533uAyJXSh2mk1Jo28zycmieg1jUJAf5GP3DG7",
  "key46": "5wjQVTbLZHBKRwHxxf545ttzA2Z5QuDw2vyAWQ9tBQMdKLMxyxXo1Qd6vfzFGxDeFYbojnLQRcQmc6HBYUn5gVc1",
  "key47": "22UkkfQakPpyzBHM9v18S4d3apAeoDzNqQBRc6Y7NYQjVyxH5fncsLA2UYdZCJ4cSZg3vPjG3v1TmnkawN9ZB8GR",
  "key48": "2Es1wN4sEuepk9JDGVyDbzTRZAoEQpAy8w6rxKt3XTfYVkHVZU93dsVxXZj7BjijmPxn1phFakV5FgViWrwaxNCS"
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

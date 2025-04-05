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
    "54XA9qmYrnihu9knT7VmPWQFFqdJofTwecAa4N7wVwj3hStuPKWEjhUHT1MjA6U8wovUnpDGiLU6ou7FGDDGap8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517WeA7mxkVkyEdac3Zk3qmkus8vHntPtvQmN8SP5Qg5nZ8K23nTP9BN9uZgT3ANdEJ2f2yCX8vhXRVLEHhrNTTB",
  "key1": "4r26YcspYTzb535eFctYcAAaRfnAZTBfu7zoo7jQ3Kj6RdSsSFgoRe6duhVS2Fg2ZpdNNZpRpMnfPn8s8Ew5fLd3",
  "key2": "5EQNpKkaFxqnLAtSM3UcCECKdYzNDWAYJWhAejZ6QWokAk3Qy3EWBVWangCfYXZ8YZufLbGpAau9SjPCGP3dPHbX",
  "key3": "m85ZSuEsjbXK76kt75MYEeF2LTSgEidZ1Qhrrbg3DmvVEpgeyG9epLJxT94h8xfSuFyGgZLQ13J2NAdJ2m7nzrZ",
  "key4": "4wxdFDSm5JcXhNvhMMDqstCaX28QYQ2bdtu9snj3qkTKXNuSjMJtvgJULCHyJK38jfuSXmRbNrPcdkBoFMVgfaod",
  "key5": "2YpwC1cPAKgXvKBcq2QYFhn7qTCQKWG9Z4n8JnePCybKMNLEFcnp17jV2NRgv4jWXERiuhxQhwfRabzNH6Eg9aQ7",
  "key6": "5vSim1EUXRCnEgwii6w1G1pJUXjYTNdnyNj9T3uYV212ij5yN8tP9yk52goVVXgoZ8Nj6kSCrUbGugz4otCZZNNL",
  "key7": "4P6Tse99Vkd24y9bSyr2qZYpDskPmj79VhyYNKQS2PY5XDYiVscT8rDabWfWH8ThRnujsRiPWSymUdBXTjRQJF8e",
  "key8": "9uzPrCSrqhjCBQNC9gF76o9JS5HXV736Fq6WEZu8zcyUgVCspkuMXbga2g6tv2fRVYSnRQjdhcVbQkeS3wmfpsN",
  "key9": "twfLmByWY4FpEopmoBYQG7BQpghtYriyuN7tNQdw9gF53fmJunwTGQUC7Z3ruKueBz5QCDieTqPcecfceD1uMng",
  "key10": "2t537GUVARgr213NAA9qR7MU8xBzvED1YeUidRWQH5jwjoVh8eCwfxNogUUxMEGbNWQzNs9uY8FN9Be1mZ5wJu5x",
  "key11": "3abqbuUjgnKRsXkVWBzF2BxzQnEJe3hLjsDTXKyW6GEZkjt65AeegRh996NpSSyhWiprZf9RKvPcqSkqgU3iSySj",
  "key12": "22uRVkpbMPVUuvHR3VgiyzMzgbVipWvDtka4gtVn1LrCLusgXBqNnHwDrLby95DkxBBVwkJVY7kmVwv1KS7sHcZY",
  "key13": "2iSUMZqi6uzR41iDAb8s9AYLf768eev2sq16YLHh4ZBYHN2AhvQkYCS3TvsNggq3xQQtCu7cfwSvziZxk17uJzPP",
  "key14": "4jyKq719zUszVJxw11M6myX9Y65mRGYKiJ9JZ96TwokQ4AYYH2yBqYfHGXxDaGiemQwdHLc16PrE87i7sKJQq8YB",
  "key15": "586Rnts2dbFJ37i8wwsu72jEkspxT3Vbgjf2sKB3zeanjiLUjGTt4MC99BRb2RHrB3CmrigJChw9gAYTzjzTsXY1",
  "key16": "r4oZ68ogCbH8cXkY5JoZfBFcaXRvWGFxF6o3mhgDNAEHsMD2smERHJzXxiNpNRWgGpUidA9dVwFn4v6kXmsmLb1",
  "key17": "5phRgqWVeWzQwV5bTrq59fybWeDuxPqheKVPJ2FE59tS6uiBGLxbjxTAFgx7UtAtxvUef9AW51gS3ZyWsprpT5hh",
  "key18": "3x6HhkEEKtA6mzMzCsQ4b6KRDQc7BiqJ6SmtgGos2egNTTaXkfrJGCFKoygkHS76sCR9aVwF7u3XYN5CZzY1Gs2f",
  "key19": "4MDga7rxU5V7inqi8yQaf1w8sQa4h34Sc1wN3gq8E9uXvisdS5vhWiuwSfM9KdKupWxHTopPK8E2gjh7Fwc9ocNr",
  "key20": "3CdzDnP9N1MG74EmRpDetZtE43zx28bpuTbn7zT5S9YNZFnZzkJi2opPQR2KmNyok2YDXqqN5ekpCJvP2FuJjuMB",
  "key21": "2B6ppqi77ATpYT5DLUKY6gAPF68niihYRTXyUTAzcEAoKn9KSeFVYJgSWd8EtHUqmVJzXp1caLn2SMAuSLXW8YnH",
  "key22": "2WoayDPxF5PNj6cBhRhyEAK9mhjF29VQhLHPKCRcQL5CDV9geL1FSKHibQXaquQ5DUg3xKk4bvZqPwwnHzoebJao",
  "key23": "41CT48PX4o491iTGaPoEkPSiiFk7Z1FuHckmCEdSruEmAFGr5TuYXjuTmj6pT4onZqBQYQPYVeh1Z5Ki5ksTDiXV",
  "key24": "23uDYrnQK2tBXEuYnd8knZgGhN6XSKkPtZnikPuTjvbaHvE49mqtnTMQPnP71HiZ8Wj34xPHzbrRtLMqJZkxrcrE",
  "key25": "3NB2jDPscDv5TvoxLFt8dcZH39M4mWtKrPqaUbgzhViRAzebFgCXgPXnyESC3ZcGugsdSwhwzfCjs8Mxmst9tiDH",
  "key26": "5SmPUosQYBTBV9Ve4TwPg29eYer55t1qg25qeXKBWEoiW9wxtqfZ5mstjETaBT5h3eRGuApAksp8sQuxLfsTWcsh",
  "key27": "5huhdAhgo3sN6wWGqcnbwghX6F4HiHFrghLgH8iyk9YRT87K2rtBdzmt5GeP1K7L7jm2J2ddy5hrwJuTUPx1csdA",
  "key28": "5r4a3koqz4tLtr5F4cJXXEkSvvHrew2jgyGNHvbS81YC5qUwdMsfHoUi3HxBZzq92ACexB7UQe8WNtNeYWg5QfAk",
  "key29": "4ofJESC7uEhcB8WDp9MqHShs3NonngFndUyJv9tSh9ZdKGsixKAiY4iKQ2t7WaoMenS9eJzteUajR9LxAmaEHEbr",
  "key30": "KKKV8Sz84Ydt47fe8jKBHWrPitg6bEaKkotPR5EdH4uQikkV2khtQCPxjSSu9WSSX3QjBgMLtJYTb3PSw93YPqC",
  "key31": "4X5s5gUrp2jqFTeL4QsEhQYEHiVc4hbe4AxiTv7pWDpxCSDyPVKukPDGL2Bo3nP722XCko9Y42wRLH5hr6Bhrbri",
  "key32": "2dg9zvFZVDVSaqnPz9pyCSq39doQJL3NrK3iPcT9VgTMz1W44FSFDp7NMRHheNsha1BsVdrcA7yKkLL29QuSBx8h",
  "key33": "48k9AtXg7vDTWJBKANzhd3bC4bv4qH3fAMiidwZfd58JNgpLKV5wLxJp3gFy2q2P3wAeGVf833cimhVYaKzgYgGw",
  "key34": "5iyvHV2NsZC3zSntAhXVgtnN4UXvVw3tBPjT9kQSyeXLbnJmKLBVga2of9WiHPbJArpbDwVy9rsRgGixKd6PPyLm",
  "key35": "4vaLbjWPVC3kYJfqrX6N6aTaoWhRLoP2vsX9J5DnGzQzbVT7NacrcKvYiAwDWJYmQCDR9GWovPboTpYx9rkTBnEj",
  "key36": "2sWxhwafMYWwUSNHxVbuHJNRbSfqnfoFyj5h9CtNyC43YRpf1i9RZTbbHN1458eBfchNadDLq5JnCgWY9QFSKpJb",
  "key37": "4wVgUva1yRBaejXvrJJXPV66xnxDziMPah9Z2bATCu2YzMP5ypDyor34AT7RhcAD4H3mcEiuqy8nMyz5SZndPBW5",
  "key38": "3CzDRJc5rAxRMULNbuaj1YnDxwfN2AKiGBd6UkZtz5bBaqkD4uBLr6eJReybsc9DnxqZ9Le6ZDB3rcaSEQkpjatK",
  "key39": "2CCN5ttUNNzkEunkFzeH4W8bgiJyxuKzz2cRVc3vbGxgpKo8T4ieudXhZuMiCwV7SCo72dZkXTgmXqNuJQ3hujYN",
  "key40": "53JkpJ6aZFsphA3vACZFnpYBNWfgf6Rf2gpHKXwSGJF9VLb21EGVguQDoK9GpRriKycyNng55u4ZdBcy2NEUwJvF",
  "key41": "5mjsyAg9nt7Se4RfBLNXbEJUt2JzrdZqgJpVKivxb9DikRZ8VcGm2AZfw286REKyYY9snbymrEQz4qyzTq1yg6Qb",
  "key42": "Uy911C3LYwLS4xJfH4JKTDG9zeEL6tejZrGMofZ14d5rutj79xQ1KKsS2SdbqwupDrFhzLxhivBPSEKmNYnAaK4",
  "key43": "4RALRHxUzcdFgadfzM6iH7xmvBU9F85b8eE4amBGQUzaToqMWZQRTz4YQSbQde5ncLGbAFhxmmuWfTxGLj9h7fcG",
  "key44": "5nup5o1Ma5yWhHV9BAMoKiRGRGS2XKPqgxb6yXb6CFvVvhePkudF1p4xfq3zSKZRE2pVTAUeC1jsZzhhBu33Uob2",
  "key45": "5USFxc4dZf5QZdRrtns4RLj9Zs4AM9Sq6cyq8TKWMPrNFznditfJdYDxuWrJ5mVYNQPGNpQiNzrZyW49dGY2cvMX",
  "key46": "2vV8MKuhA1a93EEyu6K2H6nhdRjrHYBMUc5tb67jPHno5WTLNsvnYMhtVCWHrapQ3V2dG1fxt3EasgUP41yXTi78",
  "key47": "4zQ9b6uqdYnW1XxXZJ8rtvdM8YG1GzrnHQFa7zTgsH8nemKA4PPCVwaX7enwVvdNoPD5wVaWTkVNZtN6ALK6Xify",
  "key48": "NLmJLuWCRkGthM4TgJJYjNsSdXoW5o97yiXSWiRZYnSAfBVwiW94esH3V89ynaqBQAATjbgFDyCsuVZryQpmpZ5",
  "key49": "2iZCg9FKfLDpQ2ZsGSV8KWcK39g9Q9XuP5Ah2bFaygyisFG4CJBq5AYuUeh1JmXYWn7xmLSgpWYp5FSYPMdMdbBN"
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

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
    "ktMHdA7M7R1zu7wrG5GwHzL5rdkT8HK8VZzbPu8TxXK1wiQ7KgCTandSmH7t7BQKCgnNkYTWBaTDtv4T1YeoR6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQbQYxnDJDCw63Mc4VHuS4dw4gPw9cMvmpja5kEhkTAefXNbDpqSo3YmfXWWK8Sme7M9X6XcbQxSxfTpFc5fGsG",
  "key1": "MGg8YtYMQpMuzP8JqFvzSXeyenLj6tiyhYb2JQFTTZakzJcbYs3khXam23MePS6RiSuNmqoJH1Q3yKcdnFfck7b",
  "key2": "41d6JScxmqWTVniAj5PRz7zeyzUPoforoKamUUE4CtcdGZRmcH1ZinaH4hwpJZsnJoMPQBQiMmxgUqvJqDFpbV4v",
  "key3": "3F9L5G4NmcfUWPLL9v8mg3LWXgtG6iD5NJicp1gB3QwwWdW3peJzSdXbF8GDn7a44fWFXoYcSh3TSRUs8RHWycsT",
  "key4": "EdUp4Ua3FxwdRM2tUnG8SPNrXpq3VhCQxEeeMq4rsdyGyWAXfdmnjACaEPo5NRTBbgnzPG5xzRNHaA5xuZYd6Em",
  "key5": "5h6X7LyaesPkoyCxwib5CjLv7nHDQVbuyVHRThWMnHatcBFv9k6iaNX555KpmPuWsBoPo9aQuHiFcUFZCPoMgGZ5",
  "key6": "3vmLNSpd2U4JTpSk72SogyY8g7LvT29uDrvQgQxS52rRFfKDRLJWyJW9H9zeNr6ev5WJFLegy6SztAGyCAbANeDK",
  "key7": "2SLUVnEmbhxw9GLEmx3Es1LVB6TSFDEnQxu7RTxywhEcLcxrq8L8BN7k5HAci6irqwC5RzwBwGiuQ3xbYaHQNUB6",
  "key8": "5YAHngtmdrXe3cby7fghSCJgmWhvVSbvsp599xL8bus2VQF2PxM4DLD1ymDTVexDsLwGGVJrcbWvAEKdLBCETazM",
  "key9": "wYSjvz58G7yVq4azJM5Tp2w2HGm5qN5W4b363YSwugwM4dWMB36yP9a14P57koEC48EW6kjjU7eziWvpoUcySzJ",
  "key10": "2d8VX7iJGB62sbeAJTFFP3LHDEXN6mLG81asfQ8NzjMXUNw8j6Ev9h6kW2pQurtS3nkroqDCfcaCNcbA5diyZ1gQ",
  "key11": "3GuyzvoUXQBM7G7QDsGZESVC3bUwHMC6T95RRUJRWUUhiaFRLXxZYKREnKaWVq1HqecWSFmn9MYSHFzvvUDzBGHz",
  "key12": "4JHiw55NAvwrfxfSWUiwkEodqpkZGrz2jZ88dzeVoXVw9iuEpt1wQQv2biRtfLyHaoETTfaiqbGzhXk17SYRQB1T",
  "key13": "3Qd3xdatZ5xcBzfHAW8dPwwzeQRQKozQdQoV4H9oov6C7WqVpRFosGaVs2yJyTVP8KvPZ4qD4Q8jg9DTGfhvrnv9",
  "key14": "46wijXaQFWBUzc1RSWqXkHcFC9gseqQfN4FXWeYrK5n3rfvkG5mABopdq5dMhvDxJUeS9cQ2jea8ZVZjKpHPkawC",
  "key15": "2EUqPWQR5Rw9PawHerHgpbHei7qdhiceMta9YbWvS2biKkUTNpirs563gL4nFo1o6UqMyC5XSDYskj2aGxL5PyzN",
  "key16": "3YcimKFiGxeLDqZgT5XzgFjD6VY3hN8Pj9haHDCcSXpjHrixCByEkxz7KBRdadL34RsiBVkkzYLLf1Cq1BGLiv2W",
  "key17": "2dzu5CiMsDJKcsGEPmWPZjKmS354xkpwJVLNNXbrPKdMiLKAVnduaft94vjcTDAgaHNYDVkRntn1Nw9F6mDpCVmn",
  "key18": "42EQ1adxdBiPrpcBLpRZMkTr6uvNasanH1933UeCKdAZNQG4vPRYGwv4a8xg2EwqNFb2sqkgiRHKXgWmCFvZnvxJ",
  "key19": "5sCcCXMQ9Rpj6FVSwLu7pRY7p32ZVLjjZ6c62EkCYpyAemnebXG1pCCVEYUmvM3zH76JXfddRPXui7sNzwfxVfZj",
  "key20": "aoBkS6qdW3aKJ4qxMfgNYqFg9jpJjmY6oJM3DVFh8XkfuyWmbuLdpJje2EnfHJqWEDtVuBks7SnskTTfUxVT4Nq",
  "key21": "2zDTW3Unw2xmgekoMPjfp4PiixDdZa23svDwZpVdnpYEDvVjUGZCiLmx4ix3p4vWxV4WAoXFUHSf3FhFw1ZGtcoq",
  "key22": "3frAbbLD8J4Lk4r8TEoYabdHtJnWqqm3bbcvXQ1DZzJB3VcFvMgqH6pRvUDhaE47hbw1C6XMkgVXMdp3V7wuFTdx",
  "key23": "3Wxip2RwurPuYu5jV7Y3pH22FNvq9PNmj3cTTnWU8UCUTyMUsmfvngC9RUmwTJzk1DjpwT3B4tTh3ZBoJN63qvsP",
  "key24": "27pZmDZZTZpTB3uvK3STqqdcTgiE8GiVPHLPte7BUVXFrT1xdqtgfdaFBt8SE7VXC4PcZcKnvBdS7v1P3nWxAMEr",
  "key25": "s9SpRHz9MQp7pqpPXPeBz9QaMY9R6UttPbVdvtsN3gMSsbMWuYCJEqfFTZWf7BTKjwuFb4JTHc3M9TWza5i5keG",
  "key26": "2xJR2BdXH2LqwoWLw1jJ1MpuKdJAFNibxwKvZfi8M4yXFBGLbFsryDhgZ91W12n4vqRcdVBk7TR9vpErKKAduW4e",
  "key27": "36aXQYYVN7E3XEPPi5g5VFddw3dgcGNqqNkgt4eoooPkGgV5n4V6h6ASp27AYWrYr8P8D7DorKV4W4Xxt8iJNFe3",
  "key28": "3GWrcn6zxVg5vBHJR34oqzP5t792hTqFeQBPUzQV5Tt82xfqPCheN8fbsVywbHSJhUfX5FsCrXP1kngM6Pmb9WfG",
  "key29": "3h5TQhcmqeisLGMz7edLqimQbkD2HTqyD7HgYHbdVztYdA9a8NDZJiwK5H7BprR8cqSp16WxqLjbHRvvwrnWK92J",
  "key30": "3zM777Ud4BSuA86xCtynRnPRiffcbPhBpqis6bLzyjM6HYmNozdDhgq1q3czCcXrBTru6nj8bDsYjKP7UVnwnJiF"
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

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
    "3Zv7J2hyzncJguxAqyJiXMrZ9y5wPuT63VXGbMCXDAcfTwfh6Th22hMub3ULrdXvmMhFyAWv3qcDqyrabp57uksu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LuPK9RCzPZkhkgG6S5oxCVZsv12jk6dn4ixwrrW8g4GYotHbV8JmopR44jBuGx7Sokp2QXpqm9261DgXsAtmPEa",
  "key1": "4PwWGAm5d5v2CzD11iMDUJ6cz4ASRnA8JxwLkHbb2ymcQVu8wQmyTtnst3gC8YDdhsM7mH2iauezi5XYMc6SKnSM",
  "key2": "Cv5SH4hDoTdT3Bn8cHezZUm4rjzZZLEtCnnFABwLwG7MYnEjFPRumZwUpwE6kF3bBDj9GXUhWfJEumHjq8Aynwy",
  "key3": "3ggjPqbBtZt1gjuoS4oP64iJAV4qeGKQN7AjLe8LoT77HuvF6im1cesZK9GBL9SbXSmMXUZuKK9Ef2yXNr1taXop",
  "key4": "ZKzJHD6sDMp22Hoak7iW3Bfgbrthr9stUjJiraPy6rYaKdgG5NHRJkvBKb7Tk3jbEN2BWkgYqv2ptdpeSypXxmG",
  "key5": "4fq3e6ZR5dJHnvH7toMTbvjGjXgEjP7CV8RVjFUQXCm4qTqc4xg9GQjxLcdYmXFRyZpziJ8ddhNbk7kX2TS5v85b",
  "key6": "2MuFhdZrysn5Hbjzkdbptw3MjhiCkDb7eucaS2ajcP1cFD4mcEpNAdWPpPCH1FzRVn7mh2vm8JDyL1xJt1tCEhmQ",
  "key7": "5XpnLQoo5Dybvk4adVr6LZqxaLrnm6VWCFRSt63WBPCMVaC5HZ3QSpGdr3a8ZRYfZM3FTvBKPYQYev3RTPv8qpT",
  "key8": "2b1rvFmFQKLXTX5ozKYFr8ZVFJLCRjaEJFNNGQBwktLN3aBziw6cxm6EfhMrP9PQ2oKog65UADqSiw4KaMCcMXDg",
  "key9": "5nTffZc1u6aKzYtBePitbmAdWsRyAS8diMURaWfU15JToAvirJDMUfkpu6na3rZE9oQaP4xCQuGNpSqSFLhuyTSU",
  "key10": "37LmzKynqwJHVjsCRRfh7d8saP18L5v2kbmcLcCqmvmfFrkQrKd7ECAu6eR2eR7RRfuADPJWkxmBRzB82iCwtgHw",
  "key11": "3qArX52kExFLPbvMrwuNqzCScEhmy4B124rL6ZWGPpENkBCYF62fp5qDQ6aNjofSJLZMeXnA2KrHhsctQEderWXN",
  "key12": "3vxNxeDgNrRTWqFrgcSJQ1RL6pRJTcbLXbHQxj3qwkAmGmwArrvgkYGnNd5CQZiwJshPP1HQBcqmkuwQTwpWh28N",
  "key13": "4uKopr5h2LxVJD8rVgrJwqfdH6r6Sxqt1qjxo4fMcB53e5quEEpLWATUqP3Y5pk6vkBbb9NmXQi8azmkdge41Hte",
  "key14": "3qkaAuHaY7wT7UtnqHVdJNrFPeQLrpfpLA4M56KinWsqh1k42qXYus7aj2RLH6x9byuFrj2CPFw4sskPTQrczLu7",
  "key15": "4iHgecPNBf3btFxN5onUG8kGtXZLuKA5FRzvWbs3ZbgrvrBnxaWXts3ece2Atq3h2drPKqB7EbYDDzqPVQTCH5us",
  "key16": "32yDpBnQDGRUN5hPQz3EC9VqBxHRhMMrGwFkugR6pnxuEAE4ZZnEMsj7PmBo1EBxM1SGBuZPbTE6MMbLa6L7FeyR",
  "key17": "3gfsLZjeGi5xVPuhJ3THb4tVku4i87K4pT5zNSisFtRzcQr5KWSPrpZGq5JiGeqLUGRDNxYyfDfZSky2NY1RaA8T",
  "key18": "rqG2kRcZiBJHVzA6f5ksfV1WFDcuCL3bS57ZVNq8CKGn8z7kjxxh5gM6nRjoZ9JxkxzTxLRCvmR35FcuZm48dw9",
  "key19": "2fTodDJere3GhHHQAzJe8aTH3krLcFTQB9LpUqUEiMA19tb9EXwUEQEyTVxrPFVYfyNB17hc6eXT59g8ekAWhPuw",
  "key20": "CV9fvzPTpESfrGViAVHXDyJPL2pAPqtUQWP4ALGj2mpv7qeK15MTRbu62aLg4ioPNxb6XBweqTXdQtJygY4DV4H",
  "key21": "2FfhAXozdjLArysMNVgvyvow3uaPCZVv5HtM966JnkwYgdXuWuM6ybG4tUJpPT2XKjzdncsKvLKUh6nJJh8dXPHN",
  "key22": "3fbmP6FyZbMHEEYu8s7bJnyw6SkNgoo5F9tfQuUhAv28epZzUBLz9g6d4PgNGv7ezWEcBBvLA18DRMDoX9gGQAtK",
  "key23": "ZZ4nKUgiW2RKLsBXPPn1NVNqYV1NwoiUbWKheK6bHHWgkfqZ7wknZZKLjGjGVNmGJfL3yEesPLoUPrPbmSz8AcE",
  "key24": "2EDBrff2HWZvNJn6BAj7qG8mnGQEe9HhdRCDJnG8XGAmdz7sfiuBz71dG6uZmkhfEt1jcpEbny2DStCDDfbh85ah",
  "key25": "3BpnSQeQJLXAUNY9VPifsAzFok94JAKfL2PXY2pSznfCB3cTGrMLvgoxSYZhngqn49qP1rNsnC8ZjN5YCRE2aoAg",
  "key26": "3HE6sQ8DYCybVHmoGo4LTimsTFTvJqSR3khke7D2CfuFpPbjJoq1C8suSSXuAfmLu2rQui9wrCLBZYU9S7qtTYQi",
  "key27": "3JuhNyQotQxrH1PouZ8pjKGCkojMYkKHvqzcEKDA7Sr5vb2AQZoPHotLbVoLyMEjmS8fR5Jywz6oT6hAH3iSuRr8",
  "key28": "2Mr8ZWdQFcb1q2QJCY4FKk8LDRnpiVp9JboWDG2EXGx6ANgTvoiTam1XBMGTrKrHbwNCQ8Hnv76Be79ZVANKkFRb",
  "key29": "2FKaRt6WTemMZRnAAjBByPDh37tTjdTXkW3vFgNFZgxAhWN9EEjtfY6RgFaeEUjtChPas1m9RDssXATYowTvVNar",
  "key30": "3go92LW5vLyUPnCTHV7S2uksjnubtZZh3tpwGucdW5xFto1NcNoaAd8Cm7VPLtbjXDUYATZaMcCRcQ5GZVJZXQkL"
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

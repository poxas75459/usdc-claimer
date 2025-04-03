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
    "3ZKYcrzVLKiPA6jMgYuMj761i4NrXfqnncjfH5fa1Teg8SCSMenPpQuAX7rMKrpMULVXi7dBMgjFsEGTgd3ofXpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFHSF7FXzR2rLrvamGRBU5sAAYpQZao1rMz5r3Gpi1RWvztp7QNnDf6J9FcymSswVEcfB4Df5P4HHyaHo53w8D4",
  "key1": "2kJZkwNjwZbWriYGot8PtS5LN39RBj7UdVLeTzNJhjP2ViPTzLjWKrcLavqEMMP3xz7JpR4dZXNpZ43LMSqXCbJF",
  "key2": "4ZSQVAnVTnZg2KAyAVewwgeotjpe4NMVTFUEhi79c4VCSzvUWngXdsudDvzBL6LoUS3Jwsk9VYkoGESxUkcxfJ7z",
  "key3": "5pRKgYR2nmjhPcvTBkJm4rkiWvnU9qgBJTK7TtXMLKhFAkC3ceamjxCdgVZtke5rr9dQGKJpYdmmmJoj9hscwQt1",
  "key4": "4aPyBLFMw7HY1zxBwCVJytYTmc8wkUQbmY84TqDmphQsGSyXWHGKLrrL7V81rqmLPsGGLZC6WFoSghGRJMc2jmNL",
  "key5": "3Mwt1sgSwVxkoS3JjQAG4bLBcFGHXzwbAG5fZnVEjTSrBvR91S5S5dXgw4TqvRYrep7rF55XUYQdbDWAyqLKxuuG",
  "key6": "4fHSgTArD53QLpRexcdcvA4xu21ZFkPNLrFnmMzzqTGPAENAXyzmDWwSW9JP7gq1YpfMrgWoykVzx9CZRv7RXTPq",
  "key7": "5m5RFpnrZ1cPUD8LqmFizHTdcqG8wXd2o5o6ooxgHsRkhgpHzDYE9KwZjWaBKJjGzinMgwdH51mMrokkoCjvz67F",
  "key8": "3NDEAU1pbC3g1QoeyvdSvv8J5kQdHKWYocM2ugxan1KeLLTP7FvPWoi3ZCDC5v9UkW2cyVBdg6axKsJjFFS455cw",
  "key9": "4Kgr3wn9HcoRPSs8tzUChXR8NgbQBC9scVYTwue66VErdSMdYBrspEzxyF1YA13taTngKpd7eQz48cxkQRWiTx4N",
  "key10": "3RW1zjg9hQVsqMXbrjVPAm6j7woPWcxNQZJ5iL8jsFJfWvh6J38o57d2VJy7rhEL53aoqWEJPtqEc4MqGH5FWsWq",
  "key11": "u6gftddyVc9MB16vZi11vz53M8T6tagNr2EabmB6ejsUDhLG168EfvAGjU4vaMgT718KtU1fZh9QSZjhArkEoPj",
  "key12": "3qkAN4T2AFPFHG13Z1Tk5V2M5bA8GzrhWB7Gg8DZwBcChhcLC2PgPPYopcYgHQPFQ21nNkCNrQ5yUEtt2pRbP3Si",
  "key13": "32XdPrY6u6fDoR73TZxqVTdjdo9HDhqzuj3KpZsmcZkAo9Y99TGvkxbQDZypGhEtwcd4CjzSBxf9Hinhhec22Zcv",
  "key14": "w5TVVwQxDbTeusNnLEW1f1xyT3qjCt2BUcXZRP7ZWbDdNeRQH6YjoVzrATVWdff4zK6vJPZM3svcVzai3g9p5X5",
  "key15": "27VjuWC1jkEo4MPHUCKX1JaKKkhCWAa6UmecjWCEUrAyo5Wjg2ga2Bj5sgbc7j2YAiqqUbgmiKyQkNvzCWEkmac9",
  "key16": "4mduSE8Xk2Sbu93Yc7FW9p8417cXX4ciFdZtXnNE2fwTK5DPsJV3aucv1sFEQrJxjwwBYBH1Qt55D9TSBM9DSsuy",
  "key17": "4VghN4sTmbVjSk6iwRvsXuvaeQ82m978KDbuoEpx1PAspuJPpBjHTbjuK66ikve8zirLxNFhGVcyAasWtuU1d3fZ",
  "key18": "kTEwsWj7v4dRqJH9NLsS6WT1ftpLRrBLdHjDk3rfWMdUuJ64Tj5uNrMGpeU2Dj72yC7qGVPyZwX9VBrwKpmPhQE",
  "key19": "5stV7ewCXNg6LaMe8BKofAjD28vxcPnXR6VPoanRzQdwwXJUqaCTTD3AdVQYPjuELd9NRckquy52kx5gjsCYPWX5",
  "key20": "4WGMcYAEDCEttGMPY13LPkLQxEFiJSH5U6gvcM4m25Gc99hXW3sJdDrxbxfhuosNdwQP95DiRa4hmVSamCuDzzTq",
  "key21": "dJGMAyecvFqz88hhASvNw17XGTYA58WYJVEYkevHHD5VLqaS2ZfxF9HTrTTUg2eZ913h5K3QnKU6968qfBnVjQh",
  "key22": "2S8zU3JYCPJypLbLwoijT2pFDGb4WxAKKHZcoWCBY5MhUASKi1M5zVvHvcjVhmrBXAnfuHi1U7CabPd1JHiC8WvH",
  "key23": "4SBviPjXnYTJSifad7GXWtPEE3fJ87PP773uGzH5KbQDE4QT4ikv47ZosgvLatUkdzjpcta5iX4geHT6g65dgGZd",
  "key24": "21RAh5KntrH5z7ufnuYGGrzFNBG6GvocvRDnm9KTjsp7iYAr639yc46PdRkfw8joX9b6pStVzvhkb2xkeScwuqsA",
  "key25": "5w35VWoHR2f6ojr44zF8tPDgFctWGi3msfwVkwz9s12pFWUJnofmCytRDMocT3mibEH9LYQhz4DoAsme1Z2GALxX",
  "key26": "2kwbQuQgewCcHcdGyDHfe3w7HFDgA88t8NE9pr4dozCMnEcoqS6GwuZhsRU9pQoTk7YeWqSpVkpuCbauX4Hj1hkL",
  "key27": "4Qgb7xsEKL2ssBfqd2LJ8Cb3rUnogXyMuuL5TAmVvAaUSD8W5HybnZaAA285JVUFFvUa4MSsxyEBfLoxgg3rUKGo",
  "key28": "51RAtTUYQVoGcfyjTUtyuxPRiiUqwLivuM8jmhB6AK1fpL3Q7zBcS9xowtjPi6nYYyirp16PCaDdLLMLFZ782LEc",
  "key29": "4Jk9EBStfdsko8oEk7f4kcEJU88a5wrWMrB6jXoHK5hcsJ1aSfbkXvFJg7C5X3j7Txr3vbkXtx3uUz2HYwrRb12L",
  "key30": "5FZx2ms4MJRqiNs1WFMYxaL7QHb33V53VP2iggsMXUwfFVVbwvg7zgctxfuoN7mx6qU9Ftz6Z31b3dPFnnp8JUJZ",
  "key31": "4iqwcLKtq1SdZW8NiQUypSEYcdjNHSGLBxvCZBiDJXLKFPQWVHNNRwPoE6VSxpnBZW4ehtCVcfegBBUQpJKmfqEn",
  "key32": "2eyYNrGA4BEYMvNxLo7YwvDXScJ4SexsPwLmDoFwyhmrVrW6Dum9CmtbYrWLsgKmAaSTQmJNuWEuRrGPEJPmKTCn",
  "key33": "2QzaXqLrGxtphfFSFjLgmkrAmvuBW1d86NvteN3XWYuBKFV9bhteu7pVFbbhFJwJc6M38YWHnoC4WzZ4Dzprjnif",
  "key34": "2AMGbDhYFbFhtdsrHW16T4iB9XNjhmvPbkHakmjGGdjwnEyBtrsFXjQZcTskATbsgRnWG9ef6sQ5dWrncHjYkk6L"
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

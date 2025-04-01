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
    "Ds1ySf58cUU3YPYxxu1nJTWEm9nHh37shG1fm3DPhDJfaJZQ2kud3fRbdHuSX3SwvCFC786rZbKejAPepEAaopP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F7E8CaoMNtseikBphsebnLNFosBRAyPEg4p4rzzDtHiqMRATdCj59eMPu71ZS2SPF7jFQngVrcX4owdyJKoe2ZJ",
  "key1": "4BVCG7EUAJBeyovxY1L4arnDFbUw8apoCWZpj1A6zC6ACEGvP28wGGUKZhKNv7w3ns158rRXkF8au2HDCtCMX8ST",
  "key2": "52cbGkZ2JyMBQMfvcJ2NQjbEz1KDAFLH7JNsRdPBuSC6SALDRVMrzKd7Kz7YzAtqQvKQgjCWthwDKvTi5244Dd7T",
  "key3": "4krRf4hHGdkrzYzUbk5WJ6o9Bn6zXmC8rcWwHk8iX6HFj7LMaHGK29G8W5wwJ5TCqYxpq6VqHC8NZ389Udpvo2u3",
  "key4": "4xCvDzjr1Rxge6CRKticBMZGyhhPaMEDQCLQccoM8FXX7z99eWDGastDCPSnDTnApXQWcdSUTdRwBkLj8TnqTUpY",
  "key5": "5ufu7JNCcaUP86V2Tv65mZJnbfTSbh9o7x1zdYsvrzz5rxUZ6YyDUF5WAEk1tVBJ9adEYjT71oScWVtCuKHVZw48",
  "key6": "22D6KGzjTAUEQ6zW4TxzMRhaFYATkYXETQU7si2WbkEQjcuW6fkQ79e2bhmRdXQMtFZxC2Ghg45zmPbKYQm2fjB8",
  "key7": "5YjZJ5RKVCvmqSyVU7LSKC8D186nqsvUhXdc5K2pDXWE8DaYBHq3svccBo8YfUeYfTNd1fLi2cuRCH1DkSZSfRxC",
  "key8": "5UHVPcmH4Em1sF8THeen2DKLXjpfpaPWRnMxJyzZJMH9Gn9b9ZMgLjiHriYjnxFva7CkWkvZQRQ88Wb2QqeScpcR",
  "key9": "ecAZCzAQ2XzDZdoGHtK4rxWqZjFgVApZ9spA9epwH2YePSJAqnrsULxpmp2VjjKSDVdfGyozwn6mQQcnNUWDZS3",
  "key10": "2dGigfQ5dSmjc9ZhjkcTANe8VMGiTSVroZvANkkLqQjMrt8xT4McreDXxZkFaTJrEcCNeMDkHp7JmpbgrawDqsKZ",
  "key11": "MSZHd3jey7DFfYhgEw4KuU3YyqFpf14tGh2SBgYA6wCVUpcxjnBJke9cDDr7pzU5fdk7YC76ZyfezYQEEQVgR5u",
  "key12": "55Fzc2hyZg6t9XNKYJhEmBrFHLPscmWK385Lx6eGQ9ay7Bd3Nd9hLpBbQdtgNnDEbUe8GKwBb1wb926RJtBWG2tp",
  "key13": "3xn1Y1y6PUssWBLsHGfBKtapZLFid62xn8CYi6xK9qTBjXSthG6kHsxT6xic53ycQiv7skpVz1M3sh1LX4eShovU",
  "key14": "Eqg1zoUgFvL5pE6kCxSp3dBD8q1cUGmw2tb3Zu3wjnDoy9E9RsMNRZugDgraWV1nK9TNGD8NwyMpihns7GHMMHq",
  "key15": "4X7rJUDZRV4ZopBHRgHmFs1vwUWqv5pzT9grpwm3AY5p8xkskTsvNjB2vXM2qskTdgitkG5rz9tKgwUeJmCxcCW5",
  "key16": "2VrfrmMRHjZ9SCiojhpQopHAv3iSez2dgDLwGV31HHSKD4Pkt9R3wRXWBPotdE6p82aog6F6Lk9hZPz8S4ZBQtea",
  "key17": "3u8DXk3v91WY8twZwK2fYoJK4b7oqz9atEdwLbwunvRhepP7pieBeF3BKZXbXzHNbCPVdd3ZpVrwkp4k2vJVrcKh",
  "key18": "4JxxSkJPqGFwARG9iztcjHdmzumCaH5kE8p53cCYGbtXPjTmbBgVsChWnQuguPMuvNrbFoqzu94S6rVC92xJW81d",
  "key19": "5VaGBZqXk6CcPperd4RCeAtaDqvasPStNrTVZfakidpGhpSesX1iVDh2sYo6Y4fMikjxnhp5cnATjVqv7EFMRCWp",
  "key20": "44HzNtiuy1ffMVLiGHkwkYeuHwc4WKAVNwdRNXF85CqF4xuigTeNmDpvtEFD1gQy7SHmNP1NinAXRwc5v51PN5yy",
  "key21": "5j2cAw9ELFY8pk2RoDAdPCS8TMJ3Dy3vcnn7SeEL83kJLzPyRcxndu37PxDaiMWuRHc3Vb8DCruPQhKKSX3r7o1c",
  "key22": "2tEzSepHh477Yp2kt3fnq8oFQibhVMJxevZg7KuX4bpvTbhh5YqSoCK9FkHZHZpp78Y9vRca75J58r7QHtESUo8t",
  "key23": "2YnZcZv4fctyUijMhVuyKCS85xvbueu1pBmsJ9aLvWcWo7Cogr4dVfdRBVWvn75o57aDWeEswXUqv2DXfsYXT3qk",
  "key24": "jrQasb7rUkTGZKv6cD1nHqu9xhMRWBfA1Z77hWsZm6w3UrG8PLimETpbrGkqMeiSEnj6HWCfSAgAJ6GN3JQMd88",
  "key25": "E4oQeZidb3crzYNcuaYZp91Ph5hy6eox8h9H8bE1mT5T7ed1poi7Ja3dZfLt3q1GMZDxEhy1UfedzGcXipHqPMG",
  "key26": "4J77E3pfq9SMsdCZgK8vBaSMYgcGdsctQs9WmfaKRVsuEKUMcsRxAamiU6a2D28x6s2E45MzNycuQRmJmFY1vG7H",
  "key27": "v6KaGm9dQ6CN5XWZkBhXZ2zdv17NKXgQ4r8sbpQucrTnXUktNKiMcVMS3ohUGMwUcH7fUdURgDacuFszAoyqRiK"
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

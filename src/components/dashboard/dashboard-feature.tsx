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
    "3P34qjaLb7nnpfXsw1jznD3mzkfsf7U76LXMVRJK9ECUPcd2nzdMtCyZ896VoLjogQDjsqE3YjqS3wdS3cwfWdY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ud9crkayybRsB6keeb64juSoJiueeJiumaDq3k4fQwxj4PXZmBBYFpJG6JvQm4Kpbg2hXZBPeJ7d1B9PTJZ2HWs",
  "key1": "ymhys8gtqeuHd5MkVMbTK8PupqKDy7GFos3ZVjdfbxniUSwdsQ8by2d5P6A5ifKbgTXHABEDMNSwnHv37yTvvUi",
  "key2": "3HcnFQku3JAxfXZpuRY3cRH1Zjdv6hMrtLiYDhHkTtvKicBmSnHvgGDjs6JSo3V9q77STF3KfYA44BJa8dh24vvV",
  "key3": "3HzmUeL8BEf6r9yA6JnoiRyafcp3r9tNWfPDgmAdqfg9f8fo16RZgnHG6Za844TeuGQTXxbncPSEzdbL6xMZvNe2",
  "key4": "2zov4HiKh1BQT6EHFToesxp4nSaHA6sLMfDycLnXcySLuX1ErvTyA6jMgtvTsShwn6x63GsfZALsSakgTYNaKHm9",
  "key5": "3CnD8QuPtCmbYYty3PVu3ELngmh6hDnWh7LJFSjpQeLuvLu2bXovpy6vhFH8tyZSwqkm2bRBXrgvJFDdvVBq5N19",
  "key6": "GUtimrmbi5jprnRzxqGsWuidYBucH5C5wEcjKaakRUPaq5cygbz6JnSuf3V9PWwCCJrfbrMqWYerBWLVthGXXWK",
  "key7": "46j3FWamB3DKGhX9z8vzuvVBkHeSDtmit2FprqjvKRqLS4JRG3RTbzi8chwdmjpSRmVoV8FNtAm6RcL6hPdr9j5w",
  "key8": "hEMmcyXehXbh7Y1ZjcUrsmRrx3bv1ZKMzddNGPLSqNtybR5WRzZaJKteCuKyRVKkoaabwQQLLhi2BYSWmHz2PJJ",
  "key9": "9hBPRW71CtW3yEX4WGKPmkFyyNSyBz5TwWHKREJwSAm1Fyz7jW58axv65mJsyDVnAGmpb4LKgVdfjZiCXxn4wNd",
  "key10": "4YFAYj9Mb7tWxmncxnekBx9LMPpWresKVyZXJeMFRkn2ikn5hTo3GoS4UsR79X6YpvBhCeE1rChMwXzfHrisVzGV",
  "key11": "5vW24UEhXnLBj3sMvLDDeiAw8PEaMZxEE4rxav95GfP1KNx74btwMpWXzGuua51kvScqjSsBNKH3jMJKRK6WSvYE",
  "key12": "ZhxeXCK5QbCSeSzWHeAsFMUBFUGg4QPUM78Nf5J4ihXVUfz66LWKW3rJ1eQK7WbJ8iRkVNjuEGXQrLCaiAxmFfY",
  "key13": "5N696gAvAKMReBFcrfF7ApKerUWgMk27J5d1W3K5ndz3SBXe4v5D1LfLUHL1fKtQkU6VJeSJvbDppuovMsZMNkxk",
  "key14": "5h1GyxSssTS9te5xz2GJt3hHQoNQN3C6Y8mK4PBayX7rPPDVNKUeGk2k7a3oLzc2gSCx2hupxRsD8i4pusAy1c4f",
  "key15": "2uJjmQ4k3BdZrYyBwrwSi5DqDqhTDPztjTan9zTAKP4aQ2iV7aXknA47cktwT2S7ZpF2RSqWum5ug6JKHK6u2YMp",
  "key16": "3gLsDUEX5YzVCWHngUT9Bm6vNa2RkmZQt3XYHvcDaWLJQpb8qRosKjJ7XZQ1zwaSHYUmHYJz83bKQXGLeRBvuNMt",
  "key17": "2ABAzxbKBeiauwUHBiNWgtANJWrH8nnwT3dkC4r5mS2Cwpf34DHri8AkN3SZdK4ZJQ6gKgqe1PGmo1KYPvuBNyG6",
  "key18": "2oUDDGmefLq71gUj46kS2TRDfkYtohamt26J6YQ3mkmXwyvqbbV9tAWVcDsdywnhRh2rBSDm8tNcExGFioJh1ehM",
  "key19": "2cUbEGBGXrbTpo35uJs87TLTruawf1iVzwKCQmbp8Kp7BvAnTG68M1zVUNJsFGBBfUzUAVcjktT5PyHbMGm7RqXC",
  "key20": "4g5ccCpPvmFeYZKgzh1iSCPdZzFD8XfJnCX1cbVKsSUFUTkXbwaJj9XmAobc2VjPHw9KrBfAyyNVgV6br4kJBgdY",
  "key21": "4AEYysCnT7jAjyraKKPGhYTcLs2VktG5TK1yMnM25CQuPrA1TWEKQTgWKepmV5q2rtZD4B3cHEtFtxedQ9J1FN44",
  "key22": "3h7eJVgb9fCfvUutbA8iESPFvv2cZoRCLjPrpNjtJJFnfkrgU8bz6zwtgQoRgAHtmqMXrLWAh9EZ8f878QReGAky",
  "key23": "5b6rsYCgtjVNYpwhwvXzoe9iWB8DM44yF4SbPk4H7V6xXL7cEEzgH42rZKsNdnmRAt8Z7aEGccnMz1AGY1Ld4RjC",
  "key24": "5YScJi8sjDtjw6LcQCorHiu4vXpLZnHknGSU85xeSUzpTZCuFSnbCnaA4EPfWx7vqHpUtvXBFfssm5LepihuTMbi",
  "key25": "467ZrM5EVnN1PhPsyic8cj6UTxUpDABaEaCXxqFyBFpPwUwKxF7ri4rMJYBfxPwtBdNd6yjeGpAKUyDDnBtDVJmW",
  "key26": "3WY4V6kQCDSmxbE6qRpqDBGrDNdSGPuAeTT9Xkqisns8St2DhwU7igbERXEDeRmcKGmjVbg5MUwiLeuWerM7RjpS",
  "key27": "25MEu5xB5XxNNGojvmSPiv8nqQ6URo9qW3E9JzctnUJnYSoKero9YMgYtpucfsSjpcKGNYCZ3SK6Jt61ZDwdD7gu",
  "key28": "3By3NTAjWnA1yFUhBVC75JN7BqcZrSWnhNnebT2s1qDDt56mqgFgdj22i1skzudJB7DUXyaLj2DRVaB6MPCD37ap",
  "key29": "2m5K2sT5T5sKg427cZNomwdUWtxLcK2w3HywJPNmXiS2K9pH57G3aEtq3TxGYocc9yooWopXawsbmvP8MuyarUyv"
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

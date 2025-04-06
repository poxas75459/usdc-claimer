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
    "5hy3WftTwdZJKykVe7cBLoyraieNUztPXL6PKAGai2aTTrB6qAVyJKnT5cxBbNq5FwQZgkt5u8MCEXVHhYnxfseV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e2gADVzxm4Bfg3uPXKAufvPgJbtcL6yYBn6DhkrG3jwyATyzdZhm5M2nhBt3DgtLQ8N2Uwney1GayBVivgm1toL",
  "key1": "588JRAnmZUBC3zi1jEgW5W8yiAVbXn1A68j2zW52rVffJCFNgZ1qPXcGNv7TMV3wBFLzwauUaFxzfQLQZHVShyri",
  "key2": "EmhMcno363pa7bFdZU4oVx2tdtHVKuGmsmj6VtikZfzejX7vCyKPYXnSkJKht9rL1jqK8EEHsFAFkiSYVqGNPFk",
  "key3": "2UMDGWHVGqV1w1qmXYGC6E78jbWQ7cSy4tjrgeqPt8rzTAcwJ1xdPz9ocpai7nqAZxMqt8khRQQrZ7cvcqL7Bsxi",
  "key4": "2YP6dk5f35iFpGDSXgwPL8dDwvMT5CS5a7thSTQLF9E1e1Nt6D6SR988KVAnGRV4FmbXz5TWEHvAF7zbaBp2jakd",
  "key5": "3qvJwfxBe7UZs3FrhA51K8dBLCd4jkzoA1Cyd3rD1VtGbeGvUqAVAb6sTHTK3jA6whXqJspx3YjUbmTtQwzrX9vq",
  "key6": "5X6mg3T8VqAccVJ2bL3NM7StY2CFtsrqtdRkFaLQyftVrYxFXspS2f2Fdo5jwy9hQZ9gKkki2NxFGtttzpaUUJxX",
  "key7": "2XxNr6bwfJN5PNUbva5vRofJr2axPha4T7oUv9xjEK66uBs8QSdhfuChZh9jkjRceLrhCFHtv1xubCy8WVra7k2k",
  "key8": "4rZYzh7R1SoXLepiMRBwAQLJFu1mFd2RiRcqz3AQ86yry1u7LZsjjTJRxnUyLL3HRQyPG3FjtpAQS3mbe2ALtCTJ",
  "key9": "2E89w9Y2KwVZa12yVMi36ry92w4nPG3UisiubczrJ8wnfFigtTRJNUfx1rX6cSEzYXyBwnX3C3GoJwBNhudB11VS",
  "key10": "5j7Za6xvqe7yqJvMVkjCbBpvNP5RyUJ82HChXyqMEuSPp5G9ZkjGTaZ8moLtVTL8tdVWtLGsmK1TEwLCyavpEKgG",
  "key11": "3NwCMEcEM5wK1GQWFVQg7n2RoTbxAiob9ZmEHDsEUhYfdR4R1h7vq5pAP8ypGKx1eDVESXx4nCjaB5ysYKEbSrNw",
  "key12": "vDhKfCT2furgobtjXqZGMJ4nQ7gPJgoTT8nApkvvbEcpCCpAwpSF6LxgXW8CQydXtqWXW1D9E1vNHaSEZNPyBjN",
  "key13": "4N7w56jNCQVEGbUF4TXzeWqwxeAQEXAR3vE3rmiHJJWkjRK2DLrGS3XoxZLUQWn1XjK2Ms8RaYUb6iQ4K2uNfpPQ",
  "key14": "2atvVhDMtW47pnDiA7Jz6QW8t68GaAskhMRcN6rKvyifVefT87ZKmw2hD2UZsvvwdXnwTkb7nYVKoDXMXHxz4X6n",
  "key15": "2LtaDLNJfao4WQ8qyjP1WRnhg1j3pQCufvJiUrsg1SEqJsZkccqd9dWeqLUpznL7PMGEEhkhQ6tKRGXS4pdnHWGZ",
  "key16": "42HpHg83LSYgArdt4AAb3MBEmFSd79yD2HH5HiveEPEE1WUniU2TCa8YnZnEEoweMzAdLiAzuJ5y1LzqnrRF4G74",
  "key17": "39Xr6tLRVm8ndYxkH7RZJLsthnscRenjH9qmKsVZ1moDJEYER7cPKigWzYuNDrAs2b7ZKsARYcsNfiHfwxCsZmZz",
  "key18": "3X3zSHBsc1GEKGmRRCBK9gP7szMxRfRna3CgwPEsFgBuX9XMdzPEARyTN9zYwEGbxziTditWXwYMnHjUD6QC2F6K",
  "key19": "s244B7P5oEBJFPKne5FAa1CADwRWyAbjTGMyk5PYXr7qqaKPB6mY5dnw3o3Aiy9QDLiXbdFXVckaRSfVikGNsq5",
  "key20": "32iw7HFjKyWjMaxVp6c1hR1WcaNad9aEEFRyP3oRpQrmnstoXzshpedV6zMc4Ym8HyKWZkL9HWK9cBMbxdvx5xyk",
  "key21": "3C1wyb5iRdx9cgCYt7U78iJ6QjevHZin1pLnLXd4qzB34GVMe8Tk9KERn9NJPDtkUvhh4pKwMyH9zY6U4CmuNrVo",
  "key22": "4N6dNcN2YSQU7pPTMBYd8iu8s4Kwi5TriadSPxpKvd7zgUBJnn1rR5wgSYnT3UfH8Nd5PhgcES67L8wga19Jugxx",
  "key23": "5pdCC56MWenxLjU54c3ZyCYStCKWWXtY6KdiWdqXcXbY4GcFVk3DTrDKUhq64FYPmsaM5e6kcM7JoDpbgNSEL3F",
  "key24": "2LiFP7oRpmUAFhSkFXbw54Axgmiwms5YuNi7NhiuwNoMGyniM1zaF43zgsTpFNsvEX1me2QcdzUKnBTEsntUtDnK",
  "key25": "NuQAnnhmGZTBj9E4tui65KJgeyPkmzEYmwXjtSLb49rqpkvNY272EL9H2oJ59rUjDY6iDFkX3tgDxiMat2Umaet",
  "key26": "5myJRnxE8RyGKQhuYU3aDLDdUwcg1ZGQ9srTSftEkwthxsTY8Z1a82jNvBKiSNKV9zTaRSTDCJsa82ShtQUcUBrs",
  "key27": "48crNNx27nbLwRz32CLdGuihHL8hPMXGFPJvtLAFAGC8Au6b9wJ1VDgvafRiat7Km5Ha685zr8m4ig6zkjv3ex4P",
  "key28": "2cfmdkE9YrVwteaUxKAjDtvZjaWdoxbcBaBjmPfJdSQYyrYKVfPEJgQdfpggW4JscSez7adnF5y7S9478ci2VomP"
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

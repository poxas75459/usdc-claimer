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
    "4LiEirc5rC414jktkF2GzReH8MH8D37Ns6MtMBQD1pf6t4ohg2VhRGxKzv55t3jAwVHigqwC7tGCKPYNxs9JZ1WM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dGZw5VTmVmseV1xpw33eavuNhHKNFijg4cXx4TLccnufZVt3TR44iCJWoDvEQNLRj4MknT4kg1La1Jbck24hzLA",
  "key1": "2G48BAW8h8SLhQg1Uc6mMxk9eatADfKmaawJ8TJRxeH5tg7tszAcHvjMXUQwG1GKojD5MuK5xKM7UUSvnSPFSNwv",
  "key2": "2GRDY8g2sBEZ3GXhZsnnbBkRFNJXhXNPAtQx878n5ea2vMwfhbMzxa18EuTXMqGjwZVauqqiPW1rBcJH6X17AvP5",
  "key3": "3ALYxdsLRoiNAGjHqDQSUbmvJeL8yGEP4CogH6tMasA1DyFkpBe71VPciXB57TKSJfHDMRrkiUL56EVknYYPJLiD",
  "key4": "2sUKGzwPqGnRykunjy2whRFLvgYxDXNHuQiBfuSbX8PySQtqdeo6zmVCWxXZ5zSGRc66dfLiSN7R6Z2Sv3NTQYXS",
  "key5": "UniTcXGr7Rgb5LsWH3yRmjVtFy4CRJghNx7kUqwfgKfuUHF5GK4xW8fhVweSmWvs1ePC87yMZ3WbybKy8nqKDx9",
  "key6": "4np2h8fLSuKNYHuPdQHa7uaz7pDMqzK6HEoEiLwitxMv4xfhKCnp1UQheTyNm1xWoB79vEd2V7G8EzQ9M5qBACZk",
  "key7": "2vnow6upBG7CbcM77QyTjb29X43EnBNXP9YaEssWFiPAGJMumyXK8K7EncVGsEuN8P1JRpKiMNeujT6HXF4zpJm",
  "key8": "3a14r5ST7PDUXQNK9pJJAgeNQzdkPqfftA6x6Yg7vVXJXkCf49WbQ2fDLFQeoXzDfFog6HFnvHeL6x825f3XStrE",
  "key9": "5Tby1FxNduxhtprfgSQHm7rM72De5n1kPd7DCPipy459KJE4p9dniXFKEpK9euKFbbh4cv9iYR1vUsSnadnDP6A6",
  "key10": "5UghcDX2xxfBB8KcyvGMD6pKCmi3nnj32GYpndZiwCkcSoM2txZHYgWhZrcChwK65BB5e6Yxu8yEV97gpq1fzdtU",
  "key11": "3aXbbY1WPm9DLJ3yUQwu8sQHKtjHkkjXsHjPJGHwqzMRb92SbZSb1amVyNHGipx5E6Ra54mW3qizsAhigoRzLRzC",
  "key12": "3fK8KBifCGGGYQMBuraUH9cx1XLRhFMXS7sbHf9m9gbNNhwidwDj8L3z9W9m5oqig4HjfyAwNphxk6y5TUNVTq2R",
  "key13": "5JDb6xn4FEXXBAuLH6my26bSVy7kSxfJSmoCLYHyFZsw41WLGgXMEc4ZLJVzonthq82X5AVWttZFTfkbKffvSy7d",
  "key14": "31QfoMiCcpzy9TEqt7NgZJ8ykcv3gHyT73x62pPtbCFvnVFQpwKd7EG9jYcZMzV1Jvh8pMNunhdkYoGgm5pt7Nug",
  "key15": "2Cb2SRGvhHhKvqZjwXSyUhLh3kDkjnq3Jj4QnePDFHtgFPUuTuZU2GnXS6PpfCZ7T4CkqPV3xeErXZigzoQRKGiD",
  "key16": "3F7djPF5YhTA4cVPdGZmbLYeu4jyPRgkduVz9dXhfPvURP66eqyHvdYb4XG3MQag9FSZ3yxirDmJHjBGv21zz9v",
  "key17": "4cbxeUpKXZ1D1xkJmvMmka5pXvRGpTE6WC5TzCnCGtuQuuoFgnkRBsHQkp6aPEd9q5VWiJNgdDfLht7WneVvPQwc",
  "key18": "4KWkTv4J7ceFrLrLC6REY11L4U1XH1stpA8Fw9oSnbdgmBN9QZBncpC9TDdZFKtMD2tRcNYYDTabRacA5EaLEnGP",
  "key19": "5T1mfx2474G34hemZBMHQr1h8zHM5V4TCZd5WQrvfheNZc4AhzAjZr3Giwh7TwK67SmiuV1JbUrcArhma7i9E4Dv",
  "key20": "3zNj6PGAT548de9KZgoVJVqbv9PBRhgFF6pugHAsyBf8o5e6cG2QRP9S3t6kyZPK4YMC7SwJWJ8j2FFPctnmd1Ub",
  "key21": "5edFdgpE8tNtsWaKduSVrs6PfzShkkbEB9UAdYp95qYip9yf4TfDiggyAUHotaeCWY8gJrvZELhN1c12yMXGPEpy",
  "key22": "EGxCG9nocKhBvqKSMijP8tMXxykB3vhyKSa6ERdyJCaFJiQvFNqoKSR8LbE1CuwzsokRUv2KvNY2SfThL4qKoCX",
  "key23": "3ymyZrWX8u2z4UQy51RY2kPhGE6XwWgqcoiUipYaNTynGGde2Bdc1CJJ974Ao48rH7DiTuNe6h7RwNADSEfPVJiu",
  "key24": "3b9TfRjcT5KRt4DZXgxPULh7xjYeiTWe5Db4tG8WDQb1iF1xgufQMKgZ9wWgBS63JWMXcMxgrfor9ZitAkrYAK5y",
  "key25": "5rnMkPqa8fA6yC2chB6MutqK52ParVsB4TLHmFSmaM4xWD5NsS5gHRCzrugt7Y1SU16sWRSF8yJrGTSsizPvHNrs",
  "key26": "4b6o1SdhVvFpfHoQr9BdeftzQQydieqx3tS3FRzSDtxhWm3YBrP5ZuZWg1o73pBN9HCh8DrCHZAgvUFkFN1zkeD6",
  "key27": "2tcAWY5KBdauZhJBCnTm4reT3yJAVpCsGAX73jaNiTEqdV5ic9yn3rkC5TW5diUG266UH7pwpcyVauXX2u6EZNY1",
  "key28": "5stfRsgiRRqT1RuUaqsERBM4AKqnKKYVow11Qg3t4V2aQ7yvPKjGHzscXEekCp3oeFxV29wAVK9M8f4jdnsTJmy8"
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

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
    "2whgTDaAxRp9c816G4h8DQJactfPxaVibDMmt1z6otbVyud4DjC7fi5DPgfvtfZd5QpvLrZnfSEamErdXY8dBLLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjKamWguBJNxL74CAsNWyEK14VJZT7KEdbo2WjpJ3HrhYn5fueZV2CQpUxbYQhqPXLSe844U66Dtf3mF24EqdoS",
  "key1": "eqQ9Ks23HNAgAmVEiQKsYaHY7CbNSgBVj4etDer3VA4zKTm6oRjrdZB8mgbSs4Juwpj3Sdiwjiv2Av5VBcDbuwb",
  "key2": "2EZW4N7VKCnAvyyE8gF5DKLj5gf3x1V4gjwn2CEhL8io7TPMXGHdaPTuG5v6jdP1hWfV7AGUqMd6HMa1GAsrToyE",
  "key3": "42c77ANhHQAqL4E3R7saTbnRKwFzuDRURH2bShXGwnp1MD3LSRDkH8FxRhV1r2aVKA2SGR9W8mcbBJqJta7o567Y",
  "key4": "4iPyw7GxmouvJcYSnxw6uRmt6p4W5J4unbw8tFKyfS6cpz4nxN2Us33LqmoHG2Ga3kDYNAZ4dEuiLZ8Tc4yybmZj",
  "key5": "64i2H3oocpa6pifDFKtRcomVKpa6B8fVXHQqkCEhrFdm4rBtKRtGCPYwfBC6pRypb7vLXHNFgpvxkcLiu55joKn6",
  "key6": "5k5C61vbY4bHCUJwBU9M4P3d7utvNfr4nF6mU3LtAsRxDH4vZLEw6QogNZH4WEmAYa4YYaZFnfRQi3h3YZRVz6kF",
  "key7": "4nJAGsmHRu86v8o3ncxUawUQWpsbyQdEt5TvgzzaWyEpXpUhVr2dHakgzKoDd4TjsVKjPVkDf3Ey9tXk5YLU413f",
  "key8": "4Sr3TyZE2TNRkJEdYzrwYVtQLNG1d1NWUin7u7dzR6kGazRohnCnJ2CvKtHKW8onSEfkdru1GFZT7jH2itrViHLz",
  "key9": "4rvXJnW3mz5LiT8dBSwcURhK31zc3NHfHweELd263RGeG9fkvHYsLjyHHadmJ1Jd4n27cp7U5QF4yiTdNh68PQy7",
  "key10": "vA8qqiGDrvnYz9XFpFhsx5oYtmqctz74eZpBYZTgzYM1NkxpZ3rSV6bWusy8VAfHYsJVa6WR1iYetx94iquSZDF",
  "key11": "2BDSv9EhcsubMcFW5kpr3A9RStPFPuHc1LqMNLEw6NFuM4h7iv9BxvhGNgu9K8yWzFPBTJbCSV8SYDK8cA7841nP",
  "key12": "2eQgNFuaBZNRNyDvZL3YdBETZcFv2RjKD7ZjZgRnvAkeU4ttRbeniteXEmJJqVWawH7UkzPYBN1qGhuLRGJt8C4U",
  "key13": "5GrojFuPCNTnoi7v6PoPjFvejuM55RXraNQKE56hJL5iSBy9BppwRtSXbN9DmyybdPp3WdkAT6GUB8dTpJcwt2Xh",
  "key14": "2JkcpoddUcXbZrDjZHdJtSsCFUXvetcFhJLg5tYFAeYNMk2F3suHNGUVeNm2Za5h4PcCx9r4kRBHdDWrq8NAaGDz",
  "key15": "2UuQBYBtS8bMvb8D4d93928wwoBxxfMPNxvLMfYZe4qZevoeYCJobpQPRr4t3DJi8pkJzu9dhocrkQoVGTQfYxWr",
  "key16": "5eHs5dpo2qr9Ng2TkMyo5V7AHrv9dRNBXXgaJG4CXDq5ueKY8bBNHkVgxLGza2YG77erAyBu7nPmHJBj2rHGVumt",
  "key17": "YSBwLWiXUSqpTvKRwSs3LgpG6nioCDzqiwc67bwX4nSx6ip2repB5sVur2Lhv4Dmcp3f53g1nQxgUDTPXDbxEGM",
  "key18": "3mccjsdU9BqdKMTyDoGbdRd5QA5AWTz7dBHHqpnQvGLW2t2Rq6hTq9g6SxEYSpr6N4egMeNTLeeaza26Xd2EY5bc",
  "key19": "jwzAHNf67J9GE5zh515cd8bLr7s3yERyh4yE8SWUgCUGuogDVjV5oZGvFdhm7akmsBVXNtGTvwBtnksEtd1jNoF",
  "key20": "3kWctApFuZQrFhM3aRUgAeiJW23ULpEJgxAzMsgc9nGrVRZgXff8BfhRacRmhaHSATAndBgSZ4n4gDSqxHMTUxeY",
  "key21": "24X6sgaVZDpF469H8SQfWALukwB5KVqC7UYL7mfDNVUwxQ1KhySRbNWuZ2AAUZTL384tALXMhQZBsvdFrcDmKsMd",
  "key22": "3r65TTpNfKKew2ACU9yc94iVS6iY9LjsQaEpMm3dPEWtwu6SeTGqbyUByGgZMQZiR2ckeKNCbsSBVFPYVcC5pPXy",
  "key23": "A6nASZ7h61pnKgYzNSPUMGPQPMrqmKsaJk2CLNYaKo6i2k1Sz3ZZA78N3BGRoCZUqBqnpwvjPU77jcpvGsWD934",
  "key24": "2ymZiwJQAHd1zMVXiGYXFKaWPp3HcUdwTUvm9PnDf7baVFqCT3YwV2QrQ2PrHtXutyJwqpPd4EqPT3wpzPDZ3rcL",
  "key25": "5R13wUsL6HPYbEPhzzB391tYfxSuMVdGDP5yAYZVybYSwtSNsr34cMjiSzRKr3bSNdWDiaWbTSDR52WkQmNswPuF",
  "key26": "5bw47pnMaDberALsjkBffbTrTdf7asNupQ2NhZSAnC85U6egDdN4hguCMh6YeeLwuE66kE3SA4wVXNDZa9HhVyAt"
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

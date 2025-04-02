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
    "3nTvpUQTEXLsCnFqYMHb7VDrpntMGRmGm3EfUPJfL99gzinUrciGY3aYKmk14mTSJVFJhXiAeA4E6sTtGw7th1aa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R5i2gzv5KiJP3dkQYrTpYfpCSGGuhL82iKK3FincrhoiuGNSM4AZRonr1cYKYw7vGhayKgL73N9UDvS2r85D3dV",
  "key1": "2yYUASmZDX4bwDrJbxsuzJDJe6vpDwWNGtWcX7zt5K6resEMLhMGwm88cmWBJEWyco9ZN7Z2LhcQ5tpvHed3VKUf",
  "key2": "362dDrSPtyW7yQQcc158VJ2dRHiTx5UCi5iXpLr49iR94vU86ZRpkbsTcK7LEzG6fYtUVY4bAw2KsdMUeopXbXQH",
  "key3": "4vwwLvocTW8T41og5rkmZ6t9rtb3eVvzMPh3Vgctk6cUk4dWPcanpuj6jYgeBv27DVAB86yorBFefRq6KjyWKWkG",
  "key4": "2FRRYi2vb5FJTYojqgboskoEAq9VEeBiL8Qi9FiesH7WkTKbLyfAECCB2V92FvVbyBqDLTj3PKme8Hav8ukBaUyd",
  "key5": "4BTXjc96U56G5shPgkFDExBG434pNRMmGZjG14xKKEyy1CqTbWBRfp53pBbJoYu34s93BodvLWeHoZoHzgosUSGP",
  "key6": "5o47vHUfuvt6ZskAkTbaAVUFs9oXWzSiKNwsY682MDVAjWpndV3F4FAcZkhnCo5vD1NDLFuLXVTVSa5yHvJ88qZa",
  "key7": "21n2r7mBSYiuiyVhGqnoiHTxhJuDXJhsodKD8Ud5FU34uEd5rfiG3vmEaeE1m85Ls5v8dPXw8jsyLeU9ryrKMkNE",
  "key8": "65WHC9bqdpxt9sQtqnLLRDCATEJ63DUUm24EKoDrK9oLqKxHkwLfYrbqqTUmF2yZUJaxrZPhKLrzWKRPVEjTTn49",
  "key9": "3GfU7LUKW9nwe6aKc6mEgrK59czB82UKuTeFEjB6yAuVAJru3bvtVrst6zRTRGtkUD4mPHx6X1j15pH1cJsoQs3H",
  "key10": "2xWxZrL1fKmrYbLqRZtWcrT2TRAKSznHTfdjt9JyH1Upkjhj2UK31MF6UAhdH4LxuhkPVhhTnzFf843FLHiFbw8Z",
  "key11": "pPssrsS567oZRuNnLkrLmFcaSpyuNJd1h7ehi6f16rH8ABbY3ui9FiKUEV9q8sbQyQNQJ9hF7nMKTdKfK4PW7zN",
  "key12": "4YbFMWxetKaYKbzef8DMWcNaTqbZmRPnZCB6vjiqSzptbpNU36uC55KtC1Eh1N5GoZNZFphN1q2QbcHasbhNL8p3",
  "key13": "3cS5HgdYr6fB4upvh6qSJ5T63c57r5KdqY7hGkNgRh7hYJFGv1qxDo9njmDxwHMMNkFHx4fpFZzLYmNCq4thWWWN",
  "key14": "ZhCtUPWSVf2rWVMNvxtuCFnnkL6FfivBZAmq284CtiFAyrchUNbAiPbmnh2U3ayMszBS4ez4YTZRs8drGs64Tdq",
  "key15": "5jma1XG86pwev1FmDKaXEzsmH15Njwn5ejXdSsxzYMqA4u1Dg8vSfAQJSY3avvpteh1sqB2ro2wss4eKo8QWsViT",
  "key16": "3UtWv7oQkC3HXc76qxWK31CS1cfEhkszTNWeGxJFs3CgJEakYoyHHSc2EgK3yRVQXEHHHDNf2j17dWkYxc7cVXy1",
  "key17": "3q78XQRFdd33pvaEJ79xTs2JqiHn1fo36kD7VDaM1y9fQRAoBNkQznHU62eQsAThHtU8aWhS7cFXsMknSXJYZ6Uw",
  "key18": "4EWWmoEbKWrLoXHLCh7WyEk4rk4EsPigThPhb7W6NdbYVrnVf6xUTKRPm8nMgvLWW5ZKRQJDqGEgDFTjgtS3j79Z",
  "key19": "5xCd7f8rtPAQtwVT7gwANhQSqLJUhh4zgerBvRMhvLB5ynMFVUhVmh4FHnk7mQZ5jsd69RtMboZ6My7SXocsz46b",
  "key20": "55ExBH659AR6dZvKcxeUZisNFha5qhxJQhMZ7yuGQ1hzhmNP7MeDELfPmQkij7se7Gz4RQVdxBsvjBwe22SE27d4",
  "key21": "2D5Ap2JtnVEJk1wDD3uowkXB6rzXeprUk1t5cEywdQhsgpjAqmgGEpGpk8cnYjjJMRrNubPG8ajGEbWrnf7mSyNN",
  "key22": "2i4SzWMc6rCDfeGFJSzyL2bZeBMDwEdiRUgThjfoCn7EMrkGYDBvBNfhidrNpduJdhVdaVsfug5fi2TQGE2nrQm5",
  "key23": "5EFW52o4tE8Hgcmm8VmzgY6fsJJZDtsdaHn3ausbRfMPRmdKbami9S42JJTsaJPgPvsz5j7qxXBzV5YcfGAzTXN5",
  "key24": "46uhi5ctUzTS6QLZRq6X7vvrAw7d4WjkNWvAGT23VD9aNzZHyBxEj2sTXEJUDqjWa6VunDaoQyFu3J9XWehxa9Ms",
  "key25": "4B8LaAQ1JpuUWzmKnjY92BtUdU64SaDZEsPLh7z6dGURLe9c9C4sieNxtdpWErY6ENWUMDpGa7xtWZoFa8Kk8pDH",
  "key26": "yzLQKcaqSr8LB9na7Y3XsQajNivxkVgpNiJAJ42RNsWpqs1V9TbG2SBfR8M8kkma85PvDJ4ij7Tq1Fi7PEBHRK5",
  "key27": "2f9qfLYXjuwnjfL1n9eZRYKFb4M3JB7BvVL7g46YZWEuSbGx6qT4ZrViD3nZ4utTg28pjHSXcvR2FvqkLqSNqvVS",
  "key28": "5CU6YjehfnXTvmHRTTBoYZxMr1213SqvzMjw3sjzzoQUHNuvMrGkhBNeriWPcczb61bzxKBsW3YgSJW9zaCEhY2V",
  "key29": "4NCvVhhvycKsgbZDk2YKqAsn1nuNHU6EUiiKwxrMxYfgCReinBUjabKz9ajA8iGew6263BxR9aWxjoxBQaCFg9Wc",
  "key30": "5k721izG4mjBsS6sBbgy9wveMvjY3yC45DzPzpECfunETbvfeLuqMigiH6yubLS2r2D2XrvoVL6Ko86BcFfr2gx5",
  "key31": "5nBNV3DWyKxDXegzMAJcLNdN8m2AJStNGKmx3U6B5PJkjoNPbsYoA2GvcFrDTVyw1yKMLV73smpkYwTwkvHZbLjK"
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

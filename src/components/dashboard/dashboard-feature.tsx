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
    "5vfy44PKoAyQAyNbxxNW4adCSW9ZfVTsfHvgEAnPnHZCGZxs9hkQHCd2jFe9sn2x9ffkvnbP71w6ZwGgtZPjVgcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFBhDygTsodkdnZkhCFReqaGbkLrJXPgP8iQmcizYkBgmADJ7NDhyEYHCZsZ9weMDd5yZEKQaL2Zyfg4zYcWRwj",
  "key1": "QMKuXjHsNgv7qKta42eG3YDMEjKmFsfA5P1z45eYmAQ7sDdsVeB341h2w73v3QJbCbU3HLMGEdnRzYMv3maGtqm",
  "key2": "4Z2Q95yQKYtRTbyjgV65aRXRyVSckzgC8NaqQdVeL1ZrktpyTfboJoxumQg18fVHy7SX6k3G5yYDzdhMNSvSp5cU",
  "key3": "5SyCSGnvvt7Jm1qB723TudPzf3CkR3aT585Fw9eNnD4kpmAdv5XZxMMrvczFLAHr5zvsvamo9f1rYeT4GiCp9T9H",
  "key4": "5HtBR6wg1av88hLf9En4NA69kuQ8Hdy4qU9RTSLF2rRtRzbqD3w2YHnWSt7fwGG3cbw1ZAtGTGBSXggSQ1bKbmUc",
  "key5": "4BHSun6Ce32NHLhRrbhC22NpDJ1sgFhXntk4ktuCpQKQrVx3Yya6UwSR3WD1oJXWaDwyqeXwKDEhvJUcwhWXRf1H",
  "key6": "38CB3PQFKXbp4te11e1sG6PNL6kD1EtCKrb18BtfvR8F5q6xJJzYcNZoBczga6CX8SxTt88U6gQetvbhg1jqeakz",
  "key7": "2QZzEWQC1NoD1LWsn1Q1PofmQNNfCFGwBZK5JPXujEBw8qvZu2x9yYnVv5CVN1gYRyEgfkeCoiKVYSxktFLrp89n",
  "key8": "4DoXbK6AtCsVTX77XcncsYSWgvLJKCVPgCxS8XqRTdJarsfPWVfHWMFGSnMKHeos65P4NA4qQvDunUq9V8mKwHqx",
  "key9": "2ooWNksfsEFA5wQA3ftSFJPXj9VTkwNtPp4kso2NBrSvbz5BZp686wf252AYrG1nqBvVzJHik5M2Dw6VqvumsBka",
  "key10": "tLBJW4nxGhxTaR3K1DxELjBSzstUnHmcPei44MHdA6FUFLKxKSN1kenKSBHtPxgczHyZspDYkTp7xZQcnKsw8GF",
  "key11": "3ymrnPP6PZt7nQvLGFujqaxH8wnBcrRxjpEgNS1A6R9rnZQa4SXg11U9q7docJKfZ2vpFesRjY54iS9PT8TFREpp",
  "key12": "5Pc8RqsFEVpJELfuVDuieogEQru1utZxA2egquZYuffeYMhbCi7r7u21fJsQsn6SuPbq6xeSiWmGMRQRGBLNXBQo",
  "key13": "5RRumzFTrfPWvr2b6FZLJiAiXBX7FPw4gMhQY5Rawd2kvuRb6rcQPBAeoogERrT2YCLYjbXQoRrDKT4Mkp4QYTTM",
  "key14": "vAEvKTHFYnNH6HakWiQdBuPrsXQ2KHaHTm8wR9zUj6wADZXamBMTvrDwMhg28LHn3pFKRe1o86qxp1Bjk5BFeWn",
  "key15": "4iEtQrS6qx2gBbnFbF2PBi8a89zQxnidCrw1XWAJQEMB5Pc7WsvUSKozsjSPX18veMS6V4yJqX43w2Rg42W9kbJg",
  "key16": "3NY3WdRzWLAsm1E7MjG7U7LaS3RiEj9fsKGPpn9pK2oZF28HAfhheQ6vZ7UfTZZxj2AFMNpNpPWqL1CboC1nKW5H",
  "key17": "2HujJ1gUmQtxSshYJZCrE7YUC1QSE5mgF3fa84cM1Y5hewqrnQCRGK9vokTPj4qTNELf1LFaWLAkp6x558V4J41D",
  "key18": "2zGcUCirBHgaepRusSMPcSfuMhfPMdcuD3nrGAEegyQRUr7faXvVHjkdJn2Ai2paau5gPrvS71RGokVVHHRyiLHV",
  "key19": "3mUuLXtorpqUGkdeLegdC6tNTdFcZZMKkMn96F52UkbJWHWGE6b2JyZfVLPdWaDYTG5Xn4CogFagxGLEgVHeGzNm",
  "key20": "mcR2DbLSyKSk5KRFbCaYguFLZE1jonhvH6RxB2qagPRipoQUCvEh8YcbJ9vtVTwyzoL1ac3Nv4cszmEhtGRADn6",
  "key21": "3hiGvcrrvbwea7ZypGNGvvBo8cxvvaVBCPJWipPPnWZmLAwc92Cryb8fqLgpheHmza8se3R2mkxby9b4deZ9EMcd",
  "key22": "3BZ5AWhcpN2MmRMBhDqJWstKzPP5ydVvipBv9yVVNinbZMtFWfqzwFVENCmyvNaBG8RmVgS73ez8d3ELpLYcVZnk",
  "key23": "3y8GKW1aUATSSfJw493WuH8c1j6rEJH5QmrNANWBSVEhVnEGxT1uHf1tofEFfodT7USi4wF7HiTcbP4DfAWPvQiq",
  "key24": "5Err8HRvAwrh6TPaYDT1e56QmdRmT1tAX28ZjPVM62owSog7SVoEtJ3dba8QwDDFyLq6yjmHbgrr1Nbho7ar2oA4",
  "key25": "3CAKJ4zsvEeAJe1DZhZqMq4SrN7gWzGxDL1d9GYLWoH3sM7goxNFmsmNx2moedMYzzVUEcc4NYgrVJUL8QTwTPk1",
  "key26": "2pNKdPQHfrUJeqybHKzFKW9E9nqP9gCzmXr8u56uB3PKTavQ21ahuQYTc1BkdJsvkPLauYuzZV2kQD55tpjfKuzb",
  "key27": "273iCPgaRSJ6gynWriyrHSia5vfvjqUcDtCS3YonPZH2FpyDvyW4PYntf9q6KAZExiRkKtsWA72vAhmeieMkx5DW",
  "key28": "1MpYPhtR5YA1XhsnCPTdFEgk8M4Z79GSLR1qGkLog3duC4ajvYkczSPRzES9UW6FbGScqNhW6HKMnmaes6Cqswm",
  "key29": "5VjS4YyeC26UFo7xmw4yAM6fpLVtj9TnEtuAqWChvg7NHbss7XXUmwsRM6PFcJrSqCTAGnnVybJ346ByBRXxLrLP",
  "key30": "3aWybHu4LmPfgByRgNjmvkwHz5Zb6grGTDWhZBGtJpqjoZVWa4qHovttHzNY2ea94xuVetD7E2iRQL3gPsL1nq7t",
  "key31": "3XNcuTUHjgPoEZc3opsSR6cZ6C3s2R3LzkAJDifcow7fBs7zabxde5nnELHpshSJTgEEMAWR5wcji5P7FURd2qim"
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

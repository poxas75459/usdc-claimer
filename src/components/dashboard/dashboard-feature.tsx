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
    "3w5L6v1si8y1PDj2a75RGpe2XRYmUnYGPRhDFUkVxZAncyjaK3mTZfg3bVAEgY85MakhbhFhpB6iP7f154NrucSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oVRvRtVSmuXSBJDNuKhCUN3mB6zSu8d8rBJBcjKqwBn4T6RJgYPHdWvg4r2FYe1ck4xLVCJypacYioVdX4mYPJ",
  "key1": "25BzejKuauiNZLr1EPXdmx9s25PBAnfrw2mL3Pu6qDWRsJrBrw2GEVpxrnMxzYXtE76qUhYAGEp2J6HkcsH3TY8Y",
  "key2": "4GxejHWa47pGgPseuv4GFxASpZX18wKr25apmMnZ1LzRK1j5NLxhwPTRg6XpGgG2pJidkRL55wkErGD7oBqMgvPR",
  "key3": "2gXBChjTSc2e8qRQnRnMbeocHgGJ8SwCLVrgUFevrRQKFsNhZ3Hfm16C2LHyxxPf5cgxsrKwuxhZ42jxGGVJ34Xh",
  "key4": "4P8mfiHWra1Dm1VZ7FoQMMr9HnGaYHXfRmqzK8jGdjsQaC4EFtXYnYdE4hZXPdrg7RmhA3MSpKKekAp4KqR1nf8z",
  "key5": "2bAjWBeDjGhfQbDE2pvNmVR7S8jhyK2SjyU84WKWN9euS7d7JeFmSbHZDCgtcAr2PJwSKhhWavEQ8TMYDtV5PXox",
  "key6": "2tVxeP6XtwzweVstUFgB78xrXfWHPTDcaxDkfUVZVN2sTH9UeaoCCV8qVJSCQgmefzvuvtqkUCm4NLgGN9PWouF5",
  "key7": "5wPNfwyBahHrQxsfgivuTkpT77bY5as6n4we1QuT5UacQHo6KjuydcfXnDSXxmnwGForobapkSLxwkyLEYyRT6jL",
  "key8": "jXp4dvEEXgBUATzoAEM6LmjyCVp8GkEJFnhmRmyPp3tNkj34ipgyEBTjh8NppD4s6VZ2ARvPdC77rJVZpeEHfgo",
  "key9": "5JixWDasPWfF6YwLviQS9QTMCANKHc3rWJt5CKNvGuj4PATPaX8rSUDpuDijorneZ1RDuT89av9t1mToAT3maTvw",
  "key10": "4i7UNTemYy5qJAvoupEgjLXErCVJLh3ELLkxv36bRPbccTucKYHNcnYtqEeU9LxFNBv8FeYHpuERCaMtM9ewcNn6",
  "key11": "5PM8k5gHwmFL92D17vZqRSzDSXUwnniyHhs3dwy3QKTfmAop6kpzmEtQvBipShAGtUrAQSMMhq61b9aKyzzYn39L",
  "key12": "65eNA4y7jpyKcimrQ6hfYy5u56Hem6aZJz92cyKmnXvyAPLNNuP5HeqiwPNSQbEYBHjkPVtDWhXamj83Kq4wD7k8",
  "key13": "2x9JYVAQw3uhcmwVkdEA6WN4M1VQnukUhpmCE4rN9zsXNhvhJVeDLTb3zAvocV1mMLwqqbDdTBdGgG6TD9zPzuE1",
  "key14": "3YM8omecirwgynzgV2niCPPY2bogwFhFrK67KQAp3Jvt2jjrUW4JRUZ1Pg7z2nZekPdcxw2gmSGeY7xhV3eMmjLb",
  "key15": "5pnu1w45eHbWqyrdtpS122JZ4xjgqjXCSNJDQiQhqyFN4ZKmDhnS8azMeDb4HcKtHvr8ba2cUuMz6hVhnCFtpQzJ",
  "key16": "3qDWk97PnD1ccYnusRJ2omM9mDSCpWh6VttLsLQdteitgLWrPz5CNQFZpwq1usGtpb2h63c8Md2CWF6ZkRr7a2XK",
  "key17": "3PanyUteFHjfsPCpwgq7eEbkMWAY8DrP9BXkTA14s1cpcJ6j6BPcZp84iWdz22nt3icq8ihixNpfGLdRbzEjVULa",
  "key18": "2jrwWuBUEDsijwUe4jddFeoCrewCZHt4gs8EkSFiaA8qVG3HPa8R4EkmGQKUj2J3TuPDMJDvz8E8912HdaMzBvMB",
  "key19": "2wMKrghjrSaWvuG9cYFCS7rV11KhVmXP7Lt5aeuhtSjTE976Mhb2vLexTnm6LPBujMq2XHKXTQrMprk2dkvHSGpZ",
  "key20": "2g9jrgNDjfzsar9ArPSyRQ8eFM6yd5eHTVpV9sLCGDprTiTV5zEH7VC8qXFJEYKpjP6QDR3pG9QvHQpzfuKSzjJ5",
  "key21": "5ZAkedLkSbTbYF2NY8evdYgRszbBUYBuLQMeLP5F4SQqVSLJH9kcCNnLGpPcCEL8JRxGJNho7Lwe7dHut2qj3zfC",
  "key22": "2pCApR32MeDP8NPpMXnZK75uhdqcFMvXCWFZ9JbRBfj7pE8hWq8uXfNUfbThcQ5v99pS2j4Y1xBBU1hzHnaA2W32",
  "key23": "2SpkJSAba1szM1biPLTTWpLzxCHoDf3RLxRVWjKouvEPxUxfEvRCs5kdWZiLZz6fny62n2rWoUiKov2anPFFLpVZ",
  "key24": "2NeSXYgwWGaDpCyVne6g7yexCywDcYv9boH5b3P3N6obrRxV8peen8iqwcsKD7HMhcxoDtrYTyKUNuBoqbbLMAdy",
  "key25": "2mXGz6bD27RtCFCRojCpDEKT8MmUYG7bHhTWAYZ9vAJ6Gz6rfDGW5x2FPsyR3F9suzL5VLRAhA8T3NPtLvWE5hN5",
  "key26": "2bPchKCW8kGnmfNCMXHty5DLPiVy4mpFCRv5YvgUbvD37soxmtnwkutf1r1XpztcJVjHDmi3XFeK9jwreEx5LCSg",
  "key27": "3oYR8tMGaJejYPBg6CQV1LVYaKdwE1RUNsJrrrq6pqv8uiBZh1kmA72sC8haXxmR9FMpdyNmDv5hAh6xx4VFS85x",
  "key28": "CqjpXFzY9Gnhzmbkw3X4mU6jMFBKwskAJd3L7JB5vdFSBzLaQtXa3afovg2UuHfn2Mav7pFYrKejDtvkoL2KyS9",
  "key29": "3bPy8sMzwoNFqnHUms7rVDFT5ga6QqiaUZs9hanXheR9iMHbUrMEQgFCVMatnUAD8EBNAnaHJN7srsd1jD2ynpMq",
  "key30": "5GE9gqsWoG7E3RTDKZe9qmbFxVuw9sTKmXeZ3fsQ7QexPU3eG931LUaKZTSyzM8KZZuLQHE126nBe3ZhcMxuf8iy",
  "key31": "5SmAe13xpboyFndGCZiw65VVEWvs67Vw1ymv72E92PZ9ESsMmtVxMN5WGDKMfa6uJbnjJV2TKqN2xtDyDXNJUeYp",
  "key32": "2LCmQZourbiqWRqRqKvqsvUiXNCNRNNCskf8U7WFtEuJESJzfXnKXBaxPmUcPmSVL2cM1VCGhVY1ReTrLgr6txL",
  "key33": "5ccb6AK4GwiugsAHgsz7M6FFebZejSt13Wm4Tmmuy9AFAznyXBaYJ43p9upSSbe6YjjvJX75oAQwxeeHMju1SQ5x",
  "key34": "2e6QTZywbhztuiTB9kLbA9Qm6z2BhcwgyAyHQRAN6Evkhqg3HsLYLia6MKcyqK2VruJwDLxvUJTBsjzhLJpfDXH2",
  "key35": "5xk2Bjuh6UUyd3rh1hqd7Qz4uciStXTgiryjBVrtRt4hT8iD8jBfP4keGvzJfkVX2tYezfd9xFmcLUwNPn8XaDXb",
  "key36": "2PRJFY4y99oWn5DRvpXH4UbYMKcoLZULt5jFvwL5emRANHo7A2iYLfQ4uyyqDxXptW1DF159JXy7nxU9i5seEMZ7",
  "key37": "5s5krfoRM9djjKNSAG2WHZBJ8VwZthwueUDP5Xiq4xNHmANvkrVapYWTBGwy6yeGop9me5M4xeYk3ZLrGrkDSCbw",
  "key38": "3MREprNaoYBjvHSvFfLvgHZkRFiPd1h3zXtY2UfHpDs2P6ReAjAs7oaDH1cvZ2ZLkyTEPP3kgwbNHJ4LTP86vW49",
  "key39": "3UUTuHkKbv25eMaxseLGgdgSBp29tT45PFMP7qFxMDWaZrFHnQapMTFPzMwwvoRC8PbDe2Ye2GwoF8QB4NLT7MH6",
  "key40": "2KgHzfr5PkqgK4YPCt5cPsPzfC3U2MWCs3RikHLaJFTv5RBZE9x15uqyAYea2SZ5fw2SDbhiXeasX8Rr6VBXHj2g",
  "key41": "5jorVNtz4ZAZVR15cBnJdsmyHmxyLp4Ec3Hh96fpWF4Bp8uKC82JE5SWR2VrAt8zuUmSYuWCm7g6dCTgiSENkZcD",
  "key42": "5R3dTSpYUtp8DVU6Xd8L1AzqjWQMi1i2s1aXTh1guDJXLMMCnaJskHCuoWN8q2DfS4GhbWFbvpymnzP8Xhu44wGU",
  "key43": "2UvvwSTM7RWZZ6CGCo8qLcy7J2trRAUfTRDBPEwr7ErWmKGZvkaGXfLcjHjPh8kpHyiNu2vBZYofFmZPVRTAxTF8"
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

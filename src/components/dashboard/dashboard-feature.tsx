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
    "3nKwSdhUeto5wDfF76J4UGMhEvvFKXso8G9C9vHfh6VkofpEazcxu6g61vdiMsPomRwYDY2M4veW9qHYgNx6sTXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZFYUi6D9ud3YunJPVbjuZSd3E8xEzpR1Cy3NjT7hn9FneEqac7HdLTyQHKW8dpspEXXinVU2hwbHhBLPyRaHCw",
  "key1": "3BKyEsZvEv57gakmtLMcWmMBinZ4eXutBVVmp7acsfagmLoVMVt1LqrLJimPFaLe8mXRTzgRnnTJcv9KnKvbjrj",
  "key2": "2PfPwsvkS5WQcnfQ6yeys48eTMsD56jJ9MJM3kxPUL6joPbcF161ogQ6SuWpMCuNLTEmTEDdeVNJ3wvBQnhTBqsF",
  "key3": "24sTJ4D9rsngDQk2EmxjJJUnyYSB6w9SF1EVzjU46q1Kzo9FqMbxzX4rmPKaAhxuJkD8rtWg3RzKYxFcR1SACrAJ",
  "key4": "4F3vjp82rqvoDEGVQurcWFtTDkmkUkZskwCAN31zJ1LUcmaXDBYw3wGWc8vt8zz3EBGU7b99FVB7pwnomi6BmBcv",
  "key5": "22fVz9zxLzDT9vm2BKgLREro14G7CWd1e5YYNSYYwEECu5J1Gx4JYqRSiPRuNiAjFRrHpdNcC7Hkh8FBGJLjaPTZ",
  "key6": "4kruaS7f4pHMSNzVCGVJnawD4wqPqsk92vABoyho6RbXPMUwFtP4s8ddMt6GUhKwuK18jG1iHd8vvTVBZrmdctNi",
  "key7": "4umjpCRhXZW4959J2SkoBLsaTLva2VHccTNCzyEJS3v9Bg1Y1ecuyvQ2Anxpixkh1Xvm2XNJ9tJCEBkjJrJzZUTo",
  "key8": "3rhUPx3AB15VPjYZPe48xP9HEMdxZHf3BK5jXLAZN4N6E5GDQoUzDqZWJ3MiRw8MGNwNPHhZwNMTvj5rpqzqQENL",
  "key9": "3ZZ8psymmF2MsqzAdhnFeDi8GsYhqPBezjVVfA3ZT63KvtwxVB3K6B8dGwRejgsh2Mb1KCXwmfeg9FLvBysgReKg",
  "key10": "4nz3yRgJ7kYHAVV1hYYPtA8CkcCBLyDuG8BJiBbLrHn18M39qbLEpB7Fkys3nsCmucXg98Ppf8TsB6eTRj1hud6",
  "key11": "4HNdMxmqHNYFNq49Xm7W7RxAuvHJ3CTzydrVuxQR7KkJHApKW8TSqs6jdF8enWwKniNnfCjXTcQufHApjDuwERuU",
  "key12": "8ejgDuPzzXwLCaPAEjExgLq4uQqRX2hpy9XTUfgMxbMZg6NpK83ddwaTz4XXsVmrRaWvT6UQM2fEV6p8BMcPhaE",
  "key13": "2Nqvo4JRVphwW6hm4d6X6amEPdhazFLFFU4L2whZQJWLLVYo42fW14599w4KiyZARCCaXYAR3VfC7FLiPzcy73Z7",
  "key14": "2box8HSDiDg5N7LkPCNVNuFd3VFjbiqeZZfPCc2aWa4KyfPFtzAbYEuuxN3VDP8DxjLrDb5PwpQwn6kqPR1oQBRb",
  "key15": "3ppzTXVif67bhCNtAPRLynznbrPgiPUX4g2eQE5PQx6NzFR9HeTjMyzK6ncrs2UtAVKFcndhMCVsDvaMsxFF3xPM",
  "key16": "4gSTDcU8CV9jns4HkbvwP1hEVoeYodsb129isUkmZR55H3DxbWmqNrhwyhTAjkAEz9UiHPi859NdB9XkmXk67hvP",
  "key17": "2SpKkdxy2pqA1bULSVRymMLAZUWo1TS5zLqSf99GVsrYdRUAiuhD6co2AXPhuN5C6dczL3tArJ2wukcx8agBEaFf",
  "key18": "5FeKC4By4yn4FKpNJBanYFpf5pRwr7tw7Te6NYrH2HQyKULs9HYtEMvWuNgA5iBVA1E9npDBcSUWEPh9DWY24Bzs",
  "key19": "d34tv42yALLqQPdZadPpWGGcE93kZyhZn6f2bz1bLWBFSRmxo2vhinq6gJvqmSCNvZHuTiL4FWyZSvwRJtggcTF",
  "key20": "25KmjbD42J71q64WVreNRZ9zf8nzy5EiXwg9yd1TQsHwSfPKnYjioJDhCHMTMaJSNggtfLdoduvLNZAaC3nbhSQe",
  "key21": "2Lm8fyXAoqsM1PV5X1DwHFtfCTZ1HEBYuMuXBxYVjJJVAZRKyV9BuRJjjT9zXae6M2czoYFeodcPCEPjQB9fnhzb",
  "key22": "5mu1adXa6iNkskjSwXcWHnUbPxq1trarbpePMwgETNRjyxWgdcxR9HKWFRKbvGd65ermsjDkaFSE18TwKkiKmdvE",
  "key23": "35Xuv79DKXjoNS86S2gdCDgQMKz2teuMn7c83v53o6Ne79frE86SWAEuW3SHhApLfTQupXeaxaiAkX2dAFHdJDCQ",
  "key24": "2TRLePvkiESVuf4qEHog9TUnWsfW4DwVV4aL6azyUbCubfrEDVhe6cksu3ZQbwmJuG61NquFPPYGdyWgJh62exnc",
  "key25": "hhavuba6ajLBgEVKvHmMWBk3kHHiGvcY3qdTRt7JgULEecr7sJ3w3eVSHDXCUAeQ6QDyBUwNzpHg3b8Kv8pot9G",
  "key26": "4ewTCYEnrpV9YWHTFwArEzy1KkXTPk3PnNAmjqNJJ5DhvugK8V1rovaDaP2ATxzfzGem1irTE7XgqajasvWruPvR",
  "key27": "2jdA7fPNkX4wsvB44CP9eQbAW6D1ucSX3jdDo5iVYUwo3Mccr5hExTgtTcyKVfit61KRCDFoTnwYgvedA2NxaN9",
  "key28": "H5mAHbKTwkjAkyuPADziYA6xgCbPyocHbNRDKBncU6JvaPUgQmPQFAaRUb2e1D24krK3mVLgLDb8d2ceDtRvB1Y",
  "key29": "5BdpyGuaxXD1niaMydDGYGr13nsGLLLK5znqBJGEVkqYJGW7aZropZXZsreFCU1oTAkWVF5phnAVYuvXerDiyMpG",
  "key30": "2hWUunGH4QyPnzFZYVDtnKkaNs1GFqaMLwLg5XRYDqzXm5JDLvBkqDDZLPUjk8GCVmswHG6CLBQYQvyp8zcCbEaK",
  "key31": "4GVK3ekXniTbzXqfYrgnR8RRbMGAgUpLLrCrimkPMxTx7yXjD69og525kfA7qiWpr6ur8SWTUQkjSEV5Cdvv3Vef",
  "key32": "3kh8n6WJXhhZMfybRxT1h82pyodtUZEQo8MkSqR8ciHWQc8rVMDot3NAXNrfbPfxPpvrn3mk45JaFv8zSYHQCFpT",
  "key33": "xoLAUd9C65gkens5ix7V6nKT7N7nX87C59LS5ZTgJVUbcEvgQ6fgbbdRQGjj6PYqon3nEE5727BbdSqiAF7waiX",
  "key34": "47WGMrB8tE715msxWU1ECa2UkBdRMJnAK1newEi9NkNmy4mc6Wxdzgtfbwe1fZmHVeTJK98Bscvw9Jhwj5M6mcSG",
  "key35": "5vpSTDNrq7icJofnZoXzDd7ownTmz8toc1VdhNdWGh4sb9qgHkyeSUw9GUDVismszA6FEWet2xzVYgVjCHPfHs7x",
  "key36": "3TD7Na9T6vpha9KHbR2avvQj8x38BJi2WkzNMCkRHFKojBMBhMUxEZikboLV17oWLHYipoXPpWrsEXp3P6WPGGP9",
  "key37": "ByZr7Bg4771CWSV7fNKVxUzx8niBfbtSbBahTnaQah2N834rA1QcHXcaU2oH7crJ7iMt3tseaZFTHm4aNvfwKgs",
  "key38": "2zfY7f8QN8yTCKU6vUDxQKiUkdm6LjixcQGVEVFvwzukL2i8GrBzpqAv4JeXTGwGkXQBgZpZUxTK23QSoTk3gQ2U",
  "key39": "4KRQqaaC9rbDbwXfbDnNuKxjwXqUKdZkqmAa5AT17MxxSeK3Bu4cfDC1pC8PEMUcPdMBUena54bYQY7vn98zTEhf",
  "key40": "3cZSNkVdvdtcnPrfwmXMU4dfdvwTGGxejSbMTxrhTtBU3APpf4KNtYy23mKoJZhPo1ZXkxhyZwRN831dbEeGvq1n",
  "key41": "5mjEM4Bub1zjkodnPjbzAr4t3enwy8xTv2XBQytFDdGeXzwkSVGcJQQPptFjgm1fxENTW58KmB6oi2vvhAjFSgEk"
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

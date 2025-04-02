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
    "59sy8x3j4Q39Tn8Wd2bh3VgQjhwnpiNDtED99xSuDfoQU9wWGw3hq1jpCAWAheRLEfX9S8ER1gZJy5nSRdakpnHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x6WdhQiU8WkWgvR4kfRw5e93YWkk8evR2u1V7qy3T6HN6stdGVcKrX4PU7sUtf7L113xsxTmtZbBAWpWAjMFgNd",
  "key1": "h8W4wnpopnFKJZpkimm8xug8T6tQySGBiMUC6SiR6ATqBdFkpR1gX6qYk6uo8zT4ce6XEDueejgJqDydLajpvUD",
  "key2": "5n9vanJuvvRqXSTnUBo49ASGBn6msVbhKWwstJFcTiveuACq4H3mmJjovgB1EekchX2xPUhXHWUBFXk4LHG1x1Ck",
  "key3": "26g6aGnjeVrrjPyM6tqzo9oBDz5FJB2mL8ZxvJhK5bqBhPqaKSauht5bmRdbrxaaZfkJFCaJjVQMyLBLh7zcwH44",
  "key4": "5NRkodGg2ovmEWtyw7U9CHpJs2Xb5Ej6AR3vvhuZgwSe2JYh7x8ruoGohSrm99mckBPnqFJEAsHN1GwpFyU9jekN",
  "key5": "aHh14MGg187dYLWBStpP4TH23ZPHbr9zMhPQE1gE1k83zaG3oUJ9NjG2fRCs9TjFPibo3tQFnDNgbonwYPpuxPH",
  "key6": "EZVuY2QtnVCfok9CmHbvbtEmCsUYTDewAxL4Kh2P3oi3FMJoN2RcvaJaGcPtTS8KabRpqNo1Gv7DaXiJyjjQJ97",
  "key7": "qPak5YdkNk3zDM8CTwzYtYTm29b9PFEbMyBWXV7rNRPPKRcHj8w8HbWaZE9moREDWDFquULegYdZrT4zDaKfWLy",
  "key8": "3Zc7ERs3uRFC4HJQMNeXs3dmaBeLh5aGR59ZbT7ztmr45P5G8KMsNaJ3RNFzDt2P3BMgikPiH1DA2mrcptfnPsCD",
  "key9": "33EzPtG6dc3ABT2mNyBeeUJ88Ms76FMLc3UMwWP2a2eeJKDDriVfxsw81v74AZG45QVsPstbYWFdDmE91U3ayhNP",
  "key10": "4k7CXQjevvjQTk2LZNfVtVg58TEKt2zhj3brSuKr5ovxRjaoKXLKKqrpvtPqiz4FwRvCAgJuzaH12XAqfSuhjkz9",
  "key11": "LdK258qv2C3MnzHoryuFWKsk8bZLcsasYhoaUEuufVJAWZZDc5Y2G1HcVe1BW9ec7phjpAfAP9p5JChaQiHJBAx",
  "key12": "NmsnxiAGFnwcoRwGvdwxsWtK1G6KM77C1QXWos1kXQV7MsSixTPajiuVfjfMh3vVRXUzGsuzAMAjvhVMyEb4VtV",
  "key13": "4mr9vyfdQz7sGssDsUq7MVmo8JzqTFXekXEENUQxh1Aui3ymR7iacRtyxnhGoczZ1nqNEWff95QbgdEcW77XpSuC",
  "key14": "31rJjZn6jtTSC4A7hgfCZpgteaN3qaXr6ZL38Uw3nPjzk5iTHdjDF74per7MgMD8nKvenxt59ewFCA5WzXaS9qYm",
  "key15": "4PfdF6Fisb4iYQmn4mdouAtRVke5MgfH5hWgVoMBpzTShzxUjcV5dgFTK9uxmv875ms8aivfSzPaUk7JbWkCUdKL",
  "key16": "5QCrCrQZXEYV4gypjyAgztnBnLMxYRT1RsGD879ybeACHQTQvr4Aje6z6KRsno4WEWVMrcpnQym5iweAVyxxuiaY",
  "key17": "GAg9SsM3ndedRcNBdPRNVnmyvDYCxXRvybYTrcwR2eJnzivusdG3BfNtk82VebjZeWo7nrpNW6GaAna4sZXF3oV",
  "key18": "5tvSJRyqdDdaxnxdkTx8dLvnp5GuhPTk8hRZJigadGX9arZN7vs8bLmYP3kLWMVW72EKkBFABYSsRoxn1t4PwXt1",
  "key19": "5B4MjPCNh94qXDcDaqLNUSUoSW9vWESih7iE9SAtpWJke2vXpZMcYjohXXMFNnfNPQ29psLdycH88dkz6FTRsvym",
  "key20": "42agmo46oiUQebvYEVCRqdyznFA6moaxkfibo3qvpXZGsETWZUd5QajQDRD95Kwas1CzGvLeJAFsBRRjbafZXUx2",
  "key21": "5SxqKpxA1Cr5DEqazgVj87pauwa7S2NXQcmkyMVPRG8wWKqFx2boPuRK8RQt8sd5y7YgWqsH2e8RRAtsbsHW6wzz",
  "key22": "65sxx3bWtdrwT8w3bBKJ5EB4XnZvR5aUjCjjDiv8oSz95T9WBC7fHC99QTKUrGvGhZSTZETC4kLptVKn8SEGCGsK",
  "key23": "JuDGqEt6oQkpZCk8xAr1jzHR5HzG9PSmMV7X2ZDHpAEtQDgFAGUimcZtkUPLFm11pnPPCSBhHtfSVMa9rP1JfCw",
  "key24": "5rhPtGeUtHCW1F11G76g9CgLdbgqJNyzhbxb1pgLea53wWhDWQdQR2Edfa2mPmJo2iWuRc2Y224wWv58spyBnnWZ",
  "key25": "5ETHoHqyGT2TiBxFnznpdsKicdGPQfYagoz3erY164HNNRtHQvJivMyG6kYEiRAENXLLjei1yPFB1NvZRWV6Vyof",
  "key26": "5E1oRVbA1tb3KeuCp6xAEF4YyrGPHY4sMxpxGb1qmit8AxjSMuaVCYiw348vJGpf9fiCPQMSv8MYvhFFw1xeJrbt",
  "key27": "3MAJSsMpA7Gd79RbDdsDf8n66kVQrnVUb4JtS6P3fQZzdT5oXCafnkwNxHAxi9QaLeJoqv7w8E9d92QiWKuRSGa7",
  "key28": "4pdWWtGYZPLG4wEG3K8XP3iayc1xJo5D9QYvge6oZTtJMhSYsumaZf1HEeZw5FPzXqRsVPbWWcXy1jiMZQLcBkpi"
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

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
    "C7ZXpxxjGR8cyRvhdryvFcLY1LXkUNJpUUgsZNPxvvkHCeHeqY6g87VCvF3VXfq8J8occfFuxhQJhzsiXP2mFVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YX3Figi46vJK8oEeww54JE9bYCXfEvLp6V9W5U3ad3tY7zxMzu59KRZtTaPqCASsUMYuiTntCgff7Z5efkMHHS8",
  "key1": "4Cp3nWBEQDxk15fBBEW2J7tyzNKa9MrkhGuApEToipbJyacbmPXYn82sSUw2gAc4wPTqANgeu9G762Z3tp2CmwR2",
  "key2": "3VmYDJGvj3vAySWzFMALivjJ4i9ViZt51GpopDZSdNyecZPyYBL1XzoYHqs3geZ2qAwhiJYZrLM5NWq8onzKab5i",
  "key3": "2PHr4HHYQs1DkexDTdgJec13XQeymryUhbvb5gJDLLPcBU43ZsYKResbzajipxUGXu5ceXam5BXK1hQ61xVsevw5",
  "key4": "3ojs9KvZVB3VRrz39pB8pgcaVqYMrFMVcG1ZKR7MKRdHvAu37hCVTwEdLX1xobiQiqkVaoDSGpv2CHjAKjDnL49W",
  "key5": "nyLJe8xPv6rhttX9g78BZUegKxDbEkBGsw17r1tzNQ4jUHbrQAgFm8W4d3N9G2o8igoVDYBZ1G8ce7cA5duspPo",
  "key6": "5QZqZa6jcUUAbFy1BV5tNuQcby3erYiqj8aVXJUPhmrdWVpaoSS81nequH8kyb3AeUXaEr1DQ9Rkd61TjPGgHj6E",
  "key7": "Ruh3i5rnYfQLugcqPbGPqPPtxYL48nQbege6xSyipGfkXGJCa7aA9ZV1Dtyuboqxirqdm3gxiUyyT96D1XCrZL2",
  "key8": "3Mk9SMBND8e7uBz9jyuS1yUXoEs1YVYC1S9jj9hvvw6tBuWeo1oY1Qj9xreEsWVfXchtEa64GZt64BMMJqaj59mX",
  "key9": "jT7bYVqc2qKeeSAJ3zY5eSkvspyTaBDQFcpVTn11YiTZ4aLwnWaMkiNx9xMk75oKqJ9zxmKqX5sLL7FSfjQHh9S",
  "key10": "2H9AGvDzu3AivJwCCjxVLLddu1rMdUoKoZXyepAaci3oPcRCuqSxVmLrEeMxUCMddPuigXfHXZxxAfBjSBz5Q3RP",
  "key11": "5X8aBGLv8ZkSYiW2geGuLykC6qtzmkHsxnseaWtKHt2Svp3DnaDsYcWqMubUWuY2g6LdV49WdwqGqpDPtQKGw9NG",
  "key12": "36WKU6taLy2UB6CDBNQEg39eHdWNgGk9mc8efbSAnqVvyqH3WZtj5Dx1E1R6tpqP9fhZgKwbLt97HVxntMn6fBXh",
  "key13": "3dq4mwBCdPsXgVP2X3Ua8komCrNBbqa1irK5o2uqpH5kCEJyE45LfUXNmVYGwuzHzZZAyw7ao1kA8cK1nZa1zTRd",
  "key14": "vgGKR4pujSXyfxhRrZhuQ69gCXWRNph5KQP3iZT8TN5Sh585r1GRdpNFwrACnwNSLa3bWuaWgzjLWvcGVq35wqT",
  "key15": "5x4B2pivkNWrFHYDHksedrdXcGv5LsbScjUZtEeiSKi1SQ9smnPcgi3ETd6g6VDmSfiFaY3hRK7p87APX1xpRoJr",
  "key16": "3ihE88HcLpbotaDkSMLMqgdhcMRmR1zrUdPvJi9Ltstpksh53424RC5929j7PgyHMfv6hpq5JjUYt2YhVaNLtFBn",
  "key17": "66Q5BxVWJohVBRkxFJzdp7NZfFMshsfukaZgE4aETh22a1APqxDgCi42m2nvEjEv6yRFZC6hYefUF9yxteDqcPRZ",
  "key18": "411M57p8qr6T1sXf69GjmxdkCRTbyhXrDWEiig6yVXLJgGuCrPECCDzRA4CCFsJQw6946XSZoJxP4jDoFrkk3jBv",
  "key19": "5YUXnNwMeRgCqw3VeJnyV2HLfR86QYjqGqrnn8E7dBrSWggRsCEqpWYz7oB3gSEuXohTMWzc9BxJrcEW4xQRYKA6",
  "key20": "5fQR9QVwb3b7bhEmN1rbFf8WiTucXaJpokyDtuumHgxF6dRcbX6DYS2xwAvutKHES6rurzeJBFJ7ytLoZqvtdAFG",
  "key21": "3VSXhkvX7ye1aYsW9YxqGSb7ULHHYz72KyfnDMDZS14UQ5541TA7yhWYUxSYZ7KN8hm2BQffvCwYnHpQwuoMAKk3",
  "key22": "5GzHVp7Xkz8K9iEyBPMvuX6tu5fMPwfKwFrnMiuGESoTKi4DDouaYCwiaq38JfnUZEX88TPwBd1UNCDoKo2w2mJ4",
  "key23": "3SZjPtDCqbyii4D6Y6zN48vtBkztuxZVNFJtAtCn1WS3Yao5s9povQRxnAin1myPq5TCxfanUTEgAjo1dC681W5W",
  "key24": "UzXQ6NL1ABSyYH6DfweWSBH8qnmTdTQnc5xybydUyDg5HmyGsfg7osDeYmX5jFHCTv2EBe1DddFqGY3sX8S7rvQ",
  "key25": "22u8gJwWasFAXvF7i6G5fGv38QgsJTPoLwhCExL67EQY41xi1vHQNxSgkYmTN6mezpgn1PwFaQ8p6h3oPDYLLapt",
  "key26": "oYwbJK9acynzeboceUjPpE979eCxw4LkHkraoGGWcTEYAb1bxBhuCfuZwwEDyX5244dqdMrdeEUu771esFsVMWe",
  "key27": "2msd1LBuJSVXYamNxXv2escUGEXoFWwJGkS4QD11DWZhdXv2fWGfYKNruXmUGKuaBBwPPSsUVRzYV3KudcxGyUuM",
  "key28": "Xb1qURp1wZRPWZ8a56h3PB5xzLGe5HAEyEBNtvFg3fx1ErN1gNW8sZmJpeadnPtgJWHWXUKeehP23edF574qS4Y",
  "key29": "4KYpjm1658iYAfcZoJ3LXAfug9encmC8zcc2A6rFzZe4ZRSYijSM9AxFiW6BfVyY8Rz37StoCm34gcfwmwEMsXty",
  "key30": "2LxKs6SvKCSAXhFu1DXW6DYV4vivxF9dNqsqpRKNPFHeYpiEvanh7tBtJw18MA3rnAmkUWfJTnQX9AJH1NrYUSjp",
  "key31": "44vGr4RMitj7JD72ki8EdjNmA5hzYTnzf1RNJjoxMvvBFHBy7TFmZfm8pZwFgDwkBVp7uDA4ouMTsgMv6d8zfm5r"
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

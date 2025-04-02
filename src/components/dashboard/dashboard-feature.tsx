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
    "3T3V1ziDJPRTLLavBe56QN1DuVLPWokQMJqraYA8xLh96XFNX87JNkgKhecD3oHs7G4WJnjDSSgPYcu3HAFbvR5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o65gFuzaz2ixZ8A7M1oA6j1YwQs1w2ynH39LCM3RRL6zMTEDfqSVZQTY58dvhPuTBVjVQAhNXZ7TrXbxduzBWof",
  "key1": "31sunot3xVa5PYsJkebQxwLp2E8Gf6jrw6r2tRZLrrLJ24vNeqGD3VrHpDwuumG4Dv1URzTP1mAfg88gMsq8MTcj",
  "key2": "2hRN7D8C9bgCHMhGrVDcRcgTqqrUZU91eC9sFw3qZZUAHM7VNnU2ps5bwbC3nDyjVdA3j6RW7VyWAoyk5VNPSSXF",
  "key3": "3RfH6EQqsGveQBrFg5E9yqcTxqsxAt6SyfwGqtrCtRLHyY1mBh4Suy9BmcEqDY4TFc6v2wZW15TNy9cGTX6npGDX",
  "key4": "47TKQhU5C9kHTSgMDVzuvX6HLbjVuuoF3WhURjxub8GJusYM2wJyS1np5uSQMx8z3dErjLRAtX22v1UGVrRX8vF5",
  "key5": "5PWqDRAmsrK9DyjfURfFvuFiJmD9aWRg9jNp46YPFWEdEyKMKRvheJv9ec4hbaQQkvXqZ57LsQeC6Kue3VW1Equw",
  "key6": "24LLaApnA4MP31EWJekZghykXFXSTMQyaf2wh4Pffr5yvDwJJky1Dd8BppoDXARTAvgcUKZpgsi78YWcvdZUrr6a",
  "key7": "CHuT2zZ4r2ZuZieUjoFP6RJVuT3rhUPckHoY75LRahK5Hiscnq5M6A3ZgLoWekQHPc3qq7G4NArPmjfR4Cs2WSr",
  "key8": "2MBV9ukxdBFbq5Ur6PjTouHWdmdpzy3ciQhLC37aPB72eJrFyqZsbVbVBPEjK8kZAdikWAvGv8y5tnaRHtDdYM8B",
  "key9": "4MogusKUaVn3HtTW2KxFacbbtvcMFqy7u5ZsQSjHVvPb8atTcYr8vFvyZLL3Tw6RL6naW3AJxG1biSyiZPJwq2qM",
  "key10": "4fNi5FRnnNvKBvha3h8AZyDx2YKWhmNo6tgVSLBAwQgRs1gWWhiz3nPhcft9wKmRwZuJqsJYury145tVZXMjtTgB",
  "key11": "3UU4iJYULtf6hQpj2rjbjWnpX3DCmVk6CpoyPbg3eJemFBZRDy1q9CpSHzarqQV7CTeLLRyM2acJZ5SHLAWCXfni",
  "key12": "SuGcZep5EkpCR5zkfMAnQ8e2vEAxTVJBjKgkWu4k22uNfitvd8umdbk4Wqewvto7WDAaooNvv1WhZr1YwzFdker",
  "key13": "2QWNsT8EkspakVQcNaD8tWPJ6HK6ycgSRUS4nUxD32UkV2Hm44phs67JzHF7QFwsN4AjHqVzrVAbMvZ7ZhBA2y5N",
  "key14": "2zMXSkq7wJ3yarcjbTN6Qob78RLyBYmPK4K4EHiCLFcHvd2S8jbyh5mxi7xcjXnoG8Dq8imDyZKqHy6FyrWbGsrY",
  "key15": "3pU8KF82TxwVwP9ZBPB8347TVmuNsNUVFQAVQkrm84kpdeZ9y1Ft9GKSHXjPhg9UJEpBTdU1qA4RgKEvnaym8ZjM",
  "key16": "63dRtFCumP8wjf4svUT57th6PY9sZEUbeuh8d7V8RjgK5tDRf64r4g4aaohBFZcrStVXC1QM1ghMXHVrosFGuHpw",
  "key17": "3cfmyGaff4hsfSEGGHyvJnXTWfx3bCfsmZaE8YWrbxpc6ptp6NTmfE7AKnxwAnhZjzUNZToyZEpTBD3Jxrn1Fgwq",
  "key18": "5VXUtmbng45VBFvFXH5QSrk5WHCpQ5SFrCHUGeWyS4aT3waKfbMvoKD247SA795MfvrdWV6VkLW5RGfZUQWHsqVb",
  "key19": "4HBfLC9bTqf6rohESjXZWqZjHU6kiw6F8pWipK658aqCr4vWCSrz2hb2ruEd3VutQNnmS5tVd6cJ2g463GhJ5fVe",
  "key20": "4GpmbeTip8WXcvRA4VVMqdMFSw319QCdFG8GAp4gwGLr4a1Qc19bqMe5UugMW5PXQwte8X8pPi9bT7Un4C2jUkGm",
  "key21": "4hAsxrbYmUDeq1Fc5aga3RdJ8gsVXbf4BWjGkeYx85RsZSXCyqtZHzznNfKGvY66wSrvqcZgcUX4zBBp7qtGKfEz",
  "key22": "2SPHLqXCvGLDjh95SWnuXn6fcm16MKpG3h6o6DyCMBkmnxoYccuWzR2VajEgnK9vKA3rqGmW9jt9HnYnhih53FiW",
  "key23": "2aJ97UpohvmMMkw5q4AAEfW1gjwSarsrTUYC6uRWfuZngrJ8SDW3hL1zF5pTJFDh2SvJFpmffTCsRt9zUWCw2Zts",
  "key24": "kBCRZYoGdumLXds1vbotHbZwgrc5Wq3os6k1nhUgp3NJFwEFr2qhiHp5HbqjzXSG4A1DjiUpaT5rzPRNzEkpRHt",
  "key25": "3jYCWFR9B5hnwebR6nZLYqRe4DX6pLaJX8CWDNQszXWn1Wij7CBchfKTwXTTcwNqM3gGPh5DkDQS1gR2ziTDzf4G",
  "key26": "3Z7YXTDnB9nENMochDY7usmFtubmN2VhM45vskXNFxDDreaU8r9YpQTTEG13JhZ5ajhRCwaBKfwTDpXExhtZBszQ",
  "key27": "425E6vQaPqFow3Sj5rLymcPtAAtTEE1FpJWjvJXMRL21yDfGFbaZ18fH7VPCadujjXEoNHWvwzGQPyC4wZcxpVm9",
  "key28": "3tfdJYRKEZ1261xeovoRU5vDgTeqLY9JZHoAXBJo1LFzKNdutcoQSHB9YP7YsFzn1tuyfYWhkrxJUKDsBSJSszgS",
  "key29": "5upKhuo7wMQXQoosPnMCD14szr7EBQBBDt1A4pLR14qCx6LhNu1uiBFjhc9nJHAxFxCEnHiyZ348Z19SMKjtkZxs"
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

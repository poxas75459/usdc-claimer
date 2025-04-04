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
    "21QT1db3TSVouYJiEqRhgzfwRmKS9vKr8QFqcVPtioW6NfLCkNJGz1esCdC2XAafWEhLHB1QwyjMyEhsgF83QGUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9hs4U8DgNM1mk7oSdm2cPzKe2uGtdoiTvFatYaUaXkL6nh7ALU58MsMG88k1NWd51ta8mQjcoJNdaZD8muuWgx",
  "key1": "3QuwdT342ELmK8p1qDSCf64vGpe3DqCCETR7BfJi6RCmpKpn6k63qiyK2ASH1KzLST8cVrzR8Gcc8oJLvgWdZGuN",
  "key2": "5RE8PwREj5bc9MZASgEovf5sMBgYTpLN1rE8vboAwB37kGCbMfs88pXrgJMSghYfQTwmRbXbf44h97zY5puwGg8C",
  "key3": "2t8RactRc83DTx1Jg9q2EmpgLSLpkvNPfgtJFQzUVZzUVyaPdofMNpKgpdpSCzUtTzLBB7XvzYnMEMHenDPyj7aF",
  "key4": "4PnR4iC3GTCVVxNPupJHanMyvPpru6EBvw3fEFBBHQbc9S9CexCHUz7N7vD9ejai5wMk7w78x11Jdtx25PFCLAh9",
  "key5": "914HBd5GbKjw5nMyMbBSgiRQ67sEL7etUh1ceQxAQDYpas11L9PE8RSXgpMqcb21rmLBKAz1KkrAGQVuPYjpnZX",
  "key6": "48f2FpNUCyPWW59XRhH4UszudADQgL7fwL6myXfRhNwh29dWwrtzNF9j2GQCntziDFbKGYuLrWJHKrcGavC6VAUt",
  "key7": "C3J1gE1TNCJ2kgWaFG7Deq6v7tx75pASBWtjxXL9TmwuAKkTnAodunD1acT652fMf6VYHyKjC6XudvLiXWM3hya",
  "key8": "5HuktJiG5ebgPLCdRvtg6Zyab7v3wfLFhyo2f3c25y9seuqLro9skFjDmfQ9UinQxvbYF4k5QpPTtjgRYicpCJ1v",
  "key9": "2Az9WpAaCrARSHq6c34GhQaqdFzkiK65iDeKVxeg4axP3tUzLkW1tLPC9sVjA1itsxWwo9JJjGeqWJe57B4EDLNv",
  "key10": "4GPSPJc6fDsM4qLJ2bowqirS7kJCHNA84FbQxbWJ3A12BZAQrsboWXLknozYa3hJN9Qsq4tZ5uHvCtTkn8souNAa",
  "key11": "5zvorZTFcHRneVedt24uJUhXJbcjt45XWdQijHWmTx2rEyjqcEJNXrTzjjXEh5Dz75yR6DdyszbVCuVJUzD5cyPm",
  "key12": "mzeuEq7iLMTd5SHsqRh1bhWyKGdmc42zHorhh1PXeLC69JWXRL5wQm48gDF33U1d87PpLBbYfVNdvjyWJeVwAHv",
  "key13": "443WWHNURQPbme7rTuRD7KMmeVzgag2UKHKdSKbetcGvo9s4mNxot8wbGcnybs2xk6vcqjtcVGXpgXjv68xjYFkN",
  "key14": "2mPmcDYG6jNZEcHFcY5KViYHRP79Kjsi8iW8HEQKhwxgJWt2xLYcM7fa1qqPqtLVdRXM9CJgbzWLaHoW88GaapZC",
  "key15": "s7brGX9GS2BnehBBSWf1cAPargT76Sz3gHJCynMCvY9T3coBQsqEq7yG1JUgu6a8GQ7PDa5A3X2sLTm9vYkTEAx",
  "key16": "5A1PhdRq92EgFHuAAVJPYnHwSRaXAM7VU4nATY5FSnL6QTd3qzYSULbrSoj2xnr572ZsZLtm2NE2kSNtuLGzrpsU",
  "key17": "5gUwVS7yongtNTnYHheoN5pj4qrwkcn514jARFttskB2cLVwjGmm1SQjHGrHjRyVadeXWWYj9UFaJYjrsJnYU5Ti",
  "key18": "3bP5wDuGy4niixApyDHQanzhBRXAmqRngBhwfFd66diCRCPcQ2wtqEmqfYrVfxHh3tqj2WrQa7SbjbmEYzJwwqgm",
  "key19": "E6uckad7j1eRAoXMgPaHCZh3Y8uMiZjyXJppagSK8BLMtHEeoLBGDq9ybMiDVmUqUoX34SwwAn9cDtDqN6y3Te3",
  "key20": "3E6kV4M2LGfZezqAivyaRehLEdYYDMAyq5proY8s8sMCPGDxNd9scysxYqbzDhKszRchX4U8WFs9tKcs2n6mvbpf",
  "key21": "5ehEZaPRER2YcFA2FzTajKCcdujUkmC1iMt1wKroEpVW3eQcPR9KH5o2F8Rh2mP7cqXubg1aUv4s6AL7T9jQNQxy",
  "key22": "pu9ex32PKZM1me5NyLqqKv5UiTu3iLcxQ4GgrFN3TEv4uQTDTc6brPrTXD9n21F6wf5Zd1eGjrPYrsb4zm7GfHs",
  "key23": "4rMhthQSfUtebpKrtz3H5E9hLsyWkGnmFHvhe2RJKefyGP2sgg7TVLCvLoXpBhCNzK6WZGXVTaRBQqsAj4CfCboj",
  "key24": "2yVxEVvdqEzEskv5BzfHKV7o7cWqVP1GGMTne1oUv57EWJAybGajY5eEgof6x2RqAYPYNF9EfooSeSeYq2AQytJX",
  "key25": "aBMCEmzbJrFNtPNfnc93ycQ6gKzLusQvRxyx6EzE5wU7DsttuujVid4ztJYT7G91NGQQyLo3ujVvVqzM6f4yUu7",
  "key26": "4E4JMbv7JJ52eYBYCPr1QBUDEtLrfsqZWr7c1Wzw76ajR8zYu3yiN6bn6WMGwfqLFqpNQE2HVmn6w7pJeEVs9ufQ",
  "key27": "5MGzNXSZrPCHXtkdnWsaFQSmiwVfDbSMHNMkpWvTKdJqLLXGa4DzoM6Bkas1p5wA3dzZNSY4gmXPucX41rDphVwc"
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

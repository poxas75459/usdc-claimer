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
    "3VSwa5n2PU5j6Hr1J42b6cv5LKb6Qkm9cABiKF3RSV5UCJhk6caih7DDgGob9xbikvuTzndmNtNFeoDM4catTPbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zrTdwcT3X1BD6WfURfhr91EMyE3R4WnqeQN4YPEsu3JHfbxL1pHFJTdSWukwcN4o64ZhhRTHUnsYGRX9iYsboE",
  "key1": "2igpDneWK2Q9jPkXEbcZ6vcg932Q8PoFCCrX5qtERVbunSMgPKtTuFqFCcKq7qEW2gu4pk3pt4xm1bUNY7o3XBLX",
  "key2": "26wCHwzWzQ59rX4ThF1iDFZvV1r6peb7vHUrREiz17feaXmme3x7rH5u1xZoYd3Sq1bcCPwR4aeexYsbwAeXf45W",
  "key3": "537mpiADmF86RJD7RxXVFvLBNQq7f3VUTprkGMAyM7zHdqhphyF9bmRQHVXb7f6D2sabZrkygZvd83PzpiuNvjBe",
  "key4": "2eEnzKibyzvoGbh5b4YM9FGwLFgQCraJQ1SBDH14NozeYQssMSd6CVFa8aUzsLgWc1V8uiuKgUxsdKis7yNVjvuX",
  "key5": "5V7WZS1cBCGFG39UTFszKBSfJSReE4c6BC26vmaJBG8APRBSQnWbsoU6LsphWa5CU99XAihEf1VNTx7BH4qPBpNf",
  "key6": "f2Z17W8yybj5kATzqAQa68h2ynrGXgrE1Cp5SLvW2sxATTNJaRmwRhUxmmsP9Y14miRrXyM4HGTy2s1PA6ZLPxV",
  "key7": "5CHWxTyL7DGTYP1aDhLKF6tFQvrtpnAtBooJUnttnCyjhQNyvGXHnH59WeKgvqh7HPBvDzT64iihyzfchgToxBhZ",
  "key8": "2dBpGGgs9PBN57svSd3Zf3vqkyJbkqgAB7k6TCGLf9XnuRrYf3ncAgmJNdirgJQQUZS6QX6rvwXZfuqAqXNMeheK",
  "key9": "54VgKV84AD7PoZmoJ3wNYWjEQa8gtj1dpeN94J7jiFB3YAdnGGuMK6D2twKgQGskuY2eKRPeN5fsHYT4yJAKm8mV",
  "key10": "3JVMgZD8gWiExK4KmtCKQ5BhQwDTokd2Fas7aLimHoCbEbjBdeDTsaCFUFHvuDAVfujLsuLDqSRnZMw3eXB1XFTw",
  "key11": "3Zebuj6H96KZNT8BrXNnNJNdJmrUdsoJrFidy95wSBbvV17LtSgwdBaJGmK3mY7prH6HQ1V4on491W1pSJzaAwGt",
  "key12": "XeVcZfidH7JP1aSc1bXm7T9HAaR5qvSyjdf4Z6aCka6Kaqbke9uA2pUqThEuW4Aarva6QrpWwW5ZpRLV4dyikNo",
  "key13": "4eyDXwooQNYRi4gKrnfQXNnBEKfzC6tGJJGKbHDNQR6qgKmEBmxBCTwBK8oyS3CfeMxj1jCoB5fGhGqdS9QjAwNr",
  "key14": "32Dwygv8izTPAi9Wecwetm57h2aSq1PU1AA9yRGvAgdSZbEk1zitr2ADbYtdMoDvYXcnmEHpwNCqgYMuj8GXJvAo",
  "key15": "3Yf2jcLWkrxiLsFttngYvgHpgqFZj1mUteb9i7Ri8KSTsddtZeDiXC9rwDnvmZZyy5xp9f465aP24CZAm5rb6nM9",
  "key16": "61kwKj6uyZSRtcRxBUVCAXQ3VzS1JDSRxFHiZg9TUxrqep45pmPxnjH2vTtuTsFphkFP2nAnco7iDMLmJv4KjfWt",
  "key17": "2Azpu3zz2maTfocGLBhfieWqKgmpjZVFsWzztu6PFZatPHhA1EN28tTsKLNLJq3YDgoGYUywNjojA2yFvZpmnAS7",
  "key18": "4SUuGoA8maiKi6gMtkk9TWG1UeqhVfNEtXe6Kb3c9foNK1LjNFfpaqQqBLpUfDRSJ95RS3z6ydNByC2CMSVmEkzm",
  "key19": "5QmnykY4iKHTfh3Ud6amAVLjtnCqJwvDuZ9NL6Lz7LBFZNJXRvwriEeKLdEWRDh2KCsvVkkCY2qhcoyhdQd8XTDQ",
  "key20": "5GT9w24ANoXoMBcSgNrLNtbR3kZZs4PLrmDy7L57vbkrvfXwJpByxVoYuwACBsi3xiS8h3sdAhYewz8udc4X1aob",
  "key21": "kDjri5dTSa8hfQ9wBCkWsRs4eGUqtdDrEfMCffbue6BxmwatvPr5eZfKQGSAB53etQCCJViUhntwrBA4v37Npxq",
  "key22": "3ManEVcPAGnNTac1cpk63e7Um2xRTbdGaaWTdUEjbCMsrLERNPZpYStKsmscuu5XMWp2t3NvQo9tF2gNvnbZJK3i",
  "key23": "5MzoQKqJ7GYcG4ce57WtjpwBcfhEhnwaKHFHArKDRootD4GjrddSLMkneesdD4af22aNNgoMixvbZ7v49bfKyZGE",
  "key24": "3LEZ5hpm3KVsyfvfL3Ca74yJMPJwzLERNBwNqC3ek1cJbNLiSz2NGxKFSpSP4Gb3nJPDHG624n4HFWo61KnoWCZ5",
  "key25": "2Gnb2xNdKPXqeMzo8s1FMPuEzvYsK381QvG1UJDohX9Q9vMtTFLcRPfYDHrcKM8zbX6KeCy38YESsSWkeUf9ZmrH"
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

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
    "49NWvNrnikEdt2QH1Q8n4op8AhizbWfosn417tBxL6N65qZiTLUZX6jh9LyBEbHrxKoUx33uvuz2mcTXhdWxLycs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNBVQzxBZKzCMskbRP3ZoqrPa8kghcWoKgvgYf6wcuW5wYsFgE1rCPmVySedw1Wg3afbnnBHucX5ww8z7zB5e5N",
  "key1": "2GV43GSGpuzpv6Zbu82kCy4WtWqaagRwgA71BfaE4XHgfzCToC8ji1PvKiSzDACtCf9bm2cqvip6M6dzG4n4kXEg",
  "key2": "4KGcZv7eo3jLUgFuFH37Fv3b3bb8nwG867xtzxcpSGqMJeXDLwP8aFQBLZpSf1ih6yR64DAyze4F3ws88WowuXpx",
  "key3": "Xannk3C4J8BMj9JaK8THR7FBn6s9bxoTFMDrPfpYVvF6BZzf9qby1LTiVSHkwwk3eKyfZ3CXBrRxfSEdBAVdvvs",
  "key4": "2KNTFkRCM7ahq2itqyB3bHTXFFyLYi6up9uA3JFCEmQ27XbTq36j2gVigjwLsAShHM4zaJyYZm2zW7UjfhE6KRGA",
  "key5": "5rtwWqfDo6kCsv5D9JnLk7UHNgp1w4KSwGAXFDDWre1v7AhTpaZqeQsnoxtFGbHnsoSsNu5698Z3ACvidR2dF2G",
  "key6": "4iaA7sStTzXeoYNtMv2EWKHHj8JyH9xaoff4bBdQdG9PTnP4z3WKQyjYCpG5mmWYRVqnzB1jZqFpU2RtJKWUQ8C5",
  "key7": "2LcPbSuBMeNwRF6vrpwKqofSy6hP9cfGYtu4pqdGQtdQ5TaQjHyjNekLDFjE5iBsXEuciR8RnDQLCLzJVusS1QQL",
  "key8": "3SGLUnkUmpJvAQ3hNt2He5pBpKua2jftVucZMEm3b6YxsZhgPsc3ZgbWNBobYaAbk4iHgmJT59TnSgFXgDDA1eKq",
  "key9": "4JmWwkc5pZtJXGDBv7JusyrXV35CZB34nyAxYJWJdeZNb767ZdMRgZvEXRGymkoWhYbwLqY6S2WLVeBDcGPxEchm",
  "key10": "2wCniBBKQAkGGQesjJJTdmaQu2ZbUwyeSH9qpfVCGanKQPUW738Vjee7RxVZ2M9Z3vNk1TtZs28HqK5YA4Whb327",
  "key11": "2oFvjNigerq1WE9NmN2JPeqCjFpSkjNA2f2YjRv4tbyCkqzRRmJuTDwAyANERhRSqax5NGcmnTvX9nTgXPAtp9xE",
  "key12": "CRVYzPyhE866jvCZZKZmi2MFV8thcafFtZNPjEqQNnJApocXRytQath5vr45M1dSv5kVmrMkepaJpZ9uU58AeYa",
  "key13": "5eHAnwvSZLMviztVo9rp4kjPFyWHasHtjDUr7nkynDJ4LNsShAWMmboMe8nEjN4ZC55CzojiCuiN5atVsDgLmgm5",
  "key14": "4q1NFg6JFn37nTaazeigR9EcV83zGoAmXmpvUzMyeqYFtXE3yJPGrpTfeyC8ZXgw66E9aDhbyYwCo4U3bsjhocYB",
  "key15": "5e1ueFRskKLPwWJSQLJNybVXQp9hdp5pBNFkioSTDBGBUPfdSU3U5AwKMqxEq9dojNTt4ekZcLW61cXnxFTCi32J",
  "key16": "24HpDwz2zYXXuoCFcqzi76GceV1VzqxiVc5QaHHw9tpyDmfNSJCynJSzecwGqv2uuTsjFP214CnKBKNFs1diBCAb",
  "key17": "Esryep4yYKHvGha75oJDLprZej1dga2sSZqDswiafyoahQzJsfcjdb3HTfe3bZTwMe1jKvUnQjBuEcWbwdTuWLW",
  "key18": "4SUWJ4fmnEtFpUXpkeoDzdoR5dhqmqgznsPghtW6Rub7jimRNQKmd95cRpgLLvbsGQAJZ8S6F6chzoW3hMrA7wj2",
  "key19": "71Y5aQeftDSf9Aw1rzbZopT6pFn7PGCy9SvpF3DAL5kFyhF3LFHp7uGrieXQ2BkzixVhHSQQoiHUFMgtpUqoz86",
  "key20": "2MoQjBD3vUgcqhmHwqiYLVpCrEhVWzLMtYri5GgMGcbNBLt8XZKsGCzCWoqmyP79nzMMn1DmDnxv1riwAgahaF24",
  "key21": "Ns3Lb4s3g5wWHouBkmYapcFyFuFcdSWCVB9UcF5PDb8ceXe1f4e2F6Aqq3LbiBS2drmyqRnXnwF2A78cU5K7KLm",
  "key22": "3hPyHjmGHfxymRj8XEbpMcEgwBba8CT5tS6xwxKodSQtitwMp4oT7D8vReL6ftyZSKfHs4bRTpL1P8upYQm6jTYT",
  "key23": "hrjUVHk2aM4EnXm9azfC2x34VriX1TxjJW9qDHugFPMx2xVHjYT1tcL3nKmi1y9hHYQAPfquGS9fuJShA4PMRUT",
  "key24": "5PmHoLdWYrsbApTMxaTrXqVq9tCeJsGGFh41iZrXYxCMY456b4hDSFUgj1vUhA3FPEtv76Uwnh1Eavp3rQ3G4jCo",
  "key25": "3JazNDstHwQBUPimpeQUFfyiL2sFVPYa3Hx1ZH9mpMwLNBZXRKbn2uZL4zGo4ksyTxNWeqyMQgo6nEn4M5TLmWm3",
  "key26": "4WDiqksdAjFG7womnXfPcqCdBPhfkLZdS2BsUtyJPPEuDhSqsDNZRynrHPvu6MPebLT9GQJ38oAGa7rKhEtQAEGW",
  "key27": "2H258hB2b3sqF4eZfb18ybSSvNKgPtBNSAcnufdLjry8kK4JfuS9DWcYvb2cSvftDSzD1SiCAchNa7Av6LrD5Et3",
  "key28": "4nKUWwu7q6QzhypGpFpuVDxZb3AzgHF21Z3diGq3o6FgrFuHFhBmmaBGhn5YWinsqemNWAVpPohkma7uDPnAvBE3",
  "key29": "22cwa3DwL1g2jt2KKYs1bLzayMCA7HWTgqRKwGgEyBp45UXFTu3daYAAmDfhSeYUWELjJYRCMPspE6zrHFT3UctL",
  "key30": "yZSiKvu5AXiVm6zAxJMvtjvSc5Anr4cLME6FsB8AHoStKztZcSCfCgR98SRQSjh1mRU18Ax39jZzqe2WWRHXsVX",
  "key31": "e5jBVeDx3BScCsqxK6Yk2aJPckg7ENH8gc7sywmzWdd8mGytsCsZkBE9wAJbxY6RagX1dJJYGagKCYFAwLZKEJo",
  "key32": "3X3YmtL38Jo9t2F4YX2VhTco7MWLECTtNJfcSYC9m1rq3yK4p1CFYLUiT8NtAgNyjn2SyJoDjBUbM6RKSxY3QAjR",
  "key33": "66D8PiYdVMj5wGSmASCy4UyrSrVgBfbDqFaYpbGVmGi8yeYWzWroarJxWLu76zqZ2xKhc5NZJcm41ddqm9D3Nuu9",
  "key34": "4DnmSJZy9mnDDPELK8U4YgVicGik3nLZxXDEdWYtJMqFN8QPuHUhajksL2BDtADYv4PKzfkGyaf9HXf8GhRPmd8f",
  "key35": "Jt2LM4BiZyu3CFAMTUAMADpA9Sx1cy2Z5nL7ADKhLkbbd4Bs9EYqb6zaoYrbFQ4uZ6TiC63MQUVNeXy6yDYqs7z",
  "key36": "3nssdk4B2cRyP8v2k6ChrxetJGwyeYuG5W8p2G7weXgcqpGrP6mZw7FHADGwpdL9oARUPRbQMjeTYSXFtq4d2soN",
  "key37": "4teg8jmjZgReoTETyDy2niUbSJfjUXhugNeAYx9PmKtxeqj5Uz6tJid1xPFVPe3df6RLx4pwmm8GGjCsx2zUvftj",
  "key38": "3PQrQ7m51uMZzgKkLJuYwJHoDmeZqZ12VEMGxJuTmqhKXaN1jog1MD9NHNfRcPPEdCxBLDboJtPFmDpzjsWcwErr",
  "key39": "5tehmkJsVU2dL3aVyh4LfjbjmWas3RkRfhQYtksCyHeESFgEJPNsj6174C7hQrMT5pu5JXyXiy9vkfrF2b14YqhZ",
  "key40": "5VrVEnHhPd2ozJB3XroKK42AVtEVYvX3ahC8CSjVyr22ekQrpZUk4xUdBiBySVBbwMoG6R61VJff6RaaMjmPS1Se",
  "key41": "iVc9cZqCCZeHDk8BRUmHQSZ9V8kFfiTsF13QNcnhSSeBL3JMwB8hdbfS8uYFw8bNVQee5zMovLAbhH3njr9ARsN",
  "key42": "4MLwy61kFuCZSi2gZoNBjChdNePZwXozAvoTauncyF8xM5C4TmWdGNPJFPCWZv1ukVzYN8Yk5AYBhcrPwb4HCkYn",
  "key43": "Zh78iLwym6Zr3xfQiULCy3SqjbL4AJADL1XoFqGsGTAKABQ3iJYWXE75UMWqJ9vpRxVMcfJBFnGSPdUXKZ3Anbk"
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

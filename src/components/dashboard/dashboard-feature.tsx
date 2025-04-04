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
    "2aFhEz51u5RU88MuebcsUypDHXhpz1jnRZ1aBKvywvNbrg4A4m78CTeUP5kruPYfScReqc58yXg45NuSMJ526Kwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diJKNrJxCWJoJt7pxhGDv8zyLcR7c5g8EQWU4s6QhSb6AUeNb4zxcsBPZYngkp87edGEBW7omykvfkL5UxsSMCm",
  "key1": "42Ejer4RRBTDpuvR65CVJowmarzACncWUZaLGdmyYFqAunqgPRqfAjFsjsqu4qnJ7p9TfW6iGNRbDxLASixEdaVZ",
  "key2": "2Barnq7JZ4n1Dh1cncJrdMQp3YXDhbu1LTbDCLncgM4gJUWmFNUPoZMjW5exAY7GjJoN3s998UewQDZ5t9dThWWG",
  "key3": "35GqHjYvzL1ReSeWHCUHbHukq48PBiGrHziQ1G8hJdbk9ss525TKCTp8VK1GLuT9AAsuTPFSBUG1ugFYwgTdseXS",
  "key4": "zZx5L9YDkoK7dRXGk1qXRJknvav7BEzjjFfK6ppeFrVNz2E35F5YoRYt9JSGBVgGHEpc9KJosHCxA6qgJ47Se93",
  "key5": "5568W9YqBFwpXrgcVBGdww97Usb8CxF4YrKm6c8M9BKigHk7HdEvUkmvGRcoVSMyW1qZoWe1NBkgfw7Si1K9ri1",
  "key6": "2uX4SjHwevEWivw4KseR3y6HHeCtxzrVUghsMReKmdj2rkN57cyfH9KJ8Lkv1AHf5mGaJJkgvmTAbDtcnCJn7nUE",
  "key7": "5Ud984Nt1HJRLnD9AmPmm1YjqXEWjHyqrDhjDmimR4DWJHMcqA3Vmn81xzHg4JGU3RahA6H1VdxZM8t1DRiDdGuQ",
  "key8": "4ZDr6444Y5TJjTbNMd4P6gieYRs1sDCmsbL1hUnNc1xyTvyv6VBy7FxMyxQyNfT5V21qby7xFP5YpAFEU8mtNTom",
  "key9": "5wyB4MUWpt6RNkEP9DryaqMaSPfws2F2kj1uChhjrY3mYp78cTU3yoMj34j5csxSvwysuHDUCwxKmXwAbDEjkUpK",
  "key10": "2ZB8cMvQb7XyBCPxN1kRiugkRX69LR4QT3tQbXhQNviLterM797bPV57SWPx33qxNoht13bmk3jHC1MWnvHZrQQZ",
  "key11": "4piNaYsPKEzK2EXfjWF7hDgXoomZ5bdsUfoHFu9nhrnigcw9NUSxccZag8oCovcWqJ2i5zeHuhnrF1HRmGcNaNTL",
  "key12": "5nXTzRctTWjJFMSNZGTq8h1nXmYRpNzeqbQv6ubMRow1boq3DBjtSWKyHvWR94jK1icEzXAL1YE8YnAUpvTJAMHP",
  "key13": "2qCwEorMRsQQttMn8RmkxzjxszQUTfr94WkhS1xtxVD3C8fgoDBMsx7aDeZu2reJoMttCugCRspnkY2yirZUGXsj",
  "key14": "2F8NyGQKi9hrKrvJjqYRp9SxUDEY79rBNx2HCegRVoswV1GA1txsSMBT4xhwkxrFcBi8XcNGRNAkeT1McYNL968A",
  "key15": "3P9WrXzgrH7nez9hkPv8qySFCmzi7of43EEtofX9FMA4PvsJmBAK3y71WAiJS49Cke6Q9idyrc9o6ZwRTEQRZpR5",
  "key16": "59L7bTk6MmqhHbn1cdRSRbavHVEiUVKqfTG4zaXkbvLHZkwX7pV4faQf5Rg5wubAuza78q9N9ZNDFeFFuUa3mvzm",
  "key17": "4pQrEZo7xGpAHwAyJdLuPyWxWpgqzXe1YAVM48uGbiGUYWsHwkumJB1QbvMkh9HCHfZ49pQSB5RSkC8RHMbBkTQm",
  "key18": "2kPt5NF92FDwxXiu72QkGFSHSMDWoXFarsY9ivyC1knJP6s8PKZzQTGQ4n125P2vHPvErwbPzpYxZoKSBr5DUpfY",
  "key19": "3Mcmp9KFfJprxmU2fNmpwWfs5GmBtMxioC8juqaPuL1q2nFBW3cCg9VqkNeaRiBynLmS4ra5aGfPKJN1k56bnrC4",
  "key20": "5GHYKgq4yKryfFoYiRoNwv6yu9XBc9j9karfs5xsnhNKcdZSwmKwcT5TLoHyDgcQzSqY6H1kWZ47XUtfjKTipsWQ",
  "key21": "5EgqG2xnfi6xgCxGAAYnvHHn4NRrDFpAtuY3W95XKNPQQUUM23jEKfkdupLvUf3iBuNcA3NPJbXz4gLz64GUidZP",
  "key22": "5Ue9JBjqLzEPBqRsfQesQeTG8Zf3iYt88wzZVjfWKHAkWDKrYRJwTjYDRuJmAobKDTR84M7C2Zdbp3XcQjGpmyf3",
  "key23": "2bzEjzRHayzSGrtgCNKo7dbwJzEKafYVTCx98tMfPpuTLaVVw3ouaUhspZZgWSSkmDfrmeLcBzXkm2M4xhaZLm8X",
  "key24": "5bHk6wKanGgnAjvReMTRfGJB1cZNLkDVEK5imeST1pavvQhpcEE71Bu3AnCukasPGt3NL4pj6sxDPRQKUZsw9Fyn",
  "key25": "5mp6FgEwsJ7eWg8cDfdiVVGmZbttqfkkLgp1Mug9DipK71MLtEHuuPgcdEwqxha2iRvV4DZe9fXMcWuTfZcdfEEw",
  "key26": "4tZ3Cj2ETVAN7Km31JPryYyCn3fQXQh6WCipri1cWdHvJvKR5ESee3VfBa3fUwkqHeNcb5WENASq4DjpWz5RrsAS",
  "key27": "qgvQxiEbs8xfcoEHf8yUeRLDVzQ3embgQmD1ZmAgUvnSbfgnmi42bWnner4VDGuJBdrLgfcW6Ai7QLZkp8iHaC7",
  "key28": "4v3XCPrZhXyo1jSce4v6JCRj7R1QGRudP8SkbhR8UeYKGywHyUCoV7fCY2d9tfHZrh8qidHxFWtnWD4aWnn8wX5f",
  "key29": "5ySNkBKzdXy71m9XQi4gXVpokbva5UMkanKmBMk8neMzLiRVVMZ4QpTfTLw9k34a85fDKBFQ7Bs7UkABTygjYfyz",
  "key30": "5scrK6AEus8TUJndcN7w1qYGCcxTS64ou59UqQSJjCyLBWYTjo13mY1nppqt3uFUnTHtzXxQZVNYakBGq1cuNRUi",
  "key31": "34KsPeu6Zdnox4gWAHCHhfCadiAfLeD16W1BnD9C75hm8sz398jduHzoYLnhSSVXbs1rWJz3TsV9CWfpsystWpYK",
  "key32": "4XjLr8fy8J4WnMyEWZaY5F46uoYE6TNKs5ji5VoCpmABktNvw7dDZsn8ENWVcJzLY1spnnvZKG6UN43itk8qpmUA",
  "key33": "343HMJzBymi2EPeDba4fuYFzzLdp2eUb9qYXLbPc7LtUC4PBLVvpShnH8oEWxwij5VEHEdjXw1Lb7SQe8qo3zNZw",
  "key34": "22R4uw5bnUQJvPTR16fwByBBLThpeWYoKSyHD3FzRD133D9VPzbsH1wytHSJsDnYK1x8TEsh8hv3QGPndvFndR8H",
  "key35": "2LeYoxW9VHbrzxrxXCm7PVbWnFwp13zMhcX6wsLbErF6KNR97cbn2kv1aoJid855v1ZdUgqpEmVZgv6Q6ZseJDk5",
  "key36": "3kUWXShshRNV2JE3nAk94Gnc4HHkruPeKahhqbQpxhwGabMmvBVZVNPi5SbjSJ4j8THAYnTwwcEv8ieb8mopFfVg",
  "key37": "etwrqVejqts6YDTJuXuBS1gzkn16Epet7rxdmD7aqJwcmYRYJ7mBG6WpSw3xx7mfSQ6adGgXJSm5DXGuRsmXaih",
  "key38": "23hoREMfHjCrfwcRqYQZb7TarmP57VFZoZYF2azoqpuhUmbeLpB2K5JtxyfWLVr7wdUT1gRFLJD4nwAFqVLJwDrp",
  "key39": "4yp4oMKdEA9Nvbt7629ywzvKLkGWGwAjAYx31McVr2JWx7b126eYL6HcgS4SkPJKTgANLcT6tfNGxPwo5fDZLWf3",
  "key40": "3jv4EyuqsQGJHisdpD6ZMa6NEvydjdWE1uh3ARwtnBjSjfW5pVW7mhXUbGoTfWerPWLmPHhLk17sV955DeNKMuYi",
  "key41": "4c28RkChgdAbpCCMagtvrPBpXKRrT2f8uXC5aP12DCspi9SoHWXDjsrZn1itoL2PxAyjuSWEjuSVSYzeL3dXZWcC",
  "key42": "chDzRqjYX1HNqbNXLKfoQVHVvesp7vKEJ92EvrvftnGu1FsbuGcJMi7s6CsQUxwvP7s7xzQpTADZU2zh9jnc6Vt",
  "key43": "DTPb7ZHHL6j5vveHTkzmjjzZmE9WLg9qeZ2Jp9B1CAhjhQAWY68G3qzFLJWt41VsSAY4aRywA5FfH16RUS8eCHQ",
  "key44": "2UVqx97PJPuS6H6nSN2ZxTsoASFxdJrtMN1tBBUqHaaCFCCCrCnbS7qsipufx7cMb61RBMZ4wedWgVLxiCnvEYzx",
  "key45": "54iFVAJ7CB6pE7BxSvixDE8QMMCtW3gHccVci1Xb7dPT5UXRmLyhJxiUF2gLRcj9z1md263yeVLXZ7rej1bUBW5x",
  "key46": "KSwYDqwEpxF1VATeoJ2wGu7so3qdcxztp7XL2ymeqB8zEGtqAotWh8oN9CFWuBeYCDc6azgSER9XssafLz8J8ST"
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

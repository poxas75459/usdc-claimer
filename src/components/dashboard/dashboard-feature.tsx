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
    "582riG52DEjFbVSxBvmET7vkSEjC2TPyT7inxxoS4jjYFAGAoZEC58CUFD6diaTQKnRsBCZBxbbP82UmRQRCFLpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48kXqH2U591myU7KPWGyx6DFSTETsSJ67sXetr3WbFUYHcUVaPeBvB8JQrzoF55ahyfCRkdrwq5LcTYBLYAVebNS",
  "key1": "wejJpsywELGxvpTYzZwN5zW8BqyzbtPWHHAGN1UX2eLjVKfMqFBBZRjCaQsQUk8qxgqSYsWfZ826fJGN1qDiGZK",
  "key2": "4yej6KXajCb7zLGJK6Atn7d9q2dh7LEkW5e1sSBptE6sEbkxw9kvb3Qa8z5mwrEsrAMK9oJBtX29aEXQ8NzRFyae",
  "key3": "26xBhUmAqmdS6xR9KFasHFoGkS5L6mDcBbHW49zHuD1LTL7KgTo4V5pfA6XA2bLLXBLJGJKEM8EoqFPk4yMboZR1",
  "key4": "dbdGULk9K8pDt9obWWDLfxYt59YsMsUUAeZ5uPbdJhdtYJ3VnRV4CBNU2ZcHrLBo1nRorJ6A4utyjixAeeYe3Jd",
  "key5": "2ajxmG5FKEqBYKJgjC6W3gGSNmLJP1nsxhDcEXM2xMFfqAr5vHEVcARTRQ1ctHsxa7r35x7Fv5Z4iLeNWRfPtm45",
  "key6": "3M8G8qHymnzb3ksfk4YmTKRQhgJyE2zRX18SULrY1ayCHKD9J7moQfxtNFUiV9p4i7K5um93oRXabVgVWuYmEFbY",
  "key7": "g2VWM1BSHFLJ9w5KwjrbrzQN97TKVRmFZZK7Uq3BRD97v5enEKc51ziYeLQC7yPM12J1gXz6DjHtTJ8cTWDH7Bc",
  "key8": "2YY4Lcx6MxCUmjPX7xPxCqqVKNNXqrLtZw5JXnVM8kRToRtkJZdBXrdu793qYWYhSdNXm2Wn7tt8ehF31qHUCX4s",
  "key9": "3Yagqyn8GgbUaLyV6diSK2oFXP6qEcYqTrfFfF5JB98kiS6pLtKJtG5tF4VJhJD9VP3739cPeU5c7Y1FUgJ3a6eV",
  "key10": "5Jxh6hEmv3ySJjbJqeGNzEDUoJbAnSZjYC2Zyg9khSiFTgpLWwhJeebC1Vf8B26SjpnhJjbYSVB3CKHV1KswPPK9",
  "key11": "5vWjUKdMhikb7zJV7kVWCinvoMPvr3vcBFPB9qvL2xeGDrhkFCqVU8h8yoW6Qmr2WQ113heESYyz5pMU4GM5vVKU",
  "key12": "3DSBgJWmTse4m2BoZ4kfn1JWanw69QBsJPW85AAvb5SBukcXmEYfnJzv8qnz3H27tBWioZUfeERqrsMEm3r5jxLC",
  "key13": "5Ev4BqipHwQeyuMeHcuJvrgB1dhcExVQeshJr3idudTWEWaAgB9wW66tFY9KapY8Acd4QJ4h9SUSKmsQtCUbhy8h",
  "key14": "5xkxv6S3UqzedT8GXZ8d93droexwtHZkpLyEjAwkd3iujw9znAMUQS3saYCeUwY4yHESbi6U8UjVJhDniDUyxMTz",
  "key15": "4eBMetzhxDzHRKEaTshXnFFsJoVxFdmqr1NLK245KMU5EiJnDmQ7xeKKy7aLpzPrS87GvV7CBCQdPjg2zeBtmLfn",
  "key16": "4ZmqpFocSHAwAukVVSRfW9wtZGBphYqies2XqngXXdD2q71GQEzKkqeKmAULBfvUmrWwuinTwA8CtxmV7SFzbMTC",
  "key17": "5Uj8mwixpynsbLtZ6rQjQVYkHK3H7JmF2TNErqADLRFWyM8qHu2GmXUwcZJ1ZsfDY975skhJD5kqJsWNBVtXyrrP",
  "key18": "3pAMXGF8VXNg5vSBPuUFNTtmSuNmLgPFqZbXHeR73vs5VtNoRJ6ZXyZ1asHbidnvSm5u1DuQHuDjiJnLG4PcVLpx",
  "key19": "4ZfzypbCAHPVrQwjavFdEJdL3mK89Z8Sk1P3Jbvc2joAakCCMhNb7m32S6BSBmwJWTGPp4VMsERSb5MK71CTbMpc",
  "key20": "2nyGoWKMN1oCr69mnPHDvwT7Zxry6b5V9WmQLH6H9mUwnuWxvEbPQei5dzyjTjNHknoaipe98L9ajpmnY9jTfpbB",
  "key21": "4wqyPYUp8m3dAUj24rNeEifRLXMwR2FomqryMwbUiYg4XbWim9Cug7g9s3hYQU4ArmPxFqrNrjFz1gJXVcmDdoa1",
  "key22": "5LmME1obrMLpdypyvGXi4mC62MrH1T1npNQemcd9iVqdY2Wkyqfb3UmtZarHg9Fixy4sd8wc72yLCUKhbWQ7Mdbr",
  "key23": "5fxNzq9SGxd6jPfwUmqJcaQ38YcRXwcLzywjL4DN1zvkBztBjB1jmtNm8Gf11Kax5K7Qrpe4xE1xoz1xMs68DpcT",
  "key24": "4GhcP3h7aku4zq9h3nyC9JBxik4riXUToP2MG21pC41nfQKw5pkCyXxi6b2JtJ6tE7iWUzSMACvnLsZGWSyVgbsK",
  "key25": "abaS2HVUNHFZwTrfXePP5KccKCKLRENPC1NQVMqmYa4i6BjjfLKwoaf1afhaYofSMmtm1uSfszU7tahNpZ2kYA7",
  "key26": "5zEsTijTR6HX1WTd3yLsimaCPogyn9FL7A4B9v2trLLn4sds9ZW8hRTB5f3Zq4yPRtaUpXhdHpFrL2TbMkmj5CJZ",
  "key27": "2ou3CWdqPMkEAGh5SpcFjpdgniq4dGWJShvA8CZDKYLyMy3mQuyy77VvfGJMV26PeepuPXwzrgymvFQ7SkKJ9K3v",
  "key28": "4cq4U2jneNKnNSkTH7aGeNiBBY9yHu63oxMtbzQ5Xjrsfb32srqWzuim7vkzNoFyqmunXtBL2q4FDYvfDoGF4of9",
  "key29": "3LmAVSmPJQHMToUeB7swExcd4zYeUZE7en8F9UySVV1gvbSc6QhEw8RFJwabVT1kTE3NRz89nmDKj495YLfS7zGo",
  "key30": "56oMTXrTeCD1X1HVZGFuNJWSHMhnwBNM2Dc9nqe7cQwDAiyCqMHS2bz4V6z7WPK9ySCQc4aaX8W88TxT4rnFnx4D",
  "key31": "5mB6ZGrFXL4MHzCBmhKMrGMGbc9u7RBjb5eWE3N1JXAWAHPLg1WyTcQvq3mqdXvpPDbXXA4gjopkLCRT56g5fvbY",
  "key32": "2eWtAV1whfhnAEoxcY26SXjW5f3ncPwJmi9wxCV8Egwx56MwFtCbh4gaJHccPp197ALsrzw1Z8QC9fCP85WYaqdm",
  "key33": "26oJD7bGcAJTixg7tpyeJunGJw4jHdXs7ghGvXiBE5mdpWaqTcrYQFuFucroGSouucYAcBcRVJ8wJinY3ggX5g5x",
  "key34": "4jQJbyC6WiZGHYdjgexXKRYMzNpZqRTopJahNDa1G8FrNec484BqNKWTKo59wVSbcMHQ8qVMuNespHye9kn1axH5",
  "key35": "YaRE88KMQH165QHfoGzCt1cB6Hm7q4Z74d6hZ64cQ5PzPCLdS9fEpw6WdE1HAJ8eBR7ocxyAw6fNgYAovDcg4Ls",
  "key36": "4fvKkTh5GXZXw9xVqMK8y2VaSA3vKxi8vzMXK761cRhLwcXyAkJgJc6cqmD8pF12rzDhabCwdNm9ETtaaZgmJ9Mo",
  "key37": "3HnHjAcrRoSQczDdnFVD2D5WbKkeZq1q333ygHJ9zdobeP91XhkdNDabypcr8iBqA6aLWjhsDt7rna8fpCpJvvAv",
  "key38": "2xeQLvXZgS9gdH6dYJGa8orNXSFGBUgoiy37PBCjroD6RohJJ4FhzihQrNCPwgPhwd1wPXJWevsNnsD1Lcq58K4i",
  "key39": "JqmQM5UtPscU4dzRkLie2Xnxcubj1MSyETfLQ5Haj6gcVr6sZELDtNsm33rtJJvzsTomU7c91WPCTFE23HGTQRj"
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

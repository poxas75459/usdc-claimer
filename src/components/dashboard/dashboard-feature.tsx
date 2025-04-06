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
    "5cPavN4UprduaC8TqYhqauKFPUf2Coeyby9hwXEKWDHksdXWfxm3vMeikGMV3GiEgradeJRPFbXMZemfiRNTicrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KBWHRYzKy6KKZzfy3tRXe7rV4JGUEmfbrJfq1WBRUufc943noKWNyFk6jyrWvYoWs93LfmhLFLQhH2ZzmEanvBm",
  "key1": "5r3dGv5KYmQ7Qxq7BiMdnTgrZ1t1H2LV888WqbTKrupWaY65DHQ2yihatRUnf1Qi5LL8KGfAcY6NkDfDf1jyjXTW",
  "key2": "4SLS8wdeqxuZL1RAJSJAM9Vu3nJyq2HskAFc4LUZYgZwx6E3j8XBKR4oShQKrjtwewgmxvrC4Xjrs2d4JGFoqn4j",
  "key3": "qvjN4uT6tWJMQU8Y625md1TbDPxbb1nzSXfyP1KjnEejirbdz5gTSaJZ7DwjCpmqssLv4e9CmX7AFYwhmTL2DMF",
  "key4": "g6EbrUomiCSUTcVu1h8kbCekt3y2853HfbH9knBUJY1uhnhvbVzGfGmqRWNenmARiuRHZffcr5JM1uen827CEt5",
  "key5": "4cqBH8bYVPGk1CMhpNXafW3Gc8yvowbbVdAXPPiwhpmAzuQVKnNduPPt4kFyTteNVDRRFJ8GQcY8yPrcy3pPQBQ3",
  "key6": "2xRj48Xn73qpCFarp77ZX4dDVjsbi7tvr9RpuABQLqHHL2Hxn59NC5PYwiwLTn73kjdugqrfqJaVEj6WxPf5bs2q",
  "key7": "KJAy5NS8hByVc8sEBAww48yVhbkRbsXsazPZp8QmTcKFQRMCmX6j3aHU8WKNozGTKxX9dKaxGkMAoMGbM97Va5K",
  "key8": "4vrj93oyA3JLShtkANPGSX8LbDZ4BvTrLpfX7mzWeTDvREjybmZFLuC2sCRAFLKeFBpGbkAbRtVeQZX5SVogCNDo",
  "key9": "3SNQeuzKRQZejEFxHbUaMWxmf6Y3AzPkYGsPRwaH7FsFaNJ4hiCFo2zJzd77o3wmpZoaLx5casybhYLgEoS5pdYR",
  "key10": "3tZ6FfXHFoRekFK7SuHjRsyRyc1HhVZ2xNVvuSrPmR1E2EWVARzmvPdK7h3s3F8zebhxNWMpTCGWUuhhxJ8ZtaHe",
  "key11": "5X25enieurmGSaTeguiXkuZEaYVsg51MFahV56c51CNg4MSeg2BLWcL7gDRcPLN1qKEXazUv67ReLJUqoyhUhyun",
  "key12": "2AHHNNptXzn5yGyo6yrhTiKHY6zEcDncxFdJ61ChsctfVMr9mU12Hp2qyW44iuPRaVgLJbrH2eKSs98BgoQ1CFyG",
  "key13": "4wBuhSCKxRvzTKzVMKc8onA8G7ZBx5zF1fFXTLPzLTrPf45CDU6wwUDs4nWT7kJWn2iTppa8XS9i2mxKohvJdUxU",
  "key14": "586oJU3HMZbefNyAefeg1vTTrR7rUbx12XoW4aN3GM4EXeD2H47wTe1tEdZgroVcGMGMnazUTyd2zXS9HvGSBEKo",
  "key15": "3ZMuyPgBXdrdGUhdepuw233m8gVRYmYGaSCdxhVQoe6zXjTuY1rfEiA8scpEdyZ4MJM4E6A68crQcbcsuKdU11yE",
  "key16": "63eqAUX92XWBwyunXv2rRjbqK3UJu1eXavwpz84nyDyn5ECG9JmEhKN5egrsjSSvo3MjAsE87hiHycZtpgfmAFcp",
  "key17": "5gctXo6yPiE3YZekTkrK5PQMB1P7oKz2nReF8nT81vhaN6AbGXdsqDf4gPqZWKkfcHrsaZGBgqzCfEjuzLDrr9Ej",
  "key18": "4pwvLQ2qUcdvv1ppdDJSraA6YyteyvqX5F7rtEoaSD6eVp9DXWh564FP76moQvWdaG6LqacTaaitbDT1vpT5fpyA",
  "key19": "4CiiiGzLLt6d5XUkDJT6nEKQusinMrxHPdXUDjtswU1v7TBeBBYtPybRXV4tGJRqfim7yycjE26jRo7rcoBmdYaE",
  "key20": "2pdR3EiVAHEuNnAkDK7FjoXhzCuibLdz4qrEweBcmQ6idSjDMyCM6U9hpGyibMgq61ykfsnW8dwgYxbKsJ3aEbYX",
  "key21": "65pPigTg4jCmcp6U9mYJurWB1bPZLEV5hbTZ3s34bbqhnBgqq5b7XC31JyD8oCNKBggZHnsLz84o1SNWWh5QzSsr",
  "key22": "2jmp9XfJSj77fWUdUY1tm7DvW7HtpKhLemtDJk7abYedrSo3t1ixA6hw1unjg522C5Jjs3R87jJCov9L6K3YRZAH",
  "key23": "413721Q2fYshUntuV9u1hJS6qopmLGEELXdgvCD9hALt9HkxDMaLMRHSAPr5s2XmRwBPEzoDsMZLqRBbrkJhU6SC",
  "key24": "2LdpoVkCW36Fgiqq6Dbq7ccgaULtymchK2CSgEWu5wpn12UVb68cWj7aAKeS5s4kbqcF5dRo8BnHhBA26fCQawdC",
  "key25": "3Efw9vjRLTBqs2RG5SSRQpFPVaHNDUcnrvshTCdBnNAMMA5F3Xa4Hgz6qVFh5k3Ze5MfDY1niyPd8pRVBZGBut3x",
  "key26": "kc6KD3i3kmM24ocfATpWxSdWdeSQPsU3xd62VAHvGT1ufM73woR6qBy1uZfmpWW34iqQ8Myw34h4UbNoJu9U8KB",
  "key27": "4n8UYveAgLb56iCDyCvhtkzj55TZKYtTwyD8Kjns6nt5ZqPWURj8SH1WhpCCuxHPtAuFEd1ffMWSzUmz5qzrmibs",
  "key28": "5YhQsURis7vF1MnEbWSa1ft9pPcYRNVxrVNeh4KUqKekJ3mpYwaZ83EEJLexUfUdWjot7mQwTKe9CoYGpkUjWMAB",
  "key29": "21iUDgB4Bp1G52cVrMmJBgnrjWQqLZkQyPbKqBTsRQPcwrS2Y2fZyE2sYiuLW58niYpTot4y6UeSCq1qKZ71UoWE",
  "key30": "4DjkaPUPxK2G2hQYAEuh34aqABgEGKE7NwiU4bNjanDGHiWw6uLou1YQzXCiuHcSpMAi9TM1VyqPqFiuF6BTb3fD",
  "key31": "4FWpahazCXqj8FGWMyLdqVJFB2X13gvSGdGbDzRa7ANBDPdb5KvrmiKvyE5JRQfsbhqutwfgWJKepDnFGAqhvA3S",
  "key32": "4M6LhCHRM7HqRns5wcnQsfhtJ4h3q4sEGKF7SGfRfvrGAXf97fGVLQXkREwHGbF2gzH8t9pUHBDGZfBLbbQaNmBs",
  "key33": "4ZxnWVRt3d25drvdgDDECxD5quxUnL41DhFB3LwfjPpuo3o62JpFptDzthyVSrRPGEWgqS11YznCx5aN1Sc48Ldm",
  "key34": "4Mn8nvZ4ab4GZKzR4wVniEBf9Z4mjfGUvnT71MayWdMjg7ovmW8zh8Ji2VQYZSTukqxYn3fxjgvY3WiWFaQxTqG6",
  "key35": "2VPe9fjjWcRqHEzmQWDUSHRDPMirqT8yHKfjBtofJVosr62TEgkfDzMQFjZEPeAQyq9WhTqCxch49e4AxckjinbT",
  "key36": "5dn5UbtpAJzRK5T1P9SvNkqDLu7Ce4yn9sYsBH6Z5LNZd6tjX7XBpJzh1fc7TrFoaNeF5RG75wZJKBWM4aKwm1FA",
  "key37": "2eDpuAhE17fRnL2WXFt2GkSdRbaSXd3dtHFXy5pPBk1NjpnNWp8GXrzcmyjuN7H8efgz4F7yB3nfzZry8ohQTw93",
  "key38": "2ncntYwGZ7erC9mXZd7mZqy6iTnYpGB92VHr43GNS2RQFpTarhVq5b3GcszHdQ45ohwyJt1cTyak18gFaCnFyG7f"
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

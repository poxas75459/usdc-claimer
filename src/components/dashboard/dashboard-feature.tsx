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
    "2GJT5tDv5Yrw8RqkjnyqhC4n3wbm9YaZMJDCfzVpqY86ei9e7T7gjX9wYKe1xVNNyrHvaZ4M9UDkc4VZEEDy4rJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1s5xnEHFr2jD6PEXzEFhrUr6D4uPyhFobqhLDzbJeDgu8eTfppJg2LSD2u6qyupKnY9kzjRCaBDzzve2pPEUBCX",
  "key1": "5Ace6SWyQ6e9rdmikLMAN3oB4eyH1ECm4yFYdfQGunsf9aX4vTxEfe3vGE2xkWUHZGXkTf4DtTdyRimeDh3NFsdB",
  "key2": "GWBhB8G7XbkMyy9Hs9n57JBuypc6MvyP79GwpwX4u8qpsrf4aXT7xqYwfAm9coN4fhU5ZaCKN7sG28e8uYScD6t",
  "key3": "3GMc4ZniyXVt7hqFjaQE8brqbD6ixX1TCsF1wB7e9MrSj662h5FMm2ZRKyQLwycckU2qwcgBK7yqcJhm4vaXue5d",
  "key4": "3tiardsqv4H69TgNAt3JGMANap7MVCoSBKWAZEJRmqNJT5ZwSbdLg6P9zKrjNRp6QvFwAiqkySnGL3zPqPRJRaSk",
  "key5": "4drtLwTbFShX4TJMNAiKJ8FAsDgJjtmnzDpHGp66T6zF4mNed3JuBVFM4XbHDFT2p5KaXTvL9NRaRxxXM3pCq7qj",
  "key6": "45tkALcLHh7PRQFEqVs6FFAfEZ6Pqs9Zaf24NWmdgWqyZg9as6M3HPqs2sq4fkBHCK7gHNdccqMVKavQYPen8qG1",
  "key7": "3w9DJ6DAAg341FDFA5rt6Qa7s8d5Fbo4GJ2sHwPxAD7QqowYA89C9uSXpbB5gVwuSSsjMjxEB1NxJDZ6ARpGJmhM",
  "key8": "2P6qfCE82NCQURwz7yHzFsVhyks3BSmje8KhpKXEuBR8hURwkbjsHnS33LakeJCiNUAhy6JuRETHC1mtXWQTL2pa",
  "key9": "2ey422h5igZ8qTH2nhQb61ELd6EigahyWUJssUnaAzZtp8CS2XJ8dLfoYBnco8yLTL2uaw7g8Nwfa9143bSeQArq",
  "key10": "3gM1w3JixiGLuiAdLUNUKkYUP7KhqK8cgV8ETnFqwSYyxmU32227VnBX7JDKYhiweNzUXwqAhhQqHhostZCoQypX",
  "key11": "3WxtdhuQDRpDSpqgRSRNHAWTj9QJf1CzEzwDkimMngEWJcaY7KskuD1uzasRdUjQNGwnBLk9j6Zaxkx1VLiHF7Dp",
  "key12": "27FB1Xa18wGzL5Za9rcE7G1Y44iaPhagdirhj9xtxTr7y1Bc9pyG6Ee6JjAeFp23BqDpusACdYEYigussySjAvd6",
  "key13": "4SoT8fbwfz73PUfHte8Nrr2ax8vdvaFyzq7ej5D37eNSFCDg67HCcfM9yWnaBac2Qk7PRj5ZuYSdZRPmycSdFMwD",
  "key14": "3FSDfhKcbexiLuA5QFGVrKUqizUPw8yDvDx1xTZVLJbdsF6p8r2ov5u2gxkWBzwq9zoF4f1a5WnM9KUyBX6eH2hW",
  "key15": "ELpN4CuP1VXo6BuT2bsDhENdug44SS6hFY1cLWYCyp29baLbwezw7c19nAvTAJ3iw5EyPeEoBKjgRcmD1Wx8QJ5",
  "key16": "5knQ8ryDd51dQVHVE3hgSvCfHGWcm1tCbhxvQ5HeEjuguStnHz9JcCvpXSPELXPJQ62Axi7NgSTXv564ncp4QcVQ",
  "key17": "3rW48CK18TjK3CsMfB3pBXJSb9xM7csj2jc9NQ8iozQ3x8RVkiUL7be8m8KwW7YNzUZVfSoZ2gZVKeudocLi1gh",
  "key18": "5PbqyyNC4AGp51uBbxDQnFPieef4c8uabEDKehG3s9Jg5p9pbBuWYzhX3Qid6uUacsGp9SghYkemywFBg4rZrdyx",
  "key19": "5fy2BdvDUF4iHdcJwfXcsHqsPV5nXWWiyD3YN5A6DF6TL6K23K5KH4n5w1Gwhbun5ntHj3YRFerrz2psGrtkUpZa",
  "key20": "5H9KdxxjWPHRwhTr18t9U3HFjihccETxvv9o3MCyTZy1hQG2AuBTGzSxTXYbruov7tMZWXvD5fFK3CYmDzAbnPyV",
  "key21": "2UUAwjgwQavP7CBfGAX5U1maGm5tGWiCXEHMxdjHhQAfbwJHz1VNrptBAAZyeg6gnHPyGPDYZBgsgEdan7Ak5JLr",
  "key22": "334ARBBEeuWJnFGs3HsFvpjRZoRY43iXbioFnS49Tjt7PQrE3Ty3Xy6Hddgz7AtgAtEELJMNadNh2op2AaKUjqfo",
  "key23": "2TreDvQ3j6F5LsjM23zk4RXVcLwDqq9B9mi1VtTQzwcSNxuzWTSHNop7SbTMijfh2VgG3FPD3ssbJs8xrEtcWZ1g",
  "key24": "2NpctzP9YDALfq157JyjSL7BFtDAT5C5nMnUrPWYk3Rmb3wufFToLwuu5RMgrojd8CB7i2Te7LySVNpDBkQy66MC",
  "key25": "4p1WeWrQDhayajfJrL7M7Uj71iABAcSGDaZ4agvkzKu3ymfzKcubefBSTrqQPb3eBNYMiFnHBWgg5CBxHtZPRVnE",
  "key26": "3thr1V6ZBCAiokcMianE6WfMjd6qNhJMkrKh34GMYtAQAx4EiiPmzH198Sh3zmN1nAuKvSe37ukEQrbLyvQBXMe8",
  "key27": "5VaygdfQbuboqXjbdRmKuxEU1poHH3pC4SDhSQ7gihrgKiwRDjF35Jhf4ivCGiuj7YZjtDdC1SHdxjs76cQAwvpd",
  "key28": "4iUnNG3LgUu5aKzxkzGRPHW6p3qdBBLAzukWVHRGUN87HMi5VV8pY2bRjcDrza5rnZogNG7kfE7PHc9CXLZGdz1w",
  "key29": "5juoaoZsCM6scXCGaN7reCbyjpY37DNyxwRurhNaTpmPitgFFaXi1U4VDG83goPmjghDLbmETGC1mfDCzZaZhKuw"
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

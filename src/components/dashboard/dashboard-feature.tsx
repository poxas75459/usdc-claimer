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
    "2qSCcQPhRm36W7URCbfALTh8fbjbVNBwHddWXYhUcoDiNb2uo2vV4oiowYG7DJNEiSQKJvYHPyPHxYHv5obui69W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49opgEoY2Ybn6KcNiTELiWuWX86XfqTXb1PhVrYzevpi2yp4fJcf2i6n6NgTmA7fi3hCi8jJZTm1t8SmtEiHxhC2",
  "key1": "4Dzr5rAovzGTk6T66axz9sPTDBkRoHWxPbuJekbwxf18TG6pFhn576MGcWD3K5U5XCxAtJipdin675asi3FofBbM",
  "key2": "itkS3sZuSbBznSK3o2UjHkAZfXCimnZA97PURFDUBxf7eE8Y8T82LMWyo5d9RE4tXpLWkLFnb3A4kKyxVNar1WJ",
  "key3": "2UAxYCFGxcLF9ZhQn8c46gBKyKFQr1Q6orT9SHEssaL3BkajztcjneRQPwdiV5zvYXuoMYLZcxM42Vbsv1fx7qQy",
  "key4": "45zMRWCydmYsaoz24dFzg7TYHoW8GB7ss1WamiapgHfjvpZNVW5zofJNBGpJdWWWpYx1w2TTSS8ruVTJ4TuokFte",
  "key5": "3WPbJne6tD8zH7dNbnNuCTgEhvHLcyywksgcAsX4kjnZb4PFtHu4Bj1PVDMDCeEQWERS5iHZybKfy2SEr4RrE4dv",
  "key6": "5fQwQuFtmwuBiGZ5ZvDCJHziYUq3ns3pTMhpVsJ2ZaC4w9zZjyEdbfxZQcSF2ktnFW6wqbQ3YzVJVXniEDhWR3dX",
  "key7": "4FLouF2oDqWWY6E7es8uwWtLxtvV6wLuEKE4wVNWJVcTCJfEYNws2aSiZMJPV6AFaz9YSUChH1K5UZVvhcvSH7xX",
  "key8": "5C3y66WjVExrzo93Ym53gCTxaVo6A9XHj5UrftzyuyLiJU4tuLJhDunoYrzi1iUNtphycXsGsu9ZmQ7NvfRj3Sbw",
  "key9": "24t2H8iG6cL8iiCJAuJeZAHGUdjSQUuu3fcVE1hPVYN3qQ1awbFauixpcpPzMEzS5NHVDZpzjivimJy7y5g7cCvZ",
  "key10": "5YZfBFccP2K6kg9RW2tjh2eHxdRW4byKPTgUjh5DBMbKWJKbxqRANukjFmNaNDXdorAYQhKBoDUXDLoc53AobPeF",
  "key11": "4hes7ueGjNpjrD7psqhQAM8TFL47XNXvkfaVHk82DZiMUAuy9vMv6zVeQvxrpMhGQvT8hZ45eZmfeFygqt22RUpb",
  "key12": "LrxqF5GVoU2NxWrufAi2LhL3bWP9HR84ztWVkd9gwyb26LxQPwRAohurf4NVhqX9KRF9NHRykx6Tbea85pfvnbk",
  "key13": "5LJpRmiR8ra4XPP9d5UvZmyv1DVdLtJ6LJ6YVYZWd8aTNY29EFRdF52TuzmabJ8PWhSbzmP8M83tVSnVKXf8iPvp",
  "key14": "3dYrv9nMBJLHio9dJKo8RrRmSzAXdkRQz6HJv9Tut97dpHNVcytRvEEXkB2cxv2zUiydfa2F68RHEx1Kt4HhqyTW",
  "key15": "2v4Xc8XbfYSNQBxzQpgeK8kQaM7WMdQvR96ccK6JFjpDA8QPDVQe5uNGaKYbaFDV7W2LLDsLjVyXcUrAfoR8vb6N",
  "key16": "9G4QJLmAPjJr1ceex8gc7PxeT2S2PoBqS33R9meCMAHDiYFK7MrPdbRd9Fkg77PrZsKDqHP6LerJWEPSJW1v7ns",
  "key17": "4VW2VDWqX6uoTjUfXHQjmut8MnXa63WL3M8haKzdE8eddg86yz8qfDbvcgtv7Phe6pLnxCm3Exo5yskvpHJoEtNV",
  "key18": "ErtvfVDmeWgrTAP27KSfqcXMZH9CsxBTF6HFpu4TVQdrmWCi1e3QVhjFChnHzL3995e8vbMVHUGaSJ7FFkY6DJj",
  "key19": "3r7FK6C4tegdftBnbzfXbGLhBngDCXf34froyouS5HeHxucNR456ryHqDCa8sJe44yzm4mPDm16BaK8Vnw3bvsh1",
  "key20": "56jNFeZh9E2mMFgarC33Z6oMtjXE67NVYqP7iyW4RimqApU1AzgLM3gZ6VG5BymgDGpJMd3w71o1pxYb4aqGFMeD",
  "key21": "2x8Js1c78Ugmkt1rcD5A9xYJMSErcBRMQjStg36F3KfDoDZvaNNaPjMjTCa4WKqxL5hhHCsnUWxjnhqWNbRsJ34H",
  "key22": "62pzzPshr7p9nAQYuWvpnN97wC23Dpp1DAer3TvvXPT62y8Ka4JBrhadwju78EmDhDyHKmCGCJJEdZe3vveAKbW2",
  "key23": "5nfbEWC5VgRHKspgUS59iaxG4LNATUMHbuHSdvci5BayJCuWCoEWu8sKAxYEepn6JqVt8LRGUn7uQ4vUcjqW5c2U",
  "key24": "4jyjBu47AyoniFAvBCQowsC9nz5pGGH7ashRB3Rq1fLvoornGEfM16WT2C7RmRoFB2sfUX8epL2ac7TKZR6EeJrE",
  "key25": "4X7cZRpi841xcMN15R49L1VuVxsvXFmYPA38FC7VqmW7d5BwepyCWa7w17vhGQBwZMZj9pqpZCfUxBY1inrQS3kH",
  "key26": "5ivep38j48arns6m5ErovB81aqL34QAQboj1WbvGvmu7NWxmwF8QzqjkZTh7cFGqnj6B97XTTZKiaoGsFVvs8KfF",
  "key27": "5GX6W6adPom2UhQBLwkcNdMXAn1Uksxcyhx6gN1zJcCtSDfWaKWgMRyFAv3Uc9mB2JohELSTENnztV1fW1Pg5C6F",
  "key28": "2SpQC4GyQFvS8NFNGWJEzTXUK6HwiAcrWRNCUAyT8NNfDLzNJenB5mBNr6gFnr2bQ5aXevcuXzo1NNDSX6ugMHPz",
  "key29": "4VrBWAENRPd2oBfEysGApieaWuzDDMqdi9yjoUYti6a87vu4GY2TF4mtjoj1QFvUcuqcoFNNZiKuC4ff626TF8Fs",
  "key30": "u1WtjY1AkBFBPma3F9fChKeSLq6re2mk49fFheoSKjbKuojHgo1k6pvJTM1WVNVoy9xBZUbWtEo3dePSFipxfvp",
  "key31": "5emnVWH5YfopRGehex8U2m8nhUL1Agi1LUnbUhQK81wQGP78zgncZggAruc3dQK3WgE9LSz4Pdj2ZtLXSz25Nj9y",
  "key32": "RvTYtuqRsZjrd4bJ6pYuMxhzzAdrYsmiUXB7gVsHBCR4ozgQh4mgwRmW3KLNtYqZCkjAJbhKk8QvVXFaBjhiAiW",
  "key33": "3uSkZ5pEn8v6R1ASc1optcf2dSPXqnrGtZQEnaBeCT8axciL9WYfMFKYtj5erc73KrYTZY3faZ6FfFZN26U6vHni",
  "key34": "2xB5DQDLyzKXYf8hhxha4b8ozL22SRCUFSZhrpp2Jx5UxgPh7zAcNVZ1unLaFDTYY2rfYzhUpAwhn783WAAGFKyW",
  "key35": "QVTrmXcREHCkrpd1hXZNZGVDJ4CwEzvPrpq5rPG9NdzGmpBu26paNyhJPaDC9hWsAW4p5gJp849LjaPWmgKYdZ9",
  "key36": "4gxNbLRUUPQ6V7afz53Hygv7dtes6x715R4S6upbDkA9XqqDamavCW8WHmRtcBXNSBUWe68niEyzusgUNRpZkDVX"
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

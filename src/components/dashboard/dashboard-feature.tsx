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
    "4TM7dqb683VNaoN28qz5DAxiHpgAUcYqcATafibBrx2QHzeDJNAtvjDhwSq6ab7hqed667JSzw6tRbSEdQPcnHwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49KCBVTgbgbuvTSuTg9CpqmW8ZuSr7HP5LoRBJJE7ep5BRjaeEjTpD3Yumip6MYsPS2cqxoG7hJnNeu48XKGSWHR",
  "key1": "3guVYh3ehGHzYh36WXZaMjHXNpdmUkbRJp1k3tjF9ruUxxzYx73gkJ1e1hoeoENsH3g6gfQfxipBJw1NFd11La1e",
  "key2": "51roxdQbf69Jh8VykwmAUqEoEPW6uvcrmWzNsvXs8DfyfkY89yUtHmMS8hYWpDvn62gZDCrw8QLrVY9qCMbnip5K",
  "key3": "5cCFmUq88U2KWbDU2RDwQ1WB1dt5HH44THx597wNvp36N8cbLxUGm3SHhMwMSpLR9UaQd56nCiCkuPgznpuHaCck",
  "key4": "2DfdYwGjWUwbX9hUn97eaWDbkx3oyFwywJjs5aLPvEJZHxUXetTK78y7gBAnKZoM7Yky5hbWDnZHhGrTgxLWUfRE",
  "key5": "63LfR3PwVTq1VgXRLXnMQmFdvEhA4skAqBTJKSS8yeJuNDScsa8GqmAyGwHbq1rAXALpfFiGrA9Bq1menVJGVLpT",
  "key6": "5wEExozNzjhuGoYW4TEVWLQQZpV7mZmjEk6x2y46X3759VkS5tAXoPQNHyNiUPekNRXjrh7qdjB6AEQG1AwxHYcr",
  "key7": "5zs2wZB11neSiadVGmjnDZpskMbPfhUZzBkhgCChHKrnV333APaUesRvBuZNkM7jw2LVQee9EWC9P9S972FTg9ZC",
  "key8": "66yECxun6GX63d4jVifo1P5XjLJ5pSyfMErAuub6fxxnyhLRShtnwH7FyUQZysCBN1AX4cZokuDMFxNZGQHLDPJg",
  "key9": "2Q1totDc2WBQitYtzfM7wwypBguXK29VLFQdZQXXziKgNmyvh8JepDRo9mqK7zWkm222GPbCZM9wPN9Vv4yGpw8t",
  "key10": "5FbsLWRS9mrUuguguvMy1diYTQS3u5tuWFfaCf4bcLsXCbecRL9DvuKmxSh3CrXkCZc293SqnijfnHQ5dGzTnmN6",
  "key11": "3HzJ4jDiinViJtpNbJE9i8m3BVdvuXqSFsdkbY6rZgtmpJoPRzr5xoCz7i2PYHM9Fqq8BUtqt4bQazQvTErUXJWA",
  "key12": "5vbeUj5HbhK9vtoiRYZPy9p2eayFLViyeKNz5FMG5gdSUJczMmT7M2Dc8U7UfYVB9kRedgb77Y7ge5CENKeLSv4M",
  "key13": "KqsbhW8YMLF3W3JCFY17KSsFGKhuYaYFm3rEPAbNrtuM6v2zeKPSLDBsvrJKJWzh1jVYGsnfYVofXup2ABmtBp2",
  "key14": "211dzA28iiJjpbWeXtwXxyhQmMkbQhJ9xJ36VCFMvUGscojjRDgQpBapqe98XhETx5iay1aqsQcYqQrurVBzrtku",
  "key15": "214toLk7dVMuPqN3XCTyLVTcNkvtzWzQEaKCcURavmuc8xzTFWTYTXMNUqX76HcTEGHWBnC8f3R4Ra6o9RSfbspr",
  "key16": "4ipmW25nB8wT63HfTpgCJ9KjcvDALDbjWNzV3uiNm44CuMFcAWEZGvws9FXevPKGiFF7FWcGxezH1CeHvAr4rQfG",
  "key17": "4wQxCcMZFBLqiiHxUy46qQW1i3pbBFATsawjprv7YfHPirCxFXi28i4E1SvcNAun1147Tzo1EBMPqu3Df4gHpHJ8",
  "key18": "4fwULQov6zrCnq2psWw3Mpb3C6RPjfuPqDFX2TNqNqSSFid5txJDaMUVVok6LQ2dsAv2K1cKZjQro2sUgmGePYda",
  "key19": "4e4YuVfkfdZ3TYp5HqD89qZEvG26FAU4mPwiEM3JKSTFpfA33SDAPUUdhvywaGtrq3NrH2f2iwrz61wzQPUQQDHW",
  "key20": "4SJrYHVRUws3TMFfa6Dx21zC3GhVpRf4D2intCoLBqJX8MRxuF1gXddyD4PHz4nPFZJyhuef5WAu6rVjpoeHw3ms",
  "key21": "2MivXzfRkkiK9rRpqRhD4Ywmb6bAcntzLrAhxaQagomDtNFfRMuSrAU7a15Q51tvhutxCg8KEWAVmn2AiRDKTWxF",
  "key22": "5Uz5oAH2WMRYaybnAm4RXmhH5TxtYCxxbmZBbgKmmi6R3ii9ZSr1K2nbX4F2jrtQMtXGV9RBTXs1AzPDWmsapXCW",
  "key23": "t4oj8B7fHFbeTjPC2dwxujCZXbGWz72xiT2MeeZ1VKwdFvSJVMCSt5DSBHL69YunXqAPGBKiM3472s6SNQB1TAJ",
  "key24": "3HfAJxtKAvXdrT68FC2Neq6tvyyRmRU6UHDh6S3fWpLa2XdX8pQA948bBMv5VicQTYwdGvTzR4hazrGXUvnf4CNn",
  "key25": "4ZoARoXofZ44ghbueKmRLiuEiLPfyWEnpaAopt4nevjKf7nNDRDUntjGBjg3qzia7FjqTWPbT2PVGWvDP15xXa5E",
  "key26": "4Lqx7E9CHHszFGKXDkaN5iLiZuurPvwA6dvSLdYjsrWvgeNqpdaKyY4SAZoq8jZsUG2wweRQWC4fHYweXRuC33Gq",
  "key27": "5nD5hgTSoPUUiUmBfza6CQ8wT7bEzcKUp1LLNFkwosuuA9PjFBpDzybP5hsPQd3mTTZE5eNSjQ3tM17po4hticXj"
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

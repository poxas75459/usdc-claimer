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
    "3JMmvpAcrr1L7jsXcyCBPDfV3VbyyoAd4Ke5MuwkVZxWujnygS1fqhn7D4ZrQhxX3ZDFfFx6bNhp1nvrBStcQJMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzBH9wXpBA4sftanJ8aQv96YTuTiUfVSBctw6KnyQQfnret9eu8YtqiWXng5GtoSYyTTEDoRBqXpcMUXCfP1Ssq",
  "key1": "44PJKjbNGU7KjkPDrDrvH1wpU5sAQGwfReUoviF9Fo2P1nGwXqrsLFhXdJYCreD4KN39XfsaarbtKNWoi9nMTu7s",
  "key2": "qCkw7cHMPCxNz5QCrJpz3vJp887gE6waYhtF2m5dpbzYQ8K2BDhB6xLwLprRCALcMcrdnBR4FhewPnfj3C4Jo2N",
  "key3": "5h3RxRbNZWkw6nNRJNB7HYh5zX4idtKgNah8rvELPY8BsF2k1wDLHv8VDamE2yyBLQBoWMRC3Wzgjgh5e1TsgWwM",
  "key4": "4QAsnyHEJH8McopNTHNv5txo14vT6Uhino6YJfzFyv7kS7AQtnSPZ5sAMCTHaQiddGXScBZdp1i7wvMAKmSX7KHc",
  "key5": "eKaW3qakiDW9NWPbPpXgB66HMvkHGbvsGwYbtdJTLx4k8d5pWdMdXUSCN3XkPK9Ge6uhsT4QuKMLWaHZjzF2fka",
  "key6": "2ws4iwvmkQ48zQg4t4RjT8pMZvcUDGtmDy1Zr1WKyejDeZo6yWtX3xtM29Zk1ir33nK2q3bdnSjJr8ghidNbBxCy",
  "key7": "7LaiBapsBqmVEZPAAqcvmrg9K9rEfTdupn8bjwBntekY6VPWp1xwAZMPr184B8XTVeqqErG4VqsmJTo3u2bYdX1",
  "key8": "37JcfHso1zJt2HwJDbn2J2u3kqtuGQC6hJTi6hqLW78aavfprN4EdFBcLEgU8fj39nUUrDXGQBWSpzjv54MdavgX",
  "key9": "3EX2eXKh53tBcwm14hJZfttGa4cizasRUtMmUcDRvTmDhYwxvuwwWpep9k8rDXvsNRvpB3Lz2VPGdXH3SiMRLbfU",
  "key10": "3s7QqjAb5qy6argpUDpQWPhy264wjmpgpBdyAcfiGfmyuhnEMUS2MkhQNdhRWPRtshTgxmmDdCaHXJzxj5KfMDDJ",
  "key11": "3zfe5QCVVotvv8tPBD4BsDponaNUCuqHLhFj1dmPv7SPKerLY4ZFdtRY42sbiWChJsev6hxY4iZvsZ5UwiieE1zK",
  "key12": "67XCDhjqmyXRHnMSEczbkGnXsof2KjMBtbYFnRKUhcLw44WcrJu9BhkSKEptvGeqXy6MkqiQLvKNiT3s1d3PbvbX",
  "key13": "4GMfTdx7DxWFgR7QfStJ139AfTUMXqsVTe6LAA3EcrLRHVMcy2jyQQa6Jat7gW2PKfPLFFi8DxjuKQC4AvF5uuCd",
  "key14": "5YQGihRyJxzWCg2FyAKzfRfsZaEmqhqTgU3Ay8w7d1Dtj1U7gYUcbTB6Reem7bPUaKQMghVg9VfxYJFAfyGWxTEo",
  "key15": "2DQYzjdkywhzmccB5buaZRZE2eeTxscvZTne6ZCjwojQh72gbQVAtoUSuy8sF7aZ4JYVdyP4QQeWghP3tDKpV7Vg",
  "key16": "5SqbDCKd4chEqViSucwWUWnCCiBguY77Zxa3dAE4Fsic6BzbpuqWgpakj4og5xeVaWQcPAF2DMGwkGm7Xwx5ihz6",
  "key17": "4G5HWo4HpZi3GcngZRFhYrzidCwHrrga8hsED7YqLubqNNNh2Hdxy83GdvSJ3Wt9y9bNGzPVCaeHf6N7X7XtF18b",
  "key18": "5jjmzyZJn5m386TEmHPv3QLwPYWtAC3pRJQcuuVWVw5xJEBJ2TJsu2KKhscnWgheYpmS6y9XcXUAkiGUf3Tkjfp",
  "key19": "5YTJvdMuaH2ovizC5S552SeF9Smw2TXjvEzQZsQYJAzxZFxvNGUKNhCTQcSqEed1EugQuHsCc8bsQC2f3DhzfanB",
  "key20": "5hzZ1sW1dHaXWX3fTgetU5GzW4cpZdG2r9ntetQWXqbGpkg3vf745dwbjhD2r28rZRJ45k64vjduzRYS5MT1Zn6i",
  "key21": "WM3kikSWKkreRpFaV3Z1Wsv2sX5TV9QoM4X6DoxNSnjFttj2oVsNWUin31PKR1wU5eheGtbd2dkKdGkeXWFPmKr",
  "key22": "3FhDGz568GuRj3J3LSS9sk9AD5vJzsV9f8yRRtYkqKekCLzdLFyAWHdhevzue3AfJDukWqmowC8SGiWfgBrnH7CD",
  "key23": "2UGncf6z5VhW5GBSEY5PR6BcS185uhtg92nCB8gK52oAcAkJ8LSMKG8vUfbmo9X9jGB3n3SUgMFyZKgF3myBrmwd",
  "key24": "aDpCbxLoUNsrPsYN2ZyRgqXeUh4RhKbXwxMZFqA9PKrqCXr8mh8RYPr61fev54emYvyJFqi2xV5d56GmcwAxw4d",
  "key25": "4LB37ksqgvez9PYPN1fcjfybpWMizRMdhdT5z6AUMmCEJ6m6KquFtppW8gXb9nHLPuDnp6JoGSir1KhUUJEXrnKS",
  "key26": "3RRQdB1ieAhG6fWHraHVBw4aWHvkiNZCK4VGnTZnr7ozJdmarxsNsWyDse6ei8qevqFo9EgnRLxXcnz6suYTTMxv",
  "key27": "qqMsQx3g9cNCRVFH8isTp4X1JToEaHn8gW3oAUYEFgFz1WJrbVpUrHexidApVJiHnZJqaawM7xSZ7YmkrezwUE1",
  "key28": "62Rj7hJ25Y57zh3C6JwJuw1sLKn5KHBccexVtEsj9QzNt3SHmyeb1CTWzZSza9B2FHJWFz722jYPqDj6hhqSvhRx"
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

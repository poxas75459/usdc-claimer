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
    "3rPzF59TyAEZ7XozsUC7ZCNmZHCEeF11nhwGtKViqLK5QPiEtKhzzXjrRvLRy1yL7gSvKybNNWgYEADSyMEHZqsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eioXXirMh492KgYnWU7M996RUWBrHB3kgwjjcJ6Cm9RShm9gfy2dSi9ysie9qPNdrp4yCiqDywJz9PnZxUW5Dy3",
  "key1": "5Mmu8FyYY7aToGuT5tcaUx3bgXH5JFfDg9FfZtQNpyMSscZJNv2HRNbUydyTyzgo421bxWWRMqobdYH3pixoJ9Gk",
  "key2": "2mq5AU3NqcpF1Vg3bUcpVBft92wh621u77EgDvVQEu2rVnUPPHh8vkQUQn82s2R289ST2Nbf8NXA65yXPynCaSzi",
  "key3": "3mASALBwY2bXr8FDKwiHv2PJVqSSMDPzkZm6o71q2jaF1T3Z3EpTg5BmRp9fvDHqdQ88D6MpGR4hbNc9Mbmzvt5q",
  "key4": "3gkirN9ZtX7zuJE9wMaKSWYNnfGnWUr63oQcrfTC4oJpBSyNGH9VEsZBipv1cDSSHVPmNaTuyTtzG4Lu4kPSHr4z",
  "key5": "4RwARpDz7dAkvnBtbguVwdhKcVS4MZkzKMw9E142rW2qbNHFFtE1tRkrSKE7cn8X8Dmbts3xKojr9qJEgpuSMu8t",
  "key6": "79eXdZ3AMQebXSW5qTnjvZGWC7LqpD1jxKahfUJznGqbmKats4zQBZnm9hyQQo47U9UdweDH8VCRmzXEXtzFAuQ",
  "key7": "vhBvGixj2qvwaP8ggpduXtWtSsnnTHGatL5GQd3WJpnkqpWwf1CDmNUh7bK3HBfjMP3sg6P1HVpKEeR6JvFTHBb",
  "key8": "53zfjqQqTavczo4SdA1fa3LXfqW8SAjyyRSDmwrCmZC26gMGPESU3KssUXj5aKSAdPpSmrfNkCq8LSNPF4BP7gQT",
  "key9": "3EUdd6fsRe2G4vFrG1K2gVAK4bMAuE1K5znq2E3JpFy7feLmH5gYtgL1UEUmxSM4rPHHMKHGjhVj5PXxGW8F9Fvw",
  "key10": "2DbEVAa1kU6DvZTT9jVSBBQnLHEvcGEiLURc8sKouSynyFCEcqKzu7qyC8vRULymbGRMMRiEfcEq4rjdS4BSiRYK",
  "key11": "2U18GKv1kYaByzVwLBJsRpnRWhMbJtyGETucFM27qJcAHnKrFjDtGUzVhnzdjf9CT8jJWgBcyiMenavEAqHhprpc",
  "key12": "38bevdVAHnZDonfexUjiRGQTJHHxKtVunYUAieybSSVDGJU9UFP9VMJ9hvboHfVq3sPcCWDCv6MfMmGzCgvaq7pA",
  "key13": "2uxgnLoM1n48x9dBFJ5piiTXKx98DYKziMoCDX2X4EeXjxcMxfwHmtqSfcQMBFp5HQq4CW6KNcnCAFWkgwbRRhRM",
  "key14": "DmUYeMxh7kxiUMU25UG8AirmMycCyDpW5XN82t8SPxw9i3Khib98Yyugn8rcFw7X3uqSLjxRVFS4eU8LPtoEwvS",
  "key15": "2kcES3M68Q6qHfAEn2A2L1kSyqeB4DKMAV4B376EHNx2sHozeFBw349zb61oNAPuawjVSX2L4hA78SsPXz3zxNh9",
  "key16": "5xrTrFSXF4CH4hr7ibDKBxojKsz46y1t85C7mQnEbehGRQriMTzCsNgq2X1DioQMiR1Nj7NSt4ePRphToKMHRVJ3",
  "key17": "3BoT7kLwYo4ZJNXrUHzUgeH7Doeg8nFDhXGBCS8ydWmo7Un4BpfpodbA3jrQnjEpVvgA4zZAbMXT3epPDCeKHAKs",
  "key18": "4gdzymDpWXaTcGGcPwiVAP6dUQhQtzMvWEf6HxPHX4VfGq1aXuvVcvDgVynUHUhMoQPeC4ypnKjdmbE2QjSjZTEh",
  "key19": "29bywmnTRKJCvVnCiCMThQnQYfb5XmAzrG8uZCzBkhHp5ReDqciHPgrsZ5SJk5PsKrjM2wCCkKXp4p839cbUhXyb",
  "key20": "RjW5W9kySWbnLPg2mh6uPickk2XdhPisrkcwBqvXn9rVkANKXUYhrFRR3RHFGa8WfByFzkj7dPY7aPkyyWLhxPJ",
  "key21": "5YQaMNabqAEG9XsK57HbyDD9KwB6RGUJpnwPxJ9HNYdJ5ZAxZdVufSRnhaSguhqLAfCY6jdgNUtxNUFkSKHWTH4h",
  "key22": "3vJuavhfekNnhJRZ7L95GCZv7NCebgidHTBxC5CCmfnQGqy325AJo3dGEcKS5kikVNsBHTkzzJhxkeo9Q1wHXMs",
  "key23": "3rfQTwhnpU1EN2ZoduoPFhNA8SNDcGAcRbcQpaVRtahnM7tJBepJWgh35N7LwEZQwRSvUkyBXhjKbj4vmZiNm7wb",
  "key24": "4wED3t1vPrhcJdBtkCnHQPJ2MGxSNokcVDs2bVhTewa8qK6FvzWE1W2XZiRKi9s3GS7Gn3n2mYtHACkyduhmZXd3",
  "key25": "5aJhkD7aUJHcMWVPjMKtjUYNN4cxK2sG896dpRjpzEhdMJNZ4xKzDnL3pGVDcSjQXzFnwqiDRiVSaZv7TM3oEFov",
  "key26": "5JEzKd72bQV5DpgARJKnrt4g2fAH4ogskV8VFB9VEo8BjquSdij7xZvt94rk1jtdMif7SViGasRfiiarq43bKes",
  "key27": "5CjWGV1KATbkZ8bxhKREJmKvutTNxywWBbarqDM2uE3V7n4GwxcFrkkTUc2QyNaSPJ9WMBEzw3H2GxiTvJ283q8B",
  "key28": "3jPWeCGXYFf22xJH2YxgbSFWVwsKdxrtujLsZc7V7gWfFae1T7XCyRWMiGRwVV12cmrvgjnBxWD9GmHy356zPH4r",
  "key29": "5RQdwoH6mw5fvjK8rpNXVQ5G86iUuWCL15EucxR1im41DWwqFyiGgi4H6DnERqvi5RjXTQKCBtqByzDodfXBmta8",
  "key30": "3tfGy7e5jW8bU43iXy3Pi7EzfLWjdbhJQZjvjCDWJVqHKrnD8TCtib8SqcJfuBCtCVUqEfaSGbdnxriBCoAZV9d7",
  "key31": "2tY2eEWWyFkKbSZUusVagKBVtTwRrWPi5FccDJsQwwmwA8nB6tRsLZ6Z4STopQBRLX8uhWwECur7DtK8FknLSjsL",
  "key32": "2cmxSHmBY3miYFi9rADivZJjJAb5rNy8zRHRrrKvJsYSWjJntsuH26jauJypTf5TjYgU4AV2SM8G92mNWnMe3HFr",
  "key33": "5CLy1pTrjE4tPMBdKXqafLFgC8eM4wWDCPrBYMpfngTdYvqrvrxFMdfPaf2W1iWgapLArvscM6aQ9eNVnAiFmRAr",
  "key34": "3raJbgGyivxkRdbYAn99DKxLVq2DTWhAEs38zgbtydt8VWjZ4gxpjfTbRABEUob3T1kz1SC5P7Mhz61vU3f74EbY",
  "key35": "2kEMqwPYHcUfEx8ARHov2ajeGVfVbmCQVByGrw6M8T9UDELBEwGdH9prHawDurmjbjLgPBM4TsNPV7ZbCiHf6dz7",
  "key36": "2jc2jZqLHCBK4WBdwECqohPDwSKPRVs8bnnCNdVT7nBofSzJU63LnhCbuCShRR1Pn44W73DmNS8gjrYrwudueCdj",
  "key37": "5t1hdrUPTaUPeg7tRDtnByvy4rhyA8eM2DZdBqSqYazCUGT8MzVs4MP1A8Gug4TkPwDyu6iEKu35gDq4emE1RZMC",
  "key38": "2DAYwDTtdQXeZJzpiAscpfxbLkPSTTfaXdzFL4YnmmMuuX5vL3ABYT2W2BTuYDqfDDemTv5HgXDr7FabwRLb11xQ",
  "key39": "57p7V6aHh24jAJo8e6c6KtdLssLjfFCFMgwkqvryFAjddmEJFZq3WpzL6LpagMZFYukG6gTZp6hpoeThxudDkZMt",
  "key40": "41ijQUDxT1XmZ8Vx4o3L49bRRatAFrcgtFrRDc4XDzkXM9mdHqPGGqtRNWjwFc8u3XDaYapn3Vi9mUgd9vuPzTMB",
  "key41": "4axt5wVAig6XR1eLzJeo5fNfxYHSBbG1oSS5pTt3RBAVL2wSfYF1grQLHG8c7QARXh7AebBxcBGKVZS67WpxgviS",
  "key42": "3i2H5UHKFGN9fDpm63F7dyYXga1eZGy8bXG6U2LcWEfMmCUFAYGeCKhr52xmC4dCzLH4qHZBM7Q2ncdjNrVGYXxb",
  "key43": "5SmsZDHbQTqinr25Ut3SD6dt4exrR4DnUp3x2DRLhZ44XDCgm32cSoYUxz7GLVNYWypMcR25W9NJKQwT9ehWuYsw",
  "key44": "4xGmYcvNvoSBsYUUpCMBJfZPDKMcNHAoZ8nQ3egTz1fdjYDy1oCazQLYUeez6UJe7G5eaZw4ifJSDX21yZycBrHZ",
  "key45": "2RkouY7iX4vheTFg2wC5uwnS6PFBs7iawUhbJPqLmUsFWW7cFLKAN7ugAtsha1riyRhP11TtJ37SJLusnHtpPmy2",
  "key46": "51YYX1WQeVpCkUXrwR5VUZcWV1JfKiN14JPF37BrdwpykNszPeSGnXvwxwTaqWZSJsFVSP4N8krBcaRLThb2FeBr"
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

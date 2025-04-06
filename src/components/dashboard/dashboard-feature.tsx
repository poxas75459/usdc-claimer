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
    "2KnAsY4GWDhThyrXGnUHpipNLuAfRCw8MjiWXh5E81CtvFdvdJUxMhD6rNaYPoNyL2NMGs2QMuLRgdqUMKayNH7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27a33zGhhp8WWB7A8Bsjha8uXYzD1i2iXVGP5hM2jBWeastdhUAYpMmiqwc35TND7ydg4gobhncPGgCg6SEkAX1x",
  "key1": "sVTzfQAXn3XHWQCEmZdaFTDYnn3j6rW463bkz8ETGVHNH3QVFsYvGoTi8D16St8fgf5sG58FW4XpYqcPW8D3WLc",
  "key2": "2wL36XXzq4ZdAAbthYnWJardYGf8bhjzWMSngtrwx9fwnje1CokQs13oBvqpNbsu9iWa6ZhRWtfbo9CM41Dgi31E",
  "key3": "2ryZX8WiZ9nCKnUbbZ3N25NbWJqA7bbBqKwhBdX63at2sGjpqpUhtNRwXX77FgcVh5wrAXBNyFSgCAtXyQnUS4CU",
  "key4": "ENZrae8mt78aNEjRfVZRebpCndRDqTLX6ii8R6XaRkvSjeRe9iBGhsq4Z75Tqi54SmKB3CppaPvVQquFpK8WM6A",
  "key5": "3k73xfPmL5UdnVgufL9L1xpBq9LGquaMpWqrdQncByDr6ygmewAHH3ZcrXREZRkpqxHQxPiauAPN6q7UcfBJWAnu",
  "key6": "28rDvCLDc7VrLx74cQhsvJPdcZaomPmwsAQMa5aD9XSjWucfj9sfqk9qdT21UCBAHV2dwRufjmq6hCyZDh4pFT3N",
  "key7": "3wW7bSyjHGM1PecTWdcisTEvN9B3xNQLHVWnnyK5eAM2SjrmraRweVLb1jf8x9cBPm2yS1JQuqeLz2zjy2BkAk1R",
  "key8": "2vayMwUnpRkN5MXeoqQp6JEQjKCy5rj8jpxG1aptCMoG7ckQVYTBvAAdxzrbh3WB9iowsVmNGeNmJVAYjkit8Y2y",
  "key9": "4ZALzXoZoWzEaaU9bQBR6pwaStB3Xedppf6BYeNtsBJUfGTwKK7MiywbakZA7GvdEGxK1UJYsNVNozy69hpGYXZ8",
  "key10": "ufoxvC8sLJaho8KB3G68jRY9gNv5axy9C7FD7m7K941kEXUYrafYQJ6EmsWKKkvNTrdAiFbtXhWh4WHdn4325VD",
  "key11": "3nLvxMGKoTha8wnnvyondpwgPe41QkApmwcN2SYUTKmVsrnRfiCCzf3vwbygcUb7YiyRT8msVk1g2bcqQmna2fwB",
  "key12": "4mSPXc2xcghkbB9hvTnv3iBYFrh6m3E5DfnW22aDESvMhmsrYr2u4bgFRLj6bw9yoJN8FHM4JGgFF2pKkU11toAS",
  "key13": "5xiXJSmuefsjSCD36Td9mxVy9cnDi6zRM6FkPB2nt81BxgYo6b9LrRHBjUor5B1Cfi4xpTRUK8vvh7kGd6ZXhmoi",
  "key14": "5hPpmyN493ekx7sJLzmSmHqJpJymKjP5T4SjAH6uFtjbmtxd1rhYR6PjYBXtdcwLnTpKqWGXFpXdLCcUWQgxRJ8H",
  "key15": "jwxeVLgqmd95jPRadsZiyjNtugW1u4w2mAJ6WazKbJ67URkbJGhn7jj3CZALvuGyKihPNVHajbzMyG9W1UmYTd5",
  "key16": "5sZjF7DbB3EzT53YZGANjkDEPEXGdNJcxKMqNgex2XfoBpoYnff9vh6fTe7mvLHBMoePDwugDMwAuA5GwX3v4x3Y",
  "key17": "4qJcadTeTps6VJ3ivtN1HdhNsjZc1qRFSYqXVLwWuzMbphiUTNJbX7NrvQ296zVRroqdCQpGDr81jyKc1h1WXasC",
  "key18": "2XV8vDDL3tnzfdvqULcEtGYQppfMUs1cnvDHNvqDfkxNnMEsWTLTfMRNVAziYE9TDT2UVeWb9J3vJpZpWxtwcXUP",
  "key19": "4fU2VQpfgpnDQ5UVJfPjZCtnwUiGNqmBHnZsWwxoNqk8UcqMTZh4egRWc6iBiFFttkSAt7mwSt3sB1zAv4Q5Dv79",
  "key20": "34ZETJKsSb3SrNhor2s4oNt4fehvmLhULhPktD96LUNLaARjG1FBprkXfUWbKxwvTtSCbrn2GSeG8B7cnskuQaJW",
  "key21": "2MRZg3wFbEoqZFryegdVY1BYQgtXsordfmvUkn4fy2M9Bqoh6YHHpN2jFx73g5tQ2oUoaaiwAyrbs1F2fjgT3a4n",
  "key22": "432D7CuKgQ9LsaQYspeSc4TRUWsjU4JDNWaiXY5GYcUx898yU7KMQ9CgQajbsrTSvBwHKDcdCrk2WcKpUt6xg32q",
  "key23": "3fUur2MXYAKWqL95aeLLgBn1dP96FzjNoav5nFND1NdKugDRuWboAPKpPQn52Lj58iFXwpCinxe2kiPcHimQa8W7",
  "key24": "4Wag8r71NGEAsAfT2tc8Pk9VBMweLnMz5mxSf5aCEWyjzRGESrCPi663jykPvcwrJAtjor9QNFPkncckb2qzv59S",
  "key25": "3XVxxuZ1oetXj8Vh86ceFRH6aHPuSKwUNAJQDZY2riXj9w7YcYNsbFgG3a8r21BMtMuPZjGBxfKJkePJgbiT5PHb",
  "key26": "2meWM5kDeNzYZrv4f6SpMhoDhZWxi3mfpFMuxHNYBdZbfeV4XkbW7CynuzmMU56RPWmUGSynyxX3Q2AJqPxtx1PT",
  "key27": "49rLJxgeMdQ917mw7FWWqDZrM4S2cEFjtfDVF8wp7mu7pLHoW3jDP5Cf8z15uRf1MCirNmX7rHX23rbRrqXi4mpQ",
  "key28": "3aVx1c6e3cKFoZc6TAjPAtWfrfQkzRYWykpJ1GLBoWrm2RXjnojnUBj1WzHdE4zaHTfzyYLXJWwN7cjciLQkcWRT",
  "key29": "5haMkswrU6FK4TgYjvwoeJ9uMH4kdtJvpBfEtwzzhSqN75StKQ4nQVsefQrTzGeGMscqqpcvcWW4VCEhj9DLSe6g",
  "key30": "4RTdfQysRcWJLPpcSQnHDDxcQmGCdGZZW9bSbJGBHWbT4g7mPsTZfj8oAnqJM47cUBJ3jJd1tALPPNzAKYRyFhf9",
  "key31": "4ZeT6acfWAY9syA8STacs6JFALiNo2zae8KNmkMKe3UK9f6ABMY2d8r8S6DR5sg9Y5vPQ9PhGdXhRGRFRHZL8ghC",
  "key32": "4u8kRXb4veuDNLAdXo25xhzCTp2ZkNM7ReZXPCjKRCh25qTYYPtFsfCYrfuYHAFUWTopTimpDfKFv18cPQB6erv6",
  "key33": "4K7xTXxpxqryyixuCBNzMd7krbSNgRLJjcjYmA5vucxtd1oarYnK6pZ9jJAkrrGHE2DmnWj6zyTcYL9tw6VyaJGc",
  "key34": "8e5Mrm4LuU9gUpCfD7ufh7NpiUpSWW8uPX2oPNzjdwNqNKgCtjcgtN5d9YiirNGRZZdeWnvAs2CmCD5TXXE8fsn",
  "key35": "36RhnAvosF6Mz4WiRW6A31U8xmMR7kRrw8JjJtSLQCPh5LcPPovQEQ7YTG3JrPqeXSh5LQjXLAgAtL1nXtUsd5tQ",
  "key36": "2Mvx4uzJHD1TFzJhgvyXo8spXzQq9vQKq9UR31hdfuMFCcJcTmKidxNykiryoW3wjgrP3vBE5yK5BrgPmBEkUahq",
  "key37": "2yeS4ZDzGeyjMMwhW1ybPiUVsus34wGoQR3qiNYPvpySsdJNCVXTyyxtoiCK7hLBKZrjvsUCMFCYByvYb2xEHUSR",
  "key38": "qLuQ6QUniKLYMMCbJb4L4oSaSh2VjnTdcnokV1zh1CWimmPp3v6PokLzwTnCKvjMdTqj48u7UNvfi8JzPHpPioR",
  "key39": "4rNuJyoQxyQE22iXRdAqHz3yw5FTL7YFbebwjbChrvV7FRsiaAyo7XMP7v59bPV6vAVs9HMwpj1VEJhzVjvnrcmt",
  "key40": "kaEswRdTTKnzkwqxW353NPtqV4QC1XoPwLik5khEmNMnGoXvVcvXgV8NkJoasGHhtoHXTHq9audkYncBcNjVNo9",
  "key41": "JJJP8MArqQhqRkw2oTuhYLLwuo6y1HpbxQTxYixTeHqhjxFHJ7ha65tUjdgQKMNujzKprqCk9p2H5Zy3K8xfjtp",
  "key42": "34KgV7iGqccvA18zJpsmMURVEi13KuZQh1XXE47KTTEhC63YaNraHxRJD6BkFcfP5SmGCVEvdep6ujTrVV8NZ1xa",
  "key43": "eqZn2Jk8bp1HjrG4e5D2t1Gf2vFceKesViShGYeTXmxZZ3TNFNkUDLtNKfWoheZ6xyAQKcsCLwzS59KWghHAiHm",
  "key44": "37UpwfkXznQZHmpQx1t3cLcVQrYq8QWQzRWznjdf3e8tCZpQQp14sSHnvsv6sbnwZ8qafh9xgYbdfUsCuDRXsrAX",
  "key45": "YBUTSrKkBdbs7Zph293HRh3SeMXiVeK8uwjna2JGCzj73KLstL7DhNNSNpSoM3BYUMmKqaXRabi3QpS9yr5y5EA"
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

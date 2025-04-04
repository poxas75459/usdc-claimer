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
    "4trpnPHg7JAhAncjt7V3Jwx9RRUdZ2EL3ZbRzCVTqaVm9RfyzzBNwkt7kaS7DWjjerv3xhFvvVJazoYDsLKB4LVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U2wjVuVLDBCeHL9ARFQqzy1wZyFm1xwDEhkUtXLpCFH4EiWi23thicixDTwUC42NVXAF2jBpzwdqZmA4ydajQ1P",
  "key1": "32JKaWaNHrUNVR2M5eWM3F3y7PUf727sgDK5orHY8tiCdFXtPp6BUVUMU2PPjkdn193ca9P8sHKMQoUzNmy7SxKA",
  "key2": "29pUVt8GNL9awcCqYvisSM9ojsfzWHBaYYh6zxVmyTq3N75vY9YEQ1ke1NXzFwQp5ooGAmJi3VvT9P7RNNjugHg2",
  "key3": "2tLkHvUW4A6Wj1HK9eWoYduSFbD78MsDsLd5KtPLoFccjDZeLbVQcjcsN1h17jQY3wu3JxXbi7BQchNtgBKFN5z6",
  "key4": "48DsyZXCkNyj2SuxKvPBvdrr2cjBywhm9G6YEhkbinpFxN9vqD2dANnH5p5wbFoWg7NF1YuiviMPw3PrJ5rv3fQ9",
  "key5": "4BjL9tURMW7TtV7ptjhWuQhENqQJ8S7ptnx4UB53uEo3G4ky4jybL9DzGunvKhwZccE3CqPuwTVy1fCEQsgFpe3V",
  "key6": "4rbHn7ZiX2HeSVwTPJj63cVyRQNBowurxsoaijLoV7TeVM4GEHkMFmvawkQ1fEJ33oeYy1LTGP3bYpPmXsFWZ6F4",
  "key7": "4jTo5en9f5SmVy9CHxudEQs6xdWBL5yiMz5epmgSRb5pdqSvC1RJU9WBVybJt3i8hdDuxU2sBv49GstvUJrmKJvp",
  "key8": "2PL4QP6uGRoZSBX4fpDALAc4RsmvQaW1sF1NmepnhguXjQaRUniyyFNeQtPTvZBCMTMUbvFG9eLkix1HB5CrNe9A",
  "key9": "5px4HT2Leh9EicVXkYuZ4QS1yDcYgUbXkUKvdhC4ZA6RrPEwEPn63HrFM4BcCM1NrbHtjQDRkQPStXihZs5rKYwJ",
  "key10": "6SgunrfiLyZQvbi1oNGoeNMaXtJobdL8bYAFcfpZtPQA2oEva2KfpQBFegyc7eiib7FueQ8L378dmsByLiALDZh",
  "key11": "3Ft8TJgaHjJSghEjQxBZxc3JdMBu3BAWriErntA4kYw4jH5MbDnDVgP2KUMxNKbNqbioTXo8fhPJhAgR6JDf65Fb",
  "key12": "iHqsoDBGFUcsKDAjYksWRj5Z8aEcpuNEydZwQoj1QhDDLTd17tvA2Du82534mZpJYqtgcawDzMFocDFesQesa2L",
  "key13": "4DqcZwqr4WvM3jqxDYWGWfFcy1yzUiYzpcVg1c4Xe4ZgF1M5mRqc1Yyg3iRvDdW1TMvNbhVV9omVCd8j8TtCEJaj",
  "key14": "371Kv3xvBVbuFqv8V1Y8g6bUmzx6qqadjMFHB4fqnHjxXdvdT6WDMn6HFdr5iH6Lm6r2nTLVmDtnSEqPC7KTion3",
  "key15": "4CCyQ47HqVTCMMr4V3Au8gZthP2AsoYWJRr9NiwEXsiSEaH9RNwTjUanwrzGkqb7LNwXvUfNJfaVZdKi3156NRnD",
  "key16": "2LRxsx46swFNG21naki4pBKACsV5Th9FMDsGfu3359o3UmJwrkuWmGZeMktiDp2DxEPFwrC1H3yyhwMwwXFudt5W",
  "key17": "3k9wFraDFGu74w6GWfPCtrgV2FCqvP7MXBTHW3n5RgpS26kwb6aiuPmyTvegCCqJmERgPv3fjBy8yNquCo2QJHM2",
  "key18": "5oL6vBg437WrahzA2h9664nQSL4fpSmoSHrBZhrtQBAtZk1G8qXG6j6GXERdE4bdNHLJCNV7vMpb3iEYsWQLxhq5",
  "key19": "axntYNPCbrujCCmHhxfLUSaggwyLEBpihLSNweGDhfTpoknWxb4bgSmHiPh7Tm6E5j8zJZkT5CqqWRXdjNTF8so",
  "key20": "2pqz1BB4Gdb4L4zf1HEqHoGAMYvfKgcymJwnkANzqJJaHpcUR3juFrtbLHAGRAwgTH6hndSBkZByXYFYaDs1tpny",
  "key21": "yUWUNXSmXBLfg3fy5btuuDYwgo9s2M1BVJKAmRyRyc9jY4PjcvcdbCEfUkh2zFV3DcpMGxTUTdagE5zCZb1YwxZ",
  "key22": "vpsSR6sGxxAZN79H4xmcGnYhgkQL2BKBoadRFxstfgFqNB8RrxB1aTUHKe392bXhDWqjiSc75Tc2xpXtGonDBhC",
  "key23": "5X5wAdEQCKF67DE3H5tNVrVUEUiLMNwEdtvNk1hYiyuVzsLCA2rrrVb4xXGRubMqHbxfEXZGUAtG5Y16yto6LP1G",
  "key24": "65U6BcYjp5C7azGNNnVGtAsHsxMeC5SMybrLFkDPHgjywYeo7hFSJALPtDFfdryPPGwupBdAfcJDNxXGi1nWZi9W",
  "key25": "RzHb4Bdi6MiTQTZwiSfaFkccT9SJvYjB44Bm2PP9XoU5M76eXD6KeX5eaHbY1ygHKxpojEjLBkiuukEf36cZpnE",
  "key26": "4qYTnVTBiEdNoG7QVgAuLNkzsB33RU4jrr8mWgdpX7PAf2Xs19TYH72ZtNx1uYQq84xHdhRJQ2MSKWiJsR8D8EnU",
  "key27": "4rFgiT237zVoXCJbQcoWZvfPHF5SDYJycEnyzXdmjEQWvjPD1r8MhmvE9qi8J2p6gcB2yYuHZtdADXmioHH2D8yW",
  "key28": "4DxGiti8SuVFLRgjniBTecAkgqwa3aToWpoPq9StcwJmJLDdqQMv15vrxFR1UBhbCR7dN1kfGe2hWYtPa9rqju6b",
  "key29": "31J6GYAvx4ZXXMmsb44wVVxYfum6H5ZXK6SPMQRN11VtdBEMZQX8piuVJFtWKGiB9nuvx2ddw3PJtTtDhrdxcHw",
  "key30": "4nBsmxx8QusuXAcer63EU38wwcaiWndTCXt2dnoD6Rjfe7aJwsQAdwZsmwx8LnSxCVoZqR97odzqbfqyBbvuVvjJ",
  "key31": "5mdBSLEazzwbvhVvsoeb9FkyA3vzWgbPJuSSuDTzBMvip7xF26CVhFfvhxAB6YfpD1b8gcMYrvqmNg8PJ8Rw9HUg",
  "key32": "27iUW7uDmq9Cr6NUcS4RVtfk7GpH3mCu1KBDG6rPkjTErKFiNDWtd9RGW7zMHiUU6XyXr9ThbVH5WhPeH62k21iJ",
  "key33": "2YJHfYVX2q2JksEBsiYHKr37b7XUJC9qkX1gfENitmjDP8isoBBfKF9SgwDFxpPzkgpGwqgtqAu1qD7edNgPGdV4",
  "key34": "4nHe9VNpQ147DhSE1chg6P9oS9tE92cw9MvvF4TR8BbY96ASwEdExo29i3drujEsokYp4TA5dGxRgfv6jjhXUnYx",
  "key35": "5rtYgLPHS39W6vDTdAiDDf3vz5dFiEA418JXpbAaqUtcXNw2ac7FwssbDJW5CGNNCWXgSSj9VBnmQGqXnDgRE1zJ",
  "key36": "32Ex4xHsQ5B5971ZyJfLNaNPTheDTWWZar871wtgu6rRcgqc3yMfZwQ3Mxgb2YcgHDvaNi5MeyfV6hHctv9QQwdQ"
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

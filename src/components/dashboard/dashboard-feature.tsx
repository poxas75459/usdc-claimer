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
    "4gPaMb9EB7AmfabRA5SmcmgNLfcs3CgRVDM6dqMNGGQDF6aBhpX1HQFSVvBz7oWPJwFUF5pfrv8DWsQQHKRDUaLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMmda5EkYFxXtCemoViJLWGZJYLTf3SCBvn9d9JKuxcF8ngPWR2E6fniQwgroi4ifHsng3Yg47tUKB8uJh3fRg9",
  "key1": "3716tHW9GygcHKd5xu3Ein4nkL82CtVHnp2mBHMR8CGKcAHKb7chi2tAhu9tGQFtQVdR7MxFHZKHLWJPMjm7AsEt",
  "key2": "4zWCoaXWBu9VSWfYtyGxW62a4Nf4bUfCVVzrsgb1TxCVsCAceUgGgzx2uupgXhA4QY8uE5k7q6r3KQFvUEPwnSZR",
  "key3": "NykB5ocsULvStnvvzsVPk4aCN8581dvmYZJxe38pvQuainer1LqBLmv2qcY5d4pkf35wo2NHksNazbeC8gt8hsh",
  "key4": "3pADfQVaUMf2oAVmc9TFnZPWATZd1bCNJ1Sk6hR3ywuiSZjEuDTJP25dm5dSN6JNavmF6uKFuS8mrHvr4Ua4czSb",
  "key5": "4y158kNAUnvAe6BVf7zt94wGEJMczSNii6JmYWWdyakdu9C6cwUkLcTxTRXYQs9FdVdc21wZE2NdqFFEbDL7wjyh",
  "key6": "4YBJSuUEQ5K65k3qY1enCWcMNZ9TK3ERppjyvuVi9LvfDqjfJgoQsxRo5pzXAryQha7w8kmGEyFxz6DXQFZvsCju",
  "key7": "5BNAbRL2qCPNeNSd9Gtcn6sy5XgJSap9RwQxVtYKL3fbjWM75sCNs3Wwhbhcc3ZFsfD9QoFe2gptDpkdfjQWxxDL",
  "key8": "a1JPDWKVYvUzCLfPXEjedvYfSwJU6RA5gAViZ57zqhjQ51dd4zaHFazcKeJ6RhUfpNf7zCpjNHwXD7qTAYPMWF5",
  "key9": "qoRtEqReGnWoHncRYs9shE1ejhLZMgbrZkeLTem2pVyJzG1tHkAtDsFpfJtK1X3fXPvrY5H5eB8yQ1UmhrPJBVu",
  "key10": "2MkXQrbrTzJD26kkpaXPLpfCRk7VVqfjVZakiWrUWGbyftG67mef2AQr72erKyBGixKN8EgpFCYvfKPANrRjgTrz",
  "key11": "GDRKHGoJMSbxZEYYQ79vDrUzbj2GnotiYyNw4tjjMtLjAx9ASJ75Mtby1awqWCMbLQJgzyfDJu1rgRrLcmDMpXf",
  "key12": "2T36tgbqUZU4dbd5S7pK6DcdRCLDgcAbPJFzM9P1asEDp8VfP5b3goNchm5SCULPJLuGHxsZ7SB3aQAqzFuQ6nGY",
  "key13": "duCPpQk1aWz82vuiwkATqFawKt4ZbFt7SRddjRV9LBwDXeeFMQiuXQtPFEkF1eEvQoXKXmCN8hq8Ar92cP1jkXq",
  "key14": "FjX4WAWJt27RknUjgNtg2CYJELsEqUiSAKHyRVe54511G1VWv7GiByVJBCz6ih2kAtne38bzXrtZkzARGFg4C6V",
  "key15": "4mGSJpWVVEEmvo65gZ6Y9iP2wTcBq1eEXvLmD5qRjAmG12YgwnHqg5vcyHQ9ULmJhC3QBJpM1jsh3gUZj2NPLf99",
  "key16": "5TVpnkNsM3e34xd34xiTn8sx9kkhPUspKGw2mxUy43HMGModYaWG4ikESDT8FPmA1o86uW9EyqhLuVakZPkMqn68",
  "key17": "2sJnNLrihaytv7gvqVt8GFf7K3oKA5dDLvA5aqi7JPs3Y4Ved95HPP5sVRdWdijrCSqdFtwAUymvFidxdAg8z1iX",
  "key18": "35CrrgjSz7Ndb6t3JNpNBJbWmxxQrZRvrohd4e55HThaJXTnTwWrHMg3XzyD3SbRsAjqBe8Knwyk5CrkUfHfEJSW",
  "key19": "5VMfTD2CdRGwXEsSzAcpYvN4KkdB5524Di4wthQ2Pfoi5ix7gxSugSxJ3w6AqeVA9GdX7H4XqpcFbtWc8Ajjhn9d",
  "key20": "28xtSkLnVYQbbaXYXicV1FdQtwmy8deVv1zMnwnCvKqXg4Wn2xtKmeRwpaVPxCT3L7WFT1Btrtz3U8YwfboDcGoy",
  "key21": "9N8brvkDZXW4ur5AVGvfg8LrLFFsFdUP4hBwLBRNAg8Vgion5QtJ4TVfpjud9ZbB54Hv9YY1ntZexDBFgGAdaKf",
  "key22": "vBb1LvckHUhFggH7jKYtYrkLSLaERrx6WB3uJ3Dihp6VB7G57K4UuZinxkGWE349NtW4WF5kM7avXsF7e6fURoc",
  "key23": "JMH6XP34jEcjyUmKURNByCtfJKnYdLNNT2VfD1Sg8WebYe5QHwXpuk7TUTTXBMms2otaLP8RsF43sjZG7JGiMtw",
  "key24": "5PLRgzdRinvoD2fRoeBy4oAMAAVZvYE24gq7AEq2J7bpNCP9tbcK9tup5RPaauiVc6g2srDK2Q9wbBRFVc3rpwta",
  "key25": "4CkBKXVWBmKC6bZfyivfd2Yz6RCNgTPsx3oBbid8NHMVWVTu81Zrit7cpKh463PvwxM65zAyB9sXD5eyVLDvwxxH",
  "key26": "4qBryaq4EgYKr2waFWjXwgYbD9e7RF2oWgwoKS9pHzEvKgx2kf7p9Hs92H6ks3cxCsku4G6MSWQShQGCgifZP3Kj",
  "key27": "2DwJzbhZwHzqccVFQTUS1EXB9zwfAvhTuE1NkJ3Wy6SQMAo8WSfThcGjLKuqaUB8jccPWRDRLby7qCCaw9Ca195e",
  "key28": "2TYRFPDvkgcpKxPZD22dJfVM4bcP3x1DhoG3W9F4RaJx9tfgU1QQ96CAgNoeoDqFjWQSLRtvHYLPf86CghWMFGVr",
  "key29": "5kT8WL54q7yBQvEdsJKssJ8cyhyVDMzxK2sLkSorKfVaDHmCqbJxgE6ojW7PEBRsnF5ePg58QA1RTdFTu6NXojmZ",
  "key30": "2iDPuoJESpPekucEAitYJTR6MffDXRQuvdVxGJcmY9Q2DrC3DM733XjeQrDM8mxNd7FLGbik4kenwsVeHXoanJmZ",
  "key31": "2mwtVbpMy3prNpBRZtirJJBzSj7mQBaTYpVwYuDGEJgwFeV45dWhy5QH4wunjbkaD72MNyMkQ6km7VdxAZNc8oKS"
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

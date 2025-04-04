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
    "4ES5skP3o71r9vEYSJdejE3NmpgYQ5bLVAZicouz5S45DAUeEAch6fBi2TNbT5yJq9kYv96uxw6tS9a2Zgi4E9bH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CoyfvkDfDxm5ooh9hdCmjFYk6iH5YA66fPy2musShwTVR4oS5UHWvEJfJrL5x4T9TES9cb2PDcjqqn8ZNsg1mW9",
  "key1": "5X2zHwvj9JFkTAGU4UWVSp8eoPzTz8nXoyjmjsdWW2R5hbNvsmDWYjLLoiCm94LFncp9hPYX49odH64kRw2jSLfb",
  "key2": "3eg3VW8437CFAy1LxW3gXb5jFebzTGJyXHhAd2V1dpdXDz7U9oJbMzLKYXtJLoR2vWAaGzwrHxq9bssNWdtrN7S6",
  "key3": "3VQWQVkQaxANTjXSYDLWKaAAmxDLfq7WPR75Ue1tj5QNyZ5LErBRhhdy8A7hcSk258bMjmWUGxxxEoG8WwLA9KFs",
  "key4": "27KuCAwsvEzhVBjvzQHq2n125X4EpLFZ8am5inU6bLrLPs5U6jwZCnmK2AEH7GNvmBVYxQaFb8Xo9Gaqub4UdxMQ",
  "key5": "TujvRAjKZiyp8m4rRnk8nV4RT3J8ea5iXCBbxAr81sMUTzuxdx1gWzPyk7fxsDfgHRGomFFL3y7FCYTG7EsfS5f",
  "key6": "e2knSBCMfmumyDeHTp2zsK7HXE3kwwctfDZRtWmGqqz5bQGXxj42RSVwcczuMQ1A72a1tjfnax4v2pZXux4kadb",
  "key7": "5FDxkqwxrTy22hy6HPqrLC5HjWCz2rpCwgA35AoVJge337SPZPmEYnSv4rg2BLPVuhsVZCCBQGvx6x9UETDpLhaz",
  "key8": "3VAJ2wXPkCprXn2vxw8j6NynrSfeU9xMFyFWWsFSK3k8J4NKxMkom3YWkVN6vekPpfwKqSLf13S6ktavaKw79DSo",
  "key9": "2C3V75idCrT7uBrZ4RC6ZyaenemrfXkbK33VA46J93JLHhyg8bULzYoozEaBeq9XgPBrPs7LZNezMnNXYhcFvDVi",
  "key10": "5imhfjbFDycgBpQRM8W1pL79BNjfckEU7B2qA1JidTR1q3RZxvxWwiXntEAUaxArBnecekJXJhSMWzcTQSPVHaAB",
  "key11": "45rMD4kD1CfHiwu5mTLKgiN3SYkAPWvy8Exxxrb43Kq7DPcT1oPN9mAQfrnUwbYjmHuBwVfMVMvBRTbEKa9Wi36d",
  "key12": "Y998HWBncDatJrNLH4YJ8AA5oQKb8DoLxwy88GkrfrVnq9BKZuhosm1pAQbv83TfHHeQt2sJyfC9pDogAJyPbHX",
  "key13": "5hXDNf23n5cEa3KaRJ2Gkt9r6Jvqxa4wPepHapKkmoASsj9V6uULbdkEBkPequJSpAvhevnTnww8uuEUNnL1ke5v",
  "key14": "Smz74S2yjrbeBK7apgMJ7eu6tmZz8KyGtF3RavCEqGqMQKKZnAKxiwtjidCCJYLTMWR4WhmWgbfteYAzdcQmZTC",
  "key15": "5ndzez7PUouQXUYWAsCYXrQv92jyjVL32ZGkbv5hKhuecGmDKavYJGPCko5FVSwsnhab75whm7oyaRsfDYxxAkas",
  "key16": "3MhdMLHVrLqCXrmVvnueXxCsRFKj8ySm2vaaG5xUEiDyoQGdxpczTA9dV2MiWRdCoTsuzLyXAn5eebY2FHUyEZi6",
  "key17": "5QMSmT17V7udvQoGZMiHuv4QQbQX1KJwQyP45kHysSPwByaUNArpvKiaXHBGn7gqek713S5PNqAVZTu9v2QGhMkm",
  "key18": "VwUd2uf1o6PDgiH4csLwJtJ9EwcfVDFZ1Z97f9t5Jaougs96sJ9QM6ZgF74KirVj1YqSy8UDtju1psRydtuhzzq",
  "key19": "NPNd8eSQuT26K7XGrjKr74Pi95zT9jzrhp8LWjqrhoRb94rW4L3M7S84JebLakVMp8LHqKq5rDdWx6fR9yMNtew",
  "key20": "dBNS3dxu2Xd7mx5pyGLBGuZR2vEWRdKSv1uAypvL41GztJvubDKkVgTa3ghAi4A3mQCarb7GCVGWxYSMsf9R3QN",
  "key21": "4y14pK8VqGBCWeBbWQm6Z4BS4qAm8HjJsE1434ERxsbq4kn4UrQQjqcY3BDjMM5Rsy382XtktVe2gc5TqY9zh6E",
  "key22": "4VTR3o3FT18LXN1eie657bBSSiAjMSNnm979LSMNwjob3xmFheiWZpAWPatbpWUuFN7hi6VRvBtjCrgMCCuQHQMU",
  "key23": "EnFoRNbmdf2Sgs4r7t2rJjyRDPDkvjtTzAnfKVPHeuS1HA795aifU5TF9ZhN53FXgE9hu8ju8UELEiQGDwBBArE",
  "key24": "4vG3tiomz7puBcyLn1KMFeSgbM2X3aA91pGRVuRdL6KM9SBzjACRCg5MxcvePHPS1EWNU9jdkfmty1ZD48ugNv2Q",
  "key25": "3aFx52kNgC7qcSXUPEo1GLRFYKGbyWmigzwHHRwBc9oGYqXSHNWCVrDxNFWGqkLo3JoyiWRvhguZrKuRiz27Hny4",
  "key26": "4g5iXRioYn5jtXk9gC1txXLVQduJm19GynYWGX52iXFhoKkv7dBgLhQfYEBg9kRNjPdWYmq5Jc1ZuJb38UgmBQfe",
  "key27": "4A4yrvvs4RvKFo2ycDkbyzzuycVDgQgDbWAE9PGtA9ookExi5wNPPDPwQa55GXB9CvKKyC4fXTVEb1kb1QpFxEAW",
  "key28": "EhWgGQzP5ZTFgoTsEu9hRMhLQprKq2LGr98TjGj7KmJUF9XrSRq7JFzHXXUgXe3VBVXd4TkjPAFxbe7cJQPodB9",
  "key29": "3yeqTHUYxR7JCmkePCW5Lw1ba2X7sNr35gQVn2nWyDmN8cY3vpr5uK2Tv8j77QoDJ7NxLmQkNfAnhz5syjG2aA6L",
  "key30": "5hDUuwungdZzRt9WuwASWS1TyBaj4qFcZkSLU16dfiiJGiegnBSUNtH7sRgEB774mwGa1Lwv54Bj2CSGWSi7jqJA",
  "key31": "65vcah5m8AGstU4vZSMXQQGFVuFmqvRsvikyKcReV4chFLBpteLjjab9Hqb6U4xxW2kD4GZqKGSU7iEsQFRJQ1rk",
  "key32": "2KUD5CTB3YKZxh1f8tcuvD87XZMZfPcQfUVErxBoKw2AmvpfskLXHC7oZRvMJiwUQtkJPyKtRE6nAoHCVCYkayRG",
  "key33": "d5LKW5KzRRrHVy495kRnXrGWXwN4CzysdyojRKC6Q22pou7zUdNKUF4cnHMUjg8zyhDAmhgrZH2yiPfWkAQrNAm",
  "key34": "3R7RFPoE9P1ZQU5Nv426wucJe8fCRi4vE2b7QicjHQ4V18MZ66oNqFHsWoc9s5PjUYumYsJAq1AWmUw4HWfpC1Z9",
  "key35": "5CQDgT3XAzByMuJVXv6FpfWFYgPBBzgdfFDpGoVacU14bAUyhbreESDQf6KALVfXPRT2BJfBdqs1UkMqjFLhaxfY",
  "key36": "2jA2SAx2iBgRp7Gg5BdA4L1su9Gkuhb35ikGPhtM3eZ7tjTe5Po1UF5aqvX4iJHPry1wwP9dfe2QxgnfRBQhXZEq"
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

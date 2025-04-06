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
    "A4D7qkJmXzuHbRn7ecvVD7Tp8LbwJ4bd13Wm9ys1GzUsHcagEdpyEn3MqtSZMHVnX4JAGKqQjHp8x2qwN4nB6NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ffHDWMqJVJHbQw2eDXW8fYL3sA59F2MJULm6uvm2qSQbxEXXComrWqAGHsjdLkdt4iV2MEzS8oRaZBYLvb2ppkR",
  "key1": "5gZbFcFrzEsi2xKFtNYq6GF3EM1E9EihKviadgJ53YcQGRaM2rNe1JPpn5rNv8h1iwzHZUFgp7jMzqB4EkHcDXNS",
  "key2": "3pHaMKihdFTc9XfVWFVQG5sj9LZJYhTKWDfnMRJYwrdnpLqVfDjTQoi8Jn2eGfV2VAuVQjHmNWQ7b1Ls3sPJ7EE1",
  "key3": "3Y4nPoDfuN879sadzqzJZySUUCPKJmCscs52HyxTmNWcRhbUfDt7TrfphwfAnxd8xWmBGMws1EQsjQNMEvqmDNSU",
  "key4": "66EkNQ7ZdE9VqfW9SED3u1jFancchYe7agzJ9j3wh2WCtmxJzJvgRAZuRuwp5Bu7qaKboCrpTH5p4ybsXptEoN6J",
  "key5": "418Mb28XWLm2fKFLTSMYcVt1uWD1vHYZ1UohSc3yRfcP9HHurVC5Tsa1WUQKZBNV6aV7Lnk7zU5ZBCXYq35QRmaL",
  "key6": "2xCd44fFY8XV4Fy3YuLYU7cp2LunopSinhqQTEkRCb5om8popbh7GdXgzBCNRbVGVMBSUFD4HZA3BVYc8YcH4WEj",
  "key7": "2vTkgKggMmwnTTGQrzSSJgh2kB5UoEZmFuPj2JQXqFUxgSt4kaxuFDS4f1tkvGVBKDRH9vQ8vJzsXrYHwsjiZWqA",
  "key8": "249kndfLFCjn4xqEcqWUQ72KLJpqLjuLVGxnpRCYBnqTN1WMczmgd5CkSmeqTvSLzYsVyd7ivNShXDpnGqWT4yZs",
  "key9": "mpEXATn1qxQg2ws9wzdiPuZXawBYWzedi3gkv2o3sJWBXDyZbrvaXxeGCq9iU4y6FyK1DkkQZBdNC6YwfgAB4BQ",
  "key10": "3ewqPKmhMdHVJ8HEmA2rsrSk2koyPMvdmc6jjDzTRuRrj3XC6DtxfUuWGxXtPz91XAWaVcH3cHepSsfjUdW82hc9",
  "key11": "3tcsEVtjVkuLaTUvzfQpUukE8uCZWGCxW5xQM1uJWQEygw6oV2bJupPprnCoBghgq3Fx4aBMdCyrCmmtk8v2k6nN",
  "key12": "3LnsJQRotSTZUtsKUoNqy7gv7ESDReLk5JVxYo1Jg7DEGtHLpf6o6evPmoXqo6fmv8pYgMoWAGTQZJcn2VxREAzQ",
  "key13": "59zvj96ffRyNWQjazx2nNVRoRwVxnrDVnfUcLdkVnLTLwCRiyEWpUATVJjhyRX2uF5KUWT44X7bjQ5bJyQCGb8mm",
  "key14": "3xAk72VuYPfn4sgp3WNYEDx6deRb22vHfw5cTPEhF75XZMoivLMHagYWdFgrSt4gSEfRPdDoiTtLSjnmE4sqMtY",
  "key15": "membABz7VCLFnKco5LpvjPb4BiQAKyXXYhstmSkRzjcFvZFEqntm9DdcXq79JLaFMoPwvV3TRDA25RdJVNcLTNz",
  "key16": "WodTthKerx8C6iZ3fMkj1UDkkgN7yrHwyxDLp8BrdFJ1dZCQeJzw83wCXAe5wAAbC8WFVroTRKtaf6K35esa8ZC",
  "key17": "4tt42pRnd3A34HtVm1YRGo1fAdPiR1UDBmhuSfRXKF1xi8Z19JpgEsJKUSTYxr62JEKpiqVcBAhZVFKAH3bDhGAS",
  "key18": "QNbHqcU5LQE1HmRzbkBjqyyP8N2Zp1KLt25wGGAeFbG44mXdJgVKSnxNyyxxe659BnywY9usNzyJ6pGHrQ19rzE",
  "key19": "2wbBBsfWcgstaQztUr22roXbGj5ktcodryUeEPeSG2yAKaY1JLaWyQaf8gPbxDggFzSGhg1GM6N2e4cxJPWzErxk",
  "key20": "5zJBM9HsNaazd4UPGbpwp16ipkJbPsmp7rMNbocHPW8R1vLTXQ9HmR96cRNsBhx96wXGfLxTNCoM2h811okdiBW1",
  "key21": "4GNjmrgZRMfXBm2vc9TsN12ksGX5pdPMeCwhgiKXbGY3qwDHf6iWm85XwghLyWJymE68fhuU8S8XNYxa1bHCG7vt",
  "key22": "36W6EMJfTYQYB6WyBKzRgzvJfR6fDS6BQe6bbTUYNCFD2LxmeeuuiXR9JaV9udCiXVWyaynk5RNjFkP1xLQK1BWi",
  "key23": "3pjnmXo66TJY7Mcf2TxtwXzKsVgiPCcptjWzFPdFXGdcwNDqt98cNkqkzghJvkqfvx5FKB7nZBdZw5SxupSRpJ1x",
  "key24": "16Fk8RhpBRqy1YHXmfjpvKwniqJTHmZryBeo9svL2y1kpxvRvKmEE9h7FkXJhKhy3mAcXMehsNuUmzKJpwfRGzU",
  "key25": "5REVTaow4j4sKHgQVifTHrWVSePipQSw1cfRuJn1q5YCtTUvukSrr9RTAcSaMPwYeo6xrZsvGJ5cbyZ9LMMBG3Xt",
  "key26": "38nefT6znMo2T98h1eNyZVjCsd5tpWtRv75ZGf7u5auueXaZYENmKtV39McgSgVEVtPjBfthRSBrZ4RXWa3LAqMW",
  "key27": "4jGaAwjyL3c1Xm8pC4NLBdSX6q1Pc5C2EA6JPyLQfk9BgTf5bcPzXRk6WsEWnf6S6cd2MvESta9GVLFaR7K5ePHu",
  "key28": "3FnkJrqja9Dy63MV4GYnSnxTXrkRz7RtYLpvtVB7t6f28jmPsQ3YR8Hkt4qZW5Z2MpyV8sxnvoxBm75oQjctGigs",
  "key29": "aCwyWHmS4YhZiBYoexm4MCRDsAzJPCkfMD9ssh5JvYC8ugjeg7RujbRJ4dwaGzihueAK5ceCvUNAqe2pmkgyzRe",
  "key30": "3cXznZ2djrmJkrD2Tbx6brAob9J8pfxK53s4KBXdDww8TCViqgmtbK9NaGkbfNXBJapGRRkWAry3G3BpqrVSJEcN",
  "key31": "UH7rBPUXETBtztCA72yqpax4xS6tRvTm4cgWFJQ58XuyBizo8CytQn7b61mW8qhMQNbHEVLg5frvFcuYe9PhzCu",
  "key32": "4EjQuxpWbV3L5gzhquFWiUgNLxtUudNgaekVZfqRrkfDU257tu371YCdVCJ6pwrtHh5bq26x4eLpNaNwiHGjzRK6"
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

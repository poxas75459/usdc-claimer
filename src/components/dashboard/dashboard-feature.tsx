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
    "4n7KeFVBxWAVYW5GbxaccnJEPA22JwKCHDSWiG9W4cQPTGtMQ7JttpRPhhmQZ8dAA9mE2Cfb8PvnxVggBi1E9fFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ZjDLVYXRNwG2TuoRaXvw4Lhiy3CgWqdTadDWGaXhxnxGrTLZCNmzZj42rFFRFxdNzTFGMmEkQvyx7ogB8b4Atf",
  "key1": "5kxvxN6ETFUouqXBQKrmBuHz1pT7dGeWM5AYg4VKi8pmXosmDZq5vjGzNqdSutKv1Jx6t55umtqTR73gtVtZmLxj",
  "key2": "5aXmA8L1ToiJbDfgfGzTa37RprYPfYvbKwqX9e4ssMJa68jpWGArrtz9ijpw1kf4DEtusXHS5HksRLZzpT3N9we8",
  "key3": "4HWTyATwk5c335EoJNBKPu6vmmvWvcTqfsgy7T3BRnQohaY1b2mrjPwbL4BUxqw2vzuxAVZ9FAjZgRjSgjYxA7FU",
  "key4": "5WHXutgtKGVdJ2f3GDgfyuuE3sNgqz5ZugYd4RUhbejwC4eEoQZB25GjzKVbVokB3yJHiv9nonArcDfFRiqAuvnd",
  "key5": "5FDX5PeWek8JkpjY5Ph66UvjSMKYcJyLDQe9i4qhmHSJkYTdG4NyM1LR7kRpPVmVdTk1FHKEmNL4ZYSSwn99cFxg",
  "key6": "RzGFQs91MnbudAd1fmiss9xQ8iGRGKA12PcSv76AabRNdgdNNSte1t1rxhwJF1YFpZjdtnQ8ZJzhc68S9aRiKgz",
  "key7": "33C8ARR8NsLtXj6MmXYqyASbntUEh2UdLQi99FkRBECVciqFn2dC2oM7rXDDZN261YjzqFLY98KuXEd1GhaJSf5B",
  "key8": "3u8auZZ5X8hXSh4xSrYZYVsxUGXBJL1LQEJf9ZDQwu5EgcSukrx4SQQXNa7E2vPEA7UhTUjUH3FYCZiLNfCeEX2g",
  "key9": "4KJDSv7HqAjcEbGkrqpcNEGSnmyArA6os4QUpyPB4VF6JxREQeMjLToz1iSqLE1inHQgMg2J8wvRTD5DAdRGiwAC",
  "key10": "3eSvCvXJL1t1YmQFq2MNfeprcuTXadQimkFJminED4PqWmHNjTQZdyrRij9KnLfcETooeR2Ck2kya2Vch6V3PmYW",
  "key11": "8qWeYjMg1CCSEcb9ojjcKb7ooGaMXCZW413fpT8RG5cp8SS5MM83a7scp7gZNA2YTRsr5AtFpQve3zVpDKNRksS",
  "key12": "3xiXXeNwWtYoKQ3GwTCApFkgaLm9dEfJNHzBZwq4Z7WKJmggxrtyyNCRMXf57V4ETdjCp3deXkau2qwiLCnruiZk",
  "key13": "YrRtsUSYSGkTNWxz3WMpUPKmLmAcNvMGqHPDPDwDvBUNrzGu7Emo5DYZokW4yxcLSxWeeN2pLneVP1BSfGe4Uzp",
  "key14": "594T1q12QVSrSR6VBgwp4oZUczhT2GrEHx1juhLagbLyLEbuUpuPmx9U17p6FwysSUvZBe2Dn9jgW9RtPMU281JW",
  "key15": "44oTQWVE6VAGFDLGRcpfAFrnjpPkgoCJqxE5kNm3z3wZCF7j8931L79UTsNV5nE3xKY9Zk57dNSvCa6PiJr9oTvG",
  "key16": "2Wm7p3pDv4TojM5TPuWNKHikVS63rWkurQ67eab8Fb7ybnUGHfZ867U58xALjkxu5yTngX3UguiANN8NFMoCR8S2",
  "key17": "523wL1GEoU6u2eMRhYRqa3v8TAHwX8Q5JX3zQ2oxBHhQPyoDyH6Ffdr1cDeYA8j9z77nk9c5PWG1NPti533of149",
  "key18": "34QrbjHyNPckhKvAF5o24ahXa33UxJYbZUXJFXYdQaNCoY2Mc3GEHGKiAi55NjN8H3BzYDWQQGPC7iUc7tAQURww",
  "key19": "xmbymAurZPMcegJLJHthsun6RLPTAHhjYfdxhQLMnBAPUdimEgYZtiGjxibcp5JSmhsn7hdheWXz8AWSfW2ZuhZ",
  "key20": "3Rpr9GAgY1NMwxGNogbABnFi8xhz15Mt3ptJ88mZZuoQr7sH8kYnEpyrPVrVa7ZBYbHRcmFbZcLiiYgLRGoo4hqi",
  "key21": "57Ucc13hwfZogVcPbS59RUkAswCpemGz8SfX9iMJt9d1G9CAJ4oRNjMdoFwQgNPEYDMaGcMffw4wq1f84WjvmHbK",
  "key22": "4VgMTqVX2CJ4QtxtN6ywopsSYPXpVGWFyYgGocoYUDjgoSUVqfTzRyj1JwTRrFkfWDKZfBG1Pjc15rf49bYrWnjH",
  "key23": "43uvAakepyqiaurA18RAhVCfvhkrp97UGttZe35aZqfFW6o8uc7FM8k3pAoksvQUwjxcbPjhRmxN1F5tYFbpVZ3P",
  "key24": "3abA8sHHFm9n4PYR6VtGXLyqvBATtxPAv3Mwj6EyNG5E8RzfcsksuQiRe66Gs6am6jWcmwNMGChHW9mYGrsvhD8a",
  "key25": "5ffcx3w718gAyEks1sSz6Eg21w2c5spMJPYLNiVw2ump38QUfxCfDszbpfpNqRYfSVhqET8YsnvnMZGmWYqSBuRE",
  "key26": "4s49KCtCmzHk8ZLWzLVuy9p3FfUWJoRMAZ9jLW6e4f1zUn4btDJ4AVQLfUSQHN2UrYibnEGUa3YvgmKEAnHTVMZh",
  "key27": "3bgHz5ykizahF3XCGoagacMkrjADacejeuezCSTcSmH4RGqb2Ge4j6XqwKqdtE9PUU7o3qUCuXzmiwJwYjswLokg",
  "key28": "4Ka65pBT1PjCoV94iAgmZfyetYwL9LQgTKQZE7jYqcgJbRtpqvCUoYErMHxs1Eg864TkDfYgaswcCe6p9uT3vE4d",
  "key29": "5FhFRV8RiQbc347goD7wekNu1uept3VeTNReYZfSZdFi6ercff1ZU8g3uYqvHFhoj2sZW59tnigzhatxn5Wv2xRD",
  "key30": "22zCqW3PYs4m6SbySKGE5CeNX9cDQeq77CgX2KsAwxuxgryFonFtee1R2MfymxWK6pf53NmAc2UxXsWNzdMwBfqJ",
  "key31": "2HsmDCsJXa4h5NUXPfZjPhEbK5W3fuwenh5SW3mo3Z7jcUfbFnr7DyqnRk8AKquMdBr5Xc1oP2rCQCj6N6aTpKV8",
  "key32": "497uN6mJ89KCVJaXauHCzdpgca4wpDL6os8MEhTFPNJ47Swjyay6HgaZSMvvAYsRbgVL5tjx25xyNFDSntLc6oLT",
  "key33": "4zPU1hyU7S3jNoH64ksBYjEQKmMN6ZuowFL2xTXYFPbGRfaMsPd86TSdJX1dAo93GGf5sYjLLnE9nuJ97rDcUnkV",
  "key34": "5veoBhpPyeqjgnPNsQvfMsRzTpYWsrJMeViLdg4jYiH3L2wJkCrtxZsQovYAPBWzzW6fY3J6rieiotdgeqXnpzS1",
  "key35": "24E3QYzmHov1RBuBsqnUo1MpnGdgBwHyZrnpAtedBhtostKQDRyUmr8AZDqZNVFLiSLzdxLaAarQ1sSLDy2Ec9xn",
  "key36": "4hrdWp1cmqjPnRZYNTckwkPRKUppEvZtis7qLTzahhePpxJiAZw6h38DCP7qvw5oh4FDCvJanRAFEvV2cQEMVtmX",
  "key37": "5a41T1QXakCbFcbkMn7UJzS9kcCDZYvVhDEvRHuBTvYbiKS3hAqXaC3DBcZv3BrNkvMogyjDnKrmK4TVfqLLr5Cr",
  "key38": "2VSCHdcA7Q57bGWGaNVoY6qVG6RH52pv7CcfbJoW6SLikW7RZssGdFPkDCixjTVEQJqEV2RsSsZnqLkUr5qqZTsN"
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

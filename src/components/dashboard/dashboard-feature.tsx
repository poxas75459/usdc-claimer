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
    "4tUAaQQsjYJQB2wG52iC5dePyGGqvTTJRDhvG6L9pZdhNmEMq7yY9owS8WFqtR6ZT2rMueC7Wct154CurCprhAZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHL9Z8gtVxEpskVtJPzDoB9L5iZ48h9c3YWTGSJtmtMShAwKNNYQaacNsBP3GRUv4xRdTUphA6JW56DApWZFdM7",
  "key1": "4KMc9YrLAWfgqRQTkm692MVw1Gv7BpQYsoFUnJqanLUSFHMY75m3fUtDDhFGYcvotmdjy9KB6VV95HitHAgX2yop",
  "key2": "66kKVn1ENeVSPzWLq9PXWkb1NYfqWdJ2LuQDMP1EPNk458WMkZfHbp56mUC5TkDAjiVbxz3eeXp443pxwZNhe6hL",
  "key3": "3eDnKeCQ1ohyY4gQ3qNMia4PjsXfYjJzkoTDRehTBtoh7G9x4cA1UVc7jdPu7qLo3L63zoxDgUy3gSHZqNvZJLUr",
  "key4": "GpqmHJK1diMV9jwLocRJBRso4JTa2BqkrvSXqLSzYNFyNcMtwvUMgJHUbTj9CLjczkwHM9kpLS5CWeT6Sywu9WM",
  "key5": "4HowCUJ3xCzYH15woG6Wowmm4v8T8YA4yWJGrWNex7zVkSTTydPniTczRZxP3vL8mThJYWUxDwPrJ3BtWxVFybXL",
  "key6": "34br7wXJDdqz3nsHzeGuCBbyoF146CLF3ocG3SRoJWDGTZ7Pi5V8ubq1S7qw1VDxxD3xRmtiDsj7rk83gJfZs6w7",
  "key7": "2n7bGsu15ccFmDUAbm2Jp5VuNbUR6BeSGfGL7d5xD2PucyN6D3N8qBmRh9FF8aroYmWjPiADyhsmkSfyRD92As5s",
  "key8": "2he2jNmsZfe3q1RfBjnfrqf5patYZs9CqoUq37QSpNKoJdDRpND89rFj2NRwxYrmt3yFMGaRkjMXvzuyrtxdR1iS",
  "key9": "5Kzq9XVeLc74XyXwKdCoitizY1NhwDHfejQFfYe66NGFyeLD3YfY6rCX5eKQqNY2iye91f4Pfv3QfnMHWpwMkYMr",
  "key10": "4FMELYvLKGfCE2ow3aU9XpMkEnE8xMZAmCuP3SsB7du2DqhzPs7xWMkfyy37i1iAiWPqkFYcw9PdGA5T8pTsEDre",
  "key11": "dq8AN7RQjkRQvAM1upEtyaLxmmQkeiA4bD3KBAhFuBpM6PRooLMKLVonCcqX63gpHNtrAwApTE7CHakTkazcQWC",
  "key12": "2usMC3WVoRB9x7vLZH1cobAHxiRh9CXpwAZKV1f7v8QT9xeV3G18CRrrDPV9HpQie3QmaU6d64TwAFq2tgJfT1kQ",
  "key13": "QqB4DoDryh8SoteaKac51xUvr1xwSayuikYANNm3iaoWHvArznKV7CkRN5fF18PdZoYSYCyVS8HZVoCJEPTyTXF",
  "key14": "4goXGqr5m5yyNSFoVYHMygsTwPES52PbxrmHditaWWCWM5VsEjmKZzHppNdfDN8FCQprCWCR1o5DZKZuUNv5uMW1",
  "key15": "4TB9YLPtwE6TrkAhgHrbeHh7x5sDFxw7pZdYgQZuTf4FhvKcFgM8v3WrE3nxKSnHJXaMyL4ftuGUvNzZazc5idFc",
  "key16": "3HVNMZiimxu2Dv8d3ULhmf5Y73rFc27Ke6B62pmkYbjmSLxZ27Z7dLoAm6yswHhch3JerwTej7rySc28rg4obPGh",
  "key17": "2ywpt2Vfdh5TJnuefNiDH6d5G5Cg6CfWHzH57yFLrXJcqfE9QGLsQx6TqtM9Rqo4RzFn6ZqhJ1fVAZrCPpEWW2EE",
  "key18": "Yo8Li788BKGMcAxwr7axoa4HeN14zZFsWgdVtQLKYEWvXbpsVZD8rt5VTRnR47MFE34P9KFaKUGqtDSYXWAZYkq",
  "key19": "5ojkjjnSqaxEX8bjKkwpQ4yXATZ8VzzMc9x9Qrkw1uhXuY8rN9LJTNqyCEPy7dJesoE4CFudTcoG3Wr3A91RP8uo",
  "key20": "4Y41e3Zje45ZK372LvYUEHGBPBJtm2hr6CEpqSqu8NGztyt4DRsUnVdFRNsNdcsqeVqqyaQ9ZYMVU7QjGu4wfuY1",
  "key21": "3BRyTUxB3677VBXr2AXZHREHSwjQTL1v1b8jq5FNJdiaASqbawt1Q67XzJai51jFDMFq3h3ETHWKXdiNvxZw4rGN",
  "key22": "3C5NXfwhMD4jvkhExiw1sz11CrJV8c1qsnHsKXSKCJFndpWBVwGFR3pDT8NkvGSWqe7HVLvBFzpifH7We1ayJhdK",
  "key23": "2wGyajgtUoRqUzALBLc4o6gmZzw7tLGWLo6m5tDGT18kT6BpUAtVtRZ41VrGNUpJQBrHvMZFVLigSQiQUwjSnvQA",
  "key24": "3xc1UnTuTiYqyrK7PoSoGfvU6Pikktp9bAHxAmySBUcmWsPcLaUc9Dxd6DaYWa5XxkVSQ26WwCvwGd2CfNXB6wXY",
  "key25": "51FtAB7A5R5AiPuWQ3tesQYLDU7wvWUJNfP1o3GnWuWAEZNEVAMCJGVcn8bv8oGMF5zXUyafvvi1RG4aQSn6mEtW",
  "key26": "NgYTz7LKnHyuxoLXGk6vLtEeeyWUiFYMWn7RFQbPu3JFRTTPkTN8khTAarS4fKgtZmYpsNM7mMySAetXoko6PEv",
  "key27": "67iUgsCKdu6RwycPJ9KaFgKmjrCLU9xLeQVVgYEMZw1tuAt77tsyU1Z6vAkk7r7CAdDzyq12CL9W2uezkpCEpnuu",
  "key28": "2WtWJuAJWYd3fajnHaQFPtorxJpA3CrtQRJipRJb4nZbtCXpJj13NfPsmF611rhMWefNMdacLYseUoS7fudxNcRL",
  "key29": "4Dva8C8VMb8C13mAXX9QDAz7koDjRv7LR4D3boPbcNHH9kVAoY5nEonCpFnxanx3E4b1rL9d8Pa3abLgPUVQXkUx",
  "key30": "w8n86BSLbZQchA8G1byAVW3SxWqVJLUWoFd6SMCY22i2q9tKgvyZ2546CAhe6ZpxWuX5it6GGrRMDGzCCA8hzuB",
  "key31": "eWp1nCKuEADhuoKG6NEQi8yGzsapV1e9AG4cFv1JFoB5dWvvftks5GLH4gewcSCq9Qeu25oQP9YYt3g5ueX91ro",
  "key32": "4VhxBCkmT5vCabQkAkCKgNh26tDJ2RJPFfGNvY9WSRFRtPpYCjsw2CSG5oUgPimwKyUanLpAmHq3drJdd3Eg3tj8",
  "key33": "33fUPSDQrqAwSfoKWzwgKQPZ6jCBc3WPGP2sfwWPwbyfR8NEV4TLqNuQN2SPzhQbTwJ2oU4hf9XBAv6dN6WyArXD",
  "key34": "5z5v2zaHFiK19X1hxkq8G9Du2JbJEoX2oeqSCUfjJ3kSJHH1EuyBTf5MVx4FNBZAgXGzzGZyF1mcH6UHGaGR4Ept",
  "key35": "yqkvcakbbzgUGnqCKWzSJ3cBVNu32ngoV1xqEHGcgJUaMx4aU7Ut3cBScG9WwfA8P5ewxoNgmtNzAJTsEGKXkmU",
  "key36": "3WbVYcxvZjv11Nikp26ndK2oaAzdVJdsH2RANRozB7y8Bj89rYpsVxj6kw9dH89dACLJufH2R7jyfrytjVrs76rB",
  "key37": "6626G5cEzW97DvtACqsyasdsj6MXSf6Y91Jh5pVnr2YYe4geUoqvbnrfrtfoQA1s5PF5jfvqnKe6VkJDt6gQbdLh",
  "key38": "53NPpkrYTGQhsy9pYP6M3yPGa6nm97AagqCmpfSN9L3y8APgL84wgx5N43gmkruYbWuTn486n9dM8AyzeZmxg69e",
  "key39": "5G1qw5Hm6TFv2wqWGsJHVbLyVmziUjZ2D29M7yJ2WUngYFtRwgyq7puUqz5m2vaCeGxJBDJyC6EvLXqA2rzfFuVB",
  "key40": "4pqcegjoddaLTY4TgXKZWFR72MoVbkojoZ6HcHMBcXiDb683C4kNYW2jKsV8WRJbzrzPc3PmRKdNCC2x98Sd3Bm9",
  "key41": "2oT8RtkWKuy381PNkYTL4tyQ36tVDQinJQHJBHBPe7xaRAZtK6WSJeb1SAdu6YUjntT9Dv7YYm22zcZwcQ3hjeJt",
  "key42": "37mpHRzrezCKQbYTzrepv1p5jFdcBifUNPCeQWbsYTSSs89neYhKyCi8UECMU83MESGrRWMRRY5ZJQDRV4YmQSiB",
  "key43": "7aUUw7RPEbaQedcK3C5HvJZ96Gnree3XEfWnkFw4JMZnXJEDNNfTKTPTTmBqrCG9FgGoWSPq81XWKTeWpw9F4wA",
  "key44": "2nwkZPtK8yYB1jhTeXnPQqFKyg4L9ynT6XDEA7NKvfT4X1kHChCLurJNpe6bqFsVWKUEH9XzoZ6s4E7C3ckVoq5v",
  "key45": "47DTrtduDf92VzFBJyhgesd2gYgSm17mBog56WktJhSDXQaAkPGs6wtE7L7J5nYwtv8vgnAXpQrygHNQjttrHg1V"
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

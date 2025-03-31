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
    "4tpGZVKBmRUx3HbFJs4i2SxhzqUBEpSA658EwxDSmSuDv6XTsnKYj5uwLjKFaqvcZ4AK1f2Jg1RuPrUxsy8WyhHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GW1tNhSfecVWh6eonSdP2KScfys3Q666mkF7Kw6shteTfMC6XPCtGK1YY4V9bAGgcjmo1hVvoYKhk5t4CbD6FN8",
  "key1": "3xdoUreudefjZCjVnMnMQRWMqcPdkZPhy3hpmYAXUazuFf17XGqRaZjUnogbeiMDX7fYXCf7cWanmYKft74hjG2j",
  "key2": "5Z7VcWYTavXC6xJ1d5qvBYDHLvNDjqAxHHeDNkxR7XR7wvGRGagYF8YEq6TvZsWbwdm2kSoqH25rrSTNxa2pHT3d",
  "key3": "5BGzftoog6xNHuYTrLyQawmnrmefZMkJcMPEQCQ8tqDA35qXoHP1k3viw8y3kjrnBvkQPdEL1HihkS1WJtfSg9je",
  "key4": "5ZpBRPZnA9Rsav2FBtDaiL9q5KrQ5MEjQ19CzVuhygir9eTC9psGUcuV19vGwhz9xC3VZqkV4RYTp71m9NgFFefs",
  "key5": "2r5v3gQ9UKDLme8s4YvumAq3P8MSvxeA1nsAeWNgyWdMWUQvWzjZm7upE9ueqdkbKNjQL2ck4mVXJ8GGi4Y4HmWd",
  "key6": "3764bsg88B1yMyDuN6RMVYYoSz6wk9KiVNzaizhL5pEmjQysuvQELfbpKWAZxGi3UCibuf4WE1fsBUX8SdGA18t4",
  "key7": "3BqG5PBZYsynLRpqjtUgojq6Cv8iuBVroj9Xk2E3Q8cQ3HeucFtkkTsMQZSurQqTayhjFR2BeMxZGSZhB9iBJ7NP",
  "key8": "v77LvEh57eJnKSUnaNvdDLyMfPRH4dvqpXHwh7YLxQ6iNT1k8GCjvAzArEnh55T3xjTxqsf2qLmDxwoZZAFxsrD",
  "key9": "5k9cSXYsz7d26tZEABwb6NMLFTGqwK7wJnH8htZi5NC7a9CRVH2R2s9t2MtuVsXmTZK6syAHXsgwajEUh4rdiTdY",
  "key10": "V7aFiYeDN1hUC7wMYyazCTdmbd7xiN17uo2gWiqrhJhbRPQmzKQSBvUqb1wD43yNfEzRGoh8wLhUNPBrFcVBMhd",
  "key11": "2iG3VPmBSA79Vm4HaPd5nVRBjyCfSrVcacCY5bxXRvP4B7ZkcxHxcUtWdnWhZ22KdZ9sPi5vt1KdBvXoHiQumu2j",
  "key12": "3JaHFLVTr4pnmSGgx6JPVw3DFGS9QPHc2vSPXXbeDq1V8zrovRB3YnoxCzTtpoUuAVCYv7jC7fr3JTunz9FToaip",
  "key13": "NRqTGsZLC3VSZuXEUeGtDu4RperdciB9aD6AmmCuewhMdWp4sHnJHLUoePMJ5GCrSkJY1TztRBY6xs1RosBVFNz",
  "key14": "5GdcDhAEH8yKiJaH5qcpbo7KiqmDSp9ZycmzuxW7PCgCDQevP2HbkKCYZXkBKNq8i4Z8vDWaT9hvhtyYFJ7HDt4X",
  "key15": "4gL75cwaeaXYGSxKZUsh77BK6uMdoXh1DDvESToqQawHe9vMZ5YFDCjBjQbEq9cBXcyekEdRuJ6oB4tE1VbjcBVJ",
  "key16": "4XtkhmsfMJySLBsbP5dprf55UybXSSXiUnEQCkh5mZKrc6zKEMFJYLreP5KwBoUxUGFuzYFcWLD2J1KxoJAQA2iH",
  "key17": "5yyNGpwKESuBFTnshkC6ZTrou3r9mLgTrnG3kh6Dy82XZ2ZmCpVNgg5MU1E5ADmKv2cHDxdYFNBoRef5AapafTfX",
  "key18": "31CJ57YXrEm8dxZPG1YKmA7W5qUCv8TWTC29ZEs9UTK47b1caM984s8cvMfCbBNyHEu23MLuYih1zoLK11faTJYf",
  "key19": "3XKCFZVhgyMbCovgn3byZrh7d8yehrKzA5Uf6GvBQCz53Luis2meeorDVVQfbsJPjqUTNtNR6J7SoXEQMPxqKWda",
  "key20": "5kmiMMavNLyieFiZKFBnbGRCP4MiwojhLNZq7fUDK9SQJFijrEvYnBNZxRkx24pk3Ns3V5qTbpLQczNiRVqoFass",
  "key21": "4KPnsWVwSLPv9nisHqfSEgJnnLq2567ULJcVaVHuZrKKwUUmRhsaGd5pPircJCSGbn1aNXztdeqNmuZEsbvv7dxc",
  "key22": "4h12XUw4Yin8whidjtdF87DfSgAdmNe43RA4UHUVjm5QPPfpqFSoJeJq11MC3epuNYbXQpNPgY23sks3LWcSQqe9",
  "key23": "rvMw5DVaoX663tWwtAGGu4xbzR9BHnceJiisZDiNTHMzisjMXCKHXvHWPWg9Gpk6acRTAmvbpBvsQSvRGPDJRdb",
  "key24": "5WYHo3PetPg2kfEq95fX4JZ3RbdPXenAYra5p4fpPJPnLr2Fp3m5dvXHiQ6xJq9Mwr2ATVrXdwxJbFFKZoadfy5U",
  "key25": "3eceKmE7dX5TFgFL5ZycP4mzt24MT1SQBkdSN1RRV9PejFDYmJqTUzhUS4mduEUiVHgtuPt71uyrvqY6XdakuPUi",
  "key26": "5qoQkF7UCePAdjJVAz3RPpzYx4wQSZvx76LvVjdr41iHpZv57vgJCWEpUMEivGvmJqyknVtgaiJoAsbfioQupivq",
  "key27": "55rqKvm4TbsYkeNCnuujYqzcjnHp45hx47jKYdsbJmzHstdgf5e6tfydPAh5gaR5GyFfzVq4VikTjj3bysRmZZcA",
  "key28": "eP4dxK6jcJZ1EPjxLpyYuLoVKh5vqAnVh2e941qgi5TLu6peApmgrENUjyELqKAko3yWB2CB5xYUJfqkVgfcwUa",
  "key29": "57X7Ff93gMqLNtiJJUN5ZezG9v4MkpnjPTwUYobTqYVxjkWy6biAQ6Rhd28CHVyyzwB6nrjVuQehjYYuKGV8jTai",
  "key30": "5bTbUAXeuzHpxgfhUWkFPgHARG9vRn5uJBiRxXpyqXwjX3oMkPsrgSQrJaHrDQLs5aWEHaUgq9EnATBPoEymkHR",
  "key31": "5pdWNEV4YxmZbndEtbu6FimSYYVsQ7vAov3agwhnThbQY8EhKW3nqCNVHbrqfBnrr3enXvahympZn6R5cpNGPn7g",
  "key32": "3HA8SNmXRoaGZcyRmuNVcjfrfHJ3AdexVxzxdAMUasDqAMKfQocUi7KticKNgcGAv77SUDTgw2GfH9nvCXuQuUqK"
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

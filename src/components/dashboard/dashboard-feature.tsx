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
    "3DEsze8HJgp8wRR5WHGbfqyCixeXDVMqzv5b1Z23Wc1CJjGHicYU8mY4sYzZ11jyDznDqKqGb9XRCBByK696CiB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCk5wjcmyp6uMhM4yvxu3J1x7kxKo9GT6ir4Y1ZsSescYw8Ye8sQbPV47q1eR1jsiUr6c9uX43Qn8CwsoLucVFL",
  "key1": "41WGor39CeaZi1CBCZu43uWCuiJA71Ynccr45CHQCK5bZknuebs65MAoEXRS3SM4aK5RnJTiSMH9dkPkPXnuS8vC",
  "key2": "34BNnqQTZjAn86fNeGRMSB5pSLST2si1jkxMDXx3PSic1ftsLCemqUypfBpzo2VNpW3rTEaZdA7TJNYU9Nn7nNxi",
  "key3": "3pnxLCDYQK5JRyrmG7hEDZMNdtUGKaEJP3fN42c1RXVypktHyXXebMHnyeSidEUHwiMYGUcGby5gAUvegMkZonws",
  "key4": "2GDkoaMcCE1y64wq4zbKMT8CDdAickLbXNf2ryyd9NKRf1CA1qLbZmVmEY7zzVuJar9YnZy3TgWVbRAwj8rjWchH",
  "key5": "4am46FUtG2J5ctEsaA6mrz7n7XWNLEaRtF6GMSFaLbEq1WdGJFBXMVB4kcmnbUnQA79UaaS5obV6VwwpGtsQt8Yu",
  "key6": "gxh2SLAj4WaChmjJmtPSEaaKz8RHa4PB35MysKiErjyC1Wa6xVCGJt4ZFLsUXe18GeAN9DM7HuVHB7f9SkQPXqM",
  "key7": "4MLFXUnDVuErPui6RpHh2oGQsrb1njdrjwHmv3YcqLsqg7pSFQ7wErBFwVGxYXVjJhjJDieyR25925MTVAAUSG5j",
  "key8": "53kUeT91rS9hrNN3e4VZzJDuNt6yW4KXTtrnUJMeEpmGZMDvzV9W9FpG2daEQraw9KkAqa2iLRqPro2bvdEgrTt7",
  "key9": "291ubopzGVqvPUznPaaprwFtsEbgZEnE5NgFy5qFDBtVh7EexPBZuCNuRTkyv1jQhFn7AjEdY3QvxLxmxAh2vvua",
  "key10": "3k1DzSUKs5por1LES5dP2pYRAMLiw6kHPrnjKfMikSpm4kr8BRzkv1HzKhrHRZ6AcCiN926xwSYLW4rETFVHBb3G",
  "key11": "4ZRdJwBp7qTmL7iL3Prqn8C3R3g9UTeEfetAM6cgaWyctb7ZD11Zms83gtoBvPC8ZN46opZ7yKEVkL3mkKZzKuYy",
  "key12": "2RaBf6kYf2RxgnpozaNhe5VknnoNWNTXA1Ab7xyTfNcq5L2i2GscHhgDK1iW91CBUSErE6aJehqaP3ymbngQD3qK",
  "key13": "2ndgYGg2DmNqMgzum2fH6D9MFU4sKJjYtewVxnRVPwBR2e86fpnFVwp8jyUpwJgWqUPQfMoVhQAmKptQpxmnp7Zx",
  "key14": "dNzWPGWwERo9xpQ8rudkvZ3JAT5YZZRdaZPUhK5d7ZnY6kbnkNEqk7MYwc35BswoQX1pUQGJD1ZJapfeqgs8gqJ",
  "key15": "p394QNef1wqYFGgAtCdBZqP8VAMZaS5TsSg3Y7PZ87qfpaQrT4odPJkJrGoCC9mL8u8ecBYmLrstnAMiRcpntzm",
  "key16": "2L8rN36FonAEw4fm9a9S2Ecqwd2TUqZuriggRowf8ucDgTwRbLFphxKs5wNpB46jVizezqmHvu4Viaho3fYsFC82",
  "key17": "3xXtnwSuELVg2GCguXYaNQZNmWAxkRRVd5j7gZf2tEapj4WuzEpSyXFrvhbnwMdvmTAUBNXFsrixjedM9ECHb3nK",
  "key18": "3ASmjg74muphyStjp7xDvDaLLkTzrkjsX7bDuZg2fc3oVw6szNztVCNK5kaH5QtndiuqcSc8miWPvtPBEeX4Y7gh",
  "key19": "5AJAfZrRX961mvV6bYACH4QVkvKHbHtd2Yc1QmvQCqFQH1voVJyTWGqPAYmk83LqRYmj8iV8fvLnzJL2gNbf1Dfe",
  "key20": "u4UHSWuCAdHWSYyuSbZ3cxBXRazQnAhD3cdcET6n8u2y2q89bmjEvHMCuMCWFj58kpQi9GtCAk61LLucVbsPvhr",
  "key21": "EYaGThoXn84bV69ZBAThbVsSki3FhVkccBSXjHMf4zU5XbL72vR66az5YnomBTXQjnPxrbYFVHuzFF3MFBqjYqV",
  "key22": "5s9BLXeS8qxFjJ79q6gAr8d4u5qpHvTyc5m1QvUbGeGj2mUHQJ59MFbCtGRPRCuhG8XwtZZpDdxeWRdmfrdhcnKH",
  "key23": "3ErEBFJjYSQHEd42Fi7ZmxGLmBViNRyMTFNbUbcUqocDipdmuRmmF5PhYHqCemzG4MgtMfzscwYSdxANWMyHLEo",
  "key24": "4wsKosKnFjfiHkbetMcLRTmWux9FckjCr1Vumndvs4DeFKFgx8LVvfGhXVkEo1GxGne1dTWP2YLv23C63VwjtsaM",
  "key25": "W926wghSSrqJ6ERyX7VCsPYToWeWUTV43tA48jkSyCmL3d6ng8pQ734PFqVYbqQdqqyBNYVodw4FYV6yBSMgB3f",
  "key26": "2sBuDoDSQsDojMZ39YexT3ayvyBDRPVg1UwpEwdtdKM1Ycv6ibJQSvCc4LhfpKZJEGKzbG6nSkhjehuUBCDUsnA4",
  "key27": "3Eah5HTdztiwUXKBTF7WAxkMQuVxQaMP1VS3ePmJWr1hU3DK7XCiyoqUuURarEtZjFkXTGM2U2DaHir9fMH4gQKJ",
  "key28": "4BPF2Z9JJJnA3j9iwDY92u63XPfLicD2njSR7grmuv1fM5AjKLafebxsjNTPDnDuYhya1cFZfX3ytyfgdLcJqxw7",
  "key29": "4az5sBssGyeNfsNt9eBnAg8ZVgjxKAkPbeLDfe5VnGb97xm84vWTJvBcQetz7aSChwwuSNTq4efcyakcTwvcKwqo",
  "key30": "3QzbMK12kto5TSAh11KnrWt1MRjPR8T4wtjjDnz5iCSRDSTHcmHFsqHYquoRU6V7QtYnMkSwYZVppQmqZ3WaANVG",
  "key31": "5sZmiNxdZ6dJ8TyMik7ynBPo37QUnDy4nfU6VUbWbaZg5e6ZJurEv4tmHQSCu9bDMEnNMgTPkoHPCeVDzWEtE8gn",
  "key32": "WJxpZpPUtW5XWFsYQJHFwaD4YbCDdHeb5dCT6k8Co5UosVq2Hc5NvvskCgwU1a27vc9mey2taH6pmwQVXhKPEra"
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

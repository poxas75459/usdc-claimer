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
    "2UfgvWPAnFBcFaKqcmohcM8fkoUKMCUDttsoFU651H4xX4GFeeV2ABDh3HTT7qsUrh1kkae5xp8XYmBcHv3n8Bm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oUAPyrkARBgRMidbnKEC59NrqphohSwuVnkYyKcdB8d5WiSzMEedZwTqSdajJY6zWgu3x5RUotSgnP4orZPzvoz",
  "key1": "KFR2P63RaiFU7FRLBN4FjnaKQwJe82oXEWZ4c8i4mbbYpqJuMrtcxibxyTuZDHpxCch1HEMUEMYQuCemGR8HbRz",
  "key2": "429xh4WUYdYBsAWFxSogaq1iZXvCg2xrcc2zaYnuekAjsH4PnKjnqLNqKHHVuevRcrUtv5HN4xFhwuZDKvtwqhkb",
  "key3": "4D9GLF87jT9sG8dqBGBghozX13axNp8mHUXBHKdQycHtCSmQEkyFdeKQQ4g3KjKJdXV6SvjPWHe9HcdoSfCub1Ec",
  "key4": "djgfgLVvBZPaoBdKMmksqB5zWZNzuepNoiCK5Ve8Peog7YNvh6m81CfSmWmitSeCAyzF6Cb6XVrESu7J3a2fqKJ",
  "key5": "3ArzskL52pMwZwYpSYttNEZMCr3tpitF82pW8UE2DZdqfFq6iFDhNjBduo3aQa7MALWD1JhEPQeVqVrA5yUorKba",
  "key6": "4EpDL6r4wCXvA4t7GBv94fdvR9VeEjTd8Kmd6VcVea9tLbTZEzwDtMBnwZwKrwV9W1bfngDUgiuhnSKsuxfKgbXv",
  "key7": "5tojFTN2cwyjdUuhutrzcPmTj5KbtvuECjYpd7wrtet33Rne5P7qDcsR659B5Z17GxahjTLWnm29Vr8BExH9VK4M",
  "key8": "4nLr7CcoerN3Nz4MksSHxu9UCJEgxQy4LPT7CGKdMkg1oKTAwqwhhiDnErdnUFRygDNYfgsgpfCvCVyodYFyi15r",
  "key9": "58cujmKGZRNp1HcVBMXqmJmtvJC1GrTnRzcG4pQVBkLJQmNH9D2kSupyD9RvX3GtC3h6LqcsVjeFovWG8NtActas",
  "key10": "5DCYrSYWuraAXPedDKUAwTSMQ4ZxQNVovzmxSsKt8tURVU64yfRRC5nRS6pRA4kNF4YNWug3supCNH4xXe9fmLQi",
  "key11": "3KsyNhok4LKQMrzgWEL6FkQJ32WM8SnMzt53N595mCT5SRNWBQ1P4KBXSqjmjs2prBskvvsPCQ1koCLxotchETcu",
  "key12": "f1oA6TCym7WrmRNfJvBokfSz5hbUGkBStxRmp1WyjgSMdgJY8QVY947wAnV7G4EgcJsfy5fp7T6zpo9hDt222UE",
  "key13": "KUSiGKbyhwUTo1Fb4WJVPcAPL9T2toJJerBKpSsU6xHUvXntvZVLL9ipN8BTvwpDfyMqCZDPaiSY3iywAps1sFs",
  "key14": "4aikYyEQuL9ThEMmSmuqxKdrC4D41qkYvY4fHsBrtffvfLsZDWQiSJfbiHwbwzSFvuH8a2GFv2s2rkUhHj6rid47",
  "key15": "4tEzvB733b7s7NHDV7oovLsxTeSUjdiKTSDkSHPCzPtpHGcUWHuKUPj8H9DT65DTiSijhTG6U2rfjBK3dKW5Mwqe",
  "key16": "5sog2mcANCkY1ojE8A3QYQ8yPY35iTLGKtU8xKJtcTJv3Dk7pBUkLjg92w7qzgaB1H8EDVfMUsuaLHzynHbFXHfS",
  "key17": "32tREKHFVfvuFk5YVoKSrTmYF1qdcEaz4Et6E6CGaaK2sNmhVYCpMkPzaHSPAf4zNgpc87uCWjNAEPm4GWis82D8",
  "key18": "AKwpsBndY1rZCizvMfbpjXQ1z6Cj32EcJJNog7q29QaH156DTN9f4Xc2HmKpKRHQuTndUNJzzxCQNg2evkV7PFN",
  "key19": "9uQ3zPPHpSb2t37A8C85AHTnHjbENyMJSWVVcDiNtuxFjPn6qr9afvCGotko26DdPKLEgFoeBguvtE6G4wJJxzh",
  "key20": "4dAzSMucb1qNzDFYgZabXomMUFXeDT1nsByhaDUHCnFbvTwuTZpQqW8UyXG8vfgWJbroWKV9hwiegj3M5n8GYGP3",
  "key21": "44RMHRhYvZvogcjJAyvXziByCpuae5VAPd7jDYA1sYxyPpmMwXRDrhqBymaR5DDMHz3GPDS6h2d6R8tcyv7tUDra",
  "key22": "2wuCKHWHae3h9iXgK41FSc1wR7JNfWi9FTdppscrDS9BRHdXjMx1w8FNg9YgibpHFmzmhFn9b4K3ibwcXmJpQEpF",
  "key23": "2n4RprEfWcYpMBpPgKpgrtErAKyeDZ8Hvumhu2MUP1FmZFwce33wbyJoto4dS4MdtcgkCYbkxL4RSBoB9YWqtQD7",
  "key24": "43qmMwYbA5U9Uc2cPD4iYBk5vpB1pqAfqzGLfupQcyL4jNgTaKEsy1Ep5RmtpDM7cFy51HzMDQZ76tvFSrwMHVEC",
  "key25": "34vTKjVzHc3NskGLivGrGqeRJfvv7nvoLjEgkHVCfy77K4iPvpK23sq5fJW131z9aYRdMhfCkYRfjvFAbPqHosm8",
  "key26": "2S4MkHwydoACUmaMqCcUMdXcLiuY1KupuV7CtcuRqpGGMUWRWc4r5m6TF3RMVr4Jj4V9dFBhoqRTFVw8SzBj27TV",
  "key27": "4suDozx7WUoxAcai1SWsjoqDRqyYxapMPaoa7vQPMGGhioT3GTvwygTF6GXVAGcLnhtFQ2rrHJazcebkQxM9xsmA",
  "key28": "5GKURj2BeLMSKwizZPJ3RfruKt4eHBAwCe3F1DeYaGorcqvx3u5fzWk77rTu4iCrrKNg99sh6aRH1RRDovq8PrMJ",
  "key29": "4RKXq3w2C6yqfp1zZucgV4tRsmaLyA9ZB8J6wZNYtnAYwuvFoRJoBeBM3h6vBorCDoBabtPb945DNirWXP77KRQC",
  "key30": "4Kp3V6RmgRTvw2HumNhoS6LwPFECNpyn38vm2bNU55569wgchfH2L2Gp3CLGe714zNWh86Vi5vB4zRWCEvcqtZN7",
  "key31": "ophNZ1kgjdhSrpZvkM12WF4jvkcLYEU6jJ99i87LXaSyMvU5tV3dfhyCSaD7Gx76W53AKzV1JsZwy8gLUNR2P9U",
  "key32": "377QQ7CtHcnr3pkGmGcwBydprWEzhfRa6PwFQKn1j9ZBK527Cg86j5U4izvLYNS18ZZxZ4cgGBsEZiDJHgw8WZSP",
  "key33": "MyMeUqgFjPB8PQzppre4rh43j9hmc7fRkMCZHTuNEqrugMstDWgNp2PyHhE3ToLqCHrKxSqT6trjb7XpXNd1wqt",
  "key34": "3P2xqh8fX3MFeapvrHtnWBfhBrcMzBVbtGewSTvtjJHkjwniBbzbXbEST4SyaUi4VsrVseXhMAvX9Wo4ycR84LEY"
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

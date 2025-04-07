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
    "hD63J9VYKfvLuZEtBis8p7GZj2DVHbLa6NGBMQYzSuRecm3Lzo64UAGyJSYxeDub9C7ERHtTHwTYtDfKy6iL7oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TB9GmRBRpdfLfD4LkaGZJhkx7QasdEdyeEEWknUEM9vdEgPsSDVdsvXdazZhMDSQUFbPSsCnLhiwdw61eqEUKeE",
  "key1": "5ErNapE7vD8bSzHkcF4wp81m42ibEa7sdcaDghi1MNwNv8iJnsZCYJ6ChrNTojy3zi6EPvBzYk5TBnM4wrvKpodW",
  "key2": "5od5mnW4fzG8T72hARTHb6WNeCQnXcC8EFAP2HMMqXfbB3wnvAu583KEAeiVpDVxNjs14WbTxeY2gHAEp2wJUQeV",
  "key3": "zYqvqDfcWHXV3hqjqkYbwekGCbnDha7hCZAHBXASJ8pezeLYHnZmX2x43grxNMYqJkSnTGHq7FsZ3UMUurwLZyo",
  "key4": "2vemYqmAtZaH6mMr3yrWG7PQjapxmjDFsq1tKt5m92777r39VXARwTLNmtC24EcRg8v5vRKCLEyJiVUiCEeG7rMs",
  "key5": "36RjTGuw6bq9tbePnD4mpPmaE3GHcMfov6Cj6dr87zctQX464ktSD8ckdcajTmomfG4DTS68QWcXX4FWGQksoLxu",
  "key6": "4Kgbyicaovc7124DWmcneUiqX24VbcUwbyi5xXaNqsxT714gqneraMLK6kY6i6bbsohmDvojiZePew2bzxtgnHfr",
  "key7": "4HszSJmdT2SmquF3LB1852s2PVCVqfBqgTLYimseuPUUSHw1Hp16373GsHR1JUKhDBrwbesicQDokrxiaj3ZornM",
  "key8": "9CbiTHNFyQWTZVqkvx4eSBrMZ6yRZGmBSF7budLdGeaMGmNxpjWCVgghHkFgqLYmmnHFKTKyhtL9PTy7Sci6pEF",
  "key9": "czfhWZ67KhQUprH7HABG5j2r3qYmXXrECwvdy6GrjhFXG1nsZD9pNfd9LoWSvonKBLu3aqNpVxuKwWWwYZQvbER",
  "key10": "45Bm595p4JFyPyD6MCMzzz5GUNTNym76sMAwn29Av997qX2qhDWP3PS67pgtEBJpSPb6bhpjvk1Qcx8w8bZgXHk7",
  "key11": "vcvhE1bq7yWrJXcQKiXMBxdCvfQnrxKsuHDwrrzp1s2soyjmsVvtozyVVkAqcmrcLhS5FqGZsqK1bSfH86HkRFP",
  "key12": "5RMKK4k2N8UBNg8EYZvgqckYvX78F7ATkxNTPVy5XL5hp4duQrXfWUfxppoGGSifVinSZwRkyQteG3Tm9QfvfeLv",
  "key13": "61nkdisNatKEstZT2dtmgL8kC2piy6wrtezN1SfYwb8E33Cy3MEkjrp8wN8pKxzxmAER1RBxbiMq2dGC9fnhJj5t",
  "key14": "326E1f7e6FwdbAQNTx8haoHJpDLJr2seFmYcsYhZGVuMfz3f8tee5QYUQdxHggVC4vaJjq4JMKBNvHRWiS38XzuZ",
  "key15": "LYtyvybEF3ywYomiYLSV94Gacx4muxVQrsprfWNYusV8S2Uz5NPjiAUuyAPXPeXrJAif5xAFm3iuQSxRoQxN2nX",
  "key16": "2RP2AFMBPt5q6rb6MRqugzdaDxNy49WaSzEkmubMzvbMkr5deTcDFGKDpYfVpqqZ63npaC6LJLQdYtfuuP85Bsht",
  "key17": "Sh5UBNULWj5Mf7ZSXp7837K3k1Pfotbs7s9hM6wH5b1R5sV9md2w1Q5FGnNm59Moh56MNrLTsf1RoCzrMxTVbLJ",
  "key18": "2QnidJuzmLVV786UYxA42doUpu6Ccmrf4Jwxvugm5ofAd1MHiDkPVepSs4XoE3FD9KqNa43CXXasLNPZY3R5zvA2",
  "key19": "4T7MmCnRAY4Dm9qRxsnjcN4dyy2ZuDJvzSoXEWQGhQRt7mnCz3GuMruM4LFvwZBhKESbTG1EHZ816QcbxVLMHpxM",
  "key20": "5vCi5D9zSPyDLV4jMkwJa7LSZRDxiLmGKmmYU1xz1X2AeFPGUJrohCBs5trnz7Qt5yr3uxpBgdro4tnuwUZbqYyc",
  "key21": "5HSAv3AF9txNoQqcYXmtVA4VMNmfWzLxUe1MMfbX4CZt8czTFGp4U2XChF7tMwzWSLYMhxHjxbRvT4pFEExhmuX",
  "key22": "4GGAJmECRT2jSacbeCyMuWUUra8rnVP7BwgSvzQTkb9SEt8BHaEevoDvQNBv4HvvmGC4tfWMhtEtTayipu5NE1X4",
  "key23": "4auEYNeK14P9XnmTedPkbgRxDcM3UYqU4LmVy34Zp7xKhZ3PzdhXs1ePKgR5K3tV43wiPEjJNWmBECyPdMxj3TjS",
  "key24": "5VqoUGV4EdeuJchzzxfqFGT1shrjPm6hRbp3sK9HGTnQhUSVpsZzsq1VzpHnzqntLrmbryGURx11jdFhRox8KrkS",
  "key25": "22Nc5zRqQGypvGpdhA26biTKfGBawyAj9vcPEva71u2sC8ZhUAQhdQhtNvueJL8MSzDMg8NP9hdqyssZdYbMyt8c",
  "key26": "33wgPzoMLFHxyfRgt9AN8entp3E7qunDKaUKuuiWscQHPiCtudLtSC87hW8dddp2XAGGznqVWnfgkNYdHusGTdm4",
  "key27": "aoKq8XhsWDGkQgBJ8pgXiKHJAzCuEDWwqA9CCaNJ5NVMntvXwrJS2LpysetDYpkqRz7nBc5vvhqP5v5849XSCDP",
  "key28": "5N6MMzJ13DzfMpfoWGCb6Evy7T15FdyG73YwdovhpwBtTT7JFPjMfjpG6pM31HioBmLeWSECEAYkneoghQAJQrH4",
  "key29": "44QRqQY7zNh6jHafh2RMZGo5R8gnsRrWjgwhTWXKpWMBNM29szPL34kZdzp9syuH6BHv5U7dzH3tC8XhW12z6Bcq",
  "key30": "5qREbk12on6ay5WuPb7fRSLb2TqfMSiFNMKtg4pddfUyY5kmqTEuVDyod1q1pgubtceEuZRDDShw3bu5Z7DT4n62",
  "key31": "4gHSk79PkmBRQrdEHuckixku25T4rdRvwJsz2i44cVa6okVMUV2esAsK3pc48VrnZtf4K128kefZzVQmwrS235EV",
  "key32": "uxQexuEGmFoxgmALNhdsBTAUrVri1JmDkYUpZckKQ9W4LjQrtFe3JqqMACvMq3GwQ1w4ewbfLpA7SiBa3p32Fts",
  "key33": "5waRCZx3wWfe55NknSBM1RZQqAfGafriH4bV5VLrqCLkPDBdmFGV9LUXM9gzRJvmdLU5iUJDN96hUu8vgfmBVAiP",
  "key34": "49JzuBhhKR3gztqUq71uG65NRuQTgU7PQv2vVN8TUDW9JQfpDfQmD6vxV41iRUj6zwQBkMN4yaQQEhgnD6yWabRm",
  "key35": "26ctSxuGowdKpnpi6cMpC8yi1bXqUK47MCZ6r6R84wNkpY2HBcv1bmnYSATssyJfMxp3YBD9vayiTCXtT4A8RptL",
  "key36": "8VikdhSVBgzuCPu9nJAp936SWJqq4DH835DJ5wvgbKRuS79hpcTMo7JXEekmfu9FYf8y787KN796248Lvubo5u7",
  "key37": "5vGhgcmWbzn9QGUuCsM5F84KijVabrv7WhEGGAp9Hn5p7uwKPb1SA8LuEbrhC74Mdy66hDzTC11o49XLt6K6Ng1v",
  "key38": "2PXD1N5VqgscEqVDs4sGQ3BDn2s66nTwAh5gUr37yuzco3d6GV59ArwSSn9RZTKtZjLXCKjsZwnk5BukBqV2xHBe",
  "key39": "iCGs8b4hQ7YmAwiYAiGmCrQReYKuhbseZgLPHLkCdPnuajPmhkDhFpm1aBmJtotUd7tCBJnvRpLsvf7DH5Jo5HY"
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

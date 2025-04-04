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
    "3Mx5yGHSKqo9SdsxNMEQaZ52cCT9QWT3afCMa7n6A98ofzfBVz63SP17ms6N5YyFKpGjuqvwrutzmi7WaHpp49Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nvAHTExuCt4nCSGGitLkw6aEDe9GUYzUreEHSVKT29s6foojmCPkXjxkxdLbrHL5Ebda97Hk8o9CsiG9b3RNuSi",
  "key1": "5CgY1bvMDDq8RSNnvkYvSShvUWQnNPbkAyt1YhHv8ifrsJ8sVXDr7fshGH4EK1VwfRYxim7Gu86ZnYfwmUXkgL8S",
  "key2": "2CrvPmK7zjSTkqVwvSC2CvYKxo6XHV7MMfxmbnJx7XdABabWJGfscDJYbqfgnJE3qkze7qdMiFX8sBDRgWrSZvJZ",
  "key3": "5TbEt2ttr5g2f5v4xQG1jJzi4FSkgn9ia6XSJUFmbZYNKuBWVGZ7mtUhrgTbW9MUS27TzmnxSEKDRbx7MHxWtU9S",
  "key4": "4MEsf3P4LFKDgn6tVDdwX3XF7LSwg4KY3rjU5sZD3y11LZUnemCnGLcRWwpBAvhCgHiw3gCJmuhVfAWKLH9Emooj",
  "key5": "UUBLCekWQKJmooKSjxzNX8TQUEbKVGXAezk19w3tyFyT4Wg6kHtK9ZfK8VbRpDQ8bK8TDx7CtQThtFFtMu219eo",
  "key6": "4bE3hQWPX8MZbDY2ZGTrhm3p2ay5vja9vAdA15sfv2DbZJsh53Egkq9QfHHc1D9tiykbn2XaeWrmoH4Z2KDpHkiV",
  "key7": "UqyZiZseVtihQjA3zoPdeox63P8Vt9jeGcjby5ynkYGzrmTosTpLWp8buzy8dmyUXQnz3MPaYniU4z2NnxHutdQ",
  "key8": "3kp39w3A4g8kxW413KVuUSxor41h5RgtmkasSrULfxidVWX6haoZKTJA5eYnVo8vofQDfSXMCXtusUBWd14VccjD",
  "key9": "2BfBitMmw3cnMgbBtgUMoPv41NwHc1d3yLjTAQC3LcWpzGKZVGxmDnJsg1ddEMYnpF884GbXbZptKM1whUw43TVp",
  "key10": "FpnHAwiWjiRmHQrrT92QpUQqfFdiE6VxBp1dAyBGTFANvzeLQ7LoR38MMERAF379Ccyv3Zn4iww1w5BDPpxpb8d",
  "key11": "2TM7E6YaGrD6bdCwbMRgQHTFY69uSf2f9r2gtCunssENmuyjxi7tL2DkupSNmdJi5HYge97Cp92rexYGEKp9UJXS",
  "key12": "5ZxbygqaDs1sSxW5wxrMoLdeskqtQx7js8G6o7UA5HQgVCEusYXzybs1TTyXfJNpdLdhMRM15iysrTy2HVFHueF9",
  "key13": "3HTKVtErykaFsTka6hnNXLQCfAVt5bvgW8t6BphcYNHL3B6yzJBfxHhSAFKLKnbNzqTo3ytxrq8U4J5WcPWhYfcE",
  "key14": "zSFBYWeCHn6jXrKkzGM1Bfh9uSu9dgtL8bYUCHrndYJvw4xBLr1Nj1LD2AzdZ3Xv1NC5cMsi39CFBPbDmArRT1W",
  "key15": "q3UAjjH1xSNebJwKFEaYRLHdbURk1QY5Fn2yA5qVMsmeWT5RmYsi3p5WSDTyTmoBGa9pesnRfJBEZ4UGQ4WA55H",
  "key16": "3tDECcxAXFrMH1WMw7qfyv85TPgY4iRoziPd6hjebFxqWYoi48tckcfFJ9pxfvxFnxjq5DoWcypcEUJMyKTK2F3z",
  "key17": "4oinMb78WzpN4PQUz4U7tiTzLhg5AkjAYXRE5Ja1FCa8yLiuVZZvxzeZyCC5JBpqbUSkigeGxskhxdGTNCCmtRxm",
  "key18": "3k8LwnctZJqM5i8KPfk2hBwKrnFDWkkT2RTBoF77iubYnaZMdUFQPYZdgAQjWwY2bsyTNWUHh6N8k94Pwa8hbGxk",
  "key19": "5UM6ggSm6gpQUxrsyjuqT1pK7gH3oJM7N7FdPkosCdEMeYB2PZu2jseBYDSfsHtNtZysJx8EEnN73UHRfE2TYyFh",
  "key20": "46PxSRUXK2tmq4MmadthL7WS8htx9gnQnyJoXWWshdchnLqX5B3T8mb9yTBp85vCQmTXYoPpsweN273CDXcjc1qi",
  "key21": "3XxmBu8MikzYMSn2DG3S2getGRCotRMB3xaieXoT67oxr6P8SFJwina1TuayXBegiu1BDPFpSUtUymJ5ecoBUvzC",
  "key22": "5jB47advXM2c7HoFZZyiL18irFQYyuSZr1fsEuZSg8CgM6U6kLZ3GmnAsXKzyP3hsUXz2WRjXTWy3EefJYzA9exi",
  "key23": "4fUrUNSakhkaxs2GBt5rPmRE57EhrMfVXPD1ud46iebRLwwvNakDyyYrgiUEgfTrSCAeNZteg5GZiTJTHVu2w3vB",
  "key24": "4j72tZgcWn9NSeXy1fAzTQziDZGbd4uJMLx4Z9hc6o8ahMVirb5NG5mrCLDU3yPB7GVnmW73D3hU4KoJdX26krut",
  "key25": "4m1yCVUZb9LCXPPm5i3NWcWJkNnd3tGQYvc2nwpn5VAaybsxrKRmxmn1NJuKXHCA1FcNu8nYkC11VgvkuVBzvEsR",
  "key26": "37BYHgz31Rp7NJpmBdGioiFBchc3w9Y7PpH37Xwn9QET445kkT1mQtSAnaKFs2sbf2adJd9JR52ojvX39CbYYpsH",
  "key27": "4RPqvEh4BBsuPcd2TQuDkXCL741ioTKivFBKvv1Tc3BkGJpLrBTy5tXN2DveSu8facccT6dWfmKN2UEiyQhvciQ2",
  "key28": "657zA9v3LEETFygsv5tAgQgiojZDovEBvetkHb1Mu7K2SaDtLvQYraWRKdcCBTc2gyjMF6Kbq1az2bBmu5xd37M5",
  "key29": "3vtbyi3SSZkA5KmsMfTRgyJBDFYJV8rNa5ScqCKneUuPzVygUWbQfAfrrLJZkLGYs4Wp4sBBWK7X1uasWkKAzxj2",
  "key30": "5qXmLPi5gGntmiTErcDFWLMGvx6KVsqAub2Q3ytuAXoq3Mo51WJvcn1jttEXZ17Hb6BX1A8VMJqa4Raz682hHG51",
  "key31": "4WsVQxhXUkv7CXqAtbGNZrSfQD4CPNLiJ6r78ET5GwSvi6y429RuTL8nf1XAz5EQCcm4p4cqoft2Y1wgdKeUgLte",
  "key32": "EVPWifdf13W9QH1XjSe4EEY6e22cezihPuZfB7Ltb647FbTjJPVmsrD5kCCywNCLyVKByzzcvBye2DT2iN2HwZp",
  "key33": "4MXKE1AU3W9mrH6gDEVb3eAtedwuYixfDvaWNWjQpDRW2Ch6HFrgNbB3VZnecNksZTQ4vxcaU4Rh7MMy76fD4crJ",
  "key34": "3F2Vqh6qm9wPAbNfDg5wLwy1rzYAVqY5d2mG8wJiR1WGYpuch72Xs5gkFLRRUt6hKan8WC9e7sujR1MEmJGcxoGc",
  "key35": "4ThNCDq1KUKJGWEpVTKHxmcPWU8k8axUBe9vgQECHEHUPJejgqptV2FAzstvSsbAiaZ4kv7XGBYWv1oCTXNA694w"
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

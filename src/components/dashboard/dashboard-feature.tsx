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
    "3dVFVVDRdu41fBkGEjv6Q4YHkfKe6tJzSMhhdHqU1yksFWxBHKp2KAfphVbtM3mb1GVv1VE1xUnvCFDpBuywmvQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVEaHi2N4KT5FXLxVW1YCn9YgMpkQTArvLn8tqWjdUpP6mwcjkyap4KfhptgMVo4LD5eMyr38tbXVLzDU7Rf8hm",
  "key1": "4dXdh5eA95ic5GEt5yB5EDy2iutMDYsZC3MFfdASJ7zFBmwY1QfdqM8tdREQke9JBs82wXCvw1HeG8KwX187Ls7q",
  "key2": "4BtxZMKZPkeQam7Ud6KpTs2VhjhTraGcHvd7kzzHRCpmwzMekZjtTrBDDVXaWu96G8qBdjzBKd32yJ94Mhd9sMuj",
  "key3": "5AaL4vbwnVQEtMpZoKEjz9TCBmLsHpfFmMMiwTc3McbSs3vZ9L2BbDeRDHp9B71YVJQ6oabLbK4w4NDZZYzGqLpG",
  "key4": "5ZkT9tcmVDFVnPvi3mPqRPca4FH61fcYuJtzroPa5LopJtfrz7CRS9VV75dEE2ywJnm4ys9GC3faM1yCm2VPVpwa",
  "key5": "3w4hQVk5txURVGGDWcK3uYd9gPY6LBA6WSxdcr18V9gr42HscNqc4AUq9VRNy6idMVvhfAHYfKVUzwKdvH5AHMmz",
  "key6": "27RRhxJmeUhc1C19gjLtPEPFmRRoEUy3UASr79WzEsAie7FwLQuQaTAV6remeHuiDdrDcFGxwtRWVnT8V5Ljg1BC",
  "key7": "45AdU7trLFtPsiHPEURMYvdQjiiGgFaao9WEFjLkckYLoeTp8rHcUBwoHbQkyzQqyWthL8F1ktLvo7baCCTzQMsU",
  "key8": "vC7QV91uhu2JBpzcUK1tGDoXTGNK6g4u3zH5LoeU9nJxViEndTxyQeswL6S4XBdqFkm13s8BgwgFepL6P7hEZ6b",
  "key9": "4j2R8mKCRiyJymLpG6HdFDpZDqq8DmVDTDGLujv7PSF3jgU1XQRk2qV8nnmXz94Gf4u9bLA5zcYX4me6GzUrCJjY",
  "key10": "3VBK4hR4pxthVmCtmTbVGJd1XUbBbKmgGhPu18qqiiZojnSHmFfVVG1r1GuhKVTMsZ9Kf5tJW7WyZ5yr7apEDBXe",
  "key11": "5Th1M9FGAFMHoPG3XzmanHtbPgp8ExS6c2Z79BxK2fabA6tGisW2j7qqmd2MGrwCB7xaTFAAcfAjXkM3ihxXVJXn",
  "key12": "3eJaDEFcxNMLZ3NC2b3Er6829W9imogbZuxogjZvcTXrUdz2EP8ZWZTRCD7Vs8jms2pdiUwFF2w6E2H8zLDHnKP6",
  "key13": "coeWPVEVZXX8ifbw279RtSzAr8NzvuhUrw2GRkk7cSuRErAEL42G3R4N7JMS1jn4Q9WcNXeqE7fTVDXtR97utGW",
  "key14": "3xBZGSBo26VrdakLyPpTGEb3WQGs8PJz6oW3DxhaHHkaYywFCqVa5e5XQ1ry77JxBtjwcSkkuZ95MyUv4PnthYsr",
  "key15": "2sLNM92hLeDX8ovxAzsYXn93Qyyqrz3SdTgTygTCgE3FJ8byjtB8hbZgK5BQvLRo6ZAV7HR9JTnN1fLxkAD1fdCQ",
  "key16": "AzPVbzZeXtPiDgaDxyj55YUH2ECCe2yoYNgWywwz9sGhod6afFv76Djed1qPGNKaPers4Zb5asVDm9bLqUx3Pma",
  "key17": "2tKNVDLa68vbruDH26SmrZZW5dpa5n3jUj8J4AtKic4TQvD4vgG5qN1dLJTeuawanFUCRShq97Z7xofaDk9gnVED",
  "key18": "hsjTrQmyZRjEE52DZyFAuqASxDBtr2vmhhN89q1whJPShCp4mzgDQEssfwF9jhn7yVbtAMspJ3KQUSXWNzUE9wU",
  "key19": "4L3KzFW8LJNh3zHgcYTWpXJCWqS5yCrf8xDNr4L2zUqU2wR2vMs2RQLgEF7tbpMSAtAG3xZ2c99FKdbbvNaNuLWg",
  "key20": "5Nbv8Lo6HWg7Tha5UhR1K7DE8pgYM9U7gdFKHLbSUyGkuovqTBhoA183JDV28WNb2jUjvUBR1bgEqxjhuXwW49ws",
  "key21": "5hzziEhhaKRuXTDnSxHyaDCJudZKanYa6ScAw7k5LPcAho7KiG9g3WnA8q8297LXEn5poN9T9tbfHUTnsBnALRwf",
  "key22": "64DGgjpycPqBzrDGAVGBiJEQUCX7qtmm17HjDHjJd71QhzTQq4M4Zi1sbAguqhhBsGBg5n9ofbVr6oUSKdLHsC39",
  "key23": "5PEMzSSXpYqA2Qz9HW7iCRx8Nnum1vgq9xecZENFdz1s4WzjHea5yPWrf3KDJ6zionUoNPgDxBDMJn2RJAJd24sf",
  "key24": "3BDL5dT6ADtDEp8zzexWJyaWoXy1UgMa3ekBzzNtkKkgDX3cfZAapAecQa8Xc5U3m141oH2FQjVhgM1U4hrq5fz9",
  "key25": "d6hSoedWHrivinF8fWUX4Q7tFNwdmaDB6icicUtY2EbwGj2Eqg2fxVYhCLun995Di12U3Vemqbbuphjuo8Sstkj",
  "key26": "65xSz4DFnrgHERrgEAYwF2RAZswdtFbJHq5rk2VBQLNyGUecCVfz2bMWBSTyYHmqz5Yet9jtENP2NusTdQJRKU7g"
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

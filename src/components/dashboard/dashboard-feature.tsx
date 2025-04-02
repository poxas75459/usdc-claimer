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
    "5kQD6qGpqkVoCPkN36whGTKMngN1SAx7E93u2uaBMVSgJyxZDXtPi6rCiazoRYw7b7bUk5hyrpnN5daYhUbV79pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jw6PA6dUafqxa3Uk1agJXKd45UPusjNSSFzLiGSAmQEZWRUKyn3bHd55siw1D5jrzB4ha9yYdsHGxGJkgR3eGJt",
  "key1": "5ZFV45hJ1XhZWEmaupYMiuHG9Z1GFv3QN5rmCYu3NgziVLmUvMRfxLM6AqLqLAucyHkt9zcu564Y2AmsvCGM1Jad",
  "key2": "4k2n8nHDR3L7j341RM7DeYCfMus3WmAqF3F39haUynSqx9Frftb1NV5fDbmYPzbibxCeqeA5nFJt3cHZ6jcYqcLH",
  "key3": "2Y9igvFEezNPesUPZXV8uEffWV2VsVtb5VdhEsDhYfMVi3L8jEbeoySuMZooQCEVeSND5RzBEqUtaSwayysCRSXh",
  "key4": "9CcHiJ6wZBwg5TRBn9tCKEi7pJD6EgDNEKiaXAYm5DTBBzffDrag6ESBnFpisdW333CDhXsEuK3W5qrwqh9jeaq",
  "key5": "5vcDkkPGqKWBqf8mrHnpvZo3VA2shkyPdRoGkdknpVcB4vTPgZ1ocEvuZb75KNFrRdsctJaXVGsqeB3kzCe6GEnj",
  "key6": "z74GvbSBF6kwV71iUGfozcbBnQZR7XvvahrJPbyCYKBZ5PdWucCTv2rD8CSxUumnRN6iK947XXRW8N6VH4eNe7M",
  "key7": "4SkbAsXvo8RPQZK1g5Dozs2DwG5WUBfP5jGzer8c55qGLKyyzz8GZkF4CEc2k7QUmEGgLyVR2Bbg5991ZckpFie6",
  "key8": "4ob9ivZHXKbhMpPy4KwSVr1Ne8zvfqBYU8RCxxgzBxAaCu834QUHytWBFQkbqe2zNCsxfxFyNivgKadsxxGUEqoY",
  "key9": "4LoKRWsRfuABo4eqr6Pr1zT34dCTqXWQAVMFc5kQyDtutgXZjqUgHHuwE19SWYmyv5comiGuwTikhGqVLbLRK3cp",
  "key10": "51L7Hx1EexczmMBFmfs9CswKbvjrwmGdGbaG4FqJKG56cVkcKAFyZnqEzpMQmJadq2apzHtY7c2V7ApVSRbdGgNo",
  "key11": "37MB8pvtJ6qjuk6FWTZuCDUEuvs5A7VNcZ8pxEqhVMbogRwhvbLpqH2aC3rN49CoKWZ28ZYeLPjreFC4AdY4tgE3",
  "key12": "46QZH2FBJb6XtEh9Yx1UYmCaAtniPNRUPn7EnAmGNFsJtmWc6ChjUrx7DDd5bJ3a29iVqJSe3MWdo5XowM6thmWH",
  "key13": "3ksAfzTo4ugTS8WhH1rrMkND9BgvCHKKtHgYNzFTThUjnkE3pMa4FLsZzUURSV9xu58GUWzmFhJ7Z4zonV6nS6aa",
  "key14": "2DgUH6BfgszX54asKUaDirBGuzz9kfxfK1iUXzALhFkxrv7X7pSYYFbX5WbsSCWjet97QYTDFPoDdVRGrx4VC7df",
  "key15": "3SsokYwMjQmmk1C7CTNHA5sfpcLA4KSQF5csvqF6LFrsGkVanGEoscBzCCUFrYSRy3CxYu4cH6RCMBs9fjxdNXS3",
  "key16": "2XuDDhZwedEckNnunXE9ynoVGf1gkDJpdUYjYh4ceuuPt6i57nNC5JFCWc8knubxKHKHCkm9yK3MSfE24sPMUU72",
  "key17": "4LoRcGpKTGahBA8ST9yA8fxcbHjuYFUipV585BpBbnzEMwVVNjb7g81GESkifVrLmQ9L5tvqjQ42Y2nXynjzfzVh",
  "key18": "EHP8rMvswjR723cNVSBQcN2Gkjq3BKwKqmPoZWRDXq6EvoZiu6HyPhhPrDfB8ibaQ8L9ouHHuRRVYuMggLjyJQp",
  "key19": "uj2RFvFGgd5tL38LpDh4DCkn4RHmJfDVneuXigucnAevYgfYEvabkZzYE6TqV2hnSxAnnZqhDkmnUvhPyxD8mC6",
  "key20": "varmvUWHKUaozzruuNkin87EcH1M9DekKgD2zQHtoe8wTBxE4qsKDCH2XkHAeGhxWXz4ER8HXweC3oFyE15oB1b",
  "key21": "bxbH3N6Q8j5DmEEEAbDdYyZ1MiaeM1pd1z61WZGb6URnFVer1PdKTSx8nyh6GH95FrrcXShgUEi9S74yG2gAvBY",
  "key22": "61MJLCfd8YQBsgRo93nsyLXXjRJtgcFgECgJtHk7uCoahVEpRfPfEAjKwcMK4PUxGMsQ9JyBUBedcnLCPnSE7GFr",
  "key23": "bMKnz8JV6hkoTUU3x1AE7bgLUEYnBMKUWeWJ3d1cr8Dbi7xh9Woqr3hMgNDcMDB1R37pGThhqrGEf5vZcoyn214",
  "key24": "3hbazr1rvRdPdaP4J2zRdycAt76DQt1WkmmPwEHNfzfgoBx2ZSTng9vQndfjSFiY8nrkbMezYW4T78SFWjntFLMh",
  "key25": "2knBcyUP1uE6da24YxYthS6PHkyyVTUW7RtEzymErDEByDzNFb91vjHA9eyPodNj3Kw3wMeRwZQpMCf6LTXSEhKn",
  "key26": "5pzzRnpUJzvjU5uoTUMFbmajmci54HVi4WjCjKnLhs2WRMzrzpTcQDHntZrqGEZKoQX5o39G5cpQCjN3q5A7GbHc",
  "key27": "615KwGnfMvmzrwVfRYgJfHdDRKCNSrweA28nUpWYSsRprGWKx15j984H4ESnMPjrbF2HztWKC8Skp3dzL5pGx8oM",
  "key28": "53dgLDmi5V7Z7Z9kKBkKTgci78JEidbsKZZFWtcMhjjWT4iBEpa6mJVkDTEJnDvuJj1EPEUCTs9vB8jrfsyrVwka",
  "key29": "5X8qx7onUb8C5zxLiimEz1JApbGJ1yAmyntduBnJutksdjpLsrMCBoJUP8F2z2oohnvAjPww596QM1H61wFEs5nM",
  "key30": "44Z2WBs3wtN7FNw8jXEfqZKfhnfLzumGaHPBXfjWBm75PWvx6fasd6xXuZaLFUPe4iJjyX4uw4xpyaRWvrjLKhoH",
  "key31": "xfvmojqgF1Z9xtv2jCDjt4fb35UgzaA5WfPD1Pcm6rJyHzKpwttQ8WwuyPLC3AVerTgYQvrSKY8QB2cHFxitpBo",
  "key32": "2N5uHeFq4jgMAVMcWxF2oqqUvg6oy4yDQCDQh9nqnfdCFmqKpR18jtaYMySdZnUs2iHCVwsXnWdYZg69KAtVCfrh",
  "key33": "5jvQV7uty1tgg5K6ocCsH4VQNxw5AHPzx9tk4awKnTKDnqfzDwJfCB1c3nqrqWPyioqoqFDcBo18Qj64KjmirpC4",
  "key34": "5UXFrREvddzmtb18VUHCiSEnPPR3eMZKQFZihUn4wsVbFcn6paDwqAc53s95HLubNKFpX8o7MJnrT32GPpNhfdTF",
  "key35": "5cefj43g5CvAhvhmmbCAwj56UefGMNbhMHHHEs6kknr46XHtVcY1P44HjYZXNWchf3XqkAaQUnCzyJ5cNbGgbar5",
  "key36": "WeDKSSxFWqSaTTSNBMZ2bnPt7JbUzeqHdfNFwHj9rGLVFCfCJV9DbncAP74gMwucdka2eDNYQdop6fH5zd9YYgE",
  "key37": "3b18dZUEdXLNVb8824yeazDR61FKa9cvBwd6szhYq48bjhmFBZXHB2WeV188DpFrJTLhg3tUShiT1t5QnLfswdre",
  "key38": "5825STQfFePxxYm8gayyb8hfBvBioBs1KjLpGw54TmWAg8txuP5BRzZaneEhLRWjVWARUvuDC9tvnHoPSxPPSPJp",
  "key39": "3KTwARjTyVbGSAugaJDkWP8BBTxaARUfCKm6PUCr4JLGNUycWumt88gaTTx1ewSFPYd5ZHpSEtAAR2gjmsDBpZBz",
  "key40": "2EKGPWFxyqzjtEXXdmLbwyS8bU52jyHCZri3DG4VLmRubuUfJLyLivA7xdhXRCwPy15WpSH2JVj3smwVMf57S53x"
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

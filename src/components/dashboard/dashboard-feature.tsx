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
    "4HYC5UMM9xnccME4g46SGkw4gH9PDvqnGPiUqS8W2WERzHAs5gnDDa6ryJCcu2d4ev35VL7En2AuGkaw21FKjaar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pugwxsNLUcmvpMR4mBCgXQt1VyzGjxjw42b7T7cNrdfB49u6rvi1JBtBvcL4byYPfBye8mzk8LKWTjJbJF4YzoM",
  "key1": "5k6r3TmGuwksppxHsGFwmevvJn6WCrAAB4NmFmtcDaNfiotTB16kwyC6xcN9kts9cycv8wAGaVV244qvMDpUefd3",
  "key2": "4Sx7brdCrCdquC8bjNr77byqySxYwckBfusixpG4pPzJKuTSb6MufREYZgPdZdDchPctaLpmc1jQd6kHyx7qXHh5",
  "key3": "41AP3zpJKu6jDr43Bz6Eug7ZhoAeVSzATt2UvX3Gbdf3QHDaKLgFhPJ4A1gVK45RhqqjsowoomzJnGu5pdZK3PpL",
  "key4": "4Bdh63dehbXHjR92rLZkMpWZtvmXg2TmLquhH7Pag3YmKeBSoP3a1dghNqdCfT5zzY19VGXcuY8PRAih4AjLxKUN",
  "key5": "5R61sfD74kLaztB5A5VsLq4DMHAp7Z7uCCWXSkicoK2ZVi5Y35Ddzm443H5kE3P4iMsRpQmu3XcN46AtkePk3dL4",
  "key6": "55UdmZJD8Ru6dnemGJuFoL1gpcLbY9yz44Tp6rBpunEcopaG6SHM2KYMYTGWVxudiW8Gji4koHRvqM53aEm4bBnF",
  "key7": "4KZda6EHg6RoiLPvEFDcLvUKY8SeVCh9ztsbCBUTFopBFr4M4JhP5KoWiccycPL4CTcK8uopC9MdxBVYVHbVd44V",
  "key8": "5gqGiA2XkhbwoXJejXBRvuGAAgAFAF5i1euJzSPU7ZcQxZCHnWYU8HzJTrqEBPTvfLd1mwNXYKCHw7Vuw788A9RW",
  "key9": "34Wb7Y81bxFSRnmJs5A6rymvrVHwJPAgnQRaApPWuQordvEBZoERaJq1GaQE17s4DjSpMz7JdoC5DHyBB2zVy8zD",
  "key10": "37yok8k2pqE9a59BZtbqn4HR294p5B8kyD1BTEZB1JVUN1Kdct7yYzgLx4eVsbB93CggBrPfcsh5NXwKwydrzoKW",
  "key11": "5gHXUQ2BLtPZSgReKZngN3juoLo4hgXRAU4BQydPx1sbyMn58i71mmcNxoioGiBdUYTFdUyoewdpTFn86pW8CxhA",
  "key12": "66yVm9dJADv41bQocPtH7igteXLToDjRi9PCykfP6yKDCsbbRhBjtxvroYjatUXd9AFYBGsu9NgJuTKh9gw5CfJ6",
  "key13": "2wYpqYqSUYvfo54oJtuQPvANxW4YZFGmoPnNJnmXnKnPZnYLh29YeFZjqTgskvbjWobSwMciYzCu37NTuhsg2o5f",
  "key14": "5y6iNUoqEujAmn4kw5ZyQt9W6rvvfmhHRMCpssaysKW9kYXnxvP6XKynkcDVLnoPu4wCKzZUXCFoWGJohx5LU1tE",
  "key15": "mSzSDb7zvZo8Z77X6fmspxiZUZVEWaoVYt8WdMaybZLBw7SxDgBeQPB3p4aVJD3HTX1HBVGWiKuyExqFvWGC8Qf",
  "key16": "4LaxB7QfepXhSimD6oyMevDQKDcq81DbMH9A5YgzUoc6Kf1SjPqTZArwZDgdhAuq7iK9SretowRhyZwod4fJABN9",
  "key17": "3kubu1e7aQ6BaWtv7aQoT9D6zRU5LfUBwg3uXZWTQJZ8xcC9a8afw5sNzL67xiLbav8Uvx9PSnuWXC45tdWjd44t",
  "key18": "SBumPy5FpCJRebS8iLUGsH4cvk6tNFk8rZ8CoUCLrcVVcgNGNgQb98EqVsStCRJjDM8Ddc9jBEM4dVRTm5taNqL",
  "key19": "36c4z8Wd2LawF8sf8onXwN9FCV8NGeCyN335mKbpHuuZuQxdz1FiPefMb5JK4tYc6q5p31iPEM4jTeM3qtKEvsBf",
  "key20": "DAqkFoYSd2ZrXSdFFCNAupkPaDkyJYMB3ib137NimVAokUduFSxgJkjRs4grrx8NXer52gyCKax4jrxvdB55ymL",
  "key21": "122YGYuzG8xVC8c7NL2tMvUEhBSd9qWzi2iCdnAnAVXHME2X5RpcR99vbdmGtit1p4cykjcPLmWBXv4npefWsTqW",
  "key22": "5cMjE6YLVfCwueRGq8k6ByZAbKyRYYhXPkA3NZANVh8krHmx15tH6JTCS4LGYjHtXwKiPR7Cfcmzn9HeYrNjdojk",
  "key23": "4KpJm3QMhW6kFvVfauf7a4nKpm1TQwFFAfpm4nE9RTtJsBM1GfjRF9PkcXjgAQWx1peFnfg3MqHbLEDnE4a8kCqV",
  "key24": "3sSXHkpuM9XmL8DHjcYU7gcm4HvEeadLrDGdVP1hzPDdxATdSG5iwUTrpk5egmFLf6PtJifbHuryCfFec9BidmvU",
  "key25": "5WUcMHxAsdvy3CQRwCQ1CtsE3R3VgB3s77EBwqaGpzMccsfuPvsXnv4xzFQ6kHNqDmxdyAAdkvqULdCHGUt8dGHa",
  "key26": "eNDGmAXEq3H9KnTPhS7sy1xutnjcb4kp9QykdgFh2ZSXffF6NzyDN1uZT71mV12wCW6qzsTrSsimmCC8hiwKDf1",
  "key27": "4VNru4Csi9u24S32B6CSjZN3L8gkg79aQn4svNsMzMaBYoxtf7ZEtUzCAksVB3Nzka2tsNLHwd578WXJZfcShsKe",
  "key28": "3o9ZCVKyfZKUPdqqjqyHKyGW5ViWgiW7Kk3PnBN8oXkZntWbgpTU7ufLS5XM9yqvMjAKuYWzLPAxxCpfKkQEPcur",
  "key29": "55ZCUj7pK22S5rdcqE5wjEcTvF4NwHQa4Hd8iSkZbayZCFN9tDFdWE7uQ8gjLURNXRXno89sv8YVRoJ2XnJfosNn",
  "key30": "zt1kwgfkERunnbni3zeUubMnxXDcPuHCrvndrkekyyrSgDcsESURTjJLvSrTjW2tQHdQzgmXzxs4RXqZKXqoJMj",
  "key31": "5NH8UvtqU2gwbZABG28LeG3WU6Dqf1bvHfwVToFDEddLdL14TRYnPfpCzqrw8HF5UZj39nwnywm3YTteeoYBtsEb",
  "key32": "5Hsq3eNnMGHXVxcbsWrKiHdFkduwfqfCqgsUnW4NG8hKJtUEZJzpoFVExCBdKGcMQCy7PbQkUVxqCLK5TVrfZjfp",
  "key33": "58rKZKATx4UaqnVXWN6ER9XHFhsjGaqcGF6giSpRYJvfa27uCBGE2VNjdXnNGe7yzj6D34EPdXsS2g8b5WmBHkwa",
  "key34": "3PdrpwDwVB98TpQLH8ejMrC6rH9vK7MJnTacQingAWZbswTtb3adtsJggkzCCZrPaVetkK2q3H8jACXp11MTrtax",
  "key35": "2JpwixRuajWUrJVEDEXRtZrrEeXgfyyALwPaG4KKMX8YxsWQ9weCfJM7QNgzZVv1FxPs59k3oJUnTye1h3nZuPLA",
  "key36": "4hkHKBvxopbDyBy4xiVtobJEWyVhG1hJg7xUN7aUFfywWFuGjokuMtqkcYhDAezhEavUPj8TWqFQ5xuiuwyqaXnx",
  "key37": "2eVYpSZX9DkvUtMTSP3s9TBPuTSujKisZ6wDQQXDLw4W17GsRyRhPbNvyLoHTb5VPEtqm4cug9SxAd42MAoainZG"
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

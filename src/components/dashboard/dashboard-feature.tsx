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
    "4jNbptas5DJVXejPjH6HrKf3mAiJQiJgGKtQHoUXNqHGBm2Bgwprj3YqWkhiVCDa6EPWCanocZbgXuUE72RuRvRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wKzK9vbTwEP7goJLygNvWCB1XF3jKkJbRHVKFpqre9W2ZoqVXhiKibdaNPYCigPm1rrePV1zzAx2gLEXNhL1nxq",
  "key1": "33JAttUHmHEcDePozcKVZp3dC79d9jZA2zx5ktFJYWXMR6MQkdSJfPpz2CPLXknogXBaMgsrcwAaYQv4p5wvC6kr",
  "key2": "nTQusdzrgFmY2mA89XpKAyN8tPursNvgoyDabuX8Sxu7Ueprc1R94QZTzfmfewYpn5bT6Aa8czm2cPXTxNF1aPc",
  "key3": "4JRZTqGy24ULhCpmYHJjVT7GsrcLgVLxTckHZuiYTnXTEBpbDR4PMqacb5dfAeqXCQGXrv11HvHKqaTGPswG7oDE",
  "key4": "48feNLXSsNjiXQFXuwqR9Nz5ZUbCTFHb7KfCb2NsK4jTxowhmXvF6fqnAg2DWTVR9s1b6YbA2VBMHLbfXLnmVuzW",
  "key5": "AmCi3ecWssmGdwLHM4v5coqX28qPY7pxgEGQMw9dFVG43QZMyoGEJLCw1BZsFLFFFofXPG6ioJyfiqANHm57cb8",
  "key6": "3fT69ny5W3GanXHUaC33UBVmhnj46HzE6FLu86nUBp3gg7EL1sHLQXfF5yRCn3yWp5vDrfATPqKQE8y3WwchF6nK",
  "key7": "2dLDpMNJxACrrNwA5fxqgTNBXoPWHFHjxj8oyYyKjMaBVDxqw81bFPUNTYhGEiQ5N4o4UiMmcLycboPg4hD3dsb1",
  "key8": "4tdAbjwKGWvbXtNnSovsewCHAzg2WUEnDDMpELf5p1KC3ci5LT1c8RhaeQRhDuymyjyWi1u95RKnZ7yWLWTpBS1g",
  "key9": "2HiFu3dsZwghfKxWubUVNzsPYzBUaCoypCCSfgzUFxXJ7uUwJNEpEiUpgB2ofQ3zrJ7e3dzHYDdPtfoPFSSu2yWy",
  "key10": "2Q3HPJ5uZK12urBDJVPmc3wsC5YZHGUzUbU8HAoYSzerHjbEiRuZQ6zocwwTGo5J1N9LszfRsggCBaRf9WWtib14",
  "key11": "4cMVDUkhUPdEFsL9NZ9ZNrEyd9bkqLTZMQp4kQAit64nxCBVTuEG9hCDs2AivKhkwcXjeJ7k8nTQpwGt1WxFReGJ",
  "key12": "3noG3Wf27kkK8rVLcv3k6YUh1ELtmqCCGji7uar3mUwSs1UGuMxhHiNza8DM3rAULMwThcUPXiXdXXU9fbHcY7hU",
  "key13": "4gpxEg2aREmcDLGBJ9d1yxcEKukLMhA8cAcyeeZJTZsEFzqDvf7xgNaYRzUMpigfQYhFA8xUZ9hqwz888Sy3FwaZ",
  "key14": "3pFzESiLWT6K5UKPgfget8nE6zBNPqYCphBSyoYqKYpBPbcB1U7wDWxhq8xUVvXBnnKwEfvhRLYiDv4oXY1BHH6c",
  "key15": "3mdkRJ164C8ae1jobuCV23SKEbNeFwJiQy4jsqVvof4YkTDNR6RQVscY5rciZw25Pak6Y5otxuEu5ss4QL3LmYq4",
  "key16": "3arNbuMRdHK82jWsPLfCbab1rzrPpBPwsUxcoXffgEDkxh8xbG4cyCwfDtixxoAkaXfe5HUWzDw7waM36QhAQ8T2",
  "key17": "2Z7JGiJEnCAnmAdCHBCaEfWBr9nQWH8FYQSRcPoPPzD7pQsJfkckJQxC8n6zRAhCKRkUuv2qkRKvcjM62SHkvgAv",
  "key18": "KgLERBna5Rg89vi6q6ppQjYLNnVTrKkTRrtzfnFKbpEb9bC9PRtfynSBjxN91eH1DQLFjc929GVd9xNtYbdEGxE",
  "key19": "2XJYvTXyt5uAZxsn279ST4wAK9EdSAC2qiMbUCcYtQCRYhckxTbSycJpkDaMSNAFGFHiBaizVVoKrBcuBNCq8DTx",
  "key20": "c1CKUAg4PDgPmvhaHPHZh3UihuUGw4eHcV6HjTxdQ8FBMmAzPMezBurXaAmaqAuWGsfBkgGNWGswXGn7GwCc2tC",
  "key21": "2SmyBBTPNRPVxbBXQM9aWcwEai9hpmfbBPqUC2kaepKfLMaWJZkoAhZFhHjjStov4PYXvADVH9uNNtTXE2u7TKjS",
  "key22": "21dig9aaefWyAgt3s2FzuLv4jbDQbZsLevMsuFbG1uh4716t7JhbPjhoKyMgsmCU1EcZYfNPTgWZQFhSWuFRWvVf",
  "key23": "Vb3d2855qZXSXsy3u73rjQs5qy1WWCCfVCtZHXfwfo8FSTxT5YrpV5HP1dsvLUbBDGfUcv4ziM7ptcPjVGRW1Fv",
  "key24": "5wNzikGgjeRrJy4S4xxpjpXiQkLV2icP6r6y3GzUhh39EBqksvnAYvpwoksbB5qV6uukvuQzLnQknYthuxZs65uF",
  "key25": "67cWatbkxxK1Q7rUJfqUAdLDWX4hnWsjc3JQc4vTBphhwpo7gpKEUcffypAgxDmaenYH1A1vcMyEYgMExTZhHPBu",
  "key26": "4kfdnodPVAARNGRwhZCDKwe7hRaNSz9W59oTqjivo1zanAxfJ6mZB1V6R9DxhdZ5VTQ5khzUfTXrvSSdjKRf4xdz",
  "key27": "4SM3CAmezaVwDmsty56U5S1TkFyFmyrETPn9fCReqEU5ZPHv5ZnNKyp2kZcmjJyk8DxUZ4Ecf2G8zVnCVQgEeKvY",
  "key28": "518adFHYPeG41tAXGwozyEqi89yePFN7zzCfnw1UiYAMoyNKS4BZYmSTLUe8KXxgLQiShujGyPXbaKFW3tWE5Zhv",
  "key29": "3nDEX39FsNh91iYeRFX7zqu9JvmGEufzg1E1MeFPxbFmtYMZt6LbRXsZKWHDZSA57Y9NeZCBbmiQiho8Xo3aFFSo",
  "key30": "4aLUqjMgSoQcnUWZKWnjiMV9SouzJUpgmtSSqvrCHQrqftyoFL5QnfcsSXyZkxyVDyLS2daciAHGx6BkLcg4sjix",
  "key31": "47kWWju3X3xG9w4fLdmws5oTgyi9kv14PfjVv4v11AETPy2AqM2ab2tuQfQKA7BhEyr2q7VLg1bkWysEpkxgHXwZ",
  "key32": "5U74E53hvGv3M8LwA93GXPj6GiToyCmJeiYC4yCCoXxaKQG4WpvuAcDpuYyz4awPxb5xHgsCakC5DF1LgZ91uuiX",
  "key33": "pLCQDqwcNnP5iV5GvpcdZgxkxLp6B8N3g7nQesCs6sP5xcdskSKXMD8cxsr4bnzmpkkVF3cPvkSsW9Lyc8TTh5P",
  "key34": "4s5J2rAdZ4f8Yugy6NrcGc7bAUqKpa8UpGaR7X91BFuzsU53ygPb1fBSzHAiPWTTpyoKivKTBfUupJRPmXVUA6wx",
  "key35": "3nff6VdKJXbHYAVXe5YHXNZaxxwFv6UezxyusXgMBmfxpyd8qcgZ6Z3eRETt3YudUSDRCy2dfoba1dSo8HnHBbjb",
  "key36": "4EBCE3gjXWJbsh2HpyY41gVSXB9pdVdyibrikGC35Pekhi22ARnA4FN5nqZTdn7mfXX3ZvzFfio65HAuRPMPARX9"
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

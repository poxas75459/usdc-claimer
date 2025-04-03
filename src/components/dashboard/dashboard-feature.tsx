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
    "63qN1hRR5emrQCkJhuNRB2RhkosnheTz4KNPLSFEuJ2NQRF2ySzHCY866JBRdwcHCxEHqFzZ7ipjzjuL7r5Qqrvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41eYrqanqA3cxBAPvw2qnvGX8EtsJ2AUPyZJkxNdJo14FHPzPc7oVWwqfYuyPAQdZ4YBKtVgM49vBiRfEBMYZ2Ub",
  "key1": "4i3YvPBAjZXez8WsJgpkRqoCkAbqvUPQRm4tcx7xvN9Kcqx43BbzvKKASJiCSfmdRARq4p12cmoqP8XmSaE1VFEZ",
  "key2": "4neUBiPPbaRidNxKCoFs7dYSkSqaFkbfYXcwiyJbCXiwDRRA56LPRfeXtZvVgrnBjivnpaVmVPoFDZgXCKZb1z1d",
  "key3": "5VpE6j5nXnFAf4pxrBse5nXB6hR5bpyCdajt38DZEq6ca66nhwSooYCKaMXK48m7GBisDWKyjZjnZJRmGaY658WR",
  "key4": "3N2DW2ymGctuDfbWxFJkqc6V2VvhJ9tyDFvysCodTJiRLZqGzhef7w4dS2869utePod82DhWxvrViETd6vkiioLB",
  "key5": "5k3eY4Z85yh2iC7YH7jyHWjU6boFgJnSNXUUW16Z9r2EPpNQcgHDUHq4AkYn2Bu8p2j9qLsFVwWVbQPtPAHZTrvM",
  "key6": "8FvQRifqL2Eesxt9UeK6jBPG9RT16LCx2hjwmwCkuNCWzeCNfbBcouE5fbXkZC4zNxiq55xDYXWHitZLtrnvXeJ",
  "key7": "2Bkek5KFJJqWAuoi1TRz1WBKG1dL62PkW9ugnseLJMNMYHD8KeDiHbyE5SA9QmjehinrpVEncuJMbGgJK68tjhKp",
  "key8": "5J9NbjhQDrynny6EZFCnstmtuGTsMBHFiCKzQ1sBmNcTb6XRKf4RvoZiWzRkgovxtepYRoYxc71NammuDn9X2zm9",
  "key9": "3VJ1aBFi2M3cxL6BnGkWxkiEG7giQiAzT2va2eoFEexbocjsBH9xhPg1YNwSZz4JotPpE9wtXUPR3v49Jmwut8Vg",
  "key10": "tmU5EM26dGYycjrrsaASZUxAx5c7b8NpEbAZaAo6nbAKBsBSbSztZVQxZP7h7WjtPFpaAjpdQUH1BfYW44tey9c",
  "key11": "iPZsy5L4UfcpbMENN6KHCBWftrD8R4BCszWGE9MB9TqmwDiNBo3TeaQ4DYQowCqToDa7AHyBTHtN91aDnr98Cbg",
  "key12": "67iqEmyxpAv6MgwS2mWDctERwJXdczQXAjcghAppMLKZhVTsC52r8w8SBxWWaGDrMkCfvM6LkXgDz4ywYiZQbDuQ",
  "key13": "44FAhMyMLUvFNqivF1bAFvai326VxeRPNyYhv4fLd1XsgZ4AApP9T2HM7bxu1manQSvfnecPT9JU67UxWc1aoymT",
  "key14": "JNnPrgjR5HD4gyT2QtbeYBSjh8bJUzVz1gXbqfEnHgdcdsm1Li8g6v7xRRwnqMr96kjLy61scGhw1PF5kthtrtB",
  "key15": "2CurEaEp4Dnn5dje2XZes7Vz1ZWe48d3mxLQ2Vo8wQNzNuzMJ8AVMhy8kiKDhZbBt1baW9hS25XyiFHsofhMepcQ",
  "key16": "344KrzKyxhzTCfLJsFS9jiZ3VEMNibG5xbXsBANq23ueNbuV95g21uxdyJjZfqEWNzQjDWc6oY1wfa1QEqsmvG2m",
  "key17": "2hmEs8v22YNHycc3pFPLyzp42mspwJPcDgWEdkNmPsyztpPP5P8wBo14kconxY3d4xcSbyqQfub61qGWey2mx77o",
  "key18": "3pTrhakw2XGA6tSfpD2pGzT1ZwLWgE5VePsQ12Ru14vE9YCgmoFXvw5GhQ2GkSyi15gNKWv4uD12xQ87AksRBgYz",
  "key19": "4yq4gHtM2oNQGMaei7bkGkZ1L6ughZosa8K7BumSBuP6GxnYtWp46Kxtu1t35BFmhGpxVhcJJmpicLvce8G6q6d3",
  "key20": "5fxEdaMaUcoq7JfT3mxCrycWqoAdyoV3XMxqp7FLiagvqqmkQkseZUmThkdQMbLioemKkm55X1S3ZW4LFwmgXMew",
  "key21": "2zQSBhBUhCNFnzttwtXNTZL5YATtjrtHPT1Z1poJP9U3UgGjM3esziU7nnVb2ppRzR3GKBBbqYiXkwSSyKBnU8KE",
  "key22": "2CAhyTTNBdW1KbJudfKk9Y89j1jchDk8iJdJBLeKEdxUiw7AAwhWdZ2Z6ubDmiabHFGNcYFX5mBFTrpfAjBApm4G",
  "key23": "3WuddESnzLDRkULdbtWX2Y1FvX64N1kW18huohufcCgDNHztCMVZc4kzq5543M24Ca9TdeuTdR89JwuFQ5oGgJ1C",
  "key24": "3KYZvDPckEJXGEFzwvCZ43FYCixaYLn46rgTTkPhy3R7o7ENLvfQRdZB7L44DkDT4wRPdfpehN8yKQ2YGM1wt8he",
  "key25": "UhqpAKYtZbHhtxiXBAPtgCDiy2MdiNXDHmF33YK316FwxVCJkvnRTMDC6A5GU5ALgybDbzWv3p4MWeFzmUiPDSu",
  "key26": "5Jrjae1C75AM56NrGt2HTUsCYCNjf2yZnLQ51HPn7K2hFiZdFhV6tvr4dAXdHDiy9ACzkkBqsgn5g3RoYFZnMpw1",
  "key27": "nuEFgkV4GB9vy3ufjoyfQwsx92d6yK35aa3HE8BjAB4mjVBtumpn2KHUmnMLyrXmkCYGBuZniZ7rTb2y5wbChaB",
  "key28": "61Foc3EtMYGFFV6YrPbJoafiutP2KMQ4Tsvf52jBUasmF4R91g5jwaz4JjDwjtUzo2USi654WQe7EsKgi8zNeQEw",
  "key29": "4h5YmcmCJKzuw9kin35wtMWH32m22pzd6qRicjik8tfXRYEb8nqfScmDCX5C9SmAsC5RZFvW1LwJX8JHP2KmXwoa"
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

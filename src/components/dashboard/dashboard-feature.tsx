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
    "3xc2bSmUYqWW7ENcs29XRr7UA81ZCZExarD2MVMaVUoKs7rU8LwBTNgJ9RChf4cAzVRL21xBbK5KGRPhUDfC2xfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ms6PBYxRrte8hQKX2kkHWVquQmtKAknUPaR2vHGaoBYKCn7wTvYdCLuNpEE8ZkirchyTKZRkAt9QuzAbNpPo9pf",
  "key1": "CdYP2uCgnmN414fWVTci97tNYna1hnNtNEVn9g1LjGEYNUvazpyJkEdgrgWapBTRBs78eREKWndzy95oMU4qWzB",
  "key2": "4PQBVEdHMUpt24gs5ZhkpnART86nLFqjYCXakxLxYwGq3evuNNLoakgjivSCGRf4qmv5FnXhxPTbmQohonRuTsPo",
  "key3": "658kmH2UchtzuYh28MSCmHX77CgzMcCc8evjJyFnM5NuFJ2mUsmX98JKP7CeHkHoaP9d12qdUwrxvoyTVBen8Umy",
  "key4": "65AnvhtEJ7LSX5tELnb83WuRhjdNCN2c1ab93Dun7YXMpDyzBLHkXG3iVzTzyjzqB3UM6YNAtQuzVRCqMbekhYLD",
  "key5": "5rAtYas5r5k95tcvaYHFrqv799XxddiunaU31kvH2egv39wgFVPeX1VdHihPBAdGVoDk2KF2KukfmC3kJbtZeEmu",
  "key6": "5G44VzRM9o6ybcFgqTVAWs1NQ9TNBsYU3mZ8gHUwEsQaccipgUd133AoDxxjRX5iD7JjUgD23jE1FTST4bo1U2et",
  "key7": "5vyLg1GDD3R2Sqyz5H6au4edh6LMPv8FstmzGeKqndYybHQm1BZYXiR9tfyypyBZ64uDzUPeWkNV5NUUwiUDNEfi",
  "key8": "aUwJ4ZPgmn4b86GJGDwGD1jpArEzL1JKP3KPsgCo7j4kfip2VQGXaM4WXNp9JVXptH6ta1MjXHoxqkgpuTUByb2",
  "key9": "5ispRfj5Fv4vZd8c395w6razbKUoNapgQYhG6CSke3hzc2DtpQLtnkBJ8bHBjMJ65DbtEdXh7xoQ6kyXYGSUGYiu",
  "key10": "5CLb3VCtYg2QmooaQ3oHMyAAnjxHRDyy5zDknNin1VDSmjitfU42pqhb5pRMAzAqXcertub4Eq7TXGHRHHpbWQTP",
  "key11": "WAYqkZe664Qc2Uo6oiXNXw4eHm52BEEbNRnvJcwJaugRuRu43KaPNuxZNEWZvKHHtr3Xt4CoKm6YLn1nWtEL2R2",
  "key12": "kg6xv7xuumkNwQ4sZoh7FsMTqp1RYh1a6YFvAoPBaeAJGksKuiHLNpVah33TXJf9ECKdv8iy6CgGHLu6M2DPbNA",
  "key13": "2ZxTePQ1EZkZPM4b4PfNkw2oW3ksD9eh4PVXz4u7Xkq2EK7TC42dazdEraGJj3MzFxDmy3EjRtSkk1ViqfwrUS1e",
  "key14": "fet6AbegNJqQshSve8hpAa4uR5c6DZK17fhXrwmzaSqmSEKNfMfc4PamcffD2R9DW31ix4A4BBrJTiLexFsK6Ys",
  "key15": "3ZkmPkoxFbuxbjf85qe2CGBzbojYnsUHCgP99hS2y6t84qyBA44sMRSjT6RbVEWKLdk6tQ2wqwf4T7ZEtwqwEibp",
  "key16": "346Xvy7BFzSjGBsJ8f1Q1iRcjVEX8qpQuQCeztUoNB7t94nd89NDJqQw9Z8CLJiVNFrCnZwP4aYe8GUNQaPN5XRk",
  "key17": "2nq2kAkRQMSqDe2xc1ayt2dJ9KfKtPRXzJekXDMb1NCrp5Xw5cZP1n56BtHzYPMrRE7LsG9zPG79BgRqkfBWP6HJ",
  "key18": "4DyBZKa4eaQLju1dm9vRfgJBAFgruU12ZxfRerS98uhTvTmPiJoTgtaLyEFU5tVQCMmWD4qetnNS1AvSFFMZLP1L",
  "key19": "27Bbi9VbbZX9avFy4eK1JmnZJ9uLRz7rGZNQog7K8YxNMp7ALWuTEHTKtCGNkGDc5uJQKCnWqd5366S8tE1GXhAt",
  "key20": "q59xni2tT7ACipBgaKkyrbvzxkMHBJFZwna22TCXby6zKPJfqkGvQ3r9QrmDTa94My1JngABztywE7L7eKSGZvH",
  "key21": "3YVYDrMmWm4NQFMmohxby24e2GbmrjkUFDWuez1NzdBzTBpSnPSkJsheaLevzUhvtNnirxbpLNCtEMXfFMYVUp6",
  "key22": "3WTgNZXiH4PJ8YqmJPhJPF36DvwGAUkBjvRkAjymsYBF63TN91yaC4ZWS66x9pvbXpKN8qZNgictZf1fApon3E6F",
  "key23": "2svX9uaEiqeinCmkgkuA3owRBdv1n6463T3M8xnFrptXKH55AE7pMyDsyUfnxHjxwurVApZHyo33vMdRgprdoupM",
  "key24": "qh3r2WnY84KTNnudMVwCwfY7SX2v4jmXPWLST7p1XKRiQ6dfv9rEHtF97L96am4jtpvZ9CxERoDt2MCceFspkPZ",
  "key25": "4NA1pGPBx7aTgdbusZ9cLBrz9FY3ZZhWv3tp98Uv1yLWMLPzWM6hefopmUKnwxLeTuSxgst5J7UB1zcYZmawK4db",
  "key26": "3e4r8QbswQS8bWD9akEMCyr2dBVPwr2zSbSoJTE9p3osQScYvhUetEAX1ZTGYMpQqN7hfqXiBeqy6LGnTw9iB48H",
  "key27": "yKZmbC6rYJE5M2Jtn5yJts9nzoXsRdnK6MheCBNM5h8PtUpjF1YDBAUMCmL2vKuP3KyeTGgNCgd6YxCtXTn9LAY",
  "key28": "61rKVYkqEAE9dsqSBaghckkCZYNvK4QwknBz8UimFsqBybnLGYZ8D2pnvZaurF653qRoE6JQLxzEKiEaQF84q4ov",
  "key29": "3SvJe7JUeYdfeV11g93A3L5oA1v3xWHXjY5s9STb9nkdCiF3kQrLUo44Bj6APSGhSHcxuiiBtcR6bQrwrUX6bJXP",
  "key30": "3xC3BPmxChUHS53Z6UBoMRG5JLBWL4YBSPdnBfTE4KmoGaRUM4PZXXy8ryhky7ksdqS4ygb9L17qpm3ermbuAVp2",
  "key31": "3rp96sCjaLfR7ckH5hyb1f33GFEpPo3R3tkWcTzHCkXScSBURyewMZJpwYc1xeGitqkdqB9ZC9Nb78wjSfeFxyh7",
  "key32": "5YCzZjkfa6uMNT9f5ghny6Z2wGxH4uPtFTqpdxM7Z9B41nXkn4wg667f8GxcE95JhGiZho5NouzMZw2amyo8XE29"
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

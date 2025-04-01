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
    "2S1iHQPw5Hcu5QDE5ZXJ7eE56A6F1PCYd2Ay85V1jZystY27JQti2bndsL2oqMxnwWJVw5J2bgMKmAgtKR7EE9u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9jCqvFxYcrbD5f1kWEuvvgtUaJd2RqSqomsPWQ51mQXSyfJeSqoeHwGBnvsKhoogMLfaXTBK8fGYMfN6cFtYCW",
  "key1": "4UXKi2RdNJWwrzmTkjgKqD3kP4ujLN7xk3BPzyqG8wikfkZNhCrBebXXXgAje2B9eqDqhtECtHoY2Ji4CWBV9nvn",
  "key2": "33GX4ze3iDFFN8nriNZKTYDjCSi8GzYdjREmGxE8G28SLhqBL2KFPx7MQYLyB1R4jNADrsggesoqrkiY4HppX2FG",
  "key3": "4WPoNF3s4ya67HHWfeEC5q3KhTm4ogmFS84TL1LcbVeVW3yCP7wfMFjUE7RTkgLXyhEUiQAvaKZkjn8kv8jRrURm",
  "key4": "6FtibsStZQMRs262Kwoym5zgvoj83ZtkjwfgapnUq1iKhmLkJcvEkZDsHTbZwZkm2SfJpmovnvmZUs24NtzNbea",
  "key5": "5SEiuCDCrf1Cytbs834HtZPDNqcXw2dqaAbD6N3dMC6jpyAdUTtBWFJ3VHY1p4mnqeAHdxhky2D6W1YaHYQFw3Nh",
  "key6": "5xCY6KV3jVNe6L9uTud6NTUzqz3opkpkLUXUZ1GQu2Bhto4jt4YL5GfhL1C4HNiqXHYCwseo4RcsoSC4u37g2qAo",
  "key7": "4APmrmqveTay2CfkcERNTXCoqFkFTmub6xkyj3XNJdJdSStbfzhBQAF9PCx5rua4qqGo9ZV5mcBjTMYRd7R8QJfA",
  "key8": "4s1TEoYeKkzGD9MBzNdmCjvZKUTE5bKMhj5aZ5QfGUezQnKLMV3YB8wd2MxcnqmXVP3VQ34LBTxMmSEYPCPb7LX6",
  "key9": "2VXWsnpwMLodZzjYBu9PmX139MbXzn7R2FU6FX8NC1e84PEatE2AFfkECYxiGj9D5GvJJt7NySzWDFfgJpu1anZ5",
  "key10": "3w54DSudiaNyBCHFjdVXjTeTLXSp5i6hH9eQkskUo3cbKXgvtB4kEuQpus4Mnq34m1yDKeckGokijLZbhiGYTFAA",
  "key11": "2y6rqsBZrN4wFUwbwhESdWYiVpUzcsZ4BrLF9abvHJ1esRk2hWFAJ4YoSL2dYkQoUtCJ59BN71Evw8gY8zrAgWzy",
  "key12": "2PjQUzSdK5Gbn3XBUYYQ6NcUHMu5fZGLF3nCiCWZyWNhHn4Z5duX3WcoFNSnbexwXRSEpRZDQYjyimBuTcuMQTzj",
  "key13": "55F4SYWTfB8KzDYxdeTmNSkNaFAbYptyRAVj4r6nz4gzqUQJy6SfgV2od6cX7Bvgu453kPW3awGrkTdm2SazA1FF",
  "key14": "3GHtghxMWFXbGEtS4VDhQhTozcEbcF41bH3jXik49zQ1fAkV7Jy5jnwFNsinQmdWUfdKhZMn5YnPkrnZNFQXHZby",
  "key15": "5XTFefwjQw11haipACA8D3VcEmpprDLW8Hg8hKyDp2wfqU8bCLqbSgr9UN6Qz8Ket3Jw3nB2YZsF4i9zNdtQdvA9",
  "key16": "4m5VvDmmtJWE5WXegQTbMSPh9FfHTurfHdA3iSsGk11AfNwTHPP9MEZXbq5R12h3kHNTepZjaZUaEvc7gGyC7SMi",
  "key17": "2t78AwTA64GopFg2CWg5jPnfUrwm32MM8JR2Snifd7fzi9x4nSw3B3ge1dYUFxHBQRxfRkXuRMaTpggPZm3E6WHU",
  "key18": "53oHt25ihEQKnmGFEW5ZXyKjHqvqNUr1jUVm2vVTQSXkj7pNRNZoPVhxJ91QsBubfB9XGs81qURoJcGbtXjYgA2S",
  "key19": "3vD2LjowCkbCgivxTiTQqf5gsTZPqXr1L3DoRvHibaDXyc2Sf3NyVkbJWgE2DjU956fVVa5vqRhjMcTyNiYM1VrM",
  "key20": "41dkqeWyY46N7k5RnZmPyztjGgfLYhDSzcXaixmfWJXAxJPQfRKLMQ4u8eQwuKF9pQGTWYnfG6AogqfmtaDYGAR3",
  "key21": "43PSUnP4LPEbk8Gae87T1vwvJubk4KA9jT4L6V3ANiu37AkAn7RfACYrfYWWH3jERinZUwNgVGxqzuipeQBBCySR",
  "key22": "CmndPDbZxz8yZsa55fYLVjHL8sTeeQMWtnFMtzpzctxQDn3a92SyL7JQHiLTyBhTDdGJYyd7PPEKHvfWseUuzsm",
  "key23": "22nJjqDAagYr7bxzuCr6YtYzXcZimEX6J2NPZszuL28SRLRzdLUjsyGJUTREiYuqksHtWQJuWgveTHEL9QZsUyMp",
  "key24": "54QJFpANZ9rgMDEi3nvrD3Gps7b8f2SmNRUrcoxSbmdS8eiwRSotqGw8n9AbEixbMQF6gMn96zXvy6uPXNY7CtTc",
  "key25": "2oC7jrfhF66nwB4JxYkC4ocHNLoWpakRXVfFq8VAAxS7aEbEqbagoevv472CRFEwGcrc8eJm7cbWPVU2g7zW7Fwk",
  "key26": "wgCGxZbAWsjqdccTF3EJapBDYtRhEvvW3oXcv5oTZoZxX4gf1rVkTJ8NDv2NET9tuGs98J6M9hwqLM4Rc1wffGH",
  "key27": "4YVUSNdjQmZvFdyvc47ZkAycoQm2ad7dBm1rVwh5gayvWGd4K2LxEuGWLktJ6W7Kc7ysKrtzMBDocgfxwp9TWiiD",
  "key28": "5yKWd4g5gHRV9q9a53Auhov7tLmEZYY4XJNTHcAvkkPSm7m6JM8qnJKEWbjNyAA3YhS3dDeLBcasGiPPfbWHg9bB",
  "key29": "gWYRf3N6cT4vckGYwa3jXmQGKJXhPQmmNANGXJxqvPN5RAaUUrHPhQFZMM9z4VF5XkGGUpWXLUjmtDFKGtAHvZj",
  "key30": "3TrkRL5bAb5XKwuwuMHz2sdf3Cko8V3JLykmFo2uwprfJaw6ZmTMd5uo22VwP6wfrxNQgW1sg7VuiKMFJjg9kXfy",
  "key31": "5h9KuYo5ASgGiH1GhF7djcDCfJ3KPyeE3vjUvvzPt3HCJDCfXU8f2kDQmu9PFUJYWLLA2d8ofPmzrzTDz4uZe8DR",
  "key32": "3JwVb4gzqQTS8wFTSqhjXQ6zzTpxBuhoGdBYA27N3EfEpFnghUUyRW69yU83LsZZzmqxWAsRocmkPNXBiSHNzz3c",
  "key33": "4G7LRKqW97zcrdN9qm48TUTpNvZT2Wx8s8Zxzs2EFNibXnQzDMxeEVTd5Xs3UKJXU9WXTKxkhpBAx5L6G2moyEY8",
  "key34": "63xB3CibUqZsRRUMzUqqpzrXa7SDMRpWgz31qqgFTSau1tydHtXC495J4gXTA8g5Vu1HAZ9S1QcefN6coXF3ofGX",
  "key35": "5wAmSevcYFuGppRUmj4DhRT5SqZrRFV2bRtRC3rDvNYW29AhpBUYGAumYw35BMiEzkMt69WC1zvzu4wfTtciqoJu",
  "key36": "26Q5HhR4eWTzqhsT3NE5hFDXSuUWCH4H8hrfm1ropHUnZFMzoUw33GTaZaTZ5aefqECoKM9sTZM9XLdSgu81kcF5",
  "key37": "454CxtnSJrcdQBDexYj8pyqC2EUYENjkazgHeLGSFiS8nuHAEqBD1RvU7wZFcTXeAtySJUh2xuqDJFT2C5bBnAyn",
  "key38": "2CY8dNe34epMkQ5zBgNBKpUb376zuNYAEe5piT6686JcHgvkh6SFsJPXJ6ehVPrp5561JT3yMiZhnnSfZK1CAfEh",
  "key39": "5PhEPon7xLjSMFU7YQiNGP3yCN9VzP2ga4Z5KoPfnCJWMYTkhSoFggbz5HggSbtPSsyUPHyVLVb3YE3vLNR2gEkJ",
  "key40": "5iEGoXTwKMrH5Cctg6GDjz4ShQ614Bojxt5V51k9gbyyDKtkRvj6bgL29ezcPcx7VDVgQ3HhVaR56aUHdQ6SxCDb"
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

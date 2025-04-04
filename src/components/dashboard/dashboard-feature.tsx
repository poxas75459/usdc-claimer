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
    "4mydU4cHqb4xWEVZJE86kxMHUPFW6TQAGZHEhqZvoTmHtWPR6crhqiwpoRwA8wmNphiZ8BGkWkenjhPUBaFGi9i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DR9SQEpwwyDmKMWu9Szz8s9qTTimmY3wGweSLK5bLLS2Tk6VxuTUFX9e1K5GAJ1ahtyPTUymk1cHc1mhMPDQrJw",
  "key1": "56cazhAnUZ2sxbeBQfnUWfqLMRLbbMiSVTubSTmBzZ5qoNSM5ycLNipDm42pBFtpTbbWu8oyNE969DosgWeE9J2s",
  "key2": "2JV4k4GCzPfBHK6wazeRTAihVAXxz9GNKHE6LUwutuuFYTebuuPY2WCH5qxV3M1u5JX5SH1Z4hHpEynXe5s7Y1u8",
  "key3": "8v1JgenvRcTR3c59a854hLYACUBxhegfrunUsU1jyxaDo3DXAkhTjsfke5HDrX2HsGGAQ9BWQWivuVKqPmQJE3n",
  "key4": "3YtBF1993uctrKQdUrhGuSZm2BcBz9GFgJ4ajFewyBi7Mjay8r4PiftXEkJYbNvQTvhvnMF17kzAhikG3d7dj3gw",
  "key5": "27zm2o2sm5SrSKS4J94m5LGLyhvm5a8qVxHwdx6MM5NP111BA4jmCDDMVDKZK5toJ1kQfhE2hevNYqa1tx1RMSm9",
  "key6": "2pTDR1s6VHVDgprH3dUvcXCV1p3Cq3wC14NwBV6Am1aWR69pzV1PVKKKDUYb2ZBUc9dwFVEdKfyM2VNTwrH9tR3E",
  "key7": "2PebttHQdCf8moPXvHGTwW3A7jUJfCU7graoWiVLKxnTkmBgiXp3Dbr1gJGHRBYPeMzHipRWGXAKXimVu1DXY5bG",
  "key8": "4GrvnWH76y4743Cwbf8nyBsHqVKFbC8gZ7vtdn2ALFpBszjx2pKHMPHcaFxoZq1SS3s63suUrp1GbnvKE8unKC1e",
  "key9": "56ep3wuamZpcSjdwFWre825Tx3c657FtkVCW32sw6RkQuELvNg6WLn9hDZamdFK6z13DtTGF6vuxEtjaM9z3GvJD",
  "key10": "2mX3PubouCyTHdPRJSUWXYrsdvQDXueK9c517wAVDxd9wGtka8psRdJudizmD7Q6ChK7rx2QvqviTD8CTRvCfrQF",
  "key11": "3SrcH7MFLwkVaxxiWC3NZAxsQMz2PvKq9DJvwd7TqFng6D5T39N4gKQ8w9xVkBBiWsoD4sTkGy9nHeCgUpHYrbME",
  "key12": "5U9HGT7FcU7HkmSEbNuAgKXXrwwXKpJHZrgbziACaqXQygjArr2mBXYANacrPN94QNwAGB7X2tu7FtTWjfMS4hHG",
  "key13": "51eNPPyZ1Mb3mxQpAaDPPojZTp1YUasBHYSyZaQYDmNcESQ469i62SpCYsAEkyfkkb9Mk8v45qQUH1ghXe4stFds",
  "key14": "49CGgVn5bVcUJNKnC4CXAR93bqfQPoAGGCHurb9YZbxcK4nCYEsL8hi4g3KXdtzMWs3h8WPDeP6GBSbPGXpmJJPq",
  "key15": "5dkKhbJCDiZ84oxSLTArgZNgoWwndVsc6ibsRSVKhTbFZgcGtutvG6cPo2Njqo9BPmPaU7eMZT916vZAXoVsBfHi",
  "key16": "4yE4QqrjuBX5J6kFQXWgHtxoUR8dvjFK8E9fgEjhevakaMoEnZ2Ci15kCQnVEyy6NwUmfZYfxyHduCtyXVGWFGLD",
  "key17": "5r8A9U7PbpucdK8ncsqsj1QdcK66KvQ5jmYpXvNN9nYAJ3ctvdwEQxDViiNyCfmr5RJBWbtKLRoCrZmEtj7eVJ1k",
  "key18": "2s2R8krSGnTEzExsJQHUN3wFXKMZSYMqne5B35UniBaxDn66LJu5rhRUbuE1SkKEnxDRdbpB3Gkuhpnd8s1vpf5p",
  "key19": "z55vMKN3z6JLLfteVJkiDS4jsufcyJvd5D6TbKF3chZtZZSMkLeZYVt6PSQmEBTExJ65UJixLNvweAp6FyZmp22",
  "key20": "prhuRQcNRxYkHBBuqDRGT1LiCrk2Q8K8PpWNw5nsSiyoPGMAizNNZdVc8dhQCDcjz49PcCmcJE1yXLmjhoRs1qd",
  "key21": "5izbthLamf3ge71K4cnz2YUiAWqj9vBBzFuibUvSvmFect3LupGY2hegSReMDzUkVyxpEpN5e3QGA1funeWSdKS7",
  "key22": "2sjgFUCozfAgzCTGsaJdCTaq6QJ2VDmbjEDA3LRpwu8pSvEXBzVitu2pxqD1DVYgqpdBc9ZsFci45n96apegSrck",
  "key23": "4JGMFogEdYJZk5ppdrkVJj3W87zYLoBMbGMsWKsQU52VpofE8QUBaFCbCta5E52PBkEJSgQPAHw7ahFNr1t2LRzz",
  "key24": "56ajJQXAPj8cUyzJp3pKoKZSCXQBXiHRHEBv9T7nidgctGJpm5KcQyU7WM4KF9VLXDJ1qw3rV1R1Jnhoq8qsovw3",
  "key25": "22jvxsbwbFDFMvJtpzuKXdmKmLcMhTx94D4fqWucVqYAFGzGpbK7PBGfcV9j93LatyqfTSjz41NeS2R6EAyBZUz6",
  "key26": "3EZ8Znv157ZYmQhkmVRjDhGkmAPaLNsZC2Mrg2XgN5tSD9npkbYwCQAffZJe8Ab4QVJ85bEDcUu5Sv5zc7NhRWEk",
  "key27": "4ugpoL2d73JJC9iLXcfd9ynHgRA1dN1dUBiyEp5CJLmLLd51ftgY1WYiNRfr5xWRRkNvK4U7DhFRXdWWV6gewKky",
  "key28": "3NDxL2kZHEkHfvgnY8Nr2GAMWTbeJark2hgSbCRHNxUMQ6TjPChUXzyZLKSkBwgCo56QfbnsApSvSmTBtjV4mLo7",
  "key29": "UgyLNSH9vNrGLfkp87eniQsdWBTP8xvoGbKe9th1v2LRFRpQpYKPqcBGz9HGxJN9qgdQd56wJe7FzH28V5pTpLq",
  "key30": "5R2FLwpFqQ6ZZAJhDVUGykNQdKGq43ygkkPRXr4tgzGesPbA3aSUxbdwPePSkc26KpzDv2MsgMSu7Y1DBPkYxPVk",
  "key31": "Pc66jnYAbaRruQ5AYgXVSxP3s7TWbMgcN669zFpwznsfwjx47DtdAUk17QzPeH34VUV5jFRJthPYRExbKG8HFLA",
  "key32": "44zJzXduDWYTHWc4Jy6AeMmYdzwWp3ua6QbV4CKcJrUdJbYTCnbnuCLPWqMozYzoyyVdYXStbLrT9aY26R3SJXwm",
  "key33": "4x4W3iP5xm6fBDrCLo4fKjXDffsxJY7fnCo3HLrG4yodEPxnYUDEcHSgtPSzkhmBmpRmMU9Ldv86QGF3Gva6v66R",
  "key34": "3WER3g7XGpAy5SLCLbzEpLibYchddU8DaG5497Vuvqmbzo1NAaQknKsJVyU93iy41cAn5B5cYbatPeMy5RPdVvHW",
  "key35": "3dKMJsgg9FAxWxe8B99JUFjg3Jryw42CofQ4v5wZasfPiBv5bs9tfbZoTwCWj4rLyGz6k8swvZv1TXxN1N3nXj8U",
  "key36": "28GEwZjSBrkZHHnex8LfMjCCWrQUNEgmt4SGxSZvP4JpCK8Ruf5FjpPKYmtn5BTAVgAQFocCYAQfvvRTQNErKfsM",
  "key37": "3ssr6SSfT2aNTxwDufFyN8vKQWaqgPCAMKU4N2cwm5QqXaqzncBvJJJEhWRLWGSLjpd76N5h5zcwPdpw1GCNq2cS",
  "key38": "4AzJEYQSuddL5LWSacHioFinAoGGuzJSDUteAXE87MSz6g6e3NrgfV6MwJVnasKje1JbUdc6CXZweQvGzGDKvcry",
  "key39": "2XGTxRPwiKitN8M472C9dUTDevDr7YD5cwN6466cgNxmGgbis4B8fx2sA7VG13d1h4gygxCpervbnwAmgygXikm4"
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

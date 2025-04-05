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
    "8WBE94vRqy8KxYJqbeyCe5tqVtEY4jyzmxhpcudm7BzaRNmqkHPakcR6QZT3PzuJ9ANLY5KdEEQMJNPzjuqmoHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "REVXHP7Ebi9BMNytc4eTEs2uoU9DonBqDmMnpgyZ6RmBFNmm9JGhbEBwdoejao5J7g67HSLR7sBXen4sCY9kBrK",
  "key1": "5JUs9Yfvtk3LeDqcw7imWcnZo7XBA4xWHcQ3wo4Gxz1okf4Cy2vkBc71PQ7Bo3nKq1nQAFNvyjFa8tRUJ1JHxLPD",
  "key2": "5phbxQnZpoR31fR7nLwzprh6fBkgxphbknn77fJ7Xj3opsCDSpZfVVmtrVETwrEFbceiVfpe2bYB6eqEjBYH3A18",
  "key3": "5KaJ5BX3BP1wqTq8tuED8Kew6JWGfKLy737bqKPpwAB2ZZDAbja51UJbbDZ75m9jSktRkozHM5CvBqwNXCr6HJDv",
  "key4": "vQ4rRv4wAYzfaynZDp3D164AQmrGb5m2GiKBw7k2NpxG5gwdyQcea2e7GfMj9xBebSGMJXBEFp8EsTsMYDHS2uU",
  "key5": "5YHy7xpYDaWMAYTiSHdmiSZMsQKgjM3okziVh3eGWpuPhwxFQdtjKMVz9TXsiUgQoDRmJragHRehw9EuDxhDZajS",
  "key6": "MkD7u5wSRBTYVatVcDx8zuU8hbMcXBXtPujBoHo79uE6qEbaxQeyxaresSa42VVyVeH6Bv7XjkxaX2KyDEVj76k",
  "key7": "5JWT7w1fQTUpnxnGLWmRBKDnynQPS2H6CigT6qLnsA9aMj1uAdZaob5NFH7VvQZdRfWuxndwn4rshficPPUSNvwU",
  "key8": "5LcPFS1QK37av1nzVFGxUdS49kpxSTkmHnErdMnBPV3GMvNPfzgGirWcS3uyy7UjxfmajwaKTVmqT4LKa9nCEShT",
  "key9": "5yiH4pdhyKcN69ZHG5SEt7HgyK4x4xVU7Ljngfioyd3nn9aATxXC6QDDFNWyjM4kcntb7BuqYZBSMreF4fhKZrug",
  "key10": "3T4DxLYwz6XZUpJp9zmgpRbYjLALjz8mPZesrNYvdWACPygqQMJFHHGH6EnBktUyNUyNMmCdCAtC5ErkAtSFdmah",
  "key11": "1aCUKqnDDJSkyEXfSZP3RmpgT2Ur4Y9FinqQs8LwPxA4HRsyr4f5zCK1UQMaXmpHDGPmHojdmSnpMfRAwEsBSpw",
  "key12": "53Hb73E1jvFFSCUJ1V4uNZZD2k2pugtj5NXcyxBnor85xegHGB4b5WWokJwDRdVQgK87x2Gkzm69QxV5NJ7FtYpP",
  "key13": "21WpkuET7SkeYVDXK6AG3AAxS6temnHD7gRzMWYL2LmhFftpDSjggZdM5PSMXj5PmqiHFDvPJ6WTXbp19ekncwFK",
  "key14": "5BvdRbf3R1umPc1xqz1FkwbjmGSFvSwCVDr9TDvxxLq79jNhSuvwJHo76MKReAvFp9jAy5NqkMLB5zASjdNuaxmz",
  "key15": "3acqhoJds59VJCvC7fxGjWCD57KLj22DBJgztVeKfpaxHNLPbDzLu1ciazm2wCf5nmcUtxAUDVUALzm1ymsK7sce",
  "key16": "42bjQW2UdWmz3tQDsHjmBJZqEBbfYJvL27mamjkpodcLdqCFTvq863aGautYWV9c5r1WPgrC3urZBWEm2XdLCojj",
  "key17": "5juCRfGyQnzyx4hBMVw5LtMUmjT8iuTAAGEJXrtn7mUd6m9QfSQK3ZnrMy8rrjVUGVGSCZkRcXU37Lx4TWpSZ7EY",
  "key18": "RUznodZdxWcKL7PFk1fNpdwvRVrPYNsP7Pf936ykLMLwxkVKCJGgkgj3YUh4qwpQBQt5786H7n7Vff49vyw8XSN",
  "key19": "4HG3DBySfiKGb2b1pXbAgMmuG4V3amkwuU7ey5cuCXnwkvJJKEhUiQJWkq8gWhXuNjaWwz8zKx5j5MtdQiwqbpZi",
  "key20": "vCeYr34ZL6E39WVCSDTKYaZUyojJDvGUxFzuSyX7575XVsYtkE6vgtD5VfU6QWNSnJFp45WbRsuu4nNisDhLGTF",
  "key21": "RH8FPsnnSwTRhPCzL4aPpP5RoKZjQsENzZCnFwBukbxATjX2HKJPQ14kpQAnkgfDD5sWa9YHMh8WyWzM9CgRBVD",
  "key22": "4ZMDAhCTDDRQQT8zHjcSBJqWkq2LVmAeydsMaCWvx3EndvxnuGbhDtApt12GCYyARWUY1pz7DVSnQnzKaBpCTdMA",
  "key23": "4hDooLZHHjx6vbJYD1zU1QFhA7GTWzqwgc1coXiMfpWurPd4y2r4WJFM97kXHRfBvoG9jtSt5uctBtYDYzVJ5MaR",
  "key24": "5qGL9CUp2PCwUahDL4EbJ9GK6f8AJ31gydRo7UUban7D3wCpgdWzhBTmm4fmcybcanm6xa3W69FmpQAXqpv75sht",
  "key25": "5jaoM1oKJCL91FuhVGYFcxBKNT1LTfjwGqyEcw72JJz4jC8Xm5cSa3RYN55WwPK449KaiazHXdhzUNVmXniiqt7h"
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

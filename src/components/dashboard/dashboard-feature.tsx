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
    "4gvfCWuDug4JJ58axYJLW9T5k4kZ3VqxDToJ4G58iQTtFjVpvVNjbBfLBN6VmkqPVi7DgJoJYeKap7JVEKhMrop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWXbAPEGQWpjmdGJ3etwd36qHuNxYExFF4Ki39iS98miUURRTsSrKLppXXqzu5wYVkR5DuUtY6s2VM6T1L4yfyp",
  "key1": "5KFsEAinuUpNr8BkH4NUtd37b6yGTjibfq8tCDKd5wtqUWTBZsL1AAXu8KCTKd3Z9QtQrVC1BzSNGv1vu5ZAXj1d",
  "key2": "3p7D8Lqt56XJU3Fu2enQZ5wERXhHJf8aH2jVLQfEZpZjjNfecKHSwwdQAQ4rbTBzsU5KYQ1WA1vb7XUnvZJggZB6",
  "key3": "45mDi5ufsDo2cEZZ2MhTiaWfWk3WbSizTH7h6q4SxoXcZrFWw1qVywNyKWFajSDokPT1D6cHz5RU8BtekPKU8ytQ",
  "key4": "pZsmuevS2k3Fh3YdvpCn8TRrQj4ibfxzNcJ7J44S7yizKRWPqhuVxos2Xmb468ovgQD1skR3bfVHbEvGvhy3wKH",
  "key5": "47yvS5n1BMACDDykkurfKk5LPno4jfbQoYSZDtGXxWs7x4S3BRY3tSXVBG6G2D39JpQ9hNtProFJ58ywjhArZ9zY",
  "key6": "3F61QWkqRTXr8bSdqNJUBRLxbapwxwWM5smp2KoY4xiNvHeaXajgvyzx2xcrDSY6dcCPHjnNLMPTkjKQF5mLmyhw",
  "key7": "5QWxLNYvFZ2i9uS3szZxnK5fHEdcChrg3bxox5FEcb5KxpUVvZW48AiLzLgH5tpKbCmcTdL1Hw43u3WGic3nruco",
  "key8": "5KzkkWa17HWACZjN2uWKXWNAML23BK3zkYZdyLXj2w7qfmK7MzWnEWyF72xXy7qBoFy9XPkTB5rNNcTGCAEwSBhR",
  "key9": "5sWe6bjeFNsB7nZhu4uK9PdDaThqWqvcay39K8ZG2KBRj1pjhsxhhovRb1iXjVzfBRDroGFWWrjY281kWLxmGBEu",
  "key10": "5iPKrPudf7FgHFH9yRaeUTiE9TanVbkRupFfcSc1gHvdFfis21THyB2xje95DUSLgK57mQRajB7N59xY28pxgeEB",
  "key11": "3Fq8hPBkNzNDSDMhQJquNS9hdWBFa25TXBznxeHiYwTG2gtwQ4rjwmzWDUtFttAtmF2qEpvcSfuNosSymPFawr8u",
  "key12": "5BkeY6vHaXgCdLvtxLPozvHHoS8jXzWVpojZAAx9t9MdXhBNqMKY6GzMEsSUSHqticgC2d6nLrLuCrRDXTWSvG6a",
  "key13": "34WJ2heuUkEyyyZDPpatikmqg8zu4nUVKfggiRzCWoE3kPRsEibP9pJwHNth8LvKLtu7aCTSwgmNGw8hrAarzVXi",
  "key14": "57R3TmgdUd1XZs1mKrQ4ARrgbBrdiVhSZAaRd2FU7TgXQrSci5Fj9yoTMpxFnQDMMVUdhDDCaeE3xCDrj4MkbvSr",
  "key15": "2cNEdC86WEgEyA4DxmZAf3rjd9PkwCTSPJCri2BdDGs1uqdsV1qYvWr8YoMnDMaY2QEciwJkFYHcq2KNUrb5BpDw",
  "key16": "2XzYtXZwkjCdvkBoA3CuB1PLpHYtXgQiJYDimsHbhhFAuFHndHBXYh4RLWvU85T2o5x7pFBUwX3eMBfVXEjyNneT",
  "key17": "2Y4GSy9s9o1RvpfE7vsdtvJdAXUruwnjHwyct15HWBQKEwck4S8spP2mNeaHpbS7yMvyavyBi4fFzA8szmidZFrM",
  "key18": "5ZVirbp6jaDMnhQYAQkonGemxsgD1Lqr3JHQJsV6TYdv51W7GExXDDpZSR9znfg7PJBW6QEwWMH5pz7bcf9f4wKz",
  "key19": "FqvVNeH3rUQ4SQj9gwYGCb622bpajhcLnNs2o6MzNe6EpMUatPSxnBHeyVSp6hRheiL2krx1WDxfQkT7fWyhK1C",
  "key20": "4wkSApxoGSLK5aqBbdjLMEMKLmP6veEvutr66j32xg5VnwG6tdLqsa4zdxhqTMXe1zkgbSGtDrhauGsjqGUsSKEP",
  "key21": "5mzYgmmNDGYZC8uH5Y7SJfRs2D8MSupABxBdYmP1DG8ERvMQL5PgCMFtw8jRE92nfx1bFnNuZFJLMKNw4S9fXqSL",
  "key22": "3WCyPxjipmKxDNkY3Nu2xtk4vpZ3mVCh4LCXocfJgkwhQcMM1sR2u1Hp7TshSZ3o6m7o6MscyzumwiPHPMhALknY",
  "key23": "2N9qwHmQNeQwn1Ls9f9Y1uVdhsf4Rdepr885Yq356EgDVtWsWefZ17HwQCFpUAYBZvF915W5t3HqWoCrAKbDFbwB",
  "key24": "2oHrugpfgFFFABmwkPZbQWKcFGSPr8j9X8d2haYbH14AaG7tYJ6WAhW9xPkkkmcPRMZi5ksJ1BwLx85B7rPupkSA",
  "key25": "pZ9ZmmgRPNFpWwKbxwifaowGSePNXJLHvfYXxz2N6SUPY5HTdXp7pf9je2pz7NdRzawcC37eQpWqeFKL7DGbQuT",
  "key26": "5YuakcHnhWdZN6YDB1fSxyzDscVb6tNJYxLEpnawzsfsgSvAHzaeQQJ7K579ZHZppK36QYhksfYjkzS3tVDBzrWo"
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

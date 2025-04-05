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
    "478e13kQ8wxgyyDRRFEGjFL1QXQdmPsMij3RJicyZzWtfSXFbSDGA9iK4GgLtfYGxnJFkgJB1GWED2nkAxW5xgFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jiC7xAPTjfVqNX1buYaiQz3ko8huoB83sLHrr1VoeYUHtVkvtAeVjPGEZKzNS2J8tmq9EsozEA2FShkfy6Y9oRN",
  "key1": "5nUMQEGp7iw4nS731tJJCEwRYhXWsuX7nKdUWHDAbqNQSrqXHgRvYEunghDYfhgRWicAB5cZrmS7dn8hSt4tqs9A",
  "key2": "5AZetjU22xDY81CysFqNhYyDqc8Y6JL7TdauEdvhzqB1KzBUMyabZEGtgQ2K8ssRF2hXexP3hbss1d4cd86MJd5H",
  "key3": "5j6jBDyu7gC95pNvQokakEvk3v4rvMDFRDRiLBWUZTPmGdy6uSDm2Pk2d47fvWjbQE1wL52LHd4jnbLSGGhtbGUx",
  "key4": "63MKwJNTZXu4WBvrAxj6bmc13SZp8r8vDXRZ6BdmiH4x5tExLSbAixnkDTLCmqUWax5wwCkw6pwsoQgrkm9M6mW8",
  "key5": "LFnrMaiN3pAc2kBP1dBqNKkgUYzRcDDQAupfMC7c68RQGSkHtW4iA4BBcdxEjH5at5tdFatVcqp7NJqigoYkQsR",
  "key6": "2DhVZQFPtonwRRn61KwjJSKWmYwoijZgTgtaMEGiKdMgYcAS5ChyHRNnHiVnqJyCs2YYzZpeENC83rF62ALzGcEs",
  "key7": "2UBnQD8yhyF4fJdixfwWWPvMpgCuHFzhNpLw538svA9JEVLiA1mG2yXzN6qHvozbFGHKeEnMRgub41Z1CBvsMvCL",
  "key8": "54E7CGbqWUZSKX5wbdpfBbphvD3Z9ywRNnfy6YGNNLFWghiSdxPZ2JhGF1H4jnk3Wfm1Jz8W6EELsE1zW7p7U9xv",
  "key9": "4xrvhpF8PxifxqYMBGVDDxwS3QRDY7r2a7TwfNTWeHHxv9NWFoA7rzph1QtrTippJBrujissL4Xk7WKQrGBNnpE4",
  "key10": "3h4KTJ2GeQM69VHjx3QhGq28HQwtQT6fR7G6MxwLQRqr9vmwENdtDFWKWQeoQ1ZqQa7RskgpRLVzK7MGgqKQ9QAo",
  "key11": "4X68EM8DGrCYovEgT1S2Dnk2RkNtnPyN56bSsVEFcfJxtqow28AgzinyESM5R6VUPsBiK2Kvz9RxDNgrpjj6JTqP",
  "key12": "49Tx6QnNLcdCb6BGcmh5efQYhVApcJYQBZTZP5VroGaSvytU3KcUDruDHqVnzBmVV8mVjSiiYM9Z12MZho5711a3",
  "key13": "4jQbe45Lu8LR5px4e5zohBf2R2Ei8wCweggAxZEPywWVrjEWRKFVAwWetWUCCRdEczQCFoinXzqtH2HkSpsUP2Q",
  "key14": "2tdaNeAR4eSFF5BA4PAaTNz644iNG2GmvUsZKVMWd4MLLToHVwVQPPwR7eTV5iiw1TZbXVUXkdp8UPVX6WFN4Jtb",
  "key15": "55zAbEAwhSnxoDcufqSuks6dG3KYcnDarNgrc1pUvt8SPyaMuoW8p8RD7Zt3T46Dwf9zjx5bcEFH2fcuy1MuMwc7",
  "key16": "DykJ5o8aJ817AYhAYjX3Bcrv83idBTcKLUbXMcuP2rqVrBVjdD7VxGZYSgYkEPJ5DiBzVtYgcUJG9qT4EQJPo5i",
  "key17": "4vcqfufD1Vq2e31Hac28pNy3FKGTUBHeRuBcqDr3TzGrKKKpScYyBU8hmzQ2byc57MbYQ7jjSKZDtk5TsPXqN4x2",
  "key18": "4uRpqc2n6mZX4ZCMTTfBLUrXJCxkadn3tptJ1RvrSNeaaK9MU8nLFwGQRB1EQZax9Qy56NaiRydGhJ1Ne9KxAHrr",
  "key19": "2HnSVStPszfbzqtVsXtX2QRjtwWxcigE1WZte9S3bmSNGziA3YiPMg1xS78U535DEMfB8w9Xf71L45DU2msoFRuf",
  "key20": "5Vm9CSphq6XyCb3uvBA6WVeVxkkVPVZ2yk3uxTGY5JJkuj9eBkvmoxLmNAQ4MxWyCqE13kTNRP8vkhhy7Fckt7eG",
  "key21": "nDUFoDb7erLSsJJEpaETnkmemw3uQ8AujgzGLNQGaH3b7qA6UFZB5Zxfh4SvvHqvkXQXxYvcq1CA7P5XECYmgRv",
  "key22": "5yYtHpuzMDVT9if37qE7Ugdk9L25LgQ2Ay7wy83uQnFGjt5E4GaQR2RJqjNMqmjZvy5Wbh1xSq1ub5wngG54Fca1",
  "key23": "4XNjmLphmwSryKp5xqnF1Gzo19xaK6aqrSResXToP9UMGfaZVSSbdtEXgSs3WuokUmJQixrqm4NxZMRFWjuFtwa4",
  "key24": "WW4aYucRygxxDG6ZDNZ91ahj885ooe3Txnn6jZu8WPrzuz9sUixCMr1osswppyGcQyzvTqJTM395zrYzPmJNXg6"
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

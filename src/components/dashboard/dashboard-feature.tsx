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
    "3EaMa5JYoDBcrHQARTp19X4aiaR1T4gEinP8bHFWyJyVYhSroZkm4oYp13jZUd8c7mdxk2BPKZ2c9bvcaoEev1S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMYzD9VgRpN2FqLoKPBJYFpxoMY36anJJGaS6oaHHdtJDntdmfLu7BHTRSyrvAudnbLiKqEg8Nb3X4e1LuosWWt",
  "key1": "5MiTj56WvxgBYSCmxpaAa5yoTRhR4MQY3h7fdzDuyR8TKaKvkbStX53uBwzJB6y4EzDALc5eANVDsCvTsUvFJ25f",
  "key2": "15JyH3eQvxcda95YUZ6hwBYaB3BGUd8bybK3wTtCv5xuXK1H6ohYJC3bip2V4YHzYAh6gn7S8YRUUbxd2JTR3Lo",
  "key3": "FPzuLegQy93CN5UbZdaEr699odTX2fV3bqWhFBz7bianSZs1sxW54CGFcuhrV99e77E6yBkQKuAwe4D8A42ZdT5",
  "key4": "5FFtbZdzNpnDtVFFccmARR5GKJainZDvzjcsZptUbDmGEThN8wPYXvdrekXH69VqQQ4wozjvagBhsPMFVUYtQfA7",
  "key5": "2rL8Tb3AMBjF8S1KNPBJuwZDzp2rxyXtkaVmp2TTiXZUJy8kJgJnrKk8JNgMSZuZjAhjdQATuijPrHWPRTjhD2N1",
  "key6": "3ravzfhWhVQBZwFvkkUtTx3JohQdoTFXG9oKNsc5nBmyMQXdWjyorxES1cQ69bboaor6PQ1A9wTt7mzH9GovYmTr",
  "key7": "SQ2FfPWu3cJ1boupWcgiBymAvBML11KfjawLkjr1Pky7k6dUCTH555u7nyrPBaEPVztwAYoQc9PMUvmEvBao89y",
  "key8": "38eXGd6v7iUdpFS9YipfP7YyaHnA65D52fz2VtqMGRSQjJAUtjQMs82pd1rsxEMu1nAJgvSkJxTSmPDorHPiYjZx",
  "key9": "3uLQu3DXfntouR19vEisxZmuuk5HRKZX5dc8FjPZ1VXVzcxduUpyzq98ARji271QgRmre4dhHkn7BUJdTcuCTG6k",
  "key10": "3mTHX1TaCHd6n5bFtvpkWepeUXLZNyBEJaXw7CpkBVHERj1TDjjS9h6xfanipwACKW3qqdk7pmW74BqahHWjmQtC",
  "key11": "3VNWC3zLoMr7KcStPyGDFNAtyTf9FLskLSAgGVmS85AQdTX3o6DH2TJyNcUGirBU5CmaBJti2j2PYxfK15Zb9gAf",
  "key12": "43UuvwXobNbXqZF4PBnxprFCNvDhMPU1JG3HFiFgWZfGXNibt9w8o68UwUpYwcks2i6hbBs7SWJruU9XZ7geQUkW",
  "key13": "ur9dYRVJimKnpcaDsSE9CUWU3K8syACoHtvphgTmbaNv4NqpaNqxoBnu8z5FJ9QSMtz8ZGKPfiQRLS2cQZtUFuX",
  "key14": "2hyu2BsVBGLALzJ49zrCajo7GX9u7XZ6zSbRD3ZAUpM7mqL7u6ymC8Y6iWc1cqHEKttVDjx63RjtHkYctgCndEQV",
  "key15": "31SsL5SAsBptaBGLWx3oGBpF91gDN475UKVbzQMgEVhTzX3UZbdY4VurgEdwQnYjhwKSMEEj9HfZ74UA4ePVUZVQ",
  "key16": "5N1YeDztoWEehGYUGrVRjs7BXsisfxg6HTC5rGGzYFteyixMhzGsuvZ267eDUEKLmPr79eNx3GpwZQM8SaWf8m3Z",
  "key17": "5GR5CxKz9zF4X2TmcsD6vbot7r8wVsGP39Bp2LUJ3nxpdkJH4FRwK3ZGPQaYReZSAYd4sXZvBgChFgXHgCAfn8yv",
  "key18": "3T3pypciNV7chVSLtvY1XQrPbQ5Ucz4y85yucwtKKPmYB2fWTWwXeNWxNJrD2KDdQ1FCQs33t1N94DMnzqQYzdnV",
  "key19": "2gznBdx3sXqRDFejKfWQfPkQ8YWCmuesfQJxrk1PbWyCu6eUjwiXov5WGcpQzerDMK9RdEhm5Vbq6wVd3FeD3s5e",
  "key20": "4BgUiMLmdSF3BUzfAMAvWokxteReYgaSJjDLLAh7oZyy5zgn7CKz59XvPAo1p4SGVbGQzpeh4dChFPzBTGm7a77C",
  "key21": "5JebKgdSGmPGyQMnfunyXcxccQiwujFKDh7jwUTR8hCFurbYqrqxqZSpvPcu7AtyWamgXH3V6jpRHgZXkPLPUHVU",
  "key22": "6423sg3mT7MwLEnAUSqxUWgjRf2D4RP3G5dKH3krif215Y9hj3fkooZetpo37BBEBFe8vssxSMcvnvKCmdynbY7D",
  "key23": "5nfaHDtD9P9TfoPWEZKzMiAZPkcJUmcMKGbtTW3nyoE7g9jgPGik9c9mkpqnuth6qL7Wdd7FCK7ymj1aS4WnbLao",
  "key24": "2pZWLW2vY6XACmF6D29gZkHvxARWVWmEk8sPohTRBjNMv7TtMm6zhewKUCiSCqaQAFed6h7m8sQ7i5gJA3tZMf9z",
  "key25": "5R6udJLzSF7254oKsiNTEirWoHqyHWjfqHffyd6EReucDxFmoCQgepbUkZ9U9nfeURndeqegD44oQyv6jDhLpDjv",
  "key26": "2dcWmFxrmpm16x4wXS2cwPa1zaGtxF6XfgZB75vdbbtT6pUC9cL6xNVYX8sn4LwTtjQVaZCkd91Phdwio5yYW3Mm",
  "key27": "3pQDsUEJfjSosuePVtPmMye3HpQ4mbJ2swwKm3ATtCZ5T7MUyUdWbD34ECTrQr3qM1rwNBqHsDhHxMpR3p9dmv6T"
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

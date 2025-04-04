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
    "3tet7qR8xGzfaUWv1rWhdGo4ouHBEiDG4FMDR5kgGwThmNnEWC72wZoDaFuYJB86fugbGJwCG6tvCjEGXBEx5QN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52cN4ZZ7hgsHwtJakmXjUCVQgZ6YoiCPzvqUqdBKguWcNyzLL6rQNdbACXb1Riaatbvtp78wP64kRYBTPZkoBZ9X",
  "key1": "5EeQeXxdx4JaxAJUUif1MsTPCfDM699DMJKGJ4w4Jdaw1tEVYHPpYEYChGpEjpQRiLdmkXqXVK23sTirrmWjdQ7w",
  "key2": "gD6ZSAYrkjzdQRw66i6MDGd3TK8oWRkYfwzzjYUDM1u4xFojztMyRo8Qmg5bG5WKV4dStHUqS3GFZB5wEvTqKtD",
  "key3": "Ea6GjEzXfX1C2KgxxFS9nyv4Wna8F5CePTwde2wcr6jLdhLMjWLioD36ayi3oMu6qhub7xjRHvRZCaK9sTmGdMq",
  "key4": "AE4xvozAxR2DFfELXJERoCLsa4WrDZ6T3n1diGuucuJDAom28EBWQo6sENsWjPAGvFWYnnp93Heggft1YywL1FT",
  "key5": "3mdp9dj1RyZch8QpELE5ScNiKjEUAJeCAiBq5LqD1RrxQfe5n9HXcPkU5HkDW6GUntrcDVs9r8utBby9Tv1C49UL",
  "key6": "VAWZTNeqHTUe66RDuDJKgLqNmE4CNkU3EdvjcsJDYnKHq5R3fXTqndVHNp7wpVwLuj7p54nWwcKDBcaXWy6mD9m",
  "key7": "4YCdHXzhzy7u4wvcRKndmfxqWmV3mp2MovcDR6J8kk1LTSjK6ufrwdYz6g4JnbMgkioVHNH3A7qxVcbJGrbh1c99",
  "key8": "3q1zeLXtXNoV4R69yQhMfXHXER1GUt8jACNjEiu8XfaNtNZdbUwvv2iMjJ2f6SRzbVB2gSevfBxLJzegT1ya4gts",
  "key9": "35Xck2y86ZUrKrJ193WNYfqBneanMLFVCjv2LthKsnq76uuX4RjHfBah3p1BWx7VdBuAFGybGD7kxR9z59v2Ek5m",
  "key10": "2nCaMezgMqCigPV6omxSGHkm79EZCbop7j2vDFQ3xr8enGnB5EU7yuUFrPi7YqhQVynCFMzbZJ7Zt3E1i4sE1tUP",
  "key11": "35f6VVVwv2AYvsrhZDNz7Etn1ZniJJSdYhBNvxyxKDnFHAtApc7Jjoxhy2Kx7QUWmjsJAnsKwsVavVJtotjpq8cx",
  "key12": "3zRQ6umu5ZesqBb6WMsDZaGLoNsAun1o9ovyS6fuZ6zK33ytKbeXyJ9wDZ8W3pKbUUj46uAj4Q7ZbRAtA8PHG5Ru",
  "key13": "5GhnuJGugd2AAp9Aojnx7R9VXN3XQRyUCqsbQzpPaNs9natNX3i3JpfEgAWvgyNLBXk1CAKdDFcsLRx9czG5JdgV",
  "key14": "3aisLcr6YKynhD37E2EuP7p3U3Myojw6vyc7rbfvvBxTWkHS1iEdRiZsZ5eT5FAADtf3pwEgn5cqk2dAk96Zr5YG",
  "key15": "65Lspn6q4GbB9X5BdMLWrmSCbH9Y8a2appXJoCKqwm5pLfSvg34j5bmsXjASDBtyYgkuZq3d9pTzpDCwE5cgsXmH",
  "key16": "5MsiPpCHNshn41AtpRh5h11FP57sAVGBAavEqKyyB7FGvtLBHPEzgiZaQC75ZrUf8iYrmGi3YJHTLdex582QfyTF",
  "key17": "5s6idomA4L9qVK8s3BKqhsxiWmKLkqWRvuXZaGg8zyBcDkoXvCQqhfLhPgMAP82eF4GwgimVu6vVAZPYWUchGhNH",
  "key18": "4T58M8rTQt9dC6CKrkqcoRJdd178vVfyXdHKHuHu8abKVDRqmQDgbSApzaw4K2GFVTnJffTBoEPCXEkkK6EYZTUL",
  "key19": "5u8tGWMXNXmtGyuMafy9kc98maMatftsnyARnfPpB6wxBCZnbYwpGCgDKPz8crgD9QHV4mZ9UC2AyfgVHszCsVS8",
  "key20": "3RdQAvdgyF862LSkwBGgRQwSoJNfa2p3c8cub3cmr6CCoTxLZtdirEV9rJSi4qHk5Y6es3SADv9i4yqMXBm3Cky9",
  "key21": "5gsKKqF7FKTRaK27vrQoFgticxeP6sBJMozZo5ARE1PhrUMPYM7BDpzqhXxJcgsKNKHwXEjSsr62EEW9bvHj6xE2",
  "key22": "3Xk2k3dRz7QuWkoy9Y4XevuXKrT7DfUp7k6YrPVqn6aTjw41ZkGuNHy1et1ZNVyFCy7cjqdyrjj5kkvikXg63Uho",
  "key23": "3h7utccqFETiN9Sh4CvUJyh5Xyr1QcQFN2vLcWQB8XcVYVtHrpGVputn8kKt61qNdnZKAjqtBU1kbCnLZLc2GUpF",
  "key24": "36rjzC5kjsHzcSsdYgHKGZhv5z5JW2TMLRgaAnNejZWxHYztFuVsJ1UH3qpDAC643YiybWUW5x6fAHXQNQ595vor",
  "key25": "3hzB3DZMDDgCa7AkqpVdXBzgB4sZTsotLxYGbQQuMFxFanra17y531uVpqMiuSP2FRDC6bn6g4BZjm7d4B1tB5B3",
  "key26": "3h4FWYhWzBKuGEzrDYAyVhKDsMCVEtAQWJK51idsqd23w6r4WFrim1LWzxAWm2Vj3X5fraheeQW5V5qqHbMEtKzC"
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

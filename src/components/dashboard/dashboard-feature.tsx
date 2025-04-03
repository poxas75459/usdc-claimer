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
    "2bgjPQU5Uxv51mrcRtfwyGhhHT57g1zNRNPY1rpSYFFzzHQvi18FrHFQXw37apZJAx8iFTuvuAbDX9MTpWtRuj34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "278SoZbtodebVMd5JZNbMH8acGGvLW1NXgf75jDWR2F5SUu35uSi1LWFYP2ijHonqbT6rdu43xhBwX1pHHNRuiiz",
  "key1": "5k9pbQSieDnUwCe1ZKDat12txiCY7pqWziSdxCNj3VTJYi2P1PPzWop18hmWJAM3RY2nQ2fka1uWG9w6Yy3FhAjq",
  "key2": "4pA6DeS2p2Ee3cLzxKaCyTbG1oGb68k8zA7M8smARam56tTNE1hTnJsUAb4k2oD6JV9Yo63v4NVmfRrtu2yUfvHa",
  "key3": "2yXbdN2Ej3E3VMV8cRuBMKn1ATbnZpBEVSDaV9jdDNyhYt4APeHRTVtn1czV5tVZuyXKeLiAKRFU4mQ3txua5dN1",
  "key4": "AGnn5Qd3N8Qrthr8pnu2p3zE8fW3UswHnAGxSjyUfqG3Z6Hgy7VecvRBjhYRej2uj2aXtMUDuTf5rjSoKxjGLQ4",
  "key5": "3zNYKrx5BSjsAQ9n3yAkjKEKkezhYxe5YjDPqgQ5MP8jMpVyjgbkSusij1M1cGkJUqGQvxkbjuBxTQh5KyqEwp5n",
  "key6": "57btZpCBiYYzxPmrYmVypuQPwJaUMY2KbdXGEfg7XWkiZTWSq2oKiddyvJ9rjZgrNCWnfBG8r63RZffYe3qg2Sjv",
  "key7": "3Dx1JRmZXb6nVANkPEPmNoVbvsR5kDRT5mCQbGUotMmzLPfSRyTdkwE8VBFaSgcrpNy2ZGgXjVUZPEHk8SWev1mZ",
  "key8": "5AvjTVJCen8mxMo2TAvzvZKPabAMU7e34GZ2cyjRR8spdVk7YcP13fGgYiKsExKe3mTTpFfPXmw2cgj4aqbo1eUu",
  "key9": "4NZQz1jFwA1DoPKeybvyohgBfii8hkXjhvUiBwns8kPaY9jLuQJz111iot651yGa3e5fFT51x8LxmbchQB3eC2b3",
  "key10": "37qWjgy379YSTMmaaKUU52egWFHyzwMLc2NjmdkZezabJyRhwoXb9WHDKZxa5SVHhypewUt9SvEw32TRqaAUd1Ud",
  "key11": "3Vezw9pBfA2NoS2qGgmeC3yHqWFDmXGK7KtgKmayA9iDrza5ixrwKCybwj92eDdaeKjAS9fSSwS6JKQQFkwHUpK5",
  "key12": "2xtXHqdetyZLN8Se3x2tmbrXc5GUtAaWPncyAyECvtcaAAGY6EbEzTVitWzeurXPcJzc9385Di2nsQHpWs8TvyRn",
  "key13": "5Qt9FPXF5tBTjD8tT3pDgAeNkpGzxP5hNPwy8nnf6wvLSCnQtDpjEbHwQdjyfGYjF83B8A6mjfyT6NpuNXj3Kprd",
  "key14": "W8P9tsqMjhbm589GjFsRE9Ko7g27VoLqu1GhirkdyzsDzv3avWybRHzyAVvqWYu8Lvuuxbd591Pj74wtbNVRgeJ",
  "key15": "3g8UTnHLwLV8jFvsNnVy8v2n1ScYntcqrEj7j7MASvxTKpFY5VsrPRktbpUedi5NCZN5g6Hwv2jRFQfBrkqito61",
  "key16": "JJptjC4rAq6dN9W4o53HVZSbBd17nEujCr89VJRkGXHU5XAYLHas8GekDpDaf2TfK8FgQ6V2VVY8Gm5KRVdvYJA",
  "key17": "2n2e9AaQLUKuQA2SXDETxrVv65UEJhsBTqEtoyjR8WBSQn4bP9HaZggfLNW6sx4eNzcZPMKjxd7dnVGTi5oYTfkv",
  "key18": "4iBeYFBv7kLtUm8C4JsnXPizamDkHZFEi52s1mCehrd1o1BBGvL95MP5ude9MCHe2fRZVwNFrfvjq25N2pJsuxze",
  "key19": "3uNErduETMRvepo8rNM66cfmB85E9ZDsh3RtBQSHvu38zKZtZdXXJeTp38CjaNSuVxqhT2PAb3Dhrrt9ZrNdcK5i",
  "key20": "3yPihinmE7U5GHuKWuoyh3NzBfd6haQWgWoip61kpbpLQ25zwLi1KJLXH9o8ByCrYGQfnARygX8bWBXrE4HyJHrf",
  "key21": "1t2f6jEJGhgWAksTreER9xaLnnFV2ssZmqgs9KRDwwJtYWVbvZLYAKsTYa95c8uCyfJ8xaEMsMofQLDvksYopdQ",
  "key22": "3H2u7h4HyVS86dUSLKvi2jKq4HwuNdNFoeFBK3iT4qS1mRiH2B6fa1LpJti7bxnsWbAn3sAjvaurBTqEqysKk9P4",
  "key23": "JtJq5BWj9JafmWK8c1jgbvdPA2AGrr49TAUjzds1F9tXj663Qco7j17gCVRWy7VBN1oTqwnPp6tnUMLbhVk28eg",
  "key24": "2PRwqdKr6ySZeRL8C3RqYZEKc6sb7gsBi5jL2cdEtQQVjMfdFEodYuVN6zn2GfS2EKkzcCxDKkc2HuPPBNQfS3gJ",
  "key25": "61C8w34SYJMUs8iuB1HvwMzYTm3pNwZDENN4RbTdhssBUMtJPCLNLrrCT5s2znz9ZNTPoi8f3aN64E7f6eH7VpWy",
  "key26": "59CskvzMf1GxEYEYUw1jEKXuEH53cqbJKgXRrgcGCqc8cZkeFNjifUVztPQ2HqCknxMjaP3acybroBfU34yDr26i",
  "key27": "2Rp3qsT6vd8ZdsPDBctq6yoey32Ps2CiYfRuDRunqD1mmVSN3safvPgd6p4LohvStksFb7ZF1SJfV3FtNwxowaRT",
  "key28": "4VoqMYHWKgYe65srRqg9G6EWErDg2RWhwuHaAJVWVKpizBxumHcABsSV6rnSsjXpnxgyoacpbN3W8x9a3tWDSaNN",
  "key29": "3f9drCxgUYzj7oMAkLg7qvyZAFBTjPSbBVb9hAE4gzRMXAbE85xRi66yZW5xUNbmorAJR2JGyVNYDNxex47GrhXM"
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

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
    "5NLMuEqZExsC4vXVv2PixtATZAcFhU8fmTWKBwdtLtECgrCBDASCwUhygj5vHW17FixCxg4aRXTYqJ1Eig3kbTpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wFFDLE5haxxnqNnkN9cAtxrQSLf5wj2TwhVyxJTpk3ECwxrLRUQzG8mzmh3fdZjsCVeMqsSRQ4eME5zfzjvVVVy",
  "key1": "3otwmhWiwqbHiYUwRpAvW1gk263Ldgr7rcCuvC2qEsZeUSFfrhJ4GEsL8kZHfN7FgK3dRgU1oNSXfnEDJETN2ozY",
  "key2": "2TP5fAndaDVY9vRr4HW7yz8MoQHepA8zL9ujJA5BXfve2Kf7ptZBx72ZqnGjvSVL6fgPumsjhu9VxznSYG73kwwS",
  "key3": "2x7h1XiV5ticMjpRCNoMdvDdg9sbne5hmD6fq9jMUxRTHKSRY8ri2pnpcWZ6YVGKCDicsqk1dQNFFiYfu6FsK4p4",
  "key4": "gmxL1io7og7Ex4rTvUJvhsVgjDJriPVaBEfxv6ghuNtTAPTt1cwuHzkxLBURzozRaVSx5aoq22AgwA1bHfdQabi",
  "key5": "4WGXu4SGKNvo9Lit57811BSB16SsYGedEhSu9KkNoXFJ9vRQmnkMtRc18JLP3riGLefjPHkiNkxQyf1V39v5s6xD",
  "key6": "2ckhN5TQ8Kg8TrN8rSEu4t2EiM8pmDLbncJdQxcLf5bZv3pk1JMJLkNXGCnSW7oQJT5grc9APsBNLKAvPMznJo7S",
  "key7": "6mDpjpyxhovv31B85xqPQhWK7iUfJsPe6eqeq89Yt7XMsz4DaoRGnTJxxXThiNaVnxceXwXGtWcxEw6WCWihVRe",
  "key8": "nnFgrdtH3A6ASfAhVwuFVzM7Vn3dn3qCwmFncaEDpRvoJ9WJtKpTB2z5U7KZSmANog7LmYFBSpf1BhZgfTjb5FH",
  "key9": "3N3zeXNuHeFxLFuhg9bPNUUQKHZJzosCdsx9EBeMrojZ4wxgJbd5p4E7YajAaGKySyaoWRpPzdtx4jWoyv7pAm5a",
  "key10": "43psQECcW5dnPvCJJSYPPYdeLusDYG9HEpopuCBZN3fH3CzPYYU3QGcvwz3n9y41khYtaZaDck7FMwCB8C6i5wR4",
  "key11": "5GXmbjTKS1tEDG3m5nMAH8uHDPDEks6HLgxBhJo5D8UTJwnxtw5ywCrvn37qdEbkFnk1YwR99CMkcoBpfT4MjQpT",
  "key12": "5EEDS8MVcUL3R4ERJPqRqKCXt3hhG4oE3KuWkcb7yXjJJMff69QkycXA3K5P3BNLdXsGzGndvrWeBXDnTYe4FX9T",
  "key13": "4f8C1Hji34fWn8mayExDF3mh9B4T2cjmij2vvZFhUj6vMmHVH13Fp6rADKkrvrFW3JuodFwwFWySRynAiD7YzxcM",
  "key14": "itqJpuT8TgxjNXXYouPQCsxTBvHmAAivVwtuzrzU1Vz2QrkKDQPQ8VTtPeAv4qRnijpvJ5u5twUEmpb2n2xgZhn",
  "key15": "F1VPWPKUqgDqdAL6U9F1Q1mYoKbmoXkv3jobHGpea4nHCsgF7GmB553kUXywmNDNWyZgtxwEoKzX9MFzxQWxW6N",
  "key16": "Sh5DhZ2Hfy8zvN6EZWecrydM443doDyYHTJaMFwYcTZpNwhxFS7Jk2u1dokQbXpJncRyWJ8zZNFNAzj3VvsvNti",
  "key17": "45wfdui8u3HocXkPSio9G8xzEhxD55HaAC2SuQp8h273xqD37ReSwRu8grdRinCu44UTQp3bfVqE4Nwa1LUvaRQk",
  "key18": "3cgNYWKNn24ct54AbpF4VcAUZGcBYcBdNx3FDCTbBbegRuWJs7t66DyuBTLcPcm7a8Ea74K8P1tuWwoLcXQqkVNC",
  "key19": "5kGGnfvQR1iPi1tKXnSkpRDMQdgazcpMULEyV9PQMYZRVkd98vz8Prbt7KCTp2F8t4VqsX4uHu7bQ9mAK3Wzz6Yh",
  "key20": "2Xugz7Ye2NGUJHZaRsYaWFZF3wiz3zpfDnzMHqMD2beJah5RnjUqFX5gj5RupZichQsZULVqZ4mnKmMdvjwKsbBW",
  "key21": "3hVjgawLPW7CLoTmTr59kpwUsYX93AxUmLyQnALgs6F11KDzdpFSmo8egdy9uJwBihpWcZNvUgWvDaxzyvjr6FpV",
  "key22": "4jF3bR1UdGXfrjExTHgfNMS5JmiCaPueeoDZKUwHWB1Q1zC4oPgBKMTKDFyk7nrgSsPhMDWoemZZEDVKHXAko2RQ",
  "key23": "xFruq2FBxMFeKVZenM4P7w1GYMgaQtNmA4mvMniaQEH9xwdtphYJUqvVPK1p7sWCyAtYSV37yP1tGfGya7mzU6Z",
  "key24": "3iVzc2rYfjhovY2m1q2KaLsviLP5mV1W29zQLftbYq8iyhroCfSJq8ggFgQaJfdLBmV7e2dgnuVsbN2Vae1b6uXt",
  "key25": "34VikdJw3qKejdHxarNLGXU1rXAYAbmUQH6sGFy9BDRwDsysiUvtnpDWTWPvCsRBPDXm17QMiiLuhpcA3Gddavo8",
  "key26": "4ouFZ99SLrNd3jT16CKF8zmAWqY3c7Ed55x6i2o3Qn52mBJLVhJmEa7zz9Na4KWCazcDSJNXKwD81j6TNW1qMJmc",
  "key27": "59AEhDETJGVH33dwRyTbtmkUXUzL8QqdKubDGRZDSoixiMozTA8GjVTUAGMurfH1EWp19aEAvQi4jjFm5uQscjGh",
  "key28": "ku7KENQfokE4t9d2v4RH2jEMA9nJBU8hBca4UoBjkCbyDEzLvDezuhd5Cx17PwDzhRi5zDBz7nTF5W4T6jQ9sCM",
  "key29": "53UQiyhXko5qVDMFakn8ByXBdBz7raH81u1gHvUhzzPhYLa9GHefsESSqqgW6t8ZGB1nTbX88o5tJ9BoQhBdTJwo",
  "key30": "2YgpvTPkPTNfxoR1taceHwDxVMnK7B9T6KqVpuaHX8W7XxzchnDZjX2fhYEHWYKgcQaK3MNiPrsoQCiZEogtSF45",
  "key31": "3sxrzQCdbAW4LtAkznCG4xWze6bs5h7kSuGj45ByDyr8e4VrsN6zjP6N2SBzqXaqbUvbyS7pNoh6Wt7bb1CKaFZU",
  "key32": "2nbM4egF9xoefsnJau6NAhoFGLNMD1c7pwPQPDEchbC2DhKfpEtXuGmePzu6zuX8qBP4zhFdwwXnmvpteTpR4rYY",
  "key33": "28GE1wJWWEJVZ7uMNyKwcKMkkpS3CMtgZJSDuSXcekbZRbvkm3ytkCweoPMCwYm4QuNP7AWo7E9rW3VVVveQhrYq"
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

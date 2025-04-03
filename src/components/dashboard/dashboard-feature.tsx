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
    "2pnVfCou463n8qmTj8bS3ZzKkZqbxmchgN5jbaZdkQ8zYGPgmpwobY7ueqh8pgpoReuyg4ajGeX7bJDoTKjp6DF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mESvyZuYqWbAGzvFyLnzg1PoQ1UEzPLpfp4vzsxJzZetp7Z6QYQhyWjLUeEUaoygC34KFY4qdW4G4r8pxxarjxx",
  "key1": "muFvqB3y9dUagwKV8jNRKSQxYZpPK46buYkMjeMSCz3XSWyyGp9iHLgwkMk1NULpC3WU9qzQt2tSQFkcY1VxaMP",
  "key2": "3UUbRuvudihsZsMZ4zXNKbu4s6qHfE5kdVPucwRjsE4qw3rFXfJ9aw2S9v37TfKzyLi7mk4Yo5zwycsbD21CX132",
  "key3": "5ED3sMPZ2fGqqc8zBn7NMvUxgjs5cBTcrMXLz2xy9sKzruDK1iSDL3dwdZeP6EyCATw5dHC7hnuQnTHmJDvYAbVn",
  "key4": "4CjxNgppBp6b1FdS1rc5VEEkmJJehjbz1BdQ82MQybQzrgZrJrWNFbgVeB2ryFSnRcnCuaXEgKN7xFhK7BrnGPAq",
  "key5": "3Dme3z5Dhp2RQNkbySk4qGPDVUdKTZ9nkns2YmbrNEmxiF8Uucp6iQfQbAneie5KueT5rMp7Bh2t4Z9JqLCzSS5E",
  "key6": "5hRgrpSwzg9xkZnXKDx8e3QP52o3QJB9MqPNhn8DRP1ddhKoaNAxKRa3AAsn33VtfjTxXQEgxkq27YKGrT9vckbC",
  "key7": "mbmmfteh1qm1SuJZ9ap9VUPtQHaiuCm2bLeaaaVaNNRAUNrxFYotBFf1aFyfNoq6TWSj2herGmBc5e47CKm8XU6",
  "key8": "3HMayCQ5bUiK1tF6tpmp2Udhzp1wS4gfyQS7s1jZsjmW6LEi2atSFuCUvmgwYNiWRfEnZMEHc8vb2dBEVsnFJHLM",
  "key9": "4VF5drEtPGmtm8G6VioPshnA1PELs2pFYrf2PBQrpY72kSi4qx7xNQk1X2CdkwusGwsCRcmwFbc2JsaVHkkJ6wpX",
  "key10": "627KfzPMZVZGWMQh8tS4DjAGVjiuwnEF1bLVzxJedmy3wKdNE5ikEuCJY3n5ec85kYU2F7FV1Qa9r7AXzrmVQhkK",
  "key11": "574feRqFGmiT8TvMd4vZesCoNR3FyXeBU48eSgT6spwLJRe4JAMiQG3dmfiX72XyWoYqCgvKigsD7XfZhQbkMVgJ",
  "key12": "4rb3dL9d9aZkLkRtaWE66MTadQ59arZqHLUJ652CzvQxGwNuKWGjYDqjyNrDKth12CpYG8RLxEqEE1Zb8xtKRTJx",
  "key13": "2AkNNQ1iXE3fGEEQHo2hkFchYd4dqZZD31jTX4ixyZgYg6VoHKHVtaaGSgFM3hWHBvoDewL5Mo6Wq92JJhudX4Xi",
  "key14": "4UXSmg9z5mesDQjR8LY7yWB5zokMZbHYxRzZsBQXLp4NcjdYD9bxpCeXG4nytUmNfPFZixCbHB2JeMon9aWv5XFx",
  "key15": "4QdA9re6xaXSjG4r6G6j6axJU8phFjYU9sJwFpS1YhbizNfAbPczzPQx5yU2nyDdq9gp4WSRnSL4iuq9Zy5TS9hg",
  "key16": "5ZfkekfemPbNg6MVZ78qPujaWrWYj353TmLmyDWXATFbNHgL9HrhsmQRfpAsRHSBzCQn4hnXEvYzB71nr7JTyVNX",
  "key17": "2SbzGCRwLJVzA8m6YHCKp7bVfuBxAUSZg4RYLGeExuau6iHHSZXpgeQGPMjNhuU6RrTQW1CmP1TtPc893eZJMt8e",
  "key18": "5P7CiM5c3U8TjqNEqR4s68uQfBRcH16V4ibPqf7Vqxg7FskBEkw9p54g6cm1WnLaMrZ47G4p7wMyagtao38sjQfa",
  "key19": "3GQyRKiRoeqhJLikYPGQbytAmaxKYhELL1Dx7SKQi5tQvdho5PdYEbft6PaBtkSZMYoNUv4tDQiiAEpND7wB4fBm",
  "key20": "3h2L6B6UZGnywrv9poKwtjZZwVTQ5HMRRHQ9vKehUwKVsHMKfWqstquqNEaBQUzgrABPhPEiwRpSj7Z7ouxAiXJM",
  "key21": "4hUJXrFSqXGzG4b7t3MMUewiWBhnsM8LroUbsbp67fE9kgwY4MjK3QCMWTWxYRLNfuSjXogyYn221HJbAFk7bbpC",
  "key22": "2AUJV7n1ii7AykTQ1RRhCC7Y8rCGavQhqdd5sBP7r5bE5EqKmdmLkf2Uqnb1KYLajoDBWE6Z4jmu1VMxwDMeL7tB",
  "key23": "K3gngcR5q1dcHfhiB5QZfE64yn76dRKZXGfLryM1EPUcvjjobKJKx5zagusi2LWDoYWSdqRwKed9THL5jFzM4ai",
  "key24": "5GbWDJwoyCAqJcWzJL2sAE71fY9pbzfYQ2qoGDCRY8XykqjnJSsLngNfx7uF1xgm3YMuszrH2bQEQDYFXnj4inmG",
  "key25": "3zAYNwKQ84JryuhrmXqesWFfxdWXRCrE7bDV1pst9HBWQ7P17sMXeSvS7PHxrYGrZkxJt8MuhG66fEhdXPicwuGw",
  "key26": "4dN1fEcq8F3Rem1WgUbnZp5GRKptNzyez3e8Cd6PiXtEoBavC9uGJjfR4GMhufX68f4UGLQbBgyE2Y11uJWNwMBR",
  "key27": "2D9wnya8zu92pC95tcwbuvKKstMY9HMR7sjBfTMgAjZaZnoEXDEXNgJimmuUJoWQFspFgbrnf2R1btMhJLFtYWP6",
  "key28": "5CevpSCZfRChJRfxNk3pR7S1ic45bQzGxgoAuMgv4ynHUtWnnDVjNPmhiTo3hd6oBNpq7LdruLqWHg4ymv1vERNe",
  "key29": "4ouy9ug38cvVGCV7ACTcwyZsPniQkTDNxexVcTxHkJKixcf5BnXhZ3atf46TUkXHagUf8kSVzfXuPsN8L6rP8Pjg",
  "key30": "4tKE8Q8YxcRJDBdsDVRyUZwkGt4tD3VbycJWD6W6bWshDtGYtScckbB3ewqaAxVgVdPduudVSMiG1FqsMEHdaMei",
  "key31": "42tdJ1jGHTCvAe91xtbdSFPcQchmQ1hPgAfmehceLWwR6ZUskMfaDbYkgXG3fHJdxvx8C14ssh2QKYB32vSMUqBQ",
  "key32": "47VnSBNzTVuKJhrwnHTywRF66PVf4E9XhBLHzGGia7uB8i1iSvbiYba3Fky2q831SPUt8N2cnp9FrZ9PN2hW1GJF",
  "key33": "5dDjZMmoYq9fAGuKFXSHHJ7JFn22sXwDPUG3M4sm3YuYuYUUgQJcbWQno17k6X21MFKZ6SNZozFDWK6xHnt3rT1z",
  "key34": "4jLEsd68xxsk2QZ3ERo36Ap4CTmvjPr8QHmvDpGjHkMXTArz2KsebG9jjzgKMUcbhvKHhv1qXY3n8Wo8Mgs8kyso",
  "key35": "4WooXQUpNXB7sdiJKyjK2ntkJsbgmJ8596NGrfLXrN1pUvvfcHjit3xBgjQbv6mfc6vsqTU6pd7d2N95arLhTLm7",
  "key36": "2AjdzzaJu4tR7aajs9iFh6XZScqM9JBKHdsoeukvsJ28YMnh9nnQxC3pwpbZHiB6MHde2fDK3PM65RfBtHYkTQgt",
  "key37": "5Xt6kX3Z9vYR1rtQxLFhe1D5mLyieEFQBgbadvVzuohAbgkDJLjHBLNuKfPjHJietqAjq6ybESsWdi7bMPPbYXpr",
  "key38": "PwAAe7z2vHSCMePM8ZSJmmRtK6wR4TsAT5aGCFzB3mPhw64LDRjQkQm58MfpH55hLsMkJC6ZXujB4Xnpz3pq3SV",
  "key39": "3SdpVRSVVFY3wqAtmBkCmduLAxKEpMnXpHkjeVWvL4ZWKecPJmTyra2rDG7ejpvgn37bDVnvzuv6jMhTwXXD96KR",
  "key40": "gPiC3WwxyFhZUyBwmdbDeCni3aowHXghKeh7tBRLsnZmKbaaM58Vmu4uQ84bVzF7422zk1SEa18NZhHzf7mKsL3",
  "key41": "5crc5kPjhFHu13B8jKsfBdTKVoorosqbxebThKkmdgxypWLcehCNTWxS7TznJfE34VsKnDCKQLFs6no2KEPk8FWz",
  "key42": "533B49zuSyujk9dh7bYBvyoQXV3NPe6UmVtEwms9r5jbyP1EadDXJDGGpH4QyRREaD7SRahVHvv6DsLDoeGf38jH",
  "key43": "2q7eGiP1sdX96iq34BLssm5BCSng183rP3zvK8dCUtLcrpRqH3nfvTkoAK9jdM1EBxF1xZYuif2DbUhzAHRbMzs3",
  "key44": "4GxQma6sxod4L6LetrKiK1vMWJBMB5shZ9vDWudoYr4RXDknR3diH8U5vYXPcGuvmY3FzwPsyHsL8bBWNuu1aMqs",
  "key45": "3fEap2U81P5CP3jfM4BdbcA39fWJhGQTS3UnwR9LgeZ9tATbLXazPssYuvRhUVDfih9Ax4CwKecL7fhxBHeFCrdW",
  "key46": "fVK1AyPTZKCAd8nDSd9qeJqLiAJGrXgXEqekeskzg3NRYKKVRZgjtZSjL2iWBEfqcr5NM8vbfXKhZ5PR3ePRM9i"
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

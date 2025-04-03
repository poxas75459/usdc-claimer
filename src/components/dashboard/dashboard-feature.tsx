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
    "34hcancU5hpvfF4PK3yJ1rTBypY5P84jfGvBk5R1AGygUS5Qj5xR2qe7BZLxKQv9YJLk5YD3wmfzykUbi6tqhBwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfXNc8JUfM1y33WbUDTWgCXdxCF68r67HxsL2M6wGWbBAGAv8TyGhXsJHfWqCTf9YbZLEYU1axDYpCDjxm8cFdw",
  "key1": "4Yjs9wbevD3XiedKbFFRCeZua1WgnSrERg5yQdsVDCuDCs7WJgs6qh43EuwxxJtWbBjJJatXGRaZdrRhS3Nr29HT",
  "key2": "4xUbFZVCzsjuX1XzrRuQJ17b2CaDHv8RdDTtS7ccYVhakt8s9MQosChzPmvKmQHaRnDdTDVcpqcqi3SVCU4sMrMF",
  "key3": "2iamKTFKFxgv2TXVPKXEfBG3hh7NjNb5SfntnkXS2yq1PjkZA3ivJQMy2BCn5F29iCjmdgsQRLwHU3VmdrW8aUpx",
  "key4": "5kGy4yccwpeH5ccEtcVMdBCC7roypQYXbNUT2Ge7i4Z1w32SMqRuD5AQRvmVyxeLGHTrFHEcycdn7KNvK43X9Fq6",
  "key5": "36s6gipJsLtwaUx3an8Wdqzn3JRjfnUpGUFNFW9Bx226Q88ctc5GXWLtQrv68ayAsYvBgWHBeg18YLBPoiF3LamG",
  "key6": "GneQ6Ldf7u7EvNBXohZ1TBBo9fjbQdeUZn7tC3g97d1gutRkNfuVGGNyZY8htf5CbgYbgUt8bauJZGdpkdy5KBa",
  "key7": "4MGGAVs7M9kh42hdezP8rM9PutQ11G4N62AyPr8GceNt7Z9BnRFxjRSQ75rFF5HQh116WAF9tXeC7e5VSRB2znuV",
  "key8": "2rTChP6UKsgpY5KYcy4Gyg1DQ67EZXhNidSkeUTNHRnhUjsL644Mu7gar5jL8BMYtXSWKRV3jQjSLZDgHLazc3v6",
  "key9": "2s2sJPrC8Zc99TmDakCZMSvXW3LewS5mUkR3aJW3zvPLJxv6sw6vE5yF4uyKqHgB8hSqiHRq3r9UGb2SB1GG4Vbd",
  "key10": "5xjL9bxdDqki8mSV7ea3HEKDn8KvE76ciALz4L66ED3UE9MzphJLyhHjpxAY3wLHBBTFh3udHNFTJoEaCvbEk8SK",
  "key11": "2Y37C3CKhyQn7NqBiYBCoGbsTMgwNvMKTjW2xohwg3B1yRuaB7L6sbCqTxmumEidLQLyrykFGtZ3VwzveGriYckM",
  "key12": "5JbmifMkJiXt93ZcGTE9zsojMSii7cdYD6j66xbhonzATEqbHVpNr8eu3xhDCnCFYJaxvTMaY4qK5NnZy4zF1vBy",
  "key13": "ctg68NsHMywtLiG1qzTQeKhMeWq7CiLiVhCTfSopzLejvviFdzeLDWo6WnA9kpx1eKBXyApcFgxdgqcYNncY7HR",
  "key14": "2a15SkZW52nKn8Rpbn4tHrtPMmwch7AtgCSRFz8bYLPnEKLu8vk4YEQrBSfSdAagJphrqLiNERLEkzrP4LRk2Xby",
  "key15": "KBbA7RZVh4TM2MWx7p6Wc3AkpfHBuJZsjUDVLmyU8yfeFbTyTa9eAVyhCu2BFjirKVzFVKTurzkwH43htzweJfs",
  "key16": "38yZ2HCFdK4JQ2g8qvAGAijwd1DjLzgD2dL11swMqaKeVhm7BHHn94Ev3udVzDXU3cUT6eDmrzoPDBzyzw29h3iu",
  "key17": "kJ6ARKNnVLa77Fywe8Z9oWY65z7Nka2S61GLmg7CtGUi9pRF4pKfDUs1MXbDAot7F1MUZQtEdGUPq7z35md4Gqx",
  "key18": "5dTCnkSXkuDrokQY77kVmT1d3JyMQcMnbkZKbDfUNCpDK8ENpCQM6jXQrkM3CMyeRmoVdthjd1k5eVBzgarpB6n1",
  "key19": "45nyDCMZ26amkP2ccPx1f6DgYxw1pzPoJdLzorknvE6Yx6qcrsCNLkY2nmL4rxDuvqeWdfaztSzxzzjEJty9kSC1",
  "key20": "RzRdZtw7wmwX63CsXNcXXGdvD1b7DUz5ui6tiMsqt6PU4rHScz8z3GDcPmYPfazGzZifS3AdLuFF8PyBdB3jx9F",
  "key21": "4v1nnec7cevi9mpUCmoQ2LgNPrCfydVjQHMKb2Nnopjc3ZNXAHZzZTc9zVJQKNPy6DHG6vq3DMC36yqa7Q7qfZau",
  "key22": "23sZ2nxusDZkxvxwGkhYtk93EdzziKUiAc3HRQRrVrVpGWSbWejsBnmXR7qSjXAdcZLaWHREkzJvrTxHeRREb4qp",
  "key23": "2WnpR1z1ca8okUpTt5Asgatrv8NsvWmNCAzBadAnNFgKCK7qThb9n3MTtdqDanEds8G6sX48Z9LMThDEVv9m6hm9",
  "key24": "wpasRZVMoTfcq4ipKxvFQ7MDvgMdbeSq4vVsQYPms6gkWTAMp8aTZ6J6HVM8bc2x1MnjL92ejWqqyGU8AsuwN9C",
  "key25": "2G7dieTpuRM1bhxihoFoowRrxxyKG6tX7RunCJKoqWEW2NNbRHYtNF4u83Dx1eduxuypRSd8ppWav6AUbxpi4XLC",
  "key26": "2uWLNMrXBBiCGcpxtaxgHM7ur2Rm75ufAbXiGCkzc4UNU8GsdBGLbhSWytbbLnp81kBQzDehsEK8AfTwsP2G1Fbf",
  "key27": "5kLZ93AQgrW6Td1zwpMT1stBPLHxVHhsGwkzuCDneCSWjY2DHDhoQYS5oN59ccjiWcEbGozC783jKTyAobVq3tcQ",
  "key28": "5NEQVa8zpuTEfAwJET7sfV9bZZt4FGzAyrbiCH4e2pXBjbqfQtwmhkpRSySH2KBrBKpsWUo4kpymvKGChBrSAqHC",
  "key29": "4sJzsCVd8iZss2fQY3tn3dGKH5VVgWMMdaJFXNKh35JQ2PCShWKXxkvgCP471pw83p9W4gjguFFXXoJ7o1kAAJYs",
  "key30": "54BZanLW75fh7uK6yhUEtKgdTtSkVJGa3k8YgK3uJAdGgrmy5y4cNbQZ59xFpF2q9DjfwJ5tLFotERzea1bMPPkf",
  "key31": "5vNqNUu6uh6ZmSE8LVAazPdS9MH93zkX1rqVxuPWcEk9HeUwP7G9vLGacq4VUhdecYcz6vxjiW7dmweBMAJx3PWS"
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

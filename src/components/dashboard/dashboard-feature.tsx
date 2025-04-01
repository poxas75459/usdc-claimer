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
    "4RyCUeazYAWrtYhaxoLPDifLkUJFS5U6pJEfBsas391m6G8L9fMaqRqtLDKpzTYtESp5eiwLkHNKMimqH1SJfDQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xGc3QcCkz9Po7X6s34Ri82Za2jyx7qyiTfafJ4eA5LE5dmfSuGKmkUgteVG16gKoSNzDHXz5PfnuvPEdiY2BkCe",
  "key1": "5L1w7WZCwnwsuDS9wfi9XrNSgwbdVoVJyqKZHbcPa6rw8K5ZpBezd774cayAgRbzvosEPHcConKyrmfGFtu7jpWu",
  "key2": "5QcEPmK6AgujbRUe3zmnfYuPF5oesj2bg7pRGv8nkZeWbXvKxF4k9DyJSMhtT6EQDbfRqTRNSMRjeda29YSiJaT8",
  "key3": "3TUAQLiWWT9h3dCGkRvRHcf9YNfdBgfRCMpaidtv8xgBiBfqJ2jznrLu5Ms3fFSjioJ9DnDcQtzgXf7pZpYLnJLZ",
  "key4": "2xWVxbS2pmWZCGDiUWnwCXSnFxZVZ4QbW7JjZM6Dv2U1oenwtQrgD8KZcNKoaYnmbkqc4ssksAzD2QbP1dxr5D3c",
  "key5": "23HWfR6EnwcQNMCSYwpG2d3W2xBXeydadJsoi56Dvp1vpTXvBs9tVNAASCxKqzwQGX1PsqSHJpkPDAeWLuJ38aWa",
  "key6": "48rwMy91npzyREo4W5GZhThKYcXiCapHpEr8iZCbubYm4qYQRHBdSA14WRLj6AUQ55eqhAm8xebLx6fBsp4jRbBr",
  "key7": "5wYMdCZKtyJD1Wb5ReEFrx8qUa1X9DxM5dXvAErKPewYwANaxUG3GMG5JsWR3STnEaCkHxBNhrfgRarbojBCrBPr",
  "key8": "5Gg6aEXtJyXLDQrF1VFjqT8vhpW1nY4fCh2bpRkugRWGiZmGYYqJb6mMbjaZFUcoiKSK3UB3ifpLe1UXJmPqiP5s",
  "key9": "5cZQa6cGEiGTSUdnS5CfWr2DgocAY3v94fiF2fzbJBLHsBGYWoDpQMFU7GLJCZzPdRPCRRRYQnLjsZzeMoEGGybc",
  "key10": "3AJQ5bwFBzLJM6Mxc7ecZzELqb9QZgag9rV2Sz9yGZc2XPF4bdbvctRahHdiCnpC3RMVPWtpDHLbsWsv2qtqpyWy",
  "key11": "dp2rKMeWqSf281Nj9dy7evkyybFwBzBmw2vSXahnUsvuu6UhjSjmibWZrx4e5JdUWhQYLiWcRmQbwTZy14fBqGP",
  "key12": "YfLVi52R8Ecjhis8jthZkezemA7FbNzVkocjHg5ZLpoEui3CrrjLFyF5Lb2a1aRQdGESqf7bVjnpJFyp1Dinevf",
  "key13": "4rz6bcqfYuGkh9eQUpbdBgETwkULiNssNM2phivVs9L2McWYPKeCpY6VAMTSRehDaJste3ujjxPQp4N4cyLAcwcV",
  "key14": "3ELmuiZXZPeFwpvp4oUHRXHsBRtDaYhfWbs2h1rsGijRjAcdZnEDnJCQb1Vi6N7afDmZNqShqi1z6nM2t2LHUymf",
  "key15": "2ZFBNqhGtM8uSXGDdYV3522C847y9nUn111Ghbn8oCCZ6wAzkChWXEojZTagxPL29JkKFCd3JPkcxfikNpw4M7jv",
  "key16": "3Vi3Y88amWVbAtsLjoj4vmA6m7v3uGbwMpX8EJgEiXyCUZ4s8WCPsjwmySQGY3zqS48RNZqJnwc5hfMVoBnPrih1",
  "key17": "5iEC4tTusYpyHXaKsusJVjWE3zu5KnYUREewJwnBPWMSVCvYhR22infhEDEDJxGjNMscodxW3VHCJZ414Ekzuyv9",
  "key18": "4WLonfKru68JBjyLAZovRrczdwSYRzE5H764dizQMCXmbcbncQui9pz8B9YZxHs9fSbfR8psntg1rVoHdxzE2PGW",
  "key19": "5doEwbi86zpa532pWeEs6NeMjRiL52EqeEDJHfhL1apkN29hvQdXiah1QMHTvZP5qdkTXMNsL8gUrxKPy9NFzKi3",
  "key20": "4JGUAnSNhiq6wKE5KBhFfWrXzB4DEdKVwJrXAvao67W6E9iuY7RpZHWeXf2vN6TPDdvk8JwdJvVHJqTiegJiACZ9",
  "key21": "4MgQT2qNEveasCYJbbvi3Ua17aQn5KDjxvRQ5giQgh8bGPv12DUcCzPfyUSTNdVRcfxuUxFKptxNWJ6BSDyANXQx",
  "key22": "2HHKVhUsR3LcqhNwosc2zvzwhRKKNb4P5z8BjyE4WModTGvf8VcT2JbS7voMLzXRQyxknJafqjGHyLafZb1F2UTh",
  "key23": "5PaqdNMK37QKBi4sckxm1gXt4fDKoqJ5GyoBMzP5JT2azh4jZ8MJev3PjesTNb8ddviZ18bEaM3PQjkv7JzyeRc3",
  "key24": "2toTMidhqXTZrATsEouQvg7F8qVx8hHy1UeqFJpk9km4gjATtXC7uvWTT4K1EVrRdsB9WKztib1BcCzh78VirSBC",
  "key25": "2HbpqdTkcBEZATov3pR2dhHDaynYJCdurrcdrN74z9YG7hx8SvM2ncZcnvBbU9XRQUp6As3nmxTSnc51KmyquXeX",
  "key26": "3nvboyuc3g6twLtfnUy8Tviowk4QZpfaFbUN92u4CVK42SLUoXn46PGcjdGfHwS7KsDkQyjeMDpFWZ5yiPSvtPnc",
  "key27": "5Yuf7fc9F1a1Gg7bS7PgCJvst6iQvPE5hoFTatQ3FPG4WpThHgx2hcpoxRTmY43HGA5HRUMT9nng9hSHPHfwcLwY",
  "key28": "61Z73iH8LaUWbmZ7qosPFc3tEmtCYKVtuh59mzQH6HZrnmBTi38f6FMpAnQYPTS2zRJ9BX5dc8dn6QZbcQX524T2",
  "key29": "2P9UNgXQ2HnuBS1Sh6gYxC9Kpw7122PRX14dRbUc5Pi3gg7afVGfvYMQeE3t4pmMci5FzeMciPRng11n1ZwehRFV",
  "key30": "5NBtdZZdzHkshZkyk3UriUUdfjKTBCSksnjxi551Y1w56CvHx7CAYGowSqvAe4qDXJedDiQCZoqbcGJ2pZQiCFte",
  "key31": "3jC1rxrgsBwyw3xViE1dBvaJhAAaKqfww3v7pQUMZUAPLJuD3DuhDH3JotGLHCsAwnrFJcYdi2YsCig6ckUZDw1o",
  "key32": "48xbtMy2gfZcSEDxb9tKgXpTyCWxdBQ4eX4t9LRpie99ZbfghJPiW4dPXckMAszPcacHMDBaH267XM6BvNnt1Eqa",
  "key33": "wdVMqRqUxQnhDbm5hQ4E873uqAM1rQEi2LotiisqG9NBVHzjsFzXroSm2ZhHos6La7iL4PYuj2AZL9Ku3R6NNE3",
  "key34": "59qVumeGG4CHkNnoxfsrkM1gW1MPve9DwvbBrNteGS7nLYiiiuH5m84TMtDCD7mKTFPCTVNk4RMjDrUkUHSiYNjo",
  "key35": "4crpnVQocqhUg6aWjmtSF3nkCu1TgxWFjvVZJ2YREBEoVHm4Tf8Zy89STe4qeHPCND5oN4wKDq2aBpA4kiuPtoxf",
  "key36": "42ZsxdX4RuJEkUF1NvKFN5qco1CbxQABXDE9ieMonHrk4yn1ryrn9mD7LmVb99XjgWX2WSiY9NfrckWY6SHPcpep",
  "key37": "4dZAcxkgu9k3grrLc24ej9DEgun6fCg86aqgarUbKw15zLftQ6mxVg1y12zLLeheSvsWyALCV6aU4qym5AHoQzG2",
  "key38": "3Gne4GK7crMW2CroRb9urHtDFQ2swnzNLSnchEkUhL6Gaku5JAvnvjpJcp5ohv6D3PLKFxApkSTHLSzkoMgAeJpH",
  "key39": "Px7KktSXm3Sh99WoukpgXEsbm1FwVKrnYyKoAQfL5GxZBRbTQNP5KjHNx8Cu9XHKzMEi32KRdj416LJkE9JQMNz",
  "key40": "2vjyAkJijMbtwSMpBLtB8QuSSoTdcZUpCmdEDPMDhS18NSobQyLwgQX4xefKBF2MLqUjVu1GNRE8vcRyWMiuycnA",
  "key41": "4W68MhbZBikQFGxFGvmrUjWVyKTzCUQPGxMFSBkUVNMkb6EHFipHWory5zD1ZmYLcT65nALD7itEsrFc2fj248xz",
  "key42": "5gXTUuCnbFgZXUnrzJcjQ4LvtZm73SLAheXn1znMmqDfbNtLexaVM5vfHkq7LXdjvFeBzrLY7FABDC5W76TZqaYp",
  "key43": "626iQM9mJ9QbiyFd9G6JRjF6xe8rXnaksG1KpPMJpLFchKZvyZdEQvkpjyefubKqW2TM68KAiEgCiaEtRehtD885",
  "key44": "2AwEgUJ33WP32DWE75LzZVnRgeiZTQJGCH6gwQ1yLGhhUGEdaeTu51RQYohYXurR2oNruGATiJenBwAeDgmfxheS"
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

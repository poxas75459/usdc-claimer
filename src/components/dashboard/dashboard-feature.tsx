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
    "1tZiLSzXXVodxTybtL7e5cU7mrKSjoi1MAyH7kfsD6ddWAt4Gc4gJnBaBRTRNbdZjrwJeSHo7KaHEKDDSzWpD3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPyD6icLxMJPivPs2ReSYeBQkeu5z7RjpiKWvdMCLBsyhch3YGLyNqhpAWxraJWVFarhqF8n9tmqoHAzdH5jKc5",
  "key1": "59PnUY2CUagn2iBFP2qqgcRcDhbbEFx4Bo5HuUuzNx1nFZ59uTrLm5cyX4Zx2cuno5XH4wFjmAL65Do4cjg8kSTd",
  "key2": "4MgCcsysLZJwRm16jcLv2PsTrHBvf8YPWmJyUPyhiJRQUWhmdXD3aHYMYqQvEYJt2b7QqT7PuuHekSPM3ZC6NoUy",
  "key3": "5VATAuwPDXBoH3nADb1f9crBQ4y6eJS28GZ5qsAjoR7syBPwvoUv43ExS7ocJeHA8dqgbTRjW2U7tZpP1syBSUzZ",
  "key4": "LKjLPMXnUrMprKGxXvXcGYMqLNGD7MjNKJahKgBHG57iCUcxV4RZY6D73KRtNqaEKtbaGzFJRS6hyPpkwF2aV6X",
  "key5": "5Sqyh3zSCdr6sEkPX9ystmAC1gf7yfzuewFDW787odnjpMybqKLqMjggV5JusNs6P9yVwY6GaagiFHD5wiytcdaC",
  "key6": "2HHgqhVo2CtxijkWMRcDRNLrxfa1V4KKYAdMfMviZs3f5egVoekep2jn31GibSLGu7vDLzoC97Sq9dkLTQ1zHvUP",
  "key7": "2vGMfKUuwzaXW2tb21EM9PWoMdUxrv5p5omTwquYr4NRhPHft9wVM6LkYSideBxZNEHTHB7jRvCgrB6QbnsVdZdV",
  "key8": "35PryCu49iBELHH3aCRjGacuBmzr8xsfJeL6Y4CMcw1wtPf8ATT9nvJpRUzphiv23E8MnHoaU3n3iedhS9E5GTer",
  "key9": "5DPFSJ5n55XsobPE2Tht2VCxmJWxRNFPB5Ln8BeXVsLZFB1iqAZJQGUPNHcsx9YkVWv6LAV4tRwEJmXX9Ls6HAkA",
  "key10": "3SiUKKdgK3uaGM5crA2Le1nmYbc6S6RAMczdwDYEurs8sseSM8hPYn3wHdrQSHNdEm9mfrnxTvGkzgKog6LiXbNN",
  "key11": "3iaTchyZnJ4PEDaCrvJH8p5dkC4B6wHWsDsL9KnTAZCV8wAceYivpY9M2mbxzNdpppCbYGY485NhSMFSfUfq5Lr5",
  "key12": "2HT2CvcZkTBksjCDMcg53v2eje9dZYK4b6i2RmZM8nuR8GeX5uYTeQQBSK9EanmPByPBtF8G6sSx8toDnRojTDoE",
  "key13": "55Xr39oNtiseidt88ABen6gxh936kCsr51pizw4W5BUZ3XNrfQuiytwE3UGcx7a5yQuxgtm9JsjpeEn6dFAQhKrm",
  "key14": "4nqcELpGtZQyNBr9cvoXGrgbCDSZseW5idu5YrdaQuroU6yijsiHQL2A5Z64Wg9GjRnKJbykzA3uLXqvgayAayPC",
  "key15": "5FUydDP7TqQJ9rnqoMP67wMDmAttog5TMj22FbuGgA3T5D7uKqmqTdmQik3TkWpJkjssb6beuFhmXCGWAQYuUAgN",
  "key16": "4V9SB7jRzWahB7i6aebqUisT3Fpg7JzCFfJPStK1sdM56KTUW3E78qprMYqzo6boP6WPAMLqxkBVKeAp2J8Mbycw",
  "key17": "4ASvxWqeC7wdNFnKupSXbYN96SYFRTEBBNQkAineN9yHRb8r6RSg8zwn5QK2w5GRbZL7tiuPr2119skvZxdePXGS",
  "key18": "9jrNLftfRMG9fquf86EySTWBGoQzAsgxfVHbThG1Ltc9JPxDk5dMM3ZKZEi7vSRo3ec7yWaJh2qTfAKq4BovrUH",
  "key19": "4YFWRPysxNrAK5zpTLsyCFXhfKVdG19P66qhEAcweWks5txzSG9VVsBojUUyWNFxB84Lq8azXkxzC1i9o6yhb9ja",
  "key20": "5Q7W2mpZvgUXRNhAh9sMXmh1LMZ1qktrSv4Gz3aG8BgrjM2gqG2CZqgECMAgQguxvz9MT9hDPZicyLa99DBKV9RJ",
  "key21": "5pZYJSc1xVgCPnZJuj3pUghKuMYNnmgQkaMU3iDL9fkYQ7Jv2FJbXpDdt49phvWXPt9EjRQc4st4LtFuWwwL8Puy",
  "key22": "64Geqz82AhMWoRfrsTVWbW34n76RJQxnczEtbwBjd7Tiq3SpjZPy8XgFwna5bs4FkgwyLFhkyYCyFg3t7jgM7gsp",
  "key23": "5uMjZZM2hfGmqBpCFRuMD9dJ15AWm1HwSB7UzEZsUQpCvxfCsf6xXyXQi4jxDkwdVa8MG2D1Swy1ky28U1QPkkEb",
  "key24": "5yzgEnN1FrG1Nv9EGNjNLk25qPdnYoyLTQ4p6SvFSUCMERWGd6pGoAHTZDQkeLH2Hmb9GXB467jxPUmq7PgFsmcL",
  "key25": "36D3VNtwrSRC4hQsgg5UN6zHFPtbihBr1vdMBLwMtUaPkn8ZvT2z8nLUX5VG4yvbL49SJctwUW8xXthdrPYdPWvE",
  "key26": "bBFGhGXzX3DKDcZE4Bg58avxRem9Tyf9RC9xWp1rW3ZT2TYbdKuFZ16KLbUdCxfCPaAC7ckoJ9nEX8A1smGE4ax",
  "key27": "2mr1RiQgvSN7LTqy2AYoZDQh1aSuwXBQ34xJ4CJ5UWkry4Xt9NztNBZR82hHxtV5JTQfYmAK5ytnBhA5XNrmD8q9",
  "key28": "58Taj35wWKrLr6FR8KB5scQnDhuZ28uyGPvw15ALRexKZn5D42Y2o53vuzoa3RbjrhpPXEkVa4mE1cPeR5R1z5xk",
  "key29": "5vJ25upf8fTs9X2nQigppEuuu1d7m4DcycT8DZxfnGxhG3auAbEfk8DV51TwW95bmdJkkeR81YQp24faEjHxZggz",
  "key30": "GtAyve8yxbNwS3R2degJocs8RfwFQjATDEPttL1NPoS8S9bBbbLaDUHUEcmTyMxCWhVToUfJZyXrpnPy9FQSCto",
  "key31": "3jbE4NfsUCjSooyxQZuaWcJWG3kGda7DPfMmWju9QkWQDXh6DfgfoHrqHosLgiRhzoiAnjHDUk8dBgXx4SrsAYQA",
  "key32": "4ptq4XBwFhUYQbXhkiZqmCLQ1Lwib4B1a9tCF1dBGKingw3CZrT16uymxkEDm6WtWe8y4AVqupeyTjUefuo5JQ5a",
  "key33": "4duLngPkSRDEHapp6duem7LTpXX3PwrnqT8z9LF33pevVrXB5gk7gwwGnzfoiu4LgAm9NQswcE2prwZ58zm3MrXS",
  "key34": "3Ai113jAJZV2qXKCLT5yzZQMhHWFey7Hm3hJhjM59kAPKoZ9aAGUTHuBvqzQUhPQY86eVo61aPSBsSkYoGbo3kPL",
  "key35": "5PLSSQBkitfhPuyckEAMKTX275NXxQ5SPUNk5wTkuBRCCuVn2zcrkmrW7xYjKSVDm2DRw8yizKJTFZWbL1DomPNE",
  "key36": "2sn38fn3E6UGSUZYXb7WHAZKqL6vYaBEtPRM8xptjcsiLvWSyeUDt3opUTFdLEMzjtd6dj2xEXhqXKDThcNbHKdg",
  "key37": "52vmh5U9PGF1fcEPnvowBhCQWYFHJ7Fw6Ygfzu8QvaeGxvmnRM3YuHthyKFvzWrawvp4LFmYqHDTKcva3y6mFiaY",
  "key38": "5dkW2FHBEzxZrM5LndaNuxhpwmwY1apYEVvZke6gNcHobDcuZKiUmnEgJuxBWoEYmDCmENSbiGJDXcKiCh5eUUWx",
  "key39": "3ND7SZfE2MjSo3D9xWbzABpShieBk2RJ2T1m5sA5HGSVnVw4WEjDmjJL5SZ9srzVTbWwTCdRfeHdgv3DpYoF9sez",
  "key40": "2fYiwesvzR1Qj4rQ2fEq2tuoXkX6uiGoBRix7nYb3698Q8Yun6WmCS7MGoX1KKmim7TPFmvaPmw243Jafp7WyNJ3",
  "key41": "2jLmkH1uLr5yZfdpvvyxKhSXFhzq26mfkUNsYw7S8LSaUNv1ZBSqeTryv1TLtPPXHD7nxafuLGBKWyTaARL3WKKx",
  "key42": "3GmMsfB9isPh7DvcMNWGEQstsuDSBQqjZ58SJbbbaNEtTAZ5MSz6kYB42GKhQW91ovSibexqfAL7m8KiM9DWaGqk",
  "key43": "4DqhSaR7sX9UZGdPk5dbeD7ERBPFx9aywabJwvTtSyDJZPKVjipWVLu7MdioUQ6oxj1B5JBVpfx6m6gzMM2t6fw7",
  "key44": "5rEU8xYzFkoLRDwgkLRM5jexhfzvX5xsehBctA2otXtrqJbNibmEYzqyrnsmCGaGPRZX398879PRzgJdbsev3mPJ",
  "key45": "2tgKw3Qb5BhyWEh91yjYi91nc5J79KPqLxxxcfnCxXjsvEcnQPWLLQg2mV7JRHTDXHxXoGUNtZuL2cToULoGpKzn"
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

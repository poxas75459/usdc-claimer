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
    "5Y2WCfpz6BCTwNHx5NPR7ET4Sz2HTwTnK2iWTSXGy7NTjZ9y2QMzuuwbcjYU1bpBc9MLmmxcnuKeBu3NXDu6QgM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TUdA3iYP29kbmhU8fbCohqPtECpw3JikXMtycLLdUdLadgwTXkpeHQvU2LQdJNKa5bJwxEKTvvTWCEvR6i7JN3h",
  "key1": "2zC9uCNMHKUi8mVNGbMgUxfpQJxabekcv28tTa7p1ZexNybXaXXz3GVgXMAwDHsmp19J7h5BFm1QaeaMSZWzkDXa",
  "key2": "2Tifd6WnaodSHTV6bCvX7PVqXx6gBnN4GMtDAXeBUpDE5PHQcwd29SYi97FwVvBRWiXwFS6HqfRA5ccrY3nkDML1",
  "key3": "4yTJp1j4T4SdF2ewrVhJ9ZGTjBD1wZ4AEdwWs32Fq5v1TGEsBdZzRXj27TqDPLyqFW7joJCMQuf9qM6KhDUQMJBu",
  "key4": "2UARdBmmveTHe8tdLKoqxgkur74K7Hv4S9pzZYFcFJ9dXT85YTCotzcpvBWQCFLqdzgegcmBX2GoFo1VgTM5nkSR",
  "key5": "5NZL4qiYEFeP1kLb9viyGJ9HcKWytShqV9yTAv3uqnvRfpcSc4BvbBm8t6GTGZA2Cd1bVMHRHz7WFw9iY8ykTUq5",
  "key6": "5ZH28neGBYLxDuQN7Ey89hDTW99ABogbEbJx5eudhaGFQiHu1ep23FuU391XHTCSMahqUxi3HkSVspQD6SWoHJST",
  "key7": "3VUC8Rx3Sh57wEMzAxPNVzTdiCTRVdALCHiUfABmd73gTDawA6QZawyJDufWAbVXWU9w94sFud3MZcr2LLuzvGrD",
  "key8": "4LGYHfqjqSXh7SPFzD1rbLT2XdfMa7S3EztANkscr1rNpPY49cHtSSGT7WZ2UNN8SymGJhd5BXeARJwuUv3ToYx4",
  "key9": "3nw9Nb6PkzKd6grz64M4XjWNNWJWR6p5kid4WMgjYSPHQqDTD6VEZvG6hfaJvojk6SoJRo8tU65N11ERtUMbNGdQ",
  "key10": "iR2RpJGcS5ByLYwEucJSLACLqmDU9CinvjBQSHiX1f7E6g4xAzhYXCncwpAinmUfpKYRDETYLsqedPonqFqLpdC",
  "key11": "3gezXkGXHDmfBKAmfzoMfPuF78TEPQHvgJxCBKx82pjhd8qAHxMxhqRTd3q8qQ2HEXY9nAur536xPeUEc3y7qUEB",
  "key12": "4PaEsBWxPuoCBovJHiXEtpownYVzYdWK1ypjmf6U3Qxb28qrSJGQMXtRioDhBazoUW2QufWfzZ1r8QTa55W9FAjz",
  "key13": "5T4oAESNmuh3FMugezSndMz696GNwnSyFqpL24ekiFxwfewqowPYa9mKBGRpHKtLGXzuGqquJZUhdJKR2Sdru6rR",
  "key14": "3iYg5fSqVcmwAUawv6qkxkoHuv4Ju9xGv3TQYugS5w9ZDX5kjsMNmhGFvtJomPjmBbtASTHLpUAC9U65JyggLQ2p",
  "key15": "387apc2Q3DPSxwzWwzABEuh6H765oZPoe4wddTqt4mcNv4rZFZN9CGZUvNSgGHdVLUYNvbzfLvKSPs8w64pSKQi7",
  "key16": "5KVLMjkieMEkfh9ZyL5feNy2mnoGX7QeXc3jUFDYCV4XgGfujmF3B4Y3ugXtBhASPKLbqyuGj99dCpHin8fszSGS",
  "key17": "5DseP2zuVst3FwimNk63G5JyYq4Wc8YE7C8gAQSBwRbBMXXeLBLRLRkBqpczbynho1sAa22TKfjXhEWJdteSEvMB",
  "key18": "R9dkF51mFMBe5pirto6Ar91zMmRq7YuWZiQUSZoUFBzTHbaZu5Atck5LZMgAXDkb1c9EKyzky1M4RQrBGDitnNz",
  "key19": "5npypzAEwdZujihaFET7ykT76AENcQp1kj1nfdkWynpchgjUd6Rh3agTPpPqzPcpwChMKWjuL8L6z3xBWpgLJ1uz",
  "key20": "5Ax29eaMRtHZGF6Hkt4d5gpEirXpu8Ed3Ujr1Rn8h3LLtbAwNqhuFMsCVHY6jdeVCozoXvvt3MkPABDKJtzLgAPw",
  "key21": "5whKmW51mvTE6hhRig592aGUvB7smHqP476NeTmSYxQxJXrpKYobpmTZgY22CNWRna8PqeG57iGsPVm8P115bqZ9",
  "key22": "eWYNVs9MJEP7WpiKBiKeCsw5DJ8pB8Y3oG5vs3WYhBH6LHrGzkRZ4FEr2mEwJihThxQzBSam3j1vK8KaMq8UXTE",
  "key23": "UW5rvyjw96Eu1bMoNQaVwxi95ZWS8XWKDYsyCPHk9HB1KkEPLm6p7wPT294Kpx66rm5pKxvBcaBgNPuBnuWLEjN",
  "key24": "2YKWY5mVT7MXPy3xnyuRzWj72yjsA1buWsnz4tEWXEK2n7cVM1iSUksadAQGt6xS3zJCNyHDV2RowNC4CbSm6yme",
  "key25": "33PXYhCBG7yBGuhW9Bs6dAh8vzyce6LeFZ7LzPbQy7RiEiBHmEZ9Z3MfofpJcLYLJhJb1HrTr1GPLFrCSJSRX3z4",
  "key26": "eTUkgdnBdaqeoAnxZ3XpEbd19KScd2c578XyeVo1psarLWV8oSsfwn4id8Qkh8brFJ6X3PWtGm1q67rsPoKgSJG",
  "key27": "3hip5i7KuGfvpPHrYR3F1S9yngUUDsQ5NMKMVGg4EVNMHq2RRFcuk6TEJsLEPmzkLFukxcKERSNHPpCUEWsjSNqS",
  "key28": "YJXYXFeeWR9iLgvKzRcZyFhxp8tFi9zec8PEiEjWLex5wG8xWuaxzGqvHSAvZsfkPdfu4cZgYJPv1r7NxPsnmq5",
  "key29": "ggCcTiizvirNpRa1UV8fRm57iq74gYbczSYtND3oPyp7SZHxrkopdEgQR195ciSbwAeq4dtme5XKmg3VZv6QpvF",
  "key30": "5EJJA21rGpHiCpsrmB7ZY9oKayiWng7kzH75rWsGwFGdK22pLsZYhZt5bWSrjf5HM1sZTfQ9wwhZJ9SbeHwc8MXQ",
  "key31": "2cydsrNtpdkaYe8M6tZWR6mfbH7vDDXJHx33UR2YSMjS6WL85p2zUHBGR6yAhY2Y6EcA9uazvg9XVnqQz8PbLzHD",
  "key32": "5o5swmzdCD4rCq2UGb9LwhjzVPeRM6Yit1uDFVH6EL8ivEwggaVmqoFLgeqGsbpxx1vCyaR759KKzzXvgX43Hjvj",
  "key33": "yfisH87p2db8HJMHoFTemd77qgtHaMWjDTuUNtmCmfxWnz6Ljb84U38SQ5WaBFM3qnCBn1WZCmcLH7Tc2xL5r5S",
  "key34": "4dBg3EsAKPokYpxpmQAxA4JhFiztqwvyUp6GSMrvbBjwV76jFx37hvRF8NPDwwB1X6znHPxZMTvD7FuHy6jBebEd",
  "key35": "4v24WQb6vzBQXw3it8BrD87muYHQo4YsB1VVxGutfXTQBR6MH89fSbEZiX7xwxMxzETYCHSgvk6bzPApVLTfY5wt"
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

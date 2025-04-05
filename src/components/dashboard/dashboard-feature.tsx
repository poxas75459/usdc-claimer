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
    "24pYPHXPVSCKRih69ye2d2NGzv2DffW7UciaWgCqES7vYLvP8vdQGchAtsDx31UtWufxQWht283g25rUptH8FZWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZtSayGmXDSVLLLcqSy1q3uLQ4XSUHvqmhxWCRKJoA8gZyZ413BvrC3jBZbjG4J8hLdANX1pz46QEhHtEtdjL56",
  "key1": "8jhf8Q6gk5DJgksNvCvRo5165h5Nk6zQ5csDB4EsDaFZnNAWkg5jck3pNA6Bg5JkNbkxUfxnS7WVU8uKrEZi2RH",
  "key2": "37EUdzQs1idNFoCqgSfK8PhBwKFNsaZ29xtVxd8csYNPon12hy9YSm9e6bfbaBxr3VCvmrdK5DE2n58AAMhSgyqB",
  "key3": "65YewEnqagWedaGG6HGHtyAgw3xq2o5FAgAFEDRiZhYboHjdmMwbN416oKXioKXaZAMpUbuAehJUdEVb9NdEbV3W",
  "key4": "4NEahVJxqU3xCXmB1C4y2Gg1AEp7ufUkveq75X3rZqwW7Qv2w8fB27fYfXn4JtJxfG7jgnaiHfNYVxEVPkHgJV4E",
  "key5": "Z67hp3ALPocTAbUxBA7vYXc3MQQmsuWX3gDgov9fQk4GJtxNQUKtRSiGrGN1fereBP7z8gXx8SPEvqrnedRUBiG",
  "key6": "4BRUnaHAtgpbELb7UgCFtctEe71PBmWENGZTo7d3YRrpJFbYUgXq4P26DYesYVGJipaekqnHTEHumA7ZmLw5H6RZ",
  "key7": "5KriDpNeu357ZeMH9ut1r6WN6aSEh4aMmXYwWHKUfa72E4JZGzFMZXKaK6WaguSrVUABNvgRQeXamQ8BK8jvi7XX",
  "key8": "3VFTurLWeEQsKhnyqUs2f3Tokr56bdoHU2GEFQYvTxMibWRFyhkVvNgLqkVfYRzNua7TSry2VTFqatngBm5cTU7Z",
  "key9": "PWvoZYnGSNGn2wUzL2KnJtkryCAB9k9Wq1K7EfmZXScVrEhw3zbdFa5K7qfxW1iNX8yEvkFh6taU6WTnAjWv6sV",
  "key10": "4Y1bTvEdmjMDW3w79BVsQYZMwzSjJx31jUUfMjKHEzWh8Dv1WZwJPM13BMpF4Gz2pEsqZC3THduyBCyZezgWsUTt",
  "key11": "3GfaD7YgPcFvDN8qZnzwoEBx9gp1SKkKzWQxoBkXXwR5ZXufXkiNXqeja3HzQBhehKxsAKguNM1Gk9zbQb1s8oZt",
  "key12": "57ZiuAQzQLWLEwL1ZacUbiuuaw1Mic3MVPvPqCb4gCe7CCQGEfakbHTb3ovA5AvBAUViUGpWcGF1oWbe5v5qLJoY",
  "key13": "k7eKLkXjERmE8d286BD3FddW1uZ97ncsV5tviZ1PxFVkh3Ndfv1uPQqchPSmvFmXTbeMakiHcM7jfAEdGUy596T",
  "key14": "27XvvzkviBFghSf6Jk2KVe2x8pDwBQtLg9Mfrg5tomKMVqWVVo3gU7csgz71eCfnf5VrARF3oUnVzM8tnK4UXvPg",
  "key15": "5uE9JP9328Zrd6KRmhnvxiHj3Z1d6rrPc588CXEu37wCte4yq5WCfzhfzdVmpafrC3VaAVtdnqah81aaavHB68WH",
  "key16": "3E4hugy3ZjTtir9FP215VEPfbkQ834QypMjhPfTK2Cefbu8aVBv8GsYdi81xtMvyA4qkSYQoS1AYtAtV4Vxs5wyN",
  "key17": "2VbQ5sAAwEPs8vX9jgb7MyFike1hJkgvSXXpTFLtiWmXB8qkSVngJgP5waPiTytDyg14zo9rU1cqjcoytFv9VPJG",
  "key18": "4fZZ8MpEKa3keoqDPnf9YacbUxQwtTeAsD2pu5RRqaUh7EbSPuhQ6epR4pC7cBBh7D56Fi9oiw4qd62QBSjjVtQ3",
  "key19": "MDT78NMx2icg68cbBsfVhz1rhn6hQTtBzAu11pY1JaD2N8DLSsRW9mBRfF8mTUF3Jei4W1od8Y3V8XPe7cqofQr",
  "key20": "2SKDZM5P6CsjvsJPD66GGTWUxdrARANp5aGcPGZZPoL39oGsMTYZBDNenZHjCr5rqKDGyGXNkkmzE3dKJXjv5BP3",
  "key21": "NUM2Qmt9KeTz6i9mUrYyC7BgoLmKBrYhRHuAWP5AoRss69yBWEDgqt5HCnce93R8YPzj2ZhASDELtJLWtLxuBba",
  "key22": "2t5bgtodtt3G1bPVXmMfXnbpGKVHpqikXSgTaQiaFcruB13vkL9qAxpVxZNzNwcgY7APRZR3DTfm8gjfLXpprURM",
  "key23": "2MLyBzmMGq6dTkwFzPdRLTuXGFLgSzvuRzGm3ZZEmbHYKZqF2g43hhrB3rFdJQfich2J6v4JNQ3fdVwttQKAWmKj",
  "key24": "31dFuSpUWbqsok5SgUMiz62aVj8yw6jeBk7oxqjKo9ag72HWGc2EKao5Hb1dAYF588T1gGTSYYzfmPVij3ifoFJv",
  "key25": "t8HX1VCkVDALZPd1V3J8jH6r3DhQGhargXDJt8iw3FRHx1xUAAHcQATa4Z8YarMyZjyoMhPp8s3AziDbLYVvng8",
  "key26": "2pw8TEuXV6uvWie8Q7YQToJin7m8ZYEwigeRMXETKd45eyUABp1N9SKH2mCEoudRH8q7yebEdHzVX52ha5Df6LCn",
  "key27": "4PHuVKihdU2PwmCqHsWutE54QUmReKeikJrVwBNwEdeyTdpMW1t3jdkAeqpzFYwybdpVnYKAtaaXZbGFMfJxS2jp",
  "key28": "2i97Uay8S6AGcED9Jr6XxUasrUYqFPyidrgLXqE78BTyKnjkPJc25Erq3KUe1nWdXfoMJStam8Ct6QHyYGe958eg",
  "key29": "CCfekf8ewb1PtwgwvDyuwTtBXsACuUk9WB4vwpo2euW38FiEC8UPagGayKxE6Uhz8FhLGPy5dzgXQgq1P794kQn",
  "key30": "oiozDX5myf6g3Pkq9mHHXwVVmWoxxU2nhe1So4eopNiXWp3Nmqnh8SbZn4UHe5VLPqFy1H4KQZxc3zzjpKBxcNR",
  "key31": "5uMvakjaCQsfAxGjRRY7CLp6ePNzPAyVhu8PzPe6wyAURQEmho4CDsYGXxCkBy6sUTZtoyEqsuwdGaU8HRBkJSZU",
  "key32": "NqLwhNxFTAQFoJ5Sej6UrogxtVD7BE3xRr3GFokey6VxQWKTf9URDhbEV4M9dNiAMxFKwe8Um6FeycZDsEmtcTb",
  "key33": "5HZW1AnTepf2aeovXh2zq4ea1SSZ9zvmrnQyzbSq6pafbc5TigweHVrn2N4v4cc59zmHSoJPvi58pZji52UEtNBF",
  "key34": "26tF2Vi9axDz2DYtG1bUjiCAZZDs6NP48ttzPsis8w81Ebh2vrmDiHZ3FGXPUYEhHg8h89rfhTWxh2WqXKKsvd5R",
  "key35": "3NxsNM8wKe3QgjgaY2ApBGpuXgkHwVDNDjTmvSp7Vv3okquGDWZs1ZFL96NF8ZMnJjHbySVAr96zxCSQKiotziCm",
  "key36": "4GZyieJZCDkRPjwcF8VB8b81UgF4jC6mNbMXjscb6d8AmSmukc9F2MhEfYGUhKzq9tRRmV6ep7B2mXPWCDVcmK26",
  "key37": "3HiZTH3n6DYPc5FZJ5h43m5MzgNVvbiuGw3s5iWBZsa2Ek6eaedfd5hbA3LjJYNMkgzF9Qxh1FcNx2xbce1xCF9m"
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

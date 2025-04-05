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
    "2yFpaVuvvddNZzXgeGLGzLHVXd7UnbTbZGwZwRsiF2oMEG5cksueqAJtKwZ79M6yKAWXqM1JrfggRQ3G1USZEGAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Am1FZa1HQ7qGZKDvKDeBVzgJdAAVnsmL8SPPGEyoW9NTM28icYi5iWorCYp3dwX6oR3BHnAqW55iASdcadz96fK",
  "key1": "4vGvZnB4phizVfxdnd7YHj1d1M2eDdXjeqTnZy9Gpzu99oMJ9bYzJMaFGMVuUSNf1PsqdpfdhNsH4ER1Kb3fXkFd",
  "key2": "efhBtoNGfsLFRrYp3aq2NJjKNKEtQ2opyS25mLh9frCUY35vL2trgyGM3JbpsyvSVxzAfbvmk6iKW3jwV5JcBBP",
  "key3": "3iYoDbT5VLzTdHvacH8n95JfKpbQMRFxFNz7Xp5KMTqw1AKUBWWk6Q16wgdkVZnPxUkt685xVa8d1zqmykK8yumW",
  "key4": "5ydQagbtqLWRWFEFwTTwWLz631BUwdyaEQSramGcVxUPba3jcPbYKVCkEVRc8JTnsK7a1TxtGAFfwQ52NEzBjEBx",
  "key5": "2GGLinVdnho86brJB4aBSxdxjSngMxgGvjNWGXf6W468vLavi4tFUBUTbfbT2KXPQQEkNAEMAD6aPHdy6Gi68Ywy",
  "key6": "66SRdjbH6feXNfq93RZ6i7FaXcqrgavxJw9BtDjs2Sxk8bKAvF5cRreLWXgAHbmyoWyt625r2Kq6xJUjj2vYG4i5",
  "key7": "38B2jEh4Gq1VoKjAK7UptFt4d1SS3vbcQqmGKV7JvDVeLgxWThpaFH62nr3YZFU363D6tRgYdsA4rSLHhPepwT28",
  "key8": "5jWanZYDZqN2KtowFcxyTK2JWFDzr1m1SPiNkxrpKQqvDrBKT3hVxDmyspALoFNAYJUxsiTfmMYG92jMDwy8xoqj",
  "key9": "5nhRW5zgeiAzdyUkmn1mJpsQQ2bVGPXvYgHsSsQqM92QQqBJFExsB76cLnP1YQcAjhzdF7hqhPEXNN7swEMxGrbe",
  "key10": "4LYyTo3a5KKbfxZe45Ashxqjsw6KnbFqP7JDocZrnpf6XYBwH2K5jqeH3g3tzmk53uiVTFV84TXPeQzad7Gnrsmz",
  "key11": "5zNeSkbtL4fTv9x1VHEyaX2gj1msbpds11VtFSZZysPWvn4uQUhSMhqkec3BSjL5B9NbMB6Wd4hWoRQqKjM9h7A5",
  "key12": "2CiwSb5Ltm2vy21bdf5TjfXKW5Y96ebb7jsZZxdWrrnibfRe4VeVjrZZh8VzQrsn8cU8cWSH7z5ixHRuRdVedbtm",
  "key13": "cDfVM23nqoJt4GGbNJwGT3vYG3XvXPiCmRLn4GVwNwdv7AuDZdMM4ihwXV6DZuppVpptFLMAKg7StbJd1omkn7T",
  "key14": "2xeMmgpY6NGaL3zw1nrBk3kf84jPk8bLejUD7euyBNQqEyMwGhom2Fzm9q5kSnmh5LfPZHPgWtRE714fa4cDyPis",
  "key15": "DJgK6vbWQ8MreJ95L1usQHZF76gkzLV3gbsEJjK4xYMg2rtkbsdmScrcZ9TQU4bR5z67H5ma8uEBjFCZLmSCSaJ",
  "key16": "46XzkPLTgxVJocoddTVDq2UCekrz8pp7QrkN5FnPvrfBf4YNxq93GGocGLhDds6Zp1f81cEi3Wxu5Vcun4FNVnf6",
  "key17": "5ft2MumiRkR5a4ViyAwMcoaSk8HMvhozTJ8M1XaE6gDgXdfp3xh7BrUCZyZ3jMUu5JkxeBQ1AJD7pnYCerkFnmuz",
  "key18": "e9Negektpckf1Kaf63Y8M1Kaj1zFQFuBZuAK7yHP4ZgowNJrpj1Va2SzdcTeEoApPohBfHTwVNEH5SZWdEKkCKE",
  "key19": "4y5RrRRsuzSZ6S1Nd4VruknECeAnt2Zc6hzDWeBXN2nftSh1ceD3FwYfTCGDVJrS5pCSLLW73vTRbmbPWoXE1L4V",
  "key20": "4q7CDijMCEJRCvwVynoro8Y5qQ5pFRemMfuRkNUtVFa14TFJEujqcDYJCwT7FMZzZLaeHKTUgRSvgLJbS8c2JA9c",
  "key21": "58B5684F7rVXYcbdzMzwRvCA9omH2UF4KvYMTbYziZsiiDmhBHYVx6ygLTc6a7y5p4f6pm1ptKVumw9omnYRZQY2",
  "key22": "3xb6MBowsDXT8STkodafsQENymLqTFk5ZmAwUi8vnmpEEe87gxTphoeHi5H4YytHVy19M89NRAwZweoheQXswoMz",
  "key23": "3erKfcYyZXscYcatCW3VxfMep2JatWob7CeLyoV1JyGrfvTbq7AhiuW8RGu3ZJw1JZzthpaF47avhsV6jkCp9weq",
  "key24": "39Hep31fx5zdXGwTmS5KMgCD8C8ChW9vGZgTMQ8NRp1XhBeB5YPX8zXG1zz3G7ffRymoyogRsehebhMcFHh5LFSQ",
  "key25": "46BU4DNTmp8JBxXZHod7Mtk5oLicnqVkqhFkLjgREMQmvbLaRxcyFHkSPWBEGLae5NZeHBq41efm5VRtMpezfsSb",
  "key26": "3hJiUQag8pDq2YQ6xS4pSaQdyKkFoJ9kKJbyPBp756yJu3B9Kj5vzvWZobJMskAqyN5mVUWFxF31RY23HiRTcz2F",
  "key27": "HwpGGUv9kbn2EvMNeRNwBw9jjjiYEQAsh8aWNVCR55DM6mo7bfBP5BLzHE8u3qVXPrWR4rTApoGqkrNpL1v966u"
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

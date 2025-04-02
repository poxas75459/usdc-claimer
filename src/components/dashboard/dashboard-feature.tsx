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
    "EXrUsfB6iRvvcRivyCcYezGbtzQG9WQBjMeFvZeaEtvGtpoD5NxsnX2kN4wKzBdUqGyAGqe54nWg4Zz2NEdXWa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8jkDcmjqDaHf3cVMM7tJwbx2vGTJp6vWy6kmbo5GFenXwDCdZjnBUEueu449EhZaRiYsrArGzJYt9FzVjsuEjF",
  "key1": "31P1PNX6tuozUHrzFTkUoD5vK1Pb48D8ccr5V3facSXeWSUK4QvFVR62MMykVBTqAtFB2pfpb7xGhjgGaRnUyhbr",
  "key2": "4fgSwT3BZFLySgvxDDLu6ZkDCtAnKBReqwYCfEiwnyM81WzM7Lw3RF6kqzpn6XXvvvXGRh5uNYH4DgPCWjhjNJGt",
  "key3": "2Rr7UwC2Ha5zSoRkxWP1euGhYxqkgKF2Ru4Bu6sT9B8yJnuqUkpnqDSY7f5m9XU6MEorB1zS2ae7vaoLrWMKScQi",
  "key4": "4YXhfKWVFaS297QwhoL5HQjRuXcPrYSzEGe8S96KSjeA8EDoznUHadYobLK22RxUoPDR3TuMUiZLmP4ySMYUJu4R",
  "key5": "2eH1cvh1zM3qjCocmsnHWGz5o5cWyypvUS29bcdyK2iiJgmsHN1qQ3BjNmNFZb9NR9NrD1TbQsAKNj92B1v3iv9F",
  "key6": "VM5ASCy6y3LCTc6cK8uuYYNNNTjqq7LKucGKVqniPh9YTEkj28gymq8oz2zCU8rrn7E1A5ib6dKquHRYUucrrrv",
  "key7": "38449FcpS61y18qwkT9mpv7JX7XymEuePrn6qCoS1oRjNi9zxyiEChJUK8r9uxNbCTSWZKBgR9oG9utUDJJCgBo5",
  "key8": "4rr8XsrVYXrFTKz2zKufMAz5K3C583rkEhxpYNuwPLJRLpL2vhCPrNaGFTTM2goq97UJH5EN742Dzw3CWPY1kmrs",
  "key9": "2WUa9e5zwqChCpYTGsuZL1w4h8YfV7RKtN4vUfLjRuGnZx3vTyWvvV9YMMnaaoaE8hXFLeRAaCEnTPTVaAYiGLNV",
  "key10": "qj8QL7YaXLaAdZsVryvkkmUXBXhV2VrnbwYAsCct3t6dyhAAFhuQvJ8sznvq1cGvr2FRUrPQKmsidjWPe77RWw4",
  "key11": "4kaEFXQKGEdF68c8Vnk6zbXCGc7BgwUEVPGBkKMuacPr8qDxwy9zc5HeMBfgezJXaKveE1o56e7E4HQemcDsRzB6",
  "key12": "5BbwV5LqzPc4tmgVc4i1MCT62ufG6pxLYjWGBS51k2voQ6q2zrwCbE84JUpsSXfKXEBPhBoQcnK1x1ofQNWigqLH",
  "key13": "3zP7yHHCXwZ6RMn6NQuyZr6Kmw5jDETJXHfZyEaFDfCBcyPmRgx3ThdYoEUybXAuuHhrbLV3uYbhfvg8QHzLE2t",
  "key14": "3Z5SrEZwUMbHW4DQdf1FC6MnPdVnBvc8YDYfQsjnzUL2NBpaC2Xfix3fYtvaeSwht27o5MVwctb5qibDXBAcj1ZP",
  "key15": "GGqU244bCCnn5w4pnzG6PU7XuGfDJHq8b82U7EH3wYkBsFsrTM4f842U4kg6w6KrhGq9TACKtVoAx8AD4mkay98",
  "key16": "5z6mjHqiiBtnkXjfsZVWBd14suMChu1WXmJVKBotCopoaGpn13V3WnvfCxMz9r2Y1JrBci3z6oEgXRuaQp1jiPNF",
  "key17": "4kfmsbeFW8ZUmeXwqZfp6hgtm8XnZUrsv7XfP75fcg5q8jYKQz1AL7dqr7jrHDK2Mm3uehUDUe7RRtw7F5icNpbR",
  "key18": "F6We1peamcezfKnWotX2i4a3dorkYDSt3eiWLRL67zdCW5rza8itbcuaYuiyA6sRjhZXLAuyxE5G1FviU4psgPj",
  "key19": "NqFgSdaXMZDXRQ6cGreX3bJV87uJhZJx1rFwKMwekJgXMhBo2KpotPZB7BV6VF5rmhMTURLUSy8hVmCL5xET6pf",
  "key20": "4ve5oJ2UCgiTmahYdxu9p1YG9qy3zSTCoCNBdfTZ6QEB6Lc1iKkUNdyny6YgkrQiNZdVrRwxRw5pzcDu7JAZZpDi",
  "key21": "3eMff1MBrbP3v1t6tVdVx2QsvfXsU2A6Zffv9DCGLTq86eiiTix3kxjtSPCRUo3Kd4bc6Ab4MAGYVRPo3E8QuD8F",
  "key22": "5pSYJZ77UiW3pvqUusPN8q84qGbUFEZmyM7SKGBRDJeoLQD3JBoAvhqW3Zprb2dMWkvH12SUFMecW4eDKKbwDLuZ",
  "key23": "666Xs5HymDoYYPvHFmnjRjjVtPSgXsiuTtT9B3oVdTJeLtLvUt4bb8oHkTnEvduS8ioXKmppCsgEBeL4hNk2Ae6N",
  "key24": "3XsG72EnB8z6urVcWYSxT3gZYMWCJpiQ3AGPxGcT2bYYHih8wtVYR7J4AK4vHedp9p6gsCaY7CoYpX94zTw2De1u",
  "key25": "2nmAMfyjZ7SkBd8THVbQSuMjHxvaAbNX55iaUJbBVLFEabuLchcxFLpe4SY6hB9Hrjxo9LzDaKzi52k7GHDXHjK6",
  "key26": "MG2uskXHcitdVXgougJBNWD5jnhgXE6ThLJdGzrwp3DCEe9ckjzesy65m2tFhdKEenwnztjU3hgRSJfnQhAgxD8",
  "key27": "2XvfqoYeUEKazBm2X5bANDc9ktEWUPswU3mm8RUBBRQLNrTvGFzvdnLC1NNjy4aKPHHRg4AymyqViywtb8JbL5Yn",
  "key28": "VqZwnQcydk6ULT7enTpuw4z9iPcSQU7B9LjvYz1AuYp7WxQLc86bkVzP3TtrStGfQPaGnagpWDo6LUgcdsMHqBh",
  "key29": "3nkU4RLgYb8xzUr12mU7JXf1HF5yx24ReyTWuCuNaYGn8ajXadyasCvb1i83sMwny4d7cTNWgMYvRwMdNvCE6rFF",
  "key30": "2Df1jwutyrySj4SWwj3RbFLziTc7UfeCtUT7kBRvoJgcs8HokHe5teYMakNZ1oLrgkaD95h3cJfwuYFn3eEtsLs5",
  "key31": "5cYeipbRHrbyM8qwbFjvtWnpCDJ2bMGccWeNHZDcaHFrTDKcD4NpLhFkisxiZEVSDySQm1sLPKvkaKhWYzHMitUq",
  "key32": "5DNt3MW9BmN4PAtmHBPJd2Am9ToDdPHZBpfuxLsD4R7Y9X8nvuVwVrbx3cH6w2BBUd1uczFdjjBdB4Dtw8CtMDDF",
  "key33": "uCqmsqBsqLXw9vV9SsJfTDGPwNzAaYAGPqEtZG3amfpZS3p8azixJRnUYoVW8DfmAcRKQfWk4S9uPTGpVJKUFih",
  "key34": "2vSaLDMvENtXpW3ZNC4MtGMsaYw49CYXM3H1kkGRf58JVUM3jsFHdGztWTbtyDorrV4g1LRy6TCdmBHKJErBDEEJ",
  "key35": "5HqThQ8Vc6MBxgfLoSz5Gix3t7Ug8phPGNyPuYhT2jhFejQJ5VYfgWjpuDg1bCCLGRNC9j3utFjnZSDeuwRrDMtx",
  "key36": "3VabJhGmYUty1UL8vVbPpuvU2cLyGd7Sv3r99FZNeBskNMSRRJ1RXviMeT65tMkjPNgZZ7AKX4LbcSv2cnUH6Gk5"
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

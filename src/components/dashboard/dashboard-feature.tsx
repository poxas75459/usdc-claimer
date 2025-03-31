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
    "2K2gws2JgyFibTWD9MvHAN6kd2D3jhFXhLbfp1hbDZsDUxxFjivyDt4zhhV3Q7Wnvx78eZLvqt3yVCQL4pkpMV35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTgogxuZDisAiwUbGZ3Jc5JZAAmv8c1QoT32ZrFWwQ341bXzjzCbDomXycVpFUHrMqma3NwiTD3hYkHiAWe3VZK",
  "key1": "55fETWUCC2htMVqWfD11zFUkpALaQ6Gq1d8AqEqiiY5K5myMVR7hBJ4FkcXw2wfQw1DSuT42fS8NQECwmBZ8fbyv",
  "key2": "5GcmYV5GJuwui91dJzLdDJJjLMe24n5Mr6HvN4dgWsrVFKH1fnNQMrAhfnrDt3pDwa6XGCViG88FTwVbU7TGTG54",
  "key3": "3d3tMxX1K9RZrC56E5uR1HHGX7nnA44YGPaUMBM1QCYTHx5U1AYbHdHFK5UHQfodA56poMwH4dazTPHFonVMBdJ2",
  "key4": "3m2n16e7EvFNUp37jse7zYDbHBHoR8zHimzBKGqNHLu78LLV7oyJVXSYWoGnVJL5JqSsdiNt5yA8cUbcfws2qKM9",
  "key5": "5VcKauWoxzLa7tjXhhQffRXP9aNP6rkYwXfVNMQmYvm17iUrudk4boLZ2fUBYrspdAJcmzJf69MiZ39kWaN9FcGb",
  "key6": "4hgmZrHYrNxDAq6TDg8zCNW9CbLEt83teHXm5YAWsLknHVaC6Q5SjhQNojhF2dBAVXrMejSYmNU4hGkknpDHNuHX",
  "key7": "2z6bbBS5ZmQZTDakrV5vG8QgrjpEPeqHi7TZKYtP7dSmip8PUwWEHcSa5xGTdHcyauK1bMLaX2xaoibjGR2kkzVA",
  "key8": "2CXM57e6uEBnsa9a1aGWG4e3vJijNdCEUeS2yLFLT9Pgq69xvo5UWZ5ZQfTkMXFahSwfxu5r6FRTXciAx94dRhc",
  "key9": "5hwDFPrYwBYsinR7ZmaHeKfKg9PUJox6eD63QpWTb89e7bTrWN8LUbQ5zbfzGtHyf7F1PrrYUayxCf374gJDs6yW",
  "key10": "2NWdD182B3TrQmqa1DHXA6UsroHyfxiBj5dsgHVxTrP6WvveQgxHQ4MJ8CxWFyp2GKCN14HKEzEXGsrREY4ei4Cd",
  "key11": "378mPwu8C4na34Yv47U4XrF3GtsiB2c4obyaQ2vdr1JwCbNPQHtsx6mMUuQbz79aZMFwcce6UExtyZZ7omKhyPei",
  "key12": "2iGmG29XfUAJ6sY5ED24XnH6RtQAawv4Zf85gBSzpCYrzAkprtTn7CXFyar2uo7c6Rg1nwv8QqJYHM7dnQPutiPg",
  "key13": "2agMs7Nr3AtGg7S8r8za1CnLtbQbUGEsRPfZeKvVp25ZTvgLRip6mwXCApfL9R2nYKkqM1abV2DXeH94neLA8SSu",
  "key14": "4v1zgrsPPahKTgRLqJwXXUodNnFjtW68f1CEqqfeN3UHz1s7t36jiPzh3pGRetBLuV8X6Bzbq9szJuM45QujsuhF",
  "key15": "44RRRj6F7hmix3zz3zD6wvRACb2k67P4REEhpSPkCr1ocMeP2KWCuqXUKNSoE3tj62LyQyJbAuhzqr4VGU8qQ9ip",
  "key16": "tawb17bsuCnme5YCY88NxX9h95LToR3Sa7t2iyDfmxbZLRauZ6TvWA9rxubuBpUWk6w7DMY9Yu9r2pJf33RruuU",
  "key17": "5BkMXGzdYA42XrMGvLeESgh4NSCvbx7gaJ2RLwuSStAVctCEmRueGhHzoPWonaeTo2PynqX4pm6cLn65psqWDhu7",
  "key18": "3uuLiNgPKpY2X7P3Eq7xJ5nMoUkfNpn4hNfWgpd6jX6pXzrLDrxnBmSitk12fs46hVzX2bYcAdsvj4wbzeTaYnWb",
  "key19": "41zko39cDZgw6K6BKuHGRZhrq6GRUpYwoNFAUUnM1bzqtsn2jerLF8VbMNYWM99J1axn2ihBwasSypjBj4gu7K1W",
  "key20": "4gtrXN1p4FEq7LZhHtpqkBpptYsrGrEoRCNEDAaCD5hgFTDX875H7ne4uRzY8DNAwZAVRqPidBSV1LqEETdLbRsf",
  "key21": "2yobprjDUm8PBKKzUYKt4SUp7QbSboR6y2Cmz33YUqcqc9T2Y4wDGyWqoHQbsm8D4b9LBi9YXWN8cQ7yyf9hTfTG",
  "key22": "MsWN7gCf2RFa2R19edVoUmVr1mpXrmWPBFvpqFBPBR6XzpemcJPRvmnDdCJoA1QYLm5Z9giAaeg3wrT78roxKoi",
  "key23": "4RvExBX4bJZS15Ka1rAvnbG5Chp3g4HQMWZMN14j9ei23oKDNV2s1do19hiUHKmTvQJ4GWaJiUzzkmzQLu447UJP",
  "key24": "DA2KjgefLUc4tWQaDx4bAEZLu7RiV5n2M7oqmAkaDtsQpBKtY7NyNuvPYXKbLZT5oVPBSnBNwW3VDUDoMxoNtbK",
  "key25": "3PLVBmgrHYSo9DYu7awEBY2NCKuot9BerhRuHghoEVWpnEhPmp6aieFVWYCt2y1XSN17wZ32DfdUr1sBsrQKq6Ad",
  "key26": "47kAkLa5MJAmad9PKUv33DoHNpSV67977T6YCtNE5r8s3A5duFgBxmpNvejEsFdfnKTukHDhJSbze318foyXPAQ",
  "key27": "5WdfFL3e9n1bgkoDTeXLmq2tKD8gCtLtndmBi7FkzHTNw9MqkGQU2Ez6r2j2kx7k7i1rTn2PsJXn8Lk9b4wTiwjj",
  "key28": "28PSKA9aPTewesC76NdAsobKZr61eU7GfS9pWjqwncYuGRAN39FXDjDwP4C9Fgipcfvm5bPt7E6WnvrMPY2dbTTn",
  "key29": "3134fZc8TEafTDxAxsTBTRD9XsmtGSmafsZpGoAYUG5Cppzth1bW7rJH5aBEmTxFDHxoDwLGVv2gN5GGmNYnukx3",
  "key30": "2hZ22xH6yFwK2LaPa6h7SkHuheTazxRw1hKdDxdtncSYxspivC4mQiikBFkXCWXCby24scaNeZbceLbPQBSZDtrk",
  "key31": "3cVBn13Fv7i3EZxgwbCunCaJpCnim9wfxLxSJo658CfYHz17MNk8JhJSzcR3GF5STKNz9EdWx43VZwUuN3bY9LtH",
  "key32": "2okjpCKrcRjDjVprudbFT3bzroeWmnYspZN3EBpVyHHWTkZATszkbmZ1ZE1pYVNk5J8LZjMbuyJhafWY6Le2AP8k",
  "key33": "2gBASQj8w2KJ12gWzNJguRd6wn1KTbCL6ipbx15FY9qExeHFJkRMXFbb97uqS5MdrJG2rZfBy4AqAHUKVo9snQdD",
  "key34": "Yk4wrdhAnochQv8yVQAfxiXttD1E6YBYqS8iyNsSu3G6GG4bXckm9xzWs81THsmeZMnWkGKXgYQL8RVweN5TBzz",
  "key35": "3CDizeDRfyq5iFLQyn5jcf6PZd1kjFfu5FSsLztwmaQtQxApztCoxPpsiAXYUpduJhZQCCm8n72qBzeyxv5NuPTf",
  "key36": "4nz2RBkW2goqrbqLQ2AYwcxcVyMQRAvNYsmFvZa5VNadjv1pygpS5wofbgfyyMzfK653ve4EMrmUjQ5Jq7krHMAx",
  "key37": "F89YqeCUxkwqsLwjUTunPdEyu3FY8etWx9RLzMveuLe2Sn62roDEud3urVV8L2X3R592RW7vEWYuhTp9N1RRB9P",
  "key38": "5EZqM5qP1q9p6M6UwUeWemvkYvLbRbr7MWvdcFJ4Y5D3uygxAFEGnReUncdszqijEgPL41p1THtEigZKwLQXanuE",
  "key39": "3pZmXwBsBMjPR519p4q5W1axUTKJHehb3Ecij5Kax5ETzAsk8LrcQ56HQPKE9mcFDmDf2WjEACyeMqyGjzH9BkHu",
  "key40": "31HBKn9VgJQ6uaCqMDNdQsxXCzvuF1LTrXBZ7sCArPZfydAcETbszN6tCm9RxXpSKXqJM5sERjTwsq5FLpfmnqri",
  "key41": "32PX7cxafkQJqXH7X3hCHPjCeqbp7rCgABuFC8TwvWwYGSrULKQEf9h3AW2mZnQGUEXa4HvxnmasGb8Zh5QqbY5v",
  "key42": "2YeuJaxgeZnfmQmFRPQ3dy2erKnv3HsN6Y48vEYGzL3qZopvUVMvKGyvrkpxezfaCerUoaaYWd4vrWnXcSdXJwqm",
  "key43": "2s5GU1CzZe1UxrTmpRXDgg5V8RtumTEWdXhuPb4rwjUdYp22LhA7BJ9NCWHmSDuu9MKQDyxKeecGb1GzmZZbfrvA",
  "key44": "3FPJ8WfWsRbkA7ocZJ8yuzr2hQMFm8eSVQV4LdKrVyZvm58yxnsx3RtihmYBem6jHZVrihBTkULEye9fNMTvCVYy",
  "key45": "fmWVcQMv8EAM28ukbXcR1DyXNDZBfeh2WoWTRRWkczDvHVAnu1MpjjJ2czoSGAgyxCpDAwezoQb5tk34hwVcxU6",
  "key46": "RK6N9P6SkETuFe6qkXsa3L2b4mxfRoiTzbPLPjJj9FFN4CPdA5Ro5qeJSAJnWrQJngvrpWLarm3HYjT34w8V6Mp",
  "key47": "a6XdSV2AjYQqCFW5Fe9UxytQGR62QrBgYyjs1Ac3MEnL4ieo1SwK6PUL7m2eZnvYYmf2x5VeELjMAGP5X3hJUce",
  "key48": "22617L6Np1EL8xqdKqNxBN9Vhm1b4P3c1Ke4ZTqZwQ1vaz3u6B2ZuLKtCsQLdBULWyMEHoSowCDBqwLMqUjfvGZg"
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

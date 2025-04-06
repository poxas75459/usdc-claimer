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
    "5TtGaK26uzuVWyukz4hHNMPECFV2jSe9sRXR3E6TVhJAWEB1o8nU47Z3xb3KpwezhpSprHD6uNRZJ3zSyh3zmcc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CcUu7epuxCVcNoeeLGD4JWVXmbRuNmSoBDCQiBUNymFfjexKVCGad7EZTMpRDg5fXuoxWFDfTuXbmktkTYHxp1r",
  "key1": "2QXcJftLwL1qKKTfHfSvgPxXhRmBm2MyZpkde4ZozFDg9jj5716rCsLPxSpr6vTxQF3UKK7pnrkx45TqUDAXmi2L",
  "key2": "45unyNFqwFW3QaXHuxToGwNUTKofh6QAAEiajJ4axyLD7ApuExU7djJPaQ8xKfg6REMiqLs6tZBYLrHkzpSACMda",
  "key3": "5wAsQavtdHq9aZUhZiSgr2bvs5kEAxhVnN87ym6AsPjJBAN8TK4w6mQ5e2cAyz6ufMJh1CMcDGbxjPMs1F65qfu2",
  "key4": "KUcwcuLeEFkeqyMgufyyt1uuCFwz35Qc3BDmeWTnf5SDVhMzJzUbpjppzFjDFWQC4J1r9wSJ1ntaJ3zXKZ4nC7y",
  "key5": "4HXRTsxn6x7wMgoLwruWYeTqo1PYoyGTgYyBFFiPjGWrkmFYSjFnRMyNqF6XZLHgGQDrTu9aPPPKQY8DkqH2MJmf",
  "key6": "5tE8XULwwQaLZ58ojWhcE24x5Bz8UgzsDSPm592NZPrHuDzUTmLv2bkGgfBiXtndKrVsak8UwYo3bvjB9vDJesRw",
  "key7": "LgLQGBhgsq4G3KKBo2aMfYTVT824zmzmEHiSpDm2b2xwPDHoY6aRqMBnbzYG1Yngtai3gFB3RmFXZNJMQyph4H6",
  "key8": "51r6n31fNDkdGNFBKcTM1fi34ZeFyH2T4KK3dqs1htJHUrTbNmbXZme1rF6edA75VBHLY2uFdVYufWX4R3BS1mak",
  "key9": "3CtX8eW1rsk67yHzbwq8otrvx1ecDpXbbvF717eAwKCADobpj6G8KJhS2LRFJHhwMvzL8QRAWj2dhwbiPd3M9W9V",
  "key10": "gmtKuLxXu6cb1H29KZwRytHx4HcAz6ywhhQ5q4rbJYuGqxNdPY6tAq9DaFDw4kLEFapA46kvsnbgVyAWv86QKgW",
  "key11": "66PoCULBx8YUuuRRyqekU9WqRTz6wcxJ6RKkwmD6PEke2DRTXXnsfCQgjciAwuajH87qRvmU1i7GTjbGv6umeETc",
  "key12": "DDm1Yr6EqUaCMYYxX5KJDGH83GbM1HMJkQKoRYC418wkxUCS7ffntmv3f1tTgdQXFeWLowNSKdi6mucx9iti1qQ",
  "key13": "5Vp6qm9MAivLWbQ3vKkA2opcTH7LsPdFz6SsLXxhFC5DU8huMZ2cSLmPLA6fxEPpCopkSTgnQJfwu1iWLpAZPzE9",
  "key14": "52yUPPWX7SbfG6kSx9ySGrW2452NbpBTcZcUiUE5sidzqJeU7yvdpyS6HL8Wp29rWXgHiekBfPXJoxxJaTSJjLnu",
  "key15": "2v3ZhFajLVwEwWPMDVzYWtJ11vZzcJCd2SSEKmBSq9TdoiCT8UvmHXvyUKjUqgyjsU9tpH3VuEhmmTAouDjzugY5",
  "key16": "4qTt6XaANXDuGUvfHCjMM5dy1PCzByFooYDRnEAsJEgJybXFkc5VUchoAPAHguFWy4KH49EwtCEFyWSD8YJ614AM",
  "key17": "4CwFvCQZqyTJhFfG9sVC8fXiZykn3UN8NeJqiX3hgMmW1748H4FcsrwhP8pnZ9PHofke3amxAuJrrLsiKzrr4mUs",
  "key18": "5We268YyaTV9MqTCoEAFEm3ipoiRkaSLYBstK6K7uDZS3Xa7GLqZvZT9WMQajQufn4WsKaDQ2vAAcm7XuJdzehPY",
  "key19": "2VB3eKTaZZHxrarZZkX5PFZ824RbifQa2WcfCGcEkMdx3NF4EUQLYQrC4dwjckPgmAerkuW6UjPCTSz2uc7ryFMw",
  "key20": "NaccrZrumvwAMuVLSBXFTrYGg58WTiY6wh85SmKZsRvyL6wzUdvkrsyKhWMWHZ5ZWxPt3FuqBbMSj3cbD5UPhy2",
  "key21": "4eCLz77vHFBje24vvwJEzgFBgc9DzUPKxN8A1o9GDYBp9vdrAzVSe3vMx5gyVAZbHRojrxDwy4GibWwQ9veScPqh",
  "key22": "2FQbpwSBQueHMpt4gJx8X65DWWW9TNEtkFDJW8iRwhBwvLd5fvgS6gyoj5aFomg8Ch1Vj6uEyJmx4QoZ9iBsCqrk",
  "key23": "2Rry84Qyyq39RAQwxW2RcGnhLBzAXqwidiuQMdFKzBjNULWbAEKSVhoJHjZvCA3XD7ifrnaWoUjzdDXaZDoaKhK",
  "key24": "3BiANaJjer3q1CR1A8EkX3n2ctsMkxGaLYDY6sFfFHvMVvWhiLup9ZiRuuw91BvstseFcFxVt5FXDSmgwFV2BV1x",
  "key25": "28SFXuee73KjnZ1aHbvy4Xju15tMyf6bViHNPAPs6U5BJtiyrkEcb7n2bt6qKHBtdZoVMuQxL9EmZmszN581SraJ",
  "key26": "5TEphR5i8MpCFkQXhFYmR1r4wzBLeHBzea3M1uBMYmgD5MLaj7ZQyQ6bJrVEcHmDyts19j859XzboyLiGhcgfMMY",
  "key27": "2LRKw3sKYxjWgcsMsNQcPGp7ugJrdVkukyWmZXocj46mb3hhLLaDsV3R6wicrBwdShzfKTsSLk1aYSERzcmkMrNx",
  "key28": "4hTJPYYdVfFvPJxfXojAyQRSVspgxHLoJX19de8doUMW1nZ6zh5FJpzwT1dX6XurKyBujrC4EWk3RbxHDcwf4B6h",
  "key29": "542uoPayVdBzyctwukbqwp8fDe5Y2eSWRUGh9tvhcdY5nKHovBDUzM77D2s1tdGH7jV6ozkgGryXEohxgkcxpWvz",
  "key30": "3SonVxtyM1e6dwyQvtFvQWD7GRexZ4XV4B3qPR2Mxv6UTonyyng8NSgxrneJbt4jwfC4BDzSUQw49KppPWm2JsDx",
  "key31": "3YHWc4EtqRpuJjhqsABZ9QnAHwBypgRVFfx1Z3NBwsTZwcYU1LW59vBjup5YbiJAMn21ck9otp9YrcWoicSsyenS",
  "key32": "2s1x5oHTimuK3HGNFVFPoD63q6sgWormsjhhDdCXAZvNAcRAx65ceddxMSaXm5LjyVW7uUVSTVtv9nsTc8C6cKj6",
  "key33": "mqctyRePNuLHPqaqKJBpymd4HtoVNjAR6gi2ypLbC6CCAk2JS1g3iTv2NNpPUtaiak9o14upNK31jHFpRQc89vL",
  "key34": "4Gn2qwPw38JbX7qZ57MMwW5ouR9zWRopamCPYgAhRZT2Vpgf4ZW7gDiqabtXZamQvyK2DGPDAeZRJeUkdBERyRKE"
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

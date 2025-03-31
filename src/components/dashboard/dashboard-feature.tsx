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
    "2F3zadkM4wYcYZZpfpQ6wjb8opGyn4WBEoNqkNdKP2rZRegghabhYQuRnjrRNdg319f1Sd6N4A6zUNNiXnGdY63x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XbgpKmqeXQqFxDNPkczm4LcFaLoQTFmicE327qUZtna3Q2Dp7JXjw6icv2kWSa62hagWC4cU1sx78K6DJLTDzRQ",
  "key1": "2ceW5ZKQwr7sFT2BXgXUT1YMpLtL9LHuvujmUX8pyotkTGsfsYNdSNYEgQZTuA6LDcYzgUjQt2CqRVa1XLbW3U4M",
  "key2": "2UGFLoVT4j6Js1Rvvih9J3izgWs95bYDChRdoB7JL8oC5Y2qmmgdiGFRqJ4GpXf3EAQWYEi9uNBuPHWdZBw43629",
  "key3": "2nkX8FATULKpDx7DnuBA1zJArFxEYS4FwjFWm93uv1KiZMvZK1Fuqts2EiyvFFsFFrBHUgEEyU7xDbimjFGhn3Bv",
  "key4": "4BKm2JcrFcUxhjMfUW41zcXZ85NL6CcUQwEYFMZX5PhKYuC1wLHoeJUhL8ZgSUR7UCxxPPFPpp3CrnYtwGsYSdSD",
  "key5": "4h9yetgrsthhrcs2WBapKJUrhkWbngut3gd3BZ9jW6b9JRo1uCk1oWTTxoTD4kbn5pdcUWVNf5qscE1UpdSPZRZw",
  "key6": "25cEXFhXVrbormDeXCu2P94Xv3QnaGwvQswTDuq8SAMoE4UnAzrq4Xmp7pfN673yy9GywgAAhfpCaoKXzL2ncDrQ",
  "key7": "4XdjXH4Y8iRGByejQvV8BhX5VkNoXXJGhPWRw1hF7nyYAR5NyBkq4h8bLyqQ3uUTkmVhqZZ5p1wzFxS9SF99R6N6",
  "key8": "2dLPJrijHxSxMmMuZjWHUrQK3FpnbHcVd3qjN72XtbSLzf6FXoz3xYkfqknkgNvVkr5u5V3paMsPw6vh6ziUXNQd",
  "key9": "61ejwVTBEdRZSxNdY8wx11yHipcaqYPiu9PNod3GDBLvnXTpYpP4MtEposUZHPtuAT2yoHaJDmYqGwEQFbJnazyY",
  "key10": "j3RxeVKLZymoFDhs6VaZGh1GEEoavURFt6XUWU7pY3XDjyQsnhSzx2gUcS7C4n9Gc52qthoT4yYUzCYtYveNBJ1",
  "key11": "BpFWo8ztV4BDCLcVwP2DqUZZWHAJ2uxFRrRwqVMriKSuT6tippeW2bv5zAEDNfW7frxDyHHTD8xUYoCnxTtRn8g",
  "key12": "37BGQZZyQBZtAEppcdWtuvAjFgfVD1TQPd3jXuFEQNGim9j2C1avppDer1tvw2G6uuZrDRiRjwEszVwRHpcqKgJy",
  "key13": "62YcpkNwLzEFQcZcBqKPFvorGLw5JYw2biXRHEvWyn6fPjb11vzC7FTy6QPJuRnet12eWUdBFiNrtnbuXCPPS9kf",
  "key14": "2WFi7cvTeaNAZmHAMKkhtzYNHrQabSBnpZoeQBchDNwJurXksMQ97v32WVqsXXqeLjHbYDTRAmrq9VxQsKVaUx6M",
  "key15": "256y3jG4zmeSAqtEcrJwmubffS8dvyBr8eSLCYdCQGXPrdfvrG2zJAtCJLF5S6twrXAZwhcmxvUYLLP4sy44Ad2T",
  "key16": "4v4W5AnGQwrx7ngh74FaSHvqh9oUwbypjxr7wjbCLWSq5Fh7oLf9ApsJPJvgfqvmBrwKKv9f642AipLVC8PAu7QP",
  "key17": "3dqJAVsuCg8SDcNRWJj6ympj6YjT5Lx7YGn4wHxBv6beJ4cJfvMuWy2Px9nRbenr1kzoGxtcb1eNtHZxTdCotw8s",
  "key18": "4x1iNbSYW3tJCYiJLWQBQR73zcqjUb4wDYEeRWkapNN8YTbPp3pUYMHS3tznGut5HMJrMKykqe6UmqAeawSdN7E7",
  "key19": "4ZWGrKwNkRU4ZZF666zqkzYEEGi4f7VMYdp7YWxQmk7X34E1c76cfV4ZKTtf9MXfu1myD8tYSKBwm96gywpjpSwN",
  "key20": "MufE2SZtbepxMV7CVWEXzNtD7GqxrDdLa82oVVHYo9vaaVXiuQEqTLAiXyjv3owd6ZptzaFYN2jmFYEnWjtkL78",
  "key21": "M7AjveZ44XoisY65U6iyFzJx7UgJhvrbUaMQgthjdVrG8exEuccnXLdLAi1rMFSeBKcWLRgLjAmdvQxPRNBRmqa",
  "key22": "32ohyNkdYANwR2XPzjqRaRZeHEEL1nmyJtDqv8zaPh5sm99NPokywDqAnMMo19WtSMpqBtfj8mqQbiuboUevzHTS",
  "key23": "TtFD9b8Wk12kLqU359m7xg348ZngZci9RRv9Kne3ESrcjJuV15EmCkfcwQqYuudCLXbgzn8yi5ecdiCWftPmDbg",
  "key24": "2gAxarZJrWTDJowohBZ2SbJbCPBwRPhh721eNcvY4dTi5YZ6v53G4NxRC5xjxNvLyoPkhcXGDjWrxUKsRsgogL1f",
  "key25": "2caDKSqdrpHC5MCvPTd9MfyELFLBMd1iHJQuz1q58abHvWUS1S2h9mpsod2uTVhaSmzpwYjMKiLT2ZB2rbVKrSsD",
  "key26": "3Ud1ZaN5aoXBsuVrm9grehBTPka7SbuQHRGBXqWKBNEb6LmDTJ4XKZyVheja29WvAdAvYo4YHSjGUHKeFh4hMJk3",
  "key27": "28xkwN2wgpcSbaxn6TzVzzSrB2MWkKaWRVd8XfJcU3xD9EWtWAiVDXtAsEBLTHg92wZrAYKstRQ2v7TjhaYsWED6",
  "key28": "2eFdpXyjBBwxKY5ZTxKGu1HoiToapaHEoJBy4Fjuf1JAPAxwTmQYtbdiejuy4j2p8J3QTLewCQ9snJXxebidPkbi",
  "key29": "4sJqmDcWEmkxniwcv9LFvAqxLjcr4S77Gj6NdndeEyWGw1yUKJaWAxcEfzX9F2MSAEza1c3Q94JAznNptjEtPcWs",
  "key30": "5aKtSL6kWZxFa1778Soqw9xnqLnWLG8YfoDHqVreJvqtqYQd2h6zKit5KWqRxfAqSFLpGxppgXeYiNGBYDAzACmE",
  "key31": "2E9RtvDKh58RtVQRMT4VWSAfYJT3rK8xQ8DCuxVrtvxYhKyUN3eNSyCMeSvhairYQn1CxCSQW73erJtct7rbJi9F",
  "key32": "3TRRBEpUBoEjgmG4neYfg1SVDEDDCHhfMG6xmnUk68suZuBVzEGZRp7CSFmBmoquDcwJDG9frzuZBW2djeq4qaGz",
  "key33": "RGnzKWU2BUF2uzhui3XFgWtTWvoVDqLhmkn8j6sH4jiCGFcuuBUvu1Zgt4G7ruLoqJc8mvUZryJ8mzzzWr8VTtH",
  "key34": "4e3pjy7Lrtt1wAfoL5L9n95GBZiyBtWKb4Pn89AvFiZ9PcbUwtiVPANnYvW3sCAWxCakKNtNcscTSPG3nUbbTh4Y",
  "key35": "2gcz9Bou9fneWEydjM6o3nJETYQ2XdWiV4qVMXoYeKR4D93aeTkTpAredqNYzchaptaN1s43Wf5Zb5KFxGtAEGXu",
  "key36": "2G7xXhen4NyWk3KpFUrvTR5pEst1fRnR8f1RaS99FNsuGtqrCyHVJDBnV9jsKSRk7pJm4BVrVaAjWpQqCtRjNi9b",
  "key37": "2nc9Rz3HHFWL2J6ePbDHk2fhn4qq22vu95JutqCUroUUhoZqQ2Eu3KTrcCUFHspjGkzrHV2yVYbtcMPHtJ2b5jUU",
  "key38": "3GvkvyXKp5xUjoHgrDmH516nVWFHTzQatf8gSXLq5YD47XZGMCtVSCrhFzZg74k2EvnDzjhgjM4d3d7oBLA6PPPg",
  "key39": "45F2Ue4SvcofGm8MgsNx9MQVLZrhMhsqKevdqRf58Lmu2k3Yv61SGTfwAJsnHbpPh6ZquigtBqiDriF7N4YLkV6m"
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

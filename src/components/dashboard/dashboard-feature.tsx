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
    "37amguBA4gatkMtyjt7QwrSWbmAJtKs1fG73dCWDygK1Lyt6KTD395gAzPzcrUjdBfSDuhr6xKdD2iWXR7yDXhfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjUujYMMRhSdJQvEWjNE6wnnRc9ErrrjVkDosp7qeQnEx3vV1weAum9WfdJUoQaC4ZA2VgSk3vLFNPGdFVJVsUy",
  "key1": "3PqfVP88X1TFvb37SzLCGcUG946JWVd6MtsuchLq1pFvoE1tfZSV2sndcvkqCwoDMFuqDhcJaAC5G499Gx7Hw4WB",
  "key2": "ZQmfzLG9w8Fry2L5bs9PqmqtsNtvxfoUjJYR7zDnQCfTDeb6rmRSTrDqdgbyh3jnSF3BRDrSZatCYGbEV2TFBSq",
  "key3": "DWVL5x3X6fjwZt7AVY7hjg8Tg7sZGpnCCoK6XXFDtBdFVgmnSagGABzK4BZBKMNocXujZ5wnSFdVKVtni9GXYYq",
  "key4": "4npoDX6u5DzUMrzuFZcezMchxm7cEqy4TYnuqsYST4DifWnoMzc62UekLzqesAkNHMeSSTYBRqtc9TwZrTMWGzpJ",
  "key5": "3VDC4YEzDHB9HpCcsopcyG1d3ByUxiCoAAYgasUPdinMiTvZW41t7PZNWJj1Zpo7eUW5xTLSmfYFZPHEH2BoyFg8",
  "key6": "VA2Cn2uWpuwWG22hupxiWSkVaw4dZNMnMPKMDpG37PrFm3RGYtmcedemUn8pZ6no9TyHH9DXKgG2mV1igzekmD9",
  "key7": "2qRvZEBjK5Zp5G89czSBWjEk1sqar1wSJwVVfkXWGRShQceM5T9EFWEzKh2UopURnpBHqHSvxdPQU9oG8zXvpJ3v",
  "key8": "5PY3iNKsGwgbBYTN3jNPdvy7mD6Y6iCcT6dveuMpZfJs9bvub6xfWSXyTCNJxmnTNFD1WgVPuH2bY2zCZwhsp3JL",
  "key9": "5vCbbtHF1MMRPVVjCzrREoZm8xHKtwrihxqYdx8BdmsYD9oReA8T2it54Mj5uwZs7RtzRt71fBBE5nR1aXeFoys",
  "key10": "2p15s8ZpUBzwz2Pog1tzHJAZvrD7WenkMrxwhSxsm4fqpHUtDziFeJ87JsfeLC4r7CgQbAfA3MxJ6HuDh67hiULg",
  "key11": "3kHnS3AU9qFyMZmcmyRD2x6vWgTHPpH62KquU9XsPPaMrQePFFVXJpDsTVqUYWhhp2JVdt5utbZ8V5Ubp1wGseqw",
  "key12": "278kSXtLZiryAm7TfL9ECSpMAZ3t9Y3zqhNL87Js6aswoV3WjZQdMPm3V7CJTbKdVbHqcUrLyiHem6VfyzrxE6ms",
  "key13": "fT25SvB1vEBtT2W6CgPbPCL8GiT7dN75hSqV6jenjomSb4LF1y88GshJ4HA5oUc96YmpdFY5n25jEP45bC9MuVS",
  "key14": "DKcjVzHVjVwF6DeN4oV9dEjcUrNzR2Z9RCiEFiF8G36CXtjqFaLZL3bY4nm9PsB321zjUmDgbjVhzjWymGPQnAW",
  "key15": "io3w5zZ8Azs3Byh9PvPjnqNRedSTuHNxJY7FgKf5wDXVgTuiH8NefTbE9WMefM6t2fpLYH33HVFaPx5xHtTNgvq",
  "key16": "5x8UjnyXVYz1L3soEFa3G2svoFBonUtuktxoRvYjsRagRx1qtg5JqMtVfMCgraTKD4fcZXXB1HZcynHSFh1zqMcj",
  "key17": "PPgUKV39WJs8u1pvvri1hX9xzZaGBMtLsX8XuzxUQw4FtdCAj29HQcRaNDKRPuhoL2p3JjsMS25VFMfTJuNQCXh",
  "key18": "uB74SeZooymgGgD3rnwqNEQzEDW3iCGj7iDvBTgXPyoPUZxinCA9sE6mPJpoXLnWuQkKHm3xBagu5qZpeXMXqJD",
  "key19": "vwP6sEVpuM82wRQ4r42BSaggE6pTRLK8atLZ2b9m6QSZK8ooViZyp4MuaRb5dze6k8T6rCfYjCsSKBhjawoxW3Z",
  "key20": "4YdSrVf3X7uzNR2TywzFSPcfCxc1gcp6nzdZXmuwsm4qckwxXayvDzMKgcZpQ6RBruUb1WQjnsvPb2fU47LTfPXp",
  "key21": "2fz5ARbHnHkR8bEkwVgaMHMm74TSW5ZvzJLeNj7vUpCkGJtV2A7k6SqxTjiVys5qenSuBK43FL1W6B6krekttJyT",
  "key22": "3snbZ9kKVjdrQa1HsQUaeFCSDPb5TpZtuEAYHSogixsSKPLvtK8MxwaGFGb9Gv5wSKoRa3THg4dBPgZ6KEr9kq5z",
  "key23": "4pT6CV75QQ3X8maoXY1LQ7VJCtbRZtuNDmjz91jZpFENgPFMK5dRpGSB4VTjR6a3KZNEijhqqQXuYDmKZE6bpsRV",
  "key24": "2xvyvRSMnp6m5QeW8UW8MTky6q4E28AJbof7LksFFqzhupAtC4Foa5P1zWbUUt1RmcdoLr1hNtFtvFxCwHfNExzD",
  "key25": "FCg3BMi95Xqxdb9Z7UZ9J8t46uCkVdncrN8FnkmEG9PFM6cZBuY589bycASnmrYk636UUJypNXDCfK7Ced4HAZ9",
  "key26": "4bpPGpo5gCpNYMehRgd6yPS4X4KtbVRtXFyCEhsQm3dZb69DqjUJNjHY1yFn5jZJouCrvhHo8NtVXPMarhso1Ajk",
  "key27": "5kAMnkHAueMpC7kxKwoRm3wLvqoE2MwaS39DPvU11RWLnCMWEFzuPXH5rV5p2n78JAKpihXaRKzJ3nZFRW9DNXDh",
  "key28": "326E7kgfhqY2Jtu6zB2QcgF2S3sSHtNBhcwjADwX7QdTDDLKXJTNdPJcMXAPQs6w1qurgeQbdVRfB3fRDKjVkcP9",
  "key29": "5b4ZqoTzdTzhCBPfMy2aw3ifxvkaSRtnBBU2eLbGZJajTfeBbVB1JQyDjcEGnqaBvHZP3aVfVQVvZMHANmRWjgJt",
  "key30": "5WtwAWBsf4u2ohrZUmJHwhmxHnvdgbpS2y2kV72Q6GQPccraKugDfuGm821WE5asZqZ4MWQynH16MZMG5sx9f2Yb",
  "key31": "3PWzQ41nz4cvAhZzkeQc13Sh3b1F4oXnKLH9GhXt3YQ2HKRUM3mFkEDZX33zn3Bcn9i3Dhniecf1XUTkdQNC72h9",
  "key32": "ynqPs38MatbK7efJfxXT4aKdgfrU7a8hiGSaFKi3RxQdyQqmZDhYZSvp7uCTmFjBNU8z1CPG8BQ2sbWorUz4C8r",
  "key33": "5uZzZhVDTnKwqRAMaHDoLLaVJds8pEYXRAnQGEJFwNXikuKA9CoNjUijnx1SMfdgNDY7jzHeL353GG46uZ6Ap5p",
  "key34": "5NdM4iPgX3cJyFWUPRWexDj5WrFPohGWnpRigesF6Ni9iLyEPX3agDaNcDuJffQCnDFLY6V9mj8rgnKYEtWhF2Tv",
  "key35": "5XX3scg59yUrfy72y5zudi693UctJfTJezoDgSwNqLajrfVASwT6yfrb9LcncoLoHWvJESxQBXCDoN9raCWBPBye",
  "key36": "zrkLr6Xukg7L47c7FU8aTxTcDFxXmQKQodRUWAEpWTmD9245pkLDZ2VZDUXkknS5xEU22Z5qHnNr9xLPYWLktsV",
  "key37": "5VW7bQqzZNKXPwpiskUcJyUzVWKPraUGmsvM4aXjyrgQJBpv7c4VhQ3knJU1d9neZfZZFmdtk6m5frNvQtvELtWM",
  "key38": "4W8tVcsoPdFuJkUe196Btwgv1hg7PKsj1JBsAziDxfx1vpFfgHt5yAWqYrGkcoHuaYijXuf2gTF7hj8bF7qrjqv2",
  "key39": "2uqXWKGCnVeqVHy7XZiRrcbtwL3ByuAXTZUJNUbKCGDXnjSzaQN3Zf1nHp3RsD3ywPURAJYowTtN3MgNbRnw5ZQU",
  "key40": "2bzH7Y6NgaEdvaSMW3kSW5edkisqye3juL8rSYyTXBaJKi6te4naE5oCWy1YSQGSPAShb7nW9xGtAFY8sENyGpdx",
  "key41": "66tmfo7jaepwHizznvpD6Q6fCjQy9TAEvXTaNnePAVf8NFAXmVuhGoVPmLJbf3fSupPJLWYNwNu5J78Pj9BmbFqn"
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

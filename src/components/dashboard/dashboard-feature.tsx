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
    "4PPA8THMxrSGPmCFgadeu1TUb1CU82bND8tGb8ckX7fur1uEfvvdLLHCAFQSKZX3UCofQbgfg5A5nBFgDYQFvb5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6qM9SP8jbxgFHxisihJzr8ibSuvUq91KKbQB6wKwA1uapq2GCMo9qJyDVF4WrDiQd5V229fdyGcbAbn36PfFKV",
  "key1": "3wvt2Yxv1tNBR8UbxS6RWobMVUMLK5cfoaKrrrQfLxvg1ELWHj43mAP8aDuTih1tQZZdMomZrd24gnG8rFmAX8h",
  "key2": "3fP47QSinY3aYSwYKiSbqfuFozumz8TQVWvyMuDCaEztuT7FLLiLU7wffvDy8nQKD1orGD3wCT7rdKUuohaFNdki",
  "key3": "5FMrp3xMi9bqVq4oZxn9TQmXrxc1seQGUPGVBwNeZReSz4eEa4zyMgwXroHgNkrS6uNFEyihoZf779provdc25Pm",
  "key4": "4cmCMwoRE7fw1E8MazZhWJRhn2QGbq8tmfWhwde8RJbYtCvmzyZ8CeKWvekihm72FEqSL3vaxmT2t9e295fP9XRG",
  "key5": "4KAFhmNcMT1YCRKfMjnVSCKsCVbgv1VgiMSXVNPNnex5RbfR96AjQvyTDdQGXmS9prodffKaUYv592eHbhLBq9Lb",
  "key6": "5yX4RWiUXiPiZDzosw9w7Mq9NmXeiR9WZrPiQtZk27VnHQ28WTL8igHkC7ZSVL6vts4MxsXM8Mu2Ypd5r2Xb8H1E",
  "key7": "5y88fepLBFU3bu1Mc65hr5qUL2FSRGaLACzAPH6TmBEH48QRinA89iiXjNQA2HDN2KvkWYtfx6YVeT49htThhpNC",
  "key8": "3VNHPsJApMZHeNxFM132oiGfnmMpPyn9171p6kVNP8wLT6qMH2DhMjFFn3TAUmh4k8pV1sUBxYUcnVNA5cLyHpdM",
  "key9": "5A2LHi5BbSPooqZsrSn2rBUUxSKfWP2PByvGNT9Lr19C5gu9XGfPNCRFqmaMd3LfBofJe63yJZScumKaTHWK7oZW",
  "key10": "4T7kjR2dQLB8fpFuTSzugRgqvGpX1JK6zNXSBzuNmU9ba8cAsuNH3J2gdMTAH8GejrJV9VcvKhqnWh1gr84R9p8L",
  "key11": "4vL63JfcJAEohYKr87Z8QHayZDQitVwqoFar3Dqh1KDzKeTY3iioFgAVRY2nEMNwRLNqK1fonFfV6Gfd3CibopfH",
  "key12": "2sNHWy6GpA7tTu1QrNvoqfdgn3FXy3gE1VFLHeg47hYZytoQWmzv7BW5Ygvf1yUUVCuF3A2AFETyW4xR2K3wMnd6",
  "key13": "5pLkdHqAJdmafZwwDq3EjEERYhxCnq6pyEJp2YC7fSg7yVEDJmZZwp7DobCxC5vLoc1vDME9BAcer1Cz4JfoveW9",
  "key14": "y66NnaToPTDK7P1rtqexcyfh7Pf3iUteUqstYpjqaMw41wbdFXbTMQdQAgGyWL7Zxywf69Xk9zWa5pzG2LS6iyz",
  "key15": "p41S8zakcqWxEmkseUFoXQxUMLNBVTs48f5RvTYXYitEW6fuc297ZE6y1PoF2bVRzKb7RRGyrQfptyBxJ7p9eAJ",
  "key16": "2MF3a7HZMWCReXUT3ohP1igNQeo4g8geGz3rdbabs35kQyFEkX54Fg8CaexK27m6iWnae8MyzJ3TQZSmwtschZTG",
  "key17": "4hBKzv6Zya16aZMD35z2azkSfXZwAaW3Bea97wVZ11U8jnr6Va9QYuu6B7itXB7vnwvEk2md1nmVDKrmsYJzrYai",
  "key18": "4qhMUv2ggmYxbvab4XxrUQVFBctvpeoLTBn7itvEHCiPSw9TJQX6cHtyNmcZqC7UA45J5HSucXdzbJz9NaC3FFTD",
  "key19": "ToQjBMp4esjdxgfhSPaZ3VP8eitmvxFPx9Bx481eZvmHSKctMvi2pM4n1KrhSB1UMeYS9dYMfP8iykVd8iPidZi",
  "key20": "2CiRXTEQwFq5BHx7jFZVPEyr6C4va5dFGWwuLP3qu8BGZBRfyVxoFdaL3YJfSqQRxYDMS5MwxLHwigMZU8mKq2ew",
  "key21": "cQjUzNdTH65yAhhV3H1m6mpheyLFqN9Y9Yb9CZrfEx7ZwpqmmDmkzKLXmGDXdLwFF8Gp7fCgTkv6fwqmdrEsmP9",
  "key22": "5UBPHVGKEsvahtrHCQeCDhuQ1hxpLKQbxdbYkxG3G3gXAWJz4pKdocfH2ibWJtwAtsxNPo8Tg8zgLGx8D7FzjYLV",
  "key23": "4qdc9fomQQ5YMTgpCoDMFnRYrhNPZbeha9EE1xoL2NBELkbybPQ1g6KRvkkdMBmnNjb17CxAXFRzsfSrAapVntqX",
  "key24": "3Wfer9Lr38ugGUpWBEsESP8jXA2JkRVzYDxdr6pZnVZmx84sZvofgQyA1yEZCZyP4aioWCj8BNsZjEqPhNnPaYjU",
  "key25": "yNtroJdik49Eir8xSFKArcJn2wbeiYeECcbzAuLDi6ip4taYTgANvn7G98o2X2py582BrNCBFrm5oD9ieMjsdzf",
  "key26": "XzaaSqoYFQ3tC9NPVsEkGAQujLbQtQEhgVKWAYCivTiWgT98CEdYwnXYRVPEnkkqvTvp1vykgBPW5SvmZpY5zZp",
  "key27": "3MiSZayzNj62dnYZBpLui5chs2QmaagfzfYfBwqSgFXeP3SgUZkLLexAAu6a4pbj9R7Ke3nqeLL2nhJmsRNPLmR",
  "key28": "PcnhN2ccQfEM81GZBvfdtArBuJ6rxa61MDw4YoEhF3Dr66fTc6znie5sDC9F9w3Ut2aXwBT7eYNt9G46hNZdGHb",
  "key29": "3a7nPum5d7QJ19STPPdvp4HRZq5B1Z99wQDBBdf6gsh7eGABCRA4yCcbEKjw8u1w4mvnhWFtuoVzWa6PvwdSeBwg",
  "key30": "4T9WVXtTnAMB4Kc3QsSrBTW776RNZ41VL7XeefXLEptsjWXKYmwgs8zuVFxH2YUCkqQBKobowcK5ixeWxHZH2Ud8",
  "key31": "4qDDbi6jurrpp8uzdgTzHrDQsWWxVYeiv1Akf1tYs2mLjNecpi6otCmQAXxBmofGGhG4Lij1ZSFmTwy29GTskY5T",
  "key32": "4TBw3pHSWT9Azc2KizvDvTN1iH66ES7giRyeECuGJwvMTemSwwtkZxwgXxua4WyBHMj6ap3mkNU3Wr7QNB5MDmGN",
  "key33": "5DrjZYBJCGnZqUsqWiBTxhNMySxe52kD5fxRUvyDMmwmNq3uDwWDdW1i9Aa9woJk4FTztSkYpDEpNaQrutm1g8bJ",
  "key34": "3oxT3n6irWDMxSUcNwVrdzBM3DihtWTpcSQZ7H8v5pSXNCG7UC5NrKQBHhhEt9oTsTYXxyMfRvdspecJkh3J3ZrY",
  "key35": "4TPYcYDTfVLX5vim58FYcigRFNMKayxGXwkGSLoXMw52CHDhwJF2od9WNSY3629d8PHGmf1MhpvCG3XNdg58PHPn",
  "key36": "3W6qp1Rrn7Qxwt8TAAGPK7RqfqLWyEn5rAowbtQBE84R1QF7zSPcvgm5Wk88WrGi9viy284iHMeyN7gYnF26QtQ4",
  "key37": "4HkE13uTJ5NXqQpR1CbufbHHroisnvbrRsmZJEAkLWmQfpfcZJ2v4ZnaWBzTWSds6w6TBAQBgZuWreKjAuFHfv5R",
  "key38": "2f3HYGo5E9ScgxNL76SotgkHK7Pj9wB1JJfDsBi4SArcBZwWCge8SY5rdPE7u62Z1cBra79TfsC4FCiv5Jz4Fii5"
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

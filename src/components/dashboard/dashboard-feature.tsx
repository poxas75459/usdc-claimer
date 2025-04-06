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
    "4gGr31tUygQLeePRpYrgacBSePEtmDp2fjFXcPd3qHwiNk9WCaYs32PvpzFG3ZNiuU2B3oVgrE5cqKgHNAVixzzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uv2hcevrDWPweWVyefiP2MuFAFcr1ekStFc8uBa2gH6xnqnBVDA7JnFR3pX7sVQe5LSugLaCVq8wD4r1N44jKBW",
  "key1": "49Q8E5QjwnKQBJmoRv8Xk1F6yWkxeVGHS1A5ssR1jA5UWXWKYH13uLTha27sgLCW9qYgDv934DgKGWkisjDDeQVY",
  "key2": "5UaCtz8KbCexQbGiouRSdxXc1zFZw8pJq2jrphxi51F4tKDCdCJCySoA8dNa5Byzy6JA2ouZEfo1CsnrSvJogcR5",
  "key3": "5rHD3FfwgCsF82DcBim8m9kPzdgRxVxRWRw3CnQcthoxrYgGhfadhC1Q2sFLPcrQQtcPiZEhBLnrxNttYkNJSYkN",
  "key4": "2rKGKy2DUDaDQKiR8eWqZVoiFpUkhe1NYkbWyFMrV6TwkLiCMz97oQJHKUZYViwVSuDjfqsDVVKFLPGU3nHETsSw",
  "key5": "EKvNKVjKqHPHCEwBiAE2fnQz39kTYdFvckfk4xi533Tmx3hdvMKQWCCThNEz2ijudKrrN5onmCVXdnmdUY8KPC2",
  "key6": "3pHX57GUyDtMhQdoXuX7BV9UbC28QiPaZiaQgptzLwGFHWKr3FeQWnYHpdiAE191NackXAQ8o3BF18bbFkZ9BCPb",
  "key7": "2bDQp5m5ZcBYdKHJkmmiCrG4c739nTz2xpNVGPtnaMTiuuP8yFmRQT7s9X6aPDoxydWzboeCCddtCjbE4rRyQwAe",
  "key8": "39QkzBYwwUZL8qUBupJmbayJNdHqZ4tgAozewVG4BJDV1yDoVhyCWva6uQ7Tp6Fy3uHBNvk1S4k7pYbfMmUnnDW5",
  "key9": "26Qo8vqtvm4koZsTVo8Y6Mz9b2iBndsz9puqgvrQJuPDmLFrYVYjcXU7DS9KV37np84oUqvsQhhvzLN9vPLZss6i",
  "key10": "2n5arfW9WiHYi4afKgJh2HdbMMS88qzPoi63kKZYcudV4sybWPYn89KhxF2Q1cn9UmzvbMkkr3JjA2prJtXDKcCB",
  "key11": "42JRNRMazNVmXAbVMNU82byHbnJ1uTES7ZV2FJJTiWyT4xFdvnNYu3vG2uYEzMR2nR28u3bDASwDcqTg2EUTRRFk",
  "key12": "2VyysjLqkafSTKGYNybYtHTHVAKmNuA9pCWfutHVM7qzK2S6hEdyemcuxYU6TvjFkm5HAW4TC1dH76DtUDCg7Nod",
  "key13": "3cXoaYK6oD81WcHt5ryXGENtiAPEMTXFSbsUQHWG6SZcsjqZpjDpT8AsQdKT7tYF2PQSB9p1PEsXWo7Shy3zbz5e",
  "key14": "5cn4pkKoTLNjnup3WcAAsk67BweBvvS6ix7f4G4b2D86TUquTymbpG78Yzo9T9B5qxEQRbJmuGSq29i7777pGYKa",
  "key15": "4M5pS97JT2CG9r1sQJu14fj5hg4vhcZCXny2a1HLkpoz31eZ6cRoL6nbWQ4j7U8z8cv9ui2XrabqzKDjRW2UsX5K",
  "key16": "3tKTzdGWxsEYfWacws7xfmNRjMM8rf68uBg1hbuta2m7zWJHtiMz7yKi6pwmQhfFAs3Bx62H7XMfZWkoh3bjD6j3",
  "key17": "NHWWh6PCQYrhfbzBno3ZEqUcBZaFrRePMkbXnhJf4ikPgQeNSBSgom6d4Eve4nJxRfJo7r3j9HMyWs9K2WjdMML",
  "key18": "4JojhXMLrkRm4uA7HntXihzvBrQmzYafA1BT2sV7krv3MsWBdMvH7xs5oBjDVd76mDEiwSKKHAn4Y7mW1EwTGr9K",
  "key19": "2U7Pssf7bW1WQ7itiiD9Tb76eAfrEtEvrFfkHu4RY43VHJJD5s6R9hEmX1HoHpLnhuCpXDCeKmyVbYYpdEkMEHpE",
  "key20": "3KCsdsVkfHtjmpavYhpKMTjMGXtr2VXeijitLFRvq5Q23GXeawytTJczwvbUHrZ878kwKC3woWUKExSn69DUryfp",
  "key21": "64CjW2Zdjb5Dg9kixTxSJvoFXi1amFVTkYD8AjYutopVkjVXQCZjE6a9rvdpaHorqvg3xpXEaWHgChtqWe5RtzCN",
  "key22": "4xZq3PLNiguNvBFpiS86NuqRaYa8VDHknia1Fp4N1a1nAUQQ9jjwNGVCTGnNiKtuqiBVrU2f1fGjxKNcgi96jqTo",
  "key23": "EAC1ZAfM2jfy7qzxzcLNFGwgMDuJykVgaMK9PNBxzJBF795D7VyVTETexgTAyedBtMvmVbSwVTcYcyd5GZKTY3R",
  "key24": "2Ru66JvDcUDw5ks2Hqi52mGjqT3DmD5gXA3egUzLbMLtj1DKm9UyJnBB7WgviedkF4o9eZpXvQT5Uf5hZFR3m4cs",
  "key25": "nD6GTaNS96yNBVSvL5D7ixuS7EEjVMA34mmqpnWxQEd2bFYGyKbSeRBDo76yWrfzpPYLNWLZmfGP5xZgqGxeSuZ",
  "key26": "2FTkBdmUTrc6BD7NJEYkaB2RRYcz7ejyNCsUa5hPrMbmHDaCfhEXiWsWYTEvH81vp1grdhDV7s16rLKcB8B6MZ7f",
  "key27": "3w1vtsiUaFjaSooJjr9FYb13Q5SEh9fzsM5VmDr75rVajab3fZ89UhbEzBe1NJhsjEPFEG6MdnZkMRrVHUEU86aS",
  "key28": "2Xad18wiVNoLeuxnEyCiBRwU6yMB2as447EGEksJz43px27C41F8QAzZnurDhCK48VLaG9fLo3iYd613Yix8Z5R",
  "key29": "3KjqhtGcGLNZaUtnQQCzz2FwweMFEARnTvqhQp7uPNrSv8QVrVupwsRhAPKPvcroDsakAemVkG4vq3AH9iNKuw5i",
  "key30": "4rxo8cuDWSPgEwQR4YGZL5WYVLeMzMB8AjSQHLnwEKu3hp6oaUdUK6BJys9ApRmDxjRNys7HNYtauCQQX7BVuV87",
  "key31": "bFsBJkXn8bFBv8cKoAV1TxbyD5jJyoHV1NPk5BifTXXA1U3HpYjyRzxphdEXzChqNfRp8azs4BuJ5rFQuW7uVdY",
  "key32": "5Eja2PtHzUVnxzW3N29YCjfQ6LHN6q3sdxX4hCT4txxNQBzC5D2DpteGKnkKSKk7YhQMJXe4F24VMohhRFSr7TfC",
  "key33": "5SBygCsveqe5jL7Kr72Z7GuvRjBrQiUQnoYGj7EiLPRf2bJ91pBqzZMKphiXDNrcvQsXChsCp3xgWhZTTUozSRFc",
  "key34": "5jLJzEyV6nzBmuqmr9PRuzKCEWnJWjDdce4vZ6Li8Ehxf8WqG2MY7g8bfG1aEUxmM8bmLupNAWewme4SNRd6Q6mR",
  "key35": "4qRLWUMPxgnduwa7jQujWLe7EjBEmvswRskixYfmT3toE5h9A2krp4ftDwpWLo7YGbVGmFYP2pR8iP9RApNj4y1g",
  "key36": "5gmrubNKmtz4KvU8sJNbpnMQRLUx5UdYeeSHg2bmdy8oKasjArQPKsS333MM9mFHCBJg6TVtg4eGRzHfXjEhrMGm",
  "key37": "3mG3EcctUwBVxpSKZbndvDLcZcvMP49RYbQThztrXMLS2b4isfFuaLqZFnQ5WSQKqa89mtQZPXinz3gCcxDcmmqY",
  "key38": "55EZAqynpSbbPZJiUwC6GA3qKp2qbaN88ao6ujqMguiZX5KNSmQtrTHRx2SZbPaKRBRa5tqPBFEr6FF77XWAKTVv",
  "key39": "5VPENRBJr3L49GVru1tRVVGqt1GrKFjcMqXWM4Saop69uhajVgKebS3otHvodibMPGAhCn9mqGzqbDes1jZ3L7pV",
  "key40": "2cvx76Kgpnc9JDpcAribGvC126UKmq5E4qhLufd61JDLumkehFrN3t4v5CM1buU5UuwT7RVc3qZ99Nfjz4tPoswW"
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

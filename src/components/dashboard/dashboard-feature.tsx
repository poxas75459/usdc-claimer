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
    "4GAi2BGoPUGyguNN36NzgYtLd85qkL6nBCCxSfYVuRNmywgrDwZYi3Q9iXRtRD21W4QNdDaPareY8SJjiVUMtUC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CgQUEgUanxmuzfbGqUPk4QnyC87Lhsvx6shqPSwyZU3SsR6fHpnYVxwSyaeWVXoSr3eXxpoJWSqi8iHyk51oA9c",
  "key1": "4kScdmFpkT91o3rTBnhSbjMSyC6Yg9XCnB3chut9gFrBU3YUqZ9iqrzwuhuyPefDYddJp9e9icSNLECwUMuFH7JH",
  "key2": "zgCdj3SF7sXYjemmkCs85Gw5uFGJqBFEB8jULoLVYA89JkB3UKL4jky38J7RrrkPM4hZjrvXAy2uP2vkvB3mvng",
  "key3": "2jyJCfTVw3nhiUzv4yWBdfCCdLr5u33ndxXS3JY1fz89J8iy2fG1bgmZwEdoTepGww9Xn91sdHg39rSebuaRgEAZ",
  "key4": "T7PLKL2UTv4eWQFk6VjKMuN8ooswxnz145Xqiz2gvMUCJV2t5CDBVJ7xP2fCiE12k2rp6EraNhACNsyAHox95Pt",
  "key5": "3GsXgppr9eczQb5YQXLyuELsJ27XRokS18WevfrXPDdZGFaVhbkbXjSrGGdFogKPbeTG86UwvNKP4Vycwoceonaq",
  "key6": "4i9Yhh3NmZGnvPXQEmhXYDF4n323GKRo13ZLcugrp8z4XYT3WQTsmzAFYDgYs9kbFkYQd4Nu5xiFZzg8bBesXWUV",
  "key7": "2gLutSphbjnXxBYKwNjHobJoqWZpuNZsnHDwvv9D71HHVC5GqsGaxFZhMKygJhygJoRQ534sruw7LzeoyFxaAhwm",
  "key8": "2x8BD4JFzi1FJR6ZDhBPmbZBZJiiVLzR1iHN4Pu99QrMwJhFwCGxMDKxaQKjMMNte1eAm6o9ByuarkF88SXpf26f",
  "key9": "LV76vjELV2KQxFXbsPNqDz5NStqG3yUfxwMKTMRazij9r3wjM2ncirE7EtX3mrHahG4DBWcw2i5aVEJ5bqvsTMH",
  "key10": "5q2AWUPrxdgodecWnBaKN6La35N3QBkxcVDExVEx1RqLPmUTqJz7ZsRVWvAFVWBgk5NGSMya3PMsy2jGNzHP1PGr",
  "key11": "h2b6JS1u9BStU2r7FLUeum1gURf9ub62E74hY5SaZqV41qBtqJewcnTQGdJtSL8huTyxjdpNubUKqd4qKyzdcZZ",
  "key12": "TCEW61CrG8Kz26vkhgMcEVHjvYyDkFBKS91SKiVa9kb15HKRDZAE7sTbB5Eq8AgntJD9x9FV2SQjwmKQBeWYUsH",
  "key13": "ENmHv5VqEHEijgwcj4xkih2W7KyByWqUuYoJsA3xpk9DhCsaPQEfAAUct8C3pkef7ZcC7Y9TMrz326XCDCbeAjT",
  "key14": "5pxJhmTxKEYNKm7ZPSRasAj69rBd4bVz354UAduoCGadBW3FqNk2c1dcf6L9S3DKBmFjw8dv1A736B2UbmRh1Pq7",
  "key15": "B5EY4WCBumG5u7trngPR8qN6ZNpBGPdcrPte7D92GYzcLvw2Mh7wS8CtP21VouAC9NinYs3FroNNCvdtb5egqSJ",
  "key16": "3eXD3bgUaeN1Se4HYXEfiwPhQ6fbz6uJL5z4PajH85oC4FL1isBnX2Swe9u8sA17sGpMap1vU1mShka6aSbinKU6",
  "key17": "38GJEEsAN1eoHg262C3fxBZJiwrM7dqDYeSy9PT81Rx6MEdxhRuQQXf13tuCWnhxGpTXNc9ndazMoDGt5NNJh81B",
  "key18": "2X9ztrtSrMeodSUryA5umYSrvJmP9xMcpvJZU7ycWwRCdHwjPmxdPzJ9aFi322abYcy7uUDQ1syAdqnxUFXQGc9Z",
  "key19": "2BkPL9Xya3bGevNtKtqm1NwpYTYTHgFWi9tXpMeWKkLgHAeHycdFYCTBNKFgGomeyvovdJLDWWmJJ6376Szf9XfX",
  "key20": "aqjnrvWWUqhiqs3YqjtaUnn1hGKH6UipLbp8p3bAqeK9QDrici6P3mkGtDhyBAvskB4415bwRncceyU6Foh9Z2E",
  "key21": "3MKhHAvW3Y952dPAWpimw6uQfUYLgWzkJ2x26AoY86845kBqqgf4qWAQri9PvrSciZUiGijbdjus58Q2fGeWEiWG",
  "key22": "39CFSPxy1jZZZdrbh4bFdMJcGLrFajmkQfrpF34qrs7bjCWSEqZArsL8fLfQsHLfJWuWkkHipgpvtPfspgE8PJox",
  "key23": "38FzGrbXeppUC11fAxw2g69pokkjfy5Ns7Go5GgqvnEg7W5SSQV7YJZF5zbHhQ2zrNUjsHCJ45LVY4NDSWvux32c",
  "key24": "1211fwL7SXHwCJ8CbmMVthQ4hM8sXYS4RDPtENVfMSwp3Z3NAzGM9PUhCtXucuD8oZ1jJVdAtPxcpXueo1P42Lbf",
  "key25": "2KLfpFy7Z5Ca9mgcKUdbsp3KNAiww6PrkZph8KqJ8tBNqyQmcN5XgbgKG3WieMPPen2MRkC3h3aeEsPwJ4qqskye",
  "key26": "26CSrQE9Vur8maMNoCq6R4zFLmGc5cK5SnQ5DU7y4daXycnMZxvoU5Ff8sCizRa38SiTri1p8EFnjXWMmSU4W63t",
  "key27": "33uHWuNBncxNKgFAXJ9NMQy6E5Q3JxTi4ZbrCiKMnhM3VawuiLaoZ3JE2BT2NJJuHqqd4j1W8U8BXAWESPypUmso"
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

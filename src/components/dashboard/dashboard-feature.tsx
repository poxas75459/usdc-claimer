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
    "4zgDXTGfusTtxvxYejLzUi66MdQCrFJhfWHGUBfWgVRiie5brePcoY3oJCDuETPKJDbgDdptEFuE4CkoWBM59Mk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X5qfMfFgh8QMeLMYQRMAdBUSzyya6t1XwxXcWzXUVwPk8U56X6a2FcNETkZ7z8GVndXa5KBc4wCYvwBLCid64GJ",
  "key1": "52Chb9hWNfE6rRegkkNJaYLH4VJdFZifFrVkyCTnM7STNygW2FvNVukncHbCzJ1BFgrT56RbGMEqYtiBD8pvC9Rm",
  "key2": "2DZs5NMe5k6XpyQhV7uxYqFokWUQAV7KX1FyK666u9Dym5BdeSnJ4HQtSmYpZ8XuTkXhARDRH75Hsmq31gMe44QR",
  "key3": "2GRGdrYacwF7ztWoPxAPn8b4Y2tbPiNzpyyhMsuE4kxNUG7umdqbZx3gja6Q58DNCaJkkfjWEmvhsiEkrtjhJczY",
  "key4": "3n88C9wxGE6JTSaMR7mLybH4CzXT87nbf2c2BtoA3Dmhgs2yBuAW9Eupfkqg6VvbU1AYkJYAdGW6GomuvqnseCCp",
  "key5": "5WPpqWvswbJ3om4apdqBds5TVyTZ5na3rPFQ7o3FfLzxdznQc236kMMgZJRSZfU1fXkfJwu2MRUAYbxexa5JArPb",
  "key6": "51HgimsgugxsW2vzpWAEYESKprL8g5j7xnJVVR2xEM3oYsfVtAUK7dE28YLkWH2sC7n6W64TFDXnxeGicxkDYwuR",
  "key7": "5F9PmoGkPbv6mSzfb3EWb7MG54hEiQey6HRMEv82SKtsubfMxELGNmu4aVeLFHkKc4HytAouLX3kL1KhVBTeUE2p",
  "key8": "44yCT22yEVDUhoxi29UwZKna3G29vEki9y2Rbz7M9wQsBNHM5KEcsiWET5Z7e7HMcQApzJPFgY6ug8Xuh9aJXPLq",
  "key9": "4TVQvm8PLaVV7fqsgNJct6b3dPxMbidRbgQhykksmqSty5NTH2abaZUn9Q47KLo5PLEoDMX6JcEm6moYKUnbmFZ4",
  "key10": "4G9F9RBC9rXUHsNHuQ9d24uZZoiQzfaVtmQ9DA27ZFDNjfNWvuk6iSLvGQZ5oEwi3gWVSR4bm4h2TkEoLmjCRsJS",
  "key11": "36w5PeKK7fnpu8tUAjkTxbEH9Zd5uLoQQTyWJBCBKPB8tZEJytWYdcohMGiKqU7cQxQeeqRr2DHoox4KzgL7GbXx",
  "key12": "34wDuTyvSbCJ7xxa3dsZtHTty2wVbaDUyrWsFXmuMJaeDzR12hav15F419sURs4uUWKaV1n6WgwiNw61WBLAmcJW",
  "key13": "4eVxDY8ZoVamAPgzXmrUxDJbk366xD2rn47iKPBg3ijB7tSEkuY1meisqXk99TUUEvG4FdzwkNTVoR83WHQ2hQCu",
  "key14": "34WsZUFEiqrsBrGSNWscHrraa3Dfsn1AqyAg98y8csaFy62A93pFSpj763GCaR6r1mmzKTMTCiFvRKJrahXPVEsP",
  "key15": "3Kz9a1FpefW7YLERddMy2z3SamJFftDjf8u1QUne7cMrQfxJe64f9Z8JdnYX51BPhv6jPpuCxsJqJiWMEJnymXqe",
  "key16": "391QbXC712KNvHpTQT5c4HkZ43VWSz2SZopDCf58ex451TevEPt46jCpftcvXy1SXi4CGmE5SidzNdUxUyo91eFy",
  "key17": "5F16YWhXHuhR7zvNLtaYpWWBEFsT6rTgUJnFtBhBwYy1CjVvqNXhm8rGaAcaAhZQEU8ghhcWyV74Z7Qcn9Pojg54",
  "key18": "4QB9r1DzaxCHrG4NgVFrKYtGzHDmhrtpdueVKzyvzREQuZhMTc6sk4Z68GXHDPngH8zwi35jWPZZMkLJCzvyJZN8",
  "key19": "peUHejbc6kjfPatCLgHCRwrxEQ6UwG6Ffhwnm7RQivMcQRkv2zY3Q6utDt4mwCk6srqcV9kFHXfApHbN7hDfRsT",
  "key20": "3noo6rxJWo3L6hSy8siZ15fHjofDjFAae1wZaGAMpNXu3av4nhiBvmcPUrZduUz6r5KGrwxc2SdN6J4P3gcxvGcs",
  "key21": "22wSqFRa2NswQ5eXVJuVyE3oaWPc2V5LT9DyMVz4PVC2fMZGxoTApyvgNwJiTo8Cs91kJV8oL8QoBWKHUapk1q3J",
  "key22": "2ikCsPPraFyEySf9RSXVTmcws8KAqygicHY9GyTai7YKYBdkqkkfT845FE8Nk4tpDiHduQc3DkeNi7896KVw51Gr",
  "key23": "4kkrctuJxhZMuca7hJAaKJSc6sBSmv5tceDX7ZNPtk5SFyEtmBrutFe1cFY5n2Jo9S6C1KMLGnBDwbvJq8K8hH4z",
  "key24": "D42sJS1HbXLAuVJvjsg3px6Q3gcWPGPotA2P8ymHPsLVM2R9Y9kqfVRjcTopr1zVjRYBTHj5m1GNZVPxYodNaeH",
  "key25": "62RSfiNhsU43FjodfZ8jLYGeAucZcKNuCYrpib8eeaqKkmSeXCmWUKEksuJDHL6ba7QZgTznfiDAZ6UhnLdZM6C",
  "key26": "h3QTKaD5ZeQbrr31rAX6tmTZeDdh9dYxy8SppuSGkcLQT2dgHEZ8u6iByfjkfmYStDzAMuykSwiQx3WsPtxQ3Fz",
  "key27": "46tvmgfDUb5u4JJiFDG5WDJxiLK1bEC9aZeNXo41nQRDU1FDds46dDDMg65qSL4tLYWdqfcZ3vJ8PcnMF5bVHgQE",
  "key28": "5T4kPJYJKgpES75ReM52EvL57Kmsqez4o6sBVsz9sfTcNDuU9ygRGoHUgYzEs3Ngcrkg2UgHcJmJwQgJbEvWQWy8",
  "key29": "2aaKyjPZX7Pg6BhWNmAHUsDBZ2ssKKT7KGySK72AZ79Hi9NXNKzL5w7rrvKFYtLduGoLyrGGhayYwrt4S4wVkiW8",
  "key30": "aLvknMYCMjSN4nstydc3WhQfEnYoEkpkVoSLcfgruUjvDpNp7EwxsjyxzLX7gcTPgwopovUU5nYauzMicMJbR3N",
  "key31": "xP4bszgzBXUxu6hLaR8tpm4jg9xau1G5bAkgMohvPq6jyYrAwYDsRajqep74sWWpnnmdDsQg6qJUAkjPKe4qoPH",
  "key32": "47C5DXBuEh7JuwEZTtxoVTUGBJgj3S1xGNNabLzTNQYHS6P7PDCvEyefj29k9XXWHyZJywn636AGLwZV6ph8qBkQ",
  "key33": "qRtTdktn9Pw5RsxdQHzypz2urPoUkpswB8ApvANscvUNLHD8jhGH2NR1KMxtb843y1QGe3owc7XZKEw5PpwNXB7",
  "key34": "EWymnhPZbRHzv8wC7ECRGf5oojNmqgK1azgTGdAkwvY5PdcH7sFWEwTxrvRqcEfF1hPtsfD3STQKKpMGTdJ2rpD",
  "key35": "4TMGszpzRybQNVsL5pFowJodGB372gfY9woLtUQDwgMns8oA6hNVuhFnKZLEDtmej98aTtcqGsHmS29nyqJ66ZuR",
  "key36": "fm6fjbtis6Ygn6KTwdiy9pUyemCrPqxYMasT67Hn6EDP7Fy1KvuHSLfr8FhnQa1MLmsye5zh3Ta2mc9bKCqrR4E",
  "key37": "3DzA8NqVoGQ8Km7BzpYYMv9UcYE8m94MzgGs1qT43f6hThV7dTQuX339uvDmDWjG6KTk9rgCczvNSXnwc2PciTfv",
  "key38": "2V1yiQZEt2Ci9bZvKv76wteCthseEbEA8aCUWnZNace926Fza4mcHczFQ4kB2F6aWSa32k2y76HqNuBXMsictiCo",
  "key39": "2qPCnfaVDvWeC9uVBs8E2tjuJrUnYLJq4EgXNWfnLcVjndEDmVHRyEStsdnPegg5H4rpWmZ8ZAWho5XiGwUoSxhi"
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

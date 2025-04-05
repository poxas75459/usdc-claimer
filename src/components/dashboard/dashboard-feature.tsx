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
    "2eFXg4piJ7iXk9f4ZyaJS7fw3SDsem21Vi8qcdJssEuhyxekHViuemhLZUaoZWUiWyvedeqkP3iotPde3r6HtCa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qin6w7LsZJtgb4FVmtZKR5QWtvHtHcdc1i5NJ4oirdDVsJ5xRUaGcxoh9MjKXfnt13NpUYg9hJ5icyUuoVMh8NG",
  "key1": "2gr1s4HA9FpvDJnq9WkRUjPQQzZSczmhhQC6nMWWEKN4wfJZDLWbUY6eghszwpTmRFRGXXhSMESwXKWbvLzG1iDw",
  "key2": "5mNQJwaoquYKujRwQpAD7B6abqdwJhV6Aztf29faTBXv5pA36rPBgRiQ1q1hQdD1xVqyk28P452BqgkgMcjf2Q28",
  "key3": "3BoT8VZ4rA7WphwSe8RjbMx1TJCBHBkPM2gNMXeBYp7bF7raycLusH34HE4hh79smectbsL3kGJwJnBxmUQhdPUH",
  "key4": "5WxhTbTSfQiyuu2oinpdxiSuhN7XsU2yXyyiMCeMDPe7r4qzQsh4fi87xHETEMoHvXhva14ai8n7VsaDy8diAHdn",
  "key5": "BB42j2sSBc9bgSUB3EkTcSwqD75RhscMrwyFZqCWPbBgmGgbnSi2UrNWTMRazrc9n34NgAcJ9CKQccgKPSYCuyY",
  "key6": "3rGStNszaJXbVJ58yRcLaATnSHLGKAkSYFVThhDh1ApWWRxgnXX2cWFovpqU9LDFBtb6gMenE59cd9wGyLjEPnbp",
  "key7": "nBsW19MrufVrhjuG9F9UuRitbfn1skRJWPebKR8LWdJLajqQWZimMhTzosmgvx5B4zfEsgQ7VJNUkqiEGJKAEfx",
  "key8": "4fPQx2Wnnog5sc7DnHBYZaNVraSXt9o4ixmT6XuNfBgazTWjWEv9UjJt7jQg8f3h9cpTsso9iq79XveewZrYzLwY",
  "key9": "4T1QiarRrPPCjCbS8b7sm3qW8AziYK4FeC3rRpprYP68rHUZ4dmU6AGx6RU44P2Sg6dVWu2sE62Zby9nGjsH4cP5",
  "key10": "4tP8gMiYt22AabGRr7hjGpKNeG16zNRzD5Gvafb1JcYskrFJkrPKSrJZYQ3zZ1CNFdUQu9fyLyrS7kg7aUTx654z",
  "key11": "54BYxrbFmEhtXhWQsZtE6zEpNRzvzfHyUMKGZPdiVj4B2yocSV4BrUHiJjarWWxKneE4z6HXYAbUSXv64Mze6uuD",
  "key12": "kWKnbEduwMnrxDbuWpwht74okrPBAfQH9WCXgB8VB2Uhyp3nkYX46RSrE5vJArJzxT9G7kuPeJhyzZfNJmV3XEu",
  "key13": "2tW9XpiBrDJpSU4VL646VJb3qeW4rRNeiJuA6L3DiK4mScfefFzdKVaaKqKTCfoVb1DvBiXR3CDPVzkxxwpNzavR",
  "key14": "4PkEyYjbL2Vpdundfijx4hDNiu1uBEVdngndiVrnRjECJmjREKp4iRUok2hYzbjTGTs4KBhwZk4mo2eGL5THmjeg",
  "key15": "5XaRzu21nFPwmB2TGZ5MVkGfzVVc7diuU623Smz9iPqVmtBHMfCFzZRhvY9JknsgyGKfAaiCysdzRwMkgBTb9akn",
  "key16": "Paoyf7X4RbV3uekgxqPVAnfFLrBzWp2Vfh4c8weyHgzurEFtcEM131ykMBtCXdsgd2TUre8ZnKfviM9NC7V5rtN",
  "key17": "3nYezVB71LVQbpToqH548biRHmdb5iiZ1u5HSPhu5pTryhbHq486FrGnsgaiAJSE9qDniP3LsbAkqiPGAm7Rhqi6",
  "key18": "p1dyBdK5J89rnfqu3iKZ4gjGJuyNG8f9QELRD1WN1jMqf6AFupiGfNPzL9rLcsLrMfkwFXcxtnnwEzf8ShqtLZp",
  "key19": "4V24UYoubEJqpSY3BokMTquSFssygqMXMCEF3d9a3UUe6M3cxbX9JeHWW45v9DpTzpexyGQ8NGRtP4eC9Us7RHPH",
  "key20": "Y5XTckcNhdABnJVB9KwuovhUAHHdhJZLHtQKJoD6EYZVauFS74ZjzgAejtAVLMdh1nwLrEGk8f1xmuHXAJWafgb",
  "key21": "454C1ThipYys4c1zRrAGbxrJBDy3E9wS32DSATva8try17NQN5h2oFh4w2zx8BcGzYeohHWkxJEZooxBgDxtowD9",
  "key22": "umpLtkHGJoLdGuTZzcdPqBMuHUwkcoBQhtbddrrXQoi4UGxZzMtUrvKXGTnoAEmwT785B3B3i7jFtBTsWqiHqTH",
  "key23": "DfBC9s9SeWxM1cn5wYTjbenFfMyFwsK9CMZTGzLZLTwv6CKnEcRG5QQWQH74jtDMTn4MwFhL8fSGL6Xbk1rMyoW",
  "key24": "N9HKDqMeCHkMT7BSxtyjchz5KpQ2vPTzVHgMxyRWmEYM73VJSzh4EKyt7KsMhmpkQio3NwrQZ8oaCwuy3ynFXs7",
  "key25": "2uZGLZkja134qrpXzjPcgBsMj9rhrcB4XJFrCgdSk4ED7dnGWuVyptHpKhSBAbcKJFzk7gqPtfTh58RCTiEgarxt",
  "key26": "4c6qhrVE9LEpptiJpbEE8z5YBCcDyYG2ng9uHeLhJHwEQNtD8Ho7TqS5fMXFJ63cCFXv2LgpD5Wh6MrTP9w8zb9B",
  "key27": "3PtBreCr9xU4uEmyWwoZXfJGBpnofgC1UtRvDaVtcgKPmyzugW3J2Y7w43Lf7AefWvTarCa9M5fxybBzGf1g22ZM",
  "key28": "5MAZARCZr5WqSeEmGu59SQaBgWfvChyonYWk7Rceto4j4hRqLgoQHYmeEyeSh6yeTLV42ZLhmPAJyEqywBejNY1i",
  "key29": "2r6gzZpDH1rGJnBuQzJaZKC6fCRiLedeMhC7d9gpyrPmnx3e9R5P6QfdhJA736WUZLFwuzEiB6hc7Vh3mDGjRdP1",
  "key30": "iqzreeNK62twNSYaCyQwJ2XhvL5dTd6a66VDhKv5bq62N4PmwHB66C2H9rvxyywT1dVixgrxUaQT8jN5LkabViV",
  "key31": "1j2iUgTcVN2CnXr59AZyXFWQomh48TZ2LiTNbVSpQBnXuuzyRHjjWpofJ8Bu94iLRUfaot6gjeT2EA8tBuH3pFj",
  "key32": "eQbUJcUUtdhHCjtgEUB5uqcRKCr8AZtc1SY4ov1VFHa4pG6CrNcCJehJ4G81Q5n6hQ28EkgVxsw45yWe2Mn5Mkf",
  "key33": "eAhZ7tB2QMAFxFrY7QeBMBHYNyVGishEsM7bCcWxWmjUBmV71B979pcm5imiuWxwM1AWNSGnifZ5XpK2akex8tT",
  "key34": "2mrveWVudraVGL5KtHYFU7K82Jin76m6JLG2tCSY3oJ8ErZk66KT7c5zjR6ueiZdneMWbf9AGB4QdDS9eSNyMNhp",
  "key35": "2y7z52AXpLPup6ocEY3gE8uLgguqdakgk2TuhMFzXjSsfNVku5EzDxqCJ1fqC3QQ4WvDtmbkTTdLuj7GmQAjsGLZ",
  "key36": "FonB65NhqNcLxTYnmVR7AH81V4fmSinXicqRTQLa6kxWF63cuuCqCko2LLSeC1qe6vdTcU68Q2mnxUM1t2WaAM4",
  "key37": "4PTM3X2E6TVgtZNL7tsh9brThZNRqCysqy91bMbzAwbPmeNjQe9AUaczwHMf76dStinXXyyqWPPCM78kCSHwqSVN",
  "key38": "3kpkaEgifk4dyoGUGh99vMRz4pv9VLp2EbFfASymEBP43eMHTx5mXjeEY7sMoyh2cT2hZgoyyvjhUVtreNPHugtm",
  "key39": "523goTmH5gjP68NqW7tLgVKyVNLfKEAmEc8TvEk1i9TnCwr6Apv3TYV2FEaj6m63ndDBAjUy4GBXBQeFmXz6JKHs",
  "key40": "5DxyvgRfkxP1TUYTH1wAwzAsTTrWXwr9uRLrLsMxHjUudGP55tyV4yYAJ8dorU6JYdwZXQpoqMJtunU9oEsj8udy",
  "key41": "5N4oMftKXJggCbGwnx1KfLm1E2j84nWA2FAb8ZHyvtwMWguGMxUaGXrjSKTD8d2qdD8SNGuEjdL61JT7AwUE42Zg",
  "key42": "661mmSw2g79hf75kVxxqxAm8Pgobhq5CDtMSwNi3Zg3VcNryj6hECqaYED7ruovWt91nsNQMSmEskrR5thXZZcU3",
  "key43": "3g9iQjWT38jF6nBWd84aVcL8Ut51xh46KNntXtUMr97xJbMBTyZJhczWJ8Eim6SaeXdmbH1eMszsTGWzuZ9Uksws"
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

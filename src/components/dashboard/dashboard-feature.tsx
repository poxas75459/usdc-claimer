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
    "21Lr5t5SGbFtgiTBBAWjKMsptfip5LyPCZRCRpYdP4vTRRzvhYZmD1yECGLkQ8JKwaoZmaGseqatq3phKbTYnpvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pU4mW5H92y19C7aARhyByx8cqdF6mXLNjwvGxSo2eFA3w563aa3QTwqywBTduNPZarkoyaTtvxFarrk7cmvWJoS",
  "key1": "67NNkTGFCVpyvqhUWatpbZAZsCgqtfadEbNGo7WyxBS4agnRWNJHTHBbQnMEaF7iNiTqYCcw5aMpCkx78Rfhhx6A",
  "key2": "F16Z6EPNTiPqCdgm7kMBcqqoByez7rgRyiB44Zz5CWu3vwYuoAdG2EvrnBRtdhSGG7FNwrdncNtwBDfGKEmEBH1",
  "key3": "34LXXpZXxGKmgdPGnd9p4FWEk1xVgGHYtijUFfG5eMd5FSAtPFPznEiyZFX6D4auW4TvUVTKChFwYh6fAvUdBE6R",
  "key4": "RK8VdCKBFjyeChXNVJC6CyatMK3u6jfvSr1iATPNtdyq5n6h4wAPRQUp2943F7nBc6msWv9DP9uEswmWybiodzS",
  "key5": "5v3mjmJMSAvqeaRexRKD2HdZ76gm5TyKKMYoPQPfvzQPv3PsHzcfoyeuXUnGTmSyFGHnDM35UZE3nL5NGEp9gyz4",
  "key6": "47euAqHUstCrJpkFrVNmJNYXLeMaS8th7LhDwE9nbox1UqjKrQyLcXvCStZ3m2GULpjXztmExzfZc58mDC2SJfDA",
  "key7": "5dbjbr7zHFM9vz9HDKi2dDpyctEEtjrKSrREt4eqqCaTmFzdFEdRavRvEWkEUAw4GZsAb7Jd5aBRpjeiGn7yEH5",
  "key8": "QQuqrchVBB9n4GWrdyrwxhqtCvjLaSKck3TumtxAwz2UMhWB62ATLcvZqrt9TrmL24CPBTCrZWSgZAHkr12CPzN",
  "key9": "3sAGn29Whkjf2ks1E4ujU1satoT8aNVv5h1of5p8e2PSQhR5C3hn9zdbWJMWj8oX3tgoj64RQAdNgp9S6QevCz8x",
  "key10": "5SivQ8vM9DRrQWRk7b6w3oRGtJYzN7peWuLMX2EQp2Xsa3iBoPdp95roehgjpyVZYMJUp12ZMQ5hg3e8YGQe32m3",
  "key11": "2sbJpNiJWtBTQxcCpQSjGGtdauygkVjGza7YsnqqbqkfodDfSe976Tp5EhHjZMVgQ1Rf6fSqXsRzoSc8sajLnghT",
  "key12": "3EvLhvhBW4ob5bnbKoUVe1GM93KRfiZNja6hbEL1gm84nN47iq64pbGe9PwfmiaCSaz8TPKrWUvte256Ruz4hymq",
  "key13": "2gEjgNiTrWSzzLBnXXyYoXcaS1o9FBdBXVzKkYzxQUmvN1RsRc6nNStcXnhVh22Ae4oqs5CHjxGDhTvyM5a7494V",
  "key14": "5yW5Y5WKV24aioLAdomtYu6aVB1qd65pXwH96rnD4vMLzHCbAFbt7qskPPDTtBGpzUQdGLwqi9n7uLcTARfduyd1",
  "key15": "2pL5Z1y68s2WG8vT8SX7D3Q1spnsiAYSjVe7U7CB3bU5A8Lwi1fdfnuSGYWMhR6oyqnM3oBkGZFCEdozgzMoKXAz",
  "key16": "isrmGA9uAuTHAZEVPouuPCou8naxeojSaoMneqj6nXhfDaEQgf4mCdbn6YkQBw6AM7g8cZyZF1477brEdntybZ4",
  "key17": "5HpTqCVnzMB4uERRaUsNA6KneSRXnfBSRCatGJwCVZVbsCLZbN1pviF8Uk2cvP3nBciKNeWRUiLz3ZYxi4CLPkW8",
  "key18": "tfjSQBAf3xKJeWzMGaUREV3PgEPMCVqx2yo6aZ1qePQLXYFGRgURrT3fHi4gPAe5N1qvH4bHtfznMT1hUwUYoqf",
  "key19": "62eq3jcXv8ia2NSu722zXtgisnFcrGhmXia7edSwiiDfZoJszwZSG6bwW6ypDoybmoZSuDvQKcjzJkP7gjusZMDK",
  "key20": "4HJWmsSns8Dojttk7m6kbeKBodoaBcRxDBaeyiZihCnN8ndP5VSnPB7VGKxQrEDz88JYBp6P6ASfefRCJGZLbp8v",
  "key21": "6zwE9phV9fTAC2X86FxkRkRv2CCNKMGXkrCZJYZFtyAh3Y89Bhn4SCMm1EunTQDGSQ2MqVAastyo7ziw1EPq7jM",
  "key22": "3k8BXrnYtWhQS4iMvTYw9DxSBBQGme8VFUoMqdRWtbSH7fUDztE97Qaj7jZmTmu8y1rgjLUT2qte5Ueft9tQkLgc",
  "key23": "4H631uXsRGC3oLEmxHdCqQ9AeHVybFdDmNL7vHghNGUm3nSv6rWfKhMhhpV9dNBodzxcfmVLPpbzoQfkuwQ2i7dY",
  "key24": "KkKYFnLfTHfc27e93iyE8TgTBKWkgxxaXtpqDatcVcDq2Mg5MKsWRobA9AHNJiBfBdFr7cHwsRRvrnEcixN3eAi",
  "key25": "2SAX5Rx9LHkhuFPvNwxMREfcavh548AcDSaYFq5HwN187dGFXaJ2SXfhSwojBSLZh2vzgtKdudG9Bp3Kek7tev6B",
  "key26": "5YkC6D9dPd9jMqLFYe3nGi2YhGgUEVie5SVUJWMX874wWbiYVHYZGvqsTWZKfoo4PUuLtoVouj44CiCCfzHLguU4",
  "key27": "3yVQiZdZGTsgoinyiXrZ9VYQoZ48BsFxY9M7R82u66JZEXbPuc8huAxDr3MUbXxpV8v2Jr3DUQdFY7wzF8TbmSqP",
  "key28": "5vNhgi6Z8aYCa4y8k6bmq74zDU9DcY64Sx4KEQY1ksg4s1r14wH2hNjHGrxXsjVfwoxEzkF7hywXmLJZmdZHEJxw",
  "key29": "2nYzNpZLKGxxc833e2LCf7EqoojwQt6YHLsU88xxaxF6U2yD4gj5UV3gDGLnLw85HWCa7En5aTfdnvpTbVxMZvMx",
  "key30": "4bpf9hPi7TmZR8azKKWTyzosFyJykH8ZR2T9yDDhb2kJQarJtnKSbEYnvpcZ6Ak63yGxHf36FzjCSoPTHMk3ehoW",
  "key31": "STffNuAVgjXwwEZmHnpqxeMx89EsNnnJrzmmiX7aogHm8PGErCz3i196RKyoesXm3k8d7EHwMovRAyTMFfUnrHg",
  "key32": "wFVRdsDQCQTeAxSJTMML7AR8WzJinrDSndJwro32LPFYfWs9ur66j42Wm8campiuG2oV7u1s5a59nWaAmT1L7gt",
  "key33": "5Z6dD2dDAvpHjxSP4jyamAAgp9y5NnWTUVJmeiJoDiT7gskJBCTRDVoVYPEkJSQ9UpCiHDyHezg6LhjxzjA2ugz7",
  "key34": "55aKA59uJCMcNK7bFaTfT2kvNSKYkgJUvyx1A6RTKXskY4LYuHfieKtQ7DKtADL9q37ihQGnsmTiHw4qiEWREM3j"
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

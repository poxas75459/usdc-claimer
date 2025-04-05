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
    "4Z3XzZCfuDeWQQVQwrts3t1amu6XL87SgGP23gpkG1mVFmr6sEBCxumCkH3NCHxRrPZijGN5VVq2dobWjjTobaDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JhCw7384RtvTToYjrJ7vRZbfCDciZS3xJMg5eJ1y2xY97YjBJGKubxdnbvaociWFypprZ6qmzh7quCMi3kw7C99",
  "key1": "2dPLwhY8K3Ne8JWEopnxCb3uwqb3k8TDKXfhaxAtpswC9e5X13Z4cP2sATcfwJwop3WHvgK6hxrXh8G9Ti77rtpV",
  "key2": "4ABwZG1NL4aPQ6msgkvsyc9GwsjNwfS9KsY7cAmhqbNDtNvQMsCkVtEQBNcwW4umfPvLE4gYdRxvfFgQmuy2hCRp",
  "key3": "3JTjfL1mj55GawW7giqr7KUkWhw1QKrj97beMeTpAQgrAzfTjMjwfN2npGzG8pfx8ya11n7RBrzkzY8mATrdWLph",
  "key4": "4jWDrouw2Bu7HWEsLnAEBUnGrbiPtd3Ti3vdWaVft4AmDVHWyXghipcjPB3XfPHvx6Uc5BcASgMgYb3QqUnGKrug",
  "key5": "24nxdi8aNp5reHUihAK6ftVVzD7tmtvC61pjo8RGTKVuxZqGBTDbLPkw1rr8QpaGzabQXVeVWDXnNszQL3AG6hpz",
  "key6": "5WMXWNWiDRcyBXUjBZ7MoQMXV1jmHNkUjuGNGrj23V3aaYuWGrYSAfGr2LRhNJz6eNm7Eo4vCGWvTLAuCoWmJejV",
  "key7": "4fScksBDUjKePvx7EUZFkoq1QcoUckaq7mb4cLe5BBjf2wFGW71Yiw6egAeos1R3mZk2YZC3YjgzMhztDW7xtSWa",
  "key8": "5t2XSaAEpratKB6UWV1u5y7jxhCEkd6fXEG6VkL9CCxNNFVuLhskLMgvbcNDjEkR98zp2RnN4cozzsk79ZRDFpSu",
  "key9": "5YV4ApSnrp5AYKTQEmqvTvpCvm2HhH4tXE4FF3bDoQVBNzuCKBLbW6m9R2eGFsVK5Fempa3D2zB8DjJFyQ8ccHPd",
  "key10": "KUNWUThwRH6QBAS4KoUVkL7yV8Xae8tTGGa62LgbK7eBqbfes97S75vFNJPooyyeXKL11Gk3tUdW6CxqKwRiLPr",
  "key11": "SpYAvNrNHKoU7d246rxyx72oN8xb4R2dJcREuhvzvqP5ZUStfFXy598uSw9Nzq1mygkVJFsFGLNdsd5NT4Ue3rZ",
  "key12": "3xkRrSiyE1oiZV9ncje6fqaXdUxKpoNDSC8ycMa6F2AMEmHgxXCFXuQ64KT3bfS7LpFZh8YqiAQe9CZtEMeJW1pZ",
  "key13": "4NyD7VZ73WyYoZUVHHf7BnUpsgePVANPkDQPwFfvgKUErBG1LVQ221TNLVDh3KiYSUpeanDCZquoEVhVPaBSvRqT",
  "key14": "3BxMS7NmqZSXUDmEGoy9gRX9bRbjF9js3B3tQXcqDqYqYymem7y1JkV9Y8ExPwFLEbhntTbThyF9CZ5HcZYGaaEc",
  "key15": "XZfsBzgEm7RWuM7BKoCaVouTT6p56cUAQgcy1pikc9pwX7C14SKwBivGBWkTnJsHbiLTTiq3Ke3kDDx15sFwSXk",
  "key16": "5T7FZZtZHkZBrWEN87f9yrHC1cj9wzp6U1As3VGkw6eqfFdJmpkjKYDj5fetvsndHR3t5gCCQbMrAbVqHuSmqR5L",
  "key17": "4kfF8zhaAvqknka94w7NQqw3UPn5C78jvLQm3dqia5aA2GWHzrnW5pmxCzwkEZCDki3SDQY4cEAqQC7HigHtw9pW",
  "key18": "36FyxbfQFWWF5g6Awq6CbDn1wG7ypqp5GoojC5qKq6KYR2cFG9ZnGvYJmyQcfuTNFifCsGwt9k6MeH8Kg4kCKbXj",
  "key19": "2ab6rz9sWF7FThTR6yws6b41kV6NmV9GBnhXNuLvjJVADRPMQ2BS53566JBzTpN3sCf8ufDYkfECBQ5K3sPDPDGw",
  "key20": "2PUqA7pWPaAeuMDDNCA5eyZHVfyt8FBLbv2gwKKak1KEREG4s5qXQ2LVqVNxPy4tGMLGwxRjX137QFrXAf3qfaMz",
  "key21": "5qP7JMjRPbopGZF8c9YMkjBnDL5M91uzEBfiyLSVB5iXMApBZpRJ3yfnPtmHQnsggib2UY3b8Wn6AeQtbFUUSM5M",
  "key22": "Es3RqaErXWU281kngz1JPH3JEiSppA9ygUYQooe9WZjNquHNPVos69pw9319AozHs4MRcBqZdEfPkuepv36P91p",
  "key23": "4o4mbw5tTxPNUqxqGKT8GiTBqKGxh2JTyWAcTierH7wtKVX91gMuotdmQVausjKu9WG9MF9zWRx12D1kbK1gHUkp",
  "key24": "2HZ6YBAXGfUSXAQ8p5JjWP41wefXJ6AEjWg4kZw4UHSKLxFWuXB5ZzoRAzqDteXyQLMjAHMLL55BXerLoJPFVbxJ",
  "key25": "D97hbZtAMY2TUvaeSrbd4qBbDmKNkP4uNSSiBLv2ie6sSYLecfCMrrfZJsPXGfDp7QVTUUoXiahdjSKqMC6sNY4",
  "key26": "2wjDjrBD6SbQiBzGhZA995F4R1myuokZh8JeSdt9xASoQ26Xjy7hAbQqkkBECScdBpGN7gPCk1EydZAniBv9VfDu",
  "key27": "3Rud43GrLFnsT8dw9YUiNTR7y9QkVo1akdGWySwdJG6fpxcfSZ6eMWafQgGZZzg4Bz8nwwEqJdCfvsYPTKSvfuWs",
  "key28": "45tRoLCVCwYfgDv6iQb8Bsi75eXaN56L2xrBzj9i5cepZmfmVYEEox1gUoLsdoeVmexXeAjmWX6EDcbc1DRCk79H",
  "key29": "3Ajw14GQCj9qmoXTBzbpYd66n5NxGLe4yHGX3EK7DETCSCXZC5F1VwKjooU7LAfA7iutiPckqok9C6XHaoenj9VS",
  "key30": "3hCy8ed6Wht5voKHpSuhXcSjw4waYkhgwxPEbiRkWWx5wPb176S331k6Ryy5KgNaHX9xd8fZF58HvESoEtkeEFra",
  "key31": "88avHVLg4dDYKj5TYZAuTngEWZeueNzUGd9q5caLBFFNHGpTfSBPtmSRYVcqK4ToxRodF5T5okmNVTU66sWvNVq"
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

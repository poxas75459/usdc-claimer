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
    "3fS9BkG3NqBgHdzNGsvBgvhmEvZBuaDMLcTC4RMdFwEqgiK663ngSpFMfwwW5ziu5m9QWq8X8qucNLB3vkqbQWsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GZVXsTzJyXtGHydH6Zk3QJcTJuJN9PDsYkvVD7zoiQXTgiSvJRzsrWc4N3EwwjmgujT2csnSLvQE5Mpx11PNZVk",
  "key1": "5npaT1s55RKvXE52mrhckYWzpeWbWtM3qQ718KPsKEayuRRUKhanFoSfKayK9f3sSEpsVAgZnMpqXp2sKkA12GcS",
  "key2": "2ZpSZJXDgn4pDCo1spTx6KDNRw5WxJ3eN2G8BWD2Jdvg6ZH8nkJPiojZdgV5xPgbHADp9JipSrLaa8XxrPXHrdoH",
  "key3": "33zzRQfp34X4WHhj9rTYpo8kf7Td26xobvr2NRgAZDnjvfN4mrFC2SahtkoVKh96AD1wkrxaUxncomtuYQtMMp51",
  "key4": "4qL9NehCZ4CgM6b6PQVjQWqMGnKb3GE2rWNScLKYK8wcSXkwoagFzLTJE3xYrTHF2P8quGYGnUMiJBfZiBuuc9V1",
  "key5": "3Dfo93riV2SNUn9Hjiu93iW9N8SdxC6UquUaJb74xwLo69KtzTBmWbZY1LTVCQVnvrE9NBgzN37ZHbB4cZ9heBMg",
  "key6": "4bLWPGjD2Cp5izpRaWFfxRbnmQ4scaHp2XZei8FBn66fYUWmntYaCfDWLffxdNpxVh1uxUhegQMTPDq9c2r4F44J",
  "key7": "Q2v9K4e9WSyGfovCqA1H1YdJE3dtRCQsDKmMomxNrFSeBB5YkGbcyFNLNg2UjdfTFdYrWFvLF66JMiqzYPFDrDc",
  "key8": "3C6AzDVbYB2TKyDSv8B1afEsXqkwxNbneWsi3h8YwYKos95M2xUokuzmoEaRubwGiK9eG9m3yPXJmUReYR4529Xq",
  "key9": "35DRjkTB9QQ1Lt5CPbnDoLP9rjqxmUCJH673gmwqC1ja5u1CM7rspnWADzuJ3Wh4jYudnRCj7TYCCDHhPnsLDUsS",
  "key10": "5WzeKR2hmN9LdoBd6whfFt3LB2NNMxWFF9fnZT5ND6KuTs2v2pzgUKW7FrJhGf5qgug3TpZe9szsefpkQANmFEMW",
  "key11": "xjiDNSFF71kZPAzMVnwzVwXRk5sUiuECZGGTY2bsvWtY6VaU2acPSTSxvveqkefapJvRMT3eg34nn7SeF3vfGFy",
  "key12": "2CVzUsH2NsKW3A6U6gMZWp3XKEhTYHtptuogGmNyMDK8zADEq4UcyhQzc5X521r15vT5fA9r48zUudfueW2hNyQi",
  "key13": "zmE3XiWRK5VHNtP2pGjwvXZj1ujQVQFYzd4jj1jjx66QZmwhY2qrfEcjDgY2QNxEiTy4hAjMUGqKyNT8bjbtNef",
  "key14": "X5bHLA9DBfpSqmnk2id9wKQu3ida7KZemoRY2VLpWsKt4PHCFjmWBpKaw6kn125ZCeEWkmYmYYCcaeSWd8LkynD",
  "key15": "41a1tMH23w4TNA9nnpmLQSgTi7oJNLTY9XMWXQ6Tq7nGHX8fzmx2c4RGmAEEkL74jwuNcUZ4L6iVXFBRNgGHHyyY",
  "key16": "22xkuj4Jg9KmV7dqF8i95xAqrAwH7gb8hG4V62JAF3uTiUKaFvX9RaAY8eiGchXVGkjNWdrYyp7HF1MpoxKVeRHk",
  "key17": "2RSX1iH7nbNEifVuagbL7JkPHoak3G2U9EozR8P3w1GDkM8J1ytfGxoF3zpGcrbXx9rJ9Pmnzpbh3WKPUN3Vnyu3",
  "key18": "4HFFSxDkhZUaiD7H2sbtkBmk99Uwj4o9cejJkYnzat15tfxE7Jcpgmv71eDxrSGfStkGNXGZBXHGk7y2rXq6CwHp",
  "key19": "3NcZaWP5Br9oWAk7eNEE1D6nH1SijRDxmbs87CGNLsdK2qXqKpLaxisrpg8M21GQMWcJ1xW4fPmP12YLydNZmQbc",
  "key20": "4mbfbn2KYhQz12egFLr22sesaXHkk7YicrXfJpm6uMzXD2egkfpxhnsNYcBScq3CxjLVwMmNiGd5z1aAnXRhR8AE",
  "key21": "4vDZSH8zNZ4tZzM4mpBzrdnjrNpJCD5d9AY3oSQNRMwnn86WarDfS6Sxa3cU3XTbWLE6mri3r6bCDAgyBhDRxJmi",
  "key22": "27Bip2zmHxdy61jgSLad2vooBuj6GaMoLMuqfHwxngLXXQV8dc9EaLKamJWUTNouFTb2CA1hdAnAxNdQdJKQV9ok",
  "key23": "2mCwYxfyhtcz4LXvaAUFn8rj3nn61Nf1Yc2sRuuPLRu36uR1LZrg11MKCtynaFCU3nw4rxS8Kf9xdv2KUqKbmjYP",
  "key24": "i5GtHoNBdemFjyvmhBfYWZ47oCo2LBdif2f3WVAWGrWEt2WonCGqAuP6BkXg9zLzheGXrhMZwwghSYmEM6dTQ6D",
  "key25": "fi13we7oPL6ydedJiJqQXJwqKML2Umdb4jK5qW4NFfeEra9Vzy25pomZ5wxC6TrwgpBKqEZALrhYZifJzd9aSjz",
  "key26": "3V2qMmJdL2YoMo6BT5FJPGSsfefLji1cqgMds8k1NfvL92o9YX9gve7gevKLi3UrALxxeDFsMrtPAbuZWccC33yr",
  "key27": "3XhfGaGhAsVgWqPvUshquT3VmC5YdwxPEJUvuDVqUgE8uYxcig6KF219gVZ9pmMfmm4ywTypuWRgya7MoGxpXS2X",
  "key28": "5T1ejS4KUht6wJkhfPzr4Ud74oQsR9fZ7e7VoeXqG62zbPByEQvNGBMBqnz2jkjVu5Ht8DmX5JxJNM1ArngC3GwU",
  "key29": "ViT1DjuuEhGJkokY6R6FCyvdGY2ZSqMGu5pizScrizaK7noSwUsoiKBGed51utXadAfwF7d3poJsxmmLR3qfbbx",
  "key30": "5wXTyQPpR1Ny2wKAC4pJfjANEraTY8ggBvBsyz3BaHXv763ZUTfSwyewivg9rjcW3CczMhwLfef1ubrPCgmE5nSH",
  "key31": "3ywhvQtHFBaupr1j8DQYhvGpSkBZGNh1i5TxnahpC7F6XSUfxo3YyMHRk5s4s73XUt73fnr2ndGWFPWamqYsG3Zt",
  "key32": "XAHjCpFaUgHnEosDLyr1jjmtjHSwgTDaKGLSt62xnSszasMpLpcdYZZhQZKcNyopMW3grdfjsSs8TdYeDa7dC2h",
  "key33": "4uZMvNRYHQJdLj1GCA5PLehiQT4QTpoW6S7nBdiTqFx2QCeHeMCCJEZpnAyXgRFLDJteJgEvkuBSCaSEBEYMAgH9",
  "key34": "jn1hxSByrcrxsCYeskWjWv8r7os1aXaxofi2KHMdbxuECcv8s8wVpLaVu74pseUmoyABmtX9vb7na76CzidjBs3",
  "key35": "4sJDTGgZ7jZq2xwLTocQKZ7h3MmxtHYueVR4njvmwqAnnMdGUowt66HAXLeeP8XQG2nTbF7LZQQP2qFDk6V3WEYU",
  "key36": "3YwvvdfUDVSh7JKADjXQkwmMEq3jRdKGBwjyUDJw3X7vJwHxuCNwidfS7jQ1kLnhYXrvo5B3eTC8LXgSVG52Bxi7",
  "key37": "zkPWjgMznkFfjLx1MzGB3zAvDEKaaNDzQZ2TWHo26mJHQHh8uhhJM9aX8X9zWLzz2jWnPuvQBqQcmW4kwjeNgAr",
  "key38": "5Zb4gfRGHqtKCxssh9DRGZAz4v69Tiwe3pXbdypYHMZRAaqGbRJaGmVz1nt2EGqnpvfPczLNFrksXuQxM1SbPf67",
  "key39": "4WftKAuU7M2evq55DYy6omvrZSqCXzsrdLpqEs4mpquj2ZDSL482Ku2CZ29KQ47TvEtx3M3yYDFUfQv6BncWV4e3",
  "key40": "XZpoT9ecBePu8MoEGcKLn8qnSjXaWe2kj5AEX2yQgQDqc3XNyQ5gWREXsDYNfvZmrDPYUPz5j1sz5ExzSRfEs5t"
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

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
    "2Gh6YsPx8QH7Ujtfcci9HrwQGUkiXu4dsWXDCBJRTs4cxVtcEn8Yjj3RGEQhX589nrvkRvoyk9hqzuLuprpedkt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mH7bt8LyxcnVGT8YSjn9hSWBizT7Hkd6KoMTVQyXEgmHFEw4b7m7ZMpu82axpYYymL3xjhzdP5aMNYpCDT18HeS",
  "key1": "gn1uzFPEZuBWf4AGJxVCGgbSnzva4wG7QLeLswTRXRPsvwLs1QzpmvDRaAziVKCHbU1v3rR2NTFqNoS7jKhcRKK",
  "key2": "679VPoS3vPPBbo1c7zi4CWCefmFqo9cdfSwXvwwSqpmA1Lj2N4CiUzATWhkS8UQczZgXzQJpYB7qDr75SRCPnL5G",
  "key3": "2eojBcPi53TKstA1xCqLhikw2vP2hcMRCzsNCNRTdiC2347Mjk1zsy8rhB4uf93hABZbVDbZpzvZB2d4cJSH2GZe",
  "key4": "1CxKpxW25kGeiKpf8FP268ALxoLmN5zTxdvptN6JEpGpxZcqdWGCP3biCLgbL7kUozYn1RMZebjKUKJEh9UKerB",
  "key5": "25vy3uAYNE4cDxNwH3NsuPiLh6kfvebt8Atvwwam9x3JC3kexiAq4T7FB4bUhcj1F2BwDCKssFSWc35qyXpoz376",
  "key6": "3qqDg2EUqEMngMs5hN5KYz3JxneD5WSVYANqHX9su3c1WTK4Q4Bu6ipDMPeCvFq1zhaeKZHUUrYsGMi31fuMgVki",
  "key7": "B3YR4UkuCkqdtJ7aRDWocezzjqSdy1guW7MN6AfcvcJZ4of5MzgyT3wixbRwFQ3K4oWU9xqJU185ZRHbQaCk77D",
  "key8": "4GJ6YWQQn1q2Hvxo38ppdYKWiWxMVcReWZqJJdjEu45M8C1gLadBwMiZhcLd1LZWWU9mQyn6muHpw6tRVv7Maz8t",
  "key9": "fnCuNKDTUT9FcJaGD98cmTE8DSUxLKwSdkxZQK3fNbBCTjW4i1CGTfoitWu1JBa2qZW9Pk6ucsesqV9kiDmk2ox",
  "key10": "6PjyhrhLrxVTMViiVyNN3PaTEVvdDHpHHhLVw1o6oJi74yjD5Mmi6R9M5dcpzn3cP2Ea3zmMGY7sDA8PW1mXdqw",
  "key11": "2b2od2Rf8Mi3Z7zQDnX3m9Bb8EkHBiCi4SjW2m7bcCP1RyBSdpJirrLfnnWhRnhDqdLcjKFBQTwWo7ti5f3yUp2Y",
  "key12": "5ECuzj5B2ci5BKUeLr1vZLbuC9cfT6dpWTPdeMTjzpFwbijJq7rkrFkz9K9dxprhf9nufAvwNedGfxzyLNbaBbuk",
  "key13": "eNUSGxCLsacRUXMqEyw7ZSbfbjNsXMba3aVw15haUGZPNPUUsVXShfokZJ1xe1zqTNyaci4bNczCLFqUp29bDi3",
  "key14": "BdFFRRREvihYBdaBdxSB1ue6Ujik2YxkqkGGHoCQNkmoLrgyheEWM1MUF1hd4R8qN5AHEtc629c3r5AVfBmguwN",
  "key15": "54WgjBzncGB37ht7iexD1DZNRHh76GMwkKmG7S9e1rmSTcCeQTq1FyxmcxgyeADpdAZfy81p5a5uXvoerzcpYCky",
  "key16": "4qDk41SB9F3Y5wpnB75BuyAwjDVW7GZetzN38PpQLztSLQq4HJvzDqr5xRTSGzVJgG3AakLN5S4qQKYjHN2EWBHR",
  "key17": "3NcPVYnHoMj8LtHbr8NCJQxi1KGZjPyVrbSuQ3UFdacSCk2BPEiBxEdXj1Dc4Hg5pF4GvANnG8fXXpe8CYKTB6gJ",
  "key18": "4bvJxaSTumLQsLPhLstjZR9xydBgKmxWqb651PaxuLm6G8tscFAYMKSWTwt3gGxKYf1bJDduFx3VDN2qPNQnBpxK",
  "key19": "3Vsv2yXwV3zUwA4BNgfhUpsQNnFYrYzbDyHTTjEote4AP6wxLkgr7Fb2G9jtbRto2LR1TwqDj47rD3Qh5hBK69o5",
  "key20": "br8rLX9EjSyYDfPaVzVdL5Q7fn4yeChytgw9kdBvikvkMSfNE7oXSShQgzSzuxYRCJJ74G891TRK58Lgbo6PfKm",
  "key21": "3ErzYACPyDN6j8gtrXZvML1H59WjhfxbXN6Kxid6Qcv653J5oZmT7BSuhZzVmgGmjLgUSQUAv11KAHKGKXADp3ZN",
  "key22": "43UpBTfwEKQL8pW1zCVUdABwRgSvXM3MCXVrtNXnD5LWdF7tjDrpSxF5yP4f6fka7vJi7pH3KQUCXNyrrvJ5vHrp",
  "key23": "4VrocbUdGHFqCvvCvRepmhnq1bKBzASFFPq4C7vmuJNGjUUDxcQTTfcR7uAjcZeggtUZbTLwhG2iZAeeSh8uxpiA",
  "key24": "YK8P37i2eg1bU6Gi1LVx4GuC5HJVuYHQ3trXujAamBXEcH7jzrWoWrNFUSNR8bvahZkvoUYZqJGp3GVfbuwSwcE",
  "key25": "wcQH9WkXBL5GjQmY6CN2hHE4VrcpQtZMmTfW5CScepcJd1qgWDLQh5UiKh5SSVneLXuVY4HiYi8AsVM4VadekBQ",
  "key26": "tjT1gPPtoU9VFpb2ZDPmZag69VpEHsetqX6fHUtDWFTS9Sfh2FnVDrdoAox4B42XyocxKzVG3aNgEd3rXDGLU65",
  "key27": "57e5Ls8hoyiEhTi5nnbPY4JdtEEzLfzX3jqQijhqu7iE3qQEMAm8KQm8rzq31sBmWhCnY92bzFaAe5LgxtLfGMck",
  "key28": "reCYFRuTMMHHSDDH2AEYFL28xTy4ttLphAy2SJQ9VwbTTEvMB69SehuYYHTwWB31p87ScM8GLQCiABkP7cEEJwR",
  "key29": "7RagFMf3FGsS31vDtQ58ibcrCLuJ8azHZkRAtHTGeR6knm95tUaGTMaoUH3eHo2MXg9enade8uEwjrT6GViKba6",
  "key30": "3sckewpgUe3o4A3akT5VvM8hAfkwCVSHR9nK2T8wLpsWzNca2Dzir43NZmpcVye2R8Ve2zsdsMrCADMDdbzN4CR4",
  "key31": "huMp36wUZbvnEtQuua5Xz9RtEMyphBqtrcg2APkjGZDfUdgAjLgPaMCdVis7c5gs1mJdsJQBFMt4iRXBdTrDM6w",
  "key32": "5swahseZAf87SKv9guTvuNo3qSUjkRAnt6ijwXznL1K8FRy2S69ckWKRh7okjypRu9tZB8y9hDJxHVBz7D22ZBKD",
  "key33": "QY5G6wBYZnUpWTPy7h4HbCjyEjoGvwhZ2bRJGZAN7JfqEuMV4HZjw3fYmkB1TqP1eGnXMDoAnG4JSPisL3LeaVi",
  "key34": "3Ncywvx3eQjPGLAnNdRi5trLvpUKPWAXHQhv5EXrTUHrqtrx8zp2Snyimr3Wwap8M3fgStXoJ1VUHyJPkhUs3Sjg",
  "key35": "38u3BVdv8MQRT3CoLxKarycDYk3dSXgvrRRH748Ku36oAjFdrTPVM6Cqb3Qpj9MrzWC3WmzLq1xMoJkBd61jN4ym",
  "key36": "4pvySoAdGYHWGEpN9RxYobbtXYZmHkCqKk59DxPGvYrnezEWFcDg9FRQBNhznEAEewJBGAv9jmgJpq6v1uP1wocz",
  "key37": "5jBpYDNoyvXUJmD9esZHEmfp4x7rDJCf1xPj6N1HqdXhFQk6qp74xKVgcX6A6rEnrNnuchh5A7Axrrzzw5zCWQBx",
  "key38": "44s7BkniZDWQ8faP1BC4qJQKXEW78veYQgVJMySKWNzSa5MMB1j1LBvXB5t9HRSrq8hZXPXp8dxZz4rh8SJ4pcUN",
  "key39": "4cccDyY3wF5JgjsaXUPBU96H5gEawCG1YNkyF7hjMRSArHE8wdsUHWXTc9hB45z2xSfx52HnZ8b2csA7iXgC9YDp",
  "key40": "4wWUsoQkE4AFRCn8DtJ9ne73WxR3xMsxjsHoSVYNdipiHNcR8eeFA4kYy9eFoMDY2eivMHUVZhrKNHCbZxro7Pss",
  "key41": "24oRyKhJk2iEhsq71WPyjZVsW9W69oiDTujNUccZJM6oqxLGt1fEGc2Rkt5TSw2RfUgChnLRMKKyUbecJ3S2zSto",
  "key42": "4ZUQYExFzUDFzCq5uFMkzieNqCyP2mczteYKa73xQVAvRyXYWvvy2pBtr7mwY1bTFGvQXwtTcRfbX1UNSFSzFD1d",
  "key43": "5tBjfg12SUscGqyeW83gAjca5jcK6NCmLoQWVHdJB3tB7kASM9KLfm7dvwf2JkHWxyYG4dJJ8odNKrzv6G5nVa3N",
  "key44": "4sAr2rUo5xfgv5rAo7miB62kirgihTJXeWU4X9fS3yok9v6t92NHhujB5wCi1UL67bVCWHhLEqYZZhpahxFf7U7w",
  "key45": "4E21A6z8955PRKZPBZFbLULQhVmwoVkNy2JcyjDDaxyjK8d7jUWY5u124ReaU1YhWoyxJjpdnvR3P8HB6cc68NJa",
  "key46": "3uDvf9YXJk9YMp361GEAezK26ynENgBEimgX289JfB7a3NNSEJmbL5svi4YEw6szzygWMnqCqUYY58LYYeSSoT8z",
  "key47": "4odZ465NSGGT3yqupvhSD9ed127owif5pqHMgKYG2ZQqhFDDmVgYRUXX6ajkTerwXhHRTJeBbdUfWZRHBkYHU94o",
  "key48": "3WRWmfqMRaXSDChLxFX587PvYWpCn5vCA2WRbH7yvL7vpPEFBNG9hE8QPuT3zf8A5UjoxsZrEk87KwVptb8sDJm9",
  "key49": "8AKcdf1F1yRAk1AjQGFNETQ8eaEXf3QD2Y1tpfuzp1L5aASGBsbvFpguaSrnRZ6fhBbwDhHXv6GoqqTrNruyVTb"
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

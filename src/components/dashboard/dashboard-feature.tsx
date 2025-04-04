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
    "2NZoZy7LgiWkFstVYpeVtGzF5fahdC1sA5KyMB7fReGZvoUdzScXUiKpBdQ6otVkh6BLQCcrk9J1Qg8n7XLqzsnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfyLRpj43okJEwr6jxhsbftxH8SvXwy4eAWHgyZpkakHCydyteU64PJsyeH3BecuoBSwt4mfJSnnF48isfbkh5t",
  "key1": "5KVqo6NEeo8e1gTbciga3UcwH5SscYgvyXx6hvyZ9Hf4oGm7hxV2RciBj1tMX6LtJxUJ7ajGgnnDtB9qbQi2Qsio",
  "key2": "4FCbMDJaVXwdhDvp7yffD3QBoxAaXe99dQL1FwunfW44fd9xQ76pdyJPteDhQawsg1MDAENfiumR2LY7F3tA8EWW",
  "key3": "EzYb2Fc9rg6aLAmXX5A4e4dVxRxm8iDGdCdqvhVYfLWgp2QHXoxV1hpNnxwYDCyHk5ouSKTPWzG3ziQWvYR8U46",
  "key4": "5HQrKDsXcoVchD8czyQ3TZUKLSHQK6nKcJSUZv7KT1Y38JscQg5gUbqCnAVnBGJQcaVNEyBTtiefLYYrwbkMbSGB",
  "key5": "4qNPTzz6W3RaqunkvicYMW21diLBRAToksCaDHbxQ8noz9nWztb3uTGjyqnDootfbqxsjCuUhMjege1PnhAYFXSL",
  "key6": "3nghegkf4Z36JRqsQoX8FA9NXFefoPyctP2y594UEmNABmZcGAWPH9aBaKWKbwfRaQR6EVZBaN688npRz6cZ27YB",
  "key7": "5esXdZzjc6GcE8Yr5oGUz24EPFBwgnNHLUd1VvG8QheJXNxAJCeX9MYBnh25tPR9eK2qGDL5gFpvAbtmDsKGCwsL",
  "key8": "9AWYKMJixMHF1guAx8zjGukXrpyEf6BTb7hsKSWExX32K6UHALgWVrDnNb1dy4dx4wCKtuNjwiBsEBKSDvtChCz",
  "key9": "Wm2qVthsrdMvcgXgMy5XQwCc99XSa5oawymKcNsBs4rKehxdNQu6yb8BNAiofZHYHksswkz9vzmJzLL4DvkiXEx",
  "key10": "2YXydsqWLDFsZza1iWKWGkrpJaCu44w1NiC7vX3fXKSnjBjYhMHFDGtB8qC22WxT4fL4AKkTv3u4KAd7gTsnNWtc",
  "key11": "3SCVJEtHe3waNrAh8zpjUtmGEhntutnQ1irtPZkemQwhCHhBnjcU2M3RVhj7YmtFJCpKhXVfEziRfVyXAcVAMjZn",
  "key12": "5ykryrJgcWgw4DEd48zSvT8rV8YKCvtZ8Z5FrnZU1a2YABgJxkBcCJEkmWh8vBZxC5X1ZgqrTQa5oy78sYDnm4pJ",
  "key13": "4QaEm2LwarAuMTrCCgEBYsPhrf1F4AuYkdA3U9a7YLLSJnqTygWu7UWoZZfmGUPAPCXUtibwuqNjtKyJz2eikuCQ",
  "key14": "5DS9adQruEkKyV17aCFFpmiB9g7fMtDxdYqvpvYzxdE6bTUfv6zi5ZN4T6mKtCDd1JPqFJBLvCqmbRa2T9wdT5ek",
  "key15": "4MwQGf9JuRKJGmNC34CVmqB1t4TSisgogwcofAhr19E8JC7rQ4NcGttqHZUT2QnS82emsBHPNhed5mnA6RoWqti7",
  "key16": "31WFxtTJ1zud2QjXAoKHEme33CCkTthZ4PGQtEdpie8rmdQJQji7HFW3rR5LprCbrGioojn4ujCz9Gjdq8sFEVV2",
  "key17": "5fLFiy5JJ627wXF8iJNeDwoKegyEgmRjbY1yGSURsScPwXLKk6SPzxYUnX7wuK17Vrosvs9vaD7t48DJRM1wKKJK",
  "key18": "35UvwRMNBeCwVUpgR5YbLqd4apkFtf7YaVdC4gdM9GB6SmwDfowRFyPP9o1u258E2uqyYEtucn33UzwsdpyUcbGY",
  "key19": "bYihcp8RBh9DTEWNbPjxwELeLF2KVzopEG6nFyRW9wXhm9GcZaAeE6DXVPpyfcNdpUqdHoRgTsCK6cG68XUFQb4",
  "key20": "3xwFD8KgYjaFPi21p4xYNgFyifQ1NewYC5jWfJqTRYpp2BDEB1SBs9ajyCgC7qU6B7ff2PXJkWf1ang8LksyfrVq",
  "key21": "5riomBLAmfwLB3Z43CEhcKiqDbeweXRGSmC37Cro66zo6QsZGzLzwuwHAGYTjdVP25uKm67cPuRUpcisJy8PLcrS",
  "key22": "5v5LuZaUJioZkwdsT9M8ZqgaNbSYKMYNnVYkS6g9ZyGA8eg6bVKZKY8sEruogHBoxfYKXeYk8JARV1KLRdHEW3Jd",
  "key23": "5cCfvquCwi7xEjDosp9sXPWxmGfzCfibnUmLFsJKj4Mt3TNBVtMdqLpafrhKeS4nHzrkoQjMUY29VvsVNKQLkVXL",
  "key24": "3HxRJmYX6kZhKioPqTXc12VkT3iaoXopVBzWKALX6aza8Naop8tfGJhN6sRgMAu1PPwAJw8b62todz2Kgu1tVdjd",
  "key25": "44Gaw9xM59zqTtE5Jpzz3qvcRZZ2y69raP4gmLzJgneGa5CCgxEnoSERJ3ZRiqAXV9MujmUiJ8xcNJH75fuHCHsA",
  "key26": "Lqz37fS5QvMncTTmSJHsZwjxZxS4rPoon96gzTZhm2nSyjmkSk8s3URkRNbgur9mBvQ7akEyX9iFp19k2p8bzn9",
  "key27": "49h8mT79khnKTEauDENkZorUBQKfe5k4qK9MV1rahEqnkgZ8oFJ6z9XkKYMUsUfgMPb51tqu79eDyPKurEVPf9DM",
  "key28": "4QFc2BXLEkfLsiG7vwcS9wtnZb5zwzBdMgkM3sXFLWSuhQ1jMbTujUUwEoieAKQtoF8WukWeXMGXUrH7Q7jK7L9y",
  "key29": "bZ5ATL7Ze8hdjbqK1UMbb6N1NtbZFpChPTqHZ8GWcXCGXmdrpKNzUVuCwqMePZC7dcBR9y4Q9nPbfsPXmezCfL1",
  "key30": "2zbNbL9yRuEJ3NjboQB24uypKvnnUMFs1mkyGrvrjdktTh5r5EmRerPsmx6o1jK38GcYE1JWWAhiQH8bKjUujSe7",
  "key31": "3yvqeUPpmfEtH3qcFLgeGow93fp5pHXxHapJSDhvo8ZDZDwt1nEDHWvUBsWiaHdnNzKfp4spijXSJeENY9zW62j7",
  "key32": "3SYFhm1QjhzWQauAYtTpC66XjiVZXfDeegEECDx9cVDeAaDryyadLYgjdvRGNwc88Ped73qWeT8LsJf2HT3JkLcc",
  "key33": "2MH1tqgFDjyn7PQZH1kV8vVryhxt4yAuBCV7JVFND2YW2WuYf4RpkLqALQa7frpVx5MHokPDGjC381sXmubsgNPM",
  "key34": "4aDQVpgaeGucaTJr2yvU2wUEJfJxbw32ZaiaMQwyNUjzVE4nDRjoUhsbNThvg833WKDtAaztCBTV17aTQDMuX6T8",
  "key35": "38eURX2jhW8UMApJbaFXGr3J7zb5A8A7gXfYqvbXVGAoxVPUDFymYk6yrQeEGTRhWnxZFfxQ49bxPyTovAaDHyMx"
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

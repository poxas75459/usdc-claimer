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
    "ejuf2EAWrJNBi8aaeZUn8yCW7K2VrzcnDvq4xAUZ7w8CQyGf2EjrdNfBGHNtKSckR8GU7FtkVqWQYq3J2wkFF8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kToVW8gTdp4KwG9f8iPPR5PyiYXmTm9nw4eB8v2Gp4uwoNqgXFPVy2y2LAct1EpXHPEmiLxbGTVtV6gHmMnkFH5",
  "key1": "2YgCrHMvo4eXKneZNFSCX1dJyic11aZAmZHrsHi8xUMNbaVochtWVGsz6Xa6e1NQbCZq31BWrferYB3HkEBnn5cU",
  "key2": "4NaAap72pfdAvfDVvVnw8y3cZgp5ADVB4pWqnMKfyStLCahDiYoXA6bBvrjfffwLcXMzNYkS8522WRAfYS6D8Qyx",
  "key3": "26TMwfZXmEEHYNRZHkwwGSoxNnwf3gH3upo3N72QUG7GdWE9p5qiiAhazpjqySMPP5gBV9rSEKQdu2qC6hQ3Mw7V",
  "key4": "3NZaRJLR7e6zxPYMyGY2CoNVYtqw8oCEdxpzMGHyJkjVoCVzTbDjaSP3gSwnKrPVtqq2BYLpLeTgvDJLP3z8YGHF",
  "key5": "PBh8P1qEGaE65BS5gC4Ci82QwKLbjzw5fEqZeFmwNZjfjY6hxYjFSD4AVWrQaRiBw4VnXgjYYHUWNDKHraL17Uq",
  "key6": "TGzquMvsFc3UMDmrzbTPBbbTVwRZFW6dq5Vpyig3W71LqsaAwdDAKCpkMZjx7BhLc4iUDRkswe4yvBo8BJX9gek",
  "key7": "5Zd3p3YAjTQpoJM1dBXA7FppUExoKDqmf28CswhNLp6qT6zSmnkZ97CVhn7eu64yz2fLk7nRfDTSURqsRNH8UXHm",
  "key8": "5fcFQ9QN8WwfPuLRe9gkh9rbwNPUsvPeSH2QkXhssQeicJZT8zuLYKyyLpWav8v6dJbqwR6PKRJQ3AUGBT6zjt5v",
  "key9": "2evpWna9AB1HnuiYW9K6ADPpBrZ5cVaqopEwPzLgjULcnHgmftc2YLCCAMx98qbnDs3cVkpKyg6A3p59qoocEPB3",
  "key10": "4qaBkjiJeqx5HojUXWVZzqQkpvvKnRLxSut1pbQkGhz8YNeAzHxySGJ21fzZVMuS83yeMuvopw8Doujzu7s6HEB1",
  "key11": "4oCWinywy94J8WTfrJAVTTK4zcXBFKQV5RhUT3YsNP1CqigPBME84i4wFHVA42xWxnErSZPPQAG2ceKPbcZynf2v",
  "key12": "4tj7KknVfA9Gce6gdSmrWvfEUnfB7r9ABZdQntuTJRaeZLTpbbudcEGfLV92FqPCpwYH5ifUCNEXxHtLZaNHTgmn",
  "key13": "2xmsoV2rQ9fJCkpjfRy49x9iBJhrmpXcPiAFHEWFcidSS5uXpVEZZ2UNcedkQs2MTHsRySVJypocHm7EzuXzMRfi",
  "key14": "4t8wzdgbZRdvMcUii6qSKAQiZs1BjcNSkZiEzF55vTysZTu7MzVJLwPJaDnvKC2iNUWgXs8wrZxH5krSjFJ4hCR2",
  "key15": "3fKcGK6SANhJUtQTYFEUBZh4sVo3RWVbtjjWqWVwEDQdjz7pPFof3tFAifzqmhL7y1Xq11TMLoayzZQm5SkvaqyT",
  "key16": "5YudeW4Axs6UQyUeJbbHwNwNEQD3GGdPuiFXd1TpGc5ppQ29VFQ2eVMm4qPCcY1HLaPxSibBtD8wPJ9qrsPtundf",
  "key17": "2ybqD1aLvUbT4FyabSRLk4zgL5q5bzCzWeKgMn43SwjM9Wz5WDgF9bQ6xrj4UyiDX4mkXTWVM7ATs99R7Cx9wDTK",
  "key18": "oPdijxL94mHdeRg11fcUCgw2K8gEB7ukq81Z8s6kAu3mZdV7wgMLUYkKwmRCxGLdebteDxCR7zXNfBhauJ3H3gZ",
  "key19": "4TfXQPtuhgZoBz1rB37qsVtSR4zhTdbYrE6b4CcfNjVCBM7UkspyA1iA43bm7CH44d8nwPrqiYpQ2sWb8HbNvb7s",
  "key20": "BXVaq9cJFREebiARrJTAKTnEzTwwAZj8j9X9fWQ7MF6icT7SHEv744A1uNXf6F4rCzomqnrynRtQsTnxoKkPsyo",
  "key21": "2Pu7GyfgXEFpsc4jFymjSsmFS6umsh5NVKHaeoraEjKBHvcevSupiayHxURoKC5qVD5T6mfpDRmuWSxnPMabn4rM",
  "key22": "qtvQ1asmHu438xTNunkYi6MPYmoMAT9XVFWNWJWnbMTJdGybtqnsMefECxW7swoCPq6gTYPQaDCocPnqPupQZvr",
  "key23": "XzWKfyb6m3aDC7mtBgQEBWbzGwspMiziLXUMbqk7skCBnYZHqiarw1KLNe36KK8biW31ccipk6t8g1ATP6nBtLQ",
  "key24": "EiwGMPQUR222HxuB4hvWnQvZuwD82nDiHp5vr53pSLNtYjPG6dXNzG6Q3K7YEPTde6kxrESfXTXBuqkTF99NQzV",
  "key25": "4jiJCNqgrQ9WuDEQcfbXpeAwZqEyzWwCxcEHiMCuN3uPdFGmeeMV4TcycVMUTsN9JJJ2HTdetnkLz3UhRdm2P9zn",
  "key26": "5mqpyjLxitadCAfHgZBSZo8qmx5eeJTMJDcYyur3DB4H66JWMQKAQm55op48zPhVfCiAETJzx8NtyriDMWcVg5Y8",
  "key27": "3NyMV3HkVACxc1iUN7UczVf8Yqsg9LXpjESycqYmhjo617Se82P2R3AKAq6qvmPbwY4En8aAQgomoyoQUCSbvwFy",
  "key28": "2aQGCTFJH8U8ZRdgYxGU9GLH11Y6JXx1akh5VUWg6puNjHSLoNF1wdXNreXMEQ1Jt6ybeDsJ4eGyP2t9vCN2LcX",
  "key29": "EyJXwXxA6yg2AXnofgLbkj8DDwSyBDR2PhaEkAb2GGJ5ADEf6Am4V6rKBhzgg5atByRG7HAwsamEtt3nveBT99k",
  "key30": "5wpctGhqzFA3mvj3rNvVPwFCWEzWxUcabPmdmpXGKy7EhSkMfmY3FKo4yjX9JbwiQqXk85dVM9CGEF2JJPxQdNi2",
  "key31": "4ktzkEU7ZTrqvgsXpvTRdoHmAvHcuYN8txsBiZGHMEjGGeP1KJVo1mtRbzaAiV4zxGWwDy9pnSfWumAhZaBMfV9s",
  "key32": "3kC6vUaV8cSDAooEUiCGPqnQTCwn4kHc6SvKcgqM6eTwe2dv7b5oqzDmQ32id9u51P44w5TaRYDHuKP9KgRxcwxP",
  "key33": "9psHcmXtyuJpmuebadC1Qe1BJ2bUa2AaiYTBMFv2j47ZM4juHZsZKQCV2gcnFdi5LkCgDqg9kHpsFLTVkaNVYrW",
  "key34": "3GBYnEDLEthtp9e43m5rRfAJsTp63Bb3yQmydCz7dVfaRLXXcann7CheoioEpYZHFiUQN2WNJ6gR899c5utxKau",
  "key35": "4M1eEVC5uuEaR2GzdseDPoPKaTWw3AJ42CCjj4sJq5JHsTZ6HDxyC7mD5RkSEnBBYKvgRqbHpjeJW7y7f5YTK84Z",
  "key36": "5uQMhx3QkF4b3wtFcknkJFDpS7t4ryyQRe6DtHh9B9i6biP8HNZkM5RJsZKJC67tocPL5eyfP3E3dCotW2q9YWXs",
  "key37": "tJg3HYZwwJZzdDxcuC2mAbLfh4rVTDTJs1bWv6sJUG5KSrphuDVjM9ckqdsMvj4MkntpceYQz5f41iztTWSZyMW",
  "key38": "3eJbdMoRdX5sqwRYryds2Wzvje6M7CmjE8yYCdehxXp9vGvVnqc6fSLwiTBXfpUFm28SD5UtcxEAyB816Tby6yrT"
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

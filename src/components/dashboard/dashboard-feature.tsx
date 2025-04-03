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
    "2ME8RzaFWeiXVfkxKuXq1uAthpnWnBN6kAFwRVQHVirwqGYeEx5p4bhQpt2bMVXE9tRpA6j37TWYpRxxBbaZXWTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v483Gk8BgQ1UGsQeEL1QV2WNgP5WmM1feUu3KAYPNinrgXX9SeVsLyHsh2BskYGJX9tVnFNUyVG1V7u14v6FWD3",
  "key1": "5Wp1swRLx7XXoSX3BiLAW4ZS1A4vGdmszkzYRZcYEcbqSSNoTz2H91dyJWCAm997XQv2GfU7TWrntmHsuXce6MrV",
  "key2": "3XdFAQxo2xgLf3Qhm11MAnfYsQ7hfovpLQnfVTQZ7HzTQPpjcdhatWgx9syN9FikVXzC8Yub3uN1fKRTMfydtk1G",
  "key3": "2NmmEEb2e3nWXzZhMswQEELaCsKNRQQou7NsAJQdQxeT4SBVVRKc6VvC5JxCWoFXCwNixKEP9Jmc4PXDPnLTb2er",
  "key4": "BTENCipCgmfthAx4EFzUW9z3qbyFkm3Wf82Su8FV4nccrKUBZSdjyvB5BM2URbr26ywdqM4q3ahfBhDqtvi92gG",
  "key5": "5D4VUKyaD9n8zXAT7zCqgsBRJBFgT3YzoVL3hmeDVVx2kb1Br3nsijUgQ3b5YWDeZUsrk8ZSAAXSsJZnxW7XVYTN",
  "key6": "tzebERGHfNxFyE2Sjar3Ccb69wNkkFcKut4TRnpEvXmgyfdFUghYiP4Uky6KJbucezsRGKLH9MH9CjSCpwBuiXH",
  "key7": "5yRRhH698DG6HvFGSmjN1CgHd1u7vxrHRyYfC1sAqUfa6TxZxHwTBAgD5HRWGzKi7ECasiUZn5cRmRa8YdyQiVny",
  "key8": "2TBSZnttd6UUYQ7gs7ivamLtyksygSdiDaXUn5aaiC23Uc8XNEQN4F4vhc1RxgjD8quycwBY1arDxDWw591w6tLm",
  "key9": "2xYPm47w3L9r2xpR3r9f9Zd3q3w4tXmEAiio5Yn9gKvj4CVUSRpGH1rfDD3eEwnRkRV6XuWpZfLmv4xLBHxi4y8L",
  "key10": "3y7PujJ6iASPL2mUKVQa2kzv4QupPP5o9RByKpAqWtUsBMKadbWKcztK1o7Ro4FdTTPxT2jtneXKf2t3cNS3EkuT",
  "key11": "3Kz279SDGaEJwfWKNiDwA1sU7GmepZtSniqPj1kB3SFjX6wKvAtLHo5DfuMhWEXDWLvWrvjHiSzzRYNT3gFamHLq",
  "key12": "2R1EqRy275ndHAA8Pruu6QRCvXsjhWHEsspcaSb9aKLdWSkGMXT9U2q9eN1hHy8jK5NDo3jB3wLjjrfvqjdJAoJ6",
  "key13": "4z6GME1mbZBCjw99imzw8DqX54mUXTrqn2LiK644FgdM6sphESWbbCHPsP7FDLZzResHqk8cZxsVwnjL8ddazC2q",
  "key14": "2UWVrW9EzMgMqqN2RDYUNSPxKtZsY8PzRBR1DPMQW1ZKFwxRn48Qtj496Hc9TqwZrRV2SFqyzAA2p6wffec9yLws",
  "key15": "4zoPhVcFauj5pBp12Gq3ucKR7K9mqUUV4P3p8Qjmv2ZyRTrJ3GLXXg2bLDZfbm7ZACbpfu7rJ6PPNuVtCD28XqKG",
  "key16": "53tcRrwop6xC1v5PXYufBgTVzJGg48CqKGApLC32sZTPRL3GFvWFzEruQ7tZ7UMVrzPgjnPSAJVH8mAKsfCg2pqn",
  "key17": "4ygBD1gJU3YDxADTSNTjtAz2RuFzSM5Aq2LfvXVi7nrthvq8dsfu8PbsSTG48BSScPJt8MP4S8ggBf64L3R8LxJf",
  "key18": "4F7C2EyCwzEvsfEkPRvWJHEPAZdrB7Xi8y5ndZmMFxnJyceErtfZnuT4KwKM6h8rwaFEndN8FYyVyjyQjD55uuXs",
  "key19": "GP9RvmaZFAWETw1GwS8u4kr8TH5k6aXsMSxGXx4awPGrxvxHwU1jL2qUmFaXeWA3mnsaGHEYwox2tdM2sDWAzNV",
  "key20": "4wbunD9e1WJxP9NKbfrUYfqTHg6psuAt66o9txVXcK2evGgwDc18PQoKKrEHvzEEaLS8AAe7SdVFyfi8GtCfWV7S",
  "key21": "3vFif7FYRvvz4mdgf49kxgpnYHqoBhNgJoWAfGhcMDPKXNJf1kH7zpFjXYVNN7LD46tNVfHnTvRkyV9XqPqkZfDS",
  "key22": "5us5Y2tu1HfHpy9JJTbBEdJp2WkZK5GmN1CntpcTjF6vxkjPLyFERW95qAAMnFGq41qveVFBtBZjeiWqMusR5A66",
  "key23": "3Ba8vRVvB345KeSbgsCHKKhMBsHz7XXmMMdf1aycTCGRnsqkVbWMdcgnYagjDdgfZBL3GmERoLj2LX3hb5iBb3tv",
  "key24": "EFB44EtqdkQnCBnypCoHW4zdUhKs2h3nrDp5zPpUSoNzW1Sd9muhQUduuMSefGofFNDguoeBrz9A9XWbYWeLWAz",
  "key25": "zsvP7CasE8tVyiDzGrSpk27d6z6yMx5NAsJYEiTWdwutXRFMb87GoLvf7Z6DSCyxLEXrEME9j7wGo4DyFNpS4yB",
  "key26": "343qR7j4LdB6bPDUs53MA8oaQhUkdzBnp3RuaSDdokK38TRrkLGbYdR8Z57kH6aFkc4aYXMKGnJDKM9NvdB7UHNy",
  "key27": "4gA9rr2o8jXt8fjGyYXVKW7CKFGS9aSX5jdZy99XDc35PuQtbmBBvoVEZrx6yMyCUKaV8nBBx2vE1vpL5K8EJoqQ",
  "key28": "eAUyMyXswnnHSmgh3zksU1hpH5x5CczfmcMG7xmuSfuoujAc1hVjyuzfuPDhVyQbqLgQg42Yx5bPdRKSjXpj3Y3",
  "key29": "392rXjYxHUJY9cS8AEaLf2v8nFHhdrrEqHk75NYnxxPBuZVteNR1ZgizJSMSz9ayQc3LGZWRtGXoqEMtNpndPtgZ",
  "key30": "3eb6priGH83c7fZi2WrYb1yLyTva6yH6FQUEFtbLstWRXPH6TkLcNnb8rVbSH7dyCqCa3wjzqdpnWuBtgedSC1um",
  "key31": "4vL1mJmPHV7GcKj5gH2rMmMutZdnzm3QUdhw3FEYerBz97E1SvrijKMypyHNYdo6WH4MZLYhao5iCKXzutsCZA4C",
  "key32": "2SGwMuzpiwK5DC7qnQFwmxEmvZVQkMKDtaT2XKyw2zBFcGyJayhxjwkcZ5P7MtaS21aqmaSmLURvquNCxnz8TyM4",
  "key33": "64ZVjaYajdVko8C5xAiJxaaJDKzzocUz8LDugubVz9Nob2vvvuGSb45H6PQHgikgKbr37rdJL6AKwCrQEe1G1QBa",
  "key34": "qYdCnDrhdESEHf5JHCdcRxJoHKWNMNBrWeBuQHLoPE1U6iRXeGvtf73aGGZK3wKAKRHVp93nfK7WwzExbxsBrzW",
  "key35": "5AA54c5gRNNTj1vXNfUPeoPmWdXPDxGJsvzs1DYZioj5BdCCBCHV5c8hR2jTc5RaGdDuA28jEAFVgcf97UTJDacW",
  "key36": "oC7JL2FWP845kqPLvmYCTtxkTd3UaYepgAwBN3xLFSbTYJwJWAwp68eB5AnXkMjM3zSrLauaMXVua7QfYxmQTNV"
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

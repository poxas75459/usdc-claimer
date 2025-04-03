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
    "2GYxNPjA7o6VfSY6pGzFwPTQRDSmxdtxBkXeuXrf33HCHE62ULDkYD8AiKNM7aRQUCaVoLjFDR4FNZh1P5p4Pi8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drnx7gCvL3ZhefGcCad2DAXcQrbdVpfAajygTYvBBcVabtpTdVWrq7jusiszrBF2eoaLWBPgTBZbQq9vBWZC9AC",
  "key1": "55AAKTZst1nbmw499ESeiekWNkMzwpNpQrviHqnUinmjoAooBe6ERmAAYVwpgH3XCicL9Wp2nVp3ALe45GUeDUbM",
  "key2": "iu8D2xZbWLCCYC5avhdiLueoe8oX4Rw2YUECAmVg2u8KaC8RKwVxkYZHHbivkh974Zbc3fih52sur5HuX2T3u62",
  "key3": "4YzkoeeczeDyEaCA59tyuZX4gokW3CLqs8882iEGKBoqiSGU6NZwahAsvpD2tmbbTm819QyD6kAXgTxUUxU38qmd",
  "key4": "rYtgh3Vde8oZ4dCqAg9zgDhPRthKLquhsfeRW6R2NRyqZfacbaKGZ6sUprSFr4bGFcB7p7dbYAjT5JreukRocgp",
  "key5": "5powndbs4xyLHF43GUXDMkUqPSNkUWH7LkSbGExt1JW4nYv9FuS3JpQpSkaxD7kQZcY5d2Kn9tf7nYhtWfAo1Pkb",
  "key6": "x9qptMBffy4Q9GXDQtJcjiQ98E7FC8Ao13fu15s84AtgnwBDdvE62BZvK26oyYkqU9fRQZdYSKjFfp7kYX1t2c9",
  "key7": "5aPyEQUJoZWnw3Zmkwwccu3CJx5FsYe1pf2UHe8jgHSEiMb9HHgavz327bqJn86nUT65KcBaDN8xaq7BZjUJ42Es",
  "key8": "TyrLy46CaHi8PhXFrArfePWcU4F92ABbEkgGbvX9pw7KEZkh6hwbZx6Himqhi3G2kH2KpXTEiFwnXGJA9pjCxub",
  "key9": "5Gq2SQ2pTtpiiUt6QREeVgwtmMQxqqTai5FzaepW8mTeFg7ck3aqCSpd8BHw25KcJ73LG2J8yn4haqVtCZ7nooQP",
  "key10": "rnPcoTrmPA3bufxqnE1PSzQK1vYgx2MbsohfZfQwMyE9YE17hV2rT9iwJjMh9FjywpzP5H5j41UDkW9FussHpmP",
  "key11": "2qiuy749yALSqVf11WiJLxSUMge4MvtYwkq99CXqaBQpNVteMGDWKYJMtAUmrFCsqqRotNQABA6mCr3Z9ENgbvz6",
  "key12": "2Y26iAPKM7wPEuKfZxL147Qip2qVkkPDwBWzaRiXmUZa5tg4k6SexvnHTtmSdbBJnqi34F5U6cXKioqBL3L1Hz7j",
  "key13": "hxuvLm4RhZMCXNjzB9HyYRufiQCrF8GJgnA4YAybpymNtirPwBZaqHxXdXi7263Dwuy432T2p9S69Fs4289SmYe",
  "key14": "3tPxQXqS6nAMAhHnWZiknayCovq3PDUwTX6DHXvD1gwiQXfcYkJkPSyDe7hPUVZRCTX4XW6GAKACMhQBsSGQ24oT",
  "key15": "4ZcQdnYeHpwfZQtKqMZgAPpyvTKqUDjxkjoKiGj9QRU8SdV9pS8YyL72aEQyEBxqvBx5JaRDgHqJMMLJL5zmcpJH",
  "key16": "5iVBFRtv4WxEuVZ7gBbHJy5qSqrAZsTRNzSzd3HARkmdCFaaKkEc5e7uzgjQSXiukJhteXnTmhPzbuVjCxQfuMN",
  "key17": "4zmUaaC111EeoeBZvDSjWybj18GQw8BV14SExT8LxYWzYMSGQwTAQYDibPLEBVsCvSWUwa2xXCcJWcYsK94WadUV",
  "key18": "5CAdVCGFijftm8UVsPpTxZrYBSe7MMeL88EXah35t9BuxzUXKp6dT1vsGM5Lv9bYey2rYzG5eqvP13goSApD3PF",
  "key19": "4VpFaiuHhkHrD5gJxUfq44D2dY2oKLgF87vMo2JKYzenfTpejpYPmgVewTh6ocvKfJLK24eD5TKHAWgt9TUiPytB",
  "key20": "gotSeR1L7nviTdquDEaP8uCt6YXYcKxSQNF1XKn5gvP5GmdNr6uTzrQ8zR1AHcWsyCK1bqmNq71u7mJFrZnqsXk",
  "key21": "3gTooXqCGF19eks2MVQuAKkJYrpbndsbzcxKCjGi8cHF2hFVKgT66tKrRLyaSVDaNdadLxMAjwTjyo42MdGU4dpG",
  "key22": "5tr9eSh6hYMXjub9cikJ4UWRhDtMRJGjSrNoAKJccUqif92d1iBcyHG7tctcZJE26KkZ366rC8Mf2HUByjyD37ZL",
  "key23": "3A85EJsVxGzFdJtuEnUVNZwdqsgzGuTESG7xmXRnyoR7XdnbrxihktZC5vm86R5tiXfQrTtqbhiNSNBGffdHSyEA",
  "key24": "3nPGZ6VWgGNRQBTBknFKB4cvMX3p57ShdiibKnm2nPyT1aQBBq4duYpqwKLZ7sXZxRY8h6kT557zmucpn7DNtQk8",
  "key25": "gwdyZnE9LXstvkpqhmkCMbFa7GYMrx8Q4pcnkVzGUhqhDQVeq4b58w3i2VqUseRNZc1qS6F7oCm2w2DZxRhWApL",
  "key26": "26VmEqkvGKKedCePdEu5wmMpKN4RhqQPBcwvAKRrLwhNGeoZaLFzUo4r6opswKc4qhnNwQBHnLsurJp2hZ1sm3jB",
  "key27": "5qeNtURmXWqTazLv6AkmdtMpWSimibaTMCZ8D3k7dt72PBUroqakXaSwATeZRQoRaNM6QcK9Zjxzz6Ve4RkrtVKC",
  "key28": "3HDA3gTnxzfpXcXHeeFf9BEfXh3CgdkwuGZ4ePgkfVWHafdRcFbAAEm7oot3u8uVMhy3hEJ5zV4Eff832yXymunM",
  "key29": "2aY1Y4rtRhc2rd9vhqHtjYU9YGKPNYQxFjDbLLXMN1pYgXyiaX5jpHrWNha8WypjbvmEetTxMmEUUJyX5NbhKHiz",
  "key30": "4WF2Qme9X2aFsCwxwhz3gb79JMRAC8iVhJYG5PJgkJok1bsaAaKV4ShiE8LQNz93NiL5kjs56UPegTV8UjY3eZXi",
  "key31": "5jvexgF5f75zGMnn78UfJspxuGbp2MBji1fMDQqVPT3UTrNi1yekHLubst6jB8uM62vTUxwfE9PowNGMUnfuApCj",
  "key32": "3HV9B3r5areQ8UNepCTeVgjXYvxzLsti1shy3VHyU3Xf2SeReK7u7qMu4Kr3g5g3pKQeBQ6eW7sNH9pauWKZoTNc",
  "key33": "E7apwztSHjtjCibW9RDx8ipFWQa9pfAR1wGBZqxgqBjBM6tFHJzrtPhTdH5yAXPyApd49qqdTo4k2Hz7Y9hyPg1",
  "key34": "3tD6uXkersFBFZo9VP5yiyDUPqoAXvjWiZFxypNX4GyhZGQNySnAj6gBGM57TDPvC6gqrEMXQUtVChLTHAE4iJTW",
  "key35": "4fcHFTZsRTURZBMpwPdDgdXTo9hgNndkcWbKRYqWgKib1HLKcMVgpStCXdFTgTSALwjjt8bWdNMkFFvitS3fyksL",
  "key36": "xk8xYQbVA2RQEhig9JBnzHqakwcXahYYbAQzvCroKJj4P2dDFKEbKcMCwWbqo9AkhA422aPEZvhzneUdL1Ahqao",
  "key37": "4AVcG1LoBouV1JSqXZZQgitpwJFdmZXQejCXZYvec5XxGG13SvNV76jLyGhSDDbbG7puY4qzBNcfShkMvpQy8f2Q",
  "key38": "2NPyuc1Z5BydAsyfjfTBxuFWUWo1FpLPKk6QUw3j6ipPybKxLxR9DWM4Sjg45d1RvUvTSpM8VuxuM53wLiZnscPf",
  "key39": "3sgerzZ1DwLtzLTbmrfoD38TSDEYCWxKfwMLgVzDLrXuwz4TYa3dApZP9SfsbvAmUjNMSyBhMQV5iBL47QpEVLwC",
  "key40": "38Mu8WLrd3Y5HhRyVadPHxg1HFkPRp5MHMvLZdcWT2vF1EaudbdMkcvVyF1hsmqdrGNyS6tAWc2qaMNHGJwhaLZn"
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

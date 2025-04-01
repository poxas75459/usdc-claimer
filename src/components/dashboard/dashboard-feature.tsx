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
    "52R85X1H2t97KMq9aZfAPBZJVhjgxgLytjR5pBbcWEvzv39x3baiAFR2i18APkFB7tPSnZLYHMQ5BVjjq8ZqCPtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhEtSua9NfNvM2BmW4T5Bw5GKwj1HZZNxFSdmbwizMcVCTNmVadwFg7dAkN8YwmhNZaiSjaJqtBgJayybo7WySS",
  "key1": "ucw6iu5cXjf2Xgr2VUbbfmxtT95jfNj3oocYuRYpN5G1RWbhAY6wNArnzcUaTKvwq5XgiTZSKW635GjQHQasf5K",
  "key2": "61ptXJgQiArUgEHoWMbJtb4S1UiJmoUfD454pjCQf9Hrb5GAw9UKSFATPHEuMGCvtSJHC5mzJKQqvRfxup19Qq4e",
  "key3": "2rQqm5gJUWTHDJQhPYcTGUFzaqvChTNqGpabgjsScWPXK55au4RYHFZVsoHubc5eVbVyNKTGxhkyEWCXFfwmHMSM",
  "key4": "4qeKPCMMAxYLnRwX8HrLyZ3mxAuQ52jVPmn6232z9akzN33iYV3MtQYD5dno5shMmkgqgEyfjfnPLrv56srvaZGA",
  "key5": "2XFkk9HxxWcAZVCeyDBWVPxjfycWpH4fapdwkpuVDPKHiLK6SFPomSaRwD5vPHA7KTCezYEamoFVoXQjLBL4dyV7",
  "key6": "3yspNG7DsuA3TxegrwpNfnJwyh95rhMDkUHMPkpfT49Ka7XtEF5iUnKyXLXxYyjEnNBdWGk7bSNdSqDpvztTr5X2",
  "key7": "m7P2QabXG1p4YunxAtwaRkS63WwF4wGi3RWR59EeZd4eB5Cm2DH6bapxuaRHLjExW2tLuqrXWzQD5EEsoCey3YS",
  "key8": "2e5jPAGwLhC7MpoZ6HSEHoQas39ro9RSoLjMSprwmP9cbkhVuoW4opxM4wSes1JhNdrHu9QXEgjUM6PJRfmnKdkg",
  "key9": "24qWXUGSr1MCBw8JgNC7bx7u62ZjprHc1BojGhNN862SjWKALcJj6dsXXZbgsjCDUfWXyoDnza78hEfP5nyzHhLx",
  "key10": "4rZLDNwzd7Q1fZoPKEXcDDB36o9W5HuwLKCYipiq3JWrgfsSKLgLBWGTtYbgt3Vo5ucLsPK3uphdrUaRi2KMAPJd",
  "key11": "62FUGmMb8xqV9kRjh4BnEMVd7BksZ7wcFmjgGqVnet6wjrskj88s9urNFfqRbbWAPFud3DmYRLUbQ8LbXqC8f71d",
  "key12": "2v7TmCe69CfuF7b1F8NJCkM1BbNCDqwPwfpqJmrrByEQJeb9V6wQh8rWm6eDqkys9G7oHrxy5e5ffgT1dn3VykLv",
  "key13": "36FoqZciHQhbVd2ZdFpd9ufMFkbJhy5bjfqSvkxhDircgmFNA7sjqu2uYdjif2okomcb6iULtjL2bz6tbMk5yDCt",
  "key14": "4rcKaPTGfXxBW3xZWSKFPFDSHqZvtjGeDmeVam9bCaA9gvoqQpHwcQo2x8YYA25hWvxiCoWwEdY7aJmfERn4U8of",
  "key15": "2uRjEAUcZt8bm5Bkipc9MC1rkViHgCNnjeGanC5Uc7ddB4RtdbvkfADHr42FpsKhHyz5sQ1XwNtWom2WkoSkaUGf",
  "key16": "44CBPMbTakukWZQH3DV4PvhwrMA2FyXrgcGxf24W8UTyhjrMKK7hr7QeFGmJYp8YXtEGEyzBecJteGjKEZjFL3KP",
  "key17": "27jAQbFpPHt3WTk5DFFMtcJEaLRq9cQKeJdHDZchzCkXi2teVFELDwj8YhJvmZzsBbWR7pf4icjPeTnsgZzzPaYr",
  "key18": "37w9YpgLBzU66vfWQEgk8wayhF8hY4t8uturpVMdXpMUVhWDyCrJyYUZwhgkZ6n2366ZuWu5tYvwGvuSHfZ253nS",
  "key19": "57xCKrUov4LgqUfsnksKkm98ifXqFfU6QixMSJC2F8RMhLqh7PMJ9mPRh7gTLoTx2jcWLjTYg28g5t3ZhjcsB8P",
  "key20": "5XftQvyNvByEfefsZ65BS2FexjmroYfWjUpgNS5VCv2Np6hfmbqVsfcREjsb4oDJrkJ9tC8wQnSwm5d3r3Vo6Swx",
  "key21": "2JgL8vmiUK8f2k6TFRTUuTGjfGPX8cufu2vh3kbQtykw6yVgUHk9Ag3zvqNwndaHD7Nwg5gajo8nkW8hxQmUYJs6",
  "key22": "v3nRjFwhsUi2Eqrpidz39WuHv9WvKUwshNDpA6u34qoxwkTwFQhZ4SsfTaNKLro3h242VDk4xnDWH7ydiPi9N85",
  "key23": "gNJT7P4UfKspXPSL5f4jSjLDkV4rJESHGxXMNTgrsCxUJx76cq3uCMg1q4hqxhhWaPZKjsYzjd45jrSrkZ6AhbZ",
  "key24": "3KUxrKuBHvmxfabGqQnBgQVaUYK663qRUz7dxeBUU2yk74X8AC8UCC3ywrVSwRYuLwN4ECYuT2vrrPypPt1h47kP",
  "key25": "238eamojrXakF68xBUHcX9PcqL3YSeLxs6fEviyb7xmpXxWwDE35DtqCWwpk2STRtaDHcp4F2fGirwfjWvqvpvMK",
  "key26": "2Cyq8oFQrDGeUefomLK8ab68ASrYrVZyvoLboJRPzxjVEQfncKUpgkPp9w7dnu6CHhnu81k1ZMJugEQenJZrXvcH",
  "key27": "49dQQYC5orje6A5Sz357x5MfkMQsb6gGQ4Y4aMEUfzaJXs9QchSPQnBb31SPPYbTGYf5Yo29GBfpDw4xtGahekPF",
  "key28": "53TYrMng1u5B7uT5HJJMPgCMxyZA1KzX6ULtri4iPxb8TXdk1Q9Wo4dQPPLhSico4qpEfRkeGDfNTNmSHvPTzs66",
  "key29": "BtPZxi78k3Ao7xNxwy4cN8C4sipmP79t7kfJ7tFLvNx7SdhKAqUtwoVkBVXR942yTjCPWAtXQTtwPUaGwsuruJE",
  "key30": "vy7kc2rAfZXqeBYFkurExzLma5ZpWe9EMVpgzE6dsE3GtQAFgRScfqVAd87f3ntZrDKxwfyxXKKXfsAAMNNf5cB",
  "key31": "5PHdRXjiRGdEJyECLqZS3qSphNKwP3JRrC7ZBats5h7TpmtmT4xRMdHzBTL1AHwWAUma4z1yLxkn8V5JiAPpowat",
  "key32": "5Gy7edMGjDY2nhnxUF5RHK3MnuaKLFHqxi6FvNm6Rvx3STsyP3HvTjP8F5eXZoBoiDEENyVSo576235adZGXnqR1"
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

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
    "56fT2cmNSzPw5QtoM6YpBs5kG95DWifhCkW6fee88SqZWeQ5YrNhD4jkKCSMcqHwp6ZpAH4UoTpc3EwfSbNd5GWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w3oK7e2urYqUx5fvpYUy1kTyYaVnwMKk2rBTCrGct6jw8VZTyNQKytQsZSxRV2onPTY95dbYsgd8t3mCtV1aUYD",
  "key1": "5PpLV5bQmNn3ZccCnq1BBafYEqxGWDvQHg9io4fCBcT5W4Bu8SAPCeJK57iqAynU8oWu47qbjVtjhfhYaX7ZcSRL",
  "key2": "67jRCpUFQ3nAD2EJLBfP54no3hsnw1rVuB6p85x4grKHcE9PFk83S58ghc6ebYFaVW8nFnVWEz3w8BUVk6CRWKWz",
  "key3": "3ej1NikKSrYJWzezTjVfR59EMzjmEP7DvSgGB2S9YAwqkUHi3sR9z6stCYJ2s2KF28o58yTkz3AM1JhJmYMLAXkv",
  "key4": "iabD4TJsoFzdvMVRiMtgjU3n3MM9mVc1ju346e2NPK38kBYKQGNfcU83y1KjA2C5UVDQ68FDr9sRBmdEj1U21Nh",
  "key5": "4UMVJ3KyJ2iaGe1oh9iGoeZUuezgS4Wunhfkjxb7c5bSpL44AMovbwyLnbpGnBmffZciUj39RjQyLdyYcVzGq3va",
  "key6": "63g56gczj8ELNvDYMsA4DwBbKvEzQz9VE1FhJFkpnwdn95bZtDMspHjfrycqjy7UVnupuJRN3XLKD7xdVyb1AnKA",
  "key7": "3NXxDsZfmJQEQKkjPnUNyJAu5bRXYc52VRap3TjbPor6cmEHy6m7UNTsLrjUhAezQ2vr4twtG57svNJcZF5frHUQ",
  "key8": "3aqptSsJg29FhAbri6T2M7QWZYA9Mv2PDvpnuFDukbxRY5XHNi5bijhQaAsHn8GvQpjtFM3vtXooxCAAVxqtrqH",
  "key9": "qzNwKC4BxJ36g2HtVZn8axUt5VjRQHyHUfnBJh75oXvRuTnsedKZce7J6xtJunDs8GZY4uFy9q8Sybo5Z5Mtp2n",
  "key10": "4CxvpaGXjx4MA7FX7BGPUFPQ2fjuwpoegqRZdJDdZAHUQPyckzLcR5nsD4QJeWTFea4gQXJZN6EaRfq9hEPZnLp",
  "key11": "4wJmpB1mDGkqqKgyRp6uMRc9HXN8nJqkN42kaLca7emrH7iPjtWSFBizp8wvfrhFpDci6nEf6Rsa54pkJNztEogi",
  "key12": "5PeJXHoX6iXWj9VXqXjAs1RywnmtrobpwgQ6h9sE7Beq85MK71vnTQEWYo4qFmCCr5E8BaEnseeMF713giDVCk2V",
  "key13": "2kFErzEeRerhiviaH3gtXtDTe4yvqMnKDcAm9y1nkndi1k13FMLvWzYkvbcDwctVMGnC8k6vz4bPnPfCgbe4DZVH",
  "key14": "2GQBaMecyWWqkFNUjoSxL5ioPZr7jt6RMH985xQLiMT3pGdDHpmpfxsE7vtdEmPNzpj6s58tgCejoEtTwzSHhGD3",
  "key15": "2hfVKWqtiMrcdG6dUB56EZbWvzznXxdSNSUbojJaWMh24ywuqSMcZqUKZ4Tk15i4L9NL2E4nUFMyARLjFeLymu6x",
  "key16": "2CT9rQekw6ghxi5sf6C2iaVhjfQWCQD1y4hRGCJugi49QwpZq25p2zzRJGpmrvbmVM28uS7hk2r4kcjk4FJn5439",
  "key17": "2ewodisJy2RyEAKBfeFPiKJbQDvRRxM1Ar4ByyCBYAezVdFmFpAHhzvbNaj6jZ5kF7n751gL8gXJUJsvnHbzeHuX",
  "key18": "5jNt5Y4RubwF14pLMXKBZL68UJKa5o2M6MytF3EJHGTZabZzwgx4tvWcENFsoAGKQ9q4NcdmBCYitCk9nguaeg68",
  "key19": "FScuumomwiwwECBmmKfVV1dSebrqxpUpfqg8bkB6MbZpPefqqNPKPUFcyqtna5ReRhcmHLwBy6TYbip7hNqgsKn",
  "key20": "4zvbUDcS37oyhufK2gjEkpiCa2xGbpepT1HbkpMH2Yth4gejwricDD7hzJd6f4oMaXh7iQ3ofQqVSff4WE2JiQXx",
  "key21": "3CpMc6CD9Le39BmvKTURiDhfMn7z2Cmo15AUVSWHGm7DTpJ9AQh9SkaZXy764jofamUktgtvszi935twcGYGLgT4",
  "key22": "62Wb2JB5AtAYLZFtUf7i8WDWzL3VFtBo6oVGHRZ5FwSvTf4qAg3fmZoRxCpbn5Nz8DzUvDjjQi7ef7TLK1TYhbsW",
  "key23": "3xvAKMbitdyZAfZ26ePVEzkXmgTHFaTBJoE3tHxSi6DtkHEp3AdHamUXUVerFSt1yS8YZxvGKKYzdnw2sY96aBHo",
  "key24": "qTruEmB7q97Jfsam3XMFwN6YuSmHs284r2H9JKiFvC4gEYwDCBKVZqt3HvkRLvJRCXCQ81VQZ3vFdMVgFT68FYQ",
  "key25": "3kzPvWoaCrLLKctMH4oNQVJSAczhwp13XwQeKLHC6W2k2HfKTEGRfWAiUHTwmUjDTgnahf2WoufQW4RHbA9EFcY5",
  "key26": "31i26pEvBfEoCgHeMH1ArbtC7GGnwSXK6pxf1hQnTxEym1Yvs279xJhN2kTMEuVzMsoXjDWa1YKgDVK1nLivdhjR",
  "key27": "2HffvKQtbXVhACVQb62b9C3WdgdLuFQevekVQuTYKdH4nVd6uWXj7RkhPdC4rLJcvXGVhSY3ujpcQRQeBraJWvcV",
  "key28": "2MVqKhfTVGXTe7sTaC52uTgGYdrdZhCWEy49v7wi5oLdLaxkNhg8xEvw7FrBDnmPb8y41LA7twvNMF72riaYCMJf",
  "key29": "PHfz42aRKduRhZB3UHDTo3os5zCtcFPTFyP8d36vPZGRCSsQmjoL31emWRxCxwnxfe6vAP885DM95NaxjfQDnNJ",
  "key30": "W9uxNuMb91dvSFysVb3U8VUjcG86T6Zt95zyEDKp21NDgUoxSN6mAV8abgTXUDrHvetWHzaXsR4c6s1J2kNFzBb",
  "key31": "25Ns8fNsxKnQcc6btjf5tb5CzV1J37D5enK1Em39ofz1Kz6W7Ct9SxmTNfn9ayw8cz9k2QFFyqhqiBar6AEBUaWS"
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

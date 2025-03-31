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
    "2d7PC83fZhG7UGhgLh4fGNumaNFxTnUUg9fh34RJLTwhMkoTn6xtCMb1Y1dkBqyqNx87WpBzvG6Pv4kmDQ4adt3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2saEkwuUdjbiHvpTo2JuQYG1q1eSxLaoMwnCDCKLvQvYzk4B8F77cNwWKLUwnVN7hdiqKCRBmLXwLjR8nVkP6hXX",
  "key1": "3RDojWiqHf5z25STyrnA94wyEbSZJT8L567odxyvT1P577HnCr6DsfyP7BJE21HyeEkNprDLx7Tkx6KaC5RoEW8j",
  "key2": "1ecic3zsLu43knCbLhF95nZ7kbDPVHttUfGHBa1VJvci6xzrHMTcKRz3Jfb4Td7ijRFXLj4oX2fnXqh4xTrMUCB",
  "key3": "49ZsZMsvKd1zbP9rzhAiVbJ58ZT1KHReb4Xgbnk39P1J9U7UvugkRB82AjnPdu26y1QP8tY98kKJ76LEY67XxKZC",
  "key4": "33tzXuS8ef82u3hjBW6VQq18djGurc9JPKEUovisd94jPQtQqLjah1FgVuNyYGJiKJe7MpAxvcmxbJYM7R6RvR6p",
  "key5": "3iozpqPFu4hiVEGY3n5oVwkeuZ6FX68YFkmaCTNTAyRp6Q4rBaN6NBUqD6b9SF6S8UMvkLvrdmT6P9hKRk2nv7hQ",
  "key6": "6FribzwdGhnJCKjAhKCRUPQ6pi9GAVe5EWQCuTj1oXYReueufNHXTCnB3YKgLnkK9GNS5LLejhb4sMuGRhpVqNF",
  "key7": "b1CFmJdTUrpAvbj6RvbA3bwqrn9ypDsGj9gAXz6w1d7mVmoDm9JKDkiBLTBYBeBRrZwbUNqa9E8otTzi79gBiiY",
  "key8": "5TYN6ibVxfMJahx6gWjfXuBZ2pE8RvrGvQymKbDXcxe3wM2rYL7KsK2bErtRkWHMMiJKLXVvBgTypBYo2TLHsoa7",
  "key9": "46WtdzzRoRTauDTSKn9sAbTTeH3tH6wxKgNfHMC8BiZjGzZy2eCMWApjofegzMw4Atr1RFjBgKk7vRRruXGgTnpT",
  "key10": "18XDiiuakGk9JsMCPmsNC25WWSpPrUJ3NCfB3oXLF5AoRZUDuDtBmyw4jxafA3C87VUjd1m2qtRi497CenMmp1N",
  "key11": "4vQ28fTHNVWPwgvyueUJPrq2XNcFXZSBGF7sTe9aXccnsmxZrSb2iib3DLDmdEPG2XTZzNtf6mM3aNBsiM2pHb8a",
  "key12": "46M9ADEHZBRQBa4e86Uo9c2NacmUNz4RXuUsCgAt5R1xYeWNdWztkWSsMdU4f9gN544StWZB5QXoVjjnrFX9DBBe",
  "key13": "1RipJdSUqfLn2LYyuGtpRg3v5aJtXu4vJMArucAHm7twH6iGNBRQexAjSfUJ2PevuBtxMM4mUowtqdy2fJnqN59",
  "key14": "5Khw1Yw6kNBcSLzp3QEoREVFDRo8AMvbBnGPkWWgHiXuMACauXyqzg9Vwb2KxEzFaDvy3y7k1CC2qdoFaveiCuNh",
  "key15": "66t7dGxKxwEg1G5g5Nimjd6GrzTRbpgUuQXa3v2AoDUN3UydoYLnck8scEdw7et2AB5oVnBCX4RCYAqRYWguMHeL",
  "key16": "5DLsVxPaw5QmqykiKwSVVexL1ogJQu3LJDAj36K6QwRtCEu6dbXSmQMznQHWqNoaCnqNE5v3WDsByi5JxXNJTKfw",
  "key17": "3kvEPZvxuwPrFmrjjwCe5EAynd4mYPJ5GBxz1qtzDw9KVHPJxVHXDRW1mVQ6gEgMCrLyAfGByWy1168BX7MvPQvr",
  "key18": "YwfCkZ7xTyQZCxrkig9ViSF95RQGePZcU8t5yJJ6PyHCNKyZ2r53DwgXScfsdvkM1eehPmLLB5bNfL8RZrT1hDs",
  "key19": "GWLUqxzxJkrbTUunkFESLXEu7J8B1jcn8oLYdbdbGc9A5okVmEaYfN3TgXwiSDJixRyPnns7jctCqDoKjSHMK6A",
  "key20": "2RsRzAvSis6cU5JizFeG2J37NHQU5MkuDRn9QRz1tWj3pPLyX17DDvoT2yipK8GNaxihMkE6Cm294N1RjqXerEp7",
  "key21": "54v4UgA7QSn34wCGuXSbYUPhX3c2DVcGUB8eQXopiQAG1oyQwSHp4akQJyhWSRPPvynW8EaGnpro4JcMuEN8DZTu",
  "key22": "HC6nxCZyaGxSu2mPCEgs46cJu7idWDYugC69q4NUQebg3asp72PNcHQQ5t1pgkjcNtGasjbJtT4o1oZn5Tj7UKY",
  "key23": "UvtnyYHBLfD4qyVCbhgSAkK3ZG4oFzWiPGQ5gmzRuDECGAeSWbRaHdBy32hbAiVuWH3bNUxhLW5pDWqk6xCXtiB",
  "key24": "5sxJJELV89SfoL3b86VR7oYEMMsJ2s3wUBQF7t641pnGvPQes5ezGxKUtrJZJ9VXd1yrXBqRMw4F4QNX5fshLM9M",
  "key25": "64k79fD3hG1Z5KABdFAVFD87s2zWHUuwKqXwKzcCjQWQ147PMsUFBRi29emseJu2MJCV2HfjhFcSQd94JnCWtQAU",
  "key26": "bkXVe5zQvCkdtnwipphjhHTtKyHnZcXwhPCFG2u7XB4BrWagpDbcoHbVepctVwrC1hhthaKvcFvF53iKvW6ACvV",
  "key27": "2mCLFoFgQWoCZAZ53cUuUR7hrEFaYQcpm3LanoTmT63ipnv6hi2yykRZGy9Yfb5Uba4iLvoybncJRWsWFrxftuCW",
  "key28": "2L5XUjzqT3QhCFH6pYUZ1mLosMvqGVpkzXiHLzz69XWY4E9YN1bNpJNJkCc4LC877pknRpNXGtnva8EcJSm1yaeT",
  "key29": "5NDd1MxhqmkvzEnUYuQk8UGjZQ7wysan1hJwG3ELFaCkYzcgfwYms26xkNsrBN89y7798Pg48nWjR4RnKkSq3Dwn",
  "key30": "59HVrsrZqvm1VcErDjzmDXzHb6nQuUsPYwnPqn9HaQKep1qcPK2rxz9sz8kca3szrFwaJRR51HSAmyjuh4qCAvEt",
  "key31": "3J4Gs9cDpPYDLYWSQyhzF6B3DZLqwowVZMR2CRDo8iagaBSPakXYJJENVh3j2rtxehnbVGzX2Af8xpRFfNH1DNfs",
  "key32": "4SP6ugpj7KCiQdLDgg6gzyV4dofkBMouobifkPaMvsLSa6FZyRVqhdysiK6qqpUh6o25tXjszNfgYkkBDKpVAY8c",
  "key33": "2aSZsKsYTib1oqh4t9VBZSiEMqrzqoxFnz1H389Wh7vuLYnEhvtA2sxpNeH7u9iQsT1FXuTnmwJqNDQGviUS5pve",
  "key34": "4mvsqaSm5nhP3tjTwrzzF2K5xvgqufdd3E6d4aViqcaSJeEiJyHCna3pVzKqdUMyMfAXAhisyX5jfREntb8fHa4k",
  "key35": "5EamrUduLvYh9vU4Kt1FbQaNhnxPgwypeQTr3EkjLs71Wcs9i4qFzUWzpJVjDMEuL5d6nF9b6aS4sTGabejEBHrG"
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

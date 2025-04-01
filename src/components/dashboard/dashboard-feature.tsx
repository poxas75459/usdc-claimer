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
    "3rxc9yVwyvXYzjLM8h9QGycMradA34Xc4BdLK6mTdasoTNrbEBxFindeBUeMeH3z9guTLHmQ5on3VsY5tTPZZuor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eW3qNiM2RdWT97vtTtXkXencsHJe64WKuaDWyw35RMwQeAL4zaPzLQL9yACBSntiam9bnYig4jrF8Lxq4vaQ26V",
  "key1": "5MGa8fHKkHyuXE9dW2FgMitCo4FpwQ7Jt1sejj1ovDGGPiMR27KqDPkgLp6jf5jKw6whi1H2jB83ZU1dbeq1TNRu",
  "key2": "4sfbM1VnFLrPsRzS6m1gkbeYfKyghKaXKNvkpK5CUW3nxDDnDnALhwQPLsdmyK6jLqRrdenqupF5jfyvr4qWwbBi",
  "key3": "2ZpMP5r8uCHRRytBk1QokF8cxGDqHyHL94SELNjoEeJfhjgZ4L55TTnyW8fNw2UFVH6SkxeCqDJ2he1DPxSUnyQE",
  "key4": "2Lkzy8EwFydjbGvWw15UBkARRSoBrLbQLwGzEMaDGCTCJdgMmrD8gvkqURzPip8HGjNVuTU4tvGhxh3eRxACemKZ",
  "key5": "4NySt7Ebyz1YdQB3DXMKsLWLiyna3fn9oaAHca5o9sL8T5yL5adMxm55rUaa8D5aGFdLR9tSBFAqDCkQiBwQEHgq",
  "key6": "4qjgz91mdmUz4eDU4xXoDFh9i7j5518f3MEpmAHiJsLZaQiY3oQC4xZwfKH4ZxfCnuSrgx2qjjkfPMMfYTgA9gLU",
  "key7": "5t1oEJLK43gts5NWNaG8LaVZSkfbuz7APHkj4aQGRaVKxqr2hbPwjWxmUQzXLXRXyZNsgymnjPZsfdwk551qjARu",
  "key8": "4GMrbarXhTbPckKT9vNh4DGJpwTYSEPEuSYvH9J36BpKgWVsC1a61srWd85U5WD2fExYUqWCNcmLtz8hCeNSSP1",
  "key9": "21Lk3GhShQPomut1tpuFkq1fumnZnwVoreYBvu3AgGVEAHDSanAf4fP9HGSr6MnVSZYVGiqn39JTEujsEiuSyjmX",
  "key10": "39bTx37njvbaLnbKGTRo2LGoh54kik2ZxT9mmyJ35aix1uA4hqVEvUkTGFvPbeEsgoDAwomTkzrZnop6w2QEKp3X",
  "key11": "5YjDyyoMqxrBKZ1eooQuHUTXT1WZSEnppMhX2ys4iBTgSsJuAtcSCT6Ph9L7oXu8oGYJKfKY7im5L93a2v3W1EMJ",
  "key12": "34pasvc4fz72P1WuGASNNRBoKegj4XKZpYWfs5trefuGtvB8DyH58ukxHicFDrmcApmSDS8J6ts1JDb6Gajo3tCZ",
  "key13": "4txEGvEb89daGwWA7cYBVkqtqsdN2WaTWp1gxLR4B5zH5nYtoVxEBip6LHHYw2DsK562fHugcRmTMmk3G6MD9MCH",
  "key14": "3a9NUBTWWaq7PBRnGaVvaTQjmkNoW2agNDuagPaJSVyQYCPWqEt5FgQCLLt9Lu9SEyy6phxxFdso6XcRqcG7YkWn",
  "key15": "41aytbrnh8DWu1VhbhqTui3eQxmeHskBK2USKaKAvE37e33wo7sMchTPJh6tmjpi8YRKpsyrLJHVuRAXgo8dprQX",
  "key16": "3qP11vx1RvsbvzeY7V8SrNysYwyMdDtM3Znorm4qdK2LRqaCgXqxQqgpdiy7nKJAQto5zpDnXUPRMnXEQBdus4TW",
  "key17": "ELGyZVZ9ZFbpugMNpJGiKnmAEJW1Awxva11AC3CNi1gWkxkeK9f9LWDVQVRU2GjvzgaLXMJXh1879r8sCAybCnX",
  "key18": "39P2bgaRdnMRSARR6UoW3zqF9NoNzQ4nTqHhK3iNy4CodFSqMcUZaYyG2KWiRZc6R7V1MzL5dodXzqy5dgdPLXRu",
  "key19": "2GXMdvcfkgTiMqBhdyZ4s2dSuNUA6nimibztczpQ2z53TA7Dv1SNJjU7Wt7zRGXN8AFdMsavAKZDpoRMgwKwHP8i",
  "key20": "5o7p7V93aPSb6CEvYD5Jork3XVba8gFZ6r6ifQ2gayKowo8x7H6pimdrKmXJUtGpeVYn8Lb5A5WCnmtPQoUkGctP",
  "key21": "Gkqyh6zBtTSpJSUFqvATyxqEvZ17ETG4s6VPMLYcf59MRCZHAaFySeFtLNyoeLXWSxm6qNiL4iti3upbszwcZN7",
  "key22": "2uVWDAabg1vGCNfW1tLGXs4i44gCWaqa6f3EEvBonKmf6zstdNTZwTDwfNVrg19p9wkxue5LwzMvuBVH2QV7VUMe",
  "key23": "3DPGjDAAyVEgAxdhXTdBGDb6tMAufhPbBDpKFQoeE3mbKqYXn1Z85GQMVcJa9FKvLkUukXkNikMsaTsdxgv4Qrv6",
  "key24": "5ST3cwzaFXZX3DzJUePpzq2TH3V8WADHsUihvTZXoffX2riPC55JJ6dZCxzDhfbkJE6XyaqVPsH9Y5dQYmzRpLsU",
  "key25": "65dKiLqyEP3cvvjrU1kSJGgDowKfvxFovWy1gSB6JBLJSeu6XP1124yYpAwfkav8oBqiXwxPHG4h8x6voJNhDY2X",
  "key26": "5CYscHMD1MXadfYv8EpLe5DwJkN2BakNmhnVza6Pd3QjL4mYN35GLsWqcWsY3VzAP985u6bKUanQuj3vZmsDaBAo",
  "key27": "4sh9aNwopR7XFHcJaB7PTHJx7CxTkLo5FKD4CiWpECQfz4tSZyaHSdZAEy9RTCf9LD6suuiZSH39eJA8gSBaWH8L",
  "key28": "5M5i7kz7xpgmUNZ9nBy5re5doNDzAQKCZcoVwFXNuQvuXAPvENcx9FkGYm4K4i3p5BDBre9fn2L8gsMibitEWNk2",
  "key29": "4KzVjijwBtPkHryr7ikdhxb8QBfs6woUxvZRrkHUzasTwkrxiHXArjo4ypfdcz9WehGSDfAsqv8uvQsmftnVgXpx",
  "key30": "29NoYb8iTkvaTtiZX4CiW6omGmHF2iDj6ekGHgpwyYMtt8ZCChRUbCRzWopYniT6NFDDCM8phd5nwKNWQQPjJx3Q",
  "key31": "52sJUnHGb9sMxjPHihCnCUZseKfGV6Emb8GnuNZtKz5Ntu3ioVpPKPvtGF1uZVWLNUnMt19z9qadvT3Knx8n1JMo",
  "key32": "cMWMZWZjX58qkFBU5MZcFVSVQoAC8UCV17JducrAyiUSi6jfGKMDJx8B9nmmQyMbZeFmBVBPU6UrJUJFQ89KnWw",
  "key33": "2q8ie8n87Cs4Ku3QBUmps4tC7FqTep2yDXN9A19m3MrSscLpSqUVFa7LX3ATuQnLJ7wPuaooybUCDhgekUxpo6B6",
  "key34": "25q2CfPNMgp6LwzUQz1yC9RLF1ksvq61emMse96QPWWQm137fbfz4PZZiadux4KZirUrB4n7JSjT2M46NZUTXTwD",
  "key35": "3vkTGC97mpxsYPe5mNjUvyciSk89JmCuAmAQvKYzsJDgFRQuyHRP6ghBCVEPECQDHSKvHiGzevJqjCJrZPswFR7g"
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

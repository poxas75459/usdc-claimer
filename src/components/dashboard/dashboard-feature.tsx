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
    "3DYU3XUbj6phaCqv3vsGw1iuaNi6QuuHgVi5GXWHDXVsP89ZomeWDndrm6HY1Jj7x7eAgGq8qqvSy72Lk4ngzrgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjm1bosMirFLD5PHt385CttfmEVnYwg14K8vXYpJsxoTgeXFgUizFFYEXs8Zvoip2c1TiKaD1QD3YAFTwe2zuLi",
  "key1": "5UMTCtBpY9Mdg4Ee6dGkoPjytz6reEuSLd25Bv1qbmDnPTgC5FzC7DBSKs3Hh5tUwPscJ2tgPyvHrrkL3HTpJdoa",
  "key2": "S9GFb16ugCFwASnzWXhArQpwdRK3Qbvk7G5ZerBjPAxTh8bY5VsQPAcofC34kq9JWwvericHKZpGKeQkP9aWuXf",
  "key3": "61CN4ggsqwXrgD9Kf31vgK99VrQuL9EMt3vMukBmfX75hsin6eZcQw4UqdjrfAAkB1o9cLD45cd4fWW8oSHdRiW1",
  "key4": "3fyWh6d9TroGhZzjBpHFmiFoVfqJZpUvjMFoGVa6tHeKDaRe7xG5S76P1LsecUDq982KFD9cAuX2rXmQ3RiA3UAK",
  "key5": "5CK94URX9KLYS131kWsF7BKbuhJrnyCP2CV9CxeMUWjEmjFBNrxTCnueMSsg9M9efmuY1EVLgtES79a37pj7d6gv",
  "key6": "5FUkFU31u7NGWVik6MbBidqn2qv9ac6jaB36zwV1quyPV8z8yEu9Z53A29P8i3v61czb7edoW1DyFaCQvzQgDh31",
  "key7": "4nkSKthGHiW17NU2XT8aFySRnphJBNLEj7dwBdTbVohfxwzJ7kMr4ArNJAdrB5QFv7PTpefsvU43Yqv9cHnyuqHG",
  "key8": "65wvnFQet8ypJPELUYZ3DM7SKFSMgbDgHDdmowrQf8tDELxMvU73MSqXNTbM4w1Dd8e9MV6sk22d9C9uDrkT4X3e",
  "key9": "MEtKryGebUZ9jgq3XwEakQfBXxLz7YEeSD79wMZcU3wNqL8WSwLYQqE2AKVvqjCyicksbw1HNNEbWSP3Ph9qbJi",
  "key10": "FMqGKZkh4Q1QJkx9FLMDEPD1PUva4Qz23uMoxEEJKzrZMwBbXKSaZGhzHc9qen4bMvyCpRMLFeQz9B7j2TjVKiL",
  "key11": "2ZJHcq8qZyDNgorU2k6MgQft2jh24PFc7qnDtrGKWoBBgkj62ToS6p2oDtMTcFDnbnFQ4vDAjsJLXcTwomTq8HCG",
  "key12": "4AeBaNofkBRjAoz5uMBd72DC5zmK4Z9S7feX7tmhoMi42m1oqtk4XKTa7ofDfFxjMEKZK5u7zX7p7BfkFdYLUwp5",
  "key13": "3XWz7Q18sZeuxpmRN4VWCKRUbReQxUfkkJvoKu5brxmrwN4uHgDyfGyqY4V6jjJ4cSz3Hg3YptdQtWco838kAkZB",
  "key14": "4UJasMJ1j2gFJKAq7E8vMexm51wzzZKXb1LWjDS3Q7CnZmep2AztyKDC6fLwEa5N6afq2xxywY1ywRYrvtJ3DFMa",
  "key15": "2B15SzRsTwfg45eyowfuaJv3SAPmpQ1sAb7K3kMXpXkGDPsjJyv5jJnXm5F96oaemBsYC9mV2W8RFjaDMShp5HYP",
  "key16": "24c928axrRHXR4NUAyiF5DBvtLuKqgxtHna5KgZmTsspLUNP46VZCnTciQQW5E8hH4mumM1tDD1rs68zokJGED5Z",
  "key17": "3n8Ax43YysXYPiiDkEjmx3P6amUGpPkcbe5MfeReZmaVmv8WPvrzPoQNYMue3FjXTw2EtJ7f7p65jL3YQhLjEipy",
  "key18": "2dFWh8xR6PgagAzLb9M3pAGUV2zuHjaWoLfFoxniw6JUhRcLSsE2ZF1yoWPfA9arfwy2evfcb6BiXVEsxcSzH3ZU",
  "key19": "4eXxY9ox3fyZ4bhqfxbqTDEcK5BhartKM9vfp8hPPRG6qu8fiWqn3bm4m26hc6ozs4JBqLnrysc94Q3pdrcWrYuK",
  "key20": "2QXqS1NhaEnvh49Wzy36ikeMGF5b1Kv6qoBJnW2cYKXMrj89N7V2TWjMrgWPHqcBsm8inRscMc4upMg6eQ1JP9uK",
  "key21": "3zuJANUs1FbtidPKWT5KYs9WQtJsA62RE5F2H8Zyb4hDL9PGaUJuy5zjUp4PTG6oWdRWpY7SDntwLzqbYw4iuc78",
  "key22": "31uUFEqL3jbpLex3obNomTxBaPfQNMmLpH5EVJ1NkZSkqArVgoBsp3bY6q8Pdwdm2tBattw1tn9Av6HaHDJ5em14",
  "key23": "5SWF7turHqnxC4spa9TiFViMA4zYjoDZsHDPXwLA9PuZnbtpQfgQLDhuPQ2JQvwbbju9wqB8ezWow2bnGBT5wrMh",
  "key24": "4fDU33Zpk8oWr8TiYRTUWidPvcEdpvub9AMuzLPtTwGxiaci7dKLstk6anngtJp7QcnAErsYPcXfi4NYB4nXNazc",
  "key25": "5yam84EyhZpJVSkdyW4Hofyq4eMRH4XQfPS6ezpV61oHc76gVZdEPeXSJPEArrwH9EgNz6d8vTxdyKwg3p9XidoT",
  "key26": "1pivP4Gm8rgKRiiBpiPh1DJiQYf1cUdRmoExjjQUpCf1hhstYrjp8M77t3ddy5JwgJMCbErwpMACPGjeyKKu7qn",
  "key27": "2DixHnd4PPA3FXbmWYrgDB95tM3F9Af59WDKsG9CrbnYj3v1B88wvTpYUP9vbtBiP6kKHzn4aPW4GjGcFds9gbGw",
  "key28": "4BYvem7AdH5PA4puH2rsgrpk7uok7nQkxg4XQqC4itUjXHMbFJ69AotNixLRUb6pqeDbMRDpcRFmRQj5qYqcYNHX",
  "key29": "5AYF1FNoCYywP4J1DHCHrZy9tZjraPrcDM2qgdQ5JzLszWSrrzXqquvgudopNgZ1W39i7xqB6FpVcggdZ8YUEuTX",
  "key30": "33H68tqrhc9bKFtTjFyGXxJB5UyCVtRUEZhLx2GeAfL3b41iZVMZT9HmjuFwt5JMJ48Ds9YjUkwnV6FTDo5DLVJF",
  "key31": "3MLrn4QrsbB4ibbjJkCPNC7c8caVvEWBTd1mCM8WEkmpfVQeFfxiiYRwugvDNm5zrBRq5gzsommTgsinSU51SVwU",
  "key32": "4ZBnvAiH4dVJVrwAagkFaGHpe8bYN2ZhFrGr2fHbQ3PuAjSL2v62WBdATPvmE5ZpYG5hRBPaUpsQUsDJdF7bPdd8",
  "key33": "48gidLU4pUoCNwd795uE9GfZu61s6UDcdFwKYXeaMyMTcfGZwx5bK18P8MYJjkqKpakTz2BDEjkLgApKQYAF4spG",
  "key34": "3YS8U5havVaU7cxbbFbkKufcZg89X1tvAjz4kVPhz1XRQa2kwkwGoXneQC8TG2vte7jCjsrSowkEh1ZEXah7Zt8P",
  "key35": "3MXgr7TshPxx2SCgpLc1EXm11fr7AA4Y2569jqEowVYWXNCVgJjdGoUcbb7MYs3a4MU3y6LF5in9jwKPwbmfkyq"
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

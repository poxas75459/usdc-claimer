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
    "UTV5KrCWKmcBex1wKmTZn738UxNEYvPY67N2U4aEuShsyT8VhSGz1xXA2U8kvMwjxAkgA6qkSztVDNkd77WaXfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6eSi5qyy8M2iW6L4nziLq3dyb8CMnFSzLmqegZXE7JLsav6rSmwNvx85AnZNbd1aQM2ZYLy8KmhfDZmKLxFpwSH",
  "key1": "NB6hA3AaWUiXrGqudqm5f7BMk9FUxfaQYAf8SQpaTijNvKnrmoEo6HFRHnjD9YjCuaeCxbr3UqaSurxLgQkBGzN",
  "key2": "2hw9iPaiQZTifjxvNH6hLuJdrvvMZhDEKqJQ1ETJSm5y6Lif88LuAynCuqtfbrfxQiAbAUTtdte83PahgdEd6eRT",
  "key3": "RiQKw3iVwSLqxXnzEUjc6LVj4ciZQJ5JRYvLJJVicyfMhviYAd8pVL4wmynPY6qNpi7xWVY93DweEUfQ6sqK2oM",
  "key4": "5HPKV2Fz8FVNLmtYHnJr21dTi11KBk8RNkX7FogTvNp2xdx2PCNhezDCcWgLg1EQRKeqXcKAPuLWpEYaAn6rkwMq",
  "key5": "jgcm5k7tRQiAsJCBk2YLqb5cDmhuFXWemQG4eU9VPsVZYoe1xSAqC15nJATaKtWCj5rEEvBbhthTJfXKmyX2P7C",
  "key6": "5UBxQ3qE6oUW1mvjjtXKwkb89bFe1v8BTzfFK9FmcYJ6vn4qXipuYjePrvYijQCMfsr6S4QhxxKeBpofAdLvmLvT",
  "key7": "34bpcPZkfKNh57rKaA53Vd6QPrwBc8N5J5BnauZG2rU9Dnyve9kEySuuFLf1SG47s8SGBe3TvaDudTRht4v6HAKd",
  "key8": "5tJ5d1gd1JmBsHsmeU6nPCL65coWEF3o6t7iZYJnt3TEH3Cq9CtCczW7kyQcxwBBYCxasG6SuuFoVTmrqYsqPPAa",
  "key9": "3s1K34jZrC7sW2FgzzJqsKcgpnx3muigNw1xx94569fUaLRZFzd6QCJfhKnn4s596znJmKeptbpyfpLF6cUhz8Qq",
  "key10": "3aNoLzQ3SS6Ldsyte3GBccmKRkAcqc1itpSVo72D1qbG8wGDTZrsAHwXhNT6yM98Mm5P958YtGpbikzDNpnd4ZwL",
  "key11": "2i1sbekAe97YZBCDB6Q3u4HmFECPUUeGwd6vFKWegAhY7UbStb1nNA3mRZxGp1QQ3rtmkehKWdw3dRxZmyB9BZHi",
  "key12": "5zVrJB6CMe9jw3TBTvbqm7CBrNLyMx2KdUt3sP9WDGQ6hYn8u11pgxDaEDuuLUe2cBifAB2U2qKoRektVooge8Z6",
  "key13": "5AxUomzcsAbSme5mde9152zDzTwzks5W2SN1Dyd9WRxZ72G3XjKxnUrzJK5zayncDGwS7W1ze97zAHzDkd6hKSbe",
  "key14": "523uNiscUXYRDxFRMC2QTQciRB3QiZT3XMq2AmmTbh7vp8yJbdKHp3v2oXdtnrewPTFaonVtKNgQfVpTAMcyNajE",
  "key15": "26ZwaYAviKre6wQeythexizAqk9Aeb8G1WD8aefiakEiHj9cL8XkHX7J8p5jxquWQVEpPCBumx1Fw9iir8EFXZ4h",
  "key16": "2e61yiG2bEEdvxi9iLdRVLiJU7cpmNdBM7MZ3p9isEQrGxBZMyySwV67hgmaTZEwHHQsuyUpFduR5ob4Z2y5RapL",
  "key17": "2Bkj54Mmx1wtPM6wzBEakU58BMrxvgJcCW2YzpyPPhLbhpsTW9xxJWhNJ5sknZw2WHk8GhJdXweoFRM1xn8VLt4K",
  "key18": "my9xoUi4TVZovwQTwW6dKdiZdnBunjJou6nL294P5STdLsSVEWzHHka8sw4zyYVqBMx5eKgb6iqfdUfRvrim8p2",
  "key19": "4V2NZBveuqVAQnVoL3qH522Gbx2abF5u2VxX73UznBuG8yonWGTUZpWD4AHYrTPn5dQrVJyqh36Zt2fdTwy9nsXF",
  "key20": "5xAZ7HLMiq2JGUmot4xy7oGRWpakNkD67qnRNDS45oVKdez26Wgo5stXgjr64oKPXSLAx2Mh4QD5hTh195vKr3jZ",
  "key21": "2rEHh6brwgF6iN82H4TTkEUXF41RcDoxSLj6sdgRVRWtcYj4dEGHBp1tZADYec9FPbB25E1sBVFB6j32p8Uo8t8s",
  "key22": "3A2d66zgwWuKxLX7JUnac1kP8zgpFDNYurwUvLgEcQMghDhpKQToBZpRUuyc1FQfJ1EExgGG6dNtQhd7vbiVy6ad",
  "key23": "5P2z75aQT4VWv2iUdoahnkfBjqiPtysCY9tjZGE7oeRTnnAs6YWEf4sn8U4wKvNzqL8PQ2keGwB84fkkf2k9JsBy",
  "key24": "5bmDTwCQN8BKWXPfowiVtVHAddcsALvRbWeQyGPisG974FZvgTKSZPqgxsFzLSmAfGKWy8drQQSwgYEC1S6eGnnL",
  "key25": "3jUeoKEdLYYCczesgoH1A1xo9N7heEefhnjtBCb7eyNXT5NkK9kUGL1jnNERST6CzUVGHN7VUAtmSNCuJQMT7Vwz",
  "key26": "BNnuBV118vi1vsfK1BsXHcaAgoLBz9TodX7HQUHw5oMzMoa8drM8tQNxQjsuzkx3RFzCNzKN6iGKewZ48HLuQkQ",
  "key27": "2wGo5Rw6FWNr9zYQtofDBkfxedRECKZxKgqWrvGKBSfypkmixU2pRxb7GzLToJLH3KDUz4oWBa21Do6Hd9nStzve",
  "key28": "31gNAAhDATaRP3NDCAavCSnDzESxfDCtbZhDeJY49nJ3Ejd8d2wXCMvwEfqusRkfPisT2DpSYy5uV6VdbcZkUqPH",
  "key29": "BivwSC6QmgnZg7UMSN6uEuNohQdYsYkQ5L3h525b4hTHnnE4Rk43tM8TU5XuYGenXBqXoU5gje2gCfoapsJ83j1",
  "key30": "2ekFeGaHMiVQ9QiH7WRhKZW5cgPc9DkcpG7wdtJ4BwWa4eLHQYqVzURm4piumFKW1rTYUwbW8qHQe2RRXdXFSzYg",
  "key31": "4t7yxaR5APpkKH314meeEuqY9CYGzLFmeCH9Z4SPa6fhatDFcwcq7T9kthafgtun7DDj13o3AkKxV55Ssit9wBda",
  "key32": "4nKGqUaDAkX6mQVYdpwmEpAiAXLXmPEeLNZ4NTeqp1GdNnrfBB3t2ExLDWBCJgJqhRVtgvnbLZtFZnAA7Dm6GfM2",
  "key33": "4d8PqHUPmzyJhHDu5iHs1Qu1eDdvpWciVXoHWBRf69zzBq7Wv7kgDr5cgiC8Qpz5ifN8DAP5H5obUXrRDiwtw6LJ",
  "key34": "ANJVAvdQqBgapACXBSu6pZCHM8iUBZvv33v4f7kLivjUbbJ46iKjr7D5khsdoN9xedDBJuZpg5ukyHxahgN6LFT",
  "key35": "2WaxEd3dhWE8Js1jeJNXBLbGTuSzLPCEvWuWkguKY4qgVvEyefNUJecmHaXVrsuuCz1MSBEujYHeTcN2TgVAZ26G",
  "key36": "2qfUeQMbza15F9VTXaY2uQ2eh31diTB79oEurAAJVfrBUfZWbKGnoT9e6su5RUtDjX8n1nJgPktvfdBzEn8je6EQ",
  "key37": "3uK36JCAL79QCQZQuZf6hPjRb59fTpwcgTjZqfR8doh8eq9p5eEL9Zx8AhK3dxh15AcrodHoZooKgzWWH3x9r7sJ",
  "key38": "3CexqH82aYfmzstHHmAvfaHadA6qYrzhMEBvAyFRNh1r13z3jY9qNGgt7XtCGPZtqbSZqacLqyANShf6T1LEni9F",
  "key39": "5umCXzCFdhiB9U5TeRNGoWRQthk6M2T2qNxLEj1gSQhtjFAAFcqHVic8ESgbr1URcW7xBnZ5CQfYfZG5YRETLPo9"
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

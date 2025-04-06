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
    "PdAcip3C94d5T7eb9YVePJXN65LHGNmMpW2GkvmvbJqhmVghddkdA6AgWyPvE757Tt4sgY4qmPCFhVKountd6iF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LE5a5RWfXxteABTYKp2cFsoLEH9ekAjHjZJgstoQDF8sV2crWEfCrn4xqfyZQX2thDy6Doq4mq3bFsFKTQjLzR",
  "key1": "3AGzXtjuK67Y2GxNfueRyVwdo4Wy822XLKBEfBVeRF7reqCMr17x5mGLsC6LKZ4cpmnDCGBnA7ddtAY7TWm6u9cd",
  "key2": "2ATiDcRLs9quMDWXJwWs9RwcGGb9M8QvLLZQSkvfoKrKVuhXDbPFF12Yq8GJ5hXGkdZ3be7PqKJtmxmprgoh7dah",
  "key3": "5hndSx4Y9aSCwiwgCANDvkiuUAzc94S61vWSVQ5hGGHYvYDZqN3Ks5tUwL7VhF3oMoLM1esr3Nm6gh8DuocbVgp",
  "key4": "4tiUi1WbXE31cxegxCKNHwcaqYcAYW9C9NjrmJ5RWgLiEkErW7tpsZpsoNAvAqiQPpQkDcpk2LoCucnMjjkGSMAh",
  "key5": "3vb6pZrKgNbsQwLXrH3S2ibcarec1ZkoZc7yCg29DHCF7pSdirv7zpPwFh8yqHxxT5w6eBrkobqbtUCSMLSnhScn",
  "key6": "4667qE5ZApJMwwmSVV4XZv7SyCkFiGc55YxHFNEJSSu8kdU4p2S4x7BXoHFV5g9MGsVHTYKq2Uy6km5vyA7UY6zh",
  "key7": "zfCj8Fjn28MFEsU4tWZrVd37WGwjaoDJQuiQiTX5erYx4uXbj2sSJsDqr1t5WBn6pxe9k9v3sM47Xf2rr6QFVjS",
  "key8": "5w1UzHU9i5gFQCnmWt4THqDtnqUZFAszpTkrsmLk4zTa9szcmY8brHLMc3AbKr3BVFC9mT2jaN2oRbB737pFY1xu",
  "key9": "qKNyxHjt7aofbyumxr2LH6j6mra7V7ge4K1SHyaUFuP84bEATbqVcq7LZnQvWZYCSbnXX9hUwy33ivzuyUaLUnz",
  "key10": "hjnAQkYa8x67tnTgbGkkRn8UeZcb2K9Ws5bCK763nFWeMZqjv377KqBBsBZTxs8R7ChEfMYDQXasioqXF1uHRYm",
  "key11": "2SBrcagdTPWgdTsjNhY4F9JKM3TavqQuX5TmTa4YSG7Y6tvnXqhsnMYhBpNoHtrmWy14ieJVYwX8qLxTwm6L6yWv",
  "key12": "4A2d8swa5dkhqrsR62uhh4fJ9yJ84PEoXbVFDBb5XwUrWnKb1aTTdShCtjCombupa81Nu6vgRaXRK1oy4tkF8Tyc",
  "key13": "4A7wdtNgchBMbWLdjbrhdb6TM2BGFgkeCNQGqbY8Z523RZya7pVhryESMf6grUgQTZhzk4WWTLK2cn97zFzTiEt7",
  "key14": "3JeW8wCrhX44mpPuH16pzr3MF9rLTtz9noWCZM7KZBJgkNzdarNiuLfrvFg3SK2DfwogRVBkSmieA4UgjtCqEAp4",
  "key15": "2KQGUCnFVdNJkArZ3HsGjf48zUBCWTooK5tugXKMrnVrvKen8mHEHRGjmLL5gLDSZLkNR5MPs8wTUxWqeWCJkqVM",
  "key16": "S4twKHjWghomfpR235QTsjpTASfkNdYgrn15SScixYwLKSE3jeDJwa3uJa7bNMSvg3KfWi4kV9vayoXSEwngsZ6",
  "key17": "2c1uDyy3QCV1Vcu7D4SEdxAgJq5BKsWVmeuA4seF8ttt1p3W5Mb5MQB72SuL4CC9PCuBfpqidWKAftCZ72fEui7J",
  "key18": "3Grau5ZHLjexEEh8Vdr3MF88Ze9i9oAcrTvKrt2YiHva3RGwu36CYPZd3dezfg3cytzaTskrTkrvE15M16CE17f3",
  "key19": "5ZDHBwWD39WMtAaqNNCV7eZLsaD3DbVgVEnbsVrpa4SCBYwa9kEpLMrvzm5jwZtuqF5iC4BF6T8Pbn2HVRwdLc3M",
  "key20": "3cLHWnnHsKk66wvtA7abn7FVewoCpzoQR3dLCqX7LTVocJCZpZVRrLHt4hvwGBmQ1PucXh5zAuTngaNRmr7XwRV6",
  "key21": "23eZE4L8Q2CjZyP5whoCRG9P37oYsb12nJgedGagVG1NLeCxSzNv4ruiCECot7sqhTEuyud9USnyDtCqdsrTNvjQ",
  "key22": "2xJQ7GGGi1fae8Ja4nee2qdtR8f4xhqzCYBKYYtHQccjQocYRetf35ATZHziyqByF6eoiwDtqcuEDEMtEnUsLc8z",
  "key23": "482oC5Yu5t63ESYRJtS8yGpY7Jtet335eqtksfgjC3vjj2NqV4JgH9gkVepZrMb38yhxSvzLBkXPwGwBMnLvfKoE",
  "key24": "2Bc2NudKpqDpNU3UagKQGzbijQqtFJ2CZFM7uqSBcpkDnRrzwa7J61At3Wugnji5cxvcXXwBA9BzVeF1FRrjtJYN",
  "key25": "4TUz7irWu8GGHPcfeXDKDRS1qboXrUogW6JwdtdyT3P3TdLESiWjQ3LcDC3ipEjKpDvDuXZhSnWNxGLibxP1oRUW",
  "key26": "3yiTiMgqWAjNGntWCUfqAgQbSX8VRtFfpzCjoB4R1cYaxJZSP1kQ9HHitoQnXr54grJWJSujUo9RgNL93odSqBt7",
  "key27": "PSJ3ieWhCQAo6RWYQ4YBawDjzHAN9r19kNa7KvLV7LqMK6pxKzjnjep8q9hsnwzQih4dahDsikC9492E6nkYjNP",
  "key28": "3sri5n3YxV286dyzpWiHwvbxh9Qf7qtneBQQaJsDF4RUVE2b8mPo8h9oGppmLSmRzvtNgXiXb62agpWSX1Zf6hZw",
  "key29": "gGVpzmV9WsBczXWPr61boYGda3aPhsbTCkrFDGViZ8Rz8D3bgDMdWmNyxobXc27QsL4Vie9YigU8XgqoMsnx9VQ",
  "key30": "47xfkvB2wqb2eedSWqeRFW5WNGDYgLieSkNGb3hG9cSUQzZMw1Lvb6WnKVHBsEvp68CpgPmerQ9KtzGe1ys9BNQA",
  "key31": "7rZEFPmGhRD9E5ZRaVFmyz1xf48QYKkK68GkUJjbTFFzyo5DXZo7xWZNte41FF58kM2yBwfs2atrjrB55jB4YDX",
  "key32": "65opnaesEHdeTXdNthq3fjqDwxb3mYRAwSjkBPG4LgsT3d2FHCEXcR3f2jrpWzv323bG9nJ66b2N46cbGbWh6KTP",
  "key33": "5zVNvgcyqy2HQBZizDXSZbkdLyULZgjsF79rKtuA1XFjirJHbMNRfCZ64X9DdsNChDBtfiw5V9Aq2VKaJsgDhKhx",
  "key34": "497prFoDVBDou6ENMsGS55z8ggty4rtqY4R9aXzYpuA2znFsXK5zmtFijozWL9aN9NDBdGWpvJK1Wtw5Q2tcfj2U",
  "key35": "42CMBaZ5GWy8J9fKYxiNJzFRKZ2SRUwa16hqfWyeyUYbgR47BQs8tjE5foaCAsnHjAuQbL9eq7772hNvT35tXRpN",
  "key36": "3EhVhwAxDHsTpyVFRrAveXjC3cceuWfb7hi21Wipx7yadDnq2f9u7dX9yJvbV2befZPuK2ozmdi8huneS1vbJrxJ",
  "key37": "aB2Pmqw1WwFbtXdbyo6ZgGgAdgGokK6boN6bffaGhGXMuXCkJTgZF8iJhjFkpqipUFow2pmFYd5rsm4BKHHoip7",
  "key38": "2aBG58NueFEDS226f1Tx2KpnUNxxz2DA8Sxj7q8ykWiAUsiJiZNcHApEKeYXaJPgq4rRzVgTEdeieX5PyjRojiN2",
  "key39": "5MKtq32vMumWTHcuXPuFaRzx1VMjDfzqK9kNqWw8bfJkU7LxuVePNGaJn4Z1nsD78XEvUaF78jYKrcNTia93wNWP",
  "key40": "4o73dogrNkRVa8SDmPyVMTTpefuPQhcWeZxGUD9breiykVqNPSx7XXbMzMgepw8NK92RBs2EjxtLCJPZhPqbujnh",
  "key41": "3CGLUsvrogtrMcXRuK5SSZieyEXHh89D9Gv9CXyPjpVtG7gH1KA5vvqL1FKSKU6oKst57nQGETMyFa5YoBx8P2gq",
  "key42": "5RKffEc2o5AYMoPWqDGE1UnMrL4WFXR93CtFwUEEsJzR7bNmbuTK7JCNqzLVG8ebJ4JUK17ZsNSaWwXcLs9zS62u",
  "key43": "3gxsCy9rYr9g9fwJNcAqCADdzbdjtH5C7kLrThSKAXnKNtTVMqu89mFZvQDq4JoTFnvEgvjwnCzE1t9fdBUqhZMs",
  "key44": "QGt5j8mUdQH3UxESG4Jqn5AnWTqmrbUVNwEBg4hcuE1YNN41EVJhKyzJVqH9zxbACqFPc5rJMbg85P5f9KEff1D"
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

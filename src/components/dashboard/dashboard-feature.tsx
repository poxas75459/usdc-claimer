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
    "43aJAShUuobBxgCH8BmJQ2uTLfVA2in7YNGNeiNUhYVSSYU4QNC8ejHddW4cQPRpeVKSwXBE1NvduLFiqWxRxAkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jfdGNcRL8SBiw72it7wHmwiYsc3oak1o66M2Ng3wcxUuUGUSRcJkCLty6dgaVDobYfoQw6oRxBtQZaX5tMAv62",
  "key1": "3dJK9MBtPjHyJhTuygGrPx93ub4EtivSZpZiQaeEvkwYA8C61cPjDyUyT331BvRDQPuDkBxiAnJDjWbv65mWUJRW",
  "key2": "262yymCiwWjtHu9vvm2V9CMPN8PRvoq34D5gEfazmLfr3xVv2u9PU1pq6hn3usdS74QUg28RBDdjUi5CS7ZUK2mE",
  "key3": "5ibz7GrUopsWsT3TuG5V1BosBzvSP2qge3GBFKmmroz2iyk6EFh2e4Zuqmr4PvCAVw6Tku5krc8xXuaP2PG9z4Ug",
  "key4": "5uuYUbxdRVJQutcUmEjDzspR6TnxxY6dstNdxrhY4xc8Jge2PeFvFpsTVkmc1CVSgkC1KFKzcj2msgaMrduP7upE",
  "key5": "3E77Sf2PqTttNXXcnwc1Q7Hyj7JCUxaSZobs84Fsq4BXbbB3KDUTGgtfDnxgymGrJ6XQRofnfqVmKg5gXwciV3Uz",
  "key6": "6765z2TQqzNEpWayZXJB5YmLzkE1DDjpUnfB2Ls6zADQn7a2E8z4ZbaDPLwCPzZ4EjmNjZmERfGRWpd7P6vxpXRo",
  "key7": "61S4cM9DMwRkDzrP8fMQzHvAYozMLM9Hw8e6J1Cpw8XypzcvXvkh9TnyfpQziK8BX91uJw2umQZMfs33BfN7gEjw",
  "key8": "rwQTUN741gKcMz5ZFMpJJ634AUWXyN7habLtn2V8c9QSBxsUAgTtVo3XE9bPMWv8B5pSu2qiYbgJMD8wFBhfHWD",
  "key9": "4qapuUcDVWmCSP8pJD2cwnbcSVJG3r9G7GqHesq9RmMD8awfwPJmB9QNvuFj18jELVuewrFcrFM9gyGeetyWBA4C",
  "key10": "4u7qYuDhkKZLoRLwvsTppEHpvt5KjfxpJBPmAfMnqbgbqm8DPwJZQr8mAisEzEVKTudM53668wqVPaELbYsWthT8",
  "key11": "379tW7YyNN1G3tAxEzrgPEQBL7dxF8Lkwkgj1oRdnxbDbgnd1QqZ1QkBLUkhk1rWiMXdqpeNQFJH5MUgyyx58cLB",
  "key12": "46zVKKtVrQmCSuPYzyQy4eZcjcEmfpBDRvUVRVy92jJSz88QhMrXY7FKPhkHQnKunfs4pWtJgtYoo9UHZRhQMkGb",
  "key13": "YdArCDeCscRQf8EvdEA5qidVu2oqvSuKnarXcQQJQuBju7FGxAwaP9hjC7L9hM3k7uhuRCgSxcfGe622NfczHC6",
  "key14": "49zLub2J2Dh2Hr74SsTFymNbJuriH5Nz8927zaRHSd24aBSTzHM5oBoEACEVYQb6QVNPxHFSZXkt1nhMtxpSt2uc",
  "key15": "HVSWpdFQhL1MhwcAcMAgtXZauLzUoxCbWCCS7KDzGzLqE1nShv7Djm9tBDjFoDj77Ar4NSUTjSCUDqD2W6rhn7Y",
  "key16": "4Z9mWUkqinsRuDYyrs2SxK3oXidMJQHKKHRUguTH9jSsa7zQGGG2bh2UQ7CKWfQwG39cApaYTbHFTkgpfiwWEhg5",
  "key17": "517u66GkRiAJs9mXgpXtzqJYM5mCemPLpS6bLH18fxwC2NNDC1nShipPH2THoEmnRxDpbqzHaUgD3adq2KJKhiEz",
  "key18": "4gia36RmdSANmV1d8KtWYW13X2YeM5Lu5RePGT7eT5kt2Hsn1DAd8XgAknRst7Knrdrs4RaqzTqRo7xKQLm84tEr",
  "key19": "5AGDKgWbouhZhmy5cvrDnBE4jaw9JZhj5mh4Uog9RxBq3VHLukvo2cNwAXVzXZybVbDqGLMH3bwYG2P4TSkmQTK6",
  "key20": "4Viz2M6qWsw7brrAcPutn5weLda9gcrUZX8M4mXCik41Gb26g5iBZY6Eq8NTg9WZCRnwyKJ9GrnKzwaRMjuLZ3xB",
  "key21": "5ezRCHRxe2SYHKWchh49fHe9Rh9qe9aCR9eLq3caNev2hQhBMm17hVE98XHMur9XYMi8Q52Wo2Jzrr4mWPdiRmop",
  "key22": "rAQ25Mpa5y9ir5aBjyKj1CuHs3DwQtWkhTamyGTQQf3731AFqpUe22wNMWHyvSS34dGTJLZEmB18rHLJoz4pyvB",
  "key23": "46dBh1KjBmuEt4yYdq3dD4trw526xbhqnbL5qGhYgfGy8kKy1Ekb7ht5sjVjMcDqjdqtEXxDWgRpjr4UYgL8YqZm",
  "key24": "78th4UrMZkRh5vfaE6RBEzZjsdadpr8wxaFCFsTzu44jsuuQ67HG6EA6S9iLcw5x8HBQFv5wPTZz4npDuBEbAd6",
  "key25": "5yrWYNvF4VMBuTqdj9Uid7EHh7V5Vvq7NGYKPTKVxu1sG6mJwANg4hADTQFWintnrXMfY3BrXcL1kzC53m1hkiNn",
  "key26": "5DVnJKgjYYnFXyA1YjnRwtxw75jAA38rmr2DLchpeJMPkdZG7oqX33aRtC4FTb1BLNyR11zqGqUaoFA3CQ4bTuio",
  "key27": "5yWHDBQQKTA4MKhwAJeSK6GPxMjqwPxaEqibjagTyLSUNuinYY8o4ddVn2VYgLjTBuLnUhmAjRcN1Ax825o4txDP",
  "key28": "DuesybqzM1XUMDjBgLo6QesZs1KXe21eJpVSHhMTNe1iNfGvWqsjqJGjKdRVmE7foj48fGfqWKpqJZvjHSDyjp9",
  "key29": "49qBTAiHe63YybdiV566YKNGcJCKnuHSbaCsCKsAKCuKqwdAPm4sdQYLq7EafYcbuHdiYXNqfP9WA2cQD53JskH8",
  "key30": "5QHufbZ9eqviD8Lx2G6uyNLryJuuXCsurkrV8zMTR8yJjypU8LhuZqybrPQWUYgJeCEVR5HSpsXDfGusL8seXCDL",
  "key31": "5f31KnmFwqZjWz3mRgiF5mNBA6zKgP1yLvDBhvG9ta22brWBjp7Yd1vfDQCfcSbEKFP34X2DYYLtwN9srrF1cz8r",
  "key32": "5FLRtYDMJb8MC4JEz9CL1hEDEuahMJAdjVJbDE3RBSXtfy6YiM3t7XbxGSWgPVBLXGTBvz558ZZye2Zk9gFiEZyL",
  "key33": "4bDo3APaJEgDkkPDVQ99UNWeoVoAR3d2HUihZzrsvSsZxzREavJj4sKKbQeyATMY25DwVptTjQrf5WUWHpYezdAU",
  "key34": "5YJXz7eUmWpvkLpCEnFZgSYBWcScSu6DXVzEn9SgQ4hV2jfAYd32ZZBhPSDZF8x4o4cWWAGqEmoZtCzRMWVoyH3P",
  "key35": "4dZdxKn7RjTBYxMqqSm25sG5o9JM3NrSNAv5zV3kuDfBUJoDeHLxDhdLyA3BM1qPFWR8Pa9aNLTziammcPEU28Bj",
  "key36": "3Mcf11hJuq2dVMzVJHfH2DdMoY2CLizvWnRRmcS1BMUuZtjwymc6M99HrZCoVrDX4DP7supbzXDow6nbQFPhu45n",
  "key37": "2vdXP86xHs5MVbH7ynDqZQvZUcLfRYGdqBsP89NY7Cvz6SDHCZ4tk9GYL8dExJsb5AggfDN43eGzVN9fErgwL7PR",
  "key38": "3Vu4whzR2b28zCC7iPqt2HdTYB6nNULy915zXgkG9YzxWu6RDETwurprPxN7nBcnGdvjttxgEKR2B8pz3QHhz8S2",
  "key39": "iu1n6XHL7icJNeSxW88CT5kYz3aCxjo2eiXaEwR7pbAhUeLJ9SM123JhSzni2Sub315XKZCKL1ARBjQv8gayfQx",
  "key40": "3gkmQrWsCeE9NrgXNduBMMUrLqCBAqQXuP2o6MntoiwQv9pdmYLouhTS6NFbLzWjHM8gukTV8kHDyJZU1sA8KHzF",
  "key41": "4aMbGPTBDGH46yPb4shEHLtQD95E151182J5y5mV6ox79PhAuAfavCAHeWxG2jWNQpcZfhcNdM5aF7jFjQLsmS5N",
  "key42": "52DvXYc6NJEFM3egshtkQAW1Uxqt5vtV9s1y6kffTvD1pCMmWmFhP1GiZrWatXNLLbX8DZEZJu2ytxDVHysNsFg",
  "key43": "4KyXCFJFsh4JTbHLeUSmZaU1ofB1hgLa5Ro2jLEeKsSBc6T9X4eiLgxnoqMSaEvXbuCxJR5aMUyg9aKSriJWidJw",
  "key44": "2wMPnRmtcAwEwsaeAjS3p2TY5gXjEgE5SSgW5u47PJF4xDVVDBsZuYw4z7ha9tdQSUVYq6R3btJ5YK4PH3FjxAbF",
  "key45": "5qpJ3NkgZZ8DMVrv6iwMNJbgNohVNvmuRyR9PuRNHehbZwikiQpcqzF2P5oNvaGeGyBnHP4ejiCbm2ZtfJK3MF6b",
  "key46": "5t2hQ8yFNYe5y9RCir3dhLjbbDA7t2GGr6t5Z7kHQPvxgN8e6N3AKu6HKidJDzeYt4TNJqWt3zcByxFWurEiq7U6",
  "key47": "3nWG2L38JPAnYrUV24S3xfwvbArbWPfpsiZN1JPXSwHd7Q4YBnin1ZCENURmdwTQRGCweQCYaN84Fjt62zW9p5pg",
  "key48": "5HSxunRtSbt5HkyXmHWkJ899CnhX2JzzhvSVxoQ68KhH4Yu18mqjBjATK7zYKAJ7s1WtCFb39FWSGNTg7ASTnTTZ",
  "key49": "5DvQXqCsRJtvvAqqVs7PWUHMgae2LLiVGkNndHV23xZYWaw27XxmYwu6zEwBJDyK89NGgi2T5hVvXkNja6RHBqzw"
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

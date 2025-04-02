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
    "fFD89WtcDCgBDs5xThThR1PaEPZ414ZoDbKKeqyS36dkn1RhrqhaDbTDohZaoAj26cueBxbDiRWPRUiyXfyeKBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G9j7ihgLWryhYAPVqRwpcrhnrX7abqXjg56RH76KXL7L96J23iLeRsWar8zY8srwLSjgMzECRLHcwbSDDAZFJEi",
  "key1": "9Mo8VYN7ab6kQkSdb6UTkNk9dDodELW1Vzuhmj4rPTf6a8ByQVwDVYuSRpWAADgfUFTPFR54GgU5uW2p2YKCS4C",
  "key2": "PNDxy6ugNCFR1SFoPo7SjSYC4Pw941fAfZiYVeV12zhrBe5CbnAnpn6RPsQTDuoWLgqGh7isqvm6ayKYRZg9KLA",
  "key3": "3sKpMuxGyGetKkEuV8yx81rZEwxczuY2UdXdiPK5mj1gKTLqPAK4Js812uAfyAnBfanZTLPiZ9hkjP783wooK4do",
  "key4": "5Bd1XSukgTEF4isWYxsT6r6qKPMRwGXoa1aTDZDiLsahnbNpWy1e7iS45khYYrAUqnTMCPT1pwtrKcvBjTsAPLxg",
  "key5": "3WfsNWM5yfHGBVdauNQVdNFrphZJxcYmWxF41TwSdnUP4R8ijMCAYhVWXAcSqnzCNZnpvo5BnUJRgpuXxJF8q26z",
  "key6": "2UA7BrcDkLtJDFaALKHoDvk4kJm235QzRjqyZs3z6ujWoqtNjBkXcbeJko3yRYF7E3gd3DYysmbHUEjP3WDUQNp8",
  "key7": "2TpSCxQTPxt774tBaEqyMaSNci4H3Gf7zzC447cSgJ3E9RdNsnBWuzfEb4bUdUH8iKfaMAQfT4wuX2AqsQxZyxui",
  "key8": "4y51jqkrwJbv9y2hwKGrawaRhWTj6txsQBGBdrJkFcxddkM1dwV5mvBNgYWHwFMNW5Y8TzimRcQb6LyW8dn5NGJC",
  "key9": "39aq773WorDHxP8QUxG5cTkLE21hChBUBd8qLoW551es7dnJFugjY78UBV55bhkgEFKFvGRoerDeWW5BskPwmxhS",
  "key10": "3NsDJMtDZZLi8xT5RFoyRdV4VmgZeZwa1ggVGYtq9P6TPa8H4CfEmNKaY51LypkuG3KRYV7kGeXSeiDPwLwNXCN7",
  "key11": "46nN5ffVsKAhDkM1q7aMPuk2M36n5DczpXKyjhFjjkyErcQpE4QGNKY94NxgHWpJV2vuqgHeHcGWA4F6q6ZVUfvT",
  "key12": "8rRkPH4m31aDfhw4fmtu9TCi7YWNj5nJKc9qQEubK1Ljzz2xeHK4hACpXNhFJDYx6ViCuQ27XPf5QJeMhjeDCSk",
  "key13": "5BuFTYUPPhh1gajVBmCeFfeP9uwmkyTi3hUCZDnvGnC1iHVtQg5CKC6adHJ6yt12DDLqveSZkJdFP6SqRWpn9KH4",
  "key14": "4ajUGbfW985fcr5597XMe5qYZF9Vk7GJP9Pcqk86QN2wp6umP6JrQYgDE6mLpaJkWKi2w3ZW6oiZXUVaoN89MEFQ",
  "key15": "4As2hWZn31WJ2vv9WSSf83w1FbdPM7wr8bTmzpLsYNLWugtnQByunJvkuGqaRPYnQCUxbPiik6At6oqPtVgLRTBX",
  "key16": "5JDcngnEebjm4QLzUsmMFHgMwg7GVrVt9FE836eZ2EdzFdEz7PHfPxdFpEQQVzAevzycxa37jLP2LkewbLfwQyt5",
  "key17": "uBTYzrcHThRAFxZy4jtbgkwajQdQqKFXSgRcoK4sxwSs2vr7vrz64ZjGFWmTwxXoXhDzj1EM91eqt5vfzp1F7zg",
  "key18": "xsekTa9Xyu3iNpzBJN12sgRM6e4AomCCKXJQUAcEBYRrtBvUoCdBDxRSr2jp8LiVhkmiWqYGrHBoEuUwWsHLjY8",
  "key19": "2AWAqxsosmGhTrzhwXvLspcbhoinkqoyfiiNCVm1R4r3UCpttVbEfmVkAezu24Vp7UJLnA9eXxXqm3zP3QYfji2e",
  "key20": "hUdaFhzsoukGfoJE9iSa6ph1wzHMjJ8VTWfdy37Aesm3mW4cmDtUEhw1cKkRJqfpZ1mMy3o7Twd7Z69pio6qFq9",
  "key21": "2kmK5PuXyHsaZr8omeeB1achxeL4TZMpPoWNqLbjt37NiJSGJ9LaQKUEbEEwTv3KyiCVTWhGw47xAzNNGdCuTWPd",
  "key22": "zFnw5k3SUw6isrh9W1r5qfaGAZFCvYe6KKbeA8BTx8DfDmuKpjwgigfPQRFKywjwnJw3LHJPj6GNLSCuFPP4Hvh",
  "key23": "644ZpcCP39yBKMHTESNsicFgQs2igQwK8FXTfiJTXrVCmBTNPW11eEdtzPaXvgYFHkfbe3pivbVYEtsae82tzQHn",
  "key24": "2YK87LLFNsvETjBGoS9JQkDMKUFPXr1X6AXhgcnwdohrDWj4ekvPWLLrnzDuz16snBGJoKD2rnveJYhbaB4E3BPy",
  "key25": "EkNgAd4M69CUF9FHBUV67Y4izbGHLsrqhR2tXAKmzbgNKt5acxAXnfoqkpE9HKuiwvuPpNfXHWK3d9MRmN5GmYS",
  "key26": "4fL2faquMgj59QXXExXfkpKWMEzCckzeP45i1vJtxsCpSNrapu86SWP157MsoJseFgmMsAdKLS9cZe161kTzMc5D",
  "key27": "5cr5SyMopHeDXoSD3mCH1GJ2uTjoc2Z3e2sHpGJgCuSVBqQ3tp6QUmknTc4V8y9FnzTtJhH67cTMjFYU8KSjUPkU",
  "key28": "X5JEPtHNfFsxPi2xtiqpMiGfLhoHmRn8E6rL7XXLMpEJ2NHjcTTnKQbiQ4PjyhSnLYJ2NuF6sS7K34x26P841np",
  "key29": "467nC4PzCthPnZN1ujWG1sWvNUpCWiqYnkbuVCS241DVP22CTBj5sT9krrNFzofbadcrTMPBrfzfRJosSbmMd4Wa",
  "key30": "2WQjEyUdrFYXYTtFRbb4pyMidXfFS3gunqD2esEjcgKZHeGQfpFsHizET9j3qkUSMdJcqXTSNrk5FmQW3e5GwbUb",
  "key31": "qoKkUNCcboaK78xyPt99x6zX98zq1WwBtZWhyGzD3mbgFx8hEEdTW64PwTmVubp5vHLmRVRiaeLnJ81W2DwsCon",
  "key32": "5YCNWWHbw2brGyZYbkNFKXbXXDvxXoSNzNHjqfmor69RkXvybR9gddBHtgYtA8x5SvSc4HZg5YkQtYhqu5FVCnni",
  "key33": "45gZwrRs2Dy5bEwX5pM7pcVShSAijWCDtXGGUg5iKncSyWPM61LSHYkJ1pefewLqSs7ro34ohVVJwVTHCGjybk7F",
  "key34": "5DoKqbWsZtuwM45AdBfdiW7tXZudLUdpS4ybHMu9DP8AnrrSSKbgAR5yrediFBHDjfTzPrNwrQBKg1VZyk8PFUCo",
  "key35": "MisdXStGRjdaH6WT3hfmnbvi2kZpX6CLVTUZyxWXmVw41691zRtXX2UJbDGzgVonZVm4TZK5qDkbffA7XdTUTJa",
  "key36": "4uGhb2gg8T6gdfP8nGqgoSpePAKRG3Y8UVdEhem35BjBQWjSaqUeHjrGsCFDTi6Qz74sMgpiDoXHQ76CXSFJvERS",
  "key37": "57ypc28rviyHfwix5Xaqjb5iRn27MwrtqATKxNsRQgsjRkFq7CriL6mjtBSPFbeCT1biSRbwhvMhKw1EfL8chyo2",
  "key38": "4qDNFiAftiJMR8kHF2MuzSQaYSdaqKbfsaA3DMmUWtry1q9ZxvFVanSrVdbq1tjvor4XP4TRnPPPFesVgHWJng9V",
  "key39": "5pPbtPWnCGi5UDcjjcjAYB3sETj5wFktyF1ZMkZWF31qUyPUWgeLi4rgAG8JsbqPGPbgvsnWsCWPy2y7FFf9A5q7",
  "key40": "41gtZDGVACQnAtXexmXKy7MjN2rjFn3jXFCHfAekehmao7C6yDkjQ6PrL361c8RZRMvBaUFrqJUqtdVHKp3zgzyB"
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

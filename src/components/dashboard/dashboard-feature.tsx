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
    "QvvgpNQCCHeDRYQex2R5HK6ipo7pdvWiwAefrRg1nQaCxB6hziB1DAnLPBF6DWxm4xFNX4acGmJSPRRhsmAUdwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v6GL48bHHLZCbdYDV4Mu5sj5c4Ppc5x8whvWcATbPv76bDvJ4nxZ9GD7N3NdAeqTt8xGhNAuhxC5Le1kJzBJzb7",
  "key1": "2J2d4VMcnZwT9Nu8GDDcxG57Es9aoPPwwf3tM8q4YFs17mTBuUijJihvCcpfPtJBTqHTbMrvLdHRGbrP3d8PebfZ",
  "key2": "8745ZSpYY3oCwHyf4pKuTUyAsfcASSmPHAhAReen2tyhUWhYUbt7T23BkrLYYv3NTZMmumnYZD3WHpYH3MXbpPN",
  "key3": "5aSLkJBEHa2fpTEiR9uH6kPg5P2yGora8BANDMYwq4hU2xjAxoLTY6bjUVaZv1DKBA977ZuVF3qCGkFxrbxLBKPP",
  "key4": "5PU7TCU3MgVhMq67uVwJarUc7qoaEY4b81i5MGKMMVw2gijiFLV4Fe1ST15ngVsf8UGxc3hzy2WwrHYTeCyCNrym",
  "key5": "98YbvzCJ5MAtWgts3JD1iDxo6eFE4PHrbMqwW5CqWRomjTgAa5o1c6sMUZgH5f19pgSoTs3kiKTiNmjU13TwXxk",
  "key6": "5Gx6oEkS81gTZ7HENDynbsCG2TLKdj8djzs8Lh85Hm8w6tbYgmpAd7UpGTF8nZYZh4shtNwPP33rKiNre1BCMNpq",
  "key7": "5kBP7yqWFdGAEYwL7wjy45asaxudB6A4KHQX6i3ECBVNoeNyuRZkjcETqt2VmrZVCrotfkM3uV3XSWTf3RRfjZ9U",
  "key8": "4W9QjwZRFvEpohVbSNWnCQZJgNee7Rn8KeWwXP9asRs5Lue95knuVWfcnC2QsF321sRqc4KiBK9rVAcKyxQ1JGx8",
  "key9": "5YU6r6mgC8BcpW2qKRnD2b7HBMRjNzh9ShkZDjBPec3vWgpJNFK5HGvH3bBXD9cdfzqwfztkQ4GCc4VZTZ66xnnC",
  "key10": "4PavzcWbYi2qQnogGCzzW5R6wTbK4KXLdri18a1agUZLZPbrBq6qKvu4akFEQriiSe6f5fVpirPdreYGP9sDZ9yY",
  "key11": "Tt2uiG7sZ4TaUVGMD9j3HtcV9fqA3QzH2UomotodoX1LuBTGqWQvkSNdtdh3exQWCxj7YgbrtqP4qmwFCZNk5Hp",
  "key12": "3BocvKzh4JT4boUhGWYWepDAAPJ1M2BTnSh72NECDb1u1GsEB4YNF77eq9cgMNgZTi9cQE4Pz9hufxhH4qs5WRoq",
  "key13": "4PNgMwVUdnPNG1GsfGW6htEEFMbmUNt7WxiirxM3zPYyYY2N9Ddtd4MgqvtzU8houi9TSzn38WzLcRkYUNyZ6SZy",
  "key14": "4AoabgEdJcn5Nq7LhuhFfyUSdbBHa6UsULzzxEpZeHkaAdDJ3tkFpH8aNfMyDMHuRtgm29ewHSNuJSGFov1rAmnq",
  "key15": "5mdavauJAFpbZGXcZH1MozjWGXwL9VSgJvp8bzqTFYRgVPdpEWrqEEJZgaoMjE8pwnAC63jgWVsukHpWaiCT9S63",
  "key16": "55VPtU8Gn5T9Bfc1QhNn53sior2m2vwCXmioEmQSS2XXSQJ6S19UUUGGBF5u5DTVg5K2TAbvZPuSeiyzWERcQ8z6",
  "key17": "67hwK46KKMpAz7CXEjBvV7E2Cp3xnYEHp2J3A13w3N1zbjBemF97Vd8bMTC31qsVynpJNPFybmxUycctuhAri28R",
  "key18": "58jWeDoRckznUGQphM2qTh7s5JBdfDTK37MU2K3Z4BmNazgkA4afbrtkW8MwnVaH1EWU6Ltdn9CfKgwAeLbHCDWF",
  "key19": "5ZqL4Sxr6SWQA6CFp4moh6qqBRPs1ccRe3dTS2jk5FcVhNYZb66VVdrzUxsKFoZUsZMG8xM5Vzw9c8A8S7kgpvkT",
  "key20": "2E4jtNa3DVBz6UCcNMBuUy2f2Jf89651NfxEfcojcJ8w5sJ7obYKS1VHzgpwxsKz86CrhZRyKnqrANRrKgqLtD7e",
  "key21": "2LE4rHTDmxo9i6UV1Tx8UGs41fDzUewbx7VLUetQY4emJrUkWnLGRTHZBk8Y9LHmPpQMASvXJYJgmENFyHdNjjzd",
  "key22": "3EQCKAqqET6uMmNDcNQjVJ96m7rRLDnW4jXQbcSCDzMAcdDPux3Ea6CUGSsnZtcqdnLK7Txxn1SQr6RfvZFx6ewv",
  "key23": "3g4GmDoFSjZisTVau6ZDRSgc8sLqk8RTst6n2X9PcDVCDrTRjKetUAwaDPE1qYNi3xhxjWqDRE5gj6sd4nUUw7fL",
  "key24": "57cPwBMa6BxjZtpxo8cuS8FELHAjNFo6GfKHzdaBFx5uWkNRZ3YJMk2FRYM6RM4Fps9zJR68xpeqxHtDQCVFZxZa",
  "key25": "5CuaAB8GSt4a21wEtK85hRUxzymKpVRKqrs1nqTXm7aiM6rmr5BKVgpmC8W4Fy2WrmEbtCpcT1wic5qAEcQMwKSg",
  "key26": "2GxdKhTEEEg5dLQfLYbtHWTMnhgfr1tc9ywFALPUXKiffXiZoshFdVxiqpxjmxcacy1F6oXxnsGRxJEUfetUE7ZW",
  "key27": "5VV2935JzkX4tmZ1ZzYqVZCd7ULtVdmKFMKh2VCgXFbUpzQi4RFSGAt88pciDQUS8K3v4KAhSqjb1vBdRiYKqsb1",
  "key28": "5LoevaqXmgo9HEPbfcCKNRFgaoN5nBoznyDxEPSZHimNtonFVBFaYPuASjZnBr5W9Q4K7wZVRu5UUonK4YUnDq1j",
  "key29": "CVfcykzzWmgMNj4fSwaGBQww28vajQKpiEmawhh6AQgejkDGGwGhViKvkzngu8QXj2F5ojnxiHrGYWfQAiZK6iq",
  "key30": "5qmb41AgwE3VspQoRAkdKArgeGbAfhbLrECdb3eTidqhhXK8YNGQt52BGFzhfqMtoit41DLkhcrQSPxf9fPNp7pP",
  "key31": "37RxUYSvLX3jD9BxVqs5EcwRCJrsi76YxXNB8ScZW6Di7FWceR4ryjU6TQNz5pbNfz4K765sv1tU5GQzw15tT4wa",
  "key32": "NJzKoxweq2YcmA3S54FjNidBiMojXxNaWimA9javw5BWx6Z1adCouevZQ6AWVzy6ds3cgwGuzjxNRVWAJ1cED7M",
  "key33": "3trmzzZWpbbms4omVfwjomcNxT9gzjTCfQoX92jirnyeq3qTyVcKD2CtVfyF8J8d6iEcoeVuPsnqkxHpik2LwvLY",
  "key34": "48Gc8RqcU1ww27AnwQPA9L97qiV8kvQdXCvhvZGhWmebg4V9oKBJhcdYYWjm4hqgwMdoDMD2YGLDinA9kGR2XKpS",
  "key35": "3ghA5w2GLKHymCkpqVf2CKrpfeqRk3pFLTCDpaRuatrZjHpnp15aW2QbbzyTcx4JLVeMNR3r9sMU1QAyar5rr2yn",
  "key36": "1gtyoCrMWCLATCyShHtJY4dRNfG5cPabRNtVUF7XnqHKzX3ca7r1jKzsRTvkBXtcfToDzV8J4vJgaaVD6jpxj81",
  "key37": "5PGDABUFLsEwNzH6Yh5zwnFyqKdcVmmjsaqQnGpnc8fYYYQcvgvtNAw6176rVaiaXj2duB5q3GXaAr3hqBp7G4xw",
  "key38": "5Yk8LiG9TdyrUhdMV9kbwV3ASK995UnWGqcjPZTyKKn6shTxkqNeN576iLF3oJcDX6qtnaxF1KJMHmd3vdcy1kGD",
  "key39": "29vcXW7Mh5hTcdLYg4FtewRgM64f8rjshWNcMBoxnotu9h7J4uuCJCtKXPgnjiL73bj8GnpYVfJFZewZgDoVCQCr",
  "key40": "3uPTKp6taJXvfEEnXBJU8MjVhTZ3xLqFc39gkV8kDYDkYvey2b4kcNAyV277DLp5NWVeLNrguWAvT4Xcqj5qizrK",
  "key41": "2g7XTw6h9Kg1M3XpFX6qsotV9ctxNqX7GztWqXJu7hNthKieXvFitjQ7ThACwQ1oNWmpkfgw27dzeC5s7MJv5Tnv",
  "key42": "afHy2MY7tJXGBRsyBy7GP3Yv9Mo33F7JYXCTpZXpLU4SWs4uTLMXoyNu9S6Ddg7vw2xm3yJX4Cw1rw7Md6Q1vJK",
  "key43": "4DUGQLyhbi4c3n77LkztiHS1M2wHSs8eQC2YCtpHnjdEwqzcMVSikNWndh9ESs7SPN1EV7v99MewCSV9rLBx8zz",
  "key44": "YuTwxpy8WEYxtVWXT2DYLfAQdyiEWpWce8aCNmvm99fKGC4u6sdaP3peUmJtF8ixcWYycdrBVp1TcxtGamLzHJa",
  "key45": "2bnLYXUYC9kCMWQZSAxPeacKtiQw3GR5YtdrPgPG4KyedYMaa2WBdYssW5uLmro2pS3cSWmq96TWmVcwCKTYFqEb"
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

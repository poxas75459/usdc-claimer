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
    "2mCwdUzuEXwnh5bnBXLVfCnjhKLeiAncp3WW2x5fysoQJHZWkawm9NjsysCk5M6DGbPS3P9t5o6jwZDM4DtWgpoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXbhTgcjDdFy7n2AwhyubpNgViaEtk2kRQJF5sbdnSBTMd5AZEXDy8aU2rPLXpQN6t8xqCSHPLJ71o5czx7zhN3",
  "key1": "vj4ij7qaJywRXXK12j9AhrxYUEnatfgT6Um2JGd1zQG4n6KNbKMFrVUjiWXWFu2KCZ4XKh5ZMY4TXfehBpbs5jK",
  "key2": "673TfUG4JoxKKP5NseLHgawWtRxN6SoaCSJWLNY8FHHmPuVwdyuxDU6xQ4iNfPFg5vbZfzcyzqKYA7kSZ7FBSS2r",
  "key3": "qf6akajExAB3jB1CnuwXskQPGqwDUpfmGjwYRKMtEyG6sTEAB1YpiWPRMnSa5g6Txun4B2FSEtDWcR7yowUWphQ",
  "key4": "1Zanhup41hyG9vyfLho9HEGXKpkWiw1BNy3unHi4JEcBr2iLcctZXC57uQjdzwiojbrymjt8E6R252o2m3xxBne",
  "key5": "58nCBRnb6f5NeTWJBXVpxwb8ZG6qjT9iwTbD5warXY5c9YAmBqLxy5Cexn3yXVfLwnxqqDAcvFKoeeoMj6opZjWJ",
  "key6": "5AZuiTuYmUPeHhu87S9JHbVazwwuBJ8S6QP2NxDg6tEakWt7YxUxnMg1YbLX3vBnUCSArLfSwcD4KPXo4DHW1BJW",
  "key7": "3YikcZkUtC9mq7VdFRB4KkRUZPCw1pGjXKBNhmJ8wuDCEuf4JQKiodpqYzkQD4KeLqqDGN4DAYJQWjDAqeLBej7z",
  "key8": "NtADJJP3Tg9aDNxfZ3JJ1L15xYykW8cPPTHezp5PA9oCm5oVtEgt9GFAHMDb9orLNpYc6vo4LM3rZZzu5Bp8JEK",
  "key9": "2yVbhdkKqMAWgqzsemajDyKMiT4PfwrWkHDi9jLhUSRCt2KZM2NsPY9BLFDV7Jmtrx1fUnj7vpPJzEdXN2bFw79r",
  "key10": "5qd4KSn3T4EDkdWnu58wQ4cKqvex1dzQNtBPekh93kWxJEveas3dohey1DUtkgRNVLHEZ9HsRDToknpL9qwYPQSC",
  "key11": "5Wk9ev1dQySv9y2aFpsrT3mzKVn28xmcvvJvYRKmM1KuXjvvL2NnFmwZMS1ZZL8zTTvM3fhh6SUeA1V2daPnwcMX",
  "key12": "2hCqyDhzFJHtFXjFaBcbkT8iXeGzAsacoQug6vE466PuBTV85bAsCwJRM4kUXMwnBKUHbdLjJFRucyQH92FSj4Z6",
  "key13": "5anChj9N7p5ZUkJALHW7qKeU6izAHfpoPNxy3i19JVU6K2h3XRb8kvZc7yWNvs4Ay969s4K6na5EpfGSrrwzChSW",
  "key14": "38yh2RcG7us49fFQpr5XHhETpHnqgudA4miTfCSZRGiBphyTLsBZnzhgQkJ86Pk25d6PQd1ovm9vPqFY31hjzTLG",
  "key15": "3fNQjfESioVgt4u5Df79NFazC6RKNptAzHhysTyPx7UgqEp8WS3XumJRWM7SkkZHNZdbzUGjPmLs2Rs4XtxXriF6",
  "key16": "4yMwVYaCM6g8KsWVs9eRNRjEHUMsWvw36jy3Mj3nnv2Ae5gEt63PWCuHVNVwHu71NjVx1NcE7vG9UDzCp8WgqaZu",
  "key17": "3nZ6TGv9voEGoYnxUmhpGptLT4MMsppMnKdQXrm7RgTMetKZQdUiJbJAsKKotsVDjN9L5M4xqL9M6wCw5V3SysEe",
  "key18": "2AWzj66ueUjzotPTYu6NdYiDESkT4AgvHBUUVAwyEUK2F1EtQLTJH48FJXTVpiqgy3uqWpLm7Gaj6S82Q4fdirBt",
  "key19": "4JWnjMMFUCeAVe5MFWRAMEbLPDQ1BFA774iZZ6Wxr7yipfBafwXGbuYAC7HLUbtBxZwc7fYs7LCALUFKAzfFVHgm",
  "key20": "5uNt4JuwYVBT4jSUtRkH4B9gyiGK5B93tCAvYWYi71UtFphDua6ytRDi4xzMSyJsMZDdGBjsWfKavxA8g43ByPnX",
  "key21": "66W5brJ9M4cLSfGopymEmHYqxSz8Q9WqudFDyCnUNdtgr1PUkWiPmK9oXfPupdqvvqJeeFu776C9YNdvZWkZaHVc",
  "key22": "3sh5hssdmbXNf2TquGpfjCXxraVqKNgEKzX9LMpEkGhtTFDWa7Uqq3ZXWDDkS8VZ3vp5DCqQZt2xwKVzP5sCYHKg",
  "key23": "UCFpddhovepYLPT3VfFKTWaw294obJ69qqh3h72jZFGPdDSZSGaBFVKbaRrgThVCZhTBGbBpsKbwHWA1gmHrKVU",
  "key24": "2fVJWoYCfodhxgW3Lfp5tfsh6vD4bqFjT19mTYnBYSthSNvHk7CZPePovZXwuGBFvYSA4cC66rkRKHs9KQPxL3Cj",
  "key25": "2LvrpsAVBxwZiqUbHboCWoEzHsPxtoPm2SNqKFQ5uTH9VokV9eDNiZos1xqFZEm49Y8CWzaEX8VErDxrQxud6X9Z",
  "key26": "FMCvHG1R8QZ8LjxMbgCRt1hDcRnuFPhyDr33rhNnE1svXy2mG4238qReoRC1hNunUWKbxaT6wz6ScCLXm4LNoaZ",
  "key27": "rMvQVmUHYZ97Jc4A6TUCQZGaEJ16NYsecLuFpAa2Uo5y2w89SjkUcGLFFCsMpnv9JK1GxNcdka8KKju8X8exSbQ",
  "key28": "43rHA8BxUg7oCKbe9bbMV7FyB5THnZ1TAPLyYLiJASH3MBxuzxyjR6BNN9nCyiVKs171dLuSoprMuDJcUdMMKh3B",
  "key29": "3eadmSpGebLMdZxRXE7ntmMJK24ajsxvs2BDhEpd4TTR5dgimjM8hANyKVNnb6AmAcs15oCvkd3EVy2iV9hmSYGq",
  "key30": "4zv7UXWJpje4yRYAmzynsK3SkudQ78Yq9SkFTwtCxtq3a5heLvftUezaVpyTX2VQhY2JJjKTDPWus26faSViYpAo",
  "key31": "2dDvh1BXJ8gqUtzCSVTPocTBztjKLa7pV4kRypsVKAzsX3yKFDVWqEz5Jv6AyBbxTge2trTXH9R1fVHXsJnTsiq5",
  "key32": "4zgnKwLsWpri6fx7XwwNwPcXBmzAjxppJ5tZA9MpZpwKg2aikwn4c69iKvLLvDkzQxwMZLXREr6MDdqDxH1nxtbu",
  "key33": "3dNqbv9RNFrVTsPVoPTYRgkqwWeM1kmCHsUoesPnvYhGaRb56XtKdHX51o3msCY9bhv7xW8aHvs4XoixoukU9zWC",
  "key34": "5MXyw7srSQnr1x9koeZtXHMHmRczm1dpaqMW257iHA3TYAeLJJavW9jgMGqzmQiKPHshxYg5Gs1t4m5CTcpscsg3",
  "key35": "22cagXBZy9wY5L9JUUMaZKc2DBai8AEy9RvFJg3hy1MKVNsn4WBEtcrmRk88hsVxk3nrAqnHaGxpgvBkMaKN6hdP",
  "key36": "nKWJyDimv39ARiEXdRkjjUT7oZERaqdhEcJzR7BVnvKDY8ECCAjBd844iJfKUf4kYHrkbJ1nfM6P9R2CnapXcSh",
  "key37": "Swhy5BkcVoRNuzLXMq1Sjjoyk5GM6VK22Fvfq3nDENBqVjBwvrJrFJtWGrreEwbb1bLNFiiEDQTYw4uEjF4DgJi",
  "key38": "4Yc5mPPGHcLXKWPRxTpDJBH2wNPd24GNidF2Lbrw5AAefWU22Gep5cjuxbH299E8pgbPJ9vQU5ZenN5TL1PKoyTn",
  "key39": "3QTKf1euDJSY1J2gahsJxMuJDyUdEF5P2MKU98bGnE5NscFc8vyuXchMDq7p3vLTMpiTthoYhne217dHMLiZAKZE",
  "key40": "5hWay99Qd3fRo8b8g9rYja9y6a2WCeiQztUvbuF1izAUNmCP2dVJ1WztXbKmc6hfW7wiYzfkar1tJwAPGpZJ4i2b",
  "key41": "4GGywaRKPVwm7fW74gt5JPSWD2zJnrjgA61rYDV5dLwVoRPNGEpUchTTCT3PMe2nHon66np8shgNLXNLRLgJARvV",
  "key42": "5iSbjSLzMCvieNXCV272HbAoZAHcsdFrmGBsgNiUXEqBUsaWMjTimwVWzacBraS6wkKM6nPDMZpbekHiYVqr9ELk",
  "key43": "4XfbiZJgrZNA7tEicrqrkWFNi4mKaEG7pK7qaNXW5Rmts2MEKNgsZiTUPXFPtS5c83VHbwfvnEJPwismrZP7KEab",
  "key44": "39taiB4GQBdZrhiNMiphvpe8DUcPMGdj6bHNzw75UEgfHREigHPpD3siX5pFpffxTKmJbKHYfeeE8c6btotwqr5x",
  "key45": "4uS9rBeGcYJzQ9uTYcw9sGUiLbYDhX3LGZJhHHRL5EnHWrfXWX7UxmatTzjaWVLYZcpVmpBU62TYz15RAJ3aHwJC",
  "key46": "4rxF7xf2RVCpaBE1UTPnkNhzfB7aiMNw29EHKzNtuZspAU2Hq8jQHp9bb3vqUsnGfE6poHtuuQdwCThYyiu98tiz",
  "key47": "4NAKAtorxzHzDEREo1AWt8V9HMubnDSZ3bCqbhTxmpeFvXhvnvu1QEcQERtNnaUBtLfUcyfAiX5gTuXpbYmr7QDS",
  "key48": "4sDFf1hjTgbViAycHksSiiyDoASMGngnxJD1gxEKdApJyjWuLSLWT8khB1jybXmeu31zdJHEGYjXX3zG94XcHUHF",
  "key49": "4DnvrcifWTF5nxp7ziDP7vkw17hf52jwDkMTfuqEp45T4vitf9q4Abfu89n2QUcNCQQKqHHfqFgGaupFA4EQVYuj"
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

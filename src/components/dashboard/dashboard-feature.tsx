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
    "54ydGtNAKorszfLKQgAYypipS2sisg35W6V7dbGDMDzSG8Jkg6nDtsTgTG8VpBDeQQ8Sov7HhYUUD4QfYHj8DzLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663JHXhNt2ZxAZbsKWKaRDtgWnzN4cwmHeD3ahJygvZhXCj1XdbkihdHyWMocT2Tewws7iF83SPm3YzFCuB2Ke5n",
  "key1": "27hh4FmKTKzgJFRA2upz1U5QLWjScyEeUAH9qELiQL5hEA9Ku2qmLk9scinZ1kLSwFtan1XBXNNFuedmUfSewbnx",
  "key2": "4uHjShnbHqT1qJRuzdoKcbFYoSEHw14JnH7AJWXV9zGqMPpU39DfDywJEg1Xmkaq4L8aP94Q2h6emNVEEGHJkyd3",
  "key3": "4pDusxVo9vgsF76Kfqz7SNwUq2HNeeqiJRyFuwaoXhJfYQuHQJCTr34tSQ2T8iQRcMK3aJYcqCjpGR5ZaGceg8nt",
  "key4": "3rPtfRntb5QfVKiNdSKYu2gK3uz1LNnGeUafVQJknBoEeMGcQLDFUgvegdBcPWdKicVWfkd3X3GoLKVJXuT5BxXN",
  "key5": "4AUfVK9gYKwrh6hWv638vTyAaDCyhw42H2DBAeLiK4yi9rzNkvjmv3TeepPdKcq8VZvi1p5Ye6tNHonxAZL36vNV",
  "key6": "2ygator6j9VE8CjADjtfHJoKE2XNPxi5Rnj7pJsj2hPuoJsdtb5NcTSmb738xeHPXK2vhtb5X8UEF8AEedKyR4jT",
  "key7": "3qWcSP2yqH6uBJPGzEwDTqc68DfwWyQP4ENckBpjCe4vmVArA8hb4ZbKV5tRZ8SD5wj7gp8NFtsbd54zwXnVDKTD",
  "key8": "4kKz5XKQiMVEqBv3RnWoZ3ZfWFPNeHLsKjBxnAiXpcbkyuZWfJSE5j8pipQyRk6cF7or9wLvMPfw28qigKRG4i5t",
  "key9": "5WuHB3ioj5GsUQY2iQ5QD66gPZDaS4CexUPhBoCkCV1sfsRUZPUwfwAvCTKEUvMPW3oneccHJbwpA8qvP55fYniQ",
  "key10": "3gNCa2bFv69FzzBsicSygL5c8UVnVhmYxfBceMKkXgtXMFpikm2rDyzsFa8Lwe37otxRWBsUm6VJmuoWd15UTHtE",
  "key11": "2Z16GD7p5aDNZVk4eXj7BWXHANN9zUGc93F3HsS5bc6P7pzugKqZ2PQdMHmQxGxizfphdSgmrv9nMWzdVQbeeSJ3",
  "key12": "o2SqnjAp89fx2FWzwBhZoP5EhMV9pkP3RF8yjyi5o1XAnfRtLuZXCrfWAZn3ovwfa68ng2KYaYUmgpC9Jo8K3zX",
  "key13": "4W924sA4Tz4Xz1bBt5HPmncRLxGabjzaxGQ7vV975XVVzQnGKkGCVMK6dczu3yStos7L2hZW5EVh2MUADofEMksA",
  "key14": "3eQyn1cbg5wMxEoZjseYqtaDzT3YH9jbnoMRjrWUdi68FaUik1H8KnAnwk5FpxmKa9irYVMGPniU8NiDR9TGmtrD",
  "key15": "67Ux9rrfCfFV8ruPDXdHwodjx9tq6rmDd56NuKQ3tiSWjLLLUhD33Ai1WBqKjyA7epJUPmBmS1YVDVxNLjexXt8r",
  "key16": "4rcRqeSoQhAm8sVNtKUp8GAGFAYeuhC5vWYeGFx2jmkVgJVjB1Z7R4TLByjypmX9pYeaiW6ncSHgoFFVyoNPDcGB",
  "key17": "3JY7c9QSoBCS1Rd8hPm1cfHB87satRKPJAYDivEehcuDMmG38S4YQDh8AyLKPTqJExRsdipCNgcKUhtRraCAH2st",
  "key18": "c3ohRAcT2bG2qKkie5YpJhd1tQndtsjCvFkg7SJBXB6APWAzKEK1uDGFuuJMcajpQ85ogPNVAo9vtyca6rBYPMC",
  "key19": "3GUfT4rcg6zTyh3DS9qEdRtHKsYmtDwfdNsNo3LM7Mu1kvz8qCkjyz1TNnR4vCngpMpScVnojiebivRtMRDPCp37",
  "key20": "3GhhRt7CvoRfDj3kuYRRfwE5i8kDaVGKsUd7X5dz3Atr8TMZVkzZGmEVyPiVAYHhPRsSNZn2ihz7DMW289WGPbdh",
  "key21": "2ansCunR49jkquK4wYQw4zue2vBKQfHjMaN4ZeZ5wWgXKrSr7bYU7yLjoWaSXjE1koQhnjprgfiKsp3AvTDb7A6E",
  "key22": "3Dwoc7KvZ8D7NpXKKBfnkykKcWckiQmJuaeErxcumHVz1WpxCFLoMj3prwA8G4Twyo3XvkUMjPfLeSopekuZzhxq",
  "key23": "5auKSuvCTCo8JG24U7cGBkyathXzFoTY6zKiuzZtazF9Ha5NuWN5psLJ2mTjxViy5NVRidHudJaoh5Cp25bC3B8Q",
  "key24": "4BiHrU2WnwFXHYTzZTQcb3UgdVdFQ82wTQA4Q5tpyHNupBFcU9kSDt8aoJVa6SMh2s3gBzujwZXXiJRhuFQYPJKA",
  "key25": "5Lgb5M3LN3ogyrw2gTT3khnWnHtZakT3Y3fPNZDhpUzg8WQod3mH9Hx7V136NaD4fjnFrXg3zMR4Kbi2iD9nKtiX",
  "key26": "KJC9tCDxySvt4ytFpJnKBZttsoW1Pxy2pPEmV9QTSpZGaYY1GyJrkGpcL21kzFSRrgiEU6tPgNeTmnNpiEqBan5",
  "key27": "2qJ8BvngrPqwbgtRgcFkFZ466H3CZ1B5amUVYNKi9rPRU6MuFYP76qfP3E4WchEFmQkce9U5KXhe6734TXDLLyCb",
  "key28": "2T8jL4QgL4iP3TtmgJPpTKuL2xxwToK4Bx6JmXaujckY2zYw84NbjekANfnoTBGgUVdEV9yNx8wZrnG2HCDAcMYa",
  "key29": "2iFAE9xfEpaxFPBBNVsVEWvdbiBK4ntkbLox8XjhbgPYf2u8WJMjz3rhkj6Ds8ADY2CMAJnZbG4jEr6uzb7mrFqm",
  "key30": "4kDHBCscFjDkLT7bj4MP2gViVFbDVEAfs5d4ipuCTMxVsTHAa4b6h3RbXJAXebATNTnLisqEaWa1mvk4hsjwtCKu",
  "key31": "ArkAxcbmjUW1wCvaG38SUucZZ6UTXLwmugTf6qzQXsosWotPe5Yju1tYBeFznAyK6YSd1mAqcpuvTuDtcmNpbBB",
  "key32": "558cnTGhrLjyzGNuEzKVeRLdiDyFDv5JyffdNZUyroFnaLMBWAwFfPxh8iCrJDKEpsouNRcHkUK15gdwrmX9eofS",
  "key33": "5NiLKdqqAxfyyyev7SwX9mKuKbb9sBvx22tunczz6erSTNa7TSguP5Wj1savukByV8gSoj6bHzqumSVzZfRU5Uq",
  "key34": "4ZQRgBoFXNFXkGAoUSmNK1TzdxRGaSV5GE8gFG8mQuL3qRWKxkwGZKXE4D4kdkSETxwMWXX1PfPcJ7aHujAvj1T9",
  "key35": "2okRqc2nnadJC4tPbzzBxbqU5V4NLcTUn7YrHhJ1dhwBh48EszW9p3HYvTsKu2n3TJmm48AR2FJTTXFvoGzndZNt",
  "key36": "4CqhHfeSQAU3amJgitzBPiBw4gjwjKYYNrEp3fnmEkPnsgpF7NiBGcWD9WDsWBqerjCxpc5nusrQqXcVMV9xXZpz",
  "key37": "aBFuoSdNgjH7eaZna3h6vCHi2Nx1PjorMD2bufxXQMXfabAeG7uQ3N8aoqehHt7jTpRw7JsQLdDtdaZuK5Ecdan",
  "key38": "2kXEsgw6kkAMbx7DWG6hebQaRusb5x15NqyKVeWJSGPUbcF2uizhPuefgNhfh9Rm1M7ccLrhhD1fQbwYwyPY8KHL",
  "key39": "3tVa7983ix3YUPHx1A1HTcrEfaJM6HzXZ5VHxaS97TAPebe4mUV67jky25TLYERpWiMEZq4jiC4gFCwewUi5r3CD",
  "key40": "63sgpY3Ft8uBKWzxMAJfHExtfAhX7zUmhBjtHY7ifMRD5pVHxwwPUomckV97PjGkXjZTRtUYrganbhMz7jYycBxF",
  "key41": "564cj8HUrUFWfZjHmxxMgajTREgMd3YF4KZU5rq1vuw6GBe9NUeZJgAKruZZEgvkDTJCtdvWhjTQM9AsLrkjBgFR",
  "key42": "4JMyrjBsLkKQ4sifuahisGoVJL6rc4QKty1AdRrrAQLzxjAWsWtXoaEgw4DDi9PvYrhAJrZVjrkay3P2YK7d69tj",
  "key43": "2e22Rxn5ycUUyr5JpsWLDBm28b59J5SGHGLhVyMU6RgMgy7oyZzYgHWu1mnsUNbnpmT3Um5nrJj7LfNm4PDS2qtg",
  "key44": "2hNjVpFTCpTqBHkByHWmnjvTsPnRmgvNg6pMJmmxu7xojEdqfrYNc2j8GeNoAHrRQmWABcNCpHMDzUBz1AdwuSds",
  "key45": "2wGcsiEGegeDKwMQCpA4xnmWZmqxAXx1L6RUMfvGUpewT3gGsfZc1SUrbKY4qmhuk7HRDaAvNK98wRpwvfrati1h",
  "key46": "3uFwF5wuukvBTMdNcgDkernWUSnyQBiJ1m7oqyBDYJSh9aA7guBWgmSv2XyoEfrqqPyvmgMdnS2jqVmRrCMqwrVq"
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

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
    "4ctX3qPCWxdFStY3Fy4Y6rgGpbta1REos1ufaUdxRG7yUba9XC2rmktvYhuWiTB8U62DG6grAz3Hhx8CFMevySBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zekzEy5EtKjroxkudv1bcBaV2b8EZHDtWfbAtx4piwEVdqY7T2mLDfwXQtPZdubMYvCs5U9nt5H4hmnesuadqNg",
  "key1": "3mumXvWJKpSjKVqpm2JCo7PZQF5hzSacM8Rgnu54M5Fy6TdEySknKhx2HSeH6G2TPQCYhrNutDzm9MZtN79Hijad",
  "key2": "3phqRoQNpvuwVsh87sSDF11kngedzsuyMXCe4U4NnfpfJCEW1HWWJjA3j7BkZekxdbApUNyva2smx42TyMAn69v6",
  "key3": "2VELKNTMBYSPVxbe7XYj6xXGXuJGuacxppbgYVwkhNeQAYELjnJq9CAifwipbXqXZTKgd28fM1vf9DB3TghKeRnQ",
  "key4": "U6hg6hVT1WsbkjDbaA7nCVykVVkum3bV3Y8Q3S28AMJLMYjHDBRDBwDmEE6n8Y1T2N33rHcGjxVGQnnanVo5RQa",
  "key5": "3Vmxhb8YJDcMckeA4aaZkWygmmHMUvPDsXCJYvKaVqRNNX9dDm6BKvUzHTAQQdWQU2HDj3X4FN4SY1W1gpHjRJBc",
  "key6": "2e7SDfFa98dGqDgWuGY32qZgsi4pKhsLZX25HAXihAMXA9Dp8gh19MUp74pLWMRFVK1PrLq7U8fDp1CBjmYRt1AT",
  "key7": "4ebeXp8f5htY3oTsg8xB9RynR9ZT56YPiNKXzG5JZyaNnGG4yn4m1mAPesiHZmbQdZ2iogZkLFgp8eo5HtDKgZQh",
  "key8": "LNiPoQgg5AN9o4BJkcWV4ES4vbDEyVpbpa76s37ZrvHYrf54b8ATbSNt9FRJoi5FyMFx1nFQLuDJ1uCnCozLXxv",
  "key9": "37NfaQTEKvd3HvtmDD934j3fJ8VaukzEoFrkkt3yEGFe8csZCxzwvAW4RmFhHdXkhcU48D5TVJZx1BVeWFopa2na",
  "key10": "5XFiQQGGMVuKGMo4i3bCuW21txo9advrRxuMur8RuU6toNgHqWttpT48cqmjriYqvMTYC3JDhquBFUEsUy3sVFzA",
  "key11": "2GfsA1UynJCmKBwt9nFFMDmhX2BdSDoZZyHW9vjG52XpsF1FhHd8TJ5pvWMkZACMqp9iysdGFGVQvTgyCQS3QwNL",
  "key12": "3ndKjQhB3nQomtsV5n9UTaDW1Xsbv6JWLHtAjW55DqAnby5wnfncZFxjZ6wxgmvm88LEXA7JJeKiVg65gvGRPK9e",
  "key13": "5PDijPwibXTpAGve9YwbUYKQ9HBKEp6RbSJnnZUSZ567rSibtoS34Bk692zTifT2jtnjUqUZXT9WHBMSG33x16nT",
  "key14": "yzSKwiCC6eucPABConYZwYFEGSZmCWmVnRm9qEuDBVfQ6uZm9kaHmyRm8bp4f3Bpksw2WBMgUZC9qxMsPaqoiX8",
  "key15": "4NzH8rQPXMcgZf16MKM7RyurzTKCygnEBqqJeesCRfSiNXEASJHazQMgi6iWSzNiKXAKAKM4NRFdcQLwHK31mFVS",
  "key16": "4Q2U76Tt6CJaFnqLQWFJzJVFnw5DQfekehJwb2BcG1Lbg7d1ubEDsdZij2XijrmqjZHJdoNzK84ZBRhy1vEtsetK",
  "key17": "DcC6Wes8iZsuR7vYh9b2MpbSxcFjiFpZEkd6EwhxYFoZ3LnwhpGoMX3wYmuQiZcS181BwVyRD4unj55uMvxs7mA",
  "key18": "5ruHPDZkAY73ZEZNt78B62eR6KbxuJiCiPVJbJFa6w8q6KUVGVnuC8r7V4x6CLfhVqwkPjGK9aYyfB3sXaJu9FGB",
  "key19": "4o8b72cyXobKv68aUfgQDjyanM3efNTiYNNc76K4S4N21YUyyb4zcTci4MqJ2Q1PrkQqxcvpLjCZfgvcsxwWFVvJ",
  "key20": "34VuTUozHwaR1eBkyp6H9DGxQeoNGUzC2JqUtKjYXPBKr2bweYFAddY3ebgokYn4RvPiEUSXsaRK14k9pXRkahx",
  "key21": "2iV8azxkcbRQanSGr1DVpVjMUD9N3t3VCy6cumrcXZMtdvvmdCcyF3awwww1otaxXbP4a8z8RhhQJMvzibdjtR1n",
  "key22": "4Q41grzNekPFnnsKgWAF83quD6y7UgR5ytni6sf8t1nCmkM2LwPb6GA9E8BHE2tDLK61pfNBoE4fynd8PCvAYcwi",
  "key23": "2LRJ2eD2Fb88ABjyvcpmNdjnfAHBhGTGqGwvVwbZjeB6rarm8Bdy31FrWnoyKtmM474wXS2tgpbid6mqMshgWQVr",
  "key24": "3JJkjrQwj81SX4fJsab72aN4B5zNX3qyWbUh5cH6AXVVicrEuJN2re5n2oNqfm41B1NZ6EpEzKLo86xau5pcWqSo",
  "key25": "EGKYkjs7dgHDxQNBkuUR8tqgMjFixLtXk1g591jBkFg8gPuinpcUPf55cXFuwJEgj2fQQQc6wGdnZMwAt434eoN",
  "key26": "3iX6QLagiNgMuwgpfpjPozFUKY8AVYM3V29YLbuUt5giRtahrWpK7pom618SpT3DvR5H7gkboqykNgwjXWEMX9kU",
  "key27": "2pHAigUc4Y5r1bubcAuMq8DxBm68UXjy1Uh5Zz4KP3jgbPoj7XCdhRUHx4rXgzSep2xjTfc1bZEFnBP8orgcAbqV",
  "key28": "5KqXLXAJD6brig4sAPe9pCQFos6131sD4ZoFC54Gxc1EjmWiVEZbR24svuS6nqHwkbNb7i5oLJQqU1ixgdKq6rJY",
  "key29": "tjDt42BmBm2DEJEwN2yG2LPQZouP38nnFPQvEKTXq5tniTsUnfzcEi6tX9yGUr8o3MXbZCLudYCZ2bxbh1oV792",
  "key30": "5UAiSb772v67TVEtR7uztbL9kTc7HfMv49Bn2BJ2TJT9fqW4SwcrREYi5eS9a3uRapC8qwcyF7b5QPShdddzxR4L",
  "key31": "5PcgdEjzAsTB3tgnxdPJM1MUHDq7S4Hj3v8Q1QVMEnVvsKw9EuCJ5DK8KWL8E12kNK3DEJVdskCPZcUMvBoTc8B1",
  "key32": "AbFKTXPp36nPcHyt1Fs2xEDgdL872dX8SNheXJvuBq8N62A5B5SCVHncnEVizRq3P3URRCQjDw68LthPzPntdm4",
  "key33": "2DpifjsNFT3NTC9YNjmygwMroFY967bEiygyPzZzdUDpDMTZaKA5RkppbZMZj54abvMh42eu5Y385YEe3WPc36sw",
  "key34": "5M3aE5ccmm5rkNGJzwZGPM2G12edr2ckJcKN6UBvsqW9f3FoQs6FfdAiNgCc5VKWN9vnswUB9GEHYfRsy4Ui4dA3",
  "key35": "21tk5hJGYw99aWT1dhB6Bad7UPFhbaJmvAbrFSHnGcppFriC4uQMejuntBRAYmm1WoWnDpZULeuuMAutvSuCHSS1",
  "key36": "5CmLb1PZ4tyxKQEi5eCXm6d7czVtNR6hPXqX1fH1k5KY9GxQrYftC2emJXsibzuZBwPZDZ4SWSDN1XWVRTgCyWq7",
  "key37": "3ZV1EebLF2a4um8E17BNEUyvh32zaFKR82swzEegkFWL46JeshC7fzCs6rtdrgnTM5mBsiYDbNnASGHf2Db8PxXL",
  "key38": "2fYFR9aG6Cq6XK8qX7b5nKqmFzJBUjKGbciJ484ZqxzovqPgANPnp7vRfm8kEk9D6cwHjQ6rpG2Ep8LoYjdwRLgK",
  "key39": "zvHakSp1aqXXkhVTa18CPkwUmyjpiRfyv9vJYFJucEzNF3GqLzeMdDFGzQX22rGVywBnvyKMgzqahnSvP4kGVZE",
  "key40": "5zG7EoJvkvZPhaDzz97CTh6B8rnVoeb5hbje9MuS3aiDLRAMm8gUDFdLmn2cHHzg2rtmu6jRsMPRwRcA48cAuQ9C",
  "key41": "nHbSK5qY9xDAEaZT7WtChMswjsHCykFGQ3DM7sfy5Dbn6PuczZS7LAT6yA5vsznRuzXx47GieedwSP83gZ9DbhN",
  "key42": "2rB9M2enE4reQK8MEsv45oeTDGv3aUS7duZ8B6Y9Aeour4YUMmSsVA3Po3aRMKQB37VRgyamFTrS6SAk9hmSBFwU",
  "key43": "5bL1oVb7yCh8Zog9trNfpAsn4ZVKmQva98EsBBMJSMwnR95QXSD9Fjk1hb5VM41zJQhitSJG6vkRpQUdEGTEyK6Y",
  "key44": "4d47oRWUxTJjiNZuB7rZBqBPyh34sBN6Faw3LKdev7stKLK6L1bwKs3nB9QJzKsMVShZMtd8dfD8BmUuUPUx5PkL",
  "key45": "5w7VcQojvsnDPa6uyB6sXZgjyuGPhwfs7oiWheSxerfopMBqcH6wjvjNXoB9y1pd2mCQyDkrNAfe7Ua9gWVoPhMJ",
  "key46": "549mYQqjwyVk2Lkp9jXmu7ZFji6CH3V3BKFzq46s2XqReGfCFwcpiAfgSLXfqPN6soFFL8bVeBJG4m44rmgx81bF",
  "key47": "3SGqBFA3vpc9dWZ2JUd6ek6EvRsw3Sb5HFaGUbTXVSKgp4CSUtejxwkWJFLfDygT2GJpJPKxWuQbPkw8Ca7bqAYx",
  "key48": "4vwnAA2UWM6FuVyyXazAnAud5tcKQm47xruZeDuSBABorPXJ29srRSue9LYqSqiQ2rNLwsPR2JnmULk1q6P7X3Ac"
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

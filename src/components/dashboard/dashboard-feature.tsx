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
    "3YuXAVfBgeWTUa5BEZvxCJUk3RbJB1vqBcAViVwUWrCoa4qZzzbx8BxTdAexgDgRh19psEcuRPzMH5sDPKY6RJry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjrskVTgDeZ4KknaZjtgJDL4spVX2k4KWz7y3rL6huqN5Qi9Zcxx2ewo3R1BVsuiVPWuGZsJA8k9pkCA7kTRowi",
  "key1": "EtFpMnE8oHJvPmeFHAKJtqLSEkPBKLk1FGmcgiCqDsG9CTAsBLpzvhTBq2fH8XA1Xi3naqz4NsFAgeomTECkBBs",
  "key2": "4a5CdRtkYXigvvW95GPousfxh7fQAQtvBSHorppjEn5CPfHWnbtD752hxAZmAjeCCN4MW4CrXrVZSgVofpSzVBd2",
  "key3": "4cNLREzGET9Ek4aW2b78w2UVFHtbcxJzESW7VkV8RnTbJXhFfpvEjnEc4gx2StZvtAVABBJXYVCKidYezZyjby5h",
  "key4": "4zqVMLWcUET7vjDnsPDaU6qx9AUv8Lq3FTSsk3moXxqPg7MHQBiZfAskiD12gSX2cpXGYBoGwJJJo2pcsaSudSP9",
  "key5": "5i7KMLfyJLsFZv4jA7mSPRQ4JLxAMULgAcJWC8aS6CDK3T1Exw3Qpovx67nDHnPR7ryT7G7Jb5Lz4UY23aEvVWUw",
  "key6": "4spumwzGP3ZXqUCHAn14MQ3igJhN1M3kaabDhagvF5hMv4QWJN8GoAQsboHmYwdBuDUhWNKB5MynWE5R6u6DRt3z",
  "key7": "5yrN5qD2apnKivYcUeAsGHp7XbWB8TX72NfrS4Yo15ywN98fCDo3dVvoaHttPfgtUy2VZoea2xMmL6zdNq3DJ8RY",
  "key8": "4cDjHGsj57Uapp5UJnBnc5afuQK6Bz6PR2tANPMXak3Kd8drBvjN3o2jQiiZrZaG3PSNTLZs85BUSRh3B2LFTbBV",
  "key9": "7YEdJyXR1p2bKNXUAzSUvSVjyPr2jUBxekpiua5RLBEFCyqdGwEKrLx81RfhgjAHmMNbpBfSCGY5Zf5znRBEhuQ",
  "key10": "DmTzd68yik85qjc1SwfKaUN4sUoqSBNxdpbcQJq98ExHM3Q7HeVoNGT2xhpPHYvwkMpdkHQ32f6tyfNng6J99bg",
  "key11": "5HDcj2FWYHsQb5vdY9tvjeprpcyohjsQznSja2fiWKHXAxeS98nYn8RJStN77F6pLoSugrWpCjQ9Eu4WoRa3BiMa",
  "key12": "3B7NietyieYRKkChMgTh1PxRjRFdXwTHRXi1WDMFPB5ueJrSD5yx35nNyv79k6Rgs32d66LKrTvfc1qqrZnYPaVX",
  "key13": "4SJfz1Aems1i7aJ3vkiGmqVG1dMrGkS7PFCirmjwhMMV4zUHHDzTxnndS6Gb9Ymi2br1seoXSoHoKB2xQCHD2mfT",
  "key14": "3FiPE8RMm5xrMZWFLhBwmwKtE5e77mHN4SJ6d1zLhbEUaYRYJ9R3boJJBpLWdXFfnfDaeiPSH7rcXBBNoCMgEbmC",
  "key15": "k1hQcSjXaz1fbzhfT76U6fjY61njgzMMVSsbZ6ZdVMRKv3mhL3TBVV1q9CTZZojQsC3oQ5yJ6oEMcSb9xi6tHx4",
  "key16": "wfcD6Kds8MTDvfr1q4QnQtixd4u4h9jAXDiPvuGVoUoW8BkV1utktpBmrEUCA6RDSWEq7GxJGVXYcCyAfFQrhFj",
  "key17": "5SF545uVxYKcB3A2yYPaTqhunVZjZtNCvkNDYonEuCbH5PLd7boHXR9PiXQR8NYxtxBg6Q98RYgpmWL8EqfmWbV5",
  "key18": "98kAPKjqkJ9xUV8kSbgM7UDoNgG5rr5wev5Ld3Es1nPCyaTiB9ZQiz1HbKxaFanNLnjvXbntuVd7gbfCXAWdtSS",
  "key19": "5QKL5qdWa9eYRAt3Mw6bQ1hriny36HXAX3gCRbefbbpWSWVv5B4PUtjnDfn6qPEkCeUzsVUf1zCS5nY5FkXeNoBS",
  "key20": "3PkGzg4Pi3f8fp9XiTB6t9VvGbzvkKU2bThwPH7C4JqLtZ8uMFfZFseHAPCQs1Cb93qfSswSJxMp8sadFgAv45xe",
  "key21": "5ekGG2TqJih22G7L3QHa8MgC2vPKGTZN4o2CgVsGnkRWd6JVcZZvHCWb6uPpCztqLhGLLcXETzJp3sVp3iBQHCHN",
  "key22": "5euKfFXLe8Nvy4tN9mo85Pdd8vU46reH4LbPZ4affwb66Hi3qavMsPSngKRDduE6yWq14ZBMzMoQ9sDbmHJZvVg8",
  "key23": "3vsLhnuAyiaTRggGx4cFuDKqmsvzVqL15pKUSM2iMhNHjmp1oMoxbH7eQw8U9qwuxkGrWmEaf1NMsxhFEbbdvrxm",
  "key24": "53eBm83aMp2yM8ir6nVfZ2Zrta9TqS8j52QKsFtPgaostyA4gnsqJa3D7hHw4FRF5XCmTSK3uGvx4zqZGKyznRZ",
  "key25": "3c6hUks7YyBtcVu4LGkAubzMZp2ooNv52v2dbHtDzLdJVcBJtKfNWak6k9MdBTFsr7PnyLSgK7GnwPCVx27orbqs",
  "key26": "Gf6ud8FeoaccfhZNGjSHMad11M3G52B36Ra2x9YuMMV3DUxy9ngis97FfAHWpc2ife7umkRRx3PqAKufjdrDzE4",
  "key27": "5cWKfyqvfvAogD75u8dMHfMfHYRjNpFTtmnqZzgCwhKma66FHWvppvG2uAag2Ws5DABp1G8kdPx9mnyFjTVwogWc",
  "key28": "2HuFQidntuyFD4LGNR1jK9rmQqhHXfQMFGE7fEVSUSeYzDZUd4mTrnKDepkB8sNJnktZHNUqQrtVQkyiSVNkpvH5",
  "key29": "2tc62ZT778jq7JQaRpL7tJfMWcLwzDpBQ91GPtWpRFmbx4gFmhWxGMbCRiGRXU58mqiJEg8mDUkYG6Nar5MCSLvE",
  "key30": "KBdoLh5uJ4Z519EMkj6Bre56obVvCqFq6L5pmJCMatM3FfJRvDmEGnnu65uLjdBcNbmjf9GMK4Kq1hyAmktvsxF",
  "key31": "2PhvhDJzFhsyDE9ZuSjtDhjmSVLutf9Tr9t3A8CK4RV4spXTvwarjjt5MDxzk82nLR1jLK76QcLcm3wM5KRLYtSP",
  "key32": "2CP5kPsRswkRGTRKkTUCiYRd6A7ZdG6trp3cbi4fioL2NMWNRbUv13oPkkcpLZuC4DQbSQ5Z1GpEjtkGokoVSfxy",
  "key33": "2g4SELwNTJYCS2m27qFjmpWVP1B9Kjb38GqyXqH6ecMwPbLYV773Ug2xYns1Z7YMc77T8p7H1acXHjHG4S9wp6XX",
  "key34": "5WZUdEYxNu1GxK4JEB4CUj8YnUn8zu64TDNKAWz1gSQtvEN5jxyk2Zd94Vn6ae6gV74cpjpA34BXVbTSYKe55Bkw",
  "key35": "23VRu1x1Tbmxp1bVn5jBgo3SssW4JU9phk9XjhrqZVspfvysv3pNMqAXbJtNWTf7pYhkCumJhqfN5hGue5XySAWL",
  "key36": "2Nw7rEn9gYuP1pE2H6Mc3LnYZSi234eCapSxLMHcr2Qkzo43wQifEWcQWwed8o2z1BzEkektJsaPAk78jMthE51t",
  "key37": "3gLsYk6BisofHbpgZCVCeDK5Biyi2LBpABssJZtg9y7N1bwPbNALERezEW6CYDp9yA148WxaXxsGkPAnBjmeVUzz",
  "key38": "4DrikDh4QWAYEXhdwoE2UbNGG3mUrnq2HyqTk92ZjmSU8yWxBV9FCjBf4RkxWRcdNSTrPqUxbS11TFqnQjoWei47",
  "key39": "4cKi7XWqVuVQ5ocs8LfSfMADaVr3KmnPFaG29mQFdtHV5KMuTkgoCmveiGP2JPZY618Jie2WdcNSe7j9StqWeqfX",
  "key40": "4QNazBvUDFoYUmddMyxpyV1joiuD5vWaFV3v7m6hc9SuAeLP9f8ecfuYd6VeBQQo21ij2tSaq7cfGh1krjbMJZhU",
  "key41": "FX2Fu7rJpTuSisiFhSpK7jgHYq9ZLU6jh22KpSmazE747kf5U6xrC1cfRkSqoCTnfceouD1JjZkvenyHxoeomdo",
  "key42": "53RsZGT5KMrS9fW1v5viEXtN7b1SG4cXYssuPoXPqKig9U7x6M2SeFT8BsFw8ejGmVh5JHoWNcYpEHzzG25cjn9x",
  "key43": "5NrBc6RC5MHNMWWY2YwnmyY4QaYwbi2YFwvUc4Ub1XberDSnCtuKVkwGr1FRDeW6Wu6d3g8b5RkfzaiH3nhpsSKE",
  "key44": "67YGLQTvzWDU2DJTQrgMp86hAamMfcNssGH9iKW6syTkz2VkRduzUi7xyjjDuzNRE4x9aJqGgJHDPXvMx4367EgF",
  "key45": "4DuuwxRCEAzbufkNrcydTWjQHXNnE8suhBq7hC1qYvMZsguLLKyYMiyjwEDDw2kBdfhucHLM5dhJGF4e2iGwYK5W"
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

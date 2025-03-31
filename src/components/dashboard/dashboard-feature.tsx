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
    "9goiNDuneCKcn68SJUqK6XrhkdTD8AiZWaMRiofSAYm7LYgy9uYkwUwZ3jtUr4FkPggRm3yd4ZcUZcF6tLG7qvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QfhqjYLyFc8gGbjyjsxV3yE5kyieof48PipcWivcbVQhA4ubHuohRR3AD5qdxzXGLBudPjdx4w78EBumN7FPLQD",
  "key1": "4JTTmEPXwjoNokTVcrbzhRitNdUYo1yJyu1M4ncLnTmXbNwTPptUmVGtAk2ue1coWVDsphaXiSNJmehm618u49RA",
  "key2": "5dhEKKzNzQNmhTMCvfwzxWP8SC7yobb5DAC7QEPy9oQSJQPvFTvuYTEhjLR13dG4edHJtSteeqs1U7tn5uN2Kw2w",
  "key3": "4egxQvAavcPcrBDF54oq4x1UBqxPmA5oYZ3LxHVZhGCPL9jXYAi1J9gdkDyYAwss7xd27VqsfEyEwL6fJG7iVFpr",
  "key4": "47JBGvcK7TJ79FjHtHsjBnDVkGbk7NwH5pDMqboHQbiNzQ6KLTCNGf88EP2XzPnBpyEP9TPquRLV622PHe4v5jPo",
  "key5": "3hzk6UaoAsMA6QmxKbrkrgjbiayms7cj7jomi5ZzW8Hwpww93AXMv1mtgrgvV6h3TCSwY5qyhGa7r2Ei8jV2mr72",
  "key6": "4VajUjbiE68898CPoLVkvtzVnUDEc6YwwgpuCdQE1tjPVEQY3r4ref8SffXGWvKzfDTNLvztEyqX6M6Bkx6d4qB6",
  "key7": "5p7EPJeAZHwEsiKvHDfn8oLFQdCproMG93YPXpJUALZgLeNjQaTgMU78rBSJpjgBMAr2N97t7WQPKa9dgbw3yxJ6",
  "key8": "3C8uu2NvWFCZUq2kBkd5NRYF49ZmLqS9FppVvdo9T5oAi7uysabQaC3N5WDQWRf7wkLwR1mKbYJGvwzWUgNUEo4X",
  "key9": "5oiy61oNSpFEJcCzBbMKNdgTqrbSq28zN1fBW4urevxjcD6KeQzBzVe4LUd534beKTb6nkc9rzBZxBvJKqhQCa6W",
  "key10": "2FSEXjgqQNCKCCBmazhyHMziojzZzyP66V3fWb47PRS2ct8KEQAWoxRNFkCY19brVSuAKJ4LfiqoJSsT8p3Ruejv",
  "key11": "fz7LTpEurhd6LaZvc17H8NbCa4eaaGichk6eCCFght5ju1yennFDZZDqvzjBoBWF5iDX67t828HrHpR2NJV8Nys",
  "key12": "nQd2sqvD2xev8BTyJtZRDJ5vKRGae7JxsXBofXNzbF3EXBPqjSNMaUshc1UJY8hy4h7Jw8JXuoHgcjYHqHcHu73",
  "key13": "4WPTh4ZMSiUF7vr3HCwbQ6UPn9iuK24bVm9dAHNngSj5hjW9TPoRMNX5aRZ89Pceft7ht3dKWwAoPt54JKbM7J3a",
  "key14": "mUh6hNbozq9rt5WR3TPkujwG2R9b2wBcg9sdTrS1uUHoPYbkxeHQLWKFULKCidsdkpK9NXJxaPyCsfd6RwWYooj",
  "key15": "Soi7KDkpUgrS2fUmhHdasXfZVbCve86FfzoGwomxjR5znFG4bucppr7NmJFznJSjWAvLFtjJUw4VHb1ugoDF85U",
  "key16": "4N7LbSCDBWjVDZRKzE4HdZYyPmgpp9ZEFuHUVxCGC4gaAj9Wg4gE2MahToWW2h4PEqDuotwuhHc8fR4hNwHJB5FE",
  "key17": "3PGwGC8PYrgo1vWqEp3M8Qyk3rUdCRyxNv3mQU1Q4voFdsD969WgKqhozaJ1VcoAaLP8uUCj1S8tPc3E6fPAezay",
  "key18": "4FP3j8C8XDhdPPxB5Y8bNpNuvXfJyC2XF3iHpuJYdfZMAbqHkz2wLqMoEEkNmG75A4zCazhgz5mv1123K2vW9w2w",
  "key19": "MFTuDNwvnGTePEj7kZBbcX67aM9F5foDaYJyCshNKrEpzjosgGSUaz2errfyNvczwRR4fHozzxJzRjBWSeusMRF",
  "key20": "5apZZ4avAQSHA35pcgbNWcXSHRw1zJUQSGHSs6bgBTWpNRpyunwv6XskJ9qpntsUNtrXwpZWno3pwZB8K1PzwYz8",
  "key21": "5YsXd8UQhYs9CpyrVZn4esy4Qf5Yh5SKLB5z8WJmyvrxHU5Rbm13qGEjqDwkxMDykacdLotZoGbDT8HTuQgV1Dfs",
  "key22": "E88SAvez2CTA8ToD89LEgbsBNV1LUqH4SdubWyereF1EgHSPeXSDRvQqGAUo8VFu7MzJs2DLavWnxPVWCJUm3ZN",
  "key23": "4uASWbr92AwkaruG3mTLJ5iovp6QazvRF2Sq7e7N5H3uFMpX6tzZQ5BVhnvdXHzjCAiytioHfW6QcZFxckmxdhMQ",
  "key24": "5BopFHgQQYYUKsxSG8sHxZF6NDLn5pe8KuFzYFA59Rsh6tUPoDy1SQ7JLnUeeC9yf94YnpD6c2ZFLktPiLfTARej",
  "key25": "3e1PS9v5SjepvUvq1yKWfxspJBkUmnaF748Y3xpLJNtaPaLabd7mo3CxhYfsLSVERA86q2sWjUNWrkFScM7DkJ5Z",
  "key26": "5WiQobTHovVByqePXzhdnFZyeTKDrtcfkFdahaYHNPJcCtcKjJe7bJLJakBRCkGDzefhvb52aqJSnSxv2zGZddmh",
  "key27": "3BJjzM4pxiwASaVb2bD79omr3HEg2Xh6SX3PTnfJm4wDs5kpZxTPowkP6Xr6ih1mcbVnYf5rHn53e958Xf3cCjcG",
  "key28": "5vVV1MgSFKbbpJXwoqX8WsCg15n2rtVakh1knMqm1k56c683z4HHwsTUkVFCyEfBbJGmyUZqSAkEMHAhqwkqbxTT",
  "key29": "GGSW4ep1tmKRDHt8zqqqJVL7qnQdruTiSB9wHpDS49JmV4MgcHmerNBqaqTgZWVy1Q4vva1AySjvsNbwqqHhH3T",
  "key30": "4M6LQuDzvwjgsnEMzuHgk5SZpMj4dB4XUAfVYLcMECpVP1V6YtvE9SSYWs2PMZKfryCHvcq8d4Cnz2SGLBsF6GKq",
  "key31": "2McLk7KHttot7S6EY1sKqkqS1rexHCxrE1APNptC3GHt8x12pFw73tmiSvDfYzvhosCRFyJ5qASmWbfse2oox2XN",
  "key32": "61MbNx1ekVr2hTRzB9R4avrZGCB3oeGBDwTVQBqjkmiYipQrTQu5EaTGXbGt5yS2wxXseSotZNWgqkL1TqTqStzy",
  "key33": "5e8hwwhnReZ9Hx4gc5h5pEzRHsFRqNsPtLyri3MkTFJzdzw1aiq9BtiDSVLYEMy6GLaH3dg6wsT62Mtj954xYpSm",
  "key34": "5DYdkvSzof5MZENPKZ7xT2pAPvPFBqdRnBvA1NuhM3X2VcHd8yKYTSZRoHUDn7db9ZsvytNNwvWuGWq4V392EYci",
  "key35": "3rCvqKJhGXf2Ht6tpBW2FBahRNsHCQ1gFKsSTVsVUCAPtTZGi6poe3sdGe5uFSKHiNWV3dKbAEWe7XsM1DVgHWwe",
  "key36": "63oqeiiLfFVkPmYsY2RRNs43DxxXkAaEDqy6EZJTJsygQJ5aMzzZ7YeT86y5RwZWwJykfuH6ZAszmafYFDKVWXDJ",
  "key37": "5yG1WEHz6APWxhvffVwSeD1GWf7NC8NHcPaUCq2e3rgHBz2MxH1RxiaFa5WRiBN9iRtpybXArsLwjeNLRp86LwGo",
  "key38": "34BJENUhKi2cKet8vZJeiLQbdmLePaay8eYdb4uM8CuHgzJntiDZ1RsVSgAKcWYMGmhfLQertuwx3NKeo9j9XZM1",
  "key39": "2ioapabjY2z3myXdBCUskXuHK4GPDDHzow6Q9TZc6sUgjMAcPBnGcxdxUNEbhBqfbm36AtLNZEdAVmK93KmbnHqt",
  "key40": "4z5exhqZrAb39GCWpak8kNqSeofL1ZmhARZfwEhGdFpES2fDRRj3FVLVmq59K1niaRgk2UGGK3pd8aDCSWph7K5U",
  "key41": "5qmyBTjG9veG2PkemdusnrSWks2J3dngT1GqNwTZxZ9V7NMd997uNcv3mrSTziFpoyxExBcHnLMrmVRrmBicABPq",
  "key42": "4NxTyuhpjCf84hgg8NBh2NaVJGT26VoifXLnYB24tSUpYwbY49nEPkaGx15nH3uk54Leujhz68Qmf5vxajiF2aNN",
  "key43": "2jqw2UEgaKEz1QT2pMEKVbL3nhKkvtcsVTF54xDm9puDSX2PwN5rDCQr3AkY8YGNC6uxXUrhpsnsXKjAYsod18wn",
  "key44": "3vqj3GDR6Ec3KYLy7qhtALo4eihZ7xesXELHk9qpUMGQVPZYcNHVLKDjEfgcsv2smzyeMxFCHN9KPcLRsrWit8TM"
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

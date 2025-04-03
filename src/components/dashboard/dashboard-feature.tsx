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
    "5WZYE3PZryWw251inb3ZSUahJ61ZCba2KDgeedXXnwP4mbR2qh4mGHAvKG8HzowoT1qxVY62KwXQhQXNSmvy8jvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAZkbDMD1FG7myPd4rg6wuSmqnP7ZDaYzbvB8JnHwWbEz1wJBpC6mUMQ1iERyoX6HXozJzgnF8Rz245nnRuAWX5",
  "key1": "bmWBXSao9PxVBDjMn7JkwcsCd17Qw5qC37yLw8HJPTnmvn2gGPoCpCqafXVT3YZyE7duVv2HBEgAPu4D6oZriUq",
  "key2": "3SaswrEvzpmSu13z9sUHaCSqEURc3L3yRVHQZLPz4GpLpd4DHJythKTKzFpzpSV2Wx6oufjRAriBL3Jq8SrLNHyY",
  "key3": "2ruW4YA6biUn4xhftcfvJV6mXC5AaHGA6oMChzKAF8iYV23SeFsN792qFF6fE6VAcjtqgXATugeaHYXkZRYzjnk2",
  "key4": "fBgCvfWLbnoSsBqgFtJsji1eGy9ML4noywDvvwKz1xJvfoarRZpLZKzRiJ9sMKnH7Ax6WG1p9Kk5unTUF9krFMG",
  "key5": "5dwxzoHupRZpokEmiriGt3o7QV7EV3H6vaBGXBmNGAyG9EiA1sRsBmRghotyNfBihYz8w9vSqG7CT2i5m18gESAp",
  "key6": "4csuwhABpSTLGV66t14FtsCAsWYUS4sAFrt5N2B8xBDd6gD1PiwAi6voCVGckdnV5veRzjPuECkPZJR2JVJmZXmQ",
  "key7": "3EhCzhyfhaoxC4q3LYQtsU2x3VQiyBAF4LQgRGao6XPKXy6K5kXCva8qEhCu8RhDeUQJM5HGCrW8yfFwzmGbpfQm",
  "key8": "35sYeTsNQS1RpFUDsrGwF6mkiETmoEYoH7WvBxDT5D8doj5qpddV215zHTxtUCS2c16DCNEc7Tp17WHovpTUvSdz",
  "key9": "3hhWwaJk8DKcSw42uXEzTN1cGDRxGQX7Gvknii2xPZ5eEgWkGKRzgkpkYrSxZWzSwj4jHCmw6wx1M1Qc2X2PH5zp",
  "key10": "5tUwsRvK7ce1FkuqXN2UmAKugzGo9zeFh18tuujJuGYr2H2Dso7d1EW7HY8qPnXR7Kfwv2axKT4mjDfKsBwcnW9K",
  "key11": "2xHgqr4qDcSL2G3DRUBwsU6uc2DgBPr3UYi4FLVH1kXAUi5drtfPzBAjiPQwFB43b4nqvAERL8jgx3ienUCQs8DD",
  "key12": "35DVAknnvG2GvkW4ikm9SBwUEeDGL9WkYTXKCUFK6QY95N4sWrQ28ceX2x5KjgQ44zsv9xQ8usebGeu7v1uuxHe1",
  "key13": "4m9xNuZZArxRhNCTPYVFW5NGFgzA4Z56pGpdPi86jDs4VXuBUbChPS22B9PSfP6GwkATpwQ6CrDZYtaeDMM9ma7v",
  "key14": "4nzR1eKsq9gkxrTPK8ycis5yLqr4gdxjBLaqM9pGbiCDNsu7v6LykzrNywxXXp4oXY4jzKzFNCSZKW5qWsi6iWYz",
  "key15": "3pcui3eigiM2fhBmL2kP5UTcWWbqnZQiZLHhNJJweChoADbuxkvRtQwx6s7cT2wuBq4BUYyaVVVN71HazCKzBrut",
  "key16": "3k3XbDvANkNaQeoFB6cFQoc5ZK46aaRocotMzFcPnvF44qed6o4bhpa6XykkbJh3h6enmRbHTunyA5Em3vkAxuLd",
  "key17": "5DdVgMMdm4iN96twiKCrHJVWdhuiQ3CwvLX1WHMFzwqs31c1qoxPVAnNhT5hbbjzGNqsorwKsdjTfzDW6tUkEzgW",
  "key18": "k4Uc5f8TLvYrwJsfEgxQgG2nGsETV6Q65VKLU8c7iQUdtmWC1e9h4sDoeMNxo6CBFaf87WX1EpbDxLuBZkZFMHJ",
  "key19": "5vP2xYVuzsi6yS23zpfHgzNfJ4TM3sc1HQiNVyKJv6TS5Rwdr5XQV4xhXpVcsEo5U8AQW5a4Zt6sqHG91Peuzy9U",
  "key20": "4gCwY8JAHFx321QNSNdQgpZUsdnQEEH57iwfPbhGCeKfKU39X4BcKjJGA2JAwcMJdEyLBErq9msqXi2fhm34sPpU",
  "key21": "2QebW2rgQcHXQScDtXCjgiqL1VQtXYxcpPxX1ABy6MDh6JsBT6sBrW3oANg2sjWMYXKCy9mpmqX5BqGAtWSj9aVg",
  "key22": "2NV48WfpvrJe4y9mTkUJygjR3fWGFserq8QuPkM8QTgKMGuq4W2Ldt43q9aDvmpWZ7y89pFQ7v3i7gUpqCjoFTAA",
  "key23": "2iNcfBJTZqChSeGaX1tGkFG2xJViGpv3aTanTAocsMJMXhHRj378Bm7SKvE5Yj4KzqUJT86BGL7xmUWGeXVg6Fdn",
  "key24": "3o28ECkEErj8aPQFQZeNuLD6PEANHZohrbqs7VSD7rTkyLtt1eimPz191WntXNaiCKtJP8rgvPtuWNzQw9kRey2F",
  "key25": "AseubGFqYMykbT1dayzFGmmptF2YUne4eGwtXtQdDuC1uGmhEP79qHspHcNfya8gTUXS7QJyhk6iMmvDbKhAVok",
  "key26": "3ai2NEzxpMY98J1FjBziYixxUmEMbXqBip7my1rpkfDPy73u9yz24S1f3TBJ4TJdbMf9Te9oxnufMgtAeRoc9G51",
  "key27": "2UXGttRzUXsTM9vgkBBzdwPM2nHoFvYCUpGN2HTFE6zMdEACCEw3sBeESEGEiHPdWTpe6FJPvBhJ7GHJwm6MGSvQ",
  "key28": "4uwKgmwpoGCYzSVRFyg2smAkS36ft3zRSHfTEbhGXztT5TCoPp4KfGNS6GZw2krod4Zvp9V3TKgC5SC5kXvhdWbB",
  "key29": "2sokoztCqFQWrPxij8cuFjLJgJLCY3hQMKAZHtuGVCiSRkeEdSjKVF2c6PfwVPBbmrPMXywffxKmCq5ouQ4kr7Dh",
  "key30": "5yPqg2zeY776ycEq48VBkWEbXdnBRXLnhwCG3LxgcSoycmNs1BuAAdXW1uHBtQRVv2N6JbFDfeU9gCfsbePkxqzw",
  "key31": "4R2h3aRJjDfZ4RZis1LVAv67RXAFfr2NY3MN5S8Bu8CPXcB36jpSBXSJFHWHr3zqSKNrB4qudduhKttrn4LowEBG",
  "key32": "61nSo3nEZYdGKLoPCoXpuXQ81ZCP9dfR2dZYy1AA7N1MZE4ZuqUtPP5hWiQfS6WSVymDPYBGi6ManbDvgyRobNzX",
  "key33": "3obimWoV2oD6mGR1JgnHLpN2hSwX8kBjWXLLLSPYmppyqanfqZ4p65iMzj7PWVFojitVJZP1BwXW5EiZMMPQaFjX",
  "key34": "DLjRwUNcDGxEwernjaQiRBaMGL67JB89GoZTWtB9dpXLwkFKrtYnmkk8npb5Mh7LozW573UVKbznPQRZnEqnWMZ",
  "key35": "YLTiXCnxbzkuTjdFGn1uFkHToewmVnEoZNuBgwyBHTgemqxxSX2Ueap4aQ3eekkYxxXKtFA7gBccqqab3NCcupr",
  "key36": "GfpkskN6SCU9GER8sgRZ5eU7XY18FchPppKQVchjHBogsshDxYxK2SuPwURWrLmK3hHNQtAdWMpe3vNZN5vkm9s",
  "key37": "5tV8N5tonrqm9HmooMyWWpmoFDoVhzjo41L2rQXAHiezhysRj2XKsH5XdWnT63ZUG22WhVZe5hcrqLGdLuD7ppJ9",
  "key38": "maiSL7XfeMvCvYQ6k4ffJddPNhpNigdzNmTk9t9pRS6r4W3QfCWKjz1YtuocwXuVbagyNGQ5ueqEQGGnPNhoF6Z",
  "key39": "26dfEFBDBsh2BJxaY4ewuuGfk4gGcV1jFPrMgQbYtnCDUowG6dkskk6MHwYUpSotxvD4zud3wXMDibw8i5NQDVK4",
  "key40": "46qybcTPXKozbvnT4w112gsHC47cA7QGTbVuEARTne3oQaemE7WWHoSe5o9ikjok7nBUPCQGXe9qGvgLb2nvSeMH",
  "key41": "D97bJha1q7B3tJ2qbqCFP5StV3evn7kGpzUgY8o1vaxr98HhY94PQxtsh7r4145QDNYtL2Gk9oF33FWhBU6JuU1",
  "key42": "5CdEVRfNdBvCV4nkV4ipfwawSmssYWrtetZhEWfTbEjP9CDee87rCFxJQ7vVEYCo7dpwhavgZ9Nm5McWQWPxkN6N",
  "key43": "3gVjMPDK8ZUghqaRkLN1woE5fAorrR4JTLgMTqziBjcwevyU6Fx3xffk9ycKbf18bXDJaqj52BWF2JzPo4Mw15hs",
  "key44": "3RCzKf3nQXvBwJBT1QTpjdcEta5ZwwTuQ3gZ9fCiap2hB7zHsKk2uD1tnVRrW48cMRGR8c7Za7iPJKbtySiu4BS5",
  "key45": "ScM66E1di7honqPXVUVLkxrEATqn31EqXhNnxLiCiFbGSwDkgHbEZRfVK4LSm6aEDRnrB7WKrCsRCFMbfsDrKhf",
  "key46": "3But5vkfCsTwBc5n5ZEXTmYMc1RzNWgZwqWWVUmLXxLaqvMVubCYQ7LRroX1cd7jDuyXHoEqCJUmXhLUeoeg4uoj",
  "key47": "2Z7Ut2MgdXfHD6gSrMiSqQRL6iev5mbvwW5fZCUa9tg9SaY82KYcWp1Pms9YCG6RCQA2L6hZ2vGWo2cRqrK9ayus",
  "key48": "3fTGM6w2cdNcPFLEtDAnyUjGK7f7x6JN5iFWBdv2jaRu5ygUPt87yC7ftXMLapPUJzRRhr1VSejcEB5baaR1F98Q",
  "key49": "3fiY6kLMbvLffKkup7GFjs1FvbLPidUXMxtQNeiDusJFcFdQQq39U47AP3JDXZ1uGG9XyUKXbxvyDsmKMfHJ78AL"
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

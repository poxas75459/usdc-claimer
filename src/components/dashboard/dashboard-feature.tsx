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
    "5skXcSGbmVsBrF2hukN6EHF5ER1P1KW8BiHnAgtkwQf2RXPz97ZcW7kMXjM1KQ2SsdAYXyVHBe7xJY88zDLAfDv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gR5jALdoToJetk1rix3VKjUYfNB6ghgZC3aib9xbgpYsXak5BaaqLyUiJ9WVQun7QFTwfQG5uRA6UoWB2frNGdH",
  "key1": "3Uip2ZdBtjDUvMJmMjXXEq3qfkM8ZhzegLC7jWHVyrXtFvwDtGobfCbnYs9gnjWvLqXQuTFzdFNAgNgwYHtWu9yU",
  "key2": "5DouC6s6YGP9n8HHueths8Tai2GdE3ab2VRfnkLX2mnL5FjgZChJrWMej6oga24VfQYCvpkBG3Mq3wjfbHVVg5UZ",
  "key3": "2EgPo8qTxk9Rx2q9b7fhiBCRvj8tHJs67nTJuiHwmVUCgMCXmzsBgD6yfJ2h6xRVZ6pVAVejPK9NXB7eAm4W6QF1",
  "key4": "4x5wkiiAziAFERseTFDBb2eBsYkAAiyjgWGdtFTFeUtRWGfTL2WjSspkjwXFFkUnyLYSinSbRvxVcViV448JEx5V",
  "key5": "5fpzgEtfonZSCtvvqCo9MLuMtUtS9e8rkXP7ehzRaubu8k7oHMx2FrDLo3PAjYCaAD9LxYwfNLbGQV2Cw6Bg2k5a",
  "key6": "3MZ66YfhytNg2WxApYtDjszneoz3DzWyXpWbzxHBD2GUUa3wnLSkwY8BP6tMR8PPzT2NnYwyRYfe1f1wqrFpLARj",
  "key7": "63vvqP4ySp8XJFwjHeVwguydA6PctmoFz7NCRBm1xmiqTF5DD7UuHUVbz1jhvxkZza2XWqsnbHC626NLEoYZx62M",
  "key8": "3cVfVv8W48WMBKW9UPR6TANkiAUmiyxiLZGzroCpvu63auz8K7LAynYHCdxQh4sDay7LTow8eLKeuCeMC4sEX1oJ",
  "key9": "tqf2QivRhkBMBkEfCVY8boikAuxC8juthRyrx7pg9WhmERChNEkjCkbxXiBSTemLDu91HNfF1rEgbfjQPFLn6Fb",
  "key10": "35KykmUSGfGtYZoF1HBfr9Uq2qRR2tntyiXND1whoAkMC8iWNPtJFThTrEAnfcjhxoEyiNJcuSy3KVMuF75JEP8T",
  "key11": "5fri8A4DDsxAno2UJg32B3WC23LDLxUrngwwUvYqKdfAf72FGJq4RKofk1YMuQMKu4pFDxeftTPga6bGantvxUTk",
  "key12": "5HC6wZsmmCZCaqF13qqchbssJdvaRmMEUkkVBjcnJnqHu3gmmAuiBQTVe2h2PCDuzebPAGhBsh2b5iMcm32N3KrA",
  "key13": "3NqHyaGfGUkGvYuAMDMjnxa5Fmc79yyTUSzWE1sTQz4HC2F7ZnmWD22DYL24fJGDSDXkDX8Ur54aL1JmviGbrMfy",
  "key14": "5afR9PTCkUJ9idjab8ZMBgjp5Y6FmJ27hT494TcG3oofTjR8x4umrUarSNx5jtY59LNiTQXHTvrSwfE7hZKGftPf",
  "key15": "NENxwHPqG3RooEvhRJNQFX8kmL9RLd3XvqBVsPf5enTNuNoipfkiKZnW8cbKNUfWPfLmCJMggoznhBvkvJqdyYz",
  "key16": "3v9hGE8XzANBDjiN2scbtbY74e3PANjK25dHAged41XzsudmXD5pEgkD8hBrkX7LJFNK3KuMGtDcdPLcMzWqAVYW",
  "key17": "27YkqVtQt6PGP3iZHfUF7GwDiNt3fSWfGGfPeeiCQ4NgQNLzjVW8BTn4ZcgouQFzoSF8Y5VHQvkFjjHUcphgLG8P",
  "key18": "4sHiYcgtcya6RnaNzRvmQGNgH3zNg5LUN4yW1UT581Qq9cbkJtdBwmVeRc2YBskpEFFGsABLCe4mDNUweVbpjX7Z",
  "key19": "59nekjGKdPLJi5rjunjn7TkPhFsqP8Fni3bs6bGYkrEM1kMhWGGDD6tAqXHm4NHuhDsHXDx6N1BoA1d3Vhe7VkB1",
  "key20": "4iXa1B9RFSXFJpCqcx5D2JevrH136cW6SnMYQy3eFafJTBtdeovhXtQLycGM2923xhQQzNHg4dyN9R5vo4ypiwKr",
  "key21": "3E4txJaXW5GhGR6k2rSSgbYsmbFjRH4QBwEHf4Np9m4pE7bmWiT1tcRU1RauZW1jcjxp1KRHtxeTzY5wdrqTSu1w",
  "key22": "5vZKjgNhPyhCJcE9xHwTryMvJvanwE1KUZkVKs689S2hGL36U7y9sdrsWtbVvk8LbQ8LeZrb1snfocQrEK9x3mCz",
  "key23": "nm5NvAqfM7ZAePUt2VEcw7B3GQTFf6o9VBRLAqqwSqWz1qRZgcBLQiuFEHJ6qCF64fVtxx9Up4B1dkoTMvS89Np",
  "key24": "5DekQdW7ySefXZQzvA5YGX2SLBZmZjCK4bgmFeT1vtv4vT8dnRTL8Kb3kpKyrbP4mrLnXgg7LVX8Drpbz2wtERVM",
  "key25": "4Jzq7dCbg1mhNCxybXC27YB5FstrrP32D4AA2bLg9jeqzMswHtPRJ3npVX51sYeRa823dDCZVvnUu9kgFW8hkGma",
  "key26": "ytUDmdmaCqgSaVF7UaVpMY41zG4VcVyCf8Vsxt9vfMuu5ffr7prEYTFQdReRDP51jTBkzLYhF6iLMswEXDopDEC",
  "key27": "5e5vCEzKcfooia4FKMzR3fHv24Tg7VkDx3u7NSSH9pF5S6915mJBHpHnXAszsSqbCsiwNsQM8V78zbDtPkD6KEhM",
  "key28": "FvZr8r49bLGiGGLcyc6jr1CRfwzez3jGryLnCMjvmHraKkygfwEAEV43UztjGv74yEKFQgJCro7mVdmETK4faXK",
  "key29": "2uRweWEmrZgGaednx98JPwz3uUr2vStda23V3Eb9UWi7WxNgzuRYFxW19bEjrHFNaPNLD14ewQwMWzSGRXyrRZiB",
  "key30": "2T3Gr3VUgDpAH1AzAHmyfvKV8ZxPRNZSzjtWyGuCB9y7PToY397squ1Aw6ch1BWxm5mQae5oP8fqamDURBtUyHvu",
  "key31": "2VpddebdBHyroL7xApGBaAoSnnsfHJ2foNzg2fKPVDdW2VTUXsk9PeiZp9vJf9YVbvG86K9HejwjbZQoRSQy5wYX",
  "key32": "2aDwXdHJkNknzEM5L6fHuhGktsnVgzYKY7BveymEk9mjSgfz7ECyzSqYjGoGukEP8yU1yfAtY8x8hjt4FmzdtNW8",
  "key33": "4uLtoL56Qtv2q84BfnyWM8vkbiVjTvF8YWtTiLvvFmxeLvJMfwEqyGTEZdW2fhkEWUwDy3dYfAm9K8nXwS3CfMDr",
  "key34": "32svjFaJE2jAzEYtDyM4SH3TRA8Wh3ziijQNC484iE597YZNJBguvhApmcNy4ieqrdmUBZ9un9vKnyYzdjR1wisz",
  "key35": "34A7ddVpYbgG5pHDoD47xayz8r7UQYFSD6t9AtfAYPo4P52tbCWazu8BKivuEiQM43UwKJWPUjLJXJStoqiL3ULE",
  "key36": "5a6Pqifzj1XyUrVeSAeZv3iqmB6i3EmEYZQmfJxjP1TmwkjsSppzh6qBaFrDyVKDPbRwq6bAEkhPXLdoDBejX7xq",
  "key37": "2dRTt394EouqXrNik3zP3dPudzS5XKhnw3yAnNqqHGQN48QJnuWjbJfD2QMmXXfNKnCexns7F9PbkEh1iYm3kHHN",
  "key38": "3xcDmbGpGZwaXzN1KFXRMxKGCbpTgHxyDA2RtFT77G3nqHAiCWFmQxNc5QbqHymuR3rq89tc2zYvjYcf45uJxZZn",
  "key39": "5CMaCKpN9AoVf9PVgsH2C3x92Ty39GSZT3rqArEyF43X9ENhzjxXbsfJBtDrAzmcZ1qaSvn9sWVk9VzFco38Atjo",
  "key40": "25KFZuU3EjETCtLm81mXs4w4ScrjjqZusAnB8GjLcZ8dkRqJ8CyGRowKn49JUwkRDbbgXm8eqLfatPbkPrCKKJ5y",
  "key41": "43LD2VNdxS4XG5LgamUXPzNDYh1TZZd2uUUrwTrYftiqi7TrwQgj6mmtz3k7MrnmPKBUYoFhBUKAoPkryYs6Go5S",
  "key42": "3HK8FaPFLAW1MxD5TVmtjcN7svZ1umgAY5wn7J3GdE4qeorqZb2tTUx6ZJE5ZCtUfx8c8b3mEPSJi2geoR4zswHZ",
  "key43": "2dj19FanCDxH74NDZako6WnKE2vKd6Lv7kqBmzprK5RgsVSY1HVPnnetNGssehvKcRdAPZnKJec2PMCfDYwFGR6E"
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

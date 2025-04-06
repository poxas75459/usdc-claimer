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
    "XJHj5zBVgJEZA6CUTxKG7fs7a9aeus4xwQg4hh3xbZmHfsnf7sxkP2ZuLBsBaJoRKhF6P4E8Q26jXzdukyqzeGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfTDED3BiR3oZK68TpAJKde7hcVJP9oTK89ytB78JnGLBtR8V8LVgZ2WDx2br8XhiWcVXKWuXkLGCCwss6pZBxj",
  "key1": "riPF68dMtFnC7VkrcDsUZZDLpWCMoiMwQXCcd1jg4kQ1JYivXhBYj919DaqjiM2b9CRVcWsmPYqyHzDarBk9Y68",
  "key2": "5qRyU97kuAAeM5Xd2QV42d3gx84HTxvQ3YLgR9cA7SBn7FfwKcp3re6sx9isgafhKMF49pBsKtWRQZD8837HoWsc",
  "key3": "5nhPPnC5gGewXyp3cBbgH4TPLXcjZAHnwpiuG28hEsRCnX8ztZXTdGwLAvL6Wf33dvibt9QDeuaSrp4kXjAd6rPT",
  "key4": "2ShhYonHd3ENzLjSLCY52ZXs2YXb6cp6Tdjxx6Xk1jKHWCN7m5bggCymaq42vbwf2t58A55ikdt717hemxGHGK4j",
  "key5": "3DXADvNn23fBZQeyP3rGzSbWRHbTnZeFWGBDKk9ciFTbEcuABoR7qhFMTmd2SMemLV4dNyWkpjHTsMcYGiXHNJvZ",
  "key6": "2TBKhPHo9mvAw8viFHxTDQdJ5j2wXktb4rTywRzwzLKeVeLetx8gJ4NtHaeCfToQUQGdY2d2MHhpejoYQp7Ye76D",
  "key7": "5cpBSQ6S8Ro1zu3Ryon7CcB5Aw6pQbZ9DPJy787Rxo6tX42eyoxhjGf2Mxbbm2QjzE6hbEvx1NcTb7yvEZCUVEYd",
  "key8": "4AdBidsH6i6FDSfyagkfoVXCKbD2oz1EHVL9EdQjkTcp1j65GXyQPU58r27tPFE4n4xzKCZtNsrY76ZZLWxHwem8",
  "key9": "3kpGBRGsqc1eBYM8zDUB53gKyKv3mVmU7BNxyGa8BKkHt4dxAkL9uxaaaDw7HPqGrQ7XPSDGJttbhTfQKyrf4vNz",
  "key10": "62bnE4eGYe7hVvdAXeatF9kxoepViVsyMnyhbdDPh3XTEE5Z3Sf1FqGGnuLmE6aLh3SqZmj68Ck5sZjFMwPtg2J5",
  "key11": "2xvgaJ6TwRaU6kcUFy8TQZ82ErSpwNcsPEaU1TH86LTFokPJrjQSprPzV2wyAh3L7m9NFnBWKW4uC9NxUZTNQQcB",
  "key12": "5Xg3EYjMhs5y15n786GvqtFbrfs2JxJRmmPJopcLGVPebHz4XT3YfFwziq8zVLEkhwDxH7XvPwd3jVrWU5A6irMd",
  "key13": "3q9zTLoH9eu4T9wQt9Zvm1XukwGFy6TEue25jZ33Gh2EezzBRuSXqbCHQFcjP6wki1XBYGNsvPXWJmapW6vLfLpB",
  "key14": "2gRtnBNTQ8X7NrZQmi1m76yHfqoGzEkwRMTXSazEFFjfs5YWj252fW5y82M51sci7MU8dCJhkFLeRqszeLdYjhUb",
  "key15": "4Rw73PLAv9aRh1bgYRCSb3g4q54sauRcUJidThsnDPtWLyLfLTFmGemRYXRgveRThWm1GX6qxheJ49sxcFNvkMXn",
  "key16": "Q6wWSUWyCuRJQG9w8jcT8Kc9VS5CCzi94xWqKzbebZj38sjTncJACgCmpBj2RZUdLWw6dzKJ6DdAGpHD8Vm8qTo",
  "key17": "2YAXzCxTMkpPKiGkBVmAs33DoQMBRoFYkMtNeLF5w2ApcYowXghTodZ9L5SEQuZgLKH9E3rNuMgHYgiQTZiHN8mh",
  "key18": "5PBNjoWc2Ezt74vBVDEoXVtUs1BazQ7m1DNDec4b1G51uVsNZ1x1JL5oZST9hw2aYbzmmBohHEZcUpbDEwFo3oBJ",
  "key19": "iwQM9swb2ZcsYBbgt8wxwq4fq1ha9BW2vM2p4zSdqEfUaTEv4tASCwZFDotm3eEfPotVJ3UC4kyUT7rVirP7R2V",
  "key20": "4yL1aiGeTMgSHVZdA3e931JobLQfetcAws9m57rkLjDDzBu1W5EHSoXQnTnnccLNoMXWtcQD7sL2FMvcTeorTVM2",
  "key21": "NFsuh5xfsQohWA4uCDMSb33MdXwdPGrqWmaKJVnAUECEZcYqMs84Sw7f9xFZ4Yq9M8jH5SX6wwA9j2nrnQr43s5",
  "key22": "BvgdoHuAfinVvKTUM6NU8yiRsDhf2LKPgfzt4ZtnSaLKdrG3UusB97k7igMnBViewvkyaA6qGZQFFmcjphf8zCF",
  "key23": "g9CiG5mcqwLdXELsCvGDHaqT3SRmFue6cMYf2NDrg9dbz45CvCT6Hk95iHupexAc3pwkbVFgmnYdGZeDiwTBrhW",
  "key24": "5hjYnCVK5sWJhzP8WQ9izEKZM2skmexeZCRJhAavZpERNfL7xzmxrVJSWdXpjuiy3K1ybxt1df1Pb3tMsw8JygqA",
  "key25": "PVSk7RfnisQa7hh2mzcoSnZNVshz3xf9ADZaVQMnr59mYyzYVpAQa87b1CdaFZijoGuzD1pa7Pn8dZvKkFJvk3y",
  "key26": "32nhLDnUx9E2dFwvWpwwYZ7gnKWoVqHW8TrmmsmpKQ4ag6YaoV16TJDf6DCL9f4LvyYEAUvMWQTccKVcz7tnCEBF",
  "key27": "4RX6yEcXQn3SH8edxkJJESneTP4sXbNeEakJ6oyLwruNejnerFa43CtdjFSJxEvSKzAa7zKGZ4WfAM8chbczEqs2",
  "key28": "4eTbGkjpPKkQ8dp16jMeXfA2WxpKkRVC1LP3K8Wuozuadxhpp55U4BMQFp8KN97tmSmJkqSGgi6SqsQVjx2tEatC",
  "key29": "3N8LQTKCPsXo2Pg66qqVESwu2eL5Bfw3RtU8pyjaWmZRvaM5peiD9Q5t9CWR2bmgeMftZzhtCV7ZtfW8rCKxhoXE",
  "key30": "2wh5w6D3hA1wtL7c8GWkjvhEhhj1t3HrXWdiAEVsTHTUYJkchqdHSqXJYvUwHVt7sjy33yRSX6SsVHy9fjhB4xks",
  "key31": "3SYCreUPU2jvYfC1bxA4bCec7x9pT9DcdqHt8tNBf1ebc4oh2MRuYLViNkaqKdJHy4VFxQhqNYaj86sd7aAeoLNM",
  "key32": "ETFpustWzWid5Tze6uCTkP1Zv2GfDUyv9X76D8GCCrVW3BZgAzzojGMNA8WHwGsySBkn6n6Q183GidzQRhS9n7g",
  "key33": "vaatRyMXNX1jfePiw5D1CwtZ62h2a16aVj9NHZUFMMm99udfGwV4ewEAs2R9sW3PBLjbZ2WSCCrMWshxDNXGGRd",
  "key34": "BRa2BnSxzN1Enqs9tAWrxwm4J7hd7qnfYqxEFs1BTXM17t7Lba1yGR3c8V5ztkgiESesiMLTfWSEp36NLdLAcgt",
  "key35": "3V17C6WLJQyURXLy5H9Cezq8qxAf5iia3Qh7PSUcb1gtDh8XFLTNa1pqnzivwzsmS8d2nu7umiK4biSjVTdmbFkC",
  "key36": "xY4VWvX3T8z7Boo1nFyv4bEDNBqSy3nVg6YnpcfS8jFUWDBu1HNqAWe4af3Z4fv8QqUKGKtBEu5YB277aukLBqe"
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

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
    "3wGEdeMuZdXtprxkk136iatDynFHhpYSSq9vvp4dv2SZuQ9BxYQDfsqZG6EiU3ZXR52dtx8Tfj27askjCK1Lh9wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48RiZMJzzb3v3hXJJkJUX4Z7pMB6c6QGC71Q6PVmbtvJH3wvJPm1815acQYZTE3y2rNPf3wxQ2CBtPN8bNNTPTs7",
  "key1": "AnxeVPLMVHc3qRTEGuWTcWGQxZuAdAcEfY9CUFFEpDEi4jvLi9GmTFsoptmJAPnkYQdKusfUQZLoaPSexn7NxqE",
  "key2": "2x44cShXgEwn3zp5nFraE9zdFyZy7oiLxfB69w8XfBCphfqNUaLPMcLPQf4iHg1fgpo5AwjdaW1mKgB5Q4UkQgaC",
  "key3": "4QiDK38s76fRBhgQAGzwDC1Y1KS7hj5KwQWpugixVnGvJeg2n7XEBsp8CKcxWZUqAb62ub1L2yJnj4DqFitQRuJG",
  "key4": "5pmvNZKrYt82wQps6TGy66LJdKmiqMUoDZrTcXLXw9CrZhCbC8EjeuAQpbSiKahHDaL6rnbuQVZomhPXxjgerxUt",
  "key5": "4Bx9BEsJe5WRQwvrioCHbTFGE2fsz1bmPQoKrRbzdW4cTp2HNLPWZE5H98xQgPPAUWqpMQkvgLkyBvsSyf5uYJMR",
  "key6": "5mgMxURadGniCwGHxjffqP5F6fJZrBLxz1vHikq5dD1kMgQRqM5E9tjDPiq4zfw2t3iqvGkZ653FNvkg4LS9CRPv",
  "key7": "yYvz6jxdmFz9nmbcGXD5ockA4pN5WkY7DTjTG38KgJRzcKQ8R4pxuT8hXR9Ne3KL6HhikeNkDAPMNTMUqvaM3v8",
  "key8": "3Ct557ARsx7xuRdHhNo7dmDrTi5Ccw2snrpzXzLHMF5dQLHAFJ8yyzCWP5jcTH79BNLbkpPxhMCAhc7ozU9gFhWv",
  "key9": "2D14rSk26VXhrK1QnVtDbhFSwL17xYDd4oCEyJ7MNP3dRaX951ZWsM8wYkYdrFsTiqEN75FCbpTmCSXSG16rpaYf",
  "key10": "97pqJNBhie9fheVu9Y5MTkfxUynAQKCewz5niauZKDWGspRXEMRQkksyJfGBjZBsxE2t1tyiUxKMNfv4GwbSASK",
  "key11": "5haNyQiiZhhMTU8h12X4vTLmqrqLBhYKZySAik3wL9PxEZJZ2g4TzVGFC16axKsHyfKcxhKiZ3mnn9CczCJhtZC4",
  "key12": "33DSXE4dQD2hVLHJnwHLRTp7SSX4xNhtr2kFzWSMwgQDeqa6va9pon47r92sy52EqunDjW8qqnyiPNyErJqXi8XF",
  "key13": "27eCvBhnKcZPKEcnWRZ43zb7B57iwucGRcxaSeCn8qGekxHbvd5emsAxZiYa713aA1dc2koXm8tF66Q272pgVSiQ",
  "key14": "5LHQj2T9Ac3Uo9cm6gjXh6f9UNQUyv9HLgnEuV7iZ7uucoNcN2ZdqQfGd23jzcBtBY4aEPYjcsS5GaB8VrshyAUf",
  "key15": "Fst3yvqAMjEjCjbnusaJXACGFEDpKHo2LXDTnPjNGjyzVMCEr4rEoJ7KGjQXJY6Qd6QNyvcGKRLWEQWTTqZ863N",
  "key16": "3cmH2rcytLeku6WuBvLzV7sLG5kPSLdiFKwjngTNXV54tc3UHiEWzZ2PArsEATmAi4GDywTdSAcYbtWrJLG3Eg6G",
  "key17": "4mwMkZFUYdtZzL2fZh3zgHz6y29JUCabyTyhRbiYcniz8Djm82a6wzpjNZAwGJ3onJyb1kMv9pfcMzheLtH51TgK",
  "key18": "5RaaxesxREeP71CUCoC3t4aXeFLrYtRGGxJ2EUVMKuqAKZqEpXk8mdwq2yUG7SQoWJeGm3U1vgQtRuxDxRKLJDNV",
  "key19": "4eJxGp197cn5HV3WmXkKaThdmriBBFCTBJJGfCBSGBuYbhQTRPyKbEj1A9RBHfW3a6mdafYVYFTFPjwKN4myfk12",
  "key20": "2Pdboa3n5BuGjsz4zMQdKLfTUn7Kwfbze2wPVJDUXiE7yTRRvhemdVizQm2XKomnmNbmZmn1h7gwHseZHJR1kAm6",
  "key21": "HY4qbYXmpQVrsrQg2Ej6iJgMGNHEKacWxiVF3ss5HnToMYKkRmZNzLMgxCX7pp4YbFxcx6ZWsjDPYJLdgi6vvDu",
  "key22": "2eRFhmdgvgXYqQERWMPKpc1jPbCc5UqfUXSBHaGyFaEBhv53b673mRsAJXubXXZXyDTW4pf8UAta5HCFHMizJXnC",
  "key23": "5vijbgsyREMnCYjezc8L5xe8BHidCYDBjsURmHYLJGqx2cq2qDZzjmKnPusxQsf4YWXMjHR3t8xP1WAFCqLnu14a",
  "key24": "4sjXJiP5nyP2CzZunK4YLDwMmTDfihhfvrZLJbKiY1qoRStE4sozCWyUoyo9bn7BAZKmau2ejpMbrG1tETogctFh",
  "key25": "4qVJBhPtyFyaRufurrQz2iCfcqev42QHfw7P7DpkpkSJvCnbhmDEQqKR3WDvdBXvcYT1CaFT6dZW35wuh2pCmysr",
  "key26": "5junLUTorYeJjspp7EAbTeXNFPD7HEbW8D6zjHNbZWMaqrAkij9YQpSvzHE2ytxatk1iZ6zemkXCG6BDvQzmzaUY",
  "key27": "JpDbeo5kwVWfqPqGnYe76QZs9etjtS9bhC5CXJKz3xMsPJR5MePkGH4gaTpxQCMoCdcWVhonvYNokS6XiXT6aPZ",
  "key28": "2veKd5A99nqorBvgLPtqnQC5EddBpFCruetb9WvTR4XyQ51vwsRCqYns81Wyn1WN4gzidsN3HWLkq43qnAQCZs3C",
  "key29": "NBHDkcCL3hm8HRiZXvTvmvXN3cX3PQp3Bqo268uox1HbL2HgfMeAGcNX578o5Eyd2eLdNcMs67CzN16NQWeWAyi",
  "key30": "3bNTaB31fcpPgpsYrouzj2s6NccUo3uXMXHNtzTZdbWVc8QydtfjUzDJpWUs7eAPZ45ym5GF4PGB5bmFroiaz3fW",
  "key31": "2CTwn55fuPD4wT7LUySE3ooY4iWszQGEYxR3pXArN7UgxkUapTHG1q2HUZCFWS6S1dRCCmkE52r5o86ghvpy7CV4",
  "key32": "317u9xCCie2QWSfKXQx5kvpmA4N9bwUbkEx1ej5mBQYLVLXgvCw9EoD29DL2SxQEinkUzSbtqd82jvoMvTCuXArQ",
  "key33": "2yx3n3PatVJFmuwfbMWWysuoYxUfHimVBhG3TGn9NjcvCduRNktXBVwRJzmobBd5Tvisq44L4hMrxsHw6QuxHU5m",
  "key34": "2Wf7sxPYd92SKTMriLEKqiDD3VmtfAFYwcYYu3chCseUEgFEW49vLATdFXN2tARXatEkS7rrVEs1wd7BG2B2eY78",
  "key35": "47hL2CW6BM3PeDGRAuThvSLmF5vqWg3yfn2i1DgKqCDBFAaUjxUp43cz3MN6WZotcsE1PWRtcpi8xdwyYiiGpGnC",
  "key36": "2DR7HRGDFhxBkmkLGaVNMmc7sk2YutRBWh6uW6sWYiA43UbKp8pka5HC5TRs5D6mJbYuzn1mMMrXeHR57PYBkUnq"
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

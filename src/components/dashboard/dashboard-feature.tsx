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
    "wFSyXxchikGWNbLTa5XpKmYx61PCE3EP7YMEdwsuD5GfBkLz8kFoiCaUXYB3nb5QAqBr6wF727TfvKfGCaRYJGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZjABkx77qxVnMB2in8Y9vv8fpWUmUXP8ZToo7UipV2eZSt3Wd73w78zHZJ8WDDWy6TsjBYLRBFUm9AtJiJrrd5m",
  "key1": "6Lpr7vPHrGFCNWWRFwjZJpJn1iWdX9yPXMhtA7DuapwMcnFt6rUceXoekD9sVpE2kUGj2N39h5QcTTG85bSHWhs",
  "key2": "k9pVgytGnPNqytSLG5AvA38cfTpcEh1F3cPtj5htJvKgvqM8V7a98dmeKnD6NKoBhWCgE7YgKda2PbSDhkiFdhK",
  "key3": "3mmqKZQfBNuZRPehua14YTNVDYgz42y8E9hXoWj9KLdvEwDUAQgQrtZQYU7wuUqxDE4j9wEaDNYQ2VgwvqxK88mh",
  "key4": "yRivjhM2p8NpssghXHqSSeMQqRCngrB2G9NPtNzD1EZkXwzRVjSptKm9UC7mp5CpGzME3jNdN34reJsJVGspop6",
  "key5": "5hxDGCKTuhwd4ofraBG6MHdkxc8Xqx7oCwhfEdt1W1ii1ARZU5TwL3qBmXbiaQvTtVwVdwTJtt7cLCL3HqAVnMqZ",
  "key6": "5yqN2c4kDt5HorNRxaKi2f1yXzYbovxnc8pZ7iUvwxRhSM7YhgTrFQxnwrARSsHc92tMu8Fv2wHLyhow6cp9zUg8",
  "key7": "4h1mAnkC2KcHsneTabbcgknpv5bRo8nuFjndGK1Bjv6By6dr8WvLeAEMctAeJk2pJUEJZeVhuXsEYse5Zg1QM9Cb",
  "key8": "4DbGZ9tE6WfCjh2MxckLs5Jw5X3Yk6RpNXMPuz9q5DcUQhtNZCsNAsnLtxnHjX9k65tFH3UnPdHvRsbEFYes9wYs",
  "key9": "3DZ6uC9rZB4GR1W4a98kpimduyiX1zzX2tv2ZcXvwzPPz7md4p9jxWBneFVJNHQBMruev9kgJ1yLAoxwPMpahiio",
  "key10": "3aPyNSWzu8dTgTTZt27ZhC6PjN6XFfXh3MW24VE6nbBFYoo3ce8Qj5sjFXc7U9kQFNnZuNs8qQpoQekziuyrMKN4",
  "key11": "3XNCosVU5iQXpzpmEQutjdsexWGecm56uyKMuT2XUDc8zsrzCQxFm342wDUUArqCUEHjdat3eKoWWm7HMTWWVzB6",
  "key12": "reMsb7SGq94JZAMnixgTNqtj53p2XtzaEoEDX2iQwpcPJKHFfeynejYyM3ykGeeZKRQqdst2ovThfcWwk2tdDdB",
  "key13": "1hh1hricDiTE6jL3d2jnDoX3KmViCELoTDhgvqiUyYV4UyXP1ayL8VLmXJFCpfiTbAMUQ9yDRdgJo7Ykqr2c1B7",
  "key14": "3bJcrk3gHXYkmwLSUcNjSW4WCnGWqum6wzr4HSqLS6BHPL7qreVzWJAwEUGbjmKCSTEeSTrCkSuVjbtTdNYVuDRj",
  "key15": "4iFCGN2PB3i6tDZiNtjoVghzZQ2UM9dG4MxgsxFUXqCoLDAQa4xGZS5BMJPaHSwPM5RN9XQdgPcZ4PFB6CNz8V3x",
  "key16": "3KiKmghbbU2PPkCCmdjaPe8nX4AtBiiQ9RAtNECFw7ouzM2BsE4769frzFApa3f3GinFhiE3is69pu2bUNrU42zh",
  "key17": "46w59DKRBEggkhTCaymhkRy9aT8LViDNwbyFhzsVipP2LRojcUGW6iQhZaNFVgFv94jxaA9iQJZzV7umeg5VhxDe",
  "key18": "5etLZhCq2939oNUX36UnCv2Pc86Ps2vsftaemp1Qg83Gk4aN7h7Vw5BRJvrcgxtmS3GQoUrhH4z9xRgU1KpGLmVV",
  "key19": "3zFnvB9dQof9drBLxvR3MiYU5JocDvnGwf25drm6ChL4NL5jRrjhu79LDJW8UA5TACURvwzAQ6F3XKwXxFT3krf6",
  "key20": "TZq4C8Tx9xRRUwF7V7FRtLEGPpiESZAe6yGmSCewcvANJbEX4rNWQhaqw9NHMC5tPYtgs3oanN4dFfgpEb336ao",
  "key21": "5CMSNFHQAeePezsVqJsVe5jpcRga5Wd8Dzh6Sx5tLFGS2wboFExzdHLyqfTLmCGqVboF78Hy8AecYApPKs6Eg2pW",
  "key22": "3W7hggb1ezC2oAyWLf3rkj2YtpTvZps6B4GLXRqL43e5EtevvJgPJPEsv9Pk4Mo1pox5qx3imjm8LTeictrRMEg6",
  "key23": "4tRQsSDZECG3HSE9J9USrrWB4U4ytxZErhJZ4q5Xtx4hTgymJyHgBfPEMa76UNBD45pod1w3m4mpdK5g3nU6uAo5",
  "key24": "3T9TDTDhgPgjR6JzyTA4JNAWPu7dDrWwShKP98q946CsqfeyDfwuF8TtLP9wT3XWSRzBm7r7xKF7qGanj2sioHYK",
  "key25": "5CcKLquoe6QFmzAvCvp36hu1Eunf11qrifvqM6t5oPAbNH84eWiK6HCPP6kHhZy36eMrLre9UrDnFD3G5z7BzueA",
  "key26": "5GQoBFuyhcvuhr2YNkC2CYD2yBdLhZ8yrvSznDWLnYWQAcQF6cJ7VMPzhDpRAjKJBoedMB8D5JVwDb3Wq6E1kd8p",
  "key27": "3M9fh2oaen5PwuTAKCpincNcbNYvxPTLb2YTYg5U3n5TYwoNUYM6o2zfzbXCGtSft9JadhSxhHsGn2UDYekbEcnV",
  "key28": "eAGpqR8Kga4frx86xogPX5r7bKBuuf86sniNRa9SG3UZCZjVPyovUGq8TmGbnq53HXhrkwgMGbFS94VtK2pi6q9",
  "key29": "3YBc9buvhtJHMuEN6XKhTbvJSb8p931awpiAka19sQhofsyUZWSTmr8gPTDauwJJ694j4mvuUZzwyVxLaizY4VXU",
  "key30": "4q6koMq6AtBL5P9WZjVDz7K4C8b6Lr3tB56aJ7KqBuhij5myQYvPHV4drX8ehKKn5iWcDF2HMJBw9xn75CtQ47C2",
  "key31": "46oQk9oneF8iv5qUaKqECGCLHr3PNntYaeSUrarzHiNMZtYPat35VLvwHfSfux5YQ5HQTjtsCM3zHUNSGvbVjumn",
  "key32": "2p2puyvPrUTtFoKZLg1RDe9ivdsojgTu7PUoXhGqXXwoVE6AFiWz6zYj8jLxfkwABqsAsX75j1NZdzkpfp2yCTeY",
  "key33": "n1ahRXmtaJM9JGB5KyNNJf14tU35dXACauj3tSPU4HVRzKCoUx9rmVTizfTTVB1pdyGwAUrJiqtaq2JqcrwnNg5",
  "key34": "3M4HueAQR3YnKQZbnVKZXtdybdBE5Az88Uv6D3s4zH6Dqxbt1M6nG1Gzc8hStaD4abpAVZAr7TwgWjpVnNi9x2sG",
  "key35": "Ra3xZrfYCecccKkpMpdNPuGRvhCrgqVEx62bpazFPofAtLYTEzukj7LXdF9JHb1mLGCRxTSWmi5RvcFBjQBautW",
  "key36": "5vxp7cSataTmpWjsooV83hQWaBYFW4ShtQL5dEVZ7UuhfwSNtaevhR43RQ2SgXEGaVw6i7DEt4xF6GhS3LbguULg",
  "key37": "5pH3Zta6jyiSzeyBw5peJN42Y5mUPLEg6hVqfjkiXte3VfTRqHhtmzEnhrc2wx7dW5FJ9tHNfMWqbs2pS8HoCBds",
  "key38": "5vfw1dRsKFNMH11ziQGXB9mZ7ysLZLX5N4uwVNei6VrSRmMvduqmJaDyKeG5WwtyEHp87uF8GL1ET3caQKLAbPyr",
  "key39": "xvKZeppZA5uiQjDG7QfUKgKjidEDYAMDdaQ1aiexuhG2miXn4BBMkE9jbUSK5tbfUkNSFsa9QBMr51znKvEjGai",
  "key40": "4TYChk9xpszzaLTeCuXY9GPwSPCDxzesSjnnn1TqA6LLvZz8bdS4Bi88dMQ4gmvQusr53i9wNKQuXT9r4AXH7mh",
  "key41": "4ELgcqY3FkyfGyTYBiZc1maPwwkRJbggQe1mXYmu1eVcU9yrhJpSk26tSt6co3eZoZgbtfoNEemDf9DpeuKxVRUw",
  "key42": "532RTyuBvQKQZ8jqhescCyC4bbhpscCXSeoknFVrcsSQhZET1S2MmTiQyA3nEykbm4p4CSBx3U1N76WFjQTRcE6e",
  "key43": "vmg36mZCKgtKbyZLwXmLqzh1oEUgSJRqXu9WUJXvzvLNQ8hABgsopFTk3U8xScHkEPXX7Tr8f4j86NqwBnCho8G",
  "key44": "5NxrUCxpfEuMMxWRK45dNi1TRr9uveTCKd2gKZPAggiGFV4SrDbFm1XsV9VdufovR9U6Fp9cRRfjtToBupTaKmvn",
  "key45": "2GJGiydbuVjYTTpiF6TuUoJS7CG8S9QtE44WVSHtmNngxy57vB3NS9rafyDRfGLzCMfZ2g1E3ZtqfU18UMwD79Dg",
  "key46": "38QrZgHjbrgjdnu9WV1VDXJw7ASwm44xuDqDAAsauVJcgRGCchg2JBn1fmB4aBfTNPD1QW1YG3rwPnM5NwfmEHTt",
  "key47": "3VP6Fo7HrKDMVSUnrWfnVH3qSphR36NSoqUUHvZTVm8BoegoAVFV8gHPcYD4k2YfUYU2CkzajiCauvLGegJxr4Nu",
  "key48": "2YSxkEoRh3q4AkWtG1WUUxWFeJyPjPKRiuGSByieK7GWLGVLWMFvR4btNTFooBzEe2aGcGqMroo2WBSc2X9g4mWo"
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
